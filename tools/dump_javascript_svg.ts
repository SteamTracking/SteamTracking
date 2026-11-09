import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
import { Syntax, traverse } from "estraverse";
import type {
	ArrayExpression,
	CallExpression,
	Identifier,
	Literal,
	MemberExpression,
	Node,
	ObjectExpression,
	Property,
	SequenceExpression,
	TemplateLiteral,
} from "estree";
import { create as createXml } from "xmlbuilder2";
import type { XMLBuilder } from "xmlbuilder2/lib/interfaces.js";
import { GetFilesToParse, ParseJavascript } from "./dump_javascript_paths.ts";

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");
const outputPath = pathResolve(rootDir, "Random/Images");

const writtenFiles = new Set<string>();

const svgKeyMap: Record<string, string> = {
	ariaLabel: "aria-label",
	clipPath: "clip-path",
	clipRule: "clip-rule",
	colorInterpolationFilters: "color-interpolation-filters",
	dataName: "data-name",
	enableBackground: "enable-background",
	fillOpacity: "fill-opacity",
	fillRule: "fill-rule",
	filterUnits: "filter-units",
	floodColor: "flood-color",
	floodOpacity: "flood-opacity",
	fontFamily: "font-family",
	fontSize: "font-size",
	fontWeight: "font-weight",
	gradientUnits: "gradient-units",
	markerEnd: "marker-end",
	markerHeight: "marker-height",
	markerWidth: "marker-width",
	maskType: "mask-type",
	maskUnits: "mask-units",
	patternContentUnits: "pattern-content-units",
	stopColor: "stop-color",
	stopOpacity: "stop-opacity",
	strokeDasharray: "stroke-dasharray",
	strokeDashoffset: "stroke-dashoffset",
	strokeLinecap: "stroke-linecap",
	strokeLinejoin: "stroke-linejoin",
	strokeMiterlimit: "stroke-miterlimit",
	strokeOpacity: "stroke-opacity",
	strokeWidth: "stroke-width",
	textAnchor: "text-anchor",
	xlinkHref: "xlink:href",
};

mkdirSync(outputPath, { recursive: true });

for (const file of await GetFilesToParse()) {
	try {
		const code = await readFile(file, "utf8");

		if (!file.endsWith(".js")) {
			continue;
		}

		const ast = ParseJavascript(code, { loc: true });

		traverse(ast, {
			enter: function (node) {
				if (node.type === Syntax.CallExpression) {
					const call = node as CallExpression;
					let calleeName: string | null = null;

					if (call.callee?.type === Syntax.SequenceExpression) {
						const expressions = (call.callee as SequenceExpression).expressions;
						const last = expressions[expressions.length - 1];
						if (last?.type === Syntax.MemberExpression) {
							calleeName = ((last as MemberExpression).property as Identifier).name;
						}
					} else if (call.callee?.type === Syntax.MemberExpression) {
						calleeName = ((call.callee as MemberExpression).property as Identifier).name;
					}

					const tagName = getLiteralValue(call.arguments?.[0]);

					if ((calleeName === "createElement" || calleeName === "jsx" || calleeName === "jsxs") && tagName === "svg") {
						const svg = createSvgBody(call).end({ prettyPrint: true });
						if (svg.length > 0) {
							const content = Buffer.from(`${svg}\n`, "utf8");
							OutputToFile("svg", content);
						}

						this.skip();
						return;
					}
				}

				const strValue = getLiteralValue(node);
				if (typeof strValue === "string" && strValue.startsWith("data:image/")) {
					const marker = ";base64,";
					const commaIndex = strValue.indexOf(marker);
					if (commaIndex === -1) {
						return;
					}

					const header = strValue.substring(0, commaIndex);
					const base64Data = strValue.substring(commaIndex + marker.length);

					let extension: string;
					if (header === "data:image/png") {
						extension = "png";
					} else if (header === "data:image/jpeg" || header === "data:image/jpg") {
						extension = "jpg";
					} else if (header === "data:image/gif") {
						extension = "gif";
					} else if (header === "data:image/webp") {
						extension = "webp";
					} else if (header === "data:image/svg+xml") {
						extension = "svg";
					} else {
						console.warn(`Unknown data URI header: ${header}`);
						return;
					}

					const data = Buffer.from(base64Data, "base64");
					OutputToFile(extension, data);
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${file}": ${e}`);
	}
}

const allFiles = readdirSync(outputPath).map((f) => `${outputPath}/${f}`);
for (const file of allFiles) {
	if (!writtenFiles.has(file)) {
		console.log("Removing unused file:", file);
		rmSync(file);
	}
}

console.log("Extracted", writtenFiles.size, "files.");

function createSvgBody(node: CallExpression, xml: XMLBuilder = createXml()): XMLBuilder {
	if (!node) {
		return xml;
	}

	try {
		const tagName = getLiteralValue(node.arguments?.[0]);
		if (typeof tagName !== "string") {
			return xml;
		}

		const elem = xml.ele(tagName);

		let childrenProp: Node | null = null;
		const props = node.arguments[1] as ObjectExpression | undefined;
		if (props?.properties) {
			for (const prop of props.properties as Property[]) {
				if (prop.type === Syntax.SpreadElement || (prop.key as Identifier).name === "className") {
					continue;
				}

				if ((prop.key as Identifier).name === "children") {
					childrenProp = prop.value;
					continue;
				}

				const literalVal = getLiteralValue(prop.value);
				const val = (literalVal !== null ? literalVal : "") as string;

				elem.att(FixSVGKeyName(prop.key as Identifier), val);
			}
		}

		let children: (Node | null)[] = [];
		if (node.arguments.length > 2) {
			children = node.arguments.slice(2);
		} else if (childrenProp) {
			if (childrenProp.type === Syntax.ArrayExpression) {
				children = (childrenProp as ArrayExpression).elements;
			} else {
				children = [childrenProp];
			}
		}

		if (children) {
			for (const child of children) {
				if (
					child?.type === Syntax.CallExpression &&
					typeof getLiteralValue((child as CallExpression).arguments?.[0]) === "string"
				) {
					createSvgBody(child as CallExpression, elem);
				}
			}
		}
	} catch (e) {
		console.error(e, node);
	}

	return xml;
}

function FixSVGKeyName(key: { name?: string; value?: string }): string {
	// if a key has a dash in it, it's under value not name
	const keyName = (key.name || key.value) as string;
	return svgKeyMap[keyName] || keyName;
}

async function OutputToFile(extension: string, content: Buffer<ArrayBuffer>) {
	if (content.length === 0) {
		return;
	}

	const hash = createHash("sha3-384").update(content).digest("hex").substring(0, 20);
	const fileName = `${outputPath}/${hash}.${extension}`;
	writtenFiles.add(fileName);

	if (existsSync(fileName)) {
		return;
	}

	console.log("Writing file:", fileName);

	await writeFile(fileName, content);
}

// fix for strings using a backquote ` instead of a double quote "
function getLiteralValue(node: Node | null | undefined) {
	if (!node) {
		return null;
	}

	if (node.type === Syntax.Literal) {
		return (node as Literal).value;
	}

	if (node.type === Syntax.TemplateLiteral && (node as TemplateLiteral).expressions.length === 0) {
		const quasi = (node as TemplateLiteral).quasis[0];
		return quasi?.value?.cooked ?? quasi?.value?.raw ?? null;
	}

	return null;
}
