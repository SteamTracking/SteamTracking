import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, resolve as pathResolve } from "node:path";
import { languages } from "./languages.ts";

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");

const apps = [
	{ host: "store.steampowered.com", app: "store" },
	{ host: "steamcommunity.com", app: "community" },
	{ host: "help.steampowered.com", app: "help" },
	{ host: "partner.steamgames.com", app: "appmgmt" },
];

const otherLanguages = languages.filter((language) => language !== "english");
const languagePattern = new RegExp(`_(${otherLanguages.join("|")})\\d*\\.js$`);

// Matches a relative .js or .css path inside any kind of quote.
const referencePattern = /["'`](\.{1,2}\/[^"'`\s]+?\.(?:js|css))["'`]/g;

const urls = new Set<string>();

for (const { host, app } of apps) {
	const folder = pathResolve(rootDir, host, "public/javascript/applications", app);
	const base = `https://${host}/public/javascript/applications/${app}/`;
	const files = (await readdir(folder)).filter((file) => extname(file).toLowerCase() === ".js");
	let references = 0;

	for (const file of files) {
		const code = await readFile(join(folder, file), "utf8");

		for (const match of code.matchAll(referencePattern)) {
			const url = new URL(match[1], base);

			if (languagePattern.test(url.pathname)) {
				continue;
			}

			references++;

			if (url.pathname.endsWith(".css")) {
				urls.add(`${url.origin}${url.pathname}?__TIME__&__CDN__`);
			} else {
				urls.add(`${url.origin}${url.pathname}?__TIME__&l=english&__CDN__`);
			}
		}
	}

	if (references === 0) {
		throw new Error(`No chunk references found for ${host} ${app}`);
	}
}

console.log("Found", urls.size, "Vite urls");

const strings = [...urls.values()].sort().join("\n") + "\n";

await writeFile(pathResolve(rootDir, ".support/urls_from_vite.txt"), strings);
