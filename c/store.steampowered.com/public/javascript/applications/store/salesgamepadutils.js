import { _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~4c13037b22.js";
import { _, _, _, _, _, _, _, _, _ } from "./main.js";
function _(_, _, _, _, _, _) {
  if (!_) return;
  if (!_(_.item_type)) {
    _(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + _.item_type);
    return;
  }
  let _ = _(`${_(_, _)}${_ ? `?${_}` : ``}`, _);
  return {
    onClick: (_) => {
      let _ = _(_) || window;
      _ ? _(_) : _.startsWith(`steam://`) || (_.location.href = _(_));
    },
    onOKActionDescription: _.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function _(_) {
  if (_?.appid && _.item_type == 0)
    switch (_.type) {
      case 14:
        return;
      case 1:
      case 12:
        return _.related_items?.parent_appid || _.appid;
      default:
        return _.appid;
    }
}
function _(_) {
  let _ = _(),
    { data: _ } = _(_ ? _ : void 0),
    _ = _(_),
    _ = !!_(_),
    { bIsOwned: _ } = _(_(_)),
    _ = _(),
    { mutate: _ } = _(_, !_, _),
    _ = !!_ && _?.type != 10;
  return !_ || !_.logged_in || !_ || _
    ? {}
    : {
        onOptionsButton: () => _(),
        onOptionsActionDescription: _.Localize(
          _ ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
        ),
      };
}
