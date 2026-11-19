/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, i as r, l as i } from "./chunk~01cfc309bf.js";
import {
  Bn as a,
  Bs as o,
  Do as s,
  Jo as c,
  Ma as l,
  Oa as u,
  Qa as d,
  Qn as f,
  So as p,
  Va as m,
  Xo as ee,
  Yn as te,
  cs as ne,
  ds as re,
  eo as h,
  fs as g,
  gs as _,
  hs as v,
  io as y,
  is as b,
  ls as x,
  ms as S,
  n as C,
  no as w,
  nr as T,
  ns as E,
  po as D,
  rs as O,
  to as k,
  us as A,
  xo as j,
} from "./chunk~6b8ddcaac8.js";
import { d as M, n as N, p as P, r as F } from "./chunk~cbbb6ae37c.js";
import { n as I, t as L } from "./chunk~f4c928a27a.js";
import { t as R } from "./chunk~b980924b6a.js";
import { r as z } from "./chunk~7dcf2f426f.js";
import { t as ie } from "./chunk~4d16ce5d1a.js";
import {
  $v as B,
  Eb as V,
  Ku as H,
  Lc as U,
  Ov as W,
  Vv as G,
  jv as K,
  qv as q,
  wc as J,
  zv as Y,
} from "./main.js";
var X = e(t(), 1),
  Z = n();
function ae(e) {
  let {
      id: t,
      bPurchaseOptionsExpanded: n,
      fnCollapseOptions: i,
      bPreferAssetWithoutOverride: a,
    } = e,
    { data: o } = W(t),
    s = (0, X.useRef)(null);
  if (!o) return null;
  let l = o.purchase_options;
  return l
    ? (0, Z.jsx)(r, {
        nodeRef: s,
        in: n,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: 2e3,
        classNames: { enterActive: p, enterDone: j, exit: j, exitActive: D },
        children: (0, Z.jsxs)(`div`, {
          ref: s,
          className: k,
          children: [
            (0, Z.jsx)(`div`, {
              className: h,
              children: l
                .filter((e) => !!e.packageid)
                .map((e) =>
                  (0, Z.jsx)(
                    `div`,
                    {
                      className: d,
                      children: (0, Z.jsx)(L, {
                        id: e.packageid || 0,
                        type: `sub`,
                        bForceSmallCapsuleArt: !0,
                        bPreferAssetWithoutOverride: a,
                      }),
                    },
                    `purchaseitem_` + B(t) + `_` + e.packageid,
                  ),
                ),
            }),
            (0, Z.jsx)(`div`, {
              onClick: i,
              className: w,
              children: (0, Z.jsx)(`button`, {
                className: c,
                children: V.Localize(`#Button_Close`),
              }),
            }),
          ],
        }),
      })
    : null;
}
var Q = i((e) => {
  let { id: t, type: n } = e,
    r = f(t, n),
    {
      bHidePrice: i,
      bShowDemoButton: c,
      bPreferDemoStorePage: d,
      bShowPurchaseOptionsButton: p,
      bUseSubscriptionLayout: h,
      bPreferAssetWithoutOverride: w,
    } = e,
    [D, k] = X.useState(!1),
    j = () => k(!D),
    { data: L } = Y(r),
    { data: B } = K(r),
    { data: W } = G(r),
    { data: Q } = q(r),
    oe = o(r),
    se = H();
  if (!L || !B)
    return (0, Z.jsx)(R, { capsules_per_row: [1], is_expanded_display: !0 });
  let ce = U(se),
    $ = L.item_type == 0;
  return (0, Z.jsx)(`div`, {
    className: J(A, s, `LibraryAssetExpandedDisplay`),
    children: (0, Z.jsxs)(T, {
      appid: $ ? L.appid : void 0,
      children: [
        (0, Z.jsxs)(`div`, {
          className: _,
          children: [
            (0, Z.jsx)(`div`, {
              className: J(v),
              children: (0, Z.jsx)(ie, {
                id: r,
                bPreferDemoStorePage: d,
                children: (0, Z.jsxs)(`div`, {
                  className: S,
                  children: [
                    (0, Z.jsx)(F, { appids: oe }),
                    (0, Z.jsx)(P, {
                      id: r,
                      imageType: `library`,
                      bPreferAssetWithoutOverride: w,
                    }),
                    (0, Z.jsx)(M, { id: r }),
                  ],
                }),
              }),
            }),
            (0, Z.jsxs)(`div`, {
              className: g,
              children: [
                $ &&
                  (0, Z.jsx)(u, {
                    id: r,
                    classOverride: J(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ce,
                  }),
                (0, Z.jsxs)(`div`, {
                  className: re,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: x,
                      children: [
                        B.short_description &&
                          B.short_description.length > 0 &&
                          (0, Z.jsx)(`div`, {
                            className: J(
                              `lsjYiHotCwA-`,
                              `StoreSaleWidgetShortDesc`,
                            ),
                            children: B.short_description,
                          }),
                        (0, Z.jsx)(C, {
                          rgTagIDs: Q
                            ? Q.slice(0, 10).map((e) => e.tagid || 0)
                            : [],
                          instanceNum: 0,
                          bNoStoreLinks: !1,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: ee,
                          children: [
                            (0, Z.jsx)(`div`, {
                              className: E,
                              children: V.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, Z.jsx)(`span`, { children: m(W) }),
                              ),
                            }),
                            B.developers &&
                              B.developers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  V.Localize(`#CreatorHome_DevelopedBy`),
                                  (0, Z.jsx)(`span`, {
                                    children: B.developers[0].name,
                                  }),
                                ],
                              }),
                            B.publishers &&
                              B.publishers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  V.Localize(`#CreatorHome_PublishedBy`),
                                  (0, Z.jsx)(`span`, {
                                    children: B.publishers[0].name,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`div`, {
                      className: b,
                      children: (0, Z.jsx)(z, {
                        id: r,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: O,
                  children: (0, Z.jsx)(l, { id: r }),
                }),
                (0, Z.jsx)(`div`, {
                  className: y,
                  children:
                    h && $
                      ? (0, Z.jsx)(a, { appid: L.appid, bIsMuted: !1 })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(te, { id: r }),
                            (0, Z.jsx)(I, {
                              id: r,
                              bShowDemoButton: c,
                              bHidePrice: i,
                              bShowPurchaseOptionsButton: p,
                              fnOnPurchaseOptionsClick: j,
                              bHideWishlistButton: L.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: ne,
                  children: [
                    (0, Z.jsx)(N, { id: r, bPreferAssetWithoutOverride: w }),
                    (0, Z.jsx)(M, { id: r }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(ae, {
          id: r,
          bPurchaseOptionsExpanded: D,
          fnCollapseOptions: j,
          bPreferAssetWithoutOverride: w,
        }),
      ],
    }),
  });
});
export { Q as t };
