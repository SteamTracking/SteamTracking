/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { Lt as n, ft as r } from "./libraries.js";
import {
  Ib as i,
  Kb as a,
  Zb as o,
  b as s,
  ca as c,
  ga as l,
  ha as u,
  ua as d,
} from "./main.js";
var f = e(n(), 1),
  p = `Y6jQLvaUs3E-`,
  m = `pdKx9hOuFv0-`,
  h = r();
function g(e) {
  let { children: t, ...n } = e;
  return (0, h.jsx)(l, {
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
  return !a.logged_in && !v() && !y();
}
function E() {
  let { fnOpenInSteamClient: e } = D();
  return T()
    ? (0, h.jsx)(l, {
        className: b,
        children: (0, h.jsx)(g, {
          children: (0, h.jsxs)(u, {
            align: `center`,
            gap: `5`,
            padding: `3`,
            children: [
              (0, h.jsx)(l, {
                className: C,
                children: (0, h.jsx)(d, {
                  onClick: e,
                  children: s.Localize(`#OpenInDesktopAppBanner_OpenAppButton`),
                }),
              }),
              (0, h.jsxs)(c, {
                as: `div`,
                size: `4`,
                className: x,
                children: [
                  (0, h.jsx)(c, {
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
      let e = `${i()}//openurl/`,
        t = o(`browserid`);
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
