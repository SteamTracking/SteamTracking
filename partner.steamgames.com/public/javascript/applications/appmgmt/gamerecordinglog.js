/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Ft as e } from "./src.js";
var t = new e(`GR`);
function n(e) {
  return (...t) => {
    e(`[${(performance.now() / 1e3).toFixed(3)}]`, ...t);
  };
}
var r = n(t.Debug),
  i = n(t.Info),
  a = n(t.Warning),
  o = n(t.Error),
  s = r;
export { a, i, r as n, o as r, s as t };
