/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { o as r } from "./chunk~af36c62e9f.js";
import { t as i } from "./chunk~eefd71512b.js";
import { t as a } from "./chunk~0111fcd096.js";
import { n as o } from "./chunk~379edc388d.js";
import { i as s } from "./chunk~fc8a9e4879.js";
import { cx as c, yS as l } from "./main.js";
import u from "./chunk~658231aff7.js";
var d = e(t()),
  f = n();
function p(e) {
  let { clanAccountID: t, gidEvent: n } = e,
    { eventModel: p, bLoading: m } = s(t, n),
    h = l(c.LANGUAGE),
    [g] = r(`livepreview`);
  return (
    g && (p = o(t, 36, `creatorhome_fake`, a())),
    d.useEffect(() => {
      if (!m && !p) {
        let e = new URL(window.location.href);
        (e.searchParams.set(`v1`, `1`), window.location.replace(e.toString()));
      }
    }, [m, p]),
    p
      ? (0, f.jsx)(u, {
          eventModel: p,
          promotionName: `creatorhome_${n}`,
          language: h,
        })
      : (0, f.jsx)(i, {})
  );
}
export { p as default };
