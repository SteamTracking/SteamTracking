var _ = _(_()),
  _ = _(_(), 1),
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
            is_allowed: {
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
      return `ParentalApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.allowed_time_windows || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            allowed_time_windows: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            allowed_daily_minutes: {
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
      return `ParentalPlaytimeDay`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.apply_playtime_restrictions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apply_playtime_restrictions: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            playtime_days: {
              _: 15,
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
      return `ParentalPlaytimeRestrictions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.restrictions || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            restrictions: {
              _: 1,
              _: _,
            },
            rtime_expires: {
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
      return `ParentalTemporaryPlaytimeRestrictions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5, 17, 18, 19], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            applist_base_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            applist_base_description: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            applist_base: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            applist_custom: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            passwordhashtype: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            salt: {
              _: 7,
              _: _.readBytes,
              _: _.writeBytes,
            },
            passwordhash: {
              _: 8,
              _: _.readBytes,
              _: _.writeBytes,
            },
            is_enabled: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            enabled_features: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            recovery_email: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            is_site_license_lock: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            temporary_enabled_features: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_temporary_feature_expiration: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            playtime_restrictions: {
              _: 15,
              _: _,
            },
            temporary_playtime_restrictions: {
              _: 16,
              _: _,
            },
            excluded_store_content_descriptors: {
              _: 17,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            excluded_community_content_descriptors: {
              _: 18,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            utility_appids: {
              _: 19,
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
      return `ParentalSettings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requestid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requestid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            family_groupid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            features: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_requested: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            approved: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            steamid_responder: {
              _: 7,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_responded: {
              _: 8,
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
      return `ParentalFeatureRequest`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requestid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requestid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            family_groupid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            current_playtime_restrictions: {
              _: 4,
              _: _,
            },
            time_expires: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_requested: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            approved: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            steamid_responder: {
              _: 8,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_responded: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            restrictions_approved: {
              _: 10,
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
      return `ParentalPlaytimeRequest`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            password: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            settings: {
              _: 2,
              _: _,
            },
            sessionid: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            enablecode: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_EnableParentalSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_EnableParentalSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            password: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_DisableParentalSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_DisableParentalSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_GetParentalSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            settings: {
              _: 1,
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
      return `CParental_GetParentalSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.priority || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            priority: {
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
      return `CParental_GetSignedParentalSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.serialized_settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            serialized_settings: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            signature: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
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
      return `CParental_GetSignedParentalSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            password: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            settings: {
              _: 2,
              _: _,
            },
            new_password: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            sessionid: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_SetParentalSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_SetParentalSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.unlock_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unlock_token: {
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
      return `CParental_ValidateToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidateToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            password: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            session: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            send_unlock_on_success: {
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
      return `CParental_ValidatePassword_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token: {
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
      return `CParental_ValidatePassword_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.session || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            session: {
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
      return `CParental_LockClient_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_LockClient_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestRecoveryCode_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestRecoveryCode_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.features || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            features: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_RequestFeatureAccess_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requestid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requestid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_RequestFeatureAccess_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.approve || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            approve: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            requestid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            features: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            duration: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_ApproveFeatureAccess_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApproveFeatureAccess_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.time_expires || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            time_expires: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            current_playtime_restrictions: {
              _: 2,
              _: _,
            },
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_RequestPlaytime_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requestid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requestid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_RequestPlaytime_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.approve || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            approve: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            requestid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            restrictions_approved: {
              _: 3,
              _: _,
            },
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_ApprovePlaytime_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApprovePlaytime_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_include_completed_since || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_include_completed_since: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            family_groupid: {
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
      return `CParental_GetRequests_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.feature_requests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            feature_requests: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            playtime_requests: {
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
      return `CParental_GetRequests_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.day_of_week || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            day_of_week: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            minutes_used: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CParental_ReportPlaytimeAndNotify_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CParental_ReportPlaytimeAndNotify_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.serialized_settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            serialized_settings: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            signature: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
            password: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            sessionid: {
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
      return `CParental_ParentalSettingsChange_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            password: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            sessionid: {
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
      return `CParental_ParentalUnlock_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sessionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sessionid: {
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
      return `CParental_ParentalLock_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.day_of_week || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            day_of_week: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            minutes_used: {
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
      return `CParental_PlaytimeUsed_Notification`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Parental.EnableParentalSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.EnableParentalSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.DisableParentalSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.DisableParentalSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.GetParentalSettings#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetParentalSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.GetSignedParentalSettings#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetSignedParentalSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.SetParentalSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SetParentalSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.ValidateToken#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`, `community`],
    });
  }
  _.ValidateToken = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.ValidatePassword#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ValidatePassword = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.LockClient#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.LockClient = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.RequestRecoveryCode#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RequestRecoveryCode = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.RequestFeatureAccess#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.RequestFeatureAccess = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.ApproveFeatureAccess#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.ApproveFeatureAccess = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.RequestPlaytime#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.RequestPlaytime = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.ApprovePlaytime#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.ApprovePlaytime = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.GetRequests#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetRequests = _;
  function _(_, _, _) {
    return _.SendMsg(`Parental.ReportPlaytimeAndNotify#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ReportPlaytimeAndNotify = _;
})((_ ||= {}));
var _;
(function (_) {
  (_.NotifySettingsChangeHandler = {
    name: `ParentalClient.NotifySettingsChange#1`,
    request: _,
  }),
    (_.NotifyUnlockHandler = {
      name: `ParentalClient.NotifyUnlock#1`,
      request: _,
    }),
    (_.NotifyLockHandler = {
      name: `ParentalClient.NotifyLock#1`,
      request: _,
    }),
    (_.NotifyPlaytimeUsedHandler = {
      name: `ParentalClient.NotifyPlaytimeUsed#1`,
      request: _,
    });
})((_ ||= {}));
function _(_) {
  return [`parentalsettings`, _];
}
function _(_) {
  let _ = _.applist_base.concat(_.applist_custom);
  return new Map(_.map((_) => [_.appid, _.is_allowed]));
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_steamid(_);
  let _ = await _.GetParentalSettings(_, _);
  if (_.GetEResult() != 1)
    throw Error(`Error from GetParentalSettings: ${_.GetEResult()}`);
  let _ = _.Body().settings().toObject();
  return (
    (_.playtime_restrictions ||= {
      apply_playtime_restrictions: !1,
      playtime_days: Array(7).fill({
        allowed_time_windows: BigInt(0xffffffffffff).toString(),
        allowed_daily_minutes: 1440,
      }),
    }),
    {
      settings: _,
      mapAppsAllowed: _(_),
    }
  );
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: () => _(_, _),
    placeholderData: {
      settings: void 0,
      mapAppsAllowed: void 0,
    },
    ..._,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return [`validateparentaltoken`, _, _];
}
function _() {
  let _ = _(`clientsessionid`),
    _ = _(`sessionid`);
  return _ || _;
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(`steamparental`),
    _ = _(),
    _ = _,
    _ = _?.split(`||`) || [];
  _.length == 2 && (_ = _[1]);
  let _ = _ && _ !== `0` ? _ + `||` + _ : void 0,
    _ = _({
      queryKey: _(_, _),
      queryFn: async () => {
        if (!_) return 15;
        let _ = _.Init(_);
        return (
          _.Body().set_unlock_token(_),
          (await _.ValidateToken(_, _)).GetEResult()
        );
      },
    });
  return !_.isSuccess || _.data !== 1;
}
function _(_, _, _) {
  if (_ == 0 || _ == null) return !1;
  if (!_) return !0;
  if (!_.is_enabled || !_) return !1;
  if (_ == 15) return !0;
  let _ = _.enabled_features;
  return !_ || !(_ & (1 << _));
}
function _(_) {
  let { settings: _ } = _(_()).data ?? {};
  return _(_, _, _());
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            value: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            color: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            label: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            name: {
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
      return `CEconItem_DescriptionLine`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.link || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            link: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CEconItem_Action`;
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
            category: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            internal_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            localized_category_name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            localized_tag_name: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            color: {
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
      return `CEconItem_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.contained_items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            contained_items: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            search_tags: {
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
      return `CEconItem_ContainerProperties`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.classid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            classid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            instanceid: {
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
      return `CEconItem_ClassIdentifiers`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
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
              _: _.readInt32,
              _: _.writeInt32,
            },
            classid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            instanceid: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            currency: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            background_color: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            icon_url: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            icon_url_large: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            descriptions: {
              _: 8,
              _: _,
              _: !0,
              _: !0,
            },
            tradable: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            actions: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            owner_descriptions: {
              _: 11,
              _: _,
              _: !0,
              _: !0,
            },
            owner_actions: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            fraudwarnings: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            name: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            name_color: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            market_name: {
              _: 17,
              _: _.readString,
              _: _.writeString,
            },
            market_hash_name: {
              _: 18,
              _: _.readString,
              _: _.writeString,
            },
            market_fee: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            market_fee_app: {
              _: 28,
              _: _.readInt32,
              _: _.writeInt32,
            },
            contained_item: {
              _: 20,
              _: _,
            },
            market_actions: {
              _: 21,
              _: _,
              _: !0,
              _: !0,
            },
            commodity: {
              _: 22,
              _: _.readBool,
              _: _.writeBool,
            },
            market_tradable_restriction: {
              _: 23,
              _: _.readInt32,
              _: _.writeInt32,
            },
            market_marketable_restriction: {
              _: 24,
              _: _.readInt32,
              _: _.writeInt32,
            },
            marketable: {
              _: 25,
              _: _.readBool,
              _: _.writeBool,
            },
            tags: {
              _: 26,
              _: _,
              _: !0,
              _: !0,
            },
            item_expiration: {
              _: 27,
              _: _.readString,
              _: _.writeString,
            },
            market_buy_country_restriction: {
              _: 30,
              _: _.readString,
              _: _.writeString,
            },
            market_sell_country_restriction: {
              _: 31,
              _: _.readString,
              _: _.writeString,
            },
            sealed: {
              _: 32,
              _: _.readBool,
              _: _.writeBool,
            },
            container_properties: {
              _: 33,
              _: _,
            },
            market_bucket_group_name: {
              _: 34,
              _: _.readString,
              _: _.writeString,
            },
            market_bucket_group_id: {
              _: 35,
              _: _.readString,
              _: _.writeString,
            },
            sealed_type: {
              _: 37,
              _: _.readUint32,
              _: _.writeUint32,
            },
            market_name_inside_group: {
              _: 38,
              _: _.readString,
              _: _.writeString,
            },
            market_bucket_id: {
              _: 39,
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
      return `CEconItem_Description`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.propertyid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            propertyid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            int_value: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            float_value: {
              _: 3,
              _: _.readFloat,
              _: _.writeFloat,
            },
            string_value: {
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
      return `CEconItem_AssetProperty`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.classid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            classid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            instanceid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            standalone_properties: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            parent_relationship_properties: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            nested_accessories: {
              _: 5,
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
      return `CEconItem_AssetAccessory`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null);
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
            contextid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            assetid: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            asset_properties: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            asset_accessories: {
              _: 5,
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
      return `CEconItem_AssetProperties`;
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
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            float_min: {
              _: 4,
              _: _.readFloat,
              _: _.writeFloat,
            },
            float_max: {
              _: 5,
              _: _.readFloat,
              _: _.writeFloat,
            },
            int_min: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            int_max: {
              _: 7,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            localized_label: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            hide_from_description: {
              _: 9,
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
      return `CEconItem_AssetPropertySchema`;
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
            language: {
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
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.property_schemas || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            property_schemas: {
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
      return `CEcon_GetAssetPropertySchema_Response`;
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
            contextid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            assetid: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            classid: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            instanceid: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            currencyid: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            amount: {
              _: 7,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            missing: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            est_usd: {
              _: 9,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CEcon_Asset`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            contextid: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            get_descriptions: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            get_asset_properties: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            for_trade_offer_verification: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            language: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            filters: {
              _: 6,
              _: _,
            },
            start_assetid: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            count: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.assetids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            assetids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            currencyids: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            tradable_only: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            marketable_only: {
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
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.assets || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            assets: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            descriptions: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            missing_assets: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            asset_properties: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            more_items: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            last_assetid: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            total_inventory_count: {
              _: 6,
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
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.generate_new_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            generate_new_token: {
              _: 1,
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
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.trade_offer_access_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            trade_offer_access_token: {
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
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.return_url || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            return_url: {
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
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.url || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            url: {
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
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
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
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            classes: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            high_pri: {
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
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.descriptions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            descriptions: {
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
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  _.GetInventoryItemsWithDescriptions = _;
  function _(_, _, _) {
    return _.SendMsg(`Econ.GetTradeOfferAccessToken#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetTradeOfferAccessToken = _;
  function _(_, _, _) {
    return _.SendMsg(`Econ.ClientGetItemShopOverlayAuthURL#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ClientGetItemShopOverlayAuthURL = _;
  function _(_, _, _) {
    return _.SendMsg(`Econ.GetAssetClassInfo#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetAssetClassInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`Econ.GetAssetPropertySchema#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetAssetPropertySchema = _;
})((_ ||= {})),
  _.createContext({
    staleTimeMs: 1 / 0,
  }),
  (0, _.createContext)({
    errorMessage: null,
    setErrorMessage: (_) => {},
  });
function _(_, _) {
  return `${_.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.data || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            data: {
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
      return `AdditionalSubjectData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.key || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            key: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            value: {
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
      return `AdditionalSubjectData_DataEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            start: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count: {
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
      return `CContentModeration_GetReportsSubmittedByUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.report_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [23, 24], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            report_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            reporter_steamid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_reported: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            report_reason: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            report_text: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            subject_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            subject_group_id: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_id: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            resolved: {
              _: 9,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_resolved: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            resolver_steamid: {
              _: 11,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_notified: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            additional_subject_data: {
              _: 13,
              _: _,
            },
            time_disputed: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            dispute_details: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            dispute_resolver_steamid: {
              _: 16,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            dispute_resolved: {
              _: 17,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_dispute_resolved: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            detected_by_automation: {
              _: 19,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            resolved_by_automation: {
              _: 20,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            content_moderated_reason: {
              _: 21,
              _: _.readEnum,
              _: _.writeEnum,
            },
            dispute_resolved_reason: {
              _: 22,
              _: _.readEnum,
              _: _.writeEnum,
            },
            sanctions_applied: {
              _: 23,
              _: _,
              _: !0,
              _: !0,
            },
            sanctions_applied_on_dispute: {
              _: 24,
              _: _,
              _: !0,
              _: !0,
            },
            reported_content_id: {
              _: 25,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            coordinates: {
              _: 26,
              _: _,
            },
            reporter_is_support: {
              _: 27,
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
      return `ContentReport`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_report || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            content_report: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_count: {
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
      return `CContentModeration_GetReportsSubmittedByUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            subject_group_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            reported_content_id: {
              _: 5,
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
      return `CContentModeration_GetOneReportSubmittedByUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_report || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            content_report: {
              _: 1,
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
      return `CContentModeration_GetOneReportSubmittedByUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
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
      return `CContentModeration_GetReportedSubjectsByOwner_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [13, 31, 32], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            subject_group_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            owner_steam_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            resolved: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_resolved: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            unresolved_report_count: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            oldest_unresolved_report_time: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            resolver_steamid: {
              _: 10,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            assigned_moderator_steamid: {
              _: 11,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_claimed_by_moderator: {
              _: 12,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            reports: {
              _: 13,
              _: _,
              _: !0,
              _: !0,
            },
            additional_subject_data: {
              _: 14,
              _: _,
            },
            csam_status: {
              _: 15,
              _: _.readEnum,
              _: _.writeEnum,
            },
            terrorism_status: {
              _: 16,
              _: _.readEnum,
              _: _.writeEnum,
            },
            content_moderated_reason: {
              _: 17,
              _: _.readEnum,
              _: _.writeEnum,
            },
            unresolved_dispute_count: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            oldest_unresolved_dispute_time: {
              _: 19,
              _: _.readUint32,
              _: _.writeUint32,
            },
            owner_dispute_time: {
              _: 24,
              _: _.readUint32,
              _: _.writeUint32,
            },
            owner_dispute_resolved_time: {
              _: 25,
              _: _.readUint32,
              _: _.writeUint32,
            },
            owner_dispute_details: {
              _: 26,
              _: _.readString,
              _: _.writeString,
            },
            required_moderator_level: {
              _: 27,
              _: _.readEnum,
              _: _.writeEnum,
            },
            resolved_by_automation: {
              _: 28,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            detected_by_automation: {
              _: 29,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            credible_threat_of_violence_status: {
              _: 30,
              _: _.readEnum,
              _: _.writeEnum,
            },
            sanctions_applied: {
              _: 31,
              _: _,
              _: !0,
              _: !0,
            },
            sanctions_applied_after_dispute: {
              _: 32,
              _: _,
              _: !0,
              _: !0,
            },
            decision_reversed: {
              _: 33,
              _: _.readBool,
              _: _.writeBool,
            },
            reported_content_id: {
              _: 34,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            coordinates: {
              _: 35,
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
      return `ContentReportSubject`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject: {
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
      return `CContentModeration_GetReportedSubjectsByOwner_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sanction || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sanction: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            days: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            escalate_to: {
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
      return `ContentReportSubjectSanction`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.buckets || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            buckets: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            pending_for_any_moderator: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_for_supervisor: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_for_valve: {
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
      return `CContentModeration_GetSubjectOverview_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            unresolved_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            oldest_unresolved: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            unclaimed_count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            oldest_disputed: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            disputed_count: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            unclaimed_disputed_count: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_for_any_moderator: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_for_supervisor: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_for_valve: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            oldest_unresolved_for_any_moderator: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            oldest_unresolved_for_supervisor: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            oldest_unresolved_for_valve: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            coordinates: {
              _: 14,
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
      return `CContentModeration_GetSubjectOverview_Response_Bucket`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            subject_group_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            reported_content_id: {
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
      return `ContentReportSubjectKey`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            rtime_cooldown_ends: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            acquit_unresolved_reports: {
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
      return `CContentModeration_UpdateReporterCooldown_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CContentModeration_GetReporterCooldown_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rtime_cooldown_ends || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rtime_cooldown_ends: {
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
      return `CContentModeration_GetReporterCooldown_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CContentModeration_GetModeratorPreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferred_level || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferred_level: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            enabled_subject_types: {
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
      return `CContentModeration_GetModeratorPreferences_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferred_level || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferred_level: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            enabled_subject_types: {
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
      return `CContentModeration_SetModeratorPreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_types || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_types: {
              _: 1,
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
      return `CContentModeration_SetModeratorPreferences_Request_SubjectTypeList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            rt_start: {
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
      return `CContentModeration_GetModeratorActivity_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.activities || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            activities: {
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
      return `CContentModeration_GetModeratorActivity_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            subject_group_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timestamp: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            action: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            json_data: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            reported_content_id: {
              _: 7,
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
      return `CContentModeration_GetModeratorActivity_Response_ModerationActivity`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rtime_start_date || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rtime_start_date: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_end_date: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            subject_type: {
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
      return `CContentModeration_GetDailyModerationStatistics_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
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
      return `CContentModeration_GetDailyModerationStatistics_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rtime_date || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rtime_date: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            times_unresolved: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            times_resolved: {
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
      return `CContentModeration_GetDailyModerationStatistics_Response_DayStatistics`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CContentModeration_GetOldestUnresolvedSubjects_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subjects || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subjects: {
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
      return `CContentModeration_GetOldestUnresolvedSubjects_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            subject_group_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subject_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            reported_content_id: {
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
      return `CContentModeration_GetOldestUnresolvedSubjects_Response_Subject`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
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
      return `CContentModeration_GetReporterStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.total_reports || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            total_reports: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_acquitted_reports: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reports_in_last_week: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            acquitted_reports_in_last_week: {
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
      return `CContentModeration_GetReporterStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            moderator_level: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            filters: {
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
      return `CContentModeration_ClaimBatch_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subjects || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subjects: {
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
      return `CContentModeration_ClaimBatch_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
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
      return `CContentModeration_GetClaimedSubjects_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subjects || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subjects: {
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
      return `CContentModeration_GetClaimedSubjects_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subjects_to_release || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subjects_to_release: {
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
      return `CContentModeration_ReleaseSubjects_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            steamid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            forum: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            topic: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            comment: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            comment_thread_id: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            sender_account_id: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_message_rtime: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_message_ordinal: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_group_id: {
              _: 10,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            chat_room_id: {
              _: 11,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            receiver_account_id: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            published_file_id: {
              _: 13,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            ugc_content_type: {
              _: 14,
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
      return `ReportedContentCoordinates`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            include_reporter_account_status: {
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
      return `CContentModeration_GetReportedContentByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subject: {
              _: 1,
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
      return `CContentModeration_GetReportedContentByID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.coordinates || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            coordinates: {
              _: 1,
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
      return `CContentModeration_GetReportedContent_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subjects || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subjects: {
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
      return `CContentModeration_GetReportedContent_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            details: {
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
      return `CContentModeration_OwnerDisputeModeration_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
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
      return `CContentModeration_GetAuditLogByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.entries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entries: {
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
      return `CContentModeration_GetAuditLogByID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timestamp || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timestamp: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            actor_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            automated_action: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            action: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            additional_json_data: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            actor_is_support: {
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
      return `CContentModeration_GetAuditLogByID_Response_AuditLogEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            report_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            dispute_details: {
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
      return `CContentModeration_ReporterDisputeModeration_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
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
      return `CContentModeration_SustainModerationByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            new_level: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reason: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            note: {
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
      return `CContentModeration_EscalateSubjectByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            resolution: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            reason: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            note: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            resolved_by_automation: {
              _: 7,
              _: _.readEnum,
              _: _.writeEnum,
            },
            sanctions_applied: {
              _: 9,
              _: _,
              _: !0,
              _: !0,
            },
            skip_lock: {
              _: 10,
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
      return `CContentModeration_ResolveByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            csam_status: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            terrorism_status: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            credible_threat_of_violence_status: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            additional_subject_data: {
              _: 5,
              _: _,
            },
            owner_dispute_details: {
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
      return `CContentModeration_UpdateSubjectByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reported_content_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reported_content_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            action: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            automated_action: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            additional_json_data: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            actor_steamid: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CContentModeration_WriteToAuditLogByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.ClaimBatch#1`, _(_, _, _), _, {
      ePrivilege: 5,
    });
  }
  _.ClaimBatch = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.GetClaimedSubjects#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  _.GetClaimedSubjects = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.ReleaseSubjects#1`, _(_, _, _), _, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.ReleaseSubjects = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.GetReportsSubmittedByUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetReportsSubmittedByUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.GetOneReportSubmittedByUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetOneReportSubmittedByUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.GetReportedSubjectsByOwner#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.GetReportedSubjectsByOwner = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.GetSubjectOverview#1`, _(_, _, _), _, {
      ePrivilege: 5,
    });
  }
  _.GetSubjectOverview = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.UpdateReporterCooldown#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.UpdateReporterCooldown = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.GetReporterCooldown#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetReporterCooldown = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.GetModeratorPreferences#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.GetModeratorPreferences = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.SetModeratorPreferences#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.SetModeratorPreferences = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.GetModeratorActivity#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.GetModeratorActivity = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.GetDailyModerationStatistics#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.GetDailyModerationStatistics = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.GetOldestUnresolvedSubjects#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.GetOldestUnresolvedSubjects = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.GetReporterStats#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetReporterStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.GetReportedContentByID#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.GetReportedContentByID = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.GetReportedContent#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetReportedContent = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.OwnerDisputeModeration#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.OwnerDisputeModeration = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.GetAuditLogByID#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetAuditLogByID = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.ReporterDisputeModeration#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReporterDisputeModeration = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ContentModeration.SustainModerationByID#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.SustainModerationByID = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.EscalateSubjectByID#1`, _(_, _, _), _, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.EscalateSubjectByID = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.ResolveByID#1`, _(_, _, _), _, {
      ePrivilege: 5,
    });
  }
  _.ResolveByID = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.UpdateSubjectByID#1`, _(_, _, _), _, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.UpdateSubjectByID = _;
  function _(_, _, _) {
    return _.SendMsg(`ContentModeration.WriteToAuditLogByID#1`, _(_, _, _), _, {
      ePrivilege: 5,
    });
  }
  _.WriteToAuditLogByID = _;
})((_ ||= {}));
function _(_) {
  let _ = _?.reported_content_id
    ? _.reported_content_id
    : `${_?.subject_type}-${_?.subject_group_id}-${_?.subject_id}`;
  return `${_.COMMUNITY_BASE_URL}my/reportedcontent/${_}`;
}
var _ = {
  11: {
    displayNameLoc: `#SteamNotification_HelpRequest_Author`,
    titleLoc: `#SteamNotification_HelpRequest_Title`,
    bodyLoc: (_) => ({
      locString: `#SteamNotification_HelpRequest_Body`,
      params: [_.ticket],
    }),
    link: (_) => _.HELP_BASE_URL + `wizard/HelpRequest/` + _.ticket,
  },
  6: {
    displayNameLoc: `#SteamNotifications_MajorSale`,
    titleLoc: (_) => ({
      locString: _.title,
    }),
    bodyLoc: (_) =>
      _() && _.link.includes(`https://store.steampowered.com`)
        ? `#SteamNotifications_MajorSale_SteamChina_Title`
        : _.body,
    image: (_) => _.image,
    link: (_) =>
      _() && _.link.includes(`https://store.steampowered.com`)
        ? _.link.replace(`https://store.steampowered.com`, _.STORE_BASE_URL)
        : _.link,
  },
  10: {
    displayNameLoc: (_) => _.display_name,
    titleLoc: (_) => _.title,
    bodyLoc: (_) => _.body,
    image: (_) => _.image,
    link: (_) => _.link,
  },
  14: {
    titleLoc: `#SteamNotification_ModeratorMessage_Title`,
    link: (_) => _.COMMUNITY_BASE_URL + `my/moderatormessages/` + _.msgid,
  },
  28: {
    displayNameLoc: (_) =>
      _.is_limited_launch
        ? `#Notification_LimitedLaunchInviteTitle`
        : `#Notification_PlaytestInviteTitle`,
    titleLoc: (_) =>
      _.is_limited_launch
        ? `#Notification_LimitedLaunchInviteBody`
        : `#Notification_PlaytestInviteBody`,
    image: (_) => _.appid,
    link: (_) => _.STORE_BASE_URL + `account/gatedaccess?appid=` + _.appid,
  },
  30: {
    titleLoc: (_) => {
      switch (_.status) {
        case 1:
          return `#Notification_ReportedContentAction_Received`;
        case 2:
          return `#Notification_ReportedContentAction_Sanctioned`;
        case 3:
          return `#Notification_ReportedContentAction_Acquitted`;
        case 4:
          return `#Notification_ReportedContentAction_DisputeReceived`;
        case 5:
          return `#Notification_ReportedContentAction_DisputeSanctioned`;
        case 6:
          return `#Notification_ReportedContentAction_DisputeAcquitted`;
        default:
          return `#Notification_ReportedContentAction_Unknown`;
      }
    },
    link: (_) => _(_),
  },
};
function _(_) {
  if (_ !== void 0) return _[_];
}
function _(_) {
  return !!_(_);
}
var _ = {
  16: {
    steamidAttribute: `inviter`,
    titleLoc: `#SteamNotifications_FamilyInviteTitle`,
    bodyLoc: `#SteamNotifications_FamilyInviteBody`,
    url: (_) =>
      `${_.STORE_BASE_URL}account/familymanagement/join?invitation=${_.familyid}`,
  },
  15: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalFeatureRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalFeatureRequestBody`,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: `requestor_steamid`,
    titleLoc: `#SteamNotifications_FamilyPurchaseRequestTitle`,
    bodyLoc: `#SteamNotifications_FamilyPurchaseRequestBody`,
    url: (_) => _(_.familyid, _.request_id),
  },
  19: {
    steamidAttribute: `responder_steamid`,
    titleLoc: (_) =>
      _.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle`
        : ``,
    bodyLoc: (_) =>
      _.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestDeclinedBody`
        : ``,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalPlaytimeRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalPlaytimeRequestBody`,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  20: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (_) =>
      _.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseTitleApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined`,
    bodyLoc: (_) =>
      _.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseBodyApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined`,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  21: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (_) =>
      _.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseTitleApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseTitleDeclined`,
    bodyLoc: (_) =>
      _.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseBodyApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseBodyDeclined`,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function _(_) {
  if (_ !== void 0) return _[_];
}
function _(_) {
  return !!_(_);
}
var _ = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function _(_) {
  return _.findIndex((_) => _ == _) != null;
}
function _(_) {
  return !_.hidden && _(_.notification_type) && _(_.body_data);
}
function _(_) {
  return _(_) || _(_) || _(_);
}
var _ = new _(`SteamNotificationStore`),
  _ = _.Debug,
  _ = _.Error,
  _ = _.Warning,
  _ = class {
    constructor() {
      _(this);
    }
    m_rgNotificationRollups = [];
    m_summary = _();
    m_bLoaded = !1;
    m_nUnviewed = 0;
    m_rgNotifyServerRead = [];
    m_rgNotifyServerHidden = [];
    m_keyNotifyServerRead = ``;
    m_keyNotifyServerHidden = ``;
    m_steamid;
    m_transport;
    m_rgUnreadNotificationIDs = [];
    m_rgNewRollupIDs = new Map();
    m_rgTestNotifications = [];
    m_currentNotificationsData = null;
    m_strRemoteClientID = ``;
    m_eTargetClientType = 0;
    m_fnOnNotificationCallback = null;
    BHasNotificationsData() {
      return this.m_currentNotificationsData != null;
    }
    setTransport(_) {
      this.m_transport = _;
    }
    RegisterOnNotificationCallback(_) {
      this.m_fnOnNotificationCallback = _;
    }
    SetClientFilters(_, _ = 0) {
      (this.m_strRemoteClientID = _), (this.m_eTargetClientType = _);
    }
    NotifyServerNotificationsRead(_) {
      this.m_rgNotifyServerRead.push(..._), this.UpdateServer();
    }
    NotifyServerNotificationsHidden(_) {
      this.m_rgNotifyServerHidden.push(..._), this.UpdateServer();
    }
    BSendToCallbackAsNew(_) {
      return (
        !_.read &&
        !_(_) &&
        !this.m_rgUnreadNotificationIDs.includes(_.notification_id)
      );
    }
    Dev_AddTestNotification(_) {}
    Dev_UpdateTestNotificationReadState(_, _) {
      let _ = this.m_rgTestNotifications.findIndex(
        (_) => _.notification_id == _,
      );
      return (
        _ !== -1 &&
        this.m_rgTestNotifications[_].read != _ &&
        ((this.m_rgTestNotifications[_].read = _), !0)
      );
    }
    UpdateServer() {
      if (this.m_rgNotifyServerRead.length > 0) {
        let _ = _.Init(_);
        _.Body().set_notification_ids(this.m_rgNotifyServerRead),
          _.MarkNotificationsRead(this.m_transport, _) &&
            (this.m_rgNotifyServerRead = []);
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let _ = _.Init(_);
        _.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          _.HideNotification(this.m_transport, _) &&
            (this.m_rgNotifyServerHidden = []);
      }
    }
    MarkItemRead(_, _ = !1) {
      let _ = this.m_rgNotificationRollups.findIndex(
        (_) => _.item.notification_id == _,
      );
      if (_ === -1) {
        _
          ? this.NotifyServerNotificationsRead([_])
          : _(
              `Attempted to mark notification read that is not in the notification store`,
            );
        return;
      }
      let _ = this.m_rgNotificationRollups[_];
      if (_.item.read)
        _(`Attempted to mark notification read that is already read`);
      else if (((_.item.read = !0), _.rgunread?.length > 0)) {
        this.ReduceNewTotals(_.type, _.rgunread.length);
        let _ = [];
        _.rgunread.forEach((_) => {
          _.push(_);
        }),
          _.rgread.push(..._.rgunread),
          (_.rgunread = []),
          this.NotifyServerNotificationsRead(_);
      }
    }
    MarkItemHidden(_) {
      let _ = this.m_rgNotificationRollups.findIndex(
        (_) => _.item.notification_id == _,
      );
      if (_ === -1) {
        _(
          `Attempted to mark notification hidden that is not in the notification store`,
        );
        return;
      }
      let _ = this.m_rgNotificationRollups[_];
      (_.item.hidden = !0),
        _.rgunread?.length > 0 &&
          this.ReduceNewTotals(_.type, _.rgunread?.length),
        this.NotifyServerNotificationsHidden([..._.rgunread, ..._.rgread]);
    }
    ReduceNewTotals(_, _) {
      _(this.m_summary, _, -_);
    }
    MarkAllItemsViewed() {
      let _ = _.Init(_);
      _.Body().set_remote_client_id(this.m_strRemoteClientID),
        _.Body().set_target_client_type(this.m_eTargetClientType),
        _.MarkNotificationsViewed(this.m_transport, _),
        (this.m_nUnviewed = 0);
    }
    MarkAllItemsRead(_) {
      let _ = [],
        _ = [],
        _ = _ ?? this.m_rgNotificationRollups;
      return (
        _.forEach((_, _) => {
          _.rgunread.length > 0 &&
            (_.rgunread.forEach((_) => {
              _.push(_);
            }),
            _.push(_));
        }),
        _.length > 0 &&
          ((this.m_summary = Object.assign(_(), {
            pending_gifts: this.m_summary.pending_gifts,
            pending_invites: this.m_summary.pending_invites,
            pending_family_invites: this.m_summary.pending_family_invites,
          })),
          _.forEach((_) => {
            let _ = _[_];
            (_.item.read = !0), (_.rgunread = []);
          }),
          this.NotifyServerNotificationsRead(_)),
        _.length + 0
      );
    }
    ApplyNotificationsUpdate(_) {
      if (
        (_(`ApplyNotificationsUpdate`, _),
        !_ ||
          (!_.notifications?.length &&
            _.pending_friend_count === void 0 &&
            _.pending_gift_count === void 0))
      ) {
        _(`Error: ApplyNotificationsUpdate was called with no data`);
        return;
      }
      if (!this.m_currentNotificationsData) {
        _(
          `Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set`,
        );
        return;
      }
      let _ = this.m_currentNotificationsData;
      _.notifications?.forEach((_) => {
        let _ = _.notifications.findIndex(
          (_) => _.notification_id == _.notification_id,
        );
        _ == -1
          ? _.notifications.push(_)
          : Object.assign(_.notifications[_], _);
      }),
        _.pending_friend_count !== void 0 &&
          (this.m_currentNotificationsData.pending_friend_count =
            _.pending_friend_count),
        _.pending_gift_count !== void 0 &&
          (this.m_currentNotificationsData.pending_gift_count =
            _.pending_gift_count),
        _.pending_family_invite_count !== void 0 &&
          (this.m_currentNotificationsData.pending_family_invite_count =
            _.pending_family_invite_count),
        this.ProcessNotifications();
    }
    ProcessNewNotificationPayload(_) {
      (this.m_currentNotificationsData = JSON.parse(JSON.stringify(_))),
        this.ProcessNotifications();
    }
    ProcessNotifications() {
      let _ = [],
        _ = _(),
        _ = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((_) => {
          this.BExcludeClientTargetedNotification(_) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (_) => _ == _.notification_id,
              ) !== -1 &&
              (_.hidden = !0),
            _(_) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (_) => _ == _.notification_id,
                ) !== -1 &&
                (_.read = !0),
              _.read || _(_, _.notification_type, 1),
              _.viewed || _++,
              this.AddNotificationToRollups(_, _)));
        }),
        _.sort((_, _) => _.timestamp - _.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let _ of _)
          if (_.bSendToCallbackAsNew)
            this.m_rgNewRollupIDs.set(
              _.rollup_key,
              JSON.parse(JSON.stringify(_)),
            ),
              this.m_fnOnNotificationCallback(_, 0);
          else if (this.m_rgNewRollupIDs.has(_.rollup_key)) {
            let _ = this.m_rgNewRollupIDs.get(_.rollup_key);
            (_.item.read != _.item.read || _.item.viewed != _.item.viewed) &&
              (this.m_rgNewRollupIDs.set(
                _.rollup_key,
                JSON.parse(JSON.stringify(_)),
              ),
              this.m_fnOnNotificationCallback(_, 1));
          }
        for (let [_, _] of this.m_rgNewRollupIDs)
          _.findIndex((_) => _.rollup_key == _) == -1 &&
            (this.m_fnOnNotificationCallback(_, 2),
            this.m_rgNewRollupIDs.delete(_));
      }
      _.reverse(),
        (_.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (_.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (_.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = _.slice()),
        (this.m_summary = _),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = _);
    }
    BExcludeClientTargetedNotification(_) {
      let _ = _(_.body_data);
      return _
        ? !!(
            (_.remote_client_id &&
              this.m_strRemoteClientID != _.remote_client_id) ||
            (_.target_client_types &&
              !(this.m_eTargetClientType & _.target_client_types))
          )
        : !1;
    }
    BReplaceRollupItem(_, _) {
      return _.read == _.read
        ? (_.read && _.read) || _.viewed == _.viewed
          ? _.timestamp < _.timestamp
          : !_.viewed && _.viewed
            ? !0
            : _.viewed && _.viewed
              ? _.viewed < _.viewed
              : !1
        : _.read;
    }
    AddNotificationToRollups(_, _) {
      let _ = this.BSendToCallbackAsNew(_);
      _ && this.m_rgUnreadNotificationIDs.push(_.notification_id);
      let _ = _.notification_type;
      switch (_) {
        case 3:
          {
            let _ = _(_);
            if (!_) return;
            let _ =
                `comment_` +
                _.owner_steam_id?.GetAccountID() +
                `_` +
                _.forum_id +
                `_` +
                _.topic_id +
                (_.brate_limited ? `_ratelimited` : ``),
              _ = _.findIndex((_) => _.rollup_key == _);
            if (_ == -1)
              _.push({
                type: _,
                rollup_key: _,
                item: _,
                rollup_count: 1,
                timestamp: _.timestamp,
                rgunread: _.read ? [] : [_.notification_id],
                rgread: _.read ? [_.notification_id] : [],
                bSendToCallbackAsNew: _,
                url: _(_),
              });
            else {
              let _ = _[_];
              this.BReplaceRollupItem(_, _.item) &&
                ((_.url = _(_)),
                (_.item = _),
                (_.timestamp = _.timestamp),
                (_.bSendToCallbackAsNew = _)),
                (_.rollup_count += 1),
                _.read
                  ? _.rgread.push(_.notification_id)
                  : _.rgunread.push(_.notification_id);
            }
          }
          break;
        case 4:
          let _ = _(_);
          if (_) {
            let _ = `item_` + _.appid;
            this.AddNotificationToRollupByAppID(_, _, _, _, _, _.appid);
          }
          break;
        case 12:
          let _ = _(_)?.appid.toString();
          if (_) {
            let _ = `asyncgame_` + _;
            this.AddNotificationToRollupByAppID(_, _, _, _, _, _);
          }
          break;
        case 30:
          let _ = _(_),
            _ = _?.report_id,
            _ = _(_),
            _ = `contentreport_${_}`,
            _ = _.findIndex((_) => _.rollup_key == _);
          if (_ == -1)
            _.push({
              type: _,
              rollup_key: _,
              item: _,
              rollup_count: 1,
              timestamp: _.timestamp,
              rgunread: _.read ? [] : [_.notification_id],
              rgread: _.read ? [_.notification_id] : [],
              bSendToCallbackAsNew: _,
              url: _,
            });
          else {
            let _ = _[_];
            this.BReplaceRollupItem(_, _.item) &&
              ((_.url = _),
              (_.item = _),
              (_.timestamp = _.timestamp),
              (_.bSendToCallbackAsNew = _)),
              (_.rollup_count += 1),
              _.read
                ? _.rgread.push(_.notification_id)
                : _.rgunread.push(_.notification_id);
          }
          break;
        default:
          _.push({
            type: _,
            rollup_key: _.notification_id,
            item: _,
            timestamp: _.timestamp,
            rgunread: _.read ? [] : [_.notification_id],
            rgread: _.read ? [_.notification_id] : [],
            bSendToCallbackAsNew: _,
          });
      }
    }
    AddNotificationToRollupByAppID(_, _, _, _, _, _) {
      let _ = _.findIndex((_) => _.rollup_key == _);
      if (_ == -1)
        _.push({
          type: _,
          rollup_key: _,
          item: _,
          rollup_count: 1,
          timestamp: _.timestamp,
          rgunread: _.read ? [] : [_.notification_id],
          rgread: _.read ? [_.notification_id] : [],
          bSendToCallbackAsNew: _,
        });
      else {
        let _ = _[_];
        this.BReplaceRollupItem(_, _.item) &&
          ((_.item = _),
          (_.timestamp = _.timestamp),
          (_.bSendToCallbackAsNew = _)),
          (_.rollup_count += 1),
          _.read
            ? _.rgread.push(_.notification_id)
            : _.rgunread.push(_.notification_id);
      }
    }
  };
_([_], _.prototype, `m_rgNotificationRollups`, void 0),
  _([_], _.prototype, `m_summary`, void 0),
  _([_], _.prototype, `m_bLoaded`, void 0),
  _([_], _.prototype, `m_nUnviewed`, void 0),
  _([_], _.prototype, `ProcessNotifications`, null);
function _() {
  return {
    comments: 0,
    inventory_items: 0,
    invites: 0,
    gifts: 0,
    offline_messages: 0,
    trade_offers: 0,
    async_game_updates: 0,
    moderator_messages: 0,
    help_request_replies: 0,
    general: 0,
    wishlist: 0,
    pending_gifts: 0,
    pending_invites: 0,
    major_sale: 0,
    parental_feature_requests: 0,
    family_invites: 0,
    family_purchase_requests: 0,
    family_purchase_request_responses: 0,
    pending_family_invites: 0,
    parental_playtime_requests: 0,
    parental_feature_access_responses: 0,
    parental_playtime_responses: 0,
    requested_game_added: 0,
    playtest_invites: 0,
  };
}
async function _(_, _, _, _, _, _ = !0, _ = !1) {
  if (!_) throw Error(`Invalid steamid for GetSteamNotifications`);
  let _ = _.Init(_);
  _.Body().set_language(_),
    _.Body().set_include_read(_),
    _.Body().set_include_pinned_counts(!0),
    _.Body().set_include_confirmation_count(_);
  let _ = await _.GetSteamNotifications(_, _);
  if (_.GetEResult() !== 1)
    throw (
      (_(
        `Received error from GetSteamNotifications. Result ${_.GetEResult()}. Transport ${_.Hdr().transport_error()}`,
      ),
      Error(`Error from GetSteamNotifications: ${_.GetEResult()}`))
    );
  let _ = _.Body().toObject();
  return (
    _ &&
      (_.notifications = _.notifications?.filter(
        (_) => !_(_.notification_type, _, _),
      )),
    _
  );
}
async function _(_, _) {
  if (!_ || !_.steamid || !_.contextid || !_.appid || !_.assetid)
    return _(`Item notification missing required attributes`), null;
  let _ = _.Init(_);
  _.Body().set_steamid(_.steamid),
    _.Body().set_contextid(_.contextid),
    _.Body().set_appid(parseInt(_.appid)),
    _.Body().set_get_descriptions(!0),
    _.Body().set_language(_.LANGUAGE);
  let _ = new _();
  _.add_assetids(_.assetid), _.Body().set_filters(_);
  let _ = await _.GetInventoryItemsWithDescriptions(_, _);
  return _.GetEResult() === 1
    ? (_.Body().toObject().descriptions[0] ?? null)
    : (_(`Request for steam item metadata did not succeed`, _.GetEResult()),
      null);
}
var _ = `ItemMetadata`;
function _(_) {
  return [`${_}_${_?.steamid}_${_?.appid}_${_?.contextid}_${_?.assetid}`];
}
function _(_, _, _) {
  let _ = _(4, _.body_data);
  _.steamid = _;
  let _ = _({
    queryKey: _(_),
    queryFn: async () => _(_, _),
    staleTime: 1 / 0,
  });
  return _.isSuccess ? _.data : null;
}
function _(_) {
  let _ = `comment/${_.comment_type}/bounce/${_.owner_steam_id.ConvertTo64BitString()}/${_.forum_id}/?feature2=${_.topic_id}`;
  return _.last_post > 0 && (_ += `&tscn=` + (_.last_post - 1)), _;
}
function _(_) {
  return _.comment_type == 10;
}
function _(_) {
  return _?.bhas_friend;
}
function _(_) {
  return _.comment_type == 10;
}
function _(_) {
  return _(_) || _(_);
}
function _(_) {
  return _(_);
}
function _(_) {
  if (!_) return null;
  try {
    return JSON.parse(_);
  } catch {
    _(`Steam notification in invalid format:`, _);
  }
  return null;
}
function _(_) {
  return _(_.notification_type, _.body_data);
}
function _(_) {
  return _(_.type, _.item?.body_data);
}
function _(_, _) {
  let _ = _(_);
  if (!_) return null;
  switch (_) {
    case 2:
      return _.gifter_account;
    case 22:
      return {
        responder_steamid: _.responder_steamid,
        package_id: _.package_id,
        bundle_id: _.bundle_id,
      };
    case 9:
      return parseInt(_.sender);
    case 8:
      return {
        appid: _.appid,
        count: _.count ?? 1,
        appids: _.appids ?? [],
      };
    case 12:
      return !_.appid || !_.state || (_.state != 1 && _.state != 2)
        ? (_(`Async game notification invalid data`, _), null)
        : {
            appid: parseInt(_.appid),
            state: parseInt(_.state),
          };
    case 3:
      let _ = {
        owner_steam_id: _.owner_steam_id ? new _(_.owner_steam_id) : null,
        bclan_account: _(_.bclan_account),
        title: _.title,
        comment: _.text,
        time: _.last_post,
        comment_type: Number(_.type),
        topic_id: _.topic_id,
        forum_id: _.forum_id,
        account_steam_id: _.account_id
          ? _.InitFromAccountID(_.account_id, _.EUNIVERSE)
          : null,
        bhas_friend: _(_.bhas_friend),
        bis_forum: _(_.bis_forum),
        last_post: _.last_post,
        bsubscribed: _(_.subscribed),
        bis_owner: _(_.bis_owner),
        brate_limited: !!_.brate_limited,
      };
      return (
        _.json_data &&
          (_.json_data = {
            app_id: parseInt(_.json_data.app_id),
            file_type: parseInt(_.json_data.file_type),
            title: _.json_data.title,
          }),
        _
      );
    case 5:
      return {
        requestorID: parseInt(_.requestor_id),
        state: _.state ? parseInt(_.state) : 0,
      };
    case 4:
      return {
        appid: parseInt(_.app_id),
        assetid: _.asset_id ?? ``,
        contextid: _.context_id ?? ``,
      };
    case 23:
      return {
        url: _.url ?? ``,
        strGameName: _.content_app_name ?? ``,
        mediaType: _.media_type ?? `clip`,
        secDuration: parseFloat(_.duration_seconds ?? 0),
        nSize: parseInt(_.file_size ?? 0),
        strMachineName: _.machine_name,
        rtExpiration: _.expiration,
        thumbnailURL: _.thumbnail_url,
      };
    case 30:
      return {
        report_id: _.report_id ?? ``,
        reported_content_id: _.reported_content_id ?? ``,
        subject_type: _.subject_type ?? 0,
        subject_group_id: _.subject_group_id ?? `0`,
        subject_id: _.subject_id ?? `0`,
        status: _.status ?? 0,
      };
    default:
      return (
        _(
          `GetCustomNotificationDataByType called with unexpected type:` + _,
          _,
        ),
        null
      );
  }
}
function _(_) {
  if (_ === void 0) return !1;
  if (typeof _ == `number`) return _ > 0;
  if (typeof _ == `string`)
    switch (_.toLowerCase()?.trim()) {
      case `true`:
      case `1`:
        return !0;
      default:
        return !1;
    }
  return _(`notification contained unexpected boolean value`), !1;
}
var _ = {
  0: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  1: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  2: {
    rollup_field: `gifts`,
    eFeature: 0,
  },
  3: {
    rollup_field: `comments`,
    eFeature: 2,
  },
  4: {
    rollup_field: `inventory_items`,
    eFeature: 3,
  },
  5: {
    rollup_field: `invites`,
    eFeature: 4,
  },
  6: {
    rollup_field: `major_sale`,
    eFeature: 1,
  },
  7: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  8: {
    rollup_field: `wishlist`,
    eFeature: 1,
  },
  9: {
    rollup_field: `trade_offers`,
    eFeature: 6,
  },
  10: {
    rollup_field: `general`,
    eFeature: 0,
  },
  11: {
    rollup_field: `help_request_replies`,
    eFeature: 0,
  },
  12: {
    rollup_field: `async_game_updates`,
    eFeature: 0,
  },
  14: {
    rollup_field: `moderator_messages`,
    eFeature: 2,
  },
  15: {
    rollup_field: `parental_feature_requests`,
    eFeature: 0,
  },
  16: {
    rollup_field: `family_invites`,
    eFeature: 0,
  },
  17: {
    rollup_field: `family_purchase_requests`,
    eFeature: 0,
  },
  18: {
    rollup_field: `parental_playtime_requests`,
    eFeature: 0,
  },
  19: {
    rollup_field: `family_purchase_request_responses`,
    eFeature: 0,
  },
  20: {
    rollup_field: `parental_feature_access_responses`,
    eFeature: 0,
  },
  21: {
    rollup_field: `parental_playtime_responses`,
    eFeature: 0,
  },
  22: {
    rollup_field: `requested_game_added`,
    eFeature: 0,
  },
  23: {
    rollup_field: void 0,
    eFeature: 0,
  },
  24: {
    rollup_field: void 0,
    eFeature: 0,
  },
  28: {
    rollup_field: `playtest_invites`,
    eFeature: 1,
  },
  29: {
    rollup_field: void 0,
    eFeature: 6,
  },
  30: {
    rollup_field: void 0,
    eFeature: 0,
  },
};
function _(_) {
  let _ = _[_];
  return _(!!_, `Missing notification type data for ${_}`), _;
}
function _(_, _, _) {
  return _ ? _(_, _(_)?.eFeature ?? 15, _) : !1;
}
function _(_, _, _) {
  _(() => {
    let _ = _(_);
    _?.rollup_field && (_[_.rollup_field] = Math.max(0, _[_.rollup_field] + _));
  });
}
function _(_) {
  return !_.viewed || _.viewed + 600 > _();
}
function _(_) {
  return _.viewed && _.viewed + 172800 < _();
}
var _ = `G1P1ZyqJjf8-`,
  _ = `j7G2Xdjlpp0-`,
  _ = `ZMdQZMoa6-U-`,
  _ = `jbaf5CQ2gQo-`,
  _ = `-u7X0tUkT0E-`,
  _ = `_-4o7kXvT1FQ-`,
  _ = `_37ioG1fiLLw-`,
  _ = `CqOZwXoHdIk-`,
  _ = `_-4qRmRIQUJY-`,
  _ = `GjVvP3msmeo-`,
  _ = `Fr9368rly38-`,
  _ = `NhXEc5eqRTY-`,
  _ = `ozCVufQ1zlM-`,
  _ = `OLmpJQg1UuI-`,
  _ = `wMc-2OhaLHs-`,
  _ = `JS5ae4rPqsE-`;
function _(_) {
  if (!_) return;
  let _ = typeof _ == `string` ? _ : _.locString,
    _ = typeof _ == `string` ? [] : _.params || [];
  if (_) return _[0] === `#` ? _(_, ..._) : _;
}
function _(_, _) {
  return _.useMemo(() => {
    if (_ === void 0) return null;
    let _ = _(_),
      _ = _(_);
    if (!_ || !_) return null;
    let _ =
        typeof _.displayNameLoc == `function`
          ? _.displayNameLoc(_)
          : {
              locString: _.displayNameLoc,
            },
      _ =
        typeof _.titleLoc == `function`
          ? _.titleLoc(_)
          : {
              locString: _.titleLoc,
            },
      _ =
        typeof _.bodyLoc == `function`
          ? _.bodyLoc(_)
          : {
              locString: _.bodyLoc,
            },
      _ = typeof _.image == `function` ? _.image(_) : _.image,
      _ = typeof _.link == `function` ? _.link(_) : _.link;
    return {
      display_name: _(_),
      title: _(_),
      body: _(_),
      image: _,
      link: _,
    };
  }, [_, _]);
}
function _(_, _) {
  return _.useMemo(() => {
    let _ = _(_),
      _ = _(_);
    if (!_) return null;
    let _ = typeof _.titleLoc == `string` ? _.titleLoc : _.titleLoc(_),
      _ = typeof _.bodyLoc == `string` ? _.bodyLoc : _.bodyLoc(_),
      _ = typeof _.url == `string` ? _.url : _.url(_),
      _ =
        typeof _.steamidAttribute == `string`
          ? _.steamidAttribute
          : _.steamidAttribute(_);
    return {
      strTitleLoc: _,
      strBodyLoc: _,
      strUrl: _,
      steamid: _ && _[_],
    };
  }, [_, _]);
}
function _(_) {
  return _.useMemo(() => (_(_.type) ? _(_) : null), [_]);
}
var _ = `tY1EfG-Owy8-`,
  _ = `zIg9T02-llM-`,
  _ = `I6MOv-xqRws-`,
  _ = `-tSLzlbmqds-`,
  _ = `v0SP64JQDEM-`,
  _ = `yMf71xU3HuI-`,
  _ = `xt4PaC5WZEw-`,
  _ = `lYapceyg6RI-`,
  _ = `UEAh4EwAaiI-`,
  _ = `_4AbLh9tgdX0-`,
  _ = `_6Wb0DKY8LYE-`,
  _ = `EE4FCo73JHk-`,
  _ = `t73yKAPBCZA-`,
  _ = `Ng03JSo5DeM-`,
  _ = `u7UU3gQ7zdw-`,
  _ = `AYgbbhSuWG4-`,
  _ = `hd0VQaHUodE-`,
  _ = `VQhF4ONTz8k-`,
  _ = `kRyQpzGJdiM-`,
  _ = `BX63D1we1O0-`,
  _ = `dhhFvcPsBgU-`,
  _ = `EQ7VoRigF0g-`,
  _ = `_8FA0qZoDHSY-`,
  _ = `cDXpehjV14s-`,
  _ = `eEEZIDH8xLE-`,
  _ = `RSEUPJivDYc-`,
  _ = `vrt0VjL-l5c-`,
  _ = _();
function _(_) {
  let { onActivate: _, icon: _, body: _, eUIMode: _, classNames: _ } = _,
    _ = _,
    _ = _;
  return (
    _ == 7 ? (_ = _) : _ == 3 && (_ = _),
    (_ = _(_, _)),
    (0, _.jsx)(_, {
      className: _,
      onActivate: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              children: _,
            }),
            _,
          ],
        }),
      }),
    })
  );
}
function _(_) {
  let {
    count: _,
    icon: _,
    onActivate: _,
    strBody: _,
    bAlwaysShow: _,
    eUIMode: _,
    classNames: _,
    visible: _,
  } = _;
  return !_ && !_
    ? null
    : (0, _.jsx)(_, {
        icon: _,
        body: _,
        onActivate: _,
        eUIMode: _,
        classNames: _,
        visible: _,
      });
}
function _(_) {
  let {
      nUnread: _,
      location: _,
      eUIMode: _,
      bLoading: _,
      footer: _,
      bNewIndicator: _,
    } = _,
    [_, _] = _.useState(+!!_),
    [_, _] = _.useState(void 0);
  _.useEffect(() => {
    _ == 1 && !_ ? _(2) : _ == 2 && _ && _(1);
  }, [_, _]),
    _.useEffect(() => {
      let _ = window.setTimeout(() => _(0), 2e4);
      return () => window.clearTimeout(_);
    }, []),
    _.useEffect(() => {
      _ && _ > 0 && _ !== `BX63D1we1O0-` && _ != 2 && _ != 1
        ? _(_)
        : !_ && _ == `BX63D1we1O0-` && _(_);
    }, [_, _, _]);
  let _ = _.onActivate;
  (_ ||= () => console.log(`Missing activate function`)),
    _ == 1 && (_ = void 0);
  let _ = _;
  _ == 4 ? (_ = _) : _ == 2 ? (_ = _) : (_ == 7 || _ == 3) && (_ = _);
  let _ = null;
  if (_ != 0 && _ != 2 && _ != 1) {
    let _ = _ == 2 ? _ : null;
    _ = (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, _),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
          ],
        }),
      ],
    });
  }
  return (0, _.jsxs)(_, {
    onActivate: _,
    className: _,
    onOptionsButton: _.onOptionsButton,
    onOptionsActionDescription: _.onOptionsButtonDesc,
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.logo,
          }),
          _.personaStatus &&
            (0, _.jsx)(`div`, {
              className: _(`HVFuDe6Cc6s-`, _.personaStatus),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.children,
          }),
          _,
          _ &&
            (0, _.jsx)(_, {
              location: _,
            }),
        ],
      }),
      _ || null,
    ],
  });
}
function _(_) {
  let { location: _ } = _;
  return _ == 3
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      })
    : null;
}
function _(_) {
  let {
      icon: _,
      title: _,
      timestamp: _,
      location: _,
      fnRenderTimestamp: _,
    } = _,
    _ = !!_ && (_ == 3 || _ == 4),
    _;
  return (
    (_ = _ == 4 ? _ : (_ ?? _)),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          icon: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            title: _,
          }),
        _ &&
          _({
            timestamp: _,
          }),
      ],
    })
  );
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !!_.icon &&
        (0, _.jsx)(`div`, {
          className: `UEAh4EwAaiI-`,
          children: _.icon,
        }),
      ` `,
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.title,
  });
}
function _(_) {
  let _ = _(_, _.multiline && `_2OxPAJkmSGo-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _(_, _.multiline && `_2OxPAJkmSGo-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  if (_.timestamp === void 0) return null;
  let _ = new Date(),
    _ = new Date(_.timestamp * 1e3),
    _ = _(_.timestamp);
  return (
    _(_, _) || (_ = _(_.timestamp, !1, !1, !1) + ` ` + _),
    (0, _.jsx)(`div`, {
      className: _,
      children: _,
    })
  );
}
function _(_) {
  if (_.timestamp === void 0) return null;
  let _ = new Date(),
    _ = new Date(_.timestamp * 1e3),
    _ = _(_, _) ? _(_.timestamp) : _(_.timestamp, !1, !1, !1);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _(_) {
  return _ == 1;
}
function _(_, _) {
  return _.useCallback(
    (_) => {
      _ && _(_), _ && _();
    },
    [_, _],
  );
}
var _ = `G7ABJ-RQDcQ-`,
  _ = `_1NSylN56FaA-`,
  _ = `Z-eNHLrSoUE-`,
  _ = `-MhinKS0EHQ-`,
  _ = `_4HwSF-VGLww-`,
  _ = `KMjz9RgqVfY-`,
  _ = `NuPVm1AZ2k8-`,
  _ = `vr0mrg2-prM-`;
function _(_) {
  let {
      onActivate: _,
      onDismiss: _,
      logo: _,
      icon: _,
      title: _,
      body: _,
      personaStatus: _,
      className: _,
      singleLineOnly: _,
      fullWidth: _,
      bodySuffix: _,
      bodySuffixToken: _,
    } = _,
    _ = _(_, _);
  return (
    _ &&
      _ &&
      (_ = _(
        _,
        (0, _.jsx)(`span`, {
          className: _,
          children: _,
        }),
        (0, _.jsx)(`span`, {
          className: _,
          children: _,
        }),
      )),
    (0, _.jsxs)(_, {
      className: _(_, !_ && !_ && `qz3r-n3YPnk-`, _),
      onActivate: _,
      onMouseDown: (_) => {
        _.button == 1 && _ && _();
      },
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        _.personaStatus &&
          (0, _.jsx)(`div`, {
            className: _(`ZaR0T0hRhb8-`, _),
          }),
        (0, _.jsxs)(`div`, {
          className: _(_, _ && `B-ehFiwCqak-`),
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                !!_ &&
                  (0, _.jsx)(`div`, {
                    className: `vp1KFLrEqtk-`,
                    children: _,
                  }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _(_, !!_ && `zeLnVFV5194-`),
              children: _,
            }),
          ],
        }),
      ],
    })
  );
}
var _ = `_2dS5rsyxZco-`,
  _ = `_7Tu2PI3hMyU-`,
  _ = `FoBa248GpXI-`,
  _ = `GcHxM19mGd0-`,
  _ = `xS3Y4nbmtYg-`,
  _ = `zbcKxz2FaQU-`;
function _(_) {
  switch (_) {
    case 6:
      return (0, _.jsx)(_, {});
    case 11:
      return (0, _.jsx)(_, {});
    default:
      return (0, _.jsx)(_, {});
  }
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = typeof _?.image == `number`,
    _ = _
      ? {
          appid: _.image,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _?.display_name ?? ``,
    _ = _?.title ?? _?.body,
    _ = _?.title ? _.body : null,
    _ = _(_),
    _ = _ && (!_ || !_),
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = null;
  if (_) _ = _(_, _, _);
  else {
    let _ = _ ? _ : _;
    _ =
      _?.image && !_
        ? (0, _.jsx)(`img`, {
            className: _,
            src: _.image,
            onError: _,
          })
        : _;
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      displayName: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(`#SteamNotifications_TradeOffer_Title`),
    _ = _
      ? _(`#SteamNotifications_TradeOffer_Body_Short`, _ ?? ``)
      : _(`#SteamNotifications_TradeOffer_Body`),
    _ = _(`#SteamNotifications_TradeOffer_Description`, _ ?? ``),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
var _ = (_) => {
  let {
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(`#SteamNotifications_TradeReversal_Title`),
    _ = _(
      _
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    _ = _(`#SteamNotifications_TradeReversal_Description`);
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
};
function _(_) {
  let {
      senderName: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _
      ? _(`#Notification_GiftReceived_Body_Short`, _ ?? ``)
      : _(`#Notification_GiftReceived_Body`),
    _ = _ ? _(`#Notification_GiftReceived_Description`, _) : null,
    _ = _(`#Notification_GiftReceived_Title`),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      requestorName: _,
      requestorAvatarURL: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = ``;
  _ && _.state == 2
    ? (_ = _(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : _ && _.state == 3
      ? (_ = _(`#SteamNotifications_FriendInvite_Description_Friends`))
      : _ && (_ = _(`#SteamNotifications_FriendInvite_Description`));
  let [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = _;
  if (_ && !_) {
    let _ = _.state == 3 && _ != 1,
      _ = _ ? _ : _;
    _ = (0, _.jsxs)(_, {
      style: {
        position: `relative`,
      },
      children: [
        _ &&
          (0, _.jsx)(_, {
            className: `QpI8-1z6564-`,
          }),
        (0, _.jsx)(`img`, {
          className: _,
          src: _,
          onError: _,
        }),
      ],
    });
  }
  let _ = _ || _(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#Notification_FriendInvite_Title`),
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _(`#Notification_FriendInvite_Title`),
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      itemState: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      appName: _,
      fnRenderTimestamp: _,
      nUnread: _,
      onHide: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = _(_),
    _ = _;
  if (_?.icon_url && !_) {
    let _ = `${_.COMMUNITY_CDN_URL}economy/image/${_.icon_url}`,
      _ = _.background_color ? `#` + _.background_color : null,
      _ = _ ? _ : _;
    _ = (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: (0, _.jsx)(`img`, {
        className: _,
        style: {
          backgroundColor: _ ?? void 0,
          justifyContent: `center`,
        },
        src: _,
        onError: _,
      }),
    });
  }
  let _ = _.appid == 753,
    _ = null;
  if (_ !== void 0 && _ > 1) {
    let _ = _ - 1;
    _ = _
      ? _(`#Notification_Item_RollupMore_Steam`, _)
      : _
        ? _(`#Notification_Item_RollupMore_GameName`, _, _)
        : _(`#Notification_Item_RollupMore`, _);
  } else _ && (_ = _ ? _ : _(`#Notification_Item_Single_GameName`, _));
  let _ = _?.name ? _.name : _(`#Notification_Item_Body_Generic`),
    _ = !_;
  if (_) {
    let _ = ``;
    return (
      (_ = _
        ? _(
            _ > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            _,
          )
        : _(`#Notification_Item_Body_Generic`)),
      (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#Notification_ItemAnnouncement_Body`),
        body: _,
      })
    );
  }
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      logo: _,
      bLoading: _,
      ..._,
      children: [
        (0, _.jsx)(_, {
          icon: _,
          title: _(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: _,
          location: _,
          fnRenderTimestamp: _,
        }),
        (0, _.jsx)(_, {
          multiline: !_,
          children: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            children: _,
          }),
        _
          ? (0, _.jsx)(_, {
              onHide: _,
            })
          : null,
      ],
    }),
  });
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _.appid
      ? {
          appid: _.appid,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_, _, _),
    _ = _ && (!_ || !_),
    _ = ``;
  return (
    _.state == 1
      ? (_ =
          _ && _?.name
            ? _(`#SteamNotification_AsyncGame_Action_Short`, _.name)
            : _(`#SteamNotification_AsyncGame_Action`))
      : _.state == 2 &&
        (_ =
          _ && _?.name
            ? _(`#SteamNotification_AsyncGame_Done_Short`, _.name)
            : _(`#SteamNotification_AsyncGame_Done`)),
    _
      ? (0, _.jsx)(_, {
          ..._,
          logo: _,
          icon: _.icon,
          title: _(`#SteamNotification_AsyncGame_Title`),
          body: _,
        })
      : (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            logo: _,
            bLoading: _,
            ..._,
            children: [
              (0, _.jsx)(_, {
                icon: _,
                title: _(`#SteamNotification_AsyncGame_Title`),
                timestamp: _,
                location: _,
                fnRenderTimestamp: _,
              }),
              (0, _.jsx)(_, {
                children: _,
              }),
              (0, _.jsx)(_, {
                children: _?.name,
              }),
              _
                ? (0, _.jsx)(_, {
                    onHide: _,
                  })
                : null,
            ],
          }),
        })
  );
}
function _(_) {
  let {
      title: _,
      body: _,
      logoUrl: _,
      bDataLoading: _,
      icon: _,
      onHide: _,
      location: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onActivate: _,
      personaStatus: _,
    } = _,
    _ = _(_),
    _ = _ ? _ : _,
    _ = (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: (0, _.jsx)(`img`, {
        className: _,
        style: {
          justifyContent: `center`,
        },
        src: _,
      }),
    });
  return _
    ? (0, _.jsx)(_, {
        logo: _,
        icon: _.icon,
        title: _,
        body: _,
        onActivate: _,
        personaStatus: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          onActivate: _,
          personaStatus: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !0,
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      currentUserSteamID: _,
      fallbackLogo: _,
      postedByDisplayName: _,
      postedByAvatarURL: _,
      ownerDisplayName: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      nUnread: _,
      appName: _,
      onHide: _,
      commentTitle: _,
      commentBody: _,
    } = _,
    _ = _,
    _ = _(_),
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    [_, _] = _(_.bclan_account ? _.owner_steam_id?.GetAccountID() : void 0),
    _ = _(_) ? _ : null,
    _ = _(_) ? _ : null;
  _.comment_type == 10
    ? (_ =
        _.owner_steam_id?.ConvertTo64BitString() == _
          ? _ == 4 && _
            ? _(`#SteamNotifications_Comment_Your_Profile_By`, _)
            : _(`#SteamNotifications_Comment_Your_Profile`)
          : _
            ? _ == 4 && _
              ? _(`#SteamNotifications_Comment_Player_Profile_By`, _, _)
              : _(`#SteamNotifications_Comment_Player_Profile`, _)
            : _(`#SteamNotifications_Comment_Profile`))
    : _.comment_type == 5 && _.json_data?.file_type == 5
      ? (_ =
          _.owner_steam_id?.ConvertTo64BitString() == _
            ? _
              ? _(`#SteamNotifications_Comment_Your_Screenshot_Game`, _)
              : _(`#SteamNotifications_Comment_Your_Screenshot`)
            : _
              ? _(`#SteamNotifications_Comment_Screenshot_Game`, _)
              : _(`#SteamNotifications_Comment_Screenshot`))
      : !_ && _.json_data?.title && (_ = _.json_data.title);
  let _ = null;
  _.brate_limited
    ? (_ =
        _.comment_type == 7 && _.bis_forum && _
          ? _(`#SteamNotifications_Comment_RateLimited_Forum`, _)
          : _(`#SteamNotifications_Comment_RateLimited`))
    : (_ =
        _.comment_type == 7 && _.bis_forum && _
          ? (0, _.jsx)(_, {
              children: _(`#SteamNotifications_Comment_NewDiscussion`, _),
            })
          : (0, _.jsxs)(_, {
              children: [`"`, _, `"`],
            }));
  let _ = _(`#SteamNotifications_Comment`),
    _ = null;
  if (_ !== void 0 && _ > 1) {
    let _ = `+` + (_ - 1);
    _ == 4
      ? (_ = (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }))
      : (_ = _ + ` ` + _);
  }
  let _ = _;
  if (!_) {
    let _ = _ ? _ : _;
    if (_ && _(_)) {
      let _ = _.bhas_friend && _ != 1;
      _ = (0, _.jsxs)(`div`, {
        style: {
          position: `relative`,
        },
        children: [
          _ &&
            (0, _.jsx)(_, {
              className: `QpI8-1z6564-`,
            }),
          (0, _.jsx)(`img`, {
            className: _,
            src: _,
            onError: _,
          }),
        ],
      });
    } else
      _?.avatar_medium_url &&
        (_ = (0, _.jsx)(`img`, {
          className: _,
          src: _.avatar_medium_url,
          onError: _,
        }));
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _,
            _,
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _.appid
      ? {
          appid: _.appid,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_, _, _),
    _ = _ && (!_ || !_ || !_),
    _ = ``,
    _ = null;
  if (_) {
    let _ = _.name ?? ``;
    (_ = _),
      _.count == 1
        ? _
          ? (_ = _(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, _.jsx)(`span`, {
                children: _,
              }),
              (0, _.jsx)(`bdi`, {
                dir: `ltr`,
                style: {
                  color: `#FFFFFF`,
                },
                children: _?.formatted_final_price,
              }),
            ))
          : (_ = _(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, _.jsx)(`bdi`, {
                dir: `ltr`,
                style: {
                  color: `#FFFFFF`,
                },
                children: _?.formatted_final_price,
              }),
            ))
        : _.count == 2
          ? _
            ? (_ = _(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, _))
            : (_ = _(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : _
            ? (_ = _(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                _,
                _.count - 1,
              ))
            : (_ = _(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                _.count - 1,
              ));
  } else _ = _(`#SteamNotifications_Wishlist_Generic`);
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#SteamNotifications_Wishlist`),
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _(`#SteamNotifications_Wishlist`),
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_, _, _ = !1) {
  let [_, _] = _.useState(!1),
    _ = () => _(!0);
  if (!_ || _)
    return (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: _,
    });
  let _ = _(_, `community_icon`);
  return _
    ? (0, _.jsx)(_, {
        style: {
          position: `relative`,
        },
        children: (0, _.jsx)(`img`, {
          src: _,
          className: _,
          onError: _,
        }),
      })
    : (0, _.jsxs)(_, {
        style: {
          position: `relative`,
        },
        children: [
          (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
            onError: _,
          }),
          (0, _.jsx)(`img`, {
            src: _,
            onError: _,
            style: {
              position: `absolute`,
              left: 7,
              top: 7,
              height: 32,
              width: 32,
            },
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    onClick: (_) => {
      _.onHide(), _.stopPropagation(), _.preventDefault();
    },
    onMouseDown: (_) => {
      _.stopPropagation(), _.preventDefault();
    },
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
var _ = null,
  _ = !1;
function _() {
  return (
    (_ ||= new _({
      BIsFriend: _(),
    })),
    _
  );
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(() => _().m_bInitialized);
  return (
    !_ && !_ && ((_ = !0), _.Init(_.accountid, _, _).finally(() => (_ = !1))),
    [_, _]
  );
}
function _(_) {
  let _ = null;
  return _(_) ? (_ = _) : _(_) ? (_ = _) : _[_] && (_ = _[_]), _;
}
function _(_) {
  let { rollup: _, uimode: _, location: _ } = _,
    _ = _(_.type);
  return _
    ? (0, _.jsx)(_, {
        controller: `notification`,
        method: _(_),
        submethod: _(_),
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_.item.notification_type, _.item.body_data),
    _ = _(_.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    _ = _(_?.link ?? `#`, _);
  return (0, _.jsx)(`a`, {
    href: _?.link ? _ : `#`,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      icon: _(_.type),
      onActivate: () =>
        _(() => {
          _?.link && _ && window.location.assign(_);
        }, _.item),
      fallbackLogo: (0, _.jsx)(_, {}),
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = `${_.COMMUNITY_BASE_URL}my/gamenotifications/`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      icon: (0, _.jsx)(_, {}),
      fallbackLogo: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      steamid: _,
      url: _,
      strTitleLoc: _,
      strBodyLoc: _,
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    { data: _ } = _(_),
    _ = (_) => _(() => {}, _.item, _),
    _ = () => _(() => window.location.assign(_), _.item);
  if (!_) return null;
  let _ = !_,
    _ = _(_, _?.m_strPlayerName ?? ``),
    _ = _(_, _?.m_strPlayerName ?? ``);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      title: _,
      body: _,
      bDataLoading: _,
      logoUrl: _?.avatar_url_medium,
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let _ = _(_.rollup.type, _.rollup.item.body_data);
  if (!_) return null;
  let { strTitleLoc: _, strBodyLoc: _, strUrl: _, steamid: _ } = _;
  return !_ || !_ || !_
    ? null
    : (0, _.jsx)(_, {
        steamid: _,
        url: _,
        strTitleLoc: _,
        strBodyLoc: _,
        ..._,
      });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = _(_),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/tradeoffers`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _.InitFromAccountID(_, _.EUNIVERSE),
    { data: _ } = _(_.GetAccountID());
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      displayName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
var _ = (_) => {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = `${_.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: () => _(() => window.location.assign(_), _.item),
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
};
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/inventory/#pending_gifts`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    _ = _.InitFromAccountID(_, _.EUNIVERSE),
    { data: _ } = _(_.GetAccountID());
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      senderName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    { data: _ } = _(_.responder_steamid),
    _ =
      _.package_id > 0
        ? {
            packageid: _.package_id,
          }
        : {
            bundleid: _.bundle_id,
          },
    { data: _ } = _(_),
    _ = _ ? `app/${_.appid}` : ``,
    _ = `${_.STORE_BASE_URL}${_}`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = !_ || !_,
    _ = _(`#SteamNotifications_RequestedGameAddedTitle`),
    _ = _ ? _(`#SteamNotifications_RequestedGameAddedBody`, _.name ?? ``) : ``;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      title: _,
      body: _,
      bDataLoading: _,
      logoUrl: _?.avatar_url_medium,
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(_.item, _, _),
    _ = _(_),
    { data: _ } = _(
      _?.appid
        ? {
            appid: _.appid,
          }
        : void 0,
    ),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/inventory`;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      appName: _?.name,
      icon: (0, _.jsx)(_, {}),
      fallbackLogo: (0, _.jsx)(_, {}),
      onActivate: () => _(() => window.location.assign(_), _.item),
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      itemState: _,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/friends/pending`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    { data: _ } = _(_.requestorID);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      fallbackLogo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      requestorAvatarURL: _?.avatar_url_medium,
      requestorName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(),
    _ = _.COMMUNITY_BASE_URL + _.url,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => {
      _(() => {}, _.item, _);
    },
    _ = _(_) ? _?.account_steam_id?.GetAccountID() : null,
    { data: _ } = _(_),
    _ = _(_) ? _?.owner_steam_id?.GetAccountID() : null,
    { data: _ } = _(_),
    _ = _.json_data?.app_id
      ? {
          appid: _.json_data?.app_id,
        }
      : void 0,
    { data: _ } = _(_),
    [_, _] = _(),
    _ = _ ? _.FilterText(_.account_steam_id.GetAccountID(), _.title) : ``,
    _ = _ ? _.FilterText(_.account_steam_id.GetAccountID(), _.comment) : ``;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      fallbackLogo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      currentUserSteamID: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      postedByAvatarURL: _?.avatar_url_medium,
      postedByDisplayName: _?.m_strPlayerName,
      ownerDisplayName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      appName: _?.name,
      onHide: _,
      commentTitle: _,
      commentBody: _,
      bLoading: !_,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    { data: _ } = _({
      appid: _.appid,
    }),
    [_, _] = (0, _.useState)(``),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (_.count > 1 && _.appids?.length)
        return _(
          _.STORE_BASE_URL +
            `wishlist/profiles/${_}/?wng=${_.appids.toString()}#sort=discount`,
        );
      if (_) return _(_.STORE_BASE_URL + _.store_url_path);
      let _ = _.appid ? `?appid=${_.appid}` : ``;
      _(_.STORE_BASE_URL + `wishlist/profiles/${_}/${_}#sort=discount`);
    }, [_, _, _]),
    (0, _.jsx)(`a`, {
      href: _,
      onMouseDown: (_) => _(() => {}, _.item, _),
      children: (0, _.jsx)(_, {
        fallbackLogo: (0, _.jsx)(_, {}),
        icon: (0, _.jsx)(_, {}),
        onActivate: () => _(() => window.location.assign(_), _.item),
        location: _,
        data: _,
        timestamp: _.timestamp,
        nUnread: _.rgunread.length,
        eUIMode: _,
        bNewIndicator: _(_.item),
        onHide: _,
      }),
    })
  );
}
function _(_) {
  let { url: _, count: _, icon: _, strBody: _, eFeature: _ } = _,
    _ = _(_);
  return !_ || _
    ? null
    : (0, _.jsx)(`a`, {
        href: _,
        className: _,
        children: (0, _.jsx)(_, {
          icon: (0, _.jsx)(_, {}),
          count: _,
          onActivate: () => window.location.assign(_),
          strBody: _,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var _ = {
    3: _,
    8: _,
    5: _,
    4: _,
    2: _,
    9: _,
    12: _,
    22: _,
    29: _,
  },
  _ = new _(),
  _ = _(function (_) {
    let { bResponsiveHeader: _, notifications: _ } = _;
    _.m_bLoaded || _.ProcessNewNotificationPayload(_),
      _.useEffect(() => {
        _ && !_.m_bLoaded && _.ProcessNewNotificationPayload(_);
      }, [_]);
    let _ = _();
    (0, _.useEffect)(() => {
      _.setTransport(_), (window.RefreshSteamNotifications = () => _(_));
    }, [_]);
    let _ = _();
    return _
      ? (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        })
      : (0, _.jsx)(_, {
          nTotalUnviewed: _.nUnviewed,
        });
  });
function _() {
  return _(() => ({
    notifications: _.m_rgNotificationRollups,
    summary: _.m_summary,
    loaded: _.m_bLoaded,
    nUnviewed: _.m_nUnviewed,
  }));
}
function _() {
  let _ = _(),
    { data: _ } = _(_()),
    _ = _(),
    _ = _?.settings;
  return _.notifications.filter((_) => !_(_.type, _, _) && !_(_.item));
}
function _(_) {
  let { nTotalUnviewed: _ } = _,
    _ = _.useRef(null),
    _ = _(),
    [_, _] = _.useState(_);
  _.useEffect(() => {
    _.current ||
      ((_.current = _(
        (0, _.jsx)(_, {
          popupRef: _,
        }),
        document.getElementById(`green_envelope_menu_root`),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: `GreenEnvelopeMenu`,
        },
      )),
      _.current.Hide());
    let _ = document.getElementById(`header_notification_link`);
    _ && (_.style.cssText = `background-color: rgba(0,0,0,0)`),
      window.setTimeout(() => _(null), 2e3);
  }, []);
  let _ = () => {
      _.current?.visible ||
        (_.current?.Show(),
        _.findIndex((_) => !_.item.viewed) != -1 && _.MarkAllItemsViewed());
    },
    _ = _.useCallback(
      (_) => {
        !_ && _.current?.visible && _.current.Hide();
      },
      [_],
    );
  return (0, _.jsx)(_, {
    trigger: `repeated`,
    onVisibilityChange: _,
    children: (0, _.jsx)(`button`, {
      onClick: _,
      _: `green_envelope_menu_root`,
      className: _(_, _ ? _ : _, _),
      children: (0, _.jsx)(_, {
        className: _,
        "aria-label": _(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var _ = (_) => {
    let { popupRef: _ } = _,
      _ = _.useRef(null),
      [_, _] = _.useState(!1);
    _.useEffect(() => {
      _(_.current != null && _.current?.scrollHeight > _.current?.clientHeight);
    }, [_.current?.scrollHeight, _]);
    let _ = _ ? void 0 : _;
    return (0, _.jsxs)(`div`, {
      className: _,
      onClick: () => _?.current?.Hide(),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(`div`, {
          className: _(_, _),
          ref: _,
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        }),
      ],
    });
  },
  _ = () => {
    let _ = `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications`;
    return (0, _.jsxs)(`div`, {
      className: _(_),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#NotificationsMenu_Title`),
        }),
        (0, _.jsx)(`a`, {
          href: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  _ = () => {
    let _ = `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications`;
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      children: (0, _.jsx)(`a`, {
        href: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _(`#NotificationsMenu_ViewAll`),
        }),
      }),
    });
  };
function _(_, _, _) {
  _.read ||
    (_ && _.button != 0 && _.button != 1) ||
    !_.notification_id ||
    _.MarkItemRead(_.notification_id),
    _();
}
function _() {
  let _ = _();
  return _.length == 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              rollup: _,
              onNotificationClick: _,
              uimode: 3,
              location: 3,
            },
            _,
          ),
        ),
      });
}
var _ = [
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewGiftsPinned_Body`, _),
    feature: 1,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_FriendInvitePinned_Body`, _),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewCommentPinned_Body`, _),
    feature: 2,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewItemAnnouncementPinned_Body`, _),
    feature: 3,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewTradeOffersPinned_Body`, _),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewAsyncGamePinned_Body`, _),
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewModeratorMessagePinned_Body`, _),
    feature: 2,
  },
  {
    fnUrl: () => `${_.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: _,
    fnLocalizeBody: (_) =>
      _(`#Notification_NewHelpRequestRepliesPinned_Body`, _),
  },
  {
    fnUrl: () =>
      `${_.STORE_BASE_URL}account/familymanagement/join?ft=${_.steamid}`,
    countItem: `family_invites`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_FamilyInvitePinned_Body`, _),
  },
];
function _() {
  let _ = _();
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          url: _.fnUrl(),
          count: _.summary[_.countItem],
          icon: _.icon,
          strBody: _.fnLocalizeBody(_.summary[_.countItem]),
          eFeature: _.feature,
        },
        _.countItem,
      ),
    ),
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function _(_) {
  let _ = null;
  try {
    _ = await _(_, _.steamid, _(_.LANGUAGE), void 0, !1, !1);
  } catch {}
  _ && _.ProcessNewNotificationPayload(_);
}
export { _ as GreenEnvelope, _ as default };
