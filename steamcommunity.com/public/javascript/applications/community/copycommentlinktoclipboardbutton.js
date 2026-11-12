/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { t as r } from "./chunk~f0745bb5e2.js";
var i = e(t()),
  a = n();
function o(e) {
  let [t, n] = (0, i.useState)(
      () => localStorage.floatingforumreportedsubjectslist !== void 0,
    ),
    o = (0, i.useMemo)(() => {
      let t = window.location.href.split(`#`)[0];
      return (e.gidcomment !== null && (t += `#c` + e.gidcomment), t);
    }, [e.gidcomment]);
  return (0, a.jsx)(r, { text: o, size: t ? `large` : `small` });
}
export { o as default };
