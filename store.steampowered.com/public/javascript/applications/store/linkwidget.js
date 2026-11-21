/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, u as r } from "./chunk~01cfc309bf.js";
import {
  $t as i,
  Bo as a,
  Bt as o,
  Eo as s,
  It as c,
  Jt as l,
  Kt as u,
  M as d,
  Xt as f,
  Yt as p,
  Zn as m,
  an as h,
  b as g,
  eo as _,
  er as v,
  gn as y,
  i as b,
  mn as x,
  qn as S,
  qt as C,
  r as w,
  tn as T,
  tr as E,
  xn as D,
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
import { n as oe, r as se, s as ce, u as le } from "./chunk~4eed35ad1f.js";
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
  $b as Se,
  Bc as Ce,
  Bx as we,
  Cr as Te,
  El as Ee,
  Nc as L,
  Nr as De,
  Qy as Oe,
  Uv as ke,
  Xb as Ae,
  _x as R,
  dl as je,
  gl as Me,
  gt as Ne,
  lx as Pe,
  nx as Fe,
  rb as z,
  ty as Ie,
  un as Le,
} from "./main.js";
var B = e(t()),
  V = n();
function Re(e, t) {
  return e == null || e == null || !He(t)
    ? !0
    : t.reverse_show_on_tabs
      ? !(!t.show_on_tabs || t.show_on_tabs.includes(e))
      : !!(t.show_on_tabs && t.show_on_tabs.includes(e));
}
function ze(e) {
  return e.template_tab_id ?? e.unique_id;
}
function Be(e) {
  return H(e, `[Feature] Adult Only Sexual Content`);
}
function Ve(e) {
  return H(e, `[Feature] Coming Soon`);
}
function H(e, t) {
  if (e?.sale_tag_filter?.clauses?.length == 1) {
    let n = e.sale_tag_filter.clauses[0];
    return (
      n.type === `Must have` && n.or_tags.length === 1 && n.or_tags[0] === t
    );
  }
  return !1;
}
function He(e) {
  return !!(
    e.show_on_tabs &&
    e.show_on_tabs.length > 0 &&
    !e.diable_tab_id_filtering
  );
}
function Ue(e, t) {
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
function U(e, t, n) {
  let r = n,
    i = 0;
  for (i = 0; i < t; i++) {
    let t = e[i % e.length];
    if (r < t) break;
    r -= t;
  }
  return i;
}
function We(e, t) {
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
function W(e, t) {
  if (O(e)) return 0;
  let n = k(e);
  return n <= 0 ? 0 : n + t;
}
function Ge(e, t, n, r, i) {
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
function Ke(e) {
  let { id: t, type: n } = e,
    r = m({ id: t, type: n }),
    { data: i } = ke(r);
  return (0, V.jsx)(`div`, {
    className: a,
    children: (0, V.jsx)(P, {
      ...e,
      bShowReviewSummary: !0,
      bShowDemoButton: e.bShowDemoButton || i?.type == 1,
      bPreferDemoStorePage: e.bPreferDemoStorePage,
    }),
  });
}
var qe = `SppL95yx9BU-`,
  Je = `_7Na7-QNyAn4-`,
  Ye = `zdh0LkaHoKw-`,
  Xe = `vZlB-C6RUio-`;
function Ze(e) {
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
    l = m({ id: t, type: n }),
    { data: u } = ke(l),
    { data: d } = Ie(l),
    [f, p] = E(o, s),
    h = u?.item_type == 0;
  return (0, V.jsx)(v, {
    appid: h ? u.id : void 0,
    children: (0, V.jsxs)(Ce, {
      "flow-children": `grid`,
      navEntryPreferPosition: Ee.PREFERRED_CHILD,
      autoFocus: c,
      navKey: `purchase_only_` + u?.id,
      children: [
        `	`,
        (0, V.jsxs)(`div`, {
          className: Je,
          children: [
            (0, V.jsx)(`div`, {
              className: void 0,
              children: (0, V.jsx)(`div`, { className: qe, children: u?.name }),
            }),
            (0, V.jsxs)(`div`, {
              className: Xe,
              children: [
                !a &&
                  u?.type != 10 &&
                  (0, V.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, V.jsx)(S, { id: l }),
                      !!(f && u?.item_type == 0 && d) &&
                        (0, V.jsx)(Le, {
                          eDisplay: p,
                          storeItemPlatform: d,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, V.jsx)(ue, {
                  id: l,
                  className: Ye,
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
function G(e) {
  let { displayStyle: t, requestCompact: n, bNarrowScreen: r, ...i } = e,
    { type: a } = e,
    o = r ?? N(),
    s = Se();
  if (t === `purchaseonlydisplay`) return (0, V.jsx)(Ze, { ...i });
  if (s) return (0, V.jsx)(P, { ...i });
  if (n && !o) return (0, V.jsx)(Ke, { ...i });
  if (a == `bundle` || a == `sub`) return (0, V.jsx)(P, { ...i });
  if (o && (t == `library` || t == `animated`))
    return (0, V.jsx)(P, { ...i, bShowReviewSummary: !0 });
  switch (t) {
    case `library`:
      return (0, V.jsx)(F, { ...i });
    case `animated`:
      return (0, V.jsx)(F, { ...i });
    default:
      return (0, V.jsx)(P, { ...i, bShowReviewSummary: !0 });
  }
}
function Qe(e, t, n = N()) {
  return !(e === `purchaseonlydisplay` || t || n);
}
var $e = `h4e3CZE5mfI-`,
  et = `lJc7R9Bil2I-`,
  tt = `IS179RoYT1Q-`,
  nt = `SZeormjSwYo-`,
  K = 258;
function q(e, t) {
  return Y(e, t).every((e) => e === 1);
}
function rt(e) {
  let t = !1,
    n = j(e);
  return (
    n && (t = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(n)),
    !!(t || e.show_parent_app)
  );
}
function J(e, t) {
  if (O(e)) return 0;
  let n = k(e);
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
            return we(t, 1, r == `tall` ? 4 : 3);
          })
        : e.capsules_per_row_array
      : e.adaptive_capsules_per_row
        ? t
          ? [2, 3]
          : [2, 3, 4, 3]
        : [we(e.capsules_per_row || 1, 1, t ? 3 : 5) || 1];
}
function it(e, t, n) {
  let r = Y(e, n),
    i = O(e) ? A(e) : J(e, t),
    a = 0;
  for (let e = 0; e < i; e++) a += r[e % r.length];
  return a;
}
function X(e, t) {
  return e.capsule_style_per_row_array
    ? e.capsule_style_per_row_array
    : q(e, t)
      ? [`fullrow`]
      : [`grid`];
}
function at(e, t) {
  let { saleEvent: n, language: r, index: i, section: a } = t;
  return (0, V.jsx)(
    It,
    {
      link: e,
      language: r,
      clanAccountID: n.clanSteamID.GetAccountID(),
      strClassName: h,
    },
    a.unique_id + `_` + i,
  );
}
function ot(e, t) {
  let {
    capsuleStyle: n,
    index: r,
    section: i,
    saleEvent: a,
    rowElements: o,
  } = t;
  if (ie(e)) return null;
  let s = rt(i),
    c = a.BUseSubscriptionLayout(),
    d = O(i) && !t.bIsSingleCapsule,
    f = Ue(i, t.activeTab),
    p = i.unique_id + `_` + r + `_` + e.type + `_` + e.id;
  if (n !== `fullrow`) {
    let a = L(d && `FolDBzXMW2I-`, d && n === `tall` && `E6LHQcm-39c-`);
    return (0, V.jsx)(
      `div`,
      {
        className: a,
        children: (0, V.jsx)(
          ve,
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
            eHardwareCompatibilityDisplay: f,
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
    let o = L({
      [u]: !d && n == `bordered`,
      [l]: d && n == `bordered`,
      [C]: d && n == `animated`,
      [ye + r]: r === 0,
    });
    return (0, V.jsx)(
      `div`,
      {
        className: o,
        children: (0, V.jsx)(G, {
          id: e.id,
          type: e.type,
          displayStyle: n,
          bShowPurchaseOptionsButton: i.show_purchase_options,
          bUseSubscriptionLayout: c,
          bShowDemoButton:
            i.show_as_demos || t.activeTab?.BFilterRequiresFeatureDemo(),
          bPreferDemoStorePage: i.prefer_demo_store_page,
          bHidePrice: i.hide_prices,
          eHardwareCompatibilityDisplay: f,
          fnOnClickOverride: a,
          bPreferAssetWithoutOverride: !!i.prefer_assets_without_overrides,
        }),
      },
      p,
    );
  }
}
function st(e, t, n, r, i, a, o, s, c) {
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
        : n.map((e) => ({ Render: (t) => at(e, t) }))
      : te(e.section_type)
        ? t
          ? t.filter((e) => !ie(e)).map((e) => ({ Render: (t) => ot(e, t) }))
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
var ct = 3;
function lt(e, t, n, r, i, a, o, s, c, l) {
  let {
    nMaxCapsulesPerRow: u,
    bScreenIsWide: d,
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
    T = i,
    E = n.length;
  (v &&
    d &&
    E > 1 &&
    E <= Math.min(4, u) &&
    E > w[0] &&
    (!m || a > 1) &&
    ((w = [E]), (T = [`grid`])),
    b && (u > 1 || T[0] == `tall`)
      ? (T = [`fullrow`])
      : v && n.length === 2 && T[0] === `tall` && (T = [`grid`]));
  let D = m && (a <= 1 || (!!v && !d)),
    O = Math.min(w[0], u);
  if (m && y) {
    let e = D ? O : ut(w, T, a, u, d);
    n = dt(n, e);
  }
  if (D && n.length > O)
    S = (0, B.createElement)(
      I,
      {
        ...t,
        key: _,
        hideArrows: !d,
        visibleElements: O,
        className: L({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !l,
          ItemCount_4: w[0] == 4,
          [tt]:
            t && t.section && t.section.section_type == `creator_list_of_lists`,
        }),
        useTestScrollbar: !0,
        bLazyRenderChildren: !0,
        bAutoAdvance: !!h,
        hidePips: c,
        padded: !l,
        screenIsWide: d,
        navKey: e,
        lazyRenderPlaceholderWidth: K,
      },
      x(n, 0, n.length, O, Z(0, T)),
    );
  else {
    let e = o(p),
      r = !0;
    if (m) ((e = a), (r = D));
    else if (p == 0 && e > 0) {
      let t = 0,
        r = 0;
      for (; t < e && r < n.length; t++) {
        let e = Math.min(w[t % w.length], u);
        r += e;
      }
      e = Math.max(2, t);
    }
    let i = [],
      s = [],
      l = 0;
    for (let t = 0; l < n.length; t++) {
      let a = Z(0, T);
      for (let t = 0; (e == 0 || t < e) && l < n.length; t++) {
        (t == 0 || d) && (a = Z(t, T));
        let e = Q(a, u),
          r = Math.min(w[t % w.length], e),
          i = Math.min(r, n.length - l);
        if (i < r && t === 0) {
          if (g) return { content: null, bAdditionalContent: !1 };
          r = Math.max(a === `tall` ? 3 : 2, i);
        }
        (s.push(
          (0, V.jsx)(
            pt,
            { nMaxItems: r, nItems: i, children: x(n, l, l + i, r, a) },
            `Row_` + t,
          ),
        ),
          (l += i));
      }
      if (r || (l >= n.length && i.length === 0)) break;
      let o = i.length || void 0;
      (i.push(
        (0, V.jsx)(
          `div`,
          { className: f, children: (0, V.jsx)(Ne, { depth: o, children: s }) },
          `Page_${t}`,
        ),
      ),
        (s = []));
    }
    i.length == 0
      ? ((C = n.length > l),
        (S = (0, V.jsx)(Ce, {
          "flow-children": `grid`,
          focusable: !1,
          children: s,
        })))
      : (S = (0, B.createElement)(
          I,
          {
            ...t,
            key: _,
            hideArrows: !d,
            visibleElements: 1,
            className: `SaleSectionCarousel`,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderWidth: K,
            hidePips: c,
            screenIsWide: d,
          },
          i,
        ));
  }
  return { content: S, bAdditionalContent: C };
}
function ut(e, t, n, r, i) {
  let a = 0;
  for (let o = 0; o < n; o++) {
    let n = Z(i ? o : 0, t);
    a += Math.min(e[o % e.length], Q(n, r));
  }
  return a;
}
function dt(e, t) {
  if (e.length <= t) return e;
  let n = Math.min(t - 2, ct),
    r = e.length % t;
  return r === 0 || r > n ? e : e.slice(0, e.length - r);
}
function ft(e) {
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
  let o = st(
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
    l = A(n),
    u = (e) => J(n, e),
    d = { section: n, saleEvent: t, language: r, activeTab: a },
    f = { ...e, strCarouselKey: g(a?.GetTagSelection()) };
  return lt(n.unique_id, f, o, s, c, l, u, d, i);
}
var pt = (e) => {
  let { nMaxItems: t, nItems: n } = e,
    r = t - n,
    i = r % 2 == 0 ? `repeat(${t}, 1fr)` : `0.5fr repeat(${t - 1}, 1fr) 0.5fr`,
    a = null,
    o = null;
  if (r > 0) {
    let e = Math.floor((r + 1) / 2);
    ((a = []), (o = []));
    for (let t = 0; t < e; t++)
      (a.push((0, V.jsx)(`div`, {}, `front_` + t)),
        o.push((0, V.jsx)(`div`, {}, `back_` + t)));
  }
  return (0, V.jsxs)(`div`, {
    className: L(
      pe,
      y,
      `SaleSectionContainer`,
      `center_row_trgt`,
      `ItemCount_` + t,
    ),
    style: { gridTemplateColumns: t > 1 ? i : void 0 },
    children: [a, e.children, o],
  });
};
function mt(e) {
  let { section: t, nMaxCapsulesPerRow: n, bInGamepadUI: r } = e,
    i = Z(0, X(t, r)),
    a = Math.min(Y(t, r)[0], Q(i, n)),
    o = L(
      nt,
      i === `tall` && `_9Xrgw1NkKg8-`,
      i === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, V.jsx)(pt, {
    nMaxItems: a,
    nItems: a,
    children: Array.from({ length: a }, (e, t) =>
      (0, V.jsx)(`div`, { className: o }, t),
    ),
  });
}
function ht(e) {
  let {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: a,
      placeholderHeight: s,
      nHiddenCapsules: l,
      personalizedCarousels: u,
      children: d,
    } = e,
    [f, m] = B.useState(void 0),
    h = _t(t, n),
    g = a && !!h && !f,
    { bShowSeeMoreHint: _, panelProps: v } = se(g ? h : f, `X`);
  return (0, V.jsxs)(_e, {
    placeholderHeight: s,
    className: L({
      [x]: !0,
      [p]: O(n),
      [i]: n.disable_background,
      [ge]: !0,
      SaleSectionForCustomCSS: !0,
      [n.sale_section_classname || ``]: !!n.sale_section_classname,
      [void 0]: n.background_repeat == `coverBlur`,
    }),
    rootMargin: ce,
    holdGamepadFocus: a,
    ...v,
    children: [
      (0, V.jsx)(`div`, {
        className: L(he, n.background_repeat == `coverBlur` ? me : ``),
        style: c(n, t, a),
      }),
      (0, V.jsxs)(`div`, {
        className: D,
        children: [
          (0, V.jsx)(o, {
            section: n,
            event: t,
            language: r,
            nHiddenCapsules: l,
            personalizedCarousels: u,
            bShowSeeMoreHint: _,
            bUseGamepadLinkHint: !0,
            eGamepadLinkHintButton: `X`,
            onLinkResolved: (e) => m(e ?? void 0),
          }),
          g
            ? (0, V.jsx)(oe, {
                label: z(`#EventBrowse_AllEventsBtn`),
                shown: _,
                button: `X`,
              })
            : (0, V.jsx)(gt, { event: t, section: n }),
        ],
      }),
      d,
      (0, V.jsx)(w, { section: n }),
    ],
  });
}
function gt(e) {
  let t = _t(e.event, e.section);
  return t
    ? (0, V.jsx)(`div`, {
        className: T,
        children: (0, V.jsx)(Te, {
          onClick: (e) => De(e, t),
          children: z(`#EventBrowse_AllEventsBtn`),
        }),
      })
    : null;
}
function _t(e, t) {
  let n = B.useMemo(
    () =>
      t.section_type == `events`
        ? Pe(`ch_newshub`, `application_config`)
        : void 0,
    [t.section_type],
  );
  if (t.hide_view_all_events_link) return;
  let r = null;
  if (t.section_type == `events`) {
    if (!n || !e.BUsesContentHubForItemSource() || !M(t)) return;
    r = R.STORE_BASE_URL + `news/` + n;
  } else
    t.section_type == `sale_events`
      ? (r = R.STORE_BASE_URL + `news/collection/sales/`)
      : t.section_type == `calendar` &&
        (r = R.STORE_BASE_URL + `personalcalendar`);
  return r ?? void 0;
}
function vt(e) {
  let { saleEvent: t, section: n, bInGamepadUI: r } = e,
    i = {
      ...e,
      bShowAsCarousel: O(n),
      bAutoAdvance: !!n.carousel_auto_advance,
      bHideIfTooFewItems: !!n.hide_section_if_too_few_items,
      ...re(t.jsondata),
    },
    a = W(n, i.nShowAdditionalRows),
    o = U(Y(n, r), a, i.capsules?.length ?? 0);
  return (o < a && M(n) && (i.nShowAdditionalRows -= a - o), i);
}
var yt = `NQebVMQULto-`;
function bt(e) {
  let {
      section: t,
      nRowsWithNext: n,
      nCapsules: r,
      rgRowSizes: i,
      bLoading: a,
      onShowMore: o,
    } = e,
    s = U(i, n, r) < n;
  return (0, V.jsx)(`div`, {
    className: L(yt, `ShowContentsContainer`),
    children: a
      ? (0, V.jsx)(de, { size: `small`, string: z(`#Loading`) })
      : !s &&
        t.cap_section_content &&
        (0, V.jsx)(Me, {
          onClick: o,
          className: L(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: z(`#Sale_ShowMore`),
        }),
  });
}
function xt(e) {
  return Math.max(W(e, 0), 4);
}
function St(e, t, n = ``, r = 0) {
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
            depth: d(e, t).nSectionIndex,
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
var Ct = `partnereventaction/eventsummary`;
function wt(e) {
  let t = new URLSearchParams();
  return (
    t.set(`clan_account_id`, String(e.clanAccountID)),
    t.set(`event_gid`, e.strEventGID),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
var Tt = `partnereventaction/eventsummaries`;
function Et(e) {
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
function $(e) {
  return Et(e)
    .map((e) => `${e.clanAccountID}:${e.strEventGID}`)
    .join(`,`);
}
function Dt(e) {
  let t = new URLSearchParams();
  return (
    t.set(`events`, $(e.rgEvents)),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
async function Ot(e) {
  let t = `${Fe.STORE_BASE_URL}${Ct}?${wt(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summary ?? null;
}
async function kt(e) {
  if (e.rgEvents.length === 0) return [];
  let t = `${Fe.STORE_BASE_URL}${Tt}?${Dt(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summaries ?? [];
}
function At(e, t, n) {
  return [`PartnerEventSummary`, e, t, n];
}
function jt(e, t) {
  return {
    queryKey: At(e.clanAccountID, e.strEventGID, e.eLanguage),
    queryFn: () => Ot(e),
    select: t,
    staleTime: 6e5,
  };
}
function Mt(e) {
  return [`PartnerEventSummaries`, e.eLanguage, $(e.rgEvents)];
}
function Nt(e) {
  return { queryKey: Mt(e), queryFn: () => kt(e), staleTime: 3e5 };
}
function Pt(e) {
  let { event: t, section: n, rgSlides: r, onSlide: i, onNavIntent: a } = e,
    o = Se(),
    { bScreenIsWide: s } = le(n.section_type);
  return r.length === 0
    ? null
    : r.length === 1
      ? (0, V.jsx)(V.Fragment, { children: r[0] })
      : !s || o
        ? (0, V.jsx)(`div`, {
            className: xe,
            children: r.map((e, t) =>
              (0, V.jsx)(Ft, { nSlide: t, onSlide: i, children: e }, t),
            ),
          })
        : (0, V.jsx)(`div`, {
            className: L(x, be),
            children: (0, V.jsx)(I, {
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
function Ft(e) {
  let { nSlide: t, onSlide: n, children: r } = e,
    i = je({ onEnter: () => n?.(t) });
  return (0, V.jsx)(`div`, { ref: i, children: r });
}
function It(e) {
  let { language: t, link: n } = e,
    i = Ae(),
    [a, o, c] = r(() => [
      Oe.GetWithFallback(n.localized_link_capsule, t),
      i ? n.sc_url : n.url,
      n.materialized_link_capsule,
    ]),
    l = a ? ne.GenerateURLFromHashAndExt(e.clanAccountID, a) : void 0;
  return (0, V.jsx)(b, {
    url: o,
    className: e.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!n.open_in_place,
    children: (0, V.jsxs)(`div`, {
      className: L(_, e.link.url ? s : ``),
      children: [
        !!l && (0, V.jsx)(ae, { className: `_-4JZsb8K2FY-`, src: l }),
        !!c &&
          (0, V.jsx)(`img`, { className: `_-4JZsb8K2FY-`, src: c, alt: o }),
      ],
    }),
  });
}
export {
  Ge as C,
  Re as D,
  Ve as E,
  ze as O,
  We as S,
  Be as T,
  lt as _,
  xt as a,
  Qe as b,
  ht as c,
  it as d,
  X as f,
  mt as g,
  ft as h,
  St as i,
  rt as l,
  J as m,
  Nt as n,
  bt as o,
  Y as p,
  jt as r,
  vt as s,
  Pt as t,
  q as u,
  $e as v,
  W as w,
  G as x,
  et as y,
};
