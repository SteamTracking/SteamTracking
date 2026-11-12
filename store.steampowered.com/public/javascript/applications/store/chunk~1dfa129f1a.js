/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import "./chunk~8681f5c764.js";
import {
  An as r,
  Fn as i,
  Jy as a,
  cx as o,
  h as s,
  jc as c,
  ux as l,
} from "./main.js";
import { t as u } from "./chunk~237be05bcf.js";
var d = e(t()),
  f = n();
function p(e) {
  let t = u(),
    { showDiscoveryQueue: n } = s(0),
    p = d.useCallback(() => {
      l.logged_in
        ? n()
        : i(
            (0, f.jsx)(r, {
              onOK: () => {
                window.location.href = `${o.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
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
