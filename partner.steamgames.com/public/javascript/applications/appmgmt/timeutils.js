/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { t as e } from "./moment-timezone.js";
var t = `America/Los_Angeles`;
function n(n) {
  let r = e().unix(n).tz(t);
  return (
    r.seconds(0),
    r.minutes(0),
    r.hours(10),
    r.unix() < n && r.hours(34),
    r.unix()
  );
}
export { t as n, n as t };
