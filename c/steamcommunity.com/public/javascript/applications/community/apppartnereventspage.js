const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./shareeventdialogbody.js",
      "./rolldown-runtime.js",
      "./libraries.js",
      "./vodquery.js",
      "./playerlinkdetailsdataloader.js",
      "./main.js",
      "../../../css/applications/community/main.css",
      "./clanstore.js",
      "./throbber.js",
      "../../../css/applications/community/throbber.css",
      "./basebuttons.js",
      "../../../css/applications/community/basebuttons.css",
      "./emoticonbutton.js",
      "./reactbbcodeparser.js",
      "./bbcodeparser.js",
      "./bbcodes.module.js",
      "../../../css/applications/community/bbcodes.css",
      "./numberformats.js",
      "./storeitemhooks.js",
      "../../../css/applications/community/emoticonbutton.css",
      "./storeassets.js",
      "./ajaxhooks.js",
      "./tabbar.js",
      "./historyutils.js",
      "../../../css/applications/community/tabbar.css",
      "./expandonappear.js",
      "./eventdevfeaturestore.js",
      "./rewarditemdisplay.js",
      "./partnereventdialog.module.js",
      "../../../css/applications/community/partnereventdialog.css",
      "./storeitemlink.js",
      "./currencyformat.js",
      "./visibilitytracker.js",
      "./personautils.js",
      "./appinfostore.js",
      "../../../css/applications/community/vodquery.css",
      "./carouselarrows.js",
      "./simplesuccesserror.js",
      "../../../css/applications/community/simplesuccesserror.css",
      "./steammessages_loyalty_rewards_pb.js",
      "../../../css/applications/community/carouselarrows.css",
      "./languagepicker.js",
      "./playerstore.js",
      "./persona.js",
      "../../../css/applications/community/languagepicker.css",
      "./linktoeventforusertocopy.js",
      "./icn-copylink.js",
      "./twitter_large.js",
      "./reddit_large.js",
      "../../../css/applications/community/shareeventdialogbody.css",
      "./broadcastplayer.js",
      "./broadcastwatchstore.js",
      "../../../css/applications/community/broadcastplayer.css",
      "./broadcast_embeddable.js",
      "./broadcast_embeddable.module.js",
      "./textfilterstore.js",
      "./webuitransportdefaults.js",
      "./broadcast_embeddable2.js",
      "./partnereventslogin.js",
      "./logindialog.js",
      "../../../css/applications/community/logindialog.css",
      "./giveawaystore.js",
      "../../../css/applications/community/broadcast_embeddable2.css",
      "../../../css/applications/community/broadcast_embeddable.css",
    ]),
) => _.map((_) => _[_]);
import { _, _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./libraries.js";
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
} from "./vodquery.js";
import { _, _, _, _, _, _, _ } from "./clanstore.js";
import { _ } from "./textlink.js";
import { _ } from "./throbber.js";
import { _, _, _, _ } from "./emoticonbutton.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./carouselarrows.js";
import { _ } from "./storeassets.js";
import { _ } from "./ajaxhooks.js";
import { _, _ } from "./eventdevfeaturestore.js";
import { _ } from "./rewarditemdisplay.js";
import { _, _, _, _, _ } from "./localdateandtime.js";
import { _ } from "./partnereventdialog.module.js";
import { _ } from "./numberformats.js";
import { _, _ } from "./simplesuccesserror.js";
import { _ } from "./steammessages_loyalty_rewards_pb.js";
import { _ } from "./storeitemhooks.js";
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
function _(_, _) {
  return {
    clanid: _,
    appid: _,
    can_edit: !1,
    owns_app: !1,
    event_followed: [],
    event_followed_flags: [],
    event_ignored: [],
    follows_app: !1,
    valve_admin: !1,
    support_user: !1,
    limited_user: !0,
  };
}
function _(_, _) {
  return !_ || !(_.support_user || _.valve_admin)
    ? _
    : {
        ..._,
        can_edit: !0,
        support_user: !1,
        valve_admin: !1,
      };
}
async function _(_, _, _) {
  let _ = _(),
    _ = _(`partnereventpermissions`, `application_config`);
  if (_(_)) {
    let _ = _.find((_) => _.clanid == _);
    if (_) {
      let { success: _, warn_msg: _, err_msg: _, ..._ } = _;
      return _(_, _);
    }
  }
  if (_.logged_in) {
    let _ = _.InitFromClanID(_, _.EUNIVERSE),
      _ = `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
    _() == `partner`
      ? (_ = `${_.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${_}`)
      : _() == `store` &&
        (_ = `${_.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${_}`);
    let _ = await fetch(_, {
      method: `GET`,
      credentials: `include`,
    });
    if (_.status == 200) {
      let _ = await _.json();
      if (_) {
        let { success: _, warn_msg: _, err_msg: _, ..._ } = _;
        return _(_, _);
      }
    }
  }
  return _(_, void 0);
}
function _(_) {
  let _ = _;
  return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
    ? typeof _[0].clanid == `number` && typeof _[0].appid == `number`
    : !1;
}
function _(_) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _));
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: async () => await _(_, _, _),
    enabled: !!_,
  };
}
function _(_) {
  return [`useEventUserPermissions`, _.accountid, _];
}
var _ = _(_(), 1),
  _ = _(),
  _ = {
    eLocation: 0,
  },
  _ = _.createContext(_);
function _(_) {
  let { children: _, location: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: {
      ..._,
      eLocation: _ ?? 0,
    },
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
function _() {
  return _().eLocation == 2;
}
function _() {
  let _ = _();
  return _.eLocation == 2 || _.eLocation == 1;
}
async function _(_, _) {
  let _ = await _.GetCommunityInventory(_, {
    filter_appids: [_],
  });
  if (_.GetEResult() != 1)
    throw Error(
      `Quest.GetCommunityInventory on app ` + _ + ` answered ` + _.GetEResult(),
    );
  return _.Body().toObject().items ?? [];
}
var _;
function _() {
  let _ = _();
  if (_) return _.GetServiceTransport();
  if (!_) {
    let _ = _(`read_inventory_token`, `application_config`);
    _ = _(_ ? new _(_.WEBAPI_BASE_URL, _) : _());
  }
  return _.GetServiceTransport();
}
async function _(_) {
  return _(_(), _);
}
var _ = 3e3,
  _ = 5e3;
function _(_) {
  return [`QuestCommunityInventory`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    enabled: !!_,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function _(_) {
  let { data: _ } = _(_(_));
  return _;
}
function _(_, _) {
  let _ = _(_);
  return {
    communityItem: (0, _.useMemo)(
      () => _?.find((_) => _.appid == _ && _.item_type == _),
      [_, _, _],
    ),
    bLoaded: _ != null,
  };
}
function _() {
  let _ = _();
  return _({
    mutationFn: (_) => _(_, _.appid, _.fnBHasExpectedItems),
  });
}
var _ = new WeakMap();
function _(_, _, _) {
  if (!_ || _(_.getQueryData(_(_)) ?? [])) return Promise.resolve();
  let _ = _.get(_);
  _ || ((_ = new Map()), _.set(_, _));
  let _ = _.get(_);
  return _ || ((_ = _(_, _, _).finally(() => _?.delete(_))), _.set(_, _)), _;
}
async function _(_, _, _) {
  let _ = [0, _, _()];
  for (let _ of _) {
    _ > 0 && (await _(_));
    let _;
    try {
      (_ = await _(_)), _.setQueryData(_(_), _);
    } catch (_) {
      console.error(
        `Re-reading the community inventory for app ` + _ + ` failed`,
        _,
      );
    }
    if (_(_ ?? [])) return;
  }
}
function _() {
  return _ + Math.floor(Math.random() * 1e4);
}
function _(_) {
  return new Promise((_) => setTimeout(_, _));
}
function _(_, _, _) {
  _.setQueryData(_(_), _);
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_type: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            item_title: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            item_description: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            item_image_small: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            item_image_large: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            item_key_values: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            item_series: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_class: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            editor_accountid: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            item_image_composed: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            item_image_composed_foil: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            deleted: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            item_last_changed: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            broadcast_channel_id: {
              _: 17,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            item_movie_webm: {
              _: 18,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm_small: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4_small: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
            item_internal_name: {
              _: 22,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CommunityItemDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            community_item_type: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_item_class: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_definition: {
              _: 4,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `SaleReward_ItemDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.communityitemid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            communityitemid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_granted: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_definition: {
              _: 3,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `SaleItemRewardGrant`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_ClaimItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.communityitemid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            communityitemid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            next_claim_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reward_item: {
              _: 3,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_ClaimItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_CanClaimItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.can_claim || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            can_claim: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            next_claim_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reward_item: {
              _: 3,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_CanClaimItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sale_reward_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_reward_def_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            virtual_item_reward_event_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_start_time: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_end_time: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_items_per_def: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reward_def_type: {
              _: 7,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamItemRewardDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.virtual_item_reward_event_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            virtual_item_reward_event_id: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetRewardDefinitions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetRewardDefinitions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            action: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_SetRewardDefinitions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_SetRewardDefinitions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sale_def_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_def_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            language: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            include_community_item_def: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetClaimedSaleRewards_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.num_items_granted || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            num_items_granted: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            num_items_earned: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            current_def: {
              _: 3,
              _: _,
            },
            reward_items: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetClaimedSaleRewards_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sale_def_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_def_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            language: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            include_community_item_def: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetCurrentDefinition_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.definition || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definition: {
              _: 1,
              _: _,
            },
            reward_items: {
              _: 2,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetCurrentDefinition_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.ClaimItem#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.ClaimItem = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.CanClaimItem#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.CanClaimItem = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.GetRewardDefinitions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 4,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetRewardDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.SetRewardDefinitions#1`, _(_, _, _), _, {
      ePrivilege: 4,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SetRewardDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.GetClaimedSaleRewards#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetClaimedSaleRewards = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.GetCurrentDefinition#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetCurrentDefinition = _;
})((_ ||= {}));
var _ = {
  bCanClaimNewItem: !1,
  bAlreadyClaimedCurrentItem: !1,
};
async function _(_, _) {
  let _ = await _.CanClaimItem(_, {
    language: _,
  });
  if (_.GetEResult() != 1)
    throw Error(`SaleItemRewards.CanClaimItem answered ` + _.GetEResult());
  let _ = _.Body().toObject(),
    _ = _.reward_item?.defid ? _.reward_item : void 0;
  return {
    bCanClaimNewItem: !!_.can_claim,
    bAlreadyClaimedCurrentItem: !!_,
    appid: _?.appid,
    community_item_type: _?.community_item_type,
    community_item_class: _?.community_item_class,
    rtNextClaimTime: (_.next_claim_time ?? 0) > 0 ? _.next_claim_time : void 0,
  };
}
async function _(_, _) {
  let _ = await _.ClaimItem(_, {
    language: _,
  });
  if (_.GetEResult() == 29) return _(_, _);
  if (_.GetEResult() != 1)
    throw Error(`SaleItemRewards.ClaimItem answered ` + _.GetEResult());
  let _ = _.Body().toObject().reward_item;
  return {
    bCanClaimNewItem: !1,
    bAlreadyClaimedCurrentItem: !0,
    appid: _?.appid,
    community_item_type: _?.community_item_type,
    community_item_class: _?.community_item_class,
    rtNextClaimTime:
      (_.Body().next_claim_time() ?? 0) > 0
        ? _.Body().next_claim_time()
        : void 0,
  };
}
async function _(_, _) {
  let _ = await _.ActivateProfileModifierItem(_, {
    communityitemid: _.communityitemid,
    appid: _.appid,
    activate: !0,
  });
  if (_.GetEResult() != 1)
    throw Error(`Quest.ActivateProfileModifierItem answered ` + _.GetEResult());
  return _.GetEResult();
}
async function _(_, _, _, _) {
  return (
    await _.GetCurrentDefinition(_, {
      sale_def_type: _,
      language: _,
      include_community_item_def: _,
    })
  )
    .Body()
    .toObject();
}
var _;
function _() {
  let _ = _();
  if (_) return _.GetServiceTransport();
  if (!_) {
    let _ = _(`loyalty_webapi_token`, `application_config`);
    _ = _(_ ? new _(_.WEBAPI_BASE_URL, _) : _());
  }
  return _.GetServiceTransport();
}
async function _(_) {
  return _(_(), _);
}
async function _(_) {
  return _(_(), _);
}
async function _(_) {
  return _(_(), _);
}
var _ = 3e5,
  _ = !1,
  _ = null,
  _ = {
    appid: 2243810,
    community_item_type: 2,
    community_item_class: 11,
  };
function _(_) {
  return [`SaleItemCanClaim`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    enabled: !_,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function _() {
  let _ = _.LANGUAGE,
    _ = _(),
    { data: _, isLoading: _ } = _(_(_)),
    _ = _?.rtNextClaimTime;
  return (
    (0, _.useEffect)(() => {
      let _ = 0;
      if (_) {
        let _ = () => {
          let _ = _ * 1e3 - Date.now();
          _ <= 0
            ? _.invalidateQueries({
                queryKey: _(_),
              })
            : (_ = window.setTimeout(_, _ > _ ? _ / 2 : _));
        };
        _();
      }
      return () => window.clearTimeout(_);
    }, [_, _, _]),
    {
      ...(_ ?? _),
      bLoading: _,
    }
  );
}
function _() {
  let _ = _(),
    { mutateAsync: _ } = _({
      mutationFn: () => {
        if (_) {
          let _ = _;
          return (_ = null), Promise.resolve(_);
        }
        return _
          ? Promise.resolve(_.getQueryData(_(_.LANGUAGE)) ?? _)
          : _(_.LANGUAGE);
      },
      onSuccess: (_) => _.setQueryData(_(_.LANGUAGE), _),
    });
  return {
    fnClaimItem: (0, _.useCallback)(() => _(), [_]),
  };
}
function _() {
  return _({
    mutationFn: (_) => _(_),
  });
}
function _() {
  let _ = _();
  return {
    fnSetClaimState: (0, _.useCallback)(
      (_) => {
        (_ = !0),
          (_ = _.bCanClaimNewItem
            ? {
                bAlreadyClaimedCurrentItem: !0,
                bCanClaimNewItem: !1,
                rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                ..._,
              }
            : null),
          _.setQueryData(_(_.LANGUAGE), _);
      },
      [_],
    ),
  };
}
function _(_, _, _) {
  return [`SaleRewardsGetDefinition`, _, _, _];
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: () => _(_, _, _, _),
    staleTime: 1 / 0,
  };
}
function _(_, _, _) {
  let _ = _();
  return _(_(_, _, _, _));
}
var _ = `sQ3oyZUR-zg-`,
  _ = `xlE3GjrXwxc-`,
  _ = `-kwnh0mPXe8-`;
function _(_) {
  let _ = _(),
    { bLoading: _ } = _,
    { className: _, bPreviewMode: _, rewardType: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        className: _(`CSSClaimItemButton`, _),
        onClick: () => {
          _.bCanClaimNewItem
            ? _()
            : _ &&
              (_(),
              console.log(
                `Show dialog for debugging, since already claimed: `,
                _,
              ));
        },
        disabled: _,
        children: _
          ? (0, _.jsx)(_, {
              string: _(`#Loading`),
              size: `small`,
            })
          : (0, _.jsx)(_, {
              claimState: _,
            }),
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          rewardType: _,
          closeModal: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { claimState: _, strButtonOverride: _, rewardType: _ } = _;
  if (_.bAlreadyClaimedCurrentItem)
    return (0, _.jsxs)(`div`, {
      className: _(_, `CSSClaimedState`),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(`span`, {
          children: [` `, _ || _(`#Sale_ClaimableReward_AlreadyClaimed`)],
        }),
      ],
    });
  let _ = _(`#Sale_ClaimableReward_generic`);
  switch (_?.community_item_class || _) {
    case 11:
      _ = _(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      _ = _(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      _ = _(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, _.jsx)(`span`, {
    className: `CSSUnclaimedState`,
    children: _,
  });
}
function _(_) {
  let { closeModal: _, rewardType: _ } = _,
    { fnClaimItem: _ } = _(),
    _ = _(),
    [_, _] = _.useState(null);
  _.useEffect(() => {
    _.bLoading ||
      (_.fnSetLoading(!0),
      _()
        .then((_) => {
          if ((_(_), _.appid)) {
            let _ = _(`#Sale_ClaimableReward_completed_generic`),
              _ = _?.community_item_class || _;
            switch (_) {
              case 11:
                _ = _(`#Sale_ClaimableReward_completed_sticker`);
                break;
              case 8:
                _ = _(`#Sale_ClaimableReward_completed_profilemodifier`);
                break;
              case 15:
                _ = _(`#Sale_ClaimableReward_completed_animatedavatar`);
            }
            _.fnSetStrSuccess(`   `),
              _.fnSetElSuccess(
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      children: _,
                    }),
                    (0, _.jsx)(_, {
                      appid: _.appid,
                      community_item_type: _.community_item_type,
                      rewardType: _,
                    }),
                  ],
                }),
              );
          } else _.fnSetStrError(_(`#Sale_ClaimableReward_Busy`));
        })
        .catch(() => _.fnSetStrError(_(`#Sale_ClaimableReward_Busy`))));
  }, [_?.community_item_class, _, _, _]);
  let _ = _(`#Sale_ClaimableReward_generic`);
  switch (_?.community_item_class || _) {
    case 11:
      _ = _(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      _ = _(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      _ = _(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, _.jsx)(_, {
    state: _,
    strDialogTitle: _,
    closeModal: _,
  });
}
function _(_) {
  let { appid: _, community_item_type: _, rewardType: _ } = _;
  return !_ || !_
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            appid: _,
            community_item_type: _,
          }),
          _ == 8 &&
            (0, _.jsx)(_, {
              appid: _,
              community_item_type: _,
            }),
        ],
      });
}
function _(_) {
  let { appid: _, community_item_type: _ } = _,
    _ = _(_),
    { mutate: _, isSuccess: _ } = _();
  if (!_) return null;
  let _ = _.find((_) => _.item_type == _);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _
            ? (0, _.jsx)(`div`, {
                children: _(
                  `#Sale_ClaimableReward_profilemodifier_apply_success`,
                ),
              })
            : (0, _.jsx)(_, {
                onClick: () => _(_),
                children: _(`#Sale_ClaimableReward_profilemodifier_apply`),
              }),
          (0, _.jsx)(_, {
            href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}`,
            children: _(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(_, {
            href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/edit/goldenprofile`,
            children: _(`#Sale_ClaimableReward_profilemodifier_choose`),
          }),
          (0, _.jsx)(_, {
            href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}`,
            children: _(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      });
}
var _ = _.lazy(() =>
  _(
    () =>
      import(`./shareeventdialogbody.js`).then((_) => ({
        default: _.ShareEventDialogBody,
      })),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    ]),
    import.meta.url,
  ),
);
function _(_) {
  let { bActive: _, ..._ } = _;
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsx)(_.Suspense, {
      fallback: null,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
function _(_) {
  let { eventModel: _, emoticonStore: _ } = _,
    [_, _, _] = _(),
    _ = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        focusable: !0,
        className: _(_, _, _),
        onActivate: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#Button_Share`),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        strEventLink: _ ?? ``,
        bActive: _,
        closeModal: _,
        emoticonStore: _,
      }),
    ],
  });
}
function _(_, _) {
  return !_ || _.startsWith(`https://`) || _.startsWith(`http://`)
    ? _
    : `${_.CLAN_CDN_ASSET_URL}images/clan/${_}/${_}`;
}
function _(_, _, _) {
  return !_ || _(_) ? _ : `${_}images/clan/${_}/${_}`;
}
var _ = `poster`,
  _ = `${_}.avif`,
  _ = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function _(_) {
  let _ = _.video_webm_src || _.video_mp4_src;
  if (!_ || _.image?.includes(`.${_}.`)) return _.image;
  let _ = _.exec(_);
  return _ ? `${_[1]}.${_}` : _.image;
}
var _ = 0.01,
  _ = 100,
  _ = 4,
  _ = [
    [16, 9],
    [9, 16],
    [4, 3],
    [3, 4],
    [3, 2],
    [2, 3],
    [1, 1],
    [21, 9],
    [2, 1],
    [1, 2],
    [5, 4],
    [4, 5],
  ],
  _ = 0.005;
function _(_, _) {
  if (!(!_ || !_ || _ <= 0 || _ <= 0)) return _(_ / _);
}
function _(_) {
  if (!_ || !Number.isFinite(_) || _ < _ || _ > _) return;
  let _ = 10 ** _;
  return Math.round(_ * _) / _;
}
function _(_) {
  let _ = _.trim();
  if (!_) return;
  let _ = /^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i.exec(_);
  if (_) return _(parseFloat(_[1]), parseFloat(_[2]));
  if (/^\d+(?:\.\d+)?$/.test(_)) return _(parseFloat(_));
}
function _(_) {
  let _ = _.find(([_, _]) => Math.abs(_ - _ / _) < _);
  return _ ? `${_[0]}:${_[1]}` : String(_);
}
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
var _ = _(_(), 1),
  _ = _(_(), 1);
async function _(_, _) {
  let _ = new URLSearchParams();
  _.append(`page_action`, String(_)),
    _.append(`snr`, _.SNR),
    _.append(`uint_data`, String(_)),
    _.append(`str_data`, _());
  try {
    await fetch(_.STORE_BASE_URL + `events/ajaxreportnewshubstats/`, {
      method: `POST`,
      body: _,
    });
  } catch {}
}
function _() {
  if (_.IN_CLIENT) return `steam`;
  let _ = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(_) ||
    (/Macintosh/i.test(_) && /Safari/i.test(_))
    ? `ios`
    : /Android/i.test(_)
      ? `android`
      : ``;
}
var _ = (function (_) {
    return (
      (_[(_.k_eDiscussions = 0)] = `k_eDiscussions`),
      (_[(_.k_eThumbsUp = 1)] = `k_eThumbsUp`),
      (_[(_.k_eClickThrough = 2)] = `k_eClickThrough`),
      (_[(_.k_eMuted = 3)] = `k_eMuted`),
      (_[(_.k_ePlayedVideo = 4)] = `k_ePlayedVideo`),
      (_[(_.k_eReminder_Opened = 5)] = `k_eReminder_Opened`),
      (_[(_.k_eReminder_MobilePush = 6)] = `k_eReminder_MobilePush`),
      (_[(_.k_eReminder_Email = 7)] = `k_eReminder_Email`),
      (_[(_.k_eReminder_CalendarApple = 8)] = `k_eReminder_CalendarApple`),
      (_[(_.k_eReminder_CalendarGoogle = 9)] = `k_eReminder_CalendarGoogle`),
      (_[(_.k_eReminder_CalendarOutlook = 10)] = `k_eReminder_CalendarOutlook`),
      (_[(_.k_eReminder_EmailUnverified = 11)] = `k_eReminder_EmailUnverified`),
      (_[(_.k_eReminder_MobilePushMissing = 12)] =
        `k_eReminder_MobilePushMissing`),
      _
    );
  })({}),
  _ = {
    nFutureViewedIndex: 0,
    nPastViewedIndex: 0,
    nLastRecordedFilter: 0,
  };
function _() {
  return [`EventCalendarTrackingProgress`];
}
function _(_) {
  return _.getQueryData(_()) ?? _;
}
function _(_, _) {
  _.setQueryDefaults(_(), {
    staleTime: 1 / 0,
    gcTime: 1 / 0,
  }),
    _.setQueryData(_(), (_) => ({
      ...(_ ?? _),
      ..._,
    }));
}
function _(_, _, _) {
  return clearTimeout(_), setTimeout(_, _);
}
function _(_) {
  _(19, _);
}
function _(_, _) {
  _(_, {
    schFilter: _(_(_).schFilter, 1e3, () => {
      _ != _(_).nLastRecordedFilter &&
        (_(_, {
          nLastRecordedFilter: _,
        }),
        _(16, _));
    }),
  });
}
function _(_, _, _, _) {
  let _ = 0,
    _ = 0,
    _,
    _;
  for (let _ of _) {
    let _ = _.start_time > _;
    if ((_.unique_id == _ && ((_ = _), (_ = _)), _)) _++;
    else if (_ !== void 0) break;
    _++;
  }
  if (_ === void 0 || !_) return;
  let _ = _(_);
  if (_ < _) {
    let _ = _ - _;
    if (_.nFutureViewedIndex >= _) return;
    _(_, {
      nFutureViewedIndex: _,
      schFuture: _(_.schFuture, 500, () => {
        _(
          18,
          Math.min(_, 4095) |
            (Math.min(_, 255) << 12) |
            (Math.min(_(_), 2047) << 20),
        );
      }),
    });
    return;
  }
  let _ = _ - _;
  if (_.nPastViewedIndex >= _) return;
  let _ = Math.floor((_ - _.start_time) / 86400);
  _(_, {
    nPastViewedIndex: _,
    schPast: _(_.schPast, 500, () => {
      _(
        17,
        Math.min(_, 4095) |
          (Math.min(_, 255) << 12) |
          (Math.min(_(_), 2047) << 20),
      );
    }),
  });
}
function _(_) {
  return Math.max(0, Math.floor(Date.now() / 1e3 - _));
}
function _() {
  let _ = _(),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        switch (_.type) {
          case `interaction`:
            _(_.interaction);
            break;
          case `filter-change`:
            _(_, _.nFilterBitMask);
            break;
          case `event-viewed`:
            _(_, _.gidEvent, _.rgItemsInView, _.rtCalendarInit);
        }
      },
    });
  return _.useMemo(
    () => ({
      RecordInteraction: (_) =>
        _({
          type: `interaction`,
          interaction: _,
        }),
      RecordFilterChange: (_) =>
        _({
          type: `filter-change`,
          nFilterBitMask: _,
        }),
      RecordEventViewed: (_, _, _) =>
        _({
          type: `event-viewed`,
          gidEvent: _,
          rgItemsInView: _,
          rtCalendarInit: _,
        }),
    }),
    [_],
  );
}
function _(_, _) {
  return [`GetClanAnnouncementVoteForUser`, _, _];
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _(_, _.accountid),
    { data: _ } = _({
      queryKey: _,
      queryFn: async () => await _.GetMyEventVote(_),
      initialData: _?.initialVote,
      enabled: !!_ && !!_.accountid && (_?.bAsk ?? !0),
      staleTime: 1 / 0,
      gcTime: 1 / 0,
    }),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        let _ = await _.RateEvent(_, _, _);
        if (_ != 1) throw Error(`RateClanAnnouncement failed with ${_}`);
      },
      onMutate: (_) => _.setQueryData(_, _),
      onError: () =>
        _.invalidateQueries({
          queryKey: _,
        }),
    });
  return {
    myVote: _,
    Vote: (_) => {
      _ && _ != _ && _(_);
    },
  };
}
function _(_, _) {
  if (_.length == 0) return;
  let _ = _ ?? _(`SetMyEventVotes`);
  _ &&
    _.forEach((_) => _.setQueryData(_(_.gidAnnouncement, _.accountid), _.vote));
}
var _ = `partnereventaction/myvote`,
  _ = `partnereventaction/rateevent`;
async function _(_) {
  let _ = _.STORE_BASE_URL + _ + `?gid=` + encodeURIComponent(_),
    _ = await fetch(_, {
      credentials: `include`,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return (await _.json()).vote ?? null;
}
async function _(_, _, _) {
  let _ = _.STORE_BASE_URL + _,
    _ = await fetch(_, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({
        gid: _,
        clanaccountid: String(_),
        voteup: _ == `up` ? `1` : `0`,
      }),
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return (await _.json()).success ?? 2;
}
var _ = {
    GetMyEventVote: _,
    RateEvent: _,
  },
  _ = `notificationaction/usercontactmethods`;
async function _() {
  let _ = _.STORE_BASE_URL + _,
    _ = await fetch(_, {
      credentials: `include`,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return await _.json();
}
var _ = {
  bHasValidatedEmail: !1,
  bHasPushNotification: !1,
};
function _() {
  let { data: _ } = _(_());
  return _ ?? _;
}
function _(_) {
  return [`useUserContactMethods`, _];
}
function _() {
  return {
    queryKey: _(_.accountid),
    queryFn: _,
    enabled: !!_.logged_in,
    initialData: () => {
      let _ = _(`notificationstore`, `application_config`);
      return _(_) ? _(_) : void 0;
    },
  };
}
function _(_) {
  return {
    bHasValidatedEmail: !!_.email_validated,
    bHasPushNotification: (_.mobile_device_count ?? 0) > 0,
  };
}
function _(_) {
  let _ = _;
  return (
    !!_ && typeof _ == `object` && typeof _.mobile_device_count == `number`
  );
}
var _ = `_5AgZEgYk43o-`,
  _ = `_8D33ZtA7ymg-`,
  _ = `KtGRAufC8Rg-`,
  _ = `Kd1BYtvJHJU-`,
  _ = `N7OtL5zwQl8-`,
  _ = `s1rk-Hqt8Vo-`,
  _ = `LQdMT5i8LTs-`,
  _ = `Es2eMo59RY8-`,
  _ = `QcOIba5EbY0-`,
  _ = `Rudc0MPiyKA-`,
  _ = `cVnNrHICBDo-`,
  _ = `NOqR9p4DLhY-`,
  _ = `kuZjNUoyxrA-`;
function _(_) {
  return (
    (_.bHasVerifiedEmail && _.bFollowsByEmail) ||
    (_.bHasPushNotification && _.bFollowsByPush)
  );
}
function _(_) {
  let {
      eventModel: _,
      rtNow: _,
      notifyState: _,
      bOnlyShowIcon: _,
      renderPanel: _,
      onRequestSignIn: _,
      bSignedIn: _,
      onTrack: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useCallback(() => {
      _.current?.Hide(), _(!1);
    }, []),
    _ = () => {
      let _ = {
        bOverlapHorizontal: !0,
        bOverlapVertical: !0,
        bDisablePopTop: !0,
        bMatchWidth: !0,
        strClassName: _(_, _, _),
      };
      (_.current = _(_(_), _.current, _)),
        _.current.SetOnHideCallback(_),
        _(!0),
        _?.(`opened`);
    },
    _ = (_) => {
      _ ? (_ ? _() : _(), _.stopPropagation(), _.preventDefault()) : _?.();
    },
    _ = _ && !_,
    _ = _(_);
  return (_.startTime !== void 0 && _.startTime < _) || _.BIsUnlistedEvent()
    ? null
    : (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [_]: !0,
          [_]: _,
          [_]: !_,
          ReminderSet: _,
          RemindMeWidget: !0,
        }),
        role: `button`,
        tabIndex: 0,
        "aria-expanded": _,
        onClick: _,
        onKeyDown: (_) => {
          (_.key === `Enter` || _.key === ` `) && _(_);
        },
        ref: _,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `oz3mjoeUVmI-`,
              children: (0, _.jsx)(_, {}),
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `XaxmL5123ZA-`,
              children: (0, _.jsx)(_, {}),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      });
}
function _(_) {
  let {
      eventModel: _,
      lang: _,
      rtNow: _,
      notifyState: _,
      bShowStartTime: _,
      bExpandLeft: _,
      bOnlyShowIcon: _,
      strCalendarEventTitle: _,
      onChangeNotify: _,
      onTrack: _,
      fnHidePanel: _,
    } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(void 0),
    [_, _, _] = _(),
    _ = async (_, _) => {
      if (_.GID && _.GID != `18446744073709551615`) {
        _(!0);
        try {
          await _(_, _),
            _ && _?.(_ == `email` ? `notify-email` : `notify-push`);
        } catch (_) {
          _(_ instanceof Error ? _.message : String(_)), _();
        }
        _(!1);
      }
    },
    _ = _.jsondata.bSaleEnabled ? _.k_eStoreSalePage : _.k_eStoreView,
    _ = _(_, _, `forceAbsolute`),
    _ = () => {
      let _ = _.GetSubTitleWithLanguageFallback(_);
      _ = _ ? `${_}\n\n\n` : ``;
      let _ = _.GetSummaryWithFallback(_);
      return `${_}${_}\n\n${_}`;
    },
    _ = () => {
      let _ = encodeURIComponent(_),
        _ = encodeURIComponent(_()),
        _ = _.GetStartTimeAndDateUnixSeconds(),
        _ = _(_),
        _ = _(_.GetEndTimeAndDateUnixSeconds() || _ + _.PerHour),
        _ =
          (_.IN_CLIENT ? `steam://openurl_external/` : ``) +
          `https://calendar.google.com/calendar/r/eventedit?text=${_}&details=${_}&dates=${_}/${_}`;
      return _(_);
    },
    _ = (_) => {
      let _ = _.appid
          ? `app/` + _.appid
          : `group/` + _.clanSteamID.GetAccountID(),
        _ = `l=` + _(_);
      return `${_.STORE_BASE_URL}${_()}/download/${_}/${_}/${_.GID}?${_}`;
    },
    {
      bHasVerifiedEmail: _,
      bHasPushNotification: _,
      bFollowsByEmail: _,
      bFollowsByPush: _,
    } = _,
    _ = _ && _.GetStartTimeAndDateUnixSeconds();
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _ ? _ : _, `RemindMeWidget`),
        role: `button`,
        tabIndex: 0,
        onClick: _,
        onKeyDown: (_) => {
          (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _());
        },
        children: [
          _(_) &&
            (0, _.jsx)(`div`, {
              className: `oz3mjoeUVmI-`,
              children: (0, _.jsx)(_, {}),
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `XaxmL5123ZA-`,
              children: (0, _.jsx)(_, {}),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _, _ && `_4kHkgBu8y8A-`),
        children: [
          _ &&
            (0, _.jsx)(_, {
              className: `xPjWHd9Ig14-`,
              size: `xlarge`,
              position: `center`,
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `QivD6fzvu-Q-`,
              children: _(
                `#EventDisplay_EventUpcoming_WithDateAndTime`,
                _(_, _(new Date(_ * 1e3), new Date(_ * 1e3))),
                _(_, !0),
              ),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#EventDisplay_Reminder_GetNotification_Via`),
          }),
          (0, _.jsxs)(`div`, {
            className: _(_, !_ && `jtgpkfFhOJ8-`),
            children: [
              (0, _.jsx)(_, {
                className: _,
                bTopmost: !0,
                toolTipContent: _(
                  _
                    ? `#EventReminder_NotifyByEmail_ttip`
                    : `#EventReminder_NotifyByEmail_Missing`,
                ),
                children: (0, _.jsx)(_, {
                  label: _(`#EventDisplay_Reminder_ViaEmail`),
                  disabled: !_,
                  checked: _,
                  onChange: (_) => _(_, `email`),
                }),
              }),
              !_ &&
                (0, _.jsx)(`div`, {
                  className: `_0UzWiVhBe8U-`,
                  children: (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL + `account/`,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => _?.(`email-unverified`),
                    rel: `noreferrer`,
                    children: _(`#EventReminder_NotifyByEmail_Missing_Add`),
                  }),
                }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _(_, !_ && `jtgpkfFhOJ8-`),
            children: [
              (0, _.jsx)(_, {
                className: _,
                bTopmost: !0,
                toolTipContent: _(
                  _
                    ? `#EventReminder_NotifyByMobile_ttip`
                    : `#EventReminder_NotifyByMobile_Missing`,
                ),
                children: (0, _.jsx)(_, {
                  label: _(`#EventDisplay_Reminder_ViaMobileApp`),
                  disabled: !_,
                  checked: _,
                  onChange: (_) => _(_, `push`),
                }),
              }),
              !_ &&
                (0, _.jsx)(`div`, {
                  className: `_0UzWiVhBe8U-`,
                  children: (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL + `mobile/?show=steamapp`,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => _?.(`push-missing`),
                    rel: `noreferrer`,
                    children: _(`#EventReminder_NotifyByMobile_Install`),
                  }),
                }),
            ],
          }),
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#EventDisplay_Reminder_AddToCalendar`),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`a`, {
                    className: _,
                    href: _(`ics`),
                    onClick: () => _?.(`calendar-apple`),
                    children: _(`#EventDisplay_Reminder_AppleCalendar_Short`),
                  }),
                  (0, _.jsx)(`a`, {
                    className: _,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    href: _(),
                    onClick: () => _?.(`calendar-google`),
                    rel: `noreferrer`,
                    children: _(`#EventDisplay_Reminder_GoogleCalendar_Short`),
                  }),
                  (0, _.jsx)(`a`, {
                    className: _,
                    href: _(`outlook`),
                    onClick: () => _?.(`calendar-outlook`),
                    children: _(`#EventDisplay_Reminder_OutlookCalendar_Short`),
                  }),
                ],
              }),
            ],
          }),
          !1,
        ],
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          strTitle: _(`#EventDisplay_Reminder_FollowEvent_Error`),
          strDescription: _(`#EventDisplay_Reminder_FollowEvent_ErrorDesc`),
          closeModal: _,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  return new Date(_ * 1e3)
    .toISOString()
    .replace(/[-:]/g, ``)
    .replace(/\.\d{3}Z$/, `Z`);
}
var _ = (function (_) {
  return (
    (_[(_.k_ENotifyFlagNone = 0)] = `k_ENotifyFlagNone`),
    (_[(_.k_ENotifyFlagByEmail = 1)] = `k_ENotifyFlagByEmail`),
    (_[(_.k_ENotifyFlagByPush = 2)] = `k_ENotifyFlagByPush`),
    _
  );
})({});
function _(_, _) {
  let _ = _(),
    _ = _(),
    { data: _ } = _(_(_, _, _)),
    _ = _(),
    _ = _(_, _);
  return {
    bHasVerifiedEmail: _.bHasValidatedEmail,
    bHasPushNotification: _.bHasPushNotification,
    bFollowsByEmail: (_ & _.k_ENotifyFlagByEmail) != 0,
    bFollowsByPush: (_ & _.k_ENotifyFlagByPush) != 0,
  };
}
function _(_, _) {
  let _ = _(),
    _ = _(_, _, _());
  return async (_, _) => {
    if (!_) return;
    let _ = _.getQueryData(_.queryKey),
      _ = _ == `email` ? _.k_ENotifyFlagByEmail : _.k_ENotifyFlagByPush,
      _ = _(_, _);
    await _(_, _, _ ? _ | _ : _ & ~_),
      await _.invalidateQueries({
        queryKey: _.queryKey,
      });
  };
}
function _(_, _) {
  let _ = _ ? (_?.event_followed?.indexOf(_) ?? -1) : -1;
  return _ == -1 ? 0 : (_?.event_followed_flags?.[_] ?? 0);
}
async function _(_, _, _) {
  let _ = _ == 0,
    _ = `${`${_.COMMUNITY_BASE_URL}gid/${_.InitFromClanID(_, _.EUNIVERSE).ConvertTo64BitString()}/`}${_ ? `unfolloworunignoreevent` : `followorignoreevent`}`,
    _ = new URLSearchParams();
  _.append(`sessionid`, _()),
    _.append(`ignore`, `false`),
    _.append(`gid`, _),
    _.append(`notification_flag`, `` + _),
    _.append(`clan_accountid`, `` + _);
  let _ = await fetch(_, {
    method: `POST`,
    body: _,
    credentials: `include`,
  });
  if (!_._) throw Error(`${_} answered ${_.status}`);
}
function _(_) {
  let { eventModel: _, bOnlyShowIcon: _, onTrack: _ } = _,
    _ = _(),
    _ = _(_.clanSteamID.GetAccountID(), _.GID),
    { elDialogElement: _, fnShowLogonDialog: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        eventModel: _,
        rtNow: _,
        notifyState: _,
        bOnlyShowIcon: _,
        bSignedIn: !!_.logged_in || _.IN_CLIENT,
        onRequestSignIn: _,
        onTrack: _,
        renderPanel: (_) =>
          (0, _.jsx)(_, {
            ..._,
            rtNow: _,
            fnHidePanel: _,
          }),
      }),
      _,
    ],
  });
}
function _(_) {
  let {
      eventModel: _,
      lang: _,
      strHubName: _,
      bShowStartTime: _,
      bExpandLeft: _,
      bOnlyShowIcon: _,
      onTrack: _,
      rtNow: _,
      fnHidePanel: _,
    } = _,
    _ = _.clanSteamID.GetAccountID(),
    _ = _(_, _.GID),
    _ = _(_, _.GID),
    _ = _.GetNameWithFallback(_) ?? ``,
    _ = _ ? `${_}: ${_}` : _;
  return (0, _.jsx)(_, {
    eventModel: _,
    lang: _,
    rtNow: _,
    notifyState: _,
    strCalendarEventTitle: _,
    bShowStartTime: _,
    bExpandLeft: _,
    bOnlyShowIcon: _,
    onChangeNotify: _,
    onTrack: _,
    fnHidePanel: _,
  });
}
function _(_) {
  let {
      eventModel: _,
      lang: _,
      bShowStartTime: _,
      bExpandLeft: _,
      bOnlyShowIcon: _,
    } = _,
    _ = _(),
    _ = _(_);
  return (0, _.jsx)(_, {
    eventModel: _,
    lang: _,
    strHubName: _,
    bShowStartTime: _,
    bExpandLeft: _,
    bOnlyShowIcon: _,
    onTrack: (_) => _.RecordInteraction(_[_]),
  });
}
function _(_) {
  let _ = _.appid || void 0,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_ ? void 0 : _.clanSteamID.GetAccountID());
  return (_ ? _?.name : _?.group_name) || void 0;
}
var _ = {
    opened: _.k_eReminder_Opened,
    "notify-email": _.k_eReminder_Email,
    "notify-push": _.k_eReminder_MobilePush,
    "email-unverified": _.k_eReminder_EmailUnverified,
    "push-missing": _.k_eReminder_MobilePushMissing,
    "calendar-apple": _.k_eReminder_CalendarApple,
    "calendar-google": _.k_eReminder_CalendarGoogle,
    "calendar-outlook": _.k_eReminder_CalendarOutlook,
  },
  _ = `m7T1AR0hEMQ-`;
function _(_) {
  let { MissingEventFallback: _ } = _,
    { event: _, showErrorInfo: _ } = _.context,
    _ = _(_.args),
    _ = !!_ && _ != _?.GID,
    { data: _, isPending: _ } = _(
      _ && _
        ? {
            clanAccountID: _.clanSteamID.GetAccountID(),
            eventGID: _,
          }
        : void 0,
    );
  if (!_)
    return _
      ? (0, _.jsx)(_, {
          eventModel: _,
          lang: _.language,
        })
      : null;
  if (_) {
    if (_)
      return (0, _.jsx)(_, {
        eventModel: _,
        lang: _.language,
      });
    if (_) return null;
  }
  return _
    ? (0, _.jsx)(_, {
        eventGID: _,
        lang: _.language,
        bShowErrorInfo: !!_,
      })
    : _
      ? (0, _.jsx)(_, {
          eventGID: _,
        })
      : null;
}
function _({ eventGID: _ }) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#EventDidplay_Reminder_EventNotVisible`, _),
  });
}
var _ = _(_()),
  _ = _(_(), 1),
  _ = new Map([
    [
      `remindme`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
  ]);
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    MissingEventFallback: _,
  });
}
function _({ eventGID: _, lang: _, bShowErrorInfo: _ }) {
  let _ = _(_);
  return _
    ? (0, _.jsx)(_, {
        eventModel: _,
        lang: _,
      })
    : _
      ? (0, _.jsx)(_, {
          eventGID: _,
        })
      : null;
}
function _(_) {
  if (_ === `GameAwardDrop2022`) {
    let _ = _(_),
      _ = _();
    return _
      ? _.registered
        ? {
            bInitialState: !1,
            bSuccessState: _.eligible,
            bFailedState: !_.eligible,
            fnAction: _.eligible
              ? void 0
              : async () => {
                  await _.fnCreateRegistration(_);
                },
          }
        : {
            bInitialState: !0,
            fnAction: async () => {
              await _.fnCreateRegistration(_);
            },
          }
      : {
          bInitialState: !0,
        };
  }
  return {
    bInitialState: !0,
  };
}
function _(_) {
  let _ = _(_.args, `action`),
    _ = _(_.args, `initialToken`),
    _ = _(_.args, `successToken`),
    _ = _(_.args, `failToken`),
    _ = _(_),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    [_, _, _] = _();
  return !_ || !_ || !_ || !_
    ? _.context.showErrorInfo
      ? (0, _.jsx)(`div`, {
          children: `Failed to provide all tokens. Dialog will not appear`,
        })
      : null
    : !_.logged_in && _ != `test` && _ != `nologinrequired`
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              className: `CSSActionDialogButton`,
              onClick: _,
              children: _(`#Login_SignIn`),
            }),
            _,
          ],
        })
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_, {
              className: `CSSActionDialogButton`,
              onClick: _,
              children: [
                !!_.bInitialState && _(_),
                !!_.bSuccessState && _(_),
                !!_.bFailedState && _(_),
              ],
            }),
            (0, _.jsx)(_, {
              active: _,
              children: (0, _.jsx)(_, {
                strAction: _,
                strInitialToken: _,
                strSuccessToken: _,
                strFailToken: _,
                closeModal: _,
                children: _.children,
              }),
            }),
          ],
        });
}
function _(_) {
  let {
      strAction: _,
      children: _,
      closeModal: _,
      strInitialToken: _,
      strSuccessToken: _,
      strFailToken: _,
    } = _,
    _ = _(_),
    [_, _] = _.useState(!!_.fnAction),
    _ = _.useRef(!1);
  _.useEffect(() => {
    _.fnAction &&
      !_.current &&
      ((_.current = !0), _(!0), _.fnAction().finally(() => _(!1)));
  }, [_]);
  let _ = _.useId();
  return (0, _.jsxs)(_, {
    bDisableBackgroundDismiss: !0,
    closeModal: _,
    onCancel: _,
    className: `CSSActionDialogDialog`,
    "aria-labelledby": _,
    children: [
      (0, _.jsxs)(_, {
        _: _,
        children: [
          !!_.bInitialState && _(_),
          !!_.bSuccessState && _(_),
          !!_.bFailedState && _(_),
        ],
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: _
            ? (0, _.jsx)(_, {
                size: `medium`,
                position: `center`,
                string: _(`#Loading`),
              })
            : _,
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = !!_.context.showErrorInfo,
    { elDialogElement: _, fnShowLogonDialog: _ } = _();
  if (!_.logged_in)
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          onClick: _,
          className: `CSSClaimItemLoginButton`,
          children: _(`#Sale_ClaimableReward_Login`),
        }),
        _,
      ],
    });
  let _ = _(_.args, `type`),
    _;
  if (_)
    switch (_) {
      case `profilemodifier`:
        _ = 8;
        break;
      case `sticker`:
        _ = 11;
    }
  return (0, _.jsx)(_, {
    bPreviewMode: _,
    rewardType: _,
  });
}
function _(_) {
  let _ = _(_.args, `name`),
    _ = (_(_.args, `visible`) || `false`).toLowerCase() === `true`,
    _ = _(_);
  return _
    ? !_ || !_.registered
      ? null
      : (_.eligible && _) || (!_.eligible && !_)
        ? (0, _.jsx)(_.Fragment, {
            children: _.children,
          })
        : null
    : _.context.showErrorInfo
      ? (0, _.jsx)(`div`, {
          children: `Failed to provide giveaway name`,
        })
      : null;
}
function _(_, _) {
  let _ = _.useCallback(
    (_) => {
      _.preventDefault(), (_.returnValue = _);
    },
    [_],
  );
  _(window, `beforeunload`, _ ? _ : void 0),
    _.useEffect(() => {
      if (!_ || !window.navigation) return;
      let _ = (_) => {
        (_.navigationType != `push` && _.navigationType != `traverse`) ||
          _.hashChange ||
          _.downloadRequest !== null ||
          !_.cancelable ||
          window.confirm(_) ||
          _.preventDefault();
      };
      return (
        window.navigation.addEventListener(`navigate`, _),
        () => window.navigation.removeEventListener(`navigate`, _)
      );
    }, [_, _]);
}
var _ = `UsXiB1C-X8I-`;
function _(_) {
  let { bExpanded: _, setExpanded: _ } = _;
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && `kQONFOetCiQ-`),
    onClick: () => _(!_),
    children: (0, _.jsx)(_, {
      direction: `down`,
    }),
  });
}
var _ = `meetsteam/updateregistration`,
  _ = `meetsteam/attendance_qrcode`;
async function _(_, _) {
  let _ = new URL(_.STORE_BASE_URL + _);
  for (let [_, _] of Object.entries(_)) _.searchParams.set(_, _);
  let _ = await fetch(_, {
    credentials: `include`,
  });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return await _.json();
}
async function _(_) {
  return (
    (
      await _(`meetsteam/availability`, {
        gid: _,
      })
    ).availability ?? []
  );
}
async function _(_) {
  return (
    (
      await _(`meetsteam/registrations`, {
        gid: _,
      })
    ).registrations ?? []
  );
}
async function _(_) {
  return (
    (
      await _(`meetsteam/registrationdetails`, {
        gid: _,
      })
    ).strJSONData ?? ``
  );
}
async function _() {
  return (
    (await _(`meetsteam/registrantinfo`, {})).info ?? {
      realname: ``,
      email: ``,
      partners: [],
    }
  );
}
async function _(_, _) {
  return await _(_, {
    gid: _,
    accountid: String(_),
  });
}
async function _(_) {
  let _ = _.STORE_BASE_URL + _,
    _ = new URLSearchParams({
      gid: _.gid,
      group_id: String(_.group_id),
      session_id: String(_.session_id),
      guest_count: String(_.guest_count),
      jsondata: _.jsondata,
      skip_email: _.skip_email ? `1` : `0`,
    }),
    _ = await fetch(_, {
      method: `POST`,
      credentials: `include`,
      body: _,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return (await _.json()).success;
}
var _ = `America/Los_Angeles`;
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => _(_),
    enabled: _() == _,
    staleTime: _.PerMinute * 10,
  };
}
function _(_, _) {
  return _(_(_, _));
}
var _ = (_, _) => [`useMeetSteamGetAvailability`, _, _];
function _(_, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: async () => {
      let _ = await _(_);
      return _ ? JSON.parse(_) : {};
    },
    enabled: _() == _ && !!_,
  };
}
function _(_, _, _) {
  return _(_(_, _, _));
}
var _ = (_, _, _) => [`useMeetSteamGetRegistrationDetails`, _, _, _];
function _(_) {
  return {
    queryKey: [`MeetSteamRegistrantInfo`, _],
    queryFn: () => _(),
    enabled: !!_,
    staleTime: _.PerMinute * 10,
  };
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  return {
    queryKey: [`useMeetSteamQRCode`, _, _],
    queryFn: () => _(_, _),
    enabled: !!_ && !0,
    staleTime: _.PerMinute * 10,
  };
}
function _(_, _) {
  return _(_(_, _)).data?.qrcode;
}
function _(_, _ = Intl.DateTimeFormat().resolvedOptions().timeZone) {
  return _.location_type === `in_person`
    ? (_.in_person_time_zone ?? `America/Los_Angeles`)
    : _;
}
function _(_) {
  let _ = _();
  return _(() => ({
    rtime_start: _.rtime_start,
    rtime_end: _.rtime_end,
    sDisplayTimeZone: _(_, _),
  }));
}
function _(_, _) {
  let _ = _.default.unix(_),
    _ = _.default.unix(_)._(_).utcOffset() - _.utcOffset();
  return new Date((_ + _ * 60) * 1e3);
}
function _(_, _) {
  let _ = _(_, _),
    _ = new Date();
  return _.getFullYear() == _.getFullYear() ? _(_) : _(_);
}
function _(_, _, _, _) {
  let _ = _.default.unix(_),
    _ = _.default.unix(_)._(_).utcOffset() - _.utcOffset(),
    _ = _.default.unix(_),
    _ = _.default.unix(_)._(_),
    _ = _.utcOffset() - _.utcOffset();
  return _(_ + _ * 60, _ + _ * 60, !0) + (_ ? `` : ` ` + _.format(`z`));
}
var _ = new Map(),
  _ = ``,
  _ = 0;
function _(_, _) {
  return [`MeetSteamRegistrations`, _, _];
}
function _(_, _) {
  return [`MeetSteamSelections`, _, _];
}
function _(_) {
  return {
    queryKey: _(_?.gidClanEvent ?? _, _?.userAccountID ?? _),
    queryFn: async () => {
      if (!_) return _;
      let _ = await _(_.gidClanEvent),
        _ = new Map();
      return (
        _.forEach((_) => {
          let _ = {
            ..._,
            regmodel: _.jsondata ? JSON.parse(_.jsondata) : void 0,
          };
          _.group_id !== void 0 &&
            _.session_id !== void 0 &&
            _.set(_.group_id, _);
        }),
        _
      );
    },
    enabled: !!_ && _() == _?.clanAccountID && !!_?.userAccountID,
  };
}
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => null,
    initialData: null,
    staleTime: 1 / 0,
    gcTime: 1 / 0,
  };
}
var _ = _.createContext(void 0);
function _(_) {
  let { clanAccountID: _, gidClanEvent: _, userAccountID: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        clanAccountID: _,
        gidClanEvent: _,
        userAccountID: _,
      }),
      [_, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let _ = _.useContext(_),
    _ = _(_(_)),
    _ = _(_(_?.gidClanEvent ?? _, _?.userAccountID ?? _)),
    _ = _.data ?? _;
  return _.useMemo(
    () => ({
      registrations: _,
      selections: _.data ?? _(_),
      bLoading: _.isFetching,
    }),
    [_, _.data, _.isFetching],
  );
}
function _(_) {
  let _ = new Map();
  return (
    _.forEach((_, _) => {
      _.session_id !== void 0 && _.set(_, _.session_id);
    }),
    _
  );
}
function _(_, _) {
  return _ === void 0 ? void 0 : _.selections.get(_);
}
function _(_) {
  return Array.from(_.selections.keys());
}
function _(_, _, _) {
  if (_ === void 0 || _ === void 0) return 0;
  let _ = _.registrations.get(_)?.session_id == _,
    _ = _.selections.get(_) == _;
  return _ && _ ? 1 : !_ && _ ? 2 : _ && !_ ? 3 : 0;
}
function _(_, _, _) {
  if (_ === void 0 || _ === void 0) return !1;
  let _ = !!_.registrations.get(_),
    _ = _.selections.get(_) == _,
    _ = _.registrations.get(_)?.session_id == _.selections.get(_);
  return _ && !_ && _;
}
function _(_, _) {
  return _ === void 0 ? void 0 : _.registrations.get(_)?.session_id;
}
function _(_) {
  return _.selections.size == 0 && _.registrations.size == 0
    ? !1
    : _.selections.size != _.registrations.size ||
        !Array.from(_.selections.entries()).every(
          (_) => _.registrations.get(_[0])?.session_id == _[1],
        );
}
function _(_) {
  return Array.from(_.selections.entries()).some((_) => {
    let _ = _.registrations.get(_[0]);
    return !_ || _.session_id != _[1];
  });
}
function _(_) {
  return _.registrations.size > 0;
}
function _() {
  return _().bLoading;
}
function _() {
  return _(_());
}
function _() {
  return _(_());
}
function _(_, _) {
  return _(
    _(),
    _.filter((_) => !!_.ask_registration_question),
    _,
  );
}
function _(_, _, _) {
  return _.filter((_) => _.sessions.some((_) => _(_, _.group_id, _._) == _))
    .map((_) => _.group_id)
    .filter((_) => _ !== void 0);
}
function _(_, _, _, _) {
  _ !== void 0 &&
    _.setQueryData(_(_.gidClanEvent, _.userAccountID), (_) => {
      let _ = _.getQueryData(_(_.gidClanEvent, _.userAccountID)) ?? _,
        _ = new Map(_ ?? _(_));
      return _ !== void 0 && _ > 0 ? _.set(_, _) : _.delete(_), _;
    });
}
function _() {
  let _ = _.useContext(_),
    _ = _(),
    _ = _();
  return _.useCallback(
    (_, _) => {
      if (!_) return;
      let _ = _(_, _) == _;
      _(_, _, _, _ ? void 0 : _);
    },
    [_, _, _],
  );
}
function _() {
  let _ = _.useContext(_),
    _ = _(),
    _ = _(),
    { mutateAsync: _ } = _({
      mutationFn: async (_) => {
        if (!_) return !1;
        let _ = Object.fromEntries(
            Object.entries(_).filter(
              ([_]) => !_.startsWith(`registration_emailed_`),
            ),
          ),
          _ = [];
        for (let [_, _] of _.selections)
          _.push({
            gid: _.gidClanEvent,
            group_id: _,
            session_id: _,
            guest_count: _.guests_registered ?? 1,
            jsondata: JSON.stringify(_),
            skip_email: !1,
          });
        for (let _ of _.registrations.keys())
          _.selections.has(_) ||
            _.push({
              gid: _.gidClanEvent,
              group_id: _,
              session_id: 0,
              guest_count: 0,
              jsondata: JSON.stringify({}),
              skip_email: !1,
            });
        let _ = !0;
        for (let _ = 0; _ < _.length; _++) {
          let _ = await _({
            ..._[_],
            skip_email: _ != _.length - 1,
          });
          _ &&= _ == 1;
        }
        return (
          _.setQueryData(_(_.gidClanEvent, _.userAccountID), null),
          await _.invalidateQueries({
            queryKey: _(_.gidClanEvent, _.userAccountID),
          }),
          _
        );
      },
    });
  return _;
}
var _ = /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
  _ = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
function _(_) {
  let _ = [];
  for (let _ of _.matchAll(_))
    _.push({
      strTag: _[1].toLowerCase(),
      nID: Number(_.exec(_[2])?.[1] ?? 0),
    });
  return _;
}
function _(_, _) {
  return (
    _ === void 0 ||
    _(_).find((_) => _.strTag == `meetsteamsessiongroup`)?.nID == _
  );
}
function _(_, _, _) {
  if (_ === void 0) return !0;
  let _ = _(_),
    _ = _[_.length - 1];
  return _?.strTag == _ && _.nID == _;
}
var _ = _.createContext(null);
function _() {
  return _.useContext(_);
}
var _ = `W-F7GLCqlcg-`,
  _ = `bilOH9M934k-`,
  _ = `agQ2BkMSeCM-`,
  _ = `_9pkUjSUWRSQ-`,
  _ = `BCyPVJOGhgM-`,
  _ = `JpmP7DWHpp0-`,
  _ = `q8jAq4KzxAM-`,
  _ = `deh5s-2tc5M-`,
  _ = `mQfwtw56WrA-`,
  _ = `S1RYAnxBfII-`,
  _ = `B3xO2i-k6cM-`,
  _ = `nZIJPOo7vBM-`,
  _ = `nbc1xcxJWEU-`,
  _ = `lC5ou-9b3nc-`,
  _ = `OUTrt07mRK4-`,
  _ = `kZyobSpKcm8-`,
  _ = `Q2G049jKL5A-`,
  _ = `FvT0LzOkuOg-`,
  _ = `R5xCQ-5jSoc-`,
  _ = `RRmxXSqY2J4-`,
  _ = `OEZsEKTEoHM-`,
  _ = `pZUqA-PH2Go-`,
  _ = `_5FwT-TqGtrc-`,
  _ = `wO3Xgsj1Sm0-`,
  _ = `gBWKuzZ3gZU-`,
  _ = `AmH6OYf5Hbw-`,
  _ = [];
function _(_) {
  let {
      eventModel: _,
      fnConfirm: _,
      fnHideModal: _,
      nMaxPerTeam: _,
      bAddingOrChangingSessions: _,
    } = _,
    _ = _(_.LANGUAGE),
    [_, _] = _.useState({}),
    [_, _] = _.useState(!1),
    _ = _.useCallback(
      (_) => {
        _({
          ..._,
          ..._,
        });
      },
      [_],
    ),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``, _.accountid),
    { data: _ } = _(_.accountid),
    _ = _?.realname ?? ``,
    _ = _?.email ?? ``,
    _ = _?.partners ?? _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _ ??
          _.push({
            data: void 0,
            label: _(`#MeetSteam_ChoosePartner`),
          }),
        _.push(
          ..._.map((_, _) => ({
            data: _.partnerid,
            label: _.partner_name,
          })),
        ),
        _.push({
          data: 0,
          label: _(`#MeetSteam_ChoosePartnerOther`),
        }),
        _
      );
    }, [_, _]);
  _.useEffect(() => {
    if (!_.isSuccess) return;
    let _ = _.find((_) => _.partnerid == _.data.partner_id),
      _ = _.data.partner_id === 0 ? 0 : _?.partnerid;
    _(_), _(_), _(_.data);
  }, [_.isSuccess, _.data, _]);
  let _ = _?.length > 0,
    _ = !_ || _ != null,
    _ = _ && _ === 0;
  _.useEffect(() => {
    if (_ == _ || (_(_), !_ || !_)) return;
    let _,
      _ = _.find((_) => _.partnerid == _);
    (_ =
      _ || !_
        ? {
            name: _?.length > 0 ? _ : void 0,
            email_override: _?.length > 0 ? _ : void 0,
            partner_id: 0,
          }
        : {
            name:
              _.partneruserrealname?.length > 0
                ? _.partneruserrealname
                : void 0,
            company: _.partner_name?.length > 0 ? _.partner_name : void 0,
            email_override:
              _.partneruseremail?.length > 0 ? _.partneruseremail : void 0,
            partner_id: _.partnerid,
          }),
      Object.values(_).some((_) => _ != null) && _(_(_));
  }, [_, _, _, _, _, _, _, _, _]);
  let _ = _.isLoading || _,
    _ = _
      ? _(`#MeetSteam_Register_title`, _.GetNameWithFallback(_) ?? ``)
      : _(`#MeetSteam_Unregister_title`),
    _ =
      !_ ||
      (_ &&
        !!_.name &&
        (!_.guest_names || _.guest_names.every((_) => _.length > 0)) &&
        !!_.email_override &&
        !!_.company);
  return (0, _.jsxs)(_, {
    active: !0,
    children: [
      _ &&
        (0, _.jsx)(_, {
          "aria-label": _(_ ? `#Saving` : `#Loading`),
          bOKDisabled: !0,
          bHideCloseIcon: !0,
          onCancel: () => !1,
          children: (0, _.jsx)(_, {
            size: `medium`,
            position: `center`,
            string: _(_ ? `#Saving` : `#Loading`),
          }),
        }),
      !_ &&
        (0, _.jsx)(_, {
          strTitle: _,
          onCancel: _,
          bOKDisabled: !_,
          onOK: async () => {
            _(!0), await _(_), _(!1), _.refetch(), _();
          },
          children:
            _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`div`, {
                  children: _(`#MeetSteam_Reg_Intro`),
                }),
                (0, _.jsx)(`br`, {}),
                _ &&
                  (0, _.jsx)(_, {
                    label: _(`#MeetSteam_Reg_Preset`),
                    tooltip: _(`#MeetSteam_Reg_Preset_ttip`),
                    rgOptions: _,
                    selectedOption: _,
                    onChange: (_) => _(_.data),
                  }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#MeetSteam_Reg_Name`),
                        value: _.name || ``,
                        onChange: (_) =>
                          _({
                            name: _.currentTarget.value,
                          }),
                      }),
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#MeetSteam_Reg_Email`),
                        value: _.email_override || ``,
                        mustBeEmail: !0,
                        onChange: (_) =>
                          _({
                            email_override: _.currentTarget.value,
                          }),
                      }),
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#MeetSteam_Reg_Company`),
                        value: _.company || ``,
                        onChange: (_) =>
                          _({
                            company: _.currentTarget.value,
                          }),
                      }),
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#MeetSteam_Reg_Game`),
                        value: _.game || ``,
                        onChange: (_) =>
                          _({
                            game: _.currentTarget.value,
                          }),
                      }),
                      _ > 0 &&
                        (0, _.jsx)(_, {
                          label: _(`#MeetSteam_Reg_GuestCount`),
                          tooltip: _(`#MeetSteam_Reg_GuestCount_ttip`),
                          rgOptions: Array.from({
                            length: _ + 1,
                          }).map((_, _) => ({
                            data: _,
                            label: _,
                          })),
                          selectedOption: (_.guests_registered ?? 1) - 1,
                          onChange: (_) => {
                            let _ = _.guest_names ?? [];
                            _({
                              guests_registered: _.data + 1,
                              guest_names:
                                _.length > _.data
                                  ? _.slice(0, _.data)
                                  : _(_, _.data, ``),
                            });
                          },
                        }),
                      (_.guests_registered ?? 0) > 1 &&
                        (0, _.jsxs)(`div`, {
                          children: [
                            (0, _.jsx)(`div`, {
                              children: _(`#MeetSteam_Reg_Others`),
                            }),
                            (0, _.jsx)(`br`, {}),
                            (_.guest_names ?? []).map((_, _) =>
                              (0, _.jsx)(
                                _,
                                {
                                  type: `text`,
                                  label: _(`#MeetSteam_Reg_Others_name`),
                                  value: _,
                                  onChange: (_) => {
                                    let _ = [...(_.guest_names ?? [])];
                                    (_[_] = _.currentTarget.value),
                                      _({
                                        guest_names: _,
                                      });
                                  },
                                },
                                `guesname_` + _,
                              ),
                            ),
                          ],
                        }),
                      (0, _.jsx)(_, {
                        eventModel: _,
                        oReg: _,
                        fnUpdateRegistration: _,
                      }),
                    ],
                  }),
              ],
            }),
        }),
    ],
  });
}
function _(_) {
  return Object.fromEntries(Object.entries(_).filter(([_, _]) => _ !== void 0));
}
function _(_) {
  let { eventModel: _, oReg: _, fnUpdateRegistration: _ } = _,
    _ = _(_.jsondata.meet_steam_groups ?? [], 2);
  return !_ || _.length == 0
    ? null
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`h3`, {
            children: _(`#MeetSteam_Reg_Question_title`),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#MeetSteam_Reg_Question_desc`),
          }),
          _.map((_) => {
            let _ = _.jsondata.meet_steam_groups?.find((_) => _.group_id == _);
            return _
              ? (0, _.jsx)(
                  _,
                  {
                    groupInfo: _,
                    oReg: _,
                    fnUpdateText: (_) => {
                      let _ = _.pre_event_partner_questions
                          ? [..._.pre_event_partner_questions]
                          : [],
                        _ = _.findIndex((_) => _.group_id == _);
                      _ < 0
                        ? _.push({
                            group_id: _,
                            question: _,
                          })
                        : (_[_] = {
                            group_id: _,
                            question: _,
                          }),
                        _({
                          pre_event_partner_questions: _,
                        });
                    },
                  },
                  `groupquestion` + _,
                )
              : null;
          }),
        ],
      });
}
function _(_) {
  let { fnUpdateText: _, groupInfo: _, oReg: _ } = _,
    _ = _(_.LANGUAGE),
    [_, _] = _(() => [
      _.GetWithFallback(_.localized_session_title, _) ?? ``,
      _.pre_event_partner_questions?.find((_) => _.group_id == _.group_id)
        ?.question || ``,
    ]);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: `DialogInput_Wrapper`,
        children: (0, _.jsx)(`textarea`, {
          value: _,
          className: _(`DialogTextInputBase`, `_DialogInputContainer`),
          cols: 80,
          rows: 3,
          placeholder: _(`#MeetSteam_Reg_Question_placeholder`),
          onChange: (_) => _(_.currentTarget.value),
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = _.context.event,
    _ = _.context.showErrorInfo,
    _ = _(_.args, `group_id`),
    _ = Number.parseInt(_),
    _ = _(() => _(_, _));
  if (!_ || !_)
    return _
      ? (0, _.jsxs)(`div`, {
          children: [`Failed to find session group id `, _],
        })
      : null;
  if (_.clanSteamID.GetAccountID() != _())
    return _
      ? (0, _.jsx)(`div`, {
          children: `Only support on special group`,
        })
      : null;
  let _ = _(_.context.bbcode, _),
    _ = _(_.context.bbcode, `meetsteamsessiongroup`, _);
  return (0, _.jsxs)(_, {
    clanAccountID: _.clanSteamID.GetAccountID(),
    gidClanEvent: _.GID ?? ``,
    userAccountID: _.accountid,
    children: [
      _ &&
        (0, _.jsx)(_, {
          eventModel: _,
        }),
      (0, _.jsx)(_, {
        groupData: _,
        eventModel: _,
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        bIsLast: _,
      }),
    ],
  });
}
function _(_) {
  let { eventModel: _ } = _;
  return _()
    ? (0, _.jsx)(_, {
        eventModel: _,
        accountID: _.accountid,
      })
    : null;
}
function _(_) {
  let { eventModel: _, accountID: _ } = _,
    _ = _(_.GID ?? ``, _);
  return (0, _.jsx)(`div`, {
    children:
      !!_ &&
      (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            children: _(`#MeetSteam_QR_CheckIn`),
          }),
          (0, _.jsx)(`img`, {
            src: _,
            alt: ``,
          }),
        ],
      }),
  });
}
function _(_) {
  let { groupData: _, eventModel: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``),
    _ = (0, _.useMemo)(
      () =>
        _?.sessions &&
        [..._.sessions].sort(
          (_, _) => (_.rtime_start ?? 0) - (_.rtime_start ?? 0),
        ),
      [_?.sessions],
    ),
    { elLogInDialog: _, fnRequireLogIn: _ } = _(),
    _ = _(),
    _ = _(() =>
      _?.reduce((_, _) => _.set(_._ ?? 0, _(_, _.group_id, _._)), new Map()),
    ),
    _ = _(),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``, _.accountid),
    _ = _.isSuccess && !!_.data.allow_registration_if_full,
    _ = _.data;
  if (_.isError)
    return (0, _.jsx)(`div`, {
      children: _(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (!_ || (_ && _.accountid))
    return (0, _.jsx)(_, {
      size: `medium`,
      position: `center`,
      string: _(`#Loading`),
    });
  let _ = (_) => _(_.group_id, _),
    _ = _.group_visibility_tokens ?? [],
    _ = _ !== null && _.includes(_);
  return _.length > 0 && !_ && !_
    ? null
    : (0, _.jsxs)(_, {
        groupData: _,
        children: [
          _?.map((_, _) => {
            let _ = _.find(
                (_) => _.group_id === _.group_id && _.session_id === _._,
              ),
              _ = _?.get(_._ ?? 0),
              _ = _ + 1 < _.length;
            return (0, _.jsxs)(
              _.Fragment,
              {
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      sessionData: _,
                      onClick: () => _(() => _(_._)),
                      nGuestReservations: _?.guest_count || 0,
                      eRegistrationStatus: _,
                      bAllowedToRegisterIfFull: _,
                    }),
                  }),
                  _ && (0, _.jsx)(_, {}),
                ],
              },
              `timecol_` + _.group_id + `_` + _._,
            );
          }),
          _,
        ],
      });
}
function _(_) {
  let { groupData: _, children: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.GetWithFallback(_?.localized_session_title, _),
    _ = _.GetWithFallback(_?.localized_session_description, _),
    _ = _.GetWithFallback(_?.localized_intended_audience, _),
    _ = _.GetWithFallback(_?.localized_sesssion_faq, _),
    _ = _(),
    [_, _] = (0, _.useState)(!1);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [_]: !1,
          [_]: _ && (_.group_visibility_tokens?.length ?? 0) > 0,
        }),
        children: [
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `_9pkUjSUWRSQ-`,
              children: _,
            }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `_44vexuSzOpI-`,
              children: _,
            }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `Z3-m6-rkasQ-`,
              children: _(`#MeetSteam_Session_Audience`, _ ?? ``),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          !!_ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)(`div`, {
                  className: `kWmpNwJ92-k-`,
                  children: [
                    (0, _.jsx)(_, {
                      bExpanded: _,
                      setExpanded: _,
                    }),
                    (0, _.jsx)(`div`, {
                      children: _(`#MeetSteam_FAQ`),
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `jvyIIEyjFZw-`,
                    children: (0, _.jsx)(_, {
                      text: _ ?? ``,
                    }),
                  }),
              ],
            }),
        ],
      })
    : null;
}
function _(_, _, _, _) {
  let _ = _ || (_ === 0 && _ > 0) || _ === 1 || _ === 2 || _ === 3,
    _ = null,
    _ = null;
  return (
    _ == 1
      ? ((_ = _(`#MeetSteam_Registered`)), (_ = _))
      : _ == 2
        ? ((_ = _(`#MeetSteam_Registering`)), (_ = _))
        : _ == 3
          ? ((_ = _(`#MeetSteam_Unegistering`)), (_ = _))
          : _ && ((_ = _(`#MeetSteam_Already`)), (_ = _)),
    {
      bEnabled: _,
      strStatusClass: _,
      strStatusToken: _,
    }
  );
}
function _(_) {
  let {
      sessionData: _,
      onClick: _,
      nGuestReservations: _,
      eRegistrationStatus: _ = 0,
      bAllowedToRegisterIfFull: _,
    } = _,
    _ = _(() => _.max_capacity ?? 0),
    _ = Math.max(0, _ - (_ || 0)),
    { strStatusClass: _, strStatusToken: _, bEnabled: _ } = _(_, _, !!_),
    { sDisplayTimeZone: _, rtime_start: _, rtime_end: _ } = _(_),
    _ = _(_ ?? 0, _),
    _ = _(_ ?? 0, _ ?? 0, _);
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`span`, {
            children: _,
          }),
        }),
        (0, _.jsxs)(`button`, {
          className: _(_, _),
          disabled: !_,
          onClick: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          nAvailableSpace: _,
          bAllowedToRegisterIfFull: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { nAvailableSpace: _, bAllowedToRegisterIfFull: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children:
      _ ||
      (0, _.jsxs)(_.Fragment, {
        children: [
          ` `,
          _ < 1
            ? (0, _.jsx)(`div`, {
                className: `oojf8t--dHM-`,
                children: _(`#MeetSteam_SoldOut`),
              })
            : (0, _.jsx)(`div`, {
                className: `LG2AAuUnr-g-`,
                children: _(`#MeetSteam_Spot`, _.toLocaleString(_())),
              }),
          ` `,
        ],
      }),
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: `◆`,
  });
}
function _(_) {
  let { eventModel: _, bIsLast: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``),
    [_, _, _] = _(),
    { elLogInDialog: _, fnRequireLogIn: _ } = _(),
    _ = _(),
    _ = async (_) => {
      _(!0), (await _(_)) || _(), _.refetch(), _(!1);
    },
    _ = _(),
    _ = _ || _,
    _ = _(),
    _ = _(),
    _ = _(_),
    _ = _(_),
    _ = _(() =>
      _(_).reduce((_, _) => {
        let _ = _(_, _),
          _ = _(_, _?.group_id),
          _ = _?.sessions?.find((_) => _._ == _)?.max_per_team ?? 0;
        return Math.max(_, _);
      }, 1),
    );
  return (
    _(_, _(`#EventEditor_UnsavedChanges`)),
    (0, _.jsxs)(`div`, {
      className: _(_, _ && _ && `_1Uk08Y71bw4-`),
      children: [
        (0, _.jsx)(`p`, {
          children: _(
            _
              ? `#MeetSteam_UpdateRegistration_Desc`
              : `#MeetSteam_CompleteRegistration_Desc`,
          ),
        }),
        _ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              !_ &&
                (0, _.jsx)(_, {
                  disabled: !_,
                  onClick: () => _(() => _(!0)),
                  children: _(
                    _
                      ? `#MeetSteam_UpdateRegistration`
                      : `#MeetSteam_CompleteRegistration`,
                  ),
                }),
              _ &&
                (0, _.jsx)(_, {
                  size: `small`,
                  position: `center`,
                  string: _(`#Saving`),
                }),
              _ &&
                (0, _.jsx)(_, {
                  eventModel: _,
                  fnConfirm: _,
                  fnHideModal: () => _(!1),
                  nMaxPerTeam: _,
                  bAddingOrChangingSessions: _,
                }),
              _ &&
                (0, _.jsx)(_, {
                  active: !0,
                  children: (0, _.jsx)(_, {
                    strTitle: _(`#Error_Generic`),
                    strDescription: _(`#MeetSteam_RegistrationFailed`),
                    closeModal: _,
                  }),
                }),
              _,
            ],
          }),
      ],
    })
  );
}
function _(_, _) {
  return (_?.jsondata?.meet_steam_groups || [])?.find((_) => _.group_id == _);
}
function _(_, _) {
  return (_?.jsondata?.meet_steam_schedules || [])?.find(
    (_) => _.schedule_id == _,
  );
}
function _() {
  let { elDialogElement: _, fnShowLogonDialog: _ } = _(
    _(`#EventDisplay_Share_NotLoggedIn_Description`),
  );
  return {
    elLogInDialog: _,
    fnRequireLogIn: (_) => {
      _.logged_in ? _() : _();
    },
  };
}
function _(_) {
  let _ = _.context.event,
    _ = _.context.showErrorInfo,
    _ = _(_.args, `schedule_id`),
    _ = Number.parseInt(_),
    _ = _(() => _(_, _));
  if (!_ || !_)
    return _
      ? (0, _.jsxs)(`div`, {
          children: [`Failed to find session schedule id `, _],
        })
      : null;
  if (_.clanSteamID.GetAccountID() != _())
    return _
      ? (0, _.jsx)(`div`, {
          children: `Only support on special group`,
        })
      : null;
  let _ = _(_.context.bbcode, `meetsteamscheduleview`, _);
  return (0, _.jsxs)(_, {
    clanAccountID: _.clanSteamID.GetAccountID(),
    gidClanEvent: _.GID ?? ``,
    userAccountID: _.accountid,
    children: [
      (0, _.jsx)(_, {
        scheduleData: _,
        eventModel: _,
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        bIsLast: _,
      }),
    ],
  });
}
function _(_) {
  let { eventModel: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``, _.accountid),
    _ = _.data;
  return _.isError
    ? (0, _.jsx)(`div`, {
        children: _(`#Error_ErrorCommunicatingWithNetwork`),
      })
    : !_ || (_ && _.accountid)
      ? (0, _.jsx)(_, {
          size: `medium`,
          position: `center`,
          string: _(`#Loading`),
        })
      : (0, _.jsx)(_, {
          ..._,
          fnOnClick: _,
          rgAvailability: _,
          bAllowedToRegisterIfFull: _.data?.allow_registration_if_full,
        });
}
function _(_) {
  let {
      eventModel: _,
      scheduleData: _,
      bAllowedToRegisterIfFull: _,
      fnOnClick: _,
      rgAvailability: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    [_, _, _] = _(() => [
      _.jsondata.meet_steam_groups,
      _.in_person_time_zone ?? `America/Los_Angeles`,
      _.location_type,
    ]),
    [_, _, _] = (0, _.useMemo)(() => {
      if (!_) return [new Map(), new Map(), []];
      let _ = new Map(),
        _ = new Map();
      for (let _ of _) {
        let _ = _.group_visibility_tokens ?? [],
          _ = _ !== null && _.includes(_);
        if (!(_.length > 0 && !_ && !_))
          for (let _ of _.sessions) {
            let _ = (
                _ == `in_person`
                  ? _.default.unix(_.rtime_start ?? 0)._(_)
                  : _.default.unix(_.rtime_start ?? 0)._(_)
              ).format(`YYYY-MM-DD`),
              _ = _.get(_);
            _ || ((_ = []), _.set(_, _)),
              _.push({
                group: _,
                session: _,
              });
          }
      }
      for (let _ of _.session_breaks || []) {
        let _ = (
            _ == `in_person`
              ? _.default.unix(_.rtime_start ?? 0)._(_)
              : _.default.unix(_.rtime_start ?? 0)._(_)
          ).format(`YYYY-MM-DD`),
          _ = _.get(_);
        _ || ((_ = []), _.set(_, _)), _.push(_);
      }
      for (let _ of _.values())
        _.sort(
          (_, _) => (_.session.rtime_start ?? 0) - (_.session.rtime_start ?? 0),
        );
      return [_, _, Array.from(_.keys()).sort()];
    }, [_, _, _, _, _, _, _.session_breaks]);
  return _
    ? (0, _.jsx)(_.Fragment, {
        children: _.map((_) => {
          let _ = _.get(_);
          return (0, _.jsx)(
            `div`,
            {
              className: _,
              children: (0, _.jsx)(_, {
                scheduleData: _,
                bAllowedToRegisterIfFull: !!_,
                fnOnClick: _,
                rgDayGroupSessions: _ ?? [],
                rgBreakSessions: _.get(_) || [],
                rgAvailability: _ ?? [],
              }),
            },
            `day_` + _,
          );
        }),
      })
    : (0, _.jsx)(`div`, {
        children: `No Meet Steam Events; please create some first.`,
      });
}
function _(_) {
  let {
      scheduleData: _,
      rgDayGroupSessions: _,
      rgBreakSessions: _,
      bAllowedToRegisterIfFull: _,
      fnOnClick: _,
      rgAvailability: _,
    } = _,
    _ = (0, _.useMemo)(() => {
      let _ = [];
      for (let _ of _)
        _.length == 0 ||
        _[_.length - 1][0].session.rtime_start != _.session.rtime_start
          ? _.push([_])
          : _[_.length - 1].push(_);
      return _;
    }, [_]),
    { sDisplayTimeZone: _, rtime_start: _ } = _(_[0].session),
    _ = _(_ ?? 0, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`h2`, {
        className: _,
        children: _,
      }),
      _.filter(
        (_) => (_.rtime_end ?? 0) <= (_[0][0].session.rtime_start ?? 0),
      ).map((_) =>
        (0, _.jsx)(
          _,
          {
            scheduleData: _,
            breakSession: _,
          },
          `breaks_${_.schedule_id}_${_.break_id}`,
        ),
      ),
      _.map((_, _) => {
        let _ = [];
        if (_ + 1 < _.length) {
          let _ = _[0].session.rtime_start ?? 0,
            _ = _[_ + 1][0].session.rtime_end ?? 0;
          _ = _.filter(
            (_) => _ < (_.rtime_start ?? 0) && (_.rtime_end ?? 0) < _,
          );
        }
        return (0, _.jsxs)(
          _.Fragment,
          {
            children: [
              (0, _.jsx)(_, {
                bAllowedToRegisterIfFull: _,
                fnOnClick: _,
                scheduleData: _,
                rgSlotSessions: _,
                rgAvailability: _,
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    scheduleData: _,
                    breakSession: _,
                  },
                  `breaks_${_.schedule_id}_${_.break_id}`,
                ),
              ),
            ],
          },
          `start_` + _[0].session.rtime_start,
        );
      }),
      _.filter(
        (_) =>
          (_.rtime_start ?? 0) >= (_[_.length - 1][0].session.rtime_end ?? 0),
      ).map((_) =>
        (0, _.jsx)(
          _,
          {
            scheduleData: _,
            breakSession: _,
          },
          `breaks_${_.schedule_id}_${_.break_id}`,
        ),
      ),
    ],
  });
}
function _(_) {
  let { scheduleData: _, breakSession: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _(() => _.GetWithFallback(_.localized_break_description, _) ?? ``),
    _ = _(() => ({
      rtime_start: _.rtime_start,
      rtime_end: _.rtime_end,
      location_type: _.location_type,
      in_person_time_zone: _.in_person_time_zone,
    }));
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        session: _,
      }),
      (0, _.jsx)(`div`, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
    scheduleData: _,
    rgSlotSessions: _,
    bAllowedToRegisterIfFull: _,
    fnOnClick: _,
    rgAvailability: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        session: _[0].session,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              bAllowedToRegisterIfFull: _,
              fnOnClick: _,
              session: _,
              rgAvailability: _,
            },
            `entry_${_.group.group_id}_${_.session._}`,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { session: _ } = _,
    { sDisplayTimeZone: _, rtime_start: _, rtime_end: _ } = _(_),
    _ = _(_ ?? 0, _),
    _ = _(_ ?? 0, _ ?? 0, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
      session: _,
      bAllowedToRegisterIfFull: _,
      fnOnClick: _,
      rgAvailability: _,
    } = _,
    _ = _(_.LANGUAGE),
    [_, _, _, _] = _(() => [
      _.GetWithFallback(_.group.localized_session_title, _) ?? ``,
      _.GetWithFallback(_.group.localized_intended_audience, _) ?? ``,
      _.GetWithFallback(_.group.localized_sesssion_faq, _) ?? ``,
      _.GetWithFallback(_.group.localized_session_description, _) ?? ``,
    ]),
    [_, _, _] = _(!1),
    _ = _(),
    [_, _, _] = _(() => [
      _(_, _.group.group_id, _.session._),
      _(_, _.group.group_id, _.session._),
      _(_, _.group.group_id),
    ]),
    _ = _?.find(
      (_) => _.group_id === _.group.group_id && _.session_id === _.session._,
    )?.guest_count,
    _ = Math.max(0, (_.session.max_capacity ?? 0) - (_ || 0)),
    { strStatusClass: _, strStatusToken: _, bEnabled: _ } = _(_, _, _, _),
    _ = _ && _ ? _.group.sessions.find((_) => _._ == _)?.rtime_start : void 0;
  return (0, _.jsx)(_, {
    toolTipContent: _ ? _(`#MeetSteam_AlreadyReg`, _(_), _(_)) : void 0,
    children: (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`span`, {
            children: _,
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `Z3-m6-rkasQ-`,
                children: _(`#MeetSteam_Session_Audience`, _),
              }),
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _,
              onClick: _,
              children: _(`#MeetSteam_Session_Details`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                onClick: () => {
                  _ && _(_.group.group_id, _.session._);
                },
                disabled: !_,
                children: _(_ == 1 ? `#Button_Unselect` : `#Button_Select`),
              }),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          nAvailableSpace: _,
          bAllowedToRegisterIfFull: _,
        }),
        (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsxs)(_, {
            strTitle: _,
            bAlertDialog: !0,
            bAllowFullSize: !0,
            closeModal: _,
            children: [
              (0, _.jsx)(`div`, {
                children: _,
              }),
              (0, _.jsx)(`div`, {
                children: _,
              }),
              !!_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      children: _(`#MeetSteam_FAQ`),
                    }),
                    (0, _.jsx)(_, {
                      text: _,
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let _ = Number.parseInt(_(_.args, `id`)) || 0,
    _ = (_(_.args, `visible`) || `false`).toLowerCase() === `true`,
    _ = _.context.showErrorInfo,
    _ = _(_),
    { data: _, isPending: _ } = _(_);
  if (!_)
    return _
      ? (0, _.jsx)(`div`, {
          children: `Error: PackageID Not Set`,
        })
      : null;
  if (_) return null;
  let _ =
    _?.success == 1
      ? !!(_.visible && _.best_purchase_option)
      : !_?.unvailable_for_country_restriction;
  return (!_ && !_) || (_ && _)
    ? (0, _.jsx)(_.Fragment, {
        children: _.children,
      })
    : null;
}
function _() {
  return _(
    {
      exportFn: void 0,
      file: void 0,
      dataURL: void 0,
      uploadFileName: ``,
      displayFileName: void 0,
      sha1: ``,
      hmac: ``,
      timestamp: 0,
      imageWidth: 0,
      imageHeight: 0,
      fileInfo: void 0,
      uploadInfo: void 0,
      eUploadState: 0,
      uploadProgress: 0,
      strErrorDescription: void 0,
    },
    {
      exportFn: !1,
      file: _.ref,
      uploadFileName: !1,
      displayFileName: !1,
      sha1: !1,
      hmac: !1,
      timestamp: !1,
      fileInfo: !1,
      uploadInfo: !1,
    },
  );
}
var _ = class {
  m_Callbacks;
  m_fileUploadProps = _();
  m_onComplete;
  constructor(_) {
    _(this, {
      SetUploadFileError: _,
      StartFileExportToUpload: _,
      SetImageFileToUpload: _,
      SetOtherFileToUpload: _,
      SetFileToUpload: _,
      RetryFileUpload: _,
      BeginFileUpload: _,
      DoFileUpload: _,
      CommitFileUpload: _,
      ClearFileUploadError: _,
      Reset: _,
    }),
      (this.m_Callbacks = _);
  }
  get file_upload_props() {
    return this.m_fileUploadProps;
  }
  get file_upload_data_url() {
    return this.m_fileUploadProps.dataURL;
  }
  get file() {
    return this.m_fileUploadProps.file;
  }
  LogFileUploadMessage(_) {
    this.m_Callbacks.LogFileUploadMessage &&
      this.m_Callbacks.LogFileUploadMessage(_);
  }
  SetUploadFileError(_, _) {
    (this.m_fileUploadProps.eUploadState = _),
      (this.m_fileUploadProps.strErrorDescription = _),
      (this.m_fileUploadProps.displayFileName = void 0);
  }
  async StartFileExportToUpload(_, _ = {}) {
    let { displayFilename: _, info: _, onComplete: _ } = _;
    (this.m_fileUploadProps.eUploadState = 7),
      (this.m_fileUploadProps.uploadProgress = 0),
      (this.m_onComplete = _),
      (this.m_fileUploadProps.fileInfo = _),
      this.SetFileToUpload(_),
      (this.m_fileUploadProps.displayFileName = _);
  }
  async SetImageFileToUpload(_, _ = {}) {
    let { processor: _ = _, info: _ } = _;
    if (!_) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = _;
    let _ = this.m_Callbacks.GetFileNameOverride?.() ?? _.name;
    if (_.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        _(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          _,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let _ = [
        `jpg`,
        `jpeg`,
        `png`,
        `gif`,
        `webm`,
        `mpg`,
        `mp4`,
        `mpeg`,
        `ogv`,
        `webp`,
        `avif`,
      ],
      _ = _.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (_.indexOf(_) == -1) {
      let _ = _ || _;
      this.SetUploadFileError(
        5,
        _(`#Chat_Settings_Error_ChatUploadFileTypeNotSupported`, _),
      );
      return;
    }
    let _ = await _(_);
    this.SetFileToUpload(_.file),
      (this.m_fileUploadProps.imageHeight = _.height),
      (this.m_fileUploadProps.imageWidth = _.width);
  }
  async SetOtherFileToUpload(_, _ = {}) {
    if (!_) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = _.info;
    let _ = this.m_Callbacks.GetFileNameOverride?.() ?? _.name;
    if (_.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        _(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          _,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let _ = [`zip`],
      _ = _.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (_.indexOf(_) == -1) {
      let _ = _ || _;
      this.SetUploadFileError(5, _(`#Chat_Settings_Error_FileTypeNotZip`, _));
    } else this.SetFileToUpload(_);
  }
  SetFileToUpload(_) {
    if (
      ((this.m_fileUploadProps.file = void 0),
      (this.m_fileUploadProps.dataURL = void 0),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.sha1 = ``),
      (this.m_fileUploadProps.imageWidth = 0),
      (this.m_fileUploadProps.imageHeight = 0),
      (this.m_fileUploadProps.displayFileName = void 0),
      !_)
    ) {
      this.m_fileUploadProps.eUploadState = 0;
      return;
    }
    let _ = ``;
    if (typeof _ == `function`)
      (this.m_fileUploadProps.file = void 0),
        (this.m_fileUploadProps.exportFn = _);
    else {
      (this.m_fileUploadProps.file = _),
        (this.m_fileUploadProps.exportFn = void 0);
      try {
        _ = URL.createObjectURL(_);
      } catch (_) {
        console.error(`Failed to created object URL from file: ${_}`);
      }
      (this.m_fileUploadProps.displayFileName =
        this.m_fileUploadProps.file.name),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + this.m_fileUploadProps.file.name);
    }
    this.m_fileUploadProps.eUploadState = 1;
    let _ = ``;
    for (; _.length < 40; ) _ += Math.floor(Math.random() * 16).toString(16);
    (this.m_fileUploadProps.dataURL = _),
      (this.m_fileUploadProps.sha1 = _),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.timestamp = 0);
  }
  async RetryFileUpload() {
    return this.BeginFileUpload();
  }
  async BeginFileUpload(_) {
    if (
      ((this.m_fileUploadProps.uploadProgress = 0),
      this.m_fileUploadProps.exportFn)
    ) {
      this.m_fileUploadProps.eUploadState = 7;
      let { eResult: _, file: _ } = await this.m_fileUploadProps.exportFn(
        (_) => {
          _(() => {
            this.m_fileUploadProps.uploadProgress = _ * 0.5;
          });
        },
      );
      if (_ != 1 || !_)
        return (
          this.SetUploadFileError(3, _(`#Chat_Settings_Error_ExportFailed`)),
          new Response()
        );
      (this.m_fileUploadProps.file = _),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + _.name);
    }
    let _ = this.m_fileUploadProps.file;
    if (!_)
      throw (
        (_(!1, `Must SetImageFileToUpload before calling BeginFileUpload`),
        Error(`Invalid State`))
      );
    (this.m_fileUploadProps.eUploadState = 2),
      (this.m_fileUploadProps.uploadInfo = _);
    let _ = new FormData();
    _.append(`sessionid`, _()),
      _.append(`l`, _.LANGUAGE),
      _.append(`file_size`, _.size.toString()),
      _.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      _.append(`file_sha`, this.m_fileUploadProps.sha1),
      _.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      _.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      _.append(`file_type`, _.type),
      this.m_Callbacks.PopulateBeginFileUploadFormData &&
        this.m_Callbacks.PopulateBeginFileUploadFormData(
          _,
          this.file_upload_props.uploadInfo,
          this.file_upload_props.fileInfo,
        );
    try {
      let _ = await fetch(
          this.m_Callbacks.GetBeginFileUploadURL() + `?l=${_.LANGUAGE}`,
          {
            method: `POST`,
            body: _,
            credentials: `include`,
          },
        ),
        _;
      try {
        _ = await _.json();
      } catch {}
      if (!_._) {
        let _ = ``;
        throw (
          (_(() => {
            (this.m_fileUploadProps.eUploadState = 3),
              this.LogFileUploadMessage(_),
              (_ = _?.message
                ? _?.message
                : _(`#Chat_Settings_Error_ServerError`)),
              (this.m_fileUploadProps.strErrorDescription = _(
                `#Chat_Upload_ErrorStart`,
                _,
              ));
          }),
          _)
        );
      }
      if (!_ || !_.result) throw Error();
      return (
        (this.m_fileUploadProps.timestamp = _.timestamp),
        (this.m_fileUploadProps.hmac = _.hmac),
        this.DoFileUpload(_.result, _)
      );
    } catch (_) {
      let _ = _ || _(`#ConnectionTrouble_FailedToConnect`);
      throw (
        (_(() => {
          (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.strErrorDescription = _(
              `#Chat_Upload_ErrorStart`,
              _,
            ));
        }),
        _)
      );
    }
  }
  async DoFileUpload(_, _) {
    let _ = _.use_https ? `https://` : `http://`;
    _ += _.url_host + _.url_path;
    let _ = {};
    for (let _ of _.request_headers) {
      if (
        _.name.toLowerCase() == `content-length` ||
        _.name.toLowerCase() == `host`
      )
        continue;
      let _ = _.name;
      _.toLowerCase() === `content-type` && (_ = `Content-Type`),
        (_[_] = _.value);
    }
    let _ = {
      onUploadProgress: (_) => {
        let _ = !!this.m_fileUploadProps.exportFn,
          _ = _ ? 50 : 0,
          _ = _ ? 50 : 100,
          _ = _ + (_.loaded / _.total) * _;
        _ > this.m_fileUploadProps.uploadProgress &&
          _(() => {
            this.m_fileUploadProps.uploadProgress = _;
          });
      },
      headers: _,
      transformRequest: [(_) => _],
    };
    try {
      return (
        await _.default.put(_, _, _), this.CommitFileUpload(!0, _.ugcid, _)
      );
    } catch (_) {
      throw (
        (this.LogFileUploadMessage(_.response),
        _(() => {
          (this.m_fileUploadProps.strErrorDescription = _(
            `#Chat_Upload_ErrorCloud`,
          )),
            (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.uploadProgress = 0);
        }),
        this.CommitFileUpload(!1, _.ugcid, _),
        this.m_fileUploadProps.strErrorDescription)
      );
    }
  }
  async CommitFileUpload(_, _, _) {
    let _ = this.m_fileUploadProps.sha1,
      _ = new FormData();
    _.append(`sessionid`, _()),
      _.append(`l`, _.LANGUAGE),
      _.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      _.append(`file_sha`, _),
      _.append(`success`, _ ? `1` : `0`),
      _.append(`ugcid`, _),
      _.append(`file_type`, _.type),
      _.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      _.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      _.append(`timestamp`, this.m_fileUploadProps.timestamp.toString()),
      _.append(`hmac`, this.m_fileUploadProps.hmac),
      this.m_Callbacks.PopulateCommitFileUploadFormData(
        _,
        this.file_upload_props.uploadInfo,
        this.file_upload_props.fileInfo,
      );
    try {
      let _ = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
        method: `POST`,
        body: _,
        credentials: `include`,
      });
      return (
        _
          ? ((this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 6),
            this.m_onComplete && this.m_onComplete(1, _.size))
          : ((this.m_fileUploadProps.eUploadState = 3),
            this.m_onComplete && this.m_onComplete(2, _.size)),
        _
      );
    } catch (_) {
      if (!_) return;
      let _ = ``;
      throw (
        (_(() => {
          if (
            (this.LogFileUploadMessage(_),
            (this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 3),
            _.response)
          ) {
            let _ = _.response.data;
            _.response.status,
              _ && _.success,
              (_ = _.message
                ? _.message
                : _(`#Chat_Settings_Error_ServerError`));
          } else _ = _(`#ConnectionTrouble_FailedToConnect`);
          (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${_}`),
            this.m_onComplete && this.m_onComplete(2, _.size);
        }),
        _)
      );
    }
  }
  ClearFileUploadError() {
    (this.m_fileUploadProps.eUploadState == 3 ||
      this.m_fileUploadProps.eUploadState == 4 ||
      this.m_fileUploadProps.eUploadState == 5) &&
      this.Reset();
  }
  Reset() {
    this.SetFileToUpload(void 0);
  }
};
function _(_) {
  return new Promise((_) => {
    let _ = new FileReader();
    (_.onload = () => {
      let _ = _,
        _ = _.result,
        _ = _(_),
        _ = new Blob([_], {
          type: _.type,
        });
      if (_) {
        let _ = _;
        (_.lastModifiedDate = new Date(_.lastModified)),
          (_.name = _.name),
          (_ = _);
      }
      if (_.type.indexOf(`image`) == 0) {
        let _ = new Image();
        (_.src = URL.createObjectURL(_)),
          (_.onload = (_) => {
            _({
              file: _,
              width: _.width,
              height: _.height,
            });
          });
      } else
        _({
          file: _,
          width: 0,
          height: 0,
        });
    }),
      _.readAsArrayBuffer(_);
  });
}
function _(_) {
  let _ = new DataView(_),
    _ = 0,
    _ = 0,
    _ = [],
    _ = 0;
  if (_.getUint16(_) == 65496) {
    _ += 2;
    let _ = _.getUint16(_);
    for (_ += 2; _ < _.byteLength && _ < 131072; ) {
      if (_ == 65505)
        (_[_] = {
          recess: _,
          offset: _ - 2,
        }),
          (_ = _ + _.getUint16(_)),
          _++;
      else if (_ == 65498) break;
      (_ += _.getUint16(_)), (_ = _.getUint16(_)), (_ += 2);
    }
    let _ = _.byteLength - _;
    if (
      (_.forEach((_) => {
        _ += _.offset - _.recess;
      }),
      _ === _.byteLength)
    )
      return _;
    let _ = new Uint8Array(_);
    if (_.length > 0) {
      let _ = 0;
      _.forEach((_) => {
        let _ = _.offset - _.recess;
        _.set(new Uint8Array(_.slice(_.recess, _.offset)), _), (_ += _);
      }),
        _.set(new Uint8Array(_.slice(_)), _);
    }
    return _.buffer;
  }
  return _;
}
var _ = `PA1GbfX4Jak-`;
function _(_) {
  let { fileUploadManager: _ } = _,
    _ = (0, _.useRef)(null);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`input`, {
        type: `file`,
        accept: `.jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4`,
        style: {
          display: `none`,
        },
        name: `fileupload`,
        ref: _,
        onChange: (_) => {
          let _ = _.currentTarget.files;
          _?.length &&
            (_.SetImageFileToUpload(_[0]), (_.currentTarget.value = ``));
        },
      }),
      (0, _.jsx)(_, {
        type: `button`,
        title: _(`#Button_Upload`),
        onOKActionDescription: _(`#Button_Upload`),
        onClick: () => _.current?.click(),
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
var _ = `lcuTEjXO8Io-`,
  _ = `YEGC6ugnl7c-`,
  _ = `_2B1-NsNzm7s-`,
  _ = `EP9i3QuHHYI-`,
  _ = `PIibQBztc3I-`,
  _ = `_5bCd1bDYPEM-`,
  _ = `_80jOlfR7esU-`;
function _(_) {
  let { fileUploadManager: _ } = _,
    _ = _(() => _.file_upload_props.eUploadState);
  return _ == 1
    ? (0, _.jsx)(_, {
        fileUploadManager: _,
      })
    : _ == 3 || _ == 5 || _ == 4
      ? (0, _.jsx)(_, {
          fileUploadManager: _,
        })
      : _ == 0
        ? null
        : (0, _.jsx)(_, {
            fileUploadManager: _,
          });
}
function _(_) {
  let { fileUploadManager: _ } = _,
    _ = _.file;
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.type.indexOf(`image`) != -1 &&
            (0, _.jsx)(`img`, {
              className: `e8e5WRBahao-`,
              src: _.file_upload_data_url,
            }),
          _.type.indexOf(`video`) != -1 && (0, _.jsx)(_, {}),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [`'`, _.name, `'`],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            onClick: () => _.Reset(),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            className: _,
            onClick: async () => {
              await _.BeginFileUpload(), _.Reset();
            },
            children: _(`#Button_Upload`),
          }),
        ],
      })
    : null;
}
function _(_) {
  let { fileUploadManager: _ } = _,
    [_, _, _] = _(() => [
      _.file_upload_props.file,
      _.file_upload_props.displayFileName,
      _.file_upload_props.uploadProgress,
    ]),
    _ = _ ? _(`#Uploading_Item`, _ ?? ``) : ``,
    _ = {
      width: _ + `%`,
    };
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _(_, `DialogProgressBar_ProgressBarContainer`),
        children: (0, _.jsx)(`div`, {
          className: `DialogProgressBar_Value`,
          style: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { fileUploadManager: _ } = _,
    [_, _, _] = _(() => [
      _.file_upload_props.strErrorDescription,
      _.file_upload_props.displayFileName,
      _.file_upload_props.eUploadState,
    ]),
    _ = _ ? _(`#Uploading_Item`, _) : ``,
    _ = _ || _(`#Chat_Upload_ErrorCloud`);
  return (0, _.jsxs)(`div`, {
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
      (0, _.jsx)(`div`, {
        className: void 0,
        children: (0, _.jsxs)(_, {
          className: `DialogLayout_NoMinWidth`,
          children: [
            _ == 3 &&
              (0, _.jsx)(_, {
                onClick: async () => {
                  await _.RetryFileUpload(), _.Reset();
                },
                children: _(`#Chat_Upload_ErrorAction_Retry`),
              }),
            (0, _.jsx)(_, {
              onClick: () => _.ClearFileUploadError(),
              children: _(`#Chat_Upload_ErrorAction_Close`),
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { showErrorInfo: _, event: _ } = _.context,
    _ = _?.clanSteamID.GetAccountID() ?? 0;
  return _ == 39049601 ||
    _ == 41316928 ||
    (_.EUNIVERSE == 2 && _ == 20) ||
    (_.EUNIVERSE == 1 && _ == 4)
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          clanAccountID: _,
        }),
      })
    : _
      ? (0, _.jsx)(`div`, {
          children: _(`#CloudUpload_NotSupport`),
        })
      : null;
}
function _(_) {
  let { clanAccountID: _ } = _,
    [_] = _.useState(() => new _(_(_)));
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        fileUploadManager: _,
      }),
      (0, _.jsx)(_, {
        fileUploadManager: _,
      }),
    ],
  });
}
function _(_) {
  return {
    PopulateBeginFileUploadFormData: (_) => {
      _.append(`clan_account_id`, `` + _);
    },
    PopulateCommitFileUploadFormData: (_) => {
      _.append(`clan_account_id`, `` + _);
    },
    GetBeginFileUploadURL: () =>
      _.STORE_BASE_URL + `saleaction/ajaxbeginfileupload`,
    GetCommitFileUploadURL: () =>
      _.STORE_BASE_URL + `saleaction/ajaxcommitfileupload`,
    LogFileUploadMessage: (_) => {
      console.log(`UploadFileButton: `, _);
    },
    GetMaxFileSizeMB: () => 100,
  };
}
function _(_, _, _) {
  let _ = _(_, _);
  return (0, _.useMemo)(() => {
    let _ = _.results.find((_) => _ == _.unique_id);
    return {
      bLoading: _.bLoading,
      success: _.success,
      userPollData: _,
      error_message: _.error_message,
      userPollSubmitData: _.userPollSubmitData,
    };
  }, [_, _]);
}
function _(_, _) {
  let _ = _({
    queryKey: _(_, _),
    queryFn: async () =>
      _(
        await (
          await fetch(_(_, _, !1), {
            method: `GET`,
            credentials: `include`,
          })
        ).json(),
      ),
    placeholderData: {
      results: [],
      success: 10,
      bLoading: !0,
      userPollSubmitData: {
        user_poll_option_votes: [],
      },
    },
  });
  return _.data
    ? _.data
    : {
        results: [],
        success: 10,
        bLoading: !0,
        userPollSubmitData: {
          user_poll_option_votes: [],
        },
      };
}
function _(_, _) {
  let _ = _();
  return _({
    mutationKey: [`useSetPartnerEventCastVoteUserPoll`, _.GetAccountID(), _],
    mutationFn: async (_) => {
      let _ = {
          votes: _.votes,
        },
        _ = await fetch(_(_, _, !0), {
          method: `POST`,
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify(_),
          credentials: `include`,
        });
      if (!_._) throw Error(`Server returned ${_.status}`);
      return await _.json();
    },
    onSuccess: (_, _) => {
      if (_.success == 1) _.setQueryData(_(_, _), () => _(_));
      else {
        let _ = _.getQueryData(_(_, _));
        if (_) {
          let _ = {
            ..._,
            success: _.success,
            error_message: _.error_message,
          };
          _.setQueryData(_(_, _), () => _);
        }
      }
    },
  });
}
function _(_) {
  return {
    ..._,
    bLoading: !1,
    userPollSubmitData: {
      user_poll_option_votes: _.results
        .map((_) => _.voted_option_id)
        .reduce((_, _) => _.concat(_), []),
    },
  };
}
function _(_, _) {
  return _(_.ConvertTo64BitString(), _);
}
function _(_, _) {
  return [`usePartnerEventUserPoll`, _, _];
}
function _(_, _, _) {
  return `${_.COMMUNITY_BASE_URL}partnerevents/${_.ConvertTo64BitString()}/userpoll/${_}/${_ ? `ajaxcastvote` : `ajaxloaddata`}/?origin=${encodeURIComponent(location.origin)}`;
}
var _ = 86400;
function _(_, _) {
  let _ = 0;
  return (
    (_ = _.poll_end_time
      ? _.poll_end_time
      : (_.rtime32_visibility_start ?? _.rtime32_start_time ?? 0) +
        (_.poll_end_days_since_start || _)),
    _
  );
}
function _(_, _) {
  return _(_, _) < Math.floor(Date.now() / 1e3);
}
var _ = [`user_poll_background`];
function _(_) {
  return `${_.COMMUNITY_BASE_URL}mediaconvert/ajaxgroupconvert/${_.ConvertTo64BitString()}`;
}
var _ = (function (_) {
    return (
      (_.k_EPollResult_NotVisible = `not_visible`),
      (_.k_EPollResult_Visible_After_Vote = `after_vote`),
      (_.k_EPollResult_Visible_After_End = `after_end`),
      (_.k_EPollResult_Visible_After_Vote_Or_End = `after_vote_or_end`),
      (_.k_EPollResult_Visible_On_Demand = `on_demand`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_.k_EPollVoter_AnyUser = `any_user`),
      (_.k_EPollVoter_UserGameInLibrary = `user_game_in_library`),
      (_.k_EPollVoter_MinPlayTime = `min_play_time`),
      (_.k_EPollVoter_MemberOfGroup = `member_of_group`),
      _
    );
  })({}),
  _ = `UfoLzSTxTuA-`,
  _ = `YhWjKAr35yQ-`,
  _ = `PP2xaI-f6Ek-`,
  _ = `vcEow-tUZwo-`,
  _ = `_2kvsAdIW-7M-`,
  _ = `_8aI8-jd1icQ-`,
  _ = `dNzBZMJItoE-`,
  _ = `w0JrdYGNpkE-`,
  _ = `wsXRKtszMHI-`,
  _ = `_0xYjduHFIA0-`,
  _ = `ia46etUoIVc-`,
  _ = `YZZ1ufCMojA-`,
  _ = `ppFEAMbJ96c-`;
function _(_) {
  let _ = _.context.event,
    _ = _.context.showErrorInfo,
    _ = _(_.args, `poll_id`),
    _ = Number.parseInt(_),
    _ = _(() => _(_, _));
  if (!_ || !_)
    return _
      ? (0, _.jsx)(`div`, {
          className: _,
          children: _(`#UserPolls_Editor_FailToFindModel`, _),
        })
      : null;
  let _ = _(_.LANGUAGE);
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      userPollDef: _,
      lang: _,
      eventModel: _,
    }),
  });
}
function _(_, _) {
  return (_?.jsondata?.user_polls || [])?.find((_) => _.poll_id == _) || null;
}
function _(_) {
  let { eventModel: _, userPollDef: _, lang: _ } = _,
    { userPollData: _, ..._ } = _(_.clanSteamID, _.GID || `0`, _.poll_id),
    _ = !!(_.error_message && _.error_message?.length > 0),
    _ = _(_.clanSteamID, _.GID || `0`),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _?.option_results && _?.option_results.length > 0,
    _ = ((_ && _.voted_option_id?.length) || 0) > 0;
  return (
    (0, _.useEffect)(() => {
      !_ &&
        _.results_visibility_settings != _.k_EPollResult_NotVisible &&
        _ &&
        (_(
          {
            rtime32_visibility_start:
              _.GetVisibilityStartTimeAndDateUnixSeconds(),
            rtime32_start_time: _.GetStartTimeAndDateUnixSeconds(),
          },
          _,
        ) ||
          _) &&
        _(!0);
    }, [_, _, _, _, _]),
    (0, _.jsxs)(_, {
      ..._,
      children: [
        _.options?.map((_) => {
          let _ = _?.option_results.find((_) => _.unique_id == _.option_id),
            _ =
              _?.voted_option_id.includes(_.option_id || 0) ||
              _ === _.option_id;
          return (0, _.jsx)(
            _,
            {
              lang: _,
              pollOptionDef: _,
              bSelected: _,
              nPercentage: _ ? _?.percent : void 0,
              onClick: () => _(_.option_id),
              bDisableSelection:
                _.bLoading || !_?.vote_permitted || _ || _ || _,
            },
            `polloption` + _.option_id,
          );
        }),
        !!_ &&
          (0, _.jsx)(_, {
            onClick: async () => {
              if (!_.userPollSubmitData.user_poll_option_votes.includes(_)) {
                _(!0);
                let _ = {
                  user_poll_option_votes: [
                    ..._.userPollSubmitData.user_poll_option_votes,
                  ],
                };
                _.user_poll_option_votes.push(_),
                  await _.mutateAsync({
                    votes: _,
                  }),
                  _(void 0),
                  _(!1);
              }
            },
            children: _(`#Button_Submit`),
          }),
        (_ || _.bLoading) &&
          (0, _.jsx)(_, {
            size: `small`,
            position: `center`,
            string: _.bLoading ? _(`#Loading`) : void 0,
          }),
        _ &&
          !_ &&
          !_ &&
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            children: _(`#UserPolls_JustSeeResults`),
          }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `wizbFzhGtBc-`,
            children: _.error_message,
          }),
      ],
    })
  );
}
function _(_) {
  let { userPollDef: _, lang: _, eventModel: _, children: _ } = _,
    _ = _(),
    [_, _] = _(() => [
      _.GetWithFallback(_.localized_poll_description, _),
      _.user_poll_background,
    ]),
    _,
    _ = _.clanSteamID.GetAccountID();
  _ &&
    (_ = {
      backgroundImage: `url('${_(_, _)}')`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
    });
  let { userPollData: _ } = _(
      (0, _.useMemo)(() => _.InitFromClanID(_, _.EUNIVERSE), [_]),
      _.GID || `0`,
      _.poll_id,
    ),
    _ = _(
      {
        rtime32_visibility_start: _.GetVisibilityStartTimeAndDateUnixSeconds(),
        rtime32_start_time: _.GetStartTimeAndDateUnixSeconds(),
      },
      _,
    );
  return (0, _.jsx)(`div`, {
    className: _,
    style: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              children: _(`#UserPolls_status_N_Votes`, _(_?.total_votes || 0)),
            }),
            _?.display_message
              ? (0, _.jsx)(`div`, {
                  children: _?.display_message,
                })
              : (0, _.jsx)(`div`, {
                  children: _(`#UserPolls_status_N_TimeRemaining`, _(_ - _)),
                }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let {
      pollOptionDef: _,
      onClick: _,
      lang: _,
      bDisableSelection: _,
      bSelected: _,
      nPercentage: _,
    } = _,
    [_] = _(() => [_.GetWithFallback(_.localized_option, _)]),
    _ = Math.round((_ ?? 0) * 100),
    _ = !_ && !!_;
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !0,
      [_]: _,
      [_]: _,
    }),
    role: `button`,
    "aria-pressed": !!_,
    "aria-disabled": !!_,
    tabIndex: _ ? 0 : void 0,
    onClick: _ ? _ : void 0,
    onKeyDown: _
      ? (_) => {
          (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _?.());
        }
      : void 0,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        style: {
          width: `${_}%`,
        },
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          _ !== void 0 &&
            (0, _.jsxs)(`div`, {
              className: `PTiNIjMkeqY-`,
              children: [_, `%`],
            }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { dynamicImport: _, fallback: _, ..._ } = _,
    [_] = (0, _.useState)(() =>
      _.lazy(async () => {
        let _ = await _();
        return (
          await _(),
          {
            default: _,
          }
        );
      }),
    );
  return (0, _.jsx)(_, {
    fallback: _,
    children: (0, _.jsx)(_.Suspense, {
      fallback: _,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
var _ = `_8eEm0FMiv8s-`,
  _ = (_) => {
    let { vodInfo: _, bLoading: _ } = _(_.appid);
    return !_ && _.bPreviewMode
      ? (0, _.jsx)(`div`, {
          children: _(
            _ ? `#VODPlayer_Loading` : `#VODPlayer_ErrorLoading`,
            _.appid,
          ),
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              dynamicImport: async () =>
                (
                  await _(
                    async () => {
                      let { default: _ } = await import(
                        `./broadcastplayer.js`
                      ).then((_) => _._);
                      return {
                        default: _,
                      };
                    },
                    __vite__mapDeps([
                      50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                      31, 32, 33, 34, 35, 51, 37, 38, 52,
                    ]),
                    import.meta.url,
                  )
                ).default,
              nAppIDVOD: _.appid,
              watchLocation: 9,
              bStartPaused: !0,
            }),
          }),
        });
  };
function _(_) {
  let _ = _(_.args, `appid`, 0);
  return (0, _.jsx)(_, {
    appid: _,
    bPreviewMode: !!_.context.showErrorInfo,
  });
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([
      [
        `remindme`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `vod`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `giveawayeligible`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `claimitem`,
        {
          Constructor: _,
          autocloses: !0,
        },
      ],
      [
        `packagepurchaseable`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `actiondialog`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `uploadfilebutton`,
        {
          Constructor: _,
          autocloses: !0,
        },
      ],
      [
        `userpolls`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `meetsteamsessiongroup`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `meetsteamscheduleview`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
    ])),
    _
  );
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([...Array.from(_().entries()), ...Array.from(_.entries())])),
    _
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    dictionary: _(),
    children: _.children,
  });
}
var _ = _({
    DateAndTime: () => _,
    EndDate: () => _,
    EventDetailTimeInfo: () => _,
    MultiDateAndTime: () => _,
    RightSideTitles: () => _,
    StartDate: () => _,
    VerticalLocalDateAndTime: () => _,
    default: () => _,
    narrowWidth: () => _,
  }),
  _ = `500px`,
  _ = `PIDa4iwF6Qw-`,
  _ = `_4UxlTCOSE90-`,
  _ = `okJSO6KUIW4-`,
  _ = `eOfJfzt9Vmk-`,
  _ = `ezwq3bm0cG4-`,
  _ = `j7kT1VnCe70-`,
  _ = `YHODzfld870-`,
  _ = {
    narrowWidth: _,
    EventDetailTimeInfo: _,
    StartDate: _,
    EndDate: _,
    MultiDateAndTime: _,
    RightSideTitles: _,
    DateAndTime: _,
    VerticalLocalDateAndTime: _,
  };
function _(_) {
  let {
      event: _,
      className: _,
      nOverrideStartTime: _,
      nOverrideEndTime: _,
    } = _,
    _ = _.stylesmodule
      ? {
          ..._,
          ..._.stylesmodule,
        }
      : _,
    [_, _, _] = _(() => [
      _ ||
        (_.bOldAnnouncement ? _.postTime : _.GetStartTimeAndDateUnixSeconds()),
      _ || _.GetEndTimeAndDateUnixSeconds(),
      _.type,
    ]),
    _ = !_(_);
  return (0, _.jsx)(`div`, {
    className: _(_.EventDetailTimeInfo, _),
    children: (0, _.jsx)(_, {
      startDateAndTime: _,
      endDateAndTime: _,
      bHideEndTime: _,
      stylesmodule: _,
    }),
  });
}
function _(_) {
  let { _: _, event: _, className: _, dateRangeLayout: _ = `horizontal` } = _,
    [_, _, _] = _(() => [
      _.GetStartTimeAndDateUnixSeconds(),
      _.GetEndTimeAndDateUnixSeconds(),
      _.type,
    ]),
    _ = {};
  return (
    _ == `vertical` && (_.ShortDateRange = _),
    (0, _.jsx)(`div`, {
      _: _,
      className: _(_, _),
      children: (0, _.jsx)(_, {
        startDateAndTime: _,
        endDateAndTime: _,
        bHideEndTime: !_(_),
        stylesmodule: _,
      }),
    })
  );
}
var _ = void 0;
function _(_, _) {
  let _ = _?.AnnouncementGID,
    { myVote: _, Vote: _ } = _(_, _?.clanSteamID.GetAccountID() ?? 0, _(), {
      initialVote: _(_),
      ..._,
    });
  return {
    myVote: _,
    Vote: (_) => {
      _ &&
        _ &&
        _ != _ &&
        (_ && _.UpdateVoteCount(_, -1), _.UpdateVoteCount(_, 1), _(_));
    },
  };
}
function _() {
  let { useActiveCMInterface: _ } = _(),
    _ = _(),
    _ = !!_;
  return _.useMemo(
    () =>
      _
        ? {
            GetMyEventVote: async (_) => await _(_, _),
            RateEvent: async (_, _, _) => await _(_, _, _, _),
          }
        : _,
    [_, _],
  );
}
async function _(_, _) {
  if (!_) return null;
  let _ = await _.GetClanAnnouncementVoteForUser(_, {
    announcementid: _,
  });
  return _.BSuccess()
    ? _.Body().voted_up()
      ? `up`
      : _.Body().voted_down()
        ? `down`
        : null
    : null;
}
async function _(_, _, _, _) {
  return _
    ? (
        await _.RateClanAnnouncement(_, {
          announcementid: _,
          vote_up: _ == `up`,
          clan_accountid: _,
        })
      ).GetEResult()
    : 21;
}
function _(_) {
  if (typeof window > `u`) _(!1, `GetVoteFromPageConfig is browser only`);
  else
    return (
      _ ||
        ((_ = new Map()),
        _(`uservotes`, `application_config`)?.forEach((_) => {
          _.clanAnnouncementGID &&
            _.set(
              _.clanAnnouncementGID,
              _.voted_up ? `up` : _.voted_down ? `down` : null,
            );
        })),
      _ ? _.get(_) : void 0
    );
}
function _(_) {
  let {
    nVoteCount: _,
    nCommentCount: _,
    myVote: _,
    onVote: _,
    strDiscussionURL: _,
    onDiscussionUnavailable: _,
    bShowDiscussion: _,
    repost: _,
    share: _,
  } = _;
  return (0, _.jsxs)(_, {
    className: _,
    "flow-children": `row`,
    focusable: !1,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    className: _,
                  }),
                  _(_),
                ],
              }),
              (0, _.jsxs)(_, {
                focusable: !0,
                className: _(_, _, _, _ == `up` ? _ : ``),
                onActivate: () => _(`up`),
                children: [
                  (0, _.jsx)(_, {
                    className: _ == `up` ? _ : _,
                  }),
                  (0, _.jsx)(`span`, {
                    className: _,
                    children: _(`#Button_RateUp`),
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                focusable: !0,
                className: _(_, _, _, _ == `down` ? _ : ``),
                onActivate: () => _(`down`),
                "aria-label": _(`#Button_RateDown`),
                children: (0, _.jsx)(_, {
                  className: _ == `down` ? _ : _,
                }),
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(_, {
              commentCount: _,
              discussionURL: _,
              gotoDiscussion: _,
            }),
          _,
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `vmIVedNuofw-`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { commentCount: _, discussionURL: _, gotoDiscussion: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [(0, _.jsx)(_, {}), _(_)],
      }),
      _ &&
        (0, _.jsx)(_, {
          href: _(_),
          children: (0, _.jsxs)(`div`, {
            className: _(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `yGT3R-m6gZk-`),
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)(`span`, {
                className: `x25qTcshK-4-`,
                children: _(`#Button_Discuss`),
              }),
            ],
          }),
        }),
      !_ &&
        (0, _.jsxs)(_, {
          focusable: !0,
          onActivate: _,
          className: _(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `yGT3R-m6gZk-`),
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(`span`, {
              className: `x25qTcshK-4-`,
              children: _(`#Button_Discuss`),
            }),
          ],
        }),
    ],
  });
}
function _() {
  return _.logged_in
    ? !_.is_limited || (_((0, _.jsx)(_, {}), window), !1)
    : (_.IN_CLIENT
        ? console.log(
            `EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.`,
          )
        : _(
            (0, _.jsx)(_, {
              strTitle: _(`#EventDisplay_Share_NotLoggedIn`),
              strDescription: _(`#EventDisplay_Share_NotLoggedIn_Description`),
              strOKButtonText: _(`#MobileLogin_SignIn`),
              onOK: () => _(),
            }),
            window,
          ),
      !1);
}
function _(_) {
  let { eventModel: _, emoticonStore: _ } = _,
    _ = _(),
    { myVote: _, Vote: _ } = _(_),
    _ = (_) => {
      _() && _ !== void 0 && _(_);
    },
    [, _] = _(_.clanSteamID.GetAccountID()),
    _ = (_) => {
      let _ = _(_);
      _ &&
        _(
          (0, _.jsx)(_, {
            strDescription: _(`#EventDisplay_Share_CommentMigrationInProcess`),
          }),
          _,
        );
    },
    [_, _, _, _] = _(() => [
      _(_.nVotesUp - _.nVotesDown, 0, 2 ** 53 - 1),
      _(_.GetDiscussionURL(_?.vanity_url)),
      _.BIsUnlistedEvent(),
      _.nCommentCount,
    ]),
    _ = _();
  return (0, _.jsx)(_, {
    nVoteCount: _,
    nCommentCount: _,
    myVote: _ ?? void 0,
    onVote: _,
    strDiscussionURL: _,
    onDiscussionUnavailable: _,
    bShowDiscussion: !_ && !_,
    share:
      !_ &&
      (0, _.jsx)(_, {
        eventModel: _,
        emoticonStore: _,
      }),
  });
}
var _ = `FCDwJOWV1GM-`,
  _ = `txlNpNdL6ek-`,
  _ = `Lz8xvnLQ5-w-`,
  _ = `_3TchWdVwz8s-`,
  _ = `MCGIDfV4nO0-`,
  _ = `V-UPj6R9FQU-`,
  _ = `X60rhq3vCCI-`,
  _ = `KXp1skLG3-I-`,
  _ = `q7dZi0jYxLw-`,
  _ = `xgATxxvgldU-`,
  _ = `DwYwmDj0vwI-`,
  _ = `_4OTq0--XlTY-`,
  _ = `hSFWQBRmqTY-`,
  _ = `si-5WbiV7Zo-`,
  _ = `ZUZG5K1lErM-`,
  _ = `u0Scnt9OeIA-`,
  _ = `udKyBXdwthE-`,
  _ = `zU-vHqqb-eQ-`,
  _ = `zMH1K8bigkM-`,
  _ = `TyI03RMpz2I-`,
  _ = `PJL3cTty0Ls-`,
  _ = `DCoTBaIhgjA-`,
  _ = `-wy0zbfIpXg-`,
  _ = `QHeuRajwcnQ-`,
  _ = `_87rt595tHvU-`,
  _ = `wu5bVGwl0TE-`,
  _ = `_8J5uJ6Ccisw-`,
  _ = `qpxV4nQHXMc-`,
  _ = `HWbJ1A3y1Vk-`,
  _ = `aFhUTUuEGZ4-`,
  _ = `_7Wxxgtnu5oA-`,
  _ = `cd6NBhGLkfw-`,
  _ = `T-oflieec2c-`,
  _ = `_5q65CKymFcE-`,
  _ = `_3wNjVve5vqc-`,
  _ = `bD0kY0dKy3k-`,
  _ = `ay-K0NBOIuc-`,
  _ = `ddSX1kzyZtQ-`,
  _ = `ZQXIRkUStXw-`,
  _ = `n2sadsNGDXk-`,
  _ = `_7rq2r-AuB6A-`,
  _ = `Dw62Gq5AJZE-`,
  _ = `iv48xfQdA94-`,
  _ = `kSHlVJTPUms-`,
  _ = `tSbTvpNvWOQ-`,
  _ = `WgF5nilVEJk-`,
  _ = `fhefwW6bGXQ-`,
  _ = `bSRjbpQs554-`,
  _ = `Y0F9HI70evM-`,
  _ = `FWx4hiffwLs-`,
  _ = `y9pBu-aZo-k-`,
  _ = `ZlbFAmu86SM-`,
  _ = `_7rUyZ-4uXHM-`,
  _ = `WTcfl-4gbXY-`,
  _ = `fsvOA1PS33M-`,
  _ = `CYRhg26l0dc-`,
  _ = `_09V7NXTmtlY-`,
  _ = `W-arcmNojEY-`,
  _ = `MjUEpAp0LdA-`,
  _ = `iMj27DR-pkY-`,
  _ = {};
function _(_) {
  return _[_];
}
(0, _.default)(`2026-11-23T09:30:00-08:00`).unix(),
  (0, _.default)(`2026-11-30T10:00:00-08:00`).unix();
function _() {
  return 2025;
}
function _(_) {
  return `${_.MEDIA_CDN_URL}store/promo/${_}`;
}
function _() {
  return {
    strBackgroundColor: `#000000`,
    strBackgroundImageURL: _(`steamawards2026/page_tile.svg?v=1`),
    strTrophyImageURL: _(`steamawards2026/trophy_220.png?v=1`),
    strButtonBGColor: `#ffd979`,
    strButtonTextColor: `#000000`,
    strTextColor: `#ffd979`,
    strCategoryTextColor: `#ffffff`,
    strTitleColor: `#ffd979`,
    rgCategoryBackgrounds: _(_())?.mapCategoryColors ?? {},
    strFallbackCategoryBGColor: `#000000`,
  };
}
function _() {
  return `${_.STORE_BASE_URL}steamawards/ajaxgetwidgetstyle`;
}
(0, _.default)(`2026-12-17T09:30:00-08:00`).unix(),
  (0, _.default)(`2027-01-02T10:00:00-08:00`).unix();
var _ = 5350740,
  _ = new Map([
    [3240220, 2016],
    [292030, 2017],
    [578080, 2018],
    [814380, 2019],
    [1174180, 2020],
    [1196590, 2021],
    [1245620, 2022],
    [1086940, 2023],
    [2358720, 2024],
    [1030300, 2025],
  ]);
function _(_) {
  return _.has(_);
}
function _(_, _) {
  return _.BIsEventActionEnabled(_) || _ < _.GetStartTimeAndDateUnixSeconds();
}
function _(_, _, _, _) {
  let _ = _(_, _),
    _ = _(_, _);
  if (_.length || _.length)
    return {
      nomination: _.length
        ? {
            rgCategories: _,
            bNominationsLive: _,
          }
        : void 0,
      vote: _.length
        ? {
            rgCategories: _,
            bNominationsLive: _,
          }
        : void 0,
    };
}
function _(_) {
  return _ > 0;
}
function _(_, _) {
  let _ = [];
  for (let _ of _.filter(_)) {
    let _ = _.find((_) => _.voteid == _);
    _?.localization?.title &&
      _.push({
        eCategoryID: _,
        strTitle: _.localization.title,
        strDescription: _.localization.award_description ?? ``,
        bLaborOfLove: _.flag == 3,
        internal_name: _.internal_name ?? ``,
      });
  }
  return _;
}
function _(_) {
  return [`SteamAwards.GetUserNominations`, _];
}
function _(_) {
  return [`StoreSales.GetUserVotes`, _, _];
}
function _(_, _) {
  let _ = _(),
    _ = _(_.accountid),
    { data: _, isPending: _ } = _({
      queryKey: _,
      queryFn: async () => await _.GetMySteamAwardNominations(),
      enabled: !!_.accountid,
    }),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        let _ = await _.NominateForSteamAward(_, _);
        if (_ != 1)
          throw Error(
            `SteamAwards.Nominate failed with ${_} for ${_} and appid ${_}`,
          );
      },
      onMutate: (_) =>
        _.setQueryData(_, (_) => [
          ...(_ ?? []).filter((_) => _.category_id != _),
          {
            category_id: _,
            appid: _,
          },
        ]),
      onError: () =>
        _.invalidateQueries({
          queryKey: _,
        }),
    });
  return {
    unNominatedAppID: _?.find((_) => _.category_id == _)?.appid,
    bAnswered: _ != null || !_.accountid || !_,
    Nominate: _,
  };
}
function _(_, _) {
  let _ = _(),
    _ = _(_.accountid),
    { data: _, isPending: _ } = _({
      queryKey: _,
      queryFn: async () => await _.GetMySteamAwardVotes(),
      enabled: !!_.accountid,
    }),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        let _ = await _.SetSteamAwardVote(_, _);
        if (_ != 1) throw Error(`StoreSales.SetVote failed with ${_}`);
      },
      onMutate: (_) =>
        _.setQueryData(_, (_) => [
          ...(_ ?? []).filter((_) => _.voteid != _),
          {
            voteid: _,
            appid: _,
          },
        ]),
      onError: () =>
        _.invalidateQueries({
          queryKey: _,
        }),
    });
  return {
    unVotedAppID: _?.find((_) => _.voteid == _)?.appid,
    bAnswered: _ != null || !_.accountid || !_,
    Vote: _,
  };
}
function _(_) {
  return [`StoreSales.GetVoteDefinitions`, _ ?? 0];
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.GetVoteDefinitions(_, {
        sale_appid: _,
        language: _().strLanguage,
      });
      return _.BSuccess() ? _.Body().toObject() : null;
    },
    enabled: !!_,
    staleTime: 1 / 0,
  };
}
function _(_) {
  return _(_(_(), _));
}
async function _(_) {
  let _ = await _.GetUserNominations(_, {});
  return _.BSuccess() ? (_.Body().toObject().nominations ?? []) : [];
}
async function _(_, _) {
  let _ = await _.GetUserVotes(_, {
    sale_appid: _,
  });
  return _.BSuccess() ? (_.Body().toObject().user_votes ?? []) : [];
}
async function _(_, _, _, _) {
  let _ = await _.Nominate(_, {
    category_id: _,
    nominated_id: _,
    source: _,
  });
  return (
    _.BSuccess() ||
      console.warn(`SteamAwards.Nominate failed with ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject().nominations ?? []]
  );
}
async function _(_, _, _, _) {
  let _ = await _.SetVote(_, {
    voteid: _,
    appid: _,
    sale_appid: _,
  });
  return (
    _.BSuccess() ||
      console.warn(`StoreSales.SetVote failed with ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject().user_votes ?? []]
  );
}
var _ = `ilr1AjdCJXo-`,
  _ = `TxDyNEm1M8k-`,
  _ = `sUNGbyAayyI-`,
  _ = `Sc8nD8CrRck-`,
  _ = `-z2wNnnSVlM-`,
  _ = `ghuFYTHFeow-`,
  _ = `r-d74eApzAI-`,
  _ = `sSLI2In7TtI-`,
  _ = `eWqTMj--x0o-`,
  _ = `bwYOMwZYlP0-`,
  _ = `Z7-r2VQgpeM-`,
  _ = `i7PGUODutQI-`,
  _ = `tg9BVvJK4L0-`,
  _ = `gJlraqCGBwc-`,
  _ = `q-NADf-GkR0-`,
  _ = `Nxnaq9LeCh0-`,
  _ = `o00cvSBJI98-`,
  _ = `ycbLF-HTlIE-`,
  _ = `iYxHUHZvg5o-`,
  _ = `_15SY61ywDwg-`,
  _ = _.createContext(void 0);
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.widgetStyle,
    children: _.children,
  });
}
function _() {
  return _.useContext(_) ?? _();
}
function _(_) {
  let {
      strMainTitle: _,
      subtitle: _,
      headerText: _,
      headerContent: _,
      children: _,
      footer: _,
    } = _,
    _ = _(),
    _ = {
      backgroundColor: _.strBackgroundColor,
      backgroundImage: `url( ${_.strBackgroundImageURL} )`,
      color: _.strTextColor,
    };
  return (0, _.jsxs)(`div`, {
    style: _,
    className: _(_, _),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`img`, {
            className: _,
            src: _.strTrophyImageURL,
            alt: ``,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  color: _.strTitleColor,
                },
                className: _,
                children: _,
              }),
              _,
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              _,
            ],
          }),
        ],
      }),
      _,
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `HsPliMKnMhg-`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  return `${_.STORE_BASE_URL}steamawards/${_ ? `nominations/` : ``}`;
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    size: `medium`,
    position: `center`,
    string: _.Localize(`#Loading`),
  });
}
function _(_) {
  let { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    [_, _, _] = _();
  return {
    elDialogElement: (0, _.jsxs)(_.Fragment, {
      children: [
        _,
        (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            bVote: _,
            closeModal: _,
          }),
        }),
      ],
    }),
    BCanTakeAction: () =>
      _.logged_in ? !_.is_limited || (_(), !1) : (_(), !1),
  };
}
function _(_) {
  let { bVote: _, closeModal: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#Informational_Message`),
    onCancel: _,
    onOK: _,
    bAlertDialog: !0,
    children: (0, _.jsx)(`div`, {
      children: _.LocalizeReact(
        _
          ? `#SteamAward_Vote_LimitedAccount`
          : `#SteamAward_Nominate_LimitedAccount`,
        (0, _.jsx)(`a`, {
          href: `${_.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
          target: _.IN_CLIENT ? void 0 : `_blank`,
          rel: `noreferrer`,
          children: _.Localize(`#User_LimitedAccount_UrlInfo`),
        }),
      ),
    }),
  });
}
function _(_) {
  let {
      strLocTokenInfix: _,
      unCurrentAppID: _,
      unNewAppID: _,
      fnOnConfirm: _,
      closeModal: _,
    } = _,
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    _ = _ ? _(_, `small_capsule`) : void 0,
    _ = _ ? _(_, `small_capsule`) : void 0;
  return (0, _.jsx)(_, {
    modalClassName: _,
    strTitle: _.Localize(
      _ == `Vote`
        ? `#SteamAward_VoteConflictWarning_Title`
        : `#SteamAward_NominationConflictWarning_Title`,
    ),
    closeModal: _,
    onOK: _,
    onCancel: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _.LocalizeReact(
          _ == `Vote`
            ? `#SteamAward_VoteConflictWarning_Explanation`
            : `#SteamAward_NominationConflictWarning_Explanation`,
          (0, _.jsx)(`span`, {
            className: _,
            children: _?.name,
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _?.name,
          }),
        ),
        _ && _
          ? (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
                `→`,
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
              ],
            })
          : (0, _.jsx)(_, {
              size: `small`,
              position: `center`,
              string: _.Localize(`#Loading`),
            }),
      ],
    }),
  });
}
function _(_) {
  let { unAppID: _, widget: _, actions: _, bNominationsOpen: _ } = _,
    _ = _.rgCategories[0],
    { data: _ } = _({
      appid: _,
    }),
    { unNominatedAppID: _, bAnswered: _, Nominate: _ } = _(_.eCategoryID, _),
    { elDialogElement: _, BCanTakeAction: _ } = _(!1),
    {
      strButtonBGColor: _,
      strButtonTextColor: _,
      rgCategoryBackgrounds: _,
      strFallbackCategoryBGColor: _,
      strCategoryTextColor: _,
    } = _(),
    [_, _, _] = _(),
    _ = _?.[_.internal_name] ?? _;
  if (!_.bNominationsLive) return null;
  if (!_) return (0, _.jsx)(_, {});
  let _ = _(_(!0)),
    _ = _ == _,
    _ = _.rgCategories.length == 1,
    _ = _ && !_.bLaborOfLove;
  return (0, _.jsxs)(_, {
    strMainTitle: _.Localize(`#SteamAwards_EventMainTitle`),
    subtitle: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _
          ? _.Localize(`#SteamAwards_EventCallToAction`)
          : _.Localize(`#SteamAwards_EventVotingDateTeaser`, _()),
        _ &&
          (0, _.jsxs)(`a`, {
            href: _,
            className: `OztIiH5vYRE-`,
            children: [
              `(`,
              _.Localize(`#EventDisplay_CallToAction_LearnMore`),
              `)`,
            ],
          }),
      ],
    }),
    headerText: _
      ? _
        ? _.Localize(`#SteamAwards_EventNominateGamePrompt_Long`, _?.name ?? ``)
        : (0, _.jsx)(`a`, {
            className: _,
            href: _,
            children: _.Localize(
              `#SteamAwards_EventNominateGamePrompt_NoCategory`,
              _?.name ?? ``,
            ),
          })
      : _.Localize(`#SteamAwards_Event_NominationsClosed`),
    footer:
      _ &&
      (0, _.jsx)(`a`, {
        href: _,
        children: _.Localize(`#SteamAwards_EventNominationAlternativeLinkText`),
      }),
    children: [
      !!(_ && (_ || _)) &&
        (0, _.jsx)(`div`, {
          style: {
            background: _,
          },
          className: _(`eU1VNUlajE0-`, `eWqTMj--x0o-`),
          children: (0, _.jsxs)(`div`, {
            className: `gO70X8GBo-E-`,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  background: _,
                  color: _,
                },
                className: _(`SNoK7p5tEVU-`, _ && `eIE9nuLmVLE-`),
                children: (0, _.jsx)(_, {
                  controlled: !0,
                  className: _(`_1IIojhfpy34-`, _ && `eIE9nuLmVLE-`),
                  checked: _,
                  onChange: (_) => {
                    _ && _() && (_ && _ != _ ? _() : _(_));
                  },
                  disabled: _,
                  color: _,
                  highlightColor: _,
                  label: (0, _.jsx)(`div`, {
                    className: `bwYOMwZYlP0-`,
                    children: _.Localize(
                      _
                        ? `#SteamAwards_NominateWidget_CTA_PastTense`
                        : `#SteamAwards_NominateWidget_CTA`,
                      _.strTitle,
                    ),
                  }),
                }),
              }),
              (0, _.jsx)(`div`, {
                style: {
                  color: _,
                },
                className: `C-uxCDYX7oo-`,
                children: _.strDescription,
              }),
            ],
          }),
        }),
      _,
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          strLocTokenInfix: `Nomination`,
          unCurrentAppID: _,
          unNewAppID: _,
          fnOnConfirm: () => _(_),
          closeModal: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      unAppID: _,
      widget: _,
      actions: _,
      bVotesOpen: _,
      bHideCategoryDescriptions: _,
    } = _,
    { data: _ } = _({
      appid: _,
    }),
    _ = _(_(!1));
  return (0, _.jsx)(_, {
    strMainTitle: _.Localize(`#SteamAwards_EventMainTitleCombined`),
    headerText: _
      ? _.Localize(`#SteamAwards_EventVoteForGamePrompt`, _?.name ?? ``)
      : (0, _.jsx)(`a`, {
          href: _,
          className: _,
          children: _.Localize(`#SteamAwards_Event_VotesClosed`),
        }),
    headerContent: (0, _.jsx)(`div`, {
      className: _,
      children: _.rgCategories.map((_) =>
        (0, _.jsx)(
          _,
          {
            unAppID: _,
            category: _,
            actions: _,
            bVotesOpen: _,
            bHideDescription: _,
          },
          _.eCategoryID,
        ),
      ),
    }),
    footer: (0, _.jsx)(`a`, {
      href: _,
      children: _.Localize(`#EventDisplay_CallToAction_LearnMore`),
    }),
  });
}
function _(_) {
  let {
      unAppID: _,
      category: _,
      actions: _,
      bVotesOpen: _,
      bHideDescription: _,
    } = _,
    { unVotedAppID: _, bAnswered: _, Vote: _ } = _(_.eCategoryID, _),
    { elDialogElement: _, BCanTakeAction: _ } = _(!0),
    { strFallbackCategoryBGColor: _, rgCategoryBackgrounds: _ } = _(),
    [_, _, _] = _(),
    _ = _?.[_.internal_name] ?? _,
    _ = _ == _;
  return !_ && !_
    ? null
    : (0, _.jsxs)(`div`, {
        style: {
          backgroundColor: _,
        },
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
                children: _.strTitle,
              }),
              !_ &&
                (0, _.jsx)(`div`, {
                  className: `C-uxCDYX7oo-`,
                  children: _.strDescription,
                }),
              _
                ? (0, _.jsx)(`button`, {
                    className: _,
                    children: (0, _.jsx)(`span`, {
                      className: _,
                      children: _.Localize(`#SteamAward_VoteButton_VotedText`),
                    }),
                  })
                : (0, _.jsx)(`button`, {
                    className: _,
                    onClick: () => {
                      _ && _() && (_ && _ != _ ? _() : _(_));
                    },
                    children: (0, _.jsx)(`span`, {
                      className: _,
                      children: _.Localize(`#SteamAward_VoteButton_PromptText`),
                    }),
                  }),
            ],
          }),
          _,
          (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsx)(_, {
              strLocTokenInfix: `Vote`,
              unCurrentAppID: _,
              unNewAppID: _,
              fnOnConfirm: () => _(_),
              closeModal: _,
            }),
          }),
        ],
      });
}
function _(_) {
  let _ = _();
  return (0, _.useMemo)(
    () => ({
      GetMySteamAwardNominations: () => _(_),
      NominateForSteamAward: async (_, _) => {
        if (_) return 1;
        let [_] = await _(_, _, _, 4);
        return _;
      },
      GetMySteamAwardVotes: () => _(_, _),
      SetSteamAwardVote: async (_, _) => {
        if (_) return 1;
        let [_] = await _(_, _, _, _);
        return _;
      },
    }),
    [_, _],
  );
}
var _ = [];
function _(_, _, _) {
  let _ = _.some(_) || _.some(_),
    _ = _(_ ? _ : void 0);
  return _
    ? _.data
      ? {
          widgets: _(_.data.votes ?? [], _, _, _),
          bLoading: !1,
        }
      : {
          bLoading: _.isPending,
        }
    : {
        bLoading: !1,
      };
}
function _(_) {
  let { data: _, isPending: _ } = _({
    queryKey: [`SteamAwards.WidgetStyle`],
    queryFn: async () => {
      let _ = await fetch(_(), {
        credentials: `omit`,
      });
      if (!_._)
        throw Error(`steamawards/ajaxgetwidgetstyle failed with ${_.status}`);
      return await _.json();
    },
    enabled: _,
    staleTime: 1 / 0,
    retry: !1,
  });
  return {
    widgetStyle: _,
    bLoading: _ && _,
  };
}
function _(_, _) {
  return _
    ? {
        ..._,
        bNominationsLive: !0,
      }
    : _;
}
function _(_) {
  return !!_ && _.EUNIVERSE == 1;
}
function _(_) {
  let { event: _, previewMode: _ } = _,
    [_, _] = _(() => [_.GetSteamAwardCategory(), _.appid]),
    _ = _(_, _()),
    { widgets: _, bLoading: _ } = _([_], _, _),
    { widgetStyle: _, bLoading: _ } = _(!!_?.nomination),
    _ = _(_(_));
  return _ || _
    ? (0, _.jsx)(_, {})
    : _?.nomination
      ? (0, _.jsx)(_, {
          widgetStyle: _,
          children: (0, _.jsx)(_, {
            unAppID: _,
            actions: _,
            widget: _(_.nomination, !!_),
            bNominationsOpen: _,
          }),
        })
      : null;
}
function _(_) {
  let {
      appID: _,
      voteCategories: _,
      bIsEventActionEnabled: _,
      previewMode: _,
      bRenderFromStorePage: _,
    } = _,
    { widgets: _, bLoading: _ } = _(_, _ ?? _, !1),
    { widgetStyle: _, bLoading: _ } = _(!!_?.vote),
    _ = _(_(_));
  return _ || _
    ? (0, _.jsx)(_, {})
    : _?.vote
      ? (0, _.jsx)(_, {
          widgetStyle: _,
          children: (0, _.jsx)(_, {
            unAppID: _,
            widget: _.vote,
            actions: _,
            bVotesOpen: _ || !!_,
            bHideCategoryDescriptions: _,
          }),
        })
      : null;
}
var _ = `CmGdbGDNSV4-`,
  _ = `iPOPhGzC-a0-`,
  _ = `xrOiSU9R97s-`,
  _ = `LwJMhK0HNVM-`,
  _ = `ZGGCLp-BDTo-`,
  _ = `M7DOVjQK--s-`,
  _ = `gKDPu8oCj8M-`,
  _ = `CI7Kfj6g0IA-`,
  _ = `wkqGxJzBufw-`,
  _ = `wqku6E-Abwg-`,
  _ = `gg4cpQLGyDc-`,
  _ = `_7YWF9gABggY-`,
  _ = `_5p-Wrlk9bgc-`,
  _ = `_72FICgCQSdY-`,
  _ = `UnBqYIhvFvg-`,
  _ = `nT35pSNPuYs-`,
  _ = `_2XopQbI8Bi8-`,
  _ = `o6bVF1-qPXQ-`,
  _ = `qvYW3H-Yr-I-`,
  _ = `Cfio5qjFtHU-`,
  _ = `oN6p82rKRck-`,
  _ = `vO1QeI3w9Dk-`,
  _ = `_3aW3Mxt8m1Q-`,
  _ = `Qe4MY8-rwjI-`,
  _ = `jcxmsuUFA2M-`,
  _ = `KdR0M-oN1oY-`,
  _ = `QHtC9T0nSOI-`,
  _ = `ibKXDplBVRg-`,
  _ = `CmfveJtv4Vo-`,
  _ = `W178nE7W-R0-`,
  _ = `fY9hFy-ZiKw-`,
  _ = `KwOhtU9RR3w-`,
  _ = `_9QcJ0ABITrA-`;
function _(_) {
  let {
      appId: _,
      clanId: _,
      strCapsuleUrl: _,
      strGroupTitle: _,
      strExtraBannerGroupStyle: _,
      actions: _,
    } = _,
    _ = _ !== _,
    _ = _.useMemo(
      () =>
        _
          ? {
              appid: _,
            }
          : {
              creatorid: _,
            },
      [_, _],
    ),
    _ = (0, _.jsx)(`img`, {
      className: _,
      src: _,
    });
  return _()
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            style: {
              backgroundImage: `url(${_})`,
            },
          }),
          (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              _
                ? _
                  ? (0, _.jsx)(_, {
                      _: _,
                      className: _,
                      hoverProps: {
                        direction: `overlay`,
                        style: {
                          minWidth: `320px`,
                        },
                      },
                      children: _,
                    })
                  : (0, _.jsx)(_, {
                      _: _,
                      hoverClassName: _,
                      children: _,
                    })
                : (0, _.jsxs)(`div`, {
                    className: _,
                    children: [_, ` `],
                  }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  _,
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#EventDisplay_NewsHubSubtitle`),
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)(`div`, {
                  className: `XVaKlThraAU-`,
                  children: _,
                }),
            ],
          }),
        ],
      });
}
function _(_, _) {
  let [_, _] = (0, _.useState)({}),
    _ = _(`useEventHeaderData`);
  return (
    (0, _.useEffect)(() => {
      if (_)
        _.Get()
          .QueueAppRequest(_, {
            include_assets: !0,
            include_screenshots: !0,
          })
          .then(() => {
            let _ = _.Get().GetApp(_);
            _ &&
              !_?.token?.reason &&
              _({
                strCapsuleUrl: _.GetAssets()?.GetHeaderURL(),
                strGroupTitle: _.GetName(),
                strStoreURL:
                  (_.IN_CLIENT ? `steam://openurl/` : ``) + _.GetStorePageURL(),
                strCommunityURL:
                  (_.IN_CLIENT ? `steam://openurl/` : ``) +
                  _.GetCommunityPageURL(),
                strForumURL:
                  (_.IN_CLIENT ? `steam://openurl/` : ``) +
                  _.GetCommunityDiscussionForumsURL(),
              });
          });
      else if (_) {
        let _ = _.InitFromClanID(_, _.EUNIVERSE);
        _.LoadClanInfoForClanSteamID(_).then((_) => {
          _ &&
            !_?.token?.reason &&
            _({
              strCapsuleUrl: _.avatar_full_url,
              strGroupTitle: _.group_name,
              strStoreURL:
                (_.IN_CLIENT ? `steam://openurl/` : ``) +
                _.STORE_BASE_URL +
                `curator/` +
                _ +
                `/`,
              strCommunityURL:
                (_.IN_CLIENT ? `steam://openurl/` : ``) +
                _.COMMUNITY_BASE_URL +
                `gid/` +
                _.ConvertTo64BitString(),
              strExtraBannerGroupStyle: _,
            });
        });
      }
    }, [_, _?.token?.reason, _]),
    _
  );
}
function _(_) {
  let { appId: _, clanId: _, bShowRSSFeed: _ } = _,
    { strStoreURL: _, strCommunityURL: _, strForumURL: _ } = _(_, _),
    _ = _(),
    _ =
      _.STORE_BASE_URL +
      `feeds/` +
      _() +
      (_ ? `/app/` + _ : `/group/` + _) +
      `/?cc=` +
      _.COUNTRY +
      `&l=` +
      _.LANGUAGE,
    { data: _ } = _(_),
    _ = !!(_?.can_edit || _?.support_user),
    _ = _.Get().BOwnsApp(_),
    _ = (0, _.useMemo)(() => {
      let _ = [];
      return (
        _.IN_CLIENT &&
          _ &&
          _.push({
            label: _(`#EventDisplay_ViewInLibrary_ExtraShort`),
            data: `steam://nav/games/details/` + _,
          }),
        _ &&
          _.push({
            label: _(`#EventDisplay_ViewStorePage_ExtraShort`),
            data: _(_),
          }),
        _ ||
          (_ &&
            _.push({
              label: _(`#EventDisplay_ViewCommunityPage_ExtraShort`),
              data: _(_),
            }),
          _ &&
            _.push({
              label: _(`#EventDisplay_ViewForum_ExtraShort`),
              data: _(_),
            }),
          _ &&
            _.push({
              label: (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {}),
                  _(`#EventDisplay_RSSFeed_ExtraShort`),
                ],
              }),
              data: _,
            })),
        _ &&
          _.push({
            label: _(`#EventDisplay_Admin_ExtraShort`),
            data: _(_, _.InitFromClanID(_, _.EUNIVERSE), `admin`),
          }),
        _
      );
    }, [_, _, _, _, _, _, _, _, _, _]);
  return (0, _.jsx)(_, {
    strDefaultLabel: _(`#EventDisplay_LinksDropDown_ExtraShort`),
    strClassName: _,
    strDropDownButtonClassName: _,
    strDropDownMenuCtnClass: _,
    contextMenuPositionOptions: {
      bMatchWidth: !1,
    },
    arrowClassName: _,
    rgOptions: _,
    onChange: (_, _, _) => {
      _ && _(_, _.data);
    },
  });
}
var _ = _((_) => {
  let { appId: _, clanId: _ } = _,
    {
      strCapsuleUrl: _,
      strGroupTitle: _,
      strExtraBannerGroupStyle: _,
    } = _(_, _),
    _ = (0, _.useMemo)(
      () =>
        _
          ? {
              appid: _,
            }
          : {
              creatorid: _,
            },
      [_, _],
    ),
    { data: _ } = _(_),
    _ = _.Get().BOwnsApp(_);
  return (0, _.jsx)(_, {
    appId: _,
    clanId: _,
    strCapsuleUrl: _,
    strGroupTitle: _,
    strExtraBannerGroupStyle: _,
    actions: (0, _.jsxs)(_.Fragment, {
      children: [
        !(_ || !_) &&
          (0, _.jsx)(`div`, {
            className: `_1US5O8GIUEc-`,
            children: (0, _.jsx)(_, {
              appid: _,
              bIsFree: !!_?.is_free,
              bIsComingSoon: !!_?.is_coming_soon,
              className: _(void 0, `mJ5CX9X1A8E-`),
            }),
          }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _
            ? (0, _.jsx)(_, {
                appid: _,
                className: _,
              })
            : (0, _.jsx)(_, {
                clanAccountID: _,
                className: _,
              }),
        }),
        (0, _.jsx)(_, {
          ..._,
        }),
      ],
    }),
  });
});
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _(_, `AppPartnerEventsBanner`),
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
var _ = `WbZZkptWLHg-`;
function _(_) {
  let { event: _ } = _,
    _ = _(() => _.jsondata?.referenced_appids || []),
    _ = _(),
    _ = _({
      queries: _.map((_) =>
        _(_, {
          appid: _,
        }),
      ),
      combine: (_) => ({
        bLoaded: _.every((_) => !_.isPending),
        data: _.map((_) => _.data),
      }),
    });
  if (!_.length || !_.bLoaded) return null;
  let _ = _.data
      .flatMap((_) =>
        _?.store_url_path && _?.name ? [`[url="${_(_)}"]${_.name}[/url]`] : [],
      )
      .join(_(`#EventDisplay_ReferencedApps_Joiner`)),
    _ = _(`#EventDisplay_ReferencedApps`, _.length, _);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      text: _,
      event: _,
    }),
  });
}
function _(_) {
  let { bOn: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _ ? _ : _,
    children: _(_ ? `#Dialog_On` : `#Dialog_Off`),
  });
}
function _(_) {
  return _.IS_CREATOR_HOME
    ? (0, _.jsx)(_, {
        identifier: _.identifier,
      })
    : _.IS_CURATOR
      ? (0, _.jsx)(_, {
          identifier: _.identifier,
        })
      : (0, _.jsx)(_, {
          identifier: _.identifier,
        });
}
function _(_) {
  let _ = new _(_.CLANSTEAMID),
    { creatorHome: _ } = _(_.GetAccountID());
  return !_ || !_.BIsLoaded()
    ? null
    : (0, _.jsx)(_, {
        strURL: _(_.GetCreatorHomeURL(`developer`)),
        strImgUrl: _.GetAvatarURLFullSize(),
        strName: _.GetName(),
      });
}
function _(_) {
  let _ = _(_.VANITY_ID);
  return _
    ? (0, _.jsx)(_, {
        strURL: _(_.COMMUNITY_BASE_URL + `groups/` + _.VANITY_ID),
        strImgUrl: _.avatar_full_url,
        strName: _.group_name,
      })
    : null;
}
function _(_) {
  let [_] = _(_.APPID, {
    include_assets: !0,
    include_release: !0,
  });
  return _
    ? (0, _.jsx)(_, {
        strURL: _(_.GetStorePageURL()),
        strImgUrl: _.GetAssets()?.GetSmallCapsuleURL(),
        strName: _.GetName(),
      })
    : null;
}
function _(_) {
  let { strURL: _, strImgUrl: _, strName: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`a`, {
        href: _,
        target: _.IN_CLIENT ? void 0 : `_blank`,
        children: [
          (0, _.jsx)(`img`, {
            src: _,
          }),
          _,
        ],
      }),
    }),
  });
}
function _(_) {
  let { children: _ } = _;
  return _() && !_.IN_STEAMUI
    ? (0, _.jsx)(_, {
        className: _,
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
var _ = 56,
  _ = 136,
  _ = _.lazy(() =>
    _(
      () => import(`./broadcast_embeddable.js`).then((_) => _._),
      __vite__mapDeps([
        53, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 51, 37,
        38, 50, 52, 46, 54, 55, 56, 57, 58, 59, 60, 61, 62, 47, 48, 63,
      ]),
      import.meta.url,
    ),
  );
function _(_) {
  let [_, _] = _(_.appid, {
      include_assets: !0,
    }),
    [_, _] = _(_.clanID),
    _ = ``;
  return (
    _.appid
      ? (_ = _?.GetAssets()?.GetCommunityIconURL() || ``)
      : _.clanID && (_ = _?.avatar_full_url ?? ``),
    (0, _.jsx)(`div`, {
      className: _(_, _, _),
      onClick: _.onAppIconClick,
      children:
        !!_ &&
        (0, _.jsx)(`img`, {
          src: _,
          alt: ``,
        }),
    })
  );
}
var _ = class extends _.Component {
  m_loader;
  m_refPage = _.createRef();
  m_refContent = _.createRef();
  m_refScroll = _.createRef();
  m_refScrollAnchor = _.createRef();
  m_scrollAnimation = null;
  m_nTouchStartClientY;
  m_nPreviousRenderCount = 0;
  m_nCurrentRenderCount = 0;
  constructor(_) {
    super(_),
      (this.m_loader = new _(this.props.partnerEventStore)),
      !this.props.bShowOnlyInitialEvent &&
        this.props.initialEvent &&
        this.m_loader.InitAroundEvent(
          this.props.initialEvent,
          this.props.additionalParams,
        );
  }
  FindCurrentlyViewedEventIndex() {
    let _ = this.m_refScroll.current;
    if (!this.m_refContent.current || !_) return -1;
    let _ = this.m_refContent.current.children,
      _ = this.GetScrollTopForComparison(_);
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_],
        _ = _.offsetTop,
        _ = _ + _.clientHeight;
      if (_ <= _ && _ > _) return _;
    }
    return -1;
  }
  GetPaddingTop() {
    return this.props.showAppHeader ? _ : _;
  }
  GetScrollTopForComparison(_) {
    return Math.ceil(_.scrollTop + this.GetPaddingTop() + 24);
  }
  ScrollToEvent(_) {
    let _ = this.m_refContent.current;
    if (!_ || _ < 0 || _ >= _.children.length || this.m_scrollAnimation) return;
    let _ = _.children[_].offsetTop - this.GetPaddingTop();
    this.ScrollToOffset(_);
  }
  ScrollToOffset(_) {
    let _ = this.m_refScroll.current;
    if (!_) return;
    let _ = {
      msDuration: 500,
      timing: `cubic-in-out`,
      onComplete: this.OnScrollComplete,
    };
    (this.m_scrollAnimation = new _(
      _,
      {
        scrollTop: _,
      },
      _,
    )),
      this.m_scrollAnimation.Start();
  }
  ScrollToBottom() {
    this.m_refScroll.current &&
      this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
  }
  ScrollToNextEvent() {
    let _ = this.m_loader.GetEvents(),
      _ = this.FindCurrentlyViewedEventIndex() + 1;
    _ >= _.length
      ? this.ScrollToBottom()
      : (this.ScrollToEvent(_),
        _ == _.length - 1 && this.m_loader.LoadMoreAtEnd());
  }
  ScrollToPrevEvent() {
    let _ = this.FindCurrentlyViewedEventIndex(),
      _ = _ - 1;
    if (_ < 0) {
      this.ScrollToOffset(0);
      return;
    }
    let _ = this.m_refContent.current,
      _ = this.m_refScroll.current;
    if (_ && _) {
      let _ = _.children[_],
        _ = _.offsetTop,
        _ = _ + _.clientHeight,
        _ = this.GetScrollTopForComparison(_);
      (_ -= (_ - _) * 0.3), _ <= _ && (_ = _);
    }
    this.ScrollToEvent(_);
  }
  OnScrollComplete() {
    this.m_scrollAnimation = null;
  }
  Close() {
    this.props.closeModal && this.props.closeModal();
  }
  OnBackgroundClick(_) {
    _.currentTarget == _.target && this.Close();
  }
  OnKeyDown(_) {
    _.keyCode == 27 && this.Close();
  }
  OnScroll(_) {
    if (this.props.bShowOnlyInitialEvent) return;
    let _ = this.m_refScroll.current;
    if (!_) return;
    let _ = _.clientHeight;
    _.scrollHeight - (_.scrollTop + _) <= _ && this.m_loader.LoadMoreAtEnd(),
      _.scrollTop <= _ && this.m_loader.LoadMoreAtBeginning();
  }
  getSnapshotBeforeUpdate(_) {
    let _ = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
    if (((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !_))
      return null;
    let _ = this.m_refScroll.current;
    if (!_ || !this.m_refScrollAnchor.current) return null;
    let _ = this.m_refScrollAnchor.current.GetDOM();
    return _ ? _.offsetTop - _.scrollTop : null;
  }
  OnTouchStart(_) {
    _.touches.length == 1 && (this.m_nTouchStartClientY = _.touches[0].clientY);
  }
  OnTouchMove(_) {
    if (!this.m_refScroll.current || _.touches.length == 0) return;
    let _ = 0;
    this.m_nTouchStartClientY !== void 0 &&
      (_ = this.m_nTouchStartClientY - _.touches[0].clientY),
      this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(_, _);
  }
  OnWheel(_) {
    this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(_, _.deltaY);
  }
  SuppressUnwantedScrollEventsBecauseSafariIsDumb(_, _) {
    let _ = this.m_refScroll.current;
    if (!_) return;
    let _ = _(_.target) && _(_, _.target),
      _ = _ < 0 && _.scrollTop < 1,
      _ = _.scrollHeight - _.scrollTop <= _.clientHeight;
    (!_ || _ || (_ > 0 && _)) && _.cancelable && _.preventDefault();
  }
  SetGlobalHeaderHidden(_) {
    let _ = document.getElementsByClassName(`responsive_header`);
    _(_.length <= 1, `Must have at most one responsive_header`),
      _.length >= 1 && (_[0].style.display = _ ? `none` : ``);
  }
  SetFooterPinnedToBottom(_) {
    let _ = document.getElementById(`footer`);
    _ && (_.style.position = _ ? `absolute` : ``);
  }
  componentDidMount() {
    let _ = this.m_refScroll.current;
    _ && !_(_, _.ownerDocument.activeElement) && _.focus();
    let _ = this.m_refPage.current;
    _ &&
      (_.addEventListener(`touchstart`, this.OnTouchStart),
      _.addEventListener(`touchmove`, this.OnTouchMove, {
        passive: !1,
      }),
      _.addEventListener(`wheel`, this.OnWheel, {
        passive: !1,
      })),
      this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
      this.SetFooterPinnedToBottom(!0);
  }
  componentDidUpdate(_, _, _) {
    if (_ === null) return;
    let _ = this.m_refScroll.current;
    if (!_) return;
    _(_, _.ownerDocument.activeElement) || _.focus();
    let _ = this.m_refScrollAnchor.current
      ? this.m_refScrollAnchor.current.GetDOM()
      : null;
    _ && (_.scrollTop = _.offsetTop - _);
  }
  componentWillUnmount() {
    let _ = this.m_refPage.current;
    _ &&
      (_.removeEventListener(`touchstart`, this.OnTouchStart),
      _.removeEventListener(`touchmove`, this.OnTouchMove),
      _.removeEventListener(`wheel`, this.OnWheel)),
      this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
      this.SetFooterPinnedToBottom(!1);
  }
  render() {
    let { initialEvent: _, bShowOnlyInitialEvent: _ } = this.props,
      _ = !_,
      _ = _ ? (_ ? [_] : this.m_loader.GetEvents()) : [],
      _ = [],
      _ = this.props.appid,
      _ = this.props.clanSteamID?.GetAccountID();
    for (let _ of _) {
      let _ = _ !== void 0 && _.GID == _.GID,
        _ = _;
      _.push(
        (0, _.jsx)(
          _,
          {
            ref: _ ? this.m_refScrollAnchor : null,
            event: _,
            emoticonStore: this.props.emoticonStore,
            partnerEventStore: this.props.partnerEventStore,
            disableReadTracking: _,
            fnFilterImageURLsForKnownFailures:
              this.props.fnFilterImageURLsForKnownFailures,
            fnImageFailureCallback: this.props.fnImageFailureCallback,
            bDisableBroadcastPlayer: !_,
            className: this.props.eventClassName,
          },
          _.GID,
        ),
      ),
        (_ ??= _.appid),
        (_ ??= _.clanSteamID.GetAccountID());
    }
    return (
      (this.m_nCurrentRenderCount = _.length),
      (0, _.jsxs)(_, {
        onCancelButton: this.props.closeModal,
        className: _,
        ref: this.m_refPage,
        children: [
          this.props.showAppHeader &&
            (0, _.jsx)(_, {
              appId: _ ?? 0,
              clanId: _ ?? 0,
            }),
          (0, _.jsx)(_, {
            className: _(_, void 0),
            ref: this.m_refScroll,
            onScroll: this.OnScroll,
            onClick: this.OnBackgroundClick,
            tabIndex: -1,
            onKeyDown: this.OnKeyDown,
            scrollIntoViewType: _.NoTransformSparseContent,
            children: _
              ? (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#EventDisplay_NoEventsToSee`),
                })
              : (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _(
                        _,
                        !this.props.onAppIconClick && `R-q7sW-Xkg4-`,
                        _ && `LIm3FCjFgqo-`,
                      ),
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsxs)(`div`, {
                          className: _,
                          children: [
                            !!this.props.closeModal &&
                              (0, _.jsx)(`div`, {
                                className: _(`TlGGn2-aFiY-`, `ibKXDplBVRg-`),
                                onClick: this.Close,
                                children: (0, _.jsx)(_, {}),
                              }),
                            !_ &&
                              (0, _.jsx)(`div`, {
                                className: _(
                                  `QHtC9T0nSOI-`,
                                  `yPve79a1Qm0-`,
                                  `ibKXDplBVRg-`,
                                ),
                                onClick: this.ScrollToPrevEvent,
                                children: (0, _.jsx)(_, {
                                  angle: 0,
                                }),
                              }),
                            !_ &&
                              (0, _.jsx)(`div`, {
                                className: _(
                                  `QHtC9T0nSOI-`,
                                  `_4Lwn5F4-kiE-`,
                                  `ibKXDplBVRg-`,
                                ),
                                onClick: this.ScrollToNextEvent,
                                children: (0, _.jsx)(_, {
                                  angle: 180,
                                }),
                              }),
                            this.props.onAppIconClick &&
                              (0, _.jsx)(_, {
                                appid: _,
                                clanID: _ ?? 0,
                                onAppIconClick: this.props.onAppIconClick,
                              }),
                          ],
                        }),
                      }),
                    }),
                    !_ &&
                      (0, _.jsx)(_, {
                        loader: this.m_loader,
                        location: `top`,
                      }),
                    (0, _.jsx)(`div`, {
                      ref: this.m_refContent,
                      className: _(
                        _,
                        !this.props.onAppIconClick && `R-q7sW-Xkg4-`,
                      ),
                      children: _,
                    }),
                    !_ &&
                      (0, _.jsx)(_, {
                        loader: this.m_loader,
                        location: `bottom`,
                      }),
                  ],
                }),
          }),
        ],
      })
    );
  }
};
_([_], _.prototype, `ScrollToNextEvent`, null),
  _([_], _.prototype, `ScrollToPrevEvent`, null),
  _([_], _.prototype, `OnScrollComplete`, null),
  _([_], _.prototype, `Close`, null),
  _([_], _.prototype, `OnBackgroundClick`, null),
  _([_], _.prototype, `OnKeyDown`, null),
  _([_], _.prototype, `OnScroll`, null),
  _([_], _.prototype, `OnTouchStart`, null),
  _([_], _.prototype, `OnTouchMove`, null),
  _([_], _.prototype, `OnWheel`, null),
  (_ = _([_], _));
var _ = _((_) => {
    let _ = _.loader.GetNewerState(),
      _ = _.loader.GetOlderState();
    return _ == 2 && _ == 2
      ? null
      : (_.location == `top` ? _ : _) == 2
        ? (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              position: `center`,
              string: _(`#Loading`),
            }),
          })
        : null;
  }),
  _ = _.forwardRef(function (_, _) {
    let _ = _(),
      [_, _] = _(_.event.appid, {
        include_assets: !0,
      }),
      _ = _(_.event.appid),
      _ = _();
    return (0, _.jsx)(_, {
      ref: _,
      ..._,
      bInGamepadUI: _,
      bShouldMaskImages: _,
      storeItem: _,
      tracker: _,
    });
  }),
  _ = class extends _.Component {
    m_refContent = _.createRef();
    m_sendReadInfo = new _();
    m_bSentRead = !1;
    OnEnterVisible() {
      this.m_bSentRead ||
        this.m_sendReadInfo.IsScheduled() ||
        this.m_sendReadInfo.Schedule(750, () => {
          this.props.tracker.RecordEventRead(this.props.event, 4),
            (this.m_bSentRead = !0);
        });
    }
    OnLeaveVisible() {
      this.m_sendReadInfo.Cancel();
    }
    GetDOM() {
      return this.m_refContent.current;
    }
    render() {
      let {
          event: _,
          langOverride: _,
          partnerEventStore: _,
          emoticonStore: _,
          className: _,
          additionalTypeAndDateElement: _,
          headerClassnames: _,
          isPreview: _,
          bShouldMaskImages: _,
          storeItem: _,
        } = this.props,
        _ = _ || _(_.LANGUAGE),
        _ = _.GetDescriptionWithFallback(_) || ``,
        _ = _,
        _ = _.GetCategoryAsString(),
        _ = _.type,
        _ = ``;
      _.appid
        ? (_ = _?.GetName() || ``)
        : _.clanSteamID &&
          (_ =
            _.GetClanInfoByClanAccountID(_.clanSteamID.GetAccountID())
              ?.group_name ?? ``);
      let _ = _.GetTimeNowWithOverride(),
        _ = _ !== 28 && _ < _.GetStartTimeAndDateUnixSeconds() && !_,
        _ = null;
      return (
        _.jsondata.bSaleEnabled && _.jsondata.sale_vanity_id && (_ = _(_)),
        (0, _.jsx)(_, {
          children: (0, _.jsxs)(`div`, {
            ref: this.m_refContent,
            className: _(_, _, _, _ == `editor` ? _ : ``),
            children: [
              (0, _.jsx)(_, {
                ...this.props,
                eLanguage: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    this.props.headerElement,
                    (0, _.jsxs)(`div`, {
                      className: _(_, _ && `EL3MaVqCn0g-`),
                      children: [
                        (0, _.jsxs)(`div`, {
                          className: _,
                          children: [
                            (0, _.jsx)(`span`, {
                              className: _,
                              children: _,
                            }),
                            (0, _.jsxs)(`span`, {
                              className: _,
                              children: [
                                ` `,
                                _(`#EventDisplay_PostedBy`),
                                _,
                                ` `,
                              ],
                            }),
                            (0, _.jsx)(_, {
                              event: _,
                              className: _,
                            }),
                          ],
                        }),
                        _ &&
                          !_ &&
                          (0, _.jsx)(`div`, {
                            className: `Q4ZSdOUuSKg-`,
                            children: (0, _.jsx)(_, {
                              eventModel: _,
                              lang: _,
                              bExpandLeft: !0,
                            }),
                          }),
                        !_ && _,
                      ],
                    }),
                    !this.props.disableReadTracking &&
                      !_ &&
                      (0, _.jsx)(_, {
                        onEnter: this.OnEnterVisible,
                        onLeave: this.OnLeaveVisible,
                        options: {
                          rootMargin: `0px 0px -300px 0px`,
                        },
                      }),
                    this.props.bInGamepadUI
                      ? (0, _.jsx)(`div`, {
                          className: _,
                          children: _.GetNameWithFallback(_),
                        })
                      : (0, _.jsx)(_, {
                          eventModel: _,
                          route: _.k_eView,
                          className: _,
                          children: _.GetNameWithFallback(_),
                        }),
                    _.BHasSubTitle(_) &&
                      (0, _.jsx)(`div`, {
                        className: _(`ay-K0NBOIuc-`, `ID9Ds4YdxDc-`),
                        children: _.GetSubTitle(_),
                      }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
              }),
              !(
                !_.BEventCanShowBroadcastWidget() ||
                this.props.bDisableBroadcastPlayer
              ) &&
                (0, _.jsx)(`div`, {
                  className: `hSFWQBRmqTY-`,
                  children: (0, _.jsx)(_.Suspense, {
                    fallback: null,
                    children: (0, _.jsx)(_, {
                      event: this.props.event,
                    }),
                  }),
                }),
              _.BHasTag(`steam_award_nomination_request`) &&
                (0, _.jsx)(_, {
                  event: _,
                  lang: _,
                }),
              _.BHasTag(`steam_award_vote_request`) &&
                (0, _.jsx)(_, {
                  appID: _.appid,
                  bIsEventActionEnabled: _.BIsEventActionEnabled(),
                  voteCategories: _.GetSteamAwardNomineeCategories(),
                }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _(_, _, _ && `Vye1545x6hY-`),
                    onContextMenu: _.IN_CLIENT ? _ : void 0,
                    children: [
                      (0, _.jsx)(_, {
                        text: _,
                        event: _,
                      }),
                      (0, _.jsx)(`span`, {
                        className: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    event: this.props.event,
                  }),
                  !!_.jsondata.read_more_link &&
                    (0, _.jsx)(`div`, {
                      className: _(`Hr-OMRnVpqk-`),
                      children: (0, _.jsx)(_, {
                        className: _(`yYL-OrX9PtQ-`),
                        href: _.jsondata.read_more_link,
                        children: _(`#EventEmail_Button_ClickForMoreDetails`),
                      }),
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      event: _,
                      language: _,
                      strSaleURL: _,
                    }),
                  (0, _.jsx)(_, {
                    appid: _.appid,
                  }),
                ],
              }),
              !_ &&
                (0, _.jsx)(_, {
                  eventModel: _,
                  emoticonStore: _,
                }),
            ],
          }),
        })
      );
    }
  };
_([_], _.prototype, `OnEnterVisible`, null),
  _([_], _.prototype, `OnLeaveVisible`, null),
  (_ = _([_], _));
function _(_) {
  let {
      event: _,
      fnFilterImageURLsForKnownFailures: _,
      fnImageFailureCallback: _,
      eLanguage: _,
      bShouldMaskImages: _,
    } = _,
    _ = _.BImageNeedScreenshotFallback(`background`, _),
    _ = _.type,
    _ = _(_, `background`, _, _.background_main, !_);
  return (
    _ && _ && (_ = _(_)),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _ != 12 &&
          !_ &&
          _ &&
          (0, _.jsx)(_, {
            className: _(`b5t8fHKcG3c-`, _ && `Vye1545x6hY-`),
            rgSources: _,
            onIncrementalError: (_, _, _) => _ && _(_),
          }),
        _ &&
          _.length > 0 &&
          (0, _.jsx)(_, {
            className: `V-UPj6R9FQU-`,
            rgSources: _,
            onIncrementalError: (_, _, _) => _ && _(_),
          }),
      ],
    })
  );
}
var _ = class {
  k_nMaxPerDirection = 3;
  m_nAppID = 0;
  m_clanSteamID = new _();
  m_partnerEventStore;
  m_additionalParams;
  m_rgEvents = [];
  m_eOlderDirection = 1;
  m_eNewerDirection = 1;
  constructor(_) {
    _(this), (this.m_partnerEventStore = _);
  }
  GetEvents() {
    return this.m_rgEvents;
  }
  GetAppID() {
    return this.m_nAppID;
  }
  GetOlderState() {
    return this.m_eOlderDirection;
  }
  GetNewerState() {
    return this.m_eNewerDirection;
  }
  async InitAroundEvent(_, _) {
    let _ = this.m_partnerEventStore;
    (this.m_nAppID = _.appid),
      (this.m_clanSteamID = _.clanSteamID),
      (this.m_rgEvents = []),
      (this.m_eOlderDirection = 2),
      (this.m_eNewerDirection = 2),
      (this.m_additionalParams = _),
      this.m_rgEvents.push(_);
    let _;
    try {
      _ = await _.LoadAdjacentPartnerEventsByEvent(
        _,
        this.m_clanSteamID,
        this.m_nAppID,
        this.k_nMaxPerDirection,
        this.k_nMaxPerDirection,
        this.m_additionalParams,
      );
    } catch {}
    _(() => {
      if (!_ || _.length == 0) {
        (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
        return;
      }
      let _ = _.findIndex((_) => _.GID == _.GID),
        _ = _,
        _ = _ >= 0 ? _.length - _ - 1 : 0;
      (this.m_eNewerDirection = _ >= this.k_nMaxPerDirection ? 1 : 3),
        (this.m_eOlderDirection = _ >= this.k_nMaxPerDirection ? 1 : 3),
        (this.m_rgEvents = _);
    });
  }
  async LoadMoreAtEnd() {
    if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0) return;
    let _ = this.m_rgEvents[this.m_rgEvents.length - 1];
    this.m_eOlderDirection = 2;
    let _;
    try {
      _ = await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
        _,
        this.m_clanSteamID,
        this.m_nAppID,
        0,
        this.k_nMaxPerDirection,
        this.m_additionalParams,
      );
    } catch {}
    _(() => {
      if (!_) {
        this.m_eOlderDirection = 1;
        return;
      }
      let _ = new Set(
        this.m_rgEvents.map((_) => _.GID).filter((_) => _ !== void 0),
      );
      for (let _ of _) {
        let _ = _.GID;
        _ && !_.has(_) && (this.m_rgEvents.push(_), _.add(_));
      }
      this.m_eOlderDirection = _.length >= this.k_nMaxPerDirection ? 1 : 3;
    });
  }
  async LoadMoreAtBeginning() {
    if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0) return;
    let _ = this.m_rgEvents[0];
    this.m_eNewerDirection = 2;
    let _;
    try {
      _ = await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
        _,
        this.m_clanSteamID,
        this.m_nAppID,
        this.k_nMaxPerDirection,
        0,
        this.m_additionalParams,
      );
    } catch {}
    _(() => {
      if (!_) {
        this.m_eNewerDirection = 1;
        return;
      }
      let _ = new Set(
        this.m_rgEvents.map((_) => _.GID).filter((_) => _ !== void 0),
      );
      for (let _ of _.reverse()) {
        let _ = _.GID;
        _ && !_.has(_) && (this.m_rgEvents.unshift(_), _.add(_));
      }
      this.m_eNewerDirection = _.length >= this.k_nMaxPerDirection ? 1 : 3;
    });
  }
};
_([_.shallow], _.prototype, `m_rgEvents`, void 0),
  _([_], _.prototype, `m_eOlderDirection`, void 0),
  _([_], _.prototype, `m_eNewerDirection`, void 0);
export {
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
};
