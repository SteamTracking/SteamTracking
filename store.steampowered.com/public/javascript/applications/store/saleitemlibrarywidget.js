/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, c as n, dt as r, r as i } from "./chunk~01cfc309bf.js";
import {
  Eo as a,
  Fa as o,
  Ga as s,
  Ia as c,
  Qo as l,
  To as u,
  Xn as d,
  _o as f,
  ao as p,
  ar as m,
  bs as ee,
  co as h,
  cr as g,
  cs as _,
  es as v,
  fs as y,
  gs as b,
  hs as x,
  io as S,
  jo as te,
  ms as ne,
  n as re,
  no as C,
  oo as w,
  os as T,
  ps as E,
  ss as D,
  vs as O,
  ys as k,
} from "./chunk~6b8ddcaac8.js";
import { O as A, p as j } from "./chunk~4eed35ad1f.js";
import { d as M, n as N, p as P, r as F } from "./chunk~cbbb6ae37c.js";
import { n as I, r as L, t as R } from "./chunk~f4c928a27a.js";
import { r as z } from "./chunk~7dcf2f426f.js";
import { t as ie } from "./chunk~4d16ce5d1a.js";
import {
  Ib as B,
  Pc as V,
  Rv as H,
  Vv as U,
  Yv as W,
  Zv as G,
  ly as K,
  nd as q,
  qc as J,
  ry as Y,
} from "./main.js";
var X = e(t(), 1),
  Z = r();
function ae(e) {
  let {
      id: t,
      bPurchaseOptionsExpanded: n,
      fnCollapseOptions: r,
      bPreferAssetWithoutOverride: o,
    } = e,
    { data: s } = H(t),
    c = (0, X.useRef)(null);
  if (!s) return null;
  let d = s.purchase_options;
  return d
    ? (0, Z.jsx)(i, {
        nodeRef: c,
        in: n,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: 2e3,
        classNames: { enterActive: a, enterDone: u, exit: u, exitActive: f },
        children: (0, Z.jsxs)(`div`, {
          ref: c,
          className: p,
          children: [
            (0, Z.jsx)(`div`, {
              className: S,
              children: d
                .filter((e) => !!e.packageid)
                .map((e) =>
                  (0, Z.jsx)(
                    `div`,
                    {
                      className: C,
                      children: (0, Z.jsx)(R, {
                        id: e.packageid || 0,
                        type: `sub`,
                        bForceSmallCapsuleArt: !0,
                        bPreferAssetWithoutOverride: o,
                      }),
                    },
                    `purchaseitem_` + K(t) + `_` + e.packageid,
                  ),
                ),
            }),
            (0, Z.jsx)(`div`, {
              onClick: r,
              className: w,
              children: (0, Z.jsx)(`button`, {
                className: l,
                children: B.Localize(`#Button_Close`),
              }),
            }),
          ],
        }),
      })
    : null;
}
var Q = n((e) => {
  let { id: t, type: n } = e,
    r = g(t, n),
    {
      bHidePrice: i,
      bShowDemoButton: a,
      bPreferDemoStorePage: l,
      bShowPurchaseOptionsButton: u,
      bUseSubscriptionLayout: f,
      bPreferAssetWithoutOverride: p,
    } = e,
    [S, C] = X.useState(!1),
    w = () => C(!S),
    { data: R } = W(r),
    { data: H } = U(r),
    { data: K } = G(r),
    { data: Q } = Y(r),
    oe = A(r),
    se = q();
  if (!R || !H)
    return (0, Z.jsx)(L, { capsules_per_row: [1], is_expanded_display: !0 });
  let ce = J(se),
    $ = R.item_type == 0;
  return (0, Z.jsx)(`div`, {
    className: V(ne, te, `LibraryAssetExpandedDisplay`),
    children: (0, Z.jsxs)(j, {
      appid: $ ? R.appid : void 0,
      children: [
        (0, Z.jsxs)(`div`, {
          className: ee,
          children: [
            (0, Z.jsx)(`div`, {
              className: V(k),
              children: (0, Z.jsx)(ie, {
                id: r,
                bPreferDemoStorePage: l,
                children: (0, Z.jsxs)(`div`, {
                  className: O,
                  children: [
                    (0, Z.jsx)(F, { appids: oe }),
                    (0, Z.jsx)(P, {
                      id: r,
                      imageType: `library`,
                      bPreferAssetWithoutOverride: p,
                    }),
                    (0, Z.jsx)(M, { id: r }),
                  ],
                }),
              }),
            }),
            (0, Z.jsxs)(`div`, {
              className: b,
              children: [
                $ &&
                  (0, Z.jsx)(o, {
                    id: r,
                    classOverride: V(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ce,
                  }),
                (0, Z.jsxs)(`div`, {
                  className: x,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: E,
                      children: [
                        H.short_description &&
                          H.short_description.length > 0 &&
                          (0, Z.jsx)(`div`, {
                            className: V(
                              `lsjYiHotCwA-`,
                              `StoreSaleWidgetShortDesc`,
                            ),
                            children: H.short_description,
                          }),
                        (0, Z.jsx)(re, {
                          rgTagIDs: Q
                            ? Q.slice(0, 10).map((e) => e.tagid || 0)
                            : [],
                          instanceNum: 0,
                          bNoStoreLinks: !1,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: v,
                          children: [
                            (0, Z.jsx)(`div`, {
                              className: T,
                              children: B.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, Z.jsx)(`span`, { children: s(K) }),
                              ),
                            }),
                            H.developers &&
                              H.developers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  B.Localize(`#CreatorHome_DevelopedBy`),
                                  (0, Z.jsx)(`span`, {
                                    children: H.developers[0].name,
                                  }),
                                ],
                              }),
                            H.publishers &&
                              H.publishers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  B.Localize(`#CreatorHome_PublishedBy`),
                                  (0, Z.jsx)(`span`, {
                                    children: H.publishers[0].name,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`div`, {
                      className: _,
                      children: (0, Z.jsx)(z, {
                        id: r,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: D,
                  children: (0, Z.jsx)(c, { id: r }),
                }),
                (0, Z.jsx)(`div`, {
                  className: h,
                  children:
                    f && $
                      ? (0, Z.jsx)(d, { appid: R.appid, bIsMuted: !1 })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(m, { id: r }),
                            (0, Z.jsx)(I, {
                              id: r,
                              bShowDemoButton: a,
                              bHidePrice: i,
                              bShowPurchaseOptionsButton: u,
                              fnOnPurchaseOptionsClick: w,
                              bHideWishlistButton: R.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: y,
                  children: [
                    (0, Z.jsx)(N, { id: r, bPreferAssetWithoutOverride: p }),
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
          fnCollapseOptions: w,
          bPreferAssetWithoutOverride: p,
        }),
      ],
    }),
  });
});
export { Q as t };
