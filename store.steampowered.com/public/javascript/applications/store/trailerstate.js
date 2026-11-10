/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { m as r } from "./trailertitlebar.js";
import { Ay as i, My as a, jy as o } from "./main.js";
var s = e(t(), 1),
  c = n(),
  l = {
    name: `trailerPrefs`,
    options: { path: `/`, secure: !0, maxAge: 2592e6 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  u = { flVolume: 0.8, bMuted: !0 };
function d(e) {
  return e.flVolume === u.flVolume && e.bMuted === u.bMuted;
}
function f() {
  try {
    let e = o(l);
    if (!e) return u;
    let t = JSON.parse(e);
    return {
      flVolume: typeof t.flVolume == `number` ? t.flVolume : u.flVolume,
      bMuted: typeof t.bMuted == `boolean` ? t.bMuted : u.bMuted,
    };
  } catch {
    return u;
  }
}
function p(e) {
  d(e) || Object.keys(e).length == 0 ? i(l) : a(l, JSON.stringify(e));
}
function m(e) {
  let { children: t } = e,
    [n, i] = (0, s.useState)(() => f());
  return (
    (0, s.useEffect)(() => {
      p(n);
    }, [n]),
    (0, c.jsx)(r, {
      playerVolume: n.flVolume,
      setPlayerVolume: (e) => i((t) => ({ ...t, flVolume: e })),
      audioMuted: n.bMuted,
      setAudioMuted: (e) => i((t) => ({ ...t, bMuted: e })),
      children: t,
    })
  );
}
export { m as t };
