/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t } from "./chunk~01cfc309bf.js";
import { Il as n } from "./main.js";
var r = e(t()),
  i = 2e4;
function a(e) {
  let t = (0, r.useRef)(!1),
    a = (0, r.useRef)(null),
    o = (0, r.useCallback)(() => {
      a.current = setTimeout(() => {
        e.current && !e.current.paused && (e.current.pause(), (t.current = !0));
      }, i);
    }, [e]),
    s = (0, r.useCallback)(() => {
      ((a.current &&= (clearTimeout(a.current), null)),
        e.current && t.current && (e.current.play(), (t.current = !1)));
    }, [e]);
  (n(window, `blur`, o), n(window, `focus`, s));
}
export { a as t };
