/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
var r = e(t(), 1),
  i = n(),
  a = { eLocation: 0 },
  o = r.createContext(a);
function s(e) {
  let { children: t, location: n } = e;
  return (0, i.jsx)(o.Provider, {
    value: { ...a, eLocation: n ?? 0 },
    children: t,
  });
}
function c() {
  return r.useContext(o);
}
function l() {
  return c().eLocation == 2;
}
function u() {
  let e = c();
  return e.eLocation == 2 || e.eLocation == 1;
}
export { u as a, l as i, s as n, c as r, o as t };
