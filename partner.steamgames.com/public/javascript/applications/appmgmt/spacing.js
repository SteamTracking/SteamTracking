/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, vt as n } from "./chunk~de7f2df91c.js";
import { T as r } from "./chunk~1fa4b8f2ff.js";
import { t as i } from "./chunk~e7f5a67b58.js";
var a = t(e(), 1);
function o(e) {
  let { ownerWindow: t } = r(),
    n = typeof t.matchMedia == `function` ? t.matchMedia : s,
    i = (0, a.useMemo)(() => n(e), [e, n]),
    [o, c] = (0, a.useState)(i ? i.matches : !1);
  return (
    (0, a.useEffect)(() => {
      if (!i) return () => {};
      c(i.matches);
      function e(e) {
        c(e.matches);
      }
      return (
        i.addEventListener(`change`, e),
        () => i.removeEventListener(`change`, e)
      );
    }, [i]),
    o
  );
}
function s() {
  return null;
}
var c = n(),
  l = [`initial`, `xs`, `sm`, `md`, `lg`],
  u = (0, a.createContext)({ xs: 375, sm: 768, md: 940, lg: 1240, ff: `lg` });
function d(e = {}) {
  let t = (0, a.useContext)(u),
    n = e.xs ?? t.xs,
    r = e.sm ?? t.sm,
    i = e.md ?? t.md,
    o = e.lg ?? t.lg;
  return (0, a.useMemo)(() => ({ xs: n, sm: r, md: i, lg: o }), [n, r, i, o]);
}
function f(e) {
  let { ff: t, breakpoints: n, children: r } = e,
    { xs: i, sm: o, md: s, lg: l } = d(n),
    f = (0, a.useMemo)(
      () => ({ ff: t, xs: i, sm: o, md: s, lg: l }),
      [t, i, o, s, l],
    );
  return (0, c.jsx)(u.Provider, { value: f, children: r });
}
function p(e) {
  let { children: t, breakpoints: n } = e,
    r = d(n),
    i = h(r);
  return (0, c.jsx)(f, { ff: i, breakpoints: r, children: t });
}
function m(e) {
  let { formFactor: t, children: n } = e,
    r = (0, a.useContext)(u),
    i = (0, a.useMemo)(() => ({ ...r, ff: t ?? r.ff }), [r, t]);
  return t
    ? (0, c.jsx)(u.Provider, { value: i, children: n })
    : (0, c.jsx)(c.Fragment, { children: n });
}
function h(e) {
  let t = o(`(min-width: ${e.xs}px)`),
    n = o(`(min-width: ${e.sm}px)`),
    r = o(`(min-width: ${e.md}px)`),
    s = o(`(min-width: ${e.lg}px)`),
    [c, l] = (0, a.useState)(!0);
  (0, a.useEffect)(() => l(!0), []);
  let u = i();
  return c
    ? s
      ? `lg`
      : r
        ? `md`
        : n
          ? `sm`
          : t
            ? `xs`
            : `initial`
    : u.viewportWidth
      ? u.viewportWidth.value >= e.lg
        ? `lg`
        : u.viewportWidth.value >= e.md
          ? `md`
          : u.viewportWidth.value >= e.sm
            ? `sm`
            : u.viewportWidth.value >= e.xs
              ? `xs`
              : `initial`
      : `lg`;
}
function g() {
  return (0, a.useContext)(u).ff;
}
l.reduce((e, t, n) => ((e[t] = n), e), {});
var _ = { none: !0, sm: !0, md: !0, lg: !0, full: !0 };
function v(e) {
  return !!_[e];
}
var y = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
};
function b(e) {
  return !!y[e];
}
export { l as a, m as i, b as n, g as o, p as r, v as t };
