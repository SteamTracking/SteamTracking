/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~f025431ab0.js";
import { Pt as e, at as t, bt as n, xt as r } from "./chunk~01cfc309bf.js";
import { ii as i, zr as a } from "./main.js";
import { n as o, t as s } from "./chunk~eb66d0e2b2.js";
e();
var c = t(),
  l = {
    Dashboard: (e) => `/questions/${e}/dashboard`,
    FullPageView: (e, t) => `/questions/${e}/view/${t}`,
  };
function u(e) {
  return (0, c.jsxs)(r, {
    children: [
      (0, c.jsx)(n, {
        path: l.Dashboard(`:vanity_str`),
        render: (e) =>
          (0, c.jsx)(i, {
            config: {
              "qanda-root": () => {
                let { vanity_str: t } = e.match.params;
                return (0, c.jsx)(s, { vanity_str: t });
              },
            },
          }),
      }),
      (0, c.jsx)(n, {
        path: l.FullPageView(`:vanity_str`, `:session_gid`),
        render: (e) =>
          (0, c.jsx)(i, {
            config: {
              "qanda-root": () => {
                let { vanity_str: t, session_gid: n } = e.match.params;
                return (0, c.jsx)(o, { gidSession: n });
              },
            },
          }),
      }),
      (0, c.jsx)(n, { component: a }),
    ],
  });
}
export { l as QAndARoutes, u as default };
