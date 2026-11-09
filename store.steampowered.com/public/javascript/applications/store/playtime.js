/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Hy as e, Uy as t } from "./main.js";
function n(n, r = `#Played_`, i = !1) {
  if (n >= 120) {
    let i = n / 60;
    i = Math.round(i * 10) / 10;
    let a = e.GetPreferredLocales(),
      o = i.toLocaleString(a, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      });
    return t(r + `Hours`, o);
  }
  return t(i && n == 1 ? r + `Minute` : r + `Minutes`, n);
}
export { n as t };
