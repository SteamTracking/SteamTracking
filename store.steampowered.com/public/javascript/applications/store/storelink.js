/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { Lt as n, ft as r } from "./libraries.js";
import { Hb as i, Uu as ee, kv as a, nl as te, xb as o } from "./main.js";
var s = e(n(), 1);
function c(e) {
  let { data: t } = a(e);
  return (0, s.useMemo)(
    () => (t ? (t.item_type == 0 ? [t.appid] : t.included_appids || []) : []),
    [t],
  );
}
function ne(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
function l(e) {
  let { data: t } = a({ appid: e });
  return t?.appid || e;
}
function u(e) {
  let { data: t } = a(e);
  return (0, s.useMemo)(() => {
    if (t && t.related_items && t.related_items.parent_appid)
      return { appid: t.related_items.parent_appid };
  }, [t]);
}
function re(e) {
  return (0, s.useMemo)(() => (e ? { appid: e } : void 0), [e]);
}
function ie(e) {
  return (0, s.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
}
var ae = t({
    AlbumCoverImage: () => ue,
    AlbumTitle: () => de,
    AppSummaryWidgetCtn: () => A,
    CarouselCapsuleAnimated: () => k,
    CarouselCapsuleBordered: () => O,
    CarouselDisplay: () => f,
    CarouselPage: () => X,
    CarouselSalePageCapsule: () => j,
    CustomStyle_together: () => ce,
    DefaultCreatorCtn: () => we,
    DesktopTabs: () => ge,
    DisabledBackground: () => g,
    EmptySectionPreview: () => W,
    EventSectionViewAllCtn: () => Z,
    HorizontalScrollInDragForceCursor: () => be,
    Hover: () => S,
    JumpToButton: () => T,
    JumpToSection: () => w,
    JumpedTo: () => C,
    LinkCapsule: () => G,
    LoginButton: () => b,
    MobileTabSelector: () => fe,
    MobileTabSelectorButton: () => me,
    MobileTabSelectorDropDown: () => _e,
    MobileTabSelectorOption: () => ve,
    MobileTabSelectorShortcut: () => he,
    NoTopPadding: () => m,
    SaleBackground: () => L,
    SaleBroadcastCtn: () => M,
    SaleBroadcastSection: () => Y,
    SaleHeaderContainer: () => h,
    SaleNewSizing: () => F,
    SaleOuterContainer: () => P,
    SaleOuterTopMargin: () => N,
    SaleOverlay: () => D,
    SaleOverlayCtn: () => E,
    SalePageBroadcastContextHover: () => le,
    SalePageLogoSet: () => I,
    SaleSection: () => d,
    SaleSectionBackgroundImageGroupEdit: () => Q,
    SaleSectionContainer: () => B,
    SaleSectionCtn: () => p,
    SaleSectionLivePreview: () => x,
    SaleSectionLoginPrompt: () => y,
    SaleSectionSubtext: () => z,
    SaleSectionTabListContainer: () => J,
    SaleSectionTabs: () => _,
    SaleSectionTitleCtn: () => R,
    SaleTabLabel: () => Ce,
    SaleViewAll: () => v,
    TabButton: () => Se,
    TabButtonsCtn: () => xe,
    TabContentsContainer: () => ye,
    Visible: () => pe,
    default: () => Te,
    "duration-app-launch": () => oe,
    fullscreen_bg: () => K,
    fullscreen_bg_video: () => q,
    narrowWidth: () => se,
    preview_placeholder_section: () => U,
    vr_required: () => H,
    vr_supported: () => V,
  }),
  oe = `800ms`,
  se = `500px`,
  d = `_5uN-ZG0AdmQ-`,
  f = `_1z-QD5sz6XA-`,
  p = `BjU45TzF-sA-`,
  m = `QYv8zbj--Ck-`,
  h = `fgKHCBFFyCk-`,
  g = `iZzul86MCHw-`,
  _ = `A3eo6r5OuXY-`,
  v = `dp33i3JEBBw-`,
  y = `FyvPogThu-8-`,
  b = `QSC5IqjmQXQ-`,
  x = `_4V-KrqNLPmQ-`,
  S = `_5ogwM4KIkcI-`,
  C = `Gl6SVCjLh9k-`,
  w = `d2m-PEeOVmY-`,
  T = `BxPO-muNnTI-`,
  E = `aOA-KMNFbEE-`,
  D = `QYd-JimFMMk-`,
  O = `_9PVhWUbR3rk-`,
  k = `giUOrzG6Ujs-`,
  A = `zct4M8EzfNo-`,
  j = `FolDBzXMW2I-`,
  M = `_0pSO3K-0Hs4-`,
  N = `_9D3431c8-XE-`,
  P = `G-t-vlNhbRM-`,
  ce = `BFlA7ucDxBk-`,
  F = `_5NaHSqwUb-k-`,
  I = `RG63SnOtLk0-`,
  L = `XuI82j9l9uk-`,
  R = `_29km0evCwsI-`,
  z = `pL8IDIWBDg8-`,
  B = `EbBLppwfKjc-`,
  V = `EGwn6tH7C3A-`,
  H = `p8u1MHwjP-M-`,
  U = `h-z1TiT2EHc-`,
  W = `lVRRRKgBwVY-`,
  G = `DH6P5MgdIW4-`,
  K = `v-DWOHY9-II-`,
  q = `tXTiGEi7jtU-`,
  le = `v2nIqzREAqo-`,
  ue = `YWSh4uKYrRw-`,
  de = `rSkuhIlNBLw-`,
  J = `_9tUDGLmuFv4-`,
  fe = `_4AjIhoHXOgI-`,
  pe = `Q-Ikm9aXlIY-`,
  me = `j3KNKPgNrvY-`,
  he = `_0TmI5Lz4Zkc-`,
  ge = `_6VXiW9d8-lQ-`,
  _e = `t274EZYLkbA-`,
  ve = `gni2wFLBcSk-`,
  ye = `Rbv-UgEUoaw-`,
  be = `OvCIJMOKBQ8-`,
  Y = `_0lI2wcrU0XU-`,
  X = `CuZwu-t3ukQ-`,
  xe = `bevr-bUWbuk-`,
  Se = `yedrb7j8BiU-`,
  Ce = `hAnG1YoY-8k-`,
  we = `u8sMh8Um98Q-`,
  Z = `JuZBiq95wYE-`,
  Q = `oh4R-N9DrSA-`,
  Te = {
    "duration-app-launch": `800ms`,
    narrowWidth: se,
    SaleSection: d,
    CarouselDisplay: f,
    SaleSectionCtn: p,
    NoTopPadding: m,
    SaleHeaderContainer: h,
    DisabledBackground: g,
    SaleSectionTabs: _,
    SaleViewAll: v,
    SaleSectionLoginPrompt: y,
    LoginButton: b,
    SaleSectionLivePreview: x,
    Hover: S,
    JumpedTo: C,
    JumpToSection: w,
    JumpToButton: T,
    SaleOverlayCtn: E,
    SaleOverlay: D,
    CarouselCapsuleBordered: O,
    CarouselCapsuleAnimated: k,
    AppSummaryWidgetCtn: A,
    CarouselSalePageCapsule: j,
    SaleBroadcastCtn: M,
    SaleOuterTopMargin: N,
    SaleOuterContainer: P,
    CustomStyle_together: ce,
    SaleNewSizing: F,
    SalePageLogoSet: I,
    SaleBackground: L,
    SaleSectionTitleCtn: R,
    SaleSectionSubtext: z,
    SaleSectionContainer: B,
    vr_supported: V,
    vr_required: H,
    preview_placeholder_section: U,
    EmptySectionPreview: W,
    LinkCapsule: G,
    fullscreen_bg: K,
    fullscreen_bg_video: q,
    SalePageBroadcastContextHover: le,
    AlbumCoverImage: ue,
    AlbumTitle: de,
    SaleSectionTabListContainer: J,
    MobileTabSelector: fe,
    Visible: pe,
    MobileTabSelectorButton: me,
    MobileTabSelectorShortcut: he,
    DesktopTabs: ge,
    MobileTabSelectorDropDown: _e,
    MobileTabSelectorOption: ve,
    TabContentsContainer: ye,
    HorizontalScrollInDragForceCursor: be,
    SaleBroadcastSection: Y,
    CarouselPage: X,
    TabButtonsCtn: xe,
    TabButton: Se,
    SaleTabLabel: Ce,
    DefaultCreatorCtn: we,
    EventSectionViewAllCtn: Z,
    SaleSectionBackgroundImageGroupEdit: Q,
  },
  $ = r();
function Ee(e) {
  let {
      className: t,
      url: n,
      style: r,
      children: a,
      bSkipForcingStoreLink: o,
      bOpenInline: s,
      bFocusable: c = !0,
      fnCanTakeFocus: ne,
    } = e,
    l = o ? n : n ? De(n, i.STORE_BASE_URL) : void 0,
    u = ee(l);
  return u
    ? (0, $.jsx)(te, {
        href: u,
        target: i.IN_CLIENT || s ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: c,
        fnCanTakeFocus: ne,
        children: a,
      })
    : (0, $.jsx)(`span`, { style: r, className: t, children: a });
}
function De(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
function Oe(e) {
  let { section: t } = e;
  return !t.label_link || t.label_link_style
    ? null
    : (0, $.jsx)(`div`, {
        className: v,
        children: (0, $.jsx)(Ee, {
          url: t.label_link,
          children: o.Localize(`#btn_live_streams_all`),
        }),
      });
}
export {
  y as A,
  c as B,
  N as C,
  B as D,
  Q as E,
  ae as F,
  ie as H,
  U as I,
  ne as L,
  J as M,
  R as N,
  p as O,
  q as P,
  u as R,
  P as S,
  d as T,
  re as V,
  m as _,
  O as a,
  Y as b,
  j as c,
  Z as d,
  S as f,
  b as g,
  G as h,
  k as i,
  z as j,
  x as k,
  g as l,
  C as m,
  Ee as n,
  f as o,
  T as p,
  A as r,
  X as s,
  Oe as t,
  W as u,
  L as v,
  I as w,
  F as x,
  M as y,
  l as z,
};
