/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { t as e } from "./rolldown-runtime.js";
import { Pt as t } from "./libraries.js";
var n = e((e) => {
    var n = t();
    n.useSyncExternalStore, n.useRef, n.useEffect, n.useMemo, n.useDebugValue;
  }),
  r = e((e, t) => {
    t.exports = n();
  });
export { r as t };
