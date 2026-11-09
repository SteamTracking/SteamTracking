/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, nt as n, on as r } from "./mobx.esm.js";
import { m as i, p as a } from "./dialogs.js";
import { a as o, n as s, t as c } from "./logindialog.js";
import "./modals.js";
import { r as l, t as u } from "./browserapi.js";
var d = r(t()),
  f = e();
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
      u(new l(n.WEBAPI_BASE_URL)).GetServiceTransport(),
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
            e == o.k_PrimaryDomainFail ? m(!0) : window.location.assign(t);
          },
          autoFocus: !0,
          theme: `modal`,
          redirectUrl: t,
        }),
  });
}
export { p as default };
