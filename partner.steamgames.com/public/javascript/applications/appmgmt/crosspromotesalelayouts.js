/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, j as t, vt as n, z as r } from "./chunk~de7f2df91c.js";
import { $n as i, Ha as a, ua as o } from "./chunk~1fa4b8f2ff.js";
import { Dn as s, r as c } from "./chunk~6b8ddcaac8.js";
import { n as l } from "./chunk~e70aabe4d7.js";
import { c as u } from "./chunk~fc8a9e4879.js";
import "./chunk~2bee5a7d08.js";
import { c as d, f, u as p } from "./chunk~3f4314f3b4.js";
import { i as m } from "./chunk~7b4b9eb713.js";
e();
function h(e, t) {
  let n = l(e ?? void 0, `capsule`, t);
  if (!e) return;
  let r = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: r,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: m(e) ?? void 0,
    strBackgroundURL: d(
      r,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: p(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
var g = `Es-UANTRhdg-`,
  _ = `FsYxDNcAXaI-`,
  v = `cSFkUHyVW24-`,
  y = `yT92BfNEvpw-`,
  b = `_6jMisrq5Zfo-`,
  x = `XBv92QzB8Xc-`,
  S = `NjUCqxvhkHk-`,
  C = `gxh8RxFKhr8-`,
  w = n();
function T(e) {
  let { event: n, language: r, strSaleURL: i } = e,
    o = h(n, r);
  if (!o) return null;
  let s = i ? { ...o, strSaleURL: i } : o;
  return s.strSaleURL
    ? (0, w.jsx)(a, {
        className: t(g, _, v),
        "flow-children": `row`,
        children: (0, w.jsx)(E, { saleEvent: s, bExploreButtonBelow: !0 }),
      })
    : null;
}
function E(e) {
  let {
      saleEvent: n,
      bExploreButtonBelow: a,
      bShowExploreHint: l,
      children: d,
    } = e,
    p = n?.strSaleURL,
    m = n?.strCapsuleURL,
    h = n?.strSummary,
    g = u(),
    _ = r(),
    v = _ && l !== void 0,
    T = n?.rtEndTime
      ? s(n.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: g,
        })
      : void 0;
  return (0, w.jsxs)(w.Fragment, {
    children: [
      m &&
        (0, w.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: { backgroundImage: `url(${m})` },
        }),
      m &&
        (0, w.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: { backgroundImage: `url(${m})` },
        }),
      (0, w.jsxs)(`div`, {
        className: y,
        children: [
          (0, w.jsxs)(`div`, {
            className: b,
            children: [
              (0, w.jsx)(`div`, {
                className: x,
                children: (0, w.jsx)(c, {
                  url: p,
                  className: S,
                  bFocusable: !1,
                  children: n?.strName,
                }),
              }),
              T &&
                (0, w.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: o(`#Sale_CrossPromoSale_NowThrough`, T),
                }),
            ],
          }),
          p &&
            !a &&
            !v &&
            (0, w.jsx)(c, {
              url: p,
              className: t(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: i,
              children: o(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
          p &&
            v &&
            (0, w.jsx)(f, {
              label: o(`#Sale_CrossPromoSale_ExploreEvent`),
              shown: !!l,
            }),
        ],
      }),
      (0, w.jsxs)(`div`, {
        className: C,
        children: [
          m &&
            (0, w.jsxs)(c, {
              url: p,
              className: `oztjxXYIBAk-`,
              bFocusable: !!_,
              children: [
                (0, w.jsx)(`img`, { src: m, alt: `` }),
                h &&
                  (0, w.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, w.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: h,
                    }),
                  }),
              ],
            }),
          d,
        ],
      }),
      p &&
        !v &&
        (0, w.jsx)(`div`, {
          className: t(`T1fHkhyvNkM-`, a && `SAqjQ-F71kA-`),
          children: (0, w.jsx)(c, {
            url: p,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: i,
            children: o(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
export { T as t };
