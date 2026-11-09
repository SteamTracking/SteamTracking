import { existsSync, readdirSync, unlinkSync } from "node:fs";
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join } from "node:path";
import { Syntax, traverse } from "estraverse";
import type {
	AssignmentExpression,
	Identifier,
	ImportDeclaration,
	ImportExpression,
	Literal,
	MemberExpression,
	Node,
	Property,
} from "estree";
import { ParseJavascript } from "./dump_javascript_paths.ts"; // also fixes estraverse Syntax and VisitorKeys
import { ExtractStrings, FormatStrings, GetStringValue } from "./extract_strings.ts";
import { languages } from "./languages.ts";
import { Log } from "./log.ts";
import type { UrlToFetch } from "./state.ts";
import { ReadLines, rootDir, state } from "./state.ts";

type ClientAssets = Record<string, { href: string }[] | undefined>;

export const ssrRequest = "SSR";

const ssrUrlsPath = join(rootDir, ".support/urls_from_ssr.txt");
const cdn = "https://cdn.fastly.steamstatic.com";

// pathPrefix is where the CDN serves the site's SSR files from.
const sites = [
	{ folder: "store.steampowered.com/ssr", pathPrefix: "/store/ssr/", stringsFile: "Strings/store_ssr_english.json" },
	{
		folder: "steamcommunity.com/ssr",
		pathPrefix: "/steamcommunity/public/ssr/",
		stringsFile: "Strings/community_ssr_english.json",
	},
	{
		folder: "partner.steamgames.com/ssr",
		pathPrefix: "/appmgmt/ssr/",
		stringsFile: "Strings/partner_ssr_english.json",
	},
];

// Matches "russian" and "sales_russian.json"
const languageKeyPattern = new RegExp(`^(?:.*_)?(${languages.join("|")})(?:\\.json)?$`);

/**
 * Queues the SSR assets listed by a page, which is an SSR entry in urls.txt.
 */
export function HandleSsrPage(data: string, url: string): boolean {
	const match = /"clientAssets":(\{[^\n]+?\}),"/.exec(data);

	if (match === null) {
		throw new Error(`Failed to find SSR on ${url}`);
	}

	let assets: ClientAssets;

	try {
		assets = JSON.parse(match[1]);
	} catch {
		throw new Error(`Failed to parse SSR assets on ${url}`);
	}

	if (!assets.js) {
		throw new Error(`Failed to find any SSR JS on ${url}`);
	}

	for (const assetType of ["js", "css", "preload"]) {
		for (const asset of assets[assetType] ?? []) {
			const file = GetSsrFilepath(asset.href);

			if (file === null || state.currentSsrFiles.has(file)) {
				continue;
			}

			state.currentSsrFiles.add(file);
			state.urlsToFetch.push({ url: asset.href, file });
		}
	}

	state.ssrPagesParsed++;

	return true;
}

/**
 * Returns true for the files in the raw SSR folders.
 */
export function IsSsrFile(file: string): boolean {
	for (const site of sites) {
		if (file.startsWith(`${site.folder}/`)) {
			return true;
		}
	}

	return false;
}

function GetSsrFilepath(url: string): string | null {
	const path = new URL(url).pathname;

	for (const site of sites) {
		if (path.startsWith(site.pathPrefix)) {
			return `${site.folder}/${basename(path)}`;
		}
	}

	Log(`{lightred}Unknown SSR path: ${path}`);

	return null;
}

/**
 * Returns the discovered files that have not been seen yet.
 */
export function ProcessSsrFiles(): UrlToFetch[] {
	const urls: UrlToFetch[] = [];

	for (const url of ReadLines(ssrUrlsPath)) {
		if (!url.startsWith("https://")) {
			throw new Error(`${url} does not start with https://`);
		}

		const file = GetSsrFilepath(url);

		if (file === null || state.currentSsrFiles.has(file)) {
			continue;
		}

		state.currentSsrFiles.add(file);
		urls.push({ url, file });
	}

	return urls;
}

export function DeleteOldSsrFiles(): void {
	const chunksByFolder = new Map<string, Set<string>>();

	for (const file of state.currentSsrFiles) {
		const folder = dirname(file);
		const chunks = chunksByFolder.get(folder) ?? new Set<string>();

		chunks.add(basename(file));
		chunksByFolder.set(folder, chunks);
	}

	for (const [folder, newChunks] of chunksByFolder) {
		const folderPath = join(rootDir, folder);

		if (!existsSync(folderPath)) {
			continue;
		}

		for (const entry of readdirSync(folderPath, { withFileTypes: true })) {
			if (!entry.isFile() || newChunks.has(entry.name)) {
				continue;
			}

			const filePath = join(folderPath, entry.name);

			Log(`Deleting ${filePath}`);

			delete state.etags[`${folder}/${entry.name}`];
			delete state.hashes[`${folder}/${entry.name}`];

			unlinkSync(filePath);
		}

		const cleanFolderPath = join(rootDir, "c", folder);

		if (!existsSync(cleanFolderPath)) {
			continue;
		}

		for (const entry of readdirSync(cleanFolderPath, { withFileTypes: true })) {
			if (!entry.isFile() || newChunks.has(entry.name)) {
				continue;
			}

			const filePath = join(cleanFolderPath, entry.name);

			Log(`Deleting ${filePath}`);

			unlinkSync(filePath);
		}
	}
}

/**
 * Language chunks are imported as `x.russian = () => import(...)` or as `"sales_russian.json": () => import(...)`.
 * The nearest assignment or object key names the language.
 * Returns the language, or null when the import is not a language chunk.
 */
function GetLanguageChunk(parents: Node[]): string | null {
	for (let i = parents.length - 1; i >= 0; i--) {
		const parent = parents[i] as Node;
		const assignment = parent as AssignmentExpression;
		const property = parent as Property;
		let key: string;

		if (parent.type === Syntax.AssignmentExpression && assignment.left.type === Syntax.MemberExpression) {
			key = ((assignment.left as MemberExpression).property as Identifier).name;
		} else if (parent.type === Syntax.Property) {
			key = (property.key as Identifier).name ?? (property.key as Literal).value;
		} else {
			continue;
		}

		const match = languageKeyPattern.exec(key);

		return match === null ? null : match[1];
	}

	return null;
}

/**
 * Merges the English chunks found on disk into one file, because chunk names change with every build.
 * Chunk order follows the hashes, so a key with different values keeps the smallest one.
 */
async function MergeEnglishChunks(
	folder: string,
	cleanFolder: string,
	chunks: Set<string>,
	stringsFile: string,
): Promise<void> {
	const merged: Record<string, string> = {};
	let found = 0;

	for (const chunk of [...chunks].toSorted()) {
		let strings: Record<string, string>;

		try {
			strings = ExtractStrings(await readFile(join(folder, chunk), "utf8"));
		} catch (e) {
			if ((e as NodeJS.ErrnoException).code === "ENOENT") {
				continue;
			}

			Log(`{lightred}Failed to extract strings from ${chunk}: ${e}`);
			continue;
		}

		found++;

		for (const [key, value] of Object.entries(strings)) {
			if (!Object.hasOwn(merged, key) || value < merged[key]) {
				merged[key] = value;
			}
		}

		await rm(join(cleanFolder, chunk), { force: true });
	}

	if (found === 0) {
		return;
	}

	Log(`Merged ${found} English chunks into ${Object.keys(merged).length} strings in ${stringsFile}`);

	await writeFile(stringsFile, FormatStrings(merged));
}

/**
 * Finds the chunks imported by the SSR files on disk, and merges the English ones into the strings files.
 */
export async function GenerateSsrUrls(): Promise<void> {
	const urls = new Set<string>();

	for (const site of sites) {
		const folder = join(rootDir, site.folder);
		const cleanFolder = join(rootDir, "c", site.folder);
		const stringsFile = join(rootDir, site.stringsFile);
		const files = (await readdir(folder)).filter((file) => extname(file).toLowerCase() === ".js");
		const englishChunks = new Set<string>();

		for (const file of files) {
			try {
				const code = await readFile(join(folder, file), "utf8");
				const ast = ParseJavascript(code);

				traverse(ast, {
					enter: function (node) {
						if (node.type !== Syntax.ImportDeclaration && node.type !== Syntax.ImportExpression) {
							return;
						}

						const importPath = GetStringValue((node as ImportDeclaration | ImportExpression).source);

						if (importPath === null) {
							return;
						}

						const language = GetLanguageChunk(this.parents());

						if (language === "english") {
							englishChunks.add(basename(importPath));
						} else if (language !== null) {
							return;
						}

						const url = new URL(cdn + site.pathPrefix);
						url.pathname += importPath;
						urls.add(url.toString());
					},
				});
			} catch (e) {
				Log(`{lightred}Failed to parse ${file}: ${e}`);
			}
		}

		await MergeEnglishChunks(folder, cleanFolder, englishChunks, stringsFile);
	}

	Log(`Found ${urls.size} SSR urls`);

	const strings = `${[...urls].toSorted().join("\n")}\n`;

	await writeFile(ssrUrlsPath, strings);
}
