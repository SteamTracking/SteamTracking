/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~f025431ab0.js";
import { Ft as e, St as t, ot as n, xt as r } from "./chunk~01cfc309bf.js";
import { Gr as i, ui as a } from "./main.js";
import { n as o, t as s } from "./chunk~eb66d0e2b2.js";
e();
var c = n(),
  l = {
    Dashboard: (e) => `/questions/${e}/dashboard`,
    FullPageView: (e, t) => `/questions/${e}/view/${t}`,
  };
function u(e) {
  return (0, c.jsxs)(t, {
    children: [
      (0, c.jsx)(r, {
        path: l.Dashboard(`:vanity_str`),
        render: (e) =>
          (0, c.jsx)(a, {
            config: {
              "qanda-root": () => {
                let { vanity_str: t } = e.match.params;
                return (0, c.jsx)(s, { vanity_str: t });
              },
            },
          }),
      }),
      (0, c.jsx)(r, {
        path: l.FullPageView(`:vanity_str`, `:session_gid`),
        render: (e) =>
          (0, c.jsx)(a, {
            config: {
              "qanda-root": () => {
                let { vanity_str: t, session_gid: n } = e.match.params;
                return (0, c.jsx)(o, { gidSession: n });
              },
            },
          }),
      }),
      (0, c.jsx)(r, { component: i }),
    ],
  });
}
export { l as QAndARoutes, u as default };
