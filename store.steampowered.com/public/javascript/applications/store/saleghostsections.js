/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~f025431ab0.js";
import { Lt as e, ft as t } from "./chunk~01cfc309bf.js";
import { jc as n, wc as r } from "./main.js";
e();
var i = `WYXlhoxwBlU-`,
  a = `Ypf4QLCxqQU-`,
  o = `jP-Qr-tpETg-`,
  s = `triBTPpfZNQ-`,
  c = `Ep0wQ-6tJLw-`,
  l = `-Rp0JgQXMoA-`,
  u = `QWDBAVIUpho-`,
  d = `JAphvRffM9M-`,
  f = `FQQL32BdomI-`,
  p = `xNRz-0kPOeE-`,
  m = `-F6L5ywkZiU-`,
  h = `_4eS9H8fFOdo-`,
  g = `_7fjzkXY-Nhs-`,
  _ = `qNcrltVSVzI-`,
  v = `A-4nfbw4-fY-`,
  y = `oe2Jr-slLMU-`,
  b = `DGZ5Ptl37g4-`,
  x = `zstB61TOiBA-`,
  S = `-ZEsfMgRePw-`,
  C = `P-N-CSZ-VX8-`,
  w = `aZng9sDwNZg-`,
  T = `x80z1JoR9dc-`,
  E = `X-2r-tUH1gQ-`,
  D = `-A11cjkYCU8-`,
  O = `_10gRNaJtPOU-`,
  k = `UskT6FngUB8-`,
  A = `L03Y6ydPSDM-`,
  j = `rX8DGzBU5pU-`,
  M = `_8mKyAzWvx8I-`,
  N = `RfxR9kxm2-o-`,
  P = `_3EpVljmp8Bg-`,
  F = `h1-hm2PiNH0-`,
  I = `ruaMViMLvdA-`,
  L = t();
function R(e) {
  let {
    capsules_per_row: t,
    is_generic: i,
    is_generic_trailer: R,
    is_event_dash_row: B,
    is_trailer_carousel: V,
    is_spotlights: H,
    is_item_browser: U,
    is_maincap: W,
    is_expanded_maincap: G,
    is_expanded_display: K,
    show_auto_advance_bar: q,
  } = e;
  if (!t) return null;
  if (i)
    return (0, L.jsx)(z, {
      children: (0, L.jsx)(`div`, {
        className: o,
        children: (0, L.jsx)(`div`, { className: s }),
      }),
    });
  if (R)
    return (0, L.jsx)(z, {
      children: (0, L.jsx)(`div`, {
        className: c,
        children: (0, L.jsx)(`div`, { className: s }),
      }),
    });
  if (V)
    return (0, L.jsxs)(z, {
      children: [
        (0, L.jsxs)(`div`, {
          className: D,
          children: [
            (0, L.jsx)(`div`, {
              className: O,
              children: (0, L.jsx)(`div`, { className: s }),
            }),
            (0, L.jsx)(`div`, {
              className: k,
              children: (0, L.jsx)(`div`, { className: s }),
            }),
          ],
        }),
        q &&
          (0, L.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, L.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (B)
    return (0, L.jsx)(z, {
      children: (0, L.jsxs)(`div`, {
        className: x,
        children: [
          (0, L.jsx)(`div`, { className: r(S, a) }),
          (0, L.jsxs)(`div`, {
            className: r(C),
            children: [
              (0, L.jsx)(`div`, { className: r(w, a) }),
              (0, L.jsx)(`div`, { className: r(T, a) }),
              (0, L.jsx)(`div`, { className: r(E, a) }),
            ],
          }),
        ],
      }),
    });
  if (H)
    return (0, L.jsx)(z, {
      children: (0, L.jsxs)(`div`, {
        className: y,
        children: [
          (0, L.jsx)(`div`, { className: a }),
          (0, L.jsx)(`div`, { className: a }),
          (0, L.jsxs)(`div`, {
            className: b,
            children: [
              (0, L.jsx)(`div`, { className: a }),
              (0, L.jsx)(`div`, { className: a }),
            ],
          }),
        ],
      }),
    });
  if (W)
    return (0, L.jsx)(z, {
      children: (0, L.jsxs)(`div`, {
        className: r({ [N]: !0, [void 0]: G }),
        children: [
          (0, L.jsx)(`div`, { className: a }),
          (0, L.jsxs)(`div`, {
            className: r(C),
            children: [
              (0, L.jsx)(`div`, { className: r(w, a) }),
              (0, L.jsx)(`div`, { className: r(T, a) }),
              (0, L.jsx)(`div`, { className: r(P, a) }),
              (0, L.jsx)(`div`, { className: r(F, a) }),
              (0, L.jsx)(`div`, { className: r(I, a) }),
            ],
          }),
        ],
      }),
    });
  if (K)
    return (0, L.jsx)(z, {
      children: (0, L.jsxs)(`div`, {
        className: A,
        children: [
          (0, L.jsx)(`div`, { className: r(j, a) }),
          (0, L.jsx)(`div`, { className: r(M, a) }),
        ],
      }),
    });
  if (U) {
    let e = [];
    for (let r = 0; r < t[0]; r++)
      e.push(
        (0, L.jsx)(
          n,
          {
            className: f,
            focusable: !0,
            children: (0, L.jsx)(`div`, { className: a }),
          },
          `item_browse_ghost_` + r,
        ),
      );
    return (0, L.jsx)(z, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, L.jsx)(z, {
          children: (0, L.jsx)(`div`, {
            className: d,
            children: (0, L.jsx)(`div`, { className: a }),
          }),
        })
      : t[0] == 4
        ? (0, L.jsx)(z, {
            children: (0, L.jsxs)(`div`, {
              className: u,
              children: [
                (0, L.jsx)(`div`, { className: a }),
                (0, L.jsx)(`div`, { className: a }),
                (0, L.jsx)(`div`, { className: a }),
                (0, L.jsx)(`div`, { className: a }),
              ],
            }),
          })
        : (0, L.jsx)(z, {
            children: (0, L.jsxs)(`div`, {
              className: l,
              children: [
                (0, L.jsx)(`div`, { className: a }),
                (0, L.jsx)(`div`, { className: a }),
                (0, L.jsx)(`div`, { className: a }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, L.jsx)(z, {
            children: (0, L.jsxs)(`div`, {
              className: p,
              children: [
                (0, L.jsxs)(`div`, {
                  className: r(m, g),
                  children: [
                    (0, L.jsx)(`div`, { className: a }),
                    (0, L.jsx)(`div`, { className: a }),
                    (0, L.jsx)(`div`, { className: a }),
                  ],
                }),
                (0, L.jsxs)(`div`, {
                  className: r(m, g),
                  children: [
                    (0, L.jsx)(`div`, { className: a }),
                    (0, L.jsx)(`div`, { className: a }),
                    (0, L.jsx)(`div`, { className: a }),
                  ],
                }),
              ],
            }),
          })
        : (0, L.jsx)(z, {
            children: (0, L.jsxs)(`div`, {
              className: p,
              children: [
                (0, L.jsxs)(`div`, {
                  className: r(m, h),
                  children: [
                    (0, L.jsx)(`div`, { className: a }),
                    (0, L.jsx)(`div`, { className: a }),
                  ],
                }),
                (0, L.jsxs)(`div`, {
                  className: r(m, g),
                  children: [
                    (0, L.jsx)(`div`, { className: a }),
                    (0, L.jsx)(`div`, { className: a }),
                    (0, L.jsx)(`div`, { className: a }),
                  ],
                }),
              ],
            }),
          })
      : (0, L.jsx)(z, {
          children: (0, L.jsxs)(`div`, {
            className: _,
            children: [
              (0, L.jsxs)(`div`, {
                className: r(m, h),
                children: [
                  (0, L.jsx)(`div`, { className: a }),
                  (0, L.jsx)(`div`, { className: a }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: r(m, g),
                children: [
                  (0, L.jsx)(`div`, { className: a }),
                  (0, L.jsx)(`div`, { className: a }),
                  (0, L.jsx)(`div`, { className: a }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: r(m, v),
                children: [
                  (0, L.jsx)(`div`, { className: a }),
                  (0, L.jsx)(`div`, { className: a }),
                  (0, L.jsx)(`div`, { className: a }),
                  (0, L.jsx)(`div`, { className: a }),
                ],
              }),
            ],
          }),
        });
}
function z(e) {
  return (0, L.jsx)(n, {
    className: r(i, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
export { z as n, a as r, R as t };
