# SteamTracking

Tracks Steam web and client files over time. Keep diff noise per commit low: where the tools choose a saved name or output format, keep it stable across builds.

Tools only support what is currently fetched and served. When a format or file is no longer served, delete the code that handled it.

`tools/update.ts` updates the files and `tools/commit.ts` commits and pushes. To test locally, run `node tools/update.ts` with `STEAM_API_KEY` set.

Tools are TypeScript run directly by Node, with no build step. Fix lint and format in `tools/` with `npm run fix`, check lint, format and types with `npm test`. Downloaded `.js`, `.css` and `.json` files are formatted with oxfmt by `tools/format_files.ts`.

## Update flow

- `tools/update.ts` runs the steps in order. `urls.txt` lists what `tools/fetch_urls.ts` fetches.
- `tools/handle_response.ts` validates and saves each response. A rejected response records no ETag, so it is fetched again.
- `tools/vite.ts` walks from the `applications/` entries in `urls.txt` through the chunks they reference. Fetching repeats until nothing new appears, then files in the app folders that were not reached, or that the server no longer has, are deleted.
- Language chunks are recognized by how they are imported, such as `x.russian = () => import(...)`, not by their file names.
- `SSR @` pages and `tools/ssr.ts` find SSR bundles, and keep the list of SSR sites. Raw `ssr/` folders are ignored by git, only `c/` copies are tracked. Old SSR files are deleted only when every SSR page was parsed. The route table each SSR page embeds is saved to `Random/SsrRoutes.txt`.
- `tools/extract_client.ts` unpacks client archives into `ClientExtracted/`.
- Dump tools write `ProtobufsWebui/`, `Structs/webui_enums.steamd`, `API/JavascriptUrls.txt` and `Random/Images/`. The image dump deletes output it no longer finds.

## Saved files

- The four web apps (store, community, help, partner) are Vite builds. Dota 2, Counter-Strike, Deadlock and the client are webpack builds.
- `chunk~<id>` file names are hashes of source paths. `tools/chunk_names.ts` explains the hash and lists the known source paths; add new ones there. Files are saved under the readable name when one is known, and keep the `chunk~` name otherwise.
- To follow a `chunk~` import to its saved file, run `node tools/chunk_lookup.ts <file or id>`.
- `contenthash` is stripped from saved files.
- `c/` holds normalized JS. Do not mark it `linguist-generated`: its diffs are the ones to read.
- English chunks under `applications/` and `*_english-json.js` bundles are saved as JSON only. SSR English chunks merge into `Strings/*_ssr_english.json`. Web files in other languages are skipped; `ClientExtracted/` keeps them.
- Binary file types must be listed in `.gitattributes`, because everything else is normalized to LF.

## urls.txt

One entry per line, sorted within each section. Blank lines and lines starting with `/` are ignored.

- `https://host/path?query` saves to `host/path`.
- `file/path @ https://host/path?query` saves to `file/path`.
- `SSR @ https://host/page` tracks the SSR assets listed in the page's `clientAssets`.

Placeholders: `__TIME__` adds a cache buster, `__CDN__` selects the CDN, `__KEY__` adds the Web API key.

JS files use `?__TIME__&l=english&__CDN__`, CSS files use `?__TIME__&__CDN__`. Never add `contenthash`.

Use the site's own host, not a CDN host: `/public/` URLs on `store.steampowered.com` and `steamcommunity.com` are rewritten to the CDN when fetched.

List only entry files under `applications/`. Chunks they reference are discovered automatically.
