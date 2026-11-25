/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Pt as e,
  W as t,
  d as n,
  nt as r,
  r as i,
} from "./chunk~de7f2df91c.js";
import { Ua as a, da as o, er as s } from "./chunk~1fa4b8f2ff.js";
import {
  R as c,
  a as l,
  ar as u,
  i as d,
  ir as f,
  r as p,
} from "./chunk~6b8ddcaac8.js";
import { n as m } from "./chunk~e70aabe4d7.js";
import { i as h } from "./chunk~7b4b9eb713.js";
import { c as g } from "./chunk~fc8a9e4879.js";
import { c as _ } from "./chunk~3f4314f3b4.js";
var v = e(r(), 1);
function y(e, t) {
  let n = m(e ?? void 0, `capsule`, t);
  if (!e) return;
  let r = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: r,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: h(e) ?? void 0,
    strBackgroundURL: _(
      r,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: l(e, t),
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
  S = `dv9UZEOxkuA-`,
  C = `FsYxDNcAXaI-`,
  w = `cSFkUHyVW24-`,
  T = `yT92BfNEvpw-`,
  E = `gxh8RxFKhr8-`,
  D = `AZSEWyNPfhc-`,
  O = `gZNFN-cKUHw-`,
  k = t();
v.createContext(!1);
var A = v.createContext(void 0);
(v.createContext(!1), v.createContext(null));
function j(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    o = y(t, n);
  if (!o) return null;
  let s = r ? { ...o, strSaleURL: r } : o;
  return s.strSaleURL
    ? (0, k.jsx)(a, {
        className: i(x, C, w),
        "flow-children": `row`,
        children: (0, k.jsx)(M, { saleEvent: s, bExploreButtonBelow: !0 }),
      })
    : null;
}
function M(e) {
  let {
      saleEvent: t,
      bExploreButtonBelow: r,
      bShowExploreHint: a,
      bExploreHintInHeading: l,
      children: d,
    } = e,
    f = t?.strSaleURL,
    m = t?.eCreatorRole,
    h = m || !e.strExploreLabel ? L(m) : e.strExploreLabel,
    _ = t?.strCapsuleURL,
    y = t?.strSummary,
    b = g(),
    x = n(),
    C = x && a !== void 0,
    w = v.useContext(A),
    D = t?.rtEndTime
      ? u(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: b,
        })
      : void 0;
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsxs)(`div`, {
        className: S,
        children: [
          _ &&
            !m &&
            (0, k.jsx)(`div`, {
              className: `qbRGxo4aWcc-`,
              style: { backgroundImage: `url(${_})` },
            }),
          _ &&
            (0, k.jsx)(`div`, {
              className: i(`HgvxVtFlDis-`, m && `Lp2CuPiW8Lo-`),
              style: { backgroundImage: `url(${_})` },
            }),
          m && (0, k.jsx)(F, { rgAppIDs: t?.rgCreatorAppIDs, strAvatarURL: _ }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: i(T, m && `-NAWu4CYrl8-`),
        children: [
          m &&
            _ &&
            (0, k.jsx)(p, {
              url: f,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, k.jsx)(`img`, { src: _, alt: `` }),
            }),
          !m &&
            (0, k.jsxs)(`div`, {
              className: `_6jMisrq5Zfo-`,
              children: [
                (0, k.jsx)(`div`, {
                  className: `XBv92QzB8Xc-`,
                  children: (0, k.jsx)(p, {
                    url: f,
                    className: `NjUCqxvhkHk-`,
                    bFocusable: !1,
                    children: t?.strName,
                  }),
                }),
                w === void 0
                  ? D &&
                    (0, k.jsx)(`div`, {
                      className: `_6iUHDist0Jc-`,
                      children: o(`#Sale_CrossPromoSale_NowThrough`, D),
                    })
                  : w &&
                    (0, k.jsx)(`div`, {
                      className: `_6iUHDist0Jc-`,
                      children: w,
                    }),
              ],
            }),
          f &&
            !r &&
            !C &&
            !m &&
            (0, k.jsx)(p, {
              url: f,
              className: i(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: s,
              children: h,
            }),
          f && C && !l && (0, k.jsx)(c, { label: h, shown: !!a, button: `X` }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: i(E, m && `ZONqp3dzTMI-`),
        children: [
          _ &&
            (0, k.jsxs)(p, {
              url: f,
              className: i(`oztjxXYIBAk-`, m && `CDF-2WDX3lg-`),
              bFocusable: !!x,
              children: [
                (0, k.jsx)(`img`, { src: _, alt: `` }),
                y &&
                  (0, k.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, k.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: y,
                    }),
                  }),
              ],
            }),
          d,
        ],
      }),
      f &&
        !C &&
        !m &&
        (0, k.jsx)(`div`, {
          className: i(`T1fHkhyvNkM-`, r && `SAqjQ-F71kA-`),
          children: (0, k.jsx)(p, {
            url: f,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: s,
            children: h,
          }),
        }),
    ],
  });
}
var N = 60,
  P = 4;
function F(e) {
  let { rgAppIDs: t, strAvatarURL: n } = e,
    r = v.useMemo(() => b(t), [t]),
    i = d(r, !1),
    a = v.useMemo(() => {
      let e = (i ?? []).slice(0, 24);
      return e.length < P
        ? []
        : Array.from({ length: N }, (t, n) => e[n % e.length]);
    }, [i]);
  return a.length
    ? (0, k.jsxs)(`div`, {
        className: D,
        "aria-hidden": !0,
        children: [
          n &&
            (0, k.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: { backgroundImage: `url(${n})` },
            }),
          (0, k.jsx)(`div`, {
            className: O,
            children: a.map((e, t) => (0, k.jsx)(I, { id: e }, t)),
          }),
        ],
      })
    : null;
}
function I(e) {
  let t = f(e.id, `header`);
  return t
    ? (0, k.jsx)(`img`, { src: t, alt: ``, loading: `lazy` })
    : (0, k.jsx)(`div`, {});
}
function L(e) {
  return o(
    e
      ? `#Sale_CrossPromoCreator_Visit_${e}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
export { j as t };
