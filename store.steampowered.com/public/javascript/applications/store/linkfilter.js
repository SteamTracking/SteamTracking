/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import {
  Bc as n,
  Er as r,
  Hc as i,
  Lc as a,
  Rr as o,
  Tr as s,
  Ub as c,
  Vc as l,
  rl as u,
} from "./main.js";
e();
var d = t();
function f(e) {
  let t = e?.jsondata?.read_more_link;
  if (!t) return;
  let r = n(t).toLocaleLowerCase();
  return r ? [r] : void 0;
}
function p(e, t) {
  return s(e, f(t));
}
function m(e, t) {
  if (!e) return ``;
  if (!s(e)) return i(e);
  let n = p(e, t) ? r(e) : e;
  return (c.IN_CLIENT ? `steam://openurl_external/` : ``) + n;
}
function h(e, t, n) {
  let r = e.toLowerCase().startsWith(`http`) ? e : `http://` + e;
  return (0, d.jsx)(g, { url: r, event: t, children: n || e });
}
var g = (e) => {
  let { url: t, event: n, className: r, style: i } = e,
    c = a(t);
  c = m(c, n);
  let f = s(c) ? `noopener nofollow` : void 0,
    p =
      typeof e.children == `string` &&
      e.children.length > 0 &&
      t &&
      !t.startsWith(`steam://`)
        ? l(t)
        : void 0;
  return (0, d.jsx)(o, {
    toolTipContent: p,
    direction: `top`,
    children: (0, d.jsx)(u, {
      className: r,
      href: c,
      rel: f,
      id: e.id,
      style: i,
      children: e.children,
    }),
  });
};
export { g as n, m as r, h as t };
