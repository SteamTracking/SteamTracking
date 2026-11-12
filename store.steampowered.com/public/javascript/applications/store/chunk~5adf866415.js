/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { t as r } from "./chunk~684e72ad45.js";
import "./chunk~8681f5c764.js";
import { i } from "./chunk~2f085f1384.js";
import {
  Jy as a,
  Mn as o,
  as as s,
  bc as c,
  fn as l,
  ko as u,
  wc as d,
} from "./main.js";
var f = e(t(), 1),
  p = n(),
  m = `Og4Odc3VLI8-`,
  h = `oliNocjo3ok-`,
  g = `x3qY8Eev7UU-`,
  _ = `_3lYhLNSBOpE-`,
  v = `tyYNnQMYYyw-`,
  y = `-WD8g17w7iA-`;
function b() {
  let [e, t] = f.useState(void 0),
    n = f.useCallback(() => t(void 0), []);
  return [
    t,
    (0, p.jsx)(l, {
      active: e !== void 0,
      children: (0, p.jsx)(x, { closeModal: n, rgImageURL: e }),
    }),
  ];
}
function x(e) {
  let { closeModal: t, rgImageURL: n } = e,
    [r, i] = f.useState(0),
    s = n?.length ?? 0,
    c = f.useCallback(() => {
      i(r == 0 ? s - 1 : r - 1);
    }, [r, s]),
    l = f.useCallback(() => {
      n && r + 1 >= s ? i(0) : i(r + 1);
    }, [r, n, s]);
  return (0, p.jsxs)(o, {
    title: a(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: t,
    bHideCloseIcon: !0,
    modalClassName: h,
    children: [
      (0, p.jsx)(S, {
        index: r,
        numElements: n?.length || 0,
        fnForward: l,
        fnBackwards: c,
        fnClose: t,
        bCircular: !0,
      }),
      (0, p.jsx)(`div`, {
        className: g,
        children: (0, p.jsx)(`img`, { className: _, src: n?.[r], alt: `` }),
      }),
    ],
  });
}
function S(e) {
  let {
    index: t,
    numElements: n,
    fnForward: i,
    fnBackwards: o,
    fnClose: s,
    bCircular: l,
  } = e;
  (r(`ArrowLeft`, () => o?.(), !0, !0),
    r(`Left`, () => o?.(), !0, !0),
    r(`ArrowRight`, () => i?.(), !0, !0),
    r(`Right`, () => i?.(), !0, !0),
    r(`Escape`, () => s && s(), !0, !0),
    r(`Esc`, () => s && s(), !0, !0));
  let f = n > 1;
  return (0, p.jsxs)(`div`, {
    className: v,
    children: [
      f &&
        (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)(`button`, {
              type: `button`,
              className: d(
                `-WD8g17w7iA-`,
                t === 0 && !l ? `apJ9YvEIT9k-` : null,
              ),
              onClick: o,
              "aria-label": a(`#Carousel_Prev`),
              children: (0, p.jsx)(u, { angle: 270 }),
            }),
            (0, p.jsx)(`button`, {
              type: `button`,
              className: d(
                `-WD8g17w7iA-`,
                t === n - 1 && !l ? `apJ9YvEIT9k-` : null,
              ),
              onClick: i,
              "aria-label": a(`#Carousel_Next`),
              children: (0, p.jsx)(u, { angle: 90 }),
            }),
          ],
        }),
      (0, p.jsx)(`button`, {
        type: `button`,
        className: y,
        onClick: s,
        "aria-label": a(`#Button_Close`),
        children: (0, p.jsx)(c, {}),
      }),
    ],
  });
}
var C = `xq-I5249Blg-`,
  w = `_-8Ur6QivGZk-`,
  T = 1.3,
  E = 3,
  D = 256;
function O(e) {
  let [t, n] = (0, f.useState)(!1),
    [r, a] = (0, f.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    o = (0, f.useRef)(null),
    [c, l] = b();
  return (
    (0, f.useEffect)(() => {
      r.naturalWidth > r.displayWidth * T &&
        r.naturalHeight > r.displayHeight * T &&
        r.naturalWidth > D &&
        r.naturalWidth / r.naturalHeight < E &&
        n(!0);
    }, [r]),
    t
      ? (0, p.jsxs)(`span`, {
          className: C,
          children: [
            l,
            (0, p.jsx)(`span`, { className: w, children: (0, p.jsx)(s, {}) }),
            (0, p.jsx)(`img`, {
              ...e,
              className: d({ ...(e.className && { [e.className]: !0 }) }),
              onClick: (t) => {
                e.src && c([e.src]);
              },
            }),
          ],
        })
      : (0, p.jsx)(`img`, {
          ...e,
          ref: o,
          onLoad: (e) => {
            if (!e.currentTarget.closest(`a`) && !i()) {
              let {
                naturalWidth: t,
                naturalHeight: n,
                width: r,
                height: i,
              } = e.currentTarget;
              a({
                naturalWidth: t,
                naturalHeight: n,
                displayWidth: r,
                displayHeight: i,
              });
            }
          },
        })
  );
}
function k(e) {
  let {
      className: t,
      srcs: n,
      lazyLoad: r,
      width: i,
      height: a,
      alt: o,
      crossOrigin: s,
    } = e,
    [c, l] = f.useState(n.length),
    [u, d] = f.useState(0);
  f.useEffect(() => {
    c != n.length && (l(n.length), d(0));
  }, [c, n.length]);
  let m = f.useCallback(() => {
    (e.onImageError && e.onImageError(e.srcs[u]),
      u + 1 < e.srcs.length && d(u + 1));
  }, [u, e]);
  return n.length == 0
    ? null
    : (0, p.jsx)(`img`, {
        className: t,
        src: n[u],
        crossOrigin: s,
        onError: m,
        loading: r ? `lazy` : void 0,
        width: i,
        height: a,
        alt: o,
      });
}
function A(e) {
  let [t, n] = f.useState(!1),
    {
      className: r,
      src: i,
      lazyLoad: o,
      width: s,
      height: c,
      alt: l,
      crossOrigin: u,
    } = e;
  return t
    ? (0, p.jsxs)(`div`, {
        className: m,
        children: [
          (0, p.jsx)(`p`, { children: a(`#Image_ErrorTitle`, i) }),
          (0, p.jsx)(`ul`, {
            children: (0, p.jsx)(`li`, { children: a(`#Image_Error_msg1`) }),
          }),
          (0, p.jsx)(`p`, { children: a(`#Image_Error_suggestion`) }),
        ],
      })
    : (0, p.jsx)(O, {
        className: r,
        src: i,
        onError: () => n(!0),
        crossOrigin: u,
        loading: o ? `lazy` : void 0,
        width: s,
        height: c,
        alt: l,
      });
}
export { b as a, S as i, k as n, m as o, O as r, A as t };
