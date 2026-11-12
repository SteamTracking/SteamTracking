/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { Yf as r, _m as i, hm as a } from "./main.js";
import { i as o, n as s, t as c } from "./chunk~2e8feda0b1.js";
var l = e(t()),
  u = `_9-qRKyX6pp4-`,
  d = n();
function f(e) {
  let { redirectUrl: t = a.COMMUNITY_BASE_URL } = e,
    [n] = (0, l.useState)(
      new r(new i(a.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [f, p] = (0, l.useState)(!1);
  return (0, d.jsx)(`div`, {
    className: u,
    children: f
      ? (0, d.jsx)(s, {})
      : (0, d.jsx)(c, {
          autoFocus: !0,
          transport: n,
          platform: 2,
          onComplete: (e) => {
            e == o.k_PrimaryDomainFail ? p(!0) : window.location.assign(t);
          },
          redirectUrl: t,
        }),
  });
}
export { f as default };
