/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { Is as r, Mt as i, Ss as a, ks as o } from "./chunk~6b8ddcaac8.js";
import { p as s } from "./chunk~4eed35ad1f.js";
import { n as c } from "./chunk~90b9831ad2.js";
import {
  Dc as l,
  Kc as u,
  Nc as d,
  Oc as f,
  Uv as p,
  Xv as m,
  Yr as h,
  rb as g,
  rn as _,
  td as v,
  yx as y,
} from "./main.js";
var b = e(t(), 1),
  x = n();
function S(e) {
  let { appid: t, className: n, bTextMode: i } = e,
    a = r(t),
    { data: o } = p(a),
    { data: s } = m(a);
  return (0, x.jsx)(C, {
    appid: t,
    bIsFree: !!o?.is_free,
    bIsComingSoon: !!s?.is_coming_soon,
    bTextMode: i,
    className: n,
  });
}
function C(e) {
  let [t, n] = b.useState(!1),
    p = v(),
    { appid: m, bIsFree: S, bIsComingSoon: C, className: T, bTextMode: E } = e,
    D = r(m),
    { bIsOwned: O } = o(D),
    k = _(m),
    { mutateAsync: A } = s(m, !k, u(p)),
    { elDialogElement: j, fnShowLogonDialog: M } = i(),
    N = async () => {
      y.logged_in ? t || (n(!0), await A(), n(!1)) : M();
    };
  if (O || (!C && S)) return S ? (0, x.jsx)(w, { possibleDemoAppID: m }) : null;
  let P = null;
  return (
    t && !E
      ? (P = (0, x.jsx)(c, { size: 18 }))
      : k
        ? k && (P = E ? g(`#OnWishlist`) : (0, x.jsx)(l, {}))
        : (P = E ? g(`#wishlist_add_to_wishlist`) : (0, x.jsx)(f, {})),
    (0, x.jsxs)(x.Fragment, {
      children: [
        (0, x.jsx)(h, {
          toolTipContent: g(`#AddToWishlist_ttip`),
          children: (0, x.jsx)(`div`, {
            className: d(a, T),
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
    i = r(t),
    { data: a } = p(i);
  return a && (a.type == 1 || a.type == 12) && a.related_items?.parent_appid
    ? (0, x.jsx)(T, {
        parentAppID: a.related_items?.parent_appid,
        className: n,
      })
    : null;
}
function T(e) {
  let { parentAppID: t, className: n } = e,
    i = r(t),
    { data: a } = p(i),
    { data: o } = m(i);
  return !a || !o
    ? null
    : (0, x.jsx)(C, {
        appid: t,
        bIsComingSoon: !!o.is_coming_soon,
        bIsFree: !!a.is_free,
        className: n,
      });
}
export { S as n, C as t };
