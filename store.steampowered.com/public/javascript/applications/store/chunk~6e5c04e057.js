/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  Bt as r,
  Dt as i,
  Et as a,
  Ot as o,
  Rt as s,
  jt as c,
} from "./chunk~cf3721cc1c.js";
import { o as l } from "./chunk~331382b23f.js";
import { Pv as u } from "./main.js";
var d = e(t(), 1),
  f = `BedOijc5U30-`,
  p = n();
function m(e) {
  let t = l(),
    n = c(t),
    { data: s } = i(n ? r : void 0),
    u = d.useMemo(() => a(s?.votes ?? []).includes(e), [s, e]);
  if (o(t)) return `nominations`;
  if (n && u) return `voting`;
}
function h(e) {
  let { appID: t } = e,
    n = m(t);
  return n
    ? (0, p.jsx)(`a`, {
        href: s(n == `nominations` ? `nominations` : ``),
        className: f,
        children: (0, p.jsx)(g, { appID: t, ePhase: n }),
      })
    : null;
}
function g(e) {
  let { appID: t, ePhase: n } = e,
    { data: r } = u({ appid: t });
  return (0, p.jsx)(`div`, { className: void 0, children: r?.name });
}
export { h as SteamAwardAppBanner };
