/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import { Lt as n, N as r, ft as i } from "./chunk~01cfc309bf.js";
import {
  Ca as a,
  Qx as o,
  Sa as s,
  _a as c,
  ba as l,
  ga as u,
  ha as d,
  jx as f,
  ma as p,
  oa as m,
  ra as h,
} from "./main.js";
var g = e(n(), 1),
  _ = e(r(), 1),
  v = t({
    Indicator: () => b,
    IndicatorPosition: () => S,
    Item: () => w,
    SegmentedControl: () => x,
    SegmentedControlBox: () => y,
    "Size-1": () => C,
    "Size-3": () => T,
    "Variant-basic": () => D,
    "Variant-dim": () => A,
    "Variant-inset": () => O,
    "Variant-inset-glass": () => k,
    default: () => j,
    disabled: () => E,
  }),
  y = `-ADhnqjhVc4-`,
  b = `-Kr9IL9YbvI-`,
  x = `zoxSAIfj2-I-`,
  S = `w-i9GD4p5ok-`,
  C = `UayQOsdqayg-`,
  w = `_9r9T-BENybY-`,
  T = `lEiDoy6Twr4-`,
  E = `rADD4VAHKqM-`,
  D = `o5jFH-P7bJ8-`,
  O = `Nx5xx-M20X4-`,
  k = `_4I3jMtMHJys-`,
  A = `oBernP4-8lg-`,
  j = {
    SegmentedControlBox: y,
    Indicator: b,
    SegmentedControl: x,
    IndicatorPosition: S,
    "Size-1": `UayQOsdqayg-`,
    Item: w,
    "Size-3": `lEiDoy6Twr4-`,
    disabled: E,
    "Variant-basic": `o5jFH-P7bJ8-`,
    "Variant-inset": `Nx5xx-M20X4-`,
    "Variant-inset-glass": `_4I3jMtMHJys-`,
    "Variant-dim": `oBernP4-8lg-`,
  },
  M = i(),
  N = (0, g.createContext)(null);
function P(e) {
  let {
      variant: t,
      radius: n,
      size: r,
      status: i,
      color: s,
      children: l,
      value: u,
      onValueChange: f,
      ...m
    } = e,
    [b, S] = (0, g.useState)({}),
    C = (0, g.useCallback)(
      (e, t, n) => S((r) => ({ ...r, [t]: { node: e, bDisabled: n } })),
      [],
    ),
    w = (0, g.useCallback)(
      (e, t) =>
        S((n) => {
          let r = { ...n };
          return (r[t]?.node === e && delete r[t], r);
        }),
      [],
    ),
    T = (e) => {
      let t = 0;
      switch (e.key) {
        case ` `:
        case `Enter`:
        case `ArrowRight`:
          t = 1;
          break;
        case `ArrowLeft`:
          t = -1;
      }
      if (t) {
        let n = Object.entries(b).sort(([, e], [, t]) => R(e.node, t.node)),
          r = n.length,
          i = t > 0 ? -1 : r;
        u !== null &&
          ((i = n.findIndex(([e]) => e === u)),
          o(i !== -1, `Could not find current segmented value position`));
        for (let a = 1; a <= r; a++) {
          let [o, s] = n[(((i + t * a) % r) + r) % r];
          if (!s.bDisabled) {
            (o !== u && f(o), e.stopPropagation(), e.preventDefault());
            break;
          }
        }
      }
    },
    E = d(`SegmentedControl`, t),
    D = p(r),
    O = a(D),
    k = (0, g.useMemo)(
      () => ({
        value: u,
        onValueChange: f,
        register: C,
        unregister: w,
        radius: n,
        size: O,
      }),
      [u, f, C, w, n, O],
    );
  return (0, M.jsx)(h, {
    ...m,
    clickable: !1,
    hoverable: !1,
    focusable: !1,
    variant: E,
    radius: n,
    size: D,
    status: i,
    className: (0, _.default)(y, v[`Variant-${E}`]),
    tabIndex: 0,
    onKeyDown: T,
    children: (0, M.jsx)(N.Provider, {
      value: k,
      children: (0, M.jsxs)(c, {
        className: x,
        style: {
          "--outer-radius":
            typeof n == `string`
              ? `var(--radius-${n})`
              : `var(--control-radius)`,
        },
        children: [
          l,
          u !== null && (0, M.jsx)(L, { radius: n, color: s, size: O }),
        ],
      }),
    }),
  });
}
function F(e) {
  let { value: t, children: n, disabled: r } = e,
    i = (0, g.useContext)(N),
    [a, o] = (0, g.useState)(),
    { register: s, unregister: c } = i || {};
  if (
    ((0, g.useEffect)(
      () => (!a || !s || !c ? () => {} : (s(a, t, !!r), () => c(a, t))),
      [s, c, t, a, r],
    ),
    !i)
  )
    return null;
  let { value: l, onValueChange: d, size: f } = i,
    p = t === l,
    m = (e) => {
      (e.stopPropagation(), e.preventDefault(), !(p || r) && d(t));
    },
    h = n === void 0 ? t : n;
  return (0, M.jsx)(u, {
    justify: `center`,
    align: `center`,
    ref: o,
    onClick: m,
    "data-selected": p ? `true` : `false`,
    className: (0, _.default)(w, f && v[`Size-${f}`], r ? E : ``),
    children: h,
  });
}
function I(e) {
  let { options: t, getOptionLabel: n = (e) => e, ...r } = e;
  return (0, M.jsx)(I.Root, {
    ...r,
    children: t.map((e) => (0, M.jsx)(I.Item, { value: e, children: n(e) }, e)),
  });
}
((I.Item = F), (I.Root = P));
function L(e) {
  let { radius: t, color: n, size: r } = e;
  return (0, M.jsx)(c, {
    className: (0, _.default)(S, r && v[`Size-${r}`]),
    children: (0, M.jsx)(`div`, { className: b, "data-accent-color": n }),
  });
}
function R(e, t) {
  let n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : n & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
}
var z = `_0hkFFtEKd8o-`,
  B = `_7oKujRBWBjo-`,
  V = `SfXKOOd0Sto-`,
  H = `KqhOexCat44-`,
  ee = `GQmysqJfjG0-`,
  te = Object.assign(ne, { Root: W, Track: J, Range: Y, Handle: X });
function ne(e) {
  let { value: t, onValueChange: n, onValueSettled: r, min: i, ...a } = e,
    o = [t],
    s = (0, g.useCallback)((e) => n(e[0]), [n]),
    c = (0, g.useCallback)((e) => r?.(e[0]), [r]);
  return (0, M.jsxs)(W, {
    ...a,
    min: i,
    onValueChange: s,
    onValueSettled: c,
    value: o,
    children: [
      (0, M.jsx)(J, { children: (0, M.jsx)(Y, { start: i, end: t }) }),
      (0, M.jsx)(X, {}),
    ],
  });
}
function re(e) {
  let { value: t } = e;
  return (0, M.jsxs)(W, {
    ...e,
    children: [
      (0, M.jsx)(J, { children: (0, M.jsx)(Y, { start: t[0], end: t[1] }) }),
      (0, M.jsx)(X, {}),
      (0, M.jsx)(X, {}),
    ],
  });
}
var U = (0, g.createContext)(null);
function W(e) {
  let { children: t, color: n, ...r } = e,
    {
      min: i,
      max: a,
      onValueChange: o,
      value: c,
      step: u = 1,
      onValueSettled: d,
      ...f
    } = r,
    p = {
      min: i,
      max: a,
      step: u,
      value: c,
      onValueChange: o,
      onValueSettled: d,
    },
    m = s({ ...f, className: z }, l),
    h = (0, g.useRef)(null),
    _ = (0, g.useRef)(null),
    [v] = (0, g.useState)(() => new Set()),
    [y, b] = (0, g.useState)(!1);
  return (0, M.jsx)(U.Provider, {
    value: { ...p, handles: v, bDragActive: y },
    children: (0, M.jsx)(`div`, {
      ...m,
      "data-accent-color": n,
      ref: h,
      onPointerDown: (e) => {
        if (h.current) {
          if ((e.target.setPointerCapture(e.pointerId), typeof c != `number`)) {
            let t = h.current.getBoundingClientRect(),
              n = Z(G(h.current, t, e.clientX), [0, t.width], [i, a]);
            _.current = { activeValueIndex: q(c, n), bMoved: !1 };
          } else _.current = { activeValueIndex: 0, bMoved: !1 };
          b(!0);
        }
      },
      onPointerUp: (e) => {
        let t = e.target;
        t.hasPointerCapture(e.pointerId) &&
          (t.releasePointerCapture(e.pointerId),
          d && _.current?.bMoved && d(c),
          b(!1));
      },
      onPointerMove: (e) => {
        if (e.target.hasPointerCapture(e.pointerId) && h.current && _.current) {
          let t = h.current.getBoundingClientRect(),
            n = Q({
              value: Z(G(h.current, t, e.clientX), [0, t.width], [i, a]),
              min: i,
              max: a,
              step: u,
            }),
            r = [...c];
          ((r[_.current.activeValueIndex] = n),
            r.sort((e, t) => e - t),
            (_.current.activeValueIndex = r.indexOf(n)),
            (_.current.bMoved = !0),
            o(r));
        }
      },
      onClick: (e) => {
        if (!h.current || _.current?.bMoved) return;
        let t = h.current.getBoundingClientRect(),
          n = Z(G(h.current, t, e.clientX), [0, t.width], [i, a]),
          r = Q({ value: n, min: i, max: a, step: u }),
          s = q(c, n),
          l = [...c];
        ((l[s] = r), o(l), d && d(l));
      },
      children: (0, M.jsx)(`div`, { className: B, children: t }),
    }),
  });
}
function G(e, t, n) {
  return e.matches(`:dir(rtl)`) ? t.right - n : n - t.left;
}
function K(e, t, n) {
  let r = t > 0 ? e[t - 1] : -1 / 0,
    i = t < e.length - 1 ? e[t + 1] : 1 / 0;
  return Math.min(Math.max(n, r), i);
}
function q(e, t) {
  if (e.length <= 1) return e.length - 1;
  let n = 0,
    r = Math.abs(t - e[0]);
  for (let i = 1; i < e.length; i++) {
    let a = Math.abs(e[i] - t);
    a < r && ((n = i), (r = a));
  }
  return n;
}
function J(e) {
  let { render: t, ...n } = e;
  return m(t, (0, M.jsx)(`div`, { className: V }), n, void 0);
}
function Y(e) {
  let { start: t, end: n, render: r } = e,
    i = (0, g.useContext)(U);
  o(i, `SliderRange must be used within a SliderRoot!`);
  let { min: a, max: s } = i,
    c = $(t, a, s),
    l = 100 - $(n, a, s);
  return m(
    r,
    (0, M.jsx)(`div`, {
      className: H,
      style: { "--pct-left": `${c}%`, "--pct-right": `${l}%` },
    }),
    {},
    void 0,
  );
}
function X(e) {
  let { render: t } = e,
    n = (0, g.useContext)(U);
  o(n, `SliderHandle must be used within a SliderRoot!`);
  let {
      min: r,
      max: i,
      handles: a,
      value: s,
      step: c = 1,
      onValueChange: l,
      onValueSettled: u,
    } = n,
    [d, f] = (0, g.useState)(null),
    [p, h] = (0, g.useState)(-1);
  (0, g.useEffect)(
    () => (d ? (a.add(d), h(a.size - 1), () => a.delete(d)) : () => {}),
    [d, a],
  );
  let _ = p > -1,
    v = { "--handle-pct": `${$(_ ? s[p] : r, r, i)}%` },
    y = (e) => {
      switch (e.key) {
        case `ArrowRight`:
        case `ArrowUp`:
        case `ArrowLeft`:
        case `ArrowDown`: {
          let t = `ArrowRight`;
          e.currentTarget.matches(`:dir(rtl)`) && (t = `ArrowLeft`);
          let n = e.key === t || e.key === `ArrowUp`,
            a = c * (n ? 1 : -1),
            o = Q({ value: s[p] + a, min: r, max: i, step: c }),
            d = [...s];
          ((d[p] = K(s, p, o)),
            l(d),
            u && u(d),
            e.preventDefault(),
            e.stopPropagation());
          break;
        }
        case `PageUp`:
        case `PageDown`: {
          let t = e.key === `PageUp`,
            n = Math.round((i - r) / 10) * (t ? 1 : -1),
            a = Q({ value: s[p] + n, min: r, max: i, step: c }),
            o = [...s];
          ((o[p] = K(s, p, a)),
            l(o),
            u && u(o),
            e.preventDefault(),
            e.stopPropagation());
          break;
        }
      }
    };
  _ || (v.display = `none`);
  let b = {
    ref: f,
    role: `slider`,
    "aria-valuenow": s[p],
    "aria-valuemin": r,
    "aria-valuemax": i,
    tabIndex: 0,
    onKeyDown: y,
  };
  return m(t, (0, M.jsx)(`span`, { className: ee, style: v }), b, {
    value: s[p],
    bDragActive: n.bDragActive,
  });
}
function Z(e, t, n) {
  if (t[0] === t[1] || n[0] === n[1]) return n[0];
  let r = ((n[1] - n[0]) / (t[1] - t[0])) * (e - t[0]) + n[0];
  return f(r, n[0], n[1]);
}
function Q(e) {
  let { value: t, min: n, max: r, step: i } = e,
    a = Math.round((t - n) / i) / (1 / i);
  return f(a + n, n, r);
}
function $(e, t, n) {
  return ((e - t) / (n - t)) * 100;
}
export { te as n, I as r, re as t };
