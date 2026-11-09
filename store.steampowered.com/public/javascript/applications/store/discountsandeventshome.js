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
  Cc as p,
  Ct as m,
  Dv as h,
  Hb as g,
  Uu as _,
  b as v,
  bu as y,
  c as b,
  dd as ee,
  kc as x,
  kv as S,
  nl as te,
  pl as C,
  u as ne,
  wv as re,
  zb as w,
} from "./main.js";
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
  H = `I5xcEcLqHQE-`,
  ie = `OahpVA-2mkI-`,
  ae = `nL4oSzmS8Ds-`,
  oe = `cV6I71ujCms-`,
  se = `VqHCjCKSpdg-`,
  U = `Wv-2-GahLGE-`,
  W = `-qUG2JW7G8E-`,
  G = `TSCZ-XXe31E-`,
  ce = `NCC9qjeD1o8-`,
  K = r(),
  q = 3,
  le = 4,
  ue = 2,
  J = 2,
  de = parseInt(D),
  fe = parseInt(O),
  pe = parseInt(k),
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
  for (; c.length < i && (l < a.length || u < o.length || d < s.length); ) {
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
    h.push(...s.slice(d, d + g)), (d += g);
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
      return v.Localize(`#DiscountsAndEvents_Banner_WeekendDeal`);
    case `midweek_deal`:
      return v.Localize(`#DiscountsAndEvents_Banner_MidweekDeal`);
    case `daily_deal`:
      return v.Localize(`#DiscountsAndEvents_Banner_DailyDeal`);
    case `largest_discount`:
      return v.Localize(`#DiscountsAndEvents_Banner_LargestDiscount`);
    case `wishlist`:
      return v.Localize(`#DiscountsAndEvents_Banner_Wishlist`);
    case `first_time_on_sale`:
      return v.Localize(`#DiscountsAndEvents_Banner_FirstTimeOnSale`);
    case `ending_soon`:
      return v.Localize(`#DiscountsAndEvents_Banner_EndingSoon`);
    case `newly_on_sale`:
      return v.Localize(`#DiscountsAndEvents_Banner_NewlyOnSale`);
    case `well_reviewed`:
      return v.Localize(`#DiscountsAndEvents_Banner_WellReviewed`);
    case `top_seller`:
      return v.Localize(`#DiscountsAndEvents_Banner_TopSeller`);
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
    a = w(),
    c = i && !a,
    d = _(
      e.strSeeMoreURL === null
        ? void 0
        : (e.strSeeMoreURL ?? `${g.STORE_BASE_URL}specials`),
    ),
    f = v.Localize(`#DiscountsAndEvents_SeeMore`),
    { bShowSeeMoreHint: p, panelProps: m } = l(d),
    { rgPages: h, rgColumns: y } = T.useMemo(() => {
      let e = me(t ?? [], q, ue, J, le);
      return { rgPages: e, rgColumns: e.flat() };
    }, [t]);
  return !t && n
    ? (0, K.jsx)(ve, { bHideTitle: r })
    : t
      ? y.length
        ? (0, K.jsxs)(x, {
            className: (0, E.default)(A, Y),
            navEntryPreferPosition: C.PREFERRED_CHILD,
            ...m,
            onOptionsActionDescription: d ? f : void 0,
            children: [
              (0, K.jsxs)(Z, {
                bHideTitle: r,
                children: [
                  !a && d && (0, K.jsx)(Q, { url: d, location: `desktop` }),
                  a && (0, K.jsx)(u, { label: f, shown: p }),
                ],
              }),
              (0, K.jsx)(o, {
                visibleElements: 1,
                disableEdgeWrap: !1,
                hideArrows: !1,
                hidePips: a,
                screenIsWide: i,
                bForceSimpleCarousel: a,
                gap: pe,
                className: (0, E.default)(z, !c && `tvKN6VPvEYo-`),
                children: c
                  ? h.map((e, t) =>
                      (0, K.jsx)(
                        x,
                        {
                          className: V,
                          "flow-children": `row`,
                          role: `list`,
                          "aria-labelledby": `discounts_and_events_title`,
                          children: e.map((e) =>
                            (0, K.jsx)($, { column: e, depth: t + 1 }, e.key),
                          ),
                        },
                        e[0].key,
                      ),
                    )
                  : y.map((e, t) =>
                      (0, K.jsx)(
                        $,
                        { column: e, depth: Math.floor(t / q) + 1 },
                        e.key,
                      ),
                    ),
              }),
              !a && d && (0, K.jsx)(Q, { url: d, location: `mobile` }),
            ],
          })
        : null
      : (0, K.jsx)(`div`, { className: (0, E.default)(A, j, Y) });
}
function ve(e) {
  return (0, K.jsxs)(`div`, {
    className: (0, E.default)(A, Y),
    children: [
      (0, K.jsx)(Z, { bHideTitle: e.bHideTitle }),
      (0, K.jsx)(`div`, {
        className: R,
        children: v.Localize(`#DiscountsAndEvents_LoadError`),
      }),
    ],
  });
}
function Z(e) {
  let { bHideTitle: t, children: n } = e;
  return (0, K.jsxs)(`div`, {
    className: (0, E.default)(M, t && `lwTekD10gdM-`),
    children: [
      (0, K.jsx)(`div`, {
        className: (0, E.default)(N, t && `mMcECT5lSy0-`),
        id: `discounts_and_events_title`,
        role: `heading`,
        "aria-level": 2,
        children: v.Localize(`#DiscountsAndEvents_Title`),
      }),
      n,
    ],
  });
}
function Q(e) {
  let { url: t, location: n } = e;
  return (0, K.jsx)(`div`, {
    className: (0, E.default)(P, n == `mobile` ? I : F),
    children: (0, K.jsx)(`a`, {
      href: t,
      className: L,
      children: v.Localize(`#DiscountsAndEvents_SeeMore`),
    }),
  });
}
function $(e) {
  let { column: t, depth: n } = e,
    r = t.items[0]?.style === `full`;
  return (0, K.jsx)(x, {
    className: (0, E.default)(B, r && `C4YUDj4Nzy4-`),
    "flow-children": `column`,
    navEntryPreferPosition: C.MAINTAIN_Y,
    children: t.items.map((e) => (0, K.jsx)(ye, { item: e, depth: n }, X(e))),
  });
}
function ye(e) {
  let { item: t, depth: n } = e,
    r = t.style === `full`,
    i = T.useMemo(() => (t.appid ? { appid: t.appid } : void 0), [t.appid]),
    o = !!t.url,
    s = t.alt !== void 0,
    c = !!t.image,
    l = !!t.price || !!t.is_free || !!t.discount_text,
    u = !o || !s || !l,
    g = !c,
    v = !l,
    { data: y } = S(u ? i : void 0),
    { data: b } = re(g ? i : void 0),
    { data: C } = h(v ? i : void 0),
    { data: w } = ee(),
    D = w?.preferences?.disable_microtrailers,
    [O, k] = T.useState(!1),
    [A, j] = T.useState(!1),
    M = !!i && !r && !t.sale_page && !D,
    N = M && (O || A),
    P = ge(t),
    F = _(t.url, P, n),
    I = t.image || (r ? p(b, `hero_capsule`, `header`) : p(b, `header`)),
    L = he(t),
    R = t.alt ?? y?.name ?? ``;
  if (i && ((!o && y === null) || (!c && b === null))) return null;
  let z = (0, K.jsxs)(K.Fragment, {
      children: [
        (0, K.jsxs)(`div`, {
          className: ae,
          children: [
            I &&
              (0, K.jsx)(`img`, { className: `auc77O9GIek-`, src: I, alt: R }),
            M && (0, K.jsx)(a, { id: i, active: N, bIsHoverMode: !0 }),
            L && (0, K.jsx)(`div`, { className: `jxYpM-g5fRs-`, children: L }),
          ],
        }),
        (0, K.jsx)(`div`, {
          className: oe,
          children: (0, K.jsx)(be, {
            item: t,
            storeItem: y,
            purchaseOption: C,
          }),
        }),
      ],
    }),
    B;
  if (F) {
    let e = (0, K.jsx)(te, { href: F, className: W, children: z });
    B = i
      ? (0, K.jsx)(f, { appID: i.appid, feature: P, depth: n, children: e })
      : e;
  } else
    B = (0, K.jsx)(m, {
      storeItem: y,
      feature: P,
      depth: n,
      className: W,
      children: z,
    });
  let V = (0, K.jsx)(x, {
    className: (0, E.default)(
      H,
      r ? ie : se,
      t.banner === `daily_deal` && `-xyaBPF0Lno-`,
      N && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => j(!0),
    onGamepadBlur: () => j(!1),
    children: i
      ? (0, K.jsx)(d, {
          id: i,
          hoverClassName: U,
          fnHoverState: k,
          disableScreenshots: !0,
          children: B,
        })
      : (0, K.jsx)(`div`, { className: U, children: B }),
  });
  return i ? (0, K.jsx)(ne, { itemid: i, children: V }) : V;
}
function be(e) {
  let { item: t, storeItem: n, purchaseOption: r } = e;
  if (t.discount_text)
    return (0, K.jsx)(`div`, { className: G, children: t.discount_text });
  let i = t.price ?? r;
  return i
    ? (0, K.jsx)(b, { purchaseOption: i, size: `inline`, legacyStyle: !0 })
    : t.is_free || n?.is_free
      ? (0, K.jsx)(`div`, {
          className: ce,
          children: v.Localize(`#Price_Free`),
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
  let o = `${g.STORE_BASE_URL}default/discounts_and_events_data/`,
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
    [o, s] = y(),
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
  return (0, K.jsx)(_e, { rgItems: d, bLoadError: a.isError });
}
function Ee(e) {
  return (0, K.jsx)(c, {
    placeholderHeight: fe,
    rootMargin: `100% 0px 100% 0px`,
    children: (0, K.jsx)(Te, { ...e }),
  });
}
export { Ee as default };
