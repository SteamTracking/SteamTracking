/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, ft as r, st as i } from "./chunk~01cfc309bf.js";
import { $n as a } from "./chunk~6b8ddcaac8.js";
import { h as o, l as s, m as c, n as l, r as u } from "./chunk~4eed35ad1f.js";
import { n as d } from "./chunk~56437c278a.js";
import { r as f } from "./chunk~21cdc464a1.js";
import { n as p } from "./chunk~710e3cfd2f.js";
import { n as m } from "./chunk~4d16ce5d1a.js";
import {
  $b as h,
  Bc as g,
  El as _,
  Nu as v,
  Pc as y,
  Rv as b,
  Td as ee,
  Tt as te,
  Uv as ne,
  Vv as re,
  b as x,
  c as S,
  en as ie,
  hl as ae,
  id as oe,
  nx as C,
  rd as w,
  u as se,
  wt as ce,
} from "./main.js";
import { t as le } from "./chunk~6417efccc1.js";
var T = e(t(), 1),
  E = e(n(), 1),
  D = `911px`,
  O = `700px`,
  k = `12px`,
  A = `IvpvUTAlgCY-`,
  j = `Ew9l-x2T9c0-`,
  M = `tW10-at9cMc-`,
  N = `txCSzBxQT1Q-`,
  P = `_9wiEHoTVAzs-`,
  F = `vVq04EOZM2Y-`,
  I = `oVUMaC22Mz0-`,
  L = `znS2DqGQQHM-`,
  R = `_3VC9z5N0wHE-`,
  z = `F6Wso3e7oqk-`,
  B = `h8E3fLYHMcw-`,
  V = `_5w6AlYMyKXw-`,
  ue = `I5xcEcLqHQE-`,
  de = `OahpVA-2mkI-`,
  fe = `nL4oSzmS8Ds-`,
  pe = `cV6I71ujCms-`,
  me = `VqHCjCKSpdg-`,
  H = `Wv-2-GahLGE-`,
  U = `-qUG2JW7G8E-`,
  W = `TSCZ-XXe31E-`,
  G = `NCC9qjeD1o8-`,
  K = r(),
  q = 3,
  J = 4,
  Y = 2,
  X = 2,
  he = parseInt(D),
  ge = parseInt(O),
  _e = parseInt(k),
  Z = `DiscountsAndEventsReady`;
function Q(e) {
  return e.appid ? `app_${e.appid}` : `url_${e.url ?? ``}`;
}
function ve(e, t, n, r, i) {
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
      e.push({ key: `full_${Q(t)}`, items: [t] });
    }
    let p = (t - e.length) * 2,
      m = Math.min(r, p, o.length - u),
      h = o.slice(u, u + m);
    u += m;
    let g = Math.min(p - m, s.length - d);
    (h.push(...s.slice(d, d + g)), (d += g));
    for (let t = 0; t < h.length; t += 2) {
      let n = h.slice(t, t + 2);
      e.push({ key: `half_${Q(n[0])}`, items: n });
    }
    c.push(e);
  }
  return c;
}
function ye(e) {
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
    case `hot_deal`:
      return x.Localize(`#DiscountsAndEvents_Banner_HotDeal`);
    case `deep_discount`:
      return x.Localize(`#DiscountsAndEvents_Banner_DeepDiscount`);
    case `popular_in_region`:
      return x.Localize(`#DiscountsAndEvents_Banner_PopularInRegion`);
    case `just_updated`:
      return x.Localize(`#DiscountsAndEvents_Banner_JustUpdated`);
    case `custom`:
      return e.title || void 0;
    default:
      return;
  }
}
function be(e) {
  return e.feature
    ? e.feature
    : e.style === `full`
      ? `spotlight`
      : e.banner === `daily_deal`
        ? `daily-deal`
        : `spotlight-specials`;
}
function xe(e) {
  let {
      rgItems: t,
      bLoadError: n = !1,
      bHideTitle: r = !1,
      bReactHover: i = !1,
    } = e,
    a = s(he),
    o = h(),
    c = a && !o,
    d = w(
      e.strSeeMoreURL === null
        ? void 0
        : (e.strSeeMoreURL ?? `${C.STORE_BASE_URL}specials`),
    ),
    p = x.Localize(`#DiscountsAndEvents_SeeMore`),
    { bShowSeeMoreHint: m, panelProps: v } = u(d, `X`),
    { rgPages: y, rgColumns: b } = T.useMemo(() => {
      let e = ve(t ?? [], q, Y, X, J);
      return { rgPages: e, rgColumns: e.flat() };
    }, [t]);
  return !t && n
    ? (0, K.jsx)(Se, { bHideTitle: r })
    : t
      ? b.length
        ? (0, K.jsxs)(g, {
            className: (0, E.default)(A, Z),
            navEntryPreferPosition: _.PREFERRED_CHILD,
            ...v,
            onSecondaryActionDescription: d ? p : void 0,
            children: [
              (0, K.jsxs)(Ce, {
                bHideTitle: r,
                children: [
                  !o && d && (0, K.jsx)(we, { url: d, location: `desktop` }),
                  o && (0, K.jsx)(l, { label: p, shown: m, button: `X` }),
                ],
              }),
              (0, K.jsx)(f, {
                visibleElements: 1,
                disableEdgeWrap: !1,
                hideArrows: !1,
                hidePips: o,
                screenIsWide: a,
                bForceSimpleCarousel: o,
                gap: _e,
                className: (0, E.default)(z, !c && `tvKN6VPvEYo-`),
                children: c
                  ? y.map((e, t) =>
                      (0, K.jsx)(
                        g,
                        {
                          className: V,
                          "flow-children": `row`,
                          role: `list`,
                          "aria-labelledby": `discounts_and_events_title`,
                          children: e.map((e) =>
                            (0, K.jsx)(
                              $,
                              { column: e, depth: t + 1, bReactHover: i },
                              e.key,
                            ),
                          ),
                        },
                        e[0].key,
                      ),
                    )
                  : b.map((e, t) =>
                      (0, K.jsx)(
                        $,
                        {
                          column: e,
                          depth: Math.floor(t / q) + 1,
                          bReactHover: i,
                        },
                        e.key,
                      ),
                    ),
              }),
              !o && d && (0, K.jsx)(we, { url: d, location: `mobile` }),
            ],
          })
        : null
      : (0, K.jsx)(`div`, { className: (0, E.default)(A, j, Z) });
}
function Se(e) {
  return (0, K.jsxs)(`div`, {
    className: (0, E.default)(A, Z),
    children: [
      (0, K.jsx)(Ce, { bHideTitle: e.bHideTitle }),
      (0, K.jsx)(`div`, {
        className: R,
        children: x.Localize(`#DiscountsAndEvents_LoadError`),
      }),
    ],
  });
}
function Ce(e) {
  let { bHideTitle: t, children: n } = e;
  return (0, K.jsxs)(`div`, {
    className: (0, E.default)(M, t && `lwTekD10gdM-`),
    children: [
      (0, K.jsx)(`div`, {
        className: (0, E.default)(N, t && `mMcECT5lSy0-`),
        id: `discounts_and_events_title`,
        role: `heading`,
        "aria-level": 2,
        children: x.Localize(`#DiscountsAndEvents_Title`),
      }),
      n,
    ],
  });
}
function we(e) {
  let { url: t, location: n } = e;
  return (0, K.jsx)(`div`, {
    className: (0, E.default)(P, n == `mobile` ? I : F),
    children: (0, K.jsx)(`a`, {
      href: t,
      className: L,
      children: x.Localize(`#DiscountsAndEvents_SeeMore`),
    }),
  });
}
function $(e) {
  let { column: t, depth: n, bReactHover: r } = e,
    i = t.items[0]?.style === `full`;
  return (0, K.jsx)(g, {
    className: (0, E.default)(B, i && `C4YUDj4Nzy4-`),
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: t.items.map((e) =>
      (0, K.jsx)(Te, { item: e, depth: n, bReactHover: r }, Q(e)),
    ),
  });
}
function Te(e) {
  let { item: t, depth: n, bReactHover: r } = e,
    i = t.style === `full`,
    s = T.useMemo(() => (t.appid ? { appid: t.appid } : void 0), [t.appid]),
    l = !!t.url,
    u = t.alt !== void 0,
    f = !!t.image,
    p = !!t.price || !!t.is_free || !!t.discount_text,
    h = !l || !u || !p,
    _ = !f,
    v = !p,
    { data: x } = ne(h ? s : void 0),
    { data: S } = b(_ ? s : void 0),
    { data: C } = re(v ? s : void 0),
    { data: D } = ee(),
    O = D?.preferences?.disable_microtrailers,
    [k, A] = T.useState(!1),
    [j, M] = T.useState(!1),
    [N, P] = T.useState(!1),
    F = d(s),
    I = !!s && !t.sale_page && !O,
    L = I && (k || j || N),
    R = be(t),
    z = w(t.url, R, n),
    B = oe(R, n),
    V = te(x, R, n),
    W = t.image || (i ? y(S, `hero_capsule`, `header`) : y(S, `header`)),
    G = ye(t),
    q = t.alt ?? x?.name ?? ``;
  if (s && ((!l && x === null) || (!f && S === null))) return null;
  let J = (0, K.jsxs)(K.Fragment, {
      children: [
        (0, K.jsxs)(`div`, {
          className: fe,
          children: [
            W &&
              (0, K.jsx)(`img`, { className: `auc77O9GIek-`, src: W, alt: q }),
            I &&
              (0, K.jsx)(c, {
                id: s,
                active: L,
                bIsHoverMode: !0,
                eGrowOnActivate: i ? o.k_ETrailerGrowAmount_Implicit : void 0,
              }),
            G && (0, K.jsx)(`div`, { className: `jxYpM-g5fRs-`, children: G }),
          ],
        }),
        (0, K.jsx)(`div`, {
          className: pe,
          children: (0, K.jsx)(Ee, {
            item: t,
            storeItem: x,
            purchaseOption: C,
          }),
        }),
      ],
    }),
    Y;
  if (z) {
    let e = (0, K.jsx)(ae, { href: z, className: U, children: J });
    Y = s
      ? (0, K.jsx)(ie, { appID: s.appid, feature: R, depth: n, children: e })
      : e;
  } else
    Y = (0, K.jsx)(ce, {
      storeItem: x,
      feature: R,
      depth: n,
      className: U,
      children: J,
    });
  let X = (0, K.jsxs)(g, {
    className: (0, E.default)(
      ue,
      i ? de : me,
      t.banner === `daily_deal` && `-xyaBPF0Lno-`,
      G && `i6bxdYcZVss-`,
      L && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => M(!0),
    onGamepadBlur: () => M(!1),
    ...F,
    children: [
      s
        ? r
          ? (0, K.jsx)(a, {
              id: s,
              className: H,
              strChildLinkURL: z ?? V,
              children: Y,
            })
          : (0, K.jsx)(m, {
              id: s,
              hoverClassName: H,
              fnHoverState: A,
              disableScreenshots: !0,
              children: Y,
            })
        : (0, K.jsx)(`div`, { className: H, children: Y }),
      s &&
        !t.sale_page &&
        (0, K.jsx)(le, { appid: s.appid, snr: B, onActiveChange: P }),
    ],
  });
  return s ? (0, K.jsx)(se, { itemid: s, children: X }) : X;
}
function Ee(e) {
  let { item: t, storeItem: n, purchaseOption: r } = e;
  if (t.discount_text)
    return (0, K.jsx)(`div`, { className: W, children: t.discount_text });
  let i = t.price ?? r;
  return i
    ? (0, K.jsx)(S, { purchaseOption: i, size: `inline`, legacyStyle: !0 })
    : t.is_free || n?.is_free
      ? (0, K.jsx)(`div`, { className: G, children: x.Localize(`#Price_Free`) })
      : null;
}
var De = 2e4,
  Oe = 3e5;
function ke(e, t, n, r, a = {}) {
  return i(Ae(e, t, n, r, a));
}
function Ae(e, t, n, r, i = {}) {
  let a = new URLSearchParams(r);
  n && a.set(`t`, n);
  let o = `${C.STORE_BASE_URL}default/discounts_and_events_data/`,
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
          signal: AbortSignal.timeout(De),
        });
        if (!e.ok) throw Error(`discounts_and_events_data failed: ${e.status}`);
        let t = await e.json();
        return { items: Array.isArray(t.items) ? t.items : [] };
      },
      staleTime: Oe,
      ...i,
    }
  );
}
function je(e) {
  let {
      initialData: t,
      initialDataUpdatedAt: n,
      previewTime: r,
      switches: i,
    } = e,
    a = ke(t, n, r, i),
    [o, s] = v(),
    c = !!i?.as_anon && i.as_anon !== `0`,
    l = !!i?.accountid && i.accountid !== `0`,
    u = c || l,
    d = T.useMemo(
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
  return (0, K.jsx)(xe, { rgItems: d, bLoadError: a.isError });
}
function Me(e) {
  return (0, K.jsx)(p, {
    placeholderHeight: ge,
    rootMargin: `100% 0px 100% 0px`,
    children: (0, K.jsx)(je, { ...e }),
  });
}
export { Me as default };
