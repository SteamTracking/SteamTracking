import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  F as t,
  Pn as n,
  eo as r,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import {
  Fc as i,
  Gc as a,
  Gs as o,
  Gt as s,
  Hi as c,
  Ht as l,
  I as u,
  Ks as d,
  Ms as f,
  Nn as p,
  Nu as m,
  Pn as h,
  Qr as g,
  Sn as _,
  St as v,
  Tc as y,
  To as b,
  Uc as x,
  Us as S,
  Ut as C,
  Xt as w,
  _r as T,
  _u as E,
  bo as D,
  fo as O,
  fs as k,
  fu as A,
  lt as j,
  pl as M,
  po as ee,
  qs as N,
  tc as P,
  ti as F,
  uc as I,
  uu as L,
  vt as R,
  z,
} from "./chunk~6780060d19.js?contenthash=D23mWcHU";
import { mr as B } from "./chunk~6b8ddcaac8.js?contenthash=UFt9dk73";
import { t as V } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import "./chunk~6efc40bd45.js?contenthash=BD8MmAIt";
import { C as H } from "./library.js?contenthash=t9xy63v9";
var U = e(r()),
  W = V();
function G() {
  return n() ? (0, W.jsx)(c, {}) : (0, W.jsx)(M, {});
}
function K(e) {
  let t = e.filled ?? !0;
  return n() ? (t ? (0, W.jsx)(p, {}) : (0, W.jsx)(h, {})) : (0, W.jsx)(I, {});
}
function q() {
  return n()
    ? (0, W.jsx)(j, { direction: `down` })
    : (0, W.jsx)(P, { angle: 180 });
}
function J(e) {
  return n() ? (0, W.jsx)(T, {}) : (0, W.jsx)(y, {});
}
function te() {
  return n() ? (0, W.jsx)(l, {}) : (0, W.jsx)(S, {});
}
function Y() {
  return n() ? (0, W.jsx)(F, {}) : (0, W.jsx)(a, {});
}
function X(e) {
  return n() ? (0, W.jsx)(u, {}) : (0, W.jsx)(k, {});
}
function Z(e) {
  return n() ? (0, W.jsx)(ee, {}) : (0, W.jsx)(L, { className: e.className });
}
function Q(e) {
  return n() ? (0, W.jsx)(O, {}) : (0, W.jsx)(L, { className: e.className });
}
function ne(e) {
  return n()
    ? (0, W.jsx)(v, { className: e.className })
    : (0, W.jsx)(f, { className: e.className });
}
function re() {
  return n() ? (0, W.jsx)(g, {}) : (0, W.jsx)(x, {});
}
function ie() {
  return n() ? (0, W.jsx)(b, {}) : (0, W.jsx)(E, {});
}
function ae() {
  return (0, W.jsx)(_, {});
}
function oe() {
  return n() ? (0, W.jsx)(R, {}) : (0, W.jsx)(m, {});
}
function $() {
  return n() ? (0, W.jsx)(D, {}) : (0, W.jsx)(A, {});
}
function se() {
  return n() ? (0, W.jsx)(C, {}) : (0, W.jsx)(o, {});
}
function ce() {
  return (0, W.jsx)(z, {});
}
function le() {
  return n() ? (0, W.jsx)(s, {}) : (0, W.jsx)(d, {});
}
function ue() {
  return (0, W.jsx)(i, {});
}
function de() {
  return n() ? (0, W.jsx)(w, {}) : (0, W.jsx)(N, {});
}
var fe = e(H());
function pe(e, n, r, i) {
  let a = (0, U.useRef)(void 0),
    o = (0, U.useRef)(void 0),
    s = t();
  a.current = e;
  let [c, l] = (0, U.useState)(void 0),
    {
      include_assets: u,
      include_release: d,
      include_platforms: f,
      include_all_purchase_options: p,
      include_screenshots: m,
      include_trailers: h,
      include_ratings: g,
      include_tag_count: _,
      include_reviews: v,
      include_basic_info: y,
      include_supported_languages: b,
      include_full_description: x,
      include_included_items: S,
      include_assets_without_overrides: C,
      apply_user_filters: w,
      include_links: T,
      include_extra_details: E,
      include_optin_registration_tags: D,
    } = r;
  if (
    ((0, U.useEffect)(() => {
      let t = {
          include_assets: u,
          include_release: d,
          include_platforms: f,
          include_all_purchase_options: p,
          include_screenshots: m,
          include_trailers: h,
          include_ratings: g,
          include_tag_count: _,
          include_reviews: v,
          include_basic_info: y,
          include_supported_languages: b,
          include_full_description: x,
          include_included_items: S,
          include_assets_without_overrides: C,
          apply_user_filters: w,
          include_links: T,
          include_extra_details: E,
          include_optin_registration_tags: D,
        },
        r = null;
      return (
        !e ||
          e < 0 ||
          B.Get().BHasStoreItem(e, n, t) ||
          (c !== void 0 && i && i == o.current) ||
          (i !== o.current && (l(void 0), (o.current = i)),
          (r = fe.default.CancelToken.source()),
          B.Get()
            .QueueStoreItemRequest(e, n, t)
            .then((t) => {
              (!r?.token.reason && a.current === e && l(t == 1), s());
            })),
        () => r?.cancel(`useStoreItemCache: unmounting`)
      );
    }, [e, n, i, c, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, s]),
    !e)
  )
    return [null, 2];
  if (c === !1 || B.Get().BIsStoreItemMissing(e, n)) return [void 0, 2];
  if (!B.Get().BHasStoreItem(e, n, r)) return [void 0, 1];
  let O = B.Get().GetStoreItemWithLegacyVisibilityCheck(e, n);
  return O ? [O, 3] : [null, 2];
}
function me(e, t, n) {
  return pe(e, 0, t, n);
}
export {
  G as _,
  ne as a,
  $ as b,
  le as c,
  ae as d,
  K as f,
  Y as g,
  re as h,
  oe as i,
  de as l,
  ue as m,
  ce as n,
  te as o,
  J as p,
  X as r,
  se as s,
  me as t,
  q as u,
  Q as v,
  ie as x,
  Z as y,
};
