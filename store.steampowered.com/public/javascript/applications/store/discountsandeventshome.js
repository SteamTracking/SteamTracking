/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, M as n, dt as r, ot as i } from "./chunk~01cfc309bf.js";
import { r as a, t as o } from "./chunk~f3699411bf.js";
import { dr as s } from "./chunk~6b8ddcaac8.js";
import { _ as c, l, n as u, r as d, v as f } from "./chunk~4eed35ad1f.js";
import { n as p } from "./chunk~56437c278a.js";
import { r as m } from "./chunk~21cdc464a1.js";
import { n as h } from "./chunk~710e3cfd2f.js";
import { n as g } from "./chunk~4d16ce5d1a.js";
import { v as _ } from "./chunk~b8ca037aae.js";
import { n as v, r as y } from "./chunk~3720b337f3.js";
import { n as b } from "./chunk~379edc388d.js";
import {
  AS as x,
  Dl as S,
  Ed as C,
  Fc as w,
  Hv as T,
  Ib as E,
  Pu as D,
  Tt as ee,
  Vc as O,
  Wv as te,
  ad as ne,
  b as k,
  c as A,
  en as re,
  ex as j,
  gl as ie,
  gt as M,
  id as ae,
  rx as N,
  u as oe,
  wt as se,
  zv as ce,
} from "./main.js";
import { t as le } from "./chunk~6417efccc1.js";
var P = e(t(), 1),
  F = r();
function I(e) {
  let { sale: t, bValveOnly: n } = e,
    { event: r, section: i } = P.useMemo(() => L(t, !!n), [t, n]);
  return (0, F.jsx)(a, { event: r, section: i, language: x(N.LANGUAGE) });
}
function L(e, t) {
  let n = {
      ...o([e], `event_capsule`),
      hide_owned_items: !0,
      test_show_on_valve_ip_only: t,
    },
    r = e.clan_account_id || e.creator_clan_account_id || 0,
    i = b(r, 1, `crosspromote`, Math.floor(Date.now() / 1e3));
  return ((i.jsondata.sale_sections = [n]), { event: i, section: n });
}
var R = e(n(), 1),
  z = `911px`,
  B = `700px`,
  V = `12px`,
  H = `IvpvUTAlgCY-`,
  U = `Ew9l-x2T9c0-`,
  W = `tW10-at9cMc-`,
  G = `txCSzBxQT1Q-`,
  K = `_9wiEHoTVAzs-`,
  q = `vVq04EOZM2Y-`,
  J = `oVUMaC22Mz0-`,
  ue = `_3eoksPgeP-E-`,
  de = `znS2DqGQQHM-`,
  fe = `_3VC9z5N0wHE-`,
  pe = `F6Wso3e7oqk-`,
  me = `h8E3fLYHMcw-`,
  he = `C3aRBmfT1yQ-`,
  ge = `_5w6AlYMyKXw-`,
  _e = `I5xcEcLqHQE-`,
  ve = `OahpVA-2mkI-`,
  ye = `nL4oSzmS8Ds-`,
  be = `cV6I71ujCms-`,
  xe = `VqHCjCKSpdg-`,
  Y = `Wv-2-GahLGE-`,
  X = `-qUG2JW7G8E-`,
  Se = `TSCZ-XXe31E-`,
  Ce = `NCC9qjeD1o8-`,
  we = `baOqlTJHsx8-`,
  Te = {
    deal: `_3bi1SSQ1KQg-`,
    new: `_1wXSD0PiGyA-`,
    popular: `OthFRkqj-40-`,
    quality: `AQj-ehWmZNY-`,
    urgent: `YaIHfPAnyiE-`,
  };
function Ee(e) {
  return (0, R.default)(we, Te[e]);
}
function De(e) {
  switch (e) {
    case `first_time_on_sale`:
    case `newly_on_sale`:
    case `just_updated`:
      return `new`;
    case `top_seller`:
    case `popular_in_region`:
      return `popular`;
    case `wishlist`:
    case `well_reviewed`:
    case `none`:
      return `quality`;
    case `ending_soon`:
      return `urgent`;
    default:
      return `deal`;
  }
}
var Z = 3,
  Oe = 6,
  ke = 2,
  Ae = 2,
  je = parseInt(z),
  Me = parseInt(B),
  Ne = parseInt(V),
  Q = `DiscountsAndEventsReady`;
function $(e) {
  return e.appid ? `app_${e.appid}` : `url_${e.url ?? ``}`;
}
function Pe(e, t, n, r, i) {
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
      e.push({ key: `full_${$(t)}`, items: [t] });
    }
    let p = (t - e.length) * 2,
      m = Math.min(r, p, o.length - u),
      h = o.slice(u, u + m);
    u += m;
    let g = Math.min(p - m, s.length - d);
    (h.push(...s.slice(d, d + g)), (d += g));
    for (let t = 0; t < h.length; t += 2) {
      let n = h.slice(t, t + 2);
      e.push({ key: `half_${$(n[0])}`, items: n });
    }
    c.push(e);
  }
  return c;
}
function Fe(e) {
  switch (e.banner) {
    case `weekend_deal`:
      return k.Localize(`#DiscountsAndEvents_Banner_WeekendDeal`);
    case `midweek_deal`:
      return k.Localize(`#DiscountsAndEvents_Banner_MidweekDeal`);
    case `daily_deal`:
      return k.Localize(`#DiscountsAndEvents_Banner_DailyDeal`);
    case `largest_discount`:
      return k.Localize(`#DiscountsAndEvents_Banner_LargestDiscount`);
    case `wishlist`:
      return k.Localize(`#DiscountsAndEvents_Banner_Wishlist`);
    case `first_time_on_sale`:
      return k.Localize(`#DiscountsAndEvents_Banner_FirstTimeOnSale`);
    case `ending_soon`:
      return k.Localize(`#DiscountsAndEvents_Banner_EndingSoon`);
    case `newly_on_sale`:
      return k.Localize(`#DiscountsAndEvents_Banner_NewlyOnSale`);
    case `well_reviewed`:
      return k.Localize(`#DiscountsAndEvents_Banner_WellReviewed`);
    case `top_seller`:
      return k.Localize(`#DiscountsAndEvents_Banner_TopSeller`);
    case `hot_deal`:
      return k.Localize(`#DiscountsAndEvents_Banner_HotDeal`);
    case `deep_discount`:
      return k.Localize(`#DiscountsAndEvents_Banner_DeepDiscount`);
    case `popular_in_region`:
      return k.Localize(`#DiscountsAndEvents_Banner_PopularInRegion`);
    case `just_updated`:
      return k.Localize(`#DiscountsAndEvents_Banner_JustUpdated`);
    case `custom`:
      return e.title || void 0;
    case `none`:
      return e.feature === `discounts-none`
        ? E.Localize(`#Sale_Specials_Label_BasedOnWhatYouPlay`)
        : void 0;
    default:
      return;
  }
}
function Ie(e) {
  return e.feature
    ? e.feature
    : e.style === `full`
      ? `spotlight`
      : e.banner === `daily_deal`
        ? `daily-deal`
        : `spotlight-specials`;
}
function Le(e) {
  let {
      rgItems: t,
      bLoadError: n = !1,
      bHideTitle: r = !1,
      bReactHover: i = !1,
      bFrontPage: a = !1,
      strTheme: o,
      rgPageFooters: s = [],
      bHasFooterActionLegend: c = !1,
    } = e,
    f = l(je),
    p = j(),
    h = f && !p,
    g =
      e.strSeeMoreURL === null
        ? void 0
        : (e.strSeeMoreURL ?? `${N.STORE_BASE_URL}specials`),
    _ = ae(g),
    v = k.Localize(
      a
        ? `#DiscountsAndEvents_ExploreSpecialsPage`
        : `#DiscountsAndEvents_SeeMore`,
    ),
    { bShowSeeMoreHint: y, panelProps: b } = d(_, `X`),
    { rgPages: x, rgColumns: C } = P.useMemo(() => {
      let e = Pe(t ?? [], Z, ke, Ae, Oe);
      return (
        a && e.length > 1 && e[e.length - 1].length < Z && (e = e.slice(0, -1)),
        { rgPages: e, rgColumns: e.flat() }
      );
    }, [t, a]);
  if (!t && n) return (0, F.jsx)(Re, { bHideTitle: r });
  if (!t) return (0, F.jsx)(`div`, { className: (0, R.default)(H, U, Q) });
  let w = s[0] ? (0, F.jsx)(`div`, { className: ue, children: s[0] }) : null;
  if (!C.length) return w;
  let T = (0, F.jsx)(m, {
    visibleElements: 1,
    disableEdgeWrap: !1,
    hideArrows: !1,
    hidePips: p,
    screenIsWide: f,
    bForceSimpleCarousel: p,
    gap: Ne,
    className: (0, R.default)(pe, !h && `tvKN6VPvEYo-`),
    children: h
      ? x.map((e, t) =>
          (0, F.jsxs)(
            `div`,
            {
              className: he,
              children: [
                (0, F.jsx)(O, {
                  className: ge,
                  "flow-children": `row`,
                  role: `list`,
                  "aria-labelledby": `discounts_and_events_title`,
                  children: e.map((e) =>
                    (0, F.jsx)(
                      Ve,
                      { column: e, depth: t + 1, bReactHover: i },
                      e.key,
                    ),
                  ),
                }),
                s[t] &&
                  (0, F.jsx)(`div`, {
                    className: `_3eoksPgeP-E-`,
                    children: s[t],
                  }),
              ],
            },
            e[0].key,
          ),
        )
      : C.map((e, t) =>
          (0, F.jsx)(
            Ve,
            { column: e, depth: Math.floor(t / Z) + 1, bReactHover: i },
            e.key,
          ),
        ),
  });
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsxs)(O, {
        className: (0, R.default)(
          H,
          Q,
          a && `P-5zAQV9Nrw-`,
          o === `blackfriday` && `D7k0v382WJU-`,
        ),
        navEntryPreferPosition: S.PREFERRED_CHILD,
        ...b,
        onSecondaryActionDescription: _
          ? E.Localize(`#Sale_SectionLink_BrowseAll`)
          : void 0,
        children: [
          (0, F.jsxs)(ze, {
            bHideTitle: r,
            children: [
              !p &&
                _ &&
                (0, F.jsx)(Be, {
                  url: _,
                  label: v,
                  location: `desktop`,
                  bShine: a,
                }),
              p && !c && (0, F.jsx)(u, { label: v, shown: y, button: `X` }),
            ],
          }),
          T,
          !h && !p && w,
          !p &&
            _ &&
            (0, F.jsx)(Be, { url: _, label: v, location: `mobile`, bShine: a }),
        ],
      }),
      p && w,
    ],
  });
}
function Re(e) {
  return (0, F.jsxs)(`div`, {
    className: (0, R.default)(H, Q),
    children: [
      (0, F.jsx)(ze, { bHideTitle: e.bHideTitle }),
      (0, F.jsx)(`div`, {
        className: fe,
        children: k.Localize(`#DiscountsAndEvents_LoadError`),
      }),
    ],
  });
}
function ze(e) {
  let { bHideTitle: t, children: n } = e;
  return (0, F.jsxs)(`div`, {
    className: (0, R.default)(W, t && `lwTekD10gdM-`),
    children: [
      (0, F.jsx)(`div`, {
        className: (0, R.default)(G, t && `mMcECT5lSy0-`),
        id: `discounts_and_events_title`,
        role: `heading`,
        "aria-level": 2,
        children: k.Localize(`#DiscountsAndEvents_Title`),
      }),
      n,
    ],
  });
}
function Be(e) {
  let { url: t, label: n, location: r, bShine: i = !1 } = e;
  return (0, F.jsx)(`div`, {
    className: (0, R.default)(K, r == `mobile` ? J : q),
    children: (0, F.jsx)(`a`, {
      href: t,
      className: (0, R.default)(de, i && `TP90UHYnpbo-`),
      children: n,
    }),
  });
}
function Ve(e) {
  let { column: t, depth: n, bReactHover: r } = e,
    i = t.items[0]?.style === `full`;
  return (0, F.jsx)(O, {
    className: (0, R.default)(me, i && `C4YUDj4Nzy4-`),
    "flow-children": `column`,
    navEntryPreferPosition: S.MAINTAIN_Y,
    children: t.items.map((e) =>
      (0, F.jsx)(Ue, { item: e, depth: n, bReactHover: r }, $(e)),
    ),
  });
}
function He(e) {
  let { appid: t, feature: n } = e,
    r = P.useMemo(
      () => ({ appid: t, style: `half`, banner: `none`, feature: n }),
      [t, n],
    );
  return (0, F.jsx)(Ue, { item: r, depth: 1, bReactHover: !1 });
}
function Ue(e) {
  let { item: t, depth: n, bReactHover: r } = e,
    i = t.style === `full`,
    a = P.useMemo(() => (t.appid ? { appid: t.appid } : void 0), [t.appid]),
    o = !!t.url,
    l = t.alt !== void 0,
    u = !!t.image,
    d = !!t.price || !!t.is_free || !!t.discount_text,
    m = !o || !l || !d,
    h = !u,
    _ = !d,
    { data: v } = te(m ? a : void 0),
    { data: y } = ce(h ? a : void 0),
    { data: b } = T(_ ? a : void 0),
    { data: x } = C(),
    S = x?.preferences?.disable_microtrailers,
    [E, D] = P.useState(!1),
    [k, A] = P.useState(!1),
    [j, M] = P.useState(!1),
    N = p(a),
    I = !!a && !t.sale_page && !S,
    L = I && (E || k || j),
    z = Ie(t),
    B = ae(t.url, z, n),
    V = ne(z, n),
    H = ee(v, z, n),
    U = t.image || (i ? w(y, `hero_capsule`, `header`) : w(y, `header`)),
    W = Fe(t),
    G = t.alt ?? v?.name ?? ``;
  if (a && ((!o && v === null) || (!u && y === null))) return null;
  let K = (0, F.jsxs)(F.Fragment, {
      children: [
        (0, F.jsxs)(`div`, {
          className: ye,
          children: [
            U &&
              (0, F.jsx)(`img`, { className: `auc77O9GIek-`, src: U, alt: G }),
            I &&
              (0, F.jsx)(c, {
                id: a,
                active: L,
                bIsHoverMode: !0,
                eGrowOnActivate: i ? f.k_ETrailerGrowAmount_Implicit : void 0,
              }),
            W &&
              (0, F.jsx)(`div`, {
                className: (0, R.default)(`jxYpM-g5fRs-`, Ee(De(t.banner))),
                children: W,
              }),
          ],
        }),
        (0, F.jsx)(`div`, {
          className: be,
          children: (0, F.jsx)(We, {
            item: t,
            storeItem: v,
            purchaseOption: b,
          }),
        }),
      ],
    }),
    q;
  if (B) {
    let e = (0, F.jsx)(ie, { href: B, className: X, children: K });
    q = a
      ? (0, F.jsx)(re, { appID: a.appid, feature: z, depth: n, children: e })
      : e;
  } else
    q = (0, F.jsx)(se, {
      storeItem: v,
      feature: z,
      depth: n,
      className: X,
      children: K,
    });
  let J = (0, F.jsxs)(O, {
    className: (0, R.default)(
      _e,
      i ? ve : xe,
      t.banner === `daily_deal` && void 0,
      W && `i6bxdYcZVss-`,
      L && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => A(!0),
    onGamepadBlur: () => A(!1),
    ...N,
    onOKActionDescription: N.onOptionsButton ? null : void 0,
    children: [
      a
        ? r
          ? (0, F.jsx)(s, {
              id: a,
              className: Y,
              strChildLinkURL: B ?? H,
              children: q,
            })
          : (0, F.jsx)(g, {
              id: a,
              hoverClassName: Y,
              fnHoverState: D,
              disableScreenshots: !0,
              children: q,
            })
        : (0, F.jsx)(`div`, { className: Y, children: q }),
      a &&
        !t.sale_page &&
        (0, F.jsx)(le, { appid: a.appid, snr: V, onActiveChange: M }),
    ],
  });
  return a ? (0, F.jsx)(oe, { itemid: a, children: J }) : J;
}
function We(e) {
  let { item: t, storeItem: n, purchaseOption: r } = e;
  if (t.discount_text)
    return (0, F.jsx)(`div`, { className: Se, children: t.discount_text });
  let i = t.price ?? r;
  return i
    ? (0, F.jsx)(A, { purchaseOption: i, size: `inline`, legacyStyle: !0 })
    : t.is_free || n?.is_free
      ? (0, F.jsx)(`div`, {
          className: Ce,
          children: k.Localize(`#Price_Free`),
        })
      : null;
}
var Ge = 2e4,
  Ke = 3e5;
function qe(e, t, n, r, a = {}) {
  return i(Je(e, t, n, r, a));
}
function Je(e, t, n, r, i = {}) {
  let a = new URLSearchParams(r);
  n && a.set(`t`, n);
  let o = `${N.STORE_BASE_URL}default/discounts_and_events_data/`,
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
          signal: AbortSignal.timeout(Ge),
        });
        if (!e.ok) throw Error(`discounts_and_events_data failed: ${e.status}`);
        let t = await e.json();
        return { items: Array.isArray(t.items) ? t.items : [] };
      },
      staleTime: Ke,
      ...i,
    }
  );
}
var Ye = 3,
  Xe = Ye,
  Ze = 6,
  Qe = Date.UTC(2026, 10, 26, 18),
  $e = Date.UTC(2026, 10, 30, 18);
function et(e) {
  let t = (e && Date.parse(e)) || Date.now();
  return t >= Qe && t < $e ? `blackfriday` : void 0;
}
function tt(e) {
  return e.type === `game`
    ? (0, F.jsx)(He, { appid: e.id, feature: `home-sale-crosspromo` })
    : void 0;
}
function nt(e, t) {
  let n = new Set(),
    r = [];
  for (let i of e) {
    if (r.length >= Ze) break;
    let e = (i.capsules ?? []).filter((e) => !n.has(e.id) && !t(e.id));
    if (e.length >= Xe) {
      let t = e.slice(0, Ye);
      (t.forEach((e) => n.add(e.id)), r.push({ ...i, capsules: t }));
    }
  }
  return r;
}
function rt(e) {
  let {
      initialData: t,
      initialDataUpdatedAt: n,
      previewTime: r,
      switches: i,
      crossPromoSales: a,
      crossPromoValveOnly: o,
    } = e,
    s = qe(t, n, r, i),
    [c, l] = D(),
    u = !!i?.as_anon && i.as_anon !== `0`,
    d = !!i?.accountid && i.accountid !== `0`,
    f = u || d,
    p = P.useMemo(
      () =>
        !s.data || c || f
          ? s.data?.items
          : s.data.items.filter(
              (e) =>
                !e.appid ||
                e.sale_page ||
                (!l.BIsGameOwned(e.appid) && !l.BIsGameIgnored(e.appid)),
            ),
      [s.data, c, f, l],
    ),
    m = P.useMemo(() => {
      if (!a?.length || !p || c) return [];
      let e = new Set(p.map((e) => e.appid));
      return nt(
        a,
        (t) => e.has(t) || (!f && (l.BIsGameOwned(t) || l.BIsGameIgnored(t))),
      );
    }, [a, p, c, f, l]).map((e) =>
      (0, F.jsx)(
        M,
        {
          feature: `home-sale-crosspromo`,
          children: (0, F.jsx)(_, {
            value: tt,
            children: (0, F.jsx)(y, {
              value: !0,
              children: (0, F.jsx)(v, {
                value: !0,
                children: (0, F.jsx)(I, { sale: e, bValveOnly: o }),
              }),
            }),
          }),
        },
        e.event_gid ?? `creator_${e.creator_clan_account_id}`,
      ),
    );
  return (0, F.jsx)(Le, {
    rgItems: p,
    bLoadError: s.isError,
    bFrontPage: !0,
    strTheme: et(r),
    rgPageFooters: m,
    bHasFooterActionLegend: !0,
  });
}
function it(e) {
  return (0, F.jsx)(h, {
    placeholderHeight: Me,
    rootMargin: `100% 0px 100% 0px`,
    children: (0, F.jsx)(rt, { ...e }),
  });
}
export { it as default };
