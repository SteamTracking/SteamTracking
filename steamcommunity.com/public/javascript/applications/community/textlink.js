/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { r as e } from "./chunk~f025431ab0.js";
import { Pt as t, at as n } from "./chunk~01cfc309bf.js";
import { Ft as r, Jt as i, Kt as a, Mt as o, Wf as s } from "./main.js";
t();
var c = e({
    TextLink: () => l,
    TextLinkButton: () => u,
    Truncate: () => d,
    "Underline-always": () => f,
    "Underline-auto": () => m,
    "Underline-hover": () => h,
    "Underline-never": () => p,
    default: () => g,
  }),
  l = `BpJ261oKuoo-`,
  u = `I5odaKKuZ2g-`,
  d = `h0t554qNPT4-`,
  f = `_82NIbwX6q7Y-`,
  p = `_3HTR2AjbBb0-`,
  m = `V-l7vWhrqVo-`,
  h = `Uv-RqseBiL0-`,
  g = {
    TextLink: l,
    TextLinkButton: u,
    Truncate: d,
    "Underline-always": `_82NIbwX6q7Y-`,
    "Underline-never": `_3HTR2AjbBb0-`,
    "Underline-auto": `V-l7vWhrqVo-`,
    "Underline-hover": `Uv-RqseBiL0-`,
  },
  _ = n();
function v(e) {
  let { underline: t = `auto`, ...n } = e,
    i = a({ ...n, underline: t, className: l }, y);
  return (0, _.jsx)(r, { ...i });
}
var y = [...o, { prop: `underline`, className: (e) => c[`Underline-${e}`] }];
function b(e) {
  let { underline: t = `auto`, focusable: n, navProps: r, ...o } = e,
    c = s(),
    l = n ?? r?.focusable ?? !!o.onClick,
    d = (0, _.jsx)(`span`, {
      role: `button`,
      ...a({ ...o, underline: t, className: u }, y),
    });
  return c && (l || r)
    ? (0, _.jsx)(i, { ...(r || {}), focusable: l, children: d })
    : d;
}
export { b as n, v as t };
