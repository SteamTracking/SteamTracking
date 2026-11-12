/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { v as r } from "./chunk~e8ef2e6942.js";
import { qt as i } from "./main.js";
import { MarketBaseUIRoot as a, n as o, t as s } from "./chunk~6b2e92847b.js";
var c = e(t()),
  l = n();
function u(e) {
  let { app: t, initialValue: n, debugMode: r } = e,
    [u, f] = (0, c.useState)(n),
    p = (0, c.useRef)(null),
    [m, h] = (0, c.useState)(!0);
  return (0, l.jsx)(o.Provider, {
    value: r,
    children: (0, l.jsx)(a, {
      children: (0, l.jsx)(i, {
        width: `259px`,
        ref: p,
        position: `relative`,
        style: { zIndex: 402 },
        children: (0, l.jsx)(c.Suspense, {
          fallback: null,
          children: (0, l.jsx)(d, {
            children: (0, l.jsx)(s, {
              value: u,
              onTextChange: f,
              app: m ? t : void 0,
              onClearApp: () => h(!1),
              radius: `none`,
              name: `q`,
              autoComplete: `off`,
              popoverWidth: (e) => `clamp( ${e.unTargetWidth}px, 440px, 95vw )`,
            }),
          }),
        }),
      }),
    }),
  });
}
function d(e) {
  return (c.use(r.Ready()), e.children);
}
export { u as default };
