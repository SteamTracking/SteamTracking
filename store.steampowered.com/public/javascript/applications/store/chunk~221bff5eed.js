/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { d as r } from "./chunk~2f8c67b4de.js";
import {
  As as i,
  Cs as a,
  Ds as o,
  Es as ee,
  Jy as s,
  Ms as c,
  Ns as l,
  Os as u,
  Ps as d,
  Rv as f,
  Ss as p,
  TS as m,
  Ts as h,
  Uc as g,
  Vr as _,
  _s as v,
  bs as y,
  gs as b,
  hs as x,
  js as S,
  ks as C,
  ms as w,
  ps as T,
  qb as E,
  vs as D,
  wc as O,
  ws as k,
  xs as A,
  ys as j,
} from "./main.js";
var M = e(t(), 1),
  N = `m6H2njbbWSs-`,
  te = `BgrsKgSro1E-`,
  P = `z0NFw8S8xoo-`,
  F = `V6ZJUZpOph0-`,
  I = `t-0XbUHeOaw-`,
  L = {
    discord_server: 5,
    youtube: 1,
    facebook: 2,
    twitter: 3,
    twitch: 4,
    reddit: 10,
    instagram: 11,
    tumblr: 12,
    qq: 6,
    qqlink: 18,
    qqchannel: 23,
    bilibili: 8,
    weibo: 9,
    wechat: 17,
    tieba: 13,
    tiktok: 14,
    douyin: 19,
    bluesky: 20,
    mastodon: 21,
    threads: 22,
    vk: 7,
    telegram: 15,
    linkedin: 16,
    rednote: 24,
  };
function R(e) {
  return L[e] ?? 0;
}
var z = new Map(Object.entries(L).map(([e, t]) => [t, e]));
function B(e) {
  return z.get(e);
}
var V = n();
function H(e) {
  let { appid: t } = e;
  return (0, V.jsx)(`div`, {
    className: N,
    children: (0, V.jsx)(U, { appid: t }),
  });
}
function U(e) {
  let { appid: t } = e,
    { data: n } = f({ appid: t });
  return !n || n.length == 0
    ? null
    : (0, V.jsx)(K, {
        strTitle: s(`#EventDisplay_SocialTitle`),
        id: `` + t,
        rgSocialMedia: n,
      });
}
function W(e) {
  return (0, M.useMemo)(
    () =>
      e
        ? e.map((e) => {
            let t = R(e.type);
            return t == 6 || t == 17
              ? { link_type: t, text: e.link }
              : { link_type: t, url: e.link };
          })
        : [],
    [e],
  );
}
function G(e) {
  let { gidClanEvent: t, rgSocial: n, bIsCreatorHomeEvent: r } = e,
    i = W(n);
  if (i.length == 0) return null;
  let a = s(
    r ? `#EventDisplay_Sale_SocialTitle_Dev` : `#EventDisplay_Sale_SocialTitle`,
  );
  return (0, V.jsx)(K, { strTitle: a, id: t, rgSocialMedia: i });
}
function K(e) {
  let { strTitle: t, id: n, rgSocialMedia: i } = e;
  return (0, V.jsxs)(V.Fragment, {
    children: [
      (0, V.jsx)(`div`, {
        className: O(r, `EventEditorTextTitle`),
        children: t,
      }),
      (0, V.jsx)(J, { id: n, rgSocialMedia: i }),
    ],
  });
}
var q = [6, 23, 18, 8, 9, 19, 24];
function J(e) {
  let { id: t, rgSocialMedia: n, className: r } = e,
    i = E.EREALM === m.k_ESteamRealmChina;
  return (0, V.jsx)(`div`, {
    className: O(te, r),
    children: n
      .filter((e) => !i || q.includes(e.link_type || 0))
      .map((e) =>
        e.url
          ? (0, V.jsx)(
              Y,
              { social: e },
              `app_social_link_` + t + `_` + e.link_type,
            )
          : (0, V.jsx)(
              X,
              { social: e },
              `app_social_text_` + t + `_` + e.link_type + `_` + e.text,
            ),
      ),
  });
}
function Y(e) {
  let { social: t } = e;
  return t.url
    ? (0, V.jsx)(`a`, {
        href: g(t.url, !0),
        target: E.IN_CLIENT ? void 0 : `_blank`,
        rel: `noopener noreferrer`,
        children: (0, V.jsx)(_, {
          toolTipContent: t.url,
          children: (0, V.jsx)(Z, { social: t }),
        }),
      })
    : null;
}
function X(e) {
  let { social: t } = e;
  return (0, V.jsxs)(`div`, {
    className: F,
    children: [
      (0, V.jsx)(_, {
        toolTipContent: t.text,
        children: (0, V.jsx)(Z, { social: t }),
      }),
      (0, V.jsx)(`div`, { className: I, children: t.text }),
    ],
  });
}
function Z(e) {
  let { social: t } = e;
  return (0, V.jsx)($, { linkType: t.link_type || 0, className: P });
}
var Q = {
  1: d,
  2: v,
  3: i,
  4: C,
  5: x,
  6: A,
  18: A,
  23: A,
  7: S,
  8: T,
  9: l,
  10: a,
  11: D,
  12: u,
  13: ee,
  14: o,
  15: k,
  16: j,
  17: c,
  19: b,
  20: w,
  21: y,
  22: h,
  24: p,
};
function $(e) {
  let { linkType: t, ...n } = e,
    r = Q[t];
  return r ? (0, V.jsx)(r, { ...n }) : null;
}
export { W as a, $ as i, H as n, B as o, G as r, J as t };
