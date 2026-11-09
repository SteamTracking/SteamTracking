/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
function r(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function i(e) {
  if (!r(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!r(n) || !Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`));
}
function a(...e) {
  return JSON.stringify(e, (e, t) => {
    if (i(t)) {
      let e = {};
      return (
        Object.keys(t)
          .sort()
          .forEach((n) => {
            e[n] = t[n];
          }),
        e
      );
    }
    return t;
  });
}
var o = e(t(), 1);
n();
var s = (0, o.createContext)({ instances: {}, factories: {} });
function c(e, t) {
  let n = (0, o.useContext)(s),
    r = typeof e == `string` ? e : a(...e),
    i = n;
  for (; i; ) {
    if (r in i.instances) return i.instances[r];
    if (r in i.factories) break;
    i = i.parent;
  }
  let c = (i?.factories[r] ?? t)();
  return ((i ?? n).instances[r] = c), c;
}
export { c as t };
