/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, kt as t } from "./chunk~01cfc309bf.js";
var n = t.box(void 0);
function r() {
  return n.get();
}
function i(t) {
  e(() => n.set(t));
}
function a() {
  return n.get() || Math.floor(Date.now() / 1e3);
}
function o() {
  let e = n.get();
  return e ? new Date(e * 1e3) : new Date();
}
export { i, a as n, r, o as t };
