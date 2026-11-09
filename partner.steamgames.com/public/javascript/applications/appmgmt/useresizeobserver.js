/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { $t as e, kt as t, on as n } from "./mobx.esm.js";
import { Mt as r } from "./src.js";
var i = n(t(), 1);
function a(e, t) {
  return r(
    (n) => {
      if (!n) return;
      let r = t(n.ownerDocument.defaultView, (t) => {
        e(t[0]);
      });
      return (r.observe(n), () => r.unobserve(n));
    },
    [e, t],
  );
}
function o(t) {
  return a(
    t,
    i.useCallback(
      (t, n) =>
        t.ResizeObserver
          ? new t.ResizeObserver(n)
          : (e(!1, `ResizeObserver is not available`),
            { observe: () => {}, unobserve: () => {}, disconnect: () => {} }),
      [],
    ),
  );
}
function s(e, t) {
  return a(
    e,
    i.useCallback((e, n) => new e.IntersectionObserver(n, t), [t]),
  );
}
function c(e, t) {
  let n = i.useRef(void 0);
  return s((t) => {
    (!n.current && t.isIntersecting && e.onEnter?.(t),
      n.current && !t.isIntersecting && e.onLeave?.(t),
      e.onIntersectionChange?.(t),
      (n.current = t.isIntersecting));
  }, t);
}
function l(e, ...t) {
  let n = new e.ownerDocument.defaultView.IntersectionObserver(...t);
  return (n.observe(e), n);
}
export { c as n, o as r, l as t };
