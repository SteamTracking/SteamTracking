/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { B as r, V as i } from "./storelink.js";
import {
  $ as a,
  An as o,
  I as s,
  Pt as c,
  Qt as l,
  Ut as u,
  W as d,
  cn as f,
  et as p,
  jn as m,
  kr as h,
  ln as g,
  n as _,
  nn as v,
  q as y,
  tn as b,
  tt as x,
  vr as S,
} from "./saletags.js";
import { t as C } from "./storeurl.js";
import {
  f as w,
  h as T,
  m as E,
  n as D,
  r as O,
} from "./salestoreitemutils.js";
import { n as k, t as A } from "./microtrailerdisplay.js";
import { t as j } from "./storegamehover.js";
import { n as M } from "./salewishlistbutton.js";
import {
  H as ee,
  Hv as te,
  Iv as N,
  Pc as P,
  Sc as F,
  Uy as I,
  Vc as ne,
  Vu as L,
  Xt as re,
  dd as ie,
  il as ae,
  kc as R,
  kv as z,
  nl as B,
  pl as V,
  wc as H,
  wv as U,
  zb as W,
} from "./main.js";
function G() {
  return { width: 231, height: 87 };
}
var K = e(t()),
  q = `KPyQrAYKerM-`,
  J = `wGsVN7BCL-8-`,
  oe = `_3k6zW2BR0Ec-`,
  se = `ALwt1eWVvf0-`,
  ce = `_630lLH8fjII-`,
  le = `_6lXwKbKQRZM-`,
  ue = `O2ZRoYfc1Qk-`,
  de = `WVCDoL13yGg-`,
  fe = `pBwTyvQh7iI-`,
  pe = `lWa9AGKkKhU-`,
  me = `_2w1L-tFibuk-`,
  he = `FNsnxK3tYRI-`,
  ge = `XfQfXm4a0JE-`,
  _e = `_5IGBtrxnWJ0-`,
  ve = `bVbljBZi-wU-`,
  ye = `olyf0KJqJlE-`,
  be = `v2ki0uInhRU-`,
  xe = `_7R6l0Of6MJ0-`,
  Se = `AYD-9JVfXTU-`,
  Ce = `mjoUDFuJ0D8-`,
  Y = `_4cqzz9ahZPc-`,
  we = `_4MdgvcokN4Y-`,
  Te = `oO24eF-LkHU-`,
  Ee = `KTGJoQErGog-`,
  De = `_1i4D-abW7us-`,
  Oe = `InaZA4MxyUE-`,
  ke = `jPVI0mk1nqU-`,
  Ae = `Ypr-OC7lYjM-`,
  X = `RW-yCN2mjag-`,
  je = `-GGXIbckfGw-`,
  Z = n(),
  Q = `capsule_index_`;
function Me(e) {
  let {
      capsule: t,
      bShowParentApp: n,
      elElementToAppendToHover: r,
      index: a,
      navKey: s,
      bHideStoreHover: c,
      onlyOneDiscountPct: u,
      bPreferDemoStorePage: d,
      bShowEarlyAccessBanner: f,
    } = e,
    m = W(),
    [h, g] = K.useState(!1),
    [_, v] = K.useState(!1),
    [y, b] = K.useState(!1),
    C = K.useRef(!1);
  K.useEffect(() => {
    if (_ && !C.current) {
      let e = window.setTimeout(() => {
        (C.current = !0), b(!0);
      }, 500);
      return () => window.clearTimeout(e);
    }
    return b(_ || h), () => {};
  }, [_, h]);
  let { data: T } = ie(),
    E = !!T?.preferences?.disable_microtrailers,
    D = w(t),
    { data: O } = z(D),
    k = i(n ? O?.related_items?.parent_appid : void 0),
    { data: A } = z(k);
  if (!O || !D) return null;
  let j = !!A && !!k,
    M = (0, Z.jsx)(Pe, {
      ...e,
      strExtraParams: e.strExtraParams,
      id: D,
      bIsHovered: y && !E,
      bHasParentAppToDisplay: j,
      onlyOneDiscountPct: u,
      bShowEarlyAccessBanner: f,
      bUsePanel: !c && !m,
    });
  return (0, Z.jsxs)(R, {
    className: F({ [o]: !0, [S]: y && !E && m, [Q + a]: a == 0 }),
    navEntryPreferPosition: V.PREFERRED_CHILD,
    navKey: s,
    onFocusWithin: e.imageType == `library` ? void 0 : v,
    children: [
      (0, Z.jsxs)(x, {
        appid: O.appid,
        children: [
          c
            ? (0, Z.jsx)(`div`, {
                onMouseEnter: () => g(!0),
                onMouseLeave: () => g(!1),
                children: M,
              })
            : (0, Z.jsx)(p, {
                className: l,
                id: D,
                elElementToAppend: e.elElementToAppendToHover,
                bShowDemoButton: e.bShowDemoButton,
                bPreferDemoStorePage: e.bPreferDemoStorePage,
                bShowDeckCompatibilityDialog: e.bShowDeckCompatibilityDialog,
                eHardwareCompatibilityDisplay: e.eHardwareCompatibilityDisplay,
                bHidePrice: e.bHidePrice,
                bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                strExtraParams: e.strExtraParams,
                nCreatorAccountID: e.creatorAccountID,
                nWidthMultiplier: e.nWidthMultiplier,
                bShowIgnoreButton: e.bShowIgnoreButton,
                bShowDescription: e.bShowDescriptionInHover,
                children: M,
              }),
          !!r && (0, Z.jsx)(Z.Fragment, { children: r }),
        ],
      }),
      j &&
        (0, Z.jsx)(Ne, {
          strExtraParams: e.strExtraParams,
          parentID: k,
          parentStoreItemDefaultInfo: A,
          childAppType: O.type,
          bPreferDemoStorePage: !!d,
        }),
    ],
  });
}
function Ne(e) {
  let {
      strExtraParams: t,
      parentID: n,
      parentStoreItemDefaultInfo: r,
      childAppType: i,
      bPreferDemoStorePage: a,
    } = e,
    o = L(),
    s = W(),
    { data: c } = U(n);
  return c
    ? (0, Z.jsx)(ae, {
        className: v,
        ...D(r, o, s, a, t),
        children: (0, Z.jsxs)(x, {
          appid: r.appid,
          children: [
            (0, Z.jsx)(`div`, {
              className: m,
              children: I(
                i == 11
                  ? `#SalePage_ParentApp_SoundTrack`
                  : `#SalePage_ParentApp_DLC`,
              ),
            }),
            (0, Z.jsx)(j, {
              id: n,
              strExtraParams: t,
              children: (0, Z.jsx)(`img`, {
                loading: `lazy`,
                className: Y,
                alt: r.name || ``,
                src: H(c, `small_capsule`),
                ...G(),
              }),
            }),
          ],
        }),
      })
    : null;
}
function Pe(e) {
  let {
      id: t,
      bHideStatusBanners: n,
      bUsePanel: i,
      strExtraParams: a,
      index: o,
      imageType: s,
      bHasParentAppToDisplay: c,
      bIsHovered: l,
      strDoubleCapsuleMessage: u,
      bPreferDemoStorePage: d,
      bShowEarlyAccessBanner: f,
      bPreferAssetWithoutOverride: p,
    } = e,
    m = L(),
    h = re(),
    g = W(),
    _ = r(t),
    { data: v } = z(t);
  if (!v) return null;
  let y = i ? void 0 : ne(P(`${C(v, d)}${a ? `?${a}` : ``}`, m, h)),
    b = i ? R : B,
    x = l && g,
    S = !!u;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsxs)(`div`, {
        className: F({ [De]: S }),
        children: [
          (0, Z.jsxs)(b, {
            href: y,
            style: {
              display: `block`,
              cursor: `pointer`,
              position: g ? `relative` : void 0,
              zIndex: x ? 4 : void 0,
            },
            className: F({ [Oe]: S }),
            preferredFocus: c,
            focusable: !0,
            noFocusRing: x,
            children: [
              (0, Z.jsx)(O, {
                appids: _,
                hide_status_banners: n,
                show_early_access: f,
              }),
              s != `none` &&
                (0, Z.jsx)(T, {
                  imageType: s,
                  id: t,
                  bPreferAssetWithoutOverride: p,
                }),
              (0, Z.jsx)(E, { id: t }),
              (0, Z.jsx)(`div`, {
                className: F({ [je]: x }),
                children: (0, Z.jsx)(A, {
                  id: t,
                  active: l,
                  bIsHoverMode: !0,
                  eGrowOnActivate: x ? k.k_ETrailerGrowAmount_Implicit : void 0,
                }),
              }),
            ],
          }),
          S && (0, Z.jsx)(Fe, { id: t, strDoubleCapsuleMessage: u, index: o }),
        ],
      }),
      (0, Z.jsx)(Ie, { ...e }),
    ],
  });
}
function Fe(e) {
  let { id: t, strDoubleCapsuleMessage: n, index: r } = e,
    { data: i } = N(t),
    { data: a } = te(t);
  return (0, Z.jsxs)(`div`, {
    className: F(ke, `TwoWidthSideInfo`),
    children: [
      (0, Z.jsx)(`div`, { className: Ae, children: n }),
      (0, Z.jsx)(`div`, {
        className: X,
        children: (0, Z.jsx)(`span`, { children: i ? c(i) : `` }),
      }),
      (0, Z.jsx)(_, {
        bHideTitle: !0,
        rgTagIDs: a?.map((e) => e.tagid) || [],
        instanceNum: r,
      }),
    ],
  });
}
function Ie(e) {
  let {
      id: t,
      bHidePriceIfOwned: n,
      bHideStatusBanners: r,
      bUseSubscriptionLayout: i,
      elElementToAppendToHover: a,
      bHidePrice: o,
      bHidePlatforms: s,
      creatorAccountID: c,
      bIsHovered: l,
      onlyOneDiscountPct: u,
      strDoubleCapsuleMessage: f,
    } = e,
    { data: p } = z(t),
    { bIsOwned: m } = h(t);
  return i && p && p.item_type == 0 && p.appid
    ? (0, Z.jsx)(d, { appid: p.appid, bIsMuted: l })
    : a
      ? null
      : (0, Z.jsx)($, {
          id: t,
          bHidePrice: o,
          bShowInLibraryInsteadOfPrice: !!(m && n),
          bHidePlatforms: s,
          creatorAccountID: c,
          bShowName: e.bShowName,
          onlyOneDiscountPct: u,
          bShowWishlistButton: !!f,
        });
}
function $(e) {
  let {
      id: t,
      bHidePrice: n,
      bShowInLibraryInsteadOfPrice: r,
      bHidePlatforms: i,
      strClassName: o,
      creatorAccountID: c,
      bShowName: l,
      onlyOneDiscountPct: u,
      bShowAddToCart: d,
      bShowWishlistButton: f,
    } = e,
    p = (0, K.useRef)(null),
    [m, h] = (0, K.useState)(!1),
    { data: g } = z(t);
  if (
    ((0, K.useEffect)(() => {
      p.current && h(p.current.offsetWidth < 370);
    }, [p]),
    !t || !(`appid` in t || `bundleid` in t || `packageid` in t))
  )
    return null;
  let _ = !!(f && g?.item_type == 0);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      !(!c && !d && !_ && i && n) &&
        (0, Z.jsxs)(`div`, {
          ref: p,
          className: F(`fNtXEMzHz58-`, `CapsuleBottomBar`, o),
          children: [
            c && (0, Z.jsx)(Re, { creatorAccountID: c, ...e }),
            d &&
              (0, Z.jsx)(s, {
                id: t,
                className: F(`RAahmG4F6sc-`, `oqhyMK1Krt0-`),
              }),
            _ &&
              `appid` in t &&
              (0, Z.jsx)(M, {
                appid: t.appid,
                className: F(`RAahmG4F6sc-`, `GRw4r5TpD5s-`),
              }),
            !i &&
              (0, Z.jsx)(a, { id: t, bMinimizePlatforms: m, bHideWindows: !0 }),
            !n &&
              (0, Z.jsx)(`span`, {
                className: `_0MLgqm-W-nA-`,
                children: (0, Z.jsx)(y, {
                  id: t,
                  bShowInLibrary: r,
                  onlyOneDiscountPct: u,
                }),
              }),
          ],
        }),
      l && (0, Z.jsx)(Le, { id: t }),
    ],
  });
}
function Le(e) {
  let { id: t } = e,
    { data: n } = z(t);
  return n?.name ? (0, Z.jsx)(`div`, { className: b, children: n.name }) : null;
}
function Re(e) {
  let { creatorAccountID: t, strClassName: n } = e,
    r = (0, K.useMemo)(() => ({ creatorid: t }), [t]),
    { data: i } = z(r),
    { data: a } = U(r);
  if (!i) return null;
  let o = ee(a?.clan_avatar, `Medium`),
    s = i.name || ``;
  return (0, Z.jsxs)(`div`, {
    className: F(u, n),
    children: [
      (0, Z.jsx)(`img`, { className: F(f), src: o, alt: s }),
      (0, Z.jsx)(`span`, { className: g, children: s }),
    ],
  });
}
export {
  Se as C,
  xe as D,
  ue as E,
  J as S,
  he as T,
  q as _,
  Y as a,
  ce as b,
  se as c,
  _e as d,
  Ce as f,
  oe as g,
  ye as h,
  Te as i,
  de as l,
  me as m,
  Me as n,
  Ee as o,
  fe as p,
  Q as r,
  we as s,
  $ as t,
  le as u,
  ve as v,
  be as w,
  ge as x,
  pe as y,
};
