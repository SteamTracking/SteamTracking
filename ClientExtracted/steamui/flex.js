import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Pn as t,
  eo as n,
  rt as r,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import {
  Ct as i,
  D as a,
  E as o,
  T as s,
  b as c,
  st as l,
  x as u,
  z as d,
} from "./chunk~fac4c69429.js?contenthash=Coq9a0Uf";
import { t as f } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { a as p, f as m } from "./chunk~a292304e38.js?contenthash=CzbXsf2A";
import {
  n as h,
  o as g,
  r as _,
  s as v,
  t as y,
} from "./chunk~5f339e9a5f.js?contenthash=mQIjrg3y";
var b = `_3HgSSqEdwS4-`,
  x = e(n(), 1),
  S = f();
function C(e) {
  let { children: t, "flow-children": n, ...i } = e,
    { gamepadEvents: f } = u(e);
  (n && (i.layout = d(n)),
    f.onOKButton ||
      (`onClick` in t.props && t.props.onClick && (f.onOKButton = c)));
  let p;
  i.focusable && (p = t.props.tabIndex || 0);
  let { ref: m, node: h } = o(i);
  l(f, m);
  let g = a(h),
    _ = r(m, t.props?.ref, g);
  return (0, S.jsx)(s.Provider, {
    value: h,
    children: x.cloneElement(t, { ...t.props, ref: _, tabIndex: p }),
  });
}
var w = e(i(), 1);
function T(e) {
  let { as: n = `div`, focusable: r, navProps: i, ref: a, ...o } = e,
    s = t(),
    c = g({ ...o, className: (0, w.default)(b, p(), e.className) }, E),
    l = r ?? i?.focusable ?? !!o.onClick,
    u = (0, S.jsx)(n, { ref: a, ...c });
  return s && (l || i)
    ? (0, S.jsx)(C, { ...(i || {}), focusable: l, children: u })
    : u;
}
var E = y;
function D(e) {
  return _(e, h);
}
var O = `PmISXgz3FoQ-`,
  k = `Bj8vGJI7AGo-`,
  A = `_2AVS3LuARvU-`,
  j = `rC6xro2ZWbk-`,
  M = `oln6i1TGpO0-`,
  N = `xTWnfrOQ1MU-`,
  P = `h31r9FtdgH0-`,
  F = `AwByPYmuf2E-`,
  I = `rPm-B0T-Plk-`;
function L(e) {
  let { as: n = `div`, focusable: r, navProps: i, ref: a, ...o } = e,
    s = t(),
    c = g({ ...o, className: (0, w.default)(e.className, O) }, R),
    l = r ?? i?.focusable ?? !!o.onClick,
    u = (0, S.jsx)(n, { ref: a, ...c }),
    d = m();
  if (s) {
    let e = v(o.wrap, d),
      t = v(o.direction, d) ?? `row`;
    return (
      e === `wrap` && t === `row` && (t = `grid`),
      (0, S.jsx)(C, {
        ...(i || {}),
        focusable: l,
        "flow-children": t,
        children: u,
      })
    );
  }
  return u;
}
var R = [
  ...y,
  {
    prop: `direction`,
    responsive: !0,
    className: k,
    cssProperty: `--direction`,
  },
  {
    prop: `justify`,
    responsive: !0,
    className: A,
    cssProperty: (e) => [`--justify`, z(e)],
  },
  { prop: `align`, responsive: !0, className: j, cssProperty: `--align` },
  {
    prop: `gap`,
    responsive: !0,
    className: M,
    cssProperty: (e) => [`--gap`, `var(--spacing-${e})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: N,
    cssProperty: (e) => [`--gap-x`, `var(--spacing-${e})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: P,
    cssProperty: (e) => [`--gap-y`, `var(--spacing-${e})`],
  },
  { prop: `wrap`, responsive: !0, className: F, cssProperty: `--wrap` },
  { prop: `inline`, responsive: !0, className: I },
];
function z(e) {
  return /^(between|around|evenly)$/.test(e) ? `space-${e}` : e;
}
export { C as i, T as n, D as r, L as t };
