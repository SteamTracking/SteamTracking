/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, N as n, ft as r } from "./libraries.js";
import {
  Aa as i,
  Ac as a,
  Bb as o,
  dl as s,
  fl as c,
  xc as l,
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
      children: a,
      allowScrollBehind: o,
      ...s
    } = e,
    [c, l] = u.useState(!1),
    p = u.useCallback((e) => {
      e &&
        (e.showModal(),
        e.ownerDocument.defaultView &&
          l(
            e.ownerDocument.body.scrollHeight >
              e.ownerDocument.defaultView.innerHeight,
          ));
    }, []),
    h = u.useCallback(
      (e) => {
        e.target == e.currentTarget && t(`backdropclick`);
      },
      [t],
    );
  return (0, m.jsx)(v, {
    navID: r ?? `ModalDialog`,
    onClose: t,
    children: (0, m.jsx)(`dialog`, {
      ref: p,
      className: (0, d.default)(f, !o && c && `egtbEvvs2Oc-`, n),
      onClose: () => t(`onclose`),
      onClick: h,
      ...s,
      children: (0, m.jsx)(i, { children: a }),
    }),
  });
}
function v(e) {
  let { navID: t, onClose: n, children: r } = e,
    i = u.useCallback(() => n(`cancelbutton`), [n]),
    a = u.useRef(void 0);
  return (
    s(a, !0, !0),
    o()
      ? (0, m.jsx)(c, {
          navID: t ?? `ModalDialog`,
          onCancelButton: i,
          modal: !0,
          navTreeRef: a,
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
    strTitle: o,
    wideMode: s,
    ...c
  } = e;
  return (0, m.jsx)(h, {
    onClose: t,
    navID: r ?? `SimpleModalDialog`,
    ...c,
    children: (0, m.jsxs)(`div`, {
      className: (0, d.default)(n, b, s && `GJxb9L6ppZw-`),
      children: [
        ` `,
        (0, m.jsxs)(a, {
          className: x,
          children: [
            o && (0, m.jsx)(`div`, { className: `pxN-7GRnbkY-`, children: o }),
            (0, m.jsx)(`button`, {
              onClick: (e) => (t(`xclick`), e.preventDefault(), !1),
              className: S,
              children: (0, m.jsx)(l, {}),
            }),
          ],
        }),
        (0, m.jsx)(`div`, { className: C, children: i }),
      ],
    }),
  });
}
export { h as n, w as t };
