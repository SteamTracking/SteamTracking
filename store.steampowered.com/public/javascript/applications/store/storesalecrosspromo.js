/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  bt as n,
  dt as r,
  ft as i,
  st as a,
} from "./chunk~01cfc309bf.js";
import {
  Bt as o,
  Et as s,
  H as c,
  Jn as l,
  W as u,
  Yn as d,
  a as f,
  c as p,
  d as m,
  f as h,
  l as g,
  m as _,
  mn as v,
  o as y,
  p as b,
  s as ee,
  v as te,
  xn as x,
} from "./chunk~6b8ddcaac8.js";
import { A as ne, s as S } from "./chunk~f57d770d64.js";
import { f as re, i as C, o as w, t as T } from "./chunk~cbbb6ae37c.js";
import { a as ie, f as ae, n as E, u as oe } from "./chunk~4eed35ad1f.js";
import { t as D } from "./chunk~b980924b6a.js";
import "./chunk~21cdc464a1.js";
import { t as O } from "./chunk~710e3cfd2f.js";
import {
  S as se,
  a as ce,
  c as le,
  d as ue,
  f as k,
  h as de,
  i as fe,
  l as A,
  o as pe,
  p as me,
  r as j,
  s as he,
  t as M,
  u as N,
  w as P,
} from "./chunk~b8ca037aae.js";
import {
  c as F,
  i as ge,
  n as _e,
  o as ve,
  t as ye,
} from "./chunk~3720b337f3.js";
import { n as be, t as xe } from "./chunk~379edc388d.js";
import {
  $b as I,
  Av as Se,
  Cv as L,
  Iv as R,
  L as Ce,
  Nc as we,
  Nv as Te,
  OS as z,
  Pv as Ee,
  Sv as B,
  Tv as V,
  Uv as De,
  cy as H,
  dl as Oe,
  gt as U,
  kv as ke,
  nx as W,
  rb as G,
  wv as Ae,
  yv as je,
} from "./main.js";
async function K(e, t = 1e3) {
  return await new Promise((n, r) => {
    let i = new Image();
    ((i.src = e),
      (i.onload = () => n(`success`)),
      (i.onerror = () => n(`error`)),
      t > 0 && window.setTimeout(() => n(`timeout`), t));
  });
}
async function Me(e, t, n, r, i) {
  let { queryClient: a, storeItemLoader: o } = e,
    s = h(t, n),
    c = n.prefer_assets_without_overrides ? L : B,
    u = r.flatMap((e) => {
      let t = l(e);
      return t ? [t] : [];
    }),
    d = await Promise.all(
      u.map(async (e) => {
        try {
          let [t, n, r] = await Promise.all([
            a.fetchQuery(R(o, e)),
            a.fetchQuery(V(o, e)),
            a.fetchQuery(c(o, e)),
          ]);
          if (!n?.visible || m(t, s)) return;
          let i = r,
            l = T(n, r, `header`);
          if (l) {
            let [e, t] = await Promise.all([
              a.fetchQuery(V(o, l)),
              a.fetchQuery(c(o, l)),
            ]);
            e?.visible && (i = t);
          }
          return i ? re(i, !0)[0] : void 0;
        } catch {
          return;
        }
      }),
    );
  for (let e of d.filter((e) => !!e).slice(0, i)) K(e, 0);
}
async function Ne(e, t, n, r = Pe(t, n)) {
  let { queryClient: i, storeItemLoader: a } = e,
    o = t.prefer_assets_without_overrides ? L : B,
    s = n.flatMap((e) => {
      let t = l(e);
      return t ? [t] : [];
    });
  if (
    (await Promise.all([
      i.ensureQueryData(w()).catch(() => void 0),
      ...s.flatMap((e) => [
        i.prefetchQuery(V(a, e)),
        i.prefetchQuery(o(a, e)),
        i.prefetchQuery(ke(a, e)),
        i.prefetchQuery(Ee(a, e)),
        i.prefetchQuery(Te(a, e)),
        i.prefetchQuery(R(a, e)),
        ...(r ? [i.prefetchQuery(Ae(a, e)), i.prefetchQuery(Se(a, e))] : []),
      ]),
    ]),
    !A(t))
  )
    return;
  let c = new Set();
  for (let e of s) {
    let t = i.getQueryData(V(a, e).queryKey)?.related_items?.parent_appid;
    t && c.add(t);
  }
  await Promise.all(Array.from(c, (e) => i.prefetchQuery(V(a, { appid: e }))));
}
function Pe(e, t) {
  return t.length === 1
    ? !0
    : e.capsule_style_per_row_array
      ? e.capsule_style_per_row_array.includes(`fullrow`)
      : N(e, !1);
}
var q = e(t(), 1),
  Fe = q.createContext(void 0),
  Ie = q.createContext(void 0);
function Le(e) {
  return (
    (S(e) || !!e.sale_tag_filter) &&
    !e.enable_faceted_browsing &&
    !e.disable_visibility_tracking &&
    e.section_type !== `trailercarousel`
  );
}
function Re(e, t, n, r) {
  let i = [],
    a = [];
  for (let n of e) (t(n) ? a : i).push(n);
  return a.length ? (r && i.length < n ? i : i.concat(a)) : e;
}
function ze(e, t, n, r) {
  let i = q.useContext(Fe),
    a = q.useContext(C),
    o = q.useContext(Ie),
    s = q.useMemo(
      () =>
        o ?? (a ? e.GetSaleSectionIncludingFooterSections().indexOf(a) : -1),
      [e, a, o],
    ),
    c = q.useId(),
    l = ue(t, 0, r) || n?.length || 0,
    u = q.useMemo(() => {
      if (!i || !n || s < 0) return n;
      let e = Le(t)
        ? Re(
            n,
            (e) => i.BSeenAbove(e, s),
            l,
            !!t.visibility_tracking_drop_duplicates,
          )
        : n;
      return (i.SetFirstPage(c, s, e.slice(0, l)), e);
    }, [i, n, s, t, l, c]);
  return (
    q.useEffect(() => {
      if (!(!i || !u || s < 0))
        return (i.SetFirstPage(c, s, u.slice(0, l)), () => i.Remove(c));
    }, [i, u, s, l, c]),
    u
  );
}
var J = i(),
  Y = 250;
function Be(e) {
  let {
      event: t,
      section: n,
      language: r,
      promotedSaleEvent: i,
      Frame: a = le,
      nMaxCapsules: o,
    } = e,
    c = I(),
    l = s(),
    { nMaxCapsulesPerRow: u, bScreenIsWide: d } = oe(n.section_type),
    m = q.useContext(ae),
    h = q.useContext(ie),
    v = g(t, n, !0),
    x = ze(t, n, v, c),
    { capsules: S, nHiddenCapsules: re } = _(t, n, x, void 0, !0),
    C = o ? S?.slice(0, o) : S,
    w = q.useMemo(() => se(n, C?.length), [n, C?.length]),
    T = p(t, n),
    E = te(t, n),
    [O, ue] = q.useState(0),
    k = me(w, c),
    A = m && !d && !c && ne(n),
    j = A ? Ve(w, k, c) : void 0;
  if (y(t, n) === `personalized_carousel`) {
    let e = f(t, n, T);
    if (e === void 0)
      return (0, J.jsx)(D, { capsules_per_row: k, swipe_row: j });
    if (e === null) return null;
  }
  let M;
  if (!C) M = (0, J.jsx)(D, { capsules_per_row: k, swipe_row: j });
  else {
    let e = he({
        saleEvent: t,
        section: w,
        capsules: C,
        language: r,
        bInGamepadUI: c,
        nMaxCapsulesPerRow: u,
        bScreenIsWide: d,
        nShowAdditionalRows: O,
        bPaginationPills: m,
        bDropShortLastCarouselPage: h,
      }),
      { content: i, bAdditionalContent: a } = de(e);
    if (((M = i), !M && !l)) return null;
    M &&
      a &&
      (M = (0, J.jsxs)(J.Fragment, {
        children: [
          M,
          (0, J.jsx)(pe, {
            section: w,
            nRowsWithNext: P(w, O) + 1,
            nCapsules: C.length,
            rgRowSizes: k,
            onShowMore: () => ue(O + ce(n)),
          }),
        ],
      }));
  }
  let { feature: N, depth: F } = fe(n, t, E);
  return (0, J.jsx)(U, {
    feature: N,
    depth: F,
    children: (0, J.jsxs)(a, {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: c,
      placeholderHeight: (A ? Y : He(w, C?.length ?? 0, k)) + `px`,
      nHiddenCapsules: re,
      personalizedCarousels: T,
      promotedSaleEvent: i,
      children: [
        (0, J.jsx)(ee, { event: t, section: n }),
        (0, J.jsx)(b, { capsules: v }),
        M,
      ],
    }),
  });
}
function Ve(e, t, n) {
  return t[0] === 1
    ? { width: `80vw`, height: `320px` }
    : k(e, n)[0] === `tall`
      ? `tall_capsule`
      : `capsule`;
}
function He(e, t, n) {
  let r = 0;
  if (n.length > 0) for (let e = t; e > 0; r++) e -= n[r % n.length];
  let i = Math.min(r, P(e, 0));
  return Math.max(1, i) * Y;
}
function Ue(e) {
  let {
      event: t,
      section: n,
      language: r,
      strHeading: i,
      bOneSlide: a,
      children: s,
    } = e,
    c = I(),
    [l, u] = q.useState(null);
  return (0, J.jsxs)(`div`, {
    className: we(v, ve),
    children: [
      (0, J.jsxs)(`div`, {
        className: x,
        children: [
          (0, J.jsx)(o, {
            section: n,
            event: t,
            language: r,
            promotedSale: null,
            title: i || G(`#Sale_CrossPromoSale_EventCapsuleHeading`),
          }),
          c &&
            l &&
            (0, J.jsx)(E, { label: l.strLabel, shown: l.bShown, button: `X` }),
        ],
      }),
      (0, J.jsx)(ye, { value: a ? u : null, children: s }),
    ],
  });
}
function We(e, t) {
  return {
    ...xe(`crosspromotesalepage`, ``),
    sale_page_cross_promo_sales: e,
    use_random_order: !1,
    show_as_carousel: !0,
    sale_page_cross_promo_layout: t,
    capsules_per_row_array: [4],
    carousel_rows: 1,
  };
}
var Ge = `saleaction/storeitemsalecrosspromoitems`;
function Ke(e) {
  let { item: t, sale: n, rgExcludeAppIDs: r } = e,
    i = new URLSearchParams();
  return (
    `appid` in t
      ? i.set(`appid`, String(t.appid))
      : `packageid` in t
        ? i.set(`packageid`, String(t.packageid))
        : `bundleid` in t && i.set(`bundleid`, String(t.bundleid)),
    i.set(`clan_account_id`, String(n.clanAccountID)),
    i.set(`event_gid`, n.strEventGID),
    r.length && i.set(`exclude_appids`, r.join(`,`)),
    i.toString()
  );
}
async function qe(e) {
  let t = `${W.STORE_BASE_URL}${Ge}?${Ke(e)}`,
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.rgItems;
}
function X(e) {
  return [`StoreItemSaleCrossPromo`, H(e)];
}
function Z(e, t) {
  return [`StoreItemSaleCrossPromoItems`, H(e), t.strEventGID];
}
function Je(e) {
  let { data: t } = a({ queryKey: X(e), queryFn: n, staleTime: 1 / 0 });
  return t;
}
function Ye(e, t, n, r) {
  return a({
    queryKey: Z(e, n),
    queryFn: () => qe({ item: e, sale: n, rgExcludeAppIDs: t.rgExcludeAppIDs }),
    enabled: r,
    staleTime: 1 / 0,
    retry: 1,
  });
}
function Xe() {
  let e = r();
  return q.useCallback((t, n, r) => Ze(e, t, n, r), [e]);
}
function Ze(e, t, n, r) {
  for (let { rgItems: r, ...i } of n) r && e.setQueryData(Z(t, i), r);
  let i = {
    rgSales: n.map(({ clanAccountID: e, strEventGID: t }) => ({
      clanAccountID: e,
      strEventGID: t,
    })),
    rgExcludeAppIDs: r,
  };
  e.setQueryData(X(t), i);
}
var Q = c(`event_capsule`),
  Qe = `250px`;
function $e(e, t, n, r) {
  return n.has(e) || n.has((e + t - 1) % t) || r.has(e);
}
function et(e) {
  let { item: t } = e,
    n = Je(t),
    { data: r } = De(t),
    i = n?.rgSales.length ?? 0,
    [a, o] = q.useState(!1),
    s = Oe({
      onEnter: () => {
        o(!0);
      },
    }),
    [c, l] = q.useState(() => new Set([0])),
    u = q.useRef(n);
  u.current = n;
  let d = q.useRef(a);
  d.current = a;
  let f = q.useCallback((e) => {
      let t = u.current?.rgSales[e];
      (`${e}${t?.strEventGID}${t?.clanAccountID}`,
        d.current,
        l((t) => (t.has(e) ? t : new Set([...t, e]))));
    }, []),
    [p, m] = q.useState(() => new Set()),
    h = q.useRef(c);
  h.current = c;
  let g = q.useRef(p);
  g.current = p;
  let _ = q.useCallback((e, t) => {
      let n = u.current?.rgSales.length ?? 0;
      if (!n) return;
      let r = (e) => $e(e, n, h.current, g.current),
        i = e;
      if ((r(i) && (i = (e + (t === `next` ? 1 : n - 1)) % n), r(i))) return;
      `${t}${e}${i}${u.current?.rgSales[i]?.strEventGID}`;
      let a = new Set([...g.current, i]);
      ((g.current = a), m(a));
    }, []),
    v = q.useMemo(() => n?.rgSales[0] && it(n.rgSales[0], []), [n]);
  if (!n || !i || !v) return null;
  let y = n.rgSales.map((e, r) =>
      (0, J.jsx)(
        tt,
        {
          item: t,
          crossPromo: n,
          sale: e,
          bShown: c.has(r),
          bLoad: $e(r, i, c, p),
          bPreloadImages: a,
          bRecordImpression: a,
        },
        e.strEventGID,
      ),
    ),
    b = r?.name
      ? G(`#Sale_CrossPromoSale_EventCapsuleHeading_StoreItem`, r.name)
      : void 0;
  return (0, J.jsx)(`div`, {
    ref: s,
    children: (0, J.jsx)(O, {
      enabled: !a,
      children: (0, J.jsx)(Ue, {
        event: v.event,
        section: v.section,
        language: z(W.LANGUAGE),
        strHeading: b,
        children:
          i === 1
            ? y[0]
            : (0, J.jsx)(M, {
                event: v.event,
                section: v.section,
                rgSlides: y,
                onSlide: f,
                onNavIntent: _,
              }),
      }),
    }),
  });
}
function tt(e) {
  let {
      item: t,
      crossPromo: n,
      sale: i,
      bShown: o,
      bLoad: s,
      bPreloadImages: c,
      bRecordImpression: l,
    } = e,
    u = z(W.LANGUAGE),
    d = a({
      ...j(
        {
          clanAccountID: i.clanAccountID,
          strEventGID: i.strEventGID,
          eLanguage: u,
        },
        F,
      ),
      enabled: s,
    }),
    f = Ye(t, n, i, s),
    p = d.data,
    m = f.data,
    h = Ce();
  q.useEffect(() => {
    l &&
      o &&
      p &&
      (`${i.strEventGID}`, h.MarkEventShown(p.strEventGID, p.clanAccountID, 3));
  }, [l, o, p, i, h]);
  let { event: g, section: _ } = q.useMemo(() => it(i, m ?? []), [i, m]),
    v = r(),
    y = je();
  q.useEffect(() => {
    s && m?.length && Ne({ queryClient: v, storeItemLoader: y }, _, $(m));
  }, [s, m, _, v, y]);
  let b = q.useRef(!1);
  return (
    q.useEffect(() => {
      c &&
        s &&
        !o &&
        p &&
        m?.length &&
        !b.current &&
        ((b.current = !0),
        `${i.strEventGID}`,
        p.strCapsuleURL && K(p.strCapsuleURL, 0),
        Me({ queryClient: v, storeItemLoader: y }, g, _, $(m), Q));
    }, [c, s, o, p, m, i, g, _, v, y]),
    !o || !p || !m?.length
      ? (0, J.jsx)(nt, { event: g, section: _ })
      : (0, J.jsx)(Be, {
          event: g,
          section: _,
          language: u,
          promotedSaleEvent: p,
          Frame: _e,
          nMaxCapsules: Q,
        })
  );
}
function nt(e) {
  let { event: t, section: n } = e,
    r = I();
  return (0, J.jsx)(ge, {
    event: t,
    section: n,
    language: z(W.LANGUAGE),
    bInGamepadUI: r,
    placeholderHeight: Qe,
    children: (0, J.jsx)(rt, {}),
  });
}
function rt() {
  return (0, J.jsx)(D, { capsules_per_row: [Q] });
}
function it(e, t) {
  let n = $(t),
    r = be(e.clanAccountID, 1, `crosspromote`, Math.floor(Date.now() / 1e3)),
    i = We(
      [
        {
          clan_account_id: e.clanAccountID,
          event_gid: e.strEventGID,
          capsules: n,
        },
      ],
      `event_capsule`,
    ),
    a = {
      ...u(i)[0],
      capsules_per_row_array: [Q],
      show_as_carousel: !0,
      carousel_rows: 1,
    };
  return ((r.jsondata.sale_sections = [a]), { event: r, section: a });
}
function $(e) {
  return e.flatMap((e) => {
    let t = d(e);
    return t ? [t] : [];
  });
}
var at = `_7J8FxbBVGEM-`;
function ot(e) {
  let { item: t, rgSales: n, rgExcludeAppIDs: r } = e,
    [i, a] = q.useState(!1),
    o = Xe();
  return (
    q.useEffect(() => {
      (o(t, n, r), a(!0));
    }, [t, n, r, o]),
    i
      ? (0, J.jsx)(U, {
          feature: `sale-crosspromo`,
          children: (0, J.jsx)(`div`, {
            className: at,
            children: (0, J.jsx)(et, { item: t }),
          }),
        })
      : null
  );
}
export { ot as default };
