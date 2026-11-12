/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~f025431ab0.js";
import { Lt as e, ft as t } from "./chunk~01cfc309bf.js";
import "./chunk~5214caf193.js";
import { $y as n, Jy as r, cx as i, wc as a } from "./main.js";
import {
  a as o,
  c as s,
  i as c,
  l,
  o as u,
  s as d,
  t as f,
} from "./chunk~d9568cb429.js";
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
      let a = t.eGenre,
        o = i.STORE_BASE_URL + `sale/` + t.strSalePage,
        s = n(
          `#Summer_21_Story_Enter`,
          (0, K.jsx)(`span`, { children: r(t.strGenreName) }),
        );
      if (e.has(a)) {
        let n = ``;
        (e.get(a).choice == 1
          ? (n = t.strResultA + `_Summary`)
          : e.get(a).choice == 2 && (n = t.strResultB + `_Summary`),
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
              a,
            ),
          ));
      } else {
        let e = ``;
        (T.length || (e = `next`),
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
              a,
            ),
          ));
      }
    });
    let E = y.concat(T);
    return (0, K.jsx)(`div`, {
      className: a(p, i.LANGUAGE),
      children: (0, K.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, K.jsxs)(`a`, {
            href: i.STORE_BASE_URL,
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
                        children: r(`#Summer_21_Overview_Title_Prefix`),
                      }),
                      r(`#Summer_21_Overview_Title`),
                    ],
                  }),
                  (0, K.jsx)(`div`, {
                    className: a(S, w),
                    children: r(`#Summer_21_Overview_Description1`),
                  }),
                  (0, K.jsx)(`div`, {
                    className: a(S, w),
                    children: r(`#Summer_21_Overview_Description3`),
                  }),
                  (0, K.jsx)(`div`, {
                    className: a(S, w),
                    children: r(`#Summer_21_Overview_Description4`),
                  }),
                  (0, K.jsxs)(`a`, {
                    id: `wallpapers`,
                    href:
                      i.MEDIA_CDN_URL +
                      `store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip`,
                    className: a(S, w, C),
                    children: [`*`, r(`#Summer21_Story_DownloadWallpaper`)],
                  }),
                  (0, K.jsx)(`div`, {
                    className: a(x, w),
                    children: r(`#Summer_21_Overview_Description2`),
                  }),
                  (0, K.jsx)(`div`, {
                    className: a(x, w),
                    children: r(`#Summer_21_Story_Intro`),
                  }),
                  (0, K.jsx)(`div`, {
                    className: a(b, w),
                    children: r(`#Summer_21_Story_Next`),
                  }),
                  (0, K.jsx)(`div`, { className: a(g), children: E }),
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
          className: a(S, w, A),
          children: r(`#Summer21_Badge_Unlocked_Description`),
        }),
        (0, K.jsxs)(`div`, {
          id: `badge`,
          className: a(M, w),
          children: [
            (0, K.jsxs)(`div`, {
              className: G,
              children: [
                (0, K.jsx)(`div`, {
                  className: P,
                  children: r(`#Summer21_Badge_Prelude`),
                }),
                (0, K.jsx)(`div`, { className: N, children: r(n.badge_name) }),
                (0, K.jsx)(`div`, { className: I, children: r(n.badge_desc) }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: G,
              children: [
                (0, K.jsx)(`a`, {
                  className: a(L, n.badge_class),
                  href: i.COMMUNITY_BASE_URL + `my/badges/` + t,
                }),
                (0, K.jsx)(`div`, {
                  className: F,
                  children: r(`#Summer21_Badge_Congrats1`),
                }),
                (0, K.jsx)(`div`, {
                  className: F,
                  children: r(`#Summer21_Badge_Congrats2`),
                }),
                (0, K.jsx)(`a`, {
                  className: R,
                  href: i.COMMUNITY_BASE_URL + `my/edit/avatar/` + t,
                  children: r(`#Summer21_Badge_View`),
                }),
                (0, K.jsx)(`a`, {
                  className: z,
                  href: i.COMMUNITY_BASE_URL + `my/edit/avatar/` + t,
                }),
              ],
            }),
          ],
        }),
        (0, K.jsx)(`div`, {
          className: a(j, w),
          children: r(`#Summer21_Story_End`),
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
      className: a(T, void 0),
      children: [
        (0, K.jsxs)(`div`, {
          className: D,
          children: [
            (0, K.jsx)(`div`, { className: a(E, w), children: e.strSubheader }),
            (0, K.jsx)(`div`, { className: y, children: r(e.strTitle) }),
            (0, K.jsx)(`div`, {
              className: a(k, w),
              children: r(e.strSummary),
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
                className: a(`_9BmNqAzIk7s-`, `TYimPHbowxs-`),
              }),
          ],
        }),
      ],
    });
  };
export { q as default };
