/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { V as r } from "./storelink.js";
import { Et as i, Ot as a, kr as o, xr as s } from "./saletags.js";
import { n as c } from "./saletechredirectsignin.js";
import { n as l } from "./csstransitionwrapper.js";
import {
  Fc as u,
  Iv as d,
  Rr as f,
  Sc as p,
  Uy as m,
  Vu as h,
  _c as g,
  ax as _,
  gc as v,
  kv as y,
} from "./main.js";
var b = e(t(), 1),
  x = n();
function S(e) {
  let { appid: t, className: n, bTextMode: i } = e,
    a = r(t),
    { data: o } = y(a),
    { data: s } = d(a);
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
    d = h(),
    { appid: y, bIsFree: S, bIsComingSoon: C, className: T, bTextMode: E } = e,
    D = r(y),
    { bIsOwned: O } = o(D),
    k = a(y),
    { mutateAsync: A } = i(y, !k, u(d)),
    { elDialogElement: j, fnShowLogonDialog: M } = c(),
    N = async () => {
      _.logged_in ? t || (n(!0), await A(), n(!1)) : M();
    };
  if (O || (!C && S)) return S ? (0, x.jsx)(w, { possibleDemoAppID: y }) : null;
  let P = null;
  return (
    t && !E
      ? (P = (0, x.jsx)(l, { size: 18 }))
      : k
        ? k && (P = E ? m(`#OnWishlist`) : (0, x.jsx)(v, {}))
        : (P = E ? m(`#wishlist_add_to_wishlist`) : (0, x.jsx)(g, {})),
    (0, x.jsxs)(x.Fragment, {
      children: [
        (0, x.jsx)(f, {
          toolTipContent: m(`#AddToWishlist_ttip`),
          children: (0, x.jsx)(`div`, {
            className: p(s, T),
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
    { data: a } = y(i);
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
    { data: a } = y(i),
    { data: o } = d(i);
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
