import { existsSync, unlinkSync } from "node:fs";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { languages } from "./languages.ts";
import { Log } from "./log.ts";
import type { UrlToFetch } from "./state.ts";
import { ReadLines, rootDir, state } from "./state.ts";

const viteUrlsPath = join(rootDir, ".support/urls_from_vite.txt");

const apps = [
	{ host: "store.steampowered.com", app: "store" },
	{ host: "steamcommunity.com", app: "community" },
	{ host: "help.steampowered.com", app: "help" },
	{ host: "partner.steamgames.com", app: "appmgmt" },
];

const englishChunkPattern = /_english\d*\.js$/;
const otherLanguages = languages.filter((language) => language !== "english");
const languagePattern = new RegExp(`_(${otherLanguages.join("|")})\\d*\\.js$`);

// Matches a relative .js or .css path inside any kind of quote.
const referencePattern = /["'`](\.{1,2}\/[^"'`\s]+?\.(?:js|css))["'`]/g;

/**
 * Returns true for the English string chunks of the Vite apps, which are saved as json only.
 */
export function IsEnglishChunk(file: string): boolean {
	return file.includes("/applications/") && !file.includes("/localization/") && englishChunkPattern.test(file);
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

export function ReadViteUrls(): string[] {
	if (!existsSync(viteUrlsPath)) {
		return [];
	}

	return ReadLines(viteUrlsPath);
}

export async function GenerateViteUrls(): Promise<void> {
	const urls = new Set<string>();

	for (const { host, app } of apps) {
		const folder = join(rootDir, host, "public/javascript/applications", app);
		const base = `https://${host}/public/javascript/applications/${app}/`;
		const files = (await readdir(folder)).filter((file) => extname(file).toLowerCase() === ".js");
		let references = 0;

		for (const file of files) {
			const code = await readFile(join(folder, file), "utf8");

			for (const match of code.matchAll(referencePattern)) {
				const url = new URL(match[1], base);

				if (languagePattern.test(url.pathname)) {
					continue;
				}

				references++;

				if (url.pathname.endsWith(".css")) {
					urls.add(`${url.origin}${url.pathname}?__TIME__&__CDN__`);
				} else {
					urls.add(`${url.origin}${url.pathname}?__TIME__&l=english&__CDN__`);
				}
			}
		}

		if (references === 0) {
			throw new Error(`No chunk references found for ${host} ${app}`);
		}
	}

	console.log("Found", urls.size, "Vite urls");

	const strings = `${[...urls].toSorted().join("\n")}\n`;

	await writeFile(viteUrlsPath, strings);
}

function GetViteFile(url: string): string {
	const parsed = new URL(url);

	return parsed.hostname + parsed.pathname;
}

/**
 * Returns the discovered chunks that have not been seen yet.
 */
export function ProcessViteChunks(knownUrls: Set<string>): UrlToFetch[] {
	const urls: UrlToFetch[] = [];

	for (const url of ReadViteUrls()) {
		if (!url.startsWith("https://")) {
			throw new Error(`${url} does not start with https://`);
		}

		if (knownUrls.has(url)) {
			continue;
		}

		knownUrls.add(url);
		urls.push({ url, file: GetViteFile(url) });
	}

	return urls;
}

export function DeleteOldViteChunks(previousUrls: string[], knownUrls: Set<string>): void {
	for (const url of previousUrls) {
		if (knownUrls.has(url) || !url.startsWith("https://")) {
			continue;
		}

		const file = GetViteFile(url);
		const filePath = join(rootDir, file);
		const cleanPath = join(rootDir, "c", file);
		const savedPath = join(rootDir, GetSavedPath(file));

		if (existsSync(filePath)) {
			Log(`Chunk ${filePath} is no longer referenced`);

			unlinkSync(filePath);
		}

		if (existsSync(cleanPath)) {
			Log(`Deleting clean file ${cleanPath}`);

			unlinkSync(cleanPath);
		}

		if (savedPath !== filePath && existsSync(savedPath)) {
			Log(`Deleting strings file ${savedPath}`);

			unlinkSync(savedPath);
		}

		delete state.etags[file];
		delete state.hashes[file];
	}
}
