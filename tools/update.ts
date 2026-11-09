import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { DumpProtobufs } from "./dump_javascript_protobufs.ts";
import { DumpSvg } from "./dump_javascript_svg.ts";
import { DumpUrls } from "./dump_javascript_urls.ts";
import { ExtractClient } from "./extract_client.ts";
import { FetchQueued, ParseUrls } from "./fetch_urls.ts";
import { Log } from "./log.ts";
import { DeleteOldSsrFiles, GenerateSsrUrls, ProcessSsrFiles, ssrRequest } from "./ssr.ts";
import { apiKey, rootDir, state, useCache } from "./state.ts";
import { DeleteOldViteChunks, GenerateViteUrls, ProcessViteChunks, ReadViteUrls } from "./vite.ts";

const etagsPath = join(rootDir, ".support/etags.json");

// A discovery round fetches what the previous round found, and the last round found nothing new.
const maxDiscoveryRounds = 6;

await Update();

async function Update(): Promise<void> {
	if (apiKey === "") {
		Log("{lightred}Missing STEAM_API_KEY environment variable");
		process.exitCode = 1;
		return;
	}

	mkdirSync(join(rootDir, ".support"), { recursive: true });

	if (useCache && existsSync(etagsPath)) {
		const { etags = {}, hashes = {} } = JSON.parse(readFileSync(etagsPath, "utf8"));

		state.etags = etags;
		state.hashes = hashes;
	}

	state.urlsToFetch = ParseUrls();

	const knownUrls = new Set<string>();

	for (const { url, file } of state.urlsToFetch) {
		knownUrls.add(url);

		if (file === ssrRequest) {
			state.ssrPagesToParse++;
		}
	}

	await FetchListedUrls();

	if (state.updateViteUrls) {
		await UpdateViteChunks(knownUrls);
	}

	if (state.updateSsrUrls && state.currentSsrFiles.size > 0) {
		await UpdateSsrFiles();
	}

	SaveEtags();

	if (state.extractClientArchives) {
		Log("{lightblue}Extracting client archives");
		state.dumpJavascriptFiles = true;

		ExtractClient();
	}

	if (state.dumpJavascriptFiles) {
		Log("{lightblue}Dumping web protobufs");

		await DumpProtobufs();
		await DumpUrls();
		await DumpSvg();
	}

	Log("{lightblue}Done");
}

/**
 * Fetches the urls from urls.txt, then retries the ones that failed with a single connection.
 */
async function FetchListedUrls(): Promise<void> {
	let tries = 5;
	let windowSize = 10;

	do {
		await FetchQueued(windowSize);
		windowSize = 1;
	} while (state.urlsToFetch.length > 0 && tries-- > 0);
}

/**
 * Fetches the chunks that Vite files reference, until the chunks reference nothing new.
 * Chunks that are no longer referenced are deleted only when that point was reached.
 */
async function UpdateViteChunks(knownUrls: Set<string>): Promise<void> {
	const previousUrls = ReadViteUrls();
	let foundEverything = false;

	for (let round = 0; round < maxDiscoveryRounds; round++) {
		await GenerateViteUrls();
		state.urlsToFetch.push(...ProcessViteChunks(knownUrls));

		if (state.urlsToFetch.length === 0) {
			foundEverything = true;
			break;
		}

		await FetchQueued(5);
	}

	if (foundEverything) {
		DeleteOldViteChunks(previousUrls, knownUrls);
	}
}

/**
 * Fetches the chunks that SSR files import, until the chunks import nothing new.
 * Old files are deleted only when every SSR page was parsed, because the pages list the files to keep.
 */
async function UpdateSsrFiles(): Promise<void> {
	const allPagesParsed = state.ssrPagesParsed === state.ssrPagesToParse;

	for (let round = 0; round < maxDiscoveryRounds; round++) {
		// Old files would otherwise be read for imports and kept alive
		if (allPagesParsed) {
			DeleteOldSsrFiles();
		}

		await GenerateSsrUrls();
		state.urlsToFetch.push(...ProcessSsrFiles());

		if (state.urlsToFetch.length === 0) {
			break;
		}

		await FetchQueued(5);
	}
}

function SaveEtags(): void {
	for (const etags of Object.values(state.etags)) {
		if (etags.length > 3) {
			etags.splice(0, etags.length - 3);
		}
	}

	writeFileSync(etagsPath, JSON.stringify({ etags: state.etags, hashes: state.hashes }, null, 4));
}
