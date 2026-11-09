/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t } from "./libraries.js";
import { ax as n, bu as r, iy as i } from "./main.js";
import { n as a } from "./discoveryqueuestore.js";
var o = e(t());
function s() {
  let [e, t] = (0, o.useState)(!n.logged_in),
    [s] = r(),
    c = i();
  return (
    (0, o.useEffect)(() => {
      e || (a.Init(c), t(!0));
    }, [e, c]),
    e && !s
  );
}
export { s as t };
