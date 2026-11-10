/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  Lt as t,
  dt as n,
  ft as r,
  l as i,
  nt as a,
  st as o,
  u as s,
} from "./libraries.js";
import { t as c } from "./usedataloader.client.js";
import { r as l } from "./clanimagemodels.js";
import { o as u } from "./salecapsuleutils.js";
import {
  D as d,
  N as f,
  T as p,
  a as m,
  d as h,
  h as g,
  i as _,
  l as v,
  n as y,
  o as b,
  r as x,
  s as S,
  t as C,
} from "./storelink.js";
import {
  $ as w,
  Bi as T,
  Ei as E,
  ei as D,
  ka as ee,
  kr as te,
  nt as ne,
  tt as re,
} from "./saletags.js";
import { c as O } from "./claninfo.js";
import {
  A as k,
  D as A,
  I as ie,
  M as ae,
  O as oe,
  T as se,
  b as j,
  c as ce,
  d as le,
  j as M,
  l as N,
  s as P,
  y as ue,
} from "./partnerevent.js";
import { r as de } from "./image.js";
import { a as fe, i as F } from "./ostype.js";
import { f as pe, l as me, u as he } from "./salestoreitemutils.js";
import { n as ge, t as I } from "./salepreviewwidgets.js";
import { t as _e } from "./throbber.js";
import { i as ve } from "./stringutils.js";
import { t as ye } from "./saleitemlibrarywidget.js";
import { t as be } from "./eventtimeoverridecontext.js";
import {
  A as xe,
  E as Se,
  O as Ce,
  T as we,
  k as Te,
  n as Ee,
  p as De,
  t as Oe,
} from "./partnereventshared.module.js";
import { c as ke, d as Ae, r as je } from "./carouselarrows.js";
import { f as Me } from "./eventbbcodeparser.module.js";
import { n as Ne } from "./eventimageurlwithfallback.js";
import { n as Pe } from "./partnereventutils.js";
import { n as Fe, t as Ie } from "./creatorhomegamelock.js";
import { n as Le } from "./lazyrenderchildren.js";
import { n as Re, t as ze } from "./seemorebutton.js";
import { c as Be, i as Ve, l as He, o as Ue } from "./creatorhomestore.js";
import { r as We } from "./partnereventeditorcontext.js";
import { n as Ge, r as Ke } from "./bottomrow.js";
import { a as qe, r as Je } from "./crosspromotesalelayouts.module.js";
import {
  $h as Ye,
  Ac as Xe,
  Ah as Ze,
  Av as Qe,
  Bb as $e,
  Bh as et,
  Bm as tt,
  Cc as L,
  Cm as nt,
  Df as rt,
  Dg as it,
  Dp as at,
  Dx as ot,
  Ed as st,
  Eg as ct,
  Ex as lt,
  Ff as ut,
  G_ as dt,
  Gd as ft,
  Gf as pt,
  Gp as mt,
  H_ as ht,
  Hg as gt,
  Hm as _t,
  Hv as vt,
  Id as yt,
  Ip as bt,
  Jh as xt,
  Jx as St,
  Kb as R,
  Kh as Ct,
  Lb as wt,
  Lh as Tt,
  Lm as Et,
  Ly as Dt,
  Mf as Ot,
  Np as kt,
  Od as At,
  Om as jt,
  Pf as Mt,
  Pg as Nt,
  Pm as Pt,
  Qf as Ft,
  Rd as It,
  Rf as Lt,
  Rh as Rt,
  Rp as zt,
  Sg as Bt,
  Sh as Vt,
  Th as Ht,
  Ub as z,
  Vh as Ut,
  Wy as B,
  Xb as Wt,
  Xf as Gt,
  Xg as Kt,
  Xh as qt,
  Xv as Jt,
  Yh as Yt,
  Yv as Xt,
  Yx as Zt,
  Yy as Qt,
  an as $t,
  ay as en,
  bg as tn,
  bm as nn,
  bv as rn,
  cm as an,
  dg as on,
  dm as sn,
  dt as cn,
  ed as ln,
  ef as un,
  ey as dn,
  fd as fn,
  ft as pn,
  fv as mn,
  hS as hn,
  hf as gn,
  hg as _n,
  ht as vn,
  hv as yn,
  hx as bn,
  if as xn,
  il as Sn,
  iv as Cn,
  ix as V,
  j_ as wn,
  jd as Tn,
  kd as En,
  kf as Dn,
  kh as On,
  ki as kn,
  kp as An,
  mf as jn,
  ml as Mn,
  mm as Nn,
  mr as Pn,
  mt as Fn,
  n_ as In,
  nf as Ln,
  oh as Rn,
  om as zn,
  ox as Bn,
  pp as Vn,
  qf as Hn,
  qg as Un,
  qh as H,
  qx as Wn,
  r_ as Gn,
  rg as Kn,
  rp as qn,
  ry as Jn,
  s_ as Yn,
  sd as Xn,
  sp as Zn,
  tg as Qn,
  tp as $n,
  tu as er,
  tv as tr,
  ud as nr,
  ug as rr,
  vf as ir,
  wh as ar,
  wm as or,
  wp as sr,
  wr as cr,
  xS as lr,
  x_ as ur,
  xv as dr,
  yf as fr,
  yr as pr,
  yv as mr,
  zh as hr,
  zm as gr,
  zr as _r,
  zy as U,
} from "./main.js";
function vr(e, t, n, r) {
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
        await tr(`DiscountedItems`, e, t, {
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
function yr(e, t, n, r) {
  let { store_filter_json: i, min_discount_percent: a } = n;
  return {
    queryKey: [`TopWishlistedComingSoon`, i ?? ``, a ?? 0, r, t.country],
    queryFn: async () =>
      (
        await tr(`TopWishlistedComingSoon`, e, t, {
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
var br = 500,
  xr = 100;
function Sr(e, t, n, r, i, a = 1) {
  return {
    queryKey: [`AccountOwnedDLCOnSale`, r ?? 0, i, n.country, a],
    queryFn: async () => {
      if (!r) return [];
      let o = await e.fetchQuery(ee(t, r)),
        s = Array.from(o).slice(0, br);
      return s.length
        ? (
            await tr(`SaleTechOwnedDLCOnSale`, t, n, {
              start: 0,
              count: xr,
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
async function Cr(e, t) {
  t.set(`origin`, location.origin);
  let n = `${z.STORE_BASE_URL}saleaction/${e}?${t}`,
    r = await fetch(n);
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  let i = await r.json();
  if (i?.success != 1) throw Error(`${n} answered EResult ${i?.success}`);
  return i;
}
async function wr(e) {
  let t = await Cr(
    `ajaxgetpopularcompatlist`,
    new URLSearchParams({ compatDevice: e }),
  );
  if (!t.list) throw Error(`ajaxgetpopularcompatlist answered without a list`);
  return t.list;
}
var Tr = 3e5;
function Er(e) {
  return [`PopularCompatList`, e];
}
function Dr(e) {
  return { queryKey: Er(e), queryFn: () => wr(e), staleTime: Tr, retry: !1 };
}
var W = e(t()),
  G = r(),
  Or = e(a(), 1);
function kr(e, t) {
  return `linear-gradient(0deg, ${e || `transparent`} 0%, ${t || `transparent`} 100%)`;
}
function Ar(e, t, n) {
  if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
  let r = ``;
  if (e.background_image) {
    let n = l.GenerateURLFromHashAndExt(t.clanSteamID, e.background_image);
    r += `,url(${n})`;
  }
  return e.background_gradient_bottom ||
    e.background_gradient_top ||
    r.length > 0 ||
    e.background_repeat ||
    e.border_color ||
    e.border_width
    ? {
        backgroundImage:
          kr(e.background_gradient_bottom, e.background_gradient_top) + r,
        backgroundRepeat: e.background_repeat,
        backgroundSize: e.background_repeat == `coverBlur` ? `cover` : ``,
        outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
        outlineColor: e.border_color,
        outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
      }
    : {};
}
function jr(e, t) {
  return e
    ? e.disable_background && !t
      ? { paddingLeft: 0, paddingRight: 0 }
      : e.background_gradient_bottom ||
          e.background_gradient_top ||
          e.background_repeat ||
          e.border_color ||
          e.border_width
        ? {
            background: kr(
              e.background_gradient_bottom,
              e.background_gradient_top,
            ),
            backgroundRepeat: e.background_repeat,
            outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
            outlineColor: e.border_color,
            outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
          }
        : {}
    : {};
}
function Mr(e) {
  return e?.clan_steamid ? Pe(new Dt(e.clan_steamid), e) : null;
}
var Nr = 100;
async function Pr(e, t) {
  let n = new URLSearchParams();
  (n.set(`event_gids`, [...new Set(e)].sort().join(`,`)),
    n.set(`lang_list`, Fe(t)),
    n.set(`origin`, location.origin));
  let r =
      z.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + n.toString(),
    i = await fetch(r);
  if (i.status === 204) return e.map(() => null);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json(),
    o = new Map((a.events ?? []).map((e) => [e.gid, e]));
  return e.map((e) => o.get(e) ?? null);
}
function Fr(e) {
  return c(
    [`PublicPartnerEventBrowser`, e],
    () => new Or.default((t) => Pr(t, e), { maxBatchSize: Nr, cache: !1 }),
  );
}
function Ir(e, t) {
  return [`PublicPartnerEvent`, e, t];
}
function Lr(e, t, n) {
  return {
    queryKey: Ir(e, t),
    queryFn: async () => (n ? n.load(e) : (await Pr([e], t))[0]),
    select: Mr,
    enabled: !!e,
    staleTime: 6e5,
  };
}
function Rr(e) {
  let t = hn(z.LANGUAGE),
    n = Fr(t);
  return o(Lr(e, t, n));
}
function zr(e, t, n) {
  return Ma(t, e, n)?.strTagName || void 0;
}
function Br(e, t, n, r) {
  let i = n == 1 || n == 3 || n == 4,
    a = () => {
      let t = Ue(e.smart_section_creator_listid);
      return t
        ? i
          ? B(`#Sale_CreatorList_Section_Editor_title`, t)
          : t
        : null;
    };
  if (e.section_type === `items`)
    switch (M(e)) {
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
          return B(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        let o = zr(e, t, r);
        if (!o && n == 2) {
          let { nSectionIndex: n, nNumSections: r } = q(e, t);
          return B(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        return o ? B(`#Sale_PersonalizedCarousel_Section_title`, o) : null;
      case `creator_list`:
        return a();
    }
  else if (e.section_type === `tabs`) return ``;
  else if (e.section_type === `curator`) {
    if (e.curator_clan_id) {
      let t = Dt.InitFromClanID(e.curator_clan_id, V.EUNIVERSE),
        n = He.GetCreatorHome(t);
      if (n) return B(`#Sale_CuratorSection_Name`, n.GetName());
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
function Vr(e, t, n, r) {
  let i = Br(e, t, n, r);
  return i === null ? null : i && i.startsWith(`#`) ? B(i) : i;
}
function Hr(e, t, n, r, i, a, o, s) {
  if (!e) return ``;
  if (e.section_type === `crosspromotesalepage`) return xi(s, n);
  let c = Vr(e, t, i, o),
    u = U.GetWithFallback(e.localized_label, n),
    d =
      c ||
      u ||
      (e.default_label === `#Sale_default_label` ? `` : B(e.default_label)),
    f = e.internal_section_title?.trim();
  if ((f?.length ?? 0) > 0) {
    if (i == 3 || i == 4)
      return d?.trim().length == 0 || a
        ? f
        : (0, G.jsxs)(G.Fragment, {
            children: [
              f,
              ` `,
              (0, G.jsx)(pr, {
                tooltip: Qt(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, G.jsx)(`br`, {}),
                  d,
                ),
              }),
            ],
          });
    if (i == 1)
      return d?.trim().length == 0 || a
        ? f
        : (0, G.jsxs)(G.Fragment, {
            children: [
              f,
              ` `,
              (0, G.jsx)(`span`, {
                children: Qt(`#Sale_Section_InternalTitle_Actual`, d),
              }),
            ],
          });
  }
  let p = U.GetWithFallback(e.localized_label_image, n);
  if (!a && p) {
    let e = l.GenerateURLFromHashAndExt(r, p);
    return (0, G.jsx)(`img`, { loading: `lazy`, src: e, alt: d });
  }
  return d;
}
function Ur(e, t, n) {
  if (N(e.section_type))
    switch (M(e)) {
      case `personalized_carousel`:
        let r = zr(e, t, n);
        return r ? B(`#Sale_PersonalizedCarousel_Section_subtitle`, r) : null;
      case `creator_list`:
        return Ve(e.smart_section_creator_listid) ?? null;
    }
  return null;
}
function Wr(e, t, n, r) {
  let i = Ur(e, t, r);
  return i === null
    ? U.GetWithFallback(e.localized_subtitle, n) ||
        (!e.default_subtitle || e.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : B(e.default_subtitle))
    : i && i.startsWith(`#`)
      ? B(i)
      : i;
}
var Gr = `dYYkud-Jf3s-`,
  Kr = `zZo1XshRYmQ-`,
  qr = `RfHJSn8AdQE-`,
  Jr = `D8GFuSKNhX0-`,
  Yr = `MtB8CokK-OQ-`,
  Xr = `woc2JepJIek-`;
function Zr(e, t) {
  return (
    U.GetWithFallback(e.localized_label, t) ||
    (e.default_label === `#Sale_default_label` ? `` : B(e.default_label))
  );
}
function Qr(e) {
  if (N(e.section_type))
    switch (M(e)) {
      case `deck_topplayed`:
        return z.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return e.label_link;
}
function $r(e) {
  let t,
    n,
    r = !1;
  return (
    e.label_link_style === `button`
      ? ((t = B(`#Sale_SectionLink_BrowseAll`)), (r = !0))
      : e.label_link_style === `browseall`
        ? ((t = B(`#Sale_SectionLink_BrowseAll`)),
          (n = L(qr, `SaleSectionLabelLinkButton`)))
        : M(e) === `deck_topplayed` &&
          ((t = B(`#EventBrowse_MoreEventsBtn`)),
          (n = L(De, `SaleSectionLabelLinkButton`))),
    { strLinkButtonLabel: t, strLinkButtonClasses: n, bSmallButton: r }
  );
}
function ei(e) {
  let { event: t, elTitle: n, language: r } = e,
    i = fe(),
    a = Ne(t, i ? `product_mobile_banner` : `product_banner`, r);
  return (0, G.jsxs)(`div`, {
    className: we,
    children: [
      (0, G.jsx)(`div`, { className: Se, children: n }),
      (0, G.jsx)(`img`, { src: a, alt: n }),
    ],
  });
}
var ti = i((e) => {
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
      promotedSale: d,
    } = e,
    f = $e(),
    p = We(),
    m = d !== void 0,
    { data: g } = Rr(m ? void 0 : gi(t)),
    _ = (m ? d : g) ?? void 0,
    v = e.link || Qr(t) || Be(_);
  if (
    (W.useEffect(() => {
      l?.(v);
    }, [v, l]),
    t.section_type == `title_image` && t.title_image_selected === `image`)
  )
    return null;
  let b = a || Hr(t, n, r, n.clanSteamID.GetAccountID(), p.eLocation, !1, u, _);
  if (!b) return null;
  let x = o || Wr(t, n, r, u),
    S = (0, G.jsx)(`div`, {
      className: L(Te, `SaleSectionHeader`),
      style: ni(t, n, r),
      children: _?.BHasSomeImage(`product_banner`)
        ? (0, G.jsx)(ei, { ...e, event: _, elTitle: b })
        : b,
    }),
    C = (0, G.jsx)(`div`, {
      className: L(Te, xe, `SaleSectionSubtitle`),
      style: ri(t, n, r),
      children: x,
    }),
    w = null;
  if ((v?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: e,
      strLinkButtonClasses: n,
      bSmallButton: r,
    } = $r(t);
    (e &&
      (w =
        f && c
          ? (0, G.jsx)(ze, { label: e, shown: !!s })
          : r
            ? (0, G.jsx)(`div`, {
                className: L(h, Jr),
                children: (0, G.jsx)(y, {
                  url: v,
                  children: (0, G.jsx)(Pn, { children: e }),
                }),
              })
            : (0, G.jsx)(y, { url: v, className: n, children: e })),
      (S = (0, G.jsx)(y, { url: v, bFocusable: !w, children: S })));
  }
  return (0, G.jsxs)(`div`, {
    className: L(
      Gr,
      `SaleSectionLabelCtn`,
      _?.BHasSomeImage(`product_banner`) ? Yr : ``,
    ),
    children: [
      (0, G.jsxs)(`div`, { className: Xr, children: [S, !!x && C] }),
      (0, G.jsxs)(`div`, {
        className: Kr,
        children: [
          !!i &&
            (0, G.jsx)(_r, {
              className: `pL8IDIWBDg8-`,
              toolTipContent: B(`#Sale_HiddenItem_Tooltip`),
              children: (0, G.jsx)(`a`, {
                href: z.STORE_BASE_URL + `account/preferences`,
                children: Qt(
                  i == 1
                    ? `#Sale_HiddenItem_Single_Short`
                    : `#Sale_HiddenItems_Short`,
                  i,
                ),
              }),
            }),
          w,
        ],
      }),
    ],
  });
});
function ni(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? ii(t.jsondata.sale_font, n) : void 0,
    fontWeight: t.jsondata.sale_font_weight,
    fontSize: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
  };
}
function ri(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? ii(t.jsondata.sale_font, n) : void 0,
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
function ii(e, t) {
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
function ai(e, t, n, r, i) {
  let a = Hr(t, r, n, r.clanSteamID.GetAccountID(), e);
  if (a) return a;
  let o = B(`#Sale_Section_Header`, i + 1),
    s = `#Sale_Section_Type_` + (t?.section_type || `unknowntype`),
    c = B(s);
  if (c !== s) return `${o} (${c})`;
}
var oi = W.createContext(void 0);
function si() {
  return W.useContext(oi);
}
function ci(e, t, n, r) {
  if (r === void 0 || n.length <= 1 || !le(e, t, void 0)) return n;
  let i = lt(r + (t.unique_id ?? 0));
  return Wn([...n], t.random_order_top_x ?? 0, i);
}
function li(e, t, n, r) {
  if (t.length <= n) return t;
  if (r === void 0) return t.slice(0, n);
  let i = lt(r + (e.unique_id ?? 0));
  return Wn([...t], 0, i).slice(0, n);
}
async function ui(e, t) {
  let n = Xn(V.STORE_BASE_URL, t, Bn.country_code);
  return ((await (await fetch(n)).json()).rgRecommendedApps ?? []).map(Number);
}
function di(e, t) {
  return {
    queryKey: fi(t),
    queryFn: async () => (t ? ui(e, t) : []),
    staleTime: 6e5,
  };
}
function fi(e) {
  return [`AccountRecommendedApps`, e ?? 0];
}
var pi = 100;
function mi(e, t, n, r, i = 1) {
  return {
    queryKey: [`AccountRecommendedAppsOnSale`, r ?? 0, n.cacheScope ?? ``, i],
    queryFn: async () => {
      if (!r) return [];
      let a = (await e.fetchQuery(di(t, r))).slice(0, pi),
        o = await Promise.all(a.map((t) => e.fetchQuery(mn(n, { appid: t }))));
      return a.filter(
        (e, t) => (o[t]?.best_purchase_option?.discount_pct ?? 0) >= i,
      );
    },
    staleTime: 6e5,
  };
}
function K(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function hi(e) {
  return K(e).map((t) => ({
    ...e,
    sale_page_cross_promo_sales: [t],
    capsules: t.capsules ?? [],
  }));
}
function gi(e) {
  return K(e)[0]?.event_gid || void 0;
}
function _i(e) {
  return K(e).flatMap((e) => e.event_gid || []);
}
function vi(e) {
  return K(e)[0]?.featured_app_tagid || void 0;
}
function yi(e) {
  let t = K(e);
  return t.length > 0 && t.every((e) => (e.capsules?.length ?? 0) > 0);
}
function bi(e, t) {
  let n = K(e)[0];
  return !n?.event_gid || (!n.featured_app_tagid && !n.capsules?.length)
    ? `setup`
    : !t || !t.BIsVisibleEvent()
      ? `missing`
      : null;
}
function xi(e, t) {
  return e
    ? B(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : B(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function Si(e) {
  switch (e) {
    case `logo_left`:
    case `logo_top`:
    case `event_capsule`:
      return 3;
    default:
      return;
  }
}
function Ci(e) {
  return e.type !== `sub` && e.type !== `bundle`;
}
function wi(e, t, n, r) {
  let i = [];
  for (let a of e)
    if ((!t || t.has(a)) && !n(a) && (i.push(a), i.length >= r)) break;
  return i;
}
function Ti(e, t, n, r = new Set()) {
  for (let t of e.GetSaleSections())
    if (!(!N(t.section_type) || (n && !n.BIncludeSection(t))))
      for (let e of t.capsules) Ci(e) && r.add(e.id);
  for (let e of t ?? []) {
    let t = e.capsule;
    Ci(t) && (!n || n.BIncludeLinkedCapsule(t)) && r.add(t.id);
  }
  return r;
}
function Ei(e, t, n) {
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
var Di = 4;
function Oi(e) {
  return e
    .GetSaleSections()
    .filter((e) => N(e.section_type) && M(e) === `personalized_carousel`);
}
function ki(e) {
  return Oi(e)[0];
}
function Ai(e) {
  if (e.appid()) return { id: e.appid(), type: `game` };
  if (e.bundleid()) return { id: e.bundleid(), type: `bundle` };
  if (e.packageid()) return { id: e.packageid(), type: `sub` };
}
function ji(e, t, n, r, i, a) {
  let o = Oi(n),
    s = {
      rgSections: o.map((e) => ({
        eSort: e.smart_section_personalized_carousel_sort ?? 13,
        nMinItems: e.smart_section_personalized_carousel_min_items ?? Di,
        bRandomize: !!e.smart_section_personalized_carousel_randomize,
        bIncludePackages: e.smart_section_include_packages,
        bIncludeBundles: e.smart_section_include_bundles,
        bIncludeDLC: e.smart_section_include_dlc,
        nMinDiscountPercent:
          e.smart_section_min_discount_percent === void 0 ? void 0 : Ca(e),
      })),
      storePageFilter: Ei(n, !!o[0]?.prioritize_discounts, r),
      strStoreFilterJSON: o[0] ? ae(o[0]) : void 0,
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
    queryFn: () => Mi(e, t, s, i),
    staleTime: 1 / 0,
  };
}
async function Mi(e, t, n, r) {
  if (!r || n.rgSections.length === 0) return [];
  let i = bn.Init(dn);
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
  (i.Body().set_context(Jt(t)),
    i.Body().set_filters(Fn(n.storePageFilter, !1)),
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
  let a = await Jn.GetItemsByUserRecommendedTags(e, i);
  if (a.GetEResult() != 1)
    throw Error(`GetItemsByUserRecommendedTags failed: ${a.GetEResult()}`);
  return a
    .Body()
    .sections()
    .map((e) => ({
      strTagName: e.tag_name() ?? ``,
      rgCapsules: e.store_item_ids().flatMap((e) => {
        let t = Ai(e);
        return t ? [t] : [];
      }),
    }));
}
function q(e, t) {
  let n = t
    .GetSaleSections()
    .filter((e) => N(e.section_type) && M(e) == `personalized_carousel`);
  if (n.length == 0) return { nNumSections: 0, nSectionIndex: -1 };
  let r = n.findIndex((t) => t.unique_id == e.unique_id);
  return { nNumSections: n.length, nSectionIndex: r };
}
function Ni(e) {
  return M(e) === `frame_compatibility` ? `frame` : `deck`;
}
function Pi(e, t) {
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
var Fi = [
    {
      nOptInTagID: 9,
      rgChildren: [
        { nTagID: wn },
        { nTagID: _n },
        { nTagID: fr },
        { nTagID: ur },
        { nTagID: Kt },
        { nTagID: ir },
        { nTagID: Ye },
        { nTagID: Dn },
        { nTagID: ut },
      ],
    },
    {
      nOptInTagID: 19,
      rgChildren: [
        { nTagID: yt },
        { nTagID: ct },
        { nTagID: ft },
        { nTagID: It },
        { nTagID: zt },
        { nTagID: gn },
        { nTagID: jn },
        { nTagID: on },
        { nTagID: rr },
      ],
    },
    {
      nOptInTagID: 21,
      rgChildren: [
        { nTagID: yt },
        { nTagID: Vt },
        { nTagID: In },
        { nTagID: Hn },
        { nTagID: sr },
        { nTagID: Rt },
        { nTagID: dt },
        { nTagID: rt },
      ],
    },
    {
      nOptInTagID: 122,
      rgChildren: [
        { nTagID: It },
        { nTagID: nn },
        { nTagID: Gt },
        { nTagID: Vn },
        { nTagID: On },
        { nTagID: Kt },
        { nTagID: Yn },
      ],
    },
    {
      nOptInTagID: 599,
      rgChildren: [
        { nTagID: un },
        { nTagID: qn },
        { nTagID: An },
        { nTagID: Nn },
        { nTagID: or },
        { nTagID: Pt },
        { nTagID: gr },
        { nTagID: hr },
        { nTagID: it },
        { nTagID: gt },
        { nTagID: dt },
      ],
    },
    {
      nOptInTagID: 699,
      rgChildren: [
        { nTagID: ft },
        { nTagID: Lt },
        { nTagID: Ut },
        { nTagID: Qn },
        { nTagID: Bt },
      ],
    },
    {
      nOptInTagID: 701,
      rgChildren: [
        { nTagID: ft },
        { nTagID: Pt },
        { nTagID: 599 },
        { nTagID: Ln },
        { nTagID: xn },
        { nTagID: Nt },
        { nTagID: mt },
      ],
    },
    {
      nOptInTagID: Tt,
      rgChildren: [
        { nTagID: At },
        { nTagID: Tn },
        { nTagID: _t },
        { nTagID: Ut },
        { nTagID: xt },
      ],
    },
    {
      nOptInTagID: H,
      rgChildren: [
        { nTagID: zn },
        { nTagID: jt },
        { nTagID: Et },
        { nTagID: Rn },
        { nTagID: ar },
        { nTagID: Rt },
        { nTagID: xt },
      ],
    },
    {
      nOptInTagID: ht,
      rgChildren: [
        { eContentDescriptor: 3 },
        { nTagID: qn },
        { nTagID: nt },
        { nTagID: Ht },
        { nTagID: bt },
        { nTagID: Rn },
        { nTagID: Ct },
      ],
    },
  ],
  Ii = [
    {
      nTagID: at,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: $n },
      ],
    },
    {
      nTagID: tn,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: Ft },
        { nTagID: et },
      ],
    },
    {
      nTagID: tt,
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
      nTagID: an,
      rgChildren: [
        { nTagID: Gn },
        { nTagID: 19 },
        { nTagID: Un },
        { nTagID: Ct },
        { nTagID: dt },
      ],
    },
    {
      nTagID: Kn,
      rgChildren: [
        { nTagID: H },
        { nTagID: sn },
        { nTagID: 599 },
        { nTagID: 21 },
        { nTagID: Rt },
        { nTagID: Mt },
        { nTagID: Ot },
        { nTagID: Pt },
      ],
    },
    {
      nTagID: Rn,
      rgChildren: [
        { nTagID: 21 },
        { nTagID: H },
        { nTagID: sr },
        { nTagID: kt },
        { nTagID: Zn },
      ],
    },
    {
      eContentDescriptor: 3,
      rgChildren: [
        { nTagID: ht },
        { nTagID: nt },
        { nTagID: H },
        { nTagID: st },
        { nTagID: En },
      ],
    },
  ],
  Li = [
    {
      strOptInTag: `option_58733`,
      rgChildren: [
        { nTagID: qt },
        { nTagID: Yt },
        { nTagID: pt },
        { nTagID: 128 },
        { nTagID: Ze },
      ],
    },
    {
      strOptInTag: `option_40066`,
      rgChildren: [
        { nTagID: qt },
        { nTagID: Yt },
        { nTagID: pt },
        { nTagID: Ze },
      ],
    },
    { strAppType: `software` },
    { strFeature: `vr` },
    { strFeature: `mac` },
  ],
  Ri = {
    linux: `#Platform_Linux`,
    mac: `#Platform_Mac`,
    vr: `#Platform_VR`,
    "vr only": `#Sale_Tabs_TagFilter_Feature_VROnly`,
    free: `#Sale_Tabs_TagFilter_Feature_Free`,
    discounted: `#Sale_Tabs_TagFilter_Feature_Discounted`,
  },
  zi = [
    {
      strClass: `genre`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Genre`,
      rgNodes: Fi,
    },
    {
      strClass: `theme`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Theme`,
      rgNodes: Ii,
    },
    {
      strClass: `feature`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Feature`,
      rgNodes: Li,
    },
  ];
function Bi(e) {
  return e?.rgNodes
    ? e.rgNodes
    : (zi.find((t) => t.strClass === e?.tag_class)?.rgNodes ?? []);
}
function Vi(e) {
  return e.nTagID
    ? String(e.nTagID)
    : e.nOptInTagID || e.strOptInTag
      ? `optin:` + Yi(e)
      : e.eContentDescriptor
        ? `descriptor:` + e.eContentDescriptor
        : e.strFeature
          ? `feature:` + e.strFeature
          : `apptype:` + e.strAppType;
}
function Hi(e) {
  if (e.strFeature) return Ri[e.strFeature];
  if (e.strAppType) return `#AppTypeLabel_` + e.strAppType;
}
function Ui(e) {
  if (e)
    return e.strChildKey
      ? e.strParentKey + `,` + e.strChildKey
      : e.strParentKey;
}
var Wi = `tabtag`,
  Gi = `tabsubtag`;
function Ki(e, t) {
  if (e) return { strParentKey: e, strChildKey: t || void 0 };
}
function qi(e) {
  return { [Wi]: e?.strParentKey ?? null, [Gi]: e?.strChildKey ?? null };
}
function Ji(e, t, n) {
  if (!e) return;
  let r = J(Bi(t), e.strParentKey);
  if (!r || !n(r)) return;
  if (!e.strChildKey) return e;
  let i = J(r.rgChildren ?? [], e.strChildKey);
  return !i || !n(i) ? { strParentKey: e.strParentKey } : e;
}
function Yi(e) {
  return e.strOptInTag ?? String(e.nOptInTagID);
}
function Xi(e, t) {
  return e.nOptInTagID || e.strOptInTag
    ? (St(t, `Opt-in registration tag used on a sale without an opt-in`),
      {
        type: j.k_EStoreFilterClauseTypeOptInRegistrationTag,
        optin: t,
        value: Yi(e),
      })
    : e.nTagID
      ? { type: j.k_EStoreFilterClauseTypeStoreTag, value: e.nTagID }
      : e.eContentDescriptor
        ? {
            type: j.k_EStoreFilterClauseTypeContentDescriptor,
            value: e.eContentDescriptor,
          }
        : e.strFeature
          ? { type: j.k_EStoreFilterClauseTypeFeatureTag, value: e.strFeature }
          : { type: j.k_EStoreFilterClauseTypeAppType, value: e.strAppType };
}
function J(e, t) {
  return e.find((e) => Vi(e) === t);
}
function Zi(e, t, n) {
  if (!e) return;
  let r = J(Bi(t), e.strParentKey);
  if (!r) return;
  if (!e.strChildKey) return Xi(r, n);
  let i = J(r.rgChildren ?? [], e.strChildKey);
  if (i)
    return {
      type: j.k_EStoreFilterClauseTypeAnd,
      rgSubexpressions: [Xi(r, n), Xi(i, n)],
    };
}
function Qi() {
  let [e] = aa(`tab`),
    t = W.useCallback((e, t) => sa({ ...t, tab: String(e) }), []);
  return [$i(e), t];
}
function $i(e) {
  return e === null ? 0 : Number(e);
}
function Y(e) {
  let [t] = Qi();
  return ea(e, t);
}
function ea(e, t) {
  let n = ta(e);
  return n.find((e) => e.unique_id === t) ?? n[0];
}
function ta(e) {
  return (
    e.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter((e) => !e.hide) ?? []
  );
}
function na(e, t, n, r) {
  if (!n || t.diable_tab_id_filtering) return;
  let i = e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name,
    a = Zi(r, n.tab_tag_filter, i),
    o =
      n.store_filter && a
        ? {
            type: j.k_EStoreFilterClauseTypeAnd,
            rgSubexpressions: [n.store_filter, a],
          }
        : (n.store_filter ?? a);
  if (o) return ra(e, t, n) ? o : void 0;
}
function ra(e, t, n) {
  let r = e.GetSaleSections(),
    i = r.findIndex((e) => e.section_type === `tabs`);
  return i < 0 || !r[i].tabs?.includes(n) ? !1 : r.indexOf(t) > i;
}
function ia(e, t) {
  let n = Y(e);
  return !n || n === ta(e)[0] || t.diable_tab_id_filtering || !ra(e, t, n)
    ? ``
    : `tabid${n.unique_id}`;
}
function aa(e) {
  let t = W.useSyncExternalStore(pn, oa, oa);
  return [
    new URLSearchParams(t).get(e),
    W.useCallback((t) => sa({ [e]: t ?? null }), [e]),
  ];
}
function oa() {
  return location.search;
}
function sa(e) {
  let t = new URL(window.location.href);
  for (let [n, r] of Object.entries(e))
    r === null ? t.searchParams.delete(n) : t.searchParams.set(n, r);
  t.href !== window.location.href && cn((e) => e, t);
}
function ca(e) {
  let t = Y(e),
    n = la(),
    [r] = aa(Wi),
    [i] = aa(Gi),
    a = W.useCallback((e, t) => sa({ ...t, ...qi(e) }), []);
  return [Ji(Ki(r, i), t?.tab_tag_filter, n), a];
}
function la() {
  let { data: e } = fn();
  return W.useMemo(() => ua(e), [e]);
}
function ua(e) {
  let t = !!R.logged_in && z.EREALM !== lr.k_ESteamRealmChina && e !== void 0,
    n = new Set(nr(e));
  return (e) => !e.eContentDescriptor || (t && !n.has(e.eContentDescriptor));
}
function da(e, t) {
  let n = Y(e),
    [r] = ca(e);
  return na(e, t, n, r);
}
var fa = 50;
function pa(e, t, n) {
  let { defaultInfo: r } = t;
  switch (e.type) {
    case j.k_EStoreFilterClauseTypeStoreTag:
      return !!t.tags?.some((t) => t.tagid === e.value);
    case j.k_EStoreFilterClauseTypeFeatureTag:
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
    case j.k_EStoreFilterClauseTypeAppType:
      return (
        (r?.item_type !== void 0 && r.type !== void 0
          ? er(r.item_type, r.type)
          : `game`) === e.value
      );
    case j.k_EStoreFilterClauseTypeLanguage: {
      let n = hn(String(e.value));
      return !!t.supportedLanguages?.some(
        (e) =>
          e.elanguage === n && (e.supported || e.subtitles || e.full_audio),
      );
    }
    case j.k_EStoreFilterClauseTypeContentDescriptor:
      return !!r?.content_descriptorids?.some((t) => t === e.value);
    case j.k_EStoreFilterClauseTypePrice: {
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
    case j.k_EStoreFilterClauseTypeOr: {
      let r = e.rgSubexpressions?.some((e) => pa(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case j.k_EStoreFilterClauseTypeAnd: {
      let r = e.rgSubexpressions?.every((e) => pa(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case j.k_EStoreFilterClauseTypeOptInRegistrationTag:
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
function ma(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingApps`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n,
    ],
    queryFn: () => ga(e, t, n, (e) => ({ appid: e }), r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
function ha(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingItems`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n?.map(Xt),
    ],
    queryFn: () => ga(e, t, n, (e) => e, r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
async function ga(e, t, n, r, i, a) {
  let o = _a(i, {
      bTags: !1,
      bPlatforms: !1,
      bLanguages: !1,
      bOptInRegistrationTags: !1,
    }),
    s = Math.floor(Date.now() / 1e3),
    c = [];
  for (let l = 0; l < n.length && c.length < a; l += fa) {
    let u = n.slice(l, l + fa),
      d = await Promise.all(u.map((n) => va(e, t, r(n), o)));
    u.forEach((e, t) => {
      c.length < a && pa(i, d[t], s) && c.push(e);
    });
  }
  return c;
}
function _a(e, t) {
  switch (e.type) {
    case j.k_EStoreFilterClauseTypeStoreTag:
      t.bTags = !0;
      break;
    case j.k_EStoreFilterClauseTypeFeatureTag:
      t.bPlatforms = !0;
      break;
    case j.k_EStoreFilterClauseTypeLanguage:
      t.bLanguages = !0;
      break;
    case j.k_EStoreFilterClauseTypeOptInRegistrationTag:
      t.bOptInRegistrationTags = !0;
      break;
    case j.k_EStoreFilterClauseTypeOr:
    case j.k_EStoreFilterClauseTypeAnd:
      e.rgSubexpressions?.forEach((e) => _a(e, t));
  }
  return t;
}
async function va(e, t, n, r) {
  let [i, a, o, s, c] = await Promise.all([
    e.fetchQuery(mn(t, n)).catch(() => void 0),
    r.bTags ? e.fetchQuery(dr(t, n)).catch(() => null) : null,
    r.bPlatforms ? e.fetchQuery(rn(t, n)).catch(() => null) : null,
    r.bLanguages ? e.fetchQuery(mr(t, n)).catch(() => null) : null,
    r.bOptInRegistrationTags ? e.fetchQuery(yn(t, n)).catch(() => null) : null,
  ]);
  return {
    defaultInfo: i,
    tags: a,
    platforms: o,
    supportedLanguages: s,
    optInRegistrationTags: c,
  };
}
var ya = {
    popularity: { eType: `game`, bDropsOwned: !1 },
    wishlist: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender: { eType: `game`, bDropsOwned: !0 },
    wishlist_onsale: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender_onsale: { eType: `game`, bDropsOwned: !0 },
    dlc_onsale: { eType: `dlc`, bDropsOwned: !0 },
    dlc_music_onsale: { eType: `music`, bDropsOwned: !0 },
  },
  ba = 24,
  xa = 100,
  Sa = 500;
function Ca(e) {
  return Math.max(1, e.smart_section_min_discount_percent ?? 1);
}
function wa(e) {
  return X(e) && ya[e].bDropsOwned;
}
function X(e) {
  return e !== void 0 && e in ya;
}
function Ta(e, t, n, r) {
  let i = M(n),
    a =
      i === `tag`
        ? { tagid: n.smart_section_tag }
        : i === `top_n`
          ? { top_n_sellers: Sa }
          : {};
  return (
    (a.min_discount_percent = Ca(n)),
    (a.include_packages = n.smart_section_include_packages),
    (a.include_bundles = n.smart_section_include_bundles),
    (a.include_dlc = n.smart_section_include_dlc),
    r && (a.store_filter_json = JSON.stringify(r)),
    vr(
      e,
      t,
      a,
      i === `tag` && n.random_from_entire_set
        ? xa
        : n.smart_section_max_apps || ba,
    )
  );
}
function Ea(e, t, n, r) {
  return yr(
    e,
    t,
    {
      min_discount_percent: n.smart_section_min_discount_percent || void 0,
      store_filter_json: r ? JSON.stringify(r) : void 0,
    },
    ja(n),
  );
}
function Z(e, t) {
  if (yi(t)) return `manual`;
  if (t.section_type !== `items`) return;
  let n = M(t);
  if (t.enable_faceted_browsing) return n === void 0 ? `faceted` : void 0;
  if (n === void 0) return `manual`;
  if (
    (n === `deck_compatibility` || n === `frame_compatibility`) &&
    t.smart_section_data_source === `popularity`
  )
    return `popularity`;
  if (
    ((n === `wishlist` || n === `interactive_recommender`) &&
      e.jsondata.item_source_type !== ue.k_EContentHub) ||
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
function Da(e, t, n) {
  let r = e.GetDayIndexFromEventStart(n);
  return t.capsules.filter(
    (e) => e.visibility_index === void 0 || e.visibility_index === r,
  );
}
function Oa(e, t, n) {
  return Da(e, t, n).flatMap((e) => {
    let t = me(e);
    return t ? [t] : [];
  });
}
function ka(e, t, n, r, i) {
  let a = ja(t),
    o = Z(e, t);
  if (X(o)) {
    let n = ya[o].eType;
    return (r.tabStoreFilter ? r.tabFilteredAppIDs : Aa(e, t, r, a))?.map(
      (e) => ({ id: e, type: n }),
    );
  }
  switch (o) {
    case `manual`: {
      let i = Da(e, t, n);
      if (!r.tabStoreFilter) return i;
      if (!r.tabFilteredItems) return;
      let a = new Set(r.tabFilteredItems.map(Xt));
      return i.filter((e) => {
        let t = me(e);
        return t !== void 0 && a.has(Xt(t));
      });
    }
    case `tag`:
    case `top_n`:
    case `all_discounted`: {
      if (!r.discountedItems) return;
      let e = r.discountedItems.map(he).filter((e) => !!e);
      return o === `tag` && t.random_from_entire_set
        ? li(t, e, a, i)
        : e.slice(0, a);
    }
    case `topwishlisted`:
      return r.topWishlistedItems
        ?.map(he)
        .filter((e) => !!e)
        .slice(0, a);
    case `personalized_carousel`:
      return Ma(e, t, r.personalizedCarousels)?.rgCapsules.slice(0, a);
    default:
      return;
  }
}
function Aa(e, t, n, r) {
  let i = Z(e, t);
  if (X(i))
    switch (i) {
      case `popularity`:
        return n.compatAppList && Pi(t, n.compatAppList).slice(0, r);
      case `wishlist`:
        return Q(n.wishlistAppIDs, Ti(e, e.GetTaggedItems()), n.ownedAppIDs, r);
      case `interactive_recommender`:
        return Q(
          n.recommendedAppIDs,
          Ti(e, e.GetTaggedItems()),
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
        Zt(i, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
}
function ja(e) {
  return e.smart_section_max_apps || ba;
}
function Ma(e, t, n) {
  if (n) return n[q(t, e).nSectionIndex] ?? null;
}
function Na(e, t) {
  let n = Z(e, t) === `personalized_carousel`;
  return Pa(e, ki(e) ?? t, n);
}
function Pa(e, t, r) {
  let i = en(),
    a = n(),
    { storeBrowseContext: s } = Cn(),
    c = Y(e),
    [l] = ca(e),
    u = t ? na(e, t, c, l) : void 0,
    { data: d, isSuccess: f } = o({
      ...O(e.clanSteamID.GetAccountID(), a),
      enabled: r,
    }),
    { data: p } = o({
      ...ji(i, s, e, Ie(e, d), R.accountid, u),
      enabled: r && f,
    });
  return p;
}
function Q(e, t, n, r) {
  if (e && n) return wi(e, t, (e) => n.has(e), r);
}
function Fa(e, t, r) {
  let i = !r,
    a = be(),
    s = si(),
    c = Z(e, t),
    l = en(),
    u = n(),
    { storeBrowseContext: d, dataLoader: f } = Cn(),
    p = da(e, t),
    m = Ca(t),
    { data: h } = o({ ...Dr(Ni(t)), enabled: i && c === `popularity` }),
    { data: g } = o({ ...te(l, R.accountid), enabled: i && c === `wishlist` }),
    { data: _ } = o({
      ...di(l, R.accountid),
      enabled: i && c === `interactive_recommender`,
    }),
    { data: v } = o({
      ...ln(l, d, R.accountid, m),
      enabled: i && c === `wishlist_onsale`,
    }),
    { data: y } = o({
      ...mi(u, l, f, R.accountid, m),
      enabled: i && c === `interactive_recommender_onsale`,
    }),
    { data: b } = o({
      ...Sr(u, l, d, R.accountid, `dlc`, m),
      enabled: i && c === `dlc_onsale`,
    }),
    { data: x } = o({
      ...Sr(u, l, d, R.accountid, `music`, m),
      enabled: i && c === `dlc_music_onsale`,
    }),
    { data: S } = o({
      ...Ta(l, d, t, p),
      enabled: i && (c === `tag` || c === `top_n` || c === `all_discounted`),
    }),
    { data: C } = o({ ...Ea(l, d, t, p), enabled: i && c === `topwishlisted` }),
    w = Na(e, t),
    { data: T } = o({ ...ee(l, R.accountid), enabled: i && wa(c) }),
    E = (0, W.useMemo)(
      () => ({
        compatAppList: h,
        wishlistAppIDs: g,
        recommendedAppIDs: _,
        wishlistOnSaleAppIDs: v,
        recommendedOnSaleAppIDs: y,
        ownedDLCOnSaleAppIDs: b,
        ownedSoundtracksOnSaleAppIDs: x,
        discountedItems: S,
        topWishlistedItems: C,
        personalizedCarousels: w,
        ownedAppIDs: T,
        tabStoreFilter: p,
      }),
      [h, g, _, v, y, b, x, S, C, w, T, p],
    ),
    D = !!p && X(c),
    ne = (0, W.useMemo)(() => (D ? Aa(e, t, E, 1 / 0) : void 0), [D, e, t, E]),
    { data: re } = o({
      ...ma(u, f, ne, p, ja(t)),
      enabled: i && D && ne !== void 0,
    }),
    O = !!p && c === `manual`,
    k = (0, W.useMemo)(() => (O ? Oa(e, t, a) : void 0), [O, e, t, a]),
    { data: A } = o({
      ...ha(u, f, k, p, k?.length ?? 0),
      enabled: i && O && k !== void 0,
    });
  return (0, W.useMemo)(() => {
    let n = ka(
      e,
      t,
      a,
      { ...E, tabFilteredAppIDs: re, tabFilteredItems: A },
      s,
    );
    return n && ci(e, t, n, s);
  }, [e, t, a, E, re, A, s]);
}
function Ia(e) {
  return (Fa(e.event, e.section), null);
}
function La(e, t) {
  return e == null || e == null || !Va(t)
    ? !0
    : t.reverse_show_on_tabs
      ? !(!t.show_on_tabs || t.show_on_tabs.includes(e))
      : !!(t.show_on_tabs && t.show_on_tabs.includes(e));
}
function Ra(e) {
  return Ba(e, `[Feature] Adult Only Sexual Content`);
}
function za(e) {
  return Ba(e, `[Feature] Coming Soon`);
}
function Ba(e, t) {
  if (e?.sale_tag_filter?.clauses?.length == 1) {
    let n = e.sale_tag_filter.clauses[0];
    return (
      n.type === `Must have` && n.or_tags.length === 1 && n.or_tags[0] === t
    );
  }
  return !1;
}
function Va(e) {
  return !!(
    e.show_on_tabs &&
    e.show_on_tabs.length > 0 &&
    !e.diable_tab_id_filtering
  );
}
function Ha(e, t) {
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
function Ua(e, t, n) {
  let r = n,
    i = 0;
  for (i = 0; i < t; i++) {
    let t = e[i % e.length];
    if (r < t) break;
    r -= t;
  }
  return i;
}
function Wa(e, t) {
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
function Ga(e, t) {
  if (k(e)) return 0;
  let n = A(e);
  return n <= 0 ? 0 : n + t;
}
function Ka(e, t, n, r, i) {
  let a =
    `section_` +
    r +
    `_` +
    e.GID +
    (i || 0) +
    ve(t.unique_id ? t.unique_id.toString() : JSON.stringify(t)).toString();
  return (
    n &&
      e.rtime32_last_local_modification &&
      (a += `_` + e.rtime32_last_local_modification),
    a
  );
}
function qa(e) {
  let { id: t, type: n } = e,
    r = pe({ id: t, type: n }),
    { data: i } = Qe(r);
  return (0, G.jsx)(`div`, {
    className: T,
    children: (0, G.jsx)(I, {
      ...e,
      bShowReviewSummary: !0,
      bShowDemoButton: e.bShowDemoButton || i?.type == 1,
      bPreferDemoStorePage: e.bPreferDemoStorePage,
    }),
  });
}
var Ja = `SppL95yx9BU-`,
  Ya = `_7Na7-QNyAn4-`,
  Xa = `zdh0LkaHoKw-`,
  Za = `vZlB-C6RUio-`;
function Qa(e) {
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
    { data: u } = Qe(l),
    { data: d } = vt(l),
    [f, p] = ne(o, s),
    m = u?.item_type == 0;
  return (0, G.jsx)(re, {
    appid: m ? u.id : void 0,
    children: (0, G.jsxs)(Xe, {
      "flow-children": `grid`,
      navEntryPreferPosition: Mn.PREFERRED_CHILD,
      autoFocus: c,
      navKey: `purchase_only_` + u?.id,
      children: [
        `	`,
        (0, G.jsxs)(`div`, {
          className: Ya,
          children: [
            (0, G.jsx)(`div`, {
              className: void 0,
              children: (0, G.jsx)(`div`, { className: Ja, children: u?.name }),
            }),
            (0, G.jsxs)(`div`, {
              className: Za,
              children: [
                !a &&
                  u?.type != 10 &&
                  (0, G.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, G.jsx)(w, { id: l }),
                      !!(f && u?.item_type == 0 && d) &&
                        (0, G.jsx)($t, {
                          eDisplay: p,
                          storeItemPlatform: d,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, G.jsx)(ge, {
                  id: l,
                  className: Xa,
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
function $a(e) {
  let { displayStyle: t, requestCompact: n, ...r } = e,
    { type: i } = e,
    a = $e();
  if (t === `purchaseonlydisplay`) return (0, G.jsx)(Qa, { ...r });
  if (a) return (0, G.jsx)(I, { ...r });
  if (n && !F()) return (0, G.jsx)(qa, { ...r });
  if (i == `bundle` || i == `sub`) return (0, G.jsx)(I, { ...r });
  if (F() && (t == `library` || t == `animated`))
    return (0, G.jsx)(I, { ...e, bShowReviewSummary: !0 });
  switch (t) {
    case `library`:
      return (0, G.jsx)(ye, { ...r });
    case `animated`:
      return (0, G.jsx)(ye, { ...r });
    default:
      return (0, G.jsx)(I, { ...r, bShowReviewSummary: !0 });
  }
}
function eo(e, t) {
  return !(e === `purchaseonlydisplay` || t || F());
}
var to = `h4e3CZE5mfI-`,
  no = `lJc7R9Bil2I-`,
  ro = `IS179RoYT1Q-`,
  io = `SZeormjSwYo-`,
  ao = 240;
function oo(e, t) {
  return $(e, t).every((e) => e === 1);
}
function so(e) {
  let t = !1,
    n = M(e);
  return (
    n && (t = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(n)),
    !!(t || e.show_parent_app)
  );
}
function co(e, t) {
  if (k(e)) return 0;
  let n = A(e);
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
            return ot(t, 1, r == `tall` ? 4 : 3);
          })
        : e.capsules_per_row_array
      : e.adaptive_capsules_per_row
        ? t
          ? [2, 3]
          : [2, 3, 4, 3]
        : [ot(e.capsules_per_row || 1, 1, t ? 3 : 5) || 1];
}
function lo(e, t, n) {
  let r = $(e, n),
    i = k(e) ? oe(e) : co(e, t),
    a = 0;
  for (let e = 0; e < i; e++) a += r[e % r.length];
  return a;
}
function uo(e, t) {
  return e.capsule_style_per_row_array
    ? e.capsule_style_per_row_array
    : oo(e, t)
      ? [`fullrow`]
      : [`grid`];
}
function fo(e, t) {
  let { saleEvent: n, language: r, index: i, section: a } = t;
  return (0, G.jsx)(
    Ao,
    {
      link: e,
      language: r,
      clanAccountID: n.clanSteamID.GetAccountID(),
      strClassName: g,
    },
    a.unique_id + `_` + i,
  );
}
function po(e, t) {
  let {
    capsuleStyle: n,
    index: r,
    section: i,
    saleEvent: a,
    rowElements: o,
  } = t;
  if (u(e)) return null;
  let s = so(i),
    c = a.BUseSubscriptionLayout(),
    l = k(i) && !t.bIsSingleCapsule,
    d = Ha(i, t.activeTab),
    f = i.unique_id + `_` + r + `_` + e.type + `_` + e.id;
  if (n !== `fullrow`) {
    let a = L(l && `FolDBzXMW2I-`);
    return (0, G.jsx)(
      `div`,
      {
        className: a,
        children: (0, G.jsx)(
          Ge,
          {
            imageType: n === `tall` ? `library` : `header`,
            navKey: f,
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
            eHardwareCompatibilityDisplay: d,
          },
          f,
        ),
      },
      f,
    );
  }
  {
    let n = i.single_item_style ? i.single_item_style : ie,
      a;
    (`overrideNavigation` in e &&
      (a = (t) => (
        e.overrideNavigation(t),
        t && (t.preventDefault(), t.stopPropagation()),
        !1
      )),
      F() && (n == `library` || n == `animated`) && (n = `bordered`));
    let o = L({
      [x]: !l && n == `bordered`,
      [m]: l && n == `bordered`,
      [_]: l && n == `animated`,
      [Ke + r]: r === 0,
    });
    return (0, G.jsx)(
      `div`,
      {
        className: o,
        children: (0, G.jsx)($a, {
          id: e.id,
          type: e.type,
          displayStyle: n,
          bShowPurchaseOptionsButton: i.show_purchase_options,
          bUseSubscriptionLayout: c,
          bShowDemoButton:
            i.show_as_demos || t.activeTab?.BFilterRequiresFeatureDemo(),
          bPreferDemoStorePage: i.prefer_demo_store_page,
          bHidePrice: i.hide_prices,
          eHardwareCompatibilityDisplay: d,
          fnOnClickOverride: a,
          bPreferAssetWithoutOverride: !!i.prefer_assets_without_overrides,
        }),
      },
      f,
    );
  }
}
function mo(e, t, n, r, i, a, o, s) {
  let {
    RenderEvent: c,
    RenderItemDef: l,
    RenderLoyaltyReward: d,
    RenderCuratorList: f,
  } = s || {};
  return e.section_type === `events` || e.section_type === `sale_events`
    ? !r || !c
      ? []
      : r.filter((e) => !!e).map((e) => ({ Render: (t) => c(e, t) }))
    : e.section_type === `links` ||
        e.section_type === `title_image` ||
        M(e) === `sale_tabhub`
      ? (e.section_type === `title_image` &&
          e.title_image_selected === `title`) ||
        !n
        ? []
        : n.map((e) => ({ Render: (t) => fo(e, t) }))
      : ce(e.section_type)
        ? t
          ? t.filter((e) => !u(e)).map((e) => ({ Render: (t) => po(e, t) }))
          : []
        : e.section_type === `itemdef`
          ? !i || !l
            ? []
            : i.map((e) => ({ Render: (t) => l(e, t) }))
          : e.section_type === `point_shop_smart`
            ? !a || !d
              ? []
              : a.map((e) => ({ Render: (t) => d(e, t) }))
            : e.section_type === `creator_list_of_lists`
              ? !o || !f
                ? []
                : o.map((e) => ({ Render: (t) => f(e, t) }))
              : [];
}
function ho(e, t) {
  return t[e % t.length];
}
function go(e, t) {
  return e === `tall` ? t + 1 : t;
}
function _o(e, t, n, r, i, a, o, s, c, l) {
  let {
    nMaxCapsulesPerRow: u,
    bScreenIsWide: d,
    nShowAdditionalRows: f,
    bShowAsCarousel: p,
    bAutoAdvance: m,
    bHideIfTooFewItems: h,
    strCarouselKey: g,
  } = t;
  if (n.length === 0) return { content: null, bAdditionalContent: !1 };
  let _ = n.length === 1,
    v = (e, t, n, r, i) => {
      let a = [];
      for (let o = t; o < n; o++) {
        let t = {
            capsuleStyle: i,
            index: o,
            rowElements: r,
            bIsSingleCapsule: _,
            ...s,
          },
          n = e[o].Render(t);
        n && a.push(n);
      }
      return a;
    },
    y = null,
    b = !1,
    x = _ ? [1] : r,
    C = i;
  _ && (u > 1 || C[0] == `tall`) && (C = [`fullrow`]);
  let w = p && a <= 1,
    T = Math.min(x[0], u);
  if (w && n.length > T)
    y = (0, W.createElement)(
      je,
      {
        ...t,
        key: g,
        hideArrows: !d,
        visibleElements: T,
        className: L({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !l,
          ItemCount_4: x[0] == 4,
          [ro]:
            t && t.section && t.section.section_type == `creator_list_of_lists`,
        }),
        useTestScrollbar: !0,
        bLazyRenderChildren: !0,
        bAutoAdvance: !!m,
        hidePips: c,
        padded: !l,
        screenIsWide: d,
        navKey: e,
        lazyRenderPlaceholderWidth: ao,
      },
      v(n, 0, n.length, T, ho(0, C)),
    );
  else {
    let e = o(f),
      r = !0;
    if (p) ((e = a), (r = w));
    else if (f == 0 && e > 0) {
      let t = 0,
        r = 0;
      for (; t < e && r < n.length; t++) {
        let e = Math.min(x[t % x.length], u);
        r += e;
      }
      e = Math.max(2, t);
    }
    let i = [],
      s = [],
      l = 0;
    for (let t = 0; l < n.length; t++) {
      let a = ho(0, C);
      for (let t = 0; (e == 0 || t < e) && l < n.length; t++) {
        (t == 0 || d) && (a = ho(t, C));
        let e = go(a, u),
          r = Math.min(x[t % x.length], e),
          i = Math.min(r, n.length - l);
        if (i < r && t === 0) {
          if (h) return { content: null, bAdditionalContent: !1 };
          r = Math.max(a === `tall` ? 3 : 2, i);
        }
        (s.push(
          (0, G.jsx)(
            yo,
            { nMaxItems: r, nItems: i, children: v(n, l, l + i, r, a) },
            `Row_` + t,
          ),
        ),
          (l += i));
      }
      if (r || (l >= n.length && i.length === 0)) break;
      let o = i.length || void 0;
      (i.push(
        (0, G.jsx)(
          `div`,
          { className: S, children: (0, G.jsx)(vn, { depth: o, children: s }) },
          `Page_${t}`,
        ),
      ),
        (s = []));
    }
    i.length == 0
      ? ((b = n.length > l),
        (y = (0, G.jsx)(Xe, {
          "flow-children": `grid`,
          focusable: !1,
          children: s,
        })))
      : (y = (0, W.createElement)(
          je,
          {
            ...t,
            key: g,
            hideArrows: !d,
            visibleElements: 1,
            className: `SaleSectionCarousel`,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderWidth: ao,
            hidePips: c,
            screenIsWide: d,
          },
          i,
        ));
  }
  return { content: y, bAdditionalContent: b };
}
function vo(e) {
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
      (!P(n) &&
        n.capsules_per_row_array?.length &&
        n.capsules_per_row_array[0] >= (n.capsules?.length || 0))) &&
      (n.carousel_rows = 1));
  let o = mo(
    n,
    e.capsules,
    e.links,
    e.events,
    e.itemdefs,
    e.rewards,
    e.curatorLists,
    e.renderers,
  );
  if (o.length === 0) return { content: null, bAdditionalContent: !1 };
  let s = $(n, i),
    c = uo(n, i),
    l = oe(n),
    u = (e) => co(n, e),
    d = { section: n, saleEvent: t, language: r, activeTab: a },
    f = { ...e, strCarouselKey: Ui(a?.GetTagSelection()) };
  return _o(n.unique_id, f, o, s, c, l, u, d, i);
}
var yo = (e) => {
  let { nMaxItems: t, nItems: n } = e,
    r = t - n,
    i = r % 2 == 0 ? `repeat(${t}, 1fr)` : `0.5fr repeat(${t - 1}, 1fr) 0.5fr`,
    a = null,
    o = null;
  if (r > 0) {
    let e = Math.floor((r + 1) / 2);
    ((a = []), (o = []));
    for (let t = 0; t < e; t++)
      (a.push((0, G.jsx)(`div`, {}, `front_` + t)),
        o.push((0, G.jsx)(`div`, {}, `back_` + t)));
  }
  return (0, G.jsxs)(`div`, {
    className: L(
      Ce,
      d,
      `SaleSectionContainer`,
      `center_row_trgt`,
      `ItemCount_` + t,
    ),
    style: { gridTemplateColumns: t > 1 ? i : void 0 },
    children: [a, e.children, o],
  });
};
function bo(e) {
  let { section: t, nMaxCapsulesPerRow: n, bInGamepadUI: r } = e,
    i = ho(0, uo(t, r)),
    a = Math.min($(t, r)[0], go(i, n)),
    o = L(
      io,
      i === `tall` && `_9Xrgw1NkKg8-`,
      i === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, G.jsx)(yo, {
    nMaxItems: a,
    nItems: a,
    children: Array.from({ length: a }, (e, t) =>
      (0, G.jsx)(`div`, { className: o }, t),
    ),
  });
}
function xo(e) {
  let { event: t, section: n, rgSlides: r, onSlide: i } = e,
    a = $e(),
    { bScreenIsWide: o } = Ae(n.section_type);
  return r.length === 0
    ? null
    : r.length === 1
      ? (0, G.jsx)(G.Fragment, { children: r[0] })
      : !o || a
        ? (0, G.jsx)(`div`, {
            className: qe,
            children: r.map((e, t) =>
              (0, G.jsx)(So, { nSlide: t, onSlide: i, children: e }, t),
            ),
          })
        : (0, G.jsx)(`div`, {
            className: L(p, Je),
            children: (0, G.jsx)(je, {
              ...se(t.jsondata),
              visibleElements: 1,
              screenIsWide: !0,
              useTestScrollbar: !0,
              navKey: n.unique_id,
              onSlide: i,
              children: r,
            }),
          });
}
function So(e) {
  let { nSlide: t, onSlide: n, children: r } = e,
    i = kn({ onEnter: () => n?.(t) });
  return (0, G.jsx)(`div`, { ref: i, children: r });
}
function Co(e) {
  let {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: i,
      placeholderHeight: a,
      nHiddenCapsules: o,
      personalizedCarousels: s,
      promotedSale: c,
      children: l,
    } = e,
    [u, d] = W.useState(void 0),
    { bShowSeeMoreHint: m, panelProps: h } = Re(u);
  return (0, G.jsxs)(Le, {
    placeholderHeight: a,
    className: L({
      [p]: !0,
      [b]: k(n),
      [v]: n.disable_background,
      [Me]: !0,
      SaleSectionForCustomCSS: !0,
      [n.sale_section_classname || ``]: !!n.sale_section_classname,
      [void 0]: n.background_repeat == `coverBlur`,
    }),
    rootMargin: ke,
    holdGamepadFocus: i,
    ...h,
    children: [
      (0, G.jsx)(`div`, {
        className: L(Oe, n.background_repeat == `coverBlur` ? Ee : ``),
        style: Ar(n, t, i),
      }),
      (0, G.jsxs)(`div`, {
        className: f,
        children: [
          (0, G.jsx)(ti, {
            section: n,
            event: t,
            language: r,
            nHiddenCapsules: o,
            personalizedCarousels: s,
            promotedSale: c,
            bShowSeeMoreHint: m,
            bUseGamepadLinkHint: !0,
            onLinkResolved: (e) => d(e ?? void 0),
          }),
          (0, G.jsx)(wo, { event: t, section: n }),
        ],
      }),
      l,
      (0, G.jsx)(C, { section: n }),
    ],
  });
}
function wo(e) {
  let { event: t, section: n } = e,
    r = W.useMemo(
      () =>
        n.section_type == `events`
          ? Wt(`ch_newshub`, `application_config`)
          : void 0,
      [n.section_type],
    );
  if (n.hide_view_all_events_link) return null;
  let i = null;
  if (n.section_type == `events`) {
    if (!r || !t.BUsesContentHubForItemSource() || !P(n)) return null;
    i = V.STORE_BASE_URL + `news/` + r;
  } else
    n.section_type == `sale_events`
      ? (i = V.STORE_BASE_URL + `news/collection/sales/`)
      : n.section_type == `calendar` &&
        (i = V.STORE_BASE_URL + `personalcalendar`);
  if (!i) return null;
  let a = i;
  return (0, G.jsx)(`div`, {
    className: h,
    children: (0, G.jsx)(Pn, {
      onClick: (e) => cr(e, a),
      children: B(`#EventBrowse_AllEventsBtn`),
    }),
  });
}
function To(e) {
  let { saleEvent: t, section: n, bInGamepadUI: r } = e,
    i = {
      ...e,
      bShowAsCarousel: k(n),
      bAutoAdvance: !!n.carousel_auto_advance,
      bHideIfTooFewItems: !!n.hide_section_if_too_few_items,
      ...se(t.jsondata),
    },
    a = Ga(n, i.nShowAdditionalRows),
    o = Ua($(n, r), a, i.capsules?.length ?? 0);
  return (o < a && P(n) && (i.nShowAdditionalRows -= a - o), i);
}
var Eo = `NQebVMQULto-`;
function Do(e) {
  let {
      section: t,
      nRowsWithNext: n,
      nCapsules: r,
      rgRowSizes: i,
      bLoading: a,
      onShowMore: o,
    } = e,
    s = Ua(i, n, r) < n;
  return (0, G.jsx)(`div`, {
    className: L(Eo, `ShowContentsContainer`),
    children: a
      ? (0, G.jsx)(_e, { size: `small`, string: B(`#Loading`) })
      : !s &&
        t.cap_section_content &&
        (0, G.jsx)(Sn, {
          onClick: o,
          className: L(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: B(`#Sale_ShowMore`),
        }),
  });
}
function Oo(e) {
  return Math.max(Ga(e, 0), 4);
}
function ko(e, t, n = ``, r = 0) {
  if (e.enable_faceted_browsing && r > 0)
    return { feature: `salefacetbrowse` + n, depth: r };
  if (P(e) && e.section_type != `crosspromotesalepage`) {
    let r = M(e);
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
function Ao(e) {
  let { language: t, link: n } = e,
    r = wt(),
    [i, a, o] = s(() => [
      U.GetWithFallback(n.localized_link_capsule, t),
      r ? n.sc_url : n.url,
      n.materialized_link_capsule,
    ]),
    c = i ? l.GenerateURLFromHashAndExt(e.clanAccountID, i) : void 0;
  return (0, G.jsx)(y, {
    url: a,
    className: e.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!n.open_in_place,
    children: (0, G.jsxs)(`div`, {
      className: L(D, e.link.url ? E : ``),
      children: [
        !!c && (0, G.jsx)(de, { className: `_-4JZsb8K2FY-`, src: c }),
        !!o &&
          (0, G.jsx)(`img`, { className: `_-4JZsb8K2FY-`, src: o, alt: a }),
      ],
    }),
  });
}
export {
  K as $,
  Zi as A,
  Pi as B,
  La as C,
  Na as D,
  Ia as E,
  qi as F,
  Ti as G,
  ki as H,
  Ki as I,
  _i as J,
  wi as K,
  Ji as L,
  Bi as M,
  Vi as N,
  Fa as O,
  Hi as P,
  hi as Q,
  Gi as R,
  za as S,
  Z as T,
  ji as U,
  Ni as V,
  Ei as W,
  bi as X,
  vi as Y,
  Si as Z,
  $a as _,
  Co as a,
  Wr as at,
  Ga as b,
  lo as c,
  kr as ct,
  vo as d,
  Dr as dt,
  ai as et,
  bo as f,
  wr as ft,
  eo as g,
  no as h,
  To as i,
  Hr as it,
  Ui as j,
  ia as k,
  $ as l,
  jr as lt,
  to as m,
  Oo as n,
  ni as nt,
  xo as o,
  Lr as ot,
  _o as p,
  Cr as pt,
  gi as q,
  Do as r,
  ti as rt,
  so as s,
  Fr as st,
  ko as t,
  Zr as tt,
  co as u,
  Ar as ut,
  Wa as v,
  Ma as w,
  Ra as x,
  Ka as y,
  Wi as z,
};
