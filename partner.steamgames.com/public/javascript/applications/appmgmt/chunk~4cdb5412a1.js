/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, vt as n } from "./chunk~de7f2df91c.js";
import {
  O as r,
  Ot as i,
  b as a,
  h as o,
  k as s,
  m as c,
  x as l,
  y as u,
} from "./chunk~25a6634263.js";
var d = t(e(), 1),
  f = n();
function p(e) {
  let { children: t, "flow-children": n, ...p } = e,
    { gamepadEvents: m } = o(e);
  (n && (p.layout = r(n)),
    m.onOKButton ||
      (`onClick` in t.props && t.props.onClick && (m.onOKButton = c)));
  let h;
  p.focusable && (h = t.props.tabIndex || 0);
  let { ref: g, node: _ } = a(p);
  s(m, g);
  let v = l(_),
    y = i(g, t.props?.ref, v);
  return (0, f.jsx)(u.Provider, {
    value: _,
    children: d.cloneElement(t, { ...t.props, ref: y, tabIndex: h }),
  });
}
export { p as t };
