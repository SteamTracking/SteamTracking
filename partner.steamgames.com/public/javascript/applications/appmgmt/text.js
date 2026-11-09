/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n, rn as r } from "./mobx.esm.js";
import { It as i } from "./src.js";
import { i as a, n as o, o as s, s as c } from "./layout.js";
t();
var l = n(i(), 1),
  u = r({
    LineClamp: () => w,
    Text: () => d,
    TextAlign: () => C,
    "TextSize-1": () => p,
    "TextSize-2": () => m,
    "TextSize-3": () => h,
    "TextSize-4": () => g,
    "TextSize-5": () => _,
    "TextSize-6": () => v,
    "TextSize-7": () => y,
    "TextSize-8": () => b,
    "TextSize-9": () => x,
    TextWeight: () => S,
    Truncate: () => f,
    WhiteSpace: () => T,
    default: () => E,
  }),
  d = `oDEFTUumdv8-`,
  f = `Ic04FuZ-TKg-`,
  p = `kvJw29bpEN0-`,
  m = `GeWSoC6e568-`,
  h = `La-YYLx2qY0-`,
  g = `RIS7imY3rYQ-`,
  _ = `m3n9feiG5Z0-`,
  v = `FTwvzjX-DeA-`,
  y = `WFGm5WdD-9M-`,
  b = `_8QB4wGa6kZw-`,
  x = `RKf2rBMhi2M-`,
  S = `onLSYXBtvEU-`,
  C = `NQUG6IKBYxM-`,
  w = `PKFlRSq6vqk-`,
  T = `ZRy341OHOcI-`,
  E = {
    Text: d,
    Truncate: f,
    "TextSize-1": `kvJw29bpEN0-`,
    "TextSize-2": `GeWSoC6e568-`,
    "TextSize-3": `La-YYLx2qY0-`,
    "TextSize-4": `RIS7imY3rYQ-`,
    "TextSize-5": `m3n9feiG5Z0-`,
    "TextSize-6": `FTwvzjX-DeA-`,
    "TextSize-7": `WFGm5WdD-9M-`,
    "TextSize-8": `_8QB4wGa6kZw-`,
    "TextSize-9": `RKf2rBMhi2M-`,
    TextWeight: S,
    TextAlign: C,
    LineClamp: w,
    WhiteSpace: T,
  },
  D = e();
function O(e) {
  let { as: t = `span`, ref: n, className: r, ...i } = e;
  return (0, D.jsx)(t, {
    ref: n,
    ...s({ ...i, className: (0, l.default)(d, r) }, A),
  });
}
var k = [
    {
      prop: `weight`,
      responsive: !0,
      className: S,
      cssProperty: (e) => [`--text-weight`, `var(--font-weight-${e})`],
    },
    {
      prop: `align`,
      responsive: !0,
      className: C,
      cssProperty: `--text-align`,
    },
    {
      prop: `color`,
      responsive: !0,
      cssProperty: (e, t, n) => [
        `--text-color`,
        a(e, c(t.contrast, n) ?? `body`),
      ],
    },
    {
      prop: `contrast`,
      responsive: !0,
      cssProperty: (e, t, n) => [
        `--text-color`,
        a(c(t.color, n) ?? `text-body`, e),
      ],
    },
    { prop: `truncate`, className: f },
    {
      prop: `lineClamp`,
      responsive: !0,
      className: w,
      cssProperty: `--line-clamp`,
    },
    { prop: `whiteSpace`, className: T, cssProperty: `--white-space` },
  ],
  A = [
    ...k,
    ...o,
    { prop: `size`, responsive: !0, className: (e) => u[`TextSize-${e}`] },
  ];
export { O as n, A as r, k as t };
