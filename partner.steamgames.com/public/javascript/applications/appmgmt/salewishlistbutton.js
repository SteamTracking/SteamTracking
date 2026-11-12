/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  it as t,
  j as n,
  sn as r,
  vt as i,
} from "./chunk~de7f2df91c.js";
import { Xi as a, Yi as o, gn as s, ua as c } from "./chunk~1fa4b8f2ff.js";
import { h as l, y as u } from "./chunk~0a99e05c44.js";
import {
  K as d,
  Nn as f,
  Sn as p,
  ct as m,
  lt as h,
} from "./chunk~6b8ddcaac8.js";
import { r as g } from "./chunk~9a06851bec.js";
import "./chunk~44f252525d.js";
import { r as _ } from "./chunk~b390ee0f78.js";
import { l as v } from "./chunk~8ceeb46076.js";
import { t as y } from "./chunk~ada233e34d.js";
var b = r(e(), 1),
  x = i();
function S(e) {
  let { appid: t, className: n, bTextMode: r } = e,
    i = _(t),
    { data: a } = l(i),
    { data: o } = u(i);
  return (0, x.jsx)(C, {
    appid: t,
    bIsFree: !!a?.is_free,
    bIsComingSoon: !!o?.is_coming_soon,
    bTextMode: r,
    className: n,
  });
}
function C(e) {
  let [r, i] = b.useState(!1),
    l = g(),
    { appid: u, bIsFree: S, bIsComingSoon: C, className: T, bTextMode: E } = e,
    D = _(u),
    { bIsOwned: O } = f(D),
    k = h(u),
    { mutateAsync: A } = m(u, !k, v(l)),
    { elDialogElement: j, fnShowLogonDialog: M } = d(),
    N = async () => {
      t.logged_in ? r || (i(!0), await A(), i(!1)) : M();
    };
  if (O || (!C && S)) return S ? (0, x.jsx)(w, { possibleDemoAppID: u }) : null;
  let P = null;
  return (
    r && !E
      ? (P = (0, x.jsx)(y, { size: 18 }))
      : k
        ? k && (P = E ? c(`#OnWishlist`) : (0, x.jsx)(o, {}))
        : (P = E ? c(`#wishlist_add_to_wishlist`) : (0, x.jsx)(a, {})),
    (0, x.jsxs)(x.Fragment, {
      children: [
        (0, x.jsx)(s, {
          toolTipContent: c(`#AddToWishlist_ttip`),
          children: (0, x.jsx)(`div`, {
            className: n(p, T),
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
    r = _(t),
    { data: i } = l(r);
  return i && (i.type == 1 || i.type == 12) && i.related_items?.parent_appid
    ? (0, x.jsx)(T, {
        parentAppID: i.related_items?.parent_appid,
        className: n,
      })
    : null;
}
function T(e) {
  let { parentAppID: t, className: n } = e,
    r = _(t),
    { data: i } = l(r),
    { data: a } = u(r);
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
