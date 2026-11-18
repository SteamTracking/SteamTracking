/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, i as r, l as i } from "./chunk~01cfc309bf.js";
import {
  $a as a,
  Bi as o,
  Ei as s,
  Eo as c,
  Fa as l,
  Ha as u,
  Ja as d,
  Li as f,
  Mt as p,
  Na as m,
  Qi as h,
  Ua as ee,
  Ui as te,
  Ut as ne,
  Va as g,
  Vi as _,
  Vt as v,
  Xa as y,
  Ya as b,
  Za as x,
  bi as S,
  eo as C,
  fa as re,
  hi as w,
  n as T,
  oa as E,
  qa as D,
  sa as O,
  to as k,
  zi as A,
} from "./chunk~6b8ddcaac8.js";
import { d as j, n as M, p as N, r as P } from "./chunk~cbbb6ae37c.js";
import { n as F, t as I } from "./chunk~f4c928a27a.js";
import { r as L } from "./chunk~9871ee5432.js";
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
    { data: s } = W(t),
    c = (0, X.useRef)(null);
  if (!s) return null;
  let l = s.purchase_options;
  return l
    ? (0, Z.jsx)(r, {
        nodeRef: c,
        in: n,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: 2e3,
        classNames: { enterActive: O, enterDone: E, exit: E, exitActive: h },
        children: (0, Z.jsxs)(`div`, {
          ref: c,
          className: o,
          children: [
            (0, Z.jsx)(`div`, {
              className: A,
              children: l
                .filter((e) => !!e.packageid)
                .map((e) =>
                  (0, Z.jsx)(
                    `div`,
                    {
                      className: f,
                      children: (0, Z.jsx)(I, {
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
              className: _,
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
    r = L(t, n),
    {
      bHidePrice: i,
      bShowDemoButton: o,
      bPreferDemoStorePage: f,
      bShowPurchaseOptionsButton: m,
      bUseSubscriptionLayout: h,
      bPreferAssetWithoutOverride: _,
    } = e,
    [E, O] = X.useState(!1),
    A = () => O(!E),
    { data: I } = Y(r),
    { data: B } = K(r),
    { data: W } = G(r),
    { data: Q } = q(r),
    oe = c(r),
    se = H();
  if (!I || !B)
    return (0, Z.jsx)(R, { capsules_per_row: [1], is_expanded_display: !0 });
  let ce = U(se),
    $ = I.item_type == 0;
  return (0, Z.jsx)(`div`, {
    className: J(b, re, `LibraryAssetExpandedDisplay`),
    children: (0, Z.jsxs)(ne, {
      appid: $ ? I.appid : void 0,
      children: [
        (0, Z.jsxs)(`div`, {
          className: k,
          children: [
            (0, Z.jsx)(`div`, {
              className: J(C),
              children: (0, Z.jsx)(ie, {
                id: r,
                bPreferDemoStorePage: f,
                children: (0, Z.jsxs)(`div`, {
                  className: a,
                  children: [
                    (0, Z.jsx)(P, { appids: oe }),
                    (0, Z.jsx)(N, {
                      id: r,
                      imageType: `library`,
                      bPreferAssetWithoutOverride: _,
                    }),
                    (0, Z.jsx)(j, { id: r }),
                  ],
                }),
              }),
            }),
            (0, Z.jsxs)(`div`, {
              className: x,
              children: [
                $ &&
                  (0, Z.jsx)(w, {
                    id: r,
                    classOverride: J(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ce,
                  }),
                (0, Z.jsxs)(`div`, {
                  className: y,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: d,
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
                              className: g,
                              children: V.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, Z.jsx)(`span`, { children: s(W) }),
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
                      className: ee,
                      children: (0, Z.jsx)(z, {
                        id: r,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: u,
                  children: (0, Z.jsx)(S, { id: r }),
                }),
                (0, Z.jsx)(`div`, {
                  className: te,
                  children:
                    h && $
                      ? (0, Z.jsx)(p, { appid: I.appid, bIsMuted: !1 })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(v, { id: r }),
                            (0, Z.jsx)(F, {
                              id: r,
                              bShowDemoButton: o,
                              bHidePrice: i,
                              bShowPurchaseOptionsButton: m,
                              fnOnPurchaseOptionsClick: A,
                              bHideWishlistButton: I.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: D,
                  children: [
                    (0, Z.jsx)(M, { id: r, bPreferAssetWithoutOverride: _ }),
                    (0, Z.jsx)(j, { id: r }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(ae, {
          id: r,
          bPurchaseOptionsExpanded: E,
          fnCollapseOptions: A,
          bPreferAssetWithoutOverride: _,
        }),
      ],
    }),
  });
});
export { Q as t };
