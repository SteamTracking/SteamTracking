/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Pt as e,
  W as t,
  k as n,
  nt as r,
  r as i,
  w as a,
} from "./chunk~de7f2df91c.js";
import { _n as o, da as s } from "./chunk~1fa4b8f2ff.js";
import { _ as c, p as l } from "./chunk~0a99e05c44.js";
import { a as u, r as d } from "./chunk~0aa5028ef4.js";
var f = e(r());
function p(e, t) {
  if (e?.asset_url_format && typeof e[t] == `string`)
    return (
      n.BASE_URL_SHARED_CDN +
      `/store_item_assets/` +
      e.asset_url_format.replace("${FILENAME}", e[t])
    );
}
var m = `IcywFuw-MuY-`,
  h = `FyNxcXufxdo-`,
  g = `QZi0FlpWjiY-`,
  _ = `Dwv4HDFQ9yI-`,
  v = `CzD1zSZJkoM-`,
  y = `z9z8gYERdpw-`,
  b = `yoS9JS7gc5M-`,
  x = `RaoE2AG7Kd0-`,
  S = `npCO2EsQTqg-`,
  C = `-qzow3moiJU-`,
  w = `_9-r47MFrlOU-`,
  T = `EWAV3iEkmAQ-`,
  E = `OHjadihoFPE-`,
  D = t(),
  O = f.forwardRef((e, t) => {
    let {
      title: n,
      count: r,
      description: i,
      children: a,
      headerElement: o,
    } = e;
    return (0, D.jsxs)(`div`, {
      className: w,
      ref: t,
      children: [
        (0, D.jsxs)(`div`, {
          className: T,
          children: [
            (0, D.jsxs)(`div`, {
              className: E,
              children: [
                n,
                r != null &&
                  (0, D.jsx)(`span`, {
                    className: `Gxhxft3PnpI-`,
                    children: r,
                  }),
              ],
            }),
            o,
          ],
        }),
        i && (0, D.jsx)(`div`, { className: `OEFI4e27p2Q-`, children: i }),
        a,
      ],
    });
  });
function k(e) {
  let t = f.useMemo(() => I(), []);
  return (0, D.jsx)(O, {
    title: s(`#Dashboard_RecentApps_Title`),
    headerElement: (0, D.jsx)(j, {}),
    children: (0, D.jsxs)(`div`, {
      className: m,
      children: [
        !t.length && (0, D.jsx)(A, {}),
        t.map((e) => (0, D.jsx)(M, { app: e }, e.appid)),
      ],
    }),
  });
}
function A(e) {
  let t = n.PARTNER_BASE_URL + `apps/`;
  return (0, D.jsxs)(`div`, {
    className: h,
    children: [
      s(`#Dashboard_RecentApps_NoRecent`),
      ` `,
      (0, D.jsxs)(`a`, {
        href: t,
        target: `_blank`,
        children: [` `, s(`#Dashboard_RecentApps_ViewAll`)],
      }),
    ],
  });
}
function j(e) {
  let t = n.PARTNER_BASE_URL + `apps/`;
  return (0, D.jsx)(`div`, {
    className: g,
    children: (0, D.jsx)(`div`, {
      className: _,
      children: (0, D.jsx)(`a`, {
        href: t,
        children: s(`#Dashboard_RecentApps_ViewAllShort`),
      }),
    }),
  });
}
function M(e) {
  let { app: t } = e,
    r = t.appid,
    { data: i } = l({ appid: r }),
    a = n.PARTNER_BASE_URL + `apps/landing/` + r,
    s = p(i, `header`);
  return (0, D.jsxs)(`div`, {
    className: v,
    children: [
      s &&
        (0, D.jsx)(o, {
          toolTipContent: t.name,
          children: (0, D.jsx)(`div`, {
            className: `xWzcwMJs-2U-`,
            children: (0, D.jsx)(`a`, {
              href: a,
              target: `_blank`,
              children: (0, D.jsx)(`img`, { src: s }),
            }),
          }),
        }),
      !s &&
        (0, D.jsx)(`div`, {
          className: `eYEdaax9aY8-`,
          children: (0, D.jsx)(`a`, {
            href: a,
            target: `_blank`,
            children: t.name,
          }),
        }),
      (0, D.jsx)(N, { app: t }),
    ],
  });
}
function N(e) {
  let { app: t } = e,
    n = t.appid,
    { data: r } = c({ appid: n });
  return (0, D.jsxs)(`div`, {
    className: y,
    children: [
      (0, D.jsx)(P, { appType: t.type }),
      (0, D.jsx)(F, { releaseState: t.releasestate, hasStoreItem: r?.visible }),
    ],
  });
}
function P(e) {
  let { appType: t } = e,
    n = null,
    r = null;
  return (
    t == `Game`
      ? (n = s(`#Dashboard_RecentApps_Game`))
      : t == `DLC`
        ? ((n = s(`#Dashboard_RecentApps_DLC`)), (r = b))
        : t == `Beta`
          ? ((n = s(`#Dashboard_RecentApps_Playtest`)), (r = x))
          : t == `Demo`
            ? ((n = s(`#Dashboard_RecentApps_Demo`)), (r = S))
            : t == `Music` && ((n = s(`#Dashboard_RecentApps_Music`)), (r = C)),
    !!n && (0, D.jsx)(`div`, { className: i(`HhP0AqYyACA-`, r), children: n })
  );
}
function F(e) {
  let { releaseState: t, hasStoreItem: n } = e,
    r = d(t, n);
  return (
    t != `released` &&
    (0, D.jsx)(`div`, { className: i(`_7hIsoSqJWdo-`), children: r.sText })
  );
}
function I() {
  let e = a(`rgRecentApps`, `application_config`),
    t = e ? Object.keys(e).map((t) => e[t]) : [],
    n = a(`rgRecentUnreleasedApps`, `application_config`),
    r = n ? Object.keys(n).map((e) => n[e]) : [],
    i = u(t, r);
  return (i.sort((e, t) => e.nOrder - t.nOrder), i);
}
export { k as n, O as r, N as t };
