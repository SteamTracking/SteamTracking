/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, l as r } from "./chunk~01cfc309bf.js";
import {
  En as i,
  Fo as a,
  Jt as o,
  N as s,
  Nn as c,
  On as l,
  Qt as u,
  Yo as d,
  _n as f,
  an as p,
  ar as m,
  cn as h,
  dn as ee,
  i as g,
  in as _,
  lo as v,
  lr as y,
  on as b,
  pn as x,
  r as S,
  sn as C,
  x as w,
} from "./chunk~6b8ddcaac8.js";
import {
  A as T,
  D as E,
  I as D,
  O as te,
  c as ne,
  j as O,
  s as k,
  st as re,
  w as A,
} from "./chunk~f57d770d64.js";
import { o as j } from "./chunk~961c06e93e.js";
import {
  m as ie,
  n as ae,
  p as oe,
  r as se,
  s as ce,
  u as le,
} from "./chunk~4eed35ad1f.js";
import { r as ue } from "./chunk~5adf866415.js";
import { i as M } from "./chunk~2f085f1384.js";
import { n as de, t as N } from "./chunk~f4c928a27a.js";
import { t as fe } from "./chunk~eefd71512b.js";
import { i as pe } from "./chunk~e867464c75.js";
import { t as P } from "./chunk~4e9767668d.js";
import { O as me, n as he, t as ge } from "./chunk~2f8c67b4de.js";
import { f as _e } from "./chunk~618fb52a90.js";
import { r as F } from "./chunk~21cdc464a1.js";
import { n as ve } from "./chunk~710e3cfd2f.js";
import { n as ye, r as be } from "./chunk~3ea79bd96d.js";
import { l as xe, m as Se } from "./chunk~3720b337f3.js";
import {
  $y as Ce,
  Cr as we,
  Dl as Te,
  Nr as Ee,
  Pc as I,
  Vc as De,
  Vx as Oe,
  Wv as ke,
  Zb as Ae,
  _l as je,
  ex as Me,
  fl as Ne,
  gt as Pe,
  ib as L,
  ny as Fe,
  rx as Ie,
  un as Le,
  ux as Re,
  vx as R,
} from "./main.js";
var z = e(t()),
  B = n();
function ze(e, t) {
  return e == null || e == null || !Ue(t)
    ? !0
    : t.reverse_show_on_tabs
      ? !(!t.show_on_tabs || t.show_on_tabs.includes(e))
      : !!(t.show_on_tabs && t.show_on_tabs.includes(e));
}
function Be(e) {
  return e.template_tab_id ?? e.unique_id;
}
function Ve(e) {
  return V(e, `[Feature] Adult Only Sexual Content`);
}
function He(e) {
  return V(e, `[Feature] Coming Soon`);
}
function V(e, t) {
  if (e?.sale_tag_filter?.clauses?.length == 1) {
    let n = e.sale_tag_filter.clauses[0];
    return (
      n.type === `Must have` && n.or_tags.length === 1 && n.or_tags[0] === t
    );
  }
  return !1;
}
function Ue(e) {
  return !!(
    e.show_on_tabs &&
    e.show_on_tabs.length > 0 &&
    !e.diable_tab_id_filtering
  );
}
function We(e, t) {
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
function H(e, t, n) {
  let r = n,
    i = 0;
  for (i = 0; i < t; i++) {
    let t = e[i % e.length];
    if (r < t) break;
    r -= t;
  }
  return i;
}
function Ge(e, t) {
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
function U(e, t) {
  if (T(e)) return 0;
  let n = E(e);
  return n <= 0 ? 0 : n + t;
}
function Ke(e, t, n, r, i) {
  let a =
    `section_` +
    r +
    `_` +
    e.GID +
    (i || 0) +
    pe(t.unique_id ? t.unique_id.toString() : JSON.stringify(t)).toString();
  return (
    n &&
      e.rtime32_last_local_modification &&
      (a += `_` + e.rtime32_last_local_modification),
    a
  );
}
function qe(e) {
  let { id: t, type: n } = e,
    r = y({ id: t, type: n }),
    { data: i } = ke(r);
  return (0, B.jsx)(`div`, {
    className: d,
    children: (0, B.jsx)(N, {
      ...e,
      bShowReviewSummary: !0,
      bShowDemoButton: e.bShowDemoButton || i?.type == 1,
      bPreferDemoStorePage: e.bPreferDemoStorePage,
    }),
  });
}
var Je = `SppL95yx9BU-`,
  Ye = `_7Na7-QNyAn4-`,
  Xe = `zdh0LkaHoKw-`,
  Ze = `vZlB-C6RUio-`;
function Qe(e) {
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
    l = y({ id: t, type: n }),
    { data: u } = ke(l),
    { data: d } = Fe(l),
    [f, p] = ie(o, s),
    h = u?.item_type == 0;
  return (0, B.jsx)(oe, {
    appid: h ? u.id : void 0,
    children: (0, B.jsxs)(De, {
      "flow-children": `grid`,
      navEntryPreferPosition: Te.PREFERRED_CHILD,
      autoFocus: c,
      navKey: `purchase_only_` + u?.id,
      children: [
        `	`,
        (0, B.jsxs)(`div`, {
          className: Ye,
          children: [
            (0, B.jsx)(`div`, {
              className: void 0,
              children: (0, B.jsx)(`div`, { className: Je, children: u?.name }),
            }),
            (0, B.jsxs)(`div`, {
              className: Ze,
              children: [
                !a &&
                  u?.type != 10 &&
                  (0, B.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, B.jsx)(m, { id: l }),
                      !!(f && u?.item_type == 0 && d) &&
                        (0, B.jsx)(Le, {
                          eDisplay: p,
                          storeItemPlatform: d,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, B.jsx)(de, {
                  id: l,
                  className: Xe,
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
function W(e) {
  let { displayStyle: t, requestCompact: n, bNarrowScreen: r, ...i } = e,
    { type: a } = e,
    o = r ?? M(),
    s = Me();
  if (t === `purchaseonlydisplay`) return (0, B.jsx)(Qe, { ...i });
  if (s) return (0, B.jsx)(N, { ...i });
  if (n && !o) return (0, B.jsx)(qe, { ...i });
  if (a == `bundle` || a == `sub`) return (0, B.jsx)(N, { ...i });
  if (o && (t == `library` || t == `animated`))
    return (0, B.jsx)(N, { ...i, bShowReviewSummary: !0 });
  switch (t) {
    case `library`:
      return (0, B.jsx)(P, { ...i });
    case `animated`:
      return (0, B.jsx)(P, { ...i });
    default:
      return (0, B.jsx)(N, { ...i, bShowReviewSummary: !0 });
  }
}
function $e(e, t, n = M()) {
  return !(e === `purchaseonlydisplay` || t || n);
}
var et = `h4e3CZE5mfI-`,
  tt = `lJc7R9Bil2I-`,
  nt = `IS179RoYT1Q-`,
  rt = `SZeormjSwYo-`,
  G = 258;
function K(e, t) {
  return Y(e, t).every((e) => e === 1);
}
function q(e) {
  let t = !1,
    n = O(e);
  return (
    n && (t = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(n)),
    !!(t || e.show_parent_app)
  );
}
function J(e, t) {
  if (T(e)) return 0;
  let n = E(e);
  return n <= 0 ? 0 : n + t;
}
function Y(e, t) {
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
            return Oe(t, 1, r == `tall` ? 4 : 3);
          })
        : e.capsules_per_row_array
      : e.adaptive_capsules_per_row
        ? t
          ? [2, 3]
          : [2, 3, 4, 3]
        : [Oe(e.capsules_per_row || 1, 1, t ? 3 : 5) || 1];
}
function it(e, t, n) {
  let r = Y(e, n),
    i = T(e) ? te(e) : J(e, t),
    a = 0;
  for (let e = 0; e < i; e++) a += r[e % r.length];
  return a;
}
function X(e, t) {
  return e.capsule_style_per_row_array
    ? e.capsule_style_per_row_array
    : K(e, t)
      ? [`fullrow`]
      : [`grid`];
}
function at(e, t) {
  let { saleEvent: n, language: r, index: i, section: a } = t;
  return (0, B.jsx)(
    zt,
    {
      link: e,
      language: r,
      clanAccountID: n.clanSteamID.GetAccountID(),
      strClassName: f,
    },
    a.unique_id + `_` + i,
  );
}
var ot = z.createContext(void 0);
function st(e) {
  let t = z.useContext(ot)?.(e.capsule);
  return t === void 0 ? (0, B.jsx)(ye, { ...e }) : t;
}
function ct(e, t) {
  let {
    capsuleStyle: n,
    index: r,
    section: i,
    saleEvent: a,
    rowElements: o,
  } = t;
  if (j(e)) return null;
  let s = q(i),
    c = a.BUseSubscriptionLayout(),
    l = T(i) && !t.bIsSingleCapsule,
    u = We(i, t.activeTab),
    d = i.unique_id + `_` + r + `_` + e.type + `_` + e.id;
  if (n !== `fullrow`) {
    let a = I(l && `FolDBzXMW2I-`, l && n === `tall` && `E6LHQcm-39c-`);
    return (0, B.jsx)(
      `div`,
      {
        className: a,
        children: (0, B.jsx)(
          st,
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
    let n = i.single_item_style ? i.single_item_style : D,
      a;
    (`overrideNavigation` in e &&
      (a = (t) => (
        e.overrideNavigation(t),
        t && (t.preventDefault(), t.stopPropagation()),
        !1
      )),
      M() && (n == `library` || n == `animated`) && (n = `bordered`));
    let o = I({
      [_]: !l && n == `bordered`,
      [b]: l && n == `bordered`,
      [p]: l && n == `animated`,
      [be + r]: r === 0,
    });
    return (0, B.jsx)(
      `div`,
      {
        className: o,
        children: (0, B.jsx)(W, {
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
function lt(e, t, n, r, i, a, o, s, c) {
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
        O(e) === `sale_tabhub`
      ? (e.section_type === `title_image` &&
          e.title_image_selected === `title`) ||
        !n
        ? []
        : n.map((e) => ({ Render: (t) => at(e, t) }))
      : ne(e.section_type)
        ? t
          ? t.filter((e) => !j(e)).map((e) => ({ Render: (t) => ct(e, t) }))
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
function Z(e, t) {
  return t[e % t.length];
}
function Q(e, t) {
  return e === `tall` ? t + 1 : t;
}
var ut = 3;
function dt(e, t, n, r, i, a, o, s, c, l) {
  let {
    nMaxCapsulesPerRow: u,
    bScreenIsWide: d,
    nShowAdditionalRows: f,
    bShowAsCarousel: p,
    bAutoAdvance: m,
    bHideIfTooFewItems: ee,
    strCarouselKey: g,
    bPaginationPills: _,
    bDropShortLastCarouselPage: v,
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
    w = i,
    T = n.length;
  (_ &&
  d &&
  T > 1 &&
  T <= Math.min(4, u) &&
  (T < C[0] || (T > C[0] && (!p || a > 1)))
    ? ((C = [T]), (w = [`grid`]))
    : _ &&
      d &&
      p &&
      a > 1 &&
      T > C[0] &&
      T < ft(C, w, a, u, d) &&
      (C = Array.from({ length: a }, (e, t) => Math.floor((T + t) / a))),
    y && (u > 1 || w[0] == `tall`)
      ? (w = [`fullrow`])
      : _ && n.length === 2 && w[0] === `tall` && (w = [`grid`]));
  let E = p && (a <= 1 || (!!_ && !d)),
    D = Math.min(C[0], u);
  if (p && v) {
    let e = E ? D : ft(C, w, a, u, d);
    n = pt(n, e, !E);
  }
  if (E && n.length > D)
    x = (0, z.createElement)(
      F,
      {
        ...t,
        key: g,
        hideArrows: !d,
        visibleElements: D,
        className: I({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !l,
          ItemCount_4: C[0] == 4,
          [nt]:
            t && t.section && t.section.section_type == `creator_list_of_lists`,
        }),
        useTestScrollbar: !0,
        bLazyRenderChildren: !0,
        bAutoAdvance: !!m,
        hidePips: c,
        padded: !l,
        screenIsWide: d,
        navKey: e,
        lazyRenderPlaceholderWidth: G,
      },
      b(n, 0, n.length, D, Z(0, w)),
    );
  else {
    let e = o(f),
      r = !0;
    if (p) ((e = a), (r = E));
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
      let a = Z(0, w);
      for (let t = 0; (e == 0 || t < e) && l < n.length; t++) {
        (t == 0 || d) && (a = Z(t, w));
        let e = Q(a, u),
          r = Math.min(C[t % C.length], e),
          i = Math.min(r, n.length - l);
        if (i < r && t === 0) {
          if (ee) return { content: null, bAdditionalContent: !1 };
          r = Math.max(a === `tall` ? 3 : 2, i);
        }
        (s.push(
          (0, B.jsx)(
            ht,
            { nMaxItems: r, nItems: i, children: b(n, l, l + i, r, a) },
            `Row_` + t,
          ),
        ),
          (l += i));
      }
      if (r || (l >= n.length && i.length === 0)) break;
      let o = i.length || void 0;
      (i.push(
        (0, B.jsx)(
          `div`,
          { className: h, children: (0, B.jsx)(Pe, { depth: o, children: s }) },
          `Page_${t}`,
        ),
      ),
        (s = []));
    }
    i.length == 0
      ? ((S = n.length > l),
        (x = (0, B.jsx)(De, {
          "flow-children": `grid`,
          focusable: !1,
          children: s,
        })))
      : (x = (0, z.createElement)(
          F,
          {
            ...t,
            key: g,
            hideArrows: !d,
            visibleElements: 1,
            className: `SaleSectionCarousel`,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderWidth: G,
            hidePips: c,
            screenIsWide: d,
          },
          i,
        ));
  }
  return { content: x, bAdditionalContent: S };
}
function ft(e, t, n, r, i) {
  let a = 0;
  for (let o = 0; o < n; o++) {
    let n = Z(i ? o : 0, t);
    a += Math.min(e[o % e.length], Q(n, r));
  }
  return a;
}
function pt(e, t, n) {
  if (e.length <= t) return e;
  let r = n ? t - 1 : Math.min(t - 2, ut),
    i = e.length % t;
  return i === 0 || i > r ? e : e.slice(0, e.length - i);
}
function mt(e) {
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
      (!k(n) &&
        n.capsules_per_row_array?.length &&
        n.capsules_per_row_array[0] >= (n.capsules?.length || 0))) &&
      (n.carousel_rows = 1));
  let o = lt(
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
  let s = Y(n, i),
    c = X(n, i),
    l = te(n),
    u = (e) => J(n, e),
    d = { section: n, saleEvent: t, language: r, activeTab: a },
    f = { ...e, strCarouselKey: w(a?.GetTagSelection()) };
  return dt(n.unique_id, f, o, s, c, l, u, d, i);
}
var ht = (e) => {
  let { nMaxItems: t, nItems: n } = e,
    r = t - n,
    i = r % 2 == 0 ? `repeat(${t}, 1fr)` : `0.5fr repeat(${t - 1}, 1fr) 0.5fr`,
    a = null,
    o = null;
  if (r > 0) {
    let e = Math.floor((r + 1) / 2);
    ((a = []), (o = []));
    for (let t = 0; t < e; t++)
      (a.push((0, B.jsx)(`div`, {}, `front_` + t)),
        o.push((0, B.jsx)(`div`, {}, `back_` + t)));
  }
  return (0, B.jsxs)(`div`, {
    className: I(
      me,
      l,
      `SaleSectionContainer`,
      `center_row_trgt`,
      `ItemCount_` + t,
    ),
    style: { gridTemplateColumns: t > 1 ? i : void 0 },
    children: [a, e.children, o],
  });
};
function gt(e) {
  let { section: t, nMaxCapsulesPerRow: n, bInGamepadUI: r } = e,
    i = Z(0, X(t, r)),
    a = Math.min(Y(t, r)[0], Q(i, n)),
    o = I(
      rt,
      i === `tall` && `_9Xrgw1NkKg8-`,
      i === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, B.jsx)(ht, {
    nMaxItems: a,
    nItems: a,
    children: Array.from({ length: a }, (e, t) =>
      (0, B.jsx)(`div`, { className: o }, t),
    ),
  });
}
function _t(e) {
  let {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: a,
      placeholderHeight: s,
      nHiddenCapsules: l,
      personalizedCarousels: d,
      children: f,
    } = e,
    [p, m] = z.useState(void 0),
    h = $(t, n),
    g = a && !!h && !p,
    { bShowSeeMoreHint: _, panelProps: v } = se(g ? h : p, `X`);
  return (0, B.jsxs)(ve, {
    placeholderHeight: s,
    className: I({
      [i]: !0,
      [C]: T(n),
      [ee]: n.disable_background,
      [_e]: !0,
      SaleSectionForCustomCSS: !0,
      [n.sale_section_classname || ``]: !!n.sale_section_classname,
      [void 0]: n.background_repeat == `coverBlur`,
    }),
    rootMargin: ce,
    holdGamepadFocus: a,
    ...v,
    children: [
      (0, B.jsx)(`div`, {
        className: I(ge, n.background_repeat == `coverBlur` ? he : ``),
        style: o(n, t, a),
      }),
      (0, B.jsxs)(`div`, {
        className: c,
        children: [
          (0, B.jsx)(u, {
            section: n,
            event: t,
            language: r,
            nHiddenCapsules: l,
            personalizedCarousels: d,
            bShowSeeMoreHint: _,
            bUseGamepadLinkHint: !0,
            eGamepadLinkHintButton: `X`,
            onLinkResolved: (e) => m(e ?? void 0),
          }),
          g
            ? (0, B.jsx)(ae, {
                label: L(`#EventBrowse_AllEventsBtn`),
                shown: _,
                button: `X`,
              })
            : (0, B.jsx)(vt, { event: t, section: n }),
        ],
      }),
      f,
      (0, B.jsx)(S, { section: n }),
    ],
  });
}
function vt(e) {
  let t = $(e.event, e.section);
  return t
    ? (0, B.jsx)(`div`, {
        className: x,
        children: (0, B.jsx)(we, {
          onClick: (e) => Ee(e, t),
          children: L(`#EventBrowse_AllEventsBtn`),
        }),
      })
    : null;
}
function $(e, t) {
  let n = z.useMemo(
    () =>
      t.section_type == `events`
        ? Re(`ch_newshub`, `application_config`)
        : void 0,
    [t.section_type],
  );
  if (t.hide_view_all_events_link) return;
  let r = null;
  if (t.section_type == `events`) {
    if (!n || !e.BUsesContentHubForItemSource() || !k(t)) return;
    r = R.STORE_BASE_URL + `news/` + n;
  } else
    t.section_type == `sale_events`
      ? (r = R.STORE_BASE_URL + `news/collection/sales/`)
      : t.section_type == `calendar` &&
        (r = R.STORE_BASE_URL + `personalcalendar`);
  return r ?? void 0;
}
function yt(e) {
  let { saleEvent: t, section: n, bInGamepadUI: r } = e,
    i = {
      ...e,
      bShowAsCarousel: T(n),
      bAutoAdvance: !!n.carousel_auto_advance,
      bHideIfTooFewItems: !!n.hide_section_if_too_few_items,
      ...A(t.jsondata),
    },
    a = U(n, i.nShowAdditionalRows),
    o = H(Y(n, r), a, i.capsules?.length ?? 0);
  return (o < a && k(n) && (i.nShowAdditionalRows -= a - o), i);
}
var bt = `NQebVMQULto-`;
function xt(e) {
  let {
      section: t,
      nRowsWithNext: n,
      nCapsules: r,
      rgRowSizes: i,
      bLoading: a,
      onShowMore: o,
    } = e,
    s = H(i, n, r) < n;
  return (0, B.jsx)(`div`, {
    className: I(bt, `ShowContentsContainer`),
    children: a
      ? (0, B.jsx)(fe, { size: `small`, string: L(`#Loading`) })
      : !s &&
        t.cap_section_content &&
        (0, B.jsx)(je, {
          onClick: o,
          className: I(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: L(`#Sale_ShowMore`),
        }),
  });
}
function St(e) {
  return Math.max(U(e, 0), 4);
}
var Ct = {
  1: `salesmartdiscountreason-wishlist`,
  2: `salesmartdiscountreason-firsttimeonsale`,
  3: `salesmartdiscountreason-largestdiscount`,
  4: `salesmartdiscountreason-endingsoon`,
  5: `salesmartdiscountreason-newlyonsale`,
  6: `salesmartdiscountreason-wellreviewed`,
  7: `salesmartdiscountreason-topseller`,
  8: `salesmartdiscountreason-hotdeal`,
  9: `salesmartdiscountreason-deepdiscount`,
  10: `salesmartdiscountreason-popularinregion`,
  11: `salesmartdiscountreason-justupdated`,
};
function wt(e, t, n = ``, r = 0) {
  if (e.enable_faceted_browsing && r > 0)
    return { feature: `salefacetbrowse` + n, depth: r };
  if (k(e) && e.section_type != `crosspromotesalepage`) {
    let r = O(e);
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
            depth: s(e, t).nSectionIndex,
          };
        case `discount_reason`: {
          let t = e.smart_section_discount_reason;
          return {
            feature: ((t !== void 0 && Ct[t]) || `salesmartdiscountreason`) + n,
          };
        }
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
    case `vo_internal`:
      if (e.internal_section_data?.internal_type === `just_updated`)
        return { feature: Ct[11] + n };
  }
  return { feature: `salesection` + n };
}
var Tt = `partnereventaction/eventsummary`;
function Et(e) {
  let t = new URLSearchParams();
  return (
    t.set(`clan_account_id`, String(e.clanAccountID)),
    t.set(`event_gid`, e.strEventGID),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
var Dt = `partnereventaction/eventsummaries`;
function Ot(e) {
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
function kt(e) {
  return Ot(e)
    .map((e) => `${e.clanAccountID}:${e.strEventGID}`)
    .join(`,`);
}
function At(e) {
  let t = new URLSearchParams();
  return (
    t.set(`events`, kt(e.rgEvents)),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
async function jt(e) {
  let t = `${Ie.STORE_BASE_URL}${Tt}?${Et(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summary ?? null;
}
async function Mt(e) {
  if (e.rgEvents.length === 0) return [];
  let t = `${Ie.STORE_BASE_URL}${Dt}?${At(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summaries ?? [];
}
function Nt(e, t, n) {
  return [`PartnerEventSummary`, e, t, n];
}
function Pt(e, t) {
  return {
    queryKey: Nt(e.clanAccountID, e.strEventGID, e.eLanguage),
    queryFn: () => jt(e),
    select: t,
    staleTime: 6e5,
  };
}
function Ft(e) {
  return [`PartnerEventSummaries`, e.eLanguage, kt(e.rgEvents)];
}
function It(e) {
  return { queryKey: Ft(e), queryFn: () => Mt(e), staleTime: 3e5 };
}
function Lt(e) {
  let { event: t, section: n, rgSlides: r, onSlide: a, onNavIntent: o } = e,
    s = Me(),
    { bScreenIsWide: c } = le(n.section_type);
  return r.length === 0
    ? null
    : r.length === 1
      ? (0, B.jsx)(B.Fragment, { children: r[0] })
      : !c || s
        ? (0, B.jsx)(`div`, {
            className: Se,
            children: r.map((e, t) =>
              (0, B.jsx)(Rt, { nSlide: t, onSlide: a, children: e }, t),
            ),
          })
        : (0, B.jsx)(`div`, {
            className: I(i, xe),
            children: (0, B.jsx)(F, {
              ...A(t.jsondata),
              visibleElements: 1,
              screenIsWide: !0,
              useTestScrollbar: !0,
              navKey: n.unique_id,
              onSlide: a,
              onNavIntent: o,
              children: r,
            }),
          });
}
function Rt(e) {
  let { nSlide: t, onSlide: n, children: r } = e,
    i = Ne({ onEnter: () => n?.(t) });
  return (0, B.jsx)(`div`, { ref: i, children: r });
}
function zt(e) {
  let { language: t, link: n } = e,
    i = Ae(),
    [o, s, c] = r(() => [
      Ce.GetWithFallback(n.localized_link_capsule, t),
      i ? n.sc_url : n.url,
      n.materialized_link_capsule,
    ]),
    l = o ? re.GenerateURLFromHashAndExt(e.clanAccountID, o) : void 0;
  return (0, B.jsx)(g, {
    url: s,
    className: e.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!n.open_in_place,
    children: (0, B.jsxs)(`div`, {
      className: I(v, e.link.url ? a : ``),
      children: [
        !!l && (0, B.jsx)(ue, { className: `_-4JZsb8K2FY-`, src: l }),
        !!c &&
          (0, B.jsx)(`img`, { className: `_-4JZsb8K2FY-`, src: c, alt: s }),
      ],
    }),
  });
}
export {
  Ge as C,
  He as D,
  Ve as E,
  ze as O,
  W as S,
  U as T,
  dt as _,
  St as a,
  tt as b,
  _t as c,
  it as d,
  X as f,
  gt as g,
  mt as h,
  wt as i,
  Be as k,
  q as l,
  J as m,
  It as n,
  xt as o,
  Y as p,
  Pt as r,
  yt as s,
  Lt as t,
  K as u,
  ot as v,
  Ke as w,
  $e as x,
  et as y,
};
