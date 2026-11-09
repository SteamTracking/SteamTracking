import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { FormatFiles } from "./format_files.ts";
import { HandleResponse } from "./handle_response.ts";
import { Log } from "./log.ts";
import { ssrRequest } from "./ssr.ts";
import type { UrlToFetch } from "./state.ts";
import { apiKey, rootDir, state, useCache } from "./state.ts";
import { GetSavedPath } from "./vite.ts";

type DownloadResult = { code: number; etag: string | null; body: Buffer };

const currentTime = Math.floor(Date.now() / 1000);

const headers = {
	"User-Agent": "SteamTracking (+https://github.com/SteamTracking/SteamTracking)",
	Cookie: "workshop_preferences=%7B%22bOptedIn%22%3Atrue%7D",
};

/**
 * Reads urls.txt, plus the sale stylesheets of the current year.
 */
export function ParseUrls(): UrlToFetch[] {
	const lines = readFileSync(join(rootDir, "urls.txt"), "utf8").split("\n");
	const year = new Date().getFullYear();
	const promo = "store.steampowered.com/public/css/promo";
	const query = "?__TIME__&__CDN__";

	lines.push(`${promo}/autumn_year_nominations.css @ https://${promo}/autumn${year}_nominations.css${query}`);
	lines.push(`${promo}/autumn_year_sale.css @ https://${promo}/autumn${year}_sale.css${query}`);
	lines.push(`${promo}/spring_year_sale.css @ https://${promo}/spring${year}_sale.css${query}`);
	lines.push(`${promo}/summer_year_sale.css @ https://${promo}/summer${year}_sale.css${query}`);
	lines.push(`${promo}/winter_year_sale.css @ https://${promo}/winter${year}_sale.css${query}`);

	const urls: UrlToFetch[] = [];

	for (const rawLine of lines) {
		const line = rawLine.trim();

		if (line === "" || line.startsWith("/")) {
			continue;
		}

		if (line.includes("@")) {
			const parts = line.split("@");

			urls.push({ file: parts[0].trim(), url: parts[1].trim() });
			continue;
		}

		if (!URL.canParse(line)) {
			Log(`${line} is malformed`);
			continue;
		}

		const parsed = new URL(line);

		urls.push({ file: parsed.hostname + parsed.pathname, url: line });
	}

	return urls;
}

/**
 * Fetches and handles the queued urls, then formats the files that were saved.
 */
export async function FetchQueued(windowSize: number): Promise<void> {
	const urls = state.urlsToFetch;
	state.urlsToFetch = [];
	let nextIndex = 0;

	Log(`{yellow}${urls.length} urls to be fetched...`);

	async function Worker(): Promise<void> {
		while (nextIndex < urls.length) {
			const request = urls[nextIndex++];
			const url = GenerateUrl(request.url);
			const result = await Download(url, request.file);

			HandleDownload(request.file, url, result);
		}
	}

	const workers: Promise<void>[] = [];

	for (let i = 0; i < Math.min(windowSize, urls.length); i++) {
		workers.push(Worker());
	}

	await Promise.all(workers);

	if (state.filesToFormat.size > 0) {
		Log(`{lightblue}Formatting ${state.filesToFormat.size} files`);

		await FormatFiles([...state.filesToFormat]);
		state.filesToFormat.clear();
	}
}

function GenerateUrl(url: string): string {
	let result = url.replaceAll("__KEY__", `key=${apiKey}`);
	result = result.replaceAll("__TIME__", `_=${currentTime}`);
	result = result.replaceAll("__CDN__", "_cdn=fastly");
	result = result.replaceAll("https://steamcommunity.com/public/", "https://community.fastly.steamstatic.com/public/");
	result = result.replaceAll("https://store.steampowered.com/public/", "https://store.fastly.steamstatic.com/public/");

	return result;
}

async function Download(url: string, file: string): Promise<DownloadResult> {
	const requestHeaders: Record<string, string> = { ...headers };
	const etags = state.etags[file];

	if (useCache && etags !== undefined && existsSync(join(rootDir, GetSavedPath(file)))) {
		requestHeaders["If-None-Match"] = etags.join(", ");
	}

	try {
		const response = await fetch(url, {
			headers: requestHeaders,
			redirect: "manual",
			signal: AbortSignal.timeout(30000),
		});
		const body = Buffer.from(await response.arrayBuffer());

		return { code: response.status, etag: response.headers.get("etag"), body };
	} catch (error) {
		Log(`{yellow}Failed to download ${url}: ${error}`);

		return { code: 0, etag: null, body: Buffer.alloc(0) };
	}
}

/**
 * Contains no await, so concurrent downloads never interleave in here.
 * The ETag is recorded only after the response was handled, so a rejected response is fetched again.
 */
function HandleDownload(file: string, url: string, result: DownloadResult): void {
	const code = result.code;

	if (code === 429 && file === ssrRequest) {
		Log(`{yellow}Error ${code}{normal}    - ${url} (but continuing)`);
		return;
	}

	if (code === 304) {
		Log(`{green}HTTP Cache  {normal} - ${url}`);
		return;
	}

	if (code !== 200) {
		Log(`{yellow}Error ${code}{normal}    - ${url}`);

		if (code < 100 || code >= 500) {
			state.urlsToFetch.push({ url, file });
		}

		return;
	}

	let etag: string | null = null;

	if (result.etag !== null && file !== ssrRequest) {
		etag = result.etag.trim();
	}

	const etags = state.etags[file] ?? [];
	const alreadyHaveEtag = etag !== null && etags.includes(etag);

	if (alreadyHaveEtag && existsSync(join(rootDir, GetSavedPath(file)))) {
		Log(`{green}ETag Matched{normal} - ${url}`);
		return;
	}

	let changed: boolean;

	try {
		changed = HandleResponse(file, result.body, url);
	} catch (error) {
		Log(`{lightred}Failed to process ${url}: ${error}`);
		return;
	}

	if (etag !== null && !alreadyHaveEtag) {
		etags.push(etag);
		state.etags[file] = etags;
	}

	if (changed) {
		Log(`{lightblue}Fetched     {normal} - ${url}`);
	} else {
		Log(`{green}Not Modified{normal} - ${url}`);
	}
}
