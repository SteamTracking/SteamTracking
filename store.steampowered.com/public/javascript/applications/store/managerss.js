/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  It as n,
  Nt as r,
  Ot as i,
  c as a,
  dt as o,
  et as s,
  kt as c,
} from "./chunk~01cfc309bf.js";
import { C as l } from "./chunk~f57d770d64.js";
import { n as ee } from "./chunk~cf3721cc1c.js";
import { n as te } from "./chunk~8681f5c764.js";
import { t as u } from "./chunk~eefd71512b.js";
import { a as ne } from "./chunk~e867464c75.js";
import { T as re, i as d, y as ie } from "./chunk~2f8c67b4de.js";
import "./chunk~95ecbf576c.js";
import "./chunk~21654e981a.js";
import { n as f } from "./chunk~fc8a9e4879.js";
import {
  Ar as p,
  Ax as m,
  By as ae,
  Er as oe,
  Gu as h,
  Hn as g,
  In as _,
  Ln as se,
  Nx as ce,
  Pc as v,
  TS as le,
  Uy as ue,
  Xu as y,
  Zy as de,
  _S as b,
  _b as fe,
  bb as pe,
  bx as me,
  cx as he,
  dS as x,
  dr as S,
  eS as C,
  fS as w,
  fr as ge,
  gS as T,
  gr as E,
  hS as D,
  ib as O,
  kS as _e,
  kx as k,
  lS as ve,
  lb as ye,
  lr as A,
  lx as be,
  mS as j,
  pS as M,
  pr as N,
  qb as P,
  sS as xe,
  sr as Se,
  tl as Ce,
  vS as F,
  vx as I,
  wb as we,
  yr as L,
  zn as R,
} from "./main.js";
var z = e(s()),
  B = e(r(), 1),
  Te = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || x(e.M()),
        B.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: j.readFixed64String, bw: F.writeFixed64String },
            name: { n: 2, br: j.readString, bw: F.writeString },
            type: { n: 3, d: 0, br: j.readUint32, bw: F.writeUint32 },
            url: { n: 4, br: j.readString, bw: F.writeString },
            associated_apps: {
              n: 5,
              r: !0,
              q: !0,
              br: j.readUint32,
              pbr: j.readPackedUint32,
              bw: F.writeRepeatedUint32,
            },
            poll_interval: {
              n: 6,
              d: 300,
              br: j.readUint32,
              bw: F.writeUint32,
            },
            kv_description: { n: 7, br: j.readString, bw: F.writeString },
            kv_filter: { n: 8, br: j.readString, bw: F.writeString },
            publish_to_clan_account_id: {
              n: 9,
              br: j.readUint32,
              bw: F.writeUint32,
            },
            language: { n: 10, br: j.readUint32, bw: F.writeUint32 },
            last_error: { n: 11, br: j.readUint32, bw: F.writeUint32 },
            last_update: { n: 12, br: j.readUint32, bw: F.writeUint32 },
            last_checked: { n: 13, br: j.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNewsFeedDef`;
    }
  },
  V = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || x(e.M()),
        B.Message.initialize(this, t, 0, -1, [11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: j.readFixed64String, bw: F.writeFixed64String },
            news_feed_gid: {
              n: 2,
              br: j.readFixed64String,
              bw: F.writeFixed64String,
            },
            title: { n: 3, br: j.readString, bw: F.writeString },
            url: { n: 4, br: j.readString, bw: F.writeString },
            author: { n: 5, br: j.readString, bw: F.writeString },
            rtime_date: { n: 6, br: j.readUint32, bw: F.writeUint32 },
            contents: { n: 7, br: j.readString, bw: F.writeString },
            commited: { n: 8, br: j.readBool, bw: F.writeBool },
            deleted: { n: 9, br: j.readBool, bw: F.writeBool },
            tags: { n: 10, br: j.readString, bw: F.writeString },
            appids: {
              n: 11,
              r: !0,
              q: !0,
              br: j.readUint32,
              pbr: j.readPackedUint32,
              bw: F.writeRepeatedUint32,
            },
            recommendation_state: { n: 12, br: j.readEnum, bw: F.writeEnum },
            received_compensation: { n: 13, br: j.readBool, bw: F.writeBool },
            received_for_free: { n: 14, br: j.readBool, bw: F.writeBool },
            blurb: { n: 15, br: j.readString, bw: F.writeString },
            event_subtitle: { n: 16, br: j.readString, bw: F.writeString },
            event_summary: { n: 17, br: j.readString, bw: F.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNewsFeedPostDef`;
    }
  },
  Ee = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content || x(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content: { n: 1, br: j.readString, bw: F.writeString },
            preserve_newlines: { n: 2, d: !1, br: j.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_ConvertHTMLToBBCode_Request`;
    }
  },
  De = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.converted_content || x(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            converted_content: { n: 1, br: j.readString, bw: F.writeString },
            found_html: { n: 2, br: j.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_ConvertHTMLToBBCode_Response`;
    }
  },
  Oe = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rss_message || x(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rss_message: { n: 1, br: j.readString, bw: F.writeString },
            unique_id: { n: 2, br: j.readString, bw: F.writeString },
            title: { n: 3, br: j.readString, bw: F.writeString },
            desc: { n: 4, br: j.readString, bw: F.writeString },
            jsondata: { n: 5, br: j.readString, bw: F.writeString },
            post: { n: 6, c: V },
            valid_post: { n: 7, br: j.readBool, bw: F.writeBool },
            post_error_msg: { n: 8, br: j.readString, bw: F.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNewsPartnerEventPreview`;
    }
  },
  H = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rss_url || x(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rss_url: { n: 1, br: j.readString, bw: F.writeString },
            lang: { n: 2, br: j.readUint32, bw: F.writeUint32 },
            clan_account_id: { n: 3, br: j.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_PreviewPartnerEvents_Request`;
    }
  },
  ke = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rss_url || x(e.M()),
        B.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rss_url: { n: 1, br: j.readString, bw: F.writeString },
            results: { n: 2, c: Oe, r: !0, q: !0 },
            error_msg: { n: 3, br: j.readString, bw: F.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_PreviewPartnerEvents_Response`;
    }
  },
  Ae = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || x(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: j.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_GetNewsFeedByRepublishClan_Request`;
    }
  },
  je = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.feeds || x(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { feeds: { n: 1, c: Te, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_GetNewsFeedByRepublishClan_Response`;
    }
  },
  Me = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.post || x(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            post: { n: 1, c: V },
            draft: { n: 2, br: j.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_PublishPartnerEvent_Request`;
    }
  },
  Ne = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_event_gid || x(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_event_gid: {
              n: 1,
              br: j.readFixed64String,
              bw: F.writeFixed64String,
            },
            news_post_gid: {
              n: 2,
              br: j.readFixed64String,
              bw: F.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_PublishPartnerEvent_Response`;
    }
  },
  Pe = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.news_feed_gid || x(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            news_feed_gid: {
              n: 1,
              br: j.readFixed64String,
              bw: F.writeFixed64String,
            },
            start_index: { n: 2, d: 0, br: j.readUint32, bw: F.writeUint32 },
            amount: { n: 3, d: 100, br: j.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_GetBatchPublishedPartnerEvent_Request`;
    }
  },
  Fe = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || x(e.M()),
        B.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: j.readUint32, bw: F.writeUint32 },
            news_feed_gid: {
              n: 2,
              br: j.readFixed64String,
              bw: F.writeFixed64String,
            },
            clan_event_gid: {
              n: 3,
              r: !0,
              q: !0,
              br: j.readFixed64String,
              pbr: j.readPackedFixed64String,
              bw: F.writeRepeatedFixed64String,
            },
            news_post_gid: {
              n: 4,
              r: !0,
              q: !0,
              br: j.readFixed64String,
              pbr: j.readPackedFixed64String,
              bw: F.writeRepeatedFixed64String,
            },
            news_url: {
              n: 5,
              r: !0,
              q: !0,
              br: j.readString,
              bw: F.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= D(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return w(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_GetBatchPublishedPartnerEvent_Response`;
    }
  },
  U;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`News.ConvertHTMLToBBCode#1`, m(Ee, t, n), De, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ConvertHTMLToBBCode = t;
  function n(e, t, n) {
    return e.SendMsg(`News.PreviewPartnerEvents#1`, m(H, t, n), ke, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.PreviewPartnerEvents = n;
  function r(e, t, n) {
    return e.SendMsg(`News.GetNewsFeedByRepublishClan#1`, m(Ae, t, n), je, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetNewsFeedByRepublishClan = r;
  function i(e, t, n) {
    return e.SendMsg(`News.PublishPartnerEvent#1`, m(Me, t, n), Ne, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.PublishPartnerEvent = i;
  function a(e, t, n) {
    return e.SendMsg(`News.GetBatchPublishedPartnerEvent#1`, m(Pe, t, n), Fe, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetBatchPublishedPartnerEvent = a;
})((U ||= {}));
var W = class {
  m_clanAccountID;
  m_clanSteamID;
  m_strRSSFeedURL = void 0;
  m_strRSSGID = void 0;
  m_rtimeRSSLastChecked = void 0;
  m_nPollIntervalSeconds = void 0;
  m_eRSSFeedLanguage = void 0;
  m_eCuratorLanguage = void 0;
  m_mapURLToPosted = new Map();
  constructor(e) {
    (i(this),
      (this.m_clanAccountID = e.clanid),
      (this.m_clanSteamID = de.InitFromClanID(
        this.m_clanAccountID,
        I.EUNIVERSE,
      )),
      (this.m_strRSSFeedURL = e.rss_feed_url),
      (this.m_strRSSGID = e.rss_feed_gid),
      (this.m_eRSSFeedLanguage = e.rss_feed_language),
      (this.m_rtimeRSSLastChecked = e.rss_feed_last_checked),
      (this.m_nPollIntervalSeconds = e.poll_interval),
      (this.m_eCuratorLanguage = e.curation_language));
  }
  GetFeedLanguageHandleUnset() {
    return this.m_eRSSFeedLanguage == -1
      ? this.m_eCuratorLanguage == -1
        ? 0
        : this.m_eCuratorLanguage
      : this.m_eRSSFeedLanguage;
  }
  GetCuratorLanguage() {
    return this.m_eCuratorLanguage == -1 ? 0 : this.m_eCuratorLanguage;
  }
  BHasSavedRSSURL() {
    return !!this.m_strRSSFeedURL;
  }
  GetRSSUrl() {
    return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : ``;
  }
  GetRSSLastRtimeChecked() {
    return this.m_rtimeRSSLastChecked;
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  GetClanAccountID() {
    return this.m_clanAccountID;
  }
  BHasSetupFeed(e) {
    return !!this.m_strRSSGID && this.m_strRSSFeedURL === e;
  }
  BIsAutomationEnabled() {
    return this.m_nPollIntervalSeconds > 0;
  }
  BHasFeedGID() {
    return !!this.m_strRSSGID;
  }
  async PreviewPartnerEventsFromRSSFeed(e) {
    if (!this.BIsLoggedIn())
      return (
        console.error(`PreviewPartnerEventsFromRSSFeed: User not logged in`),
        null
      );
    let t = k.Init(H);
    (t.Body().set_rss_url(e),
      t.Body().set_lang(this.GetFeedLanguageHandleUnset()),
      t.Body().set_clan_account_id(this.GetClanAccountID()));
    let n = await U.PreviewPartnerEvents(G.Get().GetCuratorTransport(), t);
    return (
      n.GetEResult() != 1 &&
        console.error(
          `PreviewPartnerEventsFromRSSFeed error: ` +
            n.GetEMsg() +
            ` ` +
            n.GetEResult(),
        ),
      n
    );
  }
  async FetchPublishedEvents(e = 100) {
    if (!this.BIsLoggedIn())
      return (console.error(`FetchPublishedEvents: User not logged in`), null);
    if (!this.m_strRSSGID)
      return (
        console.error(`FetchPublishedEvents: Need to create a news feed first`),
        null
      );
    let n = k.Init(Pe);
    (n.Body().set_news_feed_gid(this.m_strRSSGID), n.Body().set_amount(e));
    let r = await U.GetBatchPublishedPartnerEvent(
      G.Get().GetCuratorTransport(),
      n,
    );
    return (
      r.GetEResult() == 1
        ? t(() => {
            for (let e = 0; e < r.Body().clan_event_gid().length; ++e) {
              let t = {
                url: r.Body().news_url()[e],
                clan_event_gid: r.Body().clan_event_gid()[e],
                news_post_gid: r.Body().news_post_gid()[e],
              };
              this.m_mapURLToPosted.set(t.url, t);
            }
          })
        : console.error(
            `FetchPublishedEvents error: EMsg:` +
              ce(r.GetEMsg()) +
              ` EResult:` +
              r.GetEResult() +
              ` msg:` +
              r.Hdr().error_message(),
          ),
      r
    );
  }
  MapArticleURLToClanEventGID(e) {
    let t = this.m_mapURLToPosted.get(e);
    if (t) return t.clan_event_gid;
  }
  BIsLoggedIn() {
    return me.logged_in;
  }
  async CreateOrUpdateRSSNewFeed(e, n = 0) {
    let r = new FormData();
    (r.append(`sessionid`, he()),
      r.append(`gid`, this.m_strRSSGID),
      r.append(`lang`, `` + this.GetCuratorLanguage()),
      r.append(`rss_url`, e),
      r.append(`polling_interval`, `` + n));
    let i =
        I.STORE_BASE_URL +
        `curator/` +
        this.m_clanAccountID +
        `/admin/ajaxmanagerssfeed`,
      a = await z.default.post(i, r, { withCredentials: !0 });
    return (
      a.data.success == 1 &&
        t(() => {
          ((this.m_strRSSGID = a.data.gid),
            (this.m_strRSSFeedURL = e),
            (this.m_nPollIntervalSeconds = n));
        }),
      a.data
    );
  }
  async UpdateAutomation(e) {
    return this.CreateOrUpdateRSSNewFeed(this.m_strRSSFeedURL, e ? 300 : 0);
  }
  async CheckForNewUpdate() {
    if (this.m_strRSSGID) {
      let e = new FormData();
      (e.append(`sessionid`, he()), e.append(`gid`, this.m_strRSSGID));
      let t =
        I.STORE_BASE_URL +
        `curator/` +
        this.m_clanAccountID +
        `/admin/ajaxcheckfornews`;
      await z.default.post(t, e, { withCredentials: !0 });
    }
  }
  async CreatePost(e, n) {
    if (!this.BIsLoggedIn())
      return (
        console.error(`CreatePartnerFromPreviewPost: User not logged in`), null
      );
    if (!this.m_strRSSGID)
      return (
        console.error(
          `CreatePartnerFromPreviewPost: Need to create a news feed first`,
        ),
        null
      );
    let r = new V();
    (r.set_gid(e.post.gid),
      r.set_news_feed_gid(this.m_strRSSGID),
      r.set_title(e.post.title),
      r.set_url(e.post.url),
      r.set_author(e.post.author),
      r.set_rtime_date(e.post.rtime_date),
      r.set_contents(e.post.contents),
      r.set_commited(e.post.commited),
      r.set_deleted(e.post.deleted),
      r.set_tags(e.post.tags),
      r.set_appids(e.post.appids),
      r.set_recommendation_state(e.post.recommendation_state),
      r.set_received_for_free(e.post.received_for_free),
      r.set_received_compensation(e.post.received_compensation),
      r.set_blurb(e.post.blurb));
    let i = k.Init(Me);
    (i.Body().set_post(r), i.Body().set_draft(n));
    let a = await U.PublishPartnerEvent(G.Get().GetCuratorTransport(), i);
    return (
      a.GetEResult() == 1
        ? (t(() => {
            let t = {
              url: e.post.url,
              clan_event_gid: a.Body().clan_event_gid(),
              news_post_gid: a.Body().news_post_gid(),
            };
            this.m_mapURLToPosted.set(e.post.url, t);
          }),
          f.LoadPartnerEventFromClanEventGIDAndClanSteamID(
            this.m_clanSteamID,
            a.Body().clan_event_gid(),
            0,
          ))
        : console.error(
            `CreatePost error: ` + a.GetEMsg() + ` ` + a.GetEResult(),
          ),
      a
    );
  }
};
(P([c], W.prototype, `m_strRSSFeedURL`, void 0),
  P([c], W.prototype, `m_strRSSGID`, void 0),
  P([c], W.prototype, `m_rtimeRSSLastChecked`, void 0),
  P([c], W.prototype, `m_nPollIntervalSeconds`, void 0),
  P([c], W.prototype, `m_eRSSFeedLanguage`, void 0),
  P([c], W.prototype, `m_eCuratorLanguage`, void 0),
  P([c], W.prototype, `m_mapURLToPosted`, void 0));
var G = class e {
  constructor() {
    i(this);
  }
  static s_CuratorAdminStore;
  m_transport;
  m_mapClanAccountToAdmin = new Map();
  m_defaultAdmin = void 0;
  m_mapClanToEventRSSStats = new Map();
  m_setPendingClanInfo = new Set();
  m_PendingClanInfoPromise;
  m_PendingClanInfoResolve;
  m_cClanInfoRequestsInFlight = 0;
  GetCuratorTransport() {
    return (
      ve(
        this.m_transport,
        `Expects Transpoate to be initialized but it is now`,
      ),
      this.m_transport
    );
  }
  GetDefaultAdmin() {
    return this.m_defaultAdmin;
  }
  GetRSSAdminStats(e) {
    return this.m_mapClanToEventRSSStats.get(e);
  }
  static Get() {
    return (
      e.s_CuratorAdminStore ||
        ((e.s_CuratorAdminStore = new e()), e.s_CuratorAdminStore.Init()),
      e.s_CuratorAdminStore
    );
  }
  Init() {
    let e = be(`curatoradmin`, `application_config`);
    (this.ValidateStoreDefault(e) &&
      ((this.m_defaultAdmin = new W(e)),
      this.m_mapClanAccountToAdmin.set(e.clanid, this.m_defaultAdmin)),
      this.ValidateWebAPI(e) &&
        (this.m_transport = ae(
          new ue(I.WEBAPI_BASE_URL, e.webapi_token),
        ).GetServiceTransport()));
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && typeof t == `object` && typeof t.clanid == `number`;
  }
  ValidateWebAPI(e) {
    let t = e;
    return t && typeof t.webapi_token == `string`;
  }
  BIsLoggedIn() {
    return me.logged_in;
  }
  BHavePendingInfoRequests() {
    return (
      this.m_setPendingClanInfo.size > 0 || this.m_cClanInfoRequestsInFlight > 0
    );
  }
  BIsLoadingClanID(e) {
    return this.m_setPendingClanInfo.has(e);
  }
  BHasClanIDLoaded(e) {
    return this.m_mapClanAccountToAdmin.has(e);
  }
  GetRSSAdminForClanAccountID(e) {
    return this.m_mapClanAccountToAdmin.get(e);
  }
  async QueueCuratorAdminInfoLoad(e) {
    return e
      ? this.m_mapClanAccountToAdmin.has(e)
        ? Promise.resolve()
        : (this.m_setPendingClanInfo.size ||
            ((this.m_PendingClanInfoPromise = new Promise(
              (e) => (this.m_PendingClanInfoResolve = e),
            )),
            window.setTimeout(() => this.FlushPendingClanInfo(), 25)),
          this.m_setPendingClanInfo.add(e),
          this.m_PendingClanInfoPromise)
      : (ve(!e, `unexpected clanid of zero or undefined: ` + e),
        Promise.resolve());
  }
  async FlushPendingClanInfo() {
    let e = this.m_PendingClanInfoResolve,
      t = Array.from(this.m_setPendingClanInfo);
    ((this.m_PendingClanInfoPromise = void 0),
      (this.m_PendingClanInfoResolve = void 0),
      this.m_setPendingClanInfo.clear(),
      await this.LoadBatchedClanRSSAdminInfo(t),
      e());
  }
  EnsureClanInfoLoaded(e) {
    let t = e.filter(
      (e) =>
        !this.m_mapClanAccountToAdmin.has(e) &&
        this.m_setPendingClanInfo.has(e),
    );
    return (
      t.forEach((e) => this.QueueCuratorAdminInfoLoad(e)),
      t.length > 0 && this.m_PendingClanInfoPromise
        ? this.m_PendingClanInfoPromise
        : Promise.resolve()
    );
  }
  async LoadBatchedClanRSSAdminInfo(e) {
    this.m_cClanInfoRequestsInFlight++;
    let n = e.filter((e) => !this.m_mapClanAccountToAdmin.has(e));
    for (; n.length > 0;) {
      let r = Math.min(50, n.length);
      (n.slice(0, r), (n = n.slice(r)));
      try {
        let n = I.STORE_BASE_URL + `events_admin/ajaxgetrssadmininfo`,
          r = { clanids: e },
          i = await z.default.get(n, { params: r, withCredentials: !0 });
        if (
          i &&
          i.data &&
          i.data.success == 1 &&
          i.data.rss_admin_infos &&
          Array.isArray(i.data.rss_admin_infos)
        )
          t(() => {
            (i.data.rss_admin_infos.forEach((e) => {
              this.m_mapClanAccountToAdmin.set(e.clanid, new W(e));
            }),
              i.data.rss_event_stats.forEach((e) => {
                this.m_mapClanToEventRSSStats.set(e.clan_account_id, e);
              }));
          });
        else {
          let e = y(i.data || {});
          console.error(
            `LoadBatchedClanRSSAdminInfo error:` + e.strErrorMsg,
            e,
          );
        }
      } catch (e) {
        let t = y(e);
        console.error(
          `LoadBatchedClanRSSAdminInfo catched error:` + t.strErrorMsg,
          t,
        );
      }
    }
    this.m_cClanInfoRequestsInFlight--;
  }
};
(P([c.shallow], G.prototype, `m_mapClanAccountToAdmin`, void 0),
  P([c.shallow], G.prototype, `m_mapClanToEventRSSStats`, void 0));
var Ie = class e {
    static s_CuratorStore;
    m_mapClanToRecommendation = new Map();
    static Get() {
      return (
        e.s_CuratorStore ||
          ((e.s_CuratorStore = new e()),
          e.s_CuratorStore.Init(),
          (window.g_CuratorRecommendationStore = e.s_CuratorStore)),
        e.s_CuratorStore
      );
    }
    Init() {}
    GetReviewForApp(e, t) {
      if (this.m_mapClanToRecommendation.has(e.GetAccountID()))
        return this.m_mapClanToRecommendation.get(e.GetAccountID()).get(t);
    }
    BHasReviewForApp(e, t) {
      return !!this.GetReviewForApp(e, t);
    }
    BHasReviewForAppByClanAccount(e, t) {
      let n = de.InitFromClanID(e, I.EUNIVERSE);
      return !!this.GetReviewForApp(n, t);
    }
    async LoadAppRecommendation(e, t) {
      this.m_mapClanToRecommendation.has(e.GetAccountID()) ||
        this.m_mapClanToRecommendation.set(e.GetAccountID(), new Map());
      let n = this.m_mapClanToRecommendation.get(e.GetAccountID()),
        r = [];
      if (
        (t.forEach((e) => {
          n.has(e) || r.push(e);
        }),
        r.length > 0)
      ) {
        let t =
            I.STORE_BASE_URL +
            `curator/` +
            e.GetAccountID() +
            `/admin/ajaxgetrecbyapps`,
          i = await z.default.get(t, {
            params: { appids: r, cc: I.COUNTRY || `US`, l: I.LANGUAGE },
          }),
          a = i && i.data;
        a &&
          a.rec_app &&
          a.rec_app.forEach((e) => {
            n.set(Number(e.appid), e);
          });
      }
    }
  },
  K = e(n()),
  Le = `f5lhuHguPrY-`,
  Re = `ptyVWjHLNng-`,
  ze = `zeS3ZkFq0zw-`,
  Be = `YQGhJWrMSMs-`,
  Ve = `_09zNEQrMhfU-`,
  He = `L50-BI1LGEY-`,
  Ue = `_-5UFO22reSE-`,
  We = `Q6niX9kwLVE-`,
  Ge = `dlUATfJ5mb4-`,
  Ke = `q7lAuIlHZzE-`,
  q = `r3p-QXe2ER8-`,
  qe = `YM5m3B8SHUU-`,
  Je = `Nujwth5QyYc-`,
  Ye = `_6gxlVwgSD9c-`,
  J = o(),
  Y = class extends K.Component {
    state = { strRssURL: G.Get().GetDefaultAdmin().GetRSSUrl() };
    m_Admin = G.Get().GetDefaultAdmin();
    OnChangeActualRSSURL(e) {
      this.setState({ strRssURL: e.target.value });
    }
    OnCreateOrSaveFeed(e) {
      (e.preventDefault(),
        g(
          (0, J.jsx)($, {
            strRSSUrl: this.state.strRssURL,
            admin: this.m_Admin,
          }),
          h(e),
        ));
    }
    OnRevert(e) {
      (e.preventDefault(),
        this.setState({ strRssURL: this.m_Admin.GetRSSUrl() }));
    }
    render() {
      let e = this.state.strRssURL === this.m_Admin.GetRSSUrl();
      if (window.Prototype !== void 0) return (window.location.reload(), null);
      let t = _e(le(this.m_Admin.GetFeedLanguageHandleUnset())),
        n = G.Get().GetDefaultAdmin();
      return (0, J.jsxs)(`div`, {
        className: v(Le),
        children: [
          (0, J.jsxs)(`div`, {
            className: `titleframe`,
            children: [
              (0, J.jsx)(`h4`, { children: O(`#CuratorAdmin_RSSFeed_title`) }),
              (0, J.jsx)(`p`, {
                className: `subtitle`,
                children: O(`#CuratorAdmin_RSSFeed_desc`),
              }),
              (0, J.jsx)(`p`, {
                children: ye(
                  `#CuratorAdmin_RSSFeed_doc_link`,
                  (0, J.jsx)(`a`, {
                    href: `https://partner.steamgames.com/doc/store/news/rss`,
                    target: `_blank`,
                    children: O(`#CuratorAdmin_RSSFeed_doc_link_text`),
                  }),
                ),
              }),
              (0, J.jsx)(`p`, {
                className: We,
                children: (0, J.jsx)(p, {
                  href:
                    I.COMMUNITY_BASE_URL +
                    `gid/` +
                    this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                    `/partnerevents/`,
                  className: v(d, re),
                  children: O(`#RSSManager_EventDashBoard`),
                }),
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `darkframe`,
            children: [
              (0, J.jsxs)(`div`, {
                className: qe,
                children: [
                  (0, J.jsx)(`span`, {
                    className: Je,
                    children: O(`#CuratorAdmin_RSSFeed_lang_only`),
                  }),
                  (0, J.jsx)(`span`, { className: Ye, children: t }),
                  (0, J.jsx)(`a`, {
                    href:
                      I.COMMUNITY_BASE_URL +
                      `gid/` +
                      this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                      `/edit `,
                    target: `_blank`,
                    className: v(d, q),
                    children: O(`#CuratorAdmin_RSSFeed_edit_language`),
                  }),
                ],
              }),
              this.m_Admin.GetFeedLanguageHandleUnset() !=
                this.m_Admin.GetCuratorLanguage() &&
                (0, J.jsx)(`div`, {
                  className: v(`YM5m3B8SHUU-`, `d1pzzsdLKFY-`),
                  children: (0, J.jsx)(`span`, {
                    className: `Nujwth5QyYc-`,
                    children: O(
                      `#CuratorAdmin_Curator_lang_only`,
                      O(`#Language_` + le(this.m_Admin.GetCuratorLanguage())),
                      t,
                    ),
                  }),
                }),
              (0, J.jsxs)(`div`, {
                className: v(ie, He),
                children: [
                  (0, J.jsx)(Se, {
                    className: void 0,
                    type: `text`,
                    name: `link_url`,
                    id: `link_url`,
                    value: this.state.strRssURL,
                    label: O(`#CuratorAdmin_RSSFeed`),
                    placeholder: O(`#CuratorAdmin_RSSFeed_placeholder`),
                    onChange: this.OnChangeActualRSSURL,
                    mustBeURL: !0,
                  }),
                  (0, J.jsx)(`a`, {
                    className: `btn_green_white_innerfade btn_medium`,
                    onClick: this.OnCreateOrSaveFeed,
                    children: (0, J.jsx)(`span`, {
                      children: O(e ? `#Button_Saved` : `#Button_Save`),
                    }),
                  }),
                  !e &&
                    (0, J.jsx)(`a`, {
                      onClick: this.OnRevert,
                      className: `btn_grey_white_innerfade btn_medium`,
                      children: O(`#Button_Revert`),
                    }),
                ],
              }),
              (0, J.jsx)(Z, { admin: n }),
              (0, J.jsx)(`br`, {}),
              (0, J.jsx)(X, { strRssURL: this.state.strRssURL, admin: n }),
            ],
          }),
        ],
      });
    }
  };
(P([C], Y.prototype, `OnChangeActualRSSURL`, null),
  P([C], Y.prototype, `OnCreateOrSaveFeed`, null),
  P([C], Y.prototype, `OnRevert`, null),
  (Y = P([a], Y)));
var Xe = Y,
  X = class extends K.Component {
    state = { strParseRssURL: this.props.strRssURL, bLoadingPreview: !1 };
    m_cancelSignal = z.default.CancelToken.source();
    componentDidMount() {
      let { admin: e } = this.props;
      e.BHasFeedGID() &&
        e.BHasSavedRSSURL() &&
        e.GetRSSUrl() == this.props.strRssURL &&
        this.OnLoadPreview();
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(
        `PreviewRSSViewAndControl component unmounted`,
      );
    }
    RenderPreviews() {
      let e = this.props.admin,
        t = [];
      if (this.state.previews) {
        let n = this.state.previews;
        ((n = n.sort((t, n) => {
          let r = e.MapArticleURLToClanEventGID(t.post.url),
            i = e.MapArticleURLToClanEventGID(n.post.url),
            a = r ? f.GetClanEventModel(r) : null,
            o = i ? f.GetClanEventModel(i) : null;
          return a && o
            ? o.postTime - a.postTime
            : a
              ? -1
              : o
                ? 1
                : n.post.rtime_date - t.post.rtime_date;
        })),
          n.forEach((n) => {
            t.push(
              (0, J.jsx)(
                Q,
                {
                  newsData: n,
                  admin: e,
                  clanSteamID: e.GetClanSteamID(),
                  fnGetRSSUrl: this.GetRSSPreviewURL,
                },
                `id: ` + n.unique_id,
              ),
            );
          }));
      }
      return t;
    }
    GetRSSPreviewURL() {
      return this.state.strParseRssURL;
    }
    OnLoadPreview() {
      this.setState(
        {
          bLoadingPreview: !0,
          previews: void 0,
          strPreviewURL: this.props.strRssURL,
          strPreviewErrorMsg: void 0,
        },
        this.DoLoadPreview,
      );
    }
    async DoLoadPreview() {
      let e = this.props.admin,
        t = await e.PreviewPartnerEventsFromRSSFeed(this.props.strRssURL);
      if (t && t.GetEResult() == 1) {
        let n = t.Body().toObject();
        this.setState(
          { strParseRssURL: n.rss_url, bLoadingPreview: !0 },
          async () => {
            await e.FetchPublishedEvents(Math.max(100, n.results.length));
            let t = [],
              r = [];
            if (
              (n.results.forEach((n) => {
                let i = e.MapArticleURLToClanEventGID(n.post.url);
                (i && t.push(i),
                  n.post.appids &&
                    n.post.appids.length === 1 &&
                    n.post.recommendation_state !== 0 &&
                    r.push(n.post.appids[0]));
              }),
              t.length > 0 &&
                (await f.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  t,
                  null,
                  this.m_cancelSignal,
                )),
              r.length > 0)
            ) {
              let t = e.GetClanSteamID();
              await Ie.Get().LoadAppRecommendation(t, r);
            }
            this.setState({ previews: n.results, bLoadingPreview: void 0 });
          },
        );
      } else
        this.setState({
          bLoadingPreview: void 0,
          strPreviewErrorMsg: O(
            `#Error_Description`,
            t.GetEResult(),
            t.Hdr().error_message(),
          ),
        });
    }
    render() {
      let e = this.RenderPreviews(),
        t = this.props.admin;
      return (0, J.jsxs)(`div`, {
        children: [
          !this.state.bLoadingPreview &&
            this.state.strPreviewURL !== this.props.strRssURL &&
            (0, J.jsx)(`div`, {
              className: `_3MoE1wNr5W8-`,
              children: (0, J.jsx)(ge, {
                disabled: !Se.validateUrl(this.props.strRssURL),
                onClick: this.OnLoadPreview,
                children: O(`#CuratorAdmin_RSSFeed_preview`),
              }),
            }),
          this.state.bLoadingPreview &&
            (0, J.jsx)(u, {
              string: O(`#Loading`),
              size: `medium`,
              position: `center`,
            }),
          this.state.strPreviewErrorMsg &&
            (0, J.jsx)(`div`, {
              className: void 0,
              children: this.state.strPreviewErrorMsg,
            }),
          e.length > 0 &&
            (0, J.jsxs)(`div`, {
              children: [
                (0, J.jsx)(`p`, {
                  children: O(
                    `#RSSManager_PreviewInfo`,
                    this.state.strPreviewURL,
                  ),
                }),
                (0, J.jsx)(`div`, { className: `d--ExixqFcY-`, children: e }),
                (0, J.jsx)(`p`, {
                  className: `Q6niX9kwLVE-`,
                  children: (0, J.jsx)(p, {
                    href:
                      I.COMMUNITY_BASE_URL +
                      `gid/` +
                      t.GetClanSteamID().ConvertTo64BitString() +
                      `/partnerevents/`,
                    className: v(`yYL-OrX9PtQ-`, `_3UP7lu7R3VU-`),
                    children: O(`#RSSManager_EventDashBoard`),
                  }),
                }),
              ],
            }),
        ],
      });
    }
  };
(P([C], X.prototype, `GetRSSPreviewURL`, null),
  P([C], X.prototype, `OnLoadPreview`, null),
  (X = P([a], X)));
var Z = class extends K.Component {
  state = {};
  OnToggleChannelAutomation(e) {
    e
      ? (this.setState({ strErrorMessage: void 0 }),
        g(
          (0, J.jsx)($, {
            strRSSUrl: this.props.admin.GetRSSUrl(),
            admin: this.props.admin,
            bActivatePooling: !0,
          }),
          window,
        ))
      : this.setState(
          { strErrorMessage: void 0, strReasonWaiting: O(`#Saving`) },
          this.BDisableAutomation,
        );
  }
  async BDisableAutomation() {
    this.props.admin
      .UpdateAutomation(!1)
      .catch(() =>
        this.setState({
          strErrorMessage: O(`#RSSManager_Status_Automation_DisableFailed`),
        }),
      )
      .finally(() => this.setState({ strReasonWaiting: void 0 }));
  }
  async OnQueueScan(e) {
    (this.setState({ strReasonWaiting: O(`#CuratorAdmin_RSSFeed_scannow`) }),
      this.props.admin
        .CheckForNewUpdate()
        .then(() =>
          g(
            (0, J.jsx)(_, {
              strTitle: O(`#CuratorAdmin_RSSFeed_scannow`),
              strDescription: O(`#CuratorAdmin_RSSFeed_queued`),
            }),
            h(e),
          ),
        )
        .catch((t) =>
          g(
            (0, J.jsx)(se, {
              strTitle: O(`#CuratorAdmin_RSSFeed_scannow`),
              strDescription: y(t).strErrorMsg,
            }),
            h(e),
          ),
        )
        .finally(() => this.setState({ strReasonWaiting: void 0 })));
  }
  render() {
    return this.props.admin.BHasSavedRSSURL()
      ? (0, J.jsxs)(`div`, {
          children: [
            !!this.state.strReasonWaiting &&
              (0, J.jsx)(u, {
                size: `medium`,
                string: this.state.strReasonWaiting,
              }),
            !!this.state.strErrorMessage &&
              (0, J.jsx)(`div`, {
                className: `wE4s0RgHgCk-`,
                children: this.state.strErrorMessage,
              }),
            (0, J.jsx)(oe, {
              onChange: this.OnToggleChannelAutomation,
              label: O(`#RSSManager_Status_Automation_Desc`),
              checked: this.props.admin.BIsAutomationEnabled(),
              description: ``,
            }),
            this.props.admin.BIsAutomationEnabled() &&
              (0, J.jsxs)(`p`, {
                children: [
                  O(`#CuratorAdmin_RSSFeed_lastscanned`),
                  `\xA0`,
                  fe(this.props.admin.GetRSSLastRtimeChecked(), !1),
                  `\xA0 @ `,
                  pe(this.props.admin.GetRSSLastRtimeChecked(), {
                    bForce24HourClock: !1,
                  }),
                  `\xA0`,
                  (0, J.jsx)(`a`, {
                    onClick: this.OnQueueScan,
                    children: (0, J.jsx)(`span`, {
                      children: O(`#CuratorAdmin_RSSFeed_scannow`),
                    }),
                  }),
                ],
              }),
          ],
        })
      : null;
  }
};
(P([C], Z.prototype, `OnToggleChannelAutomation`, null),
  P([C], Z.prototype, `OnQueueScan`, null),
  (Z = P([a], Z)));
var Q = class extends K.Component {
  state = {
    clan_event_gid: this.props.admin.MapArticleURLToClanEventGID(
      this.props.newsData.post.url,
    ),
    bLoadingPartnerEvent: !!this.props.admin.MapArticleURLToClanEventGID(
      this.props.newsData.post.url,
    ),
  };
  componentDidMount() {
    this.DoPartnerEventLoad();
  }
  async DoPartnerEventLoad() {
    if (this.state.clan_event_gid) {
      let e = this.props.admin.GetClanSteamID(),
        t = f.GetClanEventModel(this.state.clan_event_gid);
      ((t ||= await f.LoadHiddenPartnerEvent(e, this.state.clan_event_gid)),
        this.setState({ bLoadingPartnerEvent: !1, existingEventModel: t }));
    }
  }
  OnOpenPreviewAsPartnerEvent(e) {
    let { newsData: t, clanSteamID: n } = this.props,
      r = new l();
    ((r.GID = `PreviewPartnerEventRow_0`),
      (r.clanSteamID = n),
      (r.postTime = Date.now() / 1e3),
      (r.startTime = Date.now() / 1e3),
      (r.type = 28),
      r.vecTags.push(`auto_rssfeed`),
      r.vecTags.push(`curator`),
      r.vecTags.push(`curator_public`),
      r.name.set(0, t.title),
      r.description.set(0, t.desc),
      this.ValidateJSONDefault(t.jsondata) && (r.jsondata = t.jsondata),
      r.jsondata.read_more_link || (r.jsondata.read_more_link = t.unique_id));
    let i = this.props.admin.GetFeedLanguageHandleUnset();
    (!r.jsondata.localized_summary &&
      t.post.event_summary &&
      ((r.jsondata.localized_summary = xe(
        r.jsondata.localized_summary,
        32,
        null,
      )),
      (r.jsondata.localized_summary[0] = t.post.event_summary),
      i != 0 && (r.jsondata.localized_summary[i] = t.post.event_summary)),
      !r.jsondata.localized_subtitle &&
        t.post.event_subtitle &&
        ((r.jsondata.localized_subtitle = xe(
          r.jsondata.localized_subtitle,
          32,
          null,
        )),
        (r.jsondata.localized_subtitle[0] = t.post.event_subtitle),
        i != 0 && (r.jsondata.localized_subtitle[i] = t.post.event_subtitle)),
      this.ShowModalEvent(r));
  }
  OnViewEvent() {
    this.ShowModalEvent(f.GetClanEventModel(this.state.clan_event_gid));
  }
  ShowModalEvent(e) {
    let t = document.getElementById(`curator_header_area_ctn_id`);
    (t &&
      (e
        ? t.classList.add(`curator_header_area_ctn_hideme`)
        : t.classList.remove(`curator_header_area_ctn_hideme`)),
      this.setState({ eventModelForPreviewNow: e }));
  }
  ValidateJSONDefault(e) {
    let t = e;
    return !(!t || Array.isArray(t) || typeof t != `object`);
  }
  OnPostNewsEvent(e) {
    let { newsData: t, fnGetRSSUrl: n } = this.props;
    g(
      (0, J.jsx)($, {
        newsData: t,
        admin: this.props.admin,
        strRSSUrl: n(),
        fnClanEventGID: this.OnClanEventCreateSuccess,
      }),
      h(e),
    );
  }
  OnUpdateNewsEvent(e) {
    let { newsData: t, fnGetRSSUrl: n } = this.props;
    g(
      (0, J.jsx)($, {
        newsData: t,
        strRSSUrl: n(),
        admin: this.props.admin,
        fnClanEventGID: this.OnClanEventCreateSuccess,
        bUpdatePost: !0,
      }),
      h(e),
    );
  }
  HideModalEvent() {
    this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
  }
  OnClanEventCreateSuccess(e) {
    this.setState(
      { clan_event_gid: e, bLoadingPartnerEvent: !0 },
      this.DoPartnerEventLoad,
    );
  }
  OnShowRawRSS(e) {
    let t = this.props.newsData.rss_message,
      n = (() => {
        let e = t.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
        if (!e) return t;
        let n = e[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
        return n ? ne(n[0]) : e[0];
      })();
    g(
      (0, J.jsx)(_, {
        bAlertDialog: !0,
        strTitle: O(`#RSSManager_PostEvent_ViewRaw`),
        children: (0, J.jsx)(`textarea`, {
          className: Ge,
          value: n,
          disabled: !0,
        }),
      }),
      h(e),
    );
  }
  render() {
    let { newsData: e } = this.props,
      {
        clan_event_gid: t,
        existingEventModel: n,
        bLoadingPartnerEvent: r,
      } = this.state,
      i = this.props.admin,
      a = i.GetClanSteamID(),
      o = n && n.BIsStagedEvent(),
      s = e.post.appids && e.post.appids.length == 1 && e.post.appids[0],
      c =
        e.post.recommendation_state !== 0 &&
        s &&
        Ie.Get().BHasReviewForApp(a, s),
      l = ``;
    if (n) {
      let e =
        n.GetVisibilityStartTimeAndDateUnixSeconds() ||
        n.GetPostTimeAndDateUnixSeconds();
      l = we(e) + ` @ ` + pe(e, { bForce24HourClock: !1 });
    }
    return (0, J.jsxs)(`div`, {
      className: v(Re, t ? Be : ``, e.valid_post ? `` : Ve),
      children: [
        (0, J.jsx)(`span`, { className: ze, children: e.title }),
        (0, J.jsx)(`br`, {}),
        !!n &&
          (0, J.jsxs)(K.Fragment, {
            children: [
              !!n.BIsVisibleEvent() &&
                (0, J.jsx)(`span`, {
                  className: `IP3sdUH0uro-`,
                  children: O(`#RSSManager_PostEvent_PostedDate`, l),
                }),
              !n.BIsVisibleEvent() &&
                (0, J.jsx)(`span`, {
                  className: v(`_2n3sawSRISs-`, o ? `hd4if3tg5YI-` : ``),
                  children: O(
                    o
                      ? `#RSSManager_PostEvent_Staged`
                      : `#RSSManager_PostEvent_Draft`,
                    l,
                  ),
                }),
            ],
          }),
        !(e.valid_post || !e.post_error_msg) &&
          (0, J.jsxs)(`div`, {
            className: `_9rhLFCwqjPg-`,
            children: [O(`#Error_Generic_Label`), ` `, O(e.post_error_msg)],
          }),
        (0, J.jsxs)(`div`, {
          className: Ke,
          children: [
            t
              ? (0, J.jsxs)(K.Fragment, {
                  children: [
                    r
                      ? (0, J.jsx)(u, {
                          string: O(`#Loading`),
                          size: `small`,
                          position: `center`,
                        })
                      : (0, J.jsx)(`div`, {
                          onClick: this.OnViewEvent,
                          className: v(d, q),
                          children: O(`#RSSManager_PostEvent_ViewEvent`),
                        }),
                    (0, J.jsx)(`a`, {
                      className: v(d, q),
                      href:
                        I.COMMUNITY_BASE_URL +
                        `gid/` +
                        i.GetClanSteamID().ConvertTo64BitString() +
                        `/partnerevents/edit/` +
                        this.state.clan_event_gid,
                      children: O(`#RSSManager_PostEvent_EditEvent`),
                    }),
                    (0, J.jsx)(`div`, {
                      onClick: this.OnUpdateNewsEvent,
                      className: v(d, q),
                      children: O(`#RSSManager_PostEvent_UpdateEvent`),
                    }),
                    c &&
                      (0, J.jsx)(`a`, {
                        className: v(`yYL-OrX9PtQ-`, `r3p-QXe2ER8-`),
                        href: Ce(
                          I.STORE_BASE_URL +
                            `app/` +
                            e.post.appids[0] +
                            `/?curator_clanid=` +
                            a.GetAccountID(),
                        ),
                        children: O(`#RSSManager_SeeReview`),
                      }),
                  ],
                })
              : (0, J.jsxs)(K.Fragment, {
                  children: [
                    (0, J.jsx)(`div`, {
                      onClick: this.OnOpenPreviewAsPartnerEvent,
                      className: v(d, q),
                      children: O(`#CuratorAdmin_RSSFeed_col_preview_event`),
                    }),
                    (0, J.jsx)(`div`, {
                      onClick: this.OnPostNewsEvent,
                      className: v(d, q),
                      children: O(`#CuratorAdmin_RSSFeed_col_create_event`),
                    }),
                  ],
                }),
            !!(e.rss_message && e.rss_message.length > 0) &&
              (0, J.jsx)(`div`, {
                onClick: this.OnShowRawRSS,
                className: `Cs-RceqqHho-`,
                children: O(`#RSSManager_PostEvent_ViewRaw`),
              }),
            !!this.state.eventModelForPreviewNow &&
              (0, J.jsx)(te, {
                className: `k8EMgG-4Stg-`,
                children: (0, J.jsx)(`div`, {
                  children: (0, J.jsx)(ee, {
                    event: this.state.eventModelForPreviewNow,
                    fnClose: this.HideModalEvent,
                  }),
                }),
              }),
          ],
        }),
      ],
    });
  }
};
(P([C], Q.prototype, `DoPartnerEventLoad`, null),
  P([C], Q.prototype, `OnOpenPreviewAsPartnerEvent`, null),
  P([C], Q.prototype, `OnViewEvent`, null),
  P([C], Q.prototype, `OnPostNewsEvent`, null),
  P([C], Q.prototype, `OnUpdateNewsEvent`, null),
  P([C], Q.prototype, `HideModalEvent`, null),
  P([C], Q.prototype, `OnClanEventCreateSuccess`, null),
  P([C], Q.prototype, `OnShowRawRSS`, null),
  (Q = P([a], Q)));
var $ = class e extends K.Component {
  state = {
    initialState: e.DetermineStartState(this.props),
    step: e.DetermineStartState(this.props),
    bDraftMode: !0,
  };
  static DetermineStartState(e) {
    let t = e.admin.BHasSetupFeed(e.strRSSUrl);
    return !e.newsData || !t
      ? e.bActivatePooling
        ? `activate_feed`
        : e.admin.BHasSavedRSSURL()
          ? `update_feed`
          : `feed_missing`
      : e.bUpdatePost
        ? `update_post`
        : `create_post`;
  }
  OnCreateNewsFeed() {
    this.setState({ step: `creating_feed` }, this.DoCreateNewsFeed);
  }
  async DoCreateNewsFeed() {
    let e = await this.props.admin.CreateOrUpdateRSSNewFeed(
      this.props.strRSSUrl,
      this.props.bActivatePooling ? 300 : 0,
    );
    e.success == 1
      ? this.setState({ step: this.props.newsData ? `create_post` : `success` })
      : this.setState({
          step: `failure`,
          eResult: e.success,
          strErrorMessage: O(`#RSSManager_PostEvent_Failure`),
        });
  }
  OnCreatePost() {
    this.setState({ step: `waiting_post` }, this.DoCreatePost);
  }
  async DoCreatePost() {
    let e = await this.props.admin.CreatePost(
      this.props.newsData,
      !!this.state.bDraftMode,
    );
    e.GetEResult() == 1
      ? (this.props.fnClanEventGID &&
          this.props.fnClanEventGID(e.Body().clan_event_gid()),
        this.setState({ step: `success`, eventGID: e.Body().clan_event_gid() }))
      : this.setState({
          step: `failure`,
          eResult: e.GetEResult(),
          strErrorMessage: O(`#RSSManager_PostEvent_Failure`),
        });
  }
  OnChangeDraftMode(e) {
    this.setState({ bDraftMode: e });
  }
  OnChangePermissionsCreateFeed(e) {
    this.setState({ bPermissions: e });
  }
  OnChangeConductCreateFeed(e) {
    this.setState({ bConduct: e });
  }
  GetStrTitle() {
    if (this.props.newsData)
      return O(
        this.props.bUpdatePost
          ? `#RSSManager_PostEvent_UpdateEvent`
          : `#RSSManager_PostEvent_Tilte`,
      );
    switch (this.state.initialState) {
      case `feed_missing`:
        return O(`#RSSManager_PostEvent_CreateFeedTitle`);
      default:
      case `update_feed`:
        return O(`#RSSManager_PostEvent_UpdateFeedTitle`);
      case `activate_feed`:
        return O(`#RSSManager_Status_Automation_Activate`);
    }
  }
  render() {
    let { strRSSUrl: e } = this.props;
    switch (this.state.step) {
      case `feed_missing`:
      case `activate_feed`:
      case `update_feed`:
      default:
        return (0, J.jsx)(R, {
          title: this.GetStrTitle(),
          children: (0, J.jsxs)(A, {
            children: [
              (0, J.jsxs)(S, {
                children: [
                  this.props.newsData &&
                    (0, J.jsx)(`div`, {
                      children: O(
                        `#RSSManager_PostEvent_CreateFeed_DuringPost`,
                      ),
                    }),
                  this.state.step !== `activate_feed` &&
                    (0, J.jsx)(`div`, {
                      children: O(`#RSSManager_PostEvent_CreateFeed_Desc`, e),
                    }),
                  (0, J.jsx)(`div`, {
                    children: O(`#RSSManager_CreateFeed_Review`),
                  }),
                  (0, J.jsx)(`div`, {
                    children: (0, J.jsx)(N, {
                      label: O(`#RSSManager_CreateFeed_Permissions_v1`),
                      onChange: this.OnChangePermissionsCreateFeed,
                      checked: !!this.state.bPermissions,
                    }),
                  }),
                  (0, J.jsxs)(`div`, {
                    children: [
                      (0, J.jsx)(N, {
                        label: O(`#RSSManager_CreateFeed_Conduct_v1`),
                        onChange: this.OnChangeConductCreateFeed,
                        checked: !!this.state.bConduct,
                      }),
                      (0, J.jsx)(p, {
                        href: I.STORE_BASE_URL + `online_conduct/`,
                        children: O(`#RSSManager_CreateFeed_Conduct_Link`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, J.jsx)(E, {
                children: (0, J.jsx)(L, {
                  bOKDisabled: !(
                    this.state.bPermissions && this.state.bConduct
                  ),
                  onOK: this.OnCreateNewsFeed,
                  onCancel: this.props.closeModal,
                }),
              }),
            ],
          }),
        });
      case `failure`:
        return (0, J.jsx)(se, {
          strDescription: O(`#RSSManager_PostEvent_Failure`),
          closeModal: this.props.closeModal,
          children: (0, J.jsx)(`div`, {
            children: O(
              `#Error_Description`,
              this.state.eResult,
              this.state.strErrorMessage,
            ),
          }),
        });
      case `creating_feed`:
      case `waiting_post`:
        return (0, J.jsx)(_, {
          strTitle: this.GetStrTitle(),
          strDescription: O(`#RSSManager_PostEvent_InFlight`),
          closeModal: this.props.closeModal,
          children: (0, J.jsx)(u, { position: `center` }),
        });
      case `create_post`:
        return (0, J.jsx)(R, {
          title: this.GetStrTitle(),
          children: (0, J.jsxs)(A, {
            children: [
              (0, J.jsx)(S, {
                children: (0, J.jsxs)(`div`, {
                  children: [
                    (0, J.jsx)(`div`, {
                      children: O(`#RSSManager_PostEvent_CreatePost`),
                    }),
                    (0, J.jsx)(`div`, {
                      className: Ue,
                      children: this.props.newsData.title,
                    }),
                    (0, J.jsx)(`br`, {}),
                    (0, J.jsx)(`div`, {
                      children: (0, J.jsx)(N, {
                        label: O(`#RSSManager_PostEvent_CreatePost_Draft`),
                        onChange: this.OnChangeDraftMode,
                        checked: !!this.state.bDraftMode,
                      }),
                    }),
                  ],
                }),
              }),
              (0, J.jsx)(E, {
                children: (0, J.jsx)(L, {
                  onOK: this.OnCreatePost,
                  onCancel: this.props.closeModal,
                }),
              }),
            ],
          }),
        });
      case `update_post`:
        return (0, J.jsx)(R, {
          title: this.GetStrTitle(),
          children: (0, J.jsxs)(A, {
            children: [
              (0, J.jsx)(S, {
                children: (0, J.jsxs)(`div`, {
                  children: [
                    (0, J.jsx)(`div`, {
                      children: O(`#RSSManager_PostEvent_UpdatePost`),
                    }),
                    (0, J.jsx)(`br`, {}),
                    (0, J.jsx)(`div`, {
                      className: Ue,
                      children: this.props.newsData.title,
                    }),
                    (0, J.jsx)(`br`, {}),
                  ],
                }),
              }),
              (0, J.jsx)(E, {
                children: (0, J.jsx)(L, {
                  onOK: this.OnCreatePost,
                  onCancel: this.props.closeModal,
                }),
              }),
            ],
          }),
        });
      case `success`:
        return (0, J.jsx)(_, {
          strTitle: this.GetStrTitle(),
          strDescription: O(
            this.props.newsData
              ? `#RSSManager_PostEvent_Success`
              : `#RSSManager_PostEvent_Success_feed`,
          ),
          closeModal: this.props.closeModal,
          bAlertDialog: !0,
          children:
            !!this.state.eventGID &&
            (0, J.jsx)(`a`, {
              href:
                I.COMMUNITY_BASE_URL +
                `gid/` +
                this.props.admin.GetClanSteamID().ConvertTo64BitString() +
                `/partnerevents/edit/` +
                this.state.eventGID,
              children: O(`#RSSManager_PostEvent_EventLink`),
            }),
        });
    }
  }
};
(P([C], $.prototype, `OnCreateNewsFeed`, null),
  P([C], $.prototype, `DoCreateNewsFeed`, null),
  P([C], $.prototype, `OnCreatePost`, null),
  P([C], $.prototype, `DoCreatePost`, null),
  P([C], $.prototype, `OnChangeDraftMode`, null),
  P([C], $.prototype, `OnChangePermissionsCreateFeed`, null),
  P([C], $.prototype, `OnChangeConductCreateFeed`, null),
  P([C], $.prototype, `GetStrTitle`, null));
export { Xe as n, G as r, X as t };
