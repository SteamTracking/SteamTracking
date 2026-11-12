/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, dt as n, ft as r } from "./chunk~01cfc309bf.js";
import {
  Aa as i,
  Ai as a,
  Bt as o,
  Ca as s,
  Di as c,
  Ea as l,
  Fi as u,
  Ht as d,
  Ja as ee,
  Ka as f,
  Li as p,
  Na as te,
  Ot as ne,
  Pt as m,
  Qa as re,
  Qi as h,
  Ta as g,
  Ti as _,
  To as v,
  Ua as y,
  Ut as b,
  Vt as x,
  Yt as ie,
  Za as ae,
  ao as S,
  bo as C,
  bt as w,
  co as oe,
  ga as T,
  io as E,
  jt as se,
  mi as ce,
  no as D,
  oo as le,
  ro as ue,
  t as O,
  to as de,
  uo as fe,
  va as pe,
  wa as me,
  wi as he,
  xt as k,
  yi as ge,
  yo as _e,
} from "./chunk~6b8ddcaac8.js";
import { n as A } from "./chunk~751f63337e.js";
import { i as ve, r as ye } from "./chunk~4c13037b22.js";
import {
  g as be,
  i as xe,
  p as Se,
  r as Ce,
  v as j,
} from "./chunk~cbbb6ae37c.js";
import { n as we, t as Te } from "./chunk~cd94ddba57.js";
import { t as Ee } from "./chunk~b980924b6a.js";
import {
  $v as M,
  Bv as N,
  Eb as P,
  Ec as F,
  Jy as I,
  Ku as De,
  Mv as L,
  Pv as R,
  Tv as z,
  Vv as B,
  Wb as Oe,
  Yy as V,
  _l as ke,
  cl as Ae,
  cx as je,
  in as Me,
  jc as Ne,
  jv as H,
  mb as Pe,
  qv as Fe,
  ub as U,
  uv as Ie,
  wc as W,
  xr as G,
  zv as K,
} from "./main.js";
var q = e(t(), 1),
  Le = `x33TRfA9NLE-`,
  Re = `UWpi28gEMso-`,
  J = r(),
  Y = 6;
function ze(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = R(t),
    i = r?.item_type == 2,
    { data: a } = C(),
    o = q.useMemo(() => {
      if (r)
        return r.item_type === 1 || r.item_type === 2
          ? (r.included_appids || [])
              .filter((e) => !i || !n || !a?.has(e))
              .map((e) => ({ appid: e }))
          : (console.error(
              `ContentsPreviewList unexpected store item type:`,
              r.item_type,
            ),
            null);
    }, [r, n, i, a]);
  if (!o || o.length == 0) return null;
  let c = o.length,
    l = P.LocalizePlural(`#Sale_ContentPreview`, c);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != c && (l = P.Localize(`#Sale_Bundle_CompletePartialSet`, e - c, e));
  }
  return (0, J.jsxs)(`div`, {
    className: p,
    children: [
      (0, J.jsxs)(`div`, {
        className: h,
        children: [
          i &&
            (0, J.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: P.Localize(`#AppType_bundle`),
            }),
          l,
        ],
      }),
      (0, J.jsx)(`div`, {
        className: s,
        children: o
          .slice(0, Y)
          .map((e) => (0, J.jsx)(X, { id: e }, `preview${M(e)}`)),
      }),
    ],
  });
}
function X(e) {
  let { id: t } = e,
    { data: n } = N(t),
    { data: r } = K(t);
  if (!n || !r) return null;
  let i = F(n, `small_capsule`);
  return (0, J.jsx)(x, {
    id: t,
    className: g,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, J.jsx)(`img`, {
      src: i,
      className: me,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
function Z(e) {
  let [t, r] = (0, q.useState)(void 0),
    { data: i } = R(e),
    { data: a } = Fe(e),
    o = n(),
    s = Ie();
  return (
    (0, q.useEffect)(() => {
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
function Be(e) {
  let { id: t } = e;
  return t ? (0, J.jsx)(Q, { id: t }) : null;
}
function Q(e) {
  let { id: t } = e,
    n = Z(t);
  return n
    ? (0, J.jsx)(`div`, {
        className: S,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, J.jsx)(O, { tagid: e.tagid, className: a }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function Ve(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: i,
      bHidePrice: a,
      bShowDeckCompatibilityDialog: o,
      eHardwareCompatibilityDisplay: s,
      className: c,
      bShowCartButton: u,
    } = e,
    { data: d } = R(t),
    { data: ee } = B(t),
    { data: f } = L(t),
    { bIsOwned: p } = _e(t),
    [ne, re] = b(o, s);
  if (!d) return null;
  let h =
      (d.type === 1 && !ee?.is_coming_soon) ||
      (d.related_items?.demo_appid && d.related_items?.demo_appid.length > 0),
    g = A(d.type),
    _ = n && g && h,
    v = null;
  if (!p && f?.is_free_to_keep && f?.free_to_keep_ends) {
    let e = f.free_to_keep_ends,
      t = I(
        `#Sale_default_label_Free_Promo_Description_Short`,
        Pe(e) + ` @ ` + U(e, { bForce24HourClock: !1 }),
      );
    v = (0, J.jsxs)(`div`, {
      className: l,
      children: [
        t,
        (0, J.jsx)(G, {
          tooltip: I(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, J.jsxs)(`div`, {
    className: W(te, c),
    children: [
      v,
      (0, J.jsxs)(`div`, {
        className: y,
        children: [
          !!_ && (0, J.jsx)(w, { id: t, className: `R0sGSaFdUWo-` }),
          !a &&
            d.type !== 1 &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                !(!r || d.is_free) &&
                  (0, J.jsx)(He, { fnOnPurchaseOptionsClick: i }),
                !(!u || d.is_free) &&
                  (0, J.jsx)(k, { id: t, className: `CartBtn` }),
              ],
            }),
          !a && (0, J.jsx)(m, { id: t }),
          ne && (0, J.jsx)(ie, { id: t, compatibility: re }),
        ],
      }),
    ],
  });
}
function He(e) {
  return (0, J.jsx)(`div`, {
    className: c,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, J.jsx)(`span`, {
      children: I(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Ue(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: a,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      bHidePlatforms: l,
      bHideContainedApps: p,
      bAllowTwoLinesForHeader: h,
      bShowReviewSummary: g,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: x,
      bAutoFocus: ie,
      fnOnClickOverride: S,
      bIsMarketingMessage: w,
      bPreferAssetWithoutOverride: T,
    } = e,
    E = Se(t, n),
    [D, O] = (0, q.useState)(!1),
    me = De(),
    { data: k, isPending: _e } = K(E),
    { data: A } = L(E),
    { data: N } = B(E),
    { data: P } = C(),
    F = v(E),
    I = (0, q.useRef)(null),
    [R, z] = (0, q.useState)(!1),
    V = Oe(),
    [H, Pe] = (0, q.useState)(!1);
  ((0, q.useEffect)(() => {
    if (!H) {
      O(!1);
      return;
    }
    let e = window.setTimeout(() => O(!0), 500);
    return () => window.clearTimeout(e);
  }, [H]),
    (0, q.useEffect)(() => {
      I.current && z(I.current.offsetWidth < 370);
    }, [I]));
  let Fe = (0, q.useMemo)(
      () => (a && k && ye(k) ? { appid: ve(k)[0] } : E),
      [a, E, k],
    ),
    { strStoreURL: U, snr: Ie } = ne(k, a);
  if (!k)
    return _e
      ? (0, J.jsx)(Ee, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let G = k.included_appids?.length || 0,
    Le = k.included_appids?.filter((e) => P?.has(e))?.length || 0,
    Re = k.item_type == 2 && !!A?.must_purchase_as_set,
    Y = !p && G > 1,
    X = k.item_type == 1 && G == 1,
    Z = k.item_type == 0 || X,
    Q = X && k.appid,
    He = k.name || ``,
    Ue = he(N, A),
    qe = V || !N?.is_coming_soon || Ue,
    [Je, $] = b(_, x);
  return (0, J.jsxs)(Ne, {
    className: W({ [de]: !0, [void 0]: h, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: ke.PREFERRED_CHILD,
    autoFocus: ie,
    navKey: `preview_widget_` + M(E),
    children: [
      (0, J.jsx)(d, {
        appid: Z && `appid` in E ? E.appid : void 0,
        children: (0, J.jsxs)(Ae, {
          onClick: w ? S : void 0,
          className: W({ [ee]: !0, [i]: !0, [pe]: w }),
          ...Ce(k, me, V, !!a, void 0, S),
          preferredFocus: Y,
          onFocusWithin: V ? Pe : void 0,
          children: [
            (0, J.jsx)(`div`, {
              className: W(ae),
              children: (0, J.jsx)(We, {
                id: Fe,
                strURL: U,
                children: (0, J.jsxs)(`div`, {
                  className: re,
                  children: [
                    (0, J.jsx)(xe, { appids: F }),
                    (0, J.jsx)(j, {
                      id: E,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: T,
                    }),
                    (0, J.jsx)(be, { id: E }),
                    (0, J.jsx)(Te, {
                      id: E,
                      active: E && D,
                      bIsHoverMode: !0,
                      eGrowOnActivate: V
                        ? void 0
                        : we.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, J.jsxs)(`div`, {
              className: W({ [ue]: !0, [u]: Y }),
              children: [
                !(!Z || S) &&
                  (0, J.jsx)(ce, {
                    id: E,
                    classOverride: W(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: Ie,
                  }),
                (0, J.jsx)(`div`, {
                  className: oe,
                  children: (0, J.jsx)(`a`, {
                    href: S ? void 0 : U,
                    target: je.IN_CLIENT ? void 0 : `_blank`,
                    onClick: S,
                    children: (0, J.jsx)(`div`, {
                      className: W(le, `StoreSaleWidgetTitle`),
                      children: He,
                    }),
                  }),
                }),
                !Y && (0, J.jsx)(Be, { id: E }),
                (0, J.jsxs)(`div`, {
                  className: fe,
                  ref: I,
                  children: [
                    Z && (0, J.jsx)(Ge, { id: E }),
                    !Y &&
                      !l &&
                      E &&
                      (0, J.jsxs)(J.Fragment, {
                        children: [
                          (0, J.jsx)(o, {
                            id: E,
                            bMinimizePlatforms: R,
                            bHideWindows: R,
                          }),
                          !!(Je && k.item_type == 0) &&
                            (0, J.jsx)(Me, {
                              eHWCompat: $,
                              className: `tUIs-i3NWoU-`,
                              id: E,
                            }),
                        ],
                      }),
                  ],
                }),
                !Y &&
                  g &&
                  E &&
                  (0, J.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, J.jsx)(ge, { id: E }),
                  }),
                Y &&
                  E &&
                  (0, J.jsx)(ze, {
                    id: E,
                    bHideInLibraryApps: !Re && k.item_type == 2 && Le < G,
                  }),
                !!Z && (0, J.jsx)(Ke, { id: E }),
                S
                  ? (0, J.jsx)(`div`, {
                      className: te,
                      children: (0, J.jsx)(`div`, {
                        className: y,
                        children: (0, J.jsx)(m, { id: E }),
                      }),
                    })
                  : (0, J.jsx)(J.Fragment, {
                      children:
                        c && Z && Q
                          ? (0, J.jsx)(se, { appid: Q, bIsMuted: !!D })
                          : (0, J.jsx)(Ve, {
                              id: E,
                              bShowDemoButton: r,
                              bHidePrice: s,
                              bHideWishlistButton: qe,
                              eHardwareCompatibilityDisplay: $,
                            }),
                    }),
                (0, J.jsx)(`div`, {
                  className: f,
                  children: (0, J.jsx)(j, {
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
        (0, J.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function We(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, J.jsxs)(x, { id: t, children: [r, ` `] })
    : (0, J.jsx)(`a`, { href: n, children: r });
}
function Ge(e) {
  let { id: t } = e,
    { data: n } = B(t);
  return n ? (0, J.jsx)(`div`, { className: D, children: _(n) }) : null;
}
function Ke(e) {
  let { id: t } = e,
    { data: n } = K(t),
    { data: r } = L(t),
    { data: i } = H(t),
    { data: a } = C();
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
          ? I(`#Sale_Bundle_CompletePartialSet`, c, s)
          : o > 0
            ? I(`#Sale_BundleSave_WithDiscount`, o, s)
            : I(`#Sale_BundleSave`, s)),
    (0, J.jsx)(`div`, {
      className: W(E, `StoreSaleWidgetShortDesc`),
      children:
        l.startsWith(`#`) && l.indexOf(` `) == -1
          ? (0, J.jsx)(`span`, {
              className: T,
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
export { Le as i, Ve as n, Re as r, Ue as t };
