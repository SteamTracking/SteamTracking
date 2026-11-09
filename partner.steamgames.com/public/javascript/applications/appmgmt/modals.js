/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n } from "./mobx.esm.js";
import "./src.js";
import { Wt as r, Yt as i, g as a, m as o, v as s, y as c } from "./dialogs.js";
import { E as l } from "./react-router.js";
var u = n(t()),
  d = n(l()),
  f = e();
function p(e) {
  let { active: t, children: n } = e,
    r = c() || a(window),
    i = s(),
    [o, l] = u.useState(null),
    [p, m] = u.useState(!1),
    h = u.useRef(void 0);
  if (
    (u.useEffect(() => {
      if (t) {
        let e = r.ShowPortalModal(),
          t = e.OnElementReadyCallbacks.Register(l),
          n = e.OnModalActiveCallbacks.Register(m);
        return (
          (h.current = e.key),
          () => {
            l(null), m(!1), e.Close(), t.Unregister(), n.Unregister();
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
      className: a,
      modalClassName: s,
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
        className: s,
        bGamepadUIScrollWithin: c,
        children: (0, f.jsx)(r, {
          role: `dialog`,
          "aria-labelledby": d,
          className: a,
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
