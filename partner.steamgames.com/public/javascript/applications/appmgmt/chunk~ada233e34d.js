/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, j as t, vt as n } from "./chunk~de7f2df91c.js";
e();
var r = `b70IXFNJqco-`,
  i = n();
function a(e) {
  let { size: n, color: a, trackColor: o } = e,
    s = { borderColor: o, borderLeftColor: a };
  if (typeof n == `number`) {
    let e = `${n}px`;
    ((s.width = e),
      (s.height = e),
      (s.minHeight = e),
      (s.minWidth = e),
      (s.borderWidth = `${n / 10}px`));
  }
  return (0, i.jsx)(`div`, {
    className: t(
      r,
      n == `small` && `_1aSjKS0YPT0-`,
      (n == `medium` || !n) && `zKPudkXmNc8-`,
      n == `large` && `_7O6Q-wUbKJ4-`,
    ),
    style: s,
  });
}
export { a as t };
