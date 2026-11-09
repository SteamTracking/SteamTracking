/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  U as i,
  Ut as a,
  Wt as o,
  Xt as s,
  Yt as c,
  on as l,
  qt as u,
  yt as d,
} from "./mobx.esm.js";
import { t as f } from "./useQuery.js";
var p = l(s(), 1),
  ee = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.permission || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            permission: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            gameid: { n: 2, br: e.readUint64String, bw: c.writeUint64String },
            client_instance_id: {
              n: 3,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            title: { n: 4, br: e.readString, bw: c.writeString },
            cellid: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            rtmp_token: {
              n: 6,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            thumbnail_upload: { n: 7, br: e.readBool, bw: c.writeBool },
            sysid: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            allow_webrtc: { n: 10, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  te = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            thumbnail_upload_address: {
              n: 2,
              br: e.readString,
              bw: c.writeString,
            },
            thumbnail_upload_token: {
              n: 3,
              br: e.readString,
              bw: c.writeString,
            },
            thumbnail_interval_seconds: {
              n: 4,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            heartbeat_interval_seconds: {
              n: 5,
              br: e.readUint32,
              bw: c.writeUint32,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  ne = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Request`;
    }
  },
  re = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Response`;
    }
  },
  ie = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            cellid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            as_rtmp: { n: 3, br: e.readBool, bw: c.writeBool },
            delay_seconds: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            rtmp_token: {
              n: 5,
              d: `0`,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            upload_ip_address: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            is_replay: { n: 7, br: e.readBool, bw: c.writeBool },
            sysid: { n: 8, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  ae = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.upload_token || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            upload_token: { n: 1, br: e.readString, bw: c.writeString },
            upload_address: { n: 2, br: e.readString, bw: c.writeString },
            broadcast_upload_id: {
              n: 3,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            enable_replay: { n: 6, br: e.readBool, bw: c.writeBool },
            http_address: { n: 7, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  m = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            upload_token: { n: 2, br: e.readString, bw: c.writeString },
            upload_address: { n: 3, br: e.readString, bw: c.writeString },
            http_address: { n: 4, br: e.readString, bw: c.writeString },
            broadcast_upload_id: {
              n: 5,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              n: 6,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            is_rtmp: { n: 7, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  oe = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  se = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.gameid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            gameid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            title: { n: 2, br: e.readString, bw: c.writeString },
            num_viewers: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            permission: { n: 4, br: e.readInt32, bw: c.writeInt32 },
            is_rtmp: { n: 5, br: e.readBool, bw: c.writeBool },
            seconds_delay: { n: 6, br: e.readInt32, bw: c.writeInt32 },
            is_publisher: { n: 7, br: e.readBool, bw: c.writeBool },
            thumbnail_url: { n: 8, br: e.readString, bw: c.writeString },
            update_interval: { n: 9, br: e.readInt32, bw: c.writeInt32 },
            is_uploading: { n: 10, br: e.readBool, bw: c.writeBool },
            duration: { n: 11, br: e.readUint32, bw: c.writeUint32 },
            is_replay: { n: 12, br: e.readBool, bw: c.writeBool },
            is_capturing_vod: { n: 13, br: e.readBool, bw: c.writeBool },
            is_store_whitelisted: { n: 14, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  h = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  g = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.thumbnail_url || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            thumbnail_url: { n: 1, br: e.readString, bw: c.writeString },
            update_interval: { n: 2, br: e.readInt32, bw: c.writeInt32 },
            num_viewers: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            duration: { n: 4, br: e.readInt32, bw: c.writeInt32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  _ = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            existing_broadcast_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            client_cell: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            watch_location: { n: 6, br: e.readEnum, bw: c.writeEnum },
            is_webrtc: { n: 7, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  v = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.response || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            response: { n: 1, br: e.readEnum, bw: c.writeEnum },
            mpd_url: { n: 2, br: e.readString, bw: c.writeString },
            broadcast_id: {
              n: 3,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            gameid: { n: 4, br: e.readUint64String, bw: c.writeUint64String },
            title: { n: 5, br: e.readString, bw: c.writeString },
            num_viewers: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            permission: { n: 7, br: e.readInt32, bw: c.writeInt32 },
            is_rtmp: { n: 8, br: e.readBool, bw: c.writeBool },
            seconds_delay: { n: 9, br: e.readInt32, bw: c.writeInt32 },
            viewer_token: {
              n: 10,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            hls_m3u8_master_url: { n: 11, br: e.readString, bw: c.writeString },
            heartbeat_interval: { n: 12, br: e.readInt32, bw: c.writeInt32 },
            thumbnail_url: { n: 13, br: e.readString, bw: c.writeString },
            is_webrtc: { n: 14, br: e.readBool, bw: c.writeBool },
            webrtc_session_id: {
              n: 15,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            webrtc_offer_sdp: { n: 16, br: e.readString, bw: c.writeString },
            webrtc_turn_server: { n: 17, br: e.readString, bw: c.writeString },
            is_replay: { n: 18, br: e.readBool, bw: c.writeBool },
            duration: { n: 19, br: e.readInt32, bw: c.writeInt32 },
            cdn_auth_url_parameters: {
              n: 20,
              br: e.readString,
              bw: c.writeString,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  ce = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            representation: { n: 4, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  le = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  ue = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            approval_response: { n: 2, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  de = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.success || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: { success: { n: 1, br: e.readBool, bw: c.writeBool } },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  fe = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.permission || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            permission: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            gameid: { n: 2, br: e.readUint64String, bw: c.writeUint64String },
            title: { n: 3, br: e.readString, bw: c.writeString },
            game_data_config: { n: 4, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Request`;
    }
  },
  pe = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Response`;
    }
  },
  y = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            state: { n: 2, br: e.readEnum, bw: c.writeEnum },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  b = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  x = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            broadcast_relay_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            upload_result: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            too_many_poor_uploads: { n: 4, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  S = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  C = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            num_viewers: { n: 2, br: e.readInt32, bw: c.writeInt32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  w = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_channel_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            broadcast_channel_name: {
              n: 2,
              br: e.readString,
              bw: c.writeString,
            },
            broadcast_channel_avatar: {
              n: 3,
              br: e.readString,
              bw: c.writeString,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  T = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.thumbnail_upload_token || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            thumbnail_upload_token: {
              n: 1,
              br: e.readString,
              bw: c.writeString,
            },
            thumbnail_broadcast_session_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            thumbnail_data: { n: 3, br: e.readBytes, bw: c.writeBytes },
            thumbnail_width: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            thumbnail_height: { n: 5, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  me = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_upload_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_upload_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            upload_result: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  E = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcaster_steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  he = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  D = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            client_ip: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            client_cell: { n: 4, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  O = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.chat_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            chat_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            view_url_template: { n: 3, br: e.readString, bw: c.writeString },
            flair_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  k = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.chat_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            chat_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            message: { n: 2, br: e.readString, bw: c.writeString },
            instance_id: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            language: { n: 4, d: 0, br: e.readUint32, bw: c.writeUint32 },
            country_code: { n: 5, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  A = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.persona_name || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            persona_name: { n: 1, br: e.readString, bw: c.writeString },
            in_game: { n: 2, br: e.readBool, bw: c.writeBool },
            result: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            cooldown_time_seconds: { n: 4, br: e.readInt32, bw: c.writeInt32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  j = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.chat_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            chat_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            flair: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  M = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.result || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            result: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            chat_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            flair: { n: 3, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  N = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.chat_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            chat_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            muted: { n: 3, br: e.readBool, bw: c.writeBool },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Request`;
    }
  },
  P = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Response`;
    }
  },
  F = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.chat_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            chat_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Request`;
    }
  },
  I = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Response`;
    }
  },
  L = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.chat_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            chat_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readFixed64String,
              pbr: e.readPackedFixed64String,
              bw: c.writeRepeatedFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  R = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.persona_names || t(e.M()),
        p.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { persona_names: { n: 1, c: z, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  z = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steam_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steam_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            persona: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  ge = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            broadcast_session_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            first_segment: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            num_segments: { n: 4, br: e.readInt32, bw: c.writeInt32 },
            clip_description: { n: 5, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  _e = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_clip_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  ve = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_clip_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Request`;
    }
  },
  ye = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Response`;
    }
  },
  be = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_clip_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            start_time: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            end_time: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            video_description: { n: 4, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Request`;
    }
  },
  xe = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Response`;
    }
  },
  Se = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_clip_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  Ce = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_clip_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            video_id: { n: 2, br: e.readUint64String, bw: c.writeUint64String },
            channel_id: {
              n: 3,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            app_id: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            accountid_broadcaster: {
              n: 5,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            accountid_clipmaker: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            video_description: { n: 7, br: e.readString, bw: c.writeString },
            start_time: { n: 8, br: e.readUint32, bw: c.writeUint32 },
            length_milliseconds: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            thumbnail_path: { n: 10, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  we = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_permission || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_permission: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            update_token: { n: 2, br: e.readBool, bw: c.writeBool },
            broadcast_delay: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            app_id: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            required_app_id: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            broadcast_chat_permission: {
              n: 6,
              d: 0,
              br: e.readEnum,
              bw: c.writeEnum,
            },
            broadcast_buffer: { n: 7, br: e.readInt32, bw: c.writeInt32 },
            steamid: {
              n: 8,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            chat_rate_limit: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            enable_replay: { n: 10, br: e.readBool, bw: c.writeBool },
            is_partner_chat_only: { n: 11, br: e.readBool, bw: c.writeBool },
            wordban_list: { n: 12, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Request`;
    }
  },
  Te = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Response`;
    }
  },
  Ee = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.ip || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            ip: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            steamid: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  De = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_permission || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_permission: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            rtmp_host: { n: 2, br: e.readString, bw: c.writeString },
            rtmp_token: { n: 3, br: e.readString, bw: c.writeString },
            broadcast_delay: { n: 4, br: e.readInt32, bw: c.writeInt32 },
            app_id: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            required_app_id: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            broadcast_chat_permission: {
              n: 7,
              br: e.readEnum,
              bw: c.writeEnum,
            },
            broadcast_buffer: { n: 8, br: e.readInt32, bw: c.writeInt32 },
            steamid: {
              n: 9,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            chat_rate_limit: { n: 10, br: e.readUint32, bw: c.writeUint32 },
            enable_replay: { n: 11, br: e.readBool, bw: c.writeBool },
            is_partner_chat_only: { n: 12, br: e.readBool, bw: c.writeBool },
            wordban_list: { n: 13, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  Oe = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.row_limit || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            row_limit: { n: 1, d: 100, br: e.readUint32, bw: c.writeUint32 },
            start_time: { n: 2, d: 0, br: e.readUint32, bw: c.writeUint32 },
            upload_id: {
              n: 3,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            steamid: {
              n: 4,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            session_id: {
              n: 5,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  ke = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.upload_stats || t(e.M()),
        p.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { upload_stats: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  B = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.upload_result || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            upload_result: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            time_stopped: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            seconds_uploaded: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            max_viewers: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            resolution_x: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            resolution_y: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            avg_bandwidth: { n: 7, br: e.readUint32, bw: c.writeUint32 },
            total_bytes: {
              n: 8,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            app_id: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            total_unique_viewers: {
              n: 10,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            total_seconds_watched: {
              n: 11,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            time_started: { n: 12, br: e.readUint32, bw: c.writeUint32 },
            upload_id: {
              n: 13,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            local_address: { n: 14, br: e.readString, bw: c.writeString },
            remote_address: { n: 15, br: e.readString, bw: c.writeString },
            frames_per_second: { n: 16, br: e.readUint32, bw: c.writeUint32 },
            num_representations: { n: 17, br: e.readUint32, bw: c.writeUint32 },
            app_name: { n: 18, br: e.readString, bw: c.writeString },
            is_replay: { n: 19, br: e.readBool, bw: c.writeBool },
            session_id: {
              n: 20,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  Ae = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.upload_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            upload_id: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            steamid: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  je = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.viewer_stats || t(e.M()),
        p.Message.initialize(this, n, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            viewer_stats: { n: 1, c: V, r: !0, q: !0 },
            country_stats: { n: 2, c: H, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  V = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.time || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            time: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            num_viewers: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  H = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.country_code || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            country_code: { n: 1, br: e.readString, bw: c.writeString },
            num_viewers: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  Me = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.webrtc_session_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            started: { n: 2, br: e.readBool, bw: c.writeBool },
            offer: { n: 3, br: e.readString, bw: c.writeString },
            resolution_x: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            resolution_y: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            fps: { n: 6, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Request`;
    }
  },
  Ne = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Response`;
    }
  },
  Pe = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.webrtc_session_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Request`;
    }
  },
  Fe = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Response`;
    }
  },
  Ie = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcaster_steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            answer: { n: 3, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Request`;
    }
  },
  Le = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Response`;
    }
  },
  U = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.sdp_mid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            sdp_mid: { n: 1, br: e.readString, bw: c.writeString },
            sdp_mline_index: { n: 2, br: e.readInt32, bw: c.writeInt32 },
            candidate: { n: 3, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  Re = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.webrtc_session_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            candidate: { n: 2, c: U },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
    }
  },
  ze = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Response`;
    }
  },
  Be = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcaster_steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            candidate: { n: 3, c: U },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
    }
  },
  Ve = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), p.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new p.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new p.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Response`;
    }
  },
  He = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcaster_steamid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            candidate_generation: { n: 3, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  Ue = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.candidate_generation || t(i.M()),
        p.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            candidate_generation: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            candidates: { n: 2, c: U, r: !0, q: !0 },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  W = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_session_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  We = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.cellid || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: { cellid: { n: 1, br: e.readUint32, bw: c.writeUint32 } },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  Ge = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.turn_server || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            turn_server: { n: 1, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  G = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_session_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            turn_server: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  K = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_session_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            viewer_steamid: {
              n: 3,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            viewer_token: {
              n: 4,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  q = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_session_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            answer: { n: 3, br: e.readString, bw: c.writeString },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  J = class i extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        i.prototype.broadcast_session_id || t(i.M()),
        p.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (i.sm_m ||= {
          proto: i,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            candidate: { n: 3, c: U },
          },
        }),
        i.sm_m
      );
    }
    static MBF() {
      return (i.sm_mbf ||= r(i.M())), i.sm_mbf;
    }
    toObject(e = !1) {
      return i.toObject(e, this);
    }
    static toObject(e, t) {
      return n(i.M(), e, t);
    }
    static fromObject(e) {
      return o(i.M(), e);
    }
    static deserializeBinary(e) {
      let t = new p.BinaryReader(e),
        n = new i();
      return i.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(i.MBF(), e, t);
    }
    serializeBinary() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(i.M(), e, t);
    }
    serializeBase64String() {
      var e = new p.BinaryWriter();
      return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  Y;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Broadcast.BeginBroadcastSession#1`, d(ee, t, n), te, {
      ePrivilege: 1,
    });
  }
  e.BeginBroadcastSession = t;
  function n(e, t, n) {
    return e.SendMsg(`Broadcast.EndBroadcastSession#1`, d(ne, t, n), re, {
      ePrivilege: 1,
    });
  }
  e.EndBroadcastSession = n;
  function r(e, t, n) {
    return e.SendMsg(`Broadcast.StartBroadcastUpload#1`, d(ie, t, n), ae, {
      ePrivilege: 1,
    });
  }
  e.StartBroadcastUpload = r;
  function i(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      d(me, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastUploadStop = i;
  function a(e, t, n) {
    return e.SendMsg(`Broadcast.WatchBroadcast#1`, d(_, t, n), v, {
      ePrivilege: 2,
    });
  }
  e.WatchBroadcast = a;
  function o(e, t) {
    return e.SendNotification(`Broadcast.HeartbeatBroadcast#1`, d(ce, t), {
      ePrivilege: 2,
    });
  }
  e.HeartbeatBroadcast = o;
  function s(e, t) {
    return e.SendNotification(`Broadcast.StopWatchingBroadcast#1`, d(le, t), {
      ePrivilege: 2,
    });
  }
  e.StopWatchingBroadcast = s;
  function c(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastStatus#1`, d(oe, t, n), se, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastStatus = c;
  function l(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, d(h, t, n), g, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastThumbnail = l;
  function u(e, t, n) {
    return e.SendMsg(`Broadcast.InviteToBroadcast#1`, d(ue, t, n), de, {
      ePrivilege: 1,
    });
  }
  e.InviteToBroadcast = u;
  function f(e, t, n) {
    return e.SendMsg(
      `Broadcast.SendBroadcastStateToServer#1`,
      d(fe, t, n),
      pe,
      { ePrivilege: 1 },
    );
  }
  e.SendBroadcastStateToServer = f;
  function p(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      d(he, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastSessionHeartbeat = p;
  function m(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, d(D, t, n), O, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastChatInfo = m;
  function y(e, t, n) {
    return e.SendMsg(`Broadcast.PostChatMessage#1`, d(k, t, n), A, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.PostChatMessage = y;
  function b(e, t, n) {
    return e.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, d(j, t, n), M, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.UpdateChatMessageFlair = b;
  function x(e, t, n) {
    return e.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, d(N, t, n), P, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.MuteBroadcastChatUser = x;
  function S(e, t, n) {
    return e.SendMsg(`Broadcast.RemoveUserChatText#1`, d(F, t, n), I, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.RemoveUserChatText = S;
  function C(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, d(L, t, n), R, {
      ePrivilege: 1,
    });
  }
  e.GetBroadcastChatUserNames = C;
  function w(e, t, n) {
    return e.SendMsg(`Broadcast.StartBuildClip#1`, d(ge, t, n), _e, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.StartBuildClip = w;
  function T(e, t, n) {
    return e.SendMsg(`Broadcast.GetBuildClipStatus#1`, d(ve, t, n), ye, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBuildClipStatus = T;
  function E(e, t, n) {
    return e.SendMsg(`Broadcast.SetClipDetails#1`, d(be, t, n), xe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetClipDetails = E;
  function z(e, t, n) {
    return e.SendMsg(`Broadcast.GetClipDetails#1`, d(Se, t, n), Ce, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetClipDetails = z;
  function B(e, t, n) {
    return e.SendMsg(`Broadcast.SetRTMPInfo#1`, d(we, t, n), Te, {
      ePrivilege: 1,
    });
  }
  e.SetRTMPInfo = B;
  function V(e, t, n) {
    return e.SendMsg(`Broadcast.GetRTMPInfo#1`, d(Ee, t, n), De, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRTMPInfo = V;
  function H(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      d(G, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyWebRTCHaveTURNServer = H;
  function U(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStartResult#1`, d(Me, t, n), Ne, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStartResult = U;
  function W(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStopped#1`, d(Pe, t, n), Fe, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStopped = W;
  function K(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCSetAnswer#1`, d(Ie, t, n), Le, {
      ePrivilege: 1,
    });
  }
  e.WebRTCSetAnswer = K;
  function q(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, d(We, t, n), Ge, {
      ePrivilege: 1,
    });
  }
  e.WebRTCLookupTURNServer = q;
  function J(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, d(Re, t, n), ze, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddHostCandidate = J;
  function Y(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, d(Be, t, n), Ve, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddViewerCandidate = Y;
  function X(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, d(He, t, n), Ue, {
      ePrivilege: 1,
    });
  }
  e.WebRTCGetHostCandidates = X;
  function Z(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, d(Oe, t, n), ke, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastUploadStats = Z;
  function Q(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, d(Ae, t, n), je, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastViewerStats = Q;
})((Y ||= {}));
var X;
(function (e) {
  (e.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: y,
  }),
    (e.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: b,
    }),
    (e.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: m,
    }),
    (e.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: x,
    }),
    (e.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: S,
    }),
    (e.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: E,
    }),
    (e.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: C,
    }),
    (e.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: w,
    }),
    (e.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: T,
    }),
    (e.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: W,
    }),
    (e.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: K,
    }),
    (e.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: q,
    }),
    (e.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: J,
    });
})((X ||= {}));
async function Z(e, t) {
  let n = i.STORE_BASE_URL + `video/details/` + e + `/0`,
    r = await fetch(n, { credentials: `include`, signal: t });
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let a = await r.json();
  if (a?.success != 1 && a?.success != `ready`)
    throw Error(`video/details on ` + e + ` answered ` + a?.success);
  return { appid: e, video_url: a.video_url, bookmark: a.bookmark };
}
function Q(e) {
  return [`video`, `vod`, e];
}
function $(e) {
  return { queryKey: Q(e), queryFn: ({ signal: t }) => Z(e, t), retry: !1 };
}
function Ke(e) {
  let { data: t, isPending: n } = f($(e));
  return { vodInfo: t, bLoading: n };
}
export { k as a, N as i, Ke as n, F as o, Y as r, j as s, $ as t };
