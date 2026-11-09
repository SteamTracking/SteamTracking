/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { Lt as n, N as r, ft as i } from "./libraries.js";
import {
  Ex as a,
  aa as o,
  ba as s,
  ha as c,
  ma as l,
  na as u,
  pa as d,
  qx as f,
  va as p,
  xa as m,
} from "./main.js";
var h = e(n(), 1),
  g = e(r(), 1),
  _ = t({
    Indicator: () => y,
    IndicatorPosition: () => x,
    Item: () => S,
    SegmentedControl: () => b,
    SegmentedControlBox: () => v,
    "Size-1": () => C,
    "Size-3": () => w,
    "Variant-basic": () => ee,
    "Variant-dim": () => O,
    "Variant-inset": () => E,
    "Variant-inset-glass": () => D,
    default: () => k,
    disabled: () => T,
  }),
  v = `-ADhnqjhVc4-`,
  y = `-Kr9IL9YbvI-`,
  b = `zoxSAIfj2-I-`,
  x = `w-i9GD4p5ok-`,
  S = `_9r9T-BENybY-`,
  C = `UayQOsdqayg-`,
  w = `lEiDoy6Twr4-`,
  T = `rADD4VAHKqM-`,
  ee = `o5jFH-P7bJ8-`,
  E = `Nx5xx-M20X4-`,
  D = `_4I3jMtMHJys-`,
  O = `oBernP4-8lg-`,
  k = {
    SegmentedControlBox: v,
    Indicator: y,
    SegmentedControl: b,
    IndicatorPosition: x,
    Item: S,
    "Size-1": `UayQOsdqayg-`,
    "Size-3": `lEiDoy6Twr4-`,
    disabled: T,
    "Variant-basic": `o5jFH-P7bJ8-`,
    "Variant-inset": `Nx5xx-M20X4-`,
    "Variant-inset-glass": `_4I3jMtMHJys-`,
    "Variant-dim": `oBernP4-8lg-`,
  },
  A = i(),
  j = (0, h.createContext)(null);
function M(e) {
  let {
      variant: t,
      radius: n,
      size: r,
      status: i,
      color: a,
      children: o,
      value: s,
      onValueChange: l,
      ...p
    } = e,
    [m, y] = (0, h.useState)({}),
    x = (0, h.useCallback)(
      (e, t, n) => y((r) => ({ ...r, [t]: { node: e, bDisabled: n } })),
      [],
    ),
    S = (0, h.useCallback)(
      (e, t) =>
        y((n) => {
          let r = { ...n };
          return r[t]?.node === e && delete r[t], r;
        }),
      [],
    ),
    C = (e) => {
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
        let n = Object.entries(m).sort(([, e], [, t]) => P(e.node, t.node)),
          r = n.length,
          i = t > 0 ? -1 : r;
        s !== null &&
          ((i = n.findIndex(([e]) => e === s)),
          f(i !== -1, `Could not find current segmented value position`));
        for (let a = 1; a <= r; a++) {
          let [o, c] = n[(((i + t * a) % r) + r) % r];
          if (!c.bDisabled) {
            o !== s && l(o), e.stopPropagation(), e.preventDefault();
            break;
          }
        }
      }
    },
    w = d(`SegmentedControl`, t),
    T = (0, h.useMemo)(
      () => ({
        value: s,
        onValueChange: l,
        register: x,
        unregister: S,
        radius: n,
        size: r,
      }),
      [s, l, x, S, n, r],
    );
  return (0, A.jsx)(u, {
    ...p,
    clickable: !1,
    hoverable: !1,
    focusable: !1,
    variant: w,
    radius: n,
    size: r,
    status: i,
    className: (0, g.default)(v, _[`Variant-${w}`]),
    tabIndex: 0,
    onKeyDown: C,
    children: (0, A.jsx)(j.Provider, {
      value: T,
      children: (0, A.jsxs)(c, {
        className: b,
        style: { "--outer-radius": `var(--radius-${n})` },
        children: [o, s !== null && (0, A.jsx)(ne, { radius: n, color: a })],
      }),
    }),
  });
}
function te(e) {
  let { value: t, children: n, disabled: r } = e,
    i = (0, h.useContext)(j),
    [a, o] = (0, h.useState)(),
    { register: s, unregister: c } = i || {};
  (0, h.useEffect)(
    () => (!a || !s || !c ? () => {} : (s(a, t, !!r), () => c(a, t))),
    [s, c, t, a, r],
  );
  let u = m(i?.size);
  if (!i) return null;
  let { value: d, onValueChange: f } = i,
    p = t === d,
    v = (e) => {
      e.stopPropagation(), e.preventDefault(), !(p || r) && f(t);
    },
    y = n === void 0 ? t : n;
  return (0, A.jsx)(l, {
    justify: `center`,
    align: `center`,
    ref: o,
    onClick: v,
    "data-selected": p ? `true` : `false`,
    className: (0, g.default)(S, u && _[`Size-${u}`], r ? T : ``),
    children: y,
  });
}
function N(e) {
  let { options: t, getOptionLabel: n = (e) => e, ...r } = e;
  return (0, A.jsx)(N.Root, {
    ...r,
    children: t.map((e) => (0, A.jsx)(N.Item, { value: e, children: n(e) }, e)),
  });
}
(N.Item = te), (N.Root = M);
function ne(e) {
  let { radius: t, color: n } = e;
  return (0, A.jsx)(c, {
    className: x,
    children: (0, A.jsx)(`div`, { className: y, "data-accent-color": n }),
  });
}
function P(e, t) {
  let n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : n & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
}
var F = `_0hkFFtEKd8o-`,
  I = `_7oKujRBWBjo-`,
  L = `SfXKOOd0Sto-`,
  R = `KqhOexCat44-`,
  z = `GQmysqJfjG0-`,
  B = Object.assign(V, { Root: W, Track: J, Range: Y, Handle: X });
function V(e) {
  let { value: t, onValueChange: n, onValueSettled: r, min: i, ...a } = e,
    o = [t],
    s = (0, h.useCallback)((e) => n(e[0]), [n]),
    c = (0, h.useCallback)((e) => r?.(e[0]), [r]);
  return (0, A.jsxs)(W, {
    ...a,
    min: i,
    onValueChange: s,
    onValueSettled: c,
    value: o,
    children: [
      (0, A.jsx)(J, { children: (0, A.jsx)(Y, { start: i, end: t }) }),
      (0, A.jsx)(X, {}),
    ],
  });
}
function H(e) {
  let { value: t } = e;
  return (0, A.jsxs)(W, {
    ...e,
    children: [
      (0, A.jsx)(J, { children: (0, A.jsx)(Y, { start: t[0], end: t[1] }) }),
      (0, A.jsx)(X, {}),
      (0, A.jsx)(X, {}),
    ],
  });
}
var U = (0, h.createContext)(null);
function W(e) {
  let { children: t, color: n, ...r } = e,
    {
      min: i,
      max: a,
      onValueChange: o,
      value: c,
      step: l = 1,
      onValueSettled: u,
      ...d
    } = r,
    f = {
      min: i,
      max: a,
      step: l,
      value: c,
      onValueChange: o,
      onValueSettled: u,
    },
    m = s({ ...d, className: F }, p),
    g = (0, h.useRef)(null),
    _ = (0, h.useRef)(null),
    [v] = (0, h.useState)(() => new Set()),
    [y, b] = (0, h.useState)(!1);
  return (0, A.jsx)(U.Provider, {
    value: { ...f, handles: v, bDragActive: y },
    children: (0, A.jsx)(`div`, {
      ...m,
      "data-accent-color": n,
      ref: g,
      onPointerDown: (e) => {
        if (g.current) {
          if ((e.target.setPointerCapture(e.pointerId), typeof c != `number`)) {
            let t = g.current.getBoundingClientRect(),
              n = Z(G(g.current, t, e.clientX), [0, t.width], [i, a]);
            _.current = { activeValueIndex: q(c, n), bMoved: !1 };
          } else _.current = { activeValueIndex: 0, bMoved: !1 };
          b(!0);
        }
      },
      onPointerUp: (e) => {
        let t = e.target;
        t.hasPointerCapture(e.pointerId) &&
          (t.releasePointerCapture(e.pointerId),
          u && _.current?.bMoved && u(c),
          b(!1));
      },
      onPointerMove: (e) => {
        if (e.target.hasPointerCapture(e.pointerId) && g.current && _.current) {
          let t = g.current.getBoundingClientRect(),
            n = Q({
              value: Z(G(g.current, t, e.clientX), [0, t.width], [i, a]),
              min: i,
              max: a,
              step: l,
            }),
            r = [...c];
          (r[_.current.activeValueIndex] = n),
            r.sort((e, t) => e - t),
            (_.current.activeValueIndex = r.indexOf(n)),
            (_.current.bMoved = !0),
            o(r);
        }
      },
      onClick: (e) => {
        if (!g.current || _.current?.bMoved) return;
        let t = g.current.getBoundingClientRect(),
          n = Z(G(g.current, t, e.clientX), [0, t.width], [i, a]),
          r = Q({ value: n, min: i, max: a, step: l }),
          s = q(c, n),
          d = [...c];
        (d[s] = r), o(d), u && u(d);
      },
      children: (0, A.jsx)(`div`, { className: I, children: t }),
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
  return o(t, (0, A.jsx)(`div`, { className: L }), n, void 0);
}
function Y(e) {
  let { start: t, end: n, render: r } = e,
    i = (0, h.useContext)(U);
  f(i, `SliderRange must be used within a SliderRoot!`);
  let { min: a, max: s } = i,
    c = $(t, a, s),
    l = 100 - $(n, a, s);
  return o(
    r,
    (0, A.jsx)(`div`, {
      className: R,
      style: { "--pct-left": `${c}%`, "--pct-right": `${l}%` },
    }),
    {},
    void 0,
  );
}
function X(e) {
  let { render: t } = e,
    n = (0, h.useContext)(U);
  f(n, `SliderHandle must be used within a SliderRoot!`);
  let {
      min: r,
      max: i,
      handles: a,
      value: s,
      step: c = 1,
      onValueChange: l,
      onValueSettled: u,
    } = n,
    [d, p] = (0, h.useState)(null),
    [m, g] = (0, h.useState)(-1);
  (0, h.useEffect)(
    () => (d ? (a.add(d), g(a.size - 1), () => a.delete(d)) : () => {}),
    [d, a],
  );
  let _ = m > -1,
    v = { "--handle-pct": `${$(_ ? s[m] : r, r, i)}%` },
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
            o = Q({ value: s[m] + a, min: r, max: i, step: c }),
            d = [...s];
          (d[m] = K(s, m, o)),
            l(d),
            u && u(d),
            e.preventDefault(),
            e.stopPropagation();
          break;
        }
        case `PageUp`:
        case `PageDown`: {
          let t = e.key === `PageUp`,
            n = Math.round((i - r) / 10) * (t ? 1 : -1),
            a = Q({ value: s[m] + n, min: r, max: i, step: c }),
            o = [...s];
          (o[m] = K(s, m, a)),
            l(o),
            u && u(o),
            e.preventDefault(),
            e.stopPropagation();
          break;
        }
      }
    };
  _ || (v.display = `none`);
  let b = {
    ref: p,
    role: `slider`,
    "aria-valuenow": s[m],
    "aria-valuemin": r,
    "aria-valuemax": i,
    tabIndex: 0,
    onKeyDown: y,
  };
  return o(t, (0, A.jsx)(`span`, { className: z, style: v }), b, {
    value: s[m],
    bDragActive: n.bDragActive,
  });
}
function Z(e, t, n) {
  if (t[0] === t[1] || n[0] === n[1]) return n[0];
  let r = ((n[1] - n[0]) / (t[1] - t[0])) * (e - t[0]) + n[0];
  return a(r, n[0], n[1]);
}
function Q(e) {
  let { value: t, min: n, max: r, step: i } = e,
    o = Math.round((t - n) / i) / (1 / i);
  return a(o + n, n, r);
}
function $(e, t, n) {
  return ((e - t) / (n - t)) * 100;
}
export { B as n, N as r, H as t };
