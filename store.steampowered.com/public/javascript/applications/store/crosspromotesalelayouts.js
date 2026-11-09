/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import { T as n, n as r, o as i } from "./storelink.js";
import { A as a } from "./partnerevent.js";
import { n as o, r as s } from "./saleghostsections.js";
import { c } from "./carouselarrows.js";
import { f as l } from "./eventbbcodeparser.module.js";
import { n as u } from "./eventimageurlwithfallback.js";
import { n as d } from "./lazyrenderchildren.js";
import { c as f } from "./creatorhomestore.js";
import {
  b as p,
  c as m,
  d as h,
  f as g,
  h as _,
  m as v,
  n as y,
  o as b,
  p as x,
  s as S,
  x as C,
  y as w,
} from "./crosspromotesalelayouts.module.js";
import {
  Bi as T,
  Fr as E,
  Gb as D,
  Qi as O,
  Sc as k,
  Uy as A,
  xb as j,
  zb as M,
} from "./main.js";
e();
var N = t();
function P(e) {
  let {
      promotedSale: t,
      promotedSaleEvent: n,
      language: i,
      children: a,
      nItemsToFeature: o,
    } = e,
    s = F(n ? void 0 : t, i),
    c = n ?? s,
    l = c?.strSaleURL,
    u = c?.strCapsuleURL,
    d = c?.strSummary,
    f = O(),
    p = M(),
    m = c?.rtEndTime
      ? T(c.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: f,
        })
      : void 0;
  return (0, N.jsxs)(R, {
    ...e,
    className: b,
    "flow-children": `row`,
    children: [
      u &&
        (0, N.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: { backgroundImage: `url(${u})` },
        }),
      (0, N.jsxs)(`div`, {
        className: g,
        children: [
          (0, N.jsxs)(`div`, {
            className: _,
            children: [
              (0, N.jsx)(`div`, {
                className: x,
                children: (0, N.jsx)(r, {
                  url: l,
                  className: v,
                  bFocusable: !1,
                  children: c?.strName,
                }),
              }),
              m &&
                (0, N.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: A(`#Sale_CrossPromoSale_NowThrough`, m),
                }),
            ],
          }),
          l &&
            (0, N.jsx)(r, {
              url: l,
              className: k(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: E,
              children: A(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
        ],
      }),
      (0, N.jsxs)(`div`, {
        className: S,
        children: [
          u &&
            (0, N.jsxs)(r, {
              url: l,
              className: `oztjxXYIBAk-`,
              bFocusable: !!p,
              children: [
                (0, N.jsx)(`img`, { src: u, alt: `` }),
                d &&
                  (0, N.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, N.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: d,
                    }),
                  }),
              ],
            }),
          (0, N.jsx)(L, { nItemsToFeature: o, children: a }),
        ],
      }),
      l &&
        (0, N.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, N.jsx)(r, {
            url: l,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: E,
            children: A(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
function F(e, t) {
  let n = u(e ?? void 0, `capsule`, t);
  if (e)
    return {
      clanAccountID: e.clanSteamID.GetAccountID(),
      strEventGID: e.GID ?? ``,
      strName: e.GetNameWithFallback(t) ?? ``,
      rtEndTime: e.endTime || void 0,
      strSummary: e.GetSummaryWithFallback(t) || void 0,
      strCapsuleURL: n,
      strSaleURL: f(e) ?? void 0,
    };
}
function I(e) {
  let { children: t, nItemsToFeature: n } = e;
  return (0, N.jsxs)(R, {
    ...e,
    className: b,
    children: [
      (0, N.jsx)(o, {
        className: g,
        children: (0, N.jsxs)(`div`, {
          className: _,
          children: [
            (0, N.jsx)(`div`, { className: k(x, s), children: `\xA0` }),
            (0, N.jsx)(`div`, { className: k(h, s), children: `\xA0` }),
          ],
        }),
      }),
      (0, N.jsxs)(`div`, {
        className: S,
        children: [
          (0, N.jsx)(o, {
            className: m,
            children: (0, N.jsx)(`div`, { className: k(s, C) }),
          }),
          (0, N.jsx)(L, { nItemsToFeature: n, children: t }),
        ],
      }),
    ],
  });
}
function L(e) {
  let { children: t, nItemsToFeature: n } = e,
    r = D.logged_in
      ? j.Localize(`#Sale_CrossPromoSale_RecommendedFromEvent`)
      : j.LocalizePlural(
          `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
          n ?? 0,
        );
  return (0, N.jsxs)(`div`, {
    className: w,
    children: [(0, N.jsx)(`div`, { className: p, children: r }), e.children],
  });
}
function R(e) {
  let {
    section: t,
    bInGamepadUI: r,
    placeholderHeight: o,
    className: s,
    "flow-children": u,
    children: f,
  } = e;
  return (0, N.jsx)(d, {
    placeholderHeight: o,
    className: k({
      [n]: !0,
      [i]: a(t),
      [l]: !0,
      SaleSectionForCustomCSS: !0,
      [y]: !0,
      [s]: !0,
    }),
    rootMargin: c,
    holdGamepadFocus: r,
    "flow-children": u,
    children: f,
  });
}
export { I as n, P as t };
