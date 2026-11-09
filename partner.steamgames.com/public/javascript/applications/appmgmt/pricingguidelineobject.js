/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  Gt as t,
  Ht as n,
  Jt as r,
  Kt as i,
  Q as a,
  Ut as o,
  Wt as s,
  Xt as c,
  Yt as l,
  _t as u,
  kt as d,
  on as f,
  qt as p,
  yt as m,
} from "./mobx.esm.js";
import { t as h } from "./useQuery.js";
import { t as g } from "./reactqueryroot.js";
import { i as _, o as v } from "./currencyutils.js";
var y = f(c(), 1),
  b = class e extends y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptors || n(e.M()),
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
              br: t.readString,
              bw: l.writeRepeatedString,
            },
            interactive_elements: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readString,
              bw: l.writeRepeatedString,
            },
            official_id: { n: 3, br: t.readString, bw: l.writeString },
            esrb_online_music_not_rated: {
              n: 4,
              br: t.readBool,
              bw: l.writeBool,
            },
            esrb_online_interactions_not_rated: {
              n: 5,
              br: t.readBool,
              bw: l.writeBool,
            },
            descriptor_images: {
              n: 6,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: l.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.rating_agency || n(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: t.readEnum, bw: l.writeEnum },
            rating: { n: 2, br: t.readString, bw: l.writeString },
            source: { n: 3, br: t.readEnum, bw: l.writeEnum },
            banned: { n: 4, br: t.readBool, bw: l.writeBool },
            required_age: { n: 5, br: t.readUint32, bw: l.writeUint32 },
            use_age_gate: { n: 6, br: t.readBool, bw: l.writeBool },
            aux_data: { n: 7, c: b },
            agency_rating: { n: 8, br: t.readEnum, bw: l.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.elanguage || n(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            elanguage: { n: 1, br: t.readInt32, bw: l.writeInt32 },
            text: { n: 2, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.customer_notes || n(e.M()),
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
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: l.writeRepeatedEnum,
            },
            has_mature_content: { n: 4, br: t.readBool, bw: l.writeBool },
            ai_external_service_name: {
              n: 5,
              br: t.readString,
              bw: l.writeString,
            },
            ai_external_service_url: {
              n: 6,
              br: t.readString,
              bw: l.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.survey_section || n(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            survey_section: { n: 1, br: t.readEnum, bw: l.writeEnum },
            time_reviewed: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            accountid_reviewer: { n: 3, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.content_category || n(e.M()),
        y.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_category: { n: 1, br: t.readEnum, bw: l.writeEnum },
            questionaire_categories: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: l.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.rating_agency || n(e.M()),
        y.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: t.readString, bw: l.writeString },
            rating: { n: 2, br: t.readString, bw: l.writeString },
            required_age: { n: 3, br: t.readUint32, bw: l.writeUint32 },
            descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: t.readString,
              bw: l.writeRepeatedString,
            },
            banned: { n: 5, br: t.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.timestamp_generated || n(e.M()),
        y.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp_generated: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            generated_version: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            ratings: { n: 3, c: E, r: !0, q: !0 },
            content_categories: { n: 4, c: T, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.desc_code_generated || n(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            desc_code_generated: { n: 1, br: t.readString, bw: l.writeString },
            desc_copyright_infringement_guarantee: {
              n: 2,
              br: t.readString,
              bw: l.writeString,
            },
            desc_content_moderation_strategy: {
              n: 3,
              br: t.readString,
              bw: l.writeString,
            },
            external_service_name: {
              n: 4,
              br: t.readString,
              bw: l.writeString,
            },
            external_service_url: { n: 5, br: t.readString, bw: l.writeString },
            desc_external_service_how_content_available_to_players: {
              n: 6,
              br: t.readString,
              bw: l.writeString,
            },
            desc_external_service_monetization: {
              n: 7,
              br: t.readString,
              bw: l.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.disclosure || n(e.M()),
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
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: l.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.id || n(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { id: { n: 1, br: t.readUint32, bw: l.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.surveyid || n(e.M()),
        y.Message.initialize(this, t, 0, -1, [3, 11, 14, 15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: t.readUint64String, bw: l.writeUint64String },
            state: { n: 2, br: t.readEnum, bw: l.writeEnum },
            descriptors: { n: 3, c: A, r: !0, q: !0 },
            timestamp_started: { n: 4, br: t.readUint32, bw: l.writeUint32 },
            timestamp_updated: { n: 5, br: t.readUint32, bw: l.writeUint32 },
            timestamp_finished: { n: 6, br: t.readUint32, bw: l.writeUint32 },
            accountid: { n: 7, br: t.readUint32, bw: l.writeUint32 },
            developer_notes: { n: 8, br: t.readString, bw: l.writeString },
            keyvalues: { n: 9, br: t.readString, bw: l.writeString },
            ratings: { n: 10, c: D },
            categories: {
              n: 11,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: l.writeRepeatedEnum,
            },
            ai_survey: { n: 12, c: O },
            internal_notes: { n: 13, br: t.readString, bw: l.writeString },
            all_ratings: { n: 14, c: x, r: !0, q: !0 },
            sections_reviewed: { n: 15, c: w, r: !0, q: !0 },
            disclosure: { n: 16, c: C },
            inherited_surveyid: {
              n: 17,
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
            started_from_scratch: { n: 18, br: t.readBool, bw: l.writeBool },
            survey_aux_data: { n: 19, c: k },
            source: { n: 20, br: t.readEnum, bw: l.writeEnum },
            flags: { n: 21, br: t.readUint64String, bw: l.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.appid || n(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            include_descriptors: { n: 2, br: t.readBool, bw: l.writeBool },
            include_keyvalues: { n: 3, br: t.readBool, bw: l.writeBool },
            include_categories: { n: 4, br: t.readBool, bw: l.writeBool },
            include_ai_survey: { n: 5, br: t.readBool, bw: l.writeBool },
            include_all_ratings: { n: 6, br: t.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.appid || n(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            include_descriptors: { n: 2, br: t.readBool, bw: l.writeBool },
            include_keyvalues: { n: 3, br: t.readBool, bw: l.writeBool },
            include_categories: { n: 4, br: t.readBool, bw: l.writeBool },
            include_ai_survey: { n: 5, br: t.readBool, bw: l.writeBool },
            include_all_ratings: { n: 6, br: t.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
        e.prototype.surveyid || n(e.M()),
        y.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: t.readUint64String, bw: l.writeUint64String },
            survey: { n: 2, c: j },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= i(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
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
      p(e.M(), t, n);
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
    return e.SendMsg(`AppContentDescriptor.GetActiveSurvey#1`, m(M, t, n), P, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetActiveSurvey = t;
  function n(e, t, n) {
    return e.SendMsg(`AppContentDescriptor.GetWorkingSurvey#1`, m(N, t, n), P, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetWorkingSurvey = n;
})((F ||= {}));
var I = f(d(), 1),
  L = u(),
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
  let e = a(`pricing_guideline`, `application_config`);
  if (e) return Promise.resolve(e);
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
function K(t) {
  let n = U(),
    r = V();
  return {
    fnApplyGuidelines: (0, I.useCallback)(
      (i, a, o) => {
        if (
          (e(
            n,
            `Pricing Guideline Not Initialized by time conversion being triggered`,
          ),
          n)
        ) {
          for (let e = 1; e < 48; ++e) {
            let s = n.GetRecommendPrice(a, e, void 0, o ?? r)?.price;
            s && s > 0 && t(i, _(e), s);
          }
          for (let e = 1; e < 5; ++e) {
            let s = n.GetRecommendPrice(a, 1, e, o ?? r)?.price;
            s && s > 0 && t(i, v(1, e).toUpperCase(), s);
          }
        }
      },
      [r, t, n],
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
