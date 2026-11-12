/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { cx as r, cy as i } from "./main.js";
import "./chunk~7cbe6011f7.js";
import { i as a, n as o, r as s, t as c } from "./chunk~2e8feda0b1.js";
var l = `PvNen1Rhhrk-`,
  u = e(t()),
  d = n();
function f(e) {
  let { redirectUrl: t = r.STORE_BASE_URL } = e,
    n = i(),
    [f, p] = (0, u.useState)(!1),
    m = e.guest;
  return (0, d.jsx)(`div`, {
    className: l,
    children: f
      ? (0, d.jsx)(o, {})
      : (0, d.jsx)(c, {
          autoFocus: !0,
          transport: n,
          platform: 2,
          onComplete: (e) => {
            e == a.k_PrimaryDomainFail ? p(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          children: m && (0, d.jsx)(s, { redirectURL: e.redirectUrl }),
        }),
  });
}
export { f as default };
