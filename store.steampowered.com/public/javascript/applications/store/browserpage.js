/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t } from "./libraries.js";
var n = e(t());
function r(e) {
  n.useEffect(() => {
    if (!e) return;
    let t = [];
    for (let n of e.split(/ /))
      document.body.classList.contains(n) || t.push(n);
    return (
      document.body.classList.add(...t),
      () => document.body.classList.remove(...t)
    );
  }, [e]);
}
export { r as t };
