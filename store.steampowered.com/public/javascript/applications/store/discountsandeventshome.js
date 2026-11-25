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
  IS as E,
  Ib as D,
  Pu as O,
  Tt as ee,
  Vc as k,
  Wv as te,
  ad as ne,
  b as A,
  c as j,
  en as re,
  ex as M,
  gl as ie,
  gt as N,
  id as P,
  rx as F,
  u as ae,
  wt as oe,
  zv as se,
} from "./main.js";
import { t as ce } from "./chunk~6417efccc1.js";
var I = e(t(), 1),
  L = r();
function R(e) {
  let { sale: t, bValveOnly: n } = e,
    { event: r, section: i } = I.useMemo(() => z(t, !!n), [t, n]);
  return (0, L.jsx)(a, { event: r, section: i, language: x(F.LANGUAGE) });
}
function z(e, t) {
  let n = {
      ...o([e], `event_capsule`),
      hide_owned_items: !0,
      test_show_on_valve_ip_only: t,
    },
    r = e.clan_account_id || e.creator_clan_account_id || 0,
    i = b(r, 1, `crosspromote`, Math.floor(Date.now() / 1e3));
  return ((i.jsondata.sale_sections = [n]), { event: i, section: n });
}
var B = e(n(), 1),
  V = `911px`,
  H = `700px`,
  U = `12px`,
  W = `IvpvUTAlgCY-`,
  G = `Ew9l-x2T9c0-`,
  K = `tW10-at9cMc-`,
  q = `txCSzBxQT1Q-`,
  J = `_9wiEHoTVAzs-`,
  Y = `vVq04EOZM2Y-`,
  le = `oVUMaC22Mz0-`,
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
  X = `Wv-2-GahLGE-`,
  Se = `-qUG2JW7G8E-`,
  Ce = `TSCZ-XXe31E-`,
  we = `NCC9qjeD1o8-`,
  Te = `baOqlTJHsx8-`,
  Ee = {
    deal: `_3bi1SSQ1KQg-`,
    new: `_1wXSD0PiGyA-`,
    popular: `OthFRkqj-40-`,
    quality: `AQj-ehWmZNY-`,
    urgent: `YaIHfPAnyiE-`,
  };
function De(e) {
  return (0, B.default)(Te, Ee[e]);
}
function Oe(e) {
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
  ke = 6,
  Ae = 2,
  je = 1,
  Me = 3,
  Ne = 2,
  Pe = parseInt(V),
  Fe = parseInt(H),
  Ie = parseInt(U),
  Q = `DiscountsAndEventsReady`;
function $(e) {
  return e.appid ? `app_${e.appid}` : `url_${e.url ?? ``}`;
}
function Le(e, t, n, r, i) {
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
function Re(e) {
  switch (e.banner) {
    case `weekend_deal`:
      return A.Localize(`#DiscountsAndEvents_Banner_WeekendDeal`);
    case `midweek_deal`:
      return A.Localize(`#DiscountsAndEvents_Banner_MidweekDeal`);
    case `daily_deal`:
      return A.Localize(`#DiscountsAndEvents_Banner_DailyDeal`);
    case `largest_discount`:
      return A.Localize(`#DiscountsAndEvents_Banner_LargestDiscount`);
    case `wishlist`:
      return A.Localize(`#DiscountsAndEvents_Banner_Wishlist`);
    case `first_time_on_sale`:
      return A.Localize(`#DiscountsAndEvents_Banner_FirstTimeOnSale`);
    case `ending_soon`:
      return A.Localize(`#DiscountsAndEvents_Banner_EndingSoon`);
    case `newly_on_sale`:
      return A.Localize(`#DiscountsAndEvents_Banner_NewlyOnSale`);
    case `well_reviewed`:
      return A.Localize(`#DiscountsAndEvents_Banner_WellReviewed`);
    case `top_seller`:
      return A.Localize(`#DiscountsAndEvents_Banner_TopSeller`);
    case `hot_deal`:
      return A.Localize(`#DiscountsAndEvents_Banner_HotDeal`);
    case `deep_discount`:
      return A.Localize(`#DiscountsAndEvents_Banner_DeepDiscount`);
    case `popular_in_region`:
      return A.Localize(`#DiscountsAndEvents_Banner_PopularInRegion`);
    case `just_updated`:
      return A.Localize(`#DiscountsAndEvents_Banner_JustUpdated`);
    case `custom`:
      return e.title || void 0;
    case `none`:
      return e.feature === `discounts-none`
        ? D.Localize(`#Sale_Specials_Label_BasedOnWhatYouPlay`)
        : void 0;
    default:
      return;
  }
}
function ze(e) {
  return e.feature
    ? e.feature
    : e.style === `full`
      ? `spotlight`
      : e.banner === `daily_deal`
        ? `daily-deal`
        : `spotlight-specials`;
}
function Be(e) {
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
    f = l(Pe),
    p = M(),
    h = f && !p,
    g = a && F.EREALM != E.k_ESteamRealmChina,
    _ = A.Localize(
      g
        ? `#DiscountsAndEvents_ExploreSpecialsPage`
        : `#DiscountsAndEvents_SeeMore`,
    ),
    v =
      e.strSeeMoreURL === null
        ? void 0
        : (e.strSeeMoreURL ?? `${F.STORE_BASE_URL}specials`),
    y = P(v),
    { bShowSeeMoreHint: b, panelProps: x } = d(y, `X`),
    { rgPages: C, rgColumns: w } = I.useMemo(() => {
      let e = a && F.EREALM == E.k_ESteamRealmChina,
        n = Le(t ?? [], Z, e ? Me : Ae, Ne, e ? je : ke);
      return (
        a && n.length > 1 && n[n.length - 1].length < Z && (n = n.slice(0, -1)),
        { rgPages: n, rgColumns: n.flat() }
      );
    }, [t, a]);
  if (!t && n) return (0, L.jsx)(Ve, { bHideTitle: r });
  if (!t) return (0, L.jsx)(`div`, { className: (0, B.default)(W, G, Q) });
  let T = s[0] ? (0, L.jsx)(`div`, { className: ue, children: s[0] }) : null;
  if (!w.length) return T;
  let O = (0, L.jsx)(m, {
    visibleElements: 1,
    disableEdgeWrap: !1,
    hideArrows: !1,
    hidePips: p,
    screenIsWide: f,
    bForceSimpleCarousel: p,
    gap: Ie,
    className: (0, B.default)(pe, !h && `tvKN6VPvEYo-`),
    children: h
      ? C.map((e, t) =>
          (0, L.jsxs)(
            `div`,
            {
              className: he,
              children: [
                (0, L.jsx)(k, {
                  className: ge,
                  "flow-children": `row`,
                  role: `list`,
                  "aria-labelledby": `discounts_and_events_title`,
                  children: e.map((e) =>
                    (0, L.jsx)(
                      We,
                      { column: e, depth: t + 1, bReactHover: i },
                      e.key,
                    ),
                  ),
                }),
                s[t] &&
                  (0, L.jsx)(`div`, {
                    className: `_3eoksPgeP-E-`,
                    children: s[t],
                  }),
              ],
            },
            e[0].key,
          ),
        )
      : w.map((e, t) =>
          (0, L.jsx)(
            We,
            { column: e, depth: Math.floor(t / Z) + 1, bReactHover: i },
            e.key,
          ),
        ),
  });
  return (0, L.jsxs)(L.Fragment, {
    children: [
      (0, L.jsxs)(k, {
        className: (0, B.default)(
          W,
          Q,
          a && `P-5zAQV9Nrw-`,
          o === `blackfriday` && `D7k0v382WJU-`,
        ),
        navEntryPreferPosition: S.PREFERRED_CHILD,
        ...x,
        onSecondaryActionDescription: y
          ? D.Localize(`#Sale_SectionLink_BrowseAll`)
          : void 0,
        children: [
          (0, L.jsxs)(He, {
            bHideTitle: r,
            children: [
              !p &&
                y &&
                (0, L.jsx)(Ue, {
                  url: y,
                  label: _,
                  location: `desktop`,
                  bShine: a,
                }),
              p && !c && (0, L.jsx)(u, { label: _, shown: b, button: `X` }),
            ],
          }),
          O,
          !h && !p && T,
          !p &&
            y &&
            (0, L.jsx)(Ue, { url: y, label: _, location: `mobile`, bShine: a }),
        ],
      }),
      p && T,
    ],
  });
}
function Ve(e) {
  return (0, L.jsxs)(`div`, {
    className: (0, B.default)(W, Q),
    children: [
      (0, L.jsx)(He, { bHideTitle: e.bHideTitle }),
      (0, L.jsx)(`div`, {
        className: fe,
        children: A.Localize(`#DiscountsAndEvents_LoadError`),
      }),
    ],
  });
}
function He(e) {
  let { bHideTitle: t, children: n } = e;
  return (0, L.jsxs)(`div`, {
    className: (0, B.default)(K, t && `lwTekD10gdM-`),
    children: [
      (0, L.jsx)(`div`, {
        className: (0, B.default)(q, t && `mMcECT5lSy0-`),
        id: `discounts_and_events_title`,
        role: `heading`,
        "aria-level": 2,
        children: A.Localize(`#DiscountsAndEvents_Title`),
      }),
      n,
    ],
  });
}
function Ue(e) {
  let { url: t, label: n, location: r, bShine: i = !1 } = e;
  return (0, L.jsx)(`div`, {
    className: (0, B.default)(J, r == `mobile` ? le : Y),
    children: (0, L.jsx)(`a`, {
      href: t,
      className: (0, B.default)(de, i && `TP90UHYnpbo-`),
      children: n,
    }),
  });
}
function We(e) {
  let { column: t, depth: n, bReactHover: r } = e,
    i = t.items[0]?.style === `full`;
  return (0, L.jsx)(k, {
    className: (0, B.default)(me, i && `C4YUDj4Nzy4-`),
    "flow-children": `column`,
    navEntryPreferPosition: S.MAINTAIN_Y,
    children: t.items.map((e) =>
      (0, L.jsx)(Ke, { item: e, depth: n, bReactHover: r }, $(e)),
    ),
  });
}
function Ge(e) {
  let { appid: t, feature: n } = e,
    r = I.useMemo(
      () => ({ appid: t, style: `half`, banner: `none`, feature: n }),
      [t, n],
    );
  return (0, L.jsx)(Ke, { item: r, depth: 1, bReactHover: !1 });
}
function Ke(e) {
  let { item: t, depth: n, bReactHover: r } = e,
    i = t.style === `full`,
    a = I.useMemo(() => (t.appid ? { appid: t.appid } : void 0), [t.appid]),
    o = !!t.url,
    l = t.alt !== void 0,
    u = !!t.image,
    d = !!t.price || !!t.is_free || !!t.discount_text,
    m = !o || !l || !d,
    h = !u,
    _ = !d,
    { data: v } = te(m ? a : void 0),
    { data: y } = se(h ? a : void 0),
    { data: b } = T(_ ? a : void 0),
    { data: x } = C(),
    S = x?.preferences?.disable_microtrailers,
    [E, D] = I.useState(!1),
    [O, A] = I.useState(!1),
    [j, M] = I.useState(!1),
    N = p(a),
    F = !!a && !t.sale_page && !S,
    R = F && (E || O || j),
    z = ze(t),
    V = P(t.url, z, n),
    H = ne(z, n),
    U = ee(v, z, n),
    W = t.image || (i ? w(y, `hero_capsule`, `header`) : w(y, `header`)),
    G = Re(t),
    K = t.alt ?? v?.name ?? ``;
  if (a && ((!o && v === null) || (!u && y === null))) return null;
  let q = (0, L.jsxs)(L.Fragment, {
      children: [
        (0, L.jsxs)(`div`, {
          className: ye,
          children: [
            W &&
              (0, L.jsx)(`img`, { className: `auc77O9GIek-`, src: W, alt: K }),
            F &&
              (0, L.jsx)(c, {
                id: a,
                active: R,
                bIsHoverMode: !0,
                eGrowOnActivate: i ? f.k_ETrailerGrowAmount_Implicit : void 0,
              }),
            G &&
              (0, L.jsx)(`div`, {
                className: (0, B.default)(`jxYpM-g5fRs-`, De(Oe(t.banner))),
                children: G,
              }),
          ],
        }),
        (0, L.jsx)(`div`, {
          className: be,
          children: (0, L.jsx)(qe, {
            item: t,
            storeItem: v,
            purchaseOption: b,
          }),
        }),
      ],
    }),
    J;
  if (V) {
    let e = (0, L.jsx)(ie, { href: V, className: Se, children: q });
    J = a
      ? (0, L.jsx)(re, { appID: a.appid, feature: z, depth: n, children: e })
      : e;
  } else
    J = (0, L.jsx)(oe, {
      storeItem: v,
      feature: z,
      depth: n,
      className: Se,
      children: q,
    });
  let Y = (0, L.jsxs)(k, {
    className: (0, B.default)(
      _e,
      i ? ve : xe,
      t.banner === `daily_deal` && void 0,
      G && `i6bxdYcZVss-`,
      R && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => A(!0),
    onGamepadBlur: () => A(!1),
    ...N,
    onOKActionDescription: N.onOptionsButton ? null : void 0,
    children: [
      a
        ? r
          ? (0, L.jsx)(s, {
              id: a,
              className: X,
              strChildLinkURL: V ?? U,
              children: J,
            })
          : (0, L.jsx)(g, {
              id: a,
              hoverClassName: X,
              fnHoverState: D,
              disableScreenshots: !0,
              children: J,
            })
        : (0, L.jsx)(`div`, { className: X, children: J }),
      a &&
        !t.sale_page &&
        (0, L.jsx)(ce, { appid: a.appid, snr: H, onActiveChange: M }),
    ],
  });
  return a ? (0, L.jsx)(ae, { itemid: a, children: Y }) : Y;
}
function qe(e) {
  let { item: t, storeItem: n, purchaseOption: r } = e;
  if (t.discount_text)
    return (0, L.jsx)(`div`, { className: Ce, children: t.discount_text });
  let i = t.price ?? r;
  return i
    ? (0, L.jsx)(j, { purchaseOption: i, size: `inline`, legacyStyle: !0 })
    : t.is_free || n?.is_free
      ? (0, L.jsx)(`div`, {
          className: we,
          children: A.Localize(`#Price_Free`),
        })
      : null;
}
var Je = 2e4,
  Ye = 3e5;
function Xe(e, t, n, r, a = {}) {
  return i(Ze(e, t, n, r, a));
}
function Ze(e, t, n, r, i = {}) {
  let a = new URLSearchParams(r);
  n && a.set(`t`, n);
  let o = `${F.STORE_BASE_URL}default/discounts_and_events_data/`,
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
          signal: AbortSignal.timeout(Je),
        });
        if (!e.ok) throw Error(`discounts_and_events_data failed: ${e.status}`);
        let t = await e.json();
        return { items: Array.isArray(t.items) ? t.items : [] };
      },
      staleTime: Ye,
      ...i,
    }
  );
}
var Qe = 3,
  $e = Qe,
  et = 6,
  tt = Date.UTC(2026, 10, 26, 18),
  nt = Date.UTC(2026, 10, 30, 18);
function rt(e) {
  let t = (e && Date.parse(e)) || Date.now();
  return t >= tt && t < nt ? `blackfriday` : void 0;
}
function it(e) {
  return e.type === `game`
    ? (0, L.jsx)(Ge, { appid: e.id, feature: `home-sale-crosspromo` })
    : void 0;
}
function at(e, t) {
  let n = new Set(),
    r = [];
  for (let i of e) {
    if (r.length >= et) break;
    let e = (i.capsules ?? []).filter((e) => !n.has(e.id) && !t(e.id));
    if (e.length >= $e) {
      let t = e.slice(0, Qe);
      (t.forEach((e) => n.add(e.id)), r.push({ ...i, capsules: t }));
    }
  }
  return r;
}
function ot(e) {
  let {
      initialData: t,
      initialDataUpdatedAt: n,
      previewTime: r,
      switches: i,
      crossPromoSales: a,
      crossPromoValveOnly: o,
    } = e,
    s = Xe(t, n, r, i),
    [c, l] = O(),
    u = !!i?.as_anon && i.as_anon !== `0`,
    d = !!i?.accountid && i.accountid !== `0`,
    f = u || d,
    p = I.useMemo(
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
    m = I.useMemo(() => {
      if (!a?.length || !p || c) return [];
      let e = new Set(p.map((e) => e.appid));
      return at(
        a,
        (t) => e.has(t) || (!f && (l.BIsGameOwned(t) || l.BIsGameIgnored(t))),
      );
    }, [a, p, c, f, l]).map((e) =>
      (0, L.jsx)(
        N,
        {
          feature: `home-sale-crosspromo`,
          children: (0, L.jsx)(_, {
            value: it,
            children: (0, L.jsx)(y, {
              value: !0,
              children: (0, L.jsx)(v, {
                value: !0,
                children: (0, L.jsx)(R, { sale: e, bValveOnly: o }),
              }),
            }),
          }),
        },
        e.event_gid ?? `creator_${e.creator_clan_account_id}`,
      ),
    );
  return (0, L.jsx)(Be, {
    rgItems: p,
    bLoadError: s.isError,
    bFrontPage: !0,
    strTheme: rt(r),
    rgPageFooters: m,
    bHasFooterActionLegend: !0,
  });
}
function st(e) {
  return (0, L.jsx)(h, {
    placeholderHeight: Fe,
    rootMargin: `100% 0px 100% 0px`,
    children: (0, L.jsx)(ot, { ...e }),
  });
}
export { st as default };
