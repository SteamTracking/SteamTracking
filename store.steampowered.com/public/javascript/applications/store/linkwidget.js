/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, l as r } from "./chunk~01cfc309bf.js";
import {
  $t as i,
  Dn as a,
  Fn as o,
  Lo as s,
  N as c,
  Pn as l,
  Yt as u,
  Zo as d,
  an as f,
  cn as p,
  do as m,
  dr as h,
  fn as g,
  i as _,
  kn as v,
  ln as y,
  mn as b,
  on as x,
  r as S,
  sn as C,
  sr as w,
  vn as T,
  x as E,
} from "./chunk~6b8ddcaac8.js";
import {
  A as D,
  D as O,
  I as ee,
  O as k,
  c as te,
  j as A,
  s as j,
  st as ne,
  w as re,
} from "./chunk~f57d770d64.js";
import { o as ie } from "./chunk~961c06e93e.js";
import {
  m as ae,
  n as oe,
  p as se,
  r as ce,
  s as le,
  u as ue,
} from "./chunk~4eed35ad1f.js";
import { r as de } from "./chunk~5adf866415.js";
import { i as M } from "./chunk~2f085f1384.js";
import { n as fe, t as N } from "./chunk~f4c928a27a.js";
import { t as pe } from "./chunk~eefd71512b.js";
import { i as me } from "./chunk~e867464c75.js";
import { t as he } from "./chunk~4e9767668d.js";
import { O as ge, n as _e, t as ve } from "./chunk~2f8c67b4de.js";
import { f as ye } from "./chunk~618fb52a90.js";
import { r as P } from "./chunk~21cdc464a1.js";
import { n as be } from "./chunk~710e3cfd2f.js";
import { n as xe, r as Se } from "./chunk~3ea79bd96d.js";
import { l as Ce, m as we } from "./chunk~3720b337f3.js";
import {
  $y as Te,
  Cr as Ee,
  Dl as De,
  Nr as Oe,
  Pc as F,
  Vc as I,
  Vx as ke,
  Wv as Ae,
  Zb as je,
  _l as Me,
  ex as Ne,
  fl as Pe,
  gt as Fe,
  ib as L,
  ny as Ie,
  rx as Le,
  un as Re,
  ux as ze,
  vx as R,
} from "./main.js";
var z = e(t()),
  B = n();
function Be(e, t) {
  return e == null || e == null || !We(t)
    ? !0
    : t.reverse_show_on_tabs
      ? !(!t.show_on_tabs || t.show_on_tabs.includes(e))
      : !!(t.show_on_tabs && t.show_on_tabs.includes(e));
}
function Ve(e) {
  return e.template_tab_id ?? e.unique_id;
}
function He(e) {
  return V(e, `[Feature] Adult Only Sexual Content`);
}
function Ue(e) {
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
function We(e) {
  return !!(
    e.show_on_tabs &&
    e.show_on_tabs.length > 0 &&
    !e.diable_tab_id_filtering
  );
}
function Ge(e, t) {
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
function Ke(e, t) {
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
  if (D(e)) return 0;
  let n = O(e);
  return n <= 0 ? 0 : n + t;
}
function qe(e, t, n, r, i) {
  let a =
    `section_` +
    r +
    `_` +
    e.GID +
    (i || 0) +
    me(t.unique_id ? t.unique_id.toString() : JSON.stringify(t)).toString();
  return (
    n &&
      e.rtime32_last_local_modification &&
      (a += `_` + e.rtime32_last_local_modification),
    a
  );
}
function Je(e) {
  let { id: t, type: n } = e,
    r = h({ id: t, type: n }),
    { data: i } = Ae(r);
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
var Ye = `SppL95yx9BU-`,
  Xe = `_7Na7-QNyAn4-`,
  Ze = `zdh0LkaHoKw-`,
  Qe = `vZlB-C6RUio-`;
function $e(e) {
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
    l = h({ id: t, type: n }),
    { data: u } = Ae(l),
    { data: d } = Ie(l),
    [f, p] = ae(o, s),
    m = u?.item_type == 0;
  return (0, B.jsx)(se, {
    appid: m ? u.id : void 0,
    children: (0, B.jsxs)(I, {
      "flow-children": `grid`,
      navEntryPreferPosition: De.PREFERRED_CHILD,
      autoFocus: c,
      navKey: `purchase_only_` + u?.id,
      children: [
        `	`,
        (0, B.jsxs)(`div`, {
          className: Xe,
          children: [
            (0, B.jsx)(`div`, {
              className: void 0,
              children: (0, B.jsx)(`div`, { className: Ye, children: u?.name }),
            }),
            (0, B.jsxs)(`div`, {
              className: Qe,
              children: [
                !a &&
                  u?.type != 10 &&
                  (0, B.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, B.jsx)(w, { id: l }),
                      !!(f && u?.item_type == 0 && d) &&
                        (0, B.jsx)(Re, {
                          eDisplay: p,
                          storeItemPlatform: d,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, B.jsx)(fe, {
                  id: l,
                  className: Ze,
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
    s = Ne();
  if (t === `purchaseonlydisplay`) return (0, B.jsx)($e, { ...i });
  if (s) return (0, B.jsx)(N, { ...i });
  if (n && !o) return (0, B.jsx)(Je, { ...i });
  if (a == `bundle` || a == `sub`) return (0, B.jsx)(N, { ...i });
  if (o && (t == `library` || t == `animated`))
    return (0, B.jsx)(N, { ...i, bShowReviewSummary: !0 });
  switch (t) {
    case `library`:
      return (0, B.jsx)(he, { ...i });
    case `animated`:
      return (0, B.jsx)(he, { ...i });
    default:
      return (0, B.jsx)(N, { ...i, bShowReviewSummary: !0 });
  }
}
function et(e, t, n = M()) {
  return !(e === `purchaseonlydisplay` || t || n);
}
var tt = `h4e3CZE5mfI-`,
  nt = `lJc7R9Bil2I-`,
  rt = `IS179RoYT1Q-`,
  it = `SZeormjSwYo-`,
  G = 258;
function K(e, t) {
  return Y(e, t).every((e) => e === 1);
}
function q(e) {
  let t = !1,
    n = A(e);
  return (
    n && (t = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(n)),
    !!(t || e.show_parent_app)
  );
}
function J(e, t) {
  if (D(e)) return 0;
  let n = O(e);
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
            return ke(t, 1, r == `tall` ? 4 : 3);
          })
        : e.capsules_per_row_array
      : e.adaptive_capsules_per_row
        ? t
          ? [2, 3]
          : [2, 3, 4, 3]
        : [ke(e.capsules_per_row || 1, 1, t ? 3 : 5) || 1];
}
function at(e, t, n) {
  let r = Y(e, n),
    i = D(e) ? k(e) : J(e, t),
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
function ot(e, t) {
  let { saleEvent: n, language: r, index: i, section: a } = t;
  return (0, B.jsx)(
    Vt,
    {
      link: e,
      language: r,
      clanAccountID: n.clanSteamID.GetAccountID(),
      strClassName: T,
    },
    a.unique_id + `_` + i,
  );
}
var st = z.createContext(void 0);
function ct(e) {
  let t = z.useContext(st)?.(e.capsule);
  return t === void 0 ? (0, B.jsx)(xe, { ...e }) : t;
}
function lt(e, t) {
  let {
    capsuleStyle: n,
    index: r,
    section: i,
    saleEvent: a,
    rowElements: o,
  } = t;
  if (ie(e)) return null;
  let s = q(i),
    c = a.BUseSubscriptionLayout(),
    l = D(i) && !t.bIsSingleCapsule,
    u = Ge(i, t.activeTab),
    d = i.unique_id + `_` + r + `_` + e.type + `_` + e.id;
  if (n !== `fullrow`) {
    let a = F(l && `FolDBzXMW2I-`, l && n === `tall` && `E6LHQcm-39c-`);
    return (0, B.jsx)(
      `div`,
      {
        className: a,
        children: (0, B.jsx)(
          ct,
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
    let n = i.single_item_style ? i.single_item_style : ee,
      a;
    (`overrideNavigation` in e &&
      (a = (t) => (
        e.overrideNavigation(t),
        t && (t.preventDefault(), t.stopPropagation()),
        !1
      )),
      M() && (n == `library` || n == `animated`) && (n = `bordered`));
    let o = F({
      [f]: !l && n == `bordered`,
      [C]: l && n == `bordered`,
      [x]: l && n == `animated`,
      [Se + r]: r === 0,
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
function ut(e, t, n, r, i, a, o, s, c, l) {
  let {
    RenderEvent: u,
    RenderEventSummary: d,
    RenderItemDef: f,
    RenderLoyaltyReward: p,
    RenderCuratorList: m,
  } = c || {};
  return e.section_type === `events` || e.section_type === `sale_events`
    ? i && d
      ? i.map((e) => ({ Render: (t) => d(e, t) }))
      : !r || !u
        ? []
        : r.filter((e) => !!e).map((e) => ({ Render: (t) => u(e, t) }))
    : e.section_type === `links` ||
        e.section_type === `title_image` ||
        A(e) === `sale_tabhub`
      ? (e.section_type === `title_image` &&
          e.title_image_selected === `title`) ||
        !n
        ? []
        : n.map((e) => ({ Render: (t) => ot(e, t) }))
      : te(e.section_type)
        ? t
          ? t
              .filter((e) => !ie(e))
              .map((e) => ({ Render: (t) => lt(e, t), bNoTallArt: l?.(e) }))
          : []
        : e.section_type === `itemdef`
          ? !a || !f
            ? []
            : a.map((e) => ({ Render: (t) => f(e, t) }))
          : e.section_type === `point_shop_smart`
            ? !o || !p
              ? []
              : o.map((e) => ({ Render: (t) => p(e, t) }))
            : e.section_type === `creator_list_of_lists`
              ? !s || !m
                ? []
                : s.map((e) => ({ Render: (t) => m(e, t) }))
              : [];
}
function Z(e, t) {
  return t[e % t.length];
}
function Q(e, t) {
  return e === `tall` ? t + 1 : t;
}
var dt = 3;
function ft(e, t, n, r, i, a, o, s, c, l) {
  let {
    nMaxCapsulesPerRow: u,
    bScreenIsWide: d,
    nShowAdditionalRows: f,
    bShowAsCarousel: p,
    bAutoAdvance: m,
    bHideIfTooFewItems: h,
    strCarouselKey: g,
    bPaginationPills: _,
    bDropShortLastCarouselPage: v,
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
  (_ &&
  d &&
  E > 1 &&
  E <= Math.min(4, u) &&
  (E < w[0] || (E > w[0] && (!p || a > 1)))
    ? ((w = [E]), (T = [`grid`]))
    : _ &&
      d &&
      p &&
      a > 1 &&
      E > w[0] &&
      E < pt(w, T, a, u, d) &&
      (w = Array.from({ length: a }, (e, t) => Math.floor((E + t) / a))),
    b && (u > 1 || T[0] == `tall`)
      ? (T = [`fullrow`])
      : _ && n.length === 2 && T[0] === `tall` && (T = [`grid`]));
  let D = p && (a <= 1 || (!!_ && !d)),
    O = Math.min(w[0], u);
  if (
    (D &&
      !c &&
      T.every((e) => e === `tall`) &&
      n.length > O &&
      n.some((e) => e.bNoTallArt) &&
      (n = ht(n, d ? O : void 0)),
    p && v)
  ) {
    let e = D ? O : pt(w, T, a, u, d);
    n = mt(n, e, !D);
  }
  if (D && n.length > O)
    S = (0, z.createElement)(
      P,
      {
        ...t,
        key: g,
        hideArrows: !d,
        visibleElements: O,
        className: F({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !l,
          ItemCount_4: w[0] == 4,
          [rt]:
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
      x(n, 0, n.length, O, Z(0, T)),
    );
  else {
    let e = o(f),
      r = !0;
    if (p) ((e = a), (r = D));
    else if (f == 0 && e > 0) {
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
          if (h) return { content: null, bAdditionalContent: !1 };
          r = Math.max(a === `tall` ? 3 : 2, i);
        }
        (s.push(
          (0, B.jsx)(
            _t,
            { nMaxItems: r, nItems: i, children: x(n, l, l + i, r, a) },
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
          { className: y, children: (0, B.jsx)(Fe, { depth: o, children: s }) },
          `Page_${t}`,
        ),
      ),
        (s = []));
    }
    i.length == 0
      ? ((C = n.length > l),
        (S = (0, B.jsx)(I, {
          "flow-children": `grid`,
          focusable: !1,
          children: s,
        })))
      : (S = (0, z.createElement)(
          P,
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
  return { content: S, bAdditionalContent: C };
}
function pt(e, t, n, r, i) {
  let a = 0;
  for (let o = 0; o < n; o++) {
    let n = Z(i ? o : 0, t);
    a += Math.min(e[o % e.length], Q(n, r));
  }
  return a;
}
function mt(e, t, n) {
  if (e.length <= t) return e;
  let r = n ? t - 1 : Math.min(t - 2, dt),
    i = e.length % t;
  return i === 0 || i > r ? e : e.slice(0, e.length - i);
}
function ht(e, t) {
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t],
      i = r.bNoTallArt ? e[t + 1] : void 0;
    i
      ? (t++,
        n.push({
          column: {
            Render: (e) =>
              (0, B.jsxs)(
                `div`,
                {
                  className: o,
                  children: [
                    r.Render({ ...e, capsuleStyle: `grid` }),
                    i.Render({ ...e, capsuleStyle: `grid` }),
                  ],
                },
                `HalfColumn_` + e.index,
              ),
          },
          bHalf: !0,
        }))
      : n.push({ column: r, bHalf: !1 });
  }
  if (!t) return n.map((e) => e.column);
  let r = n.length > t ? n.length - (n.length % t) : n.length,
    i = [];
  for (let e = 0; e < r; e += t)
    i.push(
      ...n
        .slice(e, e + t)
        .sort((e, t) => Number(e.bHalf) - Number(t.bHalf))
        .map((e) => e.column),
    );
  return i;
}
function gt(e) {
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
  let o = ut(
    n,
    e.capsules,
    e.links,
    e.events,
    e.eventSummaries,
    e.itemdefs,
    e.rewards,
    e.curatorLists,
    e.renderers,
    e.fnBCapsuleHasNoTallArt,
  );
  if (o.length === 0) return { content: null, bAdditionalContent: !1 };
  let s = Y(n, i),
    c = X(n, i),
    l = k(n),
    u = (e) => J(n, e),
    d = { section: n, saleEvent: t, language: r, activeTab: a },
    f = { ...e, strCarouselKey: E(a?.GetTagSelection()) };
  return ft(n.unique_id, f, o, s, c, l, u, d, i);
}
var _t = (e) => {
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
    className: F(
      ge,
      v,
      `SaleSectionContainer`,
      `center_row_trgt`,
      `ItemCount_` + t,
    ),
    style: { gridTemplateColumns: t > 1 ? i : void 0 },
    children: [a, e.children, o],
  });
};
function vt(e) {
  let { section: t, nMaxCapsulesPerRow: n, bInGamepadUI: r } = e,
    i = Z(0, X(t, r)),
    a = Math.min(Y(t, r)[0], Q(i, n)),
    o = F(
      it,
      i === `tall` && `_9Xrgw1NkKg8-`,
      i === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, B.jsx)(_t, {
    nMaxItems: a,
    nItems: a,
    children: Array.from({ length: a }, (e, t) =>
      (0, B.jsx)(`div`, { className: o }, t),
    ),
  });
}
function yt(e) {
  let {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: o,
      placeholderHeight: s,
      nHiddenCapsules: c,
      personalizedCarousels: d,
      children: f,
    } = e,
    [m, h] = z.useState(void 0),
    _ = $(t, n),
    v = o && !!_ && !m,
    { bShowSeeMoreHint: y, panelProps: b } = ce(v ? _ : m, `X`);
  return (0, B.jsxs)(be, {
    placeholderHeight: s,
    className: F({
      [a]: !0,
      [p]: D(n),
      [g]: n.disable_background,
      [ye]: !0,
      SaleSectionForCustomCSS: !0,
      [n.sale_section_classname || ``]: !!n.sale_section_classname,
      [void 0]: n.background_repeat == `coverBlur`,
    }),
    rootMargin: le,
    holdGamepadFocus: o,
    ...b,
    children: [
      (0, B.jsx)(`div`, {
        className: F(ve, n.background_repeat == `coverBlur` ? _e : ``),
        style: u(n, t, o),
      }),
      (0, B.jsxs)(`div`, {
        className: l,
        children: [
          (0, B.jsx)(i, {
            section: n,
            event: t,
            language: r,
            nHiddenCapsules: c,
            personalizedCarousels: d,
            bShowSeeMoreHint: y,
            bUseGamepadLinkHint: !0,
            eGamepadLinkHintButton: `X`,
            onLinkResolved: (e) => h(e ?? void 0),
          }),
          v
            ? (0, B.jsx)(oe, {
                label: L(`#EventBrowse_AllEventsBtn`),
                shown: y,
                button: `X`,
              })
            : (0, B.jsx)(bt, { event: t, section: n }),
        ],
      }),
      f,
      (0, B.jsx)(S, { section: n }),
    ],
  });
}
function bt(e) {
  let t = $(e.event, e.section);
  return t
    ? (0, B.jsx)(`div`, {
        className: b,
        children: (0, B.jsx)(Ee, {
          onClick: (e) => Oe(e, t),
          children: L(`#EventBrowse_AllEventsBtn`),
        }),
      })
    : null;
}
function $(e, t) {
  let n = z.useMemo(
    () =>
      t.section_type == `events`
        ? ze(`ch_newshub`, `application_config`)
        : void 0,
    [t.section_type],
  );
  if (t.hide_view_all_events_link) return;
  let r = null;
  if (t.section_type == `events`) {
    if (!n || !e.BUsesContentHubForItemSource() || !j(t)) return;
    r = R.STORE_BASE_URL + `news/` + n;
  } else
    t.section_type == `sale_events`
      ? (r = R.STORE_BASE_URL + `news/collection/sales/`)
      : t.section_type == `calendar` &&
        (r = R.STORE_BASE_URL + `personalcalendar`);
  return r ?? void 0;
}
function xt(e) {
  let { saleEvent: t, section: n, bInGamepadUI: r } = e,
    i = {
      ...e,
      bShowAsCarousel: D(n),
      bAutoAdvance: !!n.carousel_auto_advance,
      bHideIfTooFewItems: !!n.hide_section_if_too_few_items,
      ...re(t.jsondata),
    },
    a = U(n, i.nShowAdditionalRows),
    o = H(Y(n, r), a, i.capsules?.length ?? 0);
  return (o < a && j(n) && (i.nShowAdditionalRows -= a - o), i);
}
var St = `NQebVMQULto-`;
function Ct(e) {
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
    className: F(St, `ShowContentsContainer`),
    children: a
      ? (0, B.jsx)(pe, { size: `small`, string: L(`#Loading`) })
      : !s &&
        t.cap_section_content &&
        (0, B.jsx)(Me, {
          onClick: o,
          className: F(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: L(`#Sale_ShowMore`),
        }),
  });
}
function wt(e) {
  return Math.max(U(e, 0), 4);
}
var Tt = {
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
function Et(e, t, n = ``, r = 0) {
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
            depth: c(e, t).nSectionIndex,
          };
        case `discount_reason`: {
          let t = e.smart_section_discount_reason;
          return {
            feature: (t !== void 0 && Tt[t]) || `salesmartdiscountreason`,
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
        return { feature: Tt[11] ?? `salesmartdiscountreason` };
  }
  return { feature: `salesection` + n };
}
var Dt = `partnereventaction/eventsummary`;
function Ot(e) {
  let t = new URLSearchParams();
  return (
    t.set(`clan_account_id`, String(e.clanAccountID)),
    t.set(`event_gid`, e.strEventGID),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
var kt = `partnereventaction/eventsummaries`;
function At(e) {
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
function jt(e) {
  return At(e)
    .map((e) => `${e.clanAccountID}:${e.strEventGID}`)
    .join(`,`);
}
function Mt(e) {
  let t = new URLSearchParams();
  return (
    t.set(`events`, jt(e.rgEvents)),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
async function Nt(e) {
  let t = `${Le.STORE_BASE_URL}${Dt}?${Ot(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summary ?? null;
}
async function Pt(e) {
  if (e.rgEvents.length === 0) return [];
  let t = `${Le.STORE_BASE_URL}${kt}?${Mt(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summaries ?? [];
}
function Ft(e, t, n) {
  return [`PartnerEventSummary`, e, t, n];
}
function It(e, t) {
  return {
    queryKey: Ft(e.clanAccountID, e.strEventGID, e.eLanguage),
    queryFn: () => Nt(e),
    select: t,
    staleTime: 6e5,
  };
}
function Lt(e) {
  return [`PartnerEventSummaries`, e.eLanguage, jt(e.rgEvents)];
}
function Rt(e) {
  return { queryKey: Lt(e), queryFn: () => Pt(e), staleTime: 3e5 };
}
function zt(e) {
  let { event: t, section: n, rgSlides: r, onSlide: i, onNavIntent: o } = e,
    s = Ne(),
    { bScreenIsWide: c } = ue(n.section_type);
  return r.length === 0
    ? null
    : r.length === 1
      ? (0, B.jsx)(B.Fragment, { children: r[0] })
      : !c || s
        ? (0, B.jsx)(`div`, {
            className: we,
            children: r.map((e, t) =>
              (0, B.jsx)(Bt, { nSlide: t, onSlide: i, children: e }, t),
            ),
          })
        : (0, B.jsx)(`div`, {
            className: F(a, Ce),
            children: (0, B.jsx)(P, {
              ...re(t.jsondata),
              visibleElements: 1,
              screenIsWide: !0,
              useTestScrollbar: !0,
              navKey: n.unique_id,
              onSlide: i,
              onNavIntent: o,
              children: r,
            }),
          });
}
function Bt(e) {
  let { nSlide: t, onSlide: n, children: r } = e,
    i = Pe({ onEnter: () => n?.(t) });
  return (0, B.jsx)(`div`, { ref: i, children: r });
}
function Vt(e) {
  let { language: t, link: n } = e,
    i = je(),
    [a, o, c] = r(() => [
      Te.GetWithFallback(n.localized_link_capsule, t),
      i ? n.sc_url : n.url,
      n.materialized_link_capsule,
    ]),
    l = a ? ne.GenerateURLFromHashAndExt(e.clanAccountID, a) : void 0;
  return (0, B.jsx)(_, {
    url: o,
    className: e.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!n.open_in_place,
    children: (0, B.jsxs)(`div`, {
      className: F(m, e.link.url ? s : ``),
      children: [
        !!l && (0, B.jsx)(de, { className: `_-4JZsb8K2FY-`, src: l }),
        !!c &&
          (0, B.jsx)(`img`, { className: `_-4JZsb8K2FY-`, src: c, alt: o }),
      ],
    }),
  });
}
export {
  Ke as C,
  Ue as D,
  He as E,
  Be as O,
  W as S,
  U as T,
  ft as _,
  wt as a,
  nt as b,
  yt as c,
  at as d,
  X as f,
  vt as g,
  gt as h,
  Et as i,
  Ve as k,
  q as l,
  J as m,
  Rt as n,
  Ct as o,
  Y as p,
  It as r,
  xt as s,
  zt as t,
  K as u,
  st as v,
  qe as w,
  et as x,
  tt as y,
};
