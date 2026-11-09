/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import { a as n, t as r } from "./socialmediadisplay.js";
e();
var i = `HchY-B0fPOU-`,
  a = t();
function o(e) {
  let { clanAccountID: t, items: o } = e,
    s = n(o);
  return s.length == 0
    ? null
    : (0, a.jsx)(r, { id: `social_` + t, rgSocialMedia: s, className: i });
}
export { o as default };
