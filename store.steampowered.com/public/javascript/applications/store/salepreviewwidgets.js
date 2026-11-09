/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, dt as n, ft as r } from "./libraries.js";
import { n as i } from "./storetypes.js";
import { B as a } from "./storelink.js";
import {
  $ as o,
  Ar as s,
  At as c,
  Dn as l,
  F as u,
  Fn as d,
  Hn as f,
  I as ee,
  It as p,
  Kt as m,
  Mn as h,
  Nn as g,
  Nt as te,
  Pn as _,
  Pt as v,
  Qn as ne,
  Tn as y,
  Tt as b,
  U as x,
  W as S,
  Wt as re,
  _r as ie,
  br as ae,
  ct as C,
  dr as w,
  et as T,
  fr as oe,
  hr as se,
  kr as E,
  mr as ce,
  nt as D,
  or as le,
  pr as ue,
  q as de,
  rr as fe,
  sn as O,
  sr as pe,
  t as me,
  tr as he,
  tt as ge,
  ur as _e,
  zn as ve,
  zt as k,
} from "./saletags.js";
import { i as ye, r as be } from "./storeurl.js";
import {
  d as xe,
  h as A,
  m as Se,
  n as Ce,
  r as we,
} from "./salestoreitemutils.js";
import { n as Te, t as Ee } from "./microtrailerdisplay.js";
import { t as De } from "./saleghostsections.js";
import {
  Dv as j,
  Ev as M,
  Fv as N,
  Hv as P,
  Iv as F,
  Jv as I,
  Pv as L,
  Sc as R,
  Uy as z,
  Vu as Oe,
  Wy as B,
  ab as V,
  an as ke,
  av as H,
  bv as Ae,
  il as je,
  kc as Me,
  kv as U,
  lb as Ne,
  pl as Pe,
  rx as Fe,
  vr as W,
  wc as Ie,
  xb as G,
  zb as Le,
} from "./main.js";
var K = e(t(), 1),
  q = `x33TRfA9NLE-`,
  J = `UWpi28gEMso-`,
  Y = r(),
  X = 6;
function Re(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = U(t),
    i = r?.item_type == 2,
    { data: a } = s(),
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
  let c = o.length,
    l = G.LocalizePlural(`#Sale_ContentPreview`, c);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != c && (l = G.Localize(`#Sale_Bundle_CompletePartialSet`, e - c, e));
  }
  return (0, Y.jsxs)(`div`, {
    className: m,
    children: [
      (0, Y.jsxs)(`div`, {
        className: O,
        children: [
          i &&
            (0, Y.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: G.Localize(`#AppType_bundle`),
            }),
          l,
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: h,
        children: o
          .slice(0, X)
          .map((e) => (0, Y.jsx)(Z, { id: e }, `preview${I(e)}`)),
      }),
    ],
  });
}
function Z(e) {
  let { id: t } = e,
    { data: n } = N(t),
    { data: r } = L(t);
  if (!n || !r) return null;
  let i = Ie(n, `small_capsule`);
  return (0, Y.jsx)(T, {
    id: t,
    className: _,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, Y.jsx)(`img`, {
      src: i,
      className: g,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
function ze(e) {
  let [t, r] = (0, K.useState)(void 0),
    { data: i } = U(e),
    { data: a } = P(e),
    o = n(),
    s = H();
  return (
    (0, K.useEffect)(() => {
      if (i) {
        if (a && a.length > 0) r(a);
        else if (i.related_items?.parent_appid) {
          let e = { appid: i.related_items?.parent_appid };
          (async () => {
            let t = await o.fetchQuery(Ae(s, e));
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
        className: ce,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, Y.jsx)(me, { tagid: e.tagid, className: k }, `tag_` + e.tagid),
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
      className: l,
      bShowCartButton: p,
    } = e,
    { data: m } = U(t),
    { data: h } = F(t),
    { data: g } = j(t),
    { bIsOwned: te } = E(t),
    [_, v] = D(s, c);
  if (!m) return null;
  let y =
      (m.type === 1 && !h?.is_coming_soon) ||
      (m.related_items?.demo_appid && m.related_items?.demo_appid.length > 0),
    b = i(m.type),
    x = n && b && y,
    S = null;
  if (!te && g?.is_free_to_keep && g?.free_to_keep_ends) {
    let e = g.free_to_keep_ends,
      t = z(
        `#Sale_default_label_Free_Promo_Description_Short`,
        Ne(e) + ` @ ` + V(e, { bForce24HourClock: !1 }),
      );
    S = (0, Y.jsxs)(`div`, {
      className: d,
      children: [
        t,
        (0, Y.jsx)(W, {
          tooltip: z(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, Y.jsxs)(`div`, {
    className: R(f, l),
    children: [
      S,
      (0, Y.jsxs)(`div`, {
        className: ne,
        children: [
          !!x && (0, Y.jsx)(u, { id: t, className: `R0sGSaFdUWo-` }),
          !o &&
            m.type !== 1 &&
            (0, Y.jsxs)(Y.Fragment, {
              children: [
                !(!r || m.is_free) &&
                  (0, Y.jsx)(He, { fnOnPurchaseOptionsClick: a }),
                !(!p || m.is_free) &&
                  (0, Y.jsx)(ee, { id: t, className: `CartBtn` }),
              ],
            }),
          !o && (0, Y.jsx)(de, { id: t }),
          _ && (0, Y.jsx)(C, { id: t, compatibility: v }),
        ],
      }),
    ],
  });
}
function He(e) {
  return (0, Y.jsx)(`div`, {
    className: p,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, Y.jsx)(`span`, {
      children: z(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Ue(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: i,
      bHidePrice: u,
      bUseSubscriptionLayout: d,
      bHidePlatforms: ee,
      bHideContainedApps: p,
      bAllowTwoLinesForHeader: m,
      bShowReviewSummary: h,
      bShowDeckCompatibilityDialog: g,
      eHardwareCompatibilityDisplay: _,
      bAutoFocus: v,
      fnOnClickOverride: y,
      bIsMarketingMessage: C,
      bPreferAssetWithoutOverride: w,
    } = e,
    T = xe(t, n),
    [E, ce] = (0, K.useState)(!1),
    ue = Oe(),
    { data: O, isPending: me } = L(T),
    { data: k } = j(T),
    { data: M } = F(T),
    { data: N } = s(),
    P = a(T),
    z = (0, K.useRef)(null),
    [B, V] = (0, K.useState)(!1),
    H = Le();
  (0, K.useEffect)(() => {
    z.current && V(z.current.offsetWidth < 370);
  }, [z]);
  let Ae = (0, K.useMemo)(
      () => (i && O && be(O) ? { appid: ye(O)[0] } : T),
      [i, T, O],
    ),
    { strStoreURL: U, snr: Ne } = x(O, i);
  if (!O)
    return me
      ? (0, Y.jsx)(De, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let W = O.included_appids?.length || 0,
    Ie = O.included_appids?.filter((e) => N?.has(e))?.length || 0,
    G = O.item_type == 2 && !!k?.must_purchase_as_set,
    q = !p && W > 1,
    J = O.item_type == 1 && W == 1,
    X = O.item_type == 0 || J,
    Z = J && O.appid,
    ze = O.name || ``,
    Ve = te(M, k),
    He = H || !M?.is_coming_soon || Ve,
    [Ue, $] = D(g, _);
  return (0, Y.jsxs)(Me, {
    className: R({ [_e]: !0, [void 0]: m, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: Pe.PREFERRED_CHILD,
    autoFocus: v,
    navKey: `preview_widget_` + I(T),
    children: [
      (0, Y.jsx)(ge, {
        appid: X && `appid` in T ? T.appid : void 0,
        children: (0, Y.jsxs)(je, {
          onClick: C ? y : void 0,
          className: R({ [fe]: !0, [ve]: !0, [l]: C }),
          ...Ce(O, ue, H, !!i, void 0, y),
          preferredFocus: q,
          children: [
            (0, Y.jsx)(`div`, {
              className: R(le),
              children: (0, Y.jsx)(We, {
                id: Ae,
                strURL: U,
                children: (0, Y.jsxs)(`div`, {
                  className: pe,
                  children: [
                    (0, Y.jsx)(we, { appids: P }),
                    (0, Y.jsx)(A, {
                      id: T,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: w,
                    }),
                    (0, Y.jsx)(Se, { id: T }),
                    (0, Y.jsx)(Ee, {
                      id: T,
                      active: T && E,
                      bIsHoverMode: !0,
                      eGrowOnActivate: Te.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, Y.jsxs)(`div`, {
              className: R({ [oe]: !0, [re]: q }),
              children: [
                !(!X || y) &&
                  (0, Y.jsx)(b, {
                    id: T,
                    classOverride: R(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: Ne,
                  }),
                (0, Y.jsx)(`div`, {
                  className: ie,
                  children: (0, Y.jsx)(`a`, {
                    href: y ? void 0 : U,
                    target: Fe.IN_CLIENT ? void 0 : `_blank`,
                    onClick: y,
                    children: (0, Y.jsx)(`div`, {
                      className: R(se, `StoreSaleWidgetTitle`),
                      children: ze,
                    }),
                  }),
                }),
                !q && (0, Y.jsx)(Be, { id: T }),
                (0, Y.jsxs)(`div`, {
                  className: ae,
                  ref: z,
                  children: [
                    X && (0, Y.jsx)(Ge, { id: T }),
                    !q &&
                      !ee &&
                      T &&
                      (0, Y.jsxs)(Y.Fragment, {
                        children: [
                          (0, Y.jsx)(o, {
                            id: T,
                            bMinimizePlatforms: B,
                            bHideWindows: B,
                          }),
                          !!(Ue && O.item_type == 0) &&
                            (0, Y.jsx)(ke, {
                              eHWCompat: $,
                              className: `tUIs-i3NWoU-`,
                              id: T,
                            }),
                        ],
                      }),
                  ],
                }),
                !q &&
                  h &&
                  T &&
                  (0, Y.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, Y.jsx)(c, { id: T }),
                  }),
                q &&
                  T &&
                  (0, Y.jsx)(Re, {
                    id: T,
                    bHideInLibraryApps: !G && O.item_type == 2 && Ie < W,
                  }),
                !!X && (0, Y.jsx)(Ke, { id: T }),
                y
                  ? (0, Y.jsx)(`div`, {
                      className: f,
                      children: (0, Y.jsx)(`div`, {
                        className: ne,
                        children: (0, Y.jsx)(de, { id: T }),
                      }),
                    })
                  : (0, Y.jsx)(Y.Fragment, {
                      children:
                        d && X && Z
                          ? (0, Y.jsx)(S, { appid: Z, bIsMuted: !!E })
                          : (0, Y.jsx)(Q, {
                              id: T,
                              bShowDemoButton: r,
                              bHidePrice: u,
                              bHideWishlistButton: He,
                              eHardwareCompatibilityDisplay: $,
                            }),
                    }),
                (0, Y.jsx)(`div`, {
                  className: he,
                  children: (0, Y.jsx)(A, {
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
        (0, Y.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function We(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, Y.jsxs)(T, { id: t, children: [r, ` `] })
    : (0, Y.jsx)(`a`, { href: n, children: r });
}
function Ge(e) {
  let { id: t } = e,
    { data: n } = F(t);
  return n ? (0, Y.jsx)(`div`, { className: w, children: v(n) }) : null;
}
function Ke(e) {
  let { id: t } = e,
    { data: n } = L(t),
    { data: r } = j(t),
    { data: i } = M(t),
    { data: a } = s();
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
          ? z(`#Sale_Bundle_CompletePartialSet`, l, c)
          : o > 0
            ? z(`#Sale_BundleSave_WithDiscount`, o, c)
            : z(`#Sale_BundleSave`, c)),
    (0, Y.jsx)(`div`, {
      className: R(ue, `StoreSaleWidgetShortDesc`),
      children:
        u.startsWith(`#`) && u.indexOf(` `) == -1
          ? (0, Y.jsx)(`span`, {
              className: y,
              children: B(
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
