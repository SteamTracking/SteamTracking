/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, u as r } from "./libraries.js";
import { s as i } from "./partnereventshared.module.js";
import {
  Jc as a,
  Sc as o,
  Uy as s,
  Wo as c,
  nr as l,
  qo as u,
  vr as d,
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
      getMinimized: s,
      toggleMinimized: c,
      className: l,
      children: u,
      elAdditionalButtons: f,
    } = e,
    _ = r(() => s());
  return (0, g.jsxs)(g.Fragment, {
    children: [
      (0, g.jsxs)(`div`, {
        className: o(l, p, h, `SectionTitleHeader`),
        children: [
          (0, g.jsxs)(`div`, {
            className: o(i, `EventEditorTextTitle`),
            children: [t, !!n && (0, g.jsx)(d, { tooltip: n })],
          }),
          (0, g.jsxs)(`div`, {
            className: m,
            children: [
              f,
              (0, g.jsx)(y, { bIsMinimized: _, fnToggleMinimize: c }),
            ],
          }),
        ],
      }),
      !_ && (0, g.jsx)(a, { children: u }),
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
  return (0, g.jsx)(l, {
    "data-tooltip-text": s(r),
    onClick: n,
    children: e.bIsMinimized ? (0, g.jsx)(c, {}) : (0, g.jsx)(u, {}),
  });
}
export { v as t };
