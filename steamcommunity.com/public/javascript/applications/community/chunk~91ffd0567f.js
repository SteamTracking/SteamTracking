/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { D as t, Ft as n, ot as r } from "./chunk~01cfc309bf.js";
import { t as i } from "./chunk~e625c3ac3e.js";
import { At as a, Bu as o, Gt as s, Kf as c, Yt as l } from "./main.js";
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
    x = s(`TextArea`, v),
    S = c(),
    [C, w] = m(t),
    T = { resize: r, fieldSizing: n, minHeight: C, maxHeight: w },
    E = a({
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
