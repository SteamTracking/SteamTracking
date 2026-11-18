/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import {
  $f as r,
  Sm as i,
  Us as a,
  bm as o,
  ea as s,
  if as c,
} from "./main.js";
import { i as l, n as u, r as d, t as f } from "./chunk~2e8feda0b1.js";
var p = e(t()),
  m = n();
function h(e) {
  return (0, m.jsx)(a, {
    onEscKeypress: e.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, m.jsx)(_, {
      redirectURL: e.redirectURL,
      guestOption: e.guestOption,
    }),
  });
}
function g() {
  s(
    (0, m.jsx)(h, { ownerWin: window, redirectURL: window.location.href }),
    window,
    { strTitle: c(`#Login_SignInTitle`) },
  );
}
function _(e) {
  let { redirectURL: t, guestOption: n } = e,
    [a] = (0, p.useState)(
      new r(new i(o.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [s, c] = (0, p.useState)(!1);
  return (0, m.jsx)(`div`, {
    children: s
      ? (0, m.jsx)(u, {})
      : (0, m.jsx)(f, {
          autoFocus: !0,
          transport: a,
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
