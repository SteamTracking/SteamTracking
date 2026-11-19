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
  Cn as o,
  H as s,
  Ht as c,
  Ot as l,
  W as u,
  Xn as d,
  Zn as f,
  a as p,
  c as m,
  d as h,
  f as g,
  gn as _,
  l as v,
  m as y,
  o as b,
  p as ee,
  s as te,
  v as ne,
} from "./chunk~6b8ddcaac8.js";
import { A as re, s as x } from "./chunk~f57d770d64.js";
import { f as S, i as C, o as w, t as T } from "./chunk~cbbb6ae37c.js";
import { d as ie, i as ae, l as oe, t as E } from "./chunk~ffe4581a06.js";
import { t as D } from "./chunk~b980924b6a.js";
import "./chunk~21cdc464a1.js";
import { t as O } from "./chunk~710e3cfd2f.js";
import {
  S as k,
  a as se,
  b as ce,
  c as A,
  d as le,
  i as ue,
  l as j,
  n as de,
  o as M,
  p as fe,
  r as pe,
  s as N,
  t as me,
  u as P,
  w as F,
} from "./chunk~b8ca037aae.js";
import {
  c as I,
  i as he,
  n as ge,
  o as _e,
  t as ve,
} from "./chunk~3720b337f3.js";
import { n as ye, t as be } from "./chunk~379edc388d.js";
import {
  $v as L,
  Dv as R,
  Jy as z,
  L as xe,
  Pv as Se,
  Tv as Ce,
  Wb as B,
  bv as we,
  gv as V,
  hv as Te,
  mv as H,
  nl as Ee,
  pt as U,
  pv as W,
  qb as G,
  uv as De,
  wc as Oe,
  wv as ke,
  xv as Ae,
  yS as K,
} from "./main.js";
async function q(e, t = 1e3) {
  return await new Promise((n, r) => {
    let i = new Image();
    ((i.src = e),
      (i.onload = () => n(`success`)),
      (i.onerror = () => n(`error`)),
      t > 0 && window.setTimeout(() => n(`timeout`), t));
  });
}
async function je(e, t, n, r, i) {
  let { queryClient: a, storeItemLoader: o } = e,
    s = g(t, n),
    c = n.prefer_assets_without_overrides ? H : W,
    l = r.flatMap((e) => {
      let t = d(e);
      return t ? [t] : [];
    }),
    u = await Promise.all(
      l.map(async (e) => {
        try {
          let [t, n, r] = await Promise.all([
            a.fetchQuery(R(o, e)),
            a.fetchQuery(V(o, e)),
            a.fetchQuery(c(o, e)),
          ]);
          if (!n?.visible || h(t, s)) return;
          let i = r,
            l = T(n, r, `header`);
          if (l) {
            let [e, t] = await Promise.all([
              a.fetchQuery(V(o, l)),
              a.fetchQuery(c(o, l)),
            ]);
            e?.visible && (i = t);
          }
          return i ? S(i, !0)[0] : void 0;
        } catch {
          return;
        }
      }),
    );
  for (let e of u.filter((e) => !!e).slice(0, i)) q(e, 0);
}
async function Me(e, t, n, r = Ne(t, n)) {
  let { queryClient: i, storeItemLoader: a } = e,
    o = t.prefer_assets_without_overrides ? H : W,
    s = n.flatMap((e) => {
      let t = d(e);
      return t ? [t] : [];
    });
  if (
    (await Promise.all([
      i.ensureQueryData(w()).catch(() => void 0),
      ...s.flatMap((e) => [
        i.prefetchQuery(V(a, e)),
        i.prefetchQuery(o(a, e)),
        i.prefetchQuery(we(a, e)),
        i.prefetchQuery(Ce(a, e)),
        i.prefetchQuery(ke(a, e)),
        i.prefetchQuery(R(a, e)),
        ...(r ? [i.prefetchQuery(Te(a, e)), i.prefetchQuery(Ae(a, e))] : []),
      ]),
    ]),
    !N(t))
  )
    return;
  let c = new Set();
  for (let e of s) {
    let t = i.getQueryData(V(a, e).queryKey)?.related_items?.parent_appid;
    t && c.add(t);
  }
  await Promise.all(Array.from(c, (e) => i.prefetchQuery(V(a, { appid: e }))));
}
function Ne(e, t) {
  return t.length === 1
    ? !0
    : e.capsule_style_per_row_array
      ? e.capsule_style_per_row_array.includes(`fullrow`)
      : A(e, !1);
}
var J = e(t(), 1),
  Pe = J.createContext(void 0);
function Fe(e) {
  return (
    (x(e) || !!e.sale_tag_filter) &&
    !e.enable_faceted_browsing &&
    !e.disable_visibility_tracking &&
    e.section_type !== `trailercarousel`
  );
}
function Ie(e, t, n, r) {
  let i = [],
    a = [];
  for (let n of e) (t(n) ? a : i).push(n);
  return a.length ? (r && i.length < n ? i : i.concat(a)) : e;
}
function Le(e, t, n, r) {
  let i = J.useContext(Pe),
    a = J.useContext(C),
    o = J.useMemo(
      () => (a ? e.GetSaleSectionIncludingFooterSections().indexOf(a) : -1),
      [e, a],
    ),
    s = J.useId(),
    c = j(t, 0, r) || n?.length || 0,
    l = J.useMemo(() => {
      if (!i || !n || o < 0) return n;
      let e = Fe(t)
        ? Ie(
            n,
            (e) => i.BSeenAbove(e, o),
            c,
            !!t.visibility_tracking_drop_duplicates,
          )
        : n;
      return (i.SetFirstPage(s, o, e.slice(0, c)), e);
    }, [i, n, o, t, c, s]);
  return (
    J.useEffect(() => {
      if (!(!i || !l || o < 0))
        return (i.SetFirstPage(s, o, l.slice(0, c)), () => i.Remove(s));
    }, [i, l, o, c, s]),
    l
  );
}
var Y = i(),
  X = 250;
function Re(e) {
  let {
      event: t,
      section: n,
      language: r,
      promotedSaleEvent: i,
      Frame: a = se,
      nMaxCapsules: o,
    } = e,
    s = B(),
    c = l(),
    { nMaxCapsulesPerRow: u, bScreenIsWide: d } = oe(n.section_type),
    f = J.useContext(ie),
    h = J.useContext(ae),
    g = v(t, n, !0),
    _ = Le(t, n, g, s),
    { capsules: x, nHiddenCapsules: S } = y(t, n, _, void 0, !0),
    C = o ? x?.slice(0, o) : x,
    w = J.useMemo(() => ce(n, C?.length), [n, C?.length]),
    T = m(t, n),
    E = ne(t, n),
    [O, A] = J.useState(0),
    j = le(w, s),
    M = f && !d && !s && re(n),
    N = M ? ze(w, j, s) : void 0;
  if (b(t, n) === `personalized_carousel`) {
    let e = p(t, n, T);
    if (e === void 0)
      return (0, Y.jsx)(D, { capsules_per_row: j, swipe_row: N });
    if (e === null) return null;
  }
  let P;
  if (!C) P = (0, Y.jsx)(D, { capsules_per_row: j, swipe_row: N });
  else {
    let e = ue({
        saleEvent: t,
        section: w,
        capsules: C,
        language: r,
        bInGamepadUI: s,
        nMaxCapsulesPerRow: u,
        bScreenIsWide: d,
        nShowAdditionalRows: O,
        bPaginationPills: f,
        bDropShortLastCarouselPage: h,
      }),
      { content: i, bAdditionalContent: a } = fe(e);
    if (((P = i), !P && !c)) return null;
    P &&
      a &&
      (P = (0, Y.jsxs)(Y.Fragment, {
        children: [
          P,
          (0, Y.jsx)(pe, {
            section: w,
            nRowsWithNext: k(w, O) + 1,
            nCapsules: C.length,
            rgRowSizes: j,
            onShowMore: () => A(O + de(n)),
          }),
        ],
      }));
  }
  let { feature: F, depth: I } = me(n, t, E);
  return (0, Y.jsx)(U, {
    feature: F,
    depth: I,
    children: (0, Y.jsxs)(a, {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: s,
      placeholderHeight: (M ? X : Be(w, C?.length ?? 0, j)) + `px`,
      nHiddenCapsules: S,
      personalizedCarousels: T,
      promotedSaleEvent: i,
      children: [
        (0, Y.jsx)(te, { event: t, section: n }),
        (0, Y.jsx)(ee, { capsules: g }),
        P,
      ],
    }),
  });
}
function ze(e, t, n) {
  return t[0] === 1
    ? { width: `80vw`, height: `320px` }
    : P(e, n)[0] === `tall`
      ? `tall_capsule`
      : `capsule`;
}
function Be(e, t, n) {
  let r = 0;
  if (n.length > 0) for (let e = t; e > 0; r++) e -= n[r % n.length];
  let i = Math.min(r, k(e, 0));
  return Math.max(1, i) * X;
}
function Ve(e) {
  let {
      event: t,
      section: n,
      language: r,
      strHeading: i,
      bOneSlide: a,
      children: s,
    } = e,
    l = B(),
    [u, d] = J.useState(null);
  return (0, Y.jsxs)(`div`, {
    className: Oe(_, _e),
    children: [
      (0, Y.jsxs)(`div`, {
        className: o,
        children: [
          (0, Y.jsx)(c, {
            section: n,
            event: t,
            language: r,
            promotedSale: null,
            title: i || z(`#Sale_CrossPromoSale_EventCapsuleHeading`),
          }),
          l &&
            u &&
            (0, Y.jsx)(E, { label: u.strLabel, shown: u.bShown, button: `X` }),
        ],
      }),
      (0, Y.jsx)(ve, { value: a ? d : null, children: s }),
    ],
  });
}
function He(e, t) {
  return {
    ...be(`crosspromotesalepage`, ``),
    sale_page_cross_promo_sales: e,
    use_random_order: !1,
    show_as_carousel: !0,
    sale_page_cross_promo_layout: t,
    capsules_per_row_array: [4],
    carousel_rows: 1,
  };
}
var Ue = `saleaction/storeitemsalecrosspromoitems`;
function We(e) {
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
async function Ge(e) {
  let t = `${G.STORE_BASE_URL}${Ue}?${We(e)}`,
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.rgItems;
}
function Ke(e) {
  return [`StoreItemSaleCrossPromo`, L(e)];
}
function Z(e, t) {
  return [`StoreItemSaleCrossPromoItems`, L(e), t.strEventGID];
}
function qe(e) {
  let { data: t } = a({ queryKey: Ke(e), queryFn: n, staleTime: 1 / 0 });
  return t;
}
function Je(e, t, n, r) {
  return a({
    queryKey: Z(e, n),
    queryFn: () => Ge({ item: e, sale: n, rgExcludeAppIDs: t.rgExcludeAppIDs }),
    enabled: r,
    staleTime: 1 / 0,
    retry: 1,
  });
}
function Ye() {
  let e = r();
  return J.useCallback((t, n, r) => Xe(e, t, n, r), [e]);
}
function Xe(e, t, n, r) {
  for (let { rgItems: r, ...i } of n) r && e.setQueryData(Z(t, i), r);
  let i = {
    rgSales: n.map(({ clanAccountID: e, strEventGID: t }) => ({
      clanAccountID: e,
      strEventGID: t,
    })),
    rgExcludeAppIDs: r,
  };
  e.setQueryData(Ke(t), i);
}
var Q = s(`event_capsule`),
  Ze = `250px`;
function Qe(e, t, n, r) {
  return n.has(e) || n.has((e + t - 1) % t) || r.has(e);
}
function $e(e) {
  let { item: t } = e,
    n = qe(t),
    { data: r } = Se(t),
    i = n?.rgSales.length ?? 0,
    [a, o] = J.useState(!1),
    s = Ee({
      onEnter: () => {
        o(!0);
      },
    }),
    [c, l] = J.useState(() => new Set([0])),
    u = J.useRef(n);
  u.current = n;
  let d = J.useRef(a);
  d.current = a;
  let f = J.useCallback((e) => {
      let t = u.current?.rgSales[e];
      (`${e}${t?.strEventGID}${t?.clanAccountID}`,
        d.current,
        l((t) => (t.has(e) ? t : new Set([...t, e]))));
    }, []),
    [p, m] = J.useState(() => new Set()),
    h = J.useRef(c);
  h.current = c;
  let g = J.useRef(p);
  g.current = p;
  let _ = J.useCallback((e, t) => {
      let n = u.current?.rgSales.length ?? 0;
      if (!n) return;
      let r = (e) => Qe(e, n, h.current, g.current),
        i = e;
      if ((r(i) && (i = (e + (t === `next` ? 1 : n - 1)) % n), r(i))) return;
      `${t}${e}${i}${u.current?.rgSales[i]?.strEventGID}`;
      let a = new Set([...g.current, i]);
      ((g.current = a), m(a));
    }, []),
    v = J.useMemo(() => n?.rgSales[0] && rt(n.rgSales[0], []), [n]);
  if (!n || !i || !v) return null;
  let y = n.rgSales.map((e, r) =>
      (0, Y.jsx)(
        et,
        {
          item: t,
          crossPromo: n,
          sale: e,
          bShown: c.has(r),
          bLoad: Qe(r, i, c, p),
          bPreloadImages: a,
          bRecordImpression: a,
        },
        e.strEventGID,
      ),
    ),
    b = r?.name
      ? z(`#Sale_CrossPromoSale_EventCapsuleHeading_StoreItem`, r.name)
      : void 0;
  return (0, Y.jsx)(`div`, {
    ref: s,
    children: (0, Y.jsx)(O, {
      enabled: !a,
      children: (0, Y.jsx)(Ve, {
        event: v.event,
        section: v.section,
        language: K(G.LANGUAGE),
        strHeading: b,
        children:
          i === 1
            ? y[0]
            : (0, Y.jsx)(M, {
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
function et(e) {
  let {
      item: t,
      crossPromo: n,
      sale: i,
      bShown: o,
      bLoad: s,
      bPreloadImages: c,
      bRecordImpression: l,
    } = e,
    u = K(G.LANGUAGE),
    d = a({
      ...F(
        {
          clanAccountID: i.clanAccountID,
          strEventGID: i.strEventGID,
          eLanguage: u,
        },
        I,
      ),
      enabled: s,
    }),
    f = Je(t, n, i, s),
    p = d.data,
    m = f.data,
    h = xe();
  J.useEffect(() => {
    l &&
      o &&
      p &&
      (`${i.strEventGID}`, h.MarkEventShown(p.strEventGID, p.clanAccountID, 3));
  }, [l, o, p, i, h]);
  let { event: g, section: _ } = J.useMemo(() => rt(i, m ?? []), [i, m]),
    v = r(),
    y = De();
  J.useEffect(() => {
    s && m?.length && Me({ queryClient: v, storeItemLoader: y }, _, $(m));
  }, [s, m, _, v, y]);
  let b = J.useRef(!1);
  return (
    J.useEffect(() => {
      c &&
        s &&
        !o &&
        p &&
        m?.length &&
        !b.current &&
        ((b.current = !0),
        `${i.strEventGID}`,
        p.strCapsuleURL && q(p.strCapsuleURL, 0),
        je({ queryClient: v, storeItemLoader: y }, g, _, $(m), Q));
    }, [c, s, o, p, m, i, g, _, v, y]),
    !o || !p || !m?.length
      ? (0, Y.jsx)(tt, { event: g, section: _ })
      : (0, Y.jsx)(Re, {
          event: g,
          section: _,
          language: u,
          promotedSaleEvent: p,
          Frame: ge,
          nMaxCapsules: Q,
        })
  );
}
function tt(e) {
  let { event: t, section: n } = e,
    r = B();
  return (0, Y.jsx)(he, {
    event: t,
    section: n,
    language: K(G.LANGUAGE),
    bInGamepadUI: r,
    placeholderHeight: Ze,
    children: (0, Y.jsx)(nt, {}),
  });
}
function nt() {
  return (0, Y.jsx)(D, { capsules_per_row: [Q] });
}
function rt(e, t) {
  let n = $(t),
    r = ye(e.clanAccountID, 1, `crosspromote`, Math.floor(Date.now() / 1e3)),
    i = He(
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
    let t = f(e);
    return t ? [t] : [];
  });
}
var it = `_7J8FxbBVGEM-`;
function at(e) {
  let { item: t, rgSales: n, rgExcludeAppIDs: r } = e,
    [i, a] = J.useState(!1),
    o = Ye();
  return (
    J.useEffect(() => {
      (o(t, n, r), a(!0));
    }, [t, n, r, o]),
    i
      ? (0, Y.jsx)(U, {
          feature: `sale-crosspromo`,
          children: (0, Y.jsx)(`div`, {
            className: it,
            children: (0, Y.jsx)($e, { item: t }),
          }),
        })
      : null
  );
}
export { at as default };
