/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { Rt as t, pt as n } from "./libraries.js?contenthash=b0JzZ9xY";
import "./steammessages_twofactor_pb.js?contenthash=CZ2mBkuA";
import {
  i as r,
  n as i,
  r as a,
  t as o,
} from "./logindialog.js?contenthash=ryq4v2gg";
import { cx as s, ly as c } from "./main.js?contenthash=C1XpPKHE";
var l = `PvNen1Rhhrk-`,
  u = e(t()),
  d = n();
function f(e) {
  let { redirectUrl: t = s.STORE_BASE_URL } = e,
    n = c(),
    [f, p] = (0, u.useState)(!1),
    m = e.guest;
  return (0, d.jsx)(`div`, {
    className: l,
    children: f
      ? (0, d.jsx)(i, {})
      : (0, d.jsx)(o, {
          autoFocus: !0,
          transport: n,
          platform: 2,
          onComplete: (e) => {
            e == r.k_PrimaryDomainFail ? p(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          children: m && (0, d.jsx)(a, { redirectURL: e.redirectUrl }),
        }),
  });
}
export { f as default };
