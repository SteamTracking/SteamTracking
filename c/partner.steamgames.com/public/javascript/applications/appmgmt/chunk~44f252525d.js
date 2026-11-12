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
  _,
  _,
} from "./chunk~de7f2df91c.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.title || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            title: {
              _: 1,
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
      return `SteamAward_Localization`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            localization: {
              _: 2,
              _: _,
            },
            award_year: {
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
      return `SteamAward`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rtime || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rtime: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            coming_soon_display_type: {
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
      return `CSeasonPassDateAndDisplay`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.milestone_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 5, 9, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            milestone_id: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            title: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            appid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_gid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            dates: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            shipped: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            rtime_complete: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            milestone_desc: {
              _: 9,
              _: _,
              _: !0,
              _: !0,
            },
            image: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            backfilled_release: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            coming_soon_appid: {
              _: 12,
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
      return `CSeasonPassMilestone`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            milestones: {
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
      return `CSeasonPass`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_filter || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_filter: {
              _: 1,
              _: _,
            },
            content_hub_filter: {
              _: 2,
              _: _,
            },
            store_filters: {
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
      return `CStorePageFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            creator_clan_account_id: {
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
      return `CStorePageFilter_SalePageFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hub_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hub_type: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            hub_category: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            hub_tagid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            discount_filter: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            optin: {
              _: 5,
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
      return `CStorePageFilter_ContentHubFilter`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            optin_tagid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            prune_tagid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            optin_only: {
              _: 4,
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
      return `CStorePageFilter_ContentHubFilter_OptInInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filter_json || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filter_json: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            cache_key: {
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
      return `CStorePageFilter_StoreFilter`;
    }
  };
function _(_) {
  return `unknown EStoreItemType ( ` + _ + ` )`;
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 9, 12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            type: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            rating: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            descriptors: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            interactive_elements: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            agency: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            banned: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            esrb_online_music_not_rated: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            esrb_online_interactions_not_rated: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            survey_interactive_elements: {
              _: 9,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            required_age: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            use_age_gate: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            descriptor_images: {
              _: 12,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            content_survey_notes: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            agency_rating: {
              _: 14,
              _: _.readEnum,
              _: _.writeEnum,
            },
            image_url: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            image_target: {
              _: 21,
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
      return `StoreGameRating`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_type || _(_._()),
        _.Message.initialize(
          this,
          _,
          0,
          -1,
          [11, 12, 20, 21, 25, 41, 52, 71, 74, 77, 78],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            _: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gid: {
              _: 76,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            success: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            visible: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            unvailable_for_country_restriction: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            store_url_path: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            store_url_slug: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            appid: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            type: {
              _: 10,
              _: _.readEnum,
              _: _.writeEnum,
            },
            included_types: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            included_appids: {
              _: 12,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            is_free: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            is_early_access: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            related_items: {
              _: 15,
              _: _,
            },
            included_items: {
              _: 16,
              _: _,
            },
            content_descriptorids: {
              _: 20,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            tagids: {
              _: 21,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            categories: {
              _: 22,
              _: _,
            },
            reviews: {
              _: 23,
              _: _,
            },
            basic_info: {
              _: 24,
              _: _,
            },
            tags: {
              _: 25,
              _: _,
              _: !0,
              _: !0,
            },
            assets: {
              _: 30,
              _: _,
            },
            release: {
              _: 31,
              _: _,
            },
            platforms: {
              _: 32,
              _: _,
            },
            game_rating: {
              _: 33,
              _: _,
            },
            is_coming_soon: {
              _: 34,
              _: _.readBool,
              _: _.writeBool,
            },
            best_purchase_option: {
              _: 40,
              _: _,
            },
            purchase_options: {
              _: 41,
              _: _,
              _: !0,
              _: !0,
            },
            self_purchase_option: {
              _: 43,
              _: _,
            },
            screenshots: {
              _: 50,
              _: _,
            },
            trailers: {
              _: 51,
              _: _,
            },
            supported_languages: {
              _: 52,
              _: _,
              _: !0,
              _: !0,
            },
            store_url_path_override: {
              _: 53,
              _: _.readString,
              _: _.writeString,
            },
            free_weekend: {
              _: 54,
              _: _,
            },
            unlisted: {
              _: 55,
              _: _.readBool,
              _: _.writeBool,
            },
            game_count: {
              _: 56,
              _: _.readUint32,
              _: _.writeUint32,
            },
            internal_name: {
              _: 57,
              _: _.readString,
              _: _.writeString,
            },
            full_description_bbcode: {
              _: 58,
              _: _.readString,
              _: _.writeString,
            },
            is_free_temporarily: {
              _: 59,
              _: _.readBool,
              _: _.writeBool,
            },
            assets_without_overrides: {
              _: 60,
              _: _,
            },
            user_filter_failure: {
              _: 70,
              _: _,
            },
            links: {
              _: 71,
              _: _,
              _: !0,
              _: !0,
            },
            purchase_description_bbcode: {
              _: 72,
              _: _.readString,
              _: _.writeString,
            },
            package_groups: {
              _: 74,
              _: _,
              _: !0,
              _: !0,
            },
            extra_details: {
              _: 75,
              _: _,
            },
            optin_registration_tags: {
              _: 77,
              _: _,
              _: !0,
              _: !0,
            },
            purchase_notes: {
              _: 78,
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
      return `StoreItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            label: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            show_above_purchase: {
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
      return `StoreItem_Demo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            is_open: {
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
      return `StoreItem_Playtest`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            header_text: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            description_text: {
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
      return `StoreItem_RelatedF2P`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.parent_appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3, 4, 5, 6, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            parent_appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            demo_appid: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            standalone_demo_appid: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            demos: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            standalone_demos: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            playtests: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            related_f2p: {
              _: 7,
              _: _,
            },
            dlc_parent_appids: {
              _: 9,
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
      return `StoreItem_RelatedItems`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.included_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            included_apps: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            included_packages: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            included_bundles: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            included_creators: {
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
      return `StoreItem_IncludedItems`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.supported_player_categoryids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            supported_player_categoryids: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            feature_categoryids: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            controller_categoryids: {
              _: 4,
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
      return `StoreItem_Categories`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary_filtered || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary_filtered: {
              _: 1,
              _: _,
            },
            summary_unfiltered: {
              _: 2,
              _: _,
            },
            summary_language_specific: {
              _: 3,
              _: _,
            },
            counts_all_purchases: {
              _: 4,
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
      return `StoreItem_Reviews`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.review_count || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            review_count: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            percent_positive: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            review_score: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            review_score_label: {
              _: 4,
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
      return `StoreItem_Reviews_StoreReviewSummary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.short_description || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            short_description: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            publishers: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            developers: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            franchises: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            capsule_headline: {
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
      return `StoreItem_BasicInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            creator_clan_account_id: {
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
      return `StoreItem_BasicInfo_CreatorHomeLink`;
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
            weight: {
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
      return `StoreItem_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.asset_url_format || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            asset_url_format: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            main_capsule: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            main_capsule_2x: {
              _: 18,
              _: _.readString,
              _: _.writeString,
            },
            small_capsule: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            small_capsule_2x: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            header: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            header_2x: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            package_header: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            page_background: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            hero_capsule: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            hero_capsule_2x: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            library_capsule: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            library_capsule_2x: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            library_hero: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            library_hero_2x: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            community_icon: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            clan_avatar: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            page_background_path: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            raw_page_background: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            edition_comparison: {
              _: 17,
              _: _.readString,
              _: _.writeString,
            },
            last_modified: {
              _: 21,
              _: _.readUint32,
              _: _.writeUint32,
            },
            creator_home_background: {
              _: 22,
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
      return `StoreItem_Assets`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steam_release_date || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steam_release_date: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            original_release_date: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            original_steam_release_date: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            release_from_early_access_date: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            release_from_early_access_style: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_coming_soon: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            is_preload: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            custom_release_date_message: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            is_abridged_release_date: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            coming_soon_display: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            is_early_access: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            mac_release_date: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            linux_release_date: {
              _: 21,
              _: _.readUint32,
              _: _.writeUint32,
            },
            limited_launch_active: {
              _: 22,
              _: _.readBool,
              _: _.writeBool,
            },
            advance_access_date: {
              _: 23,
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
      return `StoreItem_ReleaseInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.windows || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            windows: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            mac: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            steamos_linux: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            vr_support: {
              _: 10,
              _: _,
            },
            steam_deck_compat_category: {
              _: 11,
              _: _.readEnum,
              _: _.writeEnum,
            },
            steam_os_compat_category: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            steam_frame_compat_category: {
              _: 13,
              _: _.readEnum,
              _: _.writeEnum,
            },
            steam_machine_compat_category: {
              _: 14,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `StoreItem_Platforms`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.vrhmd || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            vrhmd: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            vrhmd_only: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            show_optional_vr_mode_notice: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            htc_vive: {
              _: 40,
              _: _.readBool,
              _: _.writeBool,
            },
            oculus_rift: {
              _: 41,
              _: _.readBool,
              _: _.writeBool,
            },
            windows_mr: {
              _: 42,
              _: _.readBool,
              _: _.writeBool,
            },
            valve_index: {
              _: 43,
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
      return `StoreItem_Platforms_VRSupport`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [20], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            bundleid: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            purchase_option_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            final_price_in_cents: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            original_price_in_cents: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            formatted_final_price: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            formatted_original_price: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            discount_pct: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            bundle_discount_pct: {
              _: 12,
              _: _.readInt32,
              _: _.writeInt32,
            },
            is_free_to_keep: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            price_before_bundle_discount: {
              _: 14,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            formatted_price_before_bundle_discount: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            active_discounts: {
              _: 20,
              _: _,
              _: !0,
              _: !0,
            },
            user_can_purchase_as_gift: {
              _: 31,
              _: _.readBool,
              _: _.writeBool,
            },
            is_commercial_license: {
              _: 40,
              _: _.readBool,
              _: _.writeBool,
            },
            should_suppress_discount_pct: {
              _: 41,
              _: _.readBool,
              _: _.writeBool,
            },
            hide_discount_pct_for_compliance: {
              _: 42,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            included_game_count: {
              _: 43,
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            lowest_recent_price_in_cents: {
              _: 44,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            requires_shipping: {
              _: 45,
              _: _.readBool,
              _: _.writeBool,
            },
            recurrence_info: {
              _: 46,
              _: _,
            },
            free_to_keep_ends: {
              _: 47,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_purchase_as_set: {
              _: 48,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            package_group: {
              _: 49,
              _: `default`,
              _: _.readString,
              _: _.writeString,
            },
            is_edition: {
              _: 50,
              _: _.readBool,
              _: _.writeBool,
            },
            free_to_keep_base_package: {
              _: 51,
              _: _.readUint32,
              _: _.writeUint32,
            },
            price_cannot_be_displayed_as_discount: {
              _: 52,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            price_to_base_discount_on: {
              _: 53,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            free_with_master_sub_appid: {
              _: 54,
              _: _.readUint32,
              _: _.writeUint32,
            },
            formatted_lowest_recent_price: {
              _: 55,
              _: _.readString,
              _: _.writeString,
            },
            is_free_license: {
              _: 56,
              _: _.readBool,
              _: _.writeBool,
            },
            combined_discount_pct: {
              _: 57,
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
      return `StoreItem_PurchaseOption`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.discount_amount || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            discount_amount: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            discount_description: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            discount_end_date: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            master_sub_appid: {
              _: 4,
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
      return `StoreItem_PurchaseOption_Discount`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            billing_agreement_type: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            renewal_time_unit: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            renewal_time_period: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            renewal_price_in_cents: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            formatted_renewal_price: {
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
      return `StoreItem_PurchaseOption_RecurrenceInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.all_ages_screenshots || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            all_ages_screenshots: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            mature_content_screenshots: {
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
      return `StoreItem_Screenshots`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filename || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filename: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            ordinal: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            alt_text: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            category: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `StoreItem_Screenshots_Screenshot`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.highlights || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            highlights: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            other_trailers: {
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
      return `StoreItem_Trailers`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filename || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filename: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            type: {
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
      return `StoreItem_Trailers_VideoSource`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cdn_path || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cdn_path: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            encoding: {
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
      return `StoreItem_Trailers_AdaptiveTrailer`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.trailer_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            trailer_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            trailer_url_format: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            trailer_category: {
              _: 13,
              _: _.readEnum,
              _: _.writeEnum,
            },
            microtrailer: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            adaptive_trailers: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            captions_manifest: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            screenshot_medium: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            screenshot_full: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            trailer_base_id: {
              _: 12,
              _: _.readInt32,
              _: _.writeInt32,
            },
            all_ages: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            screenshot_small: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            trailer_id: {
              _: 16,
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
      return `StoreItem_Trailers_Trailer`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.elanguage || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
              _: -1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            eadditionallanguage: {
              _: 5,
              _: -1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            supported: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            full_audio: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            subtitles: {
              _: 4,
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
      return `StoreItem_SupportedLanguage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            text: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            appid: {
              _: 4,
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
      return `StoreItem_FreeWeekend`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.link_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            link_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            text: {
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
      return `StoreItem_Link`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            heading: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            display_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            dropdown_title: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            dropdown_description_bbcode: {
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
      return `StoreItem_PackageGroup`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steam_award || _(_._()),
        _.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 10, 13, 15, 18, 31, 36],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steam_award: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            vetted: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            no_mouse_keyboard_support: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            controller_wizard_complete: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            drm_third_party_type: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            drm_activation_limit: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            user_account_third_party: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            user_account_third_party_link_to_steam: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            anticheat: {
              _: 9,
              _: _,
            },
            eula: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            ai_generation_service: {
              _: 11,
              _: _,
            },
            refund_checks_ea_playtime: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            section: {
              _: 13,
              _: _,
              _: !0,
              _: !0,
            },
            legal_notice_bbcode: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            interactive_elements: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            content_survey_notes: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            content_survey_ai_notes: {
              _: 17,
              _: _.readString,
              _: _.writeString,
            },
            press_review: {
              _: 18,
              _: _,
              _: !0,
              _: !0,
            },
            partner_awards_bbcode: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            early_access: {
              _: 20,
              _: _,
            },
            season_pass: {
              _: 21,
              _: _,
            },
            links_and_info: {
              _: 22,
              _: _,
            },
            item_store_eligible: {
              _: 23,
              _: _.readBool,
              _: _.writeBool,
            },
            points_shop_eligible: {
              _: 24,
              _: _.readBool,
              _: _.writeBool,
            },
            metacritic: {
              _: 26,
              _: _,
            },
            cast_and_crew: {
              _: 27,
              _: _,
            },
            system_requirements: {
              _: 28,
              _: _,
            },
            running_time_minutes: {
              _: 29,
              _: _.readUint32,
              _: _.writeUint32,
            },
            episode: {
              _: 30,
              _: _,
            },
            seasons: {
              _: 31,
              _: _,
              _: !0,
              _: !0,
            },
            video_extras_note: {
              _: 32,
              _: _.readEnum,
              _: _.writeEnum,
            },
            has_community_hub: {
              _: 33,
              _: _.readBool,
              _: _.writeBool,
            },
            event_spotlight: {
              _: 34,
              _: _,
            },
            music_album: {
              _: 35,
              _: _,
            },
            sale_pages: {
              _: 36,
              _: _,
              _: !0,
              _: !0,
            },
            item_store_show_featured: {
              _: 37,
              _: _.readBool,
              _: _.writeBool,
            },
            hardware_compatibility: {
              _: 38,
              _: _,
            },
            dlc_for_purchase: {
              _: 39,
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
      return `StoreItem_ExtraDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.kernel_mode || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            kernel_mode: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            uninstall_completely: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            boot_protection: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            boot_protection_name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            name: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            name_loc: {
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
      return `StoreItem_ExtraDetails_Anticheat`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            url: {
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
      return `StoreItem_ExtraDetails_Eula`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            url: {
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
      return `StoreItem_ExtraDetails_AIGeneratedContentService`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.label || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            label: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            content_bbcode: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            banner: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `StoreItem_ExtraDetails_PageSection`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.quote || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            quote: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            score: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            site: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            url: {
              _: 4,
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
      return `StoreItem_ExtraDetails_PressReview`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.why_bbcode || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            why_bbcode: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            how_long_bbcode: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            full_version_bbcode: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            current_state_bbcode: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            pricing_bbcode: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            community_bbcode: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            description_bbcode: {
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
      return `StoreItem_ExtraDetails_EarlyAccess`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.website || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 7, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            website: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            stats_url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            online_manual_url: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            health_warning_url: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            privacy_policy_url: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            available_documents: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            genreids: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            manufacturers: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            achievements_visible: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            achievement_count: {
              _: 10,
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
      return `StoreItem_ExtraDetails_LinksAndInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.score || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            score: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            always_show: {
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
      return `StoreItem_ExtraDetails_Metacritic`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.directors || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            directors: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            producers: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            writers: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            music: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            actors: {
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
      return `StoreItem_ExtraDetails_CastAndCrew`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.platforms || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            platforms: {
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
      return `StoreItem_ExtraDetails_SystemRequirements`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.amount || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            amount: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            units: {
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
      return `StoreItem_ExtraDetails_SystemRequirements_Size`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.os_version || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            os_version: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            os_version_unsupported: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            processor: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            memory: {
              _: 4,
              _: _,
            },
            graphics: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            directx: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            broadband: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            storage: {
              _: 8,
              _: _,
            },
            storage_hq: {
              _: 9,
              _: _,
            },
            sound_card: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            vr_support: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            notes: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            legacy_bbcode: {
              _: 13,
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
      return `StoreItem_ExtraDetails_SystemRequirements_Requirements`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.platform || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            platform: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            minimum: {
              _: 2,
              _: _,
            },
            recommended: {
              _: 3,
              _: _,
            },
            requires_64bit: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            requires_apple_silicon: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            unsupported_os_note: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.number || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            number: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            hide_details: {
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
      return `StoreItem_ExtraDetails_Episode`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.index || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            index: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            episode_appids: {
              _: 3,
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
      return `StoreItem_ExtraDetails_Season`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            announcement_gid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `StoreItem_ExtraDetails_EventSpotlight`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tracks || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tracks: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            artist: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            composer: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            label: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            other_credits: {
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
      return `StoreItem_ExtraDetails_MusicAlbum`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.disc_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            disc_number: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            track_number: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            other_name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            duration_seconds: {
              _: 5,
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
      return `StoreItem_ExtraDetails_MusicAlbum_Track`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `StoreItem_ExtraDetails_SalePage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steam_deck_tests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steam_deck_tests: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            steam_os_tests: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            steam_machine_tests: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            steam_frame_tests: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            steam_deck_blog_url: {
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
      return `StoreItem_ExtraDetails_HardwareCompatibility`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.display_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            display_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            loc_token: {
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
      return `StoreItem_ExtraDetails_HardwareCompatibility_TestResult`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.display_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            display_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            loc_token: {
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
      return `StoreItem_ExtraDetails_HardwareCompatibility_SteamOSTestResult`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.dlc || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            dlc: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            dlc_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            dependencies: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            packageid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            formatted_total_price: {
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
      return `StoreItem_ExtraDetails_DLCForPurchase`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
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
            packageid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            content_descriptorids: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            highlight_reason: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `StoreItem_ExtraDetails_DLCForPurchase_DLC`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            packageid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            required: {
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
      return `StoreItem_ExtraDetails_DLCForPurchase_Dependency`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.optin_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            optin_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            values: {
              _: 2,
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
      return `StoreItem_OptInRegistrationTags`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            highlighted: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            text_bbcode: {
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
      return `StoreItem_PurchaseNote`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_assets || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_assets: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_release: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            include_platforms: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            include_all_purchase_options: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            include_screenshots: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            include_trailers: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            include_ratings: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            include_tag_count: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            include_reviews: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            include_basic_info: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            include_supported_languages: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            include_full_description: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            include_included_items: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            included_item_data_request: {
              _: 14,
              _: _,
            },
            include_assets_without_overrides: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            apply_user_filters: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            include_links: {
              _: 17,
              _: _.readBool,
              _: _.writeBool,
            },
            include_extra_details: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            include_best_purchase_option: {
              _: 19,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            include_optin_registration_tags: {
              _: 20,
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
      return `StoreBrowseItemDataRequest`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            country_code: {
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
      return `StoreBrowseContext`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            packageid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bundleid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            tagid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            creatorid: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            hubcategoryid: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            salepagegid: {
              _: 7,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `StoreItemID`;
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
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
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
      return `CStoreBrowse_GetItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.store_items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            store_items: {
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
      return `CStoreBrowse_GetItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 2,
              _: -1,
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
      return `CStoreBrowse_GetStoreCategories_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.categories || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            categories: {
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
      return `CStoreBrowse_GetStoreCategories_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.categoryid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            categoryid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            internal_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            display_name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            image_url: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            show_in_search: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            computed: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            edit_url: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            edit_sort_order: {
              _: 9,
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
      return `CStoreBrowse_GetStoreCategories_Response_Category`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            excluded_content_descriptorids: {
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
      return `CStoreBrowse_GetContentHubConfig_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hubconfigs || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hubconfigs: {
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
      return `CStoreBrowse_GetContentHubConfig_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hubcategoryid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 7, 8, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hubcategoryid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            type: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            handle: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            display_name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            url_path: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            replaces_tags: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            must_have_tags: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            any_one_of_tags: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            must_not_have_tags: {
              _: 9,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            hub_description: {
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
      return `CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            currency_code: {
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
      return `CStoreBrowse_GetPriceStops_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.price_stops || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            price_stops: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            currency_code: {
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
      return `CStoreBrowse_GetPriceStops_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.formatted_amount || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            formatted_amount: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            amount_in_cents: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CStoreBrowse_GetPriceStops_Response_PriceStop`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
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
            store_page_filter: {
              _: 2,
              _: _,
            },
            appids: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            steamid: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CStoreBrowse_GetDLCForApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.dlc_data || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            dlc_data: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            playtime: {
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
      return `CStoreBrowse_GetDLCForApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            parentappid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            release_date: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            coming_soon: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            price: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            discount: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            free: {
              _: 7,
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
      return `CStoreBrowse_GetDLCForApps_Response_DLCData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            playtime: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_played: {
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
      return `CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            appids: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            flavor: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            store_page_filter: {
              _: 5,
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
      return `CStoreBrowse_GetDLCForAppsSolr_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.dlc_lists || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            dlc_lists: {
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
      return `CStoreBrowse_GetDLCForAppsSolr_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.parent_appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            parent_appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            dlc_appids: {
              _: 2,
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
      return `CStoreBrowse_GetDLCForAppsSolr_Response_DLCList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            context: {
              _: 2,
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
      return `CStoreBrowse_GetHardwareItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            inventory_available: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            high_pending_orders: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            account_restricted_from_purchasing: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            requires_reservation: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            rtime_estimated_notification: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notificaton_token: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            reservation_state: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            expired: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            time_expires: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_reserved: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allow_quantity_purchase: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            max_quantity_per_purchase: {
              _: 14,
              _: _.readInt32,
              _: _.writeInt32,
            },
            allow_purchase_in_country: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            estimated_delivery_soonest_business_days: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            estimated_delivery_latest_business_days: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            not_allowed_to_reserved_because_already_owned: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            appid_ownership_not_allowed_to_reserve: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            account_first_date_purchase_requirement: {
              _: 21,
              _: _.readUint32,
              _: _.writeUint32,
            },
            position_is_waitlist: {
              _: 22,
              _: _.readBool,
              _: _.writeBool,
            },
            user_waitlist_token: {
              _: 23,
              _: _.readString,
              _: _.writeString,
            },
            queue_in_waitlist: {
              _: 24,
              _: _.readBool,
              _: _.writeBool,
            },
            queue_waitlist_token: {
              _: 25,
              _: _.readString,
              _: _.writeString,
            },
            collection_time_active: {
              _: 26,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reservation_not_allowed: {
              _: 27,
              _: _.readBool,
              _: _.writeBool,
            },
            requires_signature: {
              _: 28,
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
      return `CHardwarePackageDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.details || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            details: {
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
      return `CStoreBrowse_GetHardwareItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filter_failure || _(_._()),
        _.Message.initialize(this, _, 0, -1, [21, 30], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filter_failure: {
              _: 1,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            already_owned: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            on_wishlist: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            ignored: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            ignored_creator: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            not_in_users_language: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            not_on_users_platform: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            demo_for_owned_game: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            dlc_for_unowned_game: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            nonpreferred_product_early_access: {
              _: 22,
              _: _.readBool,
              _: _.writeBool,
            },
            nonpreferred_product_prepurchase: {
              _: 23,
              _: _.readBool,
              _: _.writeBool,
            },
            nonpreferred_product_software: {
              _: 24,
              _: _.readBool,
              _: _.writeBool,
            },
            nonpreferred_product_vr: {
              _: 25,
              _: _.readBool,
              _: _.writeBool,
            },
            excluded_tagids: {
              _: 21,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            excluded_content_descriptorids: {
              _: 30,
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
      return `StoreBrowseFilterFailure`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreBrowse.GetItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  _.GetItems = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreBrowse.GetStoreCategories#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetStoreCategories = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreBrowse.GetContentHubConfig#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetContentHubConfig = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreBrowse.GetPriceStops#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetPriceStops = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreBrowse.GetDLCForApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetDLCForApps = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreBrowse.GetDLCForAppsSolr#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetDLCForAppsSolr = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreBrowse.GetHardwareItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetHardwareItems = _;
})((_ ||= {}));
var _ = new Set(
  `sc_schinese.schinese.tchinese.japanese.koreana.thai.arabic.indonesian.malay.bulgarian.czech.danish.german.english.spanish.latam.greek.french.italian.hungarian.dutch.norwegian.polish.portuguese.brazilian.romanian.russian.finnish.swedish.turkish.vietnamese.ukrainian`.split(
    `.`,
  ),
);
function _(_) {
  return _.has(_);
}
var _ = new Map([
    [`en`, `english`],
    [`de`, `german`],
    [`fr`, `french`],
    [`it`, `italian`],
    [`ko`, `koreana`],
    [`es-419`, `latam`],
    [`es`, `spanish`],
    [`zh`, `schinese`],
    [`zh-cn`, `schinese`],
    [`zh-tw`, `tchinese`],
    [`ru`, `russian`],
    [`ar`, `arabic`],
    [`th`, `thai`],
    [`ja`, `japanese`],
    [`pt-br`, `brazilian`],
    [`pt`, `portuguese`],
    [`pl`, `polish`],
    [`da`, `danish`],
    [`nl`, `dutch`],
    [`fi`, `finnish`],
    [`nb`, `norwegian`],
    [`no`, `norwegian`],
    [`sv`, `swedish`],
    [`hu`, `hungarian`],
    [`cs`, `czech`],
    [`ro`, `romanian`],
    [`tr`, `turkish`],
    [`bg`, `bulgarian`],
    [`el`, `greek`],
    [`uk`, `ukrainian`],
    [`vn`, `vietnamese`],
    [`vi`, `vietnamese`],
    [`id`, `indonesian`],
    [`ms`, `malay`],
  ]),
  _ = new Map();
for (let [_, _] of _.entries()) _.set(_, _);
(_.set(`sc_schinese`, _.get(`schinese`)), _.set(`korean`, _.get(`koreana`)));
function _(_) {
  if (_ !== `english`) return _ === `sc_schinese` ? `schinese` : `english`;
}
function _(_) {
  return _ === `arabic`;
}
function _(_, ..._) {
  return (
    _.length == 0 ||
      (_ = _.replace(/%(?:(\d+)\$)?s/g, function (_, _) {
        if (_ <= _.length && _ >= 1) {
          let _ = _[_ - 1];
          return String(_ ?? ``);
        }
        return _;
      })),
    _
  );
}
var _;
_ ??= new Set();
var _ = void 0;
function _() {
  return (_ ??= Promise.all(_));
}
function _(_) {
  ((_ ??= new Set()), _.add(_), (_ = Promise.all(_)));
}
var _ = {
  5: `_Guide`,
  10: `_Hardware`,
  4: `_DLC`,
  11: `_Music`,
  8: `_Series`,
  1: `_Demo`,
};
function _(_, _, _) {
  switch (_) {
    case 6:
      return _ + `_Software`;
    case 7:
      return _ + `_Video`;
  }
  let _ = _[_];
  return _ && _(_ + _) ? _ + _ : _;
}
function _(_) {
  let _ = new Map();
  async function _() {
    await _();
    let _ = _(),
      _ = new Set([]);
    for (let _ of _.languages) {
      _.add(_.strLanguage);
      let _ = _(_.strLanguage);
      _ && _.add(_);
    }
    return Promise.all(
      Array.from(_).map((_) =>
        _(_).then((_) => {
          if (!_) {
            console.error(`Project loc failed to load language ${_}, got ${_}`);
            return;
          }
          let _ = new Map();
          for (let [_, _] of Object.entries(_)) _.set(`#` + _, _);
          _.set(_, _);
        }),
      ),
    );
  }
  let _ = _(),
    _ = !1,
    _ = !1;
  (_.then(() => (_ = !0)).catch((_) => {
    (console.error(`LoadStrings error`, _), (_ = !0));
  }),
    _(_));
  function _(_, _) {
    let [_, ..._] = _,
      _ =
        _.get(_.strLanguage)?.get(_) ??
        _.get(_(_.strLanguage) ?? `english`)?.get(_);
    if (_ !== void 0) return _;
    if (_.length === 0) {
      if (_)
        return (
          console.warn(
            `Couldn't find localization key ${_} after erroring loading strings`,
          ),
          _
        );
      if (!_) throw _;
      return (
        _().ReportError(Error(`Couldn't find localization key ${_}`), {
          bIncludeMessageInIdentifier: !0,
        }),
        console.warn(`Couldn't find localization key ${_}`),
        _
      );
    }
    return _(_, _);
  }
  function _(_, ..._) {
    let _ = _().languages;
    return _(_(_, _), ..._);
  }
  function _(_) {
    let _ = _().languages,
      _ = [..._.map((_) => _.strLanguage), _(_[0].strLanguage)];
    for (let _ of _) {
      if (!_) continue;
      let _ = _.get(_);
      if (_ && _.has(_)) return !0;
    }
    return !1;
  }
  return {
    Localize(_, ..._) {
      return _(_, ..._);
    },
    LocalizeReact(_, ..._) {
      let _ = this.Localize(_);
      if (_ === _) return _;
      let _ = [],
        _ = /(.*?)%(\d+)\$s/g,
        _ = 0,
        _;
      for (; (_ = _.exec(_));) {
        ((_ += _[0].length), _.push(_[1]));
        let _ = parseInt(_[2]);
        _ >= 1 && _ <= _.length && _.push(_[_ - 1]);
      }
      return (_.push(_.slice(_)), _.createElement(_.Fragment, null, ..._));
    },
    LocalizePlural(_, _, ..._) {
      return _(_ === 1 || _ === `1` ? _ : _ + `_Plural`, _, ..._);
    },
    GetAppTypeLocKey(_, _) {
      return _(_, _, _);
    },
    GetAppTypePluralLocKey(_, _) {
      switch (_) {
        case 6:
          return _ + `_Software`;
        case 7:
          return _ + `_Video`;
        default:
          return _;
      }
    },
    LocalizeInSpecificLang(_, _, ..._) {
      return _(_(_, [_]), ..._);
    },
    Ready() {
      return _;
    },
    IsReady() {
      return _;
    },
    HasKey: _,
  };
}
function _() {
  if (!_(_.LANGUAGE)) throw `unknown language ${_.LANGUAGE}`;
  return {
    languages: [
      {
        strLanguage: _.LANGUAGE,
        strISOCode: _.get(_.LANGUAGE),
        eSource: 5,
      },
    ],
  };
}
if (!_.useState)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!_)
  throw Error(
    `mobx-react-lite@3 requires mobx at least version 6 to be available`,
  );
var _ = _(_());
function _(_) {
  _();
}
function _(_) {
  ((_ ||= _),
    _({
      reactionScheduler: _,
    }));
}
function _(_) {
  return _(_);
}
var _ = !1;
function _() {
  return _;
}
var _ = 1e4,
  _ = 1e4,
  _ = (function () {
    function _(_) {
      var _ = this;
      (Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (_) {
            (_ === void 0 && (_ = _),
              clearTimeout(_.sweepTimeout),
              (_.sweepTimeout = void 0));
            var _ = Date.now();
            (_.registrations.forEach(function (_, _) {
              _ - _.registeredAt >= _ &&
                (_.finalize(_.value), _.registrations.delete(_));
            }),
              _.registrations.size > 0 && _.scheduleSweep());
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            _.sweep(0);
          },
        }));
    }
    return (
      Object.defineProperty(_.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_, _, _) {
          (this.registrations.set(_, {
            value: _,
            registeredAt: Date.now(),
          }),
            this.scheduleSweep());
        },
      }),
      Object.defineProperty(_.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          this.registrations.delete(_);
        },
      }),
      Object.defineProperty(_.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, _));
        },
      }),
      _
    );
  })(),
  _ = new (typeof FinalizationRegistry < `u` ? FinalizationRegistry : _)(
    function (_) {
      var _;
      ((_ = _.reaction) == null || _.dispose(), (_.reaction = null));
    },
  ),
  _ = _((_) => {
    var _ = _();
    function _(_, _) {
      return (_ === _ && (_ !== 0 || 1 / _ == 1 / _)) || (_ !== _ && _ !== _);
    }
    var _ = typeof Object._ == `function` ? Object._ : _,
      _ = _.useState,
      _ = _.useEffect,
      _ = _.useLayoutEffect,
      _ = _.useDebugValue;
    function _(_, _) {
      var _ = _(),
        _ = _({
          inst: {
            value: _,
            getSnapshot: _,
          },
        }),
        _ = _[0].inst,
        _ = _[1];
      return (
        _(
          function () {
            ((_.value = _),
              (_.getSnapshot = _),
              _(_) &&
                _({
                  inst: _,
                }));
          },
          [_, _, _],
        ),
        _(
          function () {
            return (
              _(_) &&
                _({
                  inst: _,
                }),
              _(function () {
                _(_) &&
                  _({
                    inst: _,
                  });
              })
            );
          },
          [_],
        ),
        _(_),
        _
      );
    }
    function _(_) {
      var _ = _.getSnapshot;
      _ = _.value;
      try {
        var _ = _();
        return !_(_, _);
      } catch {
        return !0;
      }
    }
    function _(_, _) {
      return _();
    }
    var _ =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? _
        : _;
    _.useSyncExternalStore =
      _.useSyncExternalStore === void 0 ? _ : _.useSyncExternalStore;
  }),
  _ = _((_, _) => {
    _.exports = _();
  }),
  _ = _(),
  _ = function () {};
function _(_) {
  _.reaction = new _(`observer${_.name}`, function () {
    var _;
    ((_.stateVersion = Symbol()), (_ = _.onStoreChange) == null || _.call(_));
  });
}
function _(_, _) {
  if ((_ === void 0 && (_ = `observed`), _())) return _();
  var _ = _.useRef(null);
  if (!_.current) {
    var _ = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: _,
      subscribe: function (_) {
        return (
          _.unregister(_),
          (_.onStoreChange = _),
          _.reaction || (_(_), (_.stateVersion = Symbol())),
          function () {
            var _;
            ((_.onStoreChange = null),
              (_ = _.reaction) == null || _.dispose(),
              (_.reaction = null));
          }
        );
      },
      getSnapshot: function () {
        return _.stateVersion;
      },
    };
    _.current = _;
  }
  var _ = _.current;
  (_.reaction || (_(_), _.register(_, _, _)),
    _.useDebugValue(_.reaction, _),
    (0, _.useSyncExternalStore)(_.subscribe, _.getSnapshot, _));
  var _, _;
  if (
    (_.reaction.track(function () {
      try {
        _ = _();
      } catch (_) {
        _ = _;
      }
    }),
    _)
  )
    throw _;
  return _;
}
var _ = typeof Symbol == `function` && Symbol.for,
  _ = _
    ? Symbol.for(`react.forward_ref`)
    : typeof _.forwardRef == `function` &&
      (0, _.forwardRef)(function (_) {
        return null;
      }).$$typeof,
  _ = _
    ? Symbol.for(`react.memo`)
    : typeof _.memo == `function` &&
      (0, _.memo)(function (_) {
        return null;
      }).$$typeof;
function _(_, _) {
  if (_ && _.$$typeof === _)
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (_()) return _;
  var _ = _?.forwardRef ?? !1,
    _ = _,
    _ = _.displayName || _.name;
  if (
    _ &&
    _.$$typeof === _ &&
    ((_ = !0), (_ = _.render), typeof _ != `function`)
  )
    throw Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var _ = function (_, _) {
    return _(function () {
      return _(_, _);
    }, _);
  };
  return (
    (_.displayName = _.displayName),
    Object.defineProperty(_, "name", {
      value: _.name,
      writable: !0,
      configurable: !0,
    }),
    _.contextTypes && (_.contextTypes = _.contextTypes),
    _ && (_ = (0, _.forwardRef)(_)),
    (_ = (0, _.memo)(_)),
    _(_, _),
    _
  );
}
var _ = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  displayName: !0,
};
function _(_, _) {
  Object.keys(_).forEach(function (_) {
    _[_] || Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
  });
}
(_(_.unstable_batchedUpdates), _.finalizeAllImmediately);
function _(_, _) {
  return (_ === void 0 && (_ = `observed`), _(_, _));
}
function _(_, _) {
  if (_(_, _)) return !0;
  if (typeof _ != `object` || !_ || typeof _ != `object` || !_) return !1;
  var _ = Object.keys(_),
    _ = Object.keys(_);
  if (_.length !== _.length) return !1;
  for (var _ = 0; _ < _.length; _++)
    if (!Object.hasOwnProperty.call(_, _[_]) || !_(_[_[_]], _[_[_]])) return !1;
  return !0;
}
function _(_, _) {
  return _ === _ ? _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
}
var _ = Symbol(`patchMixins`),
  _ = Symbol(`patchedDefinition`);
function _(_, _) {
  var _ = (_[_] = _[_] || {}),
    _ = (_[_] = _[_] || {});
  return ((_.locks = _.locks || 0), (_.methods = _.methods || []), _);
}
function _(_, _) {
  var _ = this,
    _ = [...arguments].slice(2);
  _.locks++;
  try {
    var _;
    return (_ != null && (_ = _.apply(this, _)), _);
  } finally {
    (_.locks--,
      _.locks === 0 &&
        _.methods.forEach(function (_) {
          _.apply(_, _);
        }));
  }
}
function _(_, _) {
  return function () {
    var _ = [...arguments];
    _.call.apply(_, [this, _, _].concat(_));
  };
}
function _(_, _, _) {
  var _ = _(_, _);
  _.methods.indexOf(_) < 0 && _.methods.push(_);
  var _ = Object.getOwnPropertyDescriptor(_, _);
  if (!(_ && _[_])) {
    var _ = _[_],
      _ = _(_, _, _ ? _.enumerable : void 0, _, _);
    Object.defineProperty(_, _, _);
  }
}
function _(_, _, _, _, _) {
  var _,
    _ = _(_, _);
  return (
    (_ = {}),
    (_[_] = !0),
    (_.get = function () {
      return _;
    }),
    (_.set = function (_) {
      if (this === _) _ = _(_, _);
      else {
        var _ = _(this, _, _, _, _);
        Object.defineProperty(this, _, _);
      }
    }),
    (_.configurable = !0),
    (_.enumerable = _),
    _
  );
}
var _ = Symbol(`ObserverAdministration`),
  _ = Symbol(`isMobXReactObserver`);
function _(_) {
  return (
    _[_] ??
    (_[_] = {
      reaction: null,
      mounted: !1,
      reactionInvalidatedBeforeMount: !1,
      forceUpdate: null,
      name: _(_.constructor),
      state: void 0,
      props: void 0,
      context: void 0,
    })
  );
}
function _(_) {
  var _ = _.prototype;
  if (_[_]) {
    var _ = _(_);
    throw Error(
      `The provided component class (` +
        _ +
        `) has already been declared as an observer component.`,
    );
  }
  if (((_[_] = !0), _.componentWillReact))
    throw Error(
      `The componentWillReact life-cycle event is no longer supported`,
    );
  if (_.__proto__ !== _.PureComponent) {
    if (!_.shouldComponentUpdate) _.shouldComponentUpdate = _;
    else if (_.shouldComponentUpdate !== _)
      throw Error(
        `It is not allowed to use shouldComponentUpdate in observer based components.`,
      );
  }
  var _ = _.render;
  if (typeof _ != `function`) {
    var _ = _(_);
    throw Error(
      `[mobx-react] class component (` +
        _ +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  _.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: _() ? _ : _.call(this, _),
      }),
      this.render()
    );
  };
  var _ = _.componentDidMount;
  return (
    (_.componentDidMount = function () {
      var _ = this,
        _ = _(this);
      return (
        (_.mounted = !0),
        _.unregister(this),
        (_.forceUpdate = function () {
          return _.forceUpdate();
        }),
        (!_.reaction || _.reactionInvalidatedBeforeMount) && _.forceUpdate(),
        _?.apply(this, arguments)
      );
    }),
    _(_, `componentWillUnmount`, function () {
      var _;
      if (!_()) {
        var _ = _(this);
        ((_ = _.reaction) == null || _.dispose(),
          (_.reaction = null),
          (_.forceUpdate = null),
          (_.mounted = !1),
          (_.reactionInvalidatedBeforeMount = !1));
      }
    }),
    _
  );
}
function _(_) {
  return _.displayName || _.name || `<component>`;
}
function _(_) {
  var _ = _.bind(this),
    _ = _(this);
  function _() {
    _.reaction || ((_.reaction = _(_)), _.mounted || _.register(this, _, this));
    var _ = void 0,
      _ = void 0;
    if (
      (_.reaction.track(function () {
        try {
          _ = _(!1, _);
        } catch (_) {
          _ = _;
        }
      }),
      _)
    )
      throw _;
    return _;
  }
  return _;
}
function _(_) {
  return new _(_.name + `.render()`, function () {
    if (!_.mounted) _.reactionInvalidatedBeforeMount = !0;
    else
      try {
        _.forceUpdate == null || _.forceUpdate();
      } catch {
        var _;
        ((_ = _.reaction) == null || _.dispose(), (_.reaction = null));
      }
  });
}
function _(_, _) {
  return (
    _() &&
      console.warn(
        `[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.`,
      ),
    this.state !== _ || !_(this.props, _)
  );
}
function _(_, _) {
  if (_ && _.kind !== `class`)
    throw Error(`The @observer decorator can be used on classes only`);
  return (
    _.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, _) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, _)
      ? _(_)
      : _(_)
  );
}
if ((`19.1.1`.split(`.`)[0], !_.Component))
  throw Error(`mobx-react requires React to be available`);
if (!_) throw Error(`mobx-react requires mobx to be available`);
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_, _) {
  return (
    (_ = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (_, _) {
          return ((_.__proto__ = _), _);
        }),
    _(_, _)
  );
}
function _(_, _) {
  ((_.prototype = Object.create(_.prototype)),
    (_.prototype.constructor = _),
    _(_, _));
}
var _ = _((_, _) => {
    _.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
  }),
  _ = _((_, _) => {
    var _ = _();
    function _() {}
    function _() {}
    ((_.resetWarningCache = _),
      (_.exports = function () {
        function _(_, _, _, _, _, _) {
          if (_ !== _) {
            var _ = Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
            );
            throw ((_.name = `Invariant Violation`), _);
          }
        }
        _.isRequired = _;
        function _() {
          return _;
        }
        var _ = {
          array: _,
          bigint: _,
          bool: _,
          func: _,
          number: _,
          object: _,
          string: _,
          symbol: _,
          any: _,
          arrayOf: _,
          element: _,
          elementType: _,
          instanceOf: _,
          node: _,
          objectOf: _,
          oneOf: _,
          oneOfType: _,
          shape: _,
          exact: _,
          checkPropTypes: _,
          resetWarningCache: _,
        };
        return ((_.PropTypes = _), _);
      }));
  }),
  _ = _((_, _) => {
    _.exports = _()();
  }),
  _ = _(_());
function _(_) {
  return _.charAt(0) === `/`;
}
function _(_, _) {
  for (var _ = _, _ = _ + 1, _ = _.length; _ < _; _ += 1, _ += 1) _[_] = _[_];
  _.pop();
}
function _(_, _) {
  _ === void 0 && (_ = ``);
  var _ = (_ && _.split(`/`)) || [],
    _ = (_ && _.split(`/`)) || [],
    _ = _ && _(_),
    _ = _ && _(_),
    _ = _ || _;
  if (
    (_ && _(_) ? (_ = _) : _.length && (_.pop(), (_ = _.concat(_))), !_.length)
  )
    return `/`;
  var _;
  if (_.length) {
    var _ = _[_.length - 1];
    _ = _ === `.` || _ === `..` || _ === ``;
  } else _ = !1;
  for (var _ = 0, _ = _.length; _ >= 0; _--) {
    var _ = _[_];
    _ === `.` ? _(_, _) : _ === `..` ? (_(_, _), _++) : _ && (_(_, _), _--);
  }
  if (!_) for (; _--;) _.unshift(`..`);
  !_ || _[0] === `` || (_[0] && _(_[0])) || _.unshift(``);
  var _ = _.join(`/`);
  return (_ && _.substr(-1) !== `/` && (_ += `/`), _);
}
function _(_) {
  return _.valueOf ? _.valueOf() : Object.prototype.valueOf.call(_);
}
function _(_, _) {
  if (_ === _) return !0;
  if (_ == null || _ == null) return !1;
  if (Array.isArray(_))
    return (
      Array.isArray(_) &&
      _.length === _.length &&
      _.every(function (_, _) {
        return _(_, _[_]);
      })
    );
  if (typeof _ == `object` || typeof _ == `object`) {
    var _ = _(_),
      _ = _(_);
    return _ !== _ || _ !== _
      ? _(_, _)
      : Object.keys(Object.assign({}, _, _)).every(function (_) {
          return _(_[_], _[_]);
        });
  }
  return !1;
}
var _ = `Invariant failed`;
function _(_, _) {
  if (!_) throw Error(_);
}
function _(_) {
  return _.charAt(0) === `/` ? _ : `/` + _;
}
function _(_) {
  return _.charAt(0) === `/` ? _.substr(1) : _;
}
function _(_, _) {
  return (
    _.toLowerCase().indexOf(_.toLowerCase()) === 0 &&
    `/?#`.indexOf(_.charAt(_.length)) !== -1
  );
}
function _(_, _) {
  return _(_, _) ? _.substr(_.length) : _;
}
function _(_) {
  return _.charAt(_.length - 1) === `/` ? _.slice(0, -1) : _;
}
function _(_) {
  var _ = _ || `/`,
    _ = ``,
    _ = ``,
    _ = _.indexOf(`#`);
  _ !== -1 && ((_ = _.substr(_)), (_ = _.substr(0, _)));
  var _ = _.indexOf(`?`);
  return (
    _ !== -1 && ((_ = _.substr(_)), (_ = _.substr(0, _))),
    {
      pathname: _,
      search: _ === `?` ? `` : _,
      hash: _ === `#` ? `` : _,
    }
  );
}
function _(_) {
  var _ = _.pathname,
    _ = _.search,
    _ = _.hash,
    _ = _ || `/`;
  return (
    _ && _ !== `?` && (_ += _.charAt(0) === `?` ? _ : `?` + _),
    _ && _ !== `#` && (_ += _.charAt(0) === `#` ? _ : `#` + _),
    _
  );
}
function _(_, _, _, _) {
  var _;
  typeof _ == `string`
    ? ((_ = _(_)), (_.state = _))
    : ((_ = _({}, _)),
      _.pathname === void 0 && (_.pathname = ``),
      _.search
        ? _.search.charAt(0) !== `?` && (_.search = `?` + _.search)
        : (_.search = ``),
      _.hash
        ? _.hash.charAt(0) !== `#` && (_.hash = `#` + _.hash)
        : (_.hash = ``),
      _ !== void 0 && _.state === void 0 && (_.state = _));
  try {
    _.pathname = decodeURI(_.pathname);
  } catch (_) {
    throw _ instanceof URIError
      ? URIError(
          `Pathname "` +
            _.pathname +
            `" could not be decoded. This is likely caused by an invalid percent-encoding.`,
        )
      : _;
  }
  return (
    _ && (_.key = _),
    _
      ? _.pathname
        ? _.pathname.charAt(0) !== `/` &&
          (_.pathname = _(_.pathname, _.pathname))
        : (_.pathname = _.pathname)
      : _.pathname || (_.pathname = `/`),
    _
  );
}
function _(_, _) {
  return (
    _.pathname === _.pathname &&
    _.search === _.search &&
    _.hash === _.hash &&
    _.key === _.key &&
    _(_.state, _.state)
  );
}
function _() {
  var _ = null;
  function _(_) {
    return (
      (_ = _),
      function () {
        _ === _ && (_ = null);
      }
    );
  }
  function _(_, _, _, _) {
    if (_ != null) {
      var _ = typeof _ == `function` ? _(_, _) : _;
      typeof _ == `string`
        ? typeof _ == `function`
          ? _(_, _)
          : _(!0)
        : _(_ !== !1);
    } else _(!0);
  }
  var _ = [];
  function _(_) {
    var _ = !0;
    function _() {
      _ && _.apply(void 0, arguments);
    }
    return (
      _.push(_),
      function () {
        ((_ = !1),
          (_ = _.filter(function (_) {
            return _ !== _;
          })));
      }
    );
  }
  function _() {
    var _ = [...arguments];
    _.forEach(function (_) {
      return _.apply(void 0, _);
    });
  }
  return {
    setPrompt: _,
    confirmTransitionTo: _,
    appendListener: _,
    notifyListeners: _,
  };
}
var _ = !!(
  typeof window < `u` &&
  window.document &&
  window.document.createElement
);
function _(_, _) {
  _(window.confirm(_));
}
function _() {
  var _ = window.navigator.userAgent;
  return (_.indexOf(`Android 2.`) !== -1 || _.indexOf(`Android 4.0`) !== -1) &&
    _.indexOf(`Mobile Safari`) !== -1 &&
    _.indexOf(`Chrome`) === -1 &&
    _.indexOf(`Windows Phone`) === -1
    ? !1
    : window.history && `pushState` in window.history;
}
function _() {
  return window.navigator.userAgent.indexOf(`Trident`) === -1;
}
function _() {
  return window.navigator.userAgent.indexOf(`Firefox`) === -1;
}
function _(_) {
  return _.state === void 0 && navigator.userAgent.indexOf(`CriOS`) === -1;
}
var _ = `popstate`,
  _ = `hashchange`;
function _() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function _(_) {
  (_ === void 0 && (_ = {}), !_ && _(!1));
  var _ = window.history,
    _ = _(),
    _ = !_(),
    _ = _,
    _ = _.forceRefresh,
    _ = _ !== void 0 && _,
    _ = _.getUserConfirmation,
    _ = _ === void 0 ? _ : _,
    _ = _.keyLength,
    _ = _ === void 0 ? 6 : _,
    _ = _.basename ? _(_(_.basename)) : ``;
  function _(_) {
    var _ = _ || {},
      _ = _.key,
      _ = _.state,
      _ = window.location,
      _ = _.pathname,
      _ = _.search,
      _ = _.hash,
      _ = _ + _ + _;
    return (_ && (_ = _(_, _)), _(_, _, _));
  }
  function _() {
    return Math.random().toString(36).substr(2, _);
  }
  var _ = _();
  function _(_) {
    (_(_, _), (_.length = _.length), _.notifyListeners(_.location, _.action));
  }
  function _(_) {
    _(_) || _(_(_.state));
  }
  function _() {
    _(_(_()));
  }
  var _ = !1;
  function _(_) {
    if (_) ((_ = !1), _());
    else {
      var _ = `POP`;
      _.confirmTransitionTo(_, _, _, function (_) {
        _
          ? _({
              action: _,
              location: _,
            })
          : _(_);
      });
    }
  }
  function _(_) {
    var _ = _.location,
      _ = _.indexOf(_.key);
    _ === -1 && (_ = 0);
    var _ = _.indexOf(_.key);
    _ === -1 && (_ = 0);
    var _ = _ - _;
    _ && ((_ = !0), _(_));
  }
  var _ = _(_()),
    _ = [_.key];
  function _(_) {
    return _ + _(_);
  }
  function _(_, _) {
    var _ = `PUSH`,
      _ = _(_, _, _(), _.location);
    _.confirmTransitionTo(_, _, _, function (_) {
      if (_) {
        var _ = _(_),
          _ = _.key,
          _ = _.state;
        if (_) {
          if (
            (_.pushState(
              {
                key: _,
                state: _,
              },
              null,
              _,
            ),
            _)
          )
            window.location.href = _;
          else {
            var _ = _.indexOf(_.location.key),
              _ = _.slice(0, _ + 1);
            (_.push(_.key),
              (_ = _),
              _({
                action: _,
                location: _,
              }));
          }
        } else window.location.href = _;
      }
    });
  }
  function _(_, _) {
    var _ = `REPLACE`,
      _ = _(_, _, _(), _.location);
    _.confirmTransitionTo(_, _, _, function (_) {
      if (_) {
        var _ = _(_),
          _ = _.key,
          _ = _.state;
        if (_) {
          if (
            (_.replaceState(
              {
                key: _,
                state: _,
              },
              null,
              _,
            ),
            _)
          )
            window.location.replace(_);
          else {
            var _ = _.indexOf(_.location.key);
            (_ !== -1 && (_[_] = _.key),
              _({
                action: _,
                location: _,
              }));
          }
        } else window.location.replace(_);
      }
    });
  }
  function _(_) {
    _._(_);
  }
  function _() {
    _(-1);
  }
  function _() {
    _(1);
  }
  var _ = 0;
  function _(_) {
    ((_ += _),
      _ === 1 && _ === 1
        ? (window.addEventListener(_, _), _ && window.addEventListener(_, _))
        : _ === 0 &&
          (window.removeEventListener(_, _),
          _ && window.removeEventListener(_, _)));
  }
  var _ = !1;
  function _(_) {
    _ === void 0 && (_ = !1);
    var _ = _.setPrompt(_);
    return (
      (_ ||= (_(1), !0)),
      function () {
        return (_ && ((_ = !1), _(-1)), _());
      }
    );
  }
  function _(_) {
    var _ = _.appendListener(_);
    return (
      _(1),
      function () {
        (_(-1), _());
      }
    );
  }
  var _ = {
    length: _.length,
    action: `POP`,
    location: _,
    createHref: _,
    push: _,
    replace: _,
    _: _,
    goBack: _,
    goForward: _,
    block: _,
    listen: _,
  };
  return _;
}
var _ = `hashchange`,
  _ = {
    hashbang: {
      encodePath: function (_) {
        return _.charAt(0) === `!` ? _ : `!/` + _(_);
      },
      decodePath: function (_) {
        return _.charAt(0) === `!` ? _.substr(1) : _;
      },
    },
    noslash: {
      encodePath: _,
      decodePath: _,
    },
    slash: {
      encodePath: _,
      decodePath: _,
    },
  };
function _(_) {
  var _ = _.indexOf(`#`);
  return _ === -1 ? _ : _.slice(0, _);
}
function _() {
  var _ = window.location.href,
    _ = _.indexOf(`#`);
  return _ === -1 ? `` : _.substring(_ + 1);
}
function _(_) {
  window.location.hash = _;
}
function _(_) {
  window.location.replace(_(window.location.href) + `#` + _);
}
function _(_) {
  (_ === void 0 && (_ = {}), !_ && _(!1));
  var _ = window.history;
  _();
  var _ = _,
    _ = _.getUserConfirmation,
    _ = _ === void 0 ? _ : _,
    _ = _.hashType,
    _ = _ === void 0 ? `slash` : _,
    _ = _.basename ? _(_(_.basename)) : ``,
    _ = _[_],
    _ = _.encodePath,
    _ = _.decodePath;
  function _() {
    var _ = _(_());
    return (_ && (_ = _(_, _)), _(_));
  }
  var _ = _();
  function _(_) {
    (_(_, _), (_.length = _.length), _.notifyListeners(_.location, _.action));
  }
  var _ = !1,
    _ = null;
  function _(_, _) {
    return (
      _.pathname === _.pathname && _.search === _.search && _.hash === _.hash
    );
  }
  function _() {
    var _ = _(),
      _ = _(_);
    if (_ !== _) _(_);
    else {
      var _ = _(),
        _ = _.location;
      if ((!_ && _(_, _)) || _ === _(_)) return;
      ((_ = null), _(_));
    }
  }
  function _(_) {
    if (_) ((_ = !1), _());
    else {
      var _ = `POP`;
      _.confirmTransitionTo(_, _, _, function (_) {
        _
          ? _({
              action: _,
              location: _,
            })
          : _(_);
      });
    }
  }
  function _(_) {
    var _ = _.location,
      _ = _.lastIndexOf(_(_));
    _ === -1 && (_ = 0);
    var _ = _.lastIndexOf(_(_));
    _ === -1 && (_ = 0);
    var _ = _ - _;
    _ && ((_ = !0), _(_));
  }
  var _ = _(),
    _ = _(_);
  _ !== _ && _(_);
  var _ = _(),
    _ = [_(_)];
  function _(_) {
    var _ = document.querySelector(`base`),
      _ = ``;
    return (
      _ && _.getAttribute(`href`) && (_ = _(window.location.href)),
      _ + `#` + _(_ + _(_))
    );
  }
  function _(_, _) {
    var _ = `PUSH`,
      _ = _(_, void 0, void 0, _.location);
    _.confirmTransitionTo(_, _, _, function (_) {
      if (_) {
        var _ = _(_),
          _ = _(_ + _);
        if (_() !== _) {
          ((_ = _), _(_));
          var _ = _.lastIndexOf(_(_.location)),
            _ = _.slice(0, _ + 1);
          (_.push(_),
            (_ = _),
            _({
              action: _,
              location: _,
            }));
        } else _();
      }
    });
  }
  function _(_, _) {
    var _ = `REPLACE`,
      _ = _(_, void 0, void 0, _.location);
    _.confirmTransitionTo(_, _, _, function (_) {
      if (_) {
        var _ = _(_),
          _ = _(_ + _);
        _() !== _ && ((_ = _), _(_));
        var _ = _.indexOf(_(_.location));
        (_ !== -1 && (_[_] = _),
          _({
            action: _,
            location: _,
          }));
      }
    });
  }
  function _(_) {
    _._(_);
  }
  function _() {
    _(-1);
  }
  function _() {
    _(1);
  }
  var _ = 0;
  function _(_) {
    ((_ += _),
      _ === 1 && _ === 1
        ? window.addEventListener(_, _)
        : _ === 0 && window.removeEventListener(_, _));
  }
  var _ = !1;
  function _(_) {
    _ === void 0 && (_ = !1);
    var _ = _.setPrompt(_);
    return (
      (_ ||= (_(1), !0)),
      function () {
        return (_ && ((_ = !1), _(-1)), _());
      }
    );
  }
  function _(_) {
    var _ = _.appendListener(_);
    return (
      _(1),
      function () {
        (_(-1), _());
      }
    );
  }
  var _ = {
    length: _.length,
    action: `POP`,
    location: _,
    createHref: _,
    push: _,
    replace: _,
    _: _,
    goBack: _,
    goForward: _,
    block: _,
    listen: _,
  };
  return _;
}
var _ = _((_, _) => {
    _.exports =
      Array.isArray ||
      function (_) {
        return Object.prototype.toString.call(_) == `[object Array]`;
      };
  }),
  _ = _((_, _) => {
    var _ = _();
    ((_.exports = _),
      (_.exports.parse = _),
      (_.exports.compile = _),
      (_.exports.tokensToFunction = _),
      (_.exports.tokensToRegExp = _));
    var _ = RegExp(
      `(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))`,
      `g`,
    );
    function _(_, _) {
      for (
        var _ = [], _ = 0, _ = 0, _ = ``, _ = (_ && _.delimiter) || `/`, _;
        (_ = _.exec(_)) != null;
      ) {
        var _ = _[0],
          _ = _[1],
          _ = _.index;
        if (((_ += _.slice(_, _)), (_ = _ + _.length), _)) _ += _[1];
        else {
          var _ = _[_],
            _ = _[2],
            _ = _[3],
            _ = _[4],
            _ = _[5],
            _ = _[6],
            _ = _[7];
          _ &&= (_.push(_), ``);
          var _ = _ != null && _ != null && _ !== _,
            _ = _ === `+` || _ === `*`,
            _ = _ === `?` || _ === `*`,
            _ = _ || _,
            _ = _ || _,
            _ =
              _ || (typeof _[_.length - 1] == `string` ? _[_.length - 1] : ``);
          _.push({
            name: _ || _++,
            prefix: _ || ``,
            delimiter: _,
            optional: _,
            repeat: _,
            partial: _,
            asterisk: !!_,
            pattern: _ ? _(_) : _ ? `.*` : _(_, _),
          });
        }
      }
      return (_ < _.length && (_ += _.substr(_)), _ && _.push(_), _);
    }
    function _(_, _) {
      return !_ || _.indexOf(_) > -1
        ? `[^` + _(_) + `]+?`
        : _(_) + `|(?:(?!` + _(_) + `)[^` + _(_) + `])+?`;
    }
    function _(_, _) {
      return _(_(_, _), _);
    }
    function _(_) {
      return encodeURI(_).replace(/[\/?#]/g, function (_) {
        return `%` + _.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function _(_) {
      return encodeURI(_).replace(/[?#]/g, function (_) {
        return `%` + _.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function _(_, _) {
      for (var _ = Array(_.length), _ = 0; _ < _.length; _++)
        typeof _[_] == `object` &&
          (_[_] = RegExp(`^(?:` + _[_].pattern + `)$`, _(_)));
      return function (_, _) {
        for (
          var _ = ``,
            _ = _ || {},
            _ = (_ || {}).pretty ? _ : encodeURIComponent,
            _ = 0;
          _ < _.length;
          _++
        ) {
          var _ = _[_];
          if (typeof _ == `string`) _ += _;
          else {
            var _ = _[_.name],
              _;
            if (_ == null) {
              if (_.optional) {
                _.partial && (_ += _.prefix);
                continue;
              }
              throw TypeError(`Expected "` + _.name + `" to be defined`);
            }
            if (_(_)) {
              if (!_.repeat)
                throw TypeError(
                  `Expected "` +
                    _.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(_) +
                    "`",
                );
              if (_.length === 0) {
                if (_.optional) continue;
                throw TypeError(`Expected "` + _.name + `" to not be empty`);
              }
              for (var _ = 0; _ < _.length; _++) {
                if (((_ = _(_[_])), !_[_].test(_)))
                  throw TypeError(
                    `Expected all "` +
                      _.name +
                      `" to match "` +
                      _.pattern +
                      '", but received `' +
                      JSON.stringify(_) +
                      "`",
                  );
                _ += (_ === 0 ? _.prefix : _.delimiter) + _;
              }
            } else {
              if (((_ = _.asterisk ? _(_) : _(_)), !_[_].test(_)))
                throw TypeError(
                  `Expected "` +
                    _.name +
                    `" to match "` +
                    _.pattern +
                    `", but received "` +
                    _ +
                    `"`,
                );
              _ += _.prefix + _;
            }
          }
        }
        return _;
      };
    }
    function _(_) {
      return _.replace(/([.+*?=^!:${}()[\]|\/\\])/g, `\\$1`);
    }
    function _(_) {
      return _.replace(/([=!:$\/()])/g, `\\$1`);
    }
    function _(_, _) {
      return ((_.keys = _), _);
    }
    function _(_) {
      return _ && _.sensitive ? `` : `i`;
    }
    function _(_, _) {
      var _ = _.source.match(/\((?!\?)/g);
      if (_)
        for (var _ = 0; _ < _.length; _++)
          _.push({
            name: _,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            partial: !1,
            asterisk: !1,
            pattern: null,
          });
      return _(_, _);
    }
    function _(_, _, _) {
      for (var _ = [], _ = 0; _ < _.length; _++) _.push(_(_[_], _, _).source);
      return _(RegExp(`(?:` + _.join(`|`) + `)`, _(_)), _);
    }
    function _(_, _, _) {
      return _(_(_, _), _, _);
    }
    function _(_, _, _) {
      (_(_) || ((_ = _ || _), (_ = [])), (_ ||= {}));
      for (
        var _ = _.strict, _ = _.end !== !1, _ = ``, _ = 0;
        _ < _.length;
        _++
      ) {
        var _ = _[_];
        if (typeof _ == `string`) _ += _(_);
        else {
          var _ = _(_.prefix),
            _ = `(?:` + _.pattern + `)`;
          (_.push(_),
            _.repeat && (_ += `(?:` + _ + _ + `)*`),
            (_ = _.optional
              ? _.partial
                ? _ + `(` + _ + `)?`
                : `(?:` + _ + `(` + _ + `))?`
              : _ + `(` + _ + `)`),
            (_ += _));
        }
      }
      var _ = _(_.delimiter || `/`),
        _ = _.slice(-_.length) === _;
      return (
        _ || (_ = (_ ? _.slice(0, -_.length) : _) + `(?:` + _ + `(?=$))?`),
        (_ += _ ? `$` : _ && _ ? `` : `(?=` + _ + `|$)`),
        _(RegExp(`^` + _, _(_)), _)
      );
    }
    function _(_, _, _) {
      return (
        _(_) || ((_ = _ || _), (_ = [])),
        (_ ||= {}),
        _ instanceof RegExp ? _(_, _) : _(_) ? _(_, _, _) : _(_, _, _)
      );
    }
  }),
  _ = _((_) => {
    typeof Symbol == `function` && Symbol.for;
  }),
  _ = _((_, _) => {
    _.exports = _();
  }),
  _ = _((_) => {
    var _ = typeof Symbol == `function` && Symbol.for,
      _ = _ ? Symbol.for(`react.element`) : 60103,
      _ = _ ? Symbol.for(`react.portal`) : 60106,
      _ = _ ? Symbol.for(`react.fragment`) : 60107,
      _ = _ ? Symbol.for(`react.strict_mode`) : 60108,
      _ = _ ? Symbol.for(`react.profiler`) : 60114,
      _ = _ ? Symbol.for(`react.provider`) : 60109,
      _ = _ ? Symbol.for(`react.context`) : 60110,
      _ = _ ? Symbol.for(`react.async_mode`) : 60111,
      _ = _ ? Symbol.for(`react.concurrent_mode`) : 60111,
      _ = _ ? Symbol.for(`react.forward_ref`) : 60112,
      _ = _ ? Symbol.for(`react.suspense`) : 60113,
      _ = _ ? Symbol.for(`react.suspense_list`) : 60120,
      _ = _ ? Symbol.for(`react.memo`) : 60115,
      _ = _ ? Symbol.for(`react.lazy`) : 60116,
      _ = _ ? Symbol.for(`react.block`) : 60121,
      _ = _ ? Symbol.for(`react.fundamental`) : 60117,
      _ = _ ? Symbol.for(`react.responder`) : 60118,
      _ = _ ? Symbol.for(`react.scope`) : 60119;
    function _(_) {
      if (typeof _ == `object` && _) {
        var _ = _.$$typeof;
        switch (_) {
          case _:
            switch (((_ = _.type), _)) {
              case _:
              case _:
              case _:
              case _:
              case _:
              case _:
                return _;
              default:
                switch (((_ &&= _.$$typeof), _)) {
                  case _:
                  case _:
                  case _:
                  case _:
                  case _:
                    return _;
                  default:
                    return _;
                }
            }
          case _:
            return _;
        }
      }
    }
    function _(_) {
      return _(_) === _;
    }
    ((_.AsyncMode = _),
      (_.ConcurrentMode = _),
      (_.ContextConsumer = _),
      (_.ContextProvider = _),
      (_.Element = _),
      (_.ForwardRef = _),
      (_.Fragment = _),
      (_.Lazy = _),
      (_.Memo = _),
      (_.Portal = _),
      (_.Profiler = _),
      (_.StrictMode = _),
      (_.Suspense = _),
      (_.isAsyncMode = function (_) {
        return _(_) || _(_) === _;
      }),
      (_.isConcurrentMode = _),
      (_.isContextConsumer = function (_) {
        return _(_) === _;
      }),
      (_.isContextProvider = function (_) {
        return _(_) === _;
      }),
      (_.isElement = function (_) {
        return typeof _ == `object` && !!_ && _.$$typeof === _;
      }),
      (_.isForwardRef = function (_) {
        return _(_) === _;
      }),
      (_.isFragment = function (_) {
        return _(_) === _;
      }),
      (_.isLazy = function (_) {
        return _(_) === _;
      }),
      (_.isMemo = function (_) {
        return _(_) === _;
      }),
      (_.isPortal = function (_) {
        return _(_) === _;
      }),
      (_.isProfiler = function (_) {
        return _(_) === _;
      }),
      (_.isStrictMode = function (_) {
        return _(_) === _;
      }),
      (_.isSuspense = function (_) {
        return _(_) === _;
      }),
      (_.isValidElementType = function (_) {
        return (
          typeof _ == `string` ||
          typeof _ == `function` ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          (typeof _ == `object` &&
            !!_ &&
            (_.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _))
        );
      }),
      (_.typeOf = _));
  }),
  _ = _((_, _) => {
    _.exports = _();
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      _ = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      _ = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      _ = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      _ = {};
    ((_[_.ForwardRef] = _), (_[_.Memo] = _));
    function _(_) {
      return _.isMemo(_) ? _ : _[_.$$typeof] || _;
    }
    var _ = Object.defineProperty,
      _ = Object.getOwnPropertyNames,
      _ = Object.getOwnPropertySymbols,
      _ = Object.getOwnPropertyDescriptor,
      _ = Object.getPrototypeOf,
      _ = Object.prototype;
    function _(_, _, _) {
      if (typeof _ != `string`) {
        if (_) {
          var _ = _(_);
          _ && _ !== _ && _(_, _, _);
        }
        var _ = _(_);
        _ && (_ = _.concat(_(_)));
        for (var _ = _(_), _ = _(_), _ = 0; _ < _.length; ++_) {
          var _ = _[_];
          if (!_[_] && !(_ && _[_]) && !(_ && _[_]) && !(_ && _[_])) {
            var _ = _(_, _);
            try {
              _(_, _, _);
            } catch {}
          }
        }
      }
      return _;
    }
    _.exports = _;
  }),
  _ = _(_());
_();
var _ = _(_()),
  _ = 1073741823,
  _ =
    typeof globalThis < `u`
      ? globalThis
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
function _() {
  var _ = `__global_unique_id__`;
  return (_[_] = (_[_] || 0) + 1);
}
function _(_, _) {
  return _ === _ ? _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
}
function _(_) {
  var _ = [];
  return {
    _: function (_) {
      _.push(_);
    },
    off: function (_) {
      _ = _.filter(function (_) {
        return _ !== _;
      });
    },
    get: function () {
      return _;
    },
    set: function (_, _) {
      ((_ = _),
        _.forEach(function (_) {
          return _(_, _);
        }));
    },
  };
}
function _(_) {
  return Array.isArray(_) ? _[0] : _;
}
function _(_, _) {
  var _,
    _,
    _ = `__create-react-context-` + _() + `__`,
    _ = (function (_) {
      _(_, _);
      function _() {
        var _,
          _ = [...arguments];
        return (
          (_ = _.call.apply(_, [this].concat(_)) || this),
          (_.emitter = _(_.props.value)),
          _
        );
      }
      var _ = _.prototype;
      return (
        (_.getChildContext = function () {
          var _ = {};
          return ((_[_] = this.emitter), _);
        }),
        (_.componentWillReceiveProps = function (_) {
          if (this.props.value !== _.value) {
            var _ = this.props.value,
              _ = _.value,
              _;
            _(_, _)
              ? (_ = 0)
              : ((_ = typeof _ == `function` ? _(_, _) : _),
                (_ |= 0),
                _ !== 0 && this.emitter.set(_.value, _));
          }
        }),
        (_.render = function () {
          return this.props.children;
        }),
        _
      );
    })(_.Component);
  _.childContextTypes = ((_ = {}), (_[_] = _.default.object.isRequired), _);
  var _ = (function (_) {
    _(_, _);
    function _() {
      var _,
        _ = [...arguments];
      return (
        (_ = _.call.apply(_, [this].concat(_)) || this),
        (_.observedBits = void 0),
        (_.state = {
          value: _.getValue(),
        }),
        (_.onUpdate = function (_, _) {
          (_.observedBits | 0) & _ &&
            _.setState({
              value: _.getValue(),
            });
        }),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.componentWillReceiveProps = function (_) {
        var _ = _.observedBits;
        this.observedBits = _ ?? _;
      }),
      (_.componentDidMount = function () {
        this.context[_] && this.context[_]._(this.onUpdate);
        var _ = this.props.observedBits;
        this.observedBits = _ ?? _;
      }),
      (_.componentWillUnmount = function () {
        this.context[_] && this.context[_].off(this.onUpdate);
      }),
      (_.getValue = function () {
        return this.context[_] ? this.context[_].get() : _;
      }),
      (_.render = function () {
        return _(this.props.children)(this.state.value);
      }),
      _
    );
  })(_.Component);
  return (
    (_.contextTypes = ((_ = {}), (_[_] = _.default.object), _)),
    {
      Provider: _,
      Consumer: _,
    }
  );
}
var _ = _.createContext || _,
  _ = function (_) {
    var _ = _();
    return ((_.displayName = _), _);
  },
  _ = _(`Router-History`),
  _ = _(`Router`),
  _ = (function (_) {
    (_(_, _),
      (_.computeRootMatch = function (_) {
        return {
          path: `/`,
          url: `/`,
          params: {},
          isExact: _ === `/`,
        };
      }));
    function _(_) {
      var _ = _.call(this, _) || this;
      return (
        (_.state = {
          location: _.history.location,
        }),
        (_._isMounted = !1),
        (_._pendingLocation = null),
        _.staticContext ||
          (_.unlisten = _.history.listen(function (_) {
            _._pendingLocation = _;
          })),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.componentDidMount = function () {
        var _ = this;
        ((this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (_) {
              _._isMounted &&
                _.setState({
                  location: _,
                });
            })),
          this._pendingLocation &&
            this.setState({
              location: this._pendingLocation,
            }));
      }),
      (_.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (_.render = function () {
        return _.createElement(
          _.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: _.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          _.createElement(_.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          }),
        );
      }),
      _
    );
  })(_.Component);
_.Component;
var _ = (function (_) {
  _(_, _);
  function _() {
    return _.apply(this, arguments) || this;
  }
  var _ = _.prototype;
  return (
    (_.componentDidMount = function () {
      this.props.onMount && this.props.onMount.call(this, this);
    }),
    (_.componentDidUpdate = function (_) {
      this.props.onUpdate && this.props.onUpdate.call(this, this, _);
    }),
    (_.componentWillUnmount = function () {
      this.props.onUnmount && this.props.onUnmount.call(this, this);
    }),
    (_.render = function () {
      return null;
    }),
    _
  );
})(_.Component);
function _(_) {
  var _ = _.message,
    _ = _.when,
    _ = _ === void 0 || _;
  return _.createElement(_.Consumer, null, function (_) {
    if ((!_ && _(!1), !_ || _.staticContext)) return null;
    var _ = _.history.block;
    return _.createElement(_, {
      onMount: function (_) {
        _.release = _(_);
      },
      onUpdate: function (_, _) {
        _.message !== _ && (_.release(), (_.release = _(_)));
      },
      onUnmount: function (_) {
        _.release();
      },
      message: _,
    });
  });
}
var _ = {},
  _ = 1e4,
  _ = 0;
function _(_) {
  if (_[_]) return _[_];
  var _ = _.default.compile(_);
  return (_ < _ && ((_[_] = _), _++), _);
}
function _(_, _) {
  return (
    _ === void 0 && (_ = `/`),
    _ === void 0 && (_ = {}),
    _ === `/`
      ? _
      : _(_)(_, {
          pretty: !0,
        })
  );
}
function _(_) {
  var _ = _.computedMatch,
    _ = _._,
    _ = _.push,
    _ = _ !== void 0 && _;
  return _.createElement(_.Consumer, null, function (_) {
    !_ && _(!1);
    var _ = _.history,
      _ = _.staticContext,
      _ = _ ? _.push : _.replace,
      _ = _(
        _
          ? typeof _ == `string`
            ? _(_, _.params)
            : _({}, _, {
                pathname: _(_.pathname, _.params),
              })
          : _,
      );
    return _
      ? (_(_), null)
      : _.createElement(_, {
          onMount: function () {
            _(_);
          },
          onUpdate: function (_, _) {
            var _ = _(_._);
            _(
              _,
              _({}, _, {
                key: _.key,
              }),
            ) || _(_);
          },
          _: _,
        });
  });
}
var _ = {},
  _ = 1e4,
  _ = 0;
function _(_, _) {
  var _ = `` + _.end + _.strict + _.sensitive,
    _ = _[_] || (_[_] = {});
  if (_[_]) return _[_];
  var _ = [],
    _ = {
      regexp: (0, _.default)(_, _, _),
      keys: _,
    };
  return (_ < _ && ((_[_] = _), _++), _);
}
function _(_, _) {
  (_ === void 0 && (_ = {}),
    (typeof _ == `string` || Array.isArray(_)) &&
      (_ = {
        path: _,
      }));
  var _ = _,
    _ = _.path,
    _ = _.exact,
    _ = _ !== void 0 && _,
    _ = _.strict,
    _ = _ !== void 0 && _,
    _ = _.sensitive,
    _ = _ !== void 0 && _;
  return [].concat(_).reduce(function (_, _) {
    if (!_ && _ !== ``) return null;
    if (_) return _;
    var _ = _(_, {
        end: _,
        strict: _,
        sensitive: _,
      }),
      _ = _.regexp,
      _ = _.keys,
      _ = _.exec(_);
    if (!_) return null;
    var _ = _[0],
      _ = _.slice(1),
      _ = _ === _;
    return _ && !_
      ? null
      : {
          path: _,
          url: _ === `/` && _ === `` ? `/` : _,
          isExact: _,
          params: _.reduce(function (_, _, _) {
            return ((_[_.name] = _[_]), _);
          }, {}),
        };
  }, null);
}
function _(_) {
  return _.Children.count(_) === 0;
}
var _ = (function (_) {
  _(_, _);
  function _() {
    return _.apply(this, arguments) || this;
  }
  var _ = _.prototype;
  return (
    (_.render = function () {
      var _ = this;
      return _.createElement(_.Consumer, null, function (_) {
        !_ && _(!1);
        var _ = _.props.location || _.location,
          _ = _.props.computedMatch
            ? _.props.computedMatch
            : _.props.path
              ? _(_.pathname, _.props)
              : _.match,
          _ = _({}, _, {
            location: _,
            match: _,
          }),
          _ = _.props,
          _ = _.children,
          _ = _.component,
          _ = _.render;
        return (
          Array.isArray(_) && _(_) && (_ = null),
          _.createElement(
            _.Provider,
            {
              value: _,
            },
            _.match
              ? _
                ? typeof _ == `function`
                  ? _(_)
                  : _
                : _
                  ? _.createElement(_, _)
                  : _
                    ? _(_)
                    : null
              : typeof _ == `function`
                ? _(_)
                : null,
          )
        );
      });
    }),
    _
  );
})(_.Component);
_.Component;
var _ = (function (_) {
  _(_, _);
  function _() {
    return _.apply(this, arguments) || this;
  }
  var _ = _.prototype;
  return (
    (_.render = function () {
      var _ = this;
      return _.createElement(_.Consumer, null, function (_) {
        !_ && _(!1);
        var _ = _.props.location || _.location,
          _,
          _;
        return (
          _.Children.forEach(_.props.children, function (_) {
            if (_ == null && _.isValidElement(_)) {
              _ = _;
              var _ = _.props.path || _.props.from;
              _ = _
                ? _(
                    _.pathname,
                    _({}, _.props, {
                      path: _,
                    }),
                  )
                : _.match;
            }
          }),
          _
            ? _.cloneElement(_, {
                location: _,
                computedMatch: _,
              })
            : null
        );
      });
    }),
    _
  );
})(_.Component);
function _(_) {
  var _ = `withRouter(` + (_.displayName || _.name) + `)`,
    _ = function (_) {
      var _ = _.wrappedComponentRef,
        _ = _(_, [`wrappedComponentRef`]);
      return _.createElement(_.Consumer, null, function (_) {
        return (
          !_ && _(!1),
          _.createElement(
            _,
            _({}, _, _, {
              ref: _,
            }),
          )
        );
      });
    };
  return ((_.displayName = _), (_.WrappedComponent = _), (0, _.default)(_, _));
}
var _ = _.useContext;
function _() {
  return _(_);
}
function _() {
  return _(_).location;
}
function _() {
  var _ = _(_).match;
  return _ ? _.params : {};
}
