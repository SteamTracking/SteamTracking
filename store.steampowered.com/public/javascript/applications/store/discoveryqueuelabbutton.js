/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import "./modals.js";
import {
  Dn as r,
  Mn as i,
  Uy as a,
  ax as o,
  h as s,
  kc as c,
  rx as l,
} from "./main.js";
import { t as u } from "./preloaddiscoveryqueue.js";
var d = e(t()),
  f = n();
function p(e) {
  let t = u(),
    { showDiscoveryQueue: n } = s(0),
    p = d.useCallback(() => {
      o.logged_in
        ? n()
        : i(
            (0, f.jsx)(r, {
              onOK: () => {
                window.location.href = `${l.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
              },
              strOKButtonText: a(`#DiscoveryQueue_Error_Login_Title`),
              strDescription: a(`#DiscoveryQueue_Error_Login`),
              strTitle: a(`#DiscoveryQueue_Error_Login_Title`),
            }),
            window,
          );
    }, [n]);
  return t
    ? (0, f.jsx)(c, {
        children: (0, f.jsx)(`a`, {
          onClick: p,
          className: `experiment-button`,
          children: a(`#DiscoveryQueue_OpenWizard`),
        }),
      })
    : (0, f.jsx)(`div`, {
        className: `experiment-button-placeholder`,
        children: `\xA0`,
      });
}
export { p as default };
