/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, W as t, k as n, nt as r } from "./chunk~de7f2df91c.js";
import { g as i, h as a } from "./chunk~1fa4b8f2ff.js";
import { r as o, t as s } from "./chunk~70c16cc80c.js";
import { a as c, n as l, t as u } from "./chunk~2e8feda0b1.js";
import "./chunk~8681f5c764.js";
var d = e(r()),
  f = t();
function p() {
  return (
    (0, d.useEffect)(
      () => (
        (window.g_ShowLoginDialog = (e) =>
          a((0, f.jsx)(m, { redirectUrl: e }), window, {
            popupWidth: 700,
            popupHeight: 440,
          })),
        () => {
          delete window.g_ShowLoginDialog;
        }
      ),
      [],
    ),
    null
  );
}
function m(e) {
  let { redirectUrl: t = n.PARTNER_BASE_URL, closeModal: r } = e,
    a = (0, d.useRef)(
      s(new o(n.WEBAPI_BASE_URL)).GetServiceTransport(),
    ).current,
    [p, m] = (0, d.useState)(!1);
  return (0, f.jsx)(i, {
    onEscKeypress: r,
    hideTopBar: !0,
    bDisableBackgroundDismiss: !0,
    children: p
      ? (0, f.jsx)(l, {})
      : (0, f.jsx)(u, {
          platform: 2,
          transport: a,
          onComplete: (e) => {
            e == c.k_PrimaryDomainFail ? m(!0) : window.location.assign(t);
          },
          autoFocus: !0,
          theme: `modal`,
          redirectUrl: t,
        }),
  });
}
export { p as default };
