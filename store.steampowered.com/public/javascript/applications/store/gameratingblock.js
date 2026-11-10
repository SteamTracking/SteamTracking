/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, Pt as n, ft as r } from "./libraries.js";
import {
  $x as i,
  Bb as a,
  Cb as o,
  Cc as s,
  Nv as c,
  Qx as l,
  Ub as u,
  Xx as d,
  Zx as f,
  ca as p,
  eS as m,
  ga as ee,
  gx as h,
  ha as g,
  jv as _,
  nS as v,
  rS as y,
  rl as b,
  tS as x,
  va as S,
  wb as C,
  xa as w,
} from "./main.js";
var T = e(n(), 1),
  E = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptors || d(e.M()),
        T.Message.initialize(this, t, 0, -1, [1, 2, 6], null));
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
              bw: y.writeRepeatedString,
            },
            interactive_elements: {
              n: 2,
              r: !0,
              q: !0,
              br: i.readString,
              bw: y.writeRepeatedString,
            },
            official_id: { n: 3, br: i.readString, bw: y.writeString },
            esrb_online_music_not_rated: {
              n: 4,
              br: i.readBool,
              bw: y.writeBool,
            },
            esrb_online_interactions_not_rated: {
              n: 5,
              br: i.readBool,
              bw: y.writeBool,
            },
            descriptor_images: {
              n: 6,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AppRatingAuxData`;
    }
  },
  te = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rating_agency || d(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: i.readEnum, bw: y.writeEnum },
            rating: { n: 2, br: i.readString, bw: y.writeString },
            source: { n: 3, br: i.readEnum, bw: y.writeEnum },
            banned: { n: 4, br: i.readBool, bw: y.writeBool },
            required_age: { n: 5, br: i.readUint32, bw: y.writeUint32 },
            use_age_gate: { n: 6, br: i.readBool, bw: y.writeBool },
            aux_data: { n: 7, c: E },
            agency_rating: { n: 8, br: i.readEnum, bw: y.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AppRating`;
    }
  },
  D = `TirLOrXjWHY-`,
  O = `_-5gZZ1l2Tv0-`,
  ne = e(t(), 1),
  k = r();
function A(e) {
  let t = w({ ...e, className: e.className }, re);
  return (0, k.jsx)(`img`, { ...t });
}
var re = [
    ...S,
    {
      prop: `objectFit`,
      responsive: !0,
      className: D,
      cssProperty: `--object-fit`,
    },
    {
      prop: `objectPosition`,
      responsive: !0,
      className: O,
      cssProperty: `--object-position`,
    },
  ],
  j = `ISKtd7ho5yI-`,
  M = `oa0trKwN3-o-`,
  N = `jBf4xkdtSI8-`,
  P = `TBhKaBJLEZo-`,
  F = `ShrTG-8TFvg-`,
  I = {};
((I.arabic = () =>
  o(() => import(`./gamerating_arabic.js`), [], import.meta.url)),
  (I.brazilian = () =>
    o(() => import(`./gamerating_brazilian.js`), [], import.meta.url)),
  (I.bulgarian = () =>
    o(() => import(`./gamerating_bulgarian.js`), [], import.meta.url)),
  (I.czech = () =>
    o(() => import(`./gamerating_czech.js`), [], import.meta.url)),
  (I.danish = () =>
    o(() => import(`./gamerating_danish.js`), [], import.meta.url)),
  (I.dutch = () =>
    o(() => import(`./gamerating_dutch.js`), [], import.meta.url)),
  (I.english = () =>
    o(() => import(`./gamerating_english.js`), [], import.meta.url)),
  (I.finnish = () =>
    o(() => import(`./gamerating_finnish.js`), [], import.meta.url)),
  (I.french = () =>
    o(() => import(`./gamerating_french.js`), [], import.meta.url)),
  (I.german = () =>
    o(() => import(`./gamerating_german.js`), [], import.meta.url)),
  (I.greek = () =>
    o(() => import(`./gamerating_greek.js`), [], import.meta.url)),
  (I.hungarian = () =>
    o(() => import(`./gamerating_hungarian.js`), [], import.meta.url)),
  (I.indonesian = () =>
    o(() => import(`./gamerating_indonesian.js`), [], import.meta.url)),
  (I.italian = () =>
    o(() => import(`./gamerating_italian.js`), [], import.meta.url)),
  (I.japanese = () =>
    o(() => import(`./gamerating_japanese.js`), [], import.meta.url)),
  (I.koreana = () =>
    o(() => import(`./gamerating_koreana.js`), [], import.meta.url)),
  (I.latam = () =>
    o(() => import(`./gamerating_latam.js`), [], import.meta.url)),
  (I.malay = () =>
    o(() => import(`./gamerating_malay.js`), [], import.meta.url)),
  (I.norwegian = () =>
    o(() => import(`./gamerating_norwegian.js`), [], import.meta.url)),
  (I.polish = () =>
    o(() => import(`./gamerating_polish.js`), [], import.meta.url)),
  (I.portuguese = () =>
    o(() => import(`./gamerating_portuguese.js`), [], import.meta.url)),
  (I.romanian = () =>
    o(() => import(`./gamerating_romanian.js`), [], import.meta.url)),
  (I.russian = () =>
    o(() => import(`./gamerating_russian.js`), [], import.meta.url)),
  (I.sc_schinese = () =>
    o(() => import(`./gamerating_sc_schinese.js`), [], import.meta.url)),
  (I.schinese = () =>
    o(() => import(`./gamerating_schinese.js`), [], import.meta.url)),
  (I.spanish = () =>
    o(() => import(`./gamerating_spanish.js`), [], import.meta.url)),
  (I.swedish = () =>
    o(() => import(`./gamerating_swedish.js`), [], import.meta.url)),
  (I.tchinese = () =>
    o(() => import(`./gamerating_tchinese.js`), [], import.meta.url)),
  (I.thai = () => o(() => import(`./gamerating_thai.js`), [], import.meta.url)),
  (I.turkish = () =>
    o(() => import(`./gamerating_turkish.js`), [], import.meta.url)),
  (I.ukrainian = () =>
    o(() => import(`./gamerating_ukrainian.js`), [], import.meta.url)),
  (I.vietnamese = () =>
    o(() => import(`./gamerating_vietnamese.js`), [], import.meta.url)));
async function L(e) {
  if (I[e]) return await I[e]();
}
var R = C(L),
  z = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.elanguage || d(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            elanguage: { n: 1, br: i.readInt32, bw: y.writeInt32 },
            text: { n: 2, br: i.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyLocalizedText`;
    }
  },
  B = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.customer_notes || d(e.M()),
        T.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customer_notes: { n: 1, c: z, r: !0, q: !0 },
            customer_notes_ai: { n: 2, c: z, r: !0, q: !0 },
            mature_tags: {
              n: 3,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
            has_mature_content: { n: 4, br: i.readBool, bw: y.writeBool },
            ai_external_service_name: {
              n: 5,
              br: i.readString,
              bw: y.writeString,
            },
            ai_external_service_url: {
              n: 6,
              br: i.readString,
              bw: y.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyDisclosure`;
    }
  },
  V = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.survey_section || d(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            survey_section: { n: 1, br: i.readEnum, bw: y.writeEnum },
            time_reviewed: { n: 2, br: i.readUint32, bw: y.writeUint32 },
            accountid_reviewer: { n: 3, br: i.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SurveySectionReviewed`;
    }
  },
  H = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_category || d(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_category: { n: 1, br: i.readEnum, bw: y.writeEnum },
            questionaire_categories: {
              n: 2,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameContent`;
    }
  },
  U = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rating_agency || d(e.M()),
        T.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: i.readString, bw: y.writeString },
            rating: { n: 2, br: i.readString, bw: y.writeString },
            required_age: { n: 3, br: i.readUint32, bw: y.writeUint32 },
            descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: i.readString,
              bw: y.writeRepeatedString,
            },
            banned: { n: 5, br: i.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameRating`;
    }
  },
  W = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp_generated || d(e.M()),
        T.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp_generated: { n: 1, br: i.readUint32, bw: y.writeUint32 },
            generated_version: { n: 2, br: i.readUint32, bw: y.writeUint32 },
            ratings: { n: 3, c: U, r: !0, q: !0 },
            content_categories: { n: 4, c: H, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameRatings`;
    }
  },
  G = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.desc_code_generated || d(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            desc_code_generated: { n: 1, br: i.readString, bw: y.writeString },
            desc_copyright_infringement_guarantee: {
              n: 2,
              br: i.readString,
              bw: y.writeString,
            },
            desc_content_moderation_strategy: {
              n: 3,
              br: i.readString,
              bw: y.writeString,
            },
            external_service_name: {
              n: 4,
              br: i.readString,
              bw: y.writeString,
            },
            external_service_url: { n: 5, br: i.readString, bw: y.writeString },
            desc_external_service_how_content_available_to_players: {
              n: 6,
              br: i.readString,
              bw: y.writeString,
            },
            desc_external_service_monetization: {
              n: 7,
              br: i.readString,
              bw: y.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AIContentSurvey`;
    }
  },
  K = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.disclosure || d(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            disclosure: { n: 1, c: B },
            interactive_elements: {
              n: 2,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyAuxData`;
    }
  },
  q = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || d(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { id: { n: 1, br: i.readUint32, bw: y.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentDescriptor`;
    }
  },
  J = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.surveyid || d(e.M()),
        T.Message.initialize(this, t, 0, -1, [3, 11, 14, 15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: i.readUint64String, bw: y.writeUint64String },
            state: { n: 2, br: i.readEnum, bw: y.writeEnum },
            descriptors: { n: 3, c: q, r: !0, q: !0 },
            timestamp_started: { n: 4, br: i.readUint32, bw: y.writeUint32 },
            timestamp_updated: { n: 5, br: i.readUint32, bw: y.writeUint32 },
            timestamp_finished: { n: 6, br: i.readUint32, bw: y.writeUint32 },
            accountid: { n: 7, br: i.readUint32, bw: y.writeUint32 },
            developer_notes: { n: 8, br: i.readString, bw: y.writeString },
            keyvalues: { n: 9, br: i.readString, bw: y.writeString },
            ratings: { n: 10, c: W },
            categories: {
              n: 11,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
            ai_survey: { n: 12, c: G },
            internal_notes: { n: 13, br: i.readString, bw: y.writeString },
            all_ratings: { n: 14, c: te, r: !0, q: !0 },
            sections_reviewed: { n: 15, c: V, r: !0, q: !0 },
            disclosure: { n: 16, c: B },
            inherited_surveyid: {
              n: 17,
              br: i.readUint64String,
              bw: y.writeUint64String,
            },
            started_from_scratch: { n: 18, br: i.readBool, bw: y.writeBool },
            survey_aux_data: { n: 19, c: K },
            source: { n: 20, br: i.readEnum, bw: y.writeEnum },
            flags: { n: 21, br: i.readUint64String, bw: y.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentDescriptorSurvey`;
    }
  },
  Y = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || d(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: y.writeUint32 },
            include_descriptors: { n: 2, br: i.readBool, bw: y.writeBool },
            include_keyvalues: { n: 3, br: i.readBool, bw: y.writeBool },
            include_categories: { n: 4, br: i.readBool, bw: y.writeBool },
            include_ai_survey: { n: 5, br: i.readBool, bw: y.writeBool },
            include_all_ratings: { n: 6, br: i.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetActiveSurvey_Request`;
    }
  },
  ie = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || d(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: y.writeUint32 },
            include_descriptors: { n: 2, br: i.readBool, bw: y.writeBool },
            include_keyvalues: { n: 3, br: i.readBool, bw: y.writeBool },
            include_categories: { n: 4, br: i.readBool, bw: y.writeBool },
            include_ai_survey: { n: 5, br: i.readBool, bw: y.writeBool },
            include_all_ratings: { n: 6, br: i.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetWorkingSurvey_Request`;
    }
  },
  X = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.surveyid || d(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: i.readUint64String, bw: y.writeUint64String },
            survey: { n: 2, c: J },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetSurvey_Response`;
    }
  },
  ae;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AppContentDescriptor.GetActiveSurvey#1`, h(Y, t, n), X, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetActiveSurvey = t;
  function n(e, t, n) {
    return e.SendMsg(
      `AppContentDescriptor.GetWorkingSurvey#1`,
      h(ie, t, n),
      X,
      { bConstMethod: !0, ePrivilege: 7 },
    );
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
  return e ? R.Localize(`#GameRating_Agency_` + e.toUpperCase()) : ``;
}
function ue(e, t) {
  return !e || !t ? `` : R.Localize(`#GameRating_Rating_` + e + `_` + t);
}
function de(e) {
  return R.Localize(`#GameRating_RARSText_` + e);
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
      strURL: `${u.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${t.strFile}.png`,
      strAlt: R.Localize(t.strToken),
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
    .map((e) => R.Localize(e));
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
    return (0, k.jsxs)(`div`, {
      className: s(j, `GameRating`),
      children: [
        (0, k.jsx)(g, {
          direction: `row`,
          justify: `between`,
          className: M,
          children: R.Localize(`#GameRating_Pending`),
        }),
        (0, k.jsx)($, { strType: n }),
      ],
    });
  let i = n === `crl` ? [de(r)] : t.rgDescriptors,
    a = t.bOnlineMusicNotRated || t.bOnlineInteractionsNotRated;
  return (0, k.jsxs)(g, {
    direction: `column`,
    gap: `3`,
    className: j,
    children: [
      n === `dejus`
        ? t.nRequiredAge > 0 &&
          (0, k.jsx)(p, {
            size: `3`,
            contrast: `title`,
            className: s(`_1kmdTIqP7cQ-`, `RequiredAge`),
            children: R.Localize(`#GameRating_Age_DEJUS`, t.nRequiredAge),
          })
        : t.bBanned && (0, k.jsx)(_e, {}),
      !t.bBanned &&
        (0, k.jsxs)(g, {
          direction: `row`,
          gap: `3`,
          className: void 0,
          children: [
            (0, k.jsx)(`div`, {
              className: `qmtMFf1NAzU-`,
              children: (0, k.jsx)(ve, { rating: t }),
            }),
            (0, k.jsxs)(g, {
              direction: `column`,
              gap: `2`,
              children: [
                i.length > 0 &&
                  (0, k.jsx)(p, {
                    as: `p`,
                    contrast: `body`,
                    className: `TBhKaBJLEZo-`,
                    children: i.join(`
`),
                  }),
                (0, k.jsx)(ye, { rating: t }),
                a &&
                  (0, k.jsxs)(k.Fragment, {
                    children: [
                      t.bOnlineMusicNotRated &&
                        (0, k.jsx)(p, {
                          as: `p`,
                          contrast: `body`,
                          className: `TBhKaBJLEZo-`,
                          children: R.Localize(`#GameRating_OnlineMusicNotice`),
                        }),
                      t.bOnlineInteractionsNotRated &&
                        (0, k.jsx)(p, {
                          as: `p`,
                          contrast: `body`,
                          className: `TBhKaBJLEZo-`,
                          children: R.Localize(
                            `#GameRating_OnlineInteractionsNotice`,
                          ),
                        }),
                    ],
                  }),
                (0, k.jsx)(be, { rating: t }),
              ],
            }),
          ],
        }),
      (0, k.jsx)($, { strType: n }),
    ],
  });
}
function _e() {
  return (0, k.jsx)(g, {
    direction: `row`,
    justify: `between`,
    className: M,
    children: R.LocalizeReact(
      `#GameRating_ContentClassification`,
      (0, k.jsx)(`span`, {
        className: N,
        children: R.Localize(`#GameRating_Banned`),
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
    return (0, k.jsx)(`div`, {
      className: F,
      children: R.Localize(`#GameRating_AllAges`),
    });
  if (!r) return null;
  let a = ue(t, n);
  return i
    ? (0, k.jsx)(b, {
        href: i,
        onOKActionDescription: a,
        children: (0, k.jsx)(A, { src: r, alt: a }),
      })
    : (0, k.jsx)(A, { src: r, alt: a });
}
function ye(e) {
  let t = (e.rating.rgDescriptorImages ?? [])
    .map((e) => pe(e))
    .filter((e) => e !== void 0);
  return t.length === 0
    ? null
    : (0, k.jsx)(g, {
        direction: `row`,
        wrap: `wrap`,
        align: `start`,
        gap: `1`,
        children: t.map((e, t) =>
          (0, k.jsx)(A, { src: e.strURL, alt: e.strAlt, title: e.strAlt }, t),
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
    : (0, k.jsx)(Q, {
        strTitle: R.Localize(
          i
            ? `#GameRating_InteractiveElements_Title`
            : `#GameRating_ContentCategory_InteractiveElements`,
        ),
        rgElements: a,
      });
}
function xe(e) {
  return (0, k.jsxs)(`div`, {
    className: j,
    children: [
      (0, k.jsx)(`div`, {
        className: M,
        children: R.Localize(`#GameRating_ContentCategories_Title`),
      }),
      (0, k.jsx)(Q, {
        strTitle: R.Localize(`#GameRating_ContentCategory_InteractiveElements`),
        rgElements: e.rgInteractiveElements,
      }),
    ],
  });
}
function Q(e) {
  return (0, k.jsxs)(ee, {
    children: [
      (0, k.jsx)(p, { as: `p`, contrast: `note`, children: e.strTitle }),
      (0, k.jsx)(p, {
        as: `p`,
        contrast: `body`,
        className: P,
        children: e.rgElements.join(R.Localize(`#GameRating_ListDelimiter`)),
      }),
    ],
  });
}
function $(e) {
  let t = le(e.strType);
  return t
    ? (0, k.jsx)(p, {
        contrast: `body`,
        size: `2`,
        className: `Agency`,
        children: R.Localize(`#GameRating_RatingBy`, t),
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
    return `${u.STORE_CDN_URL}${e.image_url}?${e.image_target ? `v=3` : `v=2`}`;
}
function we(e) {
  let {
      id: t,
      eLayout: n = `rightcolumn`,
      bRatingAllowed: r,
      bHideRatingTitle: i,
    } = e,
    o = Te(t, r),
    s = a();
  if ((ne.use(R.Ready()), !o)) return null;
  let c = n === `details`,
    l = s ? `block app_ratings_block` : `block`;
  return (
    c && (l = `game_rating_area details_block`),
    `rating` in o
      ? (0, k.jsxs)(`div`, {
          className: l,
          children: [
            !c &&
              (0, k.jsx)(`div`, {
                className: `responsive_block_header ratings_title`,
                style: i ? { display: `none` } : void 0,
                children: R.Localize(`#GameRating_Ratings_Title`),
              }),
            (0, k.jsx)(ge, { rating: o.rating }),
          ],
        })
      : (0, k.jsx)(`div`, {
          className: l,
          children: (0, k.jsx)(xe, {
            rgInteractiveElements: o.rgInteractiveElements,
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
  let { data: t } = _(e);
  return Z(t?.interactive_elements ?? []);
}
export { we as GameRatingBlock, A as t };
