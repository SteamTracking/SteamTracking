const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./chunk~b792617135.js",
      "./chunk~01cfc309bf.js",
      "./chunk~f025431ab0.js",
      "./main.js",
      "../../../css/applications/community/chunk~bcf59b1f6b.css",
    ]),
) => _.map((_) => _[_]);
import { _, _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~7b8a87bd30.js";
import { _ } from "./chunk~92931c6310.js";
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
} from "./chunk~95ecbf576c.js";
import { _ } from "./chunk~c55d6473b2.js";
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
} from "./main.js";
import { _ } from "./chunk~06da9a7953.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.representation_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, [11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            representation_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            horizontal_resolution: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            vertical_resolution: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            frame_rate: {
              _: 5,
              _: _.readDouble,
              _: _.writeDouble,
            },
            bandwidth: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            audio_sample_rate: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            frame_rate_string: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            codec: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            audio_channel_config: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            segment_info: {
              _: 11,
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
      return `CMsgVideoGameRecordingRepresentation`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.component_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            component_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            contents: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            segment_size: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_type: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            representations: {
              _: 5,
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
      return `CMsgVideoGameRecordingComponent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7], null));
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            app_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_segments: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            length_milliseconds: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            segment_duration_timescale: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            segment_duration: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            components: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            start_time_ms: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            start_offset_in_timeline_ms: {
              _: 9,
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
      return `CMsgVideoGameRecordingDef`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.segment_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            segment_number: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            segment_size_bytes: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            component_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            representation_name: {
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
      return `CVideo_GameRecordingSegmentInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.segment_info || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            segment_info: {
              _: 1,
              _: _,
            },
            url_host: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            url_path: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            use_https: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            request_headers: {
              _: 5,
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
      return `CVideo_GameRecordingSegmentUploadInfo`;
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
      return `CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.video_manager_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            video_manager_clip_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            video_manager_video_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            server_timeline_id: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            manifest_url: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            duration_ms: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            start_offset_ms: {
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
      return `CVideoManagerClipID`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gameid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            date_recorded: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_file_size_bytes: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            video_ids: {
              _: 9,
              _: _,
              _: !0,
              _: !0,
            },
            owner_steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            upload_complete: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            duration_ms: {
              _: 12,
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
      return `CGameRecordingClip`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip: {
              _: 2,
              _: _,
            },
            video_def: {
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
      return `CGameRecording_CreateShareClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip: {
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
      return `CGameRecording_CreateShareClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
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
      return `CGameRecording_DeleteSharedClip_Request`;
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
      return `CGameRecording_DeleteSharedClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
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
      return `CGameRecording_GetSingleSharedClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip: {
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
      return `CGameRecording_GetSingleSharedClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recording_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            component_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            representation_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            segments_to_store: {
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
      return `CVideo_BeginGameRecordingSegmentsUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.segments_needed || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            segments_needed: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            call_again: {
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
      return `CVideo_BeginGameRecordingSegmentsUpload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recording_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            component_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            representation_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            first_segment_number: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_segments: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upload_result: {
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
      return `CVideo_CommitGameRecordingSegmentsUpload_Request`;
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
      return `CVideo_CommitGameRecordingSegmentsUpload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recording_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_id: {
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
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.segments_needed || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            segments_needed: {
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
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recording_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            segments_uploaded: {
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
      return `CVideo_GameRecordingCommitSegmentUploads_Request`;
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
      return `CVideo_GameRecordingCommitSegmentUploads_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`GameRecordingClip.CreateShareClip#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.CreateShareClip = _;
  function _(_, _, _) {
    return _.SendMsg(`GameRecordingClip.DeleteSharedClip#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.DeleteSharedClip = _;
  function _(_, _, _) {
    return _.SendMsg(`GameRecordingClip.GetSingleSharedClip#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetSingleSharedClip = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `VideoClip.BeginGameRecordingSegmentsUpload#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.BeginGameRecordingSegmentsUpload = _;
  function _(_, _, _) {
    return _.SendMsg(
      `VideoClip.CommitGameRecordingSegmentsUpload#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.CommitGameRecordingSegmentsUpload = _;
  function _(_, _, _) {
    return _.SendMsg(
      `VideoClip.GetNextBatchOfSegmentsToUpload#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.GetNextBatchOfSegmentsToUpload = _;
  function _(_, _, _) {
    return _.SendMsg(`VideoClip.CommitSegmentUploads#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.CommitSegmentUploads = _;
})((_ ||= {}));
var _ = new _(`GR`);
function _(_) {
  return (..._) => {
    _(`[${(performance.now() / 1e3).toFixed(3)}]`, ..._);
  };
}
var _ = _(_.Debug),
  _ = _(_.Info),
  _ = _(_.Warning),
  _ = _(_.Error),
  _ = _;
function _() {
  return _.IsDebugEnabled();
}
var _ = `steam_`,
  _ = (function (_) {
    return (
      (_[(_.White = 0)] = `White`),
      (_[(_.Red = 1)] = `Red`),
      (_[(_.Orange = 2)] = `Orange`),
      (_[(_.Yellow = 3)] = `Yellow`),
      (_[(_.Green = 4)] = `Green`),
      (_[(_.Blue = 5)] = `Blue`),
      (_[(_.Purple = 6)] = `Purple`),
      (_[(_.Brown = 7)] = `Brown`),
      (_[(_.Gray = 8)] = `Gray`),
      _
    );
  })({});
function _(_) {
  switch (_) {
    default:
    case 0:
      return `#DCDEDF`;
    case 1:
      return `#FB7C7C`;
    case 2:
      return `#FBB17C`;
    case 3:
      return `#FBDF7C`;
    case 4:
      return `#9DFB7C`;
    case 5:
      return `#7CD5FB`;
    case 6:
      return `#A57CFB`;
    case 7:
      return `#C18C5B`;
    case 8:
      return `#B8BCBF`;
  }
}
function _(_) {
  return Object.keys(_).filter((_) => !Number.isNaN(_));
}
var _ = _(_).map((_) => _[_]),
  _ = class _ {
    m_mapSteamTimelineMarkers = new Map();
    GetMarkerByID(_) {
      let _ = _.toLowerCase().startsWith(`steam_`)
          ? _.slice(6).toLowerCase()
          : _.toLowerCase(),
        _ = this.m_mapSteamTimelineMarkers.get(_);
      if (_) return _;
      let _ = parseInt(_);
      return typeof _ == `number` && _ >= 0 && _ <= 99
        ? {
            func: (_) =>
              _({
                nNumber: _,
              }),
            color: 8,
          }
        : _();
    }
    GetAllUseableMarkerID() {
      return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
        (_) => _ + _,
      );
    }
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    AddMarker(_, _, _) {
      let _ = _ ?? 0;
      this.m_mapSteamTimelineMarkers.set(_, {
        func: _,
        color: _,
      });
      for (let _ of _) {
        let _ = `${_}_${_[_]}`.toLowerCase();
        this.m_mapSteamTimelineMarkers.set(_, {
          func: _,
          color: _,
        });
      }
    }
    Init() {
      (this.AddMarker(`explosion`, _, 8),
        this.AddMarker(`attack`, _, 8),
        this.AddMarker(`defend`, _, 8),
        this.AddMarker(`combat`, _, 8),
        this.AddMarker(`chest`, _, 8),
        this.AddMarker(`view`, _, 8),
        _() ? this.AddMarker(`death`, _, 8) : this.AddMarker(`death`, _, 8),
        this.AddMarker(`x`, _, 8),
        this.AddMarker(`plus`, _, 8),
        this.AddMarker(`minus`, _, 8),
        this.AddMarker(`info`, _, 8),
        this.AddMarker(`bolt`, _, 8),
        this.AddMarker(`caution`, _, 8),
        this.AddMarker(`completed`, _, 8),
        this.AddMarker(`checkmark`, _, 8),
        this.AddMarker(`effect`, _, 8),
        this.AddMarker(`purchase`, _, 8),
        this.AddMarker(`ribbon`, _, 8),
        this.AddMarker(`scroll`, _, 8),
        this.AddMarker(`crown`, _, 8),
        this.AddMarker(`starburst`, _, 8),
        this.AddMarker(`flag`, _, 8),
        this.AddMarker(`cart`, _, 8),
        this.AddMarker(`timer`, _, 8),
        this.AddMarker(`chat`, _, 8),
        this.AddMarker(`wrench`, _, 8),
        this.AddMarker(`transfer`, _, 8),
        this.AddMarker(`edit`, _, 8),
        this.AddMarker(`bookmark`, _, 8),
        this.AddMarker(`invalid`, _, 8),
        this.AddMarker(`star`, _, 8),
        this.AddMarker(`circle`, _, 8),
        this.AddMarker(`square`, _, 8),
        this.AddMarker(`triangle`, _, 8),
        this.AddMarker(`heart`, _, 8),
        this.AddMarker(`diamond`, _, 8),
        this.AddMarker(`gem`, _, 8),
        this.AddMarker(`group`, _, 8),
        this.AddMarker(`pair`, _, 8),
        this.AddMarker(`single`, _, 8),
        this.AddMarker(`trophy`, _, 8),
        this.AddMarker(`achievement`, _, 8),
        this.AddMarker(`screenshot`, _, 8),
        this.AddMarker(`bug`, _, 8),
        this.AddMarker(`fix`, _, 8),
        this.AddMarker(`person`, _, 8),
        this.AddMarker(`question`, _, 8));
    }
  };
function _(_) {
  return _.Get().GetMarkerByID(_);
}
function _() {
  return {
    func: _,
    color: 5,
  };
}
function _() {
  return {
    func: _,
    color: 0,
  };
}
function _() {
  return {
    func: _,
    color: 8,
  };
}
function _(_) {
  return _ && _.toLowerCase().startsWith(`steam_`);
}
var _ = null;
function _(_) {
  _
    ? console.error(`Attempt to set timeline marker hook a second time`)
    : (_ = _);
}
function _(_, _) {
  return _
    ? _(_, _)
    : (console.error(
        `useGameMarkerFromID called in a context where the hook isn't defined.`,
      ),
      null);
}
function _() {
  return window.g_GRS;
}
async function _(_, _, _) {
  if (!_()) {
    let [{ CGameRecordingStore: _ }] = await Promise.all([
      _(
        () => import(`./chunk~b792617135.js`),
        __vite__mapDeps([0, 1, 2, 3, 4]),
        import.meta.url,
      ),
    ]);
    _ && _(_);
    let _ = new _();
    (await _.Init(_, _), (window.g_GRS = _));
  }
}
function _() {
  if (_() != null) {
    let _ = _();
    return {
      bLoading: _.BLoadingAppsWithBackgroundVideo(),
      rgApps: _.GetAppsWithBackgroundVideo(),
    };
  }
  return {
    bLoading: !1,
    rgApps: [],
  };
}
function _() {
  let [_, _] = (0, _.useState)(_());
  return ((0, _.useEffect)(() => _(_, _), []), _);
}
function _(_) {
  let { bLoading: _, rgApps: _ } = _();
  return {
    bLoading: _,
    app: (0, _.useMemo)(() => _.find((_) => _.game_id === _), [_, _]),
  };
}
function _(_) {
  return _().GetTimelineLoaderForSharedClip(_);
}
function _(_) {
  return (_() != null && _ && _().GetClipSummariesForGame(_)) || [];
}
function _(_, _, _, _, _, _) {
  return _() == null ? null : _().LoadThumbnails(_, _, _, _, _, _ ?? !0);
}
function _() {
  return _() == null
    ? {}
    : {
        fnSaveClip: _().SaveClip,
      };
}
function _() {
  return _() == null
    ? {}
    : {
        fnDeleteClip: _().DeleteClip,
      };
}
function _(_, _, _, _) {
  return _() == null ? null : _().TakeScreenshot(_, _, _.valMS, _);
}
function _() {
  return _() == null
    ? null
    : {
        fnCreateUserTimelineMarkers: _().CreateUserTimelineMarkers,
        fnUpdateUserTimelineMarkers: _().UpdateUserTimelineMarkers,
        fnRemoveUserTimelineMarker: _().RemoveUserTimelineMarker,
      };
}
function _(_, _) {
  return _(() => {
    if (_() != null) return _().GetAchievementInfo(_, _);
  });
}
function _(_, _, _, _, _) {
  return _().ReportClipRange(_, _, _, _, _);
}
function _() {
  return _(() => {
    if (_() != null) return !_().BEnoughDiskSpace();
  });
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.timeline_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timeline_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            date_recorded: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            duration_ms: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            recordings: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            phases: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            significant_events: {
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
      return `CGameRecordingTimelineMetadata`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recording_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            start_offset_ms: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            recording_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            delete_on_cleanup: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            video_manager_clip_id: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            video_manager_video_id: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            cdn_manifest_url: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            file_size: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            recording_zero_timeline_offset_ms: {
              _: 10,
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
      return `CGameRecordingTimelineMetadata_Recording`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            rt_created: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            possible_clip: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            timeline_id: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            entry_id: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timeline_offset_ms: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            marker_icon: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            marker_title: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            user_marker: {
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
      return `CGameRecordingTimelineEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.phase_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 7, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            phase_id: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            duration_ms: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            tags: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            contained_tags: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            background_timeline_offset: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            attributes: {
              _: 9,
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
      return `CGameRecordingPhase`;
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
            group: {
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
      return `CGameRecordingPhase_Tag`;
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
            group: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            icon: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            priority: {
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
      return `CTimelineTag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.group || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            group: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            value: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            priority: {
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
      return `CPhaseAttribute`;
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
      return `CGameRecording_GetAppsWithBackgroundVideo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apps: {
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
      return `CGameRecording_GetAppsWithBackgroundVideo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            most_recent_start_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            recording_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            video_duration_seconds: {
              _: 4,
              _: _.readDouble,
              _: _.writeDouble,
            },
            timeline_duration_seconds: {
              _: 5,
              _: _.readDouble,
              _: _.writeDouble,
            },
            is_active: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            file_size: {
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
      return `CGameRecording_GetAppsWithBackgroundVideo_Response_App`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_GetTimelinesForApp_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.timelines || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timelines: {
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
      return `CGameRecording_GetTimelinesForApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
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
      return `CGameRecording_GetTimelinesForClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timelines: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            first_timeline_start_offset_ms: {
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
      return `CGameRecording_GetTimelinesForClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.page || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            page: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            filter_gameid: {
              _: 10,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            filter_search_string: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            filter_tags: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            filter_phase_id: {
              _: 13,
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
      return `CGameRecording_QueryPhases_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.group || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            group: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CGameRecording_QueryPhases_Request_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.phases || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            phases: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_count: {
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
      return `CGameRecording_QueryPhases_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7, 8, 10, 13, 16, 17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            date_recorded: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            duration_ms: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            tags: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            contained_tags: {
              _: 8,
              _: _,
              _: !0,
              _: !0,
            },
            background_recording: {
              _: 9,
              _: _,
            },
            clip_ids: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            type: {
              _: 11,
              _: _.readEnum,
              _: _.writeEnum,
            },
            start_ms: {
              _: 12,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            screenshots: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            active: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            phase_id: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            significant_events: {
              _: 16,
              _: _,
              _: !0,
              _: !0,
            },
            attributes: {
              _: 17,
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
      return `CGameRecording_QueryPhases_Response_Phase`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.timeline_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timeline_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            offset: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
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
      return `CGameRecording_QueryPhases_Response_Phase_BackgroundRecording`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_GetTags_Request`;
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
      return `CGameRecording_GetTags_Response`;
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
      return `CGameRecording_GetEnoughDiskSpace_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.enough_space || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            enough_space: {
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
      return `CGameRecording_GetEnoughDiskSpace_Response`;
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
      return `CGameRecording_GetAvailableDiskSpace_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.size || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            size: {
              _: 1,
              _: _.readDouble,
              _: _.writeDouble,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.notification_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            notification_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            start_time: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            duration_ms: {
              _: 5,
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
      return `CGameRecording_TimelineChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.notification_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            notification_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            session_id: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            start_offset: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            recording_type: {
              _: 8,
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
      return `CGameRecording_RecordingSessionChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.timeline_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [17, 19], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timeline_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            entry_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            game_mode: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            range_title: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            range_duration: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            range_possible_clip: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            timestamp_title: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            marker_icon: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            marker_description: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            marker_priority: {
              _: 14,
              _: _.readInt32,
              _: _.writeInt32,
            },
            screenshot_handle: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            achievement_name: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            tag: {
              _: 17,
              _: _,
              _: !0,
              _: !0,
            },
            phase_id: {
              _: 18,
              _: _.readString,
              _: _.writeString,
            },
            attributes: {
              _: 19,
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
      return `CTimelineEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.entry || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entry: {
              _: 1,
              _: _,
            },
            game_id: {
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
      return `CGameRecording_TimelineEntryChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            entry_id: {
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
      return `CGameRecording_TimelineEntryRemoved_Notification`;
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
      return `CGameRecording_LowDiskSpace_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_PostGameHighlightsChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            phase_id: {
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
      return `CGameRecording_OpenOverlayToGamePhase_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            entry_id: {
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
      return `CGameRecording_OpenOverlayToTimelineEvent_Notification`;
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
      return `CGameRecording_PhaseListChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            date_recorded: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            start_timeline_id: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            start_offset_ms: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            published_file_id: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            file_size: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            date_clipped: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            temporary: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            original_device: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            original_gaming_device_type: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            date_downloaded: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            thumbnail_url: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            thumbnail_width: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            thumbnail_height: {
              _: 17,
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
      return `CGameRecording_ClipSummary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            start: {
              _: 2,
              _: _,
            },
            end: {
              _: 3,
              _: _,
            },
            name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            src_clip_id: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            temporary: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            force_thumbnail: {
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
      return `CGameRecording_SaveClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.timeline_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timeline_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            offset_ms: {
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
      return `CGameRecording_SaveClip_Request_Position`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
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
      return `CGameRecording_SaveClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
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
      return `CGameRecording_DeleteClip_Request`;
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
      return `CGameRecording_DeleteClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bitrate_kbps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bitrate_kbps: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            width: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            height: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            frames_per_second: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            codec: {
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
      return `CGameRecording_ExportClip_Settings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            export_mp4_path: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            settings: {
              _: 3,
              _: _,
            },
            use_unique_filename: {
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
      return `CGameRecording_ExportClip_Request`;
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
      return `CGameRecording_ExportClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            settings: {
              _: 2,
              _: _,
            },
            run_policy_checks: {
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
      return `CGameRecording_ExportClipPreview_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.estimated_size || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            estimated_size: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            settings: {
              _: 2,
              _: _,
            },
            result: {
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
      return `CGameRecording_ExportClipPreview_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            timeline_offset_ms: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            source_clip_id: {
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
      return `CGameRecording_TakeScreenshot_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.screenshot_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            screenshot_id: {
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
      return `CGameRecording_TakeScreenshot_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            desc: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            visibility: {
              _: 4,
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
      return `CGameRecording_UploadClipToSteam_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
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
      return `CGameRecording_UploadClipToSteam_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
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
      return `CGameRecording_ZipClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.zip_path || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            zip_path: {
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
      return `CGameRecording_ZipClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            created_after: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_temporary: {
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
      return `CGameRecording_GetClips_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip: {
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
      return `CGameRecording_GetClips_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            created_after: {
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
      return `CGameRecording_GetAndTrimPostGameHighlights_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.events || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            events: {
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
      return `CGameRecording_GetAndTrimPostGameHighlights_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            entry: {
              _: 2,
              _: _,
            },
            clip_id: {
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
      return `CGameRecording_UserAddTimelineEntry_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.entry_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entry_id: {
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
      return `CGameRecording_UserAddTimelineEntry_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            entry: {
              _: 2,
              _: _,
            },
            clip_id: {
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
      return `CGameRecording_UserUpdateTimelineEntry_Request`;
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
      return `CGameRecording_UserUpdateTimelineEntry_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            entry_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            clip_id: {
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
      return `CGameRecording_UserRemoveTimelineEntry_Request`;
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
      return `CGameRecording_UserRemoveTimelineEntry_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_ids: {
              _: 1,
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
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Request`;
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
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.folder_path || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            folder_path: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            type: {
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
      return `CGameRecording_GetTotalDiskSpaceUsage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.size || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            size: {
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
      return `CGameRecording_GetTotalDiskSpaceUsage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recording_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            clip_id: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            timeline_id: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            start_offset_us: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readInt64String,
              pbr: _.readPackedInt64String,
              _: _.writeRepeatedInt64String,
            },
            major_axis: {
              _: 5,
              _: 512,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_precision: {
              _: 6,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            format: {
              _: 8,
              _: 1,
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
      return `CGameRecording_GetThumbnails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.thumbnails || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            thumbnails: {
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
      return `CGameRecording_GetThumbnails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.image_data || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            image_data: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            width: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            height: {
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
      return `CGameRecording_GetThumbnails_Response_Thumbnail`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_StartRecording_Request`;
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
      return `CGameRecording_StartRecording_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_StopRecording_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
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
      return `CGameRecording_StopRecording_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_GetRecordingSize_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.file_size || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            file_size: {
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
      return `CGameRecording_GetRecordingSize_Response`;
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
      return `CGameRecording_CleanupBackgroundRecordings_Request`;
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
      return `CGameRecording_CleanupBackgroundRecordings_Response`;
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
      return `CGameRecording_GetPlatformCapabilities_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.per_process_audio_capture || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            per_process_audio_capture: {
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
      return `CGameRecording_GetPlatformCapabilities_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
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
      return `CGameRecording_ClipCreated_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
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
      return `CGameRecording_ClipDeleted_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.progress || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            progress: {
              _: 1,
              _: _.readFloat,
              _: _.writeFloat,
            },
            clip_id: {
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
      return `CGameRecording_ExportProgress_Notification`;
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
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            enabled: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            minutes: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bitrate: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            infinite: {
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
      return `CGameRecording_PerGameSettings`;
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
      return `CGameRecording_GetPerGameSettings_Request`;
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
      return `CGameRecording_GetPerGameSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_settings: {
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
      return `CGameRecording_SetPerGameSettings_Request`;
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
      return `CGameRecording_SetPerGameSettings_Response`;
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
      return `CGameRecording_DeletePerGameSettings_Request`;
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
      return `CGameRecording_DeletePerGameSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.progress || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            progress: {
              _: 1,
              _: _.readFloat,
              _: _.writeFloat,
            },
            clip_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            eresult: {
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
      return `CGameRecording_UploadProgress_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_SwitchBackgroundRecordingGame_Request`;
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
      return `CGameRecording_SwitchBackgroundRecordingGame_Response`;
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
      return `CGameRecording_GetState_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_h265_enabled || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_h265_enabled: {
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
      return `CGameRecording_GetState_Response`;
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
      return `CGameRecording_StateChanged_Notification`;
    }
  },
  _;
(function (_) {
  _.GetAppsWithBackgroundVideoHandler = {
    name: `GameRecording.GetAppsWithBackgroundVideo#1`,
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
        : _.SendMsg(`GameRecording.GetAppsWithBackgroundVideo#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetAppsWithBackgroundVideo = _;
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
        : _.SendMsg(`GameRecording.GetAppsWithBackgroundVideo#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetAppsWithBackgroundVideo = _),
    (_.GetTimelinesForAppHandler = {
      name: `GameRecording.GetTimelinesForApp#1`,
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
        : _.SendMsg(`GameRecording.GetTimelinesForApp#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetTimelinesForApp = _;
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
        : _.SendMsg(`GameRecording.GetTimelinesForApp#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetTimelinesForApp = _),
    (_.GetTimelinesForClipHandler = {
      name: `GameRecording.GetTimelinesForClip#1`,
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
        : _.SendMsg(`GameRecording.GetTimelinesForClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetTimelinesForClip = _;
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
        : _.SendMsg(`GameRecording.GetTimelinesForClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetTimelinesForClip = _),
    (_.QueryPhasesHandler = {
      name: `GameRecording.QueryPhases#1`,
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
        : _.SendMsg(`GameRecording.QueryPhases#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.QueryPhases = _;
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
        : _.SendMsg(`GameRecording.QueryPhases#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgQueryPhases = _),
    (_.GetTagsHandler = {
      name: `GameRecording.GetTags#1`,
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
        : _.SendMsg(`GameRecording.GetTags#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetTags = _;
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
        : _.SendMsg(`GameRecording.GetTags#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetTags = _),
    (_.GetEnoughDiskSpaceHandler = {
      name: `GameRecording.GetEnoughDiskSpace#1`,
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
        : _.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetEnoughDiskSpace = _;
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
        : _.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetEnoughDiskSpace = _),
    (_.GetAvailableDiskSpaceHandler = {
      name: `GameRecording.GetAvailableDiskSpace#1`,
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
        : _.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetAvailableDiskSpace = _;
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
        : _.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetAvailableDiskSpace = _),
    (_.SaveClipHandler = {
      name: `GameRecording.SaveClip#1`,
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
        : _.SendMsg(`GameRecording.SaveClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.SaveClip = _;
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
        : _.SendMsg(`GameRecording.SaveClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgSaveClip = _),
    (_.DeleteClipHandler = {
      name: `GameRecording.DeleteClip#1`,
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
        : _.SendMsg(`GameRecording.DeleteClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.DeleteClip = _;
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
        : _.SendMsg(`GameRecording.DeleteClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgDeleteClip = _),
    (_.GetClipsHandler = {
      name: `GameRecording.GetClips#1`,
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
        : _.SendMsg(`GameRecording.GetClips#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetClips = _;
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
        : _.SendMsg(`GameRecording.GetClips#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetClips = _),
    (_.UploadClipToSteamHandler = {
      name: `GameRecording.UploadClipToSteam#1`,
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
        : _.SendMsg(`GameRecording.UploadClipToSteam#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.UploadClipToSteam = _;
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
        : _.SendMsg(`GameRecording.UploadClipToSteam#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgUploadClipToSteam = _),
    (_.ExportClipHandler = {
      name: `GameRecording.ExportClip#1`,
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
        : _.SendMsg(`GameRecording.ExportClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.ExportClip = _;
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
        : _.SendMsg(`GameRecording.ExportClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgExportClip = _),
    (_.ExportClipPreviewHandler = {
      name: `GameRecording.ExportClipPreview#1`,
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
        : _.SendMsg(`GameRecording.ExportClipPreview#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.ExportClipPreview = _;
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
        : _.SendMsg(`GameRecording.ExportClipPreview#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgExportClipPreview = _),
    (_.TakeScreenshotHandler = {
      name: `GameRecording.TakeScreenshot#1`,
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
        : _.SendMsg(`GameRecording.TakeScreenshot#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.TakeScreenshot = _;
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
        : _.SendMsg(`GameRecording.TakeScreenshot#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgTakeScreenshot = _),
    (_.ZipClipHandler = {
      name: `GameRecording.ZipClip#1`,
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
        : _.SendMsg(`GameRecording.ZipClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.ZipClip = _;
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
        : _.SendMsg(`GameRecording.ZipClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgZipClip = _),
    (_.StartRecordingHandler = {
      name: `GameRecording.StartRecording#1`,
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
        : _.SendMsg(`GameRecording.StartRecording#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.StartRecording = _;
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
        : _.SendMsg(`GameRecording.StartRecording#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgStartRecording = _),
    (_.StopRecordingHandler = {
      name: `GameRecording.StopRecording#1`,
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
        : _.SendMsg(`GameRecording.StopRecording#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.StopRecording = _;
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
        : _.SendMsg(`GameRecording.StopRecording#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgStopRecording = _),
    (_.GetBackgroundRecordingFileSizeHandler = {
      name: `GameRecording.GetBackgroundRecordingFileSize#1`,
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
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.GetBackgroundRecordingFileSize = _;
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
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgGetBackgroundRecordingFileSize = _),
    (_.CleanupBackgroundRecordingsHandler = {
      name: `GameRecording.CleanupBackgroundRecordings#1`,
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
        : _.SendMsg(`GameRecording.CleanupBackgroundRecordings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.CleanupBackgroundRecordings = _;
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
        : _.SendMsg(`GameRecording.CleanupBackgroundRecordings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgCleanupBackgroundRecordings = _),
    (_.GetAndTrimPostGameHighlightsHandler = {
      name: `GameRecording.GetAndTrimPostGameHighlights#1`,
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
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.GetAndTrimPostGameHighlights = _;
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
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgGetAndTrimPostGameHighlights = _),
    (_.GetThumbnailsHandler = {
      name: `GameRecording.GetThumbnails#1`,
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
        : _.SendMsg(`GameRecording.GetThumbnails#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetThumbnails = _;
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
        : _.SendMsg(`GameRecording.GetThumbnails#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetThumbnails = _),
    (_.GetPlatformCapabilitiesHandler = {
      name: `GameRecording.GetPlatformCapabilities#1`,
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
        : _.SendMsg(`GameRecording.GetPlatformCapabilities#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetPlatformCapabilities = _;
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
        : _.SendMsg(`GameRecording.GetPlatformCapabilities#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetPlatformCapabilities = _),
    (_.NotifyTimelineChangedHandler = {
      name: `GameRecording.NotifyTimelineChanged#1`,
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
            _.NotifyTimelineChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTimelineChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyTimelineChanged#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyTimelineChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyTimelineChanged#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgNotifyTimelineChanged = _),
    (_.NotifyRecordingSessionChangedHandler = {
      name: `GameRecording.NotifyRecordingSessionChanged#1`,
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
            _.NotifyRecordingSessionChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyRecordingSessionChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyRecordingSessionChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgNotifyRecordingSessionChanged = _),
    (_.NotifyTimelineEntryChangedHandler = {
      name: `GameRecording.NotifyTimelineEntryChanged#1`,
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
            _.NotifyTimelineEntryChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTimelineEntryChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyTimelineEntryChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgNotifyTimelineEntryChanged = _),
    (_.NotifyTimelineEntryRemovedHandler = {
      name: `GameRecording.NotifyTimelineEntryRemoved#1`,
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
            _.NotifyTimelineEntryRemovedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTimelineEntryRemoved = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyTimelineEntryRemoved = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgNotifyTimelineEntryRemoved = _),
    (_.NotifyClipCreatedHandler = {
      name: `GameRecording.NotifyClipCreated#1`,
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
        : _.RegisterServiceNotificationHandler(_.NotifyClipCreatedHandler, _)
    );
  }
  _.RegisterForNotifyClipCreated = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyClipCreated#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyClipCreated = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyClipCreated#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgNotifyClipCreated = _),
    (_.NotifyClipDeletedHandler = {
      name: `GameRecording.NotifyClipDeleted#1`,
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
        : _.RegisterServiceNotificationHandler(_.NotifyClipDeletedHandler, _)
    );
  }
  _.RegisterForNotifyClipDeleted = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyClipDeleted#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyClipDeleted = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyClipDeleted#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgNotifyClipDeleted = _),
    (_.NotifyExportProgressHandler = {
      name: `GameRecording.NotifyExportProgress#1`,
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
        : _.RegisterServiceNotificationHandler(_.NotifyExportProgressHandler, _)
    );
  }
  _.RegisterForNotifyExportProgress = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyExportProgress#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyExportProgress = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyExportProgress#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgNotifyExportProgress = _),
    (_.NotifyUploadProgressHandler = {
      name: `GameRecording.NotifyUploadProgress#1`,
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
        : _.RegisterServiceNotificationHandler(_.NotifyUploadProgressHandler, _)
    );
  }
  _.RegisterForNotifyUploadProgress = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyUploadProgress#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyUploadProgress = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyUploadProgress#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgNotifyUploadProgress = _),
    (_.NotifyLowDiskSpaceHandler = {
      name: `GameRecording.NotifyLowDiskSpace#1`,
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
        : _.RegisterServiceNotificationHandler(_.NotifyLowDiskSpaceHandler, _)
    );
  }
  _.RegisterForNotifyLowDiskSpace = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyLowDiskSpace = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgNotifyLowDiskSpace = _),
    (_.NotifyPostGameHighlightsChangedHandler = {
      name: `GameRecording.NotifyPostGameHighlightsChanged#1`,
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
            _.NotifyPostGameHighlightsChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyPostGameHighlightsChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyPostGameHighlightsChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgNotifyPostGameHighlightsChanged = _),
    (_.NotifyOpenOverlayToGamePhaseHandler = {
      name: `GameRecording.NotifyOpenOverlayToGamePhase#1`,
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
            _.NotifyOpenOverlayToGamePhaseHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyOpenOverlayToGamePhase = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyOpenOverlayToGamePhase = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgNotifyOpenOverlayToGamePhase = _),
    (_.NotifyOpenOverlayToTimelineEventHandler = {
      name: `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
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
            _.NotifyOpenOverlayToTimelineEventHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyOpenOverlayToTimelineEvent = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyOpenOverlayToTimelineEvent = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgNotifyOpenOverlayToTimelineEvent = _),
    (_.NotifyPhaseListChangedHandler = {
      name: `GameRecording.NotifyPhaseListChanged#1`,
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
            _.NotifyPhaseListChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyPhaseListChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyPhaseListChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgNotifyPhaseListChanged = _),
    (_.GetPerGameSettingsHandler = {
      name: `GameRecording.GetPerGameSettings#1`,
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
        : _.SendMsg(`GameRecording.GetPerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetPerGameSettings = _;
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
        : _.SendMsg(`GameRecording.GetPerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetPerGameSettings = _),
    (_.SetPerGameSettingsHandler = {
      name: `GameRecording.SetPerGameSettings#1`,
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
        : _.SendMsg(`GameRecording.SetPerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.SetPerGameSettings = _;
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
        : _.SendMsg(`GameRecording.SetPerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgSetPerGameSettings = _),
    (_.DeletePerGameSettingsHandler = {
      name: `GameRecording.DeletePerGameSettings#1`,
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
        : _.SendMsg(`GameRecording.DeletePerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.DeletePerGameSettings = _;
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
        : _.SendMsg(`GameRecording.DeletePerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgDeletePerGameSettings = _),
    (_.UserAddTimelineEntryHandler = {
      name: `GameRecording.UserAddTimelineEntry#1`,
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
        : _.SendMsg(`GameRecording.UserAddTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.UserAddTimelineEntry = _;
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
        : _.SendMsg(`GameRecording.UserAddTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgUserAddTimelineEntry = _),
    (_.UserUpdateTimelineEntryHandler = {
      name: `GameRecording.UserUpdateTimelineEntry#1`,
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
        : _.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.UserUpdateTimelineEntry = _;
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
        : _.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgUserUpdateTimelineEntry = _),
    (_.UserRemoveTimelineEntryHandler = {
      name: `GameRecording.UserRemoveTimelineEntry#1`,
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
        : _.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.UserRemoveTimelineEntry = _;
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
        : _.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgUserRemoveTimelineEntry = _),
    (_.ManuallyDeleteRecordingsForAppsHandler = {
      name: `GameRecording.ManuallyDeleteRecordingsForApps#1`,
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
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.ManuallyDeleteRecordingsForApps = _;
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
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgManuallyDeleteRecordingsForApps = _),
    (_.GetTotalDiskSpaceUsageHandler = {
      name: `GameRecording.GetTotalDiskSpaceUsage#1`,
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
        : _.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetTotalDiskSpaceUsage = _;
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
        : _.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetTotalDiskSpaceUsage = _),
    (_.SwitchBackgroundRecordingGameHandler = {
      name: `GameRecording.SwitchBackgroundRecordingGame#1`,
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
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.SwitchBackgroundRecordingGame = _;
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
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  ((_.SendMsgSwitchBackgroundRecordingGame = _),
    (_.GetStateHandler = {
      name: `GameRecording.GetState#1`,
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
        : _.SendMsg(`GameRecording.GetState#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetState = _;
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
        : _.SendMsg(`GameRecording.GetState#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((_.SendMsgGetState = _),
    (_.NotifyStateChangedHandler = {
      name: `GameRecording.NotifyStateChanged#1`,
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
        : _.RegisterServiceNotificationHandler(_.NotifyStateChangedHandler, _)
    );
  }
  _.RegisterForNotifyStateChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyStateChanged#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyStateChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyStateChanged#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.SendMsgNotifyStateChanged = _;
})((_ ||= {}));
var _ = (function (_) {
  return (
    (_[(_.Invalid = 0)] = `Invalid`),
    (_[(_.Playing = 1)] = `Playing`),
    (_[(_.Staging = 2)] = `Staging`),
    (_[(_.Menus = 3)] = `Menus`),
    _
  );
})({});
function _(_) {
  return _.type === `gamemode`;
}
function _(_) {
  return _.type === `state_description`;
}
function _(_) {
  return _.type === `event` && parseInt(_.duration) > 0;
}
function _(_) {
  return _.type === `event`;
}
function _(_) {
  return _.type === `achievement`;
}
function _(_) {
  return _.type === `error`;
}
function _(_) {
  return _.type === `usermarker`;
}
function _(_) {
  return _.type === `screenshot`;
}
function _(_) {
  let _ = {
    _: _.entry_id,
    time: _.time,
    type: void 0,
  };
  switch (_.type) {
    case 1: {
      let _ = _;
      ((_.type = `gamemode`), (_.mode = _.game_mode));
      break;
    }
    case 5: {
      let _ = _;
      ((_.type = `usermarker`),
        (_.icon = `steam_marker`),
        (_.priority = _.marker_priority));
      break;
    }
    case 4: {
      let _ = _;
      ((_.type = `achievement`), (_.achievement_name = _.achievement_name));
      break;
    }
    case 7: {
      let _ = _;
      ((_.type = `error`), (_.description = _.marker_description));
      break;
    }
    case 3: {
      let _ = _;
      ((_.type = `state_description`), (_.title = _.timestamp_title));
      break;
    }
    case 2: {
      let _ = _;
      ((_.type = `event`),
        (_.icon = _.marker_icon),
        (_.title = _.range_title),
        (_.description = _.marker_description),
        (_.priority = _.marker_priority),
        (_.duration = _.range_duration),
        (_.possible_clip = _.range_possible_clip));
      break;
    }
    case 6: {
      let _ = _;
      ((_.type = `screenshot`),
        (_.icon = _.marker_icon),
        (_.priority = _.marker_priority),
        (_.handle = _.screenshot_handle));
      break;
    }
    default:
      return null;
  }
  return _;
}
function _(_) {
  return {
    type: `global`,
    valMS: _,
  };
}
function _(_) {
  return {
    type: `timeline`,
    valMS: _,
  };
}
function _(_) {
  return {
    type: `global`,
    valPX: _,
  };
}
function _(_) {
  return {
    type: `scrollWindow`,
    valPX: _,
  };
}
var _ = class _ {
    m_ulGameID;
    constructor(_, _, _) {
      if (typeof _ == `string`) this.m_ulGameID = _.fromString(_, !0);
      else {
        let _ = _,
          _ = ((_ & 255) << 24) + (_ & 16777215);
        this.m_ulGameID = _.fromBits(_, _, !0);
      }
    }
    GetAppID() {
      return this.m_ulGameID.getLowBitsUnsigned() & 16777215;
    }
    GetType() {
      return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
    }
    GetModID() {
      return this.m_ulGameID.getHighBitsUnsigned();
    }
    ConvertTo64BitString() {
      return this.m_ulGameID.toString();
    }
    BIsSteamApp() {
      return this.GetType() === _.k_EGameIDTypeApp;
    }
    BIsShortcut() {
      return this.GetType() === _.k_EGameIDTypeShortcut;
    }
    BIsMod() {
      return this.GetType() === _.k_EGameIDTypeGameMod;
    }
    GetInternalAppID() {
      return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
    }
    BIsValid() {
      switch (this.GetType()) {
        case _.k_EGameIDTypeApp:
          return this.GetAppID() !== 0;
        case _.k_EGameIDTypeGameMod:
          return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
        case _.k_EGameIDTypeShortcut:
          return !!(this.GetModID() & 2147483648);
        default:
          return (_(!1, `Unknown GameID type: ${this.GetType()}`), !1);
      }
    }
    static InitFromAppID(_) {
      return new _(_.k_EGameIDTypeApp, _, 0);
    }
    static InitFromShortcutID(_) {
      return new _(_.k_EGameIDTypeShortcut, 0, _);
    }
  },
  _ = _(_(), 1),
  _ = 1e4,
  _ = 3e3,
  _ = 4e3,
  _ = class _ {
    constructor() {
      _(this);
    }
    m_bInitialized = !1;
    m_rgListeners = [];
    m_gameID;
    m_clipID;
    m_ulFirstTimelineOffsetMS = 0;
    m_rgTimelineMetadata = [];
    m_mapTimelineData = new Map();
    m_mapRunningTimelines = new Map();
    m_schUpdateRunning = new _();
    m_fnTimelineURLBuilder;
    BInitialized() {
      return this.m_bInitialized;
    }
    GetTimelines() {
      return this.m_rgTimelineMetadata;
    }
    GetTimelineMetadataIndex(_) {
      return this.m_rgTimelineMetadata.findIndex(
        (_) => _.metadata.timeline_id === _,
      );
    }
    GetTimelineMetadata(_) {
      return this.m_rgTimelineMetadata.find(
        (_) => _.metadata.timeline_id === _,
      );
    }
    GetGameID() {
      return this.m_gameID;
    }
    GetClipID() {
      return this.m_clipID;
    }
    BIsTimelineRunning(_) {
      return this.m_mapRunningTimelines.has(_);
    }
    AddEventListener(_) {
      return (this.m_rgListeners.push(_), () => _(this.m_rgListeners, _));
    }
    async LoadTimelinesForBackgroundVideo(_) {
      this.m_gameID = _;
      let { timelines: _ = [] } = (
        await _.GetTimelinesForApp({
          game_id: _,
        })
      )
        .Body()
        .toObject();
      (this.m_mapRunningTimelines.forEach((_, _) => {
        _.find((_) => _.timeline_id == _) || _.push(_.m_metadata);
      }),
        this.UpdateTimelineMetadata(_),
        (this.m_fnTimelineURLBuilder = (_) =>
          `https://steamloopback.host/gamerecordings/timelines/${_}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    async LoadTimelinesForClip(_) {
      this.m_clipID = _;
      let _ = await _.GetTimelinesForClip({
        clip_id: _,
      });
      if (_.GetEResult() != 1) throw Error(`Unable to load clip ` + _);
      let {
        timelines: _ = [],
        game_id: _,
        first_timeline_start_offset_ms: _,
      } = _.Body().toObject();
      ((this.m_gameID = _), this.UpdateTimelineMetadata(_));
      for (let _ of this.m_rgTimelineMetadata) {
        _(`Loaded clip ${_} timeline ${_.metadata.timeline_id}`);
        for (let _ of _.metadata.recordings)
          _(`Clip recording ${_.recording_id} duration ${_.duration_ms}`);
      }
      ((this.m_ulFirstTimelineOffsetMS = parseInt(_)),
        (this.m_fnTimelineURLBuilder = (_) =>
          `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${_}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    UpdateTimelineMetadata(_) {
      let _ = _.slice().sort((_, _) => _.date_recorded - _.date_recorded),
        _ = [],
        _ = 0,
        _ = {};
      (_.forEach((_) => {
        ((_.recordings ||= []),
          _[_.timeline_id]
            ? console.error(
                `Duplicate timelines found in UpdateTimelineMetadata()`,
                _.timeline_id,
                _,
              )
            : (_.push({
                nGlobalOffsetMS: _(_),
                metadata: _,
              }),
              (_ += parseInt(_.duration_ms)),
              (_[_.timeline_id] = !0)));
      }),
        (this.m_rgTimelineMetadata = _));
    }
    LoadTimelinesForSharedClip(_) {
      this.SetPreloadedTimelines(0, _.clip_id, _.game_id, _.timelines, void 0);
    }
    LoadTimelinesForTestGame(_, _) {
      this.SetPreloadedTimelines(
        0,
        void 0,
        _,
        _,
        (_) => `https://steamloopback.host/gamerecordings/timelines/${_}.json`,
      );
    }
    LoadTimelinesForTestClip(_, _, _, _) {
      this.SetPreloadedTimelines(_, _, _, _, void 0);
    }
    SetPreloadedTimelines(_, _, _, _, _) {
      ((this.m_gameID = _),
        (this.m_clipID = _),
        (this.m_ulFirstTimelineOffsetMS = _));
      let _ = _.slice();
      (this.m_mapRunningTimelines.forEach((_, _) => {
        _.find((_) => _.timeline_id == _) || _.push(_.m_metadata);
      }),
        this.UpdateTimelineMetadata(_),
        (this.m_fnTimelineURLBuilder = _),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    FireEvent(_, ..._) {
      for (let _ of this.m_rgListeners) {
        let _ = _[_];
        _ instanceof Function && _.apply(_, _);
      }
    }
    async LoadTimelineData(_) {
      let _ = this.m_mapTimelineData.get(_);
      if (_ && _.m_strState === `loading`) {
        await _.m_promise;
        return;
      }
      if (
        (_ && _.m_strState == `error`) ||
        (this.IsActiveTimeline(_) && _.m_strState == `loaded`)
      )
        return;
      let _ = {
        m_rgGameModeChanges: [],
        m_rgStateDescriptions: [],
        m_rgEntries: [],
        m_rgPhases: [],
      };
      if (!this.m_fnTimelineURLBuilder)
        this.m_mapTimelineData.set(_, {
          m_strState: `loaded`,
          ..._,
        });
      else {
        let _ = this.m_fnTimelineURLBuilder(_),
          _ = _.default
            .get(_, {
              withCredentials: !1,
            })
            .then(
              (_) => {
                if (_.status == 200 && _.data) {
                  _(_.data);
                  let _ = this.ProcessTimelineEntries(_.data);
                  this.m_mapTimelineData.set(_, _);
                } else
                  this.m_mapTimelineData.set(_, {
                    ..._,
                    m_strState: `error`,
                  });
              },
              (_) => {
                this.m_mapTimelineData.set(_, {
                  ..._,
                  m_strState: `error`,
                });
              },
            )
            .finally(() => this.FireEvent(`OnTimelineLoaded`, _));
        this.m_mapTimelineData.set(_, {
          m_strState: `loading`,
          m_promise: _,
          ..._,
        });
      }
    }
    ProcessTimelineEntries(_) {
      let _ = {
        m_strState: `loaded`,
        m_rgGameModeChanges: [],
        m_rgStateDescriptions: [],
        m_rgEntries: [],
        m_rgPhases: [],
      };
      if (_.entries) {
        let _ = [],
          _ = [],
          _ = [],
          _ = [];
        for (let _ of _.entries)
          switch (_.type) {
            case `phase`:
              _.push(_);
              break;
            case `gamemode`:
              _.push(_);
              break;
            case `state_description`:
              _.push(_);
              break;
            case `achievement`:
            case `error`:
            case `event`:
            case `screenshot`:
            case `usermarker`:
              _.push(_);
              break;
            default:
              console.error(`Unknown timeline entry type ${_.type}`);
          }
        let _ = (_, _) => parseInt(_.time) - parseInt(_.time);
        ((_.m_rgGameModeChanges = _.sort(_)),
          (_.m_rgStateDescriptions = _.sort(_)),
          (_.m_rgPhases = _.sort(_)),
          (_.m_rgEntries = _.sort(_)),
          _.m_rgGameModeChanges.length > 0 &&
            parseInt(_.m_rgGameModeChanges[0].time) < _ &&
            (_.m_rgGameModeChanges[0].time = `0`));
      }
      return _;
    }
    static ApplyTimelineRounding(_, _) {
      if (_ === 0) return _;
      let _ = _ % _;
      return _ == 0 ? _ : _ + (_ - _);
    }
    FindTimelineAtOffset(_, _) {
      let _ = _ + this.m_ulFirstTimelineOffsetMS,
        _ = 0;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = this.GetTimelineStartBeforeGlobalZeroMS(_.metadata.timeline_id),
          _ = parseInt(_.metadata.duration_ms) + _;
        if (_ + _ > _)
          return {
            timeline: _,
            nTimelineOffsetMS: _ - _,
            ulGlobalToTimelineOffset: _,
          };
        _ += _.ApplyTimelineRounding(_, _);
      }
      return null;
    }
    GetGlobalOffsetDataForTimeline(_, _) {
      let _ = 0;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = parseInt(_.metadata.duration_ms),
          _ = _.ApplyTimelineRounding(_, _);
        if (_.metadata.timeline_id == _)
          return {
            nGlobalOffsetMS: _,
            nRoundedDurationMS: _,
          };
        _ += _;
      }
      return null;
    }
    CreateGlobalRangeForTimeline(_, _, _, _) {
      let _ = _ - _,
        _ = _ + _;
      return this.ClampGlobalRangeToTimeline(_, _, _);
    }
    ClampGlobalRangeToTimeline(_, _, _) {
      let _ = this.GetGlobalOffsetDataForTimeline(_, 0);
      return _
        ? [
            Math.max(_, _.nGlobalOffsetMS),
            Math.min(_, _.nGlobalOffsetMS + _.nRoundedDurationMS - 1),
          ]
        : [0, 0];
    }
    GetTimelineOffsetFromGlobal(_, _) {
      let _ = this.m_ulFirstTimelineOffsetMS + _,
        _ = 0;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = this.GetTimelineStartBeforeGlobalZeroMS(_.metadata.timeline_id),
          _ = parseInt(_.metadata.duration_ms) + _,
          _ = _.ApplyTimelineRounding(_, _);
        if (_ < _ + _)
          return {
            strTimelineID: _.metadata.timeline_id,
            nTimelineOffsetMS: _(_ - _ - _),
          };
        _ += _;
      }
      return {
        strTimelineID: void 0,
        nTimelineOffsetMS: _(NaN),
      };
    }
    ConvertRecordingOffsetToGlobalOffset(_, _, _) {
      let _ = 0;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = parseInt(_.metadata.duration_ms),
          _ = this.GetTimelineStartBeforeGlobalZeroMS(_.metadata.timeline_id),
          _ = _.ApplyTimelineRounding(_, _);
        for (let _ of _.metadata.recordings)
          if (_.recording_id === _) {
            let _ =
              (isNaN(parseInt(_.recording_zero_timeline_offset_ms))
                ? 0
                : parseInt(_.recording_zero_timeline_offset_ms) - _) + _;
            return (
              (_ += _),
              {
                nGlobalOffsetMS: _,
                nRoundedDurationMS: _,
                strTimelineID: _.metadata.timeline_id,
                nTimelineOffsetMS: _,
              }
            );
          }
        _ += _;
      }
      return null;
    }
    IsActiveTimeline(_) {
      return _ ? this.m_mapRunningTimelines.has(_) : !1;
    }
    MakeRelativeToTimelineEndIfActive(_, _) {
      if (!this.IsActiveTimeline(_)) return _;
      let _ = this.GetTimelineMetadata(_);
      if (!_) return _;
      let _ = parseInt(_.metadata.duration_ms);
      return Math.min(_ - _, 0);
    }
    IsActiveRecording(_) {
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (_.recording_id === _) {
            let _ = this.m_mapRunningTimelines.get(_.metadata.timeline_id);
            return _ && _.m_runningRecording
              ? _.m_runningRecording.recording_id === _
              : !1;
          }
      return !1;
    }
    GetRunningTimelineDurationMS(_) {
      let _ = this.m_mapRunningTimelines.get(_);
      if (!_) return 0;
      let _ =
          performance.now() - _.m_perfCounterStart + _.m_nPerfCounterOffsetMS,
        _ = parseInt(_.m_metadata.duration_ms) || 0;
      return Math.max(_, _);
    }
    GetRunningTimelineForRecording(_, _) {
      let _ = this.m_mapRunningTimelines.get(_);
      return _ &&
        _.m_runningRecording &&
        _.m_runningRecording.recording_id === _
        ? _
        : null;
    }
    ConvertGlobaOffsetToRecordingAndRelativeOffset(_) {
      if (!this.m_bInitialized) return null;
      let _ = this.FindTimelineAtOffset(_, 0);
      if (!_) return null;
      let _ = _.nTimelineOffsetMS - _.ulGlobalToTimelineOffset;
      for (let _ of _.timeline.metadata.recordings) {
        let _ = parseInt(_.start_offset_ms);
        if (_ + parseInt(_.duration_ms) < _ || _ > _) continue;
        let _ = parseInt(_.recording_zero_timeline_offset_ms),
          _ = Math.max(_ - _, 0);
        return (
          isNaN(_) || (_ = Math.max(_.nTimelineOffsetMS - _, 0)),
          {
            strRecordingID: _.recording_id,
            nRecordingOffsetMS: _,
            nStartOffsetMS: _,
          }
        );
      }
      return null;
    }
    async FindRecordingAndOffsetForEntry(_) {
      for (let _ of this.m_mapRunningTimelines.keys()) {
        if (!this.IsActiveTimeline(_)) continue;
        await this.LoadTimelineData(_);
        let _ = this.m_mapTimelineData.get(_),
          _ = this.m_mapRunningTimelines.get(_);
        if (_ && _) {
          for (let _ of _.m_rgEntries)
            if (_._ == _) {
              let _ = parseInt(_.time);
              for (let _ of _.m_metadata.recordings) {
                let _ = parseInt(_.start_offset_ms),
                  _ = _ + parseInt(_.duration_ms);
                if (_ >= _ && _ <= _)
                  return {
                    strRecordingID: _.recording_id,
                    nRecordingOffsetMS: _,
                    nStartOffsetMS: _,
                  };
              }
            }
          break;
        }
      }
    }
    GetClosestNextRecordingInGlobalTimeline(_) {
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (parseInt(_.start_offset_ms) + _.nGlobalOffsetMS.valMS > _.valMS)
            return _;
      return null;
    }
    GetClosestPreviousRecordingInGlobalTimeline(_) {
      let _ = null;
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (parseInt(_.start_offset_ms) + _.nGlobalOffsetMS.valMS > _.valMS)
            return _;
          else _ = _;
      return _;
    }
    ConvertRecordingTimeMStoPreTrimTimeMS(_, _) {
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (_.recording_id === _) {
            let _ = parseInt(_.recording_zero_timeline_offset_ms),
              _ = this.GetTimelineStartBeforeGlobalZeroMS(
                _.metadata.timeline_id,
              );
            return !_ || isNaN(_) ? _ : _ + _ - _;
          }
      return _;
    }
    GetTimelineDataOrStartLoad(_) {
      if (!_) return null;
      let _ = this.m_mapTimelineData.get(_);
      return (
        (_ ||= (this.LoadTimelineData(_), this.m_mapTimelineData.get(_))), _
      );
    }
    GetTimelineData(_) {
      return this.m_mapTimelineData.get(_);
    }
    SetTimelineData(_, _) {
      let _ = this.ProcessTimelineEntries(_);
      this.m_mapTimelineData.set(_, _);
    }
    GetClosestPreviousEntryInTimeline(_, _) {
      let _ = this.GetTimelineMetadata(_),
        _ = this.GetTimelineStartBeforeGlobalZeroMS(_),
        _ = this.GetTimelineDataOrStartLoad(_),
        _ = null;
      if (_ && _.m_strState === `loaded`) {
        let _ = _.m_rgEntries.filter((_) => {
            let _ = parseInt(_.time);
            return _ < _ + parseInt(_.metadata.duration_ms) && _ > _;
          }),
          _ = _(_, (_) => _.valMS - 1 - parseInt(_.time));
        _ !== -1 && (_ = _[_]);
      }
      return {
        entry: _,
        timelineState: _?.m_strState,
      };
    }
    GetClosestNextEntryInTimeline(_, _) {
      let _ = this.GetTimelineMetadata(_),
        _ = this.GetTimelineStartBeforeGlobalZeroMS(_),
        _ = this.GetTimelineDataOrStartLoad(_),
        _ = null;
      if (_ && _.m_strState === `loaded`) {
        let _ = _.m_rgEntries.filter((_) => {
            let _ = parseInt(_.time);
            return _ < _ + parseInt(_.metadata.duration_ms) && _ > _;
          }),
          _ = _(_, (_) => _.valMS - parseInt(_.time));
        _ < _.length - 1 && (_ = _[_ + 1]);
      }
      return {
        entry: _,
        timelineState: _?.m_strState,
      };
    }
    GetClosestPreviousEntryInGlobalTimeline(_) {
      let _ = this.GetTimelineOffsetFromGlobal(_, 0),
        _ = this.GetTimelineData(_.strTimelineID);
      if (!_ || _.m_strState !== `loaded`)
        return {
          timelineID: _?.strTimelineID,
          timelineState: _?.m_strState,
          entry: null,
          globalMS: null,
        };
      let _ = this.GetTimelineStartBeforeGlobalZeroMS(_.strTimelineID),
        _ = _.nTimelineOffsetMS.valMS + _,
        _ = _(_.m_rgEntries, (_) => _ - parseInt(_.time));
      if (_ !== -1) {
        let _ = _.m_rgEntries[_],
          _ =
            this.GetTimelineMetadata(_.strTimelineID).nGlobalOffsetMS.valMS -
            _ +
            parseInt(_.time);
        return _ < 0
          ? {
              timelineID: _.strTimelineID,
              timelineState: _.m_strState,
              entry: null,
              globalMS: null,
            }
          : {
              timelineID: _.strTimelineID,
              timelineState: _.m_strState,
              entry: _,
              globalMS: _(_),
            };
      }
      let _ = this.GetTimelineMetadataIndex(_.strTimelineID);
      if (_ < 1)
        return {
          timelineID: _.strTimelineID,
          timelineState: _.m_strState,
          entry: null,
          globalMS: null,
        };
      for (let _ = _ - 1; _ >= 0; _--) {
        let _ = this.m_rgTimelineMetadata[_],
          _ = this.GetTimelineData(_.metadata.timeline_id);
        if (_) {
          if (_.m_strState !== `loaded`)
            return {
              timelineID: _.metadata.timeline_id,
              timelineState: _.m_strState,
              entry: null,
              globalMS: null,
            };
          if (_.m_rgEntries.length) {
            let _ = _.m_rgEntries[_.m_rgEntries.length - 1],
              _ = this.GetTimelineStartBeforeGlobalZeroMS(
                _.metadata.timeline_id,
              ),
              _ = _.nGlobalOffsetMS.valMS - _ + parseInt(_.time);
            return _ < 0
              ? {
                  timelineID: _.metadata.timeline_id,
                  timelineState: _.m_strState,
                  entry: null,
                  globalMS: null,
                }
              : {
                  timelineID: _.metadata.timeline_id,
                  timelineState: _.m_strState,
                  entry: _,
                  globalMS: _(_),
                };
          }
        }
      }
      return {
        timelineID: this.m_rgTimelineMetadata[0].metadata.timeline_id,
        timelineState: `loaded`,
        entry: null,
        globalMS: null,
      };
    }
    GetClosestNextEntryInGlobalTimeline(_) {
      let _ = this.GetTimelineOffsetFromGlobal(_, 0),
        _ = this.GetTimelineData(_.strTimelineID);
      if (!_ || _.m_strState !== `loaded`)
        return {
          timelineID: _?.strTimelineID,
          timelineState: _?.m_strState,
          entry: null,
          globalMS: null,
        };
      let _ = this.GetTimelineStartBeforeGlobalZeroMS(_.strTimelineID),
        _ = _.nTimelineOffsetMS.valMS + _,
        _ = _(_.m_rgEntries, (_) => _ - parseInt(_.time)) + 1;
      if (_ <= _.m_rgEntries.length - 1) {
        let _ = _.m_rgEntries[_],
          _ =
            this.GetTimelineMetadata(_.strTimelineID).nGlobalOffsetMS.valMS -
            _ +
            parseInt(_.time);
        return _ < this.GetGlobalTimelineEndMS().valMS
          ? {
              timelineID: _.strTimelineID,
              timelineState: _.m_strState,
              entry: _,
              globalMS: _(_),
            }
          : {
              timelineID: _.strTimelineID,
              timelineState: _.m_strState,
              entry: null,
              globalMS: null,
            };
      }
      let _ = this.m_rgTimelineMetadata.length,
        _ = this.GetTimelineMetadataIndex(_.strTimelineID);
      if (_ === -1 || _ === _ - 1)
        return {
          timelineID: _.strTimelineID,
          timelineState: _.m_strState,
          entry: null,
          globalMS: null,
        };
      for (let _ = _ + 1; _ < _; _++) {
        let _ = this.m_rgTimelineMetadata[_],
          _ = this.GetTimelineData(_.metadata.timeline_id);
        if (_) {
          if (_.m_strState !== `loaded`)
            return {
              timelineID: _.metadata.timeline_id,
              timelineState: _.m_strState,
              entry: null,
              globalMS: null,
            };
          if (_.m_rgEntries.length) {
            let _ = _.m_rgEntries[0],
              _ = this.GetTimelineStartBeforeGlobalZeroMS(
                _.metadata.timeline_id,
              ),
              _ = _.nGlobalOffsetMS.valMS - _ + parseInt(_.time);
            return _ < this.GetGlobalTimelineEndMS().valMS
              ? {
                  timelineID: _.metadata.timeline_id,
                  timelineState: _.m_strState,
                  entry: _,
                  globalMS: _(_),
                }
              : {
                  timelineID: _.metadata.timeline_id,
                  timelineState: _.m_strState,
                  entry: null,
                  globalMS: null,
                };
          }
        }
      }
      return {
        timelineID: this.m_rgTimelineMetadata[_ - 1].metadata.timeline_id,
        timelineState: `loaded`,
        entry: null,
        globalMS: null,
      };
    }
    FindRangeEventsAtGlobalMS(_) {
      let _ = this.GetTimelineOffsetFromGlobal(_, 0),
        _ = this.GetTimelineDataOrStartLoad(_.strTimelineID);
      if (!_ || _.m_strState !== `loaded`) return [];
      let _ = [];
      for (let _ of _.m_rgEntries) {
        if (parseInt(_.time) > _.nTimelineOffsetMS.valMS) break;
        if (_.type !== `event` || parseInt(_.duration) == 0) continue;
        let _ = parseInt(_.time),
          _ = _ + parseInt(_.duration);
        _ <= _.nTimelineOffsetMS.valMS &&
          _ >= _.nTimelineOffsetMS.valMS &&
          _.push(_);
      }
      return _;
    }
    GetStateDescriptionAtGlobalMS(_) {
      let _ = this.GetTimelineOffsetFromGlobal(_.valMS, 0),
        _ = this.GetTimelineDataOrStartLoad(_.strTimelineID);
      if (!_ || _.m_strState !== `loaded`) return null;
      let _ = _(
        _.m_rgStateDescriptions,
        (_) => _.nTimelineOffsetMS.valMS - parseInt(_.time),
      );
      return _ > -1 ? _.m_rgStateDescriptions[_] : null;
    }
    AdvanceGameModeIndex(_) {
      let _ = _.m_iGameModeChanges;
      for (; _ + 1 < _.m_data.m_rgGameModeChanges.length;) {
        let _ = _.m_data.m_rgGameModeChanges[_ + 1];
        if (parseInt(_.time) > _.m_nTimelineOffsetMS) break;
        _++;
      }
      _.m_iGameModeChanges = _;
    }
    AdvanceEntriesIndex(_) {
      for (
        _.m_iEntries == -1 && _.m_iEntries++;
        _.m_iEntries < _.m_data.m_rgEntries.length;
      ) {
        let _ = _.m_data.m_rgEntries[_.m_iEntries];
        if (parseInt(_.time) >= _.m_nTimelineOffsetMS) break;
        _.m_iEntries++;
      }
    }
    CreateTimelineIterator(_, _) {
      let _ = this.FindTimelineAtOffset(_, _);
      if (!_)
        return {
          m_timeline: null,
          m_data: null,
          m_nTimelineOffsetMS: 0,
          m_iGameModeChanges: -1,
          m_iEntries: -1,
        };
      let _ = this.GetTimelineDataOrStartLoad(_.timeline.metadata.timeline_id),
        _ = -1,
        _ = -1;
      if (_?.m_strState == `loaded`) {
        let _ = (_) => _.ulGlobalToTimelineOffset - parseInt(_.time);
        ((_ = _(_.m_rgGameModeChanges, _)), (_ = _(_.m_rgEntries, _)));
      }
      let _ = {
        m_timeline: _.timeline.metadata,
        m_data: _,
        m_nTimelineOffsetMS: Math.max(_.ulGlobalToTimelineOffset, 0),
        m_iGameModeChanges: _,
        m_iEntries: _,
      };
      return (this.AdvanceEntriesIndex(_), this.AdvanceGameModeIndex(_), _);
    }
    HasIteratorReachedEnd(_) {
      return !_.m_timeline;
    }
    AdvanceIterator(_, _) {
      let _ = parseInt(_.m_timeline.duration_ms);
      if (_.m_nTimelineOffsetMS + _ < _ + this.m_ulFirstTimelineOffsetMS) {
        ((_.m_nTimelineOffsetMS += _),
          this.AdvanceEntriesIndex(_),
          this.AdvanceGameModeIndex(_));
        return;
      }
      let _ = this.m_rgTimelineMetadata.findIndex(
        (_) => _.metadata == _.m_timeline,
      );
      _ < 0 || _ == this.m_rgTimelineMetadata.length - 1
        ? (_.m_timeline = null)
        : (_++,
          (_.m_timeline = this.m_rgTimelineMetadata[_].metadata),
          (_.m_data = this.GetTimelineDataOrStartLoad(
            _.m_timeline.timeline_id,
          )),
          (_.m_nTimelineOffsetMS = 0),
          (_.m_iGameModeChanges = 0),
          (_.m_iEntries = 0));
    }
    GetIteratorTimelineState(_) {
      return _.m_data.m_strState;
    }
    GetIteratorGameMode(_) {
      return _.m_iGameModeChanges < 0 ||
        _.m_iGameModeChanges >= _.m_data.m_rgGameModeChanges.length
        ? _.Playing
        : _.m_data.m_rgGameModeChanges[_.m_iGameModeChanges].mode;
    }
    *GetIteratorEntriesWithin(_, _) {
      let _ = _.m_data.m_rgEntries;
      for (let _ = _.m_iEntries; _ >= 0 && _ < _.length; _++) {
        let _ = _[_];
        if (parseInt(_.time) >= _.m_nTimelineOffsetMS + _) break;
        yield _;
      }
    }
    *GetIteratorGameModesWithin(_, _) {
      let _ = _.m_data.m_rgGameModeChanges;
      for (let _ = _.m_iEntries; _ >= 0 && _ < _.length; _++) {
        let _ = _[_];
        if (parseInt(_.time) >= _.m_nTimelineOffsetMS + _) break;
        yield _;
      }
    }
    GetFirstRecording() {
      if (!this.m_bInitialized) return ``;
      let _ = this.m_rgTimelineMetadata[0];
      if (!_) return ``;
      let _ = _.metadata.recordings[0];
      return _ ? _.recording_id : ``;
    }
    GetFirstRecordingOfLastTimelineSession() {
      if (!this.m_bInitialized) return ``;
      let _ = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (!_) return ``;
      let _ = _.metadata.recordings[0];
      return _ ? _.recording_id : ``;
    }
    GetNextRecording(_) {
      if (!this.m_bInitialized || !_) return ``;
      let _ = !1;
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings) {
          if (_) return _.recording_id;
          _.recording_id == _ && (_ = !0);
        }
      return ``;
    }
    BRecordingHasZeroOffset(_) {
      if (!this.m_bInitialized) return !1;
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (_.recording_id == _)
            return !isNaN(parseInt(_.recording_zero_timeline_offset_ms));
      return !1;
    }
    GetTimelineDateMS(_, _) {
      if (!this.m_bInitialized) return 0;
      let _ = this.FindTimelineAtOffset(_, _);
      return _
        ? _.timeline.metadata.date_recorded * 1e3 + _.nTimelineOffsetMS
        : 0;
    }
    InsertEntryIntoTimelineSorted(_, _) {
      _(_.m_rgEntries, _, (_, _) => parseInt(_.time) - parseInt(_.time));
    }
    AddEventToTimeline(_, _, _, _, _, _, _, _) {
      if (!this.m_bInitialized)
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
      let _ = _ + this.GetTimelineStartBeforeGlobalZeroMS(_),
        _ = {
          _: _,
          time: _ + ``,
          type: `event`,
          icon: _,
          title: _,
          description: _,
          priority: _,
          duration: `${_}`,
          possible_clip: 2,
        };
      return (
        _(`adding timeline event marker at ${_} at ${_} MS`),
        this.InsertEntryIntoTimelineSorted(_, _),
        this.FireEvent(`OnInvalidate`, _),
        !0
      );
    }
    RemoveTimelineEvent(_, _) {
      if (!this.m_bInitialized)
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
      let _ = _.m_rgEntries.findIndex((_) => _._ === _);
      return _ < 0
        ? (_(`failed to find entry by id: ${_}`), !1)
        : (_.m_rgEntries.splice(_, 1), this.FireEvent(`OnInvalidate`, _), !0);
    }
    AddUserMarker(_, _, _, _) {
      if (!this.m_bInitialized)
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
      let _ = _ + this.GetTimelineStartBeforeGlobalZeroMS(_),
        _ = {
          _: _,
          time: _ + ``,
          type: `usermarker`,
          icon: _,
          title: ``,
          description: ``,
          priority: 0,
        };
      return (
        _(`adding user marker at ${_} at ${_} MS`),
        this.InsertEntryIntoTimelineSorted(_, _),
        this.FireEvent(`OnInvalidate`, _),
        !0
      );
    }
    UpdateUserMarker(_, _, _) {
      if (!this.m_bInitialized)
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
      let _ = _.m_rgEntries.findIndex((_) => _._ === _);
      if (_ < 0) return (_(`failed to find entry by id: ${_}`), !1);
      let _ = _.m_rgEntries[_],
        _ = _.time;
      return (
        (_.icon = _.strIcon),
        (_.time = `` + _.nTimelineOffsetMS),
        (_.title = _.name),
        (_.description = _.description),
        _ != _.time &&
          (_.m_rgEntries.splice(_, 1),
          this.InsertEntryIntoTimelineSorted(_, _)),
        this.FireEvent(`OnInvalidate`, _),
        !0
      );
    }
    RemoveUserMarker(_, _) {
      if (!this.m_bInitialized)
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
      let _ = _.m_rgEntries.findIndex((_) => _._ === _);
      return _ < 0
        ? (_(`failed to find entry by id: ${_}`), !1)
        : (_.m_rgEntries.splice(_, 1), this.FireEvent(`OnInvalidate`, _), !0);
    }
    AddRunningTimeline(_, _, _) {
      if (this.m_rgTimelineMetadata.find((_) => _.metadata.timeline_id == _))
        return;
      let _ = {
          timeline_id: _,
          game_id: _,
          date_recorded: _,
          recordings: [],
        },
        _ = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1],
        _ = _ ? _.nGlobalOffsetMS.valMS + parseInt(_.metadata.duration_ms) : 0;
      (_(
        this.m_rgTimelineMetadata,
        {
          nGlobalOffsetMS: _(_),
          metadata: _,
        },
        (_, _) => _.metadata.date_recorded - _.metadata.date_recorded,
      ),
        this.m_mapTimelineData.set(_, {
          m_strState: `loaded`,
          m_rgGameModeChanges: [],
          m_rgStateDescriptions: [],
          m_rgEntries: [],
          m_rgPhases: [],
        }));
      let _ = {
        m_metadata: _,
        m_globalStartMS: _,
        m_perfCounterStart: performance.now(),
        m_nPerfCounterOffsetMS: Math.max(0, _() - _) * 1e3,
        m_runningRecording: null,
      };
      (this.m_mapRunningTimelines.set(_, _),
        this.m_schUpdateRunning.IsScheduled() ||
          this.m_schUpdateRunning.Schedule(_, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, _));
    }
    UpdateRunningTimelines() {
      let _;
      (this.m_mapRunningTimelines.forEach((_) => {
        _ = _.m_metadata.timeline_id;
        let _ =
          performance.now() - _.m_perfCounterStart + _.m_nPerfCounterOffsetMS;
        _ > (parseInt(_.m_metadata.duration_ms) || 0) &&
          (_.m_metadata.duration_ms = _.toString());
      }),
        this.m_mapRunningTimelines.size > 0 &&
          this.m_schUpdateRunning.Schedule(_, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, _));
    }
    RunningTimelineStopped(_, _) {
      let _ = this.m_mapRunningTimelines.get(_);
      _ &&
        ((_.m_metadata.duration_ms = _),
        this.m_mapRunningTimelines.delete(_),
        this.FireEvent(`OnInvalidate`, _));
    }
    AddRunningTimelineEntry(_) {
      let _ = this.m_mapRunningTimelines.get(_.timeline_id),
        _ = this.m_mapTimelineData.get(_.timeline_id);
      if (!_ || !_) return;
      let _ = _(_);
      if (!_) return;
      _(_)
        ? _(
            _.m_rgGameModeChanges,
            _,
            (_, _) => parseInt(_.time) - parseInt(_.time),
          )
        : _(_)
          ? _(
              _.m_rgStateDescriptions,
              _,
              (_, _) => parseInt(_.time) - parseInt(_.time),
            )
          : _(_.m_rgEntries, _, (_, _) => parseInt(_.time) - parseInt(_.time));
      let _ = parseInt(_.m_metadata.duration_ms) || 0,
        _ = parseInt(_.time);
      (_ < _ && (_.m_metadata.duration_ms = _.toString()),
        this.FireEvent(`OnInvalidate`, _.timeline_id));
    }
    TimelineDeleted(_) {
      let _ = this.m_rgTimelineMetadata
        .filter((_) => _.metadata.timeline_id !== _)
        .map((_) => _.metadata);
      (this.UpdateTimelineMetadata(_),
        this.m_mapTimelineData.delete(_),
        this.FireEvent(`OnInvalidate`, _));
    }
    RecordingSessionChanged(_) {
      let _ = _.session_id,
        _ = _.notification_type;
      if (_ == 1) {
        let _ = this.m_mapRunningTimelines.get(_.timeline_id);
        if (!_) {
          (this.FireEvent(`OnInvalidateRecording`, _.timeline_id, _),
            _(!1, `Received recording started message before timeline info`));
          return;
        }
        let _ = {
          recording_id: _,
          start_offset_ms: _.start_offset,
          recording_zero_timeline_offset_ms: _.start_offset,
          duration_ms: _.duration_ms,
          recording_type: _.recording_type,
        };
        (_.m_metadata.recordings.push(_), (_.m_runningRecording = _));
      } else if (_ == 2) {
        let _ = this.GetRunningTimelineForRecording(_.timeline_id, _);
        if (!_) return;
        ((_.m_runningRecording.duration_ms = _.duration_ms),
          (_.m_runningRecording = null),
          this.FireEvent(`OnInvalidateRecording`, _.timeline_id, _));
      } else if (_ == 4) {
        let _ = this.GetTimelineMetadata(_.timeline_id);
        if (_) {
          let _ = _.metadata.recordings.find((_) => _.recording_id === _);
          if (_) {
            ((_.start_offset_ms = _.start_offset),
              (_.duration_ms = _.duration_ms));
            let _ = parseInt(_.start_offset) + parseInt(_.duration_ms);
            _ > (parseInt(_.metadata.duration_ms) || 0) &&
              (_.metadata.duration_ms = _.toString());
          }
        }
        this.GetRunningTimelineForRecording(_.timeline_id, _) ||
          this.FireEvent(`OnInvalidateRecording`, _.timeline_id, _);
      } else if (_ == 3) {
        let _ = this.GetTimelineMetadata(_.timeline_id);
        if (_) {
          let _ = _.metadata.recordings.filter((_) => _.recording_id !== _);
          _.metadata.recordings = _;
        }
      }
      this.FireEvent(`OnInvalidate`, _.timeline_id);
    }
    GetGlobalTimelineEndMS() {
      let _ = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (_) {
        let _ = isNaN(parseInt(_.metadata.duration_ms))
          ? 0
          : parseInt(_.metadata.duration_ms);
        return _(_.nGlobalOffsetMS.valMS + _);
      }
      return _(0);
    }
    GetEndOfRecordingsMS() {
      let _ = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (_) {
        let _ = _.metadata.recordings[_.metadata.recordings.length - 1];
        if (_) {
          let _ = this.m_mapRunningTimelines.has(_.metadata.timeline_id),
            _ = isNaN(parseInt(_.start_offset_ms))
              ? 0
              : parseInt(_.start_offset_ms),
            _ = isNaN(parseInt(_.metadata.duration_ms))
              ? 0
              : parseInt(_.metadata.duration_ms),
            _ = 0;
          return (
            _
              ? (_ = Math.max(0, _ - _))
              : isNaN(parseInt(_.duration_ms)) || (_ = parseInt(_.duration_ms)),
            _(_.nGlobalOffsetMS.valMS + _ + _)
          );
        }
      }
      return null;
    }
    GetTotalRecordingDuration() {
      let _ = 0;
      return (
        this.m_rgTimelineMetadata.forEach((_) => {
          _.metadata.recordings.forEach((_) => {
            isNaN(parseInt(_.duration_ms)) || (_ += parseInt(_.duration_ms));
          });
        }),
        _
      );
    }
    GetTimelineStartBeforeGlobalZeroMS(_) {
      return _ == this.m_rgTimelineMetadata[0].metadata.timeline_id
        ? this.m_ulFirstTimelineOffsetMS
        : 0;
    }
    async GenerateNamePartsFromTimeline(_, _, _, _) {
      let _,
        _ = !1,
        _,
        _,
        _,
        _;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = !1;
        if (!_) {
          if (_.metadata.timeline_id != _) continue;
          ((_ = !0), (_ = !0));
        }
        let _ = _.metadata.timeline_id == _;
        await this.LoadTimelineData(_.metadata.timeline_id);
        let _ = this.m_mapTimelineData.get(_.metadata.timeline_id);
        (_ && (_ = _.metadata.date_recorded + Math.floor(_ / 1e3)),
          _ && (_ = _.metadata.date_recorded + Math.floor(_ / 1e3)));
        for (let _ of _.m_rgEntries) {
          let _ = parseInt(_.time);
          if ((_ && _ < _) || (_ && _ > _) || (!_(_) && !_(_))) continue;
          let _ = _(_);
          (!_ || (_ && _.rank > _.rank)) && (_ = _);
        }
        for (let _ of _.m_rgStateDescriptions) {
          let _ = parseInt(_.time);
          (_ && _ > _) || ((!_ || _ < _) && ((_ = _), (_ = _)));
        }
        if (_) break;
      }
      let _ = _?.strTitle ?? _?.title,
        _ = new _(this.GetGameID());
      return {
        strTimelinePart: _,
        strAppNamePart: _.GetAppInfo(_.GetInternalAppID())?.name,
        rtStart: _,
        rtEnd: _,
      };
    }
    async GenerateClipNameFromTimeline(_, _, _, _) {
      let { strTimelinePart: _, strAppNamePart: _ } =
          await this.GenerateNamePartsFromTimeline(_, _, _, _),
        _ = new Date(),
        _ = [
          _,
          `${_.getFullYear()}-${(_.getMonth() + 1).toString().padStart(2, `0`)}-${_.getDate().toString().padStart(2, `0`)} ${_.toLocaleTimeString(_.GetPreferredLocales())}`,
          _,
        ]
          .filter((_) => !!_)
          .join(` - `);
      return (_(`Generated clip name "${_}"`), _);
    }
  };
(_([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `UpdateRunningTimelines`, null));
function _(_) {
  switch (_.type) {
    case `event`:
      let _ = _;
      return {
        rank: 5e4 + _.priority,
        strTitle: _.title,
      };
    case `usermarker`:
      let _ = _;
      return !_.title && !_.description
        ? null
        : {
            rank: 1e5 + _.priority,
            strTitle: _.title || _.description,
          };
    case `state_description`:
      return {
        rank: 4e4,
        strTitle: _.title,
      };
    case `achievement`:
      return {
        rank: 9e4,
        strTitle: _.title,
      };
  }
  return null;
}
function _(_) {
  if (!Array.isArray(_.entries)) {
    let _ = [];
    (_.entries &&
      typeof _.entries == `object` &&
      ((_ = Object.values(_.entries)),
      (_ = _.filter((_) => _ && typeof _ == `object` && `time` in _)),
      _.sort((_, _) => parseInt(_.time) - parseInt(_.time))),
      (_.entries = _));
  }
}
var _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.DownloadFailed = 1)] = `DownloadFailed`),
      (_[(_.PlaybackError = 2)] = `PlaybackError`),
      (_[(_.MediaTypeError = 3)] = `MediaTypeError`),
      _
    );
  })({}),
  _ = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new _();
    m_nDownloadFailureCount = 0;
    m_bInitailized = !1;
    m_bPaused = !1;
    m_bAtEnd = !1;
    m_strMediaTypeError = null;
    m_ePlayerError = 0;
    m_bUserInputNeeded = !1;
    m_bMuted = !1;
    m_bSeekReadyToPlay = !1;
    m_bVideoElementPlaying = !1;
    m_nPlaybackSpeed = 1;
    m_bIsWaiting = !0;
    m_bAutoPlay;
    m_bLoadedMetadata = !1;
    m_nPlaybackTime = 0;
    m_nVideoStartTime = 0;
    m_nVideoDuration = 0;
    m_nVolume = 1;
    m_eSeekType = _.Absolute;
    constructor(_) {
      (_(this), (this.m_bAutoPlay = !!_));
    }
    IsPaused() {
      return this.m_bPaused;
    }
    IsAtEnd() {
      return this.m_bAtEnd;
    }
    BSeekReadyToPlay() {
      return this.m_bSeekReadyToPlay;
    }
    GetMediaTypeError() {
      return this.m_strMediaTypeError;
    }
    GetPlaybackError() {
      return this.m_ePlayerError;
    }
    GetUserInputNeeded() {
      return this.m_bUserInputNeeded;
    }
    GetPlaybackTime() {
      return this.m_eSeekType === _.Absolute
        ? this.m_nPlaybackTime
        : this.m_nPlaybackTime - this.m_nVideoStartTime;
    }
    GetTimelineDuration() {
      return this.m_eSeekType === _.Absolute
        ? this.m_nVideoDuration
        : this.m_nVideoDuration - this.m_nVideoStartTime;
    }
    GetVolume() {
      return this.m_nVolume;
    }
    GetMuted() {
      return this.m_bMuted;
    }
    GetMPDURL() {
      return this.m_player?.GetMPDURL();
    }
    GetVideoElementCurrentTime() {
      return this.m_elVideo?.currentTime;
    }
    BVideoElementPlaying() {
      return this.m_bVideoElementPlaying;
    }
    BVideoElementWaiting() {
      return this.m_bIsWaiting;
    }
    GetVideoHeight() {
      return this.m_elVideo?.clientHeight || 0;
    }
    GetVideoWidth() {
      return this.m_elVideo?.clientWidth || 0;
    }
    GetLoadedMetadata() {
      return this.m_bLoadedMetadata;
    }
    Start(_, _, _, _ = _.Absolute) {
      (this.Stop(),
        (this.m_bAtEnd = !1),
        (this.m_elVideo = _),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-userpausechange`,
          this.OnUserPauseChange,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `playing`,
          this.OnVideoPlaying,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `pause`,
          this.OnVideoPause,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `timeupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `ended`,
          this.OnVideoEnd,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-ended`,
          this.OnVideoEnd,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-bufferupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-downloadfailed`,
          this.OnDownloadFailed,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-playbackerror`,
          this.OnPlaybackError,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-userinputneeded`,
          this.OnUserInputNeeded,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `waiting`,
          this.OnVideoWaiting,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `volumechange`,
          this.OnVolumeChange,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `canplay`,
          this.OnCanPlay,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `seeking`,
          this.OnSeeking,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `loadedmetadata`,
          this.OnLoadedMetadata,
        ),
        (this.m_player = new _(this.m_elVideo)),
        this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
        this.m_player.PlayMPD(_),
        (this.m_bMuted = _(`muted`)),
        (this.m_nVolume = _(`volume`)),
        this.m_player.SetMuted(this.m_bMuted),
        this.m_player.SetVolume(this.m_nVolume),
        (this.m_bSeekReadyToPlay = !1),
        (this.m_eSeekType = _));
      let _ = `seeking_${_}_${_.toFixed(3)}`;
      (_(`CGameRecordingVideo:: perf mark ${_}`),
        performance.mark(_),
        this.m_player.Seek(_, this.m_eSeekType),
        (this.m_bPaused = this.m_player.IsPaused()),
        (this.m_bInitailized = !0));
    }
    Stop() {
      (this.m_listeners.Unregister(),
        this.m_player && this.m_player.Close(),
        (this.m_elVideo = null),
        (this.m_player = null),
        (this.m_bInitailized = !1),
        (this.m_bPaused = !1),
        (this.m_bAtEnd = !1),
        (this.m_bSeekReadyToPlay = !1),
        (this.m_bVideoElementPlaying = !1),
        (this.m_ePlayerError = 0),
        (this.m_bUserInputNeeded = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_nVideoStartTime = 0),
        (this.m_nVideoDuration = 0),
        (this.m_bLoadedMetadata = !1),
        (this.m_bIsWaiting = !0));
    }
    async UpdateMPD() {
      await this.m_player?.UpdateMPD();
    }
    IsInitialized() {
      return this.m_bInitailized;
    }
    OnCanPlay() {
      ((this.m_bSeekReadyToPlay = !0), (this.m_bAtEnd = !1));
    }
    OnUserPauseChange() {
      this.m_bPaused = this.m_player.IsPaused();
    }
    OnVideoPlaying() {
      ((this.m_bVideoElementPlaying = !0),
        (this.m_bIsWaiting = !1),
        this.SetPlaybackSpeed(this.m_nPlaybackSpeed),
        _(`video playing`));
    }
    OnVideoPause() {
      ((this.m_bVideoElementPlaying = !1), _(`video paused`));
    }
    OnVideoTimeUpdate() {
      ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
        (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
        (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()));
    }
    OnVideoEnd() {
      ((this.m_bVideoElementPlaying = !1),
        (this.m_bAtEnd = !0),
        _(`video ended`));
    }
    OnSeeking() {
      (_(`video on seeking`),
        (this.m_bVideoElementPlaying = !1),
        (this.m_bIsWaiting = !0),
        (this.m_bAtEnd = !1));
    }
    OnLoadedMetadata() {
      this.m_bLoadedMetadata = !0;
    }
    async OnDownloadFailed(_) {
      (_.detail || _.PlaybackError) == _.UnsupportedMediaType
        ? (_(`media type error`), (this.m_ePlayerError = 3))
        : (_(`video download failed`, _.detail),
          this.m_nDownloadFailureCount < 2
            ? (await this.m_player?.UpdateMPD(), this.m_nDownloadFailureCount++)
            : (this.m_ePlayerError = 1));
    }
    OnPlaybackError() {
      ((this.m_bVideoElementPlaying = !1),
        _(`video playback error`),
        (this.m_ePlayerError = 2));
    }
    OnUserInputNeeded() {
      ((this.m_bUserInputNeeded = !0),
        !this.m_bMuted &&
          this.m_elVideo.autoplay &&
          (_(`Failed to autoplay video. Muting and trying again.`),
          this.SetMute(!0),
          this.Play()));
    }
    OnVolumeChange() {
      _(`volume change`);
    }
    OnVideoWaiting() {
      ((this.m_bIsWaiting = !0),
        (this.m_bVideoElementPlaying = !1),
        this.GetTimelineDuration() - this.GetPlaybackTime() < 1 &&
          (this.m_bAtEnd = !0));
    }
    UserInputReceived() {
      this.IsInitialized() &&
        ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
    }
    SetVolume(_) {
      ((this.m_nVolume = _),
        _(`volume`, _),
        _ > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
        this.IsInitialized() && this.m_player.SetVolume(_));
    }
    SetMute(_, _) {
      (this.IsInitialized() && this.m_player.SetMuted(_),
        (this.m_bMuted = _),
        _ && _(`muted`, _));
    }
    TogglePlayPause() {
      this.IsInitialized() &&
        (this.m_player.IsPaused() ? this.Play() : this.Pause());
    }
    Play() {
      this.IsInitialized() && this.m_player.Play();
    }
    Pause() {
      this.IsInitialized() && (this.m_player.Pause(), (this.m_bIsWaiting = !1));
    }
    SetPlaybackSpeed(_) {
      ((this.m_nPlaybackSpeed = _),
        this.IsInitialized() && (this.m_elVideo.playbackRate = _));
    }
    GetPlaybackSpeed() {
      return this.m_nPlaybackSpeed;
    }
    Seek(_) {
      if (!this.IsInitialized()) return;
      let _ = `seeking_${this.m_player.GetMPDURL()}_${_.toFixed(3)}`;
      ((this.m_bAtEnd = !1),
        (this.m_bSeekReadyToPlay = !1),
        performance.mark(_),
        _(`CGameRecordingVideo:: perf mark ${_}`),
        _(`CGameRecordingVideo::Seek to ${_}`),
        (this.m_nPlaybackTime = _),
        this.m_player.Seek(_, this.m_eSeekType));
    }
  };
(_([_], _.prototype, `m_bInitailized`, void 0),
  _([_], _.prototype, `m_bPaused`, void 0),
  _([_], _.prototype, `m_bAtEnd`, void 0),
  _([_], _.prototype, `m_strMediaTypeError`, void 0),
  _([_], _.prototype, `m_ePlayerError`, void 0),
  _([_], _.prototype, `m_bUserInputNeeded`, void 0),
  _([_], _.prototype, `m_bMuted`, void 0),
  _([_], _.prototype, `m_bSeekReadyToPlay`, void 0),
  _([_], _.prototype, `m_bVideoElementPlaying`, void 0),
  _([_], _.prototype, `m_nPlaybackSpeed`, void 0),
  _([_], _.prototype, `m_bIsWaiting`, void 0),
  _([_], _.prototype, `m_bLoadedMetadata`, void 0),
  _([_], _.prototype, `m_nPlaybackTime`, void 0),
  _([_], _.prototype, `m_nVideoStartTime`, void 0),
  _([_], _.prototype, `m_nVideoDuration`, void 0),
  _([_], _.prototype, `m_nVolume`, void 0),
  _([_], _.prototype, `m_eSeekType`, void 0),
  _([_], _.prototype, `Start`, null),
  _([_], _.prototype, `Stop`, null),
  _([_], _.prototype, `OnCanPlay`, null),
  _([_], _.prototype, `OnUserPauseChange`, null),
  _([_], _.prototype, `OnVideoPlaying`, null),
  _([_], _.prototype, `OnVideoPause`, null),
  _([_], _.prototype, `OnVideoTimeUpdate`, null),
  _([_], _.prototype, `OnVideoEnd`, null),
  _([_], _.prototype, `OnSeeking`, null),
  _([_], _.prototype, `OnLoadedMetadata`, null),
  _([_], _.prototype, `OnDownloadFailed`, null),
  _([_], _.prototype, `OnPlaybackError`, null),
  _([_], _.prototype, `OnUserInputNeeded`, null),
  _([_], _.prototype, `OnVolumeChange`, null),
  _([_], _.prototype, `OnVideoWaiting`, null),
  _([_], _.prototype, `UserInputReceived`, null));
function _(_, _) {
  return _((_) => (_(_), () => _()), [_]);
}
var _;
function _() {
  if (!_) {
    let _ = window.localStorage.getItem(`gameRecordingPlayer`) || `{}`,
      _;
    try {
      _ = JSON.parse(_);
    } catch {
      _ = {};
    }
    _ = {
      muted: _.muted || !1,
      volume: _.volume || 1,
    };
  }
  return _;
}
function _(_) {
  return _()[_];
}
function _(_, _) {
  let _ = _();
  _[_] = _;
  let _ = JSON.stringify(_);
  window.localStorage.setItem(`gameRecordingPlayer`, _);
}
var _ = (function (_) {
  return (
    (_.NotRunning = `NotRunning`),
    (_.NotRecording = `NotRecording`),
    (_.ManualRecording = `ManualRecording`),
    (_.BackgroundRecording = `BackgroundRecording`),
    _
  );
})({});
function _(_) {
  let { app: _ } = _(_);
  if (!_) return `NotRecording`;
  switch (_.recording_type) {
    default:
    case 0:
    case 1:
      return `NotRecording`;
    case 2:
      return `ManualRecording`;
    case 3:
      return `BackgroundRecording`;
  }
}
var _ = _(),
  _ = (function (_) {
    return (
      (_.Overlay = `Overlay`),
      (_.Clips = `Clips`),
      (_.Background = `Background`),
      (_.CommunityClip = `Community`),
      (_.ChatClip = `Chat`),
      (_.Partner = `Partner`),
      _
    );
  })({}),
  _ = 3 * _,
  _ = 5 * _,
  _ = _ + 2e3,
  _ = 1e3,
  _ = class {
    m_gameRecordingVideo = null;
    m_timelineLoader = null;
    m_fnUnregisterLoader = null;
    m_rgListeners = [];
    m_videoRef;
    m_bHidePlayer = !1;
    m_fnGetManifest;
    m_strRecordingID = null;
    m_nPendingSeekSec = -1;
    m_playbackDefinition = null;
    m_pendingStop = null;
    m_durationMS = _(null);
    m_lastRecordingGlobalMS = _(null);
    m_bWasLiveEdge = !1;
    m_nGlobalTimelinePlaybackMS = null;
    m_nGlobalTimelinePlaybackSec = null;
    m_fnUnregisterAutorun = [];
    m_eGameRecordingMode;
    m_rgSeekPerf = [];
    m_eRecordingState = _.NotRecording;
    m_eRecordingSetting = `Never`;
    m_bGamepadMode = !1;
    m_bControlsVisible = !0;
    m_fnRenderGlyph = void 0;
    m_previousHighlightEntry = null;
    m_nextHighlightEntry = null;
    m_displayHighlightEntry = null;
    m_nRelativeTimeForDisplay = void 0;
    m_rgClipOffsets = [];
    m_phasePreview = void 0;
    constructor(_, _, _, _, _, _, _, _) {
      (_(this),
        (this.m_fnGetManifest = _),
        (this.m_gameRecordingVideo = new _(!0)),
        (this.m_eGameRecordingMode = _),
        (this.m_bGamepadMode = _),
        (this.m_playbackDefinition = _),
        _ != null && (this.m_bControlsVisible = _),
        _ === `Overlay` && (this.m_bHidePlayer = !0),
        _ && this.SetClipOffsets(_),
        (this.m_fnRenderGlyph = _),
        this.m_fnUnregisterAutorun.push(
          _(
            () => ({
              bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
              bIsPaused: this.m_gameRecordingVideo.IsPaused(),
            }),
            (_) => {
              _.bIsAtEnd && !_.bIsPaused && this.PlayNextTimelineRecording();
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          _(
            () => this.m_gameRecordingVideo.GetPlaybackTime(),
            (_) => {
              if (
                this.m_pendingStop &&
                this.m_pendingStop.m_strRecordingID == this.m_strRecordingID &&
                this.m_pendingStop.m_nOffsetMS <= _ * 1e3
              ) {
                if (this.m_playbackDefinition?.m_nLoopDurationMS) {
                  this.StartPlaybackForRange();
                  return;
                }
                (this.m_gameRecordingVideo.Pause(),
                  (this.m_pendingStop = null));
              }
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          _(
            () => ({
              playback: this.m_gameRecordingVideo.GetPlaybackTime(),
              bVideoPlaying: this.m_gameRecordingVideo.BVideoElementPlaying(),
            }),
            (_) => {
              if (_.bVideoPlaying) {
                let _ =
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    this.m_strRecordingID,
                    _.playback * 1e3,
                    0,
                  );
                if (_)
                  (this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
                    _.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
                      this.m_eGameRecordingMode === `Overlay` &&
                      this.m_gameRecordingVideo.GetPlaybackSpeed() > 1 &&
                      (console.log(
                        ` hitting live edge, slow down the playback `,
                      ),
                      this.m_gameRecordingVideo.SetPlaybackSpeed(1)));
                else {
                  let _ = this.GetLiveEdgeMS();
                  isNaN(_.valMS) ||
                    (this.SetPlaytimeFromGlobalMS(_), this.FocusGlobalMS(_));
                }
              }
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          _(
            () => ({
              globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
              bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
              bHidePlayer: this.m_bHidePlayer,
            }),
            (_) => {
              this.m_timelineLoader?.BInitialized() &&
                (_.bHidePlayer
                  ? this.SetEntriesForLiveEdge()
                  : (!this.m_previousHighlightEntry ||
                      !this.m_nextHighlightEntry ||
                      (this.m_nextHighlightEntry?.globalMS &&
                        _.globalPlaybackMS >=
                          this.m_nextHighlightEntry.globalMS.valMS) ||
                      (this.m_previousHighlightEntry?.globalMS &&
                        _.globalPlaybackMS <=
                          this.m_previousHighlightEntry.globalMS.valMS) ||
                      (_.bVideoPaused &&
                        this.m_previousHighlightEntry?.globalMS &&
                        _.globalPlaybackMS >=
                          this.m_previousHighlightEntry.globalMS.valMS +
                            1e3)) &&
                    (this.CalculatePreviousHighlightEntry(
                      _.globalPlaybackMS,
                      _.bVideoPaused,
                    ),
                    this.CalculateNextHighlightEntry(
                      _.globalPlaybackMS,
                      _.bVideoPaused,
                    )));
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          _(
            () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
            (_) => {
              if (_) {
                let _ = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                try {
                  let _ = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                    _ = performance.measure(_, _);
                  (_(
                    `CGameRecordingVideo:: perf measure ${_} duration ${_.duration}`,
                  ),
                    _ && this.m_rgSeekPerf.push(_.duration));
                } catch (_) {
                  _(`CGameRecordingVideo:: cant measure ${_}, error: ${_}`);
                }
              }
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.SetLoader(_));
    }
    AddEventListener(_) {
      return (this.m_rgListeners.push(_), () => _(this.m_rgListeners, _));
    }
    FireEvent(_, ..._) {
      for (let _ of this.m_rgListeners) {
        let _ = _[_];
        _ instanceof Function && _.apply(_, _);
      }
    }
    dispose() {
      (this.m_fnUnregisterAutorun.forEach((_) => _()),
        (this.m_fnUnregisterLoader &&= (this.m_fnUnregisterLoader(), null)));
    }
    SetVideoElement(_) {
      if (_) {
        if (this.m_videoRef === _) return;
        if (((this.m_videoRef = _), this.m_strRecordingID)) {
          let _ = this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
          ((this.m_nPendingSeekSec = -1),
            this.ChangePlaybackRecording(this.m_strRecordingID, _));
        } else this.TryPlayInitialTimelineVideo();
      } else (this.m_gameRecordingVideo.Stop(), (this.m_videoRef = null));
    }
    OnInvalidateRecording(_, _) {
      let _ = this.m_fnGetManifest(_);
      this.m_gameRecordingVideo.GetMPDURL() == _ &&
        (_(`Recording invalidated for ${_}. Reloading MPD`),
        this.m_gameRecordingVideo.UpdateMPD());
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        (this.m_bWasLiveEdge = !0),
        this.TryPlayInitialTimelineVideo());
      let _ = _(this.m_timelineLoader.GetGameID());
      this.SetClipOffsets(_);
    }
    OnInvalidate(_) {
      if (
        ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(_))
      )
        this.SetEntriesForLiveEdge();
      else {
        if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
          let _ = this.m_timelineLoader.GetTimelineMetadataIndex(_),
            _ = this.m_timelineLoader.GetTimelineMetadataIndex(
              this.m_previousHighlightEntry.timelineID,
            ),
            _ = this.m_timelineLoader.GetTimelineMetadataIndex(
              this.m_nextHighlightEntry.timelineID,
            );
          if (_ < _ || _ > _) return;
        }
        (this.CalculatePreviousHighlightEntry(
          this.m_nGlobalTimelinePlaybackMS,
          this.GetGameRecordingVideo().IsPaused(),
        ),
          this.CalculateNextHighlightEntry(
            this.m_nGlobalTimelinePlaybackMS,
            this.GetGameRecordingVideo().IsPaused(),
          ));
      }
    }
    OnTimelineLoaded(_) {
      (this.m_previousHighlightEntry &&
        this.m_previousHighlightEntry.timelineID === _ &&
        this.CalculatePreviousHighlightEntry(
          this.m_nGlobalTimelinePlaybackMS,
          this.GetGameRecordingVideo().IsPaused(),
        ),
        this.m_nextHighlightEntry &&
          this.m_nextHighlightEntry.timelineID === _ &&
          this.CalculateNextHighlightEntry(
            this.m_nGlobalTimelinePlaybackMS,
            this.GetGameRecordingVideo().IsPaused(),
          ));
    }
    SetEntriesForLiveEdge() {
      let _ = this.GetLiveEdgeMS();
      (this.CalculatePreviousHighlightEntry(_.valMS, !0),
        (this.m_nextHighlightEntry = null));
    }
    CalculatePreviousHighlightEntry(_, _) {
      let _ = _ ? 1 : _ * this.m_gameRecordingVideo.GetPlaybackSpeed(),
        _ = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
          _ - _,
        );
      this.m_previousHighlightEntry =
        _.timelineState === `loaded` && !_.entry
          ? this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(_)
          : _;
    }
    CalculateNextHighlightEntry(_, _) {
      let _ = this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(_);
      if (_.timelineState === `loaded` && !_.entry) {
        let _ = _ ? 1 : _ * this.m_gameRecordingVideo.GetPlaybackSpeed();
        this.m_nextHighlightEntry =
          this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(_ - _);
      } else this.m_nextHighlightEntry = _;
    }
    GetPreviousHighlightEntry() {
      return this.m_previousHighlightEntry;
    }
    GetNextHighlightEntry() {
      return this.m_nextHighlightEntry;
    }
    GetDisplayHighlightEntry() {
      return this.m_displayHighlightEntry;
    }
    SetDisplayHighlightEntry(_, _) {
      this.m_displayHighlightEntry = {
        entry: _,
        duration: _,
      };
    }
    GetPhasePreview() {
      return this.m_phasePreview;
    }
    SetPhasePreview(_) {
      this.m_phasePreview = _;
    }
    GetRelativeTimeForDisplay() {
      return this.m_nRelativeTimeForDisplay;
    }
    ClearRelativeTimeDisplay() {
      this.m_nRelativeTimeForDisplay = void 0;
    }
    GetClipOffsets() {
      return this.m_rgClipOffsets;
    }
    SetClipOffsets(_) {
      if (!this.m_timelineLoader?.BInitialized()) return;
      let _ = [];
      (_ &&
        _.length &&
        _.forEach((_) => {
          let _ = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
            _.start_timeline_id,
            0,
          );
          if (!_) return;
          let _ = _.nGlobalOffsetMS + parseInt(_.start_offset_ms);
          _.push({
            strClipID: _.clip_id,
            nGlobalOffsetMS: _,
            nDurationMS: parseInt(_.duration_ms),
          });
        }),
        (this.m_rgClipOffsets = _));
    }
    GetTotalMS() {
      return this.m_durationMS;
    }
    GetIsActiveTimeline(_) {
      return this.m_timelineLoader.IsActiveTimeline(_);
    }
    BIsVideoElementPaused() {
      return this.m_gameRecordingVideo.IsPaused();
    }
    BInitialized() {
      return this.m_timelineLoader.BInitialized();
    }
    GetHidePlayer() {
      return this.m_bHidePlayer;
    }
    SetHidePlayer(_) {
      (_ && (this.m_strRecordingID = null), (this.m_bHidePlayer = _));
    }
    BPlayerInitialized() {
      return this.m_gameRecordingVideo.IsInitialized();
    }
    GetGameRecordingVideo() {
      return this.m_gameRecordingVideo;
    }
    GetGameID() {
      return this.m_timelineLoader.GetGameID();
    }
    GetClipID() {
      return this.m_timelineLoader.GetClipID();
    }
    GetRecordingState() {
      return this.m_eRecordingState;
    }
    SetRecordingState(_) {
      this.m_eRecordingState = _;
    }
    GetLoader() {
      return this.m_timelineLoader;
    }
    SetLoader(_) {
      this.m_timelineLoader != _ &&
        (this.m_fnUnregisterLoader && this.m_fnUnregisterLoader(),
        (this.m_timelineLoader = _),
        (this.m_fnUnregisterLoader =
          this.m_timelineLoader.AddEventListener(this)),
        _.BInitialized() && this.OnLoaderInitialized());
    }
    SetGetManifest(_) {
      this.m_fnGetManifest = _;
    }
    GetRecordingID() {
      return this.m_strRecordingID;
    }
    GetRecordingSetting() {
      return this.m_eRecordingSetting;
    }
    SetRecordingSetting(_) {
      this.m_eRecordingSetting = _;
    }
    GetRecordingMode() {
      return this.m_eGameRecordingMode;
    }
    ShouldModeShowClipControls() {
      switch (this.m_eGameRecordingMode) {
        case `Overlay`:
        case `Clips`:
        case `Background`:
          return !0;
        default:
          return !1;
      }
    }
    CanModeAddMarker() {
      switch (this.m_eGameRecordingMode) {
        case `Overlay`:
        case `Clips`:
        case `Background`:
          return !0;
        default:
          return !1;
      }
    }
    GetPlaybackStats() {
      if (!this.m_rgSeekPerf.length) return null;
      let _ = this.m_rgSeekPerf.length,
        _ = this.m_rgSeekPerf.reduce((_, _) => _ + _) / _;
      return {
        nMean: _,
        nStdDev: Math.sqrt(
          this.m_rgSeekPerf.map((_) => (_ - _) ** 2).reduce((_, _) => _ + _) /
            _,
        ),
        nMax: Math.max(...this.m_rgSeekPerf),
        nMin: Math.min(...this.m_rgSeekPerf),
        nLength: _,
        nLastVal: this.m_rgSeekPerf[_ - 1],
      };
    }
    async StartPlaybackForRange() {
      let _ =
        this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
          this.m_playbackDefinition.m_strTimelineID,
          0,
        )?.nGlobalOffsetMS || 0;
      _ += this.m_playbackDefinition.m_nTimelineStartMS;
      let _;
      if (
        ((_ = this.m_playbackDefinition.m_strEntryID
          ? await this.m_timelineLoader.FindRecordingAndOffsetForEntry(
              this.m_playbackDefinition.m_strEntryID,
            )
          : this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              _,
            )),
        _)
      ) {
        if (this.m_playbackDefinition.m_nLoopDurationMS) {
          let _ = _ + this.m_playbackDefinition.m_nLoopDurationMS,
            _ =
              this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                _,
              );
          this.m_pendingStop = {
            m_strRecordingID: _.strRecordingID,
            m_nOffsetMS: _.nRecordingOffsetMS,
          };
        }
        (this.UpdateGlobalPlayTime(_),
          this.ChangePlaybackRecording(
            _.strRecordingID,
            _.nRecordingOffsetMS / 1e3,
          ));
      }
    }
    TryPlayInitialTimelineVideo() {
      if (this.m_timelineLoader.BInitialized() && !this.m_bHidePlayer) {
        if (this.m_playbackDefinition) this.StartPlaybackForRange();
        else if (this.m_eGameRecordingMode === `Overlay`) {
          let _ = this.GetLiveEdgeMS(),
            _ = this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession(),
            _ = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              _,
              0,
              0,
            );
          _ && _.valMS < _.nGlobalOffsetMS
            ? (this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
              this.ChangePlaybackRecording(_, 0))
            : isNaN(_.valMS) || this.SetPlaytimeFromGlobalMS(_, !1, !0);
        } else if (this.m_eGameRecordingMode === `Background`) {
          let _ =
            this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
          this.SetPlaytimeFromRecordingOffset(_, 0);
        } else {
          let _ = this.m_timelineLoader.GetFirstRecording();
          this.SetPlaytimeFromRecordingOffset(_, 0);
        }
      }
    }
    GetTotalSeconds() {
      return Math.floor(
        this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1e3,
      );
    }
    GetCurrentPlaybackGlobalMS(_ = 0) {
      let _ = Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3) + _;
      return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
        this.m_strRecordingID,
        _,
        0,
      );
    }
    GetIsLiveEdge() {
      let _ = this.GetGlobalMSPlaytime().valMS || 0;
      return this.m_eGameRecordingMode === `Overlay`
        ? this.m_lastRecordingGlobalMS
          ? this.m_bWasLiveEdge
          : !1
        : this.GetTotalMS().valMS - _ < 1;
    }
    GetLiveEdgeBufferWindowStartMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? _(Math.max(0, this.m_lastRecordingGlobalMS.valMS - _ - 1e3))
        : this.GetTotalMS();
    }
    GetLiveEdgeMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? _(Math.max(0, this.m_lastRecordingGlobalMS.valMS - _))
        : _(Math.max(0, this.GetTotalMS().valMS - 1));
    }
    GetTimelineAndOffsetRelativeToCurrentPlayback(_ = 0) {
      return (
        this.GetCurrentPlaybackGlobalMS(_) ||
        (_(
          `failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3)} MS`,
        ),
        null)
      );
    }
    SeekDeltaMS(_) {
      let _ = this.GetGlobalMSPlaytime();
      if (!this.m_strRecordingID) {
        let _ =
          _ > 0
            ? this.GetClosestNextRecordingForGlobalMS(_)
            : this.GetClosestPreviousRecordingForGlobalMS(_);
        if (_) {
          let _ = _ > 0 ? _ : Math.max(parseInt(_.duration_ms) + _, 0);
          this.SetPlaytimeFromRecordingOffset(_.recording_id, _, _ < 0);
          return;
        }
      }
      let _ =
          this.m_eGameRecordingMode === `Overlay`
            ? this.GetLiveEdgeMS().valMS
            : this.GetTotalMS().valMS,
        _ = _(_.valMS + _, 0, _ - 1e3);
      this.SetPlaytimeFromGlobalMS(_(_));
    }
    ConvertGlobaOffsetToRecordingAndRelativeOffset(_) {
      return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
        _,
      );
    }
    PlayNextTimelineRecording(_) {
      if (this.m_playbackDefinition?.m_nLoopDurationMS) {
        this.StartPlaybackForRange();
        return;
      }
      let _;
      ((_ = this.m_strRecordingID
        ? this.m_timelineLoader.GetNextRecording(this.m_strRecordingID)
        : this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
            _(this.m_nGlobalTimelinePlaybackMS),
          )?.recording_id),
        _
          ? this.SetPlaytimeFromRecordingOffset(_, 0)
          : (this.m_gameRecordingVideo.Pause(),
            _ && this.TryPlayInitialTimelineVideo()));
    }
    GetClipsAtGlobalMS(_) {
      return (
        this.m_rgClipOffsets.filter(
          (_) =>
            _.nGlobalOffsetMS <= _.valMS &&
            _.nGlobalOffsetMS + _.nDurationMS >= _.valMS,
        ) || []
      );
    }
    GetClosestPreviousRecordingForGlobalMS(_) {
      return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(
        _,
      );
    }
    GetClosestNextRecordingForGlobalMS(_) {
      return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(_);
    }
    SetPlaytimeFromRecordingOffset(_, _, _, _) {
      let _ = _;
      _ &&
        (_ = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(_, _));
      let _ = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
        _,
        _,
        0,
      );
      _ &&
        (this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
        this.ChangePlaybackRecording(_, _ / 1e3, _));
    }
    GetManifestFromRecordingID(_) {
      return this.m_fnGetManifest(_);
    }
    ChangePlaybackRecording(_, _ = 0, _) {
      this.m_bHidePlayer = !1;
      let _ = this.m_gameRecordingVideo.IsPaused();
      if (
        this.m_strRecordingID === _ &&
        this.m_gameRecordingVideo.IsInitialized()
      ) {
        this.m_gameRecordingVideo.Seek(_);
        return;
      }
      if ((this.m_gameRecordingVideo.Stop(), (this.m_strRecordingID = _), !_))
        return;
      if (!this.m_videoRef) {
        this.m_nPendingSeekSec = _;
        return;
      }
      let _ = this.GetManifestFromRecordingID(_),
        _ = this.m_timelineLoader.BRecordingHasZeroOffset(_)
          ? _.Absolute
          : _.FromAvailableStart;
      (this.m_gameRecordingVideo.Start(this.m_videoRef, _, _, _),
        (_ || _) && this.m_gameRecordingVideo.Pause());
    }
    StopPlayback() {
      this.m_gameRecordingVideo.Stop();
    }
    TogglePlayPause() {
      this.m_gameRecordingVideo.IsPaused() ||
      !this.m_gameRecordingVideo.IsInitialized()
        ? (this.m_nGlobalTimelinePlaybackMS >
            (this.m_lastRecordingGlobalMS?.valMS ?? 0) &&
            this.TryPlayInitialTimelineVideo(),
          this.m_gameRecordingVideo.GetTimelineDuration() -
            this.m_gameRecordingVideo.GetPlaybackTime() <
          0.05
            ? this.PlayNextTimelineRecording(!0)
            : this.m_gameRecordingVideo.Play())
        : this.m_gameRecordingVideo.Pause();
    }
    GetGlobalMSPlaytime() {
      return _(this.m_nGlobalTimelinePlaybackMS);
    }
    GetGlobalPlaytimeSec() {
      return this.m_nGlobalTimelinePlaybackSec;
    }
    UpdateGlobalPlayTime(_) {
      if (
        ((this.m_nGlobalTimelinePlaybackMS = _),
        (this.m_nGlobalTimelinePlaybackSec = Math.floor(_ / 1e3)),
        this.m_lastRecordingGlobalMS &&
          this.m_lastRecordingGlobalMS.valMS !== null)
      ) {
        let _ = this.m_bWasLiveEdge ? _ : _;
        this.m_bWasLiveEdge =
          this.m_lastRecordingGlobalMS.valMS -
            (this.GetGlobalMSPlaytime()?.valMS || 0) <
          _;
      }
    }
    HandleSeekToPreviousRecording(_, _, _) {
      let _ = this.GetClosestPreviousRecordingForGlobalMS(_);
      if (_) {
        let _ = parseInt(_.duration_ms),
          _ = Math.max(_ - 5e3, _ * 0.75);
        (_ || (this.m_nRelativeTimeForDisplay = _ / 1e3),
          this.UpdateGlobalPlayTime(
            this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              _.recording_id,
              _,
              0,
            ).nGlobalOffsetMS,
          ),
          this.ChangePlaybackRecording(_?.recording_id, _ / 1e3, _));
      } else
        (_ || (this.m_nRelativeTimeForDisplay = 0),
          this.UpdateGlobalPlayTime(0),
          this.ChangePlaybackRecording(this.m_strRecordingID, 0, _));
    }
    HandleSeekToNextRecording(_, _, _) {
      let _ = this.GetClosestNextRecordingForGlobalMS(_);
      _
        ? (_ || (this.m_nRelativeTimeForDisplay = 0),
          this.UpdateGlobalPlayTime(
            this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              _.recording_id,
              0,
              0,
            ).nGlobalOffsetMS,
          ),
          this.ChangePlaybackRecording(_?.recording_id, 0, _))
        : (_ || (this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS),
          this.ChangePlaybackRecording(
            this.m_strRecordingID,
            this.GetTotalMS().valMS / 1e3,
            _,
          ));
    }
    SetPlaytimeFromGlobalMS(_, _, _, _) {
      this.m_pendingStop = null;
      let _ =
        this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
          _.valMS,
        );
      _
        ? (_ || (this.m_nRelativeTimeForDisplay = _.valMS),
          this.UpdateGlobalPlayTime(_.valMS),
          this.ChangePlaybackRecording(
            _?.strRecordingID,
            _?.nRecordingOffsetMS / 1e3,
            _,
          ))
        : _
          ? this.ChangePlaybackRecording(
              _?.strRecordingID,
              _?.nRecordingOffsetMS / 1e3,
              _,
            )
          : _.valMS > this.m_nGlobalTimelinePlaybackMS
            ? this.HandleSeekToNextRecording(_, _, _)
            : this.HandleSeekToPreviousRecording(_, _, _);
    }
    ConvertGlobalOffsetToTimelineRelativeOffset(_) {
      return this.m_timelineLoader.GetTimelineOffsetFromGlobal(_, 0);
    }
    MakeRelativeToTimelineEndIfActive(_, _) {
      return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(_, _);
    }
    GetTimelineDuration(_) {
      if (!this.m_timelineLoader.BInitialized()) return null;
      let _ = this.m_timelineLoader.GetTimelineMetadata(_);
      return _ ? parseInt(_.metadata.duration_ms) : null;
    }
    GetTimelineFirstRecordingOffset(_) {
      if (!this.m_timelineLoader.BInitialized()) return null;
      let _ = this.m_timelineLoader.GetTimelineMetadata(_);
      if (!_) return null;
      let _ = _.metadata.recordings;
      return _.length ? parseInt(_[0].start_offset_ms) : null;
    }
    async AddUserMarkerAtGlobalMS(_, _, _) {
      let _ = this.m_timelineLoader.GetTimelineOffsetFromGlobal(_.valMS, 0);
      if (_) {
        let _ = this.m_timelineLoader.GetGameID(),
          { fnCreateUserTimelineMarkers: _ } = _(),
          _ = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
            _.strTimelineID,
          );
        _.ReportTrackedAction(_);
        let _ = `steam_marker`,
          _ = await _(_, this.GetClipID(), {
            timeline_id: _.strTimelineID,
            entry_id: ``,
            time: `` + Math.floor(_.nTimelineOffsetMS.valMS + _),
            type: 5,
            marker_icon: _,
            marker_priority: 0,
          });
        _.eResult == 1 &&
          (this.m_timelineLoader.AddUserMarker(
            _.strTimelineID,
            Math.floor(_.nTimelineOffsetMS.valMS),
            _,
            _.entry_id,
          ),
          _ && _(_.entry_id, _.strTimelineID));
      }
    }
    async RemoveUserMarker(_, _) {
      let { fnRemoveUserTimelineMarker: _ } = _();
      return (await _(
        this.m_timelineLoader.GetGameID(),
        this.GetClipID(),
        _,
        _,
      )) == 1
        ? (this.m_timelineLoader.RemoveUserMarker(_, _), !0)
        : (_(`Failed to delete user marker for timeline ${_} entry ${_}`), !1);
    }
    async UpdateUserMarker(_, _, _, _) {
      let { fnUpdateUserTimelineMarkers: _ } = _(),
        _ = this.m_timelineLoader.GetGameID(),
        _ = {
          timeline_id: _,
          entry_id: _._,
          time: _.time,
          type: 5,
          marker_icon: _.icon,
          marker_priority: _.priority,
          range_title: _,
          marker_description: _,
        };
      if ((await _(_, this.GetClipID(), _)) == 1) {
        let _ = {
          strIcon: _.icon,
          name: _,
          description: _,
          nTimelineOffsetMS: parseInt(_.time),
        };
        return (this.m_timelineLoader.UpdateUserMarker(_, _._, _), !0);
      }
      return !1;
    }
    FocusGlobalMS(_) {
      this.FireEvent(`OnFocusGlobalMS`, _);
    }
    SetPlaybackStop(_) {
      let _ = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(_.valMS);
      _ &&
        (this.m_pendingStop = {
          m_strRecordingID: _.strRecordingID,
          m_nOffsetMS: _.nRecordingOffsetMS,
        });
    }
    ClearPlaybackStop() {
      this.m_pendingStop = null;
    }
    GenerateClipNameFromTimeline(_, _, _, _) {
      return this.m_timelineLoader.GenerateClipNameFromTimeline(_, _, _, _);
    }
    GetRenderGlyph() {
      if (this.m_bGamepadMode) return this.m_fnRenderGlyph;
    }
    SetRenderGlyph(_) {
      this.m_fnRenderGlyph = _;
    }
    GetGamepadMode() {
      return this.m_bGamepadMode;
    }
    SetGamepadMode(_) {
      this.m_bGamepadMode = _;
    }
    GetControlsVisible() {
      return this.m_bControlsVisible;
    }
    SetControlsVisible(_) {
      _ != null && (this.m_bControlsVisible = _);
    }
  };
(_([_], _.prototype, `m_bHidePlayer`, void 0),
  _([_], _.prototype, `m_strRecordingID`, void 0),
  _([_], _.prototype, `m_durationMS`, void 0),
  _([_], _.prototype, `m_lastRecordingGlobalMS`, void 0),
  _([_], _.prototype, `m_nGlobalTimelinePlaybackMS`, void 0),
  _([_], _.prototype, `m_nGlobalTimelinePlaybackSec`, void 0),
  _([_], _.prototype, `m_rgSeekPerf`, void 0),
  _([_], _.prototype, `m_eRecordingState`, void 0),
  _([_], _.prototype, `m_eRecordingSetting`, void 0),
  _([_], _.prototype, `m_bGamepadMode`, void 0),
  _([_], _.prototype, `m_bControlsVisible`, void 0),
  _([_], _.prototype, `m_fnRenderGlyph`, void 0),
  _([_], _.prototype, `m_previousHighlightEntry`, void 0),
  _([_], _.prototype, `m_nextHighlightEntry`, void 0),
  _([_], _.prototype, `m_displayHighlightEntry`, void 0),
  _([_], _.prototype, `m_nRelativeTimeForDisplay`, void 0),
  _([_.ref], _.prototype, `m_rgClipOffsets`, void 0),
  _([_.ref], _.prototype, `m_phasePreview`, void 0),
  _([_], _.prototype, `SetVideoElement`, null),
  _([_], _.prototype, `OnInvalidateRecording`, null),
  _([_], _.prototype, `OnLoaderInitialized`, null),
  _([_], _.prototype, `OnInvalidate`, null),
  _([_], _.prototype, `OnTimelineLoaded`, null),
  _([_], _.prototype, `GetLiveEdgeMS`, null),
  _([_], _.prototype, `StopPlayback`, null),
  _([_], _.prototype, `TogglePlayPause`, null),
  _([_], _.prototype, `UpdateGlobalPlayTime`, null));
var _ = _.createContext({
  timelinePlaybackCoordinator: null,
});
function _(_) {
  let {
      children: _,
      mode: _,
      fnGetManifest: _,
      loader: _,
      recordingState: _,
      controlsVisible: _,
      gamepadMode: _,
      renderGlyph: _,
      recordingSetting: _,
      playbackDefinition: _,
      clipSummaries: _,
    } = _,
    [_] = _.useState(() => new _(_, _, _, _, _, _, _, _));
  ((0, _.useEffect)(() => {
    _.SetLoader(_);
  }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetRecordingState(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetRecordingSetting(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetGetManifest(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetControlsVisible(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetGamepadMode(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetRenderGlyph(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetClipOffsets(_);
    }, [_, _]),
    (0, _.useEffect)(() => () => _.dispose(), [_]));
  let _ = _.useMemo(
    () => ({
      timelinePlaybackCoordinator: _,
    }),
    [_],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return (0, _.useContext)(_).timelinePlaybackCoordinator;
}
function _() {
  let _ = _();
  return [_(() => _?.GetPhasePreview() || null), (_) => _?.SetPhasePreview(_)];
}
var _ = `-z6QUhW0BuI-`,
  _ = `EQ4TcbQ23mE-`,
  _ = `_1SMhCEq4AkI-`,
  _ = `kkFDcE4F2W8-`,
  _ = `YscTTqT4K6I-`,
  _ = `T4Y0jki8FF0-`;
function _(_) {
  let {
    entry: _,
    strMarkerIcon: _,
    onClick: _,
    onMouseEnter: _,
    onMouseLeave: _,
    onContextMenu: _,
    classNames: _,
    style: _,
    faded: _,
    bSelectedMarker: _,
  } = _;
  return (0, _.jsx)(`div`, {
    style: _ ?? {},
    className: _(_, {
      [_]: !0,
      [_]: _,
      [_]: _,
    }),
    onClick: (_) => {
      _ && _(_);
    },
    onContextMenu: _,
    onMouseEnter: _,
    onMouseLeave: _,
    children: (0, _.jsx)(_, {
      entry: _,
      strMarkerIcon: _,
    }),
  });
}
function _(_) {
  let { entry: _, strMarkerIcon: _ } = _,
    _ = _().GetGameID();
  return _(_)
    ? (0, _.jsx)(_, {
        achievementEntry: _,
        strGameID: _,
      })
    : _(_)
      ? (0, _.jsx)(_, {})
      : _(_)
        ? (0, _.jsx)(_, {
            entry: _,
            strMarkerIcon: _,
          })
        : (0, _.jsx)(_, {
            strMarkerIcon: _,
            strGameID: _,
          });
}
function _(_) {
  let { achievementEntry: _, strGameID: _ } = _,
    _ = _(new _(_).GetAppID(), _.achievement_name),
    _,
    _;
  if (_)
    ((_ = `white`),
      (_ = (0, _.jsx)(`img`, {
        src: _.iconURL,
      })));
  else {
    let _ = _();
    ((_ = _(_.color)), (_ = _.func({})));
  }
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      color: _,
    },
    children: _,
  });
}
function _(_) {
  let { entry: _, strMarkerIcon: _ } = _,
    _,
    _;
  _(_) ? ((_ = _()), (_ = _)) : (_ = _(_));
  let _ = _(_.color);
  return (0, _.jsx)(_, {
    color: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _.func({}),
    }),
  });
}
function _(_) {
  let { icon: _, className: _ } = _;
  return _(_).func({
    className: _,
  });
}
function _(_) {
  let _ = _(`steam_invalid`),
    _ = _(_.color);
  return (0, _.jsx)(_, {
    color: _,
    children: (0, _.jsx)(`div`, {
      children: _.func({}),
    }),
  });
}
function _(_) {
  let { strMarkerIcon: _, strGameID: _ } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      icon: _,
      gameID: _,
    }),
  });
}
function _(_) {
  let { icon: _, gameID: _, className: _ } = _,
    _ = _(new _(_).GetAppID(), _);
  if (_(_))
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_ === null) return null;
  if (_ === void 0) {
    let _ = _();
    return (0, _.jsx)(`div`, {
      className: _,
      children: _.func({}),
    });
  }
  let _ = ``;
  return (
    (_ = typeof _ == `string` ? _ : new XMLSerializer().serializeToString(_)),
    (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      className: _(_, _),
      children: (0, _.jsx)(`g`, {
        dangerouslySetInnerHTML: {
          __html: _,
        },
      }),
    })
  );
}
function _(_) {
  let { children: _, color: _ } = _;
  return (0, _.jsx)(`div`, {
    className: void 0,
    children: (0, _.jsx)(`div`, {
      className: _,
      style: _
        ? {
            color: _,
          }
        : null,
      children: _,
    }),
  });
}
var _ = `bDOiLLvSs2Y-`,
  _ = `kcQuGr4J3rc-`,
  _ = `j-2U-sbnQJU-`,
  _ = `_6l4s8j-Bcq8-`,
  _ = `_8YeucRtc8oU-`,
  _ = `ZAjnqtDcso0-`,
  _ = `vhGz8D5Y1Bk-`,
  _ = `OMn6m4jRit8-`,
  _ = `H-FSa2NK0ko-`,
  _ = `EkzDm2rgmn4-`,
  _ = `_7rO2L4URLVo-`,
  _ = `UMVMer37ORc-`,
  _ = `cyiE161LN-s-`,
  _ = `Vert6EPn2bo-`,
  _ = `-BKlW5DP2XE-`,
  _ = `wvlXf51vGb4-`,
  _ = `S7iF3xbHMfk-`,
  _ = `SPq-vUvAUJ0-`,
  _ = `p3cd5ToZ5HI-`,
  _ = {
    nBeforeMS: 0,
    nAfterMS: 12e3,
  },
  _ = _.createContext({
    globalStartMS: void 0,
    globalEndMS: void 0,
    setRange: null,
    setStartMS: null,
    setEndMS: null,
    globalPreviewStartMS: void 0,
    globalPreviewEndMS: void 0,
    setPreviewRange: null,
    clearPreviewSelection: null,
    selectionZoomCount: 0,
    eInitMethod: void 0,
    startMetrics: void 0,
    endMetrics: void 0,
    zoomIntoSelection: null,
    zoomOutSelection: null,
  });
function _() {
  let _ = (0, _.useContext)(_);
  return {
    nGlobalStartMS: _.globalStartMS,
    nGlobalEndMS: _.globalEndMS,
  };
}
function _() {
  return (0, _.useContext)(_).globalStartMS;
}
function _() {
  return (0, _.useContext)(_).globalEndMS;
}
function _() {
  return (0, _.useContext)(_).setRange;
}
function _() {
  return (0, _.useContext)(_).setStartMS;
}
function _() {
  return (0, _.useContext)(_).setEndMS;
}
function _() {
  let _ = (0, _.useContext)(_);
  return {
    selectedMarker: _.selectedMarker,
    setSelectedMarker: _.setSelectedMarker,
  };
}
function _() {
  let _ = (0, _.useContext)(_);
  return !isNaN(_.globalStartMS?.valMS) && !isNaN(_.globalEndMS?.valMS);
}
function _() {
  return (0, _.useContext)(_).clearSelection;
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return _.useCallback(
    (_, _, _, _) => {
      if (_ === void 0 && _ === void 0) return;
      let _ = _.nGlobalStartMS !== void 0 || _.nGlobalEndMS !== void 0,
        _ = _ || _.nGlobalStartMS,
        _ = _ || _.nGlobalEndMS;
      _ &&
        _ &&
        _.valMS <= _.valMS &&
        (_ === void 0 ? (_ = void 0) : (_ = void 0));
      let _ = _.nBeforeMS + _.nAfterMS;
      (_ === void 0 && (_ = _(_.valMS - _)),
        _ === void 0 && (_ = _(_.valMS + _)));
      let _ = _ != _.nGlobalStartMS,
        _ = _ != _.nGlobalEndMS;
      (_ && _ ? _(_, _, _) : _ ? _(_, _) : _ && _(_, _),
        !_ && _ && _ && _ == 0 && _());
    },
    [_, _, _, _, _, _],
  );
}
function _() {
  return (0, _.useContext)(_).zoomIntoSelection;
}
function _() {
  return (0, _.useContext)(_).selectionZoomCount;
}
function _(_) {
  let _ = (0, _.useContext)(_),
    _ = _.selectionZoomCount,
    _ = _.globalStartMS,
    _ = _.globalEndMS,
    _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(null);
  ((_.current = _),
    (0, _.useEffect)(() => {
      if (!_.current) return;
      let _ = !isNaN(_?.valMS) && !isNaN(_?.valMS);
      (_.current == _ && _) ||
        ((_.current = _), _ && _ ? _.current(_, _) : _.current(null, null));
    }, [_, _, _, _, _]));
}
var _ = 5e3,
  _ = 3e5,
  _ = 1e3,
  _ = 10,
  _ = 10,
  _ = (function (_) {
    return (
      (_.Playhead = `Playhead`),
      (_.RangeLeft = `RangeLeft`),
      (_.RangeRight = `RangeRight`),
      (_.Highlight = `Highlight`),
      _
    );
  })({}),
  _ = class {
    m_fnUnregisterFromLoader;
    m_loader;
    m_maskBounds = [-1, -1];
    m_eventTarget;
    constructor(_, _) {
      (_(this), (this.m_loader = _), (this.m_eventTarget = _));
    }
    Init() {
      ((this.m_fnUnregisterFromLoader = this.m_loader.AddEventListener(this)),
        this.m_loader.BInitialized() && this.OnLoaderInitialized());
    }
    GetGameID() {
      return this.m_loader.GetGameID();
    }
    BInitialized() {
      return this.m_loader.BInitialized();
    }
    IsActiveRecording(_) {
      return this.m_loader.IsActiveRecording(_);
    }
    IsActiveTimeline(_) {
      return this.m_loader.IsActiveTimeline(_);
    }
    GetStateDescriptionAtGlobalMS(_) {
      return this.m_loader.GetStateDescriptionAtGlobalMS(_(_));
    }
    GetTimelineOffsetFromGlobal(_, _) {
      return this.m_loader.GetTimelineOffsetFromGlobal(_, _);
    }
    GetTimelineStartTime(_) {
      let _ = this.m_loader.GetTimelineMetadata(_);
      return _?.metadata ? _.metadata.date_recorded : null;
    }
    BEmpty() {
      return !1;
    }
    GetTimelines() {
      return this.m_loader.GetTimelines();
    }
    GetGlobalTimelineEndMS() {
      return this.m_loader.GetGlobalTimelineEndMS();
    }
    GetTimelineDataOrStartLoad(_) {
      return this.m_loader.GetTimelineDataOrStartLoad(_);
    }
    GetTimelineStartBeforeGlobalZeroMS(_) {
      return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(_);
    }
    MakeRelativeToTimelineEndIfActive(_, _) {
      return this.m_loader.MakeRelativeToTimelineEndIfActive(_, _);
    }
    FindRangeEventsAtGlobalMS(_) {
      return this.m_loader.FindRangeEventsAtGlobalMS(_);
    }
    Close() {
      ((this.m_fnUnregisterFromLoader &&=
        (this.m_fnUnregisterFromLoader(), void 0)),
        (this.m_loader = null));
    }
    OnLoaderInitialized() {
      this.m_eventTarget.OnLoaderInitialized &&
        this.m_eventTarget.OnLoaderInitialized();
    }
    OnInvalidate(_) {
      this.m_eventTarget.OnInvalidate && this.m_eventTarget.OnInvalidate(_);
    }
    OnTimelineLoaded(_) {
      this.m_eventTarget.OnTimelineLoaded &&
        this.m_eventTarget.OnTimelineLoaded(_);
    }
    OnInvalidateRecording(_, _) {
      this.m_eventTarget.OnInvalidateRecording &&
        this.m_eventTarget.OnInvalidateRecording(_, _);
    }
  },
  _ = class {
    m_playbackCoordinator;
    m_fnUnregisterPlaybackCoordinator;
    m_refTimelineParentCtn;
    m_timelineMask;
    m_durationMS = 0;
    m_mapTimelineClips = _.map([], {
      deep: !1,
    });
    m_scrollLeftPX = 0;
    m_scrollWindowWidth = null;
    m_scrollWindowOffsetPX = null;
    m_bAutoScrollPaused = !1;
    m_autoScrollPauseTimeout = null;
    m_msVisible = 0;
    m_bCustomZoom = !1;
    m_bUserClipping = !1;
    m_prevLeftAndVisible = null;
    m_rgTimelineOffsets = [];
    m_mapTimelineEntries = _.map([], {
      deep: !1,
    });
    m_bInitialized = !1;
    m_eThumbnailComponent = null;
    m_nGlobalRelativeThumbnailPositionPX = void 0;
    m_thumbnailHighlightEntry = void 0;
    m_phaseToHighlight = void 0;
    constructor(_, _, _) {
      (_(this),
        (this.m_playbackCoordinator = _),
        (this.m_timelineMask = new _(_, this)),
        (this.m_fnUnregisterPlaybackCoordinator = _.AddEventListener(this)),
        this.UpdateClipSummaries(_),
        this.m_timelineMask.Init());
    }
    BInitialized() {
      return this.m_bInitialized;
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineMask.GetGlobalTimelineEndMS().valMS),
        this.OnInvalidate(),
        this.InitDefaultsIfReady());
    }
    InitDefaultsIfReady() {
      !this.m_bInitialized &&
        this.m_scrollWindowWidth &&
        this.m_timelineMask.BInitialized() &&
        ((this.m_bInitialized = !0),
        (this.m_msVisible = this.ComputeDefaultMSVisible()),
        this.ScrollToCenteredGlobalMS(
          this.m_playbackCoordinator.GetGlobalMSPlaytime().valMS,
        ));
    }
    OnTimelineLoaded(_) {
      (_(`OnTimelineLoaded`, _),
        this.FindTimelineOffsets(_)
          ? this.ComputeEntriesForTimeline(_)
          : _(`Missing timeline offset metadata for`, _));
    }
    OnInvalidate(_) {
      _(`on invalidate`, _);
      let _ = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
        _ = _ - this.m_durationMS,
        _ = this.m_durationMS <= 0,
        _;
      this.m_durationMS = _;
      let _ = this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
      if (_ > 0 && _) this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (_ > 0 && !this.m_bAutoScrollPaused && !_)
        this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (_ < 0 && this.m_msVisible > _)
        ((this.m_msVisible = this.ComputeDefaultMSVisible()),
          this.ScrollToOffset(0));
      else if (_ < 0) {
        let _ = this.FindClosestTimelineStartForOffsetPX(this.m_scrollLeftPX);
        if (_) {
          let _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
            _ = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - _);
          _ = {
            strTimelineID: _.timelineID,
            nTimelineOffsetMS: _,
          };
        }
      }
      let _ = this.m_timelineMask.GetTimelines(),
        _ = 0;
      if (this.BInitialized() && _) {
        let _ = _.findIndex((_) => _.metadata.timeline_id === _);
        _ >= 0 && (_ = _);
      }
      if (
        ((this.m_rgTimelineOffsets = _.map((_, _) =>
          _ >= _ ? this.ComputeTimelineOffset(_) : this.m_rgTimelineOffsets[_],
        )),
        _)
      ) {
        let _ = this.FindTimelineOffsets(_.strTimelineID);
        if (_) {
          let _ = _.globalOffsetMS + _.nTimelineOffsetMS,
            _ = _(
              this.ConvertGlobalMSToGlobalPXOffset(_),
              0,
              this.GetMaxScrollLeftPX(),
            );
          this.ScrollToOffset(_);
        }
      }
      _.forEach((_, _) => {
        _ >= _ && this.ComputeEntriesForTimeline(_.metadata.timeline_id);
      });
    }
    OnFocusGlobalMS(_) {
      this.ScrollToCenteredGlobalMS(_.valMS);
    }
    GetGameID() {
      return this.m_timelineMask.GetGameID();
    }
    SetTimelineParentCtnRef(_) {
      this.m_refTimelineParentCtn = _;
    }
    GetTimelineParentCtnRef() {
      return this.m_refTimelineParentCtn;
    }
    SetThumbnailComponent(_) {
      ((this.m_eThumbnailComponent = _),
        _ || (this.m_nGlobalRelativeThumbnailPositionPX = void 0),
        _ !== `Highlight` && (this.m_thumbnailHighlightEntry = null));
    }
    GetThumbnailComponent() {
      return this.m_eThumbnailComponent;
    }
    SetThumbnailPosition(_) {
      this.m_nGlobalRelativeThumbnailPositionPX = _;
    }
    GetThumbnailPosition() {
      return this.m_nGlobalRelativeThumbnailPositionPX;
    }
    SetThumbnailEntry(_) {
      this.m_thumbnailHighlightEntry = _;
    }
    GetThumbnailEntry() {
      return this.m_eThumbnailComponent === `Highlight`
        ? this.m_thumbnailHighlightEntry
        : null;
    }
    Close() {
      (this.m_timelineMask.Close(),
        (this.m_timelineMask = null),
        this.m_fnUnregisterPlaybackCoordinator &&
          this.m_fnUnregisterPlaybackCoordinator(),
        (this.m_fnUnregisterPlaybackCoordinator = null),
        (this.m_bInitialized = !1),
        this.m_autoScrollPauseTimeout && this.ClearAutoScrollPauseTimeout());
    }
    ComputeDefaultMSVisible() {
      let _ = this.GetTimelineMarginWidth() * 2,
        _ = _ * (this.m_rgTimelineOffsets.length - 1),
        _ = Math.max(1, this.m_scrollWindowWidth - _ - _),
        _ = Math.ceil(
          ((_ + _) * this.m_durationMS) / (this.m_scrollWindowWidth - (_ + _)),
        ),
        _ = _ * _;
      return Math.min(this.m_durationMS + _, _);
    }
    ZoomIn(_, _) {
      let _ = 1e3;
      if (this.m_msVisible <= _) return;
      let _ = this.m_msVisible - this.m_msVisible / 1.1 ** _,
        _ = _ * _,
        _ = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
        _ = Math.max(this.m_msVisible - _, _);
      ((this.m_msVisible = _),
        (this.m_bCustomZoom = !0),
        this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(_ + _)));
    }
    ZoomOut(_, _) {
      let _ =
        this.m_durationMS +
        this.ConvertDeltaPXToDurationMS(
          _ * (this.m_rgTimelineOffsets.length - 1) +
            this.GetTimelineMarginWidth() * 2,
        );
      if (this.m_msVisible >= _) return;
      let _ = this.m_msVisible * 1.1 ** _ - this.m_msVisible,
        _ = _ * _,
        _ = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
        _ = Math.min(this.m_msVisible + _, _);
      ((this.m_msVisible = _),
        (this.m_bCustomZoom = !0),
        this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(_ - _)));
    }
    IsTempZoom() {
      return !!this.m_prevLeftAndVisible;
    }
    SetTempZoomScale(_, _) {
      let _ = Math.max(_, 0),
        _ = Math.min(_, this.m_durationMS);
      ((this.m_prevLeftAndVisible = [this.m_scrollLeftPX, this.m_msVisible]),
        (this.m_msVisible = _ - _));
      let _ = this.ConvertGlobalMSToGlobalPXOffset(_);
      this.ScrollToOffset(_);
    }
    ClearTempZoomScale() {
      if (!this.m_prevLeftAndVisible) return;
      let [_, _] = this.m_prevLeftAndVisible;
      ((this.m_prevLeftAndVisible = null),
        this.ScrollToOffset(_),
        (this.m_msVisible = _));
    }
    SetUserIsClipping(_) {
      this.m_bUserClipping = _;
    }
    GetTimelineGapWidth() {
      return _;
    }
    GetTimelineMarginWidth() {
      return 12;
    }
    UpdateClipSummaries(_ = []) {
      (this.m_mapTimelineClips.clear(),
        _.forEach((_) => {
          let _ = _.start_timeline_id;
          this.m_mapTimelineClips.has(_) || this.m_mapTimelineClips.set(_, []);
          let _ = {
            clipID: _.clip_id,
            msDuration: parseInt(_.duration_ms),
            msTimelineOffset: parseInt(_.start_offset_ms),
            timelineID: _,
          };
          this.m_mapTimelineClips.get(_).push(_);
        }));
    }
    BEmpty() {
      return this.m_timelineMask.BEmpty();
    }
    ComputeTimelineOffset(_) {
      let _ = isNaN(parseInt(_.metadata.duration_ms))
          ? 0
          : parseInt(_.metadata.duration_ms),
        _ = _.metadata.recordings.map((_) => {
          let _ = parseInt(_.start_offset_ms),
            _ = parseInt(_.duration_ms);
          return (
            isNaN(_) &&
              this.m_timelineMask.IsActiveRecording(_.recording_id) &&
              (_ = _ - _),
            {
              recordingID: _.recording_id,
              timelineOffsetMS: _,
              nDurationMS: _,
              bIsActive: this.m_timelineMask.IsActiveRecording(_.recording_id),
              recordingType: _.recording_type,
            }
          );
        }),
        _ = (_.metadata.phases || []).map((_) => ({
          timelineOffsetMS: parseInt(_.background_timeline_offset),
          nDurationMS: parseInt(_.duration_ms),
          phase: _,
        }));
      return {
        timelineID: _.metadata.timeline_id,
        globalOffsetMS: _.nGlobalOffsetMS.valMS,
        nDurationMS: _,
        recordingOffsets: _,
        phaseOffsets: _,
      };
    }
    GetCurrentZoomScale() {
      return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
    }
    GetClipsForTimeline(_) {
      return this.m_mapTimelineClips.get(_) || [];
    }
    ComputeEntriesForTimeline(_) {
      let _ = this.m_timelineMask.GetTimelineDataOrStartLoad(_);
      _ &&
        _.m_strState == `loaded` &&
        this.m_mapTimelineEntries.set(_, {
          rgGameModes: _.m_rgGameModeChanges,
          rgHighlights: _.m_rgEntries,
        });
    }
    GetVisibleTimelineGameModes(_) {
      return this.m_mapTimelineEntries.get(_)?.rgGameModes;
    }
    GetVisibleTimelineHighlights(_) {
      return this.m_mapTimelineEntries.get(_)?.rgHighlights;
    }
    GetStateDescriptionAtGlobalMS(_) {
      return this.m_timelineMask.GetStateDescriptionAtGlobalMS(_);
    }
    FindRangeEventsAtGlobalMS(_) {
      return this.m_timelineMask.FindRangeEventsAtGlobalMS(_);
    }
    GetTimelineOffsetMS(_) {
      return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(_);
    }
    ScrollToCenteredGlobalMS(_) {
      let _ = this.ConvertGlobalMSToGlobalPXOffset(_);
      this.ScrollToOffsetCentered(_);
    }
    ScrollToOffset(_) {
      this.m_scrollLeftPX = _(_, 0, this.GetMaxScrollLeftPX());
    }
    ScrollToOffsetCentered(_) {
      let _ = Math.max(0, _ - 0.5 * this.m_scrollWindowWidth);
      this.ScrollToOffset(_);
    }
    ScrollBy(_) {
      let _ = this.m_scrollLeftPX + _;
      this.ScrollToOffset(_);
    }
    GetAutoScrollPaused() {
      return this.m_bAutoScrollPaused;
    }
    SetAutoScrollPaused(_) {
      (this.ClearAutoScrollPauseTimeout(), (this.m_bAutoScrollPaused = _));
    }
    GetAutoScrollPauseTimeout() {
      return this.m_autoScrollPauseTimeout;
    }
    ClearAutoScrollPauseTimeout() {
      (this.m_autoScrollPauseTimeout &&
        clearTimeout(this.m_autoScrollPauseTimeout),
        (this.m_autoScrollPauseTimeout = null));
    }
    SetAutoScrollPauseTimeout(_ = _) {
      (this.ClearAutoScrollPauseTimeout(),
        (this.m_autoScrollPauseTimeout = window.setTimeout(() => {
          this.SetAutoScrollPaused(!1);
        }, _)));
    }
    ScrollToEnd() {
      this.ScrollToOffset(this.GetMaxScrollLeftPX());
    }
    SetScrollWindowWidth(_) {
      ((this.m_scrollWindowWidth = _),
        this.m_timelineMask.BInitialized() &&
          (this.ScrollToOffset(this.m_scrollLeftPX),
          this.InitDefaultsIfReady()));
    }
    SetScrollWindowOffset(_) {
      this.m_scrollWindowOffsetPX = _;
    }
    GetScrollWindowOffset() {
      return this.m_scrollWindowOffsetPX;
    }
    GetScrollableWidthPX() {
      if (!this.m_rgTimelineOffsets?.length) return 0;
      let _ = this.m_rgTimelineOffsets.length - 1,
        _ = this.m_rgTimelineOffsets[_];
      return (
        _ * _ +
        this.ConvertDurationMSToDeltaPX(_.globalOffsetMS + _.nDurationMS)
      );
    }
    GetOverscanWidth() {
      return (this.GetScrollWindowWidth() * _) / 100;
    }
    GetScrollWindowWidth() {
      return this.m_scrollWindowWidth;
    }
    GetMaxScrollLeftPX() {
      return Math.max(
        0,
        this.GetScrollableWidthPX() -
          this.GetScrollWindowWidth() +
          2 * this.GetTimelineMarginWidth(),
      );
    }
    BReachedMaxScroll() {
      return (
        Math.ceil(this.m_scrollLeftPX) === Math.ceil(this.GetMaxScrollLeftPX())
      );
    }
    BReachedMinScroll() {
      return this.m_scrollLeftPX === 0;
    }
    GetVisualWindowStartPX() {
      return this.m_scrollLeftPX;
    }
    GetVisualWidth() {
      return Math.min(
        this.m_scrollWindowWidth,
        this.GetScrollableWidthPX() + 2 * this.GetTimelineMarginWidth(),
      );
    }
    GetVirtualWindowStartPX() {
      return Math.max(this.m_scrollLeftPX - this.GetOverscanWidth(), 0);
    }
    GetVirtualWindowWidthPX() {
      let _ = _(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
        _ = Math.min(
          this.GetScrollableWidthPX() -
            (this.m_scrollLeftPX + this.m_scrollWindowWidth),
          this.GetOverscanWidth(),
        );
      return _ + this.m_scrollWindowWidth + _;
    }
    GetVirtualWindowEndPX() {
      return this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX();
    }
    GetVisibleTimelines() {
      let _ =
          this.FindIndexOfClosestTimelineEndForOffsetPX(
            this.GetVirtualWindowStartPX(),
          ) + 1,
        _ = this.FindIndexOfClosestTimelineStartForOffsetPX(
          this.GetVirtualWindowEndPX(),
        );
      return this.m_rgTimelineOffsets.slice(_, _ + 1).map((_) => {
        let _ = Math.max(
            _.globalOffsetMS,
            this.ConvertPXOffsetToGlobalMS(this.GetVirtualWindowStartPX()),
          ),
          _ = Math.min(
            _.nDurationMS - (_ - _.globalOffsetMS),
            this.ConvertDeltaPXToDurationMS(this.GetVirtualWindowWidthPX()),
          ),
          _ = this.ConvertGlobalMSToGlobalPXOffset(_),
          _ = this.ConvertDurationMSToDeltaPX(_),
          _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
          _ = this.ConvertDurationMSToDeltaPX(_.nDurationMS);
        return {
          ..._,
          pxStart: _,
          pxDuration: _,
          msVisibleStart: _,
          msVisibleDuration: _,
          pxVisibleStart: _,
          pxVisibleDuration: _,
        };
      });
    }
    GetVisibleRecordings() {
      let _ = [];
      return (
        this.GetVisibleTimelines().forEach((_) => {
          _.recordingOffsets.forEach((_) => {
            let _ = _.pxStart + this.GetPXForDuration(_.timelineOffsetMS),
              _ = _ + this.GetPXForDuration(_.nDurationMS);
            _ < this.GetVirtualWindowStartPX() ||
              _ > this.GetVirtualWindowEndPX() ||
              _.push({
                recordingID: _.recordingID,
                nStartPX: _,
                nEndPX: _,
                bIsActive: _.bIsActive,
                recordingType: _.recordingType,
              });
          });
        }),
        _
      );
    }
    GetVisibleClips() {
      let _ = [];
      return (
        this.GetVisibleTimelines().forEach((_) => {
          let _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS);
          this.GetClipsForTimeline(_.timelineID).forEach((_) => {
            let _ = _ + this.GetPXForDuration(_.msTimelineOffset),
              _ = Math.min(
                this.GetVirtualWindowEndPX(),
                this.ConvertGlobalMSToGlobalPXOffset(
                  _.globalOffsetMS + _.msTimelineOffset + _.msDuration,
                ),
              );
            _ < this.GetVirtualWindowStartPX() ||
              _ > this.GetVirtualWindowEndPX() ||
              _.push({
                clipID: _.clipID,
                pxClipStart: _,
                pxClipEnd: _,
              });
          });
        }),
        _
      );
    }
    GetPXForDuration(_) {
      return _ / this.GetCurrentZoomScale();
    }
    GetVisibleTimelinesInWindow() {
      let _ =
          this.FindIndexOfClosestTimelineEndForOffsetPX(this.m_scrollLeftPX) +
          1,
        _ = this.FindIndexOfClosestTimelineStartForOffsetPX(
          this.m_scrollLeftPX + this.m_scrollWindowWidth,
        );
      return this.m_rgTimelineOffsets.slice(_, _ + 1);
    }
    GetVisibleWindowRelativeTimelines() {
      return this.GetVisibleTimelinesInWindow().map((_) => {
        let _ = this.m_scrollLeftPX,
          _ = this.GetVirtualWindowEndPX() - this.GetOverscanWidth(),
          _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
          _ = _ + this.ConvertDurationMSToDeltaPX(_.nDurationMS),
          _ = Math.max(_, _),
          _ = Math.min(_, _);
        return {
          timelineID: _.timelineID,
          nVisibleStartPX: _,
          nEndPX: _,
          nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(_),
          nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(_),
        };
      });
    }
    ConvertPXToTimelineRelativeMS(_, _ = `start`) {
      let _ = this.ConvertPXOffsetToGlobalMS(_),
        _ = this.m_timelineMask.GetTimelineOffsetFromGlobal(_, 0);
      return _ == `end-if-active` &&
        _.strTimelineID &&
        this.m_timelineMask.IsActiveTimeline(_.strTimelineID)
        ? this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
            _.strTimelineID,
            _.nTimelineOffsetMS.valMS,
          )
        : _.nTimelineOffsetMS.valMS;
    }
    GetTimeRecorded(_) {
      return this.m_timelineMask.GetTimelineStartTime(_);
    }
    ConvertGlobalMSToClipOrNone(_) {
      if (!this.m_timelineMask) return null;
      let _ = this.m_timelineMask.GetTimelineOffsetFromGlobal(_, 0);
      if (!_) return null;
      let { nTimelineOffsetMS: _, strTimelineID: _ } = _;
      return _ && this.m_mapTimelineClips.has(_)
        ? this.m_mapTimelineClips
            .get(_)
            .find(
              (_) =>
                _.msTimelineOffset <= _.valMS &&
                _.msTimelineOffset + _.msDuration >= _.valMS,
            )
        : null;
    }
    ConvertGlobalMSToScrollWindowPXOffset(_) {
      return this.ConvertGlobalMSToGlobalPXOffset(_) - this.m_scrollLeftPX;
    }
    ConvertGlobalMSToGlobalPXOffset(_, _ = -1) {
      _ < 0 && (_ = _(this.m_rgTimelineOffsets, (_) => _ - _.globalOffsetMS));
      let _ = _ * _;
      return this.ConvertDurationMSToDeltaPX(_) + _;
    }
    ConvertPXOffsetToGlobalMS(_, _ = !0) {
      if (this.BPositionInGap(_)) {
        if (!_) return null;
        let _ = this.FindClosestTimelineEndForOffsetPX(_);
        return _ ? _.globalOffsetMS + _.nDurationMS : 0;
      }
      let _ = this.FindClosestTimelineStartForOffsetPX(_);
      if (!_) return null;
      let _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
        _ = this.ConvertDeltaPXToDurationMS(_ - _);
      return _.globalOffsetMS + _;
    }
    FindClosestTimelineEndForOffsetPX(_) {
      let _ = this.FindIndexOfClosestTimelineEndForOffsetPX(_);
      return _ < 0 ? null : this.m_rgTimelineOffsets[_];
    }
    FindClosestTimelineStartForOffsetPX(_) {
      let _ = this.FindIndexOfClosestTimelineStartForOffsetPX(_);
      return _ < 0 ? null : this.m_rgTimelineOffsets[_];
    }
    FindIndexOfClosestTimelineEndForOffsetPX(_) {
      return _(
        this.m_rgTimelineOffsets,
        (_) =>
          _ -
          (this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS) +
            this.ConvertDurationMSToDeltaPX(_.nDurationMS)),
      );
    }
    FindIndexOfClosestTimelineStartForOffsetPX(_) {
      return _(
        this.m_rgTimelineOffsets,
        (_) => _ - this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
      );
    }
    FindTimelineOffsets(_) {
      return this.m_rgTimelineOffsets.find((_) => _.timelineID === _);
    }
    BPositionInGap(_) {
      let _ = this.FindIndexOfClosestTimelineEndForOffsetPX(_);
      if (_ < 0) return !1;
      let _ = _ + 1;
      if (_ >= this.m_rgTimelineOffsets.length) return !1;
      let _ = this.m_rgTimelineOffsets[_],
        _ = this.m_rgTimelineOffsets[_],
        _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS);
      return (
        _ < this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS) && _ !== _
      );
    }
    ConvertDurationMSToDeltaPX(_) {
      return _ / this.GetCurrentZoomScale();
    }
    ConvertDeltaPXToDurationMS(_) {
      return _ * this.GetCurrentZoomScale();
    }
    SetPhaseToHighlight(_) {
      this.m_phaseToHighlight = _;
    }
    GetPhaseToHighlight() {
      return this.m_phaseToHighlight;
    }
  };
(_([_], _.prototype, `m_durationMS`, void 0),
  _([_], _.prototype, `m_scrollLeftPX`, void 0),
  _([_], _.prototype, `m_scrollWindowWidth`, void 0),
  _([_], _.prototype, `m_scrollWindowOffsetPX`, void 0),
  _([_], _.prototype, `m_bAutoScrollPaused`, void 0),
  _([_], _.prototype, `m_autoScrollPauseTimeout`, void 0),
  _([_], _.prototype, `m_msVisible`, void 0),
  _([_.ref], _.prototype, `m_rgTimelineOffsets`, void 0),
  _([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_eThumbnailComponent`, void 0),
  _([_], _.prototype, `m_nGlobalRelativeThumbnailPositionPX`, void 0),
  _([_], _.prototype, `m_thumbnailHighlightEntry`, void 0),
  _([_], _.prototype, `m_phaseToHighlight`, void 0),
  _([_], _.prototype, `OnLoaderInitialized`, null),
  _([_], _.prototype, `InitDefaultsIfReady`, null),
  _([_], _.prototype, `OnInvalidate`, null),
  _([_], _.prototype, `ZoomIn`, null),
  _([_], _.prototype, `ZoomOut`, null),
  _([_], _.prototype, `SetTempZoomScale`, null),
  _([_], _.prototype, `ClearTempZoomScale`, null),
  _([_], _.prototype, `UpdateClipSummaries`, null),
  _([_], _.prototype, `BReachedMaxScroll`, null),
  _([_], _.prototype, `BReachedMinScroll`, null));
var _ = _.createContext(null);
function _(_) {
  let {
      loader: _,
      playbackCoordinator: _,
      children: _,
      clipSummaries: _,
      refTimelineParentCtn: _,
    } = _,
    [_, _] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      if (!_) return;
      let _ = new _(_, _, _);
      return (_(_), () => _.Close());
    }, [_]),
    (0, _.useEffect)(() => {
      _ && _.UpdateClipSummaries(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _ && _ && _.SetTimelineParentCtnRef(_.current);
    }, [_, _]),
    _(_),
    _(_),
    _
      ? (0, _.jsx)(_.Provider, {
          value: _,
          children: _,
        })
      : null
  );
}
function _(_) {
  _(
    _.useCallback(
      (_, _) => {
        if (!_) return;
        if (!_ || !_) {
          _.ClearTempZoomScale();
          return;
        }
        let _ = Math.floor((_.valMS - _.valMS) * 0.1),
          _ = _.valMS - _.valMS;
        _ < _ * 0.9 && (_ = Math.floor((_ - _) / 2));
        let _ = _.valMS - _,
          _ = _.valMS + _;
        _.SetTempZoomScale(_, _);
      },
      [_],
    ),
  );
}
function _(_) {
  let _ = _();
  (0, _.useEffect)(() => {
    _ && _.SetUserIsClipping(_);
  }, [_, _]);
}
function _() {
  return (0, _.useContext)(_);
}
var _ = `BAvp4rqoXrI-`,
  _ = `MvaB420caso-`,
  _ = `KHooprC7Eh8-`,
  _ = `S49EhbfI3MU-`,
  _ = `_5URRAlchke4-`,
  _ = 20,
  _ = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
  _ = _.memo(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleTimelines());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            msVisibleStart: _.msVisibleStart,
            pxVisibleDuration: _.pxVisibleDuration,
            pxVisibleStart: _.pxVisibleStart,
            msTimelineStart: _.globalOffsetMS,
          },
          _.timelineID,
        ),
      ),
    });
  }),
  _ = _.memo(function (_) {
    let {
        msVisibleStart: _,
        msTimelineStart: _,
        pxVisibleDuration: _,
        pxVisibleStart: _,
      } = _,
      { msTickSpacing: _, pxTickSpacing: _ } = _(),
      _ = _(),
      _ = Math.ceil((_ - _) / _),
      _ = _ + _ * _,
      _ = _.ConvertGlobalMSToGlobalPXOffset(_),
      _ = (0, _.useMemo)(() => {
        let _ = Math.ceil(_ / _),
          _ = [];
        for (let _ = 0; _ < _; _++) {
          let _ = _ + _ * _,
            _ = _ + _ * _,
            _ = `${_}`;
          _.push({
            key: _,
            offsetPX: _,
            iTimelineRelativeTick: _ + _,
          });
        }
        return _;
      }, [_, _, _, _, _, _]);
    return _
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              style: {
                transform: `translateX(${_}px)`,
                width: _,
              },
            }),
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  timelineRelativeIndex: _.iTimelineRelativeTick,
                  globalOffsetPX: _.offsetPX,
                },
                _.key,
              ),
            ),
          ],
        })
      : null;
  });
function _(_) {
  let { globalOffsetPX: _, timelineRelativeIndex: _ } = _,
    _ = _ % _ === 0 ? _ : _;
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      transform: `translateX(${_}px)`,
    },
    children: (0, _.jsx)(`div`, {
      className: _(_, _),
    }),
  });
}
function _() {
  let _ = _(),
    _ = _(() => _.GetCurrentZoomScale()),
    _ = (_) => Math.abs(300 - _ / _),
    _ = _.reduce((_, _) => (_(_) - _(_) < 0 ? _ : _)) / _;
  return {
    msTickSpacing: _,
    pxTickSpacing: _ / _,
  };
}
var _ = `pOdfi3iG-Qk-`,
  _ = `RgeHxBkcuYI-`,
  _ = `bEIIxIyUIRw-`,
  _ = `vfkh8xz76sA-`,
  _ = `Z4wMZP9AtrA-`;
function _(_, _) {
  return !(_.nStart >= _.nEnd || _.nEnd <= _.nStart);
}
var _ = class {
    m_reservations = [];
    m_nIconWidth;
    constructor(_) {
      this.m_nIconWidth = _;
    }
    BAllowIcon(_) {
      let _ = {
          nStart: _ - this.m_nIconWidth / 2,
          nEnd: _ + this.m_nIconWidth / 2,
        },
        _ = 0;
      for (; _ < this.m_reservations.length; _++) {
        let _ = this.m_reservations[_];
        if (_.nStart >= _.nEnd) break;
        if (_(_, _)) return !1;
      }
      return (this.m_reservations.splice(_, 0, _), !0);
    }
  },
  _ = (0, _.createContext)({});
function _() {
  return (0, _.useContext)(_);
}
var _ = `DzuECh3SiO8-`,
  _ = `OzJbKH40jVQ-`,
  _ = `CcS1u3HYQgY-`,
  _ = `Q2--kfqg0oc-`,
  _ = `GBjFGdfE0Qc-`,
  _ = `tg-75b6-Ee4-`,
  _ = `-BFT24TRL3c-`;
function _(_) {
  let {
      closeModal: _,
      strTimelineID: _,
      entry: _,
      playbackCoordinator: _,
      fnClearSelection: _,
    } = _,
    [_, _] = _.useState(_.title || ``),
    [_, _] = _.useState(_.description || ``),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _(`#Marker_Dialog`),
        closeModal: _,
      })
    : (0, _.jsxs)(_, {
        strTitle: _(`#Marker_Dialog`),
        strMiddleButtonText: _(`#Marker_Action_Delete`),
        onCancel: _,
        onOK: async () => {
          (_.fnSetLoading(!0),
            (await _.UpdateUserMarker(_, _, _, _))
              ? _()
              : (_.fnSetError(!0), _.fnSetStrError(_(`#Marker_UpdateFailed`))));
        },
        children: [
          (0, _.jsx)(_, {
            type: `text`,
            value: _,
            onChange: (_) => _(_.currentTarget.value),
            label: _(`#Marker_Title`),
          }),
          (0, _.jsx)(_, {
            type: `text`,
            value: _,
            onChange: (_) => _(_.currentTarget.value),
            label: _(`#Marker_Description`),
          }),
        ],
      });
}
var _ = `YwXy-p3jOGA-`,
  _ = `DYV4-rbHkCQ-`,
  _ = `NodVylkJJmk-`,
  _ = `NBLBqJkBBNA-`,
  _ = `muIMDgnfzVw-`,
  _ = class {
    m_bCreationWasTemporary;
    m_fnCreate;
    m_creationResult;
    m_bCleanedUp = !1;
    m_nClipLengthSeconds;
    m_strSuggestedClipName;
    m_strGameID;
    m_strSrcClipID;
    m_eInitMethod;
    m_startMetrics;
    m_endMetrics;
    constructor(_, _, _, _, _, _, _, _) {
      ((this.m_fnCreate = _),
        (this.m_nClipLengthSeconds = _),
        (this.m_strSuggestedClipName = _),
        (this.m_strGameID = _),
        (this.m_strSrcClipID = _),
        (this.m_eInitMethod = _),
        (this.m_startMetrics = _),
        (this.m_endMetrics = _));
    }
    Request() {
      return {
        create: this.create,
        cleanup: this.cleanup,
        bExistingClip: !1,
        nClipLengthSeconds: this.m_nClipLengthSeconds,
        strSuggestedClipName: this.m_strSuggestedClipName,
        gameID: new _(this.m_strGameID),
        strSrcClipID: this.m_strSrcClipID,
        eInitMethod: this.m_eInitMethod,
        startMetrics: this.m_startMetrics,
        endMetrics: this.m_endMetrics,
      };
    }
    async create(_, _) {
      return (
        this.m_creationResult ||
          ((this.m_creationResult = await this.m_fnCreate(_, _)),
          (this.m_bCreationWasTemporary = _),
          _(
            new _(this.m_strGameID),
            this.m_eInitMethod,
            this.m_nClipLengthSeconds,
            this.m_startMetrics,
            this.m_endMetrics,
          )),
        Promise.resolve(this.m_creationResult)
      );
    }
    async cleanup() {
      if (this.m_bCleanedUp)
        throw Error(`cleanup called twice on clip creation`);
      if (
        ((this.m_bCleanedUp = !0),
        this.m_creationResult?.clipSummary && this.m_bCreationWasTemporary)
      ) {
        let { fnDeleteClip: _ } = _();
        await _(this.m_creationResult.clipSummary.clip_id);
      }
    }
  };
(_([_], _.prototype, `create`, null), _([_], _.prototype, `cleanup`, null));
function _(_, _, _, _, _, _, _, _, _, _, _) {
  return new _(
    (_, _) => _(_, _, _, _, _, _, _, _, _),
    _ / 1e3,
    _,
    _,
    _,
    _,
    _,
    _,
  ).Request();
}
async function _(_, _, _, _, _, _, _, _, _) {
  let { fnSaveClip: _ } = _();
  _(`start ${_} @ ${_} upto ${_} @ ${_}`);
  try {
    let _ = await _(
        _,
        _,
        _,
        {
          timeline_id: _,
          offset_ms: `` + _,
        },
        {
          timeline_id: _,
          offset_ms: `` + _,
        },
        _,
        _,
      ),
      { clipSummary: _, result: _ } = _;
    return (
      _(_ ? `Clip ${_.clip_id} created` : `Clip was not created: ${_}`), _
    );
  } catch (_) {
    _(_);
  }
  return {
    result: 2,
  };
}
function _(_, _, _, _) {
  let _ = _ + 1,
    _ = _ + _ - 2;
  return _(
    _,
    void 0,
    void 0,
    _,
    _,
    _,
    _,
    _ - _,
    7,
    {
      latestRangeMethod: 7,
      originalRangeMethod: 7,
      relativeMS: 0,
    },
    {
      latestRangeMethod: 7,
      originalRangeMethod: 7,
      relativeMS: 0,
    },
  ).create(!1);
}
var _ = `u-2dfrrZjSE-`,
  _ = _.createContext({
    bInContainer: !1,
    bContainerFocus: !1,
    nMouseClientXPX: null,
    globalMouseXPX: null,
    scrollWindowMouseXPX: null,
    fnRegisterMouseEvent: null,
    bContextMenuOpen: !1,
    setContextMenuOpen: () => {},
  });
function _(_) {
  let { children: _ } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(),
    _ = (0, _.useRef)(void 0),
    _ = _(),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetVisualWindowStartPX()),
    _ = _(() => _.GetScrollWindowWidth()),
    _ = _(() => _.GetScrollWindowOffset()),
    _ = _(() => _.GetTimelineMarginWidth()),
    _ = _.useMemo(() => {
      if (_.current) {
        let _ = _ - _ - _;
        return _(_(_ + _, 0, _));
      }
      return _(0);
    }, [_, _, _, _, _]),
    _ = _.useMemo(() => {
      if (_.current) {
        let _ = _.current.getBoundingClientRect(),
          _ = _ > _ ? _ : _._;
        return _(_(_ - _, 0, _));
      }
      return _(0);
    }, [_, _, _, _]),
    _ = (0, _.useCallback)(
      (_, _) => (
        _.current && _.current.addEventListener(_, _),
        () => _.current?.removeEventListener(_, _)
      ),
      [],
    ),
    _ = (0, _.useCallback)(() => _(!0), []),
    _ = (0, _.useCallback)(() => _(!1), []),
    _ = (0, _.useCallback)((_) => _(_.clientX), []),
    _ = (0, _.useCallback)((_) => _(!0), []),
    _ = (0, _.useCallback)((_) => _(!1), []);
  (0, _.useEffect)(() => {
    let _ = _(_.current);
    return (
      _.addEventListener(`mousemove`, _),
      () => _.removeEventListener(`mousemove`, _)
    );
  }, [_]);
  let _ = (0, _.useMemo)(
    () => ({
      bContainerFocus: _,
      bInContainer: _,
      nMouseClientXPX: _,
      globalMouseXPX: _,
      scrollWindowMouseXPX: _,
      fnRegisterMouseEvent: _,
      bContextMenuOpen: _,
      setContextMenuOpen: _,
    }),
    [_, _, _, _, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(`div`, {
      ref: _,
      onMouseOver: _,
      onFocus: _,
      onMouseOut: _,
      onBlur: _,
      onMouseEnter: _,
      onMouseLeave: _,
      className: _,
      children: _,
    }),
  });
}
function _() {
  return (0, _.useContext)(_);
}
function _() {
  return _().globalMouseXPX;
}
function _() {
  return _().scrollWindowMouseXPX;
}
function _() {
  return _().bInContainer;
}
function _() {
  return _().bContainerFocus;
}
function _() {
  let _ = _();
  return [_.bContextMenuOpen, _.setContextMenuOpen];
}
function _(_, _) {
  let _ = _().fnRegisterMouseEvent,
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useCallback)(() => {
      _.current = _(_, _);
    }, [_, _, _]),
    _ = (0, _.useCallback)(() => {
      _.current && _.current();
    }, []);
  (0, _.useEffect)(() => (_(), () => _()), [_, _]);
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(() => !_.ShouldModeShowClipControls()),
    _ = _(),
    { onMarkerCreated: _, onNavigateToClip: _ } = _(),
    [_, _] = _();
  return _.useCallback(
    (_, _, _, _) =>
      _ || _
        ? null
        : _(
            (0, _.jsx)(_, {
              isCurrentPlayback: _,
              nGlobalOffsetMS: _,
              playbackCoordinator: _,
              timelineView: _,
              fnSetSelectionClipRange: _,
              onMarkerCreated: _,
              onNavigateToClip: _,
              onContextMenuOpenChange: _,
            }),
            _,
            _,
          ),
    [_, _, _, _, _, _, _, _],
  );
}
function _(_) {
  let {
      playbackCoordinator: _,
      timelineView: _,
      nGlobalOffsetMS: _,
      fnSetSelectionClipRange: _,
      isCurrentPlayback: _,
      onMarkerCreated: _,
      onNavigateToClip: _,
      onContextMenuOpenChange: _,
    } = _,
    _ = _(() => _.GetClipsAtGlobalMS(_)),
    _ = _(_);
  (0, _.useEffect)(() => (_(!0), () => _(!1)), [_]);
  let _ = (() => {
      let { strTimelineID: _, nTimelineOffsetMS: _ } =
        _.ConvertGlobalOffsetToTimelineRelativeOffset(_.valMS);
      if (!_) return null;
      let _ = _.GetLoader().GetTimelineData(_);
      if (!_) return null;
      let _ = _(_.m_rgPhases, (_) => _.valMS - parseInt(_.time));
      if (_ < 0) return null;
      let _ = _.m_rgPhases[_];
      return _.valMS >= parseInt(_.time) &&
        _.valMS <= parseInt(_.time) + parseInt(_.duration)
        ? {
            strTimelineID: _,
            phase: _,
          }
        : null;
    })(),
    _ = (_) => {
      (_.AddUserMarkerAtGlobalMS(
        _,
        `/GameRecording/AddMarker/TimelineCtxMenu`,
        (_, _) => {
          _ && _(_, _, _);
        },
      ),
        _.SetPlaytimeFromGlobalMS(_),
        _.FocusGlobalMS(_));
    },
    _ = () => {
      (_(_, 4, _, void 0), _.SetPlaytimeFromGlobalMS(_), _.FocusGlobalMS(_));
    },
    _ = () => {
      (_(_, 4, void 0, _), _.SetPlaytimeFromGlobalMS(_), _.FocusGlobalMS(_));
    },
    _ = () => {
      _.length > 0 &&
        (_.ReportTrackedAction(
          `/GameRecording/Tooltip/ViewClip/TimelineCtxMenu`,
        ),
        _ && _(_[0].strClipID));
    },
    _ = () => {
      let { strTimelineID: _, nTimelineOffsetMS: _ } =
        _.ConvertGlobalOffsetToTimelineRelativeOffset(_.valMS);
      (_.GetLoader().GetTimelineStartBeforeGlobalZeroMS(_),
        _(_.GetGameID(), _, _, _.GetClipID()));
    },
    _ = () => {
      if (!_) return;
      let { phase: _, strTimelineID: _ } = _;
      _(_.GetGameID(), _, parseInt(_.time), parseInt(_.duration));
    },
    _ = (_) => _.SetPhaseToHighlight(_);
  return (
    (0, _.useEffect)(() => () => _.SetPhaseToHighlight(null), [_]),
    (0, _.jsxs)(_, {
      refInstance: _,
      children: [
        (0, _.jsx)(_, {
          onSelected: _,
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(_, {}),
              _(
                _
                  ? `#Playback_UserSelectionControls_AddUserMarker`
                  : `#TimelineDialog_AddMarker`,
              ),
            ],
          }),
        }),
        (0, _.jsx)(_, {
          onSelected: _,
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(_, {}),
              _(
                _
                  ? `#Playback_UserSelectionControls_TakeScreenshot`
                  : `#TimelineDialog_TakeScreenshot`,
              ),
            ],
          }),
        }),
        (0, _.jsx)(_, {
          onSelected: _,
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(_, {
                direction: `left`,
              }),
              _(
                _
                  ? `#Playback_UserSelectionControls_SetClipStart`
                  : `#TimelineContext_SetClipStart`,
              ),
            ],
          }),
        }),
        (0, _.jsx)(_, {
          onSelected: _,
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(_, {
                direction: `right`,
              }),
              _(
                _
                  ? `#Playback_UserSelectionControls_SetClipEnd`
                  : `#TimelineContext_SetClipEnd`,
              ),
            ],
          }),
        }),
        !!_ &&
          (0, _.jsx)(_, {
            onSelected: _,
            className: `YwXy-p3jOGA-`,
            onMouseOver: () => _([_.strTimelineID, _.phase.time]),
            onMouseLeave: () => _(null),
            children: (0, _.jsxs)(`div`, {
              className: _(`DYV4-rbHkCQ-`, `cTZ4oCV0rfc-`),
              children: [(0, _.jsx)(_, {}), _(`#TimelineDialog_ClipPhase`)],
            }),
          }),
        _.length > 0 &&
          (0, _.jsx)(_, {
            onSelected: _,
            className: `YwXy-p3jOGA-`,
            children: (0, _.jsxs)(`div`, {
              className: _(`DYV4-rbHkCQ-`, `opmNw-e94ys-`),
              children: [(0, _.jsx)(_, {}), _(`#TimelineDialog_ViewClip`)],
            }),
          }),
      ],
    })
  );
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(() => !_.ShouldModeShowClipControls()),
    _ = _(),
    { onMarkerCreated: _ } = _();
  return _.useCallback(
    (_, _) => {
      _ ||
        _ ||
        _(
          (0, _.jsx)(_, {
            onMarkerCreated: _,
            playbackCoordinator: _,
            fnSetSelectionClipRange: _,
          }),
          _,
          _,
        );
    },
    [_, _, _, _, _],
  );
}
function _(_) {
  let { playbackCoordinator: _, fnSetSelectionClipRange: _ } = _,
    _ = (0, _.useRef)(void 0),
    { onMarkerCreated: _ } = _();
  return (0, _.jsxs)(_, {
    refInstance: _,
    children: [
      (0, _.jsx)(_, {
        onSelected: (_) => {
          let _ = (_, _) => {
              _ && _(_, _, _);
            },
            _ = _.GetGlobalMSPlaytime();
          (_.AddUserMarkerAtGlobalMS(
            _,
            `/GameRecording/AddMarker/VideoCtxMenu`,
            _,
          ),
            _.SetPlaytimeFromGlobalMS(_),
            _.FocusGlobalMS(_));
        },
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _(_, _),
          children: [
            (0, _.jsx)(_, {}),
            _(`#Playback_UserSelectionControls_AddUserMarker`),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        onSelected: () => {
          let _ = _.GetGlobalMSPlaytime(),
            { strTimelineID: _, nTimelineOffsetMS: _ } =
              _.ConvertGlobalOffsetToTimelineRelativeOffset(_.valMS);
          (_.GetLoader().GetTimelineStartBeforeGlobalZeroMS(_),
            _(_.GetGameID(), _, _, _.GetClipID()));
        },
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _(_, _),
          children: [
            (0, _.jsx)(_, {}),
            _(`#Playback_UserSelectionControls_TakeScreenshot`),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        onSelected: () => {
          let _ = _.GetGlobalMSPlaytime();
          (_(_, 4, _, void 0),
            _.SetPlaytimeFromGlobalMS(_),
            _.FocusGlobalMS(_));
        },
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _(_, _),
          children: [
            (0, _.jsx)(_, {
              direction: `left`,
            }),
            _(`#Playback_UserSelectionControls_SetClipStart`),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        onSelected: () => {
          let _ = _.GetGlobalMSPlaytime();
          (_(_, 4, void 0, _),
            _.SetPlaytimeFromGlobalMS(_),
            _.FocusGlobalMS(_));
        },
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _(_, _),
          children: [
            (0, _.jsx)(_, {
              direction: `right`,
            }),
            _(`#Playback_UserSelectionControls_SetClipEnd`),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = _(() => _.GetAutoScrollPauseTimeout()),
    _ = _(() => _.GetVisualWindowStartPX()),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0);
  return (
    (0, _.useEffect)(() => {
      _.current && _.current ? _.current.Hide() : (_.current = !0);
    }, [_]),
    (0, _.useEffect)(() => {
      _.SetAutoScrollPaused(!0);
    }, [_]),
    (0, _.useEffect)(() => {
      _ && _.ClearAutoScrollPauseTimeout();
    }, [_, _]),
    _
  );
}
function _() {
  let _ = _(),
    _ = _(),
    { setSelectedMarker: _ } = _(),
    _ = _(),
    { onNavigateToClip: _, onNavigateToScreenshot: _ } = _(),
    _ = _(),
    _ = _(() => !_.ShouldModeShowClipControls());
  return _.useCallback(
    (_, _, _) => {
      _ ||
        _(
          (0, _.jsx)(_, {
            markerInfo: _,
            playbackCoordinator: _,
            timelineView: _,
            setSelectedMarker: _,
            onNavigateToClip: _,
            onNavigateToScreenshot: _,
            bLowDiskSpace: _,
            clearRange: _,
          }),
          _,
          _,
        );
    },
    [_, _, _, _, _, _, _, _],
  );
}
function _(_) {
  let {
      playbackCoordinator: _,
      timelineView: _,
      markerInfo: _,
      setSelectedMarker: _,
      clearRange: _,
      bLowDiskSpace: _,
      onNavigateToClip: _,
      onNavigateToScreenshot: _,
    } = _,
    _ = _(() => _.ConvertGlobalMSToClipOrNone(_.nGlobalMS.valMS)),
    _ = _(() =>
      _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_.nGlobalMS.valMS),
    ),
    _ = _(_),
    _ = (_) => {
      let _ = _,
        _ = _;
      _(_.entry) && ((_ = 0), (_ = parseInt(_.entry.duration)));
      let [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(
        _.strTimelineID,
        _.nGlobalMS.valMS,
        _,
        _,
      );
      (_.SetPlaytimeFromGlobalMS(_(_)),
        _?.(_.entry._, _.strTimelineID, _, _),
        _.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/ClipFromHighlight`,
        ),
        _.stopPropagation());
    },
    _ = () => {
      _ &&
        (_.ReportTrackedAction(
          `/GameRecording/MarkerCtxMenu/ViewClip/${_.entry.type}`,
        ),
        _ && _(_.clipID));
    },
    _ = (_) => {
      if (!_(_.entry)) return;
      _.ReportTrackedAction(
        `/GameRecording/HighlightCtxMenu/Marker/Edit/${_.entry.type}`,
      );
      let _ = (0, _.jsx)(_, {
        entry: _.entry,
        playbackCoordinator: _,
        fnClearSelection: _,
        strTimelineID: _.strTimelineID,
      });
      (_(_, _(_)), _.stopPropagation(), _.preventDefault());
    },
    _ = (_) => {
      _(_.entry) &&
        (_.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/Marker/Delete/${_.entry.type}`,
        ),
        _.RemoveUserMarker(_.strTimelineID, _.entry._));
    },
    _ = () => {
      _(_.entry) &&
        _.entry?.handle &&
        (_.ReportTrackedAction(`/GameRecording/HighlightCtxMenu/Screenshot`),
        _(_.GetGameID(), _.entry.handle));
    },
    _ = [];
  return (
    _(_.entry) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [(0, _.jsx)(_, {}), _(`#Marker_Action_Edit`)],
            }),
          },
          `edit`,
        ),
      ),
    _?.strRecordingID &&
      !_ &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [(0, _.jsx)(_, {}), _(`#TimelineDialog_ClipVideo`)],
            }),
          },
          `clip`,
        ),
      ),
    _(_.entry) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [
                (0, _.jsx)(_, {}),
                _(`#TimelineDialog_ViewScreenshot`),
              ],
            }),
          },
          `view_screenshot`,
        ),
      ),
    _ &&
      _ &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [(0, _.jsx)(_, {}), _(`#TimelineDialog_ViewClip`)],
            }),
          },
          `view_clip`,
        ),
      ),
    _(_.entry) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [(0, _.jsx)(_, {}), _(`#Marker_Action_Delete`)],
            }),
          },
          `delete`,
        ),
      ),
    _.length
      ? (0, _.jsx)(_, {
          refInstance: _,
          children: _,
        })
      : null
  );
}
var _ = 5e3,
  _ = 3e3,
  _ = 5e3;
function _(_) {
  let {
      markerInfo: _,
      view: _,
      coordinator: _,
      gameID: _,
      clipID: _,
      timelineID: _,
      faded: _,
    } = _,
    _ = _.nGlobalMS,
    _ = _(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
    _ = _(() => {
      let _ = _.GetThumbnailComponent();
      return _ && _ !== _.Highlight;
    }),
    _ = _(),
    { selectedMarker: _ } = _(),
    _ = _.entry?._ == _?.strEntryID && _.strTimelineID == _?.strTimelineID,
    { ref: _, ..._ } = _(_, _),
    _ = _.useCallback(
      (_) => {
        let _ = _.valMS - _,
          _ = _.FindTimelineOffsets(_),
          _ = Math.max(_, _.globalOffsetMS);
        (_.SetPlaytimeFromGlobalMS(_(_)),
          _.SetDisplayHighlightEntry(_.entry),
          _.stopPropagation(),
          _.ReportTrackedAction(`/GameRecording/Marker/Click/${_.entry.type}`));
      },
      [_, _.valMS, _, _, _],
    ),
    _ = (_) => {
      (_(_, _, {
        bDisableMouseOverlay: !0,
        bForcePopup: !0,
        bAlwaysOnTop: !0,
      }),
        _.stopPropagation());
    },
    _ = {
      transform: `translateX( calc( ${_}px - 50% ))`,
    };
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `fKVXzdV7f4k-`, _ && `NF7Pk6zJyl4-`),
    style: _,
    ref: _,
    onContextMenu: _,
    ..._,
    children: [
      (0, _.jsx)(
        `div`,
        {
          className: _(_),
          children: (0, _.jsx)(
            _,
            {
              classNames: _,
              entry: _.entry,
              strMarkerIcon: _.strMarkerIcon,
              faded: _,
              onClick: _,
              bSelectedMarker: _,
            },
            _.entry._,
          ),
        },
        _.valMS,
      ),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _(_),
        }),
      }),
    ],
  });
}
var _ = 150;
function _(_, _) {
  let _ = _.useRef(void 0),
    _ = _.useRef(void 0),
    _ = _.useCallback(
      (_) => {
        if (!_.current) return;
        let _ = _.current.getBoundingClientRect();
        if (_.clientY >= _.top && _.clientY <= _.bottom) {
          if (_.left - _.clientX > 1 || _.clientX - _.right > 1) {
            (_.SetThumbnailComponent(null),
              _.current && _.current(),
              (_.current = null));
            return;
          }
          return;
        }
        let _ = _.left + 0.5 * _.width;
        (_.clientX < _ - _ || _.clientX > _ + _) &&
          (_.SetThumbnailComponent(null),
          _.current && _.current(),
          (_.current = null));
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        if (
          (_.SetThumbnailComponent(_.Highlight),
          _.SetThumbnailEntry(_),
          !_.current)
        ) {
          let _ = _(_);
          (_.addEventListener(`mousemove`, _),
            (_.current = () => _.removeEventListener(`mousemove`, _)));
        }
        _.stopPropagation();
      },
      [_, _, _],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = _.current.getBoundingClientRect(),
          _ = _.left,
          _ = _.right;
        _.clientX - _ < 1 || _ - _.clientX < 1
          ? (_.SetThumbnailComponent(null),
            _.current && _.current(),
            (_.current = null))
          : (_(_.current, _.relatedTarget) ||
              (_.clientY - _.top > 1 &&
                _.bottom - _.clientY > 1 &&
                _.clientX - _.left > 1 &&
                _.right - _.clientX > 1 &&
                (_.SetThumbnailComponent(null),
                _.current && _.current(),
                (_.current = null))),
            _.stopPropagation());
      },
      [_],
    );
  return (
    _.useEffect(() => () => _.current && _.current(), []),
    {
      ref: _,
      onMouseOver: _,
      onMouseLeave: _,
    }
  );
}
var _ = 16;
function _(_) {
  switch (_.type) {
    case `achievement`:
      return 9e3;
    default:
      return _.priority;
  }
}
var _ = _.memo(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleTimelines());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            timeline: _,
          },
          _.timelineID,
        ),
      ),
    });
  }),
  _ = {
    screenshot: 0,
    event: 0,
    achievement: 1,
    usermarker: 2,
  };
function _(_, _) {
  if (_[_.type] !== _[_.type]) return _[_.type] - _[_.type];
  let _ = _(_),
    _ = _(_);
  return _ == _
    ? _.time == _.time
      ? _._.localeCompare(_._)
      : parseInt(_.time) - parseInt(_.time)
    : _ - _;
}
var _ = _.memo(function (_) {
  let { timeline: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(() => _.GetVisibleTimelineHighlights(_.timelineID) || [])
      .slice()
      .sort(_),
    _ = _(() => _.GetTimelineOffsetMS(_.timelineID)),
    _ = _.globalOffsetMS - _,
    _ = _.GetGameID(),
    _ = _.GetClipID(),
    _ = new _(_.GetCurrentZoomScale() * _);
  return _.map((_, _) => {
    if (_(_) !== `highlight`) return null;
    let _ = `${_.type}_${_._}_${_.timelineID}_${_}`,
      _ = _(_.timelineID, _, _),
      _ = _.BAllowIcon(_.nGlobalMS.valMS);
    return (0, _.jsx)(
      _,
      {
        gameID: _,
        clipID: _,
        view: _,
        coordinator: _,
        faded: !_,
        timelineID: _.timelineID,
        markerInfo: _,
      },
      _,
    );
  });
});
function _(_, _, _) {
  if (
    ![`event`, `usermarker`, `screenshot`, `achievement`, `error`].includes(
      _.type,
    )
  )
    return (
      _(
        `Unexpected timeline entry type ${_.type}, returning empty highlight marker`,
      ),
      null
    );
  let _ = _,
    _ = _(_);
  return {
    entry: _,
    strMarkerIcon: _ ? `steam_achievement` : _.icon,
    nMarkerPriority: _(_),
    strTimelineID: _,
    strTitle: (!_ && _.title) || ``,
    strDescription: (!_ && _.description) || ``,
    nGlobalMS: _(parseInt(_.time) + _),
  };
}
function _(_) {
  switch (_.type) {
    case `usermarker`:
    case `achievement`:
    case `screenshot`:
    case `error`:
      return `highlight`;
    case `event`:
      return parseInt(_.duration) > 0 ? `range_highlight` : `highlight`;
    default:
      return `none`;
  }
}
var _ = `-X0PMxvY3QE-`,
  _ = `cbzcIa1ocN4-`,
  _ = `MMJtgRs0Os4-`,
  _ = `m6U62VPiE5I-`,
  _ = `KT1NiRNa2wQ-`;
function _(_) {
  let { view: _, entry: _, nGlobalEntryEndMS: _, nGlobalTLStartMS: _ } = _,
    _ = _(),
    _ = _(parseInt(_.time) + _.valMS),
    _ = _(() => {
      let _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
        _ = _.GetVirtualWindowStartPX();
      return _ < _ ? _ : _;
    }),
    _ = _(() => {
      let _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
        _ = _.GetVirtualWindowEndPX();
      return _ < _ ? _ : _;
    }),
    _ = !!_.GetClipID(),
    _ = {
      transform: `translateX( ${_}px )`,
      width: _ - _,
    },
    _ = _({
      [_]: _.mode === _.Invalid,
      [_]: _.mode === _.Staging,
      [_]: _.mode === _.Menus,
      [_]: _.mode === _.Playing,
    });
  return (0, _.jsx)(
    `div`,
    {
      className: _(_, _, _ && `dM-k3XLATgY-`),
      style: _,
    },
    _._,
  );
}
var _ = _.memo(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleTimelines());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            timeline: _,
          },
          _.timelineID,
        ),
      ),
    });
  }),
  _ = _.memo(function (_) {
    let { timelineID: _, globalOffsetMS: _, nDurationMS: _ } = _.timeline,
      _ = _(),
      _ = _(() => {
        let _ = _.GetVisibleTimelineGameModes(_);
        return !_ || _.length === 0
          ? [
              {
                time: `0`,
                type: `gamemode`,
                mode: _.Invalid,
                _: `synthetic`,
              },
            ]
          : _;
      }),
      _ = _(_ + _),
      _ = _ - _.GetTimelineOffsetMS(_),
      _ = [];
    for (let _ = 0; _ < _.length; _++) {
      let _ = _(_ < _.length - 1 ? parseInt(_[_ + 1].time) + _ : _.valMS - 1);
      _.push(
        (0, _.jsx)(
          _,
          {
            view: _,
            entry: _[_],
            nGlobalEntryEndMS: _,
            nGlobalTLStartMS: _(_),
          },
          `gameMode_${_}_${_}`,
        ),
      );
    }
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  }),
  _ = `XVi5a5ZkmMc-`,
  _ = `-nn0AHNIP3k-`,
  _ = `-IpQtGedcoc-`,
  _ = `LsIeUCU634s-`,
  _ = `QNUH0lZ0VfY-`,
  _ = `wQLCIzL88LU-`,
  _ = `JtIym43tUFo-`,
  _ = `a23JQkVm40o-`,
  _ = 500,
  _ = (0, _.memo)(function (_) {
    let _ = _(),
      _ = _(() => _.GetHidePlayer()),
      [_, _] = (0, _.useState)({
        bDragActive: !1,
        bPausedOnDragStart: !1,
      }),
      _ = _(),
      _ = _(() => {
        if (
          _.GetAutoScrollPaused() ||
          _.BReachedMaxScroll() ||
          _.BReachedMinScroll() ||
          _.BIsVideoElementPaused()
        )
          return !1;
        let _ = _.GetGlobalMSPlaytime();
        return (
          _.ConvertGlobalMSToGlobalPXOffset(_.valMS) <
          _.GetMaxScrollLeftPX() + 0.5 * _.GetScrollWindowWidth()
        );
      });
    return _
      ? (0, _.jsx)(_, {
          setDragActive: _,
        })
      : _
        ? (0, _.jsx)(_, {
            view: _,
            setDragActive: _,
          })
        : (0, _.jsx)(_, {
            dragState: _,
            setDragActive: _,
          });
  });
function _(_) {
  let { view: _, setDragActive: _ } = _,
    _ = _(() => _.GetVisualWindowStartPX() + _.GetScrollWindowWidth() / 2);
  return (0, _.jsx)(_, {
    playheadPosition: _,
    children: (0, _.jsx)(_, {
      setDragActive: _,
      bDragActive: !1,
    }),
  });
}
var _ = (0, _.memo)(function (_) {
    let { setDragActive: _ } = _,
      _ = _(),
      _ = _(() => _.GetScrollableWidthPX()),
      _ = _(100),
      _ = (0, _.useCallback)(
        (_) => {
          _.GetAutoScrollPaused() || _(() => _.ScrollToOffset(_));
        },
        [_, _],
      );
    return (
      (0, _.useEffect)(() => _.ScrollToEnd(), [_]),
      (0, _.useEffect)(() => _(_), [_, _]),
      (0, _.jsx)(_, {
        playheadPosition: _,
        children: (0, _.jsx)(_, {
          setDragActive: _,
          bDragActive: !1,
        }),
      })
    );
  }),
  _ = (0, _.memo)(function (_) {
    let { dragState: _, setDragActive: _ } = _,
      { bDragActive: _, bPausedOnDragStart: _ } = _,
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(_(), _, _, _, _);
    return (
      (0, _.useEffect)(() => {
        if (!_) return;
        _.SetThumbnailPosition(_);
        let _ = _.ConvertPXOffsetToGlobalMS(_, !1);
        if (!_) return;
        let _ = _.GetLiveEdgeMS();
        _.SetPlaytimeFromGlobalMS(_.valMS < _ ? _ : _(_), _, !0, !0);
      }, [_, _, _, _, _]),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `FOu6nwXsE7c-`),
        children: (0, _.jsx)(_, {
          className: _ ? _ : void 0,
          playheadPosition: _,
          children: (0, _.jsx)(_, {
            setDragActive: _,
            bDragActive: _,
          }),
        }),
      })
    );
  }),
  _ = (0, _.memo)(function (_) {
    let { setDragActive: _, bDragActive: _ } = _,
      _ = _(),
      _ = (_) => {
        (_ || _.SetThumbnailComponent(_.Playhead), _.stopPropagation());
      },
      _ = (_) => {
        (_ || _.SetThumbnailComponent(null), _.stopPropagation());
      };
    return (0, _.jsx)(`div`, {
      className: _,
      onMouseOver: _,
      onMouseOut: _,
      onFocus: _,
      onBlur: _,
      children: (0, _.jsx)(_, {
        setDragActive: _,
      }),
    });
  }),
  _ = _.memo(function (_) {
    let { setDragActive: _ } = _,
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(() => {
        let _ = _.GetThumbnailComponent();
        return _ === _.RangeLeft || _ === _.RangeRight;
      }),
      _ = (0, _.useCallback)(
        (_) => {
          if (_.button != 0) return;
          let _ = _(_),
            _,
            _,
            _ = () => {
              let _ = _.GetGameRecordingVideo().IsPaused();
              (_({
                bDragActive: !0,
                bPausedOnDragStart: _,
              }),
                _.SetThumbnailComponent(_.Playhead),
                _());
            };
          (_.addEventListener(`mousemove`, _),
            (_ = () => _.removeEventListener(`mousemove`, _)));
          let _ = () => {
            (_({
              bDragActive: !1,
              bPausedOnDragStart: !1,
            }),
              _.SetThumbnailComponent(null),
              _(),
              _());
          };
          (_.addEventListener(`mouseup`, _),
            (_ = () => _.removeEventListener(`mouseup`, _)));
        },
        [_, _, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          let _ = _.GetGlobalMSPlaytime();
          (_(_, _, !0, {
            bDisableMouseOverlay: !0,
            bForcePopup: !0,
            bAlwaysOnTop: !0,
          }),
            _.stopPropagation(),
            _.preventDefault());
        },
        [_, _],
      );
    return (0, _.jsx)(`div`, {
      className: _(_, _ && `Twzqk-0-bXc-`),
      onMouseDown: _,
      onContextMenu: _,
      children: (0, _.jsx)(_, {}),
    });
  });
function _(_) {
  return (0, _.jsxs)(`svg`, {
    ..._,
    width: `12`,
    height: `32`,
    viewBox: `0 0 12 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `5`,
        _: `4`,
        width: `2`,
        height: `40`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_, _, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetScrollWindowWidth()),
    [_, _] = (0, _.useState)(0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    { clearPlaybackAnimation: _, startPlaybackAnimation: _ } = _(_, _, _);
  (0, _.useEffect)(
    () => () => {
      (_.current &&
        (cancelAnimationFrame(_.current),
        (_.current = null),
        (_.current = null)),
        _());
    },
    [_],
  );
  let _ = _.useCallback(
    (_, _, _, _, _) => {
      if (_(_))
        (_(_(_.GetVisualWindowStartPX() + _, 0, _.GetScrollableWidthPX())),
          cancelAnimationFrame(_.current),
          (_.current = null),
          (_.current = null));
      else {
        if (
          ((_.current &&= requestAnimationFrame((_) => _(_, _, _, _, _))),
          _.current)
        ) {
          let _ = ((_ - _.current) / _) * _;
          (_.ScrollBy(_), _((_) => _(_ + _, 0, _.GetScrollableWidthPX())));
        }
        _.current = _;
      }
    },
    [_],
  );
  return (
    (0, _.useEffect)(() => {
      let _ = _ * (1 - _),
        _ = _ * _;
      if (
        (_.current &&
          (cancelAnimationFrame(_.current),
          (_.current = null),
          (_.current = null)),
        !_)
      )
        _();
      else if ((_(), _.valPX < _ && !_.BReachedMinScroll())) {
        if (_.valPX <= _.current) {
          let _ = _.valPX - _,
            _ = _(Math.abs(_ / _), 0, 1) * _;
          _.current = requestAnimationFrame((_) =>
            _(_, _, _.valPX, _, _.BReachedMinScroll),
          );
        }
        _.current = _.valPX;
      } else if (_.valPX > _ && !_.BReachedMaxScroll()) {
        if (_.valPX >= _.current) {
          let _ = _.valPX - _,
            _ = _(Math.abs(_ / (_ - _)), 0, 1) * _;
          _.current = requestAnimationFrame((_) =>
            _(_, _, _.valPX, _, _.BReachedMaxScroll),
          );
        }
        _.current = _.valPX;
      } else _(_(_.valPX, 0, _));
    }, [_, _, _.valPX, _, _, _, _.valPX, _, _]),
    _
  );
}
function _(_, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = _.GetGameRecordingVideo(),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useCallback)(() => {
      if (!_.current) return;
      let _ = _.GetGlobalMSPlaytime();
      if (_.valMS >= 0) {
        let _ = _.BVideoElementPlaying(),
          _ = _.GetVideoElementCurrentTime(),
          _ = _.GetScrollableWidthPX(),
          _ = _.GetCurrentZoomScale();
        if (_.current !== _.valMS || (_.current && _.current != _)) {
          let _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
            _ = Math.min(_, _);
          (_(_), (_.current = _));
        } else if (
          _.current &&
          _.current === _.valMS &&
          _ &&
          _.current &&
          _.current !== _ &&
          _
        ) {
          let _ = _.current + (_ - _.current) * 1e3,
            _ = _.ConvertGlobalMSToGlobalPXOffset(_);
          (_.current && _.current < _ && _(Math.min(_, _)), (_.current = _));
        }
        (_ || ((_.current = null), (_.current = _.valMS)),
          _ &&
            _.current !== _.valMS &&
            ((_.current = _), (_.current = _.valMS)),
          (_.current = _));
      }
      _.current = requestAnimationFrame(_);
    }, [_, _, _, _]);
  return {
    clearPlaybackAnimation: (0, _.useCallback)(() => {
      (_.current && cancelAnimationFrame(_.current),
        (_.current = null),
        (_.current = null),
        (_.current = null),
        (_.current = null));
    }, []),
    startPlaybackAnimation: (0, _.useCallback)(() => {
      _.current ||= requestAnimationFrame(_);
    }, [_]),
  };
}
function _(_) {
  let { className: _, playheadPosition: _, children: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    style: {
      transform: `translateX( calc(${_}px - 50% ))`,
    },
    children: _,
  });
}
var _ = _({
    AddMarker: () => _,
    Button: () => _,
    CreateClipButton: () => _,
    DeleteMarker: () => _,
    Description: () => _,
    DescriptionBlock: () => _,
    Duration: () => _,
    EditMarker: () => _,
    GoToClip: () => _,
    GoToClipFromMarker: () => _,
    Header: () => _,
    Hide: () => _,
    Highlight: () => _,
    Icon: () => _,
    ImageAndInfoBoxContainer: () => _,
    ImageContainer: () => _,
    ImageHighlightBlock: () => _,
    ImageHighlightPosition: () => _,
    InfoBoxContainer: () => _,
    NoRecordedContent: () => _,
    Overlay: () => _,
    Playhead: () => _,
    RangeIcon: () => _,
    RangeLeft: () => _,
    RangeRight: () => _,
    StateDescription: () => _,
    ThumbnailContainerOffset: () => _,
    ThumbnailContents: () => _,
    ThumbnailHitBoxPadding: () => _,
    ThumbnailImage: () => _,
    ThumbnailTooltip: () => _,
    TimeDisplayContainer: () => _,
    Timestamp: () => _,
    Title: () => _,
    TooltipButtons: () => _,
    TooltipChildren: () => _,
    TooltipContainer: () => _,
    TooltipContents: () => _,
    TooltipHitBox: () => _,
    TooltipImage: () => _,
    TooltipImageCtn: () => _,
    TooltipInteractionRegion: () => _,
    TooltipOffset: () => _,
    TooltipRangeContainer: () => _,
    ViewScreenshot: () => _,
    default: () => _,
    thumbnailWidth: () => `320`,
  }),
  _ = `M-05lIt-Rm8-`,
  _ = `demzX-Fs4-4-`,
  _ = `NcHGwBV4SNQ-`,
  _ = `ap-Q4oooopI-`,
  _ = `_9zxrJRU-CaI-`,
  _ = `eQvnQVTk-sI-`,
  _ = `tN6d6cDs7Do-`,
  _ = `B0nXthAtEI8-`,
  _ = `KxFaAst23zY-`,
  _ = `aiwhhTjZ6Pk-`,
  _ = `_9HkA8d7x9kg-`,
  _ = `wCw8FA-GNZw-`,
  _ = `_3-l3Dnlgyfo-`,
  _ = `_00G4k2IDvBQ-`,
  _ = `UYDbMZ6G3WU-`,
  _ = `RAeRf-oNWq8-`,
  _ = `Vc6eo-Q-cRw-`,
  _ = `u2eqeMJHtic-`,
  _ = `_-6Xh-VqwYeg-`,
  _ = `TkM9nyNO0Xs-`,
  _ = `mdK6jpS4jRU-`,
  _ = `VrSRUKXDErM-`,
  _ = `PYo3kx2RfSs-`,
  _ = `_1UvMCudnsIs-`,
  _ = `vx9pJ002RM0-`,
  _ = `BgeUu9u9wW8-`,
  _ = `qP9-v-34gEw-`,
  _ = `VTDf1a6CPQI-`,
  _ = `iHtJ7ZAsX5A-`,
  _ = `k9NX76-rrPo-`,
  _ = `zB0JoG7vSrU-`,
  _ = `Qmw3lo2yg3Y-`,
  _ = `lzzqqN6opQo-`,
  _ = `NcXSUT9Wrrk-`,
  _ = `h-9-LkDvmE4-`,
  _ = `ZtdjDDcQX4Q-`,
  _ = `ncTrqKkwHVg-`,
  _ = `WaQJkS8Zl-8-`,
  _ = `a2muS1tYn9s-`,
  _ = `_8PD3oDSkC5Y-`,
  _ = `BmRL3GyDFyw-`,
  _ = `_1k7fgO2abtE-`,
  _ = `E9tORfFSTjw-`,
  _ = `HjxSSeO2NmQ-`,
  _ = `zjZlS00iLU4-`,
  _ = {
    thumbnailWidth: `320`,
    TooltipOffset: _,
    ThumbnailContainerOffset: _,
    ThumbnailContents: _,
    Hide: _,
    ImageAndInfoBoxContainer: _,
    ImageContainer: _,
    ThumbnailImage: _,
    NoRecordedContent: _,
    InfoBoxContainer: _,
    Header: _,
    Icon: _,
    DescriptionBlock: _,
    Title: _,
    Description: _,
    ThumbnailHitBoxPadding: _,
    Overlay: _,
    TooltipContents: _,
    TooltipChildren: _,
    TooltipImage: _,
    TooltipImageCtn: _,
    ThumbnailTooltip: _,
    Highlight: _,
    TimeDisplayContainer: _,
    Playhead: _,
    RangeLeft: _,
    RangeRight: _,
    Timestamp: _,
    TooltipInteractionRegion: _,
    StateDescription: _,
    TooltipButtons: _,
    Button: _,
    AddMarker: _,
    GoToClip: _,
    CreateClipButton: _,
    EditMarker: _,
    DeleteMarker: _,
    GoToClipFromMarker: _,
    ViewScreenshot: _,
    TooltipHitBox: _,
    TooltipContainer: _,
    ImageHighlightPosition: _,
    ImageHighlightBlock: _,
    TooltipRangeContainer: _,
    Duration: _,
    RangeIcon: _,
  };
function _(_, _) {
  return (
    _.strRecordingID === _.strRecordingID &&
    _.strClipID === _.strClipID &&
    _.nRecordingOffsetMS === _.nRecordingOffsetMS &&
    _.nRecordingStartOffsetMS === _.nRecordingStartOffsetMS &&
    _.cPxMajorAxis === _.cPxMajorAxis &&
    _.bPreciseTiming == _.bPreciseTiming
  );
}
var _ = class _ {
  k_QueueWaitUntilRequestMS = 10;
  k_nMaxBatchSize = 50;
  m_nMaxCacheSize = 18e5 / _;
  m_LRUTrackerSet = new Set();
  m_mapPromises = new Map();
  m_mapThumbnailImages = new Map();
  m_rgPendingRequest = [];
  m_PendingInfoPromise;
  m_PendingInfoResolve = void 0;
  m_PendingTimer = void 0;
  k_AlreadyResolvedOK = Promise.resolve(!0);
  m_rgThumbnailPerf = [];
  constructor() {
    _(this);
  }
  AddPerfMeasure(_) {
    this.m_rgThumbnailPerf.push(_);
  }
  GetPerfMeasures() {
    if (!this.m_rgThumbnailPerf.length) return null;
    let _ = this.m_rgThumbnailPerf.length,
      _ = this.m_rgThumbnailPerf.reduce((_, _) => _ + _) / _;
    return {
      nMean: _,
      nStdDev: Math.sqrt(
        this.m_rgThumbnailPerf
          .map((_) => (_ - _) ** 2)
          .reduce((_, _) => _ + _) / _,
      ),
      nMax: Math.max(...this.m_rgThumbnailPerf),
      nMin: Math.min(...this.m_rgThumbnailPerf),
      nLength: _,
      nLastVal: this.m_rgThumbnailPerf[_ - 1],
    };
  }
  GetKey(_, _, _, _, _, _, _) {
    let _ = _ + _;
    return `${_}_${_}_${_}_${_ ? _ : _ - (_ % _)}_${_}_${_}`;
  }
  GetThumbnailData(_) {
    let _ = this.m_mapThumbnailImages.get(_);
    return (
      _ &&
        (this.m_LRUTrackerSet.has(_) && this.m_LRUTrackerSet.delete(_),
        this.m_LRUTrackerSet.add(_)),
      _
    );
  }
  SetThumbnailData(_, _) {
    if (
      (this.m_LRUTrackerSet.has(_) && this.m_LRUTrackerSet.delete(_),
      this.m_LRUTrackerSet.add(_),
      this.m_mapThumbnailImages.set(_, _),
      this.m_LRUTrackerSet.size >= this.m_nMaxCacheSize)
    ) {
      let _ = this.m_LRUTrackerSet.keys().next().value;
      (this.m_LRUTrackerSet.delete(_), this.m_mapThumbnailImages.delete(_));
    }
  }
  ClearThumbnailData() {
    (this.m_LRUTrackerSet.clear(), this.m_mapThumbnailImages.clear());
  }
  GetThumbnail(_, _, _, _, _, _, _) {
    if (!_) return;
    let _ = this.GetKey(_, _, _, _, _, _, _);
    return this.GetThumbnailData(_);
  }
  GetOrQueueThumbnail(_, _, _, _, _, _, _) {
    if (!_) return;
    let _ = this.GetKey(_, _, _, _, _, _, _),
      _ = this.GetThumbnailData(_);
    if (!_) {
      let _ = `thumbnail_${_}_${_}_${_}`;
      (performance.mark(_),
        this.QueueThumbnailRequest(_, _, _, _, _, _, _).then(() => {
          try {
            let _ = performance.measure(`measure_${_}`, _);
            _ && _.Get().AddPerfMeasure(_.duration);
          } catch (_) {
            _(`CThumbnailCache:: cant measure ${_}, error: ${_}`);
          }
        }),
        (_ = this.GetThumbnailData(_)));
    }
    return _;
  }
  QueueThumbnailRequest(_, _, _, _, _, _, _) {
    let _ = this.GetKey(_, _, _, _, _, _, _),
      _ = this.GetThumbnailData(_);
    if (_ && (_.data || _.bIsLoading)) return this.k_AlreadyResolvedOK;
    (this.SetThumbnailData(_, {
      data: null,
      bIsLoading: !0,
    }),
      this.m_PendingInfoPromise &&
        (this.m_rgPendingRequest[0].strRecordingID != _ ||
          this.m_rgPendingRequest.length > this.k_nMaxBatchSize) &&
        (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
        this.FlushPendingInfo()),
      (this.m_PendingInfoPromise &&
        this.m_rgPendingRequest[0].strRecordingID == _) ||
        ((this.m_PendingInfoPromise = new Promise(
          (_) => (this.m_PendingInfoResolve = _),
        )),
        (this.m_PendingTimer = window.setTimeout(
          () => this.FlushPendingInfo(),
          this.k_QueueWaitUntilRequestMS,
        ))));
    let _ = {
      gameID: _,
      strRecordingID: _,
      strClipID: _,
      nRecordingOffsetMS: _,
      nRecordingStartOffsetMS: _,
      cPxMajorAxis: _,
      bPreciseTiming: _,
    };
    return (
      this.m_rgPendingRequest.some((_) => _(_, _)) ||
        (this.m_rgPendingRequest.push(_),
        this.m_mapPromises.set(_, this.m_PendingInfoPromise)),
      this.m_PendingInfoPromise
    );
  }
  async FlushPendingInfo() {
    if (this.m_PendingInfoResolve === void 0) return;
    let _ = this.m_PendingInfoResolve,
      _ = this.m_rgPendingRequest;
    ((this.m_PendingInfoPromise = void 0),
      (this.m_PendingInfoResolve = void 0),
      (this.m_rgPendingRequest = []),
      (this.m_PendingTimer = void 0),
      await this.InternalLoadMultipleThumbnails(_),
      _());
  }
  async InternalLoadMultipleThumbnails(_) {
    _.sort((_, _) => _.nRecordingOffsetMS - _.nRecordingOffsetMS);
    try {
      let _ = _.map((_) => _.nRecordingOffsetMS * 1e3),
        _ = await _(
          _[0].strRecordingID,
          _[0].strClipID,
          void 0,
          _,
          _[0].cPxMajorAxis,
          _[0].bPreciseTiming,
        );
      _(
        _?.length == _.length,
        `CThumbnailCache.InternalLoadMultipleThumbnails request ${_.length} and got back ${_?.length}`,
      );
      for (let _ = 0; _ < _.length && _ < _?.length; ++_) {
        let _ = _[_],
          _ = this.GetKey(
            _.gameID,
            _.strRecordingID,
            _.strClipID,
            _.nRecordingOffsetMS,
            _.nRecordingStartOffsetMS,
            _.cPxMajorAxis,
            _.bPreciseTiming,
          ),
          _ = _ ? _[_].image_data() : null;
        this.SetThumbnailData(_, {
          data: _,
          bIsLoading: !1,
        });
      }
    } catch (_) {
      _(`Failed to load multiple request thumbnails`, _);
      for (let _ = 0; _ < _.length; ++_) {
        let _ = _[_],
          _ = this.GetKey(
            _.gameID,
            _.strRecordingID,
            _.strClipID,
            _.nRecordingOffsetMS,
            _.nRecordingStartOffsetMS,
            _.cPxMajorAxis,
            _[0].bPreciseTiming,
          );
        this.SetThumbnailData(_, {
          data: null,
          bIsLoading: !1,
        });
      }
    }
  }
  async LoadThumbnail(_, _, _, _, _, _, _) {
    let _ = this.GetKey(_, _, _, _, _, _, _),
      _ = this.GetThumbnailData(_);
    return _ && _.data
      ? !0
      : (this.m_mapPromises.has(_) ||
          this.m_mapPromises.set(
            _,
            this.InternalLoadThumbnail(_, _, _, _, _, _, _),
          ),
        this.m_mapPromises.get(_));
  }
  async InternalLoadThumbnail(_, _, _, _, _, _, _) {
    let _ = this.GetKey(_, _, _, _, _, _, _);
    try {
      let _ = await _(_, _, void 0, [_ * 1e3], _, _);
      if (_?.length > 0) {
        let _ = _ ? _[0].image_data() : null;
        return (
          this.SetThumbnailData(_, {
            data: _,
            bIsLoading: !1,
          }),
          !0
        );
      }
      _(`ThumbnailImage: got empty jpeg ${_.length} list back ${_} @ ${_}`);
    } catch (_) {
      (_(`ThumbnailImage: Fail to load thumbnail ${_} @ ${_} with ${_}`),
        this.SetThumbnailData(_, {
          data: null,
          bIsLoading: !1,
        }));
    }
    return !1;
  }
  static s_Singleton;
  static Get() {
    return ((_.s_Singleton ||= new _()), _.s_Singleton);
  }
};
_([_], _.prototype, `m_mapThumbnailImages`, void 0);
function _(_) {
  let _ = (0, _.useRef)(null),
    _ = _(),
    _ = _(`useThumbnailAsURL`);
  return (
    (0, _.useEffect)(() => {
      if (_ && !_?.token?.reason) {
        let _ = new Blob([_], {
            type: `image/jpeg`,
          }),
          _ = URL.createObjectURL(_);
        ((_.current = _), _());
      }
      return () => {
        _.current &&= (URL.revokeObjectURL(_.current), void 0);
      };
    }, [_?.token?.reason, _, _]),
    _.current
  );
}
function _() {
  return _.Get().GetPerfMeasures();
}
function _(_, _, _, _, _, _, _) {
  return _(_(() => _.Get().GetOrQueueThumbnail(_, _, _, _, _, _, _))?.data);
}
var _ = 320,
  _ = _.forwardRef(function (_, _) {
    let { globalMS: _, children: _, imgClassName: _, className: _, ..._ } = _,
      _ = _(),
      _ = _.GetGameID(),
      _ = _.GetClipID(),
      _ = _(() => _.GetRecordingMode()),
      _ = _(() => _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_));
    _();
    let _ = _?.nRecordingOffsetMS,
      _ = _(_, _, _?.strRecordingID, _, _?.nStartOffsetMS, _, !1),
      [_, _] = (0, _.useState)();
    return (
      (0, _.useEffect)(() => {
        _ && _(_);
      }, [_]),
      (0, _.jsxs)(`div`, {
        ref: _,
        className: _(_, _[_], _),
        ..._,
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_, _?.strRecordingID && !_ && `ap-Q4oooopI-`, _[_]),
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    _?.strRecordingID
                      ? (0, _.jsx)(`img`, {
                          className: _,
                          src: _,
                        })
                      : (0, _.jsx)(`div`, {
                          className: _,
                          children: _(`#GameRecording_PlayerNoContent`),
                        }),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              }),
              (0, _.jsx)(`div`, {
                className: _(_),
                children: _,
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _(_),
          }),
        ],
      })
    );
  });
function _() {
  let _ = _(),
    _ = _(() => _.GetGameID()),
    _ = _(() => _.GetThumbnailComponent()),
    _ = _(() => _.GetThumbnailEntry());
  if (!_ || _ !== _.Highlight) return null;
  if (_(_.entry))
    return (0, _.jsx)(_, {
      thumbnailEntry: _,
      achievementEntry: _.entry,
      strGameID: _,
    });
  let _ = ``,
    _ = ``;
  return (
    _(_.entry)
      ? (_ = _(_.entry.description) || `#GameRecording_UnknownError`)
      : _(_.entry)
        ? ((_ = _.entry.title ? _.entry.title : _(`#Marker_UserMarker_Title`)),
          (_ = _.entry.description || ``))
        : _(_.entry) &&
          ((_ = _.entry.title || ``), (_ = _.entry.description || ``)),
    !_ && !_
      ? null
      : (0, _.jsx)(_, {
          title: _,
          description: _,
          thumbnailEntry: _,
        })
  );
}
function _(_) {
  let { strGameID: _, thumbnailEntry: _, achievementEntry: _ } = _,
    _ = _(new _(_).GetAppID(), _.achievement_name);
  return _
    ? (0, _.jsx)(_, {
        title: _.name ?? ``,
        description: _.description ?? ``,
        thumbnailEntry: _,
      })
    : null;
}
function _(_) {
  let { title: _, description: _, thumbnailEntry: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              entry: _.entry,
              strMarkerIcon: _.strMarkerIcon,
            }),
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `_3-l3Dnlgyfo-`,
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _ &&
          (0, _.jsx)(`div`, {
            className: `_00G4k2IDvBQ-`,
            children: _,
          }),
      }),
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
  let { globalPX: _, onMouseEnter: _, onMouseLeave: _ } = _,
    _ = _(),
    _ = _(() => _.ConvertPXOffsetToGlobalMS(_, !1)),
    _ = _(() => _.GetThumbnailComponent()),
    _ = _(),
    _ = _(() => _.GetRecordingMode());
  return (0, _.jsxs)(_, {
    className: _(_, _[_], _[_]),
    globalMS: _,
    ref: _,
    onMouseEnter: _,
    onMouseLeave: _,
    children: [
      (0, _.jsx)(_, {
        globalMS: _,
      }),
      (0, _.jsx)(_, {
        globalMS: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ === _.Highlight
            ? (0, _.jsx)(_, {})
            : (0, _.jsx)(_, {
                globalPX: _,
              }),
          (0, _.jsx)(_, {
            globalMS: _,
          }),
        ],
      }),
    ],
  });
});
function _(_) {
  let { globalMS: _ } = _,
    _ = _(),
    _ = _(() => _.GetStateDescriptionAtGlobalMS(_));
  return _?.title
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.title,
      })
    : null;
}
function _(_, _) {
  return _.priority - _.priority;
}
function _(_) {
  let { globalMS: _ } = _,
    { setSelectedMarker: _ } = _(),
    _ = _(),
    _ = _(),
    _ = _(() => _.FindRangeEventsAtGlobalMS(_)),
    _ = _.length > 3 ? _.sort(_).slice(0, 3) : _,
    _ = (_, _) => {
      let _ = parseInt(_.duration),
        { nTimelineOffsetMS: _, strTimelineID: _ } =
          _.ConvertGlobalOffsetToTimelineRelativeOffset(_),
        _ = _ - _.valMS + parseInt(_.time),
        [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(_, _, 0, _);
      (_.SetPlaytimeFromGlobalMS(_(_)),
        _?.(_._, _, _, _),
        _.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromRangeEvent`),
        _.stopPropagation());
    };
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_, _) =>
      (0, _.jsxs)(
        `div`,
        {
          className: _,
          onClick: (_) => _(_, _),
          children: [
            _.icon &&
              (0, _.jsx)(_, {
                gameID: _.GetGameID(),
                icon: _.icon,
                className: `zjZlS00iLU4-`,
              }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.title,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(parseInt(_.duration) / 1e3, !1),
            }),
          ],
        },
        `${_.time}_${_}`,
      ),
    ),
  });
}
function _() {
  let _ = _(),
    _ = _(() => _.GetRecordingMode()),
    _ = _(),
    _ = _(() => _.GetThumbnailEntry());
  if (!_) return null;
  let _ = _.GetTimelineOffsetMS(_.strTimelineID),
    _ = _(parseInt(_.entry.time) - _),
    _ = _.MakeRelativeToTimelineEndIfActive(_.strTimelineID, _.valMS),
    _ = ``;
  if (_(_.entry)) {
    let _ = _ + parseInt(_.entry.duration);
    if (_ < 0) {
      let _ = _(Math.abs(_ / 1e3), !1, !1),
        _ = _(Math.abs(_ / 1e3), !1, !1);
      _ = _(`#Duration_WrittenNegation`, _ + ` - ` + _);
    } else {
      let _ = _(_ / 1e3, !1, !1),
        _ = _(_ / 1e3, !1, !1);
      _ = _ + ` - ` + _;
    }
  } else _ = _(_ / 1e3, !1, !0);
  return (0, _.jsx)(`div`, {
    className: _(_, _, _[_]),
    children: _,
  });
}
function _(_) {
  let { globalPX: _ } = _,
    _ = _(),
    _ = _(() => _.ConvertPXToTimelineRelativeMS(_, `end-if-active`));
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _(_ / 1e3, !1, !0),
      })
    : null;
}
function _(_) {
  let { globalMS: _ } = _,
    _ = _(),
    _ = _(() => _.GetGameID()),
    _ = _(() => _.GetThumbnailComponent()),
    _ = _(() => _.GetThumbnailEntry()),
    _ = [
      (0, _.jsx)(
        _,
        {
          globalMS: _,
        },
        `add_marker`,
      ),
      (0, _.jsx)(
        _,
        {
          globalMS: _,
        },
        `view_clip`,
      ),
    ];
  return (
    _ == _.Highlight &&
      _ &&
      (_(_.entry) || _(_.entry) || _(_.entry)
        ? (_ = [
            (0, _.jsx)(
              _,
              {
                markerInfo: _,
              },
              `create_marker_clip`,
            ),
            (0, _.jsx)(
              _,
              {
                markerInfo: _,
              },
              `view_clip`,
            ),
          ])
        : _(_.entry)
          ? (_ = [
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `create_marker_clip`,
              ),
              (0, _.jsx)(
                _,
                {
                  entry: _.entry,
                  gameID: _,
                },
                `view_screen`,
              ),
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `view_clip`,
              ),
            ])
          : _(_.entry) &&
            (_ = [
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `edit_user`,
              ),
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `create_marker_clip`,
              ),
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `delete_user`,
              ),
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `view_clip`,
              ),
            ])),
    (0, _.jsx)(`div`, {
      className: _,
      children: _,
    })
  );
}
function _(_) {
  let { setSelectedMarker: _ } = _(),
    { markerInfo: _ } = _,
    _ = _(),
    _ = _(() => _.ShouldModeShowClipControls()),
    _ = _(() =>
      _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_.nGlobalMS.valMS),
    ),
    _ = _(),
    _ = _();
  return !_?.strRecordingID || !_
    ? null
    : (0, _.jsx)(_, {
        toolTipContent: _(
          _ ? `#RecordingState_Clip_LowDiskSpace` : `#TimelineDialog_ClipVideo`,
        ),
        direction: `top`,
        bTopmost: !0,
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: (_) => {
            let _ = _,
              _ = _;
            _(_.entry) && ((_ = 0), (_ = parseInt(_.entry.duration)));
            let [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(
              _.strTimelineID,
              _.nGlobalMS.valMS,
              _,
              _,
            );
            (_.SetPlaytimeFromGlobalMS(_(_)),
              _?.(_.entry._, _.strTimelineID, _, _),
              _(),
              _.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromHighlight`),
              _.stopPropagation());
          },
          children: (0, _.jsx)(_, {}),
        }),
      });
}
function _(_) {
  let { markerInfo: _ } = _,
    _ = _(),
    _ = _(() => _.ConvertGlobalMSToClipOrNone(_.nGlobalMS.valMS)),
    { onNavigateToClip: _ } = _();
  return _
    ? (0, _.jsx)(_, {
        toolTipContent: _(`#TimelineDialog_ViewClip`),
        direction: `top`,
        bTopmost: !0,
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: () => {
            _ &&
              (_.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/${_.entry.type}`,
              ),
              _(_.clipID));
          },
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { markerInfo: _ } = _,
    _ = _(),
    _ = _();
  return (0, _.jsx)(_, {
    toolTipContent: _(`#Marker_Action_Delete`),
    direction: `top`,
    bTopmost: !0,
    children: (0, _.jsx)(`div`, {
      className: _(_, _),
      onClick: (_) => {
        _(_.entry) &&
          (_.ReportTrackedAction(
            `/GameRecording/Marker/Delete/${_.entry.type}`,
          ),
          _.RemoveUserMarker(_.strTimelineID, _.entry._),
          _.SetThumbnailComponent(null));
      },
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { markerInfo: _ } = _,
    _ = _(),
    _ = _();
  return (0, _.jsx)(_, {
    toolTipContent: _(`#Marker_Action_Edit`),
    direction: `top`,
    bTopmost: !0,
    children: (0, _.jsx)(`div`, {
      className: _(_, _),
      onClick: (_) => {
        if (!_(_.entry)) return;
        _.ReportTrackedAction(`/GameRecording/Marker/Edit/${_.entry.type}`);
        let _ = (0, _.jsx)(_, {
          entry: _.entry,
          playbackCoordinator: _,
          fnClearSelection: _,
          strTimelineID: _.strTimelineID,
        });
        (_(_, _(_)), _.stopPropagation(), _.preventDefault());
      },
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { entry: _, gameID: _ } = _,
    _ = _.handle,
    { onNavigateToScreenshot: _ } = _();
  return (0, _.jsx)(_, {
    toolTipContent: _(`#TimelineDialog_ViewScreenshot`),
    direction: `top`,
    bTopmost: !0,
    children: (0, _.jsx)(`div`, {
      className: _(_, _),
      onClick: () => {
        _ &&
          (_.ReportTrackedAction(`/GameRecording/Tooltip/Screenshot`), _(_, _));
      },
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { globalMS: _ } = _,
    _ = _();
  return _(() => _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_))
    ?.strRecordingID
    ? (0, _.jsx)(_, {
        toolTipContent: _(`#TimelineDialog_AddMarker`),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: () => {
            (_.AddUserMarkerAtGlobalMS(
              _(_),
              `/GameRecording/AddMarker/Thumbnail`,
              null,
            ),
              _.SetPlaytimeFromGlobalMS(_(_)));
          },
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { globalMS: _ } = _,
    _ = _(),
    _ = _(() => _.ConvertGlobalMSToClipOrNone(_)),
    { onNavigateToClip: _ } = _();
  return _
    ? (0, _.jsx)(_, {
        toolTipContent: _(`#TimelineDialog_ViewClip`),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: () => {
            _ &&
              (_.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/timeline`,
              ),
              _(_.clipID));
          },
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
var _ = _.memo(function (_) {
    let _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = (0, _.useCallback)(
        (_) => {
          if (!_) return;
          let _ = _.currentTarget.getBoundingClientRect(),
            _ = _(_.clientX - _._, 0, _.width),
            _ = _.ConvertPXOffsetToGlobalMS(_, !1);
          _ && _.SetPlaytimeFromGlobalMS(_(_), void 0, void 0, !0);
        },
        [_, _, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          if (!_) return;
          let _ = _.currentTarget.getBoundingClientRect(),
            _ = _(_.clientX - _._, 0, _.width),
            _ = _.ConvertPXOffsetToGlobalMS(_, !1);
          _ &&
            (_(_, _(_), !1, {
              bDisableMouseOverlay: !0,
              bForcePopup: !0,
              bAlwaysOnTop: !0,
            }),
            _.preventDefault(),
            _.stopPropagation());
        },
        [_, _, _],
      );
    return (
      _(`click`, _),
      _(`contextmenu`, _),
      (0, _.jsx)(_, {
        globalMouseXPX: _.globalMouseXPX.valPX || 0,
      })
    );
  }),
  _ = _.memo(function (_) {
    let { globalMouseXPX: _ } = _,
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(() => {
        if (_.GetThumbnailComponent()) return _.GetThumbnailPosition();
      }),
      [_, _] = (0, _.useState)(),
      [_, _] = (0, _.useState)();
    return (
      (0, _.useEffect)(() => {
        isNaN(_) ? !_ && _ && _(_) : _(_);
      }, [_, _, _, _, _]),
      (0, _.jsx)(`div`, {
        className: _,
        style: {
          transform: `translateX( calc(${_}px - 50%))`,
        },
        children: (0, _.jsx)(_, {
          globalPX: _,
          setInteractingWithThumbnail: _,
          bInteractingWithThumbnail: _,
        }),
      })
    );
  });
function _(_) {
  let {
      globalPX: _,
      setInteractingWithThumbnail: _,
      bInteractingWithThumbnail: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(() => _.GetRecordingMode() === `Overlay`),
    _ = _(() => _.ConvertPXOffsetToGlobalMS(_, !1)),
    _ = _(() => _.GetTimelineParentCtnRef()),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetThumbnailComponent()),
    _ = _(),
    _ = _({
      toolTipContent: (0, _.jsx)(_, {
        globalPX: _,
        ref: _,
        onMouseEnter: () => _(!0),
        onMouseLeave: (_) => _(!1),
      }),
      direction: _ ? `bottom` : `top`,
      nDelayShowMS: 0,
      nBodyDistance: 0,
      nAllowOffscreenPx: 0,
    }),
    { setHovered: _, setTarget: _ } = _.stateHandlers,
    _ = (0, _.useCallback)(() => {
      (_(!1),
        _(!1),
        _.current && _.current(),
        (_.current = null),
        _.GetAutoScrollPaused() && _.SetAutoScrollPauseTimeout(),
        _.SetThumbnailComponent(null));
    }, [_, _, _]),
    _ = (0, _.useCallback)(
      (_, _) => {
        if (!_.current || !_.current) return;
        let _ = _.current.getBoundingClientRect(),
          _ = _.left,
          _ = _.right,
          _ = _.top,
          _ = _.bottom;
        if (_.current) {
          let _ = _.current.getBoundingClientRect();
          _ ? (_ = _.bottom) : (_ = _.top);
        }
        (_ <= _ || _ >= _ || _ <= _ || _ >= _) && _();
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _.GetThumbnailComponent();
        (_ && _ !== _.Highlight) || _(_.clientX, _.clientY);
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _(_.clientX, _.clientY);
      },
      [_],
    );
  (_(
    `mouseenter`,
    (0, _.useCallback)(() => {
      (_(!0), _(_.current));
      let _ = _(_.current);
      _ &&
        !_.current &&
        (_.addEventListener(`mousemove`, _),
        _.addEventListener(`mouseup`, _),
        (_.current = () => {
          (_.removeEventListener(`mousemove`, _),
            _.removeEventListener(`mouseup`, _));
        }));
    }, [_, _, _, _]),
  ),
    (0, _.useEffect)(() => {
      let _ = (_) => {
        let _ = _.GetThumbnailComponent();
        (_ && _ === _.Playhead) ||
          _ === _.RangeLeft ||
          _ === _.RangeRight ||
          (_.current && !_(_.current, _.relatedTarget) && _());
      };
      return (
        _ && _.addEventListener(`mouseleave`, _),
        () => _ && _.removeEventListener(`mouseleave`, _)
      );
    }, [_, _, _]),
    (0, _.useEffect)(() => _, [_]));
  let _ = (_ || _) && _ && !_;
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _(_, _ && `_52Luj95k6TU-`),
      }),
      !!_ && _.tooltip,
    ],
  });
}
var _ = `hmHZe5aDrq8-`,
  _ = `VE-8JY5P2Qo-`,
  _ = `bvHF-aIx6oc-`,
  _ = `EFP0lnhKJeo-`,
  _ = `MkCCKg4MUdU-`,
  _ = `_1xOfco9qmxw-`,
  _ = `fXvcT3pVP7Q-`,
  _ = `_2ytscAh4R6M-`,
  _ = 500,
  _ = (0, _.memo)(function () {
    let [_, _] = (0, _.useState)(`none`),
      _ = _(),
      _ = _(),
      _ = _();
    return !_ || !_ || !_
      ? null
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            activeControlState: _,
            setActiveControlState: _,
          }),
        });
  }),
  _ = (0, _.memo)(function (_) {
    let { activeControlState: _, setActiveControlState: _ } = _,
      [_, _] = (0, _.useState)(),
      [_, _] = (0, _.useState)(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
      _ = _(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
      _ = (0, _.useCallback)(
        (_) => {
          (_(_), _.SetAutoScrollPauseTimeout());
        },
        [_],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          (_(_), _.SetAutoScrollPauseTimeout());
        },
        [_],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _ === `none` && _.stopPropagation();
        },
        [_],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _ === `none` && _.stopPropagation();
        },
        [_],
      );
    return (0, _.jsx)(`div`, {
      className: _(_, _ !== `none` && `r9kdAFASyBY-`),
      onMouseOver: _,
      onMouseOut: _,
      onFocus: _,
      onBlur: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            isActive: _ === `left`,
            setControlState: _,
            setRangeControlPX: _,
            pxOffset: _,
          }),
          (0, _.jsx)(_, {
            startOffsetPX: (_ === `left` && _) || _,
            endOffsetPX: (_ === `right` && _) || _,
            className: _,
          }),
          (0, _.jsx)(_, {
            isActive: _ === `right`,
            setControlState: _,
            setRangeControlPX: _,
            pxOffset: _,
          }),
        ],
      }),
    });
  });
function _(_, _, _) {
  let _ = _.GetVisualWindowStartPX() - _.GetTimelineMarginWidth(),
    _ = _ + _.GetVisualWidth(),
    _ = Math.max(0, _ + 3),
    _ = Math.min(_.GetScrollableWidthPX(), _ - 3);
  _(_(_, _, _));
}
function _(_, _, _, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetScrollWindowWidth());
  (0, _.useEffect)(
    () => () => {
      _.current &&
        (cancelAnimationFrame(_.current),
        (_.current = null),
        (_.current = null));
    },
    [],
  );
  let _ = _.useCallback(
    (_, _, _, _, _) => {
      if (_(_))
        (_(_(_.GetVisualWindowStartPX() + _, 0, _.GetScrollableWidthPX())),
          cancelAnimationFrame(_.current),
          (_.current = null),
          (_.current = null));
      else {
        if (
          ((_.current &&= requestAnimationFrame((_) => _(_, _, _, _, _))),
          _.current)
        ) {
          let _ = ((_ - _.current) / _) * _;
          (_.ScrollBy(_), _((_) => _(_ + _, 0, _.GetScrollableWidthPX())));
        }
        _.current = _;
      }
    },
    [_],
  );
  (0, _.useEffect)(() => {
    _.current &&
      (cancelAnimationFrame(_.current), (_.current = null), (_.current = null));
    let _ = _ * (1 - _),
      _ = _ * _,
      _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
      _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
    if (_.valPX > _) (_(_), _(`right`), _.SetThumbnailComponent(_.RangeRight));
    else {
      if (_.valPX < _ && !_.BReachedMinScroll()) {
        if (_.valPX > _.current) _.current = !0;
        else if (_.valPX < _.current || !_.current) {
          let _ = Math.min(_, _),
            _ = _.valPX - _,
            _ = _(Math.abs(_ / _), 0, 1) * _;
          ((_.current = requestAnimationFrame((_) =>
            _(_, _, _.valPX, _, _.BReachedMinScroll),
          )),
            (_.current = !1));
        }
        _(_.valPX, _, _);
      } else if (_.valPX > _ && _ > _ && !_.BReachedMaxScroll()) {
        if (_.valPX < _.current) _.current = !0;
        else if (_.valPX > _.current || !_.current) {
          let _ = (_) => {
              let _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
              return _.BReachedMaxScroll() || _ <= _;
            },
            _ = _.valPX - _,
            _ = _(Math.abs(_ / (_ - _)), 0, 1) * _;
          ((_.current = requestAnimationFrame((_) => _(_, _, _.valPX, _, _))),
            (_.current = !1));
        }
        _(_.valPX, _, _);
      } else _(_(_.valPX, 0, _));
      _.current = _.valPX;
    }
  }, [_.valPX, _.valMS, _.valPX, _, _, _, _, _, _]);
}
var _ = (0, _.memo)(function (_) {
  let {
      isActive: _,
      setControlState: _,
      setRangeControlPX: _,
      pxOffset: _,
    } = _,
    _ = _();
  return _
    ? (0, _.jsx)(_, {
        setControlState: _,
        setRangeControlPX: _,
        pxOffset: _,
      })
    : (0, _.jsx)(_, {
        offsetMS: _.valMS,
        direction: `left`,
        setControlState: _,
        setRangeControlPX: _,
      });
});
function _(_) {
  let { setControlState: _, setRangeControlPX: _, pxOffset: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return (
    _(_(), _, _, _, _, _),
    (0, _.useEffect)(() => {
      isNaN(_) ||
        (_.SetThumbnailPosition(_), _(5, _(_.ConvertPXOffsetToGlobalMS(_))));
    }, [_, _, _]),
    (0, _.jsx)(_, {
      offsetPX: _,
      direction: `left`,
    })
  );
}
var _ = (0, _.memo)(function (_) {
  let {
      isActive: _,
      setControlState: _,
      setRangeControlPX: _,
      pxOffset: _,
    } = _,
    _ = _();
  return _
    ? (0, _.jsx)(_, {
        setControlState: _,
        setRangeControlPX: _,
        pxOffset: _,
      })
    : (0, _.jsx)(_, {
        offsetMS: _.valMS,
        direction: `right`,
        setControlState: _,
        setRangeControlPX: _,
      });
});
function _(_) {
  let { setControlState: _, setRangeControlPX: _, pxOffset: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return (
    _(_(), _, _, _, _, _),
    (0, _.useEffect)(() => {
      isNaN(_) ||
        (_.SetThumbnailPosition(_), _(5, _(_.ConvertPXOffsetToGlobalMS(_))));
    }, [_, _, _]),
    (0, _.jsx)(_, {
      offsetPX: _,
      direction: `right`,
    })
  );
}
function _(_, _, _, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetScrollWindowWidth());
  (0, _.useEffect)(
    () => () => {
      _.current &&
        (cancelAnimationFrame(_.current),
        (_.current = null),
        (_.current = null));
    },
    [],
  );
  let _ = _.useCallback(
    (_, _, _, _, _) => {
      if (_(_))
        (_(_(_.GetVisualWindowStartPX() + _, 0, _.GetScrollableWidthPX())),
          cancelAnimationFrame(_.current),
          (_.current = null),
          (_.current = null));
      else {
        if (
          ((_.current &&= requestAnimationFrame((_) => _(_, _, _, _, _))),
          _.current)
        ) {
          let _ = ((_ - _.current) / _) * _;
          (_.ScrollBy(_), _((_) => _(_ + _, 0, _.GetScrollableWidthPX())));
        }
        _.current = _;
      }
    },
    [_],
  );
  (0, _.useEffect)(() => {
    _.current &&
      (cancelAnimationFrame(_.current), (_.current = null), (_.current = null));
    let _ = _ * (1 - _),
      _ = _ * _,
      _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
      _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
    if (_.valPX < _) (_(_), _(`left`), _.SetThumbnailComponent(_.RangeLeft));
    else {
      if (_.valPX > _ && !_.BReachedMaxScroll()) {
        if (_.valPX < _.current) _.current = !0;
        else if (_.valPX > _.current || !_.current) {
          let _ = Math.max(_, _),
            _ = _.valPX - _,
            _ = _(Math.abs(_ / (_ - _)), 0, 1) * _;
          ((_.current = requestAnimationFrame((_) =>
            _(_, _, _.valPX, _, _.BReachedMaxScroll),
          )),
            (_.current = !1));
        }
        _(_.valPX, _, _);
      } else if (
        _.valPX < _ &&
        _ < _ &&
        _.valPX <= _.current &&
        !_.BReachedMinScroll()
      ) {
        if (_.valPX > _.current) _.current = !0;
        else if (_.valPX < _.current || !_.current) {
          let _ = _.valPX - _,
            _ = _(Math.abs(_ / _), 0, 1) * _,
            _ = (_) =>
              _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS) > _ ||
              _.BReachedMinScroll();
          ((_.current = requestAnimationFrame((_) => _(_, _, _.valPX, _, _))),
            (_.current = !1));
        }
        _(_.valPX, _, _);
      } else _(_(_.valPX, 0, _));
      _.current = _.valPX;
    }
  }, [_.valMS, _.valPX, _, _, _, _, _, _.valPX, _]);
}
function _(_) {
  let {
      offsetMS: _,
      direction: _,
      setControlState: _,
      setRangeControlPX: _,
    } = _,
    _ = _(),
    _ = _(() => _.ConvertGlobalMSToGlobalPXOffset(_));
  (0, _.useEffect)(
    () => (
      _(void 0),
      () => {
        _(_);
      }
    ),
    [_, _],
  );
  let _ = (0, _.useCallback)(
      (_) => {
        let _ = _(_),
          _,
          _,
          _ = () => {
            (_(_),
              _.SetThumbnailComponent(
                _ === `left` ? _.RangeLeft : _.RangeRight,
              ),
              _());
          };
        (_.addEventListener(`mousemove`, _),
          (_ = () => _.removeEventListener(`mousemove`, _)));
        let _ = () => {
          (_(`none`), _.SetThumbnailComponent(null), _(), _());
        };
        (_.addEventListener(`mouseup`, _),
          (_ = () => _.removeEventListener(`mouseup`, _)));
      },
      [_, _, _],
    ),
    _ = (_) => {
      _.SetThumbnailComponent(_ === `left` ? _.RangeLeft : _.RangeRight);
    },
    _ = (_) => {
      _.SetThumbnailComponent(null);
    };
  return (0, _.jsx)(`div`, {
    className: _,
    onMouseDown: _,
    onMouseOver: _,
    onFocus: _,
    onMouseOut: _,
    onBlur: _,
    children: (0, _.jsx)(_, {
      offsetPX: _,
      direction: _,
    }),
  });
}
var _ = (0, _.memo)(function (_) {
    let { startOffsetPX: _, endOffsetPX: _, className: _ } = _;
    if (isNaN(_) || isNaN(_)) return null;
    let _ = {
      width: _ - _ || 0,
      transform: `translateX(${_}px)`,
    };
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      style: _,
    });
  }),
  _ = (0, _.memo)(function (_) {
    let { direction: _, offsetPX: _ } = _,
      _ = {
        transform: `translateX( calc( ${_}px - 50%) )`,
      },
      _ = _(),
      _ = _(() => _.GetThumbnailComponent() === _.Playhead);
    return (0, _.jsx)(`div`, {
      style: _,
      className: _(_),
      children: (0, _.jsx)(`div`, {
        className: _(_, _ === `left` && void 0, _ && `o23F9bJf68E-`),
        children: (0, _.jsx)(_, {
          innerFill: `#171d25`,
          direction: _,
        }),
      }),
    });
  });
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 3 36`,
    fill: `none`,
    style: {
      transform: `rotate(${_.direction === `right` ? 180 : 0}deg)`,
    },
    children: [
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 0)`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 10)`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 20)`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 30)`,
      }),
    ],
  });
}
var _ = `peJfRpya9Fs-`,
  _ = 100,
  _ = _.memo(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleWindowRelativeTimelines()),
      _ = _().GetRecordingMode(),
      _ = [],
      _ = ``;
    for (let _ of _) {
      let _ = _.GetTimeRecorded(_.timelineID),
        _ = _(_);
      _ != _ &&
        (_.push({
          timeline: _,
          strLabel: _,
        }),
        (_ = _));
    }
    for (let _ = _.length - 2; _ >= 0; _--) {
      let _ = _[_];
      _[_ + 1].timeline.nVisibleStartPX - _.timeline.nVisibleStartPX >= _ ||
        _.splice(_, 1);
    }
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            startPX: _.timeline.nVisibleStartPX,
            label: _.strLabel,
            recordingMode: _,
          },
          _.timeline.timelineID,
        ),
      ),
    });
  });
function _(_) {
  let { label: _, startPX: _, recordingMode: _ } = _,
    _ = _ == _.Overlay;
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `r-oc0eIT1Lw-`),
    style: {
      transform: `translateX(${_}px)`,
    },
    children: _,
  });
}
var _ = `rpb9NP30tgc-`,
  _ = `JCH5UEpUzxo-`,
  _ = (0, _.memo)(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleRecordings());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            startPX: _.nStartPX,
            endPX: _.nEndPX,
            isActive: _.bIsActive,
            recordingType: _.recordingType,
          },
          _.recordingID,
        ),
      ),
    });
  });
function _(_) {
  let { isActive: _, endPX: _, startPX: _, recordingType: _ } = _,
    _ = {
      width: _ - _ || 0,
      transform: `translateX(${_}px)`,
    },
    _ = _(),
    _ = _ === 4,
    _ = _ === 2;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _(
          _,
          _ && `xg0PXeGNr6o-`,
          _ && `DlYcvPsKhnQ-`,
          _ && `pbiBKOrHy28-`,
        ),
        style: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          endPX: _,
        }),
    ],
  });
}
function _(_) {
  let { endPX: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(() => _.GetRecordingMode() === `Overlay`),
    _ = _(_.GetGameID()),
    _ = _(() => _.GetIsLiveEdge() && !_.GetHidePlayer()),
    _ = _(() => {
      let _ = _.GetLiveEdgeBufferWindowStartMS();
      return _.ConvertGlobalMSToGlobalPXOffset(_.valMS);
    });
  if (!_ || _ !== _.BackgroundRecording) return null;
  let _ = {
    width: _ - _ || 0,
    transform: `translateX(${_}px)`,
  };
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `ObPDU8jrJGI-`),
    style: _,
  });
}
var _ = `etyWD-mczjA-`,
  _ = (0, _.memo)(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleClips());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            startPX: _.pxClipStart,
            endPX: _.pxClipEnd,
          },
          _.clipID,
        ),
      ),
    });
  }),
  _ = (0, _.memo)(function (_) {
    let { endPX: _, startPX: _ } = _,
      _ = {
        width: _ - _ || 0,
        transform: `translateX(${_}px)`,
      };
    return (0, _.jsx)(`div`, {
      className: _,
      style: _,
    });
  }),
  _ = `r7Pr1Bv8r30-`,
  _ = `V3xSKJyklXQ-`,
  _ = `nT24tktVM-s-`,
  _ = `a9purv61CPI-`,
  _ = `O-J-KNmIhN8-`,
  _ = `lMpHX8arl8s-`,
  _ = `hMUPhnvIP90-`,
  _ = `M5wPU20T76E-`,
  _ = `H3EDFnaZgvI-`,
  _ = `iAKyxjjcF38-`,
  _ = `pEzP-JpCCcQ-`,
  _ = `hBDI48p9XRY-`,
  _ = `PZt-x5Tu8rg-`,
  _ = `_57e4oWLUba0-`,
  _ = `diJRy3nTnTM-`;
function _() {
  let _ = _(_().GetGameID());
  return _ === _.NotRecording || _ === _.NotRunning ? null : (0, _.jsx)(_, {});
}
function _(_) {
  let _ = _(),
    _ = _(() => _.GetIsLiveEdge() && !_.GetHidePlayer()),
    _ = _.useCallback(() => {
      (_.SetHidePlayer(!1), _.GetGameRecordingVideo().Play());
      let _ = _.GetLiveEdgeMS();
      (_.SetPlaytimeFromGlobalMS(_), _.FocusGlobalMS(_));
    }, [_]);
  return (0, _.jsx)(_, {
    className: _,
    toolTipContent: _(_ ? `#Playback_AtLatest` : `#Playback_JumpToLatest`),
    direction: `bottom`,
    children: (0, _.jsx)(_, {
      onClick: _,
      className: _(_, _ && `FuL7350j26I-`),
      children: (0, _.jsx)(_, {
        className: _(_),
      }),
    }),
  });
}
var _ = (0, _.forwardRef)(function (_, _) {
    let _ = _();
    return _(() => !_.BEmpty())
      ? (0, _.jsx)(_, {
          ..._,
          timelineView: _,
          ref: _,
        })
      : (0, _.jsx)(_, {
          ref: _,
        });
  }),
  _ = (0, _.forwardRef)(function (_, _) {
    return (0, _.jsx)(`div`, {
      ref: _,
      className: _(_, _.className),
    });
  }),
  _ = (0, _.forwardRef)(function (_, _) {
    let _ = _(),
      { children: _, className: _, timelineView: _, disableZoom: _ } = _,
      [_, _] = (0, _.useState)(),
      _ = _.useCallback(
        (_) => {
          let _ = _.target.getBoundingClientRect();
          (_.SetScrollWindowOffset(_._), _.SetScrollWindowWidth(_.width), _(_));
        },
        [_],
      ),
      _ = _(_),
      _ = _.useCallback(
        (_) => {
          if (_.ctrlKey && !_) {
            let _ = _ ? (_.clientX - _._) / _.width : 0.5;
            _.deltaY > 0
              ? _.ZoomOut(_.deltaY / 100, _)
              : _.ZoomIn(-_.deltaY / 100, _);
          } else _.ScrollBy(_.deltaY);
        },
        [_, _, _],
      );
    return (
      _(_, _),
      (0, _.jsxs)(`div`, {
        ref: _,
        onWheel: _,
        onMouseOver: () => _.SetAutoScrollPaused(!0),
        onFocus: () => {},
        onMouseLeave: () => _.SetAutoScrollPauseTimeout(),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                ref: _,
                className: _(_, _),
                children: [
                  _,
                  (0, _.jsx)(_, {
                    timelineView: _,
                  }),
                ],
              }),
              _.GetRecordingMode() === _.Overlay && (0, _.jsx)(_, {}),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: !_.GetGamepadMode() && (0, _.jsx)(_, {}),
          }),
        ],
      })
    );
  });
function _(_) {
  let { timelineView: _ } = _,
    _ = _(() => _.GetVisualWindowStartPX()),
    _ = _(() => _.BReachedMaxScroll());
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, _ === 0 && `geyoRt0NNcM-`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `geyoRt0NNcM-`),
      }),
    ],
  });
}
function _() {
  let [_, _] = (0, _.useState)({
      scrollBarWidth: 0,
      scrollBarXOffset: 0,
    }),
    _ = _.useCallback((_) => {
      let _ = _.target.getBoundingClientRect();
      _({
        scrollBarWidth: _.width,
        scrollBarXOffset: _._,
      });
    }, []),
    _ = _(),
    _ = _(() => _.GetScrollableWidthPX() + 2 * _.GetTimelineMarginWidth()),
    _ = _(() => _.GetVisualWidth()),
    _ = (0, _.useMemo)(
      () => (_ * _.scrollBarWidth) / _ || 0,
      [_, _.scrollBarWidth, _],
    ),
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(
      _,
      Math.round(_) === Math.round(_.scrollBarWidth) && `cyfpsKb1Pow-`,
    ),
    ref: _,
    children: [
      (0, _.jsx)(_, {
        timelineView: _,
        scrollSize: _,
      }),
      (0, _.jsx)(_, {
        scrollSize: _,
        timelineView: _,
        timelineWidth: _,
        thumbWidth: _,
      }),
    ],
  });
}
function _(_) {
  let { timelineView: _, scrollSize: _ } = _,
    _ = _(),
    _ = _(_, _),
    _ = _(() => _.GetTimelineMarginWidth()),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _ + _;
        return _((_ * _.scrollBarWidth) / _, 0, _.scrollBarWidth);
      },
      [_.scrollBarWidth, _, _],
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    ..._,
    children: [
      (0, _.jsx)(_, {
        timelineView: _,
        playbackCoordinator: _,
        fnConvertGlobalPXToTrackPX: _,
        scrollBarWidth: _.scrollBarWidth,
      }),
      (0, _.jsx)(_, {
        timelineView: _,
        fnConvertGlobalPXToTrackPX: _,
      }),
    ],
  });
}
function _(_, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = (0, _.useCallback)(
      (_) => _((_ * _) / _.scrollBarWidth),
      [_.scrollBarWidth, _],
    ),
    _ = (0, _.useCallback)(() => {
      if (!_.current) return;
      let _ = _.GetScrollWindowWidth(),
        _ = _.GetVisualWindowStartPX() + _ / 2;
      if (_.current.valPX > _ - _ * 0.1 && _.current.valPX < _ + _ * 0.1)
        return;
      let _ = _.GetScrollableWidthPX() * 0.005,
        _ = _.current.valPX - _;
      if (Math.abs(_) > _) {
        let _ = _ > 0 ? _ : -_;
        (_.ScrollToOffsetCentered(_ + _),
          (_.current = requestAnimationFrame(() => _())));
      } else _.ScrollToOffsetCentered(_.current.valPX);
    }, [_]),
    _ = (0, _.useCallback)(
      (_) => {
        ((_.current = _(_.clientX - _.scrollBarXOffset)),
          (_.current = requestAnimationFrame(() => _())));
      },
      [_, _, _.scrollBarXOffset],
    ),
    _ = (0, _.useCallback)(() => {
      _.current && cancelAnimationFrame(_.current);
    }, []),
    _ = (0, _.useCallback)(
      (_) => {
        _.current = _(_.clientX - _.scrollBarXOffset);
      },
      [_, _.scrollBarXOffset],
    );
  return (
    (0, _.useEffect)(
      () => () => {
        _.current && cancelAnimationFrame(_.current);
      },
      [],
    ),
    {
      onMouseDown: _,
      onMouseMove: _,
      onMouseUp: _,
      onMouseLeave: _,
    }
  );
}
function _(_) {
  let {
      timelineView: _,
      playbackCoordinator: _,
      fnConvertGlobalPXToTrackPX: _,
      scrollBarWidth: _,
    } = _,
    _ = _(() => _.GetHidePlayer()),
    _ = _(() => {
      let _ = _.GetGlobalMSPlaytime();
      if (_ && _.BInitialized()) {
        let _ = Math.floor(_.ConvertGlobalMSToGlobalPXOffset(_.valMS));
        return _(_);
      }
      return null;
    });
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        onClick: () => {
          let _ = _.GetGlobalMSPlaytime();
          (_ && (_ = _.GetLiveEdgeMS()), _.ScrollToCenteredGlobalMS(_.valMS));
        },
        style: {
          transform: `translateX(${_ ? _ : _}px)`,
        },
        children: (0, _.jsx)(_, {}),
      })
    : null;
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `52`,
    height: `31`,
    viewBox: `0 0 52 31`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M26 31L51.1147 0.25H0.885263L26 31Z`,
      fill: `#D9D9D9`,
    }),
  });
}
function _(_) {
  let { timelineView: _, fnConvertGlobalPXToTrackPX: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(() => {
      if (_ && _.BInitialized()) {
        let _ = Math.floor(
            _.ConvertGlobalMSToGlobalPXOffset(_.nGlobalStartMS.valMS),
          ),
          _ = Math.floor(
            _.ConvertGlobalMSToGlobalPXOffset(_.nGlobalEndMS.valMS),
          );
        if (!isNaN(_) && !isNaN(_))
          return {
            rangeStartPX: _(_),
            rangeEndPX: _(_),
          };
      }
      return null;
    });
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        onClick: () => {
          _.ScrollToCenteredGlobalMS(_.nGlobalStartMS.valMS);
        },
        style: {
          width: _.rangeEndPX - _.rangeStartPX,
          transform: `translateX(${_.rangeStartPX}px)`,
        },
      })
    : null;
}
function _(_) {
  let { scrollSize: _, timelineWidth: _, thumbWidth: _, timelineView: _ } = _,
    { thumbPositionPX: _, onMouseDown: _, bHiglightThumb: _ } = _(_, _, _, _);
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `jBCmf-dRAeA-`),
    style: {
      width: _,
      transform: `translateX(${_}px)`,
    },
    onMouseDown: _,
  });
}
function _(_, _, _, _) {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    _ = _(() => {
      let _ = _.BInitialized(),
        _ = _.GetVisualWindowStartPX();
      return _ ? _((_ * _.scrollBarWidth) / _, 0, _.scrollBarWidth - _) : 0;
    }),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(void 0);
  (0, _.useEffect)(() => {
    if (_.GetAutoScrollPaused())
      return (
        _(!0),
        (_.current = window.setTimeout(() => {
          _(!1);
        }, 500)),
        () => window.clearTimeout(_.current)
      );
  }, [_, _]);
  let _ = (0, _.useCallback)(
      (_) => {
        (_(_), _(!0));
        let _ = _.nativeEvent.offsetX,
          _ = _.GetTimelineParentCtnRef() ?? _(_),
          _,
          _,
          _,
          _ = (_) => {
            _(_.clientX - _.scrollBarXOffset - _);
          };
        (_.addEventListener(`mousemove`, _),
          (_ = () => _.removeEventListener(`mousemove`, _)));
        let _ = () => {
          (_(!1), _(), _(), _());
        };
        (_.addEventListener(`mouseup`, _),
          _.addEventListener(`mouseleave`, _),
          (_ = () => _.removeEventListener(`mouseup`, _)),
          (_ = () => _.removeEventListener(`mouseleave`, _)));
      },
      [_, _.scrollBarXOffset, _],
    ),
    _ = (0, _.useMemo)(
      () => (_ ? _(_, 0, _.scrollBarWidth - _) : _),
      [_, _, _, _.scrollBarWidth, _],
    );
  return (
    (0, _.useEffect)(() => {
      if (_) {
        let _ = (_ * _) / _.scrollBarWidth;
        _.ScrollToOffset(_);
      }
    }, [_, _.scrollBarWidth, _, _, _]),
    {
      thumbPositionPX: _,
      onMouseDown: _,
      bHiglightThumb: _,
    }
  );
}
function _(_, _) {
  let _ = _(
    () =>
      !_.GetAutoScrollPaused() &&
      _.GetGameRecordingVideo().BVideoElementPlaying(),
  );
  (0, _.useEffect)(() => {
    if (!_) return () => {};
    let _ = !1,
      _ = _.GetGlobalMSPlaytime(),
      _ = Date.now(),
      _ = (_) => {
        let _ = Date.now(),
          _ = _ - _;
        _.ScrollToCenteredGlobalMS(_.valMS + _);
        let _ = _.GetGlobalMSPlaytime();
        (_.valMS !== _.valMS && ((_ = _), (_ = _)),
          _ || requestAnimationFrame(_));
      };
    return (requestAnimationFrame(_), () => (_ = !0));
  }, [_, _, _]);
}
_();
var _ = class {
  m_tours = {};
  m_strActiveTour = ``;
  m_storage = void 0;
  m_bReady = !1;
  constructor() {
    _(this);
  }
  async Init(_) {
    if (this.m_storage) return;
    this.m_storage = _;
    let _ = await _(_);
    (Object.keys(_ || {}).forEach((_) => {
      let _ = !!_[_];
      this.m_tours[_] = {
        ...(this.m_tours[_] || {
          stops: {},
        }),
        bSeen: _,
      };
    }),
      (this.m_bReady = !0));
  }
  UpdateStop(_, _, _, _) {
    (this.m_tours[_] ||
      (this.m_tours[_] = {
        bSeen: !1,
        stops: {},
      }),
      (this.m_tours[_].stops[_] = {
        options: _,
        elem: _,
      }));
  }
  BHasSeenTour(_) {
    return !this.m_bReady || (this.m_tours[_] && this.m_tours[_].bSeen);
  }
  GetTrackedStops(_) {
    return this.m_tours[_]?.stops || {};
  }
  ActivateTour(_) {
    (this.m_strActiveTour &&
      this.m_strActiveTour !== _ &&
      this.DismissTour(this.m_strActiveTour),
      (this.m_strActiveTour = _));
  }
  DismissTour(_) {
    this.m_tours[_] &&
      (this.MarkTourSeen(_),
      (this.m_tours[_].bSeen = !0),
      this.m_strActiveTour === _ && (this.m_strActiveTour = ``));
  }
  MarkTourSeen(_) {
    return _(this.m_storage, _, Date.now());
  }
  MarkTourUnseen(_) {
    return _(this.m_storage, _, void 0);
  }
};
(_([_], _.prototype, `m_tours`, void 0),
  _([_], _.prototype, `m_strActiveTour`, void 0),
  _([_], _.prototype, `m_bReady`, void 0),
  _([_.bound], _.prototype, `UpdateStop`, null),
  _([_], _.prototype, `ActivateTour`, null),
  _([_], _.prototype, `DismissTour`, null));
var _ = `tour_history`;
async function _(_) {
  let _ = await _.GetObject(_);
  return !_ || typeof _ != `object` ? {} : _;
}
async function _(_, _, _) {
  let _ = await _(_);
  return _.StoreObject(_, {
    ..._,
    [_]: _,
  });
}
var _ = new _();
function _() {
  let _ = _();
  return (
    (0, _.useEffect)(() => {
      _.Init(_);
    }, [_]),
    _
  );
}
function _(_) {
  let _ = _(),
    { bShowTour: _, stopElems: _ } = _(() => ({
      bShowTour: !_.BHasSeenTour(_),
      stopElems: _.GetTrackedStops(_),
    }));
  return {
    bShowTour: _,
    stopElems: _,
    onInteraction: (0, _.useCallback)(() => _.MarkTourSeen(_), [_, _]),
    onDismiss: (0, _.useCallback)(() => _.DismissTour(_), [_, _]),
    onActivate: (0, _.useCallback)(() => _.ActivateTour(_), [_, _]),
    updateStop: _.UpdateStop,
  };
}
function _(_) {
  let { name: _, tour: _, options: _, children: _ } = _,
    { updateStop: _ } = _(_),
    _ = (0, _.useCallback)((_) => _(_, _, _, _), [_, _, _]),
    _ = _.Children.only(_),
    _ = _(_, _.props.ref);
  return (0, _.cloneElement)(_.Children.only(_), {
    ref: _,
  });
}
var _ = `ntKPAM1NZ9k-`,
  _ = `JXv-qDT9fmY-`,
  _ = `Rg3Qyz2aIKM-`;
function _(_) {
  let _ = _(),
    _ = _(() => _.GetVisibleTimelines());
  return (0, _.jsx)(_.Fragment, {
    children: _.flatMap((_) =>
      _.phaseOffsets.map((_, _) =>
        (0, _.createElement)(_, {
          ..._,
          timeline: _,
          key: `${_.timelineID}_${_}`,
        }),
      ),
    ),
  });
}
function _(_) {
  let { timelineOffsetMS: _, nDurationMS: _, phase: _, timeline: _ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
  });
}
function _(_) {
  let {
      children: _,
      timeline: _,
      timelineOffsetMS: _,
      nDurationMS: _,
      phase: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _()?.valPX || -1,
    _ = _(),
    [_] = _(),
    {
      pxStart: _,
      pxWidth: _,
      bHighlight: _,
    } = _(() => {
      let _ = _.GetPhaseToHighlight();
      return {
        pxStart: _.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS + _),
        pxWidth: _.ConvertDurationMSToDeltaPX(_),
        bHighlight:
          _ && _[0] === _.timelineID && _[1] === _.background_timeline_offset,
      };
    }),
    _ = (_ || _) && _ >= _ && _ <= _ + _,
    [_, _] = _(),
    _ = () => {
      let _ = _.GetLoader(),
        _ = _.GetTimelineData(_.timelineID),
        _ = _.GetTimelineMetadata(_.timelineID),
        _ = _.m_rgPhases.find((_) => parseInt(_.time) === _);
      _ &&
        _({
          entry: _,
          timeline: _,
        });
    },
    _ = () => _(void 0);
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `_7iKrpiRqfb4-`, _ && `-VGOLVELQNE-`),
    style: {
      transform: `translateX( ${_}px )`,
      width: `${_}px`,
    },
    onMouseOver: _,
    onMouseLeave: _,
    onFocus: _,
    onBlur: _,
    children: _,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
var _ = `YTX0fQkY6BM-`;
function _(_) {
  let _ = _(),
    _ = _(() => _.GetVisibleTimelines());
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          timeline: _,
        },
        _.timelineID,
      ),
    ),
  });
}
function _(_) {
  let { timeline: _ } = _,
    _ = _(),
    _ = _(() => _.GetVisibleTimelineHighlights(_.timelineID) || []),
    _ = _(() => _.GetTimelineOffsetMS(_.timelineID)),
    _ = _.globalOffsetMS - _;
  return (0, _.jsx)(_.Fragment, {
    children: _.filter((_) => _(_) === `range_highlight`).map((_) =>
      (0, _.jsx)(
        _,
        {
          entry: _,
          timeline: _,
          timelineView: _,
          timelineOffset: _,
        },
        _._,
      ),
    ),
  });
}
function _(_) {
  let { timelineView: _, entry: _, timelineOffset: _ } = _,
    _ = _ + parseInt(_.time),
    { pxStart: _, pxWidth: _ } = _(() => ({
      pxStart: _.ConvertGlobalMSToGlobalPXOffset(_),
      pxWidth: _.ConvertDurationMSToDeltaPX(parseInt(_.duration)),
    })),
    _ = {
      width: `${_}px`,
      transform: `translateX( ${_}px )`,
    };
  return (0, _.jsx)(`svg`, {
    className: _,
    style: _,
    children: (0, _.jsx)(`line`, {
      _: `0`,
      _: _,
      _: `0`,
      _: `0`,
      fill: `none`,
      stroke: `#ffc82c`,
      "stroke-width": `3`,
      "stroke-dasharray": `3 6`,
      "stroke-dashoffset": `0`,
      "stroke-linecap": `square`,
    }),
  });
}
var _ = 0.08;
function _(_) {
  let {
      loader: _,
      className: _,
      clipSummaries: _,
      refTimelineParentCtn: _,
      disableZoom: _,
    } = _,
    _ = _(() => _.BInitialized()),
    _ = _();
  if (!_)
    return (0, _.jsx)(`div`, {
      className: _,
    });
  let _ = _(_, _.GetGamepadMode() && `xP7qeNW99Qo-`, _);
  return (0, _.jsx)(_, {
    loader: _,
    clipSummaries: _,
    playbackCoordinator: _,
    refTimelineParentCtn: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      dir: `ltr`,
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          tour: `recording_timeline`,
          name: `timeline`,
          options: {
            position: `left`,
            offset: 20,
          },
          children: (0, _.jsx)(_, {
            className: _,
            disableZoom: _,
            children: (0, _.jsx)(_, {}),
          }),
        }),
      ],
    }),
  });
}
var _ = (0, _.memo)(function (_) {
  let _ = _();
  return _(() => _.BInitialized()) ? (0, _.jsx)(_, {}) : null;
});
function _() {
  let _ = _(),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetVisualWindowStartPX()),
    _ = _(() => _.GetTimelineMarginWidth());
  return (0, _.jsxs)(`div`, {
    className: _,
    style: {
      minWidth: _ || 0,
      marginRight: _,
      marginLeft: _,
      transform: `translateX(${-_}px)`,
    },
    children: [
      (0, _.jsx)(_, {
        _: `recordings`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        _: `clips`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        _: `game_modes`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        _: `date_decorators`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        _: `ticks`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            _: `highlights`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `range_selection`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `seek_scrub`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `play_head`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `phases`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `range_highlights`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { children: _, _: _, className: _ } = _;
  return (0, _.jsx)(`div`, {
    _: _,
    className: _(_, _),
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  });
}
function _(_) {
  let _ = _().GetRenderGlyph();
  return _ ? _(_.TRIGGER_LEFT, !1, !1, _) : null;
}
function _(_) {
  let _ = _().GetRenderGlyph();
  return _ ? _(_.TRIGGER_RIGHT, !1, !1, _) : null;
}
var _ = `KQ-hi7DkQBE-`,
  _ = `_52aYqduz6h4-`,
  _ = `coOj1PrCK88-`,
  _ = `LIhvCT2g-YI-`,
  _ = `bExNzJrLl-M-`,
  _ = `dyICc0VY3A4-`,
  _ = `_6wAbDaUvkxg-`,
  _ = `2000ms`,
  _ = `LaqVy9--mt8-`,
  _ = `lLAtYwwfC6c-`,
  _ = `_4lkIuOprDls-`,
  _ = `fZFkKWffS5M-`,
  _ = `gtWJUpDp-gM-`,
  _ = parseInt(_);
function _() {
  let _ = _(),
    _ = _(() => _.GetDisplayHighlightEntry()),
    [_, _] = (0, _.useState)(null),
    _ = _.useRef(0);
  return (
    (0, _.useEffect)(() => {
      if (!_?.entry || _(_.entry) || _(_.entry)) _(null);
      else
        return (
          _(_.entry),
          (_.current = window.setTimeout(
            () => {
              _.SetDisplayHighlightEntry(null);
            },
            _.duration ? _.duration : _,
          )),
          () => window.clearTimeout(_.current)
        );
    }, [_, _]),
    _
      ? (0, _.jsx)(_, {
          entry: _,
        })
      : null
  );
}
function _(_) {
  let { entry: _ } = _,
    _ = _(),
    _ = _(() => _.GetGameID()),
    _ = _.GetGameRecordingVideo(),
    _ = _(() => _.GetRecordingID()),
    _ = _(() => _.IsInitialized()),
    _ = _.GetVideoHeight(),
    _ = _.GetVideoWidth(),
    _ =
      _ && _ && _ > 0 && _ > 0
        ? {
            height: _,
            width: _,
          }
        : {},
    _;
  return (
    _(_)
      ? (_ = (0, _.jsx)(_, {
          entry: _,
          strGameID: _,
        }))
      : _(_)
        ? (_ = (0, _.jsx)(
            _,
            {
              entry: _,
              strMarkerIcon: _.icon,
              title: _.title ? _.title : _(`#Marker_UserMarker_Title`),
              description: _.description || ``,
            },
            _._,
          ))
        : _(_)
          ? (_ = (0, _.jsx)(
              _,
              {
                entry: _,
                strMarkerIcon: _.icon,
                title: _(`#MediaManager_ItemType_Screenshot`),
                description: ``,
              },
              _._,
            ))
          : _(_) &&
            (_ = (0, _.jsx)(
              _,
              {
                entry: _,
                strMarkerIcon: _.icon,
                title: _.title || ``,
                description: _.description || ``,
              },
              _._,
            )),
    (0, _.jsx)(`div`, {
      className: _,
      style: _,
      children: _,
    })
  );
}
function _(_) {
  let { entry: _, strGameID: _ } = _,
    _ = _(new _(_).GetAppID(), _.achievement_name);
  return _
    ? (0, _.jsx)(
        _,
        {
          entry: _,
          strMarkerIcon: `steam_achievement`,
          title: _.name ?? ``,
          description: _.description ?? ``,
        },
        _._,
      )
    : null;
}
function _(_) {
  let { entry: _, strMarkerIcon: _, title: _, description: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            entry: _,
            strMarkerIcon: _,
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `_2T-PgLx6Dr4-`,
                children: _,
              }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `bBDKWYyxu48-`,
                children: _,
              }),
          ],
        }),
      ],
    }),
  });
}
var _ = `2000ms`,
  _ = `OvcOkaeZMu8-`,
  _ = `_-5QSadyUEvk-`,
  _ = parseInt(_);
function _() {
  let _ = _(),
    _ = _.GetGameRecordingVideo(),
    _ = _(() => _.GetRecordingID()),
    _ = _(() => _.IsInitialized()),
    _ = _.GetVideoHeight(),
    _ = _.GetVideoWidth(),
    _ =
      _ && _ && _ > 0 && _ > 0
        ? {
            height: _,
            width: _,
          }
        : {},
    _ = _.useRef(0),
    _ = _(() => _.GetRelativeTimeForDisplay()),
    _ = _(() => _.GetGameRecordingVideo().IsInitialized()),
    _ = (0, _.useMemo)(() => {
      if (isNaN(_) || !_) return null;
      let _ = _.ConvertGlobalOffsetToTimelineRelativeOffset(_);
      if (_ && _.GetIsActiveTimeline(_.strTimelineID)) {
        let _ = _.MakeRelativeToTimelineEndIfActive(
          _.strTimelineID,
          _.nTimelineOffsetMS.valMS,
        );
        return _(_ / 1e3, !1, !0);
      }
      return null;
    }, [_, _, _]);
  return (
    (0, _.useEffect)(() => {
      if (!isNaN(_))
        return (
          (_.current = window.setTimeout(() => {
            _.ClearRelativeTimeDisplay();
          }, _)),
          () => window.clearTimeout(_.current)
        );
    }, [_, _]),
    isNaN(_)
      ? null
      : (0, _.jsx)(`div`, {
          className: _,
          style: _,
          children: (0, _.jsx)(
            `div`,
            {
              className: _,
              children: _,
            },
            _,
          ),
        })
  );
}
function _(_) {
  let {
      disableSound: _,
      positionAbsolute: _ = !0,
      refVideoResize: _,
      style: _,
      fullscreen: _,
    } = _,
    _ = _(),
    _ = _(_.StopPlayback, _.SetVideoElement),
    _ = _.GetGameRecordingVideo(),
    _ = _(() => _.GetRecordingID()),
    _ = _(() => _.GetPlaybackError()),
    _ = _(() => _.GetRecordingMode() === `Overlay`),
    _ = _(),
    _ = _(),
    _ = _ || !_,
    _ = _.useRef(void 0),
    _ = _(_, _),
    _ = _();
  function _() {
    _ && _.TogglePlayPause();
  }
  function _() {
    _ && _ && _.fnToggleFullscreen();
  }
  let _ = _.useCallback(
      (_) => {
        _ ||
          _(_, {
            bDisableMouseOverlay: !0,
            bForcePopup: !0,
            bAlwaysOnTop: !0,
          });
      },
      [_, _],
    ),
    _ = !_.IN_STEAMUI && !!_.autoPlay,
    _ = _(
      _,
      _ && `_3P0prb9XLTM-`,
      _ && `YECphMawhtQ-`,
      _ && `gzjiwBe8B5g-`,
      _ && `NluAI6IOvZc-`,
      _ && `_6MZt8I3nnWM-`,
    );
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _,
    onClick: _,
    onContextMenu: _,
    style: _,
    onDoubleClick: _,
    children: [
      (0, _.jsx)(`video`, {
        ref: _,
        controls: !1,
        muted: _,
        autoPlay: _,
        playsInline: _,
      }),
      (0, _.jsx)(_, {
        player: _,
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
      !_ && (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _() {
  let _ = _(),
    _ = _(() => _.GetGlobalMSPlaytime()),
    { nGlobalEndMS: _, nGlobalStartMS: _ } = _(),
    _ = _.GetGameRecordingVideo();
  return _(() => _.GetPlaybackError()) || !_ || !_ || !_
    ? !1
    : _.valMS >= _.valMS && _.valMS <= _.valMS;
}
function _() {
  let _ = _(),
    _ = _.Get().IsDebugLogEnabled(`GR`),
    _ = _(() => _.GetPlaybackStats());
  return !_ || !_
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `Average Seek MS: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nMean.toFixed(3),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `StdDev Seek MS: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nStdDev.toFixed(3),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `Slowest Seek MS: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nMax.toFixed(3),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `Fastest Seek MS: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nMin.toFixed(3),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `# Seeks: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nLength,
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `Last Val: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nLastVal.toFixed(3),
              }),
            ],
          }),
        ],
      });
}
function _() {
  let _ = _.Get().IsDebugLogEnabled(`GR`),
    _ = _();
  _(() => {
    _.GetGlobalMSPlaytime();
  });
  let _ = _();
  return !_ || !_
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `Avg Thumbnail Load MS: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nMean.toFixed(3),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `StdDev Thumbnail Load MS: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nStdDev.toFixed(3),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `Slowest Thumbnail Load MS: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nMax.toFixed(3),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `Fastest Thumbnail Load MS: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nMin.toFixed(3),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `# Loaded: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nLength,
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                children: `Last Load: `,
              }),
              (0, _.jsx)(`span`, {
                children: _.nLastVal.toFixed(3),
              }),
            ],
          }),
        ],
      });
}
function _() {
  let _ = _(),
    _ = _.GetGameRecordingVideo(),
    _ = _.GetVideoHeight(),
    _ = _(() => _.BVideoElementWaiting()),
    _ = _(() => _.IsPaused()),
    _ = _(() => _.GetPlaybackError()),
    _ = _(() => _.IsInitialized());
  return !_(() => _.GetRecordingID()) || (_ && !_) || _ || _
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        style: {
          height: _,
        },
        children: (0, _.jsx)(_, {}),
      });
}
function _(_) {
  let { player: _ } = _,
    _ = _(() => _.GetPlaybackError()),
    _ = ``;
  switch (_) {
    case _.DownloadFailed:
    case _.PlaybackError:
    case _.MediaTypeError:
      _ = `#GameRecording_PlayerError_Generic`;
  }
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: void 0,
          children: _(_),
        }),
      })
    : null;
}
function _() {
  let _ = _(),
    _ = _(() => _.GetGamepadMode()),
    { onNavigateToClip: _, onNavigateToFAQ: _ } = _(),
    _ = _(() => _.GetGlobalMSPlaytime()),
    _ = _.GetClosestPreviousRecordingForGlobalMS(_),
    _ = _.GetClosestNextRecordingForGlobalMS(_),
    _ = _(() => _.GetClipsAtGlobalMS(_)),
    _ = (0, _.useCallback)(
      (_) => {
        if (_) {
          let _ = Math.max(parseInt(_.duration_ms) - 500, 0);
          (_.SetPlaytimeFromRecordingOffset(_.recording_id, _, !0, !0),
            _.stopPropagation());
        }
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _ &&
          (_.SetPlaytimeFromRecordingOffset(_.recording_id, 0),
          _.stopPropagation());
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.length > 0 &&
          (_.ReportTrackedAction(
            `/GameRecording/Tooltip/ViewClip/PlayerNoContent`,
          ),
          _(_[0].strClipID),
          _.stopPropagation());
      },
      [_, _],
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#GameRecording_PlayerNoContent`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(
          `#GameRecording_PlayerNoContentDescription`,
          (0, _.jsx)(_, {
            href: `#`,
            onClick: _,
          }),
        ),
      }),
      !_ &&
        (0, _.jsxs)(`div`, {
          className: `pvmcYqcba9M-`,
          children: [
            (0, _.jsx)(_, {
              direction: `bottom`,
              toolTipContent: _(
                _
                  ? `#GameRecording_PlayerNoContentJumpPrevious_tooltip`
                  : `#GameRecording_PlayerNoContentJumpNoContent_tooltip`,
              ),
              children: (0, _.jsx)(_, {
                className: _(`tZ0QBApivQk-`, void 0, !_ && `anur1mdo7JE-`),
                onClick: _,
                onActivate: _,
                children: _(`#GameRecording_PlayerNoContentJumpPrevious`),
              }),
            }),
            _.length > 0 &&
              (0, _.jsx)(_, {
                direction: `bottom`,
                toolTipContent: _(
                  `#GameRecording_PlayerNoContentSeeClip_tooltip`,
                ),
                children: (0, _.jsx)(_, {
                  onClick: _,
                  onActivate: _,
                  className: _(`tZ0QBApivQk-`, void 0),
                  children: _(`#GameRecording_PlayerNoContentSeeClip`),
                }),
              }),
            (0, _.jsx)(_, {
              direction: `bottom`,
              toolTipContent: _(
                _
                  ? `#GameRecording_PlayerNoContentJumpNext_tooltip`
                  : `#GameRecording_PlayerNoContentJumpNoContent_tooltip`,
              ),
              children: (0, _.jsx)(_, {
                className: _(`tZ0QBApivQk-`, void 0, !_ && `anur1mdo7JE-`),
                onClick: _,
                onActivate: _,
                children: _(`#GameRecording_PlayerNoContentJumpNext`),
              }),
            }),
          ],
        }),
    ],
  });
}
var _ = `HFtNW3hyYhM-`,
  _ = `q1CF11Ex8dA-`,
  _ = _({
    GameRecordingClipContent: () => _,
    default: () => _,
    useTimelineLoaderForCommunityClip: () => _,
  });
function _(_) {
  let [_, _] = _.useState(!1);
  return (
    _.useEffect(() => {
      _(void 0, void 0).then(() => {
        _(!0);
      });
    }, []),
    (0, _.jsx)(_.Fragment, {
      children:
        _ &&
        (0, _.jsx)(_, {
          ..._,
        }),
    })
  );
}
function _(_) {
  let { clipID: _ } = _,
    _ = _(_);
  return _.data
    ? (0, _.jsx)(_, {
        clip: _.data,
      })
    : (0, _.jsx)(`div`, {
        style: {
          color: `white`,
        },
        children: `Loading...`,
      });
}
function _(_, _) {
  return {
    timeline_id: _.server_timeline_id,
    game_id: _.clip_id,
    date_recorded: _.date_recorded,
    duration_ms: _.duration_ms.toFixed(0),
    recordings: [],
  };
}
function _(_) {
  let _ = _();
  return _({
    queryKey: [`grclip`, _],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_clip_id(_);
      let _ = await _.GetSingleSharedClip(_, _);
      if (_.GetEResult() != 1) {
        (_(`GetSingleSharedClip failed`), _.DEBUG_LogToConsole());
        return;
      }
      let _ = _.Body().toObject().clip,
        _ = [];
      if (_.video_ids.length == 0) {
        (_(`No video ids in clip`, _), _.DEBUG_LogToConsole());
        return;
      }
      let _;
      for (let _ of _.video_ids)
        ((_ && _.timeline_id == _.server_timeline_id) ||
          ((_ = _(_, _)), _.push(_)),
          _.recordings.push({
            recording_id: _.video_manager_video_id,
            start_offset_ms: _.start_offset_ms.toFixed(0),
            duration_ms: _.duration_ms.toFixed(0),
            recording_type: 4,
            cdn_manifest_url: _.manifest_url,
          }));
      return {
        clip_id: _.clip_id,
        game_id: _.gameid,
        timelines: _,
      };
    },
  });
}
function _(_) {
  let _ = _.useMemo(() => _(_), [_]),
    _ = _.useCallback(
      (_) => {
        for (let _ of _.timelines)
          for (let _ of _.recordings)
            if (_.recording_id == _) return _.cdn_manifest_url;
      },
      [_],
    );
  return (
    _.useEffect(() => () => _ && _.release(), [_]),
    {
      loader: _.loader,
      fnGetManifest: _,
    }
  );
}
function _(_) {
  let { clip: _ } = _,
    { loader: _, fnGetManifest: _ } = _(_);
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(_, {
      loader: _,
      fnGetManifest: _,
      mode: _.CommunityClip,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              positionAbsolute: !1,
              autoPlay: !0,
            }),
          }),
          (0, _.jsx)(_, {
            loader: _,
          }),
        ],
      }),
    }),
  });
}
export {
  _ as GameRecordingClipContent,
  _ as default,
  _ as useTimelineLoaderForCommunityClip,
};
