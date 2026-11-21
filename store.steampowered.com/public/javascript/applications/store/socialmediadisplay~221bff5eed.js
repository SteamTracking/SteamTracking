/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { d as r } from "./chunk~2f8c67b4de.js";
import {
  As as i,
  Bs as a,
  Cs as o,
  Ds as s,
  Es as c,
  Fs as l,
  Hs as u,
  Is as d,
  Ls as f,
  Ms as p,
  Nc as m,
  Ns as h,
  Os as g,
  PS as _,
  Ps as ee,
  Qc as v,
  Rs as y,
  Ss as b,
  Ts as x,
  Us as S,
  Vs as C,
  Yr as w,
  js as T,
  ks as E,
  nx as D,
  qv as O,
  rb as k,
  ws as A,
  zs as j,
} from "./main.js";
var M = e(t(), 1),
  te = `m6H2njbbWSs-`,
  N = `BgrsKgSro1E-`,
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
    className: te,
    children: (0, V.jsx)(U, { appid: t }),
  });
}
function U(e) {
  let { appid: t } = e,
    { data: n } = O({ appid: t });
  return !n || n.length == 0
    ? null
    : (0, V.jsx)(K, {
        strTitle: k(`#EventDisplay_SocialTitle`),
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
  let a = k(
    r ? `#EventDisplay_Sale_SocialTitle_Dev` : `#EventDisplay_Sale_SocialTitle`,
  );
  return (0, V.jsx)(K, { strTitle: a, id: t, rgSocialMedia: i });
}
function K(e) {
  let { strTitle: t, id: n, rgSocialMedia: i } = e;
  return (0, V.jsxs)(V.Fragment, {
    children: [
      (0, V.jsx)(`div`, {
        className: m(r, `EventEditorTextTitle`),
        children: t,
      }),
      (0, V.jsx)(J, { id: n, rgSocialMedia: i }),
    ],
  });
}
var q = [6, 23, 18, 8, 9, 19, 24];
function J(e) {
  let { id: t, rgSocialMedia: n, className: r } = e,
    i = D.EREALM === _.k_ESteamRealmChina;
  return (0, V.jsx)(`div`, {
    className: m(N, r),
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
        href: v(t.url, !0),
        target: D.IN_CLIENT ? void 0 : `_blank`,
        rel: `noopener noreferrer`,
        children: (0, V.jsx)(w, {
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
      (0, V.jsx)(w, {
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
  1: S,
  2: c,
  3: j,
  4: y,
  5: A,
  6: i,
  18: i,
  23: i,
  7: a,
  8: b,
  9: u,
  10: p,
  11: s,
  12: f,
  13: l,
  14: d,
  15: h,
  16: g,
  17: C,
  19: x,
  20: o,
  21: E,
  22: ee,
  24: T,
};
function $(e) {
  let { linkType: t, ...n } = e,
    r = Q[t];
  return r ? (0, V.jsx)(r, { ...n }) : null;
}
export { W as a, $ as i, H as n, B as o, G as r, J as t };
