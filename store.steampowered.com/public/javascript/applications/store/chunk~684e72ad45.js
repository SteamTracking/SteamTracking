/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t } from "./chunk~01cfc309bf.js";
import "./main.js";
var n = e(t());
function r(e, t, r, i) {
  n.useEffect(() => {
    let n = (n) => {
      n.key === e && (t(n), r && n.preventDefault(), i && n.stopPropagation());
    };
    return (
      document.addEventListener(`keydown`, n),
      () => document.removeEventListener(`keydown`, n)
    );
  }, [e, t, r, i]);
}
export { r as t };
