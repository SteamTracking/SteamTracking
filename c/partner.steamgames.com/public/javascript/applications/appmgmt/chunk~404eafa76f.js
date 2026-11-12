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
} from "./chunk~de7f2df91c.js";
import { _, _, _, _, _, _, _ } from "./chunk~25a6634263.js";
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
} from "./chunk~1fa4b8f2ff.js";
import { _, _, _ } from "./chunk~0a99e05c44.js";
import { _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~9a06851bec.js";
import { _, _ } from "./chunk~44f252525d.js";
import { _ } from "./chunk~7b8a87bd30.js";
import { _ } from "./chunk~e70aabe4d7.js";
import "./chunk~428594b857.js";
import { _ } from "./chunk~b390ee0f78.js";
import { _, _, _ } from "./chunk~eee3bbd4cd.js";
import { _, _, _, _ } from "./chunk~2e8feda0b1.js";
import { _ } from "./chunk~fc8a9e4879.js";
import { _ } from "./chunk~9d71b14b50.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _, _, _, _, _, _ } from "./chunk~cbbb6ae37c.js";
import "./chunk~8681f5c764.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~c55709d290.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~8ceeb46076.js";
import { _ } from "./chunk~0111fcd096.js";
import { _, _ } from "./chunk~2f8c67b4de.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk~05a38bc848.js";
import { _ } from "./chunk~2bee5a7d08.js";
import "./chunk~a6b9ae1345.js";
import { _ } from "./chunk~4571d27d07.js";
import { _ } from "./chunk~967b42dac9.js";
import { _, _, _, _, _ } from "./chunk~3f4314f3b4.js";
import { _ } from "./chunk~7b4b9eb713.js";
import { _, _, _ } from "./chunk~70c16cc80c.js";
import { _, _ } from "./chunk~4d16ce5d1a.js";
import { _, _ } from "./chunk~3ee5188744.js";
import { _ } from "./chunk~5243628dd6.js";
import { _, _, _, _, _, _ } from "./chunk~8628c845f2.js";
import { _, _, _, _, _, _ } from "./chunk~f25232ab1e.js";
import { _ } from "./chunk~a7c5e71e12.js";
import { _, _, _ } from "./chunk~56e6a40e9e.js";
import { _ } from "./chunk~14243866ee.js";
var _ = 1004,
  _ = 1005,
  _ = 1006,
  _ = _(_()),
  _ = _(_()),
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
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
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.replace_image_hash || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.images || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.image_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.links || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.link_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.link_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
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
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_live || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `GetBroadcastChannelEntry`;
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
      return `CSteamTV_GetFollowedChannels_Request`;
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
      return `CSteamTV_GetFollowedChannels_Response`;
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
      return `CSteamTV_GetSubscribedChannels_Request`;
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
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_followed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_subscribed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Request`;
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
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_followed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Game`;
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Request`;
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
      return `CSteamTV_GetGames_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.algorithm || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Request`;
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
      return `CSteamTV_GetChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasters || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.issuer_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatBan`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Request`;
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
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Request`;
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
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Request`;
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
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Request`;
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
      return `CSteamTV_ChatModerator`;
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
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Request`;
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
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Request`;
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
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.term || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Request`;
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
      return `CSteamTV_Search_Response`;
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
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stream_live_email || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stream_live_email || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Request`;
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
      return `CSteamTV_SetSteamTVUserSettings_Response`;
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
      return `CSteamTV_GetMyBroadcastChannels_Request`;
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
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_SingleGame`;
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `GameListEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.entries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Developer`;
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
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.template_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageContentRow`;
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
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rows || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clips || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cheer_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.aggregation_delay_ms || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
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
var _ = _(_()),
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
            type: {
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
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
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
            type: {
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
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.dictionary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            dictionary: {
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
      return `CSteamEngine_GetTextFilterDictionary_Response`;
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
            type: {
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
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.pid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            pid: {
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
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
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
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            should_handle: {
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
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.search_term || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            search_term: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            max_results: {
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
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
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
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Response`;
    }
  },
  _;
(function (_) {
  _.UpdateTextFilterDictionaryHandler = {
    name: `SteamEngine.UpdateTextFilterDictionary#1`,
    request: _,
  };
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.UpdateTextFilterDictionaryHandler,
            _,
          )
    );
  }
  _.RegisterForUpdateTextFilterDictionary = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.UpdateTextFilterDictionary = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  ((_.SendMsgUpdateTextFilterDictionary = _),
    (_.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: _,
      response: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetTextFilterDictionary = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((_.SendMsgGetTextFilterDictionary = _),
    (_.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyTextFilterDictionaryChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTextFilterDictionaryChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyTextFilterDictionaryChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  ((_.SendMsgNotifyTextFilterDictionaryChanged = _),
    (_.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: _,
      response: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`SteamEngine.GetGameIDForPID#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetGameIDForPID = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`SteamEngine.GetGameIDForPID#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((_.SendMsgGetGameIDForPID = _),
    (_.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.SetOverlayEscapeKeyHandlingHandler,
            _,
          )
    );
  }
  _.RegisterForSetOverlayEscapeKeyHandling = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SetOverlayEscapeKeyHandling = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  ((_.SendMsgSetOverlayEscapeKeyHandling = _),
    (_.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: _,
      response: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SearchAppDataCacheByStoreKeywords = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SendMsgSearchAppDataCacheByStoreKeywords = _;
})((_ ||= {}));
var _ = class {
  constructor() {
    _(this);
  }
  m_mapCallbacks = new Map();
  m_rgRegisteredEMsgs = [];
  m_mapServiceMethodHandlers = new Map();
  m_rgRegisteredServiceMethodHandlers = [];
  DispatchMsgToHandlers(_, _) {
    let _ = _.GetEMsg();
    if (_ == 146) {
      let _ = _.Hdr().target_job_name();
      if (_) {
        let _ = this.m_mapServiceMethodHandlers.get(_);
        if (_) {
          this.DEBUG_LogMessageDispatch(_, _[0]);
          for (let _ of _)
            try {
              _.invoke(_, _);
            } catch (_) {
              _ instanceof Error
                ? _().ReportError(_)
                : console.error(
                    `MessageHandlers failed to dispatch message to handler (${_}): `,
                    _,
                  );
            }
          return !0;
        }
      }
    } else {
      let _ = this.m_mapCallbacks.get(_);
      if (_) {
        this.DEBUG_LogMessageDispatch(_, _[0]);
        for (let _ of _)
          try {
            _.invoke(_);
          } catch (_) {
            _ instanceof Error
              ? _().ReportError(_)
              : console.error(
                  `MessageHandlers failed to dispatch message to handler: `,
                  _,
                );
          }
        return !0;
      }
    }
    return !1;
  }
  DEBUG_LogMessageDispatch(_, _) {}
  get emsg_list() {
    return this.m_rgRegisteredEMsgs;
  }
  get servicemethod_list() {
    return this.m_rgRegisteredServiceMethodHandlers;
  }
  AddCallback(_, _, _) {
    let _ = this.m_mapCallbacks.get(_);
    return (
      _ ||
        ((_ = []),
        this.m_mapCallbacks.set(_, _),
        this.m_rgRegisteredEMsgs.push(_)),
      _.push({
        invoke: _,
        msgClass: _,
      }),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapCallbacks.get(_);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  AddServiceMethodHandler(_, _) {
    let _ = (_, _) => {
      let _ = _.InitFromMsg(_.request, _),
        _ = _.Init(_.response, 147),
        _ = _(_, _),
        _ = (_) => {
          (_.Hdr().set_eresult(_), _(_));
        };
      _ instanceof Promise
        ? _.then(_).catch(() => {
            _(2);
          })
        : _(_);
    };
    return (
      this.m_mapServiceMethodHandlers.has(_.name)
        ? console.error(`Duplicate registration for method ` + _.name)
        : (this.m_mapServiceMethodHandlers.set(_.name, [
            {
              invoke: _,
              msgClass: _.request,
            },
          ]),
          this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapServiceMethodHandlers.get(_.name);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  AddServiceNotificationHandler(_, _) {
    let _ = (_, _) => {
        _(_.InitFromMsg(_.request, _));
      },
      _ = this.m_mapServiceMethodHandlers.get(_.name);
    return (
      _ ||
        ((_ = []),
        this.m_mapServiceMethodHandlers.set(_.name, _),
        this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
      _.push({
        invoke: _,
        msgClass: _.request,
      }),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapServiceMethodHandlers.get(_.name);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  RegisterBaseEMessageHandler(_, _) {
    return this.AddCallback(_, void 0, _);
  }
  RegisterEMessageHandler(_, _, _) {
    return this.AddCallback(_, _, (_) => {
      _(_.InitFromMsg(_, _));
    });
  }
  RegisterEMessageAction(_, _, _) {
    return this.AddCallback(_, _, (_) => {
      _(() => {
        _(_.InitFromMsg(_, _));
      });
    });
  }
  RegisterServiceNotificationHandler(_, _) {
    return this.AddServiceNotificationHandler(_, _);
  }
  RegisterServiceNotificationHandlerAction(_, _) {
    return this.AddServiceNotificationHandler(_, (_) => {
      let _;
      return (
        _(() => {
          _ = _(_);
        }),
        _
      );
    });
  }
  RegisterServiceMethodHandler(_, _) {
    return this.AddServiceMethodHandler(_, _);
  }
  RegisterServiceMethodHandlerAction(_, _) {
    return this.AddServiceMethodHandler(_, (_, _) => {
      let _;
      return (
        _(() => {
          _ = _(_, _);
        }),
        _
      );
    });
  }
};
(_([_], _.prototype, `m_rgRegisteredEMsgs`, void 0),
  _([_], _.prototype, `m_rgRegisteredServiceMethodHandlers`, void 0));
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.auth_key || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            auth_key: {
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
      return `CTransportAuth_Authenticate_Request`;
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
      return `CTransportAuth_Authenticate_Response`;
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
      return `CTransportAuth_StartShutdown_Notification`;
    }
  },
  _;
(function (_) {
  _.AuthenticateHandler = {
    name: `TransportAuth.Authenticate#1`,
    request: _,
    response: _,
  };
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`TransportAuth.Authenticate#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.Authenticate = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`TransportAuth.Authenticate#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  ((_.SendMsgAuthenticate = _),
    (_.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyStartShutdownHandler, _)
    );
  }
  _.RegisterForNotifyStartShutdown = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`TransportAuth.NotifyStartShutdown#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.NotifyStartShutdown = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`TransportAuth.NotifyStartShutdown#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.SendMsgNotifyStartShutdown = _;
})((_ ||= {}));
var _ = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new _(`CWebSocketConnection`, () => this.m_sName);
  m_bDisconnectRequested = !1;
  m_bConnecting = !1;
  m_fnOnMessageHandler;
  m_fnOnCloseHandler;
  m_fnOnReconnectStartHandler;
  m_fnOnReconnectFinishHandler;
  m_nConnectAttemptsMax;
  m_nConnectAttemptTimeoutMs;
  m_bReconnectOnFailure;
  m_nReconnectAttemptTimeoutMs;
  m_nReconnectAttemptsMax;
  constructor(_, _) {
    ((this.m_sName = _),
      (this.m_fnOnMessageHandler = _.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = _.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        _.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        _.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = _.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = _.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = _.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = _.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs =
        _.nReconnectAttemptTimeoutMs ?? 1e4));
  }
  get name() {
    return this.m_sName;
  }
  async Connect(_) {
    return (
      (this.m_sURL = _),
      this.ConnectWithRetry(
        this.m_sURL,
        this.m_nConnectAttemptsMax,
        this.m_nConnectAttemptTimeoutMs,
      )
    );
  }
  async Reconnect() {
    return this.ConnectWithRetry(
      this.m_sURL,
      this.m_nReconnectAttemptsMax,
      this.m_nReconnectAttemptTimeoutMs,
    );
  }
  GetInterAttemptBackoffMs(_) {
    return _(_, 1, 5) * 1e3;
  }
  async ConnectWithRetry(_, _, _) {
    this.m_bConnecting = !0;
    let _ = 0;
    do {
      try {
        let _ = await this.ConnectToSocket(_, _);
        if (_.result == 1) return ((this.m_bConnecting = !1), _);
        this.Log.Warning(`connect attempt failed: ${_.result} - ${_.message}`);
      } catch (_) {
        this.Log.Warning(`connect attempt failed: exception ${_.name} - ${_}`);
      }
      let _ = this.GetInterAttemptBackoffMs(_);
      (this.Log.Info(`connect retry: attempt:${_}/${_} backoff:${_}`),
        await new Promise((_) => setTimeout(_, _)),
        (this.m_socket = null),
        (_ += 1));
    } while (_ < _);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      {
        result: 2,
        message: `not ready, exceeded retry count`,
      }
    );
  }
  Disconnect() {
    (this.Log.Info(`disconnect requested`),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close());
  }
  PrepareForShutdown() {
    (this.Log.Info(`shutdown pending`), (this.m_bDisconnectRequested = !0));
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    (this.Log.Info(`start reconnect`),
      (this.m_socket = null),
      this.m_fnOnReconnectStartHandler({
        connection: this,
      }),
      (await this.Reconnect()).result == 1
        ? (this.Log.Info(`reconnect successful`),
          this.m_fnOnReconnectFinishHandler({
            connection: this,
            eResult: 1,
          }))
        : (this.Log.Warning(`failed to re-connect to websocket after close`),
          this.m_fnOnReconnectFinishHandler({
            connection: this,
            eResult: 2,
          }),
          this.m_fnOnCloseHandler({
            connection: this,
            bError: !0,
            bIsExpectedToReconnect: !1,
          })));
  }
  async ConnectToSocket(_, _) {
    if (this.m_socket != null)
      return this.m_socket.readyState == WebSocket.OPEN
        ? {
            result: 1,
            message: `ready`,
          }
        : (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          {
            result: 2,
            message: `websocket in an unexpected state`,
          });
    try {
      this.m_socket = new WebSocket(_);
    } catch {
      return (
        this.Log.Warning(`failed to initialize websocket connection`),
        {
          result: 35,
          message: `Failed to initialize websocket connection`,
        }
      );
    }
    return (
      (this.m_socket.binaryType = `arraybuffer`),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, _))
        ? (this.Log.Info(`connection ready`),
          {
            result: 1,
            message: `ready`,
          })
        : (this.Log.Warning(`failed to reach open state`),
          {
            result: 2,
            message: `failed to reach open state`,
          })
    );
  }
  async WaitForSocketOpen(_, _) {
    if (_.readyState != WebSocket.CONNECTING)
      return _.readyState == WebSocket.OPEN;
    let _ = _ / 100;
    for (; _.readyState == WebSocket.CONNECTING && _ > 0;)
      (_--, await new Promise((_) => setTimeout(_, 100)));
    return _.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
  }
  OnSocketError(_) {
    this.Log.Warning(`websocket error`);
  }
  OnSocketOpen(_) {
    this.Log.Info(`websocket open`);
  }
  OnSocketClose(_) {
    if (this.m_bDisconnectRequested) {
      (this.Log.Info(`websocket closed`),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        }));
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning(`websocket unexpectedly closed`);
    let _ = this.BShouldReconnect();
    (this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: _,
    }),
      _ && this.StartReconnect());
  }
  async OnSocketMessage(_) {
    this.m_fnOnMessageHandler(_.data);
  }
  SendSerializedMessage(_) {
    try {
      return (this.m_socket.send(_), 1);
    } catch {
      return 2;
    }
  }
};
(_([_], _.prototype, `OnSocketError`, null),
  _([_], _.prototype, `OnSocketOpen`, null),
  _([_], _.prototype, `OnSocketClose`, null),
  _([_], _.prototype, `OnSocketMessage`, null));
var _ = `127.0.0.1`,
  _ = new _(`WebUITransport`),
  _ = class {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new _();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 67108864;
    }
    ReportError(_) {
      _.Warning(_);
      let _ = _();
      _ &&
        _.ReportError(Error(_), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!_.IN_CLIENT) return;
      let _ = await SteamClient.WebUITransport.GetTransportInfo();
      ((this.m_nMaximumMsgSizeBytes = _.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, _.portSteamUI, _.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          _.portClientdll,
          _.authKeyClientdll,
        ),
        _().SetDefaultTransport(this),
        _().SetDefaultHandlerRegistry(this.m_messageHandlers),
        _.RegisterForNotifyStartShutdown(this.OnStartShutdown));
    }
    get messageHandlers() {
      return this.m_messageHandlers;
    }
    SetStatusEventHandler(_) {
      this.m_fnOnStatusEventHandler = _;
    }
    SetReconnectErrorHandler(_) {
      this.m_fnOnReconnectErrorHandler = _;
    }
    CreateConnection(_, _, _, _) {
      let _ = {
        connection: new _(_, {
          bReconnectOnFailure: !0,
          fnOnMessageHandler: this.OnWebsocketMessage,
          fnOnCloseHandler: this.OnWebsocketClose,
          fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
          fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
          nConnectAttemptsMax: 8,
          nConnectAttemptTimeoutMs: 1e4,
          nReconnectAttemptsMax: 8,
          nReconnectAttemptTimeoutMs: 1e4,
        }),
        sUrl: `ws://${_}:${_}/transportsocket/`,
        sAuthKey: _,
        eClientExecutionSite: _,
      };
      this.m_mapConnectionDetails.set(_, _);
    }
    SendMsg(_, _, _, _) {
      return new Promise((_, _) => {
        let _ = _.eClientExecutionSite;
        if (_ == null || _ == 0) {
          (_.Error(`SendMsg: Invalid client execution site: ${_}`),
            _(`Transport SendMsg: invalid client execution site ${_}`));
          return;
        }
        let _ = this.m_mapConnectionDetails.get(_);
        if (_ == null) {
          (_.Error(
            `SendMsg: could not find connection for execution site: ${_}`,
          ),
            _(
              `Transport SendMsg: could not find connection for execution site ${_}`,
            ));
          return;
        }
        let _ = _.connection;
        if (!_.BCanSendMessages()) {
          let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
          this.m_mapServiceCallErrorCount.set(_, _ + 1);
          let _ = `SendMsg: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
          (_ == 1 && this.ReportError(_),
            _.Warning(_ + ` error count: ${_}`),
            _(`Transport SendMsg: socket not ready`));
          return;
        }
        let _ = this.m_iMsgSeq++;
        (_.SetEMsg(146),
          _.Hdr().set_target_job_name(_),
          _.Hdr().set_jobid_source(`` + _));
        let _ = _.Serialize();
        if (_.byteLength >= this.m_nMaximumMsgSizeBytes) {
          _.Error(
            `SendMsg: message exceeds maximum size: ${_.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let _ = _.Init(_);
          (_.Hdr().set_eresult(2), _(_));
        } else
          _.SendSerializedMessage(_) == 1
            ? this.m_mapPendingMethodRequests.set(_, {
                m_iSeq: _,
                m_responseClass: _,
                m_fnCallback: _,
                m_fnError: _,
              })
            : (_.Error(`SendMsg: Failed to send message`),
              _(`Transport SendMsg: failed to send message`));
      });
    }
    SendNotification(_, _, _) {
      let _ = _.eClientExecutionSite;
      if (_ == null || _ == 0)
        return (
          _.Error(`SendNotification: Invalid client execution site: ${_}`), !1
        );
      let _ = this.m_mapConnectionDetails.get(_);
      if (_ == null)
        return (
          _.Error(
            `SendNotification: could not find connection for execution site: ${_}`,
          ),
          !1
        );
      let _ = _.connection;
      if (!_.BCanSendMessages()) {
        let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
        this.m_mapServiceCallErrorCount.set(_, _ + 1);
        let _ = `SendNotification: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
        return (
          _ == 1 && this.ReportError(_), _.Warning(_ + ` error count: ${_}`), !1
        );
      }
      return (
        _.SetEMsg(146),
        _.Hdr().set_target_job_name(_),
        _.SendSerializedMessage(_.Serialize()) == 1
      );
    }
    async ConnectToSite(_) {
      let _ = await _.connection.Connect(_.sUrl);
      return _.result == 1
        ? (await this.SendAuthMessage(_)).BSuccess()
          ? {
              result: 1,
              message: `connected`,
            }
          : {
              result: 2,
              message: `client auth failed`,
            }
        : _;
    }
    async MakeReady() {
      let _ = [];
      for (let [_, _] of this.m_mapConnectionDetails)
        _.push(this.ConnectToSite(_));
      let _ = await Promise.all(_);
      ((this.m_bInitialized = !0), this.DispatchTransportStatusUpdate());
      for (let _ of _) if (_.result != 1) return _;
      return {
        result: 1,
        message: `ready`,
      };
    }
    GetConnectionDetails(_) {
      for (let [_, _] of this.m_mapConnectionDetails)
        if (_.connection === _) return _;
      return (
        _.Error(`GetConnectionDetails: failed to identify connection`), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let _ = !0;
      for (let [_, _] of this.m_mapConnectionDetails)
        _.connection.BCanSendMessages() || (_ = !1);
      this.m_fnOnStatusEventHandler({
        bConnected: _,
      });
    }
    OnWebsocketReconnectStart(_) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(_) {
      if ((this.DispatchTransportStatusUpdate(), _.eResult != 1)) {
        (_.Warning(`OnWebsocketReconnect: Failed to reconnect to steam client`),
          this.m_fnOnReconnectErrorHandler?.({}));
        return;
      }
      this.FailAllPendingRequests();
      let _ = this.GetConnectionDetails(_.connection);
      _ && this.SendAuthMessage(_);
    }
    OnWebsocketClose(_) {
      _.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(_) {
      let _ = new _(_),
        _ = _.InitHeaderFromPacket(_);
      _.Hdr().jobid_target() &&
      _.Hdr().jobid_target() !== `18446744073709551615`
        ? this.DispatchMethodResponse(_)
        : this.DispatchNotification(_);
    }
    DispatchMethodResponse(_) {
      let _ = parseInt(_.Hdr().jobid_target()),
        _ = this.m_mapPendingMethodRequests.get(_);
      if (_ == null) {
        _(!1, `Transport Error: no pending callback for request`);
        return;
      }
      (_(_ == _.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(_));
      let _ = _.InitFromMsg(_.m_responseClass, _);
      _.m_fnCallback(_);
    }
    DispatchNotification(_) {
      this.m_messageHandlers.DispatchMsgToHandlers(_, (_) => {
        _(!1, `Transport Error: A notification should not generate a response`);
      });
    }
    FailAllPendingRequests() {
      for (let [_, _] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${_.m_responseClass.name}`,
        );
        let _ = _.Init(_.m_responseClass);
        (_.Hdr().set_eresult(2), _.m_fnCallback(_));
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(_) {
      let _ = _.AuthenticateHandler.name,
        _ = {
          eClientExecutionSite: _.eClientExecutionSite,
        },
        _ = _.Init(_);
      return (
        _.Hdr().set_webui_auth_key(_.sAuthKey),
        await this.SendMsg(_, _, _.AuthenticateHandler.response, _)
      );
    }
    OnStartShutdown(_) {
      for (let [_, _] of this.m_mapConnectionDetails)
        _.connection.PrepareForShutdown();
      return 1;
    }
  };
(_([_], _.prototype, `OnWebsocketReconnectStart`, null),
  _([_], _.prototype, `OnWebsocketReconnectFinish`, null),
  _([_], _.prototype, `OnWebsocketClose`, null),
  _([_], _.prototype, `OnWebsocketMessage`, null),
  _([_], _.prototype, `OnStartShutdown`, null));
var _ = new _();
function _() {
  return _.IN_MOBILE ? _ : _();
}
function _(_) {
  if (_ === ``) return !1;
  try {
    return (RegExp(`\\b(` + _ + `)\\b`, `ugi`), !0);
  } catch {
    return (
      console.log(`'${_}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var _ = 15,
  _ = 3600,
  _ = `(1)`,
  _ = class {
    m_WebUIServiceTransport;
    m_unAccountID;
    m_Transport = null;
    m_Storage = null;
    m_TextFilterPreferences = {
      eTextFilterSetting: 3,
      bIgnoreFriends: !1,
    };
    m_TextFilterWords;
    m_mapPlayerCache = new Map();
    m_strBannedWords = ``;
    m_strProfanityWords = ``;
    m_strCleanWords = ``;
    m_strBannedPattern = ``;
    m_strCleanPattern = ``;
    m_bWordListsComplete = !1;
    m_bHaveCompleteFilter = !1;
    m_regexBannedWords = null;
    m_regexCleanWords = null;
    m_bShownFilterTip = !1;
    m_bInitialized = !1;
    m_bFilterChangedWhileLoading = !1;
    m_bOngoingLoad = !1;
    m_promiseOngoingLoad = null;
    m_fnUnregisterDictionaryChanged = void 0;
    m_rgUnregisterPlayerNotifications = [];
    m_DataAccess;
    constructor(_) {
      _(this);
      let _ = new _();
      ((this.m_TextFilterPreferences = {
        eTextFilterSetting: _.text_filter_setting(),
        bIgnoreFriends: _.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new _()),
        (this.m_DataAccess = _));
    }
    async Init(_ = 0, _ = null, _ = null, _ = null) {
      ((this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = _),
        (this.m_unAccountID = _),
        (this.m_Transport = _),
        (this.m_Storage = _),
        (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        this.InitSteamEngineLanguages(),
        this.RegisterPlayerNotifications(_),
        await this.LoadFilter(),
        await this.LoadTextFilterPreferences(),
        await this.LoadTextFilterWords(),
        await this.RequestUpdatedSettings(),
        (this.m_nLoadLanguagesRetryDelaySec = _),
        await this.EnsureFiltersLoaded());
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_fnUnregisterDictionaryChanged?.(),
        (this.m_fnUnregisterDictionaryChanged =
          this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
            _.NotifyTextFilterDictionaryChangedHandler,
            this.OnTextFilterDictionaryChanged,
          ).unregister),
        this.InitSteamEngineLanguage(_.LANGUAGE),
        _.LANGUAGE !== `english` && this.InitSteamEngineLanguage(`english`));
    }
    OnTextFilterDictionaryChanged(_) {
      return (
        !this.m_bInitialized && !this.m_bOngoingLoad
          ? (this.m_bFilterChangedWhileLoading = !0)
          : ((this.m_nLoadLanguagesRetryDelaySec = _),
            this.EnsureFiltersLoaded()),
        1
      );
    }
    EnsureFiltersLoaded() {
      return this.m_bOngoingLoad && this.m_promiseOngoingLoad
        ? ((this.m_bFilterChangedWhileLoading = !0), this.m_promiseOngoingLoad)
        : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
          this.m_promiseOngoingLoad);
    }
    async InitFiltersWithRetry() {
      this.m_bOngoingLoad = !0;
      try {
        do
          ((this.m_bFilterChangedWhileLoading = !1),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0));
        while (this.m_bFilterChangedWhileLoading);
      } finally {
        ((this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null));
      }
    }
    RegisterPlayerNotifications(_) {
      (this.m_rgUnregisterPlayerNotifications.forEach((_) => _()),
        (this.m_rgUnregisterPlayerNotifications = []),
        _ &&
          this.m_rgUnregisterPlayerNotifications.push(
            _.RegisterServiceNotificationHandler(
              _.NotifyCommunityPreferencesChangedHandler,
              (_) => (
                this.UpdateCommunityPreferences(_.Body().preferences()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
            _.RegisterServiceNotificationHandler(
              _.NotifyTextFilterWordsChangedHandler,
              (_) => (
                this.UpdateTextFilterWords(_.Body().words()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
          ));
    }
    OnPlayerSettingsChanged() {
      this.m_bInitialized && !this.m_bOngoingLoad && this.OnFilterDataChanged();
    }
    InitSteamEngineLanguage(_) {
      let _ = _.Init(_);
      (_.Body().set_language(_),
        _.Body().set_type(`profanity`),
        _.SendMsgUpdateTextFilterDictionary(_, this.m_WebUIServiceTransport),
        _.Body().set_type(`banned`),
        _.SendMsgUpdateTextFilterDictionary(_, this.m_WebUIServiceTransport));
    }
    GetSteamEngineTextFilterDictionary(_, _) {
      let _ = _.Init(_);
      return (
        _.Body().set_language(_),
        _.Body().set_type(_),
        _.SendMsgGetTextFilterDictionary(_, this.m_WebUIServiceTransport)
      );
    }
    GetStorageKey(_) {
      return _ + `_` + this.m_unAccountID;
    }
    async LoadTextFilterPreferences() {
      if (this.m_Storage) {
        let _ = await this.m_Storage.GetObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
        );
        _ && (this.m_TextFilterPreferences = _);
      }
    }
    SaveTextFilterPreferences() {
      this.m_Storage &&
        this.m_Storage.StoreObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
          this.m_TextFilterPreferences,
        );
    }
    ObfuscateString(_) {
      try {
        let _ = new TextEncoder().encode(_ + _);
        return _.fromByteArray(_);
      } catch {
        return ``;
      }
    }
    DeobfuscateString(_) {
      try {
        let _ = _.toByteArray(_),
          _ = new TextDecoder().decode(_);
        return _.startsWith(_)
          ? ((_ = _.slice(3)), _)
          : (console.log(
              `DeobfuscateString given invalid base64 data, ignoring: ` + _,
            ),
            ``);
      } catch {
        return ``;
      }
    }
    async LoadObfuscatedString(_) {
      if (this.m_Storage) {
        let _ = await this.m_Storage.GetString(this.GetStorageKey(_));
        if (_) return this.DeobfuscateString(_);
      }
      return null;
    }
    async SaveObfuscatedString(_, _) {
      this.m_Storage &&
        this.m_Storage.StoreString(
          this.GetStorageKey(_),
          this.ObfuscateString(_),
        );
    }
    async LoadTextFilterWords() {
      let _ = await this.LoadObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
      );
      if (_)
        try {
          this.m_TextFilterWords = _.fromObject(JSON.parse(_));
        } catch {
          (console.warn(`Error parsing cached text filter word list`, _),
            (this.m_TextFilterWords = new _()));
        }
    }
    SaveTextFilterWords() {
      this.SaveObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
        JSON.stringify(this.m_TextFilterWords.toObject()),
      );
    }
    async LoadFilter() {
      let _ = await this.LoadObfuscatedString(
          `CTextFilterStore_strBannedPattern`,
        ),
        _ = await this.LoadObfuscatedString(`CTextFilterStore_strCleanPattern`);
      ((this.m_bHaveCompleteFilter = _ != null && _ != null),
        _ != null && _ != null && this.BRebuildFilter(_, _));
    }
    SaveFilter() {
      (this.SaveObfuscatedString(
        `CTextFilterStore_strBannedPattern`,
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          `CTextFilterStore_strCleanPattern`,
          this.m_strCleanPattern,
        ));
    }
    async RequestUpdatedSettings() {
      let _ = new _();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let _ = _.Init(_);
            _ = (await _.GetCommunityPreferences(this.m_Transport, _))
              .Body()
              .preferences();
          } else {
            let _ = {
                sessionid: _(),
                origin: _(),
              },
              _ = await _.default.get(
                _.COMMUNITY_BASE_URL + `textfilter/ajaxgetcommunitypreferences`,
                {
                  params: _,
                  withCredentials: !0,
                },
              );
            _ = _.fromObject(_.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(_),
        _.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let _ = new _();
        if (_.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let _ = _.Init(_);
              _ = (await _.GetTextFilterWords(this.m_Transport, _))
                .Body()
                .words();
            } else {
              let _ = {
                  sessionid: _(),
                  origin: _(),
                },
                _ = await _.default.get(
                  _.COMMUNITY_BASE_URL +
                    `textfilter/ajaxgettextfiltercustomwords`,
                  {
                    params: _,
                    withCredentials: !0,
                  },
                );
              _ = _.fromObject(_.data.words);
            }
          } catch {}
        this.UpdateTextFilterWords(_);
      }
    }
    UpdateCommunityPreferences(_) {
      let _ = !1;
      (_.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          _.text_filter_setting()),
        (_ = !0)),
        _.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            _.text_filter_ignore_friends()),
          (_ = !0)),
        _ && this.SaveTextFilterPreferences());
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(_) {
      ((this.m_TextFilterWords = _), this.SaveTextFilterWords());
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    m_nLoadLanguagesRetryDelaySec = _;
    async LoadLanguages() {
      ((this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0)));
      try {
        let _ = await this.LoadLanguage(_.LANGUAGE);
        if (
          (_.LANGUAGE !== `english` &&
            (_ = (await this.LoadLanguage(`english`)) && _),
          !_)
        )
          throw Error(`clean_public dictionary unavailable`);
        ((this.m_nLoadLanguagesRetryDelaySec = _),
          (this.m_bWordListsComplete = !0));
      } catch (_) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          _,
        );
        let _ = this.m_nLoadLanguagesRetryDelaySec;
        (console.warn(`LoadLanguages caught`, _, `retry in`, _, `seconds`),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
            ((this.m_nLoadLanguagesRetryTimeout = void 0),
              this.EnsureFiltersLoaded());
          }, _ * 1e3)));
      }
    }
    async LoadLanguage(_) {
      let _ = ``,
        _ = !1;
      if (this.m_WebUIServiceTransport.BIsValid())
        try {
          {
            let _ = await this.GetSteamEngineTextFilterDictionary(_, `banned`);
            this.m_strBannedWords += _.Body().dictionary();
          }
          {
            let _ = await this.GetSteamEngineTextFilterDictionary(
              _,
              `profanity`,
            );
            this.m_strProfanityWords += _.Body().dictionary();
          }
          _ = !0;
        } catch (_) {
          console.warn(`LoadLanguage caught while loading from cache:`, _);
        }
      if (!_) {
        _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${_}&v=1&origin=${_()}`;
        {
          let _ = await _.default.get(_);
          this.m_strBannedWords += _.data;
        }
        _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${_}&v=1&origin=${_()}`;
        {
          let _ = await _.default.get(_);
          this.m_strProfanityWords += _.data;
        }
      }
      let _ = this.m_WebUIServiceTransport.BIsValid(),
        _ = `CTextFilterStore_strCleanPublic_` + _;
      _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${_}&v=1&origin=${_()}`;
      try {
        let _ = await _.default.get(_);
        ((this.m_strCleanWords += _.data),
          _ && this.SaveObfuscatedString(_, _.data));
      } catch (_) {
        console.warn(`LoadLanguage caught while loading clean list:`, _);
        let _ = _ ? await this.LoadObfuscatedString(_) : null;
        if (!_) return !1;
        this.m_strCleanWords += _;
      }
      return !0;
    }
    CreatePattern(_) {
      let _ = _.filter(function (_) {
        return _(_);
      });
      return _.length > 0 ? `\\b(` + _.join(`|`) + `)\\b` : ``;
    }
    OnFilterDataChanged() {
      if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter) return;
      let _ = new RegExp(/\s*[\r\n]+\s*/g),
        _ = [],
        _ = [];
      switch (this.m_TextFilterPreferences.eTextFilterSetting) {
        case 0:
          break;
        case 3:
          break;
        case 2:
          _ = _.concat(this.m_strBannedWords.split(_));
          break;
        default:
          _ = _.concat(
            this.m_strProfanityWords.split(_),
            this.m_strBannedWords.split(_),
          );
      }
      ((_ = _.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (_ = this.m_strCleanWords.split(_)),
        (_ = _.concat(
          this.m_TextFilterWords.text_filter_custom_clean_words(),
        )));
      let _ = this.CreatePattern(_),
        _ = this.CreatePattern(_);
      (_ != `` && (_ = `^(` + _ + `)$`),
        this.BRebuildFilter(_, _) &&
          this.m_bWordListsComplete &&
          this.SaveFilter(),
        (this.m_bHaveCompleteFilter = this.m_bWordListsComplete));
    }
    BRebuildFilter(_, _) {
      if (_ === this.m_strBannedPattern && _ === this.m_strCleanPattern)
        return !1;
      if (
        ((this.m_regexBannedWords = null),
        (this.m_strBannedPattern = _),
        _ !== ``)
      )
        try {
          this.m_regexBannedWords = new RegExp(_, `ugi`);
        } catch (_) {
          (console.warn(`Couldn't compile textfilter bannedwords regex`),
            _().ReportError(
              Error(`Couldn't compile textfilter bannedwords regex: ${_}`),
            ),
            (this.m_strBannedPattern = ``));
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = _),
        _ !== ``)
      )
        try {
          this.m_regexCleanWords = new RegExp(_, `ugi`);
        } catch (_) {
          (console.warn(`Couldn't compile textfilter cleanwords regex`),
            _().ReportError(
              Error(`Couldn't compile textfilter cleanwords regex: ${_}`),
            ),
            (this.m_strCleanPattern = ``));
        }
      return !0;
    }
    CreateProfanityReplacement(_) {
      return `♥`.repeat(_);
    }
    BHasFilter() {
      return this.m_regexBannedWords != null;
    }
    BShownFilterTip() {
      return this.m_bShownFilterTip;
    }
    SetFilterTipShown(_) {
      this.m_bShownFilterTip = _;
    }
    FilterText(_, _) {
      if (!this.m_regexBannedWords) return _;
      let _ = 0;
      return (
        typeof _ == `string` && _ !== ``
          ? (_ = new _(_).GetAccountID())
          : typeof _ == `number` && (_ = _),
        !_ ||
        _ == this.m_unAccountID ||
        (_ &&
          this.m_TextFilterPreferences.bIgnoreFriends &&
          this.m_DataAccess.BIsFriend(_))
          ? _
          : _.replace(this.m_regexBannedWords, (_) =>
              this.m_regexCleanWords && _.search(this.m_regexCleanWords) == 0
                ? _
                : this.CreateProfanityReplacement(_.length),
            )
      );
    }
  };
(_([_], _.prototype, `m_TextFilterPreferences`, void 0),
  _([_], _.prototype, `m_mapPlayerCache`, void 0),
  _([_], _.prototype, `m_regexBannedWords`, void 0),
  _([_], _.prototype, `m_regexCleanWords`, void 0),
  _([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_bFilterChangedWhileLoading`, void 0),
  _([_], _.prototype, `m_bOngoingLoad`, void 0),
  _([_], _.prototype, `Init`, null),
  _([_], _.prototype, `OnTextFilterDictionaryChanged`, null),
  _([_], _.prototype, `UpdateCommunityPreferences`, null),
  _([_], _.prototype, `BRebuildFilter`, null));
var _;
function _() {
  if (!_) {
    let _ = new Set(),
      _ = {
        sessionid: _(),
        origin: _(),
      };
    (_.default
      .get(_.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: _,
        withCredentials: !0,
      })
      .then((_) => {
        for (let _ of _.data.friendslist?.friends ?? [])
          _(_.efriendrelationship) && _.add(new _(_.ulfriendid).GetAccountID());
      }),
      (_ = (_) => _.has(_)));
  }
  return _;
}
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
      return (_ || ((_ = new _()), this.m_mapChats.set(_ || _, _)), _);
    }
    static s_Singleton;
    static Get() {
      return ((_.s_Singleton ||= new _()), _.s_Singleton);
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
    (_(this), (this.m_steamInterface = this.CreateSteamInterface()));
  }
  InitTextFilter() {
    this.m_textFilterStore = new _({
      BIsFriend: _(),
    });
    let _ = 0;
    (_.steamid !== `` && (_ = new _(_.steamid).GetAccountID()),
      this.m_textFilterStore.Init(_, null, new _()));
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
    ((this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastSteamID = _),
      (this.m_ulBroadcastID = _),
      this.InitTextFilter(),
      this.RequestChatInfo());
  }
  StartForChannel(_) {
    ((this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastChannelID = _),
      (this.m_strUserSteamID = _.steamid),
      this.InitTextFilter(),
      this.JoinChannelChat());
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
          ((_ =
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
            }));
          return;
        }
        ((this.m_nRateLimitSeconds ||= _.cooldown_time_seconds ?? 0),
          this.m_nRateLimitSeconds &&
            ((this.m_bRateLimited = !0),
            setTimeout(
              () => (this.m_bRateLimited = !1),
              this.m_nRateLimitSeconds * 1e3,
            )));
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
    ((this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1));
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
          ((this.m_strChatURL = _.view_url_template ?? ``),
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
            this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
        });
    } catch (_) {
      (console.error(_), console.log(`Failed to get chat info!`));
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
      ((this.m_strChatURL = _),
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
        this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
    } catch (_) {
      (console.error(_), console.log(`Failed to join chat!`));
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
    (_.forEach((_) => {
      let _ = _.steamid();
      _ && _.set(_, !0);
    }),
      (this.m_mapChannelModeratorUsers = _));
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
      (this.m_rgChatMessages.push(..._), this.ReplaceChatAnnouncementIfAny(_));
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
        ((this.m_tsFirstRequest = performance.now() + _.initial_delay),
          (this.m_nFromFirstRequestMS = 0),
          (this.m_nNextChatTS = _.next_request),
          (_ = _.initial_delay));
      } else {
        if (_.next_request < this.m_nNextChatTS) {
          console.log(`Next request in past`);
          return;
        }
        ((this.m_nFromFirstRequestMS += _.next_request - this.m_nNextChatTS),
          (this.m_nNextChatTS = _.next_request),
          (_ =
            this.m_tsFirstRequest +
            this.m_nFromFirstRequestMS -
            performance.now() +
            this.m_nNudgeFactorMS));
      }
      ((this.m_bReconnecting &&= !1),
        (this.m_nLastSleepMS = _),
        _ < 0 && (_ = 0),
        this.m_chatScheduledFunc?.Schedule(_, this.RequestLoop));
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
        ((this.m_cConsecutiveErrors = 0),
          (this.m_bReconnecting = !0),
          this.SyncChat());
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
      (_.append(`broadcaststeamid`, this.m_ulBroadcastSteamID),
        _.append(`moderatorsteamid`, _),
        _.append(`bAdd`, _ ? `1` : `0`),
        _.append(`sessionid`, _()));
      try {
        (await _.default.post(
          `${_.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          _,
        ),
          this.m_mapBroadcastModeratorUsers.set(_, _));
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
      (_.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: _,
        duration: _ * 3600,
        permanent: _,
        undo: _,
      }),
        await _.AddChatBan(this.m_steamInterface.GetServiceTransport(), _));
    } else {
      let _ = new FormData();
      (_.append(`broadcaststeamid`, _),
        _.append(`issuersteamid`, _),
        _.append(`chattersteamid`, _),
        _.append(`bantype`, _),
        _.append(`duration`, _.toString()),
        _.append(`perm`, _ ? `1` : `0`),
        _.append(`sessionid`, _()));
      try {
        (await _.default.post(
          `${_.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
          _,
        ),
          _ == 0
            ? delete this.m_mapMutedUsers[_]
            : (this.m_mapMutedUsers[_] = _));
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
        (_.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: _,
          muted: !0,
        }),
          await _.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            _,
          ));
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
          (_.SetBodyFields({
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
            }));
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
        (_.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: _,
        }),
          await _.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            _,
          ));
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
    (_.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${_}:`,
    }),
      await _.UpdateChatMessageFlair(
        this.m_steamInterface.GetServiceTransport(),
        _,
      ));
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
    ((this.m_tsFirstRequest = null),
      (this.m_nFromFirstRequestMS = 0),
      (this.m_nNextChatTS = 0),
      (this.m_rgChatMessages = []));
  }
};
(_([_], _.prototype, `m_mapChannelModeratorUsers`, void 0),
  _([_], _.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  _([_], _.prototype, `m_nRateLimitSeconds`, void 0),
  _([_], _.prototype, `m_bRateLimited`, void 0),
  _([_], _.prototype, `m_rgChatMessages`, void 0),
  _([_], _.prototype, `m_latestAnnouncement`, void 0),
  _([_], _.prototype, `FetchChatModerators`, null),
  _([_], _.prototype, `RequestLoop`, null),
  _([_], _.prototype, `MuteUserForSession`, null));
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapBroadcasterSteamIDToEvents = new Map();
  m_mapBroadcasterSteamIDData = new Map();
  static GetBBCodeParam(_, _, _ = ``) {
    let _ = RegExp(`\\W${_}\\W*=\\W*\\"(.*?)\\"`, `gmi`).exec(_);
    return _ ? _[1] : _;
  }
  static ParseCalendarEventPresentersFromText(_) {
    let _ = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
      _ = [];
    for (;;) {
      let _ = _.exec(_);
      if (_ === null) break;
      let _ = _[1],
        _ = _[2],
        _ = _.GetBBCodeParam(_, `steamid`),
        _ = {
          steamID: _ ? new _(_) : void 0,
          name: _.GetBBCodeParam(_, `name`),
          title: _.GetBBCodeParam(_, `title`),
          company: _.GetBBCodeParam(_, `company`),
          photo: _.GetBBCodeParam(_, `photo`),
          bio: _,
        };
      _.push(_);
    }
    return _;
  }
  static ParseEventModelPresenters(_, _) {
    let _ = _.GetDescriptionWithFallback(_) ?? ``;
    return _.ParseCalendarEventPresentersFromText(_);
  }
  static ParseEventAppReferencesFromText(_) {
    let _ = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
      _ = new Set();
    for (;;) {
      let _ = _.exec(_);
      if (_ === null) break;
      let _ = _[1];
      _.add(Number(_));
    }
    return _;
  }
  static ParseEventModelAppReferences(_, _) {
    let _ = _.GetDescriptionWithFallback(_) ?? ``,
      _ = _.ParseEventAppReferencesFromText(_);
    if (_.jsondata?.referenced_appids)
      for (let _ of _.jsondata.referenced_appids) _.add(_);
    return _;
  }
  async BuildBroadcasterSteamIDToActiveEventMap(_) {
    let _ = _.GetTimeNowWithOverride(),
      _ = _.GetCalendarItemsInTimeRange(_ - 3600, _);
    for (let _ of _.rgCalendarItems)
      _.QueueLoadPartnerEvent(_.clanid, _.unique_id);
    let _ = _.rgCalendarItems.map((_) =>
        _.LoadPartnerEventFromClanEventGIDAndClanSteamID(
          _.InitFromClanID(_.clanid, _.EUNIVERSE),
          _.unique_id,
          0,
        ),
      ),
      _ = await Promise.all(_),
      _ = new Map();
    for (let _ of _)
      if (_ && !(_.endTime && _.endTime < _))
        for (let _ of _.GetBroadcastWhitelistAsSteamIDs()) {
          let _ = _.get(_);
          _ ? _.push(_) : _.set(_, [_]);
        }
    return _;
  }
  IsBroadcasterAlreadyBound(_, _) {
    let _ = this.m_mapBroadcasterSteamIDToEvents.get(_) ?? [],
      _ = _.length;
    if ((_ ? _.length : 0) != _) return !1;
    for (let _ = 0; _ < _; _++) if (_[_] != _[_].GID) return !1;
    return !0;
  }
  static BuildSteamIDToPresenterMapFromEventList(_, _) {
    let _ = new Map();
    for (let _ of _) {
      if (!_) continue;
      let _ = _.ParseEventModelPresenters(_, _);
      for (let _ of _) _.steamID && _.set(_.steamID.ConvertTo64BitString(), _);
    }
    return _;
  }
  RemoveCachedDataIfNotInMap(_) {
    let _ = [];
    (this.m_mapBroadcasterSteamIDToEvents.forEach((_, _) => {
      _.has(_) || _.push(_);
    }),
      _.forEach((_) => {
        (this.m_mapBroadcasterSteamIDData.delete(_),
          this.m_mapBroadcasterSteamIDToEvents.delete(_));
      }));
  }
  static BuildAppIDRefsForEventList(_, _) {
    let _ = new Set();
    for (let _ of _)
      _.ParseEventModelAppReferences(_, _).forEach((_) => _.add(_));
    return Array.from(_);
  }
  UpdateCachedDataFromEvents(_, _) {
    _.forEach((_, _) => {
      if (this.IsBroadcasterAlreadyBound(_, _)) return;
      let _ = {
        m_mapPresenters: _.BuildSteamIDToPresenterMapFromEventList(_, _),
        m_rgAppIDs: _.BuildAppIDRefsForEventList(_, _),
      };
      (this.m_mapBroadcasterSteamIDData.set(_, _),
        this.m_mapBroadcasterSteamIDToEvents.set(
          _,
          _.map((_) => _.GID ?? ``),
        ));
    });
  }
  async SynchronizeEventsWithBroadcasts(_, _) {
    let _ = await this.BuildBroadcasterSteamIDToActiveEventMap(_);
    (this.RemoveCachedDataIfNotInMap(_), this.UpdateCachedDataFromEvents(_, _));
  }
  GetPresenterMapForBroadcasterSteamID(_) {
    return this.m_mapBroadcasterSteamIDData.get(_)?.m_mapPresenters;
  }
  GetAppIDListForBroadcasterSteamID(_) {
    return this.m_mapBroadcasterSteamIDData.get(_)?.m_rgAppIDs;
  }
};
_([_], _.prototype, `m_mapBroadcasterSteamIDData`, void 0);
var _ = new _(),
  _ = _();
function _(_) {
  return (0, _.jsx)(_, {
    onEscKeypress: _.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, _.jsx)(_, {
      redirectURL: _.redirectURL,
      guestOption: _.guestOption,
    }),
  });
}
function _() {
  _(
    (0, _.jsx)(_, {
      ownerWin: window,
      redirectURL: window.location.href,
    }),
    window,
    {
      strTitle: _(`#Login_SignInTitle`),
    },
  );
}
function _(_) {
  let { redirectURL: _, guestOption: _ } = _,
    [_] = (0, _.useState)(
      new _(new _(_.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsx)(`div`, {
    children: _
      ? (0, _.jsx)(_, {})
      : (0, _.jsx)(_, {
          autoFocus: !0,
          transport: _,
          platform: 2,
          onComplete: (_) => {
            _ == _.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
          },
          redirectUrl: _,
          theme: `modal`,
          children:
            _ &&
            (0, _.jsx)(_, {
              redirectURL: _,
            }),
        }),
  });
}
var _ = `u-hyk5J5tIY-`,
  _ = `doqBDS-zTtg-`,
  _ = `DHv28C3kLqY-`,
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
  _ = class _ {
    constructor() {
      _(this);
    }
    giveaway_id = void 0;
    seconds_until_drawing = void 0;
    rtime_start = void 0;
    rtime_end = void 0;
    closed = void 0;
    winner_count = void 0;
    BIsValid() {
      return this.giveaway_id !== void 0 && this.giveaway_id !== null;
    }
    BStarted() {
      return this.BIsValid()
        ? (this.seconds_until_drawing !== void 0 &&
            this.seconds_until_drawing >= 0) ||
            (this.winner_count !== void 0 && this.winner_count > 0)
        : !1;
    }
    clone() {
      let _ = new _();
      return (
        (_.giveaway_id = this.giveaway_id),
        (_.seconds_until_drawing = this.seconds_until_drawing),
        (_.rtime_start = this.rtime_start),
        (_.rtime_end = this.rtime_end),
        (_.closed = this.closed),
        (_.winner_count = this.winner_count),
        _
      );
    }
  };
(_([_], _.prototype, `giveaway_id`, void 0),
  _([_], _.prototype, `seconds_until_drawing`, void 0),
  _([_], _.prototype, `rtime_start`, void 0),
  _([_], _.prototype, `rtime_end`, void 0),
  _([_], _.prototype, `closed`, void 0),
  _([_], _.prototype, `winner_count`, void 0));
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapGiveawayIDToNextDrawInfo = new Map();
  m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
  m_bLoadedFromConfig = !1;
  m_mapNextDrawChangeCallback = new Map();
  GetKey(_, _) {
    return _ + `_` + _;
  }
  GetInfoByInstance(_, _) {
    return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(this.GetKey(_, _));
  }
  GetNextDrawChangeCallback(_) {
    let _ = this.m_mapNextDrawChangeCallback.get(_);
    return (
      _ || ((_ = new _()), this.m_mapNextDrawChangeCallback.set(_, _)), _
    );
  }
  CopyToGiveaway(_, _) {
    (_.closed != _.closed && (_.closed = _.closed),
      _.giveaway_id != _.giveaway_id && (_.giveaway_id = _.giveaway_id),
      _.rtime_start != _.rtime_start && (_.rtime_start = _.rtime_start),
      _.rtime_end != _.rtime_end && (_.rtime_end = _.rtime_end),
      _.winner_count != _.winner_count && (_.winner_count = _.winner_count),
      _.seconds_until_drawing != _.seconds_until_drawing &&
        (_.seconds_until_drawing = _.seconds_until_drawing));
  }
  async ReloadGiveaway(_, _) {
    if (!_) return null;
    let _ = _.STORE_BASE_URL + `prizes/nextdraw/` + _,
      _ = {
        origin: self.origin,
      },
      _ = await _.default.get(_, {
        params: _,
      }),
      _ = _(() => {
        let _ = this.m_mapGiveawayIDToNextDrawInfo.get(_);
        if (
          (_ || ((_ = new _()), this.m_mapGiveawayIDToNextDrawInfo.set(_, _)),
          this.CopyToGiveaway(_.data, _),
          _ !== void 0)
        ) {
          let _ = this.GetKey(_, _),
            _ = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_);
          (_ ||
            ((_ = new _()),
            this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(_, _)),
            this.CopyToGiveaway(_.data, _));
        }
        return _;
      });
    return (this.GetNextDrawChangeCallback(_).Dispatch(_), _);
  }
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  Init() {
    if (!this.m_bLoadedFromConfig) {
      let _ = _(`giveawaynextdraw`, `application_config`);
      if (_ && _.giveaway_id) {
        let _ = new _();
        (this.CopyToGiveaway(_, _),
          this.m_mapGiveawayIDToNextDrawInfo.set(_.giveaway_id, _));
      }
      this.m_bLoadedFromConfig = !0;
    }
  }
};
(_([_], _.prototype, `m_mapGiveawayIDToNextDrawInfo`, void 0),
  _([_], _.prototype, `CopyToGiveaway`, null));
var _ = class _ {
  m_intervalID;
  m_intervalCountDownID;
  static s_GlobalInstance = 0;
  m_myInstanceNumber = 0;
  constructor() {
    ((this.m_myInstanceNumber = _.s_GlobalInstance), (_.s_GlobalInstance += 1));
  }
  ClearRefreshInterval() {
    this.m_intervalID &&= (window.clearInterval(this.m_intervalID), void 0);
  }
  ClearCountDown() {
    this.m_intervalCountDownID &&=
      (window.clearInterval(this.m_intervalCountDownID), void 0);
  }
  SetupRefreshDataInterval(_, _) {
    if ((this.ClearRefreshInterval(), !_.closed)) {
      let _ =
        _.seconds_until_drawing !== void 0 &&
        _.seconds_until_drawing <= 0 &&
        _.winner_count == 0
          ? 6e4
          : 5e3;
      this.m_intervalID = window.setInterval(_, _);
    }
  }
  SetupCountDown(_, _) {
    _ !== void 0 &&
      _ > 0 &&
      (this.m_intervalCountDownID = window.setInterval(_, 1e3));
  }
};
(_([_], _.prototype, `ClearRefreshInterval`, null),
  _([_], _.prototype, `ClearCountDown`, null),
  _([_], _.prototype, `SetupRefreshDataInterval`, null),
  _([_], _.prototype, `SetupCountDown`, null));
function _(_, _) {
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
  _ &&
    _.seconds_until_drawing !== void 0 &&
    (--_.seconds_until_drawing,
    _.seconds_until_drawing == 0 && _.ClearCountDown());
}
function _(_, _) {
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
  _ &&
    _.BIsValid() &&
    _.seconds_until_drawing !== void 0 &&
    _.seconds_until_drawing <= 0 &&
    !_.closed &&
    (_.ClearCountDown(),
    _.Get()
      .ReloadGiveaway(_, _.m_myInstanceNumber)
      .then((_) => {
        _ && _.SetupCountDown(_.seconds_until_drawing, () => _(_, _));
      }));
}
function _(_) {
  let [_] = (0, _.useState)(new _()),
    _ = _();
  (0, _.useEffect)(
    () => (
      _.Get()
        .ReloadGiveaway(_, _.m_myInstanceNumber)
        .then((_) => {
          _ &&
            (_.SetupRefreshDataInterval(_, () => _(_, _)),
            _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
            _());
        }),
      () => {
        (_.ClearRefreshInterval(), _.ClearCountDown());
      }
    ),
    [_, _, _],
  );
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber),
    [_, _, _] = _(() => [_?.winner_count, _?.closed, _?.seconds_until_drawing]);
  return !_ || _.giveaway_id == null || !_.BStarted() || _ === void 0
    ? {
        bLoadingGiveawayInfo: !0,
      }
    : {
        bLoadingGiveawayInfo: !1,
        winner_count: _,
        closed: _ ?? !1,
        seconds_until_drawing: _ ?? -1,
      };
}
var _ = `aE9NemwHX3U-`,
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
      (super(_), _(this));
    }
    m_chat = void 0;
    messagesContainer = _.createRef();
    componentDidMount() {
      this.StartChat();
    }
    componentDidUpdate(_) {
      (this.m_chat &&
        this.m_chat.m_bAutoScroll &&
        this.ScrollToNewestMessages(),
        (this.props.steamID !== _.steamID ||
          this.props.broadcastID !== _.broadcastID ||
          this.props.broadcastChannelID !== _.broadcastChannelID) &&
          this.StartChat());
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
        (_.StartForSteamID(this.props.steamID, _),
          this.ScrollToNewestMessages());
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
(_([_], _.prototype, `m_chat`, void 0),
  _([_], _.prototype, `StartChat`, null),
  _([_], _.prototype, `HandleScroll`, null),
  _([_], _.prototype, `OnContextMenu`, null),
  _([_], _.prototype, `RenderUserChatLine`, null),
  (_ = _([_], _)));
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
        (_(_ + `\u02D0${_}\u02D0`), _?.current && _.current.focus());
      },
      [_, _],
    ),
    _ = () => {
      (_.SendMessage(_), _(``));
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
          (_.UpdateChatMessageFlair(_), _?.current && _.current.focus());
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
var _ = `_7FIE12jcFio-`,
  _ = `l3NO7dsjryo-`,
  _ = `gxhjub7-6JQ-`,
  _ = _((_) => {
    let { appid: _ } = _,
      _ = _(),
      _ = (0, _.useRef)({
        include_assets: !0,
        include_release: !0,
      }),
      _ = _(_),
      { data: _ } = _(_),
      { data: _ } = _(_),
      { data: _ } = _(_),
      [_, _] = _(_, _.current),
      _ = _(_, `StoreSaleWidgetContainer_mini`),
      _ = _,
      _ = _;
    if (_ == null)
      return (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          size: `medium`,
        }),
      });
    if (_ == null || !_.name)
      return (0, _.jsx)(`div`, {
        className: void 0,
      });
    let _ = _.type != 8,
      _ = _(_(_), _);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`a`, {
          href: _,
          target: _.IN_CLIENT ? void 0 : `_blank`,
          children: (0, _.jsx)(_, {
            _: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              children:
                _ &&
                (0, _.jsx)(`img`, {
                  className: _,
                  src: _(_, `small_capsule`),
                  alt: _.name,
                }),
            }),
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`a`, {
              href: _,
              target: _.IN_CLIENT ? void 0 : `_blank`,
              children: (0, _.jsx)(_, {
                _: _,
                children: (0, _.jsx)(`div`, {
                  className: _(_, `StoreSaleWidgetTitle`),
                  children: _.name,
                }),
              }),
            }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `A8oyzoRvWQ8-`,
                children: _(_),
              }),
            !!_ &&
              (0, _.jsx)(_, {
                _: _,
                bShowDemoButton: !0,
              }),
          ],
        }),
      ],
    });
  });
function _() {
  let _ = window.GetUsabilityTracker;
  if (_) return _();
}
var _ = !1;
function _(_) {
  return !!(_ && _.thumbnail_http_address);
}
var _ = class _ {
  constructor() {
    _(this);
  }
  static s_GlobalStore;
  m_inFlightRequests = new Map();
  m_lookupKeyToEmbedStreamDef = new Map();
  m_lookupStreams = new Map();
  m_playReadyStream = new Map();
  m_bMapHasStartedVideo = new Map();
  m_mapBroadcastChecked = new Map();
  m_pageChatStatus = `hide`;
  m_streamChatStatus = `hide`;
  m_bUserChatExpanded = void 0;
  m_bUserPreferenceHideBroadcastByDefault = void 0;
  m_bCollapsed = void 0;
  m_setStreamChangedListeners = new Set();
  m_bUseFakeData = !1;
  m_onLoadContextCall = new Map();
  BHasStreams(_) {
    let _ = this.GetStreams(_);
    return !!(_ && _.length > 0);
  }
  AddCallbackOnNewContext(_, _, _) {
    this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(_), {
      name: _,
      fnCallback: _,
    });
  }
  ClearCallbackOnNewContext(_) {
    this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(_), null);
  }
  GetPlayReadyStream(_) {
    let _ = this.GetStreamsLookupKeyFromDef(_);
    return this.m_playReadyStream.get(_);
  }
  BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
    return !!this.m_bUserPreferenceHideBroadcastByDefault;
  }
  BIsEmbeddedStreamCollapsed() {
    return !!this.m_bCollapsed;
  }
  SetEmbeddedStreamCollapsed(_) {
    this.m_bCollapsed != _ && (this.m_bCollapsed = _);
  }
  GetConcurrentStreams(_) {
    let _ = this.GetStreams(_);
    return _ ? _.filter((_) => _(_)).length : 0;
  }
  GetChatVisibility() {
    return this.m_pageChatStatus === `remove` ||
      this.m_streamChatStatus === `remove`
      ? `remove`
      : this.m_bUserChatExpanded === void 0
        ? this.m_pageChatStatus === `show`
          ? `show`
          : this.m_pageChatStatus === `hide` ||
              this.m_streamChatStatus === `hide`
            ? `hide`
            : `show`
        : this.m_bUserChatExpanded
          ? `show`
          : `hide`;
  }
  ToggleChatVisibility() {
    let _ = this.GetChatVisibility();
    _ !== `remove` && (this.m_bUserChatExpanded = _ === `hide`);
  }
  DebugDumpContextAndAvailableContext(_) {
    (console.log(`Requested context`, this.GetStreamsLookupKeyFromDef(_)),
      console.log(`Available context count: `, this.m_lookupStreams.size),
      this.m_lookupStreams.forEach((_, _) => {
        console.log(_, _.length);
      }));
  }
  GetStreams(_) {
    let _ = this.GetStreamsLookupKeyFromDef(_);
    return this.m_lookupStreams.get(_);
  }
  GetBroadcastURL(_) {
    let _;
    return (
      (_ = _.steamid
        ? new _(_.steamid)
        : _.InitFromAccountID(_.accountid, _.EUNIVERSE)),
      _.COMMUNITY_BASE_URL + `broadcast/watch/` + _.ConvertTo64BitString()
    );
  }
  BIsAppStreaming(_) {
    let _ = !1;
    return (
      this.m_lookupStreams.forEach((_) => {
        _ ||=
          !!_ &&
          _.some((_) => _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === _);
      }),
      _
    );
  }
  GetStreamsForAppID(_) {
    let _ = [];
    return (
      this.m_lookupStreams.forEach((_) => {
        _?.forEach((_) => {
          _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === _ && _.push(_);
        });
      }),
      _
    );
  }
  AddStreamChangedListener(_) {
    this.m_setStreamChangedListeners.add(_);
  }
  RemoveStreamChangedListener(_) {
    this.m_setStreamChangedListeners.delete(_);
  }
  async LoadBIsEmbeddedBroadcastHidden(_) {
    if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
      let _ = _(`broadcastuser`, `application_config`);
      if (!_)
        try {
          let _ =
            _.STORE_BASE_URL + `broadcast/ajaxgetuserbroadcastpreferences`;
          _ = (
            await _.default.get(_, {
              params: {},
              cancelToken: _.token,
            })
          ).data;
        } catch (_) {
          (console.log(`LoadBIsEmbeddedBroadcastHidden: ` + _(_).strErrorMsg),
            (_ = {
              bHideStoreBroadcast: !1,
            }));
        }
      _(() => {
        ((this.m_bUserPreferenceHideBroadcastByDefault = _.bHideStoreBroadcast),
          (this.m_bCollapsed = _.bHideStoreBroadcast));
      });
    }
    return this.BIsEmbeddedBroadcastHiddenByDefaultUserSettings();
  }
  async SetupEmbeddableVOD(_, _) {
    ((this.m_bUseFakeData = !1),
      (this.m_streamChatStatus = `remove`),
      _(!!_.nAppIDVOD, `SetupEmbeddableVOD requires a VOD appid`),
      await _.Get().QueueAppRequest(_.nAppIDVOD, {
        include_assets: !0,
        include_trailers: !0,
      }));
    let _ = _.Get().GetApp(_.nAppIDVOD),
      _ = new _();
    ((_.accountid = 0),
      (_.nAppIDVOD = _.nAppIDVOD),
      (_.default_selection_priority = _.k_ePrimary),
      (_.current_selection_priority = _.k_ePrimary),
      (_.thumbnail_http_address = _?.GetAssets()?.GetHeaderURL() || ``),
      (_.title = _?.GetName() || ``));
    let _ = this.GetStreams(_);
    if (
      (_(
        !!_,
        `SetupEmbeddableVOD called before the streams loaded`,
        _.nAppIDVOD,
      ),
      _.unshift(_),
      _)
    ) {
      let _ = this.GetStreamsLookupKeyFromDef(_);
      this.m_playReadyStream.set(_, _);
    }
  }
  async HintLoadEmbeddablePreviewStreams(_) {
    let _ = {
      eventid: _.event ? _.event.GID : void 0,
      previewAccounts:
        _.bIsPreview && _.accountIDs
          ? _.accountIDs.slice().sort().join(`,`)
          : void 0,
    };
    try {
      let _ = await _.default.get(
        _.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpreview`,
        {
          params: _,
        },
      );
      return this.HandleHintLoadBroadcastResponse(_, _.data);
    } catch (_) {
      let _ = _(_);
      console.error(
        `HintLoadEmbeddablePreviewStreams hit error loading: ` + _.strErrorMsg,
        _,
      );
    }
    return [];
  }
  async HintLoadEmbeddableStreams(_) {
    let _ = this.MapEmbeddableStreamToRequest(_),
      _ = this.GetStreamsLookupKeyFromParam(_),
      _ = this.m_inFlightRequests.get(_);
    return (
      _ ||
        (this.m_lookupKeyToEmbedStreamDef.set(_, _),
        (_ = this.InternalHintLoadEmbeddableStreams(_, _)),
        this.m_inFlightRequests.set(_, _)),
      _
    );
  }
  async InternalHintLoadEmbeddableStreams(_, _) {
    let _ = _(`broadcast_available_for_page`, `application_config`);
    if (_(_)) return this.HandleHintLoadBroadcastResponse(_, _);
    try {
      let _ = await _.default.get(
        _.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpage`,
        {
          params: _,
        },
      );
      return this.HandleHintLoadBroadcastResponse(_, _.data);
    } catch (_) {
      let _ = _(_);
      console.error(
        `HintLoadEmbeddableStreams hit error loading: ` + _.strErrorMsg,
        _,
      );
    }
    return [];
  }
  async HandleHintLoadBroadcastResponse(_, _) {
    ((this.m_bUseFakeData = !1),
      _.bIsPreview &&
        (_?.filtered?.length > 0
          ? (_(!!_.event, `Broadcast preview requires an event`),
            this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
              _.event,
              _.filtered,
            ))
          : ((_ = {
              filtered: [{}],
              success: 1,
              total_count: 1,
              err_msg: ``,
              broadcast_chat_visibility: `hide`,
            }),
            (this.m_bUseFakeData = !0))),
      _.broadcast_chat_visibility &&
        (this.m_pageChatStatus = _.broadcast_chat_visibility));
    let _ = [];
    _(() => {
      _.filtered.forEach((_) => {
        _.steamid ||= _.InitFromAccountID(
          _.accountid,
          _.EUNIVERSE,
        ).ConvertTo64BitString();
        let _ = _.GetOrCreateBroadcastInfo(_.steamid),
          _ = _.appid ? Number(_.appid) : 7;
        ((_.m_nAppID = _),
          (_.m_strAppId = `` + _),
          _.current_selection_priority === void 0 &&
            (_.current_selection_priority = _.default_selection_priority),
          _ != 7 && _.push(_));
      });
    });
    let _ = this.GetStreamsLookupKeyFromDef(_);
    if (
      (this.m_lookupStreams.set(_, _.filtered), this.m_onLoadContextCall.has(_))
    ) {
      let _ = this.m_onLoadContextCall.get(_);
      _ && _.fnCallback();
    }
    let _ = this.GetStreams(_) ?? [];
    return (await this.AutoStartVideoStream(_, _), _);
  }
  ExtractBroadcastPrioritiesFromPartnerEventForPreview(_, _) {
    let _ = Array.from(_.jsondata.broadcast_whitelist ?? []),
      _ = Array.from(_.jsondata.broadcast_priority ?? []),
      _ = new Map();
    for (let _ = 0; _ < _.length && !(_ >= _.length); _++) _.set(_[_], _(_[_]));
    _.forEach((_) => {
      let _ = Number(_.accountid);
      _.has(_) && (_.current_selection_priority = _.get(_));
    });
  }
  async AutoStartVideoStream(_, _) {
    let _ = this.GetStreamsLookupKeyFromDef(_);
    if (this.m_bMapHasStartedVideo.get(_)) return null;
    if (this.m_bUseFakeData) {
      if (!this.m_playReadyStream.get(_)) {
        let _ = {
          accountid: 0,
          thumbnail_http_address: ``,
          default_selection_priority: _.k_eGeneral,
          current_selection_priority: _.k_eGeneral,
        };
        this.m_playReadyStream.set(_, _);
      }
      return this.m_playReadyStream;
    }
    return this.PlayFromAvailableStreams(_, _);
  }
  async PlayFromAvailableStreams(_, _, _ = !1) {
    let _ = new Set();
    for (;;) {
      let _ = _.filter((_) => !_.has(_) && (!_ || !_.nAppIDVOD)),
        _ = this.GetAutoStartStream(_);
      if (!_) return null;
      if (await this.AttemptToPlayStream(_, _)) return _;
      _.add(_);
    }
  }
  async AttemptToPlayStream(_, _) {
    let _ = this.GetStreamsLookupKeyFromDef(_),
      _ = _.accountid ?? 0;
    if (
      (this.m_bMapHasStartedVideo.set(_, !0),
      this.m_mapBroadcastChecked.has(_) ||
        this.m_mapBroadcastChecked.set(
          _,
          this.InternalAttemptToPlayStream(_, _),
        ),
      _.nAppIDVOD)
    )
      this.m_playReadyStream.set(_, _);
    else {
      let _ = await this.m_mapBroadcastChecked.get(_);
      if (_?.success == 1) {
        ((_.steamid = _.steamid),
          this.m_playReadyStream.set(_, _),
          (this.m_streamChatStatus =
            this.GetConcurrentStreams(_) > 1
              ? `hide`
              : (_.broadcast_chat_visibility ?? null)),
          this.m_setStreamChangedListeners.forEach((_) => _(_)));
        let _ = _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID;
        _(_, 1, _.snr);
      } else return null;
    }
    return _;
  }
  async InternalAttemptToPlayStream(_, _) {
    this.GetStreamsLookupKeyFromDef(_);
    try {
      let _ = _.STORE_BASE_URL + `broadcast/ajaxcheckbroadcast`,
        _ = {
          broadcastaccountid: _.accountid,
          viewer_token: _.GetViewerToken(),
          origin: self.origin,
        };
      return (
        await _.default.get(_, {
          params: _,
        })
      ).data;
    } catch (_) {
      let _ = _(_);
      console.error(`Broadcast.AttemptToPlayStream: ` + _.strErrorMsg, _);
    }
    return null;
  }
  GetAutoStartStream(_) {
    if (!_) return null;
    let _ = _.filter((_) => _(_)),
      _ = _.reduce((_, _) => Math.max(_, _(_)), 0),
      _ = _.filter((_) => _(_) === _);
    return _.length === 0 ? null : _[Math.floor(Math.random() * _.length)];
  }
  MapEmbeddableStreamToRequest(_) {
    return {
      appid: _.appid,
      promotionName: _.bIsPreview ? `preview` : _.promotionName,
      clanid: _.clanid
        ? _.clanid
        : _.event
          ? _.event.clanSteamID.GetAccountID()
          : void 0,
      listid: _.listid,
      subid: _.subid,
      bundleid: _.bundleid,
      eventid: _.event ? _.event.GID : void 0,
      previewAccounts:
        _.bIsPreview && _.accountIDs
          ? _.accountIDs.slice().sort().join(`,`)
          : void 0,
      test: _,
      _: _.COUNTRY,
      _: _.LANGUAGE,
      hubtype: _.event?.GetContentHubType(),
      hubcategory: _.event?.GetContentHubCategory(),
      hubtagid: _.event?.GetContentHubTag(),
      tabuniqueid: _.tabuniqueid,
      tabfilter: _.tabfilter,
      rt_now_override_test: _.BHasTimeOverride()
        ? _.GetTimeNowWithOverride()
        : void 0,
    };
  }
  GetStreamsLookupKeyFromDef(_) {
    return this.GetStreamsLookupKeyFromParam(
      this.MapEmbeddableStreamToRequest(_),
    );
  }
  GetStreamsLookupKeyFromParam(_) {
    return JSON.stringify(_);
  }
  static Get() {
    return (
      _.s_GlobalStore || ((_.s_GlobalStore = new _()), _.s_GlobalStore.Init()),
      _.s_GlobalStore
    );
  }
  Init() {}
};
(_([_], _.prototype, `m_lookupStreams`, void 0),
  _([_], _.prototype, `m_playReadyStream`, void 0),
  _([_], _.prototype, `m_pageChatStatus`, void 0),
  _([_], _.prototype, `m_streamChatStatus`, void 0),
  _([_], _.prototype, `m_bUserChatExpanded`, void 0),
  _([_], _.prototype, `m_bUserPreferenceHideBroadcastByDefault`, void 0),
  _([_], _.prototype, `m_bCollapsed`, void 0),
  _([_], _.prototype, `HintLoadEmbeddablePreviewStreams`, null),
  _([_], _.prototype, `AttemptToPlayStream`, null));
function _(_) {
  return _.current_selection_priority || _.k_eGeneral;
}
function _(_) {
  _.sort((_, _) =>
    _(_) == _(_)
      ? _.viewer_count == _.viewer_count
        ? (_.accountid ?? 0) - (_.accountid ?? 0)
        : (_.viewer_count ?? 0) - (_.viewer_count ?? 0)
      : _(_) - _(_),
  );
}
async function _(_, _, _) {
  if (_ > 0 && _ != 7 && _) {
    let _ = new URLSearchParams();
    (_.append(`page_action`, `` + _),
      _.append(`snr`, _),
      _.default.post(
        _.STORE_BASE_URL + `ajaxreportproductaction/` + _ + `/`,
        _,
      ));
  }
}
var _ = new _(),
  _ = `58px`,
  _ = `58px`,
  _ = `rYnVBBDJIz4-`,
  _ = `dsbI18mZ-Ps-`,
  _ = `dQY8CyT7Y5Y-`,
  _ = `f0G28hbeNYE-`,
  _ = `EGznwOBrytk-`,
  _ = `wMy1ewxYK3I-`,
  _ = `iLleweU-ckI-`,
  _ = `ov8XKFWsMMc-`,
  _ = `KcqUD5hkzyk-`,
  _ = `ECJWFclMDpk-`,
  _ = `KkgW9CzRVMI-`,
  _ = `SObNBjtfgbU-`,
  _ = `-d8EQqzPfNs-`,
  _ = `FS3-jxto3Z8-`,
  _ = `twoyTg-z2n4-`,
  _ = `_887-MlrXKDQ-`,
  _ = `Yb1KTWt-6pE-`,
  _ = `HbhpxnAX2Kk-`,
  _ = `vePf8-fcS4g-`,
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
  _ = `yzeJT1XucOE-`,
  _ = _((_) => {
    let { event: _ } = _,
      _ = _.clanSteamID.GetAccountID(),
      _ = !_ || !_.jsondata || !_.jsondata.broadcast_item_drops_enabled,
      _ = (0, _.useRef)(null),
      [_, _] = (0, _.useState)(_ ? _.GetCreatorHome(_.clanSteamID) : void 0);
    if (
      ((0, _.useEffect)(() => {
        let _ = _.default.CancelToken.source();
        return (
          (_.current = _.cancel),
          (async () => {
            let _ = _.InitFromClanID(_, _.EUNIVERSE),
              _ = await _.LoadCreatorHome(_, !1, _);
            _.token.reason || _(_);
          })(),
          () => {
            _.current && _.current(`BroadcastDropsDisplay: unmounting`);
          }
        );
      }, [_]),
      _ || !_ || !_.BIsLoaded())
    )
      return null;
    let _ =
        _.COMMUNITY_BASE_URL +
        `gid/` +
        _.jsondata.broadcast_item_drops_details_clan_accountid +
        `/partnerevents/view/` +
        _.jsondata.broadcast_item_drops_details_event_gid,
      _ = _.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        children: [
          _(
            _.GetName().length > 0
              ? _ % 60 == 0
                ? `#SalePage_WatchForDrop_Hours_CreatorNamed`
                : `#SalePage_WatchForDrop_Minutes_CreatorNamed`
              : _ % 60 == 0
                ? `#SalePage_WatchForDrop_Hours_Developer`
                : `#SalePage_WatchForDrop_Minutes_Developer`,
            _ % 60 == 0 ? _ / 60 : _,
            _.GetName(),
          ),
          !!_.jsondata.broadcast_item_drops_details_clan_accountid &&
            (0, _.jsx)(`a`, {
              href: _,
              target: _.IN_CLIENT ? `` : `_blank`,
              children: _(`#SalePage_WatchForDrop_LearnMore`),
            }),
        ],
      }),
    });
  });
function _(_) {
  let { steamid: _, closeModal: _ } = _;
  return (0, _.jsxs)(_, {
    strDescription: ``,
    strTitle: _(`#Button_Share`),
    onCancel: _,
    onOK: _,
    bAlertDialog: !0,
    modalClassName: `EventDisplay_Share_Dialog`,
    children: [
      (0, _.jsx)(_, {
        steamid: _,
      }),
      (0, _.jsx)(_, {
        steamid: _,
      }),
    ],
  });
}
function _(_) {
  let { steamid: _ } = _,
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _(`#EventDisplay_Share_OnFaceBook`),
        children: (0, _.jsx)(_, {
          href: _.strFacebookUrl,
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        toolTipContent: _(`#EventDisplay_Share_OnTwitter`),
        children: (0, _.jsx)(_, {
          href: _.strTwitterUrl,
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        toolTipContent: _(`#EventDisplay_Share_OnReddit`),
        children: (0, _.jsx)(_, {
          href: _.strRedditUrl,
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { steamid: _ } = _,
    _ = _.createRef(),
    [_, _] = _.useState(``),
    _ = _.createRef(),
    _ = _.useCallback(
      (_) => {
        _.current &&
          _.current.ownerDocument.defaultView?.navigator.clipboard
            .writeText(_.current.value)
            .then((_) => {
              _(_(`#EventDisplay_Share_CopiedToClipboard`));
            })
            .catch((_) => {
              (_(_(`#EventDisplay_Share_FailedToCopyToClipboard`)),
                console.error(`Failed to copy link to clipboard:`, _));
            });
      },
      [_],
    ),
    _ = _.COMMUNITY_BASE_URL + `broadcast/watch/` + _;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        onClick: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#EventDisplay_Share_Link`),
          }),
          (0, _.jsx)(`textarea`, {
            className: _,
            ref: _,
            value: _,
            readOnly: !0,
          }),
          !!document.queryCommandSupported(`copy`) &&
            (0, _.jsx)(_, {
              toolTipContent: _(`#ToolTip_CopyLinkToClipboard`),
              children: (0, _.jsx)(`div`, {
                className: _(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `_6y4EcbHPzTE-`),
                children: (0, _.jsx)(`img`, {
                  className: `SGi7-TqE4Rs-`,
                  src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%201801.5%201400%201409'%20enable-background='new%200%201801.5%201400%201409'%20xml:space='preserve'%3e%3cpath%20id='iconmonstr-link-1_1_'%20fill='%23FFFFFF'%20d='M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0%20c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294%20c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280%20c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941%20c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z%20M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0%20c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0%20c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647%20c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059%20S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z'/%3e%3c/svg%3e`,
                }),
              }),
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        ref: _,
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _.COMMUNITY_BASE_URL + `broadcast/share/` + _;
  return {
    strFacebookUrl: _ + `?site=facebook&t=` + Math.random(),
    strTwitterUrl: _ + `?site=twitter`,
    strRedditUrl: _ + `?site=reddit`,
  };
}
var _ = {
  list: [
    {
      appid: 444090,
      url: `https://steam.tv/paladins`,
    },
    {
      appid: 386360,
      url: `https://steam.tv/smite`,
    },
    {
      appid: 813820,
      url: `https://steam.tv/realmroyale`,
    },
    {
      appid: 583950,
      url: `https://steam.tv/artifact`,
      broadcasterAccountID: 912972716,
    },
    {
      appid: 570,
      url: `https://steam.tv/dota`,
      broadcasterAccountID: 238221269,
    },
    {
      appid: 1025790,
      url: `https://steam.tv/steamawards`,
      broadcasterAccountID: 934427243,
    },
    {
      appid: 730,
      url: `https://steam.tv/csgo`,
      broadcasterAccountID: 927819071,
    },
  ],
};
function _() {
  let _ = _();
  return !_() && !_;
}
function _(_) {
  return _()
    ? (0, _.jsx)(_, {
        ..._,
      })
    : null;
}
var _ = class extends _.Component {
  m_cancelSignal = _.default.CancelToken.source();
  m_bMarkedUsabilitySeen = !1;
  state = {
    bShowPopoutHeader: !1,
    bExpanded: !1,
    bLoadingPreference: !0,
    style: {
      maxHeight: `0vh`,
      overflow: `hidden`,
      transition: `max-height 1s ease-in-out`,
    },
    innerStyle: {
      maxHeight: `0vh`,
      overflow: `hidden`,
      transition: `max-height 1s ease-in-out`,
    },
    bStartMuted: !0,
  };
  async componentDidMount() {
    (await _.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
      this.m_cancelSignal.token.reason ||
        this.setState({
          bLoadingPreference: !1,
          bExpanded: !_.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
          innerStyle: {
            ...this.state.innerStyle,
            maxHeight: _.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
              ? `0vh`
              : `100vh`,
          },
        }),
      await (this.props.bIsPreview &&
      this.props.accountIDs &&
      !this.props.event?.BUsesContentHubForItemSource()
        ? _.Get().HintLoadEmbeddablePreviewStreams(this.props)
        : _.Get().HintLoadEmbeddableStreams(this.props)),
      this.props.nAppIDVOD &&
        _.Get().SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
      window.setTimeout(() => {
        this.m_cancelSignal.token.reason ||
          this.setState({
            style: {
              ...this.state.style,
              maxHeight: `100vh`,
            },
          });
      }, 10));
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`BroadcastEmbeddable component unmounted`);
  }
  ToggleBroadcastExpandShrink() {
    let _ = _.Get().GetPlayReadyStream(this.props);
    if (!_) return;
    let _ = this.state.bExpanded,
      _ = _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID;
    (_(_, _ ? 2 : 3, _.snr),
      _ && _()?.AddEvent(_),
      window.setTimeout(
        () =>
          this.setState({
            innerStyle: {
              ...this.state.innerStyle,
              maxHeight: _ ? `0vh` : `100vh`,
            },
          }),
        10,
      ),
      _ ||
        this.setState(
          {
            bExpanded: !this.state.bExpanded,
          },
          () => _.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
        ));
  }
  OnShrinkTransitionEnd() {
    this.state.innerStyle.maxHeight === `0vh` &&
      this.setState(
        {
          bExpanded: !1,
        },
        () => _.Get().SetEmbeddedStreamCollapsed(!0),
      );
  }
  async onStreamSelect(_) {
    (this.setState({
      bStartMuted: !1,
    }),
      _.Get().GetPlayReadyStream(this.props)?.accountid != _.accountid &&
        (await _.Get().AttemptToPlayStream(this.props, _)));
  }
  async PlayNextNonVOD() {
    this.setState({
      bStartMuted: !1,
    });
    let _ = (_.Get().GetStreams(this.props) ?? []).filter(
      (_) => !this.props.fnFilterStreams || this.props.fnFilterStreams(_),
    );
    await _.Get().PlayFromAvailableStreams(this.props, _, !0);
  }
  ConstructSidePanels(_, _) {
    let _ = {
      bRightPanelArtworkOrEmpty: !0,
    };
    if (this.props.bWidePlayer) return _;
    let _ = _.Get().GetConcurrentStreams(this.props) > 1,
      _ = _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
      _ = (0, _.jsx)(
        _,
        {
          ImgUrl: _.right_panel,
        },
        `right` + _,
      ),
      _ = (0, _.jsx)(
        _,
        {
          ImgUrl: _.left_panel,
        },
        `left` + _,
      );
    if (_ < 11) {
      let _ = _.steamid
        ? _.GetAppIDListForBroadcasterSteamID(_.steamid)
        : void 0;
      _ && _.length === 1 && (_ = _[0]);
    }
    return (
      (this.props.promotionName ||
        this.props.bIsPreview ||
        this.props.subid ||
        this.props.bundleid) &&
        _ >= 11 &&
        (!this.props.event ||
          !this.props.event.jsondata.broadcast_force_banner) &&
        ((_ = (0, _.jsx)(
          _,
          {
            appid: _,
          },
          `mini` + _.accountid,
        )),
        (_.bRightPanelArtworkOrEmpty = !1)),
      _ && !_
        ? ((_.leftPanel = (0, _.jsx)(
            _,
            {
              broadcastEmbedContext: this.props,
              curStream: _,
              onStreamSelect: this.onStreamSelect,
              fnFilterStreams: this.props.fnFilterStreams,
              bShowCapsuleArt: this.props.bShowCapsuleArt,
            },
            `selector` + _,
          )),
          (_.rightPanel = _))
        : _
          ? ((_.leftPanel = (0, _.jsx)(`div`, {})),
            (_.rightPanel = (0, _.jsx)(_, {
              stream: _,
              orientation: `rightside`,
            })),
            (_.bRightPanelArtworkOrEmpty = !1))
          : ((_.leftPanel = _), (_.rightPanel = _)),
      _
    );
  }
  MarkBroadcastSeen() {
    this.m_bMarkedUsabilitySeen ||
      ((this.m_bMarkedUsabilitySeen = !0), _()?.AddEvent(_));
  }
  render() {
    if (this.state.bLoadingPreference) return null;
    let _ = _.Get().GetPlayReadyStream(this.props);
    if (_) {
      this.MarkBroadcastSeen();
      let _ = _.Get().GetChatVisibility() === `show`,
        { event: _, language: _, fnRenderBroadcastContext: _ } = this.props,
        _ = _
          ? {
              ..._,
              left_panel: _.GetImageURL(`broadcast_left`, _ || _(_.LANGUAGE)),
              right_panel: _.GetImageURL(`broadcast_right`, _ || _(_.LANGUAGE)),
              store_title: _.GetBroadcastTitle(_ || _(_.LANGUAGE)),
              broadcast_chat_visibility: _.GetBroadcastChatVisibility(),
            }
          : _,
        _ = this.ConstructSidePanels(_, _),
        _ = _.store_title ? _.store_title : _.title,
        _ = _.Get().GetConcurrentStreams(this.props) > 1,
        _ = () => {
          (_.nAppIDVOD && this.PlayNextNonVOD(), this.props.fnOnVideoEnd?.());
        };
      return (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(`div`, {
          className: `broadcast_embed_top_ctn_trgt`,
          style: this.state.style,
          children: [
            (0, _.jsxs)(`div`, {
              className: _({
                [_]: !0,
                [_]: !!_,
                broadcast_brd_ctn_trgt: !0,
              }),
              children: [
                (0, _.jsxs)(`div`, {
                  className: _(_, `bordered_title_trgt`),
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _,
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        !this.state.bExpanded &&
                          (0, _.jsx)(_, {
                            toolTipContent: _(
                              `#StoreBroadcast_Change_store_Broadcast_settings`,
                            ),
                            children: (0, _.jsx)(`div`, {
                              className: `Ku3ORKocBrQ-`,
                              onClick: () =>
                                window.open(
                                  `${_.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                ),
                            }),
                          }),
                        (0, _.jsx)(_, {
                          toolTipContent: _(`#StoreBroadcast_Hide_Tooltip`),
                          children: (0, _.jsx)(`div`, {
                            className: this.state.bExpanded ? _ : _,
                            onClick: this.ToggleBroadcastExpandShrink,
                          }),
                        }),
                      ],
                    }),
                    !!_.gamedata_subtitle &&
                      (0, _.jsx)(`div`, {
                        className: `WdbOLmmaXso-`,
                        children: _.gamedata_subtitle,
                      }),
                  ],
                }),
                !!this.state.bExpanded &&
                  (0, _.jsxs)(`div`, {
                    className: _({
                      "lOf3hlirldE-": !0,
                      embeddable_ctn_trgt: !0,
                      multistream: _,
                      broadcast_right_panel_simple: _.bRightPanelArtworkOrEmpty,
                      broadcast_chat_expanded: _,
                    }),
                    style: {
                      ...this.state.innerStyle,
                    },
                    onTransitionEnd: this.OnShrinkTransitionEnd,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: `HEBZJhZ641A-`,
                        children: _.leftPanel,
                      }),
                      (0, _.jsx)(_, {
                        stream: _,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: _,
                        fnOnVideoEnd: _,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      (0, _.jsx)(`div`, {
                        className: `UHu5FWxee0A-`,
                        children: _.rightPanel,
                      }),
                      !!this.state.bExpanded &&
                        (0, _.jsx)(_, {
                          stream: _,
                          bMultistream: _,
                          chatAnnouncementGivewayGID: _.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ],
                  }),
              ],
            }),
            !!_ &&
              !!(_.jsondata && _.jsondata.broadcast_item_drops_enabled) &&
              (0, _.jsx)(_, {
                event: _,
              }),
            (0, _.jsx)(`div`, {
              className: _,
            }),
          ],
        }),
      });
    }
    return (0, _.jsx)(`div`, {
      className: `NoBroadcastAvailable`,
    });
  }
};
(_([_], _.prototype, `ToggleBroadcastExpandShrink`, null),
  _([_], _.prototype, `OnShrinkTransitionEnd`, null),
  _([_], _.prototype, `onStreamSelect`, null),
  _([_], _.prototype, `PlayNextNonVOD`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  m_iVideoContainerRef = _.createRef();
  constructor(_) {
    (super(_),
      (this.state = {
        bPopout: !1,
        bPreventPopup: window.screen.width <= 768,
      }));
  }
  CloseBroadcastPopup() {
    let _ = _.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (_(_, 7, this.props.stream.snr),
      _()?.AddEvent(_),
      this.setState({
        bPopout: !1,
        bPreventPopup: !0,
      }));
  }
  OnEnter() {
    !this.state.bPreventPopup &&
      this.state.bPopout &&
      this.setState({
        bPopout: !1,
      });
  }
  OnLeave() {
    !this.state.bPreventPopup &&
      !this.state.bPopout &&
      this.setState({
        bPopout: !0,
      });
  }
  render() {
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        onEnter: this.OnEnter,
        onLeave: this.OnLeave,
        onIntersectionChange: (_) => {
          _.isIntersecting || this.OnLeave();
        },
        className: _({
          [_]: !0,
          video_placeholder_trgt: !0,
          [_]: this.props.bWidePlayer,
        }),
        ref: this.m_iVideoContainerRef,
        children: (0, _.jsxs)(`div`, {
          className: this.state.bPopout ? _ : _,
          children: [
            this.state.bPopout &&
              (0, _.jsx)(_, {
                steamIDBroadcast: this.props.stream.steamid,
                OnPreventPopup: this.CloseBroadcastPopup,
              }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                steamIDBroadcast: this.props.stream.steamid,
                watchLocation: 6,
                bStartMuted: this.props.bStartMuted,
                fnRenderBroadcastContext: this.props.fnRenderBroadcastContext,
                fnOnVideoEnd: this.props.fnOnVideoEnd,
                nAppIDVOD: this.props.stream.nAppIDVOD,
              }),
            }),
          ],
        }),
      }),
    });
  }
};
(_([_], _.prototype, `CloseBroadcastPopup`, null),
  _([_], _.prototype, `OnEnter`, null),
  _([_], _.prototype, `OnLeave`, null));
function _(_) {
  let { stream: _ } = _,
    [_] = _(() => [_.steamid]),
    _ = _.GetOrCreateBroadcastInfo(_).m_nAppID,
    _ = _.list.find(
      (_) =>
        _.appid == _ &&
        (!_.broadcasterAccountID || _.broadcasterAccountID == _.accountid),
    );
  if (_) {
    let _ = _.url;
    return (
      (_.IN_CLIENT ||
        navigator.userAgent.indexOf(`Valve Steam Client`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam GameOverlay`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam Tenfoot`) >= 0) &&
        (_ = `steam://openurl/` + _),
      (0, _.jsx)(`a`, {
        href: _,
        children: _(`#Broadcast_Embed_Watch_With_Frieds_SteamTV`),
      })
    );
  }
  {
    let _ = _.COMMUNITY_BASE_URL + `broadcast/watch/` + _;
    return (0, _.jsx)(_, {
      toolTipContent: _(`#BroadcastWatch_View_Broadcast_Page`),
      children: (0, _.jsx)(`a`, {
        href: _,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
    });
  }
}
var _ = class extends _.Component {
  OnToggleChat(_) {
    _.preventDefault();
    let _ = _.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (_(
      _,
      _.Get().GetChatVisibility() === `show` ? 5 : 4,
      this.props.stream.snr,
    ),
      _.Get().ToggleChatVisibility());
  }
  onWatchBroadcastPage() {
    let _ = _.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    _(_, 9, this.props.stream.snr);
  }
  render() {
    let _ = _.Get().GetChatVisibility() != `remove`,
      _ = _.Get().GetChatVisibility() === `hide`,
      _ = !this.props.stream.nAppIDVOD,
      _ = _,
      _ = Number.parseInt(
        `` +
          _.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nViewerCount,
      );
    return (0, _.jsxs)(`div`, {
      className: _(_, `viewer_bar`),
      children: [
        (0, _.jsxs)(`div`, {
          className: _(_, `viewer_count`),
          children: [(0, _.jsx)(_, {}), _(_)],
        }),
        (0, _.jsxs)(`div`, {
          className: _(_, `viewer_links`),
          children: [
            !!(_ && !_ && this.props.bMultistream) &&
              (0, _.jsx)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: (0, _.jsx)(`a`, {
                  href: `#`,
                  className: void 0,
                  onClick: this.OnToggleChat,
                  children: _(`#sale_three_section_show_streams`),
                }),
              }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: this.OnToggleChat,
                    children: _(
                      _
                        ? `#sale_three_section_show_chat`
                        : `#sale_three_section_hide_chat`,
                    ),
                  }),
                ],
              }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: (_) => {
                      let _ = _(_);
                      _ &&
                        _(
                          (0, _.jsx)(_, {
                            steamid: this.props.stream.steamid ?? ``,
                          }),
                          _,
                        );
                    },
                    children: _(`#Broadcast_ShareBroadcast`),
                  }),
                ],
              }),
            (0, _.jsx)(_, {
              toolTipContent: _(
                `#StoreBroadcast_Change_store_Broadcast_settings`,
              ),
              children: (0, _.jsx)(`a`, {
                href:
                  _.STORE_BASE_URL +
                  `account/preferences/#store_broadcast_settings`,
                target: _.IN_CLIENT ? void 0 : `_blank`,
                className: _,
                children: (0, _.jsx)(_, {}),
              }),
            }),
            _ &&
              (0, _.jsx)(_, {
                ...this.props,
              }),
          ],
        }),
        !!this.props.chatAnnouncementGivewayGID &&
          (0, _.jsx)(_, {
            gidGiveaway: this.props.chatAnnouncementGivewayGID,
            stream: this.props.stream,
          }),
      ],
    });
  }
};
(_([_], _.prototype, `OnToggleChat`, null),
  _([_], _.prototype, `onWatchBroadcastPage`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
    render() {
      let _ = this.props.ImgUrl;
      return (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(`img`, {
              className: `KkgW9CzRVMI-`,
              src: this.props.ImgUrl,
            }),
          !_ &&
            (0, _.jsx)(`div`, {
              className: `KkgW9CzRVMI-`,
            }),
        ],
      });
    }
  },
  _ = _((_) => {
    let { steamIDBroadcast: _ } = _,
      _ = _.GetOrCreateBroadcastInfo(_).m_nAppID;
    _ = _ == 7 ? 0 : _;
    let _ = _(_),
      { data: _ } = _(_);
    return (0, _.jsxs)(`div`, {
      className: [_, void 0].join(` `),
      children: [
        _
          ? (0, _.jsx)(_, {
              _: _,
              className: _,
              children: _(`#StoreBroadcast_Detault_popout_Title`),
            })
          : (0, _.jsx)(`div`, {
              className: _,
              children: _(`#StoreBroadcast_Detault_popout_Title`),
            }),
        (0, _.jsx)(_, {
          toolTipContent: _(`#StoreBroadcast_close_broadcast_popup`),
          children: (0, _.jsx)(`button`, {
            className: _,
            onClick: _.OnPreventPopup,
            children: (0, _.jsx)(_, {}),
          }),
        }),
      ],
    });
  });
function _(_, _) {
  let _ = _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
    _ = _.Get().GetApp(_);
  return _ && _?.GetAssets()?.GetHeaderURL() ? parseInt(_) : parseInt(_);
}
function _(_) {
  let {
      curStream: _,
      onStreamSelect: _,
      fnFilterStreams: _,
      bShowCapsuleArt: _,
      broadcastEmbedContext: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useMemo)(() => {
      let _ = (_.Get().GetStreams(_) ?? []).filter((_) => !_ || _(_));
      return (_(_), _);
    }, [_, _]);
  return (
    (0, _.useEffect)(() => {
      if (_ && _.current) {
        let _ = _.map(
          (_) => _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
        ).filter(Boolean);
        _.Get()
          .QueueMultipleAppRequests(_, {
            include_assets: !0,
          })
          .then(() => {
            if (_.current) {
              let _ = 0;
              for (let _ of _) {
                if (_.accountid == _.accountid) break;
                _ += _(_, _);
              }
              _.current.scrollTop = _;
            }
          });
      }
    }, [_, _, _.accountid, _]),
    (0, _.jsx)(`div`, {
      ref: _,
      className: _({
        [_]: !0,
        side_panels: !0,
        [_]: !0,
        [_]: _.length > 3,
      }),
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              stream: _,
              bSelected: _.accountid == _.accountid,
              onStreamSelect: _,
              bShowCapsuleArt: _,
            },
            _.accountid ?? _.steamid,
          ),
        ),
      }),
    })
  );
}
function _(_) {
  let { onStreamSelect: _, bSelected: _, stream: _, bShowCapsuleArt: _ } = _,
    _ = _(() => _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID);
  _ = _ == 7 ? 0 : _;
  let _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_(_)) return null;
  let _ = _ && _ ? _(_, `header`) : void 0,
    _ = Number.parseInt(`` + _.viewer_count),
    _ = !Number.isNaN(_),
    _ = !!_.nAppIDVOD && _?.name;
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !0,
      [void 0]: _.current_selection_priority == _.k_eFeatured,
      [_]: !!_,
    }),
    children: [
      (0, _.jsx)(_, {
        _: _,
        hoverClassName: _,
        children: (0, _.jsx)(_, {
          className: _(_, _ && void 0),
          onClick: () => _ && _(_),
          rootMargin: `100px 0px 100px 0px`,
          children: (0, _.jsx)(_, {
            strThumbnail: _.thumbnail_http_address,
            bSelected: _,
            strCapsuleArtURL: _,
          }),
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, !_ && `QP7p0y7iNjE-`),
        children: _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {}),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(_),
                }),
              ],
            })
          : _,
      }),
    ],
  });
}
function _(_) {
  let { strCapsuleArtURL: _, strThumbnail: _, bSelected: _ } = _,
    _ = _ ? _ : _;
  if (_) {
    let _ = [_];
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`img`, {
          className: _(_, _),
          src: _,
        }),
        (0, _.jsx)(_, {
          className: _(_, _),
          srcs: _,
        }),
      ],
    });
  }
  return (0, _.jsx)(`img`, {
    className: _,
    src: _,
  });
}
function _(_) {
  let { stream: _, orientation: _ } = _,
    _ = _ == `below`,
    [_, _] = _(() => {
      let _ = _.steamid ? _.GetBroadcast(_.steamid) : void 0;
      return [_, _?.m_ulBroadcastID];
    }),
    _ = _(() => _.steamid);
  return _
    ? (0, _.jsx)(`div`, {
        className: _({
          [void 0]: _,
          [void 0]: !_,
          [_]: !0,
        }),
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            emoticonStore: _,
            watchLocation: 6,
            steamID: _,
            broadcastID: _,
          }),
        }),
      })
    : null;
}
export { _ as BroadcastEmbeddablePopoutHeader, _ as default };
