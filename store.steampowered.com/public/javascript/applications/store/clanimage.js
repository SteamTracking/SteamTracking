/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~f025431ab0.js";
import { Lt as e, ft as t } from "./chunk~01cfc309bf.js";
import { i as n } from "./chunk~4c761eb6f4.js";
import { t as r } from "./chunk~f0141d9521.js";
e();
var i = t();
function a(e) {
  let { strImageToken: t, language: a, strAltText: o } = e,
    s = n(t, a);
  return s
    ? typeof s == `string`
      ? (0, i.jsx)(`img`, { src: s, alt: o })
      : (0, i.jsx)(r, { rgSources: s, strAltText: o })
    : null;
}
export { a as t };
