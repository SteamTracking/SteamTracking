/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { Lt as n, ft as r } from "./libraries.js";
import { Av as i, Sb as ee, Ub as te, Wu as ne, rl as re } from "./main.js";
var a = e(n(), 1);
function o(e) {
  let { data: t } = i(e);
  return (0, a.useMemo)(
    () => (t ? (t.item_type == 0 ? [t.appid] : t.included_appids || []) : []),
    [t],
  );
}
function ie(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
function s(e) {
  let { data: t } = i({ appid: e });
  return t?.appid || e;
}
function c(e) {
  let { data: t } = i(e);
  return (0, a.useMemo)(() => {
    if (t && t.related_items && t.related_items.parent_appid)
      return { appid: t.related_items.parent_appid };
  }, [t]);
}
function ae(e) {
  return (0, a.useMemo)(() => (e ? { appid: e } : void 0), [e]);
}
function oe(e) {
  return (0, a.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
}
var se = t({
    AlbumCoverImage: () => de,
    AlbumTitle: () => fe,
    AppSummaryWidgetCtn: () => O,
    CarouselCapsuleAnimated: () => D,
    CarouselCapsuleBordered: () => E,
    CarouselDisplay: () => u,
    CarouselPage: () => Y,
    CarouselSalePageCapsule: () => k,
    CustomStyle_together: () => ue,
    DefaultCreatorCtn: () => X,
    DesktopTabs: () => _e,
    DisabledBackground: () => m,
    EmptySectionPreview: () => H,
    EventSectionViewAllCtn: () => Z,
    HorizontalScrollInDragForceCursor: () => xe,
    Hover: () => b,
    JumpToButton: () => C,
    JumpToSection: () => S,
    JumpedTo: () => x,
    LinkCapsule: () => U,
    LoginButton: () => v,
    MobileTabSelector: () => pe,
    MobileTabSelectorButton: () => he,
    MobileTabSelectorDropDown: () => ve,
    MobileTabSelectorOption: () => ye,
    MobileTabSelectorShortcut: () => ge,
    NoTopPadding: () => f,
    SaleBackground: () => F,
    SaleBroadcastCtn: () => A,
    SaleBroadcastSection: () => J,
    SaleHeaderContainer: () => p,
    SaleNewSizing: () => N,
    SaleOuterContainer: () => M,
    SaleOuterTopMargin: () => j,
    SaleOverlay: () => T,
    SaleOverlayCtn: () => w,
    SalePageBroadcastContextHover: () => K,
    SalePageLogoSet: () => P,
    SaleSection: () => l,
    SaleSectionBackgroundImageGroupEdit: () => Q,
    SaleSectionContainer: () => R,
    SaleSectionCtn: () => d,
    SaleSectionLivePreview: () => y,
    SaleSectionLoginPrompt: () => _,
    SaleSectionSubtext: () => L,
    SaleSectionTabListContainer: () => q,
    SaleSectionTabs: () => h,
    SaleSectionTitleCtn: () => I,
    SaleTabLabel: () => we,
    SaleViewAll: () => g,
    TabButton: () => Ce,
    TabButtonsCtn: () => Se,
    TabContentsContainer: () => be,
    Visible: () => me,
    default: () => Te,
    "duration-app-launch": () => ce,
    fullscreen_bg: () => W,
    fullscreen_bg_video: () => G,
    narrowWidth: () => le,
    preview_placeholder_section: () => V,
    vr_required: () => B,
    vr_supported: () => z,
  }),
  ce = `800ms`,
  le = `500px`,
  l = `_5uN-ZG0AdmQ-`,
  u = `_1z-QD5sz6XA-`,
  d = `BjU45TzF-sA-`,
  f = `QYv8zbj--Ck-`,
  p = `fgKHCBFFyCk-`,
  m = `iZzul86MCHw-`,
  h = `A3eo6r5OuXY-`,
  g = `dp33i3JEBBw-`,
  _ = `FyvPogThu-8-`,
  v = `QSC5IqjmQXQ-`,
  y = `_4V-KrqNLPmQ-`,
  b = `_5ogwM4KIkcI-`,
  x = `Gl6SVCjLh9k-`,
  S = `d2m-PEeOVmY-`,
  C = `BxPO-muNnTI-`,
  w = `aOA-KMNFbEE-`,
  T = `QYd-JimFMMk-`,
  E = `_9PVhWUbR3rk-`,
  D = `giUOrzG6Ujs-`,
  O = `zct4M8EzfNo-`,
  k = `FolDBzXMW2I-`,
  A = `_0pSO3K-0Hs4-`,
  j = `_9D3431c8-XE-`,
  M = `G-t-vlNhbRM-`,
  ue = `BFlA7ucDxBk-`,
  N = `_5NaHSqwUb-k-`,
  P = `RG63SnOtLk0-`,
  F = `XuI82j9l9uk-`,
  I = `_29km0evCwsI-`,
  L = `pL8IDIWBDg8-`,
  R = `EbBLppwfKjc-`,
  z = `EGwn6tH7C3A-`,
  B = `p8u1MHwjP-M-`,
  V = `h-z1TiT2EHc-`,
  H = `lVRRRKgBwVY-`,
  U = `DH6P5MgdIW4-`,
  W = `v-DWOHY9-II-`,
  G = `tXTiGEi7jtU-`,
  K = `v2nIqzREAqo-`,
  de = `YWSh4uKYrRw-`,
  fe = `rSkuhIlNBLw-`,
  q = `_9tUDGLmuFv4-`,
  pe = `_4AjIhoHXOgI-`,
  me = `Q-Ikm9aXlIY-`,
  he = `j3KNKPgNrvY-`,
  ge = `_0TmI5Lz4Zkc-`,
  _e = `_6VXiW9d8-lQ-`,
  ve = `t274EZYLkbA-`,
  ye = `gni2wFLBcSk-`,
  be = `Rbv-UgEUoaw-`,
  xe = `OvCIJMOKBQ8-`,
  J = `_0lI2wcrU0XU-`,
  Y = `CuZwu-t3ukQ-`,
  Se = `bevr-bUWbuk-`,
  Ce = `yedrb7j8BiU-`,
  we = `hAnG1YoY-8k-`,
  X = `u8sMh8Um98Q-`,
  Z = `JuZBiq95wYE-`,
  Q = `oh4R-N9DrSA-`,
  Te = {
    "duration-app-launch": `800ms`,
    narrowWidth: le,
    SaleSection: l,
    CarouselDisplay: u,
    SaleSectionCtn: d,
    NoTopPadding: f,
    SaleHeaderContainer: p,
    DisabledBackground: m,
    SaleSectionTabs: h,
    SaleViewAll: g,
    SaleSectionLoginPrompt: _,
    LoginButton: v,
    SaleSectionLivePreview: y,
    Hover: b,
    JumpedTo: x,
    JumpToSection: S,
    JumpToButton: C,
    SaleOverlayCtn: w,
    SaleOverlay: T,
    CarouselCapsuleBordered: E,
    CarouselCapsuleAnimated: D,
    AppSummaryWidgetCtn: O,
    CarouselSalePageCapsule: k,
    SaleBroadcastCtn: A,
    SaleOuterTopMargin: j,
    SaleOuterContainer: M,
    CustomStyle_together: ue,
    SaleNewSizing: N,
    SalePageLogoSet: P,
    SaleBackground: F,
    SaleSectionTitleCtn: I,
    SaleSectionSubtext: L,
    SaleSectionContainer: R,
    vr_supported: z,
    vr_required: B,
    preview_placeholder_section: V,
    EmptySectionPreview: H,
    LinkCapsule: U,
    fullscreen_bg: W,
    fullscreen_bg_video: G,
    SalePageBroadcastContextHover: K,
    AlbumCoverImage: de,
    AlbumTitle: fe,
    SaleSectionTabListContainer: q,
    MobileTabSelector: pe,
    Visible: me,
    MobileTabSelectorButton: he,
    MobileTabSelectorShortcut: ge,
    DesktopTabs: _e,
    MobileTabSelectorDropDown: ve,
    MobileTabSelectorOption: ye,
    TabContentsContainer: be,
    HorizontalScrollInDragForceCursor: xe,
    SaleBroadcastSection: J,
    CarouselPage: Y,
    TabButtonsCtn: Se,
    TabButton: Ce,
    SaleTabLabel: we,
    DefaultCreatorCtn: X,
    EventSectionViewAllCtn: Z,
    SaleSectionBackgroundImageGroupEdit: Q,
  },
  $ = r();
function Ee(e) {
  let {
      className: t,
      url: n,
      style: r,
      children: i,
      bSkipForcingStoreLink: ee,
      bOpenInline: a,
      bFocusable: o = !0,
      fnCanTakeFocus: ie,
    } = e,
    s = ee ? n : n ? De(n, te.STORE_BASE_URL) : void 0,
    c = ne(s);
  return c
    ? (0, $.jsx)(re, {
        href: c,
        target: te.IN_CLIENT || a ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: o,
        fnCanTakeFocus: ie,
        children: i,
      })
    : (0, $.jsx)(`span`, { style: r, className: t, children: i });
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
        className: g,
        children: (0, $.jsx)(Ee, {
          url: t.label_link,
          children: ee.Localize(`#btn_live_streams_all`),
        }),
      });
}
export {
  _ as A,
  o as B,
  j as C,
  R as D,
  Q as E,
  se as F,
  oe as H,
  V as I,
  ie as L,
  q as M,
  I as N,
  d as O,
  G as P,
  c as R,
  M as S,
  l as T,
  ae as V,
  f as _,
  E as a,
  J as b,
  k as c,
  Z as d,
  b as f,
  v as g,
  U as h,
  D as i,
  L as j,
  y as k,
  m as l,
  x as m,
  Ee as n,
  u as o,
  C as p,
  O as r,
  Y as s,
  Oe as t,
  H as u,
  F as v,
  P as w,
  N as x,
  A as y,
  s as z,
};
