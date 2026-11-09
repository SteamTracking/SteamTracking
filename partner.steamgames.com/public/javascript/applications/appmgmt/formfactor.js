/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n } from "./mobx.esm.js";
import { C as r } from "./dialogs.js";
import { t as i } from "./useclienthints.js";
var a = n(t(), 1);
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
var c = e(),
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
export { g as i, m as n, l as r, p as t };
