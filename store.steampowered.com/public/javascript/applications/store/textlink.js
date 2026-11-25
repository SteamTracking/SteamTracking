/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { r as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { Ca as r, Ma as i, Pa as a, ex as o, ya as s } from "./main.js";
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
    a = i({ ...n, underline: t, className: l }, y);
  return (0, _.jsx)(r, { ...a });
}
var y = [...s, { prop: `underline`, className: (e) => c[`Underline-${e}`] }];
function b(e) {
  let { underline: t = `auto`, focusable: n, navProps: r, ...s } = e,
    c = o(),
    l = n ?? r?.focusable ?? !!s.onClick,
    d = (0, _.jsx)(`span`, {
      role: `button`,
      ...i({ ...s, underline: t, className: u }, y),
    });
  return c && (l || r)
    ? (0, _.jsx)(a, { ...(r || {}), focusable: l, children: d })
    : d;
}
export { b as n, v as t };
