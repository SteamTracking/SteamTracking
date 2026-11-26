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
  d as v,
  et as y,
  f as b,
  i as x,
  it as S,
  l as ee,
  m as te,
  nt as C,
  o as ne,
  p as re,
  rt as w,
  s as ie,
  sr as T,
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
import { f as j, i as de, o as fe, t as pe } from "./chunk~cbbb6ae37c.js";
import { r as M } from "./chunk~f4c928a27a.js";
import "./chunk~21cdc464a1.js";
import { n as me, t as he } from "./chunk~710e3cfd2f.js";
import {
  C as ge,
  T as N,
  a as _e,
  c as ve,
  d as ye,
  f as be,
  h as xe,
  i as Se,
  l as Ce,
  o as we,
  p as P,
  r as Te,
  s as Ee,
  t as De,
  u as Oe,
} from "./chunk~b8ca037aae.js";
import {
  c as ke,
  f as Ae,
  g as je,
  h as F,
  n as Me,
  p as Ne,
  r as Pe,
  s as Fe,
  t as Ie,
  u as Le,
} from "./chunk~3720b337f3.js";
import { t as Re } from "./chunk~379edc388d.js";
import {
  AS as ze,
  Av as Be,
  Cv as I,
  Ev as L,
  Fv as Ve,
  Lv as He,
  Pc as R,
  Pv as Ue,
  Tv as We,
  bv as Ge,
  ex as z,
  gt as Ke,
  ib as B,
  jv as qe,
  lb as Je,
  ox as V,
  rx as Ye,
  wv as H,
} from "./main.js";
async function U(e, t = 1e3) {
  return await new Promise((n, r) => {
    let i = new Image();
    ((i.src = e),
      (i.onload = () => n(`success`)),
      (i.onerror = () => n(`error`)),
      t > 0 && window.setTimeout(() => n(`timeout`), t));
  });
}
var W = e(t(), 1);
async function G(e, t, n, r, i) {
  let { queryClient: a, storeItemLoader: o } = e,
    s = b(t, n),
    c = n.prefer_assets_without_overrides ? H : I,
    l = r.flatMap((e) => {
      let t = T(e);
      return t ? [t] : [];
    }),
    u = await Promise.all(
      l.map(async (e) => {
        try {
          let [t, n, r] = await Promise.all([
            a.fetchQuery(He(o, e)),
            a.fetchQuery(L(o, e)),
            a.fetchQuery(c(o, e)),
          ]);
          if (!n?.visible || v(t, s)) return;
          let i = r,
            l = pe(n, r, `header`);
          if (l) {
            let [e, t] = await Promise.all([
              a.fetchQuery(L(o, l)),
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
  for (let e of u.filter((e) => !!e).slice(0, i)) U(e, 0);
}
async function K(e, t, n, r = Xe(t, n)) {
  let { queryClient: i, storeItemLoader: a } = e,
    o = t.prefer_assets_without_overrides ? H : I,
    s = n.flatMap((e) => {
      let t = T(e);
      return t ? [t] : [];
    });
  if (
    (await Promise.all([
      i.ensureQueryData(fe()).catch(() => void 0),
      ...s.flatMap((e) => [
        i.prefetchQuery(L(a, e)),
        i.prefetchQuery(o(a, e)),
        i.prefetchQuery(Be(a, e)),
        i.prefetchQuery(Ve(a, e)),
        i.prefetchQuery(Ue(a, e)),
        i.prefetchQuery(He(a, e)),
        ...(r ? [i.prefetchQuery(We(a, e)), i.prefetchQuery(qe(a, e))] : []),
      ]),
    ]),
    !Ce(t))
  )
    return;
  let c = new Set();
  for (let e of s) {
    let t = i.getQueryData(L(a, e).queryKey)?.related_items?.parent_appid;
    t && c.add(t);
  }
  await Promise.all(Array.from(c, (e) => i.prefetchQuery(L(a, { appid: e }))));
}
function Xe(e, t) {
  return t.length === 1
    ? !0
    : e.capsule_style_per_row_array
      ? e.capsule_style_per_row_array.includes(`fullrow`)
      : Oe(e, !1);
}
var Ze = W.createContext(void 0),
  Qe = W.createContext(void 0);
function $e(e) {
  return (
    (O(e) || !!e.sale_tag_filter) &&
    !e.enable_faceted_browsing &&
    !e.disable_visibility_tracking &&
    e.section_type !== `trailercarousel`
  );
}
function et(e, t, n, r) {
  let i = [],
    a = [];
  for (let n of e) (t(n) ? a : i).push(n);
  return a.length ? (r && i.length < n ? i : i.concat(a)) : e;
}
function tt(e, t, n, r) {
  let i = W.useContext(Ze),
    a = W.useContext(de),
    o = W.useContext(Qe),
    s = W.useMemo(
      () =>
        o ?? (a ? e.GetSaleSectionIncludingFooterSections().indexOf(a) : -1),
      [e, a, o],
    ),
    c = W.useId(),
    l = ye(t, 0, r) || n?.length || 0,
    u = W.useMemo(() => {
      if (!i || !n || s < 0) return n;
      let e = $e(t)
        ? et(
            n,
            (e) => i.BSeenAbove(e, s),
            l,
            !!t.visibility_tracking_drop_duplicates,
          )
        : n;
      return (i.SetFirstPage(c, s, e.slice(0, l)), e);
    }, [i, n, s, t, l, c]);
  return (
    W.useEffect(() => {
      if (!(!i || !u || s < 0))
        return (i.SetFirstPage(c, s, u.slice(0, l)), () => i.Remove(c));
    }, [i, u, s, l, c]),
    u
  );
}
var q = r(),
  J = 250;
function Y(e) {
  let {
      event: t,
      section: n,
      language: r,
      promotedSaleEvent: i,
      Frame: a = ve,
      nMaxCapsules: o,
    } = e,
    s = z(),
    l = oe(),
    { nMaxCapsulesPerRow: u, bScreenIsWide: d } = ue(n.section_type),
    f = W.useContext(le),
    p = W.useContext(ce),
    m = ee(t, n, !0),
    h = tt(t, n, m, s),
    { capsules: v, nHiddenCapsules: y } = te(t, n, h, void 0, !0),
    b = o ? v?.slice(0, o) : v,
    x = W.useMemo(() => ge(n, b?.length), [n, b?.length]),
    S = _(t, n),
    C = ae(t, n),
    [w, T] = W.useState(0),
    E = P(x, s),
    D = f && !d && !s && se(n),
    O = D ? nt(x, E, s) : void 0;
  if (ne(t, n) === `personalized_carousel`) {
    let e = g(t, n, S);
    if (e === void 0)
      return (0, q.jsx)(M, { capsules_per_row: E, swipe_row: O });
    if (e === null || (v && v.length < c(n) && !l)) return null;
  }
  let k;
  if (!b) k = (0, q.jsx)(M, { capsules_per_row: E, swipe_row: O });
  else {
    let e = Ee({
        saleEvent: t,
        section: x,
        capsules: b,
        language: r,
        bInGamepadUI: s,
        nMaxCapsulesPerRow: u,
        bScreenIsWide: d,
        nShowAdditionalRows: w,
        bPaginationPills: f,
        bDropShortLastCarouselPage: p,
      }),
      { content: i, bAdditionalContent: a } = xe(e);
    if (((k = i), !k && !l)) return null;
    k &&
      a &&
      (k = (0, q.jsxs)(q.Fragment, {
        children: [
          k,
          (0, q.jsx)(we, {
            section: x,
            nRowsWithNext: N(x, w) + 1,
            nCapsules: b.length,
            rgRowSizes: E,
            onShowMore: () => T(w + _e(n)),
          }),
        ],
      }));
  }
  let { feature: A, depth: j } = Se(n, t, C);
  return (0, q.jsx)(Ke, {
    feature: A,
    depth: j,
    children: (0, q.jsxs)(a, {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: s,
      placeholderHeight: (D ? J : rt(x, b?.length ?? 0, E)) + `px`,
      nHiddenCapsules: y,
      personalizedCarousels: S,
      promotedSaleEvent: i,
      children: [
        (0, q.jsx)(ie, { event: t, section: n }),
        (0, q.jsx)(re, { capsules: m }),
        k,
      ],
    }),
  });
}
function nt(e, t, n) {
  return t[0] === 1
    ? { width: `80vw`, height: `320px` }
    : be(e, n)[0] === `tall`
      ? `tall_capsule`
      : `capsule`;
}
function rt(e, t, n) {
  let r = 0;
  if (n.length > 0) for (let e = t; e > 0; r++) e -= n[r % n.length];
  let i = Math.min(r, N(e, 0));
  return Math.max(1, i) * J;
}
function it(e) {
  let { bLoadNow: t = !1, ...r } = e,
    { event: i, section: a } = r,
    o = ze(Ye.LANGUAGE),
    c = W.useMemo(() => E(a), [a]),
    [l] = D(S),
    u = n({ queries: c.map((e) => ({ ...Z(e, o), enabled: !1 })) }),
    d = F(c, !0),
    f = c.map((e, t) => (p(e) ? d[t].data : u[t].data)),
    g = c.some((e, t) => (X(e) && u[t].isPending) || d[t].bPending),
    [_] = W.useState(g);
  if (w(a).length <= 1 || g) {
    let e = c[0] ?? a,
      n = f[0],
      s = (0, q.jsx)($, {
        ...r,
        section: e,
        bPageItems: !m(a),
        promotedSaleEvent: n,
        bPending: g,
        strForcedLayout: null,
        bDrawAtOnce: _,
      }),
      l = m(a) ? (0, q.jsx)(ot, { section: e, children: s }) : s,
      u = (0, q.jsx)(at, {
        event: i,
        rgSlideSections: c,
        eLanguage: o,
        strForcedLayout: null,
        bSideBySide: m(a),
      }),
      d = g
        ? (0, q.jsxs)(q.Fragment, {
            children: [
              l,
              t ? u : (0, q.jsx)(me, { rootMargin: A, children: u }),
            ],
          })
        : l;
    return !g && C(e, n) !== null
      ? d
      : (0, q.jsx)(st, {
          ...r,
          rgLayouts: [h(e, n, null)],
          strHeading: Q([n]),
          children: d,
        });
  }
  let v = c.flatMap((e, t) => {
    let n = f[t];
    return C(e, n) === null ? [{ slide: e, promotedSaleEvent: n }] : [];
  });
  if (v.length === 0)
    return (0, q.jsx)($, {
      ...r,
      section: c[0],
      promotedSaleEvent: f[0],
      bPending: !1,
      strForcedLayout: null,
      bDrawAtOnce: _,
    });
  let y = v.map(({ slide: e, promotedSaleEvent: t }, n) =>
      (0, q.jsx)(
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
  return (0, q.jsx)(st, {
    ...r,
    rgLayouts: v.map(({ slide: e, promotedSaleEvent: t }) => h(e, t, null)),
    strHeading: Q(v.map(({ promotedSaleEvent: e }) => e)),
    children: b
      ? (0, q.jsx)(`div`, {
          className: R(s, Ne),
          children: y.map((e, t) =>
            (0, q.jsx)(ot, { section: v[t].slide, children: e }, t),
          ),
        })
      : (0, q.jsx)(De, { event: i, section: a, rgSlides: y }),
  });
}
function X(e) {
  let t = w(e)[0];
  return !!t?.event_gid && !!t.clan_account_id;
}
function Z(e, t) {
  let n = w(e)[0];
  return {
    ...Te(
      {
        clanAccountID: n?.clan_account_id ?? 0,
        strEventGID: n?.event_gid ?? ``,
        eLanguage: t,
      },
      je,
    ),
    enabled: X(e),
  };
}
function at(e) {
  let {
    event: t,
    rgSlideSections: r,
    eLanguage: a,
    strForcedLayout: o,
    bSideBySide: s,
  } = e;
  (n({ queries: r.map((e) => Z(e, a)) }), F(r));
  let c = i(),
    l = Ge();
  return (
    W.useEffect(() => {
      let e = { queryClient: c, storeItemLoader: l };
      r.forEach((n, r) => {
        let i = n.capsules ?? [];
        if (i.length && (K(e, n, i), r === 0 || s)) {
          let r = d(h(n, void 0, o));
          G(e, t, n, i, r);
        }
      });
    }, [t, r, o, s, c, l]),
    null
  );
}
function Q(e) {
  let t = e[0];
  if (!t?.eCreatorRole || !e.every((e) => !!e?.eCreatorRole)) return;
  let n = V.logged_in ? `Recommended_` : ``;
  if (e.length > 1) return B(`#Sale_CrossPromoCreator_Heading_${n}Several`);
  let r = t.strSaleURL
    ? (0, q.jsx)(x, {
        url: t.strSaleURL,
        className: ke,
        bFocusable: !1,
        children: t.strName,
      })
    : t.strName;
  return (0, q.jsx)(`div`, {
    children: Je(`#Sale_CrossPromoCreator_Heading_${n}${t.eCreatorRole}`, r),
  });
}
function ot(e) {
  let { section: t, children: n } = e,
    r = w(t)[0]?.comparison_label;
  return (0, q.jsxs)(`div`, {
    className: Le,
    children: [
      r && (0, q.jsx)(`div`, { className: `P1C9O-r-7FI-`, children: r }),
      n,
    ],
  });
}
function st(e) {
  let { section: t, language: n, rgLayouts: r, strHeading: i, children: a } = e,
    s = W.useContext(Pe),
    c = y(t, n);
  if (o(t) || (!c && (!r.some(l) || (s && !i))))
    return (0, q.jsx)(q.Fragment, { children: a });
  let u = i;
  return (
    c
      ? (u = c)
      : u == null &&
        V.logged_in &&
        (u = B(`#Sale_CrossPromoSale_EventCapsuleHeading_Recommended`)),
    (0, q.jsx)(ct, {
      ...e,
      strHeading: u,
      bOneSlide: r.length === 1,
      children: (0, q.jsx)(Me, { value: !0, children: a }),
    })
  );
}
function ct(e) {
  let {
      event: t,
      section: n,
      language: r,
      strHeading: i,
      bOneSlide: o,
      children: c,
    } = e,
    l = z(),
    [d, f] = W.useState(null);
  return (0, q.jsxs)(`div`, {
    className: R(s, Ae),
    children: [
      (0, q.jsxs)(`div`, {
        className: u,
        children: [
          (0, q.jsx)(a, {
            section: n,
            event: t,
            language: r,
            promotedSale: null,
            title: i || B(`#Sale_CrossPromoSale_EventCapsuleHeading`),
          }),
          l &&
            d &&
            (0, q.jsx)(k, { label: d.strLabel, shown: d.bShown, button: `X` }),
        ],
      }),
      (0, q.jsx)(Ie, { value: o ? f : null, children: c }),
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
    l = z(),
    u = h(t, r, a),
    p = d(u),
    m = l ? 2 : p,
    g = f(u),
    _ = W.useMemo(
      () => ({
        ...t,
        capsules_per_row_array: [m],
        show_as_carousel: g ? !0 : t.show_as_carousel,
        carousel_rows: g ? 1 : t.carousel_rows,
      }),
      [t, m, g],
    );
  if (i) return (0, q.jsx)(M, { capsules_per_row: P(_, l) });
  if (C(t, r) !== null) return null;
  let v = (0, q.jsx)(Y, {
    ...c,
    section: _,
    language: n,
    promotedSaleEvent: r ?? void 0,
    Frame: Fe[u],
    nMaxCapsules: g ? (s ? 12 : p) : void 0,
  });
  return o ? (0, q.jsx)(he, { enabled: !1, children: v }) : v;
}
function lt(e, t) {
  return {
    ...Re(`crosspromotesalepage`, ``),
    sale_page_cross_promo_sales: e,
    use_random_order: !1,
    show_as_carousel: !0,
    sale_page_cross_promo_layout: t,
    capsules_per_row_array: [4],
    carousel_rows: 1,
  };
}
export { K as a, Y as i, ct as n, G as o, it as r, U as s, lt as t };
