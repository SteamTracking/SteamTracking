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
  Dr as T,
  Dt as ee,
  Qt as te,
  Rn as E,
  nt as D,
  tt as ne,
  wn as re,
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
import { a as fe, i as pe } from "./ostype.js";
import { f as me, l as he, u as ge } from "./salestoreitemutils.js";
import { n as _e, t as F } from "./salepreviewwidgets.js";
import { t as ve } from "./throbber.js";
import { i as ye } from "./stringutils.js";
import { t as be } from "./saleitemlibrarywidget.js";
import { t as xe } from "./eventtimeoverridecontext.js";
import {
  A as Se,
  E as Ce,
  O as we,
  T as Te,
  k as Ee,
  n as De,
  p as Oe,
  t as ke,
} from "./partnereventshared.module.js";
import { c as Ae, d as je, r as Me } from "./carouselarrows.js";
import { f as Ne } from "./eventbbcodeparser.module.js";
import { n as Pe } from "./eventimageurlwithfallback.js";
import { n as Fe } from "./partnereventutils.js";
import { n as Ie, t as Le } from "./creatorhomegamelock.js";
import { n as Re } from "./lazyrenderchildren.js";
import { n as ze, t as Be } from "./seemorebutton.js";
import { c as Ve, i as He, l as Ue, o as We } from "./creatorhomestore.js";
import { r as Ge } from "./partnereventeditorcontext.js";
import { n as Ke, r as qe } from "./bottomrow.js";
import { a as Je, r as Ye } from "./crosspromotesalelayouts.module.js";
import {
  $d as Xe,
  $u as Ze,
  $v as Qe,
  A_ as $e,
  Ad as et,
  Bh as tt,
  Ch as nt,
  Cm as rt,
  Cp as it,
  Cr as at,
  Dd as ot,
  Dm as st,
  Ef as ct,
  Eg as lt,
  Ep as ut,
  Ex as dt,
  Fd as ft,
  Fp as pt,
  Gb as I,
  Gh as mt,
  Hb as L,
  Ib as ht,
  Ih as gt,
  Im as _t,
  Iy as vt,
  Jh as yt,
  Jv as bt,
  Jx as xt,
  Jy as St,
  Kf as Ct,
  Kg as wt,
  Kh as R,
  Kx as Tt,
  Ld as Et,
  Lf as Dt,
  Lh as Ot,
  Lp as kt,
  Mp as At,
  Nf as jt,
  Ng as Mt,
  Nm as Nt,
  Od as Pt,
  Of as Ft,
  Oh as It,
  Oi as Lt,
  Op as Rt,
  Pf as zt,
  Qh as Bt,
  Rh as Vt,
  Rm as Ht,
  Rr as Ut,
  Ry as z,
  Sc as B,
  Sm as Wt,
  Td as Gt,
  Tg as Kt,
  Tx as qt,
  Uy as V,
  V_ as Jt,
  Vg as Yt,
  Vm as Xt,
  Vv as Zt,
  W_ as Qt,
  Wd as $t,
  Wf as en,
  Wp as tn,
  Yb as nn,
  Yf as rn,
  Yg as an,
  Yh as on,
  Yv as sn,
  Zf as cn,
  _f as ln,
  ah as un,
  am as dn,
  ax as fn,
  bS as pn,
  b_ as mn,
  bv as hn,
  dd as gn,
  dt as _n,
  dv as vn,
  eg as yn,
  ep as bn,
  eu as xn,
  ev as Sn,
  fp as Cn,
  ft as wn,
  ht as Tn,
  in as En,
  iy as Dn,
  jf as On,
  kc as kn,
  kh as An,
  kv as jn,
  ld as Mn,
  lg as Nn,
  mS as Pn,
  mf as Fn,
  mg as In,
  mt as Ln,
  mv as Rn,
  mx as zn,
  n_ as Bn,
  ng as Vn,
  np as Hn,
  ny as Un,
  o_ as Wn,
  od as Gn,
  op as Kn,
  pf as qn,
  pl as Jn,
  pm as Yn,
  pr as Xn,
  qh as Zn,
  qx as Qn,
  rf as $n,
  rl as er,
  rv as tr,
  rx as H,
  sm as nr,
  t_ as rr,
  tf as ir,
  ug as ar,
  um as or,
  vf as sr,
  vr as cr,
  vv as lr,
  wh as ur,
  xg as dr,
  xh as fr,
  yg as pr,
  ym as mr,
  yv as hr,
  zb as gr,
  zh as _r,
  zm as vr,
} from "./main.js";
function yr(e, t, n, r) {
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
        await Sn(`DiscountedItems`, e, t, {
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
function br(e, t, n, r) {
  let { store_filter_json: i, min_discount_percent: a } = n;
  return {
    queryKey: [`TopWishlistedComingSoon`, i ?? ``, a ?? 0, r, t.country],
    queryFn: async () =>
      (
        await Sn(`TopWishlistedComingSoon`, e, t, {
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
var xr = 500,
  Sr = 100;
function Cr(e, t, n, r, i, a = 1) {
  return {
    queryKey: [`AccountOwnedDLCOnSale`, r ?? 0, i, n.country, a],
    queryFn: async () => {
      if (!r) return [];
      let o = await e.fetchQuery(T(t, r)),
        s = Array.from(o).slice(0, xr);
      return s.length
        ? (
            await Sn(`SaleTechOwnedDLCOnSale`, t, n, {
              start: 0,
              count: Sr,
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
async function wr(e, t) {
  t.set(`origin`, location.origin);
  let n = `${L.STORE_BASE_URL}saleaction/${e}?${t}`,
    r = await fetch(n);
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  let i = await r.json();
  if (i?.success != 1) throw Error(`${n} answered EResult ${i?.success}`);
  return i;
}
async function Tr(e) {
  let t = await wr(
    `ajaxgetpopularcompatlist`,
    new URLSearchParams({ compatDevice: e }),
  );
  if (!t.list) throw Error(`ajaxgetpopularcompatlist answered without a list`);
  return t.list;
}
var Er = 3e5;
function Dr(e) {
  return [`PopularCompatList`, e];
}
function Or(e) {
  return { queryKey: Dr(e), queryFn: () => Tr(e), staleTime: Er, retry: !1 };
}
var U = e(t()),
  W = r(),
  kr = e(a(), 1);
function Ar(e, t) {
  return `linear-gradient(0deg, ${e || `transparent`} 0%, ${t || `transparent`} 100%)`;
}
function jr(e, t, n) {
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
          Ar(e.background_gradient_bottom, e.background_gradient_top) + r,
        backgroundRepeat: e.background_repeat,
        backgroundSize: e.background_repeat == `coverBlur` ? `cover` : ``,
        outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
        outlineColor: e.border_color,
        outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
      }
    : {};
}
function Mr(e, t) {
  return e
    ? e.disable_background && !t
      ? { paddingLeft: 0, paddingRight: 0 }
      : e.background_gradient_bottom ||
          e.background_gradient_top ||
          e.background_repeat ||
          e.border_color ||
          e.border_width
        ? {
            background: Ar(
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
function Nr(e) {
  return e?.clan_steamid ? Fe(new vt(e.clan_steamid), e) : null;
}
var Pr = 100;
async function Fr(e, t) {
  let n = new URLSearchParams();
  n.set(`event_gids`, [...new Set(e)].sort().join(`,`)),
    n.set(`lang_list`, Ie(t)),
    n.set(`origin`, location.origin);
  let r =
      L.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + n.toString(),
    i = await fetch(r);
  if (i.status === 204) return e.map(() => null);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json(),
    o = new Map((a.events ?? []).map((e) => [e.gid, e]));
  return e.map((e) => o.get(e) ?? null);
}
function Ir(e) {
  return c(
    [`PublicPartnerEventBrowser`, e],
    () => new kr.default((t) => Fr(t, e), { maxBatchSize: Pr, cache: !1 }),
  );
}
function Lr(e, t) {
  return [`PublicPartnerEvent`, e, t];
}
function Rr(e, t, n) {
  return {
    queryKey: Lr(e, t),
    queryFn: async () => (n ? n.load(e) : (await Fr([e], t))[0]),
    select: Nr,
    enabled: !!e,
    staleTime: 6e5,
  };
}
function zr(e) {
  let t = Pn(L.LANGUAGE),
    n = Ir(t);
  return o(Rr(e, t, n));
}
function Br(e, t, n) {
  return Na(t, e, n)?.strTagName || void 0;
}
function Vr(e, t, n, r) {
  let i = n == 1 || n == 3 || n == 4,
    a = () => {
      let t = We(e.smart_section_creator_listid);
      return t
        ? i
          ? V(`#Sale_CreatorList_Section_Editor_title`, t)
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
          let { nSectionIndex: n, nNumSections: r } = K(e, t);
          return V(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        let o = Br(e, t, r);
        if (!o && n == 2) {
          let { nSectionIndex: n, nNumSections: r } = K(e, t);
          return V(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        return o ? V(`#Sale_PersonalizedCarousel_Section_title`, o) : null;
      case `creator_list`:
        return a();
    }
  else if (e.section_type === `tabs`) return ``;
  else if (e.section_type === `curator`) {
    if (e.curator_clan_id) {
      let t = vt.InitFromClanID(e.curator_clan_id, H.EUNIVERSE),
        n = Ue.GetCreatorHome(t);
      if (n) return V(`#Sale_CuratorSection_Name`, n.GetName());
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
function Hr(e, t, n, r) {
  let i = Vr(e, t, n, r);
  return i === null ? null : i && i.startsWith(`#`) ? V(i) : i;
}
function Ur(e, t, n, r, i, a, o, s) {
  if (!e) return ``;
  if (e.section_type === `crosspromotesalepage`) return Si(s, n);
  let c = Hr(e, t, i, o),
    u = z.GetWithFallback(e.localized_label, n),
    d =
      c ||
      u ||
      (e.default_label === `#Sale_default_label` ? `` : V(e.default_label)),
    f = e.internal_section_title?.trim();
  if ((f?.length ?? 0) > 0) {
    if (i == 3 || i == 4)
      return d?.trim().length == 0 || a
        ? f
        : (0, W.jsxs)(W.Fragment, {
            children: [
              f,
              ` `,
              (0, W.jsx)(cr, {
                tooltip: St(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, W.jsx)(`br`, {}),
                  d,
                ),
              }),
            ],
          });
    if (i == 1)
      return d?.trim().length == 0 || a
        ? f
        : (0, W.jsxs)(W.Fragment, {
            children: [
              f,
              ` `,
              (0, W.jsx)(`span`, {
                children: St(`#Sale_Section_InternalTitle_Actual`, d),
              }),
            ],
          });
  }
  let p = z.GetWithFallback(e.localized_label_image, n);
  if (!a && p) {
    let e = l.GenerateURLFromHashAndExt(r, p);
    return (0, W.jsx)(`img`, { loading: `lazy`, src: e, alt: d });
  }
  return d;
}
function Wr(e, t, n) {
  if (N(e.section_type))
    switch (M(e)) {
      case `personalized_carousel`:
        let r = Br(e, t, n);
        return r ? V(`#Sale_PersonalizedCarousel_Section_subtitle`, r) : null;
      case `creator_list`:
        return He(e.smart_section_creator_listid) ?? null;
    }
  return null;
}
function Gr(e, t, n, r) {
  let i = Wr(e, t, r);
  return i === null
    ? z.GetWithFallback(e.localized_subtitle, n) ||
        (!e.default_subtitle || e.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : V(e.default_subtitle))
    : i && i.startsWith(`#`)
      ? V(i)
      : i;
}
var Kr = `dYYkud-Jf3s-`,
  qr = `zZo1XshRYmQ-`,
  Jr = `RfHJSn8AdQE-`,
  Yr = `D8GFuSKNhX0-`,
  Xr = `MtB8CokK-OQ-`,
  Zr = `woc2JepJIek-`;
function Qr(e, t) {
  return (
    z.GetWithFallback(e.localized_label, t) ||
    (e.default_label === `#Sale_default_label` ? `` : V(e.default_label))
  );
}
function $r(e) {
  if (N(e.section_type))
    switch (M(e)) {
      case `deck_topplayed`:
        return L.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return e.label_link;
}
function ei(e) {
  let t,
    n,
    r = !1;
  return (
    e.label_link_style === `button`
      ? ((t = V(`#Sale_SectionLink_BrowseAll`)), (r = !0))
      : e.label_link_style === `browseall`
        ? ((t = V(`#Sale_SectionLink_BrowseAll`)),
          (n = B(Jr, `SaleSectionLabelLinkButton`)))
        : M(e) === `deck_topplayed` &&
          ((t = V(`#EventBrowse_MoreEventsBtn`)),
          (n = B(Oe, `SaleSectionLabelLinkButton`))),
    { strLinkButtonLabel: t, strLinkButtonClasses: n, bSmallButton: r }
  );
}
function ti(e) {
  let { event: t, elTitle: n, language: r } = e,
    i = fe(),
    a = Pe(t, i ? `product_mobile_banner` : `product_banner`, r);
  return (0, W.jsxs)(`div`, {
    className: Te,
    children: [
      (0, W.jsx)(`div`, { className: Ce, children: n }),
      (0, W.jsx)(`img`, { src: a, alt: n }),
    ],
  });
}
var ni = i((e) => {
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
    f = gr(),
    p = Ge(),
    m = d !== void 0,
    { data: g } = zr(m ? void 0 : _i(t)),
    _ = (m ? d : g) ?? void 0,
    v = e.link || $r(t) || Ve(_);
  if (
    (U.useEffect(() => {
      l?.(v);
    }, [v, l]),
    t.section_type == `title_image` && t.title_image_selected === `image`)
  )
    return null;
  let b = a || Ur(t, n, r, n.clanSteamID.GetAccountID(), p.eLocation, !1, u, _);
  if (!b) return null;
  let x = o || Gr(t, n, r, u),
    S = (0, W.jsx)(`div`, {
      className: B(Ee, `SaleSectionHeader`),
      style: ri(t, n, r),
      children: _?.BHasSomeImage(`product_banner`)
        ? (0, W.jsx)(ti, { ...e, event: _, elTitle: b })
        : b,
    }),
    C = (0, W.jsx)(`div`, {
      className: B(Ee, Se, `SaleSectionSubtitle`),
      style: ii(t, n, r),
      children: x,
    }),
    w = null;
  if ((v?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: e,
      strLinkButtonClasses: n,
      bSmallButton: r,
    } = ei(t);
    e &&
      (w =
        f && c
          ? (0, W.jsx)(Be, { label: e, shown: !!s })
          : r
            ? (0, W.jsx)(`div`, {
                className: B(h, Yr),
                children: (0, W.jsx)(y, {
                  url: v,
                  children: (0, W.jsx)(Xn, { children: e }),
                }),
              })
            : (0, W.jsx)(y, { url: v, className: n, children: e })),
      (S = (0, W.jsx)(y, { url: v, bFocusable: !w, children: S }));
  }
  return (0, W.jsxs)(`div`, {
    className: B(
      Kr,
      `SaleSectionLabelCtn`,
      _?.BHasSomeImage(`product_banner`) ? Xr : ``,
    ),
    children: [
      (0, W.jsxs)(`div`, { className: Zr, children: [S, !!x && C] }),
      (0, W.jsxs)(`div`, {
        className: qr,
        children: [
          !!i &&
            (0, W.jsx)(Ut, {
              className: `pL8IDIWBDg8-`,
              toolTipContent: V(`#Sale_HiddenItem_Tooltip`),
              children: (0, W.jsx)(`a`, {
                href: L.STORE_BASE_URL + `account/preferences`,
                children: St(
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
function ri(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? ai(t.jsondata.sale_font, n) : void 0,
    fontWeight: t.jsondata.sale_font_weight,
    fontSize: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
  };
}
function ii(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? ai(t.jsondata.sale_font, n) : void 0,
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
function ai(e, t) {
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
function oi(e, t, n, r, i) {
  let a = Ur(t, r, n, r.clanSteamID.GetAccountID(), e);
  if (a) return a;
  let o = V(`#Sale_Section_Header`, i + 1),
    s = `#Sale_Section_Type_` + (t?.section_type || `unknowntype`),
    c = V(s);
  if (c !== s) return `${o} (${c})`;
}
var si = U.createContext(void 0);
function ci() {
  return U.useContext(si);
}
function li(e, t, n, r) {
  if (r === void 0 || n.length <= 1 || !le(e, t, void 0)) return n;
  let i = qt(r + (t.unique_id ?? 0));
  return Tt([...n], t.random_order_top_x ?? 0, i);
}
function ui(e, t, n, r) {
  if (t.length <= n) return t;
  if (r === void 0) return t.slice(0, n);
  let i = qt(r + (e.unique_id ?? 0));
  return Tt([...t], 0, i).slice(0, n);
}
async function di(e, t) {
  let n = Gn(H.STORE_BASE_URL, t, fn.country_code);
  return ((await (await fetch(n)).json()).rgRecommendedApps ?? []).map(Number);
}
function fi(e, t) {
  return {
    queryKey: pi(t),
    queryFn: async () => (t ? di(e, t) : []),
    staleTime: 6e5,
  };
}
function pi(e) {
  return [`AccountRecommendedApps`, e ?? 0];
}
var mi = 100;
function hi(e, t, n, r, i = 1) {
  return {
    queryKey: [`AccountRecommendedAppsOnSale`, r ?? 0, n.cacheScope ?? ``, i],
    queryFn: async () => {
      if (!r) return [];
      let a = (await e.fetchQuery(fi(t, r))).slice(0, mi),
        o = await Promise.all(a.map((t) => e.fetchQuery(vn(n, { appid: t }))));
      return a.filter(
        (e, t) => (o[t]?.best_purchase_option?.discount_pct ?? 0) >= i,
      );
    },
    staleTime: 6e5,
  };
}
function G(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function gi(e) {
  return G(e).map((t) => ({
    ...e,
    sale_page_cross_promo_sales: [t],
    capsules: t.capsules ?? [],
  }));
}
function _i(e) {
  return G(e)[0]?.event_gid || void 0;
}
function vi(e) {
  return G(e).flatMap((e) => e.event_gid || []);
}
function yi(e) {
  return G(e)[0]?.featured_app_tagid || void 0;
}
function bi(e) {
  let t = G(e);
  return t.length > 0 && t.every((e) => (e.capsules?.length ?? 0) > 0);
}
function xi(e, t) {
  let n = G(e)[0];
  return !n?.event_gid || (!n.featured_app_tagid && !n.capsules?.length)
    ? `setup`
    : !t || !t.BIsVisibleEvent()
      ? `missing`
      : null;
}
function Si(e, t) {
  return e
    ? V(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : V(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function Ci(e) {
  switch (e) {
    case `logo_left`:
    case `logo_top`:
    case `event_capsule`:
      return 3;
    default:
      return;
  }
}
function wi(e) {
  return e.type !== `sub` && e.type !== `bundle`;
}
function Ti(e, t, n, r) {
  let i = [];
  for (let a of e)
    if ((!t || t.has(a)) && !n(a) && (i.push(a), i.length >= r)) break;
  return i;
}
function Ei(e, t, n, r = new Set()) {
  for (let t of e.GetSaleSections())
    if (!(!N(t.section_type) || (n && !n.BIncludeSection(t))))
      for (let e of t.capsules) wi(e) && r.add(e.id);
  for (let e of t ?? []) {
    let t = e.capsule;
    wi(t) && (!n || n.BIncludeLinkedCapsule(t)) && r.add(t.id);
  }
  return r;
}
function Di(e, t, n) {
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
var Oi = 4;
function ki(e) {
  return e
    .GetSaleSections()
    .filter((e) => N(e.section_type) && M(e) === `personalized_carousel`);
}
function Ai(e) {
  return ki(e)[0];
}
function ji(e) {
  if (e.appid()) return { id: e.appid(), type: `game` };
  if (e.bundleid()) return { id: e.bundleid(), type: `bundle` };
  if (e.packageid()) return { id: e.packageid(), type: `sub` };
}
function Mi(e, t, n, r, i, a) {
  let o = ki(n),
    s = {
      rgSections: o.map((e) => ({
        eSort: e.smart_section_personalized_carousel_sort ?? 13,
        nMinItems: e.smart_section_personalized_carousel_min_items ?? Oi,
        bRandomize: !!e.smart_section_personalized_carousel_randomize,
        bIncludePackages: e.smart_section_include_packages,
        bIncludeBundles: e.smart_section_include_bundles,
        bIncludeDLC: e.smart_section_include_dlc,
        nMinDiscountPercent:
          e.smart_section_min_discount_percent === void 0 ? void 0 : wa(e),
      })),
      storePageFilter: Di(n, !!o[0]?.prioritize_discounts, r),
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
    queryFn: () => Ni(e, t, s, i),
    staleTime: 1 / 0,
  };
}
async function Ni(e, t, n, r) {
  if (!r || n.rgSections.length === 0) return [];
  let i = zn.Init(Qe);
  for (let e of n.rgSections) {
    let t = i.Body().add_sections();
    t.set_sort(e.eSort),
      t.set_min_items(e.nMinItems),
      t.set_randomize(e.bRandomize),
      t.set_include_packages(!!e.bIncludePackages),
      t.set_include_bundles(!!e.bIncludeBundles),
      t.set_include_dlc(e.bIncludeDLC),
      t.set_min_discount_percent(e.nMinDiscountPercent);
  }
  i.Body().set_context(sn(t)),
    i.Body().set_filters(Ln(n.storePageFilter, !1)),
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
        .set_filter_json(n.strTabStoreFilterJSON);
  let a = await Un.GetItemsByUserRecommendedTags(e, i);
  if (a.GetEResult() != 1)
    throw Error(`GetItemsByUserRecommendedTags failed: ${a.GetEResult()}`);
  return a
    .Body()
    .sections()
    .map((e) => ({
      strTagName: e.tag_name() ?? ``,
      rgCapsules: e.store_item_ids().flatMap((e) => {
        let t = ji(e);
        return t ? [t] : [];
      }),
    }));
}
function K(e, t) {
  let n = t
    .GetSaleSections()
    .filter((e) => N(e.section_type) && M(e) == `personalized_carousel`);
  if (n.length == 0) return { nNumSections: 0, nSectionIndex: -1 };
  let r = n.findIndex((t) => t.unique_id == e.unique_id);
  return { nNumSections: n.length, nSectionIndex: r };
}
function Pi(e) {
  return M(e) === `frame_compatibility` ? `frame` : `deck`;
}
function Fi(e, t) {
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
var Ii = [
    {
      nOptInTagID: 9,
      rgChildren: [
        { nTagID: $e },
        { nTagID: In },
        { nTagID: sr },
        { nTagID: mn },
        { nTagID: an },
        { nTagID: ln },
        { nTagID: Bt },
        { nTagID: Ft },
        { nTagID: zt },
      ],
    },
    {
      nOptInTagID: 19,
      rgChildren: [
        { nTagID: ft },
        { nTagID: Kt },
        { nTagID: $t },
        { nTagID: Et },
        { nTagID: kt },
        { nTagID: Fn },
        { nTagID: qn },
        { nTagID: ar },
        { nTagID: Nn },
      ],
    },
    {
      nOptInTagID: 21,
      rgChildren: [
        { nTagID: ft },
        { nTagID: fr },
        { nTagID: rr },
        { nTagID: Ct },
        { nTagID: it },
        { nTagID: Ot },
        { nTagID: Qt },
        { nTagID: ct },
      ],
    },
    {
      nOptInTagID: 122,
      rgChildren: [
        { nTagID: Et },
        { nTagID: mr },
        { nTagID: rn },
        { nTagID: Cn },
        { nTagID: It },
        { nTagID: an },
        { nTagID: Wn },
      ],
    },
    {
      nOptInTagID: 599,
      rgChildren: [
        { nTagID: Xe },
        { nTagID: Hn },
        { nTagID: Rt },
        { nTagID: Yn },
        { nTagID: rt },
        { nTagID: Nt },
        { nTagID: Ht },
        { nTagID: Vt },
        { nTagID: lt },
        { nTagID: Yt },
        { nTagID: Qt },
      ],
    },
    {
      nOptInTagID: 699,
      rgChildren: [
        { nTagID: $t },
        { nTagID: Dt },
        { nTagID: tt },
        { nTagID: yn },
        { nTagID: dr },
      ],
    },
    {
      nOptInTagID: 701,
      rgChildren: [
        { nTagID: $t },
        { nTagID: Nt },
        { nTagID: 599 },
        { nTagID: ir },
        { nTagID: $n },
        { nTagID: Mt },
        { nTagID: tn },
      ],
    },
    {
      nOptInTagID: gt,
      rgChildren: [
        { nTagID: ot },
        { nTagID: et },
        { nTagID: Xt },
        { nTagID: tt },
        { nTagID: Zn },
      ],
    },
    {
      nOptInTagID: R,
      rgChildren: [
        { nTagID: dn },
        { nTagID: st },
        { nTagID: _t },
        { nTagID: un },
        { nTagID: nt },
        { nTagID: Ot },
        { nTagID: Zn },
      ],
    },
    {
      nOptInTagID: Jt,
      rgChildren: [
        { eContentDescriptor: 3 },
        { nTagID: Hn },
        { nTagID: Wt },
        { nTagID: ur },
        { nTagID: pt },
        { nTagID: un },
        { nTagID: mt },
      ],
    },
  ],
  Li = [
    {
      nTagID: ut,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: bn },
      ],
    },
    {
      nTagID: pr,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: cn },
        { nTagID: _r },
      ],
    },
    {
      nTagID: vr,
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
      nTagID: nr,
      rgChildren: [
        { nTagID: Bn },
        { nTagID: 19 },
        { nTagID: wt },
        { nTagID: mt },
        { nTagID: Qt },
      ],
    },
    {
      nTagID: Vn,
      rgChildren: [
        { nTagID: R },
        { nTagID: or },
        { nTagID: 599 },
        { nTagID: 21 },
        { nTagID: Ot },
        { nTagID: jt },
        { nTagID: On },
        { nTagID: Nt },
      ],
    },
    {
      nTagID: un,
      rgChildren: [
        { nTagID: 21 },
        { nTagID: R },
        { nTagID: it },
        { nTagID: At },
        { nTagID: Kn },
      ],
    },
    {
      eContentDescriptor: 3,
      rgChildren: [
        { nTagID: Jt },
        { nTagID: Wt },
        { nTagID: R },
        { nTagID: Gt },
        { nTagID: Pt },
      ],
    },
  ],
  Ri = [
    {
      strOptInTag: `option_58733`,
      rgChildren: [
        { nTagID: on },
        { nTagID: yt },
        { nTagID: en },
        { nTagID: 128 },
        { nTagID: An },
      ],
    },
    {
      strOptInTag: `option_40066`,
      rgChildren: [
        { nTagID: on },
        { nTagID: yt },
        { nTagID: en },
        { nTagID: An },
      ],
    },
    { strAppType: `software` },
    { strFeature: `vr` },
    { strFeature: `mac` },
  ],
  zi = {
    linux: `#Platform_Linux`,
    mac: `#Platform_Mac`,
    vr: `#Platform_VR`,
    "vr only": `#Sale_Tabs_TagFilter_Feature_VROnly`,
    free: `#Sale_Tabs_TagFilter_Feature_Free`,
    discounted: `#Sale_Tabs_TagFilter_Feature_Discounted`,
  },
  Bi = [
    {
      strClass: `genre`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Genre`,
      rgNodes: Ii,
    },
    {
      strClass: `theme`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Theme`,
      rgNodes: Li,
    },
    {
      strClass: `feature`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Feature`,
      rgNodes: Ri,
    },
  ];
function Vi(e) {
  return e?.rgNodes
    ? e.rgNodes
    : (Bi.find((t) => t.strClass === e?.tag_class)?.rgNodes ?? []);
}
function Hi(e) {
  return e.nTagID
    ? String(e.nTagID)
    : e.nOptInTagID || e.strOptInTag
      ? `optin:` + Xi(e)
      : e.eContentDescriptor
        ? `descriptor:` + e.eContentDescriptor
        : e.strFeature
          ? `feature:` + e.strFeature
          : `apptype:` + e.strAppType;
}
function Ui(e) {
  if (e.strFeature) return zi[e.strFeature];
  if (e.strAppType) return `#AppTypeLabel_` + e.strAppType;
}
function Wi(e) {
  if (e)
    return e.strChildKey
      ? e.strParentKey + `,` + e.strChildKey
      : e.strParentKey;
}
var Gi = `tabtag`,
  Ki = `tabsubtag`;
function qi(e, t) {
  if (e) return { strParentKey: e, strChildKey: t || void 0 };
}
function Ji(e) {
  return { [Gi]: e?.strParentKey ?? null, [Ki]: e?.strChildKey ?? null };
}
function Yi(e, t, n) {
  if (!e) return;
  let r = q(Vi(t), e.strParentKey);
  if (!r || !n(r)) return;
  if (!e.strChildKey) return e;
  let i = q(r.rgChildren ?? [], e.strChildKey);
  return !i || !n(i) ? { strParentKey: e.strParentKey } : e;
}
function Xi(e) {
  return e.strOptInTag ?? String(e.nOptInTagID);
}
function Zi(e, t) {
  return e.nOptInTagID || e.strOptInTag
    ? (Qn(t, `Opt-in registration tag used on a sale without an opt-in`),
      {
        type: j.k_EStoreFilterClauseTypeOptInRegistrationTag,
        optin: t,
        value: Xi(e),
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
function q(e, t) {
  return e.find((e) => Hi(e) === t);
}
function Qi(e, t, n) {
  if (!e) return;
  let r = q(Vi(t), e.strParentKey);
  if (!r) return;
  if (!e.strChildKey) return Zi(r, n);
  let i = q(r.rgChildren ?? [], e.strChildKey);
  if (i)
    return {
      type: j.k_EStoreFilterClauseTypeAnd,
      rgSubexpressions: [Zi(r, n), Zi(i, n)],
    };
}
function $i() {
  let [e] = oa(`tab`),
    t = U.useCallback((e, t) => ca({ ...t, tab: String(e) }), []);
  return [ea(e), t];
}
function ea(e) {
  return e === null ? 0 : Number(e);
}
function J(e) {
  let [t] = $i();
  return ta(e, t);
}
function ta(e, t) {
  let n = na(e);
  return n.find((e) => e.unique_id === t) ?? n[0];
}
function na(e) {
  return (
    e.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter((e) => !e.hide) ?? []
  );
}
function ra(e, t, n, r) {
  if (!n || t.diable_tab_id_filtering) return;
  let i = e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name,
    a = Qi(r, n.tab_tag_filter, i),
    o =
      n.store_filter && a
        ? {
            type: j.k_EStoreFilterClauseTypeAnd,
            rgSubexpressions: [n.store_filter, a],
          }
        : (n.store_filter ?? a);
  if (o) return ia(e, t, n) ? o : void 0;
}
function ia(e, t, n) {
  let r = e.GetSaleSections(),
    i = r.findIndex((e) => e.section_type === `tabs`);
  return i < 0 || !r[i].tabs?.includes(n) ? !1 : r.indexOf(t) > i;
}
function aa(e, t) {
  let n = J(e);
  return !n || n === na(e)[0] || t.diable_tab_id_filtering || !ia(e, t, n)
    ? ``
    : `tabid${n.unique_id}`;
}
function oa(e) {
  let t = U.useSyncExternalStore(wn, sa, sa);
  return [
    new URLSearchParams(t).get(e),
    U.useCallback((t) => ca({ [e]: t ?? null }), [e]),
  ];
}
function sa() {
  return location.search;
}
function ca(e) {
  let t = new URL(window.location.href);
  for (let [n, r] of Object.entries(e))
    r === null ? t.searchParams.delete(n) : t.searchParams.set(n, r);
  t.href !== window.location.href && _n((e) => e, t);
}
function la(e) {
  let t = J(e),
    n = ua(),
    [r] = oa(Gi),
    [i] = oa(Ki),
    a = U.useCallback((e, t) => ca({ ...t, ...Ji(e) }), []);
  return [Yi(qi(r, i), t?.tab_tag_filter, n), a];
}
function ua() {
  let { data: e } = gn();
  return U.useMemo(() => da(e), [e]);
}
function da(e) {
  let t = !!I.logged_in && L.EREALM !== pn.k_ESteamRealmChina && e !== void 0,
    n = new Set(Mn(e));
  return (e) => !e.eContentDescriptor || (t && !n.has(e.eContentDescriptor));
}
function fa(e, t) {
  let n = J(e),
    [r] = la(e);
  return ra(e, t, n, r);
}
var pa = 50;
function ma(e, t, n) {
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
          ? xn(r.item_type, r.type)
          : `game`) === e.value
      );
    case j.k_EStoreFilterClauseTypeLanguage: {
      let n = Pn(String(e.value));
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
      let r = e.rgSubexpressions?.some((e) => ma(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case j.k_EStoreFilterClauseTypeAnd: {
      let r = e.rgSubexpressions?.every((e) => ma(e, t, n)) ?? !1;
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
function ha(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingApps`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n,
    ],
    queryFn: () => _a(e, t, n, (e) => ({ appid: e }), r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
function ga(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingItems`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n?.map(bt),
    ],
    queryFn: () => _a(e, t, n, (e) => e, r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
async function _a(e, t, n, r, i, a) {
  let o = va(i, {
      bTags: !1,
      bPlatforms: !1,
      bLanguages: !1,
      bOptInRegistrationTags: !1,
    }),
    s = Math.floor(Date.now() / 1e3),
    c = [];
  for (let l = 0; l < n.length && c.length < a; l += pa) {
    let u = n.slice(l, l + pa),
      d = await Promise.all(u.map((n) => ya(e, t, r(n), o)));
    u.forEach((e, t) => {
      c.length < a && ma(i, d[t], s) && c.push(e);
    });
  }
  return c;
}
function va(e, t) {
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
      e.rgSubexpressions?.forEach((e) => va(e, t));
  }
  return t;
}
async function ya(e, t, n, r) {
  let [i, a, o, s, c] = await Promise.all([
    e.fetchQuery(vn(t, n)).catch(() => void 0),
    r.bTags ? e.fetchQuery(hn(t, n)).catch(() => null) : null,
    r.bPlatforms ? e.fetchQuery(hr(t, n)).catch(() => null) : null,
    r.bLanguages ? e.fetchQuery(lr(t, n)).catch(() => null) : null,
    r.bOptInRegistrationTags ? e.fetchQuery(Rn(t, n)).catch(() => null) : null,
  ]);
  return {
    defaultInfo: i,
    tags: a,
    platforms: o,
    supportedLanguages: s,
    optInRegistrationTags: c,
  };
}
var ba = {
    popularity: { eType: `game`, bDropsOwned: !1 },
    wishlist: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender: { eType: `game`, bDropsOwned: !0 },
    wishlist_onsale: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender_onsale: { eType: `game`, bDropsOwned: !0 },
    dlc_onsale: { eType: `dlc`, bDropsOwned: !0 },
    dlc_music_onsale: { eType: `music`, bDropsOwned: !0 },
  },
  xa = 24,
  Sa = 100,
  Ca = 500;
function wa(e) {
  return Math.max(1, e.smart_section_min_discount_percent ?? 1);
}
function Ta(e) {
  return Y(e) && ba[e].bDropsOwned;
}
function Y(e) {
  return e !== void 0 && e in ba;
}
function Ea(e, t, n, r) {
  let i = M(n),
    a =
      i === `tag`
        ? { tagid: n.smart_section_tag }
        : i === `top_n`
          ? { top_n_sellers: Ca }
          : {};
  return (
    (a.min_discount_percent = wa(n)),
    (a.include_packages = n.smart_section_include_packages),
    (a.include_bundles = n.smart_section_include_bundles),
    (a.include_dlc = n.smart_section_include_dlc),
    r && (a.store_filter_json = JSON.stringify(r)),
    yr(
      e,
      t,
      a,
      i === `tag` && n.random_from_entire_set
        ? Sa
        : n.smart_section_max_apps || xa,
    )
  );
}
function Da(e, t, n, r) {
  return br(
    e,
    t,
    {
      min_discount_percent: n.smart_section_min_discount_percent || void 0,
      store_filter_json: r ? JSON.stringify(r) : void 0,
    },
    Ma(n),
  );
}
function X(e, t) {
  if (bi(t)) return `manual`;
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
function Oa(e, t, n) {
  let r = e.GetDayIndexFromEventStart(n);
  return t.capsules.filter(
    (e) => e.visibility_index === void 0 || e.visibility_index === r,
  );
}
function ka(e, t, n) {
  return Oa(e, t, n).flatMap((e) => {
    let t = he(e);
    return t ? [t] : [];
  });
}
function Aa(e, t, n, r, i) {
  let a = Ma(t),
    o = X(e, t);
  if (Y(o)) {
    let n = ba[o].eType;
    return (r.tabStoreFilter ? r.tabFilteredAppIDs : ja(e, t, r, a))?.map(
      (e) => ({ id: e, type: n }),
    );
  }
  switch (o) {
    case `manual`: {
      let i = Oa(e, t, n);
      if (!r.tabStoreFilter) return i;
      if (!r.tabFilteredItems) return;
      let a = new Set(r.tabFilteredItems.map(bt));
      return i.filter((e) => {
        let t = he(e);
        return t !== void 0 && a.has(bt(t));
      });
    }
    case `tag`:
    case `top_n`:
    case `all_discounted`: {
      if (!r.discountedItems) return;
      let e = r.discountedItems.map(ge).filter((e) => !!e);
      return o === `tag` && t.random_from_entire_set
        ? ui(t, e, a, i)
        : e.slice(0, a);
    }
    case `topwishlisted`:
      return r.topWishlistedItems
        ?.map(ge)
        .filter((e) => !!e)
        .slice(0, a);
    case `personalized_carousel`:
      return Na(e, t, r.personalizedCarousels)?.rgCapsules.slice(0, a);
    default:
      return;
  }
}
function ja(e, t, n, r) {
  let i = X(e, t);
  if (Y(i))
    switch (i) {
      case `popularity`:
        return n.compatAppList && Fi(t, n.compatAppList).slice(0, r);
      case `wishlist`:
        return Z(n.wishlistAppIDs, Ei(e, e.GetTaggedItems()), n.ownedAppIDs, r);
      case `interactive_recommender`:
        return Z(
          n.recommendedAppIDs,
          Ei(e, e.GetTaggedItems()),
          n.ownedAppIDs,
          r,
        );
      case `wishlist_onsale`:
        return Z(n.wishlistOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `interactive_recommender_onsale`:
        return Z(n.recommendedOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_onsale`:
        return Z(n.ownedDLCOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_music_onsale`:
        return Z(n.ownedSoundtracksOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      default:
        xt(i, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
}
function Ma(e) {
  return e.smart_section_max_apps || xa;
}
function Na(e, t, n) {
  if (n) return n[K(t, e).nSectionIndex] ?? null;
}
function Pa(e, t) {
  let n = X(e, t) === `personalized_carousel`;
  return Fa(e, Ai(e) ?? t, n);
}
function Fa(e, t, r) {
  let i = Dn(),
    a = n(),
    { storeBrowseContext: s } = tr(),
    c = J(e),
    [l] = la(e),
    u = t ? ra(e, t, c, l) : void 0,
    { data: d, isSuccess: f } = o({
      ...O(e.clanSteamID.GetAccountID(), a),
      enabled: r,
    }),
    { data: p } = o({
      ...Mi(i, s, e, Le(e, d), I.accountid, u),
      enabled: r && f,
    });
  return p;
}
function Z(e, t, n, r) {
  if (e && n) return Ti(e, t, (e) => n.has(e), r);
}
function Ia(e, t, r) {
  let i = !r,
    a = xe(),
    s = ci(),
    c = X(e, t),
    l = Dn(),
    u = n(),
    { storeBrowseContext: d, dataLoader: f } = tr(),
    p = fa(e, t),
    m = wa(t),
    { data: h } = o({ ...Or(Pi(t)), enabled: i && c === `popularity` }),
    { data: g } = o({ ...ee(l, I.accountid), enabled: i && c === `wishlist` }),
    { data: _ } = o({
      ...fi(l, I.accountid),
      enabled: i && c === `interactive_recommender`,
    }),
    { data: v } = o({
      ...Ze(l, d, I.accountid, m),
      enabled: i && c === `wishlist_onsale`,
    }),
    { data: y } = o({
      ...hi(u, l, f, I.accountid, m),
      enabled: i && c === `interactive_recommender_onsale`,
    }),
    { data: b } = o({
      ...Cr(u, l, d, I.accountid, `dlc`, m),
      enabled: i && c === `dlc_onsale`,
    }),
    { data: x } = o({
      ...Cr(u, l, d, I.accountid, `music`, m),
      enabled: i && c === `dlc_music_onsale`,
    }),
    { data: S } = o({
      ...Ea(l, d, t, p),
      enabled: i && (c === `tag` || c === `top_n` || c === `all_discounted`),
    }),
    { data: C } = o({ ...Da(l, d, t, p), enabled: i && c === `topwishlisted` }),
    w = Pa(e, t),
    { data: te } = o({ ...T(l, I.accountid), enabled: i && Ta(c) }),
    E = (0, U.useMemo)(
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
        ownedAppIDs: te,
        tabStoreFilter: p,
      }),
      [h, g, _, v, y, b, x, S, C, w, te, p],
    ),
    D = !!p && Y(c),
    ne = (0, U.useMemo)(() => (D ? ja(e, t, E, 1 / 0) : void 0), [D, e, t, E]),
    { data: re } = o({
      ...ha(u, f, ne, p, Ma(t)),
      enabled: i && D && ne !== void 0,
    }),
    O = !!p && c === `manual`,
    k = (0, U.useMemo)(() => (O ? ka(e, t, a) : void 0), [O, e, t, a]),
    { data: A } = o({
      ...ga(u, f, k, p, k?.length ?? 0),
      enabled: i && O && k !== void 0,
    });
  return (0, U.useMemo)(() => {
    let n = Aa(
      e,
      t,
      a,
      { ...E, tabFilteredAppIDs: re, tabFilteredItems: A },
      s,
    );
    return n && li(e, t, n, s);
  }, [e, t, a, E, re, A, s]);
}
function La(e) {
  return Ia(e.event, e.section), null;
}
function Ra(e, t) {
  return e == null || e == null || !Ha(t)
    ? !0
    : t.reverse_show_on_tabs
      ? !(!t.show_on_tabs || t.show_on_tabs.includes(e))
      : !!(t.show_on_tabs && t.show_on_tabs.includes(e));
}
function za(e) {
  return Va(e, `[Feature] Adult Only Sexual Content`);
}
function Ba(e) {
  return Va(e, `[Feature] Coming Soon`);
}
function Va(e, t) {
  if (e?.sale_tag_filter?.clauses?.length == 1) {
    let n = e.sale_tag_filter.clauses[0];
    return (
      n.type === `Must have` && n.or_tags.length === 1 && n.or_tags[0] === t
    );
  }
  return !1;
}
function Ha(e) {
  return !!(
    e.show_on_tabs &&
    e.show_on_tabs.length > 0 &&
    !e.diable_tab_id_filtering
  );
}
function Ua(e, t) {
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
  if (k(e)) return 0;
  let n = A(e);
  return n <= 0 ? 0 : n + t;
}
function qa(e, t, n, r, i) {
  let a =
    `section_` +
    r +
    `_` +
    e.GID +
    (i || 0) +
    ye(t.unique_id ? t.unique_id.toString() : JSON.stringify(t)).toString();
  return (
    n &&
      e.rtime32_last_local_modification &&
      (a += `_` + e.rtime32_last_local_modification),
    a
  );
}
function Ja(e) {
  let { id: t, type: n } = e,
    r = me({ id: t, type: n }),
    { data: i } = jn(r);
  return (0, W.jsx)(`div`, {
    className: E,
    children: (0, W.jsx)(F, {
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
    l = me({ id: t, type: n }),
    { data: u } = jn(l),
    { data: d } = Zt(l),
    [f, p] = D(o, s),
    m = u?.item_type == 0;
  return (0, W.jsx)(ne, {
    appid: m ? u.id : void 0,
    children: (0, W.jsxs)(kn, {
      "flow-children": `grid`,
      navEntryPreferPosition: Jn.PREFERRED_CHILD,
      autoFocus: c,
      navKey: `purchase_only_` + u?.id,
      children: [
        `	`,
        (0, W.jsxs)(`div`, {
          className: Xa,
          children: [
            (0, W.jsx)(`div`, {
              className: void 0,
              children: (0, W.jsx)(`div`, { className: Ya, children: u?.name }),
            }),
            (0, W.jsxs)(`div`, {
              className: Qa,
              children: [
                !a &&
                  u?.type != 10 &&
                  (0, W.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, W.jsx)(w, { id: l }),
                      !!(f && u?.item_type == 0 && d) &&
                        (0, W.jsx)(En, {
                          eDisplay: p,
                          storeItemPlatform: d,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, W.jsx)(_e, {
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
    a = gr();
  if (t === `purchaseonlydisplay`) return (0, W.jsx)($a, { ...r });
  if (a) return (0, W.jsx)(F, { ...r });
  if (n && !pe()) return (0, W.jsx)(Ja, { ...r });
  if (i == `bundle` || i == `sub`) return (0, W.jsx)(F, { ...r });
  if (pe() && (t == `library` || t == `animated`))
    return (0, W.jsx)(F, { ...e, bShowReviewSummary: !0 });
  switch (t) {
    case `library`:
      return (0, W.jsx)(be, { ...r });
    case `animated`:
      return (0, W.jsx)(be, { ...r });
    default:
      return (0, W.jsx)(F, { ...r, bShowReviewSummary: !0 });
  }
}
function to(e, t) {
  return !(e === `purchaseonlydisplay` || t || pe());
}
var no = `h4e3CZE5mfI-`,
  ro = `lJc7R9Bil2I-`,
  io = `IS179RoYT1Q-`,
  ao = `SZeormjSwYo-`,
  oo = 240;
function so(e, t) {
  return Q(e, t).every((e) => e === 1);
}
function co(e) {
  let t = !1,
    n = M(e);
  return (
    n && (t = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(n)),
    !!(t || e.show_parent_app)
  );
}
function lo(e, t) {
  if (k(e)) return 0;
  let n = A(e);
  return n <= 0 ? 0 : n + t;
}
function Q(e, t) {
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
            return dt(t, 1, r == `tall` ? 4 : 3);
          })
        : e.capsules_per_row_array
      : e.adaptive_capsules_per_row
        ? t
          ? [2, 3]
          : [2, 3, 4, 3]
        : [dt(e.capsules_per_row || 1, 1, t ? 3 : 5) || 1];
}
function uo(e, t, n) {
  let r = Q(e, n),
    i = k(e) ? oe(e) : lo(e, t),
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
  return (0, W.jsx)(
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
function mo(e, t) {
  let {
    capsuleStyle: n,
    index: r,
    section: i,
    saleEvent: a,
    rowElements: o,
  } = t;
  if (u(e)) return null;
  let s = co(i),
    c = a.BUseSubscriptionLayout(),
    l = k(i) && !t.bIsSingleCapsule,
    d = Ua(i, t.activeTab),
    f = i.unique_id + `_` + r + `_` + e.type + `_` + e.id;
  if (n !== `fullrow`) {
    let a = B(l && `FolDBzXMW2I-`);
    return (0, W.jsx)(
      `div`,
      {
        className: a,
        children: (0, W.jsx)(
          Ke,
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
    `overrideNavigation` in e &&
      (a = (t) => (
        e.overrideNavigation(t),
        t && (t.preventDefault(), t.stopPropagation()),
        !1
      )),
      pe() && (n == `library` || n == `animated`) && (n = `bordered`);
    let o = B({
      [x]: !l && n == `bordered`,
      [m]: l && n == `bordered`,
      [_]: l && n == `animated`,
      [qe + r]: r === 0,
    });
    return (0, W.jsx)(
      `div`,
      {
        className: o,
        children: (0, W.jsx)(eo, {
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
function ho(e, t, n, r, i, a, o, s) {
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
        : n.map((e) => ({ Render: (t) => po(e, t) }))
      : ce(e.section_type)
        ? t
          ? t.filter((e) => !u(e)).map((e) => ({ Render: (t) => mo(e, t) }))
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
function $(e, t) {
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
    y = (0, U.createElement)(
      Me,
      {
        ...t,
        key: g,
        hideArrows: !d,
        visibleElements: T,
        className: B({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !l,
          ItemCount_4: x[0] == 4,
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
      v(n, 0, n.length, T, $(0, C)),
    );
  else {
    let e = o(f),
      r = !0;
    if (p) (e = a), (r = w);
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
      let a = $(0, C);
      for (let t = 0; (e == 0 || t < e) && l < n.length; t++) {
        (t == 0 || d) && (a = $(t, C));
        let e = go(a, u),
          r = Math.min(x[t % x.length], e),
          i = Math.min(r, n.length - l);
        if (i < r && t === 0) {
          if (h) return { content: null, bAdditionalContent: !1 };
          r = Math.max(a === `tall` ? 3 : 2, i);
        }
        s.push(
          (0, W.jsx)(
            yo,
            { nMaxItems: r, nItems: i, children: v(n, l, l + i, r, a) },
            `Row_` + t,
          ),
        ),
          (l += i);
      }
      if (r || (l >= n.length && i.length === 0)) break;
      let o = i.length || void 0;
      i.push(
        (0, W.jsx)(
          `div`,
          { className: S, children: (0, W.jsx)(Tn, { depth: o, children: s }) },
          `Page_${t}`,
        ),
      ),
        (s = []);
    }
    i.length == 0
      ? ((b = n.length > l),
        (y = (0, W.jsx)(kn, {
          "flow-children": `grid`,
          focusable: !1,
          children: s,
        })))
      : (y = (0, U.createElement)(
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
  let o = ho(
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
  let s = Q(n, i),
    c = fo(n, i),
    l = oe(n),
    u = (e) => lo(n, e),
    d = { section: n, saleEvent: t, language: r, activeTab: a },
    f = { ...e, strCarouselKey: Wi(a?.GetTagSelection()) };
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
    (a = []), (o = []);
    for (let t = 0; t < e; t++)
      a.push((0, W.jsx)(`div`, {}, `front_` + t)),
        o.push((0, W.jsx)(`div`, {}, `back_` + t));
  }
  return (0, W.jsxs)(`div`, {
    className: B(
      we,
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
    i = $(0, fo(t, r)),
    a = Math.min(Q(t, r)[0], go(i, n)),
    o = B(
      ao,
      i === `tall` && `_9Xrgw1NkKg8-`,
      i === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, W.jsx)(yo, {
    nMaxItems: a,
    nItems: a,
    children: Array.from({ length: a }, (e, t) =>
      (0, W.jsx)(`div`, { className: o }, t),
    ),
  });
}
function xo(e) {
  let { event: t, section: n, rgSlides: r, onSlide: i } = e,
    a = gr(),
    { bScreenIsWide: o } = je(n.section_type);
  return r.length === 0
    ? null
    : r.length === 1
      ? (0, W.jsx)(W.Fragment, { children: r[0] })
      : !o || a
        ? (0, W.jsx)(`div`, {
            className: Je,
            children: r.map((e, t) =>
              (0, W.jsx)(So, { nSlide: t, onSlide: i, children: e }, t),
            ),
          })
        : (0, W.jsx)(`div`, {
            className: B(p, Ye),
            children: (0, W.jsx)(Me, {
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
    i = Lt({ onEnter: () => n?.(t) });
  return (0, W.jsx)(`div`, { ref: i, children: r });
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
    [u, d] = U.useState(void 0),
    { bShowSeeMoreHint: m, panelProps: h } = ze(u);
  return (0, W.jsxs)(Re, {
    placeholderHeight: a,
    className: B({
      [p]: !0,
      [b]: k(n),
      [v]: n.disable_background,
      [Ne]: !0,
      SaleSectionForCustomCSS: !0,
      [n.sale_section_classname || ``]: !!n.sale_section_classname,
      [void 0]: n.background_repeat == `coverBlur`,
    }),
    rootMargin: Ae,
    holdGamepadFocus: i,
    ...h,
    children: [
      (0, W.jsx)(`div`, {
        className: B(ke, n.background_repeat == `coverBlur` ? De : ``),
        style: jr(n, t, i),
      }),
      (0, W.jsxs)(`div`, {
        className: f,
        children: [
          (0, W.jsx)(ni, {
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
          (0, W.jsx)(wo, { event: t, section: n }),
        ],
      }),
      l,
      (0, W.jsx)(C, { section: n }),
    ],
  });
}
function wo(e) {
  let { event: t, section: n } = e,
    r = U.useMemo(
      () =>
        n.section_type == `events`
          ? nn(`ch_newshub`, `application_config`)
          : void 0,
      [n.section_type],
    );
  if (n.hide_view_all_events_link) return null;
  let i = null;
  if (n.section_type == `events`) {
    if (!r || !t.BUsesContentHubForItemSource() || !P(n)) return null;
    i = H.STORE_BASE_URL + `news/` + r;
  } else
    n.section_type == `sale_events`
      ? (i = H.STORE_BASE_URL + `news/collection/sales/`)
      : n.section_type == `calendar` &&
        (i = H.STORE_BASE_URL + `personalcalendar`);
  if (!i) return null;
  let a = i;
  return (0, W.jsx)(`div`, {
    className: h,
    children: (0, W.jsx)(Xn, {
      onClick: (e) => at(e, a),
      children: V(`#EventBrowse_AllEventsBtn`),
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
    a = Ka(n, i.nShowAdditionalRows),
    o = Wa(Q(n, r), a, i.capsules?.length ?? 0);
  return o < a && P(n) && (i.nShowAdditionalRows -= a - o), i;
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
    s = Wa(i, n, r) < n;
  return (0, W.jsx)(`div`, {
    className: B(Eo, `ShowContentsContainer`),
    children: a
      ? (0, W.jsx)(ve, { size: `small`, string: V(`#Loading`) })
      : !s &&
        t.cap_section_content &&
        (0, W.jsx)(er, {
          onClick: o,
          className: B(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: V(`#Sale_ShowMore`),
        }),
  });
}
function Oo(e) {
  return Math.max(Ka(e, 0), 4);
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
            depth: K(e, t).nSectionIndex,
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
    r = ht(),
    [i, a, o] = s(() => [
      z.GetWithFallback(n.localized_link_capsule, t),
      r ? n.sc_url : n.url,
      n.materialized_link_capsule,
    ]),
    c = i ? l.GenerateURLFromHashAndExt(e.clanAccountID, i) : void 0;
  return (0, W.jsx)(y, {
    url: a,
    className: e.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!n.open_in_place,
    children: (0, W.jsxs)(`div`, {
      className: B(te, e.link.url ? re : ``),
      children: [
        !!c && (0, W.jsx)(de, { className: `_-4JZsb8K2FY-`, src: c }),
        !!o &&
          (0, W.jsx)(`img`, { className: `_-4JZsb8K2FY-`, src: o, alt: a }),
      ],
    }),
  });
}
export {
  G as $,
  Qi as A,
  Fi as B,
  Ra as C,
  Pa as D,
  La as E,
  Ji as F,
  Ei as G,
  Ai as H,
  qi as I,
  vi as J,
  Ti as K,
  Yi as L,
  Vi as M,
  Hi as N,
  Ia as O,
  Ui as P,
  gi as Q,
  Ki as R,
  Ba as S,
  X as T,
  Mi as U,
  Pi as V,
  Di as W,
  xi as X,
  yi as Y,
  Ci as Z,
  eo as _,
  Co as a,
  Gr as at,
  Ka as b,
  uo as c,
  Ar as ct,
  vo as d,
  Or as dt,
  oi as et,
  bo as f,
  Tr as ft,
  to as g,
  ro as h,
  To as i,
  Ur as it,
  Wi as j,
  aa as k,
  Q as l,
  Mr as lt,
  no as m,
  Oo as n,
  ri as nt,
  xo as o,
  Rr as ot,
  _o as p,
  wr as pt,
  _i as q,
  Do as r,
  ni as rt,
  co as s,
  Ir as st,
  ko as t,
  Qr as tt,
  lo as u,
  jr as ut,
  Ga as v,
  Na as w,
  za as x,
  qa as y,
  Gi as z,
};
