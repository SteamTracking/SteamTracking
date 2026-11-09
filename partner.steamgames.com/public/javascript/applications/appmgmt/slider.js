/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { $t as e, Ct as t, _t as n, kt as r, on as i } from "./mobx.esm.js";
import { n as a, o } from "./layout.js";
import { t as s } from "./render.js";
var c = i(r(), 1),
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
  let { children: t, color: n, ...r } = e,
    {
      min: i,
      max: s,
      onValueChange: d,
      value: f,
      step: p = 1,
      onValueSettled: h,
      ...g
    } = r,
    _ = {
      min: i,
      max: s,
      step: p,
      value: f,
      onValueChange: d,
      onValueSettled: h,
    },
    y = o({ ...g, className: l }, a),
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
              n = E(b(x.current, t, e.clientX), [0, t.width], [i, s]);
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
              value: E(b(x.current, t, e.clientX), [0, t.width], [i, s]),
              min: i,
              max: s,
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
          n = E(b(x.current, t, e.clientX), [0, t.width], [i, s]),
          r = D({ value: n, min: i, max: s, step: p }),
          a = S(f, n),
          o = [...f];
        ((o[a] = r), d(o), h && h(o));
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
  return s(t, (0, m.jsx)(`div`, { className: d }), n, void 0);
}
function w(t) {
  let { start: n, end: r, render: i } = t,
    a = (0, c.useContext)(v);
  e(a, `SliderRange must be used within a SliderRoot!`);
  let { min: o, max: l } = a,
    u = O(n, o, l),
    d = 100 - O(r, o, l);
  return s(
    i,
    (0, m.jsx)(`div`, {
      className: f,
      style: { "--pct-left": `${u}%`, "--pct-right": `${d}%` },
    }),
    {},
    void 0,
  );
}
function T(t) {
  let { render: n } = t,
    r = (0, c.useContext)(v);
  e(r, `SliderHandle must be used within a SliderRoot!`);
  let {
      min: i,
      max: a,
      handles: o,
      value: l,
      step: u = 1,
      onValueChange: d,
      onValueSettled: f,
    } = r,
    [h, g] = (0, c.useState)(null),
    [_, y] = (0, c.useState)(-1);
  (0, c.useEffect)(
    () => (h ? (o.add(h), y(o.size - 1), () => o.delete(h)) : () => {}),
    [h, o],
  );
  let b = _ > -1,
    S = { "--handle-pct": `${O(b ? l[_] : i, i, a)}%` },
    C = (e) => {
      switch (e.key) {
        case `ArrowRight`:
        case `ArrowUp`:
        case `ArrowLeft`:
        case `ArrowDown`: {
          let t = `ArrowRight`;
          e.currentTarget.matches(`:dir(rtl)`) && (t = `ArrowLeft`);
          let n = e.key === t || e.key === `ArrowUp`,
            r = u * (n ? 1 : -1),
            o = D({ value: l[_] + r, min: i, max: a, step: u }),
            s = [...l];
          ((s[_] = x(l, _, o)),
            d(s),
            f && f(s),
            e.preventDefault(),
            e.stopPropagation());
          break;
        }
        case `PageUp`:
        case `PageDown`: {
          let t = e.key === `PageUp`,
            n = Math.round((a - i) / 10) * (t ? 1 : -1),
            r = D({ value: l[_] + n, min: i, max: a, step: u }),
            o = [...l];
          ((o[_] = x(l, _, r)),
            d(o),
            f && f(o),
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
    "aria-valuemin": i,
    "aria-valuemax": a,
    tabIndex: 0,
    onKeyDown: C,
  };
  return s(n, (0, m.jsx)(`span`, { className: p, style: S }), w, {
    value: l[_],
    bDragActive: r.bDragActive,
  });
}
function E(e, n, r) {
  if (n[0] === n[1] || r[0] === r[1]) return r[0];
  let i = ((r[1] - r[0]) / (n[1] - n[0])) * (e - n[0]) + r[0];
  return t(i, r[0], r[1]);
}
function D(e) {
  let { value: n, min: r, max: i, step: a } = e,
    o = Math.round((n - r) / a) / (1 / a);
  return t(o + r, r, i);
}
function O(e, t, n) {
  return ((e - t) / (n - t)) * 100;
}
export { h as n, _ as t };
