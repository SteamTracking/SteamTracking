/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  D as t,
  Et as n,
  Ft as r,
  G as i,
  It as a,
  K as o,
  St as s,
  W as c,
  _t as l,
  at as u,
  bt as d,
  ot as f,
  wt as p,
  xt as m,
} from "./chunk~01cfc309bf.js";
import { t as h } from "./chunk~eefd71512b.js";
import { t as g } from "./chunk~018ae802ee.js";
import { t as ee } from "./chunk~008c00a198.js";
import { x as te } from "./chunk~af1574091f.js";
import {
  $h as _,
  $i as v,
  $p as y,
  Ah as b,
  Bi as x,
  Cd as ne,
  Ed as re,
  Fh as S,
  Ih as C,
  Kf as w,
  Mh as T,
  N as ie,
  Nh as E,
  Ph as D,
  Rs as ae,
  Su as O,
  T as oe,
  To as se,
  Us as ce,
  Wi as le,
  Xo as k,
  Zm as ue,
  Zp as de,
  _o as fe,
  _s as pe,
  ca as me,
  ea as he,
  ef as A,
  em as ge,
  hm as j,
  im as _e,
  jh as M,
  kh as N,
  na as ve,
  nh as P,
  oo as ye,
  pd as be,
  qu as F,
  ra as xe,
  rh as I,
  ss as Se,
  ta as Ce,
  th as L,
  zh as we,
} from "./main.js";
import {
  D as R,
  E as Te,
  T as Ee,
  _ as De,
  a as Oe,
  b as ke,
  c as Ae,
  f as je,
  g as Me,
  h as Ne,
  i as Pe,
  j as Fe,
  l as Ie,
  m as z,
  n as Le,
  o as Re,
  r as ze,
  s as Be,
  t as Ve,
  v as He,
  x as Ue,
} from "./chunk~5c33f42766.js";
import { t as We } from "./chunk~01d6da9524.js";
import { t as Ge } from "./chunk~06da9a7953.js";
var B = e(r()),
  V = {
    List: () => `/notes/list`,
    AppNotes: (e, t) => `/notes/app/${e}/${t ?? ``}`,
    ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${t ?? ``}`,
  };
function Ke(e, t) {
  return `appid` in e ? V.AppNotes(e.appid, t) : V.ShortcutNotes(e.shortcut, t);
}
var H = e(a(), 1),
  qe = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.operation || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            operation: { n: 1, br: T.readEnum, bw: C.writeEnum },
            machine_name: { n: 2, br: T.readString, bw: C.writeString },
            client_id: {
              n: 3,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            time_last_updated: { n: 4, br: T.readUint32, bw: C.writeUint32 },
            os_type: { n: 5, br: T.readInt32, bw: C.writeInt32 },
            device_type: { n: 6, br: T.readInt32, bw: C.writeInt32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_PendingRemoteOperation`;
    }
  },
  U = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            ugcid: { n: 2, br: T.readUint64String, bw: C.writeUint64String },
            filename: { n: 3, br: T.readString, bw: C.writeString },
            timestamp: {
              n: 4,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            file_size: { n: 5, br: T.readUint32, bw: C.writeUint32 },
            url: { n: 6, br: T.readString, bw: C.writeString },
            steamid_creator: {
              n: 7,
              br: T.readFixed64String,
              bw: C.writeFixed64String,
            },
            flags: { n: 8, br: T.readUint32, bw: C.writeUint32 },
            platforms_to_sync: {
              n: 9,
              r: !0,
              q: !0,
              br: T.readString,
              bw: C.writeRepeatedString,
            },
            file_sha: { n: 10, br: T.readString, bw: C.writeString },
            compressed_file_size: {
              n: 11,
              br: T.readUint32,
              bw: C.writeUint32,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_UserFile`;
    }
  },
  W = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [6, 7, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            file_size: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            filename: { n: 3, br: T.readString, bw: C.writeString },
            file_sha: { n: 4, br: T.readString, bw: C.writeString },
            is_public: { n: 5, br: T.readBool, bw: C.writeBool },
            platforms_to_sync: {
              n: 6,
              r: !0,
              q: !0,
              br: T.readString,
              bw: C.writeRepeatedString,
            },
            request_headers_names: {
              n: 7,
              r: !0,
              q: !0,
              br: T.readString,
              bw: C.writeRepeatedString,
            },
            request_headers_values: {
              n: 8,
              r: !0,
              q: !0,
              br: T.readString,
              bw: C.writeRepeatedString,
            },
            upload_batch_id: {
              n: 9,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Request`;
    }
  },
  Je = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ugcid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ugcid: { n: 1, br: T.readFixed64String, bw: C.writeFixed64String },
            timestamp: { n: 2, br: T.readFixed32, bw: C.writeFixed32 },
            url_host: { n: 3, br: T.readString, bw: C.writeString },
            url_path: { n: 4, br: T.readString, bw: C.writeString },
            use_https: { n: 5, br: T.readBool, bw: C.writeBool },
            request_headers: { n: 6, c: Ye, r: !0, q: !0 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Response`;
    }
  },
  Ye = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: C.writeString },
            value: { n: 2, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Response_HTTPHeaders`;
    }
  },
  Xe = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: T.readBool, bw: C.writeBool },
            appid: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            file_sha: { n: 3, br: T.readString, bw: C.writeString },
            filename: { n: 4, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitHTTPUpload_Request`;
    }
  },
  Ze = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: T.readBool, bw: C.writeBool } },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitHTTPUpload_Response`;
    }
  },
  Qe = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            file_size: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            filename: { n: 3, br: T.readString, bw: C.writeString },
            file_sha: { n: 4, br: T.readString, bw: C.writeString },
            content_type: { n: 5, br: T.readString, bw: C.writeString },
            is_public: { n: 6, br: T.readBool, bw: C.writeBool },
            timestamp: {
              n: 7,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Request`;
    }
  },
  $e = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.storage_system || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            storage_system: { n: 1, br: T.readEnum, bw: C.writeEnum },
            ugcid: { n: 2, br: T.readFixed64String, bw: C.writeFixed64String },
            timestamp: { n: 3, br: T.readFixed32, bw: C.writeFixed32 },
            url_host: { n: 4, br: T.readString, bw: C.writeString },
            url_path: { n: 5, br: T.readString, bw: C.writeString },
            use_https: { n: 6, br: T.readBool, bw: C.writeBool },
            request_headers: { n: 7, c: et, r: !0, q: !0 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Response`;
    }
  },
  et = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: C.writeString },
            value: { n: 2, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Response_HTTPHeaders`;
    }
  },
  tt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: T.readBool, bw: C.writeBool },
            appid: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            ugcid: { n: 3, br: T.readFixed64String, bw: C.writeFixed64String },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitUGCUpload_Request`;
    }
  },
  nt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: T.readBool, bw: C.writeBool } },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitUGCUpload_Response`;
    }
  },
  rt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ugcid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ugcid: { n: 1, br: T.readUint64String, bw: C.writeUint64String },
            appid: { n: 2, br: T.readUint32, bw: C.writeUint32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetFileDetails_Request`;
    }
  },
  it = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.details || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            details: { n: 1, c: U },
            rangecheck_host: { n: 2, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetFileDetails_Response`;
    }
  },
  at = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            file_name: { n: 2, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetSingleFileInfo_Request`;
    }
  },
  ot = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            file_name: { n: 3, br: T.readString, bw: C.writeString },
            sha_file: { n: 4, br: T.readBytes, bw: C.writeBytes },
            time_stamp: {
              n: 5,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            raw_file_size: { n: 6, br: T.readUint32, bw: C.writeUint32 },
            is_explicit_delete: { n: 7, br: T.readBool, bw: C.writeBool },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetSingleFileInfo_Response`;
    }
  },
  st = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            extended_details: { n: 2, br: T.readBool, bw: C.writeBool },
            count: { n: 3, br: T.readUint32, bw: C.writeUint32 },
            start_index: { n: 4, br: T.readUint32, bw: C.writeUint32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_EnumerateUserFiles_Request`;
    }
  },
  ct = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.files || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            files: { n: 1, c: U, r: !0, q: !0 },
            total_files: { n: 2, br: T.readUint32, bw: C.writeUint32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_EnumerateUserFiles_Response`;
    }
  },
  lt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filename || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filename: { n: 1, br: T.readString, bw: C.writeString },
            appid: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            upload_batch_id: {
              n: 3,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_Delete_Request`;
    }
  },
  ut = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_Delete_Response`;
    }
  },
  dt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetClientEncryptionKey_Request`;
    }
  },
  ft = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.key || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: T.readBytes, bw: C.writeBytes },
            crc: { n: 2, br: T.readInt32, bw: C.writeInt32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetClientEncryptionKey_Response`;
    }
  },
  pt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readFixed64String,
              bw: C.writeFixed64String,
            },
            url: { n: 2, br: T.readString, bw: C.writeString },
            success: { n: 3, br: T.readBool, bw: C.writeBool },
            http_status_code: { n: 4, br: T.readUint32, bw: C.writeUint32 },
            expected_bytes: {
              n: 5,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            received_bytes: {
              n: 6,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            duration: { n: 7, br: T.readUint32, bw: C.writeUint32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CDNReport_Notification`;
    }
  },
  mt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.host || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            host: { n: 1, br: T.readString, bw: C.writeString },
            path: { n: 2, br: T.readString, bw: C.writeString },
            is_upload: { n: 3, br: T.readBool, bw: C.writeBool },
            success: { n: 4, br: T.readBool, bw: C.writeBool },
            http_status_code: { n: 5, br: T.readUint32, bw: C.writeUint32 },
            bytes_expected: {
              n: 6,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            bytes_actual: {
              n: 7,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            duration_ms: { n: 8, br: T.readUint32, bw: C.writeUint32 },
            cellid: { n: 9, br: T.readUint32, bw: C.writeUint32 },
            proxied: { n: 10, br: T.readBool, bw: C.writeBool },
            ipv6_local: { n: 11, br: T.readBool, bw: C.writeBool },
            ipv6_remote: { n: 12, br: T.readBool, bw: C.writeBool },
            time_to_connect_ms: { n: 13, br: T.readUint32, bw: C.writeUint32 },
            time_to_send_req_ms: { n: 14, br: T.readUint32, bw: C.writeUint32 },
            time_to_first_byte_ms: {
              n: 15,
              br: T.readUint32,
              bw: C.writeUint32,
            },
            time_to_last_byte_ms: {
              n: 16,
              br: T.readUint32,
              bw: C.writeUint32,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ExternalStorageTransferReport_Notification`;
    }
  },
  ht = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            client_id: {
              n: 2,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            machine_name: { n: 3, br: T.readString, bw: C.writeString },
            ignore_pending_operations: {
              n: 4,
              br: T.readBool,
              bw: C.writeBool,
            },
            os_type: { n: 5, br: T.readInt32, bw: C.writeInt32 },
            device_type: { n: 6, br: T.readInt32, bw: C.writeInt32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppLaunchIntent_Request`;
    }
  },
  gt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pending_remote_operations || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pending_remote_operations: { n: 1, c: qe, r: !0, q: !0 } },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppLaunchIntent_Response`;
    }
  },
  _t = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            client_id: {
              n: 2,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            uploads_completed: { n: 3, br: T.readBool, bw: C.writeBool },
            uploads_required: { n: 4, br: T.readBool, bw: C.writeBool },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppExitSyncDone_Notification`;
    }
  },
  vt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: T.readUint32, bw: C.writeUint32 } },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientGetAppQuotaUsage_Request`;
    }
  },
  yt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.existing_files || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            existing_files: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            existing_bytes: {
              n: 2,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            max_num_files: { n: 3, br: T.readUint32, bw: C.writeUint32 },
            max_num_bytes: {
              n: 4,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientGetAppQuotaUsage_Response`;
    }
  },
  bt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_name || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            file_name: { n: 1, br: T.readString, bw: C.writeString },
            sha_file: { n: 2, br: T.readBytes, bw: C.writeBytes },
            time_stamp: {
              n: 3,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            raw_file_size: { n: 4, br: T.readUint32, bw: C.writeUint32 },
            persist_state: { n: 5, br: T.readEnum, bw: C.writeEnum },
            platforms_to_sync: { n: 6, br: T.readUint32, bw: C.writeUint32 },
            path_prefix_index: { n: 7, br: T.readUint32, bw: C.writeUint32 },
            machine_name_index: { n: 8, br: T.readUint32, bw: C.writeUint32 },
            reupload_requested: { n: 9, br: T.readBool, bw: C.writeBool },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppFileInfo`;
    }
  },
  xt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            synced_change_number: {
              n: 2,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetAppFileChangelist_Request`;
    }
  },
  St = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.current_change_number || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [2, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            current_change_number: {
              n: 1,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            files: { n: 2, c: bt, r: !0, q: !0 },
            is_only_delta: { n: 3, br: T.readBool, bw: C.writeBool },
            path_prefixes: {
              n: 4,
              r: !0,
              q: !0,
              br: T.readString,
              bw: C.writeRepeatedString,
            },
            machine_names: {
              n: 5,
              r: !0,
              q: !0,
              br: T.readString,
              bw: C.writeRepeatedString,
            },
            app_buildid_hwm: {
              n: 6,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetAppFileChangelist_Response`;
    }
  },
  Ct = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url_host || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            url_host: { n: 1, br: T.readString, bw: C.writeString },
            url_path: { n: 2, br: T.readString, bw: C.writeString },
            use_https: { n: 3, br: T.readBool, bw: C.writeBool },
            http_method: { n: 4, br: T.readInt32, bw: C.writeInt32 },
            request_headers: { n: 5, c: wt, r: !0, q: !0 },
            block_offset: {
              n: 6,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            block_length: { n: 7, br: T.readUint32, bw: C.writeUint32 },
            explicit_body_data: { n: 8, br: T.readBytes, bw: C.writeBytes },
            may_parallelize: { n: 9, br: T.readBool, bw: C.writeBool },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ClientCloudFileUploadBlockDetails`;
    }
  },
  wt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: C.writeString },
            value: { n: 2, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ClientCloudFileUploadBlockDetails_HTTPHeaders`;
    }
  },
  Tt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            machine_name: { n: 2, br: T.readString, bw: C.writeString },
            files_to_upload: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readString,
              bw: C.writeRepeatedString,
            },
            files_to_delete: {
              n: 4,
              r: !0,
              q: !0,
              br: T.readString,
              bw: C.writeRepeatedString,
            },
            client_id: {
              n: 5,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            app_build_id: {
              n: 6,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginAppUploadBatch_Request`;
    }
  },
  Et = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.batch_id || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            batch_id: { n: 1, br: T.readUint64String, bw: C.writeUint64String },
            app_change_number: {
              n: 4,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginAppUploadBatch_Response`;
    }
  },
  Dt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            batch_id: { n: 2, br: T.readUint64String, bw: C.writeUint64String },
            batch_eresult: { n: 3, br: T.readUint32, bw: C.writeUint32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Notification`;
    }
  },
  Ot = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            batch_id: { n: 2, br: T.readUint64String, bw: C.writeUint64String },
            batch_eresult: { n: 3, br: T.readUint32, bw: C.writeUint32 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Request`;
    }
  },
  kt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Response`;
    }
  },
  At = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            app_change_number: {
              n: 2,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppCloudStateChange_Notification`;
    }
  },
  jt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            file_size: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            raw_file_size: { n: 3, br: T.readUint32, bw: C.writeUint32 },
            file_sha: { n: 4, br: T.readBytes, bw: C.writeBytes },
            time_stamp: {
              n: 5,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            filename: { n: 6, br: T.readString, bw: C.writeString },
            platforms_to_sync: {
              n: 7,
              d: 4294967295,
              br: T.readUint32,
              bw: C.writeUint32,
            },
            cell_id: { n: 9, br: T.readUint32, bw: C.writeUint32 },
            can_encrypt: { n: 10, br: T.readBool, bw: C.writeBool },
            is_shared_file: { n: 11, br: T.readBool, bw: C.writeBool },
            deprecated_realm: { n: 12, br: T.readUint32, bw: C.writeUint32 },
            upload_batch_id: {
              n: 13,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientBeginFileUpload_Request`;
    }
  },
  Mt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.encrypt_file || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            encrypt_file: { n: 1, br: T.readBool, bw: C.writeBool },
            block_requests: { n: 2, c: Ct, r: !0, q: !0 },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientBeginFileUpload_Response`;
    }
  },
  Nt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: T.readBool, bw: C.writeBool },
            appid: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            file_sha: { n: 3, br: T.readBytes, bw: C.writeBytes },
            filename: { n: 4, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientCommitFileUpload_Request`;
    }
  },
  Pt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: T.readBool, bw: C.writeBool } },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientCommitFileUpload_Response`;
    }
  },
  Ft = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            filename: { n: 2, br: T.readString, bw: C.writeString },
            realm: { n: 3, br: T.readUint32, bw: C.writeUint32 },
            force_proxy: { n: 4, br: T.readBool, bw: C.writeBool },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Request`;
    }
  },
  It = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, [10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            file_size: { n: 2, br: T.readUint32, bw: C.writeUint32 },
            raw_file_size: { n: 3, br: T.readUint32, bw: C.writeUint32 },
            sha_file: { n: 4, br: T.readBytes, bw: C.writeBytes },
            time_stamp: {
              n: 5,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            is_explicit_delete: { n: 6, br: T.readBool, bw: C.writeBool },
            url_host: { n: 7, br: T.readString, bw: C.writeString },
            url_path: { n: 8, br: T.readString, bw: C.writeString },
            use_https: { n: 9, br: T.readBool, bw: C.writeBool },
            request_headers: { n: 10, c: Lt, r: !0, q: !0 },
            encrypted: { n: 11, br: T.readBool, bw: C.writeBool },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Response`;
    }
  },
  Lt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: C.writeString },
            value: { n: 2, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Response_HTTPHeaders`;
    }
  },
  Rt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            filename: { n: 2, br: T.readString, bw: C.writeString },
            is_explicit_delete: { n: 3, br: T.readBool, bw: C.writeBool },
            upload_batch_id: {
              n: 4,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientDeleteFile_Request`;
    }
  },
  zt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientDeleteFile_Response`;
    }
  },
  Bt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            chose_local_files: { n: 2, br: T.readBool, bw: C.writeBool },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientConflictResolution_Notification`;
    }
  },
  Vt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            client_id: {
              n: 2,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            machine_name: { n: 3, br: T.readString, bw: C.writeString },
            cloud_sync_completed: { n: 4, br: T.readBool, bw: C.writeBool },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionSuspend_Request`;
    }
  },
  Ht = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionSuspend_Response`;
    }
  },
  Ut = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            client_id: {
              n: 2,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionResume_Request`;
    }
  },
  Wt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), H.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionResume_Response`;
    }
  },
  Gt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadCheck_Notification`;
    }
  },
  Kt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.request_id || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            request_id: {
              n: 1,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadRequest_Notification`;
    }
  },
  qt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: T.readUint64String,
              bw: C.writeUint64String,
            },
            request_id: {
              n: 2,
              br: T.readUint64String,
              bw: C.writeUint64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadComplete_Notification`;
    }
  },
  Jt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: T.readUint32, bw: C.writeUint32 },
            file_name: { n: 2, br: T.readString, bw: C.writeString },
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ShareFile_Request`;
    }
  },
  Yt = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.hcontent || N(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hcontent: {
              n: 1,
              d: `18446744073709551615`,
              br: T.readFixed64String,
              bw: C.writeFixed64String,
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
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ShareFile_Response`;
    }
  },
  G;
(function (e) {
  function t(e, t) {
    return e.SendNotification(`Cloud.ClientLogUploadCheck#1`, I(Gt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientLogUploadCheck = t;
  function n(e, t) {
    return e.SendNotification(`Cloud.ClientLogUploadComplete#1`, I(qt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientLogUploadComplete = n;
  function r(e, t, n) {
    return e.SendMsg(`Cloud.BeginHTTPUpload#1`, I(W, t, n), Je, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.BeginHTTPUpload = r;
  function i(e, t, n) {
    return e.SendMsg(`Cloud.CommitHTTPUpload#1`, I(Xe, t, n), Ze, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.CommitHTTPUpload = i;
  function a(e, t, n) {
    return e.SendMsg(`Cloud.BeginUGCUpload#1`, I(Qe, t, n), $e, {
      ePrivilege: 1,
    });
  }
  e.BeginUGCUpload = a;
  function o(e, t, n) {
    return e.SendMsg(`Cloud.CommitUGCUpload#1`, I(tt, t, n), nt, {
      ePrivilege: 1,
    });
  }
  e.CommitUGCUpload = o;
  function s(e, t, n) {
    return e.SendMsg(`Cloud.GetFileDetails#1`, I(rt, t, n), it, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetFileDetails = s;
  function c(e, t, n) {
    return e.SendMsg(`Cloud.GetSingleFileInfo#1`, I(at, t, n), ot, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetSingleFileInfo = c;
  function l(e, t, n) {
    return e.SendMsg(`Cloud.ShareFile#1`, I(Jt, t, n), Yt, { ePrivilege: 1 });
  }
  e.ShareFile = l;
  function u(e, t, n) {
    return e.SendMsg(`Cloud.EnumerateUserFiles#1`, I(st, t, n), ct, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnumerateUserFiles = u;
  function d(e, t, n) {
    return e.SendMsg(`Cloud.Delete#1`, I(lt, t, n), ut, { ePrivilege: 1 });
  }
  e.Delete = d;
  function f(e, t, n) {
    return e.SendMsg(`Cloud.GetClientEncryptionKey#1`, I(dt, t, n), ft, {
      ePrivilege: 1,
    });
  }
  e.GetClientEncryptionKey = f;
  function p(e, t) {
    return e.SendNotification(`Cloud.CDNReport#1`, I(pt, t), { ePrivilege: 1 });
  }
  e.CDNReport = p;
  function m(e, t) {
    return e.SendNotification(
      `Cloud.ExternalStorageTransferReport#1`,
      I(mt, t),
      { ePrivilege: 1 },
    );
  }
  e.ExternalStorageTransferReport = m;
  function h(e, t, n) {
    return e.SendMsg(`Cloud.BeginAppUploadBatch#1`, I(Tt, t, n), Et, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.BeginAppUploadBatch = h;
  function g(e, t) {
    return e.SendNotification(`Cloud.CompleteAppUploadBatch#1`, I(Dt, t), {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.CompleteAppUploadBatch = g;
  function ee(e, t, n) {
    return e.SendMsg(
      `Cloud.CompleteAppUploadBatchBlocking#1`,
      I(Ot, t, n),
      kt,
      { ePrivilege: 1 },
    );
  }
  e.CompleteAppUploadBatchBlocking = ee;
  function te(e, t, n) {
    return e.SendMsg(`Cloud.ClientBeginFileUpload#1`, I(jt, t, n), Mt, {
      ePrivilege: 1,
    });
  }
  e.ClientBeginFileUpload = te;
  function _(e, t, n) {
    return e.SendMsg(`Cloud.ClientCommitFileUpload#1`, I(Nt, t, n), Pt, {
      ePrivilege: 1,
    });
  }
  e.ClientCommitFileUpload = _;
  function v(e, t, n) {
    return e.SendMsg(`Cloud.ClientFileDownload#1`, I(Ft, t, n), It, {
      ePrivilege: 1,
    });
  }
  e.ClientFileDownload = v;
  function y(e, t, n) {
    return e.SendMsg(`Cloud.ClientDeleteFile#1`, I(Rt, t, n), zt, {
      ePrivilege: 1,
    });
  }
  e.ClientDeleteFile = y;
  function b(e, t) {
    return e.SendNotification(`Cloud.ClientConflictResolution#1`, I(Bt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientConflictResolution = b;
  function x(e, t, n) {
    return e.SendMsg(`Cloud.GetAppFileChangelist#1`, I(xt, t, n), St, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetAppFileChangelist = x;
  function ne(e, t, n) {
    return e.SendMsg(`Cloud.SuspendAppSession#1`, I(Vt, t, n), Ht, {
      ePrivilege: 1,
    });
  }
  e.SuspendAppSession = ne;
  function re(e, t, n) {
    return e.SendMsg(`Cloud.ResumeAppSession#1`, I(Ut, t, n), Wt, {
      ePrivilege: 1,
    });
  }
  e.ResumeAppSession = re;
  function S(e, t, n) {
    return e.SendMsg(`Cloud.SignalAppLaunchIntent#1`, I(ht, t, n), gt, {
      ePrivilege: 1,
    });
  }
  e.SignalAppLaunchIntent = S;
  function C(e, t) {
    return e.SendNotification(`Cloud.SignalAppExitSyncDone#1`, I(_t, t), {
      ePrivilege: 1,
    });
  }
  e.SignalAppExitSyncDone = C;
  function w(e, t, n) {
    return e.SendMsg(`Cloud.ClientGetAppQuotaUsage#1`, I(vt, t, n), yt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.ClientGetAppQuotaUsage = w;
})((G ||= {}));
var Xt;
(function (e) {
  ((e.NotifyAppStateChangeHandler = {
    name: `CloudClient.NotifyAppStateChange#1`,
    request: At,
  }),
    (e.ClientLogUploadRequestHandler = {
      name: `CloudClient.ClientLogUploadRequest#1`,
      request: Kt,
    }));
})((Xt ||= {}));
var Zt = new F(`GameNotesCloudStore`).Debug;
function Qt(e) {
  return e.replace(/[!-/:-@ [\\\]^`]/g, `_`);
}
var $t = class {
    FilenameForNotes(e) {
      return `appid` in e
        ? `notes_${Number(e.appid)}`
        : `notes_shortcut_${Qt(e.shortcut)}`;
    }
    DirectoryForNoteImages(e) {
      return `appid` in e
        ? `notes_${Number(e.appid)}_images/`
        : `notes_shortcut_${Qt(e.shortcut)}_images/`;
    }
    ParseNotesFileName(e) {
      let t = e.match(/^notes_shortcut_([^/]+)$/);
      if (t) return { shortcut: t[1] };
      let n = e.match(/^notes_(\d+)$/);
      if (n && parseInt(n[1]) < 2147483647) return { appid: parseInt(n[1]) };
    }
    async GetGameNotesList(e) {
      return (await this.InternalLoadNotes(e)).notes.slice();
    }
    NewNote(e, t) {
      let n = {};
      return (
        `appid` in e ? (n.appid = e.appid) : (n.shortcut_name = e.shortcut),
        {
          id: Date.now().toString(36),
          ...n,
          ordinal: 0,
          time_created: Math.floor(Date.now() / 1e3),
          time_modified: Math.floor(Date.now() / 1e3),
          title: t,
          content: ``,
          not_persisted: !0,
        }
      );
    }
    async SaveGameNotes(e, t) {
      let n = { notes: t };
      `shortcut` in e && (n.shortcut_name = e.shortcut);
      let r = JSON.stringify(n, (e, t) => (e === `not_persisted` ? void 0 : t));
      return (
        Zt(`SaveGameNotes`, n),
        await this.WriteNotesFile(this.FilenameForNotes(e), r)
      );
    }
  },
  en = new F(`GameNotesCloudStore`).Debug,
  tn = class extends $t {
    m_props;
    constructor(e) {
      (super(), (this.m_props = e));
    }
    async GetGamesWithNotes() {
      let e = [];
      for (let [t, n] of await this.GetFiles()) {
        let r = this.ParseNotesFileName(t);
        if (!r) continue;
        let i;
        ((i =
          `appid` in r ? { appid: r.appid } : { shortcut_name: r.shortcut }),
          e.push({ ...i, last_modified: n.rtLastModified }));
      }
      return e;
    }
    async UploadImage(e, t) {
      let n = `${e}${await we(await t.arrayBuffer(), `SHA-1`)}.${g(t)}`;
      if (!(await this.m_props.uploadFile(n, t)))
        throw `There was an error uploading the file`;
      return (this.m_mapCachedImageFiles.set(n, t), n);
    }
    m_mapCachedImageFiles = new Map();
    async ResolveImageURL(e) {
      let t = this.m_mapCachedImageFiles.get(e);
      if (!t) {
        let n = await this.GetCloudFileInfo(e);
        if (!n) return;
        ((t = await this.InternalLoadImageFromCloud(n)),
          this.m_mapCachedImageFiles.set(e, t));
      }
      return URL.createObjectURL(t);
    }
    m_mapFileInfo;
    m_tsFileInfoLoaded = 0;
    m_promiseLoadingNotes;
    async GetFiles() {
      return (
        (!this.m_mapFileInfo ||
          performance.now() - this.m_tsFileInfoLoaded > 9e5) &&
          ((this.m_promiseLoadingNotes ||= this.InternalLoadNotesList()),
          await this.m_promiseLoadingNotes,
          (this.m_promiseLoadingNotes = void 0)),
        this.m_mapFileInfo
      );
    }
    async InternalLoadNotes(e) {
      let t = this.FilenameForNotes(e),
        n = await this.GetCloudFileInfo(t),
        r;
      return (
        (r = n ? await this.InternalLoadFileFromCloud(n) : { notes: [] }), r
      );
    }
    async WriteNotesFile(e, t) {
      return (this.m_props.uploadFile(e, t), 1);
    }
    async GetCloudFileInfo(e) {
      let t = (await this.GetFiles()).get(e);
      if (!t) return;
      let n = P.Init(rt);
      (n.Body().set_appid(L), n.Body().set_ugcid(t.ugcid));
      let r = await G.GetFileDetails(
        this.m_props.steamInterface.GetServiceTransport(),
        n,
      );
      if (!r.BSuccess() || !r.Body().details(!1))
        throw `Error loading cloud file detail: ${r.GetErrorMessage()}`;
      let i = r.Body().details();
      return (
        _(i.filename() == e, `Asked for ${e} but got ${i.filename()}`),
        {
          strURL: i.url(),
          strSHA: i.file_sha(),
          strFilename: i.filename(),
          ugcid: i.ugcid(),
          rtLastModified: parseInt(i.timestamp()),
          nBytes: i.file_size(),
        }
      );
    }
    async InternalLoadNotesList() {
      let e = 0,
        t = !0,
        n = new Map();
      for (; t;) {
        en(`EnumerateUserFiles for ${L}, starting at ${e}`);
        let r = P.Init(st);
        (r.Body().set_appid(L),
          r.Body().set_extended_details(!0),
          r.Body().set_start_index(e));
        let i = await G.EnumerateUserFiles(
          this.m_props.steamInterface.GetServiceTransport(),
          r,
        );
        if (!i.BSuccess())
          throw `Error loading cloud files: ${i.GetErrorMessage()}`;
        i.Body()
          .files()
          .map((e) => ({
            strFilename: e.filename(),
            ugcid: e.ugcid(),
            rtLastModified: parseInt(e.timestamp()),
            nBytes: e.file_size(),
          }))
          .forEach((e) => n.set(e.strFilename, e));
        let a = i.Body().files().length;
        ((e += a),
          (t = e < i.Body().total_files()),
          en(
            `EnumerateUserFiles complete, loaded ${e - a}-${e} files of ${i.Body().total_files()} total files ${t ? `, running another fetch` : ``}`,
          ));
      }
      this.m_mapFileInfo = n;
    }
    async InternalLoadFileFromCloud(e) {
      let t = await (await fetch(e.strURL)).json();
      if (t) return t;
      throw `Cloud file not found for ${e.strFilename}`;
    }
    async InternalLoadImageFromCloud(e) {
      let t = await (await fetch(e.strURL)).blob();
      return new File([t], e.strFilename, { type: t.type });
    }
  };
function nn(e) {
  return { appid: e };
}
function rn(e) {
  return { shortcut: an(e) };
}
function an(e) {
  return e.trim();
}
function on(e) {
  return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
}
var K = f(),
  q = B.createContext({ mode: `page`, store: null });
function sn(e) {
  let {
      mode: t,
      store: n,
      closePopup: r,
      bPinnedView: i,
      onClickURL: a,
      bSpellcheckEnabled: o = !0,
      setSpellcheckEnabled: s,
      children: c,
    } = e,
    l = B.useMemo(
      () => ({
        mode: t,
        store: n,
        closePopup: r,
        bPinnedView: i,
        onClickURL: a,
        bSpellcheckEnabled: o,
        setSpellcheckEnabled: s,
      }),
      [t, n, r, i, a, o, s],
    );
  return (0, K.jsx)(q.Provider, { value: l, children: c });
}
function cn() {
  return B.useContext(q).mode == `single`;
}
function J() {
  return B.useContext(q).closePopup;
}
function Y() {
  return B.useContext(q).store;
}
function ln() {
  return B.useContext(q).bPinnedView;
}
function un() {
  return B.useContext(q).onClickURL;
}
function dn() {
  return B.useContext(q).bSpellcheckEnabled ?? !0;
}
function fn() {
  return B.useContext(q).setSpellcheckEnabled;
}
var pn = new F(`GameNotesCloudStore`).Debug;
function mn() {
  let e = Y();
  return o({
    queryKey: [`GameNotes`, `GamesWithNotes`],
    queryFn: () => e.GetGamesWithNotes(),
    staleTime: 6e5,
  });
}
function X(e) {
  return `appid` in e
    ? [`GameNotes`, `NotesByAppID`, e.appid]
    : [`GameNotes`, `NotesForShortcut`, an(e.shortcut)];
}
function Z(e, t) {
  return {
    queryKey: X(t),
    queryFn: async () => (await e.GetGameNotesList(t)) || [],
    staleTime: 18e4,
    refetchInterval: 9e5,
    enabled: !!t,
    structuralSharing: !0,
  };
}
function hn(e) {
  let t = Y();
  return o(Z(t, e));
}
function gn(e, t) {
  let n = u(),
    r = Y(),
    a = on(e);
  return i({
    scope: { id: `${`appid` in e ? e.appid : e.shortcut_name}_${e.id}` },
    mutationFn: async (t) => {
      let { title: i, bbcode: o } = t;
      pn(`Saving note ${i}`);
      let s = await n.fetchQuery(Z(r, a));
      if (!s) throw `Failed to load notes for ${JSON.stringify(a)}`;
      let c = s.find((t) => t.id == e.id),
        l = {
          ...(c ?? {}),
          ...e,
          title: i,
          content: o,
          time_modified: Math.floor(Date.now() / 1e3),
        },
        u;
      u = c ? s.map((e) => (e.id == l.id ? l : e)) : [...s, l];
      let d = await r.SaveGameNotes(a, u);
      if (d != 1) throw `Error saving notes: ${d}`;
      return u;
    },
    onMutate(t) {
      let r = { ...e, title: t.title, content: t.bbcode };
      return (yn(n, a, (e) => e.map((e) => (e.id == r.id ? r : e))), r);
    },
    onSuccess(e, t, r) {
      n.setQueryData(X(a), e);
    },
    onError(e) {
      t(e.message || e.name);
    },
  });
}
function _n(e) {
  let t = u(),
    n = Y();
  return B.useCallback(() => {
    let r = A(`#UserGameNotes_UntitledNote_Title`),
      i = n.NewNote(e, r);
    return (yn(t, e, (e) => [...e, i]), i.id);
  }, [t, n, e]);
}
function vn(e, t) {
  let n = u(),
    r = Y(),
    a = on(e);
  return i({
    mutationFn: async () => {
      if (e.not_persisted) return;
      let t = await n.fetchQuery(Z(r, a));
      if (!t) throw `Failed to load notes for ${JSON.stringify(a)}`;
      let i = t.filter((t) => t.id != e.id);
      return (await r.SaveGameNotes(a, i), i);
    },
    onSuccess: (e) => {
      (e && n.setQueryData(X(a), e), t && t());
    },
  });
}
function yn(e, t, n) {
  e.setQueryData(X(t), (e) => e && n(e));
}
function bn(e, t) {
  return B.useMemo(() => (t ? rn(t) : nn(e)), [e, t]);
}
var xn = R.nodes.image,
  Sn = {
    nodes: {
      ...R.nodes,
      cloudimage: {
        ...xn,
        parseDOM: [],
        bbCode: { ...xn.bbCode, tag: `cloudimg` },
      },
    },
    marks: { ...R.marks },
  },
  Q = new Ve(Sn),
  Cn = e(t());
function wn(e) {
  let {
      schema: t,
      view: n,
      refUpdateToolbar: r,
      className: i,
      bSpellcheckEnabled: a = !1,
      setSpellcheckEnabled: o,
    } = e,
    [s, c] = x(`FormattingToolbar_Expanded`, !1);
  return (0, K.jsx)(De, {
    refUpdateToolbar: r,
    view: n,
    children: (0, K.jsxs)(`div`, {
      className: O(void 0, i),
      children: [
        (0, K.jsxs)(He, {
          children: [
            (0, K.jsx)(Ae, {}),
            (0, K.jsx)(z, {}),
            (0, K.jsx)(Le, { schema: t }),
            (0, K.jsx)(Ne, {}),
            (0, K.jsx)(Me, {
              onClick: () => c(!s),
              tooltip: A(`#FormattingToolbar_ExpandOptions`),
              children: (0, K.jsx)(me, { direction: s ? `up` : `down` }),
            }),
          ],
        }),
        (0, K.jsx)(ee, {
          visible: s,
          children: (0, K.jsxs)(He, {
            children: [
              (0, K.jsx)(Re, { schema: t }),
              (0, K.jsx)(ze, { schema: t, levels: 5 }),
              (0, K.jsx)(je, {
                nodeType: t.nodes.code_block,
                tooltip: A(`#FormattingToolbar_CodeBlock`),
                children: (0, K.jsx)(ye, {}),
              }),
              (0, K.jsx)(z, {}),
              (0, K.jsx)(Oe, { schema: t }),
              (0, K.jsx)(z, {}),
              (0, K.jsx)(Pe, { schema: t }),
              (0, K.jsx)(Ne, {}),
              o &&
                (0, K.jsx)(Be, {
                  bSpellcheckEnabled: a,
                  setSpellcheckEnabled: o,
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
var Tn = `-XvFTdkdiiE-`,
  En = `aJA9DmU-q6Q-`,
  Dn = `OEdv4TCAhEw-`,
  On = `Zb5eJWEsiSs-`,
  kn = `kkukKS4eyUo-`,
  An = `bWixMx68CWM-`,
  jn = `_5QrKjkgDQ0Y-`;
function Mn(e) {
  let { deleteNote: t, hidden: n, pmState: r } = e,
    [i, a] = B.useState(null),
    o = B.useRef(void 0),
    s = dn(),
    c = fn(),
    l = w(),
    u = {
      onSecondaryButton: () => t(),
      onSecondaryActionDescription: A(`#UserGameNotes_DeleteNote`),
      onDragOver: (e) => e.stopPropagation(),
    };
  return (
    B.useEffect(() => {
      i &&
        !n &&
        (_e.IN_CLIENT || !window.matchMedia(`(max-width: 500px)`).matches) &&
        i.focus();
    }, [i, n]),
    (0, K.jsxs)(K.Fragment, {
      children: [
        !l &&
          (0, K.jsx)(wn, {
            schema: Q.pm_schema,
            view: i,
            refUpdateToolbar: o,
            className: `_3NCAPa1mmWE-`,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: c,
          }),
        (0, K.jsx)(Ie, {
          pmState: r,
          className: kn,
          refOnUpdate: o,
          refView: a,
          bSpellcheckEnabled: s,
          panelProps: u,
          children: (0, K.jsx)(Nn, { schema: Q.pm_schema }),
        }),
      ],
    })
  );
}
var Nn = B.memo(function (e) {
  let { schema: t } = e,
    n = un(),
    r = B.useMemo(
      () => [
        {
          type: t.nodes.cloudimage,
          component: Pn,
          readProps: (e) => ({ src: e.attrs.src }),
        },
      ],
      [t.nodes.cloudimage],
    );
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(Ue, { nodeType: t.nodes.image }),
      (0, K.jsx)(We, { linkMarkType: t.marks.link, schema: t, onClickURL: n }),
      (0, K.jsx)(Fe, { specs: r }),
    ],
  });
});
function Pn(e) {
  let { src: t, selected: n } = e,
    [r, i] = B.useState(),
    a = Y();
  return (
    B.useEffect(() => {
      let e = !1;
      return (
        a.ResolveImageURL(t).then((t) => {
          e ? URL.revokeObjectURL(t) : i(t);
        }),
        () => {
          ((e = !0), i(void 0));
        }
      );
    }, [a, t]),
    r
      ? (0, K.jsx)(`img`, {
          className: (0, Cn.default)(te, n && `ProseMirror-selectednode`),
          src: r,
        })
      : null
  );
}
var Fn = 10;
function In(e) {
  let { note: t, hidden: n = !1 } = e,
    [r, i] = B.useState(void 0),
    a = B.useRef(!1),
    o = w(),
    { mutate: s } = gn(t, i),
    [c, l] = B.useState();
  B.useEffect(() => {
    if (!a.current) {
      let e = new Te(Q, t.content, (e, t) => s({ title: Hn(t), bbcode: e }));
      (Un(e, Q.pm_schema), l(e));
    }
  }, [s, t.content]);
  let { bDirty: u } = Ee(c, { msAutosaveTimeout: Fn * 1e3 });
  (B.useEffect(() => {
    u &&
      !a.current &&
      ((a.current = !0), Ge.ReportTrackedAction(`/GameNotes/NoteModified`));
  }, [u]),
    B.useEffect(() => {
      n && c && c.CommitChanges();
    }, [n, c]));
  let d = ce().ownerWindow;
  (ne(
    d.document,
    B.useCallback(
      (e) => {
        e == `hidden` && c && c.CommitChanges();
      },
      [c],
    ),
  ),
    re(
      window,
      `beforeunload`,
      B.useCallback(
        (e) => {
          !j.IN_STEAMUI &&
            c.BHasUncomittedChanges() &&
            (c.CommitChanges(), e.preventDefault());
        },
        [c],
      ),
    ));
  let f = Ln(t.appid, Q.pm_schema),
    p = vn(t, J());
  return (0, K.jsx)(ke, {
    ProcessFileUpload: f,
    bAllowImageHotLinking: !0,
    children: (0, K.jsxs)(`div`, {
      className: On,
      children: [
        (0, K.jsx)(Rn, { error: r, dismissError: () => i(void 0) }),
        (0, K.jsx)(Mn, { deleteNote: p.mutate, hidden: n, pmState: c }),
        !o && (0, K.jsx)(zn, { note: t, bDirty: u }),
      ],
    }),
  });
}
function Ln(e, t) {
  let n = Y();
  return B.useCallback(
    async (r) => {
      let i = await n.UploadImage(`notes_${e}_images/`, r);
      return t.nodes.cloudimage.create({ src: i });
    },
    [n, e, t],
  );
}
function Rn(e) {
  let { error: t, dismissError: n } = e;
  return t
    ? (0, K.jsx)(ae, {
        active: !0,
        children: (0, K.jsx)(le, {
          bAlertDialog: !0,
          strTitle: A(`#Error_Generic`),
          strDescription: A(`#UserGameNotes_ErrorSavingNotes`, t),
          closeModal: n,
        }),
      })
    : null;
}
function zn(e) {
  let { note: t, bDirty: n } = e,
    [r, i, a] = be(!1),
    o = cn(),
    { mutate: s, isPending: c } = vn(t, J()),
    l = B.useCallback(() => {
      !n && t.not_persisted ? s() : i();
    }, [n, t, s, i]);
  return (0, K.jsxs)(`div`, {
    className: Dn,
    children: [
      r &&
        (0, K.jsx)(Vn, {
          note: t,
          closeModal: a,
          deleteNote: s,
          deletePending: c,
        }),
      (0, K.jsx)(pe, {
        toolTipContent: A(`#UserGameNotes_DeleteNote`),
        direction: `top`,
        children: (0, K.jsx)(k, { onClick: l, children: (0, K.jsx)(se, {}) }),
      }),
      o && (0, K.jsx)(Bn, { bDirty: n }),
    ],
  });
}
function Bn(e) {
  let { bDirty: t } = e,
    n = J();
  return t
    ? (0, K.jsx)(Se, {
        onClick: () => n(),
        className: jn,
        children: A(`#Button_SaveAndClose`),
      })
    : (0, K.jsx)(k, {
        onClick: () => n(),
        className: jn,
        children: A(`#Button_Close`),
      });
}
function Vn(e) {
  let { note: t, closeModal: n, deleteNote: r, deletePending: i } = e;
  return (0, K.jsx)(ae, {
    active: !0,
    children: (0, K.jsx)(le, {
      strTitle: A(`#UserGameNotes_DeleteNote`),
      strDescription: A(`#UserGameNotes_PromptDelete`),
      onOK: () => r(),
      bOKDisabled: i,
      strOKButtonText: A(`#Button_Delete`),
      closeModal: n,
    }),
  });
}
function Hn(e) {
  let t = ``;
  for (let n = 0; n < e.content.childCount; n++) {
    let r = e.content.child(n);
    if (r.isText) t += r.text;
    else if (((t = t.trim()), t.length > 4 || ((t = Hn(r)), t.length > 4)))
      return t;
  }
  return t.trim();
}
function Un(e, t) {
  e.UpdateState((e) => {
    let n = [];
    if (
      (e.doc.descendants((e, r) => {
        e.type === t.nodes.image &&
          e.attrs.src?.match(/^\/gamenotes\//) &&
          n.push({ node: e, pos: r });
      }),
      n.length)
    )
      return (
        n.reverse().forEach(({ node: n, pos: r }) => {
          let i = n.attrs.src.replace(/^\/gamenotes\//, ``),
            a = t.nodes.cloudimage.create({ src: i });
          e = e.replaceWith(r, r + n.nodeSize, a);
        }),
        e.setMeta(`addToHistory`, !1),
        e
      );
  });
}
var Wn = e(c()),
  Gn,
  Kn = 864e5;
function qn(e) {
  return `appinfo_${e}_${j.LANGUAGE}`;
}
function Jn(e) {
  return !!(e && Date.now() - e.timeCached < Kn);
}
function Yn(e, t) {
  return (
    (Gn ||= new Wn.default(
      async (n) => {
        let r = new Map();
        (await Promise.all(n.map((e) => t.GetObject(qn(e)))))
          .filter(Jn)
          .forEach(({ value: e }) => r.set(e.appid, e));
        let i = n.slice().filter((e) => !r.has(e));
        if (i.length) {
          let n = P.Init(oe);
          (n.Body().set_language(ue(j.LANGUAGE)), n.Body().set_appids(i));
          let a = await ie.GetApps(e, n);
          if (a.GetEResult() != 1) throw a.GetErrorMessage();
          a.Body()
            .toObject()
            .apps.forEach((e) => {
              (t.StoreObject(qn(e.appid), { timeCached: Date.now(), value: e }),
                r.set(e.appid, e));
            });
        }
        return n.map((e) => r.get(e));
      },
      { cache: !1 },
    )),
    Gn
  );
}
function Xn(e) {
  let t = de(),
    n = ge();
  return o({
    queryKey: [`appinfo`, e],
    queryFn: async () => Yn(t, n).load(e),
    staleTime: Kn,
    enabled: !!e,
  }).data;
}
function Zn(e) {
  let { bStandalonePage: t } = e,
    r = n(),
    i = bn(
      `appid` in r.params && Number(r.params.appid),
      `shortcut_name` in r.params && r.params.shortcut_name,
    ),
    a = $(),
    o = _n(i),
    s = B.useRef(void 0),
    { data: c } = hn(i),
    l,
    u = !1;
  if (c) {
    let e = r.params.noteid || s.current;
    (e && ((l = c.find((t) => t.id === e)), !l && r.params.noteid && (u = !0)),
      (l ||= c[0]));
  }
  (l && (s.current = l.id),
    B.useEffect(() => {
      c && c.length == 0 && a(i, o(), !0);
    }, [a, i, c, o]),
    B.useEffect(() => {
      u && a(i, void 0, !0);
    }, [a, i, u]));
  let d = (0, K.jsx)(pe, {
    toolTipContent: A(`#UserGameNotes_NewNote`),
    direction: `top`,
    children: (0, K.jsx)(k, {
      className: An,
      onClick: () => {
        let e = o();
        a(i, e);
      },
      children: (0, K.jsx)(fe, {}),
    }),
  });
  return c
    ? (0, K.jsx)(Qn, {
        noteParent: i,
        notes: c,
        activeNoteID: l?.id,
        actions: d,
        bStandalonePage: t,
      })
    : null;
}
function Qn(e) {
  let {
      noteParent: t,
      notes: r,
      activeNoteID: i,
      actions: a,
      bStandalonePage: o,
    } = e,
    [s, c] = x(`NotesListCollapsed`, !1),
    l = ln(),
    u = w(),
    d = n(),
    f = xe(d.params.noteid || l ? `ActivePage` : `PageList`),
    p = r.map((e) => ({
      title: e.title?.length ? e.title : A(`#UserGameNotes_Untitled`),
      identifier: e.id,
      content: (0, K.jsx)(er, { noteParent: t, note: e }),
      pageClassName: En,
      hideTitle: !0,
    })),
    m = $(),
    h = B.useCallback((e) => m(t, e), [m, t]),
    g = j.IN_STEAMUI
      ? A(`#UserGameNotes_NotesList`)
      : (0, K.jsx)($n, { noteParent: t });
  return u && o
    ? (0, K.jsx)(v, {
        title: g,
        pages: p,
        className: O(Tn, l && `RhdVkvwKgIg-`, f),
        page: i,
        onPageRequested: h,
        bottomControls: a,
        hideList: s,
        toggleHideList: l || u ? void 0 : () => c(!s),
      })
    : (0, K.jsx)(he, {
        title: g,
        pages: p,
        className: O(Tn, l && `RhdVkvwKgIg-`, f),
        page: i,
        onPageRequested: h,
        bottomControls: a,
        hideList: s,
        toggleHideList: l || u ? void 0 : () => c(!s),
      });
}
function $n(e) {
  let { noteParent: t } = e,
    n = Xn(`appid` in t ? t.appid : void 0),
    r;
  return (
    (r = `appid` in t ? n?.name : t.shortcut),
    (0, K.jsx)(K.Fragment, { children: A(`#UserGameNotes_NotesForGame`, r) })
  );
}
function er(e) {
  let { noteParent: t, note: n } = e,
    r = ve(),
    i = $(),
    a = B.useCallback(() => i(t), [i, t]),
    o = ln();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      !o && (0, K.jsx)(Ce, { onActivate: a }),
      (0, K.jsx)(In, { note: n, hidden: !r }),
    ],
  });
}
function $(e = !1) {
  let t = w(),
    n = p(),
    r = e || t;
  return B.useCallback(
    (e, t, i = r) => {
      let a;
      ((a =
        `appid` in e ? V.AppNotes(e.appid, t) : V.ShortcutNotes(e.shortcut, t)),
        i ? n.replace(a, n.location.state) : n.push(a, n.location.state));
    },
    [n, r],
  );
}
function tr() {
  let { data: e, isLoading: t } = mn(),
    n = B.useMemo(
      () => e?.slice().sort((e, t) => t.last_modified - e.last_modified),
      [e],
    );
  return t
    ? (0, K.jsx)(h, { msDelayAppear: 300 })
    : (0, K.jsxs)(`div`, {
        children: [
          (0, K.jsx)(`h1`, { children: A(`#UserGameNotes_NotesList`) }),
          (0, K.jsx)(`ul`, {
            children: n.map((e) =>
              (0, K.jsx)(nr, { game: e }, e.appid || e.shortcut_name),
            ),
          }),
        ],
      });
}
function nr(e) {
  let { game: t } = e;
  return (0, K.jsx)(`li`, {
    children: (0, K.jsx)(l, {
      to: Ke(t.appid ? { appid: t.appid } : { shortcut: t.shortcut_name }),
      children: t.appid ? (0, K.jsx)(rr, { appid: t.appid }) : t.shortcut_name,
    }),
  });
}
function rr(e) {
  let { appid: t } = e;
  return Xn(t)?.name;
}
function ir(e, t, n = {}) {
  let { bIsPublic: r = !0 } = n,
    a = { unAppID: e, strMachineName: t, bIsPublic: r },
    o = de();
  return i({
    mutationFn: async ({ files: e }) =>
      await ar(
        o,
        a,
        e.map((e) => e.filename),
        async (t) =>
          !(await Promise.all(e.map((e) => cr(o, a, t, e)))).some((e) => !e),
      ),
  });
}
async function ar(e, t, n, r) {
  let i = await or(e, t, n);
  if (!i) return !1;
  let a = !1;
  try {
    a = await r(i);
  } finally {
    sr(e, t, i, a);
  }
  return !0;
}
async function or(e, t, n) {
  let r = P.Init(Tt);
  (r.Body().set_appid(t.unAppID),
    r.Body().set_machine_name(t.strMachineName),
    r.Body().set_files_to_upload(n.slice()));
  let i = await G.BeginAppUploadBatch(e, r);
  if (!i.BSuccess())
    throw `Error in BeginAppUploadBatch: ${i.GetErrorMessage()}`;
  return i.Body().batch_id();
}
function sr(e, t, n, r) {
  let i = P.Init(Ot);
  (i.Body().set_appid(t.unAppID),
    i.Body().set_batch_id(n),
    i.Body().set_batch_eresult(r ? 1 : 2),
    G.CompleteAppUploadBatch(e, i));
}
async function cr(e, t, n, r) {
  let i, a;
  ((i =
    r.content instanceof File
      ? await r.content.arrayBuffer()
      : new TextEncoder().encode(r.content).buffer),
    (a = await we(i, `SHA-1`)));
  let o = await lr(e, t, n, r.filename, i.byteLength, a),
    s = `https://${o.url_host}${o.url_path}`,
    c = !1;
  try {
    let e = o.request_headers.map(({ name: e, value: t }) => [e, t]);
    c = (
      await fetch(s, {
        method: `PUT`,
        headers: e,
        mode: `cors`,
        body: r.content,
      })
    ).ok;
  } catch {}
  return await ur(e, t, r.filename, a, c);
}
async function lr(e, t, n, r, i, a) {
  let o = P.Init(W);
  (o.Body().set_appid(t.unAppID),
    o.Body().add_platforms_to_sync(`All`),
    o.Body().set_upload_batch_id(n),
    o.Body().set_is_public(t.bIsPublic),
    o.Body().set_filename(r),
    o.Body().set_file_size(i),
    o.Body().set_file_sha(a));
  let s = await G.BeginHTTPUpload(e, o);
  if (!s.BSuccess()) throw `Error in BeginHTTPUpload: ${s.GetErrorMessage()}`;
  return s.Body().toObject();
}
async function ur(e, t, n, r, i) {
  let a = P.Init(Xe);
  (a.Body().set_appid(t.unAppID),
    a.Body().set_transfer_succeeded(i),
    a.Body().set_filename(n),
    a.Body().set_file_sha(r));
  let o = await G.CommitHTTPUpload(e, a);
  if (!o.BSuccess()) throw `Error in CommitHTTPUpload: ${o.GetErrorMessage()}`;
  return o.Body().file_committed();
}
function dr(e) {
  let t = fr();
  return (0, K.jsx)(sn, {
    mode: `page`,
    store: t,
    children: (0, K.jsxs)(s, {
      children: [
        (0, K.jsx)(m, { path: V.List(), children: (0, K.jsx)(tr, {}) }),
        (0, K.jsx)(m, {
          path: V.AppNotes(`:appid`, `:noteid?`),
          children: (0, K.jsx)(Zn, {}),
        }),
        (0, K.jsx)(m, { children: (0, K.jsx)(d, { to: `${V.List()}` }) }),
      ],
    }),
  });
}
function fr() {
  let e = y(),
    { mutateAsync: t } = ir(L, `Steam Community Web Interface`, {
      bIsPublic: !0,
    }),
    n = B.useCallback(
      (e, n) => t({ files: [{ filename: e, content: n }] }),
      [t],
    ),
    r = B.useRef({ steamInterface: e, uploadFile: n });
  r.current.uploadFile = n;
  let [i] = B.useState(() => new tn(r.current));
  return i;
}
export { dr as default };
