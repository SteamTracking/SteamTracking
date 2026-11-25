/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { W as e, nt as t } from "./chunk~de7f2df91c.js";
import { l as n, n as r } from "./chunk~44f252525d.js";
t();
var i = e();
function a(e) {
  let t = n();
  return t.pathname.includes(`//`)
    ? (console.error(`Malformed path: "${t.pathname}"`),
      (0, i.jsx)(r, { to: t.pathname.replace(/\/\//g, `/`) }))
    : e.redirect
      ? (0, i.jsx)(r, { push: !0, to: e.redirect || `/` })
      : null;
}
export { a as t };
