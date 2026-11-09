/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { t as r } from "./basebuttons.js";
import {
  B as i,
  F as a,
  G as o,
  Ht as s,
  I as c,
  Jt as l,
  L as u,
  Ut as d,
  W as f,
  et as p,
} from "./main.js";
var m = e(t(), 1),
  h = n();
function g(e) {
  let [t, n] = (0, m.useState)(null),
    [g, _] = (0, m.useState)([]),
    [v, y] = (0, m.useState)(!1),
    [b, x] = (0, m.useState)(!1),
    S = e.reasons;
  for (let e of g) S = S[e].children;
  let C = t === null ? null : o(t),
    w = t === null ? null : f(t),
    T = () => {
      t === null
        ? g.length === 0
          ? e.onSelect(null)
          : _(g.slice(0, -1))
        : n(null);
    };
  return (0, h.jsxs)(`div`, {
    children: [
      t === null &&
        (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(`div`, {
              className: `oBBLRDyMwQ0-`,
              children: S.map((t, r) =>
                a(t)
                  ? (0, h.jsx)(
                      d,
                      {
                        href: t.url,
                        width: `100%`,
                        color: `dull`,
                        children: p.Localize(t.strLocToken),
                      },
                      t.url,
                    )
                  : (0, h.jsx)(
                      s,
                      {
                        onClick: () => {
                          if (c(t)) {
                            let e = [...g];
                            e.push(r), _(e);
                          } else if (u(t))
                            o(t.value) || f(t.value)
                              ? n(t.value)
                              : e.onSelect(t.value);
                          else throw Error(`This should be unreachable.`);
                        },
                        width: `100%`,
                        color: `dull`,
                        children: (0, h.jsxs)(l, {
                          justify: `between`,
                          align: `center`,
                          width: `100%`,
                          children: [
                            (0, h.jsx)(`span`, {
                              children: c(t)
                                ? p.Localize(t.strLocToken)
                                : i(t.value),
                            }),
                            c(t) && (0, h.jsx)(`span`, { children: `▶` }),
                          ],
                        }),
                      },
                      r,
                    ),
              ),
            }),
            (0, h.jsx)(r, { onClick: T, children: `Back` }),
          ],
        }),
      t !== null &&
        (0, h.jsxs)(`div`, {
          className: `oBBLRDyMwQ0-`,
          children: [
            (0, h.jsx)(`div`, { className: `h39kXDS8c6A-`, children: i(t) }),
            C !== null &&
              (0, h.jsxs)(`label`, {
                children: [
                  (0, h.jsx)(`input`, {
                    type: `checkbox`,
                    checked: v,
                    onChange: (e) => y(e.target.checked),
                  }),
                  ` Targeted at women`,
                ],
              }),
            w !== null &&
              (0, h.jsxs)(`label`, {
                children: [
                  (0, h.jsx)(`input`, {
                    type: `checkbox`,
                    checked: b,
                    onChange: (e) => x(e.target.checked),
                  }),
                  ` Deepfake`,
                ],
              }),
            (0, h.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, h.jsx)(r, { onClick: T, children: `Back` }),
                (0, h.jsx)(r, {
                  onClick: () => {
                    let n = t;
                    n !== null &&
                      (v && o(n) !== null && (n = o(n)),
                      b && f(n) !== null && (n = f(n)),
                      e.onSelect(n));
                  },
                  children: `Continue`,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
export { g as t };
