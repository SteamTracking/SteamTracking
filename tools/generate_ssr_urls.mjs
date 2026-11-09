import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, extname, join, resolve as pathResolve } from "node:path";
import { latestEcmaVersion, parse } from "espree";
import { Syntax, traverse } from "estraverse";
import { ExtractStrings, FormatStrings, GetStringValue } from "./extract_strings.mjs";
import "./dump_javascript_paths.mjs"; // fixing estraverse Syntax and VisitorKeys
import { languages } from "./languages.mjs";

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

const urls = new Set();

/**
 * Language chunks are imported as `x.russian = () => import(...)` or as `"sales_russian.json": () => import(...)`.
 * The nearest assignment or object key names the language.
 * Returns the language, or null when the import is not a language chunk.
 */
function GetLanguageChunk(parents) {
	for (let i = parents.length - 1; i >= 0; i--) {
		const parent = parents[i];
		let key;

		if (parent.type === Syntax.AssignmentExpression && parent.left.type === Syntax.MemberExpression) {
			key = parent.left.property.name;
		} else if (parent.type === Syntax.Property) {
			key = parent.key.name ?? parent.key.value;
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
async function MergeEnglishChunks(folder, cleanFolder, chunks, stringsFile) {
	const merged = {};
	let found = 0;

	for (const chunk of [...chunks].sort()) {
		let strings;

		try {
			strings = ExtractStrings(await readFile(join(folder, chunk)));
		} catch (e) {
			if (e.code === "ENOENT") {
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
	const englishChunks = new Set();

	for (const file of files) {
		try {
			const code = await readFile(join(folder, file));
			const ast = parse(code, {
				ecmaVersion: latestEcmaVersion,
				sourceType: "module",
			});

			traverse(ast, {
				enter: function (node) {
					if (node.type !== Syntax.ImportDeclaration && node.type !== Syntax.ImportExpression) {
						return;
					}

					const importPath = GetStringValue(node.source);

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
