import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _, _, _ } from "./vodquery.js";
import { _, _ } from "./broadcastwatchstore.js";
import { _, _, _, _, _, _, _, _ } from "./emoticonbutton.js";
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
} from "./main.js";
import { _, _ } from "./textfilterstore.js";
import { _ } from "./broadcast_embeddable2.js";
import { _ } from "./partnereventslogin.js";
import { _ } from "./giveawaystore.js";
var _ = _(_()),
  _ = _(_()),
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unique_name: {
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
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unique_name: {
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
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            unique_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
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
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            headline: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            summary: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            avatar_hash: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            schedule: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            rules: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            panels: {
              _: 9,
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
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unique_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            owner_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            headline: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            summary: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            schedule: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            rules: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            panels: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            is_partnered: {
              _: 10,
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
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            image_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            image_index: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            image_width: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            image_height: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_size: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_extension: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            file_hash: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            undo: {
              _: 9,
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
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.replace_image_hash || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            replace_image_hash: {
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
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            image_types: {
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
      return `CSteamTV_GetBroadcastChannelImages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.images || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            images: {
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
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.image_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            image_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            image_path: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            image_index: {
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
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.links || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            links: {
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
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.link_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            link_index: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            link_description: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            left: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            top: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            width: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            height: {
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
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            links: {
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
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.link_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            link_index: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            link_description: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            left: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            top: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            width: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            height: {
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
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_live || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_live: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            is_disabled: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            appid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            viewers: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            views: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            broadcaster_steamid: {
              _: 6,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            thumbnail_url: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            followers: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subscribers: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            unique_name: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            broadcast_session_id: {
              _: 11,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            unique_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            appid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            viewers: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            views: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            thumbnail_url: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            followers: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            headline: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            avatar_url: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            broadcaster_steamid: {
              _: 11,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            subscribers: {
              _: 12,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            background_url: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            is_featured: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            is_disabled: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            is_live: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            language: {
              _: 17,
              _: _.readString,
              _: _.writeString,
            },
            reports: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_partnered: {
              _: 19,
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
      return `GetBroadcastChannelEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_GetFollowedChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            undo: {
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
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_followed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_followed: {
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
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_subscribed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_subscribed: {
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
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            reason: {
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
      return `CSteamTV_ReportBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_followed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_followed: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            is_subscribed: {
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
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null);
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
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            image: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            viewers: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            channels: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            release_date: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            developer: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            publisher: {
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
      return `CSteamTV_Game`;
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
            algorithm: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            count: {
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
      return `CSteamTV_GetGames_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_GetGames_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.algorithm || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            algorithm: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CSteamTV_GetChannels_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_GetChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcasters || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasters: {
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
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            rtmp_token: {
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
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.issuer_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            issuer_steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chatter_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_expires: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            permanent: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            name: {
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
      return `CSteamTV_ChatBan`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chatter_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            duration: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            permanent: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            undo: {
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
      return `CSteamTV_AddChatBan_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetChatBans_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            moderator_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            undo: {
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
      return `CSteamTV_AddChatModerator_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetChatModerators_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamTV_ChatModerator`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            word: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            undo: {
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
      return `CSteamTV_AddWordBan_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetWordBans_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_JoinChat_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            view_url_template: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            flair_group_ids: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `CSteamTV_JoinChat_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.term || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            term: {
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
      return `CSteamTV_Search_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_Search_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stream_live_email || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stream_live_email: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            stream_live_notification: {
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
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stream_live_email || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stream_live_email: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            stream_live_notification: {
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
      return `CSteamTV_SetSteamTVUserSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasts: {
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
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasts: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_SingleGame`;
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
            game_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            broadcast: {
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
      return `GameListEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.entries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entries: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasts: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasts: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast: {
              _: 1,
              _: _,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            chat_group_id: {
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
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast: {
              _: 1,
              _: _,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_Developer`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.title || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.template_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            template_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            takeover: {
              _: 2,
              _: _,
            },
            single_game: {
              _: 3,
              _: _,
            },
            game_list: {
              _: 4,
              _: _,
            },
            quick_explore: {
              _: 5,
              _: _,
            },
            conveyor_belt: {
              _: 6,
              _: _,
            },
            watch_party: {
              _: 7,
              _: _,
            },
            developer: {
              _: 8,
              _: _,
            },
            event: {
              _: 9,
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
      return `CSteamTV_HomePageContentRow`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rows || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rows: {
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
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.broadcast_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_clip_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            channel_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            app_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            broadcaster_steamid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            creator_steamid: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            video_description: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            live_time: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            length_ms: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            thumbnail_path: {
              _: 9,
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
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clips || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clips: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            thumbnail_host: {
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
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cheer_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cheer_type: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cheer_amount: {
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
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cheer_target_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            cheers: {
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
      return `CSteamTV_AppCheer_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.aggregation_delay_ms || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            aggregation_delay_ms: {
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
      return `CSteamTV_AppCheer_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.CreateBroadcastChannel#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.CreateBroadcastChannel = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelID#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelID = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.SetBroadcastChannelProfile#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetBroadcastChannelProfile = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelProfile#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelProfile = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.SetBroadcastChannelImage#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetBroadcastChannelImage = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelImages#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelImages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamTV.SetBroadcastChannelLinkRegions#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.SetBroadcastChannelLinkRegions = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelLinks#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelLinks = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamTV.GetBroadcastChannelBroadcasters#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetBroadcastChannelBroadcasters = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetFollowedChannels#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetFollowedChannels = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetSubscribedChannels#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetSubscribedChannels = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelStatus#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.FollowBroadcastChannel#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.FollowBroadcastChannel = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.SubscribeBroadcastChannel#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SubscribeBroadcastChannel = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelClips#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelClips = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.ReportBroadcastChannel#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.ReportBroadcastChannel = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamTV.GetBroadcastChannelInteraction#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetBroadcastChannelInteraction = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetGames#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetGames = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetChannels#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetChannels = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.AddChatBan#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.AddChatBan = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetChatBans#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetChatBans = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.AddChatModerator#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.AddChatModerator = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetChatModerators#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.GetChatModerators = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.AddWordBan#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.AddWordBan = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetWordBans#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetWordBans = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.JoinChat#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.JoinChat = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.Search#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.Search = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetSteamTVUserSettings#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetSteamTVUserSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.SetSteamTVUserSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetSteamTVUserSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetMyBroadcastChannels#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetMyBroadcastChannels = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetHomePageContents#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetHomePageContents = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.AppCheer#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.AppCheer = _;
})((_ ||= {}));
var _ = 4,
  _ = 500,
  _ = 10,
  _ = class _ {
    m_mapChats = new Map();
    m_cmInterface;
    SetCMInterface(_) {
      this.m_cmInterface = _;
    }
    GetCMInterface() {
      return this.m_cmInterface;
    }
    GetChat(_, _) {
      return this.m_mapChats.get(_) || this.m_mapChats.get(_);
    }
    GetOrCreateChat(_, _) {
      let _ = this.GetChat(_, _);
      return _ || ((_ = new _()), this.m_mapChats.set(_ || _, _)), _;
    }
    static s_Singleton;
    static Get() {
      return (_.s_Singleton ||= new _()), _.s_Singleton;
    }
    constructor() {
      _(this);
    }
  };
_([_], _.prototype, `m_mapChats`, void 0);
var _ = class {
  m_ulBroadcastChannelID = ``;
  m_ulChatID = ``;
  m_strFlairGroupID = ``;
  m_bAutoScroll = !0;
  m_ulBroadcastID = ``;
  m_ulBroadcastSteamID = ``;
  m_tsFirstRequest = null;
  m_nFromFirstRequestMS = 0;
  m_nNextChatTS = 0;
  m_cConsecutiveErrors = 0;
  m_nNudgeFactorMS = 0;
  m_nLastSleepMS = 0;
  m_bReconnecting = !1;
  m_strChatURL = ``;
  m_unInstanceID = Math.floor(Math.random() * 4294967296);
  m_strUserSteamID = ``;
  m_regexUserEmoticons;
  m_chatScheduledFunc;
  m_steamInterface;
  m_textFilterStore;
  m_bHasAddedWelcomeChat = !1;
  m_mapMutedUsers = {};
  m_mapChannelModeratorUsers = new Map();
  m_mapBroadcastModeratorUsers = new Map();
  m_nRateLimitSeconds = 0;
  m_bRateLimited = !1;
  m_rgChatMessages = [];
  m_rgAnnouncements = [];
  m_latestAnnouncement = null;
  constructor() {
    _(this), (this.m_steamInterface = this.CreateSteamInterface());
  }
  InitTextFilter() {
    this.m_textFilterStore = new _({
      BIsFriend: _(),
    });
    let _ = 0;
    _.steamid !== `` && (_ = new _(_.steamid).GetAccountID()),
      this.m_textFilterStore.Init(_, null, new _());
  }
  get TextFilterStore() {
    return this.m_textFilterStore;
  }
  GetBroadcastSteamID() {
    return this.m_ulBroadcastSteamID;
  }
  GetUserSteamID() {
    return this.m_strUserSteamID;
  }
  CreateSteamInterface() {
    return (
      (_() ?? _.Get().GetCMInterface()) ||
      _(new _(_.WEBAPI_BASE_URL, _.webapi_token))
    );
  }
  StartForSteamID(_, _) {
    (this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastSteamID = _),
      (this.m_ulBroadcastID = _),
      this.InitTextFilter(),
      this.RequestChatInfo();
  }
  StartForChannel(_) {
    (this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastChannelID = _),
      (this.m_strUserSteamID = _.steamid),
      this.InitTextFilter(),
      this.JoinChannelChat();
  }
  Stop() {
    this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
  }
  async SendMessage(_) {
    let _ = _.trim();
    if (_.length != 0)
      try {
        let _ = _.Init(_);
        _.SetBodyFields({
          chat_id: this.m_ulChatID,
          message: _,
          instance_id: this.m_unInstanceID.toString(),
        });
        let _ = await _.PostChatMessage(
            this.m_steamInterface.GetServiceTransport(),
            _,
          ),
          _ = {
            result: _.GetEResult(),
            cooldown_time_seconds: _.Body().cooldown_time_seconds(),
            in_game: _.Body().in_game(),
            persona_name: _.Body().persona_name(),
          };
        if (_ && _.result && _.result != 1) {
          let _ = ``;
          (_ =
            _.result == 17
              ? _(`#BroadcastChat_YouMuted`)
              : _.result == 84
                ? _(`#BroadcastChat_Cooldown`, _.cooldown_time_seconds ?? 0)
                : _(`#BroadcastChat_FailedToSendMsg`, _)),
            this.m_rgChatMessages.push({
              type: _.Error,
              msg: _,
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: _.in_game,
              persona_name: _.persona_name,
              steamid: ``,
            });
          return;
        }
        (this.m_nRateLimitSeconds ||= _.cooldown_time_seconds ?? 0),
          this.m_nRateLimitSeconds &&
            ((this.m_bRateLimited = !0),
            setTimeout(
              () => (this.m_bRateLimited = !1),
              this.m_nRateLimitSeconds * 1e3,
            ));
      } catch {
        this.m_rgChatMessages.push({
          type: _.Error,
          msg: _(`#BroadcastChat_FailedToSendMsg`, _),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async RequestChatInfo(_) {
    (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
    try {
      let _ = {
          steamid: this.m_ulBroadcastSteamID,
          broadcastid: this.m_ulBroadcastID,
          sessionid: _(),
          notoken: 1,
        },
        _ = await _.default.get(`${_.CHAT_BASE_URL}broadcast/getchatinfo`, {
          params: _,
          withCredentials: !0,
          cancelToken: _?.token,
        });
      (_ && _.token.reason) ||
        _(() => {
          let _ = _.data;
          (this.m_strChatURL = _.view_url_template ?? ``),
            (this.m_ulChatID = _.chat_id ?? ``),
            (this.m_strFlairGroupID = _.flair_group_ids?.[0] ?? ``),
            _.blocked && console.log(`User is blocked from chat`),
            _.steamid && (this.m_strUserSteamID = _.steamid),
            _.emoticons && this.SetOwnedEmoticons(_.emoticons),
            (this.m_bHasAddedWelcomeChat ||=
              (this.m_rgChatMessages.push({
                type: _.Notification,
                msg: _(`#BroadcastChat_DefaultMessage`),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: ``,
                steamid: ``,
              }),
              !0)),
            this.m_mapBroadcastModeratorUsers.clear(),
            _.moderators_steamid &&
              _.moderators_steamid.forEach((_) =>
                this.m_mapBroadcastModeratorUsers.set(_, !0),
              ),
            (this.m_chatScheduledFunc = new _()),
            this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
        });
    } catch (_) {
      console.error(_), console.log(`Failed to get chat info!`);
    }
  }
  async JoinChannelChat() {
    try {
      let _ = _.Init(_);
      _.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
      });
      let _ = await _.JoinChat(this.m_steamInterface.GetServiceTransport(), _),
        _ = _.Body().view_url_template(),
        _ = _.Body().chat_id();
      if (!_ || !_) {
        console.log(`Failed to join channel chat`);
        return;
      }
      (this.m_strChatURL = _),
        (this.m_ulChatID = _),
        (this.m_strFlairGroupID =
          _.Body().flair_group_ids() && _.Body().flair_group_ids()[0]),
        this.FetchChatModerators(),
        (this.m_rgChatMessages = []),
        this.m_rgChatMessages.push({
          type: _.Notification,
          msg: _(`#BroadcastChat_DefaultMessage`),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        }),
        (this.m_bHasAddedWelcomeChat = !0),
        (this.m_chatScheduledFunc = new _()),
        this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
    } catch (_) {
      console.error(_), console.log(`Failed to join chat!`);
    }
  }
  async FetchChatModerators() {
    let _ = _.Init(_);
    _.SetBodyFields({
      broadcast_channel_id: this.m_ulBroadcastChannelID,
    });
    let _ = (
        await _.GetChatModerators(
          this.m_steamInterface.GetServiceTransport(),
          _,
        )
      )
        .Body()
        .results(),
      _ = new Map();
    _.forEach((_) => {
      let _ = _.steamid();
      _ && _.set(_, !0);
    }),
      (this.m_mapChannelModeratorUsers = _);
  }
  ReplaceChatAnnouncementIfAny(_) {
    _.announcements?.length > 0
      ? ((this.m_rgAnnouncements = _.announcements.reverse()),
        (this.m_latestAnnouncement &&
          JSON.stringify(this.m_latestAnnouncement) ==
            JSON.stringify(
              this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
            )) ||
          (this.m_latestAnnouncement =
            this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
      : this.m_rgAnnouncements.length > 0 &&
        ((this.m_rgAnnouncements = []), (this.m_latestAnnouncement = null));
  }
  async RequestLoop() {
    let _ = {},
      _ = this.m_strChatURL.replace(`{0}`, this.m_nNextChatTS.toString());
    _ == this.m_strChatURL &&
      this.m_nNextChatTS > 0 &&
      (_._ = this.m_nNextChatTS);
    try {
      let _ = (
        await _.default.get(_, {
          params: _,
        })
      ).data;
      this.m_cConsecutiveErrors = 0;
      let _ = _.messages
        .map((_) => ({
          ..._,
          type: _.Chat,
          client_ts: Number(new Date()),
        }))
        .filter((_) => !this.IsUserMutedLocally(_.steamid));
      this.m_rgChatMessages.push(..._), this.ReplaceChatAnnouncementIfAny(_);
      let _ = this.m_bAutoScroll ? 150 : 300;
      if (
        (this.m_rgChatMessages.length > _ &&
          this.m_rgChatMessages.splice(0, this.m_rgChatMessages.length - _),
        _.muted)
      )
        for (let _ of _.muted) {
          let _ =
            _.muted == this.m_strUserSteamID
              ? _(`#BroadcastChat_YouMuted`, _.persona_name)
              : _(`#BroadcastChat_UserMuted`, _.persona_name);
          this.m_rgChatMessages.push({
            type: _.Notification,
            msg: _,
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      if (_.remove_msgs)
        for (let _ of _.remove_msgs) this.RemoveUserMessagesLocal(_.steamid);
      let _ = 0;
      if (
        this.m_tsFirstRequest == null ||
        this.m_nNextChatTS == 0 ||
        _.initial_delay
      ) {
        if (_.initial_delay === `undefined`) {
          console.log(
            `Need initial_delay to know when to request first chat message`,
          );
          return;
        }
        (this.m_tsFirstRequest = performance.now() + _.initial_delay),
          (this.m_nFromFirstRequestMS = 0),
          (this.m_nNextChatTS = _.next_request),
          (_ = _.initial_delay);
      } else {
        if (_.next_request < this.m_nNextChatTS) {
          console.log(`Next request in past`);
          return;
        }
        (this.m_nFromFirstRequestMS += _.next_request - this.m_nNextChatTS),
          (this.m_nNextChatTS = _.next_request),
          (_ =
            this.m_tsFirstRequest +
            this.m_nFromFirstRequestMS -
            performance.now() +
            this.m_nNudgeFactorMS);
      }
      (this.m_bReconnecting &&= !1),
        (this.m_nLastSleepMS = _),
        _ < 0 && (_ = 0),
        this.m_chatScheduledFunc?.Schedule(_, this.RequestLoop);
    } catch {
      if (
        (console.log(
          `Failed to get chat messages. Previous sleep set to: ` +
            this.m_nLastSleepMS +
            ` firstReq: ` +
            this.m_tsFirstRequest +
            ` firstFromRequest: ` +
            this.m_nFromFirstRequestMS +
            ` nudge: ` +
            this.m_nNudgeFactorMS,
        ),
        this.m_cConsecutiveErrors++,
        (this.m_nNudgeFactorMS += _),
        this.m_cConsecutiveErrors >= _)
      ) {
        if (this.m_tsFirstRequest == null) {
          this.m_rgChatMessages.push({
            type: _.Error,
            msg: _(`#BroadcastChat_UnableToJoinChat`),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
          return;
        }
        (this.m_cConsecutiveErrors = 0),
          (this.m_bReconnecting = !0),
          this.SyncChat();
      }
      this.m_chatScheduledFunc?.Schedule(_, this.RequestLoop);
    }
  }
  GetUserEmoticons() {
    return this.m_regexUserEmoticons;
  }
  SetOwnedEmoticons(_) {
    let _ = [];
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      _.length >= 2 && _[0] == `:`
        ? _.push(_.substr(1, _.length - 2))
        : _.push(_);
    }
    let _ = `:(` + _.join(`|`) + `):`;
    this.m_regexUserEmoticons = new RegExp(_, `g`);
  }
  async UpdateBroadcastChatModerator(_, _, _) {
    {
      let _ = new FormData();
      _.append(`broadcaststeamid`, this.m_ulBroadcastSteamID),
        _.append(`moderatorsteamid`, _),
        _.append(`bAdd`, _ ? `1` : `0`),
        _.append(`sessionid`, _());
      try {
        await _.default.post(
          `${_.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          _,
        ),
          this.m_mapBroadcastModeratorUsers.set(_, _);
        let _ = _(
          _
            ? `#BroadcastChat_AddedModerator`
            : `#BroadcastChat_RemovedModerator`,
          _,
        );
        this.m_rgChatMessages.push({
          type: _.Notification,
          msg: _,
        });
      } catch {
        let _ = _(
          _
            ? `#BroadcastChat_AddModeratorFailed`
            : `#BroadcastChat_RemoveModeratorFailed`,
          _,
        );
        this.m_rgChatMessages.push({
          type: _.Error,
          msg: _,
        });
      }
    }
  }
  async UpdateUserChatBan(_, _, _, _, _, _) {
    let _ = this.m_ulBroadcastSteamID,
      _ = this.m_strUserSteamID;
    if (this.m_ulBroadcastChannelID) {
      let _ = _.Init(_);
      _.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: _,
        duration: _ * 3600,
        permanent: _,
        undo: _,
      }),
        await _.AddChatBan(this.m_steamInterface.GetServiceTransport(), _);
    } else {
      let _ = new FormData();
      _.append(`broadcaststeamid`, _),
        _.append(`issuersteamid`, _),
        _.append(`chattersteamid`, _),
        _.append(`bantype`, _),
        _.append(`duration`, _.toString()),
        _.append(`perm`, _ ? `1` : `0`),
        _.append(`sessionid`, _());
      try {
        await _.default.post(
          `${_.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
          _,
        ),
          _ == 0
            ? delete this.m_mapMutedUsers[_]
            : (this.m_mapMutedUsers[_] = _);
      } catch {
        console.log(`Failed to update mute for ` + _);
      }
    }
  }
  async MuteUserForSession(_, _) {
    if (_ == this.m_strUserSteamID || this.m_ulBroadcastSteamID == _) return;
    let _ = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
    if (!this.m_mapMutedUsers[_]) {
      this.m_mapMutedUsers[_] = _;
      try {
        let _ = _.Init(_);
        _.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: _,
          muted: !0,
        }),
          await _.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            _,
          );
      } catch {
        _ &&
          (this.m_rgChatMessages.push({
            type: _.Error,
            msg: _(`#BroadcastChat_UserMuteFailed`, _),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          }),
          delete this.m_mapMutedUsers[_]);
      }
    }
    _ ||
      this.m_rgChatMessages.push({
        type: _.Notification,
        msg: _(`#BroadcastChat_UserMutedLocal`, _),
        client_ts: Number(new Date()),
        instance_id: this.m_unInstanceID,
        in_game: !1,
        persona_name: ``,
        steamid: ``,
      });
  }
  async UnmuteUserForSession(_, _) {
    if (_ != this.m_strUserSteamID) {
      if (
        (this.m_mapMutedUsers[_] && delete this.m_mapMutedUsers[_],
        this.m_ulBroadcastSteamID == this.m_strUserSteamID)
      )
        try {
          let _ = _.Init(_);
          _.SetBodyFields({
            chat_id: this.m_ulChatID,
            user_steamid: _,
            muted: !1,
          }),
            await _.MuteBroadcastChatUser(
              this.m_steamInterface.GetServiceTransport(),
              _,
            ),
            this.m_rgChatMessages.push({
              type: _.Notification,
              msg: _(`#BroadcastChat_UserUnmutedLocal`, _),
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: !1,
              persona_name: ``,
              steamid: ``,
            });
        } catch {
          this.m_rgChatMessages.push({
            type: _.Error,
            msg: _(`#BroadcastChat_UserUnmuteFailed`, _),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      else
        this.m_rgChatMessages.push({
          type: _.Notification,
          msg: _(`#BroadcastChat_UserUnmutedLocal`, _),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
    }
  }
  RemoveUserMessagesLocal(_) {
    this.m_rgChatMessages = this.m_rgChatMessages.filter(
      (_) => _.steamid !== _,
    );
  }
  async RemoveUserMessagesServer(_, _) {
    if (_ != this.m_strUserSteamID)
      try {
        let _ = _.Init(_);
        _.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: _,
        }),
          await _.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            _,
          );
      } catch {
        this.m_rgChatMessages.push({
          type: _.Error,
          msg: _(`#BroadcastChat_RemoveMessagesFailed`, _),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async UpdateChatMessageFlair(_) {
    let _ = _.Init(_);
    _.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${_}:`,
    }),
      await _.UpdateChatMessageFlair(
        this.m_steamInterface.GetServiceTransport(),
        _,
      );
  }
  IsUserMutedLocally(_) {
    return !!this.m_mapMutedUsers[_];
  }
  BIsUserBroadcastModerator(_) {
    return this.m_mapBroadcastModeratorUsers.has(_);
  }
  IsUserBroadcaster(_) {
    return _ === this.m_ulBroadcastSteamID;
  }
  SyncChat() {
    (this.m_tsFirstRequest = null),
      (this.m_nFromFirstRequestMS = 0),
      (this.m_nNextChatTS = 0),
      (this.m_rgChatMessages = []);
  }
};
_([_], _.prototype, `m_mapChannelModeratorUsers`, void 0),
  _([_], _.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  _([_], _.prototype, `m_nRateLimitSeconds`, void 0),
  _([_], _.prototype, `m_bRateLimited`, void 0),
  _([_], _.prototype, `m_rgChatMessages`, void 0),
  _([_], _.prototype, `m_latestAnnouncement`, void 0),
  _([_], _.prototype, `FetchChatModerators`, null),
  _([_], _.prototype, `RequestLoop`, null),
  _([_], _.prototype, `MuteUserForSession`, null);
var _ = `u-hyk5J5tIY-`,
  _ = `doqBDS-zTtg-`,
  _ = `DHv28C3kLqY-`,
  _ = _(),
  _ = () =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        className: _,
      }),
    }),
  _ = () =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        className: _,
      }),
    }),
  _ = `Utigx2dvTSs-`,
  _ = `IPiWi3ba7Oc-`,
  _ = `Tt1HS5eK4UQ-`,
  _ = `_2NN20ePjOoE-`,
  _ = `Q5sAYcjkGuw-`,
  _ = `JhPLxwFuvY8-`,
  _ = `-zOT4HlZFNc-`,
  _ = `NFc5gI--APM-`,
  _ = `gMm9gxp-VwY-`,
  _ = `_9JbCPa5peFE-`,
  _ = `jhZ68t8aO0U-`,
  _ = `cF6FbGIaOso-`,
  _ = `uWbWS4Xl7nU-`,
  _ = `_0bHpv5DDjVk-`,
  _ = `GJr1kPqad-w-`,
  _ = `_8whJ5F1f7no-`,
  _ = `ngi9yWTTH6Q-`,
  _ = `O0WGKKnt-b0-`,
  _ = `n4yzVjIUqg0-`,
  _ = `gB1ggcMqZ4U-`,
  _ = `h1DcT5FSiVw-`,
  _ = `aE9NemwHX3U-`,
  _ = `-LW3HYdhtwg-`,
  _ = `UfXKJfvB2aU-`,
  _ = `NjuVylscv-c-`,
  _ = `fQEvRYMgKZ8-`,
  _ = `Jz1BUHL6vfU-`,
  _ = `qUAIeS1LipI-`,
  _ = `hCW7GiiXdrk-`,
  _ = `gmY72gO6Jbk-`;
function _(_) {
  let { latestAnnouncement: _ } = _;
  return _?.type == `giveaway_draw`
    ? (0, _.jsx)(_, {
        latestWinner: _,
      })
    : null;
}
function _(_) {
  let {
      latestWinner: _,
      className: _,
      strActionButton: _,
      strActionClassname: _,
    } = _,
    _ = _.winners_info ?? [],
    _ = _.length > 0 ? _[0].accountid : 0,
    [_, _] = _.useState(_),
    _ = _(`${_.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`),
    _ = _(`${_.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`);
  _(!!_.giveaway_gid, `Giveaway draw announcement is missing its giveaway`, _);
  let _ = _(_.giveaway_gid),
    _ = _.bLoadingGiveawayInfo || _.closed ? null : _.seconds_until_drawing,
    _ = _ === _.accountid;
  _.useEffect(() => {
    _ != _ && setTimeout(() => _(_), 1500);
  }, [_, _]);
  let _ =
    _.length > 0 && _[0].persona
      ? _[0].persona
      : _(`#GA2022_UnknownPersonaName`);
  return (0, _.jsx)(_, {
    href: `https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022`,
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _({
        [_]: !0,
        [_]: _ === _,
      }),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _,
            src: _,
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ !== _ &&
              (0, _.jsx)(`div`, {
                className: _(`l-AUoGdZDTw-`),
                children: _(
                  `#GA2022_Congrats_Deck_Unknown`,
                  (0, _.jsx)(`br`, {}),
                ),
              }),
            _ === _ &&
              (0, _.jsx)(`div`, {
                className: _(`l-AUoGdZDTw-`, `-LW3HYdhtwg-`),
                children: _(
                  _
                    ? `#GA2022_Congrats_Deck_Me`
                    : `#GA2022_Congrats_Deck_OTher`,
                  _,
                  (0, _.jsx)(`br`, {}),
                ),
              }),
            !!(_ && _ > 0) &&
              (0, _.jsx)(`div`, {
                className: `B7DECy1bqvs-`,
                children: _(`#GA2022_Congrats_NextDraw`, _),
              }),
          ],
        }),
        (0, _.jsx)(`img`, {
          className: _,
          src: _,
        }),
        !!_ &&
          (0, _.jsx)(`div`, {
            className: _,
            children: _ ? _(`#GA2022_YouWonNextSteps`) : _,
          }),
      ],
    }),
  });
}
function _(_, _) {
  let [_, _] = _(() => [
      _?.steamid,
      _?.steamid ? _.GetBroadcast(_.steamid)?.m_ulBroadcastID : void 0,
    ]),
    [_, _] = _.useState(null);
  _.useEffect(() => {
    let _ = null;
    return (
      _ &&
        ((_ = _.Get().GetOrCreateChat(_ ?? ``, _)),
        _.StartForSteamID(_, _ ?? ``),
        _(_)),
      () => {
        _ && (_.Stop(), _(null));
      }
    );
  }, [_, _]);
  let _ = _(() => _?.m_latestAnnouncement || null);
  if (_?.type == `giveaway_draw`) {
    let _ = _;
    if (_.giveaway_gid == _) return _;
  }
  return null;
}
function _(_) {
  let { gidGiveaway: _, stream: _ } = _,
    _ = _(_, _),
    _ = _(`GameAwardDrop2022`),
    _ = null,
    _ = _;
  return (
    _.logged_in
      ? _?.registered
        ? ((_ = _(`#GA2022_AlreadyRegistered`)), (_ = _))
        : (_ = _(`#GA2022_RegisterToWin`))
      : (_ = _(`#GA2022_RegisterLoginToWin`)),
    _
      ? (0, _.jsx)(_, {
          latestWinner: _,
          className: _,
          strActionButton: _,
          strActionClassname: _,
        })
      : null
  );
}
var _ = RegExp(`ː([^ː]*)ː`, `g`),
  _ = RegExp(
    `^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)`,
    `i`,
  );
function _(_, _, _) {
  return _
    ? `presenter`
    : _.GetBroadcastSteamID() === _
      ? `broadcaster`
      : _.BIsUserBroadcastModerator(_)
        ? `moderator`
        : ``;
}
var _ = (_) => {
    let { userType: _, msg: _, presenterInfo: _ } = _;
    if (_ === `presenter` && _)
      return (0, _.jsx)(`span`, {
        children: (0, _.jsx)(_, {
          name: _.name ?? ``,
          title: _.title,
          photo: _.photo,
          company: _.company ?? ``,
          bioString: _.bio,
          children: (0, _.jsx)(`a`, {
            className: _(_, void 0),
            href: _.COMMUNITY_BASE_URL + `profiles/` + _.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: _.persona_name,
          }),
        }),
      });
    {
      let _;
      return (
        (_ === `broadcaster` || _ === `moderator`) && (_ = void 0),
        (0, _.jsx)(`span`, {
          children: (0, _.jsx)(`a`, {
            className: _(_, _),
            href: _.COMMUNITY_BASE_URL + `profiles/` + _.steamid,
            "data-miniprofile": `s` + _.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: _.persona_name,
          }),
        })
      );
    }
  },
  _ = (_) => {
    switch (_.userType) {
      case `presenter`:
        return (0, _.jsx)(_, {
          toolTipContent: _(`#BroadcastChat_Role_Presenter_ttip`),
          children: (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        });
      case `moderator`:
        return (0, _.jsx)(_, {
          toolTipContent: _(`#BroadcastChat_Role_Moderatorr_ttip`),
          children: (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        });
      case `broadcaster`:
        return (0, _.jsx)(_, {
          toolTipContent: _(`#BroadcastChat_Role_Broadcaster_ttip`),
          children: (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        });
      default:
        return null;
    }
  },
  _ = class extends _.Component {
    constructor(_) {
      super(_), _(this);
    }
    m_chat = void 0;
    messagesContainer = _.createRef();
    componentDidMount() {
      this.StartChat();
    }
    componentDidUpdate(_) {
      this.m_chat && this.m_chat.m_bAutoScroll && this.ScrollToNewestMessages(),
        (this.props.steamID !== _.steamID ||
          this.props.broadcastID !== _.broadcastID ||
          this.props.broadcastChannelID !== _.broadcastChannelID) &&
          this.StartChat();
    }
    componentWillUnmount() {
      this.m_chat && this.m_chat.Stop();
    }
    StartChat() {
      this.m_chat && this.m_chat.Stop();
      let _ = _.Get().GetOrCreateChat(
        this.props.broadcastChannelID ?? ``,
        this.props.steamID ?? ``,
      );
      if (((this.m_chat = _), this.props.broadcastChannelID))
        _.StartForChannel(this.props.broadcastChannelID);
      else if (
        this.props.steamID &&
        this.props.steamID &&
        (this.props.broadcastID || this.props.globalChat)
      ) {
        let _ = this.props.broadcastID || `0`;
        _.StartForSteamID(this.props.steamID, _), this.ScrollToNewestMessages();
      }
    }
    IsTrustedDomain(_) {
      return !!_.match(_);
    }
    AddLinksEmoticons(_, _) {
      _ && this.m_chat?.GetUserEmoticons();
      let _ = _.split(_),
        _ = [];
      for (let _ = 0; _ < _.length; _ += 1)
        _ % 2 == 1
          ? _.push(
              (0, _.jsx)(
                _,
                {
                  emoticon: _[_],
                  large: !0,
                },
                _,
              ),
            )
          : _.push(_[_]);
      return _;
    }
    HandleScroll(_) {
      let _ = this.props.bInvertLayout
        ? _.currentTarget.scrollTop < 6
        : _.currentTarget.scrollTop + _.currentTarget.clientHeight >=
          _.currentTarget.scrollHeight - 6;
      this.m_chat && (this.m_chat.m_bAutoScroll = _);
    }
    ScrollToNewestMessages() {
      this.messagesContainer &&
        this.messagesContainer.current &&
        (this.messagesContainer.current.scrollTop = this.props.bInvertLayout
          ? 0
          : this.messagesContainer.current.scrollHeight);
    }
    OnContextMenu(_, _) {
      let _ = this.m_chat;
      if (!_ || _.type !== _.Chat) return null;
      let _ = [],
        _ = _.IsUserBroadcaster(_.GetUserSteamID()),
        _ = _.BIsUserBroadcastModerator(_.GetUserSteamID());
      return (
        (_ && _.is_support) || _ || _
          ? _.push(
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.RemoveUserMessagesServer(_.steamid, _.persona_name),
                  children: _(`#BroadcastChat_RemoveMessages`),
                },
                `remove`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(_.steamid, 1, 12, !1, _.persona_name),
                  children: _(`#BroadcastChat_half_Mute`),
                },
                `updatebanh`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(_.steamid, 1, 24, !1, _.persona_name),
                  children: _(`#BroadcastChat_day_Mute`),
                },
                `updateband`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(_.steamid, 1, 168, !1, _.persona_name),
                  children: _(`#BroadcastChat_week_Mute`),
                },
                `updatebanw`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(_.steamid, 1, 0, !0, _.persona_name),
                  children: _(`#BroadcastChat_perm_Mute`),
                },
                `updatebanp`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(
                      _.steamid,
                      0,
                      0,
                      !1,
                      _.persona_name,
                      !0,
                    ),
                  children: _(`#BroadcastChat_Unmute`),
                },
                `removeban`,
              ),
            )
          : _.IsUserMutedLocally(_.steamid)
            ? _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: () =>
                      _.UnmuteUserForSession(_.steamid, _.persona_name),
                    children: _(`#BroadcastChat_UnmuteLocal`),
                  },
                  `unmuteuser`,
                ),
              )
            : _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: () =>
                      _.MuteUserForSession(_.steamid, _.persona_name),
                    children: _(`#BroadcastChat_MuteLocal`),
                  },
                  `muteuser`,
                ),
              ),
        ((_ && _.is_support) || _.IsUserBroadcaster(_.GetUserSteamID())) &&
          _.steamid &&
          (_.BIsUserBroadcastModerator(_.steamid)
            ? _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: () =>
                      _.UpdateBroadcastChatModerator(
                        _.steamid,
                        !1,
                        _.persona_name,
                      ),
                    children: _(`#BroadcastChat_Remove_Moderator`),
                  },
                  `removemod`,
                ),
              )
            : _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: () =>
                      _.UpdateBroadcastChatModerator(
                        _.steamid,
                        !0,
                        _.persona_name,
                      ),
                    children: _(`#BroadcastChat_Add_Moderator`),
                  },
                  `addmod`,
                ),
              )),
        _.length
          ? _(
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      _(`#BroadcastChat_User`),
                      (0, _.jsx)(`br`, {}),
                      (0, _.jsx)(`span`, {
                        className: _,
                        children: _.persona_name,
                      }),
                    ],
                  }),
                  _,
                ],
              }),
              _,
            )
          : null
      );
    }
    GetTypeClassName(_) {
      return _.type === _.Notification ? _ : _.type === _.Error ? _ : _;
    }
    FormatMessage(_, _) {
      if (_.type === _.Chat) {
        let _ = _ ? _.FilterText(_.steamid, _.msg) : _.msg;
        return this.AddLinksEmoticons(_, !1);
      }
      return _.msg;
    }
    RenderUserChatLine(_, _, _, _) {
      let _ = _?.get(_.steamid),
        _ = _.type === _.Chat ? _(_.steamid, _, _) : ``;
      return (0, _.jsxs)(
        `div`,
        {
          className: this.GetTypeClassName(_),
          onContextMenu: (_) => this.OnContextMenu(_, _),
          children: [
            _.type === _.Chat &&
              (0, _.jsx)(_, {
                userType: _,
              }),
            _.flair &&
              (0, _.jsx)(`span`, {
                className: `xDmEH9mDo3o-`,
                children: this.AddLinksEmoticons(_.flair, !1),
              }),
            _.type === _.Chat &&
              (0, _.jsx)(_, {
                userType: _,
                msg: _,
                presenterInfo: _,
              }),
            _.type === _.Chat &&
              _.GetBroadcastSteamID() === _.steamid &&
              (0, _.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${_(`#BroadcastChat_Broadcaster`)})`,
              }),
            _.type === _.Chat &&
              _.m_mapChannelModeratorUsers.get(_.steamid) &&
              (0, _.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${_(`#BroadcastChat_Moderator`)})`,
              }),
            (0, _.jsxs)(`span`, {
              className: `${_} ${this.AddLinksEmoticons(_.msg, !1).filter((_) => _ && typeof _ == `string`).length ? `` : _}`,
              children: [
                _.type === _.Chat ? ` : ` : ``,
                this.FormatMessage(_, _.TextFilterStore),
              ],
            }),
          ],
        },
        _.instance_id + `_` + _.client_ts + `_` + _,
      );
    }
    render() {
      let {
          hidden: _,
          bPartnerMemberOnlyChat: _,
          bInvertLayout: _,
          onSignIn: _,
        } = this.props,
        _ = this.m_chat,
        _ = _ ? _.m_rgChatMessages : [],
        _ = _ ? _.reverse() : _,
        _ = this.m_chat
          ? _.GetPresenterMapForBroadcasterSteamID(
              this.m_chat.GetBroadcastSteamID(),
            )
          : void 0,
        _ = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
      return (0, _.jsxs)(`div`, {
        className: _(_, `ChatPanel`),
        style: _
          ? {
              display: `none`,
            }
          : void 0,
        children: [
          (0, _.jsx)(_, {
            latestAnnouncement: _,
          }),
          _ &&
            !!this.m_chat &&
            (0, _.jsx)(_, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: _,
              onSignIn: _,
            }),
          (0, _.jsx)(_, {}),
          (0, _.jsx)(`div`, {
            className: _(`${_} ${_}`, `ChatMessages`),
            onScroll: this.HandleScroll,
            ref: this.messagesContainer,
            children: _ && _.map((_, _) => this.RenderUserChatLine(_, _, _, _)),
          }),
          (0, _.jsx)(_, {}),
          !_ &&
            !!this.m_chat &&
            (0, _.jsx)(_, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: _,
              onSignIn: _,
            }),
        ],
      });
    }
  };
_([_], _.prototype, `m_chat`, void 0),
  _([_], _.prototype, `StartChat`, null),
  _([_], _.prototype, `HandleScroll`, null),
  _([_], _.prototype, `OnContextMenu`, null),
  _([_], _.prototype, `RenderUserChatLine`, null),
  (_ = _([_], _));
function _(_) {
  let {
    oChat: _,
    emoticonStore: _,
    bPartnerMemberOnlyChat: _,
    onSignIn: _,
  } = _;
  return _ && (!_?.logged_in || !_?.is_partner_member)
    ? (0, _.jsx)(_, {})
    : _?.logged_in
      ? (0, _.jsx)(_, {
          oChat: _,
          emoticonStore: _,
        })
      : _
        ? (0, _.jsx)(_, {
            onSignIn: _,
          })
        : null;
}
function _(_) {
  let { oChat: _, emoticonStore: _ } = _,
    [_, _] = _.useState(``),
    _ = _.useRef(null),
    _ = _(() => _.m_bRateLimited),
    _ = _.useCallback(
      (_) => {
        !_.shiftKey &&
          _.charCode === 13 &&
          (_.m_bRateLimited || (_.SendMessage(_), _(``)), _.preventDefault());
      },
      [_, _],
    ),
    _ = _.useCallback(
      (_, _ = !1) => {
        _(_ + `\u02D0${_}\u02D0`), _?.current && _.current.focus();
      },
      [_, _],
    ),
    _ = () => {
      _.SendMessage(_), _(``);
    },
    _ = _ || _.trim().length == 0,
    _ = _(_, _.length == 0 && `_4X5-n9MaD8g-`);
  return (0, _.jsx)(`div`, {
    className: _(void 0, `ChatEntryCtn`),
    children: (0, _.jsxs)(`div`, {
      className: _(_, `ChatEntry`),
      children: [
        (0, _.jsxs)(`form`, {
          className: `${_}`,
          children: [
            (0, _.jsx)(`textarea`, {
              className: _,
              placeholder: _(`#BroadcastChat_EnterResponse`),
              onKeyPress: _,
              onChange: (_) => _(_.target.value),
              value: _,
              ref: _,
            }),
            _ &&
              (0, _.jsx)(_, {
                nSeconds: _.m_nRateLimitSeconds,
                bRateLimited: _.m_bRateLimited,
              }),
            (0, _.jsx)(`button`, {
              className: _,
              title: _(`#ChatEntryButton_Submit`),
              disabled: _,
              onClick: _,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          style: {
            height: `50px`,
          },
          className: `${_}`,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                disabled: !1,
                OnEmoticonSelected: _,
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: _,
              }),
              (0, _.jsx)(_, {
                ..._,
                textInputRef: _,
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { oChat: _, emoticonStore: _, textInputRef: _ } = _;
  return _.m_strFlairGroupID &&
    _.flair_list &&
    _.GetFlairListByGroupID(_.m_strFlairGroupID)?.length
    ? (0, _.jsx)(_, {
        disabled: !1,
        OnEmoticonSelected: (_) => {
          _.UpdateChatMessageFlair(_), _?.current && _.current.focus();
        },
        rtLastAckedNewEmoticons: Number.MAX_VALUE,
        emoticonStore: _,
        strFlairGroupID: _.m_strFlairGroupID,
        title: _(`#ChatEntryButton_Flair`),
        buttonIcon: (0, _.jsx)(_, {}),
      })
    : null;
}
var _ = class extends _.Component {
  render() {
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: `${_} ${_}`,
            style: {
              animationDuration: `${this.props.nSeconds || 0}s`,
            },
          }),
          (0, _.jsx)(`div`, {
            className: `${_} ${_}`,
            style: {
              animationDuration: `${this.props.nSeconds || 0}s`,
            },
          }),
          (0, _.jsx)(`div`, {
            className: _,
            style: {
              animationDuration: `${this.props.nSeconds || 0}s`,
            },
          }),
        ],
      }),
    });
  }
};
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      onClick: _.onSignIn,
      className: _(_),
      children: _(`#BroadcastChat_Login`),
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#Broadcast_PartnerChat_Login`),
      }),
      !_.logged_in &&
        !_.IN_STEAMUI &&
        (0, _.jsx)(_, {
          onClick: _,
          className: _(`h1DcT5FSiVw-`),
          children: _(`#Login_SignIn`),
        }),
    ],
  });
}
var _ = `58px`,
  _ = `58px`,
  _ = `rYnVBBDJIz4-`,
  _ = `dsbI18mZ-Ps-`,
  _ = `dQY8CyT7Y5Y-`,
  _ = `f0G28hbeNYE-`,
  _ = `EGznwOBrytk-`,
  _ = `wMy1ewxYK3I-`,
  _ = `iLleweU-ckI-`,
  _ = `WdbOLmmaXso-`,
  _ = `ov8XKFWsMMc-`,
  _ = `KcqUD5hkzyk-`,
  _ = `ECJWFclMDpk-`,
  _ = `Ku3ORKocBrQ-`,
  _ = `KkgW9CzRVMI-`,
  _ = `SObNBjtfgbU-`,
  _ = `-d8EQqzPfNs-`,
  _ = `_27mwemkqVww-`,
  _ = `FS3-jxto3Z8-`,
  _ = `twoyTg-z2n4-`,
  _ = `_887-MlrXKDQ-`,
  _ = `ZfSk6AxA-Tw-`,
  _ = `Yb1KTWt-6pE-`,
  _ = `HbhpxnAX2Kk-`,
  _ = `vePf8-fcS4g-`,
  _ = `QP7p0y7iNjE-`,
  _ = `xpdX0ycPNx0-`,
  _ = `QGqVyFFAFtg-`,
  _ = `qwFxl5tJlG0-`,
  _ = `-PTMMcy5uF4-`,
  _ = `mYXN-do7NYQ-`,
  _ = `rIfaYmVdzDA-`,
  _ = `hgFSY87Dsxg-`,
  _ = `u-lLy1wH1Is-`,
  _ = `pllfTQu8jag-`,
  _ = `GsIDuGodBUQ-`,
  _ = `_2IUJG6CdnFA-`,
  _ = `Jvoz-8Cocp4-`,
  _ = `zuLP0piEwuA-`,
  _ = `eR0CdHz8x6I-`,
  _ = `GsHUhqcJfJQ-`,
  _ = `_77LbK-akGBo-`,
  _ = `iADCJfccVl8-`,
  _ = `_6NUM7GMUXrI-`,
  _ = `eWHilAZFWEA-`,
  _ = `N8lPKh2spWY-`,
  _ = `VEghDDjerCc-`,
  _ = `lOf3hlirldE-`,
  _ = `HEBZJhZ641A-`,
  _ = `UHu5FWxee0A-`,
  _ = `yzeJT1XucOE-`;
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
};
