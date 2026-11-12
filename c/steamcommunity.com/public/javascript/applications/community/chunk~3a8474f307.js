import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~cfd048ddd7.js";
import { _, _, _ } from "./chunk~1e67c3e4e4.js";
import { _ } from "./chunk~eefd71512b.js";
import { _, _, _, _ } from "./chunk~0f9e58b0a5.js";
import { _ } from "./chunk~62cf132e0e.js";
import { _, _ } from "./chunk~75db1bf948.js";
import { _ } from "./chunk~37e5316e27.js";
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
var _ = _(_(), 1),
  _ = _(),
  _ = {
    1: [62, 20, 28, 25, 22],
    2: [35, 3, 20, 21, 22],
  };
function _(_) {
  let [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(`main`),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(``),
    _ =
      !!_.rtContentCreatedAt &&
      Date.now() / 1e3 - _.rtContentCreatedAt > 2592e3,
    _ = (_.subject.subject_type ? _[_.subject.subject_type] : void 0) ?? [],
    _ = _ || _ || _ || _ || _ || _ || _,
    _ = _(_.authorSteamID),
    _ = 0;
  if (_.isSuccess) {
    let _ = _.data;
    _.pref_primary_language !== void 0 && _.pref_primary_language !== -1
      ? (_ = _.pref_primary_language)
      : _.last_logon_langauge !== void 0 &&
        _.last_logon_langauge !== -1 &&
        (_ = _.last_logon_langauge);
  }
  let _ = _(_(_), _);
  (0, _.useEffect)(() => {
    _(
      _.data?.quicktext?.content?.content ??
        _.data?.english_reference?.content ??
        ``,
    );
  }, [_.data, _.data]);
  let _ = async () => {
      _(_ !== null, `eReason must be non-null to sanction`);
      let _ = [];
      (_ &&
        _.push({
          sanction: 1,
        }),
        _ &&
          _.push({
            sanction: 8,
          }),
        _ &&
          _.push({
            sanction: 3,
            days: _,
          }),
        _ &&
          _.push({
            sanction: 2,
            days: _,
          }),
        _ &&
          _.push({
            sanction: 5,
            days: _,
          }),
        _ &&
          _.push({
            sanction: 4,
            days: -1,
          }),
        _ &&
          _.push({
            sanction: 7,
          }),
        _ === 1
          ? _.push({
              sanction: 12,
              escalate_to: 1,
            })
          : _ === 10 &&
            _.push({
              sanction: 12,
              escalate_to: 10,
            }),
        await _.sanctionMutation.mutateAsync({
          sanctions: _,
          message: _.trim(),
          reason: _,
        }),
        _.onSanction());
    },
    _ = (_) => {
      (_(_), _(`main`));
    },
    _ = (_) => {
      _ ? (_(!0), _(7), _(16)) : (_(!1), _(-1));
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ === `reason` &&
        (0, _.jsx)(_, {
          reasons: _,
          onSelect: _,
        }),
      _ === `main` &&
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsxs)(_, {
              className: `gDpRvQSyEhc-`,
              children: [
                _.sanctionMutation.isError &&
                  (0, _.jsxs)(`div`, {
                    className: _(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, _.jsx)(_, {}),
                      ` Error: `,
                      _.sanctionMutation.error.message,
                    ],
                  }),
                (0, _.jsx)(`label`, {
                  htmlFor: `reason`,
                  children: `Reason:`,
                }),
                (0, _.jsx)(`button`, {
                  _: `reason`,
                  className: void 0,
                  onClick: () => _(`reason`),
                  children:
                    _ === null
                      ? _.Localize(`#commentsanctiondialog_selectreason`)
                      : _(_),
                }),
                _.length > 0 &&
                  (0, _.jsx)(`div`, {
                    className: `M5MEiztLFqg-`,
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          onClick: () => _(_ === _ ? null : _),
                          size: `1`,
                          variant: _ === _ ? `basic` : `dark`,
                          children: _(_),
                        },
                        _,
                      ),
                    ),
                  }),
                (0, _.jsxs)(`label`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, _.jsx)(`input`, {
                      type: `checkbox`,
                      checked: _,
                      onChange: (_) => _(_.target.checked),
                    }),
                    ` Delete`,
                  ],
                }),
                (0, _.jsxs)(`label`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, _.jsx)(`input`, {
                      type: `checkbox`,
                      checked: _,
                      onChange: (_) => _(_.target.checked),
                    }),
                    ` Issue Warning`,
                  ],
                }),
                _ &&
                  !!_ &&
                  (0, _.jsxs)(`div`, {
                    className: _(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, _.jsx)(_, {}),
                      ` Content is older than 30 days. Are you sure you want to ban?`,
                    ],
                  }),
                _.clanSteamID &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`label`, {
                        htmlFor: `hubban`,
                        children: `Ban from hub:`,
                      }),
                      (0, _.jsxs)(`select`, {
                        _: `hubban`,
                        onChange: (_) =>
                          _(
                            _.target.value === `0`
                              ? null
                              : parseInt(_.target.value),
                          ),
                        value: _ ?? 0,
                        children: [
                          (0, _.jsx)(`option`, {
                            value: `0`,
                            children: `Do not ban`,
                          }),
                          (0, _.jsx)(`option`, {
                            value: `1`,
                            children: `1 day`,
                          }),
                          (0, _.jsx)(`option`, {
                            value: `3`,
                            children: `3 days`,
                          }),
                          (0, _.jsx)(`option`, {
                            value: `7`,
                            children: `7 days`,
                          }),
                          (0, _.jsx)(`option`, {
                            value: `14`,
                            children: `14 days`,
                          }),
                          (0, _.jsx)(`option`, {
                            value: `30`,
                            children: `30 days`,
                          }),
                          (0, _.jsx)(`option`, {
                            value: `90`,
                            children: `3 months`,
                          }),
                          (0, _.jsx)(`option`, {
                            value: `365`,
                            children: `1 year`,
                          }),
                          (0, _.jsx)(`option`, {
                            value: `-1`,
                            children: `Permanent`,
                          }),
                        ],
                      }),
                      !1,
                    ],
                  }),
                _ &&
                  !!_ &&
                  (0, _.jsxs)(`div`, {
                    className: _(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, _.jsx)(_, {}),
                      ` Content is older than 30 days. Are you sure you want to ban?`,
                    ],
                  }),
                (0, _.jsx)(`label`, {
                  htmlFor: `communityban`,
                  children: `Ban from community:`,
                }),
                (0, _.jsxs)(`select`, {
                  _: `communityban`,
                  onChange: (_) =>
                    _(_.target.value === `0` ? null : parseInt(_.target.value)),
                  value: _ ?? 0,
                  children: [
                    (0, _.jsx)(`option`, {
                      value: `0`,
                      children: `Do not ban`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `1`,
                      children: `1 day`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `3`,
                      children: `3 days`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `7`,
                      children: `7 days`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `14`,
                      children: `14 days`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `30`,
                      children: `30 days`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `90`,
                      children: `3 months`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `365`,
                      children: `1 year`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `-1`,
                      children: `Permanent`,
                    }),
                  ],
                }),
                !1,
                (0, _.jsx)(`label`, {
                  htmlFor: `deletecomments`,
                  children: `Delete comments since:`,
                }),
                (0, _.jsxs)(`select`, {
                  _: `deletecomments`,
                  disabled: _,
                  onChange: (_) =>
                    _(
                      _.target.value === `-1` ? null : parseInt(_.target.value),
                    ),
                  value: _ ?? -1,
                  children: [
                    (0, _.jsx)(`option`, {
                      value: `-1`,
                      children: `Do not delete`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `1`,
                      children: `1 day`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `7`,
                      children: `7 days`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `14`,
                      children: `14 days`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `30`,
                      children: `30 days`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: `0`,
                      children: `All comments`,
                    }),
                  ],
                }),
                (0, _.jsxs)(`span`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, _.jsx)(`input`, {
                      type: `checkbox`,
                      checked: _,
                      onChange: (_) => _(_.target.checked),
                    }),
                    `\xA0Permanent trade ban`,
                  ],
                }),
                !1,
                (0, _.jsxs)(`span`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, _.jsx)(`input`, {
                      type: `checkbox`,
                      checked: _,
                      onChange: (_) => _(_.target.checked),
                    }),
                    `\xA0Mark as suspicious`,
                  ],
                }),
                (0, _.jsx)(`label`, {
                  htmlFor: `escalateto`,
                  children: `Escalate to`,
                }),
                (0, _.jsxs)(`select`, {
                  _: `escalateto`,
                  onChange: (_) => _(parseInt(_.target.value)),
                  value: _,
                  children: [
                    (0, _.jsx)(`option`, {
                      value: 0,
                      children: `Do not escalate`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: 1,
                      children: `Supervisor`,
                    }),
                    (0, _.jsx)(`option`, {
                      value: 10,
                      children: `Valve`,
                    }),
                  ],
                }),
                (0, _.jsx)(`textarea`, {
                  className: _(`_0Aus5xkg4rs-`, `Obo5tCs0Dgo-`),
                  placeholder: `Message to send (required)`,
                  value: _,
                  onChange: (_) => _(_.target.value),
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              className: `iummRPlc5UA-`,
              children: [
                _.sanctionMutation.isPending &&
                  (0, _.jsx)(_, {
                    size: `small`,
                  }),
                !_.sanctionMutation.isPending &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        onClick: _.onCancel,
                        children: `Cancel`,
                      }),
                      (0, _.jsx)(_, {
                        onClick: _,
                        disabled: _ === null || !_ || _.trim().length === 0,
                        children: `Sanction`,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
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
    enabled: _ !== void 0,
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
  });
}
var _ = `qJiMpgjUBmw-`,
  _ = `TMrWHSfHqDs-`,
  _ = `RxrRIG6Jn9o-`;
function _(_) {
  let { subject: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _ && (_.unresolved_report_count > 0 || _.unresolved_dispute_count > 0),
    _ = (0, _.jsx)(_, {
      onClick: () => _(!0),
      children: (0, _.jsxs)(_, {
        direction: `row`,
        justify: `between`,
        align: `baseline`,
        gap: `1`,
        children: [
          _ &&
            (0, _.jsx)(`img`, {
              className: `tPmeaVOVhvg-`,
              src: `${_.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
            }),
          _.Localize(`#commentsanctiondialog_moderate`),
          _ &&
            _.required_moderator_level === 10 &&
            (0, _.jsx)(`span`, {
              className: `_2T5Cy4opNNw-`,
              children: `(VO)`,
            }),
          _ &&
            _.required_moderator_level === 1 &&
            (0, _.jsx)(`span`, {
              className: `WUCJ-cE1nNQ-`,
              children: `(Supervisor)`,
            }),
        ],
      }),
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
          ..._,
        }),
      _ &&
        (0, _.jsx)(_, {
          toolTipContent: (0, _.jsx)(_, {
            subject: _,
          }),
          direction: `bottom`,
          nDelayShowMS: 0,
          children: _,
        }),
      !_ && _,
    ],
  });
}
function _(_) {
  let { subject: _ } = _,
    _ = (0, _.useMemo)(() => {
      let _ = _(_?.reports ?? [], (_) => _.report_reason);
      return (_.sort((_, _) => _[1] - _[1]), _);
    }, [_.reports]);
  return _.length === 0
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            children: _.Localize(`#reasonlist_title`),
          }),
          _.map(([_, _]) =>
            (0, _.jsx)(
              `div`,
              {
                children: _.Localize(`#reasonlist_reasonwithcount`, _(_), _),
              },
              _,
            ),
          ),
        ],
      });
}
function _(_) {
  let {
      sanctionMutation: _,
      acquitMutation: _,
      subject: _,
      eSubjectType: _,
      gidComment: _,
      clanSteamID: _,
      authorSteamID: _,
      onClose: _,
    } = _,
    _ = _?.reported_content_id,
    [_, _] = (0, _.useState)(`main`),
    _ = [
      {
        name: `Reports`,
        key: `reports`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            subject: _,
          }),
        }),
      },
      {
        name: `History`,
        key: `history`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            reportedContentID: _,
          }),
        }),
      },
      {
        name: `Details`,
        key: `details`,
        contents: (0, _.jsx)(_, {
          children: _.children,
        }),
      },
    ],
    _ = () => {
      (_.onClose(),
        window.location.href.split(`#`).length === 1 &&
          _ !== `0` &&
          (window.location.href += `#c` + _),
        window.location.reload());
    },
    _ = 0,
    _ = 0;
  if (_)
    for (let _ of _.reports)
      (_.time_resolved && !_.time_disputed && _++,
        _.time_dispute_resolved && _++);
  let _ =
      !!_?.reported_content_id && !_.owner_dispute_time && _.resolved === 14,
    _ = _ !== void 0 && !!_.owner_dispute_time;
  return (0, _.jsx)(_, {
    onlyPopoutIfNeeded: !0,
    popupHeight: 340,
    popupWidth: 640,
    strTitle: `Moderate subject`,
    children: (0, _.jsx)(_, {
      bAllowFullSize: !0,
      title: `Moderate`,
      "aria-describedby": `moderate`,
      onCancel: _.onClose,
      className: void 0,
      children: (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _ === `main` &&
                (0, _.jsxs)(`div`, {
                  className: `Wgs3U5MVZxE-`,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: void 0,
                      children: [
                        (0, _.jsxs)(_, {
                          _: `div`,
                          size: `3`,
                          contrast: `description`,
                          children: [
                            _?.unresolved_report_count ?? 0,
                            ` unresolved / `,
                            _,
                            ` resolved / `,
                            _?.unresolved_dispute_count ?? 0,
                            ` disputed / `,
                            _,
                            ` disputes resolved`,
                          ],
                        }),
                        (0, _.jsx)(_, {
                          tabs: _,
                          bDisableRouting: !0,
                        }),
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `XevVgxU7JM8-`,
                      children: [
                        (0, _.jsx)(`button`, {
                          onClick: () => _(`sanction`),
                          children: (0, _.jsxs)(_, {
                            direction: `row`,
                            justify: `center`,
                            align: `center`,
                            children: [
                              (0, _.jsx)(_, {
                                className: `Pk8e-JCMLtM-`,
                              }),
                              ` Sanction`,
                            ],
                          }),
                        }),
                        (0, _.jsx)(_, {
                          subject: _,
                          acquitMutation: _,
                          onClose: _,
                        }),
                        (0, _.jsx)(_, {
                          subject: _,
                          onClose: _,
                        }),
                        _(_) &&
                          (0, _.jsx)(_, {
                            disabled: !_,
                            onClick: () => _(`escalate`),
                            children: _.Localize(
                              `#moderation_escalation_escalate`,
                            ),
                          }),
                        !_ &&
                          (0, _.jsx)(`button`, {
                            disabled: !_,
                            onClick: () => _(`ownerdispute`),
                            children: `Owner Dispute`,
                          }),
                        _ &&
                          (0, _.jsxs)(`span`, {
                            children: [
                              (0, _.jsx)(`a`, {
                                href: `${_.HELP_BASE_URL}ticketmaster/ticket/${_.owner_dispute_details}`,
                                children: (0, _.jsx)(_, {
                                  size: `2`,
                                  children: _.Localize(
                                    `#moderation_already_owner_disputed`,
                                  ),
                                }),
                              }),
                              (0, _.jsx)(`button`, {
                                disabled: !_,
                                onClick: () => _(`editownerdisputedetails`),
                                className: `VDTUVdDNhUU-`,
                                children: (0, _.jsx)(_, {}),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              _ === `escalate` &&
                !!_ &&
                (0, _.jsx)(_, {
                  reportedContentID: _,
                  eCurrentLevel: _?.required_moderator_level,
                  onClose: () => _(`main`),
                }),
              _ === `sanction` &&
                (0, _.jsx)(_, {
                  subject: _ ?? {
                    subject_type: _,
                  },
                  clanSteamID: _,
                  authorSteamID: _,
                  sanctionMutation: _,
                  onSanction: _,
                  onCancel: () => _(`main`),
                }),
              _ === `ownerdispute` &&
                !!_ &&
                (0, _.jsx)(_, {
                  reportedContentID: _,
                  onClose: () => _(`main`),
                }),
              _ === `editownerdisputedetails` &&
                !!_ &&
                (0, _.jsx)(_, {
                  reportedContentID: _,
                  onClose: () => _(`main`),
                  currentDetails: _?.owner_dispute_details ?? ``,
                }),
            ],
          }),
        }),
      }),
    }),
  });
}
function _(_) {
  let { reportedContentID: _, onClose: _, currentDetails: _ } = _,
    [_, _] = (0, _.useState)(_),
    _ = _(_, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`label`, {
        children: [
          (0, _.jsx)(_, {
            size: `2`,
            children: _.Localize(`#moderation_editownerdisputedetails_label`),
          }),
          (0, _.jsx)(`input`, {
            type: `text`,
            value: _,
            onChange: (_) => _(_.target.value),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        justify: `between`,
        direction: `row`,
        children: [
          (0, _.jsx)(_, {
            onClick: async () => {
              (await _.mutateAsync(), _());
            },
            children: _.Localize(`#moderation_editownerdisputedetails_save`),
          }),
          (0, _.jsx)(_, {
            onClick: _,
            loading: _.isPending,
            children: _.Localize(`#moderation_ownerdispute_cancel`),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { reportedContentID: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(``),
    _ = _(_, _);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        _: `div`,
        size: `2`,
        children: _.Localize(`#moderation_ownerdispute_description`),
      }),
      (0, _.jsxs)(`label`, {
        children: [
          (0, _.jsx)(_, {
            size: `2`,
            children: _.Localize(`#moderation_ownerdispute_ticketmastercode`),
          }),
          ` `,
          (0, _.jsx)(`input`, {
            type: `text`,
            value: _,
            onChange: (_) => _(_.target.value),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        justify: `between`,
        direction: `row`,
        children: [
          (0, _.jsx)(_, {
            onClick: async () => {
              (await _.mutateAsync(), _());
            },
            children: _.Localize(`#moderation_ownerdispute_dispute`),
          }),
          (0, _.jsx)(_, {
            onClick: _,
            children: _.Localize(`#moderation_ownerdispute_cancel`),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { acquitMutation: _, onClose: _, subject: _ } = _,
    _ = _ && (_.unresolved_report_count > 0 || _.unresolved_dispute_count > 0);
  return (0, _.jsx)(`button`, {
    onClick: async () => {
      (await _.mutateAsync(void 0), _());
    },
    disabled: !_,
    children: (0, _.jsxs)(_, {
      direction: `row`,
      justify: `center`,
      align: `center`,
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        ` `,
        _.Localize(`#moderation_actions_acquit`),
      ],
    }),
  });
}
function _(_) {
  let { subject: _, onClose: _ } = _,
    _ =
      !!_?.reported_content_id &&
      _.resolved !== 0 &&
      (_.unresolved_dispute_count > 0 || _.unresolved_report_count > 0),
    _ = _();
  return (0, _.jsx)(`button`, {
    onClick: async () => {
      _?.reported_content_id &&
        (await _.mutateAsync({
          reportedContentID: _.reported_content_id,
        }),
        _());
    },
    disabled: !_,
    children: _.Localize(`#moderation_actions_sustain`),
  });
}
