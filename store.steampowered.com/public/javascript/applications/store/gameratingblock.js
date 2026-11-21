/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, Pt as n, ft as r } from "./chunk~01cfc309bf.js";
import {
  $b as i,
  Ea as a,
  Ib as o,
  Kv as s,
  Lb as c,
  Nc as l,
  Oa as ee,
  Ta as u,
  Wv as te,
  _a as d,
  dS as f,
  fS as p,
  gS as m,
  hS as h,
  hl as g,
  ja as _,
  kx as v,
  lS as y,
  mS as b,
  nx as x,
  pS as S,
  uS as C,
} from "./main.js";
var w = e(n(), 1),
  T = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptors || y(e.M()),
        w.Message.initialize(this, t, 0, -1, [1, 2, 6], null));
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
              br: p.readString,
              bw: m.writeRepeatedString,
            },
            interactive_elements: {
              n: 2,
              r: !0,
              q: !0,
              br: p.readString,
              bw: m.writeRepeatedString,
            },
            official_id: { n: 3, br: p.readString, bw: m.writeString },
            esrb_online_music_not_rated: {
              n: 4,
              br: p.readBool,
              bw: m.writeBool,
            },
            esrb_online_interactions_not_rated: {
              n: 5,
              br: p.readBool,
              bw: m.writeBool,
            },
            descriptor_images: {
              n: 6,
              r: !0,
              q: !0,
              br: p.readEnum,
              pbr: p.readPackedEnum,
              bw: m.writeRepeatedEnum,
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AppRatingAuxData`;
    }
  },
  ne = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rating_agency || y(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: p.readEnum, bw: m.writeEnum },
            rating: { n: 2, br: p.readString, bw: m.writeString },
            source: { n: 3, br: p.readEnum, bw: m.writeEnum },
            banned: { n: 4, br: p.readBool, bw: m.writeBool },
            required_age: { n: 5, br: p.readUint32, bw: m.writeUint32 },
            use_age_gate: { n: 6, br: p.readBool, bw: m.writeBool },
            aux_data: { n: 7, c: T },
            agency_rating: { n: 8, br: p.readEnum, bw: m.writeEnum },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AppRating`;
    }
  },
  E = `TirLOrXjWHY-`,
  re = `_-5gZZ1l2Tv0-`,
  D = e(t(), 1),
  O = r();
function k(e) {
  let t = _({ ...e, className: e.className }, ie);
  return (0, O.jsx)(`img`, { ...t });
}
var ie = [
    ...ee,
    {
      prop: `objectFit`,
      responsive: !0,
      className: E,
      cssProperty: `--object-fit`,
    },
    {
      prop: `objectPosition`,
      responsive: !0,
      className: re,
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
  o(() => import(`./chunk~04a8fde58d.js`), [], import.meta.url)),
  (F.brazilian = () =>
    o(() => import(`./chunk~1d5790496b.js`), [], import.meta.url)),
  (F.bulgarian = () =>
    o(() => import(`./chunk~60a6416bff.js`), [], import.meta.url)),
  (F.czech = () =>
    o(() => import(`./chunk~397e5aa350.js`), [], import.meta.url)),
  (F.danish = () =>
    o(() => import(`./chunk~3038f2ee3a.js`), [], import.meta.url)),
  (F.dutch = () =>
    o(() => import(`./chunk~051efbfe8a.js`), [], import.meta.url)),
  (F.english = () =>
    o(() => import(`./chunk~90a480260a.js`), [], import.meta.url)),
  (F.finnish = () =>
    o(() => import(`./chunk~8f90f077e1.js`), [], import.meta.url)),
  (F.french = () =>
    o(() => import(`./chunk~8158e9cf52.js`), [], import.meta.url)),
  (F.german = () =>
    o(() => import(`./chunk~c321b5141a.js`), [], import.meta.url)),
  (F.greek = () =>
    o(() => import(`./chunk~9fd324cce6.js`), [], import.meta.url)),
  (F.hungarian = () =>
    o(() => import(`./chunk~1d37c78470.js`), [], import.meta.url)),
  (F.indonesian = () =>
    o(() => import(`./chunk~5eed5fbc7f.js`), [], import.meta.url)),
  (F.italian = () =>
    o(() => import(`./chunk~22aad033e0.js`), [], import.meta.url)),
  (F.japanese = () =>
    o(() => import(`./chunk~bed95db604.js`), [], import.meta.url)),
  (F.koreana = () =>
    o(() => import(`./chunk~75a7ca2a2e.js`), [], import.meta.url)),
  (F.latam = () =>
    o(() => import(`./chunk~fee28b25a6.js`), [], import.meta.url)),
  (F.malay = () =>
    o(() => import(`./chunk~83a784670f.js`), [], import.meta.url)),
  (F.norwegian = () =>
    o(() => import(`./chunk~fd1096cee3.js`), [], import.meta.url)),
  (F.polish = () =>
    o(() => import(`./chunk~6e3b9a672c.js`), [], import.meta.url)),
  (F.portuguese = () =>
    o(() => import(`./chunk~318dae3fe6.js`), [], import.meta.url)),
  (F.romanian = () =>
    o(() => import(`./chunk~0de08257b0.js`), [], import.meta.url)),
  (F.russian = () =>
    o(() => import(`./chunk~fe927517ec.js`), [], import.meta.url)),
  (F.sc_schinese = () =>
    o(() => import(`./chunk~50832146d6.js`), [], import.meta.url)),
  (F.schinese = () =>
    o(() => import(`./chunk~b219f92e58.js`), [], import.meta.url)),
  (F.spanish = () =>
    o(() => import(`./chunk~b33733d5be.js`), [], import.meta.url)),
  (F.swedish = () =>
    o(() => import(`./chunk~cbeab5ab8d.js`), [], import.meta.url)),
  (F.tchinese = () =>
    o(() => import(`./chunk~f7b8df505d.js`), [], import.meta.url)),
  (F.thai = () =>
    o(() => import(`./chunk~6012a5669f.js`), [], import.meta.url)),
  (F.turkish = () =>
    o(() => import(`./chunk~7203a98d7e.js`), [], import.meta.url)),
  (F.ukrainian = () =>
    o(() => import(`./chunk~5f378b6a71.js`), [], import.meta.url)),
  (F.vietnamese = () =>
    o(() => import(`./chunk~5b229078d9.js`), [], import.meta.url)));
async function I(e) {
  if (F[e]) return await F[e]();
}
var L = c(I),
  R = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.elanguage || y(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            elanguage: { n: 1, br: p.readInt32, bw: m.writeInt32 },
            text: { n: 2, br: p.readString, bw: m.writeString },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyLocalizedText`;
    }
  },
  z = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.customer_notes || y(e.M()),
        w.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
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
              br: p.readEnum,
              pbr: p.readPackedEnum,
              bw: m.writeRepeatedEnum,
            },
            has_mature_content: { n: 4, br: p.readBool, bw: m.writeBool },
            ai_external_service_name: {
              n: 5,
              br: p.readString,
              bw: m.writeString,
            },
            ai_external_service_url: {
              n: 6,
              br: p.readString,
              bw: m.writeString,
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyDisclosure`;
    }
  },
  B = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.survey_section || y(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            survey_section: { n: 1, br: p.readEnum, bw: m.writeEnum },
            time_reviewed: { n: 2, br: p.readUint32, bw: m.writeUint32 },
            accountid_reviewer: { n: 3, br: p.readUint32, bw: m.writeUint32 },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SurveySectionReviewed`;
    }
  },
  V = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_category || y(e.M()),
        w.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_category: { n: 1, br: p.readEnum, bw: m.writeEnum },
            questionaire_categories: {
              n: 2,
              r: !0,
              q: !0,
              br: p.readEnum,
              pbr: p.readPackedEnum,
              bw: m.writeRepeatedEnum,
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameContent`;
    }
  },
  H = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rating_agency || y(e.M()),
        w.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rating_agency: { n: 1, br: p.readString, bw: m.writeString },
            rating: { n: 2, br: p.readString, bw: m.writeString },
            required_age: { n: 3, br: p.readUint32, bw: m.writeUint32 },
            descriptors: {
              n: 4,
              r: !0,
              q: !0,
              br: p.readString,
              bw: m.writeRepeatedString,
            },
            banned: { n: 5, br: p.readBool, bw: m.writeBool },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameRating`;
    }
  },
  U = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp_generated || y(e.M()),
        w.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp_generated: { n: 1, br: p.readUint32, bw: m.writeUint32 },
            generated_version: { n: 2, br: p.readUint32, bw: m.writeUint32 },
            ratings: { n: 3, c: H, r: !0, q: !0 },
            content_categories: { n: 4, c: V, r: !0, q: !0 },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GeneratedGameRatings`;
    }
  },
  W = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.desc_code_generated || y(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            desc_code_generated: { n: 1, br: p.readString, bw: m.writeString },
            desc_copyright_infringement_guarantee: {
              n: 2,
              br: p.readString,
              bw: m.writeString,
            },
            desc_content_moderation_strategy: {
              n: 3,
              br: p.readString,
              bw: m.writeString,
            },
            external_service_name: {
              n: 4,
              br: p.readString,
              bw: m.writeString,
            },
            external_service_url: { n: 5, br: p.readString, bw: m.writeString },
            desc_external_service_how_content_available_to_players: {
              n: 6,
              br: p.readString,
              bw: m.writeString,
            },
            desc_external_service_monetization: {
              n: 7,
              br: p.readString,
              bw: m.writeString,
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AIContentSurvey`;
    }
  },
  G = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.disclosure || y(e.M()),
        w.Message.initialize(this, t, 0, -1, [2], null));
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
              br: p.readEnum,
              pbr: p.readPackedEnum,
              bw: m.writeRepeatedEnum,
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentSurveyAuxData`;
    }
  },
  K = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || y(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { id: { n: 1, br: p.readUint32, bw: m.writeUint32 } },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentDescriptor`;
    }
  },
  q = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.surveyid || y(e.M()),
        w.Message.initialize(this, t, 0, -1, [3, 11, 14, 15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: p.readUint64String, bw: m.writeUint64String },
            state: { n: 2, br: p.readEnum, bw: m.writeEnum },
            descriptors: { n: 3, c: K, r: !0, q: !0 },
            timestamp_started: { n: 4, br: p.readUint32, bw: m.writeUint32 },
            timestamp_updated: { n: 5, br: p.readUint32, bw: m.writeUint32 },
            timestamp_finished: { n: 6, br: p.readUint32, bw: m.writeUint32 },
            accountid: { n: 7, br: p.readUint32, bw: m.writeUint32 },
            developer_notes: { n: 8, br: p.readString, bw: m.writeString },
            keyvalues: { n: 9, br: p.readString, bw: m.writeString },
            ratings: { n: 10, c: U },
            categories: {
              n: 11,
              r: !0,
              q: !0,
              br: p.readEnum,
              pbr: p.readPackedEnum,
              bw: m.writeRepeatedEnum,
            },
            ai_survey: { n: 12, c: W },
            internal_notes: { n: 13, br: p.readString, bw: m.writeString },
            all_ratings: { n: 14, c: ne, r: !0, q: !0 },
            sections_reviewed: { n: 15, c: B, r: !0, q: !0 },
            disclosure: { n: 16, c: z },
            inherited_surveyid: {
              n: 17,
              br: p.readUint64String,
              bw: m.writeUint64String,
            },
            started_from_scratch: { n: 18, br: p.readBool, bw: m.writeBool },
            survey_aux_data: { n: 19, c: G },
            source: { n: 20, br: p.readEnum, bw: m.writeEnum },
            flags: { n: 21, br: p.readUint64String, bw: m.writeUint64String },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentDescriptorSurvey`;
    }
  },
  J = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: m.writeUint32 },
            include_descriptors: { n: 2, br: p.readBool, bw: m.writeBool },
            include_keyvalues: { n: 3, br: p.readBool, bw: m.writeBool },
            include_categories: { n: 4, br: p.readBool, bw: m.writeBool },
            include_ai_survey: { n: 5, br: p.readBool, bw: m.writeBool },
            include_all_ratings: { n: 6, br: p.readBool, bw: m.writeBool },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetActiveSurvey_Request`;
    }
  },
  Y = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: m.writeUint32 },
            include_descriptors: { n: 2, br: p.readBool, bw: m.writeBool },
            include_keyvalues: { n: 3, br: p.readBool, bw: m.writeBool },
            include_categories: { n: 4, br: p.readBool, bw: m.writeBool },
            include_ai_survey: { n: 5, br: p.readBool, bw: m.writeBool },
            include_all_ratings: { n: 6, br: p.readBool, bw: m.writeBool },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetWorkingSurvey_Request`;
    }
  },
  X = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.surveyid || y(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            surveyid: { n: 1, br: p.readUint64String, bw: m.writeUint64String },
            survey: { n: 2, c: q },
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
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return f(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppContentDescriptors_GetSurvey_Response`;
    }
  },
  ae;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AppContentDescriptor.GetActiveSurvey#1`, v(J, t, n), X, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetActiveSurvey = t;
  function n(e, t, n) {
    return e.SendMsg(`AppContentDescriptor.GetWorkingSurvey#1`, v(Y, t, n), X, {
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
]);
function se(e) {
  return oe.get(e) ?? ``;
}
function ce(e) {
  return e ? L.Localize(`#GameRating_Agency_` + e.toUpperCase()) : ``;
}
function le(e, t) {
  return !e || !t ? `` : L.Localize(`#GameRating_Rating_` + e + `_` + t);
}
function ue(e) {
  return L.Localize(`#GameRating_RARSText_` + e);
}
var de = new Map([
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
function fe(e) {
  let t = de.get(e);
  if (t)
    return {
      strURL: `${x.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${t.strFile}.png`,
      strAlt: L.Localize(t.strToken),
    };
}
var pe = new Map([
  [1, `#GameRating_ContentCategoryDescriptor_60`],
  [2, `#GameRating_ContentCategoryDescriptor_61`],
  [4, `#GameRating_ContentCategoryDescriptor_62`],
  [3, `#GameRating_ContentCategoryDescriptor_63`],
]);
function Z(e) {
  return e
    .map((e) => pe.get(e))
    .filter((e) => e !== void 0)
    .map((e) => L.Localize(e));
}
function me(e) {
  let t = [];
  for (let n of e) {
    let e = n.trim();
    e && !t.includes(e) && t.push(e);
  }
  return t;
}
function he(e) {
  let { rating: t } = e,
    { eAgency: n, strType: r, strRating: i } = t;
  if (i === `pending`)
    return (0, O.jsxs)(`div`, {
      className: l(A, `GameRating`),
      children: [
        (0, O.jsx)(u, {
          direction: `row`,
          justify: `between`,
          className: j,
          children: L.Localize(`#GameRating_Pending`),
        }),
        (0, O.jsx)($, { strType: r }),
      ],
    });
  let a = n === 14 ? [ue(i)] : t.rgDescriptors,
    o = t.bOnlineMusicNotRated || t.bOnlineInteractionsNotRated;
  return (0, O.jsxs)(u, {
    direction: `column`,
    gap: `3`,
    className: A,
    children: [
      n === 10
        ? t.nRequiredAge > 0 &&
          (0, O.jsx)(d, {
            size: `3`,
            contrast: `title`,
            className: l(`_1kmdTIqP7cQ-`, `RequiredAge`),
            children: L.Localize(`#GameRating_Age_DEJUS`, t.nRequiredAge),
          })
        : t.bBanned && (0, O.jsx)(ge, {}),
      !t.bBanned &&
        (0, O.jsxs)(u, {
          direction: `row`,
          gap: `3`,
          className: void 0,
          children: [
            (0, O.jsx)(`div`, {
              className: `qmtMFf1NAzU-`,
              children: (0, O.jsx)(_e, { rating: t }),
            }),
            (0, O.jsxs)(u, {
              direction: `column`,
              gap: `2`,
              children: [
                a.length > 0 &&
                  (0, O.jsx)(d, {
                    as: `p`,
                    contrast: `body`,
                    className: `TBhKaBJLEZo-`,
                    children: a.join(`
`),
                  }),
                (0, O.jsx)(ve, { rating: t }),
                o &&
                  (0, O.jsxs)(O.Fragment, {
                    children: [
                      t.bOnlineMusicNotRated &&
                        (0, O.jsx)(d, {
                          as: `p`,
                          contrast: `body`,
                          className: `TBhKaBJLEZo-`,
                          children: L.Localize(`#GameRating_OnlineMusicNotice`),
                        }),
                      t.bOnlineInteractionsNotRated &&
                        (0, O.jsx)(d, {
                          as: `p`,
                          contrast: `body`,
                          className: `TBhKaBJLEZo-`,
                          children: L.Localize(
                            `#GameRating_OnlineInteractionsNotice`,
                          ),
                        }),
                    ],
                  }),
                (0, O.jsx)(ye, { rating: t }),
              ],
            }),
          ],
        }),
      (0, O.jsx)($, { strType: r }),
    ],
  });
}
function ge() {
  return (0, O.jsx)(u, {
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
function _e(e) {
  let {
    strType: t,
    strRating: n,
    strImageURL: r,
    strImageTarget: i,
  } = e.rating;
  if (n === `0` && r?.includes(`/default/`))
    return (0, O.jsx)(`div`, {
      className: P,
      children: L.Localize(`#GameRating_AllAges`),
    });
  if (!r) return null;
  let a = le(t, n);
  return i
    ? (0, O.jsx)(g, {
        href: i,
        onOKActionDescription: a,
        children: (0, O.jsx)(k, { src: r, alt: a }),
      })
    : (0, O.jsx)(k, { src: r, alt: a });
}
function ve(e) {
  let t = (e.rating.rgDescriptorImages ?? [])
    .map((e) => fe(e))
    .filter((e) => e !== void 0);
  return t.length === 0
    ? null
    : (0, O.jsx)(u, {
        direction: `row`,
        wrap: `wrap`,
        align: `start`,
        gap: `1`,
        children: t.map((e, t) =>
          (0, O.jsx)(k, { src: e.strURL, alt: e.strAlt, title: e.strAlt }, t),
        ),
      });
}
function ye(e) {
  let {
      eAgency: t,
      rgRatingInteractiveElements: n,
      rgSurveyInteractiveElements: r,
    } = e.rating,
    i = t === 1,
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
function be(e) {
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
  return (0, O.jsxs)(a, {
    children: [
      (0, O.jsx)(d, { as: `p`, contrast: `note`, children: e.strTitle }),
      (0, O.jsx)(d, {
        as: `p`,
        contrast: `body`,
        className: N,
        children: e.rgElements.join(L.Localize(`#GameRating_ListDelimiter`)),
      }),
    ],
  });
}
function $(e) {
  let t = ce(e.strType);
  return t
    ? (0, O.jsx)(d, {
        contrast: `body`,
        size: `2`,
        className: `Agency`,
        children: L.Localize(`#GameRating_RatingBy`, t),
      })
    : null;
}
function xe(e) {
  let t = e.type || (e.agency === void 0 ? `` : se(e.agency));
  return {
    eAgency: e.agency ?? 0,
    strType: t,
    strRating: e.rating ?? ``,
    bBanned: !!e.banned,
    nRequiredAge: e.required_age ?? 0,
    rgDescriptors: e.descriptors ?? [],
    rgDescriptorImages: e.descriptor_images ?? [],
    bOnlineMusicNotRated: !!e.esrb_online_music_not_rated,
    bOnlineInteractionsNotRated: !!e.esrb_online_interactions_not_rated,
    rgRatingInteractiveElements: me(
      (e.interactive_elements ?? ``).split(/[\r\n,]+/),
    ),
    rgSurveyInteractiveElements: Z(e.survey_interactive_elements ?? []),
    strImageURL: Se(e),
    strImageTarget: e.image_target || void 0,
  };
}
function Se(e) {
  if (e.image_url)
    return `${x.STORE_CDN_URL}${e.image_url}?${e.image_target ? `v=3` : `v=2`}`;
}
function Ce(e) {
  let {
      id: t,
      eLayout: n = `rightcolumn`,
      bRatingAllowed: r,
      bHideRatingTitle: a,
    } = e,
    o = we(t, r),
    s = i();
  if ((D.use(L.Ready()), !o)) return null;
  let c = n === `details`,
    l = s ? `block app_ratings_block` : `block`;
  return (
    c && (l = `game_rating_area details_block`),
    `rating` in o
      ? (0, O.jsxs)(`div`, {
          className: l,
          children: [
            !c &&
              (0, O.jsx)(`div`, {
                className: `responsive_block_header ratings_title`,
                style: a ? { display: `none` } : void 0,
                children: L.Localize(`#GameRating_Ratings_Title`),
              }),
            (0, O.jsx)(he, { rating: o.rating }),
          ],
        })
      : (0, O.jsx)(`div`, {
          className: l,
          children: (0, O.jsx)(be, {
            rgInteractiveElements: o.rgInteractiveElements,
          }),
        })
  );
}
function we(e, t) {
  let { data: n, isPending: r } = s(t ? e : void 0),
    i = t && r,
    a = t && !!n?.rating,
    o = Te(i || a ? void 0 : e);
  return i
    ? null
    : a && n
      ? { rating: xe(n) }
      : o.length === 0
        ? null
        : { rgInteractiveElements: o };
}
function Te(e) {
  let { data: t } = te(e);
  return Z(t?.interactive_elements ?? []);
}
export { Ce as GameRatingBlock, k as t };
