/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t } from "./chunk~01cfc309bf.js";
import { N as n } from "./chunk~f57d770d64.js";
import { Da as r } from "./main.js";
var i = e(t(), 1),
  a = `100% 0px 100% 0px`,
  o = `SaleSection_`;
function s() {
  return window.innerWidth ?? 1920;
}
function c() {
  return s() >= 940;
}
function l() {
  r();
  let [e, t] = (0, i.useState)(() => s());
  return (
    (0, i.useEffect)(() => {
      let e = () => {
        t(s());
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
function u(e = 940) {
  return l() >= e;
}
function d(e) {
  let t = l(),
    r = t >= 940,
    i = n(e);
  return r
    ? { nMaxCapsulesPerRow: i.nMaxItemsPerRow, bScreenIsWide: r }
    : {
        nMaxCapsulesPerRow: Math.min(
          Math.max(Math.floor(t / i.nItemMinimumWidth), 1),
          i.nMaxItemsPerRow,
        ),
        bScreenIsWide: r,
      };
}
function f(e) {
  let t = n(e);
  return c()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
export { u as a, o as i, f as n, d as o, a as r, l as s, c as t };
