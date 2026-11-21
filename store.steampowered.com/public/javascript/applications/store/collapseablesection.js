/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, u as r } from "./chunk~01cfc309bf.js";
import { s as i } from "./chunk~2f8c67b4de.js";
import {
  Jr as a,
  Nc as o,
  Or as s,
  al as c,
  fr as l,
  is as u,
  rb as d,
  ts as f,
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
      toggleMinimized: l,
      className: u,
      children: d,
      elAdditionalButtons: f,
    } = e,
    p = r(() => a());
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)(`div`, {
        className: o(u, m, g, `SectionTitleHeader`),
        children: [
          (0, v.jsxs)(`div`, {
            className: o(i, `EventEditorTextTitle`),
            children: [t, !!n && (0, v.jsx)(s, { tooltip: n })],
          }),
          (0, v.jsxs)(`div`, {
            className: h,
            children: [
              f,
              (0, v.jsx)(x, { bIsMinimized: p, fnToggleMinimize: l }),
            ],
          }),
        ],
      }),
      !p && (0, v.jsx)(c, { children: d }),
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
    toolTipContent: d(
      t ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`,
    ),
    children: (0, v.jsx)(l, {
      className: _,
      onClick: n,
      children: e.bIsMinimized ? (0, v.jsx)(f, {}) : (0, v.jsx)(u, {}),
    }),
  });
}
export { b as n, x as t };
