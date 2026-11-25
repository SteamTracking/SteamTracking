/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t } from "./chunk~01cfc309bf.js";
import "./chunk~92931c6310.js";
import { i as n, n as r, r as i, t as a } from "./chunk~521597d5f9.js";
import { t as o } from "./chunk~466a63c735.js";
import { Fu as s } from "./main.js";
o();
var c = e(t()),
  l = new (class {
    bIncludeFeaturedAsGameSource = !0;
    get nOverrideDateNow() {
      return i();
    }
    set nOverrideDateNow(e) {
      n(e);
    }
    get bRequireAllEventsLoadedInTimeBlock() {
      return !1;
    }
    get bIncludeCurators() {
      return !0;
    }
    GetTimeNowWithOverride() {
      return r();
    }
    GetTimeNowWithOverrideAsDate() {
      return a();
    }
    BHasTimeOverride() {
      return !!i();
    }
    ParseDevOverrides(e) {
      e &&
        e.length != 0 &&
        new URLSearchParams(e[0] == `?` ? e.substring(1) : e).has(`t`);
    }
  })();
s(`g_EventCalendarDevFeatures`, l);
var u = Math.floor(new Date().getTime() / 1e3);
function d() {
  return l.nOverrideDateNow ?? u;
}
function f() {
  return c.useMemo(() => d(), []);
}
function p() {
  return c.useMemo(() => l.GetTimeNowWithOverrideAsDate(), []);
}
export { f as i, l as n, p as r, d as t };
