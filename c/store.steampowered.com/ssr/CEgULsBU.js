var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.communityitemid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            communityitemid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            item_type: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            owner: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            attributes: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            used: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            owner_origin: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            amount: {
              _: 8,
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
      return `CQuest_CommunityItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.attributeid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            attributeid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            value: {
              _: 2,
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
      return `CQuest_CommunityItem_Attribute`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filter_appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filter_appids: {
              _: 1,
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
      return `CQuest_GetCommunityInventory_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            items: {
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
      return `CQuest_GetCommunityInventory_Response`;
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
            item_type: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            language: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            broadcast_channel_id: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            keyvalues_as_json: {
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
      return `CQuest_GetCommunityItemDefinitions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_definitions: {
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
      return `CQuest_GetCommunityItemDefinitions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            item_title: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            item_description: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            item_image_small: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            item_image_large: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            item_key_values: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            item_series: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_class: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            editor_accountid: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            item_image_composed: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            item_image_composed_foil: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            deleted: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            item_last_changed: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            broadcast_channel_id: {
              _: 17,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            item_movie_webm: {
              _: 18,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm_small: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4_small: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
            item_internal_name: {
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
      return `CQuest_GetCommunityItemDefinitions_Response_ItemDefinition`;
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
            communityitemid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            activate: {
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
      return `CQuest_ActivateProfileModifierItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CQuest_ActivateProfileModifierItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.timestamp_start || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timestamp_start: {
              _: 1,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_end: {
              _: 2,
              _: 4294967295,
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
      return `CQuest_GetNumTradingCardsEarned_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.num_trading_cards || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            num_trading_cards: {
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
      return `CQuest_GetNumTradingCardsEarned_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.eventid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            eventid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            include_inactive: {
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
      return `CQuest_VirtualItemRewardDefinition_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.eventid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            eventid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            item_bucket: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            rarity: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            package_to_grant: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            game_item_id: {
              _: 7,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            community_item_class: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            community_item_type: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            loyalty_point_type: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            amount: {
              _: 11,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            rtime_time_active: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            loyalty_reward_defid: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            user_badge_to_grant: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            user_badge_level: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            virtual_item_def_id: {
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
      return `CVirtualItemRewardDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rewards || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rewards: {
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
      return `CQuest_VirtualItemRewardDefinition_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.eventid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            eventid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            itemsdefs: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            action: {
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
      return `CQuest_SetVirtualItemRewardDefinition_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CQuest_SetVirtualItemRewardDefinition_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Quest.GetCommunityInventory#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetCommunityInventory = _;
  function _(_, _, _) {
    return _.SendMsg(`Quest.GetCommunityItemDefinitions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 4,
    });
  }
  _.GetCommunityItemDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`Quest.ActivateProfileModifierItem#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.ActivateProfileModifierItem = _;
  function _(_, _, _) {
    return _.SendMsg(`Quest.GetNumTradingCardsEarned#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetNumTradingCardsEarned = _;
  function _(_, _, _) {
    return _.SendMsg(`Quest.GetVirtualItemRewardDefinition#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 4,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetVirtualItemRewardDefinition = _;
  function _(_, _, _) {
    return _.SendMsg(`Quest.SetVirtualItemRewardDefinition#1`, _(_, _, _), _, {
      ePrivilege: 4,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SetVirtualItemRewardDefinition = _;
})((_ ||= {}));
var _ = _(_(), 1);
_();
var _ = {};
function _(_) {
  return _[_];
}
function _(_) {
  return !!_[_];
}
(_(`2026-11-23T09:30:00-08:00`).unix(), _(`2026-11-30T10:00:00-08:00`).unix());
function _() {
  return 2025;
}
function _(_) {
  return `${_.MEDIA_CDN_URL}store/promo/${_}`;
}
function _(_ = ``) {
  return `${_.STORE_BASE_URL}steamawards/${_}`;
}
function _() {
  return {
    strBackgroundColor: `#000000`,
    strBackgroundImageURL: _(`steamawards2026/page_tile.svg?v=1`),
    strTrophyImageURL: _(`steamawards2026/trophy_220.png?v=1`),
    strButtonBGColor: `#ffd979`,
    strButtonTextColor: `#000000`,
    strTextColor: `#ffd979`,
    strCategoryTextColor: `#ffffff`,
    strTitleColor: `#ffd979`,
    rgCategoryBackgrounds: _(_())?.mapCategoryColors ?? {},
    strFallbackCategoryBGColor: `#000000`,
  };
}
function _() {
  return `${_.STORE_BASE_URL}steamawards/ajaxgetwidgetstyle`;
}
(_(`2026-12-17T09:30:00-08:00`).unix(), _(`2027-01-02T10:00:00-08:00`).unix());
var _ = 5350740,
  _ = new Map([
    [3240220, 2016],
    [292030, 2017],
    [578080, 2018],
    [814380, 2019],
    [1174180, 2020],
    [1196590, 2021],
    [1245620, 2022],
    [1086940, 2023],
    [2358720, 2024],
    [1030300, 2025],
  ]);
function _(_) {
  return _.get(_);
}
var _ = 2215130;
function _(_, _) {
  return _.BIsEventActionEnabled(_) || _ < _.GetStartTimeAndDateUnixSeconds();
}
function _(_, _, _, _) {
  let _ = _(_, _),
    _ = _(_, _);
  if (_.length || _.length)
    return {
      nomination: _.length
        ? {
            rgCategories: _,
            bNominationsLive: _,
          }
        : void 0,
      vote: _.length
        ? {
            rgCategories: _,
            bNominationsLive: _,
          }
        : void 0,
    };
}
function _(_) {
  return _ > 0;
}
function _(_, _) {
  let _ = [];
  for (let _ of _.filter(_)) {
    let _ = _.find((_) => _.voteid == _);
    _?.localization?.title &&
      _.push({
        eCategoryID: _,
        strTitle: _.localization.title,
        strDescription: _.localization.award_description ?? ``,
        bLaborOfLove: _.flag == 3,
        internal_name: _.internal_name ?? ``,
      });
  }
  return _;
}
function _(_) {
  return [`SteamAwards.GetUserNominations`, _];
}
function _(_) {
  return [`StoreSales.GetUserVotes`, _, _];
}
function _(_, _) {
  let _ = _(),
    _ = _(_.accountid),
    { data: _, isPending: _ } = _({
      queryKey: _,
      queryFn: async () => await _.GetMySteamAwardNominations(),
      enabled: !!_.accountid,
    }),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        let _ = await _.NominateForSteamAward(_, _);
        if (_ != 1)
          throw Error(
            `SteamAwards.Nominate failed with ${_} for ${_} and appid ${_}`,
          );
      },
      onMutate: (_) =>
        _.setQueryData(_, (_) => [
          ...(_ ?? []).filter((_) => _.category_id != _),
          {
            category_id: _,
            appid: _,
          },
        ]),
      onError: () =>
        _.invalidateQueries({
          queryKey: _,
        }),
    });
  return {
    unNominatedAppID: _?.find((_) => _.category_id == _)?.appid,
    bAnswered: _ != null || !_.accountid || !_,
    Nominate: _,
  };
}
function _(_, _) {
  let _ = _(),
    _ = _(_.accountid),
    { data: _, isPending: _ } = _({
      queryKey: _,
      queryFn: async () => await _.GetMySteamAwardVotes(),
      enabled: !!_.accountid,
    }),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        let _ = await _.SetSteamAwardVote(_, _);
        if (_ != 1) throw Error(`StoreSales.SetVote failed with ${_}`);
      },
      onMutate: (_) =>
        _.setQueryData(_, (_) => [
          ...(_ ?? []).filter((_) => _.voteid != _),
          {
            voteid: _,
            appid: _,
          },
        ]),
      onError: () =>
        _.invalidateQueries({
          queryKey: _,
        }),
    });
  return {
    unVotedAppID: _?.find((_) => _.voteid == _)?.appid,
    bAnswered: _ != null || !_.accountid || !_,
    Vote: _,
  };
}
var _ = `hI8A-CQPZek-`,
  _ = `PVco1ES12TU-`,
  _ = `chEcLoz6gRs-`,
  _ = `iX7BWzz-jNw-`,
  _ = `yqbfDPlSp-8-`,
  _ = `_4yDWXemvGIM-`,
  _ = `OvmdGGxF7yI-`,
  _ = `AjYg4O8-C-g-`,
  _ = `_7t2OQ5wvHL0-`,
  _ = `Mk2aWQ2Aftw-`,
  _ = `G0oOgi67V9A-`,
  _ = `_2E0-kmZH0iM-`,
  _ = `_2OYSMIxZIGc-`,
  _ = `LuFHpefe0Gk-`,
  _ = `h5uy6BTQdCo-`,
  _ = `_6yirLXhBImc-`,
  _ = `Ewlp4xHeHMY-`,
  _ = `_4m3CBCeUxsA-`,
  _ = `ZWyJOK8-Y-s-`,
  _ = `dI8MJHEluz8-`,
  _ = `_3PBD2Ny8qmU-`,
  _ = `pcItHOGdUeY-`,
  _ = `GPWqqq3RleQ-`,
  _ = `rTs2pBKTGoY-`,
  _ = `k-52RV9hB9o-`,
  _ = `ZuPjSRdFK9M-`,
  _ = `cRkw6nz-hHQ-`,
  _ = _(),
  _ = _.createContext(void 0);
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.widgetStyle,
    children: _.children,
  });
}
function _() {
  return _.useContext(_) ?? _();
}
function _(_) {
  let {
      strMainTitle: _,
      subtitle: _,
      headerText: _,
      headerContent: _,
      children: _,
      footer: _,
    } = _,
    _ = _(),
    _ = {
      backgroundColor: _.strBackgroundColor,
      backgroundImage: `url( ${_.strBackgroundImageURL} )`,
      color: _.strTextColor,
    };
  return (0, _.jsxs)(`div`, {
    style: _,
    className: _(_, _),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`img`, {
            className: _,
            src: _.strTrophyImageURL,
            alt: ``,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  color: _.strTitleColor,
                },
                className: _,
                children: _,
              }),
              _,
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              _,
            ],
          }),
        ],
      }),
      _,
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `Uir4Wbrxbog-`,
          children: _,
        }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    size: `medium`,
    position: `center`,
    string: _.Localize(`#Loading`),
  });
}
function _(_) {
  let { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    [_, _, _] = _();
  return {
    elDialogElement: (0, _.jsxs)(_.Fragment, {
      children: [
        _,
        (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            bVote: _,
            closeModal: _,
          }),
        }),
      ],
    }),
    BCanTakeAction: () =>
      _.logged_in ? !_.is_limited || (_(), !1) : (_(), !1),
  };
}
function _(_) {
  let { bVote: _, closeModal: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#Informational_Message`),
    onCancel: _,
    onOK: _,
    bAlertDialog: !0,
    children: (0, _.jsx)(`div`, {
      children: _.LocalizeReact(
        _
          ? `#SteamAward_Vote_LimitedAccount`
          : `#SteamAward_Nominate_LimitedAccount`,
        (0, _.jsx)(`a`, {
          href: `${_.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
          target: _.IN_CLIENT ? void 0 : `_blank`,
          rel: `noreferrer`,
          children: _.Localize(`#User_LimitedAccount_UrlInfo`),
        }),
      ),
    }),
  });
}
function _(_) {
  let {
      strLocTokenInfix: _,
      unCurrentAppID: _,
      unNewAppID: _,
      fnOnConfirm: _,
      closeModal: _,
    } = _,
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    _ = _ ? _(_, `small_capsule`) : void 0,
    _ = _ ? _(_, `small_capsule`) : void 0;
  return (0, _.jsx)(_, {
    modalClassName: _,
    strTitle: _.Localize(
      _ == `Vote`
        ? `#SteamAward_VoteConflictWarning_Title`
        : `#SteamAward_NominationConflictWarning_Title`,
    ),
    closeModal: _,
    onOK: _,
    onCancel: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _.LocalizeReact(
          _ == `Vote`
            ? `#SteamAward_VoteConflictWarning_Explanation`
            : `#SteamAward_NominationConflictWarning_Explanation`,
          (0, _.jsx)(`span`, {
            className: _,
            children: _?.name,
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _?.name,
          }),
        ),
        _ && _
          ? (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
                `→`,
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
              ],
            })
          : (0, _.jsx)(_, {
              size: `small`,
              position: `center`,
              string: _.Localize(`#Loading`),
            }),
      ],
    }),
  });
}
