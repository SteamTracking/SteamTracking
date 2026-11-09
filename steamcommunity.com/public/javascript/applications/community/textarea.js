/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { D as t, Pt as n, ot as r } from "./libraries.js";
import { t as i } from "./textentry.js";
import { Kt as a, Lu as o, Nt as s, Uf as c, Zt as l } from "./main.js";
n();
var u = e(t(), 1),
  d = r();
function f(e) {
  let {
      rows: t = 3,
      sizing: n = `content`,
      resize: r = `none`,
      ref: o,
      value: f,
      onTextChange: h,
      onChange: g,
      disabled: _,
      variant: v,
      ...y
    } = e,
    b = (e) => {
      _ || (h(e.target.value), g && g(e));
    },
    x = a(`TextArea`, v),
    S = c(),
    [C, w] = m(t),
    T = { resize: r, fieldSizing: n, minHeight: C, maxHeight: w },
    E = s({
      ...y,
      className: (0, u.default)(l(), i()),
      style: T,
      cursor: `text`,
      disabled: _,
      variant: x,
    });
  return (0, d.jsx)(S ? p : `textarea`, {
    ref: o,
    ...E,
    value: f || ``,
    onChange: b,
    readOnly: _,
    "aria-disabled": _,
  });
}
function p(e) {
  return (0, d.jsx)(o, { noFocusRing: !0, ...e });
}
function m(e) {
  let t = typeof e == `number` ? e : e.min,
    n = typeof e == `number` ? void 0 : e.max;
  return [
    typeof t == `number` ? `calc( ${t}lh + 2 * var(--spacing-1) )` : void 0,
    typeof n == `number` ? `calc( ${n}lh + 2 * var(--spacing-1) )` : void 0,
  ];
}
export { f as t };
