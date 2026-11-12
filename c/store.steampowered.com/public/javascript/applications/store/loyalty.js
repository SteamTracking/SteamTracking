const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./chunk~5fe193a7dd.js",
      "./chunk~f025431ab0.js",
      "./chunk~01cfc309bf.js",
      "./main.js",
      "../../../css/applications/store/chunk~bcf59b1f6b.css",
      "./chunk~915930a63a.js",
      "../../../css/applications/store/chunk~14131c2b6b.css",
      "../../../css/applications/store/chunk~5fe193a7dd.css",
      "./chunk~693cf860c6.js",
      "./chunk~4e18b7e430.js",
      "../../../css/applications/store/chunk~693cf860c6.css",
    ]),
) => _.map((_) => _[_]);
import { _, _ } from "./chunk~f025431ab0.js";
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
} from "./chunk~01cfc309bf.js";
import "./chunk~8681f5c764.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~e867464c75.js";
import { _ } from "./chunk~0111fcd096.js";
import { _, _ } from "./chunk~90b9831ad2.js";
import { _, _, _ } from "./chunk~5214caf193.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~4e18b7e430.js";
import { _, _, _ } from "./chunk~9e9562d60b.js";
import { _ } from "./chunk~c55d6473b2.js";
import { _ } from "./chunk~a35e3605eb.js";
import { _ } from "./chunk~a7c5e71e12.js";
import { _, _, _, _ } from "./chunk~9e9862dda3.js";
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
} from "./main.js";
import { _ } from "./chunk~85f65a382b.js";
import { _, _, _, _ } from "./chunk~65da1d3223.js";
import { _ } from "./chunk~71ac6b59f3.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~915930a63a.js";
import { _, _ } from "./chunk~a952f596c4.js";
var _ = _(_()),
  _,
  _;
function _(_, _) {
  return !(
    _ === _ ||
    (_.isValidElement(_) &&
      _.isValidElement(_) &&
      _.key != null &&
      _.key === _.key)
  );
}
var _ = {
    out: `out-in`,
    _: `in-out`,
  },
  _ = function (_, _, _) {
    return function () {
      var _;
      (_.props[_] && (_ = _.props)[_].apply(_, arguments), _());
    };
  },
  _ =
    ((_ = {}),
    (_[_.out] = function (_) {
      var _ = _.current,
        _ = _.changeState;
      return _.cloneElement(_, {
        _: !1,
        onExited: _(_, `onExited`, function () {
          _(_, null);
        }),
      });
    }),
    (_[_._] = function (_) {
      var _ = _.current,
        _ = _.changeState,
        _ = _.children;
      return [
        _,
        _.cloneElement(_, {
          _: !0,
          onEntered: _(_, `onEntered`, function () {
            _(_);
          }),
        }),
      ];
    }),
    _),
  _ =
    ((_ = {}),
    (_[_.out] = function (_) {
      var _ = _.children,
        _ = _.changeState;
      return _.cloneElement(_, {
        _: !0,
        onEntered: _(_, `onEntered`, function () {
          _(
            _,
            _.cloneElement(_, {
              _: !0,
            }),
          );
        }),
      });
    }),
    (_[_._] = function (_) {
      var _ = _.current,
        _ = _.children,
        _ = _.changeState;
      return [
        _.cloneElement(_, {
          _: !1,
          onExited: _(_, `onExited`, function () {
            _(
              _,
              _.cloneElement(_, {
                _: !0,
              }),
            );
          }),
        }),
        _.cloneElement(_, {
          _: !0,
        }),
      ];
    }),
    _),
  _ = (function (_) {
    _(_, _);
    function _() {
      var _,
        _ = [...arguments];
      return (
        (_ = _.call.apply(_, [this].concat(_)) || this),
        (_.state = {
          status: _,
          current: null,
        }),
        (_.appeared = !1),
        (_.changeState = function (_, _) {
          (_ === void 0 && (_ = _.state.current),
            _.setState({
              status: _,
              current: _,
            }));
        }),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.componentDidMount = function () {
        this.appeared = !0;
      }),
      (_.getDerivedStateFromProps = function (_, _) {
        return _.children == null
          ? {
              current: null,
            }
          : _.status === `entering` && _.mode === _._
            ? {
                status: _,
              }
            : _.current && _(_.current, _.children)
              ? {
                  status: _,
                }
              : {
                  current: _.cloneElement(_.children, {
                    _: !0,
                  }),
                };
      }),
      (_.render = function () {
        var _ = this.props,
          _ = _.children,
          _ = _.mode,
          _ = this.state,
          _ = _.status,
          _ = _.current,
          _ = {
            children: _,
            current: _,
            changeState: this.changeState,
            status: _,
          },
          _;
        switch (_) {
          case _:
            _ = _[_](_);
            break;
          case _:
            _ = _[_](_);
            break;
          case _:
            _ = _;
        }
        return _.createElement(
          _.Provider,
          {
            value: {
              isMounting: !this.appeared,
            },
          },
          _,
        );
      }),
      _
    );
  })(_.Component);
((_.propTypes = {}),
  (_.defaultProps = {
    mode: _.out,
  }));
var _ = `xON8oDeeQhs-`,
  _ = `SAk8QmeqGJg-`,
  _ = `MdNYC8c7zH0-`,
  _ = `pGfRJrjVHOQ-`,
  _ = `Q-jxe0XbXcU-`,
  _ = `_3z-SJMDRMwU-`,
  _ = `T5b2NUonuC8-`,
  _ = `Z1DSZ-P71Sw-`,
  _ = `_8wwlqrCjvo0-`,
  _ = `UM-1qKdbZ4I-`,
  _ = `_6aQRU79liM4-`,
  _ = `YpUxlZlervQ-`,
  _ = `wrP5kGljuJw-`,
  _ = `a7mfE-yLDlw-`,
  _ = `sZ-DvM8mA0s-`,
  _ = `oQatG4OMqS4-`,
  _ = `Ndm52J2H-oY-`,
  _ = `nfM0ceTUX2k-`,
  _ = `lUpW8G-YTfI-`,
  _ = `YXDzqbFtyiA-`,
  _ = `_7JSvJmQTuhw-`,
  _ = `_3i1ifZyHkw4-`,
  _ = `_3NxdOyLSE-8-`,
  _ = `vlvdujm6InE-`,
  _ = `uLWIA8kG0mY-`,
  _ = _(_()),
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAvailableValveDiscountPromotions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.promotions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            promotions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAvailableValveDiscountPromotions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.promotionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            promotionid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            promotion_description: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            minimum_cart_amount: {
              _: 3,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            minimum_cart_amount_for_display: {
              _: 4,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            discount_amount: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            currency_code: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
            available_use_count: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            promotional_discount_type: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            loyalty_reward_id: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            localized_name_token: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            max_use_count: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            opt_out_in_library_events: {
              _: 2,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CPerAppEmailOptions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clanid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            opt_out_in_library_events: {
              _: 2,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CPerClanEmailOptions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_out_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_out_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetOptOutEmailOptions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.email || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            opt_out_all: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_sales: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_seasonal_promo: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_releases: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_greenlight_releases: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_curator_connect: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_creator_home_releases: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_in_library_events: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            per_app_opt_outs: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            per_clan_opt_outs: {
              _: 11,
              _: _,
              _: !0,
              _: !0,
            },
            opt_out_loyalty_awards_received: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_partner_messages: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_year_in_review: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_demo_releases: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_creator_home_demo_releases: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_next_fest_starts: {
              _: 17,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_theme_sale_starts: {
              _: 18,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_season_pass_ship: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_roadmap_ship: {
              _: 20,
              _: _.readBool,
              _: _.writeBool,
            },
            is_self: {
              _: 21,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetOptOutEmailOptions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_out_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_out_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            opt_out_all: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_sales: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_seasonal_promo: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_releases: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_greenlight_releases: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_curator_connect: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_creator_home_releases: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_in_library_events: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            per_app_opt_outs: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            per_clan_opt_outs: {
              _: 11,
              _: _,
              _: !0,
              _: !0,
            },
            opt_out_loyalty_awards_received: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_partner_messages: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_year_in_review: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_demo_releases: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_creator_home_demo_releases: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_next_fest_starts: {
              _: 17,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_theme_sale_starts: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_season_pass_ship: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_roadmap_ship: {
              _: 20,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_SetOptOutEmailOptions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_SetOptOutEmailOptions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.has_wallet || _(_._()),
        _.Message.initialize(this, _, 0, -1, [13], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            has_wallet: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            user_country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            wallet_country_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            wallet_state: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            balance: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            delayed_balance: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            currency_code: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            time_most_recent_txn: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            most_recent_txnid: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            balance_in_usd: {
              _: 10,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            delayed_balance_in_usd: {
              _: 11,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            has_wallet_in_other_regions: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            other_regions: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            formatted_balance: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            formatted_delayed_balance: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            delayed_balance_available_min_time: {
              _: 16,
              _: _.readInt32,
              _: _.writeInt32,
            },
            delayed_balance_available_max_time: {
              _: 17,
              _: _.readInt32,
              _: _.writeInt32,
            },
            delayed_balance_newest_source: {
              _: 18,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetWalletDetails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_balance_in_usd || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_balance_in_usd: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            wallet_region: {
              _: 2,
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            include_formatted_balance: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetClientWalletDetails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAccountLinkStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.pwid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            pwid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            identity_verification: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            performed_age_verification: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAccountLinkStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_CancelLicenseForApp_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_CancelLicenseForApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetUserCountry_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.country || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetUserCountry_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_limit || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_limit: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            invite_duration: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            invite_note: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_CreateFriendInviteToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            invite_limit: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_duration: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_created: {
              _: 4,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            valid: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_CreateFriendInviteToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetFriendInviteTokens_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tokens || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tokens: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetFriendInviteTokens_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            invite_token: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_ViewFriendInviteToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.valid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            valid: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            steamid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_duration: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_ViewFriendInviteToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            invite_token: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RedeemFriendInviteToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RedeemFriendInviteToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RevokeFriendInviteToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RevokeFriendInviteToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.compat_tool || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            compat_tool: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RegisterCompatTool_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RegisterCompatTool_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            client_token: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
            expiry: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            deviceid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CEmbeddedClient_Token`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.result || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            result: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            token: {
              _: 2,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CEmbeddedClient_AuthorizeDevice_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            device_info: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            deviceid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CEmbeddedClient_AuthorizeCurrentDevice_Request`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `UserAccount.GetAvailableValveDiscountPromotions#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetAvailableValveDiscountPromotions = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetOptOutEmailOptions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
    });
  }
  _.GetOptOutEmailOptions = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.SetOptOutEmailOptions#1`, _(_, _, _), _, {
      ePrivilege: 2,
    });
  }
  _.SetOptOutEmailOptions = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetClientWalletDetails#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetClientWalletDetails = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetAccountLinkStatus#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAccountLinkStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.CancelLicenseForApp#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.CancelLicenseForApp = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetUserCountry#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetUserCountry = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.CreateFriendInviteToken#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.CreateFriendInviteToken = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetFriendInviteTokens#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetFriendInviteTokens = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.ViewFriendInviteToken#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ViewFriendInviteToken = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.RedeemFriendInviteToken#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RedeemFriendInviteToken = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.RevokeFriendInviteToken#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RevokeFriendInviteToken = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.RegisterCompatTool#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RegisterCompatTool = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`EmbeddedClient.AuthorizeCurrentDevice#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.AuthorizeCurrentDevice = _;
})((_ ||= {}));
var _ = new URL(
    `../../../images/applications/store/RewardsSeason1Hero.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = 1880140,
  _ = 4844660,
  _ = _.EUNIVERSE === 2 ? 404860 : 1675200;
function _(_, _ = !1) {
  let _ = (_) => _(_ ? `${_}_Plural` : _);
  switch (_) {
    case 4:
      return _(`#CommunityItemClass_Emoticon`);
    case 11:
      return _(`#CommunityItemClass_Sticker`);
    case 13:
      return _(`#CommunityItemClass_MiniProfileBackground`);
    case 3:
      return _(`#CommunityItemClass_Background`);
    case 12:
      return _(`#CommunityItemClass_ChatEffect`);
    case 14:
      return _(`#CommunityItemClass_AvatarFrame`);
    case 15:
      return _(`#CommunityItemClass_AnimatedAvatar`);
    case 1:
      return _(`#CommunityItemClass_Badge`);
    case 8:
      return _(`#CommunityItemClass_ProfileModifier`);
    case 16:
      return _(`#CommunityItemClass_SteamDeckKeyboardSkin`);
    case 17:
      return _(`#CommunityItemClass_SteamDeckStartupMovie`);
  }
  return `Unknown ECommunityItemClass`;
}
var _ = `home`,
  _ = class {
    original_point_cost;
    point_cost;
    discount;
    items = [];
    mapItemOwnership = new Map();
  },
  _ = class _ {
    constructor() {
      _(this);
    }
    m_transport;
    m_anonymousTransport;
    m_config;
    m_lPointsAvailable = new _(0, 0);
    m_bLoadedCouponPromosForUser = !1;
    m_mapCouponPromos = new Map();
    m_nAppIDFiltersInUseCount = 0;
    m_mapAppIDFilters = new Map();
    m_strAppFilterText = ``;
    m_strSearchTerm = ``;
    m_strSearchPlaceholder = ``;
    m_bLoadedCouponDefinitions = !1;
    m_mapCouponDefinitons = new Map();
    m_mapLoyaltyRewardDefs = new Map();
    m_inflightRewardItemRequestsByID = {};
    m_bLoadedFullInventory = !1;
    m_mapOwnedCommunityItems = new Map();
    m_inflightInventoryRequests = {};
    m_bLoadedActiveBonuses = !1;
    m_rgActiveBonuses = _.array([], {
      deep: !1,
    });
    m_mapAppRewards = new Map();
    m_inflightRewardItemRequests = {};
    m_seasonalBadgeDefinition = void 0;
    m_goldenProfileDefinition = void 0;
    m_goldenProfileConfigs = [];
    m_bLoadedRecentlyPlayed = !1;
    m_rgRecentlyPlayed = [];
    m_bSortedGamesWithRewards = !1;
    m_rgSortedAppsWithRewards = _.array([], {
      deep: !1,
    });
    m_rgEventAppsWithRewards = _.array([], {
      deep: !1,
    });
    m_bLoadedEligibleApps = !1;
    m_rgEligibleApps = [];
    m_mapEligibleApps = new Map();
    m_rgProfileCustomizationsConfig = void 0;
    m_persona = void 0;
    m_equippedItems = {};
    m_rgPurchasedCustomizations = void 0;
    m_rgUpgradedCustomizations = void 0;
    m_bLoadedAwardCost = !1;
    m_unAwardPointsTransferred = 0;
    m_bIsSaleActive = !1;
    m_strFreeItemHeader;
    m_HeroImageFallbackLoader = new _(
      (_) =>
        fetch(`${_.STORE_BASE_URL}points/heroimage?appid=${_}`)
          .then((_) => _.json())
          .then((_) => _.img_url),
      (_) => _.toString(),
    );
    m_batchedRewardItemLoader = new _(
      (_) => _.BatchedQueryRewardItems(this.m_anonymousTransport, _),
      (_) => {
        let _ = _.Init(_);
        return (_.Body().set_requests(_), _);
      },
      (_) =>
        _.GetEResult() == 1
          ? _.Body()
              .responses()
              .map((_) => _.toObject())
          : (console.error(
              `Error when calling LoyaltyRewardsService.BatchedQueryRewardItems: EResult=${_.GetEResult()}`,
            ),
            []),
    );
    m_batchedCommunityInventoryLoader = new _(
      (_) => _.GetCommunityInventory(this.m_transport, _),
      (_) => {
        let _ = _.Init(_);
        return (_.Body().set_filter_appids(_), _);
      },
      (_, _) => {
        if (_.GetEResult() == 1) {
          let { items: _ } = _.Body().toObject(),
            _ = {};
          return (
            _.forEach((_) => {
              (_[_.appid] || (_[_.appid] = []), _[_.appid].push(_));
            }),
            _.map((_) => _[_] || [])
          );
        }
        return (
          console.error(
            `Error when calling QuestService.GetCommunityInventory: EResult=${_.GetEResult()}`,
          ),
          _.map(() => [])
        );
      },
    );
    Init(_, _) {
      if (
        ((this.m_transport = _.GetServiceTransport()),
        (this.m_anonymousTransport = _.GetAnonymousServiceTransport()),
        (this.m_config = _),
        this.BIsLoggedIn())
      ) {
        let _ = new _(_.steamid);
        ((this.m_persona = new _(_)), this.RetrievePersonaState());
      }
      (_.eligible_apps
        ? ((this.m_bLoadedEligibleApps = !0),
          (this.m_rgEligibleApps = _.eligible_apps.apps),
          (this.m_mapEligibleApps = new Map(
            this.m_rgEligibleApps.map((_) => [_.appid, _]),
          )))
        : this.LoadEligibleApps(),
        _.profile_customizations_config &&
          (this.m_rgProfileCustomizationsConfig =
            _.profile_customizations_config),
        _.last_played &&
          ((this.m_bLoadedRecentlyPlayed = !0),
          (this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
            _.last_played.games,
          ))),
        _.profile_items_equipped
          ? (this.m_equippedItems = _.profile_items_equipped)
          : this.RefreshEquippedProfileItems(),
        _.profile_customizations_purchased &&
          ((this.m_rgPurchasedCustomizations =
            _.profile_customizations_purchased.purchased_customizations || []),
          (this.m_rgUpgradedCustomizations =
            _.profile_customizations_purchased.upgraded_customizations || [])),
        _.summary
          ? (this.m_lPointsAvailable = _.fromString(_.summary.summary.points))
          : this.GetLoyaltyRewardsSummary(),
        _.golden_profiles &&
          (this.m_goldenProfileConfigs = _.golden_profiles || []),
        _.can_claim_sale_reward &&
          _.Get().InitFreeItemReward(_.can_claim_sale_reward),
        _.is_sale_active && (this.m_bIsSaleActive = _.is_sale_active),
        _.free_item_header && (this.m_strFreeItemHeader = _.free_item_header),
        this.HydrateCustomPages());
    }
    static s_RewardsStore;
    static Get() {
      return ((this.s_RewardsStore ||= new _()), this.s_RewardsStore);
    }
    GetFreeItemHeaderSource() {
      return this.m_strFreeItemHeader;
    }
    GetServiceTransport() {
      return this.m_transport;
    }
    GetConfig() {
      return this.m_config;
    }
    GetCurrentSeasonalAppID() {
      return _;
    }
    async GetLoyaltyRewardsSummary() {
      if (!this.BIsLoggedIn()) return;
      let _ = _.Init(_);
      _.SetBodyFields({
        steamid: _.steamid,
      });
      let _ = await _.GetSummary(this.m_transport, _);
      _.GetEResult() == 1
        ? (this.m_lPointsAvailable = _.fromString(_.Body().summary().points()))
        : console.error(
            `Error when calling LoyaltyRewardsService.GetSummary: EResult=${_.GetEResult()}`,
          );
    }
    GetCommunityAwardPointsTransferred() {
      return (
        this.m_bLoadedAwardCost || this.LoadAwardCost(),
        this.m_unAwardPointsTransferred
      );
    }
    async LoadAwardCost() {
      this.m_bLoadedAwardCost = !0;
      let _ = _.Init(_),
        _ = await _.GetReactionConfig(this.m_transport, _);
      _.GetEResult() == 1
        ? ((this.m_unAwardPointsTransferred = 0),
          _.Body()
            .reactions()
            .forEach((_) => {
              this.m_unAwardPointsTransferred =
                this.m_unAwardPointsTransferred == 0
                  ? _.points_transferred()
                  : Math.min(
                      this.m_unAwardPointsTransferred,
                      _.points_transferred(),
                    );
            }))
        : (console.error(
            `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${_.GetEResult()}`,
          ),
          (this.m_bLoadedAwardCost = !1));
    }
    ShowLoginDialog(_) {
      let _ = window.location.href;
      if (_ !== void 0) {
        let _ = _.indexOf(`/reward/`);
        (_ === -1
          ? _.endsWith(`/`) && (_ = _.slice(0, _.length - 1))
          : (_ = _.slice(0, _)),
          (_ += `/reward/` + _));
      }
      _(_);
    }
    BHasAutumnSaleStarted() {
      return Date.now() / 1e3 > 1606327200;
    }
    BHasAutumnSaleEnded() {
      return Date.now() / 1e3 > 1606845600;
    }
    BIsSaleActive() {
      return this.m_bIsSaleActive;
    }
    BIsLoggedIn() {
      return _.logged_in;
    }
    GetPointsAvailable() {
      return this.m_lPointsAvailable;
    }
    GetIsUsingAppIDFilters() {
      return this.m_nAppIDFiltersInUseCount != 0;
    }
    SetIsUsingAppIDFilters(_) {
      this.m_nAppIDFiltersInUseCount += _ ? 1 : -1;
    }
    GetAppIDFilters() {
      return this.m_mapAppIDFilters;
    }
    AddAppIDFilter(_) {
      this.m_mapAppIDFilters.set(_, !0);
    }
    RemoveAppIDFilter(_) {
      this.m_mapAppIDFilters.delete(_);
    }
    GetCurrentAppFilterText() {
      return this.m_strAppFilterText;
    }
    SetCurrentAppFilterText(_) {
      this.m_strAppFilterText = _;
    }
    GetCurrentSearchTerm() {
      return this.m_strSearchTerm;
    }
    SetCurrentSearchTerm(_) {
      this.m_strSearchTerm = _ && _.slice(0, 200);
    }
    GetCurrentSearchPlaceholder() {
      return this.m_strSearchPlaceholder;
    }
    SetCurrentSearchPlaceholder(_) {
      this.m_strSearchPlaceholder = _;
    }
    getLoyaltyRewardDefMap() {
      return this.m_mapLoyaltyRewardDefs;
    }
    async ReloadRewardDefinition(_) {
      let _ = await this.LoadRewardDefinitions(_);
      return _.length == 1
        ? (this.m_mapLoyaltyRewardDefs.set(_, _[0]), _[0])
        : null;
    }
    GetRewardDefinitions(..._) {
      let _ = _.filter(
        (_) =>
          !this.m_mapLoyaltyRewardDefs.has(_) &&
          !this.m_inflightRewardItemRequestsByID[_],
      );
      if (_.length > 0) {
        _.forEach((_) => (this.m_inflightRewardItemRequestsByID[_] = !0));
        let _ = [];
        for (let _ = 0; _ < Math.ceil(_.length / 100); _++) {
          let _ = _.slice(_ * 100, _ * 100 + 100);
          _.push(this.LoadRewardDefinitions(..._));
        }
        Promise.all(_).then(
          _((_) => {
            _.forEach((_) => {
              _.forEach((_) => {
                (delete this.m_inflightRewardItemRequestsByID[_.defid],
                  this.m_mapLoyaltyRewardDefs.set(_.defid, _));
              });
            });
          }),
        );
      }
      return _.map((_) => this.m_mapLoyaltyRewardDefs.get(_)).filter(Boolean);
    }
    async LoadRewardDefinitions(..._) {
      let _ = new _();
      (_.set_language(_.LANGUAGE),
        _.set_include_direct_purchase_disabled(!0),
        _.forEach((_) => _.add_definitionids(_)));
      let _ = await this.m_batchedRewardItemLoader.Load(_);
      return _.eresult == 1
        ? (_.response.count !== _.response.total_count &&
            console.error(
              `LoadRewardDefinitions did not receive all expected definitions (likely to due server-side limiting). The calling code should be paging/batching the request into multiple.`,
            ),
          _.response.definitions)
        : (console.error(
            `Error loading reward definitions by ID: EResult=${_.eresult}`,
          ),
          []);
    }
    QueryRewardDefinitions(_, _, _) {
      let _ = _.rewardtype ?? [1],
        _ = _.Get().ExcludedContentDescriptor,
        _ = _.Get().GetExcludedTagsSortedByID(),
        _ = this.QueryLoyaltyRewardDefinitions(
          {
            ..._,
            excludedContentDescriptors: _,
            excludedTagIDs: _,
          },
          _,
          _,
          _,
        );
      if (_.length) {
        let _ = {
            ..._,
            excludedContentDescriptors: [],
            excludedTagIDs: [],
            maxToReturn: 1,
          },
          _ = this.QueryLoyaltyRewardDefinitions(_, 0, 1, _);
        _.cTotalMatching !== void 0 &&
          (_.cTotalMatchingUnfiltered = _.cTotalMatching);
      } else _.cTotalMatchingUnfiltered = _.cTotalMatching;
      return _;
    }
    EResultToErrorMessage(_) {
      switch (_) {
        case 15:
          return _(`#Redeem_Error_AccessDenied`);
        case 24:
          return _(`#Redeem_Error_InsufficientPrivileges`);
        case 107:
          return _(`#Redeem_Error_InsufficientFunds`);
        case 29:
          return _(`#Redeem_Error_DuplicateRequest`);
        case 26:
          return _(`#Redeem_Error_Revoked`);
        case 11:
          return _(`#Redeem_Error_PriceChange`);
      }
      return ``;
    }
    QueryLoyaltyRewardDefinitions(_, _, _, _) {
      let _ = {
        rewards: [],
        cTotalMatching: 0,
        cMaxToReturn: 0,
      };
      if ((_.appid && !_.appid.length) || (_.itemclass && !_.itemclass.length))
        return _;
      let _ = {
          appid: _.appid || [],
          itemclass: _.itemclass || [],
          grouping: _.grouping,
          maxToReturn: _.maxToReturn,
          rewardtype: _.rewardtype,
          queryFilter: _.queryFilter || [],
          categoryTag: _.categoryTag || [],
          excludedContentDescriptors: _.excludedContentDescriptors || [],
          excludedTagIDs: _.excludedTagIDs || [],
          excludedAppIDs: _.excludedAppIDs || [],
          searchLanguage: _.searchLanguage,
          searchTerm: _.searchTerm,
        },
        _ = _(_);
      _.maxToReturn &&
        _ + _ > _.maxToReturn &&
        (_ = Math.max(0, _.maxToReturn - _));
      let _ = _,
        _;
      if (this.m_mapAppRewards.has(_)) {
        let _ = this.m_mapAppRewards.get(_);
        ((_ =
          _ > _.rgRewardIds.length - 1
            ? _ + _ - _.rgRewardIds.length
            : Math.max(_ - (_.rgRewardIds.length - _), 0)),
          _.bFullyLoaded && (_ = 0),
          (_ = _.strCursor));
      }
      if (
        (this.m_mapAppRewards.has(_) ||
          this.m_mapAppRewards.set(_, {
            rgRewardIds: [],
          }),
        _ && !this.m_inflightRewardItemRequests[_])
      ) {
        this.m_inflightRewardItemRequests[_] = !0;
        let _ = [];
        this.LoadLoyaltyRewardDefinitions(_, _, _, _).then((_) => {
          _(() => {
            let { definitions: _, next_cursor: _, total_count: _ } = _,
              _ = _.filter((_) => (!_(_) || _.type === 4) && !_(_)),
              _ = this.m_mapAppRewards.get(_);
            (delete this.m_inflightRewardItemRequests[_],
              (_.strCursor = _),
              (_.cTotal = _),
              _.forEach(({ defid: _ }) => {
                _.rgRewardIds.push(_);
              }),
              (_.bFullyLoaded =
                _.length === 0 || _.rgRewardIds.length === _.cTotal),
              _.forEach((_) => {
                (this.m_mapLoyaltyRewardDefs.set(_.defid, _), _.push(_.appid));
              }),
              _.EnsureAppInfoForAppIDs(_));
          });
        });
      }
      let _ = this.m_mapAppRewards.get(_);
      return (
        (_.rewards = _.rgRewardIds
          .slice(_, _ + _)
          .map((_) => this.m_mapLoyaltyRewardDefs.get(_))),
        (_.cTotalMatching = _.cTotal || 0),
        (_.cMaxToReturn = _.maxToReturn || 0),
        (_.bLoadingMore = this.m_inflightRewardItemRequests[_]),
        _
      );
    }
    async LoadLoyaltyRewardDefinitions(_, _, _, _) {
      let {
          appid: _,
          grouping: _,
          itemclass: _,
          queryFilter: _,
          categoryTag: _,
          excludedContentDescriptors: _,
          excludedTagIDs: _,
          excludedAppIDs: _,
          searchTerm: _,
        } = _,
        _ = _(_),
        _ = new _();
      (_.forEach((_) => _.add_appids(_)),
        _.set_language(_.LANGUAGE),
        _.set_count(_),
        _.set_sort(_.sort),
        _.set_sort_descending(_.sort_descending),
        _.set_community_item_classes(_),
        _.set_filters(_),
        _.set_filter_match_any_category_tags(_),
        _.set_excluded_content_descriptors(_),
        _.set_excluded_store_tagids(_),
        _.set_excluded_appids(_),
        _.set_search_term(_),
        _ && _.set_reward_types(_),
        _ && _.set_cursor(_));
      let _ = await this.m_batchedRewardItemLoader.Load(_);
      return _.eresult == 1
        ? _.response
        : (console.error(
            `Error when loading reward definitions: EResult=${_.eresult}`,
          ),
          {
            definitions: [],
            total_count: 0,
            next_cursor: void 0,
            count: 0,
          });
    }
    GetCostToLevelSeasonalBadge(_) {
      let _ = this.GetSeasonalBadgeDefinition();
      if (!_) return 0;
      let _ = this.GetUserSeasonalBadgeLevel();
      return Math.max(parseInt(_.point_cost) * (_ - _), 0);
    }
    GetUserSeasonalBadgeLevel() {
      let _ = this.GetSeasonalBadgeDefinition();
      if (!_ || !this.BRewardOwnedByUser(_)) return 0;
      let _ = this.GetOwnedCommunityItem(_);
      if (!_)
        return (console.error(`Could not find owned seasonal badge item`), 0);
      let _ = _.attributes.find(({ attributeid: _ }) => _ === 2);
      if (!_)
        return (
          console.error(`Could not find seasonal badge level attribute`), 0
        );
      let _ = parseInt(_.value);
      return isNaN(_)
        ? (console.error(`Seasonal badge level attribute is NaN`), 0)
        : _;
    }
    GetGoldenProfileConfigForApp(_) {
      return this.m_goldenProfileConfigs.find((_) => _.appid === _) || null;
    }
    GetSeasonalBadgeDefinition() {
      return (
        this.m_seasonalBadgeDefinition === void 0 &&
          this.LoadSeasonalBadgeDefinition().then(
            (_) => (this.m_seasonalBadgeDefinition = _),
          ),
        this.m_seasonalBadgeDefinition
      );
    }
    async LoadSeasonalBadgeDefinition() {
      let _ = new _();
      (_.set_appids([this.GetCurrentSeasonalAppID()]),
        _.set_community_item_classes([1]),
        _.set_count(1),
        _.set_language(_.LANGUAGE));
      let _ = await this.m_batchedRewardItemLoader.Load(_);
      return _.eresult == 1
        ? _.response.definitions[0] || null
        : (console.error(
            `Error when loading badge definition: EResult=${_.eresult}`,
          ),
          null);
    }
    GetGoldenProfileDefinition() {
      return (
        this.m_goldenProfileDefinition === void 0 &&
          this.LoadGoldenProfileDefinition().then(
            (_) => (this.m_goldenProfileDefinition = _),
          ),
        this.m_goldenProfileDefinition
      );
    }
    async LoadGoldenProfileDefinition() {
      let _ = new _();
      (_.set_appids([this.GetCurrentSeasonalAppID()]),
        _.set_community_item_classes([8]),
        _.set_count(1),
        _.set_language(_.LANGUAGE));
      let _ = await this.m_batchedRewardItemLoader.Load(_);
      return _.eresult == 1
        ? _.response.count == 0
          ? (console.error(
              `Error when loading golden profile definition: Failed to find definition for appid ${this.GetCurrentSeasonalAppID()}`,
            ),
            null)
          : _.response.definitions[0] || null
        : (console.error(
            `Error when loading golden profile definition: EResult=${_.eresult}`,
          ),
          null);
    }
    GetCouponDefinition(_) {
      return (
        this.m_bLoadedCouponDefinitions ||
          ((this.m_bLoadedCouponDefinitions = !0),
          this.LoadCouponDefinitions().then((_) =>
            _.forEach((_) => this.m_mapCouponDefinitons.set(_.defid, _)),
          )),
        this.m_mapCouponDefinitons.get(_)
      );
    }
    async LoadCouponDefinitions() {
      let _ = new _();
      (_.set_appids([this.GetCurrentSeasonalAppID()]),
        _.set_reward_types([4]),
        _.set_count(10),
        _.set_language(_.LANGUAGE));
      let _ = await this.m_batchedRewardItemLoader.Load(_);
      return _.eresult == 1
        ? _.response.definitions
        : (console.error(
            `Error when loading coupon definitions: EResult=${_.eresult}`,
          ),
          null);
    }
    GetBundleOfferForUser(_) {
      let _ = new _();
      if (
        ((_.original_point_cost = 0),
        (_.point_cost = 0),
        (_.discount = _.bundle_discount),
        (_.items = this.GetRewardDefinitions(..._.bundle_defids)),
        _.community_item_class == 8)
      ) {
        let _ = this.GetRewardDefinitions(_.defid);
        _.items = _.items.concat(_);
      }
      return (
        _.items.sort((_, _) =>
          _.community_item_class == 8
            ? -1
            : _.community_item_class == 8
              ? 1
              : _.community_item_class - _.community_item_class,
        ),
        _.items.forEach((_) => {
          let _ = parseInt(_.point_cost);
          _.original_point_cost += _;
          let _ = this.BRewardOwnedByUser(_);
          (_.mapItemOwnership.set(_.defid, _), _ || (_.point_cost += _));
        }),
        (_.point_cost = Math.ceil(_.point_cost * (100 - _.discount) * 0.01)),
        _
      );
    }
    GetOwnedItemCacheKey(_) {
      return `${_}`;
    }
    BRewardOwnedByUser(_) {
      let _ = this.m_mapOwnedCommunityItems.get(
        this.GetOwnedItemCacheKey(
          this.m_bLoadedFullInventory ? void 0 : _.appid,
        ),
      );
      if ((_ || this.GetCommunityItemInventory(_.appid), !_)) return !1;
      if (_.type == 5 || _.type == 6) {
        for (let _ of _.bundle_defids) {
          let _ = this.m_mapLoyaltyRewardDefs.get(_);
          if (_ && !this.BRewardOwnedByUser(_)) return !1;
        }
        return !0;
      }
      return _.has(_.community_item_type);
    }
    BRewardEquippedByUser(_) {
      if (!this.BRewardOwnedByUser(_)) return !1;
      switch (_.community_item_class) {
        case 15:
          return (
            this.m_equippedItems.animated_avatar.appid == _.appid &&
            this.m_equippedItems.animated_avatar.item_type ==
              _.community_item_type
          );
        case 14:
          return (
            this.m_equippedItems.avatar_frame.appid == _.appid &&
            this.m_equippedItems.avatar_frame.item_type == _.community_item_type
          );
        case 3:
          return (
            this.m_equippedItems.profile_background.appid == _.appid &&
            this.m_equippedItems.profile_background.item_type ==
              _.community_item_type
          );
        case 13:
          return (
            this.m_equippedItems.mini_profile_background.appid == _.appid &&
            this.m_equippedItems.mini_profile_background.item_type ==
              _.community_item_type
          );
        case 8:
          return (
            this.m_equippedItems.profile_modifier.appid == _.appid &&
            this.m_equippedItems.profile_modifier.item_type ==
              _.community_item_type
          );
        case 16:
          return (
            this.m_equippedItems.steam_deck_keyboard_skin.appid == _.appid &&
            this.m_equippedItems.steam_deck_keyboard_skin.item_type ==
              _.community_item_type
          );
      }
      return !1;
    }
    GetOwnedCommunityItem(_) {
      let _ = this.m_mapOwnedCommunityItems.get(
        this.GetOwnedItemCacheKey(
          this.m_bLoadedFullInventory ? void 0 : _.appid,
        ),
      );
      return (
        _ || this.GetCommunityItemInventory(_.appid),
        _(
          _.has(_.community_item_type),
          `Missing owned item ${_.community_item_type}`,
        ),
        _.get(_.community_item_type)
      );
    }
    GetOwnedCommunityItemID(_) {
      let _ = this.GetOwnedCommunityItem(_);
      return _ ? _.communityitemid : null;
    }
    async EnsureCommunityItemInventoryLoaded(_) {
      this.m_mapOwnedCommunityItems.has(this.GetOwnedItemCacheKey(_)) ||
        (await this.GetCommunityItemInventory(_));
    }
    async GetCommunityItemInventory(_) {
      if (!this.BIsLoggedIn()) return Promise.resolve();
      let _ = this.GetOwnedItemCacheKey(_);
      if (this.m_inflightInventoryRequests[_])
        return this.m_inflightInventoryRequests[_];
      let _ = this.m_batchedCommunityInventoryLoader.Load(_);
      this.m_inflightInventoryRequests[_] = _;
      let _ = await _,
        _ = new Map();
      return (
        _.forEach((_) => {
          _.set(_.item_type, _);
        }),
        this.m_mapOwnedCommunityItems.set(_, _),
        delete this.m_inflightInventoryRequests[_],
        _
      );
    }
    get active_bonuses() {
      return (
        this.m_bLoadedActiveBonuses || this.LoadActiveBonuses(),
        this.m_rgActiveBonuses
      );
    }
    async LoadActiveBonuses() {
      this.m_bLoadedActiveBonuses = !0;
      let _ = _.Init(_),
        _ = await _.GetActivePurchaseBonuses(this.m_transport, _);
      _.GetEResult() == 1
        ? this.m_rgActiveBonuses.push(
            ..._.Body()
              .bonuses()
              .map((_) => _.toObject()),
          )
        : console.error(
            `Error when calling LoyaltyRewardsService.GetActivePurchaseBonuses: EResult=${_.GetEResult()}`,
          );
    }
    async SetProfileBackground(_) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: `Not logged on`,
          }),
          _
        );
      let _ = _.Init(_);
      _.Body().set_communityitemid(this.GetOwnedCommunityItemID(_));
      let _ = await _.SetProfileBackground(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() != 1 &&
          console.error(
            `Error when calling PlayerService.SetProfileBackground: EResult=${_.GetEResult()}`,
          ),
        _
      );
    }
    async SetAvatarFrame(_) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: `Not logged on`,
          }),
          _
        );
      let _ = _.Init(_);
      _.Body().set_communityitemid(this.GetOwnedCommunityItemID(_));
      let _ = await _.SetAvatarFrame(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling PlayerService.SetAvatarFrame: EResult=${_.GetEResult()}`,
            ),
        _
      );
    }
    async SetAnimatedAvatar(_) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: `Not logged on`,
          }),
          _
        );
      let _ = _.Init(_);
      _.Body().set_communityitemid(this.GetOwnedCommunityItemID(_));
      let _ = await _.SetAnimatedAvatar(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling PlayerService.SetAnimatedAvatar: EResult=${_.GetEResult()}`,
            ),
        _
      );
    }
    async SetMiniProfileBackground(_) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: `Not logged on`,
          }),
          _
        );
      let _ = _.Init(_);
      _.Body().set_communityitemid(this.GetOwnedCommunityItemID(_));
      let _ = await _.SetMiniProfileBackground(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling PlayerService.SetMiniProfileBackground: EResult=${_.GetEResult()}`,
            ),
        _
      );
    }
    async SetSteamDeckKeyboardSkin(_) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: `Not logged on`,
          }),
          _
        );
      let _ = _.Init(_);
      _.Body().set_communityitemid(this.GetOwnedCommunityItemID(_));
      let _ = await _.SetSteamDeckKeyboardSkin(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling PlayerService.SetSteamDeckKeyboardSkin: EResult=${_.GetEResult()}`,
            ),
        _
      );
    }
    async ActivateProfileModifier(_) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: `Not logged on`,
          }),
          _
        );
      let _ = _.Init(_);
      (_.Body().set_communityitemid(this.GetOwnedCommunityItemID(_)),
        _.Body().set_appid(_.appid),
        _.Body().set_activate(!0));
      let _ = await _.ActivateProfileModifierItem(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling QuestService.ActivateProfileModifierItem: EResult=${_.GetEResult()}`,
            ),
        _
      );
    }
    async RedeemPointsForItem(_, _, _) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: _(`#Redeem_SignIn`),
          }),
          _
        );
      let _ = _.Init(_);
      (_.Body().set_defid(_), _.Body().set_expected_points_cost(_.toString()));
      let _ = await _.RedeemPoints(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? (this.GetCommunityItemInventory(_), this.GetLoyaltyRewardsSummary())
          : ((_.strMessage = this.EResultToErrorMessage(_.GetEResult())),
            console.error(
              `Error when calling LoyaltyRewardsService.RedeemPoints: EResult=${_.GetEResult()}`,
            )),
        _
      );
    }
    async RedeemPointsForBadge(_, _) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: _(`#Redeem_SignIn`),
          }),
          _
        );
      let _ = _.Init(_);
      (_.Body().set_defid(_), _.Body().set_num_levels(_));
      let _ = await _.RedeemPointsForBadgeLevel(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? (this.GetCommunityItemInventory(this.GetCurrentSeasonalAppID()),
            this.GetLoyaltyRewardsSummary())
          : ((_.strMessage = this.EResultToErrorMessage(_.GetEResult())),
            console.error(
              `Error when calling LoyaltyRewardsService.RedeemPointsForBadgeLevel: EResult=${_.GetEResult()}`,
            )),
        _
      );
    }
    async RedeemPointsForProfileShowcase(_) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: `Not logged on`,
          }),
          _
        );
      let _ = _.Init(_);
      _.Body().set_customization_type(_);
      let _ = await _.RedeemPointsForProfileCustomization(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? this.RefreshPurchasedProfileCustomizations()
          : ((_.strMessage = this.EResultToErrorMessage(_.GetEResult())),
            console.error(
              `Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomization: EResult=${_.GetEResult()}`,
            )),
        _
      );
    }
    async RedeemPointsForProfileShowcaseUpgrade(_, _) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: _(`#Redeem_SignIn`),
          }),
          _
        );
      let _ = _.Init(_);
      _.SetBodyFields({
        customization_type: _,
        new_level: _,
      });
      let _ = await _.RedeemPointsForProfileCustomizationUpgrade(
        this.m_transport,
        _,
      );
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() == 1
          ? this.RefreshPurchasedProfileCustomizations()
          : ((_.strMessage = this.EResultToErrorMessage(_.GetEResult())),
            console.error(
              `Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomizationUpgrade: EResult=${_.GetEResult()}`,
            )),
        _
      );
    }
    async RedeemPointsForCoupon(_) {
      let _ = {
        eResult: 2,
        strMessage: ``,
      };
      if (!this.BIsLoggedIn())
        return (
          (_ = {
            eResult: 21,
            strMessage: _(`#Redeem_SignIn`),
          }),
          _
        );
      let _ = new FormData();
      (_.append(`sessionid`, _()), _.append(`itemid`, _.toString()));
      try {
        await _.default
          .post(`${_.STORE_BASE_URL}cart/ajaxredeemtokensforcartdiscount`, _)
          .then((_) => {
            let _ = _.data;
            ((_.eResult = _.eresult),
              _.eresult == 1 && _.redirect
                ? (window.location.href = _.redirect)
                : console.error(
                    `Error when calling ajaxredeemtokensforcartdiscount: ${_}`,
                  ));
          });
      } catch (_) {
        let _ = _(_);
        console.error(
          `Error when calling ajaxredeemtokensforcartdiscount: ${_.strErrorMsg}`,
          _,
        );
      }
      return _;
    }
    GetCouponPromosForUser() {
      return (
        this.m_bLoadedCouponPromosForUser ||
          ((this.m_bLoadedCouponPromosForUser = !0),
          this.LoadCouponPromosForUser().then((_) =>
            _.sort((_, _) =>
              _.max_use_count < _.max_use_count
                ? -1
                : _.max_use_count == _.max_use_count
                  ? 0
                  : 1,
            ).forEach((_) =>
              this.m_mapCouponPromos.set(_.loyalty_reward_id, _),
            ),
          )),
        this.m_mapCouponPromos
      );
    }
    async LoadCouponPromosForUser() {
      let _ = _.Init(_);
      _.Body().set_country_code(_.country_code);
      let _ = await _.GetAvailableValveDiscountPromotions(this.m_transport, _);
      return _.GetEResult() == 1
        ? _.Body()
            .promotions()
            .map((_) => _.toObject())
        : (console.error(
            `Error when calling UserAccountService.GetAvailableValveDiscountPromotions: EResult=${_.GetEResult()}`,
          ),
          []);
    }
    BCanRedeemPointsForItem(_) {
      switch (_.type) {
        case 1:
          switch (_.community_item_class) {
            case 4:
            case 3: {
              if (
                (_.community_item_data.animated &&
                  _.community_item_class == 3) ||
                this.GetSortedGamesWithRewards().includes(_.appid)
              )
                return !0;
              let _ = this.m_mapEligibleApps.get(_.appid);
              return !!(_ && _.event_app);
            }
          }
          break;
        case 5:
        case 6: {
          if (this.GetSortedGamesWithRewards().includes(_.appid)) return !0;
          let _ = this.m_mapEligibleApps.get(_.appid);
          return !!(_ && _.event_app);
        }
      }
      return !0;
    }
    BCanRedeemPointsForProfileShowcaseUpgrade(_, _) {
      return _ < this.m_rgProfileCustomizationsConfig.max_upgradable_level;
    }
    BCanRedeemPointsForProfileShowcaseSlot(_, _) {
      return _ < this.m_rgProfileCustomizationsConfig.max_slots_per_type;
    }
    GetSortedEventAppsWithRewards() {
      if (!this.m_rgEventAppsWithRewards.length) {
        let _ = this.m_bLoadedEligibleApps
          ? this.m_rgEligibleApps
          : this.LoadEligibleApps();
        Promise.all([_]).then(([_]) => {
          let _ = _.filter((_) => _.event_app);
          this.m_rgEventAppsWithRewards = _.sort((_, _) =>
            _.appid < _.appid ? 1 : -1,
          ).map((_) => _.appid);
        });
      }
      return this.m_rgEventAppsWithRewards;
    }
    GetSortedMyGamesWithRewards() {
      return this.GetSortedGamesWithRewards().filter(
        (_) => this.m_mapEligibleApps.get(_).owned,
      );
    }
    GetSortedGamesWithRewards() {
      if (!this.m_bSortedGamesWithRewards) {
        this.m_bSortedGamesWithRewards = !0;
        let _ = this.m_bLoadedEligibleApps
            ? this.m_rgEligibleApps
            : this.LoadEligibleApps(),
          _ = this.m_bLoadedRecentlyPlayed
            ? this.m_rgRecentlyPlayed
            : this.LoadRecentlyPlayedApps();
        Promise.all([_, _]).then(([_, _]) => {
          ((this.m_rgEligibleApps = _),
            (this.m_mapEligibleApps = new Map(
              this.m_rgEligibleApps.map((_) => [_.appid, _]),
            )));
          let _ = _.filter((_) => this.m_mapEligibleApps.has(_)),
            _ = _.filter((_) => _.includes(_.appid) == 0).map((_) => _.appid);
          this.m_rgSortedAppsWithRewards = _.concat(_);
        });
      }
      return this.m_rgSortedAppsWithRewards;
    }
    GetMaxProfileShowcaseSlots() {
      return this.m_rgProfileCustomizationsConfig.max_slots_per_type;
    }
    GetPurchasableProfileShowcaseSlotCost() {
      return this.m_rgProfileCustomizationsConfig.points_cost;
    }
    GetPurchasableProfileShowcaseSlots() {
      return this.m_rgProfileCustomizationsConfig
        .purchasable_customization_types;
    }
    GetUpgradableProfileShowcaseCost() {
      return this.m_rgProfileCustomizationsConfig.upgrade_points_cost;
    }
    GetUpgradableProfileShowcases() {
      return this.m_rgProfileCustomizationsConfig
        .upgradable_customization_types;
    }
    GetMaxProfileShowcaseUpgradeLevel() {
      return this.m_rgProfileCustomizationsConfig.max_upgradable_level;
    }
    async LoadRecentlyPlayedApps() {
      if (((this.m_bLoadedRecentlyPlayed = !0), !this.BIsLoggedIn())) return [];
      let _ = _.Init(_),
        _ = Math.floor(Date.now() / 1e3) - _.PerDay * 14;
      _.Body().set_min_last_played(_);
      let _ = await _.ClientGetLastPlayedTimes(this.m_transport, _);
      return _.GetEResult() == 1
        ? ((this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
            _.Body().toObject().games,
          )),
          this.m_rgRecentlyPlayed)
        : (console.error(
            `Error when calling PlayerService.ClientGetLastPlayedTimes: EResult=${_.GetEResult()}`,
          ),
          []);
    }
    ProcessRecentlyPlayedApps(_) {
      return (
        _.sort((_, _) =>
          _.last_playtime == _.last_playtime
            ? _.playtime_2weeks == _.playtime_2weeks
              ? _.playtime_forever - _.playtime_forever
              : _.playtime_2weeks - _.playtime_2weeks
            : _.last_playtime - _.last_playtime,
        ),
        _.map((_) => _.appid)
      );
    }
    async LoadEligibleApps() {
      if (((this.m_bLoadedEligibleApps = !0), !this.BIsLoggedIn())) return [];
      let _ = _.Init(_),
        _ = await _.GetEligibleApps(this.m_transport, _);
      return _.GetEResult() == 1
        ? _.Body().toObject().apps
        : (console.error(
            `Error when calling GetEligibleApps: EResult=${_.GetEResult()}`,
          ),
          []);
    }
    async RefreshEquippedProfileItems() {
      if (!this.BIsLoggedIn()) return;
      let _ = _.Init(_);
      _.SetBodyFields({
        steamid: _.steamid,
      });
      let _ = await _.GetProfileItemsEquipped(this.m_transport, _);
      _.GetEResult() == 1
        ? (this.m_equippedItems = _.Body().toObject())
        : console.error(
            `Error when calling GetProfileItemsEquipped: EResult=${_.GetEResult()}`,
          );
    }
    async RefreshPurchasedProfileCustomizations() {
      if (!this.BIsLoggedIn()) return;
      let _ = _.Init(_);
      _.SetBodyFields({
        steamid: _.steamid,
      });
      let _ = await _.GetPurchasedAndUpgradedProfileCustomizations(
        this.m_transport,
        _,
      );
      if (_.GetEResult() == 1) {
        let _ = _.Body().toObject();
        ((this.m_rgPurchasedCustomizations = _.purchased_customizations),
          (this.m_rgUpgradedCustomizations = _.upgraded_customizations));
      } else
        console.error(
          `Error when calling GetPurchasedAndUpgradedProfileCustomizations: EResult=${_.GetEResult()}`,
        );
    }
    async GetEquippedProfileItems(_) {
      let _ = {
          eResult: 2,
        },
        _ = _.Init(_);
      (_.Body().set_steamid(_), _.Body().set_language(_.LANGUAGE));
      let _ = await _.GetEquippedProfileItems(this.m_transport, _);
      return (
        (_.eResult = _.GetEResult()),
        _.GetEResult() != 1 &&
          console.error(
            `Error when calling LoyaltyRewardsService.GetEquippedProfileItems: EResult=${_.GetEResult()}`,
          ),
        {
          ..._.Body().toObject(),
          ..._,
        }
      );
    }
    GetPersonaState() {
      return this.m_persona;
    }
    async RetrievePersonaState() {
      let _ = {
        access_token: this.m_config.webapi_token,
        steamids: _.steamid,
      };
      return _.default
        .get(`${_.WEBAPI_BASE_URL}ISteamUserOAuth/GetUserSummaries/v2/`, {
          params: _,
        })
        .then((_) => {
          if (_ && _.data && _.data.players && _.data.players.length != 0) {
            let _ = _.data.players[0];
            ((this.m_persona.m_strPlayerName = _.personaname),
              (this.m_persona.m_ePersonaState = _.personastate),
              (this.m_persona.m_strAvatarHash = _.avatarhash));
          }
        });
    }
    GetEquippedItems() {
      return this.m_equippedItems;
    }
    GetPurchasedProfileCustomizations() {
      return this.m_rgPurchasedCustomizations;
    }
    GetUpgradedProfileCustomizations() {
      return this.m_rgUpgradedCustomizations;
    }
    GetRewardItem(_) {
      return (
        !this.m_mapLoyaltyRewardDefs.has(_) &&
          !this.m_inflightRewardItemRequests[_] &&
          ((this.m_inflightRewardItemRequests[_] = !0),
          this.LoadRewardItem(_).then((_) => {
            (_.defid === _ && this.m_mapLoyaltyRewardDefs.set(_, _),
              delete this.m_inflightRewardItemRequests[_]);
          })),
        this.m_mapLoyaltyRewardDefs.get(_)
      );
    }
    GetAppHeroImage(_) {
      let _ = this.m_mapEligibleApps.get(_);
      return _ && _.hero_carousel_image
        ? {
            img_url: `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.hero_carousel_image}`,
            is_custom: !0,
          }
        : {
            img_url: this.m_HeroImageFallbackLoader.Get(_) || _,
            is_custom: !1,
          };
    }
    async LoadRewardItem(_) {
      let _ = new _();
      (_.set_language(_.LANGUAGE), _.set_count(1), _.set_definitionids([_]));
      let _ = await this.m_batchedRewardItemLoader.Load(_);
      return _.eresult == 1
        ? _.response.count > 0
          ? _.response.definitions[0]
          : null
        : (console.error(
            `Error when loading reward definitions: EResult=${_.eresult}`,
          ),
          null);
    }
    m_mapPages = _.map(
      {},
      {
        deep: !1,
      },
    );
    GetPageDescriptor(_) {
      return (
        this.m_mapPages.has(_(_)) ||
          this.m_mapPages.set(_(_), this.BuildPage(_)),
        this.m_mapPages.get(_(_))
      );
    }
    BuildPage(_) {
      switch (_.type) {
        case `app`:
          return new _(
            _.appid,
            _.appid === this.GetCurrentSeasonalAppID()
              ? _(`#HeroCluster_Premier_Collection_Subtitle`)
              : void 0,
          );
        case `event`:
          return new _(
            _.eventname,
            _.rgIncludedAppIDs,
            _.rgPriorityAppIDs,
            _.cAppClusters,
          );
        case `custom`:
          return (console.error(`Cannot dynamically build page type`), null);
        default:
          return (console.error(`Unknown page type`), null);
      }
    }
    m_mapClusters = _.map(
      {},
      {
        deep: !1,
      },
    );
    GetClusterDescriptor(_) {
      return this.m_mapClusters.get(_);
    }
    HydrateCustomPages() {
      let _ = (_, _, _) => {
          let _ = new _(_, _, {
            grouping: 2,
            maxToReturn: 0,
            ..._,
          });
          return (
            this.m_mapClusters.has(_._) || this.m_mapClusters.set(_._, _), _._
          );
        },
        _ = (_, _, _) => {
          let _ = new _(
            _,
            _,
            _(
              {
                grouping: 2,
              },
              _,
            ),
          );
          return (
            this.m_mapClusters.has(_._) || this.m_mapClusters.set(_._, _), _
          );
        },
        _ = (_, _, _, _) => {
          let _ = _(_, _ || ``, _);
          return {
            type: 2,
            cluster: _._,
            get title() {
              return _(`#HeroCluster_AppTitle`, _.title);
            },
            get strImage() {
              return _ || _.Get().GetAppHeroImage(_).img_url;
            },
            get bFullBleedImage() {
              return !!_;
            },
            linkedPage: {
              type: `app`,
              appid: _,
            },
            theme: {
              colors: {
                bodygradient: `linear-gradient(147.3deg, rgba(211, 193, 144, 0) 42.88%, rgba(223, 200, 141, 0.32) 113.95%)`,
                background: `rgba(117, 98, 80, 0.25)`,
              },
            },
          };
        },
        _ = (_) => this.m_mapPages.set(_(_.params), _),
        _ = _(
          _(
            `#RewardCluster_Popular_Title`,
            _(`#RewardCluster_Popular_RewardItems`),
          ),
          _(`#RewardCluster_Popular_Subtitle`),
        ),
        _ = _(_(13, !0), _(`#RewardCluster_MiniProfileBackgrounds_Subtitle`), {
          itemclass: [13],
        }),
        _ = _(
          _(`#ShopPageTitle_Avatar`),
          _(`#RewardCluster_AvatarItems_Subtitle`),
          {
            itemclass: [15, 14],
          },
        ),
        _ = _(_(3, !0), _(`#RewardCluster_Backgrounds_Subtitle`), {
          itemclass: [3],
        }),
        _ = _(
          _(`#RewardCluster_Popular_Title`, _(`#ShopNav_ChatEffectsLink`)),
          _(`#RewardCluster_ChatEffect_Subtitle`),
          {
            itemclass: [12],
          },
        ),
        _ = _(
          _(`#RewardCluster_Popular_Title`, _(`#ShopNav_StickersLink`)),
          _(`#RewardCluster_Popular_Subtitle`),
          {
            itemclass: [11],
          },
        ),
        _ = _(
          _(`#RewardCluster_Popular_Title`, _(`#ShopNav_EmoticonsLink`)),
          _(`#RewardCluster_Popular_Subtitle`),
          {
            itemclass: [4],
          },
        ),
        _ = _(
          _(`#RewardCluster_All_Title`, _(15, !0)),
          _(`#RewardCluster_AnimatedAvatar_Subtitle`),
          {
            itemclass: [15],
          },
        ),
        _ = _(
          _(`#RewardCluster_All_Title`, _(14, !0)),
          _(`#RewardCluster_AvatarFrames_Subtitle`),
          {
            itemclass: [14],
          },
        ),
        _ = _(
          _(`#RewardCluster_All_Title`, _(16, !0)),
          _(`#RewardCluster_SteamDeckKeyboardSkins_Subtitle`),
          {
            itemclass: [16],
          },
        ),
        _ = _(
          _(`#RewardCluster_All_Title`, _(17, !0)),
          _(`#RewardCluster_SteamDeckStartupMovies_Subtitle`),
          {
            itemclass: [17],
          },
        ),
        _ = _(_(`#RewardCluster_FromGames`, _(17, !0)), void 0, {
          itemclass: [17],
          excludedAppIDs: [_],
        }),
        _ = _(
          _(`#RewardCluster_All_Title`, _(`#RewardItemType_Bundle_plural`)),
          ``,
          {
            rewardtype: [5, 6],
          },
        ),
        _ = _(
          _(
            `#RewardCluster_All_Title`,
            _(`#RewardItemType_ProfileBundle_plural`),
          ),
          ``,
          {
            itemclass: [8],
            queryFilter: [3],
            grouping: 1,
          },
        ),
        _ = _(
          _(
            `#RewardCluster_Popular_Title`,
            _(`#RewardItemType_ProfileBundle_plural`),
          ),
          ``,
          {
            itemclass: [8],
            queryFilter: [3],
            grouping: 2,
          },
        ),
        _ = _(
          _(
            `#RewardCluster_All_Title`,
            _(`#RewardItemType_ArtistProfile_plural`),
          ),
          ``,
          {
            itemclass: [8],
            queryFilter: [3],
            categoryTag: [`artist_profile`],
          },
        );
      _(_(`#RewardCluster_TabletopFest2021Profiles_Title`), void 0, {
        itemclass: [8],
        queryFilter: [3],
        categoryTag: [`tabletop_fest_2021`],
      });
      let _ = _(
          _(`#RewardCluster_TiledProfileBackgrounds_Title`),
          _(`#RewardCluster_BackgroundsTiled_Subtitle`),
          {
            itemclass: [3],
            queryFilter: [4],
          },
        ),
        _ = [
          {
            cluster: _,
            type: 1,
          },
          {
            cluster: _,
            type: 1,
            linkedPage: {
              type: `custom`,
              pageid: `steamdeck`,
              clusterindex: 1,
            },
          },
          {
            cluster: _,
            type: 2,
            strImage: _,
            bFullBleedImage: !0,
            linkedPage: {
              type: `custom`,
              pageid: `profilebundles`,
            },
          },
          {
            cluster: _,
            type: 1,
            linkedPage: null,
            bHideHiddenItemCount: !0,
          },
          {
            cluster: _,
            type: 1,
            linkedPage: {
              type: `custom`,
              pageid: `stickers`,
            },
          },
          {
            cluster: _,
            type: 1,
          },
          {
            cluster: _,
            type: 1,
          },
          {
            cluster: _,
            type: 1,
            linkedPage: {
              type: `custom`,
              pageid: `backgrounds`,
            },
          },
          {
            cluster: _,
            type: 1,
          },
          {
            cluster: _,
            type: 1,
            linkedPage: {
              type: `custom`,
              pageid: `emoticons`,
            },
          },
        ],
        _ = [];
      (_.push(_(5308810)), _.push(_(4761370)));
      let _ = [],
        _ = [_, _];
      for (let _ = 0; _ < Math.max(_[0].length, _[1].length); _++)
        (_ < _[0].length &&
          _.push({
            type: `clusterview`,
            view: _[0][_],
          }),
          _ < _[1].length &&
            _.push({
              type: `clusterview`,
              view: _[1][_],
            }));
      (_(new _(_, _)),
        _(
          new _(
            `stickers`,
            [
              {
                cluster: _,
                type: 0,
              },
            ],
            _(`#ShopPageTitle_Stickers`),
            void 0,
            _(`#SearchPlaceholder_Stickers`),
          ),
        ),
        _(
          new _(
            `emoticons`,
            [
              {
                cluster: _,
                type: 0,
              },
            ],
            _(`#ShopPageTitle_Emoticons`),
            void 0,
            _(`#SearchPlaceholder_Emoticons`),
          ),
        ),
        _(
          new _(
            `chateffects`,
            [
              {
                cluster: _,
                type: 0,
              },
            ],
            _(12, !0),
            void 0,
            _(`#SearchPlaceholder_ChatEffects`),
          ),
        ));
      let _ = _(
          _(`#RewardCluster_AnimatedProfileBackgrounds_Title`),
          _(`#RewardCluster_Backgrounds_Subtitle`),
          {
            itemclass: [3],
            queryFilter: [1],
          },
        ),
        _ = _(
          _(`#RewardCluster_AnimatedMiniProfileBackgrounds_Title`),
          _(`#RewardCluster_MiniProfileBackgrounds_Subtitle`),
          {
            itemclass: [13],
            queryFilter: [1],
          },
        ),
        _ = _(
          _(`#RewardCluster_StillProfileBackgrounds_Title`),
          _(`#RewardCluster_Backgrounds_Subtitle`),
          {
            itemclass: [3],
            queryFilter: [2],
          },
        ),
        _ = _(
          _(`#RewardCluster_StillMiniProfileBackgrounds_Title`),
          _(`#RewardCluster_MiniProfileBackgrounds_Subtitle`),
          {
            itemclass: [13],
            queryFilter: [2],
          },
        );
      (_(
        new _(
          `backgrounds`,
          [
            {
              cluster: _,
              type: 1,
            },
            {
              cluster: _,
              type: 1,
            },
            {
              cluster: _,
              type: 1,
            },
            {
              cluster: _,
              type: 1,
            },
            {
              cluster: _,
              type: 1,
            },
          ],
          _(`#ShopPageTitle_Backgrounds`),
          void 0,
          _(`#SearchPlaceholder_Backgrounds`),
        ),
      ),
        _(
          new _(
            `avatar`,
            [
              {
                cluster: _,
                type: 1,
              },
              {
                cluster: _,
                type: 1,
              },
            ],
            _(`#ShopPageTitle_Avatar`),
            void 0,
            _(`#SearchPlaceholder_Avatar`),
          ),
        ),
        _(
          new _(
            `steamdeck`,
            [
              {
                cluster: _,
                type: 1,
              },
              {
                cluster: _,
                type: 1,
              },
            ],
            _(`#ShopPageTitle_SteamDeckItems`),
            void 0,
            _(`#SearchPlaceholder_SteamDeckItems`),
          ),
        ),
        _(
          new _(
            `keyboard`,
            [
              {
                cluster: _,
                type: 0,
              },
            ],
            _(`#ShopPageTitle_SteamDeckKeyboardSkin`),
            void 0,
            _(`#SearchPlaceholder_SteamDeckKeyboardSkin`),
          ),
        ),
        _(
          new _(
            `startupmovie`,
            [
              {
                cluster: _,
                type: 1,
              },
              {
                cluster: _,
                type: 0,
              },
            ],
            _(`#ShopPageTitle_SteamDeckStartupMovie`),
            void 0,
            _(`#SearchPlaceholder_SteamDeckStartupMovie`),
          ),
        ),
        _(
          new _(
            `itembundles`,
            [
              {
                cluster: _,
                type: 0,
              },
            ],
            _(`#ShopPageTitle_ItemBundles`),
            _(`#ShopPageTitle_ItemBundles_Subtitle`),
            _(`#SearchPlaceholder_ItemBundles`),
          ),
        ),
        _(
          new _(
            `profilebundles`,
            [
              {
                cluster: _,
                type: 1,
              },
              {
                cluster: _,
                type: 1,
              },
              {
                cluster: _,
                type: 0,
              },
            ],
            _(`#ShopPageTitle_ProfileBundles`),
            _(`#ShopPageTitle_ProfileBundles_Subtitle`),
            _(`#SearchPlaceholder_ProfileBundles`),
          ),
        ),
        _(
          new _(
            `artistprofiles`,
            [
              {
                cluster: _,
                type: 0,
                bHomogeneous: !0,
              },
            ],
            _(`#ShopPageTitle_ArtistProfiles`),
            _(`#ShopPageTitle_ArtistProfiles_Subtitle`),
            _(`#SearchPlaceholder_ArtistProfiles`),
          ),
        ),
        this.BIsLoggedIn() &&
          _(() => !!_.Get().GetSortedMyGamesWithRewards().length).then(() => {
            let _ = new _(_(`#HeroCluster_YourGamesTitle`), void 0, {
              get appid() {
                return _.Get().GetSortedMyGamesWithRewards().slice(0, 10);
              },
              grouping: 2,
            });
            this.m_mapClusters.set(_._, _);
            let _ = {
              type: 2,
              linkedPage: {
                type: `custom`,
                pageid: `games`,
              },
              cluster: _._,
              strImage: _,
              bFullBleedImage: !0,
            };
            _.push({
              type: `clusterview`,
              view: _,
            });
            let _ = _.Get().GetSortedGamesWithRewards(),
              _ = (_) => {
                let _ = this.m_mapClusters.get(_);
                return _ && _ instanceof _ ? _.appid : null;
              },
              _ = 0;
            for (let _ of _) {
              if (
                _.findIndex(
                  (_) => _.type === `clusterview` && _(_.view.cluster) === _,
                ) != -1
              )
                continue;
              let _ = _(_),
                _ = _.length + 3;
              if (
                (_.splice(_ + _ * _, 0, {
                  type: `clusterview`,
                  view: _,
                }),
                (_ += 1),
                _ >= 3)
              )
                break;
            }
            this.m_mapPages.set(
              _({
                type: `custom`,
                pageid: _,
              }),
              new _(_, _),
            );
          }));
    }
  };
(_([_.ref], _.prototype, `m_lPointsAvailable`, void 0),
  _([_], _.prototype, `m_mapCouponPromos`, void 0),
  _([_], _.prototype, `m_nAppIDFiltersInUseCount`, void 0),
  _([_], _.prototype, `m_mapAppIDFilters`, void 0),
  _([_], _.prototype, `m_strAppFilterText`, void 0),
  _([_], _.prototype, `m_strSearchTerm`, void 0),
  _([_], _.prototype, `m_strSearchPlaceholder`, void 0),
  _([_], _.prototype, `m_mapCouponDefinitons`, void 0),
  _([_], _.prototype, `m_mapLoyaltyRewardDefs`, void 0),
  _([_], _.prototype, `m_mapOwnedCommunityItems`, void 0),
  _([_], _.prototype, `m_mapAppRewards`, void 0),
  _([_], _.prototype, `m_seasonalBadgeDefinition`, void 0),
  _([_], _.prototype, `m_goldenProfileDefinition`, void 0),
  _([_], _.prototype, `m_goldenProfileConfigs`, void 0),
  _([_], _.prototype, `m_rgSortedAppsWithRewards`, void 0),
  _([_], _.prototype, `m_rgEventAppsWithRewards`, void 0),
  _([_], _.prototype, `m_rgEligibleApps`, void 0),
  _([_], _.prototype, `m_mapEligibleApps`, void 0),
  _([_], _.prototype, `m_rgProfileCustomizationsConfig`, void 0),
  _([_], _.prototype, `m_persona`, void 0),
  _([_], _.prototype, `m_equippedItems`, void 0),
  _([_], _.prototype, `m_rgPurchasedCustomizations`, void 0),
  _([_], _.prototype, `m_rgUpgradedCustomizations`, void 0),
  _([_], _.prototype, `m_unAwardPointsTransferred`, void 0),
  _([_], _.prototype, `ShowLoginDialog`, null));
function _(_) {
  let _ = _.LoyaltyStore();
  switch (_.type) {
    case `app`:
      return `${_}/app/${_.appid}${typeof _.clusterindex == `number` ? `/cluster/${_.clusterindex}` : ``}`;
    case `custom`:
      return `${_}/c/${_.pageid}${typeof _.clusterindex == `number` ? `/cluster/${_.clusterindex}` : ``}`;
    case `event`:
      return `${_}/event/${_.eventname}`;
    default:
      return (console.error(`Unknown page type ${_.type}`), _);
  }
}
function _(_) {
  return btoa(JSON.stringify(_));
}
function _(_, _) {
  return `${_.join(`_`)}__${_(_)}`;
}
function _(_) {
  if (!_) return ``;
  let {
      appid: _,
      itemclass: _,
      rewardtype: _,
      grouping: _,
      queryFilter: _,
      categoryTag: _,
      excludedAppIDs: _,
      excludedContentDescriptors: _,
      searchLanguage: _,
      searchTerm: _,
    } = _,
    _ = _(_);
  return [
    _ ? [..._].sort().join(`_`) : ``,
    _ ? _.join(`_`) : ``,
    _ ? _.join(`_`) : ``,
    _.sort,
    _.sort_descending ? `1` : `0`,
    _ ? _.join(`_`) : ``,
    _ ? _.join(`_`) : ``,
    _ ? _.join(`_`) : ``,
    _ ? _.join(`_`) : ``,
    _ || ``,
    _ ? encodeURI(_.substring(0, 200)) : ``,
  ].join(`__`);
}
function _(_) {
  let _ = {
    sort: 1,
    sort_descending: !0,
  };
  switch (_) {
    case 1:
      ((_.sort = 1), (_.sort_descending = !0));
      break;
    case 2:
      ((_.sort = 2), (_.sort_descending = !1));
  }
  return _;
}
var _ = class {
  m_strId;
  m_filter;
  m_strTitle;
  m_strSubtitle;
  constructor(_, _, _ = {}) {
    ((this.m_filter = _),
      (this.m_strTitle = _),
      (this.m_strSubtitle = _),
      (this.m_strId = _([], _)));
  }
  get id() {
    return this.m_strId;
  }
  get title() {
    return this.m_strTitle;
  }
  get subtitle() {
    return this.m_strSubtitle;
  }
  GetRewards(_, _, _) {
    let _ = _(this.m_filter, _);
    return _.Get().QueryRewardDefinitions(_, _, _);
  }
};
_([_], _.prototype, `GetRewards`, null);
var _ = class {
  m_strId;
  m_appid;
  m_strSubtitle;
  m_additionalFilter;
  constructor(_, _, _) {
    ((this.m_appid = _),
      (this.m_strSubtitle = _ || ``),
      (this.m_additionalFilter = _ || {}),
      _.GetAppInfo(this.m_appid),
      (this.m_strId = _([this.m_appid], this.m_additionalFilter)));
  }
  get id() {
    return this.m_strId;
  }
  get appid() {
    return this.m_appid;
  }
  get title() {
    return _.GetAppInfo(this.m_appid).name;
  }
  get subtitle() {
    return this.m_strSubtitle;
  }
  GetRewards(_, _, _) {
    let _ = _(
      {
        appid: [this.m_appid],
      },
      this.m_additionalFilter,
      _,
    );
    return _.Get().QueryRewardDefinitions(_, _, _);
  }
};
_([_], _.prototype, `GetRewards`, null);
var _ = class {
    m_strEventName;
    m_rgIncludedAppIDs;
    m_rgPriorityAppIDs;
    m_cAppClusters;
    constructor(_, _, _, _) {
      ((this.m_strEventName = _),
        (this.m_rgIncludedAppIDs = _),
        (this.m_rgPriorityAppIDs = _),
        (this.m_cAppClusters = _));
    }
    get params() {
      return {
        type: `event`,
        eventname: this.m_strEventName,
      };
    }
    get title() {
      return this.m_strEventName;
    }
    get items() {
      let _ = [8, 15, 14, 13, 3, 11, 4, 16, 17],
        _ = [],
        _ = {
          type: `clusterview`,
          view: {
            type: 1,
            linkedPage: null,
            cluster: {
              _: _({
                eventname: this.m_strEventName,
                type: `event`,
              }),
              title: _(`#RewardCluster_FeaturedItems`),
              subtitle: ``,
              GetRewards: (_, _, _) =>
                _.Get().QueryRewardDefinitions(
                  _(
                    {
                      grouping: 2,
                      categoryTag: [this.m_strEventName],
                    },
                    _,
                  ),
                  _,
                  _,
                ),
            },
          },
        };
      _.push(_);
      let _ = this.m_rgPriorityAppIDs?.concat(this.m_rgIncludedAppIDs),
        _ = _.map((_) => ({
          type: `clusterview`,
          view: {
            type: 1,
            linkedPage: null,
            cluster: {
              _: _({
                eventname: this.m_strEventName,
                type: `event`,
                itemclass: _,
                rgIncludedAppIDs: this.m_rgIncludedAppIDs,
                rgPriorityAppIDs: this.m_rgPriorityAppIDs,
              }),
              title: _(_, !0),
              subtitle: ``,
              GetRewards: (_, _, _) =>
                _.Get().QueryRewardDefinitions(
                  _(
                    {
                      grouping: 2,
                      itemclass: [_],
                      appid: _,
                    },
                    _,
                  ),
                  _,
                  _,
                ),
            },
          },
        })),
        _ = _?.slice(0, this.m_cAppClusters).map((_) => ({
          type: `clusterview`,
          view: {
            type: 1,
            linkedPage: {
              type: `app`,
              appid: _,
            },
            cluster: new _(_, ``),
          },
        }));
      return _.concat(_, _);
    }
  },
  _ = class {
    m_appid;
    m_strSubtitle;
    constructor(_, _ = ``) {
      ((this.m_appid = _),
        (this.m_strSubtitle = _),
        _.GetAppInfo(this.m_appid));
    }
    get params() {
      return {
        type: `app`,
        appid: this.m_appid,
      };
    }
    get title() {
      return _.GetAppInfo(this.m_appid).name;
    }
    get subtitle() {
      return this.m_strSubtitle;
    }
    get items() {
      let _ = [8, 15, 14, 13, 3, 11, 4, 16, 17],
        _ = [];
      {
        let _ = {
          type: `clusterview`,
          view: {
            type: 1,
            cluster: {
              _: _([this.m_appid], {
                rewardtype: [5],
              }),
              title: _(`#RewardItemType_Bundle_plural`),
              subtitle: ``,
              GetRewards: (_, _, _) =>
                _.Get().QueryRewardDefinitions(
                  _(
                    {
                      appid: [this.m_appid],
                      rewardtype: [5, 6],
                    },
                    _,
                  ),
                  _,
                  _,
                ),
            },
          },
        };
        _.push(_);
      }
      let _ = _.map((_) => ({
        type: `clusterview`,
        view: {
          type: 1,
          cluster: {
            _: _([this.m_appid], {
              itemclass: [_],
            }),
            title: _(_, !0),
            subtitle: ``,
            GetRewards: (_, _, _) =>
              _.Get().QueryRewardDefinitions(
                _(
                  {
                    appid: [this.m_appid],
                    itemclass: [_],
                  },
                  _,
                ),
                _,
                _,
              ),
          },
        },
      }));
      return ((_ = _.concat(_)), _);
    }
  },
  _ = class {
    m_strTitle;
    m_strSubtitle;
    m_strSearchPlaceholder;
    m_strHeaderImage;
    m_rgPageItems;
    m_filter;
    m_pageid;
    constructor(_, _, _, _, _, _) {
      ((this.m_pageid = _),
        (this.m_strTitle = _),
        (this.m_strSubtitle = _),
        (this.m_strSearchPlaceholder = _),
        (this.m_strHeaderImage = _),
        (this.m_rgPageItems = _));
    }
    get params() {
      return {
        type: `custom`,
        pageid: this.m_pageid,
      };
    }
    get title() {
      return this.m_strTitle;
    }
    get subtitle() {
      return this.m_strSubtitle;
    }
    get searchPlaceholder() {
      return this.m_strSearchPlaceholder;
    }
    get headerImage() {
      return this.m_strHeaderImage;
    }
    get items() {
      return this.m_rgPageItems.map((_) => _(_));
    }
  };
function _(_) {
  switch (_.type) {
    case `banner`:
      return _;
    case `clusterview`:
      return {
        type: `clusterview`,
        view: {
          ..._.view,
          cluster: _.Get().GetClusterDescriptor(_.view.cluster),
        },
      };
  }
}
var _ = class extends _ {
    constructor(_, _, _, _, _, _) {
      super(
        _,
        _.map((_) => ({
          type: `clusterview`,
          view: _,
        })),
        _,
        _,
        _,
        _,
      );
    }
  },
  _ = class {
    m_fnJoinRequests;
    m_fnSplitResponse;
    m_fnMakeRequest;
    m_rgRequestParts = [];
    m_rootPromise;
    constructor(_, _, _) {
      ((this.m_fnMakeRequest = _),
        (this.m_fnJoinRequests = _),
        (this.m_fnSplitResponse = _));
    }
    Load(_) {
      this.m_rootPromise || this.QueueBatch();
      let _ = this.m_rgRequestParts.push(_);
      return this.m_rootPromise.then((_) => _[_ - 1]);
    }
    QueueBatch() {
      let _ = this.m_rgRequestParts;
      this.m_rootPromise = Promise.resolve()
        .then(() => {
          let _ = this.m_fnMakeRequest(this.m_fnJoinRequests(_));
          return (this.Reset(), _);
        })
        .then((_) => this.m_fnSplitResponse(_, _));
    }
    Reset() {
      ((this.m_rootPromise = void 0), (this.m_rgRequestParts = []));
    }
  };
function _(_, ..._) {
  return !_ || !_.length
    ? _
    : [_, ..._].reduce((_, _) => {
        if (!_) return _;
        let _ = {
          ..._,
        };
        return (
          _.appid &&
            (_.appid =
              !_.appid || !_.appid.length
                ? _.appid
                : _.appid.filter((_) => _.appid.includes(_))),
          typeof _.grouping == `number` &&
            typeof _.grouping != `number` &&
            (_.grouping = _.grouping),
          _.itemclass &&
            (_.itemclass =
              !_.itemclass || !_.itemclass.length
                ? _.itemclass
                : _.itemclass.filter((_) => _.itemclass.includes(_))),
          _.queryFilter &&
            (_.queryFilter
              ? _.queryFilter.push(
                  ..._.queryFilter.filter((_) => _.queryFilter.includes(_)),
                )
              : (_.queryFilter = _.queryFilter)),
          _.categoryTag &&
            (_.categoryTag
              ? _.categoryTag.push(
                  ..._.categoryTag.filter((_) => _.categoryTag.includes(_)),
                )
              : (_.categoryTag = _.categoryTag)),
          _.excludedContentDescriptors &&
            (_.excludedContentDescriptors
              ? _.excludedContentDescriptors.push(
                  ..._.excludedContentDescriptors.filter((_) =>
                    _.excludedContentDescriptors.includes(_),
                  ),
                )
              : (_.excludedContentDescriptors = _.excludedContentDescriptors)),
          _.excludedTagIDs &&
            (_.excludedTagIDs
              ? _.excludedTagIDs.push(
                  ..._.excludedTagIDs.filter((_) =>
                    _.excludedTagIDs.includes(_),
                  ),
                )
              : (_.excludedTagIDs = _.excludedTagIDs)),
          _.searchLanguage &&
            (_.searchLanguage = (_.searchLanguage, _.searchLanguage)),
          _.searchTerm &&
            (_.searchTerm = _.searchTerm
              ? _.searchTerm + ` ` + _.searchTerm
              : _.searchTerm),
          _
        );
      });
}
var _ = class {
  m_fnRequest;
  m_fnBuildRequestKey;
  m_mapCache;
  m_mapInflightRequests;
  constructor(_, _) {
    ((this.m_fnRequest = _), (this.m_fnBuildRequestKey = _), this.Reset());
  }
  Reset() {
    ((this.m_mapCache = _.map(
      {},
      {
        deep: !1,
      },
    )),
      (this.m_mapInflightRequests = _.map()));
  }
  Get(..._) {
    let _ = this.m_fnBuildRequestKey(..._),
      _ = this.m_mapCache,
      _ = this.m_mapInflightRequests;
    if (_.has(_)) return _.get(_);
    _.get(_) ||
      (_.set(_, !0),
      this.m_fnRequest(..._).then((_) => {
        (_.set(_, _), _.delete(_));
      }));
  }
  BLoading(..._) {
    let _ = this.m_fnBuildRequestKey(..._);
    return !!this.m_mapInflightRequests.get(_);
  }
};
function _(_) {
  return !1;
}
function _(_) {
  if (_.type === 5 || _.type === 6)
    return !_.bundle_defids || _.bundle_defids.length == 0
      ? (console.error(`Bundle contains no items for def ${_.defid}`), !0)
      : !_.bundle_discount &&
          (console.error(`Bundle has no discount for def ${_.defid}`), !0);
  let _ = _.community_item_data;
  if (!_) return !0;
  if (_.type === 1) {
    let _ = !1;
    switch (_.community_item_class) {
      case 11:
      case 14:
      case 15:
        _ = !_.item_image_small;
        break;
      case 4:
      case 16:
        _ = !_.item_image_large;
        break;
      case 3:
        _ = _.animated
          ? !_.item_image_large &&
            !_.item_movie_mp4 &&
            !_.item_movie_mp4_small &&
            !_.item_movie_webm &&
            !_.item_movie_webm_small
          : !_.item_image_large;
        break;
      case 13:
        _ =
          !_.item_image_large &&
          !_.item_movie_mp4 &&
          !_.item_movie_mp4_small &&
          !_.item_movie_webm &&
          !_.item_movie_webm_small;
        break;
      case 17:
        _ =
          !_.item_image_large && !_.item_movie_webm && !_.item_movie_webm_small;
    }
    if (_)
      return (
        console.error(`Missing expected assets for reward ${_.defid}`), !0
      );
  }
  return !1;
}
var _ = class _ {
  constructor() {
    _(this);
  }
  m_bCanClaimFreeItem = !1;
  m_claimedFreeItemDef = void 0;
  m_rtNextClaimTime = void 0;
  m_claimTimer;
  static s_SaleItemRewardsStore;
  static Get() {
    return (
      (this.s_SaleItemRewardsStore ||= new _()), this.s_SaleItemRewardsStore
    );
  }
  InitFreeItemReward(_) {
    ((this.m_bCanClaimFreeItem = _.can_claim),
      (this.m_claimedFreeItemDef = _.reward_item),
      (this.m_rtNextClaimTime = _.next_claim_time),
      this.SetClaimTimer());
  }
  BCanClaimFreeSaleReward() {
    return !_.Get().BIsLoggedIn() || this.m_bCanClaimFreeItem;
  }
  GetCurrentSaleRewardAppID() {
    return _;
  }
  GetClaimedSaleRewardItemDef() {
    return this.m_claimedFreeItemDef;
  }
  async LoadCanClaimFreeSticker() {
    if (!_.Get().BIsLoggedIn()) return;
    let _ = _.Init(_),
      _ = await _.CanClaimItem(_.Get().GetServiceTransport(), _);
    _.GetEResult() == 1
      ? this.InitFreeItemReward(_.Body().toObject())
      : console.error(
          "Error when calling SaleItemRewardsService.CanClaimItem: EResult=${msgResponse.GetEResult()}",
        );
  }
  async ClaimFreeSaleItem() {
    let _ = {
      eResult: 2,
      strMessage: ``,
    };
    if (!_.Get().BIsLoggedIn())
      return (
        (_ = {
          eResult: 21,
          strMessage: _(`#Redeem_SignIn`),
        }),
        _
      );
    let _ = _.Init(_),
      _ = await _.ClaimItem(_.Get().GetServiceTransport(), _);
    return (
      (_.eResult = _.GetEResult()),
      _.GetEResult() == 1
        ? ((this.m_claimedFreeItemDef = _.Body().reward_item().toObject()),
          _.Get().GetCommunityItemInventory(this.m_claimedFreeItemDef.appid),
          (this.m_bCanClaimFreeItem = !1),
          (this.m_rtNextClaimTime = _.Body().next_claim_time()),
          this.SetClaimTimer())
        : (_.GetEResult() == 10 &&
            (_.strMessage = _(`#SummerSale_Redeem_Busy`)),
          console.error(
            `Error when calling SaleItemRewardsService.ClaimItem: EResult=${_.GetEResult()}`,
          )),
      _
    );
  }
  GetNextClaimTime() {
    return this.m_rtNextClaimTime
      ? new Date(this.m_rtNextClaimTime * 1e3)
      : null;
  }
  SetClaimTimer() {
    if (this.m_claimTimer || !this.m_rtNextClaimTime) return;
    let _ = Date.now(),
      _ = new Date(this.m_rtNextClaimTime * 1e3),
      _ = Math.max(0, _.getTime() - _);
    this.m_claimTimer = window.setTimeout(
      () => {
        ((this.m_claimTimer = void 0),
          Date.now() > _.getTime()
            ? (this.m_bCanClaimFreeItem = !0)
            : this.SetClaimTimer());
      },
      _ > 3e5 ? _ / 2 : _,
    );
  }
};
(_([_], _.prototype, `m_bCanClaimFreeItem`, void 0),
  _([_], _.prototype, `m_claimedFreeItemDef`, void 0),
  _([_], _.prototype, `m_rtNextClaimTime`, void 0));
var _ = `J85FhUM6fIE-`,
  _ = `YMXr5A2nNVc-`,
  _ = `nsKErtlPaQc-`,
  _ = `Kdj8CPa2rUY-`,
  _ = _();
function _(_) {
  let { size: _ } = _;
  return (0, _.jsx)(_, {
    size: _,
  });
}
var _ = `none`;
function _(_, _, _ = {}) {
  let {
      cInitialItems: _,
      cOverscanCount: _,
      fnRenderItemSkeleton: _,
      ..._
    } = _,
    _ = _ || 10,
    _ = _ || 10,
    [_, _] = (0, _.useState)(_ + _),
    _ = _(0, _).map((_) => _(_)),
    _ = _.length === 0;
  if (_) for (let _ = 0; _ < _; _++) _.push(_());
  let _ = _(_, _, _);
  return {
    ..._,
    fnNext: () => {
      (_.iPosition + _.rgVisibleItems.length > _ - _ &&
        _(_ + _.rgVisibleItems.length),
        _.fnNext());
    },
  };
}
function _(_, _ = {}, _ = !1) {
  let _ = _.length,
    [_, _] = (0, _.useState)(0),
    [_, _] = _(),
    [_, _] = _(),
    _ = _(`padding-right`, _),
    _ = _().spacing[_],
    _ = 1;
  _.width && _.width !== void 0 && (_ = Math.floor((_.width + _) / _.width));
  let _ = !_ && _ + _ < _,
    _ = () => _ && _(_ + _),
    _ = _ > 0,
    _ = () => _ && _(Math.max(0, _ - _)),
    _ = _,
    _ = _ + _;
  return {
    containerRef: _,
    rgVisibleItems: _.slice(_, _).map((_, _) =>
      (0, _.jsx)(
        `div`,
        {
          ref: _ === 0 ? _ : void 0,
          className: _(_ === 0 || _ < _ - 1 ? _ : void 0, _.itemClassName),
          children: _,
        },
        _ + _,
      ),
    ),
    bAllowNext: _,
    bAllowPrev: _,
    fnNext: _,
    fnPrev: _,
    iPosition: _,
  };
}
var _ = (_) => {
    let {
      className: _,
      containerRef: _,
      rgVisibleItems: _,
      bAllowNext: _,
      bAllowPrev: _,
      fnNext: _,
      fnPrev: _,
      iPosition: _,
      ..._
    } = _;
    return (0, _.jsx)(_, {
      className: _(_, _),
      ref: _,
      "flow-children": `row`,
      ..._,
      children: _,
    });
  },
  _ = (_) => {
    let { bAllowNext: _, bAllowPrev: _, fnNext: _, fnPrev: _ } = _;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          className: _(_, !_ && `rwLL3BOMoHw-`),
          onClick: _,
        }),
        (0, _.jsx)(_, {
          className: _(_, !_ && `rwLL3BOMoHw-`),
          onClick: _,
        }),
      ],
    });
  },
  _ = () => (window.ResizeObserver ? _() : _()),
  _ = () => {
    let [_, _] = (0, _.useState)({}),
      [_, _] = (0, _.useState)(null),
      _ = (0, _.useCallback)((_) => _(_), []);
    return (
      (0, _.useLayoutEffect)(() => {
        if (_) {
          let _ = new ResizeObserver(() =>
            window.requestAnimationFrame(() => _(_.getBoundingClientRect())),
          );
          return (_.observe(_), () => _.disconnect());
        }
        return () => {};
      }, [_]),
      [_, _]
    );
  },
  _ = () => {
    let [_, _] = (0, _.useState)({}),
      [_, _] = (0, _.useState)(null),
      _ = (0, _.useCallback)((_) => _(_), []);
    return (
      (0, _.useLayoutEffect)(() => {
        if (_) {
          let _ = () =>
            window.requestAnimationFrame(() => _(_.getBoundingClientRect()));
          return (
            _(),
            window.addEventListener(`resize`, _),
            window.addEventListener(`scroll`, _),
            () => {
              (window.removeEventListener(`resize`, _),
                window.removeEventListener(`scroll`, _));
            }
          );
        }
        return () => {};
      }, [_]),
      [_, _]
    );
  },
  _ = (_) =>
    (0, _.jsx)(`svg`, {
      ..._,
      viewBox: `0 0 23 36`,
      children: (0, _.jsx)(`g`, {
        children: (0, _.jsx)(`path`, {
          _: `M6 1.5L21 18L6 34.5`,
          stroke: `#EAEAEA`,
          fill: `none`,
          strokeWidth: `4`,
        }),
      }),
    }),
  _ = (_) => {
    let { style: _, ..._ } = _,
      _ = {
        transform: `scaleX(-1)`,
        ...(_ || {}),
      };
    return (0, _.jsx)(_, {
      style: _,
      ..._,
    });
  };
function _(_) {
  let { items: _, renderItem: _, loadMore: _, bLoadingMore: _, style: _ } = _,
    _ = _();
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsxs)(_, {
      "flow-children": `row`,
      className: _(_, void 0),
      style: _ ? null : _,
      children: [
        _.map(_),
        (0, _.jsx)(_, {
          trigger: `repeated`,
          rootMargin: `0px 100% 0px 100%`,
          horizontal: !0,
          onVisibilityChange: (_) => _ && _(),
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `TYhPtUEB35o-`,
            children: (0, _.jsx)(_, {}),
          }),
      ],
    }),
  });
}
var _ = `AqGaS--D2n0-`,
  _ = `fmdxSBsbXDE-`,
  _ = `pMnhVAr8mRY-`,
  _ = `bEVd7Wx0Jzw-`,
  _ = (_) => {
    let {
        title: _,
        subtitle: _,
        leftActions: _,
        rightActions: _,
        children: _,
      } = _,
      _ = _ || _ || _ || _;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: `nO4XbnzUYNM-`,
            children: (0, _.jsxs)(`div`, {
              className: `ucwmr2GDEt4-`,
              children: [
                (0, _.jsxs)(`div`, {
                  className: `B7vqMNZOp-o-`,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: `JttftKE3xaE-`,
                      children: _,
                    }),
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `_8sryJEOryv0-`,
                        children: _,
                      }),
                    (0, _.jsx)(`div`, {
                      className: `vr9rffQHDeE-`,
                    }),
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `_8sryJEOryv0-`,
                        children: _,
                      }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: `WNyTopc2hVQ-`,
                  children: _,
                }),
              ],
            }),
          }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    });
  },
  _ = (_) => {
    let { className: _, ..._ } = _;
    return (0, _.jsx)(_, {
      className: _(_, _),
      ..._,
    });
  },
  _ = (_) => {
    let { className: _, ..._ } = _;
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      ..._,
    });
  },
  _ = new URL(
    `../../../images/applications/store/icon_showcase_1.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `data:image/svg+xml,%3csvg%20width='119'%20height='136'%20viewBox='0%200%20119%20136'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M62.408%2034.0817C62.408%2029.7685%2058.8936%2026.2541%2054.5804%2026.2541H33.3341C31.7367%2026.2541%2030.4587%2024.6566%2030.7782%2023.0592C30.7782%2023.0592%2037.3278%207.08452%2037.3278%205.00781C37.3278%202.9311%2036.5291%201.49339%2034.9316%201.17389C33.3341%200.854399%2029.8197%200.0556668%2029.8197%200.0556668C28.2223%20-0.10408%2027.104%200.0556667%2026.3053%200.8544L2.50305%2024.6566C1.06534%2026.0944%200.266602%2028.0113%200.266602%2030.088V73.8586C0.266602%2075.4561%201.70432%2076.8938%203.30179%2076.8938H43.0787C46.2736%2076.8938%2048.5101%2074.6573%2050.2673%2072.1014L60.9703%2057.8839C61.6093%2057.0852%2062.5678%2055.1682%2062.5678%2053.5708V34.4012L62.408%2034.0817Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M56.1777%20101.918C56.1777%20106.231%2059.6922%20109.746%2064.0053%20109.746H85.2516C86.8491%20109.746%2088.1271%20111.343%2087.8076%20112.941C87.8076%20112.941%2081.2579%20128.915%2081.2579%20130.992C81.2579%20133.069%2082.0567%20134.507%2083.6541%20134.826C85.2516%20135.146%2088.766%20135.944%2088.766%20135.944C90.3635%20136.104%2091.4817%20135.944%2092.2805%20135.146L115.923%20111.343C117.361%20109.906%20118.159%20107.989%20118.159%20105.912V62.1414C118.159%2060.5439%20116.722%2059.1062%20115.124%2059.1062H75.6668C72.4719%2059.1062%2070.2354%2061.3427%2068.4782%2063.8986L57.7752%2078.116C57.1362%2078.9148%2056.1777%2080.8317%2056.1777%2082.4292V101.439V101.918Z'%20fill='url(%23paint1_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='31.4172'%20y1='0'%20x2='31.4172'%20y2='76.8938'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='87.1686'%20y1='59.1062'%20x2='87.1686'%20y2='136'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  _ = `data:image/svg+xml,%3csvg%20width='119'%20height='122'%20viewBox='0%200%20119%20122'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M59.5%2019.5437C55.93%2019.5437%2053.55%2017.1748%2053.55%2013.6214V5.92233C53.55%202.36893%2055.93%200%2059.5%200C63.07%200%2065.45%202.36893%2065.45%205.92233V13.6214C65.45%2016.5825%2063.07%2019.5437%2059.5%2019.5437ZM73.78%20116.078C73.78%20112.524%2071.4%20110.155%2067.83%20110.155H51.17C47.6%20110.155%2045.22%20112.524%2045.22%20116.078C45.22%20119.631%2047.6%20122%2051.17%20122H67.83C71.4%20122%2073.78%20119.631%2073.78%20116.078ZM32.725%2029.0194C35.105%2026.6505%2035.105%2023.0971%2032.725%2020.7282L27.37%2015.3981C24.99%2013.0291%2021.42%2013.0291%2019.04%2015.3981C16.66%2017.767%2016.66%2021.3204%2019.04%2023.6893L24.395%2029.0194C26.775%2031.3883%2030.345%2031.3883%2032.725%2029.0194ZM94.605%2029.0194L99.96%2023.6893C102.34%2021.3204%20102.34%2017.767%2099.96%2015.3981C97.58%2013.0291%2094.01%2013.0291%2091.63%2015.3981L86.275%2020.7282C83.895%2023.0971%2083.895%2026.6505%2086.275%2029.0194C88.06%2031.3883%2092.225%2031.3883%2094.605%2029.0194ZM119%2055.0777C119%2051.5243%20116.62%2049.1553%20113.05%2049.1553H105.315C101.745%2049.1553%2099.365%2051.5243%2099.365%2055.0777C99.365%2058.6311%20101.745%2061%20105.315%2061H113.05C116.62%2061%20119%2058.6311%20119%2055.0777ZM19.635%2055.0777C19.635%2051.5243%2017.255%2049.1553%2013.685%2049.1553H5.95C2.38%2049.1553%200%2051.5243%200%2055.0777C0%2058.6311%202.38%2061%205.95%2061H13.685C17.255%2061%2019.635%2058.6311%2019.635%2055.0777ZM79.73%2034.9417C73.78%2030.2039%2067.235%2027.8349%2059.5%2027.8349C57.12%2027.8349%2054.145%2028.4272%2051.765%2029.0194C34.51%2033.165%2023.8%2050.3398%2028.56%2068.1068C30.94%2076.9903%2036.295%2084.0971%2044.03%2088.2427V96.534C44.03%20100.087%2046.41%20102.456%2049.98%20102.456H69.615C73.185%20102.456%2075.565%20100.087%2075.565%2096.534V88.8349C91.035%2079.9515%2096.985%2060.4078%2088.06%2045.0097C85.68%2040.8641%2083.3%2037.3107%2079.73%2034.9417Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='59.5'%20y1='0'%20x2='59.5'%20y2='122'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_12.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_13.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_14.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `data:image/svg+xml,%3csvg%20width='91'%20height='118'%20viewBox='0%200%2091%20118'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.636%200H0.981445V118H10.636V0Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M64.975%2028.4804L71.7818%2033.2545V0H54.6182V33.2545L61.425%2028.4804C61.9441%2028.1162%2062.5643%2027.9207%2063.2%2027.9207C63.8357%2027.9207%2064.4558%2028.1162%2064.975%2028.4804Z'%20fill='url(%23paint1_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M90.0182%200H77.1997V39.2623C77.199%2039.8231%2077.0444%2040.3729%2076.7525%2040.8518C76.4607%2041.3307%2076.043%2041.7201%2075.5449%2041.9776C75.0469%2042.2352%2074.4877%2042.3509%2073.9284%2042.3121C73.3691%2042.2733%2072.8311%2042.0816%2072.3734%2041.7578L62.5412%2034.8078L52.709%2041.7578C52.2511%2042.0814%2051.713%2042.273%2051.1535%2042.3115C50.5941%2042.35%2050.0349%2042.234%2049.5369%2041.9761C49.0389%2041.7182%2048.6214%2041.3285%2048.3298%2040.8493C48.0383%2040.3702%2047.884%2039.8201%2047.8837%2039.2592V0H18.1455V118H90.0182V0Z'%20fill='url(%23paint2_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='5.80872'%20y1='0'%20x2='5.80872'%20y2='118'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='63.2'%20y1='0'%20x2='63.2'%20y2='33.2545'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='54.0819'%20y1='0'%20x2='54.0819'%20y2='118'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_16.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_17.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `data:image/svg+xml,%3csvg%20width='183'%20height='107'%20viewBox='0%200%20183%20107'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='42.165'%20y='41.8574'%20width='140'%20height='65'%20rx='5'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M161.331%2026.1426C161.331%2023.3812%20159.092%2021.1426%20156.331%2021.1426H26.1426C23.3812%2021.1426%2021.1426%2023.3812%2021.1426%2026.1426V80.714C21.1426%2083.4754%2023.3812%2085.714%2026.1426%2085.714H28.8869C31.6484%2085.714%2033.8869%2083.4754%2033.8869%2080.714V38.0373C33.8869%2035.2759%2036.1255%2033.0373%2038.8869%2033.0373H156.331C159.092%2033.0373%20161.331%2030.7987%20161.331%2028.0373V26.1426Z'%20fill='url(%23paint1_linear)'%20fill-opacity='0.85'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.188%205C140.188%202.23858%20137.949%200%20135.188%200H5C2.23858%200%200%202.23857%200%205V59.5714C0%2062.3329%202.23858%2064.5714%205%2064.5714H7.74436C10.5058%2064.5714%2012.7444%2062.3329%2012.7444%2059.5714V16.8947C12.7444%2014.1333%2014.9829%2011.8947%2017.7444%2011.8947H135.188C137.949%2011.8947%20140.188%209.65616%20140.188%206.89474V5Z'%20fill='url(%23paint2_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='112.165'%20y1='41.8574'%20x2='112.165'%20y2='106.857'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='91.2366'%20y1='21.1426'%20x2='91.2366'%20y2='85.714'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='70.094'%20y1='0'%20x2='70.094'%20y2='64.5714'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_21.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `data:image/svg+xml,%3csvg%20width='83'%20height='130'%20viewBox='0%200%2083%20130'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M78.9225%207.66314H47.3826V5.47367C47.3826%202.46315%2044.7663%200%2041.5687%200C38.3711%200%2035.7549%202.46315%2035.7549%205.47367V7.66314H4.21501C1.88949%207.66314%200%209.44209%200%2011.6316V74.7157C0%2076.9051%201.88949%2078.6841%204.21501%2078.6841H19.767L4.65105%20122.747C3.63363%20125.621%205.23243%20128.768%208.43003%20129.726C11.6276%20130.684%2014.8252%20129.042%2015.8426%20126.168L22.9646%20105.642H60.4636L67.5855%20126.168C68.3123%20128.495%2070.6378%20130%2073.1087%20130C73.69%20130%2074.2714%20129.863%2074.8528%20129.726C77.9051%20128.768%2079.6492%20125.621%2078.6318%20122.747L63.2252%2078.8209H78.7771C81.1026%2078.8209%2082.9921%2077.042%2082.9921%2074.8525V11.6316C83.1375%209.44209%2081.248%207.66314%2078.9225%207.66314ZM49.8534%2022.5789C53.1964%2022.5789%2055.9579%2025.1789%2055.9579%2028.3263C55.9579%2031.4736%2053.1964%2034.0736%2049.8534%2034.0736C46.5105%2034.0736%2043.7489%2031.4736%2043.7489%2028.3263C43.7489%2025.1789%2046.5105%2022.5789%2049.8534%2022.5789ZM26.5982%2094.6946L32.1213%2078.6841H50.8708L56.394%2094.6946H26.5982ZM65.4054%2061.1683C64.824%2061.9894%2063.9519%2062.5367%2062.9345%2062.5367H20.3483C19.3309%2062.5367%2018.3135%2061.9894%2017.8775%2061.1683C17.2961%2060.2104%2017.4414%2059.2525%2018.0228%2058.4315L32.5573%2038.3157C33.5748%2036.8105%2036.191%2036.8105%2037.2084%2038.3157L45.3477%2049.5368L49.8534%2043.5157C50.8708%2042.0104%2053.4871%2042.0104%2054.5045%2043.5157L65.26%2058.4315C65.8414%2059.2525%2065.8414%2060.2104%2065.4054%2061.1683Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='41.5'%20y1='0'%20x2='41.5'%20y2='130'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_23.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_24.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `data:image/svg+xml,%3csvg%20width='179'%20height='107'%20viewBox='0%200%20179%20107'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M153.595%205.22428C153.244%203.91237%20152.056%203%20150.697%203H97C95.3431%203%2094%204.34315%2094%206V12C94%2013.6569%2095.3431%2015%2097%2015H125C126.657%2015%20128%2016.3431%20128%2018V99C128%20100.657%20129.343%20102%20131%20102H175.591C177.564%20102%20178.999%20100.129%20178.489%2098.2243L153.595%205.22428Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M115.451%2023H58C59.8126%2042.8279%2066.0206%2048.195%2071.1295%2052.6023C75.3534%2056.2464%2081.139%2061.2357%2081.139%2071.0948C81.139%2082.547%2076.8926%2093.0142%2069.9144%20101H115.451C117.411%20101%20119%2099.3985%20119%2097.4227V26.5773C119%2024.6014%20117.412%2023%20115.451%2023Z'%20fill='url(%23paint1_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M48.0468%2014.9149H48.5028C50.6928%2014.9149%2052.4688%2013.3124%2052.4688%2011.338V3.57685C52.4688%201.6012%2050.6928%200%2048.5028%200H23.4972C21.3072%200%2019.5312%201.6012%2019.5312%203.57685V11.338C19.5312%2013.3124%2021.3072%2014.9149%2023.4972%2014.9149H23.9532C22.8276%2063.7759%200%2056.1954%200%2071.3385C0%2091.032%2016.1172%20107%2036%20107C55.8828%20107%2072%2091.032%2072%2071.3385C72%2056.1954%2049.1736%2063.7771%2048.0468%2014.9149Z'%20fill='url(%23paint2_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='136.297'%20y1='3'%20x2='136.297'%20y2='102'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='88.5'%20y1='23'%20x2='88.5'%20y2='101'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='36'%20y1='0'%20x2='36'%20y2='107'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_4.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_5.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `data:image/svg+xml,%3csvg%20width='206'%20height='52'%20viewBox='0%200%20206%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.881%208.814C134.427%2013.2102%20134.684%2019.4166%20129.79%2024.3299L103%2052L76.21%2024.3299C71.3157%2019.4166%2071.5733%2012.9516%2073.1189%208.814C75.1796%203.64203%2079.8164%200.280238%2085.2259%200.0216394C85.4835%200.0216394%2085.7411%200.0216394%2086.2563%200.0216394C91.1506%200.0216394%2095.7873%202.09043%2099.3936%205.71082C101.454%207.77961%20104.803%207.77961%20106.864%205.71082C110.47%201.83183%20115.622%200.0216394%20120.774%200.0216394C126.184%200.280238%20130.82%203.64203%20132.881%208.814ZM48.6473%200.0216394C43.4953%20-0.236959%2038.3434%201.83183%2034.7371%205.71082C32.6763%207.77961%2029.3276%207.77961%2027.2668%205.71082C23.918%202.09043%2019.2813%200.0216394%2014.1294%200.0216394C13.8718%200.0216394%2013.6142%200.0216394%2013.099%200.0216394C7.4319%200.280238%203.05277%203.64203%200.992002%208.814C-0.553574%2013.2102%20-0.811168%2019.4166%204.08316%2024.3299L30.8731%2052L57.6631%2024.5885C62.5574%2019.6751%2062.2998%2013.2102%2060.7543%209.0726C58.6935%203.64202%2054.0568%200.280238%2048.6473%200.0216394ZM205.008%208.814C202.947%203.64203%20198.311%200.280238%20192.901%200.0216394C187.749%20-0.236959%20182.597%201.83183%20178.991%205.71082C176.93%207.77961%20173.581%207.77961%20171.521%205.71082C168.172%202.09043%20163.535%200.0216394%20158.383%200.0216394C158.126%200.0216394%20157.868%200.0216394%20157.353%200.0216394C151.686%200.280238%20147.307%203.64203%20145.246%208.814C143.7%2013.2102%20143.443%2019.4166%20148.337%2024.3299L175.127%2052L201.917%2024.5885C206.811%2019.4165%20206.554%2013.2102%20205.008%208.814Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='103'%20y1='0'%20x2='103'%20y2='52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_7.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `data:image/svg+xml,%3csvg%20width='202'%20height='76'%20viewBox='0%200%20202%2076'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23828%200%200%202.23853%200%205V71C0%2073.7615%202.23828%2076%205%2076H197C199.762%2076%20202%2073.7615%20202%2071V5C202%202.23853%20199.762%200%20197%200H5ZM27%2018.1414H18V13H40.4346V18.1414H32V55.8586H40.4355V61H32H27H18V55.8586H27V18.1414Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='101'%20y1='0'%20x2='101'%20y2='76'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  _ = new URL(
    `../../../images/applications/store/icon_showcase_9.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `NswEQ9N1d90-`,
  _ = `janX-V7JCm4-`,
  _ = `_4MLY4ZIBmA0-`,
  _ = (_) => {
    let { amount: _, className: _, size: _, ..._ } = _,
      _ = _ > 0 ? _(_) : _(`#Rewards_Free`);
    return (0, _.jsxs)(`div`, {
      className: _(_, _),
      ..._,
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          style: _
            ? {
                fontSize: `${_}rem`,
              }
            : void 0,
          children: [_, _.children],
        }),
      ],
    });
  },
  _ = `_6psFyKVNQmw-`,
  _ = `E7oxZCRd9I0-`,
  _ = `l1z37S64KIQ-`,
  _ = `U3HcGFQg9ak-`,
  _ = `xrjlAEljqvo-`,
  _ = `kDSqz49I5Hw-`,
  _ = `YoOqAvpWYgQ-`,
  _ = `_216R8aJbhUM-`,
  _ = `ySqH-OIdtW4-`,
  _ = `qvssbr74lW8-`,
  _ = `_8LgDijh8MiU-`,
  _ = `N3SC-q5zo8w-`,
  _ = `tOYpLlnuJxI-`,
  _ = `MIVDN7w59XE-`,
  _ = `FS6feAUS6tM-`,
  _ = `_87yocd-WU6c-`,
  _ = `adCtZTssWRs-`,
  _ = `vNLbo4meUXc-`,
  _ = `hsxoGvqel0k-`,
  _ = `_9RjtLB4g-HE-`,
  _ = `gl8SNJ4zT5k-`,
  _ = `sCimV9InvMM-`,
  _ = `qZsAxH6YVCA-`,
  _ = `_1atpGrHdHs0-`,
  _ = `EOr2spguwlI-`,
  _ = `kS90w55cmrc-`,
  _ = `SK7vXGSN6OY-`,
  _ = `Df2BqSSNihs-`,
  _ = `xk75qOlyaxs-`,
  _ = `Ri0jEi4FgmQ-`,
  _ = `FZbk8uKObbw-`,
  _ = `_83WZNLyp11c-`,
  _ = `j498-YNwhz0-`,
  _ = `keUN4m6H-Oc-`,
  _ = `cL3tfa-JDBE-`,
  _ = `w6UtE24wq8w-`,
  _ = `FkVCjE6GjQg-`,
  _ = `xsaI2OSfN2I-`,
  _ = (_) => {
    let { className: _, children: _, onClick: _, ..._ } = _;
    return (0, _.jsxs)(_, {
      className: _(_, _),
      focusable: !0,
      onActivate: _,
      ..._,
      children: [
        (0, _.jsx)(`div`, {
          className: _(_),
        }),
        _,
      ],
    });
  },
  _ = (_) => {
    let { className: _, ..._ } = _;
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      ..._,
    });
  },
  _ = (_) => {
    let { className: _, ..._ } = _;
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      ..._,
    });
  },
  _ = (_) =>
    (0, _.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z`,
      }),
    }),
  _ = (_) =>
    (0, _.jsx)(`svg`, {
      width: 30,
      height: 30,
      viewBox: `0 0 30 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ..._,
      children: (0, _.jsx)(`path`, {
        _: `M15.2305 28.1415L15.2305 15.621L15.2305 3.10029C8.31552 3.10029 2.70984 8.70596 2.70984 15.6209C2.70984 22.5359 8.31552 28.1415 15.2305 28.1415ZM30.2305 15.6209C30.2305 23.9052 23.5147 30.6209 15.2305 30.6209C6.9462 30.6209 0.230469 23.9052 0.230469 15.6209C0.230469 7.33664 6.9462 0.620911 15.2305 0.620911C23.5147 0.620911 30.2305 7.33664 30.2305 15.6209Z`,
        fill: `#5B7E0F`,
      }),
    });
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `61px`,
    height: `52px`,
    viewBox: `0 0 61 52`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M31.327 0.622074L31.0027 0.341797L30.6762 0.619372L7.67619 20.1694L0.676186 26.1194C0.465782 26.2982 0.440197 26.6138 0.61904 26.8242C0.797884 27.0346 1.11343 27.0602 1.32383 26.8813L7.50001 21.6316V49.0003C7.50001 50.3811 8.6193 51.5003 10 51.5003H51.5C52.8807 51.5003 54 50.3811 54 49.0003V21.5426L60.173 26.8786C60.3819 27.0592 60.6977 27.0362 60.8783 26.8273C61.0589 26.6184 61.0359 26.3027 60.827 26.1221L53.827 20.0712L31.327 0.622074ZM8.50001 49.0003V20.7816L30.9973 1.65889L53 20.6782V49.0003C53 49.8288 52.3284 50.5003 51.5 50.5003H38.5V32.0003C38.5 30.6196 37.3807 29.5003 36 29.5003H26C24.6193 29.5003 23.5 30.6196 23.5 32.0003V50.5003H10C9.17158 50.5003 8.50001 49.8288 8.50001 49.0003ZM24.5 50.5003H37.5V32.0003C37.5 31.1719 36.8284 30.5003 36 30.5003H26C25.1716 30.5003 24.5 31.1719 24.5 32.0003V50.5003Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `47px`,
    height: `51px`,
    viewBox: `0 0 47 51`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M33.9999 10.5C33.9999 15.7034 29.5671 20 23.9999 20C18.4327 20 13.9999 15.7034 13.9999 10.5C13.9999 5.29663 18.4327 1 23.9999 1C29.5671 1 33.9999 5.29663 33.9999 10.5ZM34.9999 10.5C34.9999 16.299 30.075 21 23.9999 21C17.9247 21 12.9999 16.299 12.9999 10.5C12.9999 4.70101 17.9247 0 23.9999 0C30.075 0 34.9999 4.70101 34.9999 10.5ZM16.3702 23.5C10.6886 23.5 5.62398 26.8717 3.72868 32.2547C2.47599 35.8127 1.26935 39.3781 0.768536 40.866C0.549738 41.516 0.803538 42.2172 1.36831 42.5884L4.65592 44.7495C16.463 52.5107 31.809 52.2879 43.3858 44.1873L45.6833 42.5797C46.2215 42.2031 46.452 41.5201 46.2522 40.8944L43.9193 33.5891C42.0002 27.5792 36.4154 23.5 30.1065 23.5H24.2027H16.3702ZM4.67193 32.5868C6.41799 27.6277 11.0872 24.5 16.3702 24.5H24.2027H30.1065C35.9803 24.5 41.1799 28.2979 42.9667 33.8933L45.2996 41.1986C45.3662 41.4072 45.2893 41.6348 45.1099 41.7604L42.8125 43.368C31.5712 51.2338 16.67 51.4501 5.20521 43.9139L1.9176 41.7528C1.72419 41.6257 1.64564 41.3949 1.71629 41.185C2.21655 39.6988 3.42149 36.1384 4.67193 32.5868Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `49px`,
    height: `58px`,
    viewBox: `0 0 49 58`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M24.5 12C27.5376 12 30 9.53757 30 6.5C30 3.46243 27.5376 1 24.5 1C21.4624 1 19 3.46243 19 6.5C19 9.53757 21.4624 12 24.5 12ZM24.5 13C26.1149 13 27.5923 12.411 28.7291 11.4362L38.2929 21H11.2071L20.5469 11.6602C21.6422 12.5005 23.0128 13 24.5 13ZM9.79289 21L19.8014 10.9915C18.6855 9.8244 18 8.24225 18 6.5C18 2.91015 20.9101 0 24.5 0C28.0899 0 31 2.91015 31 6.5C31 8.11495 30.411 9.59234 29.4362 10.7291L39.7071 21H40H45C46.933 21 48.5 22.567 48.5 24.5V54C48.5 55.933 46.933 57.5 45 57.5H4C2.067 57.5 0.5 55.933 0.5 54V24.5C0.5 22.567 2.067 21 4 21H8H9.79289ZM8 22H4C2.61929 22 1.5 23.1193 1.5 24.5V54C1.5 55.3807 2.61929 56.5 4 56.5H45C46.3807 56.5 47.5 55.3807 47.5 54V24.5C47.5 23.1193 46.3807 22 45 22H40H39.5H39.2929H10.2071H10H8ZM10.5 29C9.11929 29 8 30.1193 8 31.5V48C8 49.3807 9.11929 50.5 10.5 50.5H37.5C38.8807 50.5 40 49.3807 40 48V31.5C40 30.1193 38.8807 29 37.5 29H10.5ZM9 31.5C9 30.6716 9.67157 30 10.5 30H37.5C38.3284 30 39 30.6716 39 31.5V48C39 48.8284 38.3284 49.5 37.5 49.5H10.5C9.67157 49.5 9 48.8284 9 48V31.5Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `none`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M2 9H34V27H2V9ZM5 13H7V15H5V13ZM7 21H5V23H7V21ZM5 17H9V19H5V17ZM11 13H9V15H11V13ZM9 21H27V23H9V21ZM15 13H13V15H15V13ZM11 17H13V19H11V17ZM19 13H17V15H19V13ZM15 17H17V19H15V17ZM21 17H19V19H21V17ZM21 13H23V15H21V13ZM25 17H23V19H25V17ZM25 13H27V15H25V13ZM31 13H29V15H31V13ZM29 21H31V23H29V21ZM31 17H27V19H31V17Z`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `64`,
    height: `62`,
    viewBox: `0 0 64 62`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `51px`,
    height: `56px`,
    viewBox: `0 0 51 56`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M43.2109 6.95H7.21094C4.00769 6.95 1.41094 9.54675 1.41094 12.75V48.6496C1.41094 51.8528 4.00769 54.4496 7.21094 54.4496H43.2109C46.4142 54.4496 49.0109 51.8528 49.0109 48.6496V12.75C49.0109 9.54675 46.4142 6.95 43.2109 6.95ZM7.21094 5.75C3.34494 5.75 0.210938 8.88401 0.210938 12.75V48.6496C0.210938 52.5156 3.34494 55.6496 7.21094 55.6496H43.2109C47.0769 55.6496 50.2109 52.5156 50.2109 48.6496V12.75C50.2109 8.88401 47.0769 5.75 43.2109 5.75H7.21094Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M50.2109 17.875H0.210938V16.675H50.2109V17.875Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M27.3491 29.4463L25.9645 25.5785C25.7114 24.8714 24.7113 24.8714 24.4581 25.5785L23.0735 29.4463C22.6297 30.6861 21.4717 31.5275 20.1555 31.5664L16.0491 31.688C15.2983 31.7103 14.9893 32.6614 15.5836 33.1207L18.8342 35.6327C19.8762 36.4379 20.3185 37.7992 19.9488 39.0631L18.7956 43.0061C18.5847 43.727 19.3938 44.3148 20.0142 43.8915L23.4079 41.5762C24.4956 40.8341 25.927 40.8341 27.0148 41.5762L30.4084 43.8915C31.0288 44.3148 31.8379 43.727 31.6271 43.0061L30.4738 39.0631C30.1041 37.7992 30.5464 36.4379 31.5884 35.6327L34.839 33.1207C35.4334 32.6614 35.1243 31.7103 34.3735 31.688L30.2672 31.5664C28.9509 31.5275 27.7929 30.6861 27.3491 29.4463ZM27.0943 25.1741C26.4614 23.4062 23.9612 23.4062 23.3283 25.1741L21.9437 29.0419C21.6663 29.8168 20.9426 30.3426 20.1199 30.367L16.0136 30.4886C14.1366 30.5441 13.364 32.922 14.8498 34.0702L18.1005 36.5823C18.7517 37.0855 19.0281 37.9363 18.7971 38.7262L17.6438 42.6692C17.1167 44.4715 19.1394 45.9411 20.6905 44.8828L24.0841 42.5675C24.764 42.1037 25.6586 42.1037 26.3385 42.5675L29.7321 44.8828C31.2832 45.9411 33.306 44.4715 32.7788 42.6692L31.6255 38.7262C31.3945 37.9363 31.6709 37.0855 32.3221 36.5823L35.5728 34.0702C37.0586 32.922 36.286 30.5441 34.409 30.4886L30.3027 30.367C29.48 30.3426 28.7563 29.8168 28.4789 29.0419L27.0943 25.1741Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M16.4922 9.125V0.0268555L17.6922 0.0268555L17.6922 9.125H16.4922Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M17.0234 13.2063C17.8795 13.2063 18.5734 12.5123 18.5734 11.6562C18.5734 10.8002 17.8795 10.1062 17.0234 10.1062C16.1674 10.1062 15.4734 10.8002 15.4734 11.6562C15.4734 12.5123 16.1674 13.2063 17.0234 13.2063ZM17.0234 14.4062C18.5422 14.4062 19.7734 13.175 19.7734 11.6562C19.7734 10.1375 18.5422 8.90625 17.0234 8.90625C15.5047 8.90625 14.2734 10.1375 14.2734 11.6562C14.2734 13.175 15.5047 14.4062 17.0234 14.4062Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M32.8672 9.125V0.0268555L34.0672 0.0268555V9.125H32.8672Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M33.3984 13.2063C34.2545 13.2063 34.9484 12.5123 34.9484 11.6562C34.9484 10.8002 34.2545 10.1062 33.3984 10.1062C32.5424 10.1062 31.8484 10.8002 31.8484 11.6562C31.8484 12.5123 32.5424 13.2063 33.3984 13.2063ZM33.3984 14.4062C34.9172 14.4062 36.1484 13.175 36.1484 11.6562C36.1484 10.1375 34.9172 8.90625 33.3984 8.90625C31.8797 8.90625 30.6484 10.1375 30.6484 11.6562C30.6484 13.175 31.8797 14.4062 33.3984 14.4062Z`,
        fill: ``,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    fill: `none`,
    width: `68`,
    height: `68`,
    viewBox: `0 0 68 68`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(_, `SVGIcon_Button`),
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M57.2981 10.8369L56.9021 9.61803C56.3034 7.77541 53.6966 7.77541 53.0979 9.61803L52.7019 10.8369H51.4203C49.4828 10.8369 48.6773 13.3161 50.2447 14.4549L51.2815 15.2082L50.8855 16.4271C50.2868 18.2697 52.3958 19.8019 53.9632 18.6631L55 17.9098L56.0368 18.6631C57.6042 19.8019 59.7132 18.2697 59.1145 16.4271L58.7185 15.2082L59.7553 14.4549C61.3227 13.3161 60.5172 10.8369 58.5797 10.8369L57.2981 10.8369Z`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, _.jsx)(`rect`, {
        _: `1`,
        _: `1`,
        width: `66`,
        height: `66`,
        _: `9`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, _.jsx)(`rect`, {
        _: `7`,
        _: `7`,
        width: `14`,
        height: `14`,
        _: `3`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, _.jsx)(`rect`, {
        _: `7`,
        _: `26`,
        width: `54`,
        height: `14`,
        _: `3`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, _.jsx)(`rect`, {
        _: `7`,
        _: `46`,
        width: `54`,
        height: `14`,
        _: `3`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, _.jsx)(`line`, {
        _: `26`,
        _: `17`,
        _: `39`,
        _: `17`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
      }),
      (0, _.jsx)(`line`, {
        _: `26`,
        _: `12`,
        _: `45`,
        _: `12`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 52 46.1`,
    children: (0, _.jsx)(`path`, {
      _: `M51.5,40.2l-6.8-11.7c2.4-2,3.9-5,3.9-8.4c0-6.1-4.9-11-11-11c-1.3,0-2.5,0.2-3.7,0.6L29.4,2c-0.7-1.2-2-2-3.4-2s-2.7,0.7-3.4,2l-4.1,7.1H6.6v20.6l-6,10.5c-0.7,1.2-0.7,2.7,0,4c0.7,1.2,2,2,3.4,2H48c1.4,0,2.7-0.7,3.4-2C52.2,42.9,52.2,41.4,51.5,40.2z M46.6,20.1c0,5-4,9-9,9s-9-4-9-9s4-9,9-9S46.6,15.1,46.6,20.1z M8.6,11.1h8.7L8.6,26.2V11.1zM49.7,43.1c-0.4,0.6-1,1-1.7,1H4c-0.7,0-1.3-0.4-1.7-1c-0.4-0.6-0.4-1.3,0-2L24.3,3c0.4-0.6,1-1,1.7-1s1.3,0.4,1.7,1l4.4,7.6c-3.3,1.9-5.5,5.5-5.5,9.5c0,6.1,4.9,11,11,11c2,0,3.9-0.5,5.5-1.5l6.7,11.5C50.1,41.8,50.1,42.5,49.7,43.1z`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `64px`,
    height: `54px`,
    viewBox: `0 0 64 54`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M4 0C1.79086 0 0 1.79086 0 4V50C0 52.2091 1.79086 54 4 54H11H53H60C62.2091 54 64 52.2091 64 50V4C64 1.79086 62.2091 0 60 0H53H11H4ZM11 2V52H53V2H11ZM8 25H3V29.8H8V25ZM3 15H8V19.8H3V15ZM8 6H3V10.8H8V6ZM3 34.5996H8V39.3996H3V34.5996ZM8 44.2002H3V49.0002H8V44.2002ZM39.8603 17.535C39.8603 21.0291 36.8085 24.0701 32.7786 24.0701C28.7487 24.0701 25.6969 21.0291 25.6969 17.535C25.6969 14.041 28.7487 11 32.7786 11C36.8085 11 39.8603 14.041 39.8603 17.535ZM41.8603 17.535C41.8603 22.2488 37.7943 26.0701 32.7786 26.0701C27.7629 26.0701 23.6969 22.2488 23.6969 17.535C23.6969 12.8213 27.7629 9 32.7786 9C37.7943 9 41.8603 12.8213 41.8603 17.535ZM30.4484 27.5466C24.6389 27.5466 19.3689 30.9432 17.364 36.4652C16.8368 37.9173 16.3885 39.1885 16.1121 39.9794C15.773 40.9495 16.227 42.0134 17.1535 42.4456L17.9794 42.831C27.4793 47.2632 38.4824 47.1178 47.8618 42.4361C48.7479 41.9938 49.1714 40.9651 48.8535 40.0271L48.0754 37.7315C46.0118 31.6431 40.2979 27.5466 33.8692 27.5466H33.0013H30.4484ZM19.2439 37.1478C20.9397 32.4771 25.4141 29.5466 30.4484 29.5466H33.0013H33.8692C39.4407 29.5466 44.3928 33.0969 46.1812 38.3735L46.9541 40.6538C38.1237 45.056 27.7672 45.1905 18.825 41.0185L18.0018 40.6344C18.2765 39.8484 18.7212 38.5873 19.2439 37.1478ZM61 25H56V29.8H61V25ZM56 15H61V19.8H56V15ZM61 6H56V10.8H61V6ZM56 34.5996H61V39.3996H56V34.5996ZM61 44.2002H56V49.0002H61V44.2002Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `61px`,
    height: `66px`,
    viewBox: `0 0 61 66`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M58 2H3C2.44772 2 2 2.44772 2 3V49.9671L14.44 40.7192L15.0898 40.2361L15.6975 40.7713L21.5338 45.911L40.422 28.2692L41.1163 27.6207L41.7995 28.2809L59 44.9038V3C59 2.44772 58.5523 2 58 2ZM2 63V52.4592L14.9834 42.8074L20.8927 48.0113L27.4097 53.7505L28.7315 52.2495L23.0419 47.2391L41.0928 30.3793L59 47.6851V63C59 63.5523 58.5523 64 58 64H3C2.44772 64 2 63.5523 2 63ZM3 0C1.34315 0 0 1.34315 0 3V63C0 64.6569 1.34315 66 3 66H58C59.6569 66 61 64.6569 61 63V3C61 1.34315 59.6569 0 58 0H3ZM22.7185 16.2664C22.7185 18.5968 20.8293 20.486 18.4989 20.486C16.1685 20.486 14.2793 18.5968 14.2793 16.2664C14.2793 13.936 16.1685 12.0468 18.4989 12.0468C20.8293 12.0468 22.7185 13.936 22.7185 16.2664ZM24.7185 16.2664C24.7185 19.7014 21.9339 22.486 18.4989 22.486C15.0639 22.486 12.2793 19.7014 12.2793 16.2664C12.2793 12.8314 15.0639 10.0468 18.4989 10.0468C21.9339 10.0468 24.7185 12.8314 24.7185 16.2664Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `33`,
    height: `32`,
    viewBox: `0 0 33 32`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`defs`, {
        children: (0, _.jsxs)(`filter`, {
          _: `SoftGlow`,
          height: `300%`,
          width: `300%`,
          _: `-75%`,
          _: `-75%`,
          children: [
            (0, _.jsx)(`feMorphology`, {
              operator: `dilate`,
              radius: `2`,
              _: `SourceAlpha`,
              result: `thicken`,
            }),
            (0, _.jsx)(`feGaussianBlur`, {
              _: `thicken`,
              stdDeviation: `5`,
              result: `blurred`,
            }),
            (0, _.jsx)(`feFlood`, {
              floodColor: `rgba(55, 75, 148, .7)`,
              result: `glowColor`,
            }),
            (0, _.jsx)(`feComposite`, {
              _: `glowColor`,
              in2: `blurred`,
              operator: `in`,
              result: `SoftGlow_colored`,
            }),
            (0, _.jsxs)(`feMerge`, {
              children: [
                (0, _.jsx)(`feMergeNode`, {
                  _: `SoftGlow_colored`,
                }),
                (0, _.jsx)(`feMergeNode`, {
                  _: `SourceGraphic`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, _.jsx)(`path`, {
        fill: `none`,
        strokeWidth: `.6px`,
        _: `M31.9861 26.8551C32.2029 26.8551 32.3783 27.0254 32.3783 27.2355V29.2195C32.3783 29.4295 32.2029 29.5998 31.9861 29.5998H1.39223C1.17543 29.5998 1 29.4295 1 29.2195V27.2355C1 27.0254 1.17543 26.8551 1.39223 26.8551H3.20016V1.83469C3.20016 1.62465 3.37559 1.45435 3.59239 1.45435H10.1412C10.358 1.45435 10.5334 1.62465 10.5334 1.83469V5.05554H14.5097V1.83469C14.5097 1.62465 14.6851 1.45435 14.9019 1.45435H19.6631C19.8798 1.45435 20.0553 1.62465 20.0553 1.83469V4.18744L25.4729 3.22867C25.576 3.21139 25.6813 3.23257 25.7663 3.28995C25.8521 3.34734 25.9108 3.43537 25.9291 3.53454L30.1782 26.1126C30.2172 26.3193 30.0759 26.5175 29.8629 26.5552L28.1683 26.8551H31.9861ZM23.5066 22.6202L24.2874 26.7688L29.3362 25.8751L28.5555 21.7266L23.5066 22.6202ZM23.3657 21.8718L28.4147 20.9782L28.0604 19.0957L23.0114 19.989L23.3657 21.8718ZM27.9195 18.3472L25.2278 4.04525L20.1786 4.93891L22.8705 19.2406L27.9195 18.3472ZM20.0553 26.8551H23.5062L20.0553 8.51936V26.8551ZM19.2708 2.21503H15.2941V5.43589V26.8551H19.2708V2.21503ZM14.5097 26.8551V5.81623H10.5334V26.8551H14.5097ZM9.74893 10.38H3.98462V18.6904H9.74893V10.38ZM3.98462 9.6193H9.74893V7.41988H3.98462V9.6193ZM9.74893 19.451H3.98462V21.6503H9.74893V19.451ZM9.74893 5.43589V2.21503H3.98462V6.65919H9.74893V5.43589ZM9.74893 22.411H3.98462V26.8551H9.74893V22.411ZM1.78446 28.8391H31.5939V27.6158H19.6631H14.9019H10.1412H3.59239H1.78446V28.8391ZM13.6023 22.1066H11.4409C11.2241 22.1066 11.0486 21.9363 11.0486 21.7263C11.0486 21.5162 11.2241 21.3459 11.4409 21.3459H13.6023C13.8191 21.3459 13.9946 21.5162 13.9946 21.7263C13.9946 21.9363 13.8191 22.1066 13.6023 22.1066ZM11.4409 19.4512H13.6023C13.8191 19.4512 13.9946 19.2809 13.9946 19.0709C13.9946 18.8608 13.8191 18.6905 13.6023 18.6905H11.4409C11.2241 18.6905 11.0486 18.8608 11.0486 19.0709C11.0486 19.2809 11.2241 19.4512 11.4409 19.4512ZM18.3634 22.1066H16.2016C15.9848 22.1066 15.8093 21.9363 15.8093 21.7263C15.8093 21.5162 15.9848 21.3459 16.2016 21.3459H18.3634C18.5802 21.3459 18.7556 21.5162 18.7556 21.7263C18.7556 21.9363 18.5802 22.1066 18.3634 22.1066ZM16.2016 19.4512H18.3634C18.5802 19.4512 18.7556 19.2809 18.7556 19.0709C18.7556 18.8608 18.5802 18.6905 18.3634 18.6905H16.2016C15.9848 18.6905 15.8093 18.8608 15.8093 19.0709C15.8093 19.2809 15.9848 19.4512 16.2016 19.4512ZM4.80876 14.5352C4.80876 12.8573 5.71273 11.543 6.86643 11.543C8.02052 11.543 8.92449 12.8573 8.92449 14.5352C8.92449 16.2129 8.02052 17.5273 6.86643 17.5273C5.71273 17.5273 4.80876 16.2129 4.80876 14.5352ZM5.59322 14.5352C5.59322 15.7448 6.1762 16.7666 6.86643 16.7666C7.55666 16.7666 8.14003 15.7448 8.14003 14.5352C8.14003 13.3256 7.55666 12.3037 6.86643 12.3037C6.1762 12.3037 5.59322 13.3256 5.59322 14.5352Z`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    width: `23`,
    height: `23`,
    viewBox: `0 0 23 23`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M21.6537 6.60785H6.45296V21.836H21.6537V6.60785ZM5.66537 5.82026V22.6236H22.4413V5.82026H5.66537Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M3.8655 3.81134H19.0663V4.45177H19.8538V3.81134V3.02375H19.0663H3.8655H3.07791V3.81134V19.0395V19.8271H3.8655H4.50591V19.0395H3.8655V3.81134Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M1.27802 1.01483H16.4788V1.65525H17.2664V1.01483V0.227242H16.4788H1.27802H0.490433V1.01483V16.243V17.0305H1.27802H1.91844V16.243H1.27802V1.01483Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, `SVGIcon_Button`),
    width: `64`,
    height: `62`,
    viewBox: `0 0 64 62`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _,
    width: `22`,
    height: `22`,
    viewBox: `0 0 22 22`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M21 1L1 21`,
        strokeWidth: `2`,
      }),
      (0, _.jsx)(`path`, {
        _: `M0.999999 1L20 21`,
        strokeWidth: `2`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _,
    width: `59`,
    height: `59`,
    viewBox: `0 0 59 59`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `1.5`,
        _: `1.5`,
        width: `56`,
        height: `56`,
        _: `4`,
        strokeWidth: `1`,
        fillOpacity: `0.0`,
      }),
      (0, _.jsx)(`path`, {
        _: `M29.14 15.868C30.748 15.868 32.128 16.144 33.28 16.696C34.456 17.224 35.356 17.968 35.98 18.928C36.604 19.864 36.916 20.932 36.916 22.132C36.916 22.948 36.772 23.68 36.484 24.328C36.196 24.952 35.848 25.492 35.44 25.948C35.032 26.38 34.468 26.932 33.748 27.604C32.956 28.3 32.308 28.924 31.804 29.476C31.3 30.028 30.868 30.724 30.508 31.564C30.172 32.38 30.004 33.34 30.004 34.444H27.088C27.088 33.004 27.268 31.78 27.628 30.772C28.012 29.764 28.468 28.96 28.996 28.36C29.548 27.736 30.232 27.076 31.048 26.38C31.888 25.636 32.5 24.988 32.884 24.436C33.292 23.884 33.496 23.212 33.496 22.42C33.496 21.268 33.064 20.356 32.2 19.684C31.336 19.012 30.16 18.676 28.672 18.676C26.608 18.676 24.736 19.336 23.056 20.656L21.76 18.244C22.696 17.524 23.8 16.948 25.072 16.516C26.368 16.084 27.724 15.868 29.14 15.868ZM28.564 37.288C29.26 37.288 29.812 37.504 30.22 37.936C30.628 38.344 30.832 38.908 30.832 39.628C30.832 40.348 30.628 40.912 30.22 41.32C29.812 41.728 29.26 41.932 28.564 41.932C27.892 41.932 27.352 41.728 26.944 41.32C26.536 40.912 26.332 40.348 26.332 39.628C26.332 38.908 26.536 38.344 26.944 37.936C27.352 37.504 27.892 37.288 28.564 37.288Z`,
        fill: ``,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _,
    width: `49`,
    height: `53`,
    viewBox: `0 0 49 53`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M48.3765 33.45C47.1427 38.7688 44.1478 43.5146 39.8778 46.9174C35.6078 50.3201 30.3132 52.1801 24.8531 52.1956C23.0011 52.1943 21.1552 51.9821 19.3511 51.5633C14.4369 50.4243 10.0013 47.7787 6.66379 43.9961C3.32632 40.2135 1.25375 35.4829 0.735641 30.4651C0.708708 30.2012 0.787709 29.9374 0.955263 29.7318C1.12282 29.5261 1.3652 29.3955 1.62909 29.3685C1.89298 29.3416 2.15676 29.4206 2.36241 29.5882C2.56805 29.7557 2.69871 29.9981 2.72564 30.262C3.1115 34.01 4.44505 37.5981 6.60068 40.6883C8.75631 43.7786 11.6631 46.2693 15.0472 47.9258C18.4313 49.5824 22.1814 50.3503 25.9443 50.1571C29.7071 49.964 33.3589 48.8163 36.5556 46.822C39.0282 45.2791 41.1726 43.2644 42.8665 40.8927C44.5604 38.5211 45.7706 35.8391 46.428 32.9997C47.0854 30.1604 47.1771 27.2194 46.6978 24.3447C46.2186 21.4699 45.1779 18.7177 43.635 16.2451C42.0921 13.7726 40.0774 11.6282 37.7057 9.93425C35.3341 8.24035 32.6521 7.03016 29.8127 6.37279C24.0785 5.04515 18.0517 6.04982 13.0581 9.16578L8.53564 11.9879L17.0203 12.8514C17.2749 12.8779 17.5096 13.0011 17.6761 13.1955C17.8426 13.3899 17.9282 13.6407 17.9153 13.8964C17.9024 14.152 17.792 14.3929 17.6068 14.5696C17.4216 14.7463 17.1757 14.8452 16.9197 14.846C16.8855 14.8461 16.8512 14.8443 16.8171 14.8406L5.42564 13.6814C5.40474 13.6793 5.38834 13.6669 5.36784 13.6635C5.32663 13.6572 5.28587 13.6482 5.24584 13.6366C5.22414 13.6302 5.20214 13.6328 5.18054 13.6248C5.15644 13.6159 5.14054 13.5965 5.11764 13.586C5.03876 13.5541 4.96583 13.5091 4.90194 13.4529C4.86699 13.4246 4.83401 13.394 4.80324 13.3612C4.77384 13.3299 4.74658 13.2967 4.72164 13.2618C4.70914 13.2442 4.69014 13.2346 4.67864 13.2161C4.66714 13.1976 4.66684 13.1761 4.65664 13.1575C4.63643 13.12 4.6187 13.0812 4.60354 13.0414C4.57364 12.9592 4.55279 12.8741 4.54134 12.7874C4.53787 12.7449 4.5372 12.7022 4.53934 12.6597C4.53994 12.6343 4.52934 12.6114 4.53214 12.5857C4.53434 12.5636 4.54714 12.5457 4.55074 12.5245C4.55755 12.4833 4.56704 12.4426 4.57914 12.4026C4.58524 12.382 4.58124 12.3611 4.58914 12.3406L8.55334 1.59938C8.64516 1.35049 8.83209 1.14827 9.07301 1.0372C9.1923 0.982204 9.32125 0.951243 9.45251 0.946084C9.58377 0.940926 9.71475 0.96167 9.83799 1.00713C9.96123 1.0526 10.0743 1.12189 10.1708 1.21105C10.2672 1.30022 10.3452 1.40751 10.4002 1.5268C10.4552 1.64609 10.4861 1.77505 10.4913 1.9063C10.4964 2.03756 10.4757 2.16854 10.4302 2.29178L7.47744 10.2918L11.9995 7.46998C16.0588 4.93676 20.7781 3.66416 25.5607 3.81312C30.3433 3.96208 34.9742 5.52591 38.868 8.30684C42.7618 11.0878 45.7434 14.9609 47.436 19.4364C49.1285 23.912 49.4558 28.7889 48.3765 33.4505V33.45ZM14.7565 39.346L25.4126 28.6897C25.6002 28.5022 25.7056 28.2479 25.7056 27.9827V17.0784C25.7056 16.8132 25.6003 16.5588 25.4127 16.3713C25.2252 16.1837 24.9709 16.0784 24.7056 16.0784C24.4404 16.0784 24.1861 16.1837 23.9985 16.3713C23.811 16.5588 23.7056 16.8132 23.7056 17.0784V27.5684L13.3423 37.9319C13.2475 38.0243 13.1721 38.1346 13.1202 38.2565C13.0684 38.3783 13.0413 38.5092 13.0404 38.6416C13.0396 38.7739 13.0651 38.9052 13.1153 39.0276C13.1656 39.1501 13.2397 39.2614 13.3333 39.355C13.4269 39.4486 13.5382 39.5227 13.6607 39.573C13.7831 39.6233 13.9144 39.6487 14.0468 39.6479C14.1792 39.647 14.3101 39.6199 14.4319 39.5681C14.5537 39.5163 14.664 39.4408 14.7564 39.346H14.7565Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _,
    width: `47`,
    height: `22`,
    viewBox: `0 0 47 22`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M36.4525 0.983032C34.3364 0.983032 32.2684 1.65634 30.5371 2.90676C30.4409 2.95486 29.9599 3.3396 29.9599 3.38769L23.7078 8.48558L17.5038 3.43579C17.3595 3.3396 16.3976 2.57011 16.1091 2.42583C14.5701 1.51206 12.7426 1.03113 10.915 1.03113C5.33619 1.03113 0.767334 5.59999 0.767334 11.1788C0.767334 16.7576 5.33619 21.3265 10.915 21.3265C13.0311 21.3265 15.0991 20.6532 16.8305 19.4028C16.9267 19.3547 17.4076 18.9699 17.4557 18.9218L23.7078 13.8239L29.9119 18.8737C30.0561 18.9699 31.0661 19.7394 31.3066 19.8837C32.8455 20.7975 34.6731 21.2784 36.5006 21.2784C42.0795 21.2784 46.6483 16.7095 46.6483 11.1307C46.6483 5.55189 42.0795 0.983032 36.4525 0.983032ZM14.4739 15.94C13.4159 16.7095 12.2135 17.1424 10.915 17.1424C7.64467 17.1424 4.95145 14.4491 4.95145 11.1788C4.95145 7.90846 7.64467 5.21524 10.915 5.21524C11.9731 5.21524 13.0311 5.5038 13.9449 6.03282C14.1373 6.12901 14.7144 6.56185 14.8106 6.65804L20.3894 11.1788C20.3894 11.1788 14.522 15.8919 14.4739 15.94ZM36.4525 17.1424C35.3945 17.1424 34.3364 16.8538 33.4227 16.3248C33.2303 16.2286 32.6532 15.7958 32.557 15.6996L26.9782 11.1788L32.8455 6.41757C33.9036 5.64808 35.1059 5.21524 36.4044 5.21524C39.6748 5.21524 42.368 7.90846 42.368 11.1788C42.368 14.4491 39.771 17.1424 36.4525 17.1424Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _,
    width: `29`,
    height: `28`,
    viewBox: `0 0 29 28`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M24.4232 4.36344C22.5002 2.44044 20.0502 1.13086 17.383 0.600287C14.7157 0.0697194 11.9511 0.342 9.43855 1.3827C6.92606 2.42339 4.77858 4.18576 3.2677 6.44695C1.75682 8.70813 0.950394 11.3666 0.950394 14.0861C0.950394 16.8056 1.75682 19.464 3.2677 21.7252C4.77858 23.9864 6.92606 25.7487 9.43855 26.7894C11.9511 27.8301 14.7157 28.1024 17.383 27.5718C20.0502 27.0413 22.5002 25.7317 24.4232 23.8087C25.7042 22.5343 26.7208 21.0193 27.4145 19.3507C28.1082 17.6822 28.4653 15.893 28.4653 14.0861C28.4653 12.2791 28.1082 10.4899 27.4145 8.82138C26.7208 7.15284 25.7042 5.63784 24.4232 4.36344ZM16.5334 21.3914H12.865V12.3164H16.5334V21.3914ZM14.6992 10.7874C14.3015 10.7874 13.9127 10.6695 13.5821 10.4485C13.2514 10.2274 12.9938 9.91333 12.8417 9.54584C12.6896 9.17835 12.65 8.77402 12.7278 8.38399C12.8056 7.99397 12.9973 7.63578 13.2787 7.35475C13.5601 7.07373 13.9186 6.88248 14.3087 6.80523C14.6988 6.72797 15.1031 6.76818 15.4704 6.92075C15.8377 7.07332 16.1514 7.33141 16.372 7.66235C16.5926 7.9933 16.71 8.38223 16.7094 8.77994C16.7094 9.0438 16.6574 9.30507 16.5564 9.54881C16.4553 9.79255 16.3072 10.014 16.1205 10.2004C15.9338 10.3869 15.7122 10.5347 15.4683 10.6354C15.2244 10.7361 14.9631 10.7878 14.6992 10.7874Z`,
      fill: ``,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _,
    width: `41`,
    height: `64`,
    viewBox: `0 0 41 64`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M30.4126 5.84583C28.4532 5.77501 26.5883 4.98584 25.1733 3.62868C22.883 1.43206 19.2764 1.40456 16.9529 3.566C15.5173 4.90142 13.6406 5.66206 11.6804 5.70299C8.50765 5.76924 5.93799 8.30001 5.82337 11.4714C5.75255 13.4308 4.96338 15.2956 3.60622 16.7107C1.4096 19.001 1.3821 22.6075 3.54354 24.9311C4.87896 26.3667 5.6396 28.2433 5.68053 30.2036C5.74678 33.3763 8.27755 35.946 11.4489 36.0606C13.4083 36.1314 15.2732 36.9206 16.6882 38.2778C18.9785 40.4744 22.5851 40.5019 24.9086 38.3404C26.3442 37.005 28.2209 36.2444 30.1811 36.2035C33.3539 36.1372 35.9235 33.6064 36.0382 30.4351C36.109 28.4757 36.8981 26.6108 38.2553 25.1958C40.4519 22.9055 40.4794 19.2989 38.318 16.9754C36.9826 15.5398 36.2219 13.6631 36.181 11.7029C36.1147 8.53011 33.584 5.96045 30.4126 5.84583ZM37.1808 11.682C37.1035 7.9792 34.1499 4.98025 30.4487 4.84648C28.7347 4.78453 27.1033 4.09418 25.8655 2.90697C23.1926 0.343378 18.9835 0.311283 16.2718 2.83381C15.016 4.00202 13.3743 4.6674 11.6595 4.70321C7.95674 4.78052 4.95779 7.73408 4.82402 11.4352C4.76207 13.1493 4.07172 14.7806 2.88451 16.0185C0.320917 18.6914 0.288821 22.9005 2.81135 25.6122C3.97955 26.868 4.64494 28.5097 4.68075 30.2245C4.75807 33.9272 7.71162 36.9262 11.4128 37.06C13.1268 37.1219 14.7582 37.8123 15.996 38.9995C18.669 41.5631 22.878 41.5952 25.5897 39.0726C26.8455 37.9044 28.4872 37.239 30.202 37.2032C33.9048 37.1259 36.9037 34.1724 37.0375 30.4712C37.0995 28.7572 37.7898 27.1258 38.977 25.888C41.5406 23.215 41.5727 19.006 39.0502 16.2943C37.882 15.0384 37.2166 13.3968 37.1808 11.682ZM31.4863 41.2401C31.4867 41.2404 31.487 41.2407 31.1669 41.6248L31.487 41.2407L31.6669 41.3906V41.6248V62.5728V63.4683L30.9046 62.9985L20.9309 56.8517L10.9573 62.9985L10.1949 63.4683V62.5728V41.6248V41.3555L10.4198 41.2073L10.6949 41.6248C10.4198 41.2073 10.42 41.2071 10.4203 41.2069L10.4209 41.2065L10.4222 41.2057L10.425 41.2039L10.4321 41.1993L10.4518 41.1873C10.4674 41.1779 10.4879 41.1661 10.5133 41.1524C10.5641 41.125 10.6344 41.0902 10.7241 41.0527C10.9034 40.9778 11.1598 40.8927 11.4906 40.8367C12.1557 40.724 13.1039 40.7318 14.3111 41.1525C14.7935 41.3206 15.3635 41.6156 15.9507 41.9446C16.2911 42.1353 16.6562 42.3485 17.0236 42.563L17.024 42.5632L17.0248 42.5637C17.2873 42.717 17.551 42.871 17.8076 43.0179C18.4375 43.3784 19.0498 43.7114 19.6033 43.955C20.1687 44.2038 20.6187 44.3343 20.9375 44.3385C21.205 44.3421 21.6162 44.2205 22.1636 43.9649C22.6946 43.7169 23.2892 43.3749 23.9047 43.0052C24.1025 42.8864 24.3034 42.7642 24.5044 42.642L24.5055 42.6413L24.5067 42.6406L24.5067 42.6405L24.5069 42.6405C24.9206 42.3888 25.3344 42.137 25.7213 41.9151C26.2933 41.587 26.855 41.2951 27.3286 41.1477C28.7347 40.7101 29.7388 40.6983 30.4172 40.8191C30.7557 40.8794 31.0083 40.9719 31.1846 41.0565C31.2726 41.0987 31.3409 41.1387 31.3909 41.1712C31.4159 41.1874 31.4363 41.2018 31.4523 41.2136C31.4603 41.2195 31.4671 41.2248 31.4729 41.2293L31.4808 41.2356L31.4841 41.2383L31.4856 41.2395L31.4863 41.2401ZM11.1949 41.9422V61.6774L20.6686 55.8387L20.9309 55.6771L21.1932 55.8387L30.6669 61.6774V41.9208C30.5682 41.8813 30.4282 41.8368 30.242 41.8037C29.7472 41.7156 28.9065 41.704 27.6258 42.1025C27.2665 42.2144 26.7877 42.4563 26.2189 42.7825C25.8428 42.9982 25.4485 43.2381 25.0417 43.4856L25.0415 43.4858L25.0399 43.4867C24.836 43.6108 24.629 43.7367 24.4195 43.8625C23.8009 44.234 23.1684 44.5994 22.5866 44.871C22.0212 45.135 21.4338 45.3452 20.9243 45.3385C20.3958 45.3315 19.7928 45.1309 19.2005 44.8703C18.5965 44.6045 17.9466 44.2496 17.3108 43.8857C17.0355 43.7281 16.7669 43.5712 16.504 43.4176C16.1468 43.209 15.8002 43.0066 15.4619 42.817C14.8778 42.4897 14.3743 42.2334 13.9821 42.0968C12.9316 41.7307 12.1539 41.7385 11.6576 41.8226C11.4625 41.8557 11.308 41.901 11.1949 41.9422ZM23.7901 8.68637C24.8582 9.71081 26.2659 10.3065 27.7449 10.36C29.879 10.4371 31.582 12.1663 31.6266 14.3013C31.6575 15.781 32.2316 17.1975 33.2397 18.2812C34.6941 19.8447 34.6756 22.2717 33.1975 23.8129C32.173 24.881 31.5774 26.2887 31.5239 27.7677C31.4468 29.9018 29.7176 31.6048 27.5826 31.6494C26.1029 31.6803 24.6863 32.2544 23.6027 33.2625C22.0391 34.7169 19.6122 34.6984 18.071 33.2203C17.0028 32.1958 15.5952 31.6002 14.1162 31.5467C11.9821 31.4696 10.2791 29.7404 10.2345 27.6054C10.2036 26.1257 9.62942 24.7091 8.62139 23.6255C7.16691 22.0619 7.18542 19.635 8.66357 18.0938C9.68801 17.0256 10.2837 15.618 10.3372 14.1389C10.4143 12.0049 12.1435 10.3019 14.2785 10.2573C15.7582 10.2264 17.1747 9.65222 18.2584 8.64419C19.8219 7.18971 22.2489 7.20821 23.7901 8.68637ZM27.781 9.36061C30.4449 9.45689 32.5707 11.6154 32.6264 14.2804C32.6521 15.5146 33.131 16.6962 33.9719 17.6001C35.7874 19.5518 35.7643 22.5812 33.9192 24.5051C33.0647 25.396 32.5678 26.5702 32.5232 27.8038C32.427 30.4677 30.2685 32.5935 27.6034 32.6492C26.3692 32.6749 25.1876 33.1538 24.2838 33.9946C22.332 35.8102 19.3026 35.7871 17.3788 33.942C16.4879 33.0875 15.3137 32.5906 14.08 32.546C11.4161 32.4498 9.29034 30.2913 9.23469 27.6262C9.20892 26.392 8.73001 25.2104 7.88921 24.3066C6.07363 22.3548 6.09673 19.3254 7.94186 17.4016C8.79635 16.5107 9.29322 15.3365 9.33781 14.1028C9.43409 11.4389 11.5926 9.31314 14.2576 9.25749C15.4918 9.23172 16.6734 8.75281 17.5773 7.912C19.529 6.09643 22.5584 6.11953 24.4823 7.96466C25.3732 8.81915 26.5474 9.31602 27.781 9.36061Z`,
      fill: `none`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _,
    width: `55`,
    height: `63`,
    viewBox: `0 0 55 63`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M47.7642 5.46737H43.3958V3.44632C43.3958 0.953685 42.3747 0 39.9495 0C37.4568 0 36.5032 1.02105 36.5032 3.44632V5.46737H17.5937V3.44632C17.5937 0.953685 16.5726 0 14.1474 0C11.6547 0 10.7011 1.02105 10.7011 3.44632V5.46737H6.33263C2.82947 5.46737 0 8.29684 0 11.8V56.6674C0 60.1705 2.82947 63 6.33263 63H47.7642C51.2674 63 54.0968 60.1705 54.0968 56.6674V11.8C54.0968 8.29684 51.2674 5.46737 47.7642 5.46737ZM1.62737 50.0758C2.62737 51.5 3.91789 52.2884 5.33263 52.2884H48.7642C50.1116 52.2884 51.1274 51.5 52.4021 50.1432V51.3453C52.4021 53.3663 50.7853 55.9832 48.7642 55.9832H5.33263C3.31158 55.9832 1.62737 53.3663 1.62737 51.3453V50.0758ZM52.4021 45.8884C52.4021 47.9095 50.7853 50.5263 48.7642 50.5263H5.33263C3.31158 50.5263 1.62737 47.9095 1.62737 45.8884V17.7958H52.4021V45.8884ZM38.1305 3.44632C38.1305 2.43579 38.9389 1.69474 39.8821 1.69474C40.8253 1.69474 41.6337 2.50316 41.6337 3.44632V6.62316C41.6337 7.63368 40.8253 8.37474 39.8821 8.37474C38.9389 8.37474 38.1305 7.56632 38.1305 6.62316V3.44632ZM12.3958 3.44632C12.3958 2.43579 13.2042 1.69474 14.1474 1.69474C15.0905 1.69474 15.8989 2.50316 15.8989 3.44632V6.62316C15.8989 7.63368 15.0905 8.37474 14.1474 8.37474C13.2042 8.37474 12.3958 7.56632 12.3958 6.62316V3.44632ZM5.33263 7.16211H10.7684C11.0379 9.38526 11.9242 10.1368 14.2147 10.1368C16.5053 10.1368 17.3916 9.38526 17.6611 7.16211H36.5705C36.84 9.38526 37.7263 10.1368 40.0168 10.1368C42.3074 10.1368 43.1937 9.38526 43.4632 7.16211H48.8989C50.92 7.16211 52.5368 9.77895 52.5368 11.8V16.1011H1.62737V11.8C1.62737 9.77895 3.24421 7.16211 5.33263 7.16211ZM48.7642 61.3053H6.33263C4.31158 61.3053 1.62737 58.6884 1.62737 56.6674V55.4653C2.62737 57.6779 4.91789 57.6779 6.33263 57.6779H48.7642C50.1116 57.6779 51.1274 57.5 52.4021 55.5326V56.7347C52.4021 58.6884 50.7853 61.3053 48.7642 61.3053Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M10.7159 34.7325H10.918C12.0632 34.7325 13.0064 33.7893 13.0064 32.644V32.4419C13.0064 31.2967 12.0632 30.3535 10.918 30.3535H10.7159C9.5706 30.3535 8.62744 31.2967 8.62744 32.4419V32.644C8.62744 33.8567 9.5706 34.7325 10.7159 34.7325Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M19.0694 34.7325H19.2715C20.4167 34.7325 21.3599 33.7893 21.3599 32.644V32.4419C21.3599 31.2967 20.4167 30.3535 19.2715 30.3535H19.0694C17.9241 30.3535 16.981 31.2967 16.981 32.4419V32.644C16.981 33.8567 17.9241 34.7325 19.0694 34.7325Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M27.4234 34.7325H27.6255C28.7708 34.7325 29.7139 33.7893 29.7139 32.644V32.4419C29.7139 31.2967 28.7708 30.3535 27.6255 30.3535H27.4234C26.2781 30.3535 25.335 31.2967 25.335 32.4419V32.644C25.335 33.8567 26.2781 34.7325 27.4234 34.7325Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M10.7159 26.3789H10.918C12.0632 26.3789 13.0064 25.4358 13.0064 24.2905V24.0884C13.0064 22.9432 12.0632 22 10.918 22H10.7159C9.5706 22 8.62744 22.9432 8.62744 24.0884V24.2905C8.62744 25.4358 9.5706 26.3789 10.7159 26.3789Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M19.0694 26.3789H19.2715C20.4167 26.3789 21.3599 25.4358 21.3599 24.2905V24.0884C21.3599 22.9432 20.4167 22 19.2715 22H19.0694C17.9241 22 16.981 22.9432 16.981 24.0884V24.2905C16.981 25.4358 17.9241 26.3789 19.0694 26.3789Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M27.4234 26.3789H27.6255C28.7708 26.3789 29.7139 25.4358 29.7139 24.2905V24.0884C29.7139 22.9432 28.7708 22 27.6255 22H27.4234C26.2781 22 25.335 22.9432 25.335 24.0884V24.2905C25.335 25.4358 26.2781 26.3789 27.4234 26.3789Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M35.7774 34.7325H35.9795C37.1248 34.7325 38.0679 33.7893 38.0679 32.644V32.4419C38.0679 31.2967 37.1248 30.3535 35.9795 30.3535H35.7774C34.6321 30.3535 33.689 31.2967 33.689 32.4419V32.644C33.689 33.8567 34.6321 34.7325 35.7774 34.7325Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M44.1309 34.7325H44.333C45.4783 34.7325 46.4214 33.7893 46.4214 32.644V32.4419C46.4214 31.2967 45.4783 30.3535 44.333 30.3535H44.1309C42.9856 30.3535 42.0425 31.2967 42.0425 32.4419V32.644C42.0425 33.8567 42.9856 34.7325 44.1309 34.7325Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M35.7774 26.3789H35.9795C37.1248 26.3789 38.0679 25.4358 38.0679 24.2905V24.0884C38.0679 22.9432 37.1248 22 35.9795 22H35.7774C34.6321 22 33.689 22.9432 33.689 24.0884V24.2905C33.689 25.4358 34.6321 26.3789 35.7774 26.3789Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M44.1309 26.3789H44.333C45.4783 26.3789 46.4214 25.4358 46.4214 24.2905V24.0884C46.4214 22.9432 45.4783 22 44.333 22H44.1309C42.9856 22 42.0425 22.9432 42.0425 24.0884V24.2905C42.0425 25.4358 42.9856 26.3789 44.1309 26.3789Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M10.7159 43.1534H10.918C12.0632 43.1534 13.0064 42.2102 13.0064 41.0649V40.8628C13.0064 39.7176 12.0632 38.7744 10.918 38.7744H10.7159C9.5706 38.7744 8.62744 39.7176 8.62744 40.8628V41.0649C8.62744 42.2102 9.5706 43.1534 10.7159 43.1534Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M19.0694 43.1534H19.2715C20.4167 43.1534 21.3599 42.2102 21.3599 41.0649V40.8628C21.3599 39.7176 20.4167 38.7744 19.2715 38.7744H19.0694C17.9241 38.7744 16.981 39.7176 16.981 40.8628V41.0649C16.981 42.2102 17.9241 43.1534 19.0694 43.1534Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M27.4234 43.1534H27.6255C28.7708 43.1534 29.7139 42.2102 29.7139 41.0649V40.8628C29.7139 39.7176 28.7708 38.7744 27.6255 38.7744H27.4234C26.2781 38.7744 25.335 39.7176 25.335 40.8628V41.0649C25.335 42.2102 26.2781 43.1534 27.4234 43.1534Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M35.7774 43.1534H35.9795C37.1248 43.1534 38.0679 42.2102 38.0679 41.0649V40.8628C38.0679 39.7176 37.1248 38.7744 35.9795 38.7744H35.7774C34.6321 38.7744 33.689 39.7176 33.689 40.8628V41.0649C33.689 42.2102 34.6321 43.1534 35.7774 43.1534Z`,
        fill: ``,
      }),
      (0, _.jsx)(`path`, {
        _: `M44.1309 43.1534H44.333C45.4783 43.1534 46.4214 42.2102 46.4214 41.0649V40.8628C46.4214 39.7176 45.4783 38.7744 44.333 38.7744H44.1309C42.9856 38.7744 42.0425 39.7176 42.0425 40.8628V41.0649C42.0425 42.2102 42.9856 43.1534 44.1309 43.1534Z`,
        fill: ``,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _,
    height: 100,
    width: 100,
    fill: `#fff`,
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 69 69`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M57.189 51.828H11.813a1 1 0 00-1 1v4.77a1 1 0 001 1h45.376a1 1 0 001-1v-4.77a1 1 0 00-1-1zm-1 4.77H12.813v-2.77h43.376v2.77z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M63.189 4.402H5.813a1 1 0 00-1 1L4.81 62.598H2.46a1 1 0 100 2h64.08a1 1 0 100-2h-2.35l-.001-57.196a1 1 0 00-1-1zm-56.376 2h55.376v39.426H43.584v-5.854h-7.556l2.448-2.48a.999.999 0 00.288-.702V18.915h2.062a1 1 0 100-2h-3.508v-3.775h1.32a1 1 0 100-2h-3.584v-.917a1 1 0 10-2 0v.917H29.47a1 1 0 100 2h1.32v3.775h-3.508a1 1 0 100 2h2.061v17.875c0 .242.087.474.245.656l2.195 2.527h-6.365v5.854H6.813V6.402zm25.977 6.74h2.528v3.774H32.79v-3.775zm-1.447 5.774h1.711v14.642a1 1 0 102 0V18.916h1.71v17.465l-2.9 2.94-2.52-2.904v-17.5zm10.241 23.058v3.834H27.418v-3.834h14.166zM6.81 62.598v-14.77h55.38v14.77H6.81z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `0px`,
    _: `0px`,
    width: `1400px`,
    height: `1409px`,
    viewBox: `0 1801.5 1400 1409`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `#FFFFFF`,
      _: `M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0
				c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294
				c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280
				c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941
				c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z
					M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0
				c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0
				c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647
				c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059
				S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _,
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 39 30`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `#06BFFF`,
        _: `M4 11.1947L8.70813 12.7135C9.35359 12.9033 9.84719 13.4349 10.075 14.0803L11.5937 18.7885L13.1125 14.0803C13.3023 13.4349 13.8339 12.9413 14.4794 12.7135L19.1875 11.1947L14.4794 9.67595C13.8339 9.48611 13.3403 8.95455 13.1125 8.30908L11.5937 3.60095L10.075 8.30908C9.88516 8.95455 9.35359 9.44814 8.70813 9.67595L4 11.1947Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M20 4.89423L22.439 5.67308C22.7799 5.77692 23.0422 6.03654 23.1471 6.37404L23.9339 8.78846L24.7206 6.37404C24.8255 6.03654 25.0878 5.77692 25.4287 5.67308L27.8677 4.89423L25.4287 4.11539C25.0878 4.01154 24.8255 3.75192 24.7206 3.41442L23.9339 1L23.1471 3.41442C23.0422 3.75192 22.7799 4.01154 22.439 4.11539L20 4.89423Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M26 27.9471L27.2326 28.3365C27.39 28.3885 27.5211 28.5183 27.5735 28.674L27.9669 29.8942L28.3603 28.674C28.4128 28.5183 28.5439 28.3885 28.7012 28.3365L29.9339 27.9471L28.7012 27.5577C28.5439 27.5058 28.4128 27.376 28.3603 27.2202L27.9669 26L27.5735 27.2202C27.5211 27.376 27.39 27.5058 27.2326 27.5577L26 27.9471Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M35 1.94711L36.2326 2.33654C36.39 2.38846 36.5211 2.51827 36.5735 2.67404L36.9669 3.89423L37.3603 2.67404C37.4128 2.51827 37.5439 2.38846 37.7012 2.33654L38.9339 1.94711L37.7012 1.55769C37.5439 1.50577 37.4128 1.37596 37.3603 1.22019L36.9669 8.59772e-08L36.5735 1.22019C36.5211 1.37596 36.39 1.50577 36.2326 1.55769L35 1.94711Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M13 21.9471L14.2326 22.3365C14.39 22.3885 14.5211 22.5183 14.5735 22.674L14.9669 23.8942L15.3603 22.674C15.4128 22.5183 15.5439 22.3885 15.7012 22.3365L16.9339 21.9471L15.7012 21.5577C15.5439 21.5058 15.4128 21.376 15.3603 21.2202L14.9669 20L14.5735 21.2202C14.5211 21.376 14.39 21.5058 14.2326 21.5577L13 21.9471Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M-8.51111e-08 15.8413L1.23261 16.2308C1.38996 16.2827 1.52109 16.4125 1.57354 16.5683L1.96693 17.7885L2.36031 16.5683C2.41276 16.4125 2.54389 16.2827 2.70125 16.2308L3.93386 15.8413L2.70125 15.4519C2.54389 15.4 2.41276 15.2702 2.36031 15.1144L1.96693 13.8942L1.57354 15.1144C1.52109 15.2702 1.38996 15.4 1.23261 15.4519L-8.51111e-08 15.8413Z`,
      }),
    ],
  });
}
var _ = `_2F92bYCXkiQ-`;
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    ..._,
  });
}
function _(_) {
  switch (_.community_item_class) {
    case 15:
    case 14:
    case 11:
      return _(_.appid, _.community_item_data.item_image_small);
    case 3:
      return `${_.COMMUNITY_BASE_URL}economy/profilebackground/items/${_.appid}/${_.community_item_data.item_image_large}?size=320x200`;
    default:
      return _(_.appid, _.community_item_data.item_image_large);
  }
}
var _ = `P-uJugMrRBU-`,
  _ = `yZEgjRn01E4-`,
  _ = `RNpLCYVXxkM-`,
  _ = `zUSOplRwSbY-`,
  _ = `Z4gOa4Hn72E-`,
  _ = `D8D5fq7YDxI-`,
  _ = `_9TnLmQSg-ik-`,
  _ = `_4CmAxBaC3jc-`,
  _ = `PETkxWNzwKY-`,
  _ = `wxQgMJIOoJI-`,
  _ = ({ value: _, className: _, ..._ }) =>
    (0, _.jsxs)(`div`, {
      className: _(_, _),
      ..._,
      children: [`-`, _, `%`],
    });
function _({ definition: _, theme: _, ..._ }) {
  let _ = [],
    { icon_url: _, name: _ } = _.GetAppInfo(_.appid),
    _ = _.internal_description,
    _ = _.Get().GetBundleOfferForUser(_);
  return {
    cost: _.point_cost,
    name: _,
    desc: _(`#RewardItemType_Bundle`),
    attributes: _,
    appIcon: _,
    appName: _,
    bundle: _,
    definition: _,
    ..._,
  };
}
var _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
    }),
  ),
  _ = _((_) => {
    let {
        appName: _,
        appIcon: _,
        bundle: _,
        definition: _,
        cost: _,
        name: _,
        desc: _,
        attributes: _,
        className: _,
        style: _,
        onClick: _,
        ..._
      } = _,
      _ = _(_);
    return (0, _.jsxs)(_, {
      display: `flex`,
      flexDirection: `column`,
      className: _(_, _),
      style: {
        ..._,
        width: `524px`,
      },
      onActivate: _,
      ..._,
      children: [
        _ &&
          (0, _.jsx)(`img`, {
            title: _,
            src: _,
            className: `h6Yv2ERSlls-`,
          }),
        (0, _.jsx)(_, {
          flex: `1`,
          style: {
            width: `484px`,
            height: `200px`,
            margin: `0 30px`,
            position: `relative`,
            alignSelf: `center`,
          },
          children: (0, _.jsx)(_, {
            items: _.items,
            visible: 5,
            width: 464,
            cardSize: 90,
            offer: _,
          }),
        }),
        (0, _.jsx)(_, {
          label: _,
          count: _.items.length,
          cost: _,
          discount: _.discount,
        }),
      ],
    });
  }),
  _ = ({ cost: _, discount: _, label: _, count: _ }) => {
    let _ = `${_} (${_})`;
    return (0, _.jsxs)(_, {
      padding: `small`,
      display: `flex`,
      alignItems: `center`,
      flexDirection: `row`,
      className: _,
      title: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        _ === 0
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`span`, {
                  className: _,
                  children: _(`#Redeem_BundleItemOwned`),
                }),
                (0, _.jsx)(_, {
                  className: _,
                }),
              ],
            })
          : (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  value: _,
                  className: _,
                }),
                (0, _.jsx)(_, {
                  amount: _,
                }),
              ],
            }),
      ],
    });
  };
function _(_, _, _) {
  if (_.length <= _) return _;
  let _ = _.filter((_) => !_.mapItemOwnership.get(_.defid)).slice(0, _);
  if (_.length < _) {
    let _ = _.filter((_) => _.mapItemOwnership.get(_.defid)).slice(
      0,
      _ - _.length,
    );
    return _.concat(_);
  }
  return _;
}
var _ = _((_) => {
  let { offer: _, items: _, visible: _, width: _, cardSize: _ } = _,
    _ = _(_, _, _);
  return (0, _.jsx)(`div`, {
    style: {
      position: `relative`,
    },
    className: _,
    children: _.map((_, _) =>
      (0, _.jsxs)(
        _,
        {
          style: _(_, _.length, _, _, _),
          children: [
            _.mapItemOwnership.get(_.defid) &&
              (0, _.jsx)(_, {
                className: _(`P-uJugMrRBU-`, `Vz33AL0DVvI-`),
              }),
            (0, _.jsx)(`img`, {
              src: _(_),
              className: _,
            }),
          ],
        },
        `${_.defid}_${_}`,
      ),
    ),
  });
});
function _(_, _, _, _, _) {
  let _ = 0.42,
    _ = _ - (_ * (Math.sin(_) + Math.cos(_)) - _),
    _ = Math.min(_, _ / _),
    _ = ((_ - _) / 2) * _,
    _ = _ * _ + _,
    _ = (_ - 1) / 2;
  return {
    position: `absolute`,
    transformOrigin: `center`,
    transform: `translateX(${_}px) translateY(${((_ - _) ** 2 * 30) / (_ * _)}px) rotate(${((_ * 2) / (_ - 1)) * _ - _}rad)`,
    width: `${_}px`,
    height: `${_}px`,
  };
}
var _ = (_) =>
  (0, _.jsx)(_, {
    padding: `small`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    ..._,
    className: _,
  });
function _(_) {
  let _ = _(() => _.GetAppInfo(_.appid));
  switch (_.type) {
    case 6:
      return _(`#RewardBundle_AutoGeneratedBundleName`, _.name);
    case 5:
      return _.community_item_data?.item_title ?? ``;
    default:
      return (
        console.error(
          `Cannot derive bundle title for definition ${_.defid} with type ${_.type}`,
        ),
        ``
      );
  }
}
var _ = `wJ7tG71dGWI-`,
  _ = `D9Lhl0fINNM-`,
  _ = `w4Ns8kKfPEg-`,
  _ = `-UwRlcE3bd8-`,
  _ = `_-1i65Y-zB8I-`,
  _ = `LJkqBse2ao8-`,
  _ = `nuIgWzivalM-`,
  _ = `up5bDknAAfk-`,
  _ = `yu4-si75KQE-`,
  _ = `y7wLLLq2IME-`,
  _ = `AWlvgEVBunk-`,
  _ = `K4wVYqct6f8-`,
  _ = `iawjH7Rw-a0-`,
  _ = ({ src: _ }) =>
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
        (0, _.jsx)(`div`, {
          className: _,
        }),
      ],
    }),
  _ = ({ theme: _ }) =>
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, _),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
        }),
        (0, _.jsx)(`div`, {
          className: _,
        }),
      ],
    }),
  _ = _({
    BlueRedTheme: () => _,
    BurntOrangeTheme: () => _,
    ColorNightmareTheme: () => _,
    CosmicTheme: () => _,
    DarkModeTheme: () => _,
    DefaultTheme: () => _,
    FlatGreyTheme: () => _,
    GhostTheme: () => _,
    GoldBurgundyTheme: () => _,
    GoldTheme: () => _,
    GoldenProfileDebutTheme: () => _,
    GoldenWeekProfile2021Theme: () => _,
    GreenSlimeTheme: () => _,
    Lunar2022Theme: () => _,
    MidnightTheme: () => _,
    MurugiahTheme: () => _,
    MutedBlueTheme: () => _,
    MutedRedTheme: () => _,
    PinkTealTheme: () => _,
    PurpleTheme: () => _,
    SteamDeckTheme: () => _,
    SteamGreenTheme: () => _,
    SteelTheme: () => _,
    Summer2021Theme: () => _,
    SummerTheme: () => _,
    VibrantBlueTheme: () => _,
    Winter2021Theme: () => _,
    WinterProfile2020Theme: () => _,
    default: () => _,
  }),
  _ = `_29uIKY6HXVk-`,
  _ = `qYxOfyXHDsA-`,
  _ = `fZf6-fp5PGw-`,
  _ = `_0qcWfIeqxHg-`,
  _ = `EGTYGHd0kkw-`,
  _ = `RHL-SU2yops-`,
  _ = `WT8fRbo2yOY-`,
  _ = `nCpY1W72MW4-`,
  _ = `-fxY9plRjng-`,
  _ = `MqvIQAdSgiA-`,
  _ = `_0bZPPKROH7E-`,
  _ = `mDUaEVQckdI-`,
  _ = `n6Dil7HsC4g-`,
  _ = `sqrA6WBozlQ-`,
  _ = `kU6APp51-8g-`,
  _ = `_-0Cg7RgIZtw-`,
  _ = `jSWzo2CPn5k-`,
  _ = `Wjs2GRZGgn4-`,
  _ = `C4-FzVpDsKA-`,
  _ = `VcxeAZeDRVU-`,
  _ = `-sbfakNdtMs-`,
  _ = `ZVQG3mT-ouk-`,
  _ = `Ar7x0bGD5F4-`,
  _ = `-T3gxQCuMyk-`,
  _ = `S80cuaoieJE-`,
  _ = `NkgHTDHRSZI-`,
  _ = `cNnWTpLutW8-`,
  _ = `yxQHh-wmkgM-`,
  _ = {
    DefaultTheme: _,
    CosmicTheme: _,
    SummerTheme: _,
    MidnightTheme: _,
    DarkModeTheme: _,
    SteelTheme: _,
    PinkTealTheme: _,
    MutedRedTheme: _,
    SteamGreenTheme: _,
    BlueRedTheme: _,
    GoldBurgundyTheme: _,
    VibrantBlueTheme: _,
    GoldenProfileDebutTheme: _,
    WinterProfile2020Theme: _,
    GoldenWeekProfile2021Theme: _,
    Summer2021Theme: _,
    MutedBlueTheme: _,
    GoldTheme: _,
    BurntOrangeTheme: _,
    FlatGreyTheme: _,
    PurpleTheme: _,
    GreenSlimeTheme: _,
    GhostTheme: _,
    ColorNightmareTheme: _,
    MurugiahTheme: _,
    Winter2021Theme: _,
    Lunar2022Theme: _,
    SteamDeckTheme: _,
  };
function _({ definition: _, theme: _, ..._ }) {
  let _ = [],
    { icon_url: _, name: _ } = _.GetAppInfo(_.appid),
    _ = _.Get().BRewardOwnedByUser(_),
    _ = _.community_item_data.item_title,
    _ = _.Get().GetBundleOfferForUser(_);
  return {
    cost: parseInt(_.point_cost),
    name: _,
    desc: _(`#RewardItemType_ProfileBundle`),
    attributes: _,
    appIcon: _,
    appName: _,
    bundle: _,
    definition: _,
    bOwned: _,
    ..._,
  };
}
var _ = _.createContext(!1);
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: !0,
    children: _.children,
  });
}
var _ = _((_) => {
    let _ = _(),
      _ = _(_);
    return _
      ? (0, _.jsx)(_, {
          ..._,
        })
      : (0, _.jsx)(_, {
          ..._,
        });
  }),
  _ = _((_) => {
    let {
        appName: _,
        appIcon: _,
        bundle: _,
        definition: _,
        cost: _,
        bOwned: _,
        name: _,
        desc: _,
        attributes: _,
        className: _,
        style: _,
        ..._
      } = _,
      _ = _.community_item_data.item_title;
    return (0, _.jsx)(_, {
      name: _,
      cost: _,
      attributes: _,
      appIcon: _,
      iconComponent: _,
      desc: _,
      className: _,
      appName: _,
      ..._,
      children: (0, _.jsx)(`img`, {
        src: _(_),
        style: {
          width: `100%`,
          height: `100%`,
        },
      }),
    });
  }),
  _ = _((_) => {
    let {
        appName: _,
        appIcon: _,
        bundle: _,
        definition: _,
        cost: _,
        bOwned: _,
        name: _,
        desc: _,
        attributes: _,
        className: _,
        style: _,
        onClick: _,
        ..._
      } = _,
      _ = _.community_item_data.item_title,
      _ = _.community_item_data.profile_theme_id;
    return (0, _.jsxs)(_, {
      display: `flex`,
      flexDirection: `column`,
      className: _(_, _),
      style: {
        ..._,
        width: `524px`,
      },
      onActivate: _,
      ..._,
      children: [
        _ &&
          (0, _.jsx)(`img`, {
            title: _,
            src: _,
            className: `CJilvGwH2LM-`,
          }),
        (0, _.jsxs)(_, {
          flex: `1`,
          style: {
            width: `524px`,
            height: `200px`,
            position: `relative`,
            alignSelf: `center`,
          },
          children: [
            _ &&
              (0, _.jsx)(_, {
                theme: _[`${_}Theme`],
              }),
            (0, _.jsx)(_, {
              items: _.items,
              offer: _,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          label: _,
          cost: _,
          bOwned: _,
        }),
      ],
    });
  }),
  _ = ({ cost: _, label: _, bOwned: _ }) =>
    (0, _.jsxs)(_, {
      padding: `small`,
      display: `flex`,
      alignItems: `center`,
      flexDirection: `row`,
      className: _,
      title: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`span`, {
                  className: _,
                  children: _(`#Redeem_BundleItemOwned`),
                }),
                (0, _.jsx)(_, {
                  className: _,
                }),
              ],
            })
          : (0, _.jsx)(_.Fragment, {
              children: (0, _.jsx)(_, {
                amount: _,
              }),
            }),
      ],
    });
function _(_, _) {
  let _ = _.filter((_) => _.community_item_class == _).slice(0, 1);
  return _.length == 1 ? _[0] : null;
}
var _ = _((_) => {
    let { offer: _, items: _ } = _,
      _ = _(_, 15),
      _ = _(_, 14),
      _ = _(_, 13),
      _ = _(_, 3);
    return (0, _.jsxs)(`div`, {
      style: {
        position: `relative`,
      },
      className: _,
      children: [
        _ &&
          (0, _.jsx)(_, {
            item: _,
            offer: _,
            className: `_1SUzzzR7SM4-`,
          }),
        _ &&
          (0, _.jsx)(_, {
            item: _,
            offer: _,
            className: `lhtSjfOW9G4-`,
          }),
        _ &&
          (0, _.jsx)(_, {
            item: _,
            offer: _,
            className: `KhoqTf141WA-`,
          }),
        _ &&
          (0, _.jsx)(_, {
            item: _,
            offer: _,
            className: `dnDfbO-Clq0-`,
          }),
      ],
    });
  }),
  _ = _((_) => {
    let { offer: _, item: _, className: _, ..._ } = _,
      _ = _.community_item_class == 14;
    return (0, _.createElement)(
      _,
      {
        padding: `none`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        ..._,
        className: _(_, _),
        key: _.defid,
      },
      _ &&
        (0, _.jsx)(`img`, {
          className: `B-zwS-uXnfQ-`,
          src:
            _.MEDIA_CDN_COMMUNITY_URL +
            `images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg`,
        }),
      (0, _.jsx)(`img`, {
        src: _(_),
        className: _,
        style: _
          ? {
              zIndex: 1,
            }
          : void 0,
      }),
    );
  }),
  _ = {
    colors: {
      bodygradient: void 0,
      background: void 0,
    },
  };
function _({ definition: _, ..._ }) {
  _.community_item_data || console.log(_);
  let _ = _(_.appid, _.community_item_data.item_image_large);
  _.community_item_class == 3 &&
    (_ =
      _.COMMUNITY_CDN_URL +
      `economy/profilebackground/items/` +
      _.appid +
      `/` +
      _.community_item_data.item_image_large +
      `?size=320x200`);
  let _ = [];
  _.community_item_data.animated &&
    _.push(
      (0, _.jsx)(
        _,
        {
          className: _,
        },
        `animated`,
      ),
    );
  let { icon_url: _, name: _ } = _.GetAppInfo(_.appid),
    _ = _.community_item_data.item_title
      ? _.community_item_data.item_title
      : _.community_item_data.item_name;
  return {
    cost: parseInt(_.point_cost),
    name: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      style: {
        backgroundImage: `url(${_})`,
      },
    }),
    attributes: _,
    desc: _(_.community_item_class),
    appIcon: _,
    appName: _,
    ..._,
  };
}
var _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      children: (_) => {
        let {
            definition: {
              appid: _,
              community_item_data: { item_image_large: _, item_image_small: _ },
            },
          } = _,
          _ = _(_, _ ? _ : _);
        return (0, _.jsx)(`img`, {
          className: _,
          src: _,
        });
      },
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      children: (0, _.jsx)(`img`, {
        className: _,
        src: _(
          _.definition.appid,
          _.definition.community_item_data.item_image_large,
        ),
      }),
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
    }),
  ),
  _ = _((_) =>
    _.definition.community_item_data.animated
      ? (0, _.jsx)(_, {
          ..._,
        })
      : _.definition.community_item_data.tiled
        ? (0, _.jsx)(_, {
            ..._,
          })
        : (0, _.jsx)(_, {
            ..._,
          }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      className: void 0,
      ..._(_),
      iconComponent: _,
      styleOverride: _,
      videoProps: {
        className: _,
        poster:
          _.COMMUNITY_CDN_URL +
          `economy/profilebackground/items/` +
          _.definition.appid +
          `/` +
          _.definition.community_item_data.item_image_large +
          `?size=320x200`,
      },
      children: (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`source`, {
            src: _(
              _.definition.appid,
              _.definition.community_item_data.item_movie_webm_small
                ? _.definition.community_item_data.item_movie_webm_small
                : _.definition.community_item_data.item_movie_webm,
            ),
            type: `video/webm`,
          }),
          (0, _.jsx)(`source`, {
            src: _(
              _.definition.appid,
              _.definition.community_item_data.item_movie_mp4_small
                ? _.definition.community_item_data.item_movie_mp4_small
                : _.definition.community_item_data.item_movie_mp4,
            ),
            type: `video/mp4`,
          }),
        ],
      }),
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      styleOverride: _,
      children: (0, _.jsx)(`img`, {
        className: _,
        src:
          _.COMMUNITY_CDN_URL +
          `economy/profilebackground/items/` +
          _.definition.appid +
          `/` +
          _.definition.community_item_data.item_image_large +
          `?size=320x200`,
      }),
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      children: (0, _.jsx)(`img`, {
        className: _,
        src:
          _.COMMUNITY_CDN_URL +
          `economy/profilebackground/items/` +
          _.definition.appid +
          `/` +
          _.definition.community_item_data.item_image_large,
      }),
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      videoProps: {
        className: _,
        poster: _(
          _.definition.appid,
          _.definition.community_item_data.item_image_large,
        ),
      },
      children: (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`source`, {
            src: _(
              _.definition.appid,
              _.definition.community_item_data.item_movie_webm_small
                ? _.definition.community_item_data.item_movie_webm_small
                : _.definition.community_item_data.item_movie_webm,
            ),
            type: `video/webm`,
          }),
          (0, _.jsx)(`source`, {
            src: _(
              _.definition.appid,
              _.definition.community_item_data.item_movie_mp4_small
                ? _.definition.community_item_data.item_movie_mp4_small
                : _.definition.community_item_data.item_movie_mp4,
            ),
            type: `video/mp4`,
          }),
        ],
      }),
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      children: (_) => {
        let {
            definition: {
              appid: _,
              community_item_data: { item_image_large: _, item_image_small: _ },
            },
          } = _,
          _ = _(_, _ ? _ : _);
        return (0, _.jsx)(`img`, {
          className: _,
          src: _,
        });
      },
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      children: (_) => {
        let {
            definition: {
              appid: _,
              community_item_data: { item_image_large: _, item_image_small: _ },
            },
          } = _,
          _ = _(_, _ ? _ : _);
        return (0, _.jsx)(`img`, {
          className: _,
          src: _,
        });
      },
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      desc: _(8),
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      children: (0, _.jsx)(`img`, {
        className: _,
        src: _(
          _.definition.appid,
          _.definition.community_item_data.item_image_small,
        ),
      }),
    }),
  ),
  _ = _((_) =>
    (0, _.jsx)(_, {
      ..._(_),
      iconComponent: _,
      videoProps: {
        className: _,
        poster: _(
          _.definition.appid,
          _.definition.community_item_data.item_image_large,
        ),
      },
      children: (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`source`, {
            src: _(
              _.definition.appid,
              _.definition.community_item_data.item_movie_webm_small
                ? _.definition.community_item_data.item_movie_webm_small
                : _.definition.community_item_data.item_movie_webm,
            ),
            type: `video/webm`,
          }),
          (0, _.jsx)(`source`, {
            src: _(
              _.definition.appid,
              _.definition.community_item_data.item_movie_mp4_small
                ? _.definition.community_item_data.item_movie_mp4_small
                : _.definition.community_item_data.item_movie_mp4,
            ),
            type: `video/mp4`,
          }),
        ],
      }),
    }),
  ),
  _ = class extends _.Component {
    m_ref = _.createRef();
    state = {
      bVisible: !1,
    };
    render() {
      let { children: _, videoProps: _, ..._ } = this.props;
      return (0, _.jsxs)(_, {
        ..._,
        children: [
          (0, _.jsx)(_, {
            trigger: `repeated`,
            onVisibilityChange: (_) => this.HandleVisibilityChange(_),
            className: _,
          }),
          (0, _.jsx)(`video`, {
            playsInline: !0,
            loop: !0,
            muted: !0,
            autoPlay: !0,
            controls: !1,
            ..._,
            ref: this.m_ref,
            children: this.state.bVisible && _,
          }),
        ],
      });
    }
    m_playPromise = null;
    m_bShouldContinuePlaying = !0;
    HandleVisibilityChange(_) {
      (this.m_ref.current &&
        (this.m_playPromise
          ? (this.m_bShouldContinuePlaying = _)
          : _
            ? ((this.m_playPromise = this.m_ref.current.play()),
              this.m_playPromise &&
                (this.m_playPromise.then(() => {
                  (!this.m_bShouldContinuePlaying &&
                    this.m_ref.current &&
                    this.m_ref.current.pause(),
                    (this.m_playPromise = null));
                }),
                (this.m_bShouldContinuePlaying = !0)))
            : this.m_ref.current.pause()),
        this.setState({
          bVisible: _,
        }));
    }
  },
  _ = class extends _.Component {
    state = {
      bHover: !1,
    };
    render() {
      let { children: _, ..._ } = this.props;
      return (0, _.jsx)(_, {
        ..._,
        onMouseEnter: () =>
          this.setState({
            bHover: !0,
          }),
        onMouseLeave: () =>
          this.setState({
            bHover: !1,
          }),
        children: _(this.state.bHover || !0),
      });
    }
  },
  _ = (_) => {
    let {
        appName: _,
        appIcon: _,
        attributes: _,
        children: _,
        cost: _,
        iconComponent: _,
        name: _,
        desc: _,
        className: _,
        style: _,
        theme: _,
        styleOverride: _,
        strPriceOverride: _,
        itemLevel: _,
        purchaseable: _ = !0,
        ..._
      } = _,
      _ = _,
      _ = {
        background: (_ || _).colors.bodygradient,
      },
      _ = {
        background: (_ || _).colors.background,
      },
      _ = {
        fill: ``,
      };
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(_, {
        ..._,
        className: _(_, _, _),
        style: _,
        children: [
          (0, _.jsxs)(_, {
            className: _,
            style: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              (0, _.jsx)(_, {
                src: _,
                title: _,
              }),
              !_ &&
                (0, _.jsxs)(`div`, {
                  className: `DUSmJBdqTGI-`,
                  children: [
                    (0, _.jsx)(_, {
                      className: `xrjlAEljqvo-`,
                    }),
                    (0, _.jsx)(_, {
                      className: `l1z37S64KIQ-`,
                    }),
                  ],
                }),
              _,
            ],
          }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  flex: 1,
                  paddingBottom: `10px`,
                },
                children: (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _,
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        _ &&
                          (0, _.jsx)(_, {
                            className: `sr7VwLZ2FLM-`,
                            style: _,
                          }),
                        (0, _.jsxs)(`div`, {
                          className: _,
                          children: [_, ` `],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              _ &&
                (0, _.jsxs)(`div`, {
                  className: `EOr2spguwlI-`,
                  children: [
                    (0, _.jsx)(_, {
                      className: `xrjlAEljqvo-`,
                    }),
                    (0, _.jsx)(_, {
                      className: `l1z37S64KIQ-`,
                    }),
                    (0, _.jsx)(`div`, {
                      className: `kDSqz49I5Hw-`,
                      children:
                        _ ??
                        (0, _.jsx)(_, {
                          amount: _,
                        }),
                    }),
                  ],
                }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
    });
  },
  _ = (_) => {
    let {
        appName: _,
        appIcon: _,
        attributes: _,
        children: _,
        cost: _,
        iconComponent: _,
        name: _,
        desc: _,
        className: _,
        style: _,
        theme: _,
        styleOverride: _,
        strPriceOverride: _,
        itemLevel: _,
        ..._
      } = _,
      _ = _,
      _ = {
        background: (_ || _).colors.bodygradient,
      },
      _ = {
        background: (_ || _).colors.background,
      },
      _ = {
        fill: ``,
      };
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(_, {
        ..._,
        className: _(_, _, _),
        style: _,
        children: [
          (0, _.jsxs)(_, {
            className: _,
            style: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              (0, _.jsx)(_, {
                src: _,
                title: _,
              }),
              _,
            ],
          }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  flex: 1,
                },
                children: (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _,
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        _ &&
                          (0, _.jsx)(_, {
                            className: `sr7VwLZ2FLM-`,
                            style: _,
                          }),
                        (0, _.jsxs)(`div`, {
                          className: _,
                          children: [_, ` `],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    className: _,
                  }),
                  (0, _.jsx)(_, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children:
                      _ ??
                      (0, _.jsx)(_, {
                        amount: _,
                      }),
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
    });
  },
  _ = {
    11: _,
    4: _,
    12: _,
    3: _,
    13: _,
    8: _,
    14: _,
    15: _,
    16: _,
    17: _,
  },
  _ = _((_) => {
    let { className: _, ..._ } = _,
      _ = _.Get().BRewardOwnedByUser(_.definition),
      _ = _(_, _ && `U3HcGFQg9ak-`);
    if (_.definition.type == 5 || _.definition.type == 6)
      return (0, _.jsx)(_, {
        fallback: null,
        children: (0, _.jsx)(_, {
          ..._,
          className: _,
          onClick: _.onClick,
        }),
      });
    if (
      _.definition.community_item_class == 8 &&
      _.definition.bundle_defids?.length != 0
    )
      return (0, _.jsx)(_, {
        fallback: null,
        children: (0, _.jsx)(_, {
          ..._,
          className: _,
          onClick: _.onClick,
        }),
      });
    let _ = _[_.definition.community_item_class];
    return _
      ? (0, _.jsx)(_, {
          fallback: null,
          children: (0, _.jsx)(_, {
            ..._,
            className: _,
            onClick: _.onClick,
          }),
        })
      : (0, _.jsx)(_, {
          fallback: null,
          children: (0, _.jsx)(_, {
            ..._,
            className: _,
            onClick: _.onClick,
          }),
        });
  }),
  _ = Object.assign({
    "../../../../images/rewards/profileshowcases/icon_showcase_1.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_10.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_11.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_12.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_13.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_14.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_15.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_16.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_17.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_2.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_21.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_22.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_23.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_24.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_3.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_4.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_5.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_6.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_7.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_8.svg": _,
    "../../../../images/rewards/profileshowcases/icon_showcase_9.svg": _,
  });
function _(_) {
  let _ =
    _[`../../../../images/rewards/profileshowcases/icon_showcase_${_}.svg`];
  if (_ === void 0) throw Error(`Cannot find profile showcase icon ${_}`);
  return _;
}
function _({ customization_type: _, current_level: _, point_cost: _, ..._ }) {
  let _ = _(_),
    _ = _(`#ProfileShowcases_Type_` + _),
    _ = [],
    _ = _ >= _.Get().GetMaxProfileShowcaseUpgradeLevel(),
    _ = _(_ && `U3HcGFQg9ak-`, !_ && _ > 1 && `RKTJK4A4VwA-`);
  return {
    cost: _,
    name: _,
    itemLevel: _,
    children: (0, _.jsx)(`img`, {
      className: _,
      src: _,
    }),
    desc: _(`#ProfileShowcases_Upgrade`),
    attributes: _,
    className: _,
    iconComponent: _,
    ..._,
  };
}
var _ = (_) =>
  (0, _.jsx)(_, {
    ..._(_),
  });
function _({
  customization_type: _,
  point_cost: _,
  purchased_count: _,
  current_level: _,
  ..._
}) {
  let _ = _(_),
    _ = _(`#ProfileShowcases_Type_` + _),
    _ = [],
    _ = _ >= _.Get().GetMaxProfileShowcaseSlots(),
    _ = _(_ && `U3HcGFQg9ak-`);
  return {
    cost: _,
    name: _,
    children: (0, _.jsx)(`img`, {
      className: _,
      src: _,
    }),
    desc: _(`#ProfileShowcases_AdditionalSlot`),
    attributes: _,
    className: _,
    iconComponent: _,
    ..._,
  };
}
var _ = (_) =>
    (0, _.jsx)(_, {
      ..._(_),
    }),
  _ = class extends _.Component {
    state = {
      bLoadComplete: !1,
    };
    render() {
      let { src: _, title: _ } = this.props,
        { bLoadComplete: _ } = this.state;
      return _
        ? (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`img`, {
              className: _,
              src: _,
              onLoad: () =>
                this.setState({
                  bLoadComplete: !0,
                }),
              style: _
                ? void 0
                : {
                    display: `none`,
                  },
              title: _,
              alt: _,
            }),
          })
        : null;
    }
  };
function _() {
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsxs)(_, {
      className: _(_, _),
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        (0, _.jsx)(_, {
          className: _,
          children: (0, _.jsx)(`div`, {
            style: {
              flex: 1,
            },
            children: (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
var _ = _(function (_) {
  let {
      getItems: _,
      renderItem: _,
      children: _,
      style: _,
      cItemsPerPage: _,
      renderItemSkeleton: _,
      ..._
    } = _,
    _ = _ || 20,
    [_, _] = (0, _.useState)(_),
    { rewards: _, bLoadingMore: _ } = _(0, _),
    _ = _.map(_);
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsxs)(_, {
      verticalSpacing: `large`,
      "flow-children": `grid`,
      ..._,
      children: [
        _,
        _ && _ && _(_, _),
        (0, _.jsx)(_, {
          trigger: `repeated`,
          onVisibilityChange: (_) => _ && _(_ + _),
        }),
      ],
    }),
  });
});
function _(_, _) {
  let _ = [];
  for (let _ = 0; _ < _; _++)
    _.push(
      (0, _.jsx)(
        `div`,
        {
          children: _(),
        },
        _,
      ),
    );
  return _;
}
var _ = `E4DS2G3IwKU-`,
  _ = `NdKx7mksqq8-`,
  _ = `_2-H2jxauhXg-`,
  _ = `Ar-cMtP5hAw-`,
  _ = (_) => {
    let {
        title: _,
        description: _,
        actions: _,
        children: _,
        className: _,
        itemClassName: _,
        imgSrc: _,
        fullbleed: _,
        style: _,
        ..._
      } = _,
      _ = `url(${_})`,
      _ = _() === `mobile`;
    return (0, _.jsxs)(_, {
      padding: [`small`, `large`],
      flexGrow: 1,
      display: `flex`,
      flexDirection: `column`,
      className: _(_, _),
      style: _
        ? {
            backgroundImage: _,
            ..._,
          }
        : _,
      ..._,
      children: [
        !_ &&
          (0, _.jsx)(_, {
            src: _,
          }),
        (0, _.jsx)(_, {
          marginBottom: `medium`,
          display: `flex`,
          flexDirection: `row`,
          alignItems: `center`,
          flexGrow: 1,
          style: {
            zIndex: 1,
          },
          children: (0, _.jsxs)(_, {
            display: `flex`,
            flexDirection: `column`,
            flexGrow: 1,
            className: _,
            children: [
              (0, _.jsxs)(_, {
                display: `flex`,
                flexGrow: 1,
                alignItems: `center`,
                children: [
                  (0, _.jsxs)(`div`, {
                    style: {
                      transform: `translatey( -2px )`,
                    },
                    className: _,
                    children: [_, ` `],
                  }),
                  _,
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
            ],
          }),
        }),
        (0, _.jsx)(_, {
          spacing: [`xsmall`, `small`],
          style: {
            alignSelf: _ ? `flex-start` : `flex-end`,
          },
          itemClassName: _,
          children: _,
        }),
      ],
    });
  },
  _ = (_) => {
    let { theme: _, style: _, ..._ } = _;
    return (0, _.jsx)(_, {
      ..._,
      style: {
        ..._,
      },
    });
  },
  _ = `fHJpsy--17U-`,
  _ = `_3vVSBTFSZow-`,
  _ = `v-KUhLiWtck-`,
  _ = `eVXDrrGdLzU-`,
  _ = `YIrQjMyHJA0-`,
  _ = `_9AAGbk2jCTw-`,
  _ = `_8946o-aDIRs-`,
  _ = `_7yGYrPNWFCE-`,
  _ = `l-YzYVEVklE-`,
  _ = `_9IW7oDCMRGk-`,
  _ = `thIf4CPwVIk-`,
  _ = `jfaQsNFJemk-`,
  _ = `fy1qFvREI-E-`,
  _ = `NC2LiacfVDs-`,
  _ = `f3jq-dFbY74-`,
  _ = `v0Q0G11WwsE-`,
  _ = `dvvggF7L08Y-`,
  _ = `VvPg9biFQow-`,
  _ = `_7gfqwqcuLXw-`,
  _ = `rqbaF3Yp8t4-`,
  _ = `AC-N8swahaU-`,
  _ = `rXXwPkvcub4-`,
  _ = `Yr0QB1i2BZE-`,
  _ = `m74utIWnB-g-`,
  _ = `ZeKFbEYKN9I-`,
  _ = `SCI3o-nXtyw-`,
  _ = `HQKwybj7l34-`,
  _ = `zH-TB1klm1U-`,
  _ = `mjakKyA3VsE-`,
  _ = `_2avUfQjHaMg-`,
  _ = `ySK0-Foovvw-`,
  _ = `MUXvc-K-iPA-`,
  _ = `_-6nQMQGztPQ-`,
  _ = `tCNU9im20ck-`,
  _ = `apjs9cYrPQU-`,
  _ = `JCc3TEzb1UY-`,
  _ = `JtUWLzoR60c-`,
  _ = `sCJLWuMZd-o-`,
  _ = `jyAW0tM3ppA-`,
  _ = `ojvun88ekJg-`,
  _ = `_7OEYNqYdT3I-`,
  _ = `CYGuKWC7atI-`,
  _ = `h74VCjKH5Zw-`,
  _ = `_1OrGPOmzbFk-`,
  _ = `_7I8rlILirqU-`,
  _ = `_9B2jGKGj8d4-`,
  _ = `-DJGby8wTDk-`,
  _ = `Ua0Ms7oWbDg-`,
  _ = `_1dNibenJqDw-`,
  _ = `uxHZYn3cEEE-`,
  _ = `_9HgKiTxYuzY-`,
  _ = `_7wEEIqkr1co-`,
  _ = `KWOX7cVFACE-`,
  _ = `pq6qSMrhX7c-`,
  _ = `GwFF0G3PJ-A-`,
  _ = `k9l73Qqs9u8-`,
  _ = `OnzdPEotZfs-`,
  _ = `uNqU81HDZJ0-`,
  _ = `_0LEJMAP-Dec-`,
  _ = `EqVWOEpYQWY-`,
  _ = `PJq3YIv8jKo-`,
  _ = `MXMTpEO1WOQ-`,
  _ = `kf2J-aMj0EU-`,
  _ = `wA53bhk1iQc-`,
  _ = `x6OAc1nkCoE-`,
  _ = `NPsTC3J8ZZY-`,
  _ = `_94J2SNHf6p0-`,
  _ = `_8k86HspspMI-`,
  _ = `_26Llhoc37uI-`,
  _ = `mBk9Y4ONnGY-`,
  _ = `nzDgyUbC7VQ-`,
  _ = `JRDJj1Zg06I-`,
  _ = `vabXJxndCUU-`,
  _ = `L-BhvxtGFyE-`,
  _ = `VQ6k3-MVC0Q-`,
  _ = `c8Zmm5yZO5Y-`,
  _ = `_2eCyOMWAp0o-`,
  _ = `HrO-k5Kl6oE-`,
  _ = `TNc7CsF8VKA-`,
  _ = `SeTvTe0OkAM-`,
  _ = `wMBRSBkOHFk-`,
  _ = `mh1kkYnLZJg-`,
  _ = `xH07g0MW-h0-`,
  _ = `btT6KflqvtQ-`,
  _ = `AEy-fnp3KCQ-`,
  _ = `_8rwA28ymLpw-`,
  _ = `x3DI7IpK6lM-`,
  _ = `Cpa5BRtkKNY-`,
  _ = `da0RHWQAtqs-`,
  _ = `_61LN1MI5Pi0-`,
  _ = `Hw5YhFxVjyQ-`,
  _ = `QUyOBzJpbRw-`,
  _ = `eyRoERClt5k-`,
  _ = `hXrXsDgHj50-`,
  _ = `huyKYmRat8g-`,
  _ = `RzHyutxBo5Q-`,
  _ = `_2sNy5-dTus0-`,
  _ = `AxAARXhJFFI-`,
  _ = `KEhlMVPpKCw-`,
  _ = `xGur1Z5sy-c-`,
  _ = `GRnRr6m2Ebs-`,
  _ = `gFFN6KOip84-`,
  _ = `H6RgTGkvaaE-`,
  _ = `C4PmAZDunTs-`,
  _ = `tzrApHrBQDw-`,
  _ = `tfJCTG779Zs-`,
  _ = `_8uagZyb0qcI-`,
  _ = `Fif6UQy3x0E-`,
  _ = `gVYT5LT0FEM-`,
  _ = class extends _.Component {
    componentDidUpdate(_) {
      this.props.location.pathname !== _.location.pathname &&
        this.UpdateScroll();
    }
    componentDidMount() {
      this.UpdateScroll();
    }
    UpdateScroll() {
      let {
          scrollElement: _,
          location: { hash: _ },
        } = this.props,
        _ = () => _ && _.scrollTo(0, 0);
      if (_) {
        let _ = _.slice(1),
          _ = document.getElementById(_);
        _ ? _.scrollIntoView() : _();
      } else _();
    }
    render() {
      return null;
    }
  },
  _ = _(_),
  _ = (0, _.createContext)(null);
function _(_) {
  let { spacing: _, children: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: _(_),
    children: _,
  });
}
function _(_) {
  let _ = _();
  return (0, _.jsx)(`div`, {
    style: _(_),
    children: (0, _.jsx)(_.Provider, {
      value: null,
      children: _.children,
    }),
  });
}
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  return typeof _ == `number` ? `${_}px` : _;
}
function _(_) {
  return {
    top: _(_.vertical || _.top || `0`),
    bottom: _(_.vertical || _.bottom || `0`),
    left: _(_.horizontal || _.left || `0`),
    right: _(_.horizontal || _.right || `0`),
  };
}
function _(_) {
  if (!_) return;
  let { top: _, bottom: _, left: _, right: _ } = _,
    _ = {};
  return (
    _ && (_.marginTop = `-${_}`),
    _ && (_.marginBottom = `-${_}`),
    _ && (_.marginLeft = `-${_}`),
    _ && (_.marginRight = `-${_}`),
    _
  );
}
function _() {
  let _ = _();
  if (!_) return;
  let _ = `${_(_.top)} ${_(_.right)} ${_(_.bottom)} ${_(_.left)}`;
  return {
    padding: _,
    scrollPadding: _,
  };
}
var _ = ``,
  _ = null,
  _ = null,
  _ = null;
function _() {
  ((_ = ``),
    _ !== null && _.disconnect(),
    _ !== null && (window.clearTimeout(_), (_ = null)));
}
function _() {
  let _ = document.getElementById(_);
  return _ !== null && (_(_), _(), !0);
}
function _() {
  window.setTimeout(() => {
    _() === !1 &&
      (_ === null && (_ = new MutationObserver(_)),
      _.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
      }),
      (_ = window.setTimeout(() => {
        _();
      }, 1e4)));
  }, 0);
}
function _(_) {
  return _.forwardRef((_, _) => {
    let _ = (_) => {
        (_(),
          _.onClick && _.onClick(_),
          typeof _._ == `string`
            ? (_ = _._.split(`#`).slice(1).join(`#`))
            : typeof _._ == `object` &&
              typeof _._.hash == `string` &&
              (_ = _._.hash.replace(`#`, ``)),
          _ !== `` &&
            ((_ =
              _.scroll ||
              ((_) =>
                _.smooth
                  ? _.scrollIntoView({
                      behavior: `smooth`,
                    })
                  : _.scrollIntoView())),
            _()));
      },
      { scroll: _, smooth: _, ..._ } = _;
    return (0, _.jsx)(_, {
      ..._,
      onClick: _,
      ref: _,
      children: _.children,
    });
  });
}
_(_);
var _ = _(_),
  _ = `-feX9GRQO4E-`,
  _ = `PztiFOQSNkg-`,
  _ = `d7He2hxHNDQ-`,
  _ = `sas-eCiyqL4-`,
  _ = `FiYqYZBSUy8-`,
  _ = `_2xDWkUTIe8M-`,
  _ = `WqA9xhbo2po-`,
  _ = `APVQPZgQ1VA-`,
  _ = `_-6ZmsOpOmic-`,
  _ = `J1G3dVDPaJY-`,
  _ = `oaJBI7AMokg-`,
  _ = `biAUyHI0DHY-`,
  _ = `M9tzsA3cAHE-`,
  _ = `FSL2oaMz-mA-`,
  _ = `vMIs81totsI-`,
  _ = `_9UuMR813HW4-`,
  _ = `e7-u3yNTyt0-`,
  _ = `_0EVQlUK3Rxw-`,
  _ = `XJ-Hh1o6VE0-`,
  _ = `xAyvBld-pow-`,
  _ = _.createContext(() => {}),
  _ = ({ children: _, className: _, ..._ }) => {
    let [_, _] = _.useState(null),
      [_, _] = _.useState(0),
      [_, _] = _(_),
      _ = _
        ? {
            width: `${_.width}px`,
            transform: `translateX(${_._}px)`,
          }
        : void 0,
      _ = _.useCallback(
        (_) => {
          if ((_ ? _._ !== _._ && _.width !== _.width && _(_) : _(_), _)) {
            let _ = Math.max(
              0,
              Math.min(
                _._ - _.clientWidth / 2 + _.width / 2,
                _.scrollWidth - _.clientWidth,
              ),
            );
            _(_);
          }
        },
        [_, _],
      ),
      [_, _] = _.useState(0);
    return (
      _.useEffect(() => {
        if (_) {
          let _ = setInterval(() => _((_) => _ + _), 50);
          return () => clearInterval(_);
        }
      }, [_]),
      (0, _.jsx)(_.Provider, {
        value: _,
        children: (0, _.jsxs)(_, {
          "flow-children": `row`,
          ..._,
          className: _(_, _),
          ref: _,
          fnScrollIntoViewHandler: () => !0,
          children: [
            _,
            (0, _.jsx)(`div`, {
              className: _,
              style: _,
            }),
          ],
        }),
      })
    );
  },
  _ = ({ children: _, active: _, className: _, ..._ }) => {
    let _ = _.useContext(_),
      [_, _] = _.useState(null),
      _ = _.useCallback((_) => _(_), []);
    return (
      _.useLayoutEffect(() => {
        _ &&
          _ &&
          _({
            _: _.offsetLeft,
            width: _.clientWidth,
          });
      }, [_, _, _]),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `XMh2Xd5WKD4-`, _),
        ref: _,
        ..._,
        children: _,
      })
    );
  };
function _(
  _,
  _ = {
    msDuration: 200,
    msInterval: 10,
  },
) {
  let [_, _] = _.useState(null),
    _ = _.useCallback((_) => _(_), []),
    { msDuration: _, msInterval: _ } = _;
  return (
    _.useLayoutEffect(() => {
      if (!_) return;
      let _ =
          (Math.abs(_ - _.scrollLeft) / (_ / _)) * (_ < _.scrollLeft ? -1 : 1),
        _ = window.setInterval(() => {
          Math.abs(_) < Math.abs(_.scrollLeft - _)
            ? ((_.scrollLeft = _), clearInterval(_))
            : (_.scrollLeft += _);
        }, _);
      return () => clearInterval(_);
    }, [_, _, _, _]),
    [_, _]
  );
}
var _ = `#CommunityAwards`,
  _ = (_) => (_, _) => (_ ? (_.hash === _) === _ : !1),
  _ = (_) => {
    let _ = [
        {
          label: _(`#FeaturedLabel`),
          items: [
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_Featured`),
                _: _.LoyaltyStore(),
                exact: !0,
              },
            },
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_ByGame`),
                _: _.LoyaltyByGame(),
              },
            },
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_ByEvent`),
                _: _.LoyaltyByEvent(),
              },
            },
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_ItemBundlesLink`),
                _: {
                  pathname: _.LoyaltyItemBundles(),
                },
              },
            },
          ],
        },
        {
          label: _(`#InterfaceLabel`),
          items: [
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_Keyboards`),
                _: {
                  pathname: _.LoyaltyKeyboard(),
                },
              },
            },
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_StartupMovies`),
                _: {
                  pathname: _.LoyaltyStartupMovie(),
                },
              },
            },
          ],
        },
        {
          label: _(`#ProfileItems`),
          items: [
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_AvatarLink`),
                _: _.LoyaltyAvatar(),
              },
            },
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_BackgroundsLink`),
                _: _.LoyaltyBackgrounds(),
              },
            },
          ],
        },
        {
          label: _(`#ChatItems`),
          items: [
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_StickersLink`),
                _: _.LoyaltyStickers(),
              },
            },
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_ChatEffectsLink`),
                _: _.LoyaltyChatEffects(),
              },
            },
            {
              props: {
                iconComponent: _,
                children: _(`#ShopNav_EmoticonsLink`),
                _: _.LoyaltyEmoticons(),
              },
            },
          ],
        },
        {
          label: ` `,
          items: [
            {
              props: {
                iconComponent: _,
                children: _(`#HowItWorksLink`),
                _: {
                  pathname: _.LoyaltyHowItWorks(),
                  hash: `#Title`,
                },
                isActive: _(!1),
              },
            },
          ],
        },
      ],
      _ = _(_.EREALM);
    return (
      !_ &&
        !_ &&
        _[2].items.push({
          props: {
            iconComponent: _,
            children: _(`#ShopNav_AwardsLink`),
            _: {
              pathname: _.LoyaltyHowItWorks(),
              hash: `${_}`,
            },
            isActive: _(!0),
          },
        }),
      _ ||
        (_[2].items.push({
          props: {
            iconComponent: _,
            children: _(`#ShopNav_SeasonalBadgeLink`),
            _: _.LoyaltySteamBadge(),
          },
        }),
        _[2].items.push({
          props: {
            iconComponent: _,
            children: _(`#ShopNav_ProfileBundlesLink`),
            _: _.LoyaltyProfileBundles(),
          },
        })),
      _ ||
        _[2].items.push({
          props: {
            iconComponent: _,
            children: _(`#ShopNav_ProfileShowcasesLink`),
            _: {
              pathname: _.LoyaltyProfileCustomizations(),
            },
          },
        }),
      _.Get().BIsLoggedIn() &&
        (_[4].items.push({
          external: !0,
          props: {
            iconComponent: _,
            children: _(`#MyAwardSummary`),
            href: _.COMMUNITY_BASE_URL + `my/awards`,
          },
        }),
        _[4].items.push({
          external: !0,
          props: {
            iconComponent: _,
            children: _(`#RewardsPointsHistoryLink`),
            href: _.STORE_BASE_URL + `pointssummary/`,
          },
        }),
        _[4].items.push({
          props: {
            iconComponent: _,
            children: _(`#MyEquippedProfileItems`),
            _: {
              pathname: _.LoyaltyEquippedProfile(_.steamid),
            },
          },
        })),
      _
    );
  },
  _ = _(() => {
    let [_, _] = (0, _.useState)(_.Get().GetCurrentSearchTerm()),
      [_, _] = (0, _.useState)(0),
      _ = _.Get().GetCurrentSearchPlaceholder();
    return (0, _.jsx)(_, {
      className: _(_, _),
      children: (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            type: `text`,
            _: `point_search`,
            onChange: (_) => {
              let _ = _.target.value.toLowerCase();
              (_ && clearTimeout(_),
                _(
                  window.setTimeout(() => {
                    _.Get().SetCurrentSearchTerm(_);
                  }, 300),
                ),
                _(_));
            },
            value: _,
            placeholder: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              className: _(_),
            }),
          }),
          _.length > 0 &&
            (0, _.jsx)(`div`, {
              className: `sd4YNjmmiI0-`,
              onClick: () => {
                (_(``), _.Get().SetCurrentSearchTerm(``));
              },
              children: (0, _.jsx)(_, {
                className: `_3Gk2tg9Aajs-`,
              }),
            }),
        ],
      }),
    });
  });
function _() {
  return _.Get().BIsLoggedIn()
    ? (0, _.jsxs)(_, {
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            className: _,
          }),
          (0, _.jsxs)(_, {
            display: `flex`,
            flexDirection: `column`,
            flex: `1`,
            paddingLeft: `xsmall`,
            children: [
              (0, _.jsx)(`a`, {
                className: _,
                href: _.STORE_BASE_URL + `pointssummary/`,
                children: _(`#YourBalance`),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(_.Get().GetPointsAvailable().getLowBits()),
              }),
            ],
          }),
        ],
      })
    : null;
}
var _ = () => {
    let _ = _(_()),
      _ = _.Get().BIsLoggedIn() && _.Get().GetIsUsingAppIDFilters();
    return (0, _.jsx)(_, {
      className: _,
      "flow-children": `column`,
      children: (0, _.jsxs)(_, {
        spacing: `none`,
        children: [
          (0, _.jsx)(_, {}),
          _ && (0, _.jsx)(_, {}),
          _.map((_, _) =>
            (0, _.jsxs)(
              _.Fragment,
              {
                children: [
                  _.label &&
                    (0, _.jsx)(`div`, {
                      className: `iC89KZRmD3g-`,
                      children: _.label,
                    }),
                  _.items.map((_) =>
                    _.external
                      ? (0, _.createElement)(_, {
                          ..._.props,
                          key: _.props.href,
                        })
                      : (0, _.createElement)(_, {
                          ..._.props,
                          key: JSON.stringify(_.props._),
                        }),
                  ),
                ],
              },
              _,
            ),
          ),
        ],
      }),
    });
  },
  _ = (_) => {
    let {
        iconComponent: _,
        className: _,
        children: _,
        iconCallout: _,
        ..._
      } = _,
      _ = _,
      _ = typeof _._ == `object` && _._.hash ? _ : _;
    return (0, _.jsxs)(_, {
      className: _(_, _),
      activeClassName: _,
      ..._,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        _ &&
          (0, _.jsx)(_, {
            className: `K7wCJC5tgRs-`,
          }),
      ],
    });
  },
  _ = (_) => {
    let {
        iconComponent: _,
        className: _,
        children: _,
        iconCallout: _,
        ..._
      } = _,
      _ = _;
    return (0, _.jsxs)(`a`, {
      className: _(_, _),
      ..._,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        _ &&
          (0, _.jsx)(_, {
            className: `K7wCJC5tgRs-`,
          }),
      ],
    });
  };
function _(_) {
  let _ = _(),
    _ = typeof _._ == `string` ? _._ : _._.pathname,
    _ = _(_),
    _ = !!_ && (!_.exact || _.isExact),
    _ = _ && _.isActive ? _.isActive(_, _) : _;
  return (0, _.jsx)(_, {
    active: _,
    className: _,
    children: _.children,
  });
}
var _ = () => {
    let _ = _(_()),
      _ = [];
    return (
      _.forEach((_) => {
        _.items.forEach((_) => {
          if (_.external) {
            let { iconComponent: _, iconCallout: _, ..._ } = _.props;
            _.push(
              (0, _.createElement)(
                _,
                {
                  ..._,
                  key: _.props.href,
                  focusClassName: _,
                  noFocusRing: !0,
                },
                (0, _.jsx)(_, {
                  className: _,
                  children: _.props.children,
                }),
              ),
            );
          } else {
            let _ = _.props,
              { iconComponent: _, iconCallout: _, ..._ } = _,
              _ = typeof _._ == `string` ? _._ : JSON.stringify(_._);
            _.push(
              (0, _.createElement)(
                _,
                {
                  ..._,
                  key: _,
                  focusClassName: _,
                  noFocusRing: !0,
                },
                (0, _.jsx)(_, {
                  ..._,
                  children: _.children,
                }),
              ),
            );
          }
        });
      }),
      (0, _.jsx)(_, {
        className: _,
        children: _,
      })
    );
  },
  _ = new URL(
    `../../../images/applications/store/diamonds_tile.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/home_background.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/halloween_2020_pointspage_bg.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = ({ className: _, ..._ }) => {
    let _ = _.useRef(void 0);
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          ref: _,
          className: _(_, _),
          ..._,
        }),
        (0, _.jsx)(_, {
          scrollElement: _.current,
        }),
      ],
    });
  },
  _ = ({ children: _ }) =>
    (0, _.jsx)(_, {
      className: _(_, _),
      children: _,
    }),
  _ = ({ children: _, src: _, className: _ }) =>
    (0, _.jsxs)(_.Fragment, {
      children: [
        _,
        (0, _.jsx)(`div`, {
          className: _(_, _, _),
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      ],
    });
function _() {
  let _ = _();
  return _(`(max-width: 965px)`) || _;
}
function _(_) {
  let _ = _([`xxsmall`, `small`, `xxlarge`]),
    _ = _(),
    _ = _(_);
  return (0, _.jsx)(_, {
    spacing: {
      horizontal: _,
    },
    children: (0, _.jsxs)(_, {
      display: `flex`,
      justifyContent: `center`,
      paddingBottom: `xlarge`,
      className: _,
      children: [
        !_ && (0, _.jsx)(_, {}),
        (0, _.jsxs)(_, {
          itemClassName: _,
          className: _,
          children: [_ && (0, _.jsx)(_, {}), _.children],
        }),
      ],
    }),
  });
}
var _ = ({ background: _, children: _ }) => {
    let _ = _;
    return (
      _ && (_ = _),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          src: _,
          children: (0, _.jsx)(_, {
            children: _,
          }),
        }),
      })
    );
  },
  _ = ({ children: _ }) =>
    (0, _.jsx)(_, {
      src: _,
      className: _,
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
    }),
  _ = _(({ children: _, appid: _ }) => {
    let [_] = _(_, {
        include_assets: !0,
      }),
      _ = _,
      _ = _.Get().GetAppHeroImage(_);
    return (
      _.is_custom
        ? (_ = _.img_url)
        : _ &&
          (_ =
            _.GetAssets().GetRawPageBackgroundURL() ??
            _.GetAssets().GetPageBackgroundURL()),
      (0, _.jsx)(_, {
        src: _,
        className: _,
        children: _,
      })
    );
  }),
  _ = {
    1461450: _,
  };
function _(_) {
  return _ in _;
}
function _(_) {
  return _[_];
}
function _(_) {
  return _(_.appid)
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { children: _, appid: _ } = _,
    _ = _(_);
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(`div`, {
      style: {
        backgroundImage: `url("${_}")`,
      },
      className: _,
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
function _(_) {
  let { children: _, appid: _ } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      appid: _,
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
function _(_) {
  let { title: _, subtitle: _, headerImage: _ } = _,
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      _ && (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(`img`, {
          className: `S6-XbeBErqA-`,
          src: _,
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: _(`Q7z0VMP-i2w-`, `_9ZMR-UgxIbU-`),
          children: _,
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `UB18mRveUcI-`,
          children: _,
        }),
    ],
  });
}
var _ = (_, _) => `${_.MEDIA_CDN_COMMUNITY_URL}/images/items/${_}/${_}`,
  _ = _(() => {
    let _ = _.Get().GetSeasonalBadgeDefinition(),
      _ = _.Get().GetUserSeasonalBadgeLevel(),
      _ = _
        ? _.community_item_data.badge_data.map(({ level: _, image: _ }) => ({
            level: _,
            imgSrc: _(_.appid, _),
            owned: _ >= _,
            cost: _.Get().GetCostToLevelSeasonalBadge(_),
          }))
        : [];
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(_, {
        paddingY: `xlarge`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        children: [
          (0, _.jsx)(_, {
            title: _(`#SeasonalBadge_Title`),
            subtitle: _(`#SeasonalBadge_Description`),
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    ..._,
                    onClick: (_) => _(_, _, _.level),
                  },
                  _.level,
                ),
              ),
            }),
          }),
        ],
      }),
    });
  }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(_, {
      className: _,
      verticalSpacing: `large`,
      "flow-children": `grid`,
      children: _,
    }),
  _ = (_) => {
    let { level: _, owned: _, cost: _, imgSrc: _, className: _, ..._ } = _;
    return (0, _.jsxs)(_, {
      className: _(_, _),
      ..._,
      children: [
        (0, _.jsx)(_, {
          children: (0, _.jsx)(`img`, {
            src: _,
            title: _(`#BadgeLevel`, _),
            className: _,
          }),
        }),
        (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              owned: _,
              level: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _
                ? (0, _.jsx)(_, {})
                : (0, _.jsx)(_, {
                    cost: _,
                  }),
            }),
          ],
        }),
      ],
    });
  },
  _ = () =>
    (0, _.jsx)(_, {
      className: _,
    }),
  _ = ({ cost: _ }) =>
    (0, _.jsx)(_, {
      amount: _,
      size: 0.75,
    }),
  _ = (_) => {
    let { level: _, owned: _ } = _;
    return (0, _.jsx)(`div`, {
      className: _(_, _ && `KArjCse3bfw-`),
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    });
  },
  _ = new URL(
    `../../../images/applications/store/lunar2022_confirm.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = _({
    FireworkContainer: () => _,
    FireworkPNG: () => _,
    FireworkPath: () => _,
    SnowballImage: () => _,
    SnowballImageCCW: () => _,
    SnowballImageCW: () => _,
    Snowflake: () => _,
    "Snowflake-0": () => _,
    "Snowflake-1": () => _,
    "Snowflake-10": () => _,
    "Snowflake-11": () => _,
    "Snowflake-12": () => _,
    "Snowflake-13": () => _,
    "Snowflake-14": () => _,
    "Snowflake-15": () => _,
    "Snowflake-16": () => _,
    "Snowflake-17": () => _,
    "Snowflake-18": () => _,
    "Snowflake-19": () => _,
    "Snowflake-2": () => _,
    "Snowflake-20": () => _,
    "Snowflake-3": () => _,
    "Snowflake-4": () => _,
    "Snowflake-5": () => _,
    "Snowflake-6": () => _,
    "Snowflake-7": () => _,
    "Snowflake-8": () => _,
    "Snowflake-9": () => _,
    after: () => _,
    "animation-container": () => _,
    balloon_big_1: () => _,
    balloon_big_2: () => _,
    balloon_move_left: () => _,
    balloon_move_right: () => _,
    balloon_small_1: () => _,
    balloon_small_2: () => _,
    balloon_small_3: () => _,
    balloons: () => _,
    balloonsDurationJitterS: () => _,
    balloonsDurationMaxMs: () => _,
    balloonsDurationMs: () => _,
    balloonsDurationS: () => _,
    bang: () => _,
    before: () => _,
    confetti: () => _,
    "confetti-0": () => _,
    "confetti-1": () => _,
    "confetti-10": () => _,
    "confetti-11": () => _,
    "confetti-12": () => _,
    "confetti-13": () => _,
    "confetti-14": () => _,
    "confetti-15": () => _,
    "confetti-16": () => _,
    "confetti-17": () => _,
    "confetti-18": () => _,
    "confetti-19": () => _,
    "confetti-2": () => _,
    "confetti-20": () => _,
    "confetti-21": () => _,
    "confetti-22": () => _,
    "confetti-23": () => _,
    "confetti-24": () => _,
    "confetti-25": () => _,
    "confetti-26": () => _,
    "confetti-27": () => _,
    "confetti-28": () => _,
    "confetti-29": () => _,
    "confetti-3": () => _,
    "confetti-30": () => _,
    "confetti-31": () => _,
    "confetti-32": () => _,
    "confetti-33": () => _,
    "confetti-34": () => _,
    "confetti-35": () => _,
    "confetti-36": () => _,
    "confetti-37": () => _,
    "confetti-38": () => _,
    "confetti-39": () => _,
    "confetti-4": () => _,
    "confetti-40": () => _,
    "confetti-41": () => _,
    "confetti-42": () => _,
    "confetti-43": () => _,
    "confetti-44": () => _,
    "confetti-45": () => _,
    "confetti-46": () => _,
    "confetti-47": () => _,
    "confetti-48": () => _,
    "confetti-49": () => _,
    "confetti-5": () => _,
    "confetti-50": () => _,
    "confetti-51": () => _,
    "confetti-52": () => _,
    "confetti-53": () => _,
    "confetti-54": () => _,
    "confetti-55": () => _,
    "confetti-56": () => _,
    "confetti-57": () => _,
    "confetti-58": () => _,
    "confetti-59": () => _,
    "confetti-6": () => _,
    "confetti-60": () => _,
    "confetti-61": () => _,
    "confetti-62": () => _,
    "confetti-63": () => _,
    "confetti-64": () => _,
    "confetti-65": () => _,
    "confetti-66": () => _,
    "confetti-67": () => _,
    "confetti-68": () => _,
    "confetti-69": () => _,
    "confetti-7": () => _,
    "confetti-70": () => _,
    "confetti-71": () => _,
    "confetti-72": () => _,
    "confetti-73": () => _,
    "confetti-74": () => _,
    "confetti-75": () => _,
    "confetti-76": () => _,
    "confetti-77": () => _,
    "confetti-78": () => _,
    "confetti-79": () => _,
    "confetti-8": () => _,
    "confetti-80": () => _,
    "confetti-81": () => _,
    "confetti-82": () => _,
    "confetti-83": () => _,
    "confetti-84": () => _,
    "confetti-85": () => _,
    "confetti-86": () => _,
    "confetti-87": () => _,
    "confetti-88": () => _,
    "confetti-89": () => _,
    "confetti-9": () => _,
    "confetti-90": () => _,
    "confetti-91": () => _,
    "confetti-92": () => _,
    "confetti-93": () => _,
    "confetti-94": () => _,
    "confetti-95": () => _,
    "confetti-96": () => _,
    "confetti-97": () => _,
    "confetti-98": () => _,
    "confetti-99": () => _,
    confettiDurationMs: () => _,
    cracker: () => _,
    "cracker-left": () => _,
    "cracker-right": () => _,
    crackerDurationMs: () => _,
    default: () => _,
    "drop-0": () => _,
    "drop-1": () => _,
    "drop-10": () => _,
    "drop-11": () => _,
    "drop-12": () => _,
    "drop-13": () => _,
    "drop-14": () => _,
    "drop-15": () => _,
    "drop-16": () => _,
    "drop-17": () => _,
    "drop-18": () => _,
    "drop-19": () => _,
    "drop-2": () => _,
    "drop-20": () => _,
    "drop-21": () => _,
    "drop-22": () => _,
    "drop-23": () => _,
    "drop-24": () => _,
    "drop-25": () => _,
    "drop-26": () => _,
    "drop-27": () => _,
    "drop-28": () => _,
    "drop-29": () => _,
    "drop-3": () => _,
    "drop-30": () => _,
    "drop-31": () => _,
    "drop-32": () => _,
    "drop-33": () => _,
    "drop-34": () => _,
    "drop-35": () => _,
    "drop-36": () => _,
    "drop-37": () => _,
    "drop-38": () => _,
    "drop-39": () => _,
    "drop-4": () => _,
    "drop-40": () => _,
    "drop-41": () => _,
    "drop-42": () => _,
    "drop-43": () => _,
    "drop-44": () => _,
    "drop-45": () => _,
    "drop-46": () => _,
    "drop-47": () => _,
    "drop-48": () => _,
    "drop-49": () => _,
    "drop-5": () => _,
    "drop-50": () => _,
    "drop-51": () => _,
    "drop-52": () => _,
    "drop-53": () => _,
    "drop-54": () => _,
    "drop-55": () => _,
    "drop-56": () => _,
    "drop-57": () => _,
    "drop-58": () => _,
    "drop-59": () => _,
    "drop-6": () => _,
    "drop-60": () => _,
    "drop-61": () => _,
    "drop-62": () => _,
    "drop-63": () => _,
    "drop-64": () => _,
    "drop-65": () => _,
    "drop-66": () => _,
    "drop-67": () => _,
    "drop-68": () => _,
    "drop-69": () => _,
    "drop-7": () => _,
    "drop-70": () => _,
    "drop-71": () => _,
    "drop-72": () => _,
    "drop-73": () => _,
    "drop-74": () => _,
    "drop-75": () => _,
    "drop-76": () => _,
    "drop-77": () => _,
    "drop-78": () => _,
    "drop-79": () => _,
    "drop-8": () => _,
    "drop-80": () => _,
    "drop-81": () => _,
    "drop-82": () => _,
    "drop-83": () => _,
    "drop-84": () => _,
    "drop-85": () => _,
    "drop-86": () => _,
    "drop-87": () => _,
    "drop-88": () => _,
    "drop-89": () => _,
    "drop-9": () => _,
    "drop-90": () => _,
    "drop-91": () => _,
    "drop-92": () => _,
    "drop-93": () => _,
    "drop-94": () => _,
    "drop-95": () => _,
    "drop-96": () => _,
    "drop-97": () => _,
    "drop-98": () => _,
    "drop-99": () => _,
    "firework-path-animation": () => _,
    fireworkBigX: () => _,
    fireworkBigY: () => _,
    fireworkLongX: () => _,
    fireworkLongY: () => _,
    fireworkSmallX: () => _,
    fireworkSmallY: () => _,
    goldfetti: () => _,
    "goldfetti-color-1": () => _,
    "goldfetti-color-2": () => _,
    "goldfetti-color-3": () => _,
    "goldfetti-emoji-1": () => _,
    "goldfetti-emoji-2": () => _,
    "goldfetti-emoji-3": () => _,
    "goldfetti-emoji-4": () => _,
    "goldfetti-fragment": () => _,
    goldfettiColorsNum: () => `3`,
    goldfettiDurationMs: () => _,
    goldfettiEmojiNum: () => `4`,
    gravity: () => _,
    lantern_glow: () => _,
    position: () => _,
    pyro: () => _,
    "pyro-body-shake": () => _,
    "pyro-body-shake2": () => _,
    pyroBodyShake: () => _,
    pyroBodyShake2: () => _,
    "slide-out-bottom": () => _,
    "slide-out-tl": () => _,
    "slide-out-tr": () => _,
    snowball: () => _,
    "snowball-chunk": () => _,
    "snowball-chunk-1": () => _,
    "snowball-chunk-2": () => _,
    "snowball-chunk-3": () => _,
    "snowball-chunk-4": () => _,
    "snowball-container": () => _,
    "snowball-path": () => _,
    "snowball-path-1": () => _,
    "snowball-path-2": () => _,
    "snowball-path-3": () => _,
    "snowball-path-4": () => _,
    "snowball-path-5": () => _,
    "snowball-path-6": () => _,
    "snowball-residue": () => _,
    "snowball-rotate-ccw": () => _,
    "snowball-rotate-cw": () => _,
    snowballDurationMs: () => _,
    snowballSpeed: () => `1s`,
    snowball_fragment: () => _,
    "snowflake-0": () => _,
    "snowflake-1": () => _,
    "snowflake-10": () => _,
    "snowflake-11": () => _,
    "snowflake-12": () => _,
    "snowflake-13": () => _,
    "snowflake-14": () => _,
    "snowflake-15": () => _,
    "snowflake-16": () => _,
    "snowflake-17": () => _,
    "snowflake-18": () => _,
    "snowflake-19": () => _,
    "snowflake-2": () => _,
    "snowflake-20": () => _,
    "snowflake-3": () => _,
    "snowflake-4": () => _,
    "snowflake-5": () => _,
    "snowflake-6": () => _,
    "snowflake-7": () => _,
    "snowflake-8": () => _,
    "snowflake-9": () => _,
  }),
  _ = `7000s/s`,
  _ = `7000s/s`,
  _ = `300s/s`,
  _ = `4000s/s`,
  _ = `4s/s`,
  _ = `1s/s`,
  _ = `5000s/s`,
  _ = `3010s/s`,
  _ = `qjpNNRzk6dU-`,
  _ = `FIMq7a5Zi84-`,
  _ = `E8NNSPAhEDs-`,
  _ = `MUqCiedZFyE-`,
  _ = `bC2dIlscD-U-`,
  _ = `Dp-ZRiIyGNc-`,
  _ = `jT-pTrpyYVQ-`,
  _ = `jX16Lnzasz4-`,
  _ = `szj95vkZY3c-`,
  _ = `B63sd-KwGOo-`,
  _ = `Tr-hP4XSmEo-`,
  _ = `agg8gHeoLnQ-`,
  _ = `_5aM2lSnfe8o-`,
  _ = `U2GFCBhr38A-`,
  _ = `xzFYisC9yKc-`,
  _ = `c72fZpK8piA-`,
  _ = `Udwg0l-iA5U-`,
  _ = `sd-HwZ7XTG8-`,
  _ = `GB7VRoVIS-U-`,
  _ = `_07u1bXFcW44-`,
  _ = `evHwd--K2VY-`,
  _ = `AwTNxlixw60-`,
  _ = `YdSgo68pCeg-`,
  _ = `RQbViS1zads-`,
  _ = `xPsLXUovU9w-`,
  _ = `mfBFO-jOx0M-`,
  _ = `ACRU78-Wo-s-`,
  _ = `WD3hXw50RDw-`,
  _ = `SgStUwdK4oU-`,
  _ = `o9zFm3EovlA-`,
  _ = `Uht4TB0cEzo-`,
  _ = `cHJQImT9Vl8-`,
  _ = `Nn16BeI2BmA-`,
  _ = `aCLVX8zgXNo-`,
  _ = `MfQaL5m6t9M-`,
  _ = `XuQL00tyLZg-`,
  _ = `NmUcmCVVLhg-`,
  _ = `qcWXUBeo-cs-`,
  _ = `LJjNlXDfS-E-`,
  _ = `CwQU-TCDStE-`,
  _ = `-GUAbBuliKQ-`,
  _ = `LmyVsAHTpvM-`,
  _ = `gbjcmMoFqSE-`,
  _ = `_64NhUzZ5br4-`,
  _ = `zAA-ALHyAqM-`,
  _ = `_2biMjcKxMko-`,
  _ = `Z52jHvYPIXI-`,
  _ = `NqpEQ-8n7fw-`,
  _ = `UccshVIXHRQ-`,
  _ = `Kz1s2VK-9bg-`,
  _ = `oUIe1k0-qd0-`,
  _ = `SVoQPv-IfwM-`,
  _ = `K1P8vn7jQPo-`,
  _ = `rLezqDzkvgM-`,
  _ = `MOIyPmLZn3s-`,
  _ = `fyxNqISbZI4-`,
  _ = `-xYmWNB1Whg-`,
  _ = `qM53G5BS9Bc-`,
  _ = `rtXbhFy5FSY-`,
  _ = `GVpmqo7OMIk-`,
  _ = `_43CgeyFGmFQ-`,
  _ = `Zp5qgaFVUps-`,
  _ = `AzAHEvxnr0U-`,
  _ = `tfh0XjJ1aVs-`,
  _ = `P2DVs4zI3m0-`,
  _ = `_48pR-F-bW1k-`,
  _ = `JLux7ju-RKo-`,
  _ = `EIEhtatJRTQ-`,
  _ = `MzTpfo8RYBw-`,
  _ = `VaqPufYKx8Q-`,
  _ = `_8Kwz6kTvdoE-`,
  _ = `lIaoLM-21Oo-`,
  _ = `TVOO-N9p0K8-`,
  _ = `YkprhXiB91k-`,
  _ = `_7oVURCwIhGk-`,
  _ = `oU8gTPCI3o0-`,
  _ = `mq9hzHplxjQ-`,
  _ = `EqQMW-B3dfs-`,
  _ = `zzoHV0xJ1YA-`,
  _ = `_5F8lQ2M8P3k-`,
  _ = `VfCF-ZQ-t1Q-`,
  _ = `nKyET5uTzWA-`,
  _ = `-AHSXYDfOF4-`,
  _ = `p5oa-jMus80-`,
  _ = `_8Huw0bhuVy4-`,
  _ = `MzztgY2Rj4c-`,
  _ = `_8706NmnfQXs-`,
  _ = `iV7uSRTlZTA-`,
  _ = `MG4lrg-uZoE-`,
  _ = `SPj5H-krsWc-`,
  _ = `-yeQz-V8Chg-`,
  _ = `p4fJJUluZXk-`,
  _ = `yYrYqMIbtak-`,
  _ = `F41F6EO-FvQ-`,
  _ = `F7RAykvpqdQ-`,
  _ = `xjxTaYXb6oI-`,
  _ = `QbCm6ej12uA-`,
  _ = `bzJkRZR49VA-`,
  _ = `jmctpXNdlv4-`,
  _ = `_2TCz8Xk0DVY-`,
  _ = `kCVFSidxCYk-`,
  _ = `GgdxxorjpRQ-`,
  _ = `_5MZSEzSIfVc-`,
  _ = `U5R67N-YoRM-`,
  _ = `Fay17FuI4P0-`,
  _ = `w45dPZH91CI-`,
  _ = `sMwft45e6Nw-`,
  _ = `qfk9ysxw2VE-`,
  _ = `bIU--Gqb9TQ-`,
  _ = `c0WO2yCMgRY-`,
  _ = `pvQZzfxgIGY-`,
  _ = `SD0mJmMouRI-`,
  _ = `m-ZL9uulUb8-`,
  _ = `_9zYGMd8os1E-`,
  _ = `_0tQoVIxvstU-`,
  _ = `kGy1hOihMMA-`,
  _ = `_9bFdGYpZmKo-`,
  _ = `_2cQ2uhNdyqQ-`,
  _ = `VIl8PEyBAHI-`,
  _ = `pgvHodzsGy4-`,
  _ = `HLL60Ax8p6E-`,
  _ = `ma3Dj-zBYeA-`,
  _ = `H0DvxF-hius-`,
  _ = `FRd7iOMAc7Y-`,
  _ = `wQkJjQP77E4-`,
  _ = `zNfL-zNqhpM-`,
  _ = `nz1J7MtDwbc-`,
  _ = `y1sLbr3qokA-`,
  _ = `BtJo2NNNo24-`,
  _ = `iXhp-ihdfJM-`,
  _ = `-CstCXgP38o-`,
  _ = `Hxf6xNhSb1Y-`,
  _ = `BsJ1xZMhlmA-`,
  _ = `z6RZ0i5p-JE-`,
  _ = `_8n5SNAHGcIE-`,
  _ = `ufN250kGN7A-`,
  _ = `TaWWPNKFoD0-`,
  _ = `cKSyNLOMypQ-`,
  _ = `_0TV7mcqpaZA-`,
  _ = `Qt21Z5QTt6w-`,
  _ = `zFXp5npKjIU-`,
  _ = `apVJ-jpzILc-`,
  _ = `UKglb-nH3cI-`,
  _ = `ajvQ7O-bOwU-`,
  _ = `xKjTHgFNpfM-`,
  _ = `k-ujg6g7xzM-`,
  _ = `KBj2dlNCUR4-`,
  _ = `UGooEK4GUPE-`,
  _ = `MIeEZod-Qlo-`,
  _ = `WG7UQKrxuUE-`,
  _ = `JKqAk81iueQ-`,
  _ = `QeAENi6HDOI-`,
  _ = `DNXcGV1S9ho-`,
  _ = `QZ2tGJLlHD0-`,
  _ = `wSQgrzMxjUA-`,
  _ = `_0LiXlEdHgSI-`,
  _ = `pF7FGjRD0Bk-`,
  _ = `vIjykFRMFC0-`,
  _ = `wKqmuqNdJAA-`,
  _ = `Z0V9HR76-Z4-`,
  _ = `TMt15otlNy4-`,
  _ = `MZ0rJTEGX3U-`,
  _ = `Dp40pcEWgSE-`,
  _ = `_2yJKgEpoDHU-`,
  _ = `bvYXXguXZMg-`,
  _ = `zpDvhfbz4Ug-`,
  _ = `R6o74NoDwrs-`,
  _ = `ap5iTwuRzcU-`,
  _ = `_3CTo-RMH5Ps-`,
  _ = `l2gDA5PYLt0-`,
  _ = `YpC7S8YizDw-`,
  _ = `rViyLI-sERM-`,
  _ = `_6p29S3mTX1g-`,
  _ = `_5ySUaEE0h44-`,
  _ = `NI63nEqV9NE-`,
  _ = `Euht1ynWhCI-`,
  _ = `_-193lxmy6OU-`,
  _ = `n-5GRrWO7Tg-`,
  _ = `REHIcP48lKo-`,
  _ = `sTacMfZs1Y0-`,
  _ = `VZlKjOG4EoE-`,
  _ = `mJ80ecy8cr4-`,
  _ = `cSEXg4vwZ48-`,
  _ = `fhsqhkW7Dxs-`,
  _ = `_9gjqAF3x-f8-`,
  _ = `txK3RZD0kMw-`,
  _ = `EQHyPERweQ8-`,
  _ = `KTKrQyio9Bk-`,
  _ = `R-wMRd9KbCU-`,
  _ = `I5rPHH9h8Kw-`,
  _ = `iGL0YdxGa-A-`,
  _ = `_1XB92ka1psE-`,
  _ = `KF5jd4iiAYw-`,
  _ = `_4DyRyAoR87s-`,
  _ = `UzfB7ij3LO0-`,
  _ = `L2szm3HCSo8-`,
  _ = `_7CIBZXZCH1w-`,
  _ = `ud9Sntaf5FE-`,
  _ = `_3MnVyfUIbc8-`,
  _ = `iOhL8Dc2OG8-`,
  _ = `hM8jzjdATcw-`,
  _ = `z80b29TtIN4-`,
  _ = `apDpHsEPbNE-`,
  _ = `iC8-bHNu7w0-`,
  _ = `MnKz4idFD68-`,
  _ = `yWUMmhfKGWg-`,
  _ = `YQ5h2L4y6cM-`,
  _ = `rVgzE15lyEY-`,
  _ = `hA1secZv25w-`,
  _ = `UfVUM06XeeI-`,
  _ = `bolKRAfcUog-`,
  _ = `Pn4H0W5jmlQ-`,
  _ = `ad6iZHTvMKQ-`,
  _ = `N7O5KMWAlQU-`,
  _ = `R14x-UFJZjA-`,
  _ = `ktrIOsFLyMM-`,
  _ = `fnJAWZV66cI-`,
  _ = `jXF9zybFApM-`,
  _ = `_2yCPl6deHEI-`,
  _ = `loiS5qzB0lU-`,
  _ = `_26svVKnT5Mw-`,
  _ = `rS8AU5ZGPXw-`,
  _ = `t4R8GGRcRew-`,
  _ = `yni-1AxrWrA-`,
  _ = `_7kXWesRgD4Q-`,
  _ = `bMFV2PCh-F0-`,
  _ = `trzTc3kL5Fw-`,
  _ = `ZW-U7T-CZtg-`,
  _ = `-Lnu0lLlAjI-`,
  _ = `_4JGrvvQ16Sk-`,
  _ = `bsOkxXpz7eA-`,
  _ = `bNZimRPDdtQ-`,
  _ = `-tMex-KuUME-`,
  _ = `mc8Eanl-Y-A-`,
  _ = `Q-Esg3-iWSg-`,
  _ = `ckEEJCmsUo4-`,
  _ = `yfCnJ1RsoLA-`,
  _ = `Wns-JtWQAuk-`,
  _ = `LO2BApVEuGM-`,
  _ = `emqQKXtafTE-`,
  _ = `UoqjbxERCMU-`,
  _ = `BrNZJhb9aZE-`,
  _ = `kHlZAtp-lFs-`,
  _ = `uOlMQNfOS64-`,
  _ = `urZD5jZ8HBE-`,
  _ = `BURCa9I-zWQ-`,
  _ = `AhIg-kVqqb0-`,
  _ = `IPLbRTKrMN4-`,
  _ = `MPos-8y-cUo-`,
  _ = `_4PY7p-3dJdI-`,
  _ = `jhAkD-LakYU-`,
  _ = `n2FPNBA2nVY-`,
  _ = `wzGKxi9WUFM-`,
  _ = `PxkJo3u-KbA-`,
  _ = `Q-pefbJ4c44-`,
  _ = `Z0SSuhxggBg-`,
  _ = `_3vt-3QUPpZU-`,
  _ = `W3LmyWy4o7k-`,
  _ = `nRrhF3OQZfM-`,
  _ = `iOourBSSNJI-`,
  _ = `lKPCxQB6NYQ-`,
  _ = `p16UHGpVWdA-`,
  _ = `f5ZXvbui4yw-`,
  _ = `_4dPMzLKnLec-`,
  _ = `GkK7-hm-i-8-`,
  _ = `AUfNi5bwzjo-`,
  _ = `_-2fTA8R3lvU-`,
  _ = `QgCGRjvNB6Y-`,
  _ = `xFGdxITklss-`,
  _ = `MOJw-dk2QCg-`,
  _ = `_3qa8PMymQmk-`,
  _ = `L4tv-enRNH4-`,
  _ = `NKcJzPXDCxg-`,
  _ = `qkYH2R7-aGk-`,
  _ = `t0gpFXjexlY-`,
  _ = `bhJHDJJbGbQ-`,
  _ = `mYdGVX-JgtA-`,
  _ = `Q5CoBIdqM70-`,
  _ = `MiYbV8nvnso-`,
  _ = `sOPHJwQQmso-`,
  _ = `LvnyxMZlwz0-`,
  _ = `EpBU0uY0Tto-`,
  _ = `Yq08NQxUQws-`,
  _ = `z9xkpJULRsk-`,
  _ = `ibqs7kjifNs-`,
  _ = `QbFD1DOZ2Nc-`,
  _ = `PR0KeqNpF4Y-`,
  _ = `kr-rq-SILKI-`,
  _ = `_9DEpFFwpFTE-`,
  _ = `mHURE8brOWg-`,
  _ = `_1huu90kvH6s-`,
  _ = `i778V980rJg-`,
  _ = `N31EIVMl-E4-`,
  _ = `p5EYlBjRqvs-`,
  _ = `_0X-iP7qFtw4-`,
  _ = `vrJKODUTPlI-`,
  _ = `A-okIssqgVE-`,
  _ = `_0VOWnq4k6lw-`,
  _ = `_3F-7YMbm-wY-`,
  _ = `a6jQ4ywZfXs-`,
  _ = `eA9RNRMFSo8-`,
  _ = `b8-sShAKh1A-`,
  _ = `a2ntH4JP5n8-`,
  _ = `_4NLOIz5EWFQ-`,
  _ = `y45QauRS46Y-`,
  _ = `_5bSxgH2Kuzw-`,
  _ = `D-zQuQvnXAU-`,
  _ = `PR6DOVc1Qng-`,
  _ = `Qnz5dzN-CyM-`,
  _ = `xY7-ZH5pHog-`,
  _ = {
    confettiDurationMs: _,
    goldfettiDurationMs: _,
    goldfettiColorsNum: `3`,
    goldfettiEmojiNum: `4`,
    crackerDurationMs: _,
    balloonsDurationMs: _,
    balloonsDurationS: _,
    balloonsDurationJitterS: _,
    balloonsDurationMaxMs: _,
    snowballDurationMs: _,
    snowballSpeed: `1s`,
    "animation-container": `qjpNNRzk6dU-`,
    Snowflake: _,
    "Snowflake-0": `E8NNSPAhEDs-`,
    "snowflake-0": `MUqCiedZFyE-`,
    "Snowflake-1": `bC2dIlscD-U-`,
    "snowflake-1": `Dp-ZRiIyGNc-`,
    "Snowflake-2": `jT-pTrpyYVQ-`,
    "snowflake-2": `jX16Lnzasz4-`,
    "Snowflake-3": `szj95vkZY3c-`,
    "snowflake-3": `B63sd-KwGOo-`,
    "Snowflake-4": `Tr-hP4XSmEo-`,
    "snowflake-4": `agg8gHeoLnQ-`,
    "Snowflake-5": `_5aM2lSnfe8o-`,
    "snowflake-5": `U2GFCBhr38A-`,
    "Snowflake-6": `xzFYisC9yKc-`,
    "snowflake-6": `c72fZpK8piA-`,
    "Snowflake-7": `Udwg0l-iA5U-`,
    "snowflake-7": `sd-HwZ7XTG8-`,
    "Snowflake-8": `GB7VRoVIS-U-`,
    "snowflake-8": `_07u1bXFcW44-`,
    "Snowflake-9": `evHwd--K2VY-`,
    "snowflake-9": `AwTNxlixw60-`,
    "Snowflake-10": `YdSgo68pCeg-`,
    "snowflake-10": `RQbViS1zads-`,
    "Snowflake-11": `xPsLXUovU9w-`,
    "snowflake-11": `mfBFO-jOx0M-`,
    "Snowflake-12": `ACRU78-Wo-s-`,
    "snowflake-12": `WD3hXw50RDw-`,
    "Snowflake-13": `SgStUwdK4oU-`,
    "snowflake-13": `o9zFm3EovlA-`,
    "Snowflake-14": `Uht4TB0cEzo-`,
    "snowflake-14": `cHJQImT9Vl8-`,
    "Snowflake-15": `Nn16BeI2BmA-`,
    "snowflake-15": `aCLVX8zgXNo-`,
    "Snowflake-16": `MfQaL5m6t9M-`,
    "snowflake-16": `XuQL00tyLZg-`,
    "Snowflake-17": `NmUcmCVVLhg-`,
    "snowflake-17": `qcWXUBeo-cs-`,
    "Snowflake-18": `LJjNlXDfS-E-`,
    "snowflake-18": `CwQU-TCDStE-`,
    "Snowflake-19": `-GUAbBuliKQ-`,
    "snowflake-19": `LmyVsAHTpvM-`,
    "Snowflake-20": `gbjcmMoFqSE-`,
    "snowflake-20": `_64NhUzZ5br4-`,
    confetti: _,
    "confetti-0": `_2biMjcKxMko-`,
    "drop-0": `Z52jHvYPIXI-`,
    "confetti-1": `NqpEQ-8n7fw-`,
    "drop-1": `UccshVIXHRQ-`,
    "confetti-2": `Kz1s2VK-9bg-`,
    "drop-2": `oUIe1k0-qd0-`,
    "confetti-3": `SVoQPv-IfwM-`,
    "drop-3": `K1P8vn7jQPo-`,
    "confetti-4": `rLezqDzkvgM-`,
    "drop-4": `MOIyPmLZn3s-`,
    "confetti-5": `fyxNqISbZI4-`,
    "drop-5": `-xYmWNB1Whg-`,
    "confetti-6": `qM53G5BS9Bc-`,
    "drop-6": `rtXbhFy5FSY-`,
    "confetti-7": `GVpmqo7OMIk-`,
    "drop-7": `_43CgeyFGmFQ-`,
    "confetti-8": `Zp5qgaFVUps-`,
    "drop-8": `AzAHEvxnr0U-`,
    "confetti-9": `tfh0XjJ1aVs-`,
    "drop-9": `P2DVs4zI3m0-`,
    "confetti-10": `_48pR-F-bW1k-`,
    "drop-10": `JLux7ju-RKo-`,
    "confetti-11": `EIEhtatJRTQ-`,
    "drop-11": `MzTpfo8RYBw-`,
    "confetti-12": `VaqPufYKx8Q-`,
    "drop-12": `_8Kwz6kTvdoE-`,
    "confetti-13": `lIaoLM-21Oo-`,
    "drop-13": `TVOO-N9p0K8-`,
    "confetti-14": `YkprhXiB91k-`,
    "drop-14": `_7oVURCwIhGk-`,
    "confetti-15": `oU8gTPCI3o0-`,
    "drop-15": `mq9hzHplxjQ-`,
    "confetti-16": `EqQMW-B3dfs-`,
    "drop-16": `zzoHV0xJ1YA-`,
    "confetti-17": `_5F8lQ2M8P3k-`,
    "drop-17": `VfCF-ZQ-t1Q-`,
    "confetti-18": `nKyET5uTzWA-`,
    "drop-18": `-AHSXYDfOF4-`,
    "confetti-19": `p5oa-jMus80-`,
    "drop-19": `_8Huw0bhuVy4-`,
    "confetti-20": `MzztgY2Rj4c-`,
    "drop-20": `_8706NmnfQXs-`,
    "confetti-21": `iV7uSRTlZTA-`,
    "drop-21": `MG4lrg-uZoE-`,
    "confetti-22": `SPj5H-krsWc-`,
    "drop-22": `-yeQz-V8Chg-`,
    "confetti-23": `p4fJJUluZXk-`,
    "drop-23": `yYrYqMIbtak-`,
    "confetti-24": `F41F6EO-FvQ-`,
    "drop-24": `F7RAykvpqdQ-`,
    "confetti-25": `xjxTaYXb6oI-`,
    "drop-25": `QbCm6ej12uA-`,
    "confetti-26": `bzJkRZR49VA-`,
    "drop-26": `jmctpXNdlv4-`,
    "confetti-27": `_2TCz8Xk0DVY-`,
    "drop-27": `kCVFSidxCYk-`,
    "confetti-28": `GgdxxorjpRQ-`,
    "drop-28": `_5MZSEzSIfVc-`,
    "confetti-29": `U5R67N-YoRM-`,
    "drop-29": `Fay17FuI4P0-`,
    "confetti-30": `w45dPZH91CI-`,
    "drop-30": `sMwft45e6Nw-`,
    "confetti-31": `qfk9ysxw2VE-`,
    "drop-31": `bIU--Gqb9TQ-`,
    "confetti-32": `c0WO2yCMgRY-`,
    "drop-32": `pvQZzfxgIGY-`,
    "confetti-33": `SD0mJmMouRI-`,
    "drop-33": `m-ZL9uulUb8-`,
    "confetti-34": `_9zYGMd8os1E-`,
    "drop-34": `_0tQoVIxvstU-`,
    "confetti-35": `kGy1hOihMMA-`,
    "drop-35": `_9bFdGYpZmKo-`,
    "confetti-36": `_2cQ2uhNdyqQ-`,
    "drop-36": `VIl8PEyBAHI-`,
    "confetti-37": `pgvHodzsGy4-`,
    "drop-37": `HLL60Ax8p6E-`,
    "confetti-38": `ma3Dj-zBYeA-`,
    "drop-38": `H0DvxF-hius-`,
    "confetti-39": `FRd7iOMAc7Y-`,
    "drop-39": `wQkJjQP77E4-`,
    "confetti-40": `zNfL-zNqhpM-`,
    "drop-40": `nz1J7MtDwbc-`,
    "confetti-41": `y1sLbr3qokA-`,
    "drop-41": `BtJo2NNNo24-`,
    "confetti-42": `iXhp-ihdfJM-`,
    "drop-42": `-CstCXgP38o-`,
    "confetti-43": `Hxf6xNhSb1Y-`,
    "drop-43": `BsJ1xZMhlmA-`,
    "confetti-44": `z6RZ0i5p-JE-`,
    "drop-44": `_8n5SNAHGcIE-`,
    "confetti-45": `ufN250kGN7A-`,
    "drop-45": `TaWWPNKFoD0-`,
    "confetti-46": `cKSyNLOMypQ-`,
    "drop-46": `_0TV7mcqpaZA-`,
    "confetti-47": `Qt21Z5QTt6w-`,
    "drop-47": `zFXp5npKjIU-`,
    "confetti-48": `apVJ-jpzILc-`,
    "drop-48": `UKglb-nH3cI-`,
    "confetti-49": `ajvQ7O-bOwU-`,
    "drop-49": `xKjTHgFNpfM-`,
    "confetti-50": `k-ujg6g7xzM-`,
    "drop-50": `KBj2dlNCUR4-`,
    "confetti-51": `UGooEK4GUPE-`,
    "drop-51": `MIeEZod-Qlo-`,
    "confetti-52": `WG7UQKrxuUE-`,
    "drop-52": `JKqAk81iueQ-`,
    "confetti-53": `QeAENi6HDOI-`,
    "drop-53": `DNXcGV1S9ho-`,
    "confetti-54": `QZ2tGJLlHD0-`,
    "drop-54": `wSQgrzMxjUA-`,
    "confetti-55": `_0LiXlEdHgSI-`,
    "drop-55": `pF7FGjRD0Bk-`,
    "confetti-56": `vIjykFRMFC0-`,
    "drop-56": `wKqmuqNdJAA-`,
    "confetti-57": `Z0V9HR76-Z4-`,
    "drop-57": `TMt15otlNy4-`,
    "confetti-58": `MZ0rJTEGX3U-`,
    "drop-58": `Dp40pcEWgSE-`,
    "confetti-59": `_2yJKgEpoDHU-`,
    "drop-59": `bvYXXguXZMg-`,
    "confetti-60": `zpDvhfbz4Ug-`,
    "drop-60": `R6o74NoDwrs-`,
    "confetti-61": `ap5iTwuRzcU-`,
    "drop-61": `_3CTo-RMH5Ps-`,
    "confetti-62": `l2gDA5PYLt0-`,
    "drop-62": `YpC7S8YizDw-`,
    "confetti-63": `rViyLI-sERM-`,
    "drop-63": `_6p29S3mTX1g-`,
    "confetti-64": `_5ySUaEE0h44-`,
    "drop-64": `NI63nEqV9NE-`,
    "confetti-65": `Euht1ynWhCI-`,
    "drop-65": `_-193lxmy6OU-`,
    "confetti-66": `n-5GRrWO7Tg-`,
    "drop-66": `REHIcP48lKo-`,
    "confetti-67": `sTacMfZs1Y0-`,
    "drop-67": `VZlKjOG4EoE-`,
    "confetti-68": `mJ80ecy8cr4-`,
    "drop-68": `cSEXg4vwZ48-`,
    "confetti-69": `fhsqhkW7Dxs-`,
    "drop-69": `_9gjqAF3x-f8-`,
    "confetti-70": `txK3RZD0kMw-`,
    "drop-70": `EQHyPERweQ8-`,
    "confetti-71": `KTKrQyio9Bk-`,
    "drop-71": `R-wMRd9KbCU-`,
    "confetti-72": `I5rPHH9h8Kw-`,
    "drop-72": `iGL0YdxGa-A-`,
    "confetti-73": `_1XB92ka1psE-`,
    "drop-73": `KF5jd4iiAYw-`,
    "confetti-74": `_4DyRyAoR87s-`,
    "drop-74": `UzfB7ij3LO0-`,
    "confetti-75": `L2szm3HCSo8-`,
    "drop-75": `_7CIBZXZCH1w-`,
    "confetti-76": `ud9Sntaf5FE-`,
    "drop-76": `_3MnVyfUIbc8-`,
    "confetti-77": `iOhL8Dc2OG8-`,
    "drop-77": `hM8jzjdATcw-`,
    "confetti-78": `z80b29TtIN4-`,
    "drop-78": `apDpHsEPbNE-`,
    "confetti-79": `iC8-bHNu7w0-`,
    "drop-79": `MnKz4idFD68-`,
    "confetti-80": `yWUMmhfKGWg-`,
    "drop-80": `YQ5h2L4y6cM-`,
    "confetti-81": `rVgzE15lyEY-`,
    "drop-81": `hA1secZv25w-`,
    "confetti-82": `UfVUM06XeeI-`,
    "drop-82": `bolKRAfcUog-`,
    "confetti-83": `Pn4H0W5jmlQ-`,
    "drop-83": `ad6iZHTvMKQ-`,
    "confetti-84": `N7O5KMWAlQU-`,
    "drop-84": `R14x-UFJZjA-`,
    "confetti-85": `ktrIOsFLyMM-`,
    "drop-85": `fnJAWZV66cI-`,
    "confetti-86": `jXF9zybFApM-`,
    "drop-86": `_2yCPl6deHEI-`,
    "confetti-87": `loiS5qzB0lU-`,
    "drop-87": `_26svVKnT5Mw-`,
    "confetti-88": `rS8AU5ZGPXw-`,
    "drop-88": `t4R8GGRcRew-`,
    "confetti-89": `yni-1AxrWrA-`,
    "drop-89": `_7kXWesRgD4Q-`,
    "confetti-90": `bMFV2PCh-F0-`,
    "drop-90": `trzTc3kL5Fw-`,
    "confetti-91": `ZW-U7T-CZtg-`,
    "drop-91": `-Lnu0lLlAjI-`,
    "confetti-92": `_4JGrvvQ16Sk-`,
    "drop-92": `bsOkxXpz7eA-`,
    "confetti-93": `bNZimRPDdtQ-`,
    "drop-93": `-tMex-KuUME-`,
    "confetti-94": `mc8Eanl-Y-A-`,
    "drop-94": `Q-Esg3-iWSg-`,
    "confetti-95": `ckEEJCmsUo4-`,
    "drop-95": `yfCnJ1RsoLA-`,
    "confetti-96": `Wns-JtWQAuk-`,
    "drop-96": `LO2BApVEuGM-`,
    "confetti-97": `emqQKXtafTE-`,
    "drop-97": `UoqjbxERCMU-`,
    "confetti-98": `BrNZJhb9aZE-`,
    "drop-98": `kHlZAtp-lFs-`,
    "confetti-99": `uOlMQNfOS64-`,
    "drop-99": `urZD5jZ8HBE-`,
    cracker: _,
    "cracker-left": `AhIg-kVqqb0-`,
    "cracker-right": `IPLbRTKrMN4-`,
    goldfetti: _,
    "goldfetti-fragment": `_4PY7p-3dJdI-`,
    "goldfetti-color-1": `jhAkD-LakYU-`,
    "goldfetti-color-2": `n2FPNBA2nVY-`,
    "goldfetti-color-3": `wzGKxi9WUFM-`,
    "goldfetti-emoji-1": `PxkJo3u-KbA-`,
    "goldfetti-emoji-2": `Q-pefbJ4c44-`,
    "goldfetti-emoji-3": `Z0SSuhxggBg-`,
    "goldfetti-emoji-4": `_3vt-3QUPpZU-`,
    balloons: _,
    lantern_glow: _,
    snowball_fragment: _,
    "snowball-container": `lKPCxQB6NYQ-`,
    snowball: _,
    SnowballImage: _,
    SnowballImageCW: _,
    "snowball-rotate-cw": `GkK7-hm-i-8-`,
    SnowballImageCCW: _,
    "snowball-rotate-ccw": `_-2fTA8R3lvU-`,
    "snowball-path": `QgCGRjvNB6Y-`,
    "snowball-residue": `xFGdxITklss-`,
    "snowball-chunk": `MOJw-dk2QCg-`,
    "snowball-chunk-1": `_3qa8PMymQmk-`,
    "snowball-chunk-2": `L4tv-enRNH4-`,
    "snowball-chunk-3": `NKcJzPXDCxg-`,
    "snowball-chunk-4": `qkYH2R7-aGk-`,
    "slide-out-tl": `t0gpFXjexlY-`,
    "slide-out-tr": `bhJHDJJbGbQ-`,
    "slide-out-bottom": `mYdGVX-JgtA-`,
    pyro: _,
    before: _,
    after: _,
    bang: _,
    gravity: _,
    position: _,
    pyroBodyShake: _,
    "pyro-body-shake": `ibqs7kjifNs-`,
    pyroBodyShake2: _,
    "pyro-body-shake2": `PR0KeqNpF4Y-`,
    FireworkPath: _,
    "firework-path-animation": `_9DEpFFwpFTE-`,
    FireworkContainer: _,
    FireworkPNG: _,
    balloon_small_1: _,
    balloon_move_right: _,
    balloon_move_left: _,
    balloon_big_1: _,
    balloon_big_2: _,
    balloon_small_2: _,
    balloon_small_3: _,
    "snowball-path-1": `_3F-7YMbm-wY-`,
    "snowball-path-2": `a6jQ4ywZfXs-`,
    "snowball-path-3": `eA9RNRMFSo8-`,
    "snowball-path-4": `b8-sShAKh1A-`,
    "snowball-path-5": `a2ntH4JP5n8-`,
    "snowball-path-6": `_4NLOIz5EWFQ-`,
    fireworkBigX: _,
    fireworkBigY: _,
    fireworkSmallX: _,
    fireworkSmallY: _,
    fireworkLongX: _,
    fireworkLongY: _,
  };
function _(_, _, _) {
  return _.COMMUNITY_CDN_ASSET_URL + _ + `/roomeffects/` + _ + `/` + _;
}
var _ = class extends _.Component {
  m_strSaleId;
  constructor(_) {
    (super(_), (this.m_strSaleId = this.props.sale));
  }
  getAsset(_) {
    return _(this.m_strSaleId, this.props.effect.name, _);
  }
};
function _(_) {
  let _ = (0, _.useRef)({
    bSet: !1,
  });
  return (
    _.current.bSet ||
      (_.current = {
        bSet: !0,
        value: _(),
      }),
    _.current.value
  );
}
function _(_, _) {
  _(() => setTimeout(_, _));
}
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (_(() => _(!0), _), _);
}
var _ = ({ msDelay: _, children: _ }) =>
    _(_)
      ? (0, _.jsx)(_.Fragment, {
          children: _,
        })
      : null,
  _ = 7e3,
  _ = class extends _.Component {
    m_refContainer = _.createRef();
    m_rgFireworks = [];
    m_nCurrentDelay = 0;
    constructor(_) {
      (super(_),
        (this.state = {
          bReady: !1,
        }));
    }
    CreateFireworks(_) {
      ((this.m_nCurrentDelay = 0),
        this.AddCluster(_),
        (this.m_nCurrentDelay += 200),
        this.RenderLong(_),
        (this.m_nCurrentDelay += 200),
        this.AddCluster(_),
        (this.m_nCurrentDelay += 600),
        this.AddCluster(_),
        (this.m_nCurrentDelay += 200),
        this.RenderLong(_),
        (this.m_nCurrentDelay += 200),
        this.RenderLong(_),
        (this.m_nCurrentDelay += 200),
        this.RenderLong(_),
        this.AddCluster(_),
        this.RenderLong(_),
        (this.m_nCurrentDelay += 200),
        this.AddCluster(_));
    }
    TestRender(_) {
      (_(0, 70), _(0, 70));
      for (let _ = 0; _ < 1; _++)
        (this.m_rgFireworks.push({
          _: `20%`,
          _: `20%`,
          nHueRotation: 0,
          nDelay: this.m_nCurrentDelay,
          flScale: _,
          burst: _,
        }),
          (this.m_nCurrentDelay += 500));
      (this.m_rgFireworks.push({
        _: `0%`,
        _: `0%`,
        nHueRotation: 0,
        nDelay: this.m_nCurrentDelay,
        flScale: _,
        burst: _,
      }),
        this.m_rgFireworks.push({
          _: `30%`,
          _: `30%`,
          nHueRotation: 0,
          nDelay: this.m_nCurrentDelay,
          flScale: _,
          burst: _,
        }));
    }
    CalcHueRotation() {
      return this.props.sale == `lny2020` ? 360 + _(-30, 10) : _(0, 360);
    }
    AddCluster(_) {
      let _ = _(-5, 50),
        _ = _(-10, 50),
        _ = this.CalcHueRotation();
      this.m_rgFireworks.push({
        _: `${_}%`,
        _: `${_}%`,
        nHueRotation: _,
        nDelay: this.m_nCurrentDelay,
        flScale: _,
        burst: _,
      });
      let _ = Math.random() * Math._ * 2,
        _ = Math.floor(64 * _),
        _ = Math.floor(60 * _),
        _ = Math.floor(10 * _),
        _ = 0;
      for (let _ = 0; _ < 3; _++) {
        let _ = Math.cos(_ + _) * _,
          _ = Math.sin(_ + _) * _ + _,
          _ = `calc( ${_}% + ${_ + _}px )`,
          _ = `calc( ${_}% + ${_ + _}px )`;
        (_ < 2 && (this.m_nCurrentDelay += 200),
          (_ = this.CalcHueRotation()),
          this.m_rgFireworks.push({
            _: _,
            _: _,
            nHueRotation: _,
            nDelay: this.m_nCurrentDelay,
            flScale: _,
            burst: _,
          }),
          (_ += 2.09));
      }
    }
    RenderLong(_) {
      let _ = _(20, 60),
        _ = _(-5, 50),
        _ = this.CalcHueRotation();
      this.m_rgFireworks.push({
        _: `${_}%`,
        _: `${_}%`,
        nHueRotation: _,
        nDelay: this.m_nCurrentDelay,
        flScale: _,
        burst: _,
      });
    }
    componentDidMount() {
      if (!this.m_refContainer.current || this.m_rgFireworks.length > 0) return;
      let _ = this.m_refContainer.current,
        _ = _.offsetWidth,
        _ = _.offsetHeight,
        _ = _(_, 400, 1080, 0.5, 2);
      ((_ = _(_, 0.5, 2)),
        console.log(_, _, _),
        this.CreateFireworks(_),
        this.setState({
          bReady: !0,
        }));
    }
    render() {
      let _ = [];
      return (
        this.state.bReady &&
          this.m_rgFireworks.forEach((_, _) => {
            let _ = `${_}`,
              _ = {
                top: _._,
                left: _._,
                filter: `hue-rotate(${_.nHueRotation}deg)`,
              };
            _.push(
              (0, _.jsx)(
                _.burst,
                {
                  style: _,
                  msDelay: _.nDelay,
                  scale: _.flScale,
                  sale: this.props.sale,
                },
                _,
              ),
            );
          }),
        (0, _.jsx)(`div`, {
          ref: this.m_refContainer,
          className: _,
          children: _,
        })
      );
    }
  };
function _(_) {
  let _ = _(_.sale, `fireworks`, `long_sheet.png`),
    _ = _.style;
  return (
    (_.backgroundImage = `url(${_})`),
    (_.width = 256),
    (_.height = 256),
    (_.animation = `${_} 0.2s steps(9) 10, ${_} 2.0s steps(10) forwards`),
    (_.transformOrigin = `0 0`),
    (_.transform = `scale( ${_.scale} )`),
    (0, _.jsx)(_, {
      msDelay: _.msDelay,
      children: (0, _.jsx)(`div`, {
        style: _.style,
        className: _,
      }),
    })
  );
}
function _(_) {
  let _ = _(_.sale, `fireworks`, `big_sheet.png`),
    _ = _.style;
  return (
    (_.backgroundImage = `url(${_})`),
    (_.width = 256),
    (_.height = 256),
    (_.animation = `${_} 0.2s steps(9) 4, ${_} 0.8s steps(4) forwards`),
    (_.transformOrigin = `0 0`),
    (_.transform = `scale( ${_.scale} )`),
    (0, _.jsx)(_, {
      msDelay: _.msDelay,
      children: (0, _.jsx)(`div`, {
        style: _.style,
        className: _,
      }),
    })
  );
}
function _(_) {
  let _ = _(_.sale, `fireworks`, `small_sheet.png`),
    _ = _.style;
  return (
    (_.backgroundImage = `url(${_})`),
    (_.width = 256),
    (_.height = 256),
    (_.animation = `${_} 0.15s steps(10) 6, ${_} 0.9s steps(6) forwards`),
    (_.transformOrigin = `0 0`),
    (_.transform = `scale( ${_.scale / 2} )`),
    (0, _.jsx)(_, {
      msDelay: _.msDelay,
      children: (0, _.jsx)(`div`, {
        style: _.style,
        className: _,
      }),
    })
  );
}
var _ = class _ extends _ {
  m_x;
  m_y;
  m_nRotate;
  m_splatRots;
  m_nPathAnimation;
  m_nKeyID;
  static sm_nUnique = 0;
  constructor(_) {
    (super(_),
      (this.m_x = _(0, 70) + `%`),
      (this.m_y = _(0, 70) + `%`),
      (this.m_nRotate = Math.floor(Math.random() * 90) - 45),
      (this.m_splatRots = [
        Math.random() * 360,
        Math.random() * 360,
        Math.random() * 360,
      ]),
      (this.m_nPathAnimation = _(1, 6)),
      (this.m_nKeyID = _.sm_nUnique++),
      (this.m_strSaleId = `winter2019`));
  }
  fragment(_, ..._) {
    let _ = _.map((_) => _[_]);
    return (
      _.push(_),
      (0, _.jsx)(`img`, {
        src: this.getAsset(_),
        className: _.join(` `),
      })
    );
  }
  Snowball(_, _, ..._) {
    let _ = _ < 0 ? _ : _;
    _ > -5 && _ < 5 && (_ = ``);
    let _ = _.map((_) => _[_]);
    return (
      _.push(_),
      (0, _.jsx)(`div`, {
        style: {
          display: `inline-block`,
        },
        className: _.join(` `),
        children: (0, _.jsx)(`img`, {
          style: {
            transform: `rotation( 360deg )`,
          },
          className: `${_} ${_}`,
          src: this.getAsset(_),
        }),
      })
    );
  }
  residue() {
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          style: {
            transform: `rotate(${this.m_splatRots[0]}deg)`,
          },
          children: this.fragment(`splat1.png`, `snowball-residue`),
        }),
        (0, _.jsx)(`div`, {
          style: {
            transform: `rotate(${this.m_splatRots[1]}deg)`,
          },
          children: this.fragment(`splat2.png`, `snowball-residue`),
        }),
        (0, _.jsx)(`div`, {
          style: {
            transform: `rotate(${this.m_splatRots[2]}deg)`,
          },
          children: this.fragment(`splat3.png`, `snowball-residue`),
        }),
      ],
    });
  }
  render() {
    let _ = {
      animationName: _[`snowball-path-${this.m_nPathAnimation}`],
    };
    return (0, _.jsx)(
      _.Fragment,
      {
        children: (0, _.jsx)(`div`, {
          className: _,
          style: _,
          children: (0, _.jsxs)(`div`, {
            className: _,
            style: {
              left: this.m_x,
              top: this.m_y,
              transform: `rotate( ${this.m_nRotate}deg )`,
            },
            children: [
              this.Snowball(this.m_nRotate, `snowball.png`, `snowball`),
              this.fragment(`slide-out-tl.png`, `slide-out-tl`),
              this.fragment(`slide-out-tr.png`, `slide-out-tr`),
              this.fragment(`slide-out-bottom.png`, `slide-out-bottom`),
              this.residue(),
              this.fragment(
                `snowball_1.png`,
                `snowball-chunk`,
                `snowball-chunk-1`,
              ),
              this.fragment(
                `snowball_2.png`,
                `snowball-chunk`,
                `snowball-chunk-2`,
              ),
              this.fragment(
                `snowball_3.png`,
                `snowball-chunk`,
                `snowball-chunk-3`,
              ),
              this.fragment(
                `snowball_4.png`,
                `snowball-chunk`,
                `snowball-chunk-4`,
              ),
            ],
          }),
        }),
      },
      `${this.m_nKeyID}`,
    );
  }
};
function _(_) {
  let _ = _.data,
    _ = _(_.sale, _.effect.name, `${_.strImage}.png`),
    _ = null;
  if (_.SOverlay) {
    let _ = _.SOverlay
        ? _(_.sale, _.effect.name, `${_.SOverlay.strImage}.png`)
        : null,
      _ = {
        animationDuration: `${_.SOverlay.nDuration}s`,
      };
    _ = (0, _.jsx)(`img`, {
      src: _,
      className: _[_.SOverlay.strClass],
      style: _,
    });
  }
  let _ = {
    animationDuration: `${_.nDuration}s`,
    animationName: _[_.strAnimation],
    marginLeft: `${_.nOffset}%`,
  };
  return (0, _.jsxs)(`div`, {
    style: _,
    className: _,
    children: [
      (0, _.jsx)(`img`, {
        src: _,
        style: {
          maxWidth: `100%`,
          position: `absolute`,
        },
      }),
      _,
    ],
  });
}
var _ = class extends _ {
    m_rgBalloons = [];
    m_rgImages;
    m_nNextImage = 0;
    constructor(_) {
      switch ((super(_), _.sale)) {
        case `lny2020`:
          this.m_rgImages = [`orange`, `peach`, `yellow`];
          break;
        default:
          this.m_rgImages = [
            `balloon_blue`,
            `balloon_cyan`,
            `balloon_green`,
            `balloon_purple`,
            `balloon_red`,
            `balloon_yellow`,
          ];
      }
      (_(this.m_rgImages), this.GenerateBalloons());
    }
    GetNextImage() {
      let _ = this.m_rgImages[this.m_nNextImage % this.m_rgImages.length];
      return (this.m_nNextImage++, _);
    }
    GenerateDuration() {
      return parseFloat(_) + parseFloat(_) * Math.random();
    }
    GenerateBalloons() {
      let _ = [`balloon_small_1`, `balloon_small_2`, `balloon_small_3`],
        _ = [`balloon_big_1`, `balloon_big_2`],
        _ = [`balloon_move_left`, `balloon_move_right`];
      this.m_rgBalloons = [];
      for (let _ of _) {
        let _ = _(-10, 10);
        this.m_rgBalloons.push(this.GenerateSingleBalloon(_, _));
      }
      let _ = [70, 20];
      _(_);
      let _ = _[1] == 20;
      for (let _ of _) {
        let _ = _(-10, 10) + _.pop();
        this.m_rgBalloons.push(this.GenerateSingleBalloon(_, _));
      }
      let _ = _[_(0, 1)];
      _ && (_ = `balloon_move_left`);
      let _ = _(-10, 10);
      this.m_rgBalloons.push(this.GenerateSingleBalloon(_, _));
    }
    GenerateSingleBalloon(_, _) {
      let _ = this.GetNextImage(),
        _ = {
          strAnimation: _,
          strImage: _,
          nDuration: this.GenerateDuration(),
          nOffset: _,
        };
      return (
        this.props.sale == `lny2020` &&
          (_.SOverlay = {
            strImage: _ + `-glow`,
            strClass: `lantern_glow`,
            nDuration: 1 + Math.random() * 4,
          }),
        _
      );
    }
    render() {
      return (0, _.jsx)(_.Fragment, {
        children: this.m_rgBalloons.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              data: _,
              effect: this.props.effect,
              sale: this.m_strSaleId,
            },
            `${_}`,
          ),
        ),
      });
    }
  },
  _ = class {
    m_seed;
    constructor(_) {
      this.m_seed = _;
    }
    next() {
      let _ = Math.sin(this.m_seed++) * 1e3;
      return _ - Math.floor(_);
    }
  },
  _ = 1e4;
function _(_) {
  let _ = [],
    _ = new _(_.timestamp);
  for (let _ = 0; _ < 150; _++) {
    let _ = _.next(),
      _ = {
        left: `${_.next() * 100}%`,
        animationDuration: `${(1 - _) * 3 + 4}s`,
        animationDelay: `${_ + _.next() * 4}s`,
      };
    _.push(
      (0, _.jsxs)(
        `div`,
        {
          style: _,
          className: _(_, _[`Snowflake-${_ % 20}`]),
          children: [_(_), _(_ + 1)],
        },
        _.timestamp + `_` + _,
      ),
    );
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [` `, _, ` `],
  });
}
function _(_) {
  let _ = new _(_),
    _ = _.next() * 0.8 + 0.5,
    _ = `${(_.next() + _) * 10 + 10}px`,
    _ = {
      opacity: _,
      width: _,
      height: _,
      margin: `${_.next() * 30 + 15}px`,
      filter: `hue-rotate(${_.next() * 90 - 30}deg) saturate(100%)`,
    },
    _ = 1 + Math.floor(_.next() * 5),
    _ =
      _.COMMUNITY_CDN_ASSET_URL + `winter2019/roomeffects/96px/flake_${_}.png`;
  return (0, _.jsx)(`img`, {
    style: _,
    src: _,
  });
}
var _ = parseInt(_),
  _ = parseInt(_);
function _(_, _) {
  return () => {
    let _ = _.COMMUNITY_CDN_ASSET_URL + _ + `/roomeffects/96px/` + _ + `.png`;
    return (0, _.jsx)(`img`, {
      style: {
        width: `100%`,
      },
      src: _,
    });
  };
}
function _(_, _, _, _) {
  return {
    timeout: _,
    renderButton: _(_, _),
    renderEffectIcon: _(_, _),
    buttonToken: `#ChatEntryButton_Send` + _(_),
    locToken: `#ChatRoom_RoomEffect` + _(_),
    render: _,
  };
}
function _(_, _, _) {
  return _(_, `winter2019`, _, _);
}
var _ = {
    lny2020_lanterns: _(`lny2020_lanterns`, `lny2020`, _, (_) =>
      (0, _.jsx)(_, {
        effect: _,
        sale: `lny2020`,
      }),
    ),
    lny2020_firework: _(`lny2020_firework`, `lny2020`, _, () =>
      (0, _.jsx)(_, {
        sale: `lny2020`,
      }),
    ),
    lny2020_confetti: _(`lny2020_confetti`, `lny2020`, _, () =>
      (0, _.jsx)(_, {
        eType: _.LNY2020,
      }),
    ),
    snowball: _(`snowball`, _, (_) =>
      (0, _.jsx)(_, {
        effect: _,
        sale: `winter2019`,
      }),
    ),
    balloons: _(`balloons`, _, (_) =>
      (0, _.jsx)(_, {
        effect: _,
        sale: `winter2019`,
      }),
    ),
    confetti: _(`confetti`, _, () =>
      (0, _.jsx)(_, {
        eType: _.Default,
      }),
    ),
    goldfetti: _(`goldfetti`, _, () =>
      (0, _.jsx)(_, {
        eType: _.Gold,
      }),
    ),
    firework: _(`firework`, _, () =>
      (0, _.jsx)(_, {
        sale: `winter2019`,
      }),
    ),
    snow: _(`snow`, _, _),
  },
  _ = class extends _.Component {
    render() {
      return (0, _.jsx)(`div`, {
        className: _,
        children: this.props.effectManager.m_rgRunningEffects.map((_) =>
          (0, _.jsx)(
            _.Fragment,
            {
              children: _.render(),
            },
            _.timestamp,
          ),
        ),
      });
    }
  };
_ = _([_], _);
var _ = class _ {
    static k_QueueForEffect = {
      snowball: `snowball`,
      snow: `confetti_snow`,
      confetti: `confetti_snow`,
      goldfetti: `confetti_snow`,
      firework: `festive`,
      balloons: `festive`,
      lny2020_lanterns: `festive`,
      lny2020_firework: `festive`,
      lny2020_confetti: `confetti_snow`,
    };
    name;
    timestamp;
    expires;
    settings;
    constructor(_, _) {
      if (!_.hasOwnProperty(_))
        throw Error(`Room effect ` + _ + ` is not defined.`);
      ((this.name = _),
        (this.timestamp = Date.now()),
        (this.settings = _[_]),
        (this.expires = this.timestamp + this.settings.timeout));
    }
    static QueueFor(_) {
      return _.k_QueueForEffect[_];
    }
    Queue() {
      return _.k_QueueForEffect[this.name];
    }
    bIsExpired() {
      return Date.now() > this.expires;
    }
    bIsActive() {
      let _ = Date.now();
      return this.timestamp <= _ && this.expires > _;
    }
    iTimeToExpiry() {
      return this.expires - Date.now();
    }
    render() {
      return this.bIsActive() ? this.settings.render(this) : null;
    }
  },
  _ = class _ {
    static k_MaxRoomEffectRunning = {
      default: 1,
      snowball: 10,
      confetti_snow: 3,
      festive: 10,
    };
    m_mapRoomEffectQueue = {
      default: [],
      snowball: [],
      confetti_snow: [],
      festive: [],
    };
    m_effectSettings;
    m_rgRunningEffects = [];
    constructor(_) {
      (_(this), (this.m_effectSettings = _));
    }
    AddRoomEffect(_) {
      (this.QueueRoomEffect(_), this.UpdateRunningRoomEffects());
    }
    QueueRoomEffect(_) {
      this.m_mapRoomEffectQueue[_.QueueFor(_)].push(_);
    }
    ActivateRoomEffect(_) {
      try {
        let _ = new _(_, this.m_effectSettings);
        (this.m_rgRunningEffects.push(_),
          window.setTimeout(() => {
            this.UpdateRunningRoomEffects();
          }, _.iTimeToExpiry() + 100));
      } catch (_) {
        console.log(_);
      }
    }
    BIsQueueFull(_) {
      return (
        this.m_rgRunningEffects.filter((_) => _.Queue() == _).length >=
        _.k_MaxRoomEffectRunning[_]
      );
    }
    UpdateRunningRoomEffects() {
      this.m_rgRunningEffects = this.m_rgRunningEffects.filter(
        (_) => !_.bIsExpired(),
      );
      for (let _ in this.m_mapRoomEffectQueue) {
        let _ = _;
        for (
          ;
          this.m_mapRoomEffectQueue[_].length > 0 && !this.BIsQueueFull(_);
        ) {
          let _ = this.m_mapRoomEffectQueue[_].shift();
          if (!_) break;
          this.ActivateRoomEffect(_);
        }
      }
    }
  };
_([_], _.prototype, `m_rgRunningEffects`, void 0);
var _ = `wINzb0S-MAY-`;
function _(_) {
  let { link: _, className: _, ..._ } = _,
    [_, _] = _.useState(!1),
    _ = () => {
      (_(!0), navigator.clipboard.writeText(_));
    };
  return (0, _.jsx)(`div`, {
    title: _(`#ToolTip_CopyLinkToClipboard`),
    className: _(void 0, _),
    onClick: () => _(),
    children: (0, _.jsx)(_, {
      ..._,
      className: _(_),
      "data-flash": +!!_,
      onAnimationEnd: () => _(!1),
    }),
  });
}
var _ = `btITtjX9iPQ-`,
  _ = `yEbVhDS-mQE-`,
  _ = `uVF0d7J4pnw-`;
function _(_) {
  return ({ className: _, ..._ }) =>
    (0, _.jsx)(_, {
      className: _(_, _),
      ..._,
    });
}
var _ = _(_),
  _ = _(_),
  _ = _(_);
function _(_, _) {
  _(
    (0, _.jsx)(_, {
      definitionid: _,
    }),
    _ ? _(_) : window,
  );
}
function _(_, _, _, _) {
  _(
    (0, _.jsx)(_, {
      definition: {
        type: 1,
        rewardDefinition: _,
        itemLevel: _,
        desiredItemLevel: _,
      },
      saleitem: _,
    }),
    _ ? _(_) : window,
  );
}
function _(_, _, _, _) {
  _(
    (0, _.jsx)(_, {
      definition: {
        type: 3,
        profileCustomizationType: _,
        itemCount: _,
        itemLevel: _,
        desiredItemLevel: _,
      },
    }),
    _ ? _(_) : window,
  );
}
function _(_, _, _, _) {
  _(
    (0, _.jsx)(_, {
      definition: {
        type: 2,
        profileCustomizationType: _,
        itemLevel: _,
        desiredItemLevel: _,
      },
    }),
    _ ? _(_) : window,
  );
}
function _(_, _) {
  _(
    (0, _.jsx)(_, {
      definition: {
        type: 1,
        rewardDefinition: _,
      },
    }),
    _ ? _(_) : window,
  );
}
function _(_) {
  switch (_.type) {
    case 1:
      return _.Get().BCanRedeemPointsForItem(_.rewardDefinition);
    case 2:
      return _.Get().BCanRedeemPointsForProfileShowcaseUpgrade(
        _.profileCustomizationType,
        _.itemLevel,
      );
    case 3:
      return _.Get().BCanRedeemPointsForProfileShowcaseSlot(
        _.profileCustomizationType,
        _.itemCount,
      );
  }
  return !1;
}
function _(_) {
  switch (_.type) {
    case 1:
      return _.Get().BRewardEquippedByUser(_.rewardDefinition);
    case 2:
      return !_.Get().BCanRedeemPointsForProfileShowcaseUpgrade(
        _.profileCustomizationType,
        _.itemLevel,
      );
    case 3:
      return !_.Get().BCanRedeemPointsForProfileShowcaseSlot(
        _.profileCustomizationType,
        _.itemCount,
      );
  }
  return !0;
}
function _(_) {
  switch (_.type) {
    case 1:
      return _.rewardDefinition.community_item_class == 1
        ? _.Get().GetCostToLevelSeasonalBadge(_.itemLevel || 0)
        : _.rewardDefinition.type == 5 || _.rewardDefinition.type == 6
          ? _.Get().GetBundleOfferForUser(_.rewardDefinition).point_cost
          : parseInt(_.rewardDefinition.point_cost);
    case 2:
      return _.Get().GetUpgradableProfileShowcaseCost();
    case 3:
      return _.Get().GetPurchasableProfileShowcaseSlotCost();
  }
  return 0;
}
function _(_) {
  switch (_.type) {
    case 1:
      if (_.rewardDefinition.type == 5 || _.rewardDefinition.type == 6) {
        let { discount: _, original_point_cost: _ } =
          _.Get().GetBundleOfferForUser(_.rewardDefinition);
        return {
          discount: _,
          originalCost: _,
        };
      }
      return {
        discount: 0,
        originalCost: parseInt(_.rewardDefinition.point_cost),
      };
    case 2:
      return {
        discount: 0,
        originalCost: _.Get().GetUpgradableProfileShowcaseCost(),
      };
    case 3:
      return {
        discount: 0,
        originalCost: _.Get().GetPurchasableProfileShowcaseSlotCost(),
      };
  }
  return {
    discount: 0,
    originalCost: parseInt(_.rewardDefinition.point_cost),
  };
}
function _(_) {
  let { definitionid: _, ..._ } = _,
    _ = _(() => _.Get().GetRewardItem(_));
  return _
    ? (0, _.jsx)(_, {
        definition: {
          type: 1,
          rewardDefinition: _,
        },
        ..._,
      })
    : null;
}
var _ = class extends _.Component {
  m_bShowTransitions = !1;
  m_bIsMounted = !0;
  m_strError;
  m_mutableObjDefinition;
  constructor(_) {
    (super(_),
      (this.state = {
        step: `loading`,
        error: !1,
        requestInProgress: !1,
      }),
      (this.m_bShowTransitions = !0),
      (this.m_mutableObjDefinition = this.props.definition));
  }
  componentDidMount() {
    if (this.m_mutableObjDefinition.type == 1) {
      let _ = this.m_mutableObjDefinition.rewardDefinition.bundle_defids;
      _(
        () =>
          !_ || _.length == 0 || _.Get().GetRewardDefinitions(..._).length > 0,
      )
        .then(() => {
          let _ = [];
          _?.length == 0
            ? _.push(this.m_mutableObjDefinition.rewardDefinition.appid)
            : (_ = _.Get()
                .GetRewardDefinitions(..._)
                .map((_) => _.appid));
          let _ = Array.from(new Set(_));
          return Promise.all(
            _.map((_) => _.Get().EnsureCommunityItemInventoryLoaded(_)),
          );
        })
        .then(() => this.SetInitialState());
    } else this.SetInitialState();
  }
  componentWillUnmount() {
    this.m_bIsMounted = !1;
  }
  SetInitialState() {
    this.m_bIsMounted &&
      (this.setState({
        error: !1,
        requestInProgress: !1,
      }),
      this.BAlreadyEquipped()
        ? (this.setState({
            step: `equipped`,
          }),
          (this.m_bShowTransitions = !1))
        : this.BSkipToEquip()
          ? (this.setState({
              step: `equip`,
            }),
            (this.m_bShowTransitions = !1))
          : _.Get().BIsLoggedIn() && !this.BCanRedeemPointsForItem()
            ? (this.setState({
                step: `cantredeemforapp`,
              }),
              this.ShowError(),
              (this.m_bShowTransitions = !1))
            : this.BSkipToCantAfford()
              ? (this.setState({
                  step: `cantafford`,
                }),
                this.ShowError(),
                (this.m_bShowTransitions = !1))
              : this.BIsFreeSaleRewardItem()
                ? this.setState({
                    step: `saleitem`,
                  })
                : this.setState({
                    step: `redeem`,
                  }));
  }
  BIsFreeSaleRewardItem() {
    return this.props.saleitem && _.Get().BIsSaleActive();
  }
  BCanRedeemPointsForItem() {
    return _(this.props.definition);
  }
  BSkipToCantAfford() {
    if (this.props.definition.type == 2 || this.props.definition.type == 3)
      return _.Get().BIsLoggedIn() && !this.BCanAffordItem();
    let _ =
      _.Get().BRewardOwnedByUser(this.props.definition.rewardDefinition) &&
      this.props.definition.rewardDefinition.type != 2;
    return _.Get().BIsLoggedIn() && !_ && !this.BCanAffordItem();
  }
  BAlreadyEquipped() {
    return _(this.props.definition);
  }
  BSkipToEquip() {
    return this.props.definition.type == 2 || this.props.definition.type == 3
      ? !1
      : !!(
          _.Get().BRewardOwnedByUser(this.props.definition.rewardDefinition) &&
          ((this.props.definition.rewardDefinition.type == 2 &&
            _.Get().GetUserSeasonalBadgeLevel() >=
              this.props.definition.itemLevel) ||
            this.props.definition.rewardDefinition.type == 1 ||
            this.props.definition.rewardDefinition.type == 5 ||
            this.props.definition.rewardDefinition.type == 6)
        );
  }
  GetPointCost() {
    return _(this.props.definition);
  }
  BCanAffordItem() {
    return _.Get().GetPointsAvailable().getLowBits() >= this.GetPointCost();
  }
  ShowGenericError() {
    this.ShowError(
      _(
        `#Redeem_Error_Generic`,
        (0, _.jsx)(`a`, {
          href: _.HELP_BASE_URL,
          children: _(`#Redeem_Error_SteamSupport`),
        }),
      ),
    );
  }
  ShowError(_) {
    (_ && (this.m_strError = _),
      this.setState({
        error: !0,
        requestInProgress: !1,
      }));
  }
  RedeemPoints() {
    if (!this.state.requestInProgress) {
      if (!_.Get().BIsLoggedIn())
        (this.CloseModal(),
          _.Get().ShowLoginDialog(
            this.props.definition.rewardDefinition
              ? this.props.definition.rewardDefinition.defid
              : void 0,
          ));
      else
        switch (
          (this.setState({
            requestInProgress: !0,
            error: !1,
          }),
          this.props.definition.type)
        ) {
          case 1:
            switch (this.props.definition.rewardDefinition.type) {
              case 1:
              case 5:
              case 6:
                this.BIsFreeSaleRewardItem()
                  ? _.Get()
                      .ClaimFreeSaleItem()
                      .then((_) => {
                        _.eResult == 1
                          ? ((this.m_mutableObjDefinition.rewardDefinition =
                              _.Get().GetClaimedSaleRewardItemDef()),
                            this.setState({
                              step: `equip`,
                              requestInProgress: !1,
                            }))
                          : _.strMessage?.length
                            ? this.ShowError(_.strMessage)
                            : this.ShowGenericError();
                      })
                      .catch(this.ShowGenericError)
                  : _.Get()
                      .RedeemPointsForItem(
                        this.props.definition.rewardDefinition.defid,
                        this.props.definition.rewardDefinition.appid,
                        _(this.m_mutableObjDefinition),
                      )
                      .then((_) => {
                        (_.eResult == 1
                          ? this.setState({
                              step: `equip`,
                              requestInProgress: !1,
                            })
                          : _.strMessage.length
                            ? this.ShowError(_.strMessage)
                            : this.ShowGenericError(),
                          _.eResult == 11 &&
                            this.setState({
                              step: `pricechange`,
                            }));
                      })
                      .catch(this.ShowGenericError);
                break;
              case 4:
                _.Get()
                  .RedeemPointsForCoupon(
                    this.props.definition.rewardDefinition.defid,
                  )
                  .then((_) => {
                    _.eResult == 1
                      ? this.setState({
                          step: `equip`,
                          requestInProgress: !1,
                        })
                      : this.ShowGenericError();
                  })
                  .catch(this.ShowGenericError);
                break;
              case 2: {
                let _ = Math.max(
                  this.props.definition.itemLevel -
                    _.Get().GetUserSeasonalBadgeLevel(),
                  1,
                );
                _.Get()
                  .RedeemPointsForBadge(
                    this.props.definition.rewardDefinition.defid,
                    _,
                  )
                  .then((_) => {
                    _.eResult == 1
                      ? this.setState({
                          step: `equip`,
                          requestInProgress: !1,
                        })
                      : _.strMessage.length
                        ? this.ShowError(_.strMessage)
                        : this.ShowGenericError();
                  })
                  .catch(this.ShowGenericError);
              }
            }
            break;
          case 2:
            _.Get()
              .RedeemPointsForProfileShowcaseUpgrade(
                this.props.definition.profileCustomizationType,
                this.props.definition.desiredItemLevel,
              )
              .then((_) => {
                _.eResult == 1
                  ? (this.setState({
                      requestInProgress: !1,
                    }),
                    this.CloseModal())
                  : _.strMessage.length
                    ? this.ShowError(_.strMessage)
                    : this.ShowGenericError();
              })
              .catch(this.ShowGenericError);
            break;
          case 3:
            _.Get()
              .RedeemPointsForProfileShowcase(
                this.props.definition.profileCustomizationType,
              )
              .then((_) => {
                _.eResult == 1
                  ? this.CloseModal()
                  : _.strMessage.length
                    ? this.ShowError(_.strMessage)
                    : this.ShowGenericError();
              })
              .catch(this.ShowGenericError);
        }
    }
  }
  EquipItem() {
    if (this.state.requestInProgress) return;
    this.setState({
      requestInProgress: !0,
      error: !1,
    });
    let _ = null;
    switch (this.props.definition.rewardDefinition.community_item_class) {
      case 3:
        _ = _.Get().SetProfileBackground(
          this.props.definition.rewardDefinition,
        );
        break;
      case 14:
        _ = _.Get().SetAvatarFrame(this.props.definition.rewardDefinition);
        break;
      case 15:
        _ = _.Get().SetAnimatedAvatar(this.props.definition.rewardDefinition);
        break;
      case 13:
        _ = _.Get().SetMiniProfileBackground(
          this.props.definition.rewardDefinition,
        );
        break;
      case 8:
        _ = _.Get().ActivateProfileModifier(
          this.props.definition.rewardDefinition,
        );
        break;
      case 16:
        _ = _.Get().SetSteamDeckKeyboardSkin(
          this.props.definition.rewardDefinition,
        );
        break;
      case 17:
        ((window.location.href = `steam://open/settings/customization`),
          this.CloseModal());
        return;
      default:
        _(
          !1,
          `Missing equip handler for item class ${this.props.definition.rewardDefinition.community_item_class}`,
        );
        return;
    }
    _.then((_) => {
      _.eResult == 1
        ? this.setState({
            step: `equipped`,
            requestInProgress: !1,
          })
        : this.ShowGenericError();
    }).catch(this.ShowGenericError);
  }
  ReloadItemDef() {
    _.Get()
      .ReloadRewardDefinition(this.props.definition.rewardDefinition.defid)
      .then((_) => {
        _ &&
          ((this.m_mutableObjDefinition.rewardDefinition = _),
          this.SetInitialState());
      });
  }
  CloseModal() {
    this.props.closeModal && this.props.closeModal();
  }
  render() {
    let _ = {
      enter: _,
      enterActive: _,
      exit: _,
      exitActive: _,
    };
    if (this.state.step == `loading`) return null;
    let _ = _(this.props.definition),
      _ = _(this.props.definition),
      _ = this.props.definition.rewardDefinition
        ? _.GetAppInfo(this.props.definition.rewardDefinition.appid)
        : null,
      _ = ``;
    return (
      [1, 5, 6].includes(this.props.definition.rewardDefinition?.type) &&
        (_ = `${document.location.href.split(`/reward/`)[0]}/reward/${this.props.definition.rewardDefinition.defid}`),
      (0, _.jsx)(_, {
        onEscKeypress: this.CloseModal,
        destructive: this.state.error,
        children: (0, _.jsx)(_, {
          className: _,
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                itemName: _,
                itemClassName: _,
                itemLink: _,
                appInfo: _,
                onRequestClose: this.CloseModal,
              }),
              this.m_strError &&
                this.state.error &&
                (0, _.jsx)(`div`, {
                  className: `vGkTcOZZzs4-`,
                  children: this.m_strError,
                }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(
                  _,
                  {
                    enter: this.m_bShowTransitions,
                    exit: this.m_bShowTransitions,
                    classNames: _,
                    timeout: 500,
                    children: (_) =>
                      (0, _.jsx)(_, {
                        definition: this.m_mutableObjDefinition,
                        closeModal: this.CloseModal,
                        redeemPoints: this.RedeemPoints,
                        equipItem: this.EquipItem,
                        step: this.state.step,
                        bRequestInProgress: this.state.requestInProgress,
                        fnReloadItemDef: this.ReloadItemDef,
                        containerRef: _,
                      }),
                  },
                  this.state.step,
                ),
              }),
            ],
          }),
        }),
      })
    );
  }
};
(_([_], _.prototype, `ShowGenericError`, null),
  _([_], _.prototype, `ShowError`, null),
  _([_], _.prototype, `RedeemPoints`, null),
  _([_], _.prototype, `EquipItem`, null),
  _([_], _.prototype, `ReloadItemDef`, null),
  _([_], _.prototype, `CloseModal`, null),
  (_ = _([_], _)));
var _ = (_) => {
    let { definition: _, closeModal: _ } = _,
      _ = () => {},
      _ = _.rewardDefinition ? _.GetAppInfo(_.rewardDefinition.appid) : null;
    return (0, _.jsx)(_, {
      onEscKeypress: _,
      children: (0, _.jsx)(_, {
        children: (0, _.jsx)(`div`, {
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                itemName: _(_),
                itemClassName: _(_),
                appInfo: _,
                onRequestClose: _,
              }),
              (0, _.jsx)(_, {
                definition: _,
                closeModal: _,
                redeemPoints: _,
                equipItem: _,
                step: `preview`,
                bRequestInProgress: !1,
                fnReloadItemDef: _,
              }),
            ],
          }),
        }),
      }),
    });
  },
  _ = _(
    ({
      itemName: _,
      itemClassName: _,
      itemLink: _,
      appInfo: _,
      onRequestClose: _,
    }) => {
      let _ = _();
      return (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, _.jsxs)(_, {
                className: _,
                children: [
                  _,
                  _ &&
                    !_ &&
                    (0, _.jsx)(_, {
                      link: _,
                      style: {
                        marginInlineStart: `8px`,
                      },
                    }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  _: `${_.LoyaltyStore()}/app/` + _.appid,
                  onClick: _,
                  children: (0, _.jsxs)(`div`, {
                    className: `yYJfwmOKeV8-`,
                    children: [
                      (0, _.jsx)(`img`, {
                        className: `_0o67Oqyiv6s-`,
                        src: _.icon_url,
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `l-YzYVEVklE-`,
                        children: [` `, _.name, ` `],
                      }),
                    ],
                  }),
                }),
            ],
          }),
          _.Get().BIsLoggedIn() &&
            (0, _.jsxs)(`div`, {
              className: `DJVnaCtesBQ-`,
              children: [
                (0, _.jsx)(_, {
                  className: `Vi0LRQp-CZU-`,
                }),
                (0, _.jsxs)(`div`, {
                  className: void 0,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: `UIFpv0JRwuo-`,
                      children: _(`#YourBalance`),
                    }),
                    (0, _.jsx)(`div`, {
                      className: `DPoviwyhsY8-`,
                      children: _(_.Get().GetPointsAvailable().getLowBits()),
                    }),
                  ],
                }),
              ],
            }),
        ],
      });
    },
  ),
  _ = (_) =>
    _.type == 2 || _.type == 3
      ? _(
          `#ProfileShowcases_ShowcaseName`,
          _(`#ProfileShowcases_Type_` + _.profileCustomizationType),
        )
      : _(_.rewardDefinition),
  _ = (_) => {
    if (_.type == 1)
      return (
        _(
          _.community_item_data,
          `Missing community item data for virtual item ${_.defid}`,
        ),
        _.community_item_data.item_title
      );
    if (_.type == 2) return _(`#Redeem_Badge_PrestigeBadge`);
    if (_.type == 5) return _.community_item_data.item_title;
    if (_.type == 6) {
      let _ = _.GetAppInfo(_.appid).name || ``;
      return _(`#RewardBundle_AutoGeneratedBundleName`, _);
    }
    return `Unknown`;
  },
  _ = (_) => {
    let { type: _, itemLevel: _, desiredItemLevel: _, rewardDefinition: _ } = _;
    switch (_) {
      case 2:
        return _(_)
          ? _(`#ProfileShowcases_UpgradeLevel`, _, _)
          : _(`#ProfileShowcases_UpgradeAtMaxLevel`, _);
      case 3:
        return _(`#ProfileShowcases_AdditionalSlot`);
      case 1:
        if (_.type == 1 || _.type == 2)
          return _.appid != _.Get().GetCurrentSeasonalAppID() &&
            _.community_item_class == 8 &&
            _.bundle_defids?.length != 0
            ? _(`#RewardItemType_ProfileBundle`)
            : _(_.community_item_class);
        if (_.type == 5 || _.type == 6) return _(`#RewardItemType_Bundle`);
    }
    return ``;
  };
_((_) => {
  let { animatedAvatar: _, persona: _, strClassName: _ } = _,
    _ = {
      size: `FillArea`,
      statusPosition: `none`,
      className: _(_, void 0),
    };
  return (0, _.jsx)(_, {
    persona: _,
    animatedAvatar: _,
    ..._,
  });
});
var _ = _((_) => {
    let {
        animatedAvatar: _,
        avatarFrame: _,
        persona: _,
        className: _,
        strAnimatedAvatarClassName: _,
      } = _,
      _ = {
        size: `FillArea`,
        statusPosition: `none`,
        className: _(_, void 0),
      };
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        persona: _,
        animatedAvatar: _,
        ..._,
        children: (0, _.jsx)(_, {
          profileItem: _,
        }),
      }),
    });
  }),
  _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_Chat`)
        : this.props.step == `saleitem`
          ? (0, _.jsxs)(`div`, {
              children: [
                _(`#LunarSale2022_Redeem_Desc1`),
                (0, _.jsx)(`br`, {}),
                (0, _.jsx)(`br`, {}),
                _(`#LunarSale2022_Redeem_Desc2`),
              ],
            })
          : _(`#Redeem_UsePoints_Sticker`);
    }
    GetModalPreview() {
      if (this.props.step == `saleitem`)
        return (0, _.jsx)(_, {
          className: void 0,
          step: this.props.step,
          children: (0, _.jsx)(`img`, {
            className: _,
            alt: `Free Sale Item`,
            src: _,
          }),
        });
      {
        let _ = this.props.definition.rewardDefinition,
          _ = {
            backgroundImage:
              `url(` + _(_.appid, _.community_item_data.item_image_small) + `)`,
          },
          _ = _(_.appid, _.community_item_data.item_image_large);
        return (0, _.jsxs)(_, {
          className: _,
          step: this.props.step,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              style: _,
            }),
            (0, _.jsx)(_, {
              icon: _,
            }),
          ],
        });
      }
    }
    render() {
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _(_, _),
        children: [
          this.GetModalPreview(),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            }),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_Profile`)
        : this.props.step == `equipped`
          ? (0, _.jsx)(`div`, {
              className: _,
              children: _(
                `#Redeem_Equipped_Background`,
                (0, _.jsx)(`span`, {
                  children:
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title,
                }),
              ),
            })
          : _(`#Redeem_UsePoints_Background`);
    }
    GetPreview() {
      let _ = this.props.definition.rewardDefinition,
        _ = {
          backgroundImage:
            `url(` + _(_.appid, _.community_item_data.item_image_large) + `)`,
        },
        _ = (0, _.jsx)(`div`, {
          className: _(_, _.community_item_data.tiled && `AmUkgklq9kc-`),
          style: _,
        });
      if (_.community_item_data.animated) {
        let _ = _.community_item_data.item_movie_webm,
          _ = _.community_item_data.item_movie_mp4;
        _ = (0, _.jsxs)(`video`, {
          className: _,
          playsInline: !0,
          loop: !0,
          muted: !0,
          autoPlay: !0,
          controls: !1,
          children: [
            (0, _.jsx)(`source`, {
              src: _(_.appid, _),
              type: `video/webm`,
            }),
            (0, _.jsx)(`source`, {
              src: _(_.appid, _),
              type: `video/mp4`,
            }),
          ],
        });
      }
      return _;
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            })
          : null;
    }
    render() {
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _,
        children: [
          (0, _.jsxs)(_, {
            className: _,
            step: this.props.step,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
              }),
              this.GetPreview(),
            ],
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_Chat`)
        : _(`#Redeem_UsePoints_Emoticon`);
    }
    render() {
      let _ = this.props.definition.rewardDefinition,
        _ = _(_.appid, _.community_item_data.item_image_small),
        _ = {
          backgroundImage:
            `url(` + _(_.appid, _.community_item_data.item_image_large) + `)`,
        };
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _(_, _),
        children: [
          (0, _.jsxs)(_, {
            className: _,
            step: this.props.step,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    style: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    style: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    style: _,
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                icon: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            }),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    m_manager = new _(_);
    m_interval;
    GetEffectTypeForDefinition() {
      return this.props.definition.rewardDefinition.internal_description;
    }
    GetEffectConfig() {
      return _[this.GetEffectTypeForDefinition()];
    }
    componentDidMount() {
      let _ = this.GetEffectTypeForDefinition();
      (this.m_manager.AddRoomEffect(_),
        (this.m_interval = window.setInterval(
          () => this.m_manager.AddRoomEffect(_),
          this.GetEffectConfig().timeout,
        )));
    }
    componentWillUnmount() {
      window.clearInterval(this.m_interval);
    }
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_Chat`)
        : _(`#Redeem_UsePoints_ChatEffect`);
    }
    render() {
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _(_, _),
        children: [
          (0, _.jsxs)(_, {
            className: _,
            step: this.props.step,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  effectManager: this.m_manager,
                }),
              }),
              (0, _.jsx)(_, {
                children: this.GetEffectConfig().renderButton(),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            }),
          }),
        ],
      });
    }
  };
_ = _([_], _);
var _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_Profile`)
        : this.props.step == `equipped`
          ? (0, _.jsx)(`div`, {
              className: _,
              children: _(
                `#Redeem_Equipped_MiniProfile`,
                (0, _.jsx)(`span`, {
                  children:
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title,
                }),
              ),
            })
          : _(`#Redeem_UsePoints_MiniProfile`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, _.jsx)(_, {
              onClick: this.props.closeModal,
              children: _(`#Button_Close`),
            })
          : null;
    }
    render() {
      let _ = this.props.definition.rewardDefinition,
        _ = _.Get().GetEquippedItems(),
        _ = _.Get().GetPersonaState(),
        _ = (0, _.jsx)(_, {
          animatedAvatar: _.animated_avatar,
          persona: _,
          avatarFrame: _.avatar_frame,
          className: _,
        });
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            step: this.props.step,
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`video`, {
                  width: `100%`,
                  playsInline: !0,
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  children: [
                    (0, _.jsx)(`source`, {
                      src: _(_.appid, _.community_item_data.item_movie_webm),
                      type: `video/webm`,
                    }),
                    (0, _.jsx)(`source`, {
                      src: _(_.appid, _.community_item_data.item_movie_mp4),
                      type: `video/mp4`,
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _.Get().BIsLoggedIn() && _,
                }),
                (0, _.jsx)(`div`, {
                  className: _(_, `miniprofile_backdropblur`),
                }),
              ],
            }),
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_Profile`)
        : this.props.step == `equipped`
          ? (0, _.jsx)(`div`, {
              className: _,
              children: _(
                `#Redeem_Equipped_AvatarFrame`,
                (0, _.jsx)(`span`, {
                  children:
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title,
                }),
              ),
            })
          : _(`#Redeem_UsePoints_AvatarFrame`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            })
          : null;
    }
    render() {
      let _ = this.props.definition.rewardDefinition,
        _ = _.Get().GetEquippedItems(),
        _ = _.Get().GetPersonaState(),
        _ = {
          appid: _.appid,
          image_small:
            `items/` + _.appid + `/` + _.community_item_data.item_image_small,
        },
        _ = (0, _.jsx)(_, {
          animatedAvatar: _.animated_avatar,
          persona: _,
          avatarFrame: _,
          strAnimatedAvatarClassName: _,
        }),
        _ = null;
      return (
        this.props.step != `equipped` &&
          _.Get().BIsLoggedIn() &&
          (_ = (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                animatedAvatar: _.animated_avatar,
                persona: _,
                avatarFrame: _.avatar_frame,
                strAnimatedAvatarClassName: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#Redeem_Equipped_CurrentAvatarFrame`),
              }),
            ],
          })),
        (0, _.jsxs)(_, {
          ref: this.props.containerRef,
          className: _,
          children: [
            (0, _.jsxs)(_, {
              className: _(_, _),
              step: this.props.step,
              children: [
                (0, _.jsx)(`div`, {
                  className: _(_, _),
                  children: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _(_, _),
                  children: _,
                }),
              ],
            }),
            _,
            (0, _.jsx)(_, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            (0, _.jsx)(_, {
              fnReloadItemDef: this.props.fnReloadItemDef,
              bRequestInProgress: this.props.bRequestInProgress,
              definition: this.props.definition,
              step: this.props.step,
              closeModal: this.props.closeModal,
              redeemPoints: this.props.redeemPoints,
              children: this.GetButtons(),
            }),
          ],
        })
      );
    }
  },
  _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_AnimatedAvatar`)
        : this.props.step == `equipped`
          ? (0, _.jsx)(`div`, {
              className: _,
              children: _(
                `#Redeem_Equipped_AnimatedAvatar`,
                (0, _.jsx)(`span`, {
                  children:
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title,
                }),
              ),
            })
          : _(`#Redeem_UsePoints_AnimatedAvatar`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            })
          : null;
    }
    render() {
      let _ = this.props.definition.rewardDefinition,
        _ = _.Get().GetEquippedItems(),
        _ = _.Get().GetPersonaState(),
        _ = {
          appid: _.appid,
          image_small:
            `items/` + _.appid + `/` + _.community_item_data.item_image_small,
        },
        _ = (0, _.jsx)(_, {
          animatedAvatar: _,
          persona: _,
          avatarFrame: _.avatar_frame,
          strAnimatedAvatarClassName: _,
        }),
        _ = null;
      return (
        this.props.step != `equipped` &&
          _.Get().BIsLoggedIn() &&
          (_ = (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                animatedAvatar: _.animated_avatar,
                persona: _,
                avatarFrame: _.avatar_frame,
                strAnimatedAvatarClassName: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#Redeem_Equipped_CurrentAvatar`),
              }),
            ],
          })),
        (0, _.jsxs)(_, {
          ref: this.props.containerRef,
          className: _,
          children: [
            (0, _.jsxs)(_, {
              className: _(_, _),
              step: this.props.step,
              children: [
                (0, _.jsx)(`div`, {
                  className: _(_, _),
                  children: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _(_, _),
                  children: _,
                }),
              ],
            }),
            _,
            (0, _.jsx)(_, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            (0, _.jsx)(_, {
              fnReloadItemDef: this.props.fnReloadItemDef,
              bRequestInProgress: this.props.bRequestInProgress,
              definition: this.props.definition,
              step: this.props.step,
              closeModal: this.props.closeModal,
              redeemPoints: this.props.redeemPoints,
              children: this.GetButtons(),
            }),
          ],
        })
      );
    }
  },
  _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_SteamDeckKeyboardSkin`)
        : _(`#Redeem_UsePoints_SteamDeckKeyboardSkin`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : null;
    }
    render() {
      let _ = this.props.definition.rewardDefinition,
        _ = _(_.appid, _.community_item_data.item_image_large);
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _(_),
        children: [
          (0, _.jsx)(_, {
            className: _,
            step: this.props.step,
            children: (0, _.jsx)(`img`, {
              className: _,
              src: _,
            }),
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    m_rtMinClientVersion = 1757452101;
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_SteamDeckStartupMovie`)
        : _(`#Redeem_UsePoints_SteamDeckStartupMovie`);
    }
    GetButtons() {
      if (this.props.step == `equip`)
        return (0, _.jsx)(_, {
          closeModal: this.props.closeModal,
          equipItem: this.props.equipItem,
        });
    }
    BShowClientMinVersionWarning() {
      let _ = _();
      return (
        (!_ || _ < this.m_rtMinClientVersion) &&
        this.props.step == `redeem` &&
        this.props.definition.rewardDefinition.timestamp_created >
          this.m_rtMinClientVersion
      );
    }
    render() {
      let _ = this.props.definition.rewardDefinition,
        _ = _(_.appid, _.community_item_data.item_image_large);
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _(_),
        children: [
          (0, _.jsx)(_, {
            className: _,
            step: this.props.step,
            children: (0, _.jsxs)(`video`, {
              className: _,
              width: `100%`,
              playsInline: !0,
              loop: !0,
              muted: !1,
              autoPlay: !0,
              controls: !1,
              children: [
                (0, _.jsx)(`source`, {
                  src: _(_.appid, _.community_item_data.item_movie_webm),
                  type: `video/webm`,
                }),
                (0, _.jsx)(`source`, {
                  src: _(_.appid, _.community_item_data.item_movie_mp4),
                  type: `video/mp4`,
                }),
                (0, _.jsx)(`img`, {
                  src: _,
                }),
              ],
            }),
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
            children:
              this.BShowClientMinVersionWarning() &&
              (0, _.jsx)(`div`, {
                className: _(`rqbaF3Yp8t4-`, `rXXwPkvcub4-`),
                children: _(
                  `#Redeem_Warning_LatestClient`,
                  _(this.m_rtMinClientVersion, !1, !0),
                ),
              }),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    GetDescription() {
      return _(`#Redeem_UsePoints_Badge`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
          })
        : null;
    }
    GetPreviewForLevel() {
      let _ = _.Get().GetUserSeasonalBadgeLevel();
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            definition: this.props.definition.rewardDefinition,
            badgeLevel: _,
            title: _(`#Redeem_Badge_CurrentLevel`),
          })
        : _ == 0
          ? (0, _.jsx)(_, {
              definition: this.props.definition.rewardDefinition,
              badgeLevel: this.props.definition.itemLevel,
              title: _(`#Redeem_Badge_AfterPoints`),
            })
          : (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: _,
                  title: _(`#Redeem_Badge_CurrentLevel`),
                }),
                (0, _.jsx)(`div`, {
                  className: _(_, _),
                  children: (0, _.jsx)(`div`, {
                    className: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: this.props.definition.itemLevel,
                  title: _(`#Redeem_Badge_AfterPoints`),
                }),
              ],
            });
    }
    render() {
      return this.props.definition.rewardDefinition.community_item_data
        .badge_data[this.props.definition.itemLevel - 1]
        ? (0, _.jsxs)(_, {
            ref: this.props.containerRef,
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                children: this.GetPreviewForLevel(),
              }),
              (0, _.jsx)(_, {
                definition: this.props.definition,
                step: this.props.step,
                description: this.GetDescription(),
              }),
              (0, _.jsx)(_, {
                fnReloadItemDef: this.props.fnReloadItemDef,
                bRequestInProgress: this.props.bRequestInProgress,
                definition: this.props.definition,
                step: this.props.step,
                closeModal: this.props.closeModal,
                redeemPoints: this.props.redeemPoints,
                children: this.GetButtons(),
              }),
            ],
          })
        : (console.log(
            `Missing badge level ${this.props.definition.itemLevel} image`,
          ),
          null);
    }
  };
_ = _([_], _);
var _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_Coupon`)
        : _(`#Redeem_UsePoints_Coupon`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            })
          : null;
    }
    render() {
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: void 0,
        children: [
          (0, _.jsx)(_, {
            className: _,
            step: this.props.step,
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_GoldenProfile`)
        : this.props.step == `equipped`
          ? _(`#Redeem_Equipped_GoldenProfile`)
          : _(`#Redeem_UsePoints_GoldenProfile`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            })
          : null;
    }
    render() {
      let { definition: _ } = this.props,
        _ = _.Get().GetPersonaState(),
        _ = _.Get().GetEquippedItems(),
        _ = _.Get().GetGoldenProfileConfigForApp(_.rewardDefinition.appid);
      if (!_ && _.rewardDefinition.bundle_defids?.length == 0) return null;
      if (!_) {
        _ = {
          appid: _.rewardDefinition.appid,
          frame: ``,
        };
        let _ = _.Get()
          .GetRewardDefinitions(..._.rewardDefinition.bundle_defids)
          .filter((_) => _.community_item_class == 14);
        _?.length != 0 &&
          (_.frame =
            `items/` +
            _.rewardDefinition.appid +
            `/` +
            _[0].community_item_data.item_image_small);
      }
      let _ = {
        image_small: _.frame,
      };
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            step: this.props.step,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                size: `FillArea`,
                className: _,
                persona: _,
                animatedAvatar: _.animated_avatar,
                avatarFrame: _,
              }),
            }),
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
            children: (0, _.jsx)(_, {
              children: _(`#Redeem_GoldenProfile_Expiration`),
            }),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    constructor(_) {
      (super(_),
        (this.state = {
          bLoadedIFrame: !1,
          iframeHeight: 0,
        }));
    }
    componentDidMount() {
      window.addEventListener(`message`, this.OnProfileFrameResized);
    }
    componentWillUnmount() {
      window.removeEventListener(`message`, this.OnProfileFrameResized);
    }
    OnProfileFrameResized = (_) => {
      _.data.message &&
        _.data.message == `iframe_dimensions` &&
        this.setState({
          iframeHeight: _.data.height,
        });
    };
    OnProfileFrameLoaded() {
      this.setState({
        bLoadedIFrame: !0,
      });
    }
    GetDescription() {
      let _ = _(
        `#ProfileShowcases_Type_` +
          this.props.definition.profileCustomizationType,
      );
      if (this.props.step == `equipped`)
        return this.props.definition.type == 2
          ? _(
              `#Redeem_Equipped_ProfileShowcaseUpgraded`,
              _,
              this.props.definition.itemLevel,
            )
          : _(`#Redeem_Equipped_ProfileShowcaseSlotPurchased`, _);
      if (this.props.definition.type == 2)
        return _(
          `#Redeem_UsePoints_ProfileShowcaseUpgrade`,
          this.props.definition.desiredItemLevel,
        );
      let _ = _.Get().GetMaxProfileShowcaseSlots();
      return _(`#Redeem_UsePoints_ProfileShowcaseSlot`, _, _ + 1);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, _.jsx)(_, {
              closeModal: this.props.closeModal,
            })
          : null;
    }
    GetProfileSteamID() {
      return _.Get().BIsLoggedIn()
        ? _.steamid
        : _.EUNIVERSE == 2
          ? `148618792083695825`
          : `76561197960266962`;
    }
    render() {
      let _ = this.state.bLoadedIFrame,
        _ = _(this.props.definition.profileCustomizationType),
        _ = this.props.definition.profileCustomizationType,
        _ = Math.min(
          this.props.definition.desiredItemLevel
            ? this.props.definition.desiredItemLevel
            : this.props.definition.itemLevel,
          _.Get().GetMaxProfileShowcaseUpgradeLevel(),
        ),
        _ = this.state.iframeHeight * 0.5;
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _,
        children: [
          (0, _.jsxs)(_, {
            className: _(_, _ ? _ : void 0),
            step: this.props.step,
            children: [
              (0, _.jsx)(`img`, {
                className: _,
                src: _,
              }),
              !_ &&
                (0, _.jsx)(`div`, {
                  className: void 0,
                  children: (0, _.jsx)(_, {
                    position: `center`,
                    size: `xlarge`,
                    string: _(
                      `#ProfileShowcases_LoadingPreview`,
                      _(`#ProfileShowcases_Type_` + _),
                    ),
                  }),
                }),
              (0, _.jsx)(_, {
                childFocusDisabled: !0,
                focusable: !1,
                className: _,
                style: {
                  height: _ == 0 ? `1px` : _ + `px`,
                },
                children: (0, _.jsx)(`iframe`, {
                  className: _,
                  src:
                    _.COMMUNITY_BASE_URL +
                    `profiles/` +
                    this.GetProfileSteamID() +
                    `/previewsingleshowcase/?customization_type=${_}&level=${_}`,
                  frameBorder: 0,
                  scrolling: `no`,
                  onLoad: () => {
                    this.OnProfileFrameLoaded();
                  },
                }),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  _ = class extends _.Component {
    constructor(_) {
      super(_);
    }
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_Bundle`)
        : _(`#Redeem_UsePoints_Bundle`);
    }
    GetButtons() {
      return this.props.step == `equip` || this.props.step == `equipped`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
          })
        : null;
    }
    render() {
      let _ = _.Get()
        .GetBundleOfferForUser(this.props.definition.rewardDefinition)
        .items.map((_) => {
          let _ = _.community_item_data.item_image_large,
            _ = _(_.appid, _);
          _.community_item_class == 3 &&
            (_ =
              _.COMMUNITY_CDN_URL +
              `economy/profilebackground/items/` +
              _.appid +
              `/` +
              _.community_item_data.item_image_large +
              `?size=320x200`);
          let _ = _.Get().BRewardOwnedByUser(_);
          return (0, _.jsxs)(
            _,
            {
              padding: `xxsmall`,
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`img`, {
                    src: _,
                  }),
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _.community_item_data.item_title,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _(_.community_item_class),
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsxs)(`div`, {
                    className: `_3dPWreoHzmc-`,
                    children: [
                      (0, _.jsx)(_, {
                        className: `lDkhbpSdBnI-`,
                      }),
                      this.props.step == `redeem` &&
                        _(`#Redeem_BundleItemOwned`),
                    ],
                  }),
              ],
            },
            _.defid,
          );
        });
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  };
function _(_) {
  return _()
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`a`, {
          href: _.strPreviewURL,
          target: `_blank`,
          className: _,
          children: _(`#ProfileModifier_PreviewLinkText`),
        }),
      });
}
var _ = class extends _.Component {
    constructor(_) {
      (super(_),
        (this.state = {
          bLoadedIFrame: !1,
        }));
    }
    OnIFrameLoaded() {
      this.setState({
        bLoadedIFrame: !0,
      });
    }
    GetProfileSteamID() {
      return _.Get().BIsLoggedIn()
        ? _.steamid
        : _.EUNIVERSE == 2
          ? `148618792083695825`
          : `76561197960266962`;
    }
    GetDescription() {
      return this.props.step == `equip`
        ? _(`#Redeem_Equip_ProfileBundle`)
        : _(`#Redeem_UsePoints_ProfileBundle`);
    }
    GetButtons() {
      return this.props.step == `equip` || this.props.step == `equipped`
        ? (0, _.jsx)(_, {
            closeModal: this.props.closeModal,
          })
        : null;
    }
    render() {
      let { bLoadedIFrame: _ } = this.state,
        _ = _.Get().GetBundleOfferForUser(
          this.props.definition.rewardDefinition,
        ),
        _ = this.props.definition.rewardDefinition.appid,
        _ = this.props.definition.rewardDefinition.community_item_type,
        _ = _.items.map((_) => {
          let _ = _(_),
            _ = _.Get().BRewardOwnedByUser(_),
            _ = _.community_item_class == 8;
          return (0, _.jsxs)(
            _,
            {
              padding: `xxsmall`,
              className: _(_, _ && `nma2heV7NJU-`),
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`img`, {
                    src: _,
                  }),
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _.community_item_data.item_title,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _(_.community_item_class),
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsxs)(`div`, {
                    className: `_3dPWreoHzmc-`,
                    children: [
                      (0, _.jsx)(_, {
                        className: `lDkhbpSdBnI-`,
                      }),
                      this.props.step == `redeem` &&
                        _(`#Redeem_ProfileBundleItemOwned`),
                    ],
                  }),
              ],
            },
            _.defid,
          );
        }),
        _ =
          _.COMMUNITY_BASE_URL +
          `profiles/` +
          this.GetProfileSteamID() +
          `?previewprofile=1&appid=` +
          _ +
          `&itemtype=` +
          _;
      return (0, _.jsxs)(_, {
        ref: this.props.containerRef,
        className: _(_, _ ? _ : void 0),
        children: [
          !_ &&
            (0, _.jsx)(`div`, {
              className: void 0,
              children: (0, _.jsx)(_, {
                position: `center`,
                size: `xlarge`,
                string: _(
                  `#ProfileBundle_LoadingPreview`,
                  _(this.props.definition.rewardDefinition),
                ),
              }),
            }),
          (0, _.jsx)(_, {
            childFocusDisabled: !0,
            focusable: !1,
            className: _,
            children: (0, _.jsx)(`iframe`, {
              className: _,
              src: _,
              frameBorder: 0,
              scrolling: `no`,
              onLoad: () => {
                this.OnIFrameLoaded();
              },
            }),
          }),
          (0, _.jsx)(_, {
            strPreviewURL: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(_, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, _.jsx)(_, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  _ = {
    11: _,
    3: _,
    4: _,
    13: _,
    14: _,
    15: _,
    1: _,
    12: _,
    8: _,
    16: _,
    17: _,
  },
  _ = _((_) => {
    let _ = null;
    switch (_.definition.type) {
      case 3:
      case 2:
        _ = _;
        break;
      case 1:
        _ =
          _.definition.rewardDefinition.type == 5 ||
          _.definition.rewardDefinition.type == 6
            ? _
            : _.definition.rewardDefinition.community_item_class == 8 &&
                _.definition.rewardDefinition.bundle_defids?.length != 0
              ? _
              : _[_.definition.rewardDefinition.community_item_class];
    }
    return _
      ? (0, _.jsx)(_, {
          ..._,
        })
      : _.definition.rewardDefinition.type == 4
        ? (0, _.jsx)(_, {
            ..._,
          })
        : null;
  }),
  _ = (_) => {
    let { className: _, ..._ } = _;
    return (0, _.jsxs)(`div`, {
      className: _(_, _.className),
      ..._,
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        _.children,
      ],
    });
  },
  _ = (_) => {
    let {
      cost: _,
      discount: _,
      originalCost: _,
      redeemPoints: _,
      closeModal: _,
    } = _;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          cost: _,
          discount: _,
          originalCost: _,
          onClick: _,
        }),
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#Button_Cancel`),
        }),
      ],
    });
  },
  _ = (_) => {
    let { cost: _, discount: _, originalCost: _, onClick: _, className: _ } = _;
    if (_) {
      let _ = _ ? _(_) : ``,
        _ = _.Get().BIsLoggedIn()
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [`\xA0`, _, ` `, _(`#Rewards_Points`), `\xA0`],
                }),
                (0, _.jsxs)(_, {
                  amount: _,
                  children: [` `, _ > 0 && _(`#Rewards_Points`)],
                }),
              ],
            })
          : (0, _.jsx)(`span`, {
              children: _(`#Button_Login`),
            });
      return (0, _.jsxs)(_, {
        focusable: !0,
        className: _(_, _),
        onActivate: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [`-`, _, `%`],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      });
    }
    let _ = _.Get().BIsLoggedIn()
      ? (0, _.jsxs)(_, {
          size: 1.125,
          amount: _,
          children: [` `, _ > 0 && _(`#Rewards_Points`)],
        })
      : (0, _.jsx)(`span`, {
          children: _(`#Button_Login`),
        });
    return (0, _.jsx)(_, {
      focusable: !0,
      className: _(_, _),
      onActivate: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    });
  },
  _ = (_) => {
    let { closeModal: _ } = _,
      _ = () => {
        ((window.location.href = `steam://open/friends`), _());
      };
    return _.IN_CLIENT
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              onClick: _,
              children: _(`#Button_Goto_Chat`),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              children: _(`#Button_Later`),
            }),
          ],
        })
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              onClick: () => {
                (window.open(
                  _.CHAT_BASE_URL + `chat`,
                  `height=790,width=1015,resize=yes,scrollbars=yes`,
                ),
                  _());
              },
              children: _(`#Button_Goto_WebChat`),
            }),
            (0, _.jsx)(_, {
              onClick: async () => {
                (_(), _());
              },
              children: _(`#Button_Goto_ClientChat`),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              children: _(`#Button_Later`),
            }),
          ],
        });
  },
  _ = (_) => {
    let { equipItem: _, closeModal: _ } = _;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#Button_Equip`),
        }),
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#Button_Later`),
        }),
      ],
    });
  },
  _ = (_) => {
    let { closeModal: _ } = _;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          onClick: () => (window.location.href = _.COMMUNITY_BASE_URL + `my`),
          children: _(`#Button_Goto_Profile`),
        }),
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#Button_Close`),
        }),
      ],
    });
  },
  _ = (_) => {
    let { closeModal: _ } = _;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          onClick: _,
          children: (0, _.jsx)(_, {
            _: _.LoyaltyHowItWorks(),
            children: _(`#Redeem_NeedToOwnApp`),
          }),
        }),
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#Button_Cancel`),
        }),
      ],
    });
  },
  _ = (_) => {
    let { closeModal: _ } = _;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          onClick: _,
          children: (0, _.jsx)(_, {
            _: _.LoyaltyHowItWorks(),
            children: _(`#Redeem_HowToGetPoints`),
          }),
        }),
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#Button_Cancel`),
        }),
      ],
    });
  },
  _ = (_) => {
    let { closeModal: _, fnReloadItemDef: _ } = _;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#Redeem_PriceChange`),
        }),
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#Button_Cancel`),
        }),
      ],
    });
  },
  _ = (_) => {
    let {
        step: _,
        definition: _,
        closeModal: _,
        redeemPoints: _,
        bRequestInProgress: _,
        fnReloadItemDef: _,
        ..._
      } = _,
      _ = _.children;
    if (_)
      _ = (0, _.jsx)(_, {
        className: _,
        size: `medium`,
      });
    else if (_ == `preview`)
      _ = (0, _.jsx)(_, {
        onClick: _,
        children: _(`#Button_Close`),
      });
    else if (_ == `redeem`) {
      let _ = _(_),
        { discount: _, originalCost: _ } = _(_);
      _ = (0, _.jsx)(_, {
        cost: _,
        discount: _,
        originalCost: _,
        redeemPoints: _,
        closeModal: _,
      });
    } else
      _ == `cantredeemforapp`
        ? (_ = (0, _.jsx)(_, {
            closeModal: _,
          }))
        : _ == `cantafford`
          ? (_ = (0, _.jsx)(_, {
              closeModal: _,
            }))
          : _ == `saleitem`
            ? (_ = (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: _(`#SummerSale_Redeem_Btn`),
                  }),
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: _(`#Button_Cancel`),
                  }),
                ],
              }))
            : _ == `pricechange` &&
              (_ = (0, _.jsx)(_, {
                fnReloadItemDef: _,
                closeModal: _,
              }));
    return (0, _.jsx)(_, {
      "flow-children": `row`,
      className: _,
      ..._,
      children: _,
    });
  },
  _ = (_) => {
    let { step: _, className: _, ..._ } = _,
      _ = null;
    return (
      _.step == `equip`
        ? (_ = (0, _.jsx)(`div`, {
            className: _(_, _),
          }))
        : _.step == `equipped` &&
          (_ = (0, _.jsx)(_, {
            className: _(_, void 0),
          })),
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        ..._,
        children: [_, _.children],
      })
    );
  },
  _ = (_) => {
    let { icon: _, ..._ } = _;
    return (0, _.jsx)(`div`, {
      className: _,
      ..._,
      children: (0, _.jsx)(`div`, {
        className: _,
        style: _ && {
          backgroundImage: `url( ${_} )`,
        },
        children: _.children,
      }),
    });
  },
  _ = (_) => {
    let { definition: _, badgeLevel: _, title: _ } = _;
    if (!_) return null;
    let _ = _.community_item_data.badge_data[_ - 1]?.image,
      _ = _;
    return (
      _.Get().GetUserSeasonalBadgeLevel() == _ && (_ = _),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  style: {
                    backgroundImage: `url( ${_(_.appid, _)} )`,
                  },
                }),
              }),
              (0, _.jsx)(`div`, {
                className: _,
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  _ = (_) => {
    let { definition: _, step: _, description: _, ..._ } = _,
      _,
      _ = null;
    if (
      (_ == `equip` || _ == `equipped`) &&
      _.rewardDefinition &&
      _.rewardDefinition.type == 1
    )
      _ = (0, _.jsx)(`div`, {
        className: _,
        children: _(`#Redeem_YoursToOwn`, _(_.rewardDefinition)),
      });
    else if (_ == `cantredeemforapp`) {
      let _ = (0, _.jsx)(`span`, {
        className: _,
        children: _.GetAppInfo(_.rewardDefinition.appid).name || ``,
      });
      _ = (0, _.jsx)(`div`, {
        className: _(_, _),
        children: _(`#Redeem_CantRedeemItemForApp`, _),
      });
    } else if (_ == `cantafford`) {
      let _ = _(_) - _.Get().GetPointsAvailable().getLowBits();
      _ = (0, _.jsx)(`div`, {
        className: _(_, _),
        children: _(`#Redeem_CantAfford`, _(_)),
      });
    }
    return (0, _.jsxs)(`div`, {
      className: _,
      ..._,
      children: [
        _,
        (0, _.jsx)(`div`, {
          children: _,
        }),
        _.children,
        _,
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#Redeem_RefundWarning`),
        }),
      ],
    });
  },
  _ = _.forwardRef((_, _) => {
    let { className: _, ..._ } = _;
    return (0, _.jsx)(_, {
      ref: _,
      className: _(_, _),
      ..._,
      children: _.children,
    });
  });
function _(_) {
  let { children: _, destructive: _, onEscKeypress: _ } = _;
  return (0, _.jsx)(_, {
    onEscKeypress: _,
    bHideCloseIcon: !0,
    bDestructiveWarning: _,
    hideTopBar: !1,
    bGamepadUIScrollWithin: !0,
    children: _,
  });
}
function _(_) {
  let _ = _() !== `desktop`;
  return (0, _.jsx)(_, {
    className: _(_, _ && `NM6fjIFjHkY-`),
    ..._,
  });
}
var _ = `_00D5nJ9-bK0-`,
  _ = `FYkEr1tJnZE-`;
function _(_) {
  return Math.max(0, _.cTotalMatchingUnfiltered - _.cTotalMatching);
}
function _(_) {
  let _ = _(_);
  return _ === 0 ? null : _(`#HiddenWithCountButton`, _(_));
}
function _(_) {
  let _ = _(_);
  return _ === 0
    ? null
    : (0, _.jsx)(
        _,
        {
          title: _(`#HiddenItems_Explanation`, _, _(_)),
          children: _(_),
        },
        `HiddenCallout`,
      );
}
var _ = (_) => {
    switch (_.descriptor.type) {
      case 1:
        let _ = (0, _.jsx)(_, {
          ..._,
        });
        return _.descriptor.bHomogeneous
          ? (0, _.jsx)(_, {
              children: _,
            })
          : _;
      case 0:
        let _ = (0, _.jsx)(_, {
          ..._,
        });
        return _.descriptor.bHomogeneous
          ? (0, _.jsx)(_, {
              children: _,
            })
          : _;
      case 2:
        return (0, _.jsx)(_, {
          children: (_) =>
            _ === `desktop`
              ? (0, _.jsx)(_, {
                  ..._,
                })
              : (0, _.jsx)(_, {
                  ..._,
                }),
        });
      default:
        return (
          console.error(`Unknown cluster display: ${_.descriptor.type}`), null
        );
    }
  },
  _ = class extends _.Component {
    render() {
      if (this.props.descriptor.type != 1) return null;
      let {
          descriptor: {
            cluster: { _: _, title: _, subtitle: _, GetRewards: _ },
            title: _,
            subtitle: _,
            bHideHiddenItemCount: _,
          },
          linkedPage: _,
          additionalFilter: _,
        } = this.props,
        _ = _ ? _(_) : void 0,
        _ = {
          getItems: (_, _) => _(_, _, _),
          title: _ || _,
          subtitle: _ || _,
          route: _,
          bHideHiddenItemCount: !!_,
        };
      return (0, _.jsx)(_, {
        children: (_) =>
          _ === `desktop`
            ? (0, _.jsx)(_, {
                ..._,
              })
            : (0, _.jsx)(_, {
                ..._,
              }),
      });
    }
  };
_ = _([_], _);
var _ = 10,
  _ = _((_) => {
    let {
        title: _,
        subtitle: _,
        route: _,
        getItems: _,
        bHideHiddenItemCount: _,
      } = _,
      _ = _(),
      [_, _] = _.useState(_),
      _ = () => _(_ + _),
      _ = _(0, _),
      { rewards: _, bLoadingMore: _, cTotalMatching: _ } = _,
      _ = _();
    if (_ === 0) return null;
    let _ = !_ && !_ && _(_);
    return (0, _.jsx)(_, {
      title: _,
      subtitle: _ || void 0,
      rightActions: _
        ? (0, _.jsx)(_, {
            _: _,
            children: (0, _.jsx)(_, {
              onClick: () => _.push(_),
              children: _(`#SeeAllButton`),
            }),
          })
        : void 0,
      children: (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          items: _,
          loadMore: _,
          bLoadingMore: _,
          renderItem: (_) =>
            (0, _.jsx)(
              _,
              {
                definition: _,
              },
              _.defid,
            ),
          style: _,
        }),
      }),
    });
  }),
  _ = _((_) => {
    let {
        title: _,
        subtitle: _,
        route: _,
        getItems: _,
        bHideHiddenItemCount: _,
      } = _,
      _ = (_, _) => _(_, _).rewards,
      _ = _(0, 0),
      _ = _(
        _,
        (_) =>
          (0, _.jsx)(
            _,
            {
              definition: _,
            },
            _.defid,
          ),
        {
          itemClassName: _,
          fnRenderItemSkeleton: () => (0, _.jsx)(_, {}),
        },
      ),
      _ = _.bAllowNext || _.bAllowPrev,
      _ = ``;
    if (
      ((_ =
        _.cMaxToReturn > 0
          ? _(`#SeeAllButton`)
          : _.cTotalMatching > 0
            ? _(`#SeeAllWithCountButton`, _(_.cTotalMatching))
            : _(`#SeeAllButton`)),
      _.cTotalMatching === 0 && !_.bLoadingMore)
    )
      return null;
    let _ = !_ || !_,
      _ = !_ && _ && _(_),
      _ = [],
      _ = [];
    return (
      !_ &&
        _.push(
          (0, _.jsx)(
            _,
            {
              _: _,
              children: (0, _.jsx)(_, {
                children: _,
              }),
            },
            `SeeAll`,
          ),
        ),
      _ &&
        _.push(
          (0, _.jsx)(
            _,
            {
              ..._,
            },
            `CarouselControls`,
          ),
        ),
      _ && (_.length == 0 ? _.push(_) : _.length == 0 && _.push(_)),
      (0, _.jsx)(_, {
        title: _,
        subtitle: _,
        leftActions: _,
        rightActions: _,
        children: (0, _.jsx)(_, {
          style: {
            width: `100%`,
            flexWrap: `wrap`,
          },
          ..._,
        }),
      })
    );
  }),
  _ = _((_) => {
    let {
        descriptor: {
          title: _,
          subtitle: _,
          cluster: { _: _, title: _, subtitle: _, GetRewards: _ },
        },
        additionalFilter: _,
      } = _,
      _ = (_, _) => _(_, _, _),
      _ = _(_(0, 0));
    return (0, _.jsx)(_, {
      title: _ || _,
      subtitle: _ || _,
      rightActions: _ || void 0,
      children: (0, _.jsx)(
        _,
        {
          style: {
            width: `100%`,
          },
          itemClassName: _,
          getItems: _,
          renderItem: (_) =>
            (0, _.jsx)(
              _,
              {
                definition: _,
              },
              _.defid,
            ),
          renderItemSkeleton: () => (0, _.jsx)(_, {}),
        },
        `${_}||${JSON.stringify(_)}`,
      ),
    });
  }),
  _ = _((_) => {
    let { descriptor: _, additionalFilter: _, linkedPage: _ } = _,
      _ = _(`(min-width: 1070px)`);
    if (_.type !== 2)
      return (
        console.error(
          `Attempt to render a hero cluster with a non-hero view. Cluster ${_.cluster._}`,
        ),
        null
      );
    let {
        strImage: _,
        bFullBleedImage: _,
        theme: _,
        title: _,
        subtitle: _,
        cluster: { title: _, subtitle: _, GetRewards: _ },
      } = _,
      _ = _ ? _(_) : void 0,
      _ = _(0, _ ? 4 : 3, _),
      _ =
        _.bLoadingMore && _.rewards.length === 0
          ? [
              (0, _.jsx)(_, {}, `0`),
              (0, _.jsx)(_, {}, `1`),
              (0, _.jsx)(_, {}, `2`),
            ]
          : _.rewards.map((_) =>
              (0, _.jsx)(
                _,
                {
                  definition: _,
                  theme: _,
                },
                _.defid,
              ),
            );
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        title: _ || _,
        description: _ || _,
        imgSrc: _,
        fullbleed: _,
        style: {
          width: `100%`,
        },
        itemClassName: _,
        actions: (0, _.jsx)(_, {
          _: _,
          children: (0, _.jsx)(_, {
            theme: _,
            children: _(`#SeeAllButton`),
          }),
        }),
        children: _,
      }),
    });
  }),
  _ = _((_) => {
    let { descriptor: _, additionalFilter: _, linkedPage: _ } = _,
      _ = _();
    if (_.type !== 2)
      return (
        console.error(
          `Attempt to render a hero cluster with a non-hero view. Cluster ${_.cluster._}`,
        ),
        null
      );
    let {
        strImage: _,
        bFullBleedImage: _,
        theme: _,
        title: _,
        subtitle: _,
        cluster: { title: _, subtitle: _, GetRewards: _ },
      } = _,
      _ = _ ? _(_) : void 0;
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        title: _ || _,
        description: ``,
        imgSrc: _,
        fullbleed: _,
        style: {
          width: `100%`,
        },
        itemClassName: _,
        actions: (0, _.jsx)(_, {
          _: _,
          children: (0, _.jsx)(_, {
            onClick: () => _.push(_),
            theme: _,
            className: _,
            children: _(`#SeeAllButton`),
          }),
        }),
        children: (0, _.jsx)(_, {
          items: _(0, 6, _).rewards,
          loadMore: () => {},
          renderItem: (_) =>
            (0, _.jsx)(
              _,
              {
                definition: _,
                theme: _,
              },
              _.defid,
            ),
        }),
      }),
    });
  }),
  _ = (_) => {
    let { definition: _, theme: _ } = _,
      _ = _();
    return (0, _.jsx)(_, {
      definition: _,
      onClick: (_) => {
        _.type === 5 || _.type === 6
          ? _.push(_.LoyaltyItemBundle(_.defid))
          : _(_, _);
      },
      theme: _,
    });
  },
  _ = `UKNN-VSVN60-`,
  _ = `_4yZ2jlBr-qc-`,
  _ = `_9xOXBdSOJCk-`,
  _ = `oYAjUTuUHeY-`;
function _(_) {
  let {
      title: _,
      description: _,
      image: _,
      iconComponent: _,
      linked_page: _,
      link_text: _,
    } = _,
    _ = _,
    _ = typeof _ == `string` ? _ : _(_);
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ &&
          (0, _.jsx)(`img`, {
            className: `zoPKWGHvEZ0-`,
            src: _,
          }),
        _ &&
          (0, _.jsx)(_, {
            className: `zoPKWGHvEZ0-`,
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            (0, _.jsx)(`div`, {
              className: void 0,
              children: _,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          className: _,
          _: _,
          children: _,
        }),
      ],
    }),
  });
}
var _ = `Fy-u3ElJkZ0-`,
  _ = `kYT-MBE2bZg-`;
function _(_) {
  let { children: _ } = _,
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _.current && _.current.NavTree()?.Activate(!0);
    }, []),
    (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        className: _(_),
        navRef: _,
        children: (0, _.jsx)(_, {
          domain: `store.steampowered.com`,
          feature: `pointsshop`,
          children: (0, _.jsx)(_, {
            display: `flex`,
            flexDirection: `row`,
            className: _,
            children: (0, _.jsx)(_, {
              flex: `1`,
              className: void 0,
              "flow-children": `column`,
              children: _,
            }),
          }),
        }),
      }),
    })
  );
}
function _(_) {
  (0, _.useEffect)(
    () => (
      _.Get().SetCurrentSearchPlaceholder(_),
      () => _.Get().SetCurrentSearchPlaceholder(``)
    ),
    [_],
  );
}
var _ = new URL(
    `../../../images/applications/store/coin_single.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/bored.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/happy.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/boombox.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/csgoChat_128_chickendance.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/csgoChat_128_hugs.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/dance.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/icons_floor.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `JDQq5qM7-gM-`,
  _ = `_4MeXsKxzWjc-`,
  _ = `qda3UHfYxN4-`,
  _ = `_8muhPT-1QqU-`,
  _ = `_7UvtC7QiTN8-`,
  _ = `nSTdLsKaM18-`,
  _ = `QgDGK3-ZeKk-`,
  _ = `OPJAScsg1LM-`,
  _ = `Czz5J4R3RrM-`,
  _ = `ydJU827qD-s-`,
  _ = `_5sdsIA1uVHE-`,
  _ = new URL(
    `../../../images/applications/store/MysterySticker.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = _((_) => {
    let _ = {
        item_name: `Free Item`,
        item_title: _(`#SummerSale_ItemTitle`),
        animated: !0,
      },
      _ = {
        defid: void 0,
        appid: _.Get().GetCurrentSaleRewardAppID(),
        type: 1,
        community_item_class: 11,
        point_cost: `0`,
        quantity: `1`,
        active: !0,
        community_item_data: _,
      },
      _ = null,
      _ = null,
      _ = (_) => _(_, _, null, !0),
      _ = _,
      _ = _(`#SummerSale_ItemName`),
      _ = _.Get().BCanClaimFreeSaleReward();
    if (!_) {
      ((_ = (0, _.jsx)(`div`, {
        className: _,
        children: _(`#Rewards_Claimed`),
      })),
        (_ = _(_, _)),
        (_ = null));
      let _ = _.Get().GetClaimedSaleRewardItemDef();
      _ &&
        ((_ = _.community_item_data.item_title),
        (_ = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_.appid}/${_.community_item_data.item_image_small}`));
    }
    return (0, _.jsx)(_, {
      display: `flex`,
      flexDirection: `column`,
      className: _,
      children: (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            display: `flex`,
            flexDirection: `column`,
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: void 0,
                children: (0, _.jsx)(`img`, {
                  className: _,
                  alt: `Sale`,
                  src: _.Get().GetFreeItemHeaderSource(),
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#SummerSale_FreeDesc_2`),
                  }),
                  !_ &&
                    (0, _.jsx)(`div`, {
                      className: void 0,
                      children: (0, _.jsx)(_, {}),
                    }),
                  (0, _.jsx)(_, {
                    className: _,
                    _: _.LoyaltyGiveawayRules(),
                    children: _(`#SummerSale_Redeem_Rules`),
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: void 0,
            children: (0, _.jsx)(_, {
              name: _,
              cost: 0,
              attributes: [
                (0, _.jsx)(
                  _,
                  {
                    className: _,
                  },
                  `animated`,
                ),
              ],
              iconComponent: _,
              styleOverride: _,
              desc: _(`#CommunityItemClass_Sticker`),
              strPriceOverride: _,
              onClick: _,
              children: (0, _.jsx)(`img`, {
                className: _,
                src: _,
              }),
            }),
          }),
        ],
      }),
    });
  }),
  _ = _(() => {
    let _ = _.Get().GetNextClaimTime();
    return _
      ? (0, _.jsxs)(`span`, {
          className: _,
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              children: _(`#SummerSale_NextStop`),
            }),
            (0, _.jsx)(_, {
              className: _,
              time: _.getTime(),
            }),
          ],
        })
      : null;
  }),
  _ = _((_) => {
    let { time: _, ..._ } = _,
      _ = Math.floor(Math.max(0, _ - _()) / 1e3),
      _ = Math.floor(_ / _.PerHour),
      _ = Math.floor((_ - _ * _.PerHour) / _.PerMinute),
      _ = Math.floor(_ - (_ * _.PerHour + _ * _.PerMinute));
    return (0, _.jsxs)(`span`, {
      style: {
        fontFamily: `monospace`,
      },
      ..._,
      children: [_(_), `:`, _(_), `:`, _(_)],
    });
  }),
  _ = (_) => _.toString().padStart(2, `0`),
  _ = _.lazy(() =>
    _(
      () => import(`./chunk~5fe193a7dd.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url,
    ),
  ),
  _ = _.lazy(() =>
    _(
      () => import(`./chunk~693cf860c6.js`),
      __vite__mapDeps([8, 1, 2, 9, 3, 4, 5, 6, 10]),
      import.meta.url,
    ),
  ),
  _ = class extends _.Component {
    render() {
      return (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      });
    }
  };
_ = _([_], _);
var _ = _(() => {
  let _ = _(`*/reward/:definitionid`),
    _ = _ && _.params && _.params.definitionid,
    _ = parseInt(_);
  return (
    _.useEffect(() => {
      _ && !isNaN(_) && _(null, _);
    }, [_]),
    null
  );
});
function _() {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [` `, _(`#ShopLink`), ` `],
      }),
    ],
  });
}
var _ = class extends _.Component {
  GetCoupon() {
    let _ = _.Get().GetCouponPromosForUser(),
      _ = _.Get().GetPointsAvailable(),
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0;
    return (
      _.forEach((_) => {
        let _ = _.Get().GetCouponDefinition(_.loyalty_reward_id);
        if (_) {
          ((_ += _.max_use_count * parseInt(_.discount_amount)),
            (_ += _.available_use_count));
          for (let _ = 0; _ < _.available_use_count; _++)
            (_ + parseInt(_.point_cost) <= _.getLowBits() &&
              ((_ += parseInt(_.discount_amount)),
              (_ += parseInt(_.point_cost))),
              (_ = Math.max(_, parseInt(_.discount_amount))),
              (_ ||= parseInt(_.point_cost)));
        }
      }),
      null
    );
  }
  render() {
    let _ = [];
    _.Get()
      .getLoyaltyRewardDefMap()
      .forEach((_) => {
        _.length < 3 && _.type == 1 && _.push(_);
      });
    let _ = _.Get().GetPageDescriptor({
        type: `custom`,
        pageid: _,
      }),
      _ = (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`img`, {
                className: _,
                src: _,
              }),
              (0, _.jsx)(`img`, {
                className: _,
                src: _,
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`img`, {
                    className: _,
                    src: _,
                  }),
                  (0, _.jsx)(`img`, {
                    className: _,
                    src: _,
                  }),
                  (0, _.jsx)(`img`, {
                    className: _,
                    src: _,
                  }),
                  (0, _.jsx)(`img`, {
                    className: _,
                    src: _,
                  }),
                  (0, _.jsx)(`img`, {
                    className: _,
                    src: _,
                  }),
                  (0, _.jsx)(`img`, {
                    className: _,
                    src: _,
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#ShopHome_UseRewardPoints`),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#ShopHome_UseRewardPoints_Subtitle`),
              }),
              (0, _.jsx)(_, {
                className: _,
                _: _.LoyaltyHowItWorks(),
                children: (0, _.jsxs)(_, {
                  className: _,
                  children: [` `, _(`#ShopHome_HowLinkBtn`)],
                }),
              }),
            ],
          }),
        ],
      });
    return (0, _.jsx)(_, {
      children:
        _ &&
        (0, _.jsx)(_, {
          header: _,
          descriptor: _,
          children:
            _.Get().BIsSaleActive() &&
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {}),
            }),
        }),
    });
  }
};
_ = _([_], _);
var _ = () =>
    (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          path: _.LoyaltySteamBadge(),
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(_, {
          path: _.LoyaltyByGame(),
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(_, {
          path: _.LoyaltyByEvent(),
          children: (0, _.jsx)(_, {}),
        }),
        !1,
        (0, _.jsx)(_, {
          path: _.LoyaltyProfileCustomizations(),
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(_, {
          path: _.LoyaltyItemBundle(`:bundleid`),
          render: (_) =>
            (0, _.jsx)(_, {
              ..._,
            }),
        }),
        (0, _.jsx)(_, {
          path: _.LoyaltyEvents(`:eventname`),
          render: (_) =>
            (0, _.jsx)(_, {
              eventname: _.match.params.eventname,
            }),
        }),
        (0, _.jsx)(_, {
          path: `${_.LoyaltyStore()}/app/:appid/cluster/:clusterindex`,
          render: (_) =>
            (0, _.jsx)(_, {
              ..._,
            }),
        }),
        (0, _.jsx)(_, {
          path: `${_.LoyaltyStore()}/app/:appid`,
          render: (_) =>
            (0, _.jsx)(_, {
              appid: parseInt(_.match.params.appid),
            }),
        }),
        (0, _.jsx)(_, {
          path: `${_.LoyaltyStore()}/c/:pageid/cluster/:clusterindex`,
          render: (_) =>
            (0, _.jsx)(_, {
              ..._,
            }),
        }),
        (0, _.jsx)(_, {
          path: `${_.LoyaltyStore()}/c/:pageid`,
          render: (_) =>
            (0, _.jsx)(_, {
              pageid: _.match.params.pageid,
            }),
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {}),
        }),
      ],
    }),
  _ = () => (0, _.jsx)(_, {}),
  _ = () => (0, _.jsx)(_, {}),
  _ = class extends _.Component {
    componentDidMount() {
      _.Get().SetIsUsingAppIDFilters(!0);
    }
    componentWillUnmount() {
      _.Get().SetIsUsingAppIDFilters(!1);
    }
    render() {
      let { pageid: _ } = this.props,
        _ = _.Get().GetAppIDFilters(),
        _ = Array.from(_.keys()),
        _ = _.Get().GetCurrentSearchTerm(),
        _ = {
          appid: _.length ? _ : void 0,
          searchLanguage: _.length ? _.LANGUAGE : void 0,
          searchTerm: _.length ? _ : void 0,
        },
        _ = _.Get().GetPageDescriptor({
          type: `custom`,
          pageid: _,
        });
      return (0, _.jsx)(_, {
        children: _
          ? (0, _.jsx)(_, {
              descriptor: _,
              additionalFilter: _,
            })
          : (0, _.jsx)(_, {}),
      });
    }
  };
_ = _([_], _);
var _ = _((_) => {
    let {
        descriptor: {
          items: _,
          title: _,
          subtitle: _,
          searchPlaceholder: _,
          headerImage: _,
          params: _,
        },
        header: _,
        additionalFilter: _,
      } = _,
      _ =
        _ ||
        (0, _.jsx)(_, {
          title: _,
          subtitle: _,
          headerImage: _,
        });
    _(_);
    let _ = _() === `mobile`;
    return (0, _.jsx)(_, {
      paddingX: `none`,
      children: (0, _.jsxs)(_, {
        className: _(_, _),
        itemClassName: _,
        spacing: _ ? `medium` : `xlarge`,
        children: [
          _,
          _.children,
          _.filter(Boolean).map((_, _) => {
            switch (_.type) {
              case `banner`:
                let { type: _, ..._ } = _;
                return (0, _.createElement)(_, {
                  ..._,
                  key: `${_.title}_${_}`,
                });
              case `clusterview`:
                return (0, _.jsx)(
                  _,
                  {
                    descriptor: _.view,
                    additionalFilter: _,
                    linkedPage:
                      _.view.linkedPage === null
                        ? void 0
                        : _.view.linkedPage || {
                            ..._,
                            clusterindex: _,
                          },
                  },
                  `${_.view.cluster._}_${_}`,
                );
            }
          }),
        ],
      }),
    });
  }),
  _ = class extends _.Component {
    componentDidMount() {
      _.Get().SetIsUsingAppIDFilters(!0);
    }
    componentWillUnmount() {
      _.Get().SetIsUsingAppIDFilters(!1);
    }
    DeriveClusterView() {
      let {
          match: {
            params: { pageid: _, appid: _, clusterindex: _ },
          },
        } = this.props,
        _ = parseInt(_);
      if (isNaN(_)) return null;
      let _;
      if (_)
        _ = {
          type: `custom`,
          pageid: _,
        };
      else if (_) {
        let _ = parseInt(_);
        if (isNaN(_)) return null;
        _ = {
          type: `app`,
          appid: _,
        };
      } else
        return (
          console.error(`Could not determine owning page for cluster`), null
        );
      let _ = _.Get().GetPageDescriptor(_);
      if (!_) return null;
      let _ = _.items[_];
      return !_ || _.type !== `clusterview`
        ? null
        : {
            ..._.view,
            type: 0,
          };
    }
    render() {
      let _ = this.DeriveClusterView();
      if (!_) return null;
      let _ = _.Get().GetAppIDFilters(),
        _ = Array.from(_.keys()),
        _ = _.Get().GetCurrentSearchTerm(),
        _ = {
          appid: _.length ? _ : void 0,
          searchLanguage: _.length ? _.LANGUAGE : void 0,
          searchTerm: _.length ? _ : void 0,
        };
      return (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          paddingY: `xlarge`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          children: (0, _.jsx)(_, {
            descriptor: _,
            additionalFilter: _,
          }),
        }),
      });
    }
  };
_ = _([_], _);
function _(_) {
  let { appid: _ } = _,
    _ = _(),
    _ = _(() =>
      _.Get().GetPageDescriptor({
        type: `app`,
        appid: _,
      }),
    ),
    _ = _(() => _.GetAppInfo(_));
  return _
    ? (0, _.jsx)(_, {
        appid: _,
        children: (0, _.jsx)(_, {
          header: (0, _.jsx)(_, {
            title: (0, _.jsx)(`a`, {
              href: _(`${_.STORE_BASE_URL}app/${_.appid}`, _),
              children: _.name,
            }),
            subtitle: _.subtitle,
          }),
          descriptor: _,
        }),
      })
    : null;
}
function _(_) {
  let { eventname: _ } = _,
    _ = _(),
    [_, _] = _.useState(5),
    _ = _({
      queryKey: [`EventDetails`, _],
      queryFn: async () =>
        (
          await _.default.get(
            _.STORE_BASE_URL + `points/ajaxgeteventdetails?event_name=` + _,
          )
        ).data,
      staleTime: 1 / 0,
    }),
    _ = _(() =>
      _.Get().GetPageDescriptor({
        type: `event`,
        eventname: _,
        rgIncludedAppIDs: _.data?.details?.included_apps,
        rgPriorityAppIDs: _.data?.details?.priority_apps,
        cAppClusters: _,
      }),
    ),
    _ = _.data?.details?.radial_color_override,
    _ = _.data?.details?.radial_edge_color_override,
    _ = _.data?.details?.rtime_event_end,
    _ = _();
  if (
    ((0, _.useEffect)(() => {
      let _ = document.documentElement.style.getPropertyValue(
        `--standard-root-background`,
      );
      return (
        (_ || _) &&
          document.documentElement.style.setProperty(
            `--standard-root-background`,
            `radial-gradient(63.94% 1024px at 50% 200px, ${_ || `#244372`} 0%, ${_ || `#161A1F`} 100%)`,
          ),
        () =>
          document.documentElement.style.setProperty(
            `--standard-root-background`,
            _,
          )
      );
    }, [_, _]),
    !_.data)
  )
    return null;
  if (!_ || !_.isSuccess || _.data.success != 1)
    return (console.error(`Failed to get event page for ${_}`), null);
  let _ = _.data?.details?.included_apps?.concat(
      _.data?.details?.priority_apps,
    ),
    _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.data?.details?.title ?? _,
    }),
    _ = (0, _.jsx)(_, {
      title: _,
      subtitle: _ > _ ? _(`#PointShop_Event_Over`) : void 0,
    });
  return (
    _.data?.details?.strPageHeader &&
      (_ = (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`img`, {
            className: _,
            src: _.data.details.strPageHeader,
          }),
          _ > _ &&
            (0, _.jsx)(`div`, {
              className: `aFvhThktipk-`,
              children: _(`#PointShop_Event_Over`),
            }),
        ],
      })),
    (0, _.jsxs)(_, {
      background: _.data?.details?.strPageBackground,
      children: [
        (0, _.jsx)(_, {
          header: (0, _.jsx)(`a`, {
            href: _(_.STORE_BASE_URL + _.data?.details?.url, _),
            children: _,
          }),
          descriptor: _,
        }),
        (0, _.jsx)(_, {
          trigger: `repeated`,
          onVisibilityChange: (_) => _ && _ < _.length && _(_ + 10),
          rootMargin: `0px 0px 100px 0px`,
        }),
      ],
    })
  );
}
var _ = class extends _.Component {
    render() {
      return _.Get().BIsLoggedIn()
        ? this.props.children
        : (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                descriptor: this.props.descriptor,
              }),
              (0, _.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                },
                children: [
                  (0, _.jsx)(`div`, {
                    children: _(`#RequiresLogin_Desc`),
                  }),
                  (0, _.jsx)(`div`, {
                    style: {
                      paddingTop: `10px`,
                    },
                    children: (0, _.jsx)(`span`, {
                      className: _(`btn_green_white_innerfade`, ` btn_medium`),
                      onClick: () => _.Get().ShowLoginDialog(),
                      children: (0, _.jsx)(`span`, {
                        children: _(`#RequiresLogin_Button`),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
    }
  },
  _ = class extends _.Component {
    state = {
      cVisible: 5,
    };
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
      let { cVisible: _ } = this.state,
        _ = _.Get().GetAppIDFilters(),
        _ = _.Get().GetSortedMyGamesWithRewards(),
        _ = _.Get().GetCurrentSearchTerm(),
        _ = {
          searchLanguage: _.length ? _.LANGUAGE : void 0,
          searchTerm: _.length ? _ : void 0,
        };
      _.size != 0 && (_ = _.filter((_) => _.has(_)));
      let _ = {
        title: _(`#ShopPageTitle_ByGame`),
        subtitle: _(`#ShopPageTitle_ByGame_Subtitle`),
        searchPlaceholder: _(`#SearchPlaceholder_ByGame`),
        items: _.slice(0, _).map((_) => ({
          type: `clusterview`,
          view: {
            type: 1,
            linkedPage: {
              type: `app`,
              appid: _,
            },
            cluster: new _(_, ``, _),
          },
        })),
        params: {
          type: `custom`,
          pageid: `bygame`,
        },
      };
      return (0, _.jsx)(_, {
        descriptor: _,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              descriptor: _,
            }),
            (0, _.jsx)(_, {
              trigger: `repeated`,
              onVisibilityChange: (_) =>
                _ &&
                _ < _.length &&
                this.setState({
                  cVisible: _ + 10,
                }),
              rootMargin: `0px 0px 100px 0px`,
            }),
          ],
        }),
      });
    }
  };
_ = _([_], _);
var _ = class extends _.Component {
  state = {
    cVisible: 5,
  };
  render() {
    let { cVisible: _ } = this.state,
      _ = _.Get().GetSortedEventAppsWithRewards(),
      _ = {
        title: _(`#ShopPageTitle_ByEvent`),
        subtitle: _(`#ShopPageTitle_ByEvent_Subtitle`),
        searchPlaceholder: _(`#SearchPlaceholder_ByGame`),
        items: _.slice(0, _).map((_) => ({
          type: `clusterview`,
          view: {
            type: 1,
            linkedPage: {
              type: `app`,
              appid: _,
            },
            cluster: new _(_, ``),
          },
        })),
        params: {
          type: `custom`,
          pageid: `byevent`,
        },
      };
    return (0, _.jsx)(_, {
      descriptor: _,
      children: (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            descriptor: _,
          }),
          (0, _.jsx)(_, {
            trigger: `repeated`,
            onVisibilityChange: (_) =>
              _ &&
              _ < _.length &&
              this.setState({
                cVisible: _ + 10,
              }),
            rootMargin: `0px 0px 100px 0px`,
          }),
        ],
      }),
    });
  }
};
_ = _([_], _);
function _(_) {
  return typeof GStoreItemData > `u`
    ? (console.error(`Unable to find GStoreItemData`), null)
    : GStoreItemData.fnFormatCurrency(_);
}
var _ = new URL(
    `../../../images/applications/store/game_tiles.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/float.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/Entering_vr.gif?v=CYKO1bep`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/bonemetal_224px.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/header_image.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/award_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/beautiful_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/crown_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/fire_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/funny_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/hundo_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/life_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/perfect_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/plus_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/smart_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/treasure_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/wholesome_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `T0ZVj-qBX-Q-`,
  _ = `g2HRkHxGpU8-`,
  _ = `_7mLpLVp63UA-`,
  _ = `xhebd4mkSB8-`,
  _ = `UQSnPv-1FwI-`,
  _ = `tMpqxBQst-o-`,
  _ = `o8gkSlk3zsY-`,
  _ = `kY5MK0ENRFQ-`,
  _ = `Jofbiq39q78-`,
  _ = `g5G4XG-6oRw-`,
  _ = `M-L0TSOzjRo-`,
  _ = `VdllGvB-1ik-`,
  _ = `LruDduCdrIE-`,
  _ = `Djto0ev0oVg-`,
  _ = `_0xeBAaTPgvw-`,
  _ = `v2o2-0PfeII-`,
  _ = `-PJVtiVarKU-`,
  _ = `QUFx0RuDIhY-`,
  _ = `B03HBRJnuX8-`,
  _ = `NNBkgM3NYsc-`,
  _ = `D6hKTWRjFE0-`,
  _ = `sqmw1NuBHIg-`,
  _ = `DcNiZXDf28w-`,
  _ = `bFQGOnRvaT0-`,
  _ = `fVTaguQEiwQ-`,
  _ = `a4d2KJgPZwY-`,
  _ = `f1AqH1bh9Ws-`,
  _ = `saHNIRov1Co-`,
  _ = `WnxQAXQcmOA-`,
  _ = `_9OftyXt6gnU-`,
  _ = `xhu-lXyR1ks-`,
  _ = `gAZILs2qO8o-`,
  _ = `bveQKNyBoXY-`,
  _ = `_9nQSX1RcX6k-`,
  _ = `N4CcYsJ2Mzw-`,
  _ = `d8WFjt3OwTk-`,
  _ = `QmvwfMD-L9Y-`,
  _ = `nvBBELch7DI-`,
  _ = `i4tGfESae2o-`,
  _ = `zV3i2p2jeSk-`,
  _ = `_7W3qkYR1hOs-`,
  _ = `BLVTy-pkD8I-`,
  _ = (_) => {
    let { children: _, iconComponent: _, descCallout: _ } = _,
      _ = _,
      _ = _;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            className: _,
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [` `, _(_), ` `],
        }),
      ],
    });
  },
  _ = (_) =>
    (0, _.jsxs)(_, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xlarge`,
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#HowItWorks_SteamPoints`),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#HowItWorks_SteamPoints_Desc1`),
        }),
        (0, _.jsx)(`img`, {
          src: _,
          className: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#HowItWorks_SteamPoints_Desc2`),
        }),
      ],
    }),
  _ = (_) => {
    let _ = _(
      `#HowItWorks_Conversion`,
      (0, _.jsx)(`span`, {
        children: _(_.numPoints),
      }),
      (0, _.jsx)(`span`, {
        children: _(_.dollarConversion),
      }),
    );
    return (0, _.jsx)(_, {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      paddingTop: `medium`,
      className: _,
      focusable: !0,
      noFocusRing: !0,
      children: (0, _.jsxs)(`div`, {
        className: _(_),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#HowItWorks_How_Desc`),
          }),
        ],
      }),
    });
  },
  _ = (_) => {
    let _ = _(
      `#ShopName`,
      (0, _.jsx)(`span`, {
        children: _(`#ShopNamePre`),
      }),
      _(`#ShopNamePost`),
    );
    return (0, _.jsxs)(_, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xxlarge`,
      children: [
        (0, _.jsxs)(_, {
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          className: _,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
            (0, _.jsx)(_, {
              className: _(_, _),
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#HowItWorks_UsePoints_Desc1`),
            }),
            (0, _.jsxs)(_, {
              display: `flex`,
              flexDirection: `column`,
              paddingTop: `large`,
              focusable: !0,
              noFocusRing: !0,
              children: [
                (0, _.jsx)(_, {
                  iconComponent: _,
                  descCallout: `#HowItWorks_DoNotExpire`,
                }),
                (0, _.jsx)(_, {
                  iconComponent: _,
                  descCallout: `#HowItWorks_Permanent`,
                }),
                (0, _.jsx)(_, {
                  iconComponent: _,
                  descCallout: `#HowItWorks_Marketable`,
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              className: _,
              focusable: !0,
              noFocusRing: !0,
              children: [
                (0, _.jsx)(`img`, {
                  className: _,
                  src: _,
                }),
                (0, _.jsx)(`img`, {
                  className: _,
                  src: _,
                }),
                (0, _.jsxs)(`div`, {
                  className: void 0,
                  children: [
                    (0, _.jsx)(`img`, {
                      className: _,
                      src: _,
                    }),
                    (0, _.jsx)(`img`, {
                      className: _,
                      src: _,
                    }),
                  ],
                }),
                (0, _.jsx)(`img`, {
                  className: _,
                  src: _,
                }),
                (0, _.jsx)(`img`, {
                  className: _,
                  src: _,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  _ = () => {
    let _ = _.LoyaltyByGame();
    return (0, _.jsx)(`div`, {
      className: _,
      style: {
        backgroundImage: `url(${_})`,
      },
      children: (0, _.jsxs)(_, {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        paddingRight: `xlarge`,
        paddingLeft: `xlarge`,
        paddingBottom: `xxlarge`,
        children: [
          (0, _.jsx)(_, {
            className: _,
          }),
          (0, _.jsx)(_, {
            _: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: _(`#HowItWorks_YourGames`),
            }),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#HowItWorks_YourGames_Desc1`),
          }),
          (0, _.jsx)(_, {
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            paddingTop: `large`,
            focusable: !0,
            noFocusRing: !0,
            children: (0, _.jsx)(_, {
              iconComponent: _,
              descCallout: `#HowItWorks_YourGames_TradingCards`,
            }),
          }),
        ],
      }),
    });
  },
  _ = _(() => {
    let _ = _.Get().GetCommunityAwardPointsTransferred(),
      _ = _.STORE_BASE_URL + `labs/trendingreviews/`,
      _ = _.COMMUNITY_BASE_URL + `?subsection=workshop`;
    return (0, _.jsxs)(_, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xxlarge`,
      children: [
        (0, _.jsxs)(_, {
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          className: _,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
            (0, _.jsx)(`img`, {
              src: _,
              className: _,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          _: `CommunityAwards`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: _,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#HowItWorks_ReviewAwards`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#HowItWorks_ReviewAwardsWinter_Desc`, _),
            }),
            (0, _.jsx)(`img`, {
              alt: _(`#HowItWorks_ReviewAwards`),
              src:
                _.MEDIA_CDN_URL + `store/rewards/howtoawards/${_.LANGUAGE}.png`,
              className: _,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: _,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, _.jsxs)(_, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  className: _,
                }),
                (0, _.jsxs)(_, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _(_, _),
                      children: _(`#HowItWorks_AwardsReviews`, _),
                    }),
                    (0, _.jsx)(`a`, {
                      href: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: _(`#HowItWorks_AwardsReviewsLink`),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              paddingTop: `large`,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  className: _,
                }),
                (0, _.jsxs)(_, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _(_, _),
                      children: _(`#HowItWorks_AwardsUgc`, _),
                    }),
                    (0, _.jsx)(`a`, {
                      href: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: _(`#HowItWorks_AwardsUgcLink`),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              paddingTop: `large`,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  className: _,
                }),
                (0, _.jsx)(_, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: (0, _.jsx)(`div`, {
                    className: _(_, _),
                    children: _(`#HowItWorks_AwardsProfile`, _),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  });
function _() {
  let _ = _(_.EREALM);
  return [
    {
      question: `#Faq_GetPoints_Q`,
      answer: [`#Faq_GetPoints_A`, `#Faq_GetPoints_A1`],
    },
    {
      question: `#Faq_PointsExpire_Q`,
      answer: `#Faq_PointsExpire_A`,
    },
    {
      question: `#Faq_Limits_Q`,
      answer: `#Faq_Limits_A`,
    },
    {
      question: `#Faq_Trade_Q`,
      answer: `#Faq_Trade_A`,
    },
    {
      question: `#Faq_TradingCards_Q`,
      answer: `#Faq_TradingCards_A`,
    },
    {
      question: `#Faq_Refund_Q`,
      answer: `#Faq_Refund_A`,
    },
    !_ && {
      question: `#Faq_Lunar_Q`,
      answer: `#Faq_Lunar_A`,
    },
    !_ && {
      question: `#Faq_WhatElse_Q`,
      answer: [`#Faq_WhatElse_A`, `#Faq_WhatElse_A1`, `#Faq_WhatElse_A2`],
    },
    !_ && {
      question: `#Faq_SortOrder_Q`,
      answer: `#Faq_SortOrder_A`,
    },
  ].filter(Boolean);
}
var _ = () => {
    let _ = _();
    return (0, _.jsx)(_, {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      paddingTop: `xxlarge`,
      className: _,
      children: (0, _.jsxs)(_, {
        display: `flex`,
        flexDirection: `column`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Faq_Title`),
          }),
          _.map((_) =>
            (0, _.createElement)(_, {
              ..._,
              key: Array.isArray(_.question) ? _.question[0] : _.question,
            }),
          ),
        ],
      }),
    });
  },
  _ = (_) => {
    let { question: _, answer: _ } = _,
      _ = Array.isArray(_) ? _ : [_],
      _ = Array.isArray(_) ? _ : [_];
    return (0, _.jsxs)(_, {
      display: `flex`,
      flexDirection: `column`,
      paddingTop: `medium`,
      paddingBottom: `medium`,
      focusable: !0,
      children: [
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              children: _(_),
            },
            _,
          ),
        ),
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              children: _(_),
            },
            _,
          ),
        ),
      ],
    });
  },
  _ = ({ children: _ }) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  _ = () => {
    let _ = _.Get().GetConfig().points_conversion.unit_spend,
      _ = _.Get().GetConfig().points_conversion.points;
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          style: {
            width: `100%`,
          },
          _: `Title`,
          className: _,
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              dollarConversion: _,
              numPoints: _,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {}),
            !_(_.EREALM) && (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {}),
          ],
        }),
      }),
    });
  },
  _ = `D8E3eEEId9s-`,
  _ = `_6qpJsKhhr-M-`,
  _ = `An0FlKVC9nw-`,
  _ = `bFuJQ7DqoCY-`,
  _ = class extends _.Component {
    constructor(_) {
      (super(_), _.Get().GetLoyaltyRewardsSummary());
    }
    render() {
      return _(_.EREALM)
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              className: _,
              marginX: `xlarge`,
              display: `flex`,
              flexDirection: `column`,
              children: [
                (0, _.jsxs)(_, {
                  marginY: `large`,
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_Header_China`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_Intro_China`),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_1_Title_China`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_1_Desc_China`),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_2_Title_China`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_2_Desc_China`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_2_Desc2_China`),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_3_Title_China`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_3_Desc_China`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_3_Desc2_China`),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_4_Title_China`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      className: _,
                      children: _(
                        `#LunarSale2022_Rules_4_Desc_China`,
                        (0, _.jsx)(_, {
                          href: _.STORE_BASE_URL + `privacy_agreement`,
                          children: _(`#LunarSale2022_Rules_ClickHere`),
                        }),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              className: _,
              marginX: `xlarge`,
              display: `flex`,
              flexDirection: `column`,
              children: [
                (0, _.jsxs)(_, {
                  marginY: `large`,
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_Header`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_Intro`),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_1_Title`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_1_Desc`),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_2_Title`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_2_Desc`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_2_Desc2`),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_3_Title`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_3_Desc`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_3_Desc2`),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, _.jsx)(_, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: _,
                      children: _(`#LunarSale2022_Rules_4_Title`),
                    }),
                    (0, _.jsx)(_, {
                      marginY: `xsmall`,
                      className: _,
                      children: _(
                        `#LunarSale2022_Rules_4_Desc`,
                        (0, _.jsx)(_, {
                          href: _.STORE_BASE_URL + `privacy_agreement`,
                          children: _(`#LunarSale2022_Rules_ClickHere`),
                        }),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
    }
  };
_ = _([_], _);
var _ = `kySzsqSwnv8-`;
function _(_) {
  let { steamid: _ } = _,
    _ = new _(_),
    _ = _({
      queryKey: [`EquippedProfileItems`, _],
      queryFn: () => _.Get().GetEquippedProfileItems(_),
      staleTime: 1 / 0,
    }),
    _ = _({
      queryKey: [`MiniprofileData`, _],
      queryFn: async () =>
        (
          await _.default.get(
            _.COMMUNITY_BASE_URL +
              `miniprofile/` +
              _.GetAccountID() +
              `/json/?origin=` +
              _.STORE_BASE_URL,
          )
        ).data,
      staleTime: 1 / 0,
    }),
    _ = _.useMemo(() => _?.data?.active_definitions?.map((_) => _.appid), [_]),
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _?.data?.bundle_definitions?.length &&
          (_ = [..._.data.bundle_definitions, ..._]),
        _?.data?.active_definitions?.length &&
          (_ = [..._.data.active_definitions, ..._]),
        _?.data?.inactive_definitions?.length &&
          (_ = [..._.data.inactive_definitions, ..._]),
        _?.find((_) => _.community_item_class == 3)
      );
    }, [_]);
  if (!_.data || !_.data) return null;
  let _ = null;
  _.data.eResult == 1
    ? !_.data.active_definitions?.length &&
      !_.data.inactive_definitions?.length &&
      (_ = _(`#EquippedProfile_Error_NoItems`))
    : ((_ = _(`#EquippedProfile_Error_Generic`)),
      _.data.eResult == 15 && (_ = _(`#EquippedProfile_Error_AccessDenied`)));
  let _ = (_, _) => ({
      rewards: _.data.active_definitions,
      bLoadingMore: !1,
      cTotalMatching: _.data.active_definitions.length,
      cMaxToReturn: _.data.active_definitions.length,
    }),
    _ = (_, _) => ({
      rewards: _.data.inactive_definitions,
      bLoadingMore: !1,
      cTotalMatching: _.data.inactive_definitions.length,
      cMaxToReturn: _.data.inactive_definitions.length,
    }),
    _ = {
      type: 1,
      cluster: {
        _: `SimilarProfileItems`,
        title: _(`#EquippedProfile_RelatedAppsCarousel_Title`),
        subtitle: ``,
        GetRewards: (_, _, _) =>
          _.Get().QueryRewardDefinitions(
            {
              appid: _,
              grouping: 2,
            },
            _,
            _,
          ),
      },
    },
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`a`, {
          className: _,
          href: _(_.COMMUNITY_BASE_URL + `profiles/` + _),
          children: [
            (0, _.jsx)(_, {
              "data-miniprofile": `s` + _,
              className: void 0,
              size: `Large`,
              statusPosition: `right`,
              strAvatarURL: _.data.avatar_url,
            }),
            _.data.persona_name,
          ],
        }),
        (0, _.jsx)(`div`, {
          children: _(`#EquippedProfile_Header_Title`),
        }),
      ],
    });
  return (0, _.jsx)(_, {
    background:
      _ &&
      `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_.appid}/${_.community_item_data?.item_image_large}`,
    children: (0, _.jsxs)(_, {
      className: _,
      itemClassName: _,
      spacing: `xlarge`,
      children: [
        (0, _.jsx)(_, {
          title: _,
          subtitle: _(`#EquippedProfile_Header_Desc`),
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `_2nOWN-OvhNw-`,
            children: _,
          }),
        _.data.active_definitions?.length > 0 &&
          (0, _.jsx)(_, {
            title: _(`#EquippedProfile_AvailableForPurchase`),
            children: (0, _.jsx)(_, {
              style: {
                width: `100%`,
              },
              getItems: _,
              itemClassName: `_7nsR0k0ssII-`,
              renderItem: (_) =>
                (0, _.jsx)(
                  _,
                  {
                    definition: _,
                  },
                  _.defid,
                ),
            }),
          }),
        _.data.inactive_definitions?.length > 0 &&
          (0, _.jsx)(_, {
            title: _(`#EquippedProfile_NotAvailable`),
            subtitle: _(
              `#EquippedProfile_NotAvailable_Desc`,
              _.data.inactive_definitions.length,
            ),
            children: (0, _.jsx)(_, {
              style: {
                width: `100%`,
              },
              getItems: _,
              itemClassName: `_7nsR0k0ssII-`,
              renderItem: (_) =>
                (0, _.jsx)(
                  _,
                  {
                    definition: _,
                    purchaseable: !1,
                  },
                  _.defid,
                ),
            }),
          }),
        _?.length > 0 &&
          (0, _.jsx)(_, {
            descriptor: _,
          }),
      ],
    }),
  });
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            auctiondescriptionid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            state: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_created: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_updated: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            amount_bid: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            amount_paid: {
              _: 7,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            auctionbidid: {
              _: 8,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_Bid`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.auctiondescriptionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            auctiondescriptionid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_start: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_end: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            amount_total: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            amount_remaining: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            highest_amount: {
              _: 7,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            highest_bidder_accountid: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_item_appid: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_item_type: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            store_appid: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            store_packageids: {
              _: 12,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            reserve_price: {
              _: 13,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_Item`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.auctiondescriptionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            auctiondescriptionid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            amount_bid: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            expected_amount_remaining: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_PlaceBid_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_PlaceBid_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.auctiondescriptionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            auctiondescriptionid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_CancelBid_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.amount_returned || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            amount_returned: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_CancelBid_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetBidsForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bids: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetBidsForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.auctiondescriptionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            auctiondescriptionid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetBidsForItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item: {
              _: 1,
              _: _,
            },
            count_total: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            current_user_position: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            winning_bids: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetBidsForItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.auctiondescriptionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            auctiondescriptionid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetUserBidForItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bid: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetUserBidForItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.auctiondescriptionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            auctiondescriptionid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetItemDetails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetItemDetails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetAllItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            items: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetAllItems_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Auction.PlaceBid#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.PlaceBid = _;
  function _(_, _, _) {
    return _.SendMsg(`Auction.CancelBid#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.CancelBid = _;
  function _(_, _, _) {
    return _.SendMsg(`Auction.GetBidsForUser#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetBidsForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`Auction.GetBidsForItem#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetBidsForItem = _;
  function _(_, _, _) {
    return _.SendMsg(`Auction.GetUserBidForItem#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetUserBidForItem = _;
  function _(_, _, _) {
    return _.SendMsg(`Auction.GetItemDetails#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetItemDetails = _;
  function _(_, _, _) {
    return _.SendMsg(`Auction.GetAllItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetAllItems = _;
})((_ ||= {}));
var _ = class _ {
  constructor() {
    _(this);
  }
  m_transport;
  m_anonymousTransport;
  static s_Singleton;
  m_bLoadedCurrentUserBids = !1;
  m_rgCurrentUserBids = _.array([], {
    deep: !0,
  });
  m_bLoadedAllItems = !1;
  m_mapAuctionItems = new Map();
  static Get() {
    return ((this.s_Singleton ||= new _()), this.s_Singleton);
  }
  Init(_) {
    ((this.m_transport = _.GetServiceTransport()),
      (this.m_anonymousTransport = _.GetAnonymousServiceTransport()));
  }
  async LoadCurrentUserBids() {
    if (!_.Get().BIsLoggedIn()) return [];
    let _ = _.Init(_);
    _.SetBodyFields({
      steamid: _.steamid,
    });
    let _ = await _.GetBidsForUser(this.m_transport, _);
    return _.GetEResult() == 1
      ? _.Body().toObject().bids
      : (console.error(
          `Error when calling AuctionService.GetBidsForUser: EResult=${_.GetEResult()}`,
        ),
        []);
  }
  GetCurrentUserBids(_) {
    return (
      (!this.m_bLoadedCurrentUserBids || _) &&
        ((this.m_bLoadedCurrentUserBids = !0),
        (this.m_rgCurrentUserBids = []),
        this.LoadCurrentUserBids().then((_) =>
          _.forEach((_) => this.m_rgCurrentUserBids.push(_)),
        )),
      this.m_rgCurrentUserBids
    );
  }
  async LoadAllItems() {
    let _ = _.Init(_),
      _ = await _.GetAllItems(this.m_anonymousTransport, _);
    return _.GetEResult() == 1
      ? _.Body().toObject().items
      : (console.error(
          `Error when calling AuctionService.GetAllItems: EResult=${_.GetEResult()}`,
        ),
        []);
  }
  GetAllItems(_) {
    return (
      (!this.m_bLoadedAllItems || _) &&
        ((this.m_bLoadedCurrentUserBids = !0),
        this.m_mapAuctionItems.clear(),
        this.LoadAllItems().then((_) =>
          _.forEach((_) => this.m_mapAuctionItems.set(_.store_appid, _)),
        )),
      this.m_mapAuctionItems
    );
  }
  GetAuctionItemByAppID(_) {
    return this.GetAllItems(!1).get(_);
  }
  async GetUserBidForItem(_) {
    let _ = _.Init(_),
      _ = await _.GetUserBidForItem(this.m_transport, _);
    return _.GetEResult() == 1
      ? _.Body().toObject().bid
      : (console.error(
          `Error when calling AuctionService.GetUserBidForItem: EResult=${_.GetEResult()}`,
        ),
        null);
  }
  async PlaceBid(_, _, _) {
    let _ = {
      eResult: 2,
      strMessage: ``,
    };
    if (!_.Get().BIsLoggedIn())
      return (
        (_ = {
          eResult: 21,
          strMessage: `Not logged on`,
        }),
        _
      );
    let _ = _.Init(_);
    _.SetBodyFields({
      auctiondescriptionid: _,
      amount_bid: _,
      expected_amount_remaining: _,
    });
    let _ = await _.PlaceBid(this.m_transport, _);
    return (
      (_.eResult = _.GetEResult()),
      _.GetEResult() == 1
        ? this.GetCurrentUserBids(!0)
        : ((_.strMessage = _.Hdr().error_message()),
          console.error(
            `Error when calling AuctionService.PlaceBid: EResult=${_.GetEResult()}`,
          )),
      _
    );
  }
  async CancelBid(_) {
    let _ = {
      eResult: 2,
      strMessage: ``,
    };
    if (!_.Get().BIsLoggedIn())
      return (
        (_ = {
          eResult: 21,
          strMessage: `Not logged on`,
        }),
        _
      );
    let _ = _.Init(_);
    _.SetBodyFields({
      auctiondescriptionid: _,
    });
    let _ = await _.CancelBid(this.m_transport, _);
    return (
      (_.eResult = _.GetEResult()),
      _.GetEResult() == 1
        ? this.GetCurrentUserBids(!0)
        : ((_.strMessage = _.Hdr().error_message()),
          console.error(
            `Error when calling AuctionService.CancelBid: EResult=${_.GetEResult()}`,
          )),
      _
    );
  }
};
(_([_], _.prototype, `m_rgCurrentUserBids`, void 0),
  _([_], _.prototype, `m_mapAuctionItems`, void 0));
async function _() {
  let _ = _.LANGUAGE,
    _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _] = await Promise.all([
      _(
        Object.assign({
          "../../../localization/loyalty/loyalty_arabic.json": () =>
            _(() => import(`./chunk~8b2d952911.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_brazilian.json": () =>
            _(() => import(`./chunk~ec6a0bc458.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_bulgarian.json": () =>
            _(() => import(`./chunk~0424cb9e7f.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_czech.json": () =>
            _(() => import(`./chunk~1be9ab9320.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_danish.json": () =>
            _(() => import(`./chunk~34bc870f65.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_dutch.json": () =>
            _(() => import(`./chunk~827c856b4c.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_english.json": () =>
            _(() => import(`./chunk~41d15b9681.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_finnish.json": () =>
            _(() => import(`./chunk~fb0d089c48.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_french.json": () =>
            _(() => import(`./chunk~9ab8a8367e.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_german.json": () =>
            _(() => import(`./chunk~71dd4f82d0.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_greek.json": () =>
            _(() => import(`./chunk~24619d4682.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_hungarian.json": () =>
            _(() => import(`./chunk~6994a10feb.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_indonesian.json": () =>
            _(() => import(`./chunk~777d3cb562.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_italian.json": () =>
            _(() => import(`./chunk~8f2e159ab2.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_japanese.json": () =>
            _(() => import(`./chunk~9b7954d985.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_koreana.json": () =>
            _(() => import(`./chunk~60706481b9.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_latam.json": () =>
            _(() => import(`./chunk~2dcbd90b89.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_malay.json": () =>
            _(() => import(`./chunk~8b7042eb1a.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_norwegian.json": () =>
            _(() => import(`./chunk~7c8d93727a.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_polish.json": () =>
            _(() => import(`./chunk~5091af15bc.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_portuguese.json": () =>
            _(() => import(`./chunk~5e7c57a550.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_romanian.json": () =>
            _(() => import(`./chunk~c144e56379.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_russian.json": () =>
            _(() => import(`./chunk~eec8663958.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_sc_schinese.json": () =>
            _(() => import(`./chunk~bba5234a46.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_schinese.json": () =>
            _(() => import(`./chunk~0b103a0350.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_spanish.json": () =>
            _(() => import(`./chunk~65c610498c.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_swedish.json": () =>
            _(() => import(`./chunk~7f3cb34433.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_tchinese.json": () =>
            _(() => import(`./chunk~e8f787244f.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_thai.json": () =>
            _(() => import(`./chunk~f5afa8740a.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_turkish.json": () =>
            _(() => import(`./chunk~9415a2f988.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_ukrainian.json": () =>
            _(() => import(`./chunk~e4a398efab.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_vietnamese.json": () =>
            _(() => import(`./chunk~deff7ae0ca.js`), [], import.meta.url),
        }),
        `../../../localization/loyalty/loyalty_${_}.json`,
        6,
      ),
      _
        ? void 0
        : _(
            Object.assign({
              "../../../localization/loyalty/loyalty_arabic.json": () =>
                _(() => import(`./chunk~8b2d952911.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_brazilian.json": () =>
                _(() => import(`./chunk~ec6a0bc458.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_bulgarian.json": () =>
                _(() => import(`./chunk~0424cb9e7f.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_czech.json": () =>
                _(() => import(`./chunk~1be9ab9320.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_danish.json": () =>
                _(() => import(`./chunk~34bc870f65.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_dutch.json": () =>
                _(() => import(`./chunk~827c856b4c.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_english.json": () =>
                _(() => import(`./chunk~41d15b9681.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_finnish.json": () =>
                _(() => import(`./chunk~fb0d089c48.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_french.json": () =>
                _(() => import(`./chunk~9ab8a8367e.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_german.json": () =>
                _(() => import(`./chunk~71dd4f82d0.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_greek.json": () =>
                _(() => import(`./chunk~24619d4682.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_hungarian.json": () =>
                _(() => import(`./chunk~6994a10feb.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_indonesian.json": () =>
                _(() => import(`./chunk~777d3cb562.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_italian.json": () =>
                _(() => import(`./chunk~8f2e159ab2.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_japanese.json": () =>
                _(() => import(`./chunk~9b7954d985.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_koreana.json": () =>
                _(() => import(`./chunk~60706481b9.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_latam.json": () =>
                _(() => import(`./chunk~2dcbd90b89.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_malay.json": () =>
                _(() => import(`./chunk~8b7042eb1a.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_norwegian.json": () =>
                _(() => import(`./chunk~7c8d93727a.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_polish.json": () =>
                _(() => import(`./chunk~5091af15bc.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_portuguese.json": () =>
                _(() => import(`./chunk~5e7c57a550.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_romanian.json": () =>
                _(() => import(`./chunk~c144e56379.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_russian.json": () =>
                _(() => import(`./chunk~eec8663958.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_sc_schinese.json": () =>
                _(() => import(`./chunk~bba5234a46.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_schinese.json": () =>
                _(() => import(`./chunk~0b103a0350.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_spanish.json": () =>
                _(() => import(`./chunk~65c610498c.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_swedish.json": () =>
                _(() => import(`./chunk~7f3cb34433.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_tchinese.json": () =>
                _(() => import(`./chunk~e8f787244f.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_thai.json": () =>
                _(() => import(`./chunk~f5afa8740a.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_turkish.json": () =>
                _(() => import(`./chunk~9415a2f988.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_ukrainian.json": () =>
                _(() => import(`./chunk~e4a398efab.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_vietnamese.json": () =>
                _(() => import(`./chunk~deff7ae0ca.js`), [], import.meta.url),
            }),
            `../../../localization/loyalty/loyalty_${_}.json`,
            6,
          ),
    ]);
  _.AddTokens(_.default, _ ? _.default : void 0);
}
var _ = _({
    default: () => _,
  }),
  _ = class extends _.Component {
    state = {
      bReady: !1,
    };
    componentDidMount() {
      _.then(() =>
        this.setState({
          bReady: !0,
        }),
      );
    }
    render() {
      return this.state.bReady
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  path: _.LoyaltyHowItWorks(),
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsx)(_, {
                  path: _.LoyaltyStore(),
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsx)(_, {
                  path: _.LoyaltyGiveawayRules(),
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsx)(_, {
                  path: _.LoyaltyEquippedProfile(`:steamid`),
                  render: (_) =>
                    (0, _.jsx)(_, {
                      steamid: _.match.params.steamid,
                    }),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    _: _.LoyaltyStore(),
                  }),
                }),
              ],
            }),
          })
        : (0, _.jsx)(_, {});
    }
  };
async function _() {
  let _ = _(`loyaltystore`, `application_config`),
    _ = _(_());
  (_.Init(_), await _(), await _.Get().HintLoad(), _.Get().Init(_, _));
}
var _ = _();
export { _ as default };
