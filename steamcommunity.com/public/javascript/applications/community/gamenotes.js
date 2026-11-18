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
  $o as _,
  Bh as v,
  Ed as ne,
  Fh as y,
  Ih as b,
  Ki as x,
  Ks as re,
  Lh as S,
  N as ie,
  Nh as C,
  Oo as ae,
  Ph as w,
  Rh as T,
  T as oe,
  Tu as E,
  Uh as se,
  Vs as ce,
  Xu as D,
  Yf as O,
  aa as le,
  ah as k,
  bo as ue,
  bs as de,
  cm as fe,
  da as pe,
  gd as me,
  ia as he,
  im as ge,
  kd as _e,
  lo as ve,
  na as ye,
  oh as A,
  ra as be,
  rf as j,
  rg as xe,
  rm as Se,
  sh as M,
  ta as Ce,
  th as we,
  tm as Te,
  us as Ee,
  ym as N,
  zh as P,
  zi as De,
} from "./main.js";
import {
  D as F,
  E as Oe,
  T as ke,
  _ as Ae,
  a as je,
  b as Me,
  c as Ne,
  f as Pe,
  g as Fe,
  h as Ie,
  i as Le,
  j as Re,
  l as ze,
  m as I,
  n as Be,
  o as Ve,
  r as He,
  s as Ue,
  t as We,
  v as Ge,
  x as Ke,
} from "./chunk~5c33f42766.js";
import { t as qe } from "./chunk~01d6da9524.js";
import { t as Je } from "./chunk~06da9a7953.js";
var L = e(r()),
  R = {
    List: () => `/notes/list`,
    AppNotes: (e, t) => `/notes/app/${e}/${t ?? ``}`,
    ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${t ?? ``}`,
  };
function Ye(e, t) {
  return `appid` in e ? R.AppNotes(e.appid, t) : R.ShortcutNotes(e.shortcut, t);
}
var z = e(a(), 1),
  Xe = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.operation || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            operation: { n: 1, br: b.readEnum, bw: v.writeEnum },
            machine_name: { n: 2, br: b.readString, bw: v.writeString },
            client_id: {
              n: 3,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            time_last_updated: { n: 4, br: b.readUint32, bw: v.writeUint32 },
            os_type: { n: 5, br: b.readInt32, bw: v.writeInt32 },
            device_type: { n: 6, br: b.readInt32, bw: v.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_PendingRemoteOperation`;
    }
  },
  B = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            ugcid: { n: 2, br: b.readUint64String, bw: v.writeUint64String },
            filename: { n: 3, br: b.readString, bw: v.writeString },
            timestamp: {
              n: 4,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            file_size: { n: 5, br: b.readUint32, bw: v.writeUint32 },
            url: { n: 6, br: b.readString, bw: v.writeString },
            steamid_creator: {
              n: 7,
              br: b.readFixed64String,
              bw: v.writeFixed64String,
            },
            flags: { n: 8, br: b.readUint32, bw: v.writeUint32 },
            platforms_to_sync: {
              n: 9,
              r: !0,
              q: !0,
              br: b.readString,
              bw: v.writeRepeatedString,
            },
            file_sha: { n: 10, br: b.readString, bw: v.writeString },
            compressed_file_size: {
              n: 11,
              br: b.readUint32,
              bw: v.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_UserFile`;
    }
  },
  V = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [6, 7, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            file_size: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            filename: { n: 3, br: b.readString, bw: v.writeString },
            file_sha: { n: 4, br: b.readString, bw: v.writeString },
            is_public: { n: 5, br: b.readBool, bw: v.writeBool },
            platforms_to_sync: {
              n: 6,
              r: !0,
              q: !0,
              br: b.readString,
              bw: v.writeRepeatedString,
            },
            request_headers_names: {
              n: 7,
              r: !0,
              q: !0,
              br: b.readString,
              bw: v.writeRepeatedString,
            },
            request_headers_values: {
              n: 8,
              r: !0,
              q: !0,
              br: b.readString,
              bw: v.writeRepeatedString,
            },
            upload_batch_id: {
              n: 9,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Request`;
    }
  },
  Ze = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ugcid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ugcid: { n: 1, br: b.readFixed64String, bw: v.writeFixed64String },
            timestamp: { n: 2, br: b.readFixed32, bw: v.writeFixed32 },
            url_host: { n: 3, br: b.readString, bw: v.writeString },
            url_path: { n: 4, br: b.readString, bw: v.writeString },
            use_https: { n: 5, br: b.readBool, bw: v.writeBool },
            request_headers: { n: 6, c: Qe, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Response`;
    }
  },
  Qe = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: b.readString, bw: v.writeString },
            value: { n: 2, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Response_HTTPHeaders`;
    }
  },
  H = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: b.readBool, bw: v.writeBool },
            appid: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            file_sha: { n: 3, br: b.readString, bw: v.writeString },
            filename: { n: 4, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitHTTPUpload_Request`;
    }
  },
  $e = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: b.readBool, bw: v.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitHTTPUpload_Response`;
    }
  },
  et = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            file_size: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            filename: { n: 3, br: b.readString, bw: v.writeString },
            file_sha: { n: 4, br: b.readString, bw: v.writeString },
            content_type: { n: 5, br: b.readString, bw: v.writeString },
            is_public: { n: 6, br: b.readBool, bw: v.writeBool },
            timestamp: {
              n: 7,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Request`;
    }
  },
  tt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.storage_system || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            storage_system: { n: 1, br: b.readEnum, bw: v.writeEnum },
            ugcid: { n: 2, br: b.readFixed64String, bw: v.writeFixed64String },
            timestamp: { n: 3, br: b.readFixed32, bw: v.writeFixed32 },
            url_host: { n: 4, br: b.readString, bw: v.writeString },
            url_path: { n: 5, br: b.readString, bw: v.writeString },
            use_https: { n: 6, br: b.readBool, bw: v.writeBool },
            request_headers: { n: 7, c: nt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Response`;
    }
  },
  nt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: b.readString, bw: v.writeString },
            value: { n: 2, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Response_HTTPHeaders`;
    }
  },
  rt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: b.readBool, bw: v.writeBool },
            appid: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            ugcid: { n: 3, br: b.readFixed64String, bw: v.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitUGCUpload_Request`;
    }
  },
  it = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: b.readBool, bw: v.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitUGCUpload_Response`;
    }
  },
  U = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ugcid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ugcid: { n: 1, br: b.readUint64String, bw: v.writeUint64String },
            appid: { n: 2, br: b.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetFileDetails_Request`;
    }
  },
  at = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.details || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            details: { n: 1, c: B },
            rangecheck_host: { n: 2, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetFileDetails_Response`;
    }
  },
  ot = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            file_name: { n: 2, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetSingleFileInfo_Request`;
    }
  },
  st = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            file_name: { n: 3, br: b.readString, bw: v.writeString },
            sha_file: { n: 4, br: b.readBytes, bw: v.writeBytes },
            time_stamp: {
              n: 5,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            raw_file_size: { n: 6, br: b.readUint32, bw: v.writeUint32 },
            is_explicit_delete: { n: 7, br: b.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetSingleFileInfo_Response`;
    }
  },
  ct = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            extended_details: { n: 2, br: b.readBool, bw: v.writeBool },
            count: { n: 3, br: b.readUint32, bw: v.writeUint32 },
            start_index: { n: 4, br: b.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_EnumerateUserFiles_Request`;
    }
  },
  lt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.files || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            files: { n: 1, c: B, r: !0, q: !0 },
            total_files: { n: 2, br: b.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_EnumerateUserFiles_Response`;
    }
  },
  ut = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filename || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filename: { n: 1, br: b.readString, bw: v.writeString },
            appid: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            upload_batch_id: {
              n: 3,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_Delete_Request`;
    }
  },
  dt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_Delete_Response`;
    }
  },
  ft = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetClientEncryptionKey_Request`;
    }
  },
  pt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.key || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: b.readBytes, bw: v.writeBytes },
            crc: { n: 2, br: b.readInt32, bw: v.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetClientEncryptionKey_Response`;
    }
  },
  mt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: v.writeFixed64String,
            },
            url: { n: 2, br: b.readString, bw: v.writeString },
            success: { n: 3, br: b.readBool, bw: v.writeBool },
            http_status_code: { n: 4, br: b.readUint32, bw: v.writeUint32 },
            expected_bytes: {
              n: 5,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            received_bytes: {
              n: 6,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            duration: { n: 7, br: b.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CDNReport_Notification`;
    }
  },
  ht = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.host || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            host: { n: 1, br: b.readString, bw: v.writeString },
            path: { n: 2, br: b.readString, bw: v.writeString },
            is_upload: { n: 3, br: b.readBool, bw: v.writeBool },
            success: { n: 4, br: b.readBool, bw: v.writeBool },
            http_status_code: { n: 5, br: b.readUint32, bw: v.writeUint32 },
            bytes_expected: {
              n: 6,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            bytes_actual: {
              n: 7,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            duration_ms: { n: 8, br: b.readUint32, bw: v.writeUint32 },
            cellid: { n: 9, br: b.readUint32, bw: v.writeUint32 },
            proxied: { n: 10, br: b.readBool, bw: v.writeBool },
            ipv6_local: { n: 11, br: b.readBool, bw: v.writeBool },
            ipv6_remote: { n: 12, br: b.readBool, bw: v.writeBool },
            time_to_connect_ms: { n: 13, br: b.readUint32, bw: v.writeUint32 },
            time_to_send_req_ms: { n: 14, br: b.readUint32, bw: v.writeUint32 },
            time_to_first_byte_ms: {
              n: 15,
              br: b.readUint32,
              bw: v.writeUint32,
            },
            time_to_last_byte_ms: {
              n: 16,
              br: b.readUint32,
              bw: v.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ExternalStorageTransferReport_Notification`;
    }
  },
  gt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            client_id: {
              n: 2,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            machine_name: { n: 3, br: b.readString, bw: v.writeString },
            ignore_pending_operations: {
              n: 4,
              br: b.readBool,
              bw: v.writeBool,
            },
            os_type: { n: 5, br: b.readInt32, bw: v.writeInt32 },
            device_type: { n: 6, br: b.readInt32, bw: v.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppLaunchIntent_Request`;
    }
  },
  _t = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pending_remote_operations || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pending_remote_operations: { n: 1, c: Xe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppLaunchIntent_Response`;
    }
  },
  vt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            client_id: {
              n: 2,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            uploads_completed: { n: 3, br: b.readBool, bw: v.writeBool },
            uploads_required: { n: 4, br: b.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppExitSyncDone_Notification`;
    }
  },
  yt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: b.readUint32, bw: v.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientGetAppQuotaUsage_Request`;
    }
  },
  bt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.existing_files || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            existing_files: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            existing_bytes: {
              n: 2,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            max_num_files: { n: 3, br: b.readUint32, bw: v.writeUint32 },
            max_num_bytes: {
              n: 4,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientGetAppQuotaUsage_Response`;
    }
  },
  xt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_name || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            file_name: { n: 1, br: b.readString, bw: v.writeString },
            sha_file: { n: 2, br: b.readBytes, bw: v.writeBytes },
            time_stamp: {
              n: 3,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            raw_file_size: { n: 4, br: b.readUint32, bw: v.writeUint32 },
            persist_state: { n: 5, br: b.readEnum, bw: v.writeEnum },
            platforms_to_sync: { n: 6, br: b.readUint32, bw: v.writeUint32 },
            path_prefix_index: { n: 7, br: b.readUint32, bw: v.writeUint32 },
            machine_name_index: { n: 8, br: b.readUint32, bw: v.writeUint32 },
            reupload_requested: { n: 9, br: b.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppFileInfo`;
    }
  },
  St = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            synced_change_number: {
              n: 2,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetAppFileChangelist_Request`;
    }
  },
  Ct = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.current_change_number || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [2, 4, 5], null));
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
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            files: { n: 2, c: xt, r: !0, q: !0 },
            is_only_delta: { n: 3, br: b.readBool, bw: v.writeBool },
            path_prefixes: {
              n: 4,
              r: !0,
              q: !0,
              br: b.readString,
              bw: v.writeRepeatedString,
            },
            machine_names: {
              n: 5,
              r: !0,
              q: !0,
              br: b.readString,
              bw: v.writeRepeatedString,
            },
            app_buildid_hwm: {
              n: 6,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetAppFileChangelist_Response`;
    }
  },
  wt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url_host || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            url_host: { n: 1, br: b.readString, bw: v.writeString },
            url_path: { n: 2, br: b.readString, bw: v.writeString },
            use_https: { n: 3, br: b.readBool, bw: v.writeBool },
            http_method: { n: 4, br: b.readInt32, bw: v.writeInt32 },
            request_headers: { n: 5, c: Tt, r: !0, q: !0 },
            block_offset: {
              n: 6,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            block_length: { n: 7, br: b.readUint32, bw: v.writeUint32 },
            explicit_body_data: { n: 8, br: b.readBytes, bw: v.writeBytes },
            may_parallelize: { n: 9, br: b.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ClientCloudFileUploadBlockDetails`;
    }
  },
  Tt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: b.readString, bw: v.writeString },
            value: { n: 2, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ClientCloudFileUploadBlockDetails_HTTPHeaders`;
    }
  },
  Et = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            machine_name: { n: 2, br: b.readString, bw: v.writeString },
            files_to_upload: {
              n: 3,
              r: !0,
              q: !0,
              br: b.readString,
              bw: v.writeRepeatedString,
            },
            files_to_delete: {
              n: 4,
              r: !0,
              q: !0,
              br: b.readString,
              bw: v.writeRepeatedString,
            },
            client_id: {
              n: 5,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            app_build_id: {
              n: 6,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginAppUploadBatch_Request`;
    }
  },
  Dt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.batch_id || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            batch_id: { n: 1, br: b.readUint64String, bw: v.writeUint64String },
            app_change_number: {
              n: 4,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginAppUploadBatch_Response`;
    }
  },
  Ot = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            batch_id: { n: 2, br: b.readUint64String, bw: v.writeUint64String },
            batch_eresult: { n: 3, br: b.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Notification`;
    }
  },
  kt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            batch_id: { n: 2, br: b.readUint64String, bw: v.writeUint64String },
            batch_eresult: { n: 3, br: b.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Request`;
    }
  },
  At = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Response`;
    }
  },
  jt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            app_change_number: {
              n: 2,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppCloudStateChange_Notification`;
    }
  },
  Mt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            file_size: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            raw_file_size: { n: 3, br: b.readUint32, bw: v.writeUint32 },
            file_sha: { n: 4, br: b.readBytes, bw: v.writeBytes },
            time_stamp: {
              n: 5,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            filename: { n: 6, br: b.readString, bw: v.writeString },
            platforms_to_sync: {
              n: 7,
              d: 4294967295,
              br: b.readUint32,
              bw: v.writeUint32,
            },
            cell_id: { n: 9, br: b.readUint32, bw: v.writeUint32 },
            can_encrypt: { n: 10, br: b.readBool, bw: v.writeBool },
            is_shared_file: { n: 11, br: b.readBool, bw: v.writeBool },
            deprecated_realm: { n: 12, br: b.readUint32, bw: v.writeUint32 },
            upload_batch_id: {
              n: 13,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientBeginFileUpload_Request`;
    }
  },
  Nt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.encrypt_file || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            encrypt_file: { n: 1, br: b.readBool, bw: v.writeBool },
            block_requests: { n: 2, c: wt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientBeginFileUpload_Response`;
    }
  },
  Pt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: b.readBool, bw: v.writeBool },
            appid: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            file_sha: { n: 3, br: b.readBytes, bw: v.writeBytes },
            filename: { n: 4, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientCommitFileUpload_Request`;
    }
  },
  Ft = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: b.readBool, bw: v.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientCommitFileUpload_Response`;
    }
  },
  It = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            filename: { n: 2, br: b.readString, bw: v.writeString },
            realm: { n: 3, br: b.readUint32, bw: v.writeUint32 },
            force_proxy: { n: 4, br: b.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Request`;
    }
  },
  Lt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, [10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            file_size: { n: 2, br: b.readUint32, bw: v.writeUint32 },
            raw_file_size: { n: 3, br: b.readUint32, bw: v.writeUint32 },
            sha_file: { n: 4, br: b.readBytes, bw: v.writeBytes },
            time_stamp: {
              n: 5,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            is_explicit_delete: { n: 6, br: b.readBool, bw: v.writeBool },
            url_host: { n: 7, br: b.readString, bw: v.writeString },
            url_path: { n: 8, br: b.readString, bw: v.writeString },
            use_https: { n: 9, br: b.readBool, bw: v.writeBool },
            request_headers: { n: 10, c: Rt, r: !0, q: !0 },
            encrypted: { n: 11, br: b.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Response`;
    }
  },
  Rt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: b.readString, bw: v.writeString },
            value: { n: 2, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Response_HTTPHeaders`;
    }
  },
  zt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            filename: { n: 2, br: b.readString, bw: v.writeString },
            is_explicit_delete: { n: 3, br: b.readBool, bw: v.writeBool },
            upload_batch_id: {
              n: 4,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientDeleteFile_Request`;
    }
  },
  Bt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientDeleteFile_Response`;
    }
  },
  Vt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            chose_local_files: { n: 2, br: b.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientConflictResolution_Notification`;
    }
  },
  Ht = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            client_id: {
              n: 2,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            machine_name: { n: 3, br: b.readString, bw: v.writeString },
            cloud_sync_completed: { n: 4, br: b.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionSuspend_Request`;
    }
  },
  Ut = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionSuspend_Response`;
    }
  },
  Wt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            client_id: {
              n: 2,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionResume_Request`;
    }
  },
  Gt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionResume_Response`;
    }
  },
  Kt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadCheck_Notification`;
    }
  },
  qt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.request_id || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadRequest_Notification`;
    }
  },
  Jt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
            request_id: {
              n: 2,
              br: b.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadComplete_Notification`;
    }
  },
  Yt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: b.readUint32, bw: v.writeUint32 },
            file_name: { n: 2, br: b.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ShareFile_Request`;
    }
  },
  Xt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.hcontent || C(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: v.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ShareFile_Response`;
    }
  },
  W;
(function (e) {
  function t(e, t) {
    return e.SendNotification(`Cloud.ClientLogUploadCheck#1`, M(Kt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientLogUploadCheck = t;
  function n(e, t) {
    return e.SendNotification(`Cloud.ClientLogUploadComplete#1`, M(Jt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientLogUploadComplete = n;
  function r(e, t, n) {
    return e.SendMsg(`Cloud.BeginHTTPUpload#1`, M(V, t, n), Ze, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.BeginHTTPUpload = r;
  function i(e, t, n) {
    return e.SendMsg(`Cloud.CommitHTTPUpload#1`, M(H, t, n), $e, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.CommitHTTPUpload = i;
  function a(e, t, n) {
    return e.SendMsg(`Cloud.BeginUGCUpload#1`, M(et, t, n), tt, {
      ePrivilege: 1,
    });
  }
  e.BeginUGCUpload = a;
  function o(e, t, n) {
    return e.SendMsg(`Cloud.CommitUGCUpload#1`, M(rt, t, n), it, {
      ePrivilege: 1,
    });
  }
  e.CommitUGCUpload = o;
  function s(e, t, n) {
    return e.SendMsg(`Cloud.GetFileDetails#1`, M(U, t, n), at, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetFileDetails = s;
  function c(e, t, n) {
    return e.SendMsg(`Cloud.GetSingleFileInfo#1`, M(ot, t, n), st, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetSingleFileInfo = c;
  function l(e, t, n) {
    return e.SendMsg(`Cloud.ShareFile#1`, M(Yt, t, n), Xt, { ePrivilege: 1 });
  }
  e.ShareFile = l;
  function u(e, t, n) {
    return e.SendMsg(`Cloud.EnumerateUserFiles#1`, M(ct, t, n), lt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnumerateUserFiles = u;
  function d(e, t, n) {
    return e.SendMsg(`Cloud.Delete#1`, M(ut, t, n), dt, { ePrivilege: 1 });
  }
  e.Delete = d;
  function f(e, t, n) {
    return e.SendMsg(`Cloud.GetClientEncryptionKey#1`, M(ft, t, n), pt, {
      ePrivilege: 1,
    });
  }
  e.GetClientEncryptionKey = f;
  function p(e, t) {
    return e.SendNotification(`Cloud.CDNReport#1`, M(mt, t), { ePrivilege: 1 });
  }
  e.CDNReport = p;
  function m(e, t) {
    return e.SendNotification(
      `Cloud.ExternalStorageTransferReport#1`,
      M(ht, t),
      { ePrivilege: 1 },
    );
  }
  e.ExternalStorageTransferReport = m;
  function h(e, t, n) {
    return e.SendMsg(`Cloud.BeginAppUploadBatch#1`, M(Et, t, n), Dt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.BeginAppUploadBatch = h;
  function g(e, t) {
    return e.SendNotification(`Cloud.CompleteAppUploadBatch#1`, M(Ot, t), {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.CompleteAppUploadBatch = g;
  function ee(e, t, n) {
    return e.SendMsg(
      `Cloud.CompleteAppUploadBatchBlocking#1`,
      M(kt, t, n),
      At,
      { ePrivilege: 1 },
    );
  }
  e.CompleteAppUploadBatchBlocking = ee;
  function te(e, t, n) {
    return e.SendMsg(`Cloud.ClientBeginFileUpload#1`, M(Mt, t, n), Nt, {
      ePrivilege: 1,
    });
  }
  e.ClientBeginFileUpload = te;
  function _(e, t, n) {
    return e.SendMsg(`Cloud.ClientCommitFileUpload#1`, M(Pt, t, n), Ft, {
      ePrivilege: 1,
    });
  }
  e.ClientCommitFileUpload = _;
  function v(e, t, n) {
    return e.SendMsg(`Cloud.ClientFileDownload#1`, M(It, t, n), Lt, {
      ePrivilege: 1,
    });
  }
  e.ClientFileDownload = v;
  function ne(e, t, n) {
    return e.SendMsg(`Cloud.ClientDeleteFile#1`, M(zt, t, n), Bt, {
      ePrivilege: 1,
    });
  }
  e.ClientDeleteFile = ne;
  function y(e, t) {
    return e.SendNotification(`Cloud.ClientConflictResolution#1`, M(Vt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientConflictResolution = y;
  function b(e, t, n) {
    return e.SendMsg(`Cloud.GetAppFileChangelist#1`, M(St, t, n), Ct, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetAppFileChangelist = b;
  function x(e, t, n) {
    return e.SendMsg(`Cloud.SuspendAppSession#1`, M(Ht, t, n), Ut, {
      ePrivilege: 1,
    });
  }
  e.SuspendAppSession = x;
  function re(e, t, n) {
    return e.SendMsg(`Cloud.ResumeAppSession#1`, M(Wt, t, n), Gt, {
      ePrivilege: 1,
    });
  }
  e.ResumeAppSession = re;
  function S(e, t, n) {
    return e.SendMsg(`Cloud.SignalAppLaunchIntent#1`, M(gt, t, n), _t, {
      ePrivilege: 1,
    });
  }
  e.SignalAppLaunchIntent = S;
  function ie(e, t) {
    return e.SendNotification(`Cloud.SignalAppExitSyncDone#1`, M(vt, t), {
      ePrivilege: 1,
    });
  }
  e.SignalAppExitSyncDone = ie;
  function C(e, t, n) {
    return e.SendMsg(`Cloud.ClientGetAppQuotaUsage#1`, M(yt, t, n), bt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.ClientGetAppQuotaUsage = C;
})((W ||= {}));
var Zt;
(function (e) {
  ((e.NotifyAppStateChangeHandler = {
    name: `CloudClient.NotifyAppStateChange#1`,
    request: jt,
  }),
    (e.ClientLogUploadRequestHandler = {
      name: `CloudClient.ClientLogUploadRequest#1`,
      request: qt,
    }));
})((Zt ||= {}));
var Qt = new D(`GameNotesCloudStore`).Debug;
function $t(e) {
  return e.replace(/[!-/:-@ [\\\]^`]/g, `_`);
}
var en = class {
    FilenameForNotes(e) {
      return `appid` in e
        ? `notes_${Number(e.appid)}`
        : `notes_shortcut_${$t(e.shortcut)}`;
    }
    DirectoryForNoteImages(e) {
      return `appid` in e
        ? `notes_${Number(e.appid)}_images/`
        : `notes_shortcut_${$t(e.shortcut)}_images/`;
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
        Qt(`SaveGameNotes`, n),
        await this.WriteNotesFile(this.FilenameForNotes(e), r)
      );
    }
  },
  tn = new D(`GameNotesCloudStore`).Debug,
  nn = class extends en {
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
      let n = `${e}${await se(await t.arrayBuffer(), `SHA-1`)}.${g(t)}`;
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
      let n = A.Init(U);
      (n.Body().set_appid(k), n.Body().set_ugcid(t.ugcid));
      let r = await W.GetFileDetails(
        this.m_props.steamInterface.GetServiceTransport(),
        n,
      );
      if (!r.BSuccess() || !r.Body().details(!1))
        throw `Error loading cloud file detail: ${r.GetErrorMessage()}`;
      let i = r.Body().details();
      return (
        xe(i.filename() == e, `Asked for ${e} but got ${i.filename()}`),
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
        tn(`EnumerateUserFiles for ${k}, starting at ${e}`);
        let r = A.Init(ct);
        (r.Body().set_appid(k),
          r.Body().set_extended_details(!0),
          r.Body().set_start_index(e));
        let i = await W.EnumerateUserFiles(
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
          tn(
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
function rn(e) {
  return { appid: e };
}
function an(e) {
  return { shortcut: on(e) };
}
function on(e) {
  return e.trim();
}
function sn(e) {
  return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
}
var G = f(),
  K = L.createContext({ mode: `page`, store: null });
function cn(e) {
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
    l = L.useMemo(
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
  return (0, G.jsx)(K.Provider, { value: l, children: c });
}
function ln() {
  return L.useContext(K).mode == `single`;
}
function q() {
  return L.useContext(K).closePopup;
}
function J() {
  return L.useContext(K).store;
}
function un() {
  return L.useContext(K).bPinnedView;
}
function dn() {
  return L.useContext(K).onClickURL;
}
function fn() {
  return L.useContext(K).bSpellcheckEnabled ?? !0;
}
function pn() {
  return L.useContext(K).setSpellcheckEnabled;
}
var mn = new D(`GameNotesCloudStore`).Debug;
function hn() {
  let e = J();
  return o({
    queryKey: [`GameNotes`, `GamesWithNotes`],
    queryFn: () => e.GetGamesWithNotes(),
    staleTime: 6e5,
  });
}
function Y(e) {
  return `appid` in e
    ? [`GameNotes`, `NotesByAppID`, e.appid]
    : [`GameNotes`, `NotesForShortcut`, on(e.shortcut)];
}
function X(e, t) {
  return {
    queryKey: Y(t),
    queryFn: async () => (await e.GetGameNotesList(t)) || [],
    staleTime: 18e4,
    refetchInterval: 9e5,
    enabled: !!t,
    structuralSharing: !0,
  };
}
function gn(e) {
  let t = J();
  return o(X(t, e));
}
function _n(e, t) {
  let n = u(),
    r = J(),
    a = sn(e);
  return i({
    scope: { id: `${`appid` in e ? e.appid : e.shortcut_name}_${e.id}` },
    mutationFn: async (t) => {
      let { title: i, bbcode: o } = t;
      mn(`Saving note ${i}`);
      let s = await n.fetchQuery(X(r, a));
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
      return (bn(n, a, (e) => e.map((e) => (e.id == r.id ? r : e))), r);
    },
    onSuccess(e, t, r) {
      n.setQueryData(Y(a), e);
    },
    onError(e) {
      t(e.message || e.name);
    },
  });
}
function vn(e) {
  let t = u(),
    n = J();
  return L.useCallback(() => {
    let r = j(`#UserGameNotes_UntitledNote_Title`),
      i = n.NewNote(e, r);
    return (bn(t, e, (e) => [...e, i]), i.id);
  }, [t, n, e]);
}
function yn(e, t) {
  let n = u(),
    r = J(),
    a = sn(e);
  return i({
    mutationFn: async () => {
      if (e.not_persisted) return;
      let t = await n.fetchQuery(X(r, a));
      if (!t) throw `Failed to load notes for ${JSON.stringify(a)}`;
      let i = t.filter((t) => t.id != e.id);
      return (await r.SaveGameNotes(a, i), i);
    },
    onSuccess: (e) => {
      (e && n.setQueryData(Y(a), e), t && t());
    },
  });
}
function bn(e, t, n) {
  e.setQueryData(Y(t), (e) => e && n(e));
}
function xn(e, t) {
  return L.useMemo(() => (t ? an(t) : rn(e)), [e, t]);
}
var Sn = F.nodes.image,
  Cn = {
    nodes: {
      ...F.nodes,
      cloudimage: {
        ...Sn,
        parseDOM: [],
        bbCode: { ...Sn.bbCode, tag: `cloudimg` },
      },
    },
    marks: { ...F.marks },
  },
  Z = new We(Cn),
  wn = e(t());
function Tn(e) {
  let {
      schema: t,
      view: n,
      refUpdateToolbar: r,
      className: i,
      bSpellcheckEnabled: a = !1,
      setSpellcheckEnabled: o,
    } = e,
    [s, c] = De(`FormattingToolbar_Expanded`, !1);
  return (0, G.jsx)(Ae, {
    refUpdateToolbar: r,
    view: n,
    children: (0, G.jsxs)(`div`, {
      className: E(void 0, i),
      children: [
        (0, G.jsxs)(Ge, {
          children: [
            (0, G.jsx)(Ne, {}),
            (0, G.jsx)(I, {}),
            (0, G.jsx)(Be, { schema: t }),
            (0, G.jsx)(Ie, {}),
            (0, G.jsx)(Fe, {
              onClick: () => c(!s),
              tooltip: j(`#FormattingToolbar_ExpandOptions`),
              children: (0, G.jsx)(pe, { direction: s ? `up` : `down` }),
            }),
          ],
        }),
        (0, G.jsx)(ee, {
          visible: s,
          children: (0, G.jsxs)(Ge, {
            children: [
              (0, G.jsx)(Ve, { schema: t }),
              (0, G.jsx)(He, { schema: t, levels: 5 }),
              (0, G.jsx)(Pe, {
                nodeType: t.nodes.code_block,
                tooltip: j(`#FormattingToolbar_CodeBlock`),
                children: (0, G.jsx)(ve, {}),
              }),
              (0, G.jsx)(I, {}),
              (0, G.jsx)(je, { schema: t }),
              (0, G.jsx)(I, {}),
              (0, G.jsx)(Le, { schema: t }),
              (0, G.jsx)(Ie, {}),
              o &&
                (0, G.jsx)(Ue, {
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
var Q = `-XvFTdkdiiE-`,
  En = `aJA9DmU-q6Q-`,
  Dn = `OEdv4TCAhEw-`,
  On = `Zb5eJWEsiSs-`,
  kn = `kkukKS4eyUo-`,
  An = `bWixMx68CWM-`,
  jn = `_5QrKjkgDQ0Y-`;
function Mn(e) {
  let { deleteNote: t, hidden: n, pmState: r } = e,
    [i, a] = L.useState(null),
    o = L.useRef(void 0),
    s = fn(),
    c = pn(),
    l = O(),
    u = {
      onSecondaryButton: () => t(),
      onSecondaryActionDescription: j(`#UserGameNotes_DeleteNote`),
      onDragOver: (e) => e.stopPropagation(),
    };
  return (
    L.useEffect(() => {
      i &&
        !n &&
        (fe.IN_CLIENT || !window.matchMedia(`(max-width: 500px)`).matches) &&
        i.focus();
    }, [i, n]),
    (0, G.jsxs)(G.Fragment, {
      children: [
        !l &&
          (0, G.jsx)(Tn, {
            schema: Z.pm_schema,
            view: i,
            refUpdateToolbar: o,
            className: `_3NCAPa1mmWE-`,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: c,
          }),
        (0, G.jsx)(ze, {
          pmState: r,
          className: kn,
          refOnUpdate: o,
          refView: a,
          bSpellcheckEnabled: s,
          panelProps: u,
          children: (0, G.jsx)(Nn, { schema: Z.pm_schema }),
        }),
      ],
    })
  );
}
var Nn = L.memo(function (e) {
  let { schema: t } = e,
    n = dn(),
    r = L.useMemo(
      () => [
        {
          type: t.nodes.cloudimage,
          component: Pn,
          readProps: (e) => ({ src: e.attrs.src }),
        },
      ],
      [t.nodes.cloudimage],
    );
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(Ke, { nodeType: t.nodes.image }),
      (0, G.jsx)(qe, { linkMarkType: t.marks.link, schema: t, onClickURL: n }),
      (0, G.jsx)(Re, { specs: r }),
    ],
  });
});
function Pn(e) {
  let { src: t, selected: n } = e,
    [r, i] = L.useState(),
    a = J();
  return (
    L.useEffect(() => {
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
      ? (0, G.jsx)(`img`, {
          className: (0, wn.default)(te, n && `ProseMirror-selectednode`),
          src: r,
        })
      : null
  );
}
var Fn = 10;
function In(e) {
  let { note: t, hidden: n = !1 } = e,
    [r, i] = L.useState(void 0),
    a = L.useRef(!1),
    o = O(),
    { mutate: s } = _n(t, i),
    [c, l] = L.useState();
  L.useEffect(() => {
    if (!a.current) {
      let e = new Oe(Z, t.content, (e, t) => s({ title: Hn(t), bbcode: e }));
      (Un(e, Z.pm_schema), l(e));
    }
  }, [s, t.content]);
  let { bDirty: u } = ke(c, { msAutosaveTimeout: Fn * 1e3 });
  (L.useEffect(() => {
    u &&
      !a.current &&
      ((a.current = !0), Je.ReportTrackedAction(`/GameNotes/NoteModified`));
  }, [u]),
    L.useEffect(() => {
      n && c && c.CommitChanges();
    }, [n, c]));
  let d = re().ownerWindow;
  (ne(
    d.document,
    L.useCallback(
      (e) => {
        e == `hidden` && c && c.CommitChanges();
      },
      [c],
    ),
  ),
    _e(
      window,
      `beforeunload`,
      L.useCallback(
        (e) => {
          !N.IN_STEAMUI &&
            c.BHasUncomittedChanges() &&
            (c.CommitChanges(), e.preventDefault());
        },
        [c],
      ),
    ));
  let f = Ln(t.appid, Z.pm_schema),
    p = yn(t, q());
  return (0, G.jsx)(Me, {
    ProcessFileUpload: f,
    bAllowImageHotLinking: !0,
    children: (0, G.jsxs)(`div`, {
      className: On,
      children: [
        (0, G.jsx)(Rn, { error: r, dismissError: () => i(void 0) }),
        (0, G.jsx)(Mn, { deleteNote: p.mutate, hidden: n, pmState: c }),
        !o && (0, G.jsx)(zn, { note: t, bDirty: u }),
      ],
    }),
  });
}
function Ln(e, t) {
  let n = J();
  return L.useCallback(
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
    ? (0, G.jsx)(ce, {
        active: !0,
        children: (0, G.jsx)(x, {
          bAlertDialog: !0,
          strTitle: j(`#Error_Generic`),
          strDescription: j(`#UserGameNotes_ErrorSavingNotes`, t),
          closeModal: n,
        }),
      })
    : null;
}
function zn(e) {
  let { note: t, bDirty: n } = e,
    [r, i, a] = me(!1),
    o = ln(),
    { mutate: s, isPending: c } = yn(t, q()),
    l = L.useCallback(() => {
      !n && t.not_persisted ? s() : i();
    }, [n, t, s, i]);
  return (0, G.jsxs)(`div`, {
    className: Dn,
    children: [
      r &&
        (0, G.jsx)(Vn, {
          note: t,
          closeModal: a,
          deleteNote: s,
          deletePending: c,
        }),
      (0, G.jsx)(de, {
        toolTipContent: j(`#UserGameNotes_DeleteNote`),
        direction: `top`,
        children: (0, G.jsx)(_, { onClick: l, children: (0, G.jsx)(ae, {}) }),
      }),
      o && (0, G.jsx)(Bn, { bDirty: n }),
    ],
  });
}
function Bn(e) {
  let { bDirty: t } = e,
    n = q();
  return t
    ? (0, G.jsx)(Ee, {
        onClick: () => n(),
        className: jn,
        children: j(`#Button_SaveAndClose`),
      })
    : (0, G.jsx)(_, {
        onClick: () => n(),
        className: jn,
        children: j(`#Button_Close`),
      });
}
function Vn(e) {
  let { note: t, closeModal: n, deleteNote: r, deletePending: i } = e;
  return (0, G.jsx)(ce, {
    active: !0,
    children: (0, G.jsx)(x, {
      strTitle: j(`#UserGameNotes_DeleteNote`),
      strDescription: j(`#UserGameNotes_PromptDelete`),
      onOK: () => r(),
      bOKDisabled: i,
      strOKButtonText: j(`#Button_Delete`),
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
  return `appinfo_${e}_${N.LANGUAGE}`;
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
          let n = A.Init(oe);
          (n.Body().set_language(we(N.LANGUAGE)), n.Body().set_appids(i));
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
  let t = Te(),
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
    i = xn(
      `appid` in r.params && Number(r.params.appid),
      `shortcut_name` in r.params && r.params.shortcut_name,
    ),
    a = $(),
    o = vn(i),
    s = L.useRef(void 0),
    { data: c } = gn(i),
    l,
    u = !1;
  if (c) {
    let e = r.params.noteid || s.current;
    (e && ((l = c.find((t) => t.id === e)), !l && r.params.noteid && (u = !0)),
      (l ||= c[0]));
  }
  (l && (s.current = l.id),
    L.useEffect(() => {
      c && c.length == 0 && a(i, o(), !0);
    }, [a, i, c, o]),
    L.useEffect(() => {
      u && a(i, void 0, !0);
    }, [a, i, u]));
  let d = (0, G.jsx)(de, {
    toolTipContent: j(`#UserGameNotes_NewNote`),
    direction: `top`,
    children: (0, G.jsx)(_, {
      className: An,
      onClick: () => {
        let e = o();
        a(i, e);
      },
      children: (0, G.jsx)(ue, {}),
    }),
  });
  return c
    ? (0, G.jsx)(Qn, {
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
    [s, c] = De(`NotesListCollapsed`, !1),
    l = un(),
    u = O(),
    d = n(),
    f = le(d.params.noteid || l ? `ActivePage` : `PageList`),
    p = r.map((e) => ({
      title: e.title?.length ? e.title : j(`#UserGameNotes_Untitled`),
      identifier: e.id,
      content: (0, G.jsx)(er, { noteParent: t, note: e }),
      pageClassName: En,
      hideTitle: !0,
    })),
    m = $(),
    h = L.useCallback((e) => m(t, e), [m, t]),
    g = N.IN_STEAMUI
      ? j(`#UserGameNotes_NotesList`)
      : (0, G.jsx)($n, { noteParent: t });
  return u && o
    ? (0, G.jsx)(Ce, {
        title: g,
        pages: p,
        className: E(Q, l && `RhdVkvwKgIg-`, f),
        page: i,
        onPageRequested: h,
        bottomControls: a,
        hideList: s,
        toggleHideList: l || u ? void 0 : () => c(!s),
      })
    : (0, G.jsx)(ye, {
        title: g,
        pages: p,
        className: E(Q, l && `RhdVkvwKgIg-`, f),
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
    (0, G.jsx)(G.Fragment, { children: j(`#UserGameNotes_NotesForGame`, r) })
  );
}
function er(e) {
  let { noteParent: t, note: n } = e,
    r = he(),
    i = $(),
    a = L.useCallback(() => i(t), [i, t]),
    o = un();
  return (0, G.jsxs)(G.Fragment, {
    children: [
      !o && (0, G.jsx)(be, { onActivate: a }),
      (0, G.jsx)(In, { note: n, hidden: !r }),
    ],
  });
}
function $(e = !1) {
  let t = O(),
    n = p(),
    r = e || t;
  return L.useCallback(
    (e, t, i = r) => {
      let a;
      ((a =
        `appid` in e ? R.AppNotes(e.appid, t) : R.ShortcutNotes(e.shortcut, t)),
        i ? n.replace(a, n.location.state) : n.push(a, n.location.state));
    },
    [n, r],
  );
}
function tr() {
  let { data: e, isLoading: t } = hn(),
    n = L.useMemo(
      () => e?.slice().sort((e, t) => t.last_modified - e.last_modified),
      [e],
    );
  return t
    ? (0, G.jsx)(h, { msDelayAppear: 300 })
    : (0, G.jsxs)(`div`, {
        children: [
          (0, G.jsx)(`h1`, { children: j(`#UserGameNotes_NotesList`) }),
          (0, G.jsx)(`ul`, {
            children: n.map((e) =>
              (0, G.jsx)(nr, { game: e }, e.appid || e.shortcut_name),
            ),
          }),
        ],
      });
}
function nr(e) {
  let { game: t } = e;
  return (0, G.jsx)(`li`, {
    children: (0, G.jsx)(l, {
      to: Ye(t.appid ? { appid: t.appid } : { shortcut: t.shortcut_name }),
      children: t.appid ? (0, G.jsx)(rr, { appid: t.appid }) : t.shortcut_name,
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
    o = Te();
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
  let r = A.Init(Et);
  (r.Body().set_appid(t.unAppID),
    r.Body().set_machine_name(t.strMachineName),
    r.Body().set_files_to_upload(n.slice()));
  let i = await W.BeginAppUploadBatch(e, r);
  if (!i.BSuccess())
    throw `Error in BeginAppUploadBatch: ${i.GetErrorMessage()}`;
  return i.Body().batch_id();
}
function sr(e, t, n, r) {
  let i = A.Init(kt);
  (i.Body().set_appid(t.unAppID),
    i.Body().set_batch_id(n),
    i.Body().set_batch_eresult(r ? 1 : 2),
    W.CompleteAppUploadBatch(e, i));
}
async function cr(e, t, n, r) {
  let i, a;
  ((i =
    r.content instanceof File
      ? await r.content.arrayBuffer()
      : new TextEncoder().encode(r.content).buffer),
    (a = await se(i, `SHA-1`)));
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
  let o = A.Init(V);
  (o.Body().set_appid(t.unAppID),
    o.Body().add_platforms_to_sync(`All`),
    o.Body().set_upload_batch_id(n),
    o.Body().set_is_public(t.bIsPublic),
    o.Body().set_filename(r),
    o.Body().set_file_size(i),
    o.Body().set_file_sha(a));
  let s = await W.BeginHTTPUpload(e, o);
  if (!s.BSuccess()) throw `Error in BeginHTTPUpload: ${s.GetErrorMessage()}`;
  return s.Body().toObject();
}
async function ur(e, t, n, r, i) {
  let a = A.Init(H);
  (a.Body().set_appid(t.unAppID),
    a.Body().set_transfer_succeeded(i),
    a.Body().set_filename(n),
    a.Body().set_file_sha(r));
  let o = await W.CommitHTTPUpload(e, a);
  if (!o.BSuccess()) throw `Error in CommitHTTPUpload: ${o.GetErrorMessage()}`;
  return o.Body().file_committed();
}
function dr(e) {
  let t = fr();
  return (0, G.jsx)(cn, {
    mode: `page`,
    store: t,
    children: (0, G.jsxs)(s, {
      children: [
        (0, G.jsx)(m, { path: R.List(), children: (0, G.jsx)(tr, {}) }),
        (0, G.jsx)(m, {
          path: R.AppNotes(`:appid`, `:noteid?`),
          children: (0, G.jsx)(Zn, {}),
        }),
        (0, G.jsx)(m, { children: (0, G.jsx)(d, { to: `${R.List()}` }) }),
      ],
    }),
  });
}
function fr() {
  let e = Se(),
    { mutateAsync: t } = ir(k, `Steam Community Web Interface`, {
      bIsPublic: !0,
    }),
    n = L.useCallback(
      (e, n) => t({ files: [{ filename: e, content: n }] }),
      [t],
    ),
    r = L.useRef({ steamInterface: e, uploadFile: n });
  r.current.uploadFile = n;
  let [i] = L.useState(() => new nn(r.current));
  return i;
}
export { dr as default };
