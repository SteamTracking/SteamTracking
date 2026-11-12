/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  en as t,
  sn as n,
  vt as r,
  z as i,
} from "./chunk~de7f2df91c.js";
import { s as a } from "./chunk~25a6634263.js";
import { r as o, t as s } from "./chunk~9a06851bec.js";
var c = n(e(), 1),
  l = r(),
  u = c.createContext(!1);
function d() {
  return c.useContext(u);
}
function f(e) {
  let {
    snr: n,
    focusable: r,
    navProps: o,
    href: s,
    openInNewWindow: c,
    target: u,
    rel: f,
    ...m
  } = e;
  t(!(c && u), `Link: pass either openInNewWindow or target, not both`);
  let h = i(),
    g = d(),
    _ = p(s, n),
    v = r ?? o?.focusable ?? !!_,
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
