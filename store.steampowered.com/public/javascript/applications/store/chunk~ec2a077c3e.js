/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, ft as r, st as i } from "./chunk~01cfc309bf.js";
import { Vt as a } from "./chunk~6b8ddcaac8.js";
import { t as o } from "./chunk~cd94ddba57.js";
import { a as s } from "./chunk~d43c81a658.js";
import { r as c } from "./chunk~21cdc464a1.js";
import { n as l } from "./chunk~710e3cfd2f.js";
import { n as u, t as d } from "./chunk~ffe4581a06.js";
import { n as f } from "./chunk~4d16ce5d1a.js";
import {
  Ju as p,
  Mv as m,
  Pv as h,
  St as g,
  Tc as _,
  Wb as v,
  Zt as y,
  _l as b,
  b as x,
  c as S,
  gd as ee,
  jc as C,
  kv as te,
  ol as ne,
  qb as w,
  u as re,
  wu as T,
  xt as ie,
} from "./main.js";
var E = e(t(), 1),
  D = e(n(), 1),
  O = `911px`,
  k = `700px`,
  A = `12px`,
  j = `IvpvUTAlgCY-`,
  M = `Ew9l-x2T9c0-`,
  N = `tW10-at9cMc-`,
  P = `txCSzBxQT1Q-`,
  F = `_9wiEHoTVAzs-`,
  I = `vVq04EOZM2Y-`,
  L = `oVUMaC22Mz0-`,
  R = `znS2DqGQQHM-`,
  z = `_3VC9z5N0wHE-`,
  B = `F6Wso3e7oqk-`,
  V = `h8E3fLYHMcw-`,
  H = `_5w6AlYMyKXw-`,
  ae = `I5xcEcLqHQE-`,
  oe = `OahpVA-2mkI-`,
  se = `nL4oSzmS8Ds-`,
  ce = `cV6I71ujCms-`,
  le = `VqHCjCKSpdg-`,
  U = `Wv-2-GahLGE-`,
  W = `-qUG2JW7G8E-`,
  G = `TSCZ-XXe31E-`,
  K = `NCC9qjeD1o8-`,
  q = r(),
  J = 3,
  ue = 4,
  de = 2,
  fe = 2,
  pe = parseInt(O),
  me = parseInt(k),
  he = parseInt(A),
  Y = `DiscountsAndEventsReady`;
function X(e) {
  return e.appid ? `app_${e.appid}` : `url_${e.url ?? ``}`;
}
function ge(e, t, n, r, i) {
  let a = e.filter((e) => e.style === `full`),
    o = e.filter((e) => e.style !== `full` && e.banner === `daily_deal`),
    s = e.filter((e) => e.style !== `full` && e.banner !== `daily_deal`),
    c = [],
    l = 0,
    u = 0,
    d = 0;
  for (; c.length < i && (l < a.length || u < o.length || d < s.length);) {
    let e = [],
      i = u < o.length || d < s.length,
      f = Math.min(i ? n : t, a.length - l);
    for (let t = 0; t < f; t++) {
      let t = a[l++];
      e.push({ key: `full_${X(t)}`, items: [t] });
    }
    let p = (t - e.length) * 2,
      m = Math.min(r, p, o.length - u),
      h = o.slice(u, u + m);
    u += m;
    let g = Math.min(p - m, s.length - d);
    (h.push(...s.slice(d, d + g)), (d += g));
    for (let t = 0; t < h.length; t += 2) {
      let n = h.slice(t, t + 2);
      e.push({ key: `half_${X(n[0])}`, items: n });
    }
    c.push(e);
  }
  return c;
}
function _e(e) {
  switch (e.banner) {
    case `weekend_deal`:
      return x.Localize(`#DiscountsAndEvents_Banner_WeekendDeal`);
    case `midweek_deal`:
      return x.Localize(`#DiscountsAndEvents_Banner_MidweekDeal`);
    case `daily_deal`:
      return x.Localize(`#DiscountsAndEvents_Banner_DailyDeal`);
    case `largest_discount`:
      return x.Localize(`#DiscountsAndEvents_Banner_LargestDiscount`);
    case `wishlist`:
      return x.Localize(`#DiscountsAndEvents_Banner_Wishlist`);
    case `first_time_on_sale`:
      return x.Localize(`#DiscountsAndEvents_Banner_FirstTimeOnSale`);
    case `ending_soon`:
      return x.Localize(`#DiscountsAndEvents_Banner_EndingSoon`);
    case `newly_on_sale`:
      return x.Localize(`#DiscountsAndEvents_Banner_NewlyOnSale`);
    case `well_reviewed`:
      return x.Localize(`#DiscountsAndEvents_Banner_WellReviewed`);
    case `top_seller`:
      return x.Localize(`#DiscountsAndEvents_Banner_TopSeller`);
    case `custom`:
      return e.title || void 0;
    default:
      return;
  }
}
function ve(e) {
  return e.feature
    ? e.feature
    : e.style === `full`
      ? `spotlight`
      : e.banner === `daily_deal`
        ? `daily-deal`
        : `spotlight-specials`;
}
function ye(e) {
  let {
      rgItems: t,
      bLoadError: n = !1,
      bHideTitle: r = !1,
      bReactHover: i = !1,
    } = e,
    a = s(pe),
    o = v(),
    l = a && !o,
    f = p(
      e.strSeeMoreURL === null
        ? void 0
        : (e.strSeeMoreURL ?? `${w.STORE_BASE_URL}specials`),
    ),
    m = x.Localize(`#DiscountsAndEvents_SeeMore`),
    { bShowSeeMoreHint: h, panelProps: g } = u(f),
    { rgPages: _, rgColumns: y } = E.useMemo(() => {
      let e = ge(t ?? [], J, de, fe, ue);
      return { rgPages: e, rgColumns: e.flat() };
    }, [t]);
  return !t && n
    ? (0, q.jsx)(be, { bHideTitle: r })
    : t
      ? y.length
        ? (0, q.jsxs)(C, {
            className: (0, D.default)(j, Y),
            navEntryPreferPosition: b.PREFERRED_CHILD,
            ...g,
            onOptionsActionDescription: f ? m : void 0,
            children: [
              (0, q.jsxs)(Z, {
                bHideTitle: r,
                children: [
                  !o && f && (0, q.jsx)(Q, { url: f, location: `desktop` }),
                  o && (0, q.jsx)(d, { label: m, shown: h }),
                ],
              }),
              (0, q.jsx)(c, {
                visibleElements: 1,
                disableEdgeWrap: !1,
                hideArrows: !1,
                hidePips: o,
                screenIsWide: a,
                bForceSimpleCarousel: o,
                gap: he,
                className: (0, D.default)(B, !l && `tvKN6VPvEYo-`),
                children: l
                  ? _.map((e, t) =>
                      (0, q.jsx)(
                        C,
                        {
                          className: H,
                          "flow-children": `row`,
                          role: `list`,
                          "aria-labelledby": `discounts_and_events_title`,
                          children: e.map((e) =>
                            (0, q.jsx)(
                              $,
                              { column: e, depth: t + 1, bReactHover: i },
                              e.key,
                            ),
                          ),
                        },
                        e[0].key,
                      ),
                    )
                  : y.map((e, t) =>
                      (0, q.jsx)(
                        $,
                        {
                          column: e,
                          depth: Math.floor(t / J) + 1,
                          bReactHover: i,
                        },
                        e.key,
                      ),
                    ),
              }),
              !o && f && (0, q.jsx)(Q, { url: f, location: `mobile` }),
            ],
          })
        : null
      : (0, q.jsx)(`div`, { className: (0, D.default)(j, M, Y) });
}
function be(e) {
  return (0, q.jsxs)(`div`, {
    className: (0, D.default)(j, Y),
    children: [
      (0, q.jsx)(Z, { bHideTitle: e.bHideTitle }),
      (0, q.jsx)(`div`, {
        className: z,
        children: x.Localize(`#DiscountsAndEvents_LoadError`),
      }),
    ],
  });
}
function Z(e) {
  let { bHideTitle: t, children: n } = e;
  return (0, q.jsxs)(`div`, {
    className: (0, D.default)(N, t && `lwTekD10gdM-`),
    children: [
      (0, q.jsx)(`div`, {
        className: (0, D.default)(P, t && `mMcECT5lSy0-`),
        id: `discounts_and_events_title`,
        role: `heading`,
        "aria-level": 2,
        children: x.Localize(`#DiscountsAndEvents_Title`),
      }),
      n,
    ],
  });
}
function Q(e) {
  let { url: t, location: n } = e;
  return (0, q.jsx)(`div`, {
    className: (0, D.default)(F, n == `mobile` ? L : I),
    children: (0, q.jsx)(`a`, {
      href: t,
      className: R,
      children: x.Localize(`#DiscountsAndEvents_SeeMore`),
    }),
  });
}
function $(e) {
  let { column: t, depth: n, bReactHover: r } = e,
    i = t.items[0]?.style === `full`;
  return (0, q.jsx)(C, {
    className: (0, D.default)(V, i && `C4YUDj4Nzy4-`),
    "flow-children": `column`,
    navEntryPreferPosition: b.MAINTAIN_Y,
    children: t.items.map((e) =>
      (0, q.jsx)(xe, { item: e, depth: n, bReactHover: r }, X(e)),
    ),
  });
}
function xe(e) {
  let { item: t, depth: n, bReactHover: r } = e,
    i = t.style === `full`,
    s = E.useMemo(() => (t.appid ? { appid: t.appid } : void 0), [t.appid]),
    c = !!t.url,
    l = t.alt !== void 0,
    u = !!t.image,
    d = !!t.price || !!t.is_free || !!t.discount_text,
    v = !c || !l || !d,
    b = !u,
    x = !d,
    { data: S } = h(v ? s : void 0),
    { data: w } = te(b ? s : void 0),
    { data: T } = m(x ? s : void 0),
    { data: O } = ee(),
    k = O?.preferences?.disable_microtrailers,
    [A, j] = E.useState(!1),
    [M, N] = E.useState(!1),
    P = !!s && !i && !t.sale_page && !k,
    F = P && (A || M),
    I = ve(t),
    L = p(t.url, I, n),
    R = g(S, I, n),
    z = t.image || (i ? _(w, `hero_capsule`, `header`) : _(w, `header`)),
    B = _e(t),
    V = t.alt ?? S?.name ?? ``;
  if (s && ((!c && S === null) || (!u && w === null))) return null;
  let H = (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsxs)(`div`, {
          className: se,
          children: [
            z &&
              (0, q.jsx)(`img`, { className: `auc77O9GIek-`, src: z, alt: V }),
            P && (0, q.jsx)(o, { id: s, active: F, bIsHoverMode: !0 }),
            B && (0, q.jsx)(`div`, { className: `jxYpM-g5fRs-`, children: B }),
          ],
        }),
        (0, q.jsx)(`div`, {
          className: ce,
          children: (0, q.jsx)(Se, {
            item: t,
            storeItem: S,
            purchaseOption: T,
          }),
        }),
      ],
    }),
    G;
  if (L) {
    let e = (0, q.jsx)(ne, { href: L, className: W, children: H });
    G = s
      ? (0, q.jsx)(y, { appID: s.appid, feature: I, depth: n, children: e })
      : e;
  } else
    G = (0, q.jsx)(ie, {
      storeItem: S,
      feature: I,
      depth: n,
      className: W,
      children: H,
    });
  let K = (0, q.jsx)(C, {
    className: (0, D.default)(
      ae,
      i ? oe : le,
      t.banner === `daily_deal` && `-xyaBPF0Lno-`,
      F && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => N(!0),
    onGamepadBlur: () => N(!1),
    children: s
      ? r
        ? (0, q.jsx)(a, {
            id: s,
            className: U,
            strChildLinkURL: L ?? R,
            children: G,
          })
        : (0, q.jsx)(f, {
            id: s,
            hoverClassName: U,
            fnHoverState: j,
            disableScreenshots: !0,
            children: G,
          })
      : (0, q.jsx)(`div`, { className: U, children: G }),
  });
  return s ? (0, q.jsx)(re, { itemid: s, children: K }) : K;
}
function Se(e) {
  let { item: t, storeItem: n, purchaseOption: r } = e;
  if (t.discount_text)
    return (0, q.jsx)(`div`, { className: G, children: t.discount_text });
  let i = t.price ?? r;
  return i
    ? (0, q.jsx)(S, { purchaseOption: i, size: `inline`, legacyStyle: !0 })
    : t.is_free || n?.is_free
      ? (0, q.jsx)(`div`, { className: K, children: x.Localize(`#Price_Free`) })
      : null;
}
var Ce = 2e4,
  we = 3e5;
function Te(e, t, n, r, a = {}) {
  return i(Ee(e, t, n, r, a));
}
function Ee(e, t, n, r, i = {}) {
  let a = new URLSearchParams(r);
  n && a.set(`t`, n);
  let o = `${w.STORE_BASE_URL}default/discounts_and_events_data/`,
    s = a.toString();
  return (
    s && (o += `?${s}`),
    {
      queryKey: [`discountsandevents`, n ?? null, s],
      initialData: e,
      initialDataUpdatedAt: t,
      queryFn: async () => {
        let e = await fetch(o, {
          credentials: `include`,
          signal: AbortSignal.timeout(Ce),
        });
        if (!e.ok) throw Error(`discounts_and_events_data failed: ${e.status}`);
        let t = await e.json();
        return { items: Array.isArray(t.items) ? t.items : [] };
      },
      staleTime: we,
      ...i,
    }
  );
}
function De(e) {
  let {
      initialData: t,
      initialDataUpdatedAt: n,
      previewTime: r,
      switches: i,
    } = e,
    a = Te(t, n, r, i),
    [o, s] = T(),
    c = !!i?.as_anon && i.as_anon !== `0`,
    l = !!i?.accountid && i.accountid !== `0`,
    u = c || l,
    d = E.useMemo(
      () =>
        !a.data || o || u
          ? a.data?.items
          : a.data.items.filter(
              (e) =>
                !e.appid ||
                e.sale_page ||
                (!s.BIsGameOwned(e.appid) && !s.BIsGameIgnored(e.appid)),
            ),
      [a.data, o, u, s],
    );
  return (0, q.jsx)(ye, { rgItems: d, bLoadError: a.isError });
}
function Oe(e) {
  return (0, q.jsx)(l, {
    placeholderHeight: me,
    rootMargin: `100% 0px 100% 0px`,
    children: (0, q.jsx)(De, { ...e }),
  });
}
export { Oe as default };
