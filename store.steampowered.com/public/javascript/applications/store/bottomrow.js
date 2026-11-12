/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  $i as r,
  Bt as i,
  Eo as a,
  Ht as o,
  Ki as s,
  Pi as c,
  Pt as l,
  Sa as u,
  Ti as d,
  To as f,
  Ui as p,
  Vt as m,
  ea as h,
  jt as g,
  n as _,
  qi as v,
  xa as y,
  xt as b,
  yo as x,
} from "./chunk~6b8ddcaac8.js";
import { t as S } from "./chunk~4c13037b22.js";
import { g as C, i as w, m as T, r as E, v as D } from "./chunk~cbbb6ae37c.js";
import { n as O, t as k } from "./chunk~cd94ddba57.js";
import { t as A } from "./chunk~4d16ce5d1a.js";
import { n as j } from "./chunk~d902bc74d6.js";
import {
  Ec as M,
  H as N,
  Ic as ee,
  Jt as P,
  Jy as F,
  Ku as I,
  Pv as L,
  Uc as te,
  Vv as ne,
  Wb as R,
  _l as re,
  cl as ie,
  gd as ae,
  jc as z,
  kv as B,
  ol as V,
  qv as H,
  wc as U,
} from "./main.js";
function W() {
  return { width: 231, height: 87 };
}
var G = e(t()),
  K = `KPyQrAYKerM-`,
  q = `wGsVN7BCL-8-`,
  J = `_3k6zW2BR0Ec-`,
  oe = `ALwt1eWVvf0-`,
  se = `_630lLH8fjII-`,
  ce = `_6lXwKbKQRZM-`,
  le = `O2ZRoYfc1Qk-`,
  ue = `WVCDoL13yGg-`,
  de = `pBwTyvQh7iI-`,
  fe = `lWa9AGKkKhU-`,
  pe = `_2w1L-tFibuk-`,
  me = `FNsnxK3tYRI-`,
  he = `AYD-9JVfXTU-`,
  ge = `R-OtVF8pTAw-`,
  _e = `XfQfXm4a0JE-`,
  ve = `_5IGBtrxnWJ0-`,
  ye = `bVbljBZi-wU-`,
  be = `olyf0KJqJlE-`,
  xe = `v2ki0uInhRU-`,
  Se = `_7R6l0Of6MJ0-`,
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
  Me = `GKABXApBGKQ-`,
  Z = n(),
  Q = `capsule_index_`;
function Ne(e) {
  let {
      capsule: t,
      bShowParentApp: n,
      elElementToAppendToHover: r,
      index: i,
      navKey: s,
      bHideStoreHover: c,
      onlyOneDiscountPct: l,
      bPreferDemoStorePage: u,
      bShowEarlyAccessBanner: d,
    } = e,
    f = R(),
    [h, g] = G.useState(!1),
    [_, v] = G.useState(!1),
    [b, x] = G.useState(!1),
    S = G.useRef(!1);
  G.useEffect(() => {
    if (_ && !S.current) {
      let e = window.setTimeout(() => {
        ((S.current = !0), x(!0));
      }, 500);
      return () => window.clearTimeout(e);
    }
    return (x(_ || h), () => {});
  }, [_, h]);
  let { data: C } = ae(),
    w = !!C?.preferences?.disable_microtrailers,
    E = T(t),
    { data: D } = L(E),
    O = a(n ? D?.related_items?.parent_appid : void 0),
    { data: k } = L(O);
  if (!D || !E) return null;
  let A = !!k && !!O,
    j = (0, Z.jsx)(Fe, {
      ...e,
      strExtraParams: e.strExtraParams,
      id: E,
      bIsHovered: b && !w,
      bHasParentAppToDisplay: A,
      onlyOneDiscountPct: l,
      bShowEarlyAccessBanner: d,
      bUsePanel: !c && !f,
    });
  return (0, Z.jsxs)(z, {
    className: U({ [y]: !0, [Q + i]: i == 0 }),
    navEntryPreferPosition: re.PREFERRED_CHILD,
    navKey: s,
    onFocusWithin: v,
    children: [
      (0, Z.jsxs)(o, {
        appid: D.appid,
        children: [
          c
            ? (0, Z.jsx)(`div`, {
                onMouseEnter: () => g(!0),
                onMouseLeave: () => g(!1),
                children: j,
              })
            : (0, Z.jsx)(m, {
                className: p,
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
                children: j,
              }),
          !!r && (0, Z.jsx)(Z.Fragment, { children: r }),
        ],
      }),
      A &&
        (0, Z.jsx)(Pe, {
          strExtraParams: e.strExtraParams,
          parentID: O,
          parentStoreItemDefaultInfo: k,
          childAppType: D.type,
          bPreferDemoStorePage: !!u,
        }),
    ],
  });
}
function Pe(e) {
  let {
      strExtraParams: t,
      parentID: n,
      parentStoreItemDefaultInfo: r,
      childAppType: i,
      bPreferDemoStorePage: a,
    } = e,
    s = I(),
    c = R(),
    { data: l } = B(n);
  return l
    ? (0, Z.jsx)(ie, {
        className: v,
        ...E(r, s, c, a, t),
        children: (0, Z.jsxs)(o, {
          appid: r.appid,
          children: [
            (0, Z.jsx)(`div`, {
              className: u,
              children: F(
                i == 11
                  ? `#SalePage_ParentApp_SoundTrack`
                  : `#SalePage_ParentApp_DLC`,
              ),
            }),
            (0, Z.jsx)(A, {
              id: n,
              strExtraParams: t,
              children: (0, Z.jsx)(`img`, {
                loading: `lazy`,
                className: Y,
                alt: r.name || ``,
                src: M(l, `small_capsule`),
                ...W(),
              }),
            }),
          ],
        }),
      })
    : null;
}
function Fe(e) {
  let {
      id: t,
      bHideStatusBanners: n,
      bUsePanel: r,
      strExtraParams: i,
      index: a,
      imageType: o,
      bHasParentAppToDisplay: s,
      bIsHovered: c,
      strDoubleCapsuleMessage: l,
      bPreferDemoStorePage: u,
      bShowEarlyAccessBanner: d,
      bPreferAssetWithoutOverride: p,
    } = e,
    m = I(),
    h = P(),
    g = R(),
    _ = f(t),
    { data: v } = L(t);
  if (!v) return null;
  let y = r ? void 0 : te(ee(`${S(v, u)}${i ? `?${i}` : ``}`, m, h)),
    b = r ? z : V,
    x = c && g,
    T = x && o == `library`,
    E = !!l;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsxs)(`div`, {
        className: U({ [De]: E }),
        children: [
          (0, Z.jsxs)(b, {
            href: y,
            style: {
              display: `block`,
              cursor: `pointer`,
              position: g ? `relative` : void 0,
            },
            className: U({ [Oe]: E }),
            preferredFocus: s,
            focusable: !0,
            children: [
              (0, Z.jsx)(w, {
                appids: _,
                hide_status_banners: n,
                show_early_access: d,
              }),
              o != `none` &&
                (0, Z.jsx)(D, {
                  imageType: o,
                  id: t,
                  bPreferAssetWithoutOverride: p,
                }),
              (0, Z.jsx)(C, { id: t }),
              (0, Z.jsx)(`div`, {
                className: U({ [je]: x, [Me]: T }),
                children: (0, Z.jsx)(k, {
                  id: t,
                  active: c,
                  bIsHoverMode: !0,
                  eGrowOnActivate: T ? O.k_ETrailerGrowAmount_Implicit : void 0,
                }),
              }),
            ],
          }),
          E && (0, Z.jsx)(Ie, { id: t, strDoubleCapsuleMessage: l, index: a }),
        ],
      }),
      (0, Z.jsx)(Le, { ...e }),
    ],
  });
}
function Ie(e) {
  let { id: t, strDoubleCapsuleMessage: n, index: r } = e,
    { data: i } = ne(t),
    { data: a } = H(t);
  return (0, Z.jsxs)(`div`, {
    className: U(ke, `TwoWidthSideInfo`),
    children: [
      (0, Z.jsx)(`div`, { className: Ae, children: n }),
      (0, Z.jsx)(`div`, {
        className: X,
        children: (0, Z.jsx)(`span`, { children: i ? d(i) : `` }),
      }),
      (0, Z.jsx)(_, {
        bHideTitle: !0,
        rgTagIDs: a?.map((e) => e.tagid) || [],
        instanceNum: r,
      }),
    ],
  });
}
function Le(e) {
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
      strDoubleCapsuleMessage: d,
    } = e,
    { data: f } = L(t),
    { bIsOwned: p } = x(t);
  return i && f && f.item_type == 0 && f.appid
    ? (0, Z.jsx)(g, { appid: f.appid, bIsMuted: l })
    : a
      ? null
      : (0, Z.jsx)($, {
          id: t,
          bHidePrice: o,
          bShowInLibraryInsteadOfPrice: !!(p && n),
          bHidePlatforms: s,
          creatorAccountID: c,
          bShowName: e.bShowName,
          onlyOneDiscountPct: u,
          bShowWishlistButton: !!d,
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
      onlyOneDiscountPct: u,
      bShowAddToCart: d,
      bShowWishlistButton: f,
    } = e,
    p = (0, G.useRef)(null),
    [m, h] = (0, G.useState)(!1),
    { data: g } = L(t);
  if (
    ((0, G.useEffect)(() => {
      p.current && h(p.current.offsetWidth < 370);
    }, [p]),
    !t || !(`appid` in t || `bundleid` in t || `packageid` in t))
  )
    return null;
  let _ = !!(f && g?.item_type == 0);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      !(!s && !d && !_ && a && n) &&
        (0, Z.jsxs)(`div`, {
          ref: p,
          className: U(`fNtXEMzHz58-`, `CapsuleBottomBar`, o),
          children: [
            s && (0, Z.jsx)(ze, { creatorAccountID: s, ...e }),
            d &&
              (0, Z.jsx)(b, {
                id: t,
                className: U(`RAahmG4F6sc-`, `oqhyMK1Krt0-`),
              }),
            _ &&
              `appid` in t &&
              (0, Z.jsx)(j, {
                appid: t.appid,
                className: U(`RAahmG4F6sc-`, `GRw4r5TpD5s-`),
              }),
            !a &&
              (0, Z.jsx)(i, { id: t, bMinimizePlatforms: m, bHideWindows: !0 }),
            !n &&
              (0, Z.jsx)(`span`, {
                className: `_0MLgqm-W-nA-`,
                children: (0, Z.jsx)(l, {
                  id: t,
                  bShowInLibrary: r,
                  onlyOneDiscountPct: u,
                }),
              }),
          ],
        }),
      c && (0, Z.jsx)(Re, { id: t }),
    ],
  });
}
function Re(e) {
  let { id: t } = e,
    { data: n } = L(t);
  return n?.name ? (0, Z.jsx)(`div`, { className: s, children: n.name }) : null;
}
function ze(e) {
  let { creatorAccountID: t, strClassName: n } = e,
    i = (0, G.useMemo)(() => ({ creatorid: t }), [t]),
    { data: a } = L(i),
    { data: o } = B(i);
  if (!a) return null;
  let s = N(o?.clan_avatar, `Medium`),
    l = a.name || ``;
  return (0, Z.jsxs)(`div`, {
    className: U(c, n),
    children: [
      (0, Z.jsx)(`img`, { className: U(r), src: s, alt: l }),
      (0, Z.jsx)(`span`, { className: h, children: l }),
    ],
  });
}
export {
  q as C,
  le as D,
  me as E,
  Se as O,
  _e as S,
  xe as T,
  J as _,
  Y as a,
  fe as b,
  ge as c,
  ce as d,
  ve as f,
  be as g,
  pe as h,
  Te as i,
  oe as l,
  de as m,
  Ne as n,
  Ee as o,
  Ce as p,
  Q as r,
  we as s,
  $ as t,
  ue as u,
  K as v,
  he as w,
  se as x,
  ye as y,
};
