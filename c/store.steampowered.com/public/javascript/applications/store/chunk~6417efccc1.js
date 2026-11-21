import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~4eed35ad1f.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `pJ01R8Rviwk-`,
  _ = `_7U7Xu4nDCJA-`,
  _ = `_653656tCiGM-`,
  _ = `uFpeqSdc1hU-`,
  _ = _(),
  _ = 150;
function _(_) {
  let { appid: _, snr: _, onActiveChange: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _ || _;
  return (
    _.useEffect(() => _?.(_), [_, _]),
    !_.logged_in || _
      ? null
      : (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _ && `-IgNR6MyqQY-`),
          onPointerEnter: () => {
            (_(!0),
              _.prefetchQuery(_(_, _.accountid)),
              _.prefetchQuery(_(_, _.accountid)));
          },
          onPointerLeave: () => _(!1),
          children: (0, _.jsx)(`button`, {
            type: `button`,
            className: _,
            "aria-label": _(`#CapsuleOptions_Label`),
            "aria-expanded": _,
            onClick: (_) => {
              (_(
                (0, _.jsx)(_, {
                  appid: _,
                  snr: _,
                }),
                _.currentTarget,
                {
                  bOverlapHorizontal: !0,
                  bOverlapVertical: !0,
                  bPreferPopLeft: !0,
                  bDisableMouseOverlay: !0,
                  strClassName: (0, _.default)(_, _),
                },
              ).SetOnHideCallback(() => _(!1)),
                _(!0));
            },
            children: (0, _.jsx)(_, {
              width: 16,
              height: 16,
            }),
          }),
        })
  );
}
function _(_) {
  let { appid: _, snr: _ } = _,
    { instance: _ } = _.useContext(_),
    _ = _(_),
    _ = _(_),
    { mutate: _ } = _(_, !_, _),
    { mutate: _ } = _(_, !_, _);
  return (0, _.jsxs)(_, {
    onMouseEnter: () => _.CancelHideMenuTimer(),
    onMouseLeave: () => _.Hide(_),
    children: [
      (0, _.jsx)(_, {
        className: (0, _.default)(_, _ === void 0 && `UAGSKkYCRlo-`),
        disabled: _ === void 0,
        onSelected: () => _(),
        children: _.Localize(
          _ ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
        ),
      }),
      (0, _.jsx)(_, {
        className: (0, _.default)(_, _ === void 0 && `UAGSKkYCRlo-`),
        disabled: _ === void 0,
        onSelected: () => _(),
        children: _.Localize(_ ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      (0, _.jsx)(_, {
        className: _,
        onSelected: () => {
          window.location.href = `${_.STORE_BASE_URL}account/preferences/`;
        },
        children: _(`#Menu_Popover_Preferences`),
      }),
    ],
  });
}
