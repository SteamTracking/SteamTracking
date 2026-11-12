/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t } from "./chunk~01cfc309bf.js";
import {
  Ah as n,
  Fh as r,
  Ih as i,
  Mh as a,
  Nh as o,
  Ph as s,
  jh as c,
  kh as l,
  rh as u,
} from "./main.js";
var d = e(t(), 1),
  f = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.data || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { data: { n: 1, c: p, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AdditionalSubjectData`;
    }
  },
  p = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.key || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: a.readString, bw: i.writeString },
            value: { n: 2, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AdditionalSubjectData_DataEntry`;
    }
  },
  ee = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: a.readUint64String, bw: i.writeUint64String },
            start: { n: 2, br: a.readUint32, bw: i.writeUint32 },
            count: { n: 3, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Request`;
    }
  },
  m = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.report_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [23, 24], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            report_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            reporter_steamid: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            time_reported: { n: 3, br: a.readUint32, bw: i.writeUint32 },
            report_reason: { n: 4, br: a.readEnum, bw: i.writeEnum },
            report_text: { n: 5, br: a.readString, bw: i.writeString },
            subject_type: { n: 6, br: a.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 7,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 8,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            resolved: { n: 9, br: a.readEnum, bw: i.writeEnum },
            time_resolved: { n: 10, br: a.readUint32, bw: i.writeUint32 },
            resolver_steamid: {
              n: 11,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            time_notified: { n: 12, br: a.readUint32, bw: i.writeUint32 },
            additional_subject_data: { n: 13, c: f },
            time_disputed: { n: 14, br: a.readUint32, bw: i.writeUint32 },
            dispute_details: { n: 15, br: a.readString, bw: i.writeString },
            dispute_resolver_steamid: {
              n: 16,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            dispute_resolved: { n: 17, br: a.readEnum, bw: i.writeEnum },
            time_dispute_resolved: {
              n: 18,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            detected_by_automation: {
              n: 19,
              d: !1,
              br: a.readBool,
              bw: i.writeBool,
            },
            resolved_by_automation: {
              n: 20,
              d: 0,
              br: a.readEnum,
              bw: i.writeEnum,
            },
            content_moderated_reason: {
              n: 21,
              br: a.readEnum,
              bw: i.writeEnum,
            },
            dispute_resolved_reason: { n: 22, br: a.readEnum, bw: i.writeEnum },
            sanctions_applied: { n: 23, c: b, r: !0, q: !0 },
            sanctions_applied_on_dispute: { n: 24, c: b, r: !0, q: !0 },
            reported_content_id: {
              n: 25,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            coordinates: { n: 26, c: U },
            reporter_is_support: { n: 27, br: a.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReport`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_report || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_report: { n: 1, c: m, r: !0, q: !0 },
            total_count: { n: 2, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Response`;
    }
  },
  g = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: a.readUint64String, bw: i.writeUint64String },
            subject_type: { n: 2, br: a.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 3,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 4,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            reported_content_id: {
              n: 5,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Request`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_report || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { content_report: { n: 1, c: m } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Response`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: a.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Request`;
    }
  },
  y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [13, 31, 32], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: a.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            owner_steam_id: {
              n: 4,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            language: { n: 5, br: a.readInt32, bw: i.writeInt32 },
            resolved: { n: 6, br: a.readEnum, bw: i.writeEnum },
            time_resolved: { n: 7, br: a.readUint32, bw: i.writeUint32 },
            unresolved_report_count: {
              n: 8,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            oldest_unresolved_report_time: {
              n: 9,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            resolver_steamid: {
              n: 10,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            assigned_moderator_steamid: {
              n: 11,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            time_claimed_by_moderator: {
              n: 12,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            reports: { n: 13, c: m, r: !0, q: !0 },
            additional_subject_data: { n: 14, c: f },
            csam_status: { n: 15, br: a.readEnum, bw: i.writeEnum },
            terrorism_status: { n: 16, br: a.readEnum, bw: i.writeEnum },
            content_moderated_reason: {
              n: 17,
              br: a.readEnum,
              bw: i.writeEnum,
            },
            unresolved_dispute_count: {
              n: 18,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            oldest_unresolved_dispute_time: {
              n: 19,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            owner_dispute_time: { n: 24, br: a.readUint32, bw: i.writeUint32 },
            owner_dispute_resolved_time: {
              n: 25,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            owner_dispute_details: {
              n: 26,
              br: a.readString,
              bw: i.writeString,
            },
            required_moderator_level: {
              n: 27,
              br: a.readEnum,
              bw: i.writeEnum,
            },
            resolved_by_automation: {
              n: 28,
              d: 0,
              br: a.readEnum,
              bw: i.writeEnum,
            },
            detected_by_automation: {
              n: 29,
              d: !1,
              br: a.readBool,
              bw: i.writeBool,
            },
            credible_threat_of_violence_status: {
              n: 30,
              br: a.readEnum,
              bw: i.writeEnum,
            },
            sanctions_applied: { n: 31, c: b, r: !0, q: !0 },
            sanctions_applied_after_dispute: { n: 32, c: b, r: !0, q: !0 },
            decision_reversed: { n: 33, br: a.readBool, bw: i.writeBool },
            reported_content_id: {
              n: 34,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            coordinates: { n: 35, c: U },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubject`;
    }
  },
  te = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subject: { n: 1, c: y, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Response`;
    }
  },
  b = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sanction || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: a.readEnum, bw: i.writeEnum },
            days: { n: 2, br: a.readInt32, bw: i.writeInt32 },
            escalate_to: { n: 3, br: a.readEnum, bw: i.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubjectSanction`;
    }
  },
  x = class e extends d.Message {
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
      return `CContentModeration_GetSubjectOverview_Request`;
    }
  },
  S = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.buckets || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            buckets: { n: 1, c: C, r: !0, q: !0 },
            pending_for_any_moderator: {
              n: 2,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            pending_for_supervisor: {
              n: 3,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            pending_for_valve: { n: 4, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response`;
    }
  },
  C = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: a.readEnum, bw: i.writeEnum },
            unresolved_count: { n: 2, br: a.readUint32, bw: i.writeUint32 },
            oldest_unresolved: { n: 3, br: a.readUint32, bw: i.writeUint32 },
            unclaimed_count: { n: 4, br: a.readUint32, bw: i.writeUint32 },
            oldest_disputed: { n: 5, br: a.readUint32, bw: i.writeUint32 },
            disputed_count: { n: 6, br: a.readUint32, bw: i.writeUint32 },
            unclaimed_disputed_count: {
              n: 7,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            pending_for_any_moderator: {
              n: 8,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            pending_for_supervisor: {
              n: 9,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            pending_for_valve: { n: 10, br: a.readUint32, bw: i.writeUint32 },
            oldest_unresolved_for_any_moderator: {
              n: 11,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            oldest_unresolved_for_supervisor: {
              n: 12,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            oldest_unresolved_for_valve: {
              n: 13,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            coordinates: { n: 14, c: U },
            claimable_for_any_moderator: {
              n: 15,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            claimable_for_supervisor: {
              n: 16,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            claimable_for_valve: { n: 17, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response_Bucket`;
    }
  },
  w = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: a.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubjectKey`;
    }
  },
  T = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
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
              br: a.readFixed64String,
              bw: i.writeFixed64String,
            },
            rtime_cooldown_ends: { n: 2, br: a.readUint32, bw: i.writeUint32 },
            acquit_unresolved_reports: {
              n: 3,
              br: a.readBool,
              bw: i.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Request`;
    }
  },
  ne = class e extends d.Message {
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
      return `CContentModeration_UpdateReporterCooldown_Response`;
    }
  },
  E = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
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
              br: a.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Request`;
    }
  },
  re = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_cooldown_ends || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_cooldown_ends: { n: 1, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Response`;
    }
  },
  ie = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
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
              br: a.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Request`;
    }
  },
  ae = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferred_level || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: a.readEnum, bw: i.writeEnum },
            enabled_subject_types: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readEnum,
              pbr: a.readPackedEnum,
              bw: i.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Response`;
    }
  },
  oe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferred_level || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: a.readEnum, bw: i.writeEnum },
            enabled_subject_types: { n: 2, c: D },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request`;
    }
  },
  D = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_types || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_types: {
              n: 1,
              r: !0,
              q: !0,
              br: a.readEnum,
              pbr: a.readPackedEnum,
              bw: i.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request_SubjectTypeList`;
    }
  },
  se = class e extends d.Message {
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
      return `CContentModeration_SetModeratorPreferences_Response`;
    }
  },
  ce = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
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
              br: a.readFixed64String,
              bw: i.writeFixed64String,
            },
            rt_start: { n: 2, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Request`;
    }
  },
  le = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.activities || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { activities: { n: 1, c: O, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response`;
    }
  },
  O = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: a.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            timestamp: { n: 4, br: a.readUint32, bw: i.writeUint32 },
            action: { n: 5, br: a.readEnum, bw: i.writeEnum },
            json_data: { n: 6, br: a.readString, bw: i.writeString },
            reported_content_id: {
              n: 7,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response_ModerationActivity`;
    }
  },
  k = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_start_date || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_start_date: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            rtime_end_date: { n: 2, br: a.readUint32, bw: i.writeUint32 },
            subject_type: { n: 3, br: a.readEnum, bw: i.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Request`;
    }
  },
  A = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 2, c: j, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response`;
    }
  },
  j = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_date || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_date: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            times_unresolved: { n: 2, br: a.readUint32, bw: i.writeUint32 },
            times_resolved: { n: 3, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response_DayStatistics`;
    }
  },
  M = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: a.readEnum, bw: i.writeEnum },
            count: { n: 2, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Request`;
    }
  },
  N = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: P, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response`;
    }
  },
  P = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: a.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response_Subject`;
    }
  },
  F = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: a.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Request`;
    }
  },
  I = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_reports || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_reports: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            total_acquitted_reports: {
              n: 2,
              br: a.readUint32,
              bw: i.writeUint32,
            },
            reports_in_last_week: { n: 3, br: a.readUint32, bw: i.writeUint32 },
            acquitted_reports_in_last_week: {
              n: 4,
              br: a.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Response`;
    }
  },
  L = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: a.readEnum, bw: i.writeEnum },
            moderator_level: { n: 2, br: a.readEnum, bw: i.writeEnum },
            filters: { n: 3, c: U, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Request`;
    }
  },
  R = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: y, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Response`;
    }
  },
  z = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: a.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Request`;
    }
  },
  B = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: y, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Response`;
    }
  },
  V = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects_to_release || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects_to_release: { n: 1, c: w, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Request`;
    }
  },
  H = class e extends d.Message {
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
      return `CContentModeration_ReleaseSubjects_Response`;
    }
  },
  U = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: a.readEnum, bw: i.writeEnum },
            steamid: { n: 2, br: a.readUint64String, bw: i.writeUint64String },
            forum: { n: 3, br: a.readUint64String, bw: i.writeUint64String },
            topic: { n: 4, br: a.readUint64String, bw: i.writeUint64String },
            comment: { n: 5, br: a.readUint64String, bw: i.writeUint64String },
            comment_thread_id: {
              n: 6,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            sender_account_id: { n: 7, br: a.readUint32, bw: i.writeUint32 },
            chat_message_rtime: { n: 8, br: a.readUint32, bw: i.writeUint32 },
            chat_message_ordinal: { n: 9, br: a.readUint32, bw: i.writeUint32 },
            chat_group_id: {
              n: 10,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            chat_room_id: {
              n: 11,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            receiver_account_id: { n: 12, br: a.readUint32, bw: i.writeUint32 },
            published_file_id: {
              n: 13,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            ugc_content_type: { n: 14, br: a.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ReportedContentCoordinates`;
    }
  },
  W = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            include_reporter_account_status: {
              n: 2,
              br: a.readBool,
              bw: i.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Request`;
    }
  },
  ue = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { subject: { n: 1, c: y } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Response`;
    }
  },
  G = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.coordinates || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { coordinates: { n: 1, c: U } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Request`;
    }
  },
  de = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: y, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Response`;
    }
  },
  K = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            details: { n: 2, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Request`;
    }
  },
  fe = class e extends d.Message {
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
      return `CContentModeration_OwnerDisputeModeration_Response`;
    }
  },
  q = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Request`;
    }
  },
  pe = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: J, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response`;
    }
  },
  J = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            actor_steamid: {
              n: 2,
              br: a.readFixed64String,
              bw: i.writeFixed64String,
            },
            automated_action: { n: 3, br: a.readBool, bw: i.writeBool },
            action: { n: 4, br: a.readEnum, bw: i.writeEnum },
            additional_json_data: { n: 5, br: a.readString, bw: i.writeString },
            actor_is_support: { n: 6, br: a.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response_AuditLogEntry`;
    }
  },
  me = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            report_id: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            dispute_details: { n: 3, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Request`;
    }
  },
  he = class e extends d.Message {
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
      return `CContentModeration_ReporterDisputeModeration_Response`;
    }
  },
  Y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Request`;
    }
  },
  ge = class e extends d.Message {
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
      return `CContentModeration_SustainModerationByID_Response`;
    }
  },
  X = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            new_level: { n: 2, br: a.readEnum, bw: i.writeEnum },
            reason: { n: 3, br: a.readEnum, bw: i.writeEnum },
            note: { n: 4, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Request`;
    }
  },
  _e = class e extends d.Message {
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
      return `CContentModeration_EscalateSubjectByID_Response`;
    }
  },
  ve = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            resolution: { n: 4, br: a.readEnum, bw: i.writeEnum },
            reason: { n: 2, br: a.readEnum, bw: i.writeEnum },
            note: { n: 3, br: a.readString, bw: i.writeString },
            resolved_by_automation: { n: 7, br: a.readEnum, bw: i.writeEnum },
            sanctions_applied: { n: 9, c: b, r: !0, q: !0 },
            skip_lock: { n: 10, br: a.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Request`;
    }
  },
  Z = class e extends d.Message {
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
      return `CContentModeration_ResolveByID_Response`;
    }
  },
  Q = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            csam_status: { n: 2, br: a.readEnum, bw: i.writeEnum },
            terrorism_status: { n: 3, br: a.readEnum, bw: i.writeEnum },
            credible_threat_of_violence_status: {
              n: 4,
              br: a.readEnum,
              bw: i.writeEnum,
            },
            additional_subject_data: { n: 5, c: f },
            owner_dispute_details: {
              n: 6,
              br: a.readString,
              bw: i.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Request`;
    }
  },
  ye = class e extends d.Message {
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
      return `CContentModeration_UpdateSubjectByID_Response`;
    }
  },
  be = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            action: { n: 2, br: a.readEnum, bw: i.writeEnum },
            automated_action: { n: 3, br: a.readBool, bw: i.writeBool },
            additional_json_data: { n: 4, br: a.readString, bw: i.writeString },
            actor_steamid: {
              n: 5,
              br: a.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Request`;
    }
  },
  xe = class e extends d.Message {
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
      return `CContentModeration_WriteToAuditLogByID_Response`;
    }
  },
  $;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ContentModeration.ClaimBatch#1`, u(L, t, n), R, {
      ePrivilege: 5,
    });
  }
  e.ClaimBatch = t;
  function n(e, t, n) {
    return e.SendMsg(`ContentModeration.GetClaimedSubjects#1`, u(z, t, n), B, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  e.GetClaimedSubjects = n;
  function r(e, t, n) {
    return e.SendMsg(`ContentModeration.ReleaseSubjects#1`, u(V, t, n), H, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ReleaseSubjects = r;
  function i(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportsSubmittedByUser#1`,
      u(ee, t, n),
      h,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetReportsSubmittedByUser = i;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetOneReportSubmittedByUser#1`,
      u(g, t, n),
      _,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetOneReportSubmittedByUser = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedSubjectsByOwner#1`,
      u(v, t, n),
      te,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetReportedSubjectsByOwner = o;
  function s(e, t, n) {
    return e.SendMsg(`ContentModeration.GetSubjectOverview#1`, u(x, t, n), S, {
      ePrivilege: 5,
    });
  }
  e.GetSubjectOverview = s;
  function c(e, t, n) {
    return e.SendMsg(
      `ContentModeration.UpdateReporterCooldown#1`,
      u(T, t, n),
      ne,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateReporterCooldown = c;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReporterCooldown#1`,
      u(E, t, n),
      re,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReporterCooldown = l;
  function d(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetModeratorPreferences#1`,
      u(ie, t, n),
      ae,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetModeratorPreferences = d;
  function f(e, t, n) {
    return e.SendMsg(
      `ContentModeration.SetModeratorPreferences#1`,
      u(oe, t, n),
      se,
      { ePrivilege: 5 },
    );
  }
  e.SetModeratorPreferences = f;
  function p(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetModeratorActivity#1`,
      u(ce, t, n),
      le,
      { ePrivilege: 5 },
    );
  }
  e.GetModeratorActivity = p;
  function m(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetDailyModerationStatistics#1`,
      u(k, t, n),
      A,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetDailyModerationStatistics = m;
  function y(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetOldestUnresolvedSubjects#1`,
      u(M, t, n),
      N,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetOldestUnresolvedSubjects = y;
  function b(e, t, n) {
    return e.SendMsg(`ContentModeration.GetReporterStats#1`, u(F, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReporterStats = b;
  function C(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedContentByID#1`,
      u(W, t, n),
      ue,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContentByID = C;
  function w(e, t, n) {
    return e.SendMsg(`ContentModeration.GetReportedContent#1`, u(G, t, n), de, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReportedContent = w;
  function D(e, t, n) {
    return e.SendMsg(
      `ContentModeration.OwnerDisputeModeration#1`,
      u(K, t, n),
      fe,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.OwnerDisputeModeration = D;
  function O(e, t, n) {
    return e.SendMsg(`ContentModeration.GetAuditLogByID#1`, u(q, t, n), pe, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAuditLogByID = O;
  function j(e, t, n) {
    return e.SendMsg(
      `ContentModeration.ReporterDisputeModeration#1`,
      u(me, t, n),
      he,
      { ePrivilege: 1 },
    );
  }
  e.ReporterDisputeModeration = j;
  function P(e, t, n) {
    return e.SendMsg(
      `ContentModeration.SustainModerationByID#1`,
      u(Y, t, n),
      ge,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.SustainModerationByID = P;
  function U(e, t, n) {
    return e.SendMsg(
      `ContentModeration.EscalateSubjectByID#1`,
      u(X, t, n),
      _e,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.EscalateSubjectByID = U;
  function J(e, t, n) {
    return e.SendMsg(`ContentModeration.ResolveByID#1`, u(ve, t, n), Z, {
      ePrivilege: 5,
    });
  }
  e.ResolveByID = J;
  function $(e, t, n) {
    return e.SendMsg(`ContentModeration.UpdateSubjectByID#1`, u(Q, t, n), ye, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateSubjectByID = $;
  function Se(e, t, n) {
    return e.SendMsg(
      `ContentModeration.WriteToAuditLogByID#1`,
      u(be, t, n),
      xe,
      { ePrivilege: 5 },
    );
  }
  e.WriteToAuditLogByID = Se;
})(($ ||= {}));
export {
  E as a,
  V as c,
  Q as d,
  $ as f,
  G as i,
  Y as l,
  U as m,
  q as n,
  F as o,
  w as p,
  W as r,
  K as s,
  X as t,
  T as u,
};
