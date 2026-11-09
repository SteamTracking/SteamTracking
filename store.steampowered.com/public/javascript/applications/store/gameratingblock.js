/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, Pt as n, ft as r } from "./libraries.js";
import {
  $x as i,
  Av as a,
  Cb as o,
  Hb as s,
  Mv as c,
  Qx as l,
  Sb as u,
  Sc as d,
  Xx as f,
  Yx as p,
  Zx as m,
  _a as ee,
  ba as te,
  eS as h,
  ha as g,
  hx as _,
  ma as v,
  nS as y,
  nl as ne,
  sa as b,
  tS as x,
  zb as S,
} from "./main.js";
var C = e(n(), 1),
  w = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptors || p(e.M()),
        C.Message.initialize(this, t, 0, -1, [1, 2, 6], null));
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
              br: l.readString,
              bw: y.writeRepeatedString,
            },
            interactive_elements: {
              n: 2,
              r: !0,
              q: !0,
              br: l.readString,
              bw: y.writeRepeatedString,
            },
            official_id: { n: 3, br: l.readString, bw: y.writeString },
            esrb_online_music_not_rated: {
              n: 4,
              br: l.readBool,
              bw: y.writeBool,
            },
            esrb_online_interactions_not_rated: {
              n: 5,
              br: l.readBool,
              bw: y.writeBool,
            },
            descriptor_images: {
              n: 6,
              r: !0,
              q: !0,
              br: l.readEnum,
              pbr: l.readPackedEnum,
              bw: y.writeRepeatedEnum,
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AppRatingAuxData`;
    }
  },
  re = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rating_agency || p(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: l.readEnum, bw: y.writeEnum },
            rating: { n: 2, br: l.readString, bw: y.writeString },
            source: { n: 3, br: l.readEnum, bw: y.writeEnum },
            banned: { n: 4, br: l.readBool, bw: y.writeBool },
            required_age: { n: 5, br: l.readUint32, bw: y.writeUint32 },
            use_age_gate: { n: 6, br: l.readBool, bw: y.writeBool },
            aux_data: { n: 7, c: w },
            agency_rating: { n: 8, br: l.readEnum, bw: y.writeEnum },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AppRating`;
    }
  },
  T = `TirLOrXjWHY-`,
  E = `_-5gZZ1l2Tv0-`,
  D = e(t(), 1),
  O = r();
function k(e) {
  let t = te({ ...e, className: e.className }, ie);
  return (0, O.jsx)(`img`, { ...t });
}
var ie = [
    ...ee,
    {
      prop: `objectFit`,
      responsive: !0,
      className: T,
      cssProperty: `--object-fit`,
    },
    {
      prop: `objectPosition`,
      responsive: !0,
      className: E,
      cssProperty: `--object-position`,
    },
  ],
  A = `ISKtd7ho5yI-`,
  j = `oa0trKwN3-o-`,
  M = `jBf4xkdtSI8-`,
  N = `TBhKaBJLEZo-`,
  P = `ShrTG-8TFvg-`,
  F = {};
((F.arabic = () =>
  u(() => import(`./gamerating_arabic.js`), [], import.meta.url)),
  (F.brazilian = () =>
    u(() => import(`./gamerating_brazilian.js`), [], import.meta.url)),
  (F.bulgarian = () =>
    u(() => import(`./gamerating_bulgarian.js`), [], import.meta.url)),
  (F.czech = () =>
    u(() => import(`./gamerating_czech.js`), [], import.meta.url)),
  (F.danish = () =>
    u(() => import(`./gamerating_danish.js`), [], import.meta.url)),
  (F.dutch = () =>
    u(() => import(`./gamerating_dutch.js`), [], import.meta.url)),
  (F.english = () =>
    u(() => import(`./gamerating_english.js`), [], import.meta.url)),
  (F.finnish = () =>
    u(() => import(`./gamerating_finnish.js`), [], import.meta.url)),
  (F.french = () =>
    u(() => import(`./gamerating_french.js`), [], import.meta.url)),
  (F.german = () =>
    u(() => import(`./gamerating_german.js`), [], import.meta.url)),
  (F.greek = () =>
    u(() => import(`./gamerating_greek.js`), [], import.meta.url)),
  (F.hungarian = () =>
    u(() => import(`./gamerating_hungarian.js`), [], import.meta.url)),
  (F.indonesian = () =>
    u(() => import(`./gamerating_indonesian.js`), [], import.meta.url)),
  (F.italian = () =>
    u(() => import(`./gamerating_italian.js`), [], import.meta.url)),
  (F.japanese = () =>
    u(() => import(`./gamerating_japanese.js`), [], import.meta.url)),
  (F.koreana = () =>
    u(() => import(`./gamerating_koreana.js`), [], import.meta.url)),
  (F.latam = () =>
    u(() => import(`./gamerating_latam.js`), [], import.meta.url)),
  (F.malay = () =>
    u(() => import(`./gamerating_malay.js`), [], import.meta.url)),
  (F.norwegian = () =>
    u(() => import(`./gamerating_norwegian.js`), [], import.meta.url)),
  (F.polish = () =>
    u(() => import(`./gamerating_polish.js`), [], import.meta.url)),
  (F.portuguese = () =>
    u(() => import(`./gamerating_portuguese.js`), [], import.meta.url)),
  (F.romanian = () =>
    u(() => import(`./gamerating_romanian.js`), [], import.meta.url)),
  (F.russian = () =>
    u(() => import(`./gamerating_russian.js`), [], import.meta.url)),
  (F.sc_schinese = () =>
    u(() => import(`./gamerating_sc_schinese.js`), [], import.meta.url)),
  (F.schinese = () =>
    u(() => import(`./gamerating_schinese.js`), [], import.meta.url)),
  (F.spanish = () =>
    u(() => import(`./gamerating_spanish.js`), [], import.meta.url)),
  (F.swedish = () =>
    u(() => import(`./gamerating_swedish.js`), [], import.meta.url)),
  (F.tchinese = () =>
    u(() => import(`./gamerating_tchinese.js`), [], import.meta.url)),
  (F.thai = () => u(() => import(`./gamerating_thai.js`), [], import.meta.url)),
  (F.turkish = () =>
    u(() => import(`./gamerating_turkish.js`), [], import.meta.url)),
  (F.ukrainian = () =>
    u(() => import(`./gamerating_ukrainian.js`), [], import.meta.url)),
  (F.vietnamese = () =>
    u(() => import(`./gamerating_vietnamese.js`), [], import.meta.url)));
async function I(e) {
  if (F[e]) return await F[e]();
}
var L = o(I),
  R = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.elanguage || p(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            elanguage: { n: 1, br: l.readInt32, bw: y.writeInt32 },
            text: { n: 2, br: l.readString, bw: y.writeString },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyLocalizedText`;
    }
  },
  z = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.customer_notes || p(e.M()),
        C.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customer_notes: { n: 1, c: R, r: !0, q: !0 },
            customer_notes_ai: { n: 2, c: R, r: !0, q: !0 },
            mature_tags: {
              n: 3,
              r: !0,
              q: !0,
              br: l.readEnum,
              pbr: l.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
            has_mature_content: { n: 4, br: l.readBool, bw: y.writeBool },
            ai_external_service_name: {
              n: 5,
              br: l.readString,
              bw: y.writeString,
            },
            ai_external_service_url: {
              n: 6,
              br: l.readString,
              bw: y.writeString,
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyDisclosure`;
    }
  },
  B = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.survey_section || p(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            survey_section: { n: 1, br: l.readEnum, bw: y.writeEnum },
            time_reviewed: { n: 2, br: l.readUint32, bw: y.writeUint32 },
            accountid_reviewer: { n: 3, br: l.readUint32, bw: y.writeUint32 },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SurveySectionReviewed`;
    }
  },
  V = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_category || p(e.M()),
        C.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_category: { n: 1, br: l.readEnum, bw: y.writeEnum },
            questionaire_categories: {
              n: 2,
              r: !0,
              q: !0,
              br: l.readEnum,
              pbr: l.readPackedEnum,
              bw: y.writeRepeatedEnum,
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameContent`;
    }
  },
  H = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rating_agency || p(e.M()),
        C.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: l.readString, bw: y.writeString },
            rating: { n: 2, br: l.readString, bw: y.writeString },
            required_age: { n: 3, br: l.readUint32, bw: y.writeUint32 },
            descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: l.readString,
              bw: y.writeRepeatedString,
            },
            banned: { n: 5, br: l.readBool, bw: y.writeBool },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameRating`;
    }
  },
  U = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp_generated || p(e.M()),
        C.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp_generated: { n: 1, br: l.readUint32, bw: y.writeUint32 },
            generated_version: { n: 2, br: l.readUint32, bw: y.writeUint32 },
            ratings: { n: 3, c: H, r: !0, q: !0 },
            content_categories: { n: 4, c: V, r: !0, q: !0 },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameRatings`;
    }
  },
  W = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.desc_code_generated || p(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            desc_code_generated: { n: 1, br: l.readString, bw: y.writeString },
            desc_copyright_infringement_guarantee: {
              n: 2,
              br: l.readString,
              bw: y.writeString,
            },
            desc_content_moderation_strategy: {
              n: 3,
              br: l.readString,
              bw: y.writeString,
            },
            external_service_name: {
              n: 4,
              br: l.readString,
              bw: y.writeString,
            },
            external_service_url: { n: 5, br: l.readString, bw: y.writeString },
            desc_external_service_how_content_available_to_players: {
              n: 6,
              br: l.readString,
              bw: y.writeString,
            },
            desc_external_service_monetization: {
              n: 7,
              br: l.readString,
              bw: y.writeString,
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AIContentSurvey`;
    }
  },
  G = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.disclosure || p(e.M()),
        C.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            disclosure: { n: 1, c: z },
            interactive_elements: {
              n: 2,
              r: !0,
              q: !0,
              br: l.readEnum,
              pbr: l.readPackedEnum,
              bw: y.writeRepeatedEnum,
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyAuxData`;
    }
  },
  K = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || p(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { id: { n: 1, br: l.readUint32, bw: y.writeUint32 } },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentDescriptor`;
    }
  },
  q = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.surveyid || p(e.M()),
        C.Message.initialize(this, t, 0, -1, [3, 11, 14, 15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: l.readUint64String, bw: y.writeUint64String },
            state: { n: 2, br: l.readEnum, bw: y.writeEnum },
            descriptors: { n: 3, c: K, r: !0, q: !0 },
            timestamp_started: { n: 4, br: l.readUint32, bw: y.writeUint32 },
            timestamp_updated: { n: 5, br: l.readUint32, bw: y.writeUint32 },
            timestamp_finished: { n: 6, br: l.readUint32, bw: y.writeUint32 },
            accountid: { n: 7, br: l.readUint32, bw: y.writeUint32 },
            developer_notes: { n: 8, br: l.readString, bw: y.writeString },
            keyvalues: { n: 9, br: l.readString, bw: y.writeString },
            ratings: { n: 10, c: U },
            categories: {
              n: 11,
              r: !0,
              q: !0,
              br: l.readEnum,
              pbr: l.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
            ai_survey: { n: 12, c: W },
            internal_notes: { n: 13, br: l.readString, bw: y.writeString },
            all_ratings: { n: 14, c: re, r: !0, q: !0 },
            sections_reviewed: { n: 15, c: B, r: !0, q: !0 },
            disclosure: { n: 16, c: z },
            inherited_surveyid: {
              n: 17,
              br: l.readUint64String,
              bw: y.writeUint64String,
            },
            started_from_scratch: { n: 18, br: l.readBool, bw: y.writeBool },
            survey_aux_data: { n: 19, c: G },
            source: { n: 20, br: l.readEnum, bw: y.writeEnum },
            flags: { n: 21, br: l.readUint64String, bw: y.writeUint64String },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentDescriptorSurvey`;
    }
  },
  J = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: l.readUint32, bw: y.writeUint32 },
            include_descriptors: { n: 2, br: l.readBool, bw: y.writeBool },
            include_keyvalues: { n: 3, br: l.readBool, bw: y.writeBool },
            include_categories: { n: 4, br: l.readBool, bw: y.writeBool },
            include_ai_survey: { n: 5, br: l.readBool, bw: y.writeBool },
            include_all_ratings: { n: 6, br: l.readBool, bw: y.writeBool },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetActiveSurvey_Request`;
    }
  },
  Y = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: l.readUint32, bw: y.writeUint32 },
            include_descriptors: { n: 2, br: l.readBool, bw: y.writeBool },
            include_keyvalues: { n: 3, br: l.readBool, bw: y.writeBool },
            include_categories: { n: 4, br: l.readBool, bw: y.writeBool },
            include_ai_survey: { n: 5, br: l.readBool, bw: y.writeBool },
            include_all_ratings: { n: 6, br: l.readBool, bw: y.writeBool },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetWorkingSurvey_Request`;
    }
  },
  X = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.surveyid || p(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: l.readUint64String, bw: y.writeUint64String },
            survey: { n: 2, c: q },
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
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetSurvey_Response`;
    }
  },
  ae;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AppContentDescriptor.GetActiveSurvey#1`, _(J, t, n), X, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetActiveSurvey = t;
  function n(e, t, n) {
    return e.SendMsg(`AppContentDescriptor.GetWorkingSurvey#1`, _(Y, t, n), X, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetWorkingSurvey = n;
})((ae ||= {}));
var oe = new Map([
    [1, `esrb`],
    [2, `pegi`],
    [3, `bbfc`],
    [4, `usk`],
    [5, `oflc`],
    [6, `nzoflc`],
    [7, `cero`],
    [8, `kgrb`],
    [9, `gmedia`],
    [10, `dejus`],
    [11, `mda`],
    [12, `fpb`],
    [13, `csrr`],
    [14, `crl`],
    [15, `agcom`],
    [16, `igrs`],
    [17, `steam_germany`],
    [18, `steam_australia`],
    [19, `cadpa`],
  ]),
  se = `esrb`;
function ce(e) {
  return oe.get(e) ?? ``;
}
function le(e) {
  return e ? L.Localize(`#GameRating_Agency_` + e.toUpperCase()) : ``;
}
function ue(e, t) {
  return !e || !t ? `` : L.Localize(`#GameRating_Rating_` + e + `_` + t);
}
function de(e) {
  return L.Localize(`#GameRating_RARSText_` + e);
}
var fe = new Map([
  [1, { strFile: `love`, strToken: `#GameRating_DescriptorImage_CERO_Love` }],
  [
    2,
    {
      strFile: `sexual_content`,
      strToken: `#GameRating_DescriptorImage_CERO_SexualContent`,
    },
  ],
  [
    3,
    {
      strFile: `violence`,
      strToken: `#GameRating_DescriptorImage_CERO_Violence`,
    },
  ],
  [
    4,
    { strFile: `horror`, strToken: `#GameRating_DescriptorImage_CERO_Horror` },
  ],
  [
    5,
    {
      strFile: `drinking_smoking`,
      strToken: `#GameRating_DescriptorImage_CERO_DrinkingSmoking`,
    },
  ],
  [
    6,
    {
      strFile: `gambling`,
      strToken: `#GameRating_DescriptorImage_CERO_Gambling`,
    },
  ],
  [7, { strFile: `crime`, strToken: `#GameRating_DescriptorImage_CERO_Crime` }],
  [8, { strFile: `drugs`, strToken: `#GameRating_DescriptorImage_CERO_Drugs` }],
  [
    9,
    {
      strFile: `language`,
      strToken: `#GameRating_DescriptorImage_CERO_Language`,
    },
  ],
]);
function pe(e) {
  let t = fe.get(e);
  if (t)
    return {
      strURL: `${s.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${t.strFile}.png`,
      strAlt: L.Localize(t.strToken),
    };
}
var me = new Map([
  [1, `#GameRating_ContentCategoryDescriptor_60`],
  [2, `#GameRating_ContentCategoryDescriptor_61`],
  [4, `#GameRating_ContentCategoryDescriptor_62`],
  [3, `#GameRating_ContentCategoryDescriptor_63`],
]);
function Z(e) {
  return e
    .map((e) => me.get(e))
    .filter((e) => e !== void 0)
    .map((e) => L.Localize(e));
}
function he(e) {
  let t = [];
  for (let n of e) {
    let e = n.trim();
    e && !t.includes(e) && t.push(e);
  }
  return t;
}
function ge(e) {
  let { rating: t } = e,
    { strType: n, strRating: r } = t;
  if (r === `pending`)
    return (0, O.jsxs)(`div`, {
      className: d(A, `GameRating`),
      children: [
        (0, O.jsx)(v, {
          direction: `row`,
          justify: `between`,
          className: j,
          children: L.Localize(`#GameRating_Pending`),
        }),
        (0, O.jsx)($, { strType: n }),
      ],
    });
  let i = n === `crl` ? [de(r)] : t.rgDescriptors,
    a = t.bOnlineMusicNotRated || t.bOnlineInteractionsNotRated;
  return (0, O.jsxs)(v, {
    direction: `column`,
    gap: `3`,
    className: A,
    children: [
      n === `dejus`
        ? t.nRequiredAge > 0 &&
          (0, O.jsx)(b, {
            size: `3`,
            contrast: `title`,
            className: d(`_1kmdTIqP7cQ-`, `RequiredAge`),
            children: L.Localize(`#GameRating_Age_DEJUS`, t.nRequiredAge),
          })
        : t.bBanned && (0, O.jsx)(_e, {}),
      !t.bBanned &&
        (0, O.jsxs)(v, {
          direction: `row`,
          gap: `3`,
          className: void 0,
          children: [
            (0, O.jsx)(`div`, {
              className: `qmtMFf1NAzU-`,
              children: (0, O.jsx)(ve, { rating: t }),
            }),
            (0, O.jsxs)(v, {
              direction: `column`,
              gap: `2`,
              children: [
                i.length > 0 &&
                  (0, O.jsx)(b, {
                    as: `p`,
                    contrast: `body`,
                    className: `TBhKaBJLEZo-`,
                    children: i.join(`
`),
                  }),
                (0, O.jsx)(ye, { rating: t }),
                a &&
                  (0, O.jsxs)(O.Fragment, {
                    children: [
                      t.bOnlineMusicNotRated &&
                        (0, O.jsx)(b, {
                          as: `p`,
                          contrast: `body`,
                          className: `TBhKaBJLEZo-`,
                          children: L.Localize(`#GameRating_OnlineMusicNotice`),
                        }),
                      t.bOnlineInteractionsNotRated &&
                        (0, O.jsx)(b, {
                          as: `p`,
                          contrast: `body`,
                          className: `TBhKaBJLEZo-`,
                          children: L.Localize(
                            `#GameRating_OnlineInteractionsNotice`,
                          ),
                        }),
                    ],
                  }),
                (0, O.jsx)(be, { rating: t }),
              ],
            }),
          ],
        }),
      (0, O.jsx)($, { strType: n }),
    ],
  });
}
function _e() {
  return (0, O.jsx)(v, {
    direction: `row`,
    justify: `between`,
    className: j,
    children: L.LocalizeReact(
      `#GameRating_ContentClassification`,
      (0, O.jsx)(`span`, {
        className: M,
        children: L.Localize(`#GameRating_Banned`),
      }),
    ),
  });
}
function ve(e) {
  let {
    strType: t,
    strRating: n,
    strImageURL: r,
    strImageTarget: i,
  } = e.rating;
  if (n === `0`)
    return (0, O.jsx)(`div`, {
      className: P,
      children: L.Localize(`#GameRating_AllAges`),
    });
  if (!r) return null;
  let a = ue(t, n);
  return i
    ? (0, O.jsx)(ne, {
        href: i,
        onOKActionDescription: a,
        children: (0, O.jsx)(k, { src: r, alt: a }),
      })
    : (0, O.jsx)(k, { src: r, alt: a });
}
function ye(e) {
  let t = (e.rating.rgDescriptorImages ?? [])
    .map((e) => pe(e))
    .filter((e) => e !== void 0);
  return t.length === 0
    ? null
    : (0, O.jsx)(v, {
        direction: `row`,
        wrap: `wrap`,
        align: `start`,
        gap: `1`,
        children: t.map((e, t) =>
          (0, O.jsx)(k, { src: e.strURL, alt: e.strAlt, title: e.strAlt }, t),
        ),
      });
}
function be(e) {
  let {
      strType: t,
      rgRatingInteractiveElements: n,
      rgSurveyInteractiveElements: r,
    } = e.rating,
    i = t === se,
    a = i ? n : r;
  return a.length === 0
    ? null
    : (0, O.jsx)(Q, {
        strTitle: L.Localize(
          i
            ? `#GameRating_InteractiveElements_Title`
            : `#GameRating_ContentCategory_InteractiveElements`,
        ),
        rgElements: a,
      });
}
function xe(e) {
  return (0, O.jsxs)(`div`, {
    className: A,
    children: [
      (0, O.jsx)(`div`, {
        className: j,
        children: L.Localize(`#GameRating_ContentCategories_Title`),
      }),
      (0, O.jsx)(Q, {
        strTitle: L.Localize(`#GameRating_ContentCategory_InteractiveElements`),
        rgElements: e.rgInteractiveElements,
      }),
    ],
  });
}
function Q(e) {
  return (0, O.jsxs)(g, {
    children: [
      (0, O.jsx)(b, { as: `p`, contrast: `note`, children: e.strTitle }),
      (0, O.jsx)(b, {
        as: `p`,
        contrast: `body`,
        className: N,
        children: e.rgElements.join(L.Localize(`#GameRating_ListDelimiter`)),
      }),
    ],
  });
}
function $(e) {
  let t = le(e.strType);
  return t
    ? (0, O.jsx)(b, {
        contrast: `body`,
        size: `2`,
        className: `Agency`,
        children: L.Localize(`#GameRating_RatingBy`, t),
      })
    : null;
}
function Se(e) {
  return {
    strType: e.type || (e.agency === void 0 ? `` : ce(e.agency)),
    strRating: e.rating ?? ``,
    bBanned: !!e.banned,
    nRequiredAge: e.required_age ?? 0,
    rgDescriptors: e.descriptors ?? [],
    rgDescriptorImages: e.descriptor_images ?? [],
    bOnlineMusicNotRated: !!e.esrb_online_music_not_rated,
    bOnlineInteractionsNotRated: !!e.esrb_online_interactions_not_rated,
    rgRatingInteractiveElements: he(
      (e.interactive_elements ?? ``).split(/[\r\n,]+/),
    ),
    rgSurveyInteractiveElements: Z(e.survey_interactive_elements ?? []),
    strImageURL: Ce(e),
    strImageTarget: e.image_target || void 0,
  };
}
function Ce(e) {
  if (e.image_url)
    return `${s.STORE_CDN_URL}${e.image_url}?${e.image_target ? `v=3` : `v=2`}`;
}
function we(e) {
  let {
      id: t,
      eLayout: n = `rightcolumn`,
      bRatingAllowed: r,
      bHideRatingTitle: i,
    } = e,
    a = Te(t, r),
    o = S();
  if ((D.use(L.Ready()), !a)) return null;
  let s = n === `details`,
    c = o ? `block app_ratings_block` : `block`;
  return (
    s && (c = `game_rating_area details_block`),
    `rating` in a
      ? (0, O.jsxs)(`div`, {
          className: c,
          children: [
            !s &&
              (0, O.jsx)(`div`, {
                className: `responsive_block_header ratings_title`,
                style: i ? { display: `none` } : void 0,
                children: L.Localize(`#GameRating_Ratings_Title`),
              }),
            (0, O.jsx)(ge, { rating: a.rating }),
          ],
        })
      : (0, O.jsx)(`div`, {
          className: c,
          children: (0, O.jsx)(xe, {
            rgInteractiveElements: a.rgInteractiveElements,
          }),
        })
  );
}
function Te(e, t) {
  let { data: n, isPending: r } = c(t ? e : void 0),
    i = t && r,
    a = t && !!n?.rating,
    o = Ee(i || a ? void 0 : e);
  return i
    ? null
    : a && n
      ? { rating: Se(n) }
      : o.length === 0
        ? null
        : { rgInteractiveElements: o };
}
function Ee(e) {
  let { data: t } = a(e);
  return Z(t?.interactive_elements ?? []);
}
export { we as GameRatingBlock, k as t };
