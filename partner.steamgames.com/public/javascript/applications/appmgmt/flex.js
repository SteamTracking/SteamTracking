/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { R as e, _t as t, kt as n, on as r } from "./mobx.esm.js";
import { It as i } from "./src.js";
import { i as a } from "./formfactor.js";
import { t as o } from "./focuselement.js";
import { n as s, o as c, r as l, s as u, t as d } from "./layout.js";
import { r as f } from "./variantdefaults.js";
var p = `_3HgSSqEdwS4-`;
n();
var m = r(i(), 1),
  h = t();
function g(t) {
  let { as: n = `div`, focusable: r, navProps: i, ref: a, ...s } = t,
    l = e(),
    u = c({ ...s, className: (0, m.default)(p, f(), t.className) }, _),
    d = r ?? i?.focusable ?? !!s.onClick,
    g = (0, h.jsx)(n, { ref: a, ...u });
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
function O(t) {
  let { as: n = `div`, focusable: r, navProps: i, ref: s, ...l } = t,
    d = e(),
    f = c({ ...l, className: (0, m.default)(t.className, y) }, k),
    p = r ?? i?.focusable ?? !!l.onClick,
    g = (0, h.jsx)(n, { ref: s, ...f }),
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
