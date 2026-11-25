/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, M as n, dt as r } from "./chunk~01cfc309bf.js";
import {
  Mc as i,
  Tl as a,
  Va as o,
  Vc as s,
  ex as c,
  wl as l,
} from "./main.js";
var u = e(t(), 1),
  d = e(n(), 1),
  f = `YAxuZ29pC9k-`,
  p = `u0AMI7eXw6w-`,
  m = r(),
  h = Object.assign(g, { Root: _, Content: y });
function g(e) {
  let { children: t, className: n, ...r } = e;
  return (0, m.jsx)(h.Root, {
    ...r,
    children: (0, m.jsx)(h.Content, { className: n, children: t }),
  });
}
function _(e) {
  let {
      onClose: t,
      className: n,
      navID: r,
      children: i,
      allowScrollBehind: a,
      onPointerDown: s,
      onPointerUp: c,
      ...l
    } = e,
    [p, h] = u.useState(!1),
    g = u.useCallback((e) => {
      e &&
        (e.showModal(),
        e.ownerDocument.defaultView &&
          h(
            e.ownerDocument.body.scrollHeight >
              e.ownerDocument.defaultView.innerHeight,
          ));
    }, []),
    _ = u.useRef(!1),
    y = u.useCallback(
      (e) => {
        ((_.current = e.target == e.currentTarget), s?.(e));
      },
      [s],
    ),
    b = u.useCallback(
      (e) => {
        (e.target != e.currentTarget && (_.current = !1), c?.(e));
      },
      [c],
    ),
    x = u.useCallback(
      (e) => {
        e.target == e.currentTarget && _.current && t(`backdropclick`);
      },
      [t],
    );
  return (0, m.jsx)(v, {
    navID: r ?? `ModalDialog`,
    onClose: t,
    children: (0, m.jsx)(`dialog`, {
      ref: g,
      className: (0, d.default)(f, !a && p && `egtbEvvs2Oc-`, n),
      onClose: () => t(`onclose`),
      onClick: x,
      ...l,
      onPointerDown: y,
      onPointerUp: b,
      children: (0, m.jsx)(o, { children: i }),
    }),
  });
}
function v(e) {
  let { navID: t, onClose: n, children: r } = e,
    i = u.useCallback(() => n(`cancelbutton`), [n]),
    o = u.useRef(void 0);
  return (
    l(o, !0, !0),
    c()
      ? (0, m.jsx)(a, {
          navID: t ?? `ModalDialog`,
          onCancelButton: i,
          modal: !0,
          navTreeRef: o,
          children: r,
        })
      : (0, m.jsx)(m.Fragment, { children: r })
  );
}
function y(e) {
  let { className: t, children: n } = e;
  return (0, m.jsx)(`div`, {
    className: (0, d.default)(p, t),
    onClick: (e) => e.stopPropagation(),
    children: n,
  });
}
var b = `sgMEGCsNg7c-`,
  x = `zSTkW-sxkis-`,
  S = `s682fjGpPIQ-`,
  C = `_3FHQnSAvzY8-`;
function w(e) {
  let {
    onClose: t,
    className: n,
    navID: r,
    children: a,
    strTitle: o,
    wideMode: c,
    ...l
  } = e;
  return (0, m.jsx)(h, {
    onClose: t,
    navID: r ?? `SimpleModalDialog`,
    ...l,
    children: (0, m.jsxs)(`div`, {
      className: (0, d.default)(n, b, c && `GJxb9L6ppZw-`),
      children: [
        ` `,
        (0, m.jsxs)(s, {
          className: x,
          children: [
            o && (0, m.jsx)(`div`, { className: `pxN-7GRnbkY-`, children: o }),
            (0, m.jsx)(`button`, {
              onClick: (e) => (t(`xclick`), e.preventDefault(), !1),
              className: S,
              children: (0, m.jsx)(i, {}),
            }),
          ],
        }),
        (0, m.jsx)(`div`, { className: C, children: a }),
      ],
    }),
  });
}
export { h as n, w as t };
