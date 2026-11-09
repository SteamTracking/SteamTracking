import { readdir as readDir } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
import { latestEcmaVersion, type Options, parse } from "espree";
import { Syntax, VisitorKeys } from "estraverse";
import type { Program } from "estree";

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");

// https://github.com/estools/estraverse/pull/120
(Syntax as Record<string, string>).StaticBlock = "StaticBlock";
(VisitorKeys as Record<string, string[]>).StaticBlock = ["body"];

const pathsToRecurse = [
	pathResolve(rootDir, "ClientExtracted/"),
	pathResolve(rootDir, "help.steampowered.com/"),
	pathResolve(rootDir, "partner.steamgames.com/"),
	pathResolve(rootDir, "partner.steampowered.com/"),
	pathResolve(rootDir, "steamcommunity.com/"),
	pathResolve(rootDir, "store.steampowered.com/"),
	pathResolve(rootDir, "checkout.steampowered.com/"),
	pathResolve(rootDir, "www.dota2.com/"),
	pathResolve(rootDir, "www.counter-strike.net/"),
	pathResolve(rootDir, "www.playdeadlock.com/"),
];

async function CollectJavascriptFiles(dir: string, out: string[]): Promise<void> {
	const dirents = await readDir(dir, { withFileTypes: true });

	for (const dirent of dirents) {
		const res = pathResolve(dir, dirent.name);

		if (dirent.isDirectory()) {
			await CollectJavascriptFiles(res, out);
		} else if (dirent.isFile() && dirent.name.endsWith(".js") && dirent.name !== "licenses.js") {
			out.push(res);
		}
	}
}

/**
 * Parses as a module, falling back to a script because legacy files can contain
 * code that is only valid in sloppy mode (e.g. duplicate top-level function declarations).
 */
export function ParseJavascript(code: string, options?: Options): Program {
	try {
		return parse(code, {
			...options,
			ecmaVersion: latestEcmaVersion,
			sourceType: "module",
		}) as unknown as Program;
	} catch (e) {
		if (!(e instanceof SyntaxError)) {
			throw e;
		}

		return parse(code, {
			...options,
			ecmaVersion: latestEcmaVersion,
			sourceType: "script",
		}) as unknown as Program;
	}
}

export async function GetFilesToParse(): Promise<string[]> {
	const files: string[] = [];

	for (const path of pathsToRecurse) {
		await CollectJavascriptFiles(path, files);
	}

	return files.toSorted();
}
