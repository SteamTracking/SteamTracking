/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { Wt as r, js as i } from "./chunk~6b8ddcaac8.js";
import { S as a, g as o, k as s } from "./chunk~4eed35ad1f.js";
import { n as c } from "./chunk~90b9831ad2.js";
import {
  Oc as l,
  Pc as u,
  Wv as d,
  Xr as f,
  Zv as p,
  bx as m,
  ib as h,
  kc as g,
  nd as _,
  qc as v,
  rn as y,
} from "./main.js";
var b = e(t(), 1),
  x = n();
function S(e) {
  let { appid: t, className: n, bTextMode: r } = e,
    i = s(t),
    { data: a } = d(i),
    { data: o } = p(i);
  return (0, x.jsx)(C, {
    appid: t,
    bIsFree: !!a?.is_free,
    bIsComingSoon: !!o?.is_coming_soon,
    bTextMode: r,
    className: n,
  });
}
function C(e) {
  let [t, n] = b.useState(!1),
    d = _(),
    { appid: p, bIsFree: S, bIsComingSoon: C, className: T, bTextMode: E } = e,
    D = s(p),
    { bIsOwned: O } = a(D),
    k = y(p),
    { mutateAsync: A } = o(p, !k, v(d)),
    { elDialogElement: j, fnShowLogonDialog: M } = r(),
    N = async () => {
      m.logged_in ? t || (n(!0), await A(), n(!1)) : M();
    };
  if (O || (!C && S)) return S ? (0, x.jsx)(w, { possibleDemoAppID: p }) : null;
  let P = null;
  return (
    t && !E
      ? (P = (0, x.jsx)(c, { size: 18 }))
      : k
        ? k && (P = E ? h(`#OnWishlist`) : (0, x.jsx)(l, {}))
        : (P = E ? h(`#wishlist_add_to_wishlist`) : (0, x.jsx)(g, {})),
    (0, x.jsxs)(x.Fragment, {
      children: [
        (0, x.jsx)(f, {
          toolTipContent: h(`#AddToWishlist_ttip`),
          children: (0, x.jsx)(`div`, {
            className: u(i, T),
            onClick: N,
            children: P,
          }),
        }),
        j,
      ],
    })
  );
}
function w(e) {
  let { possibleDemoAppID: t, className: n } = e,
    r = s(t),
    { data: i } = d(r);
  return i && (i.type == 1 || i.type == 12) && i.related_items?.parent_appid
    ? (0, x.jsx)(T, {
        parentAppID: i.related_items?.parent_appid,
        className: n,
      })
    : null;
}
function T(e) {
  let { parentAppID: t, className: n } = e,
    r = s(t),
    { data: i } = d(r),
    { data: a } = p(r);
  return !i || !a
    ? null
    : (0, x.jsx)(C, {
        appid: t,
        bIsComingSoon: !!a.is_coming_soon,
        bIsFree: !!i.is_free,
        className: n,
      });
}
export { S as n, C as t };
