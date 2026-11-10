/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { ix as r, iy as i } from "./main.js";
import "./steammessages_twofactor_pb.js";
import { i as a, n as o, r as s, t as c } from "./logindialog.js";
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
