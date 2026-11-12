/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, dt as n, st as r, tt as i } from "./chunk~01cfc309bf.js";
import { Et as a, Tt as o } from "./chunk~d8bbc3d946.js";
import { cx as s, ly as c, ux as l, yx as u } from "./main.js";
import { n as d } from "./chunk~65d992238f.js";
var f = e(i()),
  p = e(t());
function m(e) {
  return [`AppRelevanceStore`, `FriendsRecommended`, e];
}
function h(e) {
  let t = c();
  return r({ queryKey: m(e), queryFn: () => b(t, e), enabled: l.logged_in });
}
function g() {
  let e = n();
  return p.useCallback(
    (t, n) => {
      e.setQueryData(m(t), n);
    },
    [e],
  );
}
function _(e) {
  return r({
    queryKey: [`AppRelevanceStore`, `StoreRelevance`, e],
    queryFn: () => x(e),
    enabled: l.logged_in,
  });
}
function v() {
  return d(`App Relevance Store Top Sellers`, {
    sort: 11,
    start: 0,
    count: 100,
  });
}
function y() {
  let { data: e } = v();
  return e;
}
async function b(e, t) {
  let n = u.Init(o);
  n.Body().set_appid(t);
  let r = await a.GetFriendsRecommendedApp(e, n),
    i = r.GetEResult();
  if (i == 1) return r.Body().toObject();
  throw `Error ${i} failed to call GetFriendsRecommendedApp ${t}`;
}
async function x(e) {
  let t = { appid: e },
    n = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 },
    r = (
      await f.default.get(
        `${s.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
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
export { g as a, _ as i, y as n, v as r, h as t };
