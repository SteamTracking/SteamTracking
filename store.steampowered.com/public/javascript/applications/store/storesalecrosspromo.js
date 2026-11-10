/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  Lt as t,
  bt as n,
  dt as r,
  ft as i,
  lt as a,
  st as o,
} from "./libraries.js";
import { r as s } from "./clanimagemodels.js";
import {
  D as c,
  E as l,
  O as u,
  Q as d,
  T as f,
  Z as p,
  a as m,
  b as h,
  d as ee,
  i as te,
  k as ne,
  l as g,
  n as re,
  o as _,
  r as v,
  rt as y,
  t as b,
  v as ie,
  w as ae,
} from "./linkwidget.js";
import { N as x, T as S } from "./storelink.js";
import "./partnerevent.js";
import { l as C, u as w } from "./salestoreitemutils.js";
import { t as T } from "./saleghostsections.js";
import { d as E } from "./carouselarrows.js";
import { i as oe } from "./partnereventeditorcontext.js";
import { i as D } from "./crosspromotesalelayouts.module.js";
import { n as O, t as k } from "./crosspromotesalelayouts.js";
import { n as A, t as j } from "./fakesalehelper.js";
import {
  Av as M,
  Bb as N,
  Cc as P,
  Cv as F,
  L as I,
  Ub as L,
  Wy as R,
  Yv as z,
  hS as B,
  ht as V,
  ki as H,
  ov as U,
} from "./main.js";
var W = e(t(), 1);
function G(e, t, n) {
  if (!e) return !1;
  let r = !n?.bHasHideIgnoredValue || n.bHideIgnored;
  return (e.ignored && r) ||
    (e.excluded_tagids?.length ?? 0) > 0 ||
    (e.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (n?.bHideOwned && e.already_owned) ||
    (n?.bHideWishlisted && e.on_wishlist)
    ? !0
    : t && !!(e.already_owned || e.demo_for_owned_game);
}
function K(e) {
  return e.map((e) => e.data);
}
function q(e, t, n, r) {
  let i = U(),
    o = e.BUsesContentHubForItemSource(),
    s = !!n?.bHideOwned,
    c = !!n?.bHideWishlisted,
    l = !!n?.bHideIgnored,
    u = !!n?.bHasHideIgnoredValue,
    d = a({
      queries: (t ?? []).map((e) => {
        let t = F(i, C(e));
        return r ? { ...t, enabled: !1 } : t;
      }),
      combine: K,
    });
  return (0, W.useMemo)(() => {
    if (!t) return { capsules: void 0, nHiddenCapsules: 0 };
    let e = {
        bHideOwned: s,
        bHideWishlisted: c,
        bHideIgnored: l,
        bHasHideIgnoredValue: u,
      },
      n = 0;
    return {
      capsules: t.filter((t, r) => {
        let i = d[r];
        return !G(i, o, e) || ((!i?.already_owned || s) && n++, !1);
      }),
      nHiddenCapsules: n,
    };
  }, [t, d, o, s, c, l, u]);
}
function se(e) {
  let { capsules: t } = e,
    n = U();
  return (a({ queries: (t ?? []).map((e) => F(n, C(e))), combine: J }), null);
}
function J() {
  return null;
}
var Y = i(),
  ce = 250;
function le(e) {
  let {
      event: t,
      section: n,
      language: r,
      promotedSale: i,
      promotedSaleEvent: a,
      Frame: o = m,
      nMaxCapsules: s,
    } = e,
    d = N(),
    p = oe(),
    { nMaxCapsulesPerRow: _, bScreenIsWide: y } = E(n.section_type),
    x = u(t, n, !0),
    { capsules: S, nHiddenCapsules: C } = q(t, x, void 0, !0),
    w = s ? S?.slice(0, s) : S,
    D = W.useMemo(() => ie(n, w?.length), [n, w?.length]),
    O = c(t, n),
    k = ne(t, n),
    [A, j] = W.useState(0),
    M = g(D, d);
  if (f(t, n) === `personalized_carousel`) {
    let e = ae(t, n, O);
    if (e === void 0) return (0, Y.jsx)(T, { capsules_per_row: M });
    if (e === null) return null;
  }
  let P;
  if (!w) P = (0, Y.jsx)(T, { capsules_per_row: M });
  else {
    let e = te({
        saleEvent: t,
        section: D,
        capsules: w,
        language: r,
        bInGamepadUI: d,
        nMaxCapsulesPerRow: _,
        bScreenIsWide: y,
        nShowAdditionalRows: A,
      }),
      { content: i, bAdditionalContent: a } = ee(e);
    if (((P = i), !P && !p)) return null;
    P &&
      a &&
      (P = (0, Y.jsxs)(Y.Fragment, {
        children: [
          P,
          (0, Y.jsx)(v, {
            section: D,
            nRowsWithNext: h(D, A) + 1,
            nCapsules: w.length,
            rgRowSizes: M,
            onShowMore: () => j(A + re(n)),
          }),
        ],
      }));
  }
  let { feature: F, depth: I } = b(n, t, k);
  return (0, Y.jsx)(V, {
    feature: F,
    depth: I,
    children: (0, Y.jsxs)(o, {
      event: t,
      section: n,
      language: r,
      bInGamepadUI: d,
      placeholderHeight: ue(D, w?.length ?? 0, M) + `px`,
      nHiddenCapsules: C,
      personalizedCarousels: O,
      promotedSale: i,
      promotedSaleEvent: a,
      children: [
        (0, Y.jsx)(l, { event: t, section: n }),
        (0, Y.jsx)(se, { capsules: x }),
        P,
      ],
    }),
  });
}
function ue(e, t, n) {
  let r = 0;
  if (n.length > 0) for (let e = t; e > 0; r++) e -= n[r % n.length];
  let i = Math.min(r, h(e, 0));
  return Math.max(1, i) * ce;
}
function de(e) {
  let { event: t, section: n, language: r, strHeading: i, children: a } = e;
  return (0, Y.jsxs)(`div`, {
    className: P(S, D),
    children: [
      (0, Y.jsx)(`div`, {
        className: x,
        children: (0, Y.jsx)(y, {
          section: n,
          event: t,
          language: r,
          promotedSale: null,
          title: i || R(`#Sale_CrossPromoSale_EventCapsuleHeading`),
        }),
      }),
      a,
    ],
  });
}
function fe(e, t) {
  return {
    ...j(`crosspromotesalepage`, ``),
    sale_page_cross_promo_sales: e,
    use_random_order: !1,
    show_as_carousel: !0,
    sale_page_cross_promo_layout: t,
    capsules_per_row_array: [4],
    carousel_rows: 1,
  };
}
var pe = `partnereventaction/eventsummary`;
function me(e) {
  let t = new URLSearchParams();
  return (
    t.set(`clan_account_id`, String(e.clanAccountID)),
    t.set(`event_gid`, e.strEventGID),
    t.set(`language`, String(e.eLanguage)),
    t.toString()
  );
}
async function he(e) {
  let t = `${L.STORE_BASE_URL}${pe}?${me(e)}`,
    n = await fetch(t);
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.summary ?? null;
}
function ge(e, t, n) {
  return [`PartnerEventSummary`, e, t, n];
}
function _e(e, t) {
  return {
    queryKey: ge(e.clanAccountID, e.strEventGID, e.eLanguage),
    queryFn: () => he(e),
    select: t,
    staleTime: 6e5,
  };
}
function ve(e) {
  return !e?.clan_accountid || !e.clan_event_gid
    ? null
    : {
        clanAccountID: e.clan_accountid,
        strEventGID: e.clan_event_gid,
        strName: e.event_name ?? ``,
        rtEndTime: e.rtime32_end_time || void 0,
        strSummary: e.summary || void 0,
        strCapsuleURL: ye(e),
        strSaleURL: e.store_path ? L.STORE_BASE_URL + e.store_path : void 0,
      };
}
function ye(e) {
  let t = e.capsule_image?.image;
  if (t && e.clan_accountid)
    return e.capsule_image?.from_body
      ? s.ReplacementTokenToClanImageURL(t)
      : t.startsWith(`http`)
        ? t
        : s.GenerateURLFromHashAndExt(e.clan_accountid, t);
}
var be = `saleaction/storeitemsalecrosspromoitems`;
function xe(e) {
  let { item: t, sale: n, rgExcludeAppIDs: r } = e,
    i = new URLSearchParams();
  return (
    `appid` in t
      ? i.set(`appid`, String(t.appid))
      : `packageid` in t
        ? i.set(`packageid`, String(t.packageid))
        : `bundleid` in t && i.set(`bundleid`, String(t.bundleid)),
    i.set(`clan_account_id`, String(n.clanAccountID)),
    i.set(`event_gid`, n.strEventGID),
    r.length && i.set(`exclude_appids`, r.join(`,`)),
    i.toString()
  );
}
async function Se(e) {
  let t = `${L.STORE_BASE_URL}${be}?${xe(e)}`,
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.rgItems;
}
function X(e) {
  return [`StoreItemSaleCrossPromo`, z(e)];
}
function Z(e, t) {
  return [`StoreItemSaleCrossPromoItems`, z(e), t.strEventGID];
}
function Ce(e) {
  let { data: t } = o({ queryKey: X(e), queryFn: n, staleTime: 1 / 0 });
  return t;
}
function we(e, t, n, r) {
  return o({
    queryKey: Z(e, n),
    queryFn: () => Se({ item: e, sale: n, rgExcludeAppIDs: t.rgExcludeAppIDs }),
    enabled: r,
    staleTime: 1 / 0,
    retry: 1,
  });
}
function Te() {
  let e = r();
  return W.useCallback((t, n, r) => Ee(e, t, n, r), [e]);
}
function Ee(e, t, n, r) {
  for (let { rgItems: r, ...i } of n) r && e.setQueryData(Z(t, i), r);
  let i = {
    rgSales: n.map(({ clanAccountID: e, strEventGID: t }) => ({
      clanAccountID: e,
      strEventGID: t,
    })),
    rgExcludeAppIDs: r,
  };
  e.setQueryData(X(t), i);
}
var Q = p(`event_capsule`) ?? 3,
  De = `250px`;
function Oe(e) {
  let { item: t } = e,
    n = Ce(t),
    { data: r } = M(t),
    i = n?.rgSales.length ?? 0,
    [a, o] = W.useState(!1),
    s = H({
      onEnter: () => {
        o(!0);
      },
    }),
    [c, l] = W.useState(() => new Set([0])),
    u = W.useRef(n);
  u.current = n;
  let d = W.useRef(a);
  d.current = a;
  let f = W.useCallback((e) => {
      let t = u.current?.rgSales[e];
      (`${e}${t?.strEventGID}${t?.clanAccountID}`,
        d.current,
        l((t) => (t.has(e) ? t : new Set([...t, e]))));
    }, []),
    p = W.useMemo(() => n?.rgSales[0] && $(n.rgSales[0], []), [n]);
  if (!n || !i || !p) return null;
  let m = n.rgSales.map((e, r) =>
      (0, Y.jsx)(
        ke,
        {
          item: t,
          crossPromo: n,
          sale: e,
          bShown: c.has(r),
          bLoad: c.has(r) || c.has((r + i - 1) % i),
          bRecordImpression: a,
        },
        e.strEventGID,
      ),
    ),
    h = r?.name
      ? R(`#Sale_CrossPromoSale_EventCapsuleHeading_StoreItem`, r.name)
      : void 0;
  return (0, Y.jsx)(`div`, {
    ref: s,
    children: (0, Y.jsx)(de, {
      event: p.event,
      section: p.section,
      language: B(L.LANGUAGE),
      strHeading: h,
      children:
        i === 1
          ? m[0]
          : (0, Y.jsx)(_, {
              event: p.event,
              section: p.section,
              rgSlides: m,
              onSlide: f,
            }),
    }),
  });
}
function ke(e) {
  let {
      item: t,
      crossPromo: n,
      sale: r,
      bShown: i,
      bLoad: a,
      bRecordImpression: s,
    } = e,
    c = B(L.LANGUAGE),
    l = o({
      ..._e(
        {
          clanAccountID: r.clanAccountID,
          strEventGID: r.strEventGID,
          eLanguage: c,
        },
        ve,
      ),
      enabled: a,
    }),
    u = we(t, n, r, a),
    d = l.data,
    f = u.data,
    p = I();
  W.useEffect(() => {
    s &&
      i &&
      d &&
      (`${r.strEventGID}`, p.MarkEventShown(d.strEventGID, d.clanAccountID, 3));
  }, [s, i, d, r, p]);
  let { event: m, section: h } = W.useMemo(() => $(r, f ?? []), [r, f]);
  return !i || !d || !f?.length
    ? (0, Y.jsx)(Ae, { event: m, section: h })
    : (0, Y.jsx)(le, {
        event: m,
        section: h,
        language: c,
        promotedSaleEvent: d,
        Frame: k,
        nMaxCapsules: Q,
      });
}
function Ae(e) {
  let { event: t, section: n } = e,
    r = N();
  return (0, Y.jsx)(O, {
    event: t,
    section: n,
    language: B(L.LANGUAGE),
    bInGamepadUI: r,
    placeholderHeight: De,
    children: (0, Y.jsx)(je, {}),
  });
}
function je() {
  return (0, Y.jsx)(T, { capsules_per_row: [Q] });
}
function $(e, t) {
  let n = t.flatMap((e) => {
      let t = w(e);
      return t ? [t] : [];
    }),
    r = A(e.clanAccountID, 1, `crosspromote`, Math.floor(Date.now() / 1e3)),
    i = fe(
      [
        {
          clan_account_id: e.clanAccountID,
          event_gid: e.strEventGID,
          capsules: n,
        },
      ],
      `event_capsule`,
    ),
    a = {
      ...d(i)[0],
      capsules_per_row_array: [Q],
      show_as_carousel: !0,
      carousel_rows: 1,
    };
  return ((r.jsondata.sale_sections = [a]), { event: r, section: a });
}
var Me = `_7J8FxbBVGEM-`;
function Ne(e) {
  let { item: t, rgSales: n, rgExcludeAppIDs: r } = e,
    [i, a] = W.useState(!1),
    o = Te();
  return (
    W.useEffect(() => {
      (o(t, n, r), a(!0));
    }, [t, n, r, o]),
    i
      ? (0, Y.jsx)(V, {
          feature: `sale-crosspromo`,
          children: (0, Y.jsx)(`div`, {
            className: Me,
            children: (0, Y.jsx)(Oe, { item: t }),
          }),
        })
      : null
  );
}
export { Ne as default };
