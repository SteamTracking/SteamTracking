/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, vt as t } from "./chunk~de7f2df91c.js";
import { r as n } from "./chunk~2201b8cb3d.js";
e();
var r = t();
function i(e) {
  let { dataprops: t, results: i } = e,
    a = null;
  if (i && i.length > 0) {
    let e = t.appid ?? null;
    if (e) {
      let t = i.findIndex((t) => t.appid == e);
      a = t == -1 ? null : i[t];
    }
    let n = t.search_id ?? null;
    if (!a && n) {
      let e = i.findIndex((e) => e.search_id == n);
      a = e == -1 ? null : i[e];
    }
  }
  return a ? (0, r.jsx)(n, { results: a }) : null;
}
export { i as default };
