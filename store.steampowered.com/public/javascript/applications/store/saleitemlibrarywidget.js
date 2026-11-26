/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, c as n, dt as r, r as i } from "./chunk~01cfc309bf.js";
import {
  $o as a,
  Do as o,
  Eo as s,
  Ia as c,
  Ka as l,
  La as u,
  Mo as d,
  Zn as f,
  _s as p,
  ao as m,
  bs as h,
  cs as ee,
  gs as te,
  hs as ne,
  lo as g,
  lr as _,
  ls as v,
  ms as y,
  n as re,
  oo as b,
  or as x,
  ps as S,
  ro as C,
  so as w,
  ss as T,
  ts as E,
  vo as D,
  xs as O,
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
      bPreferAssetWithoutOverride: c,
    } = e,
    { data: l } = H(t),
    u = (0, X.useRef)(null);
  if (!l) return null;
  let d = l.purchase_options;
  return d
    ? (0, Z.jsx)(i, {
        nodeRef: u,
        in: n,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: 2e3,
        classNames: { enterActive: o, enterDone: s, exit: s, exitActive: D },
        children: (0, Z.jsxs)(`div`, {
          ref: u,
          className: b,
          children: [
            (0, Z.jsx)(`div`, {
              className: m,
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
                        bPreferAssetWithoutOverride: c,
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
                className: a,
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
    r = _(t, n),
    {
      bHidePrice: i,
      bShowDemoButton: a,
      bPreferDemoStorePage: o,
      bShowPurchaseOptionsButton: s,
      bUseSubscriptionLayout: m,
      bPreferAssetWithoutOverride: b,
    } = e,
    [C, w] = X.useState(!1),
    D = () => w(!C),
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
    className: V(ne, d, `LibraryAssetExpandedDisplay`),
    children: (0, Z.jsxs)(j, {
      appid: $ ? R.appid : void 0,
      children: [
        (0, Z.jsxs)(`div`, {
          className: O,
          children: [
            (0, Z.jsx)(`div`, {
              className: V(h),
              children: (0, Z.jsx)(ie, {
                id: r,
                bPreferDemoStorePage: o,
                children: (0, Z.jsxs)(`div`, {
                  className: k,
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
              className: p,
              children: [
                $ &&
                  (0, Z.jsx)(c, {
                    id: r,
                    classOverride: V(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ce,
                  }),
                (0, Z.jsxs)(`div`, {
                  className: te,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: y,
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
                          className: E,
                          children: [
                            (0, Z.jsx)(`div`, {
                              className: T,
                              children: B.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, Z.jsx)(`span`, { children: l(K) }),
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
                      className: v,
                      children: (0, Z.jsx)(z, {
                        id: r,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: ee,
                  children: (0, Z.jsx)(u, { id: r }),
                }),
                (0, Z.jsx)(`div`, {
                  className: g,
                  children:
                    m && $
                      ? (0, Z.jsx)(f, { appid: R.appid, bIsMuted: !1 })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(x, { id: r }),
                            (0, Z.jsx)(I, {
                              id: r,
                              bShowDemoButton: a,
                              bHidePrice: i,
                              bShowPurchaseOptionsButton: s,
                              fnOnPurchaseOptionsClick: D,
                              bHideWishlistButton: R.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: S,
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
          bPurchaseOptionsExpanded: C,
          fnCollapseOptions: D,
          bPreferAssetWithoutOverride: b,
        }),
      ],
    }),
  });
});
export { Q as t };
