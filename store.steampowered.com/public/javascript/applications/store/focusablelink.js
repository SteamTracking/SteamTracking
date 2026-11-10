/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import { _u as n, rl as r, vu as i } from "./main.js";
e();
var a = t();
function o(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function s(e) {
  let { navigate: t, onClick: n, ...i } = e,
    { target: s } = i,
    c = (e) => {
      try {
        n && n(e);
      } catch (t) {
        throw (e.preventDefault(), t);
      }
      e.defaultPrevented ||
        e.button !== 0 ||
        (s && s !== `_self`) ||
        o(e) ||
        (e.preventDefault(), t());
    };
  return (0, a.jsx)(r, { ...i, onClick: c });
}
function c(e) {
  return (0, a.jsx)(i, { component: s, ...e });
}
function l(e) {
  return (0, a.jsx)(n, { component: s, ...e });
}
export { c as n, l as t };
