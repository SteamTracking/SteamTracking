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
import { mt as o, ot as s } from "./chunk~6b8ddcaac8.js";
import {
  Y as c,
  _ as l,
  a as u,
  d,
  f,
  g as p,
  h as m,
  m as h,
  p as g,
  q as _,
  r as v,
  s as y,
  t as b,
  v as x,
  w as S,
  y as ee,
} from "./chunk~3720b337f3.js";
import { A as te, s as C } from "./chunk~f57d770d64.js";
import { f as w, i as T, o as E, t as D } from "./chunk~cbbb6ae37c.js";
import { n as O, t as k } from "./chunk~9871ee5432.js";
import { t as A } from "./chunk~b980924b6a.js";
import { c as ne, o as re } from "./chunk~d43c81a658.js";
import {
  M as j,
  S as M,
  a as ie,
  b as ae,
  c as N,
  d as oe,
  i as se,
  l as P,
  n as ce,
  o as F,
  p as le,
  r as ue,
  s as I,
  t as de,
  u as fe,
  w as pe,
} from "./chunk~b8ca037aae.js";
import "./chunk~21cdc464a1.js";
import { t as me } from "./chunk~710e3cfd2f.js";
import { i as he } from "./chunk~331382b23f.js";
import { n as ge, t as _e } from "./chunk~379edc388d.js";
import {
  $v as L,
  Dv as R,
  Jy as z,
  L as ve,
  Pv as ye,
  Tv as be,
  Wb as xe,
  bv as Se,
  gv as B,
  hv as Ce,
  mv as V,
  nl as we,
  pt as H,
  pv as U,
  qb as W,
  uv as Te,
  wc as Ee,
  wv as De,
  xv as Oe,
  yS as G,
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
var q = e(t(), 1),
  ke = q.createContext(void 0);
function Ae(e) {
  return (
    (C(e) || !!e.sale_tag_filter) &&
    !e.enable_faceted_browsing &&
    !e.disable_visibility_tracking &&
    e.section_type !== `trailercarousel`
  );
}
function je(e, t, n, r) {
  let i = [],
    a = [];
  for (let n of e) (t(n) ? a : i).push(n);
  return a.length ? (r && i.length < n ? i : i.concat(a)) : e;
}
function Me(e, t, n, r) {
  let i = q.useContext(ke),
    a = q.useContext(T),
    o = q.useMemo(
      () => (a ? e.GetSaleSectionIncludingFooterSections().indexOf(a) : -1),
      [e, a],
    ),
    s = q.useId(),
    c = P(t, 0, r) || n?.length || 0,
    l = q.useMemo(() => {
      if (!i || !n || o < 0) return n;
      let e = Ae(t)
        ? je(
            n,
            (e) => i.BSeenAbove(e, o),
            c,
            !!t.visibility_tracking_drop_duplicates,
          )
        : n;
      return (i.SetFirstPage(s, o, e.slice(0, c)), e);
    }, [i, n, o, t, c, s]);
  return (
    q.useEffect(() => {
      if (!(!i || !l || o < 0))
        return (i.SetFirstPage(s, o, l.slice(0, c)), () => i.Remove(s));
    }, [i, l, o, c, s]),
    l
  );
}
var J = i(),
  Y = 250;
function Ne(e) {
  let {
      event: t,
      section: n,
      language: r,
      promotedSaleEvent: i,
      Frame: a = ie,
      nMaxCapsules: o,
    } = e,
    s = xe(),
    c = he(),
    { nMaxCapsulesPerRow: l, bScreenIsWide: u } = re(n.section_type),
    p = q.useContext(ne),
    _ = m(t, n, !0),
    v = Me(t, n, _, s),
    { capsules: y, nHiddenCapsules: b } = ee(t, n, v, void 0, !0),
    C = o ? y?.slice(0, o) : y,
    w = q.useMemo(() => ae(n, C?.length), [n, C?.length]),
    T = h(t, n),
    E = S(t, n),
    [D, O] = q.useState(0),
    k = oe(w, s),
    j = p && !u && !s && te(n),
    N = j ? Pe(w, k, s) : void 0;
  if (f(t, n) === `personalized_carousel`) {
    let e = d(t, n, T);
    if (e === void 0)
      return (0, J.jsx)(A, { capsules_per_row: k, swipe_row: N });
    if (e === null) return null;
  }
  let P;
  if (!C) P = (0, J.jsx)(A, { capsules_per_row: k, swipe_row: N });
  else {
    let e = se({
        saleEvent: t,
        section: w,
        capsules: C,
        language: r,
        bInGamepadUI: s,
        nMaxCapsulesPerRow: l,
        bScreenIsWide: u,
        nShowAdditionalRows: D,
        bPaginationPills: p,
      }),
      { content: i, bAdditionalContent: a } = le(e);
    if (((P = i), !P && !c)) return null;
    P &&
      a &&
      (P = (0, J.jsxs)(J.Fragment, {
        children: [
          P,
          (0, J.jsx)(ue, {
            section: w,
            nRowsWithNext: M(w, D) + 1,
            nCapsules: C.length,
            rgRowSizes: k,
            onShowMore: () => O(D + ce(n)),
          }),
        ],
      }));
  }
  let { feature: F, depth: I } = de(n, t, E);
  return (0, J.jsx)(H, {
    feature: F,
    depth: I,
    children: (0, J.jsxs)(a, {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: s,
      placeholderHeight: (j ? Y : Fe(w, C?.length ?? 0, k)) + `px`,
      nHiddenCapsules: b,
      personalizedCarousels: T,
      promotedSaleEvent: i,
      children: [
        (0, J.jsx)(g, { event: t, section: n }),
        (0, J.jsx)(x, { capsules: _ }),
        P,
      ],
    }),
  });
}
function Pe(e, t, n) {
  return t[0] === 1
    ? { width: `80vw`, height: `320px` }
    : fe(e, n)[0] === `tall`
      ? `tall_capsule`
      : `capsule`;
}
function Fe(e, t, n) {
  let r = 0;
  if (n.length > 0) for (let e = t; e > 0; r++) e -= n[r % n.length];
  let i = Math.min(r, M(e, 0));
  return Math.max(1, i) * Y;
}
function Ie(e) {
  let { event: t, section: n, language: r, strHeading: i, children: a } = e;
  return (0, J.jsxs)(`div`, {
    className: Ee(s, u),
    children: [
      (0, J.jsx)(`div`, {
        className: o,
        children: (0, J.jsx)(j, {
          section: n,
          event: t,
          language: r,
          promotedSale: null,
          title: i || z(`#Sale_CrossPromoSale_EventCapsuleHeading`),
        }),
      }),
      a,
    ],
  });
}
function Le(e, t) {
  return {
    ..._e(`crosspromotesalepage`, ``),
    sale_page_cross_promo_sales: e,
    use_random_order: !1,
    show_as_carousel: !0,
    sale_page_cross_promo_layout: t,
    capsules_per_row_array: [4],
    carousel_rows: 1,
  };
}
async function Re(e, t, n, r, i) {
  let { queryClient: a, storeItemLoader: o } = e,
    s = l(t, n),
    c = n.prefer_assets_without_overrides ? V : U,
    u = r.flatMap((e) => {
      let t = k(e);
      return t ? [t] : [];
    }),
    d = await Promise.all(
      u.map(async (e) => {
        try {
          let [t, n, r] = await Promise.all([
            a.fetchQuery(R(o, e)),
            a.fetchQuery(B(o, e)),
            a.fetchQuery(c(o, e)),
          ]);
          if (!n?.visible || p(t, s)) return;
          let i = r,
            l = D(n, r, `header`);
          if (l) {
            let [e, t] = await Promise.all([
              a.fetchQuery(B(o, l)),
              a.fetchQuery(c(o, l)),
            ]);
            e?.visible && (i = t);
          }
          return i ? w(i, !0)[0] : void 0;
        } catch {
          return;
        }
      }),
    );
  for (let e of d.filter((e) => !!e).slice(0, i)) K(e, 0);
}
async function ze(e, t, n, r = Be(t, n)) {
  let { queryClient: i, storeItemLoader: a } = e,
    o = t.prefer_assets_without_overrides ? V : U,
    s = n.flatMap((e) => {
      let t = k(e);
      return t ? [t] : [];
    });
  if (
    (await Promise.all([
      i.ensureQueryData(E()).catch(() => void 0),
      ...s.flatMap((e) => [
        i.prefetchQuery(B(a, e)),
        i.prefetchQuery(o(a, e)),
        i.prefetchQuery(Se(a, e)),
        i.prefetchQuery(be(a, e)),
        i.prefetchQuery(De(a, e)),
        i.prefetchQuery(R(a, e)),
        ...(r ? [i.prefetchQuery(Ce(a, e)), i.prefetchQuery(Oe(a, e))] : []),
      ]),
    ]),
    !I(t))
  )
    return;
  let c = new Set();
  for (let e of s) {
    let t = i.getQueryData(B(a, e).queryKey)?.related_items?.parent_appid;
    t && c.add(t);
  }
  await Promise.all(Array.from(c, (e) => i.prefetchQuery(B(a, { appid: e }))));
}
function Be(e, t) {
  return t.length === 1
    ? !0
    : e.capsule_style_per_row_array
      ? e.capsule_style_per_row_array.includes(`fullrow`)
      : N(e, !1);
}
var Ve = `saleaction/storeitemsalecrosspromoitems`;
function He(e) {
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
async function Ue(e) {
  let t = `${W.STORE_BASE_URL}${Ve}?${He(e)}`,
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.rgItems;
}
function X(e) {
  return [`StoreItemSaleCrossPromo`, L(e)];
}
function Z(e, t) {
  return [`StoreItemSaleCrossPromoItems`, L(e), t.strEventGID];
}
function We(e) {
  let { data: t } = a({ queryKey: X(e), queryFn: n, staleTime: 1 / 0 });
  return t;
}
function Ge(e, t, n, r) {
  return a({
    queryKey: Z(e, n),
    queryFn: () => Ue({ item: e, sale: n, rgExcludeAppIDs: t.rgExcludeAppIDs }),
    enabled: r,
    staleTime: 1 / 0,
    retry: 1,
  });
}
function Ke() {
  let e = r();
  return q.useCallback((t, n, r) => qe(e, t, n, r), [e]);
}
function qe(e, t, n, r) {
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
var Q = _(`event_capsule`),
  Je = `250px`;
function Ye(e, t, n, r) {
  return n.has(e) || n.has((e + t - 1) % t) || r.has(e);
}
function Xe(e) {
  let { item: t } = e,
    n = We(t),
    { data: r } = ye(t),
    i = n?.rgSales.length ?? 0,
    [a, o] = q.useState(!1),
    s = we({
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
      let r = (e) => Ye(e, n, h.current, g.current),
        i = e;
      if ((r(i) && (i = (e + (t === `next` ? 1 : n - 1)) % n), r(i))) return;
      `${t}${e}${i}${u.current?.rgSales[i]?.strEventGID}`;
      let a = new Set([...g.current, i]);
      ((g.current = a), m(a));
    }, []),
    v = q.useMemo(() => n?.rgSales[0] && et(n.rgSales[0], []), [n]);
  if (!n || !i || !v) return null;
  let y = n.rgSales.map((e, r) =>
      (0, J.jsx)(
        Ze,
        {
          item: t,
          crossPromo: n,
          sale: e,
          bShown: c.has(r),
          bLoad: Ye(r, i, c, p),
          bPreloadImages: a,
          bRecordImpression: a,
        },
        e.strEventGID,
      ),
    ),
    b = r?.name
      ? z(`#Sale_CrossPromoSale_EventCapsuleHeading_StoreItem`, r.name)
      : void 0;
  return (0, J.jsx)(`div`, {
    ref: s,
    children: (0, J.jsx)(me, {
      enabled: !a,
      children: (0, J.jsx)(Ie, {
        event: v.event,
        section: v.section,
        language: G(W.LANGUAGE),
        strHeading: b,
        children:
          i === 1
            ? y[0]
            : (0, J.jsx)(F, {
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
function Ze(e) {
  let {
      item: t,
      crossPromo: n,
      sale: i,
      bShown: o,
      bLoad: s,
      bPreloadImages: c,
      bRecordImpression: l,
    } = e,
    u = G(W.LANGUAGE),
    d = a({
      ...pe(
        {
          clanAccountID: i.clanAccountID,
          strEventGID: i.strEventGID,
          eLanguage: u,
        },
        y,
      ),
      enabled: s,
    }),
    f = Ge(t, n, i, s),
    p = d.data,
    m = f.data,
    h = ve();
  q.useEffect(() => {
    l &&
      o &&
      p &&
      (`${i.strEventGID}`, h.MarkEventShown(p.strEventGID, p.clanAccountID, 3));
  }, [l, o, p, i, h]);
  let { event: g, section: _ } = q.useMemo(() => et(i, m ?? []), [i, m]),
    v = r(),
    x = Te();
  q.useEffect(() => {
    s && m?.length && ze({ queryClient: v, storeItemLoader: x }, _, $(m));
  }, [s, m, _, v, x]);
  let S = q.useRef(!1);
  return (
    q.useEffect(() => {
      c &&
        s &&
        !o &&
        p &&
        m?.length &&
        !S.current &&
        ((S.current = !0),
        `${i.strEventGID}`,
        p.strCapsuleURL && K(p.strCapsuleURL, 0),
        Re({ queryClient: v, storeItemLoader: x }, g, _, $(m), Q));
    }, [c, s, o, p, m, i, g, _, v, x]),
    !o || !p || !m?.length
      ? (0, J.jsx)(Qe, { event: g, section: _ })
      : (0, J.jsx)(Ne, {
          event: g,
          section: _,
          language: u,
          promotedSaleEvent: p,
          Frame: b,
          nMaxCapsules: Q,
        })
  );
}
function Qe(e) {
  let { event: t, section: n } = e,
    r = xe();
  return (0, J.jsx)(v, {
    event: t,
    section: n,
    language: G(W.LANGUAGE),
    bInGamepadUI: r,
    placeholderHeight: Je,
    children: (0, J.jsx)($e, {}),
  });
}
function $e() {
  return (0, J.jsx)(A, { capsules_per_row: [Q] });
}
function et(e, t) {
  let n = $(t),
    r = ge(e.clanAccountID, 1, `crosspromote`, Math.floor(Date.now() / 1e3)),
    i = Le(
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
      ...c(i)[0],
      capsules_per_row_array: [Q],
      show_as_carousel: !0,
      carousel_rows: 1,
    };
  return ((r.jsondata.sale_sections = [a]), { event: r, section: a });
}
function $(e) {
  return e.flatMap((e) => {
    let t = O(e);
    return t ? [t] : [];
  });
}
var tt = `_7J8FxbBVGEM-`;
function nt(e) {
  let { item: t, rgSales: n, rgExcludeAppIDs: r } = e,
    [i, a] = q.useState(!1),
    o = Ke();
  return (
    q.useEffect(() => {
      (o(t, n, r), a(!0));
    }, [t, n, r, o]),
    i
      ? (0, J.jsx)(H, {
          feature: `sale-crosspromo`,
          children: (0, J.jsx)(`div`, {
            className: tt,
            children: (0, J.jsx)(Xe, { item: t }),
          }),
        })
      : null
  );
}
export { nt as default };
