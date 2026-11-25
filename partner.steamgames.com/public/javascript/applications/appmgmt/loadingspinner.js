/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { W as e, nt as t, r as n } from "./chunk~de7f2df91c.js";
t();
var r = `b70IXFNJqco-`,
  i = e();
function a(e) {
  let { size: t, color: a, trackColor: o } = e,
    s = { borderColor: o, borderLeftColor: a };
  if (typeof t == `number`) {
    let e = `${t}px`;
    ((s.width = e),
      (s.height = e),
      (s.minHeight = e),
      (s.minWidth = e),
      (s.borderWidth = `${t / 10}px`));
  }
  return (0, i.jsx)(`div`, {
    className: n(
      r,
      t == `small` && `_1aSjKS0YPT0-`,
      (t == `medium` || !t) && `zKPudkXmNc8-`,
      t == `large` && `_7O6Q-wUbKJ4-`,
    ),
    style: s,
  });
}
export { a as t };
