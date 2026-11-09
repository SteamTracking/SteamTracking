import { createHash, hash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { unzipSync } from "fflate";
import { EmptyObjectToArray, ExtractJsonFromWebpack } from "./extract_client.ts";
import { ExtractStrings, FormatStrings } from "./extract_strings.ts";
import { GenerateCleanJs } from "./generate_clean_js.ts";
import { ExtractHermesStrings } from "./hermes.ts";
import { Log } from "./log.ts";
import { HandleSsrPage, IsSsrFile, ssrRequest } from "./ssr.ts";
import { rootDir, state } from "./state.ts";
import { GetSavedPath, IsEnglishChunk } from "./vite.ts";

const apkFile = ".support/archives/steam-android.apk";

const clientArchiveFolders = new Map([
	["ClientManifest/steam_client_publicbeta_steamrt64", "linux_archives"],
	["ClientManifest/steam_cmd_publicbeta_linux", "linux_archives"],
]);

/**
 * Handles a downloaded file. Contains no await, so concurrent downloads never interleave in here.
 * Returns true when the file changed, and throws when the response is not usable.
 */
export function HandleResponse(originalFile: string, body: Buffer, url: string): boolean {
	const isSsr = IsSsrFile(originalFile);
	let data = body.toString("utf8");

	if (originalFile === "API/SupportedAPIList.json") {
		return SaveApiInterfaces(data);
	} else if (clientArchiveFolders.has(originalFile)) {
		QueueClientArchives(originalFile, data);
	} else if (originalFile === "Random/Jobs.json") {
		const jobs = FormatJobs(data);

		if (jobs === null) {
			throw new Error("Invalid Jobs JSON");
		}

		data = jobs;
	} else if (originalFile === "Random/SteamMobileApks.txt") {
		const apkLinks = data.match(/https:\/\/[\w./-]+\.apk/g);

		if (apkLinks === null) {
			throw new Error("Failed to find apk links");
		}

		const mediaLinks: string[] = [];

		for (const apkLink of apkLinks) {
			mediaLinks.push(apkLink.replace(/^https:\/\/[^/]+\//, "https://media.steampowered.com/"));
		}

		data = `${mediaLinks.join("\n")}\n`;

		const path = join(rootDir, originalFile);

		if (existsSync(path) && data === readFileSync(path, "utf8")) {
			return false;
		}

		for (const mediaLink of mediaLinks) {
			if (mediaLink.includes("/apps/steam-android/")) {
				state.urlsToFetch.push({ url: mediaLink, file: apkFile });
			}
		}
	} else if (originalFile === ssrRequest) {
		return HandleSsrPage(data, url);
	} else if (isSsr) {
		// Raw ssr files keep their version query strings
	} else if (originalFile === apkFile) {
		return HandleApk(body);
	} else if (originalFile.endsWith(".zip")) {
		return HandleZip(originalFile, body);
	} else if (originalFile.endsWith(".html")) {
		if (!data.includes("</html>")) {
			throw new Error("Response is not a complete html page");
		}

		data = data.replace(/[&?]v=[a-zA-Z0-9.\-_]{3,}/g, "?v=valveisgoodatcaching");
		data = data.replaceAll("akamai.steamstatic", "fastly.steamstatic");
		data = data.replaceAll("_cdn=akamai", "_cdn=fastly");
	} else if (originalFile.endsWith(".css") || originalFile.endsWith(".js")) {
		data = data.replace(/(\.(?:js|png|jpg|svg|css)[&?]v=)[a-zA-Z0-9.\-_]{3,}/gi, "$1valveisgoodatcaching");
	}

	mkdirSync(dirname(join(rootDir, originalFile)), { recursive: true });

	if (IsTracked(originalFile, isSsr)) {
		return SaveTracked(originalFile, data, isSsr);
	}

	return SaveUntracked(originalFile, data);
}

function IsTracked(originalFile: string, isSsr: boolean): boolean {
	return (
		isSsr ||
		originalFile.includes("/applications/") ||
		originalFile.startsWith("www.dota2.com/") ||
		originalFile.startsWith("www.counter-strike.net/") ||
		originalFile.startsWith("www.playdeadlock.com/") ||
		originalFile.includes("/webui/") ||
		originalFile.includes("/legacy_web/") ||
		originalFile.includes("/partnermenu/")
	);
}

function SaveUntracked(originalFile: string, data: string): boolean {
	const file = join(rootDir, originalFile);

	if (existsSync(file) && data === readFileSync(file, "utf8")) {
		return false;
	}

	writeFileSync(file, data);

	return true;
}

/**
 * Saves a file whose changes are tracked, along with its clean copy.
 * The hash of the downloaded data is stored last, so a failure leaves the file to be processed again.
 */
function SaveTracked(originalFile: string, data: string, isSsr: boolean): boolean {
	const file = join(rootDir, originalFile);
	const savedFile = join(rootDir, GetSavedPath(originalFile));
	const unmodifiedHash = createHash("sha256").update(data).digest("hex");

	if (state.hashes[originalFile] === unmodifiedHash && existsSync(savedFile)) {
		return false;
	}

	if (IsEnglishChunk(originalFile)) {
		const strings = ExtractStrings(data);

		writeFileSync(savedFile, FormatStrings(strings));

		state.hashes[originalFile] = unmodifiedHash;

		return true;
	}

	if (originalFile.endsWith("_english-json.js")) {
		writeFileSync(file, data);

		if (!ExtractJsonFromWebpack(file)) {
			unlinkSync(file);

			throw new Error(`No JSON found in ${originalFile}`);
		}

		state.hashes[originalFile] = unmodifiedHash;

		return true;
	}

	// Content hashes change with every build and would mark every importing file as changed
	data = data.replace(/\.(js|css)\?contenthash=[\w-]{8}/g, ".$1");

	writeFileSync(file, data);

	const cleanFile = join(rootDir, "c", originalFile);

	if (isSsr) {
		state.updateSsrUrls = true;
	}

	if (file.endsWith(".js")) {
		const isViteFile = originalFile.includes("/applications/");
		const isLocalization = originalFile.includes("/localization/");

		if (isViteFile) {
			state.updateViteUrls = true;
		}

		if (!originalFile.endsWith("/manifest.js") && !isLocalization) {
			mkdirSync(dirname(cleanFile), { recursive: true });

			GenerateCleanJs(file, cleanFile, isSsr);

			state.filesToFormat.add(cleanFile);
		}

		state.dumpJavascriptFiles = true;
	} else if (isSsr && file.endsWith(".css")) {
		mkdirSync(dirname(cleanFile), { recursive: true });

		writeFileSync(cleanFile, data);

		state.filesToFormat.add(cleanFile);
	}

	state.filesToFormat.add(file);
	state.hashes[originalFile] = unmodifiedHash;

	return true;
}

/**
 * Parses JSON with empty objects turned into empty arrays, which is how the tracked files store them.
 * Returns null when the text is not valid JSON.
 */
function ParseJson(text: string): unknown {
	try {
		return JSON.parse(text, EmptyObjectToArray);
	} catch {
		return null;
	}
}

function SaveApiInterfaces(data: string): boolean {
	const list = ParseJson(data) as { apilist?: { interfaces?: { name: string }[] } } | null;
	const interfaces = list?.apilist?.interfaces;

	if (!interfaces) {
		throw new Error("Invalid API list");
	}

	for (const apiInterface of interfaces) {
		const file = join(rootDir, "API", `${apiInterface.name}.json`);

		writeFileSync(file, `${JSON.stringify(apiInterface, null, 4)}\n`);
	}

	return true;
}

function QueueClientArchives(file: string, data: string): void {
	const folder = clientArchiveFolders.get(file);
	const archives = [...data.matchAll(/"([a-z0-9_]+\.zip)\.([a-f0-9]{40})"/g)];

	if (archives.length === 0) {
		Log(`{yellow}Failed to find any archives in ${file}`);
		return;
	}

	for (const [, archive, archiveHash] of archives) {
		const path = `.support/${folder}/${archive}`;

		if (state.clientArchiveHashes.has(path)) {
			Log(`Archive ${path} is already queued`);
			continue;
		}

		const fullPath = join(rootDir, path);

		if (existsSync(fullPath) && hash("sha1", readFileSync(fullPath)) === archiveHash) {
			Log(`Archive ${path} is already cached`);
			continue;
		}

		Log(`Archive ${path} is queued with checksum ${archiveHash}`);

		state.clientArchiveHashes.set(path, archiveHash);
		state.urlsToFetch.push({
			url: `https://client-update.fastly.steamstatic.com/${archive}.${archiveHash}`,
			file: path,
		});
	}
}

/**
 * Returns the jobs as pretty printed JSON.
 * The ids are integer-like keys that JSON.parse would reorder, so their order is read from the text.
 */
function FormatJobs(text: string): string | null {
	const jobs = ParseJson(text) as Record<string, unknown> | null;

	if (jobs === null) {
		return null;
	}

	const lines: string[] = [];

	for (const match of text.matchAll(/[{,]"(\d+)":\{/g)) {
		const id = match[1];
		const job = JSON.stringify(jobs[id], null, 4).replaceAll("\n", "\n    ");

		lines.push(`    "${id}": ${job}`);
	}

	if (lines.length === 0) {
		return "[]";
	}

	return `{\n${lines.join(",\n")}\n}`;
}

function HandleApk(body: Buffer): boolean {
	Log("Dumping strings from the mobile app");

	const bundleName = "assets/index.android.bundle";

	mkdirSync(join(rootDir, ".support/archives"), { recursive: true });
	writeFileSync(join(rootDir, apkFile), body);

	const files = unzipSync(body, { filter: (entry) => entry.name === bundleName });
	const bundle = files[bundleName];

	if (bundle !== undefined) {
		writeFileSync(join(rootDir, "Random/SteamApkStrings.txt"), ExtractHermesStrings(bundle));
	} else {
		Log(`{yellow}Failed to find ${bundleName} in the mobile app`);
	}

	return true;
}

function HandleZip(file: string, body: Buffer): boolean {
	if (hash("sha1", body) !== state.clientArchiveHashes.get(file)) {
		throw new Error(`Checksum mismatch for ${file}`);
	}

	const path = join(rootDir, file);

	mkdirSync(dirname(path), { recursive: true });
	writeFileSync(path, body);

	state.extractClientArchives = true;

	return true;
}
