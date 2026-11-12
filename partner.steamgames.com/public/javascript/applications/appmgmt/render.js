/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t } from "./chunk~de7f2df91c.js";
var n = t(e(), 1);
function r(e, t, r) {
  return typeof e == `function` ? e(t, r) : n.cloneElement(e, t);
}
function i(e, t, n, i) {
  return r(e || t, n, i);
}
export { i as t };
