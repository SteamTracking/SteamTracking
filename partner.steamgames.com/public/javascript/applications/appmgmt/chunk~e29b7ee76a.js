/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { W as e } from "./chunk~de7f2df91c.js";
import { D as t } from "./chunk~44f252525d.js";
function n() {
  return t().languages.map((e) => r(e.strISOCode));
}
function r(t) {
  return t.length == 2 && e.COUNTRY ? `${t}-${e.COUNTRY}` : t;
}
export { n as t };
