import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~75db1bf948.js";
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
} from "./main.js";
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.quicktext_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 10, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            quicktext_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            requires_update: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            title: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            hidden: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            approved: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            help_request_types: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            content: {
              _: 7,
              _: _,
            },
            button_text: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            replacement: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            payment_methods: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            appids: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            escalation_level: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            partner_only: {
              _: 13,
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
      return `CSupportData_QuickText`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.content || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            content: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            major_revision: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            minor_revision: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            author: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_update: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            language: {
              _: 6,
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
      return `CSupportData_QuickTextContent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.quicktext_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            quicktext_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            language: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            from_sql: {
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
      return `CSupportAgents_GetQuickText_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.quicktext || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            quicktext: {
              _: 1,
              _: _,
            },
            english_reference: {
              _: 2,
              _: _,
            },
            localization_url: {
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
      return `CSupportAgents_GetQuickText_Response`;
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
            log_type: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            version_string: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            log_contents: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            request_id: {
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
      return `CHelpRequestLogs_UploadUserApplicationLog_Request`;
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
      return `CHelpRequestLogs_UploadUserApplicationLog_Response`;
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
      return `CHelpRequestLogs_GetApplicationLogDemand_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.request_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            request_id: {
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
      return `CHelpRequestLogs_GetApplicationLogDemand_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`SupportAgents.GetQuickText#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetQuickText = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `HelpRequestLogs.UploadUserApplicationLog#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.UploadUserApplicationLog = _;
  function _(_, _, _) {
    return _.SendMsg(
      `HelpRequestLogs.GetApplicationLogDemand#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.GetApplicationLogDemand = _;
})((_ ||= {}));
function _(_, _) {
  let _ = _();
  return _({
    queryKey: [`get_quick_text`, _, _],
    queryFn: async () => {
      if (_ == null || _ === void 0) return null;
      let _ = _.Init(_);
      (_.Body().set_quicktext_id(_), _.Body().set_language(_(_)));
      let _ = await _.GetQuickText(_, _);
      if (_.GetEResult() !== 1)
        throw Error(`useQuickText failed with EResult ` + _.GetEResult());
      return _.Body().toObject();
    },
    enabled: _ != null && _ !== void 0,
  });
}
function _(_) {
  return _({
    queryKey: [`get_primary_language_for_user`, _],
    queryFn: async () => {
      if (_ === `0` || !_) throw Error(`Invalid steamid`);
      let _ = await (
        await fetch(
          `${_.COMMUNITY_BASE_URL}profiles/${_}/ajaxlanguagepreferences`,
        )
      ).json();
      if (_.success === 1) return _.preferences;
      throw Error(`Failed GetPrimaryLanguageForUser. EResult: ` + _.success);
    },
    enabled: !!_ && _ !== `0`,
  });
}
function _(_) {
  let _ = _(_ ?? ``);
  if (_.isLoading) return;
  let _ = _.data;
  return _?.pref_primary_language !== void 0 && _.pref_primary_language !== -1
    ? _.pref_primary_language
    : _?.last_logon_langauge !== void 0 && _.last_logon_langauge !== -1
      ? _.last_logon_langauge
      : 0;
}
function _(_, _) {
  let _ = _(_, _(_ === null ? void 0 : _));
  return (
    _.data?.quicktext?.content?.content ?? _.data?.english_reference?.content
  );
}
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _.reasons;
  for (let _ of _) _ = _[_].children;
  let _ = _ === null ? null : _(_),
    _ = _ === null ? null : _(_),
    _ = () => {
      _ === null
        ? _.length === 0
          ? _.onSelect(null)
          : _(_.slice(0, -1))
        : _(null);
    };
  return (0, _.jsxs)(`div`, {
    children: [
      _ === null &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: `oBBLRDyMwQ0-`,
              children: _.map((_, _) =>
                _(_)
                  ? (0, _.jsx)(
                      _,
                      {
                        href: _.url,
                        width: `100%`,
                        color: `dull`,
                        children: _.Localize(_.strLocToken),
                      },
                      _.url,
                    )
                  : (0, _.jsx)(
                      _,
                      {
                        onClick: () => {
                          if (_(_)) {
                            let _ = [..._];
                            (_.push(_), _(_));
                          } else if (_(_))
                            _(_.value) || _(_.value)
                              ? _(_.value)
                              : _.onSelect(_.value);
                          else throw Error(`This should be unreachable.`);
                        },
                        width: `100%`,
                        color: `dull`,
                        children: (0, _.jsxs)(_, {
                          justify: `between`,
                          align: `center`,
                          width: `100%`,
                          children: [
                            (0, _.jsx)(`span`, {
                              children: _(_)
                                ? _.Localize(_.strLocToken)
                                : _(_.value),
                            }),
                            _(_) &&
                              (0, _.jsx)(`span`, {
                                children: `▶`,
                              }),
                          ],
                        }),
                      },
                      _,
                    ),
              ),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              children: `Back`,
            }),
          ],
        }),
      _ !== null &&
        (0, _.jsxs)(`div`, {
          className: `oBBLRDyMwQ0-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `h39kXDS8c6A-`,
              children: _(_),
            }),
            _ !== null &&
              (0, _.jsxs)(`label`, {
                children: [
                  (0, _.jsx)(`input`, {
                    type: `checkbox`,
                    checked: _,
                    onChange: (_) => _(_.target.checked),
                  }),
                  ` Targeted at women`,
                ],
              }),
            _ !== null &&
              (0, _.jsxs)(`label`, {
                children: [
                  (0, _.jsx)(`input`, {
                    type: `checkbox`,
                    checked: _,
                    onChange: (_) => _(_.target.checked),
                  }),
                  ` Deepfake`,
                ],
              }),
            (0, _.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, _.jsx)(_, {
                  onClick: _,
                  children: `Back`,
                }),
                (0, _.jsx)(_, {
                  onClick: () => {
                    let _ = _;
                    _ !== null &&
                      (_ && _(_) !== null && (_ = _(_)),
                      _ && _(_) !== null && (_ = _(_)),
                      _.onSelect(_));
                  },
                  children: `Continue`,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
