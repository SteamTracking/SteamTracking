import type { Expression, Identifier, Literal, Node, ObjectExpression } from "estree";
import { ParseJavascript } from "./dump_javascript_paths.ts";

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
 * Extracts the strings of a localization chunk such as `var e=`Sorry!`,t={Title:e};export{e as Title,t as default};`.
 * The default export object holds every string, including keys such as `"Loading..."` that cannot be export names.
 * Chunks without a default export are read from their named exports.
 * Returns an object of string name to string.
 */
export function ExtractStrings(code: string): Record<string, string> {
	const ast = ParseJavascript(code);

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
	let defaultObject: ObjectExpression | null = null;

	for (const statement of ast.body) {
		if (statement.type !== "ExportNamedDeclaration") {
			continue;
		}

		for (const specifier of statement.specifiers) {
			const exported = specifier.exported;
			const exportName = exported.type === "Identifier" ? exported.name : String(exported.value);
			const local = specifier.local as Identifier;

			if (exportName === "default") {
				const value = variables.get(local.name);

				if (value?.type !== "ObjectExpression") {
					throw new Error("Default export is not an object");
				}

				defaultObject = value;
				continue;
			}

			const value = GetStringValue(variables.get(local.name));

			if (value === null) {
				throw new Error(`Export "${exportName}" is not a string`);
			}

			strings[exportName] = value;
		}
	}

	if (defaultObject !== null) {
		for (const property of defaultObject.properties) {
			if (property.type !== "Property" || property.computed) {
				throw new Error("Default export has a property that is not a plain key");
			}

			const key = property.key.type === "Identifier" ? property.key.name : String((property.key as Literal).value);
			let value = GetStringValue(property.value);

			if (value === null && property.value.type === "Identifier") {
				value = GetStringValue(variables.get(property.value.name));
			}

			if (value === null) {
				throw new Error(`Default export "${key}" is not a string`);
			}

			strings[key] = value;
		}

		return strings;
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
	if (Object.keys(strings).length === 0) {
		return "{}\n";
	}

	// Written by hand because integer-like keys would be reordered by a plain object
	const lines = Object.keys(strings)
		.toSorted()
		.map((key) => `    ${JSON.stringify(key)}: ${JSON.stringify(strings[key])}`);

	return "{\n" + lines.join(",\n") + "\n}\n";
}
