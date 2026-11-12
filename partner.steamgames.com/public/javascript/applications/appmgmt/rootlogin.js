/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, rt as t, sn as n, vt as r } from "./chunk~de7f2df91c.js";
import { g as i, h as a } from "./chunk~1fa4b8f2ff.js";
import { a as o, n as s, t as c } from "./chunk~2e8feda0b1.js";
import "./chunk~8681f5c764.js";
import { r as l, t as u } from "./chunk~70c16cc80c.js";
var d = n(e()),
  f = r();
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
  let { redirectUrl: n = t.PARTNER_BASE_URL, closeModal: r } = e,
    a = (0, d.useRef)(
      u(new l(t.WEBAPI_BASE_URL)).GetServiceTransport(),
    ).current,
    [p, m] = (0, d.useState)(!1);
  return (0, f.jsx)(i, {
    onEscKeypress: r,
    hideTopBar: !0,
    bDisableBackgroundDismiss: !0,
    children: p
      ? (0, f.jsx)(s, {})
      : (0, f.jsx)(c, {
          platform: 2,
          transport: a,
          onComplete: (e) => {
            e == o.k_PrimaryDomainFail ? m(!0) : window.location.assign(n);
          },
          autoFocus: !0,
          theme: `modal`,
          redirectUrl: n,
        }),
  });
}
export { p as default };
