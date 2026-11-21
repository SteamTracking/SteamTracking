/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, ft as r, ot as i } from "./chunk~01cfc309bf.js";
import { N as a } from "./chunk~f57d770d64.js";
import {
  Fl as o,
  Ia as s,
  Ic as c,
  Qv as l,
  Uv as u,
  _x as d,
  au as f,
  ei as p,
  ht as m,
  in as h,
  kd as g,
  lu as _,
  nx as v,
  sx as y,
  xd as b,
  yx as x,
} from "./main.js";
var S = e(t(), 1),
  C = e(n(), 1),
  w = `GL0tHV4bOk8-`,
  T = `LPcYz6LIoNo-`,
  E = `IPcip0GPG-I-`,
  D = `GCeo-xmfx1A-`,
  O = r(),
  k = 6,
  A = 1e3,
  j = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function M(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = u(t),
    o = S.useRef(0),
    s = S.useRef(null);
  S.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    l = g(t),
    d = n && !l ? t : void 0,
    f = _(d),
    p = _(d, !0);
  if ((r && v.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (l) return (0, O.jsx)(P, { id: t });
  if (!f) return null;
  let m = f.filter(N);
  if (m.length === 0)
    return p?.some(N)
      ? (0, O.jsx)(P, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, O.jsx)(M, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let h;
  switch (i) {
    case 1:
      h = T;
      break;
    case 2:
      h = E;
  }
  let y = m[0];
  return (0, O.jsx)(`video`, {
    className: (0, C.default)(w, h),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, O.jsx)(F, { trailer: y }),
  });
}
function N(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function P(e) {
  let { id: t } = e,
    { data: n } = l(t),
    [r, i] = S.useState(0),
    a = S.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, k),
      [n],
    );
  return (
    o(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, A),
    a.length == 0
      ? null
      : (0, O.jsx)(`div`, {
          className: w,
          children: a.map((e, t) =>
            (0, O.jsx)(
              `img`,
              {
                className: (0, C.default)(D, t == r && `_8Ek7qtVBxvk-`),
                src: c(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function F(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, O.jsx)(O.Fragment, {
        children: t.microtrailer?.map((e) =>
          v.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, O.jsx)(
                `source`,
                { src: f(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
function I(e, t, n) {
  let r = h(),
    a = x.accountid;
  return i({
    mutationKey: [`useUpdateWishlist`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          d.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, y()),
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
      e != null && r(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && r(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      b();
    },
  });
}
var L = S.createContext(!1),
  R = `100% 0px 100% 0px`,
  z = `SaleSection_`,
  B = (0, S.createContext)(!1);
function V() {
  return window.innerWidth ?? 1920;
}
function H() {
  return V() >= 940;
}
function U() {
  s();
  let [e, t] = (0, S.useState)(() => V());
  return (
    (0, S.useEffect)(() => {
      let e = () => {
        t(V());
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
function W(e = 940) {
  return U() >= e;
}
function G(e) {
  let t = U(),
    n = t >= ((0, S.useContext)(L) ? 911 : 940),
    r = a(e);
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
function K(e) {
  let t = a(e);
  return H()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
var q = `ewL7epZsubk-`,
  J = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`;
function Y(e, t = `Y`) {
  let [n, r] = S.useState(!1),
    i = S.useCallback((t) => r(t && !!e), [e]),
    a = S.useCallback(
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
function X(e) {
  let { label: t, shown: n, button: r = `Y` } = e;
  return (0, O.jsxs)(`div`, {
    className: (0, C.default)(q, n && `lDd-amB-eCU-`),
    children: [
      r == `X`
        ? (0, O.jsx)(p, { button: `X`, "aria-label": `X` })
        : (0, O.jsx)(`img`, { src: J, alt: `Y` }),
      (0, O.jsx)(`div`, { children: t }),
    ],
  });
}
function Z(e, t, n, r = 0) {
  let a = m(),
    o = x.accountid;
  return i({
    mutationKey: [`useUpdateAppIgnore`, e, o, t],
    mutationFn: async () => {
      if (e == null) return;
      let i = d.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, y()),
        a.append(`remove`, t ? `0` : `1`),
        n && a.append(`snr`, n),
        a.append(`ignore_reason`, `` + r));
      let o = await fetch(i, {
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
      b();
    },
  });
}
export {
  B as a,
  z as c,
  U as d,
  L as f,
  F as g,
  j as h,
  H as i,
  W as l,
  M as m,
  X as n,
  K as o,
  I as p,
  Y as r,
  R as s,
  Z as t,
  G as u,
};
