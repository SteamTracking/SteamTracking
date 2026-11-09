/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { r as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { Uf as r, Vt as i, Wt as a, rn as o, tn as s } from "./main.js";
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
    r = s({ ...n, underline: t, className: l }, y);
  return (0, _.jsx)(a, { ...r });
}
var y = [...i, { prop: `underline`, className: (e) => c[`Underline-${e}`] }];
function b(e) {
  let { underline: t = `auto`, focusable: n, navProps: i, ...a } = e,
    c = r(),
    l = n ?? i?.focusable ?? !!a.onClick,
    d = (0, _.jsx)(`span`, {
      role: `button`,
      ...s({ ...a, underline: t, className: u }, y),
    });
  return c && (l || i)
    ? (0, _.jsx)(o, { ...(i || {}), focusable: l, children: d })
    : d;
}
export { b as n, v as t };
