/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { A as t, Ft as n, ot as r, wt as i } from "./chunk~01cfc309bf.js";
import { t as a } from "./chunk~af36c62e9f.js";
import { i as o } from "./chunk~a7c5e71e12.js";
import {
  Fu as s,
  Go as c,
  Id as l,
  Jc as u,
  Su as d,
  dm as f,
  ef as p,
  hm as m,
  wu as h,
  xl as g,
} from "./main.js";
var _ = e(n()),
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
  F = `WeNTqIr4ViU-`,
  ee = `_8n-80ldseBI-`,
  I = `_1oWdNOpnzQ8-`,
  L = `rk3AyZUUqg8-`,
  R = `Zy5KmJxsPBE-`,
  z = `Z6wvpAwZe1o-`,
  B = `PU7Ky5WGGPY-`,
  V = `_8HF2GkWbNoc-`,
  H = e(t());
function U() {
  let e = (0, _.useMemo)(
      () => f(`personalapps`, `application_config`) || [],
      [],
    ),
    t = (0, _.useMemo)(() => f(`popularapps`, `application_config`) || [], []),
    n = [...e, ...t];
  return n.length
    ? {
        isLoading: o(n, { include_assets: !0 }) === 1,
        data: { personalAppIds: e, popularAppIds: t },
      }
    : { isLoading: !1, data: { personalAppIds: e, popularAppIds: t } };
}
async function W(e) {
  let t = `${m.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
  return (await H.default.get(t)).data;
}
var G = r();
function K() {
  let e = (0, _.useRef)(void 0);
  return (
    (0, _.useEffect)(() => {
      e.current && e.current.TakeFocus();
    }, []),
    (0, G.jsxs)(h, {
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
                  children: p(`#Community_Home_Header_Title`),
                }),
                (0, G.jsx)(`div`, {
                  className: x,
                  children: p(`#Community_Home_Header_Subtitle`),
                }),
              ],
            }),
            (0, G.jsx)(s, {
              className: S,
              href: `${m.COMMUNITY_BASE_URL}search/users/`,
              children: p(`#Community_Home_Header_AddFriend_Button`),
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
          (0, G.jsxs)(h, {
            className: w,
            children: [
              (0, G.jsx)(J, {
                appShortcuts: o.data.personalAppIds,
                sectionTitle: p(`#Community_Home_Header_GameHubs_ForYou`),
                withDivider: o.data.popularAppIds.length > 0,
              }),
              (0, G.jsx)(J, {
                appShortcuts: o.data.popularAppIds,
                sectionTitle: p(`#Community_Home_Header_GameHubs_Popular`),
              }),
            ],
          }),
          (0, G.jsxs)(h, {
            onFocus: () => a(!0),
            onBlur: (e) => {
              e.currentTarget.contains(e.relatedTarget) || a(!1);
            },
            className: T,
            children: [
              (0, G.jsxs)(h, {
                className: E,
                children: [
                  (0, G.jsx)(`div`, {
                    className: D,
                    children: (0, G.jsx)(c, {
                      onChange: async (e) => {
                        t(e.target.value);
                        let n = await W(e.target.value);
                        r(n);
                      },
                      value: e,
                      className: O,
                      placeholder: p(
                        `#Community_Home_Header_FindGame_Placeholder`,
                      ),
                    }),
                  }),
                  (0, G.jsx)(`div`, {
                    className: k,
                    children: (0, G.jsx)(u, {}),
                  }),
                ],
              }),
              i &&
                (0, G.jsx)(h, {
                  className: `OR4eoZumqTI-`,
                  children: n.map((e) =>
                    (0, G.jsx)(
                      s,
                      {
                        href: `${m.COMMUNITY_BASE_URL}app/${e.appid}`,
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
            className: d(M, r ? F : null),
            children: t.map((e, t) => (0, G.jsx)(Y, { appId: e }, t)),
          }),
        ],
      });
}
function Y(e) {
  let t = l.Get().GetApp(e.appId);
  return t
    ? (0, G.jsx)(s, {
        className: N,
        href: `${m.COMMUNITY_BASE_URL}app/${e.appId}`,
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
  let e = i(),
    t = a(e, X),
    n = a(e, Z);
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsx)($, { activeTab: t, activeSort: n }),
      (0, G.jsx)(te, { activeTab: t, activeSort: n }),
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
    (0, G.jsx)(h, {
      "flow-children": `row`,
      className: ee,
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
          c = `${m.COMMUNITY_BASE_URL}${o || a ? `?` : ``}${o}${a ? `&` : ``}${a}`;
        return (0, G.jsx)(
          s,
          {
            id: e.id,
            href: c,
            className: d(I, i ? L : null),
            children: p(e.label),
          },
          e.id,
        );
      }),
    })
  );
}
function te(e) {
  let { activeTab: t, activeSort: n } = e;
  return (0, G.jsxs)(h, {
    "flow-children": `row`,
    className: R,
    children: [
      (0, G.jsx)(`div`, { className: V, children: (0, G.jsx)(g, {}) }),
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
          c = `${m.COMMUNITY_BASE_URL}${o || a ? `?` : ``}${o}${a ? `&` : ``}${a}`;
        return (0, G.jsx)(
          s,
          { href: c, className: d(z, i ? B : null), children: p(e.label) },
          e.id,
        );
      }),
    ],
  });
}
export { K as default };
