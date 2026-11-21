/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, dt as r, ft as i } from "./chunk~01cfc309bf.js";
import { p as a, t as o } from "./chunk~4eed35ad1f.js";
import {
  $b as s,
  Br as c,
  Fb as l,
  Gr as u,
  Lr as d,
  Vr as f,
  ax as p,
  mt as m,
  nn as h,
  nx as g,
  pi as _,
  pt as v,
  rn as y,
  vy as b,
  y as x,
  zr as S,
} from "./main.js";
var C = e(t(), 1),
  w = e(n(), 1),
  T = `pJ01R8Rviwk-`,
  E = `_7U7Xu4nDCJA-`,
  D = `_653656tCiGM-`,
  O = `uFpeqSdc1hU-`,
  k = i(),
  A = 150;
function j(e) {
  let { appid: t, snr: n, onActiveChange: i } = e,
    a = s(),
    o = r(),
    c = b(),
    [l, f] = C.useState(!1),
    [m, g] = C.useState(!1),
    y = l || m;
  return (
    C.useEffect(() => i?.(y), [y, i]),
    !p.logged_in || a
      ? null
      : (0, k.jsx)(`div`, {
          className: (0, w.default)(T, m && `-IgNR6MyqQY-`),
          onPointerEnter: () => {
            (f(!0),
              o.prefetchQuery(h(c, p.accountid)),
              o.prefetchQuery(v(c, p.accountid)));
          },
          onPointerLeave: () => f(!1),
          children: (0, k.jsx)(`button`, {
            type: `button`,
            className: E,
            "aria-label": x(`#CapsuleOptions_Label`),
            "aria-expanded": m,
            onClick: (e) => {
              (d((0, k.jsx)(M, { appid: t, snr: n }), e.currentTarget, {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bPreferPopLeft: !0,
                bDisableMouseOverlay: !0,
                strClassName: (0, w.default)(u, D),
              }).SetOnHideCallback(() => g(!1)),
                g(!0));
            },
            children: (0, k.jsx)(_, { width: 16, height: 16 }),
          }),
        })
  );
}
function M(e) {
  let { appid: t, snr: n } = e,
    { instance: r } = C.useContext(c),
    i = y(t),
    s = m(t),
    { mutate: u } = a(t, !i, n),
    { mutate: d } = o(t, !s, n);
  return (0, k.jsxs)(S, {
    onMouseEnter: () => r.CancelHideMenuTimer(),
    onMouseLeave: () => r.Hide(A),
    children: [
      (0, k.jsx)(f, {
        className: (0, w.default)(O, i === void 0 && `UAGSKkYCRlo-`),
        disabled: i === void 0,
        onSelected: () => u(),
        children: l.Localize(
          i ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
        ),
      }),
      (0, k.jsx)(f, {
        className: (0, w.default)(O, s === void 0 && `UAGSKkYCRlo-`),
        disabled: s === void 0,
        onSelected: () => d(),
        children: l.Localize(s ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      (0, k.jsx)(f, {
        className: O,
        onSelected: () => {
          window.location.href = `${g.STORE_BASE_URL}account/preferences/`;
        },
        children: x(`#Menu_Popover_Preferences`),
      }),
    ],
  });
}
export { j as t };
