/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  K as t,
  Pt as n,
  St as r,
  _t as i,
  bt as a,
  g as o,
  gt as s,
  vt as c,
  wt as l,
  xt as u,
  yt as d,
} from "./chunk~de7f2df91c.js";
import "./chunk~1fa4b8f2ff.js";
import { t as f } from "./chunk~ede3e357a2.js";
function p(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${o.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var m = n(l(), 1),
  ee = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.permission || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            permission: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            gameid: { n: 2, br: d.readUint64String, bw: e.writeUint64String },
            client_instance_id: {
              n: 3,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            title: { n: 4, br: d.readString, bw: e.writeString },
            cellid: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            rtmp_token: {
              n: 6,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            thumbnail_upload: { n: 7, br: d.readBool, bw: e.writeBool },
            sysid: { n: 9, br: d.readUint32, bw: e.writeUint32 },
            allow_webrtc: { n: 10, br: d.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  te = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            thumbnail_upload_address: {
              n: 2,
              br: d.readString,
              bw: e.writeString,
            },
            thumbnail_upload_token: {
              n: 3,
              br: d.readString,
              bw: e.writeString,
            },
            thumbnail_interval_seconds: {
              n: 4,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            heartbeat_interval_seconds: {
              n: 5,
              br: d.readUint32,
              bw: e.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  ne = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Request`;
    }
  },
  re = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Response`;
    }
  },
  ie = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            cellid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            as_rtmp: { n: 3, br: d.readBool, bw: e.writeBool },
            delay_seconds: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            rtmp_token: {
              n: 5,
              d: `0`,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            upload_ip_address: { n: 6, br: d.readUint32, bw: e.writeUint32 },
            is_replay: { n: 7, br: d.readBool, bw: e.writeBool },
            sysid: { n: 8, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  ae = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.upload_token || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            upload_token: { n: 1, br: d.readString, bw: e.writeString },
            upload_address: { n: 2, br: d.readString, bw: e.writeString },
            broadcast_upload_id: {
              n: 3,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            enable_replay: { n: 6, br: d.readBool, bw: e.writeBool },
            http_address: { n: 7, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  h = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            upload_token: { n: 2, br: d.readString, bw: e.writeString },
            upload_address: { n: 3, br: d.readString, bw: e.writeString },
            http_address: { n: 4, br: d.readString, bw: e.writeString },
            broadcast_upload_id: {
              n: 5,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              n: 6,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            is_rtmp: { n: 7, br: d.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  oe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  se = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gameid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gameid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            title: { n: 2, br: d.readString, bw: e.writeString },
            num_viewers: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            permission: { n: 4, br: d.readInt32, bw: e.writeInt32 },
            is_rtmp: { n: 5, br: d.readBool, bw: e.writeBool },
            seconds_delay: { n: 6, br: d.readInt32, bw: e.writeInt32 },
            is_publisher: { n: 7, br: d.readBool, bw: e.writeBool },
            thumbnail_url: { n: 8, br: d.readString, bw: e.writeString },
            update_interval: { n: 9, br: d.readInt32, bw: e.writeInt32 },
            is_uploading: { n: 10, br: d.readBool, bw: e.writeBool },
            duration: { n: 11, br: d.readUint32, bw: e.writeUint32 },
            is_replay: { n: 12, br: d.readBool, bw: e.writeBool },
            is_capturing_vod: { n: 13, br: d.readBool, bw: e.writeBool },
            is_store_whitelisted: { n: 14, br: d.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  ce = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  le = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.thumbnail_url || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            thumbnail_url: { n: 1, br: d.readString, bw: e.writeString },
            update_interval: { n: 2, br: d.readInt32, bw: e.writeInt32 },
            num_viewers: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            duration: { n: 4, br: d.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  g = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            existing_broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            client_cell: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            watch_location: { n: 6, br: d.readEnum, bw: e.writeEnum },
            is_webrtc: { n: 7, br: d.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  _ = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.response || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            response: { n: 1, br: d.readEnum, bw: e.writeEnum },
            mpd_url: { n: 2, br: d.readString, bw: e.writeString },
            broadcast_id: {
              n: 3,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            gameid: { n: 4, br: d.readUint64String, bw: e.writeUint64String },
            title: { n: 5, br: d.readString, bw: e.writeString },
            num_viewers: { n: 6, br: d.readUint32, bw: e.writeUint32 },
            permission: { n: 7, br: d.readInt32, bw: e.writeInt32 },
            is_rtmp: { n: 8, br: d.readBool, bw: e.writeBool },
            seconds_delay: { n: 9, br: d.readInt32, bw: e.writeInt32 },
            viewer_token: {
              n: 10,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            hls_m3u8_master_url: { n: 11, br: d.readString, bw: e.writeString },
            heartbeat_interval: { n: 12, br: d.readInt32, bw: e.writeInt32 },
            thumbnail_url: { n: 13, br: d.readString, bw: e.writeString },
            is_webrtc: { n: 14, br: d.readBool, bw: e.writeBool },
            webrtc_session_id: {
              n: 15,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            webrtc_offer_sdp: { n: 16, br: d.readString, bw: e.writeString },
            webrtc_turn_server: { n: 17, br: d.readString, bw: e.writeString },
            is_replay: { n: 18, br: d.readBool, bw: e.writeBool },
            duration: { n: 19, br: d.readInt32, bw: e.writeInt32 },
            cdn_auth_url_parameters: {
              n: 20,
              br: d.readString,
              bw: e.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  v = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            representation: { n: 4, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  y = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  ue = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            approval_response: { n: 2, br: d.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  de = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.success || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { success: { n: 1, br: d.readBool, bw: e.writeBool } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  fe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.permission || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            permission: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            gameid: { n: 2, br: d.readUint64String, bw: e.writeUint64String },
            title: { n: 3, br: d.readString, bw: e.writeString },
            game_data_config: { n: 4, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Request`;
    }
  },
  pe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Response`;
    }
  },
  b = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            state: { n: 2, br: d.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  x = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  S = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            broadcast_relay_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            upload_result: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            too_many_poor_uploads: { n: 4, br: d.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  C = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  w = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            num_viewers: { n: 2, br: d.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  T = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_channel_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            broadcast_channel_name: {
              n: 2,
              br: d.readString,
              bw: e.writeString,
            },
            broadcast_channel_avatar: {
              n: 3,
              br: d.readString,
              bw: e.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  E = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.thumbnail_upload_token || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            thumbnail_upload_token: {
              n: 1,
              br: d.readString,
              bw: e.writeString,
            },
            thumbnail_broadcast_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            thumbnail_data: { n: 3, br: d.readBytes, bw: e.writeBytes },
            thumbnail_width: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            thumbnail_height: { n: 5, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  me = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_upload_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_upload_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            upload_result: { n: 2, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  D = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcaster_steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  O = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  k = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            client_ip: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            client_cell: { n: 4, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  A = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.chat_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            chat_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            view_url_template: { n: 3, br: d.readString, bw: e.writeString },
            flair_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  j = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.chat_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            chat_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            message: { n: 2, br: d.readString, bw: e.writeString },
            instance_id: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            language: { n: 4, d: 0, br: d.readUint32, bw: e.writeUint32 },
            country_code: { n: 5, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  M = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.persona_name || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            persona_name: { n: 1, br: d.readString, bw: e.writeString },
            in_game: { n: 2, br: d.readBool, bw: e.writeBool },
            result: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            cooldown_time_seconds: { n: 4, br: d.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  N = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.chat_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            chat_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            flair: { n: 2, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  P = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.result || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            result: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            chat_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            flair: { n: 3, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  F = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.chat_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            chat_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            muted: { n: 3, br: d.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Request`;
    }
  },
  I = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Response`;
    }
  },
  L = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.chat_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            chat_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Request`;
    }
  },
  R = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Response`;
    }
  },
  z = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.chat_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            chat_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readFixed64String,
              pbr: d.readPackedFixed64String,
              bw: e.writeRepeatedFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  he = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_names || s(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { persona_names: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  B = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steam_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steam_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            persona: { n: 2, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  ge = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            broadcast_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            first_segment: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            num_segments: { n: 4, br: d.readInt32, bw: e.writeInt32 },
            clip_description: { n: 5, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  _e = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_clip_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  V = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_clip_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Request`;
    }
  },
  ve = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Response`;
    }
  },
  ye = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_clip_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            start_time: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            end_time: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            video_description: { n: 4, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Request`;
    }
  },
  be = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Response`;
    }
  },
  xe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_clip_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  Se = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_clip_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            video_id: { n: 2, br: d.readUint64String, bw: e.writeUint64String },
            channel_id: {
              n: 3,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            app_id: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            accountid_broadcaster: {
              n: 5,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            accountid_clipmaker: { n: 6, br: d.readUint32, bw: e.writeUint32 },
            video_description: { n: 7, br: d.readString, bw: e.writeString },
            start_time: { n: 8, br: d.readUint32, bw: e.writeUint32 },
            length_milliseconds: { n: 9, br: d.readUint32, bw: e.writeUint32 },
            thumbnail_path: { n: 10, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  Ce = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_permission || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_permission: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            update_token: { n: 2, br: d.readBool, bw: e.writeBool },
            broadcast_delay: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            app_id: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            required_app_id: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            broadcast_chat_permission: {
              n: 6,
              d: 0,
              br: d.readEnum,
              bw: e.writeEnum,
            },
            broadcast_buffer: { n: 7, br: d.readInt32, bw: e.writeInt32 },
            steamid: {
              n: 8,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            chat_rate_limit: { n: 9, br: d.readUint32, bw: e.writeUint32 },
            enable_replay: { n: 10, br: d.readBool, bw: e.writeBool },
            is_partner_chat_only: { n: 11, br: d.readBool, bw: e.writeBool },
            wordban_list: { n: 12, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Request`;
    }
  },
  we = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Response`;
    }
  },
  Te = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.ip || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            ip: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  Ee = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_permission || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_permission: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            rtmp_host: { n: 2, br: d.readString, bw: e.writeString },
            rtmp_token: { n: 3, br: d.readString, bw: e.writeString },
            broadcast_delay: { n: 4, br: d.readInt32, bw: e.writeInt32 },
            app_id: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            required_app_id: { n: 6, br: d.readUint32, bw: e.writeUint32 },
            broadcast_chat_permission: {
              n: 7,
              br: d.readEnum,
              bw: e.writeEnum,
            },
            broadcast_buffer: { n: 8, br: d.readInt32, bw: e.writeInt32 },
            steamid: {
              n: 9,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            chat_rate_limit: { n: 10, br: d.readUint32, bw: e.writeUint32 },
            enable_replay: { n: 11, br: d.readBool, bw: e.writeBool },
            is_partner_chat_only: { n: 12, br: d.readBool, bw: e.writeBool },
            wordban_list: { n: 13, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  De = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.row_limit || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            row_limit: { n: 1, d: 100, br: d.readUint32, bw: e.writeUint32 },
            start_time: { n: 2, d: 0, br: d.readUint32, bw: e.writeUint32 },
            upload_id: {
              n: 3,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            steamid: {
              n: 4,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            session_id: {
              n: 5,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  Oe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_stats || s(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { upload_stats: { n: 1, c: H, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  H = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.upload_result || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            upload_result: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            time_stopped: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            seconds_uploaded: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            max_viewers: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            resolution_x: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            resolution_y: { n: 6, br: d.readUint32, bw: e.writeUint32 },
            avg_bandwidth: { n: 7, br: d.readUint32, bw: e.writeUint32 },
            total_bytes: {
              n: 8,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            app_id: { n: 9, br: d.readUint32, bw: e.writeUint32 },
            total_unique_viewers: {
              n: 10,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            total_seconds_watched: {
              n: 11,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            time_started: { n: 12, br: d.readUint32, bw: e.writeUint32 },
            upload_id: {
              n: 13,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            local_address: { n: 14, br: d.readString, bw: e.writeString },
            remote_address: { n: 15, br: d.readString, bw: e.writeString },
            frames_per_second: { n: 16, br: d.readUint32, bw: e.writeUint32 },
            num_representations: { n: 17, br: d.readUint32, bw: e.writeUint32 },
            app_name: { n: 18, br: d.readString, bw: e.writeString },
            is_replay: { n: 19, br: d.readBool, bw: e.writeBool },
            session_id: {
              n: 20,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  ke = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.upload_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            upload_id: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  Ae = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.viewer_stats || s(e.M()),
        m.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            viewer_stats: { n: 1, c: U, r: !0, q: !0 },
            country_stats: { n: 2, c: W, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  U = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.time || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            time: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            num_viewers: { n: 2, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  W = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.country_code || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            country_code: { n: 1, br: d.readString, bw: e.writeString },
            num_viewers: { n: 2, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  je = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.webrtc_session_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            started: { n: 2, br: d.readBool, bw: e.writeBool },
            offer: { n: 3, br: d.readString, bw: e.writeString },
            resolution_x: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            resolution_y: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            fps: { n: 6, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Request`;
    }
  },
  Me = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Response`;
    }
  },
  Ne = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.webrtc_session_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Request`;
    }
  },
  Pe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Response`;
    }
  },
  Fe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcaster_steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            answer: { n: 3, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Request`;
    }
  },
  Ie = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Response`;
    }
  },
  G = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.sdp_mid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sdp_mid: { n: 1, br: d.readString, bw: e.writeString },
            sdp_mline_index: { n: 2, br: d.readInt32, bw: e.writeInt32 },
            candidate: { n: 3, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  Le = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.webrtc_session_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            candidate: { n: 2, c: G },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
    }
  },
  Re = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Response`;
    }
  },
  ze = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcaster_steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            candidate: { n: 3, c: G },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
    }
  },
  Be = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Response`;
    }
  },
  Ve = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcaster_steamid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            candidate_generation: { n: 3, br: d.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  He = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.candidate_generation || s(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            candidate_generation: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            candidates: { n: 2, c: G, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  K = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_session_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  Ue = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.cellid || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { cellid: { n: 1, br: d.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  We = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.turn_server || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            turn_server: { n: 1, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  Ge = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_session_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            turn_server: { n: 2, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  q = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_session_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            viewer_steamid: {
              n: 3,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            viewer_token: {
              n: 4,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  J = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_session_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            answer: { n: 3, br: d.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  Y = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.broadcast_session_id || s(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            candidate: { n: 3, c: G },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  X;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`Broadcast.BeginBroadcastSession#1`, t(ee, n, r), te, {
      ePrivilege: 1,
    });
  }
  e.BeginBroadcastSession = n;
  function r(e, n, r) {
    return e.SendMsg(`Broadcast.EndBroadcastSession#1`, t(ne, n, r), re, {
      ePrivilege: 1,
    });
  }
  e.EndBroadcastSession = r;
  function i(e, n, r) {
    return e.SendMsg(`Broadcast.StartBroadcastUpload#1`, t(ie, n, r), ae, {
      ePrivilege: 1,
    });
  }
  e.StartBroadcastUpload = i;
  function a(e, n) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      t(me, n),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastUploadStop = a;
  function o(e, n, r) {
    return e.SendMsg(`Broadcast.WatchBroadcast#1`, t(g, n, r), _, {
      ePrivilege: 2,
    });
  }
  e.WatchBroadcast = o;
  function s(e, n) {
    return e.SendNotification(`Broadcast.HeartbeatBroadcast#1`, t(v, n), {
      ePrivilege: 2,
    });
  }
  e.HeartbeatBroadcast = s;
  function c(e, n) {
    return e.SendNotification(`Broadcast.StopWatchingBroadcast#1`, t(y, n), {
      ePrivilege: 2,
    });
  }
  e.StopWatchingBroadcast = c;
  function l(e, n, r) {
    return e.SendMsg(`Broadcast.GetBroadcastStatus#1`, t(oe, n, r), se, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastStatus = l;
  function u(e, n, r) {
    return e.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, t(ce, n, r), le, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastThumbnail = u;
  function d(e, n, r) {
    return e.SendMsg(`Broadcast.InviteToBroadcast#1`, t(ue, n, r), de, {
      ePrivilege: 1,
    });
  }
  e.InviteToBroadcast = d;
  function f(e, n, r) {
    return e.SendMsg(
      `Broadcast.SendBroadcastStateToServer#1`,
      t(fe, n, r),
      pe,
      { ePrivilege: 1 },
    );
  }
  e.SendBroadcastStateToServer = f;
  function p(e, n) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      t(O, n),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastSessionHeartbeat = p;
  function m(e, n, r) {
    return e.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, t(k, n, r), A, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastChatInfo = m;
  function h(e, n, r) {
    return e.SendMsg(`Broadcast.PostChatMessage#1`, t(j, n, r), M, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  e.PostChatMessage = h;
  function b(e, n, r) {
    return e.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, t(N, n, r), P, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.UpdateChatMessageFlair = b;
  function x(e, n, r) {
    return e.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, t(F, n, r), I, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  e.MuteBroadcastChatUser = x;
  function S(e, n, r) {
    return e.SendMsg(`Broadcast.RemoveUserChatText#1`, t(L, n, r), R, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RemoveUserChatText = S;
  function C(e, n, r) {
    return e.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, t(z, n, r), he, {
      ePrivilege: 1,
    });
  }
  e.GetBroadcastChatUserNames = C;
  function w(e, n, r) {
    return e.SendMsg(`Broadcast.StartBuildClip#1`, t(ge, n, r), _e, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.StartBuildClip = w;
  function T(e, n, r) {
    return e.SendMsg(`Broadcast.GetBuildClipStatus#1`, t(V, n, r), ve, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBuildClipStatus = T;
  function E(e, n, r) {
    return e.SendMsg(`Broadcast.SetClipDetails#1`, t(ye, n, r), be, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetClipDetails = E;
  function D(e, n, r) {
    return e.SendMsg(`Broadcast.GetClipDetails#1`, t(xe, n, r), Se, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetClipDetails = D;
  function B(e, n, r) {
    return e.SendMsg(`Broadcast.SetRTMPInfo#1`, t(Ce, n, r), we, {
      ePrivilege: 1,
    });
  }
  e.SetRTMPInfo = B;
  function H(e, n, r) {
    return e.SendMsg(`Broadcast.GetRTMPInfo#1`, t(Te, n, r), Ee, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRTMPInfo = H;
  function U(e, n) {
    return e.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      t(Ge, n),
      { ePrivilege: 1 },
    );
  }
  e.NotifyWebRTCHaveTURNServer = U;
  function W(e, n, r) {
    return e.SendMsg(`Broadcast.WebRTCStartResult#1`, t(je, n, r), Me, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStartResult = W;
  function G(e, n, r) {
    return e.SendMsg(`Broadcast.WebRTCStopped#1`, t(Ne, n, r), Pe, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStopped = G;
  function K(e, n, r) {
    return e.SendMsg(`Broadcast.WebRTCSetAnswer#1`, t(Fe, n, r), Ie, {
      ePrivilege: 1,
    });
  }
  e.WebRTCSetAnswer = K;
  function q(e, n, r) {
    return e.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, t(Ue, n, r), We, {
      ePrivilege: 1,
    });
  }
  e.WebRTCLookupTURNServer = q;
  function J(e, n, r) {
    return e.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, t(Le, n, r), Re, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddHostCandidate = J;
  function Y(e, n, r) {
    return e.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, t(ze, n, r), Be, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddViewerCandidate = Y;
  function X(e, n, r) {
    return e.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, t(Ve, n, r), He, {
      ePrivilege: 1,
    });
  }
  e.WebRTCGetHostCandidates = X;
  function Z(e, n, r) {
    return e.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, t(De, n, r), Oe, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastUploadStats = Z;
  function Q(e, n, r) {
    return e.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, t(ke, n, r), Ae, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastViewerStats = Q;
})((X ||= {}));
var Z;
(function (e) {
  ((e.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: b,
  }),
    (e.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: x,
    }),
    (e.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: h,
    }),
    (e.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: S,
    }),
    (e.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: C,
    }),
    (e.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: D,
    }),
    (e.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: w,
    }),
    (e.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: T,
    }),
    (e.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: E,
    }),
    (e.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: K,
    }),
    (e.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: q,
    }),
    (e.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: J,
    }),
    (e.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: Y,
    }));
})((Z ||= {}));
async function Q(e, t) {
  let n = o.STORE_BASE_URL + `video/details/` + e + `/0`,
    r = await fetch(n, { credentials: `include`, signal: t });
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success != 1 && i?.success != `ready`)
    throw Error(`video/details on ` + e + ` answered ` + i?.success);
  return { appid: e, video_url: i.video_url, bookmark: i.bookmark };
}
function Ke(e) {
  return [`video`, `vod`, e];
}
function $(e) {
  return { queryKey: Ke(e), queryFn: ({ signal: t }) => Q(e, t), retry: !1 };
}
function qe(e) {
  let { data: t, isPending: n } = f($(e));
  return { vodInfo: t, bLoading: n };
}
export { j as a, p as c, F as i, qe as n, L as o, X as r, N as s, $ as t };
