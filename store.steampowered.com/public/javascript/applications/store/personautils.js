/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { rx as e } from "./main.js";
var t = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`,
  n = `https://steamloopback.host/clientassets/avatars/`;
function r(r, i, a = `auto`) {
  let o = `.jpg`;
  (r && r !== `0000000000000000000000000000000000000000`) || (r = t),
    r.length == 44 && ((o = r.substr(-4)), (r = r.substr(0, 40)));
  let s = a == `client` || (a == `auto` && e.IN_STEAMUI),
    c = e.AVATAR_BASE_URL;
  return (
    s
      ? ((c = n), (r = r.toLowerCase()))
      : c ||
        ((c = e.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
        (c += r.substr(0, 2) + `/`)),
    (c += r),
    i && i != `small` && (c += `_` + i),
    (c += o),
    c
  );
}
function i(e) {
  return e ? e.startsWith(n) : !1;
}
export { r as n, t as r, i as t };
