import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Si as t,
  _i as n,
  ar as r,
  bi as i,
  eo as a,
  gi as o,
  hi as s,
  ir as c,
  mi as l,
  vi as u,
  xi as d,
  yi as f,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { ti as ee } from "./chunk~6780060d19.js?contenthash=D23mWcHU";
import { t as p } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { t as m } from "./chunk~ede3e357a2.js?contenthash=Cc5o6zVM";
import { c as te } from "./library.js?contenthash=t9xy63v9";
import { x as h } from "./chunk~4c84692d6e.js?contenthash=CFPgoDyE";
import { h as g } from "./chunk~6a0f174a11.js?contenthash=RueWgzul";
import {
  Dn as _,
  On as v,
  Sn as y,
  wn as b,
} from "./chunk~5ad53110ba.js?contenthash=haYcbzyQ";
var x = e(a(), 1),
  S = e(t(), 1),
  C = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.representation_name || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            representation_name: { n: 2, br: n.readString, bw: d.writeString },
            horizontal_resolution: {
              n: 3,
              br: n.readUint32,
              bw: d.writeUint32,
            },
            vertical_resolution: { n: 4, br: n.readUint32, bw: d.writeUint32 },
            frame_rate: { n: 5, br: n.readDouble, bw: d.writeDouble },
            bandwidth: { n: 6, br: n.readUint32, bw: d.writeUint32 },
            audio_sample_rate: { n: 7, br: n.readUint32, bw: d.writeUint32 },
            frame_rate_string: { n: 8, br: n.readString, bw: d.writeString },
            codec: { n: 9, br: n.readString, bw: d.writeString },
            audio_channel_config: {
              n: 10,
              br: n.readUint32,
              bw: d.writeUint32,
            },
            segment_info: { n: 11, c: E, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingRepresentation`;
    }
  },
  w = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.component_name || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            component_name: { n: 1, br: n.readString, bw: d.writeString },
            contents: { n: 2, br: n.readUint32, bw: d.writeUint32 },
            segment_size: { n: 3, br: n.readUint32, bw: d.writeUint32 },
            file_type: { n: 4, br: n.readString, bw: d.writeString },
            representations: { n: 5, c: C, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingComponent`;
    }
  },
  T = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: d.writeUint64String },
            app_id: { n: 2, br: n.readUint32, bw: d.writeUint32 },
            num_segments: { n: 3, br: n.readUint32, bw: d.writeUint32 },
            length_milliseconds: { n: 4, br: n.readUint32, bw: d.writeUint32 },
            segment_duration_timescale: {
              n: 5,
              br: n.readUint32,
              bw: d.writeUint32,
            },
            segment_duration: { n: 6, br: n.readUint32, bw: d.writeUint32 },
            components: { n: 7, c: w, r: !0, q: !0 },
            start_time_ms: { n: 8, br: n.readUint32, bw: d.writeUint32 },
            start_offset_in_timeline_ms: {
              n: 9,
              br: n.readUint32,
              bw: d.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingDef`;
    }
  },
  E = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segment_number || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segment_number: { n: 1, br: n.readUint32, bw: d.writeUint32 },
            segment_size_bytes: {
              n: 2,
              br: n.readUint64String,
              bw: d.writeUint64String,
            },
            component_name: { n: 3, br: n.readString, bw: d.writeString },
            representation_name: { n: 4, br: n.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentInfo`;
    }
  },
  D = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segment_info || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segment_info: { n: 1, c: E },
            url_host: { n: 2, br: n.readString, bw: d.writeString },
            url_path: { n: 3, br: n.readString, bw: d.writeString },
            use_https: { n: 4, br: n.readBool, bw: d.writeBool },
            request_headers: { n: 5, c: O, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentUploadInfo`;
    }
  },
  O = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: n.readString, bw: d.writeString },
            value: { n: 2, br: n.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders`;
    }
  },
  k = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_manager_clip_id || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_manager_clip_id: {
              n: 1,
              br: n.readFixed64String,
              bw: d.writeFixed64String,
            },
            video_manager_video_id: {
              n: 2,
              br: n.readFixed64String,
              bw: d.writeFixed64String,
            },
            server_timeline_id: {
              n: 3,
              br: n.readFixed64String,
              bw: d.writeFixed64String,
            },
            manifest_url: { n: 4, br: n.readString, bw: d.writeString },
            duration_ms: { n: 5, br: n.readUint32, bw: d.writeUint32 },
            start_offset_ms: { n: 6, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideoManagerClipID`;
    }
  },
  A = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 1,
              br: n.readFixed64String,
              bw: d.writeFixed64String,
            },
            gameid: { n: 2, br: n.readUint64String, bw: d.writeUint64String },
            date_recorded: { n: 4, br: n.readUint32, bw: d.writeUint32 },
            total_file_size_bytes: {
              n: 7,
              br: n.readUint64String,
              bw: d.writeUint64String,
            },
            video_ids: { n: 9, c: k, r: !0, q: !0 },
            owner_steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: d.writeFixed64String,
            },
            upload_complete: { n: 11, br: n.readBool, bw: d.writeBool },
            duration_ms: { n: 12, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingClip`;
    }
  },
  j = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip: { n: 2, c: A },
            video_def: { n: 3, c: T, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CreateShareClip_Request`;
    }
  },
  M = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { clip: { n: 1, c: A } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CreateShareClip_Response`;
    }
  },
  N = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 2,
              br: n.readFixed64String,
              bw: d.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteSharedClip_Request`;
    }
  },
  P = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), S.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteSharedClip_Response`;
    }
  },
  F = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 2,
              br: n.readFixed64String,
              bw: d.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetSingleSharedClip_Request`;
    }
  },
  I = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { clip: { n: 1, c: A } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetSingleSharedClip_Response`;
    }
  },
  L = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: n.readUint64String,
              bw: d.writeUint64String,
            },
            component_name: { n: 2, br: n.readString, bw: d.writeString },
            representation_name: { n: 3, br: n.readString, bw: d.writeString },
            segments_to_store: { n: 4, c: E, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_BeginGameRecordingSegmentsUpload_Request`;
    }
  },
  ne = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segments_needed || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segments_needed: { n: 1, c: D, r: !0, q: !0 },
            call_again: { n: 2, br: n.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_BeginGameRecordingSegmentsUpload_Response`;
    }
  },
  R = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: n.readUint64String,
              bw: d.writeUint64String,
            },
            component_name: { n: 2, br: n.readString, bw: d.writeString },
            representation_name: { n: 3, br: n.readString, bw: d.writeString },
            first_segment_number: { n: 4, br: n.readUint32, bw: d.writeUint32 },
            num_segments: { n: 5, br: n.readUint32, bw: d.writeUint32 },
            upload_result: { n: 6, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_CommitGameRecordingSegmentsUpload_Request`;
    }
  },
  z = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), S.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_CommitGameRecordingSegmentsUpload_Response`;
    }
  },
  B = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || l(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: n.readUint64String,
              bw: d.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request`;
    }
  },
  V = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segments_needed || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { segments_needed: { n: 1, c: D, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response`;
    }
  },
  H = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || l(e.M()),
        S.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: n.readUint64String,
              bw: d.writeUint64String,
            },
            segments_uploaded: { n: 2, c: E, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingCommitSegmentUploads_Request`;
    }
  },
  U = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), S.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingCommitSegmentUploads_Response`;
    }
  },
  W;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`GameRecordingClip.CreateShareClip#1`, r(j, t, n), M, {
      ePrivilege: 1,
    });
  }
  e.CreateShareClip = t;
  function n(e, t, n) {
    return e.SendMsg(`GameRecordingClip.DeleteSharedClip#1`, r(N, t, n), P, {
      ePrivilege: 1,
    });
  }
  e.DeleteSharedClip = n;
  function i(e, t, n) {
    return e.SendMsg(`GameRecordingClip.GetSingleSharedClip#1`, r(F, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetSingleSharedClip = i;
})((W ||= {}));
var G;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `VideoClip.BeginGameRecordingSegmentsUpload#1`,
      r(L, t, n),
      ne,
      { ePrivilege: 1 },
    );
  }
  e.BeginGameRecordingSegmentsUpload = t;
  function n(e, t, n) {
    return e.SendMsg(
      `VideoClip.CommitGameRecordingSegmentsUpload#1`,
      r(R, t, n),
      z,
      { ePrivilege: 1 },
    );
  }
  e.CommitGameRecordingSegmentsUpload = n;
  function i(e, t, n) {
    return e.SendMsg(
      `VideoClip.GetNextBatchOfSegmentsToUpload#1`,
      r(B, t, n),
      V,
      { ePrivilege: 1 },
    );
  }
  e.GetNextBatchOfSegmentsToUpload = i;
  function a(e, t, n) {
    return e.SendMsg(`VideoClip.CommitSegmentUploads#1`, r(H, t, n), U, {
      ePrivilege: 1,
    });
  }
  e.CommitSegmentUploads = a;
})((G ||= {}));
var K = `N0YgUOFrVbA-`,
  q = `_3Eoh-g18Nso-`,
  J = `_4yH-1J11WBI-`,
  Y = `UtiBqyUvEI4-`,
  X = `_9jWTglZ-prg-`,
  Z = `miEfWFJ-lNg-`,
  Q = p();
function re(e) {
  let { previewURL: t } = e,
    [n, r] = x.useState(!1);
  return n
    ? (0, Q.jsx)(ie, { ...e })
    : (0, Q.jsxs)(`div`, {
        className: J,
        onClick: () => {
          r(!0);
        },
        children: [
          (0, Q.jsx)(`img`, { className: Y, src: t }),
          (0, Q.jsx)(`div`, {
            className: X,
            children: (0, Q.jsx)(ee, { className: Z }),
          }),
        ],
      });
}
function ie(e) {
  let { clipID: t } = e,
    n = oe(t);
  return n.data
    ? (0, Q.jsx)(se, { clip: n.data, mode: _.ChatClip })
    : (0, Q.jsx)(`div`, { style: { color: `white` }, children: `Loading...` });
}
function ae(e, t) {
  return {
    timeline_id: t.server_timeline_id,
    game_id: e.clip_id,
    date_recorded: e.date_recorded,
    duration_ms: e.duration_ms.toFixed(0),
    recordings: [],
  };
}
function oe(e) {
  let t = te();
  return m({
    queryKey: [`grclip`, e],
    queryFn: async () => {
      let n = c.Init(F);
      n.Body().set_clip_id(e);
      let r = await W.GetSingleSharedClip(t, n);
      if (r.GetEResult() != 1)
        throw (
          h(`GetSingleSharedClip failed`),
          r.DEBUG_LogToConsole(),
          Error(`Failed to load clip with result: ${r.GetEResult()}`)
        );
      let i = r.Body().toObject().clip,
        a = [];
      if (i.video_ids.length == 0)
        throw (
          h(`No video ids in clip`, e),
          r.DEBUG_LogToConsole(),
          Error(`No video ids in clip`)
        );
      let o;
      for (let e of i.video_ids)
        ((o && o.timeline_id == e.server_timeline_id) ||
          ((o = ae(i, e)), a.push(o)),
          o.recordings.push({
            recording_id: e.video_manager_video_id,
            start_offset_ms: e.start_offset_ms.toFixed(0),
            duration_ms: e.duration_ms.toFixed(0),
            recording_type: 4,
            cdn_manifest_url: e.manifest_url,
          }));
      return { clip_id: i.clip_id, game_id: i.gameid, timelines: a };
    },
  });
}
function $(e) {
  let t = x.useMemo(() => g(e), [e]),
    n = x.useCallback(
      (t) => {
        for (let n of e.timelines)
          for (let e of n.recordings)
            if (e.recording_id == t) return e.cdn_manifest_url;
      },
      [e],
    );
  return (
    x.useEffect(() => () => t && t.release(), [t]),
    { loader: t.loader, fnGetManifest: n }
  );
}
function se(e) {
  let { clip: t, mode: n } = e,
    { loader: r, fnGetManifest: i } = $(t);
  return (0, Q.jsx)(Q.Fragment, {
    children: (0, Q.jsx)(v, {
      loader: r,
      fnGetManifest: i,
      mode: n,
      children: (0, Q.jsxs)(`div`, {
        className: K,
        children: [
          (0, Q.jsx)(`div`, {
            className: q,
            children: (0, Q.jsx)(y, {
              positionAbsolute: !1,
              autoPlay: n != _.ChatClip,
            }),
          }),
          (0, Q.jsx)(b, { loader: r }),
        ],
      }),
    }),
  });
}
export { re as default, $ as useTimelineLoaderForCommunityClip };
