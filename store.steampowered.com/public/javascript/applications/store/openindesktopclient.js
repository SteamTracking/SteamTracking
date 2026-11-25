/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import { It as n, dt as r } from "./chunk~01cfc309bf.js";
import {
  Da as i,
  Ea as a,
  Xb as o,
  b as s,
  ba as c,
  dx as l,
  ox as u,
  va as d,
} from "./main.js";
var f = e(n(), 1),
  p = `Y6jQLvaUs3E-`,
  m = `pdKx9hOuFv0-`,
  h = r();
function g(e) {
  let { children: t, ...n } = e;
  return (0, h.jsx)(i, {
    className: p,
    ...n,
    children: (0, h.jsx)(`div`, { className: m, children: e.children }),
  });
}
function _() {
  return typeof navigator < `u` ? navigator.userAgent : void 0;
}
function v(e = _()) {
  let t = e?.match(
    /Valve (?<family>Steam (?:Client|GameOverlay|Tenfoot|ClientUI|Gamepad(?: VR)?(?:\/Steam Deck)?))( \[(?<betaid>[^\]]*)\])?(\/(?<launcher>[A-Za-z0-9_]+))?\/(?<version>[0-9]*)/,
  );
  if (t) return t.groups;
}
function y(e = _()) {
  return (
    !!e &&
    /iP(?:od|hone|ad)|[pP]lay[sS]tation [vV]ita|Symbian|webOS\/|Blazer|\/GoBrowser|BlackBerry|Opera M(?:obi|ini)\/|Vortex|Android|Windows (?:CE|Mobile)/.test(
      e,
    )
  );
}
var b = `oQvwi1Y4MaQ-`,
  x = `GKmWn7m8mDY-`,
  S = `WdULLkUdyac-`,
  C = `_7q8JkI4IXK8-`,
  w = t({
    OpenInDesktopClient: () => E,
    default: () => E,
    useOpenWebInSteamClient: () => D,
    useShowOpenInSteamBanner: () => T,
  });
function T() {
  return !u.logged_in && !v() && !y();
}
function E() {
  let { fnOpenInSteamClient: e } = D();
  return T()
    ? (0, h.jsx)(i, {
        className: b,
        children: (0, h.jsx)(g, {
          children: (0, h.jsxs)(a, {
            align: `center`,
            gap: `5`,
            padding: `3`,
            children: [
              (0, h.jsx)(i, {
                className: C,
                children: (0, h.jsx)(c, {
                  onClick: e,
                  children: s.Localize(`#OpenInDesktopAppBanner_OpenAppButton`),
                }),
              }),
              (0, h.jsxs)(d, {
                as: `div`,
                size: `4`,
                className: x,
                children: [
                  (0, h.jsx)(d, {
                    weight: `heavy`,
                    className: S,
                    children: s.Localize(`#OpenInDesktopAppBanner_NotSignedIn`),
                  }),
                  (0, h.jsx)(`br`, {}),
                  s.Localize(`#OpenInDesktopAppBanner_Body`),
                ],
              }),
            ],
          }),
        }),
      })
    : null;
}
function D() {
  return {
    fnOpenInSteamClient: f.useCallback(() => {
      let e = `${o()}//openurl/`,
        t = l(`browserid`);
      if (t) {
        let n = new URL(window.location.href),
          r = new URLSearchParams(n.search);
        (r.set(`utm_bid`, t),
          (e += n.origin + n.pathname + `?` + r.toString() + n.hash));
      } else e += window.location.href;
      window.location.href = e;
    }, []),
  };
}
export { D as n, w as t };
