/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Dt as e,
  Pt as t,
  W as n,
  d as r,
  nt as i,
} from "./chunk~de7f2df91c.js";
import { a } from "./chunk~bd90a5fce7.js";
import { r as o, t as s } from "./chunk~9a06851bec.js";
var c = t(i(), 1),
  l = n(),
  u = c.createContext(!1);
function d() {
  return c.useContext(u);
}
function f(t) {
  let {
    snr: n,
    focusable: i,
    navProps: o,
    href: s,
    openInNewWindow: c,
    target: u,
    rel: f,
    ...m
  } = t;
  e(!(c && u), `Link: pass either openInNewWindow or target, not both`);
  let h = r(),
    g = d(),
    _ = p(s, n),
    v = i ?? o?.focusable ?? !!_,
    y = c ? `_blank` : u;
  !y && g && (y = `_top`);
  let b = f;
  !b && c && (b = `noreferrer noopener`);
  let x = { href: _, target: y, rel: b, ...m };
  return h && (v || o)
    ? (0, l.jsx)(a, { ...o, focusable: v, ...x })
    : (0, l.jsx)(`a`, { ...x });
}
function p(e, t) {
  let n = o();
  return !e || !t ? e : s(t === !0 ? n : { ...n, ...t }, e);
}
export { f as t };
