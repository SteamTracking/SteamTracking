/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, Pt as n, ft as r, st as i } from "./libraries.js";
import { r as a } from "./clanimagemodels.js";
import { c as o } from "./creatorhomestore.js";
import { o as s } from "./partnereventstore.js";
import {
  $x as c,
  Hb as l,
  Qx as u,
  Ry as d,
  Sc as f,
  Uc as p,
  Xx as m,
  Yx as h,
  Zx as g,
  eS as _,
  hx as v,
  mS as y,
  nS as b,
  tS as x,
} from "./main.js";
var S = e(n(), 1),
  ee = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: u.readInt32, bw: b.writeInt32 },
            gameid: { n: 2, br: u.readUint64String, bw: b.writeUint64String },
            client_instance_id: {
              n: 3,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            title: { n: 4, br: u.readString, bw: b.writeString },
            cellid: { n: 5, br: u.readUint32, bw: b.writeUint32 },
            rtmp_token: {
              n: 6,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            thumbnail_upload: { n: 7, br: u.readBool, bw: b.writeBool },
            sysid: { n: 9, br: u.readUint32, bw: b.writeUint32 },
            allow_webrtc: { n: 10, br: u.readBool, bw: b.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  te = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            thumbnail_upload_address: {
              n: 2,
              br: u.readString,
              bw: b.writeString,
            },
            thumbnail_upload_token: {
              n: 3,
              br: u.readString,
              bw: b.writeString,
            },
            thumbnail_interval_seconds: {
              n: 4,
              br: u.readUint32,
              bw: b.writeUint32,
            },
            heartbeat_interval_seconds: {
              n: 5,
              br: u.readUint32,
              bw: b.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  ne = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Request`;
    }
  },
  re = class e extends S.Message {
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
      return `CBroadcast_EndBroadcastSession_Response`;
    }
  },
  ie = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            cellid: { n: 2, br: u.readUint32, bw: b.writeUint32 },
            as_rtmp: { n: 3, br: u.readBool, bw: b.writeBool },
            delay_seconds: { n: 4, br: u.readUint32, bw: b.writeUint32 },
            rtmp_token: {
              n: 5,
              d: `0`,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            upload_ip_address: { n: 6, br: u.readUint32, bw: b.writeUint32 },
            is_replay: { n: 7, br: u.readBool, bw: b.writeBool },
            sysid: { n: 8, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  ae = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_token || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_token: { n: 1, br: u.readString, bw: b.writeString },
            upload_address: { n: 2, br: u.readString, bw: b.writeString },
            broadcast_upload_id: {
              n: 3,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            enable_replay: { n: 6, br: u.readBool, bw: b.writeBool },
            http_address: { n: 7, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  C = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            upload_token: { n: 2, br: u.readString, bw: b.writeString },
            upload_address: { n: 3, br: u.readString, bw: b.writeString },
            http_address: { n: 4, br: u.readString, bw: b.writeString },
            broadcast_upload_id: {
              n: 5,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              n: 6,
              br: u.readUint32,
              bw: b.writeUint32,
            },
            is_rtmp: { n: 7, br: u.readBool, bw: b.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  oe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  w = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: u.readUint64String, bw: b.writeUint64String },
            title: { n: 2, br: u.readString, bw: b.writeString },
            num_viewers: { n: 3, br: u.readUint32, bw: b.writeUint32 },
            permission: { n: 4, br: u.readInt32, bw: b.writeInt32 },
            is_rtmp: { n: 5, br: u.readBool, bw: b.writeBool },
            seconds_delay: { n: 6, br: u.readInt32, bw: b.writeInt32 },
            is_publisher: { n: 7, br: u.readBool, bw: b.writeBool },
            thumbnail_url: { n: 8, br: u.readString, bw: b.writeString },
            update_interval: { n: 9, br: u.readInt32, bw: b.writeInt32 },
            is_uploading: { n: 10, br: u.readBool, bw: b.writeBool },
            duration: { n: 11, br: u.readUint32, bw: b.writeUint32 },
            is_replay: { n: 12, br: u.readBool, bw: b.writeBool },
            is_capturing_vod: { n: 13, br: u.readBool, bw: b.writeBool },
            is_store_whitelisted: { n: 14, br: u.readBool, bw: b.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  T = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  E = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_url || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_url: { n: 1, br: u.readString, bw: b.writeString },
            update_interval: { n: 2, br: u.readInt32, bw: b.writeInt32 },
            num_viewers: { n: 3, br: u.readInt32, bw: b.writeInt32 },
            duration: { n: 4, br: u.readInt32, bw: b.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  D = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            existing_broadcast_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            client_cell: { n: 5, br: u.readUint32, bw: b.writeUint32 },
            watch_location: { n: 6, br: u.readEnum, bw: b.writeEnum },
            is_webrtc: { n: 7, br: u.readBool, bw: b.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  se = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.response || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            response: { n: 1, br: u.readEnum, bw: b.writeEnum },
            mpd_url: { n: 2, br: u.readString, bw: b.writeString },
            broadcast_id: {
              n: 3,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            gameid: { n: 4, br: u.readUint64String, bw: b.writeUint64String },
            title: { n: 5, br: u.readString, bw: b.writeString },
            num_viewers: { n: 6, br: u.readUint32, bw: b.writeUint32 },
            permission: { n: 7, br: u.readInt32, bw: b.writeInt32 },
            is_rtmp: { n: 8, br: u.readBool, bw: b.writeBool },
            seconds_delay: { n: 9, br: u.readInt32, bw: b.writeInt32 },
            viewer_token: {
              n: 10,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            hls_m3u8_master_url: { n: 11, br: u.readString, bw: b.writeString },
            heartbeat_interval: { n: 12, br: u.readInt32, bw: b.writeInt32 },
            thumbnail_url: { n: 13, br: u.readString, bw: b.writeString },
            is_webrtc: { n: 14, br: u.readBool, bw: b.writeBool },
            webrtc_session_id: {
              n: 15,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            webrtc_offer_sdp: { n: 16, br: u.readString, bw: b.writeString },
            webrtc_turn_server: { n: 17, br: u.readString, bw: b.writeString },
            is_replay: { n: 18, br: u.readBool, bw: b.writeBool },
            duration: { n: 19, br: u.readInt32, bw: b.writeInt32 },
            cdn_auth_url_parameters: {
              n: 20,
              br: u.readString,
              bw: b.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  ce = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            representation: { n: 4, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  le = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  ue = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            approval_response: { n: 2, br: u.readBool, bw: b.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  de = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: u.readBool, bw: b.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  fe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: u.readInt32, bw: b.writeInt32 },
            gameid: { n: 2, br: u.readUint64String, bw: b.writeUint64String },
            title: { n: 3, br: u.readString, bw: b.writeString },
            game_data_config: { n: 4, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Request`;
    }
  },
  pe = class e extends S.Message {
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
      return `CBroadcast_SendBroadcastStateToServer_Response`;
    }
  },
  O = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            state: { n: 2, br: u.readEnum, bw: b.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  k = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  A = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            broadcast_relay_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            upload_result: { n: 3, br: u.readUint32, bw: b.writeUint32 },
            too_many_poor_uploads: { n: 4, br: u.readBool, bw: b.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  j = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  M = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            num_viewers: { n: 2, br: u.readInt32, bw: b.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  N = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            broadcast_channel_name: {
              n: 2,
              br: u.readString,
              bw: b.writeString,
            },
            broadcast_channel_avatar: {
              n: 3,
              br: u.readString,
              bw: b.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  P = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_upload_token || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_upload_token: {
              n: 1,
              br: u.readString,
              bw: b.writeString,
            },
            thumbnail_broadcast_session_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            thumbnail_data: { n: 3, br: u.readBytes, bw: b.writeBytes },
            thumbnail_width: { n: 4, br: u.readUint32, bw: b.writeUint32 },
            thumbnail_height: { n: 5, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  F = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_upload_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_upload_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            upload_result: { n: 2, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  I = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  L = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  R = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            client_ip: { n: 3, br: u.readUint32, bw: b.writeUint32 },
            client_cell: { n: 4, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  z = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            view_url_template: { n: 3, br: u.readString, bw: b.writeString },
            flair_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: u.readUint32,
              pbr: u.readPackedUint32,
              bw: b.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  B = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            message: { n: 2, br: u.readString, bw: b.writeString },
            instance_id: { n: 3, br: u.readUint32, bw: b.writeUint32 },
            language: { n: 4, d: 0, br: u.readUint32, bw: b.writeUint32 },
            country_code: { n: 5, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  me = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_name || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            persona_name: { n: 1, br: u.readString, bw: b.writeString },
            in_game: { n: 2, br: u.readBool, bw: b.writeBool },
            result: { n: 3, br: u.readInt32, bw: b.writeInt32 },
            cooldown_time_seconds: { n: 4, br: u.readInt32, bw: b.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  V = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            flair: { n: 2, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  he = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            result: { n: 1, br: u.readInt32, bw: b.writeInt32 },
            chat_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            flair: { n: 3, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  H = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            muted: { n: 3, br: u.readBool, bw: b.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Request`;
    }
  },
  ge = class e extends S.Message {
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
      return `CBroadcast_MuteBroadcastChatUser_Response`;
    }
  },
  U = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Request`;
    }
  },
  _e = class e extends S.Message {
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
      return `CBroadcast_RemoveUserChatText_Response`;
    }
  },
  ve = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              r: !0,
              q: !0,
              br: u.readFixed64String,
              pbr: u.readPackedFixed64String,
              bw: b.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  ye = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_names || h(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { persona_names: { n: 1, c: W, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  W = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steam_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steam_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            persona: { n: 2, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  be = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            broadcast_session_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            first_segment: { n: 3, br: u.readInt32, bw: b.writeInt32 },
            num_segments: { n: 4, br: u.readInt32, bw: b.writeInt32 },
            clip_description: { n: 5, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  xe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  Se = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Request`;
    }
  },
  Ce = class e extends S.Message {
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
      return `CBroadcast_GetBuildClipStatus_Response`;
    }
  },
  we = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            start_time: { n: 2, br: u.readUint32, bw: b.writeUint32 },
            end_time: { n: 3, br: u.readUint32, bw: b.writeUint32 },
            video_description: { n: 4, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Request`;
    }
  },
  Te = class e extends S.Message {
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
      return `CBroadcast_SetClipDetails_Response`;
    }
  },
  G = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  Ee = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            video_id: { n: 2, br: u.readUint64String, bw: b.writeUint64String },
            channel_id: {
              n: 3,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            app_id: { n: 4, br: u.readUint32, bw: b.writeUint32 },
            accountid_broadcaster: {
              n: 5,
              br: u.readUint32,
              bw: b.writeUint32,
            },
            accountid_clipmaker: { n: 6, br: u.readUint32, bw: b.writeUint32 },
            video_description: { n: 7, br: u.readString, bw: b.writeString },
            start_time: { n: 8, br: u.readUint32, bw: b.writeUint32 },
            length_milliseconds: { n: 9, br: u.readUint32, bw: b.writeUint32 },
            thumbnail_path: { n: 10, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  De = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: u.readInt32, bw: b.writeInt32 },
            update_token: { n: 2, br: u.readBool, bw: b.writeBool },
            broadcast_delay: { n: 3, br: u.readInt32, bw: b.writeInt32 },
            app_id: { n: 4, br: u.readUint32, bw: b.writeUint32 },
            required_app_id: { n: 5, br: u.readUint32, bw: b.writeUint32 },
            broadcast_chat_permission: {
              n: 6,
              d: 0,
              br: u.readEnum,
              bw: b.writeEnum,
            },
            broadcast_buffer: { n: 7, br: u.readInt32, bw: b.writeInt32 },
            steamid: {
              n: 8,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            chat_rate_limit: { n: 9, br: u.readUint32, bw: b.writeUint32 },
            enable_replay: { n: 10, br: u.readBool, bw: b.writeBool },
            is_partner_chat_only: { n: 11, br: u.readBool, bw: b.writeBool },
            wordban_list: { n: 12, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Request`;
    }
  },
  Oe = class e extends S.Message {
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
      return `CBroadcast_SetRTMPInfo_Response`;
    }
  },
  ke = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: u.readUint32, bw: b.writeUint32 },
            steamid: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  Ae = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: u.readInt32, bw: b.writeInt32 },
            rtmp_host: { n: 2, br: u.readString, bw: b.writeString },
            rtmp_token: { n: 3, br: u.readString, bw: b.writeString },
            broadcast_delay: { n: 4, br: u.readInt32, bw: b.writeInt32 },
            app_id: { n: 5, br: u.readUint32, bw: b.writeUint32 },
            required_app_id: { n: 6, br: u.readUint32, bw: b.writeUint32 },
            broadcast_chat_permission: {
              n: 7,
              br: u.readEnum,
              bw: b.writeEnum,
            },
            broadcast_buffer: { n: 8, br: u.readInt32, bw: b.writeInt32 },
            steamid: {
              n: 9,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            chat_rate_limit: { n: 10, br: u.readUint32, bw: b.writeUint32 },
            enable_replay: { n: 11, br: u.readBool, bw: b.writeBool },
            is_partner_chat_only: { n: 12, br: u.readBool, bw: b.writeBool },
            wordban_list: { n: 13, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  je = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.row_limit || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            row_limit: { n: 1, d: 100, br: u.readUint32, bw: b.writeUint32 },
            start_time: { n: 2, d: 0, br: u.readUint32, bw: b.writeUint32 },
            upload_id: {
              n: 3,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            steamid: {
              n: 4,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            session_id: {
              n: 5,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  Me = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_stats || h(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { upload_stats: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  K = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_result || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_result: { n: 1, br: u.readUint32, bw: b.writeUint32 },
            time_stopped: { n: 2, br: u.readUint32, bw: b.writeUint32 },
            seconds_uploaded: { n: 3, br: u.readUint32, bw: b.writeUint32 },
            max_viewers: { n: 4, br: u.readUint32, bw: b.writeUint32 },
            resolution_x: { n: 5, br: u.readUint32, bw: b.writeUint32 },
            resolution_y: { n: 6, br: u.readUint32, bw: b.writeUint32 },
            avg_bandwidth: { n: 7, br: u.readUint32, bw: b.writeUint32 },
            total_bytes: {
              n: 8,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            app_id: { n: 9, br: u.readUint32, bw: b.writeUint32 },
            total_unique_viewers: {
              n: 10,
              br: u.readUint32,
              bw: b.writeUint32,
            },
            total_seconds_watched: {
              n: 11,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            time_started: { n: 12, br: u.readUint32, bw: b.writeUint32 },
            upload_id: {
              n: 13,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            local_address: { n: 14, br: u.readString, bw: b.writeString },
            remote_address: { n: 15, br: u.readString, bw: b.writeString },
            frames_per_second: { n: 16, br: u.readUint32, bw: b.writeUint32 },
            num_representations: { n: 17, br: u.readUint32, bw: b.writeUint32 },
            app_name: { n: 18, br: u.readString, bw: b.writeString },
            is_replay: { n: 19, br: u.readBool, bw: b.writeBool },
            session_id: {
              n: 20,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  Ne = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_id: {
              n: 1,
              br: u.readUint64String,
              bw: b.writeUint64String,
            },
            steamid: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  Pe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.viewer_stats || h(e.M()),
        S.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            viewer_stats: { n: 1, c: q, r: !0, q: !0 },
            country_stats: { n: 2, c: J, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  q = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: u.readUint32, bw: b.writeUint32 },
            num_viewers: { n: 2, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  J = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: u.readString, bw: b.writeString },
            num_viewers: { n: 2, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  Fe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            started: { n: 2, br: u.readBool, bw: b.writeBool },
            offer: { n: 3, br: u.readString, bw: b.writeString },
            resolution_x: { n: 4, br: u.readUint32, bw: b.writeUint32 },
            resolution_y: { n: 5, br: u.readUint32, bw: b.writeUint32 },
            fps: { n: 6, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Request`;
    }
  },
  Ie = class e extends S.Message {
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
      return `CBroadcast_WebRTCStartResult_Response`;
    }
  },
  Le = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Request`;
    }
  },
  Re = class e extends S.Message {
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
      return `CBroadcast_WebRTCStopped_Response`;
    }
  },
  ze = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            answer: { n: 3, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Request`;
    }
  },
  Be = class e extends S.Message {
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
      return `CBroadcast_WebRTCSetAnswer_Response`;
    }
  },
  Y = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sdp_mid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sdp_mid: { n: 1, br: u.readString, bw: b.writeString },
            sdp_mline_index: { n: 2, br: u.readInt32, bw: b.writeInt32 },
            candidate: { n: 3, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  Ve = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            candidate: { n: 2, c: Y },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
    }
  },
  He = class e extends S.Message {
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
      return `CBroadcast_WebRTCAddHostCandidate_Response`;
    }
  },
  Ue = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            candidate: { n: 3, c: Y },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
    }
  },
  We = class e extends S.Message {
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
      return `CBroadcast_WebRTCAddViewerCandidate_Response`;
    }
  },
  Ge = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            candidate_generation: { n: 3, br: u.readUint32, bw: b.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  Ke = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.candidate_generation || h(e.M()),
        S.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            candidate_generation: { n: 1, br: u.readUint32, bw: b.writeUint32 },
            candidates: { n: 2, c: Y, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  qe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  Je = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cellid || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cellid: { n: 1, br: u.readUint32, bw: b.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  Ye = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.turn_server || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            turn_server: { n: 1, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  Xe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            turn_server: { n: 2, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  Ze = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            viewer_steamid: {
              n: 3,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            viewer_token: {
              n: 4,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  Qe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            answer: { n: 3, br: u.readString, bw: b.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  $e = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || h(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: u.readFixed64String,
              bw: b.writeFixed64String,
            },
            candidate: { n: 3, c: Y },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return g(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  X;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Broadcast.BeginBroadcastSession#1`, v(ee, t, n), te, {
      ePrivilege: 1,
    });
  }
  e.BeginBroadcastSession = t;
  function n(e, t, n) {
    return e.SendMsg(`Broadcast.EndBroadcastSession#1`, v(ne, t, n), re, {
      ePrivilege: 1,
    });
  }
  e.EndBroadcastSession = n;
  function r(e, t, n) {
    return e.SendMsg(`Broadcast.StartBroadcastUpload#1`, v(ie, t, n), ae, {
      ePrivilege: 1,
    });
  }
  e.StartBroadcastUpload = r;
  function i(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      v(F, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastUploadStop = i;
  function a(e, t, n) {
    return e.SendMsg(`Broadcast.WatchBroadcast#1`, v(D, t, n), se, {
      ePrivilege: 2,
    });
  }
  e.WatchBroadcast = a;
  function o(e, t) {
    return e.SendNotification(`Broadcast.HeartbeatBroadcast#1`, v(ce, t), {
      ePrivilege: 2,
    });
  }
  e.HeartbeatBroadcast = o;
  function s(e, t) {
    return e.SendNotification(`Broadcast.StopWatchingBroadcast#1`, v(le, t), {
      ePrivilege: 2,
    });
  }
  e.StopWatchingBroadcast = s;
  function c(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastStatus#1`, v(oe, t, n), w, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastStatus = c;
  function l(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, v(T, t, n), E, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastThumbnail = l;
  function u(e, t, n) {
    return e.SendMsg(`Broadcast.InviteToBroadcast#1`, v(ue, t, n), de, {
      ePrivilege: 1,
    });
  }
  e.InviteToBroadcast = u;
  function d(e, t, n) {
    return e.SendMsg(
      `Broadcast.SendBroadcastStateToServer#1`,
      v(fe, t, n),
      pe,
      { ePrivilege: 1 },
    );
  }
  e.SendBroadcastStateToServer = d;
  function f(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      v(L, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastSessionHeartbeat = f;
  function p(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, v(R, t, n), z, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastChatInfo = p;
  function m(e, t, n) {
    return e.SendMsg(`Broadcast.PostChatMessage#1`, v(B, t, n), me, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.PostChatMessage = m;
  function h(e, t, n) {
    return e.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, v(V, t, n), he, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.UpdateChatMessageFlair = h;
  function g(e, t, n) {
    return e.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, v(H, t, n), ge, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.MuteBroadcastChatUser = g;
  function _(e, t, n) {
    return e.SendMsg(`Broadcast.RemoveUserChatText#1`, v(U, t, n), _e, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.RemoveUserChatText = _;
  function y(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, v(ve, t, n), ye, {
      ePrivilege: 1,
    });
  }
  e.GetBroadcastChatUserNames = y;
  function b(e, t, n) {
    return e.SendMsg(`Broadcast.StartBuildClip#1`, v(be, t, n), xe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.StartBuildClip = b;
  function x(e, t, n) {
    return e.SendMsg(`Broadcast.GetBuildClipStatus#1`, v(Se, t, n), Ce, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBuildClipStatus = x;
  function S(e, t, n) {
    return e.SendMsg(`Broadcast.SetClipDetails#1`, v(we, t, n), Te, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetClipDetails = S;
  function C(e, t, n) {
    return e.SendMsg(`Broadcast.GetClipDetails#1`, v(G, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetClipDetails = C;
  function O(e, t, n) {
    return e.SendMsg(`Broadcast.SetRTMPInfo#1`, v(De, t, n), Oe, {
      ePrivilege: 1,
    });
  }
  e.SetRTMPInfo = O;
  function k(e, t, n) {
    return e.SendMsg(`Broadcast.GetRTMPInfo#1`, v(ke, t, n), Ae, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRTMPInfo = k;
  function A(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      v(Xe, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyWebRTCHaveTURNServer = A;
  function j(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStartResult#1`, v(Fe, t, n), Ie, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStartResult = j;
  function M(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStopped#1`, v(Le, t, n), Re, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStopped = M;
  function N(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCSetAnswer#1`, v(ze, t, n), Be, {
      ePrivilege: 1,
    });
  }
  e.WebRTCSetAnswer = N;
  function P(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, v(Je, t, n), Ye, {
      ePrivilege: 1,
    });
  }
  e.WebRTCLookupTURNServer = P;
  function I(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, v(Ve, t, n), He, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddHostCandidate = I;
  function W(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, v(Ue, t, n), We, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddViewerCandidate = W;
  function K(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, v(Ge, t, n), Ke, {
      ePrivilege: 1,
    });
  }
  e.WebRTCGetHostCandidates = K;
  function q(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, v(je, t, n), Me, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastUploadStats = q;
  function J(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, v(Ne, t, n), Pe, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastViewerStats = J;
})((X ||= {}));
var et;
(function (e) {
  ((e.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: O,
  }),
    (e.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: k,
    }),
    (e.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: C,
    }),
    (e.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: A,
    }),
    (e.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: j,
    }),
    (e.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: I,
    }),
    (e.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: M,
    }),
    (e.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: N,
    }),
    (e.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: P,
    }),
    (e.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: qe,
    }),
    (e.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: Ze,
    }),
    (e.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: Qe,
    }),
    (e.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: $e,
    }));
})((et ||= {}));
async function tt(e, t) {
  let n = l.STORE_BASE_URL + `video/details/` + e + `/0`,
    r = await fetch(n, { credentials: `include`, signal: t });
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success != 1 && i?.success != `ready`)
    throw Error(`video/details on ` + e + ` answered ` + i?.success);
  return { appid: e, video_url: i.video_url, bookmark: i.bookmark };
}
function nt(e) {
  return [`video`, `vod`, e];
}
function Z(e) {
  return { queryKey: nt(e), queryFn: ({ signal: t }) => tt(e, t), retry: !1 };
}
function rt(e) {
  let { data: t, isPending: n } = i(Z(e));
  return { vodInfo: t, bLoading: n };
}
var it = e(t(), 1),
  at = `iskgTRyIKtY-`,
  Q = `D-9IGGgvOvE-`,
  ot = `Ij-aRjBfDws-`,
  st = `J-8GgQX0E5w-`,
  $ = r();
function ct(e) {
  let { event: t, lang: n, href: r } = e,
    [i, o] = (0, it.useMemo)(() => {
      let e = t.jsondata.localized_sale_product_banner,
        r = t.jsondata.localized_sale_product_mobile_banner;
      if (e?.length && r?.length) {
        let i = d.GetWithFallback(e, n),
          o = d.GetWithFallback(r, n);
        if (i?.length && o?.length)
          return [
            a.GenerateURLFromHashAndExt(t.clanSteamID, i),
            a.GenerateURLFromHashAndExt(t.clanSteamID, o),
          ];
      }
      return [void 0, void 0];
    }, [t, n]);
  return !i?.length || !o?.length
    ? null
    : (0, $.jsxs)(`a`, {
        href: r,
        className: at,
        children: [
          (0, $.jsx)(`img`, {
            src: i,
            className: f(Q, ot),
            alt: t.GetNameWithFallback(n),
          }),
          (0, $.jsx)(`img`, {
            src: o,
            className: f(Q, st),
            alt: t.GetNameWithFallback(n),
          }),
        ],
      });
}
function lt(e) {
  let { gidEvent: t } = e,
    n = s(t);
  return n
    ? (0, $.jsx)(ct, { event: n, lang: y(l.LANGUAGE), href: p(o(n) ?? ``) })
    : null;
}
export { H as a, V as c, X as i, Z as n, B as o, rt as r, U as s, lt as t };
