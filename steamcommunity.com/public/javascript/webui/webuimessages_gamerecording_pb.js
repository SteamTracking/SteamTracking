/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e } from "./chunk~f025431ab0.js";
import {
  $n as t,
  Jt as n,
  Qn as r,
  Xn as i,
  Yn as a,
  Zn as o,
  er as s,
  nr as c,
  rr as ee,
  tr as l,
} from "./chunk~d3515eca4e.js";
import { kc as u } from "./chunk~e464778a03.js";
var d = e(ee(), 1),
  te = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: r.readString, bw: c.writeString },
            game_id: { n: 2, br: r.readUint64String, bw: c.writeUint64String },
            date_recorded: { n: 3, br: r.readUint32, bw: c.writeUint32 },
            duration_ms: {
              n: 4,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            recordings: { n: 5, c: ne, r: !0, q: !0 },
            phases: { n: 6, c: re, r: !0, q: !0 },
            significant_events: { n: 7, c: f, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata`;
    }
  },
  ne = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: r.readString, bw: c.writeString },
            start_offset_ms: {
              n: 2,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            duration_ms: {
              n: 3,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            recording_type: { n: 4, br: r.readEnum, bw: c.writeEnum },
            delete_on_cleanup: { n: 5, br: r.readBool, bw: c.writeBool },
            video_manager_clip_id: {
              n: 6,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            video_manager_video_id: {
              n: 7,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            cdn_manifest_url: { n: 8, br: r.readString, bw: c.writeString },
            file_size: {
              n: 9,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            recording_zero_timeline_offset_ms: {
              n: 10,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata_Recording`;
    }
  },
  f = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            rt_created: { n: 2, br: r.readUint32, bw: c.writeUint32 },
            possible_clip: { n: 3, br: r.readInt32, bw: c.writeInt32 },
            timeline_id: { n: 4, br: r.readString, bw: c.writeString },
            entry_id: { n: 5, br: r.readUint64String, bw: c.writeUint64String },
            timeline_offset_ms: {
              n: 6,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            marker_icon: { n: 8, br: r.readString, bw: c.writeString },
            marker_title: { n: 9, br: r.readString, bw: c.writeString },
            user_marker: { n: 10, br: r.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineEvent`;
    }
  },
  re = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phase_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [6, 7, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phase_id: { n: 4, br: r.readString, bw: c.writeString },
            duration_ms: {
              n: 5,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            tags: { n: 6, c: ie, r: !0, q: !0 },
            contained_tags: { n: 7, c: ie, r: !0, q: !0 },
            background_timeline_offset: {
              n: 8,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            attributes: { n: 9, c: m, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase`;
    }
  },
  ie = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: r.readString, bw: c.writeString },
            group: { n: 2, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase_Tag`;
    }
  },
  p = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: r.readString, bw: c.writeString },
            group: { n: 2, br: r.readString, bw: c.writeString },
            icon: { n: 3, br: r.readString, bw: c.writeString },
            priority: { n: 4, br: r.readUint32, bw: c.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineTag`;
    }
  },
  m = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: r.readString, bw: c.writeString },
            value: { n: 2, br: r.readString, bw: c.writeString },
            priority: { n: 3, br: r.readUint32, bw: c.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPhaseAttribute`;
    }
  },
  ae = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Request`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: oe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response`;
    }
  },
  oe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            most_recent_start_time: {
              n: 2,
              br: r.readUint32,
              bw: c.writeUint32,
            },
            recording_type: { n: 3, br: r.readEnum, bw: c.writeEnum },
            video_duration_seconds: {
              n: 4,
              br: r.readDouble,
              bw: c.writeDouble,
            },
            timeline_duration_seconds: {
              n: 5,
              br: r.readDouble,
              bw: c.writeDouble,
            },
            is_active: { n: 6, br: r.readBool, bw: c.writeBool },
            file_size: {
              n: 7,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response_App`;
    }
  },
  g = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Request`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timelines || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { timelines: { n: 1, c: te, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Response`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: r.readString, bw: c.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Request`;
    }
  },
  y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            timelines: { n: 2, c: te, r: !0, q: !0 },
            first_timeline_start_offset_ms: {
              n: 3,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Response`;
    }
  },
  b = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.page || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            page: { n: 1, br: r.readUint32, bw: c.writeUint32 },
            count: { n: 2, br: r.readUint32, bw: c.writeUint32 },
            filter_gameid: {
              n: 10,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            filter_search_string: {
              n: 11,
              br: r.readString,
              bw: c.writeString,
            },
            filter_tags: { n: 12, c: se, r: !0, q: !0 },
            filter_phase_id: { n: 13, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request`;
    }
  },
  se = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: r.readString, bw: c.writeString },
            name: { n: 2, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request_Tag`;
    }
  },
  x = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phases || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phases: { n: 1, c: ce, r: !0, q: !0 },
            total_count: { n: 2, br: r.readUint32, bw: c.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response`;
    }
  },
  ce = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [7, 8, 10, 13, 16, 17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            date_recorded: { n: 5, br: r.readUint32, bw: c.writeUint32 },
            duration_ms: {
              n: 6,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            tags: { n: 7, c: p, r: !0, q: !0 },
            contained_tags: { n: 8, c: p, r: !0, q: !0 },
            background_recording: { n: 9, c: le },
            clip_ids: {
              n: 10,
              r: !0,
              q: !0,
              br: r.readString,
              bw: c.writeRepeatedString,
            },
            type: { n: 11, br: r.readEnum, bw: c.writeEnum },
            start_ms: {
              n: 12,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            screenshots: {
              n: 13,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
            active: { n: 14, br: r.readBool, bw: c.writeBool },
            phase_id: { n: 15, br: r.readString, bw: c.writeString },
            significant_events: { n: 16, c: A, r: !0, q: !0 },
            attributes: { n: 17, c: m, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase`;
    }
  },
  le = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: r.readString, bw: c.writeString },
            offset: { n: 2, br: r.readUint64String, bw: c.writeUint64String },
            duration_ms: {
              n: 3,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase_BackgroundRecording`;
    }
  },
  S = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Request`;
    }
  },
  C = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: p, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Response`;
    }
  },
  w = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Request`;
    }
  },
  T = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.enough_space || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { enough_space: { n: 1, br: r.readBool, bw: c.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Response`;
    }
  },
  E = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Request`;
    }
  },
  D = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { size: { n: 1, br: r.readDouble, bw: c.writeDouble } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Response`;
    }
  },
  O = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: r.readEnum, bw: c.writeEnum },
            timeline_id: { n: 2, br: r.readString, bw: c.writeString },
            game_id: { n: 3, br: r.readUint64String, bw: c.writeUint64String },
            start_time: { n: 4, br: r.readUint32, bw: c.writeUint32 },
            duration_ms: {
              n: 5,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineChanged_Notification`;
    }
  },
  k = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: r.readEnum, bw: c.writeEnum },
            timeline_id: { n: 2, br: r.readString, bw: c.writeString },
            game_id: { n: 4, br: r.readUint64String, bw: c.writeUint64String },
            session_id: { n: 5, br: r.readString, bw: c.writeString },
            start_offset: {
              n: 6,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            recording_type: { n: 8, br: r.readEnum, bw: c.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_RecordingSessionChanged_Notification`;
    }
  },
  A = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [17, 19], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: r.readString, bw: c.writeString },
            entry_id: { n: 2, br: r.readUint64String, bw: c.writeUint64String },
            time: { n: 3, br: r.readUint64String, bw: c.writeUint64String },
            type: { n: 4, br: r.readEnum, bw: c.writeEnum },
            game_mode: { n: 5, br: r.readInt32, bw: c.writeInt32 },
            range_title: { n: 7, br: r.readString, bw: c.writeString },
            range_duration: {
              n: 8,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            range_possible_clip: { n: 9, br: r.readInt32, bw: c.writeInt32 },
            timestamp_title: { n: 10, br: r.readString, bw: c.writeString },
            marker_icon: { n: 11, br: r.readString, bw: c.writeString },
            marker_description: { n: 13, br: r.readString, bw: c.writeString },
            marker_priority: { n: 14, br: r.readInt32, bw: c.writeInt32 },
            screenshot_handle: { n: 15, br: r.readUint32, bw: c.writeUint32 },
            achievement_name: { n: 16, br: r.readString, bw: c.writeString },
            tag: { n: 17, c: p, r: !0, q: !0 },
            phase_id: { n: 18, br: r.readString, bw: c.writeString },
            attributes: { n: 19, c: m, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineEntry`;
    }
  },
  j = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry: { n: 1, c: A },
            game_id: {
              n: 2,
              br: r.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryChanged_Notification`;
    }
  },
  M = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            timeline_id: { n: 2, br: r.readString, bw: c.writeString },
            entry_id: { n: 3, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryRemoved_Notification`;
    }
  },
  N = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_LowDiskSpace_Notification`;
    }
  },
  P = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PostGameHighlightsChanged_Notification`;
    }
  },
  F = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            phase_id: { n: 2, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToGamePhase_Notification`;
    }
  },
  I = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            entry_id: { n: 2, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToTimelineEvent_Notification`;
    }
  },
  L = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PhaseListChanged_Notification`;
    }
  },
  R = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: r.readString, bw: c.writeString },
            game_id: { n: 2, br: r.readUint64String, bw: c.writeUint64String },
            duration_ms: {
              n: 3,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            date_recorded: { n: 4, br: r.readUint32, bw: c.writeUint32 },
            start_timeline_id: { n: 5, br: r.readString, bw: c.writeString },
            start_offset_ms: {
              n: 6,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            published_file_id: {
              n: 7,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            file_size: {
              n: 8,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            name: { n: 9, br: r.readString, bw: c.writeString },
            date_clipped: { n: 10, br: r.readUint32, bw: c.writeUint32 },
            temporary: { n: 11, br: r.readBool, bw: c.writeBool },
            original_device: { n: 12, br: r.readString, bw: c.writeString },
            original_gaming_device_type: {
              n: 13,
              br: r.readUint32,
              bw: c.writeUint32,
            },
            date_downloaded: { n: 14, br: r.readUint32, bw: c.writeUint32 },
            thumbnail_url: { n: 15, br: r.readString, bw: c.writeString },
            thumbnail_width: { n: 16, br: r.readUint32, bw: c.writeUint32 },
            thumbnail_height: { n: 17, br: r.readUint32, bw: c.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipSummary`;
    }
  },
  z = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            start: { n: 2, c: B },
            end: { n: 3, c: B },
            name: { n: 4, br: r.readString, bw: c.writeString },
            src_clip_id: { n: 5, br: r.readString, bw: c.writeString },
            temporary: { n: 6, br: r.readBool, bw: c.writeBool },
            force_thumbnail: { n: 7, br: r.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request`;
    }
  },
  B = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: r.readString, bw: c.writeString },
            offset_ms: {
              n: 2,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request_Position`;
    }
  },
  V = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: R } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Response`;
    }
  },
  H = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: r.readString, bw: c.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Request`;
    }
  },
  U = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Response`;
    }
  },
  W = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bitrate_kbps || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bitrate_kbps: { n: 1, br: r.readInt32, bw: c.writeInt32 },
            width: { n: 2, br: r.readInt32, bw: c.writeInt32 },
            height: { n: 3, br: r.readInt32, bw: c.writeInt32 },
            frames_per_second: { n: 4, br: r.readInt32, bw: c.writeInt32 },
            codec: { n: 5, br: r.readEnum, bw: c.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Settings`;
    }
  },
  G = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: r.readString, bw: c.writeString },
            export_mp4_path: { n: 2, br: r.readString, bw: c.writeString },
            settings: { n: 3, c: W },
            use_unique_filename: { n: 4, br: r.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Request`;
    }
  },
  K = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { result: { n: 1, br: r.readInt32, bw: c.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Response`;
    }
  },
  q = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: r.readString, bw: c.writeString },
            settings: { n: 2, c: W },
            run_policy_checks: { n: 3, br: r.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Request`;
    }
  },
  J = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.estimated_size || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            estimated_size: {
              n: 1,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            settings: { n: 2, c: W },
            result: { n: 3, br: r.readInt32, bw: c.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Response`;
    }
  },
  Y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: {
              n: 1,
              br: r.readFixed64String,
              bw: c.writeFixed64String,
            },
            timeline_id: { n: 2, br: r.readString, bw: c.writeString },
            timeline_offset_ms: {
              n: 3,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
            source_clip_id: { n: 4, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Request`;
    }
  },
  X = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshot_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            screenshot_id: {
              n: 1,
              br: r.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Response`;
    }
  },
  Z = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: r.readString, bw: c.writeString },
            title: { n: 2, br: r.readString, bw: c.writeString },
            desc: { n: 3, br: r.readString, bw: c.writeString },
            visibility: { n: 4, br: r.readInt32, bw: c.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Request`;
    }
  },
  ue = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: R } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Response`;
    }
  },
  de = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: r.readString, bw: c.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Request`;
    }
  },
  fe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.zip_path || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { zip_path: { n: 1, br: r.readString, bw: c.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Response`;
    }
  },
  pe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            created_after: { n: 2, br: r.readUint32, bw: c.writeUint32 },
            include_temporary: { n: 3, br: r.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Request`;
    }
  },
  me = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip: { n: 1, c: R, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Response`;
    }
  },
  he = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            created_after: { n: 2, br: r.readUint32, bw: c.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Request`;
    }
  },
  ge = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.events || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { events: { n: 1, c: f, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Response`;
    }
  },
  _e = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            entry: { n: 2, c: A },
            clip_id: { n: 3, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Request`;
    }
  },
  ve = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Response`;
    }
  },
  ye = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            entry: { n: 2, c: A },
            clip_id: { n: 3, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Request`;
    }
  },
  be = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Response`;
    }
  },
  xe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
            timeline_id: { n: 2, br: r.readString, bw: c.writeString },
            entry_id: { n: 3, br: r.readUint64String, bw: c.writeUint64String },
            clip_id: { n: 4, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Request`;
    }
  },
  Se = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Response`;
    }
  },
  Ce = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_ids || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: r.readUint64String,
              pbr: r.readPackedUint64String,
              bw: c.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Request`;
    }
  },
  we = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Response`;
    }
  },
  Te = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.folder_path || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            folder_path: { n: 1, br: r.readString, bw: c.writeString },
            type: { n: 2, br: r.readEnum, bw: c.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Request`;
    }
  },
  Ee = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            size: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Response`;
    }
  },
  De = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: r.readString, bw: c.writeString },
            clip_id: { n: 3, br: r.readString, bw: c.writeString },
            timeline_id: { n: 7, br: r.readString, bw: c.writeString },
            start_offset_us: {
              n: 4,
              r: !0,
              q: !0,
              br: r.readInt64String,
              pbr: r.readPackedInt64String,
              bw: c.writeRepeatedInt64String,
            },
            major_axis: { n: 5, d: 512, br: r.readUint32, bw: c.writeUint32 },
            time_precision: { n: 6, d: 0, br: r.readEnum, bw: c.writeEnum },
            format: { n: 8, d: 1, br: r.readEnum, bw: c.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Request`;
    }
  },
  Oe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnails || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { thumbnails: { n: 1, c: ke, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response`;
    }
  },
  ke = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_data || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_data: { n: 1, br: r.readBytes, bw: c.writeBytes },
            width: { n: 2, br: r.readUint32, bw: c.writeUint32 },
            height: { n: 3, br: r.readUint32, bw: c.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response_Thumbnail`;
    }
  },
  Ae = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Request`;
    }
  },
  je = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Response`;
    }
  },
  Me = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Request`;
    }
  },
  Ne = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: R } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Response`;
    }
  },
  Pe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Request`;
    }
  },
  Fe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_size || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            file_size: {
              n: 1,
              br: r.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Response`;
    }
  },
  Ie = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Request`;
    }
  },
  Le = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Response`;
    }
  },
  Re = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Request`;
    }
  },
  ze = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.per_process_audio_capture || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            per_process_audio_capture: {
              n: 1,
              br: r.readBool,
              bw: c.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Response`;
    }
  },
  Be = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: R } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipCreated_Notification`;
    }
  },
  Ve = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: r.readString, bw: c.writeString },
            game_id: { n: 2, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipDeleted_Notification`;
    }
  },
  He = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: r.readFloat, bw: c.writeFloat },
            clip_id: { n: 2, br: r.readString, bw: c.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportProgress_Notification`;
    }
  },
  Ue = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: r.readFixed64String, bw: c.writeFixed64String },
            enabled: { n: 2, br: r.readBool, bw: c.writeBool },
            minutes: { n: 3, br: r.readUint32, bw: c.writeUint32 },
            bitrate: { n: 4, br: r.readString, bw: c.writeString },
            infinite: { n: 5, br: r.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PerGameSettings`;
    }
  },
  We = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Request`;
    }
  },
  Ge = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || a(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: Ue, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Response`;
    }
  },
  Ke = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_settings || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { game_settings: { n: 1, c: Ue } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Request`;
    }
  },
  qe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Response`;
    }
  },
  Q = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: r.readFixed64String, bw: c.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Request`;
    }
  },
  Je = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Response`;
    }
  },
  Ye = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: r.readFloat, bw: c.writeFloat },
            clip_id: { n: 2, br: r.readString, bw: c.writeString },
            eresult: { n: 3, br: r.readInt32, bw: c.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadProgress_Notification`;
    }
  },
  Xe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: r.readUint64String, bw: c.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Request`;
    }
  },
  Ze = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Response`;
    }
  },
  Qe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Request`;
    }
  },
  $e = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_h265_enabled || a(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_h265_enabled: { n: 1, br: r.readBool, bw: c.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= t(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Response`;
    }
  },
  et = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StateChanged_Notification`;
    }
  },
  $;
(function (e) {
  e.GetAppsWithBackgroundVideoHandler = {
    name: `GameRecording.GetAppsWithBackgroundVideo#1`,
    request: ae,
    response: h,
  };
  function t(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAppsWithBackgroundVideo#1`, n(ae, e), h, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetAppsWithBackgroundVideo = t;
  function r(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAppsWithBackgroundVideo#1`, n(ae, e), h, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetAppsWithBackgroundVideo = r),
    (e.GetTimelinesForAppHandler = {
      name: `GameRecording.GetTimelinesForApp#1`,
      request: g,
      response: _,
    }));
  function i(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, n(g, e), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForApp = i;
  function a(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, n(g, e), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForApp = a),
    (e.GetTimelinesForClipHandler = {
      name: `GameRecording.GetTimelinesForClip#1`,
      request: v,
      response: y,
    }));
  function o(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, n(v, e), y, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForClip = o;
  function s(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, n(v, e), y, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForClip = s),
    (e.QueryPhasesHandler = {
      name: `GameRecording.QueryPhases#1`,
      request: b,
      response: x,
    }));
  function c(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, n(b, e), x, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.QueryPhases = c;
  function ee(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, n(b, e), x, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgQueryPhases = ee),
    (e.GetTagsHandler = {
      name: `GameRecording.GetTags#1`,
      request: S,
      response: C,
    }));
  function l(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, n(S, e), C, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTags = l;
  function d(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, n(S, e), C, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTags = d),
    (e.GetEnoughDiskSpaceHandler = {
      name: `GameRecording.GetEnoughDiskSpace#1`,
      request: w,
      response: T,
    }));
  function te(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, n(w, e), T, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetEnoughDiskSpace = te;
  function ne(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, n(w, e), T, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetEnoughDiskSpace = ne),
    (e.GetAvailableDiskSpaceHandler = {
      name: `GameRecording.GetAvailableDiskSpace#1`,
      request: E,
      response: D,
    }));
  function f(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, n(E, e), D, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetAvailableDiskSpace = f;
  function re(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, n(E, e), D, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetAvailableDiskSpace = re),
    (e.SaveClipHandler = {
      name: `GameRecording.SaveClip#1`,
      request: z,
      response: V,
    }));
  function ie(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SaveClip#1`, n(z, e), V, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SaveClip = ie;
  function p(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SaveClip#1`, n(z, e), V, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSaveClip = p),
    (e.DeleteClipHandler = {
      name: `GameRecording.DeleteClip#1`,
      request: H,
      response: U,
    }));
  function m(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeleteClip#1`, n(H, e), U, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeleteClip = m;
  function oe(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeleteClip#1`, n(H, e), U, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeleteClip = oe),
    (e.GetClipsHandler = {
      name: `GameRecording.GetClips#1`,
      request: pe,
      response: me,
    }));
  function se(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetClips#1`, n(pe, e), me, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetClips = se;
  function ce(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetClips#1`, n(pe, e), me, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetClips = ce),
    (e.UploadClipToSteamHandler = {
      name: `GameRecording.UploadClipToSteam#1`,
      request: Z,
      response: ue,
    }));
  function le(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, n(Z, e), ue, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UploadClipToSteam = le;
  function A(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, n(Z, e), ue, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUploadClipToSteam = A),
    (e.ExportClipHandler = {
      name: `GameRecording.ExportClip#1`,
      request: G,
      response: K,
    }));
  function R(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClip#1`, n(G, e), K, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClip = R;
  function B(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClip#1`, n(G, e), K, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClip = B),
    (e.ExportClipPreviewHandler = {
      name: `GameRecording.ExportClipPreview#1`,
      request: q,
      response: J,
    }));
  function W(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, n(q, e), J, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClipPreview = W;
  function ke(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, n(q, e), J, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClipPreview = ke),
    (e.TakeScreenshotHandler = {
      name: `GameRecording.TakeScreenshot#1`,
      request: Y,
      response: X,
    }));
  function Ue(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, n(Y, e), X, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.TakeScreenshot = Ue;
  function tt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, n(Y, e), X, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgTakeScreenshot = tt),
    (e.ZipClipHandler = {
      name: `GameRecording.ZipClip#1`,
      request: de,
      response: fe,
    }));
  function nt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ZipClip#1`, n(de, e), fe, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ZipClip = nt;
  function rt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ZipClip#1`, n(de, e), fe, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgZipClip = rt),
    (e.StartRecordingHandler = {
      name: `GameRecording.StartRecording#1`,
      request: Ae,
      response: je,
    }));
  function it(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StartRecording#1`, n(Ae, e), je, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StartRecording = it;
  function at(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StartRecording#1`, n(Ae, e), je, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStartRecording = at),
    (e.StopRecordingHandler = {
      name: `GameRecording.StopRecording#1`,
      request: Me,
      response: Ne,
    }));
  function ot(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StopRecording#1`, n(Me, e), Ne, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StopRecording = ot;
  function st(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StopRecording#1`, n(Me, e), Ne, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStopRecording = st),
    (e.GetBackgroundRecordingFileSizeHandler = {
      name: `GameRecording.GetBackgroundRecordingFileSize#1`,
      request: Pe,
      response: Fe,
    }));
  function ct(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            n(Pe, e),
            Fe,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetBackgroundRecordingFileSize = ct;
  function lt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            n(Pe, e),
            Fe,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetBackgroundRecordingFileSize = lt),
    (e.CleanupBackgroundRecordingsHandler = {
      name: `GameRecording.CleanupBackgroundRecordings#1`,
      request: Ie,
      response: Le,
    }));
  function ut(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            n(Ie, e),
            Le,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.CleanupBackgroundRecordings = ut;
  function dt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            n(Ie, e),
            Le,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgCleanupBackgroundRecordings = dt),
    (e.GetAndTrimPostGameHighlightsHandler = {
      name: `GameRecording.GetAndTrimPostGameHighlights#1`,
      request: he,
      response: ge,
    }));
  function ft(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            n(he, e),
            ge,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetAndTrimPostGameHighlights = ft;
  function pt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            n(he, e),
            ge,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAndTrimPostGameHighlights = pt),
    (e.GetThumbnailsHandler = {
      name: `GameRecording.GetThumbnails#1`,
      request: De,
      response: Oe,
    }));
  function mt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetThumbnails#1`, n(De, e), Oe, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetThumbnails = mt;
  function ht(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetThumbnails#1`, n(De, e), Oe, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetThumbnails = ht),
    (e.GetPlatformCapabilitiesHandler = {
      name: `GameRecording.GetPlatformCapabilities#1`,
      request: Re,
      response: ze,
    }));
  function gt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, n(Re, e), ze, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPlatformCapabilities = gt;
  function _t(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, n(Re, e), ze, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPlatformCapabilities = _t),
    (e.NotifyTimelineChangedHandler = {
      name: `GameRecording.NotifyTimelineChanged#1`,
      request: O,
    }));
  function vt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            $.NotifyTimelineChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineChanged = vt;
  function yt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyTimelineChanged#1`, n(O, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyTimelineChanged = yt;
  function bt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyTimelineChanged#1`, n(O, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyTimelineChanged = bt),
    (e.NotifyRecordingSessionChangedHandler = {
      name: `GameRecording.NotifyRecordingSessionChanged#1`,
      request: k,
    }));
  function xt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            $.NotifyRecordingSessionChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyRecordingSessionChanged = xt;
  function St(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            n(k, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyRecordingSessionChanged = St;
  function Ct(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            n(k, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyRecordingSessionChanged = Ct),
    (e.NotifyTimelineEntryChangedHandler = {
      name: `GameRecording.NotifyTimelineEntryChanged#1`,
      request: j,
    }));
  function wt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            $.NotifyTimelineEntryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryChanged = wt;
  function Tt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            n(j, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryChanged = Tt;
  function Et(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            n(j, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryChanged = Et),
    (e.NotifyTimelineEntryRemovedHandler = {
      name: `GameRecording.NotifyTimelineEntryRemoved#1`,
      request: M,
    }));
  function Dt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            $.NotifyTimelineEntryRemovedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryRemoved = Dt;
  function Ot(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            n(M, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryRemoved = Ot;
  function kt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            n(M, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryRemoved = kt),
    (e.NotifyClipCreatedHandler = {
      name: `GameRecording.NotifyClipCreated#1`,
      request: Be,
    }));
  function At(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler($.NotifyClipCreatedHandler, e)
    );
  }
  e.RegisterForNotifyClipCreated = At;
  function jt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, n(Be, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipCreated = jt;
  function Mt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, n(Be, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipCreated = Mt),
    (e.NotifyClipDeletedHandler = {
      name: `GameRecording.NotifyClipDeleted#1`,
      request: Ve,
    }));
  function Nt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler($.NotifyClipDeletedHandler, e)
    );
  }
  e.RegisterForNotifyClipDeleted = Nt;
  function Pt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, n(Ve, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipDeleted = Pt;
  function Ft(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, n(Ve, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipDeleted = Ft),
    (e.NotifyExportProgressHandler = {
      name: `GameRecording.NotifyExportProgress#1`,
      request: He,
    }));
  function It(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler($.NotifyExportProgressHandler, e)
    );
  }
  e.RegisterForNotifyExportProgress = It;
  function Lt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, n(He, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyExportProgress = Lt;
  function Rt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, n(He, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyExportProgress = Rt),
    (e.NotifyUploadProgressHandler = {
      name: `GameRecording.NotifyUploadProgress#1`,
      request: Ye,
    }));
  function zt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler($.NotifyUploadProgressHandler, e)
    );
  }
  e.RegisterForNotifyUploadProgress = zt;
  function Bt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, n(Ye, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyUploadProgress = Bt;
  function Vt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, n(Ye, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyUploadProgress = Vt),
    (e.NotifyLowDiskSpaceHandler = {
      name: `GameRecording.NotifyLowDiskSpace#1`,
      request: N,
    }));
  function Ht(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler($.NotifyLowDiskSpaceHandler, e)
    );
  }
  e.RegisterForNotifyLowDiskSpace = Ht;
  function Ut(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, n(N, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyLowDiskSpace = Ut;
  function Wt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, n(N, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyLowDiskSpace = Wt),
    (e.NotifyPostGameHighlightsChangedHandler = {
      name: `GameRecording.NotifyPostGameHighlightsChanged#1`,
      request: P,
    }));
  function Gt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            $.NotifyPostGameHighlightsChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPostGameHighlightsChanged = Gt;
  function Kt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            n(P, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPostGameHighlightsChanged = Kt;
  function qt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            n(P, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPostGameHighlightsChanged = qt),
    (e.NotifyOpenOverlayToGamePhaseHandler = {
      name: `GameRecording.NotifyOpenOverlayToGamePhase#1`,
      request: F,
    }));
  function Jt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            $.NotifyOpenOverlayToGamePhaseHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToGamePhase = Jt;
  function Yt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            n(F, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToGamePhase = Yt;
  function Xt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            n(F, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToGamePhase = Xt),
    (e.NotifyOpenOverlayToTimelineEventHandler = {
      name: `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
      request: I,
    }));
  function Zt(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            $.NotifyOpenOverlayToTimelineEventHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToTimelineEvent = Zt;
  function Qt(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            n(I, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToTimelineEvent = Qt;
  function $t(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            n(I, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToTimelineEvent = $t),
    (e.NotifyPhaseListChangedHandler = {
      name: `GameRecording.NotifyPhaseListChanged#1`,
      request: L,
    }));
  function en(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            $.NotifyPhaseListChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPhaseListChanged = en;
  function tn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            n(L, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPhaseListChanged = tn;
  function nn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            n(L, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPhaseListChanged = nn),
    (e.GetPerGameSettingsHandler = {
      name: `GameRecording.GetPerGameSettings#1`,
      request: We,
      response: Ge,
    }));
  function rn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, n(We, e), Ge, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPerGameSettings = rn;
  function an(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, n(We, e), Ge, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPerGameSettings = an),
    (e.SetPerGameSettingsHandler = {
      name: `GameRecording.SetPerGameSettings#1`,
      request: Ke,
      response: qe,
    }));
  function on(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, n(Ke, e), qe, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SetPerGameSettings = on;
  function sn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, n(Ke, e), qe, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSetPerGameSettings = sn),
    (e.DeletePerGameSettingsHandler = {
      name: `GameRecording.DeletePerGameSettings#1`,
      request: Q,
      response: Je,
    }));
  function cn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, n(Q, e), Je, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeletePerGameSettings = cn;
  function ln(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, n(Q, e), Je, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeletePerGameSettings = ln),
    (e.UserAddTimelineEntryHandler = {
      name: `GameRecording.UserAddTimelineEntry#1`,
      request: _e,
      response: ve,
    }));
  function un(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, n(_e, e), ve, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserAddTimelineEntry = un;
  function dn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, n(_e, e), ve, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserAddTimelineEntry = dn),
    (e.UserUpdateTimelineEntryHandler = {
      name: `GameRecording.UserUpdateTimelineEntry#1`,
      request: ye,
      response: be,
    }));
  function fn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, n(ye, e), be, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserUpdateTimelineEntry = fn;
  function pn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, n(ye, e), be, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserUpdateTimelineEntry = pn),
    (e.UserRemoveTimelineEntryHandler = {
      name: `GameRecording.UserRemoveTimelineEntry#1`,
      request: xe,
      response: Se,
    }));
  function mn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, n(xe, e), Se, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserRemoveTimelineEntry = mn;
  function hn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, n(xe, e), Se, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserRemoveTimelineEntry = hn),
    (e.ManuallyDeleteRecordingsForAppsHandler = {
      name: `GameRecording.ManuallyDeleteRecordingsForApps#1`,
      request: Ce,
      response: we,
    }));
  function gn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            n(Ce, e),
            we,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.ManuallyDeleteRecordingsForApps = gn;
  function _n(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            n(Ce, e),
            we,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgManuallyDeleteRecordingsForApps = _n),
    (e.GetTotalDiskSpaceUsageHandler = {
      name: `GameRecording.GetTotalDiskSpaceUsage#1`,
      request: Te,
      response: Ee,
    }));
  function vn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, n(Te, e), Ee, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTotalDiskSpaceUsage = vn;
  function yn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, n(Te, e), Ee, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTotalDiskSpaceUsage = yn),
    (e.SwitchBackgroundRecordingGameHandler = {
      name: `GameRecording.SwitchBackgroundRecordingGame#1`,
      request: Xe,
      response: Ze,
    }));
  function bn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            n(Xe, e),
            Ze,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.SwitchBackgroundRecordingGame = bn;
  function xn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            n(Xe, e),
            Ze,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgSwitchBackgroundRecordingGame = xn),
    (e.GetStateHandler = {
      name: `GameRecording.GetState#1`,
      request: Qe,
      response: $e,
    }));
  function Sn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, n(Qe, e), $e, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetState = Sn;
  function Cn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, n(Qe, e), $e, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetState = Cn),
    (e.NotifyStateChangedHandler = {
      name: `GameRecording.NotifyStateChanged#1`,
      request: et,
    }));
  function wn(e, t) {
    return (
      (t ||= u().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler($.NotifyStateChangedHandler, e)
    );
  }
  e.RegisterForNotifyStateChanged = wn;
  function Tn(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, n(et, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyStateChanged = Tn;
  function En(e, t) {
    return (
      (t ||= u().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, n(et, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SendMsgNotifyStateChanged = En;
})(($ ||= {}));
export { $ as t };
