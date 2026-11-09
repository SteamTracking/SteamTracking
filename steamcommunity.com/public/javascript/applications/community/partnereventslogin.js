/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import {
  Kf as r,
  Rs as i,
  Xi as a,
  Zd as o,
  dm as s,
  pm as c,
} from "./main.js";
import { i as l, n as u, r as d, t as f } from "./logindialog.js";
var p = e(t()),
  m = n();
function h(e) {
  return (0, m.jsx)(i, {
    onEscKeypress: e.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, m.jsx)(_, {
      redirectURL: e.redirectURL,
      guestOption: e.guestOption,
    }),
  });
}
function g() {
  a(
    (0, m.jsx)(h, { ownerWin: window, redirectURL: window.location.href }),
    window,
    { strTitle: o(`#Login_SignInTitle`) },
  );
}
function _(e) {
  let { redirectURL: t, guestOption: n } = e,
    [i] = (0, p.useState)(
      new r(new c(s.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [a, o] = (0, p.useState)(!1);
  return (0, m.jsx)(`div`, {
    children: a
      ? (0, m.jsx)(u, {})
      : (0, m.jsx)(f, {
          autoFocus: !0,
          transport: i,
          platform: 2,
          onComplete: (e) => {
            e == l.k_PrimaryDomainFail ? o(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          theme: `modal`,
          children: n && (0, m.jsx)(d, { redirectURL: t }),
        }),
  });
}
export { g as t };
