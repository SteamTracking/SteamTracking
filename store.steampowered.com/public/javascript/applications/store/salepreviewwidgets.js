/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, dt as n, ft as r } from "./chunk~01cfc309bf.js";
import {
  $n as i,
  As as a,
  Da as o,
  Dn as s,
  Do as c,
  Ea as l,
  Fa as u,
  Fn as d,
  Fo as f,
  Fs as p,
  Ia as m,
  Io as h,
  Ja as g,
  Ka as ee,
  Lo as _,
  On as v,
  Po as y,
  Ra as b,
  Rn as x,
  Va as S,
  Vn as te,
  Vo as ne,
  Wo as C,
  Xn as re,
  _s as ie,
  as as ae,
  cs as oe,
  er as se,
  es as w,
  fs as ce,
  gs as T,
  hs as E,
  ko as le,
  ks as D,
  lo as O,
  ls as ue,
  ms as de,
  ps as fe,
  qn as pe,
  rs as me,
  sr as k,
  t as he,
  tr as ge,
  xs as _e,
  ys as ve,
} from "./chunk~6b8ddcaac8.js";
import { n as A } from "./chunk~751f63337e.js";
import { i as ye, r as be } from "./chunk~4c13037b22.js";
import { d as xe, p as j, r as Se } from "./chunk~cbbb6ae37c.js";
import { h as Ce, m as we } from "./chunk~4eed35ad1f.js";
import { t as Te } from "./chunk~b980924b6a.js";
import { n as Ee, t as De } from "./chunk~56437c278a.js";
import {
  $b as Oe,
  Bc as ke,
  Bv as M,
  Cb as N,
  El as Ae,
  Fb as P,
  Fc as F,
  Jv as I,
  Nc as L,
  Or as R,
  Pv as z,
  Uv as B,
  Vv as V,
  Xv as H,
  Yv as U,
  _l as je,
  _x as Me,
  cy as Ne,
  dn as Pe,
  ib as Fe,
  ny as Ie,
  rb as W,
  td as Le,
  yb as Re,
  yv as ze,
} from "./main.js";
var G = e(t(), 1),
  K = `x33TRfA9NLE-`,
  Be = `UWpi28gEMso-`,
  q = r(),
  Ve = 6;
function He(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = B(t),
    i = r?.item_type == 2,
    { data: o } = a(),
    s = G.useMemo(() => {
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
    l = P.LocalizePlural(`#Sale_ContentPreview`, c);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != c && (l = P.Localize(`#Sale_Bundle_CompletePartialSet`, e - c, e));
  }
  return (0, q.jsxs)(`div`, {
    className: g,
    children: [
      (0, q.jsxs)(`div`, {
        className: O,
        children: [
          i &&
            (0, q.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: P.Localize(`#AppType_bundle`),
            }),
          l,
        ],
      }),
      (0, q.jsx)(`div`, {
        className: y,
        children: s
          .slice(0, Ve)
          .map((e) => (0, q.jsx)(J, { id: e }, `preview${Ne(e)}`)),
      }),
    ],
  });
}
function J(e) {
  let { id: t } = e,
    { data: n } = U(t),
    { data: r } = I(t);
  if (!n || !r) return null;
  let a = F(n, `small_capsule`);
  return (0, q.jsx)(i, {
    id: t,
    className: h,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, q.jsx)(`img`, {
      src: a,
      className: f,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
function Y(e) {
  let [t, r] = (0, G.useState)(void 0),
    { data: i } = B(e),
    { data: a } = Ie(e),
    o = n(),
    s = ze();
  return (
    (0, G.useEffect)(() => {
      if (i) {
        if (a && a.length > 0) r(a);
        else if (i.related_items?.parent_appid) {
          let e = { appid: i.related_items?.parent_appid };
          (async () => {
            let t = await o.fetchQuery(z(s, e));
            t && t.length > 0 && r(t);
          })();
        }
      }
    }, [s, o, i, a]),
    t
  );
}
function Ue(e) {
  let { id: t } = e;
  return t ? (0, q.jsx)(X, { id: t }) : null;
}
function X(e) {
  let { id: t } = e,
    n = Y(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: T,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, q.jsx)(he, { tagid: e.tagid, className: S }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function Z(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: i,
      bHidePrice: a,
      bShowDeckCompatibilityDialog: o,
      eHardwareCompatibilityDisplay: c,
      className: l,
      bShowCartButton: u,
    } = e,
    { data: d } = B(t),
    { data: f } = H(t),
    { data: p } = V(t),
    { bIsOwned: m } = D(t),
    [h, g] = ge(o, c);
  if (!d) return null;
  let ee =
      (d.type === 1 && !f?.is_coming_soon) ||
      (d.related_items?.demo_appid && d.related_items?.demo_appid.length > 0),
    y = A(d.type),
    b = n && y && ee,
    x = null;
  if (!m && p?.is_free_to_keep && p?.free_to_keep_ends) {
    let e = p.free_to_keep_ends,
      t = W(
        `#Sale_default_label_Free_Promo_Description_Short`,
        N(e) + ` @ ` + Re(e, { bForce24HourClock: !1 }),
      );
    x = (0, q.jsxs)(`div`, {
      className: _,
      children: [
        t,
        (0, q.jsx)(R, {
          tooltip: W(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, q.jsxs)(`div`, {
    className: L(C, l),
    children: [
      x,
      (0, q.jsxs)(`div`, {
        className: w,
        children: [
          !!b && (0, q.jsx)(s, { id: t, className: `R0sGSaFdUWo-` }),
          !a &&
            d.type !== 1 &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                !(!r || d.is_free) &&
                  (0, q.jsx)(Q, { fnOnPurchaseOptionsClick: i }),
                !(!u || d.is_free) &&
                  (0, q.jsx)(v, { id: t, className: `CartBtn` }),
              ],
            }),
          !a && (0, q.jsx)(te, { id: t }),
          h && (0, q.jsx)(k, { id: t, compatibility: g }),
        ],
      }),
    ],
  });
}
function Q(e) {
  return (0, q.jsx)(`div`, {
    className: b,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, q.jsx)(`span`, {
      children: W(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function We(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: i,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      bHidePlatforms: f,
      bHideContainedApps: m,
      bAllowTwoLinesForHeader: h,
      bShowReviewSummary: g,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: v,
      bAutoFocus: y,
      fnOnClickOverride: b,
      bIsMarketingMessage: S,
      bPreferAssetWithoutOverride: T,
    } = e,
    E = re(t, n),
    [D, O] = (0, G.useState)(!1),
    fe = Le(),
    { data: k, isPending: he } = I(E),
    { data: A } = V(E),
    { data: M } = H(E),
    { data: N } = a(),
    P = p(E),
    F = (0, G.useRef)(null),
    [R, z] = (0, G.useState)(!1),
    B = Oe(),
    [U, Fe] = (0, G.useState)(!1);
  ((0, G.useEffect)(() => {
    if (!U) {
      O(!1);
      return;
    }
    let e = window.setTimeout(() => O(!0), 500);
    return () => window.clearTimeout(e);
  }, [U]),
    (0, G.useEffect)(() => {
      F.current && z(F.current.offsetWidth < 370);
    }, [F]));
  let Ie = (0, G.useMemo)(
      () => (i && k && be(k) ? { appid: ye(k)[0] } : E),
      [i, E, k],
    ),
    { strStoreURL: W, snr: Re } = d(k, i),
    ze = Ee(S ? void 0 : E);
  if (!k)
    return he
      ? (0, q.jsx)(Te, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let K = k.included_appids?.length || 0,
    Be = k.included_appids?.filter((e) => N?.has(e))?.length || 0,
    Ve = k.item_type == 2 && !!A?.must_purchase_as_set,
    J = !m && K > 1,
    Y = k.item_type == 1 && K == 1,
    X = k.item_type == 0 || Y,
    Q = Y && k.appid,
    We = k.name || ``,
    Je = u(M, A),
    Ye = B || !M?.is_coming_soon || Je,
    [Xe, $] = ge(_, v);
  return (0, q.jsxs)(ke, {
    className: L({ [ce]: !0, [void 0]: h, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: Ae.PREFERRED_CHILD,
    autoFocus: y,
    navKey: `preview_widget_` + Ne(E),
    ...ze,
    children: [
      (0, q.jsx)(se, {
        appid: X && `appid` in E ? E.appid : void 0,
        children: (0, q.jsxs)(je, {
          onClick: S ? b : void 0,
          className: L({ [ae]: !0, [ne]: !0, [le]: S }),
          ...De(k, fe, B, !!i, void 0, b),
          preferredFocus: J,
          onFocusWithin: B ? Fe : void 0,
          children: [
            (0, q.jsx)(`div`, {
              className: L(oe),
              children: (0, q.jsx)(Ge, {
                id: Ie,
                strURL: W,
                children: (0, q.jsxs)(`div`, {
                  className: ue,
                  children: [
                    (0, q.jsx)(Se, { appids: P }),
                    (0, q.jsx)(j, {
                      id: E,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: T,
                    }),
                    (0, q.jsx)(xe, { id: E }),
                    (0, q.jsx)(we, {
                      id: E,
                      active: E && D,
                      bIsHoverMode: !0,
                      eGrowOnActivate: B
                        ? void 0
                        : Ce.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: L({ [de]: !0, [ee]: J }),
              children: [
                !(!X || b) &&
                  (0, q.jsx)(l, {
                    id: E,
                    classOverride: L(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: Re,
                  }),
                (0, q.jsx)(`div`, {
                  className: ve,
                  children: (0, q.jsx)(`a`, {
                    href: b ? void 0 : W,
                    target: Me.IN_CLIENT ? void 0 : `_blank`,
                    onClick: b,
                    children: (0, q.jsx)(`div`, {
                      className: L(ie, `StoreSaleWidgetTitle`),
                      children: We,
                    }),
                  }),
                }),
                !J && (0, q.jsx)(Ue, { id: E }),
                (0, q.jsxs)(`div`, {
                  className: _e,
                  ref: F,
                  children: [
                    X && (0, q.jsx)(Ke, { id: E }),
                    !J &&
                      !f &&
                      E &&
                      (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(pe, {
                            id: E,
                            bMinimizePlatforms: R,
                            bHideWindows: R,
                          }),
                          !!(Xe && k.item_type == 0) &&
                            (0, q.jsx)(Pe, {
                              eHWCompat: $,
                              className: `tUIs-i3NWoU-`,
                              id: E,
                            }),
                        ],
                      }),
                  ],
                }),
                !J &&
                  g &&
                  E &&
                  (0, q.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, q.jsx)(o, { id: E }),
                  }),
                J &&
                  E &&
                  (0, q.jsx)(He, {
                    id: E,
                    bHideInLibraryApps: !Ve && k.item_type == 2 && Be < K,
                  }),
                !!X && (0, q.jsx)(qe, { id: E }),
                b
                  ? (0, q.jsx)(`div`, {
                      className: C,
                      children: (0, q.jsx)(`div`, {
                        className: w,
                        children: (0, q.jsx)(te, { id: E }),
                      }),
                    })
                  : (0, q.jsx)(q.Fragment, {
                      children:
                        c && X && Q
                          ? (0, q.jsx)(x, { appid: Q, bIsMuted: !!D })
                          : (0, q.jsx)(Z, {
                              id: E,
                              bShowDemoButton: r,
                              bHidePrice: s,
                              bHideWishlistButton: Ye,
                              eHardwareCompatibilityDisplay: $,
                            }),
                    }),
                (0, q.jsx)(`div`, {
                  className: me,
                  children: (0, q.jsx)(j, {
                    id: E,
                    bPreferAssetWithoutOverride: T,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(e.strReason && e.strReason.length > 0) &&
        (0, q.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function Ge(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, q.jsxs)(i, { id: t, children: [r, ` `] })
    : (0, q.jsx)(`a`, { href: n, children: r });
}
function Ke(e) {
  let { id: t } = e,
    { data: n } = H(t);
  return n ? (0, q.jsx)(`div`, { className: fe, children: m(n) }) : null;
}
function qe(e) {
  let { id: t } = e,
    { data: n } = I(t),
    { data: r } = V(t),
    { data: i } = M(t),
    { data: o } = a();
  if (!n || !i || !i.short_description || !o) return null;
  let s = r?.discount_pct || 0,
    l = n.included_appids?.length || 0,
    u = n.included_appids?.filter((e) => o?.has(e))?.length || 0,
    d = i.short_description,
    f = n.item_type == 1 && l == 1,
    p = n.item_type == 2 && !!r?.must_purchase_as_set;
  return (
    (n.item_type == 2 || (n.item_type == 1 && !f)) &&
      (d =
        !p && u > 0 && u < l
          ? W(`#Sale_Bundle_CompletePartialSet`, u, l)
          : s > 0
            ? W(`#Sale_BundleSave_WithDiscount`, s, l)
            : W(`#Sale_BundleSave`, l)),
    (0, q.jsx)(`div`, {
      className: L(E, `StoreSaleWidgetShortDesc`),
      children:
        d.startsWith(`#`) && d.indexOf(` `) == -1
          ? (0, q.jsx)(`span`, {
              className: c,
              children: Fe(
                d,
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
              ),
            })
          : d,
    })
  );
}
export { K as i, Z as n, Be as r, We as t };
