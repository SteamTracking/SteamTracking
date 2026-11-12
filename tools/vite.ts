import { existsSync, readdirSync, unlinkSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { Syntax, traverse } from "estraverse";
import type { ImportExpression } from "estree";
import { ParseJavascript } from "./dump_javascript_paths.ts"; // also fixes estraverse Syntax and VisitorKeys
import { GetStringValue } from "./extract_strings.ts";
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

/**
 * Returns the path, relative to the root, that a fetched file ends up at.
 * English chunks are saved as json, and so is the webpack `_english-json.js` bundle.
 */
export function GetSavedPath(file: string): string {
	if (IsEnglishChunk(file)) {
		return `${file.slice(0, -3)}.json`;
	}

	if (file.endsWith("_english-json.js")) {
		return file.replace(/-json\.js$/, ".json");
	}

	return file;
}

function GetAppFolders(host: string, app: string): string[] {
	return [`${host}/public/javascript/applications/${app}`, `${host}/public/css/applications/${app}`];
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
			const path = join(rootDir, file);

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
 * Files listed in urls.txt are kept unless the server no longer has them.
 */
export function DeleteOldViteFiles(listedFiles: Set<string>, reachedFiles: Set<string>): void {
	const filesToKeep = new Set<string>();

	for (const file of listedFiles) {
		if (!state.notFoundFiles.has(file)) {
			filesToKeep.add(file);
		}
	}

	for (const file of reachedFiles) {
		filesToKeep.add(file);
		filesToKeep.add(GetSavedPath(file));
	}

	const folders: string[] = [];

	for (const { host, app } of apps) {
		folders.push(...GetAppFolders(host, app));
	}

	for (const folder of folders) {
		DeleteFilesNotKept(rootDir, folder, filesToKeep);
		DeleteFilesNotKept(join(rootDir, "c"), folder, filesToKeep);
		DeleteCacheNotKept(state.etags, folder, filesToKeep);
		DeleteCacheNotKept(state.hashes, folder, filesToKeep);
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
