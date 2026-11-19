/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  $n as r,
  An as i,
  Bn as a,
  Bs as o,
  Lo as s,
  Ps as c,
  Ro as l,
  Un as u,
  Va as d,
  Vs as f,
  Xa as p,
  Yn as m,
  ao as h,
  co as g,
  go as _,
  ho as v,
  lo as y,
  n as b,
  nr as x,
  tr as S,
} from "./chunk~6b8ddcaac8.js";
import { t as C } from "./chunk~4c13037b22.js";
import { d as w, p as T, r as E } from "./chunk~cbbb6ae37c.js";
import { f as D, p as O } from "./chunk~ffe4581a06.js";
import { n as k, t as A } from "./chunk~56437c278a.js";
import { t as j } from "./chunk~4d16ce5d1a.js";
import { n as M } from "./chunk~d902bc74d6.js";
import {
  Ec as N,
  H as P,
  Ic as F,
  Jt as ee,
  Jy as te,
  Ku as I,
  Pv as L,
  Uc as R,
  Vv as ne,
  Wb as z,
  _l as re,
  cl as ie,
  gd as ae,
  jc as B,
  kv as V,
  ol as H,
  qv as U,
  wc as W,
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
  ge = `AYD-9JVfXTU-`,
  _e = `R-OtVF8pTAw-`,
  ve = `XfQfXm4a0JE-`,
  ye = `_5IGBtrxnWJ0-`,
  be = `bVbljBZi-wU-`,
  xe = `olyf0KJqJlE-`,
  Se = `v2ki0uInhRU-`,
  Ce = `_7R6l0Of6MJ0-`,
  we = `mjoUDFuJ0D8-`,
  Y = `_4cqzz9ahZPc-`,
  Te = `_4MdgvcokN4Y-`,
  Ee = `oO24eF-LkHU-`,
  De = `KTGJoQErGog-`,
  Oe = `_1i4D-abW7us-`,
  ke = `InaZA4MxyUE-`,
  Ae = `jPVI0mk1nqU-`,
  X = `Ypr-OC7lYjM-`,
  je = `RW-yCN2mjag-`,
  Me = `-GGXIbckfGw-`,
  Ne = `GKABXApBGKQ-`,
  Z = n(),
  Q = `capsule_index_`;
function Pe(e) {
  let {
      capsule: t,
      bShowParentApp: n,
      elElementToAppendToHover: i,
      index: a,
      navKey: o,
      bHideStoreHover: c,
      onlyOneDiscountPct: l,
      bPreferDemoStorePage: u,
      bShowEarlyAccessBanner: d,
    } = e,
    p = z(),
    [m, g] = K.useState(!1),
    [_, v] = K.useState(!1),
    [y, b] = K.useState(!1),
    C = K.useRef(!1);
  K.useEffect(() => {
    if (_ && !C.current) {
      let e = window.setTimeout(() => {
        ((C.current = !0), b(!0));
      }, 500);
      return () => window.clearTimeout(e);
    }
    return (b(_ || m), () => {});
  }, [_, m]);
  let { data: w } = ae(),
    T = !!w?.preferences?.disable_microtrailers,
    E = r(t),
    { data: D } = L(E),
    O = f(n ? D?.related_items?.parent_appid : void 0),
    { data: A } = L(O),
    j = k(E);
  if (!D || !E) return null;
  let M = !!A && !!O,
    N = (0, Z.jsx)(Ie, {
      ...e,
      strExtraParams: e.strExtraParams,
      id: E,
      bIsHovered: y && !T,
      bHasParentAppToDisplay: M,
      onlyOneDiscountPct: l,
      bShowEarlyAccessBanner: d,
      bUsePanel: !c && !p,
    });
  return (0, Z.jsxs)(B, {
    className: W({ [s]: !0, [Q + a]: a == 0 }),
    navEntryPreferPosition: re.PREFERRED_CHILD,
    navKey: o,
    onFocusWithin: v,
    ...j,
    children: [
      (0, Z.jsxs)(x, {
        appid: D.appid,
        children: [
          c
            ? (0, Z.jsx)(`div`, {
                onMouseEnter: () => g(!0),
                onMouseLeave: () => g(!1),
                children: N,
              })
            : (0, Z.jsx)(S, {
                className: h,
                id: E,
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
                children: N,
              }),
          !!i && (0, Z.jsx)(Z.Fragment, { children: i }),
        ],
      }),
      M &&
        (0, Z.jsx)(Fe, {
          strExtraParams: e.strExtraParams,
          parentID: O,
          parentStoreItemDefaultInfo: A,
          childAppType: D.type,
          bPreferDemoStorePage: !!u,
        }),
    ],
  });
}
function Fe(e) {
  let {
      strExtraParams: t,
      parentID: n,
      parentStoreItemDefaultInfo: r,
      childAppType: i,
      bPreferDemoStorePage: a,
    } = e,
    o = I(),
    s = z(),
    { data: c } = V(n),
    u = k(n);
  return c
    ? (0, Z.jsx)(ie, {
        className: y,
        ...A(r, o, s, a, t),
        ...u,
        children: (0, Z.jsxs)(x, {
          appid: r.appid,
          children: [
            (0, Z.jsx)(`div`, {
              className: l,
              children: te(
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
                src: N(c, `small_capsule`),
                ...G(),
              }),
            }),
          ],
        }),
      })
    : null;
}
function Ie(e) {
  let {
      id: t,
      bHideStatusBanners: n,
      bUsePanel: r,
      strExtraParams: i,
      index: a,
      imageType: s,
      bHasParentAppToDisplay: c,
      bIsHovered: l,
      strDoubleCapsuleMessage: u,
      bPreferDemoStorePage: d,
      bShowEarlyAccessBanner: f,
      bPreferAssetWithoutOverride: p,
    } = e,
    m = I(),
    h = ee(),
    g = z(),
    _ = o(t),
    { data: v } = L(t);
  if (!v) return null;
  let y = r ? void 0 : R(F(`${C(v, d)}${i ? `?${i}` : ``}`, m, h)),
    b = r ? B : H,
    x = l && g,
    S = x && s == `library`,
    k = !!u;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsxs)(`div`, {
        className: W({ [Oe]: k }),
        children: [
          (0, Z.jsxs)(b, {
            href: y,
            style: {
              display: `block`,
              cursor: `pointer`,
              position: g ? `relative` : void 0,
            },
            className: W({ [ke]: k }),
            preferredFocus: c,
            focusable: !0,
            children: [
              (0, Z.jsx)(E, {
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
              (0, Z.jsx)(w, { id: t }),
              (0, Z.jsx)(`div`, {
                className: W({ [Me]: x, [Ne]: S }),
                children: (0, Z.jsx)(D, {
                  id: t,
                  active: l,
                  bIsHoverMode: !0,
                  eGrowOnActivate: S ? O.k_ETrailerGrowAmount_Implicit : void 0,
                }),
              }),
            ],
          }),
          k && (0, Z.jsx)(Le, { id: t, strDoubleCapsuleMessage: u, index: a }),
        ],
      }),
      (0, Z.jsx)(Re, { ...e }),
    ],
  });
}
function Le(e) {
  let { id: t, strDoubleCapsuleMessage: n, index: r } = e,
    { data: i } = ne(t),
    { data: a } = U(t);
  return (0, Z.jsxs)(`div`, {
    className: W(Ae, `TwoWidthSideInfo`),
    children: [
      (0, Z.jsx)(`div`, { className: X, children: n }),
      (0, Z.jsx)(`div`, {
        className: je,
        children: (0, Z.jsx)(`span`, { children: i ? d(i) : `` }),
      }),
      (0, Z.jsx)(b, {
        bHideTitle: !0,
        rgTagIDs: a?.map((e) => e.tagid) || [],
        instanceNum: r,
      }),
    ],
  });
}
function Re(e) {
  let {
      id: t,
      bHidePriceIfOwned: n,
      bHideStatusBanners: r,
      bUseSubscriptionLayout: i,
      elElementToAppendToHover: o,
      bHidePrice: s,
      bHidePlatforms: l,
      creatorAccountID: u,
      bIsHovered: d,
      onlyOneDiscountPct: f,
      strDoubleCapsuleMessage: p,
    } = e,
    { data: m } = L(t),
    { bIsOwned: h } = c(t);
  return i && m && m.item_type == 0 && m.appid
    ? (0, Z.jsx)(a, { appid: m.appid, bIsMuted: d })
    : o
      ? null
      : (0, Z.jsx)($, {
          id: t,
          bHidePrice: s,
          bShowInLibraryInsteadOfPrice: !!(h && n),
          bHidePlatforms: l,
          creatorAccountID: u,
          bShowName: e.bShowName,
          onlyOneDiscountPct: f,
          bShowWishlistButton: !!p,
        });
}
function $(e) {
  let {
      id: t,
      bHidePrice: n,
      bShowInLibraryInsteadOfPrice: r,
      bHidePlatforms: a,
      strClassName: o,
      creatorAccountID: s,
      bShowName: c,
      onlyOneDiscountPct: l,
      bShowAddToCart: d,
      bShowWishlistButton: f,
    } = e,
    p = (0, K.useRef)(null),
    [h, g] = (0, K.useState)(!1),
    { data: _ } = L(t);
  if (
    ((0, K.useEffect)(() => {
      p.current && g(p.current.offsetWidth < 370);
    }, [p]),
    !t || !(`appid` in t || `bundleid` in t || `packageid` in t))
  )
    return null;
  let v = !!(f && _?.item_type == 0);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      !(!s && !d && !v && a && n) &&
        (0, Z.jsxs)(`div`, {
          ref: p,
          className: W(`fNtXEMzHz58-`, `CapsuleBottomBar`, o),
          children: [
            s && (0, Z.jsx)(Be, { creatorAccountID: s, ...e }),
            d &&
              (0, Z.jsx)(i, {
                id: t,
                className: W(`RAahmG4F6sc-`, `oqhyMK1Krt0-`),
              }),
            v &&
              `appid` in t &&
              (0, Z.jsx)(M, {
                appid: t.appid,
                className: W(`RAahmG4F6sc-`, `GRw4r5TpD5s-`),
              }),
            !a &&
              (0, Z.jsx)(m, { id: t, bMinimizePlatforms: h, bHideWindows: !0 }),
            !n &&
              (0, Z.jsx)(`span`, {
                className: `_0MLgqm-W-nA-`,
                children: (0, Z.jsx)(u, {
                  id: t,
                  bShowInLibrary: r,
                  onlyOneDiscountPct: l,
                }),
              }),
          ],
        }),
      c && (0, Z.jsx)(ze, { id: t }),
    ],
  });
}
function ze(e) {
  let { id: t } = e,
    { data: n } = L(t);
  return n?.name ? (0, Z.jsx)(`div`, { className: g, children: n.name }) : null;
}
function Be(e) {
  let { creatorAccountID: t, strClassName: n } = e,
    r = (0, K.useMemo)(() => ({ creatorid: t }), [t]),
    { data: i } = L(r),
    { data: a } = V(r);
  if (!i) return null;
  let o = P(a?.clan_avatar, `Medium`),
    s = i.name || ``;
  return (0, Z.jsxs)(`div`, {
    className: W(p, n),
    children: [
      (0, Z.jsx)(`img`, { className: W(v), src: o, alt: s }),
      (0, Z.jsx)(`span`, { className: _, children: s }),
    ],
  });
}
export {
  J as C,
  ue as D,
  he as E,
  Ce as O,
  ve as S,
  Se as T,
  oe as _,
  Y as a,
  pe as b,
  _e as c,
  le as d,
  ye as f,
  xe as g,
  me as h,
  Ee as i,
  se as l,
  fe as m,
  Pe as n,
  De as o,
  we as p,
  Q as r,
  Te as s,
  $ as t,
  de as u,
  q as v,
  ge as w,
  ce as x,
  be as y,
};
