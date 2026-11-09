/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import {
  Bc as n,
  Hb as r,
  Ic as i,
  Lr as a,
  Tr as o,
  Vc as s,
  nl as c,
  wr as l,
  zc as u,
} from "./main.js";
e();
var d = t();
function f(e) {
  let t = e?.jsondata?.read_more_link;
  if (!t) return;
  let n = u(t).toLocaleLowerCase();
  return n ? [n] : void 0;
}
function p(e, t) {
  return l(e, f(t));
}
function m(e, t) {
  if (!e) return ``;
  if (!l(e)) return s(e);
  let n = p(e, t) ? o(e) : e;
  return (r.IN_CLIENT ? `steam://openurl_external/` : ``) + n;
}
function h(e, t, n) {
  let r = e.toLowerCase().startsWith(`http`) ? e : `http://` + e;
  return (0, d.jsx)(g, { url: r, event: t, children: n || e });
}
var g = (e) => {
  let { url: t, event: r, className: o, style: s } = e,
    u = i(t);
  u = m(u, r);
  let f = l(u) ? `noopener nofollow` : void 0,
    p =
      typeof e.children == `string` &&
      e.children.length > 0 &&
      t &&
      !t.startsWith(`steam://`)
        ? n(t)
        : void 0;
  return (0, d.jsx)(a, {
    toolTipContent: p,
    direction: `top`,
    children: (0, d.jsx)(c, {
      className: o,
      href: u,
      rel: f,
      id: e.id,
      style: s,
      children: e.children,
    }),
  });
};
export { g as n, m as r, h as t };
