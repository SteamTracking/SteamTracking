/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { im as e } from "./main.js";
var t = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`;
function n(n, i) {
  let a = `0000000000000000000000000000000000000000`;
  typeof n == `string` ? (a = n) : n && (a = r(n) || a);
  let o = `.jpg`;
  (a === `0000000000000000000000000000000000000000` && (a = t),
    a.length == 44 && ((o = a.slice(-4)), (a = a.slice(0, 40))));
  let s = e.AVATAR_BASE_URL;
  switch (
    (s ||
      ((s = e.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
      (s += a.slice(0, 2) + `/`)),
    (s += a),
    i)
  ) {
    case `X-Small`:
    case `Small`:
      break;
    case `Medium`:
    case `MediumLarge`:
      s += `_medium`;
      break;
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      s += `_full`;
  }
  return ((s += o), s);
}
function r(e) {
  return e
    ? (typeof e[Symbol.iterator] == `function`
        ? Array.from(e)
        : Object.values(e).filter((e) => typeof e == `number`)
      )
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``)
    : ``;
}
export { n as t };
