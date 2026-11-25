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
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { _ } from "./library.js?contenthash=t9xy63v9";
var _ = _(_(), 1),
  _ = class _ extends _.Message {
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
