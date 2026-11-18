/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { r as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { $t as r, Rt as i, Vt as a, Xf as o, tn as s } from "./main.js";
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
    i = r({ ...n, underline: t, className: l }, y);
  return (0, _.jsx)(a, { ...i });
}
var y = [...i, { prop: `underline`, className: (e) => c[`Underline-${e}`] }];
function b(e) {
  let { underline: t = `auto`, focusable: n, navProps: i, ...a } = e,
    c = o(),
    l = n ?? i?.focusable ?? !!a.onClick,
    d = (0, _.jsx)(`span`, {
      role: `button`,
      ...r({ ...a, underline: t, className: u }, y),
    });
  return c && (l || i)
    ? (0, _.jsx)(s, { ...(i || {}), focusable: l, children: d })
    : d;
}
export { b as n, v as t };
