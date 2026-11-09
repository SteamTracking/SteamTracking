/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, N as n, ft as r } from "./libraries.js";
import {
  Sa as i,
  _a as a,
  ba as o,
  ha as s,
  ia as c,
  zb as l,
} from "./main.js";
var u = e(t(), 1),
  d = e(n(), 1),
  f = `DpD67dmxucQ-`,
  p = `A5IqXhyabak-`,
  m = `_5Hx3QdjAWRs-`,
  h = `n7tV1f0-oi8-`,
  g = `Eksm5rKuJc0-`,
  _ = `AdpFURiX9Hs-`,
  v = `_19qKB6cDHVY-`,
  y = `MeE0fNNPy-8-`,
  b = `qLMEP66ZZaI-`,
  x = `cI9FOTX2QCs-`,
  S = `Dag5YbwnV8U-`,
  C = `rj9iYiJwrs4-`,
  w = `mvtLyO3jUk4-`,
  T = `Ptd-YqbMTf8-`,
  E = r();
function D(e) {
  let { as: t = `div`, ref: n, focusable: r, navProps: a, ...s } = e,
    c = l(),
    u = o({ ...s, className: (0, d.default)(f, e.className) }, O),
    p = r ?? a?.focusable ?? !!s.onClick,
    m = (0, E.jsx)(t, { ref: n, ...u });
  return c
    ? (0, E.jsx)(i, {
        "flow-children": `grid`,
        ...(a || {}),
        focusable: p,
        children: m,
      })
    : m;
}
var O = [
  ...a,
  {
    prop: `display`,
    responsive: !0,
    className: p,
    cssProperty: `--grid-display`,
  },
  {
    prop: `columns`,
    responsive: !0,
    className: m,
    cssProperty: `--grid-columns`,
  },
  { prop: `rows`, responsive: !0, className: h, cssProperty: `--grid-rows` },
  {
    prop: `autoColumns`,
    responsive: !0,
    className: g,
    cssProperty: `--grid-auto-columns`,
  },
  {
    prop: `autoRows`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-auto-rows`,
  },
  {
    prop: `autoFlow`,
    responsive: !0,
    className: v,
    cssProperty: `--grid-auto-flow`,
  },
  { prop: `areas`, responsive: !0, className: y, cssProperty: `--grid-areas` },
  { prop: `flow`, responsive: !0, className: b, cssProperty: `--grid-flow` },
  {
    prop: `alignContent`,
    responsive: !0,
    className: x,
    cssProperty: `--grid-align-content`,
  },
  {
    prop: `justifyContent`,
    responsive: !0,
    className: S,
    cssProperty: `--grid-justify-content`,
  },
  {
    prop: `alignItems`,
    responsive: !0,
    className: C,
    cssProperty: `--grid-align-items`,
  },
  {
    prop: `justifyItems`,
    responsive: !0,
    className: w,
    cssProperty: `--grid-justify-items`,
  },
  {
    prop: `gap`,
    responsive: !0,
    className: T,
    cssProperty: (e) => [`--grid-gap`, `var(--spacing-${e})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: T,
    cssProperty: (e) => [`--grid-gap-x`, `var(--spacing-${e})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: T,
    cssProperty: (e) => [`--grid-gap-y`, `var(--spacing-${e})`],
  },
];
function k(e) {
  let {
      children: t,
      hoverContent: n,
      nDelayShowMS: r,
      bTooltipMode: i,
      popoverProps: a,
    } = e,
    [o, l] = (0, u.useState)(!1);
  return (0, E.jsxs)(c.Root, {
    open: o,
    onOpenChange: l,
    interactions: {
      hover: (e) => {
        let t = { ...e, delay: { open: r, close: 0 } };
        return i && (t = { ...t, handleClose: null }), t;
      },
    },
    presentation: `anchor`,
    ...a,
    children: [
      (0, E.jsx)(c.Anchor, { children: t }),
      (0, E.jsx)(c.Positioner, { children: (0, E.jsx)(s, { children: n }) }),
    ],
  });
}
export { D as n, k as t };
