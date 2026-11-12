/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, in as t, sn as n, vt as r } from "./chunk~de7f2df91c.js";
import { Pt as i } from "./chunk~25a6634263.js";
import { n as a, o } from "./chunk~5f339e9a5f.js";
import { a as s } from "./chunk~a292304e38.js";
import { t as c } from "./chunk~a58194c5d9.js";
var l = n(e(), 1),
  u = t({
    Heading: () => d,
    "HeadingSize-1": () => f,
    "HeadingSize-2": () => p,
    "HeadingSize-3": () => m,
    "HeadingSize-4": () => h,
    "HeadingSize-5": () => g,
    "HeadingSize-6": () => _,
    "HeadingSize-7": () => v,
    "HeadingSize-8": () => y,
    "HeadingSize-9": () => b,
    default: () => x,
  }),
  d = `CYJ1C2fZ7fQ-`,
  f = `_2b-MxT8bm78-`,
  p = `W0Lv9H8NDtc-`,
  m = `sHc2NgynHLg-`,
  h = `cR6P2y5vl7Q-`,
  g = `_2hFrLV1TIRs-`,
  _ = `CGvKhlGPwmI-`,
  v = `iPtXWzTzC0Y-`,
  y = `aCFOm4WcJxs-`,
  b = `ovGroIOnmJM-`,
  x = {
    Heading: d,
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
  S = r(),
  C = l.createContext({ depth: 0 });
function w() {
  return (0, l.useContext)(C).depth;
}
var T = n(i(), 1);
function E(e) {
  let { level: t = `auto`, className: n, color: r } = e,
    i = O(t, w());
  return (0, S.jsx)(i, {
    ...o({ ...e, className: (0, T.default)(s(), d, n) }, D),
  });
}
var D = [
  ...c,
  ...a,
  { prop: `size`, responsive: !0, className: (e) => u[`HeadingSize-${e}`] },
];
function O(e, t) {
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
export { E as t };
