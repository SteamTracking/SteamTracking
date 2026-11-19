import { o as e, r as t } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Bn as n,
  Da as r,
  Ga as i,
  Ia as a,
  Jr as o,
  Ka as s,
  Ma as c,
  Na as l,
  Sa as u,
  Si as ee,
  Xa as te,
  _i as d,
  _t as f,
  ai as ne,
  ar as p,
  bi as m,
  cn as h,
  ct as g,
  fi as _,
  ga as v,
  gi as y,
  hi as b,
  ht as x,
  ir as S,
  ln as C,
  mi as w,
  pn as T,
  vi as E,
  vn as re,
  xi as D,
  yi as O,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { t as k } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { C as A, g as ie } from "./library.js?contenthash=CVZWwsCP";
import {
  d as ae,
  r as oe,
  t as se,
} from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import {
  a as ce,
  l as j,
  n as M,
  o as le,
  t as N,
  u as P,
} from "./chunk~b980797e15.js?contenthash=DrhO3T5K";
var F = e(A()),
  I = e(ee(), 1),
  ue = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: d.readInt32, bw: D.writeInt32 },
            gameid: { n: 2, br: d.readUint64String, bw: D.writeUint64String },
            client_instance_id: {
              n: 3,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            title: { n: 4, br: d.readString, bw: D.writeString },
            cellid: { n: 5, br: d.readUint32, bw: D.writeUint32 },
            rtmp_token: {
              n: 6,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            thumbnail_upload: { n: 7, br: d.readBool, bw: D.writeBool },
            sysid: { n: 9, br: d.readUint32, bw: D.writeUint32 },
            allow_webrtc: { n: 10, br: d.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  de = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            thumbnail_upload_address: {
              n: 2,
              br: d.readString,
              bw: D.writeString,
            },
            thumbnail_upload_token: {
              n: 3,
              br: d.readString,
              bw: D.writeString,
            },
            thumbnail_interval_seconds: {
              n: 4,
              br: d.readUint32,
              bw: D.writeUint32,
            },
            heartbeat_interval_seconds: {
              n: 5,
              br: d.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  fe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Request`;
    }
  },
  pe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Response`;
    }
  },
  me = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            cellid: { n: 2, br: d.readUint32, bw: D.writeUint32 },
            as_rtmp: { n: 3, br: d.readBool, bw: D.writeBool },
            delay_seconds: { n: 4, br: d.readUint32, bw: D.writeUint32 },
            rtmp_token: {
              n: 5,
              d: `0`,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            upload_ip_address: { n: 6, br: d.readUint32, bw: D.writeUint32 },
            is_replay: { n: 7, br: d.readBool, bw: D.writeBool },
            sysid: { n: 8, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  he = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_token || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_token: { n: 1, br: d.readString, bw: D.writeString },
            upload_address: { n: 2, br: d.readString, bw: D.writeString },
            broadcast_upload_id: {
              n: 3,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            enable_replay: { n: 6, br: d.readBool, bw: D.writeBool },
            http_address: { n: 7, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  ge = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            upload_token: { n: 2, br: d.readString, bw: D.writeString },
            upload_address: { n: 3, br: d.readString, bw: D.writeString },
            http_address: { n: 4, br: d.readString, bw: D.writeString },
            broadcast_upload_id: {
              n: 5,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              n: 6,
              br: d.readUint32,
              bw: D.writeUint32,
            },
            is_rtmp: { n: 7, br: d.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  _e = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  ve = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: d.readUint64String, bw: D.writeUint64String },
            title: { n: 2, br: d.readString, bw: D.writeString },
            num_viewers: { n: 3, br: d.readUint32, bw: D.writeUint32 },
            permission: { n: 4, br: d.readInt32, bw: D.writeInt32 },
            is_rtmp: { n: 5, br: d.readBool, bw: D.writeBool },
            seconds_delay: { n: 6, br: d.readInt32, bw: D.writeInt32 },
            is_publisher: { n: 7, br: d.readBool, bw: D.writeBool },
            thumbnail_url: { n: 8, br: d.readString, bw: D.writeString },
            update_interval: { n: 9, br: d.readInt32, bw: D.writeInt32 },
            is_uploading: { n: 10, br: d.readBool, bw: D.writeBool },
            duration: { n: 11, br: d.readUint32, bw: D.writeUint32 },
            is_replay: { n: 12, br: d.readBool, bw: D.writeBool },
            is_capturing_vod: { n: 13, br: d.readBool, bw: D.writeBool },
            is_store_whitelisted: { n: 14, br: d.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  ye = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  be = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_url || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_url: { n: 1, br: d.readString, bw: D.writeString },
            update_interval: { n: 2, br: d.readInt32, bw: D.writeInt32 },
            num_viewers: { n: 3, br: d.readInt32, bw: D.writeInt32 },
            duration: { n: 4, br: d.readInt32, bw: D.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  xe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            existing_broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            client_cell: { n: 5, br: d.readUint32, bw: D.writeUint32 },
            watch_location: { n: 6, br: d.readEnum, bw: D.writeEnum },
            is_webrtc: { n: 7, br: d.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  Se = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.response || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            response: { n: 1, br: d.readEnum, bw: D.writeEnum },
            mpd_url: { n: 2, br: d.readString, bw: D.writeString },
            broadcast_id: {
              n: 3,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            gameid: { n: 4, br: d.readUint64String, bw: D.writeUint64String },
            title: { n: 5, br: d.readString, bw: D.writeString },
            num_viewers: { n: 6, br: d.readUint32, bw: D.writeUint32 },
            permission: { n: 7, br: d.readInt32, bw: D.writeInt32 },
            is_rtmp: { n: 8, br: d.readBool, bw: D.writeBool },
            seconds_delay: { n: 9, br: d.readInt32, bw: D.writeInt32 },
            viewer_token: {
              n: 10,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            hls_m3u8_master_url: { n: 11, br: d.readString, bw: D.writeString },
            heartbeat_interval: { n: 12, br: d.readInt32, bw: D.writeInt32 },
            thumbnail_url: { n: 13, br: d.readString, bw: D.writeString },
            is_webrtc: { n: 14, br: d.readBool, bw: D.writeBool },
            webrtc_session_id: {
              n: 15,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            webrtc_offer_sdp: { n: 16, br: d.readString, bw: D.writeString },
            webrtc_turn_server: { n: 17, br: d.readString, bw: D.writeString },
            is_replay: { n: 18, br: d.readBool, bw: D.writeBool },
            duration: { n: 19, br: d.readInt32, bw: D.writeInt32 },
            cdn_auth_url_parameters: {
              n: 20,
              br: d.readString,
              bw: D.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  Ce = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            representation: { n: 4, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  we = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  Te = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            approval_response: { n: 2, br: d.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  Ee = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: d.readBool, bw: D.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  De = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: d.readInt32, bw: D.writeInt32 },
            gameid: { n: 2, br: d.readUint64String, bw: D.writeUint64String },
            title: { n: 3, br: d.readString, bw: D.writeString },
            game_data_config: { n: 4, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Request`;
    }
  },
  Oe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Response`;
    }
  },
  ke = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            state: { n: 2, br: d.readEnum, bw: D.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  Ae = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  je = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            broadcast_relay_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            upload_result: { n: 3, br: d.readUint32, bw: D.writeUint32 },
            too_many_poor_uploads: { n: 4, br: d.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  Me = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  Ne = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            num_viewers: { n: 2, br: d.readInt32, bw: D.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  Pe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            broadcast_channel_name: {
              n: 2,
              br: d.readString,
              bw: D.writeString,
            },
            broadcast_channel_avatar: {
              n: 3,
              br: d.readString,
              bw: D.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  Fe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_upload_token || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readString,
              bw: D.writeString,
            },
            thumbnail_broadcast_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            thumbnail_data: { n: 3, br: d.readBytes, bw: D.writeBytes },
            thumbnail_width: { n: 4, br: d.readUint32, bw: D.writeUint32 },
            thumbnail_height: { n: 5, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  Ie = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_upload_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            upload_result: { n: 2, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  Le = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  Re = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  ze = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            client_ip: { n: 3, br: d.readUint32, bw: D.writeUint32 },
            client_cell: { n: 4, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  Be = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [4], null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            view_url_template: { n: 3, br: d.readString, bw: D.writeString },
            flair_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  Ve = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            message: { n: 2, br: d.readString, bw: D.writeString },
            instance_id: { n: 3, br: d.readUint32, bw: D.writeUint32 },
            language: { n: 4, d: 0, br: d.readUint32, bw: D.writeUint32 },
            country_code: { n: 5, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  He = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_name || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            persona_name: { n: 1, br: d.readString, bw: D.writeString },
            in_game: { n: 2, br: d.readBool, bw: D.writeBool },
            result: { n: 3, br: d.readInt32, bw: D.writeInt32 },
            cooldown_time_seconds: { n: 4, br: d.readInt32, bw: D.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  Ue = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            flair: { n: 2, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  We = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            result: { n: 1, br: d.readInt32, bw: D.writeInt32 },
            chat_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            flair: { n: 3, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  Ge = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            muted: { n: 3, br: d.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Request`;
    }
  },
  Ke = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Response`;
    }
  },
  L = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Request`;
    }
  },
  qe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Response`;
    }
  },
  Je = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [2], null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readFixed64String,
              pbr: d.readPackedFixed64String,
              bw: D.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  Ye = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_names || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { persona_names: { n: 1, c: Xe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  Xe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steam_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            persona: { n: 2, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  Ze = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            broadcast_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            first_segment: { n: 3, br: d.readInt32, bw: D.writeInt32 },
            num_segments: { n: 4, br: d.readInt32, bw: D.writeInt32 },
            clip_description: { n: 5, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  Qe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  $e = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Request`;
    }
  },
  et = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Response`;
    }
  },
  tt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            start_time: { n: 2, br: d.readUint32, bw: D.writeUint32 },
            end_time: { n: 3, br: d.readUint32, bw: D.writeUint32 },
            video_description: { n: 4, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Request`;
    }
  },
  nt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Response`;
    }
  },
  rt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  it = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            video_id: { n: 2, br: d.readUint64String, bw: D.writeUint64String },
            channel_id: {
              n: 3,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            app_id: { n: 4, br: d.readUint32, bw: D.writeUint32 },
            accountid_broadcaster: {
              n: 5,
              br: d.readUint32,
              bw: D.writeUint32,
            },
            accountid_clipmaker: { n: 6, br: d.readUint32, bw: D.writeUint32 },
            video_description: { n: 7, br: d.readString, bw: D.writeString },
            start_time: { n: 8, br: d.readUint32, bw: D.writeUint32 },
            length_milliseconds: { n: 9, br: d.readUint32, bw: D.writeUint32 },
            thumbnail_path: { n: 10, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  at = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: d.readInt32, bw: D.writeInt32 },
            update_token: { n: 2, br: d.readBool, bw: D.writeBool },
            broadcast_delay: { n: 3, br: d.readInt32, bw: D.writeInt32 },
            app_id: { n: 4, br: d.readUint32, bw: D.writeUint32 },
            required_app_id: { n: 5, br: d.readUint32, bw: D.writeUint32 },
            broadcast_chat_permission: {
              n: 6,
              d: 0,
              br: d.readEnum,
              bw: D.writeEnum,
            },
            broadcast_buffer: { n: 7, br: d.readInt32, bw: D.writeInt32 },
            steamid: {
              n: 8,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            chat_rate_limit: { n: 9, br: d.readUint32, bw: D.writeUint32 },
            enable_replay: { n: 10, br: d.readBool, bw: D.writeBool },
            is_partner_chat_only: { n: 11, br: d.readBool, bw: D.writeBool },
            wordban_list: { n: 12, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Request`;
    }
  },
  ot = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Response`;
    }
  },
  st = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: d.readUint32, bw: D.writeUint32 },
            steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  ct = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: d.readInt32, bw: D.writeInt32 },
            rtmp_host: { n: 2, br: d.readString, bw: D.writeString },
            rtmp_token: { n: 3, br: d.readString, bw: D.writeString },
            broadcast_delay: { n: 4, br: d.readInt32, bw: D.writeInt32 },
            app_id: { n: 5, br: d.readUint32, bw: D.writeUint32 },
            required_app_id: { n: 6, br: d.readUint32, bw: D.writeUint32 },
            broadcast_chat_permission: {
              n: 7,
              br: d.readEnum,
              bw: D.writeEnum,
            },
            broadcast_buffer: { n: 8, br: d.readInt32, bw: D.writeInt32 },
            steamid: {
              n: 9,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            chat_rate_limit: { n: 10, br: d.readUint32, bw: D.writeUint32 },
            enable_replay: { n: 11, br: d.readBool, bw: D.writeBool },
            is_partner_chat_only: { n: 12, br: d.readBool, bw: D.writeBool },
            wordban_list: { n: 13, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  lt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.row_limit || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            row_limit: { n: 1, d: 100, br: d.readUint32, bw: D.writeUint32 },
            start_time: { n: 2, d: 0, br: d.readUint32, bw: D.writeUint32 },
            upload_id: {
              n: 3,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            steamid: {
              n: 4,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            session_id: {
              n: 5,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  ut = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_stats || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { upload_stats: { n: 1, c: dt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  dt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_result || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_result: { n: 1, br: d.readUint32, bw: D.writeUint32 },
            time_stopped: { n: 2, br: d.readUint32, bw: D.writeUint32 },
            seconds_uploaded: { n: 3, br: d.readUint32, bw: D.writeUint32 },
            max_viewers: { n: 4, br: d.readUint32, bw: D.writeUint32 },
            resolution_x: { n: 5, br: d.readUint32, bw: D.writeUint32 },
            resolution_y: { n: 6, br: d.readUint32, bw: D.writeUint32 },
            avg_bandwidth: { n: 7, br: d.readUint32, bw: D.writeUint32 },
            total_bytes: {
              n: 8,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            app_id: { n: 9, br: d.readUint32, bw: D.writeUint32 },
            total_unique_viewers: {
              n: 10,
              br: d.readUint32,
              bw: D.writeUint32,
            },
            total_seconds_watched: {
              n: 11,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            time_started: { n: 12, br: d.readUint32, bw: D.writeUint32 },
            upload_id: {
              n: 13,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            local_address: { n: 14, br: d.readString, bw: D.writeString },
            remote_address: { n: 15, br: d.readString, bw: D.writeString },
            frames_per_second: { n: 16, br: d.readUint32, bw: D.writeUint32 },
            num_representations: { n: 17, br: d.readUint32, bw: D.writeUint32 },
            app_name: { n: 18, br: d.readString, bw: D.writeString },
            is_replay: { n: 19, br: d.readBool, bw: D.writeBool },
            session_id: {
              n: 20,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  ft = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  pt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.viewer_stats || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            viewer_stats: { n: 1, c: mt, r: !0, q: !0 },
            country_stats: { n: 2, c: ht, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  mt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: d.readUint32, bw: D.writeUint32 },
            num_viewers: { n: 2, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  ht = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: d.readString, bw: D.writeString },
            num_viewers: { n: 2, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  gt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            started: { n: 2, br: d.readBool, bw: D.writeBool },
            offer: { n: 3, br: d.readString, bw: D.writeString },
            resolution_x: { n: 4, br: d.readUint32, bw: D.writeUint32 },
            resolution_y: { n: 5, br: d.readUint32, bw: D.writeUint32 },
            fps: { n: 6, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Request`;
    }
  },
  _t = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Response`;
    }
  },
  vt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Request`;
    }
  },
  yt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Response`;
    }
  },
  bt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            answer: { n: 3, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Request`;
    }
  },
  xt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Response`;
    }
  },
  R = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sdp_mid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sdp_mid: { n: 1, br: d.readString, bw: D.writeString },
            sdp_mline_index: { n: 2, br: d.readInt32, bw: D.writeInt32 },
            candidate: { n: 3, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  St = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            candidate: { n: 2, c: R },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
    }
  },
  Ct = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Response`;
    }
  },
  wt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            candidate: { n: 3, c: R },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
    }
  },
  Tt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Response`;
    }
  },
  Et = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            candidate_generation: { n: 3, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  Dt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.candidate_generation || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            candidate_generation: { n: 1, br: d.readUint32, bw: D.writeUint32 },
            candidates: { n: 2, c: R, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  Ot = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  kt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cellid || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cellid: { n: 1, br: d.readUint32, bw: D.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  At = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.turn_server || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            turn_server: { n: 1, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  jt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            turn_server: { n: 2, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  Mt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            viewer_steamid: {
              n: 3,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            viewer_token: {
              n: 4,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  Nt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            answer: { n: 3, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  Pt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: d.readFixed64String,
              bw: D.writeFixed64String,
            },
            candidate: { n: 3, c: R },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  z;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Broadcast.BeginBroadcastSession#1`, p(ue, t, n), de, {
      ePrivilege: 1,
    });
  }
  e.BeginBroadcastSession = t;
  function n(e, t, n) {
    return e.SendMsg(`Broadcast.EndBroadcastSession#1`, p(fe, t, n), pe, {
      ePrivilege: 1,
    });
  }
  e.EndBroadcastSession = n;
  function r(e, t, n) {
    return e.SendMsg(`Broadcast.StartBroadcastUpload#1`, p(me, t, n), he, {
      ePrivilege: 1,
    });
  }
  e.StartBroadcastUpload = r;
  function i(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      p(Ie, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastUploadStop = i;
  function a(e, t, n) {
    return e.SendMsg(`Broadcast.WatchBroadcast#1`, p(xe, t, n), Se, {
      ePrivilege: 2,
    });
  }
  e.WatchBroadcast = a;
  function o(e, t) {
    return e.SendNotification(`Broadcast.HeartbeatBroadcast#1`, p(Ce, t), {
      ePrivilege: 2,
    });
  }
  e.HeartbeatBroadcast = o;
  function s(e, t) {
    return e.SendNotification(`Broadcast.StopWatchingBroadcast#1`, p(we, t), {
      ePrivilege: 2,
    });
  }
  e.StopWatchingBroadcast = s;
  function c(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastStatus#1`, p(_e, t, n), ve, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastStatus = c;
  function l(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, p(ye, t, n), be, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastThumbnail = l;
  function u(e, t, n) {
    return e.SendMsg(`Broadcast.InviteToBroadcast#1`, p(Te, t, n), Ee, {
      ePrivilege: 1,
    });
  }
  e.InviteToBroadcast = u;
  function ee(e, t, n) {
    return e.SendMsg(
      `Broadcast.SendBroadcastStateToServer#1`,
      p(De, t, n),
      Oe,
      { ePrivilege: 1 },
    );
  }
  e.SendBroadcastStateToServer = ee;
  function te(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      p(Re, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastSessionHeartbeat = te;
  function d(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, p(ze, t, n), Be, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastChatInfo = d;
  function f(e, t, n) {
    return e.SendMsg(`Broadcast.PostChatMessage#1`, p(Ve, t, n), He, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.PostChatMessage = f;
  function ne(e, t, n) {
    return e.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, p(Ue, t, n), We, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.UpdateChatMessageFlair = ne;
  function m(e, t, n) {
    return e.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, p(Ge, t, n), Ke, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.MuteBroadcastChatUser = m;
  function h(e, t, n) {
    return e.SendMsg(`Broadcast.RemoveUserChatText#1`, p(L, t, n), qe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.RemoveUserChatText = h;
  function g(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, p(Je, t, n), Ye, {
      ePrivilege: 1,
    });
  }
  e.GetBroadcastChatUserNames = g;
  function _(e, t, n) {
    return e.SendMsg(`Broadcast.StartBuildClip#1`, p(Ze, t, n), Qe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.StartBuildClip = _;
  function v(e, t, n) {
    return e.SendMsg(`Broadcast.GetBuildClipStatus#1`, p($e, t, n), et, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBuildClipStatus = v;
  function y(e, t, n) {
    return e.SendMsg(`Broadcast.SetClipDetails#1`, p(tt, t, n), nt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetClipDetails = y;
  function b(e, t, n) {
    return e.SendMsg(`Broadcast.GetClipDetails#1`, p(rt, t, n), it, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetClipDetails = b;
  function x(e, t, n) {
    return e.SendMsg(`Broadcast.SetRTMPInfo#1`, p(at, t, n), ot, {
      ePrivilege: 1,
    });
  }
  e.SetRTMPInfo = x;
  function S(e, t, n) {
    return e.SendMsg(`Broadcast.GetRTMPInfo#1`, p(st, t, n), ct, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRTMPInfo = S;
  function C(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      p(jt, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyWebRTCHaveTURNServer = C;
  function w(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStartResult#1`, p(gt, t, n), _t, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStartResult = w;
  function T(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStopped#1`, p(vt, t, n), yt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStopped = T;
  function E(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCSetAnswer#1`, p(bt, t, n), xt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCSetAnswer = E;
  function re(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, p(kt, t, n), At, {
      ePrivilege: 1,
    });
  }
  e.WebRTCLookupTURNServer = re;
  function D(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, p(St, t, n), Ct, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddHostCandidate = D;
  function O(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, p(wt, t, n), Tt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddViewerCandidate = O;
  function k(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, p(Et, t, n), Dt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCGetHostCandidates = k;
  function A(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, p(lt, t, n), ut, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastUploadStats = A;
  function ie(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, p(ft, t, n), pt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastViewerStats = ie;
})((z ||= {}));
var Ft;
((function (e) {
  ((e.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: ke,
  }),
    (e.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: Ae,
    }),
    (e.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: ge,
    }),
    (e.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: je,
    }),
    (e.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: Me,
    }),
    (e.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: Le,
    }),
    (e.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: Ne,
    }),
    (e.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: Pe,
    }),
    (e.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: Fe,
    }),
    (e.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: Ot,
    }),
    (e.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: Mt,
    }),
    (e.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: Nt,
    }),
    (e.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: Pt,
    }));
})((Ft ||= {})),
  c.CHAT_BASE_URL + ``,
  c.CHAT_BASE_URL + ``);
var B = class {
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
    (i(this), this.init(e));
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
(T([s], B.prototype, `bValid`, void 0),
  T([s], B.prototype, `stream`, void 0),
  T([s], B.prototype, `name`, void 0),
  T([s], B.prototype, `appName`, void 0),
  T([s], B.prototype, `appID`, void 0),
  T([s], B.prototype, `link`, void 0),
  T([s], B.prototype, `linkName`, void 0),
  T([s], B.prototype, `tabIcon`, void 0),
  T([s], B.prototype, `offlineImage`, void 0),
  T([s], B.prototype, `gidEvent`, void 0));
var V = new B({
    bValid: !1,
    stream: { 0: `#Broadcast_EnglishMain` },
    name: ``,
    appName: ``,
    appID: 0,
    link: ``,
    linkName: ``,
    tabIcon: ``,
    offlineImage: ``,
  }),
  It = (function (e) {
    return (
      (e[(e.Chat = 0)] = `Chat`),
      (e[(e.Notification = 1)] = `Notification`),
      (e[(e.Error = 2)] = `Error`),
      e
    );
  })({}),
  Lt = class {};
function H(e, t, n) {
  return [e, t, n];
}
var U = class extends Error {},
  Rt = class extends Lt {
    m_appid;
    constructor(e) {
      (super(), (this.m_appid = e || 0));
    }
    GetAppID() {
      return this.m_appid;
    }
    parseColor(e) {
      if (typeof e != `string` || !e.match(/^#[0-9a-fA-F]{6}$/))
        throw new U(`expected color string`);
      return [
        parseInt(e.substring(1, 3), 16),
        parseInt(e.substring(3, 5), 16),
        parseInt(e.substring(5, 7), 16),
      ];
    }
    parseString(e) {
      if (typeof e == `string`) return e;
      throw new U(`expected string`);
    }
    parseNumber(e) {
      if (typeof e == `number`) return e;
      throw new U(`expected number`);
    }
    parseDate(e) {
      if (typeof e == `number`) return new Date(e);
      throw new U(`expected timestamp`);
    }
    parseArray(e, t) {
      let n = [];
      if (typeof e != `object` || !Array.isArray(e))
        throw new U(`expected array`);
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
        throw new U(`expected object`);
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
                color: H(i.color_r, i.color_g, i.color_b),
              }))
          : n.push({
              strTemplateName: i.name,
              nTime: this.convertTime(i.Timestamp, t),
              color: H(i.color_r, i.color_g, i.color_b),
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
  zt = 250,
  Bt = 250,
  W = class {
    m_elVideo;
    m_peerConnection = null;
    m_strBroadcastSteamID = ``;
    m_ulWebRTCSessionID = ``;
    m_schCandidateTimer = new h();
    m_nHostCandidateGeneration = 0;
    m_nCandidateUpdateIntervalMS = 0;
    m_listeners = new C();
    m_bFirstPlay = !0;
    m_bStatsViewVisible = !1;
    m_schCaptureDisplayStatsTrigger = new h();
    m_stats = new le();
    constructor(e) {
      (i(this), (this.m_elVideo = e));
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
              F.default
                .post(
                  `${c.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
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
            await F.default
              .post(`${c.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`, e)
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
          ((this.m_nCandidateUpdateIntervalMS = zt),
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
        await F.default
          .post(`${c.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`, e)
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
      ((e = u(e, 0, 1)), (this.m_elVideo.volume = e));
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
            Bt,
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
          Bt,
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
      return (e.push({ id: ce, displayName: `Auto`, selected: !0 }), e);
    }
    SetVideoRepresentation(e) {}
    IsLiveContent() {
      return !0;
    }
    BHasTimedText() {
      return !1;
    }
  };
(T([o], W.prototype, `PlayWebRTC`, null),
  T([a.bound], W.prototype, `CaptureStatsForDisplay`, null),
  T([o], W.prototype, `OnVideoPause`, null),
  T([o], W.prototype, `OnVideoResize`, null));
async function Vt(e, t) {
  let r = n.STORE_BASE_URL + `video/details/` + e + `/0`,
    i = await fetch(r, { credentials: `include`, signal: t });
  if (!i.ok) throw Error(r + ` answered ` + i.status);
  let a = await i.json();
  if (a?.success != 1 && a?.success != `ready`)
    throw Error(`video/details on ` + e + ` answered ` + a?.success);
  return { appid: e, video_url: a.video_url, bookmark: a.bookmark };
}
function Ht(e) {
  return [`video`, `vod`, e];
}
function Ut(e) {
  return { queryKey: Ht(e), queryFn: ({ signal: t }) => Vt(e, t), retry: !1 };
}
function Wt(e) {
  let { data: t, isPending: n } = k(Ut(e));
  return { vodInfo: t, bLoading: n };
}
var Gt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_id: { n: 1, br: d.readUint64String, bw: D.writeUint64String },
            client_cellid: { n: 2, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_ClientGetVideoURL_Request`;
    }
  },
  Kt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_id: { n: 1, br: d.readUint64String, bw: D.writeUint64String },
            video_url: { n: 2, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_ClientGetVideoURL_Response`;
    }
  },
  qt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.encryption_key || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            encryption_key: { n: 1, br: d.readBytes, bw: D.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_UnlockedH264_Notification`;
    }
  },
  Jt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: d.readUint32, bw: D.writeUint32 },
            client_cellid: { n: 2, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFovasVideo_ClientGetOPFSettings_Request`;
    }
  },
  Yt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: d.readUint32, bw: D.writeUint32 },
            opf_settings: { n: 2, br: d.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFovasVideo_ClientGetOPFSettings_Response`;
    }
  },
  G = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || w(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: d.readUint32, bw: D.writeUint32 },
            playback_position_in_seconds: {
              n: 2,
              br: d.readUint32,
              bw: D.writeUint32,
            },
            video_track_id: {
              n: 3,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            audio_track_id: {
              n: 4,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            timedtext_track_id: {
              n: 5,
              br: d.readUint64String,
              bw: D.writeUint64String,
            },
            last_modified: { n: 6, br: d.readUint32, bw: D.writeUint32 },
            hide_from_watch_history: {
              n: 7,
              d: !1,
              br: d.readBool,
              bw: D.writeBool,
            },
            hide_from_library: { n: 8, d: !1, br: d.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `VideoBookmark`;
    }
  },
  Xt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bookmarks || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bookmarks: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_SetVideoBookmark_Notification`;
    }
  },
  Zt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
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
              br: d.readUint32,
              pbr: d.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
            updated_since: { n: 2, br: d.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GetVideoBookmarks_Request`;
    }
  },
  Qt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bookmarks || w(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bookmarks: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GetVideoBookmarks_Response`;
    }
  },
  $t;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Video.ClientGetVideoURL#1`, p(Gt, t, n), Kt, {
      ePrivilege: 1,
    });
  }
  e.ClientGetVideoURL = t;
  function n(e, t) {
    return e.SendNotification(`Video.SetVideoBookmark#1`, p(Xt, t), {
      ePrivilege: 1,
    });
  }
  e.SetVideoBookmark = n;
  function r(e, t, n) {
    return e.SendMsg(`Video.GetVideoBookmarks#1`, p(Zt, t, n), Qt, {
      ePrivilege: 1,
    });
  }
  e.GetVideoBookmarks = r;
})(($t ||= {}));
var en;
(function (e) {
  e.NotifyUnlockedH264Handler = {
    name: `VideoClient.NotifyUnlockedH264#1`,
    request: qt,
  };
})((en ||= {}));
var tn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`FovasVideo.ClientGetOPFSettings#1`, p(Jt, t, n), Yt, {
      ePrivilege: 1,
    });
  }
  e.ClientGetOPFSettings = t;
})((tn ||= {}));
var K = class e {
    static s_VODStore;
    m_transport = null;
    m_mapBookmarks = new Map();
    SetBookmarkForApp(e, t) {
      this.ValidateBookmarkData(t)
        ? this.m_mapBookmarks.set(e, G.fromObject(t))
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
        this.m_mapBookmarks.set(e, new G(t));
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
      if (!l.logged_in) return;
      if (!this.m_transport) {
        console.warn(
          `CVideoBookmarkStore:SetBookMark no auth token / transport`,
        );
        return;
      }
      let a = S.Init(Xt),
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
            $t.SetVideoBookmark(this.m_transport, a)));
      }
    }
    static Get() {
      return (
        e.s_VODStore || ((e.s_VODStore = new e()), e.s_VODStore.Init()),
        e.s_VODStore
      );
    }
    Init() {
      l.logged_in && this.LoadWatchVideoOAuthToken();
    }
    async LoadWatchVideoOAuthToken() {
      let e =
          re() == `community`
            ? c.COMMUNITY_BASE_URL + `actions/ajaxgetwatchvodtoken`
            : c.STORE_BASE_URL + `actions/ajaxgetwatchvodtoken`,
        t = {};
      try {
        let n = await F.default.get(e, { params: t, withCredentials: !0 });
        if (
          n &&
          n.status == 200 &&
          n.data &&
          n.data.success == 1 &&
          n.data.webapi_token
        ) {
          this.m_transport = se(
            new oe(c.WEBAPI_BASE_URL, n.data.webapi_token),
          ).GetServiceTransport();
          return;
        }
      } catch (e) {
        let t = ae(e);
        console.error(
          `CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed ` +
            t.strErrorMsg,
          t,
        );
      }
    }
  },
  nn = class {
    m_appid;
    constructor(e) {
      this.m_appid = e;
    }
    async SetBookmark(e, t, n, r) {
      l.logged_in &&
        K.Get().SendBookMarkedTimeToServer(
          this.m_appid,
          Math.floor(e),
          t,
          n,
          r,
        );
    }
    GetBeginPlaytime() {
      return l.logged_in
        ? K.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
        : 0;
    }
  },
  rn = t({
    BroadcastWatchStore: () => $,
    CBroadcastInfo: () => Y,
    CBroadcastVideo: () => Q,
    CBroadcastWatchStore: () => Z,
    EBroadcastWatchState: () => cn,
    ETimelineRange: () => fn,
    k_nDefaultBroadcastAppID: () => 7,
  }),
  an = 1800,
  on = 1e3,
  sn = 5e3,
  cn = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Unlocking = 1)] = `Unlocking`),
      (e[(e.Loading = 2)] = `Loading`),
      (e[(e.Ready = 3)] = `Ready`),
      (e[(e.Error = 4)] = `Error`),
      e
    );
  })({});
async function ln(e, t, n) {
  if (!t) return;
  let r = new FormData();
  (r.append(`steamid`, e),
    r.append(`broadcastid`, t),
    r.append(`viewertoken`, n));
  try {
    await F.default.post(c.CHAT_BASE_URL + `broadcast/stopwatching`, r);
  } catch {}
}
var q = class {
    m_rtUnlockTime = 0;
    m_schUnlockTimeout = new h();
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
        : e.SetState(4, f(`#BroadcastWatch_MinBrowser`));
    }
    BCanUnlockH264() {
      return g(`RemotePlay.UnlockH264`)
        ? (console.log(`Client supports direct H.264 unlock`), !0)
        : g(`BrowserView.PostMessageToParent`)
          ? (console.log(`Client supports browserview H.264 unlock`), !0)
          : (console.log(`Client does not support H.264 unlock`), !1);
    }
    RequestUnlockH264() {
      g(`RemotePlay.UnlockH264`)
        ? (console.log(`Requesting direct H.264 unlock`),
          SteamClient.RemotePlay.UnlockH264())
        : g(`BrowserView.PostMessageToParent`)
          ? (console.log(`Requesting browserview unlock`),
            SteamClient.BrowserView.PostMessageToParent(
              `UnlockH264Request`,
              `CUnlockH264Helper`,
            ))
          : console.log(`Failed to request H.264 unlock: no method supported`);
    }
    CheckUnlockState() {
      this.m_broadcast.m_eWatchState == 1 &&
        (j() || P()
          ? (console.log(`Unlocking H.264 successful`),
            this.m_broadcast.SetState(0, ``),
            this.m_video.Restart())
          : Date.now() - this.m_rtUnlockTime > 6e3
            ? (console.log(
                `Unlocking H.264 timed out (Steam client or servers offline?)`,
              ),
              this.m_broadcast.SetState(4, f(`#BroadcastWatch_MinBrowser`)))
            : this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              ));
    }
  },
  J = class {
    constructor() {
      i(this);
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
    m_schManifestTimeout = new h();
    m_schHeartbeatTimeout = new h();
    SetState(e, t = ``) {
      ((this.m_eWatchState = e),
        (this.m_strStateDescription = t),
        e == 4 && console.log(this.m_strStateDescription));
    }
  };
(T([s], J.prototype, `m_ulBroadcastID`, void 0),
  T([s], J.prototype, `m_eWatchState`, void 0),
  T([s], J.prototype, `m_strStateDescription`, void 0),
  T([a], J.prototype, `SetState`, null));
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
  m_schUpdateTimeout = new h();
  m_nRefCount = 0;
  constructor(e) {
    (i(this), (this.m_steamIDBroadcast = e));
  }
};
(T([s], Y.prototype, `m_bInitialized`, void 0),
  T([s], Y.prototype, `m_strTitle`, void 0),
  T([s], Y.prototype, `m_strAppId`, void 0),
  T([s], Y.prototype, `m_nAppID`, void 0),
  T([s], Y.prototype, `m_strAppTitle`, void 0),
  T([s], Y.prototype, `m_strThumbnailUrl`, void 0),
  T([s], Y.prototype, `m_nViewerCount`, void 0),
  T([s], Y.prototype, `m_bIsOnline`, void 0));
var X = class {
  constructor() {
    i(this);
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
(T([s], X.prototype, `m_eWatchState`, void 0),
  T([s], X.prototype, `m_strStateDescription`, void 0),
  T([a], X.prototype, `SetState`, null));
var un = class extends X {
    m_clipID;
    m_data;
  },
  dn = class extends X {
    m_nAppIDVOD;
    m_manifestURL;
  },
  Z = class {
    m_mapBroadcasts = new Map();
    m_mapClips = new Map();
    m_mapVODs = new Map();
    m_activeVideo = null;
    m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: `0` };
    m_schSaveSettings = new h();
    m_broadcastInfos = {};
    constructor() {
      (i(this), this.LoadBroadcastSettings());
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
        !j() && !P() && new q().UnlockH264(i, s),
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
        !j() && !P() && new q().UnlockH264(r, o),
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
        !j() && !P() && new q().UnlockH264(r, o),
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
            ln(t, n.m_ulBroadcastID, this.m_broadcastSettings.ulViewerToken),
          ne(n.m_rgVideos, (t) => t == e),
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
        let t = s(new Y(e));
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
        ((t = new un()),
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
        ((t = new dn()),
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
        let t = await F.default.get(
          `${c.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
          { params: r },
        );
        if (!t || !t.data || !t.data.success || t.data.success != 1) {
          e.m_bInitialized = !0;
          return;
        }
        let n = t.data;
        te(() => {
          ((e.m_bInitialized = !0),
            (e.m_strTitle = n.title),
            (e.m_strAppId = n.appid),
            (e.m_nAppID = Number.parseInt(n.appid)),
            (e.m_strAppTitle = n.app_title),
            (e.m_strThumbnailUrl = n.thumbnail_url),
            (e.m_nViewerCount = n.viewer_count),
            (e.m_bIsOnline = n.is_online),
            !e.m_strTitle &&
              V &&
              ((e.m_strTitle = V.name),
              (e.m_strAppTitle = V.appName || V.name)));
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
      e.m_schManifestTimeout.Schedule(sn, () =>
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
          sessionid: v(),
          is_webrtc: e.m_bWebRTC,
        },
        i = null;
      try {
        i = await F.default.get(
          c.CHAT_BASE_URL + `broadcast/getbroadcastmpd/`,
          { params: r, withCredentials: !0 },
        );
      } catch (e) {
        let t = ae(e);
        console.error(`Failed to get broadcast manifest!` + t.strErrorMsg, t);
      }
      if (!i || i.status != 200) {
        e.SetState(4, f(`#BroadcastWatch_RequestFailed`));
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
        e.SetState(2, f(`#BroadcastWatch_WaitingForResponse`));
        let r = Date.now() - n;
        if (r > 6e4) {
          e.SetState(4, f(`#BroadcastWatch_NotAvailable`));
          return;
        }
        let i = r > 3e4 ? a.retry : 5e3;
        e.m_schManifestTimeout.Schedule(i, () =>
          this.GetBroadcastManifest(e, t, n),
        );
      } else
        o == `waiting_for_start`
          ? (e.SetState(2, f(`#BroadcastWatch_WaitingForStart`)),
            e.m_schManifestTimeout.Schedule(a.retry, () =>
              this.GetBroadcastManifest(e, t, n),
            ))
          : o == `waiting_for_reconnect`
            ? (e.SetState(2, f(`#BroadcastWatch_WaitingForReconnect`)),
              e.m_schManifestTimeout.Schedule(a.retry, () =>
                this.GetBroadcastManifest(e, t, n),
              ))
            : o == `end`
              ? e.SetState(4, f(`#BroadcastWatch_NotAvailable`))
              : o == `too_many_broadcasts`
                ? e.SetState(4, f(`#BroadcastWatch_TooManyBroadcasts`))
                : o == `system_not_supported`
                  ? e.SetState(4, f(`#BroadcastWatch_SystemNotSupported`))
                  : o == `user_restricted`
                    ? e.SetState(4, f(`#BroadcastWatch_UserRestricted`))
                    : o == `poor_upload_quality`
                      ? e.SetState(4, f(`#BroadcastWatch_PoorUploadQuality`))
                      : o == `request_failed`
                        ? e.SetState(4, f(`#BroadcastWatch_RequestFailed`))
                        : o == `too_many_viewers`
                          ? e.SetState(4, f(`#BroadcastWatch_TooManyViewers`))
                          : e.SetState(4, f(`#BroadcastWatch_NotAvailable`));
    }
    async GetClipManifest(e, t) {
      e.SetState(2, ``);
      let n = { clipid: e.m_clipID, watchlocation: t, sessionid: v() },
        r = null;
      try {
        r = await F.default.get(c.CHAT_BASE_URL + `broadcast/getclipdetails`, {
          params: n,
          withCredentials: !0,
        });
      } catch (e) {
        (console.error(e), console.log(`Failed to get clip manifest!`));
      }
      if (!r || r.status != 200) {
        e.SetState(4, f(`#BroadcastWatch_RequestFailed`));
        return;
      }
      let i = r.data;
      i.success == 1
        ? (e.SetState(3), (e.m_data = i), this.LoadClip(e))
        : e.SetState(4, f(`#BroadcastWatch_RequestFailed`));
    }
    async GetVODManifest(e, t) {
      e.SetState(2, ``);
      let n = await ie.fetchQuery(Ut(e.m_nAppIDVOD)).catch((t) => {
        console.error(
          `BroadcastWatchStore:GetVODManifest: Failed to load VOD ` +
            e.m_nAppIDVOD,
          t,
        );
      });
      n
        ? (n.bookmark
            ? K.Get().SetBookmarkForApp(e.m_nAppIDVOD, n.bookmark)
            : K.Get().InitializeBookmarkForApp(e.m_nAppIDVOD),
          e.SetState(3),
          (e.m_manifestURL = n.video_url),
          this.LoadVOD(e))
        : e.SetState(4, f(`#BroadcastWatch_RequestFailed`));
    }
    async HeartbeatBroadcast(e) {
      let t = new FormData();
      (t.append(`steamid`, e.m_steamIDBroadcast),
        t.append(`broadcastid`, e.m_ulBroadcastID),
        t.append(`viewertoken`, this.m_broadcastSettings.ulViewerToken),
        F.default.post(c.CHAT_BASE_URL + `broadcast/heartbeat/`, t),
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
        (n.nVolume = u(n.nVolume, 0, 1)),
        typeof n.ulViewerToken != `string` && (n.ulViewerToken = `0`));
    }
    SaveBroadcastSettings() {
      window.localStorage &&
        this.m_schSaveSettings.Schedule(on, () => {
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
T([s], Z.prototype, `m_mapBroadcasts`, void 0);
var fn = (function (e) {
    return (
      (e[(e.Timeline = 1)] = `Timeline`), (e[(e.Minimap = 2)] = `Minimap`), e
    );
  })({}),
  Q = class {
    m_elVideo;
    m_player = null;
    m_listeners = new C();
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
    m_nTimelineDuration = an;
    m_nVideoStartPos = 0;
    m_nVideoEndPos = 0;
    m_editorStartTime = 0;
    m_editorEndTime = 0;
    m_rgMarkers = s.array();
    m_rgSegments = s.array();
    m_rgRegions = s.array();
    m_fnOnVideoEnd;
    m_videoEndingTimer;
    constructor(e, t, n, r) {
      (i(this),
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
      let t = e ? x[e] : -1;
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
      (_(!this.m_player, `Initialized twice?`),
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
        (this.m_nTimelineDuration = an),
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
        let t = new N(this.m_elVideo);
        (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
          (this.m_player = t),
          t.PlayMPD(
            e.m_data.url,
            e.m_data.hls_url,
            void 0,
            e.m_strCDNAuthUrlParameters,
          ));
      } else {
        let t = new W(this.m_elVideo);
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
          l.steamid,
          e.m_ulBroadcastID,
          e.m_ulViewerToken,
        ),
        (this.m_BroadcastInfo = $.StartInfo(this.m_steamIDBroadcast)));
    }
    StartClip(e) {
      this.InitPlayer();
      let t = new N(this.m_elVideo);
      (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
        (this.m_player = t),
        t.PlayMPD(e.m_data.clip_url),
        this.SetVolume(this.m_nVolume),
        this.m_player?.SetMuted(this.m_bMuted));
    }
    StartVOD(e) {
      this.InitPlayer();
      let t = new N(this.m_elVideo);
      (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
        (this.m_player = t),
        l.logged_in &&
          e.m_nAppIDVOD &&
          t.SetBookmarkAdapter(new nn(e.m_nAppIDVOD)),
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
        (this.m_gameDataParser = new Rt(t.gamedata.__appid));
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
    GetTimeAtMousePosition(e, t, n, i) {
      let a = r(e, t.left, t.right, n, i);
      return Math.floor(a + 0.5);
    }
    GetPercentOffsetFromTime(e, t) {
      let n = 0,
        i = 0;
      return (
        t == 1
          ? ((i = this.m_nVideoEndPos), (n = i - this.m_nTimelineDuration))
          : ((n = 0), (i = 0)),
        r(e, n, i, 0, 100)
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
(T([s], Q.prototype, `m_player`, void 0),
  T([s], Q.prototype, `m_bPaused`, void 0),
  T([s], Q.prototype, `m_nPlaybackTime`, void 0),
  T([s], Q.prototype, `m_bBuffering`, void 0),
  T([s], Q.prototype, `m_bOnLiveEdge`, void 0),
  T([s], Q.prototype, `m_nVolume`, void 0),
  T([s], Q.prototype, `m_bMuted`, void 0),
  T([s], Q.prototype, `m_bUserInputNeeded`, void 0),
  T([s], Q.prototype, `m_bIsReplay`, void 0),
  T([s], Q.prototype, `m_nTimelineDuration`, void 0),
  T([s], Q.prototype, `m_nVideoStartPos`, void 0),
  T([s], Q.prototype, `m_nVideoEndPos`, void 0),
  T([s], Q.prototype, `m_editorStartTime`, void 0),
  T([s], Q.prototype, `m_editorEndTime`, void 0),
  T([a.bound], Q.prototype, `StartBroadcast`, null),
  T([a.bound], Q.prototype, `StartClip`, null),
  T([a.bound], Q.prototype, `StartVOD`, null),
  T([o], Q.prototype, `OnVideoPlaying`, null),
  T([o], Q.prototype, `OnVideoPause`, null),
  T([a.bound], Q.prototype, `OnVideoTimeUpdate`, null),
  T([o], Q.prototype, `OnVolumeUpdated`, null),
  T([a.bound], Q.prototype, `OnGameDataUpdate`, null),
  T([o], Q.prototype, `OnDownloadFailed`, null),
  T([o], Q.prototype, `OnWebRTCRetry`, null),
  T([o], Q.prototype, `OnWebRTCFailed`, null),
  T([o], Q.prototype, `OnUserInputNeeded`, null));
var $ = new Z();
window.uiBroadcastWatchStore = $;
export {
  Wt as a,
  z as c,
  Ge as d,
  Ve as f,
  rn as i,
  _e as l,
  Ue as m,
  cn as n,
  It as o,
  L as p,
  fn as r,
  V as s,
  $ as t,
  ye as u,
};
