/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  in as t,
  sn as n,
  vt as r,
  z as i,
} from "./chunk~de7f2df91c.js";
import { Pt as a, c as o } from "./chunk~25a6634263.js";
import { n as s, t as c } from "./chunk~971d501580.js";
import { n as l, o as u } from "./chunk~5f339e9a5f.js";
import { a as d, i as f, r as p } from "./chunk~a292304e38.js";
import { t as m } from "./chunk~b066ecd357.js";
e();
var h = n(a(), 1),
  g = t({
    Button: () => _,
    Icon: () => y,
    MinWidth: () => k,
    "Size-1": () => v,
    "Size-2": () => b,
    "Size-3": () => x,
    "Variant-basic": () => S,
    "Variant-dark": () => C,
    "Variant-ghost": () => E,
    "Variant-inverted": () => w,
    "Variant-outline": () => T,
    "Variant-vibrant": () => D,
    Width: () => O,
    default: () => A,
  }),
  _ = `Yyx5Rkc0C04-`,
  v = `_-56FHcFNl2U-`,
  y = `hRuF7XXiT3w-`,
  b = `j8iZOirRLc8-`,
  x = `ZTzpqIMdFCM-`,
  S = `XSeLQJSkxyo-`,
  C = `efbor0Of1bY-`,
  w = `qOJkwUKt2Zo-`,
  T = `BvwOpySHMzk-`,
  E = `oKBOG5g3nvk-`,
  D = `_3PvnjdbEKFQ-`,
  O = `_5M7IKs5LW3Y-`,
  k = `n-Q3jnI7IeY-`,
  A = {
    Button: _,
    "Size-1": `_-56FHcFNl2U-`,
    Icon: y,
    "Size-2": `j8iZOirRLc8-`,
    "Size-3": `ZTzpqIMdFCM-`,
    "Variant-basic": `XSeLQJSkxyo-`,
    "Variant-dark": `efbor0Of1bY-`,
    "Variant-inverted": `qOJkwUKt2Zo-`,
    "Variant-outline": `BvwOpySHMzk-`,
    "Variant-ghost": `oKBOG5g3nvk-`,
    "Variant-vibrant": `_3PvnjdbEKFQ-`,
    Width: O,
    MinWidth: k,
  },
  j = t({
    ChildContainer: () => V,
    LoadingSpinnerAmin: () => N,
    "Size-1": () => P,
    "Size-2": () => F,
    "Size-3": () => I,
    "Size-4": () => L,
    "Size-5": () => R,
    Spinner: () => M,
    "Variant-bright": () => B,
    "Variant-solid": () => z,
    default: () => H,
  }),
  M = `ghKPu7ElHI4-`,
  N = `THS4EmXO7Qo-`,
  P = `_2tFyZDh3n70-`,
  F = `y-F5xF-Ar74-`,
  I = `Fqhcc7xFmsM-`,
  L = `h9zlfqYx76Q-`,
  R = `iTGGFwEa2MQ-`,
  z = `_88ugmg-q8D8-`,
  B = `MKSxe-MWyrs-`,
  V = `n-XnuapupJI-`,
  H = {
    Spinner: M,
    LoadingSpinnerAmin: N,
    "Size-1": `_2tFyZDh3n70-`,
    "Size-2": `y-F5xF-Ar74-`,
    "Size-3": `Fqhcc7xFmsM-`,
    "Size-4": `h9zlfqYx76Q-`,
    "Size-5": `iTGGFwEa2MQ-`,
    "Variant-solid": `_88ugmg-q8D8-`,
    "Variant-bright": `MKSxe-MWyrs-`,
    ChildContainer: V,
  },
  U = r();
function W(e) {
  let {
      size: t = `3`,
      loading: n = !0,
      children: r,
      color: i,
      variant: a,
      ...o
    } = e,
    l = f(`LoadingSpinner`, a);
  return r || !n
    ? (0, U.jsxs)(s, {
        position: `relative`,
        ...o,
        width: `fit-content`,
        children: [
          (0, U.jsx)(`div`, {
            "data-visibility": !n,
            className: V,
            children: r,
          }),
          n &&
            (0, U.jsx)(c, {
              position: `absolute`,
              inset: `0`,
              justify: `center`,
              align: `center`,
              children: (0, U.jsx)(G, { size: t, color: i, variant: l }),
            }),
        ],
      })
    : (0, U.jsx)(G, { size: t, color: i, variant: l, ...o });
}
function G(e) {
  let { className: t, color: n, ...r } = u(e, K);
  return (0, U.jsx)(`div`, {
    "data-accent-color": n,
    className: (0, h.default)(t, M),
    ...r,
  });
}
var K = [
  ...l,
  { prop: `size`, responsive: !0, className: (e) => j[`Size-${e}`] },
  { prop: `variant`, className: (e) => j[`Variant-${e}`] },
];
function q(e) {
  let {
      variant: t,
      size: n,
      minWidth: r = `fit-content`,
      color: a,
      loading: s,
      children: c,
      onClick: l,
      icon: d,
      focusable: m,
      navProps: g,
      ...v
    } = e,
    y = i(),
    b = p(n),
    x = s
      ? (0, U.jsx)(W, { size: b, color: a, variant: `bright`, children: c })
      : c,
    S = s ? void 0 : l,
    C = m ?? g?.focusable ?? !!S,
    w = f(`Button`, t),
    T = {
      type: `button`,
      ...u(
        {
          ...v,
          variant: w,
          size: b,
          minWidth: r,
          color: a,
          className: (0, h.default)(_, d && `hRuF7XXiT3w-`),
          onClick: S,
        },
        X,
      ),
      children: x,
    };
  return y && (C || g)
    ? (0, U.jsx)(o, { ...T, ...(g || {}), focusable: C })
    : (0, U.jsx)(`button`, { ...T });
}
function J(e) {
  let {
      variant: t,
      size: n,
      minWidth: r = `fit-content`,
      disabled: i,
      icon: a,
      onClick: o,
      ...s
    } = e,
    c = f(`Button`, t),
    l = p(n),
    g = u(
      {
        onClick: i ? Y : o,
        "aria-disabled": i,
        ...s,
        variant: c,
        size: l,
        minWidth: r,
        className: (0, h.default)(_, a && `hRuF7XXiT3w-`, d()),
      },
      X,
    );
  return (0, U.jsx)(m, { ...g });
}
function Y(e) {
  e.preventDefault();
}
var X = [
    ...l,
    { prop: `size`, responsive: !0, className: (e) => g[`Size-${e}`] },
    { prop: `variant`, className: (e) => g[`Variant-${e}`] },
    { prop: `color`, dataProperty: (e) => [`accent-color`, `${e}`] },
    { prop: `width`, className: O, cssProperty: `--width`, responsive: !0 },
    {
      prop: `minWidth`,
      className: k,
      cssProperty: `--min-width`,
      responsive: !0,
    },
  ],
  Z = q,
  Q = J;
export { Q as n, W as r, Z as t };
