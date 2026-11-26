/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import {
  Ho as r,
  Ka as i,
  Uo as a,
  Vn as o,
  Zn as s,
  bo as c,
  er as l,
  fr as u,
  mo as d,
  n as f,
  or as p,
  po as m,
  to as h,
  uo as g,
  ur as _,
  xo as v,
} from "./chunk~6b8ddcaac8.js";
import {
  O as y,
  S as b,
  _ as x,
  k as S,
  p as C,
  v as w,
} from "./chunk~4eed35ad1f.js";
import { t as T } from "./chunk~4c13037b22.js";
import { d as E, p as D, r as O } from "./chunk~cbbb6ae37c.js";
import { n as k, t as A } from "./chunk~56437c278a.js";
import { t as j } from "./chunk~4d16ce5d1a.js";
import { n as M } from "./chunk~d902bc74d6.js";
import {
  $c as N,
  Dl as P,
  Ed as F,
  Ic as ee,
  Kc as te,
  Pc as I,
  Vc as L,
  W as R,
  Wv as z,
  Zt as ne,
  Zv as re,
  ex as B,
  gl as ie,
  ib as ae,
  nd as V,
  ry as H,
  vl as U,
  zv as W,
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
      bHideStoreHover: s,
      onlyOneDiscountPct: c,
      bPreferDemoStorePage: l,
      bShowEarlyAccessBanner: d,
    } = e,
    f = B(),
    [p, m] = K.useState(!1),
    [h, v] = K.useState(!1),
    [y, b] = K.useState(!1),
    x = K.useRef(!1);
  K.useEffect(() => {
    if (h && !x.current) {
      let e = window.setTimeout(() => {
        ((x.current = !0), b(!0));
      }, 500);
      return () => window.clearTimeout(e);
    }
    return (b(h || p), () => {});
  }, [h, p]);
  let { data: w } = F(),
    T = !!w?.preferences?.disable_microtrailers,
    E = _(t),
    { data: D } = z(E),
    O = S(n ? D?.related_items?.parent_appid : void 0),
    { data: A } = z(O),
    j = k(E);
  if (!D || !E) return null;
  let M = !!A && !!O,
    N = (0, Z.jsx)(Ie, {
      ...e,
      strExtraParams: e.strExtraParams,
      id: E,
      bIsHovered: y && !T,
      bHasParentAppToDisplay: M,
      onlyOneDiscountPct: c,
      bShowEarlyAccessBanner: d,
      bUsePanel: !s && !f,
    });
  return (0, Z.jsxs)(L, {
    className: I({ [r]: !0, [Q + a]: a == 0 }),
    navEntryPreferPosition: P.PREFERRED_CHILD,
    navKey: o,
    onFocusWithin: v,
    ...j,
    children: [
      (0, Z.jsxs)(C, {
        appid: D.appid,
        children: [
          s
            ? (0, Z.jsx)(`div`, {
                onMouseEnter: () => m(!0),
                onMouseLeave: () => m(!1),
                children: N,
              })
            : (0, Z.jsx)(u, {
                className: g,
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
          bPreferDemoStorePage: !!l,
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
      bPreferDemoStorePage: o,
    } = e,
    s = V(),
    c = B(),
    { data: l } = W(n),
    u = k(n);
  return l
    ? (0, Z.jsx)(U, {
        className: d,
        ...A(r, s, c, o, t),
        ...u,
        children: (0, Z.jsxs)(C, {
          appid: r.appid,
          children: [
            (0, Z.jsx)(`div`, {
              className: a,
              children: ae(
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
                src: ee(l, `small_capsule`),
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
      imageType: o,
      bHasParentAppToDisplay: s,
      bIsHovered: c,
      strDoubleCapsuleMessage: l,
      bPreferDemoStorePage: u,
      bShowEarlyAccessBanner: d,
      bPreferAssetWithoutOverride: f,
    } = e,
    p = V(),
    m = ne(),
    h = B(),
    g = y(t),
    { data: _ } = z(t);
  if (!_) return null;
  let v = r ? void 0 : N(te(`${T(_, u)}${i ? `?${i}` : ``}`, p, m)),
    b = r ? L : ie,
    S = c && h,
    C = S && o == `library`,
    k = !!l;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsxs)(`div`, {
        className: I({ [Oe]: k }),
        children: [
          (0, Z.jsxs)(b, {
            href: v,
            style: {
              display: `block`,
              cursor: `pointer`,
              position: h ? `relative` : void 0,
            },
            className: I({ [ke]: k }),
            preferredFocus: s,
            focusable: !0,
            children: [
              (0, Z.jsx)(O, {
                appids: g,
                hide_status_banners: n,
                show_early_access: d,
              }),
              o != `none` &&
                (0, Z.jsx)(D, {
                  imageType: o,
                  id: t,
                  bPreferAssetWithoutOverride: f,
                }),
              (0, Z.jsx)(E, { id: t }),
              (0, Z.jsx)(`div`, {
                className: I({ [Me]: S, [Ne]: C }),
                children: (0, Z.jsx)(x, {
                  id: t,
                  active: c,
                  bIsHoverMode: !0,
                  eGrowOnActivate: C ? w.k_ETrailerGrowAmount_Implicit : void 0,
                }),
              }),
            ],
          }),
          k && (0, Z.jsx)(Le, { id: t, strDoubleCapsuleMessage: l, index: a }),
        ],
      }),
      (0, Z.jsx)(Re, { ...e }),
    ],
  });
}
function Le(e) {
  let { id: t, strDoubleCapsuleMessage: n, index: r } = e,
    { data: a } = re(t),
    { data: o } = H(t);
  return (0, Z.jsxs)(`div`, {
    className: I(Ae, `TwoWidthSideInfo`),
    children: [
      (0, Z.jsx)(`div`, { className: X, children: n }),
      (0, Z.jsx)(`div`, {
        className: je,
        children: (0, Z.jsx)(`span`, { children: a ? i(a) : `` }),
      }),
      (0, Z.jsx)(f, {
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
      bHidePlatforms: c,
      creatorAccountID: l,
      bIsHovered: u,
      onlyOneDiscountPct: d,
      strDoubleCapsuleMessage: f,
    } = e,
    { data: p } = z(t),
    { bIsOwned: m } = b(t);
  return i && p && p.item_type == 0 && p.appid
    ? (0, Z.jsx)(s, { appid: p.appid, bIsMuted: u })
    : a
      ? null
      : (0, Z.jsx)($, {
          id: t,
          bHidePrice: o,
          bShowInLibraryInsteadOfPrice: !!(m && n),
          bHidePlatforms: c,
          creatorAccountID: l,
          bShowName: e.bShowName,
          onlyOneDiscountPct: d,
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
      creatorAccountID: s,
      bShowName: c,
      onlyOneDiscountPct: u,
      bShowAddToCart: d,
      bShowWishlistButton: f,
    } = e,
    m = (0, K.useRef)(null),
    [h, g] = (0, K.useState)(!1),
    { data: _ } = z(t);
  if (
    ((0, K.useEffect)(() => {
      m.current && g(m.current.offsetWidth < 370);
    }, [m]),
    !t || !(`appid` in t || `bundleid` in t || `packageid` in t))
  )
    return null;
  let v = !!(f && _?.item_type == 0);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      !(!s && !d && !v && i && n) &&
        (0, Z.jsxs)(`div`, {
          ref: m,
          className: I(`fNtXEMzHz58-`, `CapsuleBottomBar`, a),
          children: [
            s && (0, Z.jsx)(Be, { creatorAccountID: s, ...e }),
            d &&
              (0, Z.jsx)(o, {
                id: t,
                className: I(`RAahmG4F6sc-`, `oqhyMK1Krt0-`),
              }),
            v &&
              `appid` in t &&
              (0, Z.jsx)(M, {
                appid: t.appid,
                className: I(`RAahmG4F6sc-`, `GRw4r5TpD5s-`),
              }),
            !i &&
              (0, Z.jsx)(p, { id: t, bMinimizePlatforms: h, bHideWindows: !0 }),
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
      c && (0, Z.jsx)(ze, { id: t }),
    ],
  });
}
function ze(e) {
  let { id: t } = e,
    { data: n } = z(t);
  return n?.name ? (0, Z.jsx)(`div`, { className: m, children: n.name }) : null;
}
function Be(e) {
  let { creatorAccountID: t, strClassName: n } = e,
    r = (0, K.useMemo)(() => ({ creatorid: t }), [t]),
    { data: i } = z(r),
    { data: a } = W(r);
  if (!i) return null;
  let o = R(a?.clan_avatar, `Medium`),
    s = i.name || ``;
  return (0, Z.jsxs)(`div`, {
    className: I(h, n),
    children: [
      (0, Z.jsx)(`img`, { className: I(c), src: o, alt: s }),
      (0, Z.jsx)(`span`, { className: v, children: s }),
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
