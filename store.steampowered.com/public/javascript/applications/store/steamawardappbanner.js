/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { Q as r } from "./chunk~3720b337f3.js";
import {
  Bt as i,
  Dt as a,
  Et as o,
  Nt as s,
  Ot as c,
  Rt as l,
  Ut as u,
  Vt as d,
  jt as f,
  zt as p,
} from "./chunk~cf3721cc1c.js";
import { Eb as m, Pv as h, Vi as g, ol as _, wc as v } from "./main.js";
var y = e(t(), 1),
  b = `BedOijc5U30-`,
  x = `f-g7wEuNEAA-`,
  S = `iqSc52XeIiY-`,
  C = `v3DSmoZ30uU-`,
  w = `BpmyfBjit88-`,
  T = `HnHHU4PawTU-`,
  E = `AT8xNGEDAkc-`,
  D = `BjZvuPglN8o-`,
  O = `oUvs8MpUwjU-`,
  k = `qITTYY7kjz4-`,
  A = `DSFU798iR-I-`,
  j = n();
function M(e) {
  let t = r(),
    n = f(t),
    { data: s } = a(n ? i : void 0),
    l = y.useMemo(() => o(s?.votes ?? []).includes(e), [s, e]);
  if (c(t)) return `nominations`;
  if (n && l) return `voting`;
}
function N(e) {
  let { appID: t } = e,
    n = M(t);
  if (!n) return null;
  let r = {
    "--banner-art": `url( ${p(`steamawards2026/sa2026_header_static.webp?v=1`)} )`,
    "--banner-tile": `url( ${p(`steamawards2026/page_tile.svg?v=1`)} )`,
  };
  return (0, j.jsx)(_, {
    href: l(n == `nominations` ? `nominations` : ``),
    className: b,
    style: r,
    children: (0, j.jsx)(I, { appID: t, ePhase: n }),
  });
}
var P = 24,
  F = {
    weekday: void 0,
    year: void 0,
    month: `short`,
    day: `numeric`,
    hour: `numeric`,
    timeZoneName: `short`,
    timeZone: `America/Los_Angeles`,
  };
function I(e) {
  let { appID: t, ePhase: n } = e,
    { data: r } = h({ appid: t }),
    i = n == `nominations`,
    a = r?.name,
    o =
      a &&
      (0, j.jsx)(`span`, {
        className: v(`q3-ToRSptfI-`, a.length <= P && `dJXhUVaEHbE-`),
        children: a,
      }),
    c = i
      ? o
        ? m.LocalizeReact(`#SteamAwards_AppBanner_Nominate`, o)
        : m.Localize(`#SteamAwards_AppBanner_Nominate_NoName`)
      : o
        ? m.LocalizeReact(`#SteamAwards_AppBanner_Vote`, o)
        : m.Localize(`#SteamAwards_AppBanner_Vote_NoName`),
    l = m.Localize(
      i
        ? `#SteamAwards_AppBanner_NominateUntil`
        : `#SteamAwards_AppBanner_VoteUntil`,
      g(i ? d : u, F),
    );
  return (0, j.jsxs)(`div`, {
    className: C,
    children: [
      (0, j.jsx)(`div`, { className: w }),
      (0, j.jsxs)(`div`, {
        className: T,
        children: [
          (0, j.jsxs)(`div`, {
            className: E,
            children: [m.Localize(`#SteamAwards_EventMainTitle`), ` `, s()],
          }),
          (0, j.jsx)(`div`, { className: D, children: c }),
          (0, j.jsx)(`div`, { className: O, children: l }),
        ],
      }),
      (0, j.jsx)(`div`, {
        className: x,
        children: m.Localize(
          i
            ? `#SteamAwards_AppBanner_NominateBtn`
            : `#SteamAwards_AppBanner_VoteBtn`,
        ),
      }),
      (0, j.jsxs)(`div`, {
        className: k,
        "aria-hidden": !0,
        children: [
          (0, j.jsx)(`img`, {
            className: S,
            src: p(`steamawards2026/trophy_220.png?v=1`),
            alt: ``,
          }),
          (0, j.jsx)(`span`, { className: A }),
          (0, j.jsx)(`span`, { className: A }),
        ],
      }),
    ],
  });
}
export { N as SteamAwardAppBanner };
