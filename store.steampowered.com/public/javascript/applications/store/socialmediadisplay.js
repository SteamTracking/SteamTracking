/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { u as r } from "./partnereventshared.module.js";
import {
  As as i,
  Cs as a,
  Ds as o,
  Es as s,
  Hb as c,
  Ms as l,
  Nv as u,
  Os as d,
  Rr as f,
  Sc as p,
  Ss as m,
  Ts as h,
  Uy as g,
  Vc as _,
  _s as ee,
  bS as v,
  bs as y,
  ds as b,
  fs as x,
  gs as S,
  hs as C,
  js as w,
  ks as T,
  ms as E,
  ps as D,
  vs as O,
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
    { data: n } = u({ appid: t });
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
        className: p(r, `EventEditorTextTitle`),
        children: t,
      }),
      (0, V.jsx)(J, { id: n, rgSocialMedia: i }),
    ],
  });
}
var q = [6, 23, 18, 8, 9, 19, 24];
function J(e) {
  let { id: t, rgSocialMedia: n, className: r } = e,
    i = c.EREALM === v.k_ESteamRealmChina;
  return (0, V.jsx)(`div`, {
    className: p(te, r),
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
        href: _(t.url, !0),
        target: c.IN_CLIENT ? void 0 : `_blank`,
        rel: `noopener noreferrer`,
        children: (0, V.jsx)(f, {
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
      (0, V.jsx)(f, {
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
  1: l,
  2: C,
  3: d,
  4: o,
  5: D,
  6: j,
  18: j,
  23: j,
  7: T,
  8: b,
  9: w,
  10: A,
  11: S,
  12: s,
  13: k,
  14: h,
  15: m,
  16: ee,
  17: i,
  19: E,
  20: x,
  21: O,
  22: a,
  24: y,
};
function $(e) {
  let { linkType: t, ...n } = e,
    r = Q[t];
  return r ? (0, V.jsx)(r, { ...n }) : null;
}
export { W as a, $ as i, H as n, B as o, G as r, J as t };
