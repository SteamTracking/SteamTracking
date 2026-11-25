/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  It as t,
  M as n,
  at as r,
  dt as i,
  ot as a,
  ut as o,
} from "./chunk~01cfc309bf.js";
import { N as s } from "./chunk~f57d770d64.js";
import {
  $v as c,
  Ad as l,
  Il as u,
  La as d,
  Lc as f,
  Sd as p,
  Wv as m,
  bx as h,
  cx as g,
  ei as _,
  en as ee,
  ht as te,
  in as ne,
  ou as v,
  ox as y,
  rx as b,
  uu as x,
  vx as S,
  xd as C,
  yy as w,
} from "./main.js";
var T = e(t(), 1);
function E(e) {
  let { data: t } = m(e);
  return (0, T.useMemo)(
    () => (t ? (t.item_type == 0 ? [t.appid] : t.included_appids || []) : []),
    [t],
  );
}
function D(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
function O(e) {
  let { data: t } = m({ appid: e });
  return t?.appid || e;
}
function re(e) {
  let { data: t } = m(e);
  return (0, T.useMemo)(() => {
    if (t && t.related_items && t.related_items.parent_appid)
      return { appid: t.related_items.parent_appid };
  }, [t]);
}
function ie(e) {
  return (0, T.useMemo)(() => (e ? { appid: e } : void 0), [e]);
}
function ae(e) {
  return (0, T.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
}
async function k(e, t) {
  let n = C(S.STORE_BASE_URL, t, h.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function oe(e, t, n) {
  return (await k(e, t)).includes(n);
}
function A() {
  let e = w(),
    t = y.accountid;
  return a(j(e, t));
}
function j(e, t) {
  return {
    queryKey: P(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await k(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function se(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await oe(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function M(e) {
  let t = w(),
    n = y.accountid,
    { data: r } = a(se(t, n, e));
  return r === void 0 ? void 0 : r;
}
function N(e) {
  let t = o(),
    n = y.accountid;
  return T.useCallback(
    (r) => {
      t.setQueryData(P(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function P(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function F(e) {
  let { data: t } = m(e && `appid` in e ? void 0 : e),
    { data: n } = A(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
var I = e(n(), 1),
  L = `GL0tHV4bOk8-`,
  R = `LPcYz6LIoNo-`,
  z = `IPcip0GPG-I-`,
  B = `GCeo-xmfx1A-`,
  V = i(),
  H = 6,
  U = 1e3,
  W = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function G(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = m(t),
    o = T.useRef(0),
    s = T.useRef(null);
  T.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    u = l(t),
    d = n && !u ? t : void 0,
    f = x(d),
    p = x(d, !0);
  if ((r && b.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (u) return (0, V.jsx)(q, { id: t });
  if (!f) return null;
  let h = f.filter(K);
  if (h.length === 0)
    return p?.some(K)
      ? (0, V.jsx)(q, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, V.jsx)(G, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let g;
  switch (i) {
    case 1:
      g = R;
      break;
    case 2:
      g = z;
  }
  let _ = h[0];
  return (0, V.jsx)(`video`, {
    className: (0, I.default)(L, g),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, V.jsx)(J, { trailer: _ }),
  });
}
function K(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function q(e) {
  let { id: t } = e,
    { data: n } = c(t),
    [r, i] = T.useState(0),
    a = T.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, H),
      [n],
    );
  return (
    u(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, U),
    a.length == 0
      ? null
      : (0, V.jsx)(`div`, {
          className: L,
          children: a.map((e, t) =>
            (0, V.jsx)(
              `img`,
              {
                className: (0, I.default)(B, t == r && `_8Ek7qtVBxvk-`),
                src: f(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function J(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, V.jsx)(V.Fragment, {
        children: t.microtrailer?.map((e) =>
          b.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, V.jsx)(
                `source`,
                { src: v(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
function ce(e, t, n) {
  let i = ne(),
    a = h.accountid;
  return r({
    mutationKey: [`useUpdateWishlist`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          S.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, g()),
        n && i.append(`snr`, n));
      let a = await fetch(r, {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      if (!a.ok)
        throw Error(
          `Wishlist ${t ? `add` : `remove`} of appid ${e} failed (${a.status})`,
        );
    },
    onMutate: () => {
      e != null && i(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && i(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      p();
    },
  });
}
function le(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function ue(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var de = (e) => {
    let { appid: t } = e,
      n = (0, V.jsx)(`div`, {
        className: `ImpressionTrackedElement`,
        children: e.children,
      });
    return t ? (0, V.jsx)(ee, { appID: t, children: n }) : n;
  },
  Y = T.createContext(!1),
  fe = `100% 0px 100% 0px`,
  pe = `SaleSection_`,
  me = (0, T.createContext)(!1);
function X() {
  return window.innerWidth ?? 1920;
}
function Z() {
  return X() >= 940;
}
function Q() {
  d();
  let [e, t] = (0, T.useState)(() => X());
  return (
    (0, T.useEffect)(() => {
      let e = () => {
        t(X());
      };
      return (
        e(),
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      );
    }, []),
    e
  );
}
function he(e = 940) {
  return Q() >= e;
}
function ge(e) {
  let t = Q(),
    n = t >= ((0, T.useContext)(Y) ? 911 : 940),
    r = s(e);
  return n
    ? { nMaxCapsulesPerRow: r.nMaxItemsPerRow, bScreenIsWide: n }
    : {
        nMaxCapsulesPerRow: Math.min(
          Math.max(Math.floor(t / r.nItemMinimumWidth), 1),
          r.nMaxItemsPerRow,
        ),
        bScreenIsWide: n,
      };
}
function $(e) {
  let t = s(e);
  return Z()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
var _e = `ewL7epZsubk-`,
  ve = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`;
function ye(e, t = `Y`) {
  let [n, r] = T.useState(!1),
    i = T.useCallback((t) => r(t && !!e), [e]),
    a = T.useCallback(
      () => (!e || e.length === 0 ? !1 : ((window.location.href = e), !0)),
      [e],
    );
  return {
    bShowSeeMoreHint: n,
    panelProps:
      t == `X`
        ? { onFocusWithin: i, onSecondaryButton: a }
        : { onFocusWithin: i, onOptionsButton: a },
  };
}
function be(e) {
  let { label: t, shown: n, button: r = `Y` } = e;
  return (0, V.jsxs)(`div`, {
    className: (0, I.default)(_e, n && `lDd-amB-eCU-`),
    children: [
      r == `X`
        ? (0, V.jsx)(_, { button: `X`, "aria-label": `X` })
        : (0, V.jsx)(`img`, { src: ve, alt: `Y` }),
      (0, V.jsx)(`div`, { children: t }),
    ],
  });
}
function xe(e, t, n, i = 0) {
  let a = te(),
    o = h.accountid;
  return r({
    mutationKey: [`useUpdateAppIgnore`, e, o, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = S.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, g()),
        a.append(`remove`, t ? `0` : `1`),
        n && a.append(`snr`, n),
        a.append(`ignore_reason`, `` + i));
      let o = await fetch(r, {
        method: `POST`,
        body: a,
        credentials: `include`,
      });
      if (!o.ok)
        throw Error(
          `Ignore App ${t ? `add` : `remove`} of appid ${e} failed (${o.status})`,
        );
    },
    onMutate: () => {
      e != null && a(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && a(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      p();
    },
  });
}
export {
  ae as A,
  A as C,
  O as D,
  re as E,
  E as O,
  F as S,
  D as T,
  G as _,
  me as a,
  j as b,
  pe as c,
  Q as d,
  Y as f,
  ce as g,
  le as h,
  Z as i,
  ie as k,
  he as l,
  ue as m,
  be as n,
  $ as o,
  de as p,
  ye as r,
  fe as s,
  xe as t,
  ge as u,
  W as v,
  N as w,
  M as x,
  J as y,
};
