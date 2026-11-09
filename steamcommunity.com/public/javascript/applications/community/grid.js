/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { D as t, Pt as n, ot as r } from "./libraries.js";
import { Qt as i, Uf as a, rn as o, tn as s } from "./main.js";
n();
var c = e(t(), 1),
  l = `DpD67dmxucQ-`,
  u = `A5IqXhyabak-`,
  d = `_5Hx3QdjAWRs-`,
  f = `n7tV1f0-oi8-`,
  p = `Eksm5rKuJc0-`,
  m = `AdpFURiX9Hs-`,
  h = `_19qKB6cDHVY-`,
  g = `MeE0fNNPy-8-`,
  _ = `qLMEP66ZZaI-`,
  v = `cI9FOTX2QCs-`,
  y = `Dag5YbwnV8U-`,
  b = `rj9iYiJwrs4-`,
  x = `mvtLyO3jUk4-`,
  S = `Ptd-YqbMTf8-`,
  C = r();
function w(e) {
  let { as: t = `div`, ref: n, focusable: r, navProps: i, ...u } = e,
    d = a(),
    f = s({ ...u, className: (0, c.default)(l, e.className) }, T),
    p = r ?? i?.focusable ?? !!u.onClick,
    m = (0, C.jsx)(t, { ref: n, ...f });
  return d
    ? (0, C.jsx)(o, {
        "flow-children": `grid`,
        ...(i || {}),
        focusable: p,
        children: m,
      })
    : m;
}
var T = [
  ...i,
  {
    prop: `display`,
    responsive: !0,
    className: u,
    cssProperty: `--grid-display`,
  },
  {
    prop: `columns`,
    responsive: !0,
    className: d,
    cssProperty: `--grid-columns`,
  },
  { prop: `rows`, responsive: !0, className: f, cssProperty: `--grid-rows` },
  {
    prop: `autoColumns`,
    responsive: !0,
    className: p,
    cssProperty: `--grid-auto-columns`,
  },
  {
    prop: `autoRows`,
    responsive: !0,
    className: m,
    cssProperty: `--grid-auto-rows`,
  },
  {
    prop: `autoFlow`,
    responsive: !0,
    className: h,
    cssProperty: `--grid-auto-flow`,
  },
  { prop: `areas`, responsive: !0, className: g, cssProperty: `--grid-areas` },
  { prop: `flow`, responsive: !0, className: _, cssProperty: `--grid-flow` },
  {
    prop: `alignContent`,
    responsive: !0,
    className: v,
    cssProperty: `--grid-align-content`,
  },
  {
    prop: `justifyContent`,
    responsive: !0,
    className: y,
    cssProperty: `--grid-justify-content`,
  },
  {
    prop: `alignItems`,
    responsive: !0,
    className: b,
    cssProperty: `--grid-align-items`,
  },
  {
    prop: `justifyItems`,
    responsive: !0,
    className: x,
    cssProperty: `--grid-justify-items`,
  },
  {
    prop: `gap`,
    responsive: !0,
    className: S,
    cssProperty: (e) => [`--grid-gap`, `var(--spacing-${e})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: S,
    cssProperty: (e) => [`--grid-gap-x`, `var(--spacing-${e})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: S,
    cssProperty: (e) => [`--grid-gap-y`, `var(--spacing-${e})`],
  },
];
export { w as t };
