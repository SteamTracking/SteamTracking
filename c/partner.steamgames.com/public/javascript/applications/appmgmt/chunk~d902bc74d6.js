import { _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _, _, _, _ } from "./chunk~1fa4b8f2ff.js";
import { _, _ } from "./chunk~0a99e05c44.js";
import { _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~9a06851bec.js";
import "./chunk~44f252525d.js";
import { _ } from "./chunk~b390ee0f78.js";
import { _ } from "./chunk~8ceeb46076.js";
import { _ } from "./chunk~ada233e34d.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { appid: _, className: _, bTextMode: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    appid: _,
    bIsFree: !!_?.is_free,
    bIsComingSoon: !!_?.is_coming_soon,
    bTextMode: _,
    className: _,
  });
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _(),
    { appid: _, bIsFree: _, bIsComingSoon: _, className: _, bTextMode: _ } = _,
    _ = _(_),
    { bIsOwned: _ } = _(_),
    _ = _(_),
    { mutateAsync: _ } = _(_, !_, _(_)),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    _ = async () => {
      _.logged_in ? _ || (_(!0), await _(), _(!1)) : _();
    };
  if (_ || (!_ && _))
    return _
      ? (0, _.jsx)(_, {
          possibleDemoAppID: _,
        })
      : null;
  let _ = null;
  return (
    _ && !_
      ? (_ = (0, _.jsx)(_, {
          size: 18,
        }))
      : _
        ? _ && (_ = _ ? _(`#OnWishlist`) : (0, _.jsx)(_, {}))
        : (_ = _ ? _(`#wishlist_add_to_wishlist`) : (0, _.jsx)(_, {})),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          toolTipContent: _(`#AddToWishlist_ttip`),
          children: (0, _.jsx)(`div`, {
            className: _(_, _),
            onClick: _,
            children: _,
          }),
        }),
        _,
      ],
    })
  );
}
function _(_) {
  let { possibleDemoAppID: _, className: _ } = _,
    _ = _(_),
    { data: _ } = _(_);
  return _ && (_.type == 1 || _.type == 12) && _.related_items?.parent_appid
    ? (0, _.jsx)(_, {
        parentAppID: _.related_items?.parent_appid,
        className: _,
      })
    : null;
}
function _(_) {
  let { parentAppID: _, className: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  return !_ || !_
    ? null
    : (0, _.jsx)(_, {
        appid: _,
        bIsComingSoon: !!_.is_coming_soon,
        bIsFree: !!_.is_free,
        className: _,
      });
}
