/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, l as r } from "./chunk~01cfc309bf.js";
import { s as i } from "./chunk~2f8c67b4de.js";
import {
  Jr as a,
  Or as o,
  Pc as s,
  as as c,
  fr as l,
  ib as u,
  ns as d,
  ol as f,
} from "./main.js";
var p = e(t()),
  m = `-POP4zTRo6U-`,
  h = `dzdTC1QVCoU-`,
  g = `p3qQHic3po0-`,
  _ = `ryiex66J3pM-`,
  v = n();
function y(e) {
  let {
      title: t,
      tooltip: n,
      getMinimized: a,
      toggleMinimized: c,
      className: l,
      children: u,
      elAdditionalButtons: d,
    } = e,
    p = r(() => a());
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)(`div`, {
        className: s(l, m, g, `SectionTitleHeader`),
        children: [
          (0, v.jsxs)(`div`, {
            className: s(i, `EventEditorTextTitle`),
            children: [t, !!n && (0, v.jsx)(o, { tooltip: n })],
          }),
          (0, v.jsxs)(`div`, {
            className: h,
            children: [
              d,
              (0, v.jsx)(x, { bIsMinimized: p, fnToggleMinimize: c }),
            ],
          }),
        ],
      }),
      !p && (0, v.jsx)(f, { children: u }),
    ],
  });
}
function b(e) {
  let [t, n] = p.useState(!!e.bStartMinimized);
  return (0, v.jsx)(y, {
    ...e,
    getMinimized: () => t,
    toggleMinimized: () => n(!t),
    children: e.children,
  });
}
function x(e) {
  let { bIsMinimized: t, fnToggleMinimize: n } = e;
  return (0, v.jsx)(a, {
    toolTipContent: u(
      t ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`,
    ),
    children: (0, v.jsx)(l, {
      className: _,
      onClick: n,
      children: e.bIsMinimized ? (0, v.jsx)(d, {}) : (0, v.jsx)(c, {}),
    }),
  });
}
export { b as n, x as t };
