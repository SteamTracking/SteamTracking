/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  j as t,
  sn as n,
  vt as r,
  wt as i,
} from "./chunk~de7f2df91c.js";
import { Bt as a } from "./chunk~25a6634263.js";
import { Er as o, Ga as s } from "./chunk~1fa4b8f2ff.js";
import { t as c } from "./chunk~f4e4ed5c17.js";
import {
  c as l,
  f as u,
  h as d,
  m as f,
  o as p,
  p as m,
  s as h,
  u as g,
} from "./chunk~6f51836c6e.js";
import "./chunk~cf8a297cc4.js";
import "./chunk~166eab4331.js";
var _ = n(e()),
  v = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
  y = n(c()),
  b = r();
function x(e) {
  let {
      items: n,
      render: r,
      onDelete: c,
      onEdit: l,
      onReorder: h,
      onMove: x,
      bDisabled: C,
      rowClassName: w,
    } = e,
    [T, E] = _.useState(!1),
    [D, O] = _.useState(void 0),
    [k, A] = _.useState(void 0),
    [j, M] = _.useState(-1),
    [N, P] = _.useState(void 0),
    [ee, te] = _.useState(0),
    [F, I] = _.useState(0),
    [L, R] = _.useState(void 0),
    [z, B] = _.useState(``),
    V = _.useRef(null),
    H = _.useRef([]),
    U = _.useRef([]),
    W = _.useMemo(() => y.default.CancelToken.source(), []),
    G = () => {
      V.current?.firstElementChild &&
        (te(V.current.firstElementChild.getBoundingClientRect().height),
        I(V.current.firstElementChild.getBoundingClientRect().width));
    };
  (_.useEffect(() => {
    G();
  }, []),
    _.useEffect(() => () => W.cancel(`ReorderableList unmounting`), [W]));
  let K = (e, t) => {
      let n = H.current[e]?.current;
      if (!n) {
        console.error(`start element grab missing element at index ` + e);
        return;
      }
      (E(!0), M(e), R(void 0), P(e));
      let r = t.clientX - n.getBoundingClientRect().left;
      O(r);
      let i = t.clientY - n.getBoundingClientRect().top;
      (A(i),
        (n.style.position = `fixed`),
        (n.style.left = t.clientX - r + `px`),
        (n.style.top = t.clientY - i + `px`),
        (n.style.zIndex = `1`));
    },
    q = _.useCallback(
      (e) => {
        let t = H.current[j]?.current;
        t
          ? D !== void 0 &&
            k !== void 0 &&
            ((t.style.left = e.clientX - D + `px`),
            (t.style.top = e.clientY - k + `px`))
          : console.error(`update grab element missing element`);
      },
      [j, D, k],
    ),
    J = _.useCallback(() => {
      let e = H.current[j]?.current;
      (e
        ? ((e.style.position = ``), (e.style.zIndex = ``))
        : console.error(`end element drag missing element`),
        E(!1),
        M(-1),
        R(void 0),
        P(void 0));
    }, [j]),
    Y = (e, t) => {
      if (W.token.reason) return;
      let n = V.current?.firstElementChild;
      (n &&
        n.getBoundingClientRect().height > 0 &&
        ee != n.getBoundingClientRect().height &&
        G(),
        K(t, e),
        e.preventDefault());
    },
    X = (e, t) => {
      let r = i(t > e ? t - 1 : t, 0, n.length - 1);
      e != r && (x ? x(e, r) : a(n, e, r), $(r), h && h(n));
    },
    Z = (e) => {
      T && !W.token.reason && (J(), N !== void 0 && X(j, N));
    },
    ne = _.useCallback(
      (e) => {
        if (!T || W.token.reason) return;
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
        (P(n ?? U.current.length), q(e));
      },
      [T, W, q],
    );
  (s(window, `mousemove`, T ? ne : void 0),
    s(window, `mouseup`, T ? Z : void 0),
    _.useEffect(() => {
      for (let e = H.current.length; e < n.length; e++)
        (H.current.push(_.createRef()), U.current.push(_.createRef()));
    }, [n.length]));
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
    [ie, $] = _.useState(void 0);
  return (0, b.jsx)(`div`, {
    className: m,
    ref: V,
    children: n.map((e, i) =>
      (0, b.jsxs)(
        `div`,
        {
          ref: U.current[i],
          children: [
            i == N && (0, b.jsx)(S, { width: F }),
            (0, b.jsx)(`div`, {
              ref: H.current[i],
              className: p,
              children:
                i == j &&
                N !== void 0 &&
                (0, b.jsxs)(`div`, {
                  className: t(`OfpXVyFy5Fo-`, w),
                  children: [
                    (0, b.jsx)(`img`, {
                      className: t(`SZCLgazwykY-`, `g3MCfqYh-Wk-`),
                      src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
                    }),
                    (0, b.jsx)(`input`, {
                      className: t(
                        `Z2hFr9c9Bx8-`,
                        `F7c1qF6I3Vk-`,
                        `g3MCfqYh-Wk-`,
                      ),
                      type: `text`,
                      value: (N > i ? N - 1 : N) + 1,
                      disabled: !0,
                    }),
                    r(e, i),
                  ],
                }),
            }),
            (0, b.jsxs)(`div`, {
              className: t(
                d,
                w,
                T && `hJ8eUERcJ1g-`,
                i == j && `RSxJyqlJePw-`,
                ie == i && `CSyJhiym-Wc-`,
              ),
              onAnimationEnd: () => $(void 0),
              children: [
                (0, b.jsx)(`img`, {
                  className: t(u, g, C && `CdaHiMxsOyE-`),
                  src: v,
                  onMouseDown: C ? void 0 : (e) => Y(e, i),
                }),
                (0, b.jsx)(`input`, {
                  className: t(f, C && `F7c1qF6I3Vk-`),
                  type: `text`,
                  value: L == i ? z : i + 1,
                  disabled: C || i == j,
                  onChange: (e) => B(e.target.value),
                  onKeyDown: (e) => re(e, i),
                  onFocus: (e) => {
                    (R(i), B(e.target.value));
                  },
                  onBlur: () => Q(i),
                }),
                r(e, i),
                i != j &&
                  !!(l || c) &&
                  (0, b.jsxs)(`div`, {
                    className: `PZ2dh9brop4-`,
                    children: [
                      !!l &&
                        (0, b.jsx)(`div`, {
                          className: `EJE6Uh9cQZA-`,
                          onClick: (e) => l?.(i, e),
                          children: (0, b.jsx)(o, {}),
                        }),
                      !!c &&
                        (0, b.jsx)(`img`, {
                          className: `EJE6Uh9cQZA-`,
                          src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==`,
                          onClick: (e) => c?.(i, e),
                        }),
                    ],
                  }),
              ],
            }),
            N == n.length && i == n.length - 1 && (0, b.jsx)(S, { width: F }),
          ],
        },
        i,
      ),
    ),
  });
}
function S(e) {
  let { width: t } = e;
  return (0, b.jsx)(`div`, {
    className: l,
    children: (0, b.jsx)(`div`, { className: h, style: { width: t } }),
  });
}
export { x as t };
