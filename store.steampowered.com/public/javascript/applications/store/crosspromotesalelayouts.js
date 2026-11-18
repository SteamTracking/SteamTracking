/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  Pt as n,
  dt as r,
  ft as i,
  lt as a,
  st as o,
} from "./chunk~01cfc309bf.js";
import {
  B as s,
  _i as c,
  i as l,
  ot as u,
  vo as d,
} from "./chunk~6b8ddcaac8.js";
import { r as f } from "./chunk~4c761eb6f4.js";
import { c as p } from "./chunk~8c66e1c7a5.js";
import {
  A as m,
  M as h,
  d as g,
  j as _,
  l as v,
  v as y,
  y as b,
} from "./chunk~f57d770d64.js";
import { n as x, t as S } from "./chunk~9871ee5432.js";
import { n as C, r as w } from "./chunk~b980924b6a.js";
import { n as ee } from "./chunk~521597d5f9.js";
import { r as te } from "./chunk~d43c81a658.js";
import { p as ne, t as re } from "./chunk~ceada343dc.js";
import { n as T } from "./chunk~e70aabe4d7.js";
import { n as E } from "./chunk~710e3cfd2f.js";
import { n as ie, t as ae } from "./chunk~ffe4581a06.js";
import { c as D } from "./chunk~7b4b9eb713.js";
import {
  $h as O,
  $i as oe,
  $v as k,
  $x as se,
  Ac as ce,
  Ad as le,
  Ag as ue,
  Ax as de,
  Bd as fe,
  Bp as pe,
  Cf as me,
  Cn as he,
  Cv as ge,
  Dm as _e,
  Dv as ve,
  Eb as ye,
  Eg as be,
  Eh as xe,
  F_ as Se,
  Fd as Ce,
  Gh as we,
  Hd as Te,
  Hf as Ee,
  Hh as De,
  Hp as Oe,
  If as ke,
  Jy as A,
  K_ as Ae,
  Kg as je,
  Km as Me,
  Lp as Ne,
  Md as Pe,
  Mm as Fe,
  Nd as Ie,
  Nf as Le,
  Nh as Re,
  Np as ze,
  Oh as Be,
  Om as Ve,
  Op as He,
  Ph as Ue,
  Qh as We,
  Qv as Ge,
  Qx as Ke,
  Rf as qe,
  Rg as Je,
  Rm as Ye,
  Rr as j,
  Sf as Xe,
  Sn as Ze,
  TS as Qe,
  T_ as $e,
  Tv as et,
  Uh as tt,
  Um as nt,
  Vh as rt,
  Vi as it,
  Vm as at,
  Wb as ot,
  Wh as st,
  Wm as ct,
  Wy as lt,
  Xb as M,
  Xh as ut,
  Y_ as dt,
  Yd as ft,
  Yf as pt,
  Yp as mt,
  Zf as ht,
  Zg as gt,
  Zh as N,
  Zi as _t,
  Zx as vt,
  _l as yt,
  _p as bt,
  aS as P,
  ag as xt,
  ap as St,
  av as Ct,
  bx as wt,
  cf as Tt,
  cv as Et,
  d_ as Dt,
  dd as Ot,
  dp as kt,
  eS as F,
  e_ as At,
  eg as jt,
  ep as Mt,
  ey as Nt,
  fm as Pt,
  ft as Ft,
  gd as It,
  gv as Lt,
  hg as Rt,
  hm as zt,
  iS as I,
  id as Bt,
  if as Vt,
  iu as Ht,
  iy as Ut,
  jc as Wt,
  jf as Gt,
  jg as Kt,
  jp as qt,
  kh as Jt,
  ly as Yt,
  md as Xt,
  mg as Zt,
  nS as L,
  np as Qt,
  oS as R,
  o_ as $t,
  of as en,
  qb as z,
  rS as B,
  rg as tn,
  sS as V,
  s_ as nn,
  sg as rn,
  sp as an,
  sy as on,
  tS as H,
  uh as sn,
  um as cn,
  uv as ln,
  vf as un,
  vm as dn,
  vx as U,
  wc as W,
  wg as fn,
  wm as pn,
  wv as mn,
  yS as hn,
  yf as gn,
  yg as _n,
  yv as vn,
  yx as yn,
  zf as bn,
} from "./main.js";
function xn(e, t, n, r) {
  let { tagid: i, top_n_sellers: a, store_filter_json: o } = n,
    s = n.min_discount_percent ?? 1,
    c = !!n.include_packages,
    l = !!n.include_bundles,
    u = !!n.include_dlc;
  return {
    queryKey: [
      `DiscountedItems`,
      i ?? 0,
      a ?? 0,
      o ?? ``,
      s,
      c,
      l,
      u,
      r,
      t.country,
    ],
    queryFn: async () =>
      (
        await Ct(`DiscountedItems`, e, t, {
          start: 0,
          count: r,
          sort: 10,
          filters: {
            released_only: !0,
            type_filters: {
              include_games: !0,
              include_packages: c,
              include_bundles: l,
              include_dlc: u,
            },
            price_filters: { min_discount_percent: s },
            tagids_must_match: i ? [{ tagids: [i] }] : void 0,
            regional_top_n_sellers: a,
            store_page_filter: o
              ? { store_filters: [{ filter_json: o }] }
              : void 0,
          },
        })
      ).rgItemIDs,
    staleTime: 6e5,
  };
}
var Sn = 3;
function Cn(e, t) {
  if (!e.is_coming_soon()) return !1;
  if (!t.min_discount_percent) return !0;
  let n = e.best_purchase_option(!1);
  return !!n?.packageid() && (n?.discount_pct() ?? 0) >= t.min_discount_percent;
}
function wn(e, t, n, r) {
  let { store_filter_json: i, min_discount_percent: a } = n;
  return {
    queryKey: [`TopWishlistedComingSoon`, i ?? ``, a ?? 0, r, t.country],
    queryFn: async () => {
      let o = new Map();
      return (
        await Ct(
          `TopWishlistedComingSoon`,
          e,
          t,
          {
            start: 0,
            count: r * Sn,
            sort: 23,
            filters: {
              coming_soon_only: !0,
              exclude_from: [2, 4],
              type_filters: {
                include_games: !0,
                include_dlc: !0,
                include_software: !0,
                include_music: !0,
                include_hardware: !0,
              },
              price_filters: a ? { min_discount_percent: a } : void 0,
              store_page_filter: i
                ? { store_filters: [{ filter_json: i }] }
                : void 0,
            },
          },
          {
            data_request: {},
            cacheStoreItemData: (e) => {
              let t = Ge({ item_type: e.item_type(), id: e.id() });
              t && o.set(k(t), e);
            },
          },
        )
      ).rgItemIDs
        .filter((e) => {
          let t = o.get(k(e));
          return t !== void 0 && Cn(t, n);
        })
        .slice(0, r);
    },
    staleTime: 6e5,
  };
}
var Tn = 500,
  En = 100;
function Dn(e, t, n, r, i, a = 1) {
  return {
    queryKey: [`AccountOwnedDLCOnSale`, r ?? 0, i, n.country, a],
    queryFn: async () => {
      if (!r) return [];
      let o = await e.fetchQuery(d(t, r)),
        s = Array.from(o).slice(0, Tn);
      return s.length
        ? (
            await Ct(`SaleTechOwnedDLCOnSale`, t, n, {
              start: 0,
              count: En,
              sort: 10,
              filters: {
                released_only: !0,
                type_filters: {
                  include_dlc: i === `dlc`,
                  include_music: i === `music`,
                },
                price_filters: { min_discount_percent: a },
                parent_appids: s,
              },
            })
          ).rgItemIDs.flatMap((e) => (`appid` in e ? [e.appid] : []))
        : [];
    },
    staleTime: 6e5,
  };
}
async function On(e, t) {
  t.set(`origin`, location.origin);
  let n = `${z.STORE_BASE_URL}saleaction/${e}?${t}`,
    r = await fetch(n);
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  let i = await r.json();
  if (i?.success != 1) throw Error(`${n} answered EResult ${i?.success}`);
  return i;
}
async function kn(e) {
  let t = await On(
    `ajaxgetpopularcompatlist`,
    new URLSearchParams({ compatDevice: e }),
  );
  if (!t.list) throw Error(`ajaxgetpopularcompatlist answered without a list`);
  return t.list;
}
var An = 3e5;
function jn(e) {
  return [`PopularCompatList`, e];
}
function Mn(e) {
  return { queryKey: jn(e), queryFn: () => kn(e), staleTime: An, retry: !1 };
}
var G = e(t(), 1),
  K = i(),
  Nn = G.createContext(void 0);
function Pn() {
  return G.useContext(Nn) ?? ee();
}
var Fn = G.createContext(void 0);
function In() {
  return G.useContext(Fn);
}
function Ln(e, t, n, r) {
  if (r === void 0 || n.length <= 1 || !g(e, t, void 0)) return n;
  let i = de(r + (t.unique_id ?? 0));
  return vt([...n], t.random_order_top_x ?? 0, i);
}
function Rn(e, t, n, r) {
  if (t.length <= n) return t;
  if (r === void 0) return t.slice(0, n);
  let i = de(r + (e.unique_id ?? 0));
  return vt([...t], 0, i).slice(0, n);
}
async function zn(e, t) {
  let n = Ot(z.STORE_BASE_URL, t, M.country_code);
  return ((await (await fetch(n)).json()).rgRecommendedApps ?? []).map(Number);
}
function Bn() {
  let e = Yt(),
    t = M.accountid;
  return o(Vn(e, t));
}
function Vn(e, t) {
  return {
    queryKey: Hn(t),
    queryFn: async () => (t ? zn(e, t) : []),
    staleTime: 6e5,
  };
}
function Hn(e) {
  return [`AccountRecommendedApps`, e ?? 0];
}
var Un = 100;
function Wn(e, t, n, r, i = 1) {
  return {
    queryKey: [`AccountRecommendedAppsOnSale`, r ?? 0, n.cacheScope ?? ``, i],
    queryFn: async () => {
      if (!r) return [];
      let a = (await e.fetchQuery(Vn(t, r))).slice(0, Un),
        o = await Promise.all(a.map((t) => e.fetchQuery(Lt(n, { appid: t }))));
      return a.filter(
        (e, t) => (o[t]?.best_purchase_option?.discount_pct ?? 0) >= i,
      );
    },
    staleTime: 6e5,
  };
}
function q(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function Gn(e) {
  return q(e).map((t) => ({
    ...e,
    sale_page_cross_promo_sales: [t],
    capsules: t.capsules ?? [],
  }));
}
function Kn(e) {
  return q(e)[0]?.event_gid || void 0;
}
function qn(e) {
  return q(e).flatMap((e) => e.event_gid || []);
}
function Jn(e) {
  return q(e)[0]?.featured_app_tagid || void 0;
}
function Yn(e) {
  let t = q(e);
  return t.length > 0 && t.every((e) => (e.capsules?.length ?? 0) > 0);
}
function Xn(e, t) {
  return Zn(e) ? (t?.BIsVisibleEvent() ? null : `missing`) : `setup`;
}
function Zn(e) {
  let t = q(e)[0];
  return t?.creator_clan_account_id
    ? !!t.capsules?.length
    : !!t?.event_gid && (!!t.featured_app_tagid || !!t.capsules?.length);
}
function Qn(e, t) {
  return e
    ? A(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : A(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function $n(e, t) {
  let n = lt.GetELanguageFallback(t),
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
function er(e) {
  return 3;
}
function tr(e) {
  return e.type !== `sub` && e.type !== `bundle`;
}
function nr(e, t, n, r) {
  let i = [];
  for (let a of e)
    if ((!t || t.has(a)) && !n(a) && (i.push(a), i.length >= r)) break;
  return i;
}
function rr(e, t, n, r = new Set()) {
  for (let t of e.GetSaleSections())
    if (!(!v(t.section_type) || (n && !n.BIncludeSection(t))))
      for (let e of t.capsules) tr(e) && r.add(e.id);
  for (let e of t ?? []) {
    let t = e.capsule;
    tr(t) && (!n || n.BIncludeLinkedCapsule(t)) && r.add(t.id);
  }
  return r;
}
function ir(e, t, n) {
  return {
    nSaleTagID: e.BUsesContentHubForItemSource()
      ? void 0
      : e.featured_app_tagid,
    strContentHubType: e.GetContentHubType(),
    strContentHubCategory: e.GetContentHubCategory(),
    nContentHubTagID: e.GetContentHubTag(),
    bDiscountsOnly: e.BContentHubDiscountedOnly(),
    bPrioritizeDiscounts: t,
    strOptInName: e.jsondata.prune_list_optin_name,
    nOptInTagID: e.jsondata.optin_tagid,
    nPruneTagID: e.jsondata.optin_prune_tagid,
    bOptInOnly: e.jsondata.optin_only,
    nCreatorClanAccountId: n ? e.clanSteamID.GetAccountID() : void 0,
  };
}
var ar = 4;
function or(e) {
  return e
    .GetSaleSections()
    .filter((e) => v(e.section_type) && _(e) === `personalized_carousel`);
}
function sr(e) {
  return or(e)[0];
}
function cr(e) {
  if (e.appid()) return { id: e.appid(), type: `game` };
  if (e.bundleid()) return { id: e.bundleid(), type: `bundle` };
  if (e.packageid()) return { id: e.packageid(), type: `sub` };
}
function lr(e, t, n, r, i, a) {
  let o = or(n),
    s = {
      rgSections: o.map((e) => ({
        eSort: e.smart_section_personalized_carousel_sort ?? 13,
        nMinItems: e.smart_section_personalized_carousel_min_items ?? ar,
        bRandomize: !!e.smart_section_personalized_carousel_randomize,
        bIncludePackages: e.smart_section_include_packages,
        bIncludeBundles: e.smart_section_include_bundles,
        bIncludeDLC: e.smart_section_include_dlc,
        nMinDiscountPercent:
          e.smart_section_min_discount_percent === void 0 ? void 0 : ki(e),
      })),
      storePageFilter: ir(n, !!o[0]?.prioritize_discounts, r),
      strStoreFilterJSON: o[0] ? h(o[0]) : void 0,
      strTabStoreFilterJSON: a ? JSON.stringify(a) : void 0,
    };
  return {
    queryKey: [
      `SaleTech`,
      `PersonalizedCarousels`,
      i,
      t.country,
      t.language,
      JSON.stringify(s),
    ],
    queryFn: () => ur(e, t, s, i),
    staleTime: 1 / 0,
  };
}
async function ur(e, t, n, r) {
  if (!r || n.rgSections.length === 0) return [];
  let i = yn.Init(Ut);
  for (let e of n.rgSections) {
    let t = i.Body().add_sections();
    (t.set_sort(e.eSort),
      t.set_min_items(e.nMinItems),
      t.set_randomize(e.bRandomize),
      t.set_include_packages(!!e.bIncludePackages),
      t.set_include_bundles(!!e.bIncludeBundles),
      t.set_include_dlc(e.bIncludeDLC),
      t.set_min_discount_percent(e.nMinDiscountPercent));
  }
  (i.Body().set_context(Nt(t)),
    i.Body().set_filters(Ft(n.storePageFilter, !1)),
    n.strStoreFilterJSON &&
      i
        .Body()
        .filters(!0)
        .add_store_filters()
        .set_filter_json(n.strStoreFilterJSON),
    n.strTabStoreFilterJSON &&
      i
        .Body()
        .filters(!0)
        .add_store_filters()
        .set_filter_json(n.strTabStoreFilterJSON));
  let a = await on.GetItemsByUserRecommendedTags(e, i);
  if (a.GetEResult() != 1)
    throw Error(`GetItemsByUserRecommendedTags failed: ${a.GetEResult()}`);
  return a
    .Body()
    .sections()
    .map((e) => ({
      strTagName: e.tag_name() ?? ``,
      rgCapsules: e.store_item_ids().flatMap((e) => {
        let t = cr(e);
        return t ? [t] : [];
      }),
    }));
}
function dr(e, t) {
  let n = t
    .GetSaleSections()
    .filter((e) => v(e.section_type) && _(e) == `personalized_carousel`);
  if (n.length == 0) return { nNumSections: 0, nSectionIndex: -1 };
  let r = n.findIndex((t) => t.unique_id == e.unique_id);
  return { nNumSections: n.length, nSectionIndex: r };
}
function fr(e) {
  return _(e) === `frame_compatibility` ? `frame` : `deck`;
}
function pr(e, t) {
  let n = e.smart_section_deck_compatibility ?? 3;
  switch (n) {
    case 3:
      return t.verifiedList ?? [];
    case 2:
      return t.playableList ?? [];
    case 1:
      return t.unsupportedList ?? [];
    case 0:
      return t.unknownList ?? [];
  }
  return (
    console.error(
      `GetAppsForSectionCompatCategory: unexpected compatibility category ${n}`,
    ),
    []
  );
}
var mr = [
    {
      nOptInTagID: 9,
      rgChildren: [
        { nTagID: Se },
        { nTagID: _n },
        { nTagID: me },
        { nTagID: $e },
        { nTagID: At },
        { nTagID: Xe },
        { nTagID: tn },
        { nTagID: Le },
        { nTagID: bn },
      ],
    },
    {
      nOptInTagID: 19,
      rgChildren: [
        { nTagID: fe },
        { nTagID: ue },
        { nTagID: ft },
        { nTagID: Te },
        { nTagID: Oe },
        { nTagID: gn },
        { nTagID: un },
        { nTagID: Rt },
        { nTagID: Zt },
      ],
    },
    {
      nOptInTagID: 21,
      rgChildren: [
        { nTagID: fe },
        { nTagID: xe },
        { nTagID: $t },
        { nTagID: ht },
        { nTagID: He },
        { nTagID: De },
        { nTagID: dt },
        { nTagID: Gt },
      ],
    },
    {
      nOptInTagID: 122,
      rgChildren: [
        { nTagID: Te },
        { nTagID: pn },
        { nTagID: Mt },
        { nTagID: bt },
        { nTagID: Re },
        { nTagID: At },
        { nTagID: Dt },
      ],
    },
    {
      nOptInTagID: 599,
      rgChildren: [
        { nTagID: Vt },
        { nTagID: an },
        { nTagID: ze },
        { nTagID: dn },
        { nTagID: Ve },
        { nTagID: Ye },
        { nTagID: nt },
        { nTagID: tt },
        { nTagID: Kt },
        { nTagID: je },
        { nTagID: dt },
      ],
    },
    {
      nOptInTagID: 699,
      rgChildren: [
        { nTagID: ft },
        { nTagID: Ee },
        { nTagID: we },
        { nTagID: xt },
        { nTagID: be },
      ],
    },
    {
      nOptInTagID: 701,
      rgChildren: [
        { nTagID: ft },
        { nTagID: Ye },
        { nTagID: 599 },
        { nTagID: en },
        { nTagID: Tt },
        { nTagID: Je },
        { nTagID: mt },
      ],
    },
    {
      nOptInTagID: rt,
      rgChildren: [
        { nTagID: Pe },
        { nTagID: Ce },
        { nTagID: Me },
        { nTagID: we },
        { nTagID: We },
      ],
    },
    {
      nOptInTagID: N,
      rgChildren: [
        { nTagID: cn },
        { nTagID: Fe },
        { nTagID: at },
        { nTagID: sn },
        { nTagID: Be },
        { nTagID: De },
        { nTagID: We },
      ],
    },
    {
      nOptInTagID: Ae,
      rgChildren: [
        { eContentDescriptor: 3 },
        { nTagID: an },
        { nTagID: _e },
        { nTagID: Jt },
        { nTagID: pe },
        { nTagID: sn },
        { nTagID: ut },
      ],
    },
  ],
  hr = [
    {
      nTagID: qt,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: St },
      ],
    },
    {
      nTagID: fn,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: Qt },
        { nTagID: st },
      ],
    },
    {
      nTagID: ct,
      rgChildren: [
        { nTagID: 9 },
        { nTagID: 122 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 597 },
        { nTagID: 599 },
      ],
    },
    {
      nTagID: Pt,
      rgChildren: [
        { nTagID: nn },
        { nTagID: 19 },
        { nTagID: gt },
        { nTagID: ut },
        { nTagID: dt },
      ],
    },
    {
      nTagID: rn,
      rgChildren: [
        { nTagID: N },
        { nTagID: zt },
        { nTagID: 599 },
        { nTagID: 21 },
        { nTagID: De },
        { nTagID: qe },
        { nTagID: ke },
        { nTagID: Ye },
      ],
    },
    {
      nTagID: sn,
      rgChildren: [
        { nTagID: 21 },
        { nTagID: N },
        { nTagID: He },
        { nTagID: Ne },
        { nTagID: kt },
      ],
    },
    {
      eContentDescriptor: 3,
      rgChildren: [
        { nTagID: Ae },
        { nTagID: _e },
        { nTagID: N },
        { nTagID: le },
        { nTagID: Ie },
      ],
    },
  ],
  gr = [
    {
      strOptInTag: `option_58733`,
      rgChildren: [
        { nTagID: jt },
        { nTagID: O },
        { nTagID: pt },
        { nTagID: 128 },
        { nTagID: Ue },
      ],
    },
    {
      strOptInTag: `option_40066`,
      rgChildren: [
        { nTagID: jt },
        { nTagID: O },
        { nTagID: pt },
        { nTagID: Ue },
      ],
    },
    { strAppType: `software` },
    { strFeature: `vr` },
    { strFeature: `mac` },
  ],
  _r = {
    linux: `#Platform_Linux`,
    mac: `#Platform_Mac`,
    vr: `#Platform_VR`,
    "vr only": `#Sale_Tabs_TagFilter_Feature_VROnly`,
    free: `#Sale_Tabs_TagFilter_Feature_Free`,
    discounted: `#Sale_Tabs_TagFilter_Feature_Discounted`,
    "xbox controller": `#ControllerSupportLabelTitle`,
    "full controller": `#Store_ControllerFilter_Xbox`,
    "ps4 controller": `#Store_ControllerFilter_PS4`,
    "ps5 controller": `#Store_ControllerFilter_PS5`,
    "remote play together": `#Sale_Tabs_TagFilter_Feature_RemotePlayTogether`,
    "steam deck verified": `#Sale_Tabs_TagFilter_Feature_SteamDeckVerified`,
  },
  vr = [
    {
      strClass: `genre`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Genre`,
      rgNodes: mr,
    },
    {
      strClass: `theme`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Theme`,
      rgNodes: hr,
    },
    {
      strClass: `feature`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Feature`,
      rgNodes: gr,
    },
  ];
function yr(e) {
  return e?.rgNodes
    ? e.rgNodes
    : (vr.find((t) => t.strClass === e?.tag_class)?.rgNodes ?? []);
}
function br(e) {
  return e.nTagID
    ? String(e.nTagID)
    : e.nOptInTagID || e.strOptInTag
      ? `optin:` + Or(e)
      : e.eContentDescriptor
        ? `descriptor:` + e.eContentDescriptor
        : e.strFeature
          ? `feature:` + e.strFeature
          : `apptype:` + e.strAppType;
}
function xr(e) {
  if (e.strFeature) return _r[e.strFeature];
  if (e.strAppType) return `#AppTypeLabel_` + e.strAppType;
}
function Sr(e) {
  if (e)
    return e.strChildKey
      ? e.strParentKey + `,` + e.strChildKey
      : e.strParentKey;
}
var Cr = `tabtag`,
  wr = `tabsubtag`;
function Tr(e, t) {
  if (e) return { strParentKey: e, strChildKey: t || void 0 };
}
function Er(e) {
  return { [Cr]: e?.strParentKey ?? null, [wr]: e?.strChildKey ?? null };
}
function Dr(e, t, n) {
  if (!e) return;
  let r = J(yr(t), e.strParentKey);
  if (!r || !n(r)) return;
  if (!e.strChildKey) return e;
  let i = J(r.rgChildren ?? [], e.strChildKey);
  return !i || !n(i) ? { strParentKey: e.strParentKey } : e;
}
function Or(e) {
  return e.strOptInTag ?? String(e.nOptInTagID);
}
function kr(e, t) {
  return e.nOptInTagID || e.strOptInTag
    ? (Ke(t, `Opt-in registration tag used on a sale without an opt-in`),
      {
        type: b.k_EStoreFilterClauseTypeOptInRegistrationTag,
        optin: t,
        value: Or(e),
      })
    : e.nTagID
      ? { type: b.k_EStoreFilterClauseTypeStoreTag, value: e.nTagID }
      : e.eContentDescriptor
        ? {
            type: b.k_EStoreFilterClauseTypeContentDescriptor,
            value: e.eContentDescriptor,
          }
        : e.strFeature
          ? { type: b.k_EStoreFilterClauseTypeFeatureTag, value: e.strFeature }
          : { type: b.k_EStoreFilterClauseTypeAppType, value: e.strAppType };
}
function J(e, t) {
  return e.find((e) => br(e) === t);
}
function Ar(e, t, n) {
  if (!e) return;
  let r = J(yr(t), e.strParentKey);
  if (!r) return;
  if (!e.strChildKey) return kr(r, n);
  let i = J(r.rgChildren ?? [], e.strChildKey);
  if (i)
    return {
      type: b.k_EStoreFilterClauseTypeAnd,
      rgSubexpressions: [kr(r, n), kr(i, n)],
    };
}
function jr() {
  let [e] = Rr(`tab`),
    t = G.useCallback((e, t) => Br({ ...t, tab: String(e) }), []);
  return [Mr(e), t];
}
function Mr(e) {
  return e === null ? 0 : Number(e);
}
function Y(e) {
  let [t] = jr();
  return Nr(e, t);
}
function Nr(e, t) {
  let n = Pr(e);
  return n.find((e) => e.unique_id === t) ?? n[0];
}
function Pr(e) {
  return (
    e.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter((e) => !e.hide) ?? []
  );
}
function Fr(e, t, n, r) {
  if (!n || t.diable_tab_id_filtering) return;
  let i = e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name,
    a = Ar(r, n.tab_tag_filter, i),
    o =
      n.store_filter && a
        ? {
            type: b.k_EStoreFilterClauseTypeAnd,
            rgSubexpressions: [n.store_filter, a],
          }
        : (n.store_filter ?? a);
  if (o) return Ir(e, t, n) ? o : void 0;
}
function Ir(e, t, n) {
  let r = e.GetSaleSections(),
    i = r.findIndex((e) => e.section_type === `tabs`);
  return i < 0 || !r[i].tabs?.includes(n) ? !1 : r.indexOf(t) > i;
}
function Lr(e, t) {
  let n = Y(e);
  return !n || n === Pr(e)[0] || t.diable_tab_id_filtering || !Ir(e, t, n)
    ? ``
    : `tabid${n.unique_id}`;
}
function Rr(e) {
  let t = G.useSyncExternalStore(he, zr, zr);
  return [
    new URLSearchParams(t).get(e),
    G.useCallback((t) => Br({ [e]: t ?? null }), [e]),
  ];
}
function zr() {
  return location.search;
}
function Br(e) {
  let t = new URL(window.location.href);
  for (let [n, r] of Object.entries(e))
    r === null ? t.searchParams.delete(n) : t.searchParams.set(n, r);
  t.href !== window.location.href && Ze((e) => e, t);
}
function Vr(e) {
  let t = Y(e),
    n = Hr(),
    [r] = Rr(Cr),
    [i] = Rr(wr),
    a = G.useCallback((e, t) => Br({ ...t, ...Er(e) }), []);
  return [Dr(Tr(r, i), t?.tab_tag_filter, n), a];
}
function Hr() {
  let { data: e } = It();
  return G.useMemo(() => Ur(e), [e]);
}
function Ur(e) {
  let t = !!M.logged_in && z.EREALM !== Qe.k_ESteamRealmChina && e !== void 0,
    n = new Set(Xt(e));
  return (e) => !e.eContentDescriptor || (t && !n.has(e.eContentDescriptor));
}
function Wr(e, t) {
  let n = Y(e),
    [r] = Vr(e);
  return Fr(e, t, n, r);
}
var Gr = 50;
function Kr(e, t, n) {
  let { defaultInfo: r } = t;
  switch (e.type) {
    case b.k_EStoreFilterClauseTypeStoreTag:
      return !!t.tags?.some((t) => t.tagid === e.value);
    case b.k_EStoreFilterClauseTypeFeatureTag:
      switch (e.value) {
        case `linux`:
          return !!t.platforms?.steamos_linux;
        case `mac`:
          return !!t.platforms?.mac;
        case `vr`:
          return !!t.platforms?.vr_support?.vrhmd;
        case `vr only`:
          return !!t.platforms?.vr_support?.vrhmd_only;
        case `free`:
          return !!r?.is_free;
        case `discounted`:
          return (r?.best_purchase_option?.discount_pct ?? 0) > 0;
        default:
          return !1;
      }
    case b.k_EStoreFilterClauseTypeAppType:
      return (
        (r?.item_type !== void 0 && r.type !== void 0
          ? Ht(r.item_type, r.type)
          : `game`) === e.value
      );
    case b.k_EStoreFilterClauseTypeLanguage: {
      let n = hn(String(e.value));
      return !!t.supportedLanguages?.some(
        (e) =>
          e.elanguage === n && (e.supported || e.subtitles || e.full_audio),
      );
    }
    case b.k_EStoreFilterClauseTypeContentDescriptor:
      return !!r?.content_descriptorids?.some((t) => t === e.value);
    case b.k_EStoreFilterClauseTypePrice: {
      let t = r?.free_weekend,
        i = !!t && (t.start_time ?? 1 / 0) <= n && n <= (t.end_time ?? 0),
        a = r?.best_purchase_option?.final_price_in_cents,
        o = a ? Number.parseInt(a) : 1 / 0;
      return (
        !!r?.is_free ||
        !!r?.is_free_temporarily ||
        i ||
        o <= Number(e.value) * 100
      );
    }
    case b.k_EStoreFilterClauseTypeOr: {
      let r = e.rgSubexpressions?.some((e) => Kr(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case b.k_EStoreFilterClauseTypeAnd: {
      let r = e.rgSubexpressions?.every((e) => Kr(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case b.k_EStoreFilterClauseTypeOptInRegistrationTag:
      return !!(
        e.optin &&
        t.optInRegistrationTags
          ?.find((t) => t.optin_name === e.optin)
          ?.values?.includes(String(e.value))
      );
    default:
      return !0;
  }
}
function qr(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingApps`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n,
    ],
    queryFn: () => Yr(e, t, n, (e) => ({ appid: e }), r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
function Jr(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingItems`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n?.map(k),
    ],
    queryFn: () => Yr(e, t, n, (e) => e, r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
async function Yr(e, t, n, r, i, a) {
  let o = Xr(i, {
      bTags: !1,
      bPlatforms: !1,
      bLanguages: !1,
      bOptInRegistrationTags: !1,
    }),
    s = Math.floor(Date.now() / 1e3),
    c = [];
  for (let l = 0; l < n.length && c.length < a; l += Gr) {
    let u = n.slice(l, l + Gr),
      d = await Promise.all(u.map((n) => Zr(e, t, r(n), o)));
    u.forEach((e, t) => {
      c.length < a && Kr(i, d[t], s) && c.push(e);
    });
  }
  return c;
}
function Xr(e, t) {
  switch (e.type) {
    case b.k_EStoreFilterClauseTypeStoreTag:
      t.bTags = !0;
      break;
    case b.k_EStoreFilterClauseTypeFeatureTag:
      t.bPlatforms = !0;
      break;
    case b.k_EStoreFilterClauseTypeLanguage:
      t.bLanguages = !0;
      break;
    case b.k_EStoreFilterClauseTypeOptInRegistrationTag:
      t.bOptInRegistrationTags = !0;
      break;
    case b.k_EStoreFilterClauseTypeOr:
    case b.k_EStoreFilterClauseTypeAnd:
      e.rgSubexpressions?.forEach((e) => Xr(e, t));
  }
  return t;
}
async function Zr(e, t, n, r) {
  let [i, a, o, s, c] = await Promise.all([
    e.fetchQuery(Lt(t, n)).catch(() => void 0),
    r.bTags ? e.fetchQuery(et(t, n)).catch(() => null) : null,
    r.bPlatforms ? e.fetchQuery(mn(t, n)).catch(() => null) : null,
    r.bLanguages ? e.fetchQuery(ge(t, n)).catch(() => null) : null,
    r.bOptInRegistrationTags ? e.fetchQuery(vn(t, n)).catch(() => null) : null,
  ]);
  return {
    defaultInfo: i,
    tags: a,
    platforms: o,
    supportedLanguages: s,
    optInRegistrationTags: c,
  };
}
var X = e(n(), 1),
  Qr = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || F(e.M()),
        X.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: B.readInt32, bw: V.writeInt32 },
            additional_source_items: { n: 2, c: U, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Request`;
    }
  },
  $r = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || F(e.M()),
        X.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: ei, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response`;
    }
  },
  ei = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || F(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: U },
            weight: { n: 2, br: B.readFloat, bw: V.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response_Recommendation`;
    }
  },
  ti = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || F(e.M()),
        X.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: B.readInt32, bw: V.writeInt32 },
            item_ids: { n: 2, c: U, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Request`;
    }
  },
  ni = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || F(e.M()),
        X.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: ri, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response`;
    }
  },
  ri = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || F(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: U },
            weight: { n: 2, br: B.readFloat, bw: V.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response_Recommendation`;
    }
  },
  ii = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start || F(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, br: B.readUint32, bw: V.writeUint32 },
            count: { n: 2, br: B.readUint32, bw: V.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Request`;
    }
  },
  ai = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sales || F(e.M()),
        X.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sales: { n: 1, c: oi, r: !0, q: !0 },
            total_count: { n: 2, br: B.readUint32, bw: V.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Response`;
    }
  },
  oi = class e extends X.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || F(e.M()),
        X.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: B.readUint32, bw: V.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: B.readFixed64String,
              bw: V.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return R(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new X.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return H(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new X.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Response_Sale`;
    }
  },
  si;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendations#1`,
      wt(Qr, t, n),
      $r,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetPackagePurchaseRecommendations = t;
  function n(e, t, n) {
    return e.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendationsForItems#1`,
      wt(ti, t, n),
      ni,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPackagePurchaseRecommendationsForItems = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreRecommendations.GetLiveSales#1`, wt(ii, t, n), ai, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetLiveSales = r;
})((si ||= {}));
var ci = `saleaction/recommendeddiscounts`;
function li(e) {
  let t = new URLSearchParams(),
    { contentHub: n } = e;
  return (
    n &&
      (t.set(`hub_type`, n.strHubType),
      n.strCategory && t.set(`hub_category`, n.strCategory),
      n.nTagID && t.set(`hub_tagid`, String(n.nTagID))),
    t.toString()
  );
}
async function ui(e, t, n) {
  let r = li(n),
    i = `${z.STORE_BASE_URL}${ci}${r ? `?${r}` : ``}`,
    a = await fetch(i, { credentials: `include` });
  if (!a.ok) throw Error(`${i} answered ${a.status}`);
  let o = await a.json();
  if (o?.success !== 1 || !o.discounts)
    throw Error(`${i} answered EResult ${o?.success}`);
  return o.discounts;
}
var di = 6e5;
function fi(e, t, n, r) {
  return {
    queryKey: [
      `RecommendedDiscounts`,
      n ?? 0,
      t.country,
      r ? JSON.stringify(r) : null,
    ],
    queryFn: () => ui(e, t.country, { contentHub: r }),
    staleTime: di,
  };
}
function pi(e, t) {
  return e.rgReasonLists.find((e) => e.eReason === t)?.rgAppIDs ?? [];
}
function mi(e) {
  if (e.jsondata.item_source_type !== y.k_EContentHub) return;
  let t = e.GetContentHub();
  if (t?.type)
    return { strHubType: t.type, strCategory: t.category, nTagID: t.tagid };
}
function hi(e, t, n) {
  if (t)
    return e.smart_section_discount_reason === void 0
      ? []
      : pi(t, e.smart_section_discount_reason).slice(0, n);
}
var gi = {
  1: `#Sale_default_label_OnYourWishlist`,
  2: `#Sale_DiscountReason_Section_FirstTimeOnSale`,
  3: `#Sale_DiscountReason_Section_LargestDiscount`,
  4: `#Sale_DiscountReason_Section_EndingSoon`,
  5: `#Sale_DiscountReason_Section_NewlyOnSale`,
  6: `#Sale_DiscountReason_Section_WellReviewed`,
  7: `#Sale_DiscountReason_Section_TopSeller`,
  8: `#Sale_DiscountReason_Section_HotDeal`,
  9: `#Sale_DiscountReason_Section_DeepDiscount`,
};
function _i(e) {
  return e.smart_section_discount_reason === void 0
    ? void 0
    : gi[e.smart_section_discount_reason];
}
function vi(e, t) {
  return e.BUsesContentHubForItemSource() || !!t.hide_owned_items;
}
function yi(e, t, n) {
  if (!e) return !1;
  let r = !n?.bHasHideIgnoredValue || n.bHideIgnored;
  return (e.ignored && r) ||
    (e.excluded_tagids?.length ?? 0) > 0 ||
    (e.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (n?.bHideOwned && e.already_owned) ||
    (n?.bHideWishlisted && e.on_wishlist)
    ? !0
    : t && !!(e.already_owned || e.demo_for_owned_game);
}
function bi(e) {
  return e.map((e) => e.data);
}
function xi(e) {
  return e.map((e) => e.data?.visible === !1);
}
function Si(e, t, n, r, i) {
  let o = ln(),
    s = vi(e, t),
    c = !!r?.bHideOwned,
    l = !!r?.bHideWishlisted,
    u = !!r?.bHideIgnored,
    d = !!r?.bHasHideIgnoredValue,
    f = a({
      queries: (n ?? []).map((e) => {
        let t = ve(o, S(e));
        return i ? { ...t, enabled: !1 } : t;
      }),
      combine: bi,
    }),
    p = a({
      queries: (n ?? []).map((e) => ({ ...Lt(o, S(e)), enabled: !1 })),
      combine: xi,
    });
  return (0, G.useMemo)(() => {
    if (!n) return { capsules: void 0, nHiddenCapsules: 0 };
    let e = {
        bHideOwned: c,
        bHideWishlisted: l,
        bHideIgnored: u,
        bHasHideIgnoredValue: d,
      },
      t = 0;
    return {
      capsules: n.filter((n, r) => {
        if (p[r]) return !1;
        let i = f[r];
        return !yi(i, s, e) || ((!i?.already_owned || c) && t++, !1);
      }),
      nHiddenCapsules: t,
    };
  }, [n, f, p, s, c, l, u, d]);
}
function Ci(e) {
  let { capsules: t } = e,
    n = ln();
  return (a({ queries: (t ?? []).map((e) => ve(n, S(e))), combine: wi }), null);
}
function wi() {
  return null;
}
var Ti = {
    popularity: { eType: `game`, bDropsOwned: !1 },
    wishlist: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender: { eType: `game`, bDropsOwned: !0 },
    wishlist_onsale: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender_onsale: { eType: `game`, bDropsOwned: !0 },
    dlc_onsale: { eType: `dlc`, bDropsOwned: !0 },
    dlc_music_onsale: { eType: `music`, bDropsOwned: !0 },
    discount_reason: { eType: `game`, bDropsOwned: !1 },
  },
  Ei = 24,
  Di = 100,
  Oi = 500;
function ki(e) {
  return Math.max(1, e.smart_section_min_discount_percent ?? 1);
}
function Ai(e) {
  return Z(e) && Ti[e].bDropsOwned;
}
function Z(e) {
  return e !== void 0 && e in Ti;
}
function ji(e, t, n, r) {
  let i = _(n),
    a =
      i === `tag`
        ? { tagid: n.smart_section_tag }
        : i === `top_n`
          ? { top_n_sellers: Oi }
          : {};
  return (
    (a.min_discount_percent = ki(n)),
    (a.include_packages = n.smart_section_include_packages),
    (a.include_bundles = n.smart_section_include_bundles),
    (a.include_dlc = n.smart_section_include_dlc),
    r && (a.store_filter_json = JSON.stringify(r)),
    xn(
      e,
      t,
      a,
      i === `tag` && n.random_from_entire_set
        ? Di
        : n.smart_section_max_apps || Ei,
    )
  );
}
function Mi(e, t, n, r) {
  return wn(
    e,
    t,
    {
      min_discount_percent: n.smart_section_min_discount_percent || void 0,
      store_filter_json: r ? JSON.stringify(r) : void 0,
    },
    Ri(n),
  );
}
function Q(e, t) {
  if (Yn(t)) return `manual`;
  if (t.section_type !== `items`) return;
  let n = _(t);
  if (t.enable_faceted_browsing) return n === void 0 ? `faceted` : void 0;
  if (n === void 0) return `manual`;
  if (
    (n === `deck_compatibility` || n === `frame_compatibility`) &&
    t.smart_section_data_source === `popularity`
  )
    return `popularity`;
  if (
    ((n === `wishlist` || n === `interactive_recommender`) &&
      e.jsondata.item_source_type !== y.k_EContentHub) ||
    n === `wishlist_onsale` ||
    n === `interactive_recommender_onsale` ||
    n === `dlc_onsale` ||
    n === `dlc_music_onsale`
  )
    return n;
  if (n === `tag` && t.smart_section_tag) return `tag`;
  if (n === `top_n`) return `top_n`;
  if (n === `all_discounted`) return `all_discounted`;
  if (n === `topwishlisted`) return `topwishlisted`;
  if (n === `personalized_carousel`) return `personalized_carousel`;
  if (n === `discount_reason`) return `discount_reason`;
}
function Ni(e, t, n) {
  let r = e.GetDayIndexFromEventStart(n);
  return t.capsules.filter(
    (e) => e.visibility_index === void 0 || e.visibility_index === r,
  );
}
function Pi(e, t, n) {
  return Ni(e, t, n).flatMap((e) => {
    let t = S(e);
    return t ? [t] : [];
  });
}
function Fi(e, t, n, r, i) {
  let a = Ri(t),
    o = Q(e, t);
  if (Z(o)) {
    let n = Ti[o].eType;
    return (r.tabStoreFilter ? r.tabFilteredAppIDs : Ii(e, t, r, a))?.map(
      (e) => ({ id: e, type: n }),
    );
  }
  switch (o) {
    case `manual`: {
      let i = Ni(e, t, n);
      if (!r.tabStoreFilter) return i;
      if (!r.tabFilteredItems) return;
      let a = new Set(r.tabFilteredItems.map(k));
      return i.filter((e) => {
        let t = S(e);
        return t !== void 0 && a.has(k(t));
      });
    }
    case `tag`:
    case `top_n`:
    case `all_discounted`: {
      if (!r.discountedItems) return;
      let e = r.discountedItems.map(x).filter((e) => !!e);
      return o === `tag` && t.random_from_entire_set
        ? Rn(t, e, a, i)
        : e.slice(0, a);
    }
    case `topwishlisted`:
      return r.topWishlistedItems
        ?.map(x)
        .filter((e) => !!e)
        .slice(0, a);
    case `personalized_carousel`: {
      let n = zi(e, t, r.personalizedCarousels)?.rgCapsules;
      return n && Li(t, n).slice(0, a);
    }
    default:
      return;
  }
}
function Ii(e, t, n, r) {
  let i = Q(e, t);
  if (Z(i))
    switch (i) {
      case `popularity`:
        return n.compatAppList && pr(t, n.compatAppList).slice(0, r);
      case `wishlist`:
        return $(
          t,
          n.wishlistAppIDs,
          rr(e, e.GetTaggedItems()),
          n.ownedAppIDs,
          r,
        );
      case `interactive_recommender`:
        return $(
          t,
          n.recommendedAppIDs,
          rr(e, e.GetTaggedItems()),
          n.ownedAppIDs,
          r,
        );
      case `wishlist_onsale`:
        return $(t, n.wishlistOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `interactive_recommender_onsale`:
        return $(t, n.recommendedOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_onsale`:
        return $(t, n.ownedDLCOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_music_onsale`:
        return $(t, n.ownedSoundtracksOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `discount_reason`:
        return hi(t, n.recommendedDiscounts, r);
      default:
        se(i, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
}
function Li(e, t) {
  if (!e.smart_section_exclude_appids?.length) return t;
  let n = new Set(e.smart_section_exclude_appids);
  return t.filter((e) => e.type !== `game` || !n.has(e.id));
}
function Ri(e) {
  return e.smart_section_max_apps || Ei;
}
function zi(e, t, n) {
  if (n) return n[dr(t, e).nSectionIndex] ?? null;
}
function Bi(e, t) {
  let n = Q(e, t) === `personalized_carousel`;
  return Vi(e, sr(e) ?? t, n);
}
function Vi(e, t, n) {
  let i = Yt(),
    a = r(),
    { storeBrowseContext: s } = Et(),
    c = Y(e),
    [l] = Vr(e),
    u = t ? Fr(e, t, c, l) : void 0,
    { data: d, isSuccess: f } = o({
      ...p(e.clanSteamID.GetAccountID(), a),
      enabled: n,
    }),
    { data: m } = o({
      ...lr(i, s, e, re(e, d), M.accountid, u),
      enabled: n && f,
    });
  return m;
}
function $(e, t, n, r, i) {
  if (!t || !r) return;
  let a = new Set(e.smart_section_exclude_appids);
  return nr(t, n, (e) => r.has(e) || a.has(e), i);
}
function Hi(e, t, n) {
  let i = !n,
    a = Pn(),
    s = In(),
    l = Q(e, t),
    u = Yt(),
    f = r(),
    { storeBrowseContext: p, dataLoader: m } = Et(),
    h = Wr(e, t),
    g = ki(t),
    { data: _ } = o({ ...Mn(fr(t)), enabled: i && l === `popularity` }),
    { data: v } = o({ ...c(u, M.accountid), enabled: i && l === `wishlist` }),
    { data: y } = o({
      ...Vn(u, M.accountid),
      enabled: i && l === `interactive_recommender`,
    }),
    { data: b } = o({
      ...Bt(u, p, M.accountid, g),
      enabled: i && l === `wishlist_onsale`,
    }),
    { data: x } = o({
      ...Wn(f, u, m, M.accountid, g),
      enabled: i && l === `interactive_recommender_onsale`,
    }),
    { data: S } = o({
      ...Dn(f, u, p, M.accountid, `dlc`, g),
      enabled: i && l === `dlc_onsale`,
    }),
    { data: C } = o({
      ...Dn(f, u, p, M.accountid, `music`, g),
      enabled: i && l === `dlc_music_onsale`,
    }),
    { data: w } = o({
      ...ji(u, p, t, h),
      enabled: i && (l === `tag` || l === `top_n` || l === `all_discounted`),
    }),
    { data: ee } = o({
      ...Mi(u, p, t, h),
      enabled: i && l === `topwishlisted`,
    }),
    te = Bi(e, t),
    { data: ne } = o({
      ...fi(u, p, M.accountid, mi(e)),
      enabled: i && l === `discount_reason`,
    }),
    { data: re } = o({ ...d(u, M.accountid), enabled: i && Ai(l) }),
    T = (0, G.useMemo)(
      () => ({
        compatAppList: _,
        wishlistAppIDs: v,
        recommendedAppIDs: y,
        wishlistOnSaleAppIDs: b,
        recommendedOnSaleAppIDs: x,
        ownedDLCOnSaleAppIDs: S,
        ownedSoundtracksOnSaleAppIDs: C,
        discountedItems: w,
        topWishlistedItems: ee,
        personalizedCarousels: te,
        recommendedDiscounts: ne,
        ownedAppIDs: re,
        tabStoreFilter: h,
      }),
      [_, v, y, b, x, S, C, w, ee, te, ne, re, h],
    ),
    E = !!h && Z(l),
    ie = (0, G.useMemo)(() => (E ? Ii(e, t, T, 1 / 0) : void 0), [E, e, t, T]),
    { data: ae } = o({
      ...qr(f, m, ie, h, Ri(t)),
      enabled: i && E && ie !== void 0,
    }),
    D = !!h && l === `manual`,
    O = (0, G.useMemo)(() => (D ? Pi(e, t, a) : void 0), [D, e, t, a]),
    { data: oe } = o({
      ...Jr(f, m, O, h, O?.length ?? 0),
      enabled: i && D && O !== void 0,
    });
  return (0, G.useMemo)(() => {
    let n = Fi(
      e,
      t,
      a,
      { ...T, tabFilteredAppIDs: ae, tabFilteredItems: oe },
      s,
    );
    return n && Ln(e, t, n, s);
  }, [e, t, a, T, ae, oe, s]);
}
function Ui(e) {
  return (Hi(e.event, e.section), null);
}
function Wi(e, t) {
  let n = ln(),
    r = a({
      queries: e.map((e) => {
        let r = ve(n, e);
        return t ? { ...r, enabled: !1 } : r;
      }),
      combine: Gi,
    });
  return (0, G.useMemo)(() => {
    if (t || !r.some((e) => e === void 0))
      return e.filter((e, t) => !yi(r[t], !1));
  }, [e, r, t]);
}
function Gi(e) {
  return e.map((e) => e.data);
}
function Ki(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${z.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var qi = `poster`,
  Ji = `${qi}.avif`,
  Yi = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function Xi(e) {
  let t = e.video_webm_src || e.video_mp4_src;
  if (!t || e.image?.includes(`.${qi}.`)) return e.image;
  let n = Yi.exec(t);
  return n ? `${n[1]}.${Ji}` : e.image;
}
function Zi(e) {
  if (!e?.clan_accountid || !e.clan_event_gid) return null;
  let t = e.cross_promo;
  return {
    clanAccountID: e.clan_accountid,
    strEventGID: e.clan_event_gid,
    strName: e.event_name ?? ``,
    rtEndTime: e.rtime32_end_time || void 0,
    strSummary: e.summary || void 0,
    strCapsuleURL: ea(e),
    strSaleURL: e.store_path ? z.STORE_BASE_URL + e.store_path : void 0,
    strBackgroundURL: Ki(e.clan_accountid, t?.background_image),
    strScrimColor: t?.scrim_color || void 0,
    strLogoURL: $i(e.clan_accountid, t?.logo?.image),
    eDesktopLayout: t?.desktop_layout === `logo_top` ? `logo_top` : void 0,
  };
}
function Qi(e, t) {
  let n = T(e ?? void 0, `capsule`, t);
  if (!e) return;
  let r = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: r,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: D(e) ?? void 0,
    strBackgroundURL: Ki(
      r,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: $n(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function $i(e, t) {
  if (t) return t.startsWith(`http`) ? t : f.GenerateURLFromHashAndExt(e, t);
}
function ea(e) {
  let t = e.capsule_image?.image;
  if (t && e.clan_accountid)
    return e.capsule_image?.from_body
      ? f.ReplacementTokenToClanImageURL(t)
      : $i(e.clan_accountid, t);
}
function ta(e) {
  return (e ?? []).slice(0, 48).map((e) => ({ appid: e }));
}
var na = `Es-UANTRhdg-`,
  ra = `KNEaTOnJJWw-`,
  ia = `FsYxDNcAXaI-`,
  aa = `cSFkUHyVW24-`,
  oa = `oztjxXYIBAk-`,
  sa = `yT92BfNEvpw-`,
  ca = `_6jMisrq5Zfo-`,
  la = `XBv92QzB8Xc-`,
  ua = `_6iUHDist0Jc-`,
  da = `gxh8RxFKhr8-`,
  fa = `tYvCiFSJDdI-`,
  pa = `AZSEWyNPfhc-`,
  ma = `gZNFN-cKUHw-`,
  ha = `VCRuNjWNqVc-`,
  ga = `AmB85SkEC3Q-`,
  _a = `P5j4maR0i14-`,
  va = G.createContext(!1);
function ya(e) {
  let {
      promotedSaleEvent: t,
      children: n,
      nItemsToFeature: r,
      bInGamepadUI: i,
      section: a,
    } = e,
    { bShowSeeMoreHint: o, panelProps: s } = ie(
      i ? t?.strSaleURL : void 0,
      `X`,
    );
  return (0, K.jsx)(Aa, {
    ...e,
    className: ia,
    "flow-children": `row`,
    panelProps: { ...s, navEntryPreferPosition: yt.PREFERRED_CHILD },
    children: (0, K.jsx)(xa, {
      saleEvent: t,
      bShowExploreHint: o,
      strExploreLabel: Ma(a),
      children: (0, K.jsx)(ka, {
        nItemsToFeature: r,
        eCreatorRole: t?.eCreatorRole,
        children: (0, K.jsx)(Wt, { preferredFocus: !0, children: n }),
      }),
    }),
  });
}
function ba(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    i = Qi(t, n);
  if (!i) return null;
  let a = r ? { ...i, strSaleURL: r } : i;
  return a.strSaleURL
    ? (0, K.jsx)(Wt, {
        className: W(na, ia, aa),
        "flow-children": `row`,
        children: (0, K.jsx)(xa, { saleEvent: a, bExploreButtonBelow: !0 }),
      })
    : null;
}
function xa(e) {
  let {
      saleEvent: t,
      bExploreButtonBelow: n,
      bShowExploreHint: r,
      children: i,
    } = e,
    a = t?.strSaleURL,
    o = t?.eCreatorRole,
    s = o || !e.strExploreLabel ? Oa(o) : e.strExploreLabel,
    c = t?.strCapsuleURL,
    u = t?.strSummary,
    d = oe(),
    f = ot(),
    p = f && r !== void 0,
    m = t?.rtEndTime
      ? it(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: d,
        })
      : void 0;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      c &&
        !o &&
        (0, K.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: { backgroundImage: `url(${c})` },
        }),
      c &&
        (0, K.jsx)(`div`, {
          className: W(`HgvxVtFlDis-`, o && `Lp2CuPiW8Lo-`),
          style: { backgroundImage: `url(${c})` },
        }),
      o && (0, K.jsx)(wa, { rgAppIDs: t?.rgCreatorAppIDs, strAvatarURL: c }),
      (0, K.jsxs)(`div`, {
        className: W(sa, o && `-NAWu4CYrl8-`),
        children: [
          o &&
            c &&
            (0, K.jsx)(l, {
              url: a,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, K.jsx)(`img`, { src: c, alt: `` }),
            }),
          !o &&
            (0, K.jsxs)(`div`, {
              className: `_6jMisrq5Zfo-`,
              children: [
                (0, K.jsx)(`div`, {
                  className: `XBv92QzB8Xc-`,
                  children: (0, K.jsx)(l, {
                    url: a,
                    className: `NjUCqxvhkHk-`,
                    bFocusable: !1,
                    children: t?.strName,
                  }),
                }),
                m &&
                  (0, K.jsx)(`div`, {
                    className: `_6iUHDist0Jc-`,
                    children: A(`#Sale_CrossPromoSale_NowThrough`, m),
                  }),
              ],
            }),
          a &&
            !n &&
            !p &&
            !o &&
            (0, K.jsx)(l, {
              url: a,
              className: W(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: j,
              children: s,
            }),
          a && p && (0, K.jsx)(ae, { label: s, shown: !!r, button: `X` }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: W(da, o && `ZONqp3dzTMI-`),
        children: [
          c &&
            (0, K.jsxs)(l, {
              url: a,
              className: W(`oztjxXYIBAk-`, o && `CDF-2WDX3lg-`),
              bFocusable: !!f,
              children: [
                (0, K.jsx)(`img`, { src: c, alt: `` }),
                u &&
                  (0, K.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, K.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: u,
                    }),
                  }),
              ],
            }),
          i,
        ],
      }),
      a &&
        !p &&
        !o &&
        (0, K.jsx)(`div`, {
          className: W(`T1fHkhyvNkM-`, n && `SAqjQ-F71kA-`),
          children: (0, K.jsx)(l, {
            url: a,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: j,
            children: s,
          }),
        }),
    ],
  });
}
var Sa = 60,
  Ca = 4;
function wa(e) {
  let { rgAppIDs: t, strAvatarURL: n } = e,
    r = Wi(
      G.useMemo(() => ta(t), [t]),
      !1,
    ),
    i = G.useMemo(() => {
      let e = (r ?? []).slice(0, 24);
      return e.length < Ca
        ? []
        : Array.from({ length: Sa }, (t, n) => e[n % e.length]);
    }, [r]);
  return i.length
    ? (0, K.jsxs)(`div`, {
        className: pa,
        "aria-hidden": !0,
        children: [
          n &&
            (0, K.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: { backgroundImage: `url(${n})` },
            }),
          (0, K.jsx)(`div`, {
            className: ma,
            children: i.map((e, t) => (0, K.jsx)(Ta, { id: e }, t)),
          }),
        ],
      })
    : null;
}
function Ta(e) {
  let t = ce(e.id, `header`);
  return t
    ? (0, K.jsx)(`img`, { src: t, alt: ``, loading: `lazy` })
    : (0, K.jsx)(`div`, {});
}
function Ea(e) {
  let { children: t, nItemsToFeature: n } = e;
  return (0, K.jsxs)(Aa, {
    ...e,
    className: ia,
    children: [
      (0, K.jsx)(C, {
        className: sa,
        children: (0, K.jsxs)(`div`, {
          className: ca,
          children: [
            (0, K.jsx)(`div`, { className: W(la, w), children: `\xA0` }),
            (0, K.jsx)(`div`, { className: W(ua, w), children: `\xA0` }),
          ],
        }),
      }),
      (0, K.jsxs)(`div`, {
        className: da,
        children: [
          (0, K.jsx)(C, {
            className: oa,
            children: (0, K.jsx)(`div`, { className: W(w, fa) }),
          }),
          (0, K.jsx)(ka, { nItemsToFeature: n, children: t }),
        ],
      }),
    ],
  });
}
var Da = {
  strSignedIn: `#Sale_CrossPromoSale_RecommendedFromEvent`,
  strSignedOut: `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
};
function Oa(e) {
  return A(
    e
      ? `#Sale_CrossPromoCreator_Visit_${e}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
function ka(e) {
  let { children: t, nItemsToFeature: n, strSaleURL: r, eCreatorRole: i } = e,
    a = G.useContext(va),
    o = !i && !a,
    s = i || !e.strExploreLabel ? Oa(i) : e.strExploreLabel,
    c = M.logged_in
      ? ye.Localize(Da.strSignedIn)
      : ye.LocalizePlural(Da.strSignedOut, n ?? 0);
  return (0, K.jsxs)(`div`, {
    className: ra,
    children: [
      (o || r) &&
        (0, K.jsxs)(`div`, {
          className: `ypQ9RrTsvmE-`,
          children: [
            o && (0, K.jsx)(`div`, { className: `aMHZOpwLiBw-`, children: c }),
            r &&
              (0, K.jsx)(l, {
                url: r,
                className: W(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
                fnCanTakeFocus: j,
                children: s,
              }),
          ],
        }),
      t,
      r &&
        (0, K.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, K.jsx)(l, {
            url: r,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: j,
            children: s,
          }),
        }),
    ],
  });
}
function Aa(e) {
  let {
    section: t,
    bInGamepadUI: n,
    placeholderHeight: r,
    className: i,
    "flow-children": a,
    panelProps: o,
    children: c,
  } = e;
  return (0, K.jsx)(E, {
    placeholderHeight: r,
    className: W({
      [u]: !0,
      [s]: m(t),
      [ne]: !0,
      SaleSectionForCustomCSS: !0,
      [na]: !0,
      [i]: !0,
    }),
    rootMargin: te,
    holdGamepadFocus: n,
    "flow-children": a,
    ...o,
    children: c,
  });
}
var ja = [1e3, 500, 250, 100, 50, 20];
function Ma(e) {
  let t = e.sale_page_cross_promo_sales?.[0]?.total_items ?? 0,
    n = ja.find((e) => t >= e);
  return n
    ? A(`#Sale_CrossPromoSale_ExploreItems`, _t(n))
    : A(`#Sale_CrossPromoSale_ExploreEvent`);
}
export {
  Mn as $,
  Er as A,
  ir as B,
  fi as C,
  yr as D,
  Sr as E,
  pr as F,
  Jn as G,
  nr as H,
  fr as I,
  Qn as J,
  Xn as K,
  dr as L,
  Dr as M,
  wr as N,
  br as O,
  Cr as P,
  Pn as Q,
  sr as R,
  mi as S,
  Ar as T,
  Kn as U,
  rr as V,
  qn as W,
  q as X,
  Gn as Y,
  Bn as Z,
  vi as _,
  ha as a,
  hi as b,
  Qi as c,
  zi as d,
  kn as et,
  Q as f,
  yi as g,
  Hi as h,
  ga as i,
  Tr as j,
  xr as k,
  Ki as l,
  Bi as m,
  ba as n,
  _a as o,
  Ui as p,
  er as q,
  Ea as r,
  Zi as s,
  ya as t,
  On as tt,
  Xi as u,
  Ci as v,
  Lr as w,
  _i as x,
  Si as y,
  lr as z,
};
