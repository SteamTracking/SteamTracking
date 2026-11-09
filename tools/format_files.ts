import { readFileSync, writeFileSync } from "node:fs";
import { extname } from "node:path";
import { format } from "oxfmt";
import { Log } from "./log.ts";

const formattedExtensions = new Set([".css", ".js", ".json"]);

/**
 * Formats the css, js and json files in place. Embedded languages are left alone so that
 * template literals stay untouched. Files that fail to parse are left as they are.
 */
export async function FormatFiles(files: string[]): Promise<void> {
	for (const file of files) {
		if (!formattedExtensions.has(extname(file))) {
			continue;
		}

		const source = readFileSync(file, "utf8");
		const result = await format(file, source, {
			printWidth: 80,
			tabWidth: 2,
			useTabs: false,
			endOfLine: "lf",
			embeddedLanguageFormatting: "off",
		});

		if (result.errors.length > 0) {
			Log(`{lightred}Failed to format ${file}: ${result.errors[0].message}`);
			continue;
		}

		writeFileSync(file, result.code);
	}
}
