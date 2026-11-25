/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, ct as n, dt as r, ut as i } from "./chunk~01cfc309bf.js";
import {
  $ as a,
  B as o,
  En as s,
  H as c,
  Nn as l,
  Qt as u,
  Rt as d,
  U as f,
  V as p,
  X as m,
  Z as h,
  a as g,
  c as _,
  d as v,
  et as y,
  f as b,
  i as x,
  l as ee,
  m as te,
  nt as S,
  o as ne,
  or as C,
  p as re,
  rt as w,
  s as ie,
  tt as T,
  v as E,
  y as ae,
  z as D,
} from "./chunk~6b8ddcaac8.js";
import { A as oe, s as O } from "./chunk~f57d770d64.js";
import {
  a as se,
  f as ce,
  n as k,
  s as A,
  u as le,
} from "./chunk~4eed35ad1f.js";
import { f as ue, i as de, o as fe, t as pe } from "./chunk~cbbb6ae37c.js";
import { r as j } from "./chunk~f4c928a27a.js";
import "./chunk~21cdc464a1.js";
import { n as me, t as he } from "./chunk~710e3cfd2f.js";
import {
  C as ge,
  T as M,
  a as _e,
  c as ve,
  d as ye,
  f as be,
  h as xe,
  i as Se,
  l as Ce,
  o as we,
  p as N,
  r as Te,
  s as Ee,
  t as De,
  u as Oe,
} from "./chunk~b8ca037aae.js";
import {
  c as ke,
  f as Ae,
  g as je,
  h as P,
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
  Cv as F,
  Ev as I,
  Fv as Ve,
  Lv as L,
  Pc as R,
  Pv as He,
  Tv as Ue,
  bv as We,
  ex as z,
  gt as Ge,
  ib as B,
  jv as Ke,
  lb as qe,
  ox as V,
  rx as Je,
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
    c = n.prefer_assets_without_overrides ? H : F,
    l = r.flatMap((e) => {
      let t = C(e);
      return t ? [t] : [];
    }),
    u = await Promise.all(
      l.map(async (e) => {
        try {
          let [t, n, r] = await Promise.all([
            a.fetchQuery(L(o, e)),
            a.fetchQuery(I(o, e)),
            a.fetchQuery(c(o, e)),
          ]);
          if (!n?.visible || v(t, s)) return;
          let i = r,
            l = pe(n, r, `header`);
          if (l) {
            let [e, t] = await Promise.all([
              a.fetchQuery(I(o, l)),
              a.fetchQuery(c(o, l)),
            ]);
            e?.visible && (i = t);
          }
          return i ? ue(i, !0)[0] : void 0;
        } catch {
          return;
        }
      }),
    );
  for (let e of u.filter((e) => !!e).slice(0, i)) U(e, 0);
}
async function K(e, t, n, r = Ye(t, n)) {
  let { queryClient: i, storeItemLoader: a } = e,
    o = t.prefer_assets_without_overrides ? H : F,
    s = n.flatMap((e) => {
      let t = C(e);
      return t ? [t] : [];
    });
  if (
    (await Promise.all([
      i.ensureQueryData(fe()).catch(() => void 0),
      ...s.flatMap((e) => [
        i.prefetchQuery(I(a, e)),
        i.prefetchQuery(o(a, e)),
        i.prefetchQuery(Be(a, e)),
        i.prefetchQuery(Ve(a, e)),
        i.prefetchQuery(He(a, e)),
        i.prefetchQuery(L(a, e)),
        ...(r ? [i.prefetchQuery(Ue(a, e)), i.prefetchQuery(Ke(a, e))] : []),
      ]),
    ]),
    !Ce(t))
  )
    return;
  let c = new Set();
  for (let e of s) {
    let t = i.getQueryData(I(a, e).queryKey)?.related_items?.parent_appid;
    t && c.add(t);
  }
  await Promise.all(Array.from(c, (e) => i.prefetchQuery(I(a, { appid: e }))));
}
function Ye(e, t) {
  return t.length === 1
    ? !0
    : e.capsule_style_per_row_array
      ? e.capsule_style_per_row_array.includes(`fullrow`)
      : Oe(e, !1);
}
var Xe = W.createContext(void 0),
  Ze = W.createContext(void 0);
function Qe(e) {
  return (
    (O(e) || !!e.sale_tag_filter) &&
    !e.enable_faceted_browsing &&
    !e.disable_visibility_tracking &&
    e.section_type !== `trailercarousel`
  );
}
function $e(e, t, n, r) {
  let i = [],
    a = [];
  for (let n of e) (t(n) ? a : i).push(n);
  return a.length ? (r && i.length < n ? i : i.concat(a)) : e;
}
function et(e, t, n, r) {
  let i = W.useContext(Xe),
    a = W.useContext(de),
    o = W.useContext(Ze),
    s = W.useMemo(
      () =>
        o ?? (a ? e.GetSaleSectionIncludingFooterSections().indexOf(a) : -1),
      [e, a, o],
    ),
    c = W.useId(),
    l = ye(t, 0, r) || n?.length || 0,
    u = W.useMemo(() => {
      if (!i || !n || s < 0) return n;
      let e = Qe(t)
        ? $e(
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
    c = d(),
    { nMaxCapsulesPerRow: l, bScreenIsWide: u } = le(n.section_type),
    f = W.useContext(ce),
    p = W.useContext(se),
    m = ee(t, n, !0),
    h = et(t, n, m, s),
    { capsules: v, nHiddenCapsules: y } = te(t, n, h, void 0, !0),
    b = o ? v?.slice(0, o) : v,
    x = W.useMemo(() => ge(n, b?.length), [n, b?.length]),
    S = _(t, n),
    C = ae(t, n),
    [w, T] = W.useState(0),
    E = N(x, s),
    D = f && !u && !s && oe(n),
    O = D ? tt(x, E, s) : void 0;
  if (ne(t, n) === `personalized_carousel`) {
    let e = g(t, n, S);
    if (e === void 0)
      return (0, q.jsx)(j, { capsules_per_row: E, swipe_row: O });
    if (e === null) return null;
  }
  let k;
  if (!b) k = (0, q.jsx)(j, { capsules_per_row: E, swipe_row: O });
  else {
    let e = Ee({
        saleEvent: t,
        section: x,
        capsules: b,
        language: r,
        bInGamepadUI: s,
        nMaxCapsulesPerRow: l,
        bScreenIsWide: u,
        nShowAdditionalRows: w,
        bPaginationPills: f,
        bDropShortLastCarouselPage: p,
      }),
      { content: i, bAdditionalContent: a } = xe(e);
    if (((k = i), !k && !c)) return null;
    k &&
      a &&
      (k = (0, q.jsxs)(q.Fragment, {
        children: [
          k,
          (0, q.jsx)(we, {
            section: x,
            nRowsWithNext: M(x, w) + 1,
            nCapsules: b.length,
            rgRowSizes: E,
            onShowMore: () => T(w + _e(n)),
          }),
        ],
      }));
  }
  let { feature: A, depth: ue } = Se(n, t, C);
  return (0, q.jsx)(Ge, {
    feature: A,
    depth: ue,
    children: (0, q.jsxs)(a, {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: s,
      placeholderHeight: (D ? J : nt(x, b?.length ?? 0, E)) + `px`,
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
function tt(e, t, n) {
  return t[0] === 1
    ? { width: `80vw`, height: `320px` }
    : be(e, n)[0] === `tall`
      ? `tall_capsule`
      : `capsule`;
}
function nt(e, t, n) {
  let r = 0;
  if (n.length > 0) for (let e = t; e > 0; r++) e -= n[r % n.length];
  let i = Math.min(r, M(e, 0));
  return Math.max(1, i) * J;
}
function rt(e) {
  let { event: t, section: r } = e,
    i = ze(Je.LANGUAGE),
    a = W.useMemo(() => y(r), [r]),
    [c] = E(w),
    l = n({ queries: a.map((e) => ({ ...Z(e, i), enabled: !1 })) }),
    u = P(a, !0),
    d = a.map((e, t) => (o(e) ? u[t].data : l[t].data)),
    p = a.some((e, t) => (X(e) && l[t].isPending) || u[t].bPending),
    [h] = W.useState(p);
  if (S(r).length <= 1 || p) {
    let n = a[0] ?? r,
      o = d[0],
      s = (0, q.jsx)($, {
        ...e,
        section: n,
        bPageItems: !f(r),
        promotedSaleEvent: o,
        bPending: p,
        strForcedLayout: null,
        bDrawAtOnce: h,
      }),
      c = f(r) ? (0, q.jsx)(at, { section: n, children: s }) : s,
      l = p
        ? (0, q.jsxs)(q.Fragment, {
            children: [
              c,
              (0, q.jsx)(me, {
                rootMargin: A,
                children: (0, q.jsx)(it, {
                  event: t,
                  rgSlideSections: a,
                  eLanguage: i,
                  strForcedLayout: null,
                  bSideBySide: f(r),
                }),
              }),
            ],
          })
        : c;
    return !p && T(n, o) !== null
      ? l
      : (0, q.jsx)(ot, {
          ...e,
          rgLayouts: [m(n, o, null)],
          strHeading: Q([o]),
          children: l,
        });
  }
  let g = a.flatMap((e, t) => {
    let n = d[t];
    return T(e, n) === null ? [{ slide: e, promotedSaleEvent: n }] : [];
  });
  if (g.length === 0)
    return (0, q.jsx)($, {
      ...e,
      section: a[0],
      promotedSaleEvent: d[0],
      bPending: !1,
      strForcedLayout: null,
      bDrawAtOnce: h,
    });
  let _ = g.map(({ slide: t, promotedSaleEvent: n }, r) =>
      (0, q.jsx)(
        $,
        {
          ...e,
          section: t,
          promotedSaleEvent: n,
          bPending: !1,
          strForcedLayout: null,
          bDrawAtOnce: h,
        },
        r,
      ),
    ),
    v = f(r);
  return (0, q.jsx)(ot, {
    ...e,
    rgLayouts: g.map(({ slide: e, promotedSaleEvent: t }) => m(e, t, null)),
    strHeading: Q(g.map(({ promotedSaleEvent: e }) => e)),
    children: v
      ? (0, q.jsx)(`div`, {
          className: R(s, Ne),
          children: _.map((e, t) =>
            (0, q.jsx)(at, { section: g[t].slide, children: e }, t),
          ),
        })
      : (0, q.jsx)(De, { event: t, section: r, rgSlides: _ }),
  });
}
function X(e) {
  let t = S(e)[0];
  return !!t?.event_gid && !!t.clan_account_id;
}
function Z(e, t) {
  let n = S(e)[0];
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
function it(e) {
  let {
    event: t,
    rgSlideSections: r,
    eLanguage: a,
    strForcedLayout: o,
    bSideBySide: s,
  } = e;
  (n({ queries: r.map((e) => Z(e, a)) }), P(r));
  let c = i(),
    l = We();
  return (
    W.useEffect(() => {
      let e = { queryClient: c, storeItemLoader: l };
      r.forEach((n, r) => {
        let i = n.capsules ?? [];
        if (i.length && (K(e, n, i), r === 0 || s)) {
          let r = h(m(n, void 0, o));
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
    children: qe(`#Sale_CrossPromoCreator_Heading_${n}${t.eCreatorRole}`, r),
  });
}
function at(e) {
  let { section: t, children: n } = e,
    r = S(t)[0]?.comparison_label;
  return (0, q.jsxs)(`div`, {
    className: Le,
    children: [
      r && (0, q.jsx)(`div`, { className: `P1C9O-r-7FI-`, children: r }),
      n,
    ],
  });
}
function ot(e) {
  let { section: t, language: n, rgLayouts: r, strHeading: i, children: o } = e,
    s = W.useContext(Pe),
    c = a(t, n);
  if (D(t) || (!c && (!r.some(p) || (s && !i))))
    return (0, q.jsx)(q.Fragment, { children: o });
  let l = i;
  return (
    c
      ? (l = c)
      : l == null &&
        V.logged_in &&
        (l = B(`#Sale_CrossPromoSale_EventCapsuleHeading_Recommended`)),
    (0, q.jsx)(st, {
      ...e,
      strHeading: l,
      bOneSlide: r.length === 1,
      children: (0, q.jsx)(Me, { value: !0, children: o }),
    })
  );
}
function st(e) {
  let {
      event: t,
      section: n,
      language: r,
      strHeading: i,
      bOneSlide: a,
      children: o,
    } = e,
    c = z(),
    [d, f] = W.useState(null);
  return (0, q.jsxs)(`div`, {
    className: R(s, Ae),
    children: [
      (0, q.jsxs)(`div`, {
        className: l,
        children: [
          (0, q.jsx)(u, {
            section: n,
            event: t,
            language: r,
            promotedSale: null,
            title: i || B(`#Sale_CrossPromoSale_EventCapsuleHeading`),
          }),
          c &&
            d &&
            (0, q.jsx)(k, { label: d.strLabel, shown: d.bShown, button: `X` }),
        ],
      }),
      (0, q.jsx)(Ie, { value: a ? f : null, children: o }),
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
      ...l
    } = e,
    u = z(),
    d = m(t, r, a),
    f = h(d),
    p = u ? 2 : f,
    g = c(d),
    _ = W.useMemo(
      () => ({
        ...t,
        capsules_per_row_array: [p],
        show_as_carousel: g ? !0 : t.show_as_carousel,
        carousel_rows: g ? 1 : t.carousel_rows,
      }),
      [t, p, g],
    );
  if (i) return (0, q.jsx)(j, { capsules_per_row: N(_, u) });
  if (T(t, r) !== null) return null;
  let v = (0, q.jsx)(Y, {
    ...l,
    section: _,
    language: n,
    promotedSaleEvent: r ?? void 0,
    Frame: Fe[d],
    nMaxCapsules: g ? (s ? 12 : f) : void 0,
  });
  return o ? (0, q.jsx)(he, { enabled: !1, children: v }) : v;
}
function ct(e, t) {
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
export { K as a, Y as i, st as n, G as o, rt as r, U as s, ct as t };
