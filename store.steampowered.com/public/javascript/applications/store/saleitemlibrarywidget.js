/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, i as r, l as i } from "./chunk~01cfc309bf.js";
import {
  $a as a,
  $o as o,
  Da as s,
  Ea as c,
  Fs as ee,
  Go as l,
  Ia as u,
  Qo as d,
  Rn as f,
  So as p,
  Uo as m,
  Xa as h,
  Xn as g,
  Ya as _,
  Za as v,
  Zo as y,
  _o as b,
  as as x,
  co as S,
  ds as te,
  er as ne,
  go as C,
  is as re,
  ls as w,
  n as T,
  os as E,
  qa as D,
  qn as O,
  rs as k,
  ss as A,
  us as j,
} from "./chunk~6b8ddcaac8.js";
import { d as M, n as N, p as P, r as F } from "./chunk~cbbb6ae37c.js";
import { n as I, t as L } from "./chunk~f4c928a27a.js";
import { t as R } from "./chunk~b980924b6a.js";
import { r as z } from "./chunk~7dcf2f426f.js";
import { t as ie } from "./chunk~4d16ce5d1a.js";
import {
  Bv as B,
  Fb as V,
  Jv as H,
  Kc as U,
  Lv as W,
  Nc as G,
  Xv as K,
  cy as q,
  ny as J,
  td as Y,
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
  let c = o.purchase_options;
  return c
    ? (0, Z.jsx)(r, {
        nodeRef: s,
        in: n,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: 2e3,
        classNames: { enterActive: b, enterDone: C, exit: C, exitActive: S },
        children: (0, Z.jsxs)(`div`, {
          ref: s,
          className: h,
          children: [
            (0, Z.jsx)(`div`, {
              className: _,
              children: c
                .filter((e) => !!e.packageid)
                .map((e) =>
                  (0, Z.jsx)(
                    `div`,
                    {
                      className: D,
                      children: (0, Z.jsx)(L, {
                        id: e.packageid || 0,
                        type: `sub`,
                        bForceSmallCapsuleArt: !0,
                        bPreferAssetWithoutOverride: a,
                      }),
                    },
                    `purchaseitem_` + q(t) + `_` + e.packageid,
                  ),
                ),
            }),
            (0, Z.jsx)(`div`, {
              onClick: i,
              className: v,
              children: (0, Z.jsx)(`button`, {
                className: m,
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
    r = g(t, n),
    {
      bHidePrice: i,
      bShowDemoButton: m,
      bPreferDemoStorePage: h,
      bShowPurchaseOptionsButton: _,
      bUseSubscriptionLayout: v,
      bPreferAssetWithoutOverride: b,
    } = e,
    [S, C] = X.useState(!1),
    D = () => C(!S),
    { data: L } = H(r),
    { data: W } = B(r),
    { data: q } = K(r),
    { data: Q } = J(r),
    oe = ee(r),
    se = Y();
  if (!L || !W)
    return (0, Z.jsx)(R, { capsules_per_row: [1], is_expanded_display: !0 });
  let ce = U(se),
    $ = L.item_type == 0;
  return (0, Z.jsx)(`div`, {
    className: G(x, p, `LibraryAssetExpandedDisplay`),
    children: (0, Z.jsxs)(ne, {
      appid: $ ? L.appid : void 0,
      children: [
        (0, Z.jsxs)(`div`, {
          className: te,
          children: [
            (0, Z.jsx)(`div`, {
              className: G(j),
              children: (0, Z.jsx)(ie, {
                id: r,
                bPreferDemoStorePage: h,
                children: (0, Z.jsxs)(`div`, {
                  className: w,
                  children: [
                    (0, Z.jsx)(F, { appids: oe }),
                    (0, Z.jsx)(P, {
                      id: r,
                      imageType: `library`,
                      bPreferAssetWithoutOverride: b,
                    }),
                    (0, Z.jsx)(M, { id: r }),
                  ],
                }),
              }),
            }),
            (0, Z.jsxs)(`div`, {
              className: A,
              children: [
                $ &&
                  (0, Z.jsx)(c, {
                    id: r,
                    classOverride: G(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ce,
                  }),
                (0, Z.jsxs)(`div`, {
                  className: E,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: re,
                      children: [
                        W.short_description &&
                          W.short_description.length > 0 &&
                          (0, Z.jsx)(`div`, {
                            className: G(
                              `lsjYiHotCwA-`,
                              `StoreSaleWidgetShortDesc`,
                            ),
                            children: W.short_description,
                          }),
                        (0, Z.jsx)(T, {
                          rgTagIDs: Q
                            ? Q.slice(0, 10).map((e) => e.tagid || 0)
                            : [],
                          instanceNum: 0,
                          bNoStoreLinks: !1,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: l,
                          children: [
                            (0, Z.jsx)(`div`, {
                              className: y,
                              children: V.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, Z.jsx)(`span`, { children: u(q) }),
                              ),
                            }),
                            W.developers &&
                              W.developers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  V.Localize(`#CreatorHome_DevelopedBy`),
                                  (0, Z.jsx)(`span`, {
                                    children: W.developers[0].name,
                                  }),
                                ],
                              }),
                            W.publishers &&
                              W.publishers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  V.Localize(`#CreatorHome_PublishedBy`),
                                  (0, Z.jsx)(`span`, {
                                    children: W.publishers[0].name,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`div`, {
                      className: o,
                      children: (0, Z.jsx)(z, {
                        id: r,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: d,
                  children: (0, Z.jsx)(s, { id: r }),
                }),
                (0, Z.jsx)(`div`, {
                  className: a,
                  children:
                    v && $
                      ? (0, Z.jsx)(f, { appid: L.appid, bIsMuted: !1 })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(O, { id: r }),
                            (0, Z.jsx)(I, {
                              id: r,
                              bShowDemoButton: m,
                              bHidePrice: i,
                              bShowPurchaseOptionsButton: _,
                              fnOnPurchaseOptionsClick: D,
                              bHideWishlistButton: L.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: k,
                  children: [
                    (0, Z.jsx)(N, { id: r, bPreferAssetWithoutOverride: b }),
                    (0, Z.jsx)(M, { id: r }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(ae, {
          id: r,
          bPurchaseOptionsExpanded: S,
          fnCollapseOptions: D,
          bPreferAssetWithoutOverride: b,
        }),
      ],
    }),
  });
});
export { Q as t };
