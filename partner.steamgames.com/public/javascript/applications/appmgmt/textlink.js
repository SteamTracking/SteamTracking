/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { R as e, _t as t, kt as n, rn as r } from "./mobx.esm.js";
import { t as i } from "./focuselement.js";
import { o as a } from "./layout.js";
import { t as o } from "./linkbase.js";
import { r as s } from "./text.js";
n();
var c = r({
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
  _ = t();
function v(e) {
  let { underline: t = `auto`, ...n } = e,
    r = a({ ...n, underline: t, className: l }, y);
  return (0, _.jsx)(o, { ...r });
}
var y = [...s, { prop: `underline`, className: (e) => c[`Underline-${e}`] }];
function b(t) {
  let { underline: n = `auto`, focusable: r, navProps: o, ...s } = t,
    c = e(),
    l = r ?? o?.focusable ?? !!s.onClick,
    d = (0, _.jsx)(`span`, {
      role: `button`,
      ...a({ ...s, underline: n, className: u }, y),
    });
  return c && (l || o)
    ? (0, _.jsx)(i, { ...(o || {}), focusable: l, children: d })
    : d;
}
export { b as n, v as t };
