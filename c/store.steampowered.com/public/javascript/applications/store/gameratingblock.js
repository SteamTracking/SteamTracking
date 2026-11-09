import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./main.js";
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.descriptors || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            descriptors: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            interactive_elements: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            official_id: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            esrb_online_music_not_rated: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            esrb_online_interactions_not_rated: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            descriptor_images: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `AppRatingAuxData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rating_agency || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rating_agency: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            rating: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            source: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            banned: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            required_age: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            use_age_gate: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            aux_data: {
              _: 7,
              _: _,
            },
            agency_rating: {
              _: 8,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `AppRating`;
    }
  },
  _ = `TirLOrXjWHY-`,
  _ = `_-5gZZ1l2Tv0-`,
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let _ = _(
    {
      ..._,
      className: _.className,
    },
    _,
  );
  return (0, _.jsx)(`img`, {
    ..._,
  });
}
var _ = [
    ..._,
    {
      prop: `objectFit`,
      responsive: !0,
      className: _,
      cssProperty: `--object-fit`,
    },
    {
      prop: `objectPosition`,
      responsive: !0,
      className: _,
      cssProperty: `--object-position`,
    },
  ],
  _ = `ISKtd7ho5yI-`,
  _ = `oa0trKwN3-o-`,
  _ = `jBf4xkdtSI8-`,
  _ = `TBhKaBJLEZo-`,
  _ = `ShrTG-8TFvg-`,
  _ = {};
(_.arabic = () =>
  _(() => import(`./gamerating_arabic.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./gamerating_brazilian.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./gamerating_bulgarian.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./gamerating_czech.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./gamerating_danish.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./gamerating_dutch.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./gamerating_english.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./gamerating_finnish.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./gamerating_french.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./gamerating_german.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./gamerating_greek.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./gamerating_hungarian.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./gamerating_indonesian.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./gamerating_italian.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./gamerating_japanese.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./gamerating_koreana.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./gamerating_latam.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./gamerating_malay.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./gamerating_norwegian.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./gamerating_polish.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./gamerating_portuguese.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./gamerating_romanian.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./gamerating_russian.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./gamerating_sc_schinese.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./gamerating_schinese.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./gamerating_spanish.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./gamerating_swedish.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./gamerating_tchinese.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./gamerating_thai.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./gamerating_turkish.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./gamerating_ukrainian.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./gamerating_vietnamese.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.elanguage || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            elanguage: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            text: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `ContentSurveyLocalizedText`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.customer_notes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            customer_notes: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            customer_notes_ai: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            mature_tags: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            has_mature_content: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            ai_external_service_name: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            ai_external_service_url: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `ContentSurveyDisclosure`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.survey_section || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            survey_section: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_reviewed: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_reviewer: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `SurveySectionReviewed`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_category || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            content_category: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            questionaire_categories: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `GeneratedGameContent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rating_agency || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rating_agency: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            rating: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            required_age: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            descriptors: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            banned: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `GeneratedGameRating`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timestamp_generated || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timestamp_generated: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            generated_version: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ratings: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            content_categories: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `GeneratedGameRatings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.desc_code_generated || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            desc_code_generated: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            desc_copyright_infringement_guarantee: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            desc_content_moderation_strategy: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            external_service_name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            external_service_url: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            desc_external_service_how_content_available_to_players: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            desc_external_service_monetization: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `AIContentSurvey`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.disclosure || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            disclosure: {
              _: 1,
              _: _,
            },
            interactive_elements: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `ContentSurveyAuxData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `ContentDescriptor`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.surveyid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 11, 14, 15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            surveyid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            state: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            descriptors: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            timestamp_started: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_updated: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_finished: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            developer_notes: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            keyvalues: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            ratings: {
              _: 10,
              _: _,
            },
            categories: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            ai_survey: {
              _: 12,
              _: _,
            },
            internal_notes: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            all_ratings: {
              _: 14,
              _: _,
              _: !0,
              _: !0,
            },
            sections_reviewed: {
              _: 15,
              _: _,
              _: !0,
              _: !0,
            },
            disclosure: {
              _: 16,
              _: _,
            },
            inherited_surveyid: {
              _: 17,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            started_from_scratch: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            survey_aux_data: {
              _: 19,
              _: _,
            },
            source: {
              _: 20,
              _: _.readEnum,
              _: _.writeEnum,
            },
            flags: {
              _: 21,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `ContentDescriptorSurvey`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_descriptors: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            include_keyvalues: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_categories: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            include_ai_survey: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            include_all_ratings: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAppContentDescriptors_GetActiveSurvey_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_descriptors: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            include_keyvalues: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_categories: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            include_ai_survey: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            include_all_ratings: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAppContentDescriptors_GetWorkingSurvey_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.surveyid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            surveyid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            survey: {
              _: 2,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAppContentDescriptors_GetSurvey_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`AppContentDescriptor.GetActiveSurvey#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  _.GetActiveSurvey = _;
  function _(_, _, _) {
    return _.SendMsg(`AppContentDescriptor.GetWorkingSurvey#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  _.GetWorkingSurvey = _;
})((_ ||= {}));
var _ = new Map([
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
  _ = `esrb`;
function _(_) {
  return _.get(_) ?? ``;
}
function _(_) {
  return _ ? _.Localize(`#GameRating_Agency_` + _.toUpperCase()) : ``;
}
function _(_, _) {
  return !_ || !_ ? `` : _.Localize(`#GameRating_Rating_` + _ + `_` + _);
}
function _(_) {
  return _.Localize(`#GameRating_RARSText_` + _);
}
var _ = new Map([
  [
    1,
    {
      strFile: `love`,
      strToken: `#GameRating_DescriptorImage_CERO_Love`,
    },
  ],
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
    {
      strFile: `horror`,
      strToken: `#GameRating_DescriptorImage_CERO_Horror`,
    },
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
  [
    7,
    {
      strFile: `crime`,
      strToken: `#GameRating_DescriptorImage_CERO_Crime`,
    },
  ],
  [
    8,
    {
      strFile: `drugs`,
      strToken: `#GameRating_DescriptorImage_CERO_Drugs`,
    },
  ],
  [
    9,
    {
      strFile: `language`,
      strToken: `#GameRating_DescriptorImage_CERO_Language`,
    },
  ],
]);
function _(_) {
  let _ = _.get(_);
  if (_)
    return {
      strURL: `${_.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${_.strFile}.png`,
      strAlt: _.Localize(_.strToken),
    };
}
var _ = new Map([
  [1, `#GameRating_ContentCategoryDescriptor_60`],
  [2, `#GameRating_ContentCategoryDescriptor_61`],
  [4, `#GameRating_ContentCategoryDescriptor_62`],
  [3, `#GameRating_ContentCategoryDescriptor_63`],
]);
function _(_) {
  return _.map((_) => _.get(_))
    .filter((_) => _ !== void 0)
    .map((_) => _.Localize(_));
}
function _(_) {
  let _ = [];
  for (let _ of _) {
    let _ = _.trim();
    _ && !_.includes(_) && _.push(_);
  }
  return _;
}
function _(_) {
  let { rating: _ } = _,
    { strType: _, strRating: _ } = _;
  if (_ === `pending`)
    return (0, _.jsxs)(`div`, {
      className: _(_, `GameRating`),
      children: [
        (0, _.jsx)(_, {
          direction: `row`,
          justify: `between`,
          className: _,
          children: _.Localize(`#GameRating_Pending`),
        }),
        (0, _.jsx)(_, {
          strType: _,
        }),
      ],
    });
  let _ = _ === `crl` ? [_(_)] : _.rgDescriptors,
    _ = _.bOnlineMusicNotRated || _.bOnlineInteractionsNotRated;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `3`,
    className: _,
    children: [
      _ === `dejus`
        ? _.nRequiredAge > 0 &&
          (0, _.jsx)(_, {
            size: `3`,
            contrast: `title`,
            className: _(`_1kmdTIqP7cQ-`, `RequiredAge`),
            children: _.Localize(`#GameRating_Age_DEJUS`, _.nRequiredAge),
          })
        : _.bBanned && (0, _.jsx)(_, {}),
      !_.bBanned &&
        (0, _.jsxs)(_, {
          direction: `row`,
          gap: `3`,
          className: void 0,
          children: [
            (0, _.jsx)(`div`, {
              className: `qmtMFf1NAzU-`,
              children: (0, _.jsx)(_, {
                rating: _,
              }),
            }),
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `2`,
              children: [
                _.length > 0 &&
                  (0, _.jsx)(_, {
                    _: `p`,
                    contrast: `body`,
                    className: `TBhKaBJLEZo-`,
                    children: _.join(`
`),
                  }),
                (0, _.jsx)(_, {
                  rating: _,
                }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      _.bOnlineMusicNotRated &&
                        (0, _.jsx)(_, {
                          _: `p`,
                          contrast: `body`,
                          className: `TBhKaBJLEZo-`,
                          children: _.Localize(`#GameRating_OnlineMusicNotice`),
                        }),
                      _.bOnlineInteractionsNotRated &&
                        (0, _.jsx)(_, {
                          _: `p`,
                          contrast: `body`,
                          className: `TBhKaBJLEZo-`,
                          children: _.Localize(
                            `#GameRating_OnlineInteractionsNotice`,
                          ),
                        }),
                    ],
                  }),
                (0, _.jsx)(_, {
                  rating: _,
                }),
              ],
            }),
          ],
        }),
      (0, _.jsx)(_, {
        strType: _,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    direction: `row`,
    justify: `between`,
    className: _,
    children: _.LocalizeReact(
      `#GameRating_ContentClassification`,
      (0, _.jsx)(`span`, {
        className: _,
        children: _.Localize(`#GameRating_Banned`),
      }),
    ),
  });
}
function _(_) {
  let {
    strType: _,
    strRating: _,
    strImageURL: _,
    strImageTarget: _,
  } = _.rating;
  if (_ === `0`)
    return (0, _.jsx)(`div`, {
      className: _,
      children: _.Localize(`#GameRating_AllAges`),
    });
  if (!_) return null;
  let _ = _(_, _);
  return _
    ? (0, _.jsx)(_, {
        href: _,
        onOKActionDescription: _,
        children: (0, _.jsx)(_, {
          src: _,
          alt: _,
        }),
      })
    : (0, _.jsx)(_, {
        src: _,
        alt: _,
      });
}
function _(_) {
  let _ = (_.rating.rgDescriptorImages ?? [])
    .map((_) => _(_))
    .filter((_) => _ !== void 0);
  return _.length === 0
    ? null
    : (0, _.jsx)(_, {
        direction: `row`,
        wrap: `wrap`,
        align: `start`,
        gap: `1`,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              src: _.strURL,
              alt: _.strAlt,
              title: _.strAlt,
            },
            _,
          ),
        ),
      });
}
function _(_) {
  let {
      strType: _,
      rgRatingInteractiveElements: _,
      rgSurveyInteractiveElements: _,
    } = _.rating,
    _ = _ === _,
    _ = _ ? _ : _;
  return _.length === 0
    ? null
    : (0, _.jsx)(_, {
        strTitle: _.Localize(
          _
            ? `#GameRating_InteractiveElements_Title`
            : `#GameRating_ContentCategory_InteractiveElements`,
        ),
        rgElements: _,
      });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#GameRating_ContentCategories_Title`),
      }),
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#GameRating_ContentCategory_InteractiveElements`),
        rgElements: _.rgInteractiveElements,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        _: `p`,
        contrast: `note`,
        children: _.strTitle,
      }),
      (0, _.jsx)(_, {
        _: `p`,
        contrast: `body`,
        className: _,
        children: _.rgElements.join(_.Localize(`#GameRating_ListDelimiter`)),
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.strType);
  return _
    ? (0, _.jsx)(_, {
        contrast: `body`,
        size: `2`,
        className: `Agency`,
        children: _.Localize(`#GameRating_RatingBy`, _),
      })
    : null;
}
function _(_) {
  return {
    strType: _.type || (_.agency === void 0 ? `` : _(_.agency)),
    strRating: _.rating ?? ``,
    bBanned: !!_.banned,
    nRequiredAge: _.required_age ?? 0,
    rgDescriptors: _.descriptors ?? [],
    rgDescriptorImages: _.descriptor_images ?? [],
    bOnlineMusicNotRated: !!_.esrb_online_music_not_rated,
    bOnlineInteractionsNotRated: !!_.esrb_online_interactions_not_rated,
    rgRatingInteractiveElements: _(
      (_.interactive_elements ?? ``).split(/[\r\n,]+/),
    ),
    rgSurveyInteractiveElements: _(_.survey_interactive_elements ?? []),
    strImageURL: _(_),
    strImageTarget: _.image_target || void 0,
  };
}
function _(_) {
  if (_.image_url)
    return `${_.STORE_CDN_URL}${_.image_url}?${_.image_target ? `v=3` : `v=2`}`;
}
function _(_) {
  let {
      _: _,
      eLayout: _ = `rightcolumn`,
      bRatingAllowed: _,
      bHideRatingTitle: _,
    } = _,
    _ = _(_, _),
    _ = _();
  if ((_.use(_.Ready()), !_)) return null;
  let _ = _ === `details`,
    _ = _ ? `block app_ratings_block` : `block`;
  return (
    _ && (_ = `game_rating_area details_block`),
    `rating` in _
      ? (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !_ &&
              (0, _.jsx)(`div`, {
                className: `responsive_block_header ratings_title`,
                style: _
                  ? {
                      display: `none`,
                    }
                  : void 0,
                children: _.Localize(`#GameRating_Ratings_Title`),
              }),
            (0, _.jsx)(_, {
              rating: _.rating,
            }),
          ],
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            rgInteractiveElements: _.rgInteractiveElements,
          }),
        })
  );
}
function _(_, _) {
  let { data: _, isPending: _ } = _(_ ? _ : void 0),
    _ = _ && _,
    _ = _ && !!_?.rating,
    _ = _(_ || _ ? void 0 : _);
  return _
    ? null
    : _ && _
      ? {
          rating: _(_),
        }
      : _.length === 0
        ? null
        : {
            rgInteractiveElements: _,
          };
}
function _(_) {
  let { data: _ } = _(_);
  return _(_?.interactive_elements ?? []);
}
export { _ as GameRatingBlock, _ };
