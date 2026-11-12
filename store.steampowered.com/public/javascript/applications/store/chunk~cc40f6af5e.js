/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { nt as t } from "./chunk~01cfc309bf.js";
import { t as n } from "./chunk~68b7e78d68.js";
import { ut as r } from "./main.js";
var i = e(t(), 1);
function a(e, t) {
  return new i.default(
    async (t) => {
      let n = [...t],
        i = await r.GetPlayerLinkDetails(e, { steamids: n }),
        a = new Map();
      return (
        i
          .Body()
          .accounts()
          .forEach((e) => {
            let t = e.toObject();
            a.set(t.public_data.steamid, t);
          }),
        n.map((e) => a.get(e) ?? null)
      );
    },
    { maxBatchSize: 100, cache: !1, ...t },
  );
}
function o(e) {
  return n(`PlayerLinkDetails`, () => a(e));
}
export { o as n, a as t };
