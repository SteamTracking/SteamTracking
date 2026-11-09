/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { A as e, Ct as t, _t as n, kt as r, on as i } from "./mobx.esm.js";
import { Ut as a } from "./src.js";
import { Va as o, yr as s } from "./dialogs.js";
import { t as c } from "./axios.js";
import {
  c as l,
  f as u,
  h as d,
  m as ee,
  o as f,
  p,
  s as m,
  u as h,
} from "./reorderablelist.module.js";
import "./cross.js";
import "./shared_common.module.js";
var g = i(r()),
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
  v = i(c()),
  y = n();
function b(n) {
  let {
      items: r,
      render: i,
      onDelete: c,
      onEdit: l,
      onReorder: m,
      onMove: b,
      bDisabled: S,
      rowClassName: C,
    } = n,
    [w, T] = g.useState(!1),
    [E, D] = g.useState(void 0),
    [O, k] = g.useState(void 0),
    [A, j] = g.useState(-1),
    [M, N] = g.useState(void 0),
    [P, te] = g.useState(0),
    [F, I] = g.useState(0),
    [L, R] = g.useState(void 0),
    [z, B] = g.useState(``),
    V = g.useRef(void 0),
    H = g.useRef([]),
    U = g.useRef([]),
    W = g.useMemo(() => v.default.CancelToken.source(), []),
    G = () => {
      V.current?.firstElementChild &&
        (te(V.current.firstElementChild.getBoundingClientRect().height),
        I(V.current.firstElementChild.getBoundingClientRect().width));
    };
  g.useEffect(() => {
    G();
  }, []),
    g.useEffect(() => () => W.cancel(`ReorderableList unmounting`), [W]);
  let K = (e, t) => {
      let n = H.current[e]?.current;
      if (!n) {
        console.error(`start element grab missing element at index ` + e);
        return;
      }
      T(!0), j(e), R(void 0), N(e);
      let r = t.clientX - n.getBoundingClientRect().left;
      D(r);
      let i = t.clientY - n.getBoundingClientRect().top;
      k(i),
        (n.style.position = `fixed`),
        (n.style.left = t.clientX - r + `px`),
        (n.style.top = t.clientY - i + `px`),
        (n.style.zIndex = `1`);
    },
    q = g.useCallback(
      (e) => {
        let t = H.current[A]?.current;
        t
          ? ((t.style.left = e.clientX - E + `px`),
            (t.style.top = e.clientY - O + `px`))
          : console.error(`update grab element missing element`);
      },
      [A, E, O],
    ),
    J = g.useCallback(() => {
      let e = H.current[A]?.current;
      e
        ? ((e.style.position = ``), (e.style.zIndex = ``))
        : console.error(`end element drag missing element`),
        T(!1),
        j(-1),
        R(void 0),
        N(void 0);
    }, [A]),
    Y = (e, t) => {
      W.token.reason ||
        (V.current.firstElementChild?.getBoundingClientRect().height > 0 &&
          P != V.current.firstElementChild.getBoundingClientRect().height &&
          G(),
        K(t, e),
        e.preventDefault());
    },
    X = (e, n) => {
      let i = t(n > e ? n - 1 : n, 0, r.length - 1);
      e != i && (b ? b(e, i) : a(r, e, i), $(i), m && m(r));
    },
    Z = (e) => {
      w && !W.token.reason && (J(), X(A, M));
    },
    ne = g.useCallback(
      (e) => {
        if (!w || W.token.reason) return;
        let t = e.clientY,
          n;
        for (let e = 0; e < U.current.length; e++)
          if (
            t <
            (U.current[e].current.getBoundingClientRect().top +
              U.current[e].current.getBoundingClientRect().bottom * 2) /
              3
          ) {
            n = e;
            break;
          }
        N(n ?? U.current.length), q(e);
      },
      [w, W, q],
    );
  o(window, `mousemove`, w ? ne : void 0),
    o(window, `mouseup`, w ? Z : void 0),
    g.useEffect(() => {
      for (let e = H.current.length; e < r.length; e++)
        H.current.push(g.createRef()), U.current.push(g.createRef());
    }, [r.length]);
  let Q = (e) => {
      R(void 0);
      let t = z?.trim(),
        n = Number.parseInt(t);
      if (t.length == 0 || isNaN(n)) return;
      let r = n - 1;
      e != r && X(e, r);
    },
    re = (e, t) => {
      e.key === `Enter` && (Q(t), e.currentTarget.blur());
    },
    [ie, $] = g.useState(void 0);
  return (0, y.jsx)(`div`, {
    className: p,
    ref: V,
    children: r.map((t, n) =>
      (0, y.jsxs)(
        `div`,
        {
          ref: U.current[n],
          children: [
            n == M && (0, y.jsx)(x, { width: F }),
            (0, y.jsx)(`div`, {
              ref: H.current[n],
              className: f,
              children:
                n == A &&
                (0, y.jsxs)(`div`, {
                  className: e(`OfpXVyFy5Fo-`, C),
                  children: [
                    (0, y.jsx)(`img`, {
                      className: e(`SZCLgazwykY-`, `g3MCfqYh-Wk-`),
                      src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
                    }),
                    (0, y.jsx)(`input`, {
                      className: e(
                        `Z2hFr9c9Bx8-`,
                        `F7c1qF6I3Vk-`,
                        `g3MCfqYh-Wk-`,
                      ),
                      type: `text`,
                      value: (M > n ? M - 1 : M) + 1,
                      disabled: !0,
                    }),
                    i(t, n),
                  ],
                }),
            }),
            (0, y.jsxs)(`div`, {
              className: e(
                d,
                C,
                w && `hJ8eUERcJ1g-`,
                n == A && `RSxJyqlJePw-`,
                ie == n && `CSyJhiym-Wc-`,
              ),
              onAnimationEnd: () => $(void 0),
              children: [
                (0, y.jsx)(`img`, {
                  className: e(u, h, S && `CdaHiMxsOyE-`),
                  src: _,
                  onMouseDown: S ? void 0 : (e) => Y(e, n),
                }),
                (0, y.jsx)(`input`, {
                  className: e(ee, S && `F7c1qF6I3Vk-`),
                  type: `text`,
                  value: L == n ? z : n + 1,
                  disabled: S || n == A,
                  onChange: (e) => B(e.target.value),
                  onKeyDown: (e) => re(e, n),
                  onFocus: (e) => {
                    R(n), B(e.target.value);
                  },
                  onBlur: () => Q(n),
                }),
                i(t, n),
                n != A &&
                  !!(l || c) &&
                  (0, y.jsxs)(`div`, {
                    className: `PZ2dh9brop4-`,
                    children: [
                      !!l &&
                        (0, y.jsx)(`div`, {
                          className: `EJE6Uh9cQZA-`,
                          onClick: (e) => l(n, e),
                          children: (0, y.jsx)(s, {}),
                        }),
                      !!c &&
                        (0, y.jsx)(`img`, {
                          className: `EJE6Uh9cQZA-`,
                          src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==`,
                          onClick: (e) => c(n, e),
                        }),
                    ],
                  }),
              ],
            }),
            M == r.length && n == r.length - 1 && (0, y.jsx)(x, { width: F }),
          ],
        },
        n,
      ),
    ),
  });
}
function x(e) {
  let { width: t } = e;
  return (0, y.jsx)(`div`, {
    className: l,
    children: (0, y.jsx)(`div`, { className: m, style: { width: t } }),
  });
}
export { b as t };
