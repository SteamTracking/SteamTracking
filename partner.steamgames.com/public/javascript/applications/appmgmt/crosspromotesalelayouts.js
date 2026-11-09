/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { A as e, R as t, _t as n, kt as r } from "./mobx.esm.js";
import { Gn as i, Ra as a, oa as o } from "./dialogs.js";
import { Kn as s, r as c } from "./saletags.js";
import { n as l } from "./eventimageurlwithfallback.js";
import { c as u } from "./partnereventstore.js";
import "./partnereventutils.js";
import { a as d } from "./creatorhomestore.js";
r();
var f = `Es-UANTRhdg-`,
  p = `FsYxDNcAXaI-`,
  m = `cSFkUHyVW24-`,
  h = `yT92BfNEvpw-`,
  g = `_6jMisrq5Zfo-`,
  _ = `XBv92QzB8Xc-`,
  v = `NjUCqxvhkHk-`,
  y = `gxh8RxFKhr8-`,
  b = n();
function x(t) {
  let { event: n, language: r, strSaleURL: i } = t,
    o = C(n, r);
  if (!o) return null;
  let s = i ? { ...o, strSaleURL: i } : o;
  return s.strSaleURL
    ? (0, b.jsx)(a, {
        className: e(f, p, m),
        "flow-children": `row`,
        children: (0, b.jsx)(S, { saleEvent: s }),
      })
    : null;
}
function S(n) {
  let { saleEvent: r, children: a } = n,
    l = r?.strSaleURL,
    d = r?.strCapsuleURL,
    f = r?.strSummary,
    p = u(),
    m = t(),
    x = r?.rtEndTime
      ? s(r.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: p,
        })
      : void 0;
  return (0, b.jsxs)(b.Fragment, {
    children: [
      d &&
        (0, b.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: { backgroundImage: `url(${d})` },
        }),
      (0, b.jsxs)(`div`, {
        className: h,
        children: [
          (0, b.jsxs)(`div`, {
            className: g,
            children: [
              (0, b.jsx)(`div`, {
                className: _,
                children: (0, b.jsx)(c, {
                  url: l,
                  className: v,
                  bFocusable: !1,
                  children: r?.strName,
                }),
              }),
              x &&
                (0, b.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: o(`#Sale_CrossPromoSale_NowThrough`, x),
                }),
            ],
          }),
          l &&
            (0, b.jsx)(c, {
              url: l,
              className: e(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: i,
              children: o(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
        ],
      }),
      (0, b.jsxs)(`div`, {
        className: y,
        children: [
          d &&
            (0, b.jsxs)(c, {
              url: l,
              className: `oztjxXYIBAk-`,
              bFocusable: !!m,
              children: [
                (0, b.jsx)(`img`, { src: d, alt: `` }),
                f &&
                  (0, b.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, b.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: f,
                    }),
                  }),
              ],
            }),
          a,
        ],
      }),
      l &&
        (0, b.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, b.jsx)(c, {
            url: l,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: i,
            children: o(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
function C(e, t) {
  let n = l(e ?? void 0, `capsule`, t);
  if (e)
    return {
      clanAccountID: e.clanSteamID.GetAccountID(),
      strEventGID: e.GID ?? ``,
      strName: e.GetNameWithFallback(t) ?? ``,
      rtEndTime: e.endTime || void 0,
      strSummary: e.GetSummaryWithFallback(t) || void 0,
      strCapsuleURL: n,
      strSaleURL: d(e) ?? void 0,
    };
}
export { x as t };
