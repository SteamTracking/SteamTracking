/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, ct as n, dt as r, ut as i } from "./chunk~01cfc309bf.js";
import {
  $t as a,
  B as o,
  Dn as s,
  F as c,
  H as l,
  Pn as u,
  Q as d,
  U as f,
  V as p,
  W as m,
  Z as h,
  a as g,
  c as _,
  cr as v,
  d as y,
  et as b,
  f as x,
  i as S,
  it as C,
  l as ee,
  m as te,
  nt as w,
  o as ne,
  p as re,
  rt as T,
  s as ie,
  tt as E,
  v as D,
  y as ae,
  zt as oe,
} from "./chunk~6b8ddcaac8.js";
import { A as se, s as O } from "./chunk~f57d770d64.js";
import {
  a as ce,
  f as le,
  n as k,
  s as A,
  u as ue,
} from "./chunk~4eed35ad1f.js";
import { f as j, i as M, o as de, t as fe } from "./chunk~cbbb6ae37c.js";
import { r as N } from "./chunk~f4c928a27a.js";
import "./chunk~21cdc464a1.js";
import { n as pe, t as me } from "./chunk~710e3cfd2f.js";
import {
  C as he,
  T as P,
  a as ge,
  c as _e,
  d as ve,
  f as ye,
  h as be,
  i as xe,
  l as Se,
  o as Ce,
  p as F,
  r as we,
  s as Te,
  t as Ee,
  u as De,
} from "./chunk~b8ca037aae.js";
import {
  c as Oe,
  f as ke,
  g as Ae,
  h as I,
  n as je,
  p as Me,
  r as Ne,
  s as Pe,
  t as Fe,
  u as Ie,
} from "./chunk~3720b337f3.js";
import { t as Le } from "./chunk~379edc388d.js";
import {
  AS as Re,
  Av as ze,
  Cv as L,
  Ev as R,
  Fv as Be,
  Lv as z,
  Pc as B,
  Pv as Ve,
  Tv as He,
  bv as V,
  ex as H,
  gt as Ue,
  ib as U,
  jv as We,
  lb as Ge,
  ox as W,
  rx as Ke,
  wv as G,
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
var q = e(t(), 1);
async function J(e, t, n, r, i) {
  let { queryClient: a, storeItemLoader: o } = e,
    s = x(t, n),
    c = n.prefer_assets_without_overrides ? G : L,
    l = r.flatMap((e) => {
      let t = v(e);
      return t ? [t] : [];
    }),
    u = await Promise.all(
      l.map(async (e) => {
        try {
          let [t, n, r] = await Promise.all([
            a.fetchQuery(z(o, e)),
            a.fetchQuery(R(o, e)),
            a.fetchQuery(c(o, e)),
          ]);
          if (!n?.visible || y(t, s)) return;
          let i = r,
            l = fe(n, r, `header`);
          if (l) {
            let [e, t] = await Promise.all([
              a.fetchQuery(R(o, l)),
              a.fetchQuery(c(o, l)),
            ]);
            e?.visible && (i = t);
          }
          return i ? j(i, !0)[0] : void 0;
        } catch {
          return;
        }
      }),
    );
  for (let e of u.filter((e) => !!e).slice(0, i)) K(e, 0);
}
async function Y(e, t, n, r = qe(t, n)) {
  let { queryClient: i, storeItemLoader: a } = e,
    o = t.prefer_assets_without_overrides ? G : L,
    s = n.flatMap((e) => {
      let t = v(e);
      return t ? [t] : [];
    });
  if (
    (await Promise.all([
      i.ensureQueryData(de()).catch(() => void 0),
      ...s.flatMap((e) => [
        i.prefetchQuery(R(a, e)),
        i.prefetchQuery(o(a, e)),
        i.prefetchQuery(ze(a, e)),
        i.prefetchQuery(Be(a, e)),
        i.prefetchQuery(Ve(a, e)),
        i.prefetchQuery(z(a, e)),
        ...(r ? [i.prefetchQuery(He(a, e)), i.prefetchQuery(We(a, e))] : []),
      ]),
    ]),
    !Se(t))
  )
    return;
  let c = new Set();
  for (let e of s) {
    let t = i.getQueryData(R(a, e).queryKey)?.related_items?.parent_appid;
    t && c.add(t);
  }
  await Promise.all(Array.from(c, (e) => i.prefetchQuery(R(a, { appid: e }))));
}
function qe(e, t) {
  return t.length === 1
    ? !0
    : e.capsule_style_per_row_array
      ? e.capsule_style_per_row_array.includes(`fullrow`)
      : De(e, !1);
}
var Je = q.createContext(void 0),
  Ye = q.createContext(void 0);
function Xe(e) {
  return (
    (O(e) || !!e.sale_tag_filter) &&
    !e.enable_faceted_browsing &&
    !e.disable_visibility_tracking &&
    e.section_type !== `trailercarousel`
  );
}
function Ze(e, t, n, r) {
  let i = [],
    a = [];
  for (let n of e) (t(n) ? a : i).push(n);
  return a.length ? (r && i.length < n ? i : i.concat(a)) : e;
}
function Qe(e, t, n, r) {
  let i = q.useContext(Je),
    a = q.useContext(M),
    o = q.useContext(Ye),
    s = q.useMemo(
      () =>
        o ?? (a ? e.GetSaleSectionIncludingFooterSections().indexOf(a) : -1),
      [e, a, o],
    ),
    c = q.useId(),
    l = ve(t, 0, r) || n?.length || 0,
    u = q.useMemo(() => {
      if (!i || !n || s < 0) return n;
      let e = Xe(t)
        ? Ze(
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
var X = r(),
  $e = 250;
function Z(e) {
  let {
      event: t,
      section: n,
      language: r,
      promotedSaleEvent: i,
      Frame: a = _e,
      nMaxCapsules: o,
    } = e,
    s = H(),
    l = oe(),
    { nMaxCapsulesPerRow: u, bScreenIsWide: d } = ue(n.section_type),
    f = q.useContext(le),
    p = q.useContext(ce),
    m = ee(t, n, !0),
    h = Qe(t, n, m, s),
    { capsules: v, nHiddenCapsules: y } = te(t, n, h, void 0, !0),
    b = o ? v?.slice(0, o) : v,
    x = q.useMemo(() => he(n, b?.length), [n, b?.length]),
    S = et(x, b),
    C = _(t, n),
    w = ae(t, n),
    [T, E] = q.useState(0),
    D = F(x, s),
    O = f && !d && !s && se(n),
    k = O ? rt(x, D, s) : void 0;
  if (ne(t, n) === `personalized_carousel`) {
    let e = g(t, n, C);
    if (e === void 0)
      return (0, X.jsx)(N, { capsules_per_row: D, swipe_row: k });
    if (e === null || (v && v.length < c(n) && !l)) return null;
  }
  let A;
  if (!b) A = (0, X.jsx)(N, { capsules_per_row: D, swipe_row: k });
  else {
    let e = Te({
        saleEvent: t,
        section: x,
        capsules: b,
        language: r,
        bInGamepadUI: s,
        nMaxCapsulesPerRow: u,
        bScreenIsWide: d,
        nShowAdditionalRows: T,
        bPaginationPills: f,
        bDropShortLastCarouselPage: p,
      }),
      { content: i, bAdditionalContent: a } = be({
        ...e,
        fnBCapsuleHasNoTallArt: S,
      });
    if (((A = i), !A && !l)) return null;
    A &&
      a &&
      (A = (0, X.jsxs)(X.Fragment, {
        children: [
          A,
          (0, X.jsx)(Ce, {
            section: x,
            nRowsWithNext: P(x, T) + 1,
            nCapsules: b.length,
            rgRowSizes: D,
            onShowMore: () => E(T + ge(n)),
          }),
        ],
      }));
  }
  let { feature: j, depth: M } = xe(n, t, w);
  return (0, X.jsx)(Ue, {
    feature: j,
    depth: M,
    children: (0, X.jsxs)(a, {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: s,
      placeholderHeight: (O ? $e : it(x, b?.length ?? 0, D)) + `px`,
      nHiddenCapsules: y,
      personalizedCarousels: C,
      promotedSaleEvent: i,
      children: [
        (0, X.jsx)(ie, { event: t, section: n }),
        (0, X.jsx)(re, { capsules: m }),
        A,
      ],
    }),
  });
}
function et(e, t) {
  let r = V(),
    i = e.prefer_assets_without_overrides ? G : L,
    a = e.fallback_tall_half_capsule
      ? (t ?? []).filter((e) => `appid` in (v(e) ?? {}))
      : [],
    o = n({ queries: a.map((e) => i(r, v(e))) }),
    s = e.fallback_tall_half_capsule === `no_store_vertical`,
    c = new Set(
      a.filter((e, t) => {
        let n = o[t].data;
        return !!n && (s ? !n.hero_capsule : !nt(n));
      }),
    );
  return (e) => c.has(e);
}
var tt = `portrait.png`;
function nt(e) {
  return !!e.hero_capsule || (!!e.library_capsule && e.library_capsule !== tt);
}
function rt(e, t, n) {
  return t[0] === 1
    ? { width: `80vw`, height: `320px` }
    : ye(e, n)[0] === `tall`
      ? `tall_capsule`
      : `capsule`;
}
function it(e, t, n) {
  let r = 0;
  if (n.length > 0) for (let e = t; e > 0; r++) e -= n[r % n.length];
  let i = Math.min(r, P(e, 0));
  return Math.max(1, i) * $e;
}
function at(e) {
  let { bLoadNow: t = !1, ...r } = e,
    { event: i, section: a } = r,
    o = Re(Ke.LANGUAGE),
    c = q.useMemo(() => E(a), [a]),
    [l] = D(C),
    u = n({ queries: c.map((e) => ({ ...st(e, o), enabled: !1 })) }),
    d = I(c, !0),
    f = c.map((e, t) => (p(e) ? d[t].data : u[t].data)),
    g = c.some((e, t) => (ot(e) && u[t].isPending) || d[t].bPending),
    [_] = q.useState(g);
  if (T(a).length <= 1 || g) {
    let e = c[0] ?? a,
      n = f[0],
      s = (0, X.jsx)($, {
        ...r,
        section: e,
        bPageItems: !m(a),
        promotedSaleEvent: n,
        bPending: g,
        strForcedLayout: null,
        bDrawAtOnce: _,
      }),
      l = m(a) ? (0, X.jsx)(ut, { section: e, children: s }) : s,
      u = (0, X.jsx)(ct, {
        event: i,
        rgSlideSections: c,
        eLanguage: o,
        strForcedLayout: null,
        bSideBySide: m(a),
      }),
      d = g
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              l,
              t ? u : (0, X.jsx)(pe, { rootMargin: A, children: u }),
            ],
          })
        : l;
    return !g && w(e, n) !== null
      ? d
      : (0, X.jsx)(dt, {
          ...r,
          rgLayouts: [h(e, n, null)],
          strHeading: lt([n]),
          children: d,
        });
  }
  let v = c.flatMap((e, t) => {
    let n = f[t];
    return w(e, n) === null ? [{ slide: e, promotedSaleEvent: n }] : [];
  });
  if (v.length === 0)
    return (0, X.jsx)($, {
      ...r,
      section: c[0],
      promotedSaleEvent: f[0],
      bPending: !1,
      strForcedLayout: null,
      bDrawAtOnce: _,
    });
  let y = v.map(({ slide: e, promotedSaleEvent: t }, n) =>
      (0, X.jsx)(
        $,
        {
          ...r,
          section: e,
          promotedSaleEvent: t,
          bPending: !1,
          strForcedLayout: null,
          bDrawAtOnce: _,
        },
        n,
      ),
    ),
    b = m(a);
  return (0, X.jsx)(dt, {
    ...r,
    rgLayouts: v.map(({ slide: e, promotedSaleEvent: t }) => h(e, t, null)),
    strHeading: lt(v.map(({ promotedSaleEvent: e }) => e)),
    children: b
      ? (0, X.jsx)(`div`, {
          className: B(s, Me),
          children: y.map((e, t) =>
            (0, X.jsx)(ut, { section: v[t].slide, children: e }, t),
          ),
        })
      : (0, X.jsx)(Ee, { event: i, section: a, rgSlides: y }),
  });
}
function ot(e) {
  let t = T(e)[0];
  return !!t?.event_gid && !!t.clan_account_id;
}
function st(e, t) {
  let n = T(e)[0];
  return {
    ...we(
      {
        clanAccountID: n?.clan_account_id ?? 0,
        strEventGID: n?.event_gid ?? ``,
        eLanguage: t,
      },
      Ae,
    ),
    enabled: ot(e),
  };
}
function ct(e) {
  let {
    event: t,
    rgSlideSections: r,
    eLanguage: a,
    strForcedLayout: o,
    bSideBySide: s,
  } = e;
  (n({ queries: r.map((e) => st(e, a)) }), I(r));
  let c = i(),
    l = V();
  return (
    q.useEffect(() => {
      let e = { queryClient: c, storeItemLoader: l };
      r.forEach((n, r) => {
        let i = n.capsules ?? [];
        if (i.length && (Y(e, n, i), r === 0 || s)) {
          let r = d(h(n, void 0, o));
          J(e, t, n, i, r);
        }
      });
    }, [t, r, o, s, c, l]),
    null
  );
}
function lt(e) {
  let t = e[0];
  if (!t?.eCreatorRole || !e.every((e) => !!e?.eCreatorRole)) return;
  let n = W.logged_in ? `Recommended_` : ``;
  if (e.length > 1) return U(`#Sale_CrossPromoCreator_Heading_${n}Several`);
  let r = t.strSaleURL
    ? (0, X.jsx)(S, {
        url: t.strSaleURL,
        className: Oe,
        bFocusable: !1,
        children: t.strName,
      })
    : t.strName;
  return (0, X.jsx)(`div`, {
    children: Ge(`#Sale_CrossPromoCreator_Heading_${n}${t.eCreatorRole}`, r),
  });
}
function ut(e) {
  let { section: t, children: n } = e,
    r = T(t)[0]?.comparison_label;
  return (0, X.jsxs)(`div`, {
    className: Ie,
    children: [
      r && (0, X.jsx)(`div`, { className: `P1C9O-r-7FI-`, children: r }),
      n,
    ],
  });
}
function dt(e) {
  let { section: t, language: n, rgLayouts: r, strHeading: i, children: a } = e,
    s = q.useContext(Ne),
    c = b(t, n);
  if (o(t) || (!c && (!r.some(l) || (s && !i))))
    return (0, X.jsx)(X.Fragment, { children: a });
  let u = i;
  return (
    c
      ? (u = c)
      : u == null &&
        W.logged_in &&
        (u = U(`#Sale_CrossPromoSale_EventCapsuleHeading_Recommended`)),
    (0, X.jsx)(Q, {
      ...e,
      strHeading: u,
      bOneSlide: r.length === 1,
      children: (0, X.jsx)(je, { value: !0, children: a }),
    })
  );
}
function Q(e) {
  let {
      event: t,
      section: n,
      language: r,
      strHeading: i,
      bOneSlide: o,
      children: c,
    } = e,
    l = H(),
    [d, f] = q.useState(null);
  return (0, X.jsxs)(`div`, {
    className: B(s, ke),
    children: [
      (0, X.jsxs)(`div`, {
        className: u,
        children: [
          (0, X.jsx)(a, {
            section: n,
            event: t,
            language: r,
            promotedSale: null,
            title: i || U(`#Sale_CrossPromoSale_EventCapsuleHeading`),
          }),
          l &&
            d &&
            (0, X.jsx)(k, { label: d.strLabel, shown: d.bShown, button: `X` }),
        ],
      }),
      (0, X.jsx)(Fe, { value: o ? f : null, children: c }),
    ],
  });
}
function $(e) {
  let {
      section: t,
      language: n,
      promotedSaleEvent: r,
      bPending: i,
      strForcedLayout: a,
      bDrawAtOnce: o = !1,
      bPageItems: s = !1,
      ...c
    } = e,
    l = H(),
    u = h(t, r, a),
    p = d(u),
    m = l ? 2 : p,
    g = f(u),
    _ = q.useMemo(
      () => ({
        ...t,
        capsules_per_row_array: [m],
        show_as_carousel: g ? !0 : t.show_as_carousel,
        carousel_rows: g ? 1 : t.carousel_rows,
      }),
      [t, m, g],
    );
  if (i) return (0, X.jsx)(N, { capsules_per_row: F(_, l) });
  if (w(t, r) !== null) return null;
  let v = (0, X.jsx)(Z, {
    ...c,
    section: _,
    language: n,
    promotedSaleEvent: r ?? void 0,
    Frame: Pe[u],
    nMaxCapsules: g ? (s ? 12 : p) : void 0,
  });
  return o ? (0, X.jsx)(me, { enabled: !1, children: v }) : v;
}
function ft(e, t) {
  return {
    ...Le(`crosspromotesalepage`, ``),
    sale_page_cross_promo_sales: e,
    use_random_order: !1,
    show_as_carousel: !0,
    sale_page_cross_promo_layout: t,
    capsules_per_row_array: [4],
    carousel_rows: 1,
  };
}
export { Y as a, Z as i, Q as n, J as o, at as r, K as s, ft as t };
