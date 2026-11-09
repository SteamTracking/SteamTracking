/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  Lt as t,
  Pt as n,
  dt as r,
  lt as i,
  ot as a,
  st as o,
} from "./libraries.js";
import "./steammessages_clan_pb.js";
import {
  $x as s,
  Qx as c,
  Xx as l,
  Yx as u,
  Zx as d,
  cy as f,
  eS as p,
  hx as m,
  iy as h,
  mx as g,
  nS as _,
  tS as v,
} from "./main.js";
var y = e(t()),
  b = e(n(), 1),
  x = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.client_instanceid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Request`;
    }
  },
  S = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.protocol_version || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            protocol_version: { n: 1, br: c.readUint32, bw: _.writeUint32 },
            os: { n: 2, br: c.readString, bw: _.writeString },
            machine_name: { n: 3, br: c.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Response`;
    }
  },
  C = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Request`;
    }
  },
  w = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sessions || u(e.M()),
        b.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sessions: { n: 1, c: T, r: !0, q: !0 },
            refetch_interval_sec: { n: 2, br: c.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response`;
    }
  },
  T = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.client_instanceid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            protocol_version: { n: 2, br: c.readUint32, bw: _.writeUint32 },
            os_name: { n: 3, br: c.readString, bw: _.writeString },
            machine_name: { n: 4, br: c.readString, bw: _.writeString },
            os_type: { n: 5, br: c.readInt32, bw: _.writeInt32 },
            device_type: { n: 6, br: c.readInt32, bw: _.writeInt32 },
            realm: { n: 7, br: c.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response_Session`;
    }
  },
  ee = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.client_instanceid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Request`;
    }
  },
  E = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.package_version || u(e.M()),
        b.Message.initialize(this, t, 0, -1, [7, 10], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_version: { n: 1, br: c.readUint32, bw: _.writeUint32 },
            os: { n: 2, br: c.readString, bw: _.writeString },
            machine_name: { n: 3, br: c.readString, bw: _.writeString },
            ip_public: { n: 4, br: c.readString, bw: _.writeString },
            ip_private: { n: 5, br: c.readString, bw: _.writeString },
            bytes_available: {
              n: 6,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            running_games: { n: 7, c: D, r: !0, q: !0 },
            protocol_version: { n: 8, br: c.readUint32, bw: _.writeUint32 },
            clientcomm_version: { n: 9, br: c.readUint32, bw: _.writeUint32 },
            local_users: {
              n: 10,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_ClientData`;
    }
  },
  D = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: c.readUint32, bw: _.writeUint32 },
            extra_info: { n: 2, br: c.readString, bw: _.writeString },
            time_running_sec: { n: 3, br: c.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_ClientData_RunningGames`;
    }
  },
  O = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.client_info || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { client_info: { n: 1, c: E } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Response`;
    }
  },
  k = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.fields || u(e.M()),
        b.Message.initialize(this, t, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            fields: { n: 1, br: c.readString, bw: _.writeString },
            filters: { n: 2, br: c.readString, bw: _.writeString },
            client_instanceid: {
              n: 3,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            include_client_info: { n: 4, br: c.readBool, bw: _.writeBool },
            language: { n: 5, br: c.readString, bw: _.writeString },
            filter_appids: {
              n: 6,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Request`;
    }
  },
  A = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bytes_available || u(e.M()),
        b.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bytes_available: {
              n: 1,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            apps: { n: 2, c: j, r: !0, q: !0 },
            client_info: { n: 3, c: E },
            refetch_interval_sec_full: {
              n: 4,
              br: c.readUint32,
              bw: _.writeUint32,
            },
            refetch_interval_sec_changing: {
              n: 5,
              br: c.readUint32,
              bw: _.writeUint32,
            },
            refetch_interval_sec_updating: {
              n: 6,
              br: c.readUint32,
              bw: _.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response`;
    }
  },
  j = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, [17], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: c.readUint32, bw: _.writeUint32 },
            app: { n: 2, br: c.readString, bw: _.writeString },
            category: { n: 3, br: c.readString, bw: _.writeString },
            app_type: { n: 4, br: c.readString, bw: _.writeString },
            num_downloading: { n: 8, br: c.readUint32, bw: _.writeUint32 },
            bytes_download_rate: { n: 11, br: c.readUint32, bw: _.writeUint32 },
            bytes_downloaded: {
              n: 12,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            bytes_to_download: {
              n: 13,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            dlcs: { n: 17, c: M, r: !0, q: !0 },
            favorite: { n: 18, br: c.readBool, bw: _.writeBool },
            auto_update: { n: 19, br: c.readBool, bw: _.writeBool },
            installed: { n: 20, br: c.readBool, bw: _.writeBool },
            download_paused: { n: 21, br: c.readBool, bw: _.writeBool },
            changing: { n: 22, br: c.readBool, bw: _.writeBool },
            available_on_platform: { n: 23, br: c.readBool, bw: _.writeBool },
            bytes_staged: {
              n: 24,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            bytes_to_stage: {
              n: 25,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            bytes_required: {
              n: 26,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            source_buildid: { n: 27, br: c.readUint32, bw: _.writeUint32 },
            target_buildid: { n: 28, br: c.readUint32, bw: _.writeUint32 },
            estimated_seconds_remaining: {
              n: 29,
              br: c.readUint32,
              bw: _.writeUint32,
            },
            queue_position: { n: 30, d: -1, br: c.readInt32, bw: _.writeInt32 },
            uninstalling: { n: 31, br: c.readBool, bw: _.writeBool },
            rt_time_scheduled: { n: 32, br: c.readUint32, bw: _.writeUint32 },
            running: { n: 33, br: c.readBool, bw: _.writeBool },
            update_percentage: { n: 34, br: c.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData`;
    }
  },
  M = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: c.readUint32, bw: _.writeUint32 },
            app: { n: 2, br: c.readString, bw: _.writeString },
            installed: { n: 3, br: c.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData_DLCData`;
    }
  },
  N = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: c.readUint32, bw: _.writeUint32 },
            client_instanceid: {
              n: 2,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Request`;
    }
  },
  P = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Response`;
    }
  },
  F = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: c.readUint32, bw: _.writeUint32 },
            client_instanceid: {
              n: 2,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Request`;
    }
  },
  I = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Response`;
    }
  },
  L = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: c.readUint32, bw: _.writeUint32 },
            action: { n: 2, q: !0, br: c.readUint32, bw: _.writeUint32 },
            client_instanceid: {
              n: 3,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Request`;
    }
  },
  R = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.client_instanceid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            appid: { n: 2, q: !0, br: c.readUint32, bw: _.writeUint32 },
            query_params: { n: 3, br: c.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Request`;
    }
  },
  z = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Response`;
    }
  },
  B = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Response`;
    }
  },
  V = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.client_instanceid || u(e.M()),
        b.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: c.readUint64String,
              bw: _.writeUint64String,
            },
            enable: { n: 2, br: c.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      p(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Request`;
    }
  },
  H = class e extends b.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), b.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new b.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new b.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Response`;
    }
  },
  U;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientLogonInfo#1`, m(x, t, n), S, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientLogonInfo = t;
  function n(e, t, n) {
    return e.SendMsg(`ClientComm.GetAllClientLogonInfo#1`, m(C, t, n), w, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAllClientLogonInfo = n;
  function r(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientInfo#1`, m(ee, t, n), O, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientInfo = r;
  function i(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientAppList#1`, m(k, t, n), A, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClientAppList = i;
  function a(e, t, n) {
    return e.SendMsg(`ClientComm.InstallClientApp#1`, m(N, t, n), P, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.InstallClientApp = a;
  function o(e, t, n) {
    return e.SendMsg(`ClientComm.UninstallClientApp#1`, m(F, t, n), I, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UninstallClientApp = o;
  function s(e, t, n) {
    return e.SendMsg(`ClientComm.LaunchClientApp#1`, m(R, t, n), z, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.LaunchClientApp = s;
  function c(e, t, n) {
    return e.SendMsg(`ClientComm.SetClientAppUpdateState#1`, m(L, t, n), B, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetClientAppUpdateState = c;
  function l(e, t, n) {
    return e.SendMsg(`ClientComm.EnableOrDisableDownloads#1`, m(V, t, n), H, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnableOrDisableDownloads = l;
})((U ||= {}));
var W = `RemoteDownload_OnlineClient`,
  G = `RemoteDownload_ClientAppList`,
  K = `RemoteDownload_ClientAppData`,
  q = class extends Error {
    constructor(e, t) {
      super(e), (this.result = t);
    }
    result;
  };
function J() {
  let e = h(),
    t = f();
  return o({
    queryKey: [W, t],
    queryFn: async () => {
      let t = g.Init(C),
        n = await U.GetAllClientLogonInfo(e, t);
      if (n.GetEResult() !== 1)
        throw (
          (console.error(
            `Received error from GetAllClientLogonInfo`,
            n.GetEResult(),
            n.Hdr().transport_error(),
          ),
          Error(`Error from GetAllClientLogonInfo: ${n.GetEResult()}`))
        );
      let r = [];
      for (let e of n.Body().sessions())
        e.device_type() !== 0 && r.push(e.toObject());
      return {
        sessions: r,
        refetchInterval: n.Body().refetch_interval_sec() || 300,
      };
    },
    staleTime: 3e5,
    refetchInterval: (e) => (e.state.data?.refetchInterval || 300) * 1e3,
  });
}
var Y = class {
  constructor(e) {
    Object.assign(this, e.toObject()),
      (this.bytes_to_download = parseInt(e.bytes_to_download() ?? `0`)),
      (this.bytes_downloaded = parseInt(e.bytes_downloaded() ?? `0`)),
      (this.bytes_staged = parseInt(e.bytes_staged() ?? `0`)),
      (this.bytes_to_stage = parseInt(e.bytes_to_stage() ?? `0`)),
      (this.bytes_required = parseInt(e.bytes_required() ?? `0`));
  }
  appid;
  app;
  category;
  app_type;
  num_downloading;
  bytes_download_rate;
  bytes_downloaded;
  bytes_to_download;
  favorite;
  auto_update;
  installed;
  download_paused;
  changing;
  available_on_platform;
  bytes_staged;
  bytes_to_stage;
  bytes_required;
  source_buildid;
  target_buildid;
  estimated_seconds_remaining;
  queue_position;
  uninstalling;
  rt_time_scheduled;
  update_percentage;
  BIsDownloading() {
    return this.num_downloading !== void 0 && this.num_downloading > 0;
  }
  SetDownloading() {
    (this.num_downloading = 1), (this.download_paused = !1);
  }
  SetPaused(e) {
    (this.download_paused = e), (this.num_downloading = +!e);
  }
  BIsAtTopOfQueue() {
    return this.queue_position === 0;
  }
  BIsPaused() {
    return (
      !!this.download_paused &&
      (this.bytes_downloaded < this.bytes_to_download ||
        this.bytes_staged < this.bytes_to_stage ||
        this.queue_position != -1)
    );
  }
  BHasPendingUpdate() {
    return (
      !this.BIsDownloading() &&
      !this.download_paused &&
      (this.bytes_downloaded < this.bytes_to_download ||
        this.bytes_staged < this.bytes_to_stage)
    );
  }
  GetPercentComplete() {
    return this.update_percentage
      ? this.update_percentage
      : this.bytes_to_download
        ? Math.floor((this.bytes_downloaded * 100) / this.bytes_to_download)
        : 0;
  }
};
async function X(e, t, n) {
  let r = t.client_instanceid,
    i = g.Init(k);
  i.Body().set_fields(`games`),
    i.Body().set_filters(n),
    i.Body().set_client_instanceid(r),
    i.Body().set_include_client_info(!0);
  let a = await U.GetClientAppList(e, i);
  if (a.GetEResult() !== 1)
    throw (
      (console.error(
        `Received error from GetClientAppList`,
        a.GetEResult(),
        a.Hdr().transport_error(),
      ),
      new q(`Error from GetClientAppList: ${a.GetEResult()}`, a.GetEResult()))
    );
  let o = new Map();
  for (let e of a.Body().apps()) {
    let t = new Y(e);
    o.set(e.appid(), t);
  }
  return {
    session: t,
    mapApps: o,
    clientInfo: a.Body().client_info()?.toObject(),
    refetchIntervals: {
      full: a.Body().refetch_interval_sec_full() || 3600,
      changing: a.Body().refetch_interval_sec_changing() || 60,
      updating: a.Body().refetch_interval_sec_updating() || 10,
    },
  };
}
async function Z(e, t, n, r) {
  if (!r) return;
  let i = await X(e, t, n);
  for (let [e, t] of i.mapApps) r.mapApps.set(e, t);
  return { ...i, mapApps: r.mapApps };
}
function Q(e, t, n) {
  return [G, e, t, n];
}
function te(e, t = !0) {
  let n = J(),
    a = h(),
    o = f(),
    s = (e) => {
      t && (e.result == 21 || e.result == 16) && n.refetch();
    },
    c = i({
      queries: (n.data?.sessions || []).map((e) => ({
        queryKey: Q(o, e.client_instanceid, `none`),
        queryFn: async () => X(a, e, `none`),
        staletime: 36e5,
        refetchInterval: (e) =>
          (e.state.data?.refetchIntervals.full || 3600) * 1e3,
        enabled: n.isSuccess && !n.isFetching,
        onError: s,
        retry: t,
      })),
    }),
    l = (0, y.useCallback)(
      (t) => {
        if (!e) return t;
        let n = new Map(Array.from(t?.mapApps.entries() ?? []).filter(e));
        return { ...t, mapApps: n };
      },
      [e],
    ),
    u = r();
  return {
    rgQueries: i({
      queries: (n.data?.sessions || []).map((e, n) => ({
        queryKey: Q(o, e.client_instanceid, `changing`),
        queryFn: async () => Z(a, e, `changing`, c[n].data),
        enabled: c[n].isSuccess && !c[n].isFetching,
        staletime: 1e4,
        select: l,
        refetchInterval: (e) => {
          let t = e.state.data;
          if (!t) return 6e4;
          let n = !1;
          for (let e of t.mapApps.values())
            if (e.BIsDownloading() || e.uninstalling) {
              n = !0;
              break;
            }
          let r = t.refetchIntervals;
          return (n ? r.updating : r.changing) * 1e3;
        },
        onError: s,
        retry: t,
      })),
    }).map((e, t) => (c[t].isError && !c[t].isFetching ? c[t] : e)),
    refetch: () => {
      for (let e of n.data?.sessions || []) {
        let t = Q(o, e.client_instanceid, `changing`);
        u.removeQueries({ queryKey: t });
      }
      for (let e of c) e.refetch();
    },
  };
}
function $(e, t) {
  return [K, e, t];
}
function ne(e, t = !0) {
  let n = f(),
    { rgQueries: r } = te(void 0, t);
  return o({
    queryKey: $(n, e),
    queryFn: () => {
      let t = new Map();
      for (let n of r)
        if (n.isSuccess) {
          let r = n.data?.session?.client_instanceid,
            i = n.data?.mapApps?.get(e);
          i &&
            t.set(r, {
              session: n.data.session,
              app: i,
              clientInfo: n.data.clientInfo,
            });
        }
      return t;
    },
    enabled: r.reduce((e, t) => e && t.isSuccess && !t.isFetching, !0),
    staleTime: 0,
    gcTime: 0,
  });
}
function re(e, t, n) {
  let i = h(),
    o = ne(e),
    s = f(),
    c = r();
  return a({
    mutationFn: async () => {
      let n = g.Init(N);
      n.Body().set_appid(e), n.Body().set_client_instanceid(t);
      let r = await U.InstallClientApp(i, n);
      if (r.GetEResult() != 1)
        throw (
          (console.error(
            `Received error from InstallClientApp`,
            r.GetEResult(),
          ),
          Error(`Error from InstallClientApp: ${r.GetEResult()}`))
        );
      let a = o?.data;
      a && a.get(t) && a.get(t).app.SetDownloading(),
        c.setQueryData($(s, e), a),
        o.refetch();
    },
    onSuccess: n,
  });
}
async function ie(e, t, n, r) {
  let i = g.Init(R);
  i.Body().set_appid(n),
    i.Body().set_client_instanceid(t),
    i.Body().set_query_params(r);
  let a = await U.LaunchClientApp(e, i);
  if (a.GetEResult() !== 1)
    throw (
      (console.error(
        `Received error from LaunchClientApp`,
        a.GetEResult(),
        a.Hdr().transport_error(),
      ),
      Error(`Error from LaunchClientApp: ${a.GetEResult()}`))
    );
}
export { re as n, J as r, ie as t };
