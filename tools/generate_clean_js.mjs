/**
 * Webpack JavaScript Normalizer
 *
 * Normalizes minified webpack JavaScript files to reduce noise in git diffs.
 * This makes it easier to track actual code changes rather than just
 * minification differences between builds.
 *
 * DESIGN NOTES:
 * -------------
 * 1. AST-Based Processing:
 *    - Uses estraverse for AST traversal with proper scope tracking
 *    - Maintains variable shadowing through scope stack
 *    - Leverages estraverse's enter/leave callbacks for clean processing
 *
 * 2. Normalization Strategies:
 *    - CLSTAMP/Build ID: Replaces build timestamps with "steamdb"
 *    - Module IDs: Replaces numeric chunk IDs with "chunkid"
 *    - Short Variables: Replaces mangled identifiers with "_"
 *    - Webpack Parameters: Standardizes to module/module_exports/__webpack_require__
 *    - Require Patterns: Handles direct calls, method calls, and bind patterns
 *
 * 3. Special Handling:
 *    - Class safety: Avoids modifying constructor method structure
 *    - Scope-aware replacement: Respects variable shadowing
 *    - Sequence expressions: Preserves structure in comma expressions
 *
 */

import fs from "node:fs";
import { generate } from "astring";
import { Syntax, traverse } from "estraverse";
import { ParseJavascript } from "./dump_javascript_paths.mjs"; // also fixes estraverse Syntax and VisitorKeys

// Process command line arguments
const inputFile = process.argv[2];
if (!inputFile) {
	console.error("Error: Input file path required");
	process.exit(1);
}

const outputFile = process.argv[3]; // Optional

// Read input file
let sourceCode;
try {
	sourceCode = fs.readFileSync(inputFile, "utf8");
} catch (err) {
	console.error(`Error reading file: ${err.message}`);
	process.exit(1);
}

// Parse the JavaScript code into an AST
let ast;
try {
	ast = ParseJavascript(sourceCode, { ecmaFeatures: { jsx: true } });
} catch (err) {
	console.error(`Failed to parse JavaScript: ${err.message}`);
	process.exit(1);
}

const isSsrFile = inputFile.includes("/ssr/");

// Normalize the AST
function normalizeAst(ast) {
	// STEP 1: Normalize CLSTAMP if present
	if (ast.type === Syntax.Program && ast.body.length > 0) {
		const firstStmt = ast.body[0];
		if (firstStmt.type === Syntax.VariableDeclaration && firstStmt.declarations.length > 0) {
			const decl = firstStmt.declarations[0];
			if (
				decl.id &&
				decl.id.name === "CLSTAMP" &&
				decl.init &&
				decl.init.type === Syntax.Literal &&
				typeof decl.init.value === "string"
			) {
				decl.init.value = "steamdb";
				decl.init.raw = '"steamdb"';
			}
		}
	}

	// STEP 2: First pass to find webpack modules and require functions
	const webpackModules = new Map();
	const webpackRequires = new Set();

	// Find webpack modules and parameters
	traverse(ast, {
		enter: (node) => {
			if (
				node.type === Syntax.Property &&
				node.key &&
				node.key.type === Syntax.Literal &&
				typeof node.key.value === "number"
			) {
				if (node.value.type === Syntax.FunctionExpression || node.value.type === Syntax.ArrowFunctionExpression) {
					// Replace chunk IDs with "chunkid"
					node.key.value = "chunkid";
					node.key.raw = '"chunkid"';

					// Track webpack modules
					if (node.value.params.length === 3) {
						const moduleParam = node.value.params[0].name;
						const exportsParam = node.value.params[1].name;
						const requireParam = node.value.params[2].name;

						webpackModules.set(node.value, {
							moduleParam,
							exportsParam,
							requireParam,
						});

						webpackRequires.add(requireParam);

						// Standardize params
						node.value.params[0].name = "module";
						node.value.params[1].name = "module_exports";
						node.value.params[2].name = "__webpack_require__";
					} else if (node.value.params.length === 1) {
						const moduleParam = node.value.params[0].name;

						webpackModules.set(node.value, {
							moduleParam,
						});

						// Standardize param
						node.value.params[0].name = "module";
					}
				}
			}
			return node;
		},
	});

	// Add standardized require name to the set
	webpackRequires.add("__webpack_require__");

	// STEP 3: Second pass to update identifiers, respecting scope
	const scopes = [];
	const scopeFunctions = []; // parallel stack: which function owns each scope

	// Identifiers already renamed to "_". Their new name must not be mistaken for a
	// webpack module parameter that happens to be called "_".
	const shortenedNodes = new Set();

	function shortenIdentifier(target) {
		target.name = "_";
		shortenedNodes.add(target);
	}

	// Collect all binding identifiers from a pattern (handles destructuring, rest, defaults)
	function collectBindingIdentifiers(pattern, into) {
		if (!pattern) return;
		switch (pattern.type) {
			case Syntax.Identifier:
				into.push(pattern);
				break;
			case Syntax.ObjectPattern:
				for (const prop of pattern.properties) {
					collectBindingIdentifiers(prop.type === Syntax.RestElement ? prop.argument : prop.value, into);
				}
				break;
			case Syntax.ArrayPattern:
				for (const elem of pattern.elements) {
					if (elem) collectBindingIdentifiers(elem, into);
				}
				break;
			case Syntax.AssignmentPattern:
				collectBindingIdentifiers(pattern.left, into);
				break;
			case Syntax.RestElement:
				collectBindingIdentifiers(pattern.argument, into);
				break;
		}
	}

	// Bundlers name top-level bindings with one and two characters first and
	// move on to three characters once those run out. The names are assigned by
	// frequency, so adding a declaration renames many of them.
	const threeCharacterBindings = new Set();

	function collectTopLevelBindings(statement) {
		const bindings = [];
		switch (statement.type) {
			case Syntax.VariableDeclaration:
				for (const decl of statement.declarations) {
					collectBindingIdentifiers(decl.id, bindings);
				}
				break;
			case Syntax.FunctionDeclaration:
			case Syntax.ClassDeclaration:
				collectBindingIdentifiers(statement.id, bindings);
				break;
			case Syntax.ImportDeclaration:
				for (const specifier of statement.specifiers) {
					collectBindingIdentifiers(specifier.local, bindings);
				}
				break;
			case Syntax.ExportNamedDeclaration:
				if (statement.declaration) {
					collectTopLevelBindings(statement.declaration);
				}
				break;
		}
		for (const ident of bindings) {
			if (ident.name.length === 3) {
				threeCharacterBindings.add(ident.name);
			}
		}
	}

	for (const statement of ast.body) {
		collectTopLevelBindings(statement);
	}

	function isMangledName(name) {
		return name.length < 3 || threeCharacterBindings.has(name);
	}

	// Create a normalized chunk ID literal
	function createChunkIdLiteral() {
		return {
			type: Syntax.Literal,
			value: "chunkid",
			raw: '"chunkid"',
		};
	}

	// Main traversal for normalization
	traverse(ast, {
		enter: (node, parent) => {
			if (isSsrFile) {
				normalizeHashedAsset(node);
			}

			// Handle new scope for functions
			if (
				node.type === Syntax.FunctionExpression ||
				node.type === Syntax.ArrowFunctionExpression ||
				node.type === Syntax.FunctionDeclaration
			) {
				const newScope = new Set();

				// Add parameters to the new scope (handles destructuring, rest, defaults)
				if (node.params) {
					for (const param of node.params) {
						const bindings = [];
						collectBindingIdentifiers(param, bindings);
						for (const ident of bindings) {
							newScope.add(ident.name);

							// Normalize short parameter names in non-webpack modules
							if (isMangledName(ident.name) && !webpackModules.has(node)) {
								shortenIdentifier(ident);
							}
						}
					}
				}

				// For function declarations, add the function name to the parent scope
				if (node.type === Syntax.FunctionDeclaration && node.id && node.id.type === Syntax.Identifier) {
					if (scopes.length > 0) {
						scopes[scopes.length - 1].add(node.id.name);
					}
				}

				// Push the new scope
				scopes.push(newScope);
				scopeFunctions.push(node);
			}

			// Handle variable declarations - add to current scope
			if (node.type === Syntax.VariableDeclaration) {
				for (const decl of node.declarations) {
					const bindings = [];
					collectBindingIdentifiers(decl.id, bindings);
					for (const ident of bindings) {
						if (scopes.length > 0) {
							scopes[scopes.length - 1].add(ident.name);
						}

						if (isMangledName(ident.name)) {
							shortenIdentifier(ident);
						}
					}
				}
			}

			// Handle catch clause parameters
			if (node.type === Syntax.CatchClause && node.param) {
				const bindings = [];
				collectBindingIdentifiers(node.param, bindings);
				for (const ident of bindings) {
					if (scopes.length > 0) {
						scopes[scopes.length - 1].add(ident.name);
					}

					if (isMangledName(ident.name)) {
						shortenIdentifier(ident);
					}
				}
			}

			// Handle identifiers (variable references)
			if (node.type === Syntax.Identifier) {
				if (shortenedNodes.has(node)) {
					return;
				}

				// Skip if non-computed property key or class member key
				if (
					parent &&
					((parent.type === Syntax.Property && parent.key === node && !parent.computed) ||
						(parent.type === Syntax.MethodDefinition && parent.key === node) ||
						(parent.type === Syntax.PropertyDefinition && parent.key === node) ||
						(parent.type === Syntax.MemberExpression && parent.property === node && !parent.computed))
				) {
					return;
				}

				// Check for shadowing
				let isShadowed = false;
				for (let i = scopes.length - 1; i >= 0; i--) {
					if (scopes[i].has(node.name)) {
						isShadowed = true;
						break;
					}
				}

				// Handle based on shadowing status
				if (!isShadowed) {
					// Check if inside webpack module (O(1) via parallel stack)
					const containingFunc = scopeFunctions.length > 0 ? scopeFunctions[scopeFunctions.length - 1] : null;

					if (containingFunc && webpackModules.has(containingFunc)) {
						// Inside webpack module - replace webpack parameters
						const moduleInfo = webpackModules.get(containingFunc);

						if (node.name === moduleInfo.moduleParam) {
							node.name = "module";
						} else if (moduleInfo.exportsParam && node.name === moduleInfo.exportsParam) {
							node.name = "module_exports";
						} else if (moduleInfo.requireParam && node.name === moduleInfo.requireParam) {
							node.name = "__webpack_require__";
						} else if (isMangledName(node.name)) {
							node.name = "_";
						}
					} else {
						// Outside webpack module - only match the standardized name
						// for plain identifiers (call-site matching is handled separately)
						if (node.name === "__webpack_require__") {
							// already normalized
						} else if (isMangledName(node.name)) {
							node.name = "_";
						}
					}
				} else if (isMangledName(node.name)) {
					// Shadowed but short - normalize
					node.name = "_";
				}
			}

			// Handle non-computed object property keys
			if (
				node.type === Syntax.Property &&
				!node.computed &&
				node.key.type === Syntax.Identifier &&
				node.key.name.length < 3
			) {
				shortenIdentifier(node.key);
			}

			// Handle member expression properties
			if (
				node.type === Syntax.MemberExpression &&
				!node.computed &&
				node.property.type === Syntax.Identifier &&
				node.property.name.length < 3
			) {
				shortenIdentifier(node.property);
			}

			// Handle webpack require calls
			if (node.type === Syntax.CallExpression) {
				// Direct require calls
				if (node.callee.type === Syntax.Identifier && webpackRequires.has(node.callee.name)) {
					// Normalize function name
					node.callee.name = "__webpack_require__";

					// Normalize chunk ID argument
					if (
						node.arguments.length === 1 &&
						node.arguments[0].type === Syntax.Literal &&
						typeof node.arguments[0].value === "number"
					) {
						node.arguments[0] = createChunkIdLiteral();
					}
				}
				// Method calls
				else if (
					node.callee.type === Syntax.MemberExpression &&
					node.callee.object.type === Syntax.Identifier &&
					webpackRequires.has(node.callee.object.name)
				) {
					// Normalize object name
					node.callee.object.name = "__webpack_require__";

					// Normalize chunk ID argument
					if (
						node.arguments.length === 1 &&
						node.arguments[0].type === Syntax.Literal &&
						typeof node.arguments[0].value === "number"
					) {
						node.arguments[0] = createChunkIdLiteral();
					}

					// Bind calls
					if (node.callee.property.type === Syntax.Identifier && node.callee.property.name === "bind") {
						// Normalize require function in first argument
						if (
							node.arguments.length >= 1 &&
							node.arguments[0].type === Syntax.Identifier &&
							webpackRequires.has(node.arguments[0].name)
						) {
							node.arguments[0].name = "__webpack_require__";
						}

						// Normalize chunk ID in second argument
						if (
							node.arguments.length >= 2 &&
							node.arguments[1].type === Syntax.Literal &&
							typeof node.arguments[1].value === "number"
						) {
							node.arguments[1] = createChunkIdLiteral();
						}
					}
				}
			}

			// Handle JSON.parse calls with string literals
			if (
				node.type === Syntax.CallExpression &&
				node.callee.type === Syntax.MemberExpression &&
				node.callee.object.type === Syntax.Identifier &&
				node.callee.object.name === "JSON" &&
				node.callee.property.type === Syntax.Identifier &&
				node.callee.property.name === "parse" &&
				node.arguments.length === 1 &&
				node.arguments[0].type === Syntax.Literal &&
				typeof node.arguments[0].value === "string"
			) {
				try {
					// Parse the JSON string
					const jsonObj = JSON.parse(node.arguments[0].value);
					// Pretty-print the JSON with tab indentation
					const prettyJson = JSON.stringify(jsonObj, null, "\t");
					node.arguments[0] = {
						type: Syntax.TemplateLiteral,
						quasis: [
							{
								type: Syntax.TemplateElement,
								value: {
									raw: prettyJson,
									cooked: prettyJson,
								},
								tail: true,
							},
						],
						expressions: [],
					};
				} catch (err) {
					// Leave invalid JSON unchanged
					console.warn(`Warning: Failed to parse JSON in JSON.parse call: ${err.message}`);
				}
			}
		},

		leave: (node) => {
			// Remove scopes when leaving function nodes
			if (
				node.type === Syntax.FunctionExpression ||
				node.type === Syntax.ArrowFunctionExpression ||
				node.type === Syntax.FunctionDeclaration
			) {
				scopes.pop();
				scopeFunctions.pop();
			}
		},
	});

	return ast;
}

const hashedAssetPattern = /^(\.\/(?:assets\/)?)[\w-]{8}(\.(?:js|css))$/;

// SSR files are named by content hash, so a reference changes whenever the file it
// points at is rebuilt, and the name means nothing across builds.
function normalizeHashedAsset(node) {
	if (node.type === Syntax.Literal && typeof node.value === "string") {
		const normalized = node.value.replace(hashedAssetPattern, "$1chunk$2");
		if (normalized !== node.value) {
			node.value = normalized;
			node.raw = JSON.stringify(normalized);
		}
	} else if (node.type === Syntax.TemplateElement) {
		const normalized = node.value.raw.replace(hashedAssetPattern, "$1chunk$2");
		if (normalized !== node.value.raw) {
			node.value = { raw: normalized, cooked: normalized };
		}
	}
}

// Normalize the AST and generate the output code
const normalizedAst = normalizeAst(ast);

// Remove static import declarations from SSR files, after normalization all imports
// are indistinguishable (import { _ } from "./chunk.js") and Vite reorders
// them across builds, creating diff churn with no meaningful information
if (isSsrFile) {
	normalizedAst.body = normalizedAst.body.filter((node) => node.type !== Syntax.ImportDeclaration);
}

const normalizedCode = generate(normalizedAst, {
	indent: "  ",
});

if (outputFile) {
	fs.writeFileSync(outputFile, normalizedCode);
} else {
	// Print to stdout
	process.stdout.write(normalizedCode);
}
