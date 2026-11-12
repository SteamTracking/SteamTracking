import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export type UrlToFetch = { url: string; file: string };

export const rootDir = resolve(import.meta.dirname, "..");

export const apiKey = process.env.STEAM_API_KEY?.trim() ?? "";
export const useCache = process.argv[2] !== "force";

export const state = {
	extractClientArchives: false,
	dumpJavascriptFiles: false,
	updateViteUrls: false,
	updateSsrUrls: false,
	ssrPagesToParse: 0,
	ssrPagesParsed: 0,
	etags: {} as Record<string, string[]>,
	hashes: {} as Record<string, string>,
	urlsToFetch: [] as UrlToFetch[],
	viteEnglishChunks: new Set<string>(),
	notFoundFiles: new Set<string>(),
	currentSsrFiles: new Set<string>(),
	ssrRoutes: new Set<string>(),
	ssrHostsToParse: new Set<string>(),
	ssrHostsParsed: new Set<string>(),
	filesToFormat: new Set<string>(),
	clientArchiveHashes: new Map<string, string>(),
};

export function ReadLines(path: string): string[] {
	return readFileSync(path, "utf8")
		.split("\n")
		.filter((line) => line !== "");
}
