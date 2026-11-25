/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { i as e, n as t, t as n } from "./chunk~f025431ab0.js";
import {
  $n as r,
  A as i,
  Cr as a,
  Ct as o,
  Dt as s,
  Ft as c,
  G as l,
  Jt as u,
  L as d,
  Ln as f,
  N as p,
  Pt as m,
  Qn as h,
  Vn as ee,
  W as g,
  Xn as _,
  Xt as te,
  Y as ne,
  Yn as v,
  Zn as y,
  er as b,
  hn as x,
  i as re,
  k as S,
  nr as C,
  o as w,
  pt as ie,
  qn as ae,
  qt as T,
  rr as oe,
  tr as E,
  vn as se,
} from "./chunk~d3515eca4e.js";
import {
  $o as D,
  Bo as ce,
  Go as le,
  Ho as ue,
  Io as de,
  Jo as fe,
  Ko as pe,
  Qo as me,
  Uo as he,
  Vo as O,
  Wo as ge,
  Xo as _e,
  Yo as ve,
  Zo as ye,
  as as be,
  bs as k,
  es as xe,
  is as Se,
  lc as A,
  ns as Ce,
  os as j,
  qo as we,
  ss as M,
  us as Te,
  vs as Ee,
  xs as N,
  zo as De,
} from "./chunk~e464778a03.js";
import { l as Oe, u as ke } from "./chunk~0ef0cd2c00.js";
var P = e(ke()),
  F = e(oe(), 1),
  Ae = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: h.readInt32, bw: C.writeInt32 },
            gameid: { n: 2, br: h.readUint64String, bw: C.writeUint64String },
            client_instance_id: {
              n: 3,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            title: { n: 4, br: h.readString, bw: C.writeString },
            cellid: { n: 5, br: h.readUint32, bw: C.writeUint32 },
            rtmp_token: {
              n: 6,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            thumbnail_upload: { n: 7, br: h.readBool, bw: C.writeBool },
            sysid: { n: 9, br: h.readUint32, bw: C.writeUint32 },
            allow_webrtc: { n: 10, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  je = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            thumbnail_upload_address: {
              n: 2,
              br: h.readString,
              bw: C.writeString,
            },
            thumbnail_upload_token: {
              n: 3,
              br: h.readString,
              bw: C.writeString,
            },
            thumbnail_interval_seconds: {
              n: 4,
              br: h.readUint32,
              bw: C.writeUint32,
            },
            heartbeat_interval_seconds: {
              n: 5,
              br: h.readUint32,
              bw: C.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  Me = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Request`;
    }
  },
  Ne = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Response`;
    }
  },
  Pe = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            cellid: { n: 2, br: h.readUint32, bw: C.writeUint32 },
            as_rtmp: { n: 3, br: h.readBool, bw: C.writeBool },
            delay_seconds: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            rtmp_token: {
              n: 5,
              d: `0`,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            upload_ip_address: { n: 6, br: h.readUint32, bw: C.writeUint32 },
            is_replay: { n: 7, br: h.readBool, bw: C.writeBool },
            sysid: { n: 8, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  Fe = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_token || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_token: { n: 1, br: h.readString, bw: C.writeString },
            upload_address: { n: 2, br: h.readString, bw: C.writeString },
            broadcast_upload_id: {
              n: 3,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            enable_replay: { n: 6, br: h.readBool, bw: C.writeBool },
            http_address: { n: 7, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  Ie = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            upload_token: { n: 2, br: h.readString, bw: C.writeString },
            upload_address: { n: 3, br: h.readString, bw: C.writeString },
            http_address: { n: 4, br: h.readString, bw: C.writeString },
            broadcast_upload_id: {
              n: 5,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              n: 6,
              br: h.readUint32,
              bw: C.writeUint32,
            },
            is_rtmp: { n: 7, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  Le = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  Re = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: h.readUint64String, bw: C.writeUint64String },
            title: { n: 2, br: h.readString, bw: C.writeString },
            num_viewers: { n: 3, br: h.readUint32, bw: C.writeUint32 },
            permission: { n: 4, br: h.readInt32, bw: C.writeInt32 },
            is_rtmp: { n: 5, br: h.readBool, bw: C.writeBool },
            seconds_delay: { n: 6, br: h.readInt32, bw: C.writeInt32 },
            is_publisher: { n: 7, br: h.readBool, bw: C.writeBool },
            thumbnail_url: { n: 8, br: h.readString, bw: C.writeString },
            update_interval: { n: 9, br: h.readInt32, bw: C.writeInt32 },
            is_uploading: { n: 10, br: h.readBool, bw: C.writeBool },
            duration: { n: 11, br: h.readUint32, bw: C.writeUint32 },
            is_replay: { n: 12, br: h.readBool, bw: C.writeBool },
            is_capturing_vod: { n: 13, br: h.readBool, bw: C.writeBool },
            is_store_whitelisted: { n: 14, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  ze = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  Be = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_url || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_url: { n: 1, br: h.readString, bw: C.writeString },
            update_interval: { n: 2, br: h.readInt32, bw: C.writeInt32 },
            num_viewers: { n: 3, br: h.readInt32, bw: C.writeInt32 },
            duration: { n: 4, br: h.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  Ve = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            existing_broadcast_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            client_cell: { n: 5, br: h.readUint32, bw: C.writeUint32 },
            watch_location: { n: 6, br: h.readEnum, bw: C.writeEnum },
            is_webrtc: { n: 7, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  He = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.response || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            response: { n: 1, br: h.readEnum, bw: C.writeEnum },
            mpd_url: { n: 2, br: h.readString, bw: C.writeString },
            broadcast_id: {
              n: 3,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            gameid: { n: 4, br: h.readUint64String, bw: C.writeUint64String },
            title: { n: 5, br: h.readString, bw: C.writeString },
            num_viewers: { n: 6, br: h.readUint32, bw: C.writeUint32 },
            permission: { n: 7, br: h.readInt32, bw: C.writeInt32 },
            is_rtmp: { n: 8, br: h.readBool, bw: C.writeBool },
            seconds_delay: { n: 9, br: h.readInt32, bw: C.writeInt32 },
            viewer_token: {
              n: 10,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            hls_m3u8_master_url: { n: 11, br: h.readString, bw: C.writeString },
            heartbeat_interval: { n: 12, br: h.readInt32, bw: C.writeInt32 },
            thumbnail_url: { n: 13, br: h.readString, bw: C.writeString },
            is_webrtc: { n: 14, br: h.readBool, bw: C.writeBool },
            webrtc_session_id: {
              n: 15,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            webrtc_offer_sdp: { n: 16, br: h.readString, bw: C.writeString },
            webrtc_turn_server: { n: 17, br: h.readString, bw: C.writeString },
            is_replay: { n: 18, br: h.readBool, bw: C.writeBool },
            duration: { n: 19, br: h.readInt32, bw: C.writeInt32 },
            cdn_auth_url_parameters: {
              n: 20,
              br: h.readString,
              bw: C.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  Ue = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            representation: { n: 4, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  We = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  Ge = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            approval_response: { n: 2, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  Ke = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: h.readBool, bw: C.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  qe = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: h.readInt32, bw: C.writeInt32 },
            gameid: { n: 2, br: h.readUint64String, bw: C.writeUint64String },
            title: { n: 3, br: h.readString, bw: C.writeString },
            game_data_config: { n: 4, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Request`;
    }
  },
  Je = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Response`;
    }
  },
  Ye = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            state: { n: 2, br: h.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  Xe = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  Ze = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            broadcast_relay_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            upload_result: { n: 3, br: h.readUint32, bw: C.writeUint32 },
            too_many_poor_uploads: { n: 4, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  Qe = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  $e = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            num_viewers: { n: 2, br: h.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  et = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            broadcast_channel_name: {
              n: 2,
              br: h.readString,
              bw: C.writeString,
            },
            broadcast_channel_avatar: {
              n: 3,
              br: h.readString,
              bw: C.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  tt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_upload_token || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readString,
              bw: C.writeString,
            },
            thumbnail_broadcast_session_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            thumbnail_data: { n: 3, br: h.readBytes, bw: C.writeBytes },
            thumbnail_width: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            thumbnail_height: { n: 5, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  nt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_upload_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            upload_result: { n: 2, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  rt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  it = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  at = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            client_ip: { n: 3, br: h.readUint32, bw: C.writeUint32 },
            client_cell: { n: 4, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  ot = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [4], null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            view_url_template: { n: 3, br: h.readString, bw: C.writeString },
            flair_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: C.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  st = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            message: { n: 2, br: h.readString, bw: C.writeString },
            instance_id: { n: 3, br: h.readUint32, bw: C.writeUint32 },
            language: { n: 4, d: 0, br: h.readUint32, bw: C.writeUint32 },
            country_code: { n: 5, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  ct = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_name || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            persona_name: { n: 1, br: h.readString, bw: C.writeString },
            in_game: { n: 2, br: h.readBool, bw: C.writeBool },
            result: { n: 3, br: h.readInt32, bw: C.writeInt32 },
            cooldown_time_seconds: { n: 4, br: h.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  lt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            flair: { n: 2, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  ut = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            result: { n: 1, br: h.readInt32, bw: C.writeInt32 },
            chat_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            flair: { n: 3, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  dt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            muted: { n: 3, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Request`;
    }
  },
  ft = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Response`;
    }
  },
  pt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Request`;
    }
  },
  mt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Response`;
    }
  },
  ht = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [2], null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              r: !0,
              q: !0,
              br: h.readFixed64String,
              pbr: h.readPackedFixed64String,
              bw: C.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  gt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_names || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { persona_names: { n: 1, c: _t, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  _t = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steam_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            persona: { n: 2, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  vt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            broadcast_session_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            first_segment: { n: 3, br: h.readInt32, bw: C.writeInt32 },
            num_segments: { n: 4, br: h.readInt32, bw: C.writeInt32 },
            clip_description: { n: 5, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  yt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  bt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Request`;
    }
  },
  xt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Response`;
    }
  },
  St = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            start_time: { n: 2, br: h.readUint32, bw: C.writeUint32 },
            end_time: { n: 3, br: h.readUint32, bw: C.writeUint32 },
            video_description: { n: 4, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Request`;
    }
  },
  Ct = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Response`;
    }
  },
  wt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  Tt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            video_id: { n: 2, br: h.readUint64String, bw: C.writeUint64String },
            channel_id: {
              n: 3,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            app_id: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            accountid_broadcaster: {
              n: 5,
              br: h.readUint32,
              bw: C.writeUint32,
            },
            accountid_clipmaker: { n: 6, br: h.readUint32, bw: C.writeUint32 },
            video_description: { n: 7, br: h.readString, bw: C.writeString },
            start_time: { n: 8, br: h.readUint32, bw: C.writeUint32 },
            length_milliseconds: { n: 9, br: h.readUint32, bw: C.writeUint32 },
            thumbnail_path: { n: 10, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  Et = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: h.readInt32, bw: C.writeInt32 },
            update_token: { n: 2, br: h.readBool, bw: C.writeBool },
            broadcast_delay: { n: 3, br: h.readInt32, bw: C.writeInt32 },
            app_id: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            required_app_id: { n: 5, br: h.readUint32, bw: C.writeUint32 },
            broadcast_chat_permission: {
              n: 6,
              d: 0,
              br: h.readEnum,
              bw: C.writeEnum,
            },
            broadcast_buffer: { n: 7, br: h.readInt32, bw: C.writeInt32 },
            steamid: {
              n: 8,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            chat_rate_limit: { n: 9, br: h.readUint32, bw: C.writeUint32 },
            enable_replay: { n: 10, br: h.readBool, bw: C.writeBool },
            is_partner_chat_only: { n: 11, br: h.readBool, bw: C.writeBool },
            wordban_list: { n: 12, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Request`;
    }
  },
  Dt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Response`;
    }
  },
  Ot = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: h.readUint32, bw: C.writeUint32 },
            steamid: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  kt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: h.readInt32, bw: C.writeInt32 },
            rtmp_host: { n: 2, br: h.readString, bw: C.writeString },
            rtmp_token: { n: 3, br: h.readString, bw: C.writeString },
            broadcast_delay: { n: 4, br: h.readInt32, bw: C.writeInt32 },
            app_id: { n: 5, br: h.readUint32, bw: C.writeUint32 },
            required_app_id: { n: 6, br: h.readUint32, bw: C.writeUint32 },
            broadcast_chat_permission: {
              n: 7,
              br: h.readEnum,
              bw: C.writeEnum,
            },
            broadcast_buffer: { n: 8, br: h.readInt32, bw: C.writeInt32 },
            steamid: {
              n: 9,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            chat_rate_limit: { n: 10, br: h.readUint32, bw: C.writeUint32 },
            enable_replay: { n: 11, br: h.readBool, bw: C.writeBool },
            is_partner_chat_only: { n: 12, br: h.readBool, bw: C.writeBool },
            wordban_list: { n: 13, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  At = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.row_limit || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            row_limit: { n: 1, d: 100, br: h.readUint32, bw: C.writeUint32 },
            start_time: { n: 2, d: 0, br: h.readUint32, bw: C.writeUint32 },
            upload_id: {
              n: 3,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            steamid: {
              n: 4,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            session_id: {
              n: 5,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  jt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_stats || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { upload_stats: { n: 1, c: Mt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  Mt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_result || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_result: { n: 1, br: h.readUint32, bw: C.writeUint32 },
            time_stopped: { n: 2, br: h.readUint32, bw: C.writeUint32 },
            seconds_uploaded: { n: 3, br: h.readUint32, bw: C.writeUint32 },
            max_viewers: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            resolution_x: { n: 5, br: h.readUint32, bw: C.writeUint32 },
            resolution_y: { n: 6, br: h.readUint32, bw: C.writeUint32 },
            avg_bandwidth: { n: 7, br: h.readUint32, bw: C.writeUint32 },
            total_bytes: {
              n: 8,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            app_id: { n: 9, br: h.readUint32, bw: C.writeUint32 },
            total_unique_viewers: {
              n: 10,
              br: h.readUint32,
              bw: C.writeUint32,
            },
            total_seconds_watched: {
              n: 11,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            time_started: { n: 12, br: h.readUint32, bw: C.writeUint32 },
            upload_id: {
              n: 13,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            local_address: { n: 14, br: h.readString, bw: C.writeString },
            remote_address: { n: 15, br: h.readString, bw: C.writeString },
            frames_per_second: { n: 16, br: h.readUint32, bw: C.writeUint32 },
            num_representations: { n: 17, br: h.readUint32, bw: C.writeUint32 },
            app_name: { n: 18, br: h.readString, bw: C.writeString },
            is_replay: { n: 19, br: h.readBool, bw: C.writeBool },
            session_id: {
              n: 20,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  Nt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            steamid: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  Pt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.viewer_stats || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            viewer_stats: { n: 1, c: Ft, r: !0, q: !0 },
            country_stats: { n: 2, c: It, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  Ft = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: h.readUint32, bw: C.writeUint32 },
            num_viewers: { n: 2, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  It = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: h.readString, bw: C.writeString },
            num_viewers: { n: 2, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  Lt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            started: { n: 2, br: h.readBool, bw: C.writeBool },
            offer: { n: 3, br: h.readString, bw: C.writeString },
            resolution_x: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            resolution_y: { n: 5, br: h.readUint32, bw: C.writeUint32 },
            fps: { n: 6, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Request`;
    }
  },
  Rt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Response`;
    }
  },
  zt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Request`;
    }
  },
  Bt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Response`;
    }
  },
  Vt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            answer: { n: 3, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Request`;
    }
  },
  Ht = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Response`;
    }
  },
  I = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sdp_mid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sdp_mid: { n: 1, br: h.readString, bw: C.writeString },
            sdp_mline_index: { n: 2, br: h.readInt32, bw: C.writeInt32 },
            candidate: { n: 3, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  Ut = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            candidate: { n: 2, c: I },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
    }
  },
  Wt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Response`;
    }
  },
  Gt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            candidate: { n: 3, c: I },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
    }
  },
  Kt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Response`;
    }
  },
  qt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            candidate_generation: { n: 3, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  Jt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.candidate_generation || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            candidate_generation: { n: 1, br: h.readUint32, bw: C.writeUint32 },
            candidates: { n: 2, c: I, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  Yt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  Xt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cellid || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cellid: { n: 1, br: h.readUint32, bw: C.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  Zt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.turn_server || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            turn_server: { n: 1, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  Qt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            turn_server: { n: 2, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  $t = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            viewer_steamid: {
              n: 3,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            viewer_token: {
              n: 4,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  en = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            answer: { n: 3, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  tn = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            candidate: { n: 3, c: I },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  nn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Broadcast.BeginBroadcastSession#1`, u(Ae, t, n), je, {
      ePrivilege: 1,
    });
  }
  e.BeginBroadcastSession = t;
  function n(e, t, n) {
    return e.SendMsg(`Broadcast.EndBroadcastSession#1`, u(Me, t, n), Ne, {
      ePrivilege: 1,
    });
  }
  e.EndBroadcastSession = n;
  function r(e, t, n) {
    return e.SendMsg(`Broadcast.StartBroadcastUpload#1`, u(Pe, t, n), Fe, {
      ePrivilege: 1,
    });
  }
  e.StartBroadcastUpload = r;
  function i(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      u(nt, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastUploadStop = i;
  function a(e, t, n) {
    return e.SendMsg(`Broadcast.WatchBroadcast#1`, u(Ve, t, n), He, {
      ePrivilege: 2,
    });
  }
  e.WatchBroadcast = a;
  function o(e, t) {
    return e.SendNotification(`Broadcast.HeartbeatBroadcast#1`, u(Ue, t), {
      ePrivilege: 2,
    });
  }
  e.HeartbeatBroadcast = o;
  function s(e, t) {
    return e.SendNotification(`Broadcast.StopWatchingBroadcast#1`, u(We, t), {
      ePrivilege: 2,
    });
  }
  e.StopWatchingBroadcast = s;
  function c(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastStatus#1`, u(Le, t, n), Re, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastStatus = c;
  function l(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, u(ze, t, n), Be, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastThumbnail = l;
  function d(e, t, n) {
    return e.SendMsg(`Broadcast.InviteToBroadcast#1`, u(Ge, t, n), Ke, {
      ePrivilege: 1,
    });
  }
  e.InviteToBroadcast = d;
  function f(e, t, n) {
    return e.SendMsg(
      `Broadcast.SendBroadcastStateToServer#1`,
      u(qe, t, n),
      Je,
      { ePrivilege: 1 },
    );
  }
  e.SendBroadcastStateToServer = f;
  function p(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      u(it, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastSessionHeartbeat = p;
  function m(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, u(at, t, n), ot, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastChatInfo = m;
  function h(e, t, n) {
    return e.SendMsg(`Broadcast.PostChatMessage#1`, u(st, t, n), ct, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  e.PostChatMessage = h;
  function ee(e, t, n) {
    return e.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, u(lt, t, n), ut, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.UpdateChatMessageFlair = ee;
  function g(e, t, n) {
    return e.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, u(dt, t, n), ft, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  e.MuteBroadcastChatUser = g;
  function _(e, t, n) {
    return e.SendMsg(`Broadcast.RemoveUserChatText#1`, u(pt, t, n), mt, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RemoveUserChatText = _;
  function te(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, u(ht, t, n), gt, {
      ePrivilege: 1,
    });
  }
  e.GetBroadcastChatUserNames = te;
  function ne(e, t, n) {
    return e.SendMsg(`Broadcast.StartBuildClip#1`, u(vt, t, n), yt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.StartBuildClip = ne;
  function v(e, t, n) {
    return e.SendMsg(`Broadcast.GetBuildClipStatus#1`, u(bt, t, n), xt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBuildClipStatus = v;
  function y(e, t, n) {
    return e.SendMsg(`Broadcast.SetClipDetails#1`, u(St, t, n), Ct, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetClipDetails = y;
  function b(e, t, n) {
    return e.SendMsg(`Broadcast.GetClipDetails#1`, u(wt, t, n), Tt, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetClipDetails = b;
  function x(e, t, n) {
    return e.SendMsg(`Broadcast.SetRTMPInfo#1`, u(Et, t, n), Dt, {
      ePrivilege: 1,
    });
  }
  e.SetRTMPInfo = x;
  function re(e, t, n) {
    return e.SendMsg(`Broadcast.GetRTMPInfo#1`, u(Ot, t, n), kt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRTMPInfo = re;
  function S(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      u(Qt, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyWebRTCHaveTURNServer = S;
  function C(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStartResult#1`, u(Lt, t, n), Rt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStartResult = C;
  function w(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStopped#1`, u(zt, t, n), Bt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStopped = w;
  function ie(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCSetAnswer#1`, u(Vt, t, n), Ht, {
      ePrivilege: 1,
    });
  }
  e.WebRTCSetAnswer = ie;
  function ae(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, u(Xt, t, n), Zt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCLookupTURNServer = ae;
  function T(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, u(Ut, t, n), Wt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddHostCandidate = T;
  function oe(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, u(Gt, t, n), Kt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddViewerCandidate = oe;
  function E(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, u(qt, t, n), Jt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCGetHostCandidates = E;
  function se(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, u(At, t, n), jt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastUploadStats = se;
  function D(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, u(Nt, t, n), Pt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastViewerStats = D;
})((nn ||= {}));
var rn;
((function (e) {
  ((e.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: Ye,
  }),
    (e.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: Xe,
    }),
    (e.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: Ie,
    }),
    (e.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: Ze,
    }),
    (e.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: Qe,
    }),
    (e.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: rt,
    }),
    (e.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: $e,
    }),
    (e.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: et,
    }),
    (e.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: tt,
    }),
    (e.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: Yt,
    }),
    (e.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: $t,
    }),
    (e.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: en,
    }),
    (e.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: tn,
    }));
})((rn ||= {})),
  m.CHAT_BASE_URL + ``);
var an = m.CHAT_BASE_URL + `public/images/broadcast/yule_30x30.png`,
  L = class {
    bValid = !1;
    stream = { 0: `#Broadcast_EnglishMain` };
    name = ``;
    appName = ``;
    appID = 0;
    link = ``;
    linkName = ``;
    tabIcon = ``;
    offlineImage = ``;
    gidEvent = ``;
    constructor(e) {
      (g(this), this.init(e));
    }
    init(e) {
      ((this.bValid = e.bValid),
        (this.stream = e.stream),
        (this.name = e.name),
        (this.appName = e.appName ?? ``),
        (this.appID = e.appID),
        (this.link = e.link),
        (this.linkName = e.linkName),
        (this.tabIcon = e.tabIcon ?? ``),
        (this.offlineImage = e.offlineImage),
        (this.gidEvent = e.gidEvent ?? ``));
    }
  };
(p([l], L.prototype, `bValid`, void 0),
  p([l], L.prototype, `stream`, void 0),
  p([l], L.prototype, `name`, void 0),
  p([l], L.prototype, `appName`, void 0),
  p([l], L.prototype, `appID`, void 0),
  p([l], L.prototype, `link`, void 0),
  p([l], L.prototype, `linkName`, void 0),
  p([l], L.prototype, `tabIcon`, void 0),
  p([l], L.prototype, `offlineImage`, void 0),
  p([l], L.prototype, `gidEvent`, void 0));
var R = new L({
  bValid: !1,
  stream: { 0: `#Broadcast_EnglishMain` },
  name: ``,
  appName: ``,
  appID: 0,
  link: ``,
  linkName: ``,
  tabIcon: ``,
  offlineImage: ``,
});
function on(e) {
  ((e == `76561198115731852` || e == `76561198115800463`) &&
    R.init({
      bValid: !0,
      stream: {
        "76561198115731852": `#Broadcast_Stream1`,
        "76561198115800463": `#Broadcast_Stream2`,
      },
      name: `Singapore Major 2026`,
      appID: 730,
      link: `https://store.steampowered.com/app/730/CounterStrike_2/`,
      linkName: `Counter-Strike 2 on Steam`,
      tabIcon:
        m.CHAT_BASE_URL +
        `public/images/broadcast/cs2_major2026_singapore_icon.png`,
      offlineImage: `public/images/broadcast/cs2_major2026_singapore.png`,
    }),
    e == `76561197960266962` &&
      R.init({
        bValid: !0,
        stream: {},
        appName: `Winter Sale 2019`,
        name: `Yule Log`,
        appID: 0,
        link: `https://store.steampowered.com/`,
        linkName: `View Sale Info Here!`,
        tabIcon: an,
        offlineImage: `public/images/broadcast/winter_sale_2019.png`,
      }));
}
function sn(e) {
  if (P.default.isCancel(e))
    return { strErrorMsg: `Action Cancelled:` + e, errorCode: 52 };
  if (e == null) return { strErrorMsg: `Unknown Error: ` + e, errorCode: 2 };
  if (
    e.response !== void 0 &&
    e.response.data &&
    typeof e.response.data == `object`
  ) {
    if (`msg` in e.response.data)
      return {
        strErrorMsg: e.response.data.msg,
        errorCode: e.response.data.success,
      };
    if (`err_msg` in e.response.data)
      return {
        strErrorMsg: e.response.data.err_msg,
        errorCode: e.response.data.success,
      };
    if (`message` in e.response.data)
      return {
        strErrorMsg: e.response.data.message,
        errorCode: e.response.data.success,
      };
    if (`success` in e.response.data)
      return {
        strErrorMsg: `error code: ` + e.response.data.success,
        errorCode: e.response.data.success,
      };
  } else if (typeof e.data == `object` && e.data) {
    if (`msg` in e.data)
      return { strErrorMsg: e.data.msg, errorCode: e.data.success };
    if (`err_msg` in e.data)
      return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
    if (`message` in e.data)
      return { strErrorMsg: e.data.message, errorCode: e.data.success };
    if (`success` in e.data)
      return {
        strErrorMsg: `error code: ` + e.data.success,
        errorCode: e.data.success,
      };
  } else if (e.success !== void 0 && e.msg !== void 0)
    return { strErrorMsg: e.msg, errorCode: e.success };
  else if (e.success !== void 0 && e.message !== void 0)
    return { strErrorMsg: e.message, errorCode: e.success };
  else if (e.success !== void 0 && e.err_msg !== void 0)
    return { strErrorMsg: e.err_msg, errorCode: e.success };
  else if (typeof e == `string` && e.length > 1024)
    (console.groupCollapsed(`GetMsgAndErrorCodeFromResponse cannot parse: `),
      console.warn(e),
      console.groupEnd());
  else if (typeof e == `object` && e instanceof T)
    return { strErrorMsg: `` + e.GetErrorMessage(), errorCode: e.GetEResult() };
  else console.warn(`GetMsgAndErrorCodeFromResponse cannot parse: `, e);
  return typeof e == `object` && `status` in e
    ? {
        strErrorMsg:
          `Unknown Error: ` +
          e +
          `
Status Code:` +
          e.status,
        errorCode: 2,
      }
    : { strErrorMsg: `Unknown Error: ` + e, errorCode: 2 };
}
var cn = n((e) => {
    ((e.toByteArray = l), (e.fromByteArray = f));
    for (
      var t = [],
        n = [],
        r = typeof Uint8Array < `u` ? Uint8Array : Array,
        i = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
        a = 0,
        o = i.length;
      a < o;
      ++a
    )
      ((t[a] = i[a]), (n[i.charCodeAt(a)] = a));
    ((n[45] = 62), (n[95] = 63));
    function s(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw Error(`Invalid string. Length must be a multiple of 4`);
      var n = e.indexOf(`=`);
      n === -1 && (n = t);
      var r = n === t ? 0 : 4 - (n % 4);
      return [n, r];
    }
    function c(e, t, n) {
      return ((t + n) * 3) / 4 - n;
    }
    function l(e) {
      for (
        var t,
          i = s(e),
          a = i[0],
          o = i[1],
          l = new r(c(e, a, o)),
          u = 0,
          d = o > 0 ? a - 4 : a,
          f = 0;
        f < d;
        f += 4
      )
        ((t =
          (n[e.charCodeAt(f)] << 18) |
          (n[e.charCodeAt(f + 1)] << 12) |
          (n[e.charCodeAt(f + 2)] << 6) |
          n[e.charCodeAt(f + 3)]),
          (l[u++] = (t >> 16) & 255),
          (l[u++] = (t >> 8) & 255),
          (l[u++] = t & 255));
      return (
        o === 2 &&
          ((t = (n[e.charCodeAt(f)] << 2) | (n[e.charCodeAt(f + 1)] >> 4)),
          (l[u++] = t & 255)),
        o === 1 &&
          ((t =
            (n[e.charCodeAt(f)] << 10) |
            (n[e.charCodeAt(f + 1)] << 4) |
            (n[e.charCodeAt(f + 2)] >> 2)),
          (l[u++] = (t >> 8) & 255),
          (l[u++] = t & 255)),
        l
      );
    }
    function u(e) {
      return (
        t[(e >> 18) & 63] + t[(e >> 12) & 63] + t[(e >> 6) & 63] + t[e & 63]
      );
    }
    function d(e, t, n) {
      for (var r, i = [], a = t; a < n; a += 3)
        ((r =
          ((e[a] << 16) & 16711680) +
          ((e[a + 1] << 8) & 65280) +
          (e[a + 2] & 255)),
          i.push(u(r)));
      return i.join(``);
    }
    function f(e) {
      for (
        var n, r = e.length, i = r % 3, a = [], o = 16383, s = 0, c = r - i;
        s < c;
        s += o
      )
        a.push(d(e, s, s + o > c ? c : s + o));
      return (
        i === 1
          ? ((n = e[r - 1]), a.push(t[n >> 2] + t[(n << 4) & 63] + `==`))
          : i === 2 &&
            ((n = (e[r - 2] << 8) + e[r - 1]),
            a.push(t[n >> 10] + t[(n >> 4) & 63] + t[(n << 2) & 63] + `=`)),
        a.join(``)
      );
    }
  }),
  ln = e(cn(), 1),
  un = (function (e) {
    return (
      (e[(e.Chat = 0)] = `Chat`),
      (e[(e.Notification = 1)] = `Notification`),
      (e[(e.Error = 2)] = `Error`),
      e
    );
  })({}),
  dn = class {};
function fn(e, t, n) {
  return [e, t, n];
}
var z = class extends Error {},
  pn = class extends dn {
    m_appid;
    constructor(e) {
      (super(), (this.m_appid = e || 0));
    }
    GetAppID() {
      return this.m_appid;
    }
    parseColor(e) {
      if (typeof e != `string` || !e.match(/^#[0-9a-fA-F]{6}$/))
        throw new z(`expected color string`);
      return [
        parseInt(e.substring(1, 3), 16),
        parseInt(e.substring(3, 5), 16),
        parseInt(e.substring(5, 7), 16),
      ];
    }
    parseString(e) {
      if (typeof e == `string`) return e;
      throw new z(`expected string`);
    }
    parseNumber(e) {
      if (typeof e == `number`) return e;
      throw new z(`expected number`);
    }
    parseDate(e) {
      if (typeof e == `number`) return new Date(e);
      throw new z(`expected timestamp`);
    }
    parseArray(e, t) {
      let n = [];
      if (typeof e != `object` || !Array.isArray(e))
        throw new z(`expected array`);
      let r = e.length;
      for (let i = 0; i < r; ++i)
        try {
          n.push(t(e[i]));
        } catch (e) {
          throw (
            e instanceof Error &&
              (e.message +=
                `
...while parsing array element ` + i),
            e
          );
        }
      return n;
    }
    parseDict(e, t) {
      let n = new Map();
      if (typeof e != `object` || Array.isArray(e))
        throw new z(`expected object`);
      for (let r in e)
        try {
          n.set(r, t(e[r]));
        } catch (e) {
          throw (
            e instanceof Error &&
              (e.message +=
                `
...while parsing dictionary element ` + r),
            e
          );
        }
      return n;
    }
    parseBracket(e) {
      let t = {
        name: this.parseString(e.name),
        start: this.parseDate(e.start),
        color: [255, 0, 255],
      };
      return (
        `params` in e &&
          (t.params = this.parseDict(e.params, this.parseString.bind(this))),
        `end` in e && (t.end = this.parseDate(e.end)),
        `color` in e && (t.color = this.parseColor(e.color)),
        t
      );
    }
    parseMarker(e) {
      let t = { time: this.parseDate(e.time), color: [0, 255, 255] };
      return (
        `name` in e && (t.name = this.parseString(e.name)),
        `params` in e &&
          (t.params = this.parseDict(e.params, this.parseString.bind(this))),
        `color` in e && (t.color = this.parseColor(e.color)),
        t
      );
    }
    parseSoundTrack(e) {
      let t = {};
      return (
        `song_title` in e && (t.song_title = this.parseString(e.song_title)),
        `appid` in e && (t.appid = this.parseNumber(e.appid)),
        `song_index` in e && (t.song_index = this.parseNumber(e.song_index)),
        t
      );
    }
    parseBroadcastGameData(e) {
      let t = { appid: 0, brackets: [], markers: [] };
      return (
        `appid` in e && (t.appid = this.parseNumber(e.appid)),
        `brackets` in e &&
          (t.brackets = this.parseArray(
            e.brackets,
            this.parseBracket.bind(this),
          )),
        `markers` in e &&
          (t.markers = this.parseArray(e.markers, this.parseMarker.bind(this))),
        `soundtrack` in e &&
          (t.soundtrack = this.parseSoundTrack(e.soundtrack)),
        t
      );
    }
    convertTime(e, t) {
      return e - t / 1e3;
    }
    UpdateMarkers(e, t) {
      let n = [],
        r = [];
      for (let i of e)
        i.persistent
          ? (r.length > 0 &&
              (r[r.length - 1].nTimeEnd = this.convertTime(i.Timestamp, t)),
            i.name.length > 0 &&
              r.push({
                strTemplateName: i.name,
                nTimeStart: this.convertTime(i.Timestamp, t),
                nTimeEnd: -1,
                color: fn(i.color_r, i.color_g, i.color_b),
              }))
          : n.push({
              strTemplateName: i.name,
              nTime: this.convertTime(i.Timestamp, t),
              color: fn(i.color_r, i.color_g, i.color_b),
            });
      return { rgMarkers: n, rgSegments: r };
    }
    UpdateRegions(e) {
      let t = [];
      for (let n of e)
        t.push({
          strTemplateName: n.name,
          min: { x: n.min_x, y: n.min_y },
          max: { x: n.max_x, y: n.max_y },
          behavior: n.behavior,
        });
      return t;
    }
    UpdateSoundtrack(e, t) {}
  },
  mn = 250,
  hn = 250,
  B = class {
    m_elVideo;
    m_peerConnection = null;
    m_strBroadcastSteamID = ``;
    m_ulWebRTCSessionID = ``;
    m_schCandidateTimer = new S();
    m_nHostCandidateGeneration = 0;
    m_nCandidateUpdateIntervalMS = 0;
    m_listeners = new i();
    m_bFirstPlay = !0;
    m_bStatsViewVisible = !1;
    m_schCaptureDisplayStatsTrigger = new S();
    m_stats = new Ee();
    constructor(e) {
      (g(this), (this.m_elVideo = e));
    }
    async PlayMPD(e, t, n) {}
    async PlayWebRTC(e, t, n, r, i) {
      ((this.m_strBroadcastSteamID = e),
        (this.m_ulWebRTCSessionID = n),
        (this.m_nHostCandidateGeneration = 0),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `pause`,
          this.OnVideoPause,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `resize`,
          this.OnVideoResize,
        ));
      let a = {
          iceServers: [
            { urls: [`stun:` + r] },
            { urls: [`turn:` + r], username: t, credential: n },
          ],
          iceTransportPolicy: `relay`,
        },
        o = new RTCPeerConnection(a);
      ((this.m_peerConnection = o),
        (o.oniceconnectionstatechange = ((e) => {
          this.m_peerConnection &&
            (console.log(
              `BroadcastWebRTC: ICE connection state changed to ` +
                this.m_peerConnection.iceConnectionState,
            ),
            this.m_peerConnection.iceConnectionState === `failed`
              ? this.OnWebRTCConnectionFailed()
              : this.m_peerConnection.iceConnectionState === `disconnected` &&
                this.OnWebRTCConnectionRetry());
        }).bind(this)),
        (o.onicecandidate = ((e) => {
          if (e.candidate) {
            let t = new FormData();
            (t.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
              t.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
              t.append(`sdp_mid`, String(e.candidate.sdpMid)),
              t.append(`sdp_mline_index`, String(e.candidate.sdpMLineIndex)),
              t.append(`candidate`, e.candidate.candidate),
              P.default
                .post(
                  `${m.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                  t,
                )
                .then((e) => {
                  let t = e.data;
                  (t.success && t.success == 1) ||
                    console.log(
                      `Failed to add a WebRTC session ICE candidate: ` +
                        String(t.success),
                    );
                })
                .catch((e) =>
                  console.log(
                    `Failed to add a WebRTC session ICE candidate` + e,
                  ),
                ));
          }
        }).bind(this)),
        (o.ontrack = ((e) => {
          e.track.kind === `video` &&
            ((this.m_elVideo.src = ``),
            (this.m_elVideo.srcObject = e.streams[0]),
            this.Play());
        }).bind(this)),
        o.setRemoteDescription({ type: `offer`, sdp: i }).then(async () => {
          await o.setLocalDescription(await o.createAnswer());
          let e = new FormData();
          (e.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
            e.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
            e.append(`answer`, o.localDescription?.sdp ?? ``));
          try {
            await P.default
              .post(`${m.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`, e)
              .then((e) => {
                let t = e.data;
                if (!(t.success && t.success == 1))
                  throw Error(String(t.success));
              });
          } catch (e) {
            (console.log(`Failed to set the WebRTC session answer: ` + e),
              this.OnWebRTCConnectionRetry());
            return;
          }
          ((this.m_nCandidateUpdateIntervalMS = mn),
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            ));
        }));
    }
    async GetHostCandidates() {
      let e = new FormData();
      (e.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
        e.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
        e.append(
          `candidate_generation`,
          String(this.m_nHostCandidateGeneration),
        ));
      try {
        await P.default
          .post(`${m.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`, e)
          .then((e) => {
            let t = e.data,
              n = t.data,
              r = this.m_peerConnection;
            if (t.success && t.success == 1)
              r && n.candidate_generation > this.m_nHostCandidateGeneration
                ? (n.candidates.forEach((e) => {
                    let t = new RTCIceCandidate({
                      sdpMid: e.sdp_mid,
                      sdpMLineIndex: e.sdp_mline_index,
                      candidate: e.candidate,
                    });
                    r.addIceCandidate(t).catch((e) => console.error(e));
                  }),
                  (this.m_nHostCandidateGeneration = n.candidate_generation))
                : this.m_nHostCandidateGeneration > 0 &&
                  (this.m_nCandidateUpdateIntervalMS *= 2);
            else throw Error(String(t.success));
          });
      } catch (e) {
        (console.log(`Failed to get WebRTC session ICE candidates` + e),
          this.OnWebRTCConnectionRetry());
        return;
      }
      this.m_schCandidateTimer.Schedule(this.m_nCandidateUpdateIntervalMS, () =>
        this.GetHostCandidates(),
      );
    }
    DispatchEvent(e, t = null) {
      let n = new CustomEvent(e, { cancelable: !0, bubbles: !0, detail: t });
      this.m_elVideo.dispatchEvent(n);
    }
    OnWebRTCConnectionRetry() {
      this.DispatchEvent(`valve-webrtcretry`);
    }
    OnWebRTCConnectionFailed() {
      this.DispatchEvent(`valve-webrtcfailed`);
    }
    Close() {
      (this.m_listeners.Unregister(),
        this.m_schCandidateTimer.Cancel(),
        this.m_schCaptureDisplayStatsTrigger.Cancel(),
        (this.m_peerConnection &&= (this.m_peerConnection.close(), null)),
        this.m_elVideo.pause(),
        (this.m_elVideo.srcObject = null),
        this.m_stats.GetFPSMonitor().Close(),
        (this.m_bFirstPlay = !0));
    }
    IsBuffering() {
      return !1;
    }
    GetCurrentPlayTime() {
      return 0;
    }
    GetLiveContentStartTime() {
      return new Date(0);
    }
    GetAvailableVideoStartTime() {
      return 0;
    }
    GetBufferedLiveEdgeTime() {
      return 0;
    }
    IsPaused() {
      return this.m_elVideo.paused;
    }
    async Play() {
      let e = this.m_bFirstPlay;
      this.m_bFirstPlay = !1;
      let t = !1,
        n = () => {
          ((t = !0),
            this.m_stats
              .GetFPSMonitor()
              .StartTracking(() =>
                this.m_stats.ExtractFrameInfo(this.m_elVideo),
              ));
        };
      try {
        (await this.m_elVideo.play(), n());
      } catch (e) {
        e instanceof DOMException && e.name;
      }
      !t && e && this.DispatchEvent(`valve-userinputneeded`);
    }
    Pause() {
      this.m_elVideo.pause();
    }
    CanSeek() {
      return !1;
    }
    SeekAndPlay(e) {
      return (this.Play(), 0);
    }
    Seek(e) {
      return 0;
    }
    JumpTime(e) {
      return 0;
    }
    IsMuted() {
      return this.m_elVideo.muted;
    }
    SetMuted(e) {
      this.m_elVideo.muted = e;
    }
    SetVolume(e) {
      ((e = x(e, 0, 1)), (this.m_elVideo.volume = e));
    }
    GetVolume() {
      return this.m_elVideo.volume;
    }
    GetDASHPlayerStats() {
      return this.m_stats;
    }
    SetStatsViewIsVisible(e) {
      (e && !this.m_bStatsViewVisible
        ? (this.CaptureStatsForDisplay(),
          this.m_schCaptureDisplayStatsTrigger.Schedule(
            hn,
            this.CaptureStatsForDisplay,
          ))
        : !e &&
          this.m_bStatsViewVisible &&
          this.m_schCaptureDisplayStatsTrigger.Cancel(),
        (this.m_bStatsViewVisible = e));
    }
    CaptureStatsForDisplay() {
      (this.m_stats.SetHTMLVideoPlayerDisplay(
        this.m_elVideo.videoWidth,
        this.m_elVideo.videoHeight,
        this.m_elVideo.clientWidth,
        this.m_elVideo.clientHeight,
      ),
        this.m_schCaptureDisplayStatsTrigger.Schedule(
          hn,
          this.CaptureStatsForDisplay,
        ));
    }
    OnVideoPause(e) {
      this.m_stats.GetFPSMonitor().Close();
    }
    OnVideoResize(e) {
      this.m_stats.GetFPSMonitor().SetWindowResized();
    }
    GetVideoRepresentations() {
      let e = [];
      return (e.push({ id: Te, displayName: `Auto`, selected: !0 }), e);
    }
    SetVideoRepresentation(e) {}
    IsLiveContent() {
      return !0;
    }
    BHasTimedText() {
      return !1;
    }
  };
(p([f], B.prototype, `PlayWebRTC`, null),
  p([d.bound], B.prototype, `CaptureStatsForDisplay`, null),
  p([f], B.prototype, `OnVideoPause`, null),
  p([f], B.prototype, `OnVideoResize`, null));
var gn = class extends be {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? _e(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new De({
            cache: this,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      O.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => me(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => me(e, t)) : t;
    }
    notify(e) {
      O.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      O.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      O.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  _n = class extends ce {
    #e;
    #t;
    #n;
    constructor(e) {
      (super(),
        (this.mutationId = e.mutationId),
        (this.#t = e.mutationCache),
        (this.#e = []),
        (this.state = e.state || vn()),
        this.setOptions(e.options),
        this.scheduleGc());
    }
    setOptions(e) {
      ((this.options = e), this.updateGcTime(this.options.gcTime));
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(e) {
      this.#e.includes(e) ||
        (this.#e.push(e),
        this.clearGcTimeout(),
        this.#t.notify({ type: `observerAdded`, mutation: this, observer: e }));
    }
    removeObserver(e) {
      ((this.#e = this.#e.filter((t) => t !== e)),
        this.scheduleGc(),
        this.#t.notify({
          type: `observerRemoved`,
          mutation: this,
          observer: e,
        }));
    }
    optionalRemove() {
      this.#e.length ||
        (this.state.status === `pending`
          ? this.scheduleGc()
          : this.#t.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(e) {
      this.#n = ue({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(e)
            : Promise.reject(Error(`No mutationFn found`)),
        onFail: (e, t) => {
          this.#r({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#r({ type: `pause` });
        },
        onContinue: () => {
          this.#r({ type: `continue` });
        },
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#t.canRun(this),
      });
      let t = this.state.status === `pending`,
        n = !this.#n.canStart();
      try {
        if (!t) {
          (this.#r({ type: `pending`, variables: e, isPaused: n }),
            await this.#t.config.onMutate?.(e, this));
          let t = await this.options.onMutate?.(e);
          t !== this.state.context &&
            this.#r({ type: `pending`, context: t, variables: e, isPaused: n });
        }
        let r = await this.#n.start();
        return (
          await this.#t.config.onSuccess?.(r, e, this.state.context, this),
          await this.options.onSuccess?.(r, e, this.state.context),
          await this.#t.config.onSettled?.(
            r,
            null,
            this.state.variables,
            this.state.context,
            this,
          ),
          await this.options.onSettled?.(r, null, e, this.state.context),
          this.#r({ type: `success`, data: r }),
          r
        );
      } catch (t) {
        try {
          throw (
            await this.#t.config.onError?.(t, e, this.state.context, this),
            await this.options.onError?.(t, e, this.state.context),
            await this.#t.config.onSettled?.(
              void 0,
              t,
              this.state.variables,
              this.state.context,
              this,
            ),
            await this.options.onSettled?.(void 0, t, e, this.state.context),
            t
          );
        } finally {
          this.#r({ type: `error`, error: t });
        }
      } finally {
        this.#t.runNext(this);
      }
    }
    #r(e) {
      let t = (t) => {
        switch (e.type) {
          case `failed`:
            return {
              ...t,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case `pause`:
            return { ...t, isPaused: !0 };
          case `continue`:
            return { ...t, isPaused: !1 };
          case `pending`:
            return {
              ...t,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: e.isPaused,
              status: `pending`,
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case `success`:
            return {
              ...t,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: `success`,
              isPaused: !1,
            };
          case `error`:
            return {
              ...t,
              data: void 0,
              error: e.error,
              failureCount: t.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: `error`,
            };
        }
      };
      ((this.state = t(this.state)),
        O.batch(() => {
          (this.#e.forEach((t) => {
            t.onMutationUpdate(e);
          }),
            this.#t.notify({ mutation: this, type: `updated`, action: e }));
        }));
    }
  };
function vn() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var yn = class extends be {
  constructor(e = {}) {
    (super(), (this.config = e), (this.#e = new Map()), (this.#t = Date.now()));
  }
  #e;
  #t;
  build(e, t, n) {
    let r = new _n({
      mutationCache: this,
      mutationId: ++this.#t,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    let t = V(e),
      n = this.#e.get(t) ?? [];
    (n.push(e), this.#e.set(t, n), this.notify({ type: `added`, mutation: e }));
  }
  remove(e) {
    let t = V(e);
    if (this.#e.has(t)) {
      let n = this.#e.get(t)?.filter((t) => t !== e);
      n && (n.length === 0 ? this.#e.delete(t) : this.#e.set(t, n));
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = this.#e.get(V(e))?.find((e) => e.state.status === `pending`);
    return !t || t === e;
  }
  runNext(e) {
    return (
      this.#e
        .get(V(e))
        ?.find((t) => t !== e && t.state.isPaused)
        ?.continue() ?? Promise.resolve()
    );
  }
  clear() {
    O.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return [...this.#e.values()].flat();
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => ye(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => ye(e, t));
  }
  notify(e) {
    O.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return O.batch(() => Promise.all(e.map((e) => e.continue().catch(D))));
  }
};
function V(e) {
  return e.options.scope?.id ?? String(e.mutationId);
}
function bn(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (n = !0)
                    : t.signal.addEventListener(`abort`, () => {
                        n = !0;
                      }),
                  t.signal
                ),
              });
            },
            u = we(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject();
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = {
                queryKey: t.queryKey,
                pageParam: r,
                direction: i ? `backward` : `forward`,
                meta: t.options.meta,
              };
              l(a);
              let o = await u(a),
                { maxPages: s } = t.options,
                c = i ? pe : le;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? Sn : xn,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : xn(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              n,
            )
        : l;
    },
  };
}
function xn(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Sn(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Cn = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new gn()),
        (this.#t = e.mutationCache || new yn()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = ge.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = he.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.getQueryData(e.queryKey);
      if (t === void 0) return this.fetchQuery(e);
      {
        let n = this.defaultQueryOptions(e),
          r = this.#e.build(this, n);
        return (
          e.revalidateIfStale &&
            r.isStaleByTime(Ce(n.staleTime, r)) &&
            this.prefetchQuery(n),
          Promise.resolve(t)
        );
      }
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = fe(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return O.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      O.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e,
        r = { type: `active`, ...e };
      return O.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries(r, t)
        ),
      );
    }
    cancelQueries(e = {}, t = {}) {
      let n = { revert: !0, ...t },
        r = O.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(D).catch(D);
    }
    invalidateQueries(e = {}, t = {}) {
      return O.batch(() => {
        if (
          (this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e.refetchType === `none`)
        )
          return Promise.resolve();
        let n = { ...e, type: e.refetchType ?? e.type ?? `active` };
        return this.refetchQueries(n, t);
      });
    }
    refetchQueries(e = {}, t) {
      let n = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 },
        r = O.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(D)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(D);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(Ce(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(D).catch(D);
    }
    fetchInfiniteQuery(e) {
      return ((e.behavior = bn(e.pages)), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(D).catch(D);
    }
    ensureInfiniteQueryData(e) {
      return ((e.behavior = bn(e.pages)), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return he.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(ve(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          xe(e, t.queryKey) && (n = { ...n, ...t.defaultOptions });
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(ve(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          xe(e, t.mutationKey) && (n = { ...n, ...t.defaultOptions });
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= _e(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.enabled !== !0 && t.queryFn === Se && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  H = e(a(), 1),
  wn = function () {
    return null;
  };
function Tn(e) {
  let { queryClient: t = W, steamUI: n } = e;
  H.useEffect(() => {
    t == W &&
      t.setDefaultOptions({
        ...U,
        queries: { ...U.queries, networkMode: n ? `offlineFirst` : void 0 },
        mutations: { ...U.mutations, networkMode: n ? `offlineFirst` : void 0 },
      });
  }, [t, n]);
  let r = e.children;
  return (
    e.debug &&
      (r = [
        ...H.Children.toArray(r),
        H.createElement(wn, { key: `ReactQueryDevtools` }),
      ]),
    H.createElement(de, { client: t }, r)
  );
}
var U = { queries: { staleTime: 1 / 0 } },
  W = new Cn({ defaultOptions: U });
async function En(e, t) {
  let n = o.STORE_BASE_URL + `video/details/` + e + `/0`,
    r = await fetch(n, { credentials: `include`, signal: t });
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success != 1 && i?.success != `ready`)
    throw Error(`video/details on ` + e + ` answered ` + i?.success);
  return { appid: e, video_url: i.video_url, bookmark: i.bookmark };
}
function Dn(e) {
  return [`video`, `vod`, e];
}
function On(e) {
  return { queryKey: Dn(e), queryFn: ({ signal: t }) => En(e, t), retry: !1 };
}
function kn(e) {
  try {
    if (!e || typeof e != `string`) return null;
    let t = e.split(`.`);
    if (t.length !== 3) return null;
    let [n, r] = t,
      i = Nn(n),
      a = Nn(r);
    return !i || !a ? null : { header: JSON.parse(i), body: JSON.parse(a) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function An(e) {
  return e ? e.body.exp : 0;
}
function jn(e) {
  return e ? e.body.nbf || e.body.iat : 0;
}
function Mn(e) {
  let t = An(e),
    n = jn(e),
    r = 900,
    i = t - n;
  return (i < 1350 && (r = i <= 60 ? 0 : 60), An(e) - r < Date.now() / 1e3);
}
function Nn(e) {
  return atob(e.replace(/-/g, `+`).replace(/_/g, `/`));
}
var Pn = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.version || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version: { n: 1, br: h.readEnum, bw: C.writeEnum },
            preference_state: { n: 2, br: h.readEnum, bw: C.writeEnum },
            content_customization: { n: 3, c: Fn },
            valve_analytics: { n: 4, c: In },
            third_party_analytics: { n: 5, c: Ln },
            third_party_content: { n: 6, c: Rn },
            utm_enabled: { n: 7, d: !0, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  Fn = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recentapps || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recentapps: { n: 1, br: h.readBool, bw: C.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  In = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.product_impressions_tracking || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            product_impressions_tracking: {
              n: 1,
              br: h.readBool,
              bw: C.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  Ln = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.google_analytics || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            google_analytics: { n: 1, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  Rn = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.youtube || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            youtube: { n: 1, br: h.readBool, bw: C.writeBool },
            vimeo: { n: 2, br: h.readBool, bw: C.writeBool },
            sketchfab: { n: 3, br: h.readBool, bw: C.writeBool },
            twitter: { n: 4, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
    }
  },
  zn = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  Bn = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { preferences: { n: 1, c: Pn } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  Vn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountPrivacy.GetCookiePreferences#1`, u(zn, t, n), Bn, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetCookiePreferences = t;
})((Vn ||= {}));
var Hn = {
    name: `cookieSettings`,
    options: {
      secure: !0,
      httpOnly: !1,
      path: `/`,
      sameSite: `none`,
      maxAge: 31536e6,
    },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  Un = {
    name: `sessionid`,
    options: { secure: !0, path: `/`, sameSite: `none` },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  Wn = {
    name: `shoppingCartGID`,
    options: { path: `/`, secure: !0, maxAge: 6048e5 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  Gn = {
    name: `steamLoginSpoofSteamID`,
    options: { path: `/`, secure: !0 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function Kn(e) {
  if (!(`document` in globalThis) || !document.cookie) return;
  let t = document.cookie.match(`(^|; )` + e.name + `=([^;]*)`);
  if (t && t[2]) return decodeURIComponent(t[2]);
}
var qn = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_strWebAPIBaseURL;
  m_webApiAccessToken = ``;
  m_bJsonMode = !1;
  m_bJWTToken = !1;
  m_fnRequestNewAccessToken;
  m_refreshAccessTokenPromise;
  m_dtLastExpireCheck = 0;
  m_strSpoofedSteamID = ``;
  constructor(e, t = ``, n = !1, r) {
    ((this.m_strWebAPIBaseURL = e),
      (this.m_webApiAccessToken = t),
      (this.m_bJsonMode = n),
      (this.m_fnRequestNewAccessToken = r),
      (this.m_bJWTToken = kn(t) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !0 }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !1 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !1 }),
        MakeReady: this.MakeReady.bind(this),
      }));
    let i = Kn(Gn);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new Oe();
  }
  RTime32ToDate(e) {
    return new Date(e * 1e3);
  }
  MakeReady() {
    return Promise.resolve({ result: 1, message: `ready` });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetWebAPIAccessToken() {
    return this.m_webApiAccessToken;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  async SendMsgAndAwaitResponse(e, t, n, r, i) {
    let a,
      o = 0;
    try {
      if (this.m_bJWTToken && e.bSendAuth && this.m_webApiAccessToken) {
        let e = Date.now() / 1e3;
        this.m_refreshAccessTokenPromise
          ? await this.m_refreshAccessTokenPromise
          : (window.bForceTokenRefresh ||
              (this.m_fnRequestNewAccessToken &&
                e - this.m_dtLastExpireCheck > 60)) &&
            ((this.m_dtLastExpireCheck = e),
            Mn(kn(this.m_webApiAccessToken)) &&
              (await this.AttemptTokenRefresh()));
      }
      let s = await this.Send(e, t, n, i);
      if (((o = s.status), o == 200)) {
        if (
          ((a = T.Init(r, 147)),
          s.headers &&
            (s.headers.get(`x-eresult`) &&
              a.Hdr().set_eresult(parseInt(s.headers.get(`x-eresult`))),
            s.headers.get(`x-error_message`) &&
              a.Hdr().set_error_message(s.headers.get(`x-error_message`))),
          this.m_bJsonMode)
        )
          a.SetBodyJSON(await s.json());
        else {
          let e = new te(await s.arrayBuffer());
          a.ReadBodyFromBuffer(r, e);
        }
      }
    } catch {}
    let s = o === 401;
    if (!a) {
      let e = s ? `Unauthorized` : void 0,
        t = o === 429 ? 84 : 2;
      a = this.CreateFailedMsgProtobuf(r, 3, t, e);
    }
    return (
      s &&
        !this.m_refreshAccessTokenPromise &&
        this.m_bJWTToken &&
        e.bSendAuth &&
        this.m_fnRequestNewAccessToken &&
        this.m_webApiAccessToken &&
        (await this.AttemptTokenRefresh()),
      a
    );
  }
  SendNotification(e, t, n, r) {
    return (this.Send(e, t, n, r), !0);
  }
  Send(e, t, n, r) {
    let i = this.CreateWebAPIURL(t),
      a = n.SerializeBody(),
      o = ln.fromByteArray(a),
      s = r.eWebAPIKeyRequirement,
      c = r.ePrivilege == 0 && s == 1,
      l = {},
      u = new URLSearchParams();
    if (
      (!e.bSendAuth &&
        s != 1 &&
        console.error(
          `Attempting to invoke service ${t} without auth, but auth is required.`,
        ),
      e.bSendAuth,
      this.m_webApiAccessToken &&
        e.bSendAuth &&
        !c &&
        (u.append(`access_token`, this.m_webApiAccessToken),
        this.m_strSpoofedSteamID &&
          u.append(`spoof_steamid`, this.m_strSpoofedSteamID)),
      r.bConstMethod)
    )
      return (
        typeof self < `u` && self.origin && u.append(`origin`, self.origin),
        this.m_bJsonMode
          ? u.append(`input_json`, JSON.stringify(n.Body().toObject()))
          : u.append(`input_protobuf_encoded`, o),
        fetch(`${i}?${u.toString()}`, l)
      );
    {
      let e = new FormData();
      return (
        this.m_bJsonMode
          ? e.append(`input_json`, JSON.stringify(n.Body().toObject()))
          : e.append(`input_protobuf_encoded`, o),
        fetch(`${i}?${u.toString()}`, { ...l, method: `POST`, body: e })
      );
    }
  }
  CreateWebAPIURL(e) {
    let t = e.match(/([^.]+)\.(.+)#(\d+)/);
    if (!t || t.length != 4) throw `Invalid service name: ${e}`;
    return `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`;
  }
  CreateFailedMsgProtobuf(e, t, n, r) {
    let i = T.Init(e);
    return (
      i.Hdr().set_eresult(n),
      i.Hdr().set_transport_error(t),
      r && i.Hdr().set_error_message(r),
      i
    );
  }
  async AttemptTokenRefresh() {
    if (this.m_fnRequestNewAccessToken)
      try {
        this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken(
          this.m_webApiAccessToken,
        ).catch(
          (e) => (console.error(`Failed to refresh access token: ${e}`), ``),
        );
        let e = await this.m_refreshAccessTokenPromise;
        e && (this.m_webApiAccessToken = e);
      } catch (e) {
        console.error(`Failed to refresh access token: ${e}`);
      } finally {
        this.m_refreshAccessTokenPromise = void 0;
      }
  }
};
function Jn(e, t) {
  return !!e && (e.includes(`all`) || e.includes(t));
}
async function Yn() {
  try {
    let e = await fetch(`${o.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({ redir: window.location.href }),
    });
    if (!e.ok) return !1;
    let t = await e.json();
    if (!t.success || !t.login_url) return !1;
    let n = new URLSearchParams();
    for (let [e, r] of Object.entries(t))
      typeof r == `string` && n.append(e, r);
    return (
      await fetch(t.login_url, {
        method: `POST`,
        credentials: `include`,
        body: n,
      })
    ).ok;
  } catch {
    return !1;
  }
}
var Xn = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_fallbackInterface;
  m_strSiteName;
  m_refreshLoginCookiePromise;
  constructor(e, t = `community`) {
    ((this.m_fallbackInterface = e),
      (this.m_strSiteName = t),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !0 }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !1 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !1 }),
        MakeReady: this.MakeReady.bind(this),
      }));
  }
  async SendMsgAndAwaitResponse(e, t, n, r, i) {
    if (!this.BCanSendMessageViaBrowserAPI(i)) {
      if (this.m_fallbackInterface)
        return e.bSendAuth
          ? this.m_fallbackInterface?.GetServiceTransport().SendMsg(t, n, r, i)
          : this.m_fallbackInterface
              ?.GetAnonymousServiceTransport()
              .SendMsg(t, n, r, i);
      console.error(`No browserapi version of`, t, `and no fallback`);
    }
    let a = await this.SendMsgOnce(e, t, n, r, i);
    return a.status !== 401 ||
      !e.bSendAuth ||
      !(await this.BEnsureLoginCookieRefreshed())
      ? a.msgResult
      : (await this.SendMsgOnce(e, t, n, r, i)).msgResult;
  }
  BCanSendMessageViaBrowserAPI(e) {
    return Jn(e.rgBrowserAPISites, this.m_strSiteName);
  }
  BEnsureLoginCookieRefreshed() {
    return (
      (this.m_refreshLoginCookiePromise ??= Yn().finally(() => {
        this.m_refreshLoginCookiePromise = void 0;
      })),
      this.m_refreshLoginCookiePromise
    );
  }
  async SendMsgOnce(e, t, n, r, i) {
    let a,
      o = 0;
    try {
      let s = await this.Send(e, t, n, i);
      if (((o = s.status), o == 200)) {
        ((a = T.Init(r, 147)),
          s.headers &&
            (s.headers.get(`x-eresult`) &&
              a.Hdr().set_eresult(parseInt(s.headers.get(`x-eresult`))),
            s.headers.get(`x-error_message`) &&
              a.Hdr().set_error_message(s.headers.get(`x-error_message`))));
        let e = new te(await s.arrayBuffer());
        a.ReadBodyFromBuffer(r, e);
      }
    } catch {}
    let s = o === 401;
    if (!a) {
      let e = s ? `Unauthorized` : void 0;
      a = this.CreateFailedMsgProtobuf(r, 3, e);
    }
    return { msgResult: a, status: o };
  }
  SendNotification(e, t, n, r) {
    if (!this.BCanSendMessageViaBrowserAPI(r)) {
      if (this.m_fallbackInterface)
        return e.bSendAuth
          ? this.m_fallbackInterface
              ?.GetServiceTransport()
              .SendNotification(t, n, r)
          : this.m_fallbackInterface
              ?.GetAnonymousServiceTransport()
              .SendNotification(t, n, r);
      console.error(`No browserapi version of`, t, `and no fallback`);
    }
    return (this.SendNotificationAndRetryIfUnauthorized(e, t, n, r), !0);
  }
  async SendNotificationAndRetryIfUnauthorized(e, t, n, r) {
    (await this.Send(e, t, n, r)).status === 401 &&
      e.bSendAuth &&
      (await this.BEnsureLoginCookieRefreshed()) &&
      (await this.Send(e, t, n, r));
  }
  Send(e, t, n, r) {
    let i = this.CreateBrowserAPIURL(t),
      a = n.SerializeBody(),
      o = r.eWebAPIKeyRequirement,
      s = r.ePrivilege == 0 && o == 1,
      c = {
        credentials: `omit`,
        headers: { Accept: `application/octet-stream` },
      },
      l = new URLSearchParams();
    if (
      (!e.bSendAuth &&
        o != 1 &&
        console.error(
          `Attempting to invoke service ${t} without auth, but auth is required.`,
        ),
      e.bSendAuth && !s && (c.credentials = `same-origin`),
      r.bConstMethod)
    )
      return (
        l.append(`input_protobuf_encoded`, ln.fromByteArray(a)),
        fetch(`${i}?${l.toString()}`, c)
      );
    {
      let e = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
      return fetch(i, {
        ...c,
        method: `POST`,
        headers: { ...c.headers, "Content-Type": `application/octet-stream` },
        body: e,
      });
    }
  }
  CreateBrowserAPIURL(e) {
    let t = e.match(/([^.]+)\.(.+)#(\d+)/);
    if (!t || t.length != 4) throw `Invalid service name: ${e}`;
    return `/um/${t[1]}/${t[2]}/`;
  }
  CreateFailedMsgProtobuf(e, t, n) {
    let r = T.Init(e);
    return (
      r.Hdr().set_eresult(2),
      r.Hdr().set_transport_error(t),
      n && r.Hdr().set_error_message(n),
      r
    );
  }
  MakeReady() {
    return Promise.resolve({ result: 1, message: `ready` });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  RTime32ToDate(e) {
    return new Date(e * 1e3);
  }
};
function G(e) {
  let t = ie();
  return t && t === m.STORE_CHECKOUT_BASE_URL
    ? new Xn(e, `checkout`)
    : new Xn(e);
}
var Zn = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_id: { n: 1, br: h.readUint64String, bw: C.writeUint64String },
            client_cellid: { n: 2, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_ClientGetVideoURL_Request`;
    }
  },
  Qn = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_id: { n: 1, br: h.readUint64String, bw: C.writeUint64String },
            video_url: { n: 2, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_ClientGetVideoURL_Response`;
    }
  },
  $n = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.encryption_key || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            encryption_key: { n: 1, br: h.readBytes, bw: C.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_UnlockedH264_Notification`;
    }
  },
  er = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: h.readUint32, bw: C.writeUint32 },
            client_cellid: { n: 2, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFovasVideo_ClientGetOPFSettings_Request`;
    }
  },
  tr = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: h.readUint32, bw: C.writeUint32 },
            opf_settings: { n: 2, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFovasVideo_ClientGetOPFSettings_Response`;
    }
  },
  K = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || v(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: h.readUint32, bw: C.writeUint32 },
            playback_position_in_seconds: {
              n: 2,
              br: h.readUint32,
              bw: C.writeUint32,
            },
            video_track_id: {
              n: 3,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            audio_track_id: {
              n: 4,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            timedtext_track_id: {
              n: 5,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            last_modified: { n: 6, br: h.readUint32, bw: C.writeUint32 },
            hide_from_watch_history: {
              n: 7,
              d: !1,
              br: h.readBool,
              bw: C.writeBool,
            },
            hide_from_library: { n: 8, d: !1, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `VideoBookmark`;
    }
  },
  nr = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bookmarks || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bookmarks: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_SetVideoBookmark_Notification`;
    }
  },
  rr = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: C.writeRepeatedUint32,
            },
            updated_since: { n: 2, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GetVideoBookmarks_Request`;
    }
  },
  ir = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bookmarks || v(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bookmarks: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return E(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GetVideoBookmarks_Response`;
    }
  },
  ar;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Video.ClientGetVideoURL#1`, u(Zn, t, n), Qn, {
      ePrivilege: 1,
    });
  }
  e.ClientGetVideoURL = t;
  function n(e, t) {
    return e.SendNotification(`Video.SetVideoBookmark#1`, u(nr, t), {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetVideoBookmark = n;
  function r(e, t, n) {
    return e.SendMsg(`Video.GetVideoBookmarks#1`, u(rr, t, n), ir, {
      ePrivilege: 1,
    });
  }
  e.GetVideoBookmarks = r;
})((ar ||= {}));
var or;
(function (e) {
  e.NotifyUnlockedH264Handler = {
    name: `VideoClient.NotifyUnlockedH264#1`,
    request: $n,
  };
})((or ||= {}));
var sr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`FovasVideo.ClientGetOPFSettings#1`, u(er, t, n), tr, {
      ePrivilege: 1,
    });
  }
  e.ClientGetOPFSettings = t;
})((sr ||= {}));
var q = class e {
    static s_VODStore;
    m_transport = null;
    m_mapBookmarks = new Map();
    SetBookmarkForApp(e, t) {
      this.ValidateBookmarkData(t)
        ? this.m_mapBookmarks.set(e, K.fromObject(t))
        : this.InitializeBookmarkForApp(e);
    }
    ValidateBookmarkData(e) {
      let t = e;
      return (
        typeof t == `object` &&
        Number.isInteger(t.playback_position_in_seconds) &&
        Number.isInteger(t.app_id)
      );
    }
    InitializeBookmarkForApp(e) {
      if (!this.m_mapBookmarks.has(e)) {
        let t = {
          app_id: e,
          playback_position_in_seconds: 0,
          video_track_id: `0`,
          audio_track_id: `0`,
          timedtext_track_id: `0`,
          hide_from_watch_history: !1,
          hide_from_library: !1,
        };
        this.m_mapBookmarks.set(e, new K(t));
      }
    }
    GetBookmarkPlayTimeInSeconds(e) {
      let t = this.m_mapBookmarks.get(e);
      if (t) {
        let e = t.playback_position_in_seconds();
        if (Number.isInteger(e)) return e;
      }
      return 0;
    }
    async SendBookMarkedTimeToServer(e, t, n, r, i) {
      if (!c.logged_in) return;
      if (!this.m_transport) {
        console.warn(
          `CVideoBookmarkStore:SetBookMark no auth token / transport`,
        );
        return;
      }
      let a = T.Init(nr),
        o = this.m_mapBookmarks.get(e);
      if (o) {
        let s = !1;
        (o.app_id() != e && ((s = !0), o.set_app_id(e)),
          o.playback_position_in_seconds() != t &&
            ((s = !0), o.set_playback_position_in_seconds(t)),
          (n ||= `0`),
          o.video_track_id() != n && (o.set_video_track_id(n), (s = !0)),
          (r ||= `0`),
          o.audio_track_id() != r && (o.set_audio_track_id(r), (s = !0)),
          (i ||= `0`),
          i != o.timedtext_track_id() &&
            (o.set_timedtext_track_id(i), (s = !0)),
          s &&
            (a.Body().add_bookmarks(o),
            ar.SetVideoBookmark(this.m_transport, a)));
      }
    }
    static Get() {
      return (
        e.s_VODStore || ((e.s_VODStore = new e()), e.s_VODStore.Init()),
        e.s_VODStore
      );
    }
    Init() {
      c.logged_in &&
        (this.m_transport = G(new qn(m.WEBAPI_BASE_URL)).GetServiceTransport());
    }
    async LoadWatchVideoOAuthToken() {
      let e = m.STORE_BASE_URL + `actions/ajaxgetwatchvodtoken`,
        t = {};
      try {
        let n = await P.default.get(e, { params: t, withCredentials: !0 });
        if (
          n &&
          n.status == 200 &&
          n.data &&
          n.data.success == 1 &&
          n.data.webapi_token
        ) {
          this.m_transport = G(
            new qn(m.WEBAPI_BASE_URL, n.data.webapi_token),
          ).GetServiceTransport();
          return;
        }
      } catch (e) {
        let t = sn(e);
        console.error(
          `CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed ` +
            t.strErrorMsg,
          t,
        );
      }
    }
  },
  cr = class {
    m_appid;
    constructor(e) {
      this.m_appid = e;
    }
    async SetBookmark(e, t, n, r) {
      c.logged_in &&
        q
          .Get()
          .SendBookMarkedTimeToServer(this.m_appid, Math.floor(e), t, n, r);
    }
    GetBeginPlaytime() {
      return c.logged_in
        ? q.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
        : 0;
    }
  },
  lr = t({
    BroadcastWatchStore: () => $,
    CBroadcastInfo: () => Y,
    CBroadcastVideo: () => Q,
    CBroadcastWatchStore: () => Z,
    EBroadcastWatchState: () => pr,
    ETimelineRange: () => vr,
    k_nDefaultBroadcastAppID: () => 7,
  }),
  ur = 1800,
  dr = 1e3,
  fr = 5e3,
  pr = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Unlocking = 1)] = `Unlocking`),
      (e[(e.Loading = 2)] = `Loading`),
      (e[(e.Ready = 3)] = `Ready`),
      (e[(e.Error = 4)] = `Error`),
      e
    );
  })({});
async function mr(e, t, n) {
  if (!t) return;
  let r = new FormData();
  (r.append(`steamid`, e),
    r.append(`broadcastid`, t),
    r.append(`viewertoken`, n));
  try {
    await P.default.post(m.CHAT_BASE_URL + `broadcast/stopwatching`, r);
  } catch {}
}
var hr = class {
    m_rtUnlockTime = 0;
    m_schUnlockTimeout = new S();
    m_broadcast;
    m_video;
    UnlockH264(e, t) {
      this.BCanUnlockH264()
        ? (e.SetState(1, ``),
          console.log(`Unlocking H.264 for broadcast video playback`),
          this.RequestUnlockH264(),
          (this.m_broadcast = e),
          (this.m_video = t),
          (this.m_rtUnlockTime = Date.now()),
          this.m_schUnlockTimeout.Schedule(100, () => this.CheckUnlockState()))
        : e.SetState(4, w(`#BroadcastWatch_MinBrowser`));
    }
    BCanUnlockH264() {
      return A(`RemotePlay.UnlockH264`)
        ? (console.log(`Client supports direct H.264 unlock`), !0)
        : A(`BrowserView.PostMessageToParent`)
          ? (console.log(`Client supports browserview H.264 unlock`), !0)
          : (console.log(`Client does not support H.264 unlock`), !1);
    }
    RequestUnlockH264() {
      A(`RemotePlay.UnlockH264`)
        ? (console.log(`Requesting direct H.264 unlock`),
          SteamClient.RemotePlay.UnlockH264())
        : A(`BrowserView.PostMessageToParent`)
          ? (console.log(`Requesting browserview unlock`),
            SteamClient.BrowserView.PostMessageToParent(
              `UnlockH264Request`,
              `CUnlockH264Helper`,
            ))
          : console.log(`Failed to request H.264 unlock: no method supported`);
    }
    CheckUnlockState() {
      this.m_broadcast.m_eWatchState == 1 &&
        (k() || N()
          ? (console.log(`Unlocking H.264 successful`),
            this.m_broadcast.SetState(0, ``),
            this.m_video.Restart())
          : Date.now() - this.m_rtUnlockTime > 6e3
            ? (console.log(
                `Unlocking H.264 timed out (Steam client or servers offline?)`,
              ),
              this.m_broadcast.SetState(4, w(`#BroadcastWatch_MinBrowser`)))
            : this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              ));
    }
  },
  J = class {
    constructor() {
      g(this);
    }
    m_steamIDBroadcast = ``;
    m_ulBroadcastID = ``;
    m_ulViewerToken = ``;
    m_strCDNAuthUrlParameters = void 0;
    m_bWebRTC = !1;
    m_data;
    m_eWatchState = 0;
    m_strStateDescription = ``;
    m_rgVideos = [];
    m_schManifestTimeout = new S();
    m_schHeartbeatTimeout = new S();
    SetState(e, t = ``) {
      ((this.m_eWatchState = e),
        (this.m_strStateDescription = t),
        e == 4 && console.log(this.m_strStateDescription));
    }
  };
(p([l], J.prototype, `m_ulBroadcastID`, void 0),
  p([l], J.prototype, `m_eWatchState`, void 0),
  p([l], J.prototype, `m_strStateDescription`, void 0),
  p([d], J.prototype, `SetState`, null));
var Y = class {
  m_steamIDBroadcast = ``;
  m_bInitialized = !1;
  m_strTitle = ``;
  m_strAppId = `7`;
  m_nAppID = 7;
  m_strAppTitle = ``;
  m_strThumbnailUrl = ``;
  m_nViewerCount = 0;
  m_bIsOnline = !1;
  m_schUpdateTimeout = new S();
  m_nRefCount = 0;
  constructor(e) {
    (g(this), (this.m_steamIDBroadcast = e));
  }
};
(p([l], Y.prototype, `m_bInitialized`, void 0),
  p([l], Y.prototype, `m_strTitle`, void 0),
  p([l], Y.prototype, `m_strAppId`, void 0),
  p([l], Y.prototype, `m_nAppID`, void 0),
  p([l], Y.prototype, `m_strAppTitle`, void 0),
  p([l], Y.prototype, `m_strThumbnailUrl`, void 0),
  p([l], Y.prototype, `m_nViewerCount`, void 0),
  p([l], Y.prototype, `m_bIsOnline`, void 0));
var X = class {
  constructor() {
    g(this);
  }
  m_eWatchState = 0;
  m_strStateDescription = ``;
  m_rgVideos = [];
  SetState(e, t = ``) {
    ((this.m_eWatchState = e),
      (this.m_strStateDescription = t),
      e == 4 && console.log(this.m_strStateDescription));
  }
};
(p([l], X.prototype, `m_eWatchState`, void 0),
  p([l], X.prototype, `m_strStateDescription`, void 0),
  p([d], X.prototype, `SetState`, null));
var gr = class extends X {
    m_clipID;
    m_data;
  },
  _r = class extends X {
    m_nAppIDVOD;
    m_manifestURL;
  },
  Z = class {
    m_mapBroadcasts = new Map();
    m_mapClips = new Map();
    m_mapVODs = new Map();
    m_activeVideo = null;
    m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: `0` };
    m_schSaveSettings = new S();
    m_broadcastInfos = {};
    constructor() {
      (g(this), this.LoadBroadcastSettings());
    }
    GetBroadcastState(e) {
      if (e.IsBroadcastClip()) {
        let t = this.m_mapClips.get(e.GetBroadcastClipID());
        return t ? t.m_eWatchState : 0;
      }
      if (e.IsBroadcastVOD()) {
        let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
        return t ? t.m_eWatchState : 0;
      }
      {
        let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
        return t ? t.m_eWatchState : 0;
      }
    }
    GetBroadcastStateDescription(e) {
      if (e.IsBroadcastClip()) {
        let t = this.m_mapClips.get(e.GetBroadcastClipID());
        return t ? t.m_strStateDescription : ``;
      }
      if (e.IsBroadcastVOD()) {
        let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
        return t ? t.m_strStateDescription : ``;
      }
      {
        let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
        return t ? t.m_strStateDescription : ``;
      }
    }
    CreateBroadcastVideo(e, t, n, r) {
      let i = this.GetOrCreateBroadcast(t),
        { nVolume: a, bMuted: o } = this.m_broadcastSettings,
        s = new Q(e, a, o, n);
      return (
        s.SetBroadcastSteamID(t),
        i.m_rgVideos.push(s),
        (i.m_bWebRTC = r),
        !k() && !N() && new hr().UnlockH264(i, s),
        s
      );
    }
    CreateClipVideo(e, t, n) {
      let r = this.GetOrCreateClip(t),
        { nVolume: i, bMuted: a } = this.m_broadcastSettings,
        o = new Q(e, i, a, n);
      return (
        o.SetBroadcastClipID(t),
        r.m_rgVideos.push(o),
        !k() && !N() && new hr().UnlockH264(r, o),
        o
      );
    }
    CreateVODVideo(e, t, n) {
      let r = this.GetOrCreateVOD(t),
        { nVolume: i, bMuted: a } = this.m_broadcastSettings,
        o = new Q(e, i, a, n);
      return (
        o.SetBroadcastAppIDVOD(t),
        r.m_rgVideos.push(o),
        !k() && !N() && new hr().UnlockH264(r, o),
        o
      );
    }
    StartVideo(e) {
      if (e.IsBroadcastClip()) {
        console.log(`Starting clip for ${e.GetBroadcastClipID()}`);
        let t = this.m_mapClips.get(e.GetBroadcastClipID());
        if (!t) return;
        (this.SetActiveVideo(e),
          t.m_eWatchState == 0
            ? this.GetClipManifest(t, e.GetWatchLocation())
            : t.m_eWatchState == 3 && e.StartClip(t));
      } else if (e.IsBroadcastVOD()) {
        console.log(`Starting VOD for ${e.GetBroadcastAppIDVOD()}`);
        let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
        if (!t) return;
        (this.SetActiveVideo(e),
          t.m_eWatchState == 0
            ? this.GetVODManifest(t, e.GetWatchLocation())
            : t.m_eWatchState == 3 && e.StartVOD(t));
      } else {
        let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
        if (!t) return;
        (this.SetActiveVideo(e),
          t.m_eWatchState == 0
            ? this.GetBroadcastManifest(t, e.GetWatchLocation())
            : t.m_eWatchState == 3 && e.StartBroadcast(t));
      }
    }
    SetActiveVideo(e) {
      (this.m_mapBroadcasts.forEach((t) => {
        for (let n of t.m_rgVideos) n != e && n.StopPlaybackTillUserInput();
      }),
        this.m_mapClips.forEach((t) => {
          for (let n of t.m_rgVideos) n != e && n.StopPlaybackTillUserInput();
        }),
        (this.m_activeVideo = e));
    }
    PauseAllVideo() {
      this.m_mapBroadcasts.forEach((e) => {
        for (let t of e.m_rgVideos) t.StopPlaybackTillUserInput();
      });
    }
    async StopVideo(e) {
      let t = e.GetBroadcastSteamID(),
        n = this.m_mapBroadcasts.get(t);
      (e.Stop(),
        n &&
          (n.m_ulBroadcastID &&
            mr(t, n.m_ulBroadcastID, this.m_broadcastSettings.ulViewerToken),
          ee(n.m_rgVideos, (t) => t == e),
          this.RemoveBroadcastIfUnused(n)));
    }
    StartInfo(e) {
      let t = this.GetOrCreateBroadcastInfo(e);
      return (
        t.m_nRefCount++,
        (t.m_bInitialized && t.m_schUpdateTimeout.IsScheduled()) ||
          this.LoadBroadcastInfo(t),
        t
      );
    }
    StopInfo(e) {
      e.m_nRefCount--;
    }
    GetOrCreateBroadcastInfo(e) {
      if (!e) return new Y(``);
      if (!this.m_broadcastInfos[e]) {
        let t = l(new Y(e));
        this.m_broadcastInfos[e] = t;
      }
      return this.m_broadcastInfos[e];
    }
    GetOrCreateBroadcast(e) {
      let t = this.m_mapBroadcasts.get(e);
      return (
        t ||
        ((t = new J()),
        (t.m_steamIDBroadcast = e),
        (t.m_eWatchState = 0),
        this.m_mapBroadcasts.set(e, t),
        t)
      );
    }
    GetBroadcast(e) {
      return this.m_mapBroadcasts.get(e);
    }
    GetBroadcastClip(e) {
      return this.m_mapClips.get(e);
    }
    GetBroadcastVOD(e) {
      return this.m_mapVODs.get(e);
    }
    RemoveBroadcastIfUnused(e) {
      e.m_rgVideos.length ||
        (e.m_schHeartbeatTimeout.Cancel(),
        e.m_schManifestTimeout.Cancel(),
        this.m_mapBroadcasts.delete(e.m_steamIDBroadcast));
    }
    GetOrCreateClip(e) {
      let t = this.m_mapClips.get(e);
      return (
        t ||
        ((t = new gr()),
        (t.m_clipID = e),
        (t.m_eWatchState = 0),
        this.m_mapClips.set(e, t),
        t)
      );
    }
    GetOrCreateVOD(e) {
      let t = this.m_mapVODs.get(e);
      return (
        t ||
        ((t = new _r()),
        (t.m_nAppIDVOD = e),
        (t.m_eWatchState = 0),
        this.m_mapVODs.set(e, t),
        t)
      );
    }
    async LoadBroadcastInfo(e) {
      let t = `0`,
        n = this.m_mapBroadcasts.get(e.m_steamIDBroadcast);
      if ((n && (t = n.m_ulBroadcastID), e.m_nRefCount == 0)) return;
      let r = {
        steamid: e.m_steamIDBroadcast,
        broadcastid: t,
        location:
          n &&
          n.m_rgVideos &&
          n.m_rgVideos[0] &&
          n.m_rgVideos[0].GetWatchLocation(),
      };
      try {
        let t = await P.default.get(
          `${m.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
          { params: r },
        );
        if (!t || !t.data || !t.data.success || t.data.success != 1) {
          e.m_bInitialized = !0;
          return;
        }
        let n = t.data;
        ne(() => {
          ((e.m_bInitialized = !0),
            (e.m_strTitle = n.title),
            (e.m_strAppId = n.appid),
            (e.m_nAppID = Number.parseInt(n.appid)),
            (e.m_strAppTitle = n.app_title),
            (e.m_strThumbnailUrl = n.thumbnail_url),
            (e.m_nViewerCount = n.viewer_count),
            (e.m_bIsOnline = n.is_online),
            !e.m_strTitle &&
              R &&
              ((e.m_strTitle = R.name),
              (e.m_strAppTitle = R.appName || R.name)));
          let t = n.update_interval;
          t &&
            typeof t == `number` &&
            e.m_schUpdateTimeout.Schedule(t * 1e3, () =>
              this.LoadBroadcastInfo(e),
            );
        });
      } catch (e) {
        console.error(e);
      }
    }
    DelayedGetBroadcastManifest(e, t, n = Date.now()) {
      e.m_schManifestTimeout.Schedule(fr, () =>
        this.GetBroadcastManifest(e, t, n),
      );
    }
    async GetBroadcastManifest(e, t, n = Date.now()) {
      e.SetState(2, ``);
      let r = {
          steamid: e.m_steamIDBroadcast,
          broadcastid: 0,
          viewertoken: this.m_broadcastSettings.ulViewerToken,
          watchlocation: t,
          sessionid: s(),
          is_webrtc: e.m_bWebRTC,
        },
        i = null;
      try {
        i = await P.default.get(
          m.CHAT_BASE_URL + `broadcast/getbroadcastmpd/`,
          { params: r, withCredentials: !0 },
        );
      } catch (e) {
        let t = sn(e);
        console.error(`Failed to get broadcast manifest!` + t.strErrorMsg, t);
      }
      if (!i || i.status != 200) {
        e.SetState(4, w(`#BroadcastWatch_RequestFailed`));
        return;
      }
      let a = i.data;
      a.viewertoken && this.SetViewerToken(a.viewertoken);
      let o = a.success;
      if (o == `ready`)
        (e.SetState(3),
          (e.m_ulBroadcastID = a.broadcastid),
          (e.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
          (e.m_strCDNAuthUrlParameters = a.cdn_auth_url_parameters),
          (e.m_bWebRTC = a.is_webrtc),
          (e.m_data = a),
          this.LoadBroadcast(e),
          setTimeout(() => {
            e.m_schHeartbeatTimeout.Schedule(
              e.m_data.heartbeat_interval * 1e3,
              () => this.HeartbeatBroadcast(e),
            );
          }, Math.random() * 3e4));
      else if (o == `waiting`) {
        e.SetState(2, w(`#BroadcastWatch_WaitingForResponse`));
        let r = Date.now() - n;
        if (r > 6e4) {
          e.SetState(4, w(`#BroadcastWatch_NotAvailable`));
          return;
        }
        let i = r > 3e4 ? a.retry : 5e3;
        e.m_schManifestTimeout.Schedule(i, () =>
          this.GetBroadcastManifest(e, t, n),
        );
      } else
        o == `waiting_for_start`
          ? (e.SetState(2, w(`#BroadcastWatch_WaitingForStart`)),
            e.m_schManifestTimeout.Schedule(a.retry, () =>
              this.GetBroadcastManifest(e, t, n),
            ))
          : o == `waiting_for_reconnect`
            ? (e.SetState(2, w(`#BroadcastWatch_WaitingForReconnect`)),
              e.m_schManifestTimeout.Schedule(a.retry, () =>
                this.GetBroadcastManifest(e, t, n),
              ))
            : o == `end`
              ? e.SetState(4, w(`#BroadcastWatch_NotAvailable`))
              : o == `too_many_broadcasts`
                ? e.SetState(4, w(`#BroadcastWatch_TooManyBroadcasts`))
                : o == `system_not_supported`
                  ? e.SetState(4, w(`#BroadcastWatch_SystemNotSupported`))
                  : o == `user_restricted`
                    ? e.SetState(4, w(`#BroadcastWatch_UserRestricted`))
                    : o == `poor_upload_quality`
                      ? e.SetState(4, w(`#BroadcastWatch_PoorUploadQuality`))
                      : o == `request_failed`
                        ? e.SetState(4, w(`#BroadcastWatch_RequestFailed`))
                        : o == `too_many_viewers`
                          ? e.SetState(4, w(`#BroadcastWatch_TooManyViewers`))
                          : e.SetState(4, w(`#BroadcastWatch_NotAvailable`));
    }
    async GetClipManifest(e, t) {
      e.SetState(2, ``);
      let n = { clipid: e.m_clipID, watchlocation: t, sessionid: s() },
        r = null;
      try {
        r = await P.default.get(m.CHAT_BASE_URL + `broadcast/getclipdetails`, {
          params: n,
          withCredentials: !0,
        });
      } catch (e) {
        (console.error(e), console.log(`Failed to get clip manifest!`));
      }
      if (!r || r.status != 200) {
        e.SetState(4, w(`#BroadcastWatch_RequestFailed`));
        return;
      }
      let i = r.data;
      i.success == 1
        ? (e.SetState(3), (e.m_data = i), this.LoadClip(e))
        : e.SetState(4, w(`#BroadcastWatch_RequestFailed`));
    }
    async GetVODManifest(e, t) {
      e.SetState(2, ``);
      let n = await W.fetchQuery(On(e.m_nAppIDVOD)).catch((t) => {
        console.error(
          `BroadcastWatchStore:GetVODManifest: Failed to load VOD ` +
            e.m_nAppIDVOD,
          t,
        );
      });
      n
        ? (n.bookmark
            ? q.Get().SetBookmarkForApp(e.m_nAppIDVOD, n.bookmark)
            : q.Get().InitializeBookmarkForApp(e.m_nAppIDVOD),
          e.SetState(3),
          (e.m_manifestURL = n.video_url),
          this.LoadVOD(e))
        : e.SetState(4, w(`#BroadcastWatch_RequestFailed`));
    }
    async HeartbeatBroadcast(e) {
      let t = new FormData();
      (t.append(`steamid`, e.m_steamIDBroadcast),
        t.append(`broadcastid`, e.m_ulBroadcastID),
        t.append(`viewertoken`, this.m_broadcastSettings.ulViewerToken),
        P.default.post(m.CHAT_BASE_URL + `broadcast/heartbeat/`, t),
        e.m_schHeartbeatTimeout.Schedule(
          e.m_data.heartbeat_interval * 1e3,
          () => this.HeartbeatBroadcast(e),
        ));
    }
    LoadBroadcast(e) {
      let t = this.m_activeVideo;
      t && e.m_rgVideos.findIndex((e) => e == t) >= 0 && t.StartBroadcast(e);
    }
    LoadClip(e) {
      let t = this.m_activeVideo;
      t && e.m_rgVideos.findIndex((e) => e == t) >= 0 && t.StartClip(e);
    }
    LoadVOD(e) {
      let t = this.m_activeVideo;
      t && e.m_rgVideos.findIndex((e) => e == t) >= 0 && t.StartVOD(e);
    }
    BroadcastDownloadFailed(e, t = !0, n = M.Invalid) {
      e.Stop();
      let r = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
      r &&
        r.m_eWatchState != 2 &&
        (r.m_bWebRTC && t && (r.m_bWebRTC = !1),
        n == M.StreamGone
          ? this.DelayedGetBroadcastManifest(r, e.GetWatchLocation())
          : this.GetBroadcastManifest(r, e.GetWatchLocation()));
    }
    UserInputClickVideo(e) {
      if (
        this.m_activeVideo != e &&
        (this.PauseAllVideo(),
        (this.m_activeVideo = e),
        !e.IsBroadcastClip() && !e.IsBroadcastVOD())
      ) {
        let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
        t && this.GetBroadcastManifest(t, e.GetWatchLocation());
      }
      e.UserInputClick();
    }
    LoadBroadcastSettings() {
      if (!window.localStorage) return;
      let e = window.localStorage.getItem(`broadcastSettings`);
      if (!e) return;
      let t = JSON.parse(e);
      if (!t) return;
      Object.assign(this.m_broadcastSettings, t);
      let n = this.m_broadcastSettings;
      ((n.bMuted = !!n.bMuted),
        (n.nVolume = x(n.nVolume, 0, 1)),
        typeof n.ulViewerToken != `string` && (n.ulViewerToken = `0`));
    }
    SaveBroadcastSettings() {
      window.localStorage &&
        this.m_schSaveSettings.Schedule(dr, () => {
          try {
            window.localStorage.setItem(
              `broadcastSettings`,
              JSON.stringify(this.m_broadcastSettings),
            );
          } catch {}
        });
    }
    SetViewerToken(e) {
      this.m_broadcastSettings.ulViewerToken != e &&
        ((this.m_broadcastSettings.ulViewerToken = e),
        this.SaveBroadcastSettings());
    }
    GetViewerToken() {
      return this.m_broadcastSettings.ulViewerToken;
    }
    SaveVolumeChange(e, t) {
      (this.m_broadcastSettings.nVolume != e ||
        this.m_broadcastSettings.bMuted != t) &&
        ((this.m_broadcastSettings.nVolume = e),
        (this.m_broadcastSettings.bMuted = t),
        this.SaveBroadcastSettings());
    }
  };
p([l], Z.prototype, `m_mapBroadcasts`, void 0);
var vr = (function (e) {
    return (
      (e[(e.Timeline = 1)] = `Timeline`), (e[(e.Minimap = 2)] = `Minimap`), e
    );
  })({}),
  Q = class {
    m_elVideo;
    m_player = null;
    m_listeners = new i();
    m_gameDataParser = null;
    m_eWatchLocation = 0;
    m_bStartWithSubtitles = !1;
    m_steamIDBroadcast = ``;
    m_BroadcastInfo = null;
    m_broadcastClipID = ``;
    m_nBroadcastAppIDVOD = 0;
    m_bPaused = !1;
    m_nPlaybackTime = 0;
    m_bBuffering = !1;
    m_bOnLiveEdge = !1;
    m_nVolume = 0;
    m_bMuted = !1;
    m_bUserInputNeeded = !1;
    m_bIsReplay = !1;
    m_nTimelineDuration = ur;
    m_nVideoStartPos = 0;
    m_nVideoEndPos = 0;
    m_editorStartTime = 0;
    m_editorEndTime = 0;
    m_rgMarkers = l.array();
    m_rgSegments = l.array();
    m_rgRegions = l.array();
    m_fnOnVideoEnd;
    m_videoEndingTimer;
    constructor(e, t, n, r) {
      (g(this),
        (this.m_elVideo = e),
        (this.m_nVolume = t),
        (this.m_bMuted = n),
        (this.m_eWatchLocation = r));
    }
    SetBroadcastSteamID(e) {
      this.m_steamIDBroadcast = e;
    }
    GetBroadcastSteamID() {
      return this.m_steamIDBroadcast;
    }
    GetWatchLocation() {
      return this.m_eWatchLocation;
    }
    IsPaused() {
      return this.m_bPaused;
    }
    GetPlaybackTime() {
      return this.m_nPlaybackTime;
    }
    SetStatsViewIsVisible(e) {
      this.m_player && this.m_player.SetStatsViewIsVisible(e);
    }
    GetDASHPlayerStats() {
      return this.m_player?.GetDASHPlayerStats();
    }
    BHasDASHStats() {
      return this.m_player != null;
    }
    IsTimelineMapActive() {
      return !1;
    }
    CanSeek() {
      return this.m_player?.CanSeek() ?? !1;
    }
    IsBuffering() {
      return this.m_bBuffering;
    }
    IsOnLiveEdge() {
      return this.m_bOnLiveEdge;
    }
    GetVideoAvailableStartTime() {
      return this.m_nVideoStartPos;
    }
    GetVolume() {
      return this.m_nVolume;
    }
    GetUserInputNeeded() {
      return this.m_bUserInputNeeded;
    }
    IsReplay() {
      return this.m_bIsReplay;
    }
    IsBroadcastClip() {
      return !!this.m_broadcastClipID;
    }
    SetBroadcastClipID(e) {
      this.m_broadcastClipID = e;
    }
    GetBroadcastClipID() {
      return this.m_broadcastClipID;
    }
    IsBroadcastVOD() {
      return !!this.m_nBroadcastAppIDVOD;
    }
    SetBroadcastAppIDVOD(e) {
      this.m_nBroadcastAppIDVOD = e;
    }
    GetBroadcastAppIDVOD() {
      return this.m_nBroadcastAppIDVOD;
    }
    GetVideoRepresentations() {
      return this.m_player ? this.m_player.GetVideoRepresentations() : [];
    }
    SetVideoRepresentation(e) {
      this.m_player?.SetVideoRepresentation(e);
    }
    GetBroadcastInfo() {
      return this.m_BroadcastInfo;
    }
    BHasTimedText() {
      return this.m_player?.BHasTimedText() ?? !1;
    }
    BHasPlayer() {
      return !!this.m_player;
    }
    ListSubtitles() {
      return this.m_elVideo.textTracks;
    }
    GetSubtitles() {
      for (let e = 0; e < this.m_elVideo.textTracks.length; e++) {
        let t = this.m_elVideo.textTracks[e];
        if (t.mode === `showing`) return t;
      }
      return null;
    }
    SetSubtitles(e) {
      let t = e ? re[e] : -1;
      this.m_player.SetSubtitles(t);
    }
    SetStartWithSubtitles(e) {
      this.m_bStartWithSubtitles = e;
    }
    GetBroadcastState() {
      return $.GetBroadcastState(this);
    }
    GetBroadcastStateDescription() {
      return $.GetBroadcastStateDescription(this);
    }
    SetOnVideoCallback(e) {
      this.m_fnOnVideoEnd = e;
    }
    InitPlayer() {
      (ae(!this.m_player, `Initialized twice?`),
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
          `volumechange`,
          this.OnVolumeUpdated,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-bufferupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-gamedataupdate`,
          this.OnGameDataUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-downloadfailed`,
          this.OnDownloadFailed,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-webrtcretry`,
          this.OnWebRTCRetry,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-webrtcfailed`,
          this.OnWebRTCFailed,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-userinputneeded`,
          this.OnUserInputNeeded,
        ),
        (this.m_bPaused = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_bBuffering = !1),
        (this.m_nTimelineDuration = ur),
        (this.m_nVideoStartPos = 0),
        (this.m_nVideoEndPos = 0),
        this.m_rgMarkers.clear(),
        this.m_rgSegments.clear(),
        (this.m_bUserInputNeeded = !1),
        (this.m_bIsReplay = !1));
    }
    Restart() {
      this.IsMuted() ||
        this.IsPaused() ||
        this.GetUserInputNeeded() ||
        this.Play();
    }
    StartBroadcast(e) {
      if ((this.InitPlayer(), e.m_data.url)) {
        let t = new j(this.m_elVideo);
        (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
          (this.m_player = t),
          t.PlayMPD(
            e.m_data.url,
            e.m_data.hls_url,
            void 0,
            e.m_strCDNAuthUrlParameters,
          ));
      } else {
        let t = new B(this.m_elVideo);
        ((this.m_player = t),
          t.PlayWebRTC(
            this.m_steamIDBroadcast,
            e.m_ulViewerToken,
            e.m_data.webrtc_session_id,
            e.m_data.webrtc_turn_server,
            e.m_data.webrtc_offer_sdp,
          ));
      }
      (this.SetVolume(this.m_nVolume), this.m_player?.SetMuted(this.m_bMuted));
      let t = this.m_player?.GetDASHPlayerStats();
      (t &&
        t.SetBroadcasterAndViewerInfo(
          this.m_steamIDBroadcast,
          c.steamid,
          e.m_ulBroadcastID,
          e.m_ulViewerToken,
        ),
        (this.m_BroadcastInfo = $.StartInfo(this.m_steamIDBroadcast)));
    }
    StartClip(e) {
      this.InitPlayer();
      let t = new j(this.m_elVideo);
      (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
        (this.m_player = t),
        t.PlayMPD(e.m_data.clip_url),
        this.SetVolume(this.m_nVolume),
        this.m_player?.SetMuted(this.m_bMuted));
    }
    StartVOD(e) {
      this.InitPlayer();
      let t = new j(this.m_elVideo);
      (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
        (this.m_player = t),
        c.logged_in &&
          e.m_nAppIDVOD &&
          t.SetBookmarkAdapter(new cr(e.m_nAppIDVOD)),
        e.m_manifestURL && t.PlayMPD(e.m_manifestURL),
        this.SetVolume(this.m_nVolume),
        this.m_player?.SetMuted(this.m_bMuted));
    }
    Stop() {
      (this.m_listeners.Unregister(),
        (this.m_BroadcastInfo &&= ($.StopInfo(this.m_BroadcastInfo), null)),
        (this.m_gameDataParser = null),
        (this.m_player &&= (this.m_player.Close(), null)));
    }
    TogglePlayPause() {
      !this.m_player || this.m_player.IsPaused() ? this.Play() : this.Pause();
    }
    Play() {
      let e = this.GetBroadcastState();
      if (e == 0 || this.IsBroadcastClip()) $.StartVideo(this);
      else if (e == 3) {
        if (($.SetActiveVideo(this), this.m_player)) this.m_player.Play();
        else if (this.IsBroadcastVOD()) {
          let e = $.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
          e && this.StartVOD(e);
        } else {
          let e = $.GetBroadcast(this.m_steamIDBroadcast);
          e && this.StartBroadcast(e);
        }
      }
    }
    Pause() {
      (console.log(
        `Pause `,
        this.m_steamIDBroadcast,
        this.m_nBroadcastAppIDVOD,
        this.m_broadcastClipID,
      ),
        this.m_player && this.m_player.Pause());
    }
    JumpTime(e) {
      this.m_player?.JumpTime(e);
    }
    Seek(e) {
      this.m_player?.Seek(e);
    }
    SeekAndPlay(e) {
      this.m_player?.SeekAndPlay(e);
    }
    JumpToLiveEdge() {
      let e = this.m_player;
      e &&
        (e.IsLiveContent()
          ? this.SeekAndPlay(e.GetBufferedLiveEdgeTime())
          : this.SeekAndPlay(e.GetAvailableVideoStartTime()));
    }
    SetVolume(e) {
      (this.m_player &&
        (this.m_player.SetVolume(e),
        (this.m_nVolume = this.m_player.GetVolume())),
        $.SaveVolumeChange(e, this.m_bMuted));
    }
    SetMute(e) {
      (this.m_player && this.m_player.SetMuted(e),
        (this.m_bMuted = e),
        $.SaveVolumeChange(this.m_nVolume, e));
    }
    IsMuted() {
      return this.m_bMuted;
    }
    OnVideoPlaying() {
      ((this.m_bPaused = !1),
        this.m_editorStartTime === 0 &&
          this.m_editorEndTime === 0 &&
          ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
          (this.m_editorEndTime =
            this.GetVideoAvailableStartTime() + this.GetTimelineDuration())));
    }
    OnVideoPause() {
      this.m_bPaused = !0;
    }
    OnVideoTimeUpdate() {
      window.clearTimeout(this.m_videoEndingTimer);
      let e = this.m_player;
      if (e) {
        if (this.IsBroadcastClip())
          ((this.m_nPlaybackTime = e.GetCurrentPlayTime()),
            (this.m_nVideoStartPos = e.GetAvailableVideoStartTime()),
            (this.m_nVideoEndPos = e.GetBufferedLiveEdgeTime()),
            (this.m_nTimelineDuration =
              this.m_nVideoEndPos - this.m_nVideoStartPos),
            (this.m_bOnLiveEdge = !1),
            (this.m_bBuffering = e.IsBuffering()));
        else {
          if (
            ((this.m_nPlaybackTime = e.GetCurrentPlayTime()),
            (this.m_nVideoStartPos = e.GetAvailableVideoStartTime()),
            (this.m_nVideoEndPos = Math.max(
              e.GetBufferedLiveEdgeTime(),
              this.m_nPlaybackTime,
            )),
            this.IsBroadcastVOD())
          ) {
            this.m_nTimelineDuration = this.m_nVideoEndPos;
            let e = this.m_fnOnVideoEnd;
            e &&
              this.m_nVideoEndPos - this.m_nPlaybackTime < 5 &&
              (this.m_videoEndingTimer = window.setTimeout(() => {
                e();
              }, 400));
          }
          ((this.m_bBuffering = e.IsBuffering()),
            (this.m_bOnLiveEdge =
              this.m_nVideoEndPos - this.m_nPlaybackTime < 5),
            e.IsPaused() && (this.m_bOnLiveEdge = !1));
        }
      }
    }
    OnVolumeUpdated() {
      let e = this.m_player;
      e && ((this.m_nVolume = e.GetVolume()), (this.m_bMuted = e.IsMuted()));
    }
    OnGameDataUpdate(e) {
      let t = e.detail;
      if (!t || typeof t.gamedata != `object`) return;
      (this.m_gameDataParser &&
        this.m_gameDataParser.GetAppID() == t.gamedata.__appid) ||
        (this.m_gameDataParser = new pn(t.gamedata.__appid));
      let n = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
      if (`timelinemarkers` in t.gamedata) {
        let e = this.m_gameDataParser.UpdateMarkers(
          t.gamedata.__timelinemarkers,
          n,
        );
        e &&
          (this.m_rgMarkers.replace(e.rgMarkers || []),
          this.m_rgSegments.replace(e.rgSegments || []));
        let r = this.m_gameDataParser.UpdateRegions(t.gamedata.__regions);
        r && this.m_rgRegions.replace(r);
      } else
        `soundtrack` in t.gamedata &&
          this.m_gameDataParser.UpdateSoundtrack(
            this.m_steamIDBroadcast,
            t.gamedata.soundtrack,
          );
    }
    OnDownloadFailed(e) {
      let t = e.detail || M.Invalid;
      $.BroadcastDownloadFailed(this, !0, t);
    }
    OnWebRTCRetry() {
      $.BroadcastDownloadFailed(this, !1);
    }
    OnWebRTCFailed() {
      $.BroadcastDownloadFailed(this, !0);
    }
    OnUserInputNeeded() {
      this.m_bUserInputNeeded = !0;
    }
    UserInputClick() {
      ((this.m_bUserInputNeeded = !1),
        this.m_player ? this.JumpToLiveEdge() : this.Play());
    }
    StopPlaybackTillUserInput() {
      (this.Stop(), this.OnUserInputNeeded());
    }
    GetTimelineStartPos() {
      return this.m_nVideoEndPos - this.m_nTimelineDuration;
    }
    GetTimelineDuration() {
      return this.m_nTimelineDuration;
    }
    GetTimeAtMousePosition(e, t, n, r) {
      let i = se(e, t.left, t.right, n, r);
      return Math.floor(i + 0.5);
    }
    GetPercentOffsetFromTime(e, t) {
      let n = 0,
        r = 0;
      return (
        t == 1
          ? ((r = this.m_nVideoEndPos), (n = r - this.m_nTimelineDuration))
          : ((n = 0), (r = 0)),
        se(e, n, r, 0, 100)
      );
    }
    GetTimelineMarkers() {
      return this.m_rgMarkers;
    }
    GetTimelineSegments() {
      return this.m_rgSegments;
    }
    GetGameDataRegions() {
      return this.m_rgRegions;
    }
    BHasMarkersOrSegments() {
      return this.has_segments || this.has_markers;
    }
    get has_markers() {
      return this.m_rgMarkers.length > 0;
    }
    get has_segments() {
      return this.m_rgSegments.length > 0;
    }
  };
(p([l], Q.prototype, `m_player`, void 0),
  p([l], Q.prototype, `m_bPaused`, void 0),
  p([l], Q.prototype, `m_nPlaybackTime`, void 0),
  p([l], Q.prototype, `m_bBuffering`, void 0),
  p([l], Q.prototype, `m_bOnLiveEdge`, void 0),
  p([l], Q.prototype, `m_nVolume`, void 0),
  p([l], Q.prototype, `m_bMuted`, void 0),
  p([l], Q.prototype, `m_bUserInputNeeded`, void 0),
  p([l], Q.prototype, `m_bIsReplay`, void 0),
  p([l], Q.prototype, `m_nTimelineDuration`, void 0),
  p([l], Q.prototype, `m_nVideoStartPos`, void 0),
  p([l], Q.prototype, `m_nVideoEndPos`, void 0),
  p([l], Q.prototype, `m_editorStartTime`, void 0),
  p([l], Q.prototype, `m_editorEndTime`, void 0),
  p([d.bound], Q.prototype, `StartBroadcast`, null),
  p([d.bound], Q.prototype, `StartClip`, null),
  p([d.bound], Q.prototype, `StartVOD`, null),
  p([f], Q.prototype, `OnVideoPlaying`, null),
  p([f], Q.prototype, `OnVideoPause`, null),
  p([d.bound], Q.prototype, `OnVideoTimeUpdate`, null),
  p([f], Q.prototype, `OnVolumeUpdated`, null),
  p([d.bound], Q.prototype, `OnGameDataUpdate`, null),
  p([f], Q.prototype, `OnDownloadFailed`, null),
  p([f], Q.prototype, `OnWebRTCRetry`, null),
  p([f], Q.prototype, `OnWebRTCFailed`, null),
  p([f], Q.prototype, `OnUserInputNeeded`, null));
var $ = new Z();
window.uiBroadcastWatchStore = $;
export {
  ze as C,
  lt as D,
  pt as E,
  Le as S,
  st as T,
  cn as _,
  G as a,
  R as b,
  Kn as c,
  Wn as d,
  Vn as f,
  un as g,
  vn as h,
  lr as i,
  Hn as l,
  Tn as m,
  pr as n,
  Xn as o,
  W as p,
  vr as r,
  qn as s,
  $ as t,
  Un as u,
  sn as v,
  dt as w,
  nn as x,
  on as y,
};
