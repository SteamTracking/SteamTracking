/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, dt as n, ft as r } from "./chunk~01cfc309bf.js";
import {
  $a as i,
  $i as a,
  Da as o,
  Ea as s,
  Ei as c,
  Eo as l,
  Ft as u,
  Ht as d,
  Ii as f,
  Mt as p,
  Oi as m,
  Pa as h,
  Qa as g,
  Ri as _,
  St as v,
  Ta as y,
  Ti as ee,
  Ut as te,
  Vt as ne,
  Wa as re,
  Wt as ie,
  Xt as b,
  Ya as x,
  _a as S,
  ao as C,
  bi as ae,
  bo as w,
  do as oe,
  hi as se,
  io as ce,
  ja as le,
  ji as T,
  kt as ue,
  lo as de,
  no as fe,
  oo as E,
  qa as pe,
  ro as D,
  so as me,
  t as he,
  wa as O,
  xo as k,
  xt as A,
  ya as ge,
} from "./chunk~6b8ddcaac8.js";
import { n as j } from "./chunk~751f63337e.js";
import { i as _e, r as ve } from "./chunk~4c13037b22.js";
import { d as ye, p as M, r as be } from "./chunk~cbbb6ae37c.js";
import { n as xe, t as Se } from "./chunk~cd94ddba57.js";
import { r as Ce } from "./chunk~9871ee5432.js";
import { t as we } from "./chunk~b980924b6a.js";
import { n as Te, t as Ee } from "./chunk~56437c278a.js";
import {
  $v as N,
  Bv as P,
  Eb as F,
  Ec as I,
  Jy as L,
  Ku as De,
  Mv as R,
  Pv as z,
  Tv as Oe,
  Vv as B,
  Wb as ke,
  Yy as V,
  _l as Ae,
  cl as je,
  cx as Me,
  in as Ne,
  jc as Pe,
  jv as H,
  mb as Fe,
  qv as Ie,
  ub as U,
  uv as Le,
  wc as W,
  xr as Re,
  zv as G,
} from "./main.js";
var K = e(t(), 1),
  q = `x33TRfA9NLE-`,
  ze = `UWpi28gEMso-`,
  J = r(),
  Be = 6;
function Ve(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = z(t),
    i = r?.item_type == 2,
    { data: o } = k(),
    s = K.useMemo(() => {
      if (r)
        return r.item_type === 1 || r.item_type === 2
          ? (r.included_appids || [])
              .filter((e) => !i || !n || !o?.has(e))
              .map((e) => ({ appid: e }))
          : (console.error(
              `ContentsPreviewList unexpected store item type:`,
              r.item_type,
            ),
            null);
    }, [r, n, i, o]);
  if (!s || s.length == 0) return null;
  let c = s.length,
    l = F.LocalizePlural(`#Sale_ContentPreview`, c);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != c && (l = F.Localize(`#Sale_Bundle_CompletePartialSet`, e - c, e));
  }
  return (0, J.jsxs)(`div`, {
    className: _,
    children: [
      (0, J.jsxs)(`div`, {
        className: a,
        children: [
          i &&
            (0, J.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: F.Localize(`#AppType_bundle`),
            }),
          l,
        ],
      }),
      (0, J.jsx)(`div`, {
        className: O,
        children: s
          .slice(0, Be)
          .map((e) => (0, J.jsx)(Y, { id: e }, `preview${N(e)}`)),
      }),
    ],
  });
}
function Y(e) {
  let { id: t } = e,
    { data: n } = P(t),
    { data: r } = G(t);
  if (!n || !r) return null;
  let i = I(n, `small_capsule`);
  return (0, J.jsx)(d, {
    id: t,
    className: s,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, J.jsx)(`img`, {
      src: i,
      className: y,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
function X(e) {
  let [t, r] = (0, K.useState)(void 0),
    { data: i } = z(e),
    { data: a } = Ie(e),
    o = n(),
    s = Le();
  return (
    (0, K.useEffect)(() => {
      if (i) {
        if (a && a.length > 0) r(a);
        else if (i.related_items?.parent_appid) {
          let e = { appid: i.related_items?.parent_appid };
          (async () => {
            let t = await o.fetchQuery(Oe(s, e));
            t && t.length > 0 && r(t);
          })();
        }
      }
    }, [s, o, i, a]),
    t
  );
}
function He(e) {
  let { id: t } = e;
  return t ? (0, J.jsx)(Z, { id: t }) : null;
}
function Z(e) {
  let { id: t } = e,
    n = X(t);
  return n
    ? (0, J.jsx)(`div`, {
        className: E,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, J.jsx)(he, { tagid: e.tagid, className: T }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function Q(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: i,
      bHidePrice: a,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      className: l,
      bShowCartButton: d,
    } = e,
    { data: f } = z(t),
    { data: p } = B(t),
    { data: m } = R(t),
    { bIsOwned: g } = w(t),
    [_, y] = ie(s, c);
  if (!f) return null;
  let ee =
      (f.type === 1 && !p?.is_coming_soon) ||
      (f.related_items?.demo_appid && f.related_items?.demo_appid.length > 0),
    te = j(f.type),
    ne = n && te && ee,
    x = null;
  if (!g && m?.is_free_to_keep && m?.free_to_keep_ends) {
    let e = m.free_to_keep_ends,
      t = L(
        `#Sale_default_label_Free_Promo_Description_Short`,
        Fe(e) + ` @ ` + U(e, { bForce24HourClock: !1 }),
      );
    x = (0, J.jsxs)(`div`, {
      className: o,
      children: [
        t,
        (0, J.jsx)(Re, {
          tooltip: L(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, J.jsxs)(`div`, {
    className: W(h, l),
    children: [
      x,
      (0, J.jsxs)(`div`, {
        className: re,
        children: [
          !!ne && (0, J.jsx)(A, { id: t, className: `R0sGSaFdUWo-` }),
          !a &&
            f.type !== 1 &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                !(!r || f.is_free) &&
                  (0, J.jsx)($, { fnOnPurchaseOptionsClick: i }),
                !(!d || f.is_free) &&
                  (0, J.jsx)(v, { id: t, className: `CartBtn` }),
              ],
            }),
          !a && (0, J.jsx)(u, { id: t }),
          _ && (0, J.jsx)(b, { id: t, compatibility: y }),
        ],
      }),
    ],
  });
}
function $(e) {
  return (0, J.jsx)(`div`, {
    className: m,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, J.jsx)(`span`, {
      children: L(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Ue(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: a,
      bHidePrice: o,
      bUseSubscriptionLayout: s,
      bHidePlatforms: c,
      bHideContainedApps: d,
      bAllowTwoLinesForHeader: m,
      bShowReviewSummary: _,
      bShowDeckCompatibilityDialog: v,
      eHardwareCompatibilityDisplay: y,
      bAutoFocus: b,
      fnOnClickOverride: S,
      bIsMarketingMessage: C,
      bPreferAssetWithoutOverride: w,
    } = e,
    T = Ce(t, n),
    [E, D] = (0, K.useState)(!1),
    he = De(),
    { data: O, isPending: A } = G(T),
    { data: j } = R(T),
    { data: P } = B(T),
    { data: F } = k(),
    I = l(T),
    L = (0, K.useRef)(null),
    [z, Oe] = (0, K.useState)(!1),
    V = ke(),
    [H, Fe] = (0, K.useState)(!1);
  ((0, K.useEffect)(() => {
    if (!H) {
      D(!1);
      return;
    }
    let e = window.setTimeout(() => D(!0), 500);
    return () => window.clearTimeout(e);
  }, [H]),
    (0, K.useEffect)(() => {
      L.current && Oe(L.current.offsetWidth < 370);
    }, [L]));
  let Ie = (0, K.useMemo)(
      () => (a && O && ve(O) ? { appid: _e(O)[0] } : T),
      [a, T, O],
    ),
    { strStoreURL: U, snr: Le } = ue(O, a),
    Re = Te(C ? void 0 : T);
  if (!O)
    return A
      ? (0, J.jsx)(we, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let q = O.included_appids?.length || 0,
    ze = O.included_appids?.filter((e) => F?.has(e))?.length || 0,
    Be = O.item_type == 2 && !!j?.must_purchase_as_set,
    Y = !d && q > 1,
    X = O.item_type == 1 && q == 1,
    Z = O.item_type == 0 || X,
    $ = X && O.appid,
    Ue = O.name || ``,
    qe = ee(P, j),
    Je = V || !P?.is_coming_soon || qe,
    [Ye, Xe] = ie(v, y);
  return (0, J.jsxs)(Pe, {
    className: W({ [fe]: !0, [void 0]: m, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: Ae.PREFERRED_CHILD,
    autoFocus: b,
    navKey: `preview_widget_` + N(T),
    ...Re,
    children: [
      (0, J.jsx)(te, {
        appid: Z && `appid` in T ? T.appid : void 0,
        children: (0, J.jsxs)(je, {
          onClick: C ? S : void 0,
          className: W({ [x]: !0, [le]: !0, [ge]: C }),
          ...Ee(O, he, V, !!a, void 0, S),
          preferredFocus: Y,
          onFocusWithin: V ? Fe : void 0,
          children: [
            (0, J.jsx)(`div`, {
              className: W(g),
              children: (0, J.jsx)(We, {
                id: Ie,
                strURL: U,
                children: (0, J.jsxs)(`div`, {
                  className: i,
                  children: [
                    (0, J.jsx)(be, { appids: I }),
                    (0, J.jsx)(M, {
                      id: T,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: w,
                    }),
                    (0, J.jsx)(ye, { id: T }),
                    (0, J.jsx)(Se, {
                      id: T,
                      active: T && E,
                      bIsHoverMode: !0,
                      eGrowOnActivate: V
                        ? void 0
                        : xe.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, J.jsxs)(`div`, {
              className: W({ [ce]: !0, [f]: Y }),
              children: [
                !(!Z || S) &&
                  (0, J.jsx)(se, {
                    id: T,
                    classOverride: W(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: Le,
                  }),
                (0, J.jsx)(`div`, {
                  className: de,
                  children: (0, J.jsx)(`a`, {
                    href: S ? void 0 : U,
                    target: Me.IN_CLIENT ? void 0 : `_blank`,
                    onClick: S,
                    children: (0, J.jsx)(`div`, {
                      className: W(me, `StoreSaleWidgetTitle`),
                      children: Ue,
                    }),
                  }),
                }),
                !Y && (0, J.jsx)(He, { id: T }),
                (0, J.jsxs)(`div`, {
                  className: oe,
                  ref: L,
                  children: [
                    Z && (0, J.jsx)(Ge, { id: T }),
                    !Y &&
                      !c &&
                      T &&
                      (0, J.jsxs)(J.Fragment, {
                        children: [
                          (0, J.jsx)(ne, {
                            id: T,
                            bMinimizePlatforms: z,
                            bHideWindows: z,
                          }),
                          !!(Ye && O.item_type == 0) &&
                            (0, J.jsx)(Ne, {
                              eHWCompat: Xe,
                              className: `tUIs-i3NWoU-`,
                              id: T,
                            }),
                        ],
                      }),
                  ],
                }),
                !Y &&
                  _ &&
                  T &&
                  (0, J.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, J.jsx)(ae, { id: T }),
                  }),
                Y &&
                  T &&
                  (0, J.jsx)(Ve, {
                    id: T,
                    bHideInLibraryApps: !Be && O.item_type == 2 && ze < q,
                  }),
                !!Z && (0, J.jsx)(Ke, { id: T }),
                S
                  ? (0, J.jsx)(`div`, {
                      className: h,
                      children: (0, J.jsx)(`div`, {
                        className: re,
                        children: (0, J.jsx)(u, { id: T }),
                      }),
                    })
                  : (0, J.jsx)(J.Fragment, {
                      children:
                        s && Z && $
                          ? (0, J.jsx)(p, { appid: $, bIsMuted: !!E })
                          : (0, J.jsx)(Q, {
                              id: T,
                              bShowDemoButton: r,
                              bHidePrice: o,
                              bHideWishlistButton: Je,
                              eHardwareCompatibilityDisplay: Xe,
                            }),
                    }),
                (0, J.jsx)(`div`, {
                  className: pe,
                  children: (0, J.jsx)(M, {
                    id: T,
                    bPreferAssetWithoutOverride: w,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(e.strReason && e.strReason.length > 0) &&
        (0, J.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function We(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, J.jsxs)(d, { id: t, children: [r, ` `] })
    : (0, J.jsx)(`a`, { href: n, children: r });
}
function Ge(e) {
  let { id: t } = e,
    { data: n } = B(t);
  return n ? (0, J.jsx)(`div`, { className: D, children: c(n) }) : null;
}
function Ke(e) {
  let { id: t } = e,
    { data: n } = G(t),
    { data: r } = R(t),
    { data: i } = H(t),
    { data: a } = k();
  if (!n || !i || !i.short_description || !a) return null;
  let o = r?.discount_pct || 0,
    s = n.included_appids?.length || 0,
    c = n.included_appids?.filter((e) => a?.has(e))?.length || 0,
    l = i.short_description,
    u = n.item_type == 1 && s == 1,
    d = n.item_type == 2 && !!r?.must_purchase_as_set;
  return (
    (n.item_type == 2 || (n.item_type == 1 && !u)) &&
      (l =
        !d && c > 0 && c < s
          ? L(`#Sale_Bundle_CompletePartialSet`, c, s)
          : o > 0
            ? L(`#Sale_BundleSave_WithDiscount`, o, s)
            : L(`#Sale_BundleSave`, s)),
    (0, J.jsx)(`div`, {
      className: W(C, `StoreSaleWidgetShortDesc`),
      children:
        l.startsWith(`#`) && l.indexOf(` `) == -1
          ? (0, J.jsx)(`span`, {
              className: S,
              children: V(
                l,
                (0, J.jsx)(`i`, {}),
                (0, J.jsx)(`i`, {}),
                (0, J.jsx)(`i`, {}),
                (0, J.jsx)(`i`, {}),
              ),
            })
          : l,
    })
  );
}
export { q as i, Q as n, ze as r, Ue as t };
