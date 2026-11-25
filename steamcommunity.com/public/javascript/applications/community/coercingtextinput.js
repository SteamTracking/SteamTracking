/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { E as t, Pt as n, at as r } from "./chunk~01cfc309bf.js";
import { t as i } from "./chunk~e625c3ac3e.js";
import {
  Ad as a,
  Ct as o,
  Ht as s,
  Iu as c,
  Rt as l,
  Vt as u,
  Wf as d,
  Wu as f,
  kt as p,
  nt as m,
} from "./main.js";
var h = e(n(), 1),
  g = e(t(), 1),
  _ = r();
function v(e) {
  let { extracted: t, remaining: n } = u(e),
    {
      value: r,
      onTextChange: c,
      onTextClear: v,
      clearable: b,
      onChange: x,
      radius: S,
      variant: C,
      size: w,
      beforeContent: T,
      afterContent: E,
      inputRef: D,
      ref: O,
      disabled: k,
      gamepadFocusable: A = !0,
      status: j,
      ...M
    } = n,
    N = d(),
    P = (e) => {
      k || (c(e.target.value), x && x(e));
    },
    F = () => {
      (c(``), v && v());
    },
    I = !!r && b,
    L = I ? (0, _.jsx)(p, { onClick: F, cursor: `pointer`, hitSlop: !0 }) : E,
    R = l(`TextInput`, C),
    z = {
      ...t,
      variant: R,
      size: w,
      radius: S,
      status: j,
      beforeContent: T,
      afterContent: L,
      ref: O,
      disabled: k,
    },
    B = (0, h.useRef)(null),
    V = (e) => {
      B.current && e.target !== B.current && B.current.focus();
    },
    H = A && N,
    U = H ? y : `input`,
    W =
      H && I && !k
        ? {
            onSecondaryButton: F,
            actionDescriptionMap: { [f.SECONDARY]: m.Localize(`#Clear`) },
          }
        : {};
  return (0, _.jsx)(o, {
    cursor: `text`,
    ...z,
    onClick: V,
    children: (0, _.jsx)(U, {
      ref: a(D, B),
      type: `text`,
      "aria-disabled": k,
      readOnly: k,
      className: (0, g.default)(s(), i()),
      value: r || ``,
      onChange: P,
      ...W,
      ...M,
    }),
  });
}
function y(e) {
  return (0, _.jsx)(c, { noFocusRing: !0, ...e });
}
var b = Symbol(`CoercingTextInputNotParseable`);
function x(e) {
  let {
      value: t,
      onValueChange: n,
      valueToString: r,
      valueFromString: i,
      checkValidText: a,
      onBlur: o,
      onKeyDown: s,
      ...c
    } = e,
    [l, u] = (0, h.useState)(null),
    d = l ?? (t === void 0 ? `` : r(t)),
    f = (e) => {
      let t = i(e);
      t !== b && e === r(t)
        ? (u(null), n(t))
        : (!a || a(e, t)) && (u(e), t !== b && n(t, !0));
    },
    p = () => {
      if (l !== null) {
        let e = i(l);
        (e !== b && n(e), u(null));
      }
    };
  return (0, _.jsx)(v, {
    value: d,
    onTextChange: f,
    onKeyDown: (e) => {
      (e.key === `Enter` && p(), s && s(e));
    },
    onBlur: (e) => {
      (p(), o && o(e));
    },
    ...c,
  });
}
export { b as n, v as r, x as t };
