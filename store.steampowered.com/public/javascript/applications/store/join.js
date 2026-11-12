/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  V as n,
  ft as r,
  nt as i,
  st as a,
} from "./chunk~01cfc309bf.js";
import { t as o } from "./chunk~eefd71512b.js";
import { r as s, t as c } from "./chunk~f162f235ea.js";
import {
  $b as l,
  Jc as u,
  Jy as d,
  Yc as f,
  ar as p,
  cx as m,
  dr as h,
  fy as g,
  ly as _,
  ux as v,
  yS as y,
  yx as b,
} from "./main.js";
import { t as x } from "./chunk~85f65a382b.js";
function S(e) {
  try {
    if (!e || typeof e != `string`) return null;
    let t = e.split(`.`);
    if (t.length !== 3) return null;
    let [n, r] = t,
      i = C(n),
      a = C(r);
    return !i || !a ? null : { header: JSON.parse(i), body: JSON.parse(a) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function C(e) {
  return atob(e.replace(/-/g, `+`).replace(/_/g, `/`));
}
t();
var w = `HQgdwH5tXUk-`,
  T = `LjnhAYlhNQs-`,
  E = `SqHuEyf-R0c-`,
  D = `HiGC36Dtjco-`,
  O = `_8-2BJN7bxQU-`,
  k = `SmcWa71lVCc-`,
  A = `s4dp5QeFSkw-`,
  j = `F5yttsqclrw-`,
  M = `hvRNTEhrZxc-`,
  N = `S0Tivllig-E-`,
  P = `goxfDMgh3ik-`,
  F = e(i()),
  I,
  L = 864e5;
function R(e) {
  return `appinfo_${e}_${m.LANGUAGE}`;
}
function z(e) {
  return !!(e && Date.now() - e.timeCached < L);
}
function B(e, t) {
  return (
    (I ||= new F.default(
      async (n) => {
        let r = new Map();
        (await Promise.all(n.map((e) => t.GetObject(R(e)))))
          .filter(z)
          .forEach(({ value: e }) => r.set(e.appid, e));
        let i = n.slice().filter((e) => !r.has(e));
        if (i.length) {
          let n = b.Init(u);
          (n.Body().set_language(y(m.LANGUAGE)), n.Body().set_appids(i));
          let a = await f.GetApps(e, n);
          if (a.GetEResult() != 1) throw a.GetErrorMessage();
          a.Body()
            .toObject()
            .apps.forEach((e) => {
              (t.StoreObject(R(e.appid), { timeCached: Date.now(), value: e }),
                r.set(e.appid, e));
            });
        }
        return n.map((e) => r.get(e));
      },
      { cache: !1 },
    )),
    I
  );
}
function V(e) {
  let t = _(),
    n = g();
  return a({
    queryKey: [`appinfo`, e],
    queryFn: async () => B(t, n).load(e),
    staleTime: L,
    enabled: !!e,
  }).data;
}
var H = r();
function U(e) {
  return `?joinsessionid=${e}`;
}
function W(e) {
  return (0, H.jsx)(p, {
    className: D,
    onClick: () =>
      (window.location.href =
        `steam://launch/${e.steamAppId}` + U(e.sessionID)),
    children: e.children,
  });
}
function G(e) {
  let t = s(),
    n = _();
  return t.isSuccess
    ? t.data?.sessions?.length > 0
      ? (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsx)(h, {
              className: M,
              children: `Available Steam Sessions:`,
            }),
            (0, H.jsx)(`div`, {
              className: O,
              children: t.data?.sessions.map((t) =>
                (0, H.jsxs)(
                  `div`,
                  {
                    className: k,
                    children: [
                      (0, H.jsx)(`div`, {
                        className: A,
                        children: t.machine_name,
                      }),
                      (0, H.jsx)(`div`, { className: j, children: t.os_name }),
                      (0, H.jsx)(p, {
                        className: D,
                        onClick: () =>
                          c(
                            n,
                            t.client_instanceid,
                            e.steamAppId,
                            U(e.sessionID),
                          ),
                        children: `Launch Game`,
                      }),
                    ],
                  },
                  t.client_instanceid,
                ),
              ),
            }),
          ],
        })
      : (0, H.jsx)(`div`, {
          className: void 0,
          children: `No logged in sessions`,
        })
    : t.isFetching || t.isRefetching
      ? (0, H.jsx)(o, {})
      : (0, H.jsxs)(`div`, {
          className: void 0,
          children: [`Error `, t.error.message],
        });
}
function K(e) {
  let t = V(e.steamAppId);
  return t
    ? (0, H.jsxs)(H.Fragment, {
        children: [
          (0, H.jsx)(`div`, { className: N, children: `Join Game Session` }),
          (0, H.jsxs)(`div`, {
            className: P,
            children: [
              `You've been invited to join a game! Click below to launch `,
              t.friendly_name || t.name,
              ` on Steam and start playing.`,
            ],
          }),
          (0, H.jsx)(`div`, {
            className: T,
            children: (0, H.jsx)(`iframe`, { src: e.sessionLiveDataUrl }),
          }),
          m.IN_CLIENT
            ? (0, H.jsx)(`div`, {
                className: E,
                children: (0, H.jsx)(W, { ...e, children: `Launch Game` }),
              })
            : (0, H.jsxs)(H.Fragment, {
                children: [
                  (0, H.jsx)(`div`, {
                    className: E,
                    children: v.logged_in
                      ? (0, H.jsx)(G, { ...e })
                      : (0, H.jsxs)(H.Fragment, {
                          children: [
                            (0, H.jsx)(h, {
                              children: `Login to join on another device`,
                            }),
                            (0, H.jsx)(p, {
                              onClick: x,
                              children: d(`#Login_SignIn`),
                            }),
                          ],
                        }),
                  }),
                  !m.IN_MOBILE_WEBVIEW &&
                    (0, H.jsxs)(`div`, {
                      className: `SqHuEyf-R0c-`,
                      children: [
                        (0, H.jsx)(h, { children: `Or launch on this PC` }),
                        (0, H.jsx)(W, { ...e, children: `Launch Game Here` }),
                      ],
                    }),
                ],
              }),
        ],
      })
    : (0, H.jsx)(o, {});
}
function q() {
  let e = l(`multiplayersession_join`, `application_config`),
    { header: t, body: r } = S(new URLSearchParams(n().search).get(`jws`)) || {
      header: {},
      body: {},
    },
    { steamAppId: i } = r,
    a = r[e.jws_sessionid_key],
    o = r[e.jws_livedata_url_key];
  return (
    typeof i == `string` && (i = parseInt(i)),
    (0, H.jsxs)(`div`, {
      className: w,
      children: [
        !i || !o || !o
          ? (0, H.jsx)(`div`, { children: `Invalid session link` })
          : (0, H.jsx)(K, {
              steamAppId: i,
              sessionLiveDataUrl: o,
              sessionID: a,
            }),
        ` `,
      ],
    })
  );
}
export { q as default };
