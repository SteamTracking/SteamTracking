/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, vt as t } from "./chunk~de7f2df91c.js";
import { v as n, y as r } from "./chunk~54f70c90c1.js";
import { a as i, r as a } from "./chunk~44f252525d.js";
import { r as o, t as s } from "./chunk~9fc22a4638.js";
import { t as c } from "./chunk~58c6c52d52.js";
e();
var l = t(),
  u = {
    NextFestRecapListPartner: (e) => `/nextfest/${e}`,
    NextFestRecapList: () => `/nextfest`,
    NextFestRecap: (e, t) => `/nextfest/${e}/${t}`,
  };
function d(e) {
  return (0, l.jsx)(s, {
    basename: o() + `recap/`,
    children: (0, l.jsxs)(i, {
      children: [
        (0, l.jsx)(a, {
          path: u.NextFestRecap(`:postfix`, `:partnerid(\\d+)`),
          render: (e) =>
            (0, l.jsx)(n, {
              pagePostFix: e.match.params.postfix,
              nPartnerID: Number.parseInt(e.match.params.partnerid),
            }),
        }),
        (0, l.jsx)(a, {
          path: u.NextFestRecapListPartner(`:partnerid(\\d+)`),
          render: (e) =>
            (0, l.jsx)(r, {
              nPartnerID: Number.parseInt(e.match.params.partnerid),
            }),
        }),
        (0, l.jsx)(a, {
          path: u.NextFestRecapList(),
          render: (e) => (0, l.jsx)(r, { nPartnerID: void 0 }),
        }),
        (0, l.jsx)(a, { component: c }),
      ],
    }),
  });
}
export { u as RecapHubRoutes, d as default };
