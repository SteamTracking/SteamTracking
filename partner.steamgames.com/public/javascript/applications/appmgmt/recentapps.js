/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Z as t,
  _t as n,
  kt as r,
  nt as i,
  on as a,
} from "./mobx.esm.js";
import { oa as o, pn as s } from "./dialogs.js";
import { d as c, h as l } from "./storebrowsequerycontext.js";
import { a as u, r as d } from "./dashboardutilities.js";
var f = a(r());
function p(e, t) {
  if (e?.asset_url_format && typeof e[t] == `string`)
    return (
      i.BASE_URL_SHARED_CDN +
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
  D = n(),
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
    title: o(`#Dashboard_RecentApps_Title`),
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
  let t = i.PARTNER_BASE_URL + `apps/`;
  return (0, D.jsxs)(`div`, {
    className: h,
    children: [
      o(`#Dashboard_RecentApps_NoRecent`),
      ` `,
      (0, D.jsxs)(`a`, {
        href: t,
        target: `_blank`,
        children: [` `, o(`#Dashboard_RecentApps_ViewAll`)],
      }),
    ],
  });
}
function j(e) {
  let t = i.PARTNER_BASE_URL + `apps/`;
  return (0, D.jsx)(`div`, {
    className: g,
    children: (0, D.jsx)(`div`, {
      className: _,
      children: (0, D.jsx)(`a`, {
        href: t,
        children: o(`#Dashboard_RecentApps_ViewAllShort`),
      }),
    }),
  });
}
function M(e) {
  let { app: t } = e,
    n = t.appid,
    { data: r } = c({ appid: n }),
    a = i.PARTNER_BASE_URL + `apps/landing/` + n,
    o = p(r, `header`);
  return (0, D.jsxs)(`div`, {
    className: v,
    children: [
      o &&
        (0, D.jsx)(s, {
          toolTipContent: t.name,
          children: (0, D.jsx)(`div`, {
            className: `xWzcwMJs-2U-`,
            children: (0, D.jsx)(`a`, {
              href: a,
              target: `_blank`,
              children: (0, D.jsx)(`img`, { src: o }),
            }),
          }),
        }),
      !o &&
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
    { data: r } = l({ appid: n });
  return (0, D.jsxs)(`div`, {
    className: y,
    children: [
      (0, D.jsx)(P, { appType: t.type }),
      (0, D.jsx)(F, { releaseState: t.releasestate, hasStoreItem: r?.visible }),
    ],
  });
}
function P(t) {
  let { appType: n } = t,
    r = null,
    i = null;
  return (
    n == `Game`
      ? (r = o(`#Dashboard_RecentApps_Game`))
      : n == `DLC`
        ? ((r = o(`#Dashboard_RecentApps_DLC`)), (i = b))
        : n == `Beta`
          ? ((r = o(`#Dashboard_RecentApps_Playtest`)), (i = x))
          : n == `Demo`
            ? ((r = o(`#Dashboard_RecentApps_Demo`)), (i = S))
            : n == `Music` && ((r = o(`#Dashboard_RecentApps_Music`)), (i = C)),
    !!r && (0, D.jsx)(`div`, { className: e(`HhP0AqYyACA-`, i), children: r })
  );
}
function F(t) {
  let { releaseState: n, hasStoreItem: r } = t,
    i = d(n, r);
  return (
    n != `released` &&
    (0, D.jsx)(`div`, { className: e(`_7hIsoSqJWdo-`), children: i.sText })
  );
}
function I() {
  let e = t(`rgRecentApps`, `application_config`),
    n = e ? Object.keys(e).map((t) => e[t]) : [],
    r = t(`rgRecentUnreleasedApps`, `application_config`),
    i = r ? Object.keys(r).map((e) => r[e]) : [],
    a = u(n, i);
  return (a.sort((e, t) => e.nOrder - t.nOrder), a);
}
export { k as n, O as r, N as t };
