import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, extname, join, resolve as pathResolve } from "node:path";
import { latestEcmaVersion, parse } from "espree";
import { Syntax, traverse } from "estraverse";
import type {
	AssignmentExpression,
	Identifier,
	ImportDeclaration,
	ImportExpression,
	Literal,
	MemberExpression,
	Node,
	Program,
	Property,
} from "estree";
import { ExtractStrings, FormatStrings, GetStringValue } from "./extract_strings.ts";
import "./dump_javascript_paths.ts"; // fixing estraverse Syntax and VisitorKeys
import { languages } from "./languages.ts";

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");

const folders = [
	{
		folder: pathResolve(rootDir, "store.steampowered.com/ssr"),
		cleanFolder: pathResolve(rootDir, "c/store.steampowered.com/ssr"),
		stringsFile: pathResolve(rootDir, "Strings/store_ssr_english.json"),
		cdn: "https://cdn.fastly.steamstatic.com/store/ssr/",
	},
	{
		folder: pathResolve(rootDir, "steamcommunity.com/ssr"),
		cleanFolder: pathResolve(rootDir, "c/steamcommunity.com/ssr"),
		stringsFile: pathResolve(rootDir, "Strings/community_ssr_english.json"),
		cdn: "https://cdn.fastly.steamstatic.com/steamcommunity/public/ssr/",
	},
	{
		folder: pathResolve(rootDir, "partner.steamgames.com/ssr"),
		cleanFolder: pathResolve(rootDir, "c/partner.steamgames.com/ssr"),
		stringsFile: pathResolve(rootDir, "Strings/partner_ssr_english.json"),
		cdn: "https://cdn.fastly.steamstatic.com/appmgmt/ssr/",
	},
];

// Matches "russian" and "sales_russian.json"
const languageKeyPattern = new RegExp(`^(?:.*_)?(${languages.join("|")})(?:\\.json)?$`);

const urls = new Set<string>();

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

	for (const chunk of [...chunks].sort()) {
		let strings: Record<string, string>;

		try {
			strings = ExtractStrings(await readFile(join(folder, chunk), "utf8"));
		} catch (e) {
			if ((e as NodeJS.ErrnoException).code === "ENOENT") {
				continue;
			}

			console.error(`Unable to extract strings from "${chunk}": ${e}`);
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

	console.log("Merged", found, "English chunks into", Object.keys(merged).length, "strings");

	await writeFile(stringsFile, FormatStrings(merged));
}

for (const { folder, cleanFolder, cdn, stringsFile } of folders) {
	const files = (await readdir(folder)).filter((file) => extname(file).toLowerCase() === ".js");
	const englishChunks = new Set<string>();

	for (const file of files) {
		try {
			const code = await readFile(join(folder, file), "utf8");
			const ast = parse(code, {
				ecmaVersion: latestEcmaVersion,
				sourceType: "module",
			}) as unknown as Program;

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

					const url = new URL(cdn);
					url.pathname += importPath;
					urls.add(url.toString());
				},
			});
		} catch (e) {
			console.error(`Unable to parse "${file}": ${e}`);
		}
	}

	await MergeEnglishChunks(folder, cleanFolder, englishChunks, stringsFile);
}

console.log("Found", urls.size, "SSR urls");

const strings = [...urls.values()].sort().join("\n") + "\n";

await writeFile(pathResolve(rootDir, ".support/urls_from_ssr.txt"), strings);
