import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { eo as t } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { Vu as n } from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as r } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
var i = e(t(), 1);
function a(e) {
  let { ownerWindow: t } = n(),
    r = typeof t.matchMedia == `function` ? t.matchMedia : o,
    a = (0, i.useMemo)(() => r(e), [e, r]),
    [s, c] = (0, i.useState)(a ? a.matches : !1);
  return (
    (0, i.useEffect)(() => {
      if (!a) return () => {};
      c(a.matches);
      function e(e) {
        c(e.matches);
      }
      return (
        a.addEventListener(`change`, e),
        () => a.removeEventListener(`change`, e)
      );
    }, [a]),
    s
  );
}
function o() {
  return null;
}
var s = r(),
  c = (0, i.createContext)({});
function l() {
  return (0, i.useContext)(c);
}
var u = [`initial`, `xs`, `sm`, `md`, `lg`],
  d = (0, i.createContext)({ xs: 375, sm: 768, md: 940, lg: 1240, ff: `lg` });
function f(e = {}) {
  let t = (0, i.useContext)(d),
    n = e.xs ?? t.xs,
    r = e.sm ?? t.sm,
    a = e.md ?? t.md,
    o = e.lg ?? t.lg;
  return (0, i.useMemo)(() => ({ xs: n, sm: r, md: a, lg: o }), [n, r, a, o]);
}
function p(e) {
  let { ff: t, breakpoints: n, children: r } = e,
    { xs: a, sm: o, md: c, lg: l } = f(n),
    u = (0, i.useMemo)(
      () => ({ ff: t, xs: a, sm: o, md: c, lg: l }),
      [t, a, o, c, l],
    );
  return (0, s.jsx)(d.Provider, { value: u, children: r });
}
function m(e) {
  let { children: t, breakpoints: n } = e,
    r = f(n),
    i = g(r);
  return (0, s.jsx)(p, { ff: i, breakpoints: r, children: t });
}
function h(e) {
  let { formFactor: t, children: n } = e,
    r = (0, i.useContext)(d),
    a = (0, i.useMemo)(() => ({ ...r, ff: t ?? r.ff }), [r, t]);
  return t
    ? (0, s.jsx)(d.Provider, { value: a, children: n })
    : (0, s.jsx)(s.Fragment, { children: n });
}
function g(e) {
  let t = a(`(min-width: ${e.xs}px)`),
    n = a(`(min-width: ${e.sm}px)`),
    r = a(`(min-width: ${e.md}px)`),
    o = a(`(min-width: ${e.lg}px)`),
    [s, c] = (0, i.useState)(!0);
  (0, i.useEffect)(() => c(!0), []);
  let u = l();
  return s
    ? o
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
function _() {
  return (0, i.useContext)(d).ff;
}
var v = u.reduce((e, t, n) => ((e[t] = n), e), {});
function y(e) {
  return b(_(), e);
}
function b(e, t) {
  return v[e] <= v[t];
}
var x = { none: !0, sm: !0, md: !0, lg: !0, full: !0 };
function S(e) {
  return !!x[e];
}
var C = {
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
function w(e) {
  return !!C[e];
}
var T = `xtBr-L5Owus-`;
function E() {
  return T;
}
var D = {
    Button: `basic`,
    Checkbox: `basic`,
    Combobox: `basic`,
    LoadingSpinner: `basic`,
    SegmentedControl: `basic`,
    Select: `basic`,
    Tabs: `basic`,
    TextArea: `basic`,
    TextInput: `basic`,
  },
  O = (0, i.createContext)(D);
function k(e) {
  let { variants: t = {}, children: n } = e,
    r = { ...(0, i.use)(O), ...t },
    a = (0, i.useRef)(r);
  return (
    A(a.current, r) || (a.current = r),
    (0, s.jsx)(O, { value: a.current, children: n })
  );
}
function A(e, t) {
  return Object.keys(D).every((n) => e[n] === t[n]);
}
function j(e) {
  return (0, i.use)(O)[e];
}
function M(e, t) {
  let n = j(e);
  return !t || t === "default" ? n : t;
}
var N = (0, i.createContext)(`2`);
function P(e) {
  let { size: t, children: n } = e;
  return (0, s.jsx)(N, { value: t, children: n });
}
function F(e) {
  let t = (0, i.use)(N);
  return e ?? t;
}
export {
  E as a,
  m as c,
  u as d,
  _ as f,
  a as g,
  l as h,
  M as i,
  h as l,
  f as m,
  k as n,
  S as o,
  y as p,
  F as r,
  w as s,
  P as t,
  p as u,
};
