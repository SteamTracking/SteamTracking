/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Fp as e, Tp as t, eg as n, im as r, np as i } from "./main.js";
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
function o(e, t = `full`) {
  let i = ``;
  switch (t) {
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
      n(t, `Invalid size: ${t}`);
  }
  return (
    r.STORE_ITEM_BASE_URL + e.filename.replace(/\.([^.]+)(\?.*)?$/, `${i}.$1$2`)
  );
}
function s(t) {
  let { data: n } = e(t),
    r = i();
  if (n)
    return [
      ...(n.all_ages_screenshots || []),
      ...(!r && n.mature_content_screenshots
        ? n.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
function c(e, n = !1) {
  let { data: i } = t({ appid: e });
  if (i !== void 0)
    return i === null
      ? null
      : n && i.library_capsule_2x
        ? a(i, `library_capsule_2x`)
        : i.library_capsule
          ? a(i, `library_capsule`)
          : `${r.STORE_ITEM_BASE_URL}steam/apps/${e}/portrait.png`;
}
function l(e, ...n) {
  let { data: r } = t(e);
  return u(r, ...n);
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
