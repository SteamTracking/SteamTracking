/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, ft as r } from "./chunk~01cfc309bf.js";
import {
  $b as i,
  Ba as a,
  Bc as o,
  Cl as s,
  jc as c,
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
      allowScrollBehind: o,
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
      className: (0, d.default)(f, !o && p && `egtbEvvs2Oc-`, n),
      onClose: () => t(`onclose`),
      onClick: x,
      ...l,
      onPointerDown: y,
      onPointerUp: b,
      children: (0, m.jsx)(a, { children: i }),
    }),
  });
}
function v(e) {
  let { navID: t, onClose: n, children: r } = e,
    a = u.useCallback(() => n(`cancelbutton`), [n]),
    o = u.useRef(void 0);
  return (
    s(o, !0, !0),
    i()
      ? (0, m.jsx)(l, {
          navID: t ?? `ModalDialog`,
          onCancelButton: a,
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
    children: i,
    strTitle: a,
    wideMode: s,
    ...l
  } = e;
  return (0, m.jsx)(h, {
    onClose: t,
    navID: r ?? `SimpleModalDialog`,
    ...l,
    children: (0, m.jsxs)(`div`, {
      className: (0, d.default)(n, b, s && `GJxb9L6ppZw-`),
      children: [
        ` `,
        (0, m.jsxs)(o, {
          className: x,
          children: [
            a && (0, m.jsx)(`div`, { className: `pxN-7GRnbkY-`, children: a }),
            (0, m.jsx)(`button`, {
              onClick: (e) => (t(`xclick`), e.preventDefault(), !1),
              className: S,
              children: (0, m.jsx)(c, {}),
            }),
          ],
        }),
        (0, m.jsx)(`div`, { className: C, children: i }),
      ],
    }),
  });
}
export { h as n, w as t };
