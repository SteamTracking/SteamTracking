import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _ } from "./econbbcode.js";
import { _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let {
      name: _,
      bIsMarket: _,
      bInteractable: _ = !0,
      bIncludeMarketInfo: _ = !0,
      bHideActionsForUnique: _ = !1,
      steamidOwner: _,
      strSelectItemAction: _,
    } = _,
    [_, _] = _.useState();
  return (
    (0, _.useEffect)(
      () =>
        _(_, (_, _) =>
          _(
            _ && {
              description: _,
              asset: _,
            },
          ),
        ),
      [_],
    ),
    _
      ? (0, _.jsx)(_, {
          steamidOwner: _,
          children: (0, _.jsx)(_, {
            children: _
              ? (0, _.jsx)(_, {
                  description: _.description,
                  asset: _.asset,
                  bHideActionsForUnique: _,
                })
              : (0, _.jsx)(_, {
                  description: _.description,
                  asset: _.asset,
                  bInteractable: _,
                  bIncludeMarketInfo: _,
                  strSelectItemAction: _,
                }),
          }),
        })
      : null
  );
}
function _(_) {
  let {
    description: _,
    asset: _,
    bInteractable: _,
    bIncludeMarketInfo: _,
    strSelectItemAction: _,
  } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    asset: _,
    bInteractable: _,
    children: (0, _.jsxs)(_.Container, {
      children: [
        (0, _.jsxs)(_.Content, {
          children: [
            (0, _.jsx)(_.Image, {}),
            (0, _.jsx)(_.Separator, {}),
            (0, _.jsx)(_.Name, {}),
            (0, _.jsx)(_.FraudWarnings, {}),
            (0, _.jsx)(_.GameInfo, {}),
            (0, _.jsx)(_.Descriptions, {}),
            (0, _.jsx)(_.AssetAccessories, {}),
            (0, _.jsx)(_.Actions, {}),
            (0, _.jsx)(_.OwnerDescriptions, {}),
            (0, _.jsx)(_.OwnerActions, {}),
            (0, _.jsx)(_.Tags, {}),
            (0, _.jsx)(_.AssetProperties, {}),
          ],
        }),
        _ && !_ && (0, _.jsx)(_.SellOnMarket, {}),
        !!_ &&
          (0, _.jsx)(_, {
            strLabel: _,
          }),
      ],
    }),
  });
}
function _(_) {
  let { strLabel: _ } = _;
  return (0, _.jsx)(_, {
    background: `greyneutral-3`,
    padding: `4`,
    gapY: `3`,
    direction: `column`,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        color: `green`,
        onClick: () => window.SelectItemDialogOnSelect(),
        size: `1`,
        children: _,
      }),
    }),
  });
}
function _(_) {
  let { description: _, asset: _, bHideActionsForUnique: _ } = _,
    _ = !(_ && !_.commodity);
  return (0, _.jsx)(_.Root, {
    description: _,
    asset: _,
    children: (0, _.jsxs)(_, {
      direction: `row`,
      align: `start`,
      gap: `4`,
      children: [
        (0, _.jsx)(_, {
          flexGrow: `1`,
          flexShrink: `1`,
          flexBasis: `0%`,
          style: {
            boxShadow: `0 0 14px #030303 inset`,
            background: `#071215`,
          },
          radius: `sm`,
          direction: `column`,
          align: `center`,
          minHeight: `360px`,
          justify: `center`,
          children: (0, _.jsx)(_.Image, {}),
        }),
        (0, _.jsxs)(_, {
          flexGrow: `1`,
          flexShrink: `1`,
          flexBasis: `0%`,
          direction: `column`,
          gapY: `2`,
          minWidth: `0`,
          children: [
            (0, _.jsx)(_.Name, {}),
            (0, _.jsx)(_.GameInfo, {
              hrefGame: `${_.COMMUNITY_BASE_URL}market/search?appid=${_.appid ?? 0}`,
            }),
            (0, _.jsx)(_.Descriptions, {}),
            (0, _.jsx)(_.AssetAccessories, {}),
            _ && (0, _.jsx)(_.MarketActions, {}),
          ],
        }),
      ],
    }),
  });
}
var _ = new Map();
function _(_, _) {
  let _ = window;
  if (
    ((_.UpdateReactItemInfo ||= (_, _, _) => {
      let _ = _.get(_);
      _ ? _(_, _) : _(!1, `Updater not registered: ${_}`);
    }),
    _.g_mapPendingItemInfo?.has(_))
  ) {
    let { description: _, asset: _ } = _.g_mapPendingItemInfo.get(_);
    (_(_, _), _.g_mapPendingItemInfo.delete(_));
  }
  return (
    _.set(_, _),
    () => {
      _.delete(_);
    }
  );
}
export { _ as default };
