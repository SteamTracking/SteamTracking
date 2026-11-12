/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { n as r } from "./chunk~521597d5f9.js";
var i = e(t(), 1),
  a = n(),
  o = i.createContext(void 0);
function s() {
  return i.useContext(o) ?? r();
}
var c = { eLocation: 0 },
  l = i.createContext(c);
function u(e) {
  let { children: t, location: n } = e;
  return (0, a.jsx)(l.Provider, {
    value: { ...c, eLocation: n ?? 0 },
    children: t,
  });
}
function d() {
  return i.useContext(l);
}
function f() {
  return d().eLocation == 2;
}
function p() {
  let e = d();
  return e.eLocation == 2 || e.eLocation == 1;
}
export { p as a, f as i, u as n, s as o, d as r, l as t };
