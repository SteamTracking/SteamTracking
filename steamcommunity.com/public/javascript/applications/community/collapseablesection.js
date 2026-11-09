/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n, w as r } from "./libraries.js";
import {
  Jc as i,
  Yo as a,
  Zd as o,
  ms as s,
  nl as c,
  wu as l,
  xu as u,
  yn as d,
} from "./main.js";
var f = e(t()),
  p = `-POP4zTRo6U-`,
  m = `dzdTC1QVCoU-`,
  h = `p3qQHic3po0-`,
  g = n();
function _(e) {
  let {
      title: t,
      tooltip: n,
      getMinimized: i,
      toggleMinimized: a,
      className: o,
      children: c,
      elAdditionalButtons: f,
    } = e,
    _ = r(() => i());
  return (0, g.jsxs)(g.Fragment, {
    children: [
      (0, g.jsxs)(`div`, {
        className: u(o, p, h, `SectionTitleHeader`),
        children: [
          (0, g.jsxs)(`div`, {
            className: u(d, `EventEditorTextTitle`),
            children: [t, !!n && (0, g.jsx)(s, { tooltip: n })],
          }),
          (0, g.jsxs)(`div`, {
            className: m,
            children: [
              f,
              (0, g.jsx)(y, { bIsMinimized: _, fnToggleMinimize: a }),
            ],
          }),
        ],
      }),
      !_ && (0, g.jsx)(l, { children: c }),
    ],
  });
}
function v(e) {
  let [t, n] = f.useState(!!e.bStartMinimized);
  return (0, g.jsx)(_, {
    ...e,
    getMinimized: () => t,
    toggleMinimized: () => n(!t),
    children: e.children,
  });
}
function y(e) {
  let { bIsMinimized: t, fnToggleMinimize: n } = e,
    r = t ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`;
  return (0, g.jsx)(a, {
    "data-tooltip-text": o(r),
    onClick: n,
    children: e.bIsMinimized ? (0, g.jsx)(i, {}) : (0, g.jsx)(c, {}),
  });
}
export { _ as n, v as r, y as t };
