import {
  Bn as e,
  Ma as t,
  fi as n,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
function r(e) {
  if (e === void 0)
    return (console.error(`Cannot GetHostname on empty URL`), ``);
  let t = RegExp(
      `^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)`,
      `im`,
    ),
    n = e.match(t);
  return n && n.length > 5 ? n[6].toString() : e;
}
function i(e) {
  let t = r(e);
  return (t.startsWith(`www.`) && (t = t.slice(4)), t);
}
function a(e) {
  let t = document.createElement(`a`);
  return ((t.href = e), t.hostname.indexOf(`xn--`) >= 0 ? t.href : e);
}
function o(t) {
  return t
    .replace(/{STEAM_CLAN_IMAGE}/g, `${e.CLAN_CDN_ASSET_URL}images/`)
    .replace(/{STEAM_CLAN_LOC_IMAGE}/g, `${e.CLAN_CDN_ASSET_URL}images/`);
}
function s(r) {
  return (
    r &&
    (e.EUNIVERSE == 1 &&
      (r.substring(0, 5) == `http:` && (r = `https:` + r.substring(5)),
      n(e.MEDIA_CDN_URL, `Media CDN not setup`),
      (r = r.replace(/https:\/\/steamcdn-a.akamaihd.net\//g, e.MEDIA_CDN_URL)),
      (r = r.replace(/https:\/\/media.steampowered.com\//g, e.MEDIA_CDN_URL)),
      (r = r.replace(
        /https:\/\/cdn.akamai.steamstatic.com\//g,
        e.MEDIA_CDN_URL,
      )),
      (r = r.replace(
        /https:\/\/cdn.cloudflare.steamstatic.com\//g,
        e.MEDIA_CDN_URL,
      )),
      (r = r.replace(
        /https:\/\/cdn.edgecast.steamstatic.com\//g,
        e.MEDIA_CDN_URL,
      )),
      (r = r.replace(
        /https:\/\/cdn.fastly.steamstatic.com\//g,
        e.MEDIA_CDN_URL,
      )),
      (r = r.replace(/https:\/\/cdn.dota2.com\//g, e.MEDIA_CDN_URL)),
      (r = r.replace(
        /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
        e.MEDIA_CDN_URL + `steam/`,
      )),
      (r = r.replace(
        /https:\/\/clan.akamai.steamstatic.com\//g,
        e.CLAN_CDN_ASSET_URL,
      )),
      (r = r.replace(
        /https:\/\/clan.cloudflare.steamstatic.com\//g,
        e.CLAN_CDN_ASSET_URL,
      )),
      (r = r.replace(
        /https:\/\/clan.fastly.steamstatic.com\//g,
        e.CLAN_CDN_ASSET_URL,
      )),
      (r = r.replace(
        /https:\/\/cdn.steamcommunity.com\//g,
        e.COMMUNITY_CDN_URL,
      )),
      (r = r.replace(
        /https:\/\/community.akamai.steamstatic.com\//g,
        e.COMMUNITY_CDN_URL,
      )),
      (r = r.replace(
        /https:\/\/community.cloudflare.steamstatic.com\//g,
        e.COMMUNITY_CDN_URL,
      )),
      (r = r.replace(
        /https:\/\/community.edgecast.steamstatic.com\//g,
        e.COMMUNITY_CDN_URL,
      ))),
    (r = r.replace(/{IMG_URL}/g, t.IMG_URL)),
    (r = r.replace(/{MEDIA_CDN_URL}/g, e.MEDIA_CDN_URL)),
    (r = r.replace(/{MEDIA_CDN_COMMUNITY_URL}/g, e.MEDIA_CDN_COMMUNITY_URL)),
    (r = r.replace(/{COMMUNITY_CDN_URL}/g, e.COMMUNITY_CDN_URL)),
    (r = o(r)),
    r)
  );
}
function c(t) {
  if (!t) return !0;
  let n = r(t).toLocaleLowerCase();
  return (
    [
      r(e.COMMUNITY_CDN_URL).toLocaleLowerCase(),
      r(e.MEDIA_CDN_URL).toLocaleLowerCase(),
      r(e.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
      r(e.STORE_CDN_URL).toLocaleLowerCase(),
      r(e.BASE_URL_SHARED_CDN).toLocaleLowerCase(),
      r(e.CLAN_CDN_ASSET_URL).toLocaleLowerCase(),
      r(e.VIDEO_CDN_URL).toLocaleLowerCase(),
      `support.steampowered.com`,
      `steamcdn-a.akamaihd.net`,
      `cdn.cloudflare.steamstatic.com`,
      `cdn.fastly.steamstatic.com`,
      `cdn.akamai.steamstatic.com`,
    ].indexOf(n) >= 0
  );
}
function l(e) {
  return t.SNR &&
    t.SNR.length > 0 &&
    e &&
    e.toLocaleLowerCase().indexOf(`snr=`) == -1
    ? e + (e.indexOf(`?`) >= 0 ? `&` : `?`) + `snr=` + t.SNR
    : e;
}
function u(t, n) {
  return (
    e.IN_STEAMUI &&
      !t.startsWith(`steam://`) &&
      (t = n ? `steam://openurl_external/${t}` : `steam://openurl/${t}`),
    t
  );
}
function d(e) {
  return e == `steam://close` || e == `steam://close/`;
}
function f(e) {
  return e.startsWith(`http://`) || e.startsWith(`https://`);
}
function p(e) {
  return !!e?.startsWith(`data:`);
}
export { a, f as c, r as i, l, c as n, i as o, d as r, u as s, p as t, s as u };
