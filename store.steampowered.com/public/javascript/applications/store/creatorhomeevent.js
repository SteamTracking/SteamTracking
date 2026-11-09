/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { o as r } from "./historyutils.js";
import { t as i } from "./throbber.js";
import { t as a } from "./eventdevfeaturestore.js";
import { n as o } from "./fakesalehelper.js";
import { i as s } from "./partnereventstore.js";
import { mS as c, rx as l } from "./main.js";
import u from "./storesaledisplay.js";
var d = e(t()),
  f = n();
function p(e) {
  let { clanAccountID: t, gidEvent: n } = e,
    { eventModel: p, bLoading: m } = s(t, n),
    h = c(l.LANGUAGE),
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
