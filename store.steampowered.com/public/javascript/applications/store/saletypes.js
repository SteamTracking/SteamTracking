/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t } from "./chunk~01cfc309bf.js";
import "./main.js";
var n = e(t(), 1);
function r(e) {
  return (0, n.useMemo)(() => o(e), [e?.id, e?.type]);
}
function i(e, t) {
  return (0, n.useMemo)(() => l(e, t), [e, t]);
}
function a(e, t) {
  return (0, n.useMemo)(() => c(e, t), [e, t]);
}
function o(e) {
  if (e && e.id) {
    if (!e.type) return { appid: e.id };
    switch (e.type) {
      case `sub`:
        return { packageid: e.id };
      case `bundle`:
        return { bundleid: e.id };
      default:
        return { appid: e.id };
    }
  }
}
function s(e) {
  if (`appid` in e) return { id: e.appid, type: `game` };
  if (`packageid` in e) return { id: e.packageid, type: `sub` };
  if (`bundleid` in e) return { id: e.bundleid, type: `bundle` };
}
function c(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function l(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
export { a, r as i, s as n, i as r, o as t };
