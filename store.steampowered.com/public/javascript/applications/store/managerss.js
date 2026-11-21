/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Lt as n,
  Pt as r,
  ft as i,
  jt as a,
  kt as o,
  l as s,
  tt as ee,
} from "./chunk~01cfc309bf.js";
import { C as c } from "./chunk~f57d770d64.js";
import { n as te } from "./chunk~cf3721cc1c.js";
import { n as ne } from "./chunk~8681f5c764.js";
import { t as l } from "./chunk~eefd71512b.js";
import { a as re } from "./chunk~e867464c75.js";
import { T as ie, i as u, y as ae } from "./chunk~2f8c67b4de.js";
import "./chunk~95ecbf576c.js";
import "./chunk~21654e981a.js";
import { n as d } from "./chunk~fc8a9e4879.js";
import {
  Ar as f,
  CS as p,
  Cb as oe,
  DS as se,
  Er as ce,
  Hn as m,
  Hy as le,
  In as h,
  Kb as g,
  Ln as ue,
  Mx as de,
  Nc as _,
  Ox as v,
  Qx as y,
  Wu as b,
  Xy as fe,
  Yu as x,
  _x as S,
  aS as pe,
  cb as me,
  cx as he,
  dS as C,
  dr as w,
  el as ge,
  fS as T,
  fr as _e,
  gS as E,
  gb as ve,
  gr as D,
  hS as O,
  kx as k,
  lS as A,
  lr as j,
  mS as M,
  pS as N,
  pr as P,
  rb as F,
  sS as ye,
  sr as be,
  sx as xe,
  uS as I,
  yb as L,
  yr as R,
  yx as Se,
  zn as z,
  zy as Ce,
} from "./main.js";
var B = e(ee()),
  V = e(r(), 1),
  we = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || A(e.M()),
        V.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: T.readFixed64String, bw: E.writeFixed64String },
            name: { n: 2, br: T.readString, bw: E.writeString },
            type: { n: 3, d: 0, br: T.readUint32, bw: E.writeUint32 },
            url: { n: 4, br: T.readString, bw: E.writeString },
            associated_apps: {
              n: 5,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            poll_interval: {
              n: 6,
              d: 300,
              br: T.readUint32,
              bw: E.writeUint32,
            },
            kv_description: { n: 7, br: T.readString, bw: E.writeString },
            kv_filter: { n: 8, br: T.readString, bw: E.writeString },
            publish_to_clan_account_id: {
              n: 9,
              br: T.readUint32,
              bw: E.writeUint32,
            },
            language: { n: 10, br: T.readUint32, bw: E.writeUint32 },
            last_error: { n: 11, br: T.readUint32, bw: E.writeUint32 },
            last_update: { n: 12, br: T.readUint32, bw: E.writeUint32 },
            last_checked: { n: 13, br: T.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNewsFeedDef`;
    }
  },
  H = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || A(e.M()),
        V.Message.initialize(this, t, 0, -1, [11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: T.readFixed64String, bw: E.writeFixed64String },
            news_feed_gid: {
              n: 2,
              br: T.readFixed64String,
              bw: E.writeFixed64String,
            },
            title: { n: 3, br: T.readString, bw: E.writeString },
            url: { n: 4, br: T.readString, bw: E.writeString },
            author: { n: 5, br: T.readString, bw: E.writeString },
            rtime_date: { n: 6, br: T.readUint32, bw: E.writeUint32 },
            contents: { n: 7, br: T.readString, bw: E.writeString },
            commited: { n: 8, br: T.readBool, bw: E.writeBool },
            deleted: { n: 9, br: T.readBool, bw: E.writeBool },
            tags: { n: 10, br: T.readString, bw: E.writeString },
            appids: {
              n: 11,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            recommendation_state: { n: 12, br: T.readEnum, bw: E.writeEnum },
            received_compensation: { n: 13, br: T.readBool, bw: E.writeBool },
            received_for_free: { n: 14, br: T.readBool, bw: E.writeBool },
            blurb: { n: 15, br: T.readString, bw: E.writeString },
            event_subtitle: { n: 16, br: T.readString, bw: E.writeString },
            event_summary: { n: 17, br: T.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNewsFeedPostDef`;
    }
  },
  Te = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content || A(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content: { n: 1, br: T.readString, bw: E.writeString },
            preserve_newlines: { n: 2, d: !1, br: T.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_ConvertHTMLToBBCode_Request`;
    }
  },
  Ee = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.converted_content || A(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            converted_content: { n: 1, br: T.readString, bw: E.writeString },
            found_html: { n: 2, br: T.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_ConvertHTMLToBBCode_Response`;
    }
  },
  De = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rss_message || A(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rss_message: { n: 1, br: T.readString, bw: E.writeString },
            unique_id: { n: 2, br: T.readString, bw: E.writeString },
            title: { n: 3, br: T.readString, bw: E.writeString },
            desc: { n: 4, br: T.readString, bw: E.writeString },
            jsondata: { n: 5, br: T.readString, bw: E.writeString },
            post: { n: 6, c: H },
            valid_post: { n: 7, br: T.readBool, bw: E.writeBool },
            post_error_msg: { n: 8, br: T.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNewsPartnerEventPreview`;
    }
  },
  Oe = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rss_url || A(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rss_url: { n: 1, br: T.readString, bw: E.writeString },
            lang: { n: 2, br: T.readUint32, bw: E.writeUint32 },
            clan_account_id: { n: 3, br: T.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_PreviewPartnerEvents_Request`;
    }
  },
  ke = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rss_url || A(e.M()),
        V.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rss_url: { n: 1, br: T.readString, bw: E.writeString },
            results: { n: 2, c: De, r: !0, q: !0 },
            error_msg: { n: 3, br: T.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_PreviewPartnerEvents_Response`;
    }
  },
  Ae = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || A(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: T.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_GetNewsFeedByRepublishClan_Request`;
    }
  },
  je = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.feeds || A(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { feeds: { n: 1, c: we, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_GetNewsFeedByRepublishClan_Response`;
    }
  },
  Me = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.post || A(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            post: { n: 1, c: H },
            draft: { n: 2, br: T.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_PublishPartnerEvent_Request`;
    }
  },
  Ne = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_event_gid || A(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readFixed64String,
              bw: E.writeFixed64String,
            },
            news_post_gid: {
              n: 2,
              br: T.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_PublishPartnerEvent_Response`;
    }
  },
  Pe = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.news_feed_gid || A(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readFixed64String,
              bw: E.writeFixed64String,
            },
            start_index: { n: 2, d: 0, br: T.readUint32, bw: E.writeUint32 },
            amount: { n: 3, d: 100, br: T.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_GetBatchPublishedPartnerEvent_Request`;
    }
  },
  Fe = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || A(e.M()),
        V.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: T.readUint32, bw: E.writeUint32 },
            news_feed_gid: {
              n: 2,
              br: T.readFixed64String,
              bw: E.writeFixed64String,
            },
            clan_event_gid: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readFixed64String,
              pbr: T.readPackedFixed64String,
              bw: E.writeRepeatedFixed64String,
            },
            news_post_gid: {
              n: 4,
              r: !0,
              q: !0,
              br: T.readFixed64String,
              pbr: T.readPackedFixed64String,
              bw: E.writeRepeatedFixed64String,
            },
            news_url: {
              n: 5,
              r: !0,
              q: !0,
              br: T.readString,
              bw: E.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= N(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CNews_GetBatchPublishedPartnerEvent_Response`;
    }
  },
  U;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`News.ConvertHTMLToBBCode#1`, k(Te, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ConvertHTMLToBBCode = t;
  function n(e, t, n) {
    return e.SendMsg(`News.PreviewPartnerEvents#1`, k(Oe, t, n), ke, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.PreviewPartnerEvents = n;
  function r(e, t, n) {
    return e.SendMsg(`News.GetNewsFeedByRepublishClan#1`, k(Ae, t, n), je, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetNewsFeedByRepublishClan = r;
  function i(e, t, n) {
    return e.SendMsg(`News.PublishPartnerEvent#1`, k(Me, t, n), Ne, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.PublishPartnerEvent = i;
  function a(e, t, n) {
    return e.SendMsg(`News.GetBatchPublishedPartnerEvent#1`, k(Pe, t, n), Fe, {
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
    (o(this),
      (this.m_clanAccountID = e.clanid),
      (this.m_clanSteamID = fe.InitFromClanID(
        this.m_clanAccountID,
        S.EUNIVERSE,
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
    let t = v.Init(Oe);
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
    let t = v.Init(Pe);
    (t.Body().set_news_feed_gid(this.m_strRSSGID), t.Body().set_amount(e));
    let n = await U.GetBatchPublishedPartnerEvent(
      G.Get().GetCuratorTransport(),
      t,
    );
    return (
      n.GetEResult() == 1
        ? a(() => {
            for (let e = 0; e < n.Body().clan_event_gid().length; ++e) {
              let t = {
                url: n.Body().news_url()[e],
                clan_event_gid: n.Body().clan_event_gid()[e],
                news_post_gid: n.Body().news_post_gid()[e],
              };
              this.m_mapURLToPosted.set(t.url, t);
            }
          })
        : console.error(
            `FetchPublishedEvents error: EMsg:` +
              de(n.GetEMsg()) +
              ` EResult:` +
              n.GetEResult() +
              ` msg:` +
              n.Hdr().error_message(),
          ),
      n
    );
  }
  MapArticleURLToClanEventGID(e) {
    let t = this.m_mapURLToPosted.get(e);
    if (t) return t.clan_event_gid;
  }
  BIsLoggedIn() {
    return Se.logged_in;
  }
  async CreateOrUpdateRSSNewFeed(e, t = 0) {
    let n = new FormData();
    (n.append(`sessionid`, xe()),
      n.append(`gid`, this.m_strRSSGID),
      n.append(`lang`, `` + this.GetCuratorLanguage()),
      n.append(`rss_url`, e),
      n.append(`polling_interval`, `` + t));
    let r =
        S.STORE_BASE_URL +
        `curator/` +
        this.m_clanAccountID +
        `/admin/ajaxmanagerssfeed`,
      i = await B.default.post(r, n, { withCredentials: !0 });
    return (
      i.data.success == 1 &&
        a(() => {
          ((this.m_strRSSGID = i.data.gid),
            (this.m_strRSSFeedURL = e),
            (this.m_nPollIntervalSeconds = t));
        }),
      i.data
    );
  }
  async UpdateAutomation(e) {
    return this.CreateOrUpdateRSSNewFeed(this.m_strRSSFeedURL, e ? 300 : 0);
  }
  async CheckForNewUpdate() {
    if (this.m_strRSSGID) {
      let e = new FormData();
      (e.append(`sessionid`, xe()), e.append(`gid`, this.m_strRSSGID));
      let t =
        S.STORE_BASE_URL +
        `curator/` +
        this.m_clanAccountID +
        `/admin/ajaxcheckfornews`;
      await B.default.post(t, e, { withCredentials: !0 });
    }
  }
  async CreatePost(e, t) {
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
    let n = new H();
    (n.set_gid(e.post.gid),
      n.set_news_feed_gid(this.m_strRSSGID),
      n.set_title(e.post.title),
      n.set_url(e.post.url),
      n.set_author(e.post.author),
      n.set_rtime_date(e.post.rtime_date),
      n.set_contents(e.post.contents),
      n.set_commited(e.post.commited),
      n.set_deleted(e.post.deleted),
      n.set_tags(e.post.tags),
      n.set_appids(e.post.appids),
      n.set_recommendation_state(e.post.recommendation_state),
      n.set_received_for_free(e.post.received_for_free),
      n.set_received_compensation(e.post.received_compensation),
      n.set_blurb(e.post.blurb));
    let r = v.Init(Me);
    (r.Body().set_post(n), r.Body().set_draft(t));
    let i = await U.PublishPartnerEvent(G.Get().GetCuratorTransport(), r);
    return (
      i.GetEResult() == 1
        ? (a(() => {
            let t = {
              url: e.post.url,
              clan_event_gid: i.Body().clan_event_gid(),
              news_post_gid: i.Body().news_post_gid(),
            };
            this.m_mapURLToPosted.set(e.post.url, t);
          }),
          d.LoadPartnerEventFromClanEventGIDAndClanSteamID(
            this.m_clanSteamID,
            i.Body().clan_event_gid(),
            0,
          ))
        : console.error(
            `CreatePost error: ` + i.GetEMsg() + ` ` + i.GetEResult(),
          ),
      i
    );
  }
};
(g([t], W.prototype, `m_strRSSFeedURL`, void 0),
  g([t], W.prototype, `m_strRSSGID`, void 0),
  g([t], W.prototype, `m_rtimeRSSLastChecked`, void 0),
  g([t], W.prototype, `m_nPollIntervalSeconds`, void 0),
  g([t], W.prototype, `m_eRSSFeedLanguage`, void 0),
  g([t], W.prototype, `m_eCuratorLanguage`, void 0),
  g([t], W.prototype, `m_mapURLToPosted`, void 0));
var G = class e {
  constructor() {
    o(this);
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
      ye(
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
    let e = he(`curatoradmin`, `application_config`);
    (this.ValidateStoreDefault(e) &&
      ((this.m_defaultAdmin = new W(e)),
      this.m_mapClanAccountToAdmin.set(e.clanid, this.m_defaultAdmin)),
      this.ValidateWebAPI(e) &&
        (this.m_transport = Ce(
          new le(S.WEBAPI_BASE_URL, e.webapi_token),
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
    return Se.logged_in;
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
      : (ye(!e, `unexpected clanid of zero or undefined: ` + e),
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
    let t = e.filter((e) => !this.m_mapClanAccountToAdmin.has(e));
    for (; t.length > 0;) {
      let n = Math.min(50, t.length);
      (t.slice(0, n), (t = t.slice(n)));
      try {
        let t = S.STORE_BASE_URL + `events_admin/ajaxgetrssadmininfo`,
          n = { clanids: e },
          r = await B.default.get(t, { params: n, withCredentials: !0 });
        if (
          r &&
          r.data &&
          r.data.success == 1 &&
          r.data.rss_admin_infos &&
          Array.isArray(r.data.rss_admin_infos)
        )
          a(() => {
            (r.data.rss_admin_infos.forEach((e) => {
              this.m_mapClanAccountToAdmin.set(e.clanid, new W(e));
            }),
              r.data.rss_event_stats.forEach((e) => {
                this.m_mapClanToEventRSSStats.set(e.clan_account_id, e);
              }));
          });
        else {
          let e = x(r.data || {});
          console.error(
            `LoadBatchedClanRSSAdminInfo error:` + e.strErrorMsg,
            e,
          );
        }
      } catch (e) {
        let t = x(e);
        console.error(
          `LoadBatchedClanRSSAdminInfo catched error:` + t.strErrorMsg,
          t,
        );
      }
    }
    this.m_cClanInfoRequestsInFlight--;
  }
};
(g([t.shallow], G.prototype, `m_mapClanAccountToAdmin`, void 0),
  g([t.shallow], G.prototype, `m_mapClanToEventRSSStats`, void 0));
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
      let n = fe.InitFromClanID(e, S.EUNIVERSE);
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
            S.STORE_BASE_URL +
            `curator/` +
            e.GetAccountID() +
            `/admin/ajaxgetrecbyapps`,
          i = await B.default.get(t, {
            params: { appids: r, cc: S.COUNTRY || `US`, l: S.LANGUAGE },
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
  J = i(),
  Y = class extends K.Component {
    state = { strRssURL: G.Get().GetDefaultAdmin().GetRSSUrl() };
    m_Admin = G.Get().GetDefaultAdmin();
    OnChangeActualRSSURL(e) {
      this.setState({ strRssURL: e.target.value });
    }
    OnCreateOrSaveFeed(e) {
      (e.preventDefault(),
        m(
          (0, J.jsx)($, {
            strRSSUrl: this.state.strRssURL,
            admin: this.m_Admin,
          }),
          b(e),
        ));
    }
    OnRevert(e) {
      (e.preventDefault(),
        this.setState({ strRssURL: this.m_Admin.GetRSSUrl() }));
    }
    render() {
      let e = this.state.strRssURL === this.m_Admin.GetRSSUrl();
      if (window.Prototype !== void 0) return (window.location.reload(), null);
      let t = se(p(this.m_Admin.GetFeedLanguageHandleUnset())),
        n = G.Get().GetDefaultAdmin();
      return (0, J.jsxs)(`div`, {
        className: _(Le),
        children: [
          (0, J.jsxs)(`div`, {
            className: `titleframe`,
            children: [
              (0, J.jsx)(`h4`, { children: F(`#CuratorAdmin_RSSFeed_title`) }),
              (0, J.jsx)(`p`, {
                className: `subtitle`,
                children: F(`#CuratorAdmin_RSSFeed_desc`),
              }),
              (0, J.jsx)(`p`, {
                children: me(
                  `#CuratorAdmin_RSSFeed_doc_link`,
                  (0, J.jsx)(`a`, {
                    href: `https://partner.steamgames.com/doc/store/news/rss`,
                    target: `_blank`,
                    children: F(`#CuratorAdmin_RSSFeed_doc_link_text`),
                  }),
                ),
              }),
              (0, J.jsx)(`p`, {
                className: We,
                children: (0, J.jsx)(f, {
                  href:
                    S.COMMUNITY_BASE_URL +
                    `gid/` +
                    this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                    `/partnerevents/`,
                  className: _(u, ie),
                  children: F(`#RSSManager_EventDashBoard`),
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
                    children: F(`#CuratorAdmin_RSSFeed_lang_only`),
                  }),
                  (0, J.jsx)(`span`, { className: Ye, children: t }),
                  (0, J.jsx)(`a`, {
                    href:
                      S.COMMUNITY_BASE_URL +
                      `gid/` +
                      this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                      `/edit `,
                    target: `_blank`,
                    className: _(u, q),
                    children: F(`#CuratorAdmin_RSSFeed_edit_language`),
                  }),
                ],
              }),
              this.m_Admin.GetFeedLanguageHandleUnset() !=
                this.m_Admin.GetCuratorLanguage() &&
                (0, J.jsx)(`div`, {
                  className: _(`YM5m3B8SHUU-`, `d1pzzsdLKFY-`),
                  children: (0, J.jsx)(`span`, {
                    className: `Nujwth5QyYc-`,
                    children: F(
                      `#CuratorAdmin_Curator_lang_only`,
                      F(`#Language_` + p(this.m_Admin.GetCuratorLanguage())),
                      t,
                    ),
                  }),
                }),
              (0, J.jsxs)(`div`, {
                className: _(ae, He),
                children: [
                  (0, J.jsx)(be, {
                    className: void 0,
                    type: `text`,
                    name: `link_url`,
                    id: `link_url`,
                    value: this.state.strRssURL,
                    label: F(`#CuratorAdmin_RSSFeed`),
                    placeholder: F(`#CuratorAdmin_RSSFeed_placeholder`),
                    onChange: this.OnChangeActualRSSURL,
                    mustBeURL: !0,
                  }),
                  (0, J.jsx)(`a`, {
                    className: `btn_green_white_innerfade btn_medium`,
                    onClick: this.OnCreateOrSaveFeed,
                    children: (0, J.jsx)(`span`, {
                      children: F(e ? `#Button_Saved` : `#Button_Save`),
                    }),
                  }),
                  !e &&
                    (0, J.jsx)(`a`, {
                      onClick: this.OnRevert,
                      className: `btn_grey_white_innerfade btn_medium`,
                      children: F(`#Button_Revert`),
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
(g([y], Y.prototype, `OnChangeActualRSSURL`, null),
  g([y], Y.prototype, `OnCreateOrSaveFeed`, null),
  g([y], Y.prototype, `OnRevert`, null),
  (Y = g([s], Y)));
var Xe = Y,
  X = class extends K.Component {
    state = { strParseRssURL: this.props.strRssURL, bLoadingPreview: !1 };
    m_cancelSignal = B.default.CancelToken.source();
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
            a = r ? d.GetClanEventModel(r) : null,
            o = i ? d.GetClanEventModel(i) : null;
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
                (await d.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
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
          strPreviewErrorMsg: F(
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
              children: (0, J.jsx)(_e, {
                disabled: !be.validateUrl(this.props.strRssURL),
                onClick: this.OnLoadPreview,
                children: F(`#CuratorAdmin_RSSFeed_preview`),
              }),
            }),
          this.state.bLoadingPreview &&
            (0, J.jsx)(l, {
              string: F(`#Loading`),
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
                  children: F(
                    `#RSSManager_PreviewInfo`,
                    this.state.strPreviewURL,
                  ),
                }),
                (0, J.jsx)(`div`, { className: `d--ExixqFcY-`, children: e }),
                (0, J.jsx)(`p`, {
                  className: `Q6niX9kwLVE-`,
                  children: (0, J.jsx)(f, {
                    href:
                      S.COMMUNITY_BASE_URL +
                      `gid/` +
                      t.GetClanSteamID().ConvertTo64BitString() +
                      `/partnerevents/`,
                    className: _(`yYL-OrX9PtQ-`, `_3UP7lu7R3VU-`),
                    children: F(`#RSSManager_EventDashBoard`),
                  }),
                }),
              ],
            }),
        ],
      });
    }
  };
(g([y], X.prototype, `GetRSSPreviewURL`, null),
  g([y], X.prototype, `OnLoadPreview`, null),
  (X = g([s], X)));
var Z = class extends K.Component {
  state = {};
  OnToggleChannelAutomation(e) {
    e
      ? (this.setState({ strErrorMessage: void 0 }),
        m(
          (0, J.jsx)($, {
            strRSSUrl: this.props.admin.GetRSSUrl(),
            admin: this.props.admin,
            bActivatePooling: !0,
          }),
          window,
        ))
      : this.setState(
          { strErrorMessage: void 0, strReasonWaiting: F(`#Saving`) },
          this.BDisableAutomation,
        );
  }
  async BDisableAutomation() {
    this.props.admin
      .UpdateAutomation(!1)
      .catch(() =>
        this.setState({
          strErrorMessage: F(`#RSSManager_Status_Automation_DisableFailed`),
        }),
      )
      .finally(() => this.setState({ strReasonWaiting: void 0 }));
  }
  async OnQueueScan(e) {
    (this.setState({ strReasonWaiting: F(`#CuratorAdmin_RSSFeed_scannow`) }),
      this.props.admin
        .CheckForNewUpdate()
        .then(() =>
          m(
            (0, J.jsx)(h, {
              strTitle: F(`#CuratorAdmin_RSSFeed_scannow`),
              strDescription: F(`#CuratorAdmin_RSSFeed_queued`),
            }),
            b(e),
          ),
        )
        .catch((t) =>
          m(
            (0, J.jsx)(ue, {
              strTitle: F(`#CuratorAdmin_RSSFeed_scannow`),
              strDescription: x(t).strErrorMsg,
            }),
            b(e),
          ),
        )
        .finally(() => this.setState({ strReasonWaiting: void 0 })));
  }
  render() {
    return this.props.admin.BHasSavedRSSURL()
      ? (0, J.jsxs)(`div`, {
          children: [
            !!this.state.strReasonWaiting &&
              (0, J.jsx)(l, {
                size: `medium`,
                string: this.state.strReasonWaiting,
              }),
            !!this.state.strErrorMessage &&
              (0, J.jsx)(`div`, {
                className: `wE4s0RgHgCk-`,
                children: this.state.strErrorMessage,
              }),
            (0, J.jsx)(ce, {
              onChange: this.OnToggleChannelAutomation,
              label: F(`#RSSManager_Status_Automation_Desc`),
              checked: this.props.admin.BIsAutomationEnabled(),
              description: ``,
            }),
            this.props.admin.BIsAutomationEnabled() &&
              (0, J.jsxs)(`p`, {
                children: [
                  F(`#CuratorAdmin_RSSFeed_lastscanned`),
                  `\xA0`,
                  ve(this.props.admin.GetRSSLastRtimeChecked(), !1),
                  `\xA0 @ `,
                  L(this.props.admin.GetRSSLastRtimeChecked(), {
                    bForce24HourClock: !1,
                  }),
                  `\xA0`,
                  (0, J.jsx)(`a`, {
                    onClick: this.OnQueueScan,
                    children: (0, J.jsx)(`span`, {
                      children: F(`#CuratorAdmin_RSSFeed_scannow`),
                    }),
                  }),
                ],
              }),
          ],
        })
      : null;
  }
};
(g([y], Z.prototype, `OnToggleChannelAutomation`, null),
  g([y], Z.prototype, `OnQueueScan`, null),
  (Z = g([s], Z)));
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
        t = d.GetClanEventModel(this.state.clan_event_gid);
      ((t ||= await d.LoadHiddenPartnerEvent(e, this.state.clan_event_gid)),
        this.setState({ bLoadingPartnerEvent: !1, existingEventModel: t }));
    }
  }
  OnOpenPreviewAsPartnerEvent(e) {
    let { newsData: t, clanSteamID: n } = this.props,
      r = new c();
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
      ((r.jsondata.localized_summary = pe(
        r.jsondata.localized_summary,
        32,
        null,
      )),
      (r.jsondata.localized_summary[0] = t.post.event_summary),
      i != 0 && (r.jsondata.localized_summary[i] = t.post.event_summary)),
      !r.jsondata.localized_subtitle &&
        t.post.event_subtitle &&
        ((r.jsondata.localized_subtitle = pe(
          r.jsondata.localized_subtitle,
          32,
          null,
        )),
        (r.jsondata.localized_subtitle[0] = t.post.event_subtitle),
        i != 0 && (r.jsondata.localized_subtitle[i] = t.post.event_subtitle)),
      this.ShowModalEvent(r));
  }
  OnViewEvent() {
    this.ShowModalEvent(d.GetClanEventModel(this.state.clan_event_gid));
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
    m(
      (0, J.jsx)($, {
        newsData: t,
        admin: this.props.admin,
        strRSSUrl: n(),
        fnClanEventGID: this.OnClanEventCreateSuccess,
      }),
      b(e),
    );
  }
  OnUpdateNewsEvent(e) {
    let { newsData: t, fnGetRSSUrl: n } = this.props;
    m(
      (0, J.jsx)($, {
        newsData: t,
        strRSSUrl: n(),
        admin: this.props.admin,
        fnClanEventGID: this.OnClanEventCreateSuccess,
        bUpdatePost: !0,
      }),
      b(e),
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
        return n ? re(n[0]) : e[0];
      })();
    m(
      (0, J.jsx)(h, {
        bAlertDialog: !0,
        strTitle: F(`#RSSManager_PostEvent_ViewRaw`),
        children: (0, J.jsx)(`textarea`, {
          className: Ge,
          value: n,
          disabled: !0,
        }),
      }),
      b(e),
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
      ee =
        e.post.recommendation_state !== 0 &&
        s &&
        Ie.Get().BHasReviewForApp(a, s),
      c = ``;
    if (n) {
      let e =
        n.GetVisibilityStartTimeAndDateUnixSeconds() ||
        n.GetPostTimeAndDateUnixSeconds();
      c = oe(e) + ` @ ` + L(e, { bForce24HourClock: !1 });
    }
    return (0, J.jsxs)(`div`, {
      className: _(Re, t ? Be : ``, e.valid_post ? `` : Ve),
      children: [
        (0, J.jsx)(`span`, { className: ze, children: e.title }),
        (0, J.jsx)(`br`, {}),
        !!n &&
          (0, J.jsxs)(K.Fragment, {
            children: [
              !!n.BIsVisibleEvent() &&
                (0, J.jsx)(`span`, {
                  className: `IP3sdUH0uro-`,
                  children: F(`#RSSManager_PostEvent_PostedDate`, c),
                }),
              !n.BIsVisibleEvent() &&
                (0, J.jsx)(`span`, {
                  className: _(`_2n3sawSRISs-`, o ? `hd4if3tg5YI-` : ``),
                  children: F(
                    o
                      ? `#RSSManager_PostEvent_Staged`
                      : `#RSSManager_PostEvent_Draft`,
                    c,
                  ),
                }),
            ],
          }),
        !(e.valid_post || !e.post_error_msg) &&
          (0, J.jsxs)(`div`, {
            className: `_9rhLFCwqjPg-`,
            children: [F(`#Error_Generic_Label`), ` `, F(e.post_error_msg)],
          }),
        (0, J.jsxs)(`div`, {
          className: Ke,
          children: [
            t
              ? (0, J.jsxs)(K.Fragment, {
                  children: [
                    r
                      ? (0, J.jsx)(l, {
                          string: F(`#Loading`),
                          size: `small`,
                          position: `center`,
                        })
                      : (0, J.jsx)(`div`, {
                          onClick: this.OnViewEvent,
                          className: _(u, q),
                          children: F(`#RSSManager_PostEvent_ViewEvent`),
                        }),
                    (0, J.jsx)(`a`, {
                      className: _(u, q),
                      href:
                        S.COMMUNITY_BASE_URL +
                        `gid/` +
                        i.GetClanSteamID().ConvertTo64BitString() +
                        `/partnerevents/edit/` +
                        this.state.clan_event_gid,
                      children: F(`#RSSManager_PostEvent_EditEvent`),
                    }),
                    (0, J.jsx)(`div`, {
                      onClick: this.OnUpdateNewsEvent,
                      className: _(u, q),
                      children: F(`#RSSManager_PostEvent_UpdateEvent`),
                    }),
                    ee &&
                      (0, J.jsx)(`a`, {
                        className: _(`yYL-OrX9PtQ-`, `r3p-QXe2ER8-`),
                        href: ge(
                          S.STORE_BASE_URL +
                            `app/` +
                            e.post.appids[0] +
                            `/?curator_clanid=` +
                            a.GetAccountID(),
                        ),
                        children: F(`#RSSManager_SeeReview`),
                      }),
                  ],
                })
              : (0, J.jsxs)(K.Fragment, {
                  children: [
                    (0, J.jsx)(`div`, {
                      onClick: this.OnOpenPreviewAsPartnerEvent,
                      className: _(u, q),
                      children: F(`#CuratorAdmin_RSSFeed_col_preview_event`),
                    }),
                    (0, J.jsx)(`div`, {
                      onClick: this.OnPostNewsEvent,
                      className: _(u, q),
                      children: F(`#CuratorAdmin_RSSFeed_col_create_event`),
                    }),
                  ],
                }),
            !!(e.rss_message && e.rss_message.length > 0) &&
              (0, J.jsx)(`div`, {
                onClick: this.OnShowRawRSS,
                className: `Cs-RceqqHho-`,
                children: F(`#RSSManager_PostEvent_ViewRaw`),
              }),
            !!this.state.eventModelForPreviewNow &&
              (0, J.jsx)(ne, {
                className: `k8EMgG-4Stg-`,
                children: (0, J.jsx)(`div`, {
                  children: (0, J.jsx)(te, {
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
(g([y], Q.prototype, `DoPartnerEventLoad`, null),
  g([y], Q.prototype, `OnOpenPreviewAsPartnerEvent`, null),
  g([y], Q.prototype, `OnViewEvent`, null),
  g([y], Q.prototype, `OnPostNewsEvent`, null),
  g([y], Q.prototype, `OnUpdateNewsEvent`, null),
  g([y], Q.prototype, `HideModalEvent`, null),
  g([y], Q.prototype, `OnClanEventCreateSuccess`, null),
  g([y], Q.prototype, `OnShowRawRSS`, null),
  (Q = g([s], Q)));
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
          strErrorMessage: F(`#RSSManager_PostEvent_Failure`),
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
          strErrorMessage: F(`#RSSManager_PostEvent_Failure`),
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
      return F(
        this.props.bUpdatePost
          ? `#RSSManager_PostEvent_UpdateEvent`
          : `#RSSManager_PostEvent_Tilte`,
      );
    switch (this.state.initialState) {
      case `feed_missing`:
        return F(`#RSSManager_PostEvent_CreateFeedTitle`);
      default:
      case `update_feed`:
        return F(`#RSSManager_PostEvent_UpdateFeedTitle`);
      case `activate_feed`:
        return F(`#RSSManager_Status_Automation_Activate`);
    }
  }
  render() {
    let { strRSSUrl: e } = this.props;
    switch (this.state.step) {
      case `feed_missing`:
      case `activate_feed`:
      case `update_feed`:
      default:
        return (0, J.jsx)(z, {
          title: this.GetStrTitle(),
          children: (0, J.jsxs)(j, {
            children: [
              (0, J.jsxs)(w, {
                children: [
                  this.props.newsData &&
                    (0, J.jsx)(`div`, {
                      children: F(
                        `#RSSManager_PostEvent_CreateFeed_DuringPost`,
                      ),
                    }),
                  this.state.step !== `activate_feed` &&
                    (0, J.jsx)(`div`, {
                      children: F(`#RSSManager_PostEvent_CreateFeed_Desc`, e),
                    }),
                  (0, J.jsx)(`div`, {
                    children: F(`#RSSManager_CreateFeed_Review`),
                  }),
                  (0, J.jsx)(`div`, {
                    children: (0, J.jsx)(P, {
                      label: F(`#RSSManager_CreateFeed_Permissions_v1`),
                      onChange: this.OnChangePermissionsCreateFeed,
                      checked: !!this.state.bPermissions,
                    }),
                  }),
                  (0, J.jsxs)(`div`, {
                    children: [
                      (0, J.jsx)(P, {
                        label: F(`#RSSManager_CreateFeed_Conduct_v1`),
                        onChange: this.OnChangeConductCreateFeed,
                        checked: !!this.state.bConduct,
                      }),
                      (0, J.jsx)(f, {
                        href: S.STORE_BASE_URL + `online_conduct/`,
                        children: F(`#RSSManager_CreateFeed_Conduct_Link`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, J.jsx)(D, {
                children: (0, J.jsx)(R, {
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
        return (0, J.jsx)(ue, {
          strDescription: F(`#RSSManager_PostEvent_Failure`),
          closeModal: this.props.closeModal,
          children: (0, J.jsx)(`div`, {
            children: F(
              `#Error_Description`,
              this.state.eResult,
              this.state.strErrorMessage,
            ),
          }),
        });
      case `creating_feed`:
      case `waiting_post`:
        return (0, J.jsx)(h, {
          strTitle: this.GetStrTitle(),
          strDescription: F(`#RSSManager_PostEvent_InFlight`),
          closeModal: this.props.closeModal,
          children: (0, J.jsx)(l, { position: `center` }),
        });
      case `create_post`:
        return (0, J.jsx)(z, {
          title: this.GetStrTitle(),
          children: (0, J.jsxs)(j, {
            children: [
              (0, J.jsx)(w, {
                children: (0, J.jsxs)(`div`, {
                  children: [
                    (0, J.jsx)(`div`, {
                      children: F(`#RSSManager_PostEvent_CreatePost`),
                    }),
                    (0, J.jsx)(`div`, {
                      className: Ue,
                      children: this.props.newsData.title,
                    }),
                    (0, J.jsx)(`br`, {}),
                    (0, J.jsx)(`div`, {
                      children: (0, J.jsx)(P, {
                        label: F(`#RSSManager_PostEvent_CreatePost_Draft`),
                        onChange: this.OnChangeDraftMode,
                        checked: !!this.state.bDraftMode,
                      }),
                    }),
                  ],
                }),
              }),
              (0, J.jsx)(D, {
                children: (0, J.jsx)(R, {
                  onOK: this.OnCreatePost,
                  onCancel: this.props.closeModal,
                }),
              }),
            ],
          }),
        });
      case `update_post`:
        return (0, J.jsx)(z, {
          title: this.GetStrTitle(),
          children: (0, J.jsxs)(j, {
            children: [
              (0, J.jsx)(w, {
                children: (0, J.jsxs)(`div`, {
                  children: [
                    (0, J.jsx)(`div`, {
                      children: F(`#RSSManager_PostEvent_UpdatePost`),
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
              (0, J.jsx)(D, {
                children: (0, J.jsx)(R, {
                  onOK: this.OnCreatePost,
                  onCancel: this.props.closeModal,
                }),
              }),
            ],
          }),
        });
      case `success`:
        return (0, J.jsx)(h, {
          strTitle: this.GetStrTitle(),
          strDescription: F(
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
                S.COMMUNITY_BASE_URL +
                `gid/` +
                this.props.admin.GetClanSteamID().ConvertTo64BitString() +
                `/partnerevents/edit/` +
                this.state.eventGID,
              children: F(`#RSSManager_PostEvent_EventLink`),
            }),
        });
    }
  }
};
(g([y], $.prototype, `OnCreateNewsFeed`, null),
  g([y], $.prototype, `DoCreateNewsFeed`, null),
  g([y], $.prototype, `OnCreatePost`, null),
  g([y], $.prototype, `DoCreatePost`, null),
  g([y], $.prototype, `OnChangeDraftMode`, null),
  g([y], $.prototype, `OnChangePermissionsCreateFeed`, null),
  g([y], $.prototype, `OnChangeConductCreateFeed`, null),
  g([y], $.prototype, `GetStrTitle`, null));
export { Xe as n, G as r, X as t };
