/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, M as n, dt as r, ut as i } from "./chunk~01cfc309bf.js";
import { g as a, t as o } from "./chunk~4eed35ad1f.js";
import {
  Br as s,
  Gr as c,
  Ib as l,
  Lr as u,
  Vr as d,
  ex as f,
  mt as p,
  nn as m,
  ox as h,
  pi as g,
  pt as _,
  rn as v,
  rx as y,
  y as b,
  yy as x,
  zr as S,
} from "./main.js";
var C = e(t(), 1),
  w = e(n(), 1),
  T = `pJ01R8Rviwk-`,
  E = `_7U7Xu4nDCJA-`,
  D = `_653656tCiGM-`,
  O = `uFpeqSdc1hU-`,
  k = r(),
  A = 150;
function j(e) {
  let { appid: t, snr: n, onActiveChange: r } = e,
    a = f(),
    o = i(),
    s = x(),
    [l, d] = C.useState(!1),
    [p, v] = C.useState(!1),
    y = l || p;
  return (
    C.useEffect(() => r?.(y), [y, r]),
    !h.logged_in || a
      ? null
      : (0, k.jsx)(`div`, {
          className: (0, w.default)(T, p && `-IgNR6MyqQY-`),
          onPointerEnter: () => {
            (d(!0),
              o.prefetchQuery(m(s, h.accountid)),
              o.prefetchQuery(_(s, h.accountid)));
          },
          onPointerLeave: () => d(!1),
          children: (0, k.jsx)(`button`, {
            type: `button`,
            className: E,
            "aria-label": b(`#CapsuleOptions_Label`),
            "aria-expanded": p,
            onClick: (e) => {
              (u((0, k.jsx)(M, { appid: t, snr: n }), e.currentTarget, {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bPreferPopLeft: !0,
                bDisableMouseOverlay: !0,
                strClassName: (0, w.default)(c, D),
              }).SetOnHideCallback(() => v(!1)),
                v(!0));
            },
            children: (0, k.jsx)(g, { width: 16, height: 16 }),
          }),
        })
  );
}
function M(e) {
  let { appid: t, snr: n } = e,
    { instance: r } = C.useContext(s),
    i = v(t),
    c = p(t),
    { mutate: u } = a(t, !i, n),
    { mutate: f } = o(t, !c, n);
  return (0, k.jsxs)(S, {
    onMouseEnter: () => r.CancelHideMenuTimer(),
    onMouseLeave: () => r.Hide(A),
    children: [
      (0, k.jsx)(d, {
        className: (0, w.default)(O, i === void 0 && `UAGSKkYCRlo-`),
        disabled: i === void 0,
        onSelected: () => u(),
        children: l.Localize(
          i ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
        ),
      }),
      (0, k.jsx)(d, {
        className: (0, w.default)(O, c === void 0 && `UAGSKkYCRlo-`),
        disabled: c === void 0,
        onSelected: () => f(),
        children: l.Localize(c ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      (0, k.jsx)(d, {
        className: O,
        onSelected: () => {
          window.location.href = `${y.STORE_BASE_URL}account/preferences/`;
        },
        children: b(`#Menu_Popover_Preferences`),
      }),
    ],
  });
}
export { j as t };
