/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

function e(e, t) {
  return e < t ? -1 : +(e > t);
}
function t(t, n) {
  return e(t.toLocaleLowerCase(), n.toLocaleLowerCase());
}
function n(e, t) {
  let n = e.toString(),
    r = ``;
  for (let e = 0; e < t - n.length; e++) r += `0`;
  return r + n;
}
function r(e, t = !1) {
  if (Number.isNaN(e) || !Number.isFinite(e)) return ``;
  let r = e < 0;
  e = Math.abs(e);
  let i = Math.floor(e / 3600),
    a = Math.floor((e % 3600) / 60),
    o = Math.floor(e % 60),
    s = r ? `-` : ``;
  return !t || i > 0 ? `${s}${i}:${n(a, 2)}:${n(o, 2)}` : `${s}${a}:${n(o, 2)}`;
}
function i(e) {
  return e
    ? DOMParser
      ? new DOMParser().parseFromString(e, `text/html`).documentElement
          .textContent
      : e
    : ``;
}
function a(e, t = ``) {
  return e.replace(/\bhttps?:\/\/\S+/gi, t);
}
function o(e, t, n = !0) {
  let r = e.trim();
  if (((r = r.replace(n ? /\s+/g : /[ \t]+/g, ` `)), r.length > t)) {
    r = r.substring(0, t);
    let e = r.replace(/^(.*([.!?])) .*$/, `$1`),
      i = e.length;
    (i < t * 0.6 || i == t) && (e = r.replace(/ [^ ]*$/, `...`)),
      (r = n ? e.replace(/(\r\n|\n|\r)/gm, ``) : e);
  }
  return r;
}
function s(e) {
  let t = 0,
    n,
    r;
  if (e.length === 0) return t;
  for (n = 0; n < e.length; n++)
    (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
  return t;
}
function c(e) {
  return e.length <= 1
    ? e.toUpperCase()
    : e.charAt(0).toUpperCase() + e.slice(1);
}
function l(e) {
  return atob(e.replace(/-/g, `+`).replace(/_/g, `/`));
}
function u(e) {
  return btoa(e).replace(/\+/g, `-`).replace(`///g`, `_`).replace(/=/g, ``);
}
export { i as a, c, s as i, e as l, u as n, a as o, r, o as s, l as t, t as u };
