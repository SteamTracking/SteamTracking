/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $ as e,
  At as t,
  Gt as n,
  Jt as r,
  Kt as i,
  Ut as a,
  Wt as o,
  Xt as s,
  Yt as c,
  Zt as l,
  bt as u,
  en as d,
  qt as f,
  sn as p,
  vt as m,
} from "./chunk~de7f2df91c.js";
import { t as h } from "./chunk~ede3e357a2.js";
import { t as g } from "./chunk~9aa05d2c7d.js";
import { i as _, o as v } from "./chunk~38a44beba7.js";
var y = p(l(), 1),
  b = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptors || a(e.M()),
        y.Message.initialize(this, t, 0, -1, [1, 2, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            descriptors: {
              n: 1,
              r: !0,
              q: !0,
              br: i.readString,
              bw: s.writeRepeatedString,
            },
            interactive_elements: {
              n: 2,
              r: !0,
              q: !0,
              br: i.readString,
              bw: s.writeRepeatedString,
            },
            official_id: { n: 3, br: i.readString, bw: s.writeString },
            esrb_online_music_not_rated: {
              n: 4,
              br: i.readBool,
              bw: s.writeBool,
            },
            esrb_online_interactions_not_rated: {
              n: 5,
              br: i.readBool,
              bw: s.writeBool,
            },
            descriptor_images: {
              n: 6,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: s.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AppRatingAuxData`;
    }
  },
  x = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rating_agency || a(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: i.readEnum, bw: s.writeEnum },
            rating: { n: 2, br: i.readString, bw: s.writeString },
            source: { n: 3, br: i.readEnum, bw: s.writeEnum },
            banned: { n: 4, br: i.readBool, bw: s.writeBool },
            required_age: { n: 5, br: i.readUint32, bw: s.writeUint32 },
            use_age_gate: { n: 6, br: i.readBool, bw: s.writeBool },
            aux_data: { n: 7, c: b },
            agency_rating: { n: 8, br: i.readEnum, bw: s.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AppRating`;
    }
  },
  S = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.elanguage || a(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            elanguage: { n: 1, br: i.readInt32, bw: s.writeInt32 },
            text: { n: 2, br: i.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyLocalizedText`;
    }
  },
  C = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.customer_notes || a(e.M()),
        y.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customer_notes: { n: 1, c: S, r: !0, q: !0 },
            customer_notes_ai: { n: 2, c: S, r: !0, q: !0 },
            mature_tags: {
              n: 3,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: s.writeRepeatedEnum,
            },
            has_mature_content: { n: 4, br: i.readBool, bw: s.writeBool },
            ai_external_service_name: {
              n: 5,
              br: i.readString,
              bw: s.writeString,
            },
            ai_external_service_url: {
              n: 6,
              br: i.readString,
              bw: s.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyDisclosure`;
    }
  },
  w = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.survey_section || a(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            survey_section: { n: 1, br: i.readEnum, bw: s.writeEnum },
            time_reviewed: { n: 2, br: i.readUint32, bw: s.writeUint32 },
            accountid_reviewer: { n: 3, br: i.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SurveySectionReviewed`;
    }
  },
  T = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_category || a(e.M()),
        y.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_category: { n: 1, br: i.readEnum, bw: s.writeEnum },
            questionaire_categories: {
              n: 2,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: s.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameContent`;
    }
  },
  E = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rating_agency || a(e.M()),
        y.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: i.readString, bw: s.writeString },
            rating: { n: 2, br: i.readString, bw: s.writeString },
            required_age: { n: 3, br: i.readUint32, bw: s.writeUint32 },
            descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: i.readString,
              bw: s.writeRepeatedString,
            },
            banned: { n: 5, br: i.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameRating`;
    }
  },
  D = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp_generated || a(e.M()),
        y.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp_generated: { n: 1, br: i.readUint32, bw: s.writeUint32 },
            generated_version: { n: 2, br: i.readUint32, bw: s.writeUint32 },
            ratings: { n: 3, c: E, r: !0, q: !0 },
            content_categories: { n: 4, c: T, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameRatings`;
    }
  },
  O = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.desc_code_generated || a(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            desc_code_generated: { n: 1, br: i.readString, bw: s.writeString },
            desc_copyright_infringement_guarantee: {
              n: 2,
              br: i.readString,
              bw: s.writeString,
            },
            desc_content_moderation_strategy: {
              n: 3,
              br: i.readString,
              bw: s.writeString,
            },
            external_service_name: {
              n: 4,
              br: i.readString,
              bw: s.writeString,
            },
            external_service_url: { n: 5, br: i.readString, bw: s.writeString },
            desc_external_service_how_content_available_to_players: {
              n: 6,
              br: i.readString,
              bw: s.writeString,
            },
            desc_external_service_monetization: {
              n: 7,
              br: i.readString,
              bw: s.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AIContentSurvey`;
    }
  },
  k = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.disclosure || a(e.M()),
        y.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            disclosure: { n: 1, c: C },
            interactive_elements: {
              n: 2,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: s.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyAuxData`;
    }
  },
  A = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || a(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { id: { n: 1, br: i.readUint32, bw: s.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentDescriptor`;
    }
  },
  j = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.surveyid || a(e.M()),
        y.Message.initialize(this, t, 0, -1, [3, 11, 14, 15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: i.readUint64String, bw: s.writeUint64String },
            state: { n: 2, br: i.readEnum, bw: s.writeEnum },
            descriptors: { n: 3, c: A, r: !0, q: !0 },
            timestamp_started: { n: 4, br: i.readUint32, bw: s.writeUint32 },
            timestamp_updated: { n: 5, br: i.readUint32, bw: s.writeUint32 },
            timestamp_finished: { n: 6, br: i.readUint32, bw: s.writeUint32 },
            accountid: { n: 7, br: i.readUint32, bw: s.writeUint32 },
            developer_notes: { n: 8, br: i.readString, bw: s.writeString },
            keyvalues: { n: 9, br: i.readString, bw: s.writeString },
            ratings: { n: 10, c: D },
            categories: {
              n: 11,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: s.writeRepeatedEnum,
            },
            ai_survey: { n: 12, c: O },
            internal_notes: { n: 13, br: i.readString, bw: s.writeString },
            all_ratings: { n: 14, c: x, r: !0, q: !0 },
            sections_reviewed: { n: 15, c: w, r: !0, q: !0 },
            disclosure: { n: 16, c: C },
            inherited_surveyid: {
              n: 17,
              br: i.readUint64String,
              bw: s.writeUint64String,
            },
            started_from_scratch: { n: 18, br: i.readBool, bw: s.writeBool },
            survey_aux_data: { n: 19, c: k },
            source: { n: 20, br: i.readEnum, bw: s.writeEnum },
            flags: { n: 21, br: i.readUint64String, bw: s.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentDescriptorSurvey`;
    }
  },
  M = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: s.writeUint32 },
            include_descriptors: { n: 2, br: i.readBool, bw: s.writeBool },
            include_keyvalues: { n: 3, br: i.readBool, bw: s.writeBool },
            include_categories: { n: 4, br: i.readBool, bw: s.writeBool },
            include_ai_survey: { n: 5, br: i.readBool, bw: s.writeBool },
            include_all_ratings: { n: 6, br: i.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetActiveSurvey_Request`;
    }
  },
  N = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: s.writeUint32 },
            include_descriptors: { n: 2, br: i.readBool, bw: s.writeBool },
            include_keyvalues: { n: 3, br: i.readBool, bw: s.writeBool },
            include_categories: { n: 4, br: i.readBool, bw: s.writeBool },
            include_ai_survey: { n: 5, br: i.readBool, bw: s.writeBool },
            include_all_ratings: { n: 6, br: i.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetWorkingSurvey_Request`;
    }
  },
  P = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.surveyid || a(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: i.readUint64String, bw: s.writeUint64String },
            survey: { n: 2, c: j },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new y.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetSurvey_Response`;
    }
  },
  F;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AppContentDescriptor.GetActiveSurvey#1`, u(M, t, n), P, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetActiveSurvey = t;
  function n(e, t, n) {
    return e.SendMsg(`AppContentDescriptor.GetWorkingSurvey#1`, u(N, t, n), P, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetWorkingSurvey = n;
})((F ||= {}));
var I = p(t(), 1),
  L = m(),
  R = I.createContext({
    eConversionMethod: 1,
    setConversionMethod: (e) => {},
    rgAvailableConversionMethods: [],
  });
function z(e) {
  let { eInitialConversionMethod: t } = e,
    n = U(),
    [r, i] = I.useState(t || 1),
    a = I.useMemo(() => {
      let e = n ? n.GetAvailableConversionMethods() : [];
      return {
        eConversionMethod: r,
        setConversionMethod: i,
        rgAvailableConversionMethods: e,
      };
    }, [r, i, n]);
  return (0, L.jsx)(R.Provider, { value: a, children: e.children });
}
function B() {
  return I.useContext(R);
}
function V() {
  return I.useContext(R).eConversionMethod;
}
function H() {
  let t = e(`pricing_guideline`, `application_config`);
  if (t) return Promise.resolve(t);
  {
    let e = g.getQueryData(G());
    return Promise.resolve(e ?? null);
  }
}
function U() {
  let e = h(W());
  return (0, I.useMemo)(() => (e.data ? new J(e.data) : null), [e.data]);
}
function W() {
  return { queryKey: G(), queryFn: async () => await H() };
}
function G() {
  return [`PricingGuideline`];
}
function K(e) {
  let t = U(),
    n = V();
  return {
    fnApplyGuidelines: (0, I.useCallback)(
      (r, i, a) => {
        if (
          (d(
            t,
            `Pricing Guideline Not Initialized by time conversion being triggered`,
          ),
          t)
        ) {
          for (let o = 1; o < 48; ++o) {
            let s = t.GetRecommendPrice(i, o, void 0, a ?? n)?.price;
            s && s > 0 && e(r, _(o), s);
          }
          for (let o = 1; o < 5; ++o) {
            let s = t.GetRecommendPrice(i, 1, o, a ?? n)?.price;
            s && s > 0 && e(r, v(1, o).toUpperCase(), s);
          }
        }
      },
      [n, e, t],
    ),
  };
}
var q = 1,
  J = class {
    m_mapUSDPrice = new Map();
    m_mapKeyToGuidePrice = new Map();
    m_rgUSDPricePointInCents = [];
    m_setConversionMethod = new Set();
    m_setSupportedCurrencies = new Set();
    m_setSupportedRegions = new Set();
    m_rtNewestConvertStart = 0;
    GetKey(e, t, n, r = q) {
      return `${e}_${t}_${n || 0}_${r}`;
    }
    GetAvailableConversionMethods() {
      return Array.from(this.m_setConversionMethod).sort();
    }
    GetNewestConvertStartTime() {
      return this.m_rtNewestConvertStart || void 0;
    }
    GetAnyPricePoint() {
      return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
    }
    BIsSupportCurrencyAndOrRegion(e, t) {
      return t
        ? e == 1 && this.m_setSupportedRegions.has(t)
        : this.m_setSupportedCurrencies.has(e);
    }
    GetRecommendPrice(e, t, n, r = q) {
      let i = this.GetKey(e, t, n, r);
      return this.m_mapKeyToGuidePrice.get(i);
    }
    GetScaledRecommendedPrice(e, t, n, r = q) {
      let i = -1,
        a = -1;
      for (let t of this.m_mapUSDPrice.get(r).keys()) {
        let n = Math.abs(t - e);
        (i == -1 || n < a) && ((i = t), (a = n));
      }
      let o = this.m_mapUSDPrice.get(r).get(i),
        s = n
          ? o.region_prices.find((e) => e.region_code == n)
          : o.currency_prices.find((e) => e.currency_code == t),
        c = e / i;
      return {
        currency_code: s?.currency_code,
        region_code: s?.region_code,
        price: Math.ceil((s?.price || 0) * c),
      };
    }
    GetUSDPricePointsInCents() {
      return this.m_rgUSDPricePointInCents;
    }
    constructor(e) {
      let t = new Set();
      (e.forEach((e) => {
        let n = e.convert_method ?? q;
        (this.m_setConversionMethod.add(n),
          this.m_mapUSDPrice.has(n) || this.m_mapUSDPrice.set(n, new Map()),
          this.m_mapUSDPrice.get(n).set(e.usd_price, e),
          t.add(e.usd_price),
          (this.m_rtNewestConvertStart = Math.max(
            this.m_rtNewestConvertStart,
            e.rtime_convert_start ?? 0,
          )),
          e.currency_prices.forEach((t) => {
            let n = this.GetKey(
              e.usd_price,
              t.currency_code,
              0,
              e.convert_method || q,
            );
            (this.m_mapKeyToGuidePrice.set(n, t),
              this.m_setSupportedCurrencies.add(t.currency_code));
          }),
          e.region_prices.forEach((t) => {
            let n = this.GetKey(
              e.usd_price,
              t.currency_code,
              t.region_code,
              e.convert_method || q,
            );
            if (
              (this.m_mapKeyToGuidePrice.set(n, t),
              this.m_setSupportedRegions.add(t.region_code),
              this.m_setConversionMethod.has(3))
            ) {
              let n = {
                  currency_code: 1,
                  price: e.usd_price,
                  region_code: t.region_code,
                },
                r = this.GetKey(e.usd_price, 1, t.region_code, 3);
              this.m_mapKeyToGuidePrice.set(r, n);
            }
          }));
      }),
        (this.m_rgUSDPricePointInCents = Array.from(t.keys())));
    }
  };
export { B as a, V as i, U as n, z as r, K as t };
