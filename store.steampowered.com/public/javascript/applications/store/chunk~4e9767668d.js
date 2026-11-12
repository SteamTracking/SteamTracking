/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, i as r, l as i } from "./chunk~01cfc309bf.js";
import {
  $a as a,
  Ba as o,
  Bi as s,
  Bt as c,
  Ha as l,
  Hi as u,
  Ht as d,
  Ii as f,
  Ja as p,
  Ka as m,
  Ma as h,
  Pa as ee,
  Qa as te,
  Ri as g,
  Ti as _,
  To as v,
  Va as y,
  Xa as b,
  Ya as x,
  Zi as S,
  aa as C,
  da as w,
  eo as ne,
  jt as re,
  mi as T,
  n as E,
  oa as D,
  qa as O,
  yi as k,
  zi as A,
} from "./chunk~6b8ddcaac8.js";
import { g as j, i as M, n as N, p as P, v as F } from "./chunk~cbbb6ae37c.js";
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
    c = (0, X.useRef)(null);
  if (!o) return null;
  let l = o.purchase_options;
  return l
    ? (0, Z.jsx)(r, {
        nodeRef: c,
        in: n,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: 2e3,
        classNames: { enterActive: D, enterDone: C, exit: C, exitActive: S },
        children: (0, Z.jsxs)(`div`, {
          ref: c,
          className: A,
          children: [
            (0, Z.jsx)(`div`, {
              className: g,
              children: l
                .filter((e) => !!e.packageid)
                .map((e) =>
                  (0, Z.jsx)(
                    `div`,
                    {
                      className: f,
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
              className: s,
              children: (0, Z.jsx)(`button`, {
                className: h,
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
    r = P(t, n),
    {
      bHidePrice: i,
      bShowDemoButton: s,
      bPreferDemoStorePage: f,
      bShowPurchaseOptionsButton: h,
      bUseSubscriptionLayout: g,
      bPreferAssetWithoutOverride: S,
    } = e,
    [C, D] = X.useState(!1),
    A = () => D(!C),
    { data: L } = Y(r),
    { data: B } = K(r),
    { data: W } = G(r),
    { data: Q } = q(r),
    oe = v(r),
    se = H();
  if (!L || !B)
    return (0, Z.jsx)(R, { capsules_per_row: [1], is_expanded_display: !0 });
  let ce = U(se),
    $ = L.item_type == 0;
  return (0, Z.jsx)(`div`, {
    className: J(p, w, `LibraryAssetExpandedDisplay`),
    children: (0, Z.jsxs)(d, {
      appid: $ ? L.appid : void 0,
      children: [
        (0, Z.jsxs)(`div`, {
          className: ne,
          children: [
            (0, Z.jsx)(`div`, {
              className: J(a),
              children: (0, Z.jsx)(ie, {
                id: r,
                bPreferDemoStorePage: f,
                children: (0, Z.jsxs)(`div`, {
                  className: te,
                  children: [
                    (0, Z.jsx)(M, { appids: oe }),
                    (0, Z.jsx)(F, {
                      id: r,
                      imageType: `library`,
                      bPreferAssetWithoutOverride: S,
                    }),
                    (0, Z.jsx)(j, { id: r }),
                  ],
                }),
              }),
            }),
            (0, Z.jsxs)(`div`, {
              className: b,
              children: [
                $ &&
                  (0, Z.jsx)(T, {
                    id: r,
                    classOverride: J(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ce,
                  }),
                (0, Z.jsxs)(`div`, {
                  className: x,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: O,
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
                        (0, Z.jsx)(E, {
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
                              className: o,
                              children: V.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, Z.jsx)(`span`, { children: _(W) }),
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
                      className: l,
                      children: (0, Z.jsx)(z, {
                        id: r,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: y,
                  children: (0, Z.jsx)(k, { id: r }),
                }),
                (0, Z.jsx)(`div`, {
                  className: u,
                  children:
                    g && $
                      ? (0, Z.jsx)(re, { appid: L.appid, bIsMuted: !1 })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(c, { id: r }),
                            (0, Z.jsx)(I, {
                              id: r,
                              bShowDemoButton: s,
                              bHidePrice: i,
                              bShowPurchaseOptionsButton: h,
                              fnOnPurchaseOptionsClick: A,
                              bHideWishlistButton: L.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: m,
                  children: [
                    (0, Z.jsx)(N, { id: r, bPreferAssetWithoutOverride: S }),
                    (0, Z.jsx)(j, { id: r }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(ae, {
          id: r,
          bPurchaseOptionsExpanded: C,
          fnCollapseOptions: A,
          bPreferAssetWithoutOverride: S,
        }),
      ],
    }),
  });
});
export { Q as t };
