/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, dt as n, ft as r } from "./chunk~01cfc309bf.js";
import {
  $a as i,
  An as a,
  Ba as o,
  Bn as s,
  Bo as c,
  Bs as l,
  Es as u,
  Fs as d,
  Ho as f,
  Ka as p,
  Ko as m,
  Ln as ee,
  Ma as te,
  Mo as h,
  Oa as ne,
  Po as re,
  Ps as ie,
  Qn as ae,
  Ss as g,
  Ua as _,
  Un as v,
  Va as y,
  Vo as b,
  Yn as oe,
  Yo as x,
  Za as se,
  _s as ce,
  as as le,
  bs as S,
  cs as ue,
  kn as C,
  lr as w,
  mo as T,
  ms as de,
  nr as fe,
  ps as pe,
  rr as me,
  t as E,
  tr as D,
  us as he,
  vs as ge,
  ws as _e,
  xs as O,
  ys as ve,
  zo as k,
} from "./chunk~6b8ddcaac8.js";
import { n as A } from "./chunk~751f63337e.js";
import { i as ye, r as be } from "./chunk~4c13037b22.js";
import { d as xe, p as j, r as Se } from "./chunk~cbbb6ae37c.js";
import { f as Ce, p as we } from "./chunk~ffe4581a06.js";
import { t as Te } from "./chunk~b980924b6a.js";
import { n as Ee, t as De } from "./chunk~56437c278a.js";
import {
  $v as M,
  Bv as N,
  Eb as P,
  Ec as F,
  Jy as I,
  Ku as Oe,
  Mv as L,
  Pv as R,
  Tv as ke,
  Vv as z,
  Wb as Ae,
  Yy as B,
  _l as je,
  cl as Me,
  cx as Ne,
  in as Pe,
  jc as Fe,
  jv as V,
  mb as Ie,
  qv as Le,
  ub as H,
  uv as Re,
  wc as U,
  xr as ze,
  zv as W,
} from "./main.js";
var G = e(t(), 1),
  K = `x33TRfA9NLE-`,
  Be = `UWpi28gEMso-`,
  q = r(),
  Ve = 6;
function He(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = R(t),
    a = r?.item_type == 2,
    { data: o } = d(),
    s = G.useMemo(() => {
      if (r)
        return r.item_type === 1 || r.item_type === 2
          ? (r.included_appids || [])
              .filter((e) => !a || !n || !o?.has(e))
              .map((e) => ({ appid: e }))
          : (console.error(
              `ContentsPreviewList unexpected store item type:`,
              r.item_type,
            ),
            null);
    }, [r, n, a, o]);
  if (!s || s.length == 0) return null;
  let c = s.length,
    l = P.LocalizePlural(`#Sale_ContentPreview`, c);
  if (a && r) {
    let e = r.included_appids?.length || 0;
    e != c && (l = P.Localize(`#Sale_Bundle_CompletePartialSet`, e - c, e));
  }
  return (0, q.jsxs)(`div`, {
    className: i,
    children: [
      (0, q.jsxs)(`div`, {
        className: T,
        children: [
          a &&
            (0, q.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: P.Localize(`#AppType_bundle`),
            }),
          l,
        ],
      }),
      (0, q.jsx)(`div`, {
        className: k,
        children: s
          .slice(0, Ve)
          .map((e) => (0, q.jsx)(J, { id: e }, `preview${M(e)}`)),
      }),
    ],
  });
}
function J(e) {
  let { id: t } = e,
    { data: n } = N(t),
    { data: r } = W(t);
  if (!n || !r) return null;
  let i = F(n, `small_capsule`);
  return (0, q.jsx)(D, {
    id: t,
    className: b,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, q.jsx)(`img`, {
      src: i,
      className: c,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
function Y(e) {
  let [t, r] = (0, G.useState)(void 0),
    { data: i } = R(e),
    { data: a } = Le(e),
    o = n(),
    s = Re();
  return (
    (0, G.useEffect)(() => {
      if (i) {
        if (a && a.length > 0) r(a);
        else if (i.related_items?.parent_appid) {
          let e = { appid: i.related_items?.parent_appid };
          (async () => {
            let t = await o.fetchQuery(ke(s, e));
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
        className: O,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, q.jsx)(E, { tagid: e.tagid, className: p }, `tag_` + e.tagid),
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
      bHidePrice: o,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      className: l,
      bShowCartButton: u,
    } = e,
    { data: d } = R(t),
    { data: p } = z(t),
    { data: m } = L(t),
    { bIsOwned: ee } = ie(t),
    [te, h] = me(s, c);
  if (!d) return null;
  let ne =
      (d.type === 1 && !p?.is_coming_soon) ||
      (d.related_items?.demo_appid && d.related_items?.demo_appid.length > 0),
    re = A(d.type),
    ae = n && re && ne,
    g = null;
  if (!ee && m?.is_free_to_keep && m?.free_to_keep_ends) {
    let e = m.free_to_keep_ends,
      t = I(
        `#Sale_default_label_Free_Promo_Description_Short`,
        Ie(e) + ` @ ` + H(e, { bForce24HourClock: !1 }),
      );
    g = (0, q.jsxs)(`div`, {
      className: f,
      children: [
        t,
        (0, q.jsx)(ze, {
          tooltip: I(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, q.jsxs)(`div`, {
    className: U(x, l),
    children: [
      g,
      (0, q.jsxs)(`div`, {
        className: le,
        children: [
          !!ae && (0, q.jsx)(C, { id: t, className: `R0sGSaFdUWo-` }),
          !o &&
            d.type !== 1 &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                !(!r || d.is_free) &&
                  (0, q.jsx)(Q, { fnOnPurchaseOptionsClick: i }),
                !(!u || d.is_free) &&
                  (0, q.jsx)(a, { id: t, className: `CartBtn` }),
              ],
            }),
          !o && (0, q.jsx)(v, { id: t }),
          te && (0, q.jsx)(w, { id: t, compatibility: h }),
        ],
      }),
    ],
  });
}
function Q(e) {
  return (0, q.jsx)(`div`, {
    className: _,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, q.jsx)(`span`, {
      children: I(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function We(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: i,
      bHidePrice: a,
      bUseSubscriptionLayout: c,
      bHidePlatforms: f,
      bHideContainedApps: p,
      bAllowTwoLinesForHeader: h,
      bShowReviewSummary: ie,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: y,
      bAutoFocus: b,
      fnOnClickOverride: S,
      bIsMarketingMessage: C,
      bPreferAssetWithoutOverride: w,
    } = e,
    T = ae(t, n),
    [E, D] = (0, G.useState)(!1),
    ge = Oe(),
    { data: O, isPending: k } = W(T),
    { data: A } = L(T),
    { data: N } = z(T),
    { data: P } = d(),
    F = l(T),
    I = (0, G.useRef)(null),
    [R, ke] = (0, G.useState)(!1),
    B = Ae(),
    [V, Ie] = (0, G.useState)(!1);
  ((0, G.useEffect)(() => {
    if (!V) {
      D(!1);
      return;
    }
    let e = window.setTimeout(() => D(!0), 500);
    return () => window.clearTimeout(e);
  }, [V]),
    (0, G.useEffect)(() => {
      I.current && ke(I.current.offsetWidth < 370);
    }, [I]));
  let Le = (0, G.useMemo)(
      () => (i && O && be(O) ? { appid: ye(O)[0] } : T),
      [i, T, O],
    ),
    { strStoreURL: H, snr: Re } = ee(O, i),
    ze = Ee(C ? void 0 : T);
  if (!O)
    return k
      ? (0, q.jsx)(Te, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let K = O.included_appids?.length || 0,
    Be = O.included_appids?.filter((e) => P?.has(e))?.length || 0,
    Ve = O.item_type == 2 && !!A?.must_purchase_as_set,
    J = !p && K > 1,
    Y = O.item_type == 1 && K == 1,
    X = O.item_type == 0 || Y,
    Q = Y && O.appid,
    We = O.name || ``,
    Je = o(N, A),
    Ye = B || !N?.is_coming_soon || Je,
    [Xe, $] = me(_, y);
  return (0, q.jsxs)(Fe, {
    className: U({ [ce]: !0, [void 0]: h, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: je.PREFERRED_CHILD,
    autoFocus: b,
    navKey: `preview_widget_` + M(T),
    ...ze,
    children: [
      (0, q.jsx)(fe, {
        appid: X && `appid` in T ? T.appid : void 0,
        children: (0, q.jsxs)(Me, {
          onClick: C ? S : void 0,
          className: U({ [he]: !0, [m]: !0, [re]: C }),
          ...De(O, ge, B, !!i, void 0, S),
          preferredFocus: J,
          onFocusWithin: B ? Ie : void 0,
          children: [
            (0, q.jsx)(`div`, {
              className: U(pe),
              children: (0, q.jsx)(Ge, {
                id: Le,
                strURL: H,
                children: (0, q.jsxs)(`div`, {
                  className: de,
                  children: [
                    (0, q.jsx)(Se, { appids: F }),
                    (0, q.jsx)(j, {
                      id: T,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: w,
                    }),
                    (0, q.jsx)(xe, { id: T }),
                    (0, q.jsx)(Ce, {
                      id: T,
                      active: T && E,
                      bIsHoverMode: !0,
                      eGrowOnActivate: B
                        ? void 0
                        : we.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: U({ [ve]: !0, [se]: J }),
              children: [
                !(!X || S) &&
                  (0, q.jsx)(ne, {
                    id: T,
                    classOverride: U(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: Re,
                  }),
                (0, q.jsx)(`div`, {
                  className: _e,
                  children: (0, q.jsx)(`a`, {
                    href: S ? void 0 : H,
                    target: Ne.IN_CLIENT ? void 0 : `_blank`,
                    onClick: S,
                    children: (0, q.jsx)(`div`, {
                      className: U(g, `StoreSaleWidgetTitle`),
                      children: We,
                    }),
                  }),
                }),
                !J && (0, q.jsx)(Ue, { id: T }),
                (0, q.jsxs)(`div`, {
                  className: u,
                  ref: I,
                  children: [
                    X && (0, q.jsx)(Ke, { id: T }),
                    !J &&
                      !f &&
                      T &&
                      (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(oe, {
                            id: T,
                            bMinimizePlatforms: R,
                            bHideWindows: R,
                          }),
                          !!(Xe && O.item_type == 0) &&
                            (0, q.jsx)(Pe, {
                              eHWCompat: $,
                              className: `tUIs-i3NWoU-`,
                              id: T,
                            }),
                        ],
                      }),
                  ],
                }),
                !J &&
                  ie &&
                  T &&
                  (0, q.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, q.jsx)(te, { id: T }),
                  }),
                J &&
                  T &&
                  (0, q.jsx)(He, {
                    id: T,
                    bHideInLibraryApps: !Ve && O.item_type == 2 && Be < K,
                  }),
                !!X && (0, q.jsx)(qe, { id: T }),
                S
                  ? (0, q.jsx)(`div`, {
                      className: x,
                      children: (0, q.jsx)(`div`, {
                        className: le,
                        children: (0, q.jsx)(v, { id: T }),
                      }),
                    })
                  : (0, q.jsx)(q.Fragment, {
                      children:
                        c && X && Q
                          ? (0, q.jsx)(s, { appid: Q, bIsMuted: !!E })
                          : (0, q.jsx)(Z, {
                              id: T,
                              bShowDemoButton: r,
                              bHidePrice: a,
                              bHideWishlistButton: Ye,
                              eHardwareCompatibilityDisplay: $,
                            }),
                    }),
                (0, q.jsx)(`div`, {
                  className: ue,
                  children: (0, q.jsx)(j, {
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
        (0, q.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function Ge(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, q.jsxs)(D, { id: t, children: [r, ` `] })
    : (0, q.jsx)(`a`, { href: n, children: r });
}
function Ke(e) {
  let { id: t } = e,
    { data: n } = z(t);
  return n ? (0, q.jsx)(`div`, { className: ge, children: y(n) }) : null;
}
function qe(e) {
  let { id: t } = e,
    { data: n } = W(t),
    { data: r } = L(t),
    { data: i } = V(t),
    { data: a } = d();
  if (!n || !i || !i.short_description || !a) return null;
  let o = r?.discount_pct || 0,
    s = n.included_appids?.length || 0,
    c = n.included_appids?.filter((e) => a?.has(e))?.length || 0,
    l = i.short_description,
    u = n.item_type == 1 && s == 1,
    f = n.item_type == 2 && !!r?.must_purchase_as_set;
  return (
    (n.item_type == 2 || (n.item_type == 1 && !u)) &&
      (l =
        !f && c > 0 && c < s
          ? I(`#Sale_Bundle_CompletePartialSet`, c, s)
          : o > 0
            ? I(`#Sale_BundleSave_WithDiscount`, o, s)
            : I(`#Sale_BundleSave`, s)),
    (0, q.jsx)(`div`, {
      className: U(S, `StoreSaleWidgetShortDesc`),
      children:
        l.startsWith(`#`) && l.indexOf(` `) == -1
          ? (0, q.jsx)(`span`, {
              className: h,
              children: B(
                l,
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
              ),
            })
          : l,
    })
  );
}
export { K as i, Z as n, Be as r, We as t };
