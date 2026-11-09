import "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./rewardsshop.js";
import "./steammessages_loyalty_rewards_pb.js";
import { _, _, _ } from "./main.js";
import { _ } from "./layout.js";
_();
var _ = `YUOqKgPXmCU-`,
  _ = `zWVeNNgiLlw-`,
  _ = `_3FNdh1NAvXg-`,
  _ = `jZFDBQTnlmM-`,
  _ = _(),
  _ = _((_) => {
    let { bundleid: _ } = _.match.params,
      _ = parseInt(_),
      _ = (0, _.jsx)(_, {
        _: _.LoyaltyStore(),
      });
    if (isNaN(_)) return _;
    let [_] = _.Get().GetRewardDefinitions(_);
    return _
      ? _.type !== 5 && _.type !== 6
        ? _
        : (0, _.jsx)(_, {
            bundle: _,
          })
      : null;
  }),
  _ = _((_) => {
    let { bundle: _ } = _,
      _ = _.Get().GetBundleOfferForUser(_);
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(_, {
        paddingY: `xlarge`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        children: [
          (0, _.jsx)(_, {
            bundle: _,
            offer: _,
          }),
          _.point_cost === 0
            ? (0, _.jsx)(_, {
                className: _,
              })
            : (0, _.jsx)(_, {
                cost: _.point_cost,
                discount: _.discount,
                originalCost: _.original_point_cost,
                className: _,
                onClick: (_) => _(_, _),
              }),
          (0, _.jsx)(_, {
            offer: _,
          }),
        ],
      }),
    });
  }),
  _ = _(({ bundle: _, offer: _ }) => {
    let _ = _(_),
      _ = _(`#RewardBundle_OfferDescription`, _.discount);
    return (0, _.jsx)(_, {
      paddingBottom: `xlarge`,
      children: (0, _.jsx)(_, {
        title: _,
        subtitle: _,
      }),
    });
  }),
  _ = ({ className: _ }) =>
    (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        (0, _.jsx)(`span`, {
          className: _,
          children: _(`#Redeem_BundleItemOwned`),
        }),
      ],
    }),
  _ = _((_) => {
    let { offer: _ } = _;
    return (0, _.jsx)(_, {
      title: _(`#RewardBundle_BundleContentsSection_Title`),
      children: (0, _.jsx)(_, {
        getItems: (_, _) => ({
          rewards: _.items.slice(_, _),
          bLoadingMore: !1,
          cTotalMatching: _.items.length,
          cMaxToReturn: _.items.length,
        }),
        renderItem: (_) =>
          (0, _.jsx)(
            _,
            {
              definition: _,
              purchaseable: !1,
              onClick: (_) => _(_, _),
            },
            _.defid,
          ),
      }),
    });
  });
export { _ as default };
