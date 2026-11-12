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
} from "./chunk~de7f2df91c.js";
import { _, _, _, _, _, _, _, _, _ } from "./chunk~44f252525d.js";
import { _ } from "./chunk~f8b6a4beb3.js";
import { _ } from "./chunk~8fb30ea08b.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~4406a7b793.js";
function _(_, _) {
  return _.split(_);
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.released_only || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 10, 11, 15, 16, 45], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            released_only: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            coming_soon_only: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            type_filters: {
              _: 3,
              _: _,
            },
            exclude_from: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            predefined_filter: {
              _: 5,
              _: _,
            },
            tagids_must_match: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            tagids_exclude: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            price_filters: {
              _: 12,
              _: _,
            },
            release_date_filter: {
              _: 13,
              _: _,
            },
            discounted_dates_filter: {
              _: 17,
              _: _,
            },
            compatibility_filter: {
              _: 18,
              _: _,
            },
            review_score_filter: {
              _: 19,
              _: _,
            },
            discount_ends_within_hours: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            content_descriptors_must_match: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            content_descriptors_excluded: {
              _: 16,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            regional_top_n_sellers: {
              _: 40,
              _: _.readInt32,
              _: _.writeInt32,
            },
            global_top_n_sellers: {
              _: 41,
              _: _.readInt32,
              _: _.writeInt32,
            },
            regional_long_term_top_n_sellers: {
              _: 42,
              _: _.readInt32,
              _: _.writeInt32,
            },
            global_long_term_top_n_sellers: {
              _: 43,
              _: _.readInt32,
              _: _.writeInt32,
            },
            store_page_filter: {
              _: 44,
              _: _,
            },
            parent_appids: {
              _: 45,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_apps: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_packages: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            include_bundles: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_games: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            include_demos: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            include_mods: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            include_dlc: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            include_software: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            include_video: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            include_hardware: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            include_series: {
              _: 17,
              _: _.readBool,
              _: _.writeBool,
            },
            include_music: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            dlc_for_appid: {
              _: 19,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_TypeFilters`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filter_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filter_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            language_preferences: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PredefinedFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_TagFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.only_free_items || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            only_free_items: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_free_items: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            min_discount_percent: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_PriceFilters`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.release_date_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            release_date_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            start_date: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            end_date: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_ReleaseDateFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start_date || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_date: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_date: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allow_partial_overlap: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_DiscountedDatesFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.device || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            device: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            categories: {
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_CompatibilityFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.min_score || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            min_score: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            allow_unreviewed: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryFilters_ReviewScoreFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start: {
              _: 1,
              _: 0,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 2,
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            sort: {
              _: 10,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            filters: {
              _: 20,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryParams`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
              _: _,
            },
            score: {
              _: 2,
              _: _.readDouble,
              _: _.writeDouble,
            },
            spellcheck_generated_result: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryPerResultMetadata`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.total_matching_records || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            total_matching_records: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            start: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            per_result_metadata: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            spellcheck_suggestions: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQueryResultMetadata`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.query_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            query_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            query: {
              _: 2,
              _: _,
            },
            context: {
              _: 3,
              _: _,
            },
            data_request: {
              _: 4,
              _: _,
            },
            override_country_code: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_Query_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            metadata: {
              _: 1,
              _: _,
            },
            ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            store_items: {
              _: 3,
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_Query_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.query_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            query_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            context: {
              _: 2,
              _: _,
            },
            search_term: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            max_results: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            filters: {
              _: 5,
              _: _,
            },
            data_request: {
              _: 6,
              _: _,
            },
            use_spellcheck: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            search_tags: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            search_creators: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            use_name_match_scoring: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            metadata: {
              _: 1,
              _: _,
            },
            ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            store_items: {
              _: 3,
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_SearchSuggestions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.query_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            query_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
              _: _,
            },
            item_id: {
              _: 4,
              _: _,
            },
            count: {
              _: 5,
              _: 20,
              _: _.readInt32,
              _: _.writeInt32,
            },
            filters: {
              _: 6,
              _: _,
            },
            options: {
              _: 7,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tag_weight || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tag_weight: {
              _: 1,
              _: 90,
              _: _.readFloat,
              _: _.writeFloat,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            metadata: {
              _: 1,
              _: _,
            },
            ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            store_items: {
              _: 3,
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_MoreLikeThis_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filters || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filters: {
              _: 2,
              _: _,
            },
            sections: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            context: {
              _: 5,
              _: _,
            },
            recommended_tags: {
              _: 7,
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sort || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sort: {
              _: 1,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            min_items: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            randomize: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_packages: {
              _: 4,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_bundles: {
              _: 5,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_dlc: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            min_discount_percent: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_Section`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Request_RecommendedTag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sections || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sections: {
              _: 1,
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            store_item_ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            tag_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemsByUserRecommendedTags_Response_Section`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sort || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sort: {
              _: 1,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            max_items: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            randomize: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_packages: {
              _: 4,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_bundles: {
              _: 5,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            filters: {
              _: 6,
              _: _,
            },
            context: {
              _: 7,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            store_item_ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            tag_name: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetItemByUserCombinedTagsPriority_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            context: {
              _: 1,
              _: _,
            },
            flavor: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            store_page_filter: {
              _: 3,
              _: _,
            },
            excluded_content_descriptors: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            start: {
              _: 5,
              _: 0,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 6,
              _: 50,
              _: _.readInt32,
              _: _.writeInt32,
            },
            prioritize_discounts: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_demos: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            request_facet_counts: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            search_term: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ids: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_matching: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            more_results_remaining: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            facet_fields: {
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.value || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            value: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetValue`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.field || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            field: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            values: {
              _: 2,
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreQuery_GetSaleBrowserItems_Response_FacetField`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreQuery.Query#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.Query = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreQuery.SearchSuggestions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.SearchSuggestions = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreQuery.MoreLikeThis#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.MoreLikeThis = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreQuery.GetItemsByUserRecommendedTags#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.GetItemsByUserRecommendedTags = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreQuery.GetItemByUserCombinedTagsPriority#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetItemByUserCombinedTagsPriority = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreQuery.GetSaleBrowserItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetSaleBrowserItems = _;
})((_ ||= {}));
function _(_) {
  if (_.bIncludeUnpublished) return `partner-unpublished`;
  if (_.bUsePartnerAPI) return `partner`;
}
function _(_, _) {
  _.Body().set_context(_(_));
}
function _(_) {
  let _ = new _();
  return (
    _.bUsePartnerAPI || _.set_country_code(_.country),
    _.set_language(_.language),
    _
  );
}
function _(_, _) {
  _.Body().set_data_request(_.fromObject(_));
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.getitems_request || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            getitems_request: {
              _: 1,
              _: _,
            },
            include_unpublished: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ids: {
              _: 1,
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            results: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            no_info: {
              _: 2,
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
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null));
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
              _: _,
            },
            no_restrictions: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            allowed_countries: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            restricted_countries: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
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
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`PartnerStoreBrowse.GetItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `PartnerStoreBrowse.GetCountryRestrictions#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetCountryRestrictions = _;
})((_ ||= {}));
function _(_) {
  return `appid` in _
    ? `app_${_.appid}`
    : `packageid` in _
      ? `package_${_.packageid}`
      : `bundleid` in _
        ? `bundle_${_.bundleid}`
        : `tagid` in _
          ? `tag_${_.tagid}`
          : `creatorid` in _
            ? `creator_${_.creatorid}`
            : `hubcategoryid` in _
              ? `hubcategory_${_.hubcategoryid}`
              : `salepagegid` in _
                ? `salepage_${_.salepagegid}`
                : (_(_, `Unknown store item id type`), ``);
}
function _(_, _) {
  switch (_) {
    case 0:
      return `app_${_}`;
    case 1:
      return `package_${_}`;
    case 2:
      return `bundle_${_}`;
    case 4:
      return `tag_${_}`;
    case 5:
      return `creator_${_}`;
    case 6:
      return `hubcategory_${_}`;
    case 7:
      return `salepage_${_}`;
    case 3:
    case -1:
      return ``;
    default:
      return (_(_, `Unknown EStoreItemType ${_} ${_(_)} `), ``);
  }
}
var _ = /^(app|package|bundle|mtx|tag|creator|hubcategory|salepage)_(\d*)$/;
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case `app`:
        return {
          appid: parseInt(_[2]),
        };
      case `package`:
        return {
          packageid: parseInt(_[2]),
        };
      case `bundle`:
        return {
          bundleid: parseInt(_[2]),
        };
      case `tag`:
        return {
          tagid: parseInt(_[2]),
        };
      case `creator`:
        return {
          creatorid: parseInt(_[2]),
        };
      case `hubcategory`:
        return {
          hubcategoryid: parseInt(_[2]),
        };
      case `salepage`:
        return {
          salepagegid: _[2],
        };
    }
  _(!1, `Failed to parse StoreItemID ${_}`);
}
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case `app`:
        return {
          item_type: 0,
          _: parseInt(_[2]),
        };
      case `package`:
        return {
          item_type: 1,
          _: parseInt(_[2]),
        };
      case `bundle`:
        return {
          item_type: 2,
          _: parseInt(_[2]),
        };
      case `tag`:
        return {
          item_type: 4,
          _: parseInt(_[2]),
        };
      case `creator`:
        return {
          item_type: 5,
          _: parseInt(_[2]),
        };
      case `hubcategory`:
        return {
          item_type: 6,
          _: parseInt(_[2]),
        };
      case `salepage`:
        return {
          item_type: 7,
          _: 0,
          gid: _[2],
        };
    }
  return {
    item_type: -1,
    _: _ ? parseInt(_[2]) : 0,
  };
}
function _(_) {
  if (_) {
    if (`appid` in _)
      return {
        item_type: 0,
        _: _.appid,
      };
    if (`packageid` in _)
      return {
        item_type: 1,
        _: _.packageid,
      };
    if (`bundleid` in _)
      return {
        item_type: 2,
        _: _.bundleid,
      };
    if (`tagid` in _)
      return {
        item_type: 4,
        _: _.tagid,
      };
    if (`creatorid` in _)
      return {
        item_type: 5,
        _: _.creatorid,
      };
    if (`hubcategoryid` in _)
      return {
        item_type: 6,
        _: _.hubcategoryid,
      };
    if (`salepagegid` in _)
      return {
        item_type: 7,
        _: 0,
        gid: _.salepagegid,
      };
    _(_, `Unknown store item id type`);
  }
  return {
    item_type: -1,
    _: 0,
  };
}
function _(_) {
  let _ = _.item_type ?? -1,
    _ = _._ || 0;
  switch (_) {
    case 0:
      return {
        appid: _,
      };
    case 1:
      return {
        packageid: _,
      };
    case 2:
      return {
        bundleid: _,
      };
    case 4:
      return {
        tagid: _,
      };
    case 5:
      return {
        creatorid: _,
      };
    case 6:
      return {
        hubcategoryid: _,
      };
    case 7:
      return _.gid
        ? {
            salepagegid: _.gid,
          }
        : void 0;
    case 3:
    case -1:
      return;
    default:
      _(_, `Unknown EStoreItemType ${_} ${_(_)} `);
      return;
  }
}
var _ = _(_(), 1);
function _(_, _, _, _, _ = !1) {
  _(
    !_.bIncludeUnpublished || !!_.bUsePartnerAPI,
    `bIncludeUnpublished requires bUsePartnerAPI`,
  );
  let _ = new _.default(
    async (_) => {
      let _ = new Set(),
        _ = new Map(),
        _ = new Set();
      _.add(`default_info`);
      let _ = {};
      if (
        (_.forEach((_) => {
          let [_, _ = `default_info`] = _(_, `|`);
          (_.add(_),
            _.has(_) ||
              (_ == `top_tags`
                ? (_.include_tag_count = 20)
                : _ != `default_info` && (_[_] = !0),
              _.add(_)));
          let _ = _.get(_);
          (_ || ((_ = new Set()), _.set(_, _)), _.add(_));
        }),
        _.include_included_items)
      ) {
        let { include_included_items: _, ..._ } = _;
        _.included_item_data_request = _;
      }
      let _ = _.Init(_);
      (_(_, _), _(_, _));
      let _ = [];
      _.forEach((_) => {
        let _ = _(_);
        _ && (_.Body().add_ids(_.fromObject(_)), _.push(_));
      });
      let _;
      if (_.bUsePartnerAPI) {
        let _ = _.Init(_);
        (_.Body().set_getitems_request(_.Body()),
          _.Body().set_include_unpublished(!!_.bIncludeUnpublished),
          (_ = await _.GetItems(_, _)));
      } else _ = await _.GetItems(_, _);
      if (_ && !_.BSuccess())
        throw `Error loading store items: ${_.GetErrorMessage()}`;
      let _ = new Map();
      return (
        _.Body()
          .store_items()
          .forEach((_, _) => {
            let _ = _.item_type(),
              _ = _ === void 0 ? _[_] : _(_, _.gid() ?? _._());
            _ && _.set(_, _);
          }),
        _ && _(_, _, _, _.included_item_data_request, _),
        _.map((_) => {
          let [_] = _(_, `|`),
            _ = _.get(_);
          return _
            ? _.toObject()
            : {
                ..._(_),
                success: 2,
              };
        })
      );
    },
    {
      maxBatchSize: 500,
      cache: !1,
      ..._,
    },
  );
  return ((_.cacheScope = _(_)), _);
}
function _(_, _, _, _, _) {
  _.forEach((_, _) => {
    let _ = _.get(_);
    if ((_(_, `Missing request data for ${_}`), !_)) return;
    let _ = !1,
      _ = {};
    if (
      (_.forEach((_) => {
        _.has(_) ||
          ((_ = !0),
          _ == `top_tags`
            ? (_.include_tag_count = 20)
            : _ && _ != `default_info` && (_[_] = !0));
      }),
      _.include_included_items)
    ) {
      let { include_included_items: _, ..._ } = _;
      _.included_item_data_request = _;
    }
    _ && _(_, _);
    let _ = _.included_items(!1);
    if (_.has(`include_included_items`) && _ && _)
      for (let _ of [
        ..._.included_apps(),
        ..._.included_packages(),
        ..._.included_bundles(),
        ..._.included_creators(),
      ])
        _(_, _);
  });
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  return _(_, _);
}
function _(_) {
  return _(_, _, `include_assets`);
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    _ = _ && `packageid` in _ && !!_.packageid,
    _;
  if (_) {
    let _ = _.getQueryData(_(_, `default_info`, _.cacheScope));
    _ &&
      _.included_appids?.length == 1 &&
      (_ = {
        appid: _.included_appids[0],
      });
  }
  let { data: _ } = _({
    ..._(_, _, _),
    enabled: _ && !_,
  });
  return (
    _ &&
      _.length == 1 &&
      (_ = {
        appid: _[0],
      }),
    _(_(_, _ && _ ? _ : _))
  );
}
function _(_, _, _) {
  let _ = _ && `appid` in _ && !!_.appid;
  return {
    queryKey: _(_, `include_included_items`, _.cacheScope),
    queryFn: async () => (
      _ && _(_, _, _).catch(() => {}),
      (await _(_, _, `include_included_items`)).included_appids ?? []
    ),
    initialData: _ ? [_.appid] : void 0,
    enabled: !_,
  };
}
function _(_, _, _, _) {
  _.setQueryData(_(_, `include_included_items`, _), _.included_appids ?? []);
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_ && `bundleid` in _ ? _(_, _) : _(_, _));
}
function _(_, _ = !1) {
  let _ = _();
  return _(_ ? _(_, _) : _(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return _(_, _, `include_basic_info`, `basic_info`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_basic_info`, `basic_info`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_full_description`, `full_description_bbcode`, _);
}
function _(_, _) {
  return _(_, _, `include_assets`, `assets`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_assets`, `assets`, _);
}
function _(_, _) {
  return _(_, _, `include_screenshots`, `screenshots`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_screenshots`, `screenshots`, _);
}
function _(_, _) {
  return _(_, _, `include_links`, `links`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_links`, `links`, _);
}
function _(_, _) {
  return _(_, _, `include_trailers`, `trailers`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_trailers`, `trailers`, _);
}
function _(_, _) {
  return _(
    _,
    _,
    `include_assets_without_overrides`,
    `assets_without_overrides`,
  );
}
function _(_, _, _, _) {
  _(_, _, _, `include_assets_without_overrides`, `assets_without_overrides`, _);
}
function _(_, _) {
  return _(_, _, `include_reviews`, `reviews`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_reviews`, `reviews`, _);
}
function _(_, _) {
  return _(_, _, `include_release`, `release`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_release`, `release`, _);
}
function _(_, _) {
  return _(_, _, `top_tags`, `tags`);
}
function _(_, _, _, _) {
  _(_, _, _, `top_tags`, `tags`, _);
}
function _(_, _) {
  return _(_, _, `include_platforms`, `platforms`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_platforms`, `platforms`, _);
}
function _(_, _) {
  return _(_, _, `apply_user_filters`, `user_filter_failure`);
}
function _(_, _, _, _) {
  _(_, _, _, `apply_user_filters`, `user_filter_failure`, _);
}
function _(_, _, _, _) {
  _.setQueryData(_(_, `include_all_purchase_options`, _), {
    purchase_options: _.purchase_options,
    package_groups: _.package_groups,
    purchase_notes: _.purchase_notes,
  });
}
function _(_, _, _, _) {
  _(_, _, _, `include_supported_languages`, `supported_languages`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_extra_details`, `extra_details`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_ratings`, `game_rating`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_optin_registration_tags`, `optin_registration_tags`, _);
}
function _(_) {
  return _
    ? `appid` in _ && !_.appid
      ? (_(!1, `Invalid appid passed to useStoreItem`), !1)
      : `bundleid` in _ && !_.bundleid
        ? (_(!1, `Invalid bundleid passed to useStoreItem`), !1)
        : !0
    : !1;
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _.cacheScope),
    queryFn: async () => (await _(_, _, _))[_] || null,
    staleTime: 216e5,
    enabled: _(_),
  };
}
function _(_, _, _, _, _, _) {
  _.setQueryData(_(_, _, _), _[_] ?? null);
}
function _(_, _) {
  return {
    queryKey: _(_, `default_info`, _.cacheScope),
    queryFn: async () => _(await _(_, _, `default_info`)),
    staleTime: 216e5,
    enabled: _(_),
  };
}
function _(_, _) {
  return {
    ..._(_, _),
    select: (_) => _.best_purchase_option || null,
    staleTime: 6e5,
  };
}
function _(_, _) {
  return {
    ..._(_, _),
    select: (_) =>
      _?.purchase_options && _.purchase_options.length > 0
        ? _.purchase_options[0]
        : null,
    staleTime: 6e5,
  };
}
function _(_, _) {
  let _ = `include_all_purchase_options`;
  return {
    queryKey: _(_, _, _.cacheScope),
    queryFn: async () => {
      let _ = await _(_, _, _);
      return {
        purchase_options: _.purchase_options,
        package_groups: _.package_groups,
        purchase_notes: _.purchase_notes,
      };
    },
    staleTime: 6e5,
    enabled: _(_),
  };
}
var _ = `StoreItem`;
function _(_, _, _) {
  let _ = [_, _ && _(_), _];
  return (_ && _.push(_), _);
}
function _(_, _, _, _) {
  let _ = _(_);
  _ &&
    (_(_, _, _, _),
    _.include_basic_info && _(_, _, _, _),
    _.include_assets && _(_, _, _, _),
    _.include_screenshots && _(_, _, _, _),
    _.include_links && _(_, _, _, _),
    _.include_trailers && _(_, _, _, _),
    _.include_assets_without_overrides && _(_, _, _, _),
    _.include_reviews && _(_, _, _, _),
    _.include_release && _(_, _, _, _),
    _.include_tag_count && _.include_tag_count > 0 && _(_, _, _, _),
    _.include_platforms && _(_, _, _, _),
    _.apply_user_filters && _(_, _, _, _),
    _.include_all_purchase_options && _(_, _, _, _),
    _.include_full_description && _(_, _, _, _),
    _.include_supported_languages && _(_, _, _, _),
    _.include_extra_details && _(_, _, _, _),
    _.include_ratings && _(_, _, _, _),
    _.include_optin_registration_tags && _(_, _, _, _),
    _.include_included_items && _(_, _, _, _),
    _.include_included_items &&
      _.included_item_data_request &&
      (_.included_items?.included_apps?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      ),
      _.included_items?.included_packages?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      ),
      _.included_items?.included_bundles?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      ),
      _.included_items?.included_creators?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      )));
}
var _ = [
  `assets`,
  `tagids`,
  `tags`,
  `basic_info`,
  `reviews`,
  `game_rating`,
  `purchase_options`,
  `screenshots`,
  `trailers`,
  `supported_languages`,
  `full_description_bbcode`,
  `assets_without_overrides`,
  `user_filter_failure`,
  `links`,
  `platforms`,
  `release`,
  `package_groups`,
  `purchase_notes`,
  `extra_details`,
  `optin_registration_tags`,
];
function _(_) {
  let _ = {
    ..._,
  };
  for (let _ of _) delete _[_];
  return _;
}
function _(_, _, _, _) {
  _.setQueryData(_(_, `default_info`, _), _(_));
}
async function _(_, _, _) {
  return await _.load(`${_(_)}|${_}`);
}
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext({});
function _() {
  return _.useContext(_).dataLoader;
}
function _() {
  return _.useContext(_).storeBrowseContext;
}
function _() {
  return _.useContext(_);
}
function _(_) {
  let {
      context: _,
      msDelayBatch: _,
      serviceTransportOverride: _,
      legacyCacheStoreItemData: _,
      bRejectOnRequestFailure: _,
      children: _,
    } = _,
    _ = _(),
    _ = _(),
    { country: _, language: _, bUsePartnerAPI: _, bIncludeUnpublished: _ } = _,
    _ = _.useMemo(
      () => ({
        country: _,
        language: _,
        bUsePartnerAPI: _,
        bIncludeUnpublished: _,
      }),
      [_, _, _, _],
    ),
    _ = _(_),
    _ = _.useCallback(
      (_, _) => {
        (_(_, _.toObject(), _, _), _ && _(_, _));
      },
      [_, _, _],
    ),
    _ = _ || _,
    _ = _.useMemo(() => {
      let _ = _ ? _(_) : void 0;
      return _(
        _,
        _,
        {
          cache: !1,
          batchScheduleFn: _,
        },
        _,
        _,
      );
    }, [_, _, _, _, _]),
    _ = _.useMemo(
      () => ({
        dataLoader: _,
        storeBrowseContext: _,
        cacheStoreItemData: _,
      }),
      [_, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let _ = 0;
  return (_) => {
    let _,
      _ = performance.now() - _;
    (_ < _ && (_ = _ - _),
      setTimeout(() => {
        ((_ = performance.now()), _());
      }, _));
  };
}
