/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { Eo as r } from "./chunk~6b8ddcaac8.js";
import { t as i } from "./chunk~4c13037b22.js";
import { r as a } from "./chunk~2cd73352d8.js";
import { n as o, t as s } from "./chunk~cfd048ddd7.js";
import { n as c } from "./chunk~a7c5e71e12.js";
import { n as l, o as u } from "./chunk~fc8a9e4879.js";
import {
  $y as d,
  Fc as f,
  Fv as p,
  Jy as m,
  Ku as h,
  Pv as g,
  Vv as _,
  Wy as v,
  Yy as y,
  _a as b,
  ca as x,
  ga as S,
  pt as C,
  qb as w,
  sb as T,
  tu as E,
  wc as D,
} from "./main.js";
import { t as O } from "./chunk~6eb508043a.js";
import { a as k, o as A } from "./chunk~4d7555c417.js";
var j = e(t()),
  M = `vZHzprwxhsg-`,
  N = `CptO57fOS6U-`,
  P = `PBHL2qey-s8-`,
  F = n(),
  I = { include_assets: !0, include_basic_info: !0 };
function L(e) {
  let { appid: t } = e,
    [n] = c(t, I),
    r = h(),
    i = n?.GetAssets();
  return !n || !t || !i
    ? null
    : (0, F.jsx)(`div`, {
        className: M,
        children: (0, F.jsx)(`div`, {
          className: N,
          children: (0, F.jsxs)(`a`, {
            href: f(n.GetStorePageURL(), r),
            children: [
              (0, F.jsx)(`img`, { src: i.GetSmallCapsuleURL() }),
              (0, F.jsxs)(`div`, {
                className: P,
                children: [n.GetShortDescription(), ` `],
              }),
            ],
          }),
        }),
      });
}
var R = `XCSfP0iDbaQ-`,
  z = `wZYYf-C8qCk-`,
  B = `orYooiMnaz8-`;
function V(e) {
  let { appid: t } = e,
    n = r(t),
    { data: i } = p(n);
  return i?.season_pass ? (0, F.jsx)(H, { season_pass: i.season_pass }) : null;
}
function H(e) {
  let { season_pass: t } = e;
  if (!t || !t.milestones || t.milestones.length == 0) return null;
  let n = t.milestones.every((e) => !!e.shipped);
  return (0, F.jsx)(C, {
    feature: `seasonpassproductpage`,
    children: (0, F.jsxs)(b, {
      marginTop: `5`,
      children: [
        (0, F.jsx)(a, {
          level: `2`,
          size: `2`,
          weight: `heavy`,
          contrast: `title`,
          marginBottom: `2`,
          children: m(`#SeasonPass_Header`),
        }),
        !n &&
          (0, F.jsxs)(F.Fragment, {
            children: [
              (0, F.jsx)(x, {
                as: `p`,
                size: `4`,
                contrast: `body`,
                marginBottom: `2`,
                children: y(`#SeasonPass_Incomplete_Desc`),
              }),
              (0, F.jsx)(x, {
                as: `p`,
                size: `4`,
                contrast: `body`,
                marginBottom: `2`,
                children: y(
                  `#SeasonPass_Incomplete_Desc2`,
                  (0, F.jsx)(s, {
                    href: `${w.STORE_BASE_URL}account/notificationsettings`,
                    contrast: `title`,
                  }),
                ),
              }),
            ],
          }),
        t.milestones
          .sort((e, t) =>
            e.shipped && t.shipped
              ? (e.rtime_complete ?? 0) - (t.rtime_complete ?? 0)
              : e.shipped
                ? -1
                : t.shipped
                  ? 1
                  : U(e) - U(t),
          )
          .map((e) =>
            (0, F.jsx)(
              W,
              { baseGameAppID: t.appid, milestone: e },
              `ms_` + e.milestone_id,
            ),
          ),
      ],
    }),
  });
}
function U(e) {
  let t = e.dates ?? [];
  return t[t.length - 1]?.rtime ?? 0;
}
function W(e) {
  let { milestone: t, baseGameAppID: n } = e,
    r = (t.milestone_desc?.length ?? 0) > 0;
  return (0, F.jsxs)(b, {
    className: R,
    marginBottom: `2`,
    children: [
      (0, F.jsxs)(S, {
        className: D(z, !!t.shipped && `W-wx69qVbdY-`),
        justify: `between`,
        align: `center`,
        padding: `3`,
        children: [
          (0, F.jsxs)(x, {
            size: `4`,
            weight: `medium`,
            color: t.shipped ? `lime-11` : void 0,
            contrast: `title`,
            children: [
              !!t.shipped && `✓`,
              `\xA0`,
              v.GetTokenWithFallback(t.title ?? []),
            ],
          }),
          (0, F.jsx)(K, { milestone: t }),
        ],
      }),
      r && (0, F.jsx)(G, { milestone: t, baseGameAppID: n }),
    ],
  });
}
function G(e) {
  let { milestone: t, baseGameAppID: n } = e,
    r = v.GetTokenWithFallback(t.milestone_desc ?? []),
    i = t.appid || t.coming_soon_appid;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      i ? (0, F.jsx)(L, { appid: i }) : null,
      (0, F.jsx)(b, {
        padding: `4`,
        children: (0, F.jsxs)(x, {
          as: `div`,
          size: `4`,
          color: `greyneutral-12`,
          children: [
            (0, F.jsx)(k, { text: r }),
            !!t.shipped && (0, F.jsx)(J, { milestone: t, baseGameAppID: n }),
          ],
        }),
      }),
    ],
  });
}
function K(e) {
  let { milestone: t } = e;
  if (t.shipped) return (0, F.jsx)(q, { milestone: t });
  let n = t.dates ?? [],
    r = n[0]?.rtime ?? 0,
    i = n.filter((e, t) => t == 0 || (e.rtime ?? 0) < r);
  return (0, F.jsx)(x, {
    as: `div`,
    size: `3`,
    weight: `light`,
    color: `greyneutral-12`,
    align: `end`,
    children: d(
      `#SeasonPass_Release_Date`,
      (0, F.jsx)(`br`, {}),
      [...i].reverse().map((e, t) => {
        let n = E(e.coming_soon_display_type, e.rtime ?? 0, void 0, !0);
        return (0, F.jsx)(
          `div`,
          { className: t + 1 < i.length ? B : void 0, children: n },
          `dd` + e.rtime + e.coming_soon_display_type,
        );
      }),
    ),
  });
}
function q(e) {
  let { milestone: t } = e,
    n = r(t.appid),
    { data: i } = _(n),
    a = i?.steam_release_date || t.rtime_complete || 0;
  return (0, F.jsx)(x, {
    as: `div`,
    size: `2`,
    weight: `light`,
    color: `lime-11`,
    align: `end`,
    children: d(`#SeasonPass_Released_Date`, (0, F.jsx)(`br`, {}), T(a)),
  });
}
function J(e) {
  let { milestone: t, baseGameAppID: n } = e;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(A, { size: `4`, color: `greyneutral-4`, marginY: `3` }),
      (0, F.jsx)(`div`, {
        children: d(
          t.appid ? `#SeasonPass_DLC_Status` : `#SeasonPass_Event_Status`,
        ),
      }),
      (0, F.jsxs)(S, {
        gap: `2`,
        children: [
          !!t.appid && (0, F.jsx)(Y, { milestone: t }),
          !!t.event_gid && (0, F.jsx)(X, { milestone: t, baseGameAppID: n }),
        ],
      }),
    ],
  });
}
function Y(e) {
  let { milestone: t } = e,
    n = r(t.appid),
    { data: a } = g(n);
  return (0, F.jsx)(s, {
    href: i(a) || `${w.STORE_BASE_URL}app/${t.appid}`,
    underline: `always`,
    contrast: `title`,
    children: m(`#SeasonPass_ShowStore`),
  });
}
function X(e) {
  let { milestone: t, baseGameAppID: n } = e,
    [r, i] = (0, j.useState)(!1),
    a = u(t.event_gid ?? ``);
  return a
    ? (0, F.jsxs)(F.Fragment, {
        children: [
          (0, F.jsx)(o, {
            underline: `always`,
            contrast: `title`,
            onClick: (e) => {
              (e.preventDefault(), e.stopPropagation(), i(!0));
            },
            children: m(`#SeasonPass_ReadEvent`),
          }),
          !!r &&
            (0, F.jsx)(O, {
              appid: n,
              eventModel: a,
              announcementGID: a.AnnouncementGID,
              closeModal: () => i(!1),
              partnerEventStore: l,
              bShowOnlyInitialEvent: !0,
              showAppHeader: !0,
              trackingLocation: 3,
            }),
        ],
      })
    : (0, F.jsx)(s, {
        href: `${w.STORE_BASE_URL}news/app/${n}/view/${t.event_gid}`,
        underline: `always`,
        contrast: `title`,
        children: m(`#SeasonPass_ReadEvent`),
      });
}
export { V as SeasonPassDisplayFromStoreBrowse, H as default };
