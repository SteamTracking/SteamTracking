/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import "./steammessages_quest_pb.js";
import { Jy as n, Sc as r, Uy as i, rx as a } from "./main.js";
import {
  a as o,
  c as s,
  i as c,
  l,
  o as u,
  s as d,
  t as f,
} from "./summersale2021store.js";
e();
var p = `lzdS-shJ99Q-`,
  m = `Bi1KUETOty0-`,
  h = `i-g5ZtDKePs-`,
  g = `_68khcGww89o-`,
  _ = `ICMAEivn9RA-`,
  v = `XZcLyc9g0CY-`,
  y = `kni-28dGLz4-`,
  b = `_7huRhU8k3kY-`,
  x = `o-x8158Kjaw-`,
  S = `xMI6n9ZpWJo-`,
  C = `_6S1mPrnZoJA-`,
  w = `hmlT5uI2iFo-`,
  T = `-Oh3kYql8qE-`,
  E = `quEL6nRgkHU-`,
  D = `Bk8HeYAmcxA-`,
  O = `U4LVrnuK9mQ-`,
  k = `TVvt2jSqPxE-`,
  A = `F81q5JdFFbs-`,
  j = `SOSgv9AXa5E-`,
  M = `rjnRPU-qxvU-`,
  N = `KW8oAvnSjMw-`,
  P = `fJ1aZ8mlTv4-`,
  F = `Tw0ESQFMsyY-`,
  I = `Pe4RnxXlyuA-`,
  L = `_2MUcd-trdsU-`,
  R = `SpngiO9a2WA-`,
  z = `Bh4iq-F-F0M-`,
  B = `N9GZo1FTZJs-`,
  V = `Y9ApdMsl8Y0-`,
  H = `RlksnMM6EMs-`,
  U = `b5SnSmoDFvk-`,
  W = `C8iavsJdriA-`,
  G = `PunVunzQvoc-`,
  K = t(),
  q = () => {
    l();
    let e = o(),
      t = f(),
      c = d(),
      u = s(),
      y = [],
      T = [];
    t.forEach((t) => {
      let r = t.eGenre,
        o = a.STORE_BASE_URL + `sale/` + t.strSalePage,
        s = n(
          `#Summer_21_Story_Enter`,
          (0, K.jsx)(`span`, { children: i(t.strGenreName) }),
        );
      if (e.has(r)) {
        let n = ``;
        e.get(r).choice == 1
          ? (n = t.strResultA + `_Summary`)
          : e.get(r).choice == 2 && (n = t.strResultB + `_Summary`),
          y.push(
            (0, K.jsx)(
              Y,
              {
                strSubheader: s,
                bClaimed: !0,
                strBackgroundColor: t.strBackgroundColor,
                eGenre: t.eGenre,
                strTitle: t.strPageTitle,
                strSaleURL: o,
                strSummary: n,
              },
              r,
            ),
          );
      } else {
        let e = ``;
        T.length || (e = `next`),
          T.push(
            (0, K.jsx)(
              Y,
              {
                strID: e,
                strSubheader: s,
                strBackgroundColor: `#7C5F5A`,
                bClaimed: !1,
                eGenre: t.eGenre,
                strTitle: t.strPageTitle,
                strSaleURL: o,
                strSummary: `#Summer_21_Story_Next_Intro`,
              },
              r,
            ),
          );
      }
    });
    let E = y.concat(T);
    return (0, K.jsx)(`div`, {
      className: r(p, a.LANGUAGE),
      children: (0, K.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, K.jsxs)(`a`, {
            href: a.STORE_BASE_URL,
            children: [
              c && (0, K.jsx)(`img`, { className: `BsHO-XUsE9Y-`, src: c }),
              u && (0, K.jsx)(`img`, { className: `RonG1NGMvmU-`, src: u }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: m,
            children: [
              (0, K.jsxs)(`div`, {
                className: h,
                children: [
                  (0, K.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, K.jsx)(`div`, {
                        className: v,
                        children: i(`#Summer_21_Overview_Title_Prefix`),
                      }),
                      i(`#Summer_21_Overview_Title`),
                    ],
                  }),
                  (0, K.jsx)(`div`, {
                    className: r(S, w),
                    children: i(`#Summer_21_Overview_Description1`),
                  }),
                  (0, K.jsx)(`div`, {
                    className: r(S, w),
                    children: i(`#Summer_21_Overview_Description3`),
                  }),
                  (0, K.jsx)(`div`, {
                    className: r(S, w),
                    children: i(`#Summer_21_Overview_Description4`),
                  }),
                  (0, K.jsxs)(`a`, {
                    id: `wallpapers`,
                    href:
                      a.MEDIA_CDN_URL +
                      `store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip`,
                    className: r(S, w, C),
                    children: [`*`, i(`#Summer21_Story_DownloadWallpaper`)],
                  }),
                  (0, K.jsx)(`div`, {
                    className: r(x, w),
                    children: i(`#Summer_21_Overview_Description2`),
                  }),
                  (0, K.jsx)(`div`, {
                    className: r(x, w),
                    children: i(`#Summer_21_Story_Intro`),
                  }),
                  (0, K.jsx)(`div`, {
                    className: r(b, w),
                    children: i(`#Summer_21_Story_Next`),
                  }),
                  (0, K.jsx)(`div`, { className: r(g), children: E }),
                ],
              }),
              (0, K.jsx)(J, {}),
            ],
          }),
        ],
      }),
    });
  },
  J = (e) => {
    let t = u(),
      n;
    if (t == 51)
      n = {
        badge_name: `#Summer21_Badge_Outcome1_Title`,
        badge_desc: `#Summer21_Badge_Outcome1_Description`,
        badge_class: B,
      };
    else if (t == 52)
      n = {
        badge_name: `#Summer21_Badge_Outcome2_Title`,
        badge_desc: `#Summer21_Badge_Outcome2_Description`,
        badge_class: V,
      };
    else if (t == 53)
      n = {
        badge_name: `#Summer21_Badge_Outcome3_Title`,
        badge_desc: `#Summer21_Badge_Outcome3_Description`,
        badge_class: H,
      };
    else if (t == 54)
      n = {
        badge_name: `#Summer21_Badge_Outcome4_Title`,
        badge_desc: `#Summer21_Badge_Outcome4_Description`,
        badge_class: U,
      };
    else if (t == 55)
      n = {
        badge_name: `#Summer21_Badge_Outcome5_Title`,
        badge_desc: `#Summer21_Badge_Outcome5_Description`,
        badge_class: W,
      };
    else return null;
    return (0, K.jsxs)(K.Fragment, {
      children: [
        (0, K.jsx)(`div`, {
          className: r(S, w, A),
          children: i(`#Summer21_Badge_Unlocked_Description`),
        }),
        (0, K.jsxs)(`div`, {
          id: `badge`,
          className: r(M, w),
          children: [
            (0, K.jsxs)(`div`, {
              className: G,
              children: [
                (0, K.jsx)(`div`, {
                  className: P,
                  children: i(`#Summer21_Badge_Prelude`),
                }),
                (0, K.jsx)(`div`, { className: N, children: i(n.badge_name) }),
                (0, K.jsx)(`div`, { className: I, children: i(n.badge_desc) }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: G,
              children: [
                (0, K.jsx)(`a`, {
                  className: r(L, n.badge_class),
                  href: a.COMMUNITY_BASE_URL + `my/badges/` + t,
                }),
                (0, K.jsx)(`div`, {
                  className: F,
                  children: i(`#Summer21_Badge_Congrats1`),
                }),
                (0, K.jsx)(`div`, {
                  className: F,
                  children: i(`#Summer21_Badge_Congrats2`),
                }),
                (0, K.jsx)(`a`, {
                  className: R,
                  href: a.COMMUNITY_BASE_URL + `my/edit/avatar/` + t,
                  children: i(`#Summer21_Badge_View`),
                }),
                (0, K.jsx)(`a`, {
                  className: z,
                  href: a.COMMUNITY_BASE_URL + `my/edit/avatar/` + t,
                }),
              ],
            }),
          ],
        }),
        (0, K.jsx)(`div`, {
          className: r(j, w),
          children: i(`#Summer21_Story_End`),
        }),
      ],
    });
  },
  Y = (e) => {
    let t = c(e.eGenre);
    return (0, K.jsxs)(`a`, {
      id: e.strID,
      href: e.strSaleURL,
      style: { backgroundColor: `${e.strBackgroundColor}` },
      className: r(T, void 0),
      children: [
        (0, K.jsxs)(`div`, {
          className: D,
          children: [
            (0, K.jsx)(`div`, { className: r(E, w), children: e.strSubheader }),
            (0, K.jsx)(`div`, { className: y, children: i(e.strTitle) }),
            (0, K.jsx)(`div`, {
              className: r(k, w),
              children: i(e.strSummary),
            }),
          ],
        }),
        (0, K.jsxs)(`div`, {
          className: O,
          children: [
            t &&
              (0, K.jsx)(`div`, {
                className: `_9BmNqAzIk7s-`,
                style: { backgroundImage: `url(${t})` },
              }),
            !e.bClaimed &&
              (0, K.jsx)(`div`, {
                className: r(`_9BmNqAzIk7s-`, `TYimPHbowxs-`),
              }),
          ],
        }),
      ],
    });
  };
export { q as default };
