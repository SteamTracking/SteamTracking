/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, in as t, vt as n, z as r } from "./chunk~de7f2df91c.js";
import { t as i } from "./chunk~4cdb5412a1.js";
import { o as a } from "./chunk~5f339e9a5f.js";
import { t as o } from "./chunk~b066ecd357.js";
import { r as s } from "./chunk~a58194c5d9.js";
e();
var c = t({
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
    r = a({ ...n, underline: t, className: l }, y);
  return (0, _.jsx)(o, { ...r });
}
var y = [...s, { prop: `underline`, className: (e) => c[`Underline-${e}`] }];
function b(e) {
  let { underline: t = `auto`, focusable: n, navProps: o, ...s } = e,
    c = r(),
    l = n ?? o?.focusable ?? !!s.onClick,
    d = (0, _.jsx)(`span`, {
      role: `button`,
      ...a({ ...s, underline: t, className: u }, y),
    });
  return c && (l || o)
    ? (0, _.jsx)(i, { ...(o || {}), focusable: l, children: d })
    : d;
}
export { b as n, v as t };
