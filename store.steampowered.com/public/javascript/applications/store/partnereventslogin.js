/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import "./modals.js";
import {
  Dy as r,
  Nn as i,
  Pn as a,
  Wy as o,
  ix as s,
  ky as c,
} from "./main.js";
import "./steammessages_twofactor_pb.js";
import { i as l, n as u, r as d, t as f } from "./logindialog.js";
var p = e(t()),
  m = n();
function h(e) {
  return (0, m.jsx)(a, {
    onEscKeypress: e.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, m.jsx)(v, {
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
function _(e, t) {
  i(
    (0, m.jsx)(h, { ownerWin: window, redirectURL: e, guestOption: t }),
    window,
    { strTitle: o(`#Login_SignInTitle`) },
  );
}
function v(e) {
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
export { _ as n, g as t };
