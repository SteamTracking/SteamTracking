/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t } from "./chunk~01cfc309bf.js";
import {
  aS as n,
  bx as r,
  eS as i,
  iS as a,
  nS as o,
  oS as s,
  rS as c,
  sS as l,
  tS as u,
} from "./main.js";
var d = e(t(), 1),
  f = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
            accept: { n: 2, br: c.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  p = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  m = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image: { n: 1, br: c.readString, bw: l.writeString },
            language: { n: 2, br: c.readUint32, bw: l.writeUint32 },
            from_body: { n: 3, br: c.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.background_image || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            background_image: { n: 1, br: c.readString, bw: l.writeString },
            scrim_color: { n: 2, br: c.readString, bw: l.writeString },
            desktop_layout: { n: 3, br: c.readString, bw: l.writeString },
            logo: { n: 4, c: m },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  g = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: c.readUint32, bw: l.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
            appid: { n: 4, br: c.readUint32, bw: l.writeUint32 },
            event_type: { n: 5, br: c.readEnum, bw: l.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: c.readString,
              bw: l.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: c.readUint32, bw: l.writeUint32 },
            rtime32_end_time: { n: 8, br: c.readUint32, bw: l.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: c.readUint32,
              bw: l.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: c.readUint32,
              bw: l.writeUint32,
            },
            event_name: { n: 11, br: c.readString, bw: l.writeString },
            subtitle: { n: 12, br: c.readString, bw: l.writeString },
            summary: { n: 13, br: c.readString, bw: l.writeString },
            capsule_image: { n: 14, c: m },
            store_path: { n: 15, br: c.readString, bw: l.writeString },
            rtime32_post_time: { n: 20, br: c.readUint32, bw: l.writeUint32 },
            cross_promo: { n: 21, c: h },
            adult_only_content: { n: 22, br: c.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [2], null));
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
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
            events: { n: 2, c: v, r: !0, q: !0 },
            language: { n: 3, br: c.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: c.readUint32, bw: l.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summaries || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: g, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  b = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: c.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  x = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.snippets || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: S, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  S = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: c.readFixed64String, bw: l.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
            hidden: { n: 3, br: c.readBool, bw: l.writeBool },
            published: { n: 4, br: c.readBool, bw: l.writeBool },
            rtime32_start_time: { n: 5, br: c.readUint32, bw: l.writeUint32 },
            event_name: { n: 6, br: c.readString, bw: l.writeString },
            event_type: { n: 7, br: c.readEnum, bw: l.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  C = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requests: { n: 1, c: w, r: !0, q: !0 },
            cursor: { n: 2, br: c.readString, bw: l.writeString },
            count: { n: 3, d: 100, br: c.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  w = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: c.readUint32, bw: l.writeUint32 },
            start_build_id: { n: 2, br: c.readUint32, bw: l.writeUint32 },
            end_build_id: { n: 3, br: c.readUint32, bw: l.writeUint32 },
            branch: { n: 4, br: c.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  T = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.matches || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matches: { n: 1, c: E, r: !0, q: !0 },
            num_total_results: { n: 2, br: c.readUint32, bw: l.writeUint32 },
            next_cursor: { n: 3, br: c.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  E = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: c.readUint32, bw: l.writeUint32 },
            build_id: { n: 2, br: c.readUint32, bw: l.writeUint32 },
            branch: { n: 3, br: c.readString, bw: l.writeString },
            clan_event_gid: {
              n: 4,
              br: c.readFixed64String,
              bw: l.writeFixed64String,
            },
            clan_account_id: { n: 5, br: c.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  D;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, r(f, t, n), p, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, r(_, t, n), y, {
      ePrivilege: 2,
      rgBrowserAPISites: [`store`, `community`, `partner`],
    });
  }
  e.GetPartnerEventSummaries = n;
  function i(e, t, n) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      r(b, t, n),
      x,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = i;
  function a(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, r(C, t, n), T, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = a;
})((D ||= {}));
