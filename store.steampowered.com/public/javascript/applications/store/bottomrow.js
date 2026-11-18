/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  Ca as r,
  Do as i,
  Ei as a,
  Eo as o,
  Fi as s,
  Ft as c,
  Ht as l,
  Ji as u,
  Mt as d,
  Sa as f,
  St as p,
  Ut as m,
  Vt as h,
  Wi as g,
  bo as _,
  ea as v,
  n as y,
  qi as b,
  ta as x,
} from "./chunk~6b8ddcaac8.js";
import { t as S } from "./chunk~4c13037b22.js";
import { d as C, p as w, r as T } from "./chunk~cbbb6ae37c.js";
import { n as E, t as D } from "./chunk~cd94ddba57.js";
import { i as O } from "./chunk~9871ee5432.js";
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
      elElementToAppendToHover: r,
      index: a,
      navKey: o,
      bHideStoreHover: s,
      onlyOneDiscountPct: c,
      bPreferDemoStorePage: u,
      bShowEarlyAccessBanner: d,
    } = e,
    p = z(),
    [h, _] = K.useState(!1),
    [v, y] = K.useState(!1),
    [b, x] = K.useState(!1),
    S = K.useRef(!1);
  K.useEffect(() => {
    if (v && !S.current) {
      let e = window.setTimeout(() => {
        ((S.current = !0), x(!0));
      }, 500);
      return () => window.clearTimeout(e);
    }
    return (x(v || h), () => {});
  }, [v, h]);
  let { data: C } = ae(),
    w = !!C?.preferences?.disable_microtrailers,
    T = O(t),
    { data: E } = L(T),
    D = i(n ? E?.related_items?.parent_appid : void 0),
    { data: A } = L(D),
    j = k(T);
  if (!E || !T) return null;
  let M = !!A && !!D,
    N = (0, Z.jsx)(Ie, {
      ...e,
      strExtraParams: e.strExtraParams,
      id: T,
      bIsHovered: b && !w,
      bHasParentAppToDisplay: M,
      onlyOneDiscountPct: c,
      bShowEarlyAccessBanner: d,
      bUsePanel: !s && !p,
    });
  return (0, Z.jsxs)(B, {
    className: W({ [f]: !0, [Q + a]: a == 0 }),
    navEntryPreferPosition: re.PREFERRED_CHILD,
    navKey: o,
    onFocusWithin: y,
    ...j,
    children: [
      (0, Z.jsxs)(m, {
        appid: E.appid,
        children: [
          s
            ? (0, Z.jsx)(`div`, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                children: N,
              })
            : (0, Z.jsx)(l, {
                className: g,
                id: T,
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
          !!r && (0, Z.jsx)(Z.Fragment, { children: r }),
        ],
      }),
      M &&
        (0, Z.jsx)(Fe, {
          strExtraParams: e.strExtraParams,
          parentID: D,
          parentStoreItemDefaultInfo: A,
          childAppType: E.type,
          bPreferDemoStorePage: !!u,
        }),
    ],
  });
}
function Fe(e) {
  let {
      strExtraParams: t,
      parentID: n,
      parentStoreItemDefaultInfo: i,
      childAppType: a,
      bPreferDemoStorePage: o,
    } = e,
    s = I(),
    c = z(),
    { data: l } = V(n),
    d = k(n);
  return l
    ? (0, Z.jsx)(ie, {
        className: u,
        ...A(i, s, c, o, t),
        ...d,
        children: (0, Z.jsxs)(m, {
          appid: i.appid,
          children: [
            (0, Z.jsx)(`div`, {
              className: r,
              children: te(
                a == 11
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
                alt: i.name || ``,
                src: N(l, `small_capsule`),
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
  let y = r ? void 0 : R(F(`${S(v, d)}${i ? `?${i}` : ``}`, m, h)),
    b = r ? B : H,
    x = l && g,
    O = x && s == `library`,
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
              (0, Z.jsx)(T, {
                appids: _,
                hide_status_banners: n,
                show_early_access: f,
              }),
              s != `none` &&
                (0, Z.jsx)(w, {
                  imageType: s,
                  id: t,
                  bPreferAssetWithoutOverride: p,
                }),
              (0, Z.jsx)(C, { id: t }),
              (0, Z.jsx)(`div`, {
                className: W({ [Me]: x, [Ne]: O }),
                children: (0, Z.jsx)(D, {
                  id: t,
                  active: l,
                  bIsHoverMode: !0,
                  eGrowOnActivate: O ? E.k_ETrailerGrowAmount_Implicit : void 0,
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
    { data: o } = U(t);
  return (0, Z.jsxs)(`div`, {
    className: W(Ae, `TwoWidthSideInfo`),
    children: [
      (0, Z.jsx)(`div`, { className: X, children: n }),
      (0, Z.jsx)(`div`, {
        className: je,
        children: (0, Z.jsx)(`span`, { children: i ? a(i) : `` }),
      }),
      (0, Z.jsx)(y, {
        bHideTitle: !0,
        rgTagIDs: o?.map((e) => e.tagid) || [],
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
      elElementToAppendToHover: a,
      bHidePrice: o,
      bHidePlatforms: s,
      creatorAccountID: c,
      bIsHovered: l,
      onlyOneDiscountPct: u,
      strDoubleCapsuleMessage: f,
    } = e,
    { data: p } = L(t),
    { bIsOwned: m } = _(t);
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
      strClassName: a,
      creatorAccountID: o,
      bShowName: s,
      onlyOneDiscountPct: l,
      bShowAddToCart: u,
      bShowWishlistButton: d,
    } = e,
    f = (0, K.useRef)(null),
    [m, g] = (0, K.useState)(!1),
    { data: _ } = L(t);
  if (
    ((0, K.useEffect)(() => {
      f.current && g(f.current.offsetWidth < 370);
    }, [f]),
    !t || !(`appid` in t || `bundleid` in t || `packageid` in t))
  )
    return null;
  let v = !!(d && _?.item_type == 0);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      !(!o && !u && !v && i && n) &&
        (0, Z.jsxs)(`div`, {
          ref: f,
          className: W(`fNtXEMzHz58-`, `CapsuleBottomBar`, a),
          children: [
            o && (0, Z.jsx)(Be, { creatorAccountID: o, ...e }),
            u &&
              (0, Z.jsx)(p, {
                id: t,
                className: W(`RAahmG4F6sc-`, `oqhyMK1Krt0-`),
              }),
            v &&
              `appid` in t &&
              (0, Z.jsx)(M, {
                appid: t.appid,
                className: W(`RAahmG4F6sc-`, `GRw4r5TpD5s-`),
              }),
            !i &&
              (0, Z.jsx)(h, { id: t, bMinimizePlatforms: m, bHideWindows: !0 }),
            !n &&
              (0, Z.jsx)(`span`, {
                className: `_0MLgqm-W-nA-`,
                children: (0, Z.jsx)(c, {
                  id: t,
                  bShowInLibrary: r,
                  onlyOneDiscountPct: l,
                }),
              }),
          ],
        }),
      s && (0, Z.jsx)(ze, { id: t }),
    ],
  });
}
function ze(e) {
  let { id: t } = e,
    { data: n } = L(t);
  return n?.name ? (0, Z.jsx)(`div`, { className: b, children: n.name }) : null;
}
function Be(e) {
  let { creatorAccountID: t, strClassName: n } = e,
    r = (0, K.useMemo)(() => ({ creatorid: t }), [t]),
    { data: i } = L(r),
    { data: a } = V(r);
  if (!i) return null;
  let o = P(a?.clan_avatar, `Medium`),
    c = i.name || ``;
  return (0, Z.jsxs)(`div`, {
    className: W(s, n),
    children: [
      (0, Z.jsx)(`img`, { className: W(v), src: o, alt: c }),
      (0, Z.jsx)(`span`, { className: x, children: c }),
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
