/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~f025431ab0.js";
import { Lt as e, ft as t } from "./chunk~01cfc309bf.js";
import { Bc as n, Nc as r } from "./main.js";
e();
var i = `WYXlhoxwBlU-`,
  a = `Ypf4QLCxqQU-`,
  o = `rDvoly1XGQk-`,
  s = `n2t7u-oXiwM-`,
  c = `a1UUU8zD1Lg-`,
  l = `jP-Qr-tpETg-`,
  u = `triBTPpfZNQ-`,
  d = `Ep0wQ-6tJLw-`,
  f = `-Rp0JgQXMoA-`,
  p = `QWDBAVIUpho-`,
  m = `JAphvRffM9M-`,
  h = `FQQL32BdomI-`,
  g = `xNRz-0kPOeE-`,
  _ = `-F6L5ywkZiU-`,
  v = `_4eS9H8fFOdo-`,
  y = `_7fjzkXY-Nhs-`,
  b = `qNcrltVSVzI-`,
  x = `A-4nfbw4-fY-`,
  S = `oe2Jr-slLMU-`,
  C = `DGZ5Ptl37g4-`,
  w = `zstB61TOiBA-`,
  T = `-ZEsfMgRePw-`,
  E = `P-N-CSZ-VX8-`,
  D = `aZng9sDwNZg-`,
  O = `x80z1JoR9dc-`,
  k = `X-2r-tUH1gQ-`,
  A = `-A11cjkYCU8-`,
  j = `_10gRNaJtPOU-`,
  M = `UskT6FngUB8-`,
  N = `L03Y6ydPSDM-`,
  P = `rX8DGzBU5pU-`,
  F = `_8mKyAzWvx8I-`,
  I = `RfxR9kxm2-o-`,
  L = `_3EpVljmp8Bg-`,
  R = `h1-hm2PiNH0-`,
  z = `ruaMViMLvdA-`,
  B = t();
function V(e) {
  let {
    capsules_per_row: t,
    is_generic: i,
    is_generic_trailer: V,
    is_event_dash_row: U,
    is_trailer_carousel: W,
    is_spotlights: G,
    is_item_browser: K,
    is_maincap: q,
    is_expanded_maincap: J,
    is_expanded_display: Y,
    show_auto_advance_bar: X,
    swipe_row: Z,
  } = e;
  if (typeof Z == `string`)
    return (0, B.jsx)(H, {
      children: (0, B.jsx)(`div`, {
        className: r(o, s),
        children: [0, 1, 2, 3, 4].map((e) =>
          (0, B.jsx)(
            `div`,
            {
              className: r(c, Z === `tall_capsule` && `RDPLi3Xo-Mk-`),
              children: (0, B.jsx)(`div`, { className: a }),
            },
            e,
          ),
        ),
      }),
    });
  if (Z)
    return (0, B.jsx)(H, {
      children: (0, B.jsx)(`div`, {
        className: o,
        children: [0, 1].map((e) =>
          (0, B.jsx)(
            `div`,
            { className: a, style: { width: Z.width, height: Z.height } },
            e,
          ),
        ),
      }),
    });
  if (!t) return null;
  if (i)
    return (0, B.jsx)(H, {
      children: (0, B.jsx)(`div`, {
        className: l,
        children: (0, B.jsx)(`div`, { className: u }),
      }),
    });
  if (V)
    return (0, B.jsx)(H, {
      children: (0, B.jsx)(`div`, {
        className: d,
        children: (0, B.jsx)(`div`, { className: u }),
      }),
    });
  if (W)
    return (0, B.jsxs)(H, {
      children: [
        (0, B.jsxs)(`div`, {
          className: A,
          children: [
            (0, B.jsx)(`div`, {
              className: j,
              children: (0, B.jsx)(`div`, { className: u }),
            }),
            (0, B.jsx)(`div`, {
              className: M,
              children: (0, B.jsx)(`div`, { className: u }),
            }),
          ],
        }),
        X &&
          (0, B.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, B.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (U)
    return (0, B.jsx)(H, {
      children: (0, B.jsxs)(`div`, {
        className: w,
        children: [
          (0, B.jsx)(`div`, { className: r(T, a) }),
          (0, B.jsxs)(`div`, {
            className: r(E),
            children: [
              (0, B.jsx)(`div`, { className: r(D, a) }),
              (0, B.jsx)(`div`, { className: r(O, a) }),
              (0, B.jsx)(`div`, { className: r(k, a) }),
            ],
          }),
        ],
      }),
    });
  if (G)
    return (0, B.jsx)(H, {
      children: (0, B.jsxs)(`div`, {
        className: S,
        children: [
          (0, B.jsx)(`div`, { className: a }),
          (0, B.jsx)(`div`, { className: a }),
          (0, B.jsxs)(`div`, {
            className: C,
            children: [
              (0, B.jsx)(`div`, { className: a }),
              (0, B.jsx)(`div`, { className: a }),
            ],
          }),
        ],
      }),
    });
  if (q)
    return (0, B.jsx)(H, {
      children: (0, B.jsxs)(`div`, {
        className: r({ [I]: !0, [void 0]: J }),
        children: [
          (0, B.jsx)(`div`, { className: a }),
          (0, B.jsxs)(`div`, {
            className: r(E),
            children: [
              (0, B.jsx)(`div`, { className: r(D, a) }),
              (0, B.jsx)(`div`, { className: r(O, a) }),
              (0, B.jsx)(`div`, { className: r(L, a) }),
              (0, B.jsx)(`div`, { className: r(R, a) }),
              (0, B.jsx)(`div`, { className: r(z, a) }),
            ],
          }),
        ],
      }),
    });
  if (Y)
    return (0, B.jsx)(H, {
      children: (0, B.jsxs)(`div`, {
        className: N,
        children: [
          (0, B.jsx)(`div`, { className: r(P, a) }),
          (0, B.jsx)(`div`, { className: r(F, a) }),
        ],
      }),
    });
  if (K) {
    let e = [];
    for (let r = 0; r < t[0]; r++)
      e.push(
        (0, B.jsx)(
          n,
          {
            className: h,
            focusable: !0,
            children: (0, B.jsx)(`div`, { className: a }),
          },
          `item_browse_ghost_` + r,
        ),
      );
    return (0, B.jsx)(H, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, B.jsx)(H, {
          children: (0, B.jsx)(`div`, {
            className: m,
            children: (0, B.jsx)(`div`, { className: a }),
          }),
        })
      : t[0] == 4
        ? (0, B.jsx)(H, {
            children: (0, B.jsxs)(`div`, {
              className: p,
              children: [
                (0, B.jsx)(`div`, { className: a }),
                (0, B.jsx)(`div`, { className: a }),
                (0, B.jsx)(`div`, { className: a }),
                (0, B.jsx)(`div`, { className: a }),
              ],
            }),
          })
        : (0, B.jsx)(H, {
            children: (0, B.jsxs)(`div`, {
              className: f,
              children: [
                (0, B.jsx)(`div`, { className: a }),
                (0, B.jsx)(`div`, { className: a }),
                (0, B.jsx)(`div`, { className: a }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, B.jsx)(H, {
            children: (0, B.jsxs)(`div`, {
              className: g,
              children: [
                (0, B.jsxs)(`div`, {
                  className: r(_, y),
                  children: [
                    (0, B.jsx)(`div`, { className: a }),
                    (0, B.jsx)(`div`, { className: a }),
                    (0, B.jsx)(`div`, { className: a }),
                  ],
                }),
                (0, B.jsxs)(`div`, {
                  className: r(_, y),
                  children: [
                    (0, B.jsx)(`div`, { className: a }),
                    (0, B.jsx)(`div`, { className: a }),
                    (0, B.jsx)(`div`, { className: a }),
                  ],
                }),
              ],
            }),
          })
        : (0, B.jsx)(H, {
            children: (0, B.jsxs)(`div`, {
              className: g,
              children: [
                (0, B.jsxs)(`div`, {
                  className: r(_, v),
                  children: [
                    (0, B.jsx)(`div`, { className: a }),
                    (0, B.jsx)(`div`, { className: a }),
                  ],
                }),
                (0, B.jsxs)(`div`, {
                  className: r(_, y),
                  children: [
                    (0, B.jsx)(`div`, { className: a }),
                    (0, B.jsx)(`div`, { className: a }),
                    (0, B.jsx)(`div`, { className: a }),
                  ],
                }),
              ],
            }),
          })
      : (0, B.jsx)(H, {
          children: (0, B.jsxs)(`div`, {
            className: b,
            children: [
              (0, B.jsxs)(`div`, {
                className: r(_, v),
                children: [
                  (0, B.jsx)(`div`, { className: a }),
                  (0, B.jsx)(`div`, { className: a }),
                ],
              }),
              (0, B.jsxs)(`div`, {
                className: r(_, y),
                children: [
                  (0, B.jsx)(`div`, { className: a }),
                  (0, B.jsx)(`div`, { className: a }),
                  (0, B.jsx)(`div`, { className: a }),
                ],
              }),
              (0, B.jsxs)(`div`, {
                className: r(_, x),
                children: [
                  (0, B.jsx)(`div`, { className: a }),
                  (0, B.jsx)(`div`, { className: a }),
                  (0, B.jsx)(`div`, { className: a }),
                  (0, B.jsx)(`div`, { className: a }),
                ],
              }),
            ],
          }),
        });
}
function H(e) {
  return (0, B.jsx)(n, {
    className: r(i, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
export { H as n, a as r, V as t };
