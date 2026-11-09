import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./useQuery.js";
import { _ } from "./reactqueryroot.js";
import { _, _ } from "./currencyutils.js";
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
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext({
    eConversionMethod: 1,
    setConversionMethod: (_) => {},
    rgAvailableConversionMethods: [],
  });
function _(_) {
  let { eInitialConversionMethod: _ } = _,
    _ = _(),
    [_, _] = _.useState(_ || 1),
    _ = _.useMemo(() => {
      let _ = _ ? _.GetAvailableConversionMethods() : [];
      return {
        eConversionMethod: _,
        setConversionMethod: _,
        rgAvailableConversionMethods: _,
      };
    }, [_, _, _]);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  return _.useContext(_);
}
function _() {
  return _.useContext(_).eConversionMethod;
}
function _() {
  let _ = _(`pricing_guideline`, `application_config`);
  if (_) return Promise.resolve(_);
  {
    let _ = _.getQueryData(_());
    return Promise.resolve(_ ?? null);
  }
}
function _() {
  let _ = _(_());
  return (0, _.useMemo)(() => (_.data ? new _(_.data) : null), [_.data]);
}
function _() {
  return {
    queryKey: _(),
    queryFn: async () => await _(),
  };
}
function _() {
  return [`PricingGuideline`];
}
function _(_) {
  let _ = _(),
    _ = _();
  return {
    fnApplyGuidelines: (0, _.useCallback)(
      (_, _, _) => {
        if (
          (_(
            _,
            `Pricing Guideline Not Initialized by time conversion being triggered`,
          ),
          _)
        ) {
          for (let _ = 1; _ < 48; ++_) {
            let _ = _.GetRecommendPrice(_, _, void 0, _ ?? _)?.price;
            _ && _ > 0 && _(_, _(_), _);
          }
          for (let _ = 1; _ < 5; ++_) {
            let _ = _.GetRecommendPrice(_, 1, _, _ ?? _)?.price;
            _ && _ > 0 && _(_, _(1, _).toUpperCase(), _);
          }
        }
      },
      [_, _, _],
    ),
  };
}
var _ = 1,
  _ = class {
    m_mapUSDPrice = new Map();
    m_mapKeyToGuidePrice = new Map();
    m_rgUSDPricePointInCents = [];
    m_setConversionMethod = new Set();
    m_setSupportedCurrencies = new Set();
    m_setSupportedRegions = new Set();
    m_rtNewestConvertStart = 0;
    GetKey(_, _, _, _ = _) {
      return `${_}_${_}_${_ || 0}_${_}`;
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
    BIsSupportCurrencyAndOrRegion(_, _) {
      return _
        ? _ == 1 && this.m_setSupportedRegions.has(_)
        : this.m_setSupportedCurrencies.has(_);
    }
    GetRecommendPrice(_, _, _, _ = _) {
      let _ = this.GetKey(_, _, _, _);
      return this.m_mapKeyToGuidePrice.get(_);
    }
    GetScaledRecommendedPrice(_, _, _, _ = _) {
      let _ = -1,
        _ = -1;
      for (let _ of this.m_mapUSDPrice.get(_).keys()) {
        let _ = Math.abs(_ - _);
        (_ == -1 || _ < _) && ((_ = _), (_ = _));
      }
      let _ = this.m_mapUSDPrice.get(_).get(_),
        _ = _
          ? _.region_prices.find((_) => _.region_code == _)
          : _.currency_prices.find((_) => _.currency_code == _),
        _ = _ / _;
      return {
        currency_code: _?.currency_code,
        region_code: _?.region_code,
        price: Math.ceil((_?.price || 0) * _),
      };
    }
    GetUSDPricePointsInCents() {
      return this.m_rgUSDPricePointInCents;
    }
    constructor(_) {
      let _ = new Set();
      _.forEach((_) => {
        let _ = _.convert_method ?? _;
        this.m_setConversionMethod.add(_),
          this.m_mapUSDPrice.has(_) || this.m_mapUSDPrice.set(_, new Map()),
          this.m_mapUSDPrice.get(_).set(_.usd_price, _),
          _.add(_.usd_price),
          (this.m_rtNewestConvertStart = Math.max(
            this.m_rtNewestConvertStart,
            _.rtime_convert_start ?? 0,
          )),
          _.currency_prices.forEach((_) => {
            let _ = this.GetKey(
              _.usd_price,
              _.currency_code,
              0,
              _.convert_method || _,
            );
            this.m_mapKeyToGuidePrice.set(_, _),
              this.m_setSupportedCurrencies.add(_.currency_code);
          }),
          _.region_prices.forEach((_) => {
            let _ = this.GetKey(
              _.usd_price,
              _.currency_code,
              _.region_code,
              _.convert_method || _,
            );
            if (
              (this.m_mapKeyToGuidePrice.set(_, _),
              this.m_setSupportedRegions.add(_.region_code),
              this.m_setConversionMethod.has(3))
            ) {
              let _ = {
                  currency_code: 1,
                  price: _.usd_price,
                  region_code: _.region_code,
                },
                _ = this.GetKey(_.usd_price, 1, _.region_code, 3);
              this.m_mapKeyToGuidePrice.set(_, _);
            }
          });
      }),
        (this.m_rgUSDPricePointInCents = Array.from(_.keys()));
    }
  };
export { _, _, _, _, _ };
