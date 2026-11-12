/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, vt as n, z as r } from "./chunk~de7f2df91c.js";
import { Mt as i, Ot as a, Pt as o, u as s } from "./chunk~25a6634263.js";
import { ua as c } from "./chunk~1fa4b8f2ff.js";
import { r as l } from "./chunk~971d501580.js";
import { a as u, i as d } from "./chunk~a292304e38.js";
import { c as f, f as p, i as m } from "./chunk~c12081e677.js";
var h = t(e(), 1),
  g = t(o(), 1),
  _ = `WKhffzvaq2A-`;
function v() {
  return _;
}
var y = n();
function b(e) {
  let { extracted: t, remaining: n } = l(e),
    {
      value: o,
      onTextChange: s,
      onTextClear: c,
      clearable: _,
      onChange: b,
      radius: S,
      variant: C,
      size: w,
      beforeContent: T,
      afterContent: E,
      inputRef: D,
      ref: O,
      disabled: k,
      gamepadFocusable: A = !0,
      status: j,
      ...M
    } = n,
    N = r(),
    P = (e) => {
      k || (s(e.target.value), b && b(e));
    },
    F = () => {
      (s(``), c && c());
    },
    I = !!o && _,
    L = I ? (0, y.jsx)(p, { onClick: F, cursor: `pointer`, hitSlop: !0 }) : E,
    R = d(`TextInput`, C),
    z = {
      ...t,
      variant: R,
      size: w,
      radius: S,
      status: j,
      beforeContent: T,
      afterContent: L,
      ref: O,
      disabled: k,
    },
    B = (0, h.useRef)(null),
    V = (e) => {
      B.current && e.target !== B.current && B.current.focus();
    },
    H = A && N,
    U = H ? x : `input`,
    W =
      H && I && !k
        ? {
            onSecondaryButton: F,
            actionDescriptionMap: { [i.SECONDARY]: m.Localize(`#Clear`) },
          }
        : {};
  return (0, y.jsx)(f, {
    cursor: `text`,
    ...z,
    onClick: V,
    children: (0, y.jsx)(U, {
      ref: a(D, B),
      type: `text`,
      "aria-disabled": k,
      readOnly: k,
      className: (0, g.default)(u(), v()),
      value: o || ``,
      onChange: P,
      ...W,
      ...M,
    }),
  });
}
function x(e) {
  return (0, y.jsx)(s, { noFocusRing: !0, ...e });
}
function S(e) {
  if (!e || e.trim().length == 0) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function C(e, t) {
  let n = new Set();
  return e.filter((e) => {
    let r = t(e);
    return !n.has(r) && (n.add(r), !0);
  });
}
function w(...e) {
  return [...new Set(e.flat())];
}
function T(e) {
  let { href: t, children: n } = e;
  return t
    ? (0, y.jsx)(`a`, { ...e, children: n })
    : (0, y.jsx)(y.Fragment, { children: n });
}
function E(e, t) {
  let n = {
      sText: c(`#Dashboard_UpcomingEvents_AppReleaseState_unavailable`),
      sTooltip: c(
        `#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description`,
      ),
      bPrereleaseOrReleased: !1,
    },
    r = {
      sText: c(`#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive`),
      sTooltip: void 0,
      bPrereleaseOrReleased: !1,
    },
    i = {
      released: {
        sText: c(`#Dashboard_UpcomingEvents_AppReleaseState_released`),
        sTooltip: c(
          `#Dashboard_UpcomingEvents_AppReleaseState_released_Description`,
        ),
        bPrereleaseOrReleased: !0,
      },
      prerelease: {
        sText: c(`#Dashboard_UpcomingEvents_AppReleaseState_prerelease`),
        sTooltip: c(
          `#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description`,
        ),
        bPrereleaseOrReleased: !0,
      },
      ownersonly: {
        sText: c(`#Dashboard_UpcomingEvents_AppReleaseState_ownersonly`),
        sTooltip: c(
          `#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description`,
        ),
        bPrereleaseOrReleased: !1,
      },
      preloadonly: {
        sText: c(`#Dashboard_UpcomingEvents_AppReleaseState_preloadonly`),
        sTooltip: c(
          `#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description`,
        ),
        bPrereleaseOrReleased: !1,
      },
      disabled: {
        sText: c(`#Dashboard_UpcomingEvents_AppReleaseState_disabled`),
        sTooltip: c(
          `#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description`,
        ),
        bPrereleaseOrReleased: !1,
      },
    },
    a = n;
  return (e in i ? (a = i[e]) : t || (a = r), a);
}
function D(e) {
  if (e.type == `seasonalsale`) {
    let t = e.name.toLowerCase();
    if (t.includes(`spring`)) return `#dd71d4`;
    if (t.includes(`summer`)) return `#29c6ec`;
    if (t.includes(`autumn`)) return `#ac240c`;
    if (t.includes(`winter`)) return `#01704f`;
  }
}
function O(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return `hsl(${t % 360}, ${50 + (t % 50)}%, ${40 + (t % 30)}%, 0.25)`;
}
export {
  w as a,
  b as c,
  S as i,
  v as l,
  O as n,
  C as o,
  E as r,
  D as s,
  T as t,
};
