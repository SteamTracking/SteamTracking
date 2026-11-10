/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, N as n, ft as r } from "./libraries.js";
import {
  Av as i,
  Cl as a,
  Ec as o,
  Ub as s,
  Zl as c,
  gd as l,
  ql as u,
  zv as d,
} from "./main.js";
var f = e(t(), 1),
  p = e(n(), 1),
  m = `GL0tHV4bOk8-`,
  h = `LPcYz6LIoNo-`,
  g = `IPcip0GPG-I-`,
  _ = `GCeo-xmfx1A-`,
  v = r(),
  y = 6,
  b = 1e3,
  x = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function S(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: a } = e,
    { data: o } = i(t),
    u = f.useRef(0),
    d = f.useRef(null);
  f.useLayoutEffect(() => {
    n && d.current && (d.current.currentTime = u.current);
  }, [n]);
  let _ = (e) => {
      u.current = e.currentTarget.currentTime;
    },
    y = l(t),
    b = n && !y ? t : void 0,
    x = c(b),
    E = c(b, !0);
  if ((r && s.IN_MOBILE) || !n || !o || !o.visible) return null;
  if (y) return (0, v.jsx)(w, { id: t });
  if (!x) return null;
  let D = x.filter(C);
  if (D.length === 0)
    return E?.some(C)
      ? (0, v.jsx)(w, { id: t })
      : o && o.related_items?.parent_appid && (o.type == 1 || o.type == 12)
        ? (0, v.jsx)(S, { ...e, id: { appid: o.related_items.parent_appid } })
        : null;
  let O;
  switch (a) {
    case 1:
      O = h;
      break;
    case 2:
      O = g;
  }
  let k = D[0];
  return (0, v.jsx)(`video`, {
    className: (0, p.default)(m, O),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: d,
    playsInline: !0,
    onTimeUpdate: _,
    children: (0, v.jsx)(T, { trailer: k }),
  });
}
function C(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function w(e) {
  let { id: t } = e,
    { data: n } = d(t),
    [r, i] = f.useState(0),
    s = f.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, y),
      [n],
    );
  return (
    a(() => {
      s.length > 0 && i((e) => (e + 1) % s.length);
    }, b),
    s.length == 0
      ? null
      : (0, v.jsx)(`div`, {
          className: m,
          children: s.map((e, t) =>
            (0, v.jsx)(
              `img`,
              {
                className: (0, p.default)(_, t == r && `_8Ek7qtVBxvk-`),
                src: o(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function T(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, v.jsx)(v.Fragment, {
        children: t.microtrailer?.map((e) =>
          s.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, v.jsx)(
                `source`,
                { src: u(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
export { x as n, T as r, S as t };
