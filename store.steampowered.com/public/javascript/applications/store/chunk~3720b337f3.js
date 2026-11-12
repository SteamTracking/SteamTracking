/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~f025431ab0.js";
import { Lt as e, ft as t } from "./chunk~01cfc309bf.js";
import { B as n, at as r, i } from "./chunk~6b8ddcaac8.js";
import { r as a } from "./chunk~4c761eb6f4.js";
import { A as o } from "./chunk~f57d770d64.js";
import { n as s, r as c } from "./chunk~b980924b6a.js";
import { r as l } from "./chunk~d43c81a658.js";
import { f as u } from "./chunk~618fb52a90.js";
import { n as d } from "./chunk~e70aabe4d7.js";
import { n as f } from "./chunk~710e3cfd2f.js";
import { n as p, t as ee } from "./chunk~ffe4581a06.js";
import { c as m } from "./chunk~7b4b9eb713.js";
import {
  $i as te,
  Eb as h,
  Jy as g,
  Rr as _,
  Vi as v,
  Wb as y,
  Wy as b,
  Xb as x,
  jc as S,
  qb as C,
  wc as w,
} from "./main.js";
e();
function T(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function ne(e) {
  return T(e).map((t) => ({
    ...e,
    sale_page_cross_promo_sales: [t],
    capsules: t.capsules ?? [],
  }));
}
function re(e) {
  return T(e)[0]?.event_gid || void 0;
}
function ie(e) {
  return T(e).flatMap((e) => e.event_gid || []);
}
function ae(e) {
  return T(e)[0]?.featured_app_tagid || void 0;
}
function oe(e) {
  let t = T(e);
  return t.length > 0 && t.every((e) => (e.capsules?.length ?? 0) > 0);
}
function se(e, t) {
  return ce(e) ? (t?.BIsVisibleEvent() ? null : `missing`) : `setup`;
}
function ce(e) {
  let t = T(e)[0];
  return !!t?.event_gid && (!!t.featured_app_tagid || !!t.capsules?.length);
}
function E(e, t) {
  return e
    ? g(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : g(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function D(e, t) {
  let n = b.GetELanguageFallback(t),
    r =
      e.jsondata.localized_sale_cross_promo_logo_image?.findIndex((e) => !!e) ??
      -1;
  return (
    e.GetImageURL(`sale_cross_promo_logo`, t) ||
    e.GetImageURL(`sale_cross_promo_logo`, n) ||
    (r >= 0 ? e.GetImageURL(`sale_cross_promo_logo`, r) : void 0) ||
    e.GetImageURL(`sale_logo`, t) ||
    e.GetImageURL(`sale_logo`, n)
  );
}
function O(e) {
  return 3;
}
function k(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${C.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var A = `poster`,
  j = `${A}.avif`,
  M = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function N(e) {
  let t = e.video_webm_src || e.video_mp4_src;
  if (!t || e.image?.includes(`.${A}.`)) return e.image;
  let n = M.exec(t);
  return n ? `${n[1]}.${j}` : e.image;
}
function P(e) {
  if (!e?.clan_accountid || !e.clan_event_gid) return null;
  let t = e.cross_promo;
  return {
    clanAccountID: e.clan_accountid,
    strEventGID: e.clan_event_gid,
    strName: e.event_name ?? ``,
    rtEndTime: e.rtime32_end_time || void 0,
    strSummary: e.summary || void 0,
    strCapsuleURL: L(e),
    strSaleURL: e.store_path ? C.STORE_BASE_URL + e.store_path : void 0,
    strBackgroundURL: k(e.clan_accountid, t?.background_image),
    strScrimColor: t?.scrim_color || void 0,
    strLogoURL: I(e.clan_accountid, t?.logo?.image),
    eDesktopLayout: t?.desktop_layout === `logo_top` ? `logo_top` : void 0,
  };
}
function F(e, t) {
  let n = d(e ?? void 0, `capsule`, t);
  if (!e) return;
  let r = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: r,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: m(e) ?? void 0,
    strBackgroundURL: k(
      r,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: D(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function I(e, t) {
  if (t) return t.startsWith(`http`) ? t : a.GenerateURLFromHashAndExt(e, t);
}
function L(e) {
  let t = e.capsule_image?.image;
  if (t && e.clan_accountid)
    return e.capsule_image?.from_body
      ? a.ReplacementTokenToClanImageURL(t)
      : I(e.clan_accountid, t);
}
var R = `Es-UANTRhdg-`,
  z = `KNEaTOnJJWw-`,
  B = `ypQ9RrTsvmE-`,
  V = `aMHZOpwLiBw-`,
  H = `FsYxDNcAXaI-`,
  U = `cSFkUHyVW24-`,
  W = `oztjxXYIBAk-`,
  G = `yT92BfNEvpw-`,
  K = `_6jMisrq5Zfo-`,
  q = `XBv92QzB8Xc-`,
  le = `NjUCqxvhkHk-`,
  ue = `_6iUHDist0Jc-`,
  J = `gxh8RxFKhr8-`,
  de = `tYvCiFSJDdI-`,
  fe = `VCRuNjWNqVc-`,
  pe = `AmB85SkEC3Q-`,
  Y = `P5j4maR0i14-`,
  X = t();
function me(e) {
  let {
      promotedSaleEvent: t,
      children: n,
      nItemsToFeature: r,
      bInGamepadUI: i,
    } = e,
    { bShowSeeMoreHint: a, panelProps: o } = p(i ? t?.strSaleURL : void 0);
  return (0, X.jsx)($, {
    ...e,
    className: H,
    "flow-children": `row`,
    panelProps: o,
    children: (0, X.jsx)(Z, {
      saleEvent: t,
      bShowExploreHint: a,
      children: (0, X.jsx)(Q, { nItemsToFeature: r, children: n }),
    }),
  });
}
function he(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    i = F(t, n);
  if (!i) return null;
  let a = r ? { ...i, strSaleURL: r } : i;
  return a.strSaleURL
    ? (0, X.jsx)(S, {
        className: w(R, H, U),
        "flow-children": `row`,
        children: (0, X.jsx)(Z, { saleEvent: a, bExploreButtonBelow: !0 }),
      })
    : null;
}
function Z(e) {
  let {
      saleEvent: t,
      bExploreButtonBelow: n,
      bShowExploreHint: r,
      children: a,
    } = e,
    o = t?.strSaleURL,
    s = t?.strCapsuleURL,
    c = t?.strSummary,
    l = te(),
    u = y(),
    d = u && r !== void 0,
    f = t?.rtEndTime
      ? v(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: l,
        })
      : void 0;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      s &&
        (0, X.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: { backgroundImage: `url(${s})` },
        }),
      s &&
        (0, X.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: { backgroundImage: `url(${s})` },
        }),
      (0, X.jsxs)(`div`, {
        className: G,
        children: [
          (0, X.jsxs)(`div`, {
            className: K,
            children: [
              (0, X.jsx)(`div`, {
                className: q,
                children: (0, X.jsx)(i, {
                  url: o,
                  className: le,
                  bFocusable: !1,
                  children: t?.strName,
                }),
              }),
              f &&
                (0, X.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: g(`#Sale_CrossPromoSale_NowThrough`, f),
                }),
            ],
          }),
          o &&
            !n &&
            !d &&
            (0, X.jsx)(i, {
              url: o,
              className: w(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: _,
              children: g(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
          o &&
            d &&
            (0, X.jsx)(ee, {
              label: g(`#Sale_CrossPromoSale_ExploreEvent`),
              shown: !!r,
            }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: J,
        children: [
          s &&
            (0, X.jsxs)(i, {
              url: o,
              className: `oztjxXYIBAk-`,
              bFocusable: !!u,
              children: [
                (0, X.jsx)(`img`, { src: s, alt: `` }),
                c &&
                  (0, X.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, X.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: c,
                    }),
                  }),
              ],
            }),
          a,
        ],
      }),
      o &&
        !d &&
        (0, X.jsx)(`div`, {
          className: w(`T1fHkhyvNkM-`, n && `SAqjQ-F71kA-`),
          children: (0, X.jsx)(i, {
            url: o,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: g(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
function ge(e) {
  let { children: t, nItemsToFeature: n } = e;
  return (0, X.jsxs)($, {
    ...e,
    className: H,
    children: [
      (0, X.jsx)(s, {
        className: G,
        children: (0, X.jsxs)(`div`, {
          className: K,
          children: [
            (0, X.jsx)(`div`, { className: w(q, c), children: `\xA0` }),
            (0, X.jsx)(`div`, { className: w(ue, c), children: `\xA0` }),
          ],
        }),
      }),
      (0, X.jsxs)(`div`, {
        className: J,
        children: [
          (0, X.jsx)(s, {
            className: W,
            children: (0, X.jsx)(`div`, { className: w(c, de) }),
          }),
          (0, X.jsx)(Q, { nItemsToFeature: n, children: t }),
        ],
      }),
    ],
  });
}
function Q(e) {
  let { children: t, nItemsToFeature: n, strSaleURL: r } = e,
    a = x.logged_in
      ? h.Localize(`#Sale_CrossPromoSale_RecommendedFromEvent`)
      : h.LocalizePlural(
          `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
          n ?? 0,
        );
  return (0, X.jsxs)(`div`, {
    className: z,
    children: [
      (0, X.jsxs)(`div`, {
        className: B,
        children: [
          (0, X.jsx)(`div`, { className: V, children: a }),
          r &&
            (0, X.jsx)(i, {
              url: r,
              className: w(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: _,
              children: g(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
        ],
      }),
      t,
      r &&
        (0, X.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, X.jsx)(i, {
            url: r,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: g(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
function $(e) {
  let {
    section: t,
    bInGamepadUI: i,
    placeholderHeight: a,
    className: s,
    "flow-children": c,
    panelProps: d,
    children: p,
  } = e;
  return (0, X.jsx)(f, {
    placeholderHeight: a,
    className: w({
      [r]: !0,
      [n]: o(t),
      [u]: !0,
      SaleSectionForCustomCSS: !0,
      [R]: !0,
      [s]: !0,
    }),
    rootMargin: l,
    holdGamepadFocus: i,
    "flow-children": c,
    ...d,
    children: p,
  });
}
export {
  E as _,
  fe as a,
  F as c,
  oe as d,
  re as f,
  O as g,
  se as h,
  pe as i,
  k as l,
  ae as m,
  he as n,
  Y as o,
  ie as p,
  ge as r,
  P as s,
  me as t,
  N as u,
  ne as v,
  T as y,
};
