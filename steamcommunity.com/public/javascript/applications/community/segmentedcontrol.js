/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { D as n, Pt as r, ot as i } from "./libraries.js";
import {
  Jt as a,
  Kt as o,
  Mt as s,
  Yh as c,
  Yt as l,
  nn as u,
} from "./main.js";
var d = e(r(), 1),
  f = e(n(), 1),
  p = t({
    Indicator: () => h,
    IndicatorPosition: () => _,
    Item: () => v,
    SegmentedControl: () => g,
    SegmentedControlBox: () => m,
    "Size-1": () => y,
    "Size-3": () => b,
    "Variant-basic": () => S,
    "Variant-dim": () => T,
    "Variant-inset": () => C,
    "Variant-inset-glass": () => w,
    default: () => E,
    disabled: () => x,
  }),
  m = `-ADhnqjhVc4-`,
  h = `-Kr9IL9YbvI-`,
  g = `zoxSAIfj2-I-`,
  _ = `w-i9GD4p5ok-`,
  v = `_9r9T-BENybY-`,
  y = `UayQOsdqayg-`,
  b = `lEiDoy6Twr4-`,
  x = `rADD4VAHKqM-`,
  S = `o5jFH-P7bJ8-`,
  C = `Nx5xx-M20X4-`,
  w = `_4I3jMtMHJys-`,
  T = `oBernP4-8lg-`,
  E = {
    SegmentedControlBox: m,
    Indicator: h,
    SegmentedControl: g,
    IndicatorPosition: _,
    Item: v,
    "Size-1": `UayQOsdqayg-`,
    "Size-3": `lEiDoy6Twr4-`,
    disabled: x,
    "Variant-basic": `o5jFH-P7bJ8-`,
    "Variant-inset": `Nx5xx-M20X4-`,
    "Variant-inset-glass": `_4I3jMtMHJys-`,
    "Variant-dim": `oBernP4-8lg-`,
  },
  D = i(),
  O = (0, d.createContext)(null);
function k(e) {
  let {
      variant: t,
      radius: n,
      size: r,
      status: i,
      color: a,
      children: u,
      value: h,
      onValueChange: _,
      ...v
    } = e,
    [y, b] = (0, d.useState)({}),
    x = (0, d.useCallback)(
      (e, t, n) => b((r) => ({ ...r, [t]: { node: e, bDisabled: n } })),
      [],
    ),
    S = (0, d.useCallback)(
      (e, t) =>
        b((n) => {
          let r = { ...n };
          return (r[t]?.node === e && delete r[t], r);
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
        let n = Object.entries(y).sort(([, e], [, t]) => N(e.node, t.node)),
          r = n.length,
          i = t > 0 ? -1 : r;
        h !== null &&
          ((i = n.findIndex(([e]) => e === h)),
          c(i !== -1, `Could not find current segmented value position`));
        for (let a = 1; a <= r; a++) {
          let [o, s] = n[(((i + t * a) % r) + r) % r];
          if (!s.bDisabled) {
            (o !== h && _(o), e.stopPropagation(), e.preventDefault());
            break;
          }
        }
      }
    },
    w = o(`SegmentedControl`, t),
    T = (0, d.useMemo)(
      () => ({
        value: h,
        onValueChange: _,
        register: x,
        unregister: S,
        radius: n,
        size: r,
      }),
      [h, _, x, S, n, r],
    );
  return (0, D.jsx)(s, {
    ...v,
    clickable: !1,
    hoverable: !1,
    focusable: !1,
    variant: w,
    radius: n,
    size: r,
    status: i,
    className: (0, f.default)(m, p[`Variant-${w}`]),
    tabIndex: 0,
    onKeyDown: C,
    children: (0, D.jsx)(O.Provider, {
      value: T,
      children: (0, D.jsxs)(l, {
        className: g,
        style: { "--outer-radius": `var(--radius-${n})` },
        children: [u, h !== null && (0, D.jsx)(M, { radius: n, color: a })],
      }),
    }),
  });
}
function A(e) {
  let { value: t, children: n, disabled: r } = e,
    i = (0, d.useContext)(O),
    [o, s] = (0, d.useState)(),
    { register: c, unregister: l } = i || {};
  (0, d.useEffect)(
    () => (!o || !c || !l ? () => {} : (c(o, t, !!r), () => l(o, t))),
    [c, l, t, o, r],
  );
  let m = u(i?.size);
  if (!i) return null;
  let { value: h, onValueChange: g } = i,
    _ = t === h,
    y = (e) => {
      (e.stopPropagation(), e.preventDefault(), !(_ || r) && g(t));
    },
    b = n === void 0 ? t : n;
  return (0, D.jsx)(a, {
    justify: `center`,
    align: `center`,
    ref: s,
    onClick: y,
    "data-selected": _ ? `true` : `false`,
    className: (0, f.default)(v, m && p[`Size-${m}`], r ? x : ``),
    children: b,
  });
}
function j(e) {
  let { options: t, getOptionLabel: n = (e) => e, ...r } = e;
  return (0, D.jsx)(j.Root, {
    ...r,
    children: t.map((e) => (0, D.jsx)(j.Item, { value: e, children: n(e) }, e)),
  });
}
((j.Item = A), (j.Root = k));
function M(e) {
  let { radius: t, color: n } = e;
  return (0, D.jsx)(l, {
    className: _,
    children: (0, D.jsx)(`div`, { className: h, "data-accent-color": n }),
  });
}
function N(e, t) {
  let n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : n & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
}
export { j as t };
