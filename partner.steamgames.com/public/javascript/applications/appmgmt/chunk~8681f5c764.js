/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, t as n, vt as r } from "./chunk~de7f2df91c.js";
import "./chunk~25a6634263.js";
import {
  Qt as i,
  b as a,
  g as o,
  qt as s,
  v as c,
  x as l,
} from "./chunk~1fa4b8f2ff.js";
var u = t(e()),
  d = t(n()),
  f = r();
function p(e) {
  let { active: t, children: n } = e,
    r = l() || c(window),
    i = a(),
    [o, s] = u.useState(null),
    [p, m] = u.useState(!1),
    h = u.useRef(void 0);
  if (
    (u.useEffect(() => {
      if (t) {
        let e = r.ShowPortalModal(),
          t = e.OnElementReadyCallbacks.Register(s),
          n = e.OnModalActiveCallbacks.Register(m);
        return (
          (h.current = e.key),
          () => {
            (s(null), m(!1), e.Close(), t.Unregister(), n.Unregister());
          }
        );
      }
    }, [r, t]),
    !o || !t)
  )
    return null;
  let g = n;
  return (
    i && (g = (0, f.jsx)(i, { active: p, modalKey: h.current, children: g })),
    d.createPortal(g, o)
  );
}
function m(e) {
  let { labelledBy: t } = e || {},
    [n, r] = u.useState(void 0),
    i = u.useMemo(() => ({ setHeaderId: r }), []);
  return { headerId: t || n, context: i };
}
function h(e) {
  let {
      active: t,
      onDismiss: n,
      className: r,
      modalClassName: a,
      bGamepadUIScrollWithin: c,
      children: l,
      ...u
    } = e,
    { headerId: d, context: h } = m({ labelledBy: e[`aria-labelledby`] });
  return (0, f.jsx)(i.Provider, {
    value: h,
    children: (0, f.jsx)(p, {
      active: t,
      children: (0, f.jsx)(o, {
        onEscKeypress: n,
        className: a,
        bGamepadUIScrollWithin: c,
        children: (0, f.jsx)(s, {
          role: `dialog`,
          "aria-labelledby": d,
          className: r,
          ...u,
          children: l,
        }),
      }),
    }),
  });
}
function g(e) {
  let { className: t, children: n } = e;
  return (0, f.jsx)(p, {
    active: !0,
    children: (0, f.jsx)(`div`, { className: t, children: n }),
  });
}
export { g as n, p as r, h as t };
