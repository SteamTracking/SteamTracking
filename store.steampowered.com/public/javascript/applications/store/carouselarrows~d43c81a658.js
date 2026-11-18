/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t } from "./chunk~01cfc309bf.js";
import { N as n } from "./chunk~f57d770d64.js";
import { Da as r } from "./main.js";
var i = e(t()),
  a = i.createContext(!1),
  o = `100% 0px 100% 0px`,
  s = `SaleSection_`;
function c() {
  return window.innerWidth ?? 1920;
}
function l() {
  return c() >= 940;
}
function u() {
  r();
  let [e, t] = (0, i.useState)(() => c());
  return (
    (0, i.useEffect)(() => {
      let e = () => {
        t(c());
      };
      return (
        e(),
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      );
    }, []),
    e
  );
}
function d(e = 940) {
  return u() >= e;
}
function f(e) {
  let t = u(),
    r = t >= ((0, i.useContext)(a) ? 911 : 940),
    o = n(e);
  return r
    ? { nMaxCapsulesPerRow: o.nMaxItemsPerRow, bScreenIsWide: r }
    : {
        nMaxCapsulesPerRow: Math.min(
          Math.max(Math.floor(t / o.nItemMinimumWidth), 1),
          o.nMaxItemsPerRow,
        ),
        bScreenIsWide: r,
      };
}
function p(e) {
  let t = n(e);
  return l()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
export { d as a, a as c, s as i, p as n, f as o, o as r, u as s, l as t };
