/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import "./chunk~8681f5c764.js";
import {
  Hn as r,
  Ln as i,
  Vc as a,
  bx as o,
  h as s,
  ib as c,
  vx as l,
} from "./main.js";
import { t as u } from "./chunk~237be05bcf.js";
var d = e(t()),
  f = n();
function p(e) {
  let t = u(),
    { showDiscoveryQueue: n } = s(0),
    p = d.useCallback(() => {
      o.logged_in
        ? n()
        : r(
            (0, f.jsx)(i, {
              onOK: () => {
                window.location.href = `${l.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
              },
              strOKButtonText: c(`#DiscoveryQueue_Error_Login_Title`),
              strDescription: c(`#DiscoveryQueue_Error_Login`),
              strTitle: c(`#DiscoveryQueue_Error_Login_Title`),
            }),
            window,
          );
    }, [n]);
  return t
    ? (0, f.jsx)(a, {
        children: (0, f.jsx)(`a`, {
          onClick: p,
          className: `experiment-button`,
          children: c(`#DiscoveryQueue_OpenWizard`),
        }),
      })
    : (0, f.jsx)(`div`, {
        className: `experiment-button-placeholder`,
        children: `\xA0`,
      });
}
export { p as default };
