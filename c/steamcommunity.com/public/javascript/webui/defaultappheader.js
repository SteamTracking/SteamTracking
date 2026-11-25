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
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~d3515eca4e.js";
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
} from "./chunk~e464778a03.js";
import { _, _, _ } from "./chunk~0ef0cd2c00.js";
import { _, _, _, _, _ } from "./chunk~10c934b72c.js";
var _ = _(_(), 1),
  _ = _(_(), 1);
function _() {
  let _, _;
  return {
    promise: new Promise((_, _) => {
      ((_ = _), (_ = _));
    }),
    resolve: _,
    reject: _,
  };
}
function _(_, _) {
  return _.split(_);
}
var _ = /^(steam|ftp|https?):\/\//;
function _(_) {
  return _.test(_) ? _ : `https://` + _;
}
var _ = class _ extends _.Message {
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
            accept: {
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
      return `CClan_RespondToClanInvite_Request`;
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
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.image || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            image: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            from_body: {
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
      return `CPartnerEventSummary_Image`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.background_image || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            background_image: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            scrim_color: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            desktop_layout: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            logo: {
              _: 4,
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
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            announcement_gid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            appid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_type: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            tags: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            rtime32_start_time: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime32_end_time: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime32_visibility_start: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime32_visibility_end: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_name: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            subtitle: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            summary: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            capsule_image: {
              _: 14,
              _: _,
            },
            store_path: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            rtime32_post_time: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cross_promo: {
              _: 21,
              _: _,
            },
            adult_only_content: {
              _: 22,
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
      return `CPartnerEventSummary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            events: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            language: {
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
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            announcement_gid: {
              _: 3,
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
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summaries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summaries: {
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
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 8, 12, 13, 14], null));
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
            clan_event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            clan_announcement_gid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            count_earlier: {
              _: 4,
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count_later: {
              _: 5,
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            required_tags: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            require_no_tags: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            language_preference: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            rtime_oldest_date: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_old_announcements: {
              _: 10,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            include_old_events: {
              _: 11,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_tags: {
              _: 12,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            event_type_filter: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            exclude_event_types: {
              _: 14,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            only_summaries: {
              _: 15,
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
      return `CClan_GetAdjacentPartnerEvents_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.event_data || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            event_data: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            more_before: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            more_after: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            clan_is_creator_home: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            clan_is_ogg: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            clan_is_ovg: {
              _: 6,
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
      return `CClan_GetAdjacentPartnerEvents_Response`;
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
            rtime_oldest_date: {
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.snippets || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            snippets: {
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            announcement_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            hidden: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            published: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            rtime32_start_time: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            event_type: {
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.requests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requests: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            cursor: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            count: {
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
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
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
            start_build_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_build_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            branch: {
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
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.matches || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            matches: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            num_total_results: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            next_cursor: {
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
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
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
            build_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            branch: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            clan_event_gid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            clan_account_id: {
              _: 5,
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
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Clan.RespondToClanInvite#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RespondToClanInvite = _;
  function _(_, _, _) {
    return _.SendMsg(`Clan.GetPartnerEventSummaries#1`, _(_, _, _), _, {
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetPartnerEventSummaries = _;
  function _(_, _, _) {
    return _.SendMsg(`Clan.GetAdjacentPartnerEvents#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetAdjacentPartnerEvents = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetDraftAndRecentPartnerEventSnippet = _;
  function _(_, _, _) {
    return _.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetPartnerEventsByBuildIDRange = _;
})((_ ||= {}));
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.activation_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            activation_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            purchase_platform: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            is_request_from_client: {
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
      return `CStore_RegisterCDKey_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.transactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [18], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            transactionid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            packageid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            purchase_status: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            result_detail: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            transaction_time: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            payment_method: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            base_price: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            total_discount: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            tax: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            shipping: {
              _: 10,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            currency_code: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            country_code: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            error_headline: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            error_string: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            error_link_text: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            error_link_url: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            error_appid: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            line_items: {
              _: 18,
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
      return `CStore_PurchaseReceiptInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            line_item_description: {
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
      return `CStore_PurchaseReceiptInfo_LineItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.purchase_result_details || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            purchase_result_details: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            purchase_receipt_info: {
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
      return `CStore_RegisterCDKey_Response`;
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
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            country_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            favor_rarer_tags: {
              _: 4,
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
      return `CStore_GetRecommendedTagsForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tags || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags: {
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
      return `CStore_GetRecommendedTagsForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            weight: {
              _: 3,
              _: _.readFloat,
              _: _.writeFloat,
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
      return `CStore_GetRecommendedTagsForUser_Response_Tag`;
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
      return `CStore_GetMostPopularTags_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tags || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags: {
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
      return `CStore_GetMostPopularTags_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
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
      return `CStore_GetMostPopularTags_Response_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            tagids: {
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
      return `CStore_GetLocalizedNameForTags_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tags || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags: {
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
      return `CStore_GetLocalizedNameForTags_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            english_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            normalized_name: {
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
      return `CStore_GetLocalizedNameForTags_Response_Tag`;
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
            have_version_hash: {
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
      return `CStore_GetTagList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.version_hash || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            version_hash: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            tags: {
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
      return `CStore_GetTagList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
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
      return `CStore_GetTagList_Response_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.os_win || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            os_win: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            os_mac: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            os_linux: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            full_controller_support: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            native_steam_controller: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            include_coming_soon: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            excluded_tagids: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            exclude_early_access: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_videos: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_software: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_dlc: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_soundtracks: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            featured_tagids: {
              _: 16,
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
      return `CStoreDiscoveryQueueSettings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.queue_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            queue_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            rebuild_queue: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            settings_changed: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            settings: {
              _: 5,
              _: _,
            },
            rebuild_queue_if_stale: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            ignore_user_preferences: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            no_experimental_results: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            experimental_cohort: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            debug_get_solr_query: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            store_page_filter: {
              _: 12,
              _: _,
            },
            context: {
              _: 13,
              _: _,
            },
            data_request: {
              _: 14,
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
      return `CStore_GetDiscoveryQueue_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            settings: {
              _: 3,
              _: _,
            },
            skipped: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            exhausted: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            experimental_cohort: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            debug_solr_query: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            store_items: {
              _: 8,
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
      return `CStore_GetDiscoveryQueue_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.queue_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            queue_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            store_page_filter: {
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
      return `CStore_GetDiscoveryQueueSettings_Request`;
    }
  },
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
            settings: {
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
      return `CStore_GetDiscoveryQueueSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.queue_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            queue_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            store_page_filter: {
              _: 3,
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
      return `CStore_SkipDiscoveryQueueItem_Request`;
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
      return `CStore_SkipDiscoveryQueueItem_Response`;
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
            store_appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            beta_appid: {
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
      return `CStore_GetUserGameInterestState_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.owned || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6, 7, 8, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            owned: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            wishlist: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            ignored: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            following: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            in_queues: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            queues_with_skip: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            queue_items_remaining: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            queue_items_next_appid: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            temporarily_owned: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            queues: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            ignored_reason: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            beta_status: {
              _: 12,
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
      return `CStore_GetUserGameInterestState_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            skipped: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            items_remaining: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            next_appid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            experimental_cohort: {
              _: 5,
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
      return `CStore_GetUserGameInterestState_Response_InQueue`;
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
      return `CStore_GetGamesFollowed_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
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
      return `CStore_GetGamesFollowed_Response`;
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
      return `CStore_GetGamesFollowedCount_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.followed_game_count || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            followed_game_count: {
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
      return `CStore_GetGamesFollowedCount_Response`;
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
            report_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            report: {
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
      return `CStore_ReportApp_Request`;
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
      return `CStore_ReportApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.primary_language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            primary_language: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            secondary_languages: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            platform_windows: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            platform_mac: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            platform_linux: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            timestamp_updated: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            hide_store_broadcast: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            review_score_preference: {
              _: 10,
              _: _.readEnum,
              _: _.writeEnum,
            },
            timestamp_content_descriptor_preferences_updated: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            provide_deck_feedback: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            additional_languages: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            game_frame_rate_reporting: {
              _: 14,
              _: _.readEnum,
              _: _.writeEnum,
            },
            disable_microtrailers: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            disable_animated_marketing: {
              _: 16,
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
      return `CStore_UserPreferences`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tags_to_exclude || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags_to_exclude: {
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
      return `CStore_UserTagPreferences`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            timestamp_added: {
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
      return `CStore_UserTagPreferences_Tag`;
    }
  },
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
      return `CStore_GetStorePreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
              _: 1,
              _: _,
            },
            tag_preferences: {
              _: 2,
              _: _,
            },
            content_descriptor_preferences: {
              _: 3,
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
      return `CStore_GetStorePreferences_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.num_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            num_apps: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_top_friends: {
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
      return `CStore_GetTrendingAppsAmongFriends_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.trending_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            trending_apps: {
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
      return `CStore_GetTrendingAppsAmongFriends_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            steamids_top_friends: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            total_friends: {
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
      return `CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packages_to_reserve || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packages_to_reserve: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            packages_to_unreserve: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            country_code: {
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
      return `CStore_UpdatePackageReservations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reservation_status || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reservation_status: {
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
      return `CStore_UpdatePackageReservations_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.edistributor || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            edistributor: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            product_identifier: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            start_queue_position: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_estimated_notification: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            localization_token: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            accountid: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_created: {
              _: 7,
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
      return `CReservationPositionMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            settings: {
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
      return `CStore_SetReservationPositionMessage_Request`;
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
      return `CStore_SetReservationPositionMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.edistributor || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            edistributor: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            product_identifier: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            start_queue_position: {
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
      return `CStore_DeleteReservationPositionMessage_Request`;
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
      return `CStore_DeleteReservationPositionMessage_Response`;
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
      return `CStore_GetAllReservationPositionMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            settings: {
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
      return `CStore_GetAllReservationPositionMessages_Response`;
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
      return `CStore_ReloadAllReservationPositionMessages_Notification`;
    }
  },
  _ = class _ extends _.Message {
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
            browserid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            backfill_source: {
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
      return `CStore_MigratePartnerLinkTracking_Notification`;
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
            feedback: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            feedback_details: {
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
      return `CSteamDeckCompatibility_SetFeedback_Request`;
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
      return `CSteamDeckCompatibility_SetFeedback_Response`;
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
      return `CSteamDeckCompatibility_ShouldPrompt_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.prompt || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            prompt: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            feedback_eligible: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            existing_feedback: {
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
      return `CSteamDeckCompatibility_ShouldPrompt_Response`;
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
            demo_appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allow_late_firing: {
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
      return `CStore_GetWishlistDemoEmailStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.can_fire || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            can_fire: {
              _: 1,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            time_staged: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            demo_release_date: {
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
      return `CStore_GetWishlistDemoEmailStatus_Response`;
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
            demo_appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allow_late_firing: {
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
      return `CStore_QueueWishlistDemoEmailToFire_Request`;
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
      return `CStore_QueueWishlistDemoEmailToFire_Response`;
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
            queue_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            store_page_filter: {
              _: 3,
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
      return `CStore_GetDiscoveryQueueSkippedApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
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
      return `CStore_GetDiscoveryQueueSkippedApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
              _: 1,
              _: _,
            },
            tag_preferences: {
              _: 2,
              _: _,
            },
            content_descriptor_preferences: {
              _: 3,
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
      return `CStore_StorePreferencesChanged_Notification`;
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
            steamid: {
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
      return `CPlaytest_RequestInvite_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites_remaining || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites_remaining: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            status: {
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
      return `CPlaytest_RequestInvite_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            status: {
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
      return `CPlaytest_UpdateInvites_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites_updated || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites_updated: {
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
      return `CPlaytest_UpdateInvites_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_id: {
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
      return `CPlaytest_GetInvites_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites: {
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
      return `CPlaytest_GetInvites_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid_inviter: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            status: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_created: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_name: {
              _: 6,
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
      return `CPlaytest_GetInvites_Response_Invite`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.limit || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            limit: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_before: {
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
      return `CPlaytest_GetInviteHistory_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites: {
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
      return `CPlaytest_GetInviteHistory_Response`;
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
            steamid_invited: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_created: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_name: {
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
      return `CPlaytest_GetInviteHistory_Response_Invite`;
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
      return `CPlaytest_GetUserStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            results: {
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
      return `CPlaytest_GetUserStatus_Response`;
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
            status: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            invites_remaining: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            time_joined: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            packageid: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            invites_sent: {
              _: 6,
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
      return `CPlaytest_GetUserStatus_Response_AppStatus`;
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
      return `CPlaytest_GetInviteOptions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ineligible_friends || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ineligible_friends: {
              _: 1,
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
      return `CPlaytest_GetInviteOptions_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Store.RegisterCDKey#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RegisterCDKey = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetRecommendedTagsForUser#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetRecommendedTagsForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetMostPopularTags#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetMostPopularTags = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetLocalizedNameForTags#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetLocalizedNameForTags = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetTagList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetTagList = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetDiscoveryQueue#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetDiscoveryQueue = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetDiscoveryQueueSettings#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetDiscoveryQueueSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.SkipDiscoveryQueueItem#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.SkipDiscoveryQueueItem = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetUserGameInterestState#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetUserGameInterestState = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetGamesFollowed#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetGamesFollowed = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetGamesFollowedCount#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetGamesFollowedCount = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetDiscoveryQueueSkippedApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetDiscoveryQueueSkippedApps = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.ReportApp#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.ReportApp = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetStorePreferences#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetStorePreferences = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetTrendingAppsAmongFriends#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetTrendingAppsAmongFriends = _;
  function _(_, _) {
    return _.SendNotification(`Store.MigratePartnerLinkTracking#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.MigratePartnerLinkTracking = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.UpdatePackageReservations#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.UpdatePackageReservations = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetWishlistDemoEmailStatus#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetWishlistDemoEmailStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.QueueWishlistDemoEmailToFire#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.QueueWishlistDemoEmailToFire = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.SetReservationPositionMessage#1`, _(_, _, _), _, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.SetReservationPositionMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Store.DeleteReservationPositionMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.DeleteReservationPositionMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Store.GetAllReservationPositionMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetAllReservationPositionMessages = _;
  function _(_, _) {
    return _.SendNotification(
      `Store.ReloadAllReservationPositionMessages#1`,
      _(_, _),
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.ReloadAllReservationPositionMessages = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.SetCompatibilityFeedback#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetCompatibilityFeedback = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Store.ShouldPromptForCompatibilityFeedback#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ShouldPromptForCompatibilityFeedback = _;
})((_ ||= {}));
var _;
(function (_) {
  _.NotifyStorePreferencesChangedHandler = {
    name: `StoreClient.NotifyStorePreferencesChanged#1`,
    request: _,
  };
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Playtest.RequestInvite#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.RequestInvite = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.UpdateInvites#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.UpdateInvites = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.GetInvites#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetInvites = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.GetInviteHistory#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetInviteHistory = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.GetUserStatus#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetUserStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.GetInviteOptions#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetInviteOptions = _;
})((_ ||= {}));
var _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~89a803f0a0.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~d00edbc9bc.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~6ff40f825a.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~5481d27c11.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~38719df15b.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~34eda9e5d0.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~1f602198c6.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~951fbef41e.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~8cdb223b4d.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~dd7b2e8c9c.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~8b8b32dca2.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~6cab8b1d2b.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~3e06799cd5.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~191fc766b2.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~bfb9245d4b.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~937d60cb41.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~f44c1cdaa6.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~e549db3577.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~91df80654f.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~f510e2424a.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~33c59b3b51.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~0ce3fe2c7a.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~30e31cdd08.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~014d3780ee.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~615292967d.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~36cf0dbc2a.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~cb73f0619c.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~d710c4bf90.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~ef16a772ee.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~3d2d033d5a.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~5f24a082ea.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~32e8c88be8.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_, _, _) {
  let _;
  _ =
    _ === void 0 || _ === !0 || _ === !1
      ? {
          weekday: _ ? `long` : `short`,
          year: _ ? void 0 : `numeric`,
        }
      : _;
  let _ = new Date(_ * 1e3),
    _ = {
      weekday: `short`,
      month: `long`,
      day: `numeric`,
      year: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  return _.toLocaleDateString(_(), {
    year: `numeric`,
  });
}
function _(_) {
  return _.toLocaleDateString(_(), {
    month: `long`,
    year: `numeric`,
  });
}
function _(_, _) {
  switch (_.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return _.Localize(
        _ ? `#Time_QuarterOfYear_Expanded_Q1` : `#Time_QuarterOfYear_Q1`,
        _.getUTCFullYear(),
      );
    case 3:
    case 4:
    case 5:
      return _.Localize(
        _ ? `#Time_QuarterOfYear_Expanded_Q2` : `#Time_QuarterOfYear_Q2`,
        _.getUTCFullYear(),
      );
    case 6:
    case 7:
    case 8:
      return _.Localize(
        _ ? `#Time_QuarterOfYear_Expanded_Q3` : `#Time_QuarterOfYear_Q3`,
        _.getUTCFullYear(),
      );
    default:
      return _.Localize(
        _ ? `#Time_QuarterOfYear_Expanded_Q4` : `#Time_QuarterOfYear_Q4`,
        _.getUTCFullYear(),
      );
  }
}
var _ = class extends _ {
  #e;
  #t = void 0;
  #n;
  #r;
  constructor(_, _) {
    (super(), (this.#e = _), this.setOptions(_), this.bindMethods(), this.#i());
  }
  bindMethods() {
    ((this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this)));
  }
  setOptions(_) {
    let _ = this.options;
    ((this.options = this.#e.defaultMutationOptions(_)),
      _(this.options, _) ||
        this.#e.getMutationCache().notify({
          type: `observerOptionsUpdated`,
          mutation: this.#n,
          observer: this,
        }),
      _?.mutationKey &&
      this.options.mutationKey &&
      _(_.mutationKey) !== _(this.options.mutationKey)
        ? this.reset()
        : this.#n?.state.status === `pending` &&
          this.#n.setOptions(this.options));
  }
  onUnsubscribe() {
    this.hasListeners() || this.#n?.removeObserver(this);
  }
  onMutationUpdate(_) {
    (this.#i(), this.#a(_));
  }
  getCurrentResult() {
    return this.#t;
  }
  reset() {
    (this.#n?.removeObserver(this), (this.#n = void 0), this.#i(), this.#a());
  }
  mutate(_, _) {
    return (
      (this.#r = _),
      this.#n?.removeObserver(this),
      (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
      this.#n.addObserver(this),
      this.#n.execute(_)
    );
  }
  #i() {
    let _ = this.#n?.state ?? _();
    this.#t = {
      ..._,
      isPending: _.status === `pending`,
      isSuccess: _.status === `success`,
      isError: _.status === `error`,
      isIdle: _.status === `idle`,
      mutate: this.mutate,
      reset: this.reset,
    };
  }
  #a(_) {
    _.batch(() => {
      if (this.#r && this.hasListeners()) {
        let _ = this.#t.variables,
          _ = this.#t.context;
        _?.type === `success`
          ? (this.#r.onSuccess?.(_.data, _, _),
            this.#r.onSettled?.(_.data, null, _, _))
          : _?.type === `error` &&
            (this.#r.onError?.(_.error, _, _),
            this.#r.onSettled?.(void 0, _.error, _, _));
      }
      this.listeners.forEach((_) => {
        _(this.#t);
      });
    });
  }
};
function _(_, _) {
  let _ = _(_),
    [_] = _.useState(() => new _(_, _));
  _.useEffect(() => {
    _.setOptions(_);
  }, [_, _]);
  let _ = _.useSyncExternalStore(
      _.useCallback((_) => _.subscribe(_.batchCalls(_)), [_]),
      () => _.getCurrentResult(),
      () => _.getCurrentResult(),
    ),
    _ = _.useCallback(
      (_, _) => {
        _.mutate(_, _).catch(_);
      },
      [_],
    );
  if (_.error && _(_.options.throwOnError, [_.error])) throw _.error;
  return {
    ..._,
    mutate: _,
    mutateAsync: _.mutate,
  };
}
var _ = _(),
  _ = 500,
  _ = class extends _.Component {
    render() {
      let {
          keyExtractor: _,
          style: _,
          duration: _ = _,
          className: _,
          children: _,
          childRef: _,
          ..._
        } = this.props,
        _ = {
          ...(_ || {}),
          transitionDuration: `${_ / 1e3}s`,
        };
      return (0, _.jsx)(_, {
        ..._,
        className: _(`crossfade`, _),
        children: (0, _.jsx)(
          _,
          {
            nodeRef: _,
            classNames: `crossfade-anim`,
            timeout: _,
            style: _,
            children: _,
          },
          _(),
        ),
      });
    }
  };
function _(_) {
  let { src: _, ..._ } = _,
    _ = {
      backgroundImage: `url(${_})`,
    },
    _ = _.useRef(null);
  return (0, _.jsx)(_, {
    style: _,
    keyExtractor: () => _,
    childRef: _,
    ..._,
    children: (0, _.jsx)(`div`, {
      ref: _,
      className: `crossfade-img`,
    }),
  });
}
var _ =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
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
function _() {}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.getitems_request || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            getitems_request: {
              _: 1,
              _: _,
            },
            include_unpublished: {
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
      return `CPartnerStoreBrowse_GetItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ids: {
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
      return `CPartnerStoreBrowse_GetCountryRestrictions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            results: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            no_info: {
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
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _,
            },
            no_restrictions: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            allowed_countries: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            restricted_countries: {
              _: 4,
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
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`PartnerStoreBrowse.GetItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`, `support`, `help`],
    });
  }
  _.GetItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `PartnerStoreBrowse.GetCountryRestrictions#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetCountryRestrictions = _;
})((_ ||= {}));
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.released_only || _(_._()),
        _.Message.initialize(
          this,
          _,
          0,
          -1,
          [4, 10, 11, 15, 16, 45, 46, 48],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            released_only: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            coming_soon_only: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            type_filters: {
              _: 3,
              _: _,
            },
            exclude_from: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            predefined_filter: {
              _: 5,
              _: _,
            },
            tagids_must_match: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            tagids_exclude: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            price_filters: {
              _: 12,
              _: _,
            },
            release_date_filter: {
              _: 13,
              _: _,
            },
            discounted_dates_filter: {
              _: 17,
              _: _,
            },
            compatibility_filter: {
              _: 18,
              _: _,
            },
            review_score_filter: {
              _: 19,
              _: _,
            },
            discount_ends_within_hours: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            content_descriptors_must_match: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            content_descriptors_excluded: {
              _: 16,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            regional_top_n_sellers: {
              _: 40,
              _: _.readInt32,
              _: _.writeInt32,
            },
            global_top_n_sellers: {
              _: 41,
              _: _.readInt32,
              _: _.writeInt32,
            },
            regional_long_term_top_n_sellers: {
              _: 42,
              _: _.readInt32,
              _: _.writeInt32,
            },
            global_long_term_top_n_sellers: {
              _: 43,
              _: _.readInt32,
              _: _.writeInt32,
            },
            store_page_filter: {
              _: 44,
              _: _,
            },
            parent_appids: {
              _: 45,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            creator_clan_account_ids_exclude: {
              _: 46,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            platform_filter: {
              _: 47,
              _: _,
            },
            mod_for_engine_appids: {
              _: 48,
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
      return `CStoreQueryFilters`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_apps: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_packages: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            include_bundles: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_games: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            include_demos: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            include_mods: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            include_dlc: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            include_software: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            include_video: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            include_hardware: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            include_series: {
              _: 17,
              _: _.readBool,
              _: _.writeBool,
            },
            include_music: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            dlc_for_appid: {
              _: 19,
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
      return `CStoreQueryFilters_TypeFilters`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filter_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filter_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            language_preferences: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
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
      return `CStoreQueryFilters_PredefinedFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
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
      return `CStoreQueryFilters_TagFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.only_free_items || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            only_free_items: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_free_items: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            min_discount_percent: {
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
      return `CStoreQueryFilters_PriceFilters`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.release_date_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            release_date_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            start_date: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            end_date: {
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
      return `CStoreQueryFilters_ReleaseDateFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start_date || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_date: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_date: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allow_partial_overlap: {
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
      return `CStoreQueryFilters_DiscountedDatesFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.device || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            device: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            categories: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
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
      return `CStoreQueryFilters_CompatibilityFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.min_score || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            min_score: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            allow_unreviewed: {
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
      return `CStoreQueryFilters_ReviewScoreFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_windows || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_windows: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_mac: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            include_linux: {
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
      return `CStoreQueryFilters_PlatformFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start: {
              _: 1,
              _: 0,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 2,
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            sort: {
              _: 10,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            filters: {
              _: 20,
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
      return `CStoreQueryParams`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _,
            },
            score: {
              _: 2,
              _: _.readDouble,
              _: _.writeDouble,
            },
            spellcheck_generated_result: {
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
      return `CStoreQueryPerResultMetadata`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.total_matching_records || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            total_matching_records: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            start: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            per_result_metadata: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            spellcheck_suggestions: {
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
      return `CStoreQueryResultMetadata`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.query_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            query_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            query: {
              _: 2,
              _: _,
            },
            context: {
              _: 3,
              _: _,
            },
            data_request: {
              _: 4,
              _: _,
            },
            override_country_code: {
              _: 5,
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
      return `CStoreQuery_Query_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            metadata: {
              _: 1,
              _: _,
            },
            ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            store_items: {
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
      return `CStoreQuery_Query_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.query_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            query_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            context: {
              _: 2,
              _: _,
            },
            search_term: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            max_results: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            filters: {
              _: 5,
              _: _,
            },
            data_request: {
              _: 6,
              _: _,
            },
            use_spellcheck: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            search_tags: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            search_creators: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            use_name_match_scoring: {
              _: 11,
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
      return `CStoreQuery_SearchSuggestions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            metadata: {
              _: 1,
              _: _,
            },
            ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            store_items: {
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
      return `CStoreQuery_SearchSuggestions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.query_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            query_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
              _: _,
            },
            item_id: {
              _: 4,
              _: _,
            },
            count: {
              _: 5,
              _: 20,
              _: _.readInt32,
              _: _.writeInt32,
            },
            filters: {
              _: 6,
              _: _,
            },
            options: {
              _: 7,
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
      return `CStoreQuery_MoreLikeThis_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tag_weight || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tag_weight: {
              _: 1,
              _: 90,
              _: _.readFloat,
              _: _.writeFloat,
            },
            exclude_featured_creator_homes: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            apply_user_preferences: {
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
      return `CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            metadata: {
              _: 1,
              _: _,
            },
            ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            store_items: {
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
      return `CStoreQuery_MoreLikeThis_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filters || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filters: {
              _: 2,
              _: _,
            },
            sections: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            context: {
              _: 5,
              _: _,
            },
            recommended_tags: {
              _: 7,
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
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sort || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sort: {
              _: 1,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            min_items: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            randomize: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_packages: {
              _: 4,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_bundles: {
              _: 5,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_dlc: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            min_discount_percent: {
              _: 7,
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
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_Section`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
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
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_RecommendedTag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sections || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sections: {
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
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            store_item_ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            tag_name: {
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
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response_Section`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sort || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sort: {
              _: 1,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            max_items: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            randomize: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_packages: {
              _: 4,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_bundles: {
              _: 5,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            filters: {
              _: 6,
              _: _,
            },
            context: {
              _: 7,
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
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            store_item_ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            tag_name: {
              _: 3,
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
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            context: {
              _: 1,
              _: _,
            },
            flavor: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            store_page_filter: {
              _: 3,
              _: _,
            },
            excluded_content_descriptors: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            start: {
              _: 5,
              _: 0,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 6,
              _: 50,
              _: _.readInt32,
              _: _.writeInt32,
            },
            prioritize_discounts: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_demos: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            request_facet_counts: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            search_term: {
              _: 10,
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
      return `CStoreQuery_GetSaleBrowserItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ids: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_matching: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            more_results_remaining: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            facet_fields: {
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
      return `CStoreQuery_GetSaleBrowserItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.value || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            value: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            count: {
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
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetValue`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.field || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            field: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            values: {
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
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetField`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreQuery.Query#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.Query = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreQuery.SearchSuggestions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.SearchSuggestions = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreQuery.MoreLikeThis#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.MoreLikeThis = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreQuery.GetItemsByUserRecommendedTags#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetItemsByUserRecommendedTags = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreQuery.GetItemByUserCombinedTagsPriority#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetItemByUserCombinedTagsPriority = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreQuery.GetSaleBrowserItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetSaleBrowserItems = _;
})((_ ||= {}));
function _(_, _) {
  _.Body().set_context(_(_));
}
function _(_) {
  let _ = new _();
  return (_ || _.set_country_code(_.COUNTRY), _.set_language(_.LANGUAGE), _);
}
function _(_, _) {
  _.Body().set_data_request(_.fromObject(_));
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            visibility: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            priority: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            association_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_id: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            associated_name: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            start_date: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_date: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            country_allow: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            country_deny: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            ownership_restrictions_overridden: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            must_own_appid: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_not_own_appid: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_own_packageid: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_not_own_packageid: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_have_launched_appid: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            additional_restrictions: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            template_type: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            template_vars: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
            flags: {
              _: 22,
              _: _.readUint32,
              _: _.writeUint32,
            },
            creator_name: {
              _: 23,
              _: _.readString,
              _: _.writeString,
            },
            template_vars_json: {
              _: 24,
              _: _.readString,
              _: _.writeString,
            },
            additional_restrictions_json: {
              _: 25,
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
      return `CMarketingMessageProto`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null));
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
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_item_id: {
              _: 4,
              _: _,
            },
            associated_item: {
              _: 5,
              _: _,
            },
            associated_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            template_type: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            template_vars_json: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            recommended_items: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            sale_item_count: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            recommended_items_include_dlc: {
              _: 14,
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
      return `CDisplayMarketingMessage`;
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
            anonymous_user: {
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
      return `CMarketingMessages_GetActiveMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            time_next_message_age: {
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
      return `CMarketingMessages_GetActiveMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start_past_days || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_past_days: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upto_past_days: {
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
      return `CMarketingMessages_GetPastMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetPastMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_seen_messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_seen_messages: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            operating_system: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_package_version: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            context: {
              _: 6,
              _: _,
            },
            data_request: {
              _: 7,
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.already_seen || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            already_seen: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            message: {
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser`;
    }
  },
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
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            operating_system: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_package_version: {
              _: 5,
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
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.has_pending_messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            has_pending_messages: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            pending_message_count: {
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
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
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
      return `CMarketingMessages_GetDisplayMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
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
      return `CMarketingMessages_GetDisplayMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            display_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: 0,
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
      return `CMarketingMessages_MarkMessageSeen_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            display_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            click_location: {
              _: 4,
              _: 0,
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
      return `CMarketingMessages_MarkMessageClicked_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CMarketingMessages_GetMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
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
      return `CMarketingMessages_GetMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.lookup_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            lookup_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidlist: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            title: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            associated_id: {
              _: 6,
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
      return `CMarketingMessages_FindMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_FindMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
            },
            from_json: {
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
      return `CMarketingMessages_CreateMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CMarketingMessages_CreateMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            message: {
              _: 2,
              _: _,
            },
            from_json: {
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
      return `CMarketingMessages_UpdateMarketingMessage_Request`;
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
      return `CMarketingMessages_UpdateMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CMarketingMessages_DeleteMarketingMessage_Request`;
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
      return `CMarketingMessages_DeleteMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CMarketingMessages_GetMarketingMessageViewerStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rt_time_hour || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_time_hour: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            seen_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            display_index: {
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
      return `CMarketingMessageHourlyStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
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
      return `CMarketingMessages_GetMarketingMessageViewerStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rt_start_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_start_time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rt_end_time: {
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
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rt_time_hour || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_time_hour: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clicked_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            display_index: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            click_location: {
              _: 5,
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
      return `CMarketingMessageClickedHourlyStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            clicked_stats: {
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
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CMarketingMessages_GetMarketingMessageClickedStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
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
      return `CMarketingMessages_GetMarketingMessageClickedStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
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
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            partnerid: {
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
      return `CMarketingMessages_PartnerPublishMessage_Request`;
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
      return `CMarketingMessages_PartnerPublishMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            partnerid: {
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
      return `CMarketingMessages_GetPartnerMessagePreview_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
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
      return `CMarketingMessages_GetPartnerMessagePreview_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
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
      return `CMarketingMessage_GetMarketingMessagesForApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessage_GetMarketingMessagesForApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
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
      return `CMarketingMessage_GetMarketingMessagesForPartner_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessage_GetMarketingMessagesForPartner_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetActiveMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetActiveMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPastMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetPastMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetMarketingMessagesForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.DoesUserHavePendingMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.DoesUserHavePendingMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetDisplayMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetDisplayMarketingMessageForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageAdmin#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetDisplayMarketingMessageAdmin = _;
  function _(_, _) {
    return _.SendNotification(`MarketingMessages.MarkMessageSeen#1`, _(_, _), {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.MarkMessageSeen = _;
  function _(_, _) {
    return _.SendNotification(
      `MarketingMessages.MarkMessageClicked#1`,
      _(_, _),
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.MarkMessageClicked = _;
  function _(_, _, _) {
    return _.SendMsg(`MarketingMessages.GetMarketingMessage#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.CreateMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.CreateMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.UpdateMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.UpdateMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.DeleteMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.DeleteMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.FindMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.FindMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessageViewerStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetMarketingMessageViewerStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesViewerRangeStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetMarketingMessagesViewerRangeStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessageClickedStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetMarketingMessageClickedStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPartnerReadyToPublishMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetPartnerReadyToPublishMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.PublishPartnerMessage#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.PublishPartnerMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPartnerMessagePreview#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetPartnerMessagePreview = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForPartner#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetMarketingMessagesForPartner = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForApps#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessagesForApps = _;
})((_ ||= {}));
function _(_) {
  return _(
    _.coming_soon_display,
    _.steam_release_date,
    _.custom_release_date_message,
  );
}
function _(_, _, _, _) {
  switch (_) {
    case `date_full`:
      return _(_);
    case `date_month`:
      return _(new Date(_ * 1e3));
    case `date_quarter`:
      return _(new Date(_ * 1e3), _);
    case `date_year`:
      return _(new Date(_ * 1e3));
    case `text_comingsoon`:
      return _ || _(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return _ || _(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function _(_) {
  if (_.bIncludeUnpublished) return `partner-unpublished`;
  if (_.bUsePartnerAPI) return `partner`;
}
function _(_, _) {
  _.Body().set_context(_(_));
}
function _(_) {
  let _ = new _();
  return (
    _.bUsePartnerAPI || _.set_country_code(_.country),
    _.set_language(_.language),
    _
  );
}
function _(_, _) {
  _.Body().set_data_request(_.fromObject(_));
}
var _ = _((_, _) => {
  var _ = (function () {
      function _(_, _) {
        if (typeof _ != `function`)
          throw TypeError(
            `DataLoader must be constructed with a function which accepts ` +
              (`Array<key> and returns Promise<Array<value>>, but got: ` +
                _ +
                `.`),
          );
        ((this._batchLoadFn = _),
          (this._maxBatchSize = _(_)),
          (this._batchScheduleFn = _(_)),
          (this._cacheKeyFn = _(_)),
          (this._cacheMap = _(_)),
          (this._batch = null),
          (this.name = _(_)));
      }
      var _ = _.prototype;
      return (
        (_.load = function (_) {
          if (_ == null)
            throw TypeError(
              `The loader.load() function must be called with a value, ` +
                (`but got: ` + String(_) + `.`),
            );
          var _ = _(this),
            _ = this._cacheMap,
            _ = this._cacheKeyFn(_);
          if (_) {
            var _ = _.get(_);
            if (_) {
              var _ = (_.cacheHits ||= []);
              return new Promise(function (_) {
                _.push(function () {
                  _(_);
                });
              });
            }
          }
          _.keys.push(_);
          var _ = new Promise(function (_, _) {
            _.callbacks.push({
              resolve: _,
              reject: _,
            });
          });
          return (_ && _.set(_, _), _);
        }),
        (_.loadMany = function (_) {
          if (!_(_))
            throw TypeError(
              `The loader.loadMany() function must be called with Array<key> ` +
                (`but got: ` + _ + `.`),
            );
          for (var _ = [], _ = 0; _ < _.length; _++)
            _.push(
              this.load(_[_]).catch(function (_) {
                return _;
              }),
            );
          return Promise.all(_);
        }),
        (_.clear = function (_) {
          var _ = this._cacheMap;
          if (_) {
            var _ = this._cacheKeyFn(_);
            _.delete(_);
          }
          return this;
        }),
        (_.clearAll = function () {
          var _ = this._cacheMap;
          return (_ && _.clear(), this);
        }),
        (_.prime = function (_, _) {
          var _ = this._cacheMap;
          if (_) {
            var _ = this._cacheKeyFn(_);
            if (_.get(_) === void 0) {
              var _;
              (_ instanceof Error
                ? ((_ = Promise.reject(_)), _.catch(function () {}))
                : (_ = Promise.resolve(_)),
                _.set(_, _));
            }
          }
          return this;
        }),
        _
      );
    })(),
    _ =
      typeof process == `object` && typeof process.nextTick == `function`
        ? function (_) {
            ((_ ||= Promise.resolve()),
              _.then(function () {
                process.nextTick(_);
              }));
          }
        : typeof setImmediate == `function`
          ? function (_) {
              setImmediate(_);
            }
          : function (_) {
              setTimeout(_);
            },
    _;
  function _(_) {
    var _ = _._batch;
    if (_ !== null && !_.hasDispatched && _.keys.length < _._maxBatchSize)
      return _;
    var _ = {
      hasDispatched: !1,
      keys: [],
      callbacks: [],
    };
    return (
      (_._batch = _),
      _._batchScheduleFn(function () {
        _(_, _);
      }),
      _
    );
  }
  function _(_, _) {
    if (((_.hasDispatched = !0), _.keys.length === 0)) _(_);
    else {
      var _;
      try {
        _ = _._batchLoadFn(_.keys);
      } catch (_) {
        return _(
          _,
          _,
          TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function ` +
              (`errored synchronously: ` + String(_) + `.`),
          ),
        );
      }
      if (!_ || typeof _.then != `function`)
        return _(
          _,
          _,
          TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ` +
              (`not return a Promise: ` + String(_) + `.`),
          ),
        );
      _.then(function (_) {
        if (!_(_))
          throw TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ` +
              (`not return a Promise of an Array: ` + String(_) + `.`),
          );
        if (_.length !== _.keys.length)
          throw TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.` +
              (`

Keys:
` +
                String(_.keys)) +
              (`

Values:
` +
                String(_)),
          );
        _(_);
        for (var _ = 0; _ < _.callbacks.length; _++) {
          var _ = _[_];
          _ instanceof Error
            ? _.callbacks[_].reject(_)
            : _.callbacks[_].resolve(_);
        }
      }).catch(function (_) {
        _(_, _, _);
      });
    }
  }
  function _(_, _, _) {
    _(_);
    for (var _ = 0; _ < _.keys.length; _++)
      (_.clear(_.keys[_]), _.callbacks[_].reject(_));
  }
  function _(_) {
    if (_.cacheHits)
      for (var _ = 0; _ < _.cacheHits.length; _++) _.cacheHits[_]();
  }
  function _(_) {
    if (_ && _.batch === !1) return 1;
    var _ = _ && _.maxBatchSize;
    if (_ === void 0) return 1 / 0;
    if (typeof _ != `number` || _ < 1)
      throw TypeError(`maxBatchSize must be a positive number: ` + _);
    return _;
  }
  function _(_) {
    var _ = _ && _.batchScheduleFn;
    if (_ === void 0) return _;
    if (typeof _ != `function`)
      throw TypeError(`batchScheduleFn must be a function: ` + _);
    return _;
  }
  function _(_) {
    var _ = _ && _.cacheKeyFn;
    if (_ === void 0)
      return function (_) {
        return _;
      };
    if (typeof _ != `function`)
      throw TypeError(`cacheKeyFn must be a function: ` + _);
    return _;
  }
  function _(_) {
    if (_ && _.cache === !1) return null;
    var _ = _ && _.cacheMap;
    if (_ === void 0) return new Map();
    if (_ !== null) {
      var _ = [`get`, `set`, `delete`, `clear`].filter(function (_) {
        return _ && typeof _[_] != `function`;
      });
      if (_.length !== 0)
        throw TypeError(`Custom cacheMap missing methods: ` + _.join(`, `));
    }
    return _;
  }
  function _(_) {
    return _ && _.name ? _.name : null;
  }
  function _(_) {
    return (
      typeof _ == `object` &&
      !!_ &&
      typeof _.length == `number` &&
      (_.length === 0 ||
        (_.length > 0 && Object.prototype.hasOwnProperty.call(_, _.length - 1)))
    );
  }
  _.exports = _;
});
function _(_) {
  return `appid` in _
    ? `app_${_.appid}`
    : `packageid` in _
      ? `package_${_.packageid}`
      : `bundleid` in _
        ? `bundle_${_.bundleid}`
        : `tagid` in _
          ? `tag_${_.tagid}`
          : `creatorid` in _
            ? `creator_${_.creatorid}`
            : `hubcategoryid` in _
              ? `hubcategory_${_.hubcategoryid}`
              : `salepagegid` in _
                ? `salepage_${_.salepagegid}`
                : (_(_, `Unknown store item id type`), ``);
}
function _(_, _) {
  switch (_) {
    case 0:
      return `app_${_}`;
    case 1:
      return `package_${_}`;
    case 2:
      return `bundle_${_}`;
    case 4:
      return `tag_${_}`;
    case 5:
      return `creator_${_}`;
    case 6:
      return `hubcategory_${_}`;
    case 7:
      return `salepage_${_}`;
    case 3:
    case -1:
      return ``;
    default:
      return (_(_, `Unknown EStoreItemType ${_} ${_(_)} `), ``);
  }
}
var _ = /^(app|package|bundle|mtx|tag|creator|hubcategory|salepage)_(\d*)$/;
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case `app`:
        return {
          appid: parseInt(_[2]),
        };
      case `package`:
        return {
          packageid: parseInt(_[2]),
        };
      case `bundle`:
        return {
          bundleid: parseInt(_[2]),
        };
      case `tag`:
        return {
          tagid: parseInt(_[2]),
        };
      case `creator`:
        return {
          creatorid: parseInt(_[2]),
        };
      case `hubcategory`:
        return {
          hubcategoryid: parseInt(_[2]),
        };
      case `salepage`:
        return {
          salepagegid: _[2],
        };
    }
  _(!1, `Failed to parse StoreItemID ${_}`);
}
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case `app`:
        return {
          item_type: 0,
          _: parseInt(_[2]),
        };
      case `package`:
        return {
          item_type: 1,
          _: parseInt(_[2]),
        };
      case `bundle`:
        return {
          item_type: 2,
          _: parseInt(_[2]),
        };
      case `tag`:
        return {
          item_type: 4,
          _: parseInt(_[2]),
        };
      case `creator`:
        return {
          item_type: 5,
          _: parseInt(_[2]),
        };
      case `hubcategory`:
        return {
          item_type: 6,
          _: parseInt(_[2]),
        };
      case `salepage`:
        return {
          item_type: 7,
          _: 0,
          gid: _[2],
        };
    }
  return {
    item_type: -1,
    _: _ ? parseInt(_[2]) : 0,
  };
}
function _(_) {
  let _ = _.item_type ?? -1,
    _ = _._ || 0;
  switch (_) {
    case 0:
      return {
        appid: _,
      };
    case 1:
      return {
        packageid: _,
      };
    case 2:
      return {
        bundleid: _,
      };
    case 4:
      return {
        tagid: _,
      };
    case 5:
      return {
        creatorid: _,
      };
    case 6:
      return {
        hubcategoryid: _,
      };
    case 7:
      return _.gid
        ? {
            salepagegid: _.gid,
          }
        : void 0;
    case 3:
    case -1:
      return;
    default:
      _(_, `Unknown EStoreItemType ${_} ${_(_)} `);
      return;
  }
}
var _ = _(_(), 1);
function _(_, _, _, _, _ = !1) {
  _(
    !_.bIncludeUnpublished || !!_.bUsePartnerAPI,
    `bIncludeUnpublished requires bUsePartnerAPI`,
  );
  let _ = new _.default(
    async (_) => {
      let _ = new Set(),
        _ = new Map(),
        _ = new Set();
      _.add(`default_info`);
      let _ = {};
      if (
        (_.forEach((_) => {
          let [_, _ = `default_info`] = _(_, `|`);
          (_.add(_),
            _.has(_) ||
              (_ == `top_tags`
                ? (_.include_tag_count = 20)
                : _ != `default_info` && (_[_] = !0),
              _.add(_)));
          let _ = _.get(_);
          (_ || ((_ = new Set()), _.set(_, _)), _.add(_));
        }),
        _.include_included_items)
      ) {
        let { include_included_items: _, ..._ } = _;
        _.included_item_data_request = _;
      }
      let _ = _.Init(_);
      (_(_, _), _(_, _));
      let _ = [];
      _.forEach((_) => {
        let _ = _(_);
        _ && (_.Body().add_ids(_.fromObject(_)), _.push(_));
      });
      let _;
      if (_.bUsePartnerAPI) {
        let _ = _.Init(_);
        (_.Body().set_getitems_request(_.Body()),
          _.Body().set_include_unpublished(!!_.bIncludeUnpublished),
          (_ = await _.GetItems(_, _)));
      } else _ = await _.GetItems(_, _);
      if (_ && !_.BSuccess())
        throw `Error loading store items: ${_.GetErrorMessage()}`;
      let _ = new Map();
      (_.Body()
        .store_items()
        .forEach((_, _) => {
          let _ = _.item_type(),
            _ = _ === void 0 ? _[_] : _(_, _.gid() ?? _._());
          _ && _.set(_, _);
        }),
        _ && _(_, _, _, _.included_item_data_request, _));
      let _ = new Map();
      return _.map((_) => {
        let [_] = _(_, `|`),
          _ = _.get(_);
        if (!_)
          return {
            ..._(_),
            success: 2,
          };
        let _ = _.get(_);
        return (_ || ((_ = _.toObject()), _.set(_, _)), _);
      });
    },
    {
      maxBatchSize: 500,
      cache: !1,
      ..._,
    },
  );
  return ((_.cacheScope = _(_)), _);
}
function _(_, _, _, _, _) {
  _.forEach((_, _) => {
    let _ = _.get(_);
    if ((_(_, `Missing request data for ${_}`), !_)) return;
    let _ = !1,
      _ = {};
    if (
      (_.forEach((_) => {
        _.has(_) ||
          ((_ = !0),
          _ == `top_tags`
            ? (_.include_tag_count = 20)
            : _ && _ != `default_info` && (_[_] = !0));
      }),
      _.include_included_items)
    ) {
      let { include_included_items: _, ..._ } = _;
      _.included_item_data_request = _;
    }
    _ && _(_, _);
    let _ = _.included_items(!1);
    if (_.has(`include_included_items`) && _ && _)
      for (let _ of [
        ..._.included_apps(),
        ..._.included_packages(),
        ..._.included_bundles(),
        ..._.included_creators(),
      ])
        _(_, _);
  });
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  return _(_, _);
}
function _(_) {
  return _(_, _, `include_assets`);
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    _ = _ && `packageid` in _ && !!_.packageid,
    _;
  if (_) {
    let _ = _.getQueryData(_(_, `default_info`, _.cacheScope));
    _ &&
      _.included_appids?.length == 1 &&
      (_ = {
        appid: _.included_appids[0],
      });
  }
  let { data: _ } = _({
    ..._(_, _, _),
    enabled: _ && !_,
  });
  return (
    _ &&
      _.length == 1 &&
      (_ = {
        appid: _[0],
      }),
    _(_(_, _ && _ ? _ : _))
  );
}
function _(_, _, _) {
  let _ = _ && `appid` in _ && !!_.appid;
  return {
    queryKey: _(_, `include_included_items`, _.cacheScope),
    queryFn: async () => (
      _ && _(_, _, _).catch(() => {}),
      (await _(_, _, `include_included_items`)).included_appids ?? []
    ),
    initialData: _ ? [_.appid] : void 0,
    enabled: !_,
  };
}
function _(_, _, _, _) {
  _.setQueryData(_(_, `include_included_items`, _), _.included_appids ?? []);
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_ && `bundleid` in _ ? _(_, _) : _(_, _));
}
function _(_, _ = !1) {
  let _ = _();
  return _(_ ? _(_, _) : _(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return _(_, _, `include_basic_info`, `basic_info`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_basic_info`, `basic_info`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_full_description`, `full_description_bbcode`, _);
}
function _(_, _) {
  return _(_, _, `include_assets`, `assets`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_assets`, `assets`, _);
}
function _(_, _) {
  return _(_, _, `include_screenshots`, `screenshots`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_screenshots`, `screenshots`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_links`, `links`, _);
}
function _(_, _) {
  return _(_, _, `include_trailers`, `trailers`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_trailers`, `trailers`, _);
}
function _(_, _) {
  return _(
    _,
    _,
    `include_assets_without_overrides`,
    `assets_without_overrides`,
  );
}
function _(_, _, _, _) {
  _(_, _, _, `include_assets_without_overrides`, `assets_without_overrides`, _);
}
function _(_, _) {
  return _(_, _, `include_reviews`, `reviews`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_reviews`, `reviews`, _);
}
function _(_, _) {
  return _(_, _, `include_release`, `release`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_release`, `release`, _);
}
function _(_, _) {
  return _(_, _, `top_tags`, `tags`);
}
function _(_, _, _, _) {
  _(_, _, _, `top_tags`, `tags`, _);
}
function _(_, _) {
  return _(_, _, `include_platforms`, `platforms`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_platforms`, `platforms`, _);
}
function _(_, _) {
  return _(_, _, `apply_user_filters`, `user_filter_failure`);
}
function _(_, _, _, _) {
  _(_, _, _, `apply_user_filters`, `user_filter_failure`, _);
}
function _(_, _, _, _) {
  _.setQueryData(_(_, `include_all_purchase_options`, _), {
    purchase_options: _.purchase_options,
    package_groups: _.package_groups,
    purchase_notes: _.purchase_notes,
  });
}
function _(_, _, _, _) {
  _(_, _, _, `include_supported_languages`, `supported_languages`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_extra_details`, `extra_details`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_ratings`, `game_rating`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_optin_registration_tags`, `optin_registration_tags`, _);
}
function _(_) {
  return _
    ? `appid` in _ && !_.appid
      ? (_(!1, `Invalid appid passed to useStoreItem`), !1)
      : `bundleid` in _ && !_.bundleid
        ? (_(!1, `Invalid bundleid passed to useStoreItem`), !1)
        : !0
    : !1;
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _.cacheScope),
    queryFn: async () => (await _(_, _, _))[_] || null,
    staleTime: 216e5,
    enabled: _(_),
  };
}
function _(_, _, _, _, _, _) {
  _.setQueryData(_(_, _, _), _[_] ?? null);
}
function _(_, _) {
  return {
    queryKey: _(_, `default_info`, _.cacheScope),
    queryFn: async () => _(await _(_, _, `default_info`)),
    staleTime: 216e5,
    enabled: _(_),
  };
}
function _(_, _) {
  return {
    ..._(_, _),
    select: (_) => _.best_purchase_option || null,
    staleTime: 6e5,
  };
}
function _(_, _) {
  return {
    ..._(_, _),
    select: (_) =>
      _?.purchase_options && _.purchase_options.length > 0
        ? _.purchase_options[0]
        : null,
    staleTime: 6e5,
  };
}
function _(_, _) {
  let _ = `include_all_purchase_options`;
  return {
    queryKey: _(_, _, _.cacheScope),
    queryFn: async () => {
      let _ = await _(_, _, _);
      return {
        purchase_options: _.purchase_options,
        package_groups: _.package_groups,
        purchase_notes: _.purchase_notes,
      };
    },
    staleTime: 6e5,
    enabled: _(_),
  };
}
var _ = `StoreItem`;
function _(_, _, _) {
  let _ = [_, _ && _(_), _];
  return (_ && _.push(_), _);
}
function _(_, _, _, _) {
  let _ = _(_);
  _ &&
    (_(_, _, _, _),
    _.include_basic_info && _(_, _, _, _),
    _.include_assets && _(_, _, _, _),
    _.include_screenshots && _(_, _, _, _),
    _.include_links && _(_, _, _, _),
    _.include_trailers && _(_, _, _, _),
    _.include_assets_without_overrides && _(_, _, _, _),
    _.include_reviews && _(_, _, _, _),
    _.include_release && _(_, _, _, _),
    _.include_tag_count && _.include_tag_count > 0 && _(_, _, _, _),
    _.include_platforms && _(_, _, _, _),
    _.apply_user_filters && _(_, _, _, _),
    _.include_all_purchase_options && _(_, _, _, _),
    _.include_full_description && _(_, _, _, _),
    _.include_supported_languages && _(_, _, _, _),
    _.include_extra_details && _(_, _, _, _),
    _.include_ratings && _(_, _, _, _),
    _.include_optin_registration_tags && _(_, _, _, _),
    _.include_included_items && _(_, _, _, _),
    _.include_included_items &&
      _.included_item_data_request &&
      (_.included_items?.included_apps?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      ),
      _.included_items?.included_packages?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      ),
      _.included_items?.included_bundles?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      ),
      _.included_items?.included_creators?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      )));
}
var _ = [
  `assets`,
  `tagids`,
  `tags`,
  `basic_info`,
  `reviews`,
  `game_rating`,
  `purchase_options`,
  `screenshots`,
  `trailers`,
  `supported_languages`,
  `full_description_bbcode`,
  `assets_without_overrides`,
  `user_filter_failure`,
  `links`,
  `platforms`,
  `release`,
  `package_groups`,
  `purchase_notes`,
  `extra_details`,
  `optin_registration_tags`,
];
function _(_) {
  let _ = {
    ..._,
  };
  for (let _ of _) delete _[_];
  return _;
}
function _(_, _, _, _) {
  _.setQueryData(_(_, `default_info`, _), _(_));
}
async function _(_, _, _) {
  return await _.load(`${_(_)}|${_}`);
}
var _ = _.createContext({});
function _() {
  return _.useContext(_).dataLoader;
}
function _() {
  return _.useContext(_);
}
function _(_) {
  let {
      context: _,
      msDelayBatch: _,
      serviceTransportOverride: _,
      legacyCacheStoreItemData: _,
      bRejectOnRequestFailure: _,
      children: _,
    } = _,
    _ = _(),
    _ = _(),
    { country: _, language: _, bUsePartnerAPI: _, bIncludeUnpublished: _ } = _,
    _ = _.useMemo(
      () => ({
        country: _,
        language: _,
        bUsePartnerAPI: _,
        bIncludeUnpublished: _,
      }),
      [_, _, _, _],
    ),
    _ = _(_),
    _ = _.useCallback(
      (_, _) => {
        (_(_, _.toObject(), _, _), _ && _(_, _));
      },
      [_, _, _],
    ),
    _ = _ || _,
    _ = _.useMemo(() => {
      let _ = _ ? _(_) : void 0;
      return _(
        _,
        _,
        {
          cache: !1,
          batchScheduleFn: _,
        },
        _,
        _,
      );
    }, [_, _, _, _, _]),
    _ = _.useMemo(
      () => ({
        dataLoader: _,
        storeBrowseContext: _,
        cacheStoreItemData: _,
      }),
      [_, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let _ = 0;
  return (_) => {
    let _,
      _ = performance.now() - _;
    (_ < _ && (_ = _ - _),
      setTimeout(() => {
        ((_ = performance.now()), _());
      }, _));
  };
}
var _ = _.createContext({
    eAdultOnlyMediaBehavior: `masked`,
  }),
  _ = {
    name: `forceallages`,
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _() {
  return _.useMemo(() => {
    let _ = _(_);
    return !!(
      (_ && _ !== `0`) ||
      (_.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function _() {
  let { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
    _ = _();
  return _() ||
    (_ == `masked` &&
      (_.excluded_content_descriptors.includes(4) ||
        _.excluded_content_descriptors.includes(3)))
    ? `blocked`
    : _ == `masked` && _
      ? `allowed`
      : _;
}
function _() {
  return _() != `allowed`;
}
var _ = {
  name: `bDisableAOWarning`,
  options: {
    path: `/`,
  },
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
};
2 * _.PerDay;
function _() {
  let _ = _(_),
    _ = _ ? parseInt(_) : 0;
  return _ == 0 ? null : _;
}
function _() {
  return {
    queryKey: [`AOWarningCookie`],
    queryFn: () => _(),
    placeholderData: () => _(),
    staleTime: 0,
  };
}
function _() {
  let { data: _ } = _(_());
  return _ && _ > Date.now() / 1e3;
}
function _(_) {
  let { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
    _ = _(),
    _ = _ == `allowed` && !_,
    { data: _ } = _(_ ? void 0 : _);
  return _ || !_ ? !1 : !_ || !!_.content_descriptorids?.includes(3);
}
function _(_, _) {
  let { data: _ } = _(_),
    _ = _();
  return _.useMemo(() => {
    if (_ === void 0) return;
    if (_ === null) return null;
    let _ = [...(_.highlights || []), ...(_.other_trailers || [])];
    return _ && !_ ? _.filter((_) => !!_.all_ages) : _;
  }, [_, _, _]);
}
function _(_) {
  let _ = _(_);
  if (_ && _.length != 0) return _[0];
}
function _(_) {
  let { trailer: _, ..._ } = _,
    _ = _(_);
  return (0, _.jsx)(`img`, {
    ..._,
    src: _,
    alt: _.trailer_name,
  });
}
function _(_) {
  return `${_.STORE_ITEM_BASE_URL}${_.trailer_url_format.replace("${FILENAME}", _.screenshot_full ?? _.screenshot_medium ?? ``)}`;
}
function _(_, _) {
  return `${_.VIDEO_CDN_URL}store_trailers/${_.trailer_url_format.replace("${FILENAME}", _)}`;
}
function _(_, _) {
  return `${_.VIDEO_CDN_URL}store_trailers/${_}`;
}
function _(_) {
  let _ =
    typeof _.captions_manifest == `function`
      ? _.captions_manifest()
      : _.captions_manifest;
  if (!_) return;
  let _ = _,
    _;
  if (
    (_.MEDIA_CDN_URL
      ? (_ = _.MEDIA_CDN_URL)
      : _.CDN_HOST_MEDIA && (_ = _.CDN_HOST_MEDIA),
    _)
  )
    return `${_}/${_}`;
}
function _(_) {
  let _ = [];
  _.adaptive_trailers &&
    (_ = _.adaptive_trailers
      .filter(
        (_) =>
          (_.encoding == `dash_h264` || _.encoding == `dash_av1`) && _.cdn_path,
      )
      .map((_) => _(_, _.cdn_path || ``)));
  let _ = [];
  return (
    _.adaptive_trailers &&
      (_ = _.adaptive_trailers
        .filter((_) => _.encoding == `hls_h264` && _.cdn_path)
        .map((_) => _(_, _.cdn_path || ``))),
    {
      rgDashTrailers: _,
      rgHlsTrailers: _,
    }
  );
}
var _ = class _ {
  m_eItemType;
  m_unID;
  m_bVisible = !1;
  m_strName;
  m_strStoreURLPath;
  m_unAppID;
  m_eAppType;
  m_rgIncludedAppTypes;
  m_rgIncludedAppIDs;
  m_bIsFree;
  m_bIsFreeTemporary;
  m_bIsComingSoon;
  m_bIsEarlyAccess;
  m_RelatedItems;
  m_ContentDescriptorIDs;
  m_StoreCategories;
  m_ReviewInfo;
  m_BasicInfo;
  m_rgStoreTags = [];
  m_rgStoreTagIDs = [];
  m_rgOptInRegistrationTags;
  m_Assets;
  m_AssetsWithoutOverrides;
  m_ReleaseInfo;
  m_Platforms;
  m_BestPurchaseOption;
  m_SelfPurchaseOption;
  m_rgPurchaseOptions;
  m_Screenshots;
  m_Trailers;
  m_rgSupportedLanguages;
  m_strStoreURLPathOverride;
  m_freeWeekend;
  m_DataRequested = {
    include_tag_count: 0,
  };
  m_strInternalName;
  m_rgLinks;
  m_userFilterFailure;
  m_strFullDescriptionBBCode;
  constructor(_, _) {
    ((this.m_eItemType = _.item_type()),
      (this.m_unID = _._()),
      (this.m_bVisible = !!_.visible()),
      (this.m_strName = _.name()),
      (this.m_strStoreURLPath = _.store_url_path()),
      (this.m_unAppID = _.appid()),
      (this.m_eAppType = _.type()),
      (this.m_rgIncludedAppTypes = _.included_types()),
      (this.m_rgIncludedAppIDs = _.included_appids()),
      (this.m_bIsFree = !!_.is_free()),
      (this.m_bIsFreeTemporary = !!_.is_free_temporarily()),
      (this.m_bIsComingSoon =
        !!_.is_coming_soon() || !!_.release()?.is_coming_soon()),
      (this.m_bIsEarlyAccess = !!_.is_early_access()),
      (this.m_RelatedItems = _.related_items()?.toObject()),
      (this.m_ContentDescriptorIDs = _.content_descriptorids()),
      (this.m_StoreCategories = _.categories().toObject()),
      (this.m_BestPurchaseOption = _.best_purchase_option()?.toObject()),
      (this.m_strStoreURLPathOverride = _.store_url_path_override()),
      (this.m_freeWeekend = _.free_weekend()?.toObject()),
      (this.m_strInternalName = _.internal_name()),
      (this.m_eItemType == 1 || this.m_eItemType == 2) &&
        (this.m_SelfPurchaseOption = _.self_purchase_option(!1)
          ? _.self_purchase_option().toObject()
          : this.m_BestPurchaseOption),
      this.MergeData(_, _));
  }
  MergeData(_, _) {
    (_.include_assets &&
      !this.m_Assets &&
      ((this.m_Assets = new _(_.assets(), _._())),
      (this.m_DataRequested.include_assets = !0)),
      _.include_assets_without_overrides &&
        !this.m_AssetsWithoutOverrides &&
        ((this.m_AssetsWithoutOverrides = new _(
          _.assets_without_overrides(),
          _._(),
        )),
        (this.m_DataRequested.include_assets_without_overrides = !0)),
      _.include_release &&
        !this.m_ReleaseInfo &&
        ((this.m_ReleaseInfo = _.release().toObject()),
        (this.m_DataRequested.include_release = !0)),
      _.include_platforms &&
        !this.m_Platforms &&
        ((this.m_Platforms = _.platforms().toObject()),
        (this.m_DataRequested.include_platforms = !0)),
      _.include_all_purchase_options &&
        !this.m_rgPurchaseOptions &&
        ((this.m_rgPurchaseOptions = _.purchase_options().map((_) =>
          _.toObject(),
        )),
        (this.m_DataRequested.include_all_purchase_options = !0)),
      _.include_screenshots &&
        !this.m_Screenshots &&
        ((this.m_Screenshots = new _(_.screenshots())),
        (this.m_DataRequested.include_screenshots = !0)),
      _.include_trailers &&
        !this.m_Trailers &&
        ((this.m_Trailers = new _(_.trailers())),
        (this.m_DataRequested.include_trailers = !0)),
      _.include_tag_count &&
        _.include_tag_count > this.m_rgStoreTags.length &&
        this.m_DataRequested.include_tag_count < _.include_tag_count &&
        ((this.m_rgStoreTags = _.tags().map((_) => _.toObject())),
        (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((_) => _.tagid)),
        (this.m_DataRequested.include_tag_count = Math.max(
          _.include_tag_count,
          this.m_rgStoreTags.length || 0,
        ))),
      _.include_optin_registration_tags &&
        !this.m_rgOptInRegistrationTags &&
        ((this.m_rgOptInRegistrationTags = _.optin_registration_tags().map(
          (_) => _.toObject(),
        )),
        (this.m_DataRequested.include_optin_registration_tags = !0)),
      _.include_reviews &&
        !this.m_ReviewInfo &&
        ((this.m_ReviewInfo = _.reviews().toObject()),
        (this.m_DataRequested.include_reviews = !0)),
      _.include_basic_info &&
        !this.m_BasicInfo &&
        ((this.m_BasicInfo = _.basic_info().toObject()),
        (this.m_DataRequested.include_basic_info = !0)),
      _.include_supported_languages &&
        !this.m_rgSupportedLanguages &&
        ((this.m_rgSupportedLanguages = _.supported_languages().map((_) =>
          _.toObject(),
        )),
        (this.m_DataRequested.include_supported_languages = !0)),
      _.include_links &&
        !this.m_rgLinks &&
        ((this.m_rgLinks = _.links().map((_) => _.toObject())),
        (this.m_DataRequested.include_links = !0)),
      _.apply_user_filters &&
        !this.m_userFilterFailure &&
        ((this.m_userFilterFailure = _.user_filter_failure()?.toObject()),
        (this.m_DataRequested.apply_user_filters = !0)),
      _.include_full_description &&
        !this.m_strFullDescriptionBBCode &&
        ((this.m_strFullDescriptionBBCode = _.full_description_bbcode()),
        (this.m_DataRequested.include_full_description = !0)));
  }
  static BDataRequestContainsOtherDataRequest(_, _) {
    return !!(
      (!_.include_assets || _.include_assets) &&
      (!_.include_assets_without_overrides ||
        _.include_assets_without_overrides) &&
      (!_.include_release || _.include_release) &&
      (!_.include_platforms || _.include_platforms) &&
      (!_.include_all_purchase_options || _.include_all_purchase_options) &&
      (!_.include_screenshots || _.include_screenshots) &&
      (!_.include_trailers || _.include_trailers) &&
      (!_.include_ratings || _.include_ratings) &&
      (!_.include_tag_count ||
        (_.include_tag_count || 0) >= _.include_tag_count) &&
      (!_.include_reviews || _.include_reviews) &&
      (!_.include_basic_info || _.include_basic_info) &&
      (!_.include_supported_languages || _.include_supported_languages) &&
      (!_.include_full_description || _.include_full_description) &&
      (!_.include_links || _.include_links) &&
      (!_.apply_user_filters || _.apply_user_filters) &&
      (!_.include_optin_registration_tags || _.include_optin_registration_tags)
    );
  }
  BContainDataRequest(_) {
    return _.BDataRequestContainsOtherDataRequest(this.m_DataRequested, _);
  }
  BCheckDataRequestIncluded(_) {}
  GetStoreItemType() {
    return this.m_eItemType;
  }
  GetID() {
    return this.m_unID;
  }
  GetUniqueID() {
    return this.m_eItemType + `_` + this.m_unID;
  }
  BIsVisible() {
    return this.m_bVisible;
  }
  GetName() {
    return this.m_strName;
  }
  GetStorePageURL(_ = !1) {
    return _ && this.HasDemoStandaloneStorePage()
      ? _.STORE_BASE_URL + `app/` + this.GetDemoStandaloneStorePageAppIDs()[0]
      : _.STORE_BASE_URL + this.m_strStoreURLPath;
  }
  GetStorePageURLWithOverride() {
    return this.m_strStoreURLPathOverride &&
      this.m_strStoreURLPathOverride.length > 0
      ? this.GetStorePageURLOverride()
      : this.GetStorePageURL();
  }
  GetStorePageURLOverride() {
    return this.m_strStoreURLPathOverride;
  }
  GetCommunityPageURL() {
    return this.GetAppID()
      ? _.COMMUNITY_BASE_URL + `app/` + this.GetAppID()
      : null;
  }
  GetCommunityDiscussionForumsURL() {
    return this.GetAppID()
      ? _.COMMUNITY_BASE_URL + `app/` + this.GetAppID() + `/discussions/`
      : null;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppType() {
    return this.m_eAppType;
  }
  BIsApplicationOrTool() {
    return this.GetAppType() == 6 || this.GetAppType() == 13;
  }
  k_regexSalePage =
    /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
  BIsSalePage() {
    return (
      this.GetStoreItemType() === 0 &&
      this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
    );
  }
  GetSalePageVanityURL() {
    let _ = this.GetStorePageURLWithOverride();
    return (
      this.GetStoreItemType() === 0 &&
        ((_ = this.GetStorePageURLWithOverride().replace(
          this.k_regexSalePage,
          ``,
        )),
        _.endsWith(`/`) && (_ = _.replace(`/`, ``))),
      _
    );
  }
  GetIncludedAppTypes() {
    return this.m_rgIncludedAppTypes;
  }
  GetIncludedAppIDs() {
    return this.m_rgIncludedAppIDs;
  }
  GetIncludedAppIDsOrSelf() {
    return this.GetStoreItemType() == 0
      ? [this.GetID()]
      : this.GetIncludedAppIDs();
  }
  BIsFree() {
    return this.m_bIsFree;
  }
  BIsFreeTemporary() {
    return this.m_bIsFreeTemporary;
  }
  BIsFreeWeekend() {
    let _ = Date.now() / 1e3;
    return (
      !!this.m_freeWeekend &&
      this.m_freeWeekend.start_time <= _ &&
      _ <= this.m_freeWeekend.end_time
    );
  }
  GetFreeWeekendEnd() {
    return this.m_freeWeekend?.end_time;
  }
  GetFreeWeekendPlayTextOverride() {
    return this.m_freeWeekend?.text;
  }
  BIsEarlyAccess() {
    return this.m_bIsEarlyAccess;
  }
  GetParentAppID() {
    return this.m_RelatedItems?.parent_appid;
  }
  BHasDemo() {
    return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
  }
  GetDemoAppIDs() {
    return this.m_RelatedItems?.demo_appid ?? [];
  }
  HasDemoStandaloneStorePage() {
    return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
  }
  GetDemoStandaloneStorePageAppIDs() {
    return this.m_RelatedItems?.standalone_demo_appid ?? [];
  }
  GetContentDescriptorIDs() {
    return this.m_ContentDescriptorIDs;
  }
  HasContentDescriptorID(_) {
    return this.m_ContentDescriptorIDs?.includes(_);
  }
  GetStoreCategories_SupportedPlayers() {
    return this.m_StoreCategories?.supported_player_categoryids || [];
  }
  GetStoreCategories_Features() {
    return this.m_StoreCategories?.feature_categoryids || [];
  }
  GetStoreCategories_Controller() {
    return this.m_StoreCategories?.controller_categoryids || [];
  }
  BHasStoreCategory(_) {
    return !!(
      this.GetStoreCategories_SupportedPlayers().find((_) => _ === _) ||
      this.GetStoreCategories_Features().find((_) => _ === _) ||
      this.GetStoreCategories_Controller().find((_) => _ === _)
    );
  }
  GetFilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_filtered
    );
  }
  GetUnfilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_unfiltered ||
        this.m_ReviewInfo?.summary_filtered
    );
  }
  GetFilteredReviewSummaryLanguage() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_language_specific
    );
  }
  GetFullDescriptionBBCode() {
    return (
      this.BCheckDataRequestIncluded({
        include_full_description: !0,
      }),
      this.m_strFullDescriptionBBCode
    );
  }
  GetShortDescription() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.short_description ?? ``
    );
  }
  GetDeveloperNames() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.developers
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? []
    );
  }
  GetFranchiseNames() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.franchises
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? []
    );
  }
  GetPublisherNames() {
    this.BCheckDataRequestIncluded({
      include_basic_info: !0,
    });
    let _ =
      this.m_BasicInfo?.publishers
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? [];
    return _?.length > 0 ? _ : this.GetDeveloperNames();
  }
  GetAllCreatorClanIDs() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo
        ? _([
            ...this.m_BasicInfo.developers,
            ...this.m_BasicInfo.publishers,
            ...this.m_BasicInfo.franchises,
          ])
        : []
    );
  }
  GetAllPublisherCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.publishers) : []
    );
  }
  GetAllDeveloperCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.developers) : []
    );
  }
  GetAllFranchiseCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.franchises) : []
    );
  }
  GetCapsuleHeadline() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.capsule_headline
    );
  }
  GetTags() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTags
    );
  }
  GetTagIDs() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTagIDs
    );
  }
  GetOptInRegistrationTagValues(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_optin_registration_tags: !0,
      }),
      this.m_rgOptInRegistrationTags?.find((_) => _.optin_name === _)?.values ??
        []
    );
  }
  BHasTags() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTagIDs?.length > 0
    );
  }
  GetAssets() {
    return (
      this.BCheckDataRequestIncluded({
        include_assets: !0,
      }),
      this.m_Assets
    );
  }
  GetAssetsWithoutOverrides() {
    return (
      this.BCheckDataRequestIncluded({
        include_assets_without_overrides: !0,
      }),
      this.m_AssetsWithoutOverrides
    );
  }
  GetOriginalReleaseDateRTime() {
    this.BCheckDataRequestIncluded({
      include_release: !0,
    });
    let _ = this.m_ReleaseInfo?.original_steam_release_date;
    return ((_ ||= this.GetReleaseDateRTime()), _);
  }
  GetReleaseDateRTime(_ = !1) {
    if (
      (this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.m_ReleaseInfo?.is_coming_soon && !_)
    )
      return 0;
    let _ = this.m_ReleaseInfo?.steam_release_date;
    return ((_ ||= this.m_ReleaseInfo?.original_release_date), _);
  }
  GetFormattedSteamReleaseDate() {
    if (
      (this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.m_ReleaseInfo?.is_coming_soon)
    ) {
      if (this.m_ReleaseInfo?.coming_soon_display) return _(this.m_ReleaseInfo);
      if (this.m_ReleaseInfo?.custom_release_date_message)
        return this.m_ReleaseInfo.custom_release_date_message;
      let _ = this.m_ReleaseInfo?.steam_release_date;
      return _
        ? this.m_ReleaseInfo?.is_abridged_release_date
          ? _(new Date(_ * 1e3))
          : _(_)
        : ``;
    }
    let _ = this.GetReleaseDateRTime();
    return _ ? _(_) : ``;
  }
  BIsComingSoon() {
    return this.m_bIsComingSoon;
  }
  BIsCustomComingSoonDisplay() {
    return (
      this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.BIsComingSoon()
        ? this.m_ReleaseInfo?.coming_soon_display
          ? [`text_tba`, `text_comingsoon`].includes(
              this.m_ReleaseInfo.coming_soon_display,
            )
          : !!this.m_ReleaseInfo?.custom_release_date_message
        : !1
    );
  }
  BLimitedLaunchActive() {
    return this.m_ReleaseInfo?.limited_launch_active;
  }
  BIsPrePurchase() {
    return this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid;
  }
  BIsReleased() {
    return !this.BIsComingSoon();
  }
  GetPlatforms() {
    return (
      this.BCheckDataRequestIncluded({
        include_platforms: !0,
      }),
      this.m_Platforms
    );
  }
  GetBestPurchaseOption() {
    return this.m_BestPurchaseOption;
  }
  GetBestPurchasePriceInCents() {
    if (this.m_BestPurchaseOption?.final_price_in_cents)
      return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
  }
  GetBestPurchasePriceFormatted() {
    return this.m_BestPurchaseOption?.formatted_final_price;
  }
  GetBestPurchaseOriginalPriceInCents() {
    return this.m_BestPurchaseOption?.original_price_in_cents
      ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
      : this.GetBestPurchasePriceInCents();
  }
  GetBestPurchaseOriginalPriceFormatted() {
    return (
      this.m_BestPurchaseOption?.formatted_original_price ??
      this.m_BestPurchaseOption?.formatted_final_price
    );
  }
  GetAllPurchaseOptions() {
    return (
      this.BCheckDataRequestIncluded({
        include_all_purchase_options: !0,
      }),
      this.m_rgPurchaseOptions
    );
  }
  GetSelfPurchaseOption() {
    return this.m_SelfPurchaseOption;
  }
  BHasAgeSafeScreenshots() {
    return this.GetScreenshots(!0).length > 0;
  }
  GetScreenshots(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_screenshots: !0,
      }),
      this.m_Screenshots
        ? _
          ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
          : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
        : []
    );
  }
  BIsAgeSafeScreenshot(_) {
    return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(_);
  }
  BHasTrailers(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers?.BHasTrailers(_)
    );
  }
  BHasHighlightTrailers(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      (this.m_Trailers?.GetHighlightTrailers(_)?.length ?? 0) > 0
    );
  }
  GetAllTrailers() {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers
    );
  }
  BHasSomeLanguageSupport(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_supported_languages: !0,
      }),
      this.m_rgSupportedLanguages?.some(
        (_) => _.elanguage == _ && (_.supported || _.subtitles || _.full_audio),
      ) || !1
    );
  }
  GetAllLanguagesWithSomeSupport() {
    return (
      this.BCheckDataRequestIncluded({
        include_supported_languages: !0,
      }),
      this.m_rgSupportedLanguages
        ?.filter((_) => _.supported || _.subtitles || _.full_audio)
        .map((_) => _.elanguage) || []
    );
  }
  GetDataRequest() {
    return this.m_DataRequested;
  }
  GetMicroTrailer(_) {
    if (
      (this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers)
    ) {
      let _ = this.m_Trailers
        .GetAllTrailers(_)
        .find((_) => !!_.GetMicroTrailer());
      if (_) return _.GetMicroTrailer();
    }
    return null;
  }
  GetLinks() {
    return (
      this.BCheckDataRequestIncluded({
        include_links: !0,
      }),
      this.m_rgLinks
    );
  }
  GetUserFilterFailure() {
    return (
      this.BCheckDataRequestIncluded({
        apply_user_filters: !0,
      }),
      this.m_userFilterFailure
    );
  }
  ReplaceBestPurchaseOption(_) {
    this.m_BestPurchaseOption = _;
  }
  GetInternalName() {
    return this.m_strInternalName;
  }
};
function _(_) {
  if (!_?.length) return [];
  let _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
  return Array.from(new Set(_));
}
var _ = class {
    m_strMainCapsuleURL;
    m_strSmallCapsuleURL;
    m_strHeaderURL;
    m_strPackageHeaderURL;
    m_strPageBackgroundURL;
    m_strRawPageBackgroundURL;
    m_strHeroCapsuleURL;
    m_strHeroCapsuleURL_2x;
    m_strLibraryCapsuleURL;
    m_strLibraryCapsuleURL_2x;
    m_strLibraryHeroURL;
    m_strLibraryHeroURL_2x;
    m_strCommunityIcon;
    m_strCommunityIcon_Full;
    constructor(_, _) {
      let _ = _.asset_url_format();
      (_ &&
        (_.main_capsule() &&
          (this.m_strMainCapsuleURL = this.ConstructAssetURL(
            _,
            _.main_capsule(),
          )),
        _.small_capsule() &&
          (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
            _,
            _.small_capsule(),
          )),
        _.header() &&
          (this.m_strHeaderURL = this.ConstructAssetURL(_, _.header())),
        _.package_header() &&
          (this.m_strPackageHeaderURL = this.ConstructAssetURL(
            _,
            _.package_header(),
          )),
        _.raw_page_background() &&
          (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
            _,
            _.raw_page_background(),
          )),
        _.hero_capsule() &&
          (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
            _,
            _.hero_capsule(),
          )),
        _.hero_capsule_2x() &&
          (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
            _,
            _.hero_capsule_2x(),
          )),
        _.library_capsule() &&
          (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
            _,
            _.library_capsule(),
          )),
        _.library_capsule_2x() &&
          (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
            _,
            _.library_capsule_2x(),
          )),
        _.library_hero() &&
          (this.m_strLibraryHeroURL = this.ConstructAssetURL(
            _,
            _.library_hero(),
          )),
        _.library_hero_2x() &&
          (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
            _,
            _.library_hero_2x(),
          ))),
        _.community_icon() &&
          ((this.m_strCommunityIcon = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}.jpg`),
          (this.m_strCommunityIcon_Full = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}_full.jpg`)),
        _.page_background_path() &&
          (this.m_strPageBackgroundURL = `${_.STORE_CDN_URL}images/storepagebackground/${_.page_background_path()}`));
    }
    GetMainCapsuleURL() {
      return this.m_strMainCapsuleURL;
    }
    GetSmallCapsuleURL() {
      return this.m_strSmallCapsuleURL;
    }
    GetHeaderURL() {
      return this.m_strHeaderURL;
    }
    GetPackageHeaderURL() {
      return this.m_strPackageHeaderURL;
    }
    GetPageBackgroundURL() {
      return this.m_strPageBackgroundURL;
    }
    GetRawPageBackgroundURL() {
      return this.m_strRawPageBackgroundURL;
    }
    GetHeroCapsuleURL() {
      return this.m_strHeroCapsuleURL;
    }
    GetHeroCapsuleURL_2x() {
      return this.m_strHeroCapsuleURL_2x;
    }
    GetLibraryCapsuleURL() {
      return this.m_strLibraryCapsuleURL;
    }
    GetLibraryCapsuleURL_2x() {
      return this.m_strLibraryCapsuleURL_2x;
    }
    GetLibraryHeroURL() {
      return this.m_strLibraryHeroURL;
    }
    GetLibraryHeroURL_2x() {
      return this.m_strLibraryHeroURL_2x;
    }
    ConstructAssetURL(_, _) {
      return (
        _.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        _.replace("${FILENAME}", _)
      );
    }
    GetCommunityIconURL() {
      return this.m_strCommunityIcon;
    }
    GetCommunityIconURL_Full() {
      return this.m_strCommunityIcon_Full;
    }
  },
  _ = class {
    m_mapTrailer;
    m_highlightTrailers;
    m_highlightTrailersAllAges;
    m_otherTrailers;
    m_otherTrailersAllAges;
    constructor(_) {
      ((this.m_highlightTrailers = _.highlights()?.map((_) => new _(_)) ?? []),
        (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
          (_) => _.BIsAllAges(),
        )),
        (this.m_otherTrailers = _.other_trailers()?.map((_) => new _(_)) ?? []),
        (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((_) =>
          _.BIsAllAges(),
        )),
        (this.m_mapTrailer = new Map(
          [...this.m_highlightTrailers, ...this.m_otherTrailers].map((_) => [
            _.GetTrailerID(),
            _,
          ]),
        )));
    }
    BHasTrailers(_) {
      return _
        ? this.m_highlightTrailersAllAges.length > 0 ||
            this.m_otherTrailersAllAges.length > 0
        : this.m_highlightTrailers.length > 0 ||
            this.m_otherTrailers.length > 0;
    }
    GetHighlightTrailers(_) {
      return _ ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
    }
    GetOtherTrailers(_) {
      return _ ? this.m_otherTrailersAllAges : this.m_otherTrailers;
    }
    GetAllTrailers(_) {
      return [...this.GetHighlightTrailers(_), ...this.GetOtherTrailers(_)];
    }
    GetTrailerByID(_) {
      return this.m_mapTrailer.get(_);
    }
  },
  _ = class {
    m_strTrailerName;
    m_eTrailerCategory;
    m_nBaseID;
    m_MicroTrailer;
    m_rgDashTrailers;
    m_rgHlsTrailer;
    m_strScreenshotMedium;
    m_strScreenshotFull;
    m_bIsAllAges;
    m_strCaptionManifest;
    constructor(_) {
      ((this.m_strTrailerName = _.trailer_name()),
        (this.m_nBaseID = _.trailer_base_id()),
        (this.m_eTrailerCategory = _.trailer_category()));
      let _ = _.trailer_url_format();
      if (
        (_ &&
          (_.microtrailer() &&
            (this.m_MicroTrailer = this.ExtractTrailerFormats(
              _,
              _.microtrailer(),
            )),
          _.screenshot_medium() &&
            (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
              _,
              _.screenshot_medium(),
            )),
          _.screenshot_full() &&
            (this.m_strScreenshotFull = this.ConstructScreenshotURL(
              _,
              _.screenshot_full(),
            ))),
        _.adaptive_trailers())
      ) {
        this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
          _.adaptive_trailers(),
          `dash`,
        );
        let _ = this.ExtractAdaptiveTrailers(_.adaptive_trailers(), `hls`);
        _.length > 0 && (this.m_rgHlsTrailer = _[0]);
      }
      ((this.m_bIsAllAges = _.all_ages() ?? !0),
        (this.m_strCaptionManifest = _(_)));
    }
    GetName() {
      return this.m_strTrailerName;
    }
    GetTrailerID() {
      return this.m_nBaseID;
    }
    GetTrailerCategory() {
      return this.m_eTrailerCategory;
    }
    GetTrailersDash() {
      return this.m_rgDashTrailers;
    }
    GetTrailerHls() {
      return this.m_rgHlsTrailer;
    }
    GetMicroTrailer() {
      return this.m_MicroTrailer;
    }
    GetScreenshot() {
      return this.m_strScreenshotFull
        ? this.m_strScreenshotFull
        : this.m_strScreenshotMedium;
    }
    BIsAllAges() {
      return this.m_bIsAllAges;
    }
    GetCaptionManifest() {
      return this.m_strCaptionManifest;
    }
    ExtractTrailerFormats(_, _) {
      let _ = {};
      return (
        _.forEach((_) => {
          _.type() == `video/mp4`
            ? (_.strMP4URL = this.ConstructAssetURL(_, _.filename()))
            : _.type() == `video/webm` &&
              (_.strWebMURL = this.ConstructAssetURL(_, _.filename()));
        }),
        _
      );
    }
    ExtractAdaptiveTrailers(_, _) {
      let _ = `${_}_`,
        _ = _.filter(
          (_) => _.encoding() && _.cdn_path() && _.encoding().startsWith(_),
        ),
        _ = _.findIndex((_) => _.encoding().endsWith(`_av1`));
      return (
        _ > 0 && _(_, _, 0),
        _.map((_) => this.ConstructAssetURL(_.cdn_path(), ``))
      );
    }
    ConstructScreenshotURL(_, _) {
      return (
        _.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        _.replace("${FILENAME}", _)
      );
    }
    ConstructAssetURL(_, _) {
      return _.VIDEO_CDN_URL + `/store_trailers/` + _.replace("${FILENAME}", _);
    }
  },
  _ = class {
    m_rgAllScreenshots;
    m_rgOnlyAllAgesScreenshots;
    constructor(_) {
      let _ = _.all_ages_screenshots() || [],
        _ = _.mature_content_screenshots() || [],
        _ = (_) => _.BASE_URL_SHARED_CDN + `/store_item_assets/` + _.filename();
      ((this.m_rgOnlyAllAgesScreenshots = _.map(_)),
        (this.m_rgAllScreenshots = [..._, ..._]
          .sort((_, _) => _.ordinal() - _.ordinal())
          .map(_)));
    }
    GetAllAgesAndMatureScreenshots() {
      return this.m_rgAllScreenshots;
    }
    GetOnlyAllAgesScreenshots() {
      return this.m_rgOnlyAllAgesScreenshots;
    }
  };
function _(_) {
  if (_)
    switch (_.item_type) {
      case 0:
        return {
          appid: _.appid,
        };
      case 1:
        return {
          packageid: _._,
        };
      case 2:
        return {
          bundleid: _._,
        };
      case 4:
        return {
          tagid: _._,
        };
      case 5:
        return {
          creatorid: _._,
        };
      case 6:
        return {
          hubcategoryid: _._,
        };
      case 7:
        return _.gid
          ? {
              salepagegid: _.gid,
            }
          : void 0;
      case 3:
      case -1:
        return;
      default:
        _(
          _.item_type,
          `Unknown EStoreItemType ${_.item_type} ${_(_.item_type)} `,
        );
        return;
    }
}
function _(_, _) {
  typeof window < `u` && (window[_] = _);
}
function _(_, _) {
  return _
    ? _
      ? {
          include_assets: _.include_assets || _.include_assets,
          include_release: _.include_release || _.include_release,
          include_platforms: _.include_platforms || _.include_platforms,
          include_all_purchase_options:
            _.include_all_purchase_options || _.include_all_purchase_options,
          include_screenshots: _.include_screenshots || _.include_screenshots,
          include_trailers: _.include_trailers || _.include_trailers,
          include_ratings: _.include_ratings || _.include_ratings,
          include_tag_count:
            Math.max(_.include_tag_count || 0, _.include_tag_count || 0) ||
            void 0,
          include_reviews: _.include_reviews || _.include_reviews,
          include_basic_info: _.include_basic_info || _.include_basic_info,
          include_supported_languages:
            _.include_supported_languages || _.include_supported_languages,
          include_full_description:
            _.include_full_description || _.include_full_description,
          include_included_items:
            _.include_included_items || _.include_included_items,
          include_assets_without_overrides:
            _.include_assets_without_overrides ||
            _.include_assets_without_overrides,
          apply_user_filters: _.apply_user_filters || _.apply_user_filters,
          include_links: _.include_links || _.include_links,
          include_extra_details:
            _.include_extra_details || _.include_extra_details,
          include_optin_registration_tags:
            _.include_optin_registration_tags ||
            _.include_optin_registration_tags,
        }
      : _
    : _;
}
async function _(_, _) {
  let _ = await _,
    _ = await _;
  return _ == 1 ? _ : _;
}
var _ = class _ {
  k_QueueWaitUntilRequestMS = 5;
  k_nMaxBatchSize = 250;
  m_bReturnUnavailableItems = !1;
  m_mapApps = new Map();
  m_mapPackages = new Map();
  m_mapBundles = new Map();
  m_mapTags = new Map();
  m_mapCreators = new Map();
  m_mapHubCategories = new Map();
  m_setUnavailableApps = new Set();
  m_setUnavailablePackages = new Set();
  m_setUnavailableBundles = new Set();
  m_setUnavailableTags = new Set();
  m_setUnavailableCreators = new Set();
  m_setUnavailableHubCategories = new Set();
  m_setUnavailableDueToCountryRestrictionApps = new Set();
  m_setUnavailableDueToCountryRestrictionPackages = new Set();
  m_setUnavailableDueToCountryRestrictionBundles = new Set();
  m_mapAppsInFlight = new Map();
  m_mapPackageInFlight = new Map();
  m_mapBundleInFlight = new Map();
  m_mapTagsInFlight = new Map();
  m_mapCreatorsInFlight = new Map();
  m_mapHubCategoriesInFlight = new Map();
  m_serviceTransport;
  m_bUsePartnerAPI = !1;
  m_bInitialized = !1;
  m_bActivelyResettingCache = !1;
  m_setPendingAppInfo = new Set();
  m_setPendingBundleInfo = new Set();
  m_setPendingPackageInfo = new Set();
  m_setPendingTagInfo = new Set();
  m_setPendingCreatorInfo = new Set();
  m_setPendingHubCategoryInfo = new Set();
  m_setPendingDataRequest = {};
  m_PendingInfoPromise;
  m_PendingInfoResolve = void 0;
  m_PendingTimer = void 0;
  k_AlreadyResolvedOK = Promise.resolve(1);
  k_AlreadyResolvedInvalid = Promise.resolve(8);
  k_AlreadyResolvedBusy = Promise.resolve(10);
  static sm_instance;
  static Get() {
    return (
      _.sm_instance ||
        ((_.sm_instance = new _()), _(`StoreItemCache`, _.sm_instance)),
      _.sm_instance
    );
  }
  static Initialize(_, _) {
    let _ = _.Get();
    return (
      _(
        !_.m_bInitialized,
        `CStoreItemCache was already initialized; initialize it only once.`,
      ),
      (_.m_serviceTransport = _),
      (_.m_bUsePartnerAPI = !!_),
      (_.m_bInitialized = !0),
      () => {
        ((_.m_serviceTransport = void 0),
          (_.m_bUsePartnerAPI = !1),
          (_.m_bInitialized = !1));
      }
    );
  }
  SetSteamInterface(_) {
    this.SetServiceTransport(_.GetServiceTransport());
  }
  SetServiceTransport(_) {
    this.m_serviceTransport = _;
  }
  SetReturnUnavailableItems(_) {
    this.m_bReturnUnavailableItems = _;
  }
  GetReturnUnavailableItems() {
    return this.m_bReturnUnavailableItems;
  }
  async ResetCache() {
    ((this.m_bActivelyResettingCache = !0), this.FlushPendingInfo());
    let _ = [];
    (this.m_mapAppsInFlight.forEach((_) => {
      _.push(_.promise);
    }),
      this.m_mapBundleInFlight.forEach((_) => {
        _.push(_.promise);
      }),
      this.m_mapPackageInFlight.forEach((_) => {
        _.push(_.promise);
      }),
      this.m_mapTagsInFlight.forEach((_) => {
        _.push(_.promise);
      }),
      this.m_mapCreatorsInFlight.forEach((_) => {
        _.push(_.promise);
      }),
      this.m_mapHubCategoriesInFlight.forEach((_) => {
        _.push(_.promise);
      }),
      await Promise.all(_),
      this.m_mapApps.clear(),
      this.m_mapBundles.clear(),
      this.m_mapPackages.clear(),
      this.m_mapTagsInFlight.clear(),
      this.m_mapCreatorsInFlight.clear(),
      this.m_mapHubCategoriesInFlight.clear(),
      (this.m_bActivelyResettingCache = !1));
  }
  static BIsInitialized() {
    return _.Get().m_bInitialized;
  }
  static k_DataRequest_CommonOnly = {};
  static k_DataRequest_BasicInfo = {
    include_basic_info: !0,
  };
  static k_DataRequest_Assets = {
    include_assets: !0,
  };
  static k_DataRequest_IncludeAll = {
    include_assets: !0,
    include_release: !0,
    include_platforms: !0,
    include_all_purchase_options: !0,
    include_screenshots: !0,
    include_trailers: !0,
    include_ratings: !0,
    include_tag_count: 20,
    include_reviews: !0,
    include_basic_info: !0,
    include_supported_languages: !0,
    include_full_description: !0,
    include_links: !0,
  };
  async QueueAppRequest(_, _) {
    return this.QueueStoreItemRequest(_, 0, _);
  }
  async QueuePackageRequest(_, _) {
    return this.QueueStoreItemRequest(_, 1, _);
  }
  async QueueBundleRequest(_, _) {
    return this.QueueStoreItemRequest(_, 2, _);
  }
  async QueueTagRequest(_, _) {
    return this.QueueStoreItemRequest(_, 4, _);
  }
  async QueueCreatorRequest(_, _) {
    return this.QueueStoreItemRequest(_, 5, _);
  }
  async QueueHubCategoryRequest(_, _) {
    return this.QueueStoreItemRequest(_, 6, _);
  }
  static ValidateDataRequest(_) {
    let _ = [
      _.include_assets,
      _.include_release,
      _.include_platforms,
      _.include_all_purchase_options,
      _.include_screenshots,
      _.include_trailers,
      _.include_ratings,
      _.include_reviews,
      _.include_basic_info,
      _.include_supported_languages,
      _.include_full_description,
      _.include_links,
    ];
    for (let _ of _) if (_ !== !0 && _ !== void 0) return !1;
    return !0;
  }
  async QueueMultipleAppRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 0, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultiplePackageRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 1, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleBundleRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 2, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleTagRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 4, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleCreatorRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 5, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleHubCategoryRequests(_, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_) => this.QueueStoreItemRequest(_, 6, _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueMultipleStoreItemRequests(_, _, _) {
    if (!_ || _.length == 0) return 1;
    let _ = (
      await Promise.all(_.map((_, _) => this.QueueStoreItemRequest(_, _[_], _)))
    ).filter((_) => _ != 1);
    return _.length > 0 ? _[0] : 1;
  }
  async QueueStoreItemRequest(_, _, _) {
    if (
      (_(
        _.ValidateDataRequest(_),
        `Invalid Data Request: ` + JSON.stringify(_),
      ),
      typeof _ == `string` && (_ = parseInt(_)),
      this.m_bActivelyResettingCache)
    )
      return (
        console.log(
          `Rejecting store item request due to currently clearing the cache`,
        ),
        this.k_AlreadyResolvedBusy
      );
    if (!_)
      return (
        _(!_, `unexpected id ${_} of zero or undefined for type ${_}`),
        this.k_AlreadyResolvedInvalid
      );
    let _ = this.GetPreviousSupersetLoadPromise(_, _, _);
    if (_) return _;
    switch (
      (this.m_PendingInfoPromise ||
        ((this.m_PendingInfoPromise = new Promise(
          (_) => (this.m_PendingInfoResolve = _),
        )),
        (this.m_PendingTimer = window.setTimeout(
          () => this.FlushPendingInfo(),
          this.k_QueueWaitUntilRequestMS,
        ))),
      (this.m_setPendingDataRequest = _(this.m_setPendingDataRequest, _)),
      _)
    ) {
      case 0:
        this.m_setPendingAppInfo.add(_);
        break;
      case 2:
        this.m_setPendingBundleInfo.add(_);
        break;
      case 1:
        this.m_setPendingPackageInfo.add(_);
        break;
      case 4:
        this.m_setPendingTagInfo.add(_);
        break;
      case 5:
        this.m_setPendingCreatorInfo.add(_);
        break;
      case 6:
        this.m_setPendingHubCategoryInfo.add(_);
        break;
      default:
        _(!1, `Unexpected Type ${_}`);
    }
    let _ = this.m_PendingInfoPromise;
    return (
      this.m_setPendingAppInfo.size +
        this.m_setPendingPackageInfo.size +
        this.m_setPendingBundleInfo.size >=
        this.k_nMaxBatchSize &&
        (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
        this.FlushPendingInfo()),
      _
    );
  }
  async FlushPendingInfo() {
    if (this.m_PendingInfoResolve === void 0) return;
    let _ = this.m_PendingInfoResolve,
      _ = Array.from(this.m_setPendingAppInfo),
      _ = Array.from(this.m_setPendingPackageInfo),
      _ = Array.from(this.m_setPendingBundleInfo),
      _ = Array.from(this.m_setPendingTagInfo),
      _ = Array.from(this.m_setPendingCreatorInfo),
      _ = Array.from(this.m_setPendingHubCategoryInfo),
      _ = this.m_setPendingDataRequest;
    ((this.m_PendingInfoPromise = void 0),
      (this.m_PendingInfoResolve = void 0),
      this.m_setPendingAppInfo.clear(),
      this.m_setPendingBundleInfo.clear(),
      this.m_setPendingPackageInfo.clear(),
      this.m_setPendingTagInfo.clear(),
      this.m_setPendingCreatorInfo.clear(),
      this.m_setPendingHubCategoryInfo.clear(),
      (this.m_setPendingDataRequest = {}),
      (this.m_PendingTimer = void 0),
      this.HintLoadStoreItems(_, _, _, _, _, _, _).then((_) => _(_)));
  }
  async HintLoadStoreApps(_, _) {
    return this.HintLoadStoreItems(_, null, null, null, null, null, _);
  }
  async HintLoadStorePackages(_, _) {
    return this.HintLoadStoreItems(null, _, null, null, null, null, _);
  }
  async HintLoadStoreBundles(_, _) {
    return this.HintLoadStoreItems(null, null, _, null, null, null, _);
  }
  GetPreviousSupersetLoadPromise(_, _, _) {
    if (this.BHasStoreItem(_, _, _) || this.BIsStoreItemMissing(_, _))
      return this.k_AlreadyResolvedOK;
    let _ = null;
    switch (_) {
      case 0:
        _ = this.m_mapAppsInFlight.get(_);
        break;
      case 1:
        _ = this.m_mapPackageInFlight.get(_);
        break;
      case 2:
        _ = this.m_mapBundleInFlight.get(_);
        break;
      case 4:
        _ = this.m_mapTagsInFlight.get(_);
        break;
      case 5:
        _ = this.m_mapCreatorsInFlight.get(_);
        break;
      case 6:
        _ = this.m_mapHubCategoriesInFlight.get(_);
    }
    return _ && _.BDataRequestContainsOtherDataRequest(_.dataRequest, _)
      ? _.promise
      : null;
  }
  async HintLoadStoreItems(_, _, _, _, _, _, _) {
    let _ = null,
      _ = new Promise((_) => (_ = _)),
      _ = [],
      _ = [];
    ((_ || []).forEach((_) => {
      let _ = this.GetPreviousSupersetLoadPromise(_, 0, _);
      if (_) _.push(_);
      else {
        _.push(
          _.fromObject({
            appid: _,
          }),
        );
        let _ = _(this.GetStoreItemDataRequest(_, 0), _),
          _ = this.m_mapAppsInFlight.get(_);
        ((_ = _(_?.dataRequest, _)),
          _ && _.push(_.promise),
          this.m_mapAppsInFlight.set(_, {
            promise: _ ? _(_.promise, _) : _,
            dataRequest: _,
          }));
      }
    }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 1, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              packageid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 1), _),
            _ = this.m_mapPackageInFlight.get(_);
          ((_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapPackageInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            }));
        }
      }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 2, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              bundleid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 2), _),
            _ = this.m_mapBundleInFlight.get(_);
          ((_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapBundleInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            }));
        }
      }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 4, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              tagid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 4), _),
            _ = this.m_mapTagsInFlight.get(_);
          ((_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapTagsInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            }));
        }
      }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 5, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              creatorid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 5), _),
            _ = this.m_mapCreatorsInFlight.get(_);
          ((_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapCreatorsInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            }));
        }
      }),
      (_ || []).forEach((_) => {
        let _ = this.GetPreviousSupersetLoadPromise(_, 6, _);
        if (_) _.push(_);
        else {
          _.push(
            _.fromObject({
              hubcategoryid: _,
            }),
          );
          let _ = _(this.GetStoreItemDataRequest(_, 6), _),
            _ = this.m_mapHubCategoriesInFlight.get(_);
          ((_ = _(_?.dataRequest, _)),
            _ && _.push(_.promise),
            this.m_mapHubCategoriesInFlight.set(_, {
              promise: _ ? _(_.promise, _) : _,
              dataRequest: _,
            }));
        }
      }));
    let _ = 1;
    if (
      (_.length > 0 && (_ = await this.InternalHandleLoadStoreItems(_, _)),
      _(_),
      _.length > 0)
    ) {
      let _ = await Promise.all(_);
      for (let _ of _) _ != 1 && _ == 1 && (_ = _);
    }
    return (
      (_ || []).forEach((_) => this.m_mapAppsInFlight.delete(_)),
      (_ || []).forEach((_) => this.m_mapPackageInFlight.delete(_)),
      (_ || []).forEach((_) => this.m_mapBundleInFlight.delete(_)),
      (_ || []).forEach((_) => this.m_mapTagsInFlight.delete(_)),
      (_ || []).forEach((_) => this.m_mapCreatorsInFlight.delete(_)),
      (_ || []).forEach((_) => this.m_mapHubCategoriesInFlight.delete(_)),
      _
    );
  }
  MarkStoreItemIDUnavailable(_) {
    (_ || []).forEach((_) => {
      _.appid()
        ? (this.m_setUnavailableApps.add(_.appid()),
          this.m_mapApps.delete(_.appid()))
        : _.packageid()
          ? (this.m_setUnavailablePackages.add(_.packageid()),
            this.m_mapPackages.delete(_.packageid()))
          : _.bundleid()
            ? (this.m_setUnavailableBundles.add(_.bundleid()),
              this.m_mapBundles.delete(_.bundleid()))
            : _.tagid()
              ? (this.m_setUnavailableTags.add(_.tagid()),
                this.m_mapTags.delete(_.tagid()))
              : _.creatorid()
                ? (this.m_setUnavailableCreators.add(_.creatorid()),
                  this.m_mapCreators.delete(_.creatorid()))
                : _.hubcategoryid() &&
                  (this.m_setUnavailableHubCategories.add(_.hubcategoryid()),
                  this.m_mapHubCategories.delete(_.hubcategoryid()));
    });
  }
  SortStoreItems(_) {
    let _ = _.slice();
    return (
      _.sort((_, _) => {
        let _ = _.appid() ?? 0,
          _ = _.appid() ?? 0;
        if (_ != _) return _ - _;
        let _ = _.packageid() ?? 0,
          _ = _.packageid() ?? 0;
        if (_ != _) return _ - _;
        let _ = _.bundleid() ?? 0,
          _ = _.bundleid() ?? 0;
        if (_ != _) return _ - _;
        let _ = _.tagid() ?? 0,
          _ = _.tagid() ?? 0;
        if (_ != _) return _ - _;
        let _ = _.creatorid() ?? 0,
          _ = _.creatorid() ?? 0;
        if (_ != _) return _ - _;
        let _ = _.hubcategoryid() ?? 0,
          _ = _.hubcategoryid() ?? 0;
        return _ == _ ? 0 : _ - _;
      }),
      _
    );
  }
  GetServiceTransport() {
    return (
      (this.m_serviceTransport ||=
        (console.warn(`Service transport not initialized for StoreItemCache`),
        _(new _(_.WEBAPI_BASE_URL)).GetAnonymousServiceTransport())),
      this.m_serviceTransport
    );
  }
  async InternalHandleLoadStoreItems(_, _) {
    let _ = 1;
    ((_ = this.SortStoreItems(_)),
      _.include_included_items &&
        (_ = {
          ..._,
          included_item_data_request: {
            ..._,
            include_included_items: !1,
          },
        }));
    let _ = [];
    try {
      let _ = [];
      for (; _.length > 0;) {
        let _ = _.splice(0, this.k_nMaxBatchSize);
        if ((_.push(_), this.m_bUsePartnerAPI)) {
          let _ = _.Init(_);
          _.Body().set_include_unpublished(!1);
          let _ = _.Body().getitems_request(!0);
          (_.set_context(_(this.m_bUsePartnerAPI)),
            _.set_data_request(_.fromObject(_)),
            _.set_ids(_),
            _.push(_.GetItems(this.GetServiceTransport(), _)));
        } else {
          let _ = _.Init(_);
          (_(_, this.m_bUsePartnerAPI),
            _(_, _),
            _.Body().set_ids(_),
            _.push(_.GetItems(this.GetServiceTransport(), _)));
        }
      }
      (await Promise.all(_)).forEach((_, _) => {
        _.GetEResult() == 1
          ? _.Body()
              .store_items()
              .forEach((_) => {
                let _ = _._(),
                  _ = _.item_type(),
                  _ = this.m_bReturnUnavailableItems && _.success() == 15,
                  _ = _.success() == 1 && !this.BIsStoreItemMissing(_, _);
                if (_ || _) this.ReadItem(_, _);
                else {
                  switch (_) {
                    case 0:
                      (this.m_setUnavailableApps.add(_),
                        this.m_mapApps.delete(_));
                      break;
                    case 1:
                      (this.m_setUnavailablePackages.add(_),
                        this.m_mapPackages.delete(_));
                      break;
                    case 2:
                      (this.m_setUnavailableBundles.add(_),
                        this.m_mapBundles.delete(_));
                      break;
                    case 4:
                      (this.m_setUnavailableTags.add(_),
                        this.m_mapTags.delete(_));
                      break;
                    case 5:
                      (this.m_setUnavailableCreators.add(_),
                        this.m_mapCreators.delete(_));
                      break;
                    case 6:
                      (this.m_setUnavailableHubCategories.add(_),
                        this.m_mapHubCategories.delete(_));
                      break;
                    default:
                      console.error(
                        `CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response ` +
                          _ +
                          ` ` +
                          _,
                      );
                  }
                  if (_.unvailable_for_country_restriction())
                    switch (_) {
                      case 0:
                        this.m_setUnavailableDueToCountryRestrictionApps.add(_);
                        break;
                      case 1:
                        this.m_setUnavailableDueToCountryRestrictionPackages.add(
                          _,
                        );
                        break;
                      case 2:
                        this.m_setUnavailableDueToCountryRestrictionBundles.add(
                          _,
                        );
                        break;
                      case 4:
                      case 5:
                      case 6:
                        console.error(
                          `CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: ` +
                            _.GetEResult() +
                            ` message: ` +
                            _.Hdr().error_message(),
                          _(_),
                        );
                    }
                }
              })
          : (console.warn(
              `CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: ` +
                _.GetEResult() +
                ` message: ` +
                _.Hdr().error_message(),
              _(_),
            ),
            (_.Hdr().transport_error() == 1 || _.FROM_WEB) &&
              this.MarkStoreItemIDUnavailable(_[_]),
            _ == 1 && (_ = _.GetEResult()));
      });
    } catch (_) {
      let _ = _(_);
      return (
        console.error(
          `CStoreItemCache::InternalHandleLoadStoreItems failed: ` +
            _.strErrorMsg,
          _,
        ),
        _.forEach((_) => this.MarkStoreItemIDUnavailable(_)),
        79
      );
    }
    return _;
  }
  GetMapForType(_) {
    let _;
    switch (_) {
      case 0:
        _ = this.m_mapApps;
        break;
      case 2:
        _ = this.m_mapBundles;
        break;
      case 1:
        _ = this.m_mapPackages;
        break;
      case 4:
        _ = this.m_mapTags;
        break;
      case 5:
        _ = this.m_mapCreators;
        break;
      case 6:
        _ = this.m_mapHubCategories;
        break;
      default:
        console.error(`Invalid map type requested`, _);
    }
    return _;
  }
  BHasStoreItem(_, _, _) {
    let _ = this.GetMapForType(_);
    return !(!_ || !_.has(_) || (_ && !_.get(_).BContainDataRequest(_)));
  }
  GetStoreItem(_, _) {
    if (_ != -1 && _ != 3) return this.GetMapForType(_)?.get(_);
  }
  GetStoreItemWithLegacyVisibilityCheck(_, _) {
    let _ = this.GetStoreItem(_, _);
    return _ && (this.m_bReturnUnavailableItems || _.BIsVisible()) ? _ : void 0;
  }
  GetStoreItemDataRequest(_, _) {
    return this.GetMapForType(_)?.get(_)?.GetDataRequest() || null;
  }
  BHasApp(_, _) {
    return this.BHasStoreItem(_, 0, _);
  }
  GetApp(_) {
    return this.GetStoreItem(_, 0);
  }
  BHasPackage(_, _) {
    return this.BHasStoreItem(_, 1, _);
  }
  GetPackage(_) {
    return this.GetStoreItem(_, 1);
  }
  BHasBundle(_, _) {
    return this.BHasStoreItem(_, 2, _);
  }
  GetBundle(_) {
    return this.GetStoreItem(_, 2);
  }
  BHasTag(_, _) {
    return this.BHasStoreItem(_, 4, _);
  }
  GetTag(_) {
    return this.GetStoreItem(_, 4);
  }
  BHasCreator(_, _) {
    return this.BHasStoreItem(_, 5, _);
  }
  GetCreator(_) {
    return this.GetStoreItem(_, 5);
  }
  BHasHubCategory(_, _) {
    return this.BHasStoreItem(_, 6, _);
  }
  GetHubCategory(_) {
    return this.GetStoreItem(_, 6);
  }
  BIsStoreItemMissing(_, _) {
    switch (_) {
      case 0:
        return this.BIsAppMissing(_);
      case 1:
        return this.BIsPackageMissing(_);
      case 2:
        return this.BIsBundleMissing(_);
      case 4:
        return this.BIsTagMissing(_);
      case 5:
        return this.BIsCreatorMissing(_);
      case 6:
        return this.BIsHubCategoryMissing(_);
      default:
        return (console.error(`BStoreItemMissing invalid type`, _), !0);
    }
  }
  BIsAppMissing(_) {
    return this.m_setUnavailableApps.has(_);
  }
  BIsPackageMissing(_) {
    return this.m_setUnavailablePackages.has(_);
  }
  BIsBundleMissing(_) {
    return this.m_setUnavailableBundles.has(_);
  }
  BIsTagMissing(_) {
    return this.m_setUnavailableTags.has(_);
  }
  BIsCreatorMissing(_) {
    return this.m_setUnavailableCreators.has(_);
  }
  BIsHubCategoryMissing(_) {
    return this.m_setUnavailableHubCategories.has(_);
  }
  BIsStoreItemUnavailableDueToCountryRestriction(_, _) {
    switch (_) {
      case 0:
        return this.BIsAppUnavailableDueToCountryRestriction(_);
      case 1:
        return this.BIsPackageUnavailableDueToCountryRestriction(_);
      case 2:
        return this.BIsBundleUnavailableDueToCountryRestriction(_);
      case 4:
      case 5:
      case 6:
        return (
          console.error(
            `BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: `,
            _,
          ),
          !0
        );
      default:
        return (console.error(`BStoreItemMissing invalid type`, _), !0);
    }
  }
  BIsAppUnavailableDueToCountryRestriction(_) {
    return this.m_setUnavailableDueToCountryRestrictionApps.has(_);
  }
  BIsPackageUnavailableDueToCountryRestriction(_) {
    return this.m_setUnavailableDueToCountryRestrictionPackages.has(_);
  }
  BIsBundleUnavailableDueToCountryRestriction(_) {
    return this.m_setUnavailableDueToCountryRestrictionBundles.has(_);
  }
  ReadResults(_, _) {
    let _ = [];
    for (let _ of _) _.push(this.ReadItem(_, _));
    return _;
  }
  ReadItem(_, _) {
    let _ = _.item_type(),
      _ = null;
    if (_ === void 0)
      return (console.warn(`Failed to load item data: ${_.success()}`), null);
    switch (_) {
      case 0:
        _ = this.m_mapApps;
        break;
      case 1:
        _ = this.m_mapPackages;
        break;
      case 2:
        _ = this.m_mapBundles;
        break;
      case 4:
        _ = this.m_mapTags;
        break;
      case 5:
        _ = this.m_mapCreators;
        break;
      case 6:
        _ = this.m_mapHubCategories;
        break;
      default:
        return (console.error(`Invalid item type: ${_}`), null);
    }
    let _ = _.get(_._());
    if (
      (_ ? _.MergeData(_, _) : ((_ = new _(_, _)), _.set(_._(), _)),
      _.include_included_items && _.included_items(!1))
    ) {
      let _ = _.included_item_data_request ?? {
        ..._,
        include_included_items: !1,
      };
      for (let _ of _.included_items().included_apps()) this.ReadItem(_, _);
      for (let _ of _.included_items().included_packages()) this.ReadItem(_, _);
    }
    return _;
  }
};
_([_], _.prototype, `ReadItem`, null);
var _ = {
  unknown: 0,
  "store.steampowered.com": 1,
  "steamcommunity.com": 2,
  global: 3,
  default: 4,
  application: 5,
  subscription: 6,
  search: 7,
  cart: 8,
  app: 9,
  "global-nav": 10,
  "global-account": 11,
  storemenu: 12,
  "search-suggestion": 13,
  about: 14,
  suggest: 15,
  dlc: 16,
  "storemenu-recommendedtags": 17,
  creator: 18,
  "footer-genre-dropdown": 20,
  "footer-category-dropdown": 21,
  "footer-about-dropdown": 22,
  "footer-help-dropdown": 23,
  "footer-publisher-catalogs": 24,
  wishlist: 25,
  stats: 26,
  spotlight: 40,
  message: 41,
  "marketing-message": 42,
  "daily-deal": 43,
  footer: 44,
  header: 45,
  name: 46,
  "more-details": 47,
  notification: 48,
  category: 49,
  steamdeck: 50,
  login: 60,
  prompt: 61,
  "join-steam": 62,
  "successful-login": 63,
  "successful-joinsteam": 64,
  recommendations: 70,
  categories: 71,
  hardware: 72,
  waystoplay: 73,
  specialsections: 74,
  more: 75,
  "big-category-link": 76,
  "small-category-link": 77,
  "package-purchase-recommendations": 78,
  popular: 79,
  recent: 80,
  "main-cluster": 100,
  "featured-win-games": 101,
  "featured-mac-games": 102,
  "tab-NewReleases": 103,
  "tab-TopSellers": 104,
  "tab-ComingSoon": 105,
  "tab-Discounts": 106,
  "smallcap-videos": 107,
  "smallcap-demos": 108,
  "home-headlines": 109,
  "community-activity": 110,
  "home-underten": 111,
  "home-specials": 112,
  "home-partners": 113,
  "home-steam-install": 114,
  "community-activity-recentlyplayed": 115,
  "community-activity-recentlybought": 116,
  "promo-banner": 117,
  "promo-takeover": 118,
  "featured-linux-games": 119,
  "updated-games": 120,
  "featured-updated-games": 121,
  "discovery-queue": 122,
  "new-on-steam": 123,
  "curated-app": 124,
  "home-gutter": 125,
  "upcoming-queue": 126,
  "home-specials-under10": 127,
  "main-cluster-recommended": 128,
  "main-cluster-topseller": 129,
  "main-cluster-newonsteam": 130,
  "recommended-spotlight": 131,
  "hardware-promo": 132,
  "popular-new-on-steam": 133,
  "main-cluster-recommended-byfriends": 134,
  "main-cluster-recommended-bycurators": 135,
  "main-cluster-recenttopseller": 136,
  "home-under10": 137,
  "friends-trending": 138,
  "spotlight-specials": 139,
  "curator-recommended": 140,
  "best-selling-vr": 141,
  "creator-recommendations": 142,
  "live-broadcast": 143,
  "main-cluster-followed-creator": 144,
  "tab-PopularNewReleases": 145,
  "home-big-blue-buttons": 146,
  "home-banner": 147,
  "top-new-releases": 148,
  "curated-main-app": 149,
  "search-results": 150,
  query: 151,
  "search-share": 152,
  genre: 200,
  "large-cluster": 201,
  "find-more": 202,
  "friend-activity": 203,
  specials: 2300,
  breadcrumbs: 205,
  freestuff: 220,
  demos: 1900,
  "tab-NewDemos": 222,
  "tab-TopDemos": 223,
  "browse-demos": 224,
  videos: 100002,
  "popular-videos": 226,
  "tab-NewVideos": 227,
  browse: 230,
  mac: 231,
  under10: 232,
  under5: 233,
  publisher: 234,
  publishers: 235,
  "publisher-listing": 236,
  tag: 237,
  gettaggames: 238,
  explore: 239,
  "browse-tags": 240,
  tags: 241,
  "content-hub-carousel": 242,
  Action: 250,
  Adventure: 251,
  Strategy: 252,
  RPG: 253,
  Indie: 254,
  "Massively Multiplayer": 255,
  Casual: 256,
  Family: 257,
  Simulation: 258,
  Racing: 259,
  Sports: 260,
  recommended: 300,
  "recommendation-main": 301,
  "friend-recommendations": 302,
  "recommended-friendplaytime": 303,
  "recommended-recentlyviewed": 304,
  "recommended-morerecentlyviewed": 305,
  "recommended-genrehighlights": 306,
  morelike: 307,
  "morelike-mainitem": 308,
  "friendactivity.js": 309,
  "friendactivity-wishlist-spotlight": 310,
  "friendactivity-purchases": 311,
  "friendactivity-playedandwanted": 312,
  byafriend: 313,
  "friend-recommendation": 314,
  ajaxgetfriendactivity: 315,
  "recommend-franchise": 316,
  "more-from-franchise": 317,
  "wishlist-capsule": 318,
  "game-highlights": 400,
  "recommend-game": 401,
  "view-own-recommendation": 402,
  "game-purchase": 403,
  "game-purchase-guide": 404,
  "game-purchase-dlc": 405,
  "game-friend-recommendations": 406,
  "game-add-to-wishlist": 407,
  "game-details": 408,
  "game-highlight-tags": 409,
  "game-tags-dialog": 410,
  "game-tags-yours": 411,
  "bundle-component-preview": 412,
  "dlc-parent-app-link": 413,
  "similar-recent-apps": 414,
  "demo-parent-app-link": 415,
  "package-purchase": 420,
  "package-contents": 421,
  "package-details": 422,
  "category-list": 423,
  bundle: 430,
  "bundle-contents": 431,
  "cart-remove-item": 500,
  "cart-items": 501,
  "cart-continue-shopping": 502,
  "cart-purchase": 503,
  "checkout-logo-abandon": 504,
  "checkout-success": 505,
  checkout: 506,
  gift: 507,
  self: 508,
  "checkout-complete-return": 509,
  "checkout-complete-logo": 510,
  purchaserequest: 511,
  display: 512,
  initial: 513,
  gifts: 514,
  "upsell-recommended": 520,
  "upsell-specials": 521,
  "external-site": 550,
  facebook: 551,
  twitter: 552,
  referral: 553,
  summersale: 600,
  prizebooth: 610,
  "activity-game-link": 611,
  "activity-game-discount": 612,
  "prize-info": 613,
  promotion: 614,
  sale: 615,
  "sale-item": 616,
  "sale-dailydeals": 617,
  "sale-publishers": 618,
  "sale-genres": 619,
  email: 620,
  "cart-icon": 621,
  "sale-category-links": 622,
  "sale-notification-callout": 623,
  "sale-yesterdaydeals": 624,
  "sale-flashsales": 625,
  "sale-fromyourwishlist": 626,
  "closed-beta-access": 627,
  "sale-tag-bucket": 628,
  "sale-hero": 629,
  "sale-franchises": 630,
  "sale-dlcforyou": 631,
  "sale-recommended-by-steam-labs": 632,
  "sale-recommended-by-deep-dive": 633,
  "sale-dailydeals-tier2": 634,
  "sale-deep-discounts": 635,
  "sale-deck-mostplayed": 636,
  "home-chart-deckmostplayed": 637,
  "home-deck-banner": 638,
  "sale-tag-bucket-top": 639,
  "sale-dailydeals-none": 640,
  "sale-dailydeals-tags": 641,
  "sale-dailydeals-ir": 642,
  "sale-dailydeals-tier2-none": 645,
  "sale-dailydeals-tier2-tags": 646,
  "sale-dailydeals-tier2-ir": 647,
  "sale-hero-none": 650,
  "sale-hero-tags": 651,
  "sale-hero-ir": 652,
  autumnsale: 660,
  wintersale: 661,
  yearinreview: 662,
  springsale: 663,
  mobileapp: 700,
  summary: 701,
  mobilestorefront: 702,
  home: 703,
  "winter2012-today-square": 800,
  "winter2012-today-square-button": 801,
  "winter2012-hires": 802,
  "winter2012-hires-button": 803,
  "winter2012-yesterday-square": 804,
  "winter2012-yesterday-square-button": 805,
  "winter2012-flash": 806,
  "winter2012-flash-button": 807,
  "winter2012-pack": 808,
  "winter2012-pack-button": 809,
  "winter2012-topsellers": 810,
  "winter2012-topsellers-button": 811,
  "winter2012-vote-winner": 812,
  "winter2012-vote-winner-button": 821,
  "winter2012-vote-option-voting": 813,
  "winter2012-vote-option-voted": 814,
  "winter2012-nav": 815,
  "winter2012-500-callout": 816,
  "winter2012-500-callout-button": 820,
  "winter2012-featured": 817,
  "winter2012-lower-nav": 822,
  "winter2012-vote-option-vote-results": 823,
  "fall2014-48": 850,
  "fall2014-24": 851,
  "fall2014-TopSellers": 852,
  "fall2014-Upcoming": 853,
  "fall2014-Under10": 854,
  "fall2014-Under5": 855,
  "fall2014-PopularNewReleases": 856,
  "fall2014-specials-more": 857,
  "fall2014-recommend-wishlist": 858,
  "fall2014-recommend-contentforyourgames": 859,
  renderspecials: 860,
  recommend: 861,
  "recommended-ranked-played": 862,
  "redeem-wallet-complete-return": 900,
  "redeem-wallet-complete-return-app": 901,
  updated: 1e3,
  curators: 1050,
  curatorrecommendations: 1051,
  ajaxgetcuratorrecommendations: 1052,
  curatorscombinedrecommendations: 1053,
  ajaxgetcombinedrecommendations: 1054,
  curatorlist: 1055,
  curator: 1056,
  curatorfeaturedlist: 1057,
  curator_featured_list: 1057,
  mycuratorsreviewing: 1058,
  creatorfeaturedrecs: 1059,
  new_dlc: 1060,
  "browse-dlc": 1061,
  curatorlistcapsule: 1062,
  widget: 1100,
  appvisibilitystats: 1101,
  render: 1200,
  "recommendationfeed-single-friends": 1210,
  "recommendationfeed-single-curators": 1211,
  "recommendationfeed-single-recent": 1212,
  "recommendationfeed-single-wishlist": 1213,
  "recommendationfeed-single-played": 1214,
  "recommendationfeed-two": 1250,
  "recommendationfeed-four": 1251,
  "winter2014-featured": 1300,
  "winter2014-yesterday": 1301,
  "winter2014-flash": 1302,
  "winter2014-flash2": 1303,
  "winter2014-vote": 1304,
  "winter2014-specials-more": 1305,
  "winter2014-recommend-wishlist": 1306,
  "winter2014-frontpage-wishlist": 1307,
  "winter2014-TopSellers": 1308,
  "winter2014-Upcoming": 1309,
  "winter2014-Under10": 1310,
  "winter2014-Under5": 1311,
  "winter2014-PopularNewReleases": 1312,
  "winter2017-FeaturedBanner": 1313,
  "summer2018-standardview-curated": 1314,
  "summer2018-standardview-recommend-basic": 1315,
  "summer2018-standardview-recommend-neural": 1316,
  "summer2018-mergedview-curated": 1317,
  "summer2018-mergedview-recommend-neural": 1318,
  "summer2018-salien-giveaway": 1319,
  "summer2018-creator-recommend": 1320,
  "summer2018-live-stream": 1321,
  "sale-vr": 1322,
  "sale-moddable": 1323,
  "discovery-queue-0": 1324,
  "wishlist-onsale": 1400,
  "wishlist-newrelease": 1401,
  "greenlight-newrelease": 1402,
  "sales-event-enhanced": 1403,
  "creator-newrelease": 1404,
  "generic-onsale": 1405,
  "topsellers-onsale": 1406,
  "recommended-onsale": 1407,
  "demo-newrelease": 1408,
  "Free to Play": 1420,
  "tab-mostplayednewreleases": 1421,
  "tab-mostplayed": 1422,
  "tab-comingsoon": 1423,
  "tab-discounts": 1424,
  "tab-ConcurrentUsers": 1454,
  _: 1453,
  "hub-vr-recommended": 1455,
  "hub-vr-specials": 1459,
  "hub-vr-featured": 1463,
  "hub-vr-takeover": 1467,
  games: 1452,
  "hub-games-recommended": 1456,
  "hub-games-specials": 1460,
  "hub-games-featured": 1464,
  "hub-games-takeover": 1468,
  software: 1451,
  "hub-software-recommended": 1457,
  "hub-software-specials": 1461,
  "hub-software-featured": 1465,
  "hub-software-takeover": 1469,
  "hub-videos-recommended": 1458,
  "hub-videos-specials": 1462,
  "hub-videos-featured": 1466,
  "hub-videos-takeover": 1470,
  macos: 1480,
  "hub-macos-recommended": 1481,
  "hub-macos-specials": 1482,
  "hub-macos-featured": 1483,
  "hub-macos-takeover": 1484,
  linux: 1490,
  "hub-linux-recommended": 1491,
  "hub-linux-specials": 1492,
  "hub-linux-featured": 1493,
  "hub-linux-takeover": 1494,
  controller: 1500,
  "hub-controller-recommended": 1501,
  "hub-controller-specials": 1502,
  "hub-controller-featured": 1503,
  "hub-controller-takeover": 1504,
  freetoplay: 1510,
  "hub-freetoplay-recommended": 1511,
  "hub-freetoplay-specials": 1512,
  "hub-freetoplay-featured": 1513,
  "hub-freetoplay-takeover": 1514,
  earlyaccess: 1520,
  "hub-earlyaccess-recommended": 1521,
  "hub-earlyaccess-specials": 1522,
  "hub-earlyaccess-featured": 1523,
  "hub-earlyaccess-takeover": 1524,
  pccafe: 1530,
  "hub-pccafe-recommended": 1531,
  "hub-pccafe-specials": 1532,
  "hub-pccafe-featured": 1533,
  "hub-pccafe-takeover": 1534,
  remoteplayphone: 1540,
  "hub-remoteplayphone-recommended": 1541,
  "hub-remoteplayphone-specials": 1542,
  "hub-remoteplayphone-featured": 1543,
  "hub-remoteplayphone-takeover": 1544,
  remoteplaytablet: 1550,
  "hub-remoteplaytablet-recommended": 1551,
  "hub-remoteplaytablet-specials": 1552,
  "hub-remoteplaytablet-featured": 1553,
  "hub-remoteplaytablet-takeover": 1554,
  remoteplaytv: 1560,
  "hub-remoteplaytv-recommended": 1561,
  "hub-remoteplaytv-specials": 1562,
  "hub-remoteplaytv-featured": 1563,
  "hub-remoteplaytv-takeover": 1564,
  remoteplaytogether: 1570,
  "hub-remoteplaytogether-recommended": 1571,
  "hub-remoteplaytogether-specials": 1572,
  "hub-remoteplaytogether-featured": 1573,
  "hub-remoteplaytogether-takeover": 1574,
  "remote-play-about": 1580,
  remoteplay: 1581,
  turnbasedrpg: 1582,
  arcaderhythm: 1583,
  greatondeck: 1584,
  remoteplaylanding: 1585,
  fightingmartialarts: 1586,
  actionfps: 1587,
  hackandslash: 1588,
  actionrunjump: 1589,
  shmup: 1590,
  adventure: 1591,
  action: 1592,
  adventurerpg: 1593,
  hiddenobject: 1594,
  metroidvania: 1595,
  puzzlematching: 1596,
  storyrich: 1597,
  visualnovel: 1598,
  casual: 1559,
  querypaginated: 1600,
  n_section: 1601,
  rpgjrpg: 1602,
  rpgpartybased: 1603,
  roguelikeroguelite: 1604,
  rpgaction: 1605,
  rpg: 1606,
  rpgstrategytactics: 1607,
  rpgturnbased: 1608,
  simulation: 1609,
  simbuildingautomation: 1610,
  simdating: 1611,
  simfarmingcrafting: 1612,
  simhobbysim: 1613,
  simlife: 1614,
  simphysicssandbox: 1615,
  simspaceflight: 1616,
  strategy: 1617,
  strategycardboard: 1618,
  strategycitiessettlements: 1619,
  soundtracks: 1620,
  "hub-soundtracks-recommended": 1621,
  "hub-soundtracks-specials": 1622,
  "hub-soundtracks-featured": 1623,
  "hub-soundtracks-takeover": 1624,
  strategygrand4x: 1625,
  strategymilitary: 1626,
  strategyrealtime: 1627,
  towerdefense: 1628,
  strategyturnbased: 1629,
  sportsandracing: 1630,
  sports: 1631,
  sportsfishinghunting: 1632,
  sportsindividual: 1633,
  racing: 1634,
  racingsim: 1635,
  sportssim: 1636,
  sportsteam: 1637,
  anime: 1638,
  horror: 1639,
  mysterydetective: 1640,
  explorationopenworld: 1641,
  sciencefiction: 1642,
  space: 1643,
  survival: 1644,
  multiplayercoop: 1645,
  multiplayerlan: 1646,
  multiplayerlocalparty: 1647,
  multiplayermmo: 1648,
  multiplayer: 1649,
  multiplayeronlinecompetitive: 1650,
  singleplayer: 1651,
  upcoming: 1700,
  "comingsoon-recommendedcomingsoon": 1701,
  "comingsoon-popularwishlist": 1702,
  "comingsoon-newdlc": 1703,
  "comingsoon-followedcreator": 1704,
  "comingsoon-mywishlist": 1705,
  "comingsoon-largecap": 1706,
  "tab-PopularUpcoming": 1707,
  "tab-AllUpcoming": 1708,
  "in-library-game-event-update": 1800,
  "on-wishlist-game-event-update": 1801,
  "in-library-game-remind-me": 1802,
  "hub-demos-recommended": 1901,
  "hub-demos-specials": 1902,
  "hub-demos-featured": 1903,
  "hub-demos-takeover": 1904,
  "creator-home-product-page": 2e3,
  "franchise-home-link": 2001,
  ajaxgetappinfoforcap: 2100,
  "partner-events": 2101,
  "library-partner-events": 2102,
  "store-partner-events": 2103,
  "steamtv-partner-events": 2104,
  "community-partner-events": 2105,
  "partner-partner-events": 2106,
  "store-calendar-partner-events": 2107,
  events: 2108,
  subscriptions: 2109,
  _: 2110,
  subscriptionplansea: 2111,
  download_event: 2112,
  reminder: 2113,
  steamtv: 2200,
  "hub-specials-recommended": 2301,
  "hub-specials-specials": 2302,
  "hub-specials-featured": 2303,
  "hub-specials-takeover": 2304,
  recommender: 2400,
  "recommended-by-steam-labs": 2401,
  labs: 2500,
  automaticshow: 2501,
  microtrailers: 2502,
  "now-playing": 2503,
  deepdive: 2504,
  "game-add-to-wishlist-deepdive": 2505,
  dbdetailsmulti: 2506,
  dbgetlinkparam: 2507,
  "recommended-by-deep-dive": 2508,
  "recommended-by-deep-dive-carousel": 2509,
  "recommended-by-deep-dive-carousel_default": 2510,
  "recommended-by-deep-dive-carousel_cluster_recent": 2511,
  "recommended-by-deep-dive-carousel_cluster_games": 2512,
  "recommended-by-deep-dive-carousel_cluster_playtime": 2513,
  "recommended-by-deep-dive-carousel-default": 2514,
  "recommended-by-deep-dive-carousel-cluster-recent": 2515,
  "recommended-by-deep-dive-carousel-cluster-games": 2516,
  "recommended-by-deep-dive-carousel-cluster-playtime": 2517,
  trendingreviews: 2600,
  ajaxgetrecentreviews: 2601,
  "community-recommendations": 2602,
  lunarnewyear2020: 2700,
  lunarnewyear: 2701,
  lunarnewyearmarket: 2702,
  "steam-logo": 2750,
  "sale-banner": 2751,
  "sale-button-top": 2752,
  "sale-button-bottom": 2753,
  "wishlist-button-bottom": 2754,
  "footer-steam-logo": 2755,
  steamclient: 5e3,
  library: 5100,
  friendsui: 5200,
  friendcontextmenu: 5201,
  nextfest: 6e3,
  topsellers: 7e3,
  steamcharts: 7001,
  weeklytopsellers: 7002,
  topchartlist: 7003,
  overview: 7004,
  mostplayed: 7005,
  salesmartdailyactiveuserdemo: 7006,
  salesmartmostplayeddemo: 7007,
  salesmartdecktopplayed: 7008,
  salesmartcategory: 7009,
  vrhardwarelanding: 7010,
  monthlytopreleases: 7011,
  bestofyear: 7012,
  apphome: 1e5,
  images: 100001,
  allnews: 100003,
  news: 100004,
  announcements: 100005,
  discussions: 100006,
  reporteddiscussions: 100007,
  tradingforum: 100008,
  guides: 100009,
  reviews: 100010,
  positivereviews: 100011,
  negativereviews: 100012,
  workshop: 100013,
  broadcasts: 100014,
  eventcomments: 100015,
  sharedfiles: 100100,
  filedetails: 100101,
  screenshot: 100102,
  workshopitem: 100103,
  mtxitem: 100104,
  collection: 100105,
  guide: 100106,
  integratedguide: 100107,
  merch: 100108,
  artwork: 100109,
  video: 100110,
  topicsearch: 100201,
  singletopic: 100202,
  profiles: 100300,
  review: 100301,
  profileshowcase: 100302,
  broadcast: 100400,
  watch: 100401,
  friendactivityfeed: 100500,
  announcement: 100501,
  curatorreview: 100502,
  friendpurchase: 100503,
  workshopitempublished: 100504,
  artworkpublished: 100505,
  screenshotpublished: 100506,
  guidepublished: 100507,
  collectionpublished: 100508,
  itemfavorited: 100509,
  userreviewpublished: 100510,
  "partner.steamgames.com": 100600,
  "help.steampowered.com": 100601,
  salecreatorhome: 100700,
  saleitembrowse: 100701,
  salefacetbrowse: 100702,
  salesection: 100703,
  saletabsection: 100704,
  salebroadcast: 100705,
  salecuratorrec: 100706,
  saleeventsched: 100707,
  salesubscription: 100708,
  saleitemsearch: 100709,
  salesmartwishlist: 100710,
  salesmartir: 100711,
  salesmartdlc: 100712,
  salesmarttagrec: 100713,
  salebrowsetopwishlisted: 100714,
  salebrowsetrendingwishlisted: 100715,
  salebrowsepopularcomingsoon: 100716,
  salebrowsemostplayeddemo: 100717,
  salebrowsedailyactiveuserdemo: 100718,
  salebrowseplayednowdemo: 100719,
  salebrowserecentlyreleased: 100720,
  salebrowsepopularpurchased: 100721,
  salebrowsepopularpurchaseddiscounted: 100722,
  salebrowsediscounted: 100723,
  salebrowseprice: 100724,
  salebrowsenewandtrending: 100725,
  salebrowsetopsellers: 100726,
  salebrowsetoprated: 100727,
  discoveryqueue2022: 100728,
  saleeventsection: 100729,
  salesectionlinks: 100730,
  salesectionrewards: 100731,
  salesectiontext: 100732,
  salesectioneventschedule: 100733,
  salesmartpersonalizedcarousel: 100734,
  "promo-takeunder": 100735,
  salesmartwr: 100736,
  salesmartwishlist_allsale: 100737,
  salesmartir_allsale: 100738,
  autopopulatetag: 100739,
  autopopulatecategory: 100740,
  salesmartrecentevents: 100741,
  seasonpassproductpage: 100742,
  itemcollections: 100743,
  crosspromotesalepage: 100744,
  "mm-auto-render": 100745,
  salequiz: 100746,
  templatemediacontent: 100747,
  templatefaq: 100748,
  templatetechspec: 100749,
  topnewreleases: 100750,
  newreleases: 100751,
  salebrowsetrendingfree: 100752,
  trendingfree: 100753,
  reactroot: 100754,
  bundlelist: 100755,
  verifiedprogram: 100756,
  trailercarousel: 100757,
  "personalcalendar-lastmonth": 100800,
  "personalcalendar-lastweek": 100801,
  "personalcalendar-calendar": 100802,
  "personalcalendar-homepage": 100803,
  greatonframe: 100804,
  salesmartsale_events_only: 100805,
  salesmartdiscountreason: 100806,
  "salesmartdiscountreason-wishlist": 100807,
  "salesmartdiscountreason-firsttimeonsale": 100808,
  "salesmartdiscountreason-largestdiscount": 100809,
  "salesmartdiscountreason-endingsoon": 100810,
  "salesmartdiscountreason-newlyonsale": 100811,
  "salesmartdiscountreason-wellreviewed": 100812,
  "salesmartdiscountreason-topseller": 100813,
  "salesmartdiscountreason-hotdeal": 100814,
  "salesmartdiscountreason-deepdiscount": 100815,
  "salesmartdiscountreason-popularinregion": 100816,
  "salesmartdiscountreason-justupdated": 100817,
};
function _(_) {
  return _ in _;
}
var _ = class _ {
  static InstrumentLink(_, _, _ = null) {
    let _ = _.GetSNRLinkParam(_, _),
      _ = _.GetCuratorClanIDParam(_);
    return _.AddNavParamToURL(_, _, _);
  }
  static ParseSNR(_) {
    let _ = _.split(`_`) || [];
    return {
      domain: _.DecodeEventComponent(_[0]),
      controller: _.DecodeEventComponent(_[1]),
      method: _.DecodeEventComponent(_[2]),
      submethod: _.DecodeEventComponent(_[3]),
      feature: _.DecodeEventComponent(_[4]),
      depth: _[5] ? Number(_[5]) : void 0,
    };
  }
  static GetSNRLinkParam(_, _ = null) {
    let _ = _.ComputeLinkPrefix(_.domain, _.controller, _.method, _.submethod);
    _ = _ ?? _.depth ?? null;
    let _ = _.EncodeEventComponent(_.feature);
    return (_ && ((_ += `_` + _), _ && (_ += `_` + _)), _);
  }
  static GetCuratorClanIDParam(_) {
    return _.curator_clanid ?? null;
  }
  static AddNavParamToURL(_, _, _) {
    if (!_ || _.length == 0) return _;
    try {
      let _ = new URL(_(_)),
        _ = new URLSearchParams(_.search);
      return (
        _.set(`snr`, encodeURIComponent(_ ?? ``)),
        _ && _.set(`curator_clanid`, encodeURIComponent(_ ?? ``)),
        _.origin + _.pathname + `?` + _.toString() + _.hash
      );
    } catch (_) {
      return (console.error(_, _), _);
    }
  }
  static ComputeLinkPrefix(_, _, _, _) {
    let _ = ``;
    return (
      (_ += _.EncodeEventComponent(_)),
      (_ += `_`),
      (_ += _.EncodeEventComponent(_)),
      (_ += `_`),
      (_ += _.EncodeEventComponent(_)),
      (_ += `_`),
      (_ += _.EncodeEventComponent(_)),
      _
    );
  }
  static EncodeEventComponent(_) {
    return _
      ? _(_)
        ? `` + _[_]
        : (_.match(/^[0-9]+$/) || (_ = _.replace(/^[0-9]+/, ``)),
          _.replace(/[^a-zA-Z0-9\- ]+/g, ``))
      : ``;
  }
  static DecodeEventComponent(_) {
    let _ = _ && parseInt(_);
    if (_ && _) {
      for (let _ in _) if (_[_] == _) return _;
    }
    return _.SanitizeEventComponent(_);
  }
  static SanitizeEventComponent(_) {
    return !_ || !_.match(/^[a-zA-Z0-9\-.]*$/) ? `` : _;
  }
};
function _(_) {
  return {
    ..._,
    domain: _.SanitizeEventComponent(_.domain),
    controller: _.SanitizeEventComponent(_.controller),
    method: _.SanitizeEventComponent(_.method),
    submethod: _.SanitizeEventComponent(_.submethod),
    feature: _.SanitizeEventComponent(_.feature),
    depth: _.depth || 0,
  };
}
var _ = _.createContext({});
_.createContext(void 0);
function _() {
  return _.useContext(_);
}
function _(_, _) {
  return _(_(), _, _);
}
function _(_, _, _) {
  return {
    ..._,
    feature: _ || _.feature,
    depth: _ || _.depth,
    countrycode: _.COUNTRY,
    is_client: _.IN_CLIENT,
  };
}
function _(_, _, _) {
  let _ = _();
  return _.useMemo(() => _ && _(_, _, _, _), [_, _, _, _]);
}
function _(_, _) {
  let _ = _();
  return _.useMemo(
    () =>
      _.GetSNRLinkParam(
        {
          ..._,
          feature: _ || _.feature,
        },
        _,
      ),
    [_, _, _],
  );
}
function _(_, _, _, _) {
  let _ = _.GetSNRLinkParam(
      {
        ..._,
        feature: _ || _.feature,
      },
      _,
    ),
    _ = _.GetCuratorClanIDParam(_);
  return _.AddNavParamToURL(_, _, _);
}
function _(_) {
  let { children: _, ..._ } = _,
    _ = _.useRef(null);
  return (0, _.jsx)(_, {
    nodeRef: _,
    ..._,
    children: _.children(_),
  });
}
function _(_, _) {
  return _ < _ ? -1 : +(_ > _);
}
function _(_, _) {
  return _(_.toLocaleLowerCase(), _.toLocaleLowerCase());
}
function _(_, _) {
  let _ = _.toString(),
    _ = ``;
  for (let _ = 0; _ < _ - _.length; _++) _ += `0`;
  return _ + _;
}
function _(_) {
  return (
    (_ >= 55356 && _ <= 57343) ||
    (_ >= 8205 && _ <= 11093) ||
    _ == 12953 ||
    _ == 12349 ||
    _ == 12336 ||
    _ == 65039 ||
    _ == 12951 ||
    _ == 169 ||
    (_ >= 48 && _ <= 57) ||
    _ == 35 ||
    _ == 42 ||
    _ == 10 ||
    _ == 174
  );
}
function _(_) {
  let _ = !1,
    _ = !1,
    _ = !0;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _.charCodeAt(_);
    if (
      ((_ && _ >= 48 && _ <= 57) || _ == 35 || _ == 42 || _ == 10
        ? (_ = !0)
        : _(_) && ((_ = !0), (_ = !1)),
      _ && _ == 0)
    )
      ((_ = !0), (_ = !1));
    else if (_ && _) ((_ = !0), (_ = !1));
    else if (!_) return ((_ = !1), !1);
    if (_ > 20) return !1;
  }
  return !_ && _;
}
function _(_) {
  let _ = _.charCodeAt(0);
  return _ >= 65 && _ <= 90;
}
function _(_) {
  if (_.length <= 2) return _;
  let _ = _.charAt(1),
    _ = _(_);
  for (let _ = 2; _ < _.length; _++) {
    let _ = _.charAt(_);
    if (!_ && _(_)) ((_ = !0), (_ = _));
    else if (_ == ` `) {
      ((_ = _.charAt(_ + 1)), _.length > 0 && (_ = _));
      break;
    }
  }
  return _.charAt(0) + _;
}
function _(_, _ = !1) {
  if (Number.isNaN(_) || !Number.isFinite(_)) return ``;
  let _ = _ < 0;
  _ = Math.abs(_);
  let _ = Math.floor(_ / 3600),
    _ = Math.floor((_ % 3600) / 60),
    _ = Math.floor(_ % 60),
    _ = _ ? `-` : ``;
  return !_ || _ > 0 ? `${_}${_}:${_(_, 2)}:${_(_, 2)}` : `${_}${_}:${_(_, 2)}`;
}
function _(_) {
  return _
    ? DOMParser
      ? new DOMParser().parseFromString(_, `text/html`).documentElement
          .textContent
      : _
    : ``;
}
function _(_, _ = ``) {
  return _.replace(/\bhttps?:\/\/\S+/gi, _);
}
function _(_, _, _ = !0) {
  let _ = _.trim();
  if (((_ = _.replace(_ ? /\s+/g : /[ \t]+/g, ` `)), _.length > _)) {
    _ = _.substring(0, _);
    let _ = _.replace(/^(.*([.!?])) .*$/, `$1`),
      _ = _.length;
    ((_ < _ * 0.6 || _ == _) && (_ = _.replace(/ [^ ]*$/, `...`)),
      (_ = _ ? _.replace(/(\r\n|\n|\r)/gm, ``) : _));
  }
  return _;
}
function _(_) {
  if (_.startsWith(`[emoticon`)) {
    let _ = _.match(/^(?:\[emoticon\][^\[]+\[\/emoticon\]\s*)+$/);
    if (_ && _.length) {
      let _ = _.match(/\[emoticon\][^\[]+\[\/emoticon\]/g);
      return _ && _.length <= 6;
    }
  }
  return !1;
}
function _(_) {
  return _.length <= 1
    ? _.toUpperCase()
    : _.charAt(0).toUpperCase() + _.slice(1);
}
function _(_, _) {
  let _ = _.lastIndexOf(_);
  return _ == -1 ? `` : _.substr(_ + _.length);
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
var _ = `{STEAM_CLAN_IMAGE}`,
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
  ];
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
var _ = class _ extends _.Message {
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
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetVoteDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.SetVote#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.SetVote = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.GetUserVotes#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
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
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetUserNominations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetOtherUserNominations#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetOtherUserNominations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.Nominate#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
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
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetNominationRecommendations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetNominationShareLink#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
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
};
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
  _ = (function (_) {
    return (
      (_[(_.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
      (_[(_.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
      (_[(_.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
      (_[(_.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
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
function _(_) {
  switch (_) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
    case `events`:
    case `sale_events`:
    case `contenthubspecials`:
      return !0;
  }
  return !1;
}
function _(_, _ = !1) {
  return !_ || !_(_.section_type)
    ? !1
    : _
      ? _.sale_tag_filter?.clauses?.length
        ? !0
        : !!_.smart_section
      : !!_.smart_section && _.smart_section_type != null;
}
function _(_) {
  return _(_) ? _?.smart_section_type : void 0;
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
              : _ === `sale_secondary_background`
                ? (_ = this.jsondata.localized_sale_secondary_background_image)
                : _.includes(_)
                  ? (_ = this.fnGetLocalizedGroupImages?.())
                  : _ === `product_banner`
                    ? (_ = this.jsondata.localized_sale_product_banner)
                    : _ === `product_mobile_banner`
                      ? (_ = this.jsondata.localized_sale_product_mobile_banner)
                      : _ === `bestofyear_banner`
                        ? (_ = this.jsondata.localized_bestofyear_banner)
                        : _ === `bestofyear_banner_mobile`
                          ? (_ =
                              this.jsondata.localized_bestofyear_banner_mobile)
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
  return window.StoreDefaults ? window.StoreDefaults[_] : void 0;
}
var _ = _(_());
function _(_) {
  let [_, _] = (0, _.useState)(() => _.GetClanEventModel(_)),
    _ = _(`usePartnerEventByEventGID`);
  return (
    (0, _.useEffect)(() => {
      _ &&
        _?.GID != _ &&
        (_.Init(),
        _.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([_], [], _).then(
          (_) => {
            _?.length == 1 && _[0].GID == _ && !_.token.reason && _(_[0]);
          },
        ));
    }, [_, _, _]),
    _
  );
}
function _(_) {
  let _ = `` + _,
    _ = _.GetELanguageFallback(_);
  return (_ != _ && (_ += `_` + _), _);
}
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
var _ = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(_) {
      (_(
        typeof _.appid == `number`,
        `AJAX updated app returned a non-numeric AppID! Did the PHP change?`,
      ),
        (this.appid = _.appid),
        (this.date = _.date),
        (this.can_play = _.can_play),
        (this.playtime = _.playtime),
        (this.announcementid = _.announcementid));
    }
  },
  _ = class {
    constructor(_ = !1) {
      (_(this), (this.m_bOnlySummary = _));
    }
    m_bOnlySummary = !1;
    m_mapExistingEvents = new Map();
    m_mapEventUpdateCallback = new Map();
    m_mapAnnouncementBodyToEvent = new Map();
    m_mapClanToGIDs = new Map();
    m_mapAppIDToGIDs = new Map();
    m_mapAdjacentAnnouncementGIDs = new Map();
    m_mapUpdatedApps = new Map();
    m_tsUpdatedAppsQueryTime = 0;
    m_rgQueuedEventsClanIDs = [];
    m_rgQueuedEventsUniqueIDs = [];
    m_rgQueuedEventsForEditFlags = [];
    m_QueuedEventTimeout = new _();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let _ = _(`PartnerEventStore`);
        this.ValidateStoreDefault(_) &&
          _.forEach((_) => {
            if (_) {
              let _ = new _(_.clan_steamid),
                _ = this.InsertEventModelFromClanEventData(_, _);
              _.announcement_body &&
                this.m_mapExistingEvents.set(_ + _.announcement_body.gid, _);
            }
          });
        let _ = _(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(_) &&
          _.forEach((_) => {
            if (_) {
              let _ = new _(_.clan_steamid),
                _ = this.InsertEventModelFromClanEventData(_, _);
              _.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + _.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(_ + _.announcement_body.gid, _);
            }
          });
        let _ = _(`partnereventadjacents`, `application_config`);
        (this.ValidateAdjacentEvent(_) &&
          _.forEach((_) => {
            _ &&
              this.m_mapAdjacentAnnouncementGIDs.set(
                _.announcementGID,
                _.adjacents,
              );
          }),
          (this.m_bLoadedFromConfig = !0));
      }
    }
    ValidateStoreDefault(_) {
      let _ = _;
      return _ &&
        Array.isArray(_) &&
        _.length > 0 &&
        _[0] &&
        typeof _[0] == `object`
        ? typeof _[0].gid == `string` ||
            (typeof _[0].announcement_body == `object` &&
              typeof _[0].announcement_body.gid == `string`)
        : !1;
    }
    ValidateAdjacentEvent(_) {
      let _ = _;
      return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
        ? typeof _[0].announcementGID == `string` &&
            Array.isArray(_[0].adjacents) &&
            (_[0].adjacents.length == 0 || typeof _[0].adjacents[0] == `string`)
        : !1;
    }
    GetPartnerEventChangeCallback(_) {
      let _ = this.m_mapEventUpdateCallback.get(_);
      return (
        (_ ||=
          (this.m_mapEventUpdateCallback.set(_, new _()),
          this.m_mapEventUpdateCallback.get(_))),
        _
      );
    }
    GetClanEventGIDs(_) {
      return this.m_mapClanToGIDs.get(_.GetAccountID()) || [];
    }
    GetClanEventGIDsForApp(_) {
      return this.m_mapAppIDToGIDs.get(_) || [];
    }
    GetClanEventModel(_) {
      if (_ !== void 0) return this.m_mapExistingEvents.get(_);
    }
    BHasClanEventModel(_) {
      return this.m_mapExistingEvents.has(_);
    }
    BHasClanAnnouncementGID(_) {
      if (_ === void 0) return !1;
      let _ = this.m_mapAnnouncementBodyToEvent.get(_);
      return !!_ && this.BHasClanEventModel(_);
    }
    GetClanEventGIDFromAnnouncementGID(_) {
      return this.m_mapAnnouncementBodyToEvent.get(_);
    }
    GetClanEventFromAnnouncementGID(_) {
      if (_ === void 0) return;
      let _ = this.m_mapAnnouncementBodyToEvent.get(_);
      return _ ? this.m_mapExistingEvents.get(_) : void 0;
    }
    DefaultEventSortFunction(_, _) {
      return _.startTime == _.startTime
        ? _(_.GID ?? ``, _.GID ?? ``)
        : (_.startTime ?? 0) - (_.startTime ?? 0);
    }
    RegisterClanEvents(_) {
      if (_)
        for (let _ of _) {
          let _ = _(_);
          if (!this.m_mapExistingEvents.has(_)) {
            let _ = new _(_.clan_steamid);
            this.InsertEventModelFromClanEventData(_, _);
          }
        }
    }
    GetRankedClanEvents(_, _) {
      let _ = [],
        _ = _
          ? this.GetClanEventGIDs(_)
          : _
            ? this.GetClanEventGIDsForApp(_)
            : void 0;
      if (!_ || _.length == 0) return _;
      for (let _ of _) {
        let _ = this.GetClanEventModel(_);
        _ && _.push(_);
      }
      return (_.sort(this.DefaultEventSortFunction), _);
    }
    InsertEventModelFromClanEventData(_, _) {
      let _ = _(_, _);
      return (
        this.InsertUniqueEventGID(_.GetAccountID(), _.appid, _.GID),
        this.m_mapExistingEvents.set(_.GID, _),
        _.AnnouncementGID &&
          _.AnnouncementGID.length > 1 &&
          this.m_mapAnnouncementBodyToEvent.set(_.AnnouncementGID, _.GID),
        _
      );
    }
    HelperInitializeNumSalesHeaderArray(_) {
      if ((_.jsondata.sale_num_headers ?? 0) > 1) {
        _.jsondata.localized_per_day_sales_header = [];
        for (let _ = 0; _ < (_.jsondata.sale_num_headers ?? 0); ++_)
          _.jsondata.localized_per_day_sales_header.push(_([], 32, null));
        _.m_overrideCurrentDay = 0;
      } else _.m_overrideCurrentDay = void 0;
    }
    GetAllClanEvents(_) {
      let _ = [];
      return (
        this.m_mapClanToGIDs.has(_.GetAccountID()) &&
          this.m_mapClanToGIDs.get(_.GetAccountID()).forEach((_) => {
            let _ = this.m_mapExistingEvents.get(_);
            _ && _.push(_);
          }),
        _
      );
    }
    async QueueLoadPartnerEvent(_, _, _) {
      if (this.m_mapExistingEvents.has(_)) return;
      (this.m_rgQueuedEventsClanIDs.push(_),
        this.m_rgQueuedEventsUniqueIDs.push(_),
        this.m_rgQueuedEventsForEditFlags.push(!!_),
        (this.m_PendingInfoPromise ||= new Promise(
          (_) => (this.m_PendingInfoResolve = _),
        )));
      let _ = this.m_PendingInfoPromise,
        _ = () => {
          let _ = this.m_PendingInfoResolve,
            _ = this.m_rgQueuedEventsClanIDs,
            _ = this.m_rgQueuedEventsUniqueIDs,
            _ = this.m_rgQueuedEventsForEditFlags;
          ((this.m_PendingInfoPromise = void 0),
            (this.m_rgQueuedEventsClanIDs = []),
            (this.m_rgQueuedEventsUniqueIDs = []),
            (this.m_rgQueuedEventsForEditFlags = []),
            this.InternalLoadPartnerEventList(_, _, _).then(() => _?.()));
        };
      return (
        this.m_rgQueuedEventsClanIDs.length >= 30
          ? (this.m_QueuedEventTimeout.Cancel(), _())
          : this.m_QueuedEventTimeout.IsScheduled() ||
            this.m_QueuedEventTimeout.Schedule(50, _),
        _
      );
    }
    async InternalLoadPartnerEventList(_, _, _) {
      let _ = _.some((_) => _),
        _ =
          _.STORE_BASE_URL +
          (_
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        _ = _(_(_.LANGUAGE)),
        _ = {
          clanid_list: _.join(`,`),
          uniqueid_list: _.join(`,`),
          lang_list: _,
          origin: self.origin,
        };
      try {
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: _,
        });
        this.RegisterClanEvents(_.data.events);
      } catch (_) {
        let _ = _(_);
        console.error(`GetEventDetails hit error ` + _.strErrorMsg, _);
      }
    }
    async LoadAdjacentPartnerEvents(_, _, _, _, _, _, _) {
      return this.InternalLoadAdjacentPartnerEvents(
        _,
        void 0,
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadAdjacentPartnerEventsByAnnouncement(_, _, _, _, _, _, _) {
      return this.InternalLoadAdjacentPartnerEvents(
        void 0,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadAdjacentPartnerEventsByEvent(_, _, _, _, _, _, _) {
      let _ = _ || _.clanSteamID;
      return _.bOldAnnouncement
        ? this.InternalLoadAdjacentPartnerEvents(
            void 0,
            _.AnnouncementGID,
            _,
            _,
            _,
            _,
            _,
            _,
          )
        : this.InternalLoadAdjacentPartnerEvents(
            _.GID,
            _.AnnouncementGID,
            _,
            _,
            _,
            _,
            _,
            _,
          );
    }
    async InternalLoadAdjacentPartnerEvents(_, _, _, _, _, _, _, _) {
      let _ = [];
      if (!_ || !this.m_mapAdjacentAnnouncementGIDs.has(_)) {
        let _ = _.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          _ = _(_(_.LANGUAGE));
        _?.only_summaries &&
          !this.m_bOnlySummary &&
          (_(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (_.only_summaries = void 0));
        let _ = {
          clan_accountid: _ ? _.GetAccountID() : void 0,
          appid: _,
          count_before: _,
          count_after: _,
          gidevent: _,
          gidannouncement: _,
          lang_list: _,
          rtime_oldestevent: _ ? _.rtime_oldestevent : void 0,
          require_tags: _ && _.require_tags ? _.require_tags.join(`,`) : void 0,
          exclude_tags: _ && _.exclude_tags ? _.exclude_tags.join(`,`) : void 0,
          require_no_tags: _ ? _.require_no_tags : void 0,
          event_type_filter:
            _ && _.event_type_filter ? _.event_type_filter.join(`,`) : void 0,
          exclude_event_types:
            _ && _.exclude_event_types
              ? _.exclude_event_types.join(`,`)
              : void 0,
          only_summaries: _ && !!_.only_summaries,
          origin: self.origin,
        };
        try {
          let _ = await _.default.get(_, {
            params: _,
            cancelToken: _?.token,
          });
          if (_?.data?.success == 1)
            _(() => {
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_ || _, _);
                }
                _.push(this.m_mapExistingEvents.get(_));
              }
              if (_.length == 0) {
                if (_ && this.BHasClanEventModel(_))
                  this.m_mapExistingEvents.get(_) &&
                    _.push(this.m_mapExistingEvents.get(_));
                else if (_ && this.BHasClanAnnouncementGID(_)) {
                  let _ = this.GetClanEventFromAnnouncementGID(_);
                  _ && _.push(_);
                }
              }
            });
          else {
            let _ = _(_?.data);
            console.error(
              `LoadAdjacentPartnerEvents Success but empty response:` +
                _ +
                ` clanAccount:` +
                (_ ? _.GetAccountID() : 0) +
                ` ` +
                _.strErrorMsg,
              _,
            );
          }
        } catch (_) {
          let _ = _(_);
          _.errorCode != 52 &&
            console.error(
              `LoadAdjacentPartnerEvents hit error on appid:` +
                _ +
                ` clanAccount:` +
                (_ ? _.GetAccountID() : 0) +
                ` ` +
                _.strErrorMsg,
              _,
            );
        }
      } else {
        let _ = this.m_mapAdjacentAnnouncementGIDs.get(_),
          _ = [];
        (_?.forEach((_) => {
          if (this.m_mapAnnouncementBodyToEvent.has(_)) {
            let _ = this.m_mapAnnouncementBodyToEvent.get(_);
            _ &&
              this.m_mapExistingEvents.get(_) &&
              _.push(this.m_mapExistingEvents.get(_));
          } else _.push(_);
        }),
          _.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                _,
                _,
              )
            ).forEach((_) => _.push(_)));
      }
      return _;
    }
    async LoadPartnerEventsPageable(_, _, _ = 0, _ = 0, _) {
      let _ = [],
        _ = _.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        _ = {
          clan_accountid: _ ? _.GetAccountID() : void 0,
          appid: _,
          offset: _,
          count: _,
          _: _.LANGUAGE,
          origin: self.origin,
          exclude_tags: _ && _.length > 0 ? _?.join(`,`) : void 0,
        };
      try {
        let _ = await _.default.get(_, {
          params: _,
        });
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            _.push(this.m_mapExistingEvents.get(_));
          }
        });
      } catch (_) {
        console.error(`LoadClanEventInDateRange hit error ` + _(_).strErrorMsg);
      }
      return _;
    }
    async GetBestEventsForCurrentUser(_, _, _) {
      let _ = [],
        _ = {
          _: _.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: _,
          include_only_game_updates: _,
        },
        _ = _.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _ ? _.token : void 0,
        });
      if (!_.data?.events) {
        let _ = _.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${_})`);
      }
      return (
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            let _ = {
              nAppPriority: _.nAppPriority,
              bPossibleTakeOver: _.bPossibleTakeOver,
              event: this.m_mapExistingEvents.get(_),
            };
            _.push(_);
          }
        }),
        _
      );
    }
    async LoadImportantEventsAroundToday(_, _, _, _, _, _) {
      let _ = [],
        _ = [];
      (_.push({
        priority: 0,
        appids: _,
      }),
        _ &&
          _.push({
            priority: 1,
            appids: _,
          }),
        _ &&
          _.push({
            priority: 2,
            appids: _,
          }));
      let _ = {
          count: _,
          strAppIDPriority: JSON.stringify({
            prioritized_apps: _,
          }),
          filterToEventTypes: _ ? _.toString() : ``,
          _: _.LANGUAGE,
        },
        _ = _.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _.token,
        });
      return (
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            _.push(this.m_mapExistingEvents.get(_));
          }
        }),
        _
      );
    }
    InsertUniqueEventGID(_, _, _) {
      let _ = this.m_mapClanToGIDs.get(_);
      _ ||= (this.m_mapClanToGIDs.set(_, []), this.m_mapClanToGIDs.get(_));
      let _ = this.m_mapAppIDToGIDs.get(_);
      ((_ ||= (this.m_mapAppIDToGIDs.set(_, []), this.m_mapAppIDToGIDs.get(_))),
        _.indexOf(_) == -1 && (_.push(_), _.push(_)));
    }
    ResetModel() {}
    async DeleteClanEvent(_, _) {
      this.m_mapExistingEvents.has(_) &&
        (this.m_mapExistingEvents.get(_).deleteInProgress = !0);
      let _ = new URLSearchParams();
      (_.append(`sessionid`, _()),
        _.append(`bDelete`, `1`),
        _.append(`gid`, _));
      let _ = await _.default.post(
        _.COMMUNITY_BASE_URL +
          `/gid/` +
          _.ConvertTo64BitString() +
          `/ajaxcreateupdatedeletepartnerevents/`,
        _,
      );
      return (this.RemoveGIDFromList(_, _), _.data);
    }
    RemoveGIDFromList(_, _) {
      if (
        (this.m_mapExistingEvents.delete(_),
        this.m_mapClanToGIDs.has(_.GetAccountID()))
      ) {
        let _ = this.m_mapClanToGIDs.get(_.GetAccountID()),
          _ = _.indexOf(_);
        _ >= 0 && _.splice(_, 1);
      }
    }
    FlushEventFromCache(_, _) {
      if (
        (_ &&
          this.m_mapExistingEvents.has(_) &&
          ((_ ||= this.m_mapExistingEvents.get(_).AnnouncementGID),
          this.m_mapExistingEvents.delete(_)),
        _ &&
          (this.m_mapExistingEvents.has(`old_announce_` + _) &&
            this.m_mapExistingEvents.delete(_ + _),
          this.m_mapAnnouncementBodyToEvent.has(_)))
      ) {
        let _ = this.m_mapAnnouncementBodyToEvent.get(_);
        (_ &&
          this.m_mapExistingEvents.has(_) &&
          this.m_mapExistingEvents.delete(_),
          this.m_mapAnnouncementBodyToEvent.delete(_));
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
      _,
      _,
      _,
      _,
      _,
      _ = !1,
    ) {
      let _ = _(_ ? 0 : _(_.LANGUAGE)),
        _ = {
          appid: _,
          clan_accountid: _ ? _.GetAccountID() : void 0,
          announcement_gid: _,
          event_gid: _,
          lang_list: _,
          last_modified_time: _ || 0,
          origin: self.origin,
          for_edit: _,
          only_summary: this.m_bOnlySummary,
        },
        _ = null,
        _ = null;
      if (_) {
        let _ = _();
        (_ === `community`
          ? ((_ = _.COMMUNITY_BASE_URL),
            (_ += _ ? `gid/` + _.ConvertTo64BitString() : `ogg/` + _),
            (_ += `/`))
          : (_ =
              _ === `partner`
                ? _.PARTNER_BASE_URL + `sales/`
                : _.STORE_BASE_URL + `events/`),
          (_ += `ajaxgetpartnereventforedit`),
          (_ = {
            params: _,
            withCredentials: !0,
          }));
      } else
        ((_ = _.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (_ = {
            params: _,
            withCredentials: !1,
          }));
      try {
        let _ = await _.default.get(_, _);
        if (_.data.success !== 1) return;
        let _ = _.data.event,
          _ = _(_);
        if (
          !this.m_mapExistingEvents.has(_) ||
          (this.m_mapExistingEvents.get(_).rtime32_last_modified ?? 0) <
            (_.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(_).rtime32_moderator_reviewed ?? 0) <
            (_.rtime_mod_reviewed ?? 0)
        ) {
          _(_.clan_steamid, `ClanSteamID is missing from data we received`);
          let _ = new _(_.clan_steamid);
          this.InsertEventModelFromClanEventData(_, _);
        }
        return this.m_mapExistingEvents.get(_);
      } catch {
        return;
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
      _,
      _,
      _,
      _,
      _,
      _,
    ) {
      if (_ && this.m_mapExistingEvents.has(_))
        return this.m_mapExistingEvents.get(_);
      if (_) {
        if (this.m_mapExistingEvents.has(`old_announce_` + _))
          return this.m_mapExistingEvents.get(_ + _);
        if (this.m_mapAnnouncementBodyToEvent.has(_)) {
          let _ = this.m_mapAnnouncementBodyToEvent.get(_);
          if (_ && this.m_mapExistingEvents.has(_))
            return this.m_mapExistingEvents.get(_);
        }
      }
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromAnnoucementGID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        _,
        void 0,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        void 0,
        void 0,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromClanEventGID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        _,
        _,
        void 0,
        _,
        _,
      );
    }
    async LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        void 0,
        _,
        void 0,
        _,
        _,
      );
    }
    async LoadPartnerEventGeneric(_, _, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadHiddenPartnerEvent(_, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        void 0,
        _,
        void 0,
        0,
        !0,
      );
    }
    async LoadHiddenPartnerEventByAnnouncementGID(_, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        void 0,
        void 0,
        _,
        0,
        !0,
      );
    }
    async HintLoadImportantUpdates() {
      let _ = _(36e5);
      if (_ != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = _;
        let _ = {
            page: 1,
            numPerPage: 500,
            includeAnnouncements: !1,
          },
          _ = _.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          _ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          });
        _.data.apps &&
          _.data.apps.length > 0 &&
          _(() => {
            let _ = new Map(_.data.apps?.map((_) => [_.appid, new _(_)]));
            this.m_mapUpdatedApps = _;
          });
      }
      return this.m_mapUpdatedApps;
    }
    GetAppImportantUpdate(_) {
      return (
        this.HintLoadImportantUpdates().catch((_) => {
          console.log(`UpdatedApps failed to load: `, _.response?.data);
        }),
        this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(_)
      );
    }
    async LoadClanEventLocalizationFromAnnouncementGID(_, _) {
      let _ =
        _.COMMUNITY_BASE_URL +
        `gid/` +
        _.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        _;
      return (await _.default.get(_)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(_, _, _) {
      let _ = [],
        _ = _.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        _ = _(_(_.LANGUAGE)),
        _ = null,
        _ = null;
      if (_) {
        let _ = [];
        (_.forEach((_) => {
          this.m_mapExistingEvents.has(_)
            ? _.push(this.m_mapExistingEvents.get(_))
            : _.push(_);
        }),
          _.sort(),
          (_ = _));
      }
      if (_) {
        let _ = [];
        (_.forEach((_) => {
          if (
            this.m_mapAnnouncementBodyToEvent.has(_) &&
            this.m_mapAnnouncementBodyToEvent.get(_) &&
            this.m_mapExistingEvents.has(
              this.m_mapAnnouncementBodyToEvent.get(_),
            )
          ) {
            let _ = this.m_mapAnnouncementBodyToEvent.get(_);
            if (_) {
              let _ = this.m_mapExistingEvents.get(_);
              _ && _.push(_);
            }
          } else _.push(_);
        }),
          _.sort(),
          (_ = _));
      }
      if (!_ && !_) return _;
      let _ = [];
      for (; (_?.length ?? 0) > 0 || (_?.length ?? 0) > 0;) {
        let _ = {
          event_gids:
            (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(`,`) : void 0,
          lang_list: _,
          origin: self.origin,
        };
        _.push(
          _.default.get(_, {
            params: _,
            cancelToken: _ ? _.token : void 0,
          }),
        );
      }
      try {
        let _ = await Promise.all([..._]),
          _ = 0;
        _(() =>
          _.forEach((_) => {
            if (_ && _.data && _.data.events)
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_, _);
                }
                _.push(this.m_mapExistingEvents.get(_));
              }
            else {
              let _ = _(_);
              console.error(
                `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error ` +
                  _.strErrorMsg,
                _,
              );
            }
            _ += 1;
          }),
        );
      } catch (_) {
        let _ = _(_);
        console.error(
          `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error ` +
            _.strErrorMsg,
          _,
        );
      }
      return _;
    }
    async SavePartnerEventSaleAssets(_, _, _, _) {
      let _ = null;
      if (!this.m_mapExistingEvents.has(_)) return !1;
      try {
        let _ = `${_.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${_}`,
          _ = new FormData();
        (_.append(`sessionid`, _()),
          _.append(`gidclanevent`, _),
          _.append(`json`, JSON.stringify(_)),
          _.append(`pageStyles`, JSON.stringify(_)));
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
        if (_?.data?.success == 1) {
          let _ = this.m_mapExistingEvents.get(_);
          if (_ && _.jsondata) {
            for (let _ in _)
              if (_.hasOwnProperty(_) && _[_]) {
                let _ = _,
                  _ = _[_];
                _ !== void 0 && _ !== void 0 && (_.jsondata[_] = _);
              }
          }
          return (this.GetPartnerEventChangeCallback(_).Dispatch(_), !0);
        }
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CPartnerEventStore.SavePartnerEventSaleAssets failed: ` +
            _?.strErrorMsg,
          _,
        ),
        !1
      );
    }
    BIsSummaryOnlyStore() {
      return this.m_bOnlySummary;
    }
  };
(_([_], _.prototype, `m_mapExistingEvents`, void 0),
  _([_], _.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  _([_], _.prototype, `m_mapClanToGIDs`, void 0),
  _([_], _.prototype, `m_mapAppIDToGIDs`, void 0),
  _([_], _.prototype, `m_mapUpdatedApps`, void 0),
  _([_], _.prototype, `Init`, null),
  _([_], _.prototype, `GetPartnerEventChangeCallback`, null),
  _([_], _.prototype, `RegisterClanEvents`, null),
  _([_], _.prototype, `InsertEventModelFromClanEventData`, null),
  _([_], _.prototype, `DeleteClanEvent`, null),
  _([_], _.prototype, `RemoveGIDFromList`, null),
  _([_], _.prototype, `FlushEventFromCache`, null),
  _([_], _.prototype, `SavePartnerEventSaleAssets`, null));
var _ = new _();
(_(`g_PartnerEventStore`, _), _(`g_PartnerEventSummaryStore`, new _(!0)));
function _(_, _ = ``, _ = null) {
  return _.InstrumentLink(_, _, _);
}
function _(_, _, _) {
  let _ = _();
  return _.useMemo(() => {
    let _ = _(_).toLowerCase(),
      _ = _(_.COMMUNITY_BASE_URL).toLowerCase(),
      _ = _(_.STORE_BASE_URL).toLowerCase();
    return _ === _ || _ === _ ? _(_, _, _, _) : _;
  }, [_, _, _, _]);
}
function _(_, _, _ = null) {
  let _ = _(_, _),
    _ = _ ? _.GetCuratorClanIDParam(_) : null;
  return _.AddNavParamToURL(_, _, _);
}
function _(_, _, _, _ = null) {
  let _ = _(_, _, _);
  if (_ && Object.keys(_).length > 0)
    try {
      let _ = new URL(_(_)),
        _ = new URLSearchParams(_.search);
      return (
        Object.entries(_).forEach(([_, _]) => {
          _.set(_, encodeURIComponent(_ ?? ``));
        }),
        _.origin + _.pathname + `?` + _.toString() + _.hash
      );
    } catch {}
  return _;
}
function _(_, _ = null) {
  return _?.domain ? _.GetLinkParam(_, _) : _.SNR;
}
function _(_, _ = ``, _ = null) {
  return _(`${_.STORE_BASE_URL}app/${_}`, _, _);
}
var _ = class _ {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(_, _, _ = null, _ = null) {
    ((_.sm_strDomain = _),
      (_.sm_strController = _),
      (_.sm_strMethod = _),
      (_.sm_strSubmethod = _),
      (_.sm_strComputedLinkPrefix = null));
  }
  static GetDefaultParams() {
    let _ = {
      domain: _.sm_strDomain,
      controller: _.sm_strController,
    };
    return (
      _.sm_strMethod && (_.method = _.sm_strMethod),
      _.sm_strSubmethod && (_.submethod = _.sm_strSubmethod),
      _
    );
  }
  static InstrumentLink(_, _, _ = null) {
    let _ = _.GetLinkParam(_, _),
      _ = typeof _ == `string` ? null : _.GetCuratorClanIDParam(_);
    return _.AddNavParamToURL(_, _, _);
  }
  static GetLinkParam(_, _ = null) {
    let _;
    if (typeof _ != `string`) {
      if (_.domain) return _.GetSNRLinkParam(_, _);
      _ = _.feature || ``;
    }
    let _;
    if (!_.sm_strComputedLinkPrefix && !_.ComputeStaticLinkPrefix())
      return null;
    _ = _.sm_strComputedLinkPrefix;
    let _ = _.EncodeEventComponent(_);
    return (_ && ((_ += `_` + _), _ && (_ += `_` + _)), _);
  }
  static ComputeStaticLinkPrefix() {
    return _.sm_strDomain
      ? ((_.sm_strComputedLinkPrefix = _.ComputeLinkPrefix(
          _.sm_strDomain,
          _.sm_strController,
          _.sm_strMethod,
          _.sm_strSubmethod,
        )),
        !0)
      : (_(
          !1,
          `CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!`,
        ),
        !1);
  }
};
function _(_, _) {
  if (_[_]) {
    if (_ == `community_icon`) {
      let _ = _.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${_[_]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${_.MEDIA_CDN_COMMUNITY_URL}${_}`;
    }
    if (typeof _[_] == `string`) {
      let _ = _.asset_url_format.replace("${FILENAME}", _[_]);
      return `${_.STORE_ITEM_BASE_URL}${_}`;
    }
  }
}
function _(_, _ = `full`) {
  let _ = ``;
  switch (_) {
    case `thumb`:
      _ = `.116x65`;
      break;
    case `600x338`:
      _ = `.600x338`;
      break;
    case `1920x1080`:
      _ = `.1920x1080`;
      break;
    case `full`:
      _ = ``;
      break;
    default:
      _(_, `Invalid size: ${_}`);
  }
  return (
    _.STORE_ITEM_BASE_URL + _.filename.replace(/\.([^.]+)(\?.*)?$/, `${_}.$1$2`)
  );
}
function _(_) {
  let { data: _ } = _(_),
    _ = _();
  if (_)
    return [
      ...(_.all_ages_screenshots || []),
      ...(!_ && _.mature_content_screenshots
        ? _.mature_content_screenshots
        : []),
    ].sort((_, _) => _.ordinal - _.ordinal);
}
function _(_, ..._) {
  let { data: _ } = _(_);
  return _(_, ..._);
}
function _(_, ..._) {
  if (!_?.asset_url_format) return;
  let _ = _.find((_) => {
    let _ = _[_];
    return typeof _ == `string` && _.trim() !== ``;
  });
  return _ && _(_, _);
}
function _(_) {
  return _?.is_coming_soon
    ? _(
        _.coming_soon_display,
        _.steam_release_date,
        _.custom_release_date_message,
      )
    : _?.steam_release_date
      ? _(_.steam_release_date)
      : ``;
}
function _(_) {
  return _(_.releaseInfo);
}
function _(_, _, _) {
  switch (_) {
    case `date_full`:
      return _(_);
    case `date_month`:
      return _(new Date(_ * 1e3));
    case `date_quarter`:
      return _(new Date(_ * 1e3));
    case `date_year`:
      return _(new Date(_ * 1e3));
    case `text_comingsoon`:
      return _ || _.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return _ || _.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function _(_) {
  if (!_) return ``;
  if (_ && _.is_coming_soon) {
    if (_.coming_soon_display) return _(_);
    if (_.custom_release_date_message) return _.custom_release_date_message;
    let _ = _.steam_release_date;
    return _ ? (_.is_abridged_release_date ? _(new Date(_ * 1e3)) : _(_)) : ``;
  }
  let _ = _.steam_release_date;
  return ((_ ||= _.original_release_date), _ ? _(_) : ``);
}
var _ = (function (_) {
  return (
    (_[(_._ = 0)] = `A`),
    (_[(_._ = 1)] = `B`),
    (_[(_._ = 2)] = `X`),
    (_[(_._ = 3)] = `Y`),
    (_[(_.Left = 4)] = `Left`),
    (_[(_.Right = 5)] = `Right`),
    (_[(_._ = 6)] = `Up`),
    (_[(_.Down = 7)] = `Down`),
    (_[(_.HomeMenu = 8)] = `HomeMenu`),
    (_[(_.QuickMenu = 9)] = `QuickMenu`),
    (_[(_.Select = 10)] = `Select`),
    (_[(_.Start = 11)] = `Start`),
    (_[(_.LeftBumper = 12)] = `LeftBumper`),
    (_[(_.RightBumper = 13)] = `RightBumper`),
    (_[(_.LeftTrigger = 14)] = `LeftTrigger`),
    (_[(_.RightTrigger = 15)] = `RightTrigger`),
    (_[(_.LeftStick = 16)] = `LeftStick`),
    (_[(_.LeftStickClick = 17)] = `LeftStickClick`),
    (_[(_.RightStick = 18)] = `RightStick`),
    (_[(_.RightStickClick = 19)] = `RightStickClick`),
    (_[(_.LeftTrackpad = 20)] = `LeftTrackpad`),
    (_[(_.LeftTrackpadClick = 21)] = `LeftTrackpadClick`),
    (_[(_.RightTrackpad = 22)] = `RightTrackpad`),
    (_[(_.RightTrackpadClick = 23)] = `RightTrackpadClick`),
    (_[(_.RearLeftUpper = 24)] = `RearLeftUpper`),
    (_[(_.RearLeftLower = 25)] = `RearLeftLower`),
    (_[(_.RearRightUpper = 26)] = `RearRightUpper`),
    (_[(_.RearRightLower = 27)] = `RearRightLower`),
    _
  );
})({});
function _(_) {
  switch (_) {
    case _._:
      return 0;
    case _.CANCEL:
      return 1;
    case _.SECONDARY:
      return 2;
    case _.OPTIONS:
      return 3;
    case _.DIR_LEFT:
      return 4;
    case _.DIR_RIGHT:
      return 5;
    case _.DIR_UP:
      return 6;
    case _.DIR_DOWN:
      return 7;
    case _.STEAM_GUIDE:
      return 8;
    case _.STEAM_QUICK_MENU:
      return 9;
    case _.SELECT:
      return 10;
    case _.START:
      return 11;
    case _.BUMPER_LEFT:
      return 12;
    case _.BUMPER_RIGHT:
      return 13;
    case _.TRIGGER_LEFT:
      return 14;
    case _.TRIGGER_RIGHT:
      return 15;
    case _.REAR_LEFT_UPPER:
      return 24;
    case _.REAR_LEFT_LOWER:
      return 25;
    case _.REAR_RIGHT_UPPER:
      return 26;
    case _.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var _ = class _ {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new _(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(_) {
    let _ = new _();
    return (
      _.Push(
        _.FocusChangedCallbacks.Register(this.OnFocusNavigationChanged)
          .Unregister,
      ),
      _.Push(
        _.NavTreeActivatedOrReactivatedCallbacks.Register(
          this.OnActiveNavTreeChanged,
        ).Unregister,
      ),
      _.GetUnregisterFunc()
    );
  }
  BFromActiveNavTree(_, _) {
    let _ = _?.Tree;
    return ((_ ||= _?.Tree), _ && _.Controller.IsActiveFocusNavTree(_));
  }
  OnFocusNavigationChanged(_, _, _) {
    this.BFromActiveNavTree(_, _) && this.UpdateForFocusedNode(_);
  }
  OnActiveNavTreeChanged(_) {
    if (!_.Controller.IsActiveFocusNavTree(_)) return;
    let _ = _.GetLastFocusedNode() ?? _.Root;
    _ != this.m_nodeForCurrentDescriptions && this.UpdateForFocusedNode(_);
  }
  UpdateForFocusedNode(_) {
    if (
      ((this.m_nodeForCurrentDescriptions = _),
      this.m_actionDescriptionChangedCallbackRegistrations.forEach((_) =>
        _.Unregister(),
      ),
      (this.m_actionDescriptionChangedCallbackRegistrations = []),
      _)
    ) {
      let _ = () =>
        this.SetActionDescriptionsFromMap(
          _.GetActiveActionDescriptions() ?? {},
        );
      _();
      for (let _ = _; _ != null; _ = _.Parent)
        this.m_actionDescriptionChangedCallbackRegistrations.push(
          _.ActionDescriptionChangedCallbackList.Register(() => _()),
        );
    } else
      this.SetActionDescriptionsFromMap({
        [_._]: null,
      });
  }
  GetActionDescription(_) {
    let _;
    return (
      this.m_boundActions.has(_)
        ? (_ = this.m_boundActions.get(_))
        : this.m_defaultActions.has(_) && (_ = this.m_defaultActions.get(_)),
      _.Log(`GetActionDescription`, _),
      _
    );
  }
  GetActionDescriptions() {
    let _ = Object.values(_).filter((_) => typeof _ == `number`),
      _ = {};
    for (let _ of _) _[_] = this.GetActionDescription(_);
    return _;
  }
  Notify() {
    let _ = this.GetActionDescriptions();
    this.m_globalActionsSubscriptions.forEach((_) => _(_));
  }
  IsDefaultAction(_) {
    return this.GetActionDescription(_) === this.m_defaultActions.get(_);
  }
  SetDefaultAction(_, _) {
    return (
      _ === void 0
        ? this.m_defaultActions.delete(_)
        : this.m_defaultActions.set(_, _),
      !this.m_boundActions.has(_)
    );
  }
  SetDefaultActionsFromMap(_) {
    let _ = !1;
    for (let _ in _) {
      let _ = parseInt(_);
      this.SetDefaultAction(_, _[_]) && (_ = !0);
    }
    _ && this.Notify();
  }
  ClearActions() {
    (_.Log(`ClearActionDescriptions`),
      this.m_boundActions.clear(),
      this.Notify());
  }
  SetActionsFromMap(_) {
    let _ = !1,
      _ = Array.from(this.m_boundActions.keys());
    for (let _ of _) _[_] === void 0 && this.SetAction(_, void 0) && (_ = !0);
    for (let _ in _) {
      let _ = parseInt(_);
      this.SetAction(_, _[_]) && (_ = !0);
    }
    _ && this.Notify();
  }
  SetActionDescriptionsFromMap(_) {
    let _ = {};
    for (let _ in _) {
      let _ = parseInt(_),
        _ = _(_);
      _[_] = _[_];
    }
    this.SetActionsFromMap(_);
  }
  SetAction(_, _) {
    if ((_.Log(`SetActionDescription`, _, _), _ === void 0)) {
      if (!this.m_boundActions.has(_)) return !1;
      this.m_boundActions.delete(_);
    } else {
      if (_(this.m_boundActions.get(_), _)) return !1;
      this.m_boundActions.set(_, _);
    }
    return !0;
  }
  SubscribeToActions(_) {
    return (
      this.m_globalActionsSubscriptions.push(_),
      _(this.GetActionDescriptions()),
      () => {
        let _ = this.m_globalActionsSubscriptions?.indexOf(_);
        this.m_globalActionsSubscriptions && _ != null && _ >= 0
          ? this.m_globalActionsSubscriptions.splice(_, 1)
          : console.error(
              `Unsubscribing an actions handler that was already unsubscribed`,
            );
      }
    );
  }
};
(_([_], _.prototype, `OnFocusNavigationChanged`, null),
  _([_], _.prototype, `OnActiveNavTreeChanged`, null),
  _([_], _.prototype, `SetActionDescriptionsFromMap`, null));
var _ = new URL(
  `../../images/webui/defaultappheader.png?v=valveisgoodatcaching`,
  import.meta.url,
).href;
