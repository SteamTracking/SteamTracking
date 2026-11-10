/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, i as r, l as i } from "./libraries.js";
import { B as a } from "./storelink.js";
import {
  $ as o,
  $i as s,
  $r as c,
  Dr as ee,
  Gi as l,
  Ir as u,
  Mr as d,
  Qi as f,
  Si as p,
  Ui as m,
  W as h,
  Xr as g,
  Yr as _,
  Zi as v,
  Zr as y,
  _i as b,
  aa as x,
  ci as S,
  da as te,
  gi as C,
  ia as ne,
  la as re,
  n as w,
  oa as T,
  qr as E,
  ra as D,
  sa as O,
  tt as k,
  ua as A,
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
  Cc as B,
  Dv as V,
  Fv as H,
  Hu as U,
  Ic as W,
  Lv as G,
  Sb as K,
  Uv as q,
  Yv as J,
  wv as Y,
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
    { data: o } = Y(t),
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
          className: g,
          children: [
            (0, Z.jsx)(`div`, {
              className: _,
              children: c
                .filter((e) => !!e.packageid)
                .map((e) =>
                  (0, Z.jsx)(
                    `div`,
                    {
                      className: E,
                      children: (0, Z.jsx)(L, {
                        id: e.packageid || 0,
                        type: `sub`,
                        bForceSmallCapsuleArt: !0,
                        bPreferAssetWithoutOverride: a,
                      }),
                    },
                    `purchaseitem_` + J(t) + `_` + e.packageid,
                  ),
                ),
            }),
            (0, Z.jsx)(`div`, {
              onClick: i,
              className: y,
              children: (0, Z.jsx)(`button`, {
                className: m,
                children: K.Localize(`#Button_Close`),
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
      bShowDemoButton: m,
      bPreferDemoStorePage: g,
      bShowPurchaseOptionsButton: _,
      bUseSubscriptionLayout: y,
      bPreferAssetWithoutOverride: b,
    } = e,
    [S, C] = X.useState(!1),
    E = () => C(!S),
    { data: L } = H(r),
    { data: J } = V(r),
    { data: Y } = G(r),
    { data: Q } = q(r),
    oe = a(r),
    se = U();
  if (!L || !J)
    return (0, Z.jsx)(R, { capsules_per_row: [1], is_expanded_display: !0 });
  let ce = W(se),
    $ = L.item_type == 0;
  return (0, Z.jsx)(`div`, {
    className: B(x, p, `LibraryAssetExpandedDisplay`),
    children: (0, Z.jsxs)(k, {
      appid: $ ? L.appid : void 0,
      children: [
        (0, Z.jsxs)(`div`, {
          className: te,
          children: [
            (0, Z.jsx)(`div`, {
              className: B(A),
              children: (0, Z.jsx)(ie, {
                id: r,
                bPreferDemoStorePage: g,
                children: (0, Z.jsxs)(`div`, {
                  className: re,
                  children: [
                    (0, Z.jsx)(P, { appids: oe }),
                    (0, Z.jsx)(M, {
                      id: r,
                      imageType: `library`,
                      bPreferAssetWithoutOverride: b,
                    }),
                    (0, Z.jsx)(N, { id: r }),
                  ],
                }),
              }),
            }),
            (0, Z.jsxs)(`div`, {
              className: O,
              children: [
                $ &&
                  (0, Z.jsx)(ee, {
                    id: r,
                    classOverride: B(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ce,
                  }),
                (0, Z.jsxs)(`div`, {
                  className: T,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: ne,
                      children: [
                        J.short_description &&
                          J.short_description.length > 0 &&
                          (0, Z.jsx)(`div`, {
                            className: B(
                              `lsjYiHotCwA-`,
                              `StoreSaleWidgetShortDesc`,
                            ),
                            children: J.short_description,
                          }),
                        (0, Z.jsx)(w, {
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
                              className: v,
                              children: K.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, Z.jsx)(`span`, { children: u(Y) }),
                              ),
                            }),
                            J.developers &&
                              J.developers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  K.Localize(`#CreatorHome_DevelopedBy`),
                                  (0, Z.jsx)(`span`, {
                                    children: J.developers[0].name,
                                  }),
                                ],
                              }),
                            J.publishers &&
                              J.publishers.length > 0 &&
                              (0, Z.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  K.Localize(`#CreatorHome_PublishedBy`),
                                  (0, Z.jsx)(`span`, {
                                    children: J.publishers[0].name,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`div`, {
                      className: s,
                      children: (0, Z.jsx)(z, {
                        id: r,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: f,
                  children: (0, Z.jsx)(d, { id: r }),
                }),
                (0, Z.jsx)(`div`, {
                  className: c,
                  children:
                    y && $
                      ? (0, Z.jsx)(h, { appid: L.appid, bIsMuted: !1 })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(o, { id: r }),
                            (0, Z.jsx)(I, {
                              id: r,
                              bShowDemoButton: m,
                              bHidePrice: i,
                              bShowPurchaseOptionsButton: _,
                              fnOnPurchaseOptionsClick: E,
                              bHideWishlistButton: L.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: D,
                  children: [
                    (0, Z.jsx)(F, { id: r, bPreferAssetWithoutOverride: b }),
                    (0, Z.jsx)(N, { id: r }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(ae, {
          id: r,
          bPurchaseOptionsExpanded: S,
          fnCollapseOptions: E,
          bPreferAssetWithoutOverride: b,
        }),
      ],
    }),
  });
});
export { Q as t };
