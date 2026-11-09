/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { La as r, bs as i, xu as a } from "./main.js";
var o = e(t()),
  s = `_22H1cFqJ3Xo-`,
  c = `ILRTOLQcXtQ-`,
  l = `DEcxQM-4cPU-`,
  u = n();
function d(e) {
  let [t, n] = (0, o.useState)(!1),
    d = (0, o.useRef)(null);
  return (0, u.jsx)(`span`, {
    children: (0, u.jsxs)(`button`, {
      onClick: (t) => (
        n(!0),
        t.stopPropagation(),
        navigator.clipboard.writeText(e.text),
        setTimeout(() => n(!1), 1e3),
        !1
      ),
      className: a(s, e.size === `large` ? c : l),
      ref: d,
      title: e.text,
      children: [
        t &&
          d.current &&
          (0, u.jsx)(i, {
            target: d.current,
            direction: `bottom`,
            children: (0, u.jsx)(`div`, {
              className: `e1X81I-Jga0-`,
              children: `Copied.`,
            }),
          }),
        (0, u.jsx)(r, {}),
      ],
    }),
  });
}
export { d as t };
