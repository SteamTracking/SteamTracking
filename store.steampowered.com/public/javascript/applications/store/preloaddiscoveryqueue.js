/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t } from "./chunk~01cfc309bf.js";
import { ly as n, ux as r, wu as i } from "./main.js";
import { n as a } from "./chunk~7401689b78.js";
var o = e(t());
function s() {
  let [e, t] = (0, o.useState)(!r.logged_in),
    [s] = i(),
    c = n();
  return (
    (0, o.useEffect)(() => {
      e || (a.Init(c), t(!0));
    }, [e, c]),
    e && !s
  );
}
export { s as t };
