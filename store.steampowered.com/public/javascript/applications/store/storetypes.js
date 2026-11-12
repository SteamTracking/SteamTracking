/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./main.js";
function e(e) {
  return e
    ? e === `game` ||
        e === `dlc` ||
        e === `software` ||
        e === `music` ||
        e === `application` ||
        e === `demo` ||
        e === `hardware` ||
        e === `mod` ||
        e == `video` ||
        e === `beta` ||
        e === `advertising`
    : !1;
}
function t(e) {
  return e == null
    ? !1
    : e == 0 ||
        e == 4 ||
        e == 6 ||
        e == 11 ||
        e == 1 ||
        e == 10 ||
        e == 2 ||
        e == 7 ||
        e == 12 ||
        e == 14;
}
export { t as n, e as t };
