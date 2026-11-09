import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./partnerevent.js";
import { _ } from "./modals.js";
import { _ } from "./throbber.js";
import { _ } from "./stringutils.js";
import { _, _, _ } from "./partnereventshared.module.js";
import "./simplesuccesserror.js";
import "./partnereventwebrowembed.module.js";
import { _ } from "./partnereventstore.js";
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
} from "./main.js";
import { _ } from "./basicpartnereventrender.js";
var _ = _(_()),
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            url: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            associated_apps: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            poll_interval: {
              _: 6,
              _: 300,
              _: _.readUint32,
              _: _.writeUint32,
            },
            kv_description: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            kv_filter: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            publish_to_clan_account_id: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            language: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_error: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_update: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_checked: {
              _: 13,
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
      return `CNewsFeedDef`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            news_feed_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            title: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            url: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            author: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            rtime_date: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            contents: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            commited: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            deleted: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            tags: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            appids: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            recommendation_state: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            received_compensation: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            received_for_free: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            blurb: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            event_subtitle: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            event_summary: {
              _: 17,
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
      return `CNewsFeedPostDef`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.content || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            content: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            preserve_newlines: {
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
      return `CNews_ConvertHTMLToBBCode_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.converted_content || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            converted_content: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            found_html: {
              _: 2,
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
      return `CNews_ConvertHTMLToBBCode_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rss_message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rss_message: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            unique_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            title: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            desc: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            jsondata: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            post: {
              _: 6,
              _: _,
            },
            valid_post: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            post_error_msg: {
              _: 8,
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
      return `CNewsPartnerEventPreview`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rss_url || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rss_url: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            lang: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_account_id: {
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
      return `CNews_PreviewPartnerEvents_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rss_url || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rss_url: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            results: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            error_msg: {
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
      return `CNews_PreviewPartnerEvents_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
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
      return `CNews_GetNewsFeedByRepublishClan_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.feeds || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            feeds: {
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
      return `CNews_GetNewsFeedByRepublishClan_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.post || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            post: {
              _: 1,
              _: _,
            },
            draft: {
              _: 2,
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
      return `CNews_PublishPartnerEvent_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_event_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_event_gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            news_post_gid: {
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
      return `CNews_PublishPartnerEvent_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.news_feed_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            news_feed_gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            start_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            amount: {
              _: 3,
              _: 100,
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
      return `CNews_GetBatchPublishedPartnerEvent_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            news_feed_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            clan_event_gid: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            news_post_gid: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            news_url: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
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
      return `CNews_GetBatchPublishedPartnerEvent_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`News.ConvertHTMLToBBCode#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.ConvertHTMLToBBCode = _;
  function _(_, _, _) {
    return _.SendMsg(`News.PreviewPartnerEvents#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.PreviewPartnerEvents = _;
  function _(_, _, _) {
    return _.SendMsg(`News.GetNewsFeedByRepublishClan#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetNewsFeedByRepublishClan = _;
  function _(_, _, _) {
    return _.SendMsg(`News.PublishPartnerEvent#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.PublishPartnerEvent = _;
  function _(_, _, _) {
    return _.SendMsg(`News.GetBatchPublishedPartnerEvent#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetBatchPublishedPartnerEvent = _;
})((_ ||= {}));
var _ = class {
  m_clanAccountID;
  m_clanSteamID;
  m_strRSSFeedURL = void 0;
  m_strRSSGID = void 0;
  m_rtimeRSSLastChecked = void 0;
  m_nPollIntervalSeconds = void 0;
  m_eRSSFeedLanguage = void 0;
  m_eCuratorLanguage = void 0;
  m_mapURLToPosted = new Map();
  constructor(_) {
    (_(this),
      (this.m_clanAccountID = _.clanid),
      (this.m_clanSteamID = _.InitFromClanID(
        this.m_clanAccountID,
        _.EUNIVERSE,
      )),
      (this.m_strRSSFeedURL = _.rss_feed_url),
      (this.m_strRSSGID = _.rss_feed_gid),
      (this.m_eRSSFeedLanguage = _.rss_feed_language),
      (this.m_rtimeRSSLastChecked = _.rss_feed_last_checked),
      (this.m_nPollIntervalSeconds = _.poll_interval),
      (this.m_eCuratorLanguage = _.curation_language));
  }
  GetFeedLanguageHandleUnset() {
    return this.m_eRSSFeedLanguage == -1
      ? this.m_eCuratorLanguage == -1
        ? 0
        : this.m_eCuratorLanguage
      : this.m_eRSSFeedLanguage;
  }
  GetCuratorLanguage() {
    return this.m_eCuratorLanguage == -1 ? 0 : this.m_eCuratorLanguage;
  }
  BHasSavedRSSURL() {
    return !!this.m_strRSSFeedURL;
  }
  GetRSSUrl() {
    return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : ``;
  }
  GetRSSLastRtimeChecked() {
    return this.m_rtimeRSSLastChecked;
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  GetClanAccountID() {
    return this.m_clanAccountID;
  }
  BHasSetupFeed(_) {
    return !!this.m_strRSSGID && this.m_strRSSFeedURL === _;
  }
  BIsAutomationEnabled() {
    return this.m_nPollIntervalSeconds > 0;
  }
  BHasFeedGID() {
    return !!this.m_strRSSGID;
  }
  async PreviewPartnerEventsFromRSSFeed(_) {
    if (!this.BIsLoggedIn())
      return (
        console.error(`PreviewPartnerEventsFromRSSFeed: User not logged in`),
        null
      );
    let _ = _.Init(_);
    (_.Body().set_rss_url(_),
      _.Body().set_lang(this.GetFeedLanguageHandleUnset()),
      _.Body().set_clan_account_id(this.GetClanAccountID()));
    let _ = await _.PreviewPartnerEvents(_.Get().GetCuratorTransport(), _);
    return (
      _.GetEResult() != 1 &&
        console.error(
          `PreviewPartnerEventsFromRSSFeed error: ` +
            _.GetEMsg() +
            ` ` +
            _.GetEResult(),
        ),
      _
    );
  }
  async FetchPublishedEvents(_ = 100) {
    if (!this.BIsLoggedIn())
      return (console.error(`FetchPublishedEvents: User not logged in`), null);
    if (!this.m_strRSSGID)
      return (
        console.error(`FetchPublishedEvents: Need to create a news feed first`),
        null
      );
    let _ = _.Init(_);
    (_.Body().set_news_feed_gid(this.m_strRSSGID), _.Body().set_amount(_));
    let _ = await _.GetBatchPublishedPartnerEvent(
      _.Get().GetCuratorTransport(),
      _,
    );
    return (
      _.GetEResult() == 1
        ? _(() => {
            for (let _ = 0; _ < _.Body().clan_event_gid().length; ++_) {
              let _ = {
                url: _.Body().news_url()[_],
                clan_event_gid: _.Body().clan_event_gid()[_],
                news_post_gid: _.Body().news_post_gid()[_],
              };
              this.m_mapURLToPosted.set(_.url, _);
            }
          })
        : console.error(
            `FetchPublishedEvents error: EMsg:` +
              _(_.GetEMsg()) +
              ` EResult:` +
              _.GetEResult() +
              ` msg:` +
              _.Hdr().error_message(),
          ),
      _
    );
  }
  MapArticleURLToClanEventGID(_) {
    let _ = this.m_mapURLToPosted.get(_);
    if (_) return _.clan_event_gid;
  }
  BIsLoggedIn() {
    return _.logged_in;
  }
  async CreateOrUpdateRSSNewFeed(_, _ = 0) {
    let _ = new FormData();
    (_.append(`sessionid`, _()),
      _.append(`gid`, this.m_strRSSGID),
      _.append(`lang`, `` + this.GetCuratorLanguage()),
      _.append(`rss_url`, _),
      _.append(`polling_interval`, `` + _));
    let _ =
        _.STORE_BASE_URL +
        `curator/` +
        this.m_clanAccountID +
        `/admin/ajaxmanagerssfeed`,
      _ = await _.default.post(_, _, {
        withCredentials: !0,
      });
    return (
      _.data.success == 1 &&
        _(() => {
          ((this.m_strRSSGID = _.data.gid),
            (this.m_strRSSFeedURL = _),
            (this.m_nPollIntervalSeconds = _));
        }),
      _.data
    );
  }
  async UpdateAutomation(_) {
    return this.CreateOrUpdateRSSNewFeed(this.m_strRSSFeedURL, _ ? 300 : 0);
  }
  async CheckForNewUpdate() {
    if (this.m_strRSSGID) {
      let _ = new FormData();
      (_.append(`sessionid`, _()), _.append(`gid`, this.m_strRSSGID));
      let _ =
        _.STORE_BASE_URL +
        `curator/` +
        this.m_clanAccountID +
        `/admin/ajaxcheckfornews`;
      await _.default.post(_, _, {
        withCredentials: !0,
      });
    }
  }
  async CreatePost(_, _) {
    if (!this.BIsLoggedIn())
      return (
        console.error(`CreatePartnerFromPreviewPost: User not logged in`), null
      );
    if (!this.m_strRSSGID)
      return (
        console.error(
          `CreatePartnerFromPreviewPost: Need to create a news feed first`,
        ),
        null
      );
    let _ = new _();
    (_.set_gid(_.post.gid),
      _.set_news_feed_gid(this.m_strRSSGID),
      _.set_title(_.post.title),
      _.set_url(_.post.url),
      _.set_author(_.post.author),
      _.set_rtime_date(_.post.rtime_date),
      _.set_contents(_.post.contents),
      _.set_commited(_.post.commited),
      _.set_deleted(_.post.deleted),
      _.set_tags(_.post.tags),
      _.set_appids(_.post.appids),
      _.set_recommendation_state(_.post.recommendation_state),
      _.set_received_for_free(_.post.received_for_free),
      _.set_received_compensation(_.post.received_compensation),
      _.set_blurb(_.post.blurb));
    let _ = _.Init(_);
    (_.Body().set_post(_), _.Body().set_draft(_));
    let _ = await _.PublishPartnerEvent(_.Get().GetCuratorTransport(), _);
    return (
      _.GetEResult() == 1
        ? (_(() => {
            let _ = {
              url: _.post.url,
              clan_event_gid: _.Body().clan_event_gid(),
              news_post_gid: _.Body().news_post_gid(),
            };
            this.m_mapURLToPosted.set(_.post.url, _);
          }),
          _.LoadPartnerEventFromClanEventGIDAndClanSteamID(
            this.m_clanSteamID,
            _.Body().clan_event_gid(),
            0,
          ))
        : console.error(
            `CreatePost error: ` + _.GetEMsg() + ` ` + _.GetEResult(),
          ),
      _
    );
  }
};
(_([_], _.prototype, `m_strRSSFeedURL`, void 0),
  _([_], _.prototype, `m_strRSSGID`, void 0),
  _([_], _.prototype, `m_rtimeRSSLastChecked`, void 0),
  _([_], _.prototype, `m_nPollIntervalSeconds`, void 0),
  _([_], _.prototype, `m_eRSSFeedLanguage`, void 0),
  _([_], _.prototype, `m_eCuratorLanguage`, void 0),
  _([_], _.prototype, `m_mapURLToPosted`, void 0));
var _ = class _ {
  constructor() {
    _(this);
  }
  static s_CuratorAdminStore;
  m_transport;
  m_mapClanAccountToAdmin = new Map();
  m_defaultAdmin = void 0;
  m_mapClanToEventRSSStats = new Map();
  m_setPendingClanInfo = new Set();
  m_PendingClanInfoPromise;
  m_PendingClanInfoResolve;
  m_cClanInfoRequestsInFlight = 0;
  GetCuratorTransport() {
    return (
      _(this.m_transport, `Expects Transpoate to be initialized but it is now`),
      this.m_transport
    );
  }
  GetDefaultAdmin() {
    return this.m_defaultAdmin;
  }
  GetRSSAdminStats(_) {
    return this.m_mapClanToEventRSSStats.get(_);
  }
  static Get() {
    return (
      _.s_CuratorAdminStore ||
        ((_.s_CuratorAdminStore = new _()), _.s_CuratorAdminStore.Init()),
      _.s_CuratorAdminStore
    );
  }
  Init() {
    let _ = _(`curatoradmin`, `application_config`);
    (this.ValidateStoreDefault(_) &&
      ((this.m_defaultAdmin = new _(_)),
      this.m_mapClanAccountToAdmin.set(_.clanid, this.m_defaultAdmin)),
      this.ValidateWebAPI(_) &&
        (this.m_transport = _(
          new _(_.WEBAPI_BASE_URL, _.webapi_token),
        ).GetServiceTransport()));
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && typeof _ == `object` && typeof _.clanid == `number`;
  }
  ValidateWebAPI(_) {
    let _ = _;
    return _ && typeof _.webapi_token == `string`;
  }
  BIsLoggedIn() {
    return _.logged_in;
  }
  BHavePendingInfoRequests() {
    return (
      this.m_setPendingClanInfo.size > 0 || this.m_cClanInfoRequestsInFlight > 0
    );
  }
  BIsLoadingClanID(_) {
    return this.m_setPendingClanInfo.has(_);
  }
  BHasClanIDLoaded(_) {
    return this.m_mapClanAccountToAdmin.has(_);
  }
  GetRSSAdminForClanAccountID(_) {
    return this.m_mapClanAccountToAdmin.get(_);
  }
  async QueueCuratorAdminInfoLoad(_) {
    return _
      ? this.m_mapClanAccountToAdmin.has(_)
        ? Promise.resolve()
        : (this.m_setPendingClanInfo.size ||
            ((this.m_PendingClanInfoPromise = new Promise(
              (_) => (this.m_PendingClanInfoResolve = _),
            )),
            window.setTimeout(() => this.FlushPendingClanInfo(), 25)),
          this.m_setPendingClanInfo.add(_),
          this.m_PendingClanInfoPromise)
      : (_(!_, `unexpected clanid of zero or undefined: ` + _),
        Promise.resolve());
  }
  async FlushPendingClanInfo() {
    let _ = this.m_PendingClanInfoResolve,
      _ = Array.from(this.m_setPendingClanInfo);
    ((this.m_PendingClanInfoPromise = void 0),
      (this.m_PendingClanInfoResolve = void 0),
      this.m_setPendingClanInfo.clear(),
      await this.LoadBatchedClanRSSAdminInfo(_),
      _());
  }
  EnsureClanInfoLoaded(_) {
    let _ = _.filter(
      (_) =>
        !this.m_mapClanAccountToAdmin.has(_) &&
        this.m_setPendingClanInfo.has(_),
    );
    return (
      _.forEach((_) => this.QueueCuratorAdminInfoLoad(_)),
      _.length > 0 && this.m_PendingClanInfoPromise
        ? this.m_PendingClanInfoPromise
        : Promise.resolve()
    );
  }
  async LoadBatchedClanRSSAdminInfo(_) {
    this.m_cClanInfoRequestsInFlight++;
    let _ = _.filter((_) => !this.m_mapClanAccountToAdmin.has(_));
    for (; _.length > 0;) {
      let _ = Math.min(50, _.length);
      (_.slice(0, _), (_ = _.slice(_)));
      try {
        let _ = _.STORE_BASE_URL + `events_admin/ajaxgetrssadmininfo`,
          _ = {
            clanids: _,
          },
          _ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          });
        if (
          _ &&
          _.data &&
          _.data.success == 1 &&
          _.data.rss_admin_infos &&
          Array.isArray(_.data.rss_admin_infos)
        )
          _(() => {
            (_.data.rss_admin_infos.forEach((_) => {
              this.m_mapClanAccountToAdmin.set(_.clanid, new _(_));
            }),
              _.data.rss_event_stats.forEach((_) => {
                this.m_mapClanToEventRSSStats.set(_.clan_account_id, _);
              }));
          });
        else {
          let _ = _(_.data || {});
          console.error(
            `LoadBatchedClanRSSAdminInfo error:` + _.strErrorMsg,
            _,
          );
        }
      } catch (_) {
        let _ = _(_);
        console.error(
          `LoadBatchedClanRSSAdminInfo catched error:` + _.strErrorMsg,
          _,
        );
      }
    }
    this.m_cClanInfoRequestsInFlight--;
  }
};
(_([_.shallow], _.prototype, `m_mapClanAccountToAdmin`, void 0),
  _([_.shallow], _.prototype, `m_mapClanToEventRSSStats`, void 0));
var _ = class _ {
    static s_CuratorStore;
    m_mapClanToRecommendation = new Map();
    static Get() {
      return (
        _.s_CuratorStore ||
          ((_.s_CuratorStore = new _()),
          _.s_CuratorStore.Init(),
          (window.g_CuratorRecommendationStore = _.s_CuratorStore)),
        _.s_CuratorStore
      );
    }
    Init() {}
    GetReviewForApp(_, _) {
      if (this.m_mapClanToRecommendation.has(_.GetAccountID()))
        return this.m_mapClanToRecommendation.get(_.GetAccountID()).get(_);
    }
    BHasReviewForApp(_, _) {
      return !!this.GetReviewForApp(_, _);
    }
    BHasReviewForAppByClanAccount(_, _) {
      let _ = _.InitFromClanID(_, _.EUNIVERSE);
      return !!this.GetReviewForApp(_, _);
    }
    async LoadAppRecommendation(_, _) {
      this.m_mapClanToRecommendation.has(_.GetAccountID()) ||
        this.m_mapClanToRecommendation.set(_.GetAccountID(), new Map());
      let _ = this.m_mapClanToRecommendation.get(_.GetAccountID()),
        _ = [];
      if (
        (_.forEach((_) => {
          _.has(_) || _.push(_);
        }),
        _.length > 0)
      ) {
        let _ =
            _.STORE_BASE_URL +
            `curator/` +
            _.GetAccountID() +
            `/admin/ajaxgetrecbyapps`,
          _ = await _.default.get(_, {
            params: {
              appids: _,
              _: _.COUNTRY || `US`,
              _: _.LANGUAGE,
            },
          }),
          _ = _ && _.data;
        _ &&
          _.rec_app &&
          _.rec_app.forEach((_) => {
            _.set(Number(_.appid), _);
          });
      }
    }
  },
  _ = _(_()),
  _ = `f5lhuHguPrY-`,
  _ = `ptyVWjHLNng-`,
  _ = `zeS3ZkFq0zw-`,
  _ = `YQGhJWrMSMs-`,
  _ = `_09zNEQrMhfU-`,
  _ = `L50-BI1LGEY-`,
  _ = `_-5UFO22reSE-`,
  _ = `Q6niX9kwLVE-`,
  _ = `dlUATfJ5mb4-`,
  _ = `q7lAuIlHZzE-`,
  _ = `r3p-QXe2ER8-`,
  _ = `YM5m3B8SHUU-`,
  _ = `Nujwth5QyYc-`,
  _ = `_6gxlVwgSD9c-`,
  _ = _(),
  _ = class extends _.Component {
    state = {
      strRssURL: _.Get().GetDefaultAdmin().GetRSSUrl(),
    };
    m_Admin = _.Get().GetDefaultAdmin();
    OnChangeActualRSSURL(_) {
      this.setState({
        strRssURL: _.target.value,
      });
    }
    OnCreateOrSaveFeed(_) {
      (_.preventDefault(),
        _(
          (0, _.jsx)(_, {
            strRSSUrl: this.state.strRssURL,
            admin: this.m_Admin,
          }),
          _(_),
        ));
    }
    OnRevert(_) {
      (_.preventDefault(),
        this.setState({
          strRssURL: this.m_Admin.GetRSSUrl(),
        }));
    }
    render() {
      let _ = this.state.strRssURL === this.m_Admin.GetRSSUrl();
      if (window.Prototype !== void 0) return (window.location.reload(), null);
      let _ = _(_(this.m_Admin.GetFeedLanguageHandleUnset())),
        _ = _.Get().GetDefaultAdmin();
      return (0, _.jsxs)(`div`, {
        className: _(_),
        children: [
          (0, _.jsxs)(`div`, {
            className: `titleframe`,
            children: [
              (0, _.jsx)(`h4`, {
                children: _(`#CuratorAdmin_RSSFeed_title`),
              }),
              (0, _.jsx)(`p`, {
                className: `subtitle`,
                children: _(`#CuratorAdmin_RSSFeed_desc`),
              }),
              (0, _.jsx)(`p`, {
                children: _(
                  `#CuratorAdmin_RSSFeed_doc_link`,
                  (0, _.jsx)(`a`, {
                    href: `https://partner.steamgames.com/doc/store/news/rss`,
                    target: `_blank`,
                    children: _(`#CuratorAdmin_RSSFeed_doc_link_text`),
                  }),
                ),
              }),
              (0, _.jsx)(`p`, {
                className: _,
                children: (0, _.jsx)(_, {
                  href:
                    _.COMMUNITY_BASE_URL +
                    `gid/` +
                    this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                    `/partnerevents/`,
                  className: _(_, _),
                  children: _(`#RSSManager_EventDashBoard`),
                }),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: `darkframe`,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`span`, {
                    className: _,
                    children: _(`#CuratorAdmin_RSSFeed_lang_only`),
                  }),
                  (0, _.jsx)(`span`, {
                    className: _,
                    children: _,
                  }),
                  (0, _.jsx)(`a`, {
                    href:
                      _.COMMUNITY_BASE_URL +
                      `gid/` +
                      this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                      `/edit `,
                    target: `_blank`,
                    className: _(_, _),
                    children: _(`#CuratorAdmin_RSSFeed_edit_language`),
                  }),
                ],
              }),
              this.m_Admin.GetFeedLanguageHandleUnset() !=
                this.m_Admin.GetCuratorLanguage() &&
                (0, _.jsx)(`div`, {
                  className: _(`YM5m3B8SHUU-`, `d1pzzsdLKFY-`),
                  children: (0, _.jsx)(`span`, {
                    className: `Nujwth5QyYc-`,
                    children: _(
                      `#CuratorAdmin_Curator_lang_only`,
                      _(`#Language_` + _(this.m_Admin.GetCuratorLanguage())),
                      _,
                    ),
                  }),
                }),
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(_, {
                    className: void 0,
                    type: `text`,
                    name: `link_url`,
                    _: `link_url`,
                    value: this.state.strRssURL,
                    label: _(`#CuratorAdmin_RSSFeed`),
                    placeholder: _(`#CuratorAdmin_RSSFeed_placeholder`),
                    onChange: this.OnChangeActualRSSURL,
                    mustBeURL: !0,
                  }),
                  (0, _.jsx)(`a`, {
                    className: `btn_green_white_innerfade btn_medium`,
                    onClick: this.OnCreateOrSaveFeed,
                    children: (0, _.jsx)(`span`, {
                      children: _(_ ? `#Button_Saved` : `#Button_Save`),
                    }),
                  }),
                  !_ &&
                    (0, _.jsx)(`a`, {
                      onClick: this.OnRevert,
                      className: `btn_grey_white_innerfade btn_medium`,
                      children: _(`#Button_Revert`),
                    }),
                ],
              }),
              (0, _.jsx)(_, {
                admin: _,
              }),
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(_, {
                strRssURL: this.state.strRssURL,
                admin: _,
              }),
            ],
          }),
        ],
      });
    }
  };
(_([_], _.prototype, `OnChangeActualRSSURL`, null),
  _([_], _.prototype, `OnCreateOrSaveFeed`, null),
  _([_], _.prototype, `OnRevert`, null),
  (_ = _([_], _)));
var _ = _,
  _ = class extends _.Component {
    state = {
      strParseRssURL: this.props.strRssURL,
      bLoadingPreview: !1,
    };
    m_cancelSignal = _.default.CancelToken.source();
    componentDidMount() {
      let { admin: _ } = this.props;
      _.BHasFeedGID() &&
        _.BHasSavedRSSURL() &&
        _.GetRSSUrl() == this.props.strRssURL &&
        this.OnLoadPreview();
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(
        `PreviewRSSViewAndControl component unmounted`,
      );
    }
    RenderPreviews() {
      let _ = this.props.admin,
        _ = [];
      if (this.state.previews) {
        let _ = this.state.previews;
        ((_ = _.sort((_, _) => {
          let _ = _.MapArticleURLToClanEventGID(_.post.url),
            _ = _.MapArticleURLToClanEventGID(_.post.url),
            _ = _ ? _.GetClanEventModel(_) : null,
            _ = _ ? _.GetClanEventModel(_) : null;
          return _ && _
            ? _.postTime - _.postTime
            : _
              ? -1
              : _
                ? 1
                : _.post.rtime_date - _.post.rtime_date;
        })),
          _.forEach((_) => {
            _.push(
              (0, _.jsx)(
                _,
                {
                  newsData: _,
                  admin: _,
                  clanSteamID: _.GetClanSteamID(),
                  fnGetRSSUrl: this.GetRSSPreviewURL,
                },
                `id: ` + _.unique_id,
              ),
            );
          }));
      }
      return _;
    }
    GetRSSPreviewURL() {
      return this.state.strParseRssURL;
    }
    OnLoadPreview() {
      this.setState(
        {
          bLoadingPreview: !0,
          previews: void 0,
          strPreviewURL: this.props.strRssURL,
          strPreviewErrorMsg: void 0,
        },
        this.DoLoadPreview,
      );
    }
    async DoLoadPreview() {
      let _ = this.props.admin,
        _ = await _.PreviewPartnerEventsFromRSSFeed(this.props.strRssURL);
      if (_ && _.GetEResult() == 1) {
        let _ = _.Body().toObject();
        this.setState(
          {
            strParseRssURL: _.rss_url,
            bLoadingPreview: !0,
          },
          async () => {
            await _.FetchPublishedEvents(Math.max(100, _.results.length));
            let _ = [],
              _ = [];
            if (
              (_.results.forEach((_) => {
                let _ = _.MapArticleURLToClanEventGID(_.post.url);
                (_ && _.push(_),
                  _.post.appids &&
                    _.post.appids.length === 1 &&
                    _.post.recommendation_state !== 0 &&
                    _.push(_.post.appids[0]));
              }),
              _.length > 0 &&
                (await _.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  _,
                  null,
                  this.m_cancelSignal,
                )),
              _.length > 0)
            ) {
              let _ = _.GetClanSteamID();
              await _.Get().LoadAppRecommendation(_, _);
            }
            this.setState({
              previews: _.results,
              bLoadingPreview: void 0,
            });
          },
        );
      } else
        this.setState({
          bLoadingPreview: void 0,
          strPreviewErrorMsg: _(
            `#Error_Description`,
            _.GetEResult(),
            _.Hdr().error_message(),
          ),
        });
    }
    render() {
      let _ = this.RenderPreviews(),
        _ = this.props.admin;
      return (0, _.jsxs)(`div`, {
        children: [
          !this.state.bLoadingPreview &&
            this.state.strPreviewURL !== this.props.strRssURL &&
            (0, _.jsx)(`div`, {
              className: `_3MoE1wNr5W8-`,
              children: (0, _.jsx)(_, {
                disabled: !_.validateUrl(this.props.strRssURL),
                onClick: this.OnLoadPreview,
                children: _(`#CuratorAdmin_RSSFeed_preview`),
              }),
            }),
          this.state.bLoadingPreview &&
            (0, _.jsx)(_, {
              string: _(`#Loading`),
              size: `medium`,
              position: `center`,
            }),
          this.state.strPreviewErrorMsg &&
            (0, _.jsx)(`div`, {
              className: void 0,
              children: this.state.strPreviewErrorMsg,
            }),
          _.length > 0 &&
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`p`, {
                  children: _(
                    `#RSSManager_PreviewInfo`,
                    this.state.strPreviewURL,
                  ),
                }),
                (0, _.jsx)(`div`, {
                  className: `d--ExixqFcY-`,
                  children: _,
                }),
                (0, _.jsx)(`p`, {
                  className: `Q6niX9kwLVE-`,
                  children: (0, _.jsx)(_, {
                    href:
                      _.COMMUNITY_BASE_URL +
                      `gid/` +
                      _.GetClanSteamID().ConvertTo64BitString() +
                      `/partnerevents/`,
                    className: _(`yYL-OrX9PtQ-`, `_3UP7lu7R3VU-`),
                    children: _(`#RSSManager_EventDashBoard`),
                  }),
                }),
              ],
            }),
        ],
      });
    }
  };
(_([_], _.prototype, `GetRSSPreviewURL`, null),
  _([_], _.prototype, `OnLoadPreview`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  state = {};
  OnToggleChannelAutomation(_) {
    _
      ? (this.setState({
          strErrorMessage: void 0,
        }),
        _(
          (0, _.jsx)(_, {
            strRSSUrl: this.props.admin.GetRSSUrl(),
            admin: this.props.admin,
            bActivatePooling: !0,
          }),
          window,
        ))
      : this.setState(
          {
            strErrorMessage: void 0,
            strReasonWaiting: _(`#Saving`),
          },
          this.BDisableAutomation,
        );
  }
  async BDisableAutomation() {
    this.props.admin
      .UpdateAutomation(!1)
      .catch(() =>
        this.setState({
          strErrorMessage: _(`#RSSManager_Status_Automation_DisableFailed`),
        }),
      )
      .finally(() =>
        this.setState({
          strReasonWaiting: void 0,
        }),
      );
  }
  async OnQueueScan(_) {
    (this.setState({
      strReasonWaiting: _(`#CuratorAdmin_RSSFeed_scannow`),
    }),
      this.props.admin
        .CheckForNewUpdate()
        .then(() =>
          _(
            (0, _.jsx)(_, {
              strTitle: _(`#CuratorAdmin_RSSFeed_scannow`),
              strDescription: _(`#CuratorAdmin_RSSFeed_queued`),
            }),
            _(_),
          ),
        )
        .catch((_) =>
          _(
            (0, _.jsx)(_, {
              strTitle: _(`#CuratorAdmin_RSSFeed_scannow`),
              strDescription: _(_).strErrorMsg,
            }),
            _(_),
          ),
        )
        .finally(() =>
          this.setState({
            strReasonWaiting: void 0,
          }),
        ));
  }
  render() {
    return this.props.admin.BHasSavedRSSURL()
      ? (0, _.jsxs)(`div`, {
          children: [
            !!this.state.strReasonWaiting &&
              (0, _.jsx)(_, {
                size: `medium`,
                string: this.state.strReasonWaiting,
              }),
            !!this.state.strErrorMessage &&
              (0, _.jsx)(`div`, {
                className: `wE4s0RgHgCk-`,
                children: this.state.strErrorMessage,
              }),
            (0, _.jsx)(_, {
              onChange: this.OnToggleChannelAutomation,
              label: _(`#RSSManager_Status_Automation_Desc`),
              checked: this.props.admin.BIsAutomationEnabled(),
              description: ``,
            }),
            this.props.admin.BIsAutomationEnabled() &&
              (0, _.jsxs)(`p`, {
                children: [
                  _(`#CuratorAdmin_RSSFeed_lastscanned`),
                  `\xA0`,
                  _(this.props.admin.GetRSSLastRtimeChecked(), !1),
                  `\xA0 @ `,
                  _(this.props.admin.GetRSSLastRtimeChecked(), {
                    bForce24HourClock: !1,
                  }),
                  `\xA0`,
                  (0, _.jsx)(`a`, {
                    onClick: this.OnQueueScan,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#CuratorAdmin_RSSFeed_scannow`),
                    }),
                  }),
                ],
              }),
          ],
        })
      : null;
  }
};
(_([_], _.prototype, `OnToggleChannelAutomation`, null),
  _([_], _.prototype, `OnQueueScan`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  state = {
    clan_event_gid: this.props.admin.MapArticleURLToClanEventGID(
      this.props.newsData.post.url,
    ),
    bLoadingPartnerEvent: !!this.props.admin.MapArticleURLToClanEventGID(
      this.props.newsData.post.url,
    ),
  };
  componentDidMount() {
    this.DoPartnerEventLoad();
  }
  async DoPartnerEventLoad() {
    if (this.state.clan_event_gid) {
      let _ = this.props.admin.GetClanSteamID(),
        _ = _.GetClanEventModel(this.state.clan_event_gid);
      ((_ ||= await _.LoadHiddenPartnerEvent(_, this.state.clan_event_gid)),
        this.setState({
          bLoadingPartnerEvent: !1,
          existingEventModel: _,
        }));
    }
  }
  OnOpenPreviewAsPartnerEvent(_) {
    let { newsData: _, clanSteamID: _ } = this.props,
      _ = new _();
    ((_.GID = `PreviewPartnerEventRow_0`),
      (_.clanSteamID = _),
      (_.postTime = Date.now() / 1e3),
      (_.startTime = Date.now() / 1e3),
      (_.type = 28),
      _.vecTags.push(`auto_rssfeed`),
      _.vecTags.push(`curator`),
      _.vecTags.push(`curator_public`),
      _.name.set(0, _.title),
      _.description.set(0, _.desc),
      this.ValidateJSONDefault(_.jsondata) && (_.jsondata = _.jsondata),
      _.jsondata.read_more_link || (_.jsondata.read_more_link = _.unique_id));
    let _ = this.props.admin.GetFeedLanguageHandleUnset();
    (!_.jsondata.localized_summary &&
      _.post.event_summary &&
      ((_.jsondata.localized_summary = _(
        _.jsondata.localized_summary,
        32,
        null,
      )),
      (_.jsondata.localized_summary[0] = _.post.event_summary),
      _ != 0 && (_.jsondata.localized_summary[_] = _.post.event_summary)),
      !_.jsondata.localized_subtitle &&
        _.post.event_subtitle &&
        ((_.jsondata.localized_subtitle = _(
          _.jsondata.localized_subtitle,
          32,
          null,
        )),
        (_.jsondata.localized_subtitle[0] = _.post.event_subtitle),
        _ != 0 && (_.jsondata.localized_subtitle[_] = _.post.event_subtitle)),
      this.ShowModalEvent(_));
  }
  OnViewEvent() {
    this.ShowModalEvent(_.GetClanEventModel(this.state.clan_event_gid));
  }
  ShowModalEvent(_) {
    let _ = document.getElementById(`curator_header_area_ctn_id`);
    (_ &&
      (_
        ? _.classList.add(`curator_header_area_ctn_hideme`)
        : _.classList.remove(`curator_header_area_ctn_hideme`)),
      this.setState({
        eventModelForPreviewNow: _,
      }));
  }
  ValidateJSONDefault(_) {
    let _ = _;
    return !(!_ || Array.isArray(_) || typeof _ != `object`);
  }
  OnPostNewsEvent(_) {
    let { newsData: _, fnGetRSSUrl: _ } = this.props;
    _(
      (0, _.jsx)(_, {
        newsData: _,
        admin: this.props.admin,
        strRSSUrl: _(),
        fnClanEventGID: this.OnClanEventCreateSuccess,
      }),
      _(_),
    );
  }
  OnUpdateNewsEvent(_) {
    let { newsData: _, fnGetRSSUrl: _ } = this.props;
    _(
      (0, _.jsx)(_, {
        newsData: _,
        strRSSUrl: _(),
        admin: this.props.admin,
        fnClanEventGID: this.OnClanEventCreateSuccess,
        bUpdatePost: !0,
      }),
      _(_),
    );
  }
  HideModalEvent() {
    this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
  }
  OnClanEventCreateSuccess(_) {
    this.setState(
      {
        clan_event_gid: _,
        bLoadingPartnerEvent: !0,
      },
      this.DoPartnerEventLoad,
    );
  }
  OnShowRawRSS(_) {
    let _ = this.props.newsData.rss_message,
      _ = (() => {
        let _ = _.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
        if (!_) return _;
        let _ = _[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
        return _ ? _(_[0]) : _[0];
      })();
    _(
      (0, _.jsx)(_, {
        bAlertDialog: !0,
        strTitle: _(`#RSSManager_PostEvent_ViewRaw`),
        children: (0, _.jsx)(`textarea`, {
          className: _,
          value: _,
          disabled: !0,
        }),
      }),
      _(_),
    );
  }
  render() {
    let { newsData: _ } = this.props,
      {
        clan_event_gid: _,
        existingEventModel: _,
        bLoadingPartnerEvent: _,
      } = this.state,
      _ = this.props.admin,
      _ = _.GetClanSteamID(),
      _ = _ && _.BIsStagedEvent(),
      _ = _.post.appids && _.post.appids.length == 1 && _.post.appids[0],
      _ =
        _.post.recommendation_state !== 0 &&
        _ &&
        _.Get().BHasReviewForApp(_, _),
      _ = ``;
    if (_) {
      let _ =
        _.GetVisibilityStartTimeAndDateUnixSeconds() ||
        _.GetPostTimeAndDateUnixSeconds();
      _ =
        _(_) +
        ` @ ` +
        _(_, {
          bForce24HourClock: !1,
        });
    }
    return (0, _.jsxs)(`div`, {
      className: _(_, _ ? _ : ``, _.valid_post ? `` : _),
      children: [
        (0, _.jsx)(`span`, {
          className: _,
          children: _.title,
        }),
        (0, _.jsx)(`br`, {}),
        !!_ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              !!_.BIsVisibleEvent() &&
                (0, _.jsx)(`span`, {
                  className: `IP3sdUH0uro-`,
                  children: _(`#RSSManager_PostEvent_PostedDate`, _),
                }),
              !_.BIsVisibleEvent() &&
                (0, _.jsx)(`span`, {
                  className: _(`_2n3sawSRISs-`, _ ? `hd4if3tg5YI-` : ``),
                  children: _(
                    _
                      ? `#RSSManager_PostEvent_Staged`
                      : `#RSSManager_PostEvent_Draft`,
                    _,
                  ),
                }),
            ],
          }),
        !(_.valid_post || !_.post_error_msg) &&
          (0, _.jsxs)(`div`, {
            className: `_9rhLFCwqjPg-`,
            children: [_(`#Error_Generic_Label`), ` `, _(_.post_error_msg)],
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _
              ? (0, _.jsxs)(_.Fragment, {
                  children: [
                    _
                      ? (0, _.jsx)(_, {
                          string: _(`#Loading`),
                          size: `small`,
                          position: `center`,
                        })
                      : (0, _.jsx)(`div`, {
                          onClick: this.OnViewEvent,
                          className: _(_, _),
                          children: _(`#RSSManager_PostEvent_ViewEvent`),
                        }),
                    (0, _.jsx)(`a`, {
                      className: _(_, _),
                      href:
                        _.COMMUNITY_BASE_URL +
                        `gid/` +
                        _.GetClanSteamID().ConvertTo64BitString() +
                        `/partnerevents/edit/` +
                        this.state.clan_event_gid,
                      children: _(`#RSSManager_PostEvent_EditEvent`),
                    }),
                    (0, _.jsx)(`div`, {
                      onClick: this.OnUpdateNewsEvent,
                      className: _(_, _),
                      children: _(`#RSSManager_PostEvent_UpdateEvent`),
                    }),
                    _ &&
                      (0, _.jsx)(`a`, {
                        className: _(`yYL-OrX9PtQ-`, `r3p-QXe2ER8-`),
                        href: _(
                          _.STORE_BASE_URL +
                            `app/` +
                            _.post.appids[0] +
                            `/?curator_clanid=` +
                            _.GetAccountID(),
                        ),
                        children: _(`#RSSManager_SeeReview`),
                      }),
                  ],
                })
              : (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      onClick: this.OnOpenPreviewAsPartnerEvent,
                      className: _(_, _),
                      children: _(`#CuratorAdmin_RSSFeed_col_preview_event`),
                    }),
                    (0, _.jsx)(`div`, {
                      onClick: this.OnPostNewsEvent,
                      className: _(_, _),
                      children: _(`#CuratorAdmin_RSSFeed_col_create_event`),
                    }),
                  ],
                }),
            !!(_.rss_message && _.rss_message.length > 0) &&
              (0, _.jsx)(`div`, {
                onClick: this.OnShowRawRSS,
                className: `Cs-RceqqHho-`,
                children: _(`#RSSManager_PostEvent_ViewRaw`),
              }),
            !!this.state.eventModelForPreviewNow &&
              (0, _.jsx)(_, {
                className: `k8EMgG-4Stg-`,
                children: (0, _.jsx)(`div`, {
                  children: (0, _.jsx)(_, {
                    event: this.state.eventModelForPreviewNow,
                    fnClose: this.HideModalEvent,
                  }),
                }),
              }),
          ],
        }),
      ],
    });
  }
};
(_([_], _.prototype, `DoPartnerEventLoad`, null),
  _([_], _.prototype, `OnOpenPreviewAsPartnerEvent`, null),
  _([_], _.prototype, `OnViewEvent`, null),
  _([_], _.prototype, `OnPostNewsEvent`, null),
  _([_], _.prototype, `OnUpdateNewsEvent`, null),
  _([_], _.prototype, `HideModalEvent`, null),
  _([_], _.prototype, `OnClanEventCreateSuccess`, null),
  _([_], _.prototype, `OnShowRawRSS`, null),
  (_ = _([_], _)));
var _ = class _ extends _.Component {
  state = {
    initialState: _.DetermineStartState(this.props),
    step: _.DetermineStartState(this.props),
    bDraftMode: !0,
  };
  static DetermineStartState(_) {
    let _ = _.admin.BHasSetupFeed(_.strRSSUrl);
    return !_.newsData || !_
      ? _.bActivatePooling
        ? `activate_feed`
        : _.admin.BHasSavedRSSURL()
          ? `update_feed`
          : `feed_missing`
      : _.bUpdatePost
        ? `update_post`
        : `create_post`;
  }
  OnCreateNewsFeed() {
    this.setState(
      {
        step: `creating_feed`,
      },
      this.DoCreateNewsFeed,
    );
  }
  async DoCreateNewsFeed() {
    let _ = await this.props.admin.CreateOrUpdateRSSNewFeed(
      this.props.strRSSUrl,
      this.props.bActivatePooling ? 300 : 0,
    );
    _.success == 1
      ? this.setState({
          step: this.props.newsData ? `create_post` : `success`,
        })
      : this.setState({
          step: `failure`,
          eResult: _.success,
          strErrorMessage: _(`#RSSManager_PostEvent_Failure`),
        });
  }
  OnCreatePost() {
    this.setState(
      {
        step: `waiting_post`,
      },
      this.DoCreatePost,
    );
  }
  async DoCreatePost() {
    let _ = await this.props.admin.CreatePost(
      this.props.newsData,
      !!this.state.bDraftMode,
    );
    _.GetEResult() == 1
      ? (this.props.fnClanEventGID &&
          this.props.fnClanEventGID(_.Body().clan_event_gid()),
        this.setState({
          step: `success`,
          eventGID: _.Body().clan_event_gid(),
        }))
      : this.setState({
          step: `failure`,
          eResult: _.GetEResult(),
          strErrorMessage: _(`#RSSManager_PostEvent_Failure`),
        });
  }
  OnChangeDraftMode(_) {
    this.setState({
      bDraftMode: _,
    });
  }
  OnChangePermissionsCreateFeed(_) {
    this.setState({
      bPermissions: _,
    });
  }
  OnChangeConductCreateFeed(_) {
    this.setState({
      bConduct: _,
    });
  }
  GetStrTitle() {
    if (this.props.newsData)
      return _(
        this.props.bUpdatePost
          ? `#RSSManager_PostEvent_UpdateEvent`
          : `#RSSManager_PostEvent_Tilte`,
      );
    switch (this.state.initialState) {
      case `feed_missing`:
        return _(`#RSSManager_PostEvent_CreateFeedTitle`);
      default:
      case `update_feed`:
        return _(`#RSSManager_PostEvent_UpdateFeedTitle`);
      case `activate_feed`:
        return _(`#RSSManager_Status_Automation_Activate`);
    }
  }
  render() {
    let { strRSSUrl: _ } = this.props;
    switch (this.state.step) {
      case `feed_missing`:
      case `activate_feed`:
      case `update_feed`:
      default:
        return (0, _.jsx)(_, {
          title: this.GetStrTitle(),
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsxs)(_, {
                children: [
                  this.props.newsData &&
                    (0, _.jsx)(`div`, {
                      children: _(
                        `#RSSManager_PostEvent_CreateFeed_DuringPost`,
                      ),
                    }),
                  this.state.step !== `activate_feed` &&
                    (0, _.jsx)(`div`, {
                      children: _(`#RSSManager_PostEvent_CreateFeed_Desc`, _),
                    }),
                  (0, _.jsx)(`div`, {
                    children: _(`#RSSManager_CreateFeed_Review`),
                  }),
                  (0, _.jsx)(`div`, {
                    children: (0, _.jsx)(_, {
                      label: _(`#RSSManager_CreateFeed_Permissions_v1`),
                      onChange: this.OnChangePermissionsCreateFeed,
                      checked: !!this.state.bPermissions,
                    }),
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsx)(_, {
                        label: _(`#RSSManager_CreateFeed_Conduct_v1`),
                        onChange: this.OnChangeConductCreateFeed,
                        checked: !!this.state.bConduct,
                      }),
                      (0, _.jsx)(_, {
                        href: _.STORE_BASE_URL + `online_conduct/`,
                        children: _(`#RSSManager_CreateFeed_Conduct_Link`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  bOKDisabled: !(
                    this.state.bPermissions && this.state.bConduct
                  ),
                  onOK: this.OnCreateNewsFeed,
                  onCancel: this.props.closeModal,
                }),
              }),
            ],
          }),
        });
      case `failure`:
        return (0, _.jsx)(_, {
          strDescription: _(`#RSSManager_PostEvent_Failure`),
          closeModal: this.props.closeModal,
          children: (0, _.jsx)(`div`, {
            children: _(
              `#Error_Description`,
              this.state.eResult,
              this.state.strErrorMessage,
            ),
          }),
        });
      case `creating_feed`:
      case `waiting_post`:
        return (0, _.jsx)(_, {
          strTitle: this.GetStrTitle(),
          strDescription: _(`#RSSManager_PostEvent_InFlight`),
          closeModal: this.props.closeModal,
          children: (0, _.jsx)(_, {
            position: `center`,
          }),
        });
      case `create_post`:
        return (0, _.jsx)(_, {
          title: this.GetStrTitle(),
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`div`, {
                      children: _(`#RSSManager_PostEvent_CreatePost`),
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: this.props.newsData.title,
                    }),
                    (0, _.jsx)(`br`, {}),
                    (0, _.jsx)(`div`, {
                      children: (0, _.jsx)(_, {
                        label: _(`#RSSManager_PostEvent_CreatePost_Draft`),
                        onChange: this.OnChangeDraftMode,
                        checked: !!this.state.bDraftMode,
                      }),
                    }),
                  ],
                }),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  onOK: this.OnCreatePost,
                  onCancel: this.props.closeModal,
                }),
              }),
            ],
          }),
        });
      case `update_post`:
        return (0, _.jsx)(_, {
          title: this.GetStrTitle(),
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`div`, {
                      children: _(`#RSSManager_PostEvent_UpdatePost`),
                    }),
                    (0, _.jsx)(`br`, {}),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: this.props.newsData.title,
                    }),
                    (0, _.jsx)(`br`, {}),
                  ],
                }),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  onOK: this.OnCreatePost,
                  onCancel: this.props.closeModal,
                }),
              }),
            ],
          }),
        });
      case `success`:
        return (0, _.jsx)(_, {
          strTitle: this.GetStrTitle(),
          strDescription: _(
            this.props.newsData
              ? `#RSSManager_PostEvent_Success`
              : `#RSSManager_PostEvent_Success_feed`,
          ),
          closeModal: this.props.closeModal,
          bAlertDialog: !0,
          children:
            !!this.state.eventGID &&
            (0, _.jsx)(`a`, {
              href:
                _.COMMUNITY_BASE_URL +
                `gid/` +
                this.props.admin.GetClanSteamID().ConvertTo64BitString() +
                `/partnerevents/edit/` +
                this.state.eventGID,
              children: _(`#RSSManager_PostEvent_EventLink`),
            }),
        });
    }
  }
};
(_([_], _.prototype, `OnCreateNewsFeed`, null),
  _([_], _.prototype, `DoCreateNewsFeed`, null),
  _([_], _.prototype, `OnCreatePost`, null),
  _([_], _.prototype, `DoCreatePost`, null),
  _([_], _.prototype, `OnChangeDraftMode`, null),
  _([_], _.prototype, `OnChangePermissionsCreateFeed`, null),
  _([_], _.prototype, `OnChangeConductCreateFeed`, null),
  _([_], _.prototype, `GetStrTitle`, null));
