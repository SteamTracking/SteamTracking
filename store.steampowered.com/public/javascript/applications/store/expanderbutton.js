/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { N as t, ft as n } from "./chunk~01cfc309bf.js";
import { go as r, gr as i } from "./main.js";
var a = e(t(), 1),
  o = `UsXiB1C-X8I-`,
  s = n();
function c(e) {
  let { bExpanded: t, setExpanded: n } = e;
  return (0, s.jsx)(i, {
    className: (0, a.default)(o, t && `kQONFOetCiQ-`),
    onClick: () => n(!t),
    children: (0, s.jsx)(r, { direction: `down` }),
  });
}
export { c as t };
