/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, i as r } from "./libraries.js";
import { Cc as i } from "./main.js";
var a = e(t()),
  o = `b70IXFNJqco-`,
  s = n();
function c(e) {
  let { size: t, color: n, trackColor: r } = e,
    a = { borderColor: r, borderLeftColor: n };
  if (typeof t == `number`) {
    let e = `${t}px`;
    ((a.width = e),
      (a.height = e),
      (a.minHeight = e),
      (a.minWidth = e),
      (a.borderWidth = `${t / 10}px`));
  }
  return (0, s.jsx)(`div`, {
    className: i(
      o,
      t == `small` && `_1aSjKS0YPT0-`,
      (t == `medium` || !t) && `zKPudkXmNc8-`,
      t == `large` && `_7O6Q-wUbKJ4-`,
    ),
    style: a,
  });
}
function l(e) {
  let { children: t, ...n } = e,
    i = a.useRef(null);
  return (0, s.jsx)(r, { nodeRef: i, ...n, children: e.children(i) });
}
export { c as n, l as t };
