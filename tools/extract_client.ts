import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve, sep } from "node:path";
import { crc32 } from "node:zlib";
import type { ExpressionStatement } from "estree";
import { unzipSync } from "fflate";
import { ParseJavascript } from "./dump_javascript_paths.ts";
import { GetStringValue } from "./extract_strings.ts";
import { FormatFiles } from "./format_files.ts";
import { GenerateCleanJs } from "./generate_clean_js.ts";
import { Log } from "./log.ts";

export const linuxArchivesPath = ".support/linux_archives";
export const linuxArchiveManifests = [
	"ClientManifest/steam_client_publicbeta_steamrt64",
	"ClientManifest/steam_cmd_publicbeta_steamrt64",
];
export const archiveNamePattern = /"([a-z0-9_]+\.zip)\.([a-f0-9]{40})"/g;

const toolsDir = import.meta.dirname;
const rootDir = join(toolsDir, "..");
const linuxBinsDir = join(rootDir, ".support", "linux_bins");
const steamRuntimeDir = join(linuxBinsDir, "steamrt64");
const linuxArchivesDir = join(rootDir, linuxArchivesPath);
const clientExtractedDir = join(rootDir, "ClientExtracted");
const clientCleanDir = join(rootDir, "c", "ClientExtracted");
const protobufsDir = join(rootDir, "Protobufs");
const stringsDir = join(rootDir, "Strings");

const isWindows = process.platform === "win32";
const runtime = isWindows ? "win-x64" : "linux-x64";
const exeSuffix = isWindows ? ".exe" : "";

const protobufDumperProject = join(toolsDir, "SteamKit", "Resources", "ProtobufDumper", "ProtobufDumper");
const protobufDumper = join(protobufDumperProject, "bin", "Release", runtime, "publish", `ProtobufDumper${exeSuffix}`);
const dumpStringsDir = join(toolsDir, "DumpStrings");
const dumpStrings = join(dumpStringsDir, `DumpStrings${exeSuffix}`);

// Dumped strings can be tens of megabytes.
const maxOutputSize = 1024 * 1024 * 1024;

const jsonParsePattern = /exports=JSON\.parse\(('[^\n]*'|`[^\n]*`)\)/;

interface ArchiveEntry {
	name: string;
	crc: number;
}

export async function ExtractClient(): Promise<void> {
	BuildTools();
	CleanupExistingFiles();
	ExtractArchives();
	DumpProtobufs();
	DumpStringsFromBinaries();
	await ProcessJavascript();
	FixEncodings();
	DeleteDirectory(linuxBinsDir);

	Log("{green}Done extracting client");
}

function BuildTools(): void {
	Log("Building tools");

	const projectFile = `${protobufDumperProject}/ProtobufDumper.csproj`;

	execFileSync("dotnet", ["clean", "--configuration", "Release", projectFile], { stdio: "inherit" });
	execFileSync(
		"dotnet",
		[
			"publish",
			"--configuration",
			"Release",
			"-p:PublishSingleFile=true",
			"--runtime",
			runtime,
			"--self-contained",
			projectFile,
		],
		{ stdio: "inherit" },
	);

	execFileSync("go", ["build"], { cwd: dumpStringsDir, stdio: "inherit" });
}

function DeleteDirectory(dir: string): void {
	rmSync(dir, { recursive: true, force: true });
}

function CleanupExistingFiles(): void {
	Log("Deleting existing files");

	DeleteDirectory(linuxBinsDir);
	DeleteDirectory(clientExtractedDir);
	DeleteDirectory(clientCleanDir);
	DeleteDirectory(protobufsDir);
}

function DeleteUnlistedArchives(): void {
	const listedArchives = new Set<string>();

	for (const manifest of linuxArchiveManifests) {
		const manifestPath = join(rootDir, manifest);

		if (!existsSync(manifestPath)) {
			throw new Error(`Manifest not found: ${manifest}`);
		}

		const data = readFileSync(manifestPath, "utf8");
		const archives = [...data.matchAll(archiveNamePattern)];

		if (archives.length === 0) {
			throw new Error(`No archives listed in ${manifest}`);
		}

		for (const [, archiveName] of archives) {
			listedArchives.add(archiveName);
		}
	}

	for (const archivePath of FindFiles(linuxArchivesDir, [".zip"])) {
		const archiveName = basename(archivePath);

		if (!listedArchives.has(archiveName)) {
			Log(`Deleting unlisted archive ${archiveName}`);
			unlinkSync(archivePath);
		}
	}
}

function ExtractArchives(): void {
	DeleteUnlistedArchives();

	Log("Extracting archives");

	const listing: ArchiveEntry[] = [];

	for (const archivePath of FindFiles(linuxArchivesDir, [".zip"])) {
		const archiveName = basename(archivePath);
		let files: Record<string, Uint8Array>;

		try {
			files = unzipSync(readFileSync(archivePath));
		} catch (error) {
			throw new Error(`Failed to open archive ${archiveName}: ${error}`, { cause: error });
		}

		const isBinsArchive = archiveName.includes("bins") || archiveName.includes("runtime_");
		const extractDir = isBinsArchive ? linuxBinsDir : clientExtractedDir;

		mkdirSync(extractDir, { recursive: true });

		for (const [name, data] of Object.entries(files)) {
			const entryName = name.replaceAll("\\", "/");
			const path = resolve(extractDir, entryName);

			if (!path.startsWith(resolve(extractDir) + sep)) {
				throw new Error(`Archive entry escapes the extraction directory: ${name}`);
			}

			if (entryName.endsWith("/")) {
				mkdirSync(path, { recursive: true });
			} else {
				mkdirSync(dirname(path), { recursive: true });
				writeFileSync(path, data);
			}

			listing.push({ name, crc: crc32(data) });
		}
	}

	listing.sort((a, b) => Buffer.compare(Buffer.from(a.name), Buffer.from(b.name)));

	const lines = listing.map((entry) => `${entry.crc.toString(16).padStart(8, "0")} ${entry.name}`);

	writeFileSync(join(clientExtractedDir, "ClientContentLinux.txt"), `${lines.join("\n")}\n`);
}

function DumpProtobufs(): void {
	Log("Dumping protobufs");

	if (!existsSync(protobufDumper)) {
		throw new Error(`ProtobufDumper not found: ${protobufDumper}`);
	}

	mkdirSync(protobufsDir, { recursive: true });

	const binaries = [
		join(steamRuntimeDir, "steamui.so"),
		join(steamRuntimeDir, "steamclient.so"),
		join(steamRuntimeDir, "streaming_client"),
	];

	for (const binary of binaries) {
		if (!existsSync(binary)) {
			throw new Error(`Binary not found: ${binary}`);
		}

		execFileSync(protobufDumper, [binary, protobufsDir], { maxBuffer: maxOutputSize });
	}
}

function DumpStringsFromBinaries(): void {
	Log("Dumping strings");

	const steamBinaries = [
		join(clientExtractedDir, "steamrt64", "steam"),
		join(steamRuntimeDir, "steam-launch-wrapper"),
		join(steamRuntimeDir, "steam_monitor"),
		join(steamRuntimeDir, "steamsysinfo"),
		join(steamRuntimeDir, "steamwebhelper"),
		join(steamRuntimeDir, "streaming_client"),
	];

	if (!existsSync(dumpStrings)) {
		Log("{yellow}DumpStrings not found");
		return;
	}

	mkdirSync(stringsDir, { recursive: true });

	for (const file of FindFiles(steamRuntimeDir, [".so"])) {
		if (dirname(file).includes("pv-runtime")) {
			continue;
		}

		DumpStringsFile(file);
	}

	for (const binary of steamBinaries) {
		if (existsSync(binary)) {
			DumpStringsFile(binary);
		}
	}
}

function DumpStringsFile(file: string): void {
	Log(`Dumping ${basename(file)}`);

	let output: string;

	try {
		output = execFileSync(dumpStrings, ["dump", "-format", "elf", "-sort", "-mask-protobufs", file], {
			encoding: "utf8",
			maxBuffer: maxOutputSize,
		});
	} catch {
		Log(`{lightred}Failed to dump strings from ${basename(file)}`);
		return;
	}

	const lines = output.split("\n");

	if (lines[lines.length - 1] === "") {
		lines.pop();
	}

	const uniqueLines = new Set(lines.map((line) => line.replace(/[ \t\v\f\r]+$/, "")));
	const outputFile = join(stringsDir, `${basename(file, ".so")}.txt`);

	writeFileSync(outputFile, `${[...uniqueLines].join("\n")}\n`);
}

// Empty objects are written as empty arrays.
export function EmptyObjectToArray(_key: string, value: unknown): unknown {
	if (typeof value === "object" && value !== null && !Array.isArray(value) && Object.keys(value).length === 0) {
		return [];
	}

	return value;
}

export function ExtractJsonFromWebpack(filename: string): boolean {
	const data = readFileSync(filename, "utf8");
	const match = jsonParsePattern.exec(data);

	if (match === null) {
		return false;
	}

	const program = ParseJavascript(match[1]);
	const statement = program.body[0] as ExpressionStatement;
	const value = GetStringValue(statement.expression);

	if (value === null) {
		throw new Error(`Failed to read the JSON string in ${filename}`);
	}

	const newFilename = filename.replace(/(-json)?\.js$/, ".json");
	const json = JSON.parse(value, EmptyObjectToArray);

	writeFileSync(newFilename, `${JSON.stringify(json, null, 4)}\n`);
	unlinkSync(filename);

	return true;
}

function FindFiles(dir: string, extensions: string[]): string[] {
	if (!existsSync(dir)) {
		return [];
	}

	return readdirSync(dir, { recursive: true, withFileTypes: true })
		.filter((entry) => entry.isFile() && extensions.includes(extname(entry.name)))
		.map((entry) => join(entry.parentPath, entry.name))
		.toSorted();
}

async function ProcessJavascript(): Promise<void> {
	Log("Processing javascript");

	const directories = [
		join(clientExtractedDir, "steamui"),
		join(clientExtractedDir, "clientui"),
		join(clientExtractedDir, "siteserverui"),
	];

	const files: string[] = [];

	for (const dir of directories) {
		files.push(...FindFiles(dir, [".js", ".css"]));
	}

	const filesToFormat: string[] = [];
	let jsonFiles = 0;

	for (const file of files) {
		const relativePath = relative(clientExtractedDir, file);
		const filename = basename(file);

		if (extname(file) === ".js") {
			if (!filename.startsWith("libraries~") && ExtractJsonFromWebpack(file)) {
				jsonFiles++;
				continue;
			}

			if (filename !== "manifest.js" && filename !== "licenses.js") {
				const cleanFile = join(clientCleanDir, relativePath);

				mkdirSync(dirname(cleanFile), { recursive: true });

				try {
					GenerateCleanJs(file, cleanFile, false);
					filesToFormat.push(cleanFile);
				} catch (error) {
					Log(`{lightred}Failed to clean ${relativePath}: ${error}`);
				}
			}
		}

		filesToFormat.push(file);
	}

	Log(`Extracted json from ${jsonFiles} files`);

	await FormatFiles(filesToFormat);
}

function FixEncodings(): void {
	Log("Fixing encodings");

	execFileSync(dumpStrings, ["fix-encoding", "-ext", "txt,xml,cfg,res", clientExtractedDir], { stdio: "inherit" });
}
