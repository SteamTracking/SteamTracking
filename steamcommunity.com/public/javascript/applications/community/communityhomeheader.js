/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { A as t, Ct as n, Pt as r, ot as i } from "./libraries.js";
import { t as a } from "./historyutils.js";
import { a as o } from "./storeitemhooks.js";
import {
  Cu as s,
  Mu as c,
  Nd as l,
  Wo as u,
  Zd as d,
  bl as f,
  dm as p,
  qc as m,
  sm as h,
  xu as g,
} from "./main.js";
var _ = e(r()),
  v = `JdaHHph2WEE-`,
  y = `vHIf80HPz1I-`,
  b = `tznxZcQ-M7s-`,
  x = `BNOS1NagB3Q-`,
  S = `A138rxmOEMc-`,
  C = `c4fVpC8TPgw-`,
  w = `rxJ4rAc7kGU-`,
  T = `CLEr6-7ZEOU-`,
  E = `_71xAssygPiI-`,
  D = `Y2-frr1loDg-`,
  O = `bhXVcywYnew-`,
  k = `GgkRnsfpCow-`,
  A = `XvVBNHmVaeQ-`,
  j = `_1CQKcLT5xe0-`,
  M = `_66NCrBN2GQg-`,
  N = `_2Rvl-pkrrEM-`,
  P = `qPEUXE973Pg-`,
  ee = `WeNTqIr4ViU-`,
  F = `_8n-80ldseBI-`,
  I = `_1oWdNOpnzQ8-`,
  L = `rk3AyZUUqg8-`,
  R = `Zy5KmJxsPBE-`,
  z = `Z6wvpAwZe1o-`,
  B = `PU7Ky5WGGPY-`,
  V = `_8HF2GkWbNoc-`,
  H = e(t());
function U() {
  let e = (0, _.useMemo)(
      () => h(`personalapps`, `application_config`) || [],
      [],
    ),
    t = (0, _.useMemo)(() => h(`popularapps`, `application_config`) || [], []),
    n = [...e, ...t];
  return n.length
    ? {
        isLoading: o(n, { include_assets: !0 }) === 1,
        data: { personalAppIds: e, popularAppIds: t },
      }
    : { isLoading: !1, data: { personalAppIds: e, popularAppIds: t } };
}
async function W(e) {
  let t = `${p.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
  return (await H.default.get(t)).data;
}
var G = i();
function K() {
  let e = (0, _.useRef)(void 0);
  return (
    (0, _.useEffect)(() => {
      e.current && e.current.TakeFocus();
    }, []),
    (0, G.jsxs)(s, {
      navRef: e,
      className: v,
      children: [
        (0, G.jsxs)(`div`, {
          className: y,
          children: [
            (0, G.jsxs)(`div`, {
              children: [
                (0, G.jsx)(`div`, {
                  className: b,
                  children: d(`#Community_Home_Header_Title`),
                }),
                (0, G.jsx)(`div`, {
                  className: x,
                  children: d(`#Community_Home_Header_Subtitle`),
                }),
              ],
            }),
            (0, G.jsx)(c, {
              className: S,
              href: `${p.COMMUNITY_BASE_URL}search/users/`,
              children: d(`#Community_Home_Header_AddFriend_Button`),
            }),
          ],
        }),
        (0, G.jsx)(q, {}),
        (0, G.jsx)(Q, {}),
      ],
    })
  );
}
function q() {
  let [e, t] = (0, _.useState)(``),
    [n, r] = (0, _.useState)([]),
    [i, a] = (0, _.useState)(!1),
    o = U();
  return o.isLoading
    ? null
    : (0, G.jsxs)(`div`, {
        className: C,
        children: [
          (0, G.jsxs)(s, {
            className: w,
            children: [
              (0, G.jsx)(J, {
                appShortcuts: o.data.personalAppIds,
                sectionTitle: d(`#Community_Home_Header_GameHubs_ForYou`),
                withDivider: o.data.popularAppIds.length > 0,
              }),
              (0, G.jsx)(J, {
                appShortcuts: o.data.popularAppIds,
                sectionTitle: d(`#Community_Home_Header_GameHubs_Popular`),
              }),
            ],
          }),
          (0, G.jsxs)(s, {
            onFocus: () => a(!0),
            onBlur: (e) => {
              e.currentTarget.contains(e.relatedTarget) || a(!1);
            },
            className: T,
            children: [
              (0, G.jsxs)(s, {
                className: E,
                children: [
                  (0, G.jsx)(`div`, {
                    className: D,
                    children: (0, G.jsx)(u, {
                      onChange: async (e) => {
                        t(e.target.value);
                        let n = await W(e.target.value);
                        r(n);
                      },
                      value: e,
                      className: O,
                      placeholder: d(
                        `#Community_Home_Header_FindGame_Placeholder`,
                      ),
                    }),
                  }),
                  (0, G.jsx)(`div`, {
                    className: k,
                    children: (0, G.jsx)(m, {}),
                  }),
                ],
              }),
              i &&
                (0, G.jsx)(s, {
                  className: `OR4eoZumqTI-`,
                  children: n.map((e) =>
                    (0, G.jsx)(
                      c,
                      {
                        href: `${p.COMMUNITY_BASE_URL}app/${e.appid}`,
                        className: `-F05C2uuY7c-`,
                        children: e.name,
                      },
                      e.appid,
                    ),
                  ),
                }),
            ],
          }),
        ],
      });
}
function J(e) {
  let { appShortcuts: t, sectionTitle: n, withDivider: r } = e;
  return !t || !t.length
    ? null
    : (0, G.jsxs)(`div`, {
        className: A,
        children: [
          (0, G.jsx)(`div`, { className: j, children: n }),
          (0, G.jsx)(`div`, {
            "flow-children": `row`,
            className: g(M, r ? ee : null),
            children: t.map((e, t) => (0, G.jsx)(Y, { appId: e }, t)),
          }),
        ],
      });
}
function Y(e) {
  let t = l.Get().GetApp(e.appId);
  return t
    ? (0, G.jsx)(c, {
        className: N,
        href: `${p.COMMUNITY_BASE_URL}app/${e.appId}`,
        children: (0, G.jsx)(`img`, {
          className: P,
          src: t.GetAssets().GetLibraryCapsuleURL(),
        }),
      })
    : null;
}
var X = `subsection`,
  Z = `browsefilter`;
function Q() {
  let e = n(),
    t = a(e, X),
    r = a(e, Z);
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsx)($, { activeTab: t, activeSort: r }),
      (0, G.jsx)(te, { activeTab: t, activeSort: r }),
    ],
  });
}
function $(e) {
  let { activeTab: t, activeSort: n } = e,
    r = _.useRef(void 0);
  return (
    _.useEffect(() => {
      let e = document.getElementById(t);
      if (e && r?.current) {
        let t = e.offsetLeft + e.clientWidth;
        t > window.innerWidth && r.current.scrollBy(t - window.innerWidth, 0);
      }
    }, [r?.current]),
    (0, G.jsx)(s, {
      "flow-children": `row`,
      className: F,
      ref: r,
      children: [
        { label: `#Community_Home_Header_Filter_All`, id: `` },
        {
          label: `#Community_Home_Header_Filter_Screenshots`,
          id: `screenshots`,
        },
        { label: `#Community_Home_Header_Filter_Artwork`, id: `images` },
        { label: `#Community_Home_Header_Filter_Broadcasts`, id: `broadcasts` },
        { label: `#Community_Home_Header_Filter_Videos`, id: `videos` },
        { label: `#Community_Home_Header_Filter_Workshop`, id: `workshop` },
        { label: `#Community_Home_Header_Filter_News`, id: `news` },
        { label: `#Community_Home_Header_Filter_Guides`, id: `guides` },
        { label: `#Community_Home_Header_Filter_Reviews`, id: `reviews` },
      ].map((e, r) => {
        let i = t ? t === e.id : r === 0,
          a = e.id ? `${X}=${e.id}` : ``,
          o = n ? `${Z}=${n}` : ``,
          s = `${p.COMMUNITY_BASE_URL}${o || a ? `?` : ``}${o}${a ? `&` : ``}${a}`;
        return (0, G.jsx)(
          c,
          {
            id: e.id,
            href: s,
            className: g(I, i ? L : null),
            children: d(e.label),
          },
          e.id,
        );
      }),
    })
  );
}
function te(e) {
  let { activeTab: t, activeSort: n } = e;
  return (0, G.jsxs)(s, {
    "flow-children": `row`,
    className: R,
    children: [
      (0, G.jsx)(`div`, { className: V, children: (0, G.jsx)(f, {}) }),
      [
        { label: `#Community_Home_Header_BrowseFilter_Popular`, id: `` },
        {
          label: `#Community_Home_Header_BrowseFilter_Recent`,
          id: `mostrecent`,
        },
      ].map((e, r) => {
        let i = n ? n === e.id : r === 0,
          a = t ? `${X}=${t}` : ``,
          o = e.id ? `${Z}=${e.id}` : ``,
          s = `${p.COMMUNITY_BASE_URL}${o || a ? `?` : ``}${o}${a ? `&` : ``}${a}`;
        return (0, G.jsx)(
          c,
          { href: s, className: g(z, i ? B : null), children: d(e.label) },
          e.id,
        );
      }),
    ],
  });
}
export { K as default };
