/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, W as t, nt as n } from "./chunk~de7f2df91c.js";
import {
  D as r,
  E as i,
  Et as a,
  _ as o,
  f as s,
  p as c,
  v as l,
  y as u,
} from "./chunk~bd90a5fce7.js";
var d = e(n(), 1),
  f = t();
function p(e) {
  let { children: t, "flow-children": n, ...p } = e,
    { gamepadEvents: m } = c(e);
  (n && (p.layout = i(n)),
    m.onOKButton ||
      (`onClick` in t.props && t.props.onClick && (m.onOKButton = s)));
  let h;
  p.focusable && (h = t.props.tabIndex || 0);
  let { ref: g, node: _ } = l(p);
  r(m, g);
  let v = u(_),
    y = a(g, t.props?.ref, v);
  return (0, f.jsx)(o.Provider, {
    value: _,
    children: d.cloneElement(t, { ...t.props, ref: y, tabIndex: h }),
  });
}
export { p as t };
