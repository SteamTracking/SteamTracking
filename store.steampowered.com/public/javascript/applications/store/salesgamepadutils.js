/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Aa as e,
  Ps as t,
  Vs as n,
  ir as r,
  ka as i,
} from "./chunk~6b8ddcaac8.js";
import { t as a } from "./chunk~4c13037b22.js";
import {
  Eb as o,
  Fc as s,
  Fu as c,
  Pv as l,
  Qx as u,
  Uc as d,
  Wb as f,
  Xb as p,
  Yu as m,
} from "./main.js";
function h(e, t, n, i, l, f) {
  if (!n) return;
  if (!r(e.item_type)) {
    u(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let p = s(`${a(e, i)}${l ? `?${l}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = c(e) || window;
      f ? f(e) : p.startsWith(`steam://`) || (t.location.href = d(p));
    },
    onOKActionDescription: o.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function g(e) {
  if (e?.appid && e.item_type == 0)
    switch (e.type) {
      case 14:
        return;
      case 1:
      case 12:
        return e.related_items?.parent_appid || e.appid;
      default:
        return e.appid;
    }
}
function _(r) {
  let a = f(),
    { data: s } = l(a ? r : void 0),
    c = g(s),
    u = !!e(c),
    { bIsOwned: d } = t(n(c)),
    h = m(),
    { mutate: _ } = i(c, !u, h),
    v = !!d && s?.type != 10;
  return !a || !p.logged_in || !c || v
    ? {}
    : {
        onOptionsButton: () => _(),
        onOptionsActionDescription: o.Localize(
          u ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
        ),
      };
}
export { _ as n, h as t };
