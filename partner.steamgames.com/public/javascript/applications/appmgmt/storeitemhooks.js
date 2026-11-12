/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t } from "./chunk~de7f2df91c.js";
import { N as n } from "./chunk~25a6634263.js";
import "./chunk~44f252525d.js";
import { t as r } from "./chunk~f4e4ed5c17.js";
import { t as i } from "./chunk~3ee5188744.js";
var a = t(r()),
  o = t(e());
function s(e, t, r, s) {
  let c = (0, o.useRef)(void 0),
    l = (0, o.useRef)(void 0),
    u = n();
  c.current = e;
  let [d, f] = (0, o.useState)(void 0),
    {
      include_assets: p,
      include_release: m,
      include_platforms: h,
      include_all_purchase_options: g,
      include_screenshots: _,
      include_trailers: v,
      include_ratings: y,
      include_tag_count: b,
      include_reviews: x,
      include_basic_info: S,
      include_supported_languages: C,
      include_full_description: w,
      include_included_items: T,
      include_assets_without_overrides: E,
      apply_user_filters: D,
      include_links: O,
      include_extra_details: k,
      include_optin_registration_tags: A,
    } = r;
  if (
    ((0, o.useEffect)(() => {
      let n = {
          include_assets: p,
          include_release: m,
          include_platforms: h,
          include_all_purchase_options: g,
          include_screenshots: _,
          include_trailers: v,
          include_ratings: y,
          include_tag_count: b,
          include_reviews: x,
          include_basic_info: S,
          include_supported_languages: C,
          include_full_description: w,
          include_included_items: T,
          include_assets_without_overrides: E,
          apply_user_filters: D,
          include_links: O,
          include_extra_details: k,
          include_optin_registration_tags: A,
        },
        r = null;
      return (
        !e ||
          e < 0 ||
          i.Get().BHasStoreItem(e, t, n) ||
          (d !== void 0 && s && s == l.current) ||
          (s !== l.current && (f(void 0), (l.current = s)),
          (r = a.default.CancelToken.source()),
          i
            .Get()
            .QueueStoreItemRequest(e, t, n)
            .then((t) => {
              (!r?.token.reason && c.current === e && f(t == 1), u());
            })),
        () => r?.cancel(`useStoreItemCache: unmounting`)
      );
    }, [e, t, s, d, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, u]),
    !e)
  )
    return [null, 2];
  if (d === !1 || i.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
  if (!i.Get().BHasStoreItem(e, t, r)) return [void 0, 1];
  let j = i.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
  return j ? [j, 3] : [null, 2];
}
function c(e, t, n) {
  return s(e, 0, t, n);
}
function l(e, t, n) {
  return s(e, 2, t, n);
}
function u(e, t, n) {
  return s(e, 1, t, n);
}
function d(e, t, r, s) {
  let c = n(),
    {
      include_assets: l,
      include_release: u,
      include_platforms: d,
      include_all_purchase_options: f,
      include_screenshots: p,
      include_trailers: m,
      include_ratings: h,
      include_tag_count: g,
      include_reviews: _,
      include_basic_info: v,
      include_supported_languages: y,
      include_full_description: b,
      include_included_items: x,
      include_assets_without_overrides: S,
      apply_user_filters: C,
      include_links: w,
      include_extra_details: T,
      include_optin_registration_tags: E,
    } = r;
  return (
    (0, o.useEffect)(() => {
      if (!e || e.length == 0) return;
      let n = {
          include_assets: l,
          include_release: u,
          include_platforms: d,
          include_all_purchase_options: f,
          include_screenshots: p,
          include_trailers: m,
          include_ratings: h,
          include_tag_count: g,
          include_reviews: _,
          include_basic_info: v,
          include_supported_languages: y,
          include_full_description: b,
          include_included_items: x,
          include_assets_without_overrides: S,
          apply_user_filters: C,
          include_links: w,
          include_extra_details: T,
          include_optin_registration_tags: E,
        },
        r = e.filter(
          (e) =>
            !(
              i.Get().BHasStoreItem(e, t, n) ||
              i.Get().BIsStoreItemMissing(e, t)
            ),
        );
      if (r.length == 0) return;
      let o = a.default.CancelToken.source(),
        s = r.map((e) => i.Get().QueueStoreItemRequest(e, t, n));
      return (
        Promise.all(s).then(() => {
          o.token.reason || c();
        }),
        () => o.cancel(`useStoreItemCacheMultiplePackages: unmounting`)
      );
    }, [e, t, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E]),
    e
      ? e.every(
          (e) =>
            i.Get().BHasStoreItem(e, t, r) || i.Get().BIsStoreItemMissing(e, t),
        )
        ? e.every((e) => i.Get().GetStoreItemWithLegacyVisibilityCheck(e, t))
          ? 3
          : 2
        : 1
      : 2
  );
}
function f(e, t, n) {
  return d(e, 0, t, n);
}
function p(e, t, n) {
  return d(e, 2, t, n);
}
function m(e, t, n) {
  return d(e, 1, t, n);
}
export { f as a, u as i, c as n, p as o, l as r, m as s, s as t };
