/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { A as t, Pt as n } from "./libraries.js";
import { Nd as r, cd as i } from "./main.js";
var a = e(t()),
  o = e(n());
function s(e, t, n, s) {
  let c = (0, o.useRef)(void 0),
    l = (0, o.useRef)(void 0),
    u = i();
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
    } = n;
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
        i = null;
      return (
        !e ||
          e < 0 ||
          r.Get().BHasStoreItem(e, t, n) ||
          (d !== void 0 && s && s == l.current) ||
          (s !== l.current && (f(void 0), (l.current = s)),
          (i = a.default.CancelToken.source()),
          r
            .Get()
            .QueueStoreItemRequest(e, t, n)
            .then((t) => {
              (!i?.token.reason && c.current === e && f(t == 1), u());
            })),
        () => i?.cancel(`useStoreItemCache: unmounting`)
      );
    }, [e, t, s, d, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, u]),
    !e)
  )
    return [null, 2];
  if (d === !1 || r.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
  if (!r.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
  let j = r.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
  return j ? [j, 3] : [null, 2];
}
function c(e, t, n) {
  return s(e, 0, t, n);
}
function l(e, t, n) {
  return s(e, 1, t, n);
}
function u(e, t, n) {
  let [r, i] = s(e, t, n),
    a;
  r?.GetStoreItemType() == 1 &&
    !r.GetAssets()?.GetHeaderURL() &&
    r?.GetIncludedAppIDs().length == 1 &&
    (a = r.GetIncludedAppIDs()[0]);
  let [o, l] = c(a, n);
  return a && o?.BIsVisible() ? [o, l] : [r, i];
}
function d(e, t, n, s) {
  let c = i(),
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
    } = n;
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
        i = e.filter(
          (e) =>
            !(
              r.Get().BHasStoreItem(e, t, n) ||
              r.Get().BIsStoreItemMissing(e, t)
            ),
        );
      if (i.length == 0) return;
      let o = a.default.CancelToken.source(),
        s = i.map((e) => r.Get().QueueStoreItemRequest(e, t, n));
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
            r.Get().BHasStoreItem(e, t, n) || r.Get().BIsStoreItemMissing(e, t),
        )
        ? e.every((e) => r.Get().GetStoreItemWithLegacyVisibilityCheck(e, t))
          ? 3
          : 2
        : 1
      : 2
  );
}
function f(e, t, n) {
  return d(e, 0, t, n);
}
export { f as a, l as i, c as n, u as r, s as t };
