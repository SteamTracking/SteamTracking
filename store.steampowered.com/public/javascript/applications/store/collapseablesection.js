/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, u as r } from "./chunk~01cfc309bf.js";
import { s as i } from "./chunk~2f8c67b4de.js";
import {
  Br as a,
  Jy as o,
  Ko as s,
  Xc as c,
  Yo as l,
  ar as u,
  wc as d,
  xr as f,
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
      toggleMinimized: o,
      className: s,
      children: l,
      elAdditionalButtons: u,
    } = e,
    p = r(() => a());
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)(`div`, {
        className: d(s, m, g, `SectionTitleHeader`),
        children: [
          (0, v.jsxs)(`div`, {
            className: d(i, `EventEditorTextTitle`),
            children: [t, !!n && (0, v.jsx)(f, { tooltip: n })],
          }),
          (0, v.jsxs)(`div`, {
            className: h,
            children: [
              u,
              (0, v.jsx)(x, { bIsMinimized: p, fnToggleMinimize: o }),
            ],
          }),
        ],
      }),
      !p && (0, v.jsx)(c, { children: l }),
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
    toolTipContent: o(
      t ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`,
    ),
    children: (0, v.jsx)(u, {
      className: _,
      onClick: n,
      children: e.bIsMinimized ? (0, v.jsx)(s, {}) : (0, v.jsx)(l, {}),
    }),
  });
}
export { b as n, x as t };
