/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  dt as n,
  ft as r,
  l as i,
  nt as a,
  st as o,
  u as s,
} from "./chunk~01cfc309bf.js";
import { t as c } from "./chunk~68b7e78d68.js";
import {
  B as l,
  Bt as u,
  G as d,
  Ht as f,
  L as p,
  R as m,
  U as h,
  Ui as g,
  Ut as _,
  V as v,
  Y as y,
  _o as b,
  at as x,
  gi as S,
  ha as C,
  i as w,
  ka as T,
  pt as E,
  r as ee,
  st as D,
  z as O,
} from "./chunk~6b8ddcaac8.js";
import { r as k } from "./chunk~4c761eb6f4.js";
import { o as A } from "./chunk~961c06e93e.js";
import { c as te } from "./chunk~8c66e1c7a5.js";
import {
  A as j,
  D as M,
  I as ne,
  M as re,
  O as ie,
  c as ae,
  d as oe,
  j as N,
  l as P,
  s as F,
  v as se,
  w as ce,
  y as I,
} from "./chunk~f57d770d64.js";
import { r as le } from "./chunk~5adf866415.js";
import { i as ue } from "./chunk~2f085f1384.js";
import { d as de, f as fe, m as pe } from "./chunk~cbbb6ae37c.js";
import { n as me, t as L } from "./chunk~f4c928a27a.js";
import { t as he } from "./chunk~eefd71512b.js";
import { i as ge } from "./chunk~e867464c75.js";
import { t as _e } from "./chunk~4e9767668d.js";
import { o as ve, r as ye } from "./chunk~331382b23f.js";
import {
  D as be,
  O as xe,
  k as Se,
  m as Ce,
  n as we,
  t as Te,
} from "./chunk~2f8c67b4de.js";
import { o as Ee, r as De } from "./chunk~d43c81a658.js";
import { f as Oe } from "./chunk~618fb52a90.js";
import { n as ke } from "./chunk~593a6b8ddc.js";
import { n as Ae, t as je } from "./chunk~ceada343dc.js";
import { r as Me } from "./chunk~21cdc464a1.js";
import { n as Ne } from "./chunk~710e3cfd2f.js";
import { n as Pe, t as Fe } from "./chunk~ffe4581a06.js";
import { c as Ie, i as Le, l as Re, o as ze } from "./chunk~7b4b9eb713.js";
import { n as Be, r as Ve } from "./chunk~3ea79bd96d.js";
import {
  _ as He,
  d as Ue,
  f as We,
  i as Ge,
  o as Ke,
} from "./chunk~3720b337f3.js";
import {
  $h as qe,
  $v as Je,
  $x as Ye,
  $y as Xe,
  Ad as Ze,
  Ag as Qe,
  Ax as $e,
  Bd as et,
  Bp as tt,
  Cf as nt,
  Cn as rt,
  Cv as it,
  Dm as at,
  Eg as ot,
  Eh as st,
  Er as ct,
  F_ as lt,
  Fd as ut,
  Gh as dt,
  Hd as ft,
  Hf as pt,
  Hh as mt,
  Hp as ht,
  If as gt,
  Jy as R,
  K_ as _t,
  Kg as vt,
  Km as yt,
  Kv as bt,
  Lp as xt,
  Md as St,
  Mm as Ct,
  Nd as wt,
  Nf as Tt,
  Nh as Et,
  Np as Dt,
  Oh as Ot,
  Om as kt,
  Op as At,
  Ph as jt,
  Pv as Mt,
  Qh as Nt,
  Qx as Pt,
  Rf as Ft,
  Rg as It,
  Rm as Lt,
  Sf as Rt,
  Sn as zt,
  TS as Bt,
  T_ as Vt,
  Tv as Ht,
  Uh as Ut,
  Um as Wt,
  Uy as z,
  Vb as Gt,
  Vh as Kt,
  Vm as qt,
  Vr as Jt,
  Vy as Yt,
  Wb as Xt,
  Wh as Zt,
  Wm as Qt,
  Xb as B,
  Xh as $t,
  Y_ as en,
  Yd as tn,
  Yf as nn,
  Yp as rn,
  Zf as an,
  Zg as on,
  Zh as V,
  Zx as sn,
  _l as cn,
  _p as ln,
  ag as un,
  ap as dn,
  av as fn,
  cf as pn,
  cv as mn,
  cx as H,
  d_ as hn,
  dd as gn,
  dp as _n,
  e_ as vn,
  eg as yn,
  ep as bn,
  ex as xn,
  ey as Sn,
  fm as Cn,
  ft as wn,
  gd as Tn,
  gr as En,
  gv as Dn,
  hg as On,
  hm as kn,
  id as An,
  if as jn,
  iu as Mn,
  iy as Nn,
  jc as Pn,
  jf as Fn,
  jg as In,
  jp as Ln,
  jx as Rn,
  kh as zn,
  ly as Bn,
  md as Vn,
  mg as Hn,
  nl as Un,
  np as Wn,
  o_ as Gn,
  of as Kn,
  pt as qn,
  qb as U,
  rg as Jn,
  rn as Yn,
  s_ as Xn,
  sg as Zn,
  sl as Qn,
  sp as $n,
  sy as er,
  uh as tr,
  um as nr,
  ux as rr,
  vf as ir,
  vm as ar,
  wc as W,
  wg as or,
  wm as sr,
  wv as cr,
  xr as lr,
  yS as ur,
  yf as dr,
  yg as fr,
  yv as pr,
  yx as mr,
  zf as hr,
} from "./main.js";
function gr(e, t, n, r) {
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
        await fn(`DiscountedItems`, e, t, {
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
function _r(e, t, n, r) {
  let { store_filter_json: i, min_discount_percent: a } = n;
  return {
    queryKey: [`TopWishlistedComingSoon`, i ?? ``, a ?? 0, r, t.country],
    queryFn: async () =>
      (
        await fn(`TopWishlistedComingSoon`, e, t, {
          start: 0,
          count: r,
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
        })
      ).rgItemIDs,
    staleTime: 6e5,
  };
}
var vr = 500,
  yr = 100;
function br(e, t, n, r, i, a = 1) {
  return {
    queryKey: [`AccountOwnedDLCOnSale`, r ?? 0, i, n.country, a],
    queryFn: async () => {
      if (!r) return [];
      let o = await e.fetchQuery(b(t, r)),
        s = Array.from(o).slice(0, vr);
      return s.length
        ? (
            await fn(`SaleTechOwnedDLCOnSale`, t, n, {
              start: 0,
              count: yr,
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
async function xr(e, t) {
  t.set(`origin`, location.origin);
  let n = `${U.STORE_BASE_URL}saleaction/${e}?${t}`,
    r = await fetch(n);
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  let i = await r.json();
  if (i?.success != 1) throw Error(`${n} answered EResult ${i?.success}`);
  return i;
}
async function Sr(e) {
  let t = await xr(
    `ajaxgetpopularcompatlist`,
    new URLSearchParams({ compatDevice: e }),
  );
  if (!t.list) throw Error(`ajaxgetpopularcompatlist answered without a list`);
  return t.list;
}
var Cr = 3e5;
function wr(e) {
  return [`PopularCompatList`, e];
}
function Tr(e) {
  return { queryKey: wr(e), queryFn: () => Sr(e), staleTime: Cr, retry: !1 };
}
var G = e(t()),
  K = r(),
  Er = e(a(), 1);
function Dr(e, t, n) {
  return `linear-gradient(${n ?? 0}deg, ${e || `transparent`} 0%, ${t || `transparent`} 100%)`;
}
function Or(e) {
  return Dr(
    e.background_gradient_bottom,
    e.background_gradient_top,
    e.background_gradient_angle,
  );
}
function kr(e, t, n) {
  if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
  let r = ``;
  if (e.background_image) {
    let n = k.GenerateURLFromHashAndExt(t.clanSteamID, e.background_image);
    r += `,url(${n})`;
  }
  return e.background_gradient_bottom ||
    e.background_gradient_top ||
    r.length > 0 ||
    e.background_repeat ||
    e.border_color ||
    e.border_width
    ? {
        backgroundImage: Or(e) + r,
        backgroundRepeat: e.background_repeat,
        backgroundSize: e.background_repeat == `coverBlur` ? `cover` : ``,
        outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
        outlineColor: e.border_color,
        outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
      }
    : {};
}
function Ar(e, t) {
  return e
    ? e.disable_background && !t
      ? { paddingLeft: 0, paddingRight: 0 }
      : e.background_gradient_bottom ||
          e.background_gradient_top ||
          e.background_repeat ||
          e.border_color ||
          e.border_width
        ? {
            background: Or(e),
            backgroundRepeat: e.background_repeat,
            outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
            outlineColor: e.border_color,
            outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
          }
        : {}
    : {};
}
function jr(e) {
  return e?.clan_steamid ? ke(new Yt(e.clan_steamid), e) : null;
}
var Mr = 100;
async function Nr(e, t) {
  let n = new URLSearchParams();
  (n.set(`event_gids`, [...new Set(e)].sort().join(`,`)),
    n.set(`lang_list`, Ae(t)),
    n.set(`origin`, location.origin));
  let r =
      U.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + n.toString(),
    i = await fetch(r);
  if (i.status === 204) return e.map(() => null);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json(),
    o = new Map((a.events ?? []).map((e) => [e.gid, e]));
  return e.map((e) => o.get(e) ?? null);
}
function Pr(e) {
  return c(
    [`PublicPartnerEventBrowser`, e],
    () => new Er.default((t) => Nr(t, e), { maxBatchSize: Mr, cache: !1 }),
  );
}
function Fr(e, t) {
  return [`PublicPartnerEvent`, e, t];
}
function Ir(e, t, n) {
  return {
    queryKey: Fr(e, t),
    queryFn: async () => (n ? n.load(e) : (await Nr([e], t))[0]),
    select: jr,
    enabled: !!e,
    staleTime: 6e5,
  };
}
function Lr(e) {
  let t = ur(U.LANGUAGE),
    n = Pr(t);
  return o(Ir(e, t, n));
}
function Rr(e, t, n) {
  return xa(t, e, n)?.strTagName || void 0;
}
function zr(e, t, n, r) {
  let i = n == 1 || n == 3 || n == 4,
    a = () => {
      let t = ze(e.smart_section_creator_listid);
      return t
        ? i
          ? R(`#Sale_CreatorList_Section_Editor_title`, t)
          : t
        : null;
    };
  if (e.section_type === `items`)
    switch (N(e)) {
      case `wishlist`:
        return `#Sale_default_label_OnYourWishlist`;
      case `interactive_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `tag_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `deck_topplayed`:
        return `#Sale_TopPlayedOnDeckSection`;
      case `personalized_carousel`:
        if (i) {
          let { nSectionIndex: n, nNumSections: r } = q(e, t);
          return R(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        let o = Rr(e, t, r);
        if (!o && n == 2) {
          let { nSectionIndex: n, nNumSections: r } = q(e, t);
          return R(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        return o ? R(`#Sale_PersonalizedCarousel_Section_title`, o) : null;
      case `creator_list`:
        return a();
    }
  else if (e.section_type === `tabs`) return ``;
  else if (e.section_type === `curator`) {
    if (e.curator_clan_id) {
      let t = Yt.InitFromClanID(e.curator_clan_id, H.EUNIVERSE),
        n = Re.GetCreatorHome(t);
      if (n) return R(`#Sale_CuratorSection_Name`, n.GetName());
    }
    return `#Sale_CuratorSection`;
  } else if (e.section_type === `event_schedule`) return `#Sale_EventSchedule`;
  else if (e.section_type === `curator_recommendation`)
    return `#Sale_CuratorRecommendation_title`;
  else if (e.section_type === `discoveryqueue`) return `#DiscoveryQueue_Title`;
  else if (e.section_type === `sale_events`) return `#Sale_SaleEvent_Section`;
  else if (e.section_type === `calendar`) return `#Sale_SectionType_Calendar`;
  else if (e.section_type === `crosspromotesalepage` && n == 1)
    return `#Sale_CrossPromoSale_DefaultSectionTitle`;
  else if (e.section_type === `creator_list`) return a();
  return null;
}
function Br(e, t, n, r) {
  let i = zr(e, t, n, r);
  return i === null ? null : i && i.startsWith(`#`) ? R(i) : i;
}
function Vr(e, t, n, r, i, a, o, s) {
  if (!e) return ``;
  if (e.section_type === `crosspromotesalepage`) return He(s, n);
  let c = Br(e, t, i, o),
    l = z.GetWithFallback(e.localized_label, n),
    u =
      c ||
      l ||
      (e.default_label === `#Sale_default_label` ? `` : R(e.default_label)),
    d = e.internal_section_title?.trim();
  if ((d?.length ?? 0) > 0) {
    if (i == 3 || i == 4)
      return u?.trim().length == 0 || a
        ? d
        : (0, K.jsxs)(K.Fragment, {
            children: [
              d,
              ` `,
              (0, K.jsx)(lr, {
                tooltip: Xe(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, K.jsx)(`br`, {}),
                  u,
                ),
              }),
            ],
          });
    if (i == 1)
      return u?.trim().length == 0 || a
        ? d
        : (0, K.jsxs)(K.Fragment, {
            children: [
              d,
              ` `,
              (0, K.jsx)(`span`, {
                children: Xe(`#Sale_Section_InternalTitle_Actual`, u),
              }),
            ],
          });
  }
  let f = z.GetWithFallback(e.localized_label_image, n);
  if (!a && f) {
    let e = k.GenerateURLFromHashAndExt(r, f);
    return (0, K.jsx)(`img`, { loading: `lazy`, src: e, alt: u });
  }
  return u;
}
function Hr(e, t, n) {
  if (P(e.section_type))
    switch (N(e)) {
      case `personalized_carousel`:
        let r = Rr(e, t, n);
        return r ? R(`#Sale_PersonalizedCarousel_Section_subtitle`, r) : null;
      case `creator_list`:
        return Le(e.smart_section_creator_listid) ?? null;
    }
  return null;
}
function Ur(e, t, n, r) {
  let i = Hr(e, t, r);
  return i === null
    ? z.GetWithFallback(e.localized_subtitle, n) ||
        (!e.default_subtitle || e.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : R(e.default_subtitle))
    : i && i.startsWith(`#`)
      ? R(i)
      : i;
}
var Wr = `dYYkud-Jf3s-`,
  Gr = `zZo1XshRYmQ-`,
  Kr = `RfHJSn8AdQE-`,
  qr = `D8GFuSKNhX0-`,
  Jr = `woc2JepJIek-`;
function Yr(e, t) {
  return (
    z.GetWithFallback(e.localized_label, t) ||
    (e.default_label === `#Sale_default_label` ? `` : R(e.default_label))
  );
}
function Xr(e) {
  if (P(e.section_type))
    switch (N(e)) {
      case `deck_topplayed`:
        return U.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return e.label_link;
}
function Zr(e) {
  let t,
    n,
    r = !1;
  return (
    e.label_link_style === `button`
      ? ((t = R(`#Sale_SectionLink_BrowseAll`)), (r = !0))
      : e.label_link_style === `browseall`
        ? ((t = R(`#Sale_SectionLink_BrowseAll`)),
          (n = W(Kr, `SaleSectionLabelLinkButton`)))
        : N(e) === `deck_topplayed` &&
          ((t = R(`#EventBrowse_MoreEventsBtn`)),
          (n = W(Ce, `SaleSectionLabelLinkButton`))),
    { strLinkButtonLabel: t, strLinkButtonClasses: n, bSmallButton: r }
  );
}
var Qr = i((e) => {
  let {
      section: t,
      event: n,
      language: r,
      nHiddenCapsules: i,
      title: a,
      subtitle: o,
      bShowSeeMoreHint: s,
      bUseGamepadLinkHint: c,
      onLinkResolved: l,
      personalizedCarousels: u,
      promotedSale: f,
    } = e,
    p = Xt(),
    m = ye(),
    h = f !== void 0,
    { data: g } = Lr(h ? void 0 : We(t)),
    _ = (h ? f : g) ?? void 0,
    v = e.link || Xr(t) || Ie(_);
  if (
    (G.useEffect(() => {
      l?.(v);
    }, [v, l]),
    t.section_type == `title_image` && t.title_image_selected === `image`)
  )
    return null;
  let y = a || Vr(t, n, r, n.clanSteamID.GetAccountID(), m.eLocation, !1, u, _);
  if (!y) return null;
  let b = o || Ur(t, n, r, u),
    x = (0, K.jsx)(`div`, {
      className: W(xe, `SaleSectionHeader`),
      style: $r(t, n, r),
      children: y,
    }),
    S = (0, K.jsx)(`div`, {
      className: W(xe, Se, `SaleSectionSubtitle`),
      style: ei(t, n, r),
      children: b,
    }),
    C = null;
  if ((v?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: e,
      strLinkButtonClasses: n,
      bSmallButton: r,
    } = Zr(t);
    (e &&
      (C =
        p && c
          ? (0, K.jsx)(Fe, { label: e, shown: !!s })
          : r
            ? (0, K.jsx)(`div`, {
                className: W(d, qr),
                children: (0, K.jsx)(w, {
                  url: v,
                  children: (0, K.jsx)(En, { children: e }),
                }),
              })
            : (0, K.jsx)(w, { url: v, className: n, children: e })),
      (x = (0, K.jsx)(w, { url: v, bFocusable: !C, children: x })));
  }
  return (0, K.jsxs)(`div`, {
    className: W(Wr, `SaleSectionLabelCtn`),
    children: [
      (0, K.jsxs)(`div`, { className: Jr, children: [x, !!b && S] }),
      (0, K.jsxs)(`div`, {
        className: Gr,
        children: [
          !!i &&
            (0, K.jsx)(Jt, {
              className: `pL8IDIWBDg8-`,
              toolTipContent: R(`#Sale_HiddenItem_Tooltip`),
              children: (0, K.jsx)(`a`, {
                href: U.STORE_BASE_URL + `account/preferences`,
                children: Xe(
                  i == 1
                    ? `#Sale_HiddenItem_Single_Short`
                    : `#Sale_HiddenItems_Short`,
                  i,
                ),
              }),
            }),
          C,
        ],
      }),
    ],
  });
});
function $r(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? ti(t.jsondata.sale_font, n) : void 0,
    fontWeight: t.jsondata.sale_font_weight,
    fontSize: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
  };
}
function ei(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? ti(t.jsondata.sale_font, n) : void 0,
    fontWeight: 300,
    fontSize: `${t.jsondata.sale_section_font_size && t.jsondata.sale_section_font_size - 3}px`,
    letterSpacing: 0,
    lineHeight: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
    opacity: `50%`,
  };
}
function ti(e, t) {
  return (
    (e ||= ``),
    t === 12
      ? e.replace(`Jolly Lodger`, `New Rocker`)
      : t === 23 || t === 19 || t === 24 || t === 18 || t === 8 || t === 26
        ? e.replace(`Sigmar One`, `Play`)
        : t === 6
          ? e.replace(`Sigmar One`, `Noto Serif SC`)
          : t === 7
            ? e.replace(`Sigmar One`, `Noto Serif TC`)
            : t === 10
              ? e.replace(`Sigmar One`, `M PLUS Rounded 1c`)
              : t === 4
                ? e.replace(`Sigmar One`, `Black Han Sans`)
                : t === 9
                  ? e.replace(`Sigmar One`, `Prompt`)
                  : e
  );
}
function ni(e, t, n, r, i) {
  let a = Vr(t, r, n, r.clanSteamID.GetAccountID(), e);
  if (a) return a;
  let o = R(`#Sale_Section_Header`, i + 1),
    s = `#Sale_Section_Type_` + (t?.section_type || `unknowntype`),
    c = R(s);
  if (c !== s) return `${o} (${c})`;
}
var ri = G.createContext(void 0);
function ii() {
  return G.useContext(ri);
}
function ai(e, t, n, r) {
  if (r === void 0 || n.length <= 1 || !oe(e, t, void 0)) return n;
  let i = $e(r + (t.unique_id ?? 0));
  return sn([...n], t.random_order_top_x ?? 0, i);
}
function oi(e, t, n, r) {
  if (t.length <= n) return t;
  if (r === void 0) return t.slice(0, n);
  let i = $e(r + (e.unique_id ?? 0));
  return sn([...t], 0, i).slice(0, n);
}
async function si(e, t) {
  let n = gn(H.STORE_BASE_URL, t, rr.country_code);
  return ((await (await fetch(n)).json()).rgRecommendedApps ?? []).map(Number);
}
function ci(e, t) {
  return {
    queryKey: li(t),
    queryFn: async () => (t ? si(e, t) : []),
    staleTime: 6e5,
  };
}
function li(e) {
  return [`AccountRecommendedApps`, e ?? 0];
}
var ui = 100;
function di(e, t, n, r, i = 1) {
  return {
    queryKey: [`AccountRecommendedAppsOnSale`, r ?? 0, n.cacheScope ?? ``, i],
    queryFn: async () => {
      if (!r) return [];
      let a = (await e.fetchQuery(ci(t, r))).slice(0, ui),
        o = await Promise.all(a.map((t) => e.fetchQuery(Dn(n, { appid: t }))));
      return a.filter(
        (e, t) => (o[t]?.best_purchase_option?.discount_pct ?? 0) >= i,
      );
    },
    staleTime: 6e5,
  };
}
function fi(e) {
  return e.type !== `sub` && e.type !== `bundle`;
}
function pi(e, t, n, r) {
  let i = [];
  for (let a of e)
    if ((!t || t.has(a)) && !n(a) && (i.push(a), i.length >= r)) break;
  return i;
}
function mi(e, t, n, r = new Set()) {
  for (let t of e.GetSaleSections())
    if (!(!P(t.section_type) || (n && !n.BIncludeSection(t))))
      for (let e of t.capsules) fi(e) && r.add(e.id);
  for (let e of t ?? []) {
    let t = e.capsule;
    fi(t) && (!n || n.BIncludeLinkedCapsule(t)) && r.add(t.id);
  }
  return r;
}
function hi(e, t, n) {
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
var gi = 4;
function _i(e) {
  return e
    .GetSaleSections()
    .filter((e) => P(e.section_type) && N(e) === `personalized_carousel`);
}
function vi(e) {
  return _i(e)[0];
}
function yi(e) {
  if (e.appid()) return { id: e.appid(), type: `game` };
  if (e.bundleid()) return { id: e.bundleid(), type: `bundle` };
  if (e.packageid()) return { id: e.packageid(), type: `sub` };
}
function bi(e, t, n, r, i, a) {
  let o = _i(n),
    s = {
      rgSections: o.map((e) => ({
        eSort: e.smart_section_personalized_carousel_sort ?? 13,
        nMinItems: e.smart_section_personalized_carousel_min_items ?? gi,
        bRandomize: !!e.smart_section_personalized_carousel_randomize,
        bIncludePackages: e.smart_section_include_packages,
        bIncludeBundles: e.smart_section_include_bundles,
        bIncludeDLC: e.smart_section_include_dlc,
        nMinDiscountPercent:
          e.smart_section_min_discount_percent === void 0 ? void 0 : fa(e),
      })),
      storePageFilter: hi(n, !!o[0]?.prioritize_discounts, r),
      strStoreFilterJSON: o[0] ? re(o[0]) : void 0,
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
    queryFn: () => xi(e, t, s, i),
    staleTime: 1 / 0,
  };
}
async function xi(e, t, n, r) {
  if (!r || n.rgSections.length === 0) return [];
  let i = mr.Init(Nn);
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
  (i.Body().set_context(Sn(t)),
    i.Body().set_filters(wn(n.storePageFilter, !1)),
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
  let a = await er.GetItemsByUserRecommendedTags(e, i);
  if (a.GetEResult() != 1)
    throw Error(`GetItemsByUserRecommendedTags failed: ${a.GetEResult()}`);
  return a
    .Body()
    .sections()
    .map((e) => ({
      strTagName: e.tag_name() ?? ``,
      rgCapsules: e.store_item_ids().flatMap((e) => {
        let t = yi(e);
        return t ? [t] : [];
      }),
    }));
}
function q(e, t) {
  let n = t
    .GetSaleSections()
    .filter((e) => P(e.section_type) && N(e) == `personalized_carousel`);
  if (n.length == 0) return { nNumSections: 0, nSectionIndex: -1 };
  let r = n.findIndex((t) => t.unique_id == e.unique_id);
  return { nNumSections: n.length, nSectionIndex: r };
}
function Si(e) {
  return N(e) === `frame_compatibility` ? `frame` : `deck`;
}
function Ci(e, t) {
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
var wi = [
    {
      nOptInTagID: 9,
      rgChildren: [
        { nTagID: lt },
        { nTagID: fr },
        { nTagID: nt },
        { nTagID: Vt },
        { nTagID: vn },
        { nTagID: Rt },
        { nTagID: Jn },
        { nTagID: Tt },
        { nTagID: hr },
      ],
    },
    {
      nOptInTagID: 19,
      rgChildren: [
        { nTagID: et },
        { nTagID: Qe },
        { nTagID: tn },
        { nTagID: ft },
        { nTagID: ht },
        { nTagID: dr },
        { nTagID: ir },
        { nTagID: On },
        { nTagID: Hn },
      ],
    },
    {
      nOptInTagID: 21,
      rgChildren: [
        { nTagID: et },
        { nTagID: st },
        { nTagID: Gn },
        { nTagID: an },
        { nTagID: At },
        { nTagID: mt },
        { nTagID: en },
        { nTagID: Fn },
      ],
    },
    {
      nOptInTagID: 122,
      rgChildren: [
        { nTagID: ft },
        { nTagID: sr },
        { nTagID: bn },
        { nTagID: ln },
        { nTagID: Et },
        { nTagID: vn },
        { nTagID: hn },
      ],
    },
    {
      nOptInTagID: 599,
      rgChildren: [
        { nTagID: jn },
        { nTagID: $n },
        { nTagID: Dt },
        { nTagID: ar },
        { nTagID: kt },
        { nTagID: Lt },
        { nTagID: Wt },
        { nTagID: Ut },
        { nTagID: In },
        { nTagID: vt },
        { nTagID: en },
      ],
    },
    {
      nOptInTagID: 699,
      rgChildren: [
        { nTagID: tn },
        { nTagID: pt },
        { nTagID: dt },
        { nTagID: un },
        { nTagID: ot },
      ],
    },
    {
      nOptInTagID: 701,
      rgChildren: [
        { nTagID: tn },
        { nTagID: Lt },
        { nTagID: 599 },
        { nTagID: Kn },
        { nTagID: pn },
        { nTagID: It },
        { nTagID: rn },
      ],
    },
    {
      nOptInTagID: Kt,
      rgChildren: [
        { nTagID: St },
        { nTagID: ut },
        { nTagID: yt },
        { nTagID: dt },
        { nTagID: Nt },
      ],
    },
    {
      nOptInTagID: V,
      rgChildren: [
        { nTagID: nr },
        { nTagID: Ct },
        { nTagID: qt },
        { nTagID: tr },
        { nTagID: Ot },
        { nTagID: mt },
        { nTagID: Nt },
      ],
    },
    {
      nOptInTagID: _t,
      rgChildren: [
        { eContentDescriptor: 3 },
        { nTagID: $n },
        { nTagID: at },
        { nTagID: zn },
        { nTagID: tt },
        { nTagID: tr },
        { nTagID: $t },
      ],
    },
  ],
  Ti = [
    {
      nTagID: Ln,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: dn },
      ],
    },
    {
      nTagID: or,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: Wn },
        { nTagID: Zt },
      ],
    },
    {
      nTagID: Qt,
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
      nTagID: Cn,
      rgChildren: [
        { nTagID: Xn },
        { nTagID: 19 },
        { nTagID: on },
        { nTagID: $t },
        { nTagID: en },
      ],
    },
    {
      nTagID: Zn,
      rgChildren: [
        { nTagID: V },
        { nTagID: kn },
        { nTagID: 599 },
        { nTagID: 21 },
        { nTagID: mt },
        { nTagID: Ft },
        { nTagID: gt },
        { nTagID: Lt },
      ],
    },
    {
      nTagID: tr,
      rgChildren: [
        { nTagID: 21 },
        { nTagID: V },
        { nTagID: At },
        { nTagID: xt },
        { nTagID: _n },
      ],
    },
    {
      eContentDescriptor: 3,
      rgChildren: [
        { nTagID: _t },
        { nTagID: at },
        { nTagID: V },
        { nTagID: Ze },
        { nTagID: wt },
      ],
    },
  ],
  Ei = [
    {
      strOptInTag: `option_58733`,
      rgChildren: [
        { nTagID: yn },
        { nTagID: qe },
        { nTagID: nn },
        { nTagID: 128 },
        { nTagID: jt },
      ],
    },
    {
      strOptInTag: `option_40066`,
      rgChildren: [
        { nTagID: yn },
        { nTagID: qe },
        { nTagID: nn },
        { nTagID: jt },
      ],
    },
    { strAppType: `software` },
    { strFeature: `vr` },
    { strFeature: `mac` },
  ],
  Di = {
    linux: `#Platform_Linux`,
    mac: `#Platform_Mac`,
    vr: `#Platform_VR`,
    "vr only": `#Sale_Tabs_TagFilter_Feature_VROnly`,
    free: `#Sale_Tabs_TagFilter_Feature_Free`,
    discounted: `#Sale_Tabs_TagFilter_Feature_Discounted`,
  },
  Oi = [
    {
      strClass: `genre`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Genre`,
      rgNodes: wi,
    },
    {
      strClass: `theme`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Theme`,
      rgNodes: Ti,
    },
    {
      strClass: `feature`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Feature`,
      rgNodes: Ei,
    },
  ];
function ki(e) {
  return e?.rgNodes
    ? e.rgNodes
    : (Oi.find((t) => t.strClass === e?.tag_class)?.rgNodes ?? []);
}
function Ai(e) {
  return e.nTagID
    ? String(e.nTagID)
    : e.nOptInTagID || e.strOptInTag
      ? `optin:` + Ri(e)
      : e.eContentDescriptor
        ? `descriptor:` + e.eContentDescriptor
        : e.strFeature
          ? `feature:` + e.strFeature
          : `apptype:` + e.strAppType;
}
function ji(e) {
  if (e.strFeature) return Di[e.strFeature];
  if (e.strAppType) return `#AppTypeLabel_` + e.strAppType;
}
function Mi(e) {
  if (e)
    return e.strChildKey
      ? e.strParentKey + `,` + e.strChildKey
      : e.strParentKey;
}
var Ni = `tabtag`,
  Pi = `tabsubtag`;
function Fi(e, t) {
  if (e) return { strParentKey: e, strChildKey: t || void 0 };
}
function Ii(e) {
  return { [Ni]: e?.strParentKey ?? null, [Pi]: e?.strChildKey ?? null };
}
function Li(e, t, n) {
  if (!e) return;
  let r = J(ki(t), e.strParentKey);
  if (!r || !n(r)) return;
  if (!e.strChildKey) return e;
  let i = J(r.rgChildren ?? [], e.strChildKey);
  return !i || !n(i) ? { strParentKey: e.strParentKey } : e;
}
function Ri(e) {
  return e.strOptInTag ?? String(e.nOptInTagID);
}
function zi(e, t) {
  return e.nOptInTagID || e.strOptInTag
    ? (Pt(t, `Opt-in registration tag used on a sale without an opt-in`),
      {
        type: I.k_EStoreFilterClauseTypeOptInRegistrationTag,
        optin: t,
        value: Ri(e),
      })
    : e.nTagID
      ? { type: I.k_EStoreFilterClauseTypeStoreTag, value: e.nTagID }
      : e.eContentDescriptor
        ? {
            type: I.k_EStoreFilterClauseTypeContentDescriptor,
            value: e.eContentDescriptor,
          }
        : e.strFeature
          ? { type: I.k_EStoreFilterClauseTypeFeatureTag, value: e.strFeature }
          : { type: I.k_EStoreFilterClauseTypeAppType, value: e.strAppType };
}
function J(e, t) {
  return e.find((e) => Ai(e) === t);
}
function Bi(e, t, n) {
  if (!e) return;
  let r = J(ki(t), e.strParentKey);
  if (!r) return;
  if (!e.strChildKey) return zi(r, n);
  let i = J(r.rgChildren ?? [], e.strChildKey);
  if (i)
    return {
      type: I.k_EStoreFilterClauseTypeAnd,
      rgSubexpressions: [zi(r, n), zi(i, n)],
    };
}
function Vi() {
  let [e] = Ji(`tab`),
    t = G.useCallback((e, t) => Xi({ ...t, tab: String(e) }), []);
  return [Hi(e), t];
}
function Hi(e) {
  return e === null ? 0 : Number(e);
}
function Y(e) {
  let [t] = Vi();
  return Ui(e, t);
}
function Ui(e, t) {
  let n = Wi(e);
  return n.find((e) => e.unique_id === t) ?? n[0];
}
function Wi(e) {
  return (
    e.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter((e) => !e.hide) ?? []
  );
}
function Gi(e, t, n, r) {
  if (!n || t.diable_tab_id_filtering) return;
  let i = e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name,
    a = Bi(r, n.tab_tag_filter, i),
    o =
      n.store_filter && a
        ? {
            type: I.k_EStoreFilterClauseTypeAnd,
            rgSubexpressions: [n.store_filter, a],
          }
        : (n.store_filter ?? a);
  if (o) return Ki(e, t, n) ? o : void 0;
}
function Ki(e, t, n) {
  let r = e.GetSaleSections(),
    i = r.findIndex((e) => e.section_type === `tabs`);
  return i < 0 || !r[i].tabs?.includes(n) ? !1 : r.indexOf(t) > i;
}
function qi(e, t) {
  let n = Y(e);
  return !n || n === Wi(e)[0] || t.diable_tab_id_filtering || !Ki(e, t, n)
    ? ``
    : `tabid${n.unique_id}`;
}
function Ji(e) {
  let t = G.useSyncExternalStore(rt, Yi, Yi);
  return [
    new URLSearchParams(t).get(e),
    G.useCallback((t) => Xi({ [e]: t ?? null }), [e]),
  ];
}
function Yi() {
  return location.search;
}
function Xi(e) {
  let t = new URL(window.location.href);
  for (let [n, r] of Object.entries(e))
    r === null ? t.searchParams.delete(n) : t.searchParams.set(n, r);
  t.href !== window.location.href && zt((e) => e, t);
}
function Zi(e) {
  let t = Y(e),
    n = Qi(),
    [r] = Ji(Ni),
    [i] = Ji(Pi),
    a = G.useCallback((e, t) => Xi({ ...t, ...Ii(e) }), []);
  return [Li(Fi(r, i), t?.tab_tag_filter, n), a];
}
function Qi() {
  let { data: e } = Tn();
  return G.useMemo(() => $i(e), [e]);
}
function $i(e) {
  let t = !!B.logged_in && U.EREALM !== Bt.k_ESteamRealmChina && e !== void 0,
    n = new Set(Vn(e));
  return (e) => !e.eContentDescriptor || (t && !n.has(e.eContentDescriptor));
}
function ea(e, t) {
  let n = Y(e),
    [r] = Zi(e);
  return Gi(e, t, n, r);
}
var ta = 50;
function na(e, t, n) {
  let { defaultInfo: r } = t;
  switch (e.type) {
    case I.k_EStoreFilterClauseTypeStoreTag:
      return !!t.tags?.some((t) => t.tagid === e.value);
    case I.k_EStoreFilterClauseTypeFeatureTag:
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
    case I.k_EStoreFilterClauseTypeAppType:
      return (
        (r?.item_type !== void 0 && r.type !== void 0
          ? Mn(r.item_type, r.type)
          : `game`) === e.value
      );
    case I.k_EStoreFilterClauseTypeLanguage: {
      let n = ur(String(e.value));
      return !!t.supportedLanguages?.some(
        (e) =>
          e.elanguage === n && (e.supported || e.subtitles || e.full_audio),
      );
    }
    case I.k_EStoreFilterClauseTypeContentDescriptor:
      return !!r?.content_descriptorids?.some((t) => t === e.value);
    case I.k_EStoreFilterClauseTypePrice: {
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
    case I.k_EStoreFilterClauseTypeOr: {
      let r = e.rgSubexpressions?.some((e) => na(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case I.k_EStoreFilterClauseTypeAnd: {
      let r = e.rgSubexpressions?.every((e) => na(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case I.k_EStoreFilterClauseTypeOptInRegistrationTag:
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
function ra(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingApps`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n,
    ],
    queryFn: () => aa(e, t, n, (e) => ({ appid: e }), r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
function ia(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingItems`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n?.map(Je),
    ],
    queryFn: () => aa(e, t, n, (e) => e, r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
async function aa(e, t, n, r, i, a) {
  let o = oa(i, {
      bTags: !1,
      bPlatforms: !1,
      bLanguages: !1,
      bOptInRegistrationTags: !1,
    }),
    s = Math.floor(Date.now() / 1e3),
    c = [];
  for (let l = 0; l < n.length && c.length < a; l += ta) {
    let u = n.slice(l, l + ta),
      d = await Promise.all(u.map((n) => sa(e, t, r(n), o)));
    u.forEach((e, t) => {
      c.length < a && na(i, d[t], s) && c.push(e);
    });
  }
  return c;
}
function oa(e, t) {
  switch (e.type) {
    case I.k_EStoreFilterClauseTypeStoreTag:
      t.bTags = !0;
      break;
    case I.k_EStoreFilterClauseTypeFeatureTag:
      t.bPlatforms = !0;
      break;
    case I.k_EStoreFilterClauseTypeLanguage:
      t.bLanguages = !0;
      break;
    case I.k_EStoreFilterClauseTypeOptInRegistrationTag:
      t.bOptInRegistrationTags = !0;
      break;
    case I.k_EStoreFilterClauseTypeOr:
    case I.k_EStoreFilterClauseTypeAnd:
      e.rgSubexpressions?.forEach((e) => oa(e, t));
  }
  return t;
}
async function sa(e, t, n, r) {
  let [i, a, o, s, c] = await Promise.all([
    e.fetchQuery(Dn(t, n)).catch(() => void 0),
    r.bTags ? e.fetchQuery(Ht(t, n)).catch(() => null) : null,
    r.bPlatforms ? e.fetchQuery(cr(t, n)).catch(() => null) : null,
    r.bLanguages ? e.fetchQuery(it(t, n)).catch(() => null) : null,
    r.bOptInRegistrationTags ? e.fetchQuery(pr(t, n)).catch(() => null) : null,
  ]);
  return {
    defaultInfo: i,
    tags: a,
    platforms: o,
    supportedLanguages: s,
    optInRegistrationTags: c,
  };
}
var ca = {
    popularity: { eType: `game`, bDropsOwned: !1 },
    wishlist: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender: { eType: `game`, bDropsOwned: !0 },
    wishlist_onsale: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender_onsale: { eType: `game`, bDropsOwned: !0 },
    dlc_onsale: { eType: `dlc`, bDropsOwned: !0 },
    dlc_music_onsale: { eType: `music`, bDropsOwned: !0 },
  },
  la = 24,
  ua = 100,
  da = 500;
function fa(e) {
  return Math.max(1, e.smart_section_min_discount_percent ?? 1);
}
function pa(e) {
  return X(e) && ca[e].bDropsOwned;
}
function X(e) {
  return e !== void 0 && e in ca;
}
function ma(e, t, n, r) {
  let i = N(n),
    a =
      i === `tag`
        ? { tagid: n.smart_section_tag }
        : i === `top_n`
          ? { top_n_sellers: da }
          : {};
  return (
    (a.min_discount_percent = fa(n)),
    (a.include_packages = n.smart_section_include_packages),
    (a.include_bundles = n.smart_section_include_bundles),
    (a.include_dlc = n.smart_section_include_dlc),
    r && (a.store_filter_json = JSON.stringify(r)),
    gr(
      e,
      t,
      a,
      i === `tag` && n.random_from_entire_set
        ? ua
        : n.smart_section_max_apps || la,
    )
  );
}
function ha(e, t, n, r) {
  return _r(
    e,
    t,
    {
      min_discount_percent: n.smart_section_min_discount_percent || void 0,
      store_filter_json: r ? JSON.stringify(r) : void 0,
    },
    ba(n),
  );
}
function Z(e, t) {
  if (Ue(t)) return `manual`;
  if (t.section_type !== `items`) return;
  let n = N(t);
  if (t.enable_faceted_browsing) return n === void 0 ? `faceted` : void 0;
  if (n === void 0) return `manual`;
  if (
    (n === `deck_compatibility` || n === `frame_compatibility`) &&
    t.smart_section_data_source === `popularity`
  )
    return `popularity`;
  if (
    ((n === `wishlist` || n === `interactive_recommender`) &&
      e.jsondata.item_source_type !== se.k_EContentHub) ||
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
}
function ga(e, t, n) {
  let r = e.GetDayIndexFromEventStart(n);
  return t.capsules.filter(
    (e) => e.visibility_index === void 0 || e.visibility_index === r,
  );
}
function _a(e, t, n) {
  return ga(e, t, n).flatMap((e) => {
    let t = de(e);
    return t ? [t] : [];
  });
}
function va(e, t, n, r, i) {
  let a = ba(t),
    o = Z(e, t);
  if (X(o)) {
    let n = ca[o].eType;
    return (r.tabStoreFilter ? r.tabFilteredAppIDs : ya(e, t, r, a))?.map(
      (e) => ({ id: e, type: n }),
    );
  }
  switch (o) {
    case `manual`: {
      let i = ga(e, t, n);
      if (!r.tabStoreFilter) return i;
      if (!r.tabFilteredItems) return;
      let a = new Set(r.tabFilteredItems.map(Je));
      return i.filter((e) => {
        let t = de(e);
        return t !== void 0 && a.has(Je(t));
      });
    }
    case `tag`:
    case `top_n`:
    case `all_discounted`: {
      if (!r.discountedItems) return;
      let e = r.discountedItems.map(fe).filter((e) => !!e);
      return o === `tag` && t.random_from_entire_set
        ? oi(t, e, a, i)
        : e.slice(0, a);
    }
    case `topwishlisted`:
      return r.topWishlistedItems
        ?.map(fe)
        .filter((e) => !!e)
        .slice(0, a);
    case `personalized_carousel`:
      return xa(e, t, r.personalizedCarousels)?.rgCapsules.slice(0, a);
    default:
      return;
  }
}
function ya(e, t, n, r) {
  let i = Z(e, t);
  if (X(i))
    switch (i) {
      case `popularity`:
        return n.compatAppList && Ci(t, n.compatAppList).slice(0, r);
      case `wishlist`:
        return Q(n.wishlistAppIDs, mi(e, e.GetTaggedItems()), n.ownedAppIDs, r);
      case `interactive_recommender`:
        return Q(
          n.recommendedAppIDs,
          mi(e, e.GetTaggedItems()),
          n.ownedAppIDs,
          r,
        );
      case `wishlist_onsale`:
        return Q(n.wishlistOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `interactive_recommender_onsale`:
        return Q(n.recommendedOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_onsale`:
        return Q(n.ownedDLCOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_music_onsale`:
        return Q(n.ownedSoundtracksOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      default:
        Ye(i, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
}
function ba(e) {
  return e.smart_section_max_apps || la;
}
function xa(e, t, n) {
  if (n) return n[q(t, e).nSectionIndex] ?? null;
}
function Sa(e, t) {
  let n = Z(e, t) === `personalized_carousel`;
  return Ca(e, vi(e) ?? t, n);
}
function Ca(e, t, r) {
  let i = Bn(),
    a = n(),
    { storeBrowseContext: s } = mn(),
    c = Y(e),
    [l] = Zi(e),
    u = t ? Gi(e, t, c, l) : void 0,
    { data: d, isSuccess: f } = o({
      ...te(e.clanSteamID.GetAccountID(), a),
      enabled: r,
    }),
    { data: p } = o({
      ...bi(i, s, e, je(e, d), B.accountid, u),
      enabled: r && f,
    });
  return p;
}
function Q(e, t, n, r) {
  if (e && n) return pi(e, t, (e) => n.has(e), r);
}
function wa(e, t, r) {
  let i = !r,
    a = ve(),
    s = ii(),
    c = Z(e, t),
    l = Bn(),
    u = n(),
    { storeBrowseContext: d, dataLoader: f } = mn(),
    p = ea(e, t),
    m = fa(t),
    { data: h } = o({ ...Tr(Si(t)), enabled: i && c === `popularity` }),
    { data: g } = o({ ...S(l, B.accountid), enabled: i && c === `wishlist` }),
    { data: _ } = o({
      ...ci(l, B.accountid),
      enabled: i && c === `interactive_recommender`,
    }),
    { data: v } = o({
      ...An(l, d, B.accountid, m),
      enabled: i && c === `wishlist_onsale`,
    }),
    { data: y } = o({
      ...di(u, l, f, B.accountid, m),
      enabled: i && c === `interactive_recommender_onsale`,
    }),
    { data: x } = o({
      ...br(u, l, d, B.accountid, `dlc`, m),
      enabled: i && c === `dlc_onsale`,
    }),
    { data: C } = o({
      ...br(u, l, d, B.accountid, `music`, m),
      enabled: i && c === `dlc_music_onsale`,
    }),
    { data: w } = o({
      ...ma(l, d, t, p),
      enabled: i && (c === `tag` || c === `top_n` || c === `all_discounted`),
    }),
    { data: T } = o({ ...ha(l, d, t, p), enabled: i && c === `topwishlisted` }),
    E = Sa(e, t),
    { data: ee } = o({ ...b(l, B.accountid), enabled: i && pa(c) }),
    D = (0, G.useMemo)(
      () => ({
        compatAppList: h,
        wishlistAppIDs: g,
        recommendedAppIDs: _,
        wishlistOnSaleAppIDs: v,
        recommendedOnSaleAppIDs: y,
        ownedDLCOnSaleAppIDs: x,
        ownedSoundtracksOnSaleAppIDs: C,
        discountedItems: w,
        topWishlistedItems: T,
        personalizedCarousels: E,
        ownedAppIDs: ee,
        tabStoreFilter: p,
      }),
      [h, g, _, v, y, x, C, w, T, E, ee, p],
    ),
    O = !!p && X(c),
    k = (0, G.useMemo)(() => (O ? ya(e, t, D, 1 / 0) : void 0), [O, e, t, D]),
    { data: A } = o({
      ...ra(u, f, k, p, ba(t)),
      enabled: i && O && k !== void 0,
    }),
    te = !!p && c === `manual`,
    j = (0, G.useMemo)(() => (te ? _a(e, t, a) : void 0), [te, e, t, a]),
    { data: M } = o({
      ...ia(u, f, j, p, j?.length ?? 0),
      enabled: i && te && j !== void 0,
    });
  return (0, G.useMemo)(() => {
    let n = va(e, t, a, { ...D, tabFilteredAppIDs: A, tabFilteredItems: M }, s);
    return n && ai(e, t, n, s);
  }, [e, t, a, D, A, M, s]);
}
function Ta(e) {
  return (wa(e.event, e.section), null);
}
function Ea(e, t) {
  return e == null || e == null || !Aa(t)
    ? !0
    : t.reverse_show_on_tabs
      ? !(!t.show_on_tabs || t.show_on_tabs.includes(e))
      : !!(t.show_on_tabs && t.show_on_tabs.includes(e));
}
function Da(e) {
  return ka(e, `[Feature] Adult Only Sexual Content`);
}
function Oa(e) {
  return ka(e, `[Feature] Coming Soon`);
}
function ka(e, t) {
  if (e?.sale_tag_filter?.clauses?.length == 1) {
    let n = e.sale_tag_filter.clauses[0];
    return (
      n.type === `Must have` && n.or_tags.length === 1 && n.or_tags[0] === t
    );
  }
  return !1;
}
function Aa(e) {
  return !!(
    e.show_on_tabs &&
    e.show_on_tabs.length > 0 &&
    !e.diable_tab_id_filtering
  );
}
function ja(e, t) {
  return e.show_deck_compability_details ||
    e.display_hw_compatibility_details == 1 ||
    t?.BFilterRequiresSteamDeckVerifiedOrPlayable()
    ? 1
    : e.display_hw_compatibility_details == 4 ||
        t?.BFilterRequiresSteamFrameVerifiedOrPlayable()
      ? 4
      : e.display_hw_compatibility_details == 3 ||
          t?.BFilterRequiresSteamMachineVerifiedOrPlayable()
        ? 3
        : 0;
}
var Ma = `partnereventaction/eventsummary`;
function Na(e) {
  let t = new URLSearchParams();
  return (
    t.set(`clan_account_id`, String(e.clanAccountID)),
    t.set(`event_gid`, e.strEventGID),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
var Pa = `partnereventaction/eventsummaries`;
function Fa(e) {
  let t = new Map();
  for (let n of e)
    t.has(n.strEventGID) ||
      t.set(n.strEventGID, {
        clanAccountID: n.clanAccountID,
        strEventGID: n.strEventGID,
      });
  return [...t.values()].sort(
    (e, t) =>
      e.strEventGID.length - t.strEventGID.length ||
      (e.strEventGID < t.strEventGID ? -1 : +(e.strEventGID > t.strEventGID)),
  );
}
function Ia(e) {
  return Fa(e)
    .map((e) => `${e.clanAccountID}:${e.strEventGID}`)
    .join(`,`);
}
function La(e) {
  let t = new URLSearchParams();
  return (
    t.set(`events`, Ia(e.rgEvents)),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
async function Ra(e) {
  let t = `${U.STORE_BASE_URL}${Ma}?${Na(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summary ?? null;
}
async function za(e) {
  if (e.rgEvents.length === 0) return [];
  let t = `${U.STORE_BASE_URL}${Pa}?${La(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summaries ?? [];
}
function Ba(e, t, n) {
  return [`PartnerEventSummary`, e, t, n];
}
function Va(e, t) {
  return {
    queryKey: Ba(e.clanAccountID, e.strEventGID, e.eLanguage),
    queryFn: () => Ra(e),
    select: t,
    staleTime: 6e5,
  };
}
function Ha(e) {
  return [`PartnerEventSummaries`, e.eLanguage, Ia(e.rgEvents)];
}
function Ua(e) {
  return { queryKey: Ha(e), queryFn: () => za(e), staleTime: 3e5 };
}
function Wa(e, t, n) {
  let r = n,
    i = 0;
  for (i = 0; i < t; i++) {
    let t = e[i % e.length];
    if (r < t) break;
    r -= t;
  }
  return i;
}
function Ga(e, t) {
  if (t === void 0 || !e.capsule_layout_by_item_count) return e;
  let n = e.capsule_layout_by_item_count.find(
    (e) => e.max_items === void 0 || t <= e.max_items,
  );
  return n
    ? {
        ...e,
        capsules_per_row_array: n.capsules_per_row_array,
        carousel_rows: n.carousel_rows,
      }
    : e;
}
function Ka(e, t) {
  if (j(e)) return 0;
  let n = M(e);
  return n <= 0 ? 0 : n + t;
}
function qa(e, t, n, r, i) {
  let a =
    `section_` +
    r +
    `_` +
    e.GID +
    (i || 0) +
    ge(t.unique_id ? t.unique_id.toString() : JSON.stringify(t)).toString();
  return (
    n &&
      e.rtime32_last_local_modification &&
      (a += `_` + e.rtime32_last_local_modification),
    a
  );
}
function Ja(e) {
  let { id: t, type: n } = e,
    r = pe({ id: t, type: n }),
    { data: i } = Mt(r);
  return (0, K.jsx)(`div`, {
    className: T,
    children: (0, K.jsx)(L, {
      ...e,
      bShowReviewSummary: !0,
      bShowDemoButton: e.bShowDemoButton || i?.type == 1,
      bPreferDemoStorePage: e.bPreferDemoStorePage,
    }),
  });
}
var Ya = `SppL95yx9BU-`,
  Xa = `_7Na7-QNyAn4-`,
  Za = `zdh0LkaHoKw-`,
  Qa = `vZlB-C6RUio-`;
function $a(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bHidePrice: i,
      bHidePlatforms: a,
      bShowDeckCompatibilityDialog: o,
      eHardwareCompatibilityDisplay: s,
      bAutoFocus: c,
    } = e,
    l = pe({ id: t, type: n }),
    { data: d } = Mt(l),
    { data: p } = bt(l),
    [m, h] = _(o, s),
    g = d?.item_type == 0;
  return (0, K.jsx)(f, {
    appid: g ? d.id : void 0,
    children: (0, K.jsxs)(Pn, {
      "flow-children": `grid`,
      navEntryPreferPosition: cn.PREFERRED_CHILD,
      autoFocus: c,
      navKey: `purchase_only_` + d?.id,
      children: [
        `	`,
        (0, K.jsxs)(`div`, {
          className: Xa,
          children: [
            (0, K.jsx)(`div`, {
              className: void 0,
              children: (0, K.jsx)(`div`, { className: Ya, children: d?.name }),
            }),
            (0, K.jsxs)(`div`, {
              className: Qa,
              children: [
                !a &&
                  d?.type != 10 &&
                  (0, K.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, K.jsx)(u, { id: l }),
                      !!(m && d?.item_type == 0 && p) &&
                        (0, K.jsx)(Yn, {
                          eDisplay: h,
                          storeItemPlatform: p,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, K.jsx)(me, {
                  id: l,
                  className: Za,
                  bShowDemoButton: r,
                  bShowCartButton: !0,
                  bHidePrice: i,
                  bHideWishlistButton: !0,
                  bShowDeckCompatibilityDialog: o,
                  eHardwareCompatibilityDisplay: s,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function eo(e) {
  let { displayStyle: t, requestCompact: n, ...r } = e,
    { type: i } = e,
    a = Xt();
  if (t === `purchaseonlydisplay`) return (0, K.jsx)($a, { ...r });
  if (a) return (0, K.jsx)(L, { ...r });
  if (n && !ue()) return (0, K.jsx)(Ja, { ...r });
  if (i == `bundle` || i == `sub`) return (0, K.jsx)(L, { ...r });
  if (ue() && (t == `library` || t == `animated`))
    return (0, K.jsx)(L, { ...e, bShowReviewSummary: !0 });
  switch (t) {
    case `library`:
      return (0, K.jsx)(_e, { ...r });
    case `animated`:
      return (0, K.jsx)(_e, { ...r });
    default:
      return (0, K.jsx)(L, { ...r, bShowReviewSummary: !0 });
  }
}
function to(e, t) {
  return !(e === `purchaseonlydisplay` || t || ue());
}
var no = `h4e3CZE5mfI-`,
  ro = `lJc7R9Bil2I-`,
  io = `IS179RoYT1Q-`,
  ao = `SZeormjSwYo-`,
  oo = 240;
function so(e, t) {
  return $(e, t).every((e) => e === 1);
}
function co(e) {
  let t = !1,
    n = N(e);
  return (
    n && (t = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(n)),
    !!(t || e.show_parent_app)
  );
}
function lo(e, t) {
  if (j(e)) return 0;
  let n = M(e);
  return n <= 0 ? 0 : n + t;
}
function $(e, t) {
  return !e || e.enable_faceted_browsing
    ? [1]
    : e.capsules_per_row_array
      ? t
        ? e.capsules_per_row_array.map((t, n) => {
            let r =
              e.capsule_style_per_row_array &&
              e.capsule_style_per_row_array?.length > n
                ? e.capsule_style_per_row_array[n]
                : `grid`;
            return Rn(t, 1, r == `tall` ? 4 : 3);
          })
        : e.capsules_per_row_array
      : e.adaptive_capsules_per_row
        ? t
          ? [2, 3]
          : [2, 3, 4, 3]
        : [Rn(e.capsules_per_row || 1, 1, t ? 3 : 5) || 1];
}
function uo(e, t, n) {
  let r = $(e, n),
    i = j(e) ? ie(e) : lo(e, t),
    a = 0;
  for (let e = 0; e < i; e++) a += r[e % r.length];
  return a;
}
function fo(e, t) {
  return e.capsule_style_per_row_array
    ? e.capsule_style_per_row_array
    : so(e, t)
      ? [`fullrow`]
      : [`grid`];
}
function po(e, t) {
  let { saleEvent: n, language: r, index: i, section: a } = t;
  return (0, K.jsx)(
    jo,
    {
      link: e,
      language: r,
      clanAccountID: n.clanSteamID.GetAccountID(),
      strClassName: y,
    },
    a.unique_id + `_` + i,
  );
}
function mo(e, t) {
  let {
    capsuleStyle: n,
    index: r,
    section: i,
    saleEvent: a,
    rowElements: o,
  } = t;
  if (A(e)) return null;
  let s = co(i),
    c = a.BUseSubscriptionLayout(),
    l = j(i) && !t.bIsSingleCapsule,
    u = ja(i, t.activeTab),
    d = i.unique_id + `_` + r + `_` + e.type + `_` + e.id;
  if (n !== `fullrow`) {
    let a = W(l && `FolDBzXMW2I-`);
    return (0, K.jsx)(
      `div`,
      {
        className: a,
        children: (0, K.jsx)(
          Be,
          {
            imageType: n === `tall` ? `library` : `header`,
            navKey: d,
            capsule: e,
            bShowParentApp: s,
            bUseSubscriptionLayout: c,
            bShowDemoButton:
              i.show_as_demos || t.activeTab?.BFilterRequiresFeatureDemo(),
            bPreferDemoStorePage: i.prefer_demo_store_page,
            bHidePrice: i.hide_prices,
            bHidePlatforms: o >= 5,
            index: r,
            bPreferAssetWithoutOverride: !!i.prefer_assets_without_overrides,
            eHardwareCompatibilityDisplay: u,
          },
          d,
        ),
      },
      d,
    );
  }
  {
    let n = i.single_item_style ? i.single_item_style : ne,
      a;
    (`overrideNavigation` in e &&
      (a = (t) => (
        e.overrideNavigation(t),
        t && (t.preventDefault(), t.stopPropagation()),
        !1
      )),
      ue() && (n == `library` || n == `animated`) && (n = `bordered`));
    let o = W({
      [p]: !l && n == `bordered`,
      [O]: l && n == `bordered`,
      [m]: l && n == `animated`,
      [Ve + r]: r === 0,
    });
    return (0, K.jsx)(
      `div`,
      {
        className: o,
        children: (0, K.jsx)(eo, {
          id: e.id,
          type: e.type,
          displayStyle: n,
          bShowPurchaseOptionsButton: i.show_purchase_options,
          bUseSubscriptionLayout: c,
          bShowDemoButton:
            i.show_as_demos || t.activeTab?.BFilterRequiresFeatureDemo(),
          bPreferDemoStorePage: i.prefer_demo_store_page,
          bHidePrice: i.hide_prices,
          eHardwareCompatibilityDisplay: u,
          fnOnClickOverride: a,
          bPreferAssetWithoutOverride: !!i.prefer_assets_without_overrides,
        }),
      },
      d,
    );
  }
}
function ho(e, t, n, r, i, a, o, s, c) {
  let {
    RenderEvent: l,
    RenderEventSummary: u,
    RenderItemDef: d,
    RenderLoyaltyReward: f,
    RenderCuratorList: p,
  } = c || {};
  return e.section_type === `events` || e.section_type === `sale_events`
    ? i && u
      ? i.map((e) => ({ Render: (t) => u(e, t) }))
      : !r || !l
        ? []
        : r.filter((e) => !!e).map((e) => ({ Render: (t) => l(e, t) }))
    : e.section_type === `links` ||
        e.section_type === `title_image` ||
        N(e) === `sale_tabhub`
      ? (e.section_type === `title_image` &&
          e.title_image_selected === `title`) ||
        !n
        ? []
        : n.map((e) => ({ Render: (t) => po(e, t) }))
      : ae(e.section_type)
        ? t
          ? t.filter((e) => !A(e)).map((e) => ({ Render: (t) => mo(e, t) }))
          : []
        : e.section_type === `itemdef`
          ? !a || !d
            ? []
            : a.map((e) => ({ Render: (t) => d(e, t) }))
          : e.section_type === `point_shop_smart`
            ? !o || !f
              ? []
              : o.map((e) => ({ Render: (t) => f(e, t) }))
            : e.section_type === `creator_list_of_lists`
              ? !s || !p
                ? []
                : s.map((e) => ({ Render: (t) => p(e, t) }))
              : [];
}
function go(e, t) {
  return t[e % t.length];
}
function _o(e, t) {
  return e === `tall` ? t + 1 : t;
}
function vo(e, t, n, r, i, a, o, s, c, l) {
  let {
    nMaxCapsulesPerRow: u,
    bScreenIsWide: d,
    nShowAdditionalRows: f,
    bShowAsCarousel: p,
    bAutoAdvance: m,
    bHideIfTooFewItems: h,
    strCarouselKey: g,
    bPaginationPills: _,
  } = t;
  if (n.length === 0) return { content: null, bAdditionalContent: !1 };
  let y = n.length === 1,
    b = (e, t, n, r, i) => {
      let a = [];
      for (let o = t; o < n; o++) {
        let t = {
            capsuleStyle: i,
            index: o,
            rowElements: r,
            bIsSingleCapsule: y,
            ...s,
          },
          n = e[o].Render(t);
        n && a.push(n);
      }
      return a;
    },
    x = null,
    S = !1,
    C = y ? [1] : r,
    w = i;
  y && (u > 1 || w[0] == `tall`) && (w = [`fullrow`]);
  let T = p && (a <= 1 || (!!_ && !d)),
    E = Math.min(C[0], u);
  if (T && n.length > E)
    x = (0, G.createElement)(
      Me,
      {
        ...t,
        key: g,
        hideArrows: !d,
        visibleElements: E,
        className: W({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !l,
          ItemCount_4: C[0] == 4,
          [io]:
            t && t.section && t.section.section_type == `creator_list_of_lists`,
        }),
        useTestScrollbar: !0,
        bLazyRenderChildren: !0,
        bAutoAdvance: !!m,
        hidePips: c,
        padded: !l,
        screenIsWide: d,
        navKey: e,
        lazyRenderPlaceholderWidth: oo,
      },
      b(n, 0, n.length, E, go(0, w)),
    );
  else {
    let e = o(f),
      r = !0;
    if (p) ((e = a), (r = T));
    else if (f == 0 && e > 0) {
      let t = 0,
        r = 0;
      for (; t < e && r < n.length; t++) {
        let e = Math.min(C[t % C.length], u);
        r += e;
      }
      e = Math.max(2, t);
    }
    let i = [],
      s = [],
      l = 0;
    for (let t = 0; l < n.length; t++) {
      let a = go(0, w);
      for (let t = 0; (e == 0 || t < e) && l < n.length; t++) {
        (t == 0 || d) && (a = go(t, w));
        let e = _o(a, u),
          r = Math.min(C[t % C.length], e),
          i = Math.min(r, n.length - l);
        if (i < r && t === 0) {
          if (h) return { content: null, bAdditionalContent: !1 };
          r = Math.max(a === `tall` ? 3 : 2, i);
        }
        (s.push(
          (0, K.jsx)(
            bo,
            { nMaxItems: r, nItems: i, children: b(n, l, l + i, r, a) },
            `Row_` + t,
          ),
        ),
          (l += i));
      }
      if (r || (l >= n.length && i.length === 0)) break;
      let o = i.length || void 0;
      (i.push(
        (0, K.jsx)(
          `div`,
          { className: v, children: (0, K.jsx)(qn, { depth: o, children: s }) },
          `Page_${t}`,
        ),
      ),
        (s = []));
    }
    i.length == 0
      ? ((S = n.length > l),
        (x = (0, K.jsx)(Pn, {
          "flow-children": `grid`,
          focusable: !1,
          children: s,
        })))
      : (x = (0, G.createElement)(
          Me,
          {
            ...t,
            key: g,
            hideArrows: !d,
            visibleElements: 1,
            className: `SaleSectionCarousel`,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderWidth: oo,
            hidePips: c,
            screenIsWide: d,
          },
          i,
        ));
  }
  return { content: x, bAdditionalContent: S };
}
function yo(e) {
  let {
    saleEvent: t,
    section: n,
    language: r,
    bInGamepadUI: i,
    activeTab: a,
  } = e;
  (n.carousel_rows || 0) > 1 &&
    (i && (n.carousel_rows = 1),
    (i ||
      (!F(n) &&
        n.capsules_per_row_array?.length &&
        n.capsules_per_row_array[0] >= (n.capsules?.length || 0))) &&
      (n.carousel_rows = 1));
  let o = ho(
    n,
    e.capsules,
    e.links,
    e.events,
    e.eventSummaries,
    e.itemdefs,
    e.rewards,
    e.curatorLists,
    e.renderers,
  );
  if (o.length === 0) return { content: null, bAdditionalContent: !1 };
  let s = $(n, i),
    c = fo(n, i),
    l = ie(n),
    u = (e) => lo(n, e),
    d = { section: n, saleEvent: t, language: r, activeTab: a },
    f = { ...e, strCarouselKey: Mi(a?.GetTagSelection()) };
  return vo(n.unique_id, f, o, s, c, l, u, d, i);
}
var bo = (e) => {
  let { nMaxItems: t, nItems: n } = e,
    r = t - n,
    i = r % 2 == 0 ? `repeat(${t}, 1fr)` : `0.5fr repeat(${t - 1}, 1fr) 0.5fr`,
    a = null,
    o = null;
  if (r > 0) {
    let e = Math.floor((r + 1) / 2);
    ((a = []), (o = []));
    for (let t = 0; t < e; t++)
      (a.push((0, K.jsx)(`div`, {}, `front_` + t)),
        o.push((0, K.jsx)(`div`, {}, `back_` + t)));
  }
  return (0, K.jsxs)(`div`, {
    className: W(
      be,
      D,
      `SaleSectionContainer`,
      `center_row_trgt`,
      `ItemCount_` + t,
    ),
    style: { gridTemplateColumns: t > 1 ? i : void 0 },
    children: [a, e.children, o],
  });
};
function xo(e) {
  let { section: t, nMaxCapsulesPerRow: n, bInGamepadUI: r } = e,
    i = go(0, fo(t, r)),
    a = Math.min($(t, r)[0], _o(i, n)),
    o = W(
      ao,
      i === `tall` && `_9Xrgw1NkKg8-`,
      i === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, K.jsx)(bo, {
    nMaxItems: a,
    nItems: a,
    children: Array.from({ length: a }, (e, t) =>
      (0, K.jsx)(`div`, { className: o }, t),
    ),
  });
}
function So(e) {
  let { event: t, section: n, rgSlides: r, onSlide: i, onNavIntent: a } = e,
    o = Xt(),
    { bScreenIsWide: s } = Ee(n.section_type);
  return r.length === 0
    ? null
    : r.length === 1
      ? (0, K.jsx)(K.Fragment, { children: r[0] })
      : !s || o
        ? (0, K.jsx)(`div`, {
            className: Ke,
            children: r.map((e, t) =>
              (0, K.jsx)(Co, { nSlide: t, onSlide: i, children: e }, t),
            ),
          })
        : (0, K.jsx)(`div`, {
            className: W(x, Ge),
            children: (0, K.jsx)(Me, {
              ...ce(t.jsondata),
              visibleElements: 1,
              screenIsWide: !0,
              useTestScrollbar: !0,
              navKey: n.unique_id,
              onSlide: i,
              onNavIntent: a,
              children: r,
            }),
          });
}
function Co(e) {
  let { nSlide: t, onSlide: n, children: r } = e,
    i = Un({ onEnter: () => n?.(t) });
  return (0, K.jsx)(`div`, { ref: i, children: r });
}
function wo(e) {
  let {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: i,
      placeholderHeight: a,
      nHiddenCapsules: o,
      personalizedCarousels: s,
      children: c,
    } = e,
    [u, d] = G.useState(void 0),
    { bShowSeeMoreHint: f, panelProps: p } = Pe(u);
  return (0, K.jsxs)(Ne, {
    placeholderHeight: a,
    className: W({
      [x]: !0,
      [l]: j(n),
      [h]: n.disable_background,
      [Oe]: !0,
      SaleSectionForCustomCSS: !0,
      [n.sale_section_classname || ``]: !!n.sale_section_classname,
      [void 0]: n.background_repeat == `coverBlur`,
    }),
    rootMargin: De,
    holdGamepadFocus: i,
    ...p,
    children: [
      (0, K.jsx)(`div`, {
        className: W(Te, n.background_repeat == `coverBlur` ? we : ``),
        style: kr(n, t, i),
      }),
      (0, K.jsxs)(`div`, {
        className: E,
        children: [
          (0, K.jsx)(Qr, {
            section: n,
            event: t,
            language: r,
            nHiddenCapsules: o,
            personalizedCarousels: s,
            bShowSeeMoreHint: f,
            bUseGamepadLinkHint: !0,
            onLinkResolved: (e) => d(e ?? void 0),
          }),
          (0, K.jsx)(To, { event: t, section: n }),
        ],
      }),
      c,
      (0, K.jsx)(ee, { section: n }),
    ],
  });
}
function To(e) {
  let { event: t, section: n } = e,
    r = G.useMemo(
      () =>
        n.section_type == `events`
          ? xn(`ch_newshub`, `application_config`)
          : void 0,
      [n.section_type],
    );
  if (n.hide_view_all_events_link) return null;
  let i = null;
  if (n.section_type == `events`) {
    if (!r || !t.BUsesContentHubForItemSource() || !F(n)) return null;
    i = H.STORE_BASE_URL + `news/` + r;
  } else
    n.section_type == `sale_events`
      ? (i = H.STORE_BASE_URL + `news/collection/sales/`)
      : n.section_type == `calendar` &&
        (i = H.STORE_BASE_URL + `personalcalendar`);
  if (!i) return null;
  let a = i;
  return (0, K.jsx)(`div`, {
    className: d,
    children: (0, K.jsx)(En, {
      onClick: (e) => ct(e, a),
      children: R(`#EventBrowse_AllEventsBtn`),
    }),
  });
}
function Eo(e) {
  let { saleEvent: t, section: n, bInGamepadUI: r } = e,
    i = {
      ...e,
      bShowAsCarousel: j(n),
      bAutoAdvance: !!n.carousel_auto_advance,
      bHideIfTooFewItems: !!n.hide_section_if_too_few_items,
      ...ce(t.jsondata),
    },
    a = Ka(n, i.nShowAdditionalRows),
    o = Wa($(n, r), a, i.capsules?.length ?? 0);
  return (o < a && F(n) && (i.nShowAdditionalRows -= a - o), i);
}
var Do = `NQebVMQULto-`;
function Oo(e) {
  let {
      section: t,
      nRowsWithNext: n,
      nCapsules: r,
      rgRowSizes: i,
      bLoading: a,
      onShowMore: o,
    } = e,
    s = Wa(i, n, r) < n;
  return (0, K.jsx)(`div`, {
    className: W(Do, `ShowContentsContainer`),
    children: a
      ? (0, K.jsx)(he, { size: `small`, string: R(`#Loading`) })
      : !s &&
        t.cap_section_content &&
        (0, K.jsx)(Qn, {
          onClick: o,
          className: W(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: R(`#Sale_ShowMore`),
        }),
  });
}
function ko(e) {
  return Math.max(Ka(e, 0), 4);
}
function Ao(e, t, n = ``, r = 0) {
  if (e.enable_faceted_browsing && r > 0)
    return { feature: `salefacetbrowse` + n, depth: r };
  if (F(e) && e.section_type != `crosspromotesalepage`) {
    let r = N(e);
    if (r)
      switch (r) {
        case `wishlist`:
          return { feature: `salesmartwishlist` + n };
        case `wishlist_onsale`:
          return { feature: `salesmartwishlist_allsale` + n };
        case `interactive_recommender`:
          return { feature: `salesmartir` + n };
        case `interactive_recommender_onsale`:
          return { feature: `salesmartir_allsale` + n };
        case `ml_wishlist_recommender`:
          return { feature: `salesmartwr` + n };
        case `ml_playtime_recommender`:
          return { feature: `salesmartpr` + n };
        case `dlc`:
        case `dlc_onsale`:
        case `dlc_music_onsale`:
          return { feature: `salesmartdlc` + n };
        case `tag_recommender`:
          return { feature: `salesmarttagrec` + n };
        case `personalized_carousel`:
          return {
            feature: `salesmartpersonalizedcarousel` + n,
            depth: q(e, t).nSectionIndex,
          };
        case `tag`:
          return { feature: `autopopulatetag` + n };
        case `category`:
          return { feature: `autopopulatecategory` + n };
        default:
          return { feature: `salesmart` + r + n };
      }
  }
  switch (e.section_type) {
    case `sale_events`:
    case `events`:
      return { feature: `saleeventsection` + n };
    case `links`:
      return { feature: `salesectionlinks` + n };
    case `title_image`:
      return { feature: `salesectiontitle` + n };
    case `discoveryqueue`:
      return { feature: `discoveryqueue2022` + n };
    case `trailercarousel`:
      return { feature: `trailercarousel` + n };
    case `rewards`:
      return { feature: `rewardshelf` + n };
    case `event_description`:
    case `text_section`:
      return { feature: `salesectiontext` + n };
    case `event_schedule`:
      return { feature: `saleeventsched` + n };
    case `broadcast`:
      return { feature: `salesectionbroadcast` + n };
    case `dlc_for_you`:
      return { feature: `saledlcforyou` + n };
    case `calendar`:
      return { feature: `salecalendar` + n };
    case `itemdef`:
      return { feature: `saleitemdef` + n };
    case `crosspromotesalepage`:
      return { feature: `crosspromotesalepage` + n };
  }
  return { feature: `salesection` + n };
}
function jo(e) {
  let { language: t, link: n } = e,
    r = Gt(),
    [i, a, o] = s(() => [
      z.GetWithFallback(n.localized_link_capsule, t),
      r ? n.sc_url : n.url,
      n.materialized_link_capsule,
    ]),
    c = i ? k.GenerateURLFromHashAndExt(e.clanAccountID, i) : void 0;
  return (0, K.jsx)(w, {
    url: a,
    className: e.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!n.open_in_place,
    children: (0, K.jsxs)(`div`, {
      className: W(g, e.link.url ? C : ``),
      children: [
        !!c && (0, K.jsx)(le, { className: `_-4JZsb8K2FY-`, src: c }),
        !!o &&
          (0, K.jsx)(`img`, { className: `_-4JZsb8K2FY-`, src: o, alt: a }),
      ],
    }),
  });
}
export {
  Qr as $,
  Sa as A,
  Li as B,
  Va as C,
  xa as D,
  Ea as E,
  ki as F,
  vi as G,
  Ni as H,
  Ai as I,
  mi as J,
  bi as K,
  ji as L,
  qi as M,
  Bi as N,
  Z as O,
  Mi as P,
  $r as Q,
  Ii as R,
  Ua as S,
  Oa as T,
  Ci as U,
  Pi as V,
  Si as W,
  ni as X,
  pi as Y,
  Yr as Z,
  to as _,
  wo as a,
  Or as at,
  qa as b,
  so as c,
  Tr as ct,
  lo as d,
  Vr as et,
  yo as f,
  ro as g,
  no as h,
  Eo as i,
  Dr as it,
  wa as j,
  Ta as k,
  uo as l,
  Sr as lt,
  vo as m,
  ko as n,
  Ir as nt,
  So as o,
  Ar as ot,
  xo as p,
  hi as q,
  Oo as r,
  Pr as rt,
  co as s,
  kr as st,
  Ao as t,
  Ur as tt,
  $ as u,
  xr as ut,
  eo as v,
  Da as w,
  Ka as x,
  Ga as y,
  Fi as z,
};
