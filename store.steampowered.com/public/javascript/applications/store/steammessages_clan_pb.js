/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Nt as t } from "./chunk~01cfc309bf.js";
import {
  Ax as n,
  Xx as r,
  _S as i,
  dS as a,
  fS as o,
  gS as s,
  hS as c,
  mS as l,
  pS as u,
  vS as d,
} from "./main.js";
var f = e(t(), 1),
  p = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            accept: { n: 2, br: l.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  m = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  h = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image || a(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image: { n: 1, br: l.readString, bw: d.writeString },
            language: { n: 2, br: l.readUint32, bw: d.writeUint32 },
            from_body: { n: 3, br: l.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  g = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.background_image || a(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            background_image: { n: 1, br: l.readString, bw: d.writeString },
            scrim_color: { n: 2, br: l.readString, bw: d.writeString },
            desktop_layout: { n: 3, br: l.readString, bw: d.writeString },
            logo: { n: 4, c: h },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  _ = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: l.readUint32, bw: d.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            appid: { n: 4, br: l.readUint32, bw: d.writeUint32 },
            event_type: { n: 5, br: l.readEnum, bw: d.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: l.readString,
              bw: d.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: l.readUint32, bw: d.writeUint32 },
            rtime32_end_time: { n: 8, br: l.readUint32, bw: d.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: l.readUint32,
              bw: d.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: l.readUint32,
              bw: d.writeUint32,
            },
            event_name: { n: 11, br: l.readString, bw: d.writeString },
            subtitle: { n: 12, br: l.readString, bw: d.writeString },
            summary: { n: 13, br: l.readString, bw: d.writeString },
            capsule_image: { n: 14, c: h },
            store_path: { n: 15, br: l.readString, bw: d.writeString },
            rtime32_post_time: { n: 20, br: l.readUint32, bw: d.writeUint32 },
            cross_promo: { n: 21, c: g },
            adult_only_content: { n: 22, br: l.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  v = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, [2], null));
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
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            events: { n: 2, c: y, r: !0, q: !0 },
            language: { n: 3, br: l.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  y = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: l.readUint32, bw: d.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  b = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summaries || a(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: _, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  x = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, [6, 8, 12, 13, 14], null));
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
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            clan_event_gid: {
              n: 2,
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            clan_announcement_gid: {
              n: 3,
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            count_earlier: { n: 4, d: 1, br: l.readUint32, bw: d.writeUint32 },
            count_later: { n: 5, d: 1, br: l.readUint32, bw: d.writeUint32 },
            required_tags: {
              n: 6,
              r: !0,
              q: !0,
              br: l.readString,
              bw: d.writeRepeatedString,
            },
            require_no_tags: { n: 7, br: l.readBool, bw: d.writeBool },
            language_preference: {
              n: 8,
              r: !0,
              q: !0,
              br: l.readUint32,
              pbr: l.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            rtime_oldest_date: { n: 9, br: l.readUint32, bw: d.writeUint32 },
            include_old_announcements: {
              n: 10,
              d: !0,
              br: l.readBool,
              bw: d.writeBool,
            },
            include_old_events: {
              n: 11,
              d: !1,
              br: l.readBool,
              bw: d.writeBool,
            },
            exclude_tags: {
              n: 12,
              r: !0,
              q: !0,
              br: l.readString,
              bw: d.writeRepeatedString,
            },
            event_type_filter: {
              n: 13,
              r: !0,
              q: !0,
              br: l.readEnum,
              pbr: l.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            exclude_event_types: {
              n: 14,
              r: !0,
              q: !0,
              br: l.readEnum,
              pbr: l.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            only_summaries: { n: 15, br: l.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetAdjacentPartnerEvents_Request`;
    }
  },
  S = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.event_data || a(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            event_data: { n: 1, c: r, r: !0, q: !0 },
            more_before: { n: 2, br: l.readBool, bw: d.writeBool },
            more_after: { n: 3, br: l.readBool, bw: d.writeBool },
            clan_is_creator_home: { n: 4, br: l.readBool, bw: d.writeBool },
            clan_is_ogg: { n: 5, br: l.readBool, bw: d.writeBool },
            clan_is_ovg: { n: 6, br: l.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetAdjacentPartnerEvents_Response`;
    }
  },
  C = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: l.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  w = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.snippets || a(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: T, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  T = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: l.readFixed64String, bw: d.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            hidden: { n: 3, br: l.readBool, bw: d.writeBool },
            published: { n: 4, br: l.readBool, bw: d.writeBool },
            rtime32_start_time: { n: 5, br: l.readUint32, bw: d.writeUint32 },
            event_name: { n: 6, br: l.readString, bw: d.writeString },
            event_type: { n: 7, br: l.readEnum, bw: d.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  E = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || a(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requests: { n: 1, c: D, r: !0, q: !0 },
            cursor: { n: 2, br: l.readString, bw: d.writeString },
            count: { n: 3, d: 100, br: l.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  D = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: l.readUint32, bw: d.writeUint32 },
            start_build_id: { n: 2, br: l.readUint32, bw: d.writeUint32 },
            end_build_id: { n: 3, br: l.readUint32, bw: d.writeUint32 },
            branch: { n: 4, br: l.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  O = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.matches || a(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matches: { n: 1, c: k, r: !0, q: !0 },
            num_total_results: { n: 2, br: l.readUint32, bw: d.writeUint32 },
            next_cursor: { n: 3, br: l.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  k = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: l.readUint32, bw: d.writeUint32 },
            build_id: { n: 2, br: l.readUint32, bw: d.writeUint32 },
            branch: { n: 3, br: l.readString, bw: d.writeString },
            clan_event_gid: {
              n: 4,
              br: l.readFixed64String,
              bw: d.writeFixed64String,
            },
            clan_account_id: { n: 5, br: l.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  A;
(function (e) {
  function t(e, t, r) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, n(p, t, r), m, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function r(e, t, r) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, n(v, t, r), b, {
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPartnerEventSummaries = r;
  function i(e, t, r) {
    return e.SendMsg(`Clan.GetAdjacentPartnerEvents#1`, n(x, t, r), S, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetAdjacentPartnerEvents = i;
  function a(e, t, r) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      n(C, t, r),
      w,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = a;
  function o(e, t, r) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, n(E, t, r), O, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = o;
})((A ||= {}));
