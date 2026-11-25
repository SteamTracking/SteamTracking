/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pp as e, eg as t, ep as n, rm as r, wp as i } from "./main.js";
function a(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let n = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${r.MEDIA_CDN_COMMUNITY_URL}${n}`;
    }
    if (typeof e[t] == `string`) {
      let n = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${r.STORE_ITEM_BASE_URL}${n}`;
    }
  }
}
function o(e, n = `full`) {
  let i = ``;
  switch (n) {
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
      t(n, `Invalid size: ${n}`);
  }
  return (
    r.STORE_ITEM_BASE_URL + e.filename.replace(/\.([^.]+)(\?.*)?$/, `${i}.$1$2`)
  );
}
function s(t) {
  let { data: r } = e(t),
    i = n();
  if (r)
    return [
      ...(r.all_ages_screenshots || []),
      ...(!i && r.mature_content_screenshots
        ? r.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
function c(e, t = !1) {
  let { data: n } = i({ appid: e });
  if (n !== void 0)
    return n === null
      ? null
      : t && n.library_capsule_2x
        ? a(n, `library_capsule_2x`)
        : n.library_capsule
          ? a(n, `library_capsule`)
          : `${r.STORE_ITEM_BASE_URL}steam/apps/${e}/portrait.png`;
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
