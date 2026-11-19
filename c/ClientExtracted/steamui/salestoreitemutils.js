import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
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
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { _, _, _, _, _ } from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { _ } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { _, _ } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { _, _, _ } from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
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
} from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _ } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { _, _ } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import "./library.js?contenthash=CVZWwsCP";
import "./chunk~ca0c999570.js?contenthash=BLelXP4B";
import { _ } from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import { _, _ } from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import { _ } from "./chunk~8681f5c764.js?contenthash=CAkdBbB8";
function _(_) {
  return _
    ? _ === `game` ||
        _ === `dlc` ||
        _ === `software` ||
        _ === `music` ||
        _ === `application` ||
        _ === `demo` ||
        _ === `hardware` ||
        _ === `mod` ||
        _ == `video` ||
        _ === `beta` ||
        _ === `advertising`
    : !1;
}
function _(_) {
  return _ == null
    ? !1
    : _ == 0 ||
        _ == 4 ||
        _ == 6 ||
        _ == 11 ||
        _ == 1 ||
        _ == 10 ||
        _ == 2 ||
        _ == 7 ||
        _ == 12 ||
        _ == 14;
}
var _ = _(_(), 1),
  _ = _(),
  _ =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  _ = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  _ = [
    `img`,
    `carousel`,
    `previewyoutube`,
    `looping_media`,
    `roomeffect`,
    `video`,
    `vod`,
    `trailer`,
    `youtubeorvideo`,
    `docimg`,
  ];
_.filter((_) => !_.includes(_));
var _ = void 0;
function _(_) {
  return _ ? _.map((_) => (_ == `*` ? `\\*` : _)).join(`|`) : ((_ ||= _(_)), _);
}
function _(_, _ = null, _ = ` `) {
  let _ = RegExp(`\\[(` + _(_) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return _.replace(_, _);
}
function _(_, _ = null, _ = ``) {
  let _ = `\\[\\/?(?:` + _(_) + `){1,}.*?]`;
  return _.replace(new RegExp(_, `gi`), _);
}
var _ = _.box(void 0);
function _() {
  return _.get();
}
function _(_) {
  _(() => _.set(_));
}
function _() {
  return _.get() || Math.floor(Date.now() / 1e3);
}
function _() {
  let _ = _.get();
  return _ ? new Date(_ * 1e3) : new Date();
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            active: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            start_time: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_time: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_discounts: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            grouped_vote_options: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            groups: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            internal_name: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            localization: {
              _: 9,
              _: _,
            },
            reveal_time: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            release_date_min: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            winner_appid: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            flag: {
              _: 13,
              _: _.readEnum,
              _: _.writeEnum,
            },
            release_date_max: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_type: {
              _: 15,
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
      return `CStore_VoteDefinition`;
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
            discount: {
              _: 2,
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
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            groupid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            group_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            app_discounts: {
              _: 3,
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
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.title || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            title: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            title_linebreak: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            title_award: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            award_description: {
              _: 4,
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
      return `CStore_VoteDefinition_Localization`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            sale_appid: {
              _: 2,
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
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            votes: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            labor_of_love_winners: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
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
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            communityitemid: {
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
      return `SteamAwardsUserVote`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_appid: {
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
      return `CStore_GetUserVotes_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.user_votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_votes: {
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
      return `CStore_GetUserVotes_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sale_appid: {
              _: 3,
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
      return `CStore_SetVote_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.user_votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_votes: {
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
      return `CStore_SetVote_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_updated: {
              _: 3,
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
      return `CSteamAwardsNomination`;
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
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.nominations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            nominations: {
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
      return `CSteamAwards_GetUserNominations_Response`;
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
            code: {
              _: 2,
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
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            nominated_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            source: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CSteamAwards_Nominate_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.nominations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            nominations: {
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
      return `CSteamAwards_Nominate_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
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
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.played_app || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            played_app: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            suggested_events: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            suggested_apps: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            debug_query: {
              _: 4,
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
      return `CSteamAwards_GetNominationRecommendations_Response`;
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
            playtime: {
              _: 2,
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
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
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
            event_gid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 3,
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
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
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
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.generate_new || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            generate_new: {
              _: 1,
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
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            code: {
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
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.GetVoteDefinitions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetVoteDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.SetVote#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SetVote = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.GetUserVotes#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetUserVotes = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetUserNominations#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetUserNominations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetOtherUserNominations#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetOtherUserNominations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.Nominate#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.Nominate = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.GetNominationRecommendations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetNominationShareLink#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetNominationShareLink = _;
})((_ ||= {}));
var _ = {
    bBroadcastEnabled: !1,
    broadcastChatSetting: `hide`,
    default_broadcast_title: `#Broadcast_default_title_dev`,
    localized_broadcast_title: Array(32),
    localized_broadcast_left_image: Array(32),
    localized_broadcast_right_image: Array(32),
    broadcast_whitelist: [],
  },
  _ = `{STEAM_CLAN_IMAGE}`,
  _ = `{STEAM_CLAN_LOC_IMAGE}`;
function _(_) {
  let _ = _.toLowerCase();
  if (_.endsWith(`.jpg`) || _.endsWith(`.jpeg`)) return `image/jpeg`;
  if (_.endsWith(`.png`)) return `image/png`;
  if (_.endsWith(`.gif`)) return `image/gif`;
  if (_.endsWith(`.mp4`)) return `video/mp4`;
  if (_.endsWith(`.webm`)) return `video/webm`;
  if (_.endsWith(`.srt`)) return `text/srt`;
  if (_.endsWith(`.vtt`)) return `text/vtt`;
  if (_.endsWith(`.webp`)) return `image/webp`;
}
function _(_) {
  switch (_) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function _(_) {
  let _ = _(),
    _ = new Image();
  return (
    (_.onload = () => _.resolve(_)),
    (_.onerror = (_) => {
      (console.error(`LoadImage failed to load the image, details`, _),
        _.resolve(void 0));
    }),
    (_.src = _),
    _.promise
  );
}
function _(_) {
  let _ = _(),
    _ = document.createElement(`video`);
  return (
    (_.preload = `metadata`),
    _.addEventListener(`loadedmetadata`, () => _.resolve(_)),
    (_.onerror = (_) => {
      (console.error(`LoadVideo failed to load the video, details`, _),
        _.resolve(void 0));
    }),
    (_.src = _),
    _.promise
  );
}
function _(_) {
  return _.startsWith(`image/`);
}
function _(_) {
  return _.startsWith(`video/`);
}
async function _(_, _) {
  if (_) return _(URL.createObjectURL(_));
  {
    let _ = _(),
      _ = new FileReader();
    ((_.onload = () => _.resolve(_.result ?? void 0)),
      (_.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          _.error,
        ),
          _.resolve(void 0));
      }),
      _.readAsDataURL(_));
    let _ = await _.promise;
    return _ ? _(_.toString()) : void 0;
  }
}
function _(_) {
  return _
    ? _ instanceof HTMLVideoElement
      ? {
          width: _.videoWidth,
          height: _.videoHeight,
        }
      : {
          width: _.width,
          height: _.height,
        }
    : {
        width: 0,
        height: 0,
      };
}
function _(_, _) {
  return `${_}/${_}`;
}
var _ = _.createContext({});
function _() {
  return _.useContext(_);
}
RegExp(`${_.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function _(_, _, _ = 0) {
  return _(_, _, _, _());
}
function _(_, _, _ = 0, _) {
  if (!_ || _.length == 0) return null;
  if (_?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return _.ReplacementTokenToClanImageURL(_);
  if (_?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let _ = _.GetBaseURL(),
      _ = _.substring(_.length + 1),
      _ = parseInt(_.substring(0, _.indexOf(`/`))),
      _ = _.substring(_.indexOf(`/`) + 1),
      _ = _.GenerateURLFromHashAndExt(_, _);
    if (_?.[_(_, _)] === !1) return _;
    let _ = _.GetLocalizedClanImageFileNames(_, _).map(
      (_) => _ + _ + `/` + _ + `?t=` + _,
    );
    return (_.push(_), _);
  }
  return _;
}
var _ = {
    GetBaseURL() {
      return `${_.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${_.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(_) {
      return (
        (_ = _.replace(_, this.GetBaseURL())), _.replace(`http://`, `https://`)
      );
    },
    ExtractHashFromBBCodeURL(_) {
      let _ =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
          _,
        );
      return _?.groups
        ? [_.groups.filename, parseInt(_.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(_) {
      return (_.file_type == null ? null : _(_.file_type)) ?? `.jpg`;
    },
    GetHashAndExt(_) {
      return _ ? _.image_hash + this.GetExtensionString(_) : null;
    },
    GetThumbHashAndExt(_) {
      return _ ? _.thumbnail_hash + this.GetExtensionString(_) : null;
    },
    GetHashFromHashAndExt(_) {
      let _ = _.substring(_.lastIndexOf(`.`));
      return _.substring(0, _.length - _.length);
    },
    GetExtStringFromHashAndExt(_) {
      return _.substring(_.lastIndexOf(`.`));
    },
    GetLocalizedClanImageFileNames(_, _) {
      if (_ == null) return [];
      let _ = this.GetHashFromHashAndExt(_),
        _ = this.GetExtStringFromHashAndExt(_),
        _ = [_ + `/` + _(_) + _];
      return (_ == 4 && _.push(_ + `/` + _(_(_)) + _), _);
    },
    GenerateURLFromHashAndExt(_, _, _ = _.full) {
      return this.GenerateURLFromHashAndExtAndLang(_, _, _, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(_, _, _ = _.full, _, _) {
      _ instanceof _ && (_ = _.GetAccountID());
      let _ = this.GetBaseURL(),
        _ = _ != null && _ != -1;
      if (_ == _.full && !_) return _ + _ + `/` + _;
      {
        let _ = _.substring(_.lastIndexOf(`.`)),
          _ = _.substring(0, _.length - _.length);
        return !_ || _ == 0 || _ != `localized_image_group`
          ? _ + _ + `/` + _ + _ + _
          : _ + _ + `/` + _ + `/` + _(_(_)) + _;
      }
    },
    GetHashAndExtFromURL(_) {
      let _ = this.GetBaseURL();
      return !_?.startsWith(_) ||
        ((_ = _.substring(_.length)), _.indexOf(`/`) == -1)
        ? null
        : ((_ = _.substring(_.indexOf(`/`) + 1)), _);
    },
    GenerateEditableURLFromHashAndExt(_, _, _) {
      let _ =
        _.COMMUNITY_BASE_URL +
        `gid/` +
        _.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        _;
      return (_ && (_ += `&lang=` + _), _);
    },
    GetMimeType(_) {
      return _(_);
    },
    async AsyncGetImageResolution(_, _, _, _, _) {
      let _ =
          _ +
          this.GetExtensionString({
            file_type: _,
          }),
        _ = this.GenerateEditableURLFromHashAndExt(_, _);
      return await this.AsyncGetImageResolutionInternal(_, _, _);
    },
    async AsyncGetImageResolutionInternal(_, _, _) {
      let _ = _(),
        _ = new Image();
      ((_.crossOrigin = `anonymous`),
        (_.onerror = (_) => {
          let _ = {
            success: 2,
          };
          (_ ||
            ((_.err_msg =
              `Load fail on url ` + _ + ` with error: ` + _(_).strErrorMsg),
            console.error(_.err_msg)),
            (_.success = 2),
            _.resolve(_));
        }),
        (_.onload = () => {
          let _ = {
            success: 2,
          };
          ((_.width = _.width),
            (_.height = _.height),
            !(_.width > 0) || !(_.height > 0)
              ? (_(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + _,
                ),
                (_.err_msg = `No resolution reported for url ` + _),
                _.resolve(_))
              : ((_.success = 1), _.resolve(_)));
        }),
        (_.src = _),
        _.token.promise.catch(() => {
          ((_.onload = () => {}),
            (_.onerror = () => {}),
            _.resolve({
              success: 52,
            }));
        }));
      let _,
        _ = new Promise((_, _) => {
          _ = setTimeout(() => _(), 1e4);
        }),
        _;
      try {
        _ = await Promise.race([_, _.promise]);
      } catch {
        _ = {
          success: 16,
          err_msg: `We timed out processing images`,
        };
      } finally {
        clearTimeout(_);
      }
      return _;
    },
    BIsClanImageVideo(_) {
      return _.file_type == 4 || _.file_type == 5;
    },
  },
  _ = (function (_) {
    return (
      (_.full = ``),
      (_.background_main = `_960x311`),
      (_.background_mini = `_480x156`),
      (_.capsule_main = `_400x225`),
      (_.spotlight_main = `_1054x230`),
      _
    );
  })({}),
  _ = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  _ = 39049601,
  _ = 45479024,
  _ = 41316928,
  _ = 4397053;
function _(_, _, _) {
  return _ == 45559995
    ? `charts/topnewreleases/${_}`
    : _ == 45902273
      ? `charts/bestofyear/${_}`
      : _
        ? `sale/${_}`
        : `curator/${_}/sale/${_}`;
}
function _(_, _) {
  return _(_, ``, _).startsWith(`curator/`);
}
function _(_) {
  switch (_) {
    case 29:
    case 27:
    case 2:
    case 4:
    case 5:
    case 6:
    case 8:
    case 7:
    case 9:
    case 11:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 35:
    case 25:
    case 26:
    case 31:
    case 32:
    case 1:
    case 34:
      return !0;
  }
  return !1;
}
function _(_) {
  let _ = `#PartnerEvent_` + _,
    _ = _.Localize(_);
  return _ == _ ? _.Localize(`#PartnerEvent_Other`) : _;
}
var _ = {
  bScheduleEnabled: !1,
  scheduleEntries: [],
};
_(
  [_],
  class {
    m_eventModel;
    m_entry;
    constructor(_, _) {
      ((this.m_eventModel = _), (this.m_entry = _));
    }
    GetEventStartTime() {
      return this.m_entry.rtime_start_specific
        ? this.m_entry.rtime_start_specific
        : (this.m_eventModel.startTime ?? 0) +
            (this.m_entry.delta_from_event_start_seconds ?? 0);
    }
  }.prototype,
  `GetEventStartTime`,
  null,
);
var _ = 99999,
  _ = 593110,
  _ = 1675200,
  _ = 4165890,
  _ = (function (_) {
    return (
      (_[(_.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
      (_[(_.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
      (_[(_.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
      (_[(_.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_EStoreFilterClauseTypeOr = 0)] = `k_EStoreFilterClauseTypeOr`),
      (_[(_.k_EStoreFilterClauseTypeAnd = 1)] = `k_EStoreFilterClauseTypeAnd`),
      (_[(_.k_EStoreFilterClauseTypeStoreTag = 2)] =
        `k_EStoreFilterClauseTypeStoreTag`),
      (_[(_.k_EStoreFilterClauseTypeFeatureTag = 3)] =
        `k_EStoreFilterClauseTypeFeatureTag`),
      (_[(_.k_EStoreFilterClauseTypeLanguage = 4)] =
        `k_EStoreFilterClauseTypeLanguage`),
      (_[(_.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
        `k_EStoreFilterClauseTypeContentDescriptor`),
      (_[(_.k_EStoreFilterClauseTypePrice = 6)] =
        `k_EStoreFilterClauseTypePrice`),
      (_[(_.k_EStoreFilterClauseTypeAppType = 7)] =
        `k_EStoreFilterClauseTypeAppType`),
      (_[(_.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
        `k_EStoreFilterClauseTypeOptInRegistrationTag`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_ESaleTagFilter = 0)] = `k_ESaleTagFilter`),
      (_[(_.k_ELanguage = 1)] = `k_ELanguage`),
      (_[(_.k_EContentDescriptor = 2)] = `k_EContentDescriptor`),
      (_[(_.k_EUserPreference = 3)] = `k_EUserPreference`),
      (_[(_.k_EPrice = 4)] = `k_EPrice`),
      (_[(_.k_EAppType = 5)] = `k_EAppType`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (_[(_.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (_[(_.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (_[(_.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (_[(_.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      _
    );
  })({});
function _(_) {
  _.section_type === `crosspromotesalepage` &&
    !_.sale_page_cross_promo_sales &&
    (_.sale_page_cross_promo_event_gid ||
      _.sale_page_cross_promo_clan_account_id ||
      _.sale_page_cross_promo_featured_app_tagid) &&
    ((_.sale_page_cross_promo_sales = [
      {
        event_gid: _.sale_page_cross_promo_event_gid,
        clan_account_id: _.sale_page_cross_promo_clan_account_id,
        featured_app_tagid: _.sale_page_cross_promo_featured_app_tagid,
      },
    ]),
    delete _.sale_page_cross_promo_event_gid,
    delete _.sale_page_cross_promo_clan_account_id,
    delete _.sale_page_cross_promo_featured_app_tagid);
}
function _(_) {
  switch (_) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
      return !0;
  }
  return !1;
}
var _ = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function _(_) {
  _.sale_sections?.forEach((_, _) => {
    ((_.localized_label &&= _(_.localized_label, 32, null)),
      _.section_type === `trailercarousel` && (_.show_as_carousel = !1),
      _(_),
      (_.sale_sections[_] = {
        ..._,
        ..._,
      }));
  });
}
var _ = {
    localized_subtitle: Array(32),
    localized_summary: Array(32),
    localized_title_image: Array(32),
    localized_capsule_image: Array(32),
    bSaleEnabled: !1,
    sale_show_creator: !1,
    sale_sections: [],
    sale_browsemore_text: ``,
    sale_browsemore_url: ``,
    sale_browsemore_color: ``,
    sale_browsemore_bgcolor: ``,
    localized_sale_header: Array(32),
    localized_sale_overlay: Array(32),
    localized_sale_product_banner: Array(32),
    localized_sale_product_mobile_banner: Array(32),
    localized_sale_logo: Array(32),
    sale_font: ``,
    sale_background_color: ``,
    sale_header_offset: 530,
    referenced_appids: [],
    ..._,
    ..._,
  },
  _ = `old_announce_`;
function _(_, _, _) {
  let _ = (_) => _.includes(_);
  return _(`steam_award_nomination_request`)
    ? _(`#PartnerEvent_SteamAwardNominations`)
    : _(`steam_award_vote_request`)
      ? _(`#PartnerEvent_SteamAwardVoteRequest`)
      : _(`steam_game_festival_artist_statement`)
        ? _(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : _(`steam_game_festival_office_hour`)
          ? _(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : _(`steam_game_festival_broadcast`) ||
              (_.some((_) => _?.startsWith(`sale_nextfest_`)) && _ == 11)
            ? _(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : _(`vo_marketing_message`) && _
              ? _(`#PartnerEvent_MM_MajorUpdate`)
              : _(_);
}
var _ = [
    `workshop`,
    `patchnotes`,
    `contenthub`,
    `skip_megaphone`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
    `enable_steam_china`,
    `disable_steam_global`,
    `adult_only_content`,
    `stablechannel`,
    `betachannel`,
    `previewchannel`,
  ],
  _ = [20, 31, 34],
  _ = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  _ = [_.k_ESteamRealmGlobal],
  _ = [_.k_ESteamRealmChina],
  _ = [_.k_ESteamRealmGlobal, _.k_ESteamRealmChina],
  _ = [],
  _ = class _ {
    constructor() {
      _(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new _();
    forumTopicGID = void 0;
    clanSteamIDOriginal = void 0;
    type = 1;
    appid = 0;
    name = new Map();
    description = new Map();
    timestamp_loc_updated = new Map();
    createTime = void 0;
    startTime = void 0;
    endTime = void 0;
    visibilityStartTime = void 0;
    visibilityEndTime = void 0;
    m_nBuildID = void 0;
    m_strBuildBranch = void 0;
    postTime = void 0;
    visibility_state = 0;
    broadcaster = void 0;
    jsondata = _;
    nCommentCount = 0;
    nVotesUp = 0;
    nVotesDown = 0;
    comment_type;
    gidfeature;
    gidfeature2;
    featured_app_tagid;
    bOldAnnouncement = !1;
    announcementClanSteamID = void 0;
    loadedAllLanguages = !1;
    bLoaded = !1;
    deleteInProgress = !1;
    vecTags = [];
    creator_steamid;
    last_update_steamid = void 0;
    rtime32_last_modified = void 0;
    rtime32_last_solr_search_col_updated = void 0;
    rtime32_last_local_modification = void 0;
    rtime32_moderator_reviewed = void 0;
    video_preview_type = void 0;
    video_preview_id = void 0;
    has_live_stream;
    live_stream_viewer_count;
    m_overrideCurrentDay = void 0;
    fnGetLocalizedGroupImages;
    BIsPartnerEvent() {
      return !this.bOldAnnouncement && !!this.GID;
    }
    static FromJSON(_) {
      let _ = new _(),
        _ = JSON.parse(_);
      return (
        Object.assign(_, _),
        (_.name = new Map(_.name)),
        (_.description = new Map(_.description)),
        (_.vecTags = [...(_.vecTags ?? _.tags ?? [])]),
        (_.clanSteamID = new _(_.clanSteamID)),
        _(
          _.clanSteamID && _.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + _.clanSteamID.ConvertTo64BitString(),
        ),
        _.broadcaster &&
          ((_.broadcaster = new _(_.broadcaster)),
          _(
            _.broadcaster && _.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              _.broadcaster.ConvertTo64BitString(),
          )),
        _(_.jsondata),
        _
      );
    }
    static FromCClanEventData(_, _) {
      let _ = new _();
      ((_.GID = _.gid),
        (_.clanSteamID = new _(_.clan_steamid)),
        _.name.set(_, _.event_name ?? ``),
        (_.type = _.event_type),
        (_.appid = _.appid ?? 0),
        (_.startTime = _.rtime32_start_time),
        (_.endTime = _.rtime32_end_time),
        (_.nCommentCount = _.comment_count ?? 0),
        (_.creator_steamid = _.creator_steamid),
        (_.last_update_steamid = _.last_update_steamid),
        (_.jsondata = JSON.parse(_.jsondata ?? `{}`)),
        _(_.jsondata),
        (_.rtime32_last_local_modification = _.rtime32_last_modified),
        (_.visibility_state = _.published
          ? _.hidden
            ? _.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (_.createTime = _.rtime_created),
        (_.m_nBuildID = _.build_id),
        (_.m_strBuildBranch = _.build_branch),
        (_.visibilityStartTime = _.rtime32_visibility_start),
        (_.visibilityEndTime = _.rtime32_visibility_end),
        (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
        (_.featured_app_tagid = _.featured_app_tagid),
        _.broadcaster_accountid &&
          (_.broadcaster = _.InitFromAccountID(
            _.broadcaster_accountid,
            _.EUNIVERSE,
          )),
        (_.AnnouncementGID = _.announcement_body?.gid ?? `0`));
      let _ = _.clan_steamid_original;
      return (
        _
          ? (_.clanSteamIDOriginal = new _(_))
          : _.announcement_body?.clanid &&
            (_.clanSteamIDOriginal = _.InitFromClanID(
              Number(_.announcement_body.clanid),
              _.EUNIVERSE,
            )),
        (_.postTime = _.announcement_body?.posttime),
        (_.forumTopicGID = _.forum_topic_id),
        _.name.set(_, _.announcement_body?.headline ?? ``),
        _.description.set(_, _.announcement_body?.body ?? ``),
        (_.nCommentCount = _.comment_count ?? 0),
        (_.vecTags = [...(_.announcement_body?.tags ?? [])]),
        (_.forumTopicGID = _.announcement_body?.forum_topic_id),
        (_.nVotesUp = _.announcement_body?.voteupcount ?? 0),
        (_.nVotesDown = _.announcement_body?.votedowncount ?? 0),
        _
      );
    }
    toJSON(_) {
      let _ = {};
      return (
        Object.assign(_, this),
        (_.name = Array.from(this.name)),
        (_.description = Array.from(this.description)),
        (_.vecTags = Array.from(this.vecTags)),
        (_.tags = _.vecTags),
        (_.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
        this.broadcaster &&
          (_.broadcaster = this.broadcaster.ConvertTo64BitString()),
        _
      );
    }
    clone(_ = !1) {
      let _ = new _();
      if (
        ((_.GID = this.GID),
        (_.AnnouncementGID = this.AnnouncementGID),
        (_.clanSteamID = this.clanSteamID),
        (_.clanSteamIDOriginal = this.clanSteamIDOriginal),
        (_.bOldAnnouncement = this.bOldAnnouncement),
        (_.nCommentCount = this.nCommentCount),
        (_.nVotesUp = this.nVotesUp),
        (_.nVotesDown = this.nVotesDown),
        (_.forumTopicGID = this.forumTopicGID),
        (_.comment_type = this.comment_type),
        (_.gidfeature = this.gidfeature),
        (_.gidfeature2 = this.gidfeature2),
        (_.featured_app_tagid = this.featured_app_tagid),
        (_.creator_steamid = this.creator_steamid),
        (_.last_update_steamid = this.last_update_steamid),
        (_.rtime32_last_modified = this.rtime32_last_modified),
        (_.rtime32_last_solr_search_col_updated =
          this.rtime32_last_solr_search_col_updated),
        (_.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
        (_.type = this.type),
        (_.appid = this.appid),
        (_.name = new Map()),
        this.name.forEach((_, _) => {
          _.name.set(_, _);
        }),
        (_.description = new Map()),
        this.description.forEach((_, _) => {
          _.description.set(_, _);
        }),
        (_.timestamp_loc_updated = new Map()),
        this.timestamp_loc_updated.forEach((_, _) => {
          _.timestamp_loc_updated.set(_, _);
        }),
        (_.createTime = this.createTime ?? 0),
        (_.startTime = this.startTime),
        (_.endTime = this.endTime),
        (_.visibilityStartTime = this.visibilityStartTime),
        (_.visibilityEndTime = this.visibilityEndTime),
        (_.postTime = this.postTime),
        (_.visibility_state = this.visibility_state),
        (_.loadedAllLanguages = this.loadedAllLanguages),
        (_.bLoaded = this.bLoaded),
        (_.broadcaster = this.broadcaster
          ? new _(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (_.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (_.vecTags = []),
        _
          ? ((_.m_nBuildID = this.m_nBuildID),
            (_.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((_) => _.vecTags.push(_)))
          : this.vecTags.forEach((_) => {
              _.includes(_) && _.vecTags.push(_);
            }),
        _.jsondata.email_setting)
      ) {
        let _ = 100;
        for (let _ of _.jsondata.email_setting.sections)
          _.unique_id || ((_.unique_id = `email_section_${_}`), _++);
      }
      return _;
    }
    GetLastReferencedSaleDayFromCapsules(_, _) {
      let _ = _;
      return (
        _?.forEach((_) => {
          _.visibility_index !== void 0 &&
            (_ =
              _ === void 0
                ? _.visibility_index
                : Math.max(_, _.visibility_index));
        }),
        _
      );
    }
    GetLastReferencedSaleDay() {
      let _;
      for (let _ of this.GetSaleSections())
        if (_.section_type === `tabs`) {
          if ((_.tabs?.length ?? 0) > 0)
            for (let _ of _.tabs ?? [])
              _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
        } else _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
      return (
        (this.jsondata.sale_num_headers ?? 0) > 1 &&
          (_ == null || _ < (this.jsondata.sale_num_headers ?? 0)) &&
          (_ = this.jsondata.sale_num_headers),
        _
      );
    }
    GetDayIndexFromEventStart(_ = _()) {
      let _ = 0;
      (this.startTime !== void 0 &&
        _ >= this.startTime &&
        (_ = Math.floor((_ - this.startTime) / 86400)),
        this.m_overrideCurrentDay !== void 0 &&
          this.m_overrideCurrentDay >= 0 &&
          (_ = this.m_overrideCurrentDay));
      let _ = this.GetLastReferencedSaleDay() || 0;
      return Math.min(_, _);
    }
    GetNameWithFallback(_) {
      let _ = _.GetELanguageFallback(_);
      return this.name.get(_) || this.name.get(_);
    }
    BInRealmGlobal() {
      return !this.BHasTag(`disable_steam_global`);
    }
    BInRealmChina() {
      return this.BHasTag(`enable_steam_china`);
    }
    BIsLanguageValidForRealms(_) {
      return !!(
        (this.BInRealmGlobal() &&
          _.IsELanguageValidInRealm(_, _.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          _.IsELanguageValidInRealm(_, _.k_ESteamRealmChina))
      );
    }
    GetImgArray(_) {
      let _ = [];
      if (
        ((_ === `background` || _ == `localized_title_image`) &&
          (_ = this.jsondata.localized_title_image),
        _ === `capsule`)
      )
        _ = this.jsondata.localized_capsule_image;
      else if (_ === `spotlight`) _ = this.jsondata.localized_spotlight_image;
      else if (_ === `email_full` || _ === `email_centered`)
        _ = this.jsondata.email_setting
          ? this.jsondata.email_setting.sections[0].localized_image
          : [];
      else if (_ === `broadcast_left`)
        _ = this.jsondata.localized_broadcast_left_image;
      else if (_ === `broadcast_right`)
        _ = this.jsondata.localized_broadcast_right_image;
      else if (_ === `sale_header`) {
        if ((this.jsondata.sale_num_headers ?? 0) > 1) {
          let _ = Math.min(
            (this.jsondata.sale_num_headers ?? 0) - 1,
            this.GetDayIndexFromEventStart(),
          );
          _ = this.jsondata.localized_per_day_sales_header?.[_];
        } else _ = this.jsondata.localized_sale_header;
      } else
        _ === `sale_logo`
          ? (_ = this.jsondata.localized_sale_logo)
          : _ === `sale_overlay`
            ? (_ = this.jsondata.localized_sale_overlay)
            : _ === `sale_cross_promo_logo`
              ? (_ = this.jsondata.localized_sale_cross_promo_logo_image)
              : _.includes(_)
                ? (_ = this.fnGetLocalizedGroupImages?.())
                : _ === `product_banner`
                  ? (_ = this.jsondata.localized_sale_product_banner)
                  : _ === `product_mobile_banner`
                    ? (_ = this.jsondata.localized_sale_product_mobile_banner)
                    : _ === `bestofyear_banner`
                      ? (_ = this.jsondata.localized_bestofyear_banner)
                      : _ === `bestofyear_banner_mobile`
                        ? (_ = this.jsondata.localized_bestofyear_banner_mobile)
                        : _ === `localized_store_app_spotlight`
                          ? (_ = this.jsondata.localized_store_app_spotlight)
                          : _ === `localized_store_app_spotlight_mobile` &&
                            (_ =
                              this.jsondata
                                .localized_store_app_spotlight_mobile);
      return _;
    }
    GetImageURL(_, _ = 0, _ = _.full) {
      let _ = this.GetImgArray(_),
        _ = _ && _.length > _ && _[_] != null;
      return _ && _[_]?.startsWith(`http`)
        ? _[_]
        : _
          ? _.GenerateURLFromHashAndExt(this.clanSteamID, _[_] ?? ``, _)
          : void 0;
    }
    GetImageHash(_, _ = 0) {
      let _ = this.GetImgArray(_);
      return _ && _.length > _ && _[_] != null
        ? _[_].substr(0, _[_].length - 4)
        : null;
    }
    GetImageHashAndExt(_, _ = 0) {
      let _ = this.GetImgArray(_);
      return _ && _.length > _ && _[_] != null ? _[_] : null;
    }
    BHasSomeImage(_) {
      let _ = this.GetImgArray(_);
      return !!_ && _.some((_) => _ != null && _.length > 0);
    }
    BHasImage(_, _) {
      let _ = this.GetImgArray(_);
      return !!_ && _.length > _ && _[_] != null;
    }
    BHasAnnouncementGID() {
      return (
        this.AnnouncementGID !== null &&
        this.AnnouncementGID !== void 0 &&
        this.AnnouncementGID.length > 1
      );
    }
    GetAnnouncementGID() {
      return this.AnnouncementGID;
    }
    BHasForumTopicGID() {
      return (
        this.forumTopicGID !== null &&
        this.forumTopicGID !== void 0 &&
        this.forumTopicGID.length > 1
      );
    }
    GetForumTopicURL(_) {
      return this.BHasForumTopicGID()
        ? this.appid
          ? _.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : _
            ? _.COMMUNITY_BASE_URL +
              `groups/` +
              _ +
              `/eventcomments/` +
              this.forumTopicGID
            : _.COMMUNITY_BASE_URL +
              `gid/` +
              this.clanSteamID.ConvertTo64BitString() +
              `/eventcomments/` +
              this.forumTopicGID
        : ``;
    }
    GetDiscussionURL(_) {
      return this.BHasForumTopicGID()
        ? this.GetForumTopicURL(_)
        : this.GetLegacyAnnouncementCommentsURL();
    }
    GetLegacyAnnouncementCommentsURL() {
      let _ = this.clanSteamIDOriginal ?? this.clanSteamID;
      return !this.BHasAnnouncementGID() || !_ || !_.BIsValid()
        ? ``
        : _.COMMUNITY_BASE_URL +
            `gid/` +
            _.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(_ = _()) {
      return _ < (this.startTime ?? 0);
    }
    BHasEventEnded(_ = _()) {
      return (this.endTime ?? 0) < _;
    }
    UpdateVoteCount(_, _) {
      _ == `up`
        ? (this.nVotesUp = _(this.nVotesUp + _, 0, 2 ** 53 - 1))
        : _ == `down` &&
          (this.nVotesDown = _(this.nVotesDown + _, 0, 2 ** 53 - 1));
    }
    GetImageFromBeginningOfDescription(_, _) {
      let _ = this.GetDescriptionWithFallback(_);
      if (_) {
        let _ = _.indexOf(`[img]`);
        if (_ !== -1 && _ < _) {
          _ += 5;
          let _ = _.indexOf(`[/img]`, _);
          if (_ != -1) {
            let _ = _.substring(_, _).trim();
            if (_.length != 0) return _.ReplacementTokenToClanImageURL(_);
          }
        }
      }
      return null;
    }
    GetAppIDOrReferenceAppID() {
      return this.appid ? this.appid : this.jsondata?.referenced_appids?.[0];
    }
    BImageNeedScreenshotFallback(_, _) {
      let _ = this.GetImageURL(_, _);
      if (!_ || _.length == 0) {
        let _ = _.GetELanguageFallback(_);
        _ != _ && (_ = this.GetImageURL(_, _));
      }
      return !_ || _.length == 0;
    }
    GetDescriptionWithFallback(_) {
      let _ = _.GetELanguageFallback(_);
      return this.description.get(_) || this.description.get(_);
    }
    BIsImageSafeForAllAges(_, _, _ = {}) {
      let _ = _.GetELanguageFallback(_);
      return (
        this.GetImageURL(_, _) != null ||
        (_ != _ && this.GetImageURL(_, _) != null) ||
        (this.appid && _.bAppHasAgeSafeScreenshots) ||
        (!this.appid &&
          _.clanInfo &&
          ((_.clanInfo.is_creator_home && !_.clanInfo.is_ogg) ||
            _.clanInfo.is_curator))
      );
    }
    BIsVisibleEvent(_ = _()) {
      let _ = Math.floor(_);
      return (
        this.visibility_state == 3 ||
        (this.visibility_state == 2 &&
          _ > (this.visibilityStartTime ?? 0) &&
          ((this.visibilityEndTime ?? 0) < 10 ||
            _ < (this.visibilityEndTime ?? 0)))
      );
    }
    BIsStagedEvent() {
      return this.visibility_state == 1;
    }
    BIsUnlistedEvent() {
      return this.visibility_state == 3;
    }
    GetStartTimeAndDateUnixSeconds() {
      return this.startTime ?? 0;
    }
    GetEndTimeAndDateUnixSeconds() {
      return this.endTime ?? 0;
    }
    GetPostTimeAndDateUnixSeconds() {
      return this.postTime ?? 0;
    }
    GetVisibilityStartTimeAndDateUnixSeconds() {
      return this.visibilityStartTime ?? 0;
    }
    BIsEventActionEnabled(_ = _()) {
      return (
        !!this.jsondata.action_end_time &&
        (this.jsondata.action_end_time > _ ||
          (this.jsondata.action_end_time == 1575396e3 && 1606845600 > _))
      );
    }
    BHasSubTitle(_) {
      if (
        !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        _ >= this.jsondata.localized_subtitle.length
      )
        return !1;
      let _ = this.jsondata.localized_subtitle[_];
      return _ != null && _ != ``;
    }
    GetSubTitle(_) {
      return !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        _ >= this.jsondata.localized_subtitle.length
        ? ``
        : this.jsondata.localized_subtitle[_] || ``;
    }
    GetSubTitleWithLanguageFallback(_) {
      return this.jsondata
        ? _.GetWithFallback(this.jsondata.localized_subtitle, _)
        : ``;
    }
    GetSubTitleWithSummaryFallback(_) {
      return (
        _.GetWithFallback(this.jsondata?.localized_subtitle, _) ||
        _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_))
      );
    }
    GetSummaryWithFallback(_, _) {
      return (
        _.GetWithFallback(this.jsondata?.localized_summary, _) ||
        _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_), _)
      );
    }
    GetSummary(_) {
      return _.Get(this.jsondata?.localized_summary ?? [], _);
    }
    BHasSummary(_) {
      return !!this.GetSummary(_);
    }
    static GenerateSummaryFromText(_, _) {
      return !_ || _.trim().length == 0
        ? ``
        : ((_ = _(_, [
            `img`,
            `h1`,
            `h2`,
            `h3`,
            `spoiler`,
            `table`,
            `previewyoutube`,
            `looping_media`,
            `roomeffect`,
            `sticker`,
          ])),
          (_ = _(_, [`p`], ` `)),
          (_ = _(_)),
          (_ = _(_)),
          _(_, _ || 180));
    }
    BHasTag(_) {
      return this.vecTags.indexOf(_) != -1;
    }
    BHasTagStartingWith(_) {
      return this.vecTags.some((_) => _?.startsWith(_));
    }
    BIsOGGEvent() {
      return !!this.appid && this.appid > 0;
    }
    BShowLibrarySpotlight(_) {
      if (!_) return !!this.jsondata.library_spotlight;
      if (!this.jsondata.library_spotlight || _.includes(this.type)) return !1;
      let _ = new Date().getTime() / 1e3;
      return !(
        (_.includes(this.type) && this.endTime && _ > this.endTime) ||
        (this.startTime && _ > this.startTime + _.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(_, _ = _()) {
      if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
      let _ = this.endTime ? this.endTime : _ + 3600;
      return (
        this.BHasBroadcastEnabled() &&
        !!this.jsondata.broadcast_whitelist &&
        this.jsondata.broadcast_whitelist.length > 0 &&
        (_ || ((this.startTime ?? 0) - 600 <= _ && _ < _))
      );
    }
    BHasBroadcastForceBanner() {
      return !!this.jsondata.broadcast_force_banner;
    }
    BSaleShowBroadcastAtTopOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some((_) => _.section_type == `broadcast`)
      );
    }
    BSaleShowCuratorRecommendationAtBottomOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some(
          (_) => _.section_type == `curator_recommendation`,
        )
      );
    }
    GetBroadcastChatVisibility() {
      return this.jsondata.broadcastChatSetting || `hide`;
    }
    GetBroadcastTitle(_) {
      return (
        _.GetWithFallback(this.jsondata.localized_broadcast_title, _) ||
        _(
          this.jsondata.default_broadcast_title ??
            `#Broadcast_default_title_dev`,
        )
      );
    }
    GetBroadcastWhitelist() {
      return this.jsondata.broadcast_whitelist ?? [];
    }
    GetBroadcastWhitelistAsSteamIDs() {
      return (
        this.jsondata.broadcast_whitelist?.map((_) =>
          _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
        ) ?? []
      );
    }
    BIsBroadcastAccountIDWhiteListed(_) {
      return (this.jsondata.broadcast_whitelist || []).includes(Number(_));
    }
    BHasSaleEnabled() {
      return !!this.jsondata.bSaleEnabled;
    }
    BHasSaleVanity() {
      return !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id;
    }
    GetSaleVanity() {
      return this.jsondata.sale_vanity_id ?? ``;
    }
    BHasSaleUpdateLandingPageVanity() {
      return (
        !!this.jsondata.bSaleEnabled &&
        !!this.jsondata.sale_update_landing_page_vanity_id
      );
    }
    GetSaleUpdateLandingPageVanity() {
      return this.jsondata.sale_update_landing_page_vanity_id ?? ``;
    }
    GetSaleURL(_) {
      if (!this.jsondata.bSaleEnabled) return null;
      if (this.jsondata.sale_update_landing_page_vanity_id)
        return (
          _.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          _.STORE_BASE_URL +
          `newshub/` +
          (this.appid
            ? `app/` + this.appid
            : `group/` + this.clanSteamID.GetAccountID()) +
          `/view/` +
          this.GID
        );
      if (this.BUsesContentHubForItemSource()) {
        let _ = this.jsondata.source_content_hub;
        return _
          ? typeof _ == `string`
            ? _.STORE_BASE_URL + `category/` + _
            : _.type == `category`
              ? _.STORE_BASE_URL + `category/` + _.category
              : _.type == `tags`
                ? _.STORE_BASE_URL + `tags/` + (_() || `en`) + `/` + _.tagid
                : _.type == `freetoplay`
                  ? _.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : _.type == `earlyaccess`
                    ? _.STORE_BASE_URL + `genre/Early%20Access/`
                    : _.STORE_BASE_URL + _.type
          : _.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let _ = this.clanSteamID.GetAccountID(),
        _ = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        _ = this.GetSaleVanity();
      return _ && _(_, _) ? _ + `sale/` + _ : _.STORE_BASE_URL + _(_, _, _);
    }
    BHasEmailEnabled() {
      return (
        !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
      );
    }
    GetSaleSections() {
      return this.jsondata.sale_sections ?? [];
    }
    GenerateDynamicSaleSections(_, _, _, _, _, _) {
      let _ = [],
        _ = {
          section_type: `unselected_empty`,
          capsules: [],
          events: [],
          links: [],
          localized_label: [],
          default_label: ``,
        },
        _ = _ + 10;
      return (
        _ &&
          _.push({
            ..._,
            section_type: `footer_self_creator_home`,
            unique_id: _++,
            curator_clan_id: this.clanSteamID.GetAccountID(),
          }),
        _ &&
          _.push({
            ..._,
            section_type: `footer_browse_more`,
            unique_id: _++,
          }),
        _ &&
          _.push(this.GenerateDynamicCreatorHomeItemBrowserSection(_++, _, _)),
        _ &&
          _.push({
            ..._,
            section_type: `footer_default_social_share`,
            unique_id: _++,
          }),
        _ &&
          _.push({
            ..._,
            section_type: `nextfest_header`,
            unique_id: _++,
          }),
        _
      );
    }
    GetSaleSectionIncludingFooterSections(_ = 0) {
      let _ = this.jsondata?.sale_show_creator,
        _ = this.jsondata.sale_browse_more_button,
        _ =
          this.GetSaleSectionsByType(`social_share`).length == 0 &&
          !this.jsondata.sale_default_social_media_disabled,
        _ = this.GetEventType() == 36,
        _ = this.BShowNextFestHeader(!0);
      return _ || _ || _ || _ || _
        ? [
            ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, _, _),
            ...this.GetSaleSections(),
            ...this.GenerateDynamicSaleSections(!!_, !!_, _, _, !1, _),
          ]
        : this.GetSaleSections();
    }
    GetSaleSectionByID(_, _ = 0) {
      return _ > 99999
        ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, _).find(
            (_) => _.unique_id == _,
          )
        : this.jsondata.sale_sections?.find((_) => _.unique_id == _);
    }
    GetSaleSectionCount() {
      return this.jsondata.sale_sections?.length ?? 0;
    }
    GetSaleSectionsByType(_) {
      return (
        this.jsondata.sale_sections?.filter((_) => _.section_type == _) ?? []
      );
    }
    GetLastUpdateTime() {
      return this.rtime32_last_modified ?? 0;
    }
    GetLastUpdaterSteamIDStr() {
      return this.last_update_steamid ?? ``;
    }
    GetSaleSectionFirstMatchByType(_) {
      let _ = this.jsondata.sale_sections?.length ?? 0;
      if (_ != 0) {
        for (let _ = 0; _ < _; ++_)
          if (this.jsondata.sale_sections[_].section_type === _)
            return this.jsondata.sale_sections[_];
      }
    }
    static AccumulateCapsuleListIDs(_, _, _, _) {
      _ &&
        _.forEach((_) => {
          _ && _.type && _.has(_.type) && (!_ || _(_._)) && _.add(_._);
        });
    }
    GetSaleItemOfType(_, _) {
      if (!this.jsondata.sale_sections) return new Set();
      let _ = new Set(_),
        _ = new Set();
      return (
        _(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((_) => {
          _.AccumulateCapsuleListIDs([_.capsule], _, _, _);
        }),
        this.jsondata.sale_sections.forEach((_) => {
          if (_(_.section_type))
            _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
          else if (_.section_type === `tabs` && _.tabs)
            for (let _ of _.tabs)
              _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
        }),
        _
      );
    }
    GetSaleItemCountOfType(_, _) {
      return this.GetSaleItemOfType(_, _).size;
    }
    GetSaleFeaturedAppsCount(_) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        _,
      );
    }
    GetSaleFeaturedAppsAndDemosCount(_) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        _,
      );
    }
    GetSaleFeaturedBundlesCount(_) {
      return this.GetSaleItemCountOfType([`bundle`], _);
    }
    GetSaleFeaturedPackagesCount(_) {
      return this.GetSaleItemCountOfType([`sub`], _);
    }
    GetSaleFeaturedApps(_) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        _,
      );
    }
    GetSaleFeaturedAppsAndDemos(_) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        _,
      );
    }
    GetSaleFeaturedBundles(_) {
      return this.GetSaleItemOfType([`bundle`], _);
    }
    GetSaleFeaturedPackages(_) {
      return this.GetSaleItemOfType([`sub`], _);
    }
    GetTaggedItems() {
      return this.jsondata.tagged_items || [];
    }
    BHasScheduleEnabled() {
      return this.jsondata.bScheduleEnabled;
    }
    GetEventType() {
      return this.type;
    }
    GetEventTypeAsString() {
      return _(this.type);
    }
    GetCategoryAsString(_) {
      return _(this.type, this.vecTags, _);
    }
    GetAllTags() {
      return this.vecTags;
    }
    BMatchesAllTags(_) {
      let _ = !0;
      return (
        _?.forEach((_) => {
          this.vecTags.includes(_) || (_ = !1);
        }),
        _
      );
    }
    BAllowedSteamStoreSpotlight() {
      return !!this.jsondata.store_spotlight;
    }
    BHasLibaryHomeSpotlight() {
      return !!this.jsondata.library_home_spotlight;
    }
    GetSteamAwardCategory() {
      return this.jsondata.steam_award_category_suggestion ?? 0;
    }
    GetSteamAwardNomineeCategories() {
      return this.jsondata.steam_award_category_voteids ?? [];
    }
    BIsLockedToGameOwners() {
      return !!this.jsondata.ownership_requirement_info?.bLockedToAppOwners;
    }
    GetRequiredAppIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
        : [];
    }
    GetRequiredPackageIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
        : [];
    }
    BUseSubscriptionLayout() {
      return !!this.jsondata.sale_use_subscription_layout;
    }
    BIsLockedToPartnerAppRights() {
      return !!this.jsondata.app_right_requirement_info
        ?.bLockedToPartnerAppRights;
    }
    GetRequiredPartnerAppRights() {
      return this.jsondata.app_right_requirement_info;
    }
    GetValveAccessLog() {
      return Array.isArray(this.jsondata.valve_access_log)
        ? this.jsondata.valve_access_log
        : [];
    }
    BUsesContentHubForItemSource() {
      return (
        this.jsondata.item_source_type === 1 &&
        !!this.jsondata.source_content_hub
      );
    }
    GetContentHubType() {
      if (this.BUsesContentHubForItemSource())
        return this.jsondata.source_content_hub == null
          ? `games`
          : typeof this.jsondata.source_content_hub == `string`
            ? `category`
            : this.jsondata.source_content_hub.type;
    }
    GetContentHubCategory() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? this.jsondata.source_content_hub
          : this.jsondata.source_content_hub.category;
    }
    GetContentHubTag() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? 0
          : this.jsondata.source_content_hub.tagid;
    }
    GetContentHub() {
      return typeof this.jsondata.source_content_hub == `string`
        ? {
            type: `category`,
            category: this.jsondata.source_content_hub,
          }
        : this.jsondata.source_content_hub;
    }
    BContentHubDiscountedOnly() {
      return !!this.jsondata.content_hub_discounted_only;
    }
    BIsBackgroundImageGroupingEnabled() {
      return !!this.jsondata.sale_background_img_groups?.enabled;
    }
    GetSalePageGroupDefinition() {
      return this.jsondata.sale_background_img_groups;
    }
    GetSalePageBackgroundImageGroupCount() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
        : 0;
    }
    GetAllSalePageGroups() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups
        : [];
    }
    GetSalePageBackgroundGroup(_) {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups?.[_]
        : void 0;
    }
    GetIncludedRealmList() {
      let _ = this.BInRealmGlobal(),
        _ = this.BInRealmChina();
      return (
        _(
          _ || _,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        _ && _ ? _ : _ ? _ : _ ? _ : _
      );
    }
    BIsValidForRealm(_) {
      return this.GetIncludedRealmList().includes(_);
    }
    BIsNextFest(_ = !1) {
      let _ = this.jsondata.sale_vanity_id?.toLowerCase(),
        _ = new _(this.clanSteamID).GetAccountID();
      return !(
        !_ ||
        _ != 39049601 ||
        !_.startsWith(`nextfest`) ||
        (_ && (_.endsWith(`preview`) || _.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(_) {
      return _ && _.is_valve_email
        ? this.BIsNextFest(!1)
        : this.BIsNextFest(!0) &&
            !!this.startTime &&
            this.startTime > new Date(`2026-03-01`).getTime() / 1e3;
    }
    GenerateDynamicCreatorHomeItemBrowserSection(_, _, _) {
      let _ = _ >= 7;
      return {
        ..._,
        section_type: `sale_item_browser`,
        unique_id: _,
        item_browse_section_data: {
          enable_search: !0,
          tabs: [
            `all_released`,
            `popularpurchased`,
            `all_upcoming`,
            `discounted`,
          ],
          prefer_assets_without_overrides: !1,
        },
        prefer_assets_without_overrides: !1,
        enable_faceted_browsing: _,
        min_capsule_matches_for_facet_values: 5,
        max_facet_values_for_facet: 5,
        background_gradient_top: `#0000006b`,
        background_gradient_bottom: `#0000006b`,
        facet_sort_order: 1,
        cap_item_count: 24,
        show_more_count: 48,
        facet_auto_generate_options: {
          only_facets: [
            {
              loc_token: `#App_Taxonomy_Survey_QSuperGenreTitle`,
            },
            {
              loc_token: `#AppTypeLabelTitle`,
              only_values: [
                `#AppTypeLabel_game`,
                `#AppTypeLabel_dlc`,
                `#AppTypeLabel_demo`,
                `#AppTypeLabel_music`,
              ],
              initially_selected_values: [`#AppTypeLabel_game`],
            },
            {
              loc_token: `#Sale_Preferences`,
            },
          ],
          initially_expanded_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
          prioritized_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
        },
      };
    }
  };
(_([_], _.prototype, `GID`, void 0),
  _([_], _.prototype, `AnnouncementGID`, void 0),
  _([_], _.prototype, `forumTopicGID`, void 0),
  _([_], _.prototype, `type`, void 0),
  _([_], _.prototype, `appid`, void 0),
  _([_], _.prototype, `name`, void 0),
  _([_], _.prototype, `description`, void 0),
  _([_], _.prototype, `timestamp_loc_updated`, void 0),
  _([_], _.prototype, `startTime`, void 0),
  _([_], _.prototype, `endTime`, void 0),
  _([_], _.prototype, `visibilityStartTime`, void 0),
  _([_], _.prototype, `visibilityEndTime`, void 0),
  _([_], _.prototype, `m_nBuildID`, void 0),
  _([_], _.prototype, `m_strBuildBranch`, void 0),
  _([_], _.prototype, `postTime`, void 0),
  _([_], _.prototype, `visibility_state`, void 0),
  _([_], _.prototype, `broadcaster`, void 0),
  _([_], _.prototype, `jsondata`, void 0),
  _([_], _.prototype, `nCommentCount`, void 0),
  _([_], _.prototype, `nVotesUp`, void 0),
  _([_], _.prototype, `nVotesDown`, void 0),
  _([_], _.prototype, `bOldAnnouncement`, void 0),
  _([_], _.prototype, `announcementClanSteamID`, void 0),
  _([_], _.prototype, `loadedAllLanguages`, void 0),
  _([_], _.prototype, `bLoaded`, void 0),
  _([_], _.prototype, `deleteInProgress`, void 0),
  _([_], _.prototype, `vecTags`, void 0),
  _([_], _.prototype, `last_update_steamid`, void 0),
  _([_], _.prototype, `rtime32_last_modified`, void 0),
  _([_], _.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  _([_], _.prototype, `rtime32_last_local_modification`, void 0),
  _([_], _.prototype, `rtime32_moderator_reviewed`, void 0),
  _([_], _.prototype, `video_preview_type`, void 0),
  _([_], _.prototype, `video_preview_id`, void 0),
  _([_], _.prototype, `m_overrideCurrentDay`, void 0));
function _(_) {
  return (
    (_.gid == null || _.gid == null || _.gid == `0`) &&
    !!_.announcement_body &&
    _.announcement_body.gid != `0`
  );
}
function _(_) {
  return _(_) ? _ + _.announcement_body?.gid : _.gid;
}
function _(_, _) {
  let _ = new _();
  if (
    ((_.clanSteamID = _),
    _(
      _.clanSteamID && _.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        _.clanSteamID.ConvertTo64BitString() +
        ` ` +
        _.EUNIVERSE,
    ),
    (_.GID = _(_)),
    (_.bOldAnnouncement = _(_)),
    (_.appid = _.appid ?? 0),
    (_.createTime = _.rtime_created),
    (_.startTime = _.rtime32_start_time),
    (_.endTime = _.rtime32_end_time),
    (_.visibilityStartTime = _.rtime32_visibility_start),
    (_.visibilityEndTime = _.rtime32_visibility_end),
    (_.loadedAllLanguages = !1),
    (_.type = _.event_type ?? 1),
    (_.nVotesUp = _.votes_up ?? 0),
    (_.nVotesDown = _.votes_down ?? 0),
    (_.comment_type = _.comment_type),
    (_.gidfeature = _.gidfeature),
    (_.gidfeature2 = _.gidfeature2),
    (_.featured_app_tagid = _.featured_app_tagid),
    (_.vecTags = []),
    (_.creator_steamid = _.creator_steamid),
    (_.last_update_steamid = _.last_update_steamid),
    (_.rtime32_last_modified = _.rtime32_last_modified),
    (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
    (_.video_preview_type = _.video_preview_type),
    (_.video_preview_id = _.video_preview_id),
    (_.has_live_stream = _.has_live_stream),
    (_.live_stream_viewer_count = _.live_stream_viewer_count),
    (_.m_nBuildID = _.build_id),
    (_.m_strBuildBranch = _.build_branch),
    _.announcement_body)
  ) {
    let _ = _.announcement_body;
    ((_.AnnouncementGID = _.gid),
      _.name.set(_.language, _.headline),
      _.description.set(_.language, _.body),
      _.timestamp_loc_updated.clear(),
      (_.forumTopicGID = _.forum_topic_id),
      (_.nCommentCount = _.commentcount),
      (_.postTime = _.posttime),
      _.bOldAnnouncement && !_.hidden && (_.startTime = _.posttime),
      (_.announcementClanSteamID = new _(_.clanid)),
      _.tags && _.tags.length > 0 && _.tags.forEach((_) => _.vecTags.push(_)),
      !_.rtime32_last_solr_search_col_updated &&
        _.rtime32_last_modified &&
        ((_.rtime32_last_solr_search_col_updated = _.rtime32_last_modified),
        (_.rtime32_last_modified = _.updatetime)));
  } else
    ((_.AnnouncementGID = `0`),
      (_.forumTopicGID = _.forum_topic_id),
      _.name.clear(),
      _.description.clear(),
      _.timestamp_loc_updated.clear(),
      (_.postTime = _.rtime32_start_time),
      (_.nCommentCount = _.comment_count ?? 0),
      _.name.set(0, _.event_name ?? ``),
      _.description.set(0, _.event_notes ?? ``));
  _.broadcaster_accountid && (_.broadcaster = new _(_.broadcaster_accountid));
  let _ = _;
  try {
    _.jsondata = {
      ..._,
      ...(_.jsondata ? JSON.parse(_.jsondata) : void 0),
    };
  } catch (_) {
    let _ = _(_);
    throw (
      console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          _.strErrorMsg,
        _,
      ),
      _
    );
  }
  if (
    ((_.jsondata.localized_capsule_image = _(
      _.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_title_image = _(
      _.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_subtitle = _(
      _.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (_.jsondata.localized_summary = _(
      _.jsondata.localized_summary || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_title = _(
      _.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_left_image = _(
      _.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_right_image = _(
      _.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_header = _(
      _.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_overlay = _(
      _.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_product_banner = _(
      _.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_product_mobile_banner = _(
      _.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_logo = _(
      _.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    _.jsondata.sale_num_headers !== void 0 &&
      _.jsondata.localized_per_day_sales_header)
  )
    for (let _ = 0; _ < _.jsondata.sale_num_headers; ++_)
      _.jsondata.localized_per_day_sales_header[_] = _(
        _.jsondata.localized_per_day_sales_header[_],
        32,
        null,
      );
  return (
    _(_.jsondata),
    _.jsondata.email_setting &&
      _.jsondata.email_setting.sections &&
      _.jsondata.email_setting.sections.forEach((_) => {
        (_.localized_headline !== void 0 &&
          _.localized_headline !== null &&
          (_.localized_headline = _(_.localized_headline, 32, null)),
          _.localized_body !== void 0 &&
            _.localized_body !== null &&
            (_.localized_body = _(_.localized_body, 32, null)),
          _.localized_image !== void 0 &&
            _.localized_image !== null &&
            (_.localized_image = _(_.localized_image, 32, null)));
      }),
    _.jsondata.localized_title_image.forEach((_, _) => {
      if (_ != null && _.substr(0, 4) == `http`) {
        let _ = _.lastIndexOf(`/`),
          _ = _.substr(_ + 1);
        _.jsondata.localized_title_image[_] = _;
      }
    }),
    (_.bLoaded = !0),
    (_.visibility_state = _.published
      ? _.unlisted
        ? _.k_EEventStateUnlisted
        : _.hidden
          ? _.k_EEventStateStaged
          : _.k_EEventStateVisible
      : _.k_EEventStateUnpublished),
    _
  );
}
var _ = _(_(), 1),
  _ = `Og4Odc3VLI8-`,
  _ = `oliNocjo3ok-`,
  _ = `x3qY8Eev7UU-`,
  _ = `_3lYhLNSBOpE-`,
  _ = `tyYNnQMYYyw-`,
  _ = `-WD8g17w7iA-`;
function _() {
  let [_, _] = _.useState(void 0),
    _ = _.useCallback(() => _(void 0), []);
  return [
    _,
    (0, _.jsx)(_, {
      active: _ !== void 0,
      children: (0, _.jsx)(_, {
        closeModal: _,
        rgImageURL: _,
      }),
    }),
  ];
}
function _(_) {
  let { closeModal: _, rgImageURL: _ } = _,
    [_, _] = _.useState(0),
    _ = _?.length ?? 0,
    _ = _.useCallback(() => {
      _(_ == 0 ? _ - 1 : _ - 1);
    }, [_, _]),
    _ = _.useCallback(() => {
      _ && _ + 1 >= _ ? _(0) : _(_ + 1);
    }, [_, _, _]);
  return (0, _.jsxs)(_, {
    title: _(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: _,
    bHideCloseIcon: !0,
    modalClassName: _,
    children: [
      (0, _.jsx)(_, {
        index: _,
        numElements: _?.length || 0,
        fnForward: _,
        fnBackwards: _,
        fnClose: _,
        bCircular: !0,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`img`, {
          className: _,
          src: _?.[_],
          alt: ``,
        }),
      }),
    ],
  });
}
function _(_) {
  let {
    index: _,
    numElements: _,
    fnForward: _,
    fnBackwards: _,
    fnClose: _,
    bCircular: _,
  } = _;
  (_(`ArrowLeft`, () => _?.(), !0, !0),
    _(`Left`, () => _?.(), !0, !0),
    _(`ArrowRight`, () => _?.(), !0, !0),
    _(`Right`, () => _?.(), !0, !0),
    _(`Escape`, () => _ && _(), !0, !0),
    _(`Esc`, () => _ && _(), !0, !0));
  let _ = _ > 1;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _(
                `-WD8g17w7iA-`,
                _ === 0 && !_ ? `apJ9YvEIT9k-` : null,
              ),
              onClick: _,
              "aria-label": _(`#Carousel_Prev`),
              children: (0, _.jsx)(_, {
                angle: 270,
              }),
            }),
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _(
                `-WD8g17w7iA-`,
                _ === _ - 1 && !_ ? `apJ9YvEIT9k-` : null,
              ),
              onClick: _,
              "aria-label": _(`#Carousel_Next`),
              children: (0, _.jsx)(_, {
                angle: 90,
              }),
            }),
          ],
        }),
      (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        onClick: _,
        "aria-label": _(`#Button_Close`),
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
var _ = `xq-I5249Blg-`,
  _ = `_-8Ur6QivGZk-`,
  _ = 1.3,
  _ = 3,
  _ = 256;
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    _ = (0, _.useRef)(null),
    [_, _] = _();
  return (
    (0, _.useEffect)(() => {
      _.naturalWidth > _.displayWidth * _ &&
        _.naturalHeight > _.displayHeight * _ &&
        _.naturalWidth > _ &&
        _.naturalWidth / _.naturalHeight < _ &&
        _(!0);
    }, [_]),
    _
      ? (0, _.jsxs)(`span`, {
          className: _,
          children: [
            _,
            (0, _.jsx)(`span`, {
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
            (0, _.jsx)(`img`, {
              ..._,
              className: _({
                ...(_.className && {
                  [_.className]: !0,
                }),
              }),
              onClick: (_) => {
                _.src && _([_.src]);
              },
            }),
          ],
        })
      : (0, _.jsx)(`img`, {
          ..._,
          ref: _,
          onLoad: (_) => {
            if (!_.currentTarget.closest(`a`) && !_()) {
              let {
                naturalWidth: _,
                naturalHeight: _,
                width: _,
                height: _,
              } = _.currentTarget;
              _({
                naturalWidth: _,
                naturalHeight: _,
                displayWidth: _,
                displayHeight: _,
              });
            }
          },
        })
  );
}
function _(_) {
  let {
      className: _,
      srcs: _,
      lazyLoad: _,
      width: _,
      height: _,
      alt: _,
      crossOrigin: _,
    } = _,
    [_, _] = _.useState(_.length),
    [_, _] = _.useState(0);
  _.useEffect(() => {
    _ != _.length && (_(_.length), _(0));
  }, [_, _.length]);
  let _ = _.useCallback(() => {
    (_.onImageError && _.onImageError(_.srcs[_]),
      _ + 1 < _.srcs.length && _(_ + 1));
  }, [_, _]);
  return _.length == 0
    ? null
    : (0, _.jsx)(`img`, {
        className: _,
        src: _[_],
        crossOrigin: _,
        onError: _,
        loading: _ ? `lazy` : void 0,
        width: _,
        height: _,
        alt: _,
      });
}
function _(_) {
  let [_, _] = _.useState(!1),
    {
      className: _,
      src: _,
      lazyLoad: _,
      width: _,
      height: _,
      alt: _,
      crossOrigin: _,
    } = _;
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`p`, {
            children: _(`#Image_ErrorTitle`, _),
          }),
          (0, _.jsx)(`ul`, {
            children: (0, _.jsx)(`li`, {
              children: _(`#Image_Error_msg1`),
            }),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#Image_Error_suggestion`),
          }),
        ],
      })
    : (0, _.jsx)(_, {
        className: _,
        src: _,
        onError: () => _(!0),
        crossOrigin: _,
        loading: _ ? `lazy` : void 0,
        width: _,
        height: _,
        alt: _,
      });
}
function _(_) {
  let {
      _: _,
      imageType: _,
      bPreferAssetWithoutOverride: _,
      strAdditionalClassName: _,
      bNoShadow: _,
    } = _,
    { storeItemAsset: _, storeItemDefaultInfo: _ } = _(_, _, _);
  if (_ === `library` || _ == `vertical`)
    return (0, _.jsx)(_, {
      _: _,
      bPreferAssetWithoutOverride: _,
      bNoShadow: _,
    });
  let _ = ``;
  switch (_) {
    case `main`:
      _ = _;
      break;
    default:
      _ = _;
  }
  if (_ === void 0 || !_)
    return (0, _.jsx)(`div`, {
      className: _(_, `CapsuleImageCtn`, _),
    });
  if (_ == null) return null;
  let _ = _(_, _ === `header`);
  return (0, _.jsx)(`div`, {
    className: _(_, `CapsuleImageCtn`, _),
    children: (0, _.jsx)(_, {
      lazyLoad: !0,
      srcs: _,
      className: _(_),
      alt: _.name,
    }),
  });
}
function _(_, _) {
  let _ = [];
  return (_ && _(_, _, _), _.filter((_) => !!_));
}
function _(_, _) {
  return {
    strStoreVerticalURL: _(_, `hero_capsule`),
    strLibraryVerticalURL: _(_, `library_capsule`),
  };
}
function _(_, _, _) {
  let _ = _(_, `header_2x`) ?? _(_, `header`),
    _ = _(_, `main_capsule_2x`) ?? _(_, `main_capsule`);
  _ ? _.push(_, _) : _.push(_, _);
}
var _ = `K2BGbCx37Cg-`,
  _ = `wnVw5QEjvtw-`,
  _ = `-a-3HG4gESE-`,
  _ = `-OQDE-IeSKo-`,
  _ = `iVqIvGU08cQ-`,
  _ = `vO3l7X14-dI-`,
  _ = `n1QMIymiV0w-`,
  _ = `ebRw2SGSkSY-`,
  _ = `qN5ejX3iSmI-`,
  _ = `_7Xd-p6v3h-U-`,
  _ = `_6uN5TDmIPak-`,
  _ = `_4UX-whX3nGs-`,
  _ = `f0EapRMh-PI-`,
  _ = `q4JwMxF0b-8-`,
  _ = `otywAXtYosA-`;
function _(_) {
  let { _: _, ..._ } = _,
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    ..._,
    platforms: _,
  });
}
_.memo(function (_) {
  let { platforms: _ } = _;
  if (!_) return null;
  let { windows: _, mac: _, steamos_linux: _, vr_support: _ } = _;
  return (0, _.jsxs)(`span`, {
    className: _,
    children: [
      _ && (0, _.jsx)(_, {}),
      _ && (0, _.jsx)(_, {}),
      _ && (0, _.jsx)(_, {}),
      _?.vrhmd && (0, _.jsx)(_, {}),
    ],
  });
});
var _ = _.memo(function (_) {
  let { platforms: _, eHWCompat: _, size: _ = `small` } = _,
    _;
  if (_ == 0)
    return (
      _(!1, `SteamHWCompatIndicator called for k_ESteamHWCompatibility_None`),
      null
    );
  if (_ == 2) {
    let _ = _?.steam_os_compat_category;
    if (_ === void 0) return null;
    switch (_) {
      case 2:
        _ = _;
        break;
      case 1:
        _ = _;
        break;
      case 0:
        _ = _;
        break;
      default:
        return (_(_, `Unhandled steam os category: ${_}`), null);
    }
  } else {
    let _;
    if (
      ((_ =
        _ == 3
          ? _?.steam_machine_compat_category
          : _ == 4
            ? _?.steam_frame_compat_category
            : _?.steam_deck_compat_category),
      _ === void 0)
    )
      return null;
    switch (_) {
      case 3:
        _ = _;
        break;
      case 2:
        _ = _;
        break;
      case 1:
        _ = _;
        break;
      case 0:
        _ = _;
        break;
      default:
        return (_(_, `Unhandled deck compat category: ${_}`), null);
    }
  }
  return (0, _.jsxs)(`span`, {
    className: (0, _.default)(
      _,
      _ == `small` && void 0,
      _ == `fill` && `_4H-iJ5vlNuc-`,
    ),
    children: [
      _ == 1 && (0, _.jsx)(_, {}),
      _ == 3 && (0, _.jsx)(_, {}),
      _ == 4 && (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
    ],
  });
});
function _() {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    title: _.Localize(`#Platform_Windows`),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    title: _.Localize(`#Platform_Mac`),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    title: _.Localize(`#Platform_Linux`),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: _,
    title: _.Localize(`#Platform_VR`),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    className: `SVGIcon_Button SVGIcon_WindowsLogo`,
    width: `100%`,
    height: `100%`,
    viewBox: `0 0 128 128`,
    enableBackground: `new 0 0 128 128`,
    children: [
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `60.834`,
        height: `60.835`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.165`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.835`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.164`,
        fill: `currentColor`,
        width: `60.834`,
        height: `60.836`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.165`,
        _: `67.164`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.836`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    fill: `#FFFFFF`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`),
    className: (0, _.default)(_),
    children: (0, _.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        opacity: `0.84`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z`,
        fill: `white`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, _.default)(_),
    children: (0, _.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, _.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z`,
          fill: `white`,
        }),
        (0, _.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z`,
          fill: `white`,
        }),
      ],
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, _.default)(_),
    children: (0, _.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, _.jsx)(`path`, {
          opacity: `0.84`,
          _: `M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z`,
          fill: `white`,
        }),
        (0, _.jsx)(`path`, {
          opacity: `0.84`,
          "fill-rule": `evenodd`,
          "clip-rule": `evenodd`,
          _: `M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z`,
          fill: `white`,
        }),
      ],
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Verified`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Playable`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Unsupported`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Unknown`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamOSCompatibility_Category_Compatible`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _(_) {
  let { bAllowOutsideOfDeck: _ } = _;
  return !_() && !_
    ? null
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { className: _, _: _ } = _,
    [_, _] = _(),
    _ = _;
  if ((_ == 0 && (_ = 1), !_)) return null;
  let _;
  return (
    _ == 4 && (_ = _),
    (0, _.jsx)(`div`, {
      className: _(_, _, _),
      children: (0, _.jsx)(_, {
        _: _,
        eHWCompat: _,
      }),
    })
  );
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_, _) {
  switch (_) {
    case `sub`:
      return {
        packageid: _,
      };
    case `bundle`:
      return {
        bundleid: _,
      };
    default:
      return {
        appid: _,
      };
  }
}
function _(_, _) {
  switch (_) {
    case `sub`:
      return {
        packageid: _,
      };
    case `bundle`:
      return {
        bundleid: _,
      };
    default:
      return {
        appid: _,
      };
  }
}
var _ = 6;
function _(_) {
  let { _: _, bHideInLibraryApps: _ } = _,
    { data: _ } = _(_),
    _ = _?.item_type == 2,
    { data: _ } = _(),
    _ = _.useMemo(() => {
      if (_)
        return _.item_type === 1 || _.item_type === 2
          ? (_.included_appids || [])
              .filter((_) => !_ || !_ || !_?.has(_))
              .map((_) => ({
                appid: _,
              }))
          : (console.error(
              `ContentsPreviewList unexpected store item type:`,
              _.item_type,
            ),
            null);
    }, [_, _, _, _]);
  if (!_ || _.length == 0) return null;
  let _ = _.length,
    _ = _.LocalizePlural(`#Sale_ContentPreview`, _);
  if (_ && _) {
    let _ = _.included_appids?.length || 0;
    _ != _ && (_ = _.Localize(`#Sale_Bundle_CompletePartialSet`, _ - _, _));
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: _.Localize(`#AppType_bundle`),
            }),
          _,
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.slice(0, _).map((_) =>
          (0, _.jsx)(
            _,
            {
              _: _,
            },
            `preview${_(_)}`,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_ || !_) return null;
  let _ = _(_, `small_capsule`);
  return (0, _.jsx)(_, {
    _: _,
    className: _,
    hoverProps: {
      direction: `right`,
      style: {
        minWidth: `350px`,
      },
    },
    children: (0, _.jsx)(`img`, {
      src: _,
      className: _,
      loading: `lazy`,
      alt: _.name || ``,
    }),
  });
}
async function _() {
  let _ = _(`broadcast_available_for_page`, `application_config`);
  if (_(_)) {
    let _ = new Set();
    return (
      _.filtered.forEach((_) => {
        _.appid && _.add(_.appid);
      }),
      Array.from(_)
    );
  }
  return [];
}
var _ = class {
  constructor() {
    _(this);
  }
  accountid;
  steamid;
  appid;
  hub_popular;
  popular;
  relay_broadcast_id;
  rowversion;
  thumbnail_http_address;
  nAppIDVOD;
  title = void 0;
  viewer_count = void 0;
  whitelist_rank;
  gamedata_subtitle = void 0;
  store_title;
  left_panel;
  right_panel;
  snr;
  broadcast_chat_visibility;
  default_selection_priority = 0;
  current_selection_priority = 0;
};
(_([_], _.prototype, `title`, void 0),
  _([_], _.prototype, `viewer_count`, void 0),
  _([_], _.prototype, `gamedata_subtitle`, void 0),
  _([_], _.prototype, `current_selection_priority`, void 0));
var _ = `primary`,
  _ = `featured`,
  _ = `default_featured`,
  _ = `general`,
  _ = (function (_) {
    return (
      (_[(_.k_ePrimary = 3)] = `k_ePrimary`),
      (_[(_.k_eFeatured = 2)] = `k_eFeatured`),
      (_[(_.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (_[(_.k_eGeneral = 0)] = `k_eGeneral`),
      _
    );
  })({});
function _(_) {
  switch (_) {
    case _:
      return 3;
    case _:
      return 2;
    case _:
      return 1;
    case _:
    default:
      return 0;
  }
}
function _(_) {
  let _ = _;
  return _ &&
    typeof _.success == `number` &&
    _.filtered &&
    Array.isArray(_.filtered) &&
    _.broadcast_chat_visibility
    ? _.filtered.length == 0 || typeof _.filtered[0].accountid == `string`
    : !1;
}
function _() {
  return _(_());
}
function _(_) {
  let { data: _ } = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (!_ || _.length == 0 || !_) return _(!1);
      (async () => {
        let _ = await Promise.all(
          _.filter((_) => !!_).map((_) =>
            _.fetchQuery(
              _(_, {
                appid: _,
              }),
            ),
          ),
        );
        _(
          _.some(
            (_) =>
              (_ && _.appid && _.has(_.appid)) ||
              (_?.related_items?.parent_appid &&
                _.has(_.related_items.parent_appid)),
          ),
        );
      })();
    }, [_, _, _, _]),
    _
  );
}
function _() {
  return {
    queryKey: _(),
    queryFn: async () => {
      let _ = await _();
      return new Set(_);
    },
  };
}
function _() {
  return [`BroadcastApps`];
}
var _ = `hRwhHwwKlgI-`;
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#home_page_live_broadcast`),
  });
}
var _ = _.createContext(void 0),
  _ = _.createContext(void 0);
function _(_) {
  let { appids: _, hide_status_banners: _, show_early_access: _ } = _,
    { data: _ } = _(),
    { data: _ } = _(),
    _ = _.length > 0 && _.every((_) => _ && _.has(_)),
    _ = _.length > 0 && _.every((_) => _ && _.has(_)),
    _ = _(_),
    _ = _.useContext(_),
    _ = _.useContext(_),
    _ = _ && _ ? _(_, _) : void 0,
    _ = _ && !_,
    _ = _ && !_,
    _ = !_ && _;
  return (0, _.jsxs)(`div`, {
    className: _(_, `CapsuleDecorators`, _ && `HasReasonBanner`),
    children: [
      _ &&
        (0, _.jsx)(`span`, {
          className: _(`LCYi5cxHqgI-`, _.strClassName),
          children: _.strLabel,
        }),
      _ &&
        (0, _.jsxs)(`span`, {
          className: _(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, _.jsx)(`img`, {
              src: _(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: _.Localize(`#Sale_InLibrary`),
            }),
            _.Localize(`#Sale_InLibrary`),
          ],
        }),
      _ &&
        (0, _.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, _.jsx)(_, {
              className: `ppO76q5Y-Zg-`,
            }),
            _.Localize(`#Sale_OnWishlist`),
          ],
        }),
      _ &&
        !_ &&
        !_ &&
        (0, _.jsx)(_, {
          appids: _,
        }),
      _ && (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { appids: _ } = _;
  return _(_)
    ? (0, _.jsx)(`span`, {
        className: _(_, _),
        children: _.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (!_ || _.length == 0) return _(!1);
      (async () => {
        let _ = await Promise.all(
          _.map((_) =>
            _.fetchQuery(
              _(_, {
                appid: _,
              }),
            ),
          ),
        );
        _(_.some((_) => _ && _.is_early_access));
      })();
    }, [_, _, _]),
    _
  );
}
var _ = `WYXlhoxwBlU-`,
  _ = `Ypf4QLCxqQU-`,
  _ = `rDvoly1XGQk-`,
  _ = `n2t7u-oXiwM-`,
  _ = `a1UUU8zD1Lg-`,
  _ = `jP-Qr-tpETg-`,
  _ = `triBTPpfZNQ-`,
  _ = `Ep0wQ-6tJLw-`,
  _ = `-Rp0JgQXMoA-`,
  _ = `QWDBAVIUpho-`,
  _ = `JAphvRffM9M-`,
  _ = `FQQL32BdomI-`,
  _ = `xNRz-0kPOeE-`,
  _ = `-F6L5ywkZiU-`,
  _ = `_4eS9H8fFOdo-`,
  _ = `_7fjzkXY-Nhs-`,
  _ = `qNcrltVSVzI-`,
  _ = `A-4nfbw4-fY-`,
  _ = `oe2Jr-slLMU-`,
  _ = `DGZ5Ptl37g4-`,
  _ = `zstB61TOiBA-`,
  _ = `-ZEsfMgRePw-`,
  _ = `P-N-CSZ-VX8-`,
  _ = `aZng9sDwNZg-`,
  _ = `x80z1JoR9dc-`,
  _ = `X-2r-tUH1gQ-`,
  _ = `-A11cjkYCU8-`,
  _ = `_10gRNaJtPOU-`,
  _ = `UskT6FngUB8-`,
  _ = `L03Y6ydPSDM-`,
  _ = `rX8DGzBU5pU-`,
  _ = `_8mKyAzWvx8I-`,
  _ = `RfxR9kxm2-o-`,
  _ = `_3EpVljmp8Bg-`,
  _ = `h1-hm2PiNH0-`,
  _ = `ruaMViMLvdA-`;
function _(_) {
  let {
    capsules_per_row: _,
    is_generic: _,
    is_generic_trailer: _,
    is_event_dash_row: _,
    is_trailer_carousel: _,
    is_spotlights: _,
    is_item_browser: _,
    is_maincap: _,
    is_expanded_maincap: _,
    is_expanded_display: _,
    show_auto_advance_bar: _,
    swipe_row: _,
  } = _;
  if (typeof _ == `string`)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _(_, _),
        children: [0, 1, 2, 3, 4].map((_) =>
          (0, _.jsx)(
            `div`,
            {
              className: _(_, _ === `tall_capsule` && `RDPLi3Xo-Mk-`),
              children: (0, _.jsx)(`div`, {
                className: _,
              }),
            },
            _,
          ),
        ),
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: [0, 1].map((_) =>
          (0, _.jsx)(
            `div`,
            {
              className: _,
              style: {
                width: _.width,
                height: _.height,
              },
            },
            _,
          ),
        ),
      }),
    });
  if (!_) return null;
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
        }),
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
        }),
      }),
    });
  if (_)
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _,
              }),
            }),
          ],
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, _.jsx)(`div`, {
              className: `triBTPpfZNQ-`,
            }),
          }),
      ],
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [void 0]: _,
        }),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
        ],
      }),
    });
  if (_) {
    let _ = [];
    for (let _ = 0; _ < _[0]; _++)
      _.push(
        (0, _.jsx)(
          _,
          {
            className: _,
            focusable: !0,
            children: (0, _.jsx)(`div`, {
              className: _,
            }),
          },
          `item_browse_ghost_` + _,
        ),
      );
    return (0, _.jsx)(_, {
      children: _,
    });
  }
  return _?.length == 1
    ? _[0] == 1
      ? (0, _.jsx)(_, {
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _,
            }),
          }),
        })
      : _[0] == 4
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
              ],
            }),
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
              ],
            }),
          })
    : _?.length == 2
      ? _[0] == 3 && _[1] == 3
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
              ],
            }),
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
              ],
            }),
          })
      : (0, _.jsx)(_, {
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
            ],
          }),
        });
}
function _(_) {
  return (0, _.jsx)(_, {
    className: _(_, _.className),
    focusableIfEmpty: !0,
    children: _.children,
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(void 0),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (_) {
        if (_ && _.length > 0) _(_);
        else if (_.related_items?.parent_appid) {
          let _ = {
            appid: _.related_items?.parent_appid,
          };
          (async () => {
            let _ = await _.fetchQuery(_(_, _));
            _ && _.length > 0 && _(_);
          })();
        }
      }
    }, [_, _, _, _]),
    _
  );
}
function _(_) {
  let { _: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        _: _,
      })
    : null;
}
function _(_) {
  let { _: _ } = _,
    _ = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.slice(0, 10).map((_) =>
          (0, _.jsx)(
            _,
            {
              tagid: _.tagid,
              className: _,
            },
            `tag_` + _.tagid,
          ),
        ),
      })
    : null;
}
function _(_) {
  let {
      _: _,
      bShowDemoButton: _,
      bShowPurchaseOptionsButton: _,
      fnOnPurchaseOptionsClick: _,
      bHidePrice: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      className: _,
      bShowCartButton: _,
    } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { bIsOwned: _ } = _(_),
    [_, _] = _(_, _);
  if (!_) return null;
  let _ =
      (_.type === 1 && !_?.is_coming_soon) ||
      (_.related_items?.demo_appid && _.related_items?.demo_appid.length > 0),
    _ = _(_.type),
    _ = _ && _ && _,
    _ = null;
  if (!_ && _?.is_free_to_keep && _?.free_to_keep_ends) {
    let _ = _.free_to_keep_ends,
      _ = _(
        `#Sale_default_label_Free_Promo_Description_Short`,
        _(_) +
          ` @ ` +
          _(_, {
            bForce24HourClock: !1,
          }),
      );
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _,
        (0, _.jsx)(_, {
          tooltip: _(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      _,
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(_, {
              _: _,
              className: `R0sGSaFdUWo-`,
            }),
          !_ &&
            _.type !== 1 &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                !(!_ || _.is_free) &&
                  (0, _.jsx)(_, {
                    fnOnPurchaseOptionsClick: _,
                  }),
                !(!_ || _.is_free) &&
                  (0, _.jsx)(_, {
                    _: _,
                    className: `CartBtn`,
                  }),
              ],
            }),
          !_ &&
            (0, _.jsx)(_, {
              _: _,
            }),
          _ &&
            (0, _.jsx)(_, {
              _: _,
              compatibility: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    onClick: _.fnOnPurchaseOptionsClick,
    children: (0, _.jsx)(`span`, {
      children: _(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
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
  let {
      _: _,
      type: _,
      bShowDemoButton: _,
      bPreferDemoStorePage: _,
      bHidePrice: _,
      bUseSubscriptionLayout: _,
      bHidePlatforms: _,
      bHideContainedApps: _,
      bAllowTwoLinesForHeader: _,
      bShowReviewSummary: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      bAutoFocus: _,
      fnOnClickOverride: _,
      bIsMarketingMessage: _,
      bPreferAssetWithoutOverride: _,
    } = _,
    _ = _(_, _),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    { data: _, isPending: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(),
    _ = _(_),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    [_, _] = (0, _.useState)(!1);
  ((0, _.useEffect)(() => {
    if (!_) {
      _(!1);
      return;
    }
    let _ = window.setTimeout(() => _(!0), 500);
    return () => window.clearTimeout(_);
  }, [_]),
    (0, _.useEffect)(() => {
      _.current && _(_.current.offsetWidth < 370);
    }, [_]));
  let _ = (0, _.useMemo)(
      () =>
        _ && _ && _(_)
          ? {
              appid: _(_)[0],
            }
          : _,
      [_, _, _],
    ),
    { strStoreURL: _, snr: _ } = _(_, _);
  if (!_)
    return _
      ? (0, _.jsx)(_, {
          capsules_per_row: [1],
          is_item_browser: !0,
        })
      : null;
  let _ = _.included_appids?.length || 0,
    _ = _.included_appids?.filter((_) => _?.has(_))?.length || 0,
    _ = _.item_type == 2 && !!_?.must_purchase_as_set,
    _ = !_ && _ > 1,
    _ = _.item_type == 1 && _ == 1,
    _ = _.item_type == 0 || _,
    _ = _ && _.appid,
    _ = _.name || ``,
    _ = _(_, _),
    _ = _ || !_?.is_coming_soon || _,
    [_, _] = _(_, _);
  return (0, _.jsxs)(_, {
    className: _({
      [_]: !0,
      [void 0]: _,
      StoreSaleWidgetOuterContainer: !0,
    }),
    "flow-children": `grid`,
    navEntryPreferPosition: _.PREFERRED_CHILD,
    autoFocus: _,
    navKey: `preview_widget_` + _(_),
    children: [
      (0, _.jsx)(_, {
        appid: _ && `appid` in _ ? _.appid : void 0,
        children: (0, _.jsxs)(_, {
          onClick: _ ? _ : void 0,
          className: _({
            [_]: !0,
            [_]: !0,
            [_]: _,
          }),
          ..._(_, _, _, !!_, void 0, _),
          preferredFocus: _,
          onFocusWithin: _ ? _ : void 0,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_),
              children: (0, _.jsx)(_, {
                _: _,
                strURL: _,
                children: (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      appids: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                      active: _ && _,
                      bIsHoverMode: !0,
                      eGrowOnActivate: _
                        ? void 0
                        : _.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _({
                [_]: !0,
                [_]: _,
              }),
              children: [
                !(!_ || _) &&
                  (0, _.jsx)(_, {
                    _: _,
                    classOverride: _(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: _,
                  }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`a`, {
                    href: _ ? void 0 : _,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    onClick: _,
                    children: (0, _.jsx)(`div`, {
                      className: _(_, `StoreSaleWidgetTitle`),
                      children: _,
                    }),
                  }),
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  ref: _,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        _: _,
                      }),
                    !_ &&
                      !_ &&
                      _ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)(_, {
                            _: _,
                            bMinimizePlatforms: _,
                            bHideWindows: _,
                          }),
                          !!(_ && _.item_type == 0) &&
                            (0, _.jsx)(_, {
                              eHWCompat: _,
                              className: `tUIs-i3NWoU-`,
                              _: _,
                            }),
                        ],
                      }),
                  ],
                }),
                !_ &&
                  _ &&
                  _ &&
                  (0, _.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, _.jsx)(_, {
                      _: _,
                    }),
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    _: _,
                    bHideInLibraryApps: !_ && _.item_type == 2 && _ < _,
                  }),
                !!_ &&
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                _
                  ? (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          _: _,
                        }),
                      }),
                    })
                  : (0, _.jsx)(_.Fragment, {
                      children:
                        _ && _ && _
                          ? (0, _.jsx)(_, {
                              appid: _,
                              bIsMuted: !!_,
                            })
                          : (0, _.jsx)(_, {
                              _: _,
                              bShowDemoButton: _,
                              bHidePrice: _,
                              bHideWishlistButton: _,
                              eHardwareCompatibilityDisplay: _,
                            }),
                    }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    _: _,
                    bPreferAssetWithoutOverride: _,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(_.strReason && _.strReason.length > 0) &&
        (0, _.jsx)(`div`, {
          className: `-cW4bgqyLAo-`,
          children: _.strReason,
        }),
    ],
  });
}
function _(_) {
  let { _: _, strURL: _, children: _ } = _;
  return `appid` in _
    ? (0, _.jsxs)(_, {
        _: _,
        children: [_, ` `],
      })
    : (0, _.jsx)(`a`, {
        href: _,
        children: _,
      });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _(_),
      })
    : null;
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _();
  if (!_ || !_ || !_.short_description || !_) return null;
  let _ = _?.discount_pct || 0,
    _ = _.included_appids?.length || 0,
    _ = _.included_appids?.filter((_) => _?.has(_))?.length || 0,
    _ = _.short_description,
    _ = _.item_type == 1 && _ == 1,
    _ = _.item_type == 2 && !!_?.must_purchase_as_set;
  return (
    (_.item_type == 2 || (_.item_type == 1 && !_)) &&
      (_ =
        !_ && _ > 0 && _ < _
          ? _(`#Sale_Bundle_CompletePartialSet`, _, _)
          : _ > 0
            ? _(`#Sale_BundleSave_WithDiscount`, _, _)
            : _(`#Sale_BundleSave`, _)),
    (0, _.jsx)(`div`, {
      className: _(_, `StoreSaleWidgetShortDesc`),
      children:
        _.startsWith(`#`) && _.indexOf(` `) == -1
          ? (0, _.jsx)(`span`, {
              className: _,
              children: _(
                _,
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
              ),
            })
          : _,
    })
  );
}
function _(_) {
  let {
      _: _,
      bPreferLibrary: _,
      bPreferAssetWithoutOverride: _,
      bNoShadow: _,
    } = _,
    _ = _ ? _ : ``,
    { storeItemDefaultInfo: _, storeItemAsset: _ } = _(_, `vertical`, _),
    [_, _] = _.useState(0);
  if (!_ || !_)
    return (0, _.jsx)(`div`, {
      className: _,
    });
  let { strStoreVerticalURL: _, strLibraryVerticalURL: _ } = _(_, _);
  if (_ && (!_ || !_))
    return (0, _.jsxs)(`div`, {
      className: _(_, `HeroCapsuleImageContainer`),
      children: [
        (0, _.jsx)(`img`, {
          src: _,
          className: _,
          alt: _.name,
        }),
        _.type == 4 &&
          (0, _.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${_.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (_)
    return (0, _.jsxs)(`div`, {
      className: _(_, _, _ ? _ : ``, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
        (0, _.jsx)(`img`, {
          src: _,
          className: _,
          alt: _.name,
        }),
      ],
    });
  let _ = _(_, !0),
    _ = _.length - 1,
    _ = (_) => {
      let _ = _.indexOf(_);
      _ >= _ && _ < _.length - 1 && _(_ + 1);
    };
  if (_ < _.length) {
    let _ = _[_];
    return (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
        (0, _.jsx)(_, {
          lazyLoad: !0,
          srcs: _,
          className: _,
          alt: _.name,
          onImageError: _,
        }),
      ],
    });
  }
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
var _ = `yFKurY5xd-8-`,
  _ = `x-jXNI-s184-`,
  _ = `aG-OF9IYlE8-`,
  _ = `Ef8xOk5PJbg-`,
  _ = `RTkq2WI2bK4-`,
  _ = `_4vRcmVJ4gN8-`,
  _ = `eEhfnGythD0-`,
  _ = `qtB6DnXH-bs-`,
  _ = `tF-0HvIRqgQ-`,
  _ = `_0EeL7NnvnjU-`,
  _ = `L-E-bGfH1Sw-`,
  _ = `-pV6HCIaaqM-`,
  _ = `MUbRKQFMT7E-`;
function _(_, _, _) {
  return {
    queryKey: _(_),
    enabled: !!_?.GID,
    queryFn: async () => {
      if (!_) return null;
      let _ = _.appid
          ? await _.ensureQueryData(
              _(_, {
                appid: _.appid,
              }),
            )
          : null,
        _ = await _.ensureQueryData(_(_.clanSteamID.GetAccountID(), _));
      if (_.appid) {
        if (_) {
          if (_.all_ages_screenshots && _.all_ages_screenshots.length > 0) {
            let _ = Number(
              _.bOldAnnouncement
                ? _.AnnouncementGID
                : _.GID == null
                  ? 0
                  : _.GID,
            );
            return (
              (_ %= _.all_ages_screenshots.length),
              `${_.STORE_ITEM_BASE_URL}${_.all_ages_screenshots[_].filename}`
            );
          }
        } else return ``;
      }
      return _.GetEventType() != 36 &&
        _ &&
        ((_.is_creator_home && !_.is_ogg) || _.is_curator)
        ? (_.avatar_full_url ?? null)
        : null;
    },
  };
}
function _(_) {
  return [`useFallbackArtworkScreenshot`, _?.GID];
}
function _(_, _, _, _ = _.full, _ = !0) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _, _, _, _, _)).data ?? void 0;
}
function _(_, _, _, _ = _.full, _ = !0) {
  return [`useEventImageURLWithFallback`, _?.GID, _, _, _, _];
}
function _(_, _, _, _, _, _ = _.full, _ = !0) {
  return {
    queryKey: _(_, _, _, _, _),
    enabled: !!_?.GID,
    initialData: () => _(_, _, _, _, _),
    queryFn: async () => {
      if (!_) return null;
      let _ = _(_, _, _, _, _);
      if (_) return _;
      let _ = await _.ensureQueryData(_(_.clanSteamID.GetAccountID(), _));
      if (_ == `capsule`) {
        let _ = _.appid;
        if (!_ && _ && ((_.is_creator_home && !_.is_ogg) || _.is_curator)) {
          if (_.jsondata?.referenced_appids?.length)
            _ = _.jsondata.referenced_appids[0];
          else return _.avatar_full_url ?? null;
        }
        let _ = await _.ensureQueryData(
          _(_, {
            appid: _,
          }),
        );
        return _
          ? (_(_, `main_capsule`) ?? null)
          : _?.avatar_full_url
            ? _.avatar_full_url
            : `${_.STORE_ITEM_BASE_URL}steam/apps/${_}/header.jpg`;
      }
      return _ == `background` &&
        _ &&
        ((_.is_creator_home && !_.is_ogg) || _.is_curator)
        ? (_.creator_page_bg_url ?? null)
        : await _.ensureQueryData(_(_, _, _));
    },
  };
}
function _(_, _, _, _ = _.full, _ = !0) {
  if (!_) return;
  let _ = _.GetImageURL(_, _, _);
  if (_ && _.trim().length > 0) return _;
  let _ = _.GetELanguageFallback(_);
  if (_ != _) {
    let _ = _.GetImageURL(_, _, _);
    if (_ && _.trim().length > 0) return _;
  }
  if (_ == `capsule`) {
    let _ = _.GetImageFromBeginningOfDescription(_, Number.MAX_VALUE);
    if (_ && (_ || _(_))) return _;
  }
}
function _(_, _, _ = !1) {
  let { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _(_, _, _),
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _?.visible ? _ : _;
  return {
    storeItemAsset: _?.visible ? _ : _,
    storeItemDefaultInfo: _,
  };
}
function _(_, _, _) {
  if (
    _ &&
    _.included_appids?.length == 1 &&
    !_(_, _) &&
    _.item_type &&
    [1, 2].includes(_.item_type)
  )
    return {
      appid: _.included_appids[0],
    };
}
function _(_, _) {
  if (!_) return !1;
  switch (_) {
    case `header`:
      return !!_.header;
    case `main`:
      return !!_.main_capsule;
    case `vertical`:
    case `library`:
      return !!_.hero_capsule || !!_.library_capsule;
    default:
      return (_(_, `Unhandled imageType: ${_}`), !1);
  }
}
