/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { C as e, E as t } from "./chunk~de7f2df91c.js";
var n = e.box(void 0);
function r() {
  return n.get();
}
function i(e) {
  t(() => n.set(e));
}
function a() {
  return n.get() || Math.floor(Date.now() / 1e3);
}
function o() {
  let e = n.get();
  return e ? new Date(e * 1e3) : new Date();
}
export { i, a as n, r, o as t };
