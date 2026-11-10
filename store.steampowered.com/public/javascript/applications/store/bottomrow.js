/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { B as r, V as i } from "./storelink.js";
import {
  $ as a,
  Gr as o,
  I as s,
  Ir as c,
  Mi as l,
  Ni as u,
  W as d,
  ba as f,
  di as p,
  ei as m,
  et as h,
  ii as g,
  ja as _,
  n as v,
  q as y,
  ri as b,
  tt as x,
  ui as S,
} from "./saletags.js";
import { t as C } from "./storeurl.js";
import {
  f as ee,
  h as w,
  m as T,
  n as E,
  r as D,
} from "./salestoreitemutils.js";
import { n as O, t as k } from "./microtrailerdisplay.js";
import { t as A } from "./storegamehover.js";
import { n as j } from "./salewishlistbutton.js";
import {
  Ac as M,
  Av as N,
  Bb as P,
  Cc as F,
  Fc as te,
  H as I,
  Hc as ne,
  Hu as L,
  Lv as re,
  Tc as ie,
  Tv as R,
  Uv as ae,
  Wy as z,
  Xt as B,
  al as V,
  fd as H,
  ml as U,
  rl as W,
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
      navKey: o,
      bHideStoreHover: s,
      onlyOneDiscountPct: c,
      bPreferDemoStorePage: u,
      bShowEarlyAccessBanner: d,
    } = e,
    p = P(),
    [g, _] = K.useState(!1),
    [v, y] = K.useState(!1),
    [b, S] = K.useState(!1),
    C = K.useRef(!1);
  K.useEffect(() => {
    if (v && !C.current) {
      let e = window.setTimeout(() => {
        ((C.current = !0), S(!0));
      }, 500);
      return () => window.clearTimeout(e);
    }
    return (S(v || g), () => {});
  }, [v, g]);
  let { data: w } = H(),
    T = !!w?.preferences?.disable_microtrailers,
    E = ee(t),
    { data: D } = N(E),
    O = i(n ? D?.related_items?.parent_appid : void 0),
    { data: k } = N(O);
  if (!D || !E) return null;
  let A = !!k && !!O,
    j = (0, Z.jsx)(Pe, {
      ...e,
      strExtraParams: e.strExtraParams,
      id: E,
      bIsHovered: b && !T,
      bHasParentAppToDisplay: A,
      onlyOneDiscountPct: c,
      bShowEarlyAccessBanner: d,
      bUsePanel: !s && !p,
    });
  return (0, Z.jsxs)(M, {
    className: F({ [l]: !0, [f]: b && !T && p, [Q + a]: a == 0 }),
    navEntryPreferPosition: U.PREFERRED_CHILD,
    navKey: o,
    onFocusWithin: e.imageType == `library` ? void 0 : y,
    children: [
      (0, Z.jsxs)(x, {
        appid: D.appid,
        children: [
          s
            ? (0, Z.jsx)(`div`, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                children: j,
              })
            : (0, Z.jsx)(h, {
                className: m,
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
        (0, Z.jsx)(Ne, {
          strExtraParams: e.strExtraParams,
          parentID: O,
          parentStoreItemDefaultInfo: k,
          childAppType: D.type,
          bPreferDemoStorePage: !!u,
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
    s = P(),
    { data: c } = R(n);
  return c
    ? (0, Z.jsx)(V, {
        className: g,
        ...E(r, o, s, a, t),
        children: (0, Z.jsxs)(x, {
          appid: r.appid,
          children: [
            (0, Z.jsx)(`div`, {
              className: u,
              children: z(
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
                src: ie(c, `small_capsule`),
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
    h = B(),
    g = P(),
    _ = r(t),
    { data: v } = N(t);
  if (!v) return null;
  let y = i ? void 0 : ne(te(`${C(v, d)}${a ? `?${a}` : ``}`, m, h)),
    b = i ? M : W,
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
              (0, Z.jsx)(D, {
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
              (0, Z.jsx)(T, { id: t }),
              (0, Z.jsx)(`div`, {
                className: F({ [je]: x }),
                children: (0, Z.jsx)(k, {
                  id: t,
                  active: l,
                  bIsHoverMode: !0,
                  eGrowOnActivate: x ? O.k_ETrailerGrowAmount_Implicit : void 0,
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
    { data: i } = re(t),
    { data: a } = ae(t);
  return (0, Z.jsxs)(`div`, {
    className: F(ke, `TwoWidthSideInfo`),
    children: [
      (0, Z.jsx)(`div`, { className: Ae, children: n }),
      (0, Z.jsx)(`div`, {
        className: X,
        children: (0, Z.jsx)(`span`, { children: i ? c(i) : `` }),
      }),
      (0, Z.jsx)(v, {
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
    { data: p } = N(t),
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
      strClassName: o,
      creatorAccountID: c,
      bShowName: l,
      onlyOneDiscountPct: u,
      bShowAddToCart: d,
      bShowWishlistButton: f,
    } = e,
    p = (0, K.useRef)(null),
    [m, h] = (0, K.useState)(!1),
    { data: g } = N(t);
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
              (0, Z.jsx)(j, {
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
    { data: n } = N(t);
  return n?.name ? (0, Z.jsx)(`div`, { className: b, children: n.name }) : null;
}
function Re(e) {
  let { creatorAccountID: t, strClassName: n } = e,
    r = (0, K.useMemo)(() => ({ creatorid: t }), [t]),
    { data: i } = N(r),
    { data: a } = R(r);
  if (!i) return null;
  let s = I(a?.clan_avatar, `Medium`),
    c = i.name || ``;
  return (0, Z.jsxs)(`div`, {
    className: F(o, n),
    children: [
      (0, Z.jsx)(`img`, { className: F(S), src: s, alt: c }),
      (0, Z.jsx)(`span`, { className: p, children: c }),
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
