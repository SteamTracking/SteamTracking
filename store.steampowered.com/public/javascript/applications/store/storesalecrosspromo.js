/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  It as t,
  dt as n,
  ot as r,
  ut as i,
  yt as a,
} from "./chunk~01cfc309bf.js";
import {
  a as o,
  i as s,
  n as c,
  o as l,
  s as u,
  t as d,
} from "./chunk~f3699411bf.js";
import { Q as f, lr as p, tt as m } from "./chunk~6b8ddcaac8.js";
import { r as h } from "./chunk~f4c928a27a.js";
import { t as g } from "./chunk~710e3cfd2f.js";
import { r as _, t as v } from "./chunk~b8ca037aae.js";
import { g as y, i as b, o as x } from "./chunk~3720b337f3.js";
import { n as S } from "./chunk~379edc388d.js";
import {
  AS as C,
  L as w,
  Wv as T,
  bv as E,
  ex as D,
  fl as O,
  gt as k,
  ib as A,
  ly as j,
  rx as M,
} from "./main.js";
var N = `saleaction/storeitemsalecrosspromoitems`;
function P(e) {
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
async function F(e) {
  let t = `${M.STORE_BASE_URL}${N}?${P(e)}`,
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r?.success !== 1) throw Error(`${t} answered EResult ${r?.success}`);
  return r.rgItems;
}
var I = e(t(), 1);
function L(e) {
  return [`StoreItemSaleCrossPromo`, j(e)];
}
function R(e, t) {
  return [`StoreItemSaleCrossPromoItems`, j(e), t.strEventGID];
}
function z(e) {
  let { data: t } = r({ queryKey: L(e), queryFn: a, staleTime: 1 / 0 });
  return t;
}
function B(e, t, n, i) {
  return r({
    queryKey: R(e, n),
    queryFn: () => F({ item: e, sale: n, rgExcludeAppIDs: t.rgExcludeAppIDs }),
    enabled: i,
    staleTime: 1 / 0,
    retry: 1,
  });
}
function V() {
  let e = i();
  return I.useCallback((t, n, r) => H(e, t, n, r), [e]);
}
function H(e, t, n, r) {
  for (let { rgItems: r, ...i } of n) r && e.setQueryData(R(t, i), r);
  let i = {
    rgSales: n.map(({ clanAccountID: e, strEventGID: t }) => ({
      clanAccountID: e,
      strEventGID: t,
    })),
    rgExcludeAppIDs: r,
  };
  e.setQueryData(L(t), i);
}
var U = n(),
  W = f(`event_capsule`),
  G = `250px`;
function K(e, t, n, r) {
  return n.has(e) || n.has((e + t - 1) % t) || r.has(e);
}
function q(e) {
  let { item: t } = e,
    n = z(t),
    { data: r } = T(t),
    i = n?.rgSales.length ?? 0,
    [a, o] = I.useState(!1),
    s = O({
      onEnter: () => {
        o(!0);
      },
    }),
    [l, u] = I.useState(() => new Set([0])),
    d = I.useRef(n);
  d.current = n;
  let f = I.useRef(a);
  f.current = a;
  let p = I.useCallback((e) => {
      let t = d.current?.rgSales[e];
      (`${e}${t?.strEventGID}${t?.clanAccountID}`,
        f.current,
        u((t) => (t.has(e) ? t : new Set([...t, e]))));
    }, []),
    [m, h] = I.useState(() => new Set()),
    _ = I.useRef(l);
  _.current = l;
  let y = I.useRef(m);
  y.current = m;
  let b = I.useCallback((e, t) => {
      let n = d.current?.rgSales.length ?? 0;
      if (!n) return;
      let r = (e) => K(e, n, _.current, y.current),
        i = e;
      if ((r(i) && (i = (e + (t === `next` ? 1 : n - 1)) % n), r(i))) return;
      `${t}${e}${i}${d.current?.rgSales[i]?.strEventGID}`;
      let a = new Set([...y.current, i]);
      ((y.current = a), h(a));
    }, []),
    x = I.useMemo(() => n?.rgSales[0] && Z(n.rgSales[0], []), [n]);
  if (!n || !i || !x) return null;
  let S = n.rgSales.map((e, r) =>
      (0, U.jsx)(
        J,
        {
          item: t,
          crossPromo: n,
          sale: e,
          bShown: l.has(r),
          bLoad: K(r, i, l, m),
          bPreloadImages: a,
          bRecordImpression: a,
        },
        e.strEventGID,
      ),
    ),
    w = r?.name
      ? A(`#Sale_CrossPromoSale_EventCapsuleHeading_StoreItem`, r.name)
      : void 0;
  return (0, U.jsx)(`div`, {
    ref: s,
    children: (0, U.jsx)(g, {
      enabled: !a,
      children: (0, U.jsx)(c, {
        event: x.event,
        section: x.section,
        language: C(M.LANGUAGE),
        strHeading: w,
        children:
          i === 1
            ? S[0]
            : (0, U.jsx)(v, {
                event: x.event,
                section: x.section,
                rgSlides: S,
                onSlide: p,
                onNavIntent: b,
              }),
      }),
    }),
  });
}
function J(e) {
  let {
      item: t,
      crossPromo: n,
      sale: a,
      bShown: c,
      bLoad: d,
      bPreloadImages: f,
      bRecordImpression: p,
    } = e,
    m = C(M.LANGUAGE),
    h = r({
      ..._(
        {
          clanAccountID: a.clanAccountID,
          strEventGID: a.strEventGID,
          eLanguage: m,
        },
        y,
      ),
      enabled: d,
    }),
    g = B(t, n, a, d),
    v = h.data,
    x = g.data,
    S = w();
  I.useEffect(() => {
    p &&
      c &&
      v &&
      (`${a.strEventGID}`, S.MarkEventShown(v.strEventGID, v.clanAccountID, 3));
  }, [p, c, v, a, S]);
  let { event: T, section: D } = I.useMemo(() => Z(a, x ?? []), [a, x]),
    O = i(),
    k = E();
  I.useEffect(() => {
    d && x?.length && o({ queryClient: O, storeItemLoader: k }, D, Q(x));
  }, [d, x, D, O, k]);
  let A = I.useRef(!1);
  return (
    I.useEffect(() => {
      f &&
        d &&
        !c &&
        v &&
        x?.length &&
        !A.current &&
        ((A.current = !0),
        `${a.strEventGID}`,
        v.strCapsuleURL && u(v.strCapsuleURL, 0),
        l({ queryClient: O, storeItemLoader: k }, T, D, Q(x), W));
    }, [f, d, c, v, x, a, T, D, O, k]),
    !c || !v || !x?.length
      ? (0, U.jsx)(Y, { event: T, section: D })
      : (0, U.jsx)(s, {
          event: T,
          section: D,
          language: m,
          promotedSaleEvent: v,
          Frame: b,
          nMaxCapsules: W,
        })
  );
}
function Y(e) {
  let { event: t, section: n } = e,
    r = D();
  return (0, U.jsx)(x, {
    event: t,
    section: n,
    language: C(M.LANGUAGE),
    bInGamepadUI: r,
    placeholderHeight: G,
    children: (0, U.jsx)(X, {}),
  });
}
function X() {
  return (0, U.jsx)(h, { capsules_per_row: [W] });
}
function Z(e, t) {
  let n = Q(t),
    r = S(e.clanAccountID, 1, `crosspromote`, Math.floor(Date.now() / 1e3)),
    i = d(
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
      ...m(i)[0],
      capsules_per_row_array: [W],
      show_as_carousel: !0,
      carousel_rows: 1,
    };
  return ((r.jsondata.sale_sections = [a]), { event: r, section: a });
}
function Q(e) {
  return e.flatMap((e) => {
    let t = p(e);
    return t ? [t] : [];
  });
}
var $ = `_7J8FxbBVGEM-`;
function ee(e) {
  let { item: t, rgSales: n, rgExcludeAppIDs: r } = e,
    [i, a] = I.useState(!1),
    o = V();
  return (
    I.useEffect(() => {
      (o(t, n, r), a(!0));
    }, [t, n, r, o]),
    i
      ? (0, U.jsx)(k, {
          feature: `sale-crosspromo`,
          children: (0, U.jsx)(`div`, {
            className: $,
            children: (0, U.jsx)(q, { item: t }),
          }),
        })
      : null
  );
}
export { ee as default };
