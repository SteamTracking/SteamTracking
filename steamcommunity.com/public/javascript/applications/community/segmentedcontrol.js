/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import { E as n, Pt as r, at as i } from "./chunk~01cfc309bf.js";
import {
  $h as a,
  Bt as o,
  Ct as s,
  Lt as c,
  Rt as l,
  qt as u,
  zt as d,
} from "./main.js";
var f = e(r(), 1),
  p = e(n(), 1),
  m = t({
    Indicator: () => g,
    IndicatorPosition: () => v,
    Item: () => b,
    SegmentedControl: () => _,
    SegmentedControlBox: () => h,
    "Size-1": () => y,
    "Size-3": () => x,
    "Variant-basic": () => C,
    "Variant-dim": () => E,
    "Variant-inset": () => w,
    "Variant-inset-glass": () => T,
    default: () => D,
    disabled: () => S,
  }),
  h = `-ADhnqjhVc4-`,
  g = `-Kr9IL9YbvI-`,
  _ = `zoxSAIfj2-I-`,
  v = `w-i9GD4p5ok-`,
  y = `UayQOsdqayg-`,
  b = `_9r9T-BENybY-`,
  x = `lEiDoy6Twr4-`,
  S = `rADD4VAHKqM-`,
  C = `o5jFH-P7bJ8-`,
  w = `Nx5xx-M20X4-`,
  T = `_4I3jMtMHJys-`,
  E = `oBernP4-8lg-`,
  D = {
    SegmentedControlBox: h,
    Indicator: g,
    SegmentedControl: _,
    IndicatorPosition: v,
    "Size-1": `UayQOsdqayg-`,
    Item: b,
    "Size-3": `lEiDoy6Twr4-`,
    disabled: S,
    "Variant-basic": `o5jFH-P7bJ8-`,
    "Variant-inset": `Nx5xx-M20X4-`,
    "Variant-inset-glass": `_4I3jMtMHJys-`,
    "Variant-dim": `oBernP4-8lg-`,
  },
  O = i(),
  k = (0, f.createContext)(null);
function A(e) {
  let {
      variant: t,
      radius: n,
      size: r,
      status: i,
      color: d,
      children: g,
      value: v,
      onValueChange: y,
      ...b
    } = e,
    [x, S] = (0, f.useState)({}),
    C = (0, f.useCallback)(
      (e, t, n) => S((r) => ({ ...r, [t]: { node: e, bDisabled: n } })),
      [],
    ),
    w = (0, f.useCallback)(
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
        let n = Object.entries(x).sort(([, e], [, t]) => P(e.node, t.node)),
          r = n.length,
          i = t > 0 ? -1 : r;
        v !== null &&
          ((i = n.findIndex(([e]) => e === v)),
          a(i !== -1, `Could not find current segmented value position`));
        for (let a = 1; a <= r; a++) {
          let [o, s] = n[(((i + t * a) % r) + r) % r];
          if (!s.bDisabled) {
            (o !== v && y(o), e.stopPropagation(), e.preventDefault());
            break;
          }
        }
      }
    },
    E = l(`SegmentedControl`, t),
    D = c(r),
    A = u(D),
    j = (0, f.useMemo)(
      () => ({
        value: v,
        onValueChange: y,
        register: C,
        unregister: w,
        radius: n,
        size: A,
      }),
      [v, y, C, w, n, A],
    );
  return (0, O.jsx)(s, {
    ...b,
    clickable: !1,
    hoverable: !1,
    focusable: !1,
    variant: E,
    radius: n,
    size: D,
    status: i,
    className: (0, p.default)(h, m[`Variant-${E}`]),
    tabIndex: 0,
    onKeyDown: T,
    children: (0, O.jsx)(k.Provider, {
      value: j,
      children: (0, O.jsxs)(o, {
        className: _,
        style: {
          "--outer-radius":
            typeof n == `string`
              ? `var(--radius-${n})`
              : `var(--control-radius)`,
        },
        children: [
          g,
          v !== null && (0, O.jsx)(N, { radius: n, color: d, size: A }),
        ],
      }),
    }),
  });
}
function j(e) {
  let { value: t, children: n, disabled: r } = e,
    i = (0, f.useContext)(k),
    [a, o] = (0, f.useState)(),
    { register: s, unregister: c } = i || {};
  if (
    ((0, f.useEffect)(
      () => (!a || !s || !c ? () => {} : (s(a, t, !!r), () => c(a, t))),
      [s, c, t, a, r],
    ),
    !i)
  )
    return null;
  let { value: l, onValueChange: u, size: h } = i,
    g = t === l,
    _ = (e) => {
      (e.stopPropagation(), e.preventDefault(), !(g || r) && u(t));
    },
    v = n === void 0 ? t : n;
  return (0, O.jsx)(d, {
    justify: `center`,
    align: `center`,
    ref: o,
    onClick: _,
    "data-selected": g ? `true` : `false`,
    className: (0, p.default)(b, h && m[`Size-${h}`], r ? S : ``),
    children: v,
  });
}
function M(e) {
  let { options: t, getOptionLabel: n = (e) => e, ...r } = e;
  return (0, O.jsx)(M.Root, {
    ...r,
    children: t.map((e) => (0, O.jsx)(M.Item, { value: e, children: n(e) }, e)),
  });
}
((M.Item = j), (M.Root = A));
function N(e) {
  let { radius: t, color: n, size: r } = e;
  return (0, O.jsx)(o, {
    className: (0, p.default)(v, r && m[`Size-${r}`]),
    children: (0, O.jsx)(`div`, { className: g, "data-accent-color": n }),
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
export { M as t };
