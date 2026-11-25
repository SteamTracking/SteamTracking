/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import "./chunk~8681f5c764.js";
import {
  Hn as r,
  Un as i,
  Uy as a,
  Vy as o,
  ib as s,
  vx as c,
} from "./main.js";
import "./chunk~7cbe6011f7.js";
import { i as l, n as u, r as d, t as f } from "./chunk~2e8feda0b1.js";
var p = e(t()),
  m = n();
function h(e) {
  return (0, m.jsx)(i, {
    onEscKeypress: e.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, m.jsx)(v, {
      redirectURL: e.redirectURL,
      guestOption: e.guestOption,
    }),
  });
}
function g() {
  r(
    (0, m.jsx)(h, { ownerWin: window, redirectURL: window.location.href }),
    window,
    { strTitle: s(`#Login_SignInTitle`) },
  );
}
function _(e, t) {
  r(
    (0, m.jsx)(h, { ownerWin: window, redirectURL: e, guestOption: t }),
    window,
    { strTitle: s(`#Login_SignInTitle`) },
  );
}
function v(e) {
  let { redirectURL: t, guestOption: n } = e,
    [r] = (0, p.useState)(
      new o(new a(c.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [i, s] = (0, p.useState)(!1);
  return (0, m.jsx)(`div`, {
    children: i
      ? (0, m.jsx)(u, {})
      : (0, m.jsx)(f, {
          autoFocus: !0,
          transport: r,
          platform: 2,
          onComplete: (e) => {
            e == l.k_PrimaryDomainFail ? s(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          theme: `modal`,
          children: n && (0, m.jsx)(d, { redirectURL: t }),
        }),
  });
}
export { _ as n, g as t };
