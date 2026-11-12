/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import {
  Yf as r,
  Zi as i,
  _m as a,
  ef as o,
  hm as s,
  zs as c,
} from "./main.js";
import { i as l, n as u, r as d, t as f } from "./chunk~2e8feda0b1.js";
var p = e(t()),
  m = n();
function h(e) {
  return (0, m.jsx)(c, {
    onEscKeypress: e.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, m.jsx)(_, {
      redirectURL: e.redirectURL,
      guestOption: e.guestOption,
    }),
  });
}
function g() {
  i(
    (0, m.jsx)(h, { ownerWin: window, redirectURL: window.location.href }),
    window,
    { strTitle: o(`#Login_SignInTitle`) },
  );
}
function _(e) {
  let { redirectURL: t, guestOption: n } = e,
    [i] = (0, p.useState)(
      new r(new a(s.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [o, c] = (0, p.useState)(!1);
  return (0, m.jsx)(`div`, {
    children: o
      ? (0, m.jsx)(u, {})
      : (0, m.jsx)(f, {
          autoFocus: !0,
          transport: i,
          platform: 2,
          onComplete: (e) => {
            e == l.k_PrimaryDomainFail ? c(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          theme: `modal`,
          children: n && (0, m.jsx)(d, { redirectURL: t }),
        }),
  });
}
export { g as t };
