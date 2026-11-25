var _ = _(_(), 1),
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
            clanid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            link_url: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            link_text: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            blurb: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            time_recommended: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            comment_count: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            upvote_count: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            accountid_creator: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            recommendation_state: {
              _: 10,
              _: _.readEnum,
              _: _.writeEnum,
            },
            received_compensation: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            received_for_free: {
              _: 12,
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
      return `CStoreCuration_RecommendedApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.listid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 12, 13, 14], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            listid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            blurb: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            link: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            list_state: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            sort_order: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_created: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_updated: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            apps: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            list_type: {
              _: 11,
              _: _.readEnum,
              _: _.writeEnum,
            },
            title_localization: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            blurb_localization: {
              _: 13,
              _: _,
              _: !0,
              _: !0,
            },
            link_localization: {
              _: 14,
              _: _,
              _: !0,
              _: !0,
            },
            sale_clan_steamid: {
              _: 15,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            sale_clan_event_gid: {
              _: 16,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            list_jsondata: {
              _: 17,
              _: _.readString,
              _: _.writeString,
            },
            clan_account_id: {
              _: 18,
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
      return `CStoreCuration_ListDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recommended_app || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recommended_app: {
              _: 1,
              _: _,
            },
            blurb: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            sort_order: {
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
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            list_state: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            start: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            return_total_only: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            return_metadata_only: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            max_apps: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            sale_clan_event_gid: {
              _: 8,
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
      return `CStoreCuration_GetLists_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.list_details || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            list_details: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total: {
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
      return `CStoreCuration_GetLists_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            listid: {
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
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.list_details || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            list_details: {
              _: 1,
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
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreCuration.GetLists#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetLists = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCuration.GetListDetails#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetListDetails = _;
})((_ ||= {}));
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}ogg/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  let _ = _.InitFromClanID(_, _.EUNIVERSE);
  return _(
    `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}groups/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}games/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  let _ = await fetch(_, {
    method: `GET`,
  });
  if (_.status == 404) return null;
  if (!_._) throw Error(`Server returned ${_.status}`);
  let _ = await _.json();
  return _.success == 1 ? _ : null;
}
function _(_) {
  return [`clantoclaninfo`, _];
}
function _(_) {
  return [`apptoclanid`, _];
}
function _(_, _ = `group`) {
  return [`vanitytoclanid`, _, _?.toLocaleLowerCase()];
}
function _(_) {
  let _ = _?.[0];
  return _ == `clantoclaninfo` || _ == `apptoclanid` || _ == `vanitytoclanid`;
}
var _ = new WeakSet();
function _(_) {
  if (!_.has(_)) {
    _.add(_);
    for (let _ of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      _.setQueryDefaults(_, {
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        retry: !1,
      });
  }
}
var _ = new WeakMap();
function _(_) {
  if (!_) return null;
  let _ = _.get(_);
  return (
    _ ||
      ((_ = {
        ..._,
        clanSteamID: _.clanSteamIDString
          ? new _(_.clanSteamIDString)
          : _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
      }),
      _.set(_, _)),
    _
  );
}
function _(_) {
  let { msg: _, success: _, ..._ } = _;
  return {
    ..._,
    rss_language: _.rss_language ? _.rss_language : 0,
  };
}
function _(_, _) {
  if (!_) return null;
  _(_);
  let _ = _(_);
  return (
    _.setQueryData(_(_.clanAccountID), _),
    _.appid && _.setQueryData(_(_.appid), _.clanAccountID),
    _.vanity_url && _.setQueryData(_(_.vanity_url, `group`), _.clanAccountID),
    _
  );
}
function _(_, _) {
  for (let _ of _) _(_, _);
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return (
    _(_),
    {
      queryKey: _(_ ?? null),
      queryFn: async () => (_ ? _(_, await _(_)) : null),
      enabled: _ !== void 0,
      select: _,
    }
  );
}
function _(_, _) {
  return (
    _(_),
    {
      queryKey: _(_),
      queryFn: async () => _(_, await _(_))?.clanAccountID ?? null,
      enabled: !!_,
    }
  );
}
function _(_, _, _ = `group`) {
  return (
    _(_),
    {
      queryKey: _(_, _),
      queryFn: async () => {
        if (_ == `store`) {
          let _ = _.getQueryData(_(_, `group`));
          if (_) return _;
        }
        return (
          _(_, _ == `store` ? await _(_) : await _(_))?.clanAccountID ?? null
        );
      },
      enabled: !!_,
    }
  );
}
function _(_) {
  return _.isPending ? void 0 : (_.data ?? null);
}
function _(_, _ = `group`) {
  let _ = _(),
    _ = _(_(_, _, _));
  return _(_ ? _(_) : void 0);
}
function _(_, _) {
  if (_) return _(_.getQueryData(_(_))) ?? void 0;
}
function _(_, _) {
  if (_) return _(_.getQueryData(_(_)), _);
}
function _(_, _, _) {
  if (!_) return;
  let _ = _ ? [_] : [`store`, `group`];
  for (let _ of _) {
    let _ = _(_.getQueryData(_(_, _)), _);
    if (_) return _;
  }
}
async function _(_, _) {
  return _ ? _(await _.fetchQuery(_(_, _))) : null;
}
async function _(_, _) {
  return _ ? _(await _.fetchQuery(_(_, _)), _) : null;
}
async function _(_, _, _ = `group`) {
  return _ ? _(await _.fetchQuery(_(_, _, _)), _) : null;
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            language: {
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
      return `CCommunity_GetApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apps: {
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
      return `CCommunity_GetApps_Response`;
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
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CCommunity_GetAppRichPresenceLocalization_Request`;
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
              _: _.readInt32,
              _: _.writeInt32,
            },
            token_lists: {
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
      return `CCommunity_GetAppRichPresenceLocalization_Response`;
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
      return `CCommunity_GetAppRichPresenceLocalization_Response_Token`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            tokens: {
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
      return `CCommunity_GetAppRichPresenceLocalization_Response_TokenList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            comment_thread_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidfeature: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidfeature2: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            commentthreadid: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            start: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            upvoters: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            include_deleted: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            gidcomment: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_oldest: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            oldest_first: {
              _: 12,
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
      return `CCommunity_GetCommentThread_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidcomment || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gidcomment: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            timestamp: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            text: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            upvotes: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            hidden: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            hidden_by_user: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            deleted: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            ipaddress: {
              _: 9,
              _: _,
            },
            total_hidden: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            upvoted_by_user: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            reactions: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            gidparentcomment: {
              _: 13,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            delete_reason: {
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
      return `CCommunity_Comment`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CCommunity_Comment_Reaction`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.comments || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            comments: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            deleted_comments: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            commentthreadid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            start: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
            total_count: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            upvotes: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            upvoters: {
              _: 9,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            user_subscribed: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            user_upvoted: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            answer_commentid: {
              _: 12,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            answer_actor: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            answer_actor_rank: {
              _: 14,
              _: _.readInt32,
              _: _.writeInt32,
            },
            can_post: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            comment_thread_type: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gidfeature: {
              _: 17,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidfeature2: {
              _: 18,
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
      return `CCommunity_GetCommentThread_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            comment_thread_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidfeature: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidfeature2: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidcomment: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            comment_thread_id: {
              _: 6,
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
      return `CCommunity_GetComment_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.comment || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            comment: {
              _: 1,
              _: _,
            },
            comment_thread_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidfeature: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidfeature2: {
              _: 4,
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
      return `CCommunity_GetComment_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null));
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
            comment_thread_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidcomment: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            reason: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            note: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            sanctions: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            skip_lock: {
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
      return `CCommunity_SanctionComment_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sanction || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CCommunity_SanctionComment_Request_Sanction`;
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
      return `CCommunity_SanctionComment_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            comment_thread_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidfeature: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidfeature2: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            text: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            gidparentcomment: {
              _: 7,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            suppress_notifications: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            is_report: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            start_hidden: {
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
      return `CCommunity_PostCommentToThread_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidcomment || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gidcomment: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            commentthreadid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            count: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            upvotes: {
              _: 4,
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
      return `CCommunity_PostCommentToThread_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            comment_thread_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidfeature: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidfeature2: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidcomment: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            undelete: {
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
      return `CCommunity_DeleteCommentFromThread_Request`;
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
      return `CCommunity_DeleteCommentFromThread_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.commentthreadtype || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            commentthreadtype: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidfeature: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidfeature2: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidcomment: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            rate_up: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            suppress_notifications: {
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
      return `CCommunity_RateCommentThread_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidcomment || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gidcomment: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            commentthreadid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upvotes: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            has_upvoted: {
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
      return `CCommunity_RateCommentThread_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.commentthreadtype || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            commentthreadtype: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidfeature: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidfeature2: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidcomment: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            max_results: {
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
      return `CCommunity_GetCommentThreadRatings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.commentthreadid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            commentthreadid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidcomment: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            upvotes: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            has_upvoted: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            upvoter_accountids: {
              _: 5,
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
      return `CCommunity_GetCommentThreadRatings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            steamids_verifymembership: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `CCommunity_VerifyClanMembership_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamids_nonmembers || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamids_nonmembers: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `CCommunity_VerifyClanMembership_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.announcementid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            announcementid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            vote_up: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            clan_accountid: {
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
      return `CCommunity_RateClanAnnouncement_Request`;
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
      return `CCommunity_RateClanAnnouncement_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.announcementid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            announcementid: {
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
      return `CCommunity_GetClanAnnouncementVoteForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voted_up || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voted_up: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            voted_down: {
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
      return `CCommunity_GetClanAnnouncementVoteForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CCommunity_GetClanMetadata_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_ogg || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_ogg: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            profile_url: {
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
      return `CCommunity_GetClanMetadata_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.loc_group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            loc_group_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            image_hash: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            thumbnail_hash: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            file_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            group: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            width: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            height: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            extensions: {
              _: 8,
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
      return `CCommunity_ClanLocGroupImage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
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
            group: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            language: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            loc_group_ids: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `CCommunity_GetClanLocGroupImages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.images || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            images: {
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
      return `CCommunity_GetClanLocGroupImages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            filter_user_uploaded_only: {
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
      return `CCommunity_GetAvatarHistory_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.avatars || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            avatars: {
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
      return `CCommunity_GetAvatarHistory_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.avatar_sha1 || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            avatar_sha1: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            user_uploaded: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            timestamp: {
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
      return `CCommunity_GetAvatarHistory_Response_AvatarData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.priority || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            appid: {
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
      return `CAppPriority`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.count || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            count: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            offset: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime32_start_time: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime32_end_time: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            language_preference: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            filter_event_type: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            filter_to_appid: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            app_list: {
              _: 8,
              _: _,
              _: !0,
              _: !0,
            },
            count_after: {
              _: 9,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count_before: {
              _: 10,
              _: 0,
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
      return `CCommunity_GetUserPartnerEventNews_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return `CCommunity_GetUserPartnerEventNews_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_steam_blog || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_steam_blog: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            filter_to_played_within_days: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_only_game_updates: {
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
      return `CCommunity_GetBestEventsForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clanid: {
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
            appid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            possible_takeover: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            rtime32_last_modified: {
              _: 6,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            user_app_priority: {
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
      return `CCommunity_PartnerEventResult`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return `CCommunity_GetBestEventsForUser_Response`;
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
      return `CCommunity_ClearUserPartnerEventsAppPriorities_Request`;
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
      return `CCommunity_ClearUserPartnerEventsAppPriorities_Response`;
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
            user_app_priority: {
              _: 2,
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
      return `CCommunity_PartnerEventsAppPriority`;
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
      return `CCommunity_GetUserPartnerEventsAppPriorities_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.priorities || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            priorities: {
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
      return `CCommunity_GetUserPartnerEventsAppPriorities_Response`;
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
      return `CCommunity_ClearSinglePartnerEventsAppPriority_Request`;
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
      return `CCommunity_ClearSinglePartnerEventsAppPriority_Response`;
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
      return `CCommunity_PartnerEventsShowMoreForApp_Request`;
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
      return `CCommunity_PartnerEventsShowMoreForApp_Response`;
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
      return `CCommunity_PartnerEventsShowLessForApp_Request`;
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
      return `CCommunity_PartnerEventsShowLessForApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.markings || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            markings: {
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
      return `CCommunity_MarkPartnerEventsForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clanid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            display_location: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            mark_shown: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            mark_read: {
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
      return `CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking`;
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
      return `CCommunity_MarkPartnerEventsForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.event_gids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            event_gids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            include_read_events_only: {
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
      return `CCommunity_GetUserPartnerEventViewStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.events || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            events: {
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
      return `CCommunity_GetUserPartnerEventViewStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.event_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            event_gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            last_shown_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_read_time: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_account_id: {
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
      return `CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidfeature || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gidfeature: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidfeature2: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidcomment: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            commentthreadtype: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            hide: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            report_reason: {
              _: 7,
              _: _.readEnum,
              _: _.writeEnum,
            },
            report_text: {
              _: 8,
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
      return `CCommunity_HideAndReportComment_Request`;
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
      return `CCommunity_HideAndReportComment_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            itemid: {
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
      return `CCommunity_GetClanEventCrowdInMetadata_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.crowdin_project_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            crowdin_project_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            crowdin_file_id: {
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
      return `CCommunity_GetClanEventCrowdInMetadata_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CCommunity_GetClanCrowdInMetadata_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.crowdin_project_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            crowdin_project_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            crowdin_directory_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            push_by_default: {
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
      return `CCommunity_GetClanCrowdInMetadata_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            itemid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
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
      return `CCommunity_FetchTranslationFromCrowdIn_Request`;
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
      return `CCommunity_FetchTranslationFromCrowdIn_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.review_labels || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            review_labels: {
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
      return `CCommunity_SetRecommendationBotReviewStatus_Request`;
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
            recommendationid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            is_bot_review: {
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
      return `CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel`;
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
      return `CCommunity_SetRecommendationBotReviewStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.explicit || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            explicit: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            adult: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            toxic: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            spam: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            malicious: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            commercial: {
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
      return `CommentClassification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.resolve || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            resolve: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            reportid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            report_action: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidcomment: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            commentthreadtype: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
              _: 6,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidfeature: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidfeature2: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            classification: {
              _: 9,
              _: _,
            },
            reason: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            comment_thread_id: {
              _: 11,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            sanctions: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            note: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            skip_lock: {
              _: 14,
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
      return `CCommentModeration_UpdateCommentReportState_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sanction || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
      return `CCommentModeration_UpdateCommentReportState_Request_Sanction`;
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
      return `CCommentModeration_UpdateCommentReportState_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Community.GetApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetApps = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Community.GetAppRichPresenceLocalization#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetAppRichPresenceLocalization = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetCommentThread#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetCommentThread = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetComment#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetComment = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.SanctionComment#1`, _(_, _, _), _, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SanctionComment = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.PostCommentToThread#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.PostCommentToThread = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.DeleteCommentFromThread#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.DeleteCommentFromThread = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.RateCommentThread#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.RateCommentThread = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetCommentThreadRatings#1`, _(_, _, _), _, {
      ePrivilege: 2,
    });
  }
  _.GetCommentThreadRatings = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.VerifyClanMembership#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.VerifyClanMembership = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.RateClanAnnouncement#1`, _(_, _, _), _, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  _.RateClanAnnouncement = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Community.GetClanAnnouncementVoteForUser#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetClanAnnouncementVoteForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetClanMetadata#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetClanMetadata = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetClanLocGroupImages#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetClanLocGroupImages = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetAvatarHistory#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetAvatarHistory = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetClanEventCrowdInMetadata#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetClanEventCrowdInMetadata = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetClanCrowdInMetadata#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetClanCrowdInMetadata = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.FetchTranslationFromCrowdIn#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.FetchTranslationFromCrowdIn = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.HideAndReportComment#1`, _(_, _, _), _, {
      ePrivilege: 3,
      rgBrowserAPISites: [`community`],
    });
  }
  _.HideAndReportComment = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetUserPartnerEventNews#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetUserPartnerEventNews = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.GetBestEventsForUser#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetBestEventsForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.MarkPartnerEventsForUser#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.MarkPartnerEventsForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Community.GetUserPartnerEventViewStatus#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetUserPartnerEventViewStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.PartnerEventsShowMoreForApp#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.PartnerEventsShowMoreForApp = _;
  function _(_, _, _) {
    return _.SendMsg(`Community.PartnerEventsShowLessForApp#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.PartnerEventsShowLessForApp = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Community.ClearUserPartnerEventsAppPriorities#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClearUserPartnerEventsAppPriorities = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Community.GetUserPartnerEventsAppPriorities#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.GetUserPartnerEventsAppPriorities = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Community.ClearSinglePartnerEventsAppPriority#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClearSinglePartnerEventsAppPriority = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Community.SetRecommendationBotReviewStatus#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetRecommendationBotReviewStatus = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `CommentModeration.UpdateCommentReportState#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.UpdateCommentReportState = _;
})((_ ||= {}));
var _ = class _ extends _.Message {
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
            clan_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            relation: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            linkname: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            json: {
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
      return `CDeveloperPageLink`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            appid_list: {
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
      return `CDeveloperPageToApps`;
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
            link: {
              _: 2,
              _: _,
            },
            remove: {
              _: 3,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            update_json_only: {
              _: 4,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            skip_clan_permissions: {
              _: 5,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            partner_id: {
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
      return `CStoreCatalog_SetDevPageLink_Request`;
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
      return `CStoreCatalog_SetDevPageLink_Response`;
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
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.links || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            links: {
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
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            ignore_dlc: {
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
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
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
            listid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            ignore_dlc: {
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
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apps: {
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
      return `CStoreCatalog_GetDevPageListApps_Response`;
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
            sort_order: {
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
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
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
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            linknames: {
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
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.SetDevPageLink#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.SetDevPageLink = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.GetDevPageLinks#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetDevPageLinks = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.GetDevPageAllAppsLinked#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`, `help`],
    });
  }
  _.GetDevPageAllAppsLinked = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.GetDevPageListApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetDevPageListApps = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetDevPagesForPartner = _;
})((_ ||= {}));
var _ = _(_()),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            accept: {
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
      return `CClan_RespondToClanInvite_Request`;
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
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.image || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            image: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            from_body: {
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
      return `CPartnerEventSummary_Image`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.background_image || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            background_image: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            scrim_color: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            desktop_layout: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            logo: {
              _: 4,
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
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            announcement_gid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            appid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_type: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            tags: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            rtime32_start_time: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime32_end_time: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime32_visibility_start: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime32_visibility_end: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_name: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            subtitle: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            summary: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            capsule_image: {
              _: 14,
              _: _,
            },
            store_path: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            rtime32_post_time: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cross_promo: {
              _: 21,
              _: _,
            },
            adult_only_content: {
              _: 22,
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
      return `CPartnerEventSummary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            events: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            language: {
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
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_event_gid: {
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
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summaries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summaries: {
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
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 8, 12, 13, 14], null));
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
            clan_event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            clan_announcement_gid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            count_earlier: {
              _: 4,
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count_later: {
              _: 5,
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            required_tags: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            require_no_tags: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            language_preference: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            rtime_oldest_date: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_old_announcements: {
              _: 10,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            include_old_events: {
              _: 11,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_tags: {
              _: 12,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            event_type_filter: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            exclude_event_types: {
              _: 14,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            only_summaries: {
              _: 15,
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
      return `CClan_GetAdjacentPartnerEvents_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.event_data || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            event_data: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            more_before: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            more_after: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            clan_is_creator_home: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            clan_is_ogg: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            clan_is_ovg: {
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
      return `CClan_GetAdjacentPartnerEvents_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            rtime_oldest_date: {
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.snippets || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            snippets: {
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            announcement_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            hidden: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            published: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            rtime32_start_time: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            event_type: {
              _: 7,
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
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.requests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requests: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            cursor: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            count: {
              _: 3,
              _: 100,
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
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
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
            start_build_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_build_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            branch: {
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
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.matches || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            matches: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            num_total_results: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            next_cursor: {
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
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
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
            build_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            branch: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            clan_event_gid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            clan_account_id: {
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
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Clan.RespondToClanInvite#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RespondToClanInvite = _;
  function _(_, _, _) {
    return _.SendMsg(`Clan.GetPartnerEventSummaries#1`, _(_, _, _), _, {
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetPartnerEventSummaries = _;
  function _(_, _, _) {
    return _.SendMsg(`Clan.GetAdjacentPartnerEvents#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetAdjacentPartnerEvents = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetDraftAndRecentPartnerEventSnippet = _;
  function _(_, _, _) {
    return _.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.GetPartnerEventsByBuildIDRange = _;
})((_ ||= {}));
var _ = class {
  m_clanSteamID;
  m_appidList = [];
  m_strName = ``;
  m_strAvatarURLFullSize = ``;
  m_strTagLineLoc = ``;
  m_nFollowers = 0;
  m_strVanity = ``;
  m_webLink = void 0;
  m_linkedEvent = void 0;
  m_mapListInfo = new Map();
  m_promise;
  m_bIsLoaded = !1;
  m_bIsHidden = !1;
  m_clanAccountFlags = 0;
  constructor(_) {
    (_(this), (this.m_clanSteamID = _));
  }
  Initialize(_) {
    ((this.m_strName = _.name || ``),
      (this.m_strAvatarURLFullSize =
        _.avatar_url_full_size ||
        `https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg`),
      (this.m_strTagLineLoc = _.tag_line_localized || ``),
      (this.m_nFollowers = _.followers || 0),
      (this.m_strVanity = _.vanity || void 0),
      (this.m_webLink = _.weblink),
      (this.m_bIsHidden = _.hidden || !1),
      (this.m_clanAccountFlags = _.clan_account_flags ?? 0),
      (this.m_linkedEvent = _.linked_event),
      (this.m_mapListInfo = new Map(Object.entries(_.list_info ?? {}))),
      _.appids && _.appids.forEach((_) => this.m_appidList.push(_)),
      (this.m_bIsLoaded = !0));
  }
  GetCreatorHomeIdentifier() {
    return {
      name: this.m_strName,
      clan_account_id: this.m_clanSteamID.GetAccountID(),
      type: `developer`,
      hidden: this.m_bIsHidden,
    };
  }
  BIsPartnerEventEditorEnabled() {
    return !!(this.m_clanAccountFlags & 8);
  }
  BHasClanAccountFlagSet(_) {
    return !!(this.m_clanAccountFlags & _);
  }
  BIsLoaded() {
    return this.m_bIsLoaded;
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  GetClanAccountID() {
    return this.m_clanSteamID.GetAccountID();
  }
  GetAppIDList() {
    return this.m_appidList;
  }
  GetName() {
    return this.m_strName;
  }
  GetAvatarURLFullSize() {
    return this.m_strAvatarURLFullSize;
  }
  GetTagLine() {
    return this.m_strTagLineLoc;
  }
  GetNumFollowers() {
    return this.m_nFollowers;
  }
  BIsHidden() {
    return this.m_bIsHidden;
  }
  GetCreatorHomeURL(_) {
    if (this.m_strVanity) {
      switch (_) {
        case `publisher`:
          return _.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
        case `franchise`:
          return _.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
      }
      return _.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
    }
    return (
      _.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
    );
  }
  BHasWebLink() {
    return this.m_webLink !== void 0;
  }
  GetWebLink() {
    return this.m_webLink;
  }
  GetVanityString() {
    return this.m_strVanity;
  }
  GetLinkedEventGID() {
    return this.m_linkedEvent;
  }
  GetListInfo() {
    return this.m_mapListInfo;
  }
  AdjustFollower(_) {
    this.m_nFollowers += _;
  }
  async EnablePartnerEventEditorFlag() {
    this.BIsPartnerEventEditorEnabled() ||
      (await this.UpdateGroupFlagsFeature([2, 8], !0));
  }
  async UpdateGroupFlagsFeature(_, _) {
    let _ = _.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
      _ = this.m_clanAccountFlags;
    if (
      (_.forEach((_) => {
        _ ? (_ |= _) : (_ &= ~_);
      }),
      _ == this.m_clanAccountFlags)
    )
      return;
    let _ = [];
    (_ & 1 && _.push(1),
      _ & 8 && _.push(8),
      _ & 2 && _.push(2),
      _ & 4 && _.push(4),
      _ & 16 && _.push(16),
      _ & 32 && _.push(32),
      _ & 64 && _.push(64),
      _ & 128 && _.push(128),
      _ & 256 && _.push(256));
    let _ = new FormData();
    (_.append(`sessionid`, _()),
      _.append(`clan_account_id`, this.GetClanAccountID().toString()),
      _.append(`accountflags`, JSON.stringify(_)));
    let _ = await _.default.post(_, _);
    _ &&
      _.status == 200 &&
      _.data.success == 1 &&
      (this.m_clanAccountFlags = _);
  }
};
(_([_], _.prototype, `m_appidList`, void 0),
  _([_], _.prototype, `m_nFollowers`, void 0),
  _([_], _.prototype, `m_clanAccountFlags`, void 0));
function _(_) {
  let _ = _();
  return _ && _ === _.STORE_CHECKOUT_BASE_URL ? new _(_, `checkout`) : new _(_);
}
function _(_, _) {
  typeof window < `u` && (window[_] = _);
}
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let _ = _(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(_) &&
        _.forEach((_) => {
          let _ = Number(_.creator_clan_id),
            _ = new _(_.InitFromClanID(_, _.EUNIVERSE));
          (_.Initialize(_),
            (_.m_promise = _.GetAsPromise(_)),
            this.m_mapClanToCreatorHome.set(_, _));
        });
      let _ = _(`creatorhomeforapp`, `application_config`);
      (this.ValidateStoreDefaultAppList(_) &&
        _.forEach((_) => {
          _.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(_.appid) ||
              this.m_mapAppToCreatorIDList.set(_.appid, []),
            this.m_mapAppToCreatorIDList.get(_.appid).push(_));
        }),
        (this.m_bLoadedFromConfig = !0));
    }
  }
  GetServiceTransport() {
    if (!this.m_serviceTransport) {
      let _ = _(`loyalty_webapi_token`, `application_config`),
        _ = _(new _(_.WEBAPI_BASE_URL, _ || void 0));
      this.m_serviceTransport = _.GetServiceTransport();
    }
    return this.m_serviceTransport;
  }
  static async GetAsPromise(_) {
    return _;
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].name == `string` &&
          (typeof _[0].creator_clan_id == `string` ||
            typeof _[0].creator_clan_id == `number`)
      : !1;
  }
  ValidateStoreDefaultAppList(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].clan_account_id == `number` &&
          _[0].clan_account_id > 0 &&
          typeof _[0].appid == `number` &&
          _[0].appid > 0
      : !1;
  }
  BHasCreatorHomeLoaded(_) {
    return (
      this.m_mapClanToCreatorHome.has(_.GetAccountID()) &&
      this.m_mapClanToCreatorHome.get(_.GetAccountID()).BIsLoaded()
    );
  }
  GetCreatorHome(_) {
    return this.m_mapClanToCreatorHome.get(_.GetAccountID());
  }
  GetCreatorHomeByID(_) {
    return this.m_mapClanToCreatorHome.get(_.clan_account_id);
  }
  async LoadCreatorHome(_, _ = !1, _) {
    if (
      (this.LazyInit(), _ || !this.m_mapClanToCreatorHome.has(_.GetAccountID()))
    ) {
      let _ = new _(_);
      ((_.m_promise = this.InternalCreatorHome(_, _)),
        await _.m_promise,
        this.m_mapClanToCreatorHome.set(_.GetAccountID(), _));
    }
    return this.m_mapClanToCreatorHome.get(_.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(_, _) {
    let _ = {
        get_appids: !0,
        _: _.LANGUAGE,
      },
      _ =
        _.STORE_BASE_URL +
        `curator/` +
        _.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      _ = await _.default.get(_, {
        params: _,
        cancelToken: _ && _.token,
      });
    return (_.Initialize(_.data), _);
  }
  async LoadCreatorHomeListForAppIncludeHiddden(_, _) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(_))) {
      let _ = {
          appid: _,
        },
        _ = _.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        _ = await _.default.get(_, {
          params: _,
          cancelToken: _ && _.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(_, _.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(_);
  }
  async SearchCreatorHomeStore(_, _, _) {
    let _ = `${_.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      _ = {
        term: _.replace(` `, `+`),
        require_creator: _,
        _: _.COUNTRY,
        _: _.LANGUAGE,
        origin: self.origin,
      },
      _ = [],
      _ = await _.default.get(_, {
        params: _,
        cancelToken: _.token,
      });
    return (
      _.data.curators &&
        _(() => {
          _.data.curators.forEach((_) => {
            if (!this.m_mapClanToCreatorHome.has(_.creator_clan_id)) {
              let _ = new _(_.InitFromClanID(_.creator_clan_id, _.EUNIVERSE));
              (_.Initialize(_),
                this.m_mapClanToCreatorHome.set(_.creator_clan_id, _));
            }
            _.push(this.m_mapClanToCreatorHome.get(_.creator_clan_id));
          });
        }),
      _
    );
  }
  GetCreatorHomeListForAppIncludeHidden(_) {
    return this.m_mapAppToCreatorIDList.has(_)
      ? this.m_mapAppToCreatorIDList.get(_)
      : [];
  }
};
(_([_], _.prototype, `m_mapClanToCreatorHome`, void 0),
  _([_], _.prototype, `m_mapAppToCreatorIDList`, void 0),
  _([_], _.prototype, `LazyInit`, null));
var _ = new _();
_(`g_CreatorHomeStore`, _);
function _(_) {
  if (!_) return null;
  let _ = _.BHasCreatorHomeLoaded(_.clanSteamID)
    ? _.GetCreatorHome(_.clanSteamID)
    : void 0;
  return _.GetSaleURL(_?.GetCreatorHomeURL(`developer`));
}
function _(_) {
  if (!_) return;
  let _ = _(`creator_home_list_info`, `application_config`);
  if (typeof _ != `object` || !_ || Array.isArray(_)) return;
  let _ = _[_];
  if (_ && _.title)
    return {
      title: _.title,
      description: _.description?.length ? _.description : void 0,
      imageUrl: _.listtileimage?.length ? _.listtileimage : void 0,
    };
}
function _(_) {
  return _(_)?.title;
}
function _(_) {
  return _(_)?.description;
}
