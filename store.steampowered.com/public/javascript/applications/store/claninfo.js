/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { dt as e, st as t } from "./libraries.js";
import { Ly as n, Ub as r } from "./main.js";
async function i(e) {
  return c(
    `${r.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function a(e) {
  let t = n.InitFromClanID(e, r.EUNIVERSE);
  return c(
    `${r.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function o(e) {
  return c(
    `${r.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function s(e) {
  return c(
    `${r.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function c(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function l(e) {
  return [`clantoclaninfo`, e];
}
function u(e) {
  return [`apptoclanid`, e];
}
function d(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function f(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var p = new WeakSet();
function m(e) {
  if (!p.has(e)) {
    p.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var h = new WeakMap();
function g(e) {
  if (!e) return null;
  let t = h.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new n(e.clanSteamIDString)
          : n.InitFromClanID(e.clanAccountID, r.EUNIVERSE),
      }),
      h.set(e, t)),
    t
  );
}
function _(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function v(e, t) {
  if (!t) return null;
  m(e);
  let n = _(t);
  return (
    e.setQueryData(l(n.clanAccountID), n),
    n.appid && e.setQueryData(u(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(d(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function y(e, t) {
  for (let n of t) v(e, n);
}
function b(n) {
  let r = e();
  return t(x(n, r));
}
function x(e, t) {
  return (
    m(t),
    {
      queryKey: l(e ?? null),
      queryFn: async () => (e ? v(t, await a(e)) : null),
      enabled: e !== void 0,
      select: g,
    }
  );
}
function S(e, t) {
  return (
    m(t),
    {
      queryKey: u(e),
      queryFn: async () => v(t, await i(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function C(e, t, n = `group`) {
  return (
    m(t),
    {
      queryKey: d(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(d(e, `group`));
          if (n) return n;
        }
        return (
          v(t, n == `store` ? await s(e) : await o(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function w(e) {
  return e.isPending ? void 0 : (e.data ?? null);
}
function T(n, r = `group`) {
  let i = e(),
    a = t(C(n, i, r));
  return b(n ? w(a) : void 0);
}
function E(e, t) {
  if (e) return g(t.getQueryData(l(e))) ?? void 0;
}
function D(e, t) {
  if (e) return E(t.getQueryData(u(e)), t);
}
function O(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = E(t.getQueryData(d(e, n)), t);
    if (r) return r;
  }
}
async function k(e, t) {
  return e ? g(await t.fetchQuery(x(e, t))) : null;
}
async function A(e, t) {
  return e ? k(await t.fetchQuery(S(e, t)), t) : null;
}
async function j(e, t, n = `group`) {
  return e ? k(await t.fetchQuery(C(e, t, n)), t) : null;
}
export {
  E as a,
  x as c,
  T as d,
  j as i,
  y as l,
  k as n,
  D as o,
  A as r,
  O as s,
  f as t,
  b as u,
};
