/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { kt as e, tn as t } from "./mobx.esm.js";
var n = t((t) => {
    var n = e();
    n.useSyncExternalStore, n.useRef, n.useEffect, n.useMemo, n.useDebugValue;
  }),
  r = t((e, t) => {
    t.exports = n();
  });
export { r as t };
