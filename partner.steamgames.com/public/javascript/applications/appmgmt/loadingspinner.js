/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { A as e, _t as t, kt as n } from "./mobx.esm.js";
n();
var r = `b70IXFNJqco-`,
  i = t();
function a(t) {
  let { size: n, color: a, trackColor: o } = t,
    s = { borderColor: o, borderLeftColor: a };
  if (typeof n == `number`) {
    let e = `${n}px`;
    (s.width = e),
      (s.height = e),
      (s.minHeight = e),
      (s.minWidth = e),
      (s.borderWidth = `${n / 10}px`);
  }
  return (0, i.jsx)(`div`, {
    className: e(
      r,
      n == `small` && `_1aSjKS0YPT0-`,
      (n == `medium` || !n) && `zKPudkXmNc8-`,
      n == `large` && `_7O6Q-wUbKJ4-`,
    ),
    style: s,
  });
}
export { a as t };
