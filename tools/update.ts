import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { DumpProtobufs } from "./dump_javascript_protobufs.ts";
import { DumpSvg } from "./dump_javascript_svg.ts";
import { DumpUrls } from "./dump_javascript_urls.ts";
import { ExtractClient } from "./extract_client.ts";
import { FetchQueued, ParseUrls } from "./fetch_urls.ts";
import { Log } from "./log.ts";
import { DeleteOldSsrFiles, GenerateSsrUrls, ProcessSsrFiles, ssrRequest, WriteSsrRoutes } from "./ssr.ts";
import { apiKey, rootDir, state, useCache } from "./state.ts";
import { DeleteOldViteFiles, DiscoverViteFiles, HasMissingViteFiles, ProcessViteChunks } from "./vite.ts";

const etagsPath = join(rootDir, ".support/etags.json");

// Files are written directly into these folders, which do not exist in an empty tree.
const outputDirs = [".support", "API", "ProtobufsWebui", "Strings", "Structs"];

// A discovery round fetches what the previous round found, and the last round found nothing new.
const maxDiscoveryRounds = 6;

await Update();

async function Update(): Promise<void> {
	if (apiKey === "") {
		Log("{lightred}Missing STEAM_API_KEY environment variable");
		process.exitCode = 1;
		return;
	}

	for (const dir of outputDirs) {
		mkdirSync(join(rootDir, dir), { recursive: true });
	}

	if (useCache && existsSync(etagsPath)) {
		const { etags = {}, hashes = {} } = JSON.parse(readFileSync(etagsPath, "utf8"));

		state.etags = etags;
		state.hashes = hashes;
	}

	state.urlsToFetch = ParseUrls();

	const knownUrls = new Set<string>();
	const listedFiles = new Set<string>();

	for (const { url, file } of state.urlsToFetch) {
		knownUrls.add(url);
		listedFiles.add(file);

		if (file === ssrRequest) {
			state.ssrPagesToParse++;
			state.ssrHostsToParse.add(new URL(url).hostname);
		}
	}

	await FetchListedUrls();

	// Every SSR page of a site embeds the same routes, so one parsed page per site is enough
	if (state.ssrHostsParsed.size === state.ssrHostsToParse.size) {
		await WriteSsrRoutes();
	}

	// Saved names come from the chunk name table, so a table change must be applied even when nothing was downloaded
	if (state.updateViteUrls || HasMissingViteFiles()) {
		await UpdateViteChunks(knownUrls, listedFiles);
	}

	if (state.updateSsrUrls && state.currentSsrFiles.size > 0) {
		await UpdateSsrFiles();
	}

	SaveEtags();

	if (state.extractClientArchives) {
		Log("{lightblue}Extracting client archives");
		state.dumpJavascriptFiles = true;

		await ExtractClient();
	}

	if (state.dumpJavascriptFiles) {
		Log("{lightblue}Dumping web protobufs");
		await DumpProtobufs();

		Log("{lightblue}Dumping web urls");
		await DumpUrls();

		Log("{lightblue}Dumping web images");
		await DumpSvg();
	}

	Log("{green}Done");
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

	if (state.urlsToFetch.length > 0) {
		Log(`{lightred}${state.urlsToFetch.length} urls still failing after retries`);
	}
}

/**
 * Fetches the chunks that Vite entry files reference, until the chunks reference nothing new.
 * Files that are no longer reached are deleted only when that point was reached with every file on disk.
 */
async function UpdateViteChunks(knownUrls: Set<string>, listedFiles: Set<string>): Promise<void> {
	Log("{lightblue}Updating Vite chunks");

	for (let round = 0; round < maxDiscoveryRounds; round++) {
		const discovery = await DiscoverViteFiles(listedFiles);
		state.urlsToFetch.push(...ProcessViteChunks(discovery.urls, knownUrls));

		if (state.urlsToFetch.length > 0) {
			await FetchQueued(5);
			continue;
		}

		if (discovery.missingFiles.length > 0) {
			Log(`{yellow}Keeping old Vite files because ${discovery.missingFiles.length} reached files are missing`);
		} else {
			DeleteOldViteFiles(listedFiles, discovery.reachedFiles);
		}

		return;
	}

	Log("{yellow}Keeping old Vite files because discovery did not finish");
}

/**
 * Fetches the chunks that SSR files import, until the chunks import nothing new.
 * Old files are deleted only when every SSR page was parsed, because the pages list the files to keep.
 */
async function UpdateSsrFiles(): Promise<void> {
	Log("{lightblue}Updating SSR files");

	const allPagesParsed = state.ssrPagesParsed === state.ssrPagesToParse;
	let foundEverything = false;

	if (!allPagesParsed) {
		Log(`{yellow}Keeping old SSR files because only ${state.ssrPagesParsed} of ${state.ssrPagesToParse} pages parsed`);
	}

	for (let round = 0; round < maxDiscoveryRounds; round++) {
		await GenerateSsrUrls(allPagesParsed);
		state.urlsToFetch.push(...ProcessSsrFiles());

		if (state.urlsToFetch.length === 0) {
			foundEverything = true;
			break;
		}

		await FetchQueued(5);
	}

	if (allPagesParsed && foundEverything) {
		DeleteOldSsrFiles();
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
