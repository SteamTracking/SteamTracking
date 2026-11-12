/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, vt as n, z as r } from "./chunk~de7f2df91c.js";
import { Pt as i } from "./chunk~25a6634263.js";
import { o as a } from "./chunk~f7fdc3d084.js";
import { t as o } from "./chunk~4cdb5412a1.js";
import { n as s, o as c, r as l, s as u, t as d } from "./chunk~5f339e9a5f.js";
import { a as f } from "./chunk~a292304e38.js";
var p = `_3HgSSqEdwS4-`;
e();
var m = t(i(), 1),
  h = n();
function g(e) {
  let { as: t = `div`, focusable: n, navProps: i, ref: a, ...s } = e,
    l = r(),
    u = c({ ...s, className: (0, m.default)(p, f(), e.className) }, _),
    d = n ?? i?.focusable ?? !!s.onClick,
    g = (0, h.jsx)(t, { ref: a, ...u });
  return l && (d || i)
    ? (0, h.jsx)(o, { ...(i || {}), focusable: d, children: g })
    : g;
}
var _ = d;
function v(e) {
  return l(e, s);
}
var y = `PmISXgz3FoQ-`,
  b = `Bj8vGJI7AGo-`,
  x = `_2AVS3LuARvU-`,
  S = `rC6xro2ZWbk-`,
  C = `oln6i1TGpO0-`,
  w = `xTWnfrOQ1MU-`,
  T = `h31r9FtdgH0-`,
  E = `AwByPYmuf2E-`,
  D = `rPm-B0T-Plk-`;
function O(e) {
  let { as: t = `div`, focusable: n, navProps: i, ref: s, ...l } = e,
    d = r(),
    f = c({ ...l, className: (0, m.default)(e.className, y) }, k),
    p = n ?? i?.focusable ?? !!l.onClick,
    g = (0, h.jsx)(t, { ref: s, ...f }),
    _ = a();
  if (d) {
    let e = u(l.wrap, _),
      t = u(l.direction, _) ?? `row`;
    return (
      e === `wrap` && t === `row` && (t = `grid`),
      (0, h.jsx)(o, {
        ...(i || {}),
        focusable: p,
        "flow-children": t,
        children: g,
      })
    );
  }
  return g;
}
var k = [
  ...d,
  {
    prop: `direction`,
    responsive: !0,
    className: b,
    cssProperty: `--direction`,
  },
  {
    prop: `justify`,
    responsive: !0,
    className: x,
    cssProperty: (e) => [`--justify`, A(e)],
  },
  { prop: `align`, responsive: !0, className: S, cssProperty: `--align` },
  {
    prop: `gap`,
    responsive: !0,
    className: C,
    cssProperty: (e) => [`--gap`, `var(--spacing-${e})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: w,
    cssProperty: (e) => [`--gap-x`, `var(--spacing-${e})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: T,
    cssProperty: (e) => [`--gap-y`, `var(--spacing-${e})`],
  },
  { prop: `wrap`, responsive: !0, className: E, cssProperty: `--wrap` },
  { prop: `inline`, responsive: !0, className: D },
];
function A(e) {
  return /^(between|around|evenly)$/.test(e) ? `space-${e}` : e;
}
export { g as n, v as r, O as t };
