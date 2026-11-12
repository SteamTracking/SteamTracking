import { existsSync, globSync, readFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";
import { rootDir } from "./state.ts";
import { GetChunkName } from "./vite.ts";

const referencePattern = /chunk~([0-9a-f]{10,11})\.(js|css)/g;
const bareIdPattern = /^(?:chunk~)?([0-9a-f]{10,11})(?:\.js)?$/;

/**
 * Returns the saved file of a chunk reference in a folder, or null when none exists.
 * Tries the readable name as .js, .json and .css, then the `chunk~` name.
 */
function FindSavedFile(folder: string, id: string, extension: string): string | null {
	const name = GetChunkName(id);
	const candidates: string[] = [];

	if (name !== null) {
		candidates.push(`${name}.js`, `${name}.json`, `${name}.css`);
	}

	candidates.push(`chunk~${id}.${extension}`);

	for (const candidate of candidates) {
		const path = resolve(folder, candidate);

		if (existsSync(path)) {
			return path;
		}
	}

	return null;
}

function ToRootPath(path: string): string {
	return relative(rootDir, path).replaceAll("\\", "/");
}

function LookupFile(file: string): void {
	const code = readFileSync(file, "utf8");
	const folder = dirname(file);
	const cssFolder = folder.replace(/([\\/])javascript([\\/]applications[\\/])/, "$1css$2");
	const seen = new Set<string>();

	for (const match of code.matchAll(referencePattern)) {
		const reference = match[0];

		if (seen.has(reference)) {
			continue;
		}

		seen.add(reference);

		const id = match[1];
		const extension = match[2];
		let saved = FindSavedFile(folder, id, extension);

		if (saved === null && extension === "css") {
			saved = FindSavedFile(cssFolder, id, extension);
		}

		const name = GetChunkName(id) ?? "unknown";
		let savedPath = "missing";

		if (saved !== null) {
			savedPath = ToRootPath(saved);
		}

		console.log(`${reference}\t${name}\t${savedPath}`);
	}
}

function LookupId(id: string): void {
	const name = GetChunkName(id);
	const names = [`chunk~${id}`];

	if (name === null) {
		console.log("unknown");
	} else {
		console.log(name);
		names.push(name);
	}

	for (const fileName of names) {
		const pattern = `{,c/}*/public/{javascript,css}/applications/*/${fileName}.{js,json,css}`;

		for (const path of globSync(pattern, { cwd: rootDir }).toSorted()) {
			console.log(`\t${path.replaceAll("\\", "/")}`);
		}
	}
}

const args = process.argv.slice(2);

if (args.length === 0) {
	console.error("Usage: node tools/chunk_lookup.ts <file or chunk id>...");
	process.exit(1);
}

for (const arg of args) {
	const idMatch = bareIdPattern.exec(arg);

	if (existsSync(arg)) {
		LookupFile(resolve(arg));
	} else if (idMatch !== null) {
		LookupId(idMatch[1]);
	} else {
		console.error(`Not a file or chunk id: ${arg}`);
		process.exitCode = 1;
	}
}
