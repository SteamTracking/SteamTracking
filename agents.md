# SteamTracking

Tracks Steam web and client files over time. Keep diff noise per commit low.

`update.sh` runs `update.php`, then commits and pushes. To test locally, run `php update.php` with `STEAM_API_KEY` set.

Tools are TypeScript run directly by Node, with no build step. Format and lint `tools/` with `npm run fix`, type check with `npm test`. `npm run prettier` is for downloaded files.

## Update flow

- `urls.txt` lists what `update.php` fetches.
- `tools/generate_vite_urls.ts` finds chunks referenced by app JS under `applications/`. Fetching repeats until nothing new appears, and chunks no longer referenced are deleted.
- `SSR @` pages and `tools/generate_ssr_urls.ts` find SSR bundles. Raw `ssr/` folders are ignored by git, only `c/` copies are tracked.
- `tools/extract_client.php` unpacks client archives into `ClientExtracted/`.
- Dump tools write `ProtobufsWebui/`, `Structs/webui_enums.steamd`, `API/JavascriptUrls.txt` and `Random/Images/`. The image dump deletes output it no longer finds.

## Saved files

- The four web apps (store, community, help, partner) are Vite builds. Dota 2, Counter-Strike, Deadlock and the client are webpack builds.
- `contenthash` is stripped from saved files.
- `c/` holds normalized JS. Do not mark it `linguist-generated`: its diffs are the ones to read.
- English chunks under `applications/` are saved as sorted JSON. SSR English chunks merge into `Strings/*_ssr_english.json`. Web files in other languages are skipped; `ClientExtracted/` keeps them.
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
