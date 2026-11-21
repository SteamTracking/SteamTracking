/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  $n as r,
  Fs as i,
  Ga as a,
  Ia as o,
  Is as s,
  Mo as c,
  No as l,
  On as u,
  Rn as d,
  Vn as f,
  Zn as p,
  do as m,
  eo as h,
  er as g,
  io as _,
  ks as v,
  n as y,
  qn as b,
  ro as x,
  uo as S,
} from "./chunk~6b8ddcaac8.js";
import { t as C } from "./chunk~4c13037b22.js";
import { d as w, p as T, r as E } from "./chunk~cbbb6ae37c.js";
import { h as D, m as O } from "./chunk~4eed35ad1f.js";
import { n as k, t as A } from "./chunk~56437c278a.js";
import { t as j } from "./chunk~4d16ce5d1a.js";
import { n as M } from "./chunk~d902bc74d6.js";
import {
  $b as N,
  Bc as P,
  El as F,
  Fc as I,
  Gc as ee,
  H as te,
  Nc as L,
  Qc as R,
  Rv as z,
  Td as ne,
  Uv as B,
  Xv as re,
  Zt as ie,
  _l as ae,
  hl as V,
  ny as H,
  rb as U,
  td as W,
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
      bHideStoreHover: l,
      onlyOneDiscountPct: u,
      bPreferDemoStorePage: d,
      bShowEarlyAccessBanner: f,
    } = e,
    m = N(),
    [_, v] = K.useState(!1),
    [y, b] = K.useState(!1),
    [x, S] = K.useState(!1),
    C = K.useRef(!1);
  K.useEffect(() => {
    if (y && !C.current) {
      let e = window.setTimeout(() => {
        ((C.current = !0), S(!0));
      }, 500);
      return () => window.clearTimeout(e);
    }
    return (S(y || _), () => {});
  }, [y, _]);
  let { data: w } = ne(),
    T = !!w?.preferences?.disable_microtrailers,
    E = p(t),
    { data: D } = B(E),
    O = s(n ? D?.related_items?.parent_appid : void 0),
    { data: A } = B(O),
    j = k(E);
  if (!D || !E) return null;
  let M = !!A && !!O,
    I = (0, Z.jsx)(Ie, {
      ...e,
      strExtraParams: e.strExtraParams,
      id: E,
      bIsHovered: x && !T,
      bHasParentAppToDisplay: M,
      onlyOneDiscountPct: u,
      bShowEarlyAccessBanner: f,
      bUsePanel: !l && !m,
    });
  return (0, Z.jsxs)(P, {
    className: L({ [c]: !0, [Q + a]: a == 0 }),
    navEntryPreferPosition: F.PREFERRED_CHILD,
    navKey: o,
    onFocusWithin: b,
    ...j,
    children: [
      (0, Z.jsxs)(g, {
        appid: D.appid,
        children: [
          l
            ? (0, Z.jsx)(`div`, {
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1),
                children: I,
              })
            : (0, Z.jsx)(r, {
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
                children: I,
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
          bPreferDemoStorePage: !!d,
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
    o = W(),
    s = N(),
    { data: c } = z(n),
    u = k(n);
  return c
    ? (0, Z.jsx)(ae, {
        className: _,
        ...A(r, o, s, a, t),
        ...u,
        children: (0, Z.jsxs)(g, {
          appid: r.appid,
          children: [
            (0, Z.jsx)(`div`, {
              className: l,
              children: U(
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
                src: I(c, `small_capsule`),
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
    m = W(),
    h = ie(),
    g = N(),
    _ = i(t),
    { data: v } = B(t);
  if (!v) return null;
  let y = r ? void 0 : R(ee(`${C(v, d)}${a ? `?${a}` : ``}`, m, h)),
    b = r ? P : V,
    x = l && g,
    S = x && s == `library`,
    k = !!u;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsxs)(`div`, {
        className: L({ [Oe]: k }),
        children: [
          (0, Z.jsxs)(b, {
            href: y,
            style: {
              display: `block`,
              cursor: `pointer`,
              position: g ? `relative` : void 0,
            },
            className: L({ [ke]: k }),
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
                className: L({ [Me]: x, [Ne]: S }),
                children: (0, Z.jsx)(O, {
                  id: t,
                  active: l,
                  bIsHoverMode: !0,
                  eGrowOnActivate: S ? D.k_ETrailerGrowAmount_Implicit : void 0,
                }),
              }),
            ],
          }),
          k && (0, Z.jsx)(Le, { id: t, strDoubleCapsuleMessage: u, index: o }),
        ],
      }),
      (0, Z.jsx)(Re, { ...e }),
    ],
  });
}
function Le(e) {
  let { id: t, strDoubleCapsuleMessage: n, index: r } = e,
    { data: i } = re(t),
    { data: a } = H(t);
  return (0, Z.jsxs)(`div`, {
    className: L(Ae, `TwoWidthSideInfo`),
    children: [
      (0, Z.jsx)(`div`, { className: X, children: n }),
      (0, Z.jsx)(`div`, {
        className: je,
        children: (0, Z.jsx)(`span`, { children: i ? o(i) : `` }),
      }),
      (0, Z.jsx)(y, {
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
      elElementToAppendToHover: a,
      bHidePrice: o,
      bHidePlatforms: s,
      creatorAccountID: c,
      bIsHovered: l,
      onlyOneDiscountPct: u,
      strDoubleCapsuleMessage: f,
    } = e,
    { data: p } = B(t),
    { bIsOwned: m } = v(t);
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
      onlyOneDiscountPct: c,
      bShowAddToCart: l,
      bShowWishlistButton: d,
    } = e,
    p = (0, K.useRef)(null),
    [m, h] = (0, K.useState)(!1),
    { data: g } = B(t);
  if (
    ((0, K.useEffect)(() => {
      p.current && h(p.current.offsetWidth < 370);
    }, [p]),
    !t || !(`appid` in t || `bundleid` in t || `packageid` in t))
  )
    return null;
  let _ = !!(d && g?.item_type == 0);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      !(!o && !l && !_ && i && n) &&
        (0, Z.jsxs)(`div`, {
          ref: p,
          className: L(`fNtXEMzHz58-`, `CapsuleBottomBar`, a),
          children: [
            o && (0, Z.jsx)(Be, { creatorAccountID: o, ...e }),
            l &&
              (0, Z.jsx)(u, {
                id: t,
                className: L(`RAahmG4F6sc-`, `oqhyMK1Krt0-`),
              }),
            _ &&
              `appid` in t &&
              (0, Z.jsx)(M, {
                appid: t.appid,
                className: L(`RAahmG4F6sc-`, `GRw4r5TpD5s-`),
              }),
            !i &&
              (0, Z.jsx)(b, { id: t, bMinimizePlatforms: m, bHideWindows: !0 }),
            !n &&
              (0, Z.jsx)(`span`, {
                className: `_0MLgqm-W-nA-`,
                children: (0, Z.jsx)(f, {
                  id: t,
                  bShowInLibrary: r,
                  onlyOneDiscountPct: c,
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
    { data: n } = B(t);
  return n?.name ? (0, Z.jsx)(`div`, { className: x, children: n.name }) : null;
}
function Be(e) {
  let { creatorAccountID: t, strClassName: n } = e,
    r = (0, K.useMemo)(() => ({ creatorid: t }), [t]),
    { data: i } = B(r),
    { data: o } = z(r);
  if (!i) return null;
  let s = te(o?.clan_avatar, `Medium`),
    c = i.name || ``;
  return (0, Z.jsxs)(`div`, {
    className: L(a, n),
    children: [
      (0, Z.jsx)(`img`, { className: L(S), src: s, alt: c }),
      (0, Z.jsx)(`span`, { className: m, children: c }),
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
