/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, et as n, ot as r, ut as i } from "./chunk~01cfc309bf.js";
import { Et as a, Tt as o } from "./chunk~d8bbc3d946.js";
import { kx as s, ox as c, rx as l, yy as u } from "./main.js";
import { n as d } from "./chunk~65d992238f.js";
var f = e(n()),
  p = e(t());
function m(e) {
  return [`AppRelevanceStore`, `FriendsRecommended`, e];
}
function h(e) {
  let t = u();
  return r({ ...g(t, e), enabled: c.logged_in });
}
function g(e, t) {
  return { queryKey: m(t), queryFn: () => x(e, t) };
}
function _() {
  let e = i();
  return p.useCallback(
    (t, n) => {
      e.setQueryData(m(t), n);
    },
    [e],
  );
}
function v(e) {
  return r({
    queryKey: [`AppRelevanceStore`, `StoreRelevance`, e],
    queryFn: () => S(e),
    enabled: c.logged_in,
  });
}
function y() {
  return d(`App Relevance Store Top Sellers`, {
    sort: 11,
    start: 0,
    count: 100,
  });
}
function b() {
  let { data: e } = y();
  return e;
}
async function x(e, t) {
  let n = s.Init(o);
  n.Body().set_appid(t);
  let r = await a.GetFriendsRecommendedApp(e, n),
    i = r.GetEResult();
  if (i == 1) return r.Body().toObject();
  throw `Error ${i} failed to call GetFriendsRecommendedApp ${t}`;
}
async function S(e) {
  let t = { appid: e },
    n = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 },
    r = (
      await f.default.get(
        `${l.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
        { params: t, withCredentials: !0, timeout: 1e4 },
      )
    ).data;
  return (
    r &&
      r.success == 1 &&
      (r.results.similar_played_apps &&
        (n.arrSimilarPlayedApps = r.results.similar_played_apps.map((e) => ({
          appid: e.appid,
          playtimeForever: e.playtime_forever,
        }))),
      r.results.recommended_by_ir && (n.bRecommendedByIR = !0)),
    n
  );
}
export { _ as i, b as n, v as r, h as t };
