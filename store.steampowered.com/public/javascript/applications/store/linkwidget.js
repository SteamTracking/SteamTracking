/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  ft as n,
  l as r,
  nt as i,
  st as a,
  u as o,
} from "./chunk~01cfc309bf.js";
import { t as s } from "./chunk~68b7e78d68.js";
import {
  Aa as c,
  B as l,
  K as u,
  L as d,
  R as f,
  Ut as p,
  V as m,
  Vt as h,
  W as g,
  Wi as _,
  Wt as v,
  X as y,
  ct as b,
  ga as x,
  i as S,
  mt as C,
  ot as w,
  r as T,
  z as E,
} from "./chunk~6b8ddcaac8.js";
import { r as D } from "./chunk~4c761eb6f4.js";
import { o as ee } from "./chunk~961c06e93e.js";
import {
  E as te,
  J as ne,
  L as O,
  U as re,
  d as ie,
  i as ae,
  o as oe,
  x as se,
} from "./chunk~3720b337f3.js";
import {
  A as k,
  D as ce,
  I as le,
  O as ue,
  c as de,
  j as A,
  l as fe,
  s as j,
  w as pe,
} from "./chunk~f57d770d64.js";
import { r as me } from "./chunk~5adf866415.js";
import { i as M } from "./chunk~2f085f1384.js";
import { n as he, t as N } from "./chunk~f4c928a27a.js";
import { t as ge } from "./chunk~eefd71512b.js";
import { i as _e } from "./chunk~e867464c75.js";
import { i as ve } from "./chunk~9871ee5432.js";
import { t as P } from "./chunk~4e9767668d.js";
import {
  D as ye,
  O as F,
  k as be,
  m as xe,
  n as Se,
  t as Ce,
} from "./chunk~2f8c67b4de.js";
import { o as we, r as Te } from "./chunk~d43c81a658.js";
import { p as Ee } from "./chunk~ceada343dc.js";
import { n as De } from "./chunk~593a6b8ddc.js";
import { t as Oe } from "./chunk~d5ffe2610e.js";
import { r as I } from "./chunk~21cdc464a1.js";
import { n as ke } from "./chunk~710e3cfd2f.js";
import { n as Ae, t as je } from "./chunk~ffe4581a06.js";
import { c as Me, i as Ne, l as Pe, o as Fe } from "./chunk~7b4b9eb713.js";
import { r as Ie } from "./chunk~331382b23f.js";
import { n as Le, r as Re } from "./chunk~3ea79bd96d.js";
import {
  $y as L,
  Er as ze,
  Jy as R,
  Kv as Be,
  Pv as Ve,
  Uy as z,
  Vb as He,
  Vr as Ue,
  Vy as We,
  Wb as B,
  _l as Ge,
  cx as V,
  ex as Ke,
  gr as qe,
  jc as Je,
  jx as Ye,
  nl as Xe,
  pt as Ze,
  qb as H,
  rn as Qe,
  sl as $e,
  wc as U,
  xr as et,
  yS as tt,
} from "./main.js";
var W = e(t()),
  G = n(),
  nt = e(i(), 1);
function rt(e, t, n) {
  return `linear-gradient(${n ?? 0}deg, ${e || `transparent`} 0%, ${t || `transparent`} 100%)`;
}
function K(e) {
  return rt(
    e.background_gradient_bottom,
    e.background_gradient_top,
    e.background_gradient_angle,
  );
}
function it(e, t, n) {
  if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
  let r = ``;
  if (e.background_image) {
    let n = D.GenerateURLFromHashAndExt(t.clanSteamID, e.background_image);
    r += `,url(${n})`;
  }
  return e.background_gradient_bottom ||
    e.background_gradient_top ||
    r.length > 0 ||
    e.background_repeat ||
    e.border_color ||
    e.border_width
    ? {
        backgroundImage: K(e) + r,
        backgroundRepeat: e.background_repeat,
        backgroundSize: e.background_repeat == `coverBlur` ? `cover` : ``,
        outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
        outlineColor: e.border_color,
        outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
      }
    : {};
}
function at(e, t) {
  return e
    ? e.disable_background && !t
      ? { paddingLeft: 0, paddingRight: 0 }
      : e.background_gradient_bottom ||
          e.background_gradient_top ||
          e.background_repeat ||
          e.border_color ||
          e.border_width
        ? {
            background: K(e),
            backgroundRepeat: e.background_repeat,
            outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
            outlineColor: e.border_color,
            outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
          }
        : {}
    : {};
}
function ot(e) {
  return e?.clan_steamid ? De(new We(e.clan_steamid), e) : null;
}
var st = 100;
async function ct(e, t) {
  let n = new URLSearchParams();
  (n.set(`event_gids`, [...new Set(e)].sort().join(`,`)),
    n.set(`lang_list`, Oe(t)),
    n.set(`origin`, location.origin));
  let r =
      H.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + n.toString(),
    i = await fetch(r);
  if (i.status === 204) return e.map(() => null);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json(),
    o = new Map((a.events ?? []).map((e) => [e.gid, e]));
  return e.map((e) => o.get(e) ?? null);
}
function lt(e) {
  return s(
    [`PublicPartnerEventBrowser`, e],
    () => new nt.default((t) => ct(t, e), { maxBatchSize: st, cache: !1 }),
  );
}
function ut(e, t) {
  return [`PublicPartnerEvent`, e, t];
}
function dt(e, t, n) {
  return {
    queryKey: ut(e, t),
    queryFn: async () => (n ? n.load(e) : (await ct([e], t))[0]),
    select: ot,
    enabled: !!e,
    staleTime: 6e5,
  };
}
function ft(e) {
  let t = tt(H.LANGUAGE),
    n = lt(t);
  return a(dt(e, t, n));
}
function pt(e, t, n) {
  return ie(t, e, n)?.strTagName || void 0;
}
function mt(e, t, n, r) {
  let i = n == 1 || n == 3 || n == 4,
    a = () => {
      let t = Fe(e.smart_section_creator_listid);
      return t
        ? i
          ? R(`#Sale_CreatorList_Section_Editor_title`, t)
          : t
        : null;
    };
  if (e.section_type === `items`)
    switch (A(e)) {
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
          let { nSectionIndex: n, nNumSections: r } = O(e, t);
          return R(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        let o = pt(e, t, r);
        if (!o && n == 2) {
          let { nSectionIndex: n, nNumSections: r } = O(e, t);
          return R(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        return o ? R(`#Sale_PersonalizedCarousel_Section_title`, o) : null;
      case `creator_list`:
        return a();
      case `discount_reason`:
        return se(e) ?? null;
    }
  else if (e.section_type === `tabs`) return ``;
  else if (e.section_type === `curator`) {
    if (e.curator_clan_id) {
      let t = We.InitFromClanID(e.curator_clan_id, V.EUNIVERSE),
        n = Pe.GetCreatorHome(t);
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
function ht(e, t, n, r) {
  let i = mt(e, t, n, r);
  return i === null ? null : i && i.startsWith(`#`) ? R(i) : i;
}
function q(e, t, n, r, i, a, o, s) {
  if (!e) return ``;
  if (e.section_type === `crosspromotesalepage`) return ne(s, n);
  let c = ht(e, t, i, o),
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
        : (0, G.jsxs)(G.Fragment, {
            children: [
              d,
              ` `,
              (0, G.jsx)(et, {
                tooltip: L(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, G.jsx)(`br`, {}),
                  u,
                ),
              }),
            ],
          });
    if (i == 1)
      return u?.trim().length == 0 || a
        ? d
        : (0, G.jsxs)(G.Fragment, {
            children: [
              d,
              ` `,
              (0, G.jsx)(`span`, {
                children: L(`#Sale_Section_InternalTitle_Actual`, u),
              }),
            ],
          });
  }
  let f = z.GetWithFallback(e.localized_label_image, n);
  if (!a && f) {
    let e = D.GenerateURLFromHashAndExt(r, f);
    return (0, G.jsx)(`img`, { loading: `lazy`, src: e, alt: u });
  }
  return u;
}
function gt(e, t, n) {
  if (fe(e.section_type))
    switch (A(e)) {
      case `personalized_carousel`:
        let r = pt(e, t, n);
        return r ? R(`#Sale_PersonalizedCarousel_Section_subtitle`, r) : null;
      case `creator_list`:
        return Ne(e.smart_section_creator_listid) ?? null;
    }
  return null;
}
function _t(e, t, n, r) {
  let i = gt(e, t, r);
  return i === null
    ? z.GetWithFallback(e.localized_subtitle, n) ||
        (!e.default_subtitle || e.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : R(e.default_subtitle))
    : i && i.startsWith(`#`)
      ? R(i)
      : i;
}
var vt = `dYYkud-Jf3s-`,
  yt = `zZo1XshRYmQ-`,
  bt = `RfHJSn8AdQE-`,
  xt = `D8GFuSKNhX0-`,
  St = `woc2JepJIek-`;
function Ct(e, t) {
  return (
    z.GetWithFallback(e.localized_label, t) ||
    (e.default_label === `#Sale_default_label` ? `` : R(e.default_label))
  );
}
function wt(e) {
  if (fe(e.section_type))
    switch (A(e)) {
      case `deck_topplayed`:
        return H.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return e.label_link;
}
function Tt(e) {
  let t,
    n,
    r = !1;
  return (
    e.label_link_style === `button`
      ? ((t = R(`#Sale_SectionLink_BrowseAll`)), (r = !0))
      : e.label_link_style === `browseall`
        ? ((t = R(`#Sale_SectionLink_BrowseAll`)),
          (n = U(bt, `SaleSectionLabelLinkButton`)))
        : A(e) === `deck_topplayed` &&
          ((t = R(`#EventBrowse_MoreEventsBtn`)),
          (n = U(xe, `SaleSectionLabelLinkButton`))),
    { strLinkButtonLabel: t, strLinkButtonClasses: n, bSmallButton: r }
  );
}
var Et = r((e) => {
  let {
      section: t,
      event: n,
      language: r,
      nHiddenCapsules: i,
      title: a,
      subtitle: o,
      bShowSeeMoreHint: s,
      bUseGamepadLinkHint: c,
      eGamepadLinkHintButton: l,
      onLinkResolved: d,
      personalizedCarousels: f,
      promotedSale: p,
    } = e,
    m = B(),
    h = Ie(),
    g = p !== void 0,
    { data: _ } = ft(g ? void 0 : re(t)),
    v = (g ? p : _) ?? void 0,
    y = e.link || wt(t) || Me(v);
  if (
    (W.useEffect(() => {
      d?.(y);
    }, [y, d]),
    t.section_type == `title_image` && t.title_image_selected === `image`)
  )
    return null;
  let b = a || q(t, n, r, n.clanSteamID.GetAccountID(), h.eLocation, !1, f, v);
  if (!b) return null;
  let x = o || _t(t, n, r, f),
    C = (0, G.jsxs)(`div`, {
      className: U(F, `SaleSectionHeader`),
      style: Dt(t, n, r),
      children: [
        t.test_show_on_valve_ip_only &&
          (0, G.jsx)(`div`, {
            className: `JrlXbYAw30w-`,
            children: `(VO)\xA0`,
          }),
        b,
      ],
    }),
    w = (0, G.jsx)(`div`, {
      className: U(F, be, `SaleSectionSubtitle`),
      style: Ot(t, n, r),
      children: x,
    }),
    T = null;
  if ((y?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: e,
      strLinkButtonClasses: n,
      bSmallButton: r,
    } = Tt(t);
    (e &&
      (T =
        m && c
          ? (0, G.jsx)(je, { label: e, shown: !!s, button: l })
          : r
            ? (0, G.jsx)(`div`, {
                className: U(u, xt),
                children: (0, G.jsx)(S, {
                  url: y,
                  children: (0, G.jsx)(qe, { children: e }),
                }),
              })
            : (0, G.jsx)(S, { url: y, className: n, children: e })),
      (C = (0, G.jsx)(S, { url: y, bFocusable: !T, children: C })));
  }
  return (0, G.jsxs)(`div`, {
    className: U(vt, `SaleSectionLabelCtn`),
    children: [
      (0, G.jsxs)(`div`, { className: St, children: [C, !!x && w] }),
      (0, G.jsxs)(`div`, {
        className: yt,
        children: [
          !!i &&
            (0, G.jsx)(Ue, {
              className: `pL8IDIWBDg8-`,
              toolTipContent: R(`#Sale_HiddenItem_Tooltip`),
              children: (0, G.jsx)(`a`, {
                href: H.STORE_BASE_URL + `account/preferences`,
                children: L(
                  i == 1
                    ? `#Sale_HiddenItem_Single_Short`
                    : `#Sale_HiddenItems_Short`,
                  i,
                ),
              }),
            }),
          T,
        ],
      }),
    ],
  });
});
function Dt(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? kt(t.jsondata.sale_font, n) : void 0,
    fontWeight: t.jsondata.sale_font_weight,
    fontSize: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
  };
}
function Ot(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? kt(t.jsondata.sale_font, n) : void 0,
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
function kt(e, t) {
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
function At(e, t, n, r, i) {
  let a = q(t, r, n, r.clanSteamID.GetAccountID(), e);
  if (a) return a;
  let o = R(`#Sale_Section_Header`, i + 1),
    s = `#Sale_Section_Type_` + (t?.section_type || `unknowntype`),
    c = R(s);
  if (c !== s) return `${o} (${c})`;
}
function jt(e, t) {
  return e == null || e == null || !It(t)
    ? !0
    : t.reverse_show_on_tabs
      ? !(!t.show_on_tabs || t.show_on_tabs.includes(e))
      : !!(t.show_on_tabs && t.show_on_tabs.includes(e));
}
function Mt(e) {
  return e.template_tab_id ?? e.unique_id;
}
function Nt(e) {
  return Ft(e, `[Feature] Adult Only Sexual Content`);
}
function Pt(e) {
  return Ft(e, `[Feature] Coming Soon`);
}
function Ft(e, t) {
  if (e?.sale_tag_filter?.clauses?.length == 1) {
    let n = e.sale_tag_filter.clauses[0];
    return (
      n.type === `Must have` && n.or_tags.length === 1 && n.or_tags[0] === t
    );
  }
  return !1;
}
function It(e) {
  return !!(
    e.show_on_tabs &&
    e.show_on_tabs.length > 0 &&
    !e.diable_tab_id_filtering
  );
}
function Lt(e, t) {
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
var Rt = `partnereventaction/eventsummary`;
function zt(e) {
  let t = new URLSearchParams();
  return (
    t.set(`clan_account_id`, String(e.clanAccountID)),
    t.set(`event_gid`, e.strEventGID),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
var Bt = `partnereventaction/eventsummaries`;
function Vt(e) {
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
function Ht(e) {
  return Vt(e)
    .map((e) => `${e.clanAccountID}:${e.strEventGID}`)
    .join(`,`);
}
function Ut(e) {
  let t = new URLSearchParams();
  return (
    t.set(`events`, Ht(e.rgEvents)),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
async function Wt(e) {
  let t = `${H.STORE_BASE_URL}${Rt}?${zt(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summary ?? null;
}
async function Gt(e) {
  if (e.rgEvents.length === 0) return [];
  let t = `${H.STORE_BASE_URL}${Bt}?${Ut(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summaries ?? [];
}
function Kt(e, t, n) {
  return [`PartnerEventSummary`, e, t, n];
}
function qt(e, t) {
  return {
    queryKey: Kt(e.clanAccountID, e.strEventGID, e.eLanguage),
    queryFn: () => Wt(e),
    select: t,
    staleTime: 6e5,
  };
}
function Jt(e) {
  return [`PartnerEventSummaries`, e.eLanguage, Ht(e.rgEvents)];
}
function Yt(e) {
  return { queryKey: Jt(e), queryFn: () => Gt(e), staleTime: 3e5 };
}
function Xt(e, t, n) {
  let r = n,
    i = 0;
  for (i = 0; i < t; i++) {
    let t = e[i % e.length];
    if (r < t) break;
    r -= t;
  }
  return i;
}
function Zt(e, t) {
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
function J(e, t) {
  if (k(e)) return 0;
  let n = ce(e);
  return n <= 0 ? 0 : n + t;
}
function Qt(e, t, n, r, i) {
  let a =
    `section_` +
    r +
    `_` +
    e.GID +
    (i || 0) +
    _e(t.unique_id ? t.unique_id.toString() : JSON.stringify(t)).toString();
  return (
    n &&
      e.rtime32_last_local_modification &&
      (a += `_` + e.rtime32_last_local_modification),
    a
  );
}
function $t(e) {
  let { id: t, type: n } = e,
    r = ve({ id: t, type: n }),
    { data: i } = Ve(r);
  return (0, G.jsx)(`div`, {
    className: c,
    children: (0, G.jsx)(N, {
      ...e,
      bShowReviewSummary: !0,
      bShowDemoButton: e.bShowDemoButton || i?.type == 1,
      bPreferDemoStorePage: e.bPreferDemoStorePage,
    }),
  });
}
var en = `SppL95yx9BU-`,
  tn = `_7Na7-QNyAn4-`,
  nn = `zdh0LkaHoKw-`,
  rn = `vZlB-C6RUio-`;
function an(e) {
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
    l = ve({ id: t, type: n }),
    { data: u } = Ve(l),
    { data: d } = Be(l),
    [f, m] = v(o, s),
    g = u?.item_type == 0;
  return (0, G.jsx)(p, {
    appid: g ? u.id : void 0,
    children: (0, G.jsxs)(Je, {
      "flow-children": `grid`,
      navEntryPreferPosition: Ge.PREFERRED_CHILD,
      autoFocus: c,
      navKey: `purchase_only_` + u?.id,
      children: [
        `	`,
        (0, G.jsxs)(`div`, {
          className: tn,
          children: [
            (0, G.jsx)(`div`, {
              className: void 0,
              children: (0, G.jsx)(`div`, { className: en, children: u?.name }),
            }),
            (0, G.jsxs)(`div`, {
              className: rn,
              children: [
                !a &&
                  u?.type != 10 &&
                  (0, G.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, G.jsx)(h, { id: l }),
                      !!(f && u?.item_type == 0 && d) &&
                        (0, G.jsx)(Qe, {
                          eDisplay: m,
                          storeItemPlatform: d,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, G.jsx)(he, {
                  id: l,
                  className: nn,
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
function on(e) {
  let { displayStyle: t, requestCompact: n, bNarrowScreen: r, ...i } = e,
    { type: a } = e,
    o = r ?? M(),
    s = B();
  if (t === `purchaseonlydisplay`) return (0, G.jsx)(an, { ...i });
  if (s) return (0, G.jsx)(N, { ...i });
  if (n && !o) return (0, G.jsx)($t, { ...i });
  if (a == `bundle` || a == `sub`) return (0, G.jsx)(N, { ...i });
  if (o && (t == `library` || t == `animated`))
    return (0, G.jsx)(N, { ...i, bShowReviewSummary: !0 });
  switch (t) {
    case `library`:
      return (0, G.jsx)(P, { ...i });
    case `animated`:
      return (0, G.jsx)(P, { ...i });
    default:
      return (0, G.jsx)(N, { ...i, bShowReviewSummary: !0 });
  }
}
function sn(e, t, n = M()) {
  return !(e === `purchaseonlydisplay` || t || n);
}
var cn = `h4e3CZE5mfI-`,
  ln = `lJc7R9Bil2I-`,
  un = `IS179RoYT1Q-`,
  dn = `SZeormjSwYo-`,
  Y = 258;
function fn(e, t) {
  return Z(e, t).every((e) => e === 1);
}
function pn(e) {
  let t = !1,
    n = A(e);
  return (
    n && (t = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(n)),
    !!(t || e.show_parent_app)
  );
}
function X(e, t) {
  if (k(e)) return 0;
  let n = ce(e);
  return n <= 0 ? 0 : n + t;
}
function Z(e, t) {
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
            return Ye(t, 1, r == `tall` ? 4 : 3);
          })
        : e.capsules_per_row_array
      : e.adaptive_capsules_per_row
        ? t
          ? [2, 3]
          : [2, 3, 4, 3]
        : [Ye(e.capsules_per_row || 1, 1, t ? 3 : 5) || 1];
}
function mn(e, t, n) {
  let r = Z(e, n),
    i = k(e) ? ue(e) : X(e, t),
    a = 0;
  for (let e = 0; e < i; e++) a += r[e % r.length];
  return a;
}
function Q(e, t) {
  return e.capsule_style_per_row_array
    ? e.capsule_style_per_row_array
    : fn(e, t)
      ? [`fullrow`]
      : [`grid`];
}
function hn(e, t) {
  let { saleEvent: n, language: r, index: i, section: a } = t;
  return (0, G.jsx)(
    Mn,
    {
      link: e,
      language: r,
      clanAccountID: n.clanSteamID.GetAccountID(),
      strClassName: y,
    },
    a.unique_id + `_` + i,
  );
}
function gn(e, t) {
  let {
    capsuleStyle: n,
    index: r,
    section: i,
    saleEvent: a,
    rowElements: o,
  } = t;
  if (ee(e)) return null;
  let s = pn(i),
    c = a.BUseSubscriptionLayout(),
    l = k(i) && !t.bIsSingleCapsule,
    u = Lt(i, t.activeTab),
    p = i.unique_id + `_` + r + `_` + e.type + `_` + e.id;
  if (n !== `fullrow`) {
    let a = U(l && `FolDBzXMW2I-`, l && n === `tall` && `E6LHQcm-39c-`);
    return (0, G.jsx)(
      `div`,
      {
        className: a,
        children: (0, G.jsx)(
          Le,
          {
            imageType: n === `tall` ? `library` : `header`,
            navKey: p,
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
          p,
        ),
      },
      p,
    );
  }
  {
    let n = i.single_item_style ? i.single_item_style : le,
      a;
    (`overrideNavigation` in e &&
      (a = (t) => (
        e.overrideNavigation(t),
        t && (t.preventDefault(), t.stopPropagation()),
        !1
      )),
      M() && (n == `library` || n == `animated`) && (n = `bordered`));
    let o = U({
      [d]: !l && n == `bordered`,
      [E]: l && n == `bordered`,
      [f]: l && n == `animated`,
      [Re + r]: r === 0,
    });
    return (0, G.jsx)(
      `div`,
      {
        className: o,
        children: (0, G.jsx)(on, {
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
      p,
    );
  }
}
function _n(e, t, n, r, i, a, o, s, c) {
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
        A(e) === `sale_tabhub`
      ? (e.section_type === `title_image` &&
          e.title_image_selected === `title`) ||
        !n
        ? []
        : n.map((e) => ({ Render: (t) => hn(e, t) }))
      : de(e.section_type)
        ? t
          ? t.filter((e) => !ee(e)).map((e) => ({ Render: (t) => gn(e, t) }))
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
function $(e, t) {
  return t[e % t.length];
}
function vn(e, t) {
  return e === `tall` ? t + 1 : t;
}
function yn(e, t, n, r, i, a, o, s, c, l) {
  let {
    nMaxCapsulesPerRow: u,
    bScreenIsWide: d,
    nShowAdditionalRows: f,
    bShowAsCarousel: p,
    bAutoAdvance: h,
    bHideIfTooFewItems: g,
    strCarouselKey: _,
    bPaginationPills: v,
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
  let T = p && (a <= 1 || (!!v && !d)),
    E = Math.min(C[0], u);
  if (T && n.length > E)
    x = (0, W.createElement)(
      I,
      {
        ...t,
        key: _,
        hideArrows: !d,
        visibleElements: E,
        className: U({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !l,
          ItemCount_4: C[0] == 4,
          [un]:
            t && t.section && t.section.section_type == `creator_list_of_lists`,
        }),
        useTestScrollbar: !0,
        bLazyRenderChildren: !0,
        bAutoAdvance: !!h,
        hidePips: c,
        padded: !l,
        screenIsWide: d,
        navKey: e,
        lazyRenderPlaceholderWidth: Y,
      },
      b(n, 0, n.length, E, $(0, w)),
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
      let a = $(0, w);
      for (let t = 0; (e == 0 || t < e) && l < n.length; t++) {
        (t == 0 || d) && (a = $(t, w));
        let e = vn(a, u),
          r = Math.min(C[t % C.length], e),
          i = Math.min(r, n.length - l);
        if (i < r && t === 0) {
          if (g) return { content: null, bAdditionalContent: !1 };
          r = Math.max(a === `tall` ? 3 : 2, i);
        }
        (s.push(
          (0, G.jsx)(
            xn,
            { nMaxItems: r, nItems: i, children: b(n, l, l + i, r, a) },
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
          { className: m, children: (0, G.jsx)(Ze, { depth: o, children: s }) },
          `Page_${t}`,
        ),
      ),
        (s = []));
    }
    i.length == 0
      ? ((S = n.length > l),
        (x = (0, G.jsx)(Je, {
          "flow-children": `grid`,
          focusable: !1,
          children: s,
        })))
      : (x = (0, W.createElement)(
          I,
          {
            ...t,
            key: _,
            hideArrows: !d,
            visibleElements: 1,
            className: `SaleSectionCarousel`,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderWidth: Y,
            hidePips: c,
            screenIsWide: d,
          },
          i,
        ));
  }
  return { content: x, bAdditionalContent: S };
}
function bn(e) {
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
      (!j(n) &&
        n.capsules_per_row_array?.length &&
        n.capsules_per_row_array[0] >= (n.capsules?.length || 0))) &&
      (n.carousel_rows = 1));
  let o = _n(
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
  let s = Z(n, i),
    c = Q(n, i),
    l = ue(n),
    u = (e) => X(n, e),
    d = { section: n, saleEvent: t, language: r, activeTab: a },
    f = { ...e, strCarouselKey: te(a?.GetTagSelection()) };
  return yn(n.unique_id, f, o, s, c, l, u, d, i);
}
var xn = (e) => {
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
    className: U(
      ye,
      b,
      `SaleSectionContainer`,
      `center_row_trgt`,
      `ItemCount_` + t,
    ),
    style: { gridTemplateColumns: t > 1 ? i : void 0 },
    children: [a, e.children, o],
  });
};
function Sn(e) {
  let { section: t, nMaxCapsulesPerRow: n, bInGamepadUI: r } = e,
    i = $(0, Q(t, r)),
    a = Math.min(Z(t, r)[0], vn(i, n)),
    o = U(
      dn,
      i === `tall` && `_9Xrgw1NkKg8-`,
      i === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, G.jsx)(xn, {
    nMaxItems: a,
    nItems: a,
    children: Array.from({ length: a }, (e, t) =>
      (0, G.jsx)(`div`, { className: o }, t),
    ),
  });
}
function Cn(e) {
  let { event: t, section: n, rgSlides: r, onSlide: i, onNavIntent: a } = e,
    o = B(),
    { bScreenIsWide: s } = we(n.section_type);
  return r.length === 0
    ? null
    : r.length === 1
      ? (0, G.jsx)(G.Fragment, { children: r[0] })
      : !s || o
        ? (0, G.jsx)(`div`, {
            className: oe,
            children: r.map((e, t) =>
              (0, G.jsx)(wn, { nSlide: t, onSlide: i, children: e }, t),
            ),
          })
        : (0, G.jsx)(`div`, {
            className: U(w, ae),
            children: (0, G.jsx)(I, {
              ...pe(t.jsondata),
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
function wn(e) {
  let { nSlide: t, onSlide: n, children: r } = e,
    i = Xe({ onEnter: () => n?.(t) });
  return (0, G.jsx)(`div`, { ref: i, children: r });
}
function Tn(e) {
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
    [u, d] = W.useState(void 0),
    { bShowSeeMoreHint: f, panelProps: p } = Ae(u, `X`);
  return (0, G.jsxs)(ke, {
    placeholderHeight: a,
    className: U({
      [w]: !0,
      [l]: k(n),
      [g]: n.disable_background,
      [Ee]: !0,
      SaleSectionForCustomCSS: !0,
      [n.sale_section_classname || ``]: !!n.sale_section_classname,
      [void 0]: n.background_repeat == `coverBlur`,
    }),
    rootMargin: Te,
    holdGamepadFocus: i,
    ...p,
    children: [
      (0, G.jsx)(`div`, {
        className: U(Ce, n.background_repeat == `coverBlur` ? Se : ``),
        style: it(n, t, i),
      }),
      (0, G.jsxs)(`div`, {
        className: C,
        children: [
          (0, G.jsx)(Et, {
            section: n,
            event: t,
            language: r,
            nHiddenCapsules: o,
            personalizedCarousels: s,
            bShowSeeMoreHint: f,
            bUseGamepadLinkHint: !0,
            eGamepadLinkHintButton: `X`,
            onLinkResolved: (e) => d(e ?? void 0),
          }),
          (0, G.jsx)(En, { event: t, section: n }),
        ],
      }),
      c,
      (0, G.jsx)(T, { section: n }),
    ],
  });
}
function En(e) {
  let { event: t, section: n } = e,
    r = W.useMemo(
      () =>
        n.section_type == `events`
          ? Ke(`ch_newshub`, `application_config`)
          : void 0,
      [n.section_type],
    );
  if (n.hide_view_all_events_link) return null;
  let i = null;
  if (n.section_type == `events`) {
    if (!r || !t.BUsesContentHubForItemSource() || !j(n)) return null;
    i = V.STORE_BASE_URL + `news/` + r;
  } else
    n.section_type == `sale_events`
      ? (i = V.STORE_BASE_URL + `news/collection/sales/`)
      : n.section_type == `calendar` &&
        (i = V.STORE_BASE_URL + `personalcalendar`);
  if (!i) return null;
  let a = i;
  return (0, G.jsx)(`div`, {
    className: u,
    children: (0, G.jsx)(qe, {
      onClick: (e) => ze(e, a),
      children: R(`#EventBrowse_AllEventsBtn`),
    }),
  });
}
function Dn(e) {
  let { saleEvent: t, section: n, bInGamepadUI: r } = e,
    i = {
      ...e,
      bShowAsCarousel: k(n),
      bAutoAdvance: !!n.carousel_auto_advance,
      bHideIfTooFewItems: !!n.hide_section_if_too_few_items,
      ...pe(t.jsondata),
    },
    a = J(n, i.nShowAdditionalRows),
    o = Xt(Z(n, r), a, i.capsules?.length ?? 0);
  return (o < a && j(n) && (i.nShowAdditionalRows -= a - o), i);
}
var On = `NQebVMQULto-`;
function kn(e) {
  let {
      section: t,
      nRowsWithNext: n,
      nCapsules: r,
      rgRowSizes: i,
      bLoading: a,
      onShowMore: o,
    } = e,
    s = Xt(i, n, r) < n;
  return (0, G.jsx)(`div`, {
    className: U(On, `ShowContentsContainer`),
    children: a
      ? (0, G.jsx)(ge, { size: `small`, string: R(`#Loading`) })
      : !s &&
        t.cap_section_content &&
        (0, G.jsx)($e, {
          onClick: o,
          className: U(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: R(`#Sale_ShowMore`),
        }),
  });
}
function An(e) {
  return Math.max(J(e, 0), 4);
}
function jn(e, t, n = ``, r = 0) {
  if (e.enable_faceted_browsing && r > 0)
    return { feature: `salefacetbrowse` + n, depth: r };
  if (j(e) && e.section_type != `crosspromotesalepage`) {
    let r = A(e);
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
            depth: O(e, t).nSectionIndex,
          };
        case `discount_reason`:
          return {
            feature: `salesmartdiscountreason` + n,
            depth: e.smart_section_discount_reason ?? 0,
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
function Mn(e) {
  let { language: t, link: n } = e,
    r = He(),
    [i, a, s] = o(() => [
      z.GetWithFallback(n.localized_link_capsule, t),
      r ? n.sc_url : n.url,
      n.materialized_link_capsule,
    ]),
    c = i ? D.GenerateURLFromHashAndExt(e.clanAccountID, i) : void 0;
  return (0, G.jsx)(S, {
    url: a,
    className: e.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!n.open_in_place,
    children: (0, G.jsxs)(`div`, {
      className: U(_, e.link.url ? x : ``),
      children: [
        !!c && (0, G.jsx)(me, { className: `_-4JZsb8K2FY-`, src: c }),
        !!s &&
          (0, G.jsx)(`img`, { className: `_-4JZsb8K2FY-`, src: s, alt: a }),
      ],
    }),
  });
}
export {
  Ct as A,
  it as B,
  Yt as C,
  jt as D,
  Pt as E,
  dt as F,
  lt as I,
  rt as L,
  Et as M,
  q as N,
  Mt as O,
  _t as P,
  K as R,
  J as S,
  Nt as T,
  ln as _,
  Tn as a,
  Zt as b,
  fn as c,
  Z as d,
  X as f,
  cn as g,
  yn as h,
  Dn as i,
  Dt as j,
  At as k,
  mn as l,
  Sn as m,
  An as n,
  Cn as o,
  bn as p,
  kn as r,
  pn as s,
  jn as t,
  Q as u,
  sn as v,
  qt as w,
  Qt as x,
  on as y,
  at as z,
};
