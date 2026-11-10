/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import "./modals.js";
import {
  Ac as r,
  Nn as i,
  On as a,
  Wy as o,
  h as s,
  ix as c,
  ox as l,
} from "./main.js";
import { t as u } from "./preloaddiscoveryqueue.js";
var d = e(t()),
  f = n();
function p(e) {
  let t = u(),
    { showDiscoveryQueue: n } = s(0),
    p = d.useCallback(() => {
      l.logged_in
        ? n()
        : i(
            (0, f.jsx)(a, {
              onOK: () => {
                window.location.href = `${c.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
              },
              strOKButtonText: o(`#DiscoveryQueue_Error_Login_Title`),
              strDescription: o(`#DiscoveryQueue_Error_Login`),
              strTitle: o(`#DiscoveryQueue_Error_Login_Title`),
            }),
            window,
          );
    }, [n]);
  return t
    ? (0, f.jsx)(r, {
        children: (0, f.jsx)(`a`, {
          onClick: p,
          className: `experiment-button`,
          children: o(`#DiscoveryQueue_OpenWizard`),
        }),
      })
    : (0, f.jsx)(`div`, {
        className: `experiment-button-placeholder`,
        children: `\xA0`,
      });
}
export { p as default };
