/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { ap as e, cm as t, ig as n, kp as r, zp as i } from "./main.js";
function a(e, n) {
  if (e[n]) {
    if (n == `community_icon`) {
      let r = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[n]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${t.MEDIA_CDN_COMMUNITY_URL}${r}`;
    }
    if (typeof e[n] == `string`) {
      let r = e.asset_url_format.replace("${FILENAME}", e[n]);
      return `${t.STORE_ITEM_BASE_URL}${r}`;
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
      n(r, `Invalid size: ${r}`);
  }
  return (
    t.STORE_ITEM_BASE_URL + e.filename.replace(/\.([^.]+)(\?.*)?$/, `${i}.$1$2`)
  );
}
function s(t) {
  let { data: n } = i(t),
    r = e();
  if (n)
    return [
      ...(n.all_ages_screenshots || []),
      ...(!r && n.mature_content_screenshots
        ? n.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
function c(e, n = !1) {
  let { data: i } = r({ appid: e });
  if (i !== void 0)
    return i === null
      ? null
      : n && i.library_capsule_2x
        ? a(i, `library_capsule_2x`)
        : i.library_capsule
          ? a(i, `library_capsule`)
          : `${t.STORE_ITEM_BASE_URL}steam/apps/${e}/portrait.png`;
}
function l(e, ...t) {
  let { data: n } = r(e);
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
