/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, N as n, ft as r } from "./libraries.js";
import {
  Hb as i,
  Kl as a,
  Rv as o,
  Sl as s,
  Tc as c,
  Xl as l,
  hd as u,
  kv as d,
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
    { data: o } = d(t),
    s = f.useRef(0),
    c = f.useRef(null);
  f.useLayoutEffect(() => {
    n && c.current && (c.current.currentTime = s.current);
  }, [n]);
  let _ = (e) => {
      s.current = e.currentTarget.currentTime;
    },
    y = u(t),
    b = n && !y ? t : void 0,
    x = l(b),
    E = l(b, !0);
  if ((r && i.IN_MOBILE) || !n || !o || !o.visible) return null;
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
    ref: c,
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
    { data: n } = o(t),
    [r, i] = f.useState(0),
    a = f.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, y),
      [n],
    );
  return (
    s(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, b),
    a.length == 0
      ? null
      : (0, v.jsx)(`div`, {
          className: m,
          children: a.map((e, t) =>
            (0, v.jsx)(
              `img`,
              {
                className: (0, p.default)(_, t == r && `_8Ek7qtVBxvk-`),
                src: c(e, `600x338`),
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
          i.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, v.jsx)(
                `source`,
                { src: a(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
export { x as n, T as r, S as t };
