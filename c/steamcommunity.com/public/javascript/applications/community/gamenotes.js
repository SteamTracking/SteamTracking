import { _ } from "./chunk~f025431ab0.js";
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
} from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~018ae802ee.js";
import { _ } from "./chunk~008c00a198.js";
import { _ } from "./chunk~af1574091f.js";
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
} from "./main.js";
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
} from "./chunk~5c33f42766.js";
import { _ } from "./chunk~01d6da9524.js";
import { _ } from "./chunk~06da9a7953.js";
var _ = _(_()),
  _ = {
    List: () => `/notes/list`,
    AppNotes: (_, _) => `/notes/app/${_}/${_ ?? ``}`,
    ShortcutNotes: (_, _) => `/notes/shortcut/${_}/${_ ?? ``}`,
  };
function _(_, _) {
  return `appid` in _ ? _.AppNotes(_.appid, _) : _.ShortcutNotes(_.shortcut, _);
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.operation || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            operation: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            machine_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            client_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_last_updated: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            os_type: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            device_type: {
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
      return `CCloud_PendingRemoteOperation`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9], null));
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
            ugcid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            filename: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            timestamp: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            file_size: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            url: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            steamid_creator: {
              _: 7,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            flags: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            platforms_to_sync: {
              _: 9,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            file_sha: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            compressed_file_size: {
              _: 11,
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
      return `CCloud_UserFile`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 7, 8], null));
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
            file_size: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            filename: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            file_sha: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            is_public: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            platforms_to_sync: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            request_headers_names: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            request_headers_values: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            upload_batch_id: {
              _: 9,
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
      return `CCloud_BeginHTTPUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ugcid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ugcid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            timestamp: {
              _: 2,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            url_host: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            url_path: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            use_https: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            request_headers: {
              _: 6,
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
      return `CCloud_BeginHTTPUpload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            value: {
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
      return `CCloud_BeginHTTPUpload_Response_HTTPHeaders`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.transfer_succeeded || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            transfer_succeeded: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_sha: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            filename: {
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
      return `CCloud_CommitHTTPUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.file_committed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            file_committed: {
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
      return `CCloud_CommitHTTPUpload_Response`;
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
            file_size: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            filename: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            file_sha: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            content_type: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            is_public: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            timestamp: {
              _: 7,
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
      return `CCloud_BeginUGCUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.storage_system || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            storage_system: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            ugcid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            timestamp: {
              _: 3,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            url_host: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            url_path: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            use_https: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            request_headers: {
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
      return `CCloud_BeginUGCUpload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            value: {
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
      return `CCloud_BeginUGCUpload_Response_HTTPHeaders`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.transfer_succeeded || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            transfer_succeeded: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ugcid: {
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
      return `CCloud_CommitUGCUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.file_committed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            file_committed: {
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
      return `CCloud_CommitUGCUpload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ugcid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ugcid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
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
      return `CCloud_GetFileDetails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.details || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            details: {
              _: 1,
              _: _,
            },
            rangecheck_host: {
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
      return `CCloud_GetFileDetails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            file_name: {
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
      return `CCloud_GetSingleFileInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            sha_file: {
              _: 4,
              _: _.readBytes,
              _: _.writeBytes,
            },
            time_stamp: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            raw_file_size: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_explicit_delete: {
              _: 7,
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
      return `CCloud_GetSingleFileInfo_Response`;
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
            extended_details: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            start_index: {
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
      return `CCloud_EnumerateUserFiles_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.files || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            files: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_files: {
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
      return `CCloud_EnumerateUserFiles_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filename || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filename: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upload_batch_id: {
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
      return `CCloud_Delete_Request`;
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
      return `CCloud_Delete_Response`;
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
      return `CCloud_GetClientEncryptionKey_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.key || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            key: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            crc: {
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
      return `CCloud_GetClientEncryptionKey_Response`;
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
            url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            success: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            http_status_code: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            expected_bytes: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            received_bytes: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration: {
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
      return `CCloud_CDNReport_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.host || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            host: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            path: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            is_upload: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            success: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            http_status_code: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bytes_expected: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            bytes_actual: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cellid: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            proxied: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            ipv6_local: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            ipv6_remote: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            time_to_connect_ms: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_to_send_req_ms: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_to_first_byte_ms: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_to_last_byte_ms: {
              _: 16,
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
      return `CCloud_ExternalStorageTransferReport_Notification`;
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
            client_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            machine_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            ignore_pending_operations: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            os_type: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            device_type: {
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
      return `CCloud_AppLaunchIntent_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.pending_remote_operations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            pending_remote_operations: {
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
      return `CCloud_AppLaunchIntent_Response`;
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
            client_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            uploads_completed: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            uploads_required: {
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
      return `CCloud_AppExitSyncDone_Notification`;
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
      return `CCloud_ClientGetAppQuotaUsage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.existing_files || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            existing_files: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            existing_bytes: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            max_num_files: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            max_num_bytes: {
              _: 4,
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
      return `CCloud_ClientGetAppQuotaUsage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.file_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            file_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            sha_file: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
            time_stamp: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            raw_file_size: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            persist_state: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            platforms_to_sync: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            path_prefix_index: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            machine_name_index: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reupload_requested: {
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
      return `CCloud_AppFileInfo`;
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
            synced_change_number: {
              _: 2,
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
      return `CCloud_GetAppFileChangelist_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.current_change_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            current_change_number: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            files: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            is_only_delta: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            path_prefixes: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            machine_names: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            app_buildid_hwm: {
              _: 6,
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
      return `CCloud_GetAppFileChangelist_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.url_host || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            url_host: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            url_path: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            use_https: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            http_method: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            request_headers: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            block_offset: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            block_length: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            explicit_body_data: {
              _: 8,
              _: _.readBytes,
              _: _.writeBytes,
            },
            may_parallelize: {
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
      return `ClientCloudFileUploadBlockDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            value: {
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
      return `ClientCloudFileUploadBlockDetails_HTTPHeaders`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null));
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
            machine_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            files_to_upload: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            files_to_delete: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            client_id: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            app_build_id: {
              _: 6,
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
      return `CCloud_BeginAppUploadBatch_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.batch_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            batch_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            app_change_number: {
              _: 4,
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
      return `CCloud_BeginAppUploadBatch_Response`;
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
            batch_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            batch_eresult: {
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
      return `CCloud_CompleteAppUploadBatch_Notification`;
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
            batch_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            batch_eresult: {
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
      return `CCloud_CompleteAppUploadBatch_Request`;
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
      return `CCloud_CompleteAppUploadBatch_Response`;
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
            app_change_number: {
              _: 2,
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
      return `CCloud_AppCloudStateChange_Notification`;
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
            file_size: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            raw_file_size: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_sha: {
              _: 4,
              _: _.readBytes,
              _: _.writeBytes,
            },
            time_stamp: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            filename: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            platforms_to_sync: {
              _: 7,
              _: 4294967295,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cell_id: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            can_encrypt: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            is_shared_file: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            deprecated_realm: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upload_batch_id: {
              _: 13,
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
      return `CCloud_ClientBeginFileUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.encrypt_file || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            encrypt_file: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            block_requests: {
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
      return `CCloud_ClientBeginFileUpload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.transfer_succeeded || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            transfer_succeeded: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_sha: {
              _: 3,
              _: _.readBytes,
              _: _.writeBytes,
            },
            filename: {
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
      return `CCloud_ClientCommitFileUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.file_committed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            file_committed: {
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
      return `CCloud_ClientCommitFileUpload_Response`;
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
            filename: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            realm: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            force_proxy: {
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
      return `CCloud_ClientFileDownload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10], null));
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
            file_size: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            raw_file_size: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sha_file: {
              _: 4,
              _: _.readBytes,
              _: _.writeBytes,
            },
            time_stamp: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            is_explicit_delete: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            url_host: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            url_path: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            use_https: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            request_headers: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            encrypted: {
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
      return `CCloud_ClientFileDownload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            value: {
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
      return `CCloud_ClientFileDownload_Response_HTTPHeaders`;
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
            filename: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            is_explicit_delete: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            upload_batch_id: {
              _: 4,
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
      return `CCloud_ClientDeleteFile_Request`;
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
      return `CCloud_ClientDeleteFile_Response`;
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
            chose_local_files: {
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
      return `CCloud_ClientConflictResolution_Notification`;
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
            client_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            machine_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            cloud_sync_completed: {
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
      return `CCloud_AppSessionSuspend_Request`;
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
      return `CCloud_AppSessionSuspend_Response`;
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
            client_id: {
              _: 2,
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
      return `CCloud_AppSessionResume_Request`;
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
      return `CCloud_AppSessionResume_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
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
      return `CCloud_ClientLogUploadCheck_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.request_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            request_id: {
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
      return `CCloud_ClientLogUploadRequest_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            request_id: {
              _: 2,
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
      return `CCloud_ClientLogUploadComplete_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            file_name: {
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
      return `CCloud_ShareFile_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hcontent || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hcontent: {
              _: 1,
              _: `18446744073709551615`,
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
      return `CCloud_ShareFile_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _) {
    return _.SendNotification(`Cloud.ClientLogUploadCheck#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ClientLogUploadCheck = _;
  function _(_, _) {
    return _.SendNotification(`Cloud.ClientLogUploadComplete#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ClientLogUploadComplete = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.BeginHTTPUpload#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.BeginHTTPUpload = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.CommitHTTPUpload#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.CommitHTTPUpload = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.BeginUGCUpload#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.BeginUGCUpload = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.CommitUGCUpload#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.CommitUGCUpload = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.GetFileDetails#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetFileDetails = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.GetSingleFileInfo#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetSingleFileInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.ShareFile#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ShareFile = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.EnumerateUserFiles#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.EnumerateUserFiles = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.Delete#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.Delete = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.GetClientEncryptionKey#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetClientEncryptionKey = _;
  function _(_, _) {
    return _.SendNotification(`Cloud.CDNReport#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.CDNReport = _;
  function _(_, _) {
    return _.SendNotification(
      `Cloud.ExternalStorageTransferReport#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ExternalStorageTransferReport = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.BeginAppUploadBatch#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.BeginAppUploadBatch = _;
  function _(_, _) {
    return _.SendNotification(`Cloud.CompleteAppUploadBatch#1`, _(_, _), {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.CompleteAppUploadBatch = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.CompleteAppUploadBatchBlocking#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.CompleteAppUploadBatchBlocking = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.ClientBeginFileUpload#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ClientBeginFileUpload = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.ClientCommitFileUpload#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ClientCommitFileUpload = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.ClientFileDownload#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ClientFileDownload = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.ClientDeleteFile#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ClientDeleteFile = _;
  function _(_, _) {
    return _.SendNotification(`Cloud.ClientConflictResolution#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ClientConflictResolution = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.GetAppFileChangelist#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetAppFileChangelist = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.SuspendAppSession#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SuspendAppSession = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.ResumeAppSession#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ResumeAppSession = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.SignalAppLaunchIntent#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SignalAppLaunchIntent = _;
  function _(_, _) {
    return _.SendNotification(`Cloud.SignalAppExitSyncDone#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.SignalAppExitSyncDone = _;
  function _(_, _, _) {
    return _.SendMsg(`Cloud.ClientGetAppQuotaUsage#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.ClientGetAppQuotaUsage = _;
})((_ ||= {}));
var _;
(function (_) {
  ((_.NotifyAppStateChangeHandler = {
    name: `CloudClient.NotifyAppStateChange#1`,
    request: _,
  }),
    (_.ClientLogUploadRequestHandler = {
      name: `CloudClient.ClientLogUploadRequest#1`,
      request: _,
    }));
})((_ ||= {}));
var _ = new _(`GameNotesCloudStore`).Debug;
function _(_) {
  return _.replace(/[!-/:-@ [\\\]^`]/g, `_`);
}
var _ = class {
    FilenameForNotes(_) {
      return `appid` in _
        ? `notes_${Number(_.appid)}`
        : `notes_shortcut_${_(_.shortcut)}`;
    }
    DirectoryForNoteImages(_) {
      return `appid` in _
        ? `notes_${Number(_.appid)}_images/`
        : `notes_shortcut_${_(_.shortcut)}_images/`;
    }
    ParseNotesFileName(_) {
      let _ = _.match(/^notes_shortcut_([^/]+)$/);
      if (_)
        return {
          shortcut: _[1],
        };
      let _ = _.match(/^notes_(\d+)$/);
      if (_ && parseInt(_[1]) < 2147483647)
        return {
          appid: parseInt(_[1]),
        };
    }
    async GetGameNotesList(_) {
      return (await this.InternalLoadNotes(_)).notes.slice();
    }
    NewNote(_, _) {
      let _ = {};
      return (
        `appid` in _ ? (_.appid = _.appid) : (_.shortcut_name = _.shortcut),
        {
          _: Date.now().toString(36),
          ..._,
          ordinal: 0,
          time_created: Math.floor(Date.now() / 1e3),
          time_modified: Math.floor(Date.now() / 1e3),
          title: _,
          content: ``,
          not_persisted: !0,
        }
      );
    }
    async SaveGameNotes(_, _) {
      let _ = {
        notes: _,
      };
      `shortcut` in _ && (_.shortcut_name = _.shortcut);
      let _ = JSON.stringify(_, (_, _) => (_ === `not_persisted` ? void 0 : _));
      return (
        _(`SaveGameNotes`, _),
        await this.WriteNotesFile(this.FilenameForNotes(_), _)
      );
    }
  },
  _ = new _(`GameNotesCloudStore`).Debug,
  _ = class extends _ {
    m_props;
    constructor(_) {
      (super(), (this.m_props = _));
    }
    async GetGamesWithNotes() {
      let _ = [];
      for (let [_, _] of await this.GetFiles()) {
        let _ = this.ParseNotesFileName(_);
        if (!_) continue;
        let _;
        ((_ =
          `appid` in _
            ? {
                appid: _.appid,
              }
            : {
                shortcut_name: _.shortcut,
              }),
          _.push({
            ..._,
            last_modified: _.rtLastModified,
          }));
      }
      return _;
    }
    async UploadImage(_, _) {
      let _ = `${_}${await _(await _.arrayBuffer(), `SHA-1`)}.${_(_)}`;
      if (!(await this.m_props.uploadFile(_, _)))
        throw `There was an error uploading the file`;
      return (this.m_mapCachedImageFiles.set(_, _), _);
    }
    m_mapCachedImageFiles = new Map();
    async ResolveImageURL(_) {
      let _ = this.m_mapCachedImageFiles.get(_);
      if (!_) {
        let _ = await this.GetCloudFileInfo(_);
        if (!_) return;
        ((_ = await this.InternalLoadImageFromCloud(_)),
          this.m_mapCachedImageFiles.set(_, _));
      }
      return URL.createObjectURL(_);
    }
    m_mapFileInfo;
    m_tsFileInfoLoaded = 0;
    m_promiseLoadingNotes;
    async GetFiles() {
      return (
        (!this.m_mapFileInfo ||
          performance.now() - this.m_tsFileInfoLoaded > 9e5) &&
          ((this.m_promiseLoadingNotes ||= this.InternalLoadNotesList()),
          await this.m_promiseLoadingNotes,
          (this.m_promiseLoadingNotes = void 0)),
        this.m_mapFileInfo
      );
    }
    async InternalLoadNotes(_) {
      let _ = this.FilenameForNotes(_),
        _ = await this.GetCloudFileInfo(_),
        _;
      return (
        (_ = _
          ? await this.InternalLoadFileFromCloud(_)
          : {
              notes: [],
            }),
        _
      );
    }
    async WriteNotesFile(_, _) {
      return (this.m_props.uploadFile(_, _), 1);
    }
    async GetCloudFileInfo(_) {
      let _ = (await this.GetFiles()).get(_);
      if (!_) return;
      let _ = _.Init(_);
      (_.Body().set_appid(_), _.Body().set_ugcid(_.ugcid));
      let _ = await _.GetFileDetails(
        this.m_props.steamInterface.GetServiceTransport(),
        _,
      );
      if (!_.BSuccess() || !_.Body().details(!1))
        throw `Error loading cloud file detail: ${_.GetErrorMessage()}`;
      let _ = _.Body().details();
      return (
        _(_.filename() == _, `Asked for ${_} but got ${_.filename()}`),
        {
          strURL: _.url(),
          strSHA: _.file_sha(),
          strFilename: _.filename(),
          ugcid: _.ugcid(),
          rtLastModified: parseInt(_.timestamp()),
          nBytes: _.file_size(),
        }
      );
    }
    async InternalLoadNotesList() {
      let _ = 0,
        _ = !0,
        _ = new Map();
      for (; _;) {
        _(`EnumerateUserFiles for ${_}, starting at ${_}`);
        let _ = _.Init(_);
        (_.Body().set_appid(_),
          _.Body().set_extended_details(!0),
          _.Body().set_start_index(_));
        let _ = await _.EnumerateUserFiles(
          this.m_props.steamInterface.GetServiceTransport(),
          _,
        );
        if (!_.BSuccess())
          throw `Error loading cloud files: ${_.GetErrorMessage()}`;
        _.Body()
          .files()
          .map((_) => ({
            strFilename: _.filename(),
            ugcid: _.ugcid(),
            rtLastModified: parseInt(_.timestamp()),
            nBytes: _.file_size(),
          }))
          .forEach((_) => _.set(_.strFilename, _));
        let _ = _.Body().files().length;
        ((_ += _),
          (_ = _ < _.Body().total_files()),
          _(
            `EnumerateUserFiles complete, loaded ${_ - _}-${_} files of ${_.Body().total_files()} total files ${_ ? `, running another fetch` : ``}`,
          ));
      }
      this.m_mapFileInfo = _;
    }
    async InternalLoadFileFromCloud(_) {
      let _ = await (await fetch(_.strURL)).json();
      if (_) return _;
      throw `Cloud file not found for ${_.strFilename}`;
    }
    async InternalLoadImageFromCloud(_) {
      let _ = await (await fetch(_.strURL)).blob();
      return new File([_], _.strFilename, {
        type: _.type,
      });
    }
  };
function _(_) {
  return {
    appid: _,
  };
}
function _(_) {
  return {
    shortcut: _(_),
  };
}
function _(_) {
  return _.trim();
}
function _(_) {
  return _.appid
    ? {
        appid: _.appid,
      }
    : {
        shortcut: _.shortcut_name,
      };
}
var _ = _(),
  _ = _.createContext({
    mode: `page`,
    store: null,
  });
function _(_) {
  let {
      mode: _,
      store: _,
      closePopup: _,
      bPinnedView: _,
      onClickURL: _,
      bSpellcheckEnabled: _ = !0,
      setSpellcheckEnabled: _,
      children: _,
    } = _,
    _ = _.useMemo(
      () => ({
        mode: _,
        store: _,
        closePopup: _,
        bPinnedView: _,
        onClickURL: _,
        bSpellcheckEnabled: _,
        setSpellcheckEnabled: _,
      }),
      [_, _, _, _, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_).mode == `single`;
}
function _() {
  return _.useContext(_).closePopup;
}
function _() {
  return _.useContext(_).store;
}
function _() {
  return _.useContext(_).bPinnedView;
}
function _() {
  return _.useContext(_).onClickURL;
}
function _() {
  return _.useContext(_).bSpellcheckEnabled ?? !0;
}
function _() {
  return _.useContext(_).setSpellcheckEnabled;
}
var _ = new _(`GameNotesCloudStore`).Debug;
function _() {
  let _ = _();
  return _({
    queryKey: [`GameNotes`, `GamesWithNotes`],
    queryFn: () => _.GetGamesWithNotes(),
    staleTime: 6e5,
  });
}
function _(_) {
  return `appid` in _
    ? [`GameNotes`, `NotesByAppID`, _.appid]
    : [`GameNotes`, `NotesForShortcut`, _(_.shortcut)];
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => (await _.GetGameNotesList(_)) || [],
    staleTime: 18e4,
    refetchInterval: 9e5,
    enabled: !!_,
    structuralSharing: !0,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(_);
  return _({
    scope: {
      _: `${`appid` in _ ? _.appid : _.shortcut_name}_${_._}`,
    },
    mutationFn: async (_) => {
      let { title: _, bbcode: _ } = _;
      _(`Saving note ${_}`);
      let _ = await _.fetchQuery(_(_, _));
      if (!_) throw `Failed to load notes for ${JSON.stringify(_)}`;
      let _ = _.find((_) => _._ == _._),
        _ = {
          ...(_ ?? {}),
          ..._,
          title: _,
          content: _,
          time_modified: Math.floor(Date.now() / 1e3),
        },
        _;
      _ = _ ? _.map((_) => (_._ == _._ ? _ : _)) : [..._, _];
      let _ = await _.SaveGameNotes(_, _);
      if (_ != 1) throw `Error saving notes: ${_}`;
      return _;
    },
    onMutate(_) {
      let _ = {
        ..._,
        title: _.title,
        content: _.bbcode,
      };
      return (_(_, _, (_) => _.map((_) => (_._ == _._ ? _ : _))), _);
    },
    onSuccess(_, _, _) {
      _.setQueryData(_(_), _);
    },
    onError(_) {
      _(_.message || _.name);
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _.useCallback(() => {
    let _ = _(`#UserGameNotes_UntitledNote_Title`),
      _ = _.NewNote(_, _);
    return (_(_, _, (_) => [..._, _]), _._);
  }, [_, _, _]);
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(_);
  return _({
    mutationFn: async () => {
      if (_.not_persisted) return;
      let _ = await _.fetchQuery(_(_, _));
      if (!_) throw `Failed to load notes for ${JSON.stringify(_)}`;
      let _ = _.filter((_) => _._ != _._);
      return (await _.SaveGameNotes(_, _), _);
    },
    onSuccess: (_) => {
      (_ && _.setQueryData(_(_), _), _ && _());
    },
  });
}
function _(_, _, _) {
  _.setQueryData(_(_), (_) => _ && _(_));
}
function _(_, _) {
  return _.useMemo(() => (_ ? _(_) : _(_)), [_, _]);
}
var _ = _.nodes.image,
  _ = {
    nodes: {
      ..._.nodes,
      cloudimage: {
        ..._,
        parseDOM: [],
        bbCode: {
          ..._.bbCode,
          tag: `cloudimg`,
        },
      },
    },
    marks: {
      ..._.marks,
    },
  },
  _ = new _(_),
  _ = _(_());
function _(_) {
  let {
      schema: _,
      view: _,
      refUpdateToolbar: _,
      className: _,
      bSpellcheckEnabled: _ = !1,
      setSpellcheckEnabled: _,
    } = _,
    [_, _] = _(`FormattingToolbar_Expanded`, !1);
  return (0, _.jsx)(_, {
    refUpdateToolbar: _,
    view: _,
    children: (0, _.jsxs)(`div`, {
      className: _(void 0, _),
      children: [
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              schema: _,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              onClick: () => _(!_),
              tooltip: _(`#FormattingToolbar_ExpandOptions`),
              children: (0, _.jsx)(_, {
                direction: _ ? `up` : `down`,
              }),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          visible: _,
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                schema: _,
              }),
              (0, _.jsx)(_, {
                schema: _,
                levels: 5,
              }),
              (0, _.jsx)(_, {
                nodeType: _.nodes.code_block,
                tooltip: _(`#FormattingToolbar_CodeBlock`),
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                schema: _,
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                schema: _,
              }),
              (0, _.jsx)(_, {}),
              _ &&
                (0, _.jsx)(_, {
                  bSpellcheckEnabled: _,
                  setSpellcheckEnabled: _,
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
var _ = `-XvFTdkdiiE-`,
  _ = `aJA9DmU-q6Q-`,
  _ = `OEdv4TCAhEw-`,
  _ = `Zb5eJWEsiSs-`,
  _ = `kkukKS4eyUo-`,
  _ = `bWixMx68CWM-`,
  _ = `_5QrKjkgDQ0Y-`;
function _(_) {
  let { deleteNote: _, hidden: _, pmState: _ } = _,
    [_, _] = _.useState(null),
    _ = _.useRef(void 0),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = {
      onSecondaryButton: () => _(),
      onSecondaryActionDescription: _(`#UserGameNotes_DeleteNote`),
      onDragOver: (_) => _.stopPropagation(),
    };
  return (
    _.useEffect(() => {
      _ &&
        !_ &&
        (_.IN_CLIENT || !window.matchMedia(`(max-width: 500px)`).matches) &&
        _.focus();
    }, [_, _]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        !_ &&
          (0, _.jsx)(_, {
            schema: _.pm_schema,
            view: _,
            refUpdateToolbar: _,
            className: `_3NCAPa1mmWE-`,
            bSpellcheckEnabled: _,
            setSpellcheckEnabled: _,
          }),
        (0, _.jsx)(_, {
          pmState: _,
          className: _,
          refOnUpdate: _,
          refView: _,
          bSpellcheckEnabled: _,
          panelProps: _,
          children: (0, _.jsx)(_, {
            schema: _.pm_schema,
          }),
        }),
      ],
    })
  );
}
var _ = _.memo(function (_) {
  let { schema: _ } = _,
    _ = _(),
    _ = _.useMemo(
      () => [
        {
          type: _.nodes.cloudimage,
          component: _,
          readProps: (_) => ({
            src: _.attrs.src,
          }),
        },
      ],
      [_.nodes.cloudimage],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        nodeType: _.nodes.image,
      }),
      (0, _.jsx)(_, {
        linkMarkType: _.marks.link,
        schema: _,
        onClickURL: _,
      }),
      (0, _.jsx)(_, {
        specs: _,
      }),
    ],
  });
});
function _(_) {
  let { src: _, selected: _ } = _,
    [_, _] = _.useState(),
    _ = _();
  return (
    _.useEffect(() => {
      let _ = !1;
      return (
        _.ResolveImageURL(_).then((_) => {
          _ ? URL.revokeObjectURL(_) : _(_);
        }),
        () => {
          ((_ = !0), _(void 0));
        }
      );
    }, [_, _]),
    _
      ? (0, _.jsx)(`img`, {
          className: (0, _.default)(_, _ && `ProseMirror-selectednode`),
          src: _,
        })
      : null
  );
}
var _ = 10;
function _(_) {
  let { note: _, hidden: _ = !1 } = _,
    [_, _] = _.useState(void 0),
    _ = _.useRef(!1),
    _ = _(),
    { mutate: _ } = _(_, _),
    [_, _] = _.useState();
  _.useEffect(() => {
    if (!_.current) {
      let _ = new _(_, _.content, (_, _) =>
        _({
          title: _(_),
          bbcode: _,
        }),
      );
      (_(_, _.pm_schema), _(_));
    }
  }, [_, _.content]);
  let { bDirty: _ } = _(_, {
    msAutosaveTimeout: _ * 1e3,
  });
  (_.useEffect(() => {
    _ &&
      !_.current &&
      ((_.current = !0), _.ReportTrackedAction(`/GameNotes/NoteModified`));
  }, [_]),
    _.useEffect(() => {
      _ && _ && _.CommitChanges();
    }, [_, _]));
  let _ = _().ownerWindow;
  (_(
    _.document,
    _.useCallback(
      (_) => {
        _ == `hidden` && _ && _.CommitChanges();
      },
      [_],
    ),
  ),
    _(
      window,
      `beforeunload`,
      _.useCallback(
        (_) => {
          !_.IN_STEAMUI &&
            _.BHasUncomittedChanges() &&
            (_.CommitChanges(), _.preventDefault());
        },
        [_],
      ),
    ));
  let _ = _(_.appid, _.pm_schema),
    _ = _(_, _());
  return (0, _.jsx)(_, {
    ProcessFileUpload: _,
    bAllowImageHotLinking: !0,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          error: _,
          dismissError: () => _(void 0),
        }),
        (0, _.jsx)(_, {
          deleteNote: _.mutate,
          hidden: _,
          pmState: _,
        }),
        !_ &&
          (0, _.jsx)(_, {
            note: _,
            bDirty: _,
          }),
      ],
    }),
  });
}
function _(_, _) {
  let _ = _();
  return _.useCallback(
    async (_) => {
      let _ = await _.UploadImage(`notes_${_}_images/`, _);
      return _.nodes.cloudimage.create({
        src: _,
      });
    },
    [_, _, _],
  );
}
function _(_) {
  let { error: _, dismissError: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        active: !0,
        children: (0, _.jsx)(_, {
          bAlertDialog: !0,
          strTitle: _(`#Error_Generic`),
          strDescription: _(`#UserGameNotes_ErrorSavingNotes`, _),
          closeModal: _,
        }),
      })
    : null;
}
function _(_) {
  let { note: _, bDirty: _ } = _,
    [_, _, _] = _(!1),
    _ = _(),
    { mutate: _, isPending: _ } = _(_, _()),
    _ = _.useCallback(() => {
      !_ && _.not_persisted ? _() : _();
    }, [_, _, _, _]);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          note: _,
          closeModal: _,
          deleteNote: _,
          deletePending: _,
        }),
      (0, _.jsx)(_, {
        toolTipContent: _(`#UserGameNotes_DeleteNote`),
        direction: `top`,
        children: (0, _.jsx)(_, {
          onClick: _,
          children: (0, _.jsx)(_, {}),
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          bDirty: _,
        }),
    ],
  });
}
function _(_) {
  let { bDirty: _ } = _,
    _ = _();
  return _
    ? (0, _.jsx)(_, {
        onClick: () => _(),
        className: _,
        children: _(`#Button_SaveAndClose`),
      })
    : (0, _.jsx)(_, {
        onClick: () => _(),
        className: _,
        children: _(`#Button_Close`),
      });
}
function _(_) {
  let { note: _, closeModal: _, deleteNote: _, deletePending: _ } = _;
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _(`#UserGameNotes_DeleteNote`),
      strDescription: _(`#UserGameNotes_PromptDelete`),
      onOK: () => _(),
      bOKDisabled: _,
      strOKButtonText: _(`#Button_Delete`),
      closeModal: _,
    }),
  });
}
function _(_) {
  let _ = ``;
  for (let _ = 0; _ < _.content.childCount; _++) {
    let _ = _.content.child(_);
    if (_.isText) _ += _.text;
    else if (((_ = _.trim()), _.length > 4 || ((_ = _(_)), _.length > 4)))
      return _;
  }
  return _.trim();
}
function _(_, _) {
  _.UpdateState((_) => {
    let _ = [];
    if (
      (_.doc.descendants((_, _) => {
        _.type === _.nodes.image &&
          _.attrs.src?.match(/^\/gamenotes\//) &&
          _.push({
            node: _,
            pos: _,
          });
      }),
      _.length)
    )
      return (
        _.reverse().forEach(({ node: _, pos: _ }) => {
          let _ = _.attrs.src.replace(/^\/gamenotes\//, ``),
            _ = _.nodes.cloudimage.create({
              src: _,
            });
          _ = _.replaceWith(_, _ + _.nodeSize, _);
        }),
        _.setMeta(`addToHistory`, !1),
        _
      );
  });
}
var _ = _(_()),
  _,
  _ = 864e5;
function _(_) {
  return `appinfo_${_}_${_.LANGUAGE}`;
}
function _(_) {
  return !!(_ && Date.now() - _.timeCached < _);
}
function _(_, _) {
  return (
    (_ ||= new _.default(
      async (_) => {
        let _ = new Map();
        (await Promise.all(_.map((_) => _.GetObject(_(_)))))
          .filter(_)
          .forEach(({ value: _ }) => _.set(_.appid, _));
        let _ = _.slice().filter((_) => !_.has(_));
        if (_.length) {
          let _ = _.Init(_);
          (_.Body().set_language(_(_.LANGUAGE)), _.Body().set_appids(_));
          let _ = await _.GetApps(_, _);
          if (_.GetEResult() != 1) throw _.GetErrorMessage();
          _.Body()
            .toObject()
            .apps.forEach((_) => {
              (_.StoreObject(_(_.appid), {
                timeCached: Date.now(),
                value: _,
              }),
                _.set(_.appid, _));
            });
        }
        return _.map((_) => _.get(_));
      },
      {
        cache: !1,
      },
    )),
    _
  );
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    queryKey: [`appinfo`, _],
    queryFn: async () => _(_, _).load(_),
    staleTime: _,
    enabled: !!_,
  }).data;
}
function _(_) {
  let { bStandalonePage: _ } = _,
    _ = _(),
    _ = _(
      `appid` in _.params && Number(_.params.appid),
      `shortcut_name` in _.params && _.params.shortcut_name,
    ),
    _ = _(),
    _ = _(_),
    _ = _.useRef(void 0),
    { data: _ } = _(_),
    _,
    _ = !1;
  if (_) {
    let _ = _.params.noteid || _.current;
    (_ && ((_ = _.find((_) => _._ === _)), !_ && _.params.noteid && (_ = !0)),
      (_ ||= _[0]));
  }
  (_ && (_.current = _._),
    _.useEffect(() => {
      _ && _.length == 0 && _(_, _(), !0);
    }, [_, _, _, _]),
    _.useEffect(() => {
      _ && _(_, void 0, !0);
    }, [_, _, _]));
  let _ = (0, _.jsx)(_, {
    toolTipContent: _(`#UserGameNotes_NewNote`),
    direction: `top`,
    children: (0, _.jsx)(_, {
      className: _,
      onClick: () => {
        let _ = _();
        _(_, _);
      },
      children: (0, _.jsx)(_, {}),
    }),
  });
  return _
    ? (0, _.jsx)(_, {
        noteParent: _,
        notes: _,
        activeNoteID: _?._,
        actions: _,
        bStandalonePage: _,
      })
    : null;
}
function _(_) {
  let {
      noteParent: _,
      notes: _,
      activeNoteID: _,
      actions: _,
      bStandalonePage: _,
    } = _,
    [_, _] = _(`NotesListCollapsed`, !1),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_.params.noteid || _ ? `ActivePage` : `PageList`),
    _ = _.map((_) => ({
      title: _.title?.length ? _.title : _(`#UserGameNotes_Untitled`),
      identifier: _._,
      content: (0, _.jsx)(_, {
        noteParent: _,
        note: _,
      }),
      pageClassName: _,
      hideTitle: !0,
    })),
    _ = _(),
    _ = _.useCallback((_) => _(_, _), [_, _]),
    _ = _.IN_STEAMUI
      ? _(`#UserGameNotes_NotesList`)
      : (0, _.jsx)(_, {
          noteParent: _,
        });
  return _ && _
    ? (0, _.jsx)(_, {
        title: _,
        pages: _,
        className: _(_, _ && `RhdVkvwKgIg-`, _),
        page: _,
        onPageRequested: _,
        bottomControls: _,
        hideList: _,
        toggleHideList: _ || _ ? void 0 : () => _(!_),
      })
    : (0, _.jsx)(_, {
        title: _,
        pages: _,
        className: _(_, _ && `RhdVkvwKgIg-`, _),
        page: _,
        onPageRequested: _,
        bottomControls: _,
        hideList: _,
        toggleHideList: _ || _ ? void 0 : () => _(!_),
      });
}
function _(_) {
  let { noteParent: _ } = _,
    _ = _(`appid` in _ ? _.appid : void 0),
    _;
  return (
    (_ = `appid` in _ ? _?.name : _.shortcut),
    (0, _.jsx)(_.Fragment, {
      children: _(`#UserGameNotes_NotesForGame`, _),
    })
  );
}
function _(_) {
  let { noteParent: _, note: _ } = _,
    _ = _(),
    _ = _(),
    _ = _.useCallback(() => _(_), [_, _]),
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          onActivate: _,
        }),
      (0, _.jsx)(_, {
        note: _,
        hidden: !_,
      }),
    ],
  });
}
function _(_ = !1) {
  let _ = _(),
    _ = _(),
    _ = _ || _;
  return _.useCallback(
    (_, _, _ = _) => {
      let _;
      ((_ =
        `appid` in _ ? _.AppNotes(_.appid, _) : _.ShortcutNotes(_.shortcut, _)),
        _ ? _.replace(_, _.location.state) : _.push(_, _.location.state));
    },
    [_, _],
  );
}
function _() {
  let { data: _, isLoading: _ } = _(),
    _ = _.useMemo(
      () => _?.slice().sort((_, _) => _.last_modified - _.last_modified),
      [_],
    );
  return _
    ? (0, _.jsx)(_, {
        msDelayAppear: 300,
      })
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`h1`, {
            children: _(`#UserGameNotes_NotesList`),
          }),
          (0, _.jsx)(`ul`, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  game: _,
                },
                _.appid || _.shortcut_name,
              ),
            ),
          }),
        ],
      });
}
function _(_) {
  let { game: _ } = _;
  return (0, _.jsx)(`li`, {
    children: (0, _.jsx)(_, {
      _: _(
        _.appid
          ? {
              appid: _.appid,
            }
          : {
              shortcut: _.shortcut_name,
            },
      ),
      children: _.appid
        ? (0, _.jsx)(_, {
            appid: _.appid,
          })
        : _.shortcut_name,
    }),
  });
}
function _(_) {
  let { appid: _ } = _;
  return _(_)?.name;
}
function _(_, _, _ = {}) {
  let { bIsPublic: _ = !0 } = _,
    _ = {
      unAppID: _,
      strMachineName: _,
      bIsPublic: _,
    },
    _ = _();
  return _({
    mutationFn: async ({ files: _ }) =>
      await _(
        _,
        _,
        _.map((_) => _.filename),
        async (_) =>
          !(await Promise.all(_.map((_) => _(_, _, _, _)))).some((_) => !_),
      ),
  });
}
async function _(_, _, _, _) {
  let _ = await _(_, _, _);
  if (!_) return !1;
  let _ = !1;
  try {
    _ = await _(_);
  } finally {
    _(_, _, _, _);
  }
  return !0;
}
async function _(_, _, _) {
  let _ = _.Init(_);
  (_.Body().set_appid(_.unAppID),
    _.Body().set_machine_name(_.strMachineName),
    _.Body().set_files_to_upload(_.slice()));
  let _ = await _.BeginAppUploadBatch(_, _);
  if (!_.BSuccess())
    throw `Error in BeginAppUploadBatch: ${_.GetErrorMessage()}`;
  return _.Body().batch_id();
}
function _(_, _, _, _) {
  let _ = _.Init(_);
  (_.Body().set_appid(_.unAppID),
    _.Body().set_batch_id(_),
    _.Body().set_batch_eresult(_ ? 1 : 2),
    _.CompleteAppUploadBatch(_, _));
}
async function _(_, _, _, _) {
  let _, _;
  ((_ =
    _.content instanceof File
      ? await _.content.arrayBuffer()
      : new TextEncoder().encode(_.content).buffer),
    (_ = await _(_, `SHA-1`)));
  let _ = await _(_, _, _, _.filename, _.byteLength, _),
    _ = `https://${_.url_host}${_.url_path}`,
    _ = !1;
  try {
    let _ = _.request_headers.map(({ name: _, value: _ }) => [_, _]);
    _ = (
      await fetch(_, {
        method: `PUT`,
        headers: _,
        mode: `cors`,
        body: _.content,
      })
    )._;
  } catch {}
  return await _(_, _, _.filename, _, _);
}
async function _(_, _, _, _, _, _) {
  let _ = _.Init(_);
  (_.Body().set_appid(_.unAppID),
    _.Body().add_platforms_to_sync(`All`),
    _.Body().set_upload_batch_id(_),
    _.Body().set_is_public(_.bIsPublic),
    _.Body().set_filename(_),
    _.Body().set_file_size(_),
    _.Body().set_file_sha(_));
  let _ = await _.BeginHTTPUpload(_, _);
  if (!_.BSuccess()) throw `Error in BeginHTTPUpload: ${_.GetErrorMessage()}`;
  return _.Body().toObject();
}
async function _(_, _, _, _, _) {
  let _ = _.Init(_);
  (_.Body().set_appid(_.unAppID),
    _.Body().set_transfer_succeeded(_),
    _.Body().set_filename(_),
    _.Body().set_file_sha(_));
  let _ = await _.CommitHTTPUpload(_, _);
  if (!_.BSuccess()) throw `Error in CommitHTTPUpload: ${_.GetErrorMessage()}`;
  return _.Body().file_committed();
}
function _(_) {
  let _ = _();
  return (0, _.jsx)(_, {
    mode: `page`,
    store: _,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          path: _.List(),
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(_, {
          path: _.AppNotes(`:appid`, `:noteid?`),
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            _: `${_.List()}`,
          }),
        }),
      ],
    }),
  });
}
function _() {
  let _ = _(),
    { mutateAsync: _ } = _(_, `Steam Community Web Interface`, {
      bIsPublic: !0,
    }),
    _ = _.useCallback(
      (_, _) =>
        _({
          files: [
            {
              filename: _,
              content: _,
            },
          ],
        }),
      [_],
    ),
    _ = _.useRef({
      steamInterface: _,
      uploadFile: _,
    });
  _.current.uploadFile = _;
  let [_] = _.useState(() => new _(_.current));
  return _;
}
export { _ as default };
