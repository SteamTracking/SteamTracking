import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _ } from "./storelink.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./saletags.js";
import { _, _, _, _, _ } from "./salestoreitemutils.js";
import { _, _ } from "./salepreviewwidgets.js";
import { _ } from "./saleghostsections.js";
import { _ } from "./salehilightplayerembed.js";
import { _ } from "./storegamehover.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      _: _,
      bPurchaseOptionsExpanded: _,
      fnCollapseOptions: _,
      bPreferAssetWithoutOverride: _,
    } = _,
    { data: _ } = _(_),
    _ = (0, _.useRef)(null);
  if (!_) return null;
  let _ = _.purchase_options;
  return _
    ? (0, _.jsx)(_, {
        nodeRef: _,
        _: _,
        mountOnEnter: !0,
        unmountOnExit: !0,
        timeout: 2e3,
        classNames: {
          enterActive: _,
          enterDone: _,
          exit: _,
          exitActive: _,
        },
        children: (0, _.jsxs)(`div`, {
          ref: _,
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.filter((_) => !!_.packageid).map((_) =>
                (0, _.jsx)(
                  `div`,
                  {
                    className: _,
                    children: (0, _.jsx)(_, {
                      _: _.packageid || 0,
                      type: `sub`,
                      bForceSmallCapsuleArt: !0,
                      bPreferAssetWithoutOverride: _,
                    }),
                  },
                  `purchaseitem_` + _(_) + `_` + _.packageid,
                ),
              ),
            }),
            (0, _.jsx)(`div`, {
              onClick: _,
              className: _,
              children: (0, _.jsx)(`button`, {
                className: _,
                children: _.Localize(`#Button_Close`),
              }),
            }),
          ],
        }),
      })
    : null;
}
var _ = _((_) => {
  let { _: _, type: _ } = _,
    _ = _(_, _),
    {
      bHidePrice: _,
      bShowDemoButton: _,
      bPreferDemoStorePage: _,
      bShowPurchaseOptionsButton: _,
      bUseSubscriptionLayout: _,
      bPreferAssetWithoutOverride: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = () => _(!_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_),
    _ = _();
  if (!_ || !_)
    return (0, _.jsx)(_, {
      capsules_per_row: [1],
      is_expanded_display: !0,
    });
  let _ = _(_),
    _ = _.item_type == 0;
  return (0, _.jsx)(`div`, {
    className: _(_, _, `LibraryAssetExpandedDisplay`),
    children: (0, _.jsxs)(_, {
      appid: _ ? _.appid : void 0,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_),
              children: (0, _.jsx)(_, {
                _: _,
                bPreferDemoStorePage: _,
                children: (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      appids: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                      imageType: `library`,
                      bPreferAssetWithoutOverride: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                    }),
                  ],
                }),
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    _: _,
                    classOverride: _(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: _,
                  }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        _.short_description &&
                          _.short_description.length > 0 &&
                          (0, _.jsx)(`div`, {
                            className: _(
                              `lsjYiHotCwA-`,
                              `StoreSaleWidgetShortDesc`,
                            ),
                            children: _.short_description,
                          }),
                        (0, _.jsx)(_, {
                          rgTagIDs: _
                            ? _.slice(0, 10).map((_) => _.tagid || 0)
                            : [],
                          instanceNum: 0,
                          bNoStoreLinks: !1,
                        }),
                        (0, _.jsxs)(`div`, {
                          className: _,
                          children: [
                            (0, _.jsx)(`div`, {
                              className: _,
                              children: _.LocalizeReact(
                                `#Sale_ReleaseDate`,
                                (0, _.jsx)(`span`, {
                                  children: _(_),
                                }),
                              ),
                            }),
                            _.developers &&
                              _.developers.length > 0 &&
                              (0, _.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  _.Localize(`#CreatorHome_DevelopedBy`),
                                  (0, _.jsx)(`span`, {
                                    children: _.developers[0].name,
                                  }),
                                ],
                              }),
                            _.publishers &&
                              _.publishers.length > 0 &&
                              (0, _.jsxs)(`div`, {
                                className: `llT8dhJgnqw-`,
                                children: [
                                  _.Localize(`#CreatorHome_PublishedBy`),
                                  (0, _.jsx)(`span`, {
                                    children: _.publishers[0].name,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(_, {
                        _: _,
                        bPopOutTrailerPlayback: !0,
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    _: _,
                  }),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children:
                    _ && _
                      ? (0, _.jsx)(_, {
                          appid: _.appid,
                          bIsMuted: !1,
                        })
                      : (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(_, {
                              _: _,
                            }),
                            (0, _.jsx)(_, {
                              _: _,
                              bShowDemoButton: _,
                              bHidePrice: _,
                              bShowPurchaseOptionsButton: _,
                              fnOnPurchaseOptionsClick: _,
                              bHideWishlistButton: _.is_coming_soon,
                            }),
                          ],
                        }),
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      _: _,
                      bPreferAssetWithoutOverride: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          _: _,
          bPurchaseOptionsExpanded: _,
          fnCollapseOptions: _,
          bPreferAssetWithoutOverride: _,
        }),
      ],
    }),
  });
});
