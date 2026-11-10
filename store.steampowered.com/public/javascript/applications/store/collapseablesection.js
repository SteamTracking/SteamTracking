/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, u as r } from "./libraries.js";
import { s as i } from "./partnereventshared.module.js";
import {
  Cc as a,
  Go as o,
  Jo as s,
  Wy as c,
  Yc as l,
  rr as u,
  yr as d,
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
      getMinimized: o,
      toggleMinimized: s,
      className: c,
      children: u,
      elAdditionalButtons: f,
    } = e,
    _ = r(() => o());
  return (0, g.jsxs)(g.Fragment, {
    children: [
      (0, g.jsxs)(`div`, {
        className: a(c, p, h, `SectionTitleHeader`),
        children: [
          (0, g.jsxs)(`div`, {
            className: a(i, `EventEditorTextTitle`),
            children: [t, !!n && (0, g.jsx)(d, { tooltip: n })],
          }),
          (0, g.jsxs)(`div`, {
            className: m,
            children: [
              f,
              (0, g.jsx)(y, { bIsMinimized: _, fnToggleMinimize: s }),
            ],
          }),
        ],
      }),
      !_ && (0, g.jsx)(l, { children: u }),
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
  return (0, g.jsx)(u, {
    "data-tooltip-text": c(r),
    onClick: n,
    children: e.bIsMinimized ? (0, g.jsx)(o, {}) : (0, g.jsx)(s, {}),
  });
}
export { v as t };
