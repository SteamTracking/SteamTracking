/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, u as r } from "./chunk~01cfc309bf.js";
import {
  $n as i,
  Cn as a,
  Go as o,
  Ht as s,
  Jt as c,
  M as l,
  Qt as u,
  Rt as d,
  Xt as f,
  Yn as p,
  Yt as m,
  Zt as h,
  ao as g,
  b as _,
  gn as v,
  i as y,
  jo as b,
  nr as x,
  r as S,
  rn as C,
  rr as w,
  sn as T,
  tn as E,
  vn as D,
} from "./chunk~6b8ddcaac8.js";
import {
  A as O,
  D as k,
  I as ee,
  O as A,
  c as te,
  j,
  s as M,
  st as ne,
  w as re,
} from "./chunk~f57d770d64.js";
import { o as ie } from "./chunk~961c06e93e.js";
import { r as ae } from "./chunk~5adf866415.js";
import { i as N } from "./chunk~2f085f1384.js";
import { l as oe, n as se, o as ce, t as le } from "./chunk~ffe4581a06.js";
import { n as ue, t as P } from "./chunk~f4c928a27a.js";
import { t as de } from "./chunk~eefd71512b.js";
import { i as fe } from "./chunk~e867464c75.js";
import { t as F } from "./chunk~4e9767668d.js";
import { D as pe, n as me, t as he } from "./chunk~2f8c67b4de.js";
import { f as ge } from "./chunk~618fb52a90.js";
import { r as I } from "./chunk~21cdc464a1.js";
import { n as _e } from "./chunk~710e3cfd2f.js";
import { n as ve, r as ye } from "./chunk~3ea79bd96d.js";
import { a as be, s as xe } from "./chunk~3720b337f3.js";
import {
  Er as Se,
  Jy as L,
  Kv as Ce,
  Pv as R,
  Uy as we,
  Vb as Te,
  Wb as z,
  _l as Ee,
  cx as B,
  ex as De,
  gr as Oe,
  jc as V,
  jx as H,
  nl as ke,
  pt as Ae,
  qb as U,
  rn as je,
  sl as Me,
  wc as W,
} from "./main.js";
var G = e(t()),
  K = n();
function Ne(e, t) {
  return e == null || e == null || !Le(t)
    ? !0
    : t.reverse_show_on_tabs
      ? !(!t.show_on_tabs || t.show_on_tabs.includes(e))
      : !!(t.show_on_tabs && t.show_on_tabs.includes(e));
}
function Pe(e) {
  return e.template_tab_id ?? e.unique_id;
}
function Fe(e) {
  return q(e, `[Feature] Adult Only Sexual Content`);
}
function Ie(e) {
  return q(e, `[Feature] Coming Soon`);
}
function q(e, t) {
  if (e?.sale_tag_filter?.clauses?.length == 1) {
    let n = e.sale_tag_filter.clauses[0];
    return (
      n.type === `Must have` && n.or_tags.length === 1 && n.or_tags[0] === t
    );
  }
  return !1;
}
function Le(e) {
  return !!(
    e.show_on_tabs &&
    e.show_on_tabs.length > 0 &&
    !e.diable_tab_id_filtering
  );
}
function Re(e, t) {
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
var ze = `partnereventaction/eventsummary`;
function Be(e) {
  let t = new URLSearchParams();
  return (
    t.set(`clan_account_id`, String(e.clanAccountID)),
    t.set(`event_gid`, e.strEventGID),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
var Ve = `partnereventaction/eventsummaries`;
function He(e) {
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
function Ue(e) {
  return He(e)
    .map((e) => `${e.clanAccountID}:${e.strEventGID}`)
    .join(`,`);
}
function We(e) {
  let t = new URLSearchParams();
  return (
    t.set(`events`, Ue(e.rgEvents)),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
async function Ge(e) {
  let t = `${U.STORE_BASE_URL}${ze}?${Be(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summary ?? null;
}
async function Ke(e) {
  if (e.rgEvents.length === 0) return [];
  let t = `${U.STORE_BASE_URL}${Ve}?${We(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summaries ?? [];
}
function qe(e, t, n) {
  return [`PartnerEventSummary`, e, t, n];
}
function Je(e, t) {
  return {
    queryKey: qe(e.clanAccountID, e.strEventGID, e.eLanguage),
    queryFn: () => Ge(e),
    select: t,
    staleTime: 6e5,
  };
}
function Ye(e) {
  return [`PartnerEventSummaries`, e.eLanguage, Ue(e.rgEvents)];
}
function Xe(e) {
  return { queryKey: Ye(e), queryFn: () => Ke(e), staleTime: 3e5 };
}
function Ze(e, t, n) {
  let r = n,
    i = 0;
  for (i = 0; i < t; i++) {
    let t = e[i % e.length];
    if (r < t) break;
    r -= t;
  }
  return i;
}
function Qe(e, t) {
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
  if (O(e)) return 0;
  let n = k(e);
  return n <= 0 ? 0 : n + t;
}
function $e(e, t, n, r, i) {
  let a =
    `section_` +
    r +
    `_` +
    e.GID +
    (i || 0) +
    fe(t.unique_id ? t.unique_id.toString() : JSON.stringify(t)).toString();
  return (
    n &&
      e.rtime32_last_local_modification &&
      (a += `_` + e.rtime32_last_local_modification),
    a
  );
}
function et(e) {
  let { id: t, type: n } = e,
    r = i({ id: t, type: n }),
    { data: a } = R(r);
  return (0, K.jsx)(`div`, {
    className: o,
    children: (0, K.jsx)(P, {
      ...e,
      bShowReviewSummary: !0,
      bShowDemoButton: e.bShowDemoButton || a?.type == 1,
      bPreferDemoStorePage: e.bPreferDemoStorePage,
    }),
  });
}
var tt = `SppL95yx9BU-`,
  nt = `_7Na7-QNyAn4-`,
  rt = `zdh0LkaHoKw-`,
  it = `vZlB-C6RUio-`;
function at(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bHidePrice: a,
      bHidePlatforms: o,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      bAutoFocus: l,
    } = e,
    u = i({ id: t, type: n }),
    { data: d } = R(u),
    { data: f } = Ce(u),
    [m, h] = w(s, c),
    g = d?.item_type == 0;
  return (0, K.jsx)(x, {
    appid: g ? d.id : void 0,
    children: (0, K.jsxs)(V, {
      "flow-children": `grid`,
      navEntryPreferPosition: Ee.PREFERRED_CHILD,
      autoFocus: l,
      navKey: `purchase_only_` + d?.id,
      children: [
        `	`,
        (0, K.jsxs)(`div`, {
          className: nt,
          children: [
            (0, K.jsx)(`div`, {
              className: void 0,
              children: (0, K.jsx)(`div`, { className: tt, children: d?.name }),
            }),
            (0, K.jsxs)(`div`, {
              className: it,
              children: [
                !o &&
                  d?.type != 10 &&
                  (0, K.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, K.jsx)(p, { id: u }),
                      !!(m && d?.item_type == 0 && f) &&
                        (0, K.jsx)(je, {
                          eDisplay: h,
                          storeItemPlatform: f,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, K.jsx)(ue, {
                  id: u,
                  className: rt,
                  bShowDemoButton: r,
                  bShowCartButton: !0,
                  bHidePrice: a,
                  bHideWishlistButton: !0,
                  bShowDeckCompatibilityDialog: s,
                  eHardwareCompatibilityDisplay: c,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function ot(e) {
  let { displayStyle: t, requestCompact: n, bNarrowScreen: r, ...i } = e,
    { type: a } = e,
    o = r ?? N(),
    s = z();
  if (t === `purchaseonlydisplay`) return (0, K.jsx)(at, { ...i });
  if (s) return (0, K.jsx)(P, { ...i });
  if (n && !o) return (0, K.jsx)(et, { ...i });
  if (a == `bundle` || a == `sub`) return (0, K.jsx)(P, { ...i });
  if (o && (t == `library` || t == `animated`))
    return (0, K.jsx)(P, { ...i, bShowReviewSummary: !0 });
  switch (t) {
    case `library`:
      return (0, K.jsx)(F, { ...i });
    case `animated`:
      return (0, K.jsx)(F, { ...i });
    default:
      return (0, K.jsx)(P, { ...i, bShowReviewSummary: !0 });
  }
}
function st(e, t, n = N()) {
  return !(e === `purchaseonlydisplay` || t || n);
}
var ct = `h4e3CZE5mfI-`,
  lt = `lJc7R9Bil2I-`,
  ut = `IS179RoYT1Q-`,
  dt = `SZeormjSwYo-`,
  ft = 258;
function pt(e, t) {
  return X(e, t).every((e) => e === 1);
}
function mt(e) {
  let t = !1,
    n = j(e);
  return (
    n && (t = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(n)),
    !!(t || e.show_parent_app)
  );
}
function Y(e, t) {
  if (O(e)) return 0;
  let n = k(e);
  return n <= 0 ? 0 : n + t;
}
function X(e, t) {
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
            return H(t, 1, r == `tall` ? 4 : 3);
          })
        : e.capsules_per_row_array
      : e.adaptive_capsules_per_row
        ? t
          ? [2, 3]
          : [2, 3, 4, 3]
        : [H(e.capsules_per_row || 1, 1, t ? 3 : 5) || 1];
}
function ht(e, t, n) {
  let r = X(e, n),
    i = O(e) ? A(e) : Y(e, t),
    a = 0;
  for (let e = 0; e < i; e++) a += r[e % r.length];
  return a;
}
function Z(e, t) {
  return e.capsule_style_per_row_array
    ? e.capsule_style_per_row_array
    : pt(e, t)
      ? [`fullrow`]
      : [`grid`];
}
function gt(e, t) {
  let { saleEvent: n, language: r, index: i, section: a } = t;
  return (0, K.jsx)(
    It,
    {
      link: e,
      language: r,
      clanAccountID: n.clanSteamID.GetAccountID(),
      strClassName: T,
    },
    a.unique_id + `_` + i,
  );
}
function _t(e, t) {
  let {
    capsuleStyle: n,
    index: r,
    section: i,
    saleEvent: a,
    rowElements: o,
  } = t;
  if (ie(e)) return null;
  let s = mt(i),
    l = a.BUseSubscriptionLayout(),
    u = O(i) && !t.bIsSingleCapsule,
    d = Re(i, t.activeTab),
    p = i.unique_id + `_` + r + `_` + e.type + `_` + e.id;
  if (n !== `fullrow`) {
    let a = W(u && `FolDBzXMW2I-`, u && n === `tall` && `E6LHQcm-39c-`);
    return (0, K.jsx)(
      `div`,
      {
        className: a,
        children: (0, K.jsx)(
          ve,
          {
            imageType: n === `tall` ? `library` : `header`,
            navKey: p,
            capsule: e,
            bShowParentApp: s,
            bUseSubscriptionLayout: l,
            bShowDemoButton:
              i.show_as_demos || t.activeTab?.BFilterRequiresFeatureDemo(),
            bPreferDemoStorePage: i.prefer_demo_store_page,
            bHidePrice: i.hide_prices,
            bHidePlatforms: o >= 5,
            index: r,
            bPreferAssetWithoutOverride: !!i.prefer_assets_without_overrides,
            eHardwareCompatibilityDisplay: d,
          },
          p,
        ),
      },
      p,
    );
  }
  {
    let n = i.single_item_style ? i.single_item_style : ee,
      a;
    (`overrideNavigation` in e &&
      (a = (t) => (
        e.overrideNavigation(t),
        t && (t.preventDefault(), t.stopPropagation()),
        !1
      )),
      N() && (n == `library` || n == `animated`) && (n = `bordered`));
    let o = W({
      [c]: !u && n == `bordered`,
      [f]: u && n == `bordered`,
      [m]: u && n == `animated`,
      [ye + r]: r === 0,
    });
    return (0, K.jsx)(
      `div`,
      {
        className: o,
        children: (0, K.jsx)(ot, {
          id: e.id,
          type: e.type,
          displayStyle: n,
          bShowPurchaseOptionsButton: i.show_purchase_options,
          bUseSubscriptionLayout: l,
          bShowDemoButton:
            i.show_as_demos || t.activeTab?.BFilterRequiresFeatureDemo(),
          bPreferDemoStorePage: i.prefer_demo_store_page,
          bHidePrice: i.hide_prices,
          eHardwareCompatibilityDisplay: d,
          fnOnClickOverride: a,
          bPreferAssetWithoutOverride: !!i.prefer_assets_without_overrides,
        }),
      },
      p,
    );
  }
}
function vt(e, t, n, r, i, a, o, s, c) {
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
        j(e) === `sale_tabhub`
      ? (e.section_type === `title_image` &&
          e.title_image_selected === `title`) ||
        !n
        ? []
        : n.map((e) => ({ Render: (t) => gt(e, t) }))
      : te(e.section_type)
        ? t
          ? t.filter((e) => !ie(e)).map((e) => ({ Render: (t) => _t(e, t) }))
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
function Q(e, t) {
  return t[e % t.length];
}
function $(e, t) {
  return e === `tall` ? t + 1 : t;
}
var yt = 3;
function bt(e, t, n, r, i, a, o, s, c, l) {
  let {
    nMaxCapsulesPerRow: d,
    bScreenIsWide: f,
    nShowAdditionalRows: p,
    bShowAsCarousel: m,
    bAutoAdvance: h,
    bHideIfTooFewItems: g,
    strCarouselKey: _,
    bPaginationPills: v,
    bDropShortLastCarouselPage: y,
  } = t;
  if (n.length === 0) return { content: null, bAdditionalContent: !1 };
  let b = n.length === 1,
    x = (e, t, n, r, i) => {
      let a = [];
      for (let o = t; o < n; o++) {
        let t = {
            capsuleStyle: i,
            index: o,
            rowElements: r,
            bIsSingleCapsule: b,
            ...s,
          },
          n = e[o].Render(t);
        n && a.push(n);
      }
      return a;
    },
    S = null,
    C = !1,
    w = b ? [1] : r,
    T = i;
  b && (d > 1 || T[0] == `tall`)
    ? (T = [`fullrow`])
    : v && n.length === 2 && T[0] === `tall` && (T = [`grid`]);
  let E = m && (a <= 1 || (!!v && !f)),
    D = Math.min(w[0], d);
  if (m && y) {
    let e = E ? D : xt(w, T, a, d, f);
    n = St(n, e);
  }
  if (E && n.length > D)
    S = (0, G.createElement)(
      I,
      {
        ...t,
        key: _,
        hideArrows: !f,
        visibleElements: D,
        className: W({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !l,
          ItemCount_4: w[0] == 4,
          [ut]:
            t && t.section && t.section.section_type == `creator_list_of_lists`,
        }),
        useTestScrollbar: !0,
        bLazyRenderChildren: !0,
        bAutoAdvance: !!h,
        hidePips: c,
        padded: !l,
        screenIsWide: f,
        navKey: e,
        lazyRenderPlaceholderWidth: ft,
      },
      x(n, 0, n.length, D, Q(0, T)),
    );
  else {
    let e = o(p),
      r = !0;
    if (m) ((e = a), (r = E));
    else if (p == 0 && e > 0) {
      let t = 0,
        r = 0;
      for (; t < e && r < n.length; t++) {
        let e = Math.min(w[t % w.length], d);
        r += e;
      }
      e = Math.max(2, t);
    }
    let i = [],
      s = [],
      l = 0;
    for (let t = 0; l < n.length; t++) {
      let a = Q(0, T);
      for (let t = 0; (e == 0 || t < e) && l < n.length; t++) {
        (t == 0 || f) && (a = Q(t, T));
        let e = $(a, d),
          r = Math.min(w[t % w.length], e),
          i = Math.min(r, n.length - l);
        if (i < r && t === 0) {
          if (g) return { content: null, bAdditionalContent: !1 };
          r = Math.max(a === `tall` ? 3 : 2, i);
        }
        (s.push(
          (0, K.jsx)(
            wt,
            { nMaxItems: r, nItems: i, children: x(n, l, l + i, r, a) },
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
          { className: u, children: (0, K.jsx)(Ae, { depth: o, children: s }) },
          `Page_${t}`,
        ),
      ),
        (s = []));
    }
    i.length == 0
      ? ((C = n.length > l),
        (S = (0, K.jsx)(V, {
          "flow-children": `grid`,
          focusable: !1,
          children: s,
        })))
      : (S = (0, G.createElement)(
          I,
          {
            ...t,
            key: _,
            hideArrows: !f,
            visibleElements: 1,
            className: `SaleSectionCarousel`,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderWidth: ft,
            hidePips: c,
            screenIsWide: f,
          },
          i,
        ));
  }
  return { content: S, bAdditionalContent: C };
}
function xt(e, t, n, r, i) {
  let a = 0;
  for (let o = 0; o < n; o++) {
    let n = Q(i ? o : 0, t);
    a += Math.min(e[o % e.length], $(n, r));
  }
  return a;
}
function St(e, t) {
  if (e.length <= t) return e;
  let n = Math.min(t - 2, yt),
    r = e.length % t;
  return r === 0 || r > n ? e : e.slice(0, e.length - r);
}
function Ct(e) {
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
      (!M(n) &&
        n.capsules_per_row_array?.length &&
        n.capsules_per_row_array[0] >= (n.capsules?.length || 0))) &&
      (n.carousel_rows = 1));
  let o = vt(
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
  let s = X(n, i),
    c = Z(n, i),
    l = A(n),
    u = (e) => Y(n, e),
    d = { section: n, saleEvent: t, language: r, activeTab: a },
    f = { ...e, strCarouselKey: _(a?.GetTagSelection()) };
  return bt(n.unique_id, f, o, s, c, l, u, d, i);
}
var wt = (e) => {
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
      pe,
      D,
      `SaleSectionContainer`,
      `center_row_trgt`,
      `ItemCount_` + t,
    ),
    style: { gridTemplateColumns: t > 1 ? i : void 0 },
    children: [a, e.children, o],
  });
};
function Tt(e) {
  let { section: t, nMaxCapsulesPerRow: n, bInGamepadUI: r } = e,
    i = Q(0, Z(t, r)),
    a = Math.min(X(t, r)[0], $(i, n)),
    o = W(
      dt,
      i === `tall` && `_9Xrgw1NkKg8-`,
      i === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, K.jsx)(wt, {
    nMaxItems: a,
    nItems: a,
    children: Array.from({ length: a }, (e, t) =>
      (0, K.jsx)(`div`, { className: o }, t),
    ),
  });
}
function Et(e) {
  let { event: t, section: n, rgSlides: r, onSlide: i, onNavIntent: a } = e,
    o = z(),
    { bScreenIsWide: s } = oe(n.section_type);
  return r.length === 0
    ? null
    : r.length === 1
      ? (0, K.jsx)(K.Fragment, { children: r[0] })
      : !s || o
        ? (0, K.jsx)(`div`, {
            className: xe,
            children: r.map((e, t) =>
              (0, K.jsx)(Dt, { nSlide: t, onSlide: i, children: e }, t),
            ),
          })
        : (0, K.jsx)(`div`, {
            className: W(v, be),
            children: (0, K.jsx)(I, {
              ...re(t.jsondata),
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
function Dt(e) {
  let { nSlide: t, onSlide: n, children: r } = e,
    i = ke({ onEnter: () => n?.(t) });
  return (0, K.jsx)(`div`, { ref: i, children: r });
}
function Ot(e) {
  let {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: i,
      placeholderHeight: o,
      nHiddenCapsules: c,
      personalizedCarousels: l,
      children: u,
    } = e,
    [f, p] = G.useState(void 0),
    m = At(t, n),
    g = i && !!m && !f,
    { bShowSeeMoreHint: _, panelProps: y } = se(g ? m : f, `X`);
  return (0, K.jsxs)(_e, {
    placeholderHeight: o,
    className: W({
      [v]: !0,
      [h]: O(n),
      [E]: n.disable_background,
      [ge]: !0,
      SaleSectionForCustomCSS: !0,
      [n.sale_section_classname || ``]: !!n.sale_section_classname,
      [void 0]: n.background_repeat == `coverBlur`,
    }),
    rootMargin: ce,
    holdGamepadFocus: i,
    ...y,
    children: [
      (0, K.jsx)(`div`, {
        className: W(he, n.background_repeat == `coverBlur` ? me : ``),
        style: d(n, t, i),
      }),
      (0, K.jsxs)(`div`, {
        className: a,
        children: [
          (0, K.jsx)(s, {
            section: n,
            event: t,
            language: r,
            nHiddenCapsules: c,
            personalizedCarousels: l,
            bShowSeeMoreHint: _,
            bUseGamepadLinkHint: !0,
            eGamepadLinkHintButton: `X`,
            onLinkResolved: (e) => p(e ?? void 0),
          }),
          g
            ? (0, K.jsx)(le, {
                label: L(`#EventBrowse_AllEventsBtn`),
                shown: _,
                button: `X`,
              })
            : (0, K.jsx)(kt, { event: t, section: n }),
        ],
      }),
      u,
      (0, K.jsx)(S, { section: n }),
    ],
  });
}
function kt(e) {
  let t = At(e.event, e.section);
  return t
    ? (0, K.jsx)(`div`, {
        className: C,
        children: (0, K.jsx)(Oe, {
          onClick: (e) => Se(e, t),
          children: L(`#EventBrowse_AllEventsBtn`),
        }),
      })
    : null;
}
function At(e, t) {
  let n = G.useMemo(
    () =>
      t.section_type == `events`
        ? De(`ch_newshub`, `application_config`)
        : void 0,
    [t.section_type],
  );
  if (t.hide_view_all_events_link) return;
  let r = null;
  if (t.section_type == `events`) {
    if (!n || !e.BUsesContentHubForItemSource() || !M(t)) return;
    r = B.STORE_BASE_URL + `news/` + n;
  } else
    t.section_type == `sale_events`
      ? (r = B.STORE_BASE_URL + `news/collection/sales/`)
      : t.section_type == `calendar` &&
        (r = B.STORE_BASE_URL + `personalcalendar`);
  return r ?? void 0;
}
function jt(e) {
  let { saleEvent: t, section: n, bInGamepadUI: r } = e,
    i = {
      ...e,
      bShowAsCarousel: O(n),
      bAutoAdvance: !!n.carousel_auto_advance,
      bHideIfTooFewItems: !!n.hide_section_if_too_few_items,
      ...re(t.jsondata),
    },
    a = J(n, i.nShowAdditionalRows),
    o = Ze(X(n, r), a, i.capsules?.length ?? 0);
  return (o < a && M(n) && (i.nShowAdditionalRows -= a - o), i);
}
var Mt = `NQebVMQULto-`;
function Nt(e) {
  let {
      section: t,
      nRowsWithNext: n,
      nCapsules: r,
      rgRowSizes: i,
      bLoading: a,
      onShowMore: o,
    } = e,
    s = Ze(i, n, r) < n;
  return (0, K.jsx)(`div`, {
    className: W(Mt, `ShowContentsContainer`),
    children: a
      ? (0, K.jsx)(de, { size: `small`, string: L(`#Loading`) })
      : !s &&
        t.cap_section_content &&
        (0, K.jsx)(Me, {
          onClick: o,
          className: W(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: L(`#Sale_ShowMore`),
        }),
  });
}
function Pt(e) {
  return Math.max(J(e, 0), 4);
}
function Ft(e, t, n = ``, r = 0) {
  if (e.enable_faceted_browsing && r > 0)
    return { feature: `salefacetbrowse` + n, depth: r };
  if (M(e) && e.section_type != `crosspromotesalepage`) {
    let r = j(e);
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
            depth: l(e, t).nSectionIndex,
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
function It(e) {
  let { language: t, link: n } = e,
    i = Te(),
    [a, o, s] = r(() => [
      we.GetWithFallback(n.localized_link_capsule, t),
      i ? n.sc_url : n.url,
      n.materialized_link_capsule,
    ]),
    c = a ? ne.GenerateURLFromHashAndExt(e.clanAccountID, a) : void 0;
  return (0, K.jsx)(y, {
    url: o,
    className: e.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!n.open_in_place,
    children: (0, K.jsxs)(`div`, {
      className: W(g, e.link.url ? b : ``),
      children: [
        !!c && (0, K.jsx)(ae, { className: `_-4JZsb8K2FY-`, src: c }),
        !!s &&
          (0, K.jsx)(`img`, { className: `_-4JZsb8K2FY-`, src: s, alt: o }),
      ],
    }),
  });
}
export {
  Xe as C,
  Ne as D,
  Ie as E,
  Pe as O,
  J as S,
  Fe as T,
  lt as _,
  Ot as a,
  Qe as b,
  pt as c,
  X as d,
  Y as f,
  ct as g,
  bt as h,
  jt as i,
  ht as l,
  Tt as m,
  Pt as n,
  Et as o,
  Ct as p,
  Nt as r,
  mt as s,
  Ft as t,
  Z as u,
  st as v,
  Je as w,
  $e as x,
  ot as y,
};
