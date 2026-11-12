/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  bt as n,
  dt as r,
  ft as i,
  lt as a,
  st as o,
} from "./chunk~01cfc309bf.js";
import { at as s, pt as c } from "./chunk~6b8ddcaac8.js";
import {
  $ as l,
  A as u,
  C as d,
  D as f,
  M as p,
  O as m,
  a as h,
  c as g,
  f as _,
  i as v,
  j as y,
  k as b,
  n as x,
  o as S,
  r as ee,
  s as C,
  t as te,
  u as ne,
  x as w,
  y as re,
} from "./chunk~b8ca037aae.js";
import { _ as T, d as E, f as D, o as O, t as k } from "./chunk~cbbb6ae37c.js";
import { t as A } from "./chunk~b980924b6a.js";
import { i as ie } from "./chunk~331382b23f.js";
import { o as ae } from "./chunk~d43c81a658.js";
import { i as oe } from "./chunk~21cdc464a1.js";
import { t as j } from "./chunk~710e3cfd2f.js";
import {
  a as M,
  g as N,
  r as P,
  s as F,
  t as I,
  v as se,
} from "./chunk~3720b337f3.js";
import { n as ce, t as le } from "./chunk~379edc388d.js";
import {
  $v as L,
  Dv as R,
  Jy as z,
  L as ue,
  Pv as de,
  Tv as fe,
  Wb as B,
  bv as pe,
  gv as V,
  hv as me,
  mv as H,
  nl as he,
  pt as U,
  pv as W,
  qb as G,
  uv as K,
  wc as ge,
  wv as _e,
  xv as ve,
  yS as q,
} from "./main.js";
async function J(e, t = 1e3) {
  return await new Promise((n, r) => {
    let i = new Image();
    ((i.src = e),
      (i.onload = () => n(`success`)),
      (i.onerror = () => n(`error`)),
      t > 0 && window.setTimeout(() => n(`timeout`), t));
  });
}
var Y = e(t(), 1);
function X(e, t, n) {
  if (!e) return !1;
  let r = !n?.bHasHideIgnoredValue || n.bHideIgnored;
  return (e.ignored && r) ||
    (e.excluded_tagids?.length ?? 0) > 0 ||
    (e.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (n?.bHideOwned && e.already_owned) ||
    (n?.bHideWishlisted && e.on_wishlist)
    ? !0
    : t && !!(e.already_owned || e.demo_for_owned_game);
}
function ye(e) {
  return e.map((e) => e.data);
}
function be(e, t, n, r) {
  let i = K(),
    o = e.BUsesContentHubForItemSource(),
    s = !!n?.bHideOwned,
    c = !!n?.bHideWishlisted,
    l = !!n?.bHideIgnored,
    u = !!n?.bHasHideIgnoredValue,
    d = a({
      queries: (t ?? []).map((e) => {
        let t = R(i, E(e));
        return r ? { ...t, enabled: !1 } : t;
      }),
      combine: ye,
    });
  return (0, Y.useMemo)(() => {
    if (!t) return { capsules: void 0, nHiddenCapsules: 0 };
    let e = {
        bHideOwned: s,
        bHideWishlisted: c,
        bHideIgnored: l,
        bHasHideIgnoredValue: u,
      },
      n = 0;
    return {
      capsules: t.filter((t, r) => {
        let i = d[r];
        return !X(i, o, e) || ((!i?.already_owned || s) && n++, !1);
      }),
      nHiddenCapsules: n,
    };
  }, [t, d, o, s, c, l, u]);
}
function xe(e) {
  let { capsules: t } = e,
    n = K();
  return (a({ queries: (t ?? []).map((e) => R(n, E(e))), combine: Se }), null);
}
function Se() {
  return null;
}
var Z = i(),
  Ce = 250;
function we(e) {
  let {
      event: t,
      section: n,
      language: r,
      promotedSaleEvent: i,
      Frame: a = h,
      nMaxCapsules: o,
    } = e,
    s = B(),
    c = ie(),
    { nMaxCapsulesPerRow: l, bScreenIsWide: d } = ae(n.section_type),
    g = Y.useContext(oe),
    S = y(t, n, !0),
    { capsules: C, nHiddenCapsules: T } = be(t, S, void 0, !0),
    E = o ? C?.slice(0, o) : C,
    D = Y.useMemo(() => re(n, E?.length), [n, E?.length]),
    O = u(t, n),
    k = p(t, n),
    [j, M] = Y.useState(0),
    N = ne(D, s);
  if (m(t, n) === `personalized_carousel`) {
    let e = f(t, n, O);
    if (e === void 0) return (0, Z.jsx)(A, { capsules_per_row: N });
    if (e === null) return null;
  }
  let P;
  if (!E) P = (0, Z.jsx)(A, { capsules_per_row: N });
  else {
    let e = v({
        saleEvent: t,
        section: D,
        capsules: E,
        language: r,
        bInGamepadUI: s,
        nMaxCapsulesPerRow: l,
        bScreenIsWide: d,
        nShowAdditionalRows: j,
        bPaginationPills: g,
      }),
      { content: i, bAdditionalContent: a } = _(e);
    if (((P = i), !P && !c)) return null;
    P &&
      a &&
      (P = (0, Z.jsxs)(Z.Fragment, {
        children: [
          P,
          (0, Z.jsx)(ee, {
            section: D,
            nRowsWithNext: w(D, j) + 1,
            nCapsules: E.length,
            rgRowSizes: N,
            onShowMore: () => M(j + x(n)),
          }),
        ],
      }));
  }
  let { feature: F, depth: I } = te(n, t, k);
  return (0, Z.jsx)(U, {
    feature: F,
    depth: I,
    children: (0, Z.jsxs)(a, {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: s,
      placeholderHeight: Te(D, E?.length ?? 0, N) + `px`,
      nHiddenCapsules: T,
      personalizedCarousels: O,
      promotedSaleEvent: i,
      children: [
        (0, Z.jsx)(b, { event: t, section: n }),
        (0, Z.jsx)(xe, { capsules: S }),
        P,
      ],
    }),
  });
}
function Te(e, t, n) {
  let r = 0;
  if (n.length > 0) for (let e = t; e > 0; r++) e -= n[r % n.length];
  let i = Math.min(r, w(e, 0));
  return Math.max(1, i) * Ce;
}
function Ee(e) {
  let { event: t, section: n, language: r, strHeading: i, children: a } = e;
  return (0, Z.jsxs)(`div`, {
    className: ge(s, M),
    children: [
      (0, Z.jsx)(`div`, {
        className: c,
        children: (0, Z.jsx)(l, {
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
function De(e, t) {
  return {
    ...le(`crosspromotesalepage`, ``),
    sale_page_cross_promo_sales: e,
    use_random_order: !1,
    show_as_carousel: !0,
    sale_page_cross_promo_layout: t,
    capsules_per_row_array: [4],
    carousel_rows: 1,
  };
}
async function Oe(e, t, n, r, i) {
  let { queryClient: a, storeItemLoader: o } = e,
    s = t.BUsesContentHubForItemSource(),
    c = n.prefer_assets_without_overrides ? H : W,
    l = r.flatMap((e) => {
      let t = E(e);
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
          if (!n?.visible || X(t, s)) return;
          let i = r,
            l = k(n, r, `header`);
          if (l) {
            let [e, t] = await Promise.all([
              a.fetchQuery(V(o, l)),
              a.fetchQuery(c(o, l)),
            ]);
            e?.visible && (i = t);
          }
          return i ? T(i, !0)[0] : void 0;
        } catch {
          return;
        }
      }),
    );
  for (let e of u.filter((e) => !!e).slice(0, i)) J(e, 0);
}
async function ke(e, t, n, r = Ae(t, n)) {
  let { queryClient: i, storeItemLoader: a } = e,
    o = t.prefer_assets_without_overrides ? H : W,
    s = n.flatMap((e) => {
      let t = E(e);
      return t ? [t] : [];
    });
  if (
    (await Promise.all([
      i.ensureQueryData(O()).catch(() => void 0),
      ...s.flatMap((e) => [
        i.prefetchQuery(V(a, e)),
        i.prefetchQuery(o(a, e)),
        i.prefetchQuery(pe(a, e)),
        i.prefetchQuery(fe(a, e)),
        i.prefetchQuery(_e(a, e)),
        i.prefetchQuery(R(a, e)),
        ...(r ? [i.prefetchQuery(me(a, e)), i.prefetchQuery(ve(a, e))] : []),
      ]),
    ]),
    !C(t))
  )
    return;
  let c = new Set();
  for (let e of s) {
    let t = i.getQueryData(V(a, e).queryKey)?.related_items?.parent_appid;
    t && c.add(t);
  }
  await Promise.all(Array.from(c, (e) => i.prefetchQuery(V(a, { appid: e }))));
}
function Ae(e, t) {
  return t.length === 1
    ? !0
    : e.capsule_style_per_row_array
      ? e.capsule_style_per_row_array.includes(`fullrow`)
      : g(e, !1);
}
var je = `saleaction/storeitemsalecrosspromoitems`;
function Me(e) {
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
async function Ne(e) {
  let t = `${G.STORE_BASE_URL}${je}?${Me(e)}`,
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.rgItems;
}
function Pe(e) {
  return [`StoreItemSaleCrossPromo`, L(e)];
}
function Fe(e, t) {
  return [`StoreItemSaleCrossPromoItems`, L(e), t.strEventGID];
}
function Ie(e) {
  let { data: t } = o({ queryKey: Pe(e), queryFn: n, staleTime: 1 / 0 });
  return t;
}
function Le(e, t, n, r) {
  return o({
    queryKey: Fe(e, n),
    queryFn: () => Ne({ item: e, sale: n, rgExcludeAppIDs: t.rgExcludeAppIDs }),
    enabled: r,
    staleTime: 1 / 0,
    retry: 1,
  });
}
function Re() {
  let e = r();
  return Y.useCallback((t, n, r) => ze(e, t, n, r), [e]);
}
function ze(e, t, n, r) {
  for (let { rgItems: r, ...i } of n) r && e.setQueryData(Fe(t, i), r);
  let i = {
    rgSales: n.map(({ clanAccountID: e, strEventGID: t }) => ({
      clanAccountID: e,
      strEventGID: t,
    })),
    rgExcludeAppIDs: r,
  };
  e.setQueryData(Pe(t), i);
}
var Q = N(`event_capsule`),
  Be = `250px`;
function Ve(e, t, n, r) {
  return n.has(e) || n.has((e + t - 1) % t) || r.has(e);
}
function He(e) {
  let { item: t } = e,
    n = Ie(t),
    { data: r } = de(t),
    i = n?.rgSales.length ?? 0,
    [a, o] = Y.useState(!1),
    s = he({
      onEnter: () => {
        o(!0);
      },
    }),
    [c, l] = Y.useState(() => new Set([0])),
    u = Y.useRef(n);
  u.current = n;
  let d = Y.useRef(a);
  d.current = a;
  let f = Y.useCallback((e) => {
      let t = u.current?.rgSales[e];
      (`${e}${t?.strEventGID}${t?.clanAccountID}`,
        d.current,
        l((t) => (t.has(e) ? t : new Set([...t, e]))));
    }, []),
    [p, m] = Y.useState(() => new Set()),
    h = Y.useRef(c);
  h.current = c;
  let g = Y.useRef(p);
  g.current = p;
  let _ = Y.useCallback((e, t) => {
      let n = u.current?.rgSales.length ?? 0;
      if (!n) return;
      let r = (e) => Ve(e, n, h.current, g.current),
        i = e;
      if ((r(i) && (i = (e + (t === `next` ? 1 : n - 1)) % n), r(i))) return;
      `${t}${e}${i}${u.current?.rgSales[i]?.strEventGID}`;
      let a = new Set([...g.current, i]);
      ((g.current = a), m(a));
    }, []),
    v = Y.useMemo(() => n?.rgSales[0] && Ke(n.rgSales[0], []), [n]);
  if (!n || !i || !v) return null;
  let y = n.rgSales.map((e, r) =>
      (0, Z.jsx)(
        Ue,
        {
          item: t,
          crossPromo: n,
          sale: e,
          bShown: c.has(r),
          bLoad: Ve(r, i, c, p),
          bPreloadImages: a,
          bRecordImpression: a,
        },
        e.strEventGID,
      ),
    ),
    b = r?.name
      ? z(`#Sale_CrossPromoSale_EventCapsuleHeading_StoreItem`, r.name)
      : void 0;
  return (0, Z.jsx)(`div`, {
    ref: s,
    children: (0, Z.jsx)(j, {
      enabled: !a,
      children: (0, Z.jsx)(Ee, {
        event: v.event,
        section: v.section,
        language: q(G.LANGUAGE),
        strHeading: b,
        children:
          i === 1
            ? y[0]
            : (0, Z.jsx)(S, {
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
function Ue(e) {
  let {
      item: t,
      crossPromo: n,
      sale: i,
      bShown: a,
      bLoad: s,
      bPreloadImages: c,
      bRecordImpression: l,
    } = e,
    u = q(G.LANGUAGE),
    f = o({
      ...d(
        {
          clanAccountID: i.clanAccountID,
          strEventGID: i.strEventGID,
          eLanguage: u,
        },
        F,
      ),
      enabled: s,
    }),
    p = Le(t, n, i, s),
    m = f.data,
    h = p.data,
    g = ue();
  Y.useEffect(() => {
    l &&
      a &&
      m &&
      (`${i.strEventGID}`, g.MarkEventShown(m.strEventGID, m.clanAccountID, 3));
  }, [l, a, m, i, g]);
  let { event: _, section: v } = Y.useMemo(() => Ke(i, h ?? []), [i, h]),
    y = r(),
    b = K();
  Y.useEffect(() => {
    s && h?.length && ke({ queryClient: y, storeItemLoader: b }, v, $(h));
  }, [s, h, v, y, b]);
  let x = Y.useRef(!1);
  return (
    Y.useEffect(() => {
      c &&
        s &&
        !a &&
        m &&
        h?.length &&
        !x.current &&
        ((x.current = !0),
        `${i.strEventGID}`,
        m.strCapsuleURL && J(m.strCapsuleURL, 0),
        Oe({ queryClient: y, storeItemLoader: b }, _, v, $(h), Q));
    }, [c, s, a, m, h, i, _, v, y, b]),
    !a || !m || !h?.length
      ? (0, Z.jsx)(We, { event: _, section: v })
      : (0, Z.jsx)(we, {
          event: _,
          section: v,
          language: u,
          promotedSaleEvent: m,
          Frame: I,
          nMaxCapsules: Q,
        })
  );
}
function We(e) {
  let { event: t, section: n } = e,
    r = B();
  return (0, Z.jsx)(P, {
    event: t,
    section: n,
    language: q(G.LANGUAGE),
    bInGamepadUI: r,
    placeholderHeight: Be,
    children: (0, Z.jsx)(Ge, {}),
  });
}
function Ge() {
  return (0, Z.jsx)(A, { capsules_per_row: [Q] });
}
function Ke(e, t) {
  let n = $(t),
    r = ce(e.clanAccountID, 1, `crosspromote`, Math.floor(Date.now() / 1e3)),
    i = De(
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
      ...se(i)[0],
      capsules_per_row_array: [Q],
      show_as_carousel: !0,
      carousel_rows: 1,
    };
  return ((r.jsondata.sale_sections = [a]), { event: r, section: a });
}
function $(e) {
  return e.flatMap((e) => {
    let t = D(e);
    return t ? [t] : [];
  });
}
var qe = `_7J8FxbBVGEM-`;
function Je(e) {
  let { item: t, rgSales: n, rgExcludeAppIDs: r } = e,
    [i, a] = Y.useState(!1),
    o = Re();
  return (
    Y.useEffect(() => {
      (o(t, n, r), a(!0));
    }, [t, n, r, o]),
    i
      ? (0, Z.jsx)(U, {
          feature: `sale-crosspromo`,
          children: (0, Z.jsx)(`div`, {
            className: qe,
            children: (0, Z.jsx)(He, { item: t }),
          }),
        })
      : null
  );
}
export { Je as default };
