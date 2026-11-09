/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { kt as e, on as t } from "./mobx.esm.js";
import { h as n } from "./storebrowsequerycontext.js";
import "./react-router.js";
var r = t(e(), 1);
function i(e) {
  let { data: t } = n(e);
  return (0, r.useMemo)(
    () => (t ? (t.item_type == 0 ? [t.appid] : t.included_appids || []) : []),
    [t],
  );
}
function a(e) {
  let { data: t } = n(e);
  return (0, r.useMemo)(() => {
    if (t && t.related_items && t.related_items.parent_appid)
      return { appid: t.related_items.parent_appid };
  }, [t]);
}
function o(e) {
  return (0, r.useMemo)(() => (e ? { appid: e } : void 0), [e]);
}
function s(e) {
  return (0, r.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
}
export { s as i, i as n, o as r, a as t };
