/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { Kf as r, dm as i, pm as a } from "./main.js";
import { i as o, n as s, t as c } from "./logindialog.js";
var l = e(t()),
  u = `_9-qRKyX6pp4-`,
  d = n();
function f(e) {
  let { redirectUrl: t = i.COMMUNITY_BASE_URL } = e,
    [n] = (0, l.useState)(
      new r(new a(i.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
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
