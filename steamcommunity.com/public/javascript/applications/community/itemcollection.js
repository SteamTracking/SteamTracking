/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { a as r, t as i } from "./chunk~79ae1444d5.js";
import { n as a } from "./chunk~a7c5e71e12.js";
import {
  $h as o,
  Cf as s,
  Eu as c,
  Fi as l,
  Ku as u,
  Ou as d,
  af as f,
  hm as p,
  if as m,
  jd as h,
  lm as g,
  ti as _,
  zu as v,
} from "./main.js";
var y = e(t());
function b() {
  let [e, t] = (0, y.useState)(() =>
    p(`profile-itemcollection`, `itemcollection_config`),
  );
  return e;
}
var x = `HIX9b7ATPfU-`,
  S = `NerpSqWj84M-`,
  C = `SOzTsKYY9Yg-`,
  w = n();
function T({ nPercent: e, indeterminate: t, animate: n, className: r }) {
  return (0, w.jsx)(`div`, {
    className: c(x, n && `EWofGQ-jYRU-`, t && `OXJZ1DT0EbQ-`, r),
    style: { "--percent": e / 100 },
  });
}
var E = ({ nPercent: e, size: t = 120, strokeWidth: n = 20 }) => {
    let r = (t - n) / 2,
      i = 2 * Math.PI * r,
      a = i - (e / 100) * i,
      o = e == 100;
    return (0, w.jsx)(`div`, {
      className: c({ [S]: !0, [C]: o }),
      children: (0, w.jsxs)(`svg`, {
        width: t,
        height: t,
        style: { transform: `rotate(-90deg)` },
        children: [
          (0, w.jsx)(`circle`, {
            cx: t / 2,
            cy: t / 2,
            r,
            stroke: `#0c131d`,
            strokeWidth: n,
            fill: `none`,
          }),
          (0, w.jsx)(`circle`, {
            cx: t / 2,
            cy: t / 2,
            r,
            stroke: `#1a9fff`,
            strokeWidth: n,
            fill: `none`,
            strokeDasharray: i,
            strokeDashoffset: a,
            style: { transition: `stroke-dashoffset 0.3s ease-in-out` },
          }),
        ],
      }),
    });
  },
  D = `ha-XQILFXYY-`,
  O = `_2BL8nwTqoNM-`,
  k = `a9nWQ3wjOMk-`,
  A = `_9qrqHMjDofc-`,
  j = `_8m9N0BgOkCc-`,
  M = `_-0AYX0qn8gM-`,
  N = `X7PlTNfr-tY-`,
  P = `HGunfrmkXgE-`,
  F = `iu8dHdbu--I-`,
  I = `NJYY1I5U6Vs-`,
  L = `phu9ZoS-OFM-`,
  R = `j4B05iMCQlU-`,
  z = `ZjJBrqCz0xk-`,
  B = `RXC4bXk2ICY-`,
  V = `_51unuBWfZMU-`,
  H = `uxPpsekviAo-`,
  U = `_55b2ZGoKERw-`,
  W = `oDzIRW7YLXc-`,
  G = `ajZuW4-YluQ-`,
  K = `XNrDXIV3Blw-`,
  q = `-vWnBg-Q4cg-`,
  J = `vox3BAQIp3k-`,
  Y = `uOGK6MO3Z5I-`;
function X(e) {
  let {
      strProfileName: t,
      strSteamId: n,
      bViewingOwnProfile: i,
      rgCommunityItemDefs: a,
      rgUserCommunityItems: s,
      nAppID: l,
      rgRewardItems: u,
      rgUserItemRewarded: f,
      oRewardDefinition: p,
    } = b(),
    h = (0, y.useMemo)(() => {
      let e = new Set();
      s.forEach((t) => {
        e.add(`${t.appid}_${t.item_type}`);
      });
      let t = new Set();
      u?.forEach((e) => {
        t.add(e.community_item_type);
      });
      let n = new Map();
      return (
        a
          .filter(
            (e) =>
              e.active &&
              !e.deleted &&
              !t.has(e.item_type) &&
              e.item_class != 1,
          )
          .sort((t, n) => {
            let r = e.has(`${t.appid}_${t.item_type}`),
              i = e.has(`${n.appid}_${n.item_type}`);
            return (r && i) || (!r && !i)
              ? n.item_type - t.item_type
              : r
                ? -1
                : 1;
          })
          .forEach((t) => {
            (n.has(t.item_class) || n.set(t.item_class, []),
              n
                .get(t.item_class)
                .push({
                  ...t,
                  user_has_item: e.has(`${t.appid}_${t.item_type}`),
                }));
          }),
        n
      );
    }, [a, u, s]),
    v = (0, y.useMemo)(() => {
      if (h.has(3)) {
        let e = h
          .get(3)
          .filter(
            (e) => (
              JSON.parse(e.item_key_values),
              e.item_movie_webm && e.item_movie_mp4
            ),
          );
        if (e.length) return (o(e), e[0]);
      }
      return null;
    }, [h]),
    x = (0, y.useMemo)(() => {
      let e = new Map();
      return (
        a.forEach((t) => {
          e.set(t.item_type, t);
        }),
        e
      );
    }, [a]),
    S = (0, y.useMemo)(() => Array.from(h.keys()).sort((e, t) => t - e), [h]),
    [C, E, O] = y.useMemo(() => {
      let e = s?.filter((e) => {
          let t = x.get(e.item_type);
          return !t || (t.item_class != 2 && t.item_class != 1);
        }),
        t = a.filter((e) => e.item_class != 2 && e.item_class != 1),
        n = e.length || 0,
        r = t.length || 0;
      return [r ? Math.floor((n * 100) / r) : 0, r, n];
    }, [x, a, s]);
  return (0, w.jsx)(_, {
    feature: `itemcollections`,
    children: (0, w.jsx)(r, {
      appID: l,
      children: (0, w.jsxs)(d, {
        className: D,
        children: [
          v &&
            (0, w.jsx)(`div`, {
              className: `ZTNO-ybI-Z0-`,
              children: (0, w.jsxs)(`video`, {
                preload: `auto`,
                playsInline: !0,
                muted: !0,
                autoPlay: !0,
                loop: !0,
                poster: `${g.MEDIA_CDN_COMMUNITY_URL}images/items/${l}/${v.item_image_large}`,
                children: [
                  (0, w.jsx)(`source`, {
                    src: `${g.MEDIA_CDN_COMMUNITY_URL}images/items/${l}/${v.item_movie_webm}`,
                    type: `video/webm`,
                  }),
                  !g.IN_CLIENT &&
                    (0, w.jsx)(`source`, {
                      src: `${g.MEDIA_CDN_COMMUNITY_URL}images/items/${l}/${v.item_movie_mp4}`,
                      type: `video/mp4`,
                    }),
                ],
              }),
            }),
          (0, w.jsx)(re, { nAppID: l }),
          (0, w.jsxs)(`div`, {
            className: M,
            children: [
              (0, w.jsx)(`span`, {
                children: m(`#ItemCollection_Collected`, O, E),
              }),
              (0, w.jsx)(T, {
                className: z,
                animate: !0,
                nPercent: C,
                indeterminate: !1,
              }),
            ],
          }),
          !!p &&
            (0, w.jsx)(`div`, {
              className: c(`_-0AYX0qn8gM-`, `X7PlTNfr-tY-`, `xz2InerLPSo-`),
              children: (0, w.jsx)(Z, {
                oRewardDefinition: p,
                bViewingOwnProfile: i,
                rgRewardItems: u,
                rgUserItemRewarded: f,
                rgCommunityItemDefs: a,
              }),
            }),
          (0, w.jsxs)(`div`, {
            className: c(M, N),
            children: [
              (0, w.jsx)(`div`, {
                className: F,
                children: m(`#ItemCollection_ForPoints_Title`),
              }),
              S.map((e) =>
                (0, w.jsx)(
                  Q,
                  {
                    nAppID: l,
                    itemClass: e,
                    rgItems: h.get(e),
                    bViewingOwnProfile: i,
                    bHideItemStore: e == 2,
                  },
                  `item_class_` + e,
                ),
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
function Z(e) {
  let {
      oRewardDefinition: t,
      rgRewardItems: n,
      rgUserItemRewarded: r,
      rgCommunityItemDefs: i,
      bViewingOwnProfile: a,
    } = e,
    o = (0, y.useMemo)(() => {
      let e = new Set();
      r?.forEach((t) => {
        e.add(
          `${t.item_definition.appid}_${t.item_definition.community_item_type}`,
        );
      });
      let t = new Set();
      n.forEach((e) => {
        t.add(`${e.appid}_${e.community_item_type}`);
      });
      let a = new Map();
      return (
        i
          .filter((e) => e.active)
          .filter((e) => t.has(`${e.appid}_${e.item_type}`))
          .sort((t, n) => {
            let r = e.has(`${t.appid}_${t.item_type}`),
              i = e.has(`${n.appid}_${n.item_type}`);
            return (r && i) || (!r && !i)
              ? n.item_type - t.item_type
              : r
                ? -1
                : 1;
          })
          .forEach((t) => {
            let n = e.has(`${t.appid}_${t.item_type}`);
            (a.has(t.item_class) || a.set(t.item_class, []),
              a.get(t.item_class).push({ ...t, user_has_item: n }));
          }),
        a
      );
    }, [n, r, i]);
  return (0, w.jsxs)(l, {
    navEntryPreferPosition: u.LAST,
    preferredFocus: !0,
    className: I,
    children: [
      (0, w.jsx)(`div`, {
        className: F,
        children: m(`#ItemCollection_ForFree_Title`),
      }),
      (0, w.jsxs)(d, {
        children: [
          (0, w.jsxs)(`div`, {
            className: L,
            children: [
              (0, w.jsx)(`div`, {
                className: R,
                children: m(`#ItemCollection_ForFree_Discovery`),
              }),
              (0, w.jsx)(`p`, {
                children: s(t.rtime_start_time, t.rtime_end_time),
              }),
              (0, w.jsxs)(`p`, {
                children: [
                  m(`#ItemCollection_ForFree_Discovery_desc`),
                  (0, w.jsx)(`br`, {}),
                  f(
                    `#ItemCollection_ForFree_Discovery_desc2`,
                    (0, w.jsx)(v, {
                      href: `${g.STORE_BASE_URL}explore?dq=widget`,
                    }),
                  ),
                ],
              }),
            ],
          }),
          Array.from(o.keys()).map((e) =>
            (0, w.jsx)(
              Q,
              {
                bViewingOwnProfile: a,
                nAppID: t.appid,
                itemClass: e,
                rgItems: o.get(e),
                bHideItemStore: !0,
              },
              `free_item_class_` + e,
            ),
          ),
        ],
      }),
    ],
  });
}
function Q(e) {
  let { rgItems: t, itemClass: n, nAppID: r, bViewingOwnProfile: i } = e,
    a = (0, y.useMemo)(() => t.filter((e) => e.user_has_item).length, [t]),
    o = t.length ? Math.floor((a * 100) / t.length) : 0;
  return (0, w.jsxs)(l, {
    navEntryPreferPosition: u.LAST,
    preferredFocus: !0,
    className: c(P),
    children: [
      (0, w.jsx)($, { ...e }),
      (0, w.jsxs)(d, {
        className: B,
        children: [
          (0, w.jsx)(d, {
            className: V,
            children: m(`#Sale_Section_PointShop_class_` + n),
          }),
          (0, w.jsx)(`div`, { className: H }),
          (0, w.jsx)(ee, { ...e }),
        ],
      }),
      (0, w.jsxs)(d, {
        className: W,
        children: [
          (0, w.jsxs)(d, {
            className: G,
            children: [
              (0, w.jsx)(E, { nPercent: o }),
              (0, w.jsxs)(`div`, {
                className: K,
                children: [
                  (0, w.jsx)(`div`, {
                    children: m(`#ItemCollection_Collected_Item`, a, t.length),
                  }),
                  (0, w.jsx)(`div`, {
                    children: m(`#ItemCollection_Collected_Line`),
                  }),
                ],
              }),
            ],
          }),
          t.map((e) => (0, w.jsx)(te, { item: e }, `item_` + e.item_type)),
        ],
      }),
    ],
  });
}
function $(e) {
  let { itemClass: t, nAppID: n } = e;
  return t === 2
    ? (0, w.jsx)(d, {
        className: F,
        children: m(`#ItemCollection_GameCards_Title`),
      })
    : null;
}
function ee(e) {
  let { itemClass: t, nAppID: n, bViewingOwnProfile: r, bHideItemStore: i } = e;
  return t == 2 && r
    ? (0, w.jsx)(v, {
        href: `${g.COMMUNITY_BASE_URL}my/gamecards/${n}`,
        className: U,
        children: m(`#ItemCollection_Visit_Badge`),
      })
    : i
      ? null
      : (0, w.jsx)(v, {
          href: `${g.STORE_BASE_URL}points/shop/app/${n}`,
          className: U,
          children: m(`#ItemCollection_Visit`),
        });
}
function te(e) {
  let { item: t } = e,
    [n, r] = h(),
    a = t.user_has_item || n,
    o = !a,
    s =
      (a || t.item_class == 2 || t.item_class == 8) && t.item_class != 4
        ? t.item_image_small
        : void 0;
  return (0, w.jsx)(d, {
    ...r,
    onFocus: () => r.onPointerEnter(),
    onBlur: () => r.onPointerLeave(),
    focusable: !0,
    className: q,
    children: (0, w.jsx)(i, {
      appid: t.appid,
      item_image_large: t.item_image_large,
      item_image_small: s,
      item_title: t.item_title,
      item_movie_mp4: a ? t.item_movie_mp4_small : void 0,
      item_movie_webm: a ? t.item_movie_webm_small : void 0,
      className: c({ [J]: !0, [Y]: o }),
      videoClassName: J,
    }),
  });
}
var ne = { include_assets: !0 };
function re(e) {
  let { nAppID: t } = e,
    [n] = a(t, ne);
  return n
    ? (0, w.jsx)(d, {
        className: O,
        children: (0, w.jsxs)(d, {
          children: [
            (0, w.jsxs)(d, {
              className: k,
              children: [
                (0, w.jsx)(d, { className: A, children: n.GetName() }),
                (0, w.jsx)(d, {
                  className: j,
                  children: m(`#ItemCollection_Title`),
                }),
              ],
            }),
            (0, w.jsx)(d, { children: m(`#ItemCollection_EventSubTitle`) }),
          ],
        }),
      })
    : null;
}
var ie = X;
export { ie as default };
