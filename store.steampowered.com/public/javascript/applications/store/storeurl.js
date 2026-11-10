/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Ub as e } from "./main.js";
function t(e) {
  return e
    ? !!(
        e.related_items &&
        e.related_items.standalone_demo_appid &&
        e.related_items.standalone_demo_appid.length > 0 &&
        e.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function n(e) {
  return !e || !e.related_items?.standalone_demo_appid
    ? []
    : e.related_items?.standalone_demo_appid;
}
function r(r, i = !1) {
  if (r)
    return i && t(r)
      ? `${e.STORE_BASE_URL}app/${n(r)[0]}`
      : `${e.STORE_BASE_URL}${r.store_url_path}`;
}
function i() {
  window.location.href = `${e.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
export { n as i, i as n, t as r, r as t };
