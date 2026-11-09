/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { $t as e, R as t, _t as n, kt as r, on as i } from "./mobx.esm.js";
import { l as a } from "./src.js";
import { r as o, t as s } from "./storenaveventcontext.js";
var c = i(r(), 1),
  l = n(),
  u = c.createContext(!1);
function d() {
  return c.useContext(u);
}
function f(n) {
  let {
    snr: r,
    focusable: i,
    navProps: o,
    href: s,
    openInNewWindow: c,
    target: u,
    rel: f,
    ...m
  } = n;
  e(!(c && u), `Link: pass either openInNewWindow or target, not both`);
  let h = t(),
    g = d(),
    _ = p(s, r),
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
