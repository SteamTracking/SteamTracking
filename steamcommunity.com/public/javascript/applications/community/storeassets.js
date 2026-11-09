/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { $f as e, Xh as t, em as n, jp as r, xp as i } from "./main.js";
function a(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let r = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${n.MEDIA_CDN_COMMUNITY_URL}${r}`;
    }
    if (typeof e[t] == `string`) {
      let r = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${n.STORE_ITEM_BASE_URL}${r}`;
    }
  }
}
function o(e, r = `full`) {
  let i = ``;
  switch (r) {
    case `thumb`:
      i = `.116x65`;
      break;
    case `600x338`:
      i = `.600x338`;
      break;
    case `1920x1080`:
      i = `.1920x1080`;
      break;
    case `full`:
      i = ``;
      break;
    default:
      t(r, `Invalid size: ${r}`);
  }
  return (
    n.STORE_ITEM_BASE_URL + e.filename.replace(/\.([^.]+)(\?.*)?$/, `${i}.$1$2`)
  );
}
function s(t) {
  let { data: n } = r(t),
    i = e();
  if (n)
    return [
      ...(n.all_ages_screenshots || []),
      ...(!i && n.mature_content_screenshots
        ? n.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
function c(e, t = !1) {
  let { data: r } = i({ appid: e });
  if (r !== void 0)
    return r === null
      ? null
      : t && r.library_capsule_2x
        ? a(r, `library_capsule_2x`)
        : r.library_capsule
          ? a(r, `library_capsule`)
          : `${n.STORE_ITEM_BASE_URL}steam/apps/${e}/portrait.png`;
}
function l(e, ...t) {
  let { data: n } = i(e);
  return u(n, ...t);
}
function u(e, ...t) {
  if (!e?.asset_url_format) return;
  let n = t.find((t) => {
    let n = e[t];
    return typeof n == `string` && n.trim() !== ``;
  });
  return n && a(e, n);
}
export { l as a, s as i, o as n, c as r, a as t };
