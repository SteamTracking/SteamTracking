/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  Eo as r,
  _i as i,
  do as a,
  hi as o,
  vt as s,
  yo as c,
} from "./chunk~6b8ddcaac8.js";
import { n as l } from "./chunk~90b9831ad2.js";
import {
  Jy as u,
  Ku as d,
  Lc as f,
  Pv as p,
  Vr as m,
  Vv as h,
  ux as g,
  vc as _,
  wc as v,
  yc as y,
} from "./main.js";
var b = e(t(), 1),
  x = n();
function S(e) {
  let { appid: t, className: n, bTextMode: i } = e,
    a = r(t),
    { data: o } = p(a),
    { data: s } = h(a);
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
    p = d(),
    { appid: h, bIsFree: S, bIsComingSoon: C, className: T, bTextMode: E } = e,
    D = r(h),
    { bIsOwned: O } = c(D),
    k = i(h),
    { mutateAsync: A } = o(h, !k, f(p)),
    { elDialogElement: j, fnShowLogonDialog: M } = s(),
    N = async () => {
      g.logged_in ? t || (n(!0), await A(), n(!1)) : M();
    };
  if (O || (!C && S)) return S ? (0, x.jsx)(w, { possibleDemoAppID: h }) : null;
  let P = null;
  return (
    t && !E
      ? (P = (0, x.jsx)(l, { size: 18 }))
      : k
        ? k && (P = E ? u(`#OnWishlist`) : (0, x.jsx)(_, {}))
        : (P = E ? u(`#wishlist_add_to_wishlist`) : (0, x.jsx)(y, {})),
    (0, x.jsxs)(x.Fragment, {
      children: [
        (0, x.jsx)(m, {
          toolTipContent: u(`#AddToWishlist_ttip`),
          children: (0, x.jsx)(`div`, {
            className: v(a, T),
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
    { data: o } = h(i);
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
