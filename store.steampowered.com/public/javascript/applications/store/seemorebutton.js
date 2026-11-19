/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, ft as r } from "./chunk~01cfc309bf.js";
import { N as i } from "./chunk~f57d770d64.js";
import {
  Da as a,
  Dc as o,
  El as s,
  Kr as c,
  Pv as l,
  Uv as u,
  Xl as d,
  bd as f,
  eu as p,
  qb as m,
} from "./main.js";
var h = e(t(), 1),
  g = e(n(), 1),
  _ = `GL0tHV4bOk8-`,
  v = `LPcYz6LIoNo-`,
  y = `IPcip0GPG-I-`,
  b = `GCeo-xmfx1A-`,
  x = r(),
  S = 6,
  C = 1e3,
  w = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function T(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = l(t),
    o = h.useRef(0),
    s = h.useRef(null);
  h.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    u = f(t),
    d = n && !u ? t : void 0,
    b = p(d),
    S = p(d, !0);
  if ((r && m.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (u) return (0, x.jsx)(D, { id: t });
  if (!b) return null;
  let C = b.filter(E);
  if (C.length === 0)
    return S?.some(E)
      ? (0, x.jsx)(D, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, x.jsx)(T, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let w;
  switch (i) {
    case 1:
      w = v;
      break;
    case 2:
      w = y;
  }
  let k = C[0];
  return (0, x.jsx)(`video`, {
    className: (0, g.default)(_, w),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, x.jsx)(O, { trailer: k }),
  });
}
function E(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function D(e) {
  let { id: t } = e,
    { data: n } = u(t),
    [r, i] = h.useState(0),
    a = h.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, S),
      [n],
    );
  return (
    s(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, C),
    a.length == 0
      ? null
      : (0, x.jsx)(`div`, {
          className: _,
          children: a.map((e, t) =>
            (0, x.jsx)(
              `img`,
              {
                className: (0, g.default)(b, t == r && `_8Ek7qtVBxvk-`),
                src: o(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function O(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, x.jsx)(x.Fragment, {
        children: t.microtrailer?.map((e) =>
          m.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, x.jsx)(
                `source`,
                { src: d(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
var k = h.createContext(!1),
  A = `100% 0px 100% 0px`,
  j = `SaleSection_`,
  M = (0, h.createContext)(!1);
function N() {
  return window.innerWidth ?? 1920;
}
function P() {
  return N() >= 940;
}
function F() {
  a();
  let [e, t] = (0, h.useState)(() => N());
  return (
    (0, h.useEffect)(() => {
      let e = () => {
        t(N());
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
function I(e = 940) {
  return F() >= e;
}
function L(e) {
  let t = F(),
    n = t >= ((0, h.useContext)(k) ? 911 : 940),
    r = i(e);
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
function R(e) {
  let t = i(e);
  return P()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
var z = `ewL7epZsubk-`,
  B = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`;
function V(e, t = `Y`) {
  let [n, r] = h.useState(!1),
    i = h.useCallback((t) => r(t && !!e), [e]),
    a = h.useCallback(() => {
      e && e.length !== 0 && (window.location.href = e);
    }, [e]);
  return {
    bShowSeeMoreHint: n,
    panelProps:
      t == `X`
        ? { onFocusWithin: i, onSecondaryButton: a }
        : { onFocusWithin: i, onOptionsButton: a },
  };
}
function H(e) {
  let { label: t, shown: n, button: r = `Y` } = e;
  return (0, x.jsxs)(`div`, {
    className: (0, g.default)(z, n && `lDd-amB-eCU-`),
    children: [
      r == `X`
        ? (0, x.jsx)(c, { button: `X`, "aria-label": `X` })
        : (0, x.jsx)(`img`, { src: B, alt: `Y` }),
      (0, x.jsx)(`div`, { children: t }),
    ],
  });
}
export {
  R as a,
  I as c,
  k as d,
  T as f,
  M as i,
  L as l,
  O as m,
  V as n,
  A as o,
  w as p,
  P as r,
  j as s,
  H as t,
  F as u,
};
