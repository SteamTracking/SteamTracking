/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, dt as n, ft as r } from "./libraries.js";
import { n as i } from "./storetypes.js";
import { B as a } from "./storelink.js";
import {
  $ as o,
  Di as s,
  Dr as c,
  F as l,
  Fi as u,
  Fr as d,
  I as f,
  Ii as p,
  Ir as m,
  Jr as h,
  Kr as ee,
  Li as te,
  Ma as g,
  Mr as ne,
  Pi as _,
  Rr as v,
  Sa as y,
  U as b,
  Vi as re,
  Vr as x,
  W as ie,
  Wi as ae,
  _a as oe,
  aa as se,
  ca as ce,
  ct as S,
  ea as C,
  et as w,
  fa as le,
  ga as T,
  ha as ue,
  ja as E,
  ki as de,
  la as fe,
  li as D,
  ma as pe,
  nt as me,
  pa as he,
  q as ge,
  ra as _e,
  t as O,
  tt as ve,
  ya as ye,
} from "./saletags.js";
import { i as be, r as xe } from "./storeurl.js";
import {
  d as Se,
  h as k,
  m as Ce,
  n as we,
  r as Te,
} from "./salestoreitemutils.js";
import { n as Ee, t as De } from "./microtrailerdisplay.js";
import { t as Oe } from "./saleghostsections.js";
import {
  Ac as ke,
  Av as A,
  Bb as Ae,
  Cc as j,
  Dv as M,
  Fv as N,
  Gy as P,
  Hu as je,
  Iv as F,
  Lv as I,
  Ov as L,
  Sb as R,
  Tc as z,
  Uv as B,
  Wy as V,
  Yv as H,
  al as Me,
  ix as Ne,
  ml as Pe,
  ob as U,
  on as Fe,
  ov as W,
  ub as G,
  xv as Ie,
  yr as Le,
} from "./main.js";
var K = e(t(), 1),
  q = `x33TRfA9NLE-`,
  J = `UWpi28gEMso-`,
  Y = r(),
  X = 6;
function Re(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = A(t),
    i = r?.item_type == 2,
    { data: a } = g(),
    o = K.useMemo(() => {
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
  let s = o.length,
    c = R.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = R.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, Y.jsxs)(`div`, {
    className: h,
    children: [
      (0, Y.jsxs)(`div`, {
        className: D,
        children: [
          i &&
            (0, Y.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: R.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: _,
        children: o
          .slice(0, X)
          .map((e) => (0, Y.jsx)(Z, { id: e }, `preview${H(e)}`)),
      }),
    ],
  });
}
function Z(e) {
  let { id: t } = e,
    { data: n } = F(t),
    { data: r } = N(t);
  if (!n || !r) return null;
  let i = z(n, `small_capsule`);
  return (0, Y.jsx)(w, {
    id: t,
    className: p,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, Y.jsx)(`img`, {
      src: i,
      className: u,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
function ze(e) {
  let [t, r] = (0, K.useState)(void 0),
    { data: i } = A(e),
    { data: a } = B(e),
    o = n(),
    s = W();
  return (
    (0, K.useEffect)(() => {
      if (i) {
        if (a && a.length > 0) r(a);
        else if (i.related_items?.parent_appid) {
          let e = { appid: i.related_items?.parent_appid };
          (async () => {
            let t = await o.fetchQuery(Ie(s, e));
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
  return t ? (0, Y.jsx)(Ve, { id: t }) : null;
}
function Ve(e) {
  let { id: t } = e,
    n = ze(t);
  return n
    ? (0, Y.jsx)(`div`, {
        className: T,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, Y.jsx)(O, { tagid: e.tagid, className: x }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function Q(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: a,
      bHidePrice: o,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      className: u,
      bShowCartButton: d,
    } = e,
    { data: p } = A(t),
    { data: m } = I(t),
    { data: h } = L(t),
    { bIsOwned: ee } = E(t),
    [g, ne] = me(s, c);
  if (!p) return null;
  let _ =
      (p.type === 1 && !m?.is_coming_soon) ||
      (p.related_items?.demo_appid && p.related_items?.demo_appid.length > 0),
    v = i(p.type),
    y = n && v && _,
    b = null;
  if (!ee && h?.is_free_to_keep && h?.free_to_keep_ends) {
    let e = h.free_to_keep_ends,
      t = V(
        `#Sale_default_label_Free_Promo_Description_Short`,
        G(e) + ` @ ` + U(e, { bForce24HourClock: !1 }),
      );
    b = (0, Y.jsxs)(`div`, {
      className: te,
      children: [
        t,
        (0, Y.jsx)(Le, {
          tooltip: V(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, Y.jsxs)(`div`, {
    className: j(ae, u),
    children: [
      b,
      (0, Y.jsxs)(`div`, {
        className: C,
        children: [
          !!y && (0, Y.jsx)(l, { id: t, className: `R0sGSaFdUWo-` }),
          !o &&
            p.type !== 1 &&
            (0, Y.jsxs)(Y.Fragment, {
              children: [
                !(!r || p.is_free) &&
                  (0, Y.jsx)(He, { fnOnPurchaseOptionsClick: a }),
                !(!d || p.is_free) &&
                  (0, Y.jsx)(f, { id: t, className: `CartBtn` }),
              ],
            }),
          !o && (0, Y.jsx)(ge, { id: t }),
          g && (0, Y.jsx)(S, { id: t, compatibility: ne }),
        ],
      }),
    ],
  });
}
function He(e) {
  return (0, Y.jsx)(`div`, {
    className: v,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, Y.jsx)(`span`, {
      children: V(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Ue(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: i,
      bHidePrice: s,
      bUseSubscriptionLayout: l,
      bHidePlatforms: u,
      bHideContainedApps: f,
      bAllowTwoLinesForHeader: p,
      bShowReviewSummary: m,
      bShowDeckCompatibilityDialog: h,
      eHardwareCompatibilityDisplay: te,
      bAutoFocus: _,
      fnOnClickOverride: v,
      bIsMarketingMessage: x,
      bPreferAssetWithoutOverride: S,
    } = e,
    w = Se(t, n),
    [T, ue] = (0, K.useState)(!1),
    E = je(),
    { data: D, isPending: he } = N(w),
    { data: O } = L(w),
    { data: A } = I(w),
    { data: M } = g(),
    P = a(w),
    F = (0, K.useRef)(null),
    [R, z] = (0, K.useState)(!1),
    B = Ae();
  (0, K.useEffect)(() => {
    F.current && z(F.current.offsetWidth < 370);
  }, [F]);
  let V = (0, K.useMemo)(
      () => (i && D && xe(D) ? { appid: be(D)[0] } : w),
      [i, w, D],
    ),
    { strStoreURL: U, snr: W } = b(D, i);
  if (!D)
    return he
      ? (0, Y.jsx)(Oe, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let G = D.included_appids?.length || 0,
    Ie = D.included_appids?.filter((e) => M?.has(e))?.length || 0,
    Le = D.item_type == 2 && !!O?.must_purchase_as_set,
    q = !f && G > 1,
    J = D.item_type == 1 && G == 1,
    X = D.item_type == 0 || J,
    Z = J && D.appid,
    ze = D.name || ``,
    Ve = d(A, O),
    He = B || !A?.is_coming_soon || Ve,
    [Ue, $] = me(h, te);
  return (0, Y.jsxs)(ke, {
    className: j({ [le]: !0, [void 0]: p, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: Pe.PREFERRED_CHILD,
    autoFocus: _,
    navKey: `preview_widget_` + H(w),
    children: [
      (0, Y.jsx)(ve, {
        appid: X && `appid` in w ? w.appid : void 0,
        children: (0, Y.jsxs)(Me, {
          onClick: x ? v : void 0,
          className: j({ [se]: !0, [re]: !0, [de]: x }),
          ...we(D, E, B, !!i, void 0, v),
          preferredFocus: q,
          children: [
            (0, Y.jsx)(`div`, {
              className: j(ce),
              children: (0, Y.jsx)(We, {
                id: V,
                strURL: U,
                children: (0, Y.jsxs)(`div`, {
                  className: fe,
                  children: [
                    (0, Y.jsx)(Te, { appids: P }),
                    (0, Y.jsx)(k, {
                      id: w,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: S,
                    }),
                    (0, Y.jsx)(Ce, { id: w }),
                    (0, Y.jsx)(De, {
                      id: w,
                      active: w && T,
                      bIsHoverMode: !0,
                      eGrowOnActivate: Ee.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, Y.jsxs)(`div`, {
              className: j({ [pe]: !0, [ee]: q }),
              children: [
                !(!X || v) &&
                  (0, Y.jsx)(c, {
                    id: w,
                    classOverride: j(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: W,
                  }),
                (0, Y.jsx)(`div`, {
                  className: ye,
                  children: (0, Y.jsx)(`a`, {
                    href: v ? void 0 : U,
                    target: Ne.IN_CLIENT ? void 0 : `_blank`,
                    onClick: v,
                    children: (0, Y.jsx)(`div`, {
                      className: j(oe, `StoreSaleWidgetTitle`),
                      children: ze,
                    }),
                  }),
                }),
                !q && (0, Y.jsx)(Be, { id: w }),
                (0, Y.jsxs)(`div`, {
                  className: y,
                  ref: F,
                  children: [
                    X && (0, Y.jsx)(Ge, { id: w }),
                    !q &&
                      !u &&
                      w &&
                      (0, Y.jsxs)(Y.Fragment, {
                        children: [
                          (0, Y.jsx)(o, {
                            id: w,
                            bMinimizePlatforms: R,
                            bHideWindows: R,
                          }),
                          !!(Ue && D.item_type == 0) &&
                            (0, Y.jsx)(Fe, {
                              eHWCompat: $,
                              className: `tUIs-i3NWoU-`,
                              id: w,
                            }),
                        ],
                      }),
                  ],
                }),
                !q &&
                  m &&
                  w &&
                  (0, Y.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, Y.jsx)(ne, { id: w }),
                  }),
                q &&
                  w &&
                  (0, Y.jsx)(Re, {
                    id: w,
                    bHideInLibraryApps: !Le && D.item_type == 2 && Ie < G,
                  }),
                !!X && (0, Y.jsx)(Ke, { id: w }),
                v
                  ? (0, Y.jsx)(`div`, {
                      className: ae,
                      children: (0, Y.jsx)(`div`, {
                        className: C,
                        children: (0, Y.jsx)(ge, { id: w }),
                      }),
                    })
                  : (0, Y.jsx)(Y.Fragment, {
                      children:
                        l && X && Z
                          ? (0, Y.jsx)(ie, { appid: Z, bIsMuted: !!T })
                          : (0, Y.jsx)(Q, {
                              id: w,
                              bShowDemoButton: r,
                              bHidePrice: s,
                              bHideWishlistButton: He,
                              eHardwareCompatibilityDisplay: $,
                            }),
                    }),
                (0, Y.jsx)(`div`, {
                  className: _e,
                  children: (0, Y.jsx)(k, {
                    id: w,
                    bPreferAssetWithoutOverride: S,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(e.strReason && e.strReason.length > 0) &&
        (0, Y.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function We(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, Y.jsxs)(w, { id: t, children: [r, ` `] })
    : (0, Y.jsx)(`a`, { href: n, children: r });
}
function Ge(e) {
  let { id: t } = e,
    { data: n } = I(t);
  return n ? (0, Y.jsx)(`div`, { className: he, children: m(n) }) : null;
}
function Ke(e) {
  let { id: t } = e,
    { data: n } = N(t),
    { data: r } = L(t),
    { data: i } = M(t),
    { data: a } = g();
  if (!n || !i || !i.short_description || !a) return null;
  let o = r?.discount_pct || 0,
    c = n.included_appids?.length || 0,
    l = n.included_appids?.filter((e) => a?.has(e))?.length || 0,
    u = i.short_description,
    d = n.item_type == 1 && c == 1,
    f = n.item_type == 2 && !!r?.must_purchase_as_set;
  return (
    (n.item_type == 2 || (n.item_type == 1 && !d)) &&
      (u =
        !f && l > 0 && l < c
          ? V(`#Sale_Bundle_CompletePartialSet`, l, c)
          : o > 0
            ? V(`#Sale_BundleSave_WithDiscount`, o, c)
            : V(`#Sale_BundleSave`, c)),
    (0, Y.jsx)(`div`, {
      className: j(ue, `StoreSaleWidgetShortDesc`),
      children:
        u.startsWith(`#`) && u.indexOf(` `) == -1
          ? (0, Y.jsx)(`span`, {
              className: s,
              children: P(
                u,
                (0, Y.jsx)(`i`, {}),
                (0, Y.jsx)(`i`, {}),
                (0, Y.jsx)(`i`, {}),
                (0, Y.jsx)(`i`, {}),
              ),
            })
          : u,
    })
  );
}
export { q as i, Q as n, J as r, Ue as t };
