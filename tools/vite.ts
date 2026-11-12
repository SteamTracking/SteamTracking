import { hash } from "node:crypto";
import { existsSync, readdirSync, unlinkSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join, posix, relative, sep } from "node:path";
import { Syntax, traverse } from "estraverse";
import type { ImportExpression } from "estree";
import { chunkSourcePaths, chunkTemporaryNames } from "./chunk_names.ts";
import { ParseJavascript } from "./dump_javascript_paths.ts"; // also fixes estraverse Syntax and VisitorKeys
import { GetStringValue } from "./extract_strings.ts";
import { ParseUrls } from "./fetch_urls.ts";
import { Log } from "./log.ts";
import { GetLanguageChunk } from "./ssr.ts";
import type { UrlToFetch } from "./state.ts";
import { rootDir, state } from "./state.ts";

export type ViteDiscovery = {
	urls: string[];
	reachedFiles: Set<string>;
	missingFiles: string[];
};

const apps = [
	{ host: "store.steampowered.com", app: "store" },
	{ host: "steamcommunity.com", app: "community" },
	{ host: "help.steampowered.com", app: "help" },
	{ host: "partner.steamgames.com", app: "appmgmt" },
	{ host: "partner.steampowered.com", app: "stats" },
];

// Matches a relative .js or .css path inside any kind of quote, with an optional query such as `?contenthash=`.
const referencePattern = /["'`](\.{1,2}\/[^"'`\s?]+?\.(?:js|css))(?:\?[^"'`\s]*)?["'`]/g;

/**
 * Returns true for the English string chunks of the Vite apps, which are saved as json only.
 */
export function IsEnglishChunk(file: string): boolean {
	return state.viteEnglishChunks.has(file);
}

function GetAppFolders(host: string, app: string): string[] {
	return [`${host}/public/javascript/applications/${app}`, `${host}/public/css/applications/${app}`];
}

type ChunkName = { name: string; clashes: boolean };

const appFolders = new Set<string>();

for (const { host, app } of apps) {
	for (const folder of GetAppFolders(host, app)) {
		appFolders.add(folder);
	}
}

const chunkFilePattern = /^chunk~([0-9a-f]{10,11})\.(js|css)$/;
const savedPathOwners = new Map<string, string>();
let chunkNames: Map<string, ChunkName> | null = null;

/**
 * Returns the readable name of a source path: its file name without the last extension.
 * Files named index are named after the nearest parent folder that is not src.
 */
function GetPathName(path: string): string {
	const stem = posix.parse(path).name;

	if (stem !== "index") {
		return stem;
	}

	let folderPath = posix.dirname(path);

	while (folderPath !== ".") {
		const folder = posix.basename(folderPath);

		if (folder !== "src") {
			return folder;
		}

		folderPath = posix.dirname(folderPath);
	}

	return stem;
}

/**
 * Returns the names, without extension, of the files in the app folders that urls.txt lists.
 */
function GetReservedNames(): Set<string> {
	const reserved = new Set<string>();

	for (const { file } of ParseUrls()) {
		const folder = file.slice(0, file.lastIndexOf("/"));

		if (appFolders.has(folder)) {
			reserved.add(GetPathName(file));
		}
	}

	return reserved;
}

/**
 * Builds the table from chunk id to name once. Ids from source paths come first, then the temporary names.
 * A name clashes when different source files, or a file listed in urls.txt, share it.
 * A name also clashes when it ends in a digit and the name without that digit is also in the table,
 * because the dedupe digit of the shorter name would produce the longer one.
 * The table covers every known path, so which names clash does not depend on which chunks a build contains.
 */
function BuildChunkNames(): Map<string, ChunkName> {
	const idNames = new Map<string, string>();
	const sources = new Map<string, Set<string>>();
	const temporaryNames = new Set<string>();

	for (const path of chunkSourcePaths) {
		const id = hash("sha256", path).slice(0, 10);
		const sourcePath = path.replace(/^(\.\.\/)+/, "");
		const name = GetPathName(sourcePath);

		if (!idNames.has(id)) {
			idNames.set(id, name);
		}

		if (!sourcePath.includes("/")) {
			continue;
		}

		let nameSources = sources.get(name);

		if (nameSources === undefined) {
			nameSources = new Set<string>();
			sources.set(name, nameSources);
		}

		nameSources.add(sourcePath.replace(/\.[^./]*$/, ""));
	}

	for (const [id, name] of chunkTemporaryNames) {
		if (!idNames.has(id)) {
			idNames.set(id, name);
			temporaryNames.add(name);
		}
	}

	const reserved = GetReservedNames();
	const tableNames = new Set(idNames.values());
	const digitClashes = new Set<string>();

	for (const name of tableNames) {
		if (!/\d$/.test(name)) {
			continue;
		}

		const baseName = name.slice(0, -1);

		if (tableNames.has(baseName)) {
			digitClashes.add(name);
			digitClashes.add(baseName);
		}
	}

	const table = new Map<string, ChunkName>();

	for (const [id, name] of idNames) {
		const sourceCount = sources.get(name)?.size ?? 0;
		const hasSourceClash = sourceCount > 1 || (sourceCount === 1 && temporaryNames.has(name));
		const clashes = hasSourceClash || reserved.has(name) || digitClashes.has(name);

		table.set(id, { name, clashes });
	}

	return table;
}

/**
 * Returns the readable file name, without extension, of a chunk id, or null when the id is not known.
 * Clashing names get the id appended. An id with a dedupe digit takes the name of its 10 character id plus the digit.
 */
export function GetChunkName(id: string): string | null {
	chunkNames ??= BuildChunkNames();

	const entry = chunkNames.get(id.slice(0, 10));

	if (entry === undefined) {
		return null;
	}

	const name = entry.name + id.slice(10);

	if (entry.clashes) {
		return `${name}~${id}`;
	}

	return name;
}

/**
 * Returns the path of a `chunk~` file in an app folder under its readable name, or the path as is.
 */
function GetReadableChunkPath(file: string): string {
	const slash = file.lastIndexOf("/");
	const match = chunkFilePattern.exec(file.slice(slash + 1));

	if (match === null) {
		return file;
	}

	const folder = file.slice(0, slash);
	const name = GetChunkName(match[1]);

	if (!appFolders.has(folder) || name === null) {
		return file;
	}

	return `${folder}/${name}.${match[2]}`;
}

/**
 * Returns the path, relative to the root, that a fetched file ends up at.
 * Vite chunks with a known name are saved under it. English chunks are saved as json,
 * and so is the webpack `_english-json.js` bundle.
 * When another file already owns the path, a warning is logged and the file keeps its original name instead.
 */
export function GetSavedPath(file: string): string {
	const savesJson = IsEnglishChunk(file) || file.endsWith("_english-json.js");
	let path = GetReadableChunkPath(file);

	if (savesJson) {
		path = GetJsonPath(path);
	}

	const owner = savedPathOwners.get(path);

	if (owner !== undefined && owner !== file) {
		const originalPath = savesJson ? GetJsonPath(file) : file;

		Log(`${owner} and ${file} are both saved at ${path}, saving ${file} at ${originalPath}`);

		path = originalPath;
	}

	savedPathOwners.set(path, file);

	return path;
}

/**
 * Returns the path of the json file saved for a js file: `x.js` becomes `x.json` and `x-json.js` becomes `x.json`.
 */
function GetJsonPath(path: string): string {
	if (path.endsWith("-json.js")) {
		return `${path.slice(0, -8)}.json`;
	}

	return `${path.slice(0, -3)}.json`;
}

/**
 * Returns true when a `chunk~` file saved earlier is not on disk at the path it would be saved at now.
 * A change to the name table moves saved files without any chunk being downloaded, so this is what
 * makes a run with every file cached still update the Vite files.
 * The English chunk list is only filled while discovering, so a json file counts as present too.
 */
export function HasMissingViteFiles(): boolean {
	for (const file of Object.keys(state.hashes)) {
		const slash = file.lastIndexOf("/");

		if (!appFolders.has(file.slice(0, slash)) || !chunkFilePattern.test(file.slice(slash + 1))) {
			continue;
		}

		const path = GetReadableChunkPath(file);

		if (existsSync(join(rootDir, path)) || existsSync(join(rootDir, GetJsonPath(path)))) {
			continue;
		}

		return true;
	}

	return false;
}

/**
 * Resolves a relative reference against the file that contains it, and drops its query.
 */
function ResolveReference(reference: string, file: string): string {
	const url = new URL(reference, `https://${file}`);

	return url.hostname + url.pathname;
}

/**
 * Returns the chunks a file references. Language chunks are recognized by how they are imported,
 * English ones are returned separately and other languages are left out.
 */
function FindReferences(file: string, code: string): { chunks: string[]; englishChunks: string[] } {
	const languageChunks = new Set<string>();
	const englishChunks: string[] = [];
	const chunks: string[] = [];
	const ast = ParseJavascript(code);

	traverse(ast, {
		enter: function (node) {
			if (node.type !== Syntax.ImportExpression) {
				return;
			}

			const importPath = GetStringValue((node as ImportExpression).source);

			if (importPath === null) {
				return;
			}

			const language = GetLanguageChunk(this.parents());

			if (language === null) {
				return;
			}

			const chunk = ResolveReference(importPath, file);

			languageChunks.add(chunk);

			if (language === "english") {
				englishChunks.push(chunk);
			}
		},
	});

	for (const match of code.matchAll(referencePattern)) {
		const chunk = ResolveReference(match[1], file);

		if (!languageChunks.has(chunk)) {
			chunks.push(chunk);
		}
	}

	return { chunks, englishChunks };
}

function GetChunkUrl(chunk: string): string {
	if (chunk.endsWith(".css")) {
		return `https://${chunk}?__TIME__&__CDN__`;
	}

	return `https://${chunk}?__TIME__&l=english&__CDN__`;
}

/**
 * Walks from the app entry files listed in urls.txt through the chunks they reference.
 * Files the server no longer has are not reached, so old copies on disk cannot keep their references alive.
 * Files that are reached but not on disk yet are returned as missing, because their references are unknown.
 */
export async function DiscoverViteFiles(listedFiles: Set<string>): Promise<ViteDiscovery> {
	const urls: string[] = [];
	const reachedFiles = new Set<string>();
	const missingFiles: string[] = [];

	for (const { host, app } of apps) {
		const scriptFolder = `${host}/public/javascript/applications/${app}`;
		const queue: string[] = [];
		let references = 0;

		for (const file of listedFiles) {
			if (file.startsWith(`${scriptFolder}/`) && file.endsWith(".js") && !state.notFoundFiles.has(file)) {
				reachedFiles.add(file);
				queue.push(file);
			}
		}

		while (queue.length > 0) {
			const file = queue.pop() as string;
			const path = join(rootDir, GetSavedPath(file));

			if (!existsSync(path)) {
				missingFiles.push(file);
				continue;
			}

			const { chunks, englishChunks } = FindReferences(file, await readFile(path, "utf8"));

			references += chunks.length + englishChunks.length;

			for (const chunk of englishChunks) {
				state.viteEnglishChunks.add(chunk);

				if (!reachedFiles.has(chunk) && !state.notFoundFiles.has(chunk)) {
					reachedFiles.add(chunk);
					urls.push(GetChunkUrl(chunk));
				}
			}

			for (const chunk of chunks) {
				if (reachedFiles.has(chunk) || state.notFoundFiles.has(chunk)) {
					continue;
				}

				reachedFiles.add(chunk);
				urls.push(GetChunkUrl(chunk));

				if (chunk.endsWith(".js")) {
					queue.push(chunk);
				}
			}
		}

		if (references === 0) {
			throw new Error(`No chunk references found for ${host} ${app}`);
		}
	}

	Log(`Found ${urls.length} Vite urls`);

	return { urls, reachedFiles, missingFiles };
}

/**
 * Returns the discovered chunks that have not been seen yet.
 */
export function ProcessViteChunks(urls: string[], knownUrls: Set<string>): UrlToFetch[] {
	const newUrls: UrlToFetch[] = [];

	for (const url of urls) {
		if (knownUrls.has(url)) {
			continue;
		}

		const parsed = new URL(url);

		knownUrls.add(url);
		newUrls.push({ url, file: parsed.hostname + parsed.pathname });
	}

	return newUrls;
}

/**
 * Deletes every file in the app folders, and its clean copy and cache state, that is not reached.
 * Files are kept at their saved path, and the caches by the url path of the fetched file.
 * Files listed in urls.txt are kept unless the server no longer has them.
 */
export function DeleteOldViteFiles(listedFiles: Set<string>, reachedFiles: Set<string>): void {
	const filesToKeep = new Set<string>();
	const cacheToKeep = new Set<string>();

	for (const file of listedFiles) {
		if (!state.notFoundFiles.has(file)) {
			filesToKeep.add(GetSavedPath(file));
			cacheToKeep.add(file);
		}
	}

	for (const file of reachedFiles) {
		filesToKeep.add(GetSavedPath(file));
		cacheToKeep.add(file);
	}

	for (const folder of appFolders) {
		DeleteFilesNotKept(rootDir, folder, filesToKeep);
		DeleteFilesNotKept(join(rootDir, "c"), folder, filesToKeep);
		DeleteCacheNotKept(state.etags, folder, cacheToKeep);
		DeleteCacheNotKept(state.hashes, folder, cacheToKeep);
	}
}

/**
 * Deletes the files under root/folder whose path relative to root is not kept.
 */
function DeleteFilesNotKept(root: string, folder: string, filesToKeep: Set<string>): void {
	const folderPath = join(root, folder);

	if (!existsSync(folderPath)) {
		return;
	}

	for (const entry of readdirSync(folderPath, { recursive: true, withFileTypes: true })) {
		if (!entry.isFile()) {
			continue;
		}

		const filePath = join(entry.parentPath, entry.name);
		const file = relative(root, filePath).split(sep).join("/");

		if (filesToKeep.has(file)) {
			continue;
		}

		Log(`Deleting ${filePath}`);

		unlinkSync(filePath);
	}
}

function DeleteCacheNotKept(cache: Record<string, unknown>, folder: string, filesToKeep: Set<string>): void {
	for (const file of Object.keys(cache)) {
		if (file.startsWith(`${folder}/`) && !filesToKeep.has(file)) {
			delete cache[file];
		}
	}
}
