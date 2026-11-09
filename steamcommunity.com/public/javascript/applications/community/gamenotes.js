/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  Ct as t,
  D as n,
  Ft as r,
  G as i,
  K as a,
  Pt as o,
  St as s,
  Tt as c,
  W as l,
  _t as u,
  at as d,
  bt as f,
  ot as p,
  xt as m,
} from "./libraries.js";
import { t as h } from "./throbber.js";
import { t as g } from "./filehandling.js";
import { t as ee } from "./expandonappear.js";
import { x as te } from "./bbcodes.module.js";
import {
  $i as ne,
  $m as _,
  Ah as v,
  Cd as re,
  Dh as y,
  Eh as b,
  Fh as x,
  Hs as ie,
  Ls as S,
  Mh as C,
  N as ae,
  Oh as w,
  Qi as oe,
  Qm as T,
  T as se,
  Th as E,
  Uf as D,
  Ui as ce,
  Vi as le,
  Wu as O,
  Xp as ue,
  Yh as de,
  Yo as k,
  Yp as fe,
  Zd as A,
  Zm as j,
  ao as pe,
  bd as me,
  dm as M,
  ea as he,
  em as ge,
  go as _e,
  gs as ve,
  jh as N,
  kh as P,
  na as ye,
  os as be,
  qm as xe,
  qp as Se,
  sa as Ce,
  ta as we,
  ud as Te,
  wo as Ee,
  xu as F,
} from "./main.js";
import {
  D as I,
  E as De,
  T as Oe,
  _ as ke,
  a as Ae,
  b as je,
  c as Me,
  f as Ne,
  g as Pe,
  h as Fe,
  i as Ie,
  j as Le,
  l as Re,
  m as L,
  n as ze,
  o as Be,
  r as Ve,
  s as He,
  t as Ue,
  v as We,
  x as Ge,
} from "./pmbbcodeschema.js";
import { t as Ke } from "./linkplugin.js";
import { t as qe } from "./reactusagereportingstore.js";
var R = e(o()),
  z = {
    List: () => `/notes/list`,
    AppNotes: (e, t) => `/notes/app/${e}/${t ?? ``}`,
    ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${t ?? ``}`,
  };
function Je(e, t) {
  return `appid` in e ? z.AppNotes(e.appid, t) : z.ShortcutNotes(e.shortcut, t);
}
var B = e(r(), 1),
  Ye = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.operation || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            operation: { n: 1, br: w.readEnum, bw: C.writeEnum },
            machine_name: { n: 2, br: w.readString, bw: C.writeString },
            client_id: {
              n: 3,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            time_last_updated: { n: 4, br: w.readUint32, bw: C.writeUint32 },
            os_type: { n: 5, br: w.readInt32, bw: C.writeInt32 },
            device_type: { n: 6, br: w.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_PendingRemoteOperation`;
    }
  },
  V = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            ugcid: { n: 2, br: w.readUint64String, bw: C.writeUint64String },
            filename: { n: 3, br: w.readString, bw: C.writeString },
            timestamp: {
              n: 4,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            file_size: { n: 5, br: w.readUint32, bw: C.writeUint32 },
            url: { n: 6, br: w.readString, bw: C.writeString },
            steamid_creator: {
              n: 7,
              br: w.readFixed64String,
              bw: C.writeFixed64String,
            },
            flags: { n: 8, br: w.readUint32, bw: C.writeUint32 },
            platforms_to_sync: {
              n: 9,
              r: !0,
              q: !0,
              br: w.readString,
              bw: C.writeRepeatedString,
            },
            file_sha: { n: 10, br: w.readString, bw: C.writeString },
            compressed_file_size: {
              n: 11,
              br: w.readUint32,
              bw: C.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_UserFile`;
    }
  },
  H = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [6, 7, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            file_size: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            filename: { n: 3, br: w.readString, bw: C.writeString },
            file_sha: { n: 4, br: w.readString, bw: C.writeString },
            is_public: { n: 5, br: w.readBool, bw: C.writeBool },
            platforms_to_sync: {
              n: 6,
              r: !0,
              q: !0,
              br: w.readString,
              bw: C.writeRepeatedString,
            },
            request_headers_names: {
              n: 7,
              r: !0,
              q: !0,
              br: w.readString,
              bw: C.writeRepeatedString,
            },
            request_headers_values: {
              n: 8,
              r: !0,
              q: !0,
              br: w.readString,
              bw: C.writeRepeatedString,
            },
            upload_batch_id: {
              n: 9,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Request`;
    }
  },
  Xe = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ugcid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ugcid: { n: 1, br: w.readFixed64String, bw: C.writeFixed64String },
            timestamp: { n: 2, br: w.readFixed32, bw: C.writeFixed32 },
            url_host: { n: 3, br: w.readString, bw: C.writeString },
            url_path: { n: 4, br: w.readString, bw: C.writeString },
            use_https: { n: 5, br: w.readBool, bw: C.writeBool },
            request_headers: { n: 6, c: Ze, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Response`;
    }
  },
  Ze = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: C.writeString },
            value: { n: 2, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginHTTPUpload_Response_HTTPHeaders`;
    }
  },
  U = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: w.readBool, bw: C.writeBool },
            appid: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            file_sha: { n: 3, br: w.readString, bw: C.writeString },
            filename: { n: 4, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitHTTPUpload_Request`;
    }
  },
  Qe = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: w.readBool, bw: C.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitHTTPUpload_Response`;
    }
  },
  $e = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            file_size: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            filename: { n: 3, br: w.readString, bw: C.writeString },
            file_sha: { n: 4, br: w.readString, bw: C.writeString },
            content_type: { n: 5, br: w.readString, bw: C.writeString },
            is_public: { n: 6, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Request`;
    }
  },
  et = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.storage_system || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            storage_system: { n: 1, br: w.readEnum, bw: C.writeEnum },
            ugcid: { n: 2, br: w.readFixed64String, bw: C.writeFixed64String },
            timestamp: { n: 3, br: w.readFixed32, bw: C.writeFixed32 },
            url_host: { n: 4, br: w.readString, bw: C.writeString },
            url_path: { n: 5, br: w.readString, bw: C.writeString },
            use_https: { n: 6, br: w.readBool, bw: C.writeBool },
            request_headers: { n: 7, c: tt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Response`;
    }
  },
  tt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: C.writeString },
            value: { n: 2, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginUGCUpload_Response_HTTPHeaders`;
    }
  },
  nt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: w.readBool, bw: C.writeBool },
            appid: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            ugcid: { n: 3, br: w.readFixed64String, bw: C.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitUGCUpload_Request`;
    }
  },
  rt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: w.readBool, bw: C.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CommitUGCUpload_Response`;
    }
  },
  it = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ugcid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ugcid: { n: 1, br: w.readUint64String, bw: C.writeUint64String },
            appid: { n: 2, br: w.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetFileDetails_Request`;
    }
  },
  at = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.details || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            details: { n: 1, c: V },
            rangecheck_host: { n: 2, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetFileDetails_Response`;
    }
  },
  ot = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            file_name: { n: 2, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetSingleFileInfo_Request`;
    }
  },
  st = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            file_name: { n: 3, br: w.readString, bw: C.writeString },
            sha_file: { n: 4, br: w.readBytes, bw: C.writeBytes },
            time_stamp: {
              n: 5,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            raw_file_size: { n: 6, br: w.readUint32, bw: C.writeUint32 },
            is_explicit_delete: { n: 7, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetSingleFileInfo_Response`;
    }
  },
  ct = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            extended_details: { n: 2, br: w.readBool, bw: C.writeBool },
            count: { n: 3, br: w.readUint32, bw: C.writeUint32 },
            start_index: { n: 4, br: w.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_EnumerateUserFiles_Request`;
    }
  },
  lt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.files || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            files: { n: 1, c: V, r: !0, q: !0 },
            total_files: { n: 2, br: w.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_EnumerateUserFiles_Response`;
    }
  },
  ut = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filename || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filename: { n: 1, br: w.readString, bw: C.writeString },
            appid: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            upload_batch_id: {
              n: 3,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_Delete_Request`;
    }
  },
  dt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_Delete_Response`;
    }
  },
  ft = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetClientEncryptionKey_Request`;
    }
  },
  pt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.key || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: w.readBytes, bw: C.writeBytes },
            crc: { n: 2, br: w.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetClientEncryptionKey_Response`;
    }
  },
  mt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readFixed64String,
              bw: C.writeFixed64String,
            },
            url: { n: 2, br: w.readString, bw: C.writeString },
            success: { n: 3, br: w.readBool, bw: C.writeBool },
            http_status_code: { n: 4, br: w.readUint32, bw: C.writeUint32 },
            expected_bytes: {
              n: 5,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            received_bytes: {
              n: 6,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            duration: { n: 7, br: w.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CDNReport_Notification`;
    }
  },
  ht = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.host || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            host: { n: 1, br: w.readString, bw: C.writeString },
            path: { n: 2, br: w.readString, bw: C.writeString },
            is_upload: { n: 3, br: w.readBool, bw: C.writeBool },
            success: { n: 4, br: w.readBool, bw: C.writeBool },
            http_status_code: { n: 5, br: w.readUint32, bw: C.writeUint32 },
            bytes_expected: {
              n: 6,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            bytes_actual: {
              n: 7,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            duration_ms: { n: 8, br: w.readUint32, bw: C.writeUint32 },
            cellid: { n: 9, br: w.readUint32, bw: C.writeUint32 },
            proxied: { n: 10, br: w.readBool, bw: C.writeBool },
            ipv6_local: { n: 11, br: w.readBool, bw: C.writeBool },
            ipv6_remote: { n: 12, br: w.readBool, bw: C.writeBool },
            time_to_connect_ms: { n: 13, br: w.readUint32, bw: C.writeUint32 },
            time_to_send_req_ms: { n: 14, br: w.readUint32, bw: C.writeUint32 },
            time_to_first_byte_ms: {
              n: 15,
              br: w.readUint32,
              bw: C.writeUint32,
            },
            time_to_last_byte_ms: {
              n: 16,
              br: w.readUint32,
              bw: C.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ExternalStorageTransferReport_Notification`;
    }
  },
  gt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            client_id: {
              n: 2,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            machine_name: { n: 3, br: w.readString, bw: C.writeString },
            ignore_pending_operations: {
              n: 4,
              br: w.readBool,
              bw: C.writeBool,
            },
            os_type: { n: 5, br: w.readInt32, bw: C.writeInt32 },
            device_type: { n: 6, br: w.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppLaunchIntent_Request`;
    }
  },
  _t = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pending_remote_operations || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pending_remote_operations: { n: 1, c: Ye, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppLaunchIntent_Response`;
    }
  },
  vt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            client_id: {
              n: 2,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            uploads_completed: { n: 3, br: w.readBool, bw: C.writeBool },
            uploads_required: { n: 4, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppExitSyncDone_Notification`;
    }
  },
  yt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: w.readUint32, bw: C.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientGetAppQuotaUsage_Request`;
    }
  },
  bt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.existing_files || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            existing_files: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            existing_bytes: {
              n: 2,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            max_num_files: { n: 3, br: w.readUint32, bw: C.writeUint32 },
            max_num_bytes: {
              n: 4,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientGetAppQuotaUsage_Response`;
    }
  },
  xt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_name || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            file_name: { n: 1, br: w.readString, bw: C.writeString },
            sha_file: { n: 2, br: w.readBytes, bw: C.writeBytes },
            time_stamp: {
              n: 3,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            raw_file_size: { n: 4, br: w.readUint32, bw: C.writeUint32 },
            persist_state: { n: 5, br: w.readEnum, bw: C.writeEnum },
            platforms_to_sync: { n: 6, br: w.readUint32, bw: C.writeUint32 },
            path_prefix_index: { n: 7, br: w.readUint32, bw: C.writeUint32 },
            machine_name_index: { n: 8, br: w.readUint32, bw: C.writeUint32 },
            reupload_requested: { n: 9, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppFileInfo`;
    }
  },
  St = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            synced_change_number: {
              n: 2,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetAppFileChangelist_Request`;
    }
  },
  Ct = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.current_change_number || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [2, 4, 5], null));
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
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            files: { n: 2, c: xt, r: !0, q: !0 },
            is_only_delta: { n: 3, br: w.readBool, bw: C.writeBool },
            path_prefixes: {
              n: 4,
              r: !0,
              q: !0,
              br: w.readString,
              bw: C.writeRepeatedString,
            },
            machine_names: {
              n: 5,
              r: !0,
              q: !0,
              br: w.readString,
              bw: C.writeRepeatedString,
            },
            app_buildid_hwm: {
              n: 6,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_GetAppFileChangelist_Response`;
    }
  },
  wt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url_host || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            url_host: { n: 1, br: w.readString, bw: C.writeString },
            url_path: { n: 2, br: w.readString, bw: C.writeString },
            use_https: { n: 3, br: w.readBool, bw: C.writeBool },
            http_method: { n: 4, br: w.readInt32, bw: C.writeInt32 },
            request_headers: { n: 5, c: Tt, r: !0, q: !0 },
            block_offset: {
              n: 6,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            block_length: { n: 7, br: w.readUint32, bw: C.writeUint32 },
            explicit_body_data: { n: 8, br: w.readBytes, bw: C.writeBytes },
            may_parallelize: { n: 9, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ClientCloudFileUploadBlockDetails`;
    }
  },
  Tt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: C.writeString },
            value: { n: 2, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ClientCloudFileUploadBlockDetails_HTTPHeaders`;
    }
  },
  Et = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            machine_name: { n: 2, br: w.readString, bw: C.writeString },
            files_to_upload: {
              n: 3,
              r: !0,
              q: !0,
              br: w.readString,
              bw: C.writeRepeatedString,
            },
            files_to_delete: {
              n: 4,
              r: !0,
              q: !0,
              br: w.readString,
              bw: C.writeRepeatedString,
            },
            client_id: {
              n: 5,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            app_build_id: {
              n: 6,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginAppUploadBatch_Request`;
    }
  },
  Dt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.batch_id || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            batch_id: { n: 1, br: w.readUint64String, bw: C.writeUint64String },
            app_change_number: {
              n: 4,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_BeginAppUploadBatch_Response`;
    }
  },
  Ot = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            batch_id: { n: 2, br: w.readUint64String, bw: C.writeUint64String },
            batch_eresult: { n: 3, br: w.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Notification`;
    }
  },
  kt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            batch_id: { n: 2, br: w.readUint64String, bw: C.writeUint64String },
            batch_eresult: { n: 3, br: w.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Request`;
    }
  },
  At = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_CompleteAppUploadBatch_Response`;
    }
  },
  jt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            app_change_number: {
              n: 2,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppCloudStateChange_Notification`;
    }
  },
  Mt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            file_size: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            raw_file_size: { n: 3, br: w.readUint32, bw: C.writeUint32 },
            file_sha: { n: 4, br: w.readBytes, bw: C.writeBytes },
            time_stamp: {
              n: 5,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            filename: { n: 6, br: w.readString, bw: C.writeString },
            platforms_to_sync: {
              n: 7,
              d: 4294967295,
              br: w.readUint32,
              bw: C.writeUint32,
            },
            cell_id: { n: 9, br: w.readUint32, bw: C.writeUint32 },
            can_encrypt: { n: 10, br: w.readBool, bw: C.writeBool },
            is_shared_file: { n: 11, br: w.readBool, bw: C.writeBool },
            deprecated_realm: { n: 12, br: w.readUint32, bw: C.writeUint32 },
            upload_batch_id: {
              n: 13,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientBeginFileUpload_Request`;
    }
  },
  Nt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.encrypt_file || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            encrypt_file: { n: 1, br: w.readBool, bw: C.writeBool },
            block_requests: { n: 2, c: wt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientBeginFileUpload_Response`;
    }
  },
  Pt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transfer_succeeded || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transfer_succeeded: { n: 1, br: w.readBool, bw: C.writeBool },
            appid: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            file_sha: { n: 3, br: w.readBytes, bw: C.writeBytes },
            filename: { n: 4, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientCommitFileUpload_Request`;
    }
  },
  Ft = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_committed || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { file_committed: { n: 1, br: w.readBool, bw: C.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientCommitFileUpload_Response`;
    }
  },
  It = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            filename: { n: 2, br: w.readString, bw: C.writeString },
            realm: { n: 3, br: w.readUint32, bw: C.writeUint32 },
            force_proxy: { n: 4, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Request`;
    }
  },
  Lt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, [10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            file_size: { n: 2, br: w.readUint32, bw: C.writeUint32 },
            raw_file_size: { n: 3, br: w.readUint32, bw: C.writeUint32 },
            sha_file: { n: 4, br: w.readBytes, bw: C.writeBytes },
            time_stamp: {
              n: 5,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            is_explicit_delete: { n: 6, br: w.readBool, bw: C.writeBool },
            url_host: { n: 7, br: w.readString, bw: C.writeString },
            url_path: { n: 8, br: w.readString, bw: C.writeString },
            use_https: { n: 9, br: w.readBool, bw: C.writeBool },
            request_headers: { n: 10, c: Rt, r: !0, q: !0 },
            encrypted: { n: 11, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Response`;
    }
  },
  Rt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: C.writeString },
            value: { n: 2, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientFileDownload_Response_HTTPHeaders`;
    }
  },
  zt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            filename: { n: 2, br: w.readString, bw: C.writeString },
            is_explicit_delete: { n: 3, br: w.readBool, bw: C.writeBool },
            upload_batch_id: {
              n: 4,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientDeleteFile_Request`;
    }
  },
  Bt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientDeleteFile_Response`;
    }
  },
  Vt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            chose_local_files: { n: 2, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientConflictResolution_Notification`;
    }
  },
  Ht = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            client_id: {
              n: 2,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            machine_name: { n: 3, br: w.readString, bw: C.writeString },
            cloud_sync_completed: { n: 4, br: w.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionSuspend_Request`;
    }
  },
  Ut = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionSuspend_Response`;
    }
  },
  Wt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            client_id: {
              n: 2,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionResume_Request`;
    }
  },
  Gt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_AppSessionResume_Response`;
    }
  },
  Kt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadCheck_Notification`;
    }
  },
  qt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.request_id || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadRequest_Notification`;
    }
  },
  Jt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
            request_id: {
              n: 2,
              br: w.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ClientLogUploadComplete_Notification`;
    }
  },
  Yt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: w.readUint32, bw: C.writeUint32 },
            file_name: { n: 2, br: w.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ShareFile_Request`;
    }
  },
  Xt = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.hcontent || E(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloud_ShareFile_Response`;
    }
  },
  W;
(function (e) {
  function t(e, t) {
    return e.SendNotification(`Cloud.ClientLogUploadCheck#1`, _(Kt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientLogUploadCheck = t;
  function n(e, t) {
    return e.SendNotification(`Cloud.ClientLogUploadComplete#1`, _(Jt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientLogUploadComplete = n;
  function r(e, t, n) {
    return e.SendMsg(`Cloud.BeginHTTPUpload#1`, _(H, t, n), Xe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.BeginHTTPUpload = r;
  function i(e, t, n) {
    return e.SendMsg(`Cloud.CommitHTTPUpload#1`, _(U, t, n), Qe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.CommitHTTPUpload = i;
  function a(e, t, n) {
    return e.SendMsg(`Cloud.BeginUGCUpload#1`, _($e, t, n), et, {
      ePrivilege: 1,
    });
  }
  e.BeginUGCUpload = a;
  function o(e, t, n) {
    return e.SendMsg(`Cloud.CommitUGCUpload#1`, _(nt, t, n), rt, {
      ePrivilege: 1,
    });
  }
  e.CommitUGCUpload = o;
  function s(e, t, n) {
    return e.SendMsg(`Cloud.GetFileDetails#1`, _(it, t, n), at, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetFileDetails = s;
  function c(e, t, n) {
    return e.SendMsg(`Cloud.GetSingleFileInfo#1`, _(ot, t, n), st, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetSingleFileInfo = c;
  function l(e, t, n) {
    return e.SendMsg(`Cloud.ShareFile#1`, _(Yt, t, n), Xt, { ePrivilege: 1 });
  }
  e.ShareFile = l;
  function u(e, t, n) {
    return e.SendMsg(`Cloud.EnumerateUserFiles#1`, _(ct, t, n), lt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnumerateUserFiles = u;
  function d(e, t, n) {
    return e.SendMsg(`Cloud.Delete#1`, _(ut, t, n), dt, { ePrivilege: 1 });
  }
  e.Delete = d;
  function f(e, t, n) {
    return e.SendMsg(`Cloud.GetClientEncryptionKey#1`, _(ft, t, n), pt, {
      ePrivilege: 1,
    });
  }
  e.GetClientEncryptionKey = f;
  function p(e, t) {
    return e.SendNotification(`Cloud.CDNReport#1`, _(mt, t), { ePrivilege: 1 });
  }
  e.CDNReport = p;
  function m(e, t) {
    return e.SendNotification(
      `Cloud.ExternalStorageTransferReport#1`,
      _(ht, t),
      { ePrivilege: 1 },
    );
  }
  e.ExternalStorageTransferReport = m;
  function h(e, t, n) {
    return e.SendMsg(`Cloud.BeginAppUploadBatch#1`, _(Et, t, n), Dt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.BeginAppUploadBatch = h;
  function g(e, t) {
    return e.SendNotification(`Cloud.CompleteAppUploadBatch#1`, _(Ot, t), {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.CompleteAppUploadBatch = g;
  function ee(e, t, n) {
    return e.SendMsg(
      `Cloud.CompleteAppUploadBatchBlocking#1`,
      _(kt, t, n),
      At,
      { ePrivilege: 1 },
    );
  }
  e.CompleteAppUploadBatchBlocking = ee;
  function te(e, t, n) {
    return e.SendMsg(`Cloud.ClientBeginFileUpload#1`, _(Mt, t, n), Nt, {
      ePrivilege: 1,
    });
  }
  e.ClientBeginFileUpload = te;
  function ne(e, t, n) {
    return e.SendMsg(`Cloud.ClientCommitFileUpload#1`, _(Pt, t, n), Ft, {
      ePrivilege: 1,
    });
  }
  e.ClientCommitFileUpload = ne;
  function v(e, t, n) {
    return e.SendMsg(`Cloud.ClientFileDownload#1`, _(It, t, n), Lt, {
      ePrivilege: 1,
    });
  }
  e.ClientFileDownload = v;
  function re(e, t, n) {
    return e.SendMsg(`Cloud.ClientDeleteFile#1`, _(zt, t, n), Bt, {
      ePrivilege: 1,
    });
  }
  e.ClientDeleteFile = re;
  function y(e, t) {
    return e.SendNotification(`Cloud.ClientConflictResolution#1`, _(Vt, t), {
      ePrivilege: 1,
    });
  }
  e.ClientConflictResolution = y;
  function b(e, t, n) {
    return e.SendMsg(`Cloud.GetAppFileChangelist#1`, _(St, t, n), Ct, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetAppFileChangelist = b;
  function x(e, t, n) {
    return e.SendMsg(`Cloud.SuspendAppSession#1`, _(Ht, t, n), Ut, {
      ePrivilege: 1,
    });
  }
  e.SuspendAppSession = x;
  function ie(e, t, n) {
    return e.SendMsg(`Cloud.ResumeAppSession#1`, _(Wt, t, n), Gt, {
      ePrivilege: 1,
    });
  }
  e.ResumeAppSession = ie;
  function S(e, t, n) {
    return e.SendMsg(`Cloud.SignalAppLaunchIntent#1`, _(gt, t, n), _t, {
      ePrivilege: 1,
    });
  }
  e.SignalAppLaunchIntent = S;
  function C(e, t) {
    return e.SendNotification(`Cloud.SignalAppExitSyncDone#1`, _(vt, t), {
      ePrivilege: 1,
    });
  }
  e.SignalAppExitSyncDone = C;
  function ae(e, t, n) {
    return e.SendMsg(`Cloud.ClientGetAppQuotaUsage#1`, _(yt, t, n), bt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.ClientGetAppQuotaUsage = ae;
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
var Qt = new O(`GameNotesCloudStore`).Debug;
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
  G = new O(`GameNotesCloudStore`).Debug,
  tn = class extends en {
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
      let n = `${e}${await x(await t.arrayBuffer(), `SHA-1`)}.${g(t)}`;
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
      let n = T.Init(it);
      (n.Body().set_appid(j), n.Body().set_ugcid(t.ugcid));
      let r = await W.GetFileDetails(
        this.m_props.steamInterface.GetServiceTransport(),
        n,
      );
      if (!r.BSuccess() || !r.Body().details(!1))
        throw `Error loading cloud file detail: ${r.GetErrorMessage()}`;
      let i = r.Body().details();
      return (
        de(i.filename() == e, `Asked for ${e} but got ${i.filename()}`),
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
        G(`EnumerateUserFiles for ${j}, starting at ${e}`);
        let r = T.Init(ct);
        (r.Body().set_appid(j),
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
          G(
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
var K = p(),
  q = R.createContext({ mode: `page`, store: null });
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
    l = R.useMemo(
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
  return R.useContext(q).mode == `single`;
}
function J() {
  return R.useContext(q).closePopup;
}
function Y() {
  return R.useContext(q).store;
}
function ln() {
  return R.useContext(q).bPinnedView;
}
function un() {
  return R.useContext(q).onClickURL;
}
function dn() {
  return R.useContext(q).bSpellcheckEnabled ?? !0;
}
function fn() {
  return R.useContext(q).setSpellcheckEnabled;
}
var pn = new O(`GameNotesCloudStore`).Debug;
function mn() {
  let e = Y();
  return a({
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
  return a(Z(t, e));
}
function gn(e, t) {
  let n = d(),
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
  let t = d(),
    n = Y();
  return R.useCallback(() => {
    let r = A(`#UserGameNotes_UntitledNote_Title`),
      i = n.NewNote(e, r);
    return (yn(t, e, (e) => [...e, i]), i.id);
  }, [t, n, e]);
}
function vn(e, t) {
  let n = d(),
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
  return R.useMemo(() => (t ? rn(t) : nn(e)), [e, t]);
}
var xn = I.nodes.image,
  Sn = {
    nodes: {
      ...I.nodes,
      cloudimage: {
        ...xn,
        parseDOM: [],
        bbCode: { ...xn.bbCode, tag: `cloudimg` },
      },
    },
    marks: { ...I.marks },
  },
  Q = new Ue(Sn),
  Cn = e(n());
function wn(e) {
  let {
      schema: t,
      view: n,
      refUpdateToolbar: r,
      className: i,
      bSpellcheckEnabled: a,
      setSpellcheckEnabled: o,
    } = e,
    [s, c] = le(`FormattingToolbar_Expanded`, !1);
  return (0, K.jsx)(ke, {
    refUpdateToolbar: r,
    view: n,
    children: (0, K.jsxs)(`div`, {
      className: F(void 0, i),
      children: [
        (0, K.jsxs)(We, {
          children: [
            (0, K.jsx)(Me, {}),
            (0, K.jsx)(L, {}),
            (0, K.jsx)(ze, { schema: t }),
            (0, K.jsx)(Fe, {}),
            (0, K.jsx)(Pe, {
              onClick: () => c(!s),
              tooltip: A(`#FormattingToolbar_ExpandOptions`),
              children: (0, K.jsx)(Ce, { direction: s ? `up` : `down` }),
            }),
          ],
        }),
        (0, K.jsx)(ee, {
          visible: s,
          children: (0, K.jsxs)(We, {
            children: [
              (0, K.jsx)(Be, { schema: t }),
              (0, K.jsx)(Ve, { schema: t, levels: 5 }),
              (0, K.jsx)(Ne, {
                nodeType: t.nodes.code_block,
                tooltip: A(`#FormattingToolbar_CodeBlock`),
                children: (0, K.jsx)(pe, {}),
              }),
              (0, K.jsx)(L, {}),
              (0, K.jsx)(Ae, { schema: t }),
              (0, K.jsx)(L, {}),
              (0, K.jsx)(Ie, { schema: t }),
              (0, K.jsx)(Fe, {}),
              o &&
                (0, K.jsx)(He, {
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
    [i, a] = R.useState(),
    o = R.useRef(void 0),
    s = dn(),
    c = fn(),
    l = D(),
    u = {
      onSecondaryButton: () => t(),
      onSecondaryActionDescription: A(`#UserGameNotes_DeleteNote`),
      onDragOver: (e) => e.stopPropagation(),
    };
  return (
    R.useEffect(() => {
      i &&
        !n &&
        (ge.IN_CLIENT || !window.matchMedia(`(max-width: 500px)`).matches) &&
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
        (0, K.jsx)(Re, {
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
var Nn = R.memo(function (e) {
  let { schema: t } = e,
    n = un(),
    r = R.useMemo(
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
      (0, K.jsx)(Ge, { nodeType: t.nodes.image }),
      (0, K.jsx)(Ke, { linkMarkType: t.marks.link, schema: t, onClickURL: n }),
      (0, K.jsx)(Le, { specs: r }),
    ],
  });
});
function Pn(e) {
  let { src: t, selected: n } = e,
    [r, i] = R.useState(),
    a = Y();
  return (
    R.useEffect(() => {
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
    [r, i] = R.useState(void 0),
    a = R.useRef(!1),
    o = D(),
    { mutate: s } = gn(t, i),
    [c, l] = R.useState();
  R.useEffect(() => {
    if (!a.current) {
      let e = new De(Q, t.content, (e, t) => s({ title: Hn(t), bbcode: e }));
      (Un(e, Q.pm_schema), l(e));
    }
  }, [s, t.content]);
  let { bDirty: u } = Oe(c, { msAutosaveTimeout: Fn * 1e3 });
  (R.useEffect(() => {
    u &&
      !a.current &&
      ((a.current = !0), qe.ReportTrackedAction(`/GameNotes/NoteModified`));
  }, [u]),
    R.useEffect(() => {
      n && c && c.CommitChanges();
    }, [n, c]));
  let d = ie().ownerWindow;
  (me(
    d.document,
    R.useCallback(
      (e) => {
        e == `hidden` && c && c.CommitChanges();
      },
      [c],
    ),
  ),
    re(
      window,
      `beforeunload`,
      R.useCallback(
        (e) => {
          !M.IN_STEAMUI &&
            c.BHasUncomittedChanges() &&
            (c.CommitChanges(), e.preventDefault());
        },
        [c],
      ),
    ));
  let f = Ln(t.appid, Q.pm_schema),
    p = vn(t, J());
  return (0, K.jsx)(je, {
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
  return R.useCallback(
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
    ? (0, K.jsx)(S, {
        active: !0,
        children: (0, K.jsx)(ce, {
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
    [r, i, a] = Te(!1),
    o = cn(),
    { mutate: s, isPending: c } = vn(t, J()),
    l = R.useCallback(() => {
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
      (0, K.jsx)(ve, {
        toolTipContent: A(`#UserGameNotes_DeleteNote`),
        direction: `top`,
        children: (0, K.jsx)(k, { onClick: l, children: (0, K.jsx)(Ee, {}) }),
      }),
      o && (0, K.jsx)(Bn, { bDirty: n }),
    ],
  });
}
function Bn(e) {
  let { bDirty: t } = e,
    n = J();
  return t
    ? (0, K.jsx)(be, {
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
  return (0, K.jsx)(S, {
    active: !0,
    children: (0, K.jsx)(ce, {
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
var Wn = e(l()),
  Gn,
  Kn = 864e5;
function qn(e) {
  return `appinfo_${e}_${M.LANGUAGE}`;
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
          let n = T.Init(se);
          (n.Body().set_language(xe(M.LANGUAGE)), n.Body().set_appids(i));
          let a = await ae.GetApps(e, n);
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
  let t = Se(),
    n = ue();
  return a({
    queryKey: [`appinfo`, e],
    queryFn: async () => Yn(t, n).load(e),
    staleTime: Kn,
    enabled: !!e,
  }).data;
}
function Zn(e) {
  let { bStandalonePage: t } = e,
    n = c(),
    r = bn(
      `appid` in n.params && Number(n.params.appid),
      `shortcut_name` in n.params && n.params.shortcut_name,
    ),
    i = $(),
    a = _n(r),
    o = R.useRef(void 0),
    { data: s } = hn(r),
    l,
    u = !1;
  if (s) {
    let e = n.params.noteid || o.current;
    (e && ((l = s.find((t) => t.id === e)), !l && n.params.noteid && (u = !0)),
      (l ||= s[0]));
  }
  (l && (o.current = l.id),
    R.useEffect(() => {
      s && s.length == 0 && i(r, a(), !0);
    }, [i, r, s, a]),
    R.useEffect(() => {
      u && i(r, void 0, !0);
    }, [i, r, u]));
  let d = (0, K.jsx)(ve, {
    toolTipContent: A(`#UserGameNotes_NewNote`),
    direction: `top`,
    children: (0, K.jsx)(k, {
      className: An,
      onClick: () => {
        let e = a();
        i(r, e);
      },
      children: (0, K.jsx)(_e, {}),
    }),
  });
  return s
    ? (0, K.jsx)(Qn, {
        noteParent: r,
        notes: s,
        activeNoteID: l?.id,
        actions: d,
        bStandalonePage: t,
      })
    : null;
}
function Qn(e) {
  let {
      noteParent: t,
      notes: n,
      activeNoteID: r,
      actions: i,
      bStandalonePage: a,
    } = e,
    [o, s] = le(`NotesListCollapsed`, !1),
    l = ln(),
    u = D(),
    d = c(),
    f = ye(d.params.noteid || l ? `ActivePage` : `PageList`),
    p = n.map((e) => ({
      title: e.title?.length > 0 ? e.title : A(`#UserGameNotes_Untitled`),
      identifier: e.id,
      content: (0, K.jsx)(er, { noteParent: t, note: e }),
      pageClassName: En,
      hideTitle: !0,
    })),
    m = $(),
    h = R.useCallback((e) => m(t, e), [m, t]),
    g = M.IN_STEAMUI
      ? A(`#UserGameNotes_NotesList`)
      : (0, K.jsx)($n, { noteParent: t });
  return u && a
    ? (0, K.jsx)(oe, {
        title: g,
        pages: p,
        className: F(Tn, l && `RhdVkvwKgIg-`, f),
        page: r,
        onPageRequested: h,
        bottomControls: i,
        hideList: o,
        toggleHideList: l || u ? void 0 : () => s(!o),
      })
    : (0, K.jsx)(ne, {
        title: g,
        pages: p,
        className: F(Tn, l && `RhdVkvwKgIg-`, f),
        page: r,
        onPageRequested: h,
        bottomControls: i,
        hideList: o,
        toggleHideList: l || u ? void 0 : () => s(!o),
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
    r = we(),
    i = $(),
    a = R.useCallback(() => i(t), [i, t]),
    o = ln();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      !o && (0, K.jsx)(he, { onActivate: a }),
      (0, K.jsx)(In, { note: n, hidden: !r }),
    ],
  });
}
function $(e = !1) {
  let n = D(),
    r = t(),
    i = e || n;
  return R.useCallback(
    (e, t, n = i) => {
      let a;
      ((a =
        `appid` in e ? z.AppNotes(e.appid, t) : z.ShortcutNotes(e.shortcut, t)),
        n ? r.replace(a, r.location.state) : r.push(a, r.location.state));
    },
    [r, i],
  );
}
function tr() {
  let { data: e, isLoading: t } = mn(),
    n = R.useMemo(
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
    children: (0, K.jsx)(u, {
      to: Je(t.appid ? { appid: t.appid } : { shortcut: t.shortcut_name }),
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
    o = Se();
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
  let r = T.Init(Et);
  (r.Body().set_appid(t.unAppID),
    r.Body().set_machine_name(t.strMachineName),
    r.Body().set_files_to_upload(n.slice()));
  let i = await W.BeginAppUploadBatch(e, r);
  if (!i.BSuccess())
    throw `Error in BeginAppUploadBatch: ${i.GetErrorMessage()}`;
  return i.Body().batch_id();
}
function sr(e, t, n, r) {
  let i = T.Init(kt);
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
    (a = await x(i, `SHA-1`)));
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
  let o = T.Init(H);
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
  let a = T.Init(U);
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
  return (0, K.jsx)(sn, {
    mode: `page`,
    store: t,
    children: (0, K.jsxs)(s, {
      children: [
        (0, K.jsx)(m, { path: z.List(), children: (0, K.jsx)(tr, {}) }),
        (0, K.jsx)(m, {
          path: z.AppNotes(`:appid`, `:noteid?`),
          children: (0, K.jsx)(Zn, {}),
        }),
        (0, K.jsx)(m, { children: (0, K.jsx)(f, { to: `${z.List()}` }) }),
      ],
    }),
  });
}
function fr() {
  let e = fe(),
    { mutateAsync: t } = ir(j, `Steam Community Web Interface`, {
      bIsPublic: !0,
    }),
    n = R.useCallback(
      (e, n) => t({ files: [{ filename: e, content: n }] }),
      [t],
    ),
    r = R.useRef({ steamInterface: e, uploadFile: n });
  r.current.uploadFile = n;
  let [i] = R.useState(() => new tn(r.current));
  return i;
}
export { dr as default };
