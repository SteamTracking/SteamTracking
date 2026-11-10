/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { u as r } from "./partnereventshared.module.js";
import {
  As as i,
  Cc as a,
  Cs as o,
  Ds as ee,
  Es as s,
  Hc as c,
  Ms as l,
  Ns as u,
  Os as d,
  Pv as f,
  Ss as p,
  Ts as m,
  Ub as h,
  Wy as g,
  _s as _,
  bs as v,
  fs as y,
  gs as b,
  hs as x,
  js as S,
  ks as C,
  ms as w,
  ps as T,
  vs as E,
  ws as D,
  xS as O,
  xs as k,
  ys as A,
  zr as j,
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
    { data: n } = f({ appid: t });
  return !n || n.length == 0
    ? null
    : (0, V.jsx)(K, {
        strTitle: g(`#EventDisplay_SocialTitle`),
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
  let a = g(
    r ? `#EventDisplay_Sale_SocialTitle_Dev` : `#EventDisplay_Sale_SocialTitle`,
  );
  return (0, V.jsx)(K, { strTitle: a, id: t, rgSocialMedia: i });
}
function K(e) {
  let { strTitle: t, id: n, rgSocialMedia: i } = e;
  return (0, V.jsxs)(V.Fragment, {
    children: [
      (0, V.jsx)(`div`, {
        className: a(r, `EventEditorTextTitle`),
        children: t,
      }),
      (0, V.jsx)(J, { id: n, rgSocialMedia: i }),
    ],
  });
}
var q = [6, 23, 18, 8, 9, 19, 24];
function J(e) {
  let { id: t, rgSocialMedia: n, className: r } = e,
    i = h.EREALM === O.k_ESteamRealmChina;
  return (0, V.jsx)(`div`, {
    className: a(N, r),
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
        href: c(t.url, !0),
        target: h.IN_CLIENT ? void 0 : `_blank`,
        rel: `noopener noreferrer`,
        children: (0, V.jsx)(j, {
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
      (0, V.jsx)(j, {
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
  1: u,
  2: b,
  3: C,
  4: d,
  5: w,
  6: v,
  18: v,
  23: v,
  7: i,
  8: y,
  9: l,
  10: p,
  11: _,
  12: ee,
  13: m,
  14: s,
  15: o,
  16: E,
  17: S,
  19: x,
  20: T,
  21: A,
  22: D,
  24: k,
};
function $(e) {
  let { linkType: t, ...n } = e,
    r = Q[t];
  return r ? (0, V.jsx)(r, { ...n }) : null;
}
export { W as a, $ as i, H as n, B as o, G as r, J as t };
