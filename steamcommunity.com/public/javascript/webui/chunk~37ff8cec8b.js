/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { i as e, t } from "./chunk~f025431ab0.js";
import {
  $n as n,
  At as r,
  Bt as i,
  C as a,
  Ct as o,
  Dt as s,
  E as c,
  Et as l,
  Fn as u,
  G as d,
  Gt as f,
  Hn as p,
  Ht as m,
  In as h,
  Jn as g,
  Jt as _,
  Kn as v,
  L as y,
  Lt as ee,
  N as b,
  Nn as te,
  Pn as ne,
  Pt as x,
  Qn as S,
  Rt as re,
  Sr as ie,
  T as C,
  Ut as ae,
  Vn as oe,
  Vt as w,
  W as se,
  Wt as T,
  X as ce,
  Xn as E,
  Y as D,
  Yn as O,
  Zn as k,
  _ as le,
  cr as ue,
  d as de,
  dr as fe,
  er as A,
  f as pe,
  fr as me,
  hn as he,
  j as ge,
  k as _e,
  m as ve,
  mt as ye,
  n as be,
  nr as xe,
  o as j,
  qn as Se,
  qt as Ce,
  r as we,
  t as Te,
  tr as M,
  w as Ee,
  x as De,
  xr as Oe,
  zt as ke,
} from "./chunk~d3515eca4e.js";
import {
  Bo as Ae,
  Co as N,
  Io as je,
  Jo as Me,
  Mo as Ne,
  Mr as Pe,
  Pr as P,
  Rs as Fe,
  Wr as Ie,
  _o as Le,
  bo as Re,
  ds as ze,
  is as Be,
  jo as Ve,
  js as He,
  ns as Ue,
  t as We,
  vo as Ge,
} from "./chunk~e464778a03.js";
import { l as F, n as Ke, u as qe } from "./chunk~0ef0cd2c00.js";
import {
  a as Je,
  c as Ye,
  h as Xe,
  s as Ze,
  v as I,
} from "./chunk~10c934b72c.js";
var L = e(ie(), 1),
  R = e(xe(), 1);
function Qe() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
function $e(e, t) {
  return e.split(t);
}
var et = /^(steam|ftp|https?):\/\//;
function tt(e) {
  return et.test(e) ? e : `https://` + e;
}
var nt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            accept: { n: 2, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  rt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  it = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image: { n: 1, br: k.readString, bw: M.writeString },
            language: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            from_body: { n: 3, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  at = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.background_image || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            background_image: { n: 1, br: k.readString, bw: M.writeString },
            scrim_color: { n: 2, br: k.readString, bw: M.writeString },
            desktop_layout: { n: 3, br: k.readString, bw: M.writeString },
            logo: { n: 4, c: it },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  ot = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            appid: { n: 4, br: k.readUint32, bw: M.writeUint32 },
            event_type: { n: 5, br: k.readEnum, bw: M.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: k.readString,
              bw: M.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: k.readUint32, bw: M.writeUint32 },
            rtime32_end_time: { n: 8, br: k.readUint32, bw: M.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: k.readUint32,
              bw: M.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: k.readUint32,
              bw: M.writeUint32,
            },
            event_name: { n: 11, br: k.readString, bw: M.writeString },
            subtitle: { n: 12, br: k.readString, bw: M.writeString },
            summary: { n: 13, br: k.readString, bw: M.writeString },
            capsule_image: { n: 14, c: it },
            store_path: { n: 15, br: k.readString, bw: M.writeString },
            rtime32_post_time: { n: 20, br: k.readUint32, bw: M.writeUint32 },
            cross_promo: { n: 21, c: at },
            adult_only_content: { n: 22, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  st = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
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
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            events: { n: 2, c: ct, r: !0, q: !0 },
            language: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  ct = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  lt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summaries || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: ot, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  ut = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  dt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.snippets || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: ft, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  ft = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            hidden: { n: 3, br: k.readBool, bw: M.writeBool },
            published: { n: 4, br: k.readBool, bw: M.writeBool },
            rtime32_start_time: { n: 5, br: k.readUint32, bw: M.writeUint32 },
            event_name: { n: 6, br: k.readString, bw: M.writeString },
            event_type: { n: 7, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  pt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requests: { n: 1, c: mt, r: !0, q: !0 },
            cursor: { n: 2, br: k.readString, bw: M.writeString },
            count: { n: 3, d: 100, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  mt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            start_build_id: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            end_build_id: { n: 3, br: k.readUint32, bw: M.writeUint32 },
            branch: { n: 4, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  ht = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.matches || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matches: { n: 1, c: gt, r: !0, q: !0 },
            num_total_results: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            next_cursor: { n: 3, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  gt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            build_id: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            branch: { n: 3, br: k.readString, bw: M.writeString },
            clan_event_gid: {
              n: 4,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            clan_account_id: { n: 5, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  _t;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, _(nt, t, n), rt, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, _(st, t, n), lt, {
      ePrivilege: 2,
      rgBrowserAPISites: [`store`, `community`, `partner`],
    });
  }
  e.GetPartnerEventSummaries = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      _(ut, t, n),
      dt,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = r;
  function i(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, _(pt, t, n), ht, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = i;
})((_t ||= {}));
var vt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.activation_code || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            activation_code: { n: 1, br: k.readString, bw: M.writeString },
            purchase_platform: { n: 2, br: k.readInt32, bw: M.writeInt32 },
            is_request_from_client: { n: 3, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_RegisterCDKey_Request`;
    }
  },
  yt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transactionid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [18], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transactionid: {
              n: 1,
              br: k.readUint64String,
              bw: M.writeUint64String,
            },
            packageid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            purchase_status: { n: 3, br: k.readUint32, bw: M.writeUint32 },
            result_detail: { n: 4, br: k.readUint32, bw: M.writeUint32 },
            transaction_time: { n: 5, br: k.readUint32, bw: M.writeUint32 },
            payment_method: { n: 6, br: k.readUint32, bw: M.writeUint32 },
            base_price: {
              n: 7,
              br: k.readUint64String,
              bw: M.writeUint64String,
            },
            total_discount: {
              n: 8,
              br: k.readUint64String,
              bw: M.writeUint64String,
            },
            tax: { n: 9, br: k.readUint64String, bw: M.writeUint64String },
            shipping: {
              n: 10,
              br: k.readUint64String,
              bw: M.writeUint64String,
            },
            currency_code: { n: 11, br: k.readUint32, bw: M.writeUint32 },
            country_code: { n: 12, br: k.readString, bw: M.writeString },
            error_headline: { n: 13, br: k.readString, bw: M.writeString },
            error_string: { n: 14, br: k.readString, bw: M.writeString },
            error_link_text: { n: 15, br: k.readString, bw: M.writeString },
            error_link_url: { n: 16, br: k.readString, bw: M.writeString },
            error_appid: { n: 17, br: k.readUint32, bw: M.writeUint32 },
            line_items: { n: 18, c: bt, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo`;
    }
  },
  bt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            line_item_description: {
              n: 3,
              br: k.readString,
              bw: M.writeString,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo_LineItem`;
    }
  },
  xt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.purchase_result_details || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            purchase_result_details: {
              n: 1,
              br: k.readInt32,
              bw: M.writeInt32,
            },
            purchase_receipt_info: { n: 2, c: yt },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_RegisterCDKey_Response`;
    }
  },
  St = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 2, br: k.readString, bw: M.writeString },
            country_code: { n: 3, br: k.readString, bw: M.writeString },
            favor_rarer_tags: { n: 4, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Request`;
    }
  },
  Ct = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: wt, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response`;
    }
  },
  wt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            name: { n: 2, br: k.readString, bw: M.writeString },
            weight: { n: 3, br: k.readFloat, bw: M.writeFloat },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response_Tag`;
    }
  },
  Tt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: k.readString, bw: M.writeString } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Request`;
    }
  },
  Et = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: Dt, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response`;
    }
  },
  Dt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            name: { n: 2, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response_Tag`;
    }
  },
  Ot = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: k.readString, bw: M.writeString },
            tagids: {
              n: 2,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Request`;
    }
  },
  kt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: At, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response`;
    }
  },
  At = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            english_name: { n: 2, br: k.readString, bw: M.writeString },
            name: { n: 3, br: k.readString, bw: M.writeString },
            normalized_name: { n: 4, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response_Tag`;
    }
  },
  jt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: k.readString, bw: M.writeString },
            have_version_hash: { n: 2, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Request`;
    }
  },
  Mt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.version_hash || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version_hash: { n: 1, br: k.readString, bw: M.writeString },
            tags: { n: 2, c: Nt, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Response`;
    }
  },
  Nt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            name: { n: 2, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Response_Tag`;
    }
  },
  Pt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.os_win || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [10, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            os_win: { n: 4, br: k.readBool, bw: M.writeBool },
            os_mac: { n: 5, br: k.readBool, bw: M.writeBool },
            os_linux: { n: 6, br: k.readBool, bw: M.writeBool },
            full_controller_support: { n: 7, br: k.readBool, bw: M.writeBool },
            native_steam_controller: { n: 8, br: k.readBool, bw: M.writeBool },
            include_coming_soon: { n: 9, br: k.readBool, bw: M.writeBool },
            excluded_tagids: {
              n: 10,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
            exclude_early_access: { n: 11, br: k.readBool, bw: M.writeBool },
            exclude_videos: { n: 12, br: k.readBool, bw: M.writeBool },
            exclude_software: { n: 13, br: k.readBool, bw: M.writeBool },
            exclude_dlc: { n: 14, br: k.readBool, bw: M.writeBool },
            exclude_soundtracks: { n: 15, br: k.readBool, bw: M.writeBool },
            featured_tagids: {
              n: 16,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreDiscoveryQueueSettings`;
    }
  },
  Ft = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: k.readEnum, bw: M.writeEnum },
            country_code: { n: 2, br: k.readString, bw: M.writeString },
            rebuild_queue: { n: 3, br: k.readBool, bw: M.writeBool },
            settings_changed: { n: 4, br: k.readBool, bw: M.writeBool },
            settings: { n: 5, c: Pt },
            rebuild_queue_if_stale: { n: 6, br: k.readBool, bw: M.writeBool },
            ignore_user_preferences: { n: 8, br: k.readBool, bw: M.writeBool },
            no_experimental_results: { n: 9, br: k.readBool, bw: M.writeBool },
            experimental_cohort: { n: 10, br: k.readUint32, bw: M.writeUint32 },
            debug_get_solr_query: { n: 11, br: k.readBool, bw: M.writeBool },
            store_page_filter: { n: 12, c: f },
            context: { n: 13, c: i },
            data_request: { n: 14, c: w },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Request`;
    }
  },
  It = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1, 8], null));
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
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
            country_code: { n: 2, br: k.readString, bw: M.writeString },
            settings: { n: 3, c: Pt },
            skipped: { n: 4, br: k.readInt32, bw: M.writeInt32 },
            exhausted: { n: 5, br: k.readBool, bw: M.writeBool },
            experimental_cohort: { n: 6, br: k.readUint32, bw: M.writeUint32 },
            debug_solr_query: { n: 7, br: k.readString, bw: M.writeString },
            store_items: { n: 8, c: ae, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Response`;
    }
  },
  Lt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: k.readEnum, bw: M.writeEnum },
            store_page_filter: { n: 2, c: f },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Request`;
    }
  },
  Rt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: k.readString, bw: M.writeString },
            settings: { n: 2, c: Pt },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Response`;
    }
  },
  zt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: k.readEnum, bw: M.writeEnum },
            appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            store_page_filter: { n: 3, c: f },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Request`;
    }
  },
  Bt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Response`;
    }
  },
  Vt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            store_appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            beta_appid: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Request`;
    }
  },
  Ht = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [5, 6, 7, 8, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            owned: { n: 1, br: k.readBool, bw: M.writeBool },
            wishlist: { n: 2, br: k.readBool, bw: M.writeBool },
            ignored: { n: 3, br: k.readBool, bw: M.writeBool },
            following: { n: 4, br: k.readBool, bw: M.writeBool },
            in_queues: {
              n: 5,
              r: !0,
              q: !0,
              br: k.readEnum,
              pbr: k.readPackedEnum,
              bw: M.writeRepeatedEnum,
            },
            queues_with_skip: {
              n: 6,
              r: !0,
              q: !0,
              br: k.readEnum,
              pbr: k.readPackedEnum,
              bw: M.writeRepeatedEnum,
            },
            queue_items_remaining: {
              n: 7,
              r: !0,
              q: !0,
              br: k.readInt32,
              pbr: k.readPackedInt32,
              bw: M.writeRepeatedInt32,
            },
            queue_items_next_appid: {
              n: 8,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
            temporarily_owned: { n: 9, br: k.readBool, bw: M.writeBool },
            queues: { n: 10, c: Ut, r: !0, q: !0 },
            ignored_reason: { n: 11, br: k.readInt32, bw: M.writeInt32 },
            beta_status: { n: 12, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response`;
    }
  },
  Ut = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: k.readEnum, bw: M.writeEnum },
            skipped: { n: 2, br: k.readBool, bw: M.writeBool },
            items_remaining: { n: 3, br: k.readInt32, bw: M.writeInt32 },
            next_appid: { n: 4, br: k.readUint32, bw: M.writeUint32 },
            experimental_cohort: { n: 5, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response_InQueue`;
    }
  },
  Wt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: k.readFixed64String,
              bw: M.writeFixed64String,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Request`;
    }
  },
  Gt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
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
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Response`;
    }
  },
  Kt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: k.readFixed64String,
              bw: M.writeFixed64String,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Request`;
    }
  },
  qt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.followed_game_count || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            followed_game_count: { n: 1, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Response`;
    }
  },
  Jt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            report_type: { n: 2, br: k.readEnum, bw: M.writeEnum },
            report: { n: 3, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReportApp_Request`;
    }
  },
  Yt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReportApp_Response`;
    }
  },
  Xt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.primary_language || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            primary_language: { n: 1, br: k.readInt32, bw: M.writeInt32 },
            secondary_languages: {
              n: 2,
              br: k.readUint64String,
              bw: M.writeUint64String,
            },
            platform_windows: { n: 3, br: k.readBool, bw: M.writeBool },
            platform_mac: { n: 4, br: k.readBool, bw: M.writeBool },
            platform_linux: { n: 5, br: k.readBool, bw: M.writeBool },
            timestamp_updated: { n: 8, br: k.readUint32, bw: M.writeUint32 },
            hide_store_broadcast: { n: 9, br: k.readBool, bw: M.writeBool },
            review_score_preference: { n: 10, br: k.readEnum, bw: M.writeEnum },
            timestamp_content_descriptor_preferences_updated: {
              n: 11,
              br: k.readInt32,
              bw: M.writeInt32,
            },
            provide_deck_feedback: { n: 12, br: k.readEnum, bw: M.writeEnum },
            additional_languages: {
              n: 13,
              br: k.readString,
              bw: M.writeString,
            },
            game_frame_rate_reporting: {
              n: 14,
              br: k.readEnum,
              bw: M.writeEnum,
            },
            disable_microtrailers: { n: 15, br: k.readBool, bw: M.writeBool },
            disable_animated_marketing: {
              n: 16,
              br: k.readBool,
              bw: M.writeBool,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserPreferences`;
    }
  },
  Zt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags_to_exclude || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags_to_exclude: { n: 1, c: Qt, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences`;
    }
  },
  Qt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            name: { n: 2, br: k.readString, bw: M.writeString },
            timestamp_added: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences_Tag`;
    }
  },
  $t = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Request`;
    }
  },
  en = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: Xt },
            tag_preferences: { n: 2, c: Zt },
            content_descriptor_preferences: { n: 3, c: ne },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Response`;
    }
  },
  tn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_apps || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_apps: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            num_top_friends: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Request`;
    }
  },
  nn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trending_apps || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { trending_apps: { n: 1, c: rn, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response`;
    }
  },
  rn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            steamids_top_friends: {
              n: 2,
              r: !0,
              q: !0,
              br: k.readUint64String,
              pbr: k.readPackedUint64String,
              bw: M.writeRepeatedUint64String,
            },
            total_friends: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData`;
    }
  },
  an = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packages_to_reserve || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packages_to_reserve: {
              n: 1,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
            packages_to_unreserve: {
              n: 2,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
            country_code: { n: 3, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Request`;
    }
  },
  on = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reservation_status || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reservation_status: { n: 1, c: te, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Response`;
    }
  },
  sn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.edistributor || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            edistributor: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            product_identifier: { n: 2, br: k.readString, bw: M.writeString },
            start_queue_position: { n: 3, br: k.readUint32, bw: M.writeUint32 },
            rtime_estimated_notification: {
              n: 4,
              br: k.readUint32,
              bw: M.writeUint32,
            },
            localization_token: { n: 5, br: k.readString, bw: M.writeString },
            accountid: { n: 6, br: k.readUint32, bw: M.writeUint32 },
            rtime_created: { n: 7, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CReservationPositionMessage`;
    }
  },
  cn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: sn, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Request`;
    }
  },
  ln = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Response`;
    }
  },
  un = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.edistributor || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            edistributor: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            product_identifier: { n: 2, br: k.readString, bw: M.writeString },
            start_queue_position: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Request`;
    }
  },
  dn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Response`;
    }
  },
  fn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Request`;
    }
  },
  pn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: sn, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Response`;
    }
  },
  mn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReloadAllReservationPositionMessages_Notification`;
    }
  },
  hn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            browserid: {
              n: 2,
              br: k.readUint64String,
              bw: M.writeUint64String,
            },
            backfill_source: { n: 3, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_MigratePartnerLinkTracking_Notification`;
    }
  },
  gn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            feedback: { n: 2, br: k.readEnum, bw: M.writeEnum },
            feedback_details: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Request`;
    }
  },
  _n = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Response`;
    }
  },
  vn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: k.readUint32, bw: M.writeUint32 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Request`;
    }
  },
  yn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.prompt || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            prompt: { n: 1, br: k.readBool, bw: M.writeBool },
            feedback_eligible: { n: 2, br: k.readBool, bw: M.writeBool },
            existing_feedback: { n: 3, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Response`;
    }
  },
  bn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            demo_appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            allow_late_firing: { n: 3, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Request`;
    }
  },
  xn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.can_fire || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_fire: { n: 1, d: !1, br: k.readBool, bw: M.writeBool },
            time_staged: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            demo_release_date: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Response`;
    }
  },
  Sn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            demo_appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            allow_late_firing: { n: 3, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Request`;
    }
  },
  Cn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Response`;
    }
  },
  wn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            queue_type: { n: 2, br: k.readEnum, bw: M.writeEnum },
            store_page_filter: { n: 3, c: f },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Request`;
    }
  },
  Tn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
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
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Response`;
    }
  },
  En = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: Xt },
            tag_preferences: { n: 2, c: Zt },
            content_descriptor_preferences: { n: 3, c: ne },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_StorePreferencesChanged_Notification`;
    }
  },
  Dn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            steamid: {
              n: 2,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Request`;
    }
  },
  On = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites_remaining || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invites_remaining: { n: 1, br: k.readInt32, bw: M.writeInt32 },
            status: { n: 2, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Response`;
    }
  },
  kn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_ids || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: k.readUint64String,
              pbr: k.readPackedUint64String,
              bw: M.writeRepeatedUint64String,
            },
            status: { n: 2, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Request`;
    }
  },
  An = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites_updated || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invites_updated: { n: 1, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Response`;
    }
  },
  jn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_id || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_id: {
              n: 1,
              br: k.readUint64String,
              bw: M.writeUint64String,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Request`;
    }
  },
  Mn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: Nn, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response`;
    }
  },
  Nn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_id || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_id: {
              n: 1,
              br: k.readUint64String,
              bw: M.writeUint64String,
            },
            appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            steamid_inviter: {
              n: 3,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            status: { n: 4, br: k.readEnum, bw: M.writeEnum },
            time_created: { n: 5, br: k.readUint32, bw: M.writeUint32 },
            app_name: { n: 6, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response_Invite`;
    }
  },
  Pn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.limit || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            limit: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            time_before: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Request`;
    }
  },
  Fn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: In, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response`;
    }
  },
  In = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            steamid_invited: {
              n: 2,
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            time_created: { n: 3, br: k.readUint32, bw: M.writeUint32 },
            app_name: { n: 4, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response_Invite`;
    }
  },
  Ln = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: k.readUint32, bw: M.writeUint32 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Request`;
    }
  },
  Rn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: zn, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response`;
    }
  },
  zn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            status: { n: 2, br: k.readEnum, bw: M.writeEnum },
            invites_remaining: { n: 3, br: k.readInt32, bw: M.writeInt32 },
            time_joined: { n: 4, br: k.readUint32, bw: M.writeUint32 },
            packageid: { n: 5, br: k.readUint32, bw: M.writeUint32 },
            invites_sent: { n: 6, br: k.readInt32, bw: M.writeInt32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response_AppStatus`;
    }
  },
  Bn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: k.readUint32, bw: M.writeUint32 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Request`;
    }
  },
  Vn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ineligible_friends || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ineligible_friends: {
              n: 1,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Response`;
    }
  },
  Hn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Store.RegisterCDKey#1`, _(vt, t, n), xt, {
      ePrivilege: 1,
    });
  }
  e.RegisterCDKey = t;
  function n(e, t, n) {
    return e.SendMsg(`Store.GetRecommendedTagsForUser#1`, _(St, t, n), Ct, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.GetRecommendedTagsForUser = n;
  function r(e, t, n) {
    return e.SendMsg(`Store.GetMostPopularTags#1`, _(Tt, t, n), Et, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMostPopularTags = r;
  function i(e, t, n) {
    return e.SendMsg(`Store.GetLocalizedNameForTags#1`, _(Ot, t, n), kt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetLocalizedNameForTags = i;
  function a(e, t, n) {
    return e.SendMsg(`Store.GetTagList#1`, _(jt, t, n), Mt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.GetTagList = a;
  function o(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueue#1`, _(Ft, t, n), It, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.GetDiscoveryQueue = o;
  function s(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSettings#1`, _(Lt, t, n), Rt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetDiscoveryQueueSettings = s;
  function c(e, t, n) {
    return e.SendMsg(`Store.SkipDiscoveryQueueItem#1`, _(zt, t, n), Bt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.SkipDiscoveryQueueItem = c;
  function l(e, t, n) {
    return e.SendMsg(`Store.GetUserGameInterestState#1`, _(Vt, t, n), Ht, {
      ePrivilege: 1,
    });
  }
  e.GetUserGameInterestState = l;
  function u(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowed#1`, _(Wt, t, n), Gt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.GetGamesFollowed = u;
  function d(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowedCount#1`, _(Kt, t, n), qt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.GetGamesFollowedCount = d;
  function f(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSkippedApps#1`, _(wn, t, n), Tn, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.GetDiscoveryQueueSkippedApps = f;
  function p(e, t, n) {
    return e.SendMsg(`Store.ReportApp#1`, _(Jt, t, n), Yt, { ePrivilege: 3 });
  }
  e.ReportApp = p;
  function m(e, t, n) {
    return e.SendMsg(`Store.GetStorePreferences#1`, _($t, t, n), en, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.GetStorePreferences = m;
  function h(e, t, n) {
    return e.SendMsg(`Store.GetTrendingAppsAmongFriends#1`, _(tn, t, n), nn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTrendingAppsAmongFriends = h;
  function g(e, t) {
    return e.SendNotification(`Store.MigratePartnerLinkTracking#1`, _(hn, t), {
      ePrivilege: 1,
    });
  }
  e.MigratePartnerLinkTracking = g;
  function v(e, t, n) {
    return e.SendMsg(`Store.UpdatePackageReservations#1`, _(an, t, n), on, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.UpdatePackageReservations = v;
  function y(e, t, n) {
    return e.SendMsg(`Store.GetWishlistDemoEmailStatus#1`, _(bn, t, n), xn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetWishlistDemoEmailStatus = y;
  function ee(e, t, n) {
    return e.SendMsg(`Store.QueueWishlistDemoEmailToFire#1`, _(Sn, t, n), Cn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.QueueWishlistDemoEmailToFire = ee;
  function b(e, t, n) {
    return e.SendMsg(`Store.SetReservationPositionMessage#1`, _(cn, t, n), ln, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetReservationPositionMessage = b;
  function te(e, t, n) {
    return e.SendMsg(
      `Store.DeleteReservationPositionMessage#1`,
      _(un, t, n),
      dn,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.DeleteReservationPositionMessage = te;
  function ne(e, t, n) {
    return e.SendMsg(
      `Store.GetAllReservationPositionMessages#1`,
      _(fn, t, n),
      pn,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllReservationPositionMessages = ne;
  function x(e, t) {
    return e.SendNotification(
      `Store.ReloadAllReservationPositionMessages#1`,
      _(mn, t),
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ReloadAllReservationPositionMessages = x;
  function S(e, t, n) {
    return e.SendMsg(`Store.SetCompatibilityFeedback#1`, _(gn, t, n), _n, {
      ePrivilege: 1,
    });
  }
  e.SetCompatibilityFeedback = S;
  function re(e, t, n) {
    return e.SendMsg(
      `Store.ShouldPromptForCompatibilityFeedback#1`,
      _(vn, t, n),
      yn,
      { ePrivilege: 1 },
    );
  }
  e.ShouldPromptForCompatibilityFeedback = re;
})((Hn ||= {}));
var Un;
(function (e) {
  e.NotifyStorePreferencesChangedHandler = {
    name: `StoreClient.NotifyStorePreferencesChanged#1`,
    request: En,
  };
})((Un ||= {}));
var Wn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Playtest.RequestInvite#1`, _(Dn, t, n), On, {
      ePrivilege: 1,
    });
  }
  e.RequestInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Playtest.UpdateInvites#1`, _(kn, t, n), An, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.UpdateInvites = n;
  function r(e, t, n) {
    return e.SendMsg(`Playtest.GetInvites#1`, _(jn, t, n), Mn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.GetInvites = r;
  function i(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteHistory#1`, _(Pn, t, n), Fn, {
      ePrivilege: 1,
    });
  }
  e.GetInviteHistory = i;
  function a(e, t, n) {
    return e.SendMsg(`Playtest.GetUserStatus#1`, _(Ln, t, n), Rn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.GetUserStatus = a;
  function o(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteOptions#1`, _(Bn, t, n), Vn, {
      ePrivilege: 1,
    });
  }
  e.GetInviteOptions = o;
})((Wn ||= {}));
var z = {};
((z.arabic = () =>
  C(() => import(`./chunk~89a803f0a0.js`), [], import.meta.url)),
  (z.brazilian = () =>
    C(() => import(`./chunk~d00edbc9bc.js`), [], import.meta.url)),
  (z.bulgarian = () =>
    C(() => import(`./chunk~6ff40f825a.js`), [], import.meta.url)),
  (z.czech = () =>
    C(() => import(`./chunk~5481d27c11.js`), [], import.meta.url)),
  (z.danish = () =>
    C(() => import(`./chunk~38719df15b.js`), [], import.meta.url)),
  (z.dutch = () =>
    C(() => import(`./chunk~34eda9e5d0.js`), [], import.meta.url)),
  (z.english = () =>
    C(() => import(`./chunk~1f602198c6.js`), [], import.meta.url)),
  (z.finnish = () =>
    C(() => import(`./chunk~951fbef41e.js`), [], import.meta.url)),
  (z.french = () =>
    C(() => import(`./chunk~8cdb223b4d.js`), [], import.meta.url)),
  (z.german = () =>
    C(() => import(`./chunk~dd7b2e8c9c.js`), [], import.meta.url)),
  (z.greek = () =>
    C(() => import(`./chunk~8b8b32dca2.js`), [], import.meta.url)),
  (z.hungarian = () =>
    C(() => import(`./chunk~6cab8b1d2b.js`), [], import.meta.url)),
  (z.indonesian = () =>
    C(() => import(`./chunk~3e06799cd5.js`), [], import.meta.url)),
  (z.italian = () =>
    C(() => import(`./chunk~191fc766b2.js`), [], import.meta.url)),
  (z.japanese = () =>
    C(() => import(`./chunk~bfb9245d4b.js`), [], import.meta.url)),
  (z.koreana = () =>
    C(() => import(`./chunk~937d60cb41.js`), [], import.meta.url)),
  (z.latam = () =>
    C(() => import(`./chunk~f44c1cdaa6.js`), [], import.meta.url)),
  (z.malay = () =>
    C(() => import(`./chunk~e549db3577.js`), [], import.meta.url)),
  (z.norwegian = () =>
    C(() => import(`./chunk~91df80654f.js`), [], import.meta.url)),
  (z.polish = () =>
    C(() => import(`./chunk~f510e2424a.js`), [], import.meta.url)),
  (z.portuguese = () =>
    C(() => import(`./chunk~33c59b3b51.js`), [], import.meta.url)),
  (z.romanian = () =>
    C(() => import(`./chunk~0ce3fe2c7a.js`), [], import.meta.url)),
  (z.russian = () =>
    C(() => import(`./chunk~30e31cdd08.js`), [], import.meta.url)),
  (z.sc_schinese = () =>
    C(() => import(`./chunk~014d3780ee.js`), [], import.meta.url)),
  (z.schinese = () =>
    C(() => import(`./chunk~615292967d.js`), [], import.meta.url)),
  (z.spanish = () =>
    C(() => import(`./chunk~36cf0dbc2a.js`), [], import.meta.url)),
  (z.swedish = () =>
    C(() => import(`./chunk~cb73f0619c.js`), [], import.meta.url)),
  (z.tchinese = () =>
    C(() => import(`./chunk~d710c4bf90.js`), [], import.meta.url)),
  (z.thai = () =>
    C(() => import(`./chunk~ef16a772ee.js`), [], import.meta.url)),
  (z.turkish = () =>
    C(() => import(`./chunk~3d2d033d5a.js`), [], import.meta.url)),
  (z.ukrainian = () =>
    C(() => import(`./chunk~5f24a082ea.js`), [], import.meta.url)),
  (z.vietnamese = () =>
    C(() => import(`./chunk~32e8c88be8.js`), [], import.meta.url)));
async function Gn(e) {
  if (z[e]) return await z[e]();
}
var Kn = c(Gn);
function qn(e, t, n) {
  let r;
  r =
    t === void 0 || t === !0 || t === !1
      ? { weekday: n ? `long` : `short`, year: t ? void 0 : `numeric` }
      : t;
  let i = new Date(e * 1e3),
    a = {
      weekday: `short`,
      month: `long`,
      day: `numeric`,
      year: `numeric`,
      ...r,
    };
  return i.toLocaleDateString(He(), a);
}
function Jn(e, t) {
  let n = new Date(e * 1e3),
    r = { year: `numeric`, month: `short`, day: `numeric`, ...t };
  return n.toLocaleDateString(He(), r);
}
function Yn(e) {
  return e.toLocaleDateString(He(), { year: `numeric` });
}
function Xn(e) {
  return e.toLocaleDateString(He(), { month: `long`, year: `numeric` });
}
function Zn(e, t) {
  switch (e.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return Kn.Localize(
        t ? `#Time_QuarterOfYear_Expanded_Q1` : `#Time_QuarterOfYear_Q1`,
        e.getUTCFullYear(),
      );
    case 3:
    case 4:
    case 5:
      return Kn.Localize(
        t ? `#Time_QuarterOfYear_Expanded_Q2` : `#Time_QuarterOfYear_Q2`,
        e.getUTCFullYear(),
      );
    case 6:
    case 7:
    case 8:
      return Kn.Localize(
        t ? `#Time_QuarterOfYear_Expanded_Q3` : `#Time_QuarterOfYear_Q3`,
        e.getUTCFullYear(),
      );
    default:
      return Kn.Localize(
        t ? `#Time_QuarterOfYear_Expanded_Q4` : `#Time_QuarterOfYear_Q4`,
        e.getUTCFullYear(),
      );
  }
}
var Qn = class extends Be {
  #e;
  #t = void 0;
  #n;
  #r;
  constructor(e, t) {
    (super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#i());
  }
  bindMethods() {
    ((this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this)));
  }
  setOptions(e) {
    let t = this.options;
    ((this.options = this.#e.defaultMutationOptions(e)),
      Ue(this.options, t) ||
        this.#e
          .getMutationCache()
          .notify({
            type: `observerOptionsUpdated`,
            mutation: this.#n,
            observer: this,
          }),
      t?.mutationKey &&
      this.options.mutationKey &&
      Me(t.mutationKey) !== Me(this.options.mutationKey)
        ? this.reset()
        : this.#n?.state.status === `pending` &&
          this.#n.setOptions(this.options));
  }
  onUnsubscribe() {
    this.hasListeners() || this.#n?.removeObserver(this);
  }
  onMutationUpdate(e) {
    (this.#i(), this.#a(e));
  }
  getCurrentResult() {
    return this.#t;
  }
  reset() {
    (this.#n?.removeObserver(this), (this.#n = void 0), this.#i(), this.#a());
  }
  mutate(e, t) {
    return (
      (this.#r = t),
      this.#n?.removeObserver(this),
      (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
      this.#n.addObserver(this),
      this.#n.execute(e)
    );
  }
  #i() {
    let e = this.#n?.state ?? Xe();
    this.#t = {
      ...e,
      isPending: e.status === `pending`,
      isSuccess: e.status === `success`,
      isError: e.status === `error`,
      isIdle: e.status === `idle`,
      mutate: this.mutate,
      reset: this.reset,
    };
  }
  #a(e) {
    Ae.batch(() => {
      if (this.#r && this.hasListeners()) {
        let t = this.#t.variables,
          n = this.#t.context;
        e?.type === `success`
          ? (this.#r.onSuccess?.(e.data, t, n),
            this.#r.onSettled?.(e.data, null, t, n))
          : e?.type === `error` &&
            (this.#r.onError?.(e.error, t, n),
            this.#r.onSettled?.(void 0, e.error, t, n));
      }
      this.listeners.forEach((e) => {
        e(this.#t);
      });
    });
  }
};
function $n(e, t) {
  let n = je(t),
    [r] = L.useState(() => new Qn(n, e));
  L.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  let i = L.useSyncExternalStore(
      L.useCallback((e) => r.subscribe(Ae.batchCalls(e)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    a = L.useCallback(
      (e, t) => {
        r.mutate(e, t).catch(Ve);
      },
      [r],
    );
  if (i.error && Ne(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: a, mutateAsync: i.mutate };
}
var B = Ke(),
  er = 500,
  tr = class extends L.Component {
    render() {
      let {
          keyExtractor: e,
          style: t,
          duration: n = er,
          className: r,
          children: i,
          childRef: a,
          ...o
        } = this.props,
        s = { ...(t || {}), transitionDuration: `${n / 1e3}s` };
      return (0, B.jsx)(Ge, {
        ...o,
        className: Le(`crossfade`, r),
        children: (0, B.jsx)(
          Re,
          {
            nodeRef: a,
            classNames: `crossfade-anim`,
            timeout: n,
            style: s,
            children: i,
          },
          e(),
        ),
      });
    }
  };
function nr(e) {
  let { src: t, ...n } = e,
    r = { backgroundImage: `url(${t})` },
    i = L.useRef(null);
  return (0, B.jsx)(tr, {
    style: r,
    keyExtractor: () => t,
    childRef: i,
    ...n,
    children: (0, B.jsx)(`div`, { ref: i, className: `crossfade-img` }),
  });
}
var rr =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  ir = [
    `img`,
    `carousel`,
    `previewyoutube`,
    `looping_media`,
    `roomeffect`,
    `video`,
    `vod`,
    `trailer`,
    `youtubeorvideo`,
    `docimg`,
  ];
rr.filter((e) => !ir.includes(e));
var ar = void 0;
function or(e) {
  return e
    ? e.map((e) => (e == `*` ? `\\*` : e)).join(`|`)
    : ((ar ||= or(rr)), ar);
}
function sr(e, t = null, n = ` `) {
  let r = RegExp(`\\[(` + or(t) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return e.replace(r, n);
}
function cr(e, t = null, n = ``) {
  let r = `\\[\\/?(?:` + or(t) + `){1,}.*?]`;
  return e.replace(new RegExp(r, `gi`), n);
}
function lr() {}
var ur = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.getitems_request || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            getitems_request: { n: 1, c: ee },
            include_unpublished: { n: 2, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetItems_Request`;
    }
  },
  dr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ids || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ids: { n: 1, c: T, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Request`;
    }
  },
  fr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            results: { n: 1, c: pr, r: !0, q: !0 },
            no_info: { n: 2, c: T, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response`;
    }
  },
  pr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, c: T },
            no_restrictions: { n: 2, br: k.readBool, bw: M.writeBool },
            allowed_countries: {
              n: 3,
              r: !0,
              q: !0,
              br: k.readString,
              bw: M.writeRepeatedString,
            },
            restricted_countries: {
              n: 4,
              r: !0,
              q: !0,
              br: k.readString,
              bw: M.writeRepeatedString,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions`;
    }
  },
  mr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PartnerStoreBrowse.GetItems#1`, _(ur, t, n), re, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.GetItems = t;
  function n(e, t, n) {
    return e.SendMsg(
      `PartnerStoreBrowse.GetCountryRestrictions#1`,
      _(dr, t, n),
      fr,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetCountryRestrictions = n;
})((mr ||= {}));
var hr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.released_only || g(e.M()),
        R.Message.initialize(
          this,
          t,
          0,
          -1,
          [4, 10, 11, 15, 16, 45, 46, 48],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            released_only: { n: 1, br: k.readBool, bw: M.writeBool },
            coming_soon_only: { n: 2, br: k.readBool, bw: M.writeBool },
            type_filters: { n: 3, c: gr },
            exclude_from: {
              n: 4,
              r: !0,
              q: !0,
              br: k.readEnum,
              pbr: k.readPackedEnum,
              bw: M.writeRepeatedEnum,
            },
            predefined_filter: { n: 5, c: _r },
            tagids_must_match: { n: 10, c: vr, r: !0, q: !0 },
            tagids_exclude: {
              n: 11,
              r: !0,
              q: !0,
              br: k.readInt32,
              pbr: k.readPackedInt32,
              bw: M.writeRepeatedInt32,
            },
            price_filters: { n: 12, c: yr },
            release_date_filter: { n: 13, c: br },
            discounted_dates_filter: { n: 17, c: xr },
            compatibility_filter: { n: 18, c: Sr },
            review_score_filter: { n: 19, c: Cr },
            discount_ends_within_hours: {
              n: 20,
              br: k.readUint32,
              bw: M.writeUint32,
            },
            content_descriptors_must_match: {
              n: 15,
              r: !0,
              q: !0,
              br: k.readEnum,
              pbr: k.readPackedEnum,
              bw: M.writeRepeatedEnum,
            },
            content_descriptors_excluded: {
              n: 16,
              r: !0,
              q: !0,
              br: k.readEnum,
              pbr: k.readPackedEnum,
              bw: M.writeRepeatedEnum,
            },
            regional_top_n_sellers: {
              n: 40,
              br: k.readInt32,
              bw: M.writeInt32,
            },
            global_top_n_sellers: { n: 41, br: k.readInt32, bw: M.writeInt32 },
            regional_long_term_top_n_sellers: {
              n: 42,
              br: k.readInt32,
              bw: M.writeInt32,
            },
            global_long_term_top_n_sellers: {
              n: 43,
              br: k.readInt32,
              bw: M.writeInt32,
            },
            store_page_filter: { n: 44, c: f },
            parent_appids: {
              n: 45,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
            creator_clan_account_ids_exclude: {
              n: 46,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
            platform_filter: { n: 47, c: wr },
            mod_for_engine_appids: {
              n: 48,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters`;
    }
  },
  gr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_apps || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_apps: { n: 1, br: k.readBool, bw: M.writeBool },
            include_packages: { n: 2, br: k.readBool, bw: M.writeBool },
            include_bundles: { n: 3, br: k.readBool, bw: M.writeBool },
            include_games: { n: 10, br: k.readBool, bw: M.writeBool },
            include_demos: { n: 11, br: k.readBool, bw: M.writeBool },
            include_mods: { n: 12, br: k.readBool, bw: M.writeBool },
            include_dlc: { n: 13, br: k.readBool, bw: M.writeBool },
            include_software: { n: 14, br: k.readBool, bw: M.writeBool },
            include_video: { n: 15, br: k.readBool, bw: M.writeBool },
            include_hardware: { n: 16, br: k.readBool, bw: M.writeBool },
            include_series: { n: 17, br: k.readBool, bw: M.writeBool },
            include_music: { n: 18, br: k.readBool, bw: M.writeBool },
            dlc_for_appid: { n: 19, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_TypeFilters`;
    }
  },
  _r = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filter_type || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filter_type: { n: 1, br: k.readEnum, bw: M.writeEnum },
            language_preferences: {
              n: 2,
              r: !0,
              q: !0,
              br: k.readInt32,
              pbr: k.readPackedInt32,
              bw: M.writeRepeatedInt32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PredefinedFilter`;
    }
  },
  vr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagids || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagids: {
              n: 1,
              r: !0,
              q: !0,
              br: k.readInt32,
              pbr: k.readPackedInt32,
              bw: M.writeRepeatedInt32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_TagFilter`;
    }
  },
  yr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.only_free_items || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            only_free_items: { n: 1, br: k.readBool, bw: M.writeBool },
            exclude_free_items: { n: 2, br: k.readBool, bw: M.writeBool },
            min_discount_percent: { n: 3, br: k.readInt32, bw: M.writeInt32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PriceFilters`;
    }
  },
  br = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.release_date_type || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            release_date_type: { n: 1, br: k.readEnum, bw: M.writeEnum },
            start_date: { n: 2, br: k.readInt32, bw: M.writeInt32 },
            end_date: { n: 3, br: k.readInt32, bw: M.writeInt32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_ReleaseDateFilter`;
    }
  },
  xr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start_date || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start_date: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            end_date: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            allow_partial_overlap: { n: 3, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_DiscountedDatesFilter`;
    }
  },
  Sr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device: { n: 1, br: k.readEnum, bw: M.writeEnum },
            categories: {
              n: 2,
              r: !0,
              q: !0,
              br: k.readEnum,
              pbr: k.readPackedEnum,
              bw: M.writeRepeatedEnum,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_CompatibilityFilter`;
    }
  },
  Cr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.min_score || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            min_score: { n: 1, br: k.readEnum, bw: M.writeEnum },
            allow_unreviewed: { n: 2, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_ReviewScoreFilter`;
    }
  },
  wr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_windows || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_windows: { n: 1, br: k.readBool, bw: M.writeBool },
            include_mac: { n: 2, br: k.readBool, bw: M.writeBool },
            include_linux: { n: 3, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PlatformFilter`;
    }
  },
  Tr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, d: 0, br: k.readInt32, bw: M.writeInt32 },
            count: { n: 2, d: 10, br: k.readInt32, bw: M.writeInt32 },
            sort: { n: 10, d: 0, br: k.readEnum, bw: M.writeEnum },
            filters: { n: 20, c: hr },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryParams`;
    }
  },
  Er = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, c: T },
            score: { n: 2, br: k.readDouble, bw: M.writeDouble },
            spellcheck_generated_result: {
              n: 3,
              br: k.readBool,
              bw: M.writeBool,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryPerResultMetadata`;
    }
  },
  Dr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_matching_records || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_matching_records: { n: 1, br: k.readInt32, bw: M.writeInt32 },
            start: { n: 2, br: k.readInt32, bw: M.writeInt32 },
            count: { n: 3, br: k.readInt32, bw: M.writeInt32 },
            per_result_metadata: { n: 4, c: Er, r: !0, q: !0 },
            spellcheck_suggestions: {
              n: 5,
              r: !0,
              q: !0,
              br: k.readString,
              bw: M.writeRepeatedString,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryResultMetadata`;
    }
  },
  Or = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.query_name || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: k.readString, bw: M.writeString },
            query: { n: 2, c: Tr },
            context: { n: 3, c: i },
            data_request: { n: 4, c: w },
            override_country_code: {
              n: 5,
              br: k.readString,
              bw: M.writeString,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_Query_Request`;
    }
  },
  kr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            metadata: { n: 1, c: Dr },
            ids: { n: 2, c: T, r: !0, q: !0 },
            store_items: { n: 3, c: ae, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_Query_Response`;
    }
  },
  Ar = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.query_name || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: k.readString, bw: M.writeString },
            context: { n: 2, c: i },
            search_term: { n: 3, br: k.readString, bw: M.writeString },
            max_results: { n: 4, br: k.readUint32, bw: M.writeUint32 },
            filters: { n: 5, c: hr },
            data_request: { n: 6, c: w },
            use_spellcheck: { n: 7, br: k.readBool, bw: M.writeBool },
            search_tags: { n: 8, br: k.readBool, bw: M.writeBool },
            search_creators: { n: 9, br: k.readBool, bw: M.writeBool },
            use_name_match_scoring: { n: 11, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Request`;
    }
  },
  jr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            metadata: { n: 1, c: Dr },
            ids: { n: 2, c: T, r: !0, q: !0 },
            store_items: { n: 3, c: ae, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Response`;
    }
  },
  Mr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.query_name || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            query_name: { n: 1, br: k.readString, bw: M.writeString },
            context: { n: 2, c: i },
            data_request: { n: 3, c: w },
            item_id: { n: 4, c: T },
            count: { n: 5, d: 20, br: k.readInt32, bw: M.writeInt32 },
            filters: { n: 6, c: hr },
            options: { n: 7, c: Nr },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request`;
    }
  },
  Nr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tag_weight || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_weight: { n: 1, d: 90, br: k.readFloat, bw: M.writeFloat },
            exclude_featured_creator_homes: {
              n: 2,
              br: k.readBool,
              bw: M.writeBool,
            },
            apply_user_preferences: { n: 3, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions`;
    }
  },
  Pr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.metadata || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            metadata: { n: 1, c: Dr },
            ids: { n: 2, c: T, r: !0, q: !0 },
            store_items: { n: 3, c: ae, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Response`;
    }
  },
  Fr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filters || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filters: { n: 2, c: f },
            sections: { n: 6, c: Ir, r: !0, q: !0 },
            context: { n: 5, c: i },
            recommended_tags: { n: 7, c: Lr, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request`;
    }
  },
  Ir = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sort || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sort: { n: 1, d: 0, br: k.readEnum, bw: M.writeEnum },
            min_items: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            randomize: { n: 3, br: k.readBool, bw: M.writeBool },
            include_packages: { n: 4, d: !1, br: k.readBool, bw: M.writeBool },
            include_bundles: { n: 5, d: !1, br: k.readBool, bw: M.writeBool },
            include_dlc: { n: 6, br: k.readBool, bw: M.writeBool },
            min_discount_percent: { n: 7, br: k.readInt32, bw: M.writeInt32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_Section`;
    }
  },
  Lr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            name: { n: 2, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_RecommendedTag`;
    }
  },
  Rr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sections || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sections: { n: 1, c: zr, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response`;
    }
  },
  zr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            store_item_ids: { n: 2, c: T, r: !0, q: !0 },
            tag_name: { n: 3, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response_Section`;
    }
  },
  Br = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sort || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sort: { n: 1, d: 0, br: k.readEnum, bw: M.writeEnum },
            max_items: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            randomize: { n: 3, br: k.readBool, bw: M.writeBool },
            include_packages: { n: 4, d: !1, br: k.readBool, bw: M.writeBool },
            include_bundles: { n: 5, d: !1, br: k.readBool, bw: M.writeBool },
            filters: { n: 6, c: f },
            context: { n: 7, c: i },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Request`;
    }
  },
  Vr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: {
              n: 1,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
            },
            store_item_ids: { n: 2, c: T, r: !0, q: !0 },
            tag_name: {
              n: 3,
              r: !0,
              q: !0,
              br: k.readString,
              bw: M.writeRepeatedString,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Response`;
    }
  },
  Hr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.context || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            context: { n: 1, c: i },
            flavor: { n: 2, br: k.readEnum, bw: M.writeEnum },
            store_page_filter: { n: 3, c: f },
            excluded_content_descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: k.readEnum,
              pbr: k.readPackedEnum,
              bw: M.writeRepeatedEnum,
            },
            start: { n: 5, d: 0, br: k.readInt32, bw: M.writeInt32 },
            count: { n: 6, d: 50, br: k.readInt32, bw: M.writeInt32 },
            prioritize_discounts: { n: 7, br: k.readBool, bw: M.writeBool },
            allow_demos: { n: 8, br: k.readBool, bw: M.writeBool },
            request_facet_counts: { n: 9, br: k.readBool, bw: M.writeBool },
            search_term: { n: 10, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Request`;
    }
  },
  Ur = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ids || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ids: { n: 1, c: T, r: !0, q: !0 },
            total_matching: { n: 2, br: k.readInt32, bw: M.writeInt32 },
            more_results_remaining: { n: 3, br: k.readBool, bw: M.writeBool },
            facet_fields: { n: 4, c: Gr, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response`;
    }
  },
  Wr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.value || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            value: { n: 1, br: k.readString, bw: M.writeString },
            count: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetValue`;
    }
  },
  Gr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.field || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            field: { n: 1, br: k.readString, bw: M.writeString },
            values: { n: 2, c: Wr, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetField`;
    }
  },
  Kr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreQuery.Query#1`, _(Or, t, n), kr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  e.Query = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreQuery.SearchSuggestions#1`, _(Ar, t, n), jr, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.SearchSuggestions = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreQuery.MoreLikeThis#1`, _(Mr, t, n), Pr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.MoreLikeThis = r;
  function i(e, t, n) {
    return e.SendMsg(
      `StoreQuery.GetItemsByUserRecommendedTags#1`,
      _(Fr, t, n),
      Rr,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`, `store`],
      },
    );
  }
  e.GetItemsByUserRecommendedTags = i;
  function a(e, t, n) {
    return e.SendMsg(
      `StoreQuery.GetItemByUserCombinedTagsPriority#1`,
      _(Br, t, n),
      Vr,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetItemByUserCombinedTagsPriority = a;
  function o(e, t, n) {
    return e.SendMsg(`StoreQuery.GetSaleBrowserItems#1`, _(Hr, t, n), Ur, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetSaleBrowserItems = o;
})((Kr ||= {}));
function qr(e, t) {
  e.Body().set_context(Jr(t));
}
function Jr(e) {
  let t = new i();
  return (e || t.set_country_code(x.COUNTRY), t.set_language(x.LANGUAGE), t);
}
function Yr(e, t) {
  e.Body().set_data_request(w.fromObject(t));
}
var V = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            title: { n: 2, br: k.readString, bw: M.writeString },
            type: { n: 3, br: k.readEnum, bw: M.writeEnum },
            visibility: { n: 4, br: k.readEnum, bw: M.writeEnum },
            priority: { n: 5, br: k.readUint32, bw: M.writeUint32 },
            association_type: { n: 6, br: k.readEnum, bw: M.writeEnum },
            associated_id: { n: 7, br: k.readUint32, bw: M.writeUint32 },
            associated_name: { n: 8, br: k.readString, bw: M.writeString },
            start_date: { n: 9, br: k.readUint32, bw: M.writeUint32 },
            end_date: { n: 10, br: k.readUint32, bw: M.writeUint32 },
            country_allow: { n: 11, br: k.readString, bw: M.writeString },
            country_deny: { n: 12, br: k.readString, bw: M.writeString },
            ownership_restrictions_overridden: {
              n: 13,
              br: k.readBool,
              bw: M.writeBool,
            },
            must_own_appid: { n: 14, br: k.readUint32, bw: M.writeUint32 },
            must_not_own_appid: { n: 15, br: k.readUint32, bw: M.writeUint32 },
            must_own_packageid: { n: 16, br: k.readUint32, bw: M.writeUint32 },
            must_not_own_packageid: {
              n: 17,
              br: k.readUint32,
              bw: M.writeUint32,
            },
            must_have_launched_appid: {
              n: 18,
              br: k.readUint32,
              bw: M.writeUint32,
            },
            additional_restrictions: {
              n: 19,
              br: k.readString,
              bw: M.writeString,
            },
            template_type: { n: 20, br: k.readString, bw: M.writeString },
            template_vars: { n: 21, br: k.readString, bw: M.writeString },
            flags: { n: 22, br: k.readUint32, bw: M.writeUint32 },
            creator_name: { n: 23, br: k.readString, bw: M.writeString },
            template_vars_json: { n: 24, br: k.readString, bw: M.writeString },
            additional_restrictions_json: {
              n: 25,
              br: k.readString,
              bw: M.writeString,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessageProto`;
    }
  },
  Xr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            title: { n: 2, br: k.readString, bw: M.writeString },
            type: { n: 3, br: k.readEnum, bw: M.writeEnum },
            associated_item_id: { n: 4, c: T },
            associated_item: { n: 5, c: ae },
            associated_name: { n: 6, br: k.readString, bw: M.writeString },
            template_type: { n: 10, br: k.readString, bw: M.writeString },
            template_vars_json: { n: 11, br: k.readString, bw: M.writeString },
            recommended_items: { n: 12, c: T, r: !0, q: !0 },
            sale_item_count: { n: 13, br: k.readUint32, bw: M.writeUint32 },
            recommended_items_include_dlc: {
              n: 14,
              br: k.readBool,
              bw: M.writeBool,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDisplayMarketingMessage`;
    }
  },
  Zr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country: { n: 1, br: k.readString, bw: M.writeString },
            anonymous_user: { n: 2, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetActiveMarketingMessages_Request`;
    }
  },
  Qr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            messages: { n: 1, c: V, r: !0, q: !0 },
            time_next_message_age: {
              n: 2,
              br: k.readUint32,
              bw: M.writeUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetActiveMarketingMessages_Response`;
    }
  },
  $r = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start_past_days || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start_past_days: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            upto_past_days: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetPastMarketingMessages_Request`;
    }
  },
  ei = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: V, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetPastMarketingMessages_Response`;
    }
  },
  ti = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_seen_messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_seen_messages: { n: 1, br: k.readBool, bw: M.writeBool },
            country_code: { n: 2, br: k.readString, bw: M.writeString },
            elanguage: { n: 3, br: k.readInt32, bw: M.writeInt32 },
            operating_system: { n: 4, br: k.readInt32, bw: M.writeInt32 },
            client_package_version: { n: 5, br: k.readInt32, bw: M.writeInt32 },
            context: { n: 6, c: i },
            data_request: { n: 7, c: w },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Request`;
    }
  },
  ni = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: ri, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Response`;
    }
  },
  ri = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.already_seen || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            already_seen: { n: 1, br: k.readBool, bw: M.writeBool },
            message: { n: 2, c: Xr },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser`;
    }
  },
  ii = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 2, br: k.readString, bw: M.writeString },
            elanguage: { n: 3, br: k.readInt32, bw: M.writeInt32 },
            operating_system: { n: 4, br: k.readInt32, bw: M.writeInt32 },
            client_package_version: { n: 5, br: k.readInt32, bw: M.writeInt32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Request`;
    }
  },
  ai = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.has_pending_messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            has_pending_messages: { n: 1, br: k.readBool, bw: M.writeBool },
            pending_message_count: { n: 2, br: k.readInt32, bw: M.writeInt32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Response`;
    }
  },
  oi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            context: { n: 2, c: i },
            data_request: { n: 3, c: w },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetDisplayMarketingMessage_Request`;
    }
  },
  si = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.message || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { message: { n: 1, c: Xr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetDisplayMarketingMessage_Response`;
    }
  },
  ci = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            display_index: { n: 2, d: 0, br: k.readUint32, bw: M.writeUint32 },
            template_type: { n: 3, d: 0, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_MarkMessageSeen_Notification`;
    }
  },
  li = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            display_index: { n: 2, d: 0, br: k.readUint32, bw: M.writeUint32 },
            template_type: { n: 3, d: 0, br: k.readEnum, bw: M.writeEnum },
            click_location: { n: 4, d: 0, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_MarkMessageClicked_Notification`;
    }
  },
  ui = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessage_Request`;
    }
  },
  di = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.message || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { message: { n: 1, c: V } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessage_Response`;
    }
  },
  fi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.lookup_type || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lookup_type: { n: 1, br: k.readEnum, bw: M.writeEnum },
            gid: { n: 2, br: k.readFixed64String, bw: M.writeFixed64String },
            message_type: { n: 3, br: k.readEnum, bw: M.writeEnum },
            gidlist: {
              n: 4,
              r: !0,
              q: !0,
              br: k.readFixed64String,
              pbr: k.readPackedFixed64String,
              bw: M.writeRepeatedFixed64String,
            },
            title: { n: 5, br: k.readString, bw: M.writeString },
            associated_id: { n: 6, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_FindMarketingMessages_Request`;
    }
  },
  pi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: V, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_FindMarketingMessages_Response`;
    }
  },
  mi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.message || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            message: { n: 1, c: V },
            from_json: { n: 2, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_CreateMarketingMessage_Request`;
    }
  },
  hi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_CreateMarketingMessage_Response`;
    }
  },
  gi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            message: { n: 2, c: V },
            from_json: { n: 3, br: k.readBool, bw: M.writeBool },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_UpdateMarketingMessage_Request`;
    }
  },
  _i = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_UpdateMarketingMessage_Response`;
    }
  },
  vi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_DeleteMarketingMessage_Request`;
    }
  },
  yi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_DeleteMarketingMessage_Response`;
    }
  },
  bi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageViewerStats_Request`;
    }
  },
  xi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rt_time_hour || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rt_time_hour: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            seen_count: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            template_type: { n: 3, br: k.readEnum, bw: M.writeEnum },
            display_index: { n: 4, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessageHourlyStats`;
    }
  },
  Si = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: xi, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageViewerStats_Response`;
    }
  },
  Ci = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rt_start_time || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rt_start_time: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            rt_end_time: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request`;
    }
  },
  wi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rt_time_hour || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rt_time_hour: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            clicked_count: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            display_index: { n: 3, br: k.readUint32, bw: M.writeUint32 },
            template_type: { n: 4, br: k.readEnum, bw: M.writeEnum },
            click_location: { n: 5, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessageClickedHourlyStats`;
    }
  },
  Ti = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: xi, r: !0, q: !0 },
            clicked_stats: { n: 2, c: wi, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response`;
    }
  },
  Ei = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageClickedStats_Request`;
    }
  },
  Di = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: wi, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageClickedStats_Response`;
    }
  },
  Oi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: k.readUint32, bw: M.writeUint32 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Request`;
    }
  },
  ki = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: Xr, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Response`;
    }
  },
  Ai = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            partnerid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_PartnerPublishMessage_Request`;
    }
  },
  ji = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_PartnerPublishMessage_Response`;
    }
  },
  Mi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
            partnerid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerMessagePreview_Request`;
    }
  },
  Ni = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.message || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { message: { n: 1, c: V } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerMessagePreview_Response`;
    }
  },
  Pi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
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
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForApps_Request`;
    }
  },
  Fi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: V, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForApps_Response`;
    }
  },
  Ii = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: k.readUint32, bw: M.writeUint32 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForPartner_Request`;
    }
  },
  Li = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.messages || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: V, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForPartner_Response`;
    }
  },
  Ri;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetActiveMarketingMessages#1`,
      _(Zr, t, n),
      Qr,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetActiveMarketingMessages = t;
  function n(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetPastMarketingMessages#1`,
      _($r, t, n),
      ei,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPastMarketingMessages = n;
  function r(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessagesForUser#1`,
      _(ti, t, n),
      ni,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `store`],
      },
    );
  }
  e.GetMarketingMessagesForUser = r;
  function i(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.DoesUserHavePendingMarketingMessages#1`,
      _(ii, t, n),
      ai,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.DoesUserHavePendingMarketingMessages = i;
  function a(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessage#1`,
      _(oi, t, n),
      si,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `store`],
      },
    );
  }
  e.GetDisplayMarketingMessage = a;
  function o(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageForUser#1`,
      _(oi, t, n),
      si,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `store`],
      },
    );
  }
  e.GetDisplayMarketingMessageForUser = o;
  function s(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageAdmin#1`,
      _(oi, t, n),
      si,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetDisplayMarketingMessageAdmin = s;
  function c(e, t) {
    return e.SendNotification(`MarketingMessages.MarkMessageSeen#1`, _(ci, t), {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.MarkMessageSeen = c;
  function l(e, t) {
    return e.SendNotification(
      `MarketingMessages.MarkMessageClicked#1`,
      _(li, t),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `store`] },
    );
  }
  e.MarkMessageClicked = l;
  function u(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessage#1`,
      _(ui, t, n),
      di,
      { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetMarketingMessage = u;
  function d(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.CreateMarketingMessage#1`,
      _(mi, t, n),
      hi,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.CreateMarketingMessage = d;
  function f(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.UpdateMarketingMessage#1`,
      _(gi, t, n),
      _i,
      { ePrivilege: 5, rgBrowserAPISites: [`partner`] },
    );
  }
  e.UpdateMarketingMessage = f;
  function p(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.DeleteMarketingMessage#1`,
      _(vi, t, n),
      yi,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.DeleteMarketingMessage = p;
  function m(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.FindMarketingMessages#1`,
      _(fi, t, n),
      pi,
      { ePrivilege: 5, rgBrowserAPISites: [`partner`] },
    );
  }
  e.FindMarketingMessages = m;
  function h(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessageViewerStats#1`,
      _(bi, t, n),
      Si,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetMarketingMessageViewerStats = h;
  function g(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessagesViewerRangeStats#1`,
      _(Ci, t, n),
      Ti,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetMarketingMessagesViewerRangeStats = g;
  function v(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessageClickedStats#1`,
      _(Ei, t, n),
      Di,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetMarketingMessageClickedStats = v;
  function y(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetPartnerReadyToPublishMessages#1`,
      _(Oi, t, n),
      ki,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetPartnerReadyToPublishMessages = y;
  function ee(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.PublishPartnerMessage#1`,
      _(Ai, t, n),
      ji,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.PublishPartnerMessage = ee;
  function b(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetPartnerMessagePreview#1`,
      _(Mi, t, n),
      Ni,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetPartnerMessagePreview = b;
  function te(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessagesForPartner#1`,
      _(Ii, t, n),
      Li,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetMarketingMessagesForPartner = te;
  function ne(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessagesForApps#1`,
      _(Pi, t, n),
      Fi,
      { ePrivilege: 4 },
    );
  }
  e.GetMarketingMessagesForApps = ne;
})((Ri ||= {}));
function zi(e) {
  return Bi(
    e.coming_soon_display,
    e.steam_release_date,
    e.custom_release_date_message,
  );
}
function Bi(e, t, n, r) {
  switch (e) {
    case `date_full`:
      return le(t);
    case `date_month`:
      return de(new Date(t * 1e3));
    case `date_quarter`:
      return pe(new Date(t * 1e3), r);
    case `date_year`:
      return ve(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || j(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || j(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function Vi(e) {
  if (e.bIncludeUnpublished) return `partner-unpublished`;
  if (e.bUsePartnerAPI) return `partner`;
}
function Hi(e, t) {
  t.Body().set_context(Ui(e));
}
function Ui(e) {
  let t = new i();
  return (
    e.bUsePartnerAPI || t.set_country_code(e.country),
    t.set_language(e.language),
    t
  );
}
function Wi(e, t) {
  e.Body().set_data_request(w.fromObject(t));
}
var Gi = t((e, t) => {
  var n = (function () {
      function e(e, t) {
        if (typeof e != `function`)
          throw TypeError(
            `DataLoader must be constructed with a function which accepts ` +
              (`Array<key> and returns Promise<Array<value>>, but got: ` +
                e +
                `.`),
          );
        ((this._batchLoadFn = e),
          (this._maxBatchSize = l(t)),
          (this._batchScheduleFn = u(t)),
          (this._cacheKeyFn = d(t)),
          (this._cacheMap = f(t)),
          (this._batch = null),
          (this.name = p(t)));
      }
      var t = e.prototype;
      return (
        (t.load = function (e) {
          if (e == null)
            throw TypeError(
              `The loader.load() function must be called with a value, ` +
                (`but got: ` + String(e) + `.`),
            );
          var t = a(this),
            n = this._cacheMap,
            r = this._cacheKeyFn(e);
          if (n) {
            var i = n.get(r);
            if (i) {
              var o = (t.cacheHits ||= []);
              return new Promise(function (e) {
                o.push(function () {
                  e(i);
                });
              });
            }
          }
          t.keys.push(e);
          var s = new Promise(function (e, n) {
            t.callbacks.push({ resolve: e, reject: n });
          });
          return (n && n.set(r, s), s);
        }),
        (t.loadMany = function (e) {
          if (!m(e))
            throw TypeError(
              `The loader.loadMany() function must be called with Array<key> ` +
                (`but got: ` + e + `.`),
            );
          for (var t = [], n = 0; n < e.length; n++)
            t.push(
              this.load(e[n]).catch(function (e) {
                return e;
              }),
            );
          return Promise.all(t);
        }),
        (t.clear = function (e) {
          var t = this._cacheMap;
          if (t) {
            var n = this._cacheKeyFn(e);
            t.delete(n);
          }
          return this;
        }),
        (t.clearAll = function () {
          var e = this._cacheMap;
          return (e && e.clear(), this);
        }),
        (t.prime = function (e, t) {
          var n = this._cacheMap;
          if (n) {
            var r = this._cacheKeyFn(e);
            if (n.get(r) === void 0) {
              var i;
              (t instanceof Error
                ? ((i = Promise.reject(t)), i.catch(function () {}))
                : (i = Promise.resolve(t)),
                n.set(r, i));
            }
          }
          return this;
        }),
        e
      );
    })(),
    r =
      typeof process == `object` && typeof process.nextTick == `function`
        ? function (e) {
            ((i ||= Promise.resolve()),
              i.then(function () {
                process.nextTick(e);
              }));
          }
        : typeof setImmediate == `function`
          ? function (e) {
              setImmediate(e);
            }
          : function (e) {
              setTimeout(e);
            },
    i;
  function a(e) {
    var t = e._batch;
    if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
      return t;
    var n = { hasDispatched: !1, keys: [], callbacks: [] };
    return (
      (e._batch = n),
      e._batchScheduleFn(function () {
        o(e, n);
      }),
      n
    );
  }
  function o(e, t) {
    if (((t.hasDispatched = !0), t.keys.length === 0)) c(t);
    else {
      var n;
      try {
        n = e._batchLoadFn(t.keys);
      } catch (n) {
        return s(
          e,
          t,
          TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function ` +
              (`errored synchronously: ` + String(n) + `.`),
          ),
        );
      }
      if (!n || typeof n.then != `function`)
        return s(
          e,
          t,
          TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ` +
              (`not return a Promise: ` + String(n) + `.`),
          ),
        );
      n.then(function (e) {
        if (!m(e))
          throw TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ` +
              (`not return a Promise of an Array: ` + String(e) + `.`),
          );
        if (e.length !== t.keys.length)
          throw TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.` +
              (`

Keys:
` +
                String(t.keys)) +
              (`

Values:
` +
                String(e)),
          );
        c(t);
        for (var n = 0; n < t.callbacks.length; n++) {
          var r = e[n];
          r instanceof Error
            ? t.callbacks[n].reject(r)
            : t.callbacks[n].resolve(r);
        }
      }).catch(function (n) {
        s(e, t, n);
      });
    }
  }
  function s(e, t, n) {
    c(t);
    for (var r = 0; r < t.keys.length; r++)
      (e.clear(t.keys[r]), t.callbacks[r].reject(n));
  }
  function c(e) {
    if (e.cacheHits)
      for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
  }
  function l(e) {
    if (e && e.batch === !1) return 1;
    var t = e && e.maxBatchSize;
    if (t === void 0) return 1 / 0;
    if (typeof t != `number` || t < 1)
      throw TypeError(`maxBatchSize must be a positive number: ` + t);
    return t;
  }
  function u(e) {
    var t = e && e.batchScheduleFn;
    if (t === void 0) return r;
    if (typeof t != `function`)
      throw TypeError(`batchScheduleFn must be a function: ` + t);
    return t;
  }
  function d(e) {
    var t = e && e.cacheKeyFn;
    if (t === void 0)
      return function (e) {
        return e;
      };
    if (typeof t != `function`)
      throw TypeError(`cacheKeyFn must be a function: ` + t);
    return t;
  }
  function f(e) {
    if (e && e.cache === !1) return null;
    var t = e && e.cacheMap;
    if (t === void 0) return new Map();
    if (t !== null) {
      var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
        return t && typeof t[e] != `function`;
      });
      if (n.length !== 0)
        throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
    }
    return t;
  }
  function p(e) {
    return e && e.name ? e.name : null;
  }
  function m(e) {
    return (
      typeof e == `object` &&
      !!e &&
      typeof e.length == `number` &&
      (e.length === 0 ||
        (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
    );
  }
  t.exports = n;
});
function Ki(e) {
  return `appid` in e
    ? `app_${e.appid}`
    : `packageid` in e
      ? `package_${e.packageid}`
      : `bundleid` in e
        ? `bundle_${e.bundleid}`
        : `tagid` in e
          ? `tag_${e.tagid}`
          : `creatorid` in e
            ? `creator_${e.creatorid}`
            : `hubcategoryid` in e
              ? `hubcategory_${e.hubcategoryid}`
              : `salepagegid` in e
                ? `salepage_${e.salepagegid}`
                : (Se(e, `Unknown store item id type`), ``);
}
function qi(e, t) {
  switch (e) {
    case 0:
      return `app_${t}`;
    case 1:
      return `package_${t}`;
    case 2:
      return `bundle_${t}`;
    case 4:
      return `tag_${t}`;
    case 5:
      return `creator_${t}`;
    case 6:
      return `hubcategory_${t}`;
    case 7:
      return `salepage_${t}`;
    case 3:
    case -1:
      return ``;
    default:
      return (Se(e, `Unknown EStoreItemType ${e} ${ke(e)} `), ``);
  }
}
var Ji = /^(app|package|bundle|mtx|tag|creator|hubcategory|salepage)_(\d*)$/;
function Yi(e) {
  let t = e.match(Ji);
  if (t)
    switch (t[1]) {
      case `app`:
        return { appid: parseInt(t[2]) };
      case `package`:
        return { packageid: parseInt(t[2]) };
      case `bundle`:
        return { bundleid: parseInt(t[2]) };
      case `tag`:
        return { tagid: parseInt(t[2]) };
      case `creator`:
        return { creatorid: parseInt(t[2]) };
      case `hubcategory`:
        return { hubcategoryid: parseInt(t[2]) };
      case `salepage`:
        return { salepagegid: t[2] };
    }
  v(!1, `Failed to parse StoreItemID ${e}`);
}
function Xi(e) {
  let t = e.match(Ji);
  if (t)
    switch (t[1]) {
      case `app`:
        return { item_type: 0, id: parseInt(t[2]) };
      case `package`:
        return { item_type: 1, id: parseInt(t[2]) };
      case `bundle`:
        return { item_type: 2, id: parseInt(t[2]) };
      case `tag`:
        return { item_type: 4, id: parseInt(t[2]) };
      case `creator`:
        return { item_type: 5, id: parseInt(t[2]) };
      case `hubcategory`:
        return { item_type: 6, id: parseInt(t[2]) };
      case `salepage`:
        return { item_type: 7, id: 0, gid: t[2] };
    }
  return { item_type: -1, id: t ? parseInt(t[2]) : 0 };
}
function Zi(e) {
  let t = e.item_type ?? -1,
    n = e.id || 0;
  switch (t) {
    case 0:
      return { appid: n };
    case 1:
      return { packageid: n };
    case 2:
      return { bundleid: n };
    case 4:
      return { tagid: n };
    case 5:
      return { creatorid: n };
    case 6:
      return { hubcategoryid: n };
    case 7:
      return e.gid ? { salepagegid: e.gid } : void 0;
    case 3:
    case -1:
      return;
    default:
      Se(t, `Unknown EStoreItemType ${t} ${ke(t)} `);
      return;
  }
}
var Qi = e(Gi(), 1);
function $i(e, t, n, r, i = !1) {
  v(
    !t.bIncludeUnpublished || !!t.bUsePartnerAPI,
    `bIncludeUnpublished requires bUsePartnerAPI`,
  );
  let a = new Qi.default(
    async (n) => {
      let a = new Set(),
        o = new Map(),
        s = new Set();
      s.add(`default_info`);
      let c = {};
      if (
        (n.forEach((e) => {
          let [t, n = `default_info`] = $e(e, `|`);
          (a.add(t),
            s.has(n) ||
              (n == `top_tags`
                ? (c.include_tag_count = 20)
                : n != `default_info` && (c[n] = !0),
              s.add(n)));
          let r = o.get(t);
          (r || ((r = new Set()), o.set(t, r)), r.add(n));
        }),
        c.include_included_items)
      ) {
        let { include_included_items: e, ...t } = c;
        c.included_item_data_request = t;
      }
      let l = Ce.Init(ee);
      (Hi(t, l), Wi(l, c));
      let u = [];
      a.forEach((e) => {
        let t = Yi(e);
        t && (l.Body().add_ids(T.fromObject(t)), u.push(e));
      });
      let d;
      if (t.bUsePartnerAPI) {
        let n = Ce.Init(ur);
        (n.Body().set_getitems_request(l.Body()),
          n.Body().set_include_unpublished(!!t.bIncludeUnpublished),
          (d = await mr.GetItems(e, n)));
      } else d = await m.GetItems(e, l);
      if (i && !d.BSuccess())
        throw `Error loading store items: ${d.GetErrorMessage()}`;
      let f = new Map();
      return (
        d
          .Body()
          .store_items()
          .forEach((e, t) => {
            let n = e.item_type(),
              r = n === void 0 ? u[t] : qi(n, e.gid() ?? e.id());
            r && f.set(r, e);
          }),
        r && ea(f, s, o, c.included_item_data_request, r),
        n.map((e) => {
          let [t] = $e(e, `|`),
            n = f.get(t);
          return n ? n.toObject() : { ...Xi(t), success: 2 };
        })
      );
    },
    { maxBatchSize: 500, cache: !1, ...n },
  );
  return ((a.cacheScope = Vi(t)), a);
}
function ea(e, t, n, r, i) {
  e.forEach((e, a) => {
    let o = n.get(a);
    if ((v(o, `Missing request data for ${a}`), !o)) return;
    let s = !1,
      c = {};
    if (
      (t.forEach((e) => {
        o.has(e) ||
          ((s = !0),
          e == `top_tags`
            ? (c.include_tag_count = 20)
            : e && e != `default_info` && (c[e] = !0));
      }),
      c.include_included_items)
    ) {
      let { include_included_items: e, ...t } = c;
      c.included_item_data_request = t;
    }
    s && i(e, c);
    let l = e.included_items(!1);
    if (o.has(`include_included_items`) && r && l)
      for (let e of [
        ...l.included_apps(),
        ...l.included_packages(),
        ...l.included_bundles(),
        ...l.included_creators(),
      ])
        i(e, r);
  });
}
function ta(e) {
  let t = G();
  return N(Ka(t, e));
}
function na(e) {
  return ia(e, Ka);
}
function ra(e) {
  return ia(e, xa, `include_assets`);
}
function ia(e, t, n) {
  let r = G(),
    i = je(),
    a = e && `packageid` in e && !!e.packageid,
    o;
  if (a) {
    let t = i.getQueryData(W(e, `default_info`, r.cacheScope));
    t &&
      t.included_appids?.length == 1 &&
      (o = { appid: t.included_appids[0] });
  }
  let { data: s } = N({ ...aa(r, e, n), enabled: a && !o });
  return (s && s.length == 1 && (o = { appid: s[0] }), N(t(r, a && o ? o : e)));
}
function aa(e, t, n) {
  let r = t && `appid` in t && !!t.appid;
  return {
    queryKey: W(t, `include_included_items`, e.cacheScope),
    queryFn: async () => (
      n && to(e, t, n).catch(() => {}),
      (await to(e, t, `include_included_items`)).included_appids ?? []
    ),
    initialData: r ? [t.appid] : void 0,
    enabled: !r,
  };
}
function oa(e, t, n, r) {
  e.setQueryData(W(t, `include_included_items`, r), n.included_appids ?? []);
}
function sa(e) {
  let t = G();
  return N(va(t, e));
}
function ca(e) {
  let t = G();
  return N(qa(t, e));
}
function la(e) {
  let t = G();
  return N(e && `bundleid` in e ? qa(t, e) : Ja(t, e));
}
function ua(e, t = !1) {
  let n = G();
  return N(t ? Oa(n, e) : xa(n, e));
}
function da(e) {
  let t = G();
  return N(Ca(t, e));
}
function fa(e) {
  let t = G();
  return N(Ea(t, e));
}
function pa(e) {
  let t = G();
  return N(Aa(t, e));
}
function ma(e) {
  let t = G();
  return N(Ma(t, e));
}
function ha(e) {
  let t = G();
  return N(Pa(t, e));
}
function ga(e) {
  let t = G();
  return N(Ia(t, e));
}
function _a(e) {
  let t = G();
  return N(Ra(t, e));
}
function va(e, t) {
  return H(e, t, `include_basic_info`, `basic_info`);
}
function ya(e, t, n, r) {
  U(e, t, n, `include_basic_info`, `basic_info`, r);
}
function ba(e, t, n, r) {
  U(e, t, n, `include_full_description`, `full_description_bbcode`, r);
}
function xa(e, t) {
  return H(e, t, `include_assets`, `assets`);
}
function Sa(e, t, n, r) {
  U(e, t, n, `include_assets`, `assets`, r);
}
function Ca(e, t) {
  return H(e, t, `include_screenshots`, `screenshots`);
}
function wa(e, t, n, r) {
  U(e, t, n, `include_screenshots`, `screenshots`, r);
}
function Ta(e, t, n, r) {
  U(e, t, n, `include_links`, `links`, r);
}
function Ea(e, t) {
  return H(e, t, `include_trailers`, `trailers`);
}
function Da(e, t, n, r) {
  U(e, t, n, `include_trailers`, `trailers`, r);
}
function Oa(e, t) {
  return H(
    e,
    t,
    `include_assets_without_overrides`,
    `assets_without_overrides`,
  );
}
function ka(e, t, n, r) {
  U(e, t, n, `include_assets_without_overrides`, `assets_without_overrides`, r);
}
function Aa(e, t) {
  return H(e, t, `include_reviews`, `reviews`);
}
function ja(e, t, n, r) {
  U(e, t, n, `include_reviews`, `reviews`, r);
}
function Ma(e, t) {
  return H(e, t, `include_release`, `release`);
}
function Na(e, t, n, r) {
  U(e, t, n, `include_release`, `release`, r);
}
function Pa(e, t) {
  return H(e, t, `top_tags`, `tags`);
}
function Fa(e, t, n, r) {
  U(e, t, n, `top_tags`, `tags`, r);
}
function Ia(e, t) {
  return H(e, t, `include_platforms`, `platforms`);
}
function La(e, t, n, r) {
  U(e, t, n, `include_platforms`, `platforms`, r);
}
function Ra(e, t) {
  return H(e, t, `apply_user_filters`, `user_filter_failure`);
}
function za(e, t, n, r) {
  U(e, t, n, `apply_user_filters`, `user_filter_failure`, r);
}
function Ba(e, t, n, r) {
  e.setQueryData(W(t, `include_all_purchase_options`, r), {
    purchase_options: n.purchase_options,
    package_groups: n.package_groups,
    purchase_notes: n.purchase_notes,
  });
}
function Va(e, t, n, r) {
  U(e, t, n, `include_supported_languages`, `supported_languages`, r);
}
function Ha(e, t, n, r) {
  U(e, t, n, `include_extra_details`, `extra_details`, r);
}
function Ua(e, t, n, r) {
  U(e, t, n, `include_ratings`, `game_rating`, r);
}
function Wa(e, t, n, r) {
  U(e, t, n, `include_optin_registration_tags`, `optin_registration_tags`, r);
}
function Ga(e) {
  return e
    ? `appid` in e && !e.appid
      ? (v(!1, `Invalid appid passed to useStoreItem`), !1)
      : `bundleid` in e && !e.bundleid
        ? (v(!1, `Invalid bundleid passed to useStoreItem`), !1)
        : !0
    : !1;
}
function H(e, t, n, r) {
  return {
    queryKey: W(t, n, e.cacheScope),
    queryFn: async () => (await to(e, t, n))[r] || null,
    staleTime: 216e5,
    enabled: Ga(t),
  };
}
function U(e, t, n, r, i, a) {
  e.setQueryData(W(t, r, a), n[i] ?? null);
}
function Ka(e, t) {
  return {
    queryKey: W(t, `default_info`, e.cacheScope),
    queryFn: async () => $a(await to(e, t, `default_info`)),
    staleTime: 216e5,
    enabled: Ga(t),
  };
}
function qa(e, t) {
  return {
    ...Ka(e, t),
    select: (e) => e.best_purchase_option || null,
    staleTime: 6e5,
  };
}
function Ja(e, t) {
  return {
    ...Ya(e, t),
    select: (e) =>
      e?.purchase_options && e.purchase_options.length > 0
        ? e.purchase_options[0]
        : null,
    staleTime: 6e5,
  };
}
function Ya(e, t) {
  let n = `include_all_purchase_options`;
  return {
    queryKey: W(t, n, e.cacheScope),
    queryFn: async () => {
      let r = await to(e, t, n);
      return {
        purchase_options: r.purchase_options,
        package_groups: r.package_groups,
        purchase_notes: r.purchase_notes,
      };
    },
    staleTime: 6e5,
    enabled: Ga(t),
  };
}
var Xa = `StoreItem`;
function W(e, t, n) {
  let r = [Xa, e && Ki(e), t];
  return (n && r.push(n), r);
}
function Za(e, t, n, r) {
  let i = Zi(t);
  i &&
    (eo(e, i, t, r),
    n.include_basic_info && ya(e, i, t, r),
    n.include_assets && Sa(e, i, t, r),
    n.include_screenshots && wa(e, i, t, r),
    n.include_links && Ta(e, i, t, r),
    n.include_trailers && Da(e, i, t, r),
    n.include_assets_without_overrides && ka(e, i, t, r),
    n.include_reviews && ja(e, i, t, r),
    n.include_release && Na(e, i, t, r),
    n.include_tag_count && n.include_tag_count > 0 && Fa(e, i, t, r),
    n.include_platforms && La(e, i, t, r),
    n.apply_user_filters && za(e, i, t, r),
    n.include_all_purchase_options && Ba(e, i, t, r),
    n.include_full_description && ba(e, i, t, r),
    n.include_supported_languages && Va(e, i, t, r),
    n.include_extra_details && Ha(e, i, t, r),
    n.include_ratings && Ua(e, i, t, r),
    n.include_optin_registration_tags && Wa(e, i, t, r),
    n.include_included_items && oa(e, i, t, r),
    n.include_included_items &&
      n.included_item_data_request &&
      (t.included_items?.included_apps?.forEach((t) =>
        Za(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_packages?.forEach((t) =>
        Za(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_bundles?.forEach((t) =>
        Za(e, t, n.included_item_data_request, r),
      ),
      t.included_items?.included_creators?.forEach((t) =>
        Za(e, t, n.included_item_data_request, r),
      )));
}
var Qa = [
  `assets`,
  `tagids`,
  `tags`,
  `basic_info`,
  `reviews`,
  `game_rating`,
  `purchase_options`,
  `screenshots`,
  `trailers`,
  `supported_languages`,
  `full_description_bbcode`,
  `assets_without_overrides`,
  `user_filter_failure`,
  `links`,
  `platforms`,
  `release`,
  `package_groups`,
  `purchase_notes`,
  `extra_details`,
  `optin_registration_tags`,
];
function $a(e) {
  let t = { ...e };
  for (let e of Qa) delete t[e];
  return t;
}
function eo(e, t, n, r) {
  e.setQueryData(W(t, `default_info`, r), $a(n));
}
async function to(e, t, n) {
  return await e.load(`${Ki(t)}|${n}`);
}
var no = L.createContext({});
function G() {
  return L.useContext(no).dataLoader;
}
function ro() {
  return L.useContext(no);
}
function io(e) {
  let {
      context: t,
      msDelayBatch: n,
      serviceTransportOverride: r,
      legacyCacheStoreItemData: i,
      bRejectOnRequestFailure: a,
      children: o,
    } = e,
    s = Ie(),
    c = je(),
    { country: l, language: u, bUsePartnerAPI: d, bIncludeUnpublished: f } = t,
    p = L.useMemo(
      () => ({
        country: l,
        language: u,
        bUsePartnerAPI: d,
        bIncludeUnpublished: f,
      }),
      [l, u, d, f],
    ),
    m = Vi(p),
    h = L.useCallback(
      (e, t) => {
        (Za(c, e.toObject(), t, m), i && i(e, t));
      },
      [c, i, m],
    ),
    g = r || s,
    _ = L.useMemo(() => {
      let e = n ? ao(n) : void 0;
      return $i(g, p, { cache: !1, batchScheduleFn: e }, h, a);
    }, [g, h, p, n, a]),
    v = L.useMemo(
      () => ({ dataLoader: _, storeBrowseContext: p, cacheStoreItemData: h }),
      [_, p, h],
    );
  return (0, B.jsx)(no.Provider, { value: v, children: o });
}
function ao(e) {
  let t = 0;
  return (n) => {
    let r,
      i = performance.now() - t;
    (i < e && (r = e - i),
      setTimeout(() => {
        ((t = performance.now()), n());
      }, r));
  };
}
var oo = L.createContext({ eAdultOnlyMediaBehavior: `masked` }),
  so = {
    name: `forceallages`,
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function co() {
  return L.useMemo(() => {
    let e = Ye(so);
    return !!(
      (e && e !== `0`) ||
      (o.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function lo() {
  let { eAdultOnlyMediaBehavior: e } = L.useContext(oo),
    t = ho();
  return co() ||
    (e == `masked` &&
      (l.excluded_content_descriptors.includes(4) ||
        l.excluded_content_descriptors.includes(3)))
    ? `blocked`
    : e == `masked` && t
      ? `allowed`
      : e;
}
function uo() {
  return lo() != `allowed`;
}
var fo = {
  name: `bDisableAOWarning`,
  options: { path: `/` },
  preferenceControls: { isTechnicallyNecessary: !0 },
};
2 * De.PerDay;
function po() {
  let e = Ye(fo),
    t = e ? parseInt(e) : 0;
  return t == 0 ? null : t;
}
function mo() {
  return {
    queryKey: [`AOWarningCookie`],
    queryFn: () => po(),
    placeholderData: () => po(),
    staleTime: 0,
  };
}
function ho() {
  let { data: e } = N(mo());
  return e && e > Date.now() / 1e3;
}
function go(e) {
  let { eAdultOnlyMediaBehavior: t } = L.useContext(oo),
    n = co(),
    r = t == `allowed` && !n,
    { data: i } = ta(r ? void 0 : e);
  return r || !e ? !1 : !i || !!i.content_descriptorids?.includes(3);
}
function _o(e, t) {
  let { data: n } = fa(e),
    r = uo();
  return L.useMemo(() => {
    if (n === void 0) return;
    if (n === null) return null;
    let e = [...(n.highlights || []), ...(n.other_trailers || [])];
    return r && !t ? e.filter((e) => !!e.all_ages) : e;
  }, [n, r, t]);
}
function vo(e) {
  let t = _o(e);
  if (t && t.length != 0) return t[0];
}
function yo(e) {
  let { trailer: t, ...n } = e,
    r = bo(t);
  return (0, B.jsx)(`img`, { ...n, src: r, alt: t.trailer_name });
}
function bo(e) {
  return `${o.STORE_ITEM_BASE_URL}${e.trailer_url_format.replace("${FILENAME}", e.screenshot_full ?? e.screenshot_medium ?? ``)}`;
}
function xo(e, t) {
  return `${o.VIDEO_CDN_URL}store_trailers/${e.trailer_url_format.replace("${FILENAME}", t)}`;
}
function So(e, t) {
  return `${o.VIDEO_CDN_URL}store_trailers/${t}`;
}
function Co(e) {
  let t =
    typeof e.captions_manifest == `function`
      ? e.captions_manifest()
      : e.captions_manifest;
  if (!t) return;
  let n = o,
    r;
  if (
    (n.MEDIA_CDN_URL
      ? (r = n.MEDIA_CDN_URL)
      : n.CDN_HOST_MEDIA && (r = n.CDN_HOST_MEDIA),
    r)
  )
    return `${r}/${t}`;
}
function wo(e) {
  let t = [];
  e.adaptive_trailers &&
    (t = e.adaptive_trailers
      .filter(
        (e) =>
          (e.encoding == `dash_h264` || e.encoding == `dash_av1`) && e.cdn_path,
      )
      .map((t) => So(e, t.cdn_path || ``)));
  let n = [];
  return (
    e.adaptive_trailers &&
      (n = e.adaptive_trailers
        .filter((e) => e.encoding == `hls_h264` && e.cdn_path)
        .map((t) => So(e, t.cdn_path || ``))),
    { rgDashTrailers: t, rgHlsTrailers: n }
  );
}
var To = class e {
  m_eItemType;
  m_unID;
  m_bVisible = !1;
  m_strName;
  m_strStoreURLPath;
  m_unAppID;
  m_eAppType;
  m_rgIncludedAppTypes;
  m_rgIncludedAppIDs;
  m_bIsFree;
  m_bIsFreeTemporary;
  m_bIsComingSoon;
  m_bIsEarlyAccess;
  m_RelatedItems;
  m_ContentDescriptorIDs;
  m_StoreCategories;
  m_ReviewInfo;
  m_BasicInfo;
  m_rgStoreTags = [];
  m_rgStoreTagIDs = [];
  m_rgOptInRegistrationTags;
  m_Assets;
  m_AssetsWithoutOverrides;
  m_ReleaseInfo;
  m_Platforms;
  m_BestPurchaseOption;
  m_SelfPurchaseOption;
  m_rgPurchaseOptions;
  m_Screenshots;
  m_Trailers;
  m_rgSupportedLanguages;
  m_strStoreURLPathOverride;
  m_freeWeekend;
  m_DataRequested = { include_tag_count: 0 };
  m_strInternalName;
  m_rgLinks;
  m_userFilterFailure;
  m_strFullDescriptionBBCode;
  constructor(e, t) {
    ((this.m_eItemType = e.item_type()),
      (this.m_unID = e.id()),
      (this.m_bVisible = !!e.visible()),
      (this.m_strName = e.name()),
      (this.m_strStoreURLPath = e.store_url_path()),
      (this.m_unAppID = e.appid()),
      (this.m_eAppType = e.type()),
      (this.m_rgIncludedAppTypes = e.included_types()),
      (this.m_rgIncludedAppIDs = e.included_appids()),
      (this.m_bIsFree = !!e.is_free()),
      (this.m_bIsFreeTemporary = !!e.is_free_temporarily()),
      (this.m_bIsComingSoon =
        !!e.is_coming_soon() || !!e.release()?.is_coming_soon()),
      (this.m_bIsEarlyAccess = !!e.is_early_access()),
      (this.m_RelatedItems = e.related_items()?.toObject()),
      (this.m_ContentDescriptorIDs = e.content_descriptorids()),
      (this.m_StoreCategories = e.categories().toObject()),
      (this.m_BestPurchaseOption = e.best_purchase_option()?.toObject()),
      (this.m_strStoreURLPathOverride = e.store_url_path_override()),
      (this.m_freeWeekend = e.free_weekend()?.toObject()),
      (this.m_strInternalName = e.internal_name()),
      (this.m_eItemType == 1 || this.m_eItemType == 2) &&
        (this.m_SelfPurchaseOption = e.self_purchase_option(!1)
          ? e.self_purchase_option().toObject()
          : this.m_BestPurchaseOption),
      this.MergeData(e, t));
  }
  MergeData(e, t) {
    (t.include_assets &&
      !this.m_Assets &&
      ((this.m_Assets = new Do(e.assets(), e.id())),
      (this.m_DataRequested.include_assets = !0)),
      t.include_assets_without_overrides &&
        !this.m_AssetsWithoutOverrides &&
        ((this.m_AssetsWithoutOverrides = new Do(
          e.assets_without_overrides(),
          e.id(),
        )),
        (this.m_DataRequested.include_assets_without_overrides = !0)),
      t.include_release &&
        !this.m_ReleaseInfo &&
        ((this.m_ReleaseInfo = e.release().toObject()),
        (this.m_DataRequested.include_release = !0)),
      t.include_platforms &&
        !this.m_Platforms &&
        ((this.m_Platforms = e.platforms().toObject()),
        (this.m_DataRequested.include_platforms = !0)),
      t.include_all_purchase_options &&
        !this.m_rgPurchaseOptions &&
        ((this.m_rgPurchaseOptions = e
          .purchase_options()
          .map((e) => e.toObject())),
        (this.m_DataRequested.include_all_purchase_options = !0)),
      t.include_screenshots &&
        !this.m_Screenshots &&
        ((this.m_Screenshots = new Ao(e.screenshots())),
        (this.m_DataRequested.include_screenshots = !0)),
      t.include_trailers &&
        !this.m_Trailers &&
        ((this.m_Trailers = new Oo(e.trailers())),
        (this.m_DataRequested.include_trailers = !0)),
      t.include_tag_count &&
        t.include_tag_count > this.m_rgStoreTags.length &&
        this.m_DataRequested.include_tag_count < t.include_tag_count &&
        ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
        (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
        (this.m_DataRequested.include_tag_count = Math.max(
          t.include_tag_count,
          this.m_rgStoreTags.length || 0,
        ))),
      t.include_optin_registration_tags &&
        !this.m_rgOptInRegistrationTags &&
        ((this.m_rgOptInRegistrationTags = e
          .optin_registration_tags()
          .map((e) => e.toObject())),
        (this.m_DataRequested.include_optin_registration_tags = !0)),
      t.include_reviews &&
        !this.m_ReviewInfo &&
        ((this.m_ReviewInfo = e.reviews().toObject()),
        (this.m_DataRequested.include_reviews = !0)),
      t.include_basic_info &&
        !this.m_BasicInfo &&
        ((this.m_BasicInfo = e.basic_info().toObject()),
        (this.m_DataRequested.include_basic_info = !0)),
      t.include_supported_languages &&
        !this.m_rgSupportedLanguages &&
        ((this.m_rgSupportedLanguages = e
          .supported_languages()
          .map((e) => e.toObject())),
        (this.m_DataRequested.include_supported_languages = !0)),
      t.include_links &&
        !this.m_rgLinks &&
        ((this.m_rgLinks = e.links().map((e) => e.toObject())),
        (this.m_DataRequested.include_links = !0)),
      t.apply_user_filters &&
        !this.m_userFilterFailure &&
        ((this.m_userFilterFailure = e.user_filter_failure()?.toObject()),
        (this.m_DataRequested.apply_user_filters = !0)),
      t.include_full_description &&
        !this.m_strFullDescriptionBBCode &&
        ((this.m_strFullDescriptionBBCode = e.full_description_bbcode()),
        (this.m_DataRequested.include_full_description = !0)));
  }
  static BDataRequestContainsOtherDataRequest(e, t) {
    return !!(
      (!t.include_assets || e.include_assets) &&
      (!t.include_assets_without_overrides ||
        e.include_assets_without_overrides) &&
      (!t.include_release || e.include_release) &&
      (!t.include_platforms || e.include_platforms) &&
      (!t.include_all_purchase_options || e.include_all_purchase_options) &&
      (!t.include_screenshots || e.include_screenshots) &&
      (!t.include_trailers || e.include_trailers) &&
      (!t.include_ratings || e.include_ratings) &&
      (!t.include_tag_count ||
        (e.include_tag_count || 0) >= t.include_tag_count) &&
      (!t.include_reviews || e.include_reviews) &&
      (!t.include_basic_info || e.include_basic_info) &&
      (!t.include_supported_languages || e.include_supported_languages) &&
      (!t.include_full_description || e.include_full_description) &&
      (!t.include_links || e.include_links) &&
      (!t.apply_user_filters || e.apply_user_filters) &&
      (!t.include_optin_registration_tags || e.include_optin_registration_tags)
    );
  }
  BContainDataRequest(t) {
    return e.BDataRequestContainsOtherDataRequest(this.m_DataRequested, t);
  }
  BCheckDataRequestIncluded(e) {}
  GetStoreItemType() {
    return this.m_eItemType;
  }
  GetID() {
    return this.m_unID;
  }
  GetUniqueID() {
    return this.m_eItemType + `_` + this.m_unID;
  }
  BIsVisible() {
    return this.m_bVisible;
  }
  GetName() {
    return this.m_strName;
  }
  GetStorePageURL(e = !1) {
    return e && this.HasDemoStandaloneStorePage()
      ? x.STORE_BASE_URL + `app/` + this.GetDemoStandaloneStorePageAppIDs()[0]
      : x.STORE_BASE_URL + this.m_strStoreURLPath;
  }
  GetStorePageURLWithOverride() {
    return this.m_strStoreURLPathOverride &&
      this.m_strStoreURLPathOverride.length > 0
      ? this.GetStorePageURLOverride()
      : this.GetStorePageURL();
  }
  GetStorePageURLOverride() {
    return this.m_strStoreURLPathOverride;
  }
  GetCommunityPageURL() {
    return this.GetAppID()
      ? x.COMMUNITY_BASE_URL + `app/` + this.GetAppID()
      : null;
  }
  GetCommunityDiscussionForumsURL() {
    return this.GetAppID()
      ? x.COMMUNITY_BASE_URL + `app/` + this.GetAppID() + `/discussions/`
      : null;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppType() {
    return this.m_eAppType;
  }
  BIsApplicationOrTool() {
    return this.GetAppType() == 6 || this.GetAppType() == 13;
  }
  k_regexSalePage =
    /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
  BIsSalePage() {
    return (
      this.GetStoreItemType() === 0 &&
      this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
    );
  }
  GetSalePageVanityURL() {
    let e = this.GetStorePageURLWithOverride();
    return (
      this.GetStoreItemType() === 0 &&
        ((e = this.GetStorePageURLWithOverride().replace(
          this.k_regexSalePage,
          ``,
        )),
        e.endsWith(`/`) && (e = e.replace(`/`, ``))),
      e
    );
  }
  GetIncludedAppTypes() {
    return this.m_rgIncludedAppTypes;
  }
  GetIncludedAppIDs() {
    return this.m_rgIncludedAppIDs;
  }
  GetIncludedAppIDsOrSelf() {
    return this.GetStoreItemType() == 0
      ? [this.GetID()]
      : this.GetIncludedAppIDs();
  }
  BIsFree() {
    return this.m_bIsFree;
  }
  BIsFreeTemporary() {
    return this.m_bIsFreeTemporary;
  }
  BIsFreeWeekend() {
    let e = Date.now() / 1e3;
    return (
      !!this.m_freeWeekend &&
      this.m_freeWeekend.start_time <= e &&
      e <= this.m_freeWeekend.end_time
    );
  }
  GetFreeWeekendEnd() {
    return this.m_freeWeekend?.end_time;
  }
  GetFreeWeekendPlayTextOverride() {
    return this.m_freeWeekend?.text;
  }
  BIsEarlyAccess() {
    return this.m_bIsEarlyAccess;
  }
  GetParentAppID() {
    return this.m_RelatedItems?.parent_appid;
  }
  BHasDemo() {
    return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
  }
  GetDemoAppIDs() {
    return this.m_RelatedItems?.demo_appid ?? [];
  }
  HasDemoStandaloneStorePage() {
    return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
  }
  GetDemoStandaloneStorePageAppIDs() {
    return this.m_RelatedItems?.standalone_demo_appid ?? [];
  }
  GetContentDescriptorIDs() {
    return this.m_ContentDescriptorIDs;
  }
  HasContentDescriptorID(e) {
    return this.m_ContentDescriptorIDs?.includes(e);
  }
  GetStoreCategories_SupportedPlayers() {
    return this.m_StoreCategories?.supported_player_categoryids || [];
  }
  GetStoreCategories_Features() {
    return this.m_StoreCategories?.feature_categoryids || [];
  }
  GetStoreCategories_Controller() {
    return this.m_StoreCategories?.controller_categoryids || [];
  }
  BHasStoreCategory(e) {
    return !!(
      this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
      this.GetStoreCategories_Features().find((t) => e === t) ||
      this.GetStoreCategories_Controller().find((t) => e === t)
    );
  }
  GetFilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({ include_reviews: !0 }),
      this.m_ReviewInfo?.summary_filtered
    );
  }
  GetUnfilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({ include_reviews: !0 }),
      this.m_ReviewInfo?.summary_unfiltered ||
        this.m_ReviewInfo?.summary_filtered
    );
  }
  GetFilteredReviewSummaryLanguage() {
    return (
      this.BCheckDataRequestIncluded({ include_reviews: !0 }),
      this.m_ReviewInfo?.summary_language_specific
    );
  }
  GetFullDescriptionBBCode() {
    return (
      this.BCheckDataRequestIncluded({ include_full_description: !0 }),
      this.m_strFullDescriptionBBCode
    );
  }
  GetShortDescription() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.short_description ?? ``
    );
  }
  GetDeveloperNames() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.developers
        ?.map((e) => e.name.trim())
        ?.filter((e) => e?.length > 0) ?? []
    );
  }
  GetFranchiseNames() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.franchises
        ?.map((e) => e.name.trim())
        ?.filter((e) => e?.length > 0) ?? []
    );
  }
  GetPublisherNames() {
    this.BCheckDataRequestIncluded({ include_basic_info: !0 });
    let e =
      this.m_BasicInfo?.publishers
        ?.map((e) => e.name.trim())
        ?.filter((e) => e?.length > 0) ?? [];
    return e?.length > 0 ? e : this.GetDeveloperNames();
  }
  GetAllCreatorClanIDs() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo
        ? Eo([
            ...this.m_BasicInfo.developers,
            ...this.m_BasicInfo.publishers,
            ...this.m_BasicInfo.franchises,
          ])
        : []
    );
  }
  GetAllPublisherCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? Eo(this.m_BasicInfo.publishers) : []
    );
  }
  GetAllDeveloperCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? Eo(this.m_BasicInfo.developers) : []
    );
  }
  GetAllFranchiseCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? Eo(this.m_BasicInfo.franchises) : []
    );
  }
  GetCapsuleHeadline() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.capsule_headline
    );
  }
  GetTags() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTags
    );
  }
  GetTagIDs() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTagIDs
    );
  }
  GetOptInRegistrationTagValues(e) {
    return (
      this.BCheckDataRequestIncluded({ include_optin_registration_tags: !0 }),
      this.m_rgOptInRegistrationTags?.find((t) => t.optin_name === e)?.values ??
        []
    );
  }
  BHasTags() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTagIDs?.length > 0
    );
  }
  GetAssets() {
    return (
      this.BCheckDataRequestIncluded({ include_assets: !0 }), this.m_Assets
    );
  }
  GetAssetsWithoutOverrides() {
    return (
      this.BCheckDataRequestIncluded({ include_assets_without_overrides: !0 }),
      this.m_AssetsWithoutOverrides
    );
  }
  GetOriginalReleaseDateRTime() {
    this.BCheckDataRequestIncluded({ include_release: !0 });
    let e = this.m_ReleaseInfo?.original_steam_release_date;
    return ((e ||= this.GetReleaseDateRTime()), e);
  }
  GetReleaseDateRTime(e = !1) {
    if (
      (this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.m_ReleaseInfo?.is_coming_soon && !e)
    )
      return 0;
    let t = this.m_ReleaseInfo?.steam_release_date;
    return ((t ||= this.m_ReleaseInfo?.original_release_date), t);
  }
  GetFormattedSteamReleaseDate() {
    if (
      (this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.m_ReleaseInfo?.is_coming_soon)
    ) {
      if (this.m_ReleaseInfo?.coming_soon_display)
        return zi(this.m_ReleaseInfo);
      if (this.m_ReleaseInfo?.custom_release_date_message)
        return this.m_ReleaseInfo.custom_release_date_message;
      let e = this.m_ReleaseInfo?.steam_release_date;
      return e
        ? this.m_ReleaseInfo?.is_abridged_release_date
          ? de(new Date(e * 1e3))
          : le(e)
        : ``;
    }
    let e = this.GetReleaseDateRTime();
    return e ? le(e) : ``;
  }
  BIsComingSoon() {
    return this.m_bIsComingSoon;
  }
  BIsCustomComingSoonDisplay() {
    return (
      this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.BIsComingSoon()
        ? this.m_ReleaseInfo?.coming_soon_display
          ? [`text_tba`, `text_comingsoon`].includes(
              this.m_ReleaseInfo.coming_soon_display,
            )
          : !!this.m_ReleaseInfo?.custom_release_date_message
        : !1
    );
  }
  BLimitedLaunchActive() {
    return this.m_ReleaseInfo?.limited_launch_active;
  }
  BIsPrePurchase() {
    return this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid;
  }
  BIsReleased() {
    return !this.BIsComingSoon();
  }
  GetPlatforms() {
    return (
      this.BCheckDataRequestIncluded({ include_platforms: !0 }),
      this.m_Platforms
    );
  }
  GetBestPurchaseOption() {
    return this.m_BestPurchaseOption;
  }
  GetBestPurchasePriceInCents() {
    if (this.m_BestPurchaseOption?.final_price_in_cents)
      return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
  }
  GetBestPurchasePriceFormatted() {
    return this.m_BestPurchaseOption?.formatted_final_price;
  }
  GetBestPurchaseOriginalPriceInCents() {
    return this.m_BestPurchaseOption?.original_price_in_cents
      ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
      : this.GetBestPurchasePriceInCents();
  }
  GetBestPurchaseOriginalPriceFormatted() {
    return (
      this.m_BestPurchaseOption?.formatted_original_price ??
      this.m_BestPurchaseOption?.formatted_final_price
    );
  }
  GetAllPurchaseOptions() {
    return (
      this.BCheckDataRequestIncluded({ include_all_purchase_options: !0 }),
      this.m_rgPurchaseOptions
    );
  }
  GetSelfPurchaseOption() {
    return this.m_SelfPurchaseOption;
  }
  BHasAgeSafeScreenshots() {
    return this.GetScreenshots(!0).length > 0;
  }
  GetScreenshots(e) {
    return (
      this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
      this.m_Screenshots
        ? e
          ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
          : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
        : []
    );
  }
  BIsAgeSafeScreenshot(e) {
    return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(e);
  }
  BHasTrailers(e) {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }),
      this.m_Trailers?.BHasTrailers(e)
    );
  }
  BHasHighlightTrailers(e) {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }),
      (this.m_Trailers?.GetHighlightTrailers(e)?.length ?? 0) > 0
    );
  }
  GetAllTrailers() {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }), this.m_Trailers
    );
  }
  BHasSomeLanguageSupport(e) {
    return (
      this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
      this.m_rgSupportedLanguages?.some(
        (t) => t.elanguage == e && (t.supported || t.subtitles || t.full_audio),
      ) || !1
    );
  }
  GetAllLanguagesWithSomeSupport() {
    return (
      this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
      this.m_rgSupportedLanguages
        ?.filter((e) => e.supported || e.subtitles || e.full_audio)
        .map((e) => e.elanguage) || []
    );
  }
  GetDataRequest() {
    return this.m_DataRequested;
  }
  GetMicroTrailer(e) {
    if (
      (this.BCheckDataRequestIncluded({ include_trailers: !0 }),
      this.m_Trailers)
    ) {
      let t = this.m_Trailers
        .GetAllTrailers(e)
        .find((e) => !!e.GetMicroTrailer());
      if (t) return t.GetMicroTrailer();
    }
    return null;
  }
  GetLinks() {
    return (
      this.BCheckDataRequestIncluded({ include_links: !0 }), this.m_rgLinks
    );
  }
  GetUserFilterFailure() {
    return (
      this.BCheckDataRequestIncluded({ apply_user_filters: !0 }),
      this.m_userFilterFailure
    );
  }
  ReplaceBestPurchaseOption(e) {
    this.m_BestPurchaseOption = e;
  }
  GetInternalName() {
    return this.m_strInternalName;
  }
};
function Eo(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
var Do = class {
    m_strMainCapsuleURL;
    m_strSmallCapsuleURL;
    m_strHeaderURL;
    m_strPackageHeaderURL;
    m_strPageBackgroundURL;
    m_strRawPageBackgroundURL;
    m_strHeroCapsuleURL;
    m_strHeroCapsuleURL_2x;
    m_strLibraryCapsuleURL;
    m_strLibraryCapsuleURL_2x;
    m_strLibraryHeroURL;
    m_strLibraryHeroURL_2x;
    m_strCommunityIcon;
    m_strCommunityIcon_Full;
    constructor(e, t) {
      let n = e.asset_url_format();
      (n &&
        (e.main_capsule() &&
          (this.m_strMainCapsuleURL = this.ConstructAssetURL(
            n,
            e.main_capsule(),
          )),
        e.small_capsule() &&
          (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
            n,
            e.small_capsule(),
          )),
        e.header() &&
          (this.m_strHeaderURL = this.ConstructAssetURL(n, e.header())),
        e.package_header() &&
          (this.m_strPackageHeaderURL = this.ConstructAssetURL(
            n,
            e.package_header(),
          )),
        e.raw_page_background() &&
          (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
            n,
            e.raw_page_background(),
          )),
        e.hero_capsule() &&
          (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
            n,
            e.hero_capsule(),
          )),
        e.hero_capsule_2x() &&
          (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
            n,
            e.hero_capsule_2x(),
          )),
        e.library_capsule() &&
          (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
            n,
            e.library_capsule(),
          )),
        e.library_capsule_2x() &&
          (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
            n,
            e.library_capsule_2x(),
          )),
        e.library_hero() &&
          (this.m_strLibraryHeroURL = this.ConstructAssetURL(
            n,
            e.library_hero(),
          )),
        e.library_hero_2x() &&
          (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
            n,
            e.library_hero_2x(),
          ))),
        e.community_icon() &&
          ((this.m_strCommunityIcon = `${x.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`),
          (this.m_strCommunityIcon_Full = `${x.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}_full.jpg`)),
        e.page_background_path() &&
          (this.m_strPageBackgroundURL = `${x.STORE_CDN_URL}images/storepagebackground/${e.page_background_path()}`));
    }
    GetMainCapsuleURL() {
      return this.m_strMainCapsuleURL;
    }
    GetSmallCapsuleURL() {
      return this.m_strSmallCapsuleURL;
    }
    GetHeaderURL() {
      return this.m_strHeaderURL;
    }
    GetPackageHeaderURL() {
      return this.m_strPackageHeaderURL;
    }
    GetPageBackgroundURL() {
      return this.m_strPageBackgroundURL;
    }
    GetRawPageBackgroundURL() {
      return this.m_strRawPageBackgroundURL;
    }
    GetHeroCapsuleURL() {
      return this.m_strHeroCapsuleURL;
    }
    GetHeroCapsuleURL_2x() {
      return this.m_strHeroCapsuleURL_2x;
    }
    GetLibraryCapsuleURL() {
      return this.m_strLibraryCapsuleURL;
    }
    GetLibraryCapsuleURL_2x() {
      return this.m_strLibraryCapsuleURL_2x;
    }
    GetLibraryHeroURL() {
      return this.m_strLibraryHeroURL;
    }
    GetLibraryHeroURL_2x() {
      return this.m_strLibraryHeroURL_2x;
    }
    ConstructAssetURL(e, t) {
      return (
        x.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        e.replace("${FILENAME}", t)
      );
    }
    GetCommunityIconURL() {
      return this.m_strCommunityIcon;
    }
    GetCommunityIconURL_Full() {
      return this.m_strCommunityIcon_Full;
    }
  },
  Oo = class {
    m_mapTrailer;
    m_highlightTrailers;
    m_highlightTrailersAllAges;
    m_otherTrailers;
    m_otherTrailersAllAges;
    constructor(e) {
      ((this.m_highlightTrailers = e.highlights()?.map((e) => new ko(e)) ?? []),
        (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
          (e) => e.BIsAllAges(),
        )),
        (this.m_otherTrailers =
          e.other_trailers()?.map((e) => new ko(e)) ?? []),
        (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((e) =>
          e.BIsAllAges(),
        )),
        (this.m_mapTrailer = new Map(
          [...this.m_highlightTrailers, ...this.m_otherTrailers].map((e) => [
            e.GetTrailerID(),
            e,
          ]),
        )));
    }
    BHasTrailers(e) {
      return e
        ? this.m_highlightTrailersAllAges.length > 0 ||
            this.m_otherTrailersAllAges.length > 0
        : this.m_highlightTrailers.length > 0 ||
            this.m_otherTrailers.length > 0;
    }
    GetHighlightTrailers(e) {
      return e ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
    }
    GetOtherTrailers(e) {
      return e ? this.m_otherTrailersAllAges : this.m_otherTrailers;
    }
    GetAllTrailers(e) {
      return [...this.GetHighlightTrailers(e), ...this.GetOtherTrailers(e)];
    }
    GetTrailerByID(e) {
      return this.m_mapTrailer.get(e);
    }
  },
  ko = class {
    m_strTrailerName;
    m_eTrailerCategory;
    m_nBaseID;
    m_MicroTrailer;
    m_rgDashTrailers;
    m_rgHlsTrailer;
    m_strScreenshotMedium;
    m_strScreenshotFull;
    m_bIsAllAges;
    m_strCaptionManifest;
    constructor(e) {
      ((this.m_strTrailerName = e.trailer_name()),
        (this.m_nBaseID = e.trailer_base_id()),
        (this.m_eTrailerCategory = e.trailer_category()));
      let t = e.trailer_url_format();
      if (
        (t &&
          (e.microtrailer() &&
            (this.m_MicroTrailer = this.ExtractTrailerFormats(
              t,
              e.microtrailer(),
            )),
          e.screenshot_medium() &&
            (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
              t,
              e.screenshot_medium(),
            )),
          e.screenshot_full() &&
            (this.m_strScreenshotFull = this.ConstructScreenshotURL(
              t,
              e.screenshot_full(),
            ))),
        e.adaptive_trailers())
      ) {
        this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
          e.adaptive_trailers(),
          `dash`,
        );
        let t = this.ExtractAdaptiveTrailers(e.adaptive_trailers(), `hls`);
        t.length > 0 && (this.m_rgHlsTrailer = t[0]);
      }
      ((this.m_bIsAllAges = e.all_ages() ?? !0),
        (this.m_strCaptionManifest = Co(e)));
    }
    GetName() {
      return this.m_strTrailerName;
    }
    GetTrailerID() {
      return this.m_nBaseID;
    }
    GetTrailerCategory() {
      return this.m_eTrailerCategory;
    }
    GetTrailersDash() {
      return this.m_rgDashTrailers;
    }
    GetTrailerHls() {
      return this.m_rgHlsTrailer;
    }
    GetMicroTrailer() {
      return this.m_MicroTrailer;
    }
    GetScreenshot() {
      return this.m_strScreenshotFull
        ? this.m_strScreenshotFull
        : this.m_strScreenshotMedium;
    }
    BIsAllAges() {
      return this.m_bIsAllAges;
    }
    GetCaptionManifest() {
      return this.m_strCaptionManifest;
    }
    ExtractTrailerFormats(e, t) {
      let n = {};
      return (
        t.forEach((t) => {
          t.type() == `video/mp4`
            ? (n.strMP4URL = this.ConstructAssetURL(e, t.filename()))
            : t.type() == `video/webm` &&
              (n.strWebMURL = this.ConstructAssetURL(e, t.filename()));
        }),
        n
      );
    }
    ExtractAdaptiveTrailers(e, t) {
      let n = `${t}_`,
        r = e.filter(
          (e) => e.encoding() && e.cdn_path() && e.encoding().startsWith(n),
        ),
        i = r.findIndex((e) => e.encoding().endsWith(`_av1`));
      return (
        i > 0 && oe(r, i, 0),
        r.map((e) => this.ConstructAssetURL(e.cdn_path(), ``))
      );
    }
    ConstructScreenshotURL(e, t) {
      return (
        x.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        e.replace("${FILENAME}", t)
      );
    }
    ConstructAssetURL(e, t) {
      return x.VIDEO_CDN_URL + `/store_trailers/` + e.replace("${FILENAME}", t);
    }
  },
  Ao = class {
    m_rgAllScreenshots;
    m_rgOnlyAllAgesScreenshots;
    constructor(e) {
      let t = e.all_ages_screenshots() || [],
        n = e.mature_content_screenshots() || [],
        r = (e) => x.BASE_URL_SHARED_CDN + `/store_item_assets/` + e.filename();
      ((this.m_rgOnlyAllAgesScreenshots = t.map(r)),
        (this.m_rgAllScreenshots = [...t, ...n]
          .sort((e, t) => e.ordinal() - t.ordinal())
          .map(r)));
    }
    GetAllAgesAndMatureScreenshots() {
      return this.m_rgAllScreenshots;
    }
    GetOnlyAllAgesScreenshots() {
      return this.m_rgOnlyAllAgesScreenshots;
    }
  };
function jo(e) {
  if (e)
    switch (e.item_type) {
      case 0:
        return { appid: e.appid };
      case 1:
        return { packageid: e.id };
      case 2:
        return { bundleid: e.id };
      case 4:
        return { tagid: e.id };
      case 5:
        return { creatorid: e.id };
      case 6:
        return { hubcategoryid: e.id };
      case 7:
        return e.gid ? { salepagegid: e.gid } : void 0;
      case 3:
      case -1:
        return;
      default:
        Se(
          e.item_type,
          `Unknown EStoreItemType ${e.item_type} ${ke(e.item_type)} `,
        );
        return;
    }
}
function Mo(e, t) {
  typeof window < `u` && (window[e] = t);
}
function K(e, t) {
  return e
    ? t
      ? {
          include_assets: e.include_assets || t.include_assets,
          include_release: e.include_release || t.include_release,
          include_platforms: e.include_platforms || t.include_platforms,
          include_all_purchase_options:
            e.include_all_purchase_options || t.include_all_purchase_options,
          include_screenshots: e.include_screenshots || t.include_screenshots,
          include_trailers: e.include_trailers || t.include_trailers,
          include_ratings: e.include_ratings || t.include_ratings,
          include_tag_count:
            Math.max(e.include_tag_count || 0, t.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
          include_full_description:
            e.include_full_description || t.include_full_description,
          include_included_items:
            e.include_included_items || t.include_included_items,
          include_assets_without_overrides:
            e.include_assets_without_overrides ||
            t.include_assets_without_overrides,
          apply_user_filters: e.apply_user_filters || t.apply_user_filters,
          include_links: e.include_links || t.include_links,
          include_extra_details:
            e.include_extra_details || t.include_extra_details,
          include_optin_registration_tags:
            e.include_optin_registration_tags ||
            t.include_optin_registration_tags,
        }
      : e
    : t;
}
async function No(e, t) {
  let n = await e,
    r = await t;
  return n == 1 ? r : n;
}
var Po = class e {
  k_QueueWaitUntilRequestMS = 5;
  k_nMaxBatchSize = 250;
  m_bReturnUnavailableItems = !1;
  m_mapApps = new Map();
  m_mapPackages = new Map();
  m_mapBundles = new Map();
  m_mapTags = new Map();
  m_mapCreators = new Map();
  m_mapHubCategories = new Map();
  m_setUnavailableApps = new Set();
  m_setUnavailablePackages = new Set();
  m_setUnavailableBundles = new Set();
  m_setUnavailableTags = new Set();
  m_setUnavailableCreators = new Set();
  m_setUnavailableHubCategories = new Set();
  m_setUnavailableDueToCountryRestrictionApps = new Set();
  m_setUnavailableDueToCountryRestrictionPackages = new Set();
  m_setUnavailableDueToCountryRestrictionBundles = new Set();
  m_mapAppsInFlight = new Map();
  m_mapPackageInFlight = new Map();
  m_mapBundleInFlight = new Map();
  m_mapTagsInFlight = new Map();
  m_mapCreatorsInFlight = new Map();
  m_mapHubCategoriesInFlight = new Map();
  m_serviceTransport;
  m_bUsePartnerAPI = !1;
  m_bInitialized = !1;
  m_bActivelyResettingCache = !1;
  m_setPendingAppInfo = new Set();
  m_setPendingBundleInfo = new Set();
  m_setPendingPackageInfo = new Set();
  m_setPendingTagInfo = new Set();
  m_setPendingCreatorInfo = new Set();
  m_setPendingHubCategoryInfo = new Set();
  m_setPendingDataRequest = {};
  m_PendingInfoPromise;
  m_PendingInfoResolve = void 0;
  m_PendingTimer = void 0;
  k_AlreadyResolvedOK = Promise.resolve(1);
  k_AlreadyResolvedInvalid = Promise.resolve(8);
  k_AlreadyResolvedBusy = Promise.resolve(10);
  static sm_instance;
  static Get() {
    return (
      e.sm_instance ||
        ((e.sm_instance = new e()), Mo(`StoreItemCache`, e.sm_instance)),
      e.sm_instance
    );
  }
  static Initialize(t, n) {
    let r = e.Get();
    return (
      v(
        !r.m_bInitialized,
        `CStoreItemCache was already initialized; initialize it only once.`,
      ),
      (r.m_serviceTransport = t),
      (r.m_bUsePartnerAPI = !!n),
      (r.m_bInitialized = !0),
      () => {
        ((r.m_serviceTransport = void 0),
          (r.m_bUsePartnerAPI = !1),
          (r.m_bInitialized = !1));
      }
    );
  }
  SetSteamInterface(e) {
    this.SetServiceTransport(e.GetServiceTransport());
  }
  SetServiceTransport(e) {
    this.m_serviceTransport = e;
  }
  SetReturnUnavailableItems(e) {
    this.m_bReturnUnavailableItems = e;
  }
  GetReturnUnavailableItems() {
    return this.m_bReturnUnavailableItems;
  }
  async ResetCache() {
    ((this.m_bActivelyResettingCache = !0), this.FlushPendingInfo());
    let e = [];
    (this.m_mapAppsInFlight.forEach((t) => {
      e.push(t.promise);
    }),
      this.m_mapBundleInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      this.m_mapPackageInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      this.m_mapTagsInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      this.m_mapCreatorsInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      this.m_mapHubCategoriesInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      await Promise.all(e),
      this.m_mapApps.clear(),
      this.m_mapBundles.clear(),
      this.m_mapPackages.clear(),
      this.m_mapTagsInFlight.clear(),
      this.m_mapCreatorsInFlight.clear(),
      this.m_mapHubCategoriesInFlight.clear(),
      (this.m_bActivelyResettingCache = !1));
  }
  static BIsInitialized() {
    return e.Get().m_bInitialized;
  }
  static k_DataRequest_CommonOnly = {};
  static k_DataRequest_BasicInfo = { include_basic_info: !0 };
  static k_DataRequest_Assets = { include_assets: !0 };
  static k_DataRequest_IncludeAll = {
    include_assets: !0,
    include_release: !0,
    include_platforms: !0,
    include_all_purchase_options: !0,
    include_screenshots: !0,
    include_trailers: !0,
    include_ratings: !0,
    include_tag_count: 20,
    include_reviews: !0,
    include_basic_info: !0,
    include_supported_languages: !0,
    include_full_description: !0,
    include_links: !0,
  };
  async QueueAppRequest(e, t) {
    return this.QueueStoreItemRequest(e, 0, t);
  }
  async QueuePackageRequest(e, t) {
    return this.QueueStoreItemRequest(e, 1, t);
  }
  async QueueBundleRequest(e, t) {
    return this.QueueStoreItemRequest(e, 2, t);
  }
  async QueueTagRequest(e, t) {
    return this.QueueStoreItemRequest(e, 4, t);
  }
  async QueueCreatorRequest(e, t) {
    return this.QueueStoreItemRequest(e, 5, t);
  }
  async QueueHubCategoryRequest(e, t) {
    return this.QueueStoreItemRequest(e, 6, t);
  }
  static ValidateDataRequest(e) {
    let t = [
      e.include_assets,
      e.include_release,
      e.include_platforms,
      e.include_all_purchase_options,
      e.include_screenshots,
      e.include_trailers,
      e.include_ratings,
      e.include_reviews,
      e.include_basic_info,
      e.include_supported_languages,
      e.include_full_description,
      e.include_links,
    ];
    for (let e of t) if (e !== !0 && e !== void 0) return !1;
    return !0;
  }
  async QueueMultipleAppRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 0, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultiplePackageRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 1, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleBundleRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 2, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleTagRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 4, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleCreatorRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 5, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleHubCategoryRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 6, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleStoreItemRequests(e, t, n) {
    if (!e || e.length == 0) return 1;
    let r = (
      await Promise.all(e.map((e, r) => this.QueueStoreItemRequest(e, t[r], n)))
    ).filter((e) => e != 1);
    return r.length > 0 ? r[0] : 1;
  }
  async QueueStoreItemRequest(t, n, r) {
    if (
      (v(
        e.ValidateDataRequest(r),
        `Invalid Data Request: ` + JSON.stringify(r),
      ),
      typeof t == `string` && (t = parseInt(t)),
      this.m_bActivelyResettingCache)
    )
      return (
        console.log(
          `Rejecting store item request due to currently clearing the cache`,
        ),
        this.k_AlreadyResolvedBusy
      );
    if (!t)
      return (
        v(!t, `unexpected id ${t} of zero or undefined for type ${n}`),
        this.k_AlreadyResolvedInvalid
      );
    let i = this.GetPreviousSupersetLoadPromise(t, n, r);
    if (i) return i;
    switch (
      (this.m_PendingInfoPromise ||
        ((this.m_PendingInfoPromise = new Promise(
          (e) => (this.m_PendingInfoResolve = e),
        )),
        (this.m_PendingTimer = window.setTimeout(
          () => this.FlushPendingInfo(),
          this.k_QueueWaitUntilRequestMS,
        ))),
      (this.m_setPendingDataRequest = K(this.m_setPendingDataRequest, r)),
      n)
    ) {
      case 0:
        this.m_setPendingAppInfo.add(t);
        break;
      case 2:
        this.m_setPendingBundleInfo.add(t);
        break;
      case 1:
        this.m_setPendingPackageInfo.add(t);
        break;
      case 4:
        this.m_setPendingTagInfo.add(t);
        break;
      case 5:
        this.m_setPendingCreatorInfo.add(t);
        break;
      case 6:
        this.m_setPendingHubCategoryInfo.add(t);
        break;
      default:
        v(!1, `Unexpected Type ${n}`);
    }
    let a = this.m_PendingInfoPromise;
    return (
      this.m_setPendingAppInfo.size +
        this.m_setPendingPackageInfo.size +
        this.m_setPendingBundleInfo.size >=
        this.k_nMaxBatchSize &&
        (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
        this.FlushPendingInfo()),
      a
    );
  }
  async FlushPendingInfo() {
    if (this.m_PendingInfoResolve === void 0) return;
    let e = this.m_PendingInfoResolve,
      t = Array.from(this.m_setPendingAppInfo),
      n = Array.from(this.m_setPendingPackageInfo),
      r = Array.from(this.m_setPendingBundleInfo),
      i = Array.from(this.m_setPendingTagInfo),
      a = Array.from(this.m_setPendingCreatorInfo),
      o = Array.from(this.m_setPendingHubCategoryInfo),
      s = this.m_setPendingDataRequest;
    ((this.m_PendingInfoPromise = void 0),
      (this.m_PendingInfoResolve = void 0),
      this.m_setPendingAppInfo.clear(),
      this.m_setPendingBundleInfo.clear(),
      this.m_setPendingPackageInfo.clear(),
      this.m_setPendingTagInfo.clear(),
      this.m_setPendingCreatorInfo.clear(),
      this.m_setPendingHubCategoryInfo.clear(),
      (this.m_setPendingDataRequest = {}),
      (this.m_PendingTimer = void 0),
      this.HintLoadStoreItems(t, n, r, i, a, o, s).then((t) => e(t)));
  }
  async HintLoadStoreApps(e, t) {
    return this.HintLoadStoreItems(e, null, null, null, null, null, t);
  }
  async HintLoadStorePackages(e, t) {
    return this.HintLoadStoreItems(null, e, null, null, null, null, t);
  }
  async HintLoadStoreBundles(e, t) {
    return this.HintLoadStoreItems(null, null, e, null, null, null, t);
  }
  GetPreviousSupersetLoadPromise(e, t, n) {
    if (this.BHasStoreItem(e, t, n) || this.BIsStoreItemMissing(e, t))
      return this.k_AlreadyResolvedOK;
    let r = null;
    switch (t) {
      case 0:
        r = this.m_mapAppsInFlight.get(e);
        break;
      case 1:
        r = this.m_mapPackageInFlight.get(e);
        break;
      case 2:
        r = this.m_mapBundleInFlight.get(e);
        break;
      case 4:
        r = this.m_mapTagsInFlight.get(e);
        break;
      case 5:
        r = this.m_mapCreatorsInFlight.get(e);
        break;
      case 6:
        r = this.m_mapHubCategoriesInFlight.get(e);
    }
    return r && To.BDataRequestContainsOtherDataRequest(r.dataRequest, n)
      ? r.promise
      : null;
  }
  async HintLoadStoreItems(e, t, n, r, i, a, o) {
    let s = null,
      c = new Promise((e) => (s = e)),
      l = [],
      u = [];
    ((e || []).forEach((e) => {
      let t = this.GetPreviousSupersetLoadPromise(e, 0, o);
      if (t) u.push(t);
      else {
        l.push(T.fromObject({ appid: e }));
        let t = K(this.GetStoreItemDataRequest(e, 0), o),
          n = this.m_mapAppsInFlight.get(e);
        ((t = K(n?.dataRequest, t)),
          n && u.push(n.promise),
          this.m_mapAppsInFlight.set(e, {
            promise: n ? No(n.promise, c) : c,
            dataRequest: t,
          }));
      }
    }),
      (t || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 1, o);
        if (t) u.push(t);
        else {
          l.push(T.fromObject({ packageid: e }));
          let t = K(this.GetStoreItemDataRequest(e, 1), o),
            n = this.m_mapPackageInFlight.get(e);
          ((t = K(n?.dataRequest, t)),
            n && u.push(n.promise),
            this.m_mapPackageInFlight.set(e, {
              promise: n ? No(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }),
      (n || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 2, o);
        if (t) u.push(t);
        else {
          l.push(T.fromObject({ bundleid: e }));
          let t = K(this.GetStoreItemDataRequest(e, 2), o),
            n = this.m_mapBundleInFlight.get(e);
          ((t = K(n?.dataRequest, t)),
            n && u.push(n.promise),
            this.m_mapBundleInFlight.set(e, {
              promise: n ? No(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }),
      (r || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 4, o);
        if (t) u.push(t);
        else {
          l.push(T.fromObject({ tagid: e }));
          let t = K(this.GetStoreItemDataRequest(e, 4), o),
            n = this.m_mapTagsInFlight.get(e);
          ((t = K(n?.dataRequest, t)),
            n && u.push(n.promise),
            this.m_mapTagsInFlight.set(e, {
              promise: n ? No(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }),
      (i || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 5, o);
        if (t) u.push(t);
        else {
          l.push(T.fromObject({ creatorid: e }));
          let t = K(this.GetStoreItemDataRequest(e, 5), o),
            n = this.m_mapCreatorsInFlight.get(e);
          ((t = K(n?.dataRequest, t)),
            n && u.push(n.promise),
            this.m_mapCreatorsInFlight.set(e, {
              promise: n ? No(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }),
      (a || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 6, o);
        if (t) u.push(t);
        else {
          l.push(T.fromObject({ hubcategoryid: e }));
          let t = K(this.GetStoreItemDataRequest(e, 6), o),
            n = this.m_mapHubCategoriesInFlight.get(e);
          ((t = K(n?.dataRequest, t)),
            n && u.push(n.promise),
            this.m_mapHubCategoriesInFlight.set(e, {
              promise: n ? No(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }));
    let d = 1;
    if (
      (l.length > 0 && (d = await this.InternalHandleLoadStoreItems(l, o)),
      s(d),
      u.length > 0)
    ) {
      let e = await Promise.all(u);
      for (let t of e) t != 1 && d == 1 && (d = t);
    }
    return (
      (e || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
      (t || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
      (n || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
      (r || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
      (i || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
      (a || []).forEach((e) => this.m_mapHubCategoriesInFlight.delete(e)),
      d
    );
  }
  MarkStoreItemIDUnavailable(e) {
    (e || []).forEach((e) => {
      e.appid()
        ? (this.m_setUnavailableApps.add(e.appid()),
          this.m_mapApps.delete(e.appid()))
        : e.packageid()
          ? (this.m_setUnavailablePackages.add(e.packageid()),
            this.m_mapPackages.delete(e.packageid()))
          : e.bundleid()
            ? (this.m_setUnavailableBundles.add(e.bundleid()),
              this.m_mapBundles.delete(e.bundleid()))
            : e.tagid()
              ? (this.m_setUnavailableTags.add(e.tagid()),
                this.m_mapTags.delete(e.tagid()))
              : e.creatorid()
                ? (this.m_setUnavailableCreators.add(e.creatorid()),
                  this.m_mapCreators.delete(e.creatorid()))
                : e.hubcategoryid() &&
                  (this.m_setUnavailableHubCategories.add(e.hubcategoryid()),
                  this.m_mapHubCategories.delete(e.hubcategoryid()));
    });
  }
  SortStoreItems(e) {
    let t = e.slice();
    return (
      t.sort((e, t) => {
        let n = e.appid() ?? 0,
          r = t.appid() ?? 0;
        if (n != r) return n - r;
        let i = e.packageid() ?? 0,
          a = t.packageid() ?? 0;
        if (i != a) return i - a;
        let o = e.bundleid() ?? 0,
          s = t.bundleid() ?? 0;
        if (o != s) return o - s;
        let c = e.tagid() ?? 0,
          l = t.tagid() ?? 0;
        if (c != l) return c - l;
        let u = e.creatorid() ?? 0,
          d = t.creatorid() ?? 0;
        if (u != d) return u - d;
        let f = e.hubcategoryid() ?? 0,
          p = t.hubcategoryid() ?? 0;
        return f == p ? 0 : f - p;
      }),
      t
    );
  }
  GetServiceTransport() {
    return (
      (this.m_serviceTransport ||=
        (console.warn(`Service transport not initialized for StoreItemCache`),
        Je(new Ze(x.WEBAPI_BASE_URL)).GetAnonymousServiceTransport())),
      this.m_serviceTransport
    );
  }
  async InternalHandleLoadStoreItems(e, t) {
    let n = 1;
    ((e = this.SortStoreItems(e)),
      t.include_included_items &&
        (t = {
          ...t,
          included_item_data_request: { ...t, include_included_items: !1 },
        }));
    let r = [];
    try {
      let i = [];
      for (; e.length > 0;) {
        let n = e.splice(0, this.k_nMaxBatchSize);
        if ((r.push(n), this.m_bUsePartnerAPI)) {
          let e = Ce.Init(ur);
          e.Body().set_include_unpublished(!1);
          let r = e.Body().getitems_request(!0);
          (r.set_context(Jr(this.m_bUsePartnerAPI)),
            r.set_data_request(w.fromObject(t)),
            r.set_ids(n),
            i.push(mr.GetItems(this.GetServiceTransport(), e)));
        } else {
          let e = Ce.Init(ee);
          (qr(e, this.m_bUsePartnerAPI),
            Yr(e, t),
            e.Body().set_ids(n),
            i.push(m.GetItems(this.GetServiceTransport(), e)));
        }
      }
      (await Promise.all(i)).forEach((i, a) => {
        i.GetEResult() == 1
          ? i
              .Body()
              .store_items()
              .forEach((n) => {
                let r = n.id(),
                  a = n.item_type(),
                  o = this.m_bReturnUnavailableItems && n.success() == 15,
                  s = n.success() == 1 && !this.BIsStoreItemMissing(r, a);
                if (o || s) this.ReadItem(n, t);
                else {
                  switch (a) {
                    case 0:
                      (this.m_setUnavailableApps.add(r),
                        this.m_mapApps.delete(r));
                      break;
                    case 1:
                      (this.m_setUnavailablePackages.add(r),
                        this.m_mapPackages.delete(r));
                      break;
                    case 2:
                      (this.m_setUnavailableBundles.add(r),
                        this.m_mapBundles.delete(r));
                      break;
                    case 4:
                      (this.m_setUnavailableTags.add(r),
                        this.m_mapTags.delete(r));
                      break;
                    case 5:
                      (this.m_setUnavailableCreators.add(r),
                        this.m_mapCreators.delete(r));
                      break;
                    case 6:
                      (this.m_setUnavailableHubCategories.add(r),
                        this.m_mapHubCategories.delete(r));
                      break;
                    default:
                      console.error(
                        `CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response ` +
                          a +
                          ` ` +
                          r,
                      );
                  }
                  if (n.unvailable_for_country_restriction())
                    switch (a) {
                      case 0:
                        this.m_setUnavailableDueToCountryRestrictionApps.add(r);
                        break;
                      case 1:
                        this.m_setUnavailableDueToCountryRestrictionPackages.add(
                          r,
                        );
                        break;
                      case 2:
                        this.m_setUnavailableDueToCountryRestrictionBundles.add(
                          r,
                        );
                        break;
                      case 4:
                      case 5:
                      case 6:
                        console.error(
                          `CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: ` +
                            i.GetEResult() +
                            ` message: ` +
                            i.Hdr().error_message(),
                          ce(e),
                        );
                    }
                }
              })
          : (console.warn(
              `CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: ` +
                i.GetEResult() +
                ` message: ` +
                i.Hdr().error_message(),
              ce(e),
            ),
            (i.Hdr().transport_error() == 1 || x.FROM_WEB) &&
              this.MarkStoreItemIDUnavailable(r[a]),
            n == 1 && (n = i.GetEResult()));
      });
    } catch (e) {
      let t = I(e);
      return (
        console.error(
          `CStoreItemCache::InternalHandleLoadStoreItems failed: ` +
            t.strErrorMsg,
          t,
        ),
        r.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
        79
      );
    }
    return n;
  }
  GetMapForType(e) {
    let t;
    switch (e) {
      case 0:
        t = this.m_mapApps;
        break;
      case 2:
        t = this.m_mapBundles;
        break;
      case 1:
        t = this.m_mapPackages;
        break;
      case 4:
        t = this.m_mapTags;
        break;
      case 5:
        t = this.m_mapCreators;
        break;
      case 6:
        t = this.m_mapHubCategories;
        break;
      default:
        console.error(`Invalid map type requested`, e);
    }
    return t;
  }
  BHasStoreItem(e, t, n) {
    let r = this.GetMapForType(t);
    return !(!r || !r.has(e) || (n && !r.get(e).BContainDataRequest(n)));
  }
  GetStoreItem(e, t) {
    if (t != -1 && t != 3) return this.GetMapForType(t)?.get(e);
  }
  GetStoreItemWithLegacyVisibilityCheck(e, t) {
    let n = this.GetStoreItem(e, t);
    return n && (this.m_bReturnUnavailableItems || n.BIsVisible()) ? n : void 0;
  }
  GetStoreItemDataRequest(e, t) {
    return this.GetMapForType(t)?.get(e)?.GetDataRequest() || null;
  }
  BHasApp(e, t) {
    return this.BHasStoreItem(e, 0, t);
  }
  GetApp(e) {
    return this.GetStoreItem(e, 0);
  }
  BHasPackage(e, t) {
    return this.BHasStoreItem(e, 1, t);
  }
  GetPackage(e) {
    return this.GetStoreItem(e, 1);
  }
  BHasBundle(e, t) {
    return this.BHasStoreItem(e, 2, t);
  }
  GetBundle(e) {
    return this.GetStoreItem(e, 2);
  }
  BHasTag(e, t) {
    return this.BHasStoreItem(e, 4, t);
  }
  GetTag(e) {
    return this.GetStoreItem(e, 4);
  }
  BHasCreator(e, t) {
    return this.BHasStoreItem(e, 5, t);
  }
  GetCreator(e) {
    return this.GetStoreItem(e, 5);
  }
  BHasHubCategory(e, t) {
    return this.BHasStoreItem(e, 6, t);
  }
  GetHubCategory(e) {
    return this.GetStoreItem(e, 6);
  }
  BIsStoreItemMissing(e, t) {
    switch (t) {
      case 0:
        return this.BIsAppMissing(e);
      case 1:
        return this.BIsPackageMissing(e);
      case 2:
        return this.BIsBundleMissing(e);
      case 4:
        return this.BIsTagMissing(e);
      case 5:
        return this.BIsCreatorMissing(e);
      case 6:
        return this.BIsHubCategoryMissing(e);
      default:
        return (console.error(`BStoreItemMissing invalid type`, t), !0);
    }
  }
  BIsAppMissing(e) {
    return this.m_setUnavailableApps.has(e);
  }
  BIsPackageMissing(e) {
    return this.m_setUnavailablePackages.has(e);
  }
  BIsBundleMissing(e) {
    return this.m_setUnavailableBundles.has(e);
  }
  BIsTagMissing(e) {
    return this.m_setUnavailableTags.has(e);
  }
  BIsCreatorMissing(e) {
    return this.m_setUnavailableCreators.has(e);
  }
  BIsHubCategoryMissing(e) {
    return this.m_setUnavailableHubCategories.has(e);
  }
  BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
    switch (t) {
      case 0:
        return this.BIsAppUnavailableDueToCountryRestriction(e);
      case 1:
        return this.BIsPackageUnavailableDueToCountryRestriction(e);
      case 2:
        return this.BIsBundleUnavailableDueToCountryRestriction(e);
      case 4:
      case 5:
      case 6:
        return (
          console.error(
            `BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: `,
            t,
          ),
          !0
        );
      default:
        return (console.error(`BStoreItemMissing invalid type`, t), !0);
    }
  }
  BIsAppUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
  }
  BIsPackageUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
  }
  BIsBundleUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
  }
  ReadResults(e, t) {
    let n = [];
    for (let r of e) n.push(this.ReadItem(r, t));
    return n;
  }
  ReadItem(e, t) {
    let n = e.item_type(),
      r = null;
    if (n === void 0)
      return (console.warn(`Failed to load item data: ${e.success()}`), null);
    switch (n) {
      case 0:
        r = this.m_mapApps;
        break;
      case 1:
        r = this.m_mapPackages;
        break;
      case 2:
        r = this.m_mapBundles;
        break;
      case 4:
        r = this.m_mapTags;
        break;
      case 5:
        r = this.m_mapCreators;
        break;
      case 6:
        r = this.m_mapHubCategories;
        break;
      default:
        return (console.error(`Invalid item type: ${n}`), null);
    }
    let i = r.get(e.id());
    if (
      (i ? i.MergeData(e, t) : ((i = new To(e, t)), r.set(e.id(), i)),
      t.include_included_items && e.included_items(!1))
    ) {
      let n = t.included_item_data_request ?? {
        ...t,
        include_included_items: !1,
      };
      for (let t of e.included_items().included_apps()) this.ReadItem(t, n);
      for (let t of e.included_items().included_packages()) this.ReadItem(t, n);
    }
    return i;
  }
};
b([h], Po.prototype, `ReadItem`, null);
var Fo = {
  unknown: 0,
  "store.steampowered.com": 1,
  "steamcommunity.com": 2,
  global: 3,
  default: 4,
  application: 5,
  subscription: 6,
  search: 7,
  cart: 8,
  app: 9,
  "global-nav": 10,
  "global-account": 11,
  storemenu: 12,
  "search-suggestion": 13,
  about: 14,
  suggest: 15,
  dlc: 16,
  "storemenu-recommendedtags": 17,
  creator: 18,
  "footer-genre-dropdown": 20,
  "footer-category-dropdown": 21,
  "footer-about-dropdown": 22,
  "footer-help-dropdown": 23,
  "footer-publisher-catalogs": 24,
  wishlist: 25,
  stats: 26,
  spotlight: 40,
  message: 41,
  "marketing-message": 42,
  "daily-deal": 43,
  footer: 44,
  header: 45,
  name: 46,
  "more-details": 47,
  notification: 48,
  category: 49,
  steamdeck: 50,
  login: 60,
  prompt: 61,
  "join-steam": 62,
  "successful-login": 63,
  "successful-joinsteam": 64,
  recommendations: 70,
  categories: 71,
  hardware: 72,
  waystoplay: 73,
  specialsections: 74,
  more: 75,
  "big-category-link": 76,
  "small-category-link": 77,
  "package-purchase-recommendations": 78,
  popular: 79,
  recent: 80,
  "main-cluster": 100,
  "featured-win-games": 101,
  "featured-mac-games": 102,
  "tab-NewReleases": 103,
  "tab-TopSellers": 104,
  "tab-ComingSoon": 105,
  "tab-Discounts": 106,
  "smallcap-videos": 107,
  "smallcap-demos": 108,
  "home-headlines": 109,
  "community-activity": 110,
  "home-underten": 111,
  "home-specials": 112,
  "home-partners": 113,
  "home-steam-install": 114,
  "community-activity-recentlyplayed": 115,
  "community-activity-recentlybought": 116,
  "promo-banner": 117,
  "promo-takeover": 118,
  "featured-linux-games": 119,
  "updated-games": 120,
  "featured-updated-games": 121,
  "discovery-queue": 122,
  "new-on-steam": 123,
  "curated-app": 124,
  "home-gutter": 125,
  "upcoming-queue": 126,
  "home-specials-under10": 127,
  "main-cluster-recommended": 128,
  "main-cluster-topseller": 129,
  "main-cluster-newonsteam": 130,
  "recommended-spotlight": 131,
  "hardware-promo": 132,
  "popular-new-on-steam": 133,
  "main-cluster-recommended-byfriends": 134,
  "main-cluster-recommended-bycurators": 135,
  "main-cluster-recenttopseller": 136,
  "home-under10": 137,
  "friends-trending": 138,
  "spotlight-specials": 139,
  "curator-recommended": 140,
  "best-selling-vr": 141,
  "creator-recommendations": 142,
  "live-broadcast": 143,
  "main-cluster-followed-creator": 144,
  "tab-PopularNewReleases": 145,
  "home-big-blue-buttons": 146,
  "home-banner": 147,
  "top-new-releases": 148,
  "curated-main-app": 149,
  "search-results": 150,
  query: 151,
  "search-share": 152,
  genre: 200,
  "large-cluster": 201,
  "find-more": 202,
  "friend-activity": 203,
  specials: 2300,
  breadcrumbs: 205,
  freestuff: 220,
  demos: 1900,
  "tab-NewDemos": 222,
  "tab-TopDemos": 223,
  "browse-demos": 224,
  videos: 100002,
  "popular-videos": 226,
  "tab-NewVideos": 227,
  browse: 230,
  mac: 231,
  under10: 232,
  under5: 233,
  publisher: 234,
  publishers: 235,
  "publisher-listing": 236,
  tag: 237,
  gettaggames: 238,
  explore: 239,
  "browse-tags": 240,
  tags: 241,
  "content-hub-carousel": 242,
  Action: 250,
  Adventure: 251,
  Strategy: 252,
  RPG: 253,
  Indie: 254,
  "Massively Multiplayer": 255,
  Casual: 256,
  Family: 257,
  Simulation: 258,
  Racing: 259,
  Sports: 260,
  recommended: 300,
  "recommendation-main": 301,
  "friend-recommendations": 302,
  "recommended-friendplaytime": 303,
  "recommended-recentlyviewed": 304,
  "recommended-morerecentlyviewed": 305,
  "recommended-genrehighlights": 306,
  morelike: 307,
  "morelike-mainitem": 308,
  "friendactivity.js": 309,
  "friendactivity-wishlist-spotlight": 310,
  "friendactivity-purchases": 311,
  "friendactivity-playedandwanted": 312,
  byafriend: 313,
  "friend-recommendation": 314,
  ajaxgetfriendactivity: 315,
  "recommend-franchise": 316,
  "more-from-franchise": 317,
  "wishlist-capsule": 318,
  "game-highlights": 400,
  "recommend-game": 401,
  "view-own-recommendation": 402,
  "game-purchase": 403,
  "game-purchase-guide": 404,
  "game-purchase-dlc": 405,
  "game-friend-recommendations": 406,
  "game-add-to-wishlist": 407,
  "game-details": 408,
  "game-highlight-tags": 409,
  "game-tags-dialog": 410,
  "game-tags-yours": 411,
  "bundle-component-preview": 412,
  "dlc-parent-app-link": 413,
  "similar-recent-apps": 414,
  "demo-parent-app-link": 415,
  "package-purchase": 420,
  "package-contents": 421,
  "package-details": 422,
  "category-list": 423,
  bundle: 430,
  "bundle-contents": 431,
  "cart-remove-item": 500,
  "cart-items": 501,
  "cart-continue-shopping": 502,
  "cart-purchase": 503,
  "checkout-logo-abandon": 504,
  "checkout-success": 505,
  checkout: 506,
  gift: 507,
  self: 508,
  "checkout-complete-return": 509,
  "checkout-complete-logo": 510,
  purchaserequest: 511,
  display: 512,
  initial: 513,
  gifts: 514,
  "upsell-recommended": 520,
  "upsell-specials": 521,
  "external-site": 550,
  facebook: 551,
  twitter: 552,
  referral: 553,
  summersale: 600,
  prizebooth: 610,
  "activity-game-link": 611,
  "activity-game-discount": 612,
  "prize-info": 613,
  promotion: 614,
  sale: 615,
  "sale-item": 616,
  "sale-dailydeals": 617,
  "sale-publishers": 618,
  "sale-genres": 619,
  email: 620,
  "cart-icon": 621,
  "sale-category-links": 622,
  "sale-notification-callout": 623,
  "sale-yesterdaydeals": 624,
  "sale-flashsales": 625,
  "sale-fromyourwishlist": 626,
  "closed-beta-access": 627,
  "sale-tag-bucket": 628,
  "sale-hero": 629,
  "sale-franchises": 630,
  "sale-dlcforyou": 631,
  "sale-recommended-by-steam-labs": 632,
  "sale-recommended-by-deep-dive": 633,
  "sale-dailydeals-tier2": 634,
  "sale-deep-discounts": 635,
  "sale-deck-mostplayed": 636,
  "home-chart-deckmostplayed": 637,
  "home-deck-banner": 638,
  "sale-tag-bucket-top": 639,
  "sale-dailydeals-none": 640,
  "sale-dailydeals-tags": 641,
  "sale-dailydeals-ir": 642,
  "sale-dailydeals-tier2-none": 645,
  "sale-dailydeals-tier2-tags": 646,
  "sale-dailydeals-tier2-ir": 647,
  "sale-hero-none": 650,
  "sale-hero-tags": 651,
  "sale-hero-ir": 652,
  autumnsale: 660,
  wintersale: 661,
  yearinreview: 662,
  springsale: 663,
  mobileapp: 700,
  summary: 701,
  mobilestorefront: 702,
  home: 703,
  "winter2012-today-square": 800,
  "winter2012-today-square-button": 801,
  "winter2012-hires": 802,
  "winter2012-hires-button": 803,
  "winter2012-yesterday-square": 804,
  "winter2012-yesterday-square-button": 805,
  "winter2012-flash": 806,
  "winter2012-flash-button": 807,
  "winter2012-pack": 808,
  "winter2012-pack-button": 809,
  "winter2012-topsellers": 810,
  "winter2012-topsellers-button": 811,
  "winter2012-vote-winner": 812,
  "winter2012-vote-winner-button": 821,
  "winter2012-vote-option-voting": 813,
  "winter2012-vote-option-voted": 814,
  "winter2012-nav": 815,
  "winter2012-500-callout": 816,
  "winter2012-500-callout-button": 820,
  "winter2012-featured": 817,
  "winter2012-lower-nav": 822,
  "winter2012-vote-option-vote-results": 823,
  "fall2014-48": 850,
  "fall2014-24": 851,
  "fall2014-TopSellers": 852,
  "fall2014-Upcoming": 853,
  "fall2014-Under10": 854,
  "fall2014-Under5": 855,
  "fall2014-PopularNewReleases": 856,
  "fall2014-specials-more": 857,
  "fall2014-recommend-wishlist": 858,
  "fall2014-recommend-contentforyourgames": 859,
  renderspecials: 860,
  recommend: 861,
  "recommended-ranked-played": 862,
  "redeem-wallet-complete-return": 900,
  "redeem-wallet-complete-return-app": 901,
  updated: 1e3,
  curators: 1050,
  curatorrecommendations: 1051,
  ajaxgetcuratorrecommendations: 1052,
  curatorscombinedrecommendations: 1053,
  ajaxgetcombinedrecommendations: 1054,
  curatorlist: 1055,
  curator: 1056,
  curatorfeaturedlist: 1057,
  curator_featured_list: 1057,
  mycuratorsreviewing: 1058,
  creatorfeaturedrecs: 1059,
  new_dlc: 1060,
  "browse-dlc": 1061,
  curatorlistcapsule: 1062,
  widget: 1100,
  appvisibilitystats: 1101,
  render: 1200,
  "recommendationfeed-single-friends": 1210,
  "recommendationfeed-single-curators": 1211,
  "recommendationfeed-single-recent": 1212,
  "recommendationfeed-single-wishlist": 1213,
  "recommendationfeed-single-played": 1214,
  "recommendationfeed-two": 1250,
  "recommendationfeed-four": 1251,
  "winter2014-featured": 1300,
  "winter2014-yesterday": 1301,
  "winter2014-flash": 1302,
  "winter2014-flash2": 1303,
  "winter2014-vote": 1304,
  "winter2014-specials-more": 1305,
  "winter2014-recommend-wishlist": 1306,
  "winter2014-frontpage-wishlist": 1307,
  "winter2014-TopSellers": 1308,
  "winter2014-Upcoming": 1309,
  "winter2014-Under10": 1310,
  "winter2014-Under5": 1311,
  "winter2014-PopularNewReleases": 1312,
  "winter2017-FeaturedBanner": 1313,
  "summer2018-standardview-curated": 1314,
  "summer2018-standardview-recommend-basic": 1315,
  "summer2018-standardview-recommend-neural": 1316,
  "summer2018-mergedview-curated": 1317,
  "summer2018-mergedview-recommend-neural": 1318,
  "summer2018-salien-giveaway": 1319,
  "summer2018-creator-recommend": 1320,
  "summer2018-live-stream": 1321,
  "sale-vr": 1322,
  "sale-moddable": 1323,
  "discovery-queue-0": 1324,
  "wishlist-onsale": 1400,
  "wishlist-newrelease": 1401,
  "greenlight-newrelease": 1402,
  "sales-event-enhanced": 1403,
  "creator-newrelease": 1404,
  "generic-onsale": 1405,
  "topsellers-onsale": 1406,
  "recommended-onsale": 1407,
  "demo-newrelease": 1408,
  "Free to Play": 1420,
  "tab-mostplayednewreleases": 1421,
  "tab-mostplayed": 1422,
  "tab-comingsoon": 1423,
  "tab-discounts": 1424,
  "tab-ConcurrentUsers": 1454,
  vr: 1453,
  "hub-vr-recommended": 1455,
  "hub-vr-specials": 1459,
  "hub-vr-featured": 1463,
  "hub-vr-takeover": 1467,
  games: 1452,
  "hub-games-recommended": 1456,
  "hub-games-specials": 1460,
  "hub-games-featured": 1464,
  "hub-games-takeover": 1468,
  software: 1451,
  "hub-software-recommended": 1457,
  "hub-software-specials": 1461,
  "hub-software-featured": 1465,
  "hub-software-takeover": 1469,
  "hub-videos-recommended": 1458,
  "hub-videos-specials": 1462,
  "hub-videos-featured": 1466,
  "hub-videos-takeover": 1470,
  macos: 1480,
  "hub-macos-recommended": 1481,
  "hub-macos-specials": 1482,
  "hub-macos-featured": 1483,
  "hub-macos-takeover": 1484,
  linux: 1490,
  "hub-linux-recommended": 1491,
  "hub-linux-specials": 1492,
  "hub-linux-featured": 1493,
  "hub-linux-takeover": 1494,
  controller: 1500,
  "hub-controller-recommended": 1501,
  "hub-controller-specials": 1502,
  "hub-controller-featured": 1503,
  "hub-controller-takeover": 1504,
  freetoplay: 1510,
  "hub-freetoplay-recommended": 1511,
  "hub-freetoplay-specials": 1512,
  "hub-freetoplay-featured": 1513,
  "hub-freetoplay-takeover": 1514,
  earlyaccess: 1520,
  "hub-earlyaccess-recommended": 1521,
  "hub-earlyaccess-specials": 1522,
  "hub-earlyaccess-featured": 1523,
  "hub-earlyaccess-takeover": 1524,
  pccafe: 1530,
  "hub-pccafe-recommended": 1531,
  "hub-pccafe-specials": 1532,
  "hub-pccafe-featured": 1533,
  "hub-pccafe-takeover": 1534,
  remoteplayphone: 1540,
  "hub-remoteplayphone-recommended": 1541,
  "hub-remoteplayphone-specials": 1542,
  "hub-remoteplayphone-featured": 1543,
  "hub-remoteplayphone-takeover": 1544,
  remoteplaytablet: 1550,
  "hub-remoteplaytablet-recommended": 1551,
  "hub-remoteplaytablet-specials": 1552,
  "hub-remoteplaytablet-featured": 1553,
  "hub-remoteplaytablet-takeover": 1554,
  remoteplaytv: 1560,
  "hub-remoteplaytv-recommended": 1561,
  "hub-remoteplaytv-specials": 1562,
  "hub-remoteplaytv-featured": 1563,
  "hub-remoteplaytv-takeover": 1564,
  remoteplaytogether: 1570,
  "hub-remoteplaytogether-recommended": 1571,
  "hub-remoteplaytogether-specials": 1572,
  "hub-remoteplaytogether-featured": 1573,
  "hub-remoteplaytogether-takeover": 1574,
  "remote-play-about": 1580,
  remoteplay: 1581,
  turnbasedrpg: 1582,
  arcaderhythm: 1583,
  greatondeck: 1584,
  remoteplaylanding: 1585,
  fightingmartialarts: 1586,
  actionfps: 1587,
  hackandslash: 1588,
  actionrunjump: 1589,
  shmup: 1590,
  adventure: 1591,
  action: 1592,
  adventurerpg: 1593,
  hiddenobject: 1594,
  metroidvania: 1595,
  puzzlematching: 1596,
  storyrich: 1597,
  visualnovel: 1598,
  casual: 1559,
  querypaginated: 1600,
  n_section: 1601,
  rpgjrpg: 1602,
  rpgpartybased: 1603,
  roguelikeroguelite: 1604,
  rpgaction: 1605,
  rpg: 1606,
  rpgstrategytactics: 1607,
  rpgturnbased: 1608,
  simulation: 1609,
  simbuildingautomation: 1610,
  simdating: 1611,
  simfarmingcrafting: 1612,
  simhobbysim: 1613,
  simlife: 1614,
  simphysicssandbox: 1615,
  simspaceflight: 1616,
  strategy: 1617,
  strategycardboard: 1618,
  strategycitiessettlements: 1619,
  soundtracks: 1620,
  "hub-soundtracks-recommended": 1621,
  "hub-soundtracks-specials": 1622,
  "hub-soundtracks-featured": 1623,
  "hub-soundtracks-takeover": 1624,
  strategygrand4x: 1625,
  strategymilitary: 1626,
  strategyrealtime: 1627,
  towerdefense: 1628,
  strategyturnbased: 1629,
  sportsandracing: 1630,
  sports: 1631,
  sportsfishinghunting: 1632,
  sportsindividual: 1633,
  racing: 1634,
  racingsim: 1635,
  sportssim: 1636,
  sportsteam: 1637,
  anime: 1638,
  horror: 1639,
  mysterydetective: 1640,
  explorationopenworld: 1641,
  sciencefiction: 1642,
  space: 1643,
  survival: 1644,
  multiplayercoop: 1645,
  multiplayerlan: 1646,
  multiplayerlocalparty: 1647,
  multiplayermmo: 1648,
  multiplayer: 1649,
  multiplayeronlinecompetitive: 1650,
  singleplayer: 1651,
  upcoming: 1700,
  "comingsoon-recommendedcomingsoon": 1701,
  "comingsoon-popularwishlist": 1702,
  "comingsoon-newdlc": 1703,
  "comingsoon-followedcreator": 1704,
  "comingsoon-mywishlist": 1705,
  "comingsoon-largecap": 1706,
  "tab-PopularUpcoming": 1707,
  "tab-AllUpcoming": 1708,
  "in-library-game-event-update": 1800,
  "on-wishlist-game-event-update": 1801,
  "in-library-game-remind-me": 1802,
  "hub-demos-recommended": 1901,
  "hub-demos-specials": 1902,
  "hub-demos-featured": 1903,
  "hub-demos-takeover": 1904,
  "creator-home-product-page": 2e3,
  "franchise-home-link": 2001,
  ajaxgetappinfoforcap: 2100,
  "partner-events": 2101,
  "library-partner-events": 2102,
  "store-partner-events": 2103,
  "steamtv-partner-events": 2104,
  "community-partner-events": 2105,
  "partner-partner-events": 2106,
  "store-calendar-partner-events": 2107,
  events: 2108,
  subscriptions: 2109,
  ea: 2110,
  subscriptionplansea: 2111,
  download_event: 2112,
  reminder: 2113,
  steamtv: 2200,
  "hub-specials-recommended": 2301,
  "hub-specials-specials": 2302,
  "hub-specials-featured": 2303,
  "hub-specials-takeover": 2304,
  recommender: 2400,
  "recommended-by-steam-labs": 2401,
  labs: 2500,
  automaticshow: 2501,
  microtrailers: 2502,
  "now-playing": 2503,
  deepdive: 2504,
  "game-add-to-wishlist-deepdive": 2505,
  dbdetailsmulti: 2506,
  dbgetlinkparam: 2507,
  "recommended-by-deep-dive": 2508,
  "recommended-by-deep-dive-carousel": 2509,
  "recommended-by-deep-dive-carousel_default": 2510,
  "recommended-by-deep-dive-carousel_cluster_recent": 2511,
  "recommended-by-deep-dive-carousel_cluster_games": 2512,
  "recommended-by-deep-dive-carousel_cluster_playtime": 2513,
  "recommended-by-deep-dive-carousel-default": 2514,
  "recommended-by-deep-dive-carousel-cluster-recent": 2515,
  "recommended-by-deep-dive-carousel-cluster-games": 2516,
  "recommended-by-deep-dive-carousel-cluster-playtime": 2517,
  trendingreviews: 2600,
  ajaxgetrecentreviews: 2601,
  "community-recommendations": 2602,
  lunarnewyear2020: 2700,
  lunarnewyear: 2701,
  lunarnewyearmarket: 2702,
  "steam-logo": 2750,
  "sale-banner": 2751,
  "sale-button-top": 2752,
  "sale-button-bottom": 2753,
  "wishlist-button-bottom": 2754,
  "footer-steam-logo": 2755,
  steamclient: 5e3,
  library: 5100,
  friendsui: 5200,
  friendcontextmenu: 5201,
  nextfest: 6e3,
  topsellers: 7e3,
  steamcharts: 7001,
  weeklytopsellers: 7002,
  topchartlist: 7003,
  overview: 7004,
  mostplayed: 7005,
  salesmartdailyactiveuserdemo: 7006,
  salesmartmostplayeddemo: 7007,
  salesmartdecktopplayed: 7008,
  salesmartcategory: 7009,
  vrhardwarelanding: 7010,
  monthlytopreleases: 7011,
  bestofyear: 7012,
  apphome: 1e5,
  images: 100001,
  allnews: 100003,
  news: 100004,
  announcements: 100005,
  discussions: 100006,
  reporteddiscussions: 100007,
  tradingforum: 100008,
  guides: 100009,
  reviews: 100010,
  positivereviews: 100011,
  negativereviews: 100012,
  workshop: 100013,
  broadcasts: 100014,
  eventcomments: 100015,
  sharedfiles: 100100,
  filedetails: 100101,
  screenshot: 100102,
  workshopitem: 100103,
  mtxitem: 100104,
  collection: 100105,
  guide: 100106,
  integratedguide: 100107,
  merch: 100108,
  artwork: 100109,
  video: 100110,
  topicsearch: 100201,
  singletopic: 100202,
  profiles: 100300,
  review: 100301,
  profileshowcase: 100302,
  broadcast: 100400,
  watch: 100401,
  friendactivityfeed: 100500,
  announcement: 100501,
  curatorreview: 100502,
  friendpurchase: 100503,
  workshopitempublished: 100504,
  artworkpublished: 100505,
  screenshotpublished: 100506,
  guidepublished: 100507,
  collectionpublished: 100508,
  itemfavorited: 100509,
  userreviewpublished: 100510,
  "partner.steamgames.com": 100600,
  "help.steampowered.com": 100601,
  salecreatorhome: 100700,
  saleitembrowse: 100701,
  salefacetbrowse: 100702,
  salesection: 100703,
  saletabsection: 100704,
  salebroadcast: 100705,
  salecuratorrec: 100706,
  saleeventsched: 100707,
  salesubscription: 100708,
  saleitemsearch: 100709,
  salesmartwishlist: 100710,
  salesmartir: 100711,
  salesmartdlc: 100712,
  salesmarttagrec: 100713,
  salebrowsetopwishlisted: 100714,
  salebrowsetrendingwishlisted: 100715,
  salebrowsepopularcomingsoon: 100716,
  salebrowsemostplayeddemo: 100717,
  salebrowsedailyactiveuserdemo: 100718,
  salebrowseplayednowdemo: 100719,
  salebrowserecentlyreleased: 100720,
  salebrowsepopularpurchased: 100721,
  salebrowsepopularpurchaseddiscounted: 100722,
  salebrowsediscounted: 100723,
  salebrowseprice: 100724,
  salebrowsenewandtrending: 100725,
  salebrowsetopsellers: 100726,
  salebrowsetoprated: 100727,
  discoveryqueue2022: 100728,
  saleeventsection: 100729,
  salesectionlinks: 100730,
  salesectionrewards: 100731,
  salesectiontext: 100732,
  salesectioneventschedule: 100733,
  salesmartpersonalizedcarousel: 100734,
  "promo-takeunder": 100735,
  salesmartwr: 100736,
  salesmartwishlist_allsale: 100737,
  salesmartir_allsale: 100738,
  autopopulatetag: 100739,
  autopopulatecategory: 100740,
  salesmartrecentevents: 100741,
  seasonpassproductpage: 100742,
  itemcollections: 100743,
  crosspromotesalepage: 100744,
  "mm-auto-render": 100745,
  salequiz: 100746,
  templatemediacontent: 100747,
  templatefaq: 100748,
  templatetechspec: 100749,
  topnewreleases: 100750,
  newreleases: 100751,
  salebrowsetrendingfree: 100752,
  trendingfree: 100753,
  reactroot: 100754,
  bundlelist: 100755,
  verifiedprogram: 100756,
  trailercarousel: 100757,
  "personalcalendar-lastmonth": 100800,
  "personalcalendar-lastweek": 100801,
  "personalcalendar-calendar": 100802,
  "personalcalendar-homepage": 100803,
  greatonframe: 100804,
  salesmartsale_events_only: 100805,
  salesmartdiscountreason: 100806,
};
function Io(e) {
  return e in Fo;
}
var q = class e {
  static InstrumentLink(t, n, r = null) {
    let i = e.GetSNRLinkParam(n, r),
      a = e.GetCuratorClanIDParam(n);
    return e.AddNavParamToURL(t, i, a);
  }
  static ParseSNR(t) {
    let n = t.split(`_`) || [];
    return {
      domain: e.DecodeEventComponent(n[0]),
      controller: e.DecodeEventComponent(n[1]),
      method: e.DecodeEventComponent(n[2]),
      submethod: e.DecodeEventComponent(n[3]),
      feature: e.DecodeEventComponent(n[4]),
      depth: n[5] ? Number(n[5]) : void 0,
    };
  }
  static GetSNRLinkParam(t, n = null) {
    let r = e.ComputeLinkPrefix(t.domain, t.controller, t.method, t.submethod);
    n = n ?? t.depth ?? null;
    let i = e.EncodeEventComponent(t.feature);
    return (i && ((r += `_` + i), n && (r += `_` + n)), r);
  }
  static GetCuratorClanIDParam(e) {
    return e.curator_clanid ?? null;
  }
  static AddNavParamToURL(e, t, n) {
    if (!e || e.length == 0) return e;
    try {
      let r = new URL(tt(e)),
        i = new URLSearchParams(r.search);
      return (
        i.set(`snr`, encodeURIComponent(t ?? ``)),
        n && i.set(`curator_clanid`, encodeURIComponent(n ?? ``)),
        r.origin + r.pathname + `?` + i.toString() + r.hash
      );
    } catch (t) {
      return (console.error(e, t), e);
    }
  }
  static ComputeLinkPrefix(t, n, r, i) {
    let a = ``;
    return (
      (a += e.EncodeEventComponent(t)),
      (a += `_`),
      (a += e.EncodeEventComponent(n)),
      (a += `_`),
      (a += e.EncodeEventComponent(r)),
      (a += `_`),
      (a += e.EncodeEventComponent(i)),
      a
    );
  }
  static EncodeEventComponent(e) {
    return e
      ? Io(e)
        ? `` + Fo[e]
        : (e.match(/^[0-9]+$/) || (e = e.replace(/^[0-9]+/, ``)),
          e.replace(/[^a-zA-Z0-9\- ]+/g, ``))
      : ``;
  }
  static DecodeEventComponent(t) {
    let n = t && parseInt(t);
    if (n && Fo) {
      for (let e in Fo) if (Fo[e] == n) return e;
    }
    return e.SanitizeEventComponent(t);
  }
  static SanitizeEventComponent(e) {
    return !e || !e.match(/^[a-zA-Z0-9\-.]*$/) ? `` : e;
  }
};
function Lo(e) {
  return {
    ...e,
    domain: q.SanitizeEventComponent(e.domain),
    controller: q.SanitizeEventComponent(e.controller),
    method: q.SanitizeEventComponent(e.method),
    submethod: q.SanitizeEventComponent(e.submethod),
    feature: q.SanitizeEventComponent(e.feature),
    depth: e.depth || 0,
  };
}
var Ro = L.createContext({});
L.createContext(void 0);
function zo() {
  return L.useContext(Ro);
}
function Bo(e, t) {
  return Vo(zo(), e, t);
}
function Vo(e, t, n) {
  return {
    ...e,
    feature: t || e.feature,
    depth: n || e.depth,
    countrycode: o.COUNTRY,
    is_client: o.IN_CLIENT,
  };
}
function Ho(e, t, n) {
  let r = zo();
  return L.useMemo(() => e && Wo(r, e, t, n), [e, r, t, n]);
}
function Uo(e, t) {
  let n = zo();
  return L.useMemo(
    () => q.GetSNRLinkParam({ ...n, feature: e || n.feature }, t),
    [n, e, t],
  );
}
function Wo(e, t, n, r) {
  let i = q.GetSNRLinkParam({ ...e, feature: n || e.feature }, r),
    a = q.GetCuratorClanIDParam(e);
  return q.AddNavParamToURL(t, i, a);
}
function Go(e) {
  let { children: t, ...n } = e,
    r = L.useRef(null);
  return (0, B.jsx)(Re, { nodeRef: r, ...n, children: e.children(r) });
}
function Ko(e, t) {
  return e < t ? -1 : +(e > t);
}
function qo(e, t) {
  return Ko(e.toLocaleLowerCase(), t.toLocaleLowerCase());
}
function Jo(e, t) {
  let n = e.toString(),
    r = ``;
  for (let e = 0; e < t - n.length; e++) r += `0`;
  return r + n;
}
function Yo(e) {
  return (
    (e >= 55356 && e <= 57343) ||
    (e >= 8205 && e <= 11093) ||
    e == 12953 ||
    e == 12349 ||
    e == 12336 ||
    e == 65039 ||
    e == 12951 ||
    e == 169 ||
    (e >= 48 && e <= 57) ||
    e == 35 ||
    e == 42 ||
    e == 10 ||
    e == 174
  );
}
function Xo(e) {
  let t = !1,
    n = !1,
    r = !0;
  for (let i = 0; i < e.length; i++) {
    let a = e.charCodeAt(i);
    if (
      ((r && a >= 48 && a <= 57) || a == 35 || a == 42 || a == 10
        ? (n = !0)
        : Yo(a) && ((n = !0), (r = !1)),
      n && i == 0)
    )
      ((t = !0), (n = !1));
    else if (n && t) ((t = !0), (n = !1));
    else if (!n) return ((t = !1), !1);
    if (i > 20) return !1;
  }
  return !r && t;
}
function Zo(e) {
  let t = e.charCodeAt(0);
  return t >= 65 && t <= 90;
}
function Qo(e) {
  if (e.length <= 2) return e;
  let t = e.charAt(1),
    n = Zo(t);
  for (let r = 2; r < e.length; r++) {
    let i = e.charAt(r);
    if (!n && Zo(i)) ((n = !0), (t = i));
    else if (i == ` `) {
      ((i = e.charAt(r + 1)), i.length > 0 && (t = i));
      break;
    }
  }
  return e.charAt(0) + t;
}
function $o(e, t = !1) {
  if (Number.isNaN(e) || !Number.isFinite(e)) return ``;
  let n = e < 0;
  e = Math.abs(e);
  let r = Math.floor(e / 3600),
    i = Math.floor((e % 3600) / 60),
    a = Math.floor(e % 60),
    o = n ? `-` : ``;
  return !t || r > 0
    ? `${o}${r}:${Jo(i, 2)}:${Jo(a, 2)}`
    : `${o}${i}:${Jo(a, 2)}`;
}
function es(e) {
  return e
    ? DOMParser
      ? new DOMParser().parseFromString(e, `text/html`).documentElement
          .textContent
      : e
    : ``;
}
function ts(e, t = ``) {
  return e.replace(/\bhttps?:\/\/\S+/gi, t);
}
function ns(e, t, n = !0) {
  let r = e.trim();
  if (((r = r.replace(n ? /\s+/g : /[ \t]+/g, ` `)), r.length > t)) {
    r = r.substring(0, t);
    let e = r.replace(/^(.*([.!?])) .*$/, `$1`),
      i = e.length;
    ((i < t * 0.6 || i == t) && (e = r.replace(/ [^ ]*$/, `...`)),
      (r = n ? e.replace(/(\r\n|\n|\r)/gm, ``) : e));
  }
  return r;
}
function rs(e) {
  if (e.startsWith(`[emoticon`)) {
    let t = e.match(/^(?:\[emoticon\][^\[]+\[\/emoticon\]\s*)+$/);
    if (t && t.length) {
      let t = e.match(/\[emoticon\][^\[]+\[\/emoticon\]/g);
      return t && t.length <= 6;
    }
  }
  return !1;
}
function is(e) {
  return e.length <= 1
    ? e.toUpperCase()
    : e.charAt(0).toUpperCase() + e.slice(1);
}
function as(e, t) {
  let n = e.lastIndexOf(t);
  return n == -1 ? `` : e.substr(n + t.length);
}
var os = d.box(void 0);
function ss() {
  return os.get();
}
function cs(e) {
  D(() => os.set(e));
}
function J() {
  return os.get() || Math.floor(Date.now() / 1e3);
}
function ls() {
  let e = os.get();
  return e ? new Date(e * 1e3) : new Date();
}
var us = `{STEAM_CLAN_IMAGE}`,
  ds = `{STEAM_CLAN_LOC_IMAGE}`;
function fs(e) {
  let t = e.toLowerCase();
  if (t.endsWith(`.jpg`) || t.endsWith(`.jpeg`)) return `image/jpeg`;
  if (t.endsWith(`.png`)) return `image/png`;
  if (t.endsWith(`.gif`)) return `image/gif`;
  if (t.endsWith(`.mp4`)) return `video/mp4`;
  if (t.endsWith(`.webm`)) return `video/webm`;
  if (t.endsWith(`.srt`)) return `text/srt`;
  if (t.endsWith(`.vtt`)) return `text/vtt`;
  if (t.endsWith(`.webp`)) return `image/webp`;
}
function ps(e) {
  switch (e) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function ms(e, t) {
  return `${e}/${t}`;
}
var hs = L.createContext({});
function gs() {
  return L.useContext(hs);
}
RegExp(`${ds.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function _s(e, t, n = 0) {
  return vs(e, t, n, gs());
}
function vs(e, t, n = 0, r) {
  if (!e || e.length == 0) return null;
  if (e?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return Y.ReplacementTokenToClanImageURL(e);
  if (e?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let i = Y.GetBaseURL(),
      a = e.substring(ds.length + 1),
      o = parseInt(a.substring(0, a.indexOf(`/`))),
      s = a.substring(a.indexOf(`/`) + 1),
      c = Y.GenerateURLFromHashAndExt(o, s);
    if (r?.[ms(o, s)] === !1) return c;
    let l = Y.GetLocalizedClanImageFileNames(s, t).map(
      (e) => i + o + `/` + e + `?t=` + n,
    );
    return (l.push(c), l);
  }
  return e;
}
var Y = {
    GetBaseURL() {
      return `${o.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${o.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(e) {
      return (
        (e = e.replace(us, this.GetBaseURL())), e.replace(`http://`, `https://`)
      );
    },
    ExtractHashFromBBCodeURL(e) {
      let t =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
          e,
        );
      return t?.groups
        ? [t.groups.filename, parseInt(t.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(e) {
      return (e.file_type == null ? null : ps(e.file_type)) ?? `.jpg`;
    },
    GetHashAndExt(e) {
      return e ? e.image_hash + this.GetExtensionString(e) : null;
    },
    GetThumbHashAndExt(e) {
      return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
    },
    GetHashFromHashAndExt(e) {
      let t = e.substring(e.lastIndexOf(`.`));
      return e.substring(0, e.length - t.length);
    },
    GetExtStringFromHashAndExt(e) {
      return e.substring(e.lastIndexOf(`.`));
    },
    GetLocalizedClanImageFileNames(e, t) {
      if (t == null) return [];
      let n = this.GetHashFromHashAndExt(e),
        r = this.GetExtStringFromHashAndExt(e),
        i = [n + `/` + ue(t) + r];
      return (t == 4 && i.push(n + `/` + fe(ue(t)) + r), i);
    },
    GenerateURLFromHashAndExt(e, t, n = ys.full) {
      return this.GenerateURLFromHashAndExtAndLang(e, t, n, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(e, t, n = ys.full, r, i) {
      e instanceof F && (e = e.GetAccountID());
      let a = this.GetBaseURL(),
        o = r != null && r != -1;
      if (n == ys.full && !o) return a + e + `/` + t;
      {
        let s = t.substring(t.lastIndexOf(`.`)),
          c = t.substring(0, t.length - s.length);
        return !o || r == 0 || i != `localized_image_group`
          ? a + e + `/` + c + n + s
          : a + e + `/` + c + `/` + fe(ue(r)) + s;
      }
    },
    GetHashAndExtFromURL(e) {
      let t = this.GetBaseURL();
      return !e?.startsWith(t) ||
        ((e = e.substring(t.length)), e.indexOf(`/`) == -1)
        ? null
        : ((e = e.substring(e.indexOf(`/`) + 1)), e);
    },
    GenerateEditableURLFromHashAndExt(e, t, n) {
      let r =
        o.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        t;
      return (n && (r += `&lang=` + n), r);
    },
    GetMimeType(e) {
      return fs(e);
    },
    async AsyncGetImageResolution(e, t, n, r, i) {
      let a = t + this.GetExtensionString({ file_type: n }),
        o = this.GenerateEditableURLFromHashAndExt(e, a);
      return await this.AsyncGetImageResolutionInternal(o, r, i);
    },
    async AsyncGetImageResolutionInternal(e, t, n) {
      let r = Qe(),
        i = new Image();
      ((i.crossOrigin = `anonymous`),
        (i.onerror = (t) => {
          let i = { success: 2 };
          (n ||
            ((i.err_msg =
              `Load fail on url ` + e + ` with error: ` + I(t).strErrorMsg),
            console.error(i.err_msg)),
            (i.success = 2),
            r.resolve(i));
        }),
        (i.onload = () => {
          let t = { success: 2 };
          ((t.width = i.width),
            (t.height = i.height),
            !(i.width > 0) || !(i.height > 0)
              ? (v(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + e,
                ),
                (t.err_msg = `No resolution reported for url ` + e),
                r.resolve(t))
              : ((t.success = 1), r.resolve(t)));
        }),
        (i.src = e),
        t.token.promise.catch(() => {
          ((i.onload = () => {}),
            (i.onerror = () => {}),
            r.resolve({ success: 52 }));
        }));
      let a,
        o = new Promise((e, t) => {
          a = setTimeout(() => t(), 1e4);
        }),
        s;
      try {
        s = await Promise.race([o, r.promise]);
      } catch {
        s = { success: 16, err_msg: `We timed out processing images` };
      } finally {
        clearTimeout(a);
      }
      return s;
    },
    BIsClanImageVideo(e) {
      return e.file_type == 4 || e.file_type == 5;
    },
  },
  ys = (function (e) {
    return (
      (e.full = ``),
      (e.background_main = `_960x311`),
      (e.background_mini = `_480x156`),
      (e.capsule_main = `_400x225`),
      (e.spotlight_main = `_1054x230`),
      e
    );
  })({}),
  bs = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ];
function xs(e, t, n) {
  return e == 45559995
    ? `charts/topnewreleases/${t}`
    : e == 45902273
      ? `charts/bestofyear/${t}`
      : n
        ? `sale/${t}`
        : `curator/${e}/sale/${t}`;
}
function Ss(e, t) {
  return xs(e, ``, t).startsWith(`curator/`);
}
var Cs = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: k.readInt32, bw: M.writeInt32 },
            active: { n: 2, br: k.readBool, bw: M.writeBool },
            start_time: { n: 3, br: k.readUint32, bw: M.writeUint32 },
            end_time: { n: 4, br: k.readUint32, bw: M.writeUint32 },
            app_discounts: { n: 5, c: ws, r: !0, q: !0 },
            grouped_vote_options: { n: 6, br: k.readUint32, bw: M.writeUint32 },
            groups: { n: 7, c: Ts, r: !0, q: !0 },
            internal_name: { n: 8, br: k.readString, bw: M.writeString },
            localization: { n: 9, c: Es },
            reveal_time: { n: 10, br: k.readUint32, bw: M.writeUint32 },
            release_date_min: { n: 11, br: k.readUint32, bw: M.writeUint32 },
            winner_appid: { n: 12, br: k.readUint32, bw: M.writeUint32 },
            flag: { n: 13, br: k.readEnum, bw: M.writeEnum },
            release_date_max: { n: 14, br: k.readUint32, bw: M.writeUint32 },
            item_type: { n: 15, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition`;
    }
  },
  ws = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            discount: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  Ts = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            group_name: { n: 2, br: k.readString, bw: M.writeString },
            app_discounts: { n: 3, c: ws, r: !0, q: !0 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  Es = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            title: { n: 1, br: k.readString, bw: M.writeString },
            title_linebreak: { n: 2, br: k.readString, bw: M.writeString },
            title_award: { n: 3, br: k.readString, bw: M.writeString },
            award_description: { n: 4, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_Localization`;
    }
  },
  Ds = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: k.readString, bw: M.writeString },
            sale_appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  Os = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.votes || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            votes: { n: 1, c: Cs, r: !0, q: !0 },
            labor_of_love_winners: {
              n: 2,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: M.writeRepeatedUint32,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  ks = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            communityitemid: {
              n: 3,
              br: k.readUint64String,
              bw: M.writeUint64String,
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamAwardsUserVote`;
    }
  },
  As = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sale_appid: { n: 1, br: k.readUint32, bw: M.writeUint32 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Request`;
    }
  },
  js = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: ks, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Response`;
    }
  },
  Ms = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: k.readInt32, bw: M.writeInt32 },
            appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            sale_appid: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Request`;
    }
  },
  Ns = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: ks, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Response`;
    }
  },
  Ps = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            appid: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            last_updated: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwardsNomination`;
    }
  },
  Fs = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  Is = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: Ps, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Response`;
    }
  },
  Ls = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: k.readFixed64String,
              bw: M.writeFixed64String,
            },
            code: { n: 2, br: k.readFixed64String, bw: M.writeFixed64String },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  Rs = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            nominated_id: { n: 2, br: k.readUint32, bw: M.writeUint32 },
            source: { n: 3, br: k.readEnum, bw: M.writeEnum },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Request`;
    }
  },
  zs = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: Ps, r: !0, q: !0 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Response`;
    }
  },
  Bs = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  Vs = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.played_app || g(e.M()),
        R.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            played_app: { n: 1, c: Hs, r: !0, q: !0 },
            suggested_events: { n: 2, c: Us, r: !0, q: !0 },
            suggested_apps: { n: 3, c: Ws, r: !0, q: !0 },
            debug_query: { n: 4, br: k.readString, bw: M.writeString },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response`;
    }
  },
  Hs = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            playtime: { n: 2, br: k.readInt32, bw: M.writeInt32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  Us = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: k.readUint32, bw: M.writeUint32 },
            event_gid: {
              n: 2,
              br: k.readUint64String,
              bw: M.writeUint64String,
            },
            appid: { n: 3, br: k.readUint32, bw: M.writeUint32 },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
    }
  },
  Ws = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: k.readUint32, bw: M.writeUint32 } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  Gs = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { generate_new: { n: 1, br: k.readBool, bw: M.writeBool } },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  Ks = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.code || g(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            code: { n: 1, br: k.readFixed64String, bw: M.writeFixed64String },
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
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  qs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreSales.GetVoteDefinitions#1`, _(Ds, t, n), Os, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetVoteDefinitions = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreSales.SetVote#1`, _(Ms, t, n), Ns, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.SetVote = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreSales.GetUserVotes#1`, _(As, t, n), js, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetUserVotes = r;
})((qs ||= {}));
var Js;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamAwards.GetUserNominations#1`, _(Fs, t, n), Is, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetUserNominations = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamAwards.GetOtherUserNominations#1`, _(Ls, t, n), Is, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetOtherUserNominations = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamAwards.Nominate#1`, _(Rs, t, n), zs, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.Nominate = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      _(Bs, t, n),
      Vs,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`community`, `store`],
      },
    );
  }
  e.GetNominationRecommendations = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamAwards.GetNominationShareLink#1`, _(Gs, t, n), Ks, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetNominationShareLink = a;
})((Js ||= {}));
var Ys = {
  bBroadcastEnabled: !1,
  broadcastChatSetting: `hide`,
  default_broadcast_title: `#Broadcast_default_title_dev`,
  localized_broadcast_title: Array(32),
  localized_broadcast_left_image: Array(32),
  localized_broadcast_right_image: Array(32),
  broadcast_whitelist: [],
};
function Xs(e) {
  let t = `#PartnerEvent_` + e,
    n = Ee.Localize(t);
  return n == t ? Ee.Localize(`#PartnerEvent_Other`) : n;
}
var Zs = { bScheduleEnabled: !1, scheduleEntries: [] };
b(
  [h],
  class {
    m_eventModel;
    m_entry;
    constructor(e, t) {
      ((this.m_eventModel = e), (this.m_entry = t));
    }
    GetEventStartTime() {
      return this.m_entry.rtime_start_specific
        ? this.m_entry.rtime_start_specific
        : (this.m_eventModel.startTime ?? 0) +
            (this.m_entry.delta_from_event_start_seconds ?? 0);
    }
  }.prototype,
  `GetEventStartTime`,
  null,
);
var Qs = 99999,
  $s = (function (e) {
    return (
      (e[(e.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
      (e[(e.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
      (e[(e.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
      (e[(e.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
      e
    );
  })({});
function ec(e) {
  e.section_type === `crosspromotesalepage` &&
    !e.sale_page_cross_promo_sales &&
    (e.sale_page_cross_promo_event_gid ||
      e.sale_page_cross_promo_clan_account_id ||
      e.sale_page_cross_promo_featured_app_tagid) &&
    ((e.sale_page_cross_promo_sales = [
      {
        event_gid: e.sale_page_cross_promo_event_gid,
        clan_account_id: e.sale_page_cross_promo_clan_account_id,
        featured_app_tagid: e.sale_page_cross_promo_featured_app_tagid,
      },
    ]),
    delete e.sale_page_cross_promo_event_gid,
    delete e.sale_page_cross_promo_clan_account_id,
    delete e.sale_page_cross_promo_featured_app_tagid);
}
function tc(e) {
  switch (e) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
      return !0;
  }
  return !1;
}
var nc = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function rc(e) {
  e.sale_sections?.forEach((t, n) => {
    ((t.localized_label &&= p(t.localized_label, 32, null)),
      t.section_type === `trailercarousel` && (t.show_as_carousel = !1),
      ec(t),
      (e.sale_sections[n] = { ...nc, ...t }));
  });
}
var ic = {
    localized_subtitle: Array(32),
    localized_summary: Array(32),
    localized_title_image: Array(32),
    localized_capsule_image: Array(32),
    bSaleEnabled: !1,
    sale_show_creator: !1,
    sale_sections: [],
    sale_browsemore_text: ``,
    sale_browsemore_url: ``,
    sale_browsemore_color: ``,
    sale_browsemore_bgcolor: ``,
    localized_sale_header: Array(32),
    localized_sale_overlay: Array(32),
    localized_sale_product_banner: Array(32),
    localized_sale_product_mobile_banner: Array(32),
    localized_sale_logo: Array(32),
    sale_font: ``,
    sale_background_color: ``,
    sale_header_offset: 530,
    referenced_appids: [],
    ...Ys,
    ...Zs,
  },
  ac = `old_announce_`;
function oc(e, t, n) {
  let r = (e) => t.includes(e);
  return r(`steam_award_nomination_request`)
    ? j(`#PartnerEvent_SteamAwardNominations`)
    : r(`steam_award_vote_request`)
      ? j(`#PartnerEvent_SteamAwardVoteRequest`)
      : r(`steam_game_festival_artist_statement`)
        ? j(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : r(`steam_game_festival_office_hour`)
          ? j(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : r(`steam_game_festival_broadcast`) ||
              (t.some((e) => e?.startsWith(`sale_nextfest_`)) && e == 11)
            ? j(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : r(`vo_marketing_message`) && n
              ? j(`#PartnerEvent_MM_MajorUpdate`)
              : Xs(e);
}
var sc = [
    `workshop`,
    `patchnotes`,
    `contenthub`,
    `skip_megaphone`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
    `enable_steam_china`,
    `disable_steam_global`,
    `adult_only_content`,
    `stablechannel`,
    `betachannel`,
    `previewchannel`,
  ],
  cc = [20, 31, 34],
  lc = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  uc = [Oe.k_ESteamRealmGlobal],
  dc = [Oe.k_ESteamRealmChina],
  fc = [Oe.k_ESteamRealmGlobal, Oe.k_ESteamRealmChina],
  pc = [],
  X = class e {
    constructor() {
      se(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new F();
    forumTopicGID = void 0;
    clanSteamIDOriginal = void 0;
    type = 1;
    appid = 0;
    name = new Map();
    description = new Map();
    timestamp_loc_updated = new Map();
    createTime = void 0;
    startTime = void 0;
    endTime = void 0;
    visibilityStartTime = void 0;
    visibilityEndTime = void 0;
    m_nBuildID = void 0;
    m_strBuildBranch = void 0;
    postTime = void 0;
    visibility_state = 0;
    broadcaster = void 0;
    jsondata = ic;
    nCommentCount = 0;
    nVotesUp = 0;
    nVotesDown = 0;
    comment_type;
    gidfeature;
    gidfeature2;
    featured_app_tagid;
    bOldAnnouncement = !1;
    announcementClanSteamID = void 0;
    loadedAllLanguages = !1;
    bLoaded = !1;
    deleteInProgress = !1;
    vecTags = [];
    creator_steamid;
    last_update_steamid = void 0;
    rtime32_last_modified = void 0;
    rtime32_last_solr_search_col_updated = void 0;
    rtime32_last_local_modification = void 0;
    rtime32_moderator_reviewed = void 0;
    video_preview_type = void 0;
    video_preview_id = void 0;
    has_live_stream;
    live_stream_viewer_count;
    m_overrideCurrentDay = void 0;
    fnGetLocalizedGroupImages;
    BIsPartnerEvent() {
      return !this.bOldAnnouncement && !!this.GID;
    }
    static FromJSON(t) {
      let n = new e(),
        r = JSON.parse(t);
      return (
        Object.assign(n, r),
        (n.name = new Map(r.name)),
        (n.description = new Map(r.description)),
        (n.vecTags = [...(r.vecTags ?? r.tags ?? [])]),
        (n.clanSteamID = new F(r.clanSteamID)),
        v(
          n.clanSteamID && n.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + n.clanSteamID.ConvertTo64BitString(),
        ),
        r.broadcaster &&
          ((n.broadcaster = new F(r.broadcaster)),
          v(
            n.broadcaster && n.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              n.broadcaster.ConvertTo64BitString(),
          )),
        rc(n.jsondata),
        n
      );
    }
    static FromCClanEventData(t, n) {
      let r = new e();
      ((r.GID = t.gid),
        (r.clanSteamID = new F(t.clan_steamid)),
        r.name.set(n, t.event_name ?? ``),
        (r.type = t.event_type),
        (r.appid = t.appid ?? 0),
        (r.startTime = t.rtime32_start_time),
        (r.endTime = t.rtime32_end_time),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.creator_steamid = t.creator_steamid),
        (r.last_update_steamid = t.last_update_steamid),
        (r.jsondata = JSON.parse(t.jsondata ?? `{}`)),
        rc(r.jsondata),
        (r.rtime32_last_local_modification = t.rtime32_last_modified),
        (r.visibility_state = t.published
          ? t.hidden
            ? t.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (r.createTime = t.rtime_created),
        (r.m_nBuildID = t.build_id),
        (r.m_strBuildBranch = t.build_branch),
        (r.visibilityStartTime = t.rtime32_visibility_start),
        (r.visibilityEndTime = t.rtime32_visibility_end),
        (r.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
        (r.featured_app_tagid = t.featured_app_tagid),
        t.broadcaster_accountid &&
          (r.broadcaster = F.InitFromAccountID(
            t.broadcaster_accountid,
            o.EUNIVERSE,
          )),
        (r.AnnouncementGID = t.announcement_body?.gid ?? `0`));
      let i = t.clan_steamid_original;
      return (
        i
          ? (r.clanSteamIDOriginal = new F(i))
          : t.announcement_body?.clanid &&
            (r.clanSteamIDOriginal = F.InitFromClanID(
              Number(t.announcement_body.clanid),
              o.EUNIVERSE,
            )),
        (r.postTime = t.announcement_body?.posttime),
        (r.forumTopicGID = t.forum_topic_id),
        r.name.set(n, t.announcement_body?.headline ?? ``),
        r.description.set(n, t.announcement_body?.body ?? ``),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.vecTags = [...(t.announcement_body?.tags ?? [])]),
        (r.forumTopicGID = t.announcement_body?.forum_topic_id),
        (r.nVotesUp = t.announcement_body?.voteupcount ?? 0),
        (r.nVotesDown = t.announcement_body?.votedowncount ?? 0),
        r
      );
    }
    toJSON(e) {
      let t = {};
      return (
        Object.assign(t, this),
        (t.name = Array.from(this.name)),
        (t.description = Array.from(this.description)),
        (t.vecTags = Array.from(this.vecTags)),
        (t.tags = t.vecTags),
        (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
        this.broadcaster &&
          (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
        t
      );
    }
    clone(t = !1) {
      let n = new e();
      if (
        ((n.GID = this.GID),
        (n.AnnouncementGID = this.AnnouncementGID),
        (n.clanSteamID = this.clanSteamID),
        (n.clanSteamIDOriginal = this.clanSteamIDOriginal),
        (n.bOldAnnouncement = this.bOldAnnouncement),
        (n.nCommentCount = this.nCommentCount),
        (n.nVotesUp = this.nVotesUp),
        (n.nVotesDown = this.nVotesDown),
        (n.forumTopicGID = this.forumTopicGID),
        (n.comment_type = this.comment_type),
        (n.gidfeature = this.gidfeature),
        (n.gidfeature2 = this.gidfeature2),
        (n.featured_app_tagid = this.featured_app_tagid),
        (n.creator_steamid = this.creator_steamid),
        (n.last_update_steamid = this.last_update_steamid),
        (n.rtime32_last_modified = this.rtime32_last_modified),
        (n.rtime32_last_solr_search_col_updated =
          this.rtime32_last_solr_search_col_updated),
        (n.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
        (n.type = this.type),
        (n.appid = this.appid),
        (n.name = new Map()),
        this.name.forEach((e, t) => {
          n.name.set(t, e);
        }),
        (n.description = new Map()),
        this.description.forEach((e, t) => {
          n.description.set(t, e);
        }),
        (n.timestamp_loc_updated = new Map()),
        this.timestamp_loc_updated.forEach((e, t) => {
          n.timestamp_loc_updated.set(t, e);
        }),
        (n.createTime = this.createTime ?? 0),
        (n.startTime = this.startTime),
        (n.endTime = this.endTime),
        (n.visibilityStartTime = this.visibilityStartTime),
        (n.visibilityEndTime = this.visibilityEndTime),
        (n.postTime = this.postTime),
        (n.visibility_state = this.visibility_state),
        (n.loadedAllLanguages = this.loadedAllLanguages),
        (n.bLoaded = this.bLoaded),
        (n.broadcaster = this.broadcaster
          ? new F(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (n.vecTags = []),
        t
          ? ((n.m_nBuildID = this.m_nBuildID),
            (n.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((e) => n.vecTags.push(e)))
          : this.vecTags.forEach((e) => {
              sc.includes(e) && n.vecTags.push(e);
            }),
        n.jsondata.email_setting)
      ) {
        let e = 100;
        for (let t of n.jsondata.email_setting.sections)
          t.unique_id || ((t.unique_id = `email_section_${e}`), e++);
      }
      return n;
    }
    GetLastReferencedSaleDayFromCapsules(e, t) {
      let n = t;
      return (
        e?.forEach((e) => {
          e.visibility_index !== void 0 &&
            (n =
              n === void 0
                ? e.visibility_index
                : Math.max(n, e.visibility_index));
        }),
        n
      );
    }
    GetLastReferencedSaleDay() {
      let e;
      for (let t of this.GetSaleSections())
        if (t.section_type === `tabs`) {
          if ((t.tabs?.length ?? 0) > 0)
            for (let n of t.tabs ?? [])
              e = this.GetLastReferencedSaleDayFromCapsules(n.capsules, e);
        } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
      return (
        (this.jsondata.sale_num_headers ?? 0) > 1 &&
          (e == null || e < (this.jsondata.sale_num_headers ?? 0)) &&
          (e = this.jsondata.sale_num_headers),
        e
      );
    }
    GetDayIndexFromEventStart(e = J()) {
      let t = 0;
      (this.startTime !== void 0 &&
        e >= this.startTime &&
        (t = Math.floor((e - this.startTime) / 86400)),
        this.m_overrideCurrentDay !== void 0 &&
          this.m_overrideCurrentDay >= 0 &&
          (t = this.m_overrideCurrentDay));
      let n = this.GetLastReferencedSaleDay() || 0;
      return Math.min(t, n);
    }
    GetNameWithFallback(e) {
      let t = be.GetELanguageFallback(e);
      return this.name.get(e) || this.name.get(t);
    }
    BInRealmGlobal() {
      return !this.BHasTag(`disable_steam_global`);
    }
    BInRealmChina() {
      return this.BHasTag(`enable_steam_china`);
    }
    BIsLanguageValidForRealms(e) {
      return !!(
        (this.BInRealmGlobal() &&
          be.IsELanguageValidInRealm(e, Oe.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          be.IsELanguageValidInRealm(e, Oe.k_ESteamRealmChina))
      );
    }
    GetImgArray(e) {
      let t = [];
      if (
        ((e === `background` || e == `localized_title_image`) &&
          (t = this.jsondata.localized_title_image),
        e === `capsule`)
      )
        t = this.jsondata.localized_capsule_image;
      else if (e === `spotlight`) t = this.jsondata.localized_spotlight_image;
      else if (e === `email_full` || e === `email_centered`)
        t = this.jsondata.email_setting
          ? this.jsondata.email_setting.sections[0].localized_image
          : [];
      else if (e === `broadcast_left`)
        t = this.jsondata.localized_broadcast_left_image;
      else if (e === `broadcast_right`)
        t = this.jsondata.localized_broadcast_right_image;
      else if (e === `sale_header`) {
        if ((this.jsondata.sale_num_headers ?? 0) > 1) {
          let e = Math.min(
            (this.jsondata.sale_num_headers ?? 0) - 1,
            this.GetDayIndexFromEventStart(),
          );
          t = this.jsondata.localized_per_day_sales_header?.[e];
        } else t = this.jsondata.localized_sale_header;
      } else
        e === `sale_logo`
          ? (t = this.jsondata.localized_sale_logo)
          : e === `sale_overlay`
            ? (t = this.jsondata.localized_sale_overlay)
            : e === `sale_cross_promo_logo`
              ? (t = this.jsondata.localized_sale_cross_promo_logo_image)
              : bs.includes(e)
                ? (t = this.fnGetLocalizedGroupImages?.())
                : e === `product_banner`
                  ? (t = this.jsondata.localized_sale_product_banner)
                  : e === `product_mobile_banner`
                    ? (t = this.jsondata.localized_sale_product_mobile_banner)
                    : e === `bestofyear_banner`
                      ? (t = this.jsondata.localized_bestofyear_banner)
                      : e === `bestofyear_banner_mobile`
                        ? (t = this.jsondata.localized_bestofyear_banner_mobile)
                        : e === `localized_store_app_spotlight`
                          ? (t = this.jsondata.localized_store_app_spotlight)
                          : e === `localized_store_app_spotlight_mobile` &&
                            (t =
                              this.jsondata
                                .localized_store_app_spotlight_mobile);
      return t;
    }
    GetImageURL(e, t = 0, n = ys.full) {
      let r = this.GetImgArray(e),
        i = r && r.length > t && r[t] != null;
      return i && r[t]?.startsWith(`http`)
        ? r[t]
        : i
          ? Y.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? ``, n)
          : void 0;
    }
    GetImageHash(e, t = 0) {
      let n = this.GetImgArray(e);
      return n && n.length > t && n[t] != null
        ? n[t].substr(0, n[t].length - 4)
        : null;
    }
    GetImageHashAndExt(e, t = 0) {
      let n = this.GetImgArray(e);
      return n && n.length > t && n[t] != null ? n[t] : null;
    }
    BHasSomeImage(e) {
      let t = this.GetImgArray(e);
      return !!t && t.some((e) => e != null && e.length > 0);
    }
    BHasImage(e, t) {
      let n = this.GetImgArray(e);
      return !!n && n.length > t && n[t] != null;
    }
    BHasAnnouncementGID() {
      return (
        this.AnnouncementGID !== null &&
        this.AnnouncementGID !== void 0 &&
        this.AnnouncementGID.length > 1
      );
    }
    GetAnnouncementGID() {
      return this.AnnouncementGID;
    }
    BHasForumTopicGID() {
      return (
        this.forumTopicGID !== null &&
        this.forumTopicGID !== void 0 &&
        this.forumTopicGID.length > 1
      );
    }
    GetForumTopicURL(e) {
      return this.BHasForumTopicGID()
        ? this.appid
          ? o.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : e
            ? o.COMMUNITY_BASE_URL +
              `groups/` +
              e +
              `/eventcomments/` +
              this.forumTopicGID
            : o.COMMUNITY_BASE_URL +
              `gid/` +
              this.clanSteamID.ConvertTo64BitString() +
              `/eventcomments/` +
              this.forumTopicGID
        : ``;
    }
    GetDiscussionURL(e) {
      return this.BHasForumTopicGID()
        ? this.GetForumTopicURL(e)
        : this.GetLegacyAnnouncementCommentsURL();
    }
    GetLegacyAnnouncementCommentsURL() {
      let e = this.clanSteamIDOriginal ?? this.clanSteamID;
      return !this.BHasAnnouncementGID() || !e || !e.BIsValid()
        ? ``
        : o.COMMUNITY_BASE_URL +
            `gid/` +
            e.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(e = J()) {
      return e < (this.startTime ?? 0);
    }
    BHasEventEnded(e = J()) {
      return (this.endTime ?? 0) < e;
    }
    UpdateVoteCount(e, t) {
      e == `up`
        ? (this.nVotesUp = he(this.nVotesUp + t, 0, 2 ** 53 - 1))
        : e == `down` &&
          (this.nVotesDown = he(this.nVotesDown + t, 0, 2 ** 53 - 1));
    }
    GetImageFromBeginningOfDescription(e, t) {
      let n = this.GetDescriptionWithFallback(e);
      if (n) {
        let e = n.indexOf(`[img]`);
        if (e !== -1 && e < t) {
          e += 5;
          let t = n.indexOf(`[/img]`, e);
          if (t != -1) {
            let r = n.substring(e, t).trim();
            if (r.length != 0) return Y.ReplacementTokenToClanImageURL(r);
          }
        }
      }
      return null;
    }
    GetAppIDOrReferenceAppID() {
      return this.appid ? this.appid : this.jsondata?.referenced_appids?.[0];
    }
    BImageNeedScreenshotFallback(e, t) {
      let n = this.GetImageURL(e, t);
      if (!n || n.length == 0) {
        let r = be.GetELanguageFallback(t);
        t != r && (n = this.GetImageURL(e, r));
      }
      return !n || n.length == 0;
    }
    GetDescriptionWithFallback(e) {
      let t = be.GetELanguageFallback(e);
      return this.description.get(e) || this.description.get(t);
    }
    BIsImageSafeForAllAges(e, t, n = {}) {
      let r = be.GetELanguageFallback(t);
      return (
        this.GetImageURL(e, t) != null ||
        (t != r && this.GetImageURL(e, r) != null) ||
        (this.appid && n.bAppHasAgeSafeScreenshots) ||
        (!this.appid &&
          n.clanInfo &&
          ((n.clanInfo.is_creator_home && !n.clanInfo.is_ogg) ||
            n.clanInfo.is_curator))
      );
    }
    BIsVisibleEvent(e = J()) {
      let t = Math.floor(e);
      return (
        this.visibility_state == 3 ||
        (this.visibility_state == 2 &&
          t > (this.visibilityStartTime ?? 0) &&
          ((this.visibilityEndTime ?? 0) < 10 ||
            t < (this.visibilityEndTime ?? 0)))
      );
    }
    BIsStagedEvent() {
      return this.visibility_state == 1;
    }
    BIsUnlistedEvent() {
      return this.visibility_state == 3;
    }
    GetStartTimeAndDateUnixSeconds() {
      return this.startTime ?? 0;
    }
    GetEndTimeAndDateUnixSeconds() {
      return this.endTime ?? 0;
    }
    GetPostTimeAndDateUnixSeconds() {
      return this.postTime ?? 0;
    }
    GetVisibilityStartTimeAndDateUnixSeconds() {
      return this.visibilityStartTime ?? 0;
    }
    BIsEventActionEnabled(e = J()) {
      return (
        !!this.jsondata.action_end_time &&
        (this.jsondata.action_end_time > e ||
          (this.jsondata.action_end_time == 1575396e3 && 1606845600 > e))
      );
    }
    BHasSubTitle(e) {
      if (
        !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        e >= this.jsondata.localized_subtitle.length
      )
        return !1;
      let t = this.jsondata.localized_subtitle[e];
      return t != null && t != ``;
    }
    GetSubTitle(e) {
      return !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        e >= this.jsondata.localized_subtitle.length
        ? ``
        : this.jsondata.localized_subtitle[e] || ``;
    }
    GetSubTitleWithLanguageFallback(e) {
      return this.jsondata
        ? Te.GetWithFallback(this.jsondata.localized_subtitle, e)
        : ``;
    }
    GetSubTitleWithSummaryFallback(t) {
      return (
        Te.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
      );
    }
    GetSummaryWithFallback(t, n) {
      return (
        Te.GetWithFallback(this.jsondata?.localized_summary, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t), n)
      );
    }
    GetSummary(e) {
      return Te.Get(this.jsondata?.localized_summary ?? [], e);
    }
    BHasSummary(e) {
      return !!this.GetSummary(e);
    }
    static GenerateSummaryFromText(e, t) {
      return !e || e.trim().length == 0
        ? ``
        : ((e = sr(e, [
            `img`,
            `h1`,
            `h2`,
            `h3`,
            `spoiler`,
            `table`,
            `previewyoutube`,
            `looping_media`,
            `roomeffect`,
            `sticker`,
          ])),
          (e = cr(e, [`p`], ` `)),
          (e = cr(e)),
          (e = ts(e)),
          ns(e, t || 180));
    }
    BHasTag(e) {
      return this.vecTags.indexOf(e) != -1;
    }
    BHasTagStartingWith(e) {
      return this.vecTags.some((t) => t?.startsWith(e));
    }
    BIsOGGEvent() {
      return !!this.appid && this.appid > 0;
    }
    BShowLibrarySpotlight(e) {
      if (!e) return !!this.jsondata.library_spotlight;
      if (!this.jsondata.library_spotlight || cc.includes(this.type)) return !1;
      let t = new Date().getTime() / 1e3;
      return !(
        (lc.includes(this.type) && this.endTime && t > this.endTime) ||
        (this.startTime && t > this.startTime + De.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(e, t = J()) {
      if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
      let n = this.endTime ? this.endTime : t + 3600;
      return (
        this.BHasBroadcastEnabled() &&
        !!this.jsondata.broadcast_whitelist &&
        this.jsondata.broadcast_whitelist.length > 0 &&
        (e || ((this.startTime ?? 0) - 600 <= t && t < n))
      );
    }
    BHasBroadcastForceBanner() {
      return !!this.jsondata.broadcast_force_banner;
    }
    BSaleShowBroadcastAtTopOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some((e) => e.section_type == `broadcast`)
      );
    }
    BSaleShowCuratorRecommendationAtBottomOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some(
          (e) => e.section_type == `curator_recommendation`,
        )
      );
    }
    GetBroadcastChatVisibility() {
      return this.jsondata.broadcastChatSetting || `hide`;
    }
    GetBroadcastTitle(e) {
      return (
        Te.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
        j(
          this.jsondata.default_broadcast_title ??
            `#Broadcast_default_title_dev`,
        )
      );
    }
    GetBroadcastWhitelist() {
      return this.jsondata.broadcast_whitelist ?? [];
    }
    GetBroadcastWhitelistAsSteamIDs() {
      return (
        this.jsondata.broadcast_whitelist?.map((e) =>
          F.InitFromAccountID(e, o.EUNIVERSE).ConvertTo64BitString(),
        ) ?? []
      );
    }
    BIsBroadcastAccountIDWhiteListed(e) {
      return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
    }
    BHasSaleEnabled() {
      return !!this.jsondata.bSaleEnabled;
    }
    BHasSaleVanity() {
      return !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id;
    }
    GetSaleVanity() {
      return this.jsondata.sale_vanity_id ?? ``;
    }
    BHasSaleUpdateLandingPageVanity() {
      return (
        !!this.jsondata.bSaleEnabled &&
        !!this.jsondata.sale_update_landing_page_vanity_id
      );
    }
    GetSaleUpdateLandingPageVanity() {
      return this.jsondata.sale_update_landing_page_vanity_id ?? ``;
    }
    GetSaleURL(e) {
      if (!this.jsondata.bSaleEnabled) return null;
      if (this.jsondata.sale_update_landing_page_vanity_id)
        return (
          o.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          o.STORE_BASE_URL +
          `newshub/` +
          (this.appid
            ? `app/` + this.appid
            : `group/` + this.clanSteamID.GetAccountID()) +
          `/view/` +
          this.GID
        );
      if (this.BUsesContentHubForItemSource()) {
        let e = this.jsondata.source_content_hub;
        return e
          ? typeof e == `string`
            ? o.STORE_BASE_URL + `category/` + e
            : e.type == `category`
              ? o.STORE_BASE_URL + `category/` + e.category
              : e.type == `tags`
                ? o.STORE_BASE_URL + `tags/` + (we() || `en`) + `/` + e.tagid
                : e.type == `freetoplay`
                  ? o.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : e.type == `earlyaccess`
                    ? o.STORE_BASE_URL + `genre/Early%20Access/`
                    : o.STORE_BASE_URL + e.type
          : o.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let t = this.clanSteamID.GetAccountID(),
        n = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        r = this.GetSaleVanity();
      return e && Ss(t, n) ? e + `sale/` + r : o.STORE_BASE_URL + xs(t, r, n);
    }
    BHasEmailEnabled() {
      return (
        !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
      );
    }
    GetSaleSections() {
      return this.jsondata.sale_sections ?? [];
    }
    GenerateDynamicSaleSections(e, t, n, r, i, a) {
      let o = [],
        s = {
          section_type: `unselected_empty`,
          capsules: [],
          events: [],
          links: [],
          localized_label: [],
          default_label: ``,
        },
        c = Qs + 10;
      return (
        e &&
          o.push({
            ...s,
            section_type: `footer_self_creator_home`,
            unique_id: c++,
            curator_clan_id: this.clanSteamID.GetAccountID(),
          }),
        t &&
          o.push({ ...s, section_type: `footer_browse_more`, unique_id: c++ }),
        r &&
          o.push(this.GenerateDynamicCreatorHomeItemBrowserSection(c++, s, a)),
        n &&
          o.push({
            ...s,
            section_type: `footer_default_social_share`,
            unique_id: c++,
          }),
        i && o.push({ ...s, section_type: `nextfest_header`, unique_id: c++ }),
        o
      );
    }
    GetSaleSectionIncludingFooterSections(e = 0) {
      let t = this.jsondata?.sale_show_creator,
        n = this.jsondata.sale_browse_more_button,
        r =
          this.GetSaleSectionsByType(`social_share`).length == 0 &&
          !this.jsondata.sale_default_social_media_disabled,
        i = this.GetEventType() == 36,
        a = this.BShowNextFestHeader(!0);
      return t || n || r || i || a
        ? [
            ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, a, e),
            ...this.GetSaleSections(),
            ...this.GenerateDynamicSaleSections(!!t, !!n, r, i, !1, e),
          ]
        : this.GetSaleSections();
    }
    GetSaleSectionByID(e, t = 0) {
      return e > 99999
        ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, t).find(
            (t) => t.unique_id == e,
          )
        : this.jsondata.sale_sections?.find((t) => t.unique_id == e);
    }
    GetSaleSectionCount() {
      return this.jsondata.sale_sections?.length ?? 0;
    }
    GetSaleSectionsByType(e) {
      return (
        this.jsondata.sale_sections?.filter((t) => t.section_type == e) ?? []
      );
    }
    GetLastUpdateTime() {
      return this.rtime32_last_modified ?? 0;
    }
    GetLastUpdaterSteamIDStr() {
      return this.last_update_steamid ?? ``;
    }
    GetSaleSectionFirstMatchByType(e) {
      let t = this.jsondata.sale_sections?.length ?? 0;
      if (t != 0) {
        for (let n = 0; n < t; ++n)
          if (this.jsondata.sale_sections[n].section_type === e)
            return this.jsondata.sale_sections[n];
      }
    }
    static AccumulateCapsuleListIDs(e, t, n, r) {
      e &&
        e.forEach((e) => {
          e && e.type && t.has(e.type) && (!r || r(e.id)) && n.add(e.id);
        });
    }
    GetSaleItemOfType(t, n) {
      if (!this.jsondata.sale_sections) return new Set();
      let r = new Set(t),
        i = new Set();
      return (
        v(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((t) => {
          e.AccumulateCapsuleListIDs([t.capsule], r, i, n);
        }),
        this.jsondata.sale_sections.forEach((t) => {
          if (tc(t.section_type))
            e.AccumulateCapsuleListIDs(t.capsules, r, i, n);
          else if (t.section_type === `tabs` && t.tabs)
            for (let a of t.tabs)
              e.AccumulateCapsuleListIDs(a.capsules, r, i, n);
        }),
        i
      );
    }
    GetSaleItemCountOfType(e, t) {
      return this.GetSaleItemOfType(e, t).size;
    }
    GetSaleFeaturedAppsCount(e) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        e,
      );
    }
    GetSaleFeaturedAppsAndDemosCount(e) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        e,
      );
    }
    GetSaleFeaturedBundlesCount(e) {
      return this.GetSaleItemCountOfType([`bundle`], e);
    }
    GetSaleFeaturedPackagesCount(e) {
      return this.GetSaleItemCountOfType([`sub`], e);
    }
    GetSaleFeaturedApps(e) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        e,
      );
    }
    GetSaleFeaturedAppsAndDemos(e) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        e,
      );
    }
    GetSaleFeaturedBundles(e) {
      return this.GetSaleItemOfType([`bundle`], e);
    }
    GetSaleFeaturedPackages(e) {
      return this.GetSaleItemOfType([`sub`], e);
    }
    GetTaggedItems() {
      return this.jsondata.tagged_items || [];
    }
    BHasScheduleEnabled() {
      return this.jsondata.bScheduleEnabled;
    }
    GetEventType() {
      return this.type;
    }
    GetEventTypeAsString() {
      return Xs(this.type);
    }
    GetCategoryAsString(e) {
      return oc(this.type, this.vecTags, e);
    }
    GetAllTags() {
      return this.vecTags;
    }
    BMatchesAllTags(e) {
      let t = !0;
      return (
        e?.forEach((e) => {
          this.vecTags.includes(e) || (t = !1);
        }),
        t
      );
    }
    BAllowedSteamStoreSpotlight() {
      return !!this.jsondata.store_spotlight;
    }
    BHasLibaryHomeSpotlight() {
      return !!this.jsondata.library_home_spotlight;
    }
    GetSteamAwardCategory() {
      return this.jsondata.steam_award_category_suggestion ?? 0;
    }
    GetSteamAwardNomineeCategories() {
      return this.jsondata.steam_award_category_voteids ?? [];
    }
    BIsLockedToGameOwners() {
      return !!this.jsondata.ownership_requirement_info?.bLockedToAppOwners;
    }
    GetRequiredAppIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
        : [];
    }
    GetRequiredPackageIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
        : [];
    }
    BUseSubscriptionLayout() {
      return !!this.jsondata.sale_use_subscription_layout;
    }
    BIsLockedToPartnerAppRights() {
      return !!this.jsondata.app_right_requirement_info
        ?.bLockedToPartnerAppRights;
    }
    GetRequiredPartnerAppRights() {
      return this.jsondata.app_right_requirement_info;
    }
    GetValveAccessLog() {
      return Array.isArray(this.jsondata.valve_access_log)
        ? this.jsondata.valve_access_log
        : [];
    }
    BUsesContentHubForItemSource() {
      return (
        this.jsondata.item_source_type === 1 &&
        !!this.jsondata.source_content_hub
      );
    }
    GetContentHubType() {
      if (this.BUsesContentHubForItemSource())
        return this.jsondata.source_content_hub == null
          ? `games`
          : typeof this.jsondata.source_content_hub == `string`
            ? `category`
            : this.jsondata.source_content_hub.type;
    }
    GetContentHubCategory() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? this.jsondata.source_content_hub
          : this.jsondata.source_content_hub.category;
    }
    GetContentHubTag() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? 0
          : this.jsondata.source_content_hub.tagid;
    }
    GetContentHub() {
      return typeof this.jsondata.source_content_hub == `string`
        ? { type: `category`, category: this.jsondata.source_content_hub }
        : this.jsondata.source_content_hub;
    }
    BContentHubDiscountedOnly() {
      return !!this.jsondata.content_hub_discounted_only;
    }
    BIsBackgroundImageGroupingEnabled() {
      return !!this.jsondata.sale_background_img_groups?.enabled;
    }
    GetSalePageGroupDefinition() {
      return this.jsondata.sale_background_img_groups;
    }
    GetSalePageBackgroundImageGroupCount() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
        : 0;
    }
    GetAllSalePageGroups() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups
        : [];
    }
    GetSalePageBackgroundGroup(e) {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups?.[e]
        : void 0;
    }
    GetIncludedRealmList() {
      let e = this.BInRealmGlobal(),
        t = this.BInRealmChina();
      return (
        v(
          e || t,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        e && t ? fc : e ? uc : t ? dc : pc
      );
    }
    BIsValidForRealm(e) {
      return this.GetIncludedRealmList().includes(e);
    }
    BIsNextFest(e = !1) {
      let t = this.jsondata.sale_vanity_id?.toLowerCase(),
        n = new F(this.clanSteamID).GetAccountID();
      return !(
        !t ||
        n != 39049601 ||
        !t.startsWith(`nextfest`) ||
        (e && (t.endsWith(`preview`) || t.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(e) {
      return e && l.is_valve_email
        ? this.BIsNextFest(!1)
        : this.BIsNextFest(!0) &&
            !!this.startTime &&
            this.startTime > new Date(`2026-03-01`).getTime() / 1e3;
    }
    GenerateDynamicCreatorHomeItemBrowserSection(e, t, n) {
      let r = n >= 7;
      return {
        ...t,
        section_type: `sale_item_browser`,
        unique_id: e,
        item_browse_section_data: {
          enable_search: !0,
          tabs: [
            `all_released`,
            `popularpurchased`,
            `all_upcoming`,
            `discounted`,
          ],
          prefer_assets_without_overrides: !1,
        },
        prefer_assets_without_overrides: !1,
        enable_faceted_browsing: r,
        min_capsule_matches_for_facet_values: 5,
        max_facet_values_for_facet: 5,
        background_gradient_top: `#0000006b`,
        background_gradient_bottom: `#0000006b`,
        facet_sort_order: 1,
        cap_item_count: 24,
        show_more_count: 48,
        facet_auto_generate_options: {
          only_facets: [
            { loc_token: `#App_Taxonomy_Survey_QSuperGenreTitle` },
            {
              loc_token: `#AppTypeLabelTitle`,
              only_values: [
                `#AppTypeLabel_game`,
                `#AppTypeLabel_dlc`,
                `#AppTypeLabel_demo`,
                `#AppTypeLabel_music`,
              ],
              initially_selected_values: [`#AppTypeLabel_game`],
            },
            { loc_token: `#Sale_Preferences` },
          ],
          initially_expanded_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
          prioritized_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
        },
      };
    }
  };
(b([d], X.prototype, `GID`, void 0),
  b([d], X.prototype, `AnnouncementGID`, void 0),
  b([d], X.prototype, `forumTopicGID`, void 0),
  b([d], X.prototype, `type`, void 0),
  b([d], X.prototype, `appid`, void 0),
  b([d], X.prototype, `name`, void 0),
  b([d], X.prototype, `description`, void 0),
  b([d], X.prototype, `timestamp_loc_updated`, void 0),
  b([d], X.prototype, `startTime`, void 0),
  b([d], X.prototype, `endTime`, void 0),
  b([d], X.prototype, `visibilityStartTime`, void 0),
  b([d], X.prototype, `visibilityEndTime`, void 0),
  b([d], X.prototype, `m_nBuildID`, void 0),
  b([d], X.prototype, `m_strBuildBranch`, void 0),
  b([d], X.prototype, `postTime`, void 0),
  b([d], X.prototype, `visibility_state`, void 0),
  b([d], X.prototype, `broadcaster`, void 0),
  b([d], X.prototype, `jsondata`, void 0),
  b([d], X.prototype, `nCommentCount`, void 0),
  b([d], X.prototype, `nVotesUp`, void 0),
  b([d], X.prototype, `nVotesDown`, void 0),
  b([d], X.prototype, `bOldAnnouncement`, void 0),
  b([d], X.prototype, `announcementClanSteamID`, void 0),
  b([d], X.prototype, `loadedAllLanguages`, void 0),
  b([d], X.prototype, `bLoaded`, void 0),
  b([d], X.prototype, `deleteInProgress`, void 0),
  b([d], X.prototype, `vecTags`, void 0),
  b([d], X.prototype, `last_update_steamid`, void 0),
  b([d], X.prototype, `rtime32_last_modified`, void 0),
  b([d], X.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  b([d], X.prototype, `rtime32_last_local_modification`, void 0),
  b([d], X.prototype, `rtime32_moderator_reviewed`, void 0),
  b([d], X.prototype, `video_preview_type`, void 0),
  b([d], X.prototype, `video_preview_id`, void 0),
  b([d], X.prototype, `m_overrideCurrentDay`, void 0));
function mc(e) {
  return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
}
var Z = e(qe());
function hc(e) {
  let [t, n] = (0, L.useState)(() => bc.GetClanEventModel(e)),
    r = We(`usePartnerEventByEventGID`);
  return (
    (0, L.useEffect)(() => {
      e &&
        t?.GID != e &&
        (bc.Init(),
        bc
          .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], r)
          .then((t) => {
            t?.length == 1 && t[0].GID == e && !r.token.reason && n(t[0]);
          }));
    }, [e, t, r]),
    t
  );
}
function gc(e) {
  let t = `` + e,
    n = be.GetELanguageFallback(e);
  return (e != n && (t += `_` + n), t);
}
function _c(e) {
  return (
    (e.gid == null || e.gid == null || e.gid == `0`) &&
    !!e.announcement_body &&
    e.announcement_body.gid != `0`
  );
}
function Q(e) {
  return _c(e) ? ac + e.announcement_body?.gid : e.gid;
}
function vc(e, t) {
  let n = new X();
  if (
    ((n.clanSteamID = e),
    v(
      n.clanSteamID && n.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        n.clanSteamID.ConvertTo64BitString() +
        ` ` +
        x.EUNIVERSE,
    ),
    (n.GID = Q(t)),
    (n.bOldAnnouncement = _c(t)),
    (n.appid = t.appid ?? 0),
    (n.createTime = t.rtime_created),
    (n.startTime = t.rtime32_start_time),
    (n.endTime = t.rtime32_end_time),
    (n.visibilityStartTime = t.rtime32_visibility_start),
    (n.visibilityEndTime = t.rtime32_visibility_end),
    (n.loadedAllLanguages = !1),
    (n.type = t.event_type ?? 1),
    (n.nVotesUp = t.votes_up ?? 0),
    (n.nVotesDown = t.votes_down ?? 0),
    (n.comment_type = t.comment_type),
    (n.gidfeature = t.gidfeature),
    (n.gidfeature2 = t.gidfeature2),
    (n.featured_app_tagid = t.featured_app_tagid),
    (n.vecTags = []),
    (n.creator_steamid = t.creator_steamid),
    (n.last_update_steamid = t.last_update_steamid),
    (n.rtime32_last_modified = t.rtime32_last_modified),
    (n.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
    (n.video_preview_type = t.video_preview_type),
    (n.video_preview_id = t.video_preview_id),
    (n.has_live_stream = t.has_live_stream),
    (n.live_stream_viewer_count = t.live_stream_viewer_count),
    (n.m_nBuildID = t.build_id),
    (n.m_strBuildBranch = t.build_branch),
    t.announcement_body)
  ) {
    let e = t.announcement_body;
    ((n.AnnouncementGID = e.gid),
      n.name.set(e.language, e.headline),
      n.description.set(e.language, e.body),
      n.timestamp_loc_updated.clear(),
      (n.forumTopicGID = e.forum_topic_id),
      (n.nCommentCount = e.commentcount),
      (n.postTime = e.posttime),
      n.bOldAnnouncement && !e.hidden && (n.startTime = e.posttime),
      (n.announcementClanSteamID = new F(e.clanid)),
      e.tags && e.tags.length > 0 && e.tags.forEach((e) => n.vecTags.push(e)),
      !n.rtime32_last_solr_search_col_updated &&
        n.rtime32_last_modified &&
        ((n.rtime32_last_solr_search_col_updated = n.rtime32_last_modified),
        (n.rtime32_last_modified = e.updatetime)));
  } else
    ((n.AnnouncementGID = `0`),
      (n.forumTopicGID = t.forum_topic_id),
      n.name.clear(),
      n.description.clear(),
      n.timestamp_loc_updated.clear(),
      (n.postTime = t.rtime32_start_time),
      (n.nCommentCount = t.comment_count ?? 0),
      n.name.set(0, t.event_name ?? ``),
      n.description.set(0, t.event_notes ?? ``));
  t.broadcaster_accountid && (n.broadcaster = new F(t.broadcaster_accountid));
  let r = ic;
  try {
    n.jsondata = { ...r, ...(t.jsondata ? JSON.parse(t.jsondata) : void 0) };
  } catch (e) {
    let t = I(e);
    throw (
      console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          t.strErrorMsg,
        t,
      ),
      e
    );
  }
  if (
    ((n.jsondata.localized_capsule_image = p(
      n.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_title_image = p(
      n.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_subtitle = p(
      n.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (n.jsondata.localized_summary = p(
      n.jsondata.localized_summary || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_title = p(
      n.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_left_image = p(
      n.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_right_image = p(
      n.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_header = p(
      n.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_overlay = p(
      n.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_banner = p(
      n.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_mobile_banner = p(
      n.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_logo = p(
      n.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    n.jsondata.sale_num_headers !== void 0 &&
      n.jsondata.localized_per_day_sales_header)
  )
    for (let e = 0; e < n.jsondata.sale_num_headers; ++e)
      n.jsondata.localized_per_day_sales_header[e] = p(
        n.jsondata.localized_per_day_sales_header[e],
        32,
        null,
      );
  return (
    rc(n.jsondata),
    n.jsondata.email_setting &&
      n.jsondata.email_setting.sections &&
      n.jsondata.email_setting.sections.forEach((e) => {
        (e.localized_headline !== void 0 &&
          e.localized_headline !== null &&
          (e.localized_headline = p(e.localized_headline, 32, null)),
          e.localized_body !== void 0 &&
            e.localized_body !== null &&
            (e.localized_body = p(e.localized_body, 32, null)),
          e.localized_image !== void 0 &&
            e.localized_image !== null &&
            (e.localized_image = p(e.localized_image, 32, null)));
      }),
    n.jsondata.localized_title_image.forEach((e, t) => {
      if (e != null && e.substr(0, 4) == `http`) {
        let r = e.lastIndexOf(`/`),
          i = e.substr(r + 1);
        n.jsondata.localized_title_image[t] = i;
      }
    }),
    (n.bLoaded = !0),
    (n.visibility_state = t.published
      ? t.unlisted
        ? $s.k_EEventStateUnlisted
        : t.hidden
          ? $s.k_EEventStateStaged
          : $s.k_EEventStateVisible
      : $s.k_EEventStateUnpublished),
    n
  );
}
var yc = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(e) {
      (v(
        typeof e.appid == `number`,
        `AJAX updated app returned a non-numeric AppID! Did the PHP change?`,
      ),
        (this.appid = e.appid),
        (this.date = e.date),
        (this.can_play = e.can_play),
        (this.playtime = e.playtime),
        (this.announcementid = e.announcementid));
    }
  },
  $ = class {
    constructor(e = !1) {
      (se(this), (this.m_bOnlySummary = e));
    }
    m_bOnlySummary = !1;
    m_mapExistingEvents = new Map();
    m_mapEventUpdateCallback = new Map();
    m_mapAnnouncementBodyToEvent = new Map();
    m_mapClanToGIDs = new Map();
    m_mapAppIDToGIDs = new Map();
    m_mapAdjacentAnnouncementGIDs = new Map();
    m_mapUpdatedApps = new Map();
    m_tsUpdatedAppsQueryTime = 0;
    m_rgQueuedEventsClanIDs = [];
    m_rgQueuedEventsUniqueIDs = [];
    m_rgQueuedEventsForEditFlags = [];
    m_QueuedEventTimeout = new _e();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let e = mc(`PartnerEventStore`);
        this.ValidateStoreDefault(e) &&
          e.forEach((e) => {
            if (e) {
              let t = new F(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                this.m_mapExistingEvents.set(ac + e.announcement_body.gid, n);
            }
          });
        let t = r(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(t) &&
          t.forEach((e) => {
            if (e) {
              let t = new F(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + e.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(ac + e.announcement_body.gid, n);
            }
          });
        let n = r(`partnereventadjacents`, `application_config`);
        (this.ValidateAdjacentEvent(n) &&
          n.forEach((e) => {
            e &&
              this.m_mapAdjacentAnnouncementGIDs.set(
                e.announcementGID,
                e.adjacents,
              );
          }),
          (this.m_bLoadedFromConfig = !0));
      }
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t &&
        Array.isArray(t) &&
        t.length > 0 &&
        t[0] &&
        typeof t[0] == `object`
        ? typeof t[0].gid == `string` ||
            (typeof t[0].announcement_body == `object` &&
              typeof t[0].announcement_body.gid == `string`)
        : !1;
    }
    ValidateAdjacentEvent(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].announcementGID == `string` &&
            Array.isArray(t[0].adjacents) &&
            (t[0].adjacents.length == 0 || typeof t[0].adjacents[0] == `string`)
        : !1;
    }
    GetPartnerEventChangeCallback(e) {
      let t = this.m_mapEventUpdateCallback.get(e);
      return (
        (t ||=
          (this.m_mapEventUpdateCallback.set(e, new u()),
          this.m_mapEventUpdateCallback.get(e))),
        t
      );
    }
    GetClanEventGIDs(e) {
      return this.m_mapClanToGIDs.get(e.GetAccountID()) || [];
    }
    GetClanEventGIDsForApp(e) {
      return this.m_mapAppIDToGIDs.get(e) || [];
    }
    GetClanEventModel(e) {
      if (e !== void 0) return this.m_mapExistingEvents.get(e);
    }
    BHasClanEventModel(e) {
      return this.m_mapExistingEvents.has(e);
    }
    BHasClanAnnouncementGID(e) {
      if (e === void 0) return !1;
      let t = this.m_mapAnnouncementBodyToEvent.get(e);
      return !!t && this.BHasClanEventModel(t);
    }
    GetClanEventGIDFromAnnouncementGID(e) {
      return this.m_mapAnnouncementBodyToEvent.get(e);
    }
    GetClanEventFromAnnouncementGID(e) {
      if (e === void 0) return;
      let t = this.m_mapAnnouncementBodyToEvent.get(e);
      return t ? this.m_mapExistingEvents.get(t) : void 0;
    }
    DefaultEventSortFunction(e, t) {
      return e.startTime == t.startTime
        ? Ko(e.GID ?? ``, t.GID ?? ``)
        : (t.startTime ?? 0) - (e.startTime ?? 0);
    }
    RegisterClanEvents(e) {
      if (e)
        for (let t of e) {
          let e = Q(t);
          if (!this.m_mapExistingEvents.has(e)) {
            let e = new F(t.clan_steamid);
            this.InsertEventModelFromClanEventData(e, t);
          }
        }
    }
    GetRankedClanEvents(e, t) {
      let n = [],
        r = e
          ? this.GetClanEventGIDs(e)
          : t
            ? this.GetClanEventGIDsForApp(t)
            : void 0;
      if (!r || r.length == 0) return n;
      for (let e of r) {
        let t = this.GetClanEventModel(e);
        t && n.push(t);
      }
      return (n.sort(this.DefaultEventSortFunction), n);
    }
    InsertEventModelFromClanEventData(e, t) {
      let n = vc(e, t);
      return (
        this.InsertUniqueEventGID(e.GetAccountID(), n.appid, n.GID),
        this.m_mapExistingEvents.set(n.GID, n),
        n.AnnouncementGID &&
          n.AnnouncementGID.length > 1 &&
          this.m_mapAnnouncementBodyToEvent.set(n.AnnouncementGID, n.GID),
        n
      );
    }
    HelperInitializeNumSalesHeaderArray(e) {
      if ((e.jsondata.sale_num_headers ?? 0) > 1) {
        e.jsondata.localized_per_day_sales_header = [];
        for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
          e.jsondata.localized_per_day_sales_header.push(p([], 32, null));
        e.m_overrideCurrentDay = 0;
      } else e.m_overrideCurrentDay = void 0;
    }
    GetAllClanEvents(e) {
      let t = [];
      return (
        this.m_mapClanToGIDs.has(e.GetAccountID()) &&
          this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
            let n = this.m_mapExistingEvents.get(e);
            n && t.push(n);
          }),
        t
      );
    }
    async QueueLoadPartnerEvent(e, t, n) {
      if (this.m_mapExistingEvents.has(t)) return;
      (this.m_rgQueuedEventsClanIDs.push(e),
        this.m_rgQueuedEventsUniqueIDs.push(t),
        this.m_rgQueuedEventsForEditFlags.push(!!n),
        (this.m_PendingInfoPromise ||= new Promise(
          (e) => (this.m_PendingInfoResolve = e),
        )));
      let r = this.m_PendingInfoPromise,
        i = () => {
          let e = this.m_PendingInfoResolve,
            t = this.m_rgQueuedEventsClanIDs,
            n = this.m_rgQueuedEventsUniqueIDs,
            r = this.m_rgQueuedEventsForEditFlags;
          ((this.m_PendingInfoPromise = void 0),
            (this.m_rgQueuedEventsClanIDs = []),
            (this.m_rgQueuedEventsUniqueIDs = []),
            (this.m_rgQueuedEventsForEditFlags = []),
            this.InternalLoadPartnerEventList(t, n, r).then(() => e?.()));
        };
      return (
        this.m_rgQueuedEventsClanIDs.length >= 30
          ? (this.m_QueuedEventTimeout.Cancel(), i())
          : this.m_QueuedEventTimeout.IsScheduled() ||
            this.m_QueuedEventTimeout.Schedule(50, i),
        r
      );
    }
    async InternalLoadPartnerEventList(e, t, n) {
      let r = n.some((e) => e),
        i =
          x.STORE_BASE_URL +
          (r
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        a = gc(me(x.LANGUAGE)),
        o = {
          clanid_list: e.join(`,`),
          uniqueid_list: t.join(`,`),
          lang_list: a,
          origin: self.origin,
        };
      try {
        let e = await Z.default.get(i, { params: o, withCredentials: r });
        this.RegisterClanEvents(e.data.events);
      } catch (e) {
        let t = I(e);
        console.error(`GetEventDetails hit error ` + t.strErrorMsg, t);
      }
    }
    async LoadAdjacentPartnerEvents(e, t, n, r, i, a, o) {
      return this.InternalLoadAdjacentPartnerEvents(
        e,
        void 0,
        t,
        n,
        r,
        i,
        a,
        o,
      );
    }
    async LoadAdjacentPartnerEventsByAnnouncement(e, t, n, r, i, a, o) {
      return this.InternalLoadAdjacentPartnerEvents(
        void 0,
        e,
        t,
        n,
        r,
        i,
        a,
        o,
      );
    }
    async LoadAdjacentPartnerEventsByEvent(e, t, n, r, i, a, o) {
      let s = t || e.clanSteamID;
      return e.bOldAnnouncement
        ? this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e.AnnouncementGID,
            s,
            n,
            r,
            i,
            a,
            o,
          )
        : this.InternalLoadAdjacentPartnerEvents(
            e.GID,
            e.AnnouncementGID,
            s,
            n,
            r,
            i,
            a,
            o,
          );
    }
    async InternalLoadAdjacentPartnerEvents(e, t, n, r, i, a, o, s) {
      let c = [];
      if (!t || !this.m_mapAdjacentAnnouncementGIDs.has(t)) {
        let l = x.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          u = gc(me(x.LANGUAGE));
        o?.only_summaries &&
          !this.m_bOnlySummary &&
          (v(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (o.only_summaries = void 0));
        let d = {
          clan_accountid: n ? n.GetAccountID() : void 0,
          appid: r,
          count_before: i,
          count_after: a,
          gidevent: e,
          gidannouncement: t,
          lang_list: u,
          rtime_oldestevent: o ? o.rtime_oldestevent : void 0,
          require_tags: o && o.require_tags ? o.require_tags.join(`,`) : void 0,
          exclude_tags: o && o.exclude_tags ? o.exclude_tags.join(`,`) : void 0,
          require_no_tags: o ? o.require_no_tags : void 0,
          event_type_filter:
            o && o.event_type_filter ? o.event_type_filter.join(`,`) : void 0,
          exclude_event_types:
            o && o.exclude_event_types
              ? o.exclude_event_types.join(`,`)
              : void 0,
          only_summaries: o && !!o.only_summaries,
          origin: self.origin,
        };
        try {
          let i = await Z.default.get(l, { params: d, cancelToken: s?.token });
          if (i?.data?.success == 1)
            D(() => {
              for (let e of i.data.events) {
                let t = Q(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new F(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(n || t, e);
                }
                c.push(this.m_mapExistingEvents.get(t));
              }
              if (c.length == 0) {
                if (e && this.BHasClanEventModel(e))
                  this.m_mapExistingEvents.get(e) &&
                    c.push(this.m_mapExistingEvents.get(e));
                else if (t && this.BHasClanAnnouncementGID(t)) {
                  let e = this.GetClanEventFromAnnouncementGID(t);
                  e && c.push(e);
                }
              }
            });
          else {
            let e = I(i?.data);
            console.error(
              `LoadAdjacentPartnerEvents Success but empty response:` +
                r +
                ` clanAccount:` +
                (n ? n.GetAccountID() : 0) +
                ` ` +
                e.strErrorMsg,
              e,
            );
          }
        } catch (e) {
          let t = I(e);
          t.errorCode != 52 &&
            console.error(
              `LoadAdjacentPartnerEvents hit error on appid:` +
                r +
                ` clanAccount:` +
                (n ? n.GetAccountID() : 0) +
                ` ` +
                t.strErrorMsg,
              t,
            );
        }
      } else {
        let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
          n = [];
        (e?.forEach((e) => {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            let t = this.m_mapAnnouncementBodyToEvent.get(e);
            t &&
              this.m_mapExistingEvents.get(t) &&
              c.push(this.m_mapExistingEvents.get(t));
          } else n.push(e);
        }),
          n.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                n,
                s,
              )
            ).forEach((e) => c.push(e)));
      }
      return c;
    }
    async LoadPartnerEventsPageable(e, t, n = 0, r = 0, i) {
      let a = [],
        o = x.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        s = {
          clan_accountid: e ? e.GetAccountID() : void 0,
          appid: t,
          offset: n,
          count: r,
          l: x.LANGUAGE,
          origin: self.origin,
          exclude_tags: i && i.length > 0 ? i?.join(`,`) : void 0,
        };
      try {
        let e = await Z.default.get(o, { params: s });
        D(() => {
          for (let t of e.data.events) {
            let e = Q(t);
            if (!this.m_mapExistingEvents.has(e)) {
              let e = new F(t.clan_steamid);
              this.InsertEventModelFromClanEventData(e, t);
            }
            a.push(this.m_mapExistingEvents.get(e));
          }
        });
      } catch (e) {
        console.error(`LoadClanEventInDateRange hit error ` + I(e).strErrorMsg);
      }
      return a;
    }
    async GetBestEventsForCurrentUser(e, t, n) {
      let r = [],
        i = {
          l: x.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: e,
          include_only_game_updates: t,
        },
        a = x.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        o = await Z.default.get(a, {
          params: i,
          withCredentials: !0,
          cancelToken: n ? n.token : void 0,
        });
      if (!o.data?.events) {
        let e = o.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${e})`);
      }
      return (
        D(() => {
          for (let e of o.data.events) {
            let t = Q(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new F(e.clan_steamid);
              this.InsertEventModelFromClanEventData(t, e);
            }
            let n = {
              nAppPriority: e.nAppPriority,
              bPossibleTakeOver: e.bPossibleTakeOver,
              event: this.m_mapExistingEvents.get(t),
            };
            r.push(n);
          }
        }),
        r
      );
    }
    async LoadImportantEventsAroundToday(e, t, n, r, i, a) {
      let o = [],
        s = [];
      (s.push({ priority: 0, appids: t }),
        n && s.push({ priority: 1, appids: n }),
        r && s.push({ priority: 2, appids: r }));
      let c = {
          count: e,
          strAppIDPriority: JSON.stringify({ prioritized_apps: s }),
          filterToEventTypes: a ? a.toString() : ``,
          l: x.LANGUAGE,
        },
        l = x.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        u = await Z.default.get(l, {
          params: c,
          withCredentials: !0,
          cancelToken: i.token,
        });
      return (
        D(() => {
          for (let e of u.data.events) {
            let t = Q(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new F(e.clan_steamid);
              this.InsertEventModelFromClanEventData(t, e);
            }
            o.push(this.m_mapExistingEvents.get(t));
          }
        }),
        o
      );
    }
    InsertUniqueEventGID(e, t, n) {
      let r = this.m_mapClanToGIDs.get(e);
      r ||= (this.m_mapClanToGIDs.set(e, []), this.m_mapClanToGIDs.get(e));
      let i = this.m_mapAppIDToGIDs.get(t);
      ((i ||= (this.m_mapAppIDToGIDs.set(t, []), this.m_mapAppIDToGIDs.get(t))),
        r.indexOf(n) == -1 && (r.push(n), i.push(n)));
    }
    ResetModel() {}
    async DeleteClanEvent(e, t) {
      this.m_mapExistingEvents.has(t) &&
        (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
      let n = new URLSearchParams();
      (n.append(`sessionid`, s()),
        n.append(`bDelete`, `1`),
        n.append(`gid`, t));
      let r = await Z.default.post(
        x.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/ajaxcreateupdatedeletepartnerevents/`,
        n,
      );
      return (this.RemoveGIDFromList(e, t), r.data);
    }
    RemoveGIDFromList(e, t) {
      if (
        (this.m_mapExistingEvents.delete(t),
        this.m_mapClanToGIDs.has(e.GetAccountID()))
      ) {
        let n = this.m_mapClanToGIDs.get(e.GetAccountID()),
          r = n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      }
    }
    FlushEventFromCache(e, t) {
      if (
        (e &&
          this.m_mapExistingEvents.has(e) &&
          ((t ||= this.m_mapExistingEvents.get(e).AnnouncementGID),
          this.m_mapExistingEvents.delete(e)),
        t &&
          (this.m_mapExistingEvents.has(`old_announce_` + t) &&
            this.m_mapExistingEvents.delete(ac + t),
          this.m_mapAnnouncementBodyToEvent.has(t)))
      ) {
        let e = this.m_mapAnnouncementBodyToEvent.get(t);
        (e &&
          this.m_mapExistingEvents.has(e) &&
          this.m_mapExistingEvents.delete(e),
          this.m_mapAnnouncementBodyToEvent.delete(t));
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
      e,
      t,
      n,
      r,
      i,
      a = !1,
    ) {
      let o = gc(a ? 0 : me(x.LANGUAGE)),
        s = {
          appid: t,
          clan_accountid: e ? e.GetAccountID() : void 0,
          announcement_gid: r,
          event_gid: n,
          lang_list: o,
          last_modified_time: i || 0,
          origin: self.origin,
          for_edit: a,
          only_summary: this.m_bOnlySummary,
        },
        c = null,
        l = null;
      if (a) {
        let n = ye();
        (n === `community`
          ? ((l = x.COMMUNITY_BASE_URL),
            (l += e ? `gid/` + e.ConvertTo64BitString() : `ogg/` + t),
            (l += `/`))
          : (l =
              n === `partner`
                ? x.PARTNER_BASE_URL + `sales/`
                : x.STORE_BASE_URL + `events/`),
          (l += `ajaxgetpartnereventforedit`),
          (c = { params: s, withCredentials: !0 }));
      } else
        ((l = x.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (c = { params: s, withCredentials: !1 }));
      try {
        let e = await Z.default.get(l, c);
        if (e.data.success !== 1) return;
        let t = e.data.event,
          n = Q(t);
        if (
          !this.m_mapExistingEvents.has(n) ||
          (this.m_mapExistingEvents.get(n).rtime32_last_modified ?? 0) <
            (t.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(n).rtime32_moderator_reviewed ?? 0) <
            (t.rtime_mod_reviewed ?? 0)
        ) {
          v(t.clan_steamid, `ClanSteamID is missing from data we received`);
          let e = new F(t.clan_steamid);
          this.InsertEventModelFromClanEventData(e, t);
        }
        return this.m_mapExistingEvents.get(n);
      } catch {
        return;
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
      e,
      t,
      n,
      r,
      i,
      a,
    ) {
      if (n && this.m_mapExistingEvents.has(n))
        return this.m_mapExistingEvents.get(n);
      if (r) {
        if (this.m_mapExistingEvents.has(`old_announce_` + r))
          return this.m_mapExistingEvents.get(ac + r);
        if (this.m_mapAnnouncementBodyToEvent.has(r)) {
          let e = this.m_mapAnnouncementBodyToEvent.get(r);
          if (e && this.m_mapExistingEvents.has(e))
            return this.m_mapExistingEvents.get(e);
        }
      }
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        t,
        n,
        r,
        i,
        a,
      );
    }
    async LoadPartnerEventFromAnnoucementGID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        e,
        void 0,
        t,
        n,
        r,
      );
    }
    async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        void 0,
        void 0,
        t,
        n,
        r,
      );
    }
    async LoadPartnerEventFromClanEventGID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        e,
        t,
        void 0,
        n,
        r,
      );
    }
    async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        void 0,
        t,
        void 0,
        n,
        r,
      );
    }
    async LoadPartnerEventGeneric(e, t, n, r, i) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        t,
        n,
        r,
        i,
      );
    }
    async LoadHiddenPartnerEvent(e, t) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        void 0,
        t,
        void 0,
        0,
        !0,
      );
    }
    async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        void 0,
        void 0,
        t,
        0,
        !0,
      );
    }
    async HintLoadImportantUpdates() {
      let e = a(36e5);
      if (e != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = e;
        let t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
          n = x.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          r = await Z.default.get(n, { params: t, withCredentials: !0 });
        r.data.apps &&
          r.data.apps.length > 0 &&
          D(() => {
            let e = new Map(r.data.apps?.map((e) => [e.appid, new yc(e)]));
            this.m_mapUpdatedApps = e;
          });
      }
      return this.m_mapUpdatedApps;
    }
    GetAppImportantUpdate(e) {
      return (
        this.HintLoadImportantUpdates().catch((e) => {
          console.log(`UpdatedApps failed to load: `, e.response?.data);
        }),
        this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
      );
    }
    async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
      let n =
        x.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        t;
      return (await Z.default.get(n)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, n) {
      let r = [],
        i = x.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        a = gc(me(x.LANGUAGE)),
        o = null,
        s = null;
      if (e) {
        let t = [];
        (e.forEach((e) => {
          this.m_mapExistingEvents.has(e)
            ? r.push(this.m_mapExistingEvents.get(e))
            : t.push(e);
        }),
          t.sort(),
          (o = t));
      }
      if (t) {
        let e = [];
        (t.forEach((t) => {
          if (
            this.m_mapAnnouncementBodyToEvent.has(t) &&
            this.m_mapAnnouncementBodyToEvent.get(t) &&
            this.m_mapExistingEvents.has(
              this.m_mapAnnouncementBodyToEvent.get(t),
            )
          ) {
            let e = this.m_mapAnnouncementBodyToEvent.get(t);
            if (e) {
              let t = this.m_mapExistingEvents.get(e);
              t && r.push(t);
            }
          } else e.push(t);
        }),
          e.sort(),
          (s = e));
      }
      if (!o && !s) return r;
      let c = [];
      for (; (o?.length ?? 0) > 0 || (s?.length ?? 0) > 0;) {
        let e = {
          event_gids:
            (o?.length ?? 0) > 0 ? o?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (s?.length ?? 0) > 0 ? s?.splice(0, 100).join(`,`) : void 0,
          lang_list: a,
          origin: self.origin,
        };
        c.push(
          Z.default.get(i, { params: e, cancelToken: n ? n.token : void 0 }),
        );
      }
      try {
        let e = await Promise.all([...c]),
          t = 0;
        D(() =>
          e.forEach((e) => {
            if (e && e.data && e.data.events)
              for (let t of e.data.events) {
                let e = Q(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new F(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                r.push(this.m_mapExistingEvents.get(e));
              }
            else {
              let t = I(e);
              console.error(
                `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error ` +
                  t.strErrorMsg,
                t,
              );
            }
            t += 1;
          }),
        );
      } catch (e) {
        let t = I(e);
        console.error(
          `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error ` +
            t.strErrorMsg,
          t,
        );
      }
      return r;
    }
    async SavePartnerEventSaleAssets(e, t, n, r) {
      let i = null;
      if (!this.m_mapExistingEvents.has(t)) return !1;
      try {
        let a = `${x.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
          o = new FormData();
        (o.append(`sessionid`, s()),
          o.append(`gidclanevent`, t),
          o.append(`json`, JSON.stringify(n)),
          o.append(`pageStyles`, JSON.stringify(r)));
        let c = await Z.default.post(a, o, { withCredentials: !0 });
        if (c?.data?.success == 1) {
          let e = this.m_mapExistingEvents.get(t);
          if (e && e.jsondata) {
            for (let t in n)
              if (n.hasOwnProperty(t) && n[t]) {
                let r = t,
                  i = n[r];
                i !== void 0 && r !== void 0 && (e.jsondata[r] = i);
              }
          }
          return (this.GetPartnerEventChangeCallback(t).Dispatch(e), !0);
        }
        i = I(c);
      } catch (e) {
        i = I(e);
      }
      return (
        console.error(
          `CPartnerEventStore.SavePartnerEventSaleAssets failed: ` +
            i?.strErrorMsg,
          i,
        ),
        !1
      );
    }
    BIsSummaryOnlyStore() {
      return this.m_bOnlySummary;
    }
  };
(b([d], $.prototype, `m_mapExistingEvents`, void 0),
  b([d], $.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  b([d], $.prototype, `m_mapClanToGIDs`, void 0),
  b([d], $.prototype, `m_mapAppIDToGIDs`, void 0),
  b([d], $.prototype, `m_mapUpdatedApps`, void 0),
  b([y], $.prototype, `Init`, null),
  b([h], $.prototype, `GetPartnerEventChangeCallback`, null),
  b([y], $.prototype, `RegisterClanEvents`, null),
  b([y], $.prototype, `InsertEventModelFromClanEventData`, null),
  b([y], $.prototype, `DeleteClanEvent`, null),
  b([y], $.prototype, `RemoveGIDFromList`, null),
  b([y], $.prototype, `FlushEventFromCache`, null),
  b([h], $.prototype, `SavePartnerEventSaleAssets`, null));
var bc = new $();
(Mo(`g_PartnerEventStore`, bc), Mo(`g_PartnerEventSummaryStore`, new $(!0)));
function xc(e, t = ``, n = null) {
  return Dc.InstrumentLink(e, t, n);
}
function Sc(e, t, n) {
  let r = zo();
  return L.useMemo(() => {
    let i = ze(e).toLowerCase(),
      a = ze(o.COMMUNITY_BASE_URL).toLowerCase(),
      s = ze(o.STORE_BASE_URL).toLowerCase();
    return i === a || i === s ? Wo(r, e, t, n) : e;
  }, [r, e, t, n]);
}
function Cc(e, t, n = null) {
  let r = Tc(t, n),
    i = t ? q.GetCuratorClanIDParam(t) : null;
  return q.AddNavParamToURL(e, r, i);
}
function wc(e, t, n, r = null) {
  let i = Cc(e, t, r);
  if (n && Object.keys(n).length > 0)
    try {
      let e = new URL(tt(i)),
        t = new URLSearchParams(e.search);
      return (
        Object.entries(n).forEach(([e, n]) => {
          t.set(e, encodeURIComponent(n ?? ``));
        }),
        e.origin + e.pathname + `?` + t.toString() + e.hash
      );
    } catch {}
  return i;
}
function Tc(e, t = null) {
  return e?.domain ? Dc.GetLinkParam(e, t) : x.SNR;
}
function Ec(e, t = ``, n = null) {
  return xc(`${x.STORE_BASE_URL}app/${e}`, t, n);
}
var Dc = class e {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(t, n, r = null, i = null) {
    ((e.sm_strDomain = t),
      (e.sm_strController = n),
      (e.sm_strMethod = r),
      (e.sm_strSubmethod = i),
      (e.sm_strComputedLinkPrefix = null));
  }
  static GetDefaultParams() {
    let t = { domain: e.sm_strDomain, controller: e.sm_strController };
    return (
      e.sm_strMethod && (t.method = e.sm_strMethod),
      e.sm_strSubmethod && (t.submethod = e.sm_strSubmethod),
      t
    );
  }
  static InstrumentLink(t, n, r = null) {
    let i = e.GetLinkParam(n, r),
      a = typeof n == `string` ? null : q.GetCuratorClanIDParam(n);
    return q.AddNavParamToURL(t, i, a);
  }
  static GetLinkParam(t, n = null) {
    let r;
    if (typeof t != `string`) {
      if (t.domain) return q.GetSNRLinkParam(t, n);
      r = t.feature || ``;
    }
    let i;
    if (!e.sm_strComputedLinkPrefix && !e.ComputeStaticLinkPrefix())
      return null;
    i = e.sm_strComputedLinkPrefix;
    let a = q.EncodeEventComponent(r);
    return (a && ((i += `_` + a), n && (i += `_` + n)), i);
  }
  static ComputeStaticLinkPrefix() {
    return e.sm_strDomain
      ? ((e.sm_strComputedLinkPrefix = q.ComputeLinkPrefix(
          e.sm_strDomain,
          e.sm_strController,
          e.sm_strMethod,
          e.sm_strSubmethod,
        )),
        !0)
      : (v(
          !1,
          `CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!`,
        ),
        !1);
  }
};
function Oc(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let n = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${o.MEDIA_CDN_COMMUNITY_URL}${n}`;
    }
    if (typeof e[t] == `string`) {
      let n = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${o.STORE_ITEM_BASE_URL}${n}`;
    }
  }
}
function kc(e, t = `full`) {
  let n = ``;
  switch (t) {
    case `thumb`:
      n = `.116x65`;
      break;
    case `600x338`:
      n = `.600x338`;
      break;
    case `1920x1080`:
      n = `.1920x1080`;
      break;
    case `full`:
      n = ``;
      break;
    default:
      Se(t, `Invalid size: ${t}`);
  }
  return (
    o.STORE_ITEM_BASE_URL + e.filename.replace(/\.([^.]+)(\?.*)?$/, `${n}.$1$2`)
  );
}
function Ac(e) {
  let { data: t } = da(e),
    n = uo();
  if (t)
    return [
      ...(t.all_ages_screenshots || []),
      ...(!n && t.mature_content_screenshots
        ? t.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
function jc(e, ...t) {
  let { data: n } = ua(e);
  return Mc(n, ...t);
}
function Mc(e, ...t) {
  if (!e?.asset_url_format) return;
  let n = t.find((t) => {
    let n = e[t];
    return typeof n == `string` && n.trim() !== ``;
  });
  return n && Oc(e, n);
}
function Nc(e) {
  return e?.is_coming_soon
    ? Fc(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? Jn(e.steam_release_date)
      : ``;
}
function Pc(e) {
  return Nc(e.releaseInfo);
}
function Fc(e, t, n) {
  switch (e) {
    case `date_full`:
      return Jn(t);
    case `date_month`:
      return Xn(new Date(t * 1e3));
    case `date_quarter`:
      return Zn(new Date(t * 1e3));
    case `date_year`:
      return Yn(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || Ee.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || Ee.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function Ic(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return zi(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? Xn(new Date(t * 1e3))
        : Jn(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? Jn(t) : ``);
}
var Lc = (function (e) {
  return (
    (e[(e.A = 0)] = `A`),
    (e[(e.B = 1)] = `B`),
    (e[(e.X = 2)] = `X`),
    (e[(e.Y = 3)] = `Y`),
    (e[(e.Left = 4)] = `Left`),
    (e[(e.Right = 5)] = `Right`),
    (e[(e.Up = 6)] = `Up`),
    (e[(e.Down = 7)] = `Down`),
    (e[(e.HomeMenu = 8)] = `HomeMenu`),
    (e[(e.QuickMenu = 9)] = `QuickMenu`),
    (e[(e.Select = 10)] = `Select`),
    (e[(e.Start = 11)] = `Start`),
    (e[(e.LeftBumper = 12)] = `LeftBumper`),
    (e[(e.RightBumper = 13)] = `RightBumper`),
    (e[(e.LeftTrigger = 14)] = `LeftTrigger`),
    (e[(e.RightTrigger = 15)] = `RightTrigger`),
    (e[(e.LeftStick = 16)] = `LeftStick`),
    (e[(e.LeftStickClick = 17)] = `LeftStickClick`),
    (e[(e.RightStick = 18)] = `RightStick`),
    (e[(e.RightStickClick = 19)] = `RightStickClick`),
    (e[(e.LeftTrackpad = 20)] = `LeftTrackpad`),
    (e[(e.LeftTrackpadClick = 21)] = `LeftTrackpadClick`),
    (e[(e.RightTrackpad = 22)] = `RightTrackpad`),
    (e[(e.RightTrackpadClick = 23)] = `RightTrackpadClick`),
    (e[(e.RearLeftUpper = 24)] = `RearLeftUpper`),
    (e[(e.RearLeftLower = 25)] = `RearLeftLower`),
    (e[(e.RearRightUpper = 26)] = `RearRightUpper`),
    (e[(e.RearRightLower = 27)] = `RearRightLower`),
    e
  );
})({});
function Rc(e) {
  switch (e) {
    case P.OK:
      return 0;
    case P.CANCEL:
      return 1;
    case P.SECONDARY:
      return 2;
    case P.OPTIONS:
      return 3;
    case P.DIR_LEFT:
      return 4;
    case P.DIR_RIGHT:
      return 5;
    case P.DIR_UP:
      return 6;
    case P.DIR_DOWN:
      return 7;
    case P.STEAM_GUIDE:
      return 8;
    case P.STEAM_QUICK_MENU:
      return 9;
    case P.SELECT:
      return 10;
    case P.START:
      return 11;
    case P.BUMPER_LEFT:
      return 12;
    case P.BUMPER_RIGHT:
      return 13;
    case P.TRIGGER_LEFT:
      return 14;
    case P.TRIGGER_RIGHT:
      return 15;
    case P.REAR_LEFT_UPPER:
      return 24;
    case P.REAR_LEFT_LOWER:
      return 25;
    case P.REAR_RIGHT_UPPER:
      return 26;
    case P.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var zc = class e {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new Fe(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(e) {
    let t = new ge();
    return (
      t.Push(
        e.FocusChangedCallbacks.Register(this.OnFocusNavigationChanged)
          .Unregister,
      ),
      t.Push(
        e.NavTreeActivatedOrReactivatedCallbacks.Register(
          this.OnActiveNavTreeChanged,
        ).Unregister,
      ),
      t.GetUnregisterFunc()
    );
  }
  BFromActiveNavTree(e, t) {
    let n = t?.Tree;
    return ((n ||= e?.Tree), n && n.Controller.IsActiveFocusNavTree(n));
  }
  OnFocusNavigationChanged(e, t, n) {
    this.BFromActiveNavTree(t, n) && this.UpdateForFocusedNode(n);
  }
  OnActiveNavTreeChanged(e) {
    if (!e.Controller.IsActiveFocusNavTree(e)) return;
    let t = e.GetLastFocusedNode() ?? e.Root;
    t != this.m_nodeForCurrentDescriptions && this.UpdateForFocusedNode(t);
  }
  UpdateForFocusedNode(e) {
    if (
      ((this.m_nodeForCurrentDescriptions = e),
      this.m_actionDescriptionChangedCallbackRegistrations.forEach((e) =>
        e.Unregister(),
      ),
      (this.m_actionDescriptionChangedCallbackRegistrations = []),
      e)
    ) {
      let t = () =>
        this.SetActionDescriptionsFromMap(
          e.GetActiveActionDescriptions() ?? {},
        );
      t();
      for (let n = e; n != null; n = n.Parent)
        this.m_actionDescriptionChangedCallbackRegistrations.push(
          n.ActionDescriptionChangedCallbackList.Register(() => t()),
        );
    } else this.SetActionDescriptionsFromMap({ [P.OK]: null });
  }
  GetActionDescription(t) {
    let n;
    return (
      this.m_boundActions.has(t)
        ? (n = this.m_boundActions.get(t))
        : this.m_defaultActions.has(t) && (n = this.m_defaultActions.get(t)),
      e.Log(`GetActionDescription`, n),
      n
    );
  }
  GetActionDescriptions() {
    let e = Object.values(Lc).filter((e) => typeof e == `number`),
      t = {};
    for (let n of e) t[n] = this.GetActionDescription(n);
    return t;
  }
  Notify() {
    let e = this.GetActionDescriptions();
    this.m_globalActionsSubscriptions.forEach((t) => t(e));
  }
  IsDefaultAction(e) {
    return this.GetActionDescription(e) === this.m_defaultActions.get(e);
  }
  SetDefaultAction(e, t) {
    return (
      t === void 0
        ? this.m_defaultActions.delete(e)
        : this.m_defaultActions.set(e, t),
      !this.m_boundActions.has(e)
    );
  }
  SetDefaultActionsFromMap(e) {
    let t = !1;
    for (let n in e) {
      let r = parseInt(n);
      this.SetDefaultAction(r, e[r]) && (t = !0);
    }
    t && this.Notify();
  }
  ClearActions() {
    (e.Log(`ClearActionDescriptions`),
      this.m_boundActions.clear(),
      this.Notify());
  }
  SetActionsFromMap(e) {
    let t = !1,
      n = Array.from(this.m_boundActions.keys());
    for (let r of n) e[r] === void 0 && this.SetAction(r, void 0) && (t = !0);
    for (let n in e) {
      let r = parseInt(n);
      this.SetAction(r, e[r]) && (t = !0);
    }
    t && this.Notify();
  }
  SetActionDescriptionsFromMap(e) {
    let t = {};
    for (let n in e) {
      let r = parseInt(n),
        i = Rc(r);
      t[i] = e[r];
    }
    this.SetActionsFromMap(t);
  }
  SetAction(t, n) {
    if ((e.Log(`SetActionDescription`, t, n), n === void 0)) {
      if (!this.m_boundActions.has(t)) return !1;
      this.m_boundActions.delete(t);
    } else {
      if (Pe(this.m_boundActions.get(t), n)) return !1;
      this.m_boundActions.set(t, n);
    }
    return !0;
  }
  SubscribeToActions(e) {
    return (
      this.m_globalActionsSubscriptions.push(e),
      e(this.GetActionDescriptions()),
      () => {
        let t = this.m_globalActionsSubscriptions?.indexOf(e);
        this.m_globalActionsSubscriptions && t != null && t >= 0
          ? this.m_globalActionsSubscriptions.splice(t, 1)
          : console.error(
              `Unsubscribing an actions handler that was already unsubscribed`,
            );
      }
    );
  }
};
(b([h], zc.prototype, `OnFocusNavigationChanged`, null),
  b([h], zc.prototype, `OnActiveNavTreeChanged`, null),
  b([h], zc.prototype, `SetActionDescriptionsFromMap`, null));
var Bc = new URL(
  `../../images/webui/defaultappheader.png?v=valveisgoodatcaching`,
  import.meta.url,
).href;
export {
  xa as $,
  Xo as A,
  nt as At,
  Po as B,
  ss as C,
  lr as Ct,
  Qo as D,
  $t as Dt,
  $o as E,
  qn as Et,
  Bo as F,
  wo as G,
  jo as H,
  Ho as I,
  _o as J,
  yo as K,
  Uo as L,
  qo as M,
  Go as N,
  as as O,
  jt as Ot,
  zo as P,
  G as Q,
  q as R,
  J as S,
  Jr as St,
  rs as T,
  $n as Tt,
  bo as U,
  Mo as V,
  xo as W,
  io as X,
  go as Y,
  ro as Z,
  hc as _,
  fa as _t,
  Oc as a,
  ua as at,
  _s as b,
  Gi as bt,
  jc as c,
  la as ct,
  Cc as d,
  ra as dt,
  Ka as et,
  wc as f,
  ma as ft,
  bc as g,
  ha as gt,
  Sc as h,
  ga as ht,
  Pc as i,
  Ra as it,
  is as j,
  _t as jt,
  es as k,
  Hn as kt,
  Dc as l,
  ta as lt,
  Ec as m,
  da as mt,
  Lc as n,
  Ia as nt,
  kc as o,
  sa as ot,
  Tc as p,
  pa as pt,
  vo as q,
  Ic as r,
  Pa as rt,
  Ac as s,
  ca as st,
  Bc as t,
  Ca as tt,
  xc as u,
  na as ut,
  ys as v,
  _a as vt,
  cs as w,
  nr as wt,
  ls as x,
  zi as xt,
  Y as y,
  Ki as yt,
  Lo as z,
};
