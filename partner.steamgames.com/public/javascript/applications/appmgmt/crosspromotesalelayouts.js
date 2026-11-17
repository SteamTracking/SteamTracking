/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  j as t,
  sn as n,
  vt as r,
  z as i,
} from "./chunk~de7f2df91c.js";
import { Ua as a, da as o, er as s } from "./chunk~1fa4b8f2ff.js";
import { Dn as c, On as l, r as u } from "./chunk~6b8ddcaac8.js";
import { n as d } from "./chunk~e70aabe4d7.js";
import { c as f } from "./chunk~fc8a9e4879.js";
import "./chunk~2bee5a7d08.js";
import { c as p, h as m, p as h, u as g } from "./chunk~3f4314f3b4.js";
import { i as _ } from "./chunk~7b4b9eb713.js";
var v = n(e(), 1);
function y(e, t) {
  let n = d(e ?? void 0, `capsule`, t);
  if (!e) return;
  let r = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: r,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: _(e) ?? void 0,
    strBackgroundURL: p(
      r,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: h(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function b(e) {
  return (e ?? []).slice(0, 48).map((e) => ({ appid: e }));
}
var x = `Es-UANTRhdg-`,
  S = `FsYxDNcAXaI-`,
  C = `cSFkUHyVW24-`,
  w = `yT92BfNEvpw-`,
  T = `gxh8RxFKhr8-`,
  E = `AZSEWyNPfhc-`,
  D = `gZNFN-cKUHw-`,
  O = r();
v.createContext(!1);
function k(e) {
  let { event: n, language: r, strSaleURL: i } = e,
    o = y(n, r);
  if (!o) return null;
  let s = i ? { ...o, strSaleURL: i } : o;
  return s.strSaleURL
    ? (0, O.jsx)(a, {
        className: t(x, S, C),
        "flow-children": `row`,
        children: (0, O.jsx)(A, { saleEvent: s, bExploreButtonBelow: !0 }),
      })
    : null;
}
function A(e) {
  let {
      saleEvent: n,
      bExploreButtonBelow: r,
      bShowExploreHint: a,
      children: c,
    } = e,
    d = n?.strSaleURL,
    p = n?.eCreatorRole,
    h = p || !e.strExploreLabel ? F(p) : e.strExploreLabel,
    g = n?.strCapsuleURL,
    _ = n?.strSummary,
    v = f(),
    y = i(),
    b = y && a !== void 0,
    x = n?.rtEndTime
      ? l(n.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: v,
        })
      : void 0;
  return (0, O.jsxs)(O.Fragment, {
    children: [
      g &&
        !p &&
        (0, O.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: { backgroundImage: `url(${g})` },
        }),
      g &&
        (0, O.jsx)(`div`, {
          className: t(`HgvxVtFlDis-`, p && `Lp2CuPiW8Lo-`),
          style: { backgroundImage: `url(${g})` },
        }),
      p && (0, O.jsx)(N, { rgAppIDs: n?.rgCreatorAppIDs, strAvatarURL: g }),
      (0, O.jsxs)(`div`, {
        className: t(w, p && `-NAWu4CYrl8-`),
        children: [
          p &&
            g &&
            (0, O.jsx)(u, {
              url: d,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, O.jsx)(`img`, { src: g, alt: `` }),
            }),
          !p &&
            (0, O.jsxs)(`div`, {
              className: `_6jMisrq5Zfo-`,
              children: [
                (0, O.jsx)(`div`, {
                  className: `XBv92QzB8Xc-`,
                  children: (0, O.jsx)(u, {
                    url: d,
                    className: `NjUCqxvhkHk-`,
                    bFocusable: !1,
                    children: n?.strName,
                  }),
                }),
                x &&
                  (0, O.jsx)(`div`, {
                    className: `_6iUHDist0Jc-`,
                    children: o(`#Sale_CrossPromoSale_NowThrough`, x),
                  }),
              ],
            }),
          d &&
            !r &&
            !b &&
            !p &&
            (0, O.jsx)(u, {
              url: d,
              className: t(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: s,
              children: h,
            }),
          d && b && (0, O.jsx)(m, { label: h, shown: !!a, button: `X` }),
        ],
      }),
      (0, O.jsxs)(`div`, {
        className: t(T, p && `ZONqp3dzTMI-`),
        children: [
          g &&
            (0, O.jsxs)(u, {
              url: d,
              className: t(`oztjxXYIBAk-`, p && `CDF-2WDX3lg-`),
              bFocusable: !!y,
              children: [
                (0, O.jsx)(`img`, { src: g, alt: `` }),
                _ &&
                  (0, O.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, O.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: _,
                    }),
                  }),
              ],
            }),
          c,
        ],
      }),
      d &&
        !b &&
        !p &&
        (0, O.jsx)(`div`, {
          className: t(`T1fHkhyvNkM-`, r && `SAqjQ-F71kA-`),
          children: (0, O.jsx)(u, {
            url: d,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: s,
            children: h,
          }),
        }),
    ],
  });
}
var j = 60,
  M = 4;
function N(e) {
  let { rgAppIDs: t, strAvatarURL: n } = e,
    r = v.useMemo(() => b(t), [t]),
    i = g(r, !1),
    a = v.useMemo(() => {
      let e = (i ?? []).slice(0, 24);
      return e.length < M
        ? []
        : Array.from({ length: j }, (t, n) => e[n % e.length]);
    }, [i]);
  return a.length
    ? (0, O.jsxs)(`div`, {
        className: E,
        "aria-hidden": !0,
        children: [
          n &&
            (0, O.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: { backgroundImage: `url(${n})` },
            }),
          (0, O.jsx)(`div`, {
            className: D,
            children: a.map((e, t) => (0, O.jsx)(P, { id: e }, t)),
          }),
        ],
      })
    : null;
}
function P(e) {
  let t = c(e.id, `header`);
  return t
    ? (0, O.jsx)(`img`, { src: t, alt: ``, loading: `lazy` })
    : (0, O.jsx)(`div`, {});
}
function F(e) {
  return o(
    e
      ? `#Sale_CrossPromoCreator_Visit_${e}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
export { k as t };
