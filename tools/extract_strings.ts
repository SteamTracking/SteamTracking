import { latestEcmaVersion, parse } from "espree";
import type { Expression, Identifier, Node, Program } from "estree";

/**
 * Returns the string value of a literal or an expression-free template literal, or null for anything else.
 */
export function GetStringValue(node: Node | null | undefined): string | null {
	if (node === null || node === undefined) {
		return null;
	}

	if (node.type === "Literal" && typeof node.value === "string") {
		return node.value;
	}

	if (node.type === "TemplateLiteral" && node.expressions.length === 0) {
		return node.quasis[0].value.cooked ?? null;
	}

	return null;
}

/**
 * Extracts the named exports of a localization chunk such as `var e=`Sorry!`;export{e as Title};`.
 * Returns an object of export name to string.
 */
export function ExtractStrings(code: string): Record<string, string> {
	const ast = parse(code, {
		ecmaVersion: latestEcmaVersion,
		sourceType: "module",
	}) as unknown as Program;

	const variables = new Map<string, Expression | null | undefined>();

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

	const strings: Record<string, string> = {};

	for (const statement of ast.body) {
		if (statement.type !== "ExportNamedDeclaration") {
			continue;
		}

		for (const specifier of statement.specifiers) {
			const exported = specifier.exported;
			const exportName = exported.type === "Identifier" ? exported.name : String(exported.value);

			if (exportName === "default") {
				continue;
			}

			const local = specifier.local as Identifier;
			const value = GetStringValue(variables.get(local.name));

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
 * Returns the strings as JSON with sorted keys and unescaped unicode.
 */
export function FormatStrings(strings: Record<string, string>): string {
	// Written by hand because integer-like keys would be reordered by a plain object
	const lines = Object.keys(strings)
		.toSorted()
		.map((key) => `    ${JSON.stringify(key)}: ${JSON.stringify(strings[key])}`);

	return "{\n" + lines.join(",\n") + "\n}\n";
}
