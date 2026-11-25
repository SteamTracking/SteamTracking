/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { S as e, g as t, h as n, k as r } from "./chunk~4eed35ad1f.js";
import { t as i } from "./chunk~4c13037b22.js";
import {
  $c as a,
  Gc as o,
  Gu as s,
  Ib as c,
  Wv as l,
  ad as u,
  ex as d,
  lS as f,
  ox as p,
  rn as m,
} from "./main.js";
function h(e, t, r, l, u, d) {
  if (!r) return;
  if (!n(e.item_type)) {
    f(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let p = o(`${i(e, l)}${u ? `?${u}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = s(e) || window;
      d ? d(e) : p.startsWith(`steam://`) || (t.location.href = a(p));
    },
    onOKActionDescription: c.Localize(`#Sale_Gamepad_Action_Select`),
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
  let i = d(),
    { data: a } = l(i ? n : void 0),
    o = g(a),
    s = !!m(o),
    { bIsOwned: f } = e(r(o)),
    h = u(),
    { mutate: _ } = t(o, !s, h),
    v = !!f && a?.type != 10;
  return !i || !p.logged_in || !o || v
    ? {}
    : {
        onOptionsButton: () => _(),
        onOptionsActionDescription: c.Localize(
          s ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
        ),
      };
}
export { _ as n, h as t };
