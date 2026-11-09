/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, i as r, l as i } from "./libraries.js";
import { B as a } from "./storelink.js";
import {
  $ as o,
  At as s,
  Gt as c,
  Jt as l,
  Pt as u,
  Tt as d,
  Un as f,
  Vn as p,
  W as ee,
  Xn as m,
  Yn as h,
  Yt as g,
  Zn as _,
  Zt as v,
  ar as y,
  bn as b,
  cr as x,
  hn as S,
  ir as te,
  lr as ne,
  mn as C,
  n as re,
  nr as w,
  on as T,
  qt as E,
  rr as D,
  sr as O,
  tr as k,
  tt as A,
} from "./saletags.js";
import {
  d as j,
  h as M,
  m as N,
  r as P,
  t as F,
} from "./salestoreitemutils.js";
import { n as I, t as L } from "./salepreviewwidgets.js";
import { t as R } from "./saleghostsections.js";
import { r as z } from "./salehilightplayerembed.js";
import { t as ie } from "./storegamehover.js";
import {
  Cv as B,
  Ev as V,
  Fc as H,
  Hv as U,
  Iv as W,
  Jv as G,
  Pv as K,
  Sc as q,
  Vu as J,
  xb as Y,
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
    { data: o } = B(t),
    s = (0, X.useRef)(null);
  if (!o) return null;
  let u = o.purchase_options;
  return u
    ? (0, Z.jsx)(r, {
        nodeRef: s,
        in: n,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: 2e3,
        classNames: { enterActive: S, enterDone: C, exit: C, exitActive: T },
        children: (0, Z.jsxs)(`div`, {
          ref: s,
          className: l,
          children: [
            (0, Z.jsx)(`div`, {
              className: E,
              children: u
                .filter((e) => !!e.packageid)
                .map((e) =>
                  (0, Z.jsx)(
                    `div`,
                    {
                      className: c,
                      children: (0, Z.jsx)(L, {
                        id: e.packageid || 0,
                        type: `sub`,
                        bForceSmallCapsuleArt: !0,
                        bPreferAssetWithoutOverride: a,
                      }),
                    },
                    `purchaseitem_` + G(t) + `_` + e.packageid,
                  ),
                ),
            }),
            (0, Z.jsx)(`div`, {
              onClick: i,
              className: g,
              children: (0, Z.jsx)(`button`, {
                className: p,
                children: Y.Localize(`#Button_Close`),
              }),
            }),
          ],
        }),
      })
    : null;
}
var Q = i((e) => {
  let { id: t, type: n } = e,
    r = j(t, n),
    {
      bHidePrice: i,
      bShowDemoButton: c,
      bPreferDemoStorePage: l,
      bShowPurchaseOptionsButton: p,
      bUseSubscriptionLayout: g,
      bPreferAssetWithoutOverride: S,
    } = e,
    [C, T] = X.useState(!1),
    E = () => T(!C),
    { data: L } = K(r),
    { data: B } = V(r),
    { data: G } = W(r),
    { data: Q } = U(r),
    oe = a(r),
    se = J();
  if (!L || !B)
    return (0, Z.jsx)(R, { capsules_per_row: [1], is_expanded_display: !0 });
  let ce = H(se),
    $ = L.item_type == 0;
  return (0, Z.jsx)(`div`, {
    className: q(D, b, `LibraryAssetExpandedDisplay`),
    children: (0, Z.jsxs)(A, {
      appid: $ ? L.appid : void 0,
      children: [
        (0, Z.jsxs)(`div`, {
          className: ne,
          children: [
            (0, Z.jsx)(`div`, {
              className: q(x),
              children: (0, Z.jsx)(ie, {
                id: r,
                bPreferDemoStorePage: l,
                children: (0, Z.jsxs)(`div`, {
                  className: O,
                  children: [
                    (0, Z.jsx)(P, { appids: oe }),
                    (0, Z.jsx)(M, {
                      id: r,
                      imageType: `library`,
                      bPreferAssetWithoutOverride: S,
                    }),
                    (0, Z.jsx)(N, { id: r }),
                  ],
                }),
              }),
            }),
            (0, Z.jsxs)(`div`, {
              className: y,
              children: [
                $ &&
                  (0, Z.jsx)(d, {
                    id: r,
                    classOverride: q(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ce,
                  }),
                (0, Z.jsxs)(`div`, {
                  className: te,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: w,
                      children: [
                        B.short_description &&
                          B.short_description.length > 0 &&
                          (0, Z.jsx)(`div`, {
                            className: q(
                              `lsjYiHotCwA-`,
                              `StoreSaleWidgetShortDesc`,
                            ),
                            children: B.short_description,
                          }),
                        (0, Z.jsx)(re, {
                          rgTagIDs: Q
                            ? Q.slice(0, 10).map((e) => e.tagid || 0)
                            : [],
                          instanceNum: 0,
                          bNoStoreLinks: !1,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: f,
                          children: [
                            (0, Z.jsx)(`div`, {
                              className: h,
                              children: Y.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, Z.jsx)(`span`, { children: u(G) }),
                              ),
                            }),
                            B.developers &&
                              B.developers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  Y.Localize(`#CreatorHome_DevelopedBy`),
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
                                  Y.Localize(`#CreatorHome_PublishedBy`),
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
                      className: _,
                      children: (0, Z.jsx)(z, {
                        id: r,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: m,
                  children: (0, Z.jsx)(s, { id: r }),
                }),
                (0, Z.jsx)(`div`, {
                  className: v,
                  children:
                    g && $
                      ? (0, Z.jsx)(ee, { appid: L.appid, bIsMuted: !1 })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(o, { id: r }),
                            (0, Z.jsx)(I, {
                              id: r,
                              bShowDemoButton: c,
                              bHidePrice: i,
                              bShowPurchaseOptionsButton: p,
                              fnOnPurchaseOptionsClick: E,
                              bHideWishlistButton: L.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: k,
                  children: [
                    (0, Z.jsx)(F, { id: r, bPreferAssetWithoutOverride: S }),
                    (0, Z.jsx)(N, { id: r }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(ae, {
          id: r,
          bPurchaseOptionsExpanded: C,
          fnCollapseOptions: E,
          bPreferAssetWithoutOverride: S,
        }),
      ],
    }),
  });
});
export { Q as t };
