import { _ } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { _, _, _ } from "./libraries.js?contenthash=b0JzZ9xY";
import { _, _ } from "./main.js?contenthash=C1XpPKHE";
import { _, _ } from "./layout.js?contenthash=C9c-cUkp";
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
} from "./loyalty.js?contenthash=DTyVKCuH";
var _ = _(_()),
  _ = `VlcajOpXVIQ-`,
  _ = new URL(
    `../../../images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = _(),
  _ = (_) =>
    (0, _.jsx)(_, {
      ..._,
      onClick: (_) =>
        _(_, _.customization_type, _.current_level, _.desired_level),
    }),
  _ = (_) =>
    (0, _.jsx)(_, {
      ..._,
      onClick: (_) =>
        _(_, _.customization_type, _.purchased_count, _.current_level),
    }),
  _ = (_) =>
    (0, _.jsx)(_, {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      alignItems: `center`,
      paddingTop: `small`,
      className: void 0,
      children: (0, _.jsx)(`img`, {
        src: _,
        className: _,
      }),
    }),
  _ = (_) => {
    let { point_cost: _, upgradable_showcases: _, purchased_upgrades: _ } = _,
      _ = new Map();
    _.forEach((_) => {
      _.set(_, 1);
    }),
      _ &&
        _.forEach((_) => {
          _.set(_.customization_type, _.level);
        });
    let _ = _.map((_) => {
      let _ = _.get(_),
        _ = _ + 1;
      return (0, _.jsx)(
        _,
        {
          point_cost: _,
          customization_type: _,
          current_level: _,
          desired_level: _,
        },
        _,
      );
    });
    return (0, _.jsx)(_, {
      className: _,
      itemClassName: _,
      spacing: `xlarge`,
      children: (0, _.jsx)(_, {
        title: _(`#ProfileShowcases_Upgrades_Title`),
        subtitle: _(`#ProfileShowcases_Upgrades_Subtitle`),
        children: _,
      }),
    });
  },
  _ = (_) => {
    let {
        point_cost: _,
        purchasable_showcases: _,
        purchased_showcases: _,
        purchased_upgrades: _,
      } = _,
      _ = new Map(),
      _ = new Map();
    _.forEach((_) => {
      _.set(_, 0), _.set(_, 1);
    }),
      _ &&
        _.forEach((_) => {
          _.set(_.customization_type, _.count);
        }),
      _ &&
        _.forEach((_) => {
          _.set(_.customization_type, _.level);
        });
    let _ = _.map((_) =>
      (0, _.jsx)(
        _,
        {
          point_cost: _,
          current_level: _.get(_),
          customization_type: _,
          purchased_count: _.get(_),
        },
        _,
      ),
    );
    return (0, _.jsx)(_, {
      className: _,
      itemClassName: _,
      spacing: `xlarge`,
      children: (0, _.jsx)(_, {
        title: _(`#ProfileShowcases_Slots_Title`),
        subtitle: _(`#ProfileShowcases_Slots_Subtitle`),
        children: _,
      }),
    });
  },
  _ = class extends _.Component {
    render() {
      let _ = _.Get().GetUpgradableProfileShowcaseCost(),
        _ = _.Get().GetUpgradableProfileShowcases(),
        _ = _.Get().GetUpgradedProfileCustomizations(),
        _ = _.Get().GetPurchasableProfileShowcaseSlotCost(),
        _ = _.Get().GetPurchasableProfileShowcaseSlots(),
        _ = _.Get().GetPurchasedProfileCustomizations();
      return (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          className: _,
          itemClassName: _,
          spacing: `xlarge`,
          children: [
            (0, _.jsx)(`div`, {
              children: (0, _.jsx)(_, {
                title: _(`#ShopPageTitle_ProfileShowcases`),
              }),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              point_cost: _,
              upgradable_showcases: _,
              purchased_upgrades: _,
            }),
            (0, _.jsx)(_, {
              point_cost: _,
              purchasable_showcases: _,
              purchased_showcases: _,
              purchased_upgrades: _,
            }),
            this.props.children,
          ],
        }),
      });
    }
  };
_ = _([_], _);
var _ = _;
export { _ as ProfileShowcasesPage, _ as default };
