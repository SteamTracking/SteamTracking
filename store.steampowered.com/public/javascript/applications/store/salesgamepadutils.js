/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Is as e, ks as t, nr as n } from "./chunk~6b8ddcaac8.js";
import { t as r } from "./chunk~4c13037b22.js";
import { p as i } from "./chunk~4eed35ad1f.js";
import {
  $b as a,
  Fb as o,
  Qc as s,
  Uv as c,
  Wc as l,
  Wu as u,
  ax as d,
  id as f,
  rn as p,
  sS as m,
} from "./main.js";
function h(e, t, i, a, c, d) {
  if (!i) return;
  if (!n(e.item_type)) {
    m(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let f = l(`${r(e, a)}${c ? `?${c}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = u(e) || window;
      d ? d(e) : f.startsWith(`steam://`) || (t.location.href = s(f));
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
function _(n) {
  let r = a(),
    { data: s } = c(r ? n : void 0),
    l = g(s),
    u = !!p(l),
    { bIsOwned: m } = t(e(l)),
    h = f(),
    { mutate: _ } = i(l, !u, h),
    v = !!m && s?.type != 10;
  return !r || !d.logged_in || !l || v
    ? {}
    : {
        onOptionsButton: () => _(),
        onOptionsActionDescription: o.Localize(
          u ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
        ),
      };
}
export { _ as n, h as t };
