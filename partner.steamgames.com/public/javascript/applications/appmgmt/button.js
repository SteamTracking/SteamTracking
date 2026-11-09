/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { R as e, _t as t, kt as n, on as r, rn as i } from "./mobx.esm.js";
import { It as a, u as o } from "./src.js";
import { n as s, t as c } from "./flex.js";
import { n as l, o as u } from "./layout.js";
import { n as d, r as f } from "./variantdefaults.js";
import { t as p } from "./linkbase.js";
n();
var m = r(a(), 1),
  h = i({
    Button: () => g,
    Icon: () => v,
    MinWidth: () => O,
    "Size-1": () => _,
    "Size-2": () => y,
    "Size-3": () => b,
    "Variant-basic": () => x,
    "Variant-dark": () => S,
    "Variant-ghost": () => T,
    "Variant-inverted": () => C,
    "Variant-outline": () => w,
    "Variant-vibrant": () => E,
    Width: () => D,
    default: () => k,
  }),
  g = `Yyx5Rkc0C04-`,
  _ = `_-56FHcFNl2U-`,
  v = `hRuF7XXiT3w-`,
  y = `j8iZOirRLc8-`,
  b = `ZTzpqIMdFCM-`,
  x = `XSeLQJSkxyo-`,
  S = `efbor0Of1bY-`,
  C = `qOJkwUKt2Zo-`,
  w = `BvwOpySHMzk-`,
  T = `oKBOG5g3nvk-`,
  E = `_3PvnjdbEKFQ-`,
  D = `_5M7IKs5LW3Y-`,
  O = `n-Q3jnI7IeY-`,
  k = {
    Button: g,
    "Size-1": `_-56FHcFNl2U-`,
    Icon: v,
    "Size-2": `j8iZOirRLc8-`,
    "Size-3": `ZTzpqIMdFCM-`,
    "Variant-basic": `XSeLQJSkxyo-`,
    "Variant-dark": `efbor0Of1bY-`,
    "Variant-inverted": `qOJkwUKt2Zo-`,
    "Variant-outline": `BvwOpySHMzk-`,
    "Variant-ghost": `oKBOG5g3nvk-`,
    "Variant-vibrant": `_3PvnjdbEKFQ-`,
    Width: D,
    MinWidth: O,
  },
  A = i({
    ChildContainer: () => B,
    LoadingSpinnerAmin: () => M,
    "Size-1": () => N,
    "Size-2": () => P,
    "Size-3": () => F,
    "Size-4": () => I,
    "Size-5": () => L,
    Spinner: () => j,
    "Variant-bright": () => z,
    "Variant-solid": () => R,
    default: () => V,
  }),
  j = `ghKPu7ElHI4-`,
  M = `THS4EmXO7Qo-`,
  N = `_2tFyZDh3n70-`,
  P = `y-F5xF-Ar74-`,
  F = `Fqhcc7xFmsM-`,
  I = `h9zlfqYx76Q-`,
  L = `iTGGFwEa2MQ-`,
  R = `_88ugmg-q8D8-`,
  z = `MKSxe-MWyrs-`,
  B = `n-XnuapupJI-`,
  V = {
    Spinner: j,
    LoadingSpinnerAmin: M,
    "Size-1": `_2tFyZDh3n70-`,
    "Size-2": `y-F5xF-Ar74-`,
    "Size-3": `Fqhcc7xFmsM-`,
    "Size-4": `h9zlfqYx76Q-`,
    "Size-5": `iTGGFwEa2MQ-`,
    "Variant-solid": `_88ugmg-q8D8-`,
    "Variant-bright": `MKSxe-MWyrs-`,
    ChildContainer: B,
  },
  H = t();
function U(e) {
  let {
      size: t = `3`,
      loading: n = !0,
      children: r,
      color: i,
      variant: a,
      ...o
    } = e,
    l = d(`LoadingSpinner`, a);
  return r || !n
    ? (0, H.jsxs)(s, {
        position: `relative`,
        ...o,
        width: `fit-content`,
        children: [
          (0, H.jsx)(`div`, {
            "data-visibility": !n,
            className: B,
            children: r,
          }),
          n &&
            (0, H.jsx)(c, {
              position: `absolute`,
              inset: `0`,
              justify: `center`,
              align: `center`,
              children: (0, H.jsx)(W, { size: t, color: i, variant: l }),
            }),
        ],
      })
    : (0, H.jsx)(W, { size: t, color: i, variant: l, ...o });
}
function W(e) {
  let { className: t, color: n, ...r } = u(e, G);
  return (0, H.jsx)(`div`, {
    "data-accent-color": n,
    className: (0, m.default)(t, j),
    ...r,
  });
}
var G = [
  ...l,
  { prop: `size`, responsive: !0, className: (e) => A[`Size-${e}`] },
  { prop: `variant`, className: (e) => A[`Variant-${e}`] },
];
function K(t) {
  let {
      variant: n,
      size: r = `2`,
      minWidth: i = `fit-content`,
      color: a,
      loading: s,
      children: c,
      onClick: l,
      icon: f,
      focusable: p,
      navProps: h,
      ..._
    } = t,
    v = e(),
    y = s
      ? (0, H.jsx)(U, { size: r, color: a, variant: `bright`, children: c })
      : c,
    b = s ? void 0 : l,
    x = p ?? h?.focusable ?? !!b,
    S = d(`Button`, n),
    C = {
      type: `button`,
      ...u(
        {
          ..._,
          variant: S,
          size: r,
          minWidth: i,
          color: a,
          className: (0, m.default)(g, f && `hRuF7XXiT3w-`),
          onClick: b,
        },
        Y,
      ),
      children: y,
    };
  return v && (x || h)
    ? (0, H.jsx)(o, { ...C, ...(h || {}), focusable: x })
    : (0, H.jsx)(`button`, { ...C });
}
function q(e) {
  let {
      variant: t,
      size: n = `2`,
      minWidth: r = `fit-content`,
      disabled: i,
      icon: a,
      onClick: o,
      ...s
    } = e,
    c = d(`Button`, t),
    l = u(
      {
        onClick: i ? J : o,
        "aria-disabled": i,
        ...s,
        variant: c,
        size: n,
        minWidth: r,
        className: (0, m.default)(g, a && `hRuF7XXiT3w-`, f()),
      },
      Y,
    );
  return (0, H.jsx)(p, { ...l });
}
function J(e) {
  e.preventDefault();
}
var Y = [
    ...l,
    { prop: `size`, responsive: !0, className: (e) => h[`Size-${e}`] },
    { prop: `variant`, className: (e) => h[`Variant-${e}`] },
    { prop: `color`, dataProperty: (e) => [`accent-color`, `${e}`] },
    { prop: `width`, className: D, cssProperty: `--width`, responsive: !0 },
    {
      prop: `minWidth`,
      className: O,
      cssProperty: `--min-width`,
      responsive: !0,
    },
  ],
  X = K,
  Z = q;
export { Z as n, U as r, X as t };
