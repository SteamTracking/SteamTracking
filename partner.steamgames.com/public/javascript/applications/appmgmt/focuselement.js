/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n } from "./mobx.esm.js";
import {
  A as r,
  At as i,
  C as a,
  S as o,
  _ as s,
  g as c,
  j as l,
  x as u,
} from "./src.js";
var d = n(t(), 1),
  f = e();
function p(e) {
  let { children: t, "flow-children": n, ...p } = e,
    { gamepadEvents: m } = s(e);
  n && (p.layout = r(n)),
    m.onOKButton ||
      (`onClick` in t.props && t.props.onClick && (m.onOKButton = c));
  let h;
  p.focusable && (h = t.props.tabIndex || 0);
  let { ref: g, node: _ } = o(p);
  l(m, g);
  let v = a(_),
    y = i(g, t.props?.ref, v);
  return (0, f.jsx)(u.Provider, {
    value: _,
    children: d.cloneElement(t, { ...t.props, ref: y, tabIndex: h }),
  });
}
export { p as t };
