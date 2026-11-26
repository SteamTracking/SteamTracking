/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, M as n, dt as r, ot as i } from "./chunk~01cfc309bf.js";
import { r as a, t as o } from "./chunk~f3699411bf.js";
import { fr as s } from "./chunk~6b8ddcaac8.js";
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
  Tt as k,
  Vc as A,
  Wv as j,
  ad as ee,
  b as M,
  c as te,
  en as ne,
  ex as re,
  gl as ie,
  gt as N,
  id as ae,
  rx as P,
  u as oe,
  wt as se,
  zv as ce,
} from "./main.js";
import { t as le } from "./chunk~6417efccc1.js";
var F = e(t(), 1),
  I = r();
function L(e) {
  let { sale: t, bValveOnly: n, bLoadNow: r } = e,
    { event: i, section: o } = F.useMemo(() => R(t, !!n), [t, n]);
  return (0, I.jsx)(a, {
    event: i,
    section: o,
    language: x(P.LANGUAGE),
    bLoadNow: r,
  });
}
function R(e, t) {
  let n = {
      ...o([e], `event_capsule`),
      hide_owned_items: !0,
      test_show_on_valve_ip_only: t,
    },
    r = e.clan_account_id || e.creator_clan_account_id || 0,
    i = b(r, 1, `crosspromote`, Math.floor(Date.now() / 1e3));
  return ((i.jsondata.sale_sections = [n]), { event: i, section: n });
}
var z = e(n(), 1),
  B = `911px`,
  V = `700px`,
  H = `12px`,
  U = `IvpvUTAlgCY-`,
  W = `Ew9l-x2T9c0-`,
  G = `tW10-at9cMc-`,
  ue = `txCSzBxQT1Q-`,
  K = `_9wiEHoTVAzs-`,
  q = `vVq04EOZM2Y-`,
  J = `oVUMaC22Mz0-`,
  de = `_3eoksPgeP-E-`,
  fe = `znS2DqGQQHM-`,
  pe = `_3VC9z5N0wHE-`,
  me = `F6Wso3e7oqk-`,
  he = `h8E3fLYHMcw-`,
  ge = `C3aRBmfT1yQ-`,
  _e = `_5w6AlYMyKXw-`,
  ve = `I5xcEcLqHQE-`,
  ye = `OahpVA-2mkI-`,
  be = `nL4oSzmS8Ds-`,
  xe = `cV6I71ujCms-`,
  Se = `VqHCjCKSpdg-`,
  Y = `Wv-2-GahLGE-`,
  Ce = `-qUG2JW7G8E-`,
  we = `TSCZ-XXe31E-`,
  Te = `NCC9qjeD1o8-`,
  Ee = `baOqlTJHsx8-`,
  De = {
    deal: `_3bi1SSQ1KQg-`,
    new: `_1wXSD0PiGyA-`,
    popular: `OthFRkqj-40-`,
    quality: `AQj-ehWmZNY-`,
    urgent: `YaIHfPAnyiE-`,
  };
function Oe(e) {
  return (0, z.default)(Ee, De[e]);
}
function ke(e) {
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
var X = 3,
  Ae = 6,
  je = 2,
  Me = 1,
  Ne = 3,
  Pe = 2,
  Fe = parseInt(B),
  Ie = parseInt(V),
  Le = parseInt(H),
  Z = `DiscountsAndEventsReady`;
function Q(e) {
  return e.appid ? `app_${e.appid}` : `url_${e.url ?? ``}`;
}
function Re(e, t, n, r, i) {
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
function ze(e) {
  switch (e.banner) {
    case `weekend_deal`:
      return M.Localize(`#DiscountsAndEvents_Banner_WeekendDeal`);
    case `midweek_deal`:
      return M.Localize(`#DiscountsAndEvents_Banner_MidweekDeal`);
    case `daily_deal`:
      return M.Localize(`#DiscountsAndEvents_Banner_DailyDeal`);
    case `largest_discount`:
      return M.Localize(`#DiscountsAndEvents_Banner_LargestDiscount`);
    case `wishlist`:
      return M.Localize(`#DiscountsAndEvents_Banner_Wishlist`);
    case `first_time_on_sale`:
      return M.Localize(`#DiscountsAndEvents_Banner_FirstTimeOnSale`);
    case `ending_soon`:
      return M.Localize(`#DiscountsAndEvents_Banner_EndingSoon`);
    case `newly_on_sale`:
      return M.Localize(`#DiscountsAndEvents_Banner_NewlyOnSale`);
    case `well_reviewed`:
      return M.Localize(`#DiscountsAndEvents_Banner_WellReviewed`);
    case `top_seller`:
      return M.Localize(`#DiscountsAndEvents_Banner_TopSeller`);
    case `hot_deal`:
      return M.Localize(`#DiscountsAndEvents_Banner_HotDeal`);
    case `deep_discount`:
      return M.Localize(`#DiscountsAndEvents_Banner_DeepDiscount`);
    case `popular_in_region`:
      return M.Localize(`#DiscountsAndEvents_Banner_PopularInRegion`);
    case `just_updated`:
      return M.Localize(`#DiscountsAndEvents_Banner_JustUpdated`);
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
function Be(e) {
  return e.feature
    ? e.feature
    : e.style === `full`
      ? `spotlight`
      : e.banner === `daily_deal`
        ? `daily-deal`
        : `spotlight-specials`;
}
function Ve(e) {
  let {
      rgItems: t,
      bLoadError: n = !1,
      bHideTitle: r = !1,
      bReactHover: i = !1,
      bFrontPage: a = !1,
      strTheme: o,
      rgPageFooters: s = [],
      bHasFooterActionLegend: c = !1,
      onNavIntent: f,
    } = e,
    p = l(Fe),
    h = re(),
    g = p && !h,
    _ = P.EREALM == E.k_ESteamRealmChina,
    v = a && !_,
    y = M.Localize(
      v
        ? `#DiscountsAndEvents_ExploreSpecialsPage`
        : `#DiscountsAndEvents_SeeMore`,
    ),
    b =
      e.strSeeMoreURL === null
        ? void 0
        : (e.strSeeMoreURL ?? `${P.STORE_BASE_URL}specials`),
    x = ae(b),
    { bShowSeeMoreHint: C, panelProps: w } = d(x, `X`),
    { rgPages: T, rgColumns: O } = F.useMemo(() => {
      let e = a && _,
        n = Re(t ?? [], X, e ? Ne : je, Pe, e ? Me : Ae);
      return (
        a && n.length > 1 && n[n.length - 1].length < X && (n = n.slice(0, -1)),
        { rgPages: n, rgColumns: n.flat() }
      );
    }, [t, a, _]);
  if (!t && n) return (0, I.jsx)(He, { bHideTitle: r });
  if (!t) return (0, I.jsx)(`div`, { className: (0, z.default)(U, W, Z) });
  let k = s[0] ? (0, I.jsx)(`div`, { className: de, children: s[0] }) : null;
  if (!O.length) return k;
  let j = (0, I.jsx)(m, {
    visibleElements: 1,
    disableEdgeWrap: !1,
    hideArrows: !1,
    hidePips: h,
    screenIsWide: p,
    bForceSimpleCarousel: h,
    gap: Le,
    className: (0, z.default)(me, !g && `tvKN6VPvEYo-`),
    onNavIntent: g ? f : void 0,
    children: g
      ? T.map((e, t) =>
          (0, I.jsxs)(
            `div`,
            {
              className: ge,
              children: [
                (0, I.jsx)(A, {
                  className: _e,
                  "flow-children": `row`,
                  role: `list`,
                  "aria-labelledby": `discounts_and_events_title`,
                  children: e.map((e) =>
                    (0, I.jsx)(
                      Ge,
                      { column: e, depth: t + 1, bReactHover: i },
                      e.key,
                    ),
                  ),
                }),
                s.length > 0 &&
                  (0, I.jsx)(`div`, {
                    className: `_3eoksPgeP-E-`,
                    children: s[t % s.length],
                  }),
              ],
            },
            e[0].key,
          ),
        )
      : O.map((e, t) =>
          (0, I.jsx)(
            Ge,
            { column: e, depth: Math.floor(t / X) + 1, bReactHover: i },
            e.key,
          ),
        ),
  });
  return (0, I.jsxs)(I.Fragment, {
    children: [
      (0, I.jsxs)(A, {
        className: (0, z.default)(
          U,
          Z,
          v && `P-5zAQV9Nrw-`,
          v && o === `blackfriday` && `D7k0v382WJU-`,
        ),
        navEntryPreferPosition: S.PREFERRED_CHILD,
        ...w,
        onSecondaryActionDescription: x
          ? D.Localize(`#Sale_SectionLink_BrowseAll`)
          : void 0,
        children: [
          (0, I.jsxs)(Ue, {
            bHideTitle: r,
            children: [
              !h &&
                x &&
                (0, I.jsx)(We, {
                  url: x,
                  label: y,
                  location: `desktop`,
                  bShine: v,
                }),
              h && !c && (0, I.jsx)(u, { label: y, shown: C, button: `X` }),
            ],
          }),
          j,
          !g && !h && k,
          !h &&
            x &&
            (0, I.jsx)(We, { url: x, label: y, location: `mobile`, bShine: v }),
        ],
      }),
      h && k,
    ],
  });
}
function He(e) {
  return (0, I.jsxs)(`div`, {
    className: (0, z.default)(U, Z),
    children: [
      (0, I.jsx)(Ue, { bHideTitle: e.bHideTitle }),
      (0, I.jsx)(`div`, {
        className: pe,
        children: M.Localize(`#DiscountsAndEvents_LoadError`),
      }),
    ],
  });
}
function Ue(e) {
  let { bHideTitle: t, children: n } = e;
  return (0, I.jsxs)(`div`, {
    className: (0, z.default)(G, t && `lwTekD10gdM-`),
    children: [
      (0, I.jsx)(`div`, {
        className: (0, z.default)(ue, t && `mMcECT5lSy0-`),
        id: `discounts_and_events_title`,
        role: `heading`,
        "aria-level": 2,
        children: M.Localize(`#DiscountsAndEvents_Title`),
      }),
      n,
    ],
  });
}
function We(e) {
  let { url: t, label: n, location: r, bShine: i = !1 } = e;
  return (0, I.jsx)(`div`, {
    className: (0, z.default)(K, r == `mobile` ? J : q),
    children: (0, I.jsx)(`a`, {
      href: t,
      className: (0, z.default)(fe, i && `TP90UHYnpbo-`),
      children: n,
    }),
  });
}
function Ge(e) {
  let { column: t, depth: n, bReactHover: r } = e,
    i = t.items[0]?.style === `full`;
  return (0, I.jsx)(A, {
    className: (0, z.default)(he, i && `C4YUDj4Nzy4-`),
    "flow-children": `column`,
    navEntryPreferPosition: S.MAINTAIN_Y,
    children: t.items.map((e) =>
      (0, I.jsx)(qe, { item: e, depth: n, bReactHover: r }, Q(e)),
    ),
  });
}
function Ke(e) {
  let { appid: t, feature: n } = e,
    r = F.useMemo(
      () => ({ appid: t, style: `half`, banner: `none`, feature: n }),
      [t, n],
    );
  return (0, I.jsx)(qe, { item: r, depth: 1, bReactHover: !1 });
}
function qe(e) {
  let { item: t, depth: n, bReactHover: r } = e,
    i = t.style === `full`,
    a = F.useMemo(() => (t.appid ? { appid: t.appid } : void 0), [t.appid]),
    o = !!t.url,
    l = t.alt !== void 0,
    u = !!t.image,
    d = !!t.price || !!t.is_free || !!t.discount_text,
    m = !o || !l || !d,
    h = !u,
    _ = !d,
    { data: v } = j(m ? a : void 0),
    { data: y } = ce(h ? a : void 0),
    { data: b } = T(_ ? a : void 0),
    { data: x } = C(),
    S = x?.preferences?.disable_microtrailers,
    [E, D] = F.useState(!1),
    [O, M] = F.useState(!1),
    [te, re] = F.useState(!1),
    N = p(a),
    P = !!a && !t.sale_page && !S,
    L = P && (E || O || te),
    R = Be(t),
    B = ae(t.url, R, n),
    V = ee(R, n),
    H = k(v, R, n),
    U = t.image || (i ? w(y, `hero_capsule`, `header`) : w(y, `header`)),
    W = i && !!t.image_letterbox,
    G = ze(t),
    ue = t.alt ?? v?.name ?? ``;
  if (a && ((!o && v === null) || (!u && y === null))) return null;
  let K = (0, I.jsxs)(I.Fragment, {
      children: [
        (0, I.jsxs)(`div`, {
          className: be,
          children: [
            U &&
              W &&
              (0, I.jsx)(`div`, {
                className: `_4SKFun4gro0-`,
                style: { backgroundImage: `url(${U})` },
              }),
            U &&
              (0, I.jsx)(`img`, {
                className: (0, z.default)(`auc77O9GIek-`, W && `Xu-5DhWCEgM-`),
                src: U,
                alt: ue,
              }),
            P &&
              (0, I.jsx)(c, {
                id: a,
                active: L,
                bIsHoverMode: !0,
                eGrowOnActivate: i ? f.k_ETrailerGrowAmount_Implicit : void 0,
              }),
            G &&
              (0, I.jsx)(`div`, {
                className: (0, z.default)(`jxYpM-g5fRs-`, Oe(ke(t.banner))),
                children: G,
              }),
          ],
        }),
        (0, I.jsx)(`div`, {
          className: xe,
          children: (0, I.jsx)(Je, {
            item: t,
            storeItem: v,
            purchaseOption: b,
          }),
        }),
      ],
    }),
    q;
  if (B) {
    let e = (0, I.jsx)(ie, { href: B, className: Ce, children: K });
    q = a
      ? (0, I.jsx)(ne, { appID: a.appid, feature: R, depth: n, children: e })
      : e;
  } else
    q = (0, I.jsx)(se, {
      storeItem: v,
      feature: R,
      depth: n,
      className: Ce,
      children: K,
    });
  let J = (0, I.jsxs)(A, {
    className: (0, z.default)(
      ve,
      i ? ye : Se,
      t.banner === `daily_deal` && void 0,
      G && `i6bxdYcZVss-`,
      L && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => M(!0),
    onGamepadBlur: () => M(!1),
    ...N,
    onOKActionDescription: N.onOptionsButton ? null : void 0,
    children: [
      a
        ? r
          ? (0, I.jsx)(s, {
              id: a,
              className: Y,
              strChildLinkURL: B ?? H,
              children: q,
            })
          : (0, I.jsx)(g, {
              id: a,
              hoverClassName: Y,
              fnHoverState: D,
              disableScreenshots: !0,
              children: q,
            })
        : (0, I.jsx)(`div`, { className: Y, children: q }),
      a &&
        !t.sale_page &&
        (0, I.jsx)(le, { appid: a.appid, snr: V, onActiveChange: re }),
    ],
  });
  return a ? (0, I.jsx)(oe, { itemid: a, children: J }) : J;
}
function Je(e) {
  let { item: t, storeItem: n, purchaseOption: r } = e;
  if (t.discount_text)
    return (0, I.jsx)(`div`, { className: we, children: t.discount_text });
  let i = t.price ?? r;
  return i
    ? (0, I.jsx)(te, { purchaseOption: i, size: `inline`, legacyStyle: !0 })
    : t.is_free || n?.is_free
      ? (0, I.jsx)(`div`, {
          className: Te,
          children: M.Localize(`#Price_Free`),
        })
      : null;
}
var Ye = 2e4,
  Xe = 3e5;
function Ze(e, t, n, r, a = {}) {
  return i(Qe(e, t, n, r, a));
}
function Qe(e, t, n, r, i = {}) {
  let a = new URLSearchParams(r);
  n && a.set(`t`, n);
  let o = `${P.STORE_BASE_URL}default/discounts_and_events_data/`,
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
          signal: AbortSignal.timeout(Ye),
        });
        if (!e.ok) throw Error(`discounts_and_events_data failed: ${e.status}`);
        let t = await e.json();
        return { items: Array.isArray(t.items) ? t.items : [] };
      },
      staleTime: Xe,
      ...i,
    }
  );
}
var $e = 3,
  et = $e,
  tt = 6,
  nt = Date.UTC(2026, 10, 26, 18),
  rt = Date.UTC(2026, 10, 30, 18);
function it(e) {
  let t = (e && Date.parse(e)) || Date.now();
  return t >= nt && t < rt ? `blackfriday` : void 0;
}
function at(e) {
  return e.type === `game`
    ? (0, I.jsx)(Ke, { appid: e.id, feature: `home-sale-crosspromo` })
    : void 0;
}
function ot(e, t) {
  let n = new Set(),
    r = [];
  for (let i of e) {
    if (r.length >= tt) break;
    let e = (i.capsules ?? []).filter((e) => !n.has(e.id) && !t(e.id));
    if (e.length >= et) {
      let t = e.slice(0, $e);
      (t.forEach((e) => n.add(e.id)), r.push({ ...i, capsules: t }));
    }
  }
  return r;
}
function $(e) {
  return e.event_gid ?? `creator_${e.creator_clan_account_id}`;
}
function st(e) {
  let [t, n] = F.useState(() => new Set()),
    r = F.useRef(e);
  return (
    (r.current = e),
    [
      t,
      F.useCallback((e) => {
        let t = r.current,
          i = t.length ? t[e % t.length] : void 0;
        if (!i) return;
        let a = $(i);
        n((e) => (e.has(a) ? e : new Set([...e, a])));
      }, []),
    ]
  );
}
function ct(e) {
  let {
      initialData: t,
      initialDataUpdatedAt: n,
      previewTime: r,
      switches: i,
      crossPromoSales: a,
      crossPromoValveOnly: o,
    } = e,
    s = Ze(t, n, r, i),
    [c, l] = O(),
    u = !!i?.as_anon && i.as_anon !== `0`,
    d = !!i?.accountid && i.accountid !== `0`,
    f = u || d,
    p = F.useMemo(
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
    m = F.useMemo(() => {
      if (!a?.length || !p || c) return [];
      let e = new Set(p.map((e) => e.appid));
      return ot(
        a,
        (t) => e.has(t) || (!f && (l.BIsGameOwned(t) || l.BIsGameIgnored(t))),
      );
    }, [a, p, c, f, l]),
    [h, g] = st(m),
    b = m.map((e) =>
      (0, I.jsx)(
        N,
        {
          feature: `home-sale-crosspromo`,
          children: (0, I.jsx)(_, {
            value: at,
            children: (0, I.jsx)(y, {
              value: !0,
              children: (0, I.jsx)(v, {
                value: !0,
                children: (0, I.jsx)(L, {
                  sale: e,
                  bValveOnly: o,
                  bLoadNow: h.has($(e)),
                }),
              }),
            }),
          }),
        },
        $(e),
      ),
    );
  return (0, I.jsx)(Ve, {
    rgItems: p,
    bLoadError: s.isError,
    bFrontPage: !0,
    strTheme: it(r),
    rgPageFooters: b,
    bHasFooterActionLegend: !0,
    onNavIntent: g,
  });
}
function lt(e) {
  return (0, I.jsx)(h, {
    placeholderHeight: Ie,
    rootMargin: `100% 0px 100% 0px`,
    children: (0, I.jsx)(ct, { ...e }),
  });
}
export { lt as default };
