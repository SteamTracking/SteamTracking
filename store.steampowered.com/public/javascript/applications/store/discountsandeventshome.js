/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, N as n, ft as r, st as i } from "./libraries.js";
import { t as a } from "./microtrailerdisplay.js";
import { r as o, u as s } from "./carouselarrows.js";
import { n as c } from "./lazyrenderchildren.js";
import { n as l, t as u } from "./seemorebutton.js";
import { n as d } from "./storegamehover.js";
import {
  $t as f,
  Ac as p,
  Av as m,
  Bb as h,
  Ct as g,
  Ov as _,
  Tv as v,
  Ub as y,
  Wu as b,
  b as x,
  c as S,
  fd as ee,
  ml as C,
  rl as te,
  u as ne,
  wc as w,
  xu as T,
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
  re = `I5xcEcLqHQE-`,
  ie = `OahpVA-2mkI-`,
  ae = `nL4oSzmS8Ds-`,
  oe = `cV6I71ujCms-`,
  U = `VqHCjCKSpdg-`,
  W = `Wv-2-GahLGE-`,
  G = `-qUG2JW7G8E-`,
  K = `TSCZ-XXe31E-`,
  se = `NCC9qjeD1o8-`,
  q = r(),
  J = 3,
  ce = 4,
  le = 2,
  ue = 2,
  de = parseInt(O),
  fe = parseInt(k),
  pe = parseInt(A),
  Y = `DiscountsAndEventsReady`;
function X(e) {
  return e.appid ? `app_${e.appid}` : `url_${e.url ?? ``}`;
}
function me(e, t, n, r, i) {
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
function he(e) {
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
function ge(e) {
  return e.feature
    ? e.feature
    : e.style === `full`
      ? `spotlight`
      : e.banner === `daily_deal`
        ? `daily-deal`
        : `spotlight-specials`;
}
function _e(e) {
  let { rgItems: t, bLoadError: n = !1, bHideTitle: r = !1 } = e,
    i = s(de),
    a = h(),
    c = i && !a,
    d = b(
      e.strSeeMoreURL === null
        ? void 0
        : (e.strSeeMoreURL ?? `${y.STORE_BASE_URL}specials`),
    ),
    f = x.Localize(`#DiscountsAndEvents_SeeMore`),
    { bShowSeeMoreHint: m, panelProps: g } = l(d),
    { rgPages: _, rgColumns: v } = E.useMemo(() => {
      let e = me(t ?? [], J, le, ue, ce);
      return { rgPages: e, rgColumns: e.flat() };
    }, [t]);
  return !t && n
    ? (0, q.jsx)(ve, { bHideTitle: r })
    : t
      ? v.length
        ? (0, q.jsxs)(p, {
            className: (0, D.default)(j, Y),
            navEntryPreferPosition: C.PREFERRED_CHILD,
            ...g,
            onOptionsActionDescription: d ? f : void 0,
            children: [
              (0, q.jsxs)(Z, {
                bHideTitle: r,
                children: [
                  !a && d && (0, q.jsx)(Q, { url: d, location: `desktop` }),
                  a && (0, q.jsx)(u, { label: f, shown: m }),
                ],
              }),
              (0, q.jsx)(o, {
                visibleElements: 1,
                disableEdgeWrap: !1,
                hideArrows: !1,
                hidePips: a,
                screenIsWide: i,
                bForceSimpleCarousel: a,
                gap: pe,
                className: (0, D.default)(B, !c && `tvKN6VPvEYo-`),
                children: c
                  ? _.map((e, t) =>
                      (0, q.jsx)(
                        p,
                        {
                          className: H,
                          "flow-children": `row`,
                          role: `list`,
                          "aria-labelledby": `discounts_and_events_title`,
                          children: e.map((e) =>
                            (0, q.jsx)($, { column: e, depth: t + 1 }, e.key),
                          ),
                        },
                        e[0].key,
                      ),
                    )
                  : v.map((e, t) =>
                      (0, q.jsx)(
                        $,
                        { column: e, depth: Math.floor(t / J) + 1 },
                        e.key,
                      ),
                    ),
              }),
              !a && d && (0, q.jsx)(Q, { url: d, location: `mobile` }),
            ],
          })
        : null
      : (0, q.jsx)(`div`, { className: (0, D.default)(j, M, Y) });
}
function ve(e) {
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
  let { column: t, depth: n } = e,
    r = t.items[0]?.style === `full`;
  return (0, q.jsx)(p, {
    className: (0, D.default)(V, r && `C4YUDj4Nzy4-`),
    "flow-children": `column`,
    navEntryPreferPosition: C.MAINTAIN_Y,
    children: t.items.map((e) => (0, q.jsx)(ye, { item: e, depth: n }, X(e))),
  });
}
function ye(e) {
  let { item: t, depth: n } = e,
    r = t.style === `full`,
    i = E.useMemo(() => (t.appid ? { appid: t.appid } : void 0), [t.appid]),
    o = !!t.url,
    s = t.alt !== void 0,
    c = !!t.image,
    l = !!t.price || !!t.is_free || !!t.discount_text,
    u = !o || !s || !l,
    h = !c,
    y = !l,
    { data: x } = m(u ? i : void 0),
    { data: S } = v(h ? i : void 0),
    { data: C } = _(y ? i : void 0),
    { data: T } = ee(),
    O = T?.preferences?.disable_microtrailers,
    [k, A] = E.useState(!1),
    [j, M] = E.useState(!1),
    N = !!i && !r && !t.sale_page && !O,
    P = N && (k || j),
    F = ge(t),
    I = b(t.url, F, n),
    L = t.image || (r ? w(S, `hero_capsule`, `header`) : w(S, `header`)),
    R = he(t),
    z = t.alt ?? x?.name ?? ``;
  if (i && ((!o && x === null) || (!c && S === null))) return null;
  let B = (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsxs)(`div`, {
          className: ae,
          children: [
            L &&
              (0, q.jsx)(`img`, { className: `auc77O9GIek-`, src: L, alt: z }),
            N && (0, q.jsx)(a, { id: i, active: P, bIsHoverMode: !0 }),
            R && (0, q.jsx)(`div`, { className: `jxYpM-g5fRs-`, children: R }),
          ],
        }),
        (0, q.jsx)(`div`, {
          className: oe,
          children: (0, q.jsx)(be, {
            item: t,
            storeItem: x,
            purchaseOption: C,
          }),
        }),
      ],
    }),
    V;
  if (I) {
    let e = (0, q.jsx)(te, { href: I, className: G, children: B });
    V = i
      ? (0, q.jsx)(f, { appID: i.appid, feature: F, depth: n, children: e })
      : e;
  } else
    V = (0, q.jsx)(g, {
      storeItem: x,
      feature: F,
      depth: n,
      className: G,
      children: B,
    });
  let H = (0, q.jsx)(p, {
    className: (0, D.default)(
      re,
      r ? ie : U,
      t.banner === `daily_deal` && `-xyaBPF0Lno-`,
      P && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => M(!0),
    onGamepadBlur: () => M(!1),
    children: i
      ? (0, q.jsx)(d, {
          id: i,
          hoverClassName: W,
          fnHoverState: A,
          disableScreenshots: !0,
          children: V,
        })
      : (0, q.jsx)(`div`, { className: W, children: V }),
  });
  return i ? (0, q.jsx)(ne, { itemid: i, children: H }) : H;
}
function be(e) {
  let { item: t, storeItem: n, purchaseOption: r } = e;
  if (t.discount_text)
    return (0, q.jsx)(`div`, { className: K, children: t.discount_text });
  let i = t.price ?? r;
  return i
    ? (0, q.jsx)(S, { purchaseOption: i, size: `inline`, legacyStyle: !0 })
    : t.is_free || n?.is_free
      ? (0, q.jsx)(`div`, {
          className: se,
          children: x.Localize(`#Price_Free`),
        })
      : null;
}
var xe = 2e4,
  Se = 3e5;
function Ce(e, t, n, r, a = {}) {
  return i(we(e, t, n, r, a));
}
function we(e, t, n, r, i = {}) {
  let a = new URLSearchParams(r);
  n && a.set(`t`, n);
  let o = `${y.STORE_BASE_URL}default/discounts_and_events_data/`,
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
          signal: AbortSignal.timeout(xe),
        });
        if (!e.ok) throw Error(`discounts_and_events_data failed: ${e.status}`);
        let t = await e.json();
        return { items: Array.isArray(t.items) ? t.items : [] };
      },
      staleTime: Se,
      ...i,
    }
  );
}
function Te(e) {
  let {
      initialData: t,
      initialDataUpdatedAt: n,
      previewTime: r,
      switches: i,
    } = e,
    a = Ce(t, n, r, i),
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
  return (0, q.jsx)(_e, { rgItems: d, bLoadError: a.isError });
}
function Ee(e) {
  return (0, q.jsx)(c, {
    placeholderHeight: fe,
    rootMargin: `100% 0px 100% 0px`,
    children: (0, q.jsx)(Te, { ...e }),
  });
}
export { Ee as default };
