/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, W as n, ot as r } from "./libraries.js";
import { Ni as i } from "./main.js";
function a(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function o(e) {
  if (!a(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!a(n) || !Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`));
}
function s(...e) {
  return JSON.stringify(e, (e, t) => {
    if (o(t)) {
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
var c = e(t(), 1);
r();
var l = (0, c.createContext)({ instances: {}, factories: {} });
function u(e, t) {
  let n = (0, c.useContext)(l),
    r = typeof e == `string` ? e : s(...e),
    i = n;
  for (; i;) {
    if (r in i.instances) return i.instances[r];
    if (r in i.factories) break;
    i = i.parent;
  }
  let a = (i?.factories[r] ?? t)();
  return (((i ?? n).instances[r] = a), a);
}
var d = e(n(), 1);
function f(e, t) {
  return new d.default(
    async (t) => {
      let n = [...t],
        r = await i.GetPlayerLinkDetails(e, { steamids: n }),
        a = new Map();
      return (
        r
          .Body()
          .accounts()
          .forEach((e) => {
            let t = e.toObject();
            a.set(t.public_data.steamid, t);
          }),
        n.map((e) => a.get(e) ?? null)
      );
    },
    { maxBatchSize: 100, cache: !1, ...t },
  );
}
function p(e) {
  return u(`PlayerLinkDetails`, () => f(e));
}
export { p as n, u as r, f as t };
