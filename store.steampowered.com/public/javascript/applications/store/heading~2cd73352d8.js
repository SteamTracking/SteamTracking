/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import { Lt as n, N as r, ft as i } from "./chunk~01cfc309bf.js";
import {
  Sa as a,
  Wb as o,
  _a as s,
  aa as c,
  ba as l,
  sa as u,
  va as d,
  wa as f,
  ya as p,
} from "./main.js";
var m = e(n(), 1),
  h = t({
    Heading: () => g,
    "HeadingSize-1": () => _,
    "HeadingSize-2": () => v,
    "HeadingSize-3": () => y,
    "HeadingSize-4": () => b,
    "HeadingSize-5": () => x,
    "HeadingSize-6": () => S,
    "HeadingSize-7": () => C,
    "HeadingSize-8": () => w,
    "HeadingSize-9": () => T,
    default: () => E,
  }),
  g = `CYJ1C2fZ7fQ-`,
  _ = `_2b-MxT8bm78-`,
  v = `W0Lv9H8NDtc-`,
  y = `sHc2NgynHLg-`,
  b = `cR6P2y5vl7Q-`,
  x = `_2hFrLV1TIRs-`,
  S = `CGvKhlGPwmI-`,
  C = `iPtXWzTzC0Y-`,
  w = `aCFOm4WcJxs-`,
  T = `ovGroIOnmJM-`,
  E = {
    Heading: g,
    "HeadingSize-1": `_2b-MxT8bm78-`,
    "HeadingSize-2": `W0Lv9H8NDtc-`,
    "HeadingSize-3": `sHc2NgynHLg-`,
    "HeadingSize-4": `cR6P2y5vl7Q-`,
    "HeadingSize-5": `_2hFrLV1TIRs-`,
    "HeadingSize-6": `CGvKhlGPwmI-`,
    "HeadingSize-7": `iPtXWzTzC0Y-`,
    "HeadingSize-8": `aCFOm4WcJxs-`,
    "HeadingSize-9": `ovGroIOnmJM-`,
  },
  D = i(),
  O = m.createContext({ depth: 0 });
function k() {
  return (0, m.useContext)(O).depth;
}
var A = e(r(), 1);
function j(e) {
  let { level: t = `auto`, className: n, color: r } = e,
    i = N(t, k());
  return (0, D.jsx)(i, {
    ...a({ ...e, className: (0, A.default)(d(), g, n) }, M),
  });
}
var M = [
  ...u,
  ...l,
  { prop: `size`, responsive: !0, className: (e) => h[`HeadingSize-${e}`] },
];
function N(e, t) {
  if (e === `auto` && t === 0) return `h1`;
  let n = e === `auto` ? t.toString() : e;
  return /^[1-6]$/.test(n)
    ? `h` + n
    : e === `auto`
      ? (console.error(`<Section> nesting has exceeded "h6" for headings.`),
        `h6`)
      : (console.error(`Attempt to render invalid heading level, "${n}".`),
        `h1`);
}
var P = `DpD67dmxucQ-`,
  F = `A5IqXhyabak-`,
  I = `_5Hx3QdjAWRs-`,
  L = `n7tV1f0-oi8-`,
  R = `Eksm5rKuJc0-`,
  z = `AdpFURiX9Hs-`,
  B = `_19qKB6cDHVY-`,
  V = `MeE0fNNPy-8-`,
  H = `qLMEP66ZZaI-`,
  U = `cI9FOTX2QCs-`,
  W = `Dag5YbwnV8U-`,
  G = `rj9iYiJwrs4-`,
  K = `mvtLyO3jUk4-`,
  q = `Ptd-YqbMTf8-`;
function J(e) {
  let { as: t = `div`, ref: n, focusable: r, navProps: i, ...s } = e,
    c = o(),
    l = a({ ...s, className: (0, A.default)(P, e.className) }, Y),
    u = r ?? i?.focusable ?? !!s.onClick,
    d = (0, D.jsx)(t, { ref: n, ...l });
  return c
    ? (0, D.jsx)(f, {
        "flow-children": `grid`,
        ...(i || {}),
        focusable: u,
        children: d,
      })
    : d;
}
var Y = [
  ...p,
  {
    prop: `display`,
    responsive: !0,
    className: F,
    cssProperty: `--grid-display`,
  },
  {
    prop: `columns`,
    responsive: !0,
    className: I,
    cssProperty: `--grid-columns`,
  },
  { prop: `rows`, responsive: !0, className: L, cssProperty: `--grid-rows` },
  {
    prop: `autoColumns`,
    responsive: !0,
    className: R,
    cssProperty: `--grid-auto-columns`,
  },
  {
    prop: `autoRows`,
    responsive: !0,
    className: z,
    cssProperty: `--grid-auto-rows`,
  },
  {
    prop: `autoFlow`,
    responsive: !0,
    className: B,
    cssProperty: `--grid-auto-flow`,
  },
  { prop: `areas`, responsive: !0, className: V, cssProperty: `--grid-areas` },
  { prop: `flow`, responsive: !0, className: H, cssProperty: `--grid-flow` },
  {
    prop: `alignContent`,
    responsive: !0,
    className: U,
    cssProperty: `--grid-align-content`,
  },
  {
    prop: `justifyContent`,
    responsive: !0,
    className: W,
    cssProperty: `--grid-justify-content`,
  },
  {
    prop: `alignItems`,
    responsive: !0,
    className: G,
    cssProperty: `--grid-align-items`,
  },
  {
    prop: `justifyItems`,
    responsive: !0,
    className: K,
    cssProperty: `--grid-justify-items`,
  },
  {
    prop: `gap`,
    responsive: !0,
    className: q,
    cssProperty: (e) => [`--grid-gap`, `var(--spacing-${e})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: q,
    cssProperty: (e) => [`--grid-gap-x`, `var(--spacing-${e})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: q,
    cssProperty: (e) => [`--grid-gap-y`, `var(--spacing-${e})`],
  },
];
function X(e) {
  let {
      children: t,
      hoverContent: n,
      nDelayShowMS: r,
      bTooltipMode: i,
      popoverProps: a,
    } = e,
    [o, l] = (0, m.useState)(!1);
  return (0, D.jsxs)(c.Root, {
    open: o,
    onOpenChange: l,
    interactions: {
      hover: (e) => {
        let t = { ...e, delay: { open: r, close: 0 } };
        return (i && (t = { ...t, handleClose: null }), t);
      },
    },
    presentation: `anchor`,
    ...a,
    children: [
      (0, D.jsx)(c.Anchor, { children: t }),
      (0, D.jsx)(c.Positioner, { children: (0, D.jsx)(s, { children: n }) }),
    ],
  });
}
export { J as n, j as r, X as t };
