/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { $t as r, Lt as i, Yh as a, sh as o, tn as s } from "./main.js";
var c = e(t(), 1),
  l = `_0hkFFtEKd8o-`,
  u = `_7oKujRBWBjo-`,
  d = `SfXKOOd0Sto-`,
  f = `KqhOexCat44-`,
  p = `GQmysqJfjG0-`,
  m = n(),
  h = Object.assign(g, { Root: y, Track: C, Range: w, Handle: T });
function g(e) {
  let { value: t, onValueChange: n, onValueSettled: r, min: i, ...a } = e,
    o = [t],
    s = (0, c.useCallback)((e) => n(e[0]), [n]),
    l = (0, c.useCallback)((e) => r?.(e[0]), [r]);
  return (0, m.jsxs)(y, {
    ...a,
    min: i,
    onValueChange: s,
    onValueSettled: l,
    value: o,
    children: [
      (0, m.jsx)(C, { children: (0, m.jsx)(w, { start: i, end: t }) }),
      (0, m.jsx)(T, {}),
    ],
  });
}
function _(e) {
  let { value: t } = e;
  return (0, m.jsxs)(y, {
    ...e,
    children: [
      (0, m.jsx)(C, { children: (0, m.jsx)(w, { start: t[0], end: t[1] }) }),
      (0, m.jsx)(T, {}),
      (0, m.jsx)(T, {}),
    ],
  });
}
var v = (0, c.createContext)(null);
function y(e) {
  let { children: t, color: n, ...i } = e,
    {
      min: a,
      max: o,
      onValueChange: d,
      value: f,
      step: p = 1,
      onValueSettled: h,
      ...g
    } = i,
    _ = {
      min: a,
      max: o,
      step: p,
      value: f,
      onValueChange: d,
      onValueSettled: h,
    },
    y = s({ ...g, className: l }, r),
    x = (0, c.useRef)(null),
    C = (0, c.useRef)(null),
    [w] = (0, c.useState)(() => new Set()),
    [T, O] = (0, c.useState)(!1);
  return (0, m.jsx)(v.Provider, {
    value: { ..._, handles: w, bDragActive: T },
    children: (0, m.jsx)(`div`, {
      ...y,
      "data-accent-color": n,
      ref: x,
      onPointerDown: (e) => {
        if (x.current) {
          if ((e.target.setPointerCapture(e.pointerId), typeof f != `number`)) {
            let t = x.current.getBoundingClientRect(),
              n = E(b(x.current, t, e.clientX), [0, t.width], [a, o]);
            C.current = { activeValueIndex: S(f, n), bMoved: !1 };
          } else C.current = { activeValueIndex: 0, bMoved: !1 };
          O(!0);
        }
      },
      onPointerUp: (e) => {
        let t = e.target;
        t.hasPointerCapture(e.pointerId) &&
          (t.releasePointerCapture(e.pointerId),
          h && C.current?.bMoved && h(f),
          O(!1));
      },
      onPointerMove: (e) => {
        if (e.target.hasPointerCapture(e.pointerId) && x.current && C.current) {
          let t = x.current.getBoundingClientRect(),
            n = D({
              value: E(b(x.current, t, e.clientX), [0, t.width], [a, o]),
              min: a,
              max: o,
              step: p,
            }),
            r = [...f];
          ((r[C.current.activeValueIndex] = n),
            r.sort((e, t) => e - t),
            (C.current.activeValueIndex = r.indexOf(n)),
            (C.current.bMoved = !0),
            d(r));
        }
      },
      onClick: (e) => {
        if (!x.current || C.current?.bMoved) return;
        let t = x.current.getBoundingClientRect(),
          n = E(b(x.current, t, e.clientX), [0, t.width], [a, o]),
          r = D({ value: n, min: a, max: o, step: p }),
          i = S(f, n),
          s = [...f];
        ((s[i] = r), d(s), h && h(s));
      },
      children: (0, m.jsx)(`div`, { className: u, children: t }),
    }),
  });
}
function b(e, t, n) {
  return e.matches(`:dir(rtl)`) ? t.right - n : n - t.left;
}
function x(e, t, n) {
  let r = t > 0 ? e[t - 1] : -1 / 0,
    i = t < e.length - 1 ? e[t + 1] : 1 / 0;
  return Math.min(Math.max(n, r), i);
}
function S(e, t) {
  if (e.length <= 1) return e.length - 1;
  let n = 0,
    r = Math.abs(t - e[0]);
  for (let i = 1; i < e.length; i++) {
    let a = Math.abs(e[i] - t);
    a < r && ((n = i), (r = a));
  }
  return n;
}
function C(e) {
  let { render: t, ...n } = e;
  return i(t, (0, m.jsx)(`div`, { className: d }), n, void 0);
}
function w(e) {
  let { start: t, end: n, render: r } = e,
    o = (0, c.useContext)(v);
  a(o, `SliderRange must be used within a SliderRoot!`);
  let { min: s, max: l } = o,
    u = O(t, s, l),
    d = 100 - O(n, s, l);
  return i(
    r,
    (0, m.jsx)(`div`, {
      className: f,
      style: { "--pct-left": `${u}%`, "--pct-right": `${d}%` },
    }),
    {},
    void 0,
  );
}
function T(e) {
  let { render: t } = e,
    n = (0, c.useContext)(v);
  a(n, `SliderHandle must be used within a SliderRoot!`);
  let {
      min: r,
      max: o,
      handles: s,
      value: l,
      step: u = 1,
      onValueChange: d,
      onValueSettled: f,
    } = n,
    [h, g] = (0, c.useState)(null),
    [_, y] = (0, c.useState)(-1);
  (0, c.useEffect)(
    () => (h ? (s.add(h), y(s.size - 1), () => s.delete(h)) : () => {}),
    [h, s],
  );
  let b = _ > -1,
    S = { "--handle-pct": `${O(b ? l[_] : r, r, o)}%` },
    C = (e) => {
      switch (e.key) {
        case `ArrowRight`:
        case `ArrowUp`:
        case `ArrowLeft`:
        case `ArrowDown`: {
          let t = `ArrowRight`;
          e.currentTarget.matches(`:dir(rtl)`) && (t = `ArrowLeft`);
          let n = e.key === t || e.key === `ArrowUp`,
            i = u * (n ? 1 : -1),
            a = D({ value: l[_] + i, min: r, max: o, step: u }),
            s = [...l];
          ((s[_] = x(l, _, a)),
            d(s),
            f && f(s),
            e.preventDefault(),
            e.stopPropagation());
          break;
        }
        case `PageUp`:
        case `PageDown`: {
          let t = e.key === `PageUp`,
            n = Math.round((o - r) / 10) * (t ? 1 : -1),
            i = D({ value: l[_] + n, min: r, max: o, step: u }),
            a = [...l];
          ((a[_] = x(l, _, i)),
            d(a),
            f && f(a),
            e.preventDefault(),
            e.stopPropagation());
          break;
        }
      }
    };
  b || (S.display = `none`);
  let w = {
    ref: g,
    role: `slider`,
    "aria-valuenow": l[_],
    "aria-valuemin": r,
    "aria-valuemax": o,
    tabIndex: 0,
    onKeyDown: C,
  };
  return i(t, (0, m.jsx)(`span`, { className: p, style: S }), w, {
    value: l[_],
    bDragActive: n.bDragActive,
  });
}
function E(e, t, n) {
  if (t[0] === t[1] || n[0] === n[1]) return n[0];
  let r = ((n[1] - n[0]) / (t[1] - t[0])) * (e - t[0]) + n[0];
  return o(r, n[0], n[1]);
}
function D(e) {
  let { value: t, min: n, max: r, step: i } = e,
    a = Math.round((t - n) / i) / (1 / i);
  return o(a + n, n, r);
}
function O(e, t, n) {
  return ((e - t) / (n - t)) * 100;
}
export { h as n, _ as t };
