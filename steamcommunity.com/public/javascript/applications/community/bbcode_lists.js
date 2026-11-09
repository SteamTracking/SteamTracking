/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { t as r } from "./textlink.js";
import { Ds as i, Es as a, ih as o } from "./main.js";
var s = e(t(), 1);
function c(e, t) {
  return t === void 0 ? e[``] : e[t];
}
var l = n(),
  u = {
    b: { Constructor: d },
    i: { Constructor: f },
    u: { Constructor: p },
    c: { Constructor: m },
    strike: { Constructor: h },
    color: { Constructor: g },
  };
function d(e) {
  return (0, l.jsx)(`b`, { children: e.children });
}
function f(e) {
  return (0, l.jsx)(`i`, { children: e.children });
}
function p(e) {
  return (0, l.jsx)(`u`, { children: e.children });
}
function m(e) {
  return (0, l.jsx)(`code`, { children: e.children });
}
function h(e) {
  return (0, l.jsx)(`s`, { children: e.children });
}
function g(e) {
  let t = c(e.args),
    n = {};
  return (
    t &&
      (t.match(/^#[a-fA-F0-9]+$/) || t.match(/rgba?\([0-9, ]+\)$/)) &&
      (n.color = t),
    (0, l.jsx)(`span`, { style: n, children: e.children })
  );
}
var _ = `Gi9WLRCLMXY-`,
  v = {
    h1: { Constructor: y, skipFollowingNewline: !0 },
    h2: { Constructor: b, skipFollowingNewline: !0 },
    h3: { Constructor: x, skipFollowingNewline: !0 },
    code: { Constructor: S, skipFollowingNewline: !0 },
    quote: {
      Constructor: C,
      skipFollowingNewline: !0,
      skipInternalNewline: !0,
    },
    hr: { Constructor: w, skipFollowingNewline: !0 },
  };
function y(e) {
  return (0, l.jsx)(`h1`, { children: e.children });
}
function b(e) {
  return (0, l.jsx)(`h2`, { children: e.children });
}
function x(e) {
  return (0, l.jsx)(`h3`, { children: e.children });
}
function S(e) {
  return (0, l.jsx)(`pre`, {
    className: _,
    children: (0, l.jsx)(`code`, { children: e.children }),
  });
}
function C(e) {
  return (0, l.jsx)(`blockquote`, { children: e.children });
}
function w(e) {
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(`hr`, {}), e.children],
  });
}
function T(e) {
  let t = s.Children.toArray(e)[0];
  return typeof t == `string` ? t : void 0;
}
function E(e, t) {
  if (!e) return;
  let n = e.startsWith(`steamcommunity.com/`) ? `https://` + e : e;
  if (n.match(/^https?:\/\//))
    return {
      strURL: n,
      bFromBody: !1,
      bHasCustomText: !t?.match(/^https?:\/\//i),
    };
}
function D(e) {
  let t = c(e.args) ?? c(e.args, `href`);
  if (t) return E(t, T(e.children));
  if (typeof e.children == `string`) {
    let t = e.children.trim();
    if (o.exec(t)?.[0] == t)
      return { strURL: t, bFromBody: !0, bHasCustomText: !1 };
  }
}
function O(e) {
  let t = D(e);
  if (!t) return e.children;
  if (t.bFromBody) return (0, l.jsx)(k, { strURL: t.strURL });
  let n = a(t.strURL) ? i(t.strURL) : t.strURL;
  return (0, l.jsx)(r, {
    target: `_blank`,
    href: n,
    underline: `auto`,
    contrast: `title`,
    children: e.children,
  });
}
function k(e) {
  let t = e.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
      ? e.strURL
      : `http://` + e.strURL,
    n = a(t) ? i(t) : t;
  return (0, l.jsx)(r, {
    target: `_blank`,
    href: n,
    underline: `auto`,
    contrast: `title`,
    children: e.strURL,
  });
}
var A = {
  list: { Constructor: j, skipInternalNewline: !0, skipFollowingNewline: !0 },
  olist: { Constructor: M, skipInternalNewline: !0, skipFollowingNewline: !0 },
  "*": { Constructor: N, autocloses: !0 },
};
function j(e) {
  return (0, l.jsx)(`ul`, { children: e.children });
}
function M(e) {
  return (0, l.jsx)(`ol`, { children: e.children });
}
function N(e) {
  return (0, l.jsx)(`li`, { children: e.children });
}
export { v as a, O as i, k as n, u as o, D as r, c as s, A as t };
