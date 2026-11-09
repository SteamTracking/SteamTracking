import { readFile, writeFile } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
import { latestEcmaVersion, parse } from "espree";
import { Syntax, traverse } from "estraverse";
import type {
	BinaryExpression,
	ConditionalExpression,
	Identifier,
	Literal,
	MemberExpression,
	Node,
	Program,
	TemplateElement,
	TemplateLiteral,
} from "estree";
import { GetFilesToParse } from "./dump_javascript_paths.ts";

const __dirname = import.meta.dirname;

const allStrings = new Set<string>();

for (const file of await GetFilesToParse()) {
	try {
		const code = await readFile(file, "utf8");
		const ast = parse(code, {
			ecmaVersion: latestEcmaVersion,
			sourceType: "module",
			loc: true,
		}) as unknown as Program;

		traverse(ast, {
			enter: function (node) {
				if (node.type === Syntax.TemplateLiteral && (node as TemplateLiteral).expressions.some(IsBaseUrlExpression)) {
					allStrings.add(ConstructLiteral(node as TemplateLiteral));
					this.skip();
				} else if (node.type === Syntax.Literal && IsBaseUrlExpression(node)) {
					allStrings.add(FormatNode(node, true).join(""));
					this.skip();
				} else if (node.type === Syntax.BinaryExpression && IsLeftSideBaseUrlExpression(node as BinaryExpression)) {
					allStrings.add(FormatNode(node, true).join(""));
					this.skip();
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${file}": ${e}`);
	}
}

console.log("Found", allStrings.size, "strings");

const strings = [...allStrings.values()].sort().join("\n") + "\n";

await writeFile(pathResolve(__dirname, "../API/JavascriptUrls.txt"), strings);

function IsLeftSideBaseUrlExpression(node: BinaryExpression): boolean {
	return node.left.type === Syntax.BinaryExpression
		? IsLeftSideBaseUrlExpression(node.left as BinaryExpression)
		: IsBaseUrlExpression(node.left);
}

function IsBaseUrlExpression(node: Node): boolean {
	const literal = node as Literal;
	const member = node as MemberExpression;

	if (
		node.type === Syntax.Literal &&
		typeof literal.value === "string" &&
		(literal.value.startsWith("http://") ||
			literal.value.startsWith("https://") ||
			literal.value.startsWith("steam://"))
	) {
		return true;
	}

	if (node.type === Syntax.Identifier && IsUrlVariable((node as Identifier).name)) {
		return true;
	}

	return (
		node.type === Syntax.MemberExpression &&
		member.property.type === Syntax.Identifier &&
		IsUrlVariable((member.property as Identifier).name)
	);
}

function IsUrlVariable(name: string): boolean {
	const n = name.toUpperCase();
	return n.endsWith("URL") || n.startsWith("BASE_URL_");
}

function IsSafeName(name: string): boolean {
	return name.length > 2 || name.toUpperCase() === "ID";
}

function ConstructLiteral(parent: TemplateLiteral): string {
	const nodes = ([...(parent.expressions || []), ...(parent.quasis || [])] as (Node & { start: number })[]).sort(
		(a, b) => a.start - b.start,
	);
	const str: unknown[] = [];

	for (const node of nodes) {
		str.push(...FormatNode(node));
	}

	return str.join("");
}

function FormatNode(node: Node, noWrap = false): unknown[] {
	const str: unknown[] = [];
	const templateElement = node as TemplateElement;
	const member = node as MemberExpression;
	const identifier = node as Identifier;
	const conditional = node as ConditionalExpression;
	const template = node as TemplateLiteral;
	const literal = node as Literal;
	const binary = node as BinaryExpression;

	if (node.type === Syntax.TemplateElement) {
		str.push(templateElement.value.raw);
	} else if (
		node.type === Syntax.MemberExpression &&
		member.property.type === Syntax.Identifier &&
		IsSafeName((member.property as Identifier).name)
	) {
		str.push(`\${${(member.property as Identifier).name}}`);
	} else if (node.type === Syntax.Identifier && IsSafeName(identifier.name)) {
		str.push(`\${${identifier.name}}`);
	} else if (node.type === Syntax.ConditionalExpression) {
		const testMember = conditional.test as MemberExpression;
		const testIdentifier = conditional.test as Identifier;

		str.push("${");

		if (
			conditional.test.type === Syntax.MemberExpression &&
			testMember.property.type === Syntax.Identifier &&
			IsSafeName((testMember.property as Identifier).name)
		) {
			str.push((testMember.property as Identifier).name);
		} else if (conditional.test.type === Syntax.Identifier && IsSafeName(testIdentifier.name)) {
			str.push(testIdentifier.name);
		} else {
			str.push("_");
		}

		str.push(" ? ");

		if (conditional.consequent.type === Syntax.Literal) {
			str.push((conditional.consequent as Literal).raw);
		} else if (conditional.consequent.type === Syntax.TemplateLiteral) {
			str.push(`\`${ConstructLiteral(conditional.consequent as TemplateLiteral)}\``);
		} else {
			str.push("_");
		}

		str.push(" : ");

		if (conditional.alternate.type === Syntax.Literal) {
			str.push((conditional.alternate as Literal).raw);
		} else if (conditional.alternate.type === Syntax.TemplateLiteral) {
			str.push(`\`${ConstructLiteral(conditional.alternate as TemplateLiteral)}\``);
		} else {
			str.push("_");
		}

		str.push("}");
	} else if (node.type === Syntax.TemplateLiteral) {
		if (noWrap) {
			str.push(ConstructLiteral(template));
		} else {
			str.push(`\`${ConstructLiteral(template)}\``);
		}
	} else if (node.type === Syntax.Literal) {
		str.push(literal.value);
	} else if (node.type === Syntax.BinaryExpression) {
		str.push(...FormatNode(binary.left, true));
		str.push(...FormatNode(binary.right, true));
	} else {
		// biome-ignore lint: noTemplateCurlyInString
		str.push("${}");
	}

	return str;
}
