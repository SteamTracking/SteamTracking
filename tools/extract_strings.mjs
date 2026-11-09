import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { latestEcmaVersion, parse } from "espree";

/**
 * Returns the string value of a literal or an expression-free template literal, or null for anything else.
 */
export function GetStringValue(node) {
	if (node === null || node === undefined) {
		return null;
	}

	if (node.type === "Literal" && typeof node.value === "string") {
		return node.value;
	}

	if (node.type === "TemplateLiteral" && node.expressions.length === 0) {
		return node.quasis[0].value.cooked;
	}

	return null;
}

/**
 * Extracts the named exports of a localization chunk such as `var e=`Sorry!`;export{e as Title};`.
 * Returns an object of export name to string.
 */
export function ExtractStrings(code) {
	const ast = parse(code, {
		ecmaVersion: latestEcmaVersion,
		sourceType: "module",
	});

	const variables = new Map();

	for (const statement of ast.body) {
		if (statement.type !== "VariableDeclaration") {
			continue;
		}

		for (const declaration of statement.declarations) {
			if (declaration.id.type === "Identifier") {
				variables.set(declaration.id.name, declaration.init);
			}
		}
	}

	const strings = {};

	for (const statement of ast.body) {
		if (statement.type !== "ExportNamedDeclaration") {
			continue;
		}

		for (const specifier of statement.specifiers) {
			const exportName = specifier.exported.name ?? specifier.exported.value;

			if (exportName === "default") {
				continue;
			}

			const value = GetStringValue(variables.get(specifier.local.name));

			if (value === null) {
				throw new Error(`Export "${exportName}" is not a string`);
			}

			strings[exportName] = value;
		}
	}

	if (Object.keys(strings).length === 0) {
		throw new Error("No named exports found");
	}

	return strings;
}

/**
 * Returns the strings as JSON with sorted keys, matching PHP's unescaped pretty print.
 */
export function FormatStrings(strings) {
	// Written by hand because integer-like keys would be reordered by a plain object
	const lines = Object.keys(strings)
		.sort()
		.map((key) => `    ${JSON.stringify(key)}: ${JSON.stringify(strings[key])}`);

	return "{\n" + lines.join(",\n") + "\n}\n";
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	if (process.argv.length < 4) {
		console.error("Usage: node extract_strings.mjs <input.js> <output.json>");
		process.exit(1);
	}

	const code = await readFile(process.argv[2]);
	const strings = ExtractStrings(code);

	await writeFile(process.argv[3], FormatStrings(strings));
}
