/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import { _u as n, gu as r, nl as i } from "./main.js";
e();
var a = t();
function o(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function s(e) {
  let { navigate: t, onClick: n, ...r } = e,
    { target: s } = r,
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
  return (0, a.jsx)(i, { ...r, onClick: c });
}
function c(e) {
  return (0, a.jsx)(n, { component: s, ...e });
}
function l(e) {
  return (0, a.jsx)(r, { component: s, ...e });
}
export { c as n, l as t };
