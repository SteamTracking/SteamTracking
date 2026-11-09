import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./storelink.js";
import { _, _, _, _ } from "./saletags.js";
import { _ } from "./saletechredirectsignin.js";
import { _ } from "./csstransitionwrapper.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
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
