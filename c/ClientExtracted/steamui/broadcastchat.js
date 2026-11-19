import { _, _, _, _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
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
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
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
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { _ } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { _, _, _, _, _ } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { _, _, _, _, _, _ } from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import { _, _, _ } from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { _ } from "./chunk~008c00a198.js?contenthash=NNKy49Vx";
import { _, _, _, _, _ } from "./chunk~cbbb6ae37c.js?contenthash=B4MrjhKD";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
import { _ } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { _, _ } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { _, _, _, _, _, _, _, _, _ } from "./library.js?contenthash=CVZWwsCP";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~10c934b72c.js?contenthash=IxHE0rXA";
import { _ } from "./chunk~103fa94b69.js?contenthash=BAq6YOYj";
import { _, _, _, _, _, _ } from "./chunk~f25232ab1e.js?contenthash=jFptedFN";
import { _, _, _, _, _ } from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
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
} from "./chunk~a19d1add1e.js?contenthash=DkmUHNtw";
import { _ } from "./chunk~9a3ef4764b.js?contenthash=g05b6BBB";
import { _ } from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import "./chunk~8681f5c764.js?contenthash=CAkdBbB8";
import { _, _, _ } from "./chunk~a292304e38.js?contenthash=CdSTH8yM";
import { _, _ } from "./chunk~971d501580.js?contenthash=CxRXdK1L";
import { _, _ } from "./chunk~5f339e9a5f.js?contenthash=Dj-RoKCb";
import "./chunk~92931c6310.js?contenthash=C5UJ3B2Y";
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.impressions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            impressions: {
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
      return `CProductImpressionsFromClient_Notification`;
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
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_impressions: {
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
      return `CProductImpressionsFromClient_Notification_Impression`;
    }
  },
  _;
(function (_) {
  function _(_, _) {
    return _.SendNotification(
      `ExperimentService.ReportProductImpressionsFromClient#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportProductImpressionsFromClient = _;
})((_ ||= {}));
var _ = _(_(), 1),
  _ = _(),
  _ = _(_()),
  _ = _(_()),
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
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
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
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.dictionary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            dictionary: {
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
      return `CSteamEngine_GetTextFilterDictionary_Response`;
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
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.pid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            pid: {
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
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
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
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            should_handle: {
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
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.search_term || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            search_term: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            max_results: {
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
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
    }
  },
  _ = class _ extends _.Message {
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
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Response`;
    }
  },
  _;
(function (_) {
  _.UpdateTextFilterDictionaryHandler = {
    name: `SteamEngine.UpdateTextFilterDictionary#1`,
    request: _,
  };
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.UpdateTextFilterDictionaryHandler,
            _,
          )
    );
  }
  _.RegisterForUpdateTextFilterDictionary = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.UpdateTextFilterDictionary = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  ((_.SendMsgUpdateTextFilterDictionary = _),
    (_.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: _,
      response: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetTextFilterDictionary = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((_.SendMsgGetTextFilterDictionary = _),
    (_.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyTextFilterDictionaryChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTextFilterDictionaryChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyTextFilterDictionaryChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  ((_.SendMsgNotifyTextFilterDictionaryChanged = _),
    (_.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: _,
      response: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`SteamEngine.GetGameIDForPID#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetGameIDForPID = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`SteamEngine.GetGameIDForPID#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((_.SendMsgGetGameIDForPID = _),
    (_.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.SetOverlayEscapeKeyHandlingHandler,
            _,
          )
    );
  }
  _.RegisterForSetOverlayEscapeKeyHandling = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SetOverlayEscapeKeyHandling = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  ((_.SendMsgSetOverlayEscapeKeyHandling = _),
    (_.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: _,
      response: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SearchAppDataCacheByStoreKeywords = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SendMsgSearchAppDataCacheByStoreKeywords = _;
})((_ ||= {}));
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.auth_key || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            auth_key: {
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
      return `CTransportAuth_Authenticate_Request`;
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
      return `CTransportAuth_Authenticate_Response`;
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
      return `CTransportAuth_StartShutdown_Notification`;
    }
  },
  _;
(function (_) {
  _.AuthenticateHandler = {
    name: `TransportAuth.Authenticate#1`,
    request: _,
    response: _,
  };
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`TransportAuth.Authenticate#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.Authenticate = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`));
          })
        : _.SendMsg(`TransportAuth.Authenticate#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  ((_.SendMsgAuthenticate = _),
    (_.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: _,
    }));
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyStartShutdownHandler, _)
    );
  }
  _.RegisterForNotifyStartShutdown = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`TransportAuth.NotifyStartShutdown#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.NotifyStartShutdown = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`TransportAuth.NotifyStartShutdown#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.SendMsgNotifyStartShutdown = _;
})((_ ||= {}));
var _ = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new _(`CWebSocketConnection`, () => this.m_sName);
  m_bDisconnectRequested = !1;
  m_bConnecting = !1;
  m_fnOnMessageHandler;
  m_fnOnCloseHandler;
  m_fnOnReconnectStartHandler;
  m_fnOnReconnectFinishHandler;
  m_nConnectAttemptsMax;
  m_nConnectAttemptTimeoutMs;
  m_bReconnectOnFailure;
  m_nReconnectAttemptTimeoutMs;
  m_nReconnectAttemptsMax;
  constructor(_, _) {
    ((this.m_sName = _),
      (this.m_fnOnMessageHandler = _.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = _.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        _.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        _.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = _.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = _.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = _.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = _.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs =
        _.nReconnectAttemptTimeoutMs ?? 1e4));
  }
  get name() {
    return this.m_sName;
  }
  async Connect(_) {
    return (
      (this.m_sURL = _),
      this.ConnectWithRetry(
        this.m_sURL,
        this.m_nConnectAttemptsMax,
        this.m_nConnectAttemptTimeoutMs,
      )
    );
  }
  async Reconnect() {
    return this.ConnectWithRetry(
      this.m_sURL,
      this.m_nReconnectAttemptsMax,
      this.m_nReconnectAttemptTimeoutMs,
    );
  }
  GetInterAttemptBackoffMs(_) {
    return _(_, 1, 5) * 1e3;
  }
  async ConnectWithRetry(_, _, _) {
    this.m_bConnecting = !0;
    let _ = 0;
    do {
      try {
        let _ = await this.ConnectToSocket(_, _);
        if (_.result == 1) return ((this.m_bConnecting = !1), _);
        this.Log.Warning(`connect attempt failed: ${_.result} - ${_.message}`);
      } catch (_) {
        this.Log.Warning(`connect attempt failed: exception ${_.name} - ${_}`);
      }
      let _ = this.GetInterAttemptBackoffMs(_);
      (this.Log.Info(`connect retry: attempt:${_}/${_} backoff:${_}`),
        await new Promise((_) => setTimeout(_, _)),
        (this.m_socket = null),
        (_ += 1));
    } while (_ < _);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      {
        result: 2,
        message: `not ready, exceeded retry count`,
      }
    );
  }
  Disconnect() {
    (this.Log.Info(`disconnect requested`),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close());
  }
  PrepareForShutdown() {
    (this.Log.Info(`shutdown pending`), (this.m_bDisconnectRequested = !0));
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    (this.Log.Info(`start reconnect`),
      (this.m_socket = null),
      this.m_fnOnReconnectStartHandler({
        connection: this,
      }),
      (await this.Reconnect()).result == 1
        ? (this.Log.Info(`reconnect successful`),
          this.m_fnOnReconnectFinishHandler({
            connection: this,
            eResult: 1,
          }))
        : (this.Log.Warning(`failed to re-connect to websocket after close`),
          this.m_fnOnReconnectFinishHandler({
            connection: this,
            eResult: 2,
          }),
          this.m_fnOnCloseHandler({
            connection: this,
            bError: !0,
            bIsExpectedToReconnect: !1,
          })));
  }
  async ConnectToSocket(_, _) {
    if (this.m_socket != null)
      return this.m_socket.readyState == WebSocket.OPEN
        ? {
            result: 1,
            message: `ready`,
          }
        : (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          {
            result: 2,
            message: `websocket in an unexpected state`,
          });
    try {
      this.m_socket = new WebSocket(_);
    } catch {
      return (
        this.Log.Warning(`failed to initialize websocket connection`),
        {
          result: 35,
          message: `Failed to initialize websocket connection`,
        }
      );
    }
    return (
      (this.m_socket.binaryType = `arraybuffer`),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, _))
        ? (this.Log.Info(`connection ready`),
          {
            result: 1,
            message: `ready`,
          })
        : (this.Log.Warning(`failed to reach open state`),
          {
            result: 2,
            message: `failed to reach open state`,
          })
    );
  }
  async WaitForSocketOpen(_, _) {
    if (_.readyState != WebSocket.CONNECTING)
      return _.readyState == WebSocket.OPEN;
    let _ = _ / 100;
    for (; _.readyState == WebSocket.CONNECTING && _ > 0;)
      (_--, await new Promise((_) => setTimeout(_, 100)));
    return _.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
  }
  OnSocketError(_) {
    this.Log.Warning(`websocket error`);
  }
  OnSocketOpen(_) {
    this.Log.Info(`websocket open`);
  }
  OnSocketClose(_) {
    if (this.m_bDisconnectRequested) {
      (this.Log.Info(`websocket closed`),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        }));
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning(`websocket unexpectedly closed`);
    let _ = this.BShouldReconnect();
    (this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: _,
    }),
      _ && this.StartReconnect());
  }
  async OnSocketMessage(_) {
    this.m_fnOnMessageHandler(_.data);
  }
  SendSerializedMessage(_) {
    try {
      return (this.m_socket.send(_), 1);
    } catch {
      return 2;
    }
  }
};
(_([_], _.prototype, `OnSocketError`, null),
  _([_], _.prototype, `OnSocketOpen`, null),
  _([_], _.prototype, `OnSocketClose`, null),
  _([_], _.prototype, `OnSocketMessage`, null));
var _ = `127.0.0.1`,
  _ = new _(`WebUITransport`),
  _ = class {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new _();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 67108864;
    }
    ReportError(_) {
      _.Warning(_);
      let _ = _();
      _ &&
        _.ReportError(Error(_), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!_.IN_CLIENT) return;
      let _ = await SteamClient.WebUITransport.GetTransportInfo();
      ((this.m_nMaximumMsgSizeBytes = _.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, _.portSteamUI, _.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          _.portClientdll,
          _.authKeyClientdll,
        ),
        _().SetDefaultTransport(this),
        _().SetDefaultHandlerRegistry(this.m_messageHandlers),
        _.RegisterForNotifyStartShutdown(this.OnStartShutdown));
    }
    get messageHandlers() {
      return this.m_messageHandlers;
    }
    SetStatusEventHandler(_) {
      this.m_fnOnStatusEventHandler = _;
    }
    SetReconnectErrorHandler(_) {
      this.m_fnOnReconnectErrorHandler = _;
    }
    CreateConnection(_, _, _, _) {
      let _ = {
        connection: new _(_, {
          bReconnectOnFailure: !0,
          fnOnMessageHandler: this.OnWebsocketMessage,
          fnOnCloseHandler: this.OnWebsocketClose,
          fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
          fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
          nConnectAttemptsMax: 8,
          nConnectAttemptTimeoutMs: 1e4,
          nReconnectAttemptsMax: 8,
          nReconnectAttemptTimeoutMs: 1e4,
        }),
        sUrl: `ws://${_}:${_}/transportsocket/`,
        sAuthKey: _,
        eClientExecutionSite: _,
      };
      this.m_mapConnectionDetails.set(_, _);
    }
    SendMsg(_, _, _, _) {
      return new Promise((_, _) => {
        let _ = _.eClientExecutionSite;
        if (_ == null || _ == 0) {
          (_.Error(`SendMsg: Invalid client execution site: ${_}`),
            _(`Transport SendMsg: invalid client execution site ${_}`));
          return;
        }
        let _ = this.m_mapConnectionDetails.get(_);
        if (_ == null) {
          (_.Error(
            `SendMsg: could not find connection for execution site: ${_}`,
          ),
            _(
              `Transport SendMsg: could not find connection for execution site ${_}`,
            ));
          return;
        }
        let _ = _.connection;
        if (!_.BCanSendMessages()) {
          let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
          this.m_mapServiceCallErrorCount.set(_, _ + 1);
          let _ = `SendMsg: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
          (_ == 1 && this.ReportError(_),
            _.Warning(_ + ` error count: ${_}`),
            _(`Transport SendMsg: socket not ready`));
          return;
        }
        let _ = this.m_iMsgSeq++;
        (_.SetEMsg(146),
          _.Hdr().set_target_job_name(_),
          _.Hdr().set_jobid_source(`` + _));
        let _ = _.Serialize();
        if (_.byteLength >= this.m_nMaximumMsgSizeBytes) {
          _.Error(
            `SendMsg: message exceeds maximum size: ${_.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let _ = _.Init(_);
          (_.Hdr().set_eresult(2), _(_));
        } else
          _.SendSerializedMessage(_) == 1
            ? this.m_mapPendingMethodRequests.set(_, {
                m_iSeq: _,
                m_sServiceName: _,
                m_responseClass: _,
                m_fnCallback: _,
                m_fnError: _,
              })
            : (_.Error(`SendMsg: Failed to send message`),
              _(`Transport SendMsg: failed to send message`));
      });
    }
    SendNotification(_, _, _) {
      let _ = _.eClientExecutionSite;
      if (_ == null || _ == 0)
        return (
          _.Error(`SendNotification: Invalid client execution site: ${_}`), !1
        );
      let _ = this.m_mapConnectionDetails.get(_);
      if (_ == null)
        return (
          _.Error(
            `SendNotification: could not find connection for execution site: ${_}`,
          ),
          !1
        );
      let _ = _.connection;
      if (!_.BCanSendMessages()) {
        let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
        this.m_mapServiceCallErrorCount.set(_, _ + 1);
        let _ = `SendNotification: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
        return (
          _ == 1 && this.ReportError(_), _.Warning(_ + ` error count: ${_}`), !1
        );
      }
      return (
        _.SetEMsg(146),
        _.Hdr().set_target_job_name(_),
        _.SendSerializedMessage(_.Serialize()) == 1
      );
    }
    async ConnectToSite(_) {
      let _ = await _.connection.Connect(_.sUrl);
      return _.result == 1
        ? (await this.SendAuthMessage(_)).BSuccess()
          ? {
              result: 1,
              message: `connected`,
            }
          : {
              result: 2,
              message: `client auth failed`,
            }
        : _;
    }
    async MakeReady() {
      let _ = [];
      for (let [_, _] of this.m_mapConnectionDetails)
        _.push(this.ConnectToSite(_));
      let _ = await Promise.all(_);
      ((this.m_bInitialized = !0), this.DispatchTransportStatusUpdate());
      for (let _ of _) if (_.result != 1) return _;
      return {
        result: 1,
        message: `ready`,
      };
    }
    GetConnectionDetails(_) {
      for (let [_, _] of this.m_mapConnectionDetails)
        if (_.connection === _) return _;
      return (
        _.Error(`GetConnectionDetails: failed to identify connection`), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let _ = !0;
      for (let [_, _] of this.m_mapConnectionDetails)
        _.connection.BCanSendMessages() || (_ = !1);
      this.m_fnOnStatusEventHandler({
        bConnected: _,
      });
    }
    OnWebsocketReconnectStart(_) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(_) {
      if ((this.DispatchTransportStatusUpdate(), _.eResult != 1)) {
        (_.Warning(`OnWebsocketReconnect: Failed to reconnect to steam client`),
          this.m_fnOnReconnectErrorHandler?.({}));
        return;
      }
      this.FailAllPendingRequests();
      let _ = this.GetConnectionDetails(_.connection);
      _ && this.SendAuthMessage(_);
    }
    OnWebsocketClose(_) {
      _.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(_) {
      let _ = new _(_),
        _ = _.InitHeaderFromPacket(_);
      _.Hdr().jobid_target() &&
      _.Hdr().jobid_target() !== `18446744073709551615`
        ? this.DispatchMethodResponse(_)
        : this.DispatchNotification(_);
    }
    DispatchMethodResponse(_) {
      let _ = parseInt(_.Hdr().jobid_target()),
        _ = this.m_mapPendingMethodRequests.get(_);
      if (_ == null) {
        _(!1, `Transport Error: no pending callback for request`);
        return;
      }
      (_(_ == _.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(_));
      let _ = _.InitFromMsg(_.m_responseClass, _);
      (_.BIsValid() ||
        _()?.ReportError(
          Error(
            `WebUITransport: failed to parse response for ${_.m_sServiceName}`,
          ),
          {
            bIncludeMessageInIdentifier: !0,
          },
        ),
        _.m_fnCallback(_));
    }
    DispatchNotification(_) {
      this.m_messageHandlers.DispatchMsgToHandlers(_, (_) => {
        _(!1, `Transport Error: A notification should not generate a response`);
      });
    }
    FailAllPendingRequests() {
      for (let [_, _] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${_.m_responseClass.name}`,
        );
        let _ = _.Init(_.m_responseClass);
        (_.Hdr().set_eresult(2), _.m_fnCallback(_));
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(_) {
      let _ = _.AuthenticateHandler.name,
        _ = {
          eClientExecutionSite: _.eClientExecutionSite,
        },
        _ = _.Init(_);
      return (
        _.Hdr().set_webui_auth_key(_.sAuthKey),
        await this.SendMsg(_, _, _.AuthenticateHandler.response, _)
      );
    }
    OnStartShutdown(_) {
      for (let [_, _] of this.m_mapConnectionDetails)
        _.connection.PrepareForShutdown();
      return 1;
    }
  };
(_([_], _.prototype, `OnWebsocketReconnectStart`, null),
  _([_], _.prototype, `OnWebsocketReconnectFinish`, null),
  _([_], _.prototype, `OnWebsocketClose`, null),
  _([_], _.prototype, `OnWebsocketMessage`, null),
  _([_], _.prototype, `OnStartShutdown`, null));
var _ = new _();
function _() {
  return _.IN_MOBILE ? _ : _();
}
function _(_) {
  if (_ === ``) return !1;
  try {
    return (RegExp(`\\b(` + _ + `)\\b`, `ugi`), !0);
  } catch {
    return (
      console.log(`'${_}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var _ = 15,
  _ = 3600,
  _ = `(1)`,
  _ = class {
    m_WebUIServiceTransport;
    m_unAccountID;
    m_Transport = null;
    m_Storage = null;
    m_TextFilterPreferences = {
      eTextFilterSetting: 3,
      bIgnoreFriends: !1,
    };
    m_TextFilterWords;
    m_mapPlayerCache = new Map();
    m_strBannedWords = ``;
    m_strProfanityWords = ``;
    m_strCleanWords = ``;
    m_strBannedPattern = ``;
    m_strCleanPattern = ``;
    m_bWordListsComplete = !1;
    m_bHaveCompleteFilter = !1;
    m_regexBannedWords = null;
    m_regexCleanWords = null;
    m_bShownFilterTip = !1;
    m_bInitialized = !1;
    m_bFilterChangedWhileLoading = !1;
    m_bOngoingLoad = !1;
    m_promiseOngoingLoad = null;
    m_fnUnregisterDictionaryChanged = void 0;
    m_rgUnregisterPlayerNotifications = [];
    m_DataAccess;
    constructor(_) {
      _(this);
      let _ = new _();
      ((this.m_TextFilterPreferences = {
        eTextFilterSetting: _.text_filter_setting(),
        bIgnoreFriends: _.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new _()),
        (this.m_DataAccess = _));
    }
    async Init(_ = 0, _ = null, _ = null, _ = null) {
      ((this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = _),
        (this.m_unAccountID = _),
        (this.m_Transport = _),
        (this.m_Storage = _),
        (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        this.InitSteamEngineLanguages(),
        this.RegisterPlayerNotifications(_),
        await this.LoadFilter(),
        await this.LoadTextFilterPreferences(),
        await this.LoadTextFilterWords(),
        await this.RequestUpdatedSettings(),
        (this.m_nLoadLanguagesRetryDelaySec = _),
        await this.EnsureFiltersLoaded());
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_fnUnregisterDictionaryChanged?.(),
        (this.m_fnUnregisterDictionaryChanged =
          this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
            _.NotifyTextFilterDictionaryChangedHandler,
            this.OnTextFilterDictionaryChanged,
          ).unregister),
        this.InitSteamEngineLanguage(_.LANGUAGE),
        _.LANGUAGE !== `english` && this.InitSteamEngineLanguage(`english`));
    }
    OnTextFilterDictionaryChanged(_) {
      return (
        !this.m_bInitialized && !this.m_bOngoingLoad
          ? (this.m_bFilterChangedWhileLoading = !0)
          : ((this.m_nLoadLanguagesRetryDelaySec = _),
            this.EnsureFiltersLoaded()),
        1
      );
    }
    EnsureFiltersLoaded() {
      return this.m_bOngoingLoad && this.m_promiseOngoingLoad
        ? ((this.m_bFilterChangedWhileLoading = !0), this.m_promiseOngoingLoad)
        : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
          this.m_promiseOngoingLoad);
    }
    async InitFiltersWithRetry() {
      this.m_bOngoingLoad = !0;
      try {
        do
          ((this.m_bFilterChangedWhileLoading = !1),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0));
        while (this.m_bFilterChangedWhileLoading);
      } finally {
        ((this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null));
      }
    }
    RegisterPlayerNotifications(_) {
      (this.m_rgUnregisterPlayerNotifications.forEach((_) => _()),
        (this.m_rgUnregisterPlayerNotifications = []),
        _ &&
          this.m_rgUnregisterPlayerNotifications.push(
            _.RegisterServiceNotificationHandler(
              _.NotifyCommunityPreferencesChangedHandler,
              (_) => (
                this.UpdateCommunityPreferences(_.Body().preferences()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
            _.RegisterServiceNotificationHandler(
              _.NotifyTextFilterWordsChangedHandler,
              (_) => (
                this.UpdateTextFilterWords(_.Body().words()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
          ));
    }
    OnPlayerSettingsChanged() {
      this.m_bInitialized && !this.m_bOngoingLoad && this.OnFilterDataChanged();
    }
    InitSteamEngineLanguage(_) {
      let _ = _.Init(_);
      (_.Body().set_language(_),
        _.Body().set_type(`profanity`),
        _.SendMsgUpdateTextFilterDictionary(_, this.m_WebUIServiceTransport),
        _.Body().set_type(`banned`),
        _.SendMsgUpdateTextFilterDictionary(_, this.m_WebUIServiceTransport));
    }
    GetSteamEngineTextFilterDictionary(_, _) {
      let _ = _.Init(_);
      return (
        _.Body().set_language(_),
        _.Body().set_type(_),
        _.SendMsgGetTextFilterDictionary(_, this.m_WebUIServiceTransport)
      );
    }
    GetStorageKey(_) {
      return _ + `_` + this.m_unAccountID;
    }
    async LoadTextFilterPreferences() {
      if (this.m_Storage) {
        let _ = await this.m_Storage.GetObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
        );
        _ && (this.m_TextFilterPreferences = _);
      }
    }
    SaveTextFilterPreferences() {
      this.m_Storage &&
        this.m_Storage.StoreObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
          this.m_TextFilterPreferences,
        );
    }
    ObfuscateString(_) {
      try {
        let _ = new TextEncoder().encode(_ + _);
        return _.fromByteArray(_);
      } catch {
        return ``;
      }
    }
    DeobfuscateString(_) {
      try {
        let _ = _.toByteArray(_),
          _ = new TextDecoder().decode(_);
        return _.startsWith(_)
          ? ((_ = _.slice(3)), _)
          : (console.log(
              `DeobfuscateString given invalid base64 data, ignoring: ` + _,
            ),
            ``);
      } catch {
        return ``;
      }
    }
    async LoadObfuscatedString(_) {
      if (this.m_Storage) {
        let _ = await this.m_Storage.GetString(this.GetStorageKey(_));
        if (_) return this.DeobfuscateString(_);
      }
      return null;
    }
    async SaveObfuscatedString(_, _) {
      this.m_Storage &&
        this.m_Storage.StoreString(
          this.GetStorageKey(_),
          this.ObfuscateString(_),
        );
    }
    async LoadTextFilterWords() {
      let _ = await this.LoadObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
      );
      if (_)
        try {
          this.m_TextFilterWords = _.fromObject(JSON.parse(_));
        } catch {
          (console.warn(`Error parsing cached text filter word list`, _),
            (this.m_TextFilterWords = new _()));
        }
    }
    SaveTextFilterWords() {
      this.SaveObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
        JSON.stringify(this.m_TextFilterWords.toObject()),
      );
    }
    async LoadFilter() {
      let _ = await this.LoadObfuscatedString(
          `CTextFilterStore_strBannedPattern`,
        ),
        _ = await this.LoadObfuscatedString(`CTextFilterStore_strCleanPattern`);
      ((this.m_bHaveCompleteFilter = _ != null && _ != null),
        _ != null && _ != null && this.BRebuildFilter(_, _));
    }
    SaveFilter() {
      (this.SaveObfuscatedString(
        `CTextFilterStore_strBannedPattern`,
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          `CTextFilterStore_strCleanPattern`,
          this.m_strCleanPattern,
        ));
    }
    async RequestUpdatedSettings() {
      let _ = new _();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let _ = _.Init(_);
            _ = (await _.GetCommunityPreferences(this.m_Transport, _))
              .Body()
              .preferences();
          } else {
            let _ = {
                sessionid: _(),
                origin: _(),
              },
              _ = await _.default.get(
                _.COMMUNITY_BASE_URL + `textfilter/ajaxgetcommunitypreferences`,
                {
                  params: _,
                  withCredentials: !0,
                },
              );
            _ = _.fromObject(_.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(_),
        _.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let _ = new _();
        if (_.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let _ = _.Init(_);
              _ = (await _.GetTextFilterWords(this.m_Transport, _))
                .Body()
                .words();
            } else {
              let _ = {
                  sessionid: _(),
                  origin: _(),
                },
                _ = await _.default.get(
                  _.COMMUNITY_BASE_URL +
                    `textfilter/ajaxgettextfiltercustomwords`,
                  {
                    params: _,
                    withCredentials: !0,
                  },
                );
              _ = _.fromObject(_.data.words);
            }
          } catch {}
        this.UpdateTextFilterWords(_);
      }
    }
    UpdateCommunityPreferences(_) {
      let _ = !1;
      (_.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          _.text_filter_setting()),
        (_ = !0)),
        _.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            _.text_filter_ignore_friends()),
          (_ = !0)),
        _ && this.SaveTextFilterPreferences());
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(_) {
      ((this.m_TextFilterWords = _), this.SaveTextFilterWords());
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    m_nLoadLanguagesRetryDelaySec = _;
    async LoadLanguages() {
      ((this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0)));
      try {
        let _ = await this.LoadLanguage(_.LANGUAGE);
        if (
          (_.LANGUAGE !== `english` &&
            (_ = (await this.LoadLanguage(`english`)) && _),
          !_)
        )
          throw Error(`clean_public dictionary unavailable`);
        ((this.m_nLoadLanguagesRetryDelaySec = _),
          (this.m_bWordListsComplete = !0));
      } catch (_) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          _,
        );
        let _ = this.m_nLoadLanguagesRetryDelaySec;
        (console.warn(`LoadLanguages caught`, _, `retry in`, _, `seconds`),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
            ((this.m_nLoadLanguagesRetryTimeout = void 0),
              this.EnsureFiltersLoaded());
          }, _ * 1e3)));
      }
    }
    async LoadLanguage(_) {
      let _ = ``,
        _ = !1;
      if (this.m_WebUIServiceTransport.BIsValid())
        try {
          {
            let _ = await this.GetSteamEngineTextFilterDictionary(_, `banned`);
            this.m_strBannedWords += _.Body().dictionary();
          }
          {
            let _ = await this.GetSteamEngineTextFilterDictionary(
              _,
              `profanity`,
            );
            this.m_strProfanityWords += _.Body().dictionary();
          }
          _ = !0;
        } catch (_) {
          console.warn(`LoadLanguage caught while loading from cache:`, _);
        }
      if (!_) {
        _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${_}&v=1&origin=${_()}`;
        {
          let _ = await _.default.get(_);
          this.m_strBannedWords += _.data;
        }
        _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${_}&v=1&origin=${_()}`;
        {
          let _ = await _.default.get(_);
          this.m_strProfanityWords += _.data;
        }
      }
      let _ = this.m_WebUIServiceTransport.BIsValid(),
        _ = `CTextFilterStore_strCleanPublic_` + _;
      _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${_}&v=1&origin=${_()}`;
      try {
        let _ = await _.default.get(_);
        ((this.m_strCleanWords += _.data),
          _ && this.SaveObfuscatedString(_, _.data));
      } catch (_) {
        console.warn(`LoadLanguage caught while loading clean list:`, _);
        let _ = _ ? await this.LoadObfuscatedString(_) : null;
        if (!_) return !1;
        this.m_strCleanWords += _;
      }
      return !0;
    }
    CreatePattern(_) {
      let _ = _.filter(function (_) {
        return _(_);
      });
      return _.length > 0 ? `\\b(` + _.join(`|`) + `)\\b` : ``;
    }
    OnFilterDataChanged() {
      if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter) return;
      let _ = new RegExp(/\s*[\r\n]+\s*/g),
        _ = [],
        _ = [];
      switch (this.m_TextFilterPreferences.eTextFilterSetting) {
        case 0:
          break;
        case 3:
          break;
        case 2:
          _ = _.concat(this.m_strBannedWords.split(_));
          break;
        default:
          _ = _.concat(
            this.m_strProfanityWords.split(_),
            this.m_strBannedWords.split(_),
          );
      }
      ((_ = _.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (_ = this.m_strCleanWords.split(_)),
        (_ = _.concat(
          this.m_TextFilterWords.text_filter_custom_clean_words(),
        )));
      let _ = this.CreatePattern(_),
        _ = this.CreatePattern(_);
      (_ != `` && (_ = `^(` + _ + `)$`),
        this.BRebuildFilter(_, _) &&
          this.m_bWordListsComplete &&
          this.SaveFilter(),
        (this.m_bHaveCompleteFilter = this.m_bWordListsComplete));
    }
    BRebuildFilter(_, _) {
      if (_ === this.m_strBannedPattern && _ === this.m_strCleanPattern)
        return !1;
      if (
        ((this.m_regexBannedWords = null),
        (this.m_strBannedPattern = _),
        _ !== ``)
      )
        try {
          this.m_regexBannedWords = new RegExp(_, `ugi`);
        } catch (_) {
          (console.warn(`Couldn't compile textfilter bannedwords regex`),
            _().ReportError(
              Error(`Couldn't compile textfilter bannedwords regex: ${_}`),
            ),
            (this.m_strBannedPattern = ``));
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = _),
        _ !== ``)
      )
        try {
          this.m_regexCleanWords = new RegExp(_, `ugi`);
        } catch (_) {
          (console.warn(`Couldn't compile textfilter cleanwords regex`),
            _().ReportError(
              Error(`Couldn't compile textfilter cleanwords regex: ${_}`),
            ),
            (this.m_strCleanPattern = ``));
        }
      return !0;
    }
    CreateProfanityReplacement(_) {
      return `♥`.repeat(_);
    }
    BHasFilter() {
      return this.m_regexBannedWords != null;
    }
    BShownFilterTip() {
      return this.m_bShownFilterTip;
    }
    SetFilterTipShown(_) {
      this.m_bShownFilterTip = _;
    }
    FilterText(_, _) {
      if (!this.m_regexBannedWords) return _;
      let _ = 0;
      return (
        typeof _ == `string` && _ !== ``
          ? (_ = new _(_).GetAccountID())
          : typeof _ == `number` && (_ = _),
        !_ ||
        _ == this.m_unAccountID ||
        (_ &&
          this.m_TextFilterPreferences.bIgnoreFriends &&
          this.m_DataAccess.BIsFriend(_))
          ? _
          : _.replace(this.m_regexBannedWords, (_) =>
              this.m_regexCleanWords && _.search(this.m_regexCleanWords) == 0
                ? _
                : this.CreateProfanityReplacement(_.length),
            )
      );
    }
  };
(_([_], _.prototype, `m_TextFilterPreferences`, void 0),
  _([_], _.prototype, `m_mapPlayerCache`, void 0),
  _([_], _.prototype, `m_regexBannedWords`, void 0),
  _([_], _.prototype, `m_regexCleanWords`, void 0),
  _([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_bFilterChangedWhileLoading`, void 0),
  _([_], _.prototype, `m_bOngoingLoad`, void 0),
  _([_], _.prototype, `Init`, null),
  _([_], _.prototype, `OnTextFilterDictionaryChanged`, null),
  _([_], _.prototype, `UpdateCommunityPreferences`, null),
  _([_], _.prototype, `BRebuildFilter`, null));
var _;
function _() {
  if (!_) {
    let _ = new Set(),
      _ = {
        sessionid: _(),
        origin: _(),
      };
    (_.default
      .get(_.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: _,
        withCredentials: !0,
      })
      .then((_) => {
        for (let _ of _.data.friendslist?.friends ?? [])
          _(_.efriendrelationship) && _.add(new _(_.ulfriendid).GetAccountID());
      }),
      (_ = (_) => _.has(_)));
  }
  return _;
}
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    _ = 0,
    _;
  for (; (_ = _.exec(_));) {
    ((_ += _[0].length), _.push(_[1]));
    let _ = parseInt(_[2]),
      _ = _[3] || ``,
      _ = _(_, ..._),
      _ =
        _ >= 1 && _ <= _.length && _[_ - 1]
          ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
          : _;
    _.push(_);
  }
  return (_.push(_.substr(_)), _.createElement(_.Fragment, null, ..._));
}
var _ = _(_(), 1),
  _ = _({
    Button: () => _,
    Icon: () => _,
    MinWidth: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Variant-basic": () => _,
    "Variant-dark": () => _,
    "Variant-ghost": () => _,
    "Variant-inverted": () => _,
    "Variant-outline": () => _,
    "Variant-vibrant": () => _,
    Width: () => _,
    default: () => _,
  }),
  _ = `Yyx5Rkc0C04-`,
  _ = `_-56FHcFNl2U-`,
  _ = `hRuF7XXiT3w-`,
  _ = `j8iZOirRLc8-`,
  _ = `ZTzpqIMdFCM-`,
  _ = `XSeLQJSkxyo-`,
  _ = `efbor0Of1bY-`,
  _ = `qOJkwUKt2Zo-`,
  _ = `BvwOpySHMzk-`,
  _ = `oKBOG5g3nvk-`,
  _ = `_3PvnjdbEKFQ-`,
  _ = `_5M7IKs5LW3Y-`,
  _ = `n-Q3jnI7IeY-`,
  _ = {
    Button: _,
    "Size-1": `_-56FHcFNl2U-`,
    Icon: _,
    "Size-2": `j8iZOirRLc8-`,
    "Size-3": `ZTzpqIMdFCM-`,
    "Variant-basic": `XSeLQJSkxyo-`,
    "Variant-dark": `efbor0Of1bY-`,
    "Variant-inverted": `qOJkwUKt2Zo-`,
    "Variant-outline": `BvwOpySHMzk-`,
    "Variant-ghost": `oKBOG5g3nvk-`,
    "Variant-vibrant": `_3PvnjdbEKFQ-`,
    Width: _,
    MinWidth: _,
  },
  _ = _({
    ChildContainer: () => _,
    LoadingSpinnerAmin: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Size-4": () => _,
    "Size-5": () => _,
    Spinner: () => _,
    "Variant-bright": () => _,
    "Variant-solid": () => _,
    default: () => _,
  }),
  _ = `ghKPu7ElHI4-`,
  _ = `THS4EmXO7Qo-`,
  _ = `_2tFyZDh3n70-`,
  _ = `y-F5xF-Ar74-`,
  _ = `Fqhcc7xFmsM-`,
  _ = `h9zlfqYx76Q-`,
  _ = `iTGGFwEa2MQ-`,
  _ = `_88ugmg-q8D8-`,
  _ = `MKSxe-MWyrs-`,
  _ = `n-XnuapupJI-`,
  _ = {
    Spinner: _,
    LoadingSpinnerAmin: _,
    "Size-1": `_2tFyZDh3n70-`,
    "Size-2": `y-F5xF-Ar74-`,
    "Size-3": `Fqhcc7xFmsM-`,
    "Size-4": `h9zlfqYx76Q-`,
    "Size-5": `iTGGFwEa2MQ-`,
    "Variant-solid": `_88ugmg-q8D8-`,
    "Variant-bright": `MKSxe-MWyrs-`,
    ChildContainer: _,
  };
function _(_) {
  let {
      size: _ = `3`,
      loading: _ = !0,
      children: _,
      color: _,
      variant: _,
      ..._
    } = _,
    _ = _(`LoadingSpinner`, _);
  return _ || !_
    ? (0, _.jsxs)(_, {
        position: `relative`,
        ..._,
        width: `fit-content`,
        children: [
          (0, _.jsx)(`div`, {
            "data-visibility": !_,
            className: _,
            children: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              position: `absolute`,
              inset: `0`,
              justify: `center`,
              align: `center`,
              children: (0, _.jsx)(_, {
                size: _,
                color: _,
                variant: _,
              }),
            }),
        ],
      })
    : (0, _.jsx)(_, {
        size: _,
        color: _,
        variant: _,
        ..._,
      });
}
function _(_) {
  let { className: _, color: _, ..._ } = _(_, _);
  return (0, _.jsx)(`div`, {
    "data-accent-color": _,
    className: (0, _.default)(_, _),
    ..._,
  });
}
var _ = [
    ..._,
    {
      prop: `size`,
      responsive: !0,
      className: (_) => _[`Size-${_}`],
    },
    {
      prop: `variant`,
      className: (_) => _[`Variant-${_}`],
    },
  ],
  _ = _.createContext(!1);
function _() {
  return _.useContext(_);
}
function _(_) {
  let {
    snr: _,
    focusable: _,
    navProps: _,
    href: _,
    openInNewWindow: _,
    target: _,
    rel: _,
    ..._
  } = _;
  _(!(_ && _), `Link: pass either openInNewWindow or target, not both`);
  let _ = _(),
    _ = _(),
    _ = _(_, _),
    _ = _ ?? _?.focusable ?? !!_,
    _ = _ ? `_blank` : _;
  !_ && _ && (_ = `_top`);
  let _ = _;
  !_ && _ && (_ = `noreferrer noopener`);
  let _ = {
    href: _,
    target: _,
    rel: _,
    ..._,
  };
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ..._,
        focusable: _,
        ..._,
      })
    : (0, _.jsx)(`a`, {
        ..._,
      });
}
function _(_, _) {
  let _ = _();
  return !_ || !_
    ? _
    : _(
        _ === !0
          ? _
          : {
              ..._,
              ..._,
            },
        _,
      );
}
function _(_) {
  let {
      variant: _,
      size: _,
      minWidth: _ = `fit-content`,
      color: _,
      loading: _,
      children: _,
      onClick: _,
      icon: _,
      focusable: _,
      navProps: _,
      ..._
    } = _,
    _ = _(),
    _ = _(_),
    _ = _
      ? (0, _.jsx)(_, {
          size: _,
          color: _,
          variant: `bright`,
          children: _,
        })
      : _,
    _ = _ ? void 0 : _,
    _ = _ ?? _?.focusable ?? !!_,
    _ = _(`Button`, _),
    _ = {
      type: `button`,
      ..._(
        {
          ..._,
          variant: _,
          size: _,
          minWidth: _,
          color: _,
          className: (0, _.default)(_, _ && `hRuF7XXiT3w-`),
          onClick: _,
        },
        _,
      ),
      children: _,
    };
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ..._,
        ...(_ || {}),
        focusable: _,
      })
    : (0, _.jsx)(`button`, {
        ..._,
      });
}
function _(_) {
  let {
      variant: _,
      size: _,
      minWidth: _ = `fit-content`,
      disabled: _,
      icon: _,
      onClick: _,
      ..._
    } = _,
    _ = _(`Button`, _),
    _ = _(_),
    _ = _(
      {
        onClick: _ ? _ : _,
        "aria-disabled": _,
        ..._,
        variant: _,
        size: _,
        minWidth: _,
        className: (0, _.default)(_, _ && `hRuF7XXiT3w-`, _()),
      },
      _,
    );
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  _.preventDefault();
}
var _ = [
    ..._,
    {
      prop: `size`,
      responsive: !0,
      className: (_) => _[`Size-${_}`],
    },
    {
      prop: `variant`,
      className: (_) => _[`Variant-${_}`],
    },
    {
      prop: `color`,
      dataProperty: (_) => [`accent-color`, `${_}`],
    },
    {
      prop: `width`,
      className: _,
      cssProperty: `--width`,
      responsive: !0,
    },
    {
      prop: `minWidth`,
      className: _,
      cssProperty: `--min-width`,
      responsive: !0,
    },
  ],
  _ = _,
  _ = _,
  _ = `u-hyk5J5tIY-`,
  _ = `doqBDS-zTtg-`,
  _ = `DHv28C3kLqY-`,
  _ = () =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        className: _,
      }),
    }),
  _ = () =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        className: _,
      }),
    }),
  _ = class extends _ {
    GetString(_) {
      return Promise.resolve(localStorage.getItem(_));
    }
    StoreString(_, _) {
      return (localStorage.setItem(_, _), Promise.resolve());
    }
    RemoveObject(_) {
      return (localStorage.removeItem(_), Promise.resolve());
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unique_name: {
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
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unique_name: {
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
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            unique_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
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
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            headline: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            summary: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            avatar_hash: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            schedule: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            rules: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            panels: {
              _: 9,
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
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
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
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.unique_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unique_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            owner_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            headline: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            summary: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            schedule: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            rules: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            panels: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            is_partnered: {
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
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            image_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            image_index: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            image_width: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            image_height: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_size: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            file_extension: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            file_hash: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            undo: {
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
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.replace_image_hash || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            replace_image_hash: {
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
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            image_types: {
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
      return `CSteamTV_GetBroadcastChannelImages_Request`;
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
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.image_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            image_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            image_path: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            image_index: {
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
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
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
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.link_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            link_index: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            link_description: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            left: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            top: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            links: {
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
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.link_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            link_index: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            link_description: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            left: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            top: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
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
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_live || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_live: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            is_disabled: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            appid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            viewers: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            views: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            broadcaster_steamid: {
              _: 6,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            thumbnail_url: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            followers: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            subscribers: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            unique_name: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            broadcast_session_id: {
              _: 11,
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
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            unique_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            appid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            viewers: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            views: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            thumbnail_url: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            followers: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            headline: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            avatar_url: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            broadcaster_steamid: {
              _: 11,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            subscribers: {
              _: 12,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            background_url: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            is_featured: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            is_disabled: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            is_live: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            language: {
              _: 17,
              _: _.readString,
              _: _.writeString,
            },
            reports: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_partnered: {
              _: 19,
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
      return `GetBroadcastChannelEntry`;
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
      return `CSteamTV_GetFollowedChannels_Request`;
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
      return `CSteamTV_GetFollowedChannels_Response`;
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
      return `CSteamTV_GetSubscribedChannels_Request`;
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
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            undo: {
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
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_followed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_followed: {
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
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_subscribed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_subscribed: {
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
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            reason: {
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
      return `CSteamTV_ReportBroadcastChannel_Request`;
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
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_followed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_followed: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            is_subscribed: {
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
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
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
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            image: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            viewers: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            channels: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            release_date: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            developer: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            publisher: {
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
      return `CSteamTV_Game`;
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
            algorithm: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CSteamTV_GetGames_Request`;
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
      return `CSteamTV_GetGames_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.algorithm || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            algorithm: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
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
      return `CSteamTV_GetChannels_Request`;
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
      return `CSteamTV_GetChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasters || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasters: {
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
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
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
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            rtmp_token: {
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
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.issuer_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            issuer_steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chatter_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_expires: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            permanent: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
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
      return `CSteamTV_ChatBan`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chatter_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            duration: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            permanent: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            undo: {
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
      return `CSteamTV_AddChatBan_Request`;
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
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetChatBans_Request`;
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
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            moderator_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            undo: {
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
      return `CSteamTV_AddChatModerator_Request`;
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
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetChatModerators_Request`;
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
      return `CSteamTV_ChatModerator`;
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
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            word: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            undo: {
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
      return `CSteamTV_AddWordBan_Request`;
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
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetWordBans_Request`;
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
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_JoinChat_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            view_url_template: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            flair_group_ids: {
              _: 3,
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
      return `CSteamTV_JoinChat_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.term || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            term: {
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
      return `CSteamTV_Search_Request`;
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
      return `CSteamTV_Search_Response`;
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
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stream_live_email || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stream_live_email: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            stream_live_notification: {
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
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stream_live_email || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stream_live_email: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            stream_live_notification: {
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
      return `CSteamTV_SetSteamTVUserSettings_Request`;
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
      return `CSteamTV_SetSteamTVUserSettings_Response`;
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
      return `CSteamTV_GetMyBroadcastChannels_Request`;
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
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasts: {
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
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasts: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_SingleGame`;
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
            game_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            broadcast: {
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
      return `GameListEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.entries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
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
            title: {
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
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasts: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcasts || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcasts: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast: {
              _: 1,
              _: _,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            chat_group_id: {
              _: 3,
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
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast: {
              _: 1,
              _: _,
            },
            title: {
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
      return `CSteamTV_HomePageTemplate_Developer`;
    }
  },
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
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.template_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            template_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            takeover: {
              _: 2,
              _: _,
            },
            single_game: {
              _: 3,
              _: _,
            },
            game_list: {
              _: 4,
              _: _,
            },
            quick_explore: {
              _: 5,
              _: _,
            },
            conveyor_belt: {
              _: 6,
              _: _,
            },
            watch_party: {
              _: 7,
              _: _,
            },
            developer: {
              _: 8,
              _: _,
            },
            event: {
              _: 9,
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
      return `CSteamTV_HomePageContentRow`;
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
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rows || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rows: {
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
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
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
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_clip_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            channel_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            app_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            broadcaster_steamid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            creator_steamid: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            video_description: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            live_time: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            length_ms: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            thumbnail_path: {
              _: 9,
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
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clips || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clips: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            thumbnail_host: {
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
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cheer_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cheer_type: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cheer_amount: {
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
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cheer_target_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            cheers: {
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
      return `CSteamTV_AppCheer_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.aggregation_delay_ms || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            aggregation_delay_ms: {
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
      return `CSteamTV_AppCheer_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.CreateBroadcastChannel#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.CreateBroadcastChannel = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelID#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelID = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.SetBroadcastChannelProfile#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetBroadcastChannelProfile = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelProfile#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelProfile = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.SetBroadcastChannelImage#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetBroadcastChannelImage = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelImages#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelImages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamTV.SetBroadcastChannelLinkRegions#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.SetBroadcastChannelLinkRegions = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelLinks#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelLinks = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamTV.GetBroadcastChannelBroadcasters#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetBroadcastChannelBroadcasters = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetFollowedChannels#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetFollowedChannels = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetSubscribedChannels#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetSubscribedChannels = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelStatus#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.FollowBroadcastChannel#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.FollowBroadcastChannel = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.SubscribeBroadcastChannel#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SubscribeBroadcastChannel = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetBroadcastChannelClips#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetBroadcastChannelClips = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.ReportBroadcastChannel#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.ReportBroadcastChannel = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamTV.GetBroadcastChannelInteraction#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetBroadcastChannelInteraction = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetGames#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetGames = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetChannels#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetChannels = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.AddChatBan#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.AddChatBan = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetChatBans#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetChatBans = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.AddChatModerator#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.AddChatModerator = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetChatModerators#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.GetChatModerators = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.AddWordBan#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.AddWordBan = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetWordBans#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetWordBans = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.JoinChat#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.JoinChat = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.Search#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.Search = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetSteamTVUserSettings#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetSteamTVUserSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.SetSteamTVUserSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetSteamTVUserSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetMyBroadcastChannels#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetMyBroadcastChannels = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.GetHomePageContents#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetHomePageContents = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamTV.AppCheer#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.AppCheer = _;
})((_ ||= {}));
var _ = 4,
  _ = 500,
  _ = 10,
  _ = class _ {
    m_mapChats = new Map();
    m_cmInterface;
    SetCMInterface(_) {
      this.m_cmInterface = _;
    }
    GetCMInterface() {
      return this.m_cmInterface;
    }
    GetChat(_, _) {
      return this.m_mapChats.get(_) || this.m_mapChats.get(_);
    }
    GetOrCreateChat(_, _) {
      let _ = this.GetChat(_, _);
      return (_ || ((_ = new _()), this.m_mapChats.set(_ || _, _)), _);
    }
    static s_Singleton;
    static Get() {
      return ((_.s_Singleton ||= new _()), _.s_Singleton);
    }
    constructor() {
      _(this);
    }
  };
_([_], _.prototype, `m_mapChats`, void 0);
var _ = class {
  m_ulBroadcastChannelID = ``;
  m_ulChatID = ``;
  m_strFlairGroupID = ``;
  m_bAutoScroll = !0;
  m_ulBroadcastID = ``;
  m_ulBroadcastSteamID = ``;
  m_tsFirstRequest = null;
  m_nFromFirstRequestMS = 0;
  m_nNextChatTS = 0;
  m_cConsecutiveErrors = 0;
  m_nNudgeFactorMS = 0;
  m_nLastSleepMS = 0;
  m_bReconnecting = !1;
  m_strChatURL = ``;
  m_unInstanceID = Math.floor(Math.random() * 4294967296);
  m_strUserSteamID = ``;
  m_regexUserEmoticons;
  m_chatScheduledFunc;
  m_steamInterface;
  m_textFilterStore;
  m_bHasAddedWelcomeChat = !1;
  m_mapMutedUsers = {};
  m_mapChannelModeratorUsers = new Map();
  m_mapBroadcastModeratorUsers = new Map();
  m_nRateLimitSeconds = 0;
  m_bRateLimited = !1;
  m_rgChatMessages = [];
  m_rgAnnouncements = [];
  m_latestAnnouncement = null;
  constructor() {
    (_(this), (this.m_steamInterface = this.CreateSteamInterface()));
  }
  InitTextFilter() {
    this.m_textFilterStore = new _({
      BIsFriend: _(),
    });
    let _ = 0;
    (_.steamid !== `` && (_ = new _(_.steamid).GetAccountID()),
      this.m_textFilterStore.Init(_, null, new _()));
  }
  get TextFilterStore() {
    return this.m_textFilterStore;
  }
  GetBroadcastSteamID() {
    return this.m_ulBroadcastSteamID;
  }
  GetUserSteamID() {
    return this.m_strUserSteamID;
  }
  CreateSteamInterface() {
    return (
      (_() ?? _.Get().GetCMInterface()) ||
      _(new _(_.WEBAPI_BASE_URL, _.webapi_token))
    );
  }
  StartForSteamID(_, _) {
    ((this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastSteamID = _),
      (this.m_ulBroadcastID = _),
      this.InitTextFilter(),
      this.RequestChatInfo());
  }
  StartForChannel(_) {
    ((this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastChannelID = _),
      (this.m_strUserSteamID = _.steamid),
      this.InitTextFilter(),
      this.JoinChannelChat());
  }
  Stop() {
    this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
  }
  async SendMessage(_) {
    let _ = _.trim();
    if (_.length != 0)
      try {
        let _ = _.Init(_);
        _.SetBodyFields({
          chat_id: this.m_ulChatID,
          message: _,
          instance_id: this.m_unInstanceID.toString(),
        });
        let _ = await _.PostChatMessage(
            this.m_steamInterface.GetServiceTransport(),
            _,
          ),
          _ = {
            result: _.GetEResult(),
            cooldown_time_seconds: _.Body().cooldown_time_seconds(),
            in_game: _.Body().in_game(),
            persona_name: _.Body().persona_name(),
          };
        if (_ && _.result && _.result != 1) {
          let _ = ``;
          ((_ =
            _.result == 17
              ? _(`#BroadcastChat_YouMuted`)
              : _.result == 84
                ? _(`#BroadcastChat_Cooldown`, _.cooldown_time_seconds ?? 0)
                : _(`#BroadcastChat_FailedToSendMsg`, _)),
            this.m_rgChatMessages.push({
              type: _.Error,
              msg: _,
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: _.in_game,
              persona_name: _.persona_name,
              steamid: ``,
            }));
          return;
        }
        ((this.m_nRateLimitSeconds ||= _.cooldown_time_seconds ?? 0),
          this.m_nRateLimitSeconds &&
            ((this.m_bRateLimited = !0),
            setTimeout(
              () => (this.m_bRateLimited = !1),
              this.m_nRateLimitSeconds * 1e3,
            )));
      } catch {
        this.m_rgChatMessages.push({
          type: _.Error,
          msg: _(`#BroadcastChat_FailedToSendMsg`, _),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async RequestChatInfo(_) {
    ((this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1));
    try {
      let _ = {
          steamid: this.m_ulBroadcastSteamID,
          broadcastid: this.m_ulBroadcastID,
          sessionid: _(),
          notoken: 1,
        },
        _ = await _.default.get(`${_.CHAT_BASE_URL}broadcast/getchatinfo`, {
          params: _,
          withCredentials: !0,
          cancelToken: _?.token,
        });
      (_ && _.token.reason) ||
        _(() => {
          let _ = _.data;
          ((this.m_strChatURL = _.view_url_template ?? ``),
            (this.m_ulChatID = _.chat_id ?? ``),
            (this.m_strFlairGroupID = _.flair_group_ids?.[0] ?? ``),
            _.blocked && console.log(`User is blocked from chat`),
            _.steamid && (this.m_strUserSteamID = _.steamid),
            _.emoticons && this.SetOwnedEmoticons(_.emoticons),
            (this.m_bHasAddedWelcomeChat ||=
              (this.m_rgChatMessages.push({
                type: _.Notification,
                msg: _(`#BroadcastChat_DefaultMessage`),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: ``,
                steamid: ``,
              }),
              !0)),
            this.m_mapBroadcastModeratorUsers.clear(),
            _.moderators_steamid &&
              _.moderators_steamid.forEach((_) =>
                this.m_mapBroadcastModeratorUsers.set(_, !0),
              ),
            (this.m_chatScheduledFunc = new _()),
            this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
        });
    } catch (_) {
      (console.error(_), console.log(`Failed to get chat info!`));
    }
  }
  async JoinChannelChat() {
    try {
      let _ = _.Init(_);
      _.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
      });
      let _ = await _.JoinChat(this.m_steamInterface.GetServiceTransport(), _),
        _ = _.Body().view_url_template(),
        _ = _.Body().chat_id();
      if (!_ || !_) {
        console.log(`Failed to join channel chat`);
        return;
      }
      ((this.m_strChatURL = _),
        (this.m_ulChatID = _),
        (this.m_strFlairGroupID =
          _.Body().flair_group_ids() && _.Body().flair_group_ids()[0]),
        this.FetchChatModerators(),
        (this.m_rgChatMessages = []),
        this.m_rgChatMessages.push({
          type: _.Notification,
          msg: _(`#BroadcastChat_DefaultMessage`),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        }),
        (this.m_bHasAddedWelcomeChat = !0),
        (this.m_chatScheduledFunc = new _()),
        this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
    } catch (_) {
      (console.error(_), console.log(`Failed to join chat!`));
    }
  }
  async FetchChatModerators() {
    let _ = _.Init(_);
    _.SetBodyFields({
      broadcast_channel_id: this.m_ulBroadcastChannelID,
    });
    let _ = (
        await _.GetChatModerators(
          this.m_steamInterface.GetServiceTransport(),
          _,
        )
      )
        .Body()
        .results(),
      _ = new Map();
    (_.forEach((_) => {
      let _ = _.steamid();
      _ && _.set(_, !0);
    }),
      (this.m_mapChannelModeratorUsers = _));
  }
  ReplaceChatAnnouncementIfAny(_) {
    _.announcements?.length > 0
      ? ((this.m_rgAnnouncements = _.announcements.reverse()),
        (this.m_latestAnnouncement &&
          JSON.stringify(this.m_latestAnnouncement) ==
            JSON.stringify(
              this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
            )) ||
          (this.m_latestAnnouncement =
            this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
      : this.m_rgAnnouncements.length > 0 &&
        ((this.m_rgAnnouncements = []), (this.m_latestAnnouncement = null));
  }
  async RequestLoop() {
    let _ = {},
      _ = this.m_strChatURL.replace(`{0}`, this.m_nNextChatTS.toString());
    _ == this.m_strChatURL &&
      this.m_nNextChatTS > 0 &&
      (_._ = this.m_nNextChatTS);
    try {
      let _ = (
        await _.default.get(_, {
          params: _,
        })
      ).data;
      this.m_cConsecutiveErrors = 0;
      let _ = _.messages
        .map((_) => ({
          ..._,
          type: _.Chat,
          client_ts: Number(new Date()),
        }))
        .filter((_) => !this.IsUserMutedLocally(_.steamid));
      (this.m_rgChatMessages.push(..._), this.ReplaceChatAnnouncementIfAny(_));
      let _ = this.m_bAutoScroll ? 150 : 300;
      if (
        (this.m_rgChatMessages.length > _ &&
          this.m_rgChatMessages.splice(0, this.m_rgChatMessages.length - _),
        _.muted)
      )
        for (let _ of _.muted) {
          let _ =
            _.muted == this.m_strUserSteamID
              ? _(`#BroadcastChat_YouMuted`, _.persona_name)
              : _(`#BroadcastChat_UserMuted`, _.persona_name);
          this.m_rgChatMessages.push({
            type: _.Notification,
            msg: _,
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      if (_.remove_msgs)
        for (let _ of _.remove_msgs) this.RemoveUserMessagesLocal(_.steamid);
      let _ = 0;
      if (
        this.m_tsFirstRequest == null ||
        this.m_nNextChatTS == 0 ||
        _.initial_delay
      ) {
        if (_.initial_delay === `undefined`) {
          console.log(
            `Need initial_delay to know when to request first chat message`,
          );
          return;
        }
        ((this.m_tsFirstRequest = performance.now() + _.initial_delay),
          (this.m_nFromFirstRequestMS = 0),
          (this.m_nNextChatTS = _.next_request),
          (_ = _.initial_delay));
      } else {
        if (_.next_request < this.m_nNextChatTS) {
          console.log(`Next request in past`);
          return;
        }
        ((this.m_nFromFirstRequestMS += _.next_request - this.m_nNextChatTS),
          (this.m_nNextChatTS = _.next_request),
          (_ =
            this.m_tsFirstRequest +
            this.m_nFromFirstRequestMS -
            performance.now() +
            this.m_nNudgeFactorMS));
      }
      ((this.m_bReconnecting &&= !1),
        (this.m_nLastSleepMS = _),
        _ < 0 && (_ = 0),
        this.m_chatScheduledFunc?.Schedule(_, this.RequestLoop));
    } catch {
      if (
        (console.log(
          `Failed to get chat messages. Previous sleep set to: ` +
            this.m_nLastSleepMS +
            ` firstReq: ` +
            this.m_tsFirstRequest +
            ` firstFromRequest: ` +
            this.m_nFromFirstRequestMS +
            ` nudge: ` +
            this.m_nNudgeFactorMS,
        ),
        this.m_cConsecutiveErrors++,
        (this.m_nNudgeFactorMS += _),
        this.m_cConsecutiveErrors >= _)
      ) {
        if (this.m_tsFirstRequest == null) {
          this.m_rgChatMessages.push({
            type: _.Error,
            msg: _(`#BroadcastChat_UnableToJoinChat`),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
          return;
        }
        ((this.m_cConsecutiveErrors = 0),
          (this.m_bReconnecting = !0),
          this.SyncChat());
      }
      this.m_chatScheduledFunc?.Schedule(_, this.RequestLoop);
    }
  }
  GetUserEmoticons() {
    return this.m_regexUserEmoticons;
  }
  SetOwnedEmoticons(_) {
    let _ = [];
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      _.length >= 2 && _[0] == `:`
        ? _.push(_.substr(1, _.length - 2))
        : _.push(_);
    }
    let _ = `:(` + _.join(`|`) + `):`;
    this.m_regexUserEmoticons = new RegExp(_, `g`);
  }
  async UpdateBroadcastChatModerator(_, _, _) {
    {
      let _ = new FormData();
      (_.append(`broadcaststeamid`, this.m_ulBroadcastSteamID),
        _.append(`moderatorsteamid`, _),
        _.append(`bAdd`, _ ? `1` : `0`),
        _.append(`sessionid`, _()));
      try {
        (await _.default.post(
          `${_.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          _,
        ),
          this.m_mapBroadcastModeratorUsers.set(_, _));
        let _ = _(
          _
            ? `#BroadcastChat_AddedModerator`
            : `#BroadcastChat_RemovedModerator`,
          _,
        );
        this.m_rgChatMessages.push({
          type: _.Notification,
          msg: _,
        });
      } catch {
        let _ = _(
          _
            ? `#BroadcastChat_AddModeratorFailed`
            : `#BroadcastChat_RemoveModeratorFailed`,
          _,
        );
        this.m_rgChatMessages.push({
          type: _.Error,
          msg: _,
        });
      }
    }
  }
  async UpdateUserChatBan(_, _, _, _, _, _) {
    let _ = this.m_ulBroadcastSteamID,
      _ = this.m_strUserSteamID;
    if (this.m_ulBroadcastChannelID) {
      let _ = _.Init(_);
      (_.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: _,
        duration: _ * 3600,
        permanent: _,
        undo: _,
      }),
        await _.AddChatBan(this.m_steamInterface.GetServiceTransport(), _));
    } else {
      let _ = new FormData();
      (_.append(`broadcaststeamid`, _),
        _.append(`issuersteamid`, _),
        _.append(`chattersteamid`, _),
        _.append(`bantype`, _),
        _.append(`duration`, _.toString()),
        _.append(`perm`, _ ? `1` : `0`),
        _.append(`sessionid`, _()));
      try {
        (await _.default.post(
          `${_.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
          _,
        ),
          _ == 0
            ? delete this.m_mapMutedUsers[_]
            : (this.m_mapMutedUsers[_] = _));
      } catch {
        console.log(`Failed to update mute for ` + _);
      }
    }
  }
  async MuteUserForSession(_, _) {
    if (_ == this.m_strUserSteamID || this.m_ulBroadcastSteamID == _) return;
    let _ = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
    if (!this.m_mapMutedUsers[_]) {
      this.m_mapMutedUsers[_] = _;
      try {
        let _ = _.Init(_);
        (_.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: _,
          muted: !0,
        }),
          await _.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            _,
          ));
      } catch {
        _ &&
          (this.m_rgChatMessages.push({
            type: _.Error,
            msg: _(`#BroadcastChat_UserMuteFailed`, _),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          }),
          delete this.m_mapMutedUsers[_]);
      }
    }
    _ ||
      this.m_rgChatMessages.push({
        type: _.Notification,
        msg: _(`#BroadcastChat_UserMutedLocal`, _),
        client_ts: Number(new Date()),
        instance_id: this.m_unInstanceID,
        in_game: !1,
        persona_name: ``,
        steamid: ``,
      });
  }
  async UnmuteUserForSession(_, _) {
    if (_ != this.m_strUserSteamID) {
      if (
        (this.m_mapMutedUsers[_] && delete this.m_mapMutedUsers[_],
        this.m_ulBroadcastSteamID == this.m_strUserSteamID)
      )
        try {
          let _ = _.Init(_);
          (_.SetBodyFields({
            chat_id: this.m_ulChatID,
            user_steamid: _,
            muted: !1,
          }),
            await _.MuteBroadcastChatUser(
              this.m_steamInterface.GetServiceTransport(),
              _,
            ),
            this.m_rgChatMessages.push({
              type: _.Notification,
              msg: _(`#BroadcastChat_UserUnmutedLocal`, _),
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: !1,
              persona_name: ``,
              steamid: ``,
            }));
        } catch {
          this.m_rgChatMessages.push({
            type: _.Error,
            msg: _(`#BroadcastChat_UserUnmuteFailed`, _),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      else
        this.m_rgChatMessages.push({
          type: _.Notification,
          msg: _(`#BroadcastChat_UserUnmutedLocal`, _),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
    }
  }
  RemoveUserMessagesLocal(_) {
    this.m_rgChatMessages = this.m_rgChatMessages.filter(
      (_) => _.steamid !== _,
    );
  }
  async RemoveUserMessagesServer(_, _) {
    if (_ != this.m_strUserSteamID)
      try {
        let _ = _.Init(_);
        (_.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: _,
        }),
          await _.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            _,
          ));
      } catch {
        this.m_rgChatMessages.push({
          type: _.Error,
          msg: _(`#BroadcastChat_RemoveMessagesFailed`, _),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async UpdateChatMessageFlair(_) {
    let _ = _.Init(_);
    (_.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${_}:`,
    }),
      await _.UpdateChatMessageFlair(
        this.m_steamInterface.GetServiceTransport(),
        _,
      ));
  }
  IsUserMutedLocally(_) {
    return !!this.m_mapMutedUsers[_];
  }
  BIsUserBroadcastModerator(_) {
    return this.m_mapBroadcastModeratorUsers.has(_);
  }
  IsUserBroadcaster(_) {
    return _ === this.m_ulBroadcastSteamID;
  }
  SyncChat() {
    ((this.m_tsFirstRequest = null),
      (this.m_nFromFirstRequestMS = 0),
      (this.m_nNextChatTS = 0),
      (this.m_rgChatMessages = []));
  }
};
(_([_], _.prototype, `m_mapChannelModeratorUsers`, void 0),
  _([_], _.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  _([_], _.prototype, `m_nRateLimitSeconds`, void 0),
  _([_], _.prototype, `m_bRateLimited`, void 0),
  _([_], _.prototype, `m_rgChatMessages`, void 0),
  _([_], _.prototype, `m_latestAnnouncement`, void 0),
  _([_], _.prototype, `FetchChatModerators`, null),
  _([_], _.prototype, `RequestLoop`, null),
  _([_], _.prototype, `MuteUserForSession`, null));
var _ = _((_, _, _) => {
  (function (_, _) {
    typeof _ == `object` && _ !== void 0
      ? (_.exports = _())
      : typeof define == `function` && define.amd
        ? define(_)
        : (_.moment = _());
  })(_, function () {
    var _;
    function _() {
      return _.apply(null, arguments);
    }
    function _(_) {
      _ = _;
    }
    function _(_) {
      return (
        _ instanceof Array ||
        Object.prototype.toString.call(_) === `[object Array]`
      );
    }
    function _(_) {
      return (
        _ != null && Object.prototype.toString.call(_) === `[object Object]`
      );
    }
    function _(_, _) {
      return Object.prototype.hasOwnProperty.call(_, _);
    }
    function _(_) {
      if (Object.getOwnPropertyNames)
        return Object.getOwnPropertyNames(_).length === 0;
      for (var _ in _) if (_(_, _)) return !1;
      return !0;
    }
    function _(_) {
      return _ === void 0;
    }
    function _(_) {
      return (
        typeof _ == `number` ||
        Object.prototype.toString.call(_) === `[object Number]`
      );
    }
    function _(_) {
      return (
        _ instanceof Date ||
        Object.prototype.toString.call(_) === `[object Date]`
      );
    }
    function _(_, _) {
      var _ = [],
        _,
        _ = _.length;
      for (_ = 0; _ < _; ++_) _.push(_(_[_], _));
      return _;
    }
    function _(_, _) {
      for (var _ in _) _(_, _) && (_[_] = _[_]);
      return (
        _(_, `toString`) && (_.toString = _.toString),
        _(_, `valueOf`) && (_.valueOf = _.valueOf),
        _
      );
    }
    function _(_, _, _, _) {
      return _(_, _, _, _, !0).utc();
    }
    function _() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidOffset: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1,
      };
    }
    function _(_) {
      return ((_._pf ??= _()), _._pf);
    }
    var _ = Array.prototype.some
      ? Array.prototype.some
      : function (_) {
          for (var _ = Object(this), _ = _.length >>> 0, _ = 0; _ < _; _++)
            if (_ in _ && _.call(this, _[_], _, _)) return !0;
          return !1;
        };
    function _(_) {
      var _ = null,
        _ = !1,
        _ = _._ && !isNaN(_._.getTime());
      if (
        (_ &&
          ((_ = _(_)),
          (_ = _.call(_.parsedDateParts, function (_) {
            return _ != null;
          })),
          (_ =
            _.overflow < 0 &&
            !_.empty &&
            !_.invalidEra &&
            !_.invalidMonth &&
            !_.invalidOffset &&
            !_.invalidWeekday &&
            !_.weekdayMismatch &&
            !_.nullInput &&
            !_.invalidFormat &&
            !_.userInvalidated &&
            (!_.meridiem || (_.meridiem && _))),
          _._strict &&
            (_ =
              _ &&
              _.charsLeftOver === 0 &&
              _.unusedTokens.length === 0 &&
              _.bigHour === void 0)),
        Object.isFrozen == null || !Object.isFrozen(_))
      )
        _._isValid = _;
      else return _;
      return _._isValid;
    }
    function _(_) {
      var _ = _(NaN);
      return (_ == null ? (_(_).userInvalidated = !0) : _(_(_), _), _);
    }
    var _ = (_.momentProperties = []),
      _ = !1;
    function _(_, _) {
      var _,
        _,
        _,
        _ = _.length;
      if (
        (_(_._isAMomentObject) || (_._isAMomentObject = _._isAMomentObject),
        _(_._) || (_._ = _._),
        _(_._) || (_._ = _._),
        _(_._) || (_._ = _._),
        _(_._strict) || (_._strict = _._strict),
        _(_._tzm) || (_._tzm = _._tzm),
        _(_._isUTC) || (_._isUTC = _._isUTC),
        _(_._offset) || (_._offset = _._offset),
        _(_._pf) || (_._pf = _(_)),
        _(_._locale) || (_._locale = _._locale),
        _ > 0)
      )
        for (_ = 0; _ < _; _++) ((_ = _[_]), (_ = _[_]), _(_) || (_[_] = _));
      return _;
    }
    function _(_) {
      (_(this, _),
        (this._ = new Date(_._ == null ? NaN : _._.getTime())),
        this.isValid() || (this._ = new Date(NaN)),
        _ === !1 && ((_ = !0), _.updateOffset(this), (_ = !1)));
    }
    function _(_) {
      return _ instanceof _ || (_ != null && _._isAMomentObject != null);
    }
    function _(_) {
      _.suppressDeprecationWarnings === !1 &&
        typeof console < `u` &&
        console.warn &&
        console.warn(`Deprecation warning: ` + _);
    }
    function _(_, _) {
      var _ = !0;
      return _(function () {
        if (
          (_.deprecationHandler != null && _.deprecationHandler(null, _), _)
        ) {
          var _ = [],
            _,
            _,
            _,
            _ = arguments.length;
          for (_ = 0; _ < _; _++) {
            if (((_ = ``), typeof arguments[_] == `object`)) {
              for (_ in ((_ +=
                `
[` +
                _ +
                `] `),
              arguments[0]))
                _(arguments[0], _) && (_ += _ + `: ` + arguments[0][_] + `, `);
              _ = _.slice(0, -2);
            } else _ = arguments[_];
            _.push(_);
          }
          (_(
            _ +
              `
Arguments: ` +
              Array.prototype.slice.call(_).join(``) +
              `
` +
              Error().stack,
          ),
            (_ = !1));
        }
        return _.apply(this, arguments);
      }, _);
    }
    var _ = {};
    function _(_, _) {
      (_.deprecationHandler != null && _.deprecationHandler(_, _),
        _[_] ||
          (_(
            _ +
              `
` +
              Error().stack,
          ),
          (_[_] = !0)));
    }
    ((_.suppressDeprecationWarnings = !1), (_.deprecationHandler = null));
    function _(_) {
      return (
        (typeof Function < `u` && _ instanceof Function) ||
        Object.prototype.toString.call(_) === `[object Function]`
      );
    }
    var _ = {
      _: `date`,
      dates: `date`,
      date: `date`,
      _: `day`,
      days: `day`,
      day: `day`,
      _: `weekday`,
      weekdays: `weekday`,
      weekday: `weekday`,
      _: `isoWeekday`,
      isoweekdays: `isoWeekday`,
      isoweekday: `isoWeekday`,
      DDD: `dayOfYear`,
      dayofyears: `dayOfYear`,
      dayofyear: `dayOfYear`,
      _: `hour`,
      hours: `hour`,
      hour: `hour`,
      _: `millisecond`,
      milliseconds: `millisecond`,
      millisecond: `millisecond`,
      _: `minute`,
      minutes: `minute`,
      minute: `minute`,
      _: `month`,
      months: `month`,
      month: `month`,
      _: `quarter`,
      quarters: `quarter`,
      quarter: `quarter`,
      _: `second`,
      seconds: `second`,
      second: `second`,
      _: `weekYear`,
      weekyears: `weekYear`,
      weekyear: `weekYear`,
      _: `isoWeekYear`,
      isoweekyears: `isoWeekYear`,
      isoweekyear: `isoWeekYear`,
      _: `week`,
      weeks: `week`,
      week: `week`,
      _: `isoWeek`,
      isoweeks: `isoWeek`,
      isoweek: `isoWeek`,
      _: `year`,
      years: `year`,
      year: `year`,
    };
    function _(_) {
      return typeof _ == `string` ? _[_] || _[_.toLowerCase()] : void 0;
    }
    function _(_) {
      var _ = {},
        _,
        _;
      for (_ in _) _(_, _) && ((_ = _(_)), _ && (_[_] = _[_]));
      return _;
    }
    var _ = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1,
    };
    function _(_) {
      var _ = [],
        _;
      for (_ in _)
        _(_, _) &&
          _.push({
            unit: _,
            priority: _[_],
          });
      return (
        _.sort(function (_, _) {
          return _.priority - _.priority;
        }),
        _
      );
    }
    function _(_, _, _) {
      var _ = `` + Math.abs(_),
        _ = _ - _.length;
      return (
        (_ >= 0 ? (_ ? `+` : ``) : `-`) +
        (10 ** Math.max(0, _)).toString().substr(1) +
        _
      );
    }
    var _ =
        /(\[[^\[]*\])|(\\e)|(\\)?(eHHmm|[Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      _ = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      _ = {},
      _ = {};
    function _(_, _, _, _) {
      var _ = _;
      (typeof _ == `string` &&
        (_ = function () {
          return this[_]();
        }),
        _ && (_[_] = _),
        _ &&
          (_[_[0]] = function () {
            return _(_.apply(this, arguments), _[1], _[2]);
          }),
        _ &&
          (_[_] = function () {
            return this.localeData().ordinal(_.apply(this, arguments), _);
          }));
    }
    function _(_) {
      return _.match(/\[[\s\S]/)
        ? _.replace(/^\[|\]$/g, ``)
        : _.replace(/\\/g, ``);
    }
    function _(_) {
      for (var _ = _.match(_), _ = 0, _ = _.length; _ < _; _++)
        _[_[_]] ? (_[_] = _[_[_]]) : (_[_] = _(_[_]));
      return function (_) {
        for (var _ = ``, _ = 0; _ < _; _++)
          _ += _(_[_]) ? _[_].call(_, _) : _[_];
        return _;
      };
    }
    function _(_, _) {
      if (!_.isValid()) return _.localeData().invalidDate();
      _ = _(_, _.localeData());
      var _ = `$` + _;
      return (_(_, _) || (_[_] = _(_)), _[_](_));
    }
    function _(_, _) {
      var _ = 5;
      function _(_) {
        return _.longDateFormat(_) || _;
      }
      for (_.lastIndex = 0; _ >= 0 && _.test(_);)
        ((_ = _.replace(_, _)), (_.lastIndex = 0), --_);
      return _;
    }
    var _ = /\d/,
      _ = /\d\d/,
      _ = /\d{3}/,
      _ = /\d{4}/,
      _ = /[+-]?\d{6}/,
      _ = /\d\d?/,
      _ = /\d\d\d\d?/,
      _ = /\d\d\d\d\d\d?/,
      _ = /\d{1,3}/,
      _ = /\d{1,4}/,
      _ = /[+-]?\d{1,6}/,
      _ = /\d+/,
      _ = /[+-]?\d+/,
      _ = /Z|[+-]\d\d:?\d\d/gi,
      _ = /Z|[+-]\d\d(?::?\d\d)?/gi,
      _ = /[+-]?\d+(\.\d{1,3})?/,
      _ =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      _ = /^[1-9]\d?/,
      _ = /^([1-9]\d|\d)/,
      _ = {};
    function _(_, _, _) {
      _[_] = _(_)
        ? _
        : function (_, _) {
            return _ && _ ? _ : _;
          };
    }
    function _(_, _) {
      return _(_, _) ? _[_](_._strict, _._locale) : new RegExp(_(_));
    }
    function _(_) {
      return _(
        _.replace(`\\`, ``).replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (_, _, _, _, _) {
            return _ || _ || _ || _;
          },
        ),
      );
    }
    function _(_) {
      return _.replace(/[-\/\\^$*+?.()|[\]{}]/g, `\\$&`);
    }
    function _(_) {
      return _ < 0 ? Math.ceil(_) || 0 : Math.floor(_);
    }
    function _(_) {
      var _ = +_,
        _ = 0;
      return (_ !== 0 && isFinite(_) && (_ = _(_)), _);
    }
    var _ = {};
    function _(_, _) {
      var _,
        _ = _,
        _;
      for (
        typeof _ == `string` && (_ = [_]),
          _(_) &&
            (_ = function (_, _) {
              _[_] = _(_);
            }),
          _ = _.length,
          _ = 0;
        _ < _;
        _++
      )
        _[_[_]] = _;
    }
    function _(_, _) {
      _(_, function (_, _, _, _) {
        ((_._ = _._ || {}), _(_, _._, _, _));
      });
    }
    function _(_, _, _) {
      _ != null && _(_, _) && _[_](_, _._, _, _);
    }
    function _(_) {
      return (_ % 4 == 0 && _ % 100 != 0) || _ % 400 == 0;
    }
    var _ = 0,
      _ = 1,
      _ = 2,
      _ = 3,
      _ = 4,
      _ = 5,
      _ = 6,
      _ = 7,
      _ = 8;
    (_(`Y`, 0, 0, function () {
      var _ = this.year();
      return _ <= 9999 ? _(_, 4) : `+` + _;
    }),
      _(0, [`YY`, 2], 0, function () {
        return this.year() % 100;
      }),
      _(0, [`YYYY`, 4], 0, `year`),
      _(0, [`YYYYY`, 5], 0, `year`),
      _(0, [`YYYYYY`, 6, !0], 0, `year`),
      _(`Y`, _),
      _(`YY`, _, _),
      _(`YYYY`, _, _),
      _(`YYYYY`, _, _),
      _(`YYYYYY`, _, _),
      _([`YYYYY`, `YYYYYY`], _),
      _(`YYYY`, function (_, _) {
        _[_] = _.length === 2 ? _.parseTwoDigitYear(_) : _(_);
      }),
      _(`YY`, function (_, _) {
        _[_] = _.parseTwoDigitYear(_);
      }),
      _(`Y`, function (_, _) {
        _[_] = parseInt(_, 10);
      }));
    function _(_) {
      return _(_) ? 366 : 365;
    }
    _.parseTwoDigitYear = function (_) {
      return _(_) + (_(_) > 68 ? 1900 : 2e3);
    };
    var _ = _(`FullYear`, !0);
    function _() {
      return _(this.year());
    }
    function _(_, _) {
      return function (_) {
        return _ == null
          ? _(this, _)
          : (_(this, _, _), _.updateOffset(this, _), this);
      };
    }
    function _(_, _) {
      if (!_.isValid()) return NaN;
      var _ = _._,
        _ = _._isUTC;
      switch (_) {
        case `Milliseconds`:
          return _ ? _.getUTCMilliseconds() : _.getMilliseconds();
        case `Seconds`:
          return _ ? _.getUTCSeconds() : _.getSeconds();
        case `Minutes`:
          return _ ? _.getUTCMinutes() : _.getMinutes();
        case `Hours`:
          return _ ? _.getUTCHours() : _.getHours();
        case `Date`:
          return _ ? _.getUTCDate() : _.getDate();
        case `Day`:
          return _ ? _.getUTCDay() : _.getDay();
        case `Month`:
          return _ ? _.getUTCMonth() : _.getMonth();
        case `FullYear`:
          return _ ? _.getUTCFullYear() : _.getFullYear();
        default:
          return NaN;
      }
    }
    function _(_, _, _) {
      var _, _, _, _, _;
      if (_.isValid() && !isNaN(_)) {
        switch (((_ = _._), (_ = _._isUTC), _)) {
          case `Milliseconds`:
            _ ? _.setUTCMilliseconds(_) : _.setMilliseconds(_);
            return;
          case `Seconds`:
            _ ? _.setUTCSeconds(_) : _.setSeconds(_);
            return;
          case `Minutes`:
            _ ? _.setUTCMinutes(_) : _.setMinutes(_);
            return;
          case `Hours`:
            _ ? _.setUTCHours(_) : _.setHours(_);
            return;
          case `Date`:
            _ ? _.setUTCDate(_) : _.setDate(_);
            return;
          case `FullYear`:
            break;
          default:
            return;
        }
        ((_ = _),
          (_ = _.month()),
          (_ = _.date()),
          (_ = _ === 29 && _ === 1 && !_(_) ? 28 : _),
          _ ? _.setUTCFullYear(_, _, _) : _.setFullYear(_, _, _));
      }
    }
    function _(_) {
      return ((_ = _(_)), _(this[_]) ? this[_]() : this);
    }
    function _(_, _) {
      if (typeof _ == `object`) {
        _ = _(_);
        var _ = _(_),
          _,
          _ = _.length;
        for (_ = 0; _ < _; _++) this[_[_].unit](_[_[_].unit]);
      } else if (((_ = _(_)), _(this[_]))) return this[_](_);
      return this;
    }
    function _(_, _) {
      return ((_ % _) + _) % _;
    }
    var _ = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (_) {
          for (var _ = 0; _ < this.length; ++_) if (this[_] === _) return _;
          return -1;
        };
    function _(_, _) {
      if (isNaN(_) || isNaN(_)) return NaN;
      var _ = _(_, 12);
      return (
        (_ += (_ - _) / 12), _ === 1 ? (_(_) ? 29 : 28) : 31 - ((_ % 7) % 2)
      );
    }
    (_(`M`, [`MM`, 2], `Mo`, function () {
      return this.month() + 1;
    }),
      _(`MMM`, 0, 0, function (_) {
        return this.localeData().monthsShort(this, _);
      }),
      _(`MMMM`, 0, 0, function (_) {
        return this.localeData().months(this, _);
      }),
      _(`M`, _, _),
      _(`MM`, _, _),
      _(`MMM`, function (_, _) {
        return _.monthsShortRegex(_);
      }),
      _(`MMMM`, function (_, _) {
        return _.monthsRegex(_);
      }),
      _([`M`, `MM`], function (_, _) {
        _[_] = _(_) - 1;
      }),
      _([`MMM`, `MMMM`], function (_, _, _, _) {
        var _ = _._locale.monthsParse(_, _, _._strict);
        _ == null ? (_(_).invalidMonth = _) : (_[_] = _);
      }));
    var _ =
        `January_February_March_April_May_June_July_August_September_October_November_December`.split(
          `_`,
        ),
      _ = `Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec`.split(`_`),
      _ = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      _ = _,
      _ = _,
      _ = [
        `monthsParse`,
        `longMonthsParse`,
        `shortMonthsParse`,
        `monthsRegex`,
        `monthsShortRegex`,
        `monthsStrictRegex`,
        `monthsShortStrictRegex`,
      ];
    function _(_, _) {
      for (var _ = 0, _; _ < _.length; _++)
        ((_ = _[_]), _(_, _) || delete _[`_` + _]);
    }
    function _(_, _) {
      return _
        ? _(this._months)
          ? this._months[_.month()]
          : this._months[
              (this._months.isFormat || _).test(_) ? `format` : `standalone`
            ][_.month()]
        : _(this._months)
          ? this._months
          : this._months.standalone;
    }
    function _(_, _) {
      return _
        ? _(this._monthsShort)
          ? this._monthsShort[_.month()]
          : this._monthsShort[_.test(_) ? `format` : `standalone`][_.month()]
        : _(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
    }
    function _(_, _, _) {
      var _,
        _,
        _,
        _ = _.toLocaleLowerCase();
      if (!this._monthsParse)
        for (
          this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            _ = 0;
          _ < 12;
          ++_
        )
          ((_ = _([2e3, _])),
            (this._shortMonthsParse[_] = this.monthsShort(
              _,
              ``,
            ).toLocaleLowerCase()),
            (this._longMonthsParse[_] = this.months(
              _,
              ``,
            ).toLocaleLowerCase()));
      return _
        ? _ === `MMM`
          ? ((_ = _.call(this._shortMonthsParse, _)), _ === -1 ? null : _)
          : ((_ = _.call(this._longMonthsParse, _)), _ === -1 ? null : _)
        : _ === `MMM`
          ? ((_ = _.call(this._shortMonthsParse, _)),
            _ === -1
              ? ((_ = _.call(this._longMonthsParse, _)), _ === -1 ? null : _)
              : _)
          : ((_ = _.call(this._longMonthsParse, _)),
            _ === -1
              ? ((_ = _.call(this._shortMonthsParse, _)), _ === -1 ? null : _)
              : _);
    }
    function _(_, _, _) {
      var _, _, _;
      if (this._monthsParseExact) return _.call(this, _, _, _);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          _ = 0;
        _ < 12;
        _++
      )
        if (
          ((_ = _([2e3, _])),
          _ &&
            !this._longMonthsParse[_] &&
            ((this._longMonthsParse[_] = RegExp(
              `^` + this.months(_, ``).replace(`.`, ``) + `$`,
              `i`,
            )),
            (this._shortMonthsParse[_] = RegExp(
              `^` + this.monthsShort(_, ``).replace(`.`, ``) + `$`,
              `i`,
            ))),
          !_ &&
            !this._monthsParse[_] &&
            ((_ = `^` + this.months(_, ``) + `|^` + this.monthsShort(_, ``)),
            (this._monthsParse[_] = new RegExp(_.replace(`.`, ``), `i`))),
          (_ && _ === `MMMM` && this._longMonthsParse[_].test(_)) ||
            (_ && _ === `MMM` && this._shortMonthsParse[_].test(_)) ||
            (!_ && this._monthsParse[_].test(_)))
        )
          return _;
    }
    function _(_, _) {
      if (!_.isValid()) return _;
      if (typeof _ == `string`) {
        if (/^\d+$/.test(_)) _ = _(_);
        else if (((_ = _.localeData().monthsParse(_)), !_(_))) return _;
      }
      var _ = _,
        _ = _.date();
      return (
        (_ = _ < 29 ? _ : Math.min(_, _(_.year(), _))),
        _._isUTC ? _._.setUTCMonth(_, _) : _._.setMonth(_, _),
        _
      );
    }
    function _(_) {
      return _ == null
        ? _(this, `Month`)
        : (_(this, _), _.updateOffset(this, !0), this);
    }
    function _() {
      return _(this.year(), this.month());
    }
    function _(_) {
      return this._monthsParseExact
        ? (_(this, `_monthsRegex`) || _.call(this),
          _ ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (_(this, `_monthsShortRegex`) || (this._monthsShortRegex = _),
          this._monthsShortStrictRegex && _
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }
    function _(_) {
      return this._monthsParseExact
        ? (_(this, `_monthsRegex`) || _.call(this),
          _ ? this._monthsStrictRegex : this._monthsRegex)
        : (_(this, `_monthsRegex`) || (this._monthsRegex = _),
          this._monthsStrictRegex && _
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }
    function _() {
      function _(_, _) {
        return _.length - _.length;
      }
      for (var _ = [], _ = [], _ = [], _ = 0, _, _, _; _ < 12; _++)
        ((_ = _([2e3, _])),
          (_ = _(this.monthsShort(_, ``))),
          (_ = _(this.months(_, ``))),
          _.push(_),
          _.push(_),
          _.push(_),
          _.push(_));
      (_.sort(_),
        _.sort(_),
        _.sort(_),
        (this._monthsRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)),
        (this._monthsShortStrictRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)));
    }
    (_(`d`, 0, `do`, `day`),
      _(`dd`, 0, 0, function (_) {
        return this.localeData().weekdaysMin(this, _);
      }),
      _(`ddd`, 0, 0, function (_) {
        return this.localeData().weekdaysShort(this, _);
      }),
      _(`dddd`, 0, 0, function (_) {
        return this.localeData().weekdays(this, _);
      }),
      _(`e`, 0, 0, `weekday`),
      _(`E`, 0, 0, `isoWeekday`),
      _(`eHHmm`, 0, 0, function () {
        return `` + this.weekday() + _(this.hours(), 2) + _(this.minutes(), 2);
      }),
      _(`d`, _),
      _(`e`, _),
      _(`E`, _),
      _(`eHHmm`, _),
      _(`dd`, function (_, _) {
        return _.weekdaysMinRegex(_);
      }),
      _(`ddd`, function (_, _) {
        return _.weekdaysShortRegex(_);
      }),
      _(`dddd`, function (_, _) {
        return _.weekdaysRegex(_);
      }),
      _([`dd`, `ddd`, `dddd`], function (_, _, _, _) {
        var _ = _._locale.weekdaysParse(_, _, _._strict);
        _ == null ? (_(_).invalidWeekday = _) : (_._ = _);
      }),
      _([`d`, `e`, `E`], function (_, _, _, _) {
        _[_] = _(_);
      }),
      _(`eHHmm`, function (_, _, _) {
        var _ = _.length - 4;
        ((_._ = _(_.substr(0, _))),
          (_._[_] = _(_.substr(_, 2))),
          (_._[_] = _(_.substr(_ + 2))));
      }));
    function _(_, _) {
      return typeof _ == `string`
        ? isNaN(_)
          ? ((_ = _.weekdaysParse(_)), typeof _ == `number` ? _ : null)
          : parseInt(_, 10)
        : _;
    }
    function _(_, _) {
      return typeof _ == `string`
        ? _.weekdaysParse(_) % 7 || 7
        : isNaN(_)
          ? null
          : _;
    }
    function _(_, _) {
      return _.slice(_, 7).concat(_.slice(0, _));
    }
    var _ = `Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(
        `_`,
      ),
      _ = `Sun_Mon_Tue_Wed_Thu_Fri_Sat`.split(`_`),
      _ = `Su_Mo_Tu_We_Th_Fr_Sa`.split(`_`),
      _ = _,
      _ = _,
      _ = _,
      _ = [
        `weekdaysParse`,
        `fullWeekdaysParse`,
        `shortWeekdaysParse`,
        `minWeekdaysParse`,
        `weekdaysRegex`,
        `weekdaysShortRegex`,
        `weekdaysMinRegex`,
        `weekdaysStrictRegex`,
        `weekdaysShortStrictRegex`,
        `weekdaysMinStrictRegex`,
      ];
    function _(_, _) {
      for (var _ = 0, _; _ < _.length; _++)
        ((_ = _[_]), _(_, _) || delete _[`_` + _]);
    }
    function _(_, _) {
      var _ = _(this._weekdays)
        ? this._weekdays
        : this._weekdays[
            _ && _ !== !0 && this._weekdays.isFormat.test(_)
              ? `format`
              : `standalone`
          ];
      return _ === !0 ? _(_, this._week.dow) : _ ? _[_.day()] : _;
    }
    function _(_) {
      return _ === !0
        ? _(this._weekdaysShort, this._week.dow)
        : _
          ? this._weekdaysShort[_.day()]
          : this._weekdaysShort;
    }
    function _(_) {
      return _ === !0
        ? _(this._weekdaysMin, this._week.dow)
        : _
          ? this._weekdaysMin[_.day()]
          : this._weekdaysMin;
    }
    function _(_, _, _) {
      var _,
        _,
        _,
        _ = _.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (
          this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            _ = 0;
          _ < 7;
          ++_
        )
          ((_ = _([2e3, 1]).day(_)),
            (this._minWeekdaysParse[_] = this.weekdaysMin(
              _,
              ``,
            ).toLocaleLowerCase()),
            (this._shortWeekdaysParse[_] = this.weekdaysShort(
              _,
              ``,
            ).toLocaleLowerCase()),
            (this._weekdaysParse[_] = this.weekdays(
              _,
              ``,
            ).toLocaleLowerCase()));
      return _
        ? _ === `dddd`
          ? ((_ = _.call(this._weekdaysParse, _)), _ === -1 ? null : _)
          : _ === `ddd`
            ? ((_ = _.call(this._shortWeekdaysParse, _)), _ === -1 ? null : _)
            : ((_ = _.call(this._minWeekdaysParse, _)), _ === -1 ? null : _)
        : _ === `dddd`
          ? ((_ = _.call(this._weekdaysParse, _)),
            _ !== -1 || ((_ = _.call(this._shortWeekdaysParse, _)), _ !== -1)
              ? _
              : ((_ = _.call(this._minWeekdaysParse, _)), _ === -1 ? null : _))
          : _ === `ddd`
            ? ((_ = _.call(this._shortWeekdaysParse, _)),
              _ !== -1 || ((_ = _.call(this._weekdaysParse, _)), _ !== -1)
                ? _
                : ((_ = _.call(this._minWeekdaysParse, _)),
                  _ === -1 ? null : _))
            : ((_ = _.call(this._minWeekdaysParse, _)),
              _ !== -1 || ((_ = _.call(this._weekdaysParse, _)), _ !== -1)
                ? _
                : ((_ = _.call(this._shortWeekdaysParse, _)),
                  _ === -1 ? null : _));
    }
    function _(_, _, _) {
      var _, _, _;
      if (this._weekdaysParseExact) return _.call(this, _, _, _);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          _ = 0;
        _ < 7;
        _++
      )
        if (
          ((_ = _([2e3, 1]).day(_)),
          _ &&
            !this._fullWeekdaysParse[_] &&
            ((this._fullWeekdaysParse[_] = RegExp(
              `^` + this.weekdays(_, ``).replace(`.`, `\\.?`) + `$`,
              `i`,
            )),
            (this._shortWeekdaysParse[_] = RegExp(
              `^` + this.weekdaysShort(_, ``).replace(`.`, `\\.?`) + `$`,
              `i`,
            )),
            (this._minWeekdaysParse[_] = RegExp(
              `^` + this.weekdaysMin(_, ``).replace(`.`, `\\.?`) + `$`,
              `i`,
            ))),
          this._weekdaysParse[_] ||
            ((_ =
              `^` +
              this.weekdays(_, ``) +
              `|^` +
              this.weekdaysShort(_, ``) +
              `|^` +
              this.weekdaysMin(_, ``)),
            (this._weekdaysParse[_] = new RegExp(_.replace(`.`, ``), `i`))),
          (_ && _ === `dddd` && this._fullWeekdaysParse[_].test(_)) ||
            (_ && _ === `ddd` && this._shortWeekdaysParse[_].test(_)) ||
            (_ && _ === `dd` && this._minWeekdaysParse[_].test(_)) ||
            (!_ && this._weekdaysParse[_].test(_)))
        )
          return _;
    }
    function _(_) {
      if (!this.isValid()) return _ == null ? NaN : this;
      var _ = _(this, `Day`);
      return _ == null
        ? _
        : ((_ = _(_, this.localeData())), this.add(_ - _, `d`));
    }
    function _(_) {
      if (!this.isValid()) return _ == null ? NaN : this;
      var _ = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return _ == null ? _ : this.add(_ - _, `d`);
    }
    function _(_) {
      if (!this.isValid()) return _ == null ? NaN : this;
      if (_ != null) {
        var _ = _(_, this.localeData());
        return this.day(this.day() % 7 ? _ : _ - 7);
      }
      return this.day() || 7;
    }
    function _(_) {
      return this._weekdaysParseExact
        ? (_(this, `_weekdaysRegex`) || _.call(this),
          _ ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (_(this, `_weekdaysRegex`) || (this._weekdaysRegex = _),
          this._weekdaysStrictRegex && _
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }
    function _(_) {
      return this._weekdaysParseExact
        ? (_(this, `_weekdaysRegex`) || _.call(this),
          _ ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (_(this, `_weekdaysShortRegex`) || (this._weekdaysShortRegex = _),
          this._weekdaysShortStrictRegex && _
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }
    function _(_) {
      return this._weekdaysParseExact
        ? (_(this, `_weekdaysRegex`) || _.call(this),
          _ ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (_(this, `_weekdaysMinRegex`) || (this._weekdaysMinRegex = _),
          this._weekdaysMinStrictRegex && _
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }
    function _() {
      function _(_, _) {
        return _.length - _.length;
      }
      for (var _ = [], _ = [], _ = [], _ = [], _ = 0, _, _, _, _; _ < 7; _++)
        ((_ = _([2e3, 1]).day(_)),
          (_ = _(this.weekdaysMin(_, ``))),
          (_ = _(this.weekdaysShort(_, ``))),
          (_ = _(this.weekdays(_, ``))),
          _.push(_),
          _.push(_),
          _.push(_),
          _.push(_),
          _.push(_),
          _.push(_));
      (_.sort(_),
        _.sort(_),
        _.sort(_),
        _.sort(_),
        (this._weekdaysRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)),
        (this._weekdaysShortStrictRegex = RegExp(
          `^(` + _.join(`|`) + `)`,
          `i`,
        )),
        (this._weekdaysMinStrictRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)));
    }
    function _(_) {
      var _, _;
      for (_ in (_(this, _), _(this, _), _))
        _(_, _) && ((_ = _[_]), _(_) ? (this[_] = _) : (this[`_` + _] = _));
      ((this._config = _),
        (this._dayOfMonthOrdinalParseLenient = RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            `|\\d{1,2}`,
        )));
    }
    function _(_, _) {
      var _ = _({}, _),
        _;
      for (_ in _)
        _(_, _) &&
          (_(_[_]) && _(_[_])
            ? ((_[_] = {}), _(_[_], _[_]), _(_[_], _[_]))
            : _[_] == null
              ? delete _[_]
              : (_[_] = _[_]));
      for (_ in _) _(_, _) && !_(_, _) && _(_[_]) && (_[_] = _({}, _[_]));
      return _;
    }
    function _(_) {
      _ != null && this.set(_);
    }
    var _ = Object.keys
        ? Object.keys
        : function (_) {
            var _,
              _ = [];
            for (_ in _) _(_, _) && _.push(_);
            return _;
          },
      _ = {
        sameDay: `[Today at] LT`,
        nextDay: `[Tomorrow at] LT`,
        nextWeek: `dddd [at] LT`,
        lastDay: `[Yesterday at] LT`,
        lastWeek: `[Last] dddd [at] LT`,
        sameElse: `L`,
      };
    function _(_, _, _) {
      var _ = this._calendar[_] || this._calendar.sameElse;
      return _(_) ? _.call(_, _) : _;
    }
    var _ = {
      LTS: `h:mm:ss A`,
      _: `h:mm A`,
      _: `MM/DD/YYYY`,
      _: `MMMM D, YYYY`,
      LLL: `MMMM D, YYYY h:mm A`,
      LLLL: `dddd, MMMM D, YYYY h:mm A`,
    };
    function _(_) {
      var _ = this._longDateFormat[_],
        _ = this._longDateFormat[_.toUpperCase()],
        _ = this._longDateFormatCache;
      return _ || !_
        ? _
        : _ && _[_] && _[_].formatUpper === _
          ? _[_].format
          : ((_ = _.match(_)
              .map(function (_) {
                return _ === `MMMM` || _ === `MM` || _ === `DD` || _ === `dddd`
                  ? _.slice(1)
                  : _;
              })
              .join(``)),
            (_ ||= this._longDateFormatCache = {}),
            (_[_] = {
              formatUpper: _,
              format: _,
            }),
            _);
    }
    var _ = `Invalid date`;
    function _() {
      return this._invalidDate;
    }
    var _ = `%d`,
      _ = /\d{1,2}/;
    function _(_) {
      return this._ordinal.replace(`%d`, _);
    }
    var _ = {
      future: `in %s`,
      past: `%s ago`,
      _: `a few seconds`,
      _: `%d seconds`,
      _: `a minute`,
      _: `%d minutes`,
      _: `an hour`,
      _: `%d hours`,
      _: `a day`,
      _: `%d days`,
      _: `a week`,
      _: `%d weeks`,
      _: `a month`,
      _: `%d months`,
      _: `a year`,
      _: `%d years`,
    };
    function _(_, _, _, _) {
      var _ = this._relativeTime[_];
      return _(_) ? _(_, _, _, _) : _.replace(/%d/i, _);
    }
    function _(_, _, _, _) {
      return this.postformat(_.call(this, _, _, _, _));
    }
    function _(_, _) {
      var _ = this._relativeTime[_ > 0 ? `future` : `past`];
      return _(_) ? _(_) : _.replace(/%s/i, _);
    }
    function _(_, _) {
      return this.postformat(_.call(this, _, _));
    }
    function _(_, _, _, _, _, _, _) {
      var _;
      return (
        _ < 100 && _ >= 0
          ? ((_ = new Date(_ + 400, _, _, _, _, _, _)),
            isFinite(_.getFullYear()) && _.setFullYear(_))
          : (_ = new Date(_, _, _, _, _, _, _)),
        _
      );
    }
    function _(_) {
      var _, _;
      return (
        _ < 100 && _ >= 0
          ? ((_ = Array.prototype.slice.call(arguments)),
            (_[0] = _ + 400),
            (_ = new Date(Date.UTC.apply(null, _))),
            isFinite(_.getUTCFullYear()) && _.setUTCFullYear(_))
          : (_ = new Date(Date.UTC.apply(null, arguments))),
        _
      );
    }
    function _(_, _, _) {
      var _ = 7 + _ - _;
      return -((7 + _(_, 0, _).getUTCDay() - _) % 7) + _ - 1;
    }
    function _(_, _, _, _, _) {
      var _ = (7 + _ - _) % 7,
        _ = _(_, _, _),
        _ = 1 + 7 * (_ - 1) + _ + _,
        _,
        _;
      return (
        _ <= 0
          ? ((_ = _ - 1), (_ = _(_) + _))
          : _ > _(_)
            ? ((_ = _ + 1), (_ = _ - _(_)))
            : ((_ = _), (_ = _)),
        {
          year: _,
          dayOfYear: _,
        }
      );
    }
    function _(_, _, _, _) {
      var _ = _(_, _, _),
        _ = Math.floor((_ - _ - 1) / 7) + 1,
        _,
        _;
      return (
        _ < 1
          ? ((_ = _ - 1), (_ = _ + _(_, _, _)))
          : _ > _(_, _, _)
            ? ((_ = _ - _(_, _, _)), (_ = _ + 1))
            : ((_ = _), (_ = _)),
        {
          week: _,
          year: _,
        }
      );
    }
    function _(_, _, _) {
      return _(_.year(), _.dayOfYear(), _, _);
    }
    function _(_, _, _, _, _) {
      return _(_, Math.round((_(_, _, _) - _(_, 0, 1)) / 864e5) + 1, _, _);
    }
    function _(_, _, _) {
      var _ = _(_, _, _),
        _ = _(_ + 1, _, _);
      return (_(_) - _ + _) / 7;
    }
    (_(`w`, [`ww`, 2], `wo`, `week`),
      _(`W`, [`WW`, 2], `Wo`, `isoWeek`),
      _(`w`, _, _),
      _(`ww`, _, _),
      _(`W`, _, _),
      _(`WW`, _, _),
      _([`w`, `ww`, `W`, `WW`], function (_, _, _, _) {
        _[_.substr(0, 1)] = _(_);
      }));
    function _(_) {
      return _(_, this._week.dow, this._week.doy).week;
    }
    var _ = {
      dow: 0,
      doy: 6,
    };
    function _() {
      return this._week.dow;
    }
    function _() {
      return this._week.doy;
    }
    function _(_) {
      var _ = this.localeData().week(this);
      return _ == null ? _ : this.add((_ - _) * 7, `d`);
    }
    function _(_) {
      var _ = _(this, 1, 4).week;
      return _ == null ? _ : this.add((_ - _) * 7, `d`);
    }
    function _() {
      return this.hours() % 12 || 12;
    }
    function _() {
      return this.hours() || 24;
    }
    (_(`H`, [`HH`, 2], 0, `hour`),
      _(`h`, [`hh`, 2], 0, _),
      _(`k`, [`kk`, 2], 0, _),
      _(`hmm`, 0, 0, function () {
        return `` + _.apply(this) + _(this.minutes(), 2);
      }),
      _(`hmmss`, 0, 0, function () {
        return `` + _.apply(this) + _(this.minutes(), 2) + _(this.seconds(), 2);
      }),
      _(`Hmm`, 0, 0, function () {
        return `` + this.hours() + _(this.minutes(), 2);
      }),
      _(`Hmmss`, 0, 0, function () {
        return `` + this.hours() + _(this.minutes(), 2) + _(this.seconds(), 2);
      }));
    function _(_, _) {
      _(_, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), _);
      });
    }
    (_(`a`, !0), _(`A`, !1));
    function _(_, _) {
      return _._meridiemParse;
    }
    (_(`a`, _),
      _(`A`, _),
      _(`H`, _, _),
      _(`h`, _, _),
      _(`k`, _, _),
      _(`HH`, _, _),
      _(`hh`, _, _),
      _(`kk`, _, _),
      _(`hmm`, _),
      _(`hmmss`, _),
      _(`Hmm`, _),
      _(`Hmmss`, _),
      _([`H`, `HH`], _),
      _([`k`, `kk`], function (_, _, _) {
        var _ = _(_);
        _[_] = _ === 24 ? 0 : _;
      }),
      _([`a`, `A`], function (_, _, _) {
        ((_._isPm = _._locale.isPM(_)), (_._meridiem = _));
      }),
      _([`h`, `hh`], function (_, _, _) {
        ((_[_] = _(_)), (_(_).bigHour = !0));
      }),
      _(`hmm`, function (_, _, _) {
        var _ = _.length - 2;
        ((_[_] = _(_.substr(0, _))),
          (_[_] = _(_.substr(_))),
          (_(_).bigHour = !0));
      }),
      _(`hmmss`, function (_, _, _) {
        var _ = _.length - 4,
          _ = _.length - 2;
        ((_[_] = _(_.substr(0, _))),
          (_[_] = _(_.substr(_, 2))),
          (_[_] = _(_.substr(_))),
          (_(_).bigHour = !0));
      }),
      _(`Hmm`, function (_, _, _) {
        var _ = _.length - 2;
        ((_[_] = _(_.substr(0, _))), (_[_] = _(_.substr(_))));
      }),
      _(`Hmmss`, function (_, _, _) {
        var _ = _.length - 4,
          _ = _.length - 2;
        ((_[_] = _(_.substr(0, _))),
          (_[_] = _(_.substr(_, 2))),
          (_[_] = _(_.substr(_))));
      }));
    function _(_) {
      return (_ + ``).toLowerCase().charAt(0) === `p`;
    }
    var _ = /[ap]\.?m?\.?/i,
      _ = _(`Hours`, !0);
    function _(_, _, _) {
      return _ > 11 ? (_ ? `pm` : `PM`) : _ ? `am` : `AM`;
    }
    var _ = {
        calendar: _,
        longDateFormat: _,
        invalidDate: _,
        ordinal: _,
        dayOfMonthOrdinalParse: _,
        relativeTime: _,
        months: _,
        monthsShort: _,
        week: _,
        weekdays: _,
        weekdaysMin: _,
        weekdaysShort: _,
        meridiemParse: _,
      },
      _ = {},
      _ = {},
      _;
    function _(_, _) {
      var _,
        _ = Math.min(_.length, _.length);
      for (_ = 0; _ < _; _ += 1) if (_[_] !== _[_]) return _;
      return _;
    }
    function _(_) {
      return _ && _.toLowerCase().replace(`_`, `-`);
    }
    function _(_) {
      for (var _ = 0, _, _, _, _; _ < _.length;) {
        for (
          _ = _(_[_]).split(`-`),
            _ = _.length,
            _ = _(_[_ + 1]),
            _ = _ ? _.split(`-`) : null;
          _ > 0;
        ) {
          if (((_ = _(_.slice(0, _).join(`-`))), _)) return _;
          if (_ && _.length >= _ && _(_, _) >= _ - 1) break;
          _--;
        }
        _++;
      }
      return _;
    }
    function _(_) {
      return typeof _ == `string` && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(_);
    }
    function _(_) {
      var _ = null,
        _,
        _;
      if (_(_, _)) return _[_];
      if (((_ = _(_)), _(_, _))) return _[_];
      if (_ !== void 0 && _ && _.exports && _(_))
        try {
          ((_ = _._abbr), (_ = _), _(`./locale/` + _), _(_));
        } catch {
          _[_] = null;
        }
      if (_(_, _)) return _[_];
    }
    function _(_, _) {
      var _;
      return (
        _ &&
          ((_ = _(_) ? _(_) : _(_, _)),
          _
            ? (_ = _)
            : typeof console < `u` &&
              console.warn &&
              console.warn(
                `Locale ` + _ + ` not found. Did you forget to load it?`,
              )),
        _._abbr
      );
    }
    function _(_, _) {
      if (_ !== null) {
        var _,
          _ = _;
        if (((_.abbr = _), _[_] != null))
          (_(
            `defineLocaleOverride`,
            `use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.`,
          ),
            (_ = _[_]._config));
        else if (_.parentLocale != null) {
          if (_[_.parentLocale] != null) _ = _[_.parentLocale]._config;
          else if (((_ = _(_.parentLocale)), _ != null)) _ = _._config;
          else
            return (
              _[_.parentLocale] || (_[_.parentLocale] = []),
              _[_.parentLocale].push({
                name: _,
                config: _,
              }),
              null
            );
        }
        return (
          (_[_] = new _(_(_, _))),
          _[_] &&
            _[_].forEach(function (_) {
              _(_.name, _.config);
            }),
          _(_),
          _[_]
        );
      }
      return (delete _[_], null);
    }
    function _(_, _) {
      var _,
        _ = _(_),
        _ = _;
      return (
        _ != null && (_ = _._abbr),
        _ == null
          ? _[_] != null &&
            (_[_].parentLocale == null
              ? _[_] != null && delete _[_]
              : ((_[_] = _[_].parentLocale), _ === _() && _(_)))
          : (_[_] != null && _[_].parentLocale != null
              ? _[_].set(_(_[_]._config, _))
              : (_ != null && (_ = _._config),
                (_ = _(_, _)),
                _ ?? (_.abbr = _),
                (_ = new _(_)),
                (_.parentLocale = _[_]),
                (_[_] = _)),
            _(_)),
        _[_]
      );
    }
    function _(_) {
      var _;
      if ((_ && _._locale && _._locale._abbr && (_ = _._locale._abbr), !_))
        return _;
      if (!_(_)) {
        if (((_ = _(_)), _)) return _;
        _ = [_];
      }
      return _(_);
    }
    function _() {
      return _(_);
    }
    function _(_) {
      var _,
        _ = _._;
      return (
        _ &&
          _(_).overflow === -2 &&
          ((_ =
            _[_] < 0 || _[_] > 11
              ? _
              : _[_] < 1 || _[_] > _(_[_], _[_])
                ? _
                : _[_] < 0 ||
                    _[_] > 24 ||
                    (_[_] === 24 && (_[_] !== 0 || _[_] !== 0 || _[_] !== 0))
                  ? _
                  : _[_] < 0 || _[_] > 59
                    ? _
                    : _[_] < 0 || _[_] > 59
                      ? _
                      : _[_] < 0 || _[_] > 999
                        ? _
                        : -1),
          _(_)._overflowDayOfYear && (_ < _ || _ > _) && (_ = _),
          _(_)._overflowWeeks && _ === -1 && (_ = _),
          _(_)._overflowWeekday && _ === -1 && (_ = _),
          (_(_).overflow = _)),
        _
      );
    }
    var _ =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      _ =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      _ = /Z|[+-]\d\d(?::?\d\d)?/,
      _ = [
        [`YYYYYY-MM-DD`, /[+-]\d{6}-\d\d-\d\d/],
        [`YYYY-MM-DD`, /\d{4}-\d\d-\d\d/],
        [`GGGG-[W]WW-E`, /\d{4}-W\d\d-\d/],
        [`GGGG-[W]WW`, /\d{4}-W\d\d/, !1],
        [`YYYY-DDD`, /\d{4}-\d{3}/],
        [`YYYY-MM`, /\d{4}-\d\d/, !1],
        [`YYYYYYMMDD`, /[+-]\d{10}/],
        [`YYYYMMDD`, /\d{8}/],
        [`GGGG[W]WWE`, /\d{4}W\d{3}/],
        [`GGGG[W]WW`, /\d{4}W\d{2}/, !1],
        [`YYYYDDD`, /\d{7}/],
        [`YYYYMM`, /\d{6}/, !1],
        [`YYYY`, /\d{4}/, !1],
      ],
      _ = [
        [`HH:mm:ss.SSSS`, /\d\d:\d\d:\d\d\.\d+/],
        [`HH:mm:ss,SSSS`, /\d\d:\d\d:\d\d,\d+/],
        [`HH:mm:ss`, /\d\d:\d\d:\d\d/],
        [`HH:mm`, /\d\d:\d\d/],
        [`HHmmss.SSSS`, /\d\d\d\d\d\d\.\d+/],
        [`HHmmss,SSSS`, /\d\d\d\d\d\d,\d+/],
        [`HHmmss`, /\d\d\d\d\d\d/],
        [`HHmm`, /\d\d\d\d/],
        [`HH`, /\d\d/],
      ],
      _ = /^\/?Date\((-?\d+)/i,
      _ =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      _ = {
        _: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
    function _(_) {
      var _,
        _,
        _ = _._,
        _ = _.exec(_) || _.exec(_),
        _,
        _,
        _,
        _,
        _ = _.length,
        _ = _.length;
      if (_) {
        for (_(_).iso = !0, _ = 0, _ = _; _ < _; _++)
          if (_[_][1].exec(_[1])) {
            ((_ = _[_][0]), (_ = _[_][2] !== !1));
            break;
          }
        if (_ == null) {
          _._isValid = !1;
          return;
        }
        if (_[3]) {
          for (_ = 0, _ = _; _ < _; _++)
            if (_[_][1].exec(_[3])) {
              _ = (_[2] || ` `) + _[_][0];
              break;
            }
          if (_ == null) {
            _._isValid = !1;
            return;
          }
        }
        if (!_ && _ != null) {
          _._isValid = !1;
          return;
        }
        if (_[4]) {
          if (_.exec(_[4])) _ = `Z`;
          else {
            _._isValid = !1;
            return;
          }
        }
        ((_._ = _ + (_ || ``) + (_ || ``)), _(_));
      } else _._isValid = !1;
    }
    function _(_, _, _, _, _, _) {
      var _ = [
        _(_),
        _.indexOf(_),
        parseInt(_, 10),
        parseInt(_, 10),
        parseInt(_, 10),
      ];
      return (_ && _.push(parseInt(_, 10)), _);
    }
    function _(_) {
      var _ = parseInt(_, 10);
      return _ <= 49 ? 2e3 + _ : _ <= 999 ? 1900 + _ : _;
    }
    function _(_) {
      return _.replace(/\([^()]*\)|[\n\t]/g, ` `)
        .replace(/(\s\s+)/g, ` `)
        .replace(/^\s\s*/, ``)
        .replace(/\s\s*$/, ``);
    }
    function _(_, _, _) {
      return _ && _.indexOf(_) !== new Date(_[0], _[1], _[2]).getDay()
        ? ((_(_).weekdayMismatch = !0), (_._isValid = !1), !1)
        : !0;
    }
    function _(_, _, _) {
      if (_) return _[_];
      if (_) return 0;
      var _ = parseInt(_, 10),
        _ = _ % 100;
      return ((_ - _) / 100) * 60 + _;
    }
    function _(_) {
      var _ = _.exec(_(_._)),
        _;
      if (_) {
        if (((_ = _(_[4], _[3], _[2], _[5], _[6], _[7])), !_(_[1], _, _)))
          return;
        ((_._ = _),
          (_._tzm = _(_[8], _[9], _[10])),
          (_._ = _.apply(null, _._)),
          _._.setUTCMinutes(_._.getUTCMinutes() - _._tzm),
          (_(_).rfc2822 = !0));
      } else _._isValid = !1;
    }
    function _(_) {
      var _ = _.exec(_._);
      if (_ !== null) _._ = new Date(+_[1]);
      else {
        if ((_(_), _._isValid === !1)) delete _._isValid;
        else return;
        if ((_(_), _._isValid === !1)) delete _._isValid;
        else return;
        _._strict ? (_._isValid = !1) : _.createFromInputFallback(_);
      }
    }
    _.createFromInputFallback = _(
      `value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.`,
      function (_) {
        _._ = new Date(_._ + (_._useUTC ? ` UTC` : ``));
      },
    );
    function _(_, _, _) {
      return _ ?? _ ?? _;
    }
    function _(_, _, _) {
      var _ = Object.prototype.hasOwnProperty.call(
          _,
          `_isDefaultDatePartsForWeek`,
        ),
        _ = _._isDefaultDatePartsForWeek;
      _._isDefaultDatePartsForWeek = !!_;
      try {
        return _._getDefaultDateParts(_, _, _);
      } finally {
        _
          ? (_._isDefaultDatePartsForWeek = _)
          : delete _._isDefaultDatePartsForWeek;
      }
    }
    function _(_) {
      var _ = _._defaultDatePartsNow;
      return _
        ? ((_.hasValue ||= ((_.value = _.now()), !0)), _.value)
        : _.now();
    }
    function _(_, _, _) {
      var _ = _ || _._isDefaultDatePartsForWeek,
        _ = _ ? _(_) : new Date(_);
      return _
        ? [_.year(), _.month(), _.date()]
        : _._useUTC
          ? [_.getUTCFullYear(), _.getUTCMonth(), _.getUTCDate()]
          : [_.getFullYear(), _.getMonth(), _.getDate()];
    }
    _._getDefaultDateParts = _;
    function _(_) {
      var _,
        _,
        _ = [],
        _,
        _,
        _,
        _,
        _;
      if (!_._) {
        for (
          (_._[_] == null || _._[_] == null || _._[_] == null) &&
            ((_ = _(_)), (_ = _(_, _))),
            _._ && _._[_] == null && _._[_] == null && _(_, _(_, _, !0)),
            _._dayOfYear != null &&
              ((_ = _._[_] == null ? _[_] : _._[_]),
              (_._dayOfYear > _(_) || _._dayOfYear === 0) &&
                (_(_)._overflowDayOfYear = !0),
              (_ = _(_, 0, _._dayOfYear)),
              (_._[_] = _.getUTCMonth()),
              (_._[_] = _.getUTCDate())),
            _ = _._[_] == null || _._[_] == null || _._[_] == null,
            _ = 0;
          _ < 3 && _._[_] == null;
          ++_
        )
          _._[_] = _[_] = _[_];
        for (; _ < 7; _++) _._[_] = _[_] = _._[_] == null ? +(_ === 2) : _._[_];
        (_._[_] === 24 &&
          _._[_] === 0 &&
          _._[_] === 0 &&
          _._[_] === 0 &&
          ((_._nextDay = !0), (_._[_] = 0)),
          (_._ = (_._useUTC ? _ : _).apply(null, _)),
          (_ = _._useUTC ? _._.getUTCDay() : _._.getDay()),
          _._tzm != null && _._.setUTCMinutes(_._.getUTCMinutes() - _._tzm),
          _._nextDay && (_._[_] = 24),
          _._ &&
            _._._ !== void 0 &&
            !_ &&
            _._._ !== _ &&
            (_(_).weekdayMismatch = !0));
      }
    }
    function _(_, _) {
      var _ = _._,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _;
      (_._ != null || _._ != null || _._ != null
        ? ((_ = 1),
          (_ = 4),
          (_ = _(_._, _._[_], _(_[_], _[_], _[_], 1, 4).year)),
          (_ = _(_._, 1)),
          (_ = _(_._, 1)),
          (_ < 1 || _ > 7) && (_ = !0))
        : ((_ = _._locale._week.dow),
          (_ = _._locale._week.doy),
          (_ = _(_[_], _[_], _[_], _, _)),
          (_ = _(_._, _._[_], _.year)),
          (_ = _(_._, _.week)),
          _._ == null
            ? _._ == null
              ? (_ = _)
              : ((_ = _._ + _), (_._ < 0 || _._ > 6) && (_ = !0))
            : ((_ = _._), (_ < 0 || _ > 6) && (_ = !0))),
        _ < 1 || _ > _(_, _, _)
          ? (_(_)._overflowWeeks = !0)
          : _ == null
            ? ((_ = _(_, _, _, _, _)),
              (_._[_] = _.year),
              (_._dayOfYear = _.dayOfYear))
            : (_(_)._overflowWeekday = !0));
    }
    ((_.ISO_8601 = function () {}), (_.RFC_2822 = function () {}));
    function _(_) {
      if (_._ === _.ISO_8601) _(_);
      else if (_._ === _.RFC_2822) _(_);
      else {
        ((_._ = []), (_(_).empty = !0));
        var _ = `` + _._,
          _,
          _,
          _,
          _,
          _,
          _ = _.length,
          _ = 0,
          _,
          _;
        for (
          _ = _(_._, _._locale).match(_) || [], _ = _.length, _ = 0;
          _ < _;
          _++
        )
          ((_ = _[_]),
            (_ = (_.match(_(_, _)) || [])[0]),
            _ &&
              ((_ = _.substr(0, _.indexOf(_))),
              _.length > 0 && _(_).unusedInput.push(_),
              (_ = _.slice(_.indexOf(_) + _.length)),
              (_ += _.length)),
            _[_]
              ? (_ ? (_(_).empty = !1) : _(_).unusedTokens.push(_), _(_, _, _))
              : _._strict && !_ && _(_).unusedTokens.push(_));
        ((_(_).charsLeftOver = _ - _),
          _.length > 0 && _(_).unusedInput.push(_),
          _._[_] <= 12 &&
            _(_).bigHour === !0 &&
            _._[_] > 0 &&
            (_(_).bigHour = void 0),
          (_(_).parsedDateParts = _._.slice(0)),
          (_(_).meridiem = _._meridiem),
          (_._[_] = _(_._locale, _._[_], _._meridiem)),
          (_ = _(_).era),
          _ !== null && (_._[_] = _._locale.erasConvertYear(_, _._[_])),
          _(_),
          _(_));
      }
    }
    function _(_, _, _) {
      var _;
      return _ == null
        ? _
        : _.meridiemHour == null
          ? (_.isPM == null ||
              ((_ = _.isPM(_)),
              _ && _ < 12 && (_ += 12),
              !_ && _ === 12 && (_ = 0)),
            _)
          : _.meridiemHour(_, _);
    }
    function _(_) {
      var _,
        _,
        _,
        _,
        _,
        _,
        _ = !1,
        _ = {},
        _ = _._.length;
      if (_ === 0) ((_(_).invalidFormat = !0), (_._ = new Date(NaN)));
      else {
        for (_ = 0; _ < _; _++)
          ((_ = 0),
            (_ = !1),
            (_ = _({}, _)),
            _._useUTC != null && (_._useUTC = _._useUTC),
            (_._defaultDatePartsNow = _),
            (_._ = _._[_]),
            _(_),
            _(_) && (_ = !0),
            (_ += _(_).charsLeftOver),
            (_ += _(_).unusedTokens.length * 10),
            (_(_).score = _),
            _
              ? _ < _ && ((_ = _), (_ = _))
              : (_ == null || _ < _ || _) && ((_ = _), (_ = _), _ && (_ = !0)));
        _(_, _ || _);
      }
    }
    function _(_) {
      if (!_._) {
        var _ = _(_._),
          _ = _.day === void 0 ? _.date : _.day;
        ((_._ = _(
          [_.year, _.month, _, _.hour, _.minute, _.second, _.millisecond],
          function (_) {
            return _ && parseInt(_, 10);
          },
        )),
          _(_));
      }
    }
    function _(_) {
      var _ = new _(_(_(_)));
      return ((_._nextDay &&= (_.add(1, `d`), void 0)), _);
    }
    function _(_) {
      var _ = _._,
        _ = _._;
      return (
        (_._locale = _._locale || _(_._)),
        _ === null || (_ === void 0 && _ === ``)
          ? _({
              nullInput: !0,
            })
          : (typeof _ == `string` && (_._ = _ = _._locale.preparse(_)),
            _(_)
              ? new _(_(_))
              : (_(_) ? (_._ = _) : _(_) ? _(_) : _ ? _(_) : _(_),
                _(_) || (_._ = null),
                _))
      );
    }
    function _(_) {
      var _ = _._;
      _(_)
        ? (_._ = new Date(_.now()))
        : _(_)
          ? (_._ = new Date(_.valueOf()))
          : typeof _ == `string`
            ? _(_)
            : _(_)
              ? ((_._ = _(_.slice(0), function (_) {
                  return parseInt(_, 10);
                })),
                _(_))
              : _(_)
                ? _(_)
                : _(_)
                  ? (_._ = new Date(_))
                  : _.createFromInputFallback(_);
    }
    function _(_, _, _, _, _) {
      var _ = {};
      return (
        (_ === !0 || _ === !1) && ((_ = _), (_ = void 0)),
        (_ === !0 || _ === !1) && ((_ = _), (_ = void 0)),
        ((_(_) && _(_)) || (_(_) && _.length === 0)) && (_ = void 0),
        (_._isAMomentObject = !0),
        (_._useUTC = _._isUTC = _),
        (_._ = _),
        (_._ = _),
        (_._ = _),
        (_._strict = _),
        _(_)
      );
    }
    function _(_, _, _, _) {
      return _(_, _, _, _, !1);
    }
    var _ = _(
        `moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/`,
        function () {
          var _ = _.apply(null, arguments);
          return this.isValid() && _.isValid() ? (_ < this ? this : _) : _();
        },
      ),
      _ = _(
        `moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/`,
        function () {
          var _ = _.apply(null, arguments);
          return this.isValid() && _.isValid() ? (_ > this ? this : _) : _();
        },
      );
    function _(_, _) {
      var _, _;
      if ((_.length === 1 && _(_[0]) && (_ = _[0]), !_.length)) return _();
      for (_ = 0; _ < _.length; ++_)
        if (_(_[_])) {
          _ = _[_];
          break;
        }
      if (!_) return _();
      for (++_; _ < _.length; ++_)
        _(_[_]) && (!_[_].isValid() || _[_][_](_)) && (_ = _[_]);
      return _;
    }
    function _() {
      return _(`isBefore`, [].slice.call(arguments, 0));
    }
    function _() {
      return _(`isAfter`, [].slice.call(arguments, 0));
    }
    var _ = function () {
        return Date.now ? Date.now() : +new Date();
      },
      _ = [
        `year`,
        `quarter`,
        `month`,
        `week`,
        `day`,
        `hour`,
        `minute`,
        `second`,
        `millisecond`,
      ];
    function _(_) {
      var _,
        _ = !1,
        _,
        _ = _.length;
      for (_ in _)
        if (_(_, _) && (_.call(_, _) === -1 || (_[_] != null && isNaN(_[_]))))
          return !1;
      for (_ = 0; _ < _; ++_)
        if (_[_[_]]) {
          if (_) return !1;
          parseFloat(_[_[_]]) !== _(_[_[_]]) && (_ = !0);
        }
      return !0;
    }
    function _() {
      return this._isValid;
    }
    function _() {
      return _(NaN);
    }
    function _(_) {
      var _ = _(_),
        _ = _.year || 0,
        _ = _.quarter || 0,
        _ = _.month || 0,
        _ = _.week || _.isoWeek || 0,
        _ = _.day || 0,
        _ = _.hour || 0,
        _ = _.minute || 0,
        _ = _.second || 0,
        _ = _.millisecond || 0;
      ((this._isValid = _(_)),
        (this._milliseconds = +_ + _ * 1e3 + _ * 6e4 + _ * 1e3 * 60 * 60),
        (this._days = +_ + _ * 7),
        (this._months = +_ + _ * 3 + _ * 12),
        (this._data = {}),
        (this._locale = _()),
        this._bubble());
    }
    function _(_) {
      return _ instanceof _;
    }
    function _(_) {
      return _ < 0 ? Math.round(-1 * _) * -1 : Math.round(_);
    }
    function _(_, _, _) {
      for (
        var _ = Math.min(_.length, _.length),
          _ = Math.abs(_.length - _.length),
          _ = 0,
          _ = 0;
        _ < _;
        _++
      )
        _(_[_]) !== _(_[_]) && _++;
      return _ + _;
    }
    function _(_, _) {
      _(_, 0, 0, function () {
        var _ = this.utcOffset(),
          _ = `+`;
        return (
          _ < 0 && ((_ = -_), (_ = `-`)),
          _ + _(~~(_ / 60), 2) + _ + _(~~_ % 60, 2)
        );
      });
    }
    (_(`Z`, `:`),
      _(`ZZ`, ``),
      _(`Z`, _),
      _(`ZZ`, _),
      _([`Z`, `ZZ`], function (_, _, _) {
        var _ = _(_, _);
        ((_._useUTC = !0),
          (_._tzm = _),
          _ === null && (_(_).invalidOffset = _));
      }));
    var _ = /([\+\-]|\d\d)/gi;
    function _(_, _) {
      var _ = (_ || ``).match(_),
        _,
        _,
        _;
      return _ === null ||
        ((_ = _[_.length - 1] || []),
        (_ = (_ + ``).match(_) || [`-`, 0, 0]),
        (_ = +(_[1] * 60) + _(_[2])),
        _(_[2]) > 59 || (_[0] === `+` ? _ > 840 : _ > 720))
        ? null
        : _ === 0
          ? 0
          : _[0] === `+`
            ? _
            : -_;
    }
    function _(_, _) {
      var _, _;
      return _._isUTC
        ? ((_ = _.clone()),
          (_ = (_(_) || _(_) ? _.valueOf() : _(_).valueOf()) - _.valueOf()),
          _._.setTime(_._.valueOf() + _),
          _.updateOffset(_, !1),
          _)
        : _(_).local();
    }
    function _(_) {
      return -Math.round(_._.getTimezoneOffset());
    }
    _.updateOffset = function () {};
    function _(_, _, _) {
      var _ = this._offset || 0,
        _;
      if (!this.isValid()) return _ == null ? NaN : this;
      if (_ != null) {
        if (typeof _ == `string`) {
          if (((_ = _(_, _)), _ === null)) return this;
        } else Math.abs(_) < 16 && !_ && (_ *= 60);
        return (
          !this._isUTC && _ && (_ = _(this)),
          (this._offset = _),
          (this._isUTC = !0),
          _ != null && this.add(_, `m`),
          _ !== _ &&
            (!_ || this._changeInProgress
              ? _(this, _(_ - _, `m`), 1, !1)
              : (this._changeInProgress ||=
                  ((this._changeInProgress = !0),
                  _.updateOffset(this, !0),
                  null))),
          this
        );
      }
      return this._isUTC ? _ : _(this);
    }
    function _(_, _) {
      return _ == null
        ? -this.utcOffset()
        : (typeof _ != `string` && (_ = -_), this.utcOffset(_, _), this);
    }
    function _(_) {
      return this.utcOffset(0, _);
    }
    function _(_) {
      return (
        this._isUTC &&
          (this.utcOffset(0, _),
          (this._isUTC = !1),
          _ && this.subtract(_(this), `m`)),
        this
      );
    }
    function _() {
      if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
      else if (typeof this._ == `string`) {
        var _ = _(_, this._);
        _ == null ? this.utcOffset(0, !0) : this.utcOffset(_);
      }
      return this;
    }
    function _(_) {
      return this.isValid()
        ? ((_ = _ ? _(_).utcOffset() : 0), (this.utcOffset() - _) % 60 == 0)
        : !1;
    }
    function _() {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }
    function _() {
      if (!_(this._isDSTShifted)) return this._isDSTShifted;
      var _ = {},
        _;
      return (
        _(_, this),
        (_ = _(_)),
        _._
          ? ((_ = _._isUTC ? _(_._) : _(_._)),
            (this._isDSTShifted = this.isValid() && _(_._, _.toArray()) > 0))
          : (this._isDSTShifted = !1),
        this._isDSTShifted
      );
    }
    function _() {
      return this.isValid() ? !this._isUTC : !1;
    }
    function _() {
      return this.isValid() ? this._isUTC : !1;
    }
    function _() {
      return this.isValid() ? this._isUTC && this._offset === 0 : !1;
    }
    var _ = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
      _ =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function _(_, _) {
      var _ = _,
        _ = null,
        _,
        _,
        _;
      return (
        _(_)
          ? (_ = {
              _: _._milliseconds,
              _: _._days,
              _: _._months,
            })
          : _(_) || !isNaN(+_)
            ? ((_ = {}), _ ? (_[_] = +_) : (_.milliseconds = +_))
            : (_ = _.exec(_))
              ? ((_ = _[1] === `-` ? -1 : 1),
                (_ = {
                  _: 0,
                  _: _(_[_]) * _,
                  _: _(_[_]) * _,
                  _: _(_[_]) * _,
                  _: _(_[_]) * _,
                  _: _(_(_[_] * 1e3)) * _,
                }))
              : (_ = _.exec(_))
                ? ((_ = _[1] === `-` ? -1 : 1),
                  (_ = {
                    _: _(_[2], _),
                    _: _(_[3], _),
                    _: _(_[4], _),
                    _: _(_[5], _),
                    _: _(_[6], _),
                    _: _(_[7], _),
                    _: _(_[8], _),
                  }))
                : _ == null
                  ? (_ = {})
                  : typeof _ == `object` &&
                    (`from` in _ || `to` in _) &&
                    ((_ = _(_(_.from), _(_._))),
                    (_ = {}),
                    (_._ = _.milliseconds),
                    (_._ = _.months)),
        (_ = new _(_)),
        _(_) && _(_, `_locale`) && (_._locale = _._locale),
        _(_) && _(_, `_isValid`) && (_._isValid = _._isValid),
        _
      );
    }
    ((_._ = _.prototype), (_.invalid = _));
    function _(_, _) {
      var _ = _ && parseFloat(_.replace(`,`, `.`));
      return (isNaN(_) ? 0 : _) * _;
    }
    function _(_, _) {
      var _ = {};
      return (
        (_.months = _.month() - _.month() + (_.year() - _.year()) * 12),
        _.clone().add(_.months, `M`).isAfter(_) && --_.months,
        (_.milliseconds = +_ - _.clone().add(_.months, `M`)),
        _
      );
    }
    function _(_, _) {
      var _;
      return _.isValid() && _.isValid()
        ? ((_ = _(_, _)),
          _.isBefore(_)
            ? (_ = _(_, _))
            : ((_ = _(_, _)),
              (_.milliseconds = -_.milliseconds),
              (_.months = -_.months)),
          _)
        : {
            milliseconds: 0,
            months: 0,
          };
    }
    function _(_, _) {
      return function (_, _) {
        var _, _;
        return (
          _ !== null &&
            !isNaN(+_) &&
            (_(
              _,
              `moment().` +
                _ +
                `(period, number) is deprecated. Please use moment().` +
                _ +
                `(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.`,
            ),
            (_ = _),
            (_ = _),
            (_ = _)),
          (_ = _(_, _)),
          _(this, _, _),
          this
        );
      };
    }
    function _(_, _, _, _) {
      var _ = _._milliseconds,
        _ = _(_._days),
        _ = _(_._months);
      _.isValid() &&
        ((_ ??= !0),
        _ && _(_, _(_, `Month`) + _ * _),
        _ && _(_, `Date`, _(_, `Date`) + _ * _),
        _ && _._.setTime(_._.valueOf() + _ * _),
        _ && _.updateOffset(_, _ || _));
    }
    var _ = _(1, `add`),
      _ = _(-1, `subtract`);
    function _(_) {
      return typeof _ == `string` || _ instanceof String;
    }
    function _(_) {
      return _(_) || _(_) || _(_) || _(_) || _(_) || _(_) || _ == null;
    }
    function _(_) {
      var _ = _(_) && !_(_),
        _ = !1,
        _ = [
          `years`,
          `year`,
          `y`,
          `months`,
          `month`,
          `M`,
          `days`,
          `day`,
          `d`,
          `dates`,
          `date`,
          `D`,
          `hours`,
          `hour`,
          `h`,
          `minutes`,
          `minute`,
          `m`,
          `seconds`,
          `second`,
          `s`,
          `milliseconds`,
          `millisecond`,
          `ms`,
        ],
        _,
        _,
        _ = _.length;
      for (_ = 0; _ < _; _ += 1) ((_ = _[_]), (_ ||= _(_, _)));
      return _ && _;
    }
    function _(_) {
      var _ = _(_),
        _ = !1;
      return (
        _ &&
          (_ =
            _.filter(function (_) {
              return !_(_) && _(_);
            }).length === 0),
        _ && _
      );
    }
    function _(_) {
      for (
        var _ = _(_) && !_(_),
          _ = !1,
          _ = [
            `sameDay`,
            `nextDay`,
            `lastDay`,
            `nextWeek`,
            `lastWeek`,
            `sameElse`,
          ],
          _ = 0,
          _;
        _ < _.length;
        _ += 1
      )
        ((_ = _[_]), (_ ||= _(_, _)));
      return _ && _;
    }
    function _(_, _) {
      var _ = _.diff(_, `days`, !0);
      return _ < -6
        ? `sameElse`
        : _ < -1
          ? `lastWeek`
          : _ < 0
            ? `lastDay`
            : _ < 1
              ? `sameDay`
              : _ < 2
                ? `nextDay`
                : _ < 7
                  ? `nextWeek`
                  : `sameElse`;
    }
    function _(_, _) {
      arguments.length === 1 &&
        (arguments[0]
          ? _(arguments[0])
            ? ((_ = arguments[0]), (_ = void 0))
            : _(arguments[0]) && ((_ = arguments[0]), (_ = void 0))
          : ((_ = void 0), (_ = void 0)));
      var _ = _ || _(),
        _ = _(_, this).startOf(`day`),
        _ = _.calendarFormat(this, _) || `sameElse`,
        _ = _ && (_(_[_]) ? _[_].call(this, _) : _[_]);
      return this.format(_ || this.localeData().calendar(_, this, _(_)));
    }
    function _() {
      return new _(this);
    }
    function _(_, _) {
      var _ = _(_) ? _ : _(_);
      return this.isValid() && _.isValid()
        ? ((_ = _(_) || `millisecond`),
          _ === `millisecond`
            ? this.valueOf() > _.valueOf()
            : _.valueOf() < this.clone().startOf(_).valueOf())
        : !1;
    }
    function _(_, _) {
      var _ = _(_) ? _ : _(_);
      return this.isValid() && _.isValid()
        ? ((_ = _(_) || `millisecond`),
          _ === `millisecond`
            ? this.valueOf() < _.valueOf()
            : this.clone().endOf(_).valueOf() < _.valueOf())
        : !1;
    }
    function _(_, _, _, _) {
      var _ = _(_) ? _ : _(_),
        _ = _(_) ? _ : _(_);
      return this.isValid() && _.isValid() && _.isValid()
        ? ((_ ||= `()`),
          (_[0] === `(` ? this.isAfter(_, _) : !this.isBefore(_, _)) &&
            (_[1] === `)` ? this.isBefore(_, _) : !this.isAfter(_, _)))
        : !1;
    }
    function _(_, _) {
      var _ = _(_) ? _ : _(_),
        _;
      return this.isValid() && _.isValid()
        ? ((_ = _(_) || `millisecond`),
          _ === `millisecond`
            ? this.valueOf() === _.valueOf()
            : ((_ = _.valueOf()),
              this.clone().startOf(_).valueOf() <= _ &&
                _ <= this.clone().endOf(_).valueOf()))
        : !1;
    }
    function _(_, _) {
      return this.isSame(_, _) || this.isAfter(_, _);
    }
    function _(_, _) {
      return this.isSame(_, _) || this.isBefore(_, _);
    }
    function _(_, _, _) {
      var _, _, _;
      if (!this.isValid() || ((_ = _(_, this)), !_.isValid())) return NaN;
      switch (((_ = (_.utcOffset() - this.utcOffset()) * 6e4), (_ = _(_)), _)) {
        case `year`:
          _ = _(this, _) / 12;
          break;
        case `month`:
          _ = _(this, _);
          break;
        case `quarter`:
          _ = _(this, _) / 3;
          break;
        case `second`:
          _ = (this - _) / 1e3;
          break;
        case `minute`:
          _ = (this - _) / 6e4;
          break;
        case `hour`:
          _ = (this - _) / 36e5;
          break;
        case `day`:
          _ = (this - _ - _) / 864e5;
          break;
        case `week`:
          _ = (this - _ - _) / 6048e5;
          break;
        default:
          _ = this - _;
      }
      return _ ? _ : _(_);
    }
    function _(_, _) {
      if (_.date() < _.date()) return -_(_, _);
      var _ = (_.year() - _.year()) * 12 + (_.month() - _.month()),
        _ = _.clone().add(_, `months`),
        _,
        _;
      return (
        _ - _ < 0
          ? ((_ = _.clone().add(_ - 1, `months`)), (_ = (_ - _) / (_ - _)))
          : ((_ = _.clone().add(_ + 1, `months`)), (_ = (_ - _) / (_ - _))),
        -(_ + _) || 0
      );
    }
    ((_.defaultFormat = `YYYY-MM-DDTHH:mm:ssZ`),
      (_.defaultFormatUtc = `YYYY-MM-DDTHH:mm:ss[Z]`));
    function _() {
      return this.clone()
        .locale(`en`)
        .format(`ddd MMM DD YYYY HH:mm:ss [GMT]ZZ`);
    }
    function _(_) {
      if (!this.isValid()) return null;
      var _ = _ !== !0,
        _ = _ ? this.clone().utc() : this;
      return _.year() < 0 || _.year() > 9999
        ? _(
            _,
            _
              ? `YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]`
              : `YYYYYY-MM-DD[T]HH:mm:ss.SSSZ`,
          )
        : _(Date.prototype.toISOString)
          ? _
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
                .toISOString()
                .replace(`Z`, _(_, `Z`))
          : _(
              _,
              _ ? `YYYY-MM-DD[T]HH:mm:ss.SSS[Z]` : `YYYY-MM-DD[T]HH:mm:ss.SSSZ`,
            );
    }
    function _() {
      if (!this.isValid()) return `moment.invalid(/* ` + this._ + ` */)`;
      var _ = `moment`,
        _ = ``,
        _,
        _,
        _,
        _;
      return (
        this.isLocal() ||
          ((_ = this.utcOffset() === 0 ? `moment.utc` : `moment.parseZone`),
          (_ = `Z`)),
        (_ = `[` + _ + `("]`),
        (_ = 0 <= this.year() && this.year() <= 9999 ? `YYYY` : `YYYYYY`),
        (_ = `-MM-DD[T]HH:mm:ss.SSS`),
        (_ = _ + `[")]`),
        this.format(_ + _ + _ + _)
      );
    }
    function _(_) {
      _ ||= this.isUtc() ? _.defaultFormatUtc : _.defaultFormat;
      var _ = _(this, _);
      return this.localeData().postformat(_);
    }
    function _(_, _) {
      return this.isValid() && ((_(_) && _.isValid()) || _(_).isValid())
        ? _({
            _: this,
            from: _,
          })
            .locale(this.locale())
            .humanize(!_)
        : this.localeData().invalidDate();
    }
    function _(_) {
      return this.from(_(), _);
    }
    function _(_, _) {
      return this.isValid() && ((_(_) && _.isValid()) || _(_).isValid())
        ? _({
            from: this,
            _: _,
          })
            .locale(this.locale())
            .humanize(!_)
        : this.localeData().invalidDate();
    }
    function _(_) {
      return this._(_(), _);
    }
    function _(_) {
      var _;
      return _ === void 0
        ? this._locale._abbr
        : ((_ = _(_)), _ != null && (this._locale = _), this);
    }
    var _ = _(
      `moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.`,
      function (_) {
        return _ === void 0 ? this.localeData() : this.locale(_);
      },
    );
    function _() {
      return this._locale;
    }
    var _ = 1e3,
      _ = 60 * _,
      _ = 60 * _,
      _ = 3506328 * _;
    function _(_, _) {
      return ((_ % _) + _) % _;
    }
    function _(_, _, _) {
      return _ < 100 && _ >= 0
        ? new Date(_ + 400, _, _) - _
        : new Date(_, _, _).valueOf();
    }
    function _(_, _, _) {
      return _ < 100 && _ >= 0
        ? Date.UTC(_ + 400, _, _) - _
        : Date.UTC(_, _, _);
    }
    function _(_) {
      var _, _;
      if (((_ = _(_)), _ === void 0 || _ === `millisecond` || !this.isValid()))
        return this;
      switch (((_ = this._isUTC ? _ : _), _)) {
        case `year`:
          _ = _(this.year(), 0, 1);
          break;
        case `quarter`:
          _ = _(this.year(), this.month() - (this.month() % 3), 1);
          break;
        case `month`:
          _ = _(this.year(), this.month(), 1);
          break;
        case `week`:
          _ = _(this.year(), this.month(), this.date() - this.weekday());
          break;
        case `isoWeek`:
          _ = _(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1),
          );
          break;
        case `day`:
        case `date`:
          _ = _(this.year(), this.month(), this.date());
          break;
        case `hour`:
          ((_ = this._.valueOf()),
            (_ -= _(_ + (this._isUTC ? 0 : this.utcOffset() * _), _)));
          break;
        case `minute`:
          ((_ = this._.valueOf()), (_ -= _(_, _)));
          break;
        case `second`:
          ((_ = this._.valueOf()), (_ -= _(_, _)));
      }
      return (this._.setTime(_), _.updateOffset(this, !0), this);
    }
    function _(_) {
      var _, _;
      if (((_ = _(_)), _ === void 0 || _ === `millisecond` || !this.isValid()))
        return this;
      switch (((_ = this._isUTC ? _ : _), _)) {
        case `year`:
          _ = _(this.year() + 1, 0, 1) - 1;
          break;
        case `quarter`:
          _ = _(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
          break;
        case `month`:
          _ = _(this.year(), this.month() + 1, 1) - 1;
          break;
        case `week`:
          _ =
            _(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;
        case `isoWeek`:
          _ =
            _(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7,
            ) - 1;
          break;
        case `day`:
        case `date`:
          _ = _(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case `hour`:
          ((_ = this._.valueOf()),
            (_ += _ - _(_ + (this._isUTC ? 0 : this.utcOffset() * _), _) - 1));
          break;
        case `minute`:
          ((_ = this._.valueOf()), (_ += _ - _(_, _) - 1));
          break;
        case `second`:
          ((_ = this._.valueOf()), (_ += _ - _(_, _) - 1));
      }
      return (this._.setTime(_), _.updateOffset(this, !0), this);
    }
    function _() {
      return this._.valueOf() - (this._offset || 0) * 6e4;
    }
    function _() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function _() {
      return new Date(this.valueOf());
    }
    function _() {
      var _ = this;
      return [
        _.year(),
        _.month(),
        _.date(),
        _.hour(),
        _.minute(),
        _.second(),
        _.millisecond(),
      ];
    }
    function _() {
      var _ = this;
      return {
        years: _.year(),
        months: _.month(),
        date: _.date(),
        hours: _.hours(),
        minutes: _.minutes(),
        seconds: _.seconds(),
        milliseconds: _.milliseconds(),
      };
    }
    function _() {
      return this.isValid() ? this.toISOString() : null;
    }
    function _() {
      return _(this);
    }
    function _() {
      return _({}, _(this));
    }
    function _() {
      return _(this).overflow;
    }
    function _() {
      return {
        input: this._,
        format: this._,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }
    (_(`N`, 0, 0, `eraAbbr`),
      _(`NN`, 0, 0, `eraAbbr`),
      _(`NNN`, 0, 0, `eraAbbr`),
      _(`NNNN`, 0, 0, `eraName`),
      _(`NNNNN`, 0, 0, `eraNarrow`),
      _(`y`, [`y`, 1], `yo`, `eraYear`),
      _(`y`, [`yy`, 2], 0, `eraYear`),
      _(`y`, [`yyy`, 3], 0, `eraYear`),
      _(`y`, [`yyyy`, 4], 0, `eraYear`),
      _(`N`, _),
      _(`NN`, _),
      _(`NNN`, _),
      _(`NNNN`, _),
      _(`NNNNN`, _),
      _([`N`, `NN`, `NNN`, `NNNN`, `NNNNN`], function (_, _, _, _) {
        var _ = _._locale.erasParse(_, _, _._strict);
        _ ? (_(_).era = _) : (_(_).invalidEra = _);
      }),
      _(`y`, _),
      _(`yy`, _),
      _(`yyy`, _),
      _(`yyyy`, _),
      _(`yo`, _),
      _([`y`, `yy`, `yyy`, `yyyy`], _),
      _([`yo`], function (_, _, _, _) {
        var _;
        (_._locale._eraYearOrdinalRegex &&
          (_ = _.match(_._locale._eraYearOrdinalRegex)),
          (_[_] = _._locale.eraYearOrdinalParse
            ? _._locale.eraYearOrdinalParse(_, _)
            : parseInt(_, 10)));
      }));
    function _(_, _) {
      var _,
        _,
        _,
        _ = this._eras || _(`en`)._eras;
      for (_ = 0, _ = _.length; _ < _; ++_)
        switch (
          (typeof _[_].since == `string` &&
            ((_ = _(_[_].since).startOf(`day`)), (_[_].since = _.valueOf())),
          typeof _[_].until)
        ) {
          case `undefined`:
            _[_].until = 1 / 0;
            break;
          case `string`:
            ((_ = _(_[_].until).startOf(`day`).valueOf()),
              (_[_].until = _.valueOf()));
        }
      return _;
    }
    function _(_, _, _) {
      var _,
        _,
        _ = this.eras(),
        _,
        _,
        _;
      for (_ = _.toUpperCase(), _ = 0, _ = _.length; _ < _; ++_)
        if (
          ((_ = _[_].name.toUpperCase()),
          (_ = _[_].abbr.toUpperCase()),
          (_ = _[_].narrow.toUpperCase()),
          _)
        )
          switch (_) {
            case `N`:
            case `NN`:
            case `NNN`:
              if (_ === _) return _[_];
              break;
            case `NNNN`:
              if (_ === _) return _[_];
              break;
            case `NNNNN`:
              if (_ === _) return _[_];
          }
        else if ([_, _, _].indexOf(_) >= 0) return _[_];
    }
    function _(_, _) {
      var _ = _.since <= _.until ? 1 : -1;
      return _ === void 0
        ? _(_.since).year()
        : _(_.since).year() + (_ - _.offset) * _;
    }
    function _() {
      var _,
        _,
        _,
        _ = this.localeData().eras();
      for (_ = 0, _ = _.length; _ < _; ++_)
        if (
          ((_ = this.clone().startOf(`day`).valueOf()),
          (_[_].since <= _ && _ <= _[_].until) ||
            (_[_].until <= _ && _ <= _[_].since))
        )
          return _[_].name;
      return ``;
    }
    function _() {
      var _,
        _,
        _,
        _ = this.localeData().eras();
      for (_ = 0, _ = _.length; _ < _; ++_)
        if (
          ((_ = this.clone().startOf(`day`).valueOf()),
          (_[_].since <= _ && _ <= _[_].until) ||
            (_[_].until <= _ && _ <= _[_].since))
        )
          return _[_].narrow;
      return ``;
    }
    function _() {
      var _,
        _,
        _,
        _ = this.localeData().eras();
      for (_ = 0, _ = _.length; _ < _; ++_)
        if (
          ((_ = this.clone().startOf(`day`).valueOf()),
          (_[_].since <= _ && _ <= _[_].until) ||
            (_[_].until <= _ && _ <= _[_].since))
        )
          return _[_].abbr;
      return ``;
    }
    function _() {
      var _,
        _,
        _,
        _,
        _ = this.localeData().eras();
      for (_ = 0, _ = _.length; _ < _; ++_)
        if (
          ((_ = _[_].since <= _[_].until ? 1 : -1),
          (_ = this.clone().startOf(`day`).valueOf()),
          (_[_].since <= _ && _ <= _[_].until) ||
            (_[_].until <= _ && _ <= _[_].since))
        )
          return (this.year() - _(_[_].since).year()) * _ + _[_].offset;
      return this.year();
    }
    function _(_) {
      return (
        _(this, `_erasNameRegex`) || _.call(this),
        _ ? this._erasNameRegex : this._erasRegex
      );
    }
    function _(_) {
      return (
        _(this, `_erasAbbrRegex`) || _.call(this),
        _ ? this._erasAbbrRegex : this._erasRegex
      );
    }
    function _(_) {
      return (
        _(this, `_erasNarrowRegex`) || _.call(this),
        _ ? this._erasNarrowRegex : this._erasRegex
      );
    }
    function _(_, _) {
      return _.erasAbbrRegex(_);
    }
    function _(_, _) {
      return _.erasNameRegex(_);
    }
    function _(_, _) {
      return _.erasNarrowRegex(_);
    }
    function _(_, _) {
      return _._eraYearOrdinalRegex || _;
    }
    function _() {
      var _ = [],
        _ = [],
        _ = [],
        _ = [],
        _,
        _,
        _,
        _,
        _,
        _ = this.eras();
      for (_ = 0, _ = _.length; _ < _; ++_)
        ((_ = _(_[_].name)),
          (_ = _(_[_].abbr)),
          (_ = _(_[_].narrow)),
          _.push(_),
          _.push(_),
          _.push(_),
          _.push(_),
          _.push(_),
          _.push(_));
      ((this._erasRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)),
        (this._erasNameRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)),
        (this._erasAbbrRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)),
        (this._erasNarrowRegex = RegExp(`^(` + _.join(`|`) + `)`, `i`)));
    }
    (_(0, [`gg`, 2], 0, function () {
      return this.weekYear() % 100;
    }),
      _(0, [`GG`, 2], 0, function () {
        return this.isoWeekYear() % 100;
      }));
    function _(_, _) {
      _(0, [_, _.length], 0, _);
    }
    (_(`gggg`, `weekYear`),
      _(`ggggg`, `weekYear`),
      _(`GGGG`, `isoWeekYear`),
      _(`GGGGG`, `isoWeekYear`),
      _(`G`, _),
      _(`g`, _),
      _(`GG`, _, _),
      _(`gg`, _, _),
      _(`GGGG`, _, _),
      _(`gggg`, _, _),
      _(`GGGGG`, _, _),
      _(`ggggg`, _, _),
      _([`gggg`, `ggggg`, `GGGG`, `GGGGG`], function (_, _, _, _) {
        _[_.substr(0, 2)] = _(_);
      }),
      _([`gg`, `GG`], function (_, _, _, _) {
        _[_] = _.parseTwoDigitYear(_);
      }));
    function _(_) {
      return _.call(
        this,
        _,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy,
      );
    }
    function _(_) {
      return _.call(this, _, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function _() {
      return _(this.year(), 1, 4);
    }
    function _() {
      return _(this.isoWeekYear(), 1, 4);
    }
    function _() {
      var _ = this.localeData()._week;
      return _(this.year(), _.dow, _.doy);
    }
    function _() {
      var _ = this.localeData()._week;
      return _(this.weekYear(), _.dow, _.doy);
    }
    function _(_, _, _, _, _) {
      var _;
      return _ == null
        ? _(this, _, _).year
        : ((_ = _(_, _, _)), _ > _ && (_ = _), _.call(this, _, _, _, _, _));
    }
    function _(_, _, _, _, _) {
      var _ = _(_, _, _, _, _),
        _ = _(_.year, 0, _.dayOfYear);
      return (
        this.year(_.getUTCFullYear()),
        this.month(_.getUTCMonth()),
        this.date(_.getUTCDate()),
        this
      );
    }
    (_(`Q`, 0, `Qo`, `quarter`),
      _(`Q`, _),
      _(`Q`, function (_, _) {
        _[_] = (_(_) - 1) * 3;
      }));
    function _(_) {
      return _ == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((_ - 1) * 3 + (this.month() % 3));
    }
    (_(`D`, [`DD`, 2], `Do`, `date`),
      _(`D`, _, _),
      _(`DD`, _, _),
      _(`Do`, function (_, _) {
        return _
          ? _._dayOfMonthOrdinalParse || _._ordinalParse
          : _._dayOfMonthOrdinalParseLenient;
      }),
      _([`D`, `DD`], _),
      _(`Do`, function (_, _) {
        _[_] = _(_.match(_)[0]);
      }));
    var _ = _(`Date`, !0);
    (_(`DDD`, [`DDDD`, 3], `DDDo`, `dayOfYear`),
      _(`DDD`, _),
      _(`DDDD`, _),
      _([`DDD`, `DDDD`], function (_, _, _) {
        _._dayOfYear = _(_);
      }));
    function _(_) {
      var _ =
        Math.round(
          (this.clone().startOf(`day`) - this.clone().startOf(`year`)) / 864e5,
        ) + 1;
      return _ == null ? _ : this.add(_ - _, `d`);
    }
    (_(`m`, [`mm`, 2], 0, `minute`),
      _(`m`, _, _),
      _(`mm`, _, _),
      _([`m`, `mm`], _));
    var _ = _(`Minutes`, !1);
    (_(`s`, [`ss`, 2], 0, `second`),
      _(`s`, _, _),
      _(`ss`, _, _),
      _([`s`, `ss`], _));
    var _ = _(`Seconds`, !1);
    (_(`S`, 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      _(0, [`SS`, 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      _(0, [`SSS`, 3], 0, `millisecond`),
      _(0, [`SSSS`, 4], 0, function () {
        return this.millisecond() * 10;
      }),
      _(0, [`SSSSS`, 5], 0, function () {
        return this.millisecond() * 100;
      }),
      _(0, [`SSSSSS`, 6], 0, function () {
        return this.millisecond() * 1e3;
      }),
      _(0, [`SSSSSSS`, 7], 0, function () {
        return this.millisecond() * 1e4;
      }),
      _(0, [`SSSSSSSS`, 8], 0, function () {
        return this.millisecond() * 1e5;
      }),
      _(0, [`SSSSSSSSS`, 9], 0, function () {
        return this.millisecond() * 1e6;
      }),
      _(`S`, _, _),
      _(`SS`, _, _),
      _(`SSS`, _, _));
    for (var _ = `SSSS`, _; _.length <= 9; _ += `S`) _(_, _);
    function _(_, _) {
      _[_] = _((`0.` + _) * 1e3);
    }
    for (_ = `S`; _.length <= 9; _ += `S`) _(_, _);
    ((_ = _(`Milliseconds`, !1)),
      _(`z`, 0, 0, `zoneAbbr`),
      _(`zz`, 0, 0, `zoneName`));
    function _() {
      return this._isUTC ? `UTC` : ``;
    }
    function _() {
      return this._isUTC ? `Coordinated Universal Time` : ``;
    }
    var _ = _.prototype;
    ((_.add = _),
      (_.calendar = _),
      (_.clone = _),
      (_.diff = _),
      (_.endOf = _),
      (_.format = _),
      (_.from = _),
      (_.fromNow = _),
      (_._ = _),
      (_.toNow = _),
      (_.get = _),
      (_.invalidAt = _),
      (_.isAfter = _),
      (_.isBefore = _),
      (_.isBetween = _),
      (_.isSame = _),
      (_.isSameOrAfter = _),
      (_.isSameOrBefore = _),
      (_.isValid = _),
      (_.lang = _),
      (_.locale = _),
      (_.localeData = _),
      (_.max = _),
      (_.min = _),
      (_.parsingFlags = _),
      (_.set = _),
      (_.startOf = _),
      (_.subtract = _),
      (_.toArray = _),
      (_.toObject = _),
      (_.toDate = _),
      (_.toISOString = _),
      (_.inspect = _),
      typeof Symbol < `u` &&
        Symbol.for != null &&
        (_[Symbol.for(`nodejs.util.inspect.custom`)] = function () {
          return `Moment<` + this.format() + `>`;
        }),
      (_.toJSON = _),
      (_.toString = _),
      (_.unix = _),
      (_.valueOf = _),
      (_.creationData = _),
      (_.eraName = _),
      (_.eraNarrow = _),
      (_.eraAbbr = _),
      (_.eraYear = _),
      (_.year = _),
      (_.isLeapYear = _),
      (_.weekYear = _),
      (_.isoWeekYear = _),
      (_.quarter = _.quarters = _),
      (_.month = _),
      (_.daysInMonth = _),
      (_.week = _.weeks = _),
      (_.isoWeek = _.isoWeeks = _),
      (_.weeksInYear = _),
      (_.weeksInWeekYear = _),
      (_.isoWeeksInYear = _),
      (_.isoWeeksInISOWeekYear = _),
      (_.date = _),
      (_.day = _.days = _),
      (_.weekday = _),
      (_.isoWeekday = _),
      (_.dayOfYear = _),
      (_.hour = _.hours = _),
      (_.minute = _.minutes = _),
      (_.second = _.seconds = _),
      (_.millisecond = _.milliseconds = _),
      (_.utcOffset = _),
      (_.utc = _),
      (_.local = _),
      (_.parseZone = _),
      (_.hasAlignedHourOffset = _),
      (_.isDST = _),
      (_.isLocal = _),
      (_.isUtcOffset = _),
      (_.isUtc = _),
      (_.isUTC = _),
      (_.zoneAbbr = _),
      (_.zoneName = _),
      (_.dates = _(`dates accessor is deprecated. Use date instead.`, _)),
      (_.months = _(`months accessor is deprecated. Use month instead`, _)),
      (_.years = _(`years accessor is deprecated. Use year instead`, _)),
      (_.zone = _(
        `moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/`,
        _,
      )),
      (_.isDSTShifted = _(
        `isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information`,
        _,
      )));
    function _(_) {
      return _(_ * 1e3);
    }
    function _() {
      return _.apply(null, arguments).parseZone();
    }
    function _(_) {
      return _;
    }
    var _ = _.prototype;
    ((_.calendar = _),
      (_.longDateFormat = _),
      (_.invalidDate = _),
      (_.ordinal = _),
      (_.preparse = _),
      (_.postformat = _),
      (_.relativeTime = _),
      (_.pastFuture = _),
      (_.set = _),
      (_.eras = _),
      (_.erasParse = _),
      (_.erasConvertYear = _),
      (_.erasAbbrRegex = _),
      (_.erasNameRegex = _),
      (_.erasNarrowRegex = _),
      (_.months = _),
      (_.monthsShort = _),
      (_.monthsParse = _),
      (_.monthsRegex = _),
      (_.monthsShortRegex = _),
      (_.week = _),
      (_.firstDayOfYear = _),
      (_.firstDayOfWeek = _),
      (_.weekdays = _),
      (_.weekdaysMin = _),
      (_.weekdaysShort = _),
      (_.weekdaysParse = _),
      (_.weekdaysRegex = _),
      (_.weekdaysShortRegex = _),
      (_.weekdaysMinRegex = _),
      (_.isPM = _),
      (_.meridiem = _));
    function _(_, _, _, _) {
      var _ = _(),
        _ = _().set(_, _);
      return _[_](_, _);
    }
    function _(_, _, _) {
      if ((_(_) && ((_ = _), (_ = void 0)), (_ ||= ``), _ != null))
        return _(_, _, _, `month`);
      var _,
        _ = [];
      for (_ = 0; _ < 12; _++) _[_] = _(_, _, _, `month`);
      return _;
    }
    function _(_, _, _, _) {
      typeof _ == `boolean`
        ? (_(_) && ((_ = _), (_ = void 0)), (_ ||= ``))
        : ((_ = _),
          (_ = _),
          (_ = !1),
          _(_) && ((_ = _), (_ = void 0)),
          (_ ||= ``));
      var _ = _(),
        _ = _ ? _._week.dow : 0,
        _,
        _ = [];
      if (_ != null) return _(_, (_ + _) % 7, _, `day`);
      for (_ = 0; _ < 7; _++) _[_] = _(_, (_ + _) % 7, _, `day`);
      return _;
    }
    function _(_, _) {
      return _(_, _, `months`);
    }
    function _(_, _) {
      return _(_, _, `monthsShort`);
    }
    function _(_, _, _) {
      return _(_, _, _, `weekdays`);
    }
    function _(_, _, _) {
      return _(_, _, _, `weekdaysShort`);
    }
    function _(_, _, _) {
      return _(_, _, _, `weekdaysMin`);
    }
    (_(`en`, {
      eras: [
        {
          since: `0001-01-01`,
          until: 1 / 0,
          offset: 1,
          name: `Anno Domini`,
          narrow: `AD`,
          abbr: `AD`,
        },
        {
          since: `0000-12-31`,
          until: -1 / 0,
          offset: 1,
          name: `Before Christ`,
          narrow: `BC`,
          abbr: `BC`,
        },
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (_) {
        var _ = _ % 10;
        return (
          _ +
          (_((_ % 100) / 10) === 1
            ? `th`
            : _ === 1
              ? `st`
              : _ === 2
                ? `nd`
                : _ === 3
                  ? `rd`
                  : `th`)
        );
      },
    }),
      (_.lang = _(`moment.lang is deprecated. Use moment.locale instead.`, _)),
      (_.langData = _(
        `moment.langData is deprecated. Use moment.localeData instead.`,
        _,
      )));
    var _ = Math.abs;
    function _() {
      var _ = this._data;
      return (
        (this._milliseconds = _(this._milliseconds)),
        (this._days = _(this._days)),
        (this._months = _(this._months)),
        (_.milliseconds = _(_.milliseconds)),
        (_.seconds = _(_.seconds)),
        (_.minutes = _(_.minutes)),
        (_.hours = _(_.hours)),
        (_.months = _(_.months)),
        (_.years = _(_.years)),
        this
      );
    }
    function _(_, _, _, _) {
      var _ = _(_, _);
      return (
        (_._milliseconds += _ * _._milliseconds),
        (_._days += _ * _._days),
        (_._months += _ * _._months),
        _._bubble()
      );
    }
    function _(_, _) {
      return _(this, _, _, 1);
    }
    function _(_, _) {
      return _(this, _, _, -1);
    }
    function _(_) {
      return _ < 0 ? Math.floor(_) : Math.ceil(_);
    }
    function _() {
      var _ = this._milliseconds,
        _ = this._days,
        _ = this._months,
        _ = this._data,
        _,
        _,
        _,
        _,
        _;
      return (
        (_ >= 0 && _ >= 0 && _ >= 0) ||
          (_ <= 0 && _ <= 0 && _ <= 0) ||
          ((_ += _(_(_) + _) * 864e5), (_ = 0), (_ = 0)),
        (_.milliseconds = _ % 1e3),
        (_ = _(_ / 1e3)),
        (_.seconds = _ % 60),
        (_ = _(_ / 60)),
        (_.minutes = _ % 60),
        (_ = _(_ / 60)),
        (_.hours = _ % 24),
        (_ += _(_ / 24)),
        (_ = _(_(_))),
        (_ += _),
        (_ -= _(_(_))),
        (_ = _(_ / 12)),
        (_ %= 12),
        (_.days = _),
        (_.months = _),
        (_.years = _),
        this
      );
    }
    function _(_) {
      return (_ * 4800) / 146097;
    }
    function _(_) {
      return (_ * 146097) / 4800;
    }
    function _(_) {
      if (!this.isValid()) return NaN;
      var _,
        _,
        _ = this._milliseconds;
      if (((_ = _(_)), _ === `month` || _ === `quarter` || _ === `year`))
        switch (((_ = this._days + _ / 864e5), (_ = this._months + _(_)), _)) {
          case `month`:
            return _;
          case `quarter`:
            return _ / 3;
          case `year`:
            return _ / 12;
        }
      else
        switch (((_ = this._days + Math.round(_(this._months))), _)) {
          case `week`:
            return _ / 7 + _ / 6048e5;
          case `day`:
            return _ + _ / 864e5;
          case `hour`:
            return _ * 24 + _ / 36e5;
          case `minute`:
            return _ * 1440 + _ / 6e4;
          case `second`:
            return _ * 86400 + _ / 1e3;
          case `millisecond`:
            return Math.floor(_ * 864e5) + _;
          default:
            throw Error(`Unknown unit ` + _);
        }
    }
    function _(_) {
      return function () {
        return this._(_);
      };
    }
    var _ = _(`ms`),
      _ = _(`s`),
      _ = _(`m`),
      _ = _(`h`),
      _ = _(`d`),
      _ = _(`w`),
      _ = _(`M`),
      _ = _(`Q`),
      _ = _(`y`),
      _ = _;
    function _() {
      return _(this);
    }
    function _(_) {
      return ((_ = _(_)), this.isValid() ? this[_ + `s`]() : NaN);
    }
    function _(_) {
      return function () {
        return this.isValid() ? this._data[_] : NaN;
      };
    }
    var _ = _(`milliseconds`),
      _ = _(`seconds`),
      _ = _(`minutes`),
      _ = _(`hours`),
      _ = _(`days`),
      _ = _(`months`),
      _ = _(`years`);
    function _() {
      return _(this.days() / 7);
    }
    var _ = Math.round,
      _ = {
        _: 44,
        _: 45,
        _: 45,
        _: 22,
        _: 26,
        _: null,
        _: 11,
      };
    function _(_, _, _, _, _) {
      return _.call(_, _ || 1, !!_, _, _);
    }
    function _(_, _, _, _) {
      var _ = _(_).abs(),
        _ = _(_._(`s`)),
        _ = _(_._(`m`)),
        _ = _(_._(`h`)),
        _ = _(_._(`d`)),
        _ = _(_._(`M`)),
        _ = _(_._(`w`)),
        _ = _(_._(`y`)),
        _ =
          (_ <= _._ && [`s`, _]) ||
          (_ < _._ && [`ss`, _]) ||
          (_ <= 1 && [`m`]) ||
          (_ < _._ && [`mm`, _]) ||
          (_ <= 1 && [`h`]) ||
          (_ < _._ && [`hh`, _]) ||
          (_ <= 1 && [`d`]) ||
          (_ < _._ && [`dd`, _]);
      return (
        _._ != null && (_ = _ || (_ <= 1 && [`w`]) || (_ < _._ && [`ww`, _])),
        (_ = _ ||
          (_ <= 1 && [`M`]) ||
          (_ < _._ && [`MM`, _]) ||
          (_ <= 1 && [`y`]) || [`yy`, _]),
        (_[2] = _),
        (_[3] = +_ > 0),
        (_[4] = _),
        _.apply(null, _)
      );
    }
    function _(_) {
      return _ === void 0 ? _ : typeof _ == `function` && ((_ = _), !0);
    }
    function _(_, _) {
      return _[_] === void 0
        ? !1
        : _ === void 0
          ? _[_]
          : ((_[_] = _), _ === `s` && (_._ = _ - 1), !0);
    }
    function _(_, _) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var _ = !1,
        _ = _,
        _,
        _;
      return (
        typeof _ == `object` && ((_ = _), (_ = !1)),
        typeof _ == `boolean` && (_ = _),
        typeof _ == `object` &&
          ((_ = _(_({}, _), _ || {})),
          _._ != null && _._ == null && (_._ = _._ - 1)),
        (_ = this.localeData()),
        (_ = _(this, !_, _, _)),
        _ && (_ = _.call(_, +this, _)),
        _.postformat(_)
      );
    }
    var _ = Math.abs;
    function _(_) {
      return (_ > 0) - (_ < 0) || +_;
    }
    function _() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var _ = _(this._milliseconds) / 1e3,
        _ = _(this._days),
        _ = _(this._months),
        _,
        _,
        _,
        _,
        _ = this.asSeconds(),
        _,
        _,
        _,
        _;
      return _
        ? ((_ = _(_ / 60)),
          (_ = _(_ / 60)),
          (_ %= 60),
          (_ %= 60),
          (_ = _(_ / 12)),
          (_ %= 12),
          (_ = _ ? _.toFixed(3).replace(/\.?0+$/, ``) : ``),
          (_ = _ < 0 ? `-` : ``),
          (_ = _(this._months) === _(_) ? `` : `-`),
          (_ = _(this._days) === _(_) ? `` : `-`),
          (_ = _(this._milliseconds) === _(_) ? `` : `-`),
          _ +
            `P` +
            (_ ? _ + _ + `Y` : ``) +
            (_ ? _ + _ + `M` : ``) +
            (_ ? _ + _ + `D` : ``) +
            (_ || _ || _ ? `T` : ``) +
            (_ ? _ + _ + `H` : ``) +
            (_ ? _ + _ + `M` : ``) +
            (_ ? _ + _ + `S` : ``))
        : `P0D`;
    }
    var _ = _.prototype;
    return (
      (_.isValid = _),
      (_.abs = _),
      (_.add = _),
      (_.subtract = _),
      (_._ = _),
      (_.asMilliseconds = _),
      (_.asSeconds = _),
      (_.asMinutes = _),
      (_.asHours = _),
      (_.asDays = _),
      (_.asWeeks = _),
      (_.asMonths = _),
      (_.asQuarters = _),
      (_.asYears = _),
      (_.valueOf = _),
      (_._bubble = _),
      (_.clone = _),
      (_.get = _),
      (_.milliseconds = _),
      (_.seconds = _),
      (_.minutes = _),
      (_.hours = _),
      (_.days = _),
      (_.weeks = _),
      (_.months = _),
      (_.years = _),
      (_.humanize = _),
      (_.toISOString = _),
      (_.toString = _),
      (_.toJSON = _),
      (_.locale = _),
      (_.localeData = _),
      (_.toIsoString = _(
        `toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)`,
        _,
      )),
      (_.lang = _),
      _(`X`, 0, 0, `unix`),
      _(`x`, 0, 0, `valueOf`),
      _(`x`, _),
      _(`X`, _),
      _(`X`, function (_, _, _) {
        _._ = new Date(parseFloat(_) * 1e3);
      }),
      _(`x`, function (_, _, _) {
        _._ = new Date(_(_));
      }),
      (_.version = `2.31.0`),
      _(_),
      (_._ = _),
      (_.min = _),
      (_.max = _),
      (_.now = _),
      (_.utc = _),
      (_.unix = _),
      (_.months = _),
      (_.isDate = _),
      (_.locale = _),
      (_.invalid = _),
      (_.duration = _),
      (_.isMoment = _),
      (_.weekdays = _),
      (_.parseZone = _),
      (_.localeData = _),
      (_.isDuration = _),
      (_.monthsShort = _),
      (_.weekdaysMin = _),
      (_.defineLocale = _),
      (_.updateLocale = _),
      (_.locales = _),
      (_.weekdaysShort = _),
      (_.normalizeUnits = _),
      (_.relativeTimeRounding = _),
      (_.relativeTimeThreshold = _),
      (_.calendarFormat = _),
      (_.prototype = _),
      (_.HTML5_FMT = {
        DATETIME_LOCAL: `YYYY-MM-DDTHH:mm`,
        DATETIME_LOCAL_SECONDS: `YYYY-MM-DDTHH:mm:ss`,
        DATETIME_LOCAL_MS: `YYYY-MM-DDTHH:mm:ss.SSS`,
        DATE: `YYYY-MM-DD`,
        TIME: `HH:mm`,
        TIME_SECONDS: `HH:mm:ss`,
        TIME_MS: `HH:mm:ss.SSS`,
        WEEK: `GGGG-[W]WW`,
        MONTH: `YYYY-MM`,
      }),
      _
    );
  });
});
_();
var _ = new (class {
  bIncludeFeaturedAsGameSource = !0;
  get nOverrideDateNow() {
    return _();
  }
  set nOverrideDateNow(_) {
    _(_);
  }
  get bRequireAllEventsLoadedInTimeBlock() {
    return !1;
  }
  get bIncludeCurators() {
    return !0;
  }
  GetTimeNowWithOverride() {
    return _();
  }
  GetTimeNowWithOverrideAsDate() {
    return _();
  }
  BHasTimeOverride() {
    return !!_();
  }
  ParseDevOverrides(_) {
    _ &&
      _.length != 0 &&
      new URLSearchParams(_[0] == `?` ? _.substring(1) : _).has(`t`);
  }
})();
(_(`g_EventCalendarDevFeatures`, _), Math.floor(new Date().getTime() / 1e3));
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapBroadcasterSteamIDToEvents = new Map();
  m_mapBroadcasterSteamIDData = new Map();
  static GetBBCodeParam(_, _, _ = ``) {
    let _ = RegExp(`\\W${_}\\W*=\\W*\\"(.*?)\\"`, `gmi`).exec(_);
    return _ ? _[1] : _;
  }
  static ParseCalendarEventPresentersFromText(_) {
    let _ = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
      _ = [];
    for (;;) {
      let _ = _.exec(_);
      if (_ === null) break;
      let _ = _[1],
        _ = _[2],
        _ = _.GetBBCodeParam(_, `steamid`),
        _ = {
          steamID: _ ? new _(_) : void 0,
          name: _.GetBBCodeParam(_, `name`),
          title: _.GetBBCodeParam(_, `title`),
          company: _.GetBBCodeParam(_, `company`),
          photo: _.GetBBCodeParam(_, `photo`),
          bio: _,
        };
      _.push(_);
    }
    return _;
  }
  static ParseEventModelPresenters(_, _) {
    let _ = _.GetDescriptionWithFallback(_) ?? ``;
    return _.ParseCalendarEventPresentersFromText(_);
  }
  static ParseEventAppReferencesFromText(_) {
    let _ = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
      _ = new Set();
    for (;;) {
      let _ = _.exec(_);
      if (_ === null) break;
      let _ = _[1];
      _.add(Number(_));
    }
    return _;
  }
  static ParseEventModelAppReferences(_, _) {
    let _ = _.GetDescriptionWithFallback(_) ?? ``,
      _ = _.ParseEventAppReferencesFromText(_);
    if (_.jsondata?.referenced_appids)
      for (let _ of _.jsondata.referenced_appids) _.add(_);
    return _;
  }
  async BuildBroadcasterSteamIDToActiveEventMap(_) {
    let _ = _.GetTimeNowWithOverride(),
      _ = _.GetCalendarItemsInTimeRange(_ - 3600, _);
    for (let _ of _.rgCalendarItems)
      _.QueueLoadPartnerEvent(_.clanid, _.unique_id);
    let _ = _.rgCalendarItems.map((_) =>
        _.LoadPartnerEventFromClanEventGIDAndClanSteamID(
          _.InitFromClanID(_.clanid, _.EUNIVERSE),
          _.unique_id,
          0,
        ),
      ),
      _ = await Promise.all(_),
      _ = new Map();
    for (let _ of _)
      if (_ && !(_.endTime && _.endTime < _))
        for (let _ of _.GetBroadcastWhitelistAsSteamIDs()) {
          let _ = _.get(_);
          _ ? _.push(_) : _.set(_, [_]);
        }
    return _;
  }
  IsBroadcasterAlreadyBound(_, _) {
    let _ = this.m_mapBroadcasterSteamIDToEvents.get(_) ?? [],
      _ = _.length;
    if ((_ ? _.length : 0) != _) return !1;
    for (let _ = 0; _ < _; _++) if (_[_] != _[_].GID) return !1;
    return !0;
  }
  static BuildSteamIDToPresenterMapFromEventList(_, _) {
    let _ = new Map();
    for (let _ of _) {
      if (!_) continue;
      let _ = _.ParseEventModelPresenters(_, _);
      for (let _ of _) _.steamID && _.set(_.steamID.ConvertTo64BitString(), _);
    }
    return _;
  }
  RemoveCachedDataIfNotInMap(_) {
    let _ = [];
    (this.m_mapBroadcasterSteamIDToEvents.forEach((_, _) => {
      _.has(_) || _.push(_);
    }),
      _.forEach((_) => {
        (this.m_mapBroadcasterSteamIDData.delete(_),
          this.m_mapBroadcasterSteamIDToEvents.delete(_));
      }));
  }
  static BuildAppIDRefsForEventList(_, _) {
    let _ = new Set();
    for (let _ of _)
      _.ParseEventModelAppReferences(_, _).forEach((_) => _.add(_));
    return Array.from(_);
  }
  UpdateCachedDataFromEvents(_, _) {
    _.forEach((_, _) => {
      if (this.IsBroadcasterAlreadyBound(_, _)) return;
      let _ = {
        m_mapPresenters: _.BuildSteamIDToPresenterMapFromEventList(_, _),
        m_rgAppIDs: _.BuildAppIDRefsForEventList(_, _),
      };
      (this.m_mapBroadcasterSteamIDData.set(_, _),
        this.m_mapBroadcasterSteamIDToEvents.set(
          _,
          _.map((_) => _.GID ?? ``),
        ));
    });
  }
  async SynchronizeEventsWithBroadcasts(_, _) {
    let _ = await this.BuildBroadcasterSteamIDToActiveEventMap(_);
    (this.RemoveCachedDataIfNotInMap(_), this.UpdateCachedDataFromEvents(_, _));
  }
  GetPresenterMapForBroadcasterSteamID(_) {
    return this.m_mapBroadcasterSteamIDData.get(_)?.m_mapPresenters;
  }
  GetAppIDListForBroadcasterSteamID(_) {
    return this.m_mapBroadcasterSteamIDData.get(_)?.m_rgAppIDs;
  }
};
_([_], _.prototype, `m_mapBroadcasterSteamIDData`, void 0);
var _ = new _(),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.account_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            account_name: {
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
      return `CAuthentication_GetPasswordRSAPublicKey_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.publickey_mod || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            publickey_mod: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            publickey_exp: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            timestamp: {
              _: 3,
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
      return `CAuthentication_GetPasswordRSAPublicKey_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.device_friendly_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            device_friendly_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            platform_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            os_type: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            gaming_device_type: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            client_count: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            machine_id: {
              _: 6,
              _: _.readBytes,
              _: _.writeBytes,
            },
            app_type: {
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
      return `CAuthentication_DeviceDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.confirmation_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            confirmation_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_message: {
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
      return `CAuthentication_AllowedConfirmation`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.device_friendly_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            device_friendly_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            platform_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            device_details: {
              _: 3,
              _: _,
            },
            website_id: {
              _: 4,
              _: `Unknown`,
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
      return `CAuthentication_BeginAuthSessionViaQR_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            challenge_url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            request_id: {
              _: 3,
              _: _.readBytes,
              _: _.writeBytes,
            },
            interval: {
              _: 4,
              _: _.readFloat,
              _: _.writeFloat,
            },
            allowed_confirmations: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            version: {
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
      return `CAuthentication_BeginAuthSessionViaQR_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.device_friendly_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            device_friendly_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            account_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            encrypted_password: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            encryption_timestamp: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            remember_login: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            platform_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            persistence: {
              _: 7,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            website_id: {
              _: 8,
              _: `Unknown`,
              _: _.readString,
              _: _.writeString,
            },
            device_details: {
              _: 9,
              _: _,
            },
            guard_data: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            qos_level: {
              _: 12,
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
      return `CAuthentication_BeginAuthSessionViaCredentials_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            request_id: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
            interval: {
              _: 3,
              _: _.readFloat,
              _: _.writeFloat,
            },
            allowed_confirmations: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            steamid: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            weak_token: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            agreement_session_url: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            extended_error_message: {
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
      return `CAuthentication_BeginAuthSessionViaCredentials_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            request_id: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
            token_to_revoke: {
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
      return `CAuthentication_PollAuthSessionStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.new_client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            new_client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            new_challenge_url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            refresh_token: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            access_token: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            had_remote_interaction: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            account_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            new_guard_data: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            agreement_session_url: {
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
      return `CAuthentication_PollAuthSessionStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
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
      return `CAuthentication_GetAuthSessionInfo_Request`;
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
              _: _.readString,
              _: _.writeString,
            },
            geoloc: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            city: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            state: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            country: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            platform_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            device_friendly_name: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            version: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            login_history: {
              _: 9,
              _: _.readEnum,
              _: _.writeEnum,
            },
            requestor_location_mismatch: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            high_usage_login: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            requested_persistence: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            device_trust: {
              _: 13,
              _: _.readInt32,
              _: _.writeInt32,
            },
            app_type: {
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
      return `CAuthentication_GetAuthSessionInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CAuthentication_GetAuthSessionRiskInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.location_confirmer || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            location_confirmer: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            location_requestor: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            location_other: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            platform_type: {
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
      return `CAuthentication_GetAuthSessionRiskInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            results: {
              _: 2,
              _: _,
            },
            selected_action: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            did_confirm_login: {
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
      return `CAuthentication_NotifyRiskQuizResults_Notification`;
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
              _: _.readBool,
              _: _.writeBool,
            },
            location: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            action: {
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
      return `CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults`;
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
      return `CAuthentication_GetAuthSessionsForAccount_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_ids: {
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
      return `CAuthentication_GetAuthSessionsForAccount_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.version || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            version: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            signature: {
              _: 4,
              _: _.readBytes,
              _: _.writeBytes,
            },
            confirm: {
              _: 5,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            persistence: {
              _: 6,
              _: 1,
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
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request`;
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
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            code_type: {
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
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.agreement_session_url || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            agreement_session_url: {
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
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.refresh_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            refresh_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            renewal_type: {
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
      return `CAuthentication_AccessToken_GenerateForApp_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.access_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            access_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            refresh_token: {
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
      return `CAuthentication_AccessToken_GenerateForApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_revoked || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_revoked: {
              _: 1,
              _: !1,
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
      return `CAuthentication_RefreshToken_Enumerate_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.refresh_tokens || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            refresh_tokens: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            requesting_token: {
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
      return `CAuthentication_RefreshToken_Enumerate_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            _: {
              _: 2,
              _: _,
            },
            locale: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            country: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            state: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            city: {
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
      return `CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            token_description: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            time_updated: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            platform_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            logged_in: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            os_platform: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            auth_type: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gaming_device_type: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            first_seen: {
              _: 9,
              _: _,
            },
            last_seen: {
              _: 10,
              _: _,
            },
            os_type: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            authentication_type: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            effective_token_state: {
              _: 13,
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
      return `CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
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
            revoke_action: {
              _: 2,
              _: 1,
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
      return `CAuthentication_Token_Revoke_Request`;
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
      return `CAuthentication_Token_Revoke_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            revoke_action: {
              _: 3,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            signature: {
              _: 4,
              _: _.readBytes,
              _: _.writeBytes,
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
      return `CAuthentication_RefreshToken_Revoke_Request`;
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
      return `CAuthentication_RefreshToken_Revoke_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            token_description: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            time_updated: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            platform_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            token_state: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            owner_steamid: {
              _: 6,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            os_platform: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            os_type: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            auth_type: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gaming_device_type: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            first_seen: {
              _: 11,
              _: _,
            },
            last_seen: {
              _: 12,
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
      return `CSupportRefreshTokenDescription`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            _: {
              _: 2,
              _: _,
            },
            country: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            state: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            city: {
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
      return `CSupportRefreshTokenDescription_TokenUsageEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.action || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            action: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            _: {
              _: 3,
              _: _,
            },
            actor: {
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
      return `CSupportRefreshTokenAudit`;
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
            include_revoked_tokens: {
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
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.refresh_tokens || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            refresh_tokens: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            last_token_reset: {
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
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
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
      return `CAuthenticationSupport_QueryRefreshTokenByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.refresh_tokens || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            refresh_tokens: {
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
      return `CAuthenticationSupport_QueryRefreshTokenByID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
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
      return `CAuthenticationSupport_RevokeToken_Request`;
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
      return `CAuthenticationSupport_RevokeToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
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
      return `CAuthenticationSupport_GetTokenHistory_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.history || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            history: {
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
      return `CAuthenticationSupport_GetTokenHistory_Response`;
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
            token_id: {
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
      return `CAuthenticationSupport_MarkTokenCompromised_Request`;
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
      return `CAuthenticationSupport_MarkTokenCompromised_Response`;
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
            minutes_remaining: {
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
      return `CCloudGaming_TimeRemaining`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.platform || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
              _: _.readString,
              _: _.writeString,
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
      return `CCloudGaming_GetTimeRemaining_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.entries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entries: {
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
      return `CCloudGaming_GetTimeRemaining_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.GetPasswordRSAPublicKey#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetPasswordRSAPublicKey = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.BeginAuthSessionViaQR#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.BeginAuthSessionViaQR = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.BeginAuthSessionViaCredentials#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.BeginAuthSessionViaCredentials = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.PollAuthSessionStatus#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.PollAuthSessionStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.GetAuthSessionInfo#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAuthSessionInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.GetAuthSessionRiskInfo#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAuthSessionRiskInfo = _;
  function _(_, _) {
    return _.SendNotification(
      `Authentication.NotifyRiskQuizResults#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.NotifyRiskQuizResults = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.UpdateAuthSessionWithMobileConfirmation#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.UpdateAuthSessionWithMobileConfirmation = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.UpdateAuthSessionWithSteamGuardCode#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.UpdateAuthSessionWithSteamGuardCode = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.GenerateAccessTokenForApp#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GenerateAccessTokenForApp = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.EnumerateTokens#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.EnumerateTokens = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.GetAuthSessionsForAccount#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetAuthSessionsForAccount = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.RevokeToken#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.RevokeToken = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.RevokeRefreshToken#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.RevokeRefreshToken = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `AuthenticationSupport.QueryRefreshTokensByAccount#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.QueryRefreshTokensByAccount = _;
  function _(_, _, _) {
    return _.SendMsg(
      `AuthenticationSupport.QueryRefreshTokenByID#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.QueryRefreshTokenByID = _;
  function _(_, _, _) {
    return _.SendMsg(`AuthenticationSupport.RevokeToken#1`, _(_, _, _), _, {
      ePrivilege: 5,
    });
  }
  _.RevokeToken = _;
  function _(_, _, _) {
    return _.SendMsg(`AuthenticationSupport.GetTokenHistory#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  _.GetTokenHistory = _;
  function _(_, _, _) {
    return _.SendMsg(
      `AuthenticationSupport.MarkTokenCompromised#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.MarkTokenCompromised = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`CloudGaming.GetTimeRemaining#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetTimeRemaining = _;
})((_ ||= {}));
var _,
  _ = !0;
function _(_, _, _) {
  _ != null &&
    (typeof _ == `number`
      ? this.fromNumber(_, _, _)
      : _ == null && typeof _ != `string`
        ? this.fromString(_, 256)
        : this.fromString(_, _));
}
function _() {
  return new _(null);
}
function _(_, _, _, _, _, _) {
  for (; --_ >= 0;) {
    var _ = _ * this[_++] + _[_] + _;
    ((_ = Math.floor(_ / 67108864)), (_[_++] = _ & 67108863));
  }
  return _;
}
function _(_, _, _, _, _, _) {
  for (var _ = _ & 32767, _ = _ >> 15; --_ >= 0;) {
    var _ = this[_] & 32767,
      _ = this[_++] >> 15,
      _ = _ * _ + _ * _;
    ((_ = _ * _ + ((_ & 32767) << 15) + _[_] + (_ & 1073741823)),
      (_ = (_ >>> 30) + (_ >>> 15) + _ * _ + (_ >>> 30)),
      (_[_++] = _ & 1073741823));
  }
  return _;
}
function _(_, _, _, _, _, _) {
  for (var _ = _ & 16383, _ = _ >> 14; --_ >= 0;) {
    var _ = this[_] & 16383,
      _ = this[_++] >> 14,
      _ = _ * _ + _ * _;
    ((_ = _ * _ + ((_ & 16383) << 14) + _[_] + _),
      (_ = (_ >> 28) + (_ >> 14) + _ * _),
      (_[_++] = _ & 268435455));
  }
  return _;
}
(_ && navigator.appName == `Microsoft Internet Explorer`
  ? ((_.prototype._ = _), (_ = 30))
  : _ && navigator.appName != `Netscape`
    ? ((_.prototype._ = _), (_ = 26))
    : ((_.prototype._ = _), (_ = 28)),
  (_.prototype._ = _),
  (_.prototype._ = (1 << _) - 1),
  (_.prototype._ = 1 << _));
var _ = 52;
((_.prototype._ = 2 ** _),
  (_.prototype._ = _ - _),
  (_.prototype._ = 2 * _ - _));
for (
  var _ = `0123456789abcdefghijklmnopqrstuvwxyz`, _ = [], _ = 48, _ = 0;
  _ <= 9;
  ++_
)
  _[_++] = _;
for (_ = 97, _ = 10; _ < 36; ++_) _[_++] = _;
for (_ = 65, _ = 10; _ < 36; ++_) _[_++] = _;
function _(_) {
  return _.charAt(_);
}
function _(_, _) {
  return _[_.charCodeAt(_)] ?? -1;
}
function _(_) {
  for (var _ = this._ - 1; _ >= 0; --_) _[_] = this[_];
  ((_._ = this._), (_._ = this._));
}
function _(_) {
  ((this._ = 1),
    (this._ = _ < 0 ? -1 : 0),
    _ > 0 ? (this[0] = _) : _ < -1 ? (this[0] = _ + _) : (this._ = 0));
}
function _(_) {
  var _ = _();
  return (_.fromInt(_), _);
}
function _(_, _) {
  var _;
  if (_ == 16) _ = 4;
  else if (_ == 8) _ = 3;
  else if (_ == 256) _ = 8;
  else if (_ == 2) _ = 1;
  else if (_ == 32) _ = 5;
  else if (_ == 4) _ = 2;
  else {
    this.fromRadix(_, _);
    return;
  }
  ((this._ = 0), (this._ = 0));
  for (var _ = _.length, _ = !1, _ = 0; --_ >= 0;) {
    var _ = _ == 8 ? _[_] & 255 : _(_, _);
    _ < 0
      ? _.charAt(_) == `-` && (_ = !0)
      : ((_ = !1),
        _ == 0
          ? (this[this._++] = _)
          : _ + _ > this._
            ? ((this[this._ - 1] |= (_ & ((1 << (this._ - _)) - 1)) << _),
              (this[this._++] = _ >> (this._ - _)))
            : (this[this._ - 1] |= _ << _),
        (_ += _),
        _ >= this._ && (_ -= this._));
  }
  (_ == 8 &&
    _[0] & 128 &&
    ((this._ = -1),
    _ > 0 && (this[this._ - 1] |= ((1 << (this._ - _)) - 1) << _)),
    this.clamp(),
    _ && _.ZERO.subTo(this, this));
}
function _() {
  for (var _ = this._ & this._; this._ > 0 && this[this._ - 1] == _;) --this._;
}
function _(_) {
  if (this._ < 0) return `-` + this.negate().toString(_);
  var _;
  if (_ == 16) _ = 4;
  else if (_ == 8) _ = 3;
  else if (_ == 2) _ = 1;
  else if (_ == 32) _ = 5;
  else if (_ == 4) _ = 2;
  else return this.toRadix(_);
  var _ = (1 << _) - 1,
    _,
    _ = !1,
    _ = ``,
    _ = this._,
    _ = this._ - ((_ * this._) % _);
  if (_-- > 0)
    for (
      _ < this._ && (_ = this[_] >> _) > 0 && ((_ = !0), (_ = _(_)));
      _ >= 0;
    )
      (_ < _
        ? ((_ = (this[_] & ((1 << _) - 1)) << (_ - _)),
          (_ |= this[--_] >> (_ += this._ - _)))
        : ((_ = (this[_] >> (_ -= _)) & _), _ <= 0 && ((_ += this._), --_)),
        _ > 0 && (_ = !0),
        _ && (_ += _(_)));
  return _ ? _ : `0`;
}
function _() {
  var _ = _();
  return (_.ZERO.subTo(this, _), _);
}
function _() {
  return this._ < 0 ? this.negate() : this;
}
function _(_) {
  var _ = this._ - _._;
  if (_ != 0) return _;
  var _ = this._;
  if (((_ = _ - _._), _ != 0)) return _;
  for (; --_ >= 0;) if ((_ = this[_] - _[_]) != 0) return _;
  return 0;
}
function _(_) {
  var _ = 1,
    _;
  return (
    (_ = _ >>> 16) != 0 && ((_ = _), (_ += 16)),
    (_ = _ >> 8) != 0 && ((_ = _), (_ += 8)),
    (_ = _ >> 4) != 0 && ((_ = _), (_ += 4)),
    (_ = _ >> 2) != 0 && ((_ = _), (_ += 2)),
    (_ = _ >> 1) != 0 && ((_ = _), (_ += 1)),
    _
  );
}
function _() {
  return this._ <= 0
    ? 0
    : this._ * (this._ - 1) + _(this[this._ - 1] ^ (this._ & this._));
}
function _(_, _) {
  for (var _ = this._ - 1; _ >= 0; --_) _[_ + _] = this[_];
  for (_ = _ - 1; _ >= 0; --_) _[_] = 0;
  ((_._ = this._ + _), (_._ = this._));
}
function _(_, _) {
  for (var _ = _; _ < this._; ++_) _[_ - _] = this[_];
  ((_._ = Math.max(this._ - _, 0)), (_._ = this._));
}
function _(_, _) {
  for (
    var _ = _ % this._,
      _ = this._ - _,
      _ = (1 << _) - 1,
      _ = Math.floor(_ / this._),
      _ = (this._ << _) & this._,
      _ = this._ - 1;
    _ >= 0;
    --_
  )
    ((_[_ + _ + 1] = (this[_] >> _) | _), (_ = (this[_] & _) << _));
  for (_ = _ - 1; _ >= 0; --_) _[_] = 0;
  ((_[_] = _), (_._ = this._ + _ + 1), (_._ = this._), _.clamp());
}
function _(_, _) {
  _._ = this._;
  var _ = Math.floor(_ / this._);
  if (_ >= this._) _._ = 0;
  else {
    var _ = _ % this._,
      _ = this._ - _,
      _ = (1 << _) - 1;
    _[0] = this[_] >> _;
    for (var _ = _ + 1; _ < this._; ++_)
      ((_[_ - _ - 1] |= (this[_] & _) << _), (_[_ - _] = this[_] >> _));
    (_ > 0 && (_[this._ - _ - 1] |= (this._ & _) << _),
      (_._ = this._ - _),
      _.clamp());
  }
}
function _(_, _) {
  for (var _ = 0, _ = 0, _ = Math.min(_._, this._); _ < _;)
    ((_ += this[_] - _[_]), (_[_++] = _ & this._), (_ >>= this._));
  if (_._ < this._) {
    for (_ -= _._; _ < this._;)
      ((_ += this[_]), (_[_++] = _ & this._), (_ >>= this._));
    _ += this._;
  } else {
    for (_ += this._; _ < _._;)
      ((_ -= _[_]), (_[_++] = _ & this._), (_ >>= this._));
    _ -= _._;
  }
  ((_._ = _ < 0 ? -1 : 0),
    _ < -1 ? (_[_++] = this._ + _) : _ > 0 && (_[_++] = _),
    (_._ = _),
    _.clamp());
}
function _(_, _) {
  var _ = this.abs(),
    _ = _.abs(),
    _ = _._;
  for (_._ = _ + _._; --_ >= 0;) _[_] = 0;
  for (_ = 0; _ < _._; ++_) _[_ + _._] = _._(0, _[_], _, _, 0, _._);
  ((_._ = 0), _.clamp(), this._ != _._ && _.ZERO.subTo(_, _));
}
function _(_) {
  for (var _ = this.abs(), _ = (_._ = 2 * _._); --_ >= 0;) _[_] = 0;
  for (_ = 0; _ < _._ - 1; ++_) {
    var _ = _._(_, _[_], _, 2 * _, 0, 1);
    (_[_ + _._] += _._(_ + 1, 2 * _[_], _, 2 * _ + 1, _, _._ - _ - 1)) >= _._ &&
      ((_[_ + _._] -= _._), (_[_ + _._ + 1] = 1));
  }
  (_._ > 0 && (_[_._ - 1] += _._(_, _[_], _, 2 * _, 0, 1)),
    (_._ = 0),
    _.clamp());
}
function _(_, _, _) {
  var _ = _.abs();
  if (!(_._ <= 0)) {
    var _ = this.abs();
    if (_._ < _._) (_?.fromInt(0), _ != null && this.copyTo(_));
    else {
      _ ??= _();
      var _ = _(),
        _ = this._,
        _ = _._,
        _ = this._ - _(_[_._ - 1]);
      _ > 0 ? (_.lShiftTo(_, _), _.lShiftTo(_, _)) : (_.copyTo(_), _.copyTo(_));
      var _ = _._,
        _ = _[_ - 1];
      if (_ != 0) {
        var _ = _ * (1 << this._) + (_ > 1 ? _[_ - 2] >> this._ : 0),
          _ = this._ / _,
          _ = (1 << this._) / _,
          _ = 1 << this._,
          _ = _._,
          _ = _ - _,
          _ = _ ?? _();
        for (
          _.dlShiftTo(_, _),
            _.compareTo(_) >= 0 && ((_[_._++] = 1), _.subTo(_, _)),
            _.ONE.dlShiftTo(_, _),
            _.subTo(_, _);
          _._ < _;
        )
          _[_._++] = 0;
        for (; --_ >= 0;) {
          var _ =
            _[--_] == _ ? this._ : Math.floor(_[_] * _ + (_[_ - 1] + _) * _);
          if ((_[_] += _._(0, _, _, _, 0, _)) < _)
            for (_.dlShiftTo(_, _), _.subTo(_, _); _[_] < --_;) _.subTo(_, _);
        }
        (_ != null && (_.drShiftTo(_, _), _ != _ && _.ZERO.subTo(_, _)),
          (_._ = _),
          _.clamp(),
          _ > 0 && _.rShiftTo(_, _),
          _ < 0 && _.ZERO.subTo(_, _));
      }
    }
  }
}
function _(_) {
  var _ = _();
  return (
    this.abs().divRemTo(_, null, _),
    this._ < 0 && _.compareTo(_.ZERO) > 0 && _.subTo(_, _),
    _
  );
}
function _(_) {
  this._ = _;
}
function _(_) {
  return _._ < 0 || _.compareTo(this._) >= 0 ? _.mod(this._) : _;
}
function _(_) {
  return _;
}
function _(_) {
  _.divRemTo(this._, null, _);
}
function _(_, _, _) {
  (_.multiplyTo(_, _), this.reduce(_));
}
function _(_, _) {
  (_.squareTo(_), this.reduce(_));
}
((_.prototype.convert = _),
  (_.prototype.revert = _),
  (_.prototype.reduce = _),
  (_.prototype.mulTo = _),
  (_.prototype.sqrTo = _));
function _() {
  if (this._ < 1) return 0;
  var _ = this[0];
  if (!(_ & 1)) return 0;
  var _ = _ & 3;
  return (
    (_ = (_ * (2 - (_ & 15) * _)) & 15),
    (_ = (_ * (2 - (_ & 255) * _)) & 255),
    (_ = (_ * (2 - (((_ & 65535) * _) & 65535))) & 65535),
    (_ = (_ * (2 - ((_ * _) % this._))) % this._),
    _ > 0 ? this._ - _ : -_
  );
}
function _(_) {
  ((this._ = _),
    (this._ = _.invDigit()),
    (this.mpl = this._ & 32767),
    (this.mph = this._ >> 15),
    (this._ = (1 << (_._ - 15)) - 1),
    (this.mt2 = 2 * _._));
}
function _(_) {
  var _ = _();
  return (
    _.abs().dlShiftTo(this._._, _),
    _.divRemTo(this._, null, _),
    _._ < 0 && _.compareTo(_.ZERO) > 0 && this._.subTo(_, _),
    _
  );
}
function _(_) {
  var _ = _();
  return (_.copyTo(_), this.reduce(_), _);
}
function _(_) {
  for (; _._ <= this.mt2;) _[_._++] = 0;
  for (var _ = 0; _ < this._._; ++_) {
    var _ = _[_] & 32767,
      _ =
        (_ * this.mpl +
          (((_ * this.mph + (_[_] >> 15) * this.mpl) & this._) << 15)) &
        _._;
    for (
      _ = _ + this._._, _[_] += this._._(0, _, _, _, 0, this._._);
      _[_] >= _._;
    )
      ((_[_] -= _._), _[++_]++);
  }
  (_.clamp(),
    _.drShiftTo(this._._, _),
    _.compareTo(this._) >= 0 && _.subTo(this._, _));
}
function _(_, _) {
  (_.squareTo(_), this.reduce(_));
}
function _(_, _, _) {
  (_.multiplyTo(_, _), this.reduce(_));
}
((_.prototype.convert = _),
  (_.prototype.revert = _),
  (_.prototype.reduce = _),
  (_.prototype.mulTo = _),
  (_.prototype.sqrTo = _));
function _() {
  return (this._ > 0 ? this[0] & 1 : this._) == 0;
}
function _(_, _) {
  if (_ > 4294967295 || _ < 1) return _.ONE;
  var _ = _(),
    _ = _(),
    _ = _.convert(this),
    _ = _(_) - 1;
  for (_.copyTo(_); --_ >= 0;)
    if ((_.sqrTo(_, _), (_ & (1 << _)) > 0)) _.mulTo(_, _, _);
    else {
      var _ = _;
      ((_ = _), (_ = _));
    }
  return _.revert(_);
}
function _(_, _) {
  var _ = _ < 256 || _.isEven() ? new _(_) : new _(_);
  return this.exp(_, _);
}
((_.prototype.copyTo = _),
  (_.prototype.fromInt = _),
  (_.prototype.fromString = _),
  (_.prototype.clamp = _),
  (_.prototype.dlShiftTo = _),
  (_.prototype.drShiftTo = _),
  (_.prototype.lShiftTo = _),
  (_.prototype.rShiftTo = _),
  (_.prototype.subTo = _),
  (_.prototype.multiplyTo = _),
  (_.prototype.squareTo = _),
  (_.prototype.divRemTo = _),
  (_.prototype.invDigit = _),
  (_.prototype.isEven = _),
  (_.prototype.exp = _),
  (_.prototype.toString = _),
  (_.prototype.negate = _),
  (_.prototype.abs = _),
  (_.prototype.compareTo = _),
  (_.prototype.bitLength = _),
  (_.prototype.mod = _),
  (_.prototype.modPowInt = _),
  (_.ZERO = _(0)),
  (_.ONE = _(1)));
function _() {
  var _ = _();
  return (this.copyTo(_), _);
}
function _() {
  if (this._ < 0) {
    if (this._ == 1) return this[0] - this._;
    if (this._ == 0) return -1;
  } else if (this._ == 1) return this[0];
  else if (this._ == 0) return 0;
  return ((this[1] & ((1 << (32 - this._)) - 1)) << this._) | this[0];
}
function _() {
  return this._ == 0 ? this._ : (this[0] << 24) >> 24;
}
function _() {
  return this._ == 0 ? this._ : (this[0] << 16) >> 16;
}
function _(_) {
  return Math.floor((Math.LN2 * this._) / Math.log(_));
}
function _() {
  return this._ < 0 ? -1 : this._ <= 0 || (this._ == 1 && this[0] <= 0) ? 0 : 1;
}
function _(_) {
  if (((_ ??= 10), this.signum() == 0 || _ < 2 || _ > 36)) return `0`;
  var _ = this.chunkSize(_),
    _ = _ ** +_,
    _ = _(_),
    _ = _(),
    _ = _(),
    _ = ``;
  for (this.divRemTo(_, _, _); _.signum() > 0;)
    ((_ = (_ + _.intValue()).toString(_).substr(1) + _), _.divRemTo(_, _, _));
  return _.intValue().toString(_) + _;
}
function _(_, _) {
  (this.fromInt(0), (_ ??= 10));
  for (
    var _ = this.chunkSize(_), _ = _ ** +_, _ = !1, _ = 0, _ = 0, _ = 0;
    _ < _.length;
    ++_
  ) {
    var _ = _(_, _);
    _ < 0
      ? _.charAt(_) == `-` && this.signum() == 0 && (_ = !0)
      : ((_ = _ * _ + _),
        ++_ >= _ &&
          (this.dMultiply(_), this.dAddOffset(_, 0), (_ = 0), (_ = 0)));
  }
  (_ > 0 && (this.dMultiply(_ ** +_), this.dAddOffset(_, 0)),
    _ && _.ZERO.subTo(this, this));
}
function _(_, _, _) {
  if (typeof _ == `number`) {
    if (_ < 2) this.fromInt(1);
    else
      for (
        this.fromNumber(_, _),
          this.testBit(_ - 1) ||
            this.bitwiseTo(_.ONE.shiftLeft(_ - 1), _, this),
          this.isEven() && this.dAddOffset(1, 0);
        !this.isProbablePrime(_);
      )
        (this.dAddOffset(2, 0),
          this.bitLength() > _ && this.subTo(_.ONE.shiftLeft(_ - 1), this));
  } else {
    var _ = [],
      _ = _ & 7;
    ((_.length = (_ >> 3) + 1),
      _.nextBytes(_),
      _ > 0 ? (_[0] &= (1 << _) - 1) : (_[0] = 0),
      this.fromString(_, 256));
  }
}
function _() {
  var _ = this._,
    _ = [];
  _[0] = this._;
  var _ = this._ - ((_ * this._) % 8),
    _,
    _ = 0;
  if (_-- > 0)
    for (
      _ < this._ &&
      (_ = this[_] >> _) != (this._ & this._) >> _ &&
      (_[_++] = _ | (this._ << (this._ - _)));
      _ >= 0;
    )
      (_ < 8
        ? ((_ = (this[_] & ((1 << _) - 1)) << (8 - _)),
          (_ |= this[--_] >> (_ += this._ - 8)))
        : ((_ = (this[_] >> (_ -= 8)) & 255), _ <= 0 && ((_ += this._), --_)),
        _ & 128 && (_ |= -256),
        _ == 0 && (this._ & 128) != (_ & 128) && ++_,
        (_ > 0 || _ != this._) && (_[_++] = _));
  return _;
}
function _(_) {
  return this.compareTo(_) == 0;
}
function _(_) {
  return this.compareTo(_) < 0 ? this : _;
}
function _(_) {
  return this.compareTo(_) > 0 ? this : _;
}
function _(_, _, _) {
  var _,
    _,
    _ = Math.min(_._, this._);
  for (_ = 0; _ < _; ++_) _[_] = _(this[_], _[_]);
  if (_._ < this._) {
    for (_ = _._ & this._, _ = _; _ < this._; ++_) _[_] = _(this[_], _);
    _._ = this._;
  } else {
    for (_ = this._ & this._, _ = _; _ < _._; ++_) _[_] = _(_, _[_]);
    _._ = _._;
  }
  ((_._ = _(this._, _._)), _.clamp());
}
function _(_, _) {
  return _ & _;
}
function _(_) {
  var _ = _();
  return (this.bitwiseTo(_, _, _), _);
}
function _(_, _) {
  return _ | _;
}
function _(_) {
  var _ = _();
  return (this.bitwiseTo(_, _, _), _);
}
function _(_, _) {
  return _ ^ _;
}
function _(_) {
  var _ = _();
  return (this.bitwiseTo(_, _, _), _);
}
function _(_, _) {
  return _ & ~_;
}
function _(_) {
  var _ = _();
  return (this.bitwiseTo(_, _, _), _);
}
function _() {
  for (var _ = _(), _ = 0; _ < this._; ++_) _[_] = this._ & ~this[_];
  return ((_._ = this._), (_._ = ~this._), _);
}
function _(_) {
  var _ = _();
  return (_ < 0 ? this.rShiftTo(-_, _) : this.lShiftTo(_, _), _);
}
function _(_) {
  var _ = _();
  return (_ < 0 ? this.lShiftTo(-_, _) : this.rShiftTo(_, _), _);
}
function _(_) {
  if (_ == 0) return -1;
  var _ = 0;
  return (
    _ & 65535 || ((_ >>= 16), (_ += 16)),
    _ & 255 || ((_ >>= 8), (_ += 8)),
    _ & 15 || ((_ >>= 4), (_ += 4)),
    _ & 3 || ((_ >>= 2), (_ += 2)),
    _ & 1 || ++_,
    _
  );
}
function _() {
  for (var _ = 0; _ < this._; ++_)
    if (this[_] != 0) return _ * this._ + _(this[_]);
  return this._ < 0 ? this._ * this._ : -1;
}
function _(_) {
  for (var _ = 0; _ != 0;) ((_ &= _ - 1), ++_);
  return _;
}
function _() {
  for (var _ = 0, _ = this._ & this._, _ = 0; _ < this._; ++_)
    _ += _(this[_] ^ _);
  return _;
}
function _(_) {
  var _ = Math.floor(_ / this._);
  return _ >= this._ ? this._ != 0 : !!(this[_] & (1 << (_ % this._)));
}
function _(_, _) {
  var _ = _.ONE.shiftLeft(_);
  return (this.bitwiseTo(_, _, _), _);
}
function _(_) {
  return this.changeBit(_, _);
}
function _(_) {
  return this.changeBit(_, _);
}
function _(_) {
  return this.changeBit(_, _);
}
function _(_, _) {
  for (var _ = 0, _ = 0, _ = Math.min(_._, this._); _ < _;)
    ((_ += this[_] + _[_]), (_[_++] = _ & this._), (_ >>= this._));
  if (_._ < this._) {
    for (_ += _._; _ < this._;)
      ((_ += this[_]), (_[_++] = _ & this._), (_ >>= this._));
    _ += this._;
  } else {
    for (_ += this._; _ < _._;)
      ((_ += _[_]), (_[_++] = _ & this._), (_ >>= this._));
    _ += _._;
  }
  ((_._ = _ < 0 ? -1 : 0),
    _ > 0 ? (_[_++] = _) : _ < -1 && (_[_++] = this._ + _),
    (_._ = _),
    _.clamp());
}
function _(_) {
  var _ = _();
  return (this.addTo(_, _), _);
}
function _(_) {
  var _ = _();
  return (this.subTo(_, _), _);
}
function _(_) {
  var _ = _();
  return (this.multiplyTo(_, _), _);
}
function _(_) {
  var _ = _();
  return (this.divRemTo(_, _, null), _);
}
function _(_) {
  var _ = _();
  return (this.divRemTo(_, null, _), _);
}
function _(_) {
  var _ = _(),
    _ = _();
  return (this.divRemTo(_, _, _), [_, _]);
}
function _(_) {
  ((this[this._] = this._(0, _ - 1, this, 0, 0, this._)),
    ++this._,
    this.clamp());
}
function _(_, _) {
  for (; this._ <= _;) this[this._++] = 0;
  for (this[_] += _; this[_] >= this._;)
    ((this[_] -= this._), ++_ >= this._ && (this[this._++] = 0), ++this[_]);
}
function _() {}
function _(_) {
  return _;
}
function _(_, _, _) {
  _.multiplyTo(_, _);
}
function _(_, _) {
  _.squareTo(_);
}
((_.prototype.convert = _),
  (_.prototype.revert = _),
  (_.prototype.mulTo = _),
  (_.prototype.sqrTo = _));
function _(_) {
  return this.exp(_, new _());
}
function _(_, _, _) {
  var _ = Math.min(this._ + _._, _);
  for (_._ = 0, _._ = _; _ > 0;) _[--_] = 0;
  for (var _ = _._ - this._; _ < _; ++_)
    _[_ + this._] = this._(0, _[_], _, _, 0, this._);
  for (_ = Math.min(_._, _); _ < _; ++_) this._(0, _[_], _, _, 0, _ - _);
  _.clamp();
}
function _(_, _, _) {
  --_;
  var _ = (_._ = this._ + _._ - _);
  for (_._ = 0; --_ >= 0;) _[_] = 0;
  for (_ = Math.max(_ - this._, 0); _ < _._; ++_)
    _[this._ + _ - _] = this._(_ - _, _[_], _, 0, 0, this._ + _ - _);
  (_.clamp(), _.drShiftTo(1, _));
}
function _(_) {
  ((this._ = _()),
    (this._ = _()),
    _.ONE.dlShiftTo(2 * _._, this._),
    (this._ = this._.divide(_)),
    (this._ = _));
}
function _(_) {
  if (_._ < 0 || _._ > 2 * this._._) return _.mod(this._);
  if (_.compareTo(this._) < 0) return _;
  var _ = _();
  return (_.copyTo(_), this.reduce(_), _);
}
function _(_) {
  return _;
}
function _(_) {
  for (
    _.drShiftTo(this._._ - 1, this._),
      _._ > this._._ + 1 && ((_._ = this._._ + 1), _.clamp()),
      this._.multiplyUpperTo(this._, this._._ + 1, this._),
      this._.multiplyLowerTo(this._, this._._ + 1, this._);
    _.compareTo(this._) < 0;
  )
    _.dAddOffset(1, this._._ + 1);
  for (_.subTo(this._, _); _.compareTo(this._) >= 0;) _.subTo(this._, _);
}
function _(_, _) {
  (_.squareTo(_), this.reduce(_));
}
function _(_, _, _) {
  (_.multiplyTo(_, _), this.reduce(_));
}
((_.prototype.convert = _),
  (_.prototype.revert = _),
  (_.prototype.reduce = _),
  (_.prototype.mulTo = _),
  (_.prototype.sqrTo = _));
function _(_, _) {
  var _ = _.bitLength(),
    _,
    _ = _(1),
    _;
  if (_ <= 0) return _;
  ((_ = _ < 18 ? 1 : _ < 48 ? 3 : _ < 144 ? 4 : _ < 768 ? 5 : 6),
    (_ = _ < 8 ? new _(_) : _.isEven() ? new _(_) : new _(_)));
  var _ = [],
    _ = 3,
    _ = _ - 1,
    _ = (1 << _) - 1;
  if (((_[1] = _.convert(this)), _ > 1)) {
    var _ = _();
    for (_.sqrTo(_[1], _); _ <= _;)
      ((_[_] = _()), _.mulTo(_, _[_ - 2], _[_]), (_ += 2));
  }
  var _ = _._ - 1,
    _,
    _ = !0,
    _ = _(),
    _;
  for (_ = _(_[_]) - 1; _ >= 0;) {
    for (
      _ >= _
        ? (_ = (_[_] >> (_ - _)) & _)
        : ((_ = (_[_] & ((1 << (_ + 1)) - 1)) << (_ - _)),
          _ > 0 && (_ |= _[_ - 1] >> (this._ + _ - _))),
        _ = _;
      !(_ & 1);
    )
      ((_ >>= 1), --_);
    if (((_ -= _) < 0 && ((_ += this._), --_), _)) (_[_].copyTo(_), (_ = !1));
    else {
      for (; _ > 1;) (_.sqrTo(_, _), _.sqrTo(_, _), (_ -= 2));
      (_ > 0 ? _.sqrTo(_, _) : ((_ = _), (_ = _), (_ = _)),
        _.mulTo(_, _[_], _));
    }
    for (; _ >= 0 && !(_[_] & (1 << _));)
      (_.sqrTo(_, _),
        (_ = _),
        (_ = _),
        (_ = _),
        --_ < 0 && ((_ = this._ - 1), --_));
  }
  return _.revert(_);
}
function _(_) {
  var _ = this._ < 0 ? this.negate() : this.clone(),
    _ = _._ < 0 ? _.negate() : _.clone();
  if (_.compareTo(_) < 0) {
    var _ = _;
    ((_ = _), (_ = _));
  }
  var _ = _.getLowestSetBit(),
    _ = _.getLowestSetBit();
  if (_ < 0) return _;
  for (
    _ < _ && (_ = _), _ > 0 && (_.rShiftTo(_, _), _.rShiftTo(_, _));
    _.signum() > 0;
  )
    ((_ = _.getLowestSetBit()) > 0 && _.rShiftTo(_, _),
      (_ = _.getLowestSetBit()) > 0 && _.rShiftTo(_, _),
      _.compareTo(_) >= 0
        ? (_.subTo(_, _), _.rShiftTo(1, _))
        : (_.subTo(_, _), _.rShiftTo(1, _)));
  return (_ > 0 && _.lShiftTo(_, _), _);
}
function _(_) {
  if (_ <= 0) return 0;
  var _ = this._ % _,
    _ = this._ < 0 ? _ - 1 : 0;
  if (this._ > 0) {
    if (_ == 0) _ = this[0] % _;
    else for (var _ = this._ - 1; _ >= 0; --_) _ = (_ * _ + this[_]) % _;
  }
  return _;
}
function _(_) {
  var _ = _.isEven();
  if ((this.isEven() && _) || _.signum() == 0) return _.ZERO;
  for (
    var _ = _.clone(), _ = this.clone(), _ = _(1), _ = _(0), _ = _(0), _ = _(1);
    _.signum() != 0;
  ) {
    for (; _.isEven();)
      (_.rShiftTo(1, _),
        _
          ? ((_.isEven() && _.isEven()) || (_.addTo(this, _), _.subTo(_, _)),
            _.rShiftTo(1, _))
          : _.isEven() || _.subTo(_, _),
        _.rShiftTo(1, _));
    for (; _.isEven();)
      (_.rShiftTo(1, _),
        _
          ? ((_.isEven() && _.isEven()) || (_.addTo(this, _), _.subTo(_, _)),
            _.rShiftTo(1, _))
          : _.isEven() || _.subTo(_, _),
        _.rShiftTo(1, _));
    _.compareTo(_) >= 0
      ? (_.subTo(_, _), _ && _.subTo(_, _), _.subTo(_, _))
      : (_.subTo(_, _), _ && _.subTo(_, _), _.subTo(_, _));
  }
  if (_.compareTo(_.ONE) != 0) return _.ZERO;
  if (_.compareTo(_) >= 0) return _.subtract(_);
  if (_.signum() < 0) _.addTo(_, _);
  else return _;
  return _.signum() < 0 ? _.add(_) : _;
}
var _ = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509,
  ],
  _ = (1 << 26) / _[_.length - 1];
function _(_) {
  var _,
    _ = this.abs();
  if (_._ == 1 && _[0] <= _[_.length - 1]) {
    for (_ = 0; _ < _.length; ++_) if (_[0] == _[_]) return !0;
    return !1;
  }
  if (_.isEven()) return !1;
  for (_ = 1; _ < _.length;) {
    for (var _ = _[_], _ = _ + 1; _ < _.length && _ < _;) _ *= _[_++];
    for (_ = _.modInt(_); _ < _;) if (_ % _[_++] == 0) return !1;
  }
  return _.millerRabin(_);
}
function _(_) {
  var _ = this.subtract(_.ONE),
    _ = _.getLowestSetBit();
  if (_ <= 0) return !1;
  var _ = _.shiftRight(_);
  ((_ = (_ + 1) >> 1), _ > _.length && (_ = _.length));
  for (var _ = _(), _ = 0; _ < _; ++_) {
    _.fromInt(_[_]);
    var _ = _.modPow(_, this);
    if (_.compareTo(_.ONE) != 0 && _.compareTo(_) != 0) {
      for (var _ = 1; _++ < _ && _.compareTo(_) != 0;)
        if (((_ = _.modPowInt(2, this)), _.compareTo(_.ONE) == 0)) return !1;
      if (_.compareTo(_) != 0) return !1;
    }
  }
  return !0;
}
((_.prototype.chunkSize = _),
  (_.prototype.toRadix = _),
  (_.prototype.fromRadix = _),
  (_.prototype.fromNumber = _),
  (_.prototype.bitwiseTo = _),
  (_.prototype.changeBit = _),
  (_.prototype.addTo = _),
  (_.prototype.dMultiply = _),
  (_.prototype.dAddOffset = _),
  (_.prototype.multiplyLowerTo = _),
  (_.prototype.multiplyUpperTo = _),
  (_.prototype.modInt = _),
  (_.prototype.millerRabin = _),
  (_.prototype.clone = _),
  (_.prototype.intValue = _),
  (_.prototype.byteValue = _),
  (_.prototype.shortValue = _),
  (_.prototype.signum = _),
  (_.prototype.toByteArray = _),
  (_.prototype.equals = _),
  (_.prototype.min = _),
  (_.prototype.max = _),
  (_.prototype.and = _),
  (_.prototype._ = _),
  (_.prototype.xor = _),
  (_.prototype.andNot = _),
  (_.prototype.not = _),
  (_.prototype.shiftLeft = _),
  (_.prototype.shiftRight = _),
  (_.prototype.getLowestSetBit = _),
  (_.prototype.bitCount = _),
  (_.prototype.testBit = _),
  (_.prototype.setBit = _),
  (_.prototype.clearBit = _),
  (_.prototype.flipBit = _),
  (_.prototype.add = _),
  (_.prototype.subtract = _),
  (_.prototype.multiply = _),
  (_.prototype.divide = _),
  (_.prototype.remainder = _),
  (_.prototype.divideAndRemainder = _),
  (_.prototype.modPow = _),
  (_.prototype.modInverse = _),
  (_.prototype.pow = _),
  (_.prototype.gcd = _),
  (_.prototype.isProbablePrime = _));
var _ = function (_, _) {
    ((this.modulus = new _(_, 16)), (this.encryptionExponent = new _(_, 16)));
  },
  _ = {
    base64: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    encode: function (_) {
      if (!_) return !1;
      var _ = ``,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _ = 0;
      do
        ((_ = _.charCodeAt(_++)),
          (_ = _.charCodeAt(_++)),
          (_ = _.charCodeAt(_++)),
          (_ = _ >> 2),
          (_ = ((_ & 3) << 4) | (_ >> 4)),
          (_ = ((_ & 15) << 2) | (_ >> 6)),
          (_ = _ & 63),
          isNaN(_) ? (_ = _ = 64) : isNaN(_) && (_ = 64),
          (_ +=
            this.base64.charAt(_) +
            this.base64.charAt(_) +
            this.base64.charAt(_) +
            this.base64.charAt(_)));
      while (_ < _.length);
      return _;
    },
    decode: function (_) {
      if (!_) return !1;
      _ = _.replace(/[^A-Za-z0-9\+\/\=]/g, ``);
      var _ = ``,
        _,
        _,
        _,
        _,
        _ = 0;
      do
        ((_ = this.base64.indexOf(_.charAt(_++))),
          (_ = this.base64.indexOf(_.charAt(_++))),
          (_ = this.base64.indexOf(_.charAt(_++))),
          (_ = this.base64.indexOf(_.charAt(_++))),
          (_ += String.fromCharCode((_ << 2) | (_ >> 4))),
          _ != 64 && (_ += String.fromCharCode(((_ & 15) << 4) | (_ >> 2))),
          _ != 64 && (_ += String.fromCharCode(((_ & 3) << 6) | _)));
      while (_ < _.length);
      return _;
    },
  },
  _ = {
    hex: `0123456789abcdef`,
    encode: function (_) {
      if (!_) return !1;
      var _ = ``,
        _,
        _ = 0;
      do
        ((_ = _.charCodeAt(_++)),
          (_ += this.hex.charAt((_ >> 4) & 15) + this.hex.charAt(_ & 15)));
      while (_ < _.length);
      return _;
    },
    decode: function (_) {
      if (!_) return !1;
      _ = _.replace(/[^0-9abcdef]/g, ``);
      var _ = ``,
        _ = 0;
      do
        _ += String.fromCharCode(
          ((this.hex.indexOf(_.charAt(_++)) << 4) & 240) |
            (this.hex.indexOf(_.charAt(_++)) & 15),
        );
      while (_ < _.length);
      return _;
    },
  },
  _ = {
    getPublicKey: function (_, _) {
      return new _(_, _);
    },
    encrypt: function (_, _) {
      return !_ ||
        ((_ = this.pkcs1pad2(_, (_.modulus.bitLength() + 7) >> 3)), !_) ||
        ((_ = _.modPowInt(_.encryptionExponent, _.modulus)), !_)
        ? !1
        : ((_ = _.toString(16)),
          (_.length & 1) == 1 && (_ = `0` + _),
          _.encode(_.decode(_)));
    },
    pkcs1pad2: function (_, _) {
      if (_ < _.length + 11) return null;
      for (var _ = [], _ = _.length - 1; _ >= 0 && _ > 0;)
        _[--_] = _.charCodeAt(_--);
      for (_[--_] = 0; _ > 2;) _[--_] = Math.floor(Math.random() * 254) + 1;
      return ((_[--_] = 2), (_[--_] = 0), new _(_));
    },
  },
  _ = new _(`Login`),
  _ = _.Info,
  _ = _.Debug,
  _ = _.Warning,
  _ = _.Error;
function _(_, _) {
  let _ = _.getPublicKey(_.publickey_mod, _.publickey_exp),
    _ = _.encrypt(_, _);
  return _ === !1 ? null : _;
}
var _ = (function (_) {
  return (
    (_[(_.None = 0)] = `None`),
    (_[(_.Generic = 1)] = `Generic`),
    (_[(_.Expired = 2)] = `Expired`),
    (_[(_.Network = 3)] = `Network`),
    (_[(_.MoveAuthenticator = 4)] = `MoveAuthenticator`),
    (_[(_.RateLimitExceeded = 5)] = `RateLimitExceeded`),
    (_[(_.AnonymousLogin = 6)] = `AnonymousLogin`),
    _
  );
})({});
function _(_) {
  let {
    shared_secret: _,
    identity_secret: _,
    secret_1: _,
    status: _,
    uri: _,
    server_time: _,
    ..._
  } = _;
  return {
    shared_secret: _.fromByteArray(_),
    identity_secret: _.fromByteArray(_),
    secret_1: _.fromByteArray(_),
    ..._,
  };
}
var _ = (function (_) {
  return (
    (_[(_.k_Success = 0)] = `k_Success`),
    (_[(_.k_PrimaryDomainFail = 1)] = `k_PrimaryDomainFail`),
    (_[(_.k_SecondaryDomainFail = 2)] = `k_SecondaryDomainFail`),
    _
  );
})({});
function _(_, _) {
  let _ = Object.keys(_);
  return (
    _.length === Object.keys(_).length && _.every((_) => Object._(_[_], _[_]))
  );
}
var _ = class {
  m_setListeners = new Set();
  m_snapshot;
  m_bNotifyPending = !1;
  m_transport;
  m_strClientID;
  m_msPollInterval;
  m_activeTimerID;
  m_rgRequestID;
  m_strTokenToRevoke;
  m_strChallengeURLValue = void 0;
  get m_strChallengeURL() {
    return this.m_strChallengeURLValue;
  }
  set m_strChallengeURL(_) {
    ((this.m_strChallengeURLValue = _), this.NotifyChanged());
  }
  m_onShowAgreement;
  m_bRemoteInteractionValue = !1;
  get m_bRemoteInteraction() {
    return this.m_bRemoteInteractionValue;
  }
  set m_bRemoteInteraction(_) {
    ((this.m_bRemoteInteractionValue = _), this.NotifyChanged());
  }
  m_onCompleteCallback;
  m_eFailureStateValue = 0;
  get m_eFailureState() {
    return this.m_eFailureStateValue;
  }
  set m_eFailureState(_) {
    ((this.m_eFailureStateValue = _), this.NotifyChanged());
  }
  m_strExtendedErrorMessageValue = ``;
  get m_strExtendedErrorMessage() {
    return this.m_strExtendedErrorMessageValue;
  }
  set m_strExtendedErrorMessage(_) {
    ((this.m_strExtendedErrorMessageValue = _), this.NotifyChanged());
  }
  m_onDeviceDetailsCallback;
  constructor(_, _, _, _) {
    ((this.m_transport = _),
      (this.m_onCompleteCallback = _),
      (this.m_onDeviceDetailsCallback = _),
      (this.m_onShowAgreement = _));
  }
  Subscribe(_) {
    return (
      this.m_setListeners.add(_),
      () => {
        this.m_setListeners.delete(_);
      }
    );
  }
  GetSnapshot() {
    let _ = this.BuildSnapshot();
    return (
      (this.m_snapshot && _(this.m_snapshot, _)) || (this.m_snapshot = _),
      this.m_snapshot
    );
  }
  NotifyChanged() {
    this.m_bNotifyPending ||
      ((this.m_bNotifyPending = !0),
      queueMicrotask(() => {
        this.m_bNotifyPending = !1;
        for (let _ of this.m_setListeners) _();
      }));
  }
  StartPolling(_ = !0) {
    (this.m_activeTimerID != null && this.StopPolling(),
      _
        ? this.PollForUpdate()
        : (this.m_activeTimerID = window.setTimeout(
            this.PollForUpdate,
            this.m_msPollInterval,
          )));
  }
  StopPolling() {
    (window.clearTimeout(this.m_activeTimerID),
      (this.m_activeTimerID = void 0));
  }
  async PollForUpdate() {
    try {
      let _ = _.Init(_);
      (_.SetEMsg(_),
        _.Body().set_client_id(this.m_strClientID),
        _.Body().set_request_id(this.m_rgRequestID),
        this.m_strTokenToRevoke &&
          _.Body().set_token_to_revoke(this.m_strTokenToRevoke));
      let _ = await _.PollAuthSessionStatus(this.m_transport, _),
        _ = _.GetEResult();
      if (_ !== 1) {
        if (_ === 2) {
          let _ = _.Hdr().transport_error();
          if (
            (_(
              `Failed to poll auth session. Result ${_}. Transport Error: ${_}`,
            ),
            _ === 2 || _ === 3)
          )
            return (this.m_transport.MakeReady(), this.StartPolling(!1), 1);
        }
        if (_ === 9 || _ === 27) this.m_eFailureState = 2;
        else if (_ === 84) this.m_eFailureState = 5;
        else if (_ == 118) {
          let _ = _.Body().agreement_session_url();
          if (
            (_(!!_, `Missing agreement session URL for result`, _),
            this.m_onShowAgreement)
          )
            this.m_onShowAgreement(_);
          else {
            let _ = location.href;
            window.location.href = `${_}&redir=${encodeURIComponent(_)}`;
          }
          return (
            this.m_onCompleteCallback({
              bSuccess: !1,
            }),
            _
          );
        } else
          (_(`Failed to poll auth session. Result: ${_}`),
            (this.m_eFailureState = 1));
        return (
          this.m_onCompleteCallback({
            bSuccess: !1,
          }),
          _
        );
      }
      let {
        new_challenge_url: _,
        new_client_id: _,
        refresh_token: _,
        access_token: _,
        account_name: _,
        had_remote_interaction: _,
        new_guard_data: _,
      } = _.Body().toObject();
      return (
        (this.m_bRemoteInteraction = !!_),
        _
          ? (_(
              !!_ && !!_,
              `Missing access token or account name with refresh token`,
            ),
            this.m_onCompleteCallback({
              bSuccess: !0,
              strRefreshToken: _,
              strAccessToken: _,
              strAccountName: _,
              strNewGuardData: _,
            }),
            _)
          : (_ && (this.m_strChallengeURL = _),
            _ && (this.m_strClientID = _),
            this.StartPolling(!1),
            _)
      );
    } catch (_) {
      return (
        _(`Failed to poll auth session. ${_}`),
        (this.m_eFailureState = 1),
        this.m_onCompleteCallback({
          bSuccess: !1,
        }),
        2
      );
    }
  }
  SetTokenToRevoke(_) {
    this.m_strTokenToRevoke = _;
  }
  GetFailureState() {
    return this.m_eFailureState;
  }
  GetExtendedErrorMessage() {
    return this.m_strExtendedErrorMessage;
  }
  BHadRemoteInteraction() {
    return this.m_bRemoteInteraction;
  }
  async GetDeviceDetails() {
    let _ = await this.m_onDeviceDetailsCallback();
    return _.fromObject(_);
  }
};
(_([_], _.prototype, `Subscribe`, null),
  _([_], _.prototype, `GetSnapshot`, null),
  _([_], _.prototype, `PollForUpdate`, null),
  _([_], _.prototype, `SetTokenToRevoke`, null));
function _(_) {
  let _ = new FormData();
  (_.append(`nonce`, _), _.append(`sessionid`, _(_) ?? ``));
  let _ = new URL(location.href),
    _ = new URLSearchParams(_.search);
  (_.has(`need_password`) &&
    (_.delete(`need_password`), (_.search = _.toString())),
    _.append(`redir`, _.toString()));
  let _ = `${_.LOGIN_BASE_URL}jwt/finalizelogin`;
  return _.default
    .post(_, _, {
      withCredentials: !0,
    })
    .then(
      (_) => {
        let { data: _ } = _;
        if (
          !_ ||
          !_.transfer_info ||
          !_.steamID ||
          !Array.isArray(_.transfer_info)
        )
          return (_(`Result of finalizelogin does not match expectations!`), 1);
        let { transfer_info: _, steamID: _, primary_domain: _ } = _;
        return Promise.all(
          _.map(({ url: _, params: _ }) =>
            _(_, {
              ..._,
              steamID: _,
            }),
          ),
        ).then(
          (_) => _(_, _),
          () => 2,
        );
      },
      () => (_(`Failed to finalize login. Initial call failed.`), 1),
    );
}
function _(_, _) {
  let _ = 0;
  return (
    _.forEach((_) => {
      _.bSuccess ||
        (_ && _.domain.toLowerCase() === _.toLowerCase()
          ? (_ = 1)
          : _ == 0 && (_ = 2));
    }),
    _
  );
}
async function _(_, _) {
  let _ = new URL(_),
    _ = !0;
  try {
    let _ = new FormData();
    Object.keys(_).forEach((_) => _.append(_, _[_]));
    let _ = await _.default.post(_, _, {
      withCredentials: !0,
      timeout: 1e4,
    });
    _.status === 200
      ? _.data.result !== 1 &&
        (_(`Transfer login to ${_.host} failed with result: ${_.data.result}`),
        (_ = !1))
      : (_(`Transfer login to ${_.host} failed with status code: ${_.status}`),
        (_ = !1));
  } catch (_) {
    (_(`Transfer login to ${_.host} failed: "${_}"`), (_ = !1));
  }
  return {
    bSuccess: _,
    domain: _.host,
  };
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            usage_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            confirmation_type: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            confirmation_action: {
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
      return `CTwoFactor_UsageEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sender_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sender_time: {
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
      return `CTwoFactor_Time_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.server_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            server_time: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            skew_tolerance_seconds: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            large_time_jink: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            probe_frequency_seconds: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            adjusted_time_probe_frequency_seconds: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            hint_probe_frequency_seconds: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sync_timeout: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            try_again_seconds: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            max_attempts: {
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
      return `CTwoFactor_Time_Response`;
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
            include: {
              _: 2,
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
      return `CTwoFactor_Status_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.state || _(_._()),
        _.Message.initialize(this, _, 0, -1, [16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            state: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            inactivation_reason: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            authenticator_type: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            authenticator_allowed: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            steamguard_scheme: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            token_gid: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            email_validated: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            device_identifier: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            time_created: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            revocation_attempts_remaining: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            classified_agent: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            allow_external_authenticator: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            time_transferred: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            version: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_seen_auth_token_id: {
              _: 15,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            usages: {
              _: 16,
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
      return `CTwoFactor_Status_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7], null));
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
            authenticator_time: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            serial_number: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            authenticator_type: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            device_identifier: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            http_headers: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            version: {
              _: 8,
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
      return `CTwoFactor_AddAuthenticator_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.shared_secret || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            shared_secret: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            serial_number: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            revocation_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            uri: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            server_time: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            account_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            token_gid: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            identity_secret: {
              _: 8,
              _: _.readBytes,
              _: _.writeBytes,
            },
            secret_1: {
              _: 9,
              _: _.readBytes,
              _: _.writeBytes,
            },
            status: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            phone_number_hint: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            confirm_type: {
              _: 12,
              _: _.readInt32,
              _: _.writeInt32,
            },
            next_step: {
              _: 13,
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
      return `CTwoFactor_AddAuthenticator_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
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
            authenticator_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            authenticator_time: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            activation_code: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            http_headers: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            validate_sms_code: {
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
      return `CTwoFactor_FinalizeAddAuthenticator_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            server_time: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            status: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            next_step: {
              _: 5,
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
      return `CTwoFactor_FinalizeAddAuthenticator_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.revocation_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            revocation_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            revocation_reason: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamguard_scheme: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            remove_all_steamguard_cookies: {
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
      return `CTwoFactor_RemoveAuthenticator_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            server_time: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            revocation_attempts_remaining: {
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
      return `CTwoFactor_RemoveAuthenticator_Response`;
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
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
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
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sms_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sms_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            generate_new_token: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            version: {
              _: 3,
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            caller_version: {
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
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.shared_secret || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            shared_secret: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            serial_number: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            revocation_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            uri: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            server_time: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            account_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            token_gid: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            identity_secret: {
              _: 8,
              _: _.readBytes,
              _: _.writeBytes,
            },
            secret_1: {
              _: 9,
              _: _.readBytes,
              _: _.writeBytes,
            },
            status: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            steamguard_scheme: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
              _: 12,
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
      return `CRemoveAuthenticatorViaChallengeContinue_Replacement_Token`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            replacement_token: {
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
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response`;
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
            version: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            signature: {
              _: 3,
              _: _.readBytes,
              _: _.writeBytes,
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
      return `CTwoFactor_UpdateTokenVersion_Request`;
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
      return `CTwoFactor_UpdateTokenVersion_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.QueryTime#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  _.QueryTime = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.QueryStatus#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.QueryStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.AddAuthenticator#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddAuthenticator = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.FinalizeAddAuthenticator#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.FinalizeAddAuthenticator = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.UpdateTokenVersion#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.UpdateTokenVersion = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.RemoveAuthenticator#1`, _(_, _, _), _, {
      ePrivilege: 9,
    });
  }
  _.RemoveAuthenticator = _;
  function _(_, _, _) {
    return _.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeStart#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 9,
      },
    );
  }
  _.RemoveAuthenticatorViaChallengeStart = _;
  function _(_, _, _) {
    return _.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeContinue#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 9,
      },
    );
  }
  _.RemoveAuthenticatorViaChallengeContinue = _;
})((_ ||= {}));
var _ = class extends _ {
  m_eStatusValue = 0;
  get m_eStatus() {
    return this.m_eStatusValue;
  }
  set m_eStatus(_) {
    ((this.m_eStatusValue = _), this.NotifyChanged());
  }
  m_steamid;
  m_strAccountName;
  m_strConfirmationAssociatedMessage = ``;
  m_bUsingCodeOverride = !1;
  m_strWeakAuthToken = ``;
  m_weakAuthWebInterface;
  m_onGetMachineAuth;
  m_replacementAuthenticator;
  m_strErrorReferenceValue = ``;
  get m_strErrorReference() {
    return this.m_strErrorReferenceValue;
  }
  set m_strErrorReference(_) {
    ((this.m_strErrorReferenceValue = _), this.NotifyChanged());
  }
  m_onLoginComplete;
  constructor(_) {
    (super(
      _.transport,
      (_) => this.onAuthComplete(_),
      _.onDeviceDetails,
      _.onShowAgreement,
    ),
      (this.m_onLoginComplete = _.onComplete),
      (this.m_onGetMachineAuth = _.onGetMachineAuth));
  }
  BuildSnapshot() {
    return {
      strAccountName: this.GetAccountName(),
      steamid: this.GetSteamID(),
      eFailureState: this.GetFailureState(),
      strExtendedErrorMessage: this.GetExtendedErrorMessage(),
      strErrorReference: this.GetErrorReference(),
      strConfirmationAssociatedMessage: this.GetConfirmationAssociatedMessage(),
      eStatus: this.GetStatus(),
      bCanGoBack: this.BCanGoBack(),
      replacementAuthenticator: this.GetReplacementAuthenticator(),
    };
  }
  async Start(_, _, _) {
    if (this.m_eStatus !== 0 && this.m_eStatus !== 2)
      return (
        _(
          `Cannot start an already started auth session. Create a new session instance.`,
        ),
        29
      );
    let _ = _.replace(/[^\x00-\x7F]/g, ``),
      _ = _.replace(/[^\x00-\x7F]/g, ``).slice(0, 64);
    if (!_.length || !_.length) return 8;
    if (
      ((this.m_eStatus = 1), (this.m_bUsingCodeOverride = !1), _ == `anonymous`)
    )
      return (this.SetFailureState(_.AnonymousLogin, _.EResult(12)), 12);
    try {
      let _ = await _(this.m_transport, _);
      if (!_)
        return (
          _(`Cannot start auth session without a valid RSA key`),
          this.SetFailureState(_.Network, _.EResult(20)),
          20
        );
      let _ = _(_, _),
        _ = _.Init(_);
      (_.SetEMsg(_),
        _.Body().set_account_name(_),
        _.Body().set_encrypted_password(_ ?? void 0),
        _.Body().set_encryption_timestamp(_.timestamp),
        _.Body().set_remember_login(!!_),
        _.Body().set_persistence(+!!_));
      let _ = _();
      _ && _.Body().set_website_id(_.WEBSITE_ID);
      try {
        _.Body().set_device_details(await this.GetDeviceDetails());
      } catch (_) {
        (_(`Failed to GetDeviceDetails`), _(_));
      }
      if (
        (_.Body().set_language(_(_.LANGUAGE)), this.m_onGetMachineAuth != null)
      ) {
        let _ = await this.m_onGetMachineAuth(_);
        _.eresult == 1 && _.Body().set_guard_data(_.data);
      }
      await this.m_transport.MakeReady();
      let _ = await _.BeginAuthSessionViaCredentials(this.m_transport, _);
      _.DEBUG_LogToConsole();
      let _ = _.GetEResult(),
        _ = _.Hdr().transport_error();
      if (_ !== 1)
        switch (_) {
          case 5:
            return ((this.m_eStatus = 2), _);
          case 20:
          case 3:
            return (this.SetFailureState(_.Network, _.EResult(20)), _);
          case 84:
            return (this.SetFailureState(_.RateLimitExceeded, _.EResult(_)), _);
          case 118: {
            let _ = _.Body().agreement_session_url();
            if (
              (_(!!_, `Missing agreement session URL for result`, _),
              this.m_onShowAgreement)
            )
              this.m_onShowAgreement(_);
            else {
              let _ = location.href;
              window.location.href = `${_}&redir=${encodeURIComponent(_)}`;
            }
            return (
              this.m_onCompleteCallback({
                bSuccess: !1,
              }),
              (this.m_eStatus = 0),
              _
            );
          }
          default:
            return (
              _(`Failed to start auth session. Result: ${_} Transport: ${_}`),
              this.SetFailureState(
                _.Generic,
                _.EResult(_),
                _.Body().extended_error_message(),
              ),
              this.m_onCompleteCallback({
                bSuccess: !1,
              }),
              _
            );
        }
      this.m_strAccountName = _;
      let {
        client_id: _,
        request_id: _,
        interval: _,
        allowed_confirmations: _ = [],
        steamid: _,
        weak_token: _,
      } = _.Body().toObject();
      if (
        (_(
          _ !== void 0 && !!_ && !!_,
          `Missing poll interval, client ID, or steamid for result`,
          _,
        ),
        (this.m_msPollInterval = _ * 1e3),
        (this.m_strClientID = _),
        (this.m_rgRequestID = _),
        (this.m_steamid = _),
        (this.m_strWeakAuthToken = _ ?? ``),
        _.find(({ confirmation_type: _ }) => _ === 6))
      ) {
        let _ = new FormData();
        (_.append(`clientid`, _), _.append(`steamid`, _));
        let _ = `${_.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
        try {
          if (
            (
              await _.default.post(_, _, {
                headers: {
                  "Content-Type": `multipart/form-data`,
                },
                withCredentials: !0,
              })
            ).data.result == 1
          )
            return ((this.m_eStatus = 4), this.StartPolling(!0), 1);
        } catch (_) {
          if (
            (_(`checkdevice ajax to ${_} failed: ${_.message}`),
            _ instanceof _.AxiosError)
          ) {
            let _ = _;
            return _.response
              ? (this.SetFailureState(
                  _.Network,
                  _.AjaxFailureWithCode(_.response.status),
                ),
                20)
              : (this.SetFailureState(_.Network, _.AjaxFailureNoCode()), 20);
          }
          return (this.SetFailureState(_.Network, _.EResult(79)), 79);
        }
      }
      let _ = _(
          _.map(
            ({ confirmation_type: _ }) => (
              _(
                _ !== void 0,
                `Missing confirmation type in allowed confirmations`,
              ),
              _
            ),
          ),
        ),
        _ = _.find(({ confirmation_type: _ }) => _ === _);
      switch (
        (_ &&
          _.associated_message &&
          (this.m_strConfirmationAssociatedMessage = _.associated_message),
        _)
      ) {
        case 1:
          return ((this.m_eStatus = 13), this.StartPolling(), _);
        case 2:
          this.m_eStatus = 3;
          break;
        case 5:
          ((this.m_eStatus = 4), this.StartPolling(!1));
          break;
        case 3:
          ((this.m_eStatus = 5), this.StartPolling(!1));
          break;
        case 4:
          ((this.m_eStatus = 6), this.StartPolling(!1));
      }
      return _;
    } catch (_) {
      return (
        _(`Failed to start auth session. Exception: ${JSON.stringify(_)}`),
        _(_),
        this.SetFailureState(_.Generic, _.FailedToStart()),
        this.m_onCompleteCallback({
          bSuccess: !1,
        }),
        2
      );
    }
  }
  Stop() {
    (this.StopPolling(), (this.m_eStatus = 16));
  }
  GetStatus() {
    return this.m_eStatus;
  }
  GetConfirmationAssociatedMessage() {
    return this.m_strConfirmationAssociatedMessage;
  }
  GetAccountName() {
    return this.m_strAccountName;
  }
  GetSteamID() {
    return this.m_steamid;
  }
  GetReplacementAuthenticator() {
    return this.m_replacementAuthenticator;
  }
  GetErrorReference() {
    return this.m_strErrorReference;
  }
  async SendSteamGuardCode(_, _ = !0) {
    if (_.length == 0) {
      switch (this.m_eStatus) {
        case 10:
          this.m_eStatus = 3;
          break;
        case 11:
          this.m_eStatus = 5;
          break;
        case 5:
        case 3:
          break;
        default:
          throw Error(`Attempted to clear code in invalid state`);
      }
      return Promise.resolve(1);
    }
    try {
      await this.m_transport.MakeReady();
      let _ = this.m_eStatus === 3 || this.m_eStatus === 10,
        _ = _.Init(_);
      (_.SetEMsg(_),
        _.Body().set_client_id(this.m_strClientID),
        _.Body().set_steamid(this.m_steamid),
        _.Body().set_code(_),
        _.Body().set_code_type(_ ? 2 : 3));
      let _ = await _.UpdateAuthSessionWithSteamGuardCode(this.m_transport, _),
        _ = _.GetEResult();
      if (_ !== 1) {
        if (!_)
          return (
            _(
              `Failed to automatically update session with local SG info. Result ${_}. Transport ${_.Hdr().transport_error()}`,
            ),
            _
          );
        switch (_) {
          case 65:
          case 88:
            return ((this.m_eStatus = _ ? 10 : 11), _);
          case 27:
            return (
              this.SetFailureState(_.Expired, _.EResult(_)),
              this.m_onCompleteCallback({
                bSuccess: !1,
              }),
              _
            );
          case 84:
            return (
              this.SetFailureState(_.RateLimitExceeded, _.EResult(_)),
              this.m_onCompleteCallback({
                bSuccess: !1,
              }),
              _
            );
          case 118: {
            let _ = _.Body().agreement_session_url();
            if (
              (_(!!_, `Missing agreement session URL for result`, _),
              this.m_onShowAgreement)
            )
              this.m_onShowAgreement(_);
            else {
              let _ = location.href;
              window.location.href = `${_}&redir=${encodeURIComponent(_)}`;
            }
            return (
              this.m_onCompleteCallback({
                bSuccess: !1,
              }),
              (this.m_eStatus = 0),
              _
            );
          }
          default:
            return (
              _(`Failed to update auth session with SG code. Result: ${_}`),
              this.SetFailureState(_.Generic, _.EResult(_)),
              this.m_onCompleteCallback({
                bSuccess: !1,
              }),
              _
            );
        }
      }
      return ((this.m_eStatus = 13), this.StartPolling(), _);
    } catch (_) {
      return (
        _(`Failed to update auth session with SG code. ${_}`),
        this.SetFailureState(_.Generic, _.FailedToAddCode()),
        this.m_onCompleteCallback({
          bSuccess: !1,
        }),
        2
      );
    }
  }
  UseCodeOverride() {
    switch (this.m_eStatus) {
      case 6:
        ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 5));
        return;
      case 4:
        ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 3));
        return;
      default:
        _(
          `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
        );
        return;
    }
  }
  CantAccessCode() {
    this.m_eStatus = 7;
  }
  async StartMoveAuthenticator() {
    this.m_weakAuthWebInterface = new _(
      _.WEBAPI_BASE_URL,
      this.m_strWeakAuthToken,
    );
    try {
      let _ = _.Init(_),
        _ = await _.RemoveAuthenticatorViaChallengeStart(
          this.m_weakAuthWebInterface.GetServiceTransport(),
          _,
        );
      _.GetEResult() == 1
        ? (this.m_eStatus = 8)
        : (_.DEBUG_LogToConsole(),
          _(
            `An unexpected error occured while adding an authenticator`,
            _.GetEResult(),
          ),
          this.SetFailureState(_.MoveAuthenticator, _.EResult(_.GetEResult())));
    } catch (_) {
      (_(`An unexpected error occured while moving an authenticator`, _),
        this.SetFailureState(_.MoveAuthenticator, _.EResult(2)));
    }
  }
  async ResendMoveCode() {
    _(
      !!this.m_weakAuthWebInterface,
      `Resending move code before StartMoveAuthenticator`,
    );
    let _ = _.Init(_),
      _ = await _.RemoveAuthenticatorViaChallengeStart(
        this.m_weakAuthWebInterface.GetServiceTransport(),
        _,
      );
    (_.GetEResult() != 1 &&
      (_.DEBUG_LogToConsole(),
      _(
        `An unexpected error occured while adding an authenticator`,
        _.GetEResult(),
      )),
      (this.m_eStatus = 8));
  }
  async FinishMoveAuthenticator(_) {
    _(
      !!this.m_weakAuthWebInterface,
      `Finishing authenticator move before StartMoveAuthenticator`,
    );
    let _ = _.Init(_);
    (_.Body().set_sms_code(_),
      _.Body().set_generate_new_token(!0),
      _.Body().set_version(2));
    let _ = await _.RemoveAuthenticatorViaChallengeContinue(
      this.m_weakAuthWebInterface.GetServiceTransport(),
      _,
    );
    if (_.GetEResult() == 94) this.m_eStatus = 12;
    else if (!_.Body().success())
      (_.DEBUG_LogToConsole(),
        _(
          `Error when calling RemoveAuthenticatorViaChallengeContinue`,
          _.GetEResult(),
        ),
        this.SetFailureState(_.MoveAuthenticator, _.EResult(_.GetEResult())));
    else {
      _.DEBUG_LogToConsole();
      let _ = _.Body().replacement_token();
      (_(!!_, `Missing replacement token on successful authenticator move`),
        (this.m_replacementAuthenticator = _(_.toObject())),
        (this.m_eStatus = 9),
        (this.m_bUsingCodeOverride = !1));
    }
  }
  FinishMoveRecovery() {
    this.m_eStatus = 5;
  }
  BCanGoBack() {
    switch (this.m_eStatus) {
      case 5:
      case 11:
      case 3:
      case 10:
      case 6:
      case 4:
      case 7:
      case 8:
      case 12:
        return !0;
      default:
        return !1;
    }
  }
  GoBack() {
    switch (this.m_eStatus) {
      case 6:
      case 4:
        this.m_eStatus = 0;
        break;
      case 5:
      case 11:
        this.m_eStatus = this.m_bUsingCodeOverride ? 6 : 0;
        break;
      case 7:
      case 8:
      case 12:
        this.m_eStatus = (this.m_bUsingCodeOverride, 5);
        break;
      case 3:
      case 10:
        this.m_eStatus = this.m_bUsingCodeOverride ? 4 : 0;
        break;
      default:
        _(
          `Don't know how to GoBack from login session status ${this.m_eStatus}`,
        );
        return;
    }
  }
  SetFailureState(_, _, _ = ``) {
    ((this.m_eStatus = 15),
      (this.m_eFailureState = _),
      (this.m_strErrorReference = _),
      (this.m_strExtendedErrorMessage = _));
  }
  onAuthComplete = (_) => {
    this.m_eStatus = _.bSuccess ? 14 : 15;
    let _;
    (_.bSuccess
      ? (_(
          !!this.m_strAccountName && !!this.m_steamid,
          `Missing account name or steamid on auth success`,
        ),
        (_ = {
          ..._,
          strAccountName: this.m_strAccountName,
          steamid: this.m_steamid,
        }))
      : (_ = {
          bSuccess: !1,
        }),
      this.m_onLoginComplete && this.m_onLoginComplete(_));
  };
  SetOnLoginComplete(_) {
    this.m_onLoginComplete = _;
  }
};
(_([_], _.prototype, `Start`, null),
  _([_], _.prototype, `SendSteamGuardCode`, null),
  _([_], _.prototype, `UseCodeOverride`, null),
  _([_], _.prototype, `CantAccessCode`, null),
  _([_], _.prototype, `StartMoveAuthenticator`, null),
  _([_], _.prototype, `ResendMoveCode`, null),
  _([_], _.prototype, `FinishMoveAuthenticator`, null),
  _([_], _.prototype, `FinishMoveRecovery`, null),
  _([_], _.prototype, `GoBack`, null),
  _([_], _.prototype, `SetOnLoginComplete`, null));
async function _(_, _) {
  let _ = _.Init(_);
  (_.Body().set_account_name(_), _.SetEMsg(_));
  try {
    await _.MakeReady();
    let _ = await _.GetPasswordRSAPublicKey(_, _);
    if ((_.DEBUG_LogToConsole(), _.GetEResult() !== 1))
      return (_(`Failed to get RSA key with EResult: ${_.GetEResult()}`), null);
    let {
      publickey_exp: _,
      publickey_mod: _,
      timestamp: _,
    } = _.Body().toObject();
    return !_ || !_ || !_
      ? (_(
          `Missing expected field in RSA Key: ${JSON.stringify({
            publickey_exp: _,
            publickey_mod: _,
            timestamp: _,
          })}`,
        ),
        null)
      : {
          publickey_exp: _,
          publickey_mod: _,
          timestamp: _,
        };
  } catch (_) {
    return (_(`Failed to get RSA key: ${JSON.stringify(_)}`), null);
  }
}
var _ = [4, 3, 2, 1, 0, 5].reduce((_, _, _) => ((_[_] = _), _), {});
function _(_) {
  let _ = _[0] || 0;
  return (_.length > 1 && (_ = _.sort((_, _) => _[_] - _[_])[0]), _);
}
function _(_) {
  let [_, _] = (0, _.useState)(() => new _(_));
  return (
    (0, _.useEffect)(() => {
      _?.SetOnLoginComplete(_.onComplete);
    }, [_, _.onComplete]),
    {
      ...(0, _.useSyncExternalStore)(_.Subscribe, _.GetSnapshot, _.GetSnapshot),
      start: _.Start,
      addCode: _.SendSteamGuardCode,
      useCodeOverride: _.UseCodeOverride,
      cantAccessCode: _.CantAccessCode,
      startMoveAuthenticator: _.StartMoveAuthenticator,
      resendMoveCode: _.ResendMoveCode,
      finishMoveAuthenticator: _.FinishMoveAuthenticator,
      finishMoveRecovery: _.FinishMoveRecovery,
      reset: () => _(new _(_)),
      goBack: _.GoBack,
      setTokenToRevoke: _.SetTokenToRevoke,
    }
  );
}
function _(_) {
  return _ ? 7 : 5;
}
function _(_, _) {
  return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(_) && _.length <= _(_);
}
function _(_, _) {
  return _(_, _) && _.length === _(_);
}
var _ = {
    EResult: (_) => `e${_}`,
    FailedToStart: () => `c-fts`,
    FailedToAddCode: () => `c-ftac`,
    AjaxFailureNoCode: () => `af`,
    AjaxFailureWithCode: (_) => `af-${_}`,
  },
  _ = class extends _ {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(_) {
      ((this.m_eStatusValue = _), this.NotifyChanged());
    }
    m_bPreloaded = !1;
    constructor(_) {
      (super(
        _.transport,
        (_) => {
          ((this.m_eStatus = _.bSuccess ? 3 : 4), _.onComplete(_));
        },
        _.onDeviceDetails,
      ),
        _.preloaded &&
          ((this.m_eStatusValue = 2),
          (this.m_strClientID = _.preloaded.strClientID),
          (this.m_strChallengeURL = _.preloaded.strChallengeURL),
          (this.m_msPollInterval = _.preloaded.msPollInterval),
          (this.m_rgRequestID = _.preloaded.rgRequestID),
          (this.m_bPreloaded = !0)));
    }
    BuildSnapshot() {
      return {
        strChallengeURL: this.GetChallengeURL(),
        strClientID: this.GetClientID(),
        eFailureState: this.GetFailureState(),
        eStatus: this.GetStatus(),
        bHadRemoteInteraction: this.BHadRemoteInteraction(),
      };
    }
    async Start() {
      if (this.m_bPreloaded && (this.m_eStatus === 2 || this.m_eStatus === 5))
        return (
          (this.m_eStatus = 2),
          this.m_transport.MakeReady(),
          this.StartPolling(!1),
          1
        );
      if (this.m_eStatus !== 0)
        return (
          console.error(
            `Cannot start an already started auth session. Create a new session instance.`,
          ),
          2
        );
      this.m_eStatus = 1;
      try {
        await this.m_transport.MakeReady();
        let _ = _.Init(_);
        _.SetEMsg(_);
        try {
          _.Body().set_device_details(await this.GetDeviceDetails());
        } catch (_) {
          (console.error(`Failed to GetDeviceDetails`), console.log(_));
        }
        let _ = _();
        _ && _.Body().set_website_id(_.WEBSITE_ID);
        let _ = await _.BeginAuthSessionViaQR(this.m_transport, _),
          _ = _.GetEResult(),
          _ = _.Hdr().transport_error();
        if (_ !== 1)
          return (
            console.error(
              `Failed to start auth session. Result: ${_} Transport: ${_}`,
            ),
            (this.m_eFailureState = _.Generic),
            this.m_onCompleteCallback({
              bSuccess: !1,
            }),
            _
          );
        let {
          client_id: _,
          challenge_url: _,
          interval: _,
          request_id: _,
        } = _.Body().toObject();
        return (
          _(_ !== void 0, `Missing poll interval for QR auth session`),
          (this.m_strClientID = _),
          (this.m_strChallengeURL = _),
          (this.m_msPollInterval = _ * 1e3),
          (this.m_rgRequestID = _),
          (this.m_eStatus = 2),
          this.StartPolling(!1),
          _
        );
      } catch (_) {
        return (
          console.error(`Failed to start auth session: ${JSON.stringify(_)}`),
          (this.m_eFailureState = _.Generic),
          this.m_onCompleteCallback({
            bSuccess: !1,
          }),
          2
        );
      }
    }
    Stop() {
      (this.StopPolling(), (this.m_eStatus = 5));
    }
    GetChallengeURL() {
      return this.m_strChallengeURL;
    }
    GetClientID() {
      return this.m_strClientID;
    }
    GetStatus() {
      return this.m_eStatus;
    }
  };
function _(_) {
  let [_, _] = (0, _.useState)(() => new _(_));
  return (
    (0, _.useEffect)(
      () => (
        _.Start(),
        () => {
          _.Stop();
        }
      ),
      [_],
    ),
    {
      ...(0, _.useSyncExternalStore)(_.Subscribe, _.GetSnapshot, _.GetSnapshot),
      reset: () =>
        _(
          new _({
            ..._,
            preloaded: void 0,
          }),
        ),
      setTokenToRevoke: _.SetTokenToRevoke,
    }
  );
}
function _(_) {
  switch (_) {
    case 4:
      return `dev`;
    case 2:
      return `beta`;
    case 1:
      return `public`;
    default:
      return `unknown`;
  }
}
async function _() {
  let [_, _, _, _] = await Promise.all([
    SteamClient.System.GetOSType(),
    SteamClient.System.GetSystemInfo(),
    SteamClient?.Auth?.GetLocalHostname?.() ?? ``,
    SteamClient?.Auth?.GetMachineID?.() ?? void 0,
  ]);
  return {
    os_type: _,
    device_friendly_name: _,
    machine_id: _,
    platform_type: 1,
    gaming_device_type: _.eGamingDeviceType,
  };
}
async function _() {
  return {
    device_friendly_name: window.navigator.userAgent,
    platform_type: 2,
  };
}
var _ = `Login_RememberMeSetting`;
function _(_) {
  let { onSuccess: _, secureComputer: _ = !0, isProbablySharedPC: _ = !1 } = _,
    _ = (0, _.useCallback)(
      (_) => {
        if (_.bSuccess) {
          let {
            strRefreshToken: _,
            strAccessToken: _,
            strAccountName: _,
            strNewGuardData: _,
          } = _;
          _({
            strRefreshToken: _,
            strAccessToken: _,
            strAccountName: _,
            strNewGuardData: _,
          });
        }
      },
      [_],
    ),
    _ = _({
      transport: _.transport,
      onComplete: _,
      onDeviceDetails: _.onDeviceDetails,
      onGetMachineAuth: _.onGetMachineAuth,
      onShowAgreement: _.onShowAgreement,
    }),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(
      _.refreshInfo?.account_name ?? _.defaultAccountName ?? ``,
    ),
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(_ && !_);
  (0, _.useLayoutEffect)(() => {
    typeof localStorage < `u` && localStorage.getItem(_) == `0` && _(!1);
  }, []);
  let _ = _.eStatus !== 0 && _.eStatus !== 1 && _.eStatus !== 2;
  return (
    (0, _.useEffect)(() => {
      _.refreshInfo?.login_token_id &&
        _.setTokenToRevoke(_.refreshInfo.login_token_id);
    }, [_.refreshInfo, _]),
    {
      password: _,
      onComplete: _,
      eQRStatus: _,
      onQRStatusChange: _,
      strAccountName: _,
      onAccountNameChange: _,
      strPassword: _,
      onPasswordChange: _,
      bRememberMe: _,
      onRememberMeChange: (_) => {
        (_(_), localStorage?.setItem(_, _ ? `1` : `0`));
      },
      onPasswordSubmit: () =>
        !_ || !_ ? Promise.resolve(8) : _.start(_, _, _),
      bInPasswordFlow: _,
      onTryOffline: () => {
        (_(`Logging in offline with username ${_}`),
          SteamClient.User.SetLoginCredentials(_, _, _),
          SteamClient.User.StartOffline(!0));
      },
    }
  );
}
function _(_, _ = ``) {
  let _ = {
    title: ``,
    description: ``,
  };
  switch (_) {
    case _.None:
      return {
        title: ``,
        description: ``,
      };
    case _.Expired:
      _ = {
        title: _.Localize(`#Login_Error_Expired_Title`),
        description: _.Localize(`#Login_Error_Expired_Description`),
      };
      break;
    case _.Network:
      _ = {
        title: _.Localize(`#Login_Error_Network_Title`),
        description: _.Localize(`#Login_Error_Network_Description`),
      };
      break;
    case _.MoveAuthenticator:
      _ = {
        title: _.Localize(`#Error_Generic`),
        description: _.Localize(`#Login_Error_MoveAuthenticator_Description`),
      };
      break;
    case _.RateLimitExceeded:
      _ = {
        title: _.Localize(`#Login_Error_RateLimit_Title`),
        description: _.Localize(`#Login_Error_RateLimit_Description`),
      };
      break;
    case _.AnonymousLogin:
      _ = {
        title: _.Localize(`#Login_Error_Anonymous_Title`),
        description: _.Localize(`#Login_Error_Anonymous_Description`),
      };
      break;
    case _.Generic:
    default:
      _ = {
        title: _.Localize(`#Error_Generic`),
        description: _.Localize(`#Login_Error_Default_Description`),
      };
  }
  return (_ && (_.description = _), _);
}
var _ = `ZhRwp4aSW-8-`,
  _ = `QV15rhpdkBI-`,
  _ = `StondD-Afl4-`,
  _ = `zENCcMUG1lQ-`,
  _ = `_3M1tVbU6uAM-`,
  _ = `rQS7qJ7cGq8-`,
  _ = `WlYK7flUyzk-`,
  _ = `p0lt1P2vwbI-`,
  _ = `Lw5H9Bgq0ww-`,
  _ = `HD-XkY2oIS0-`,
  _ = `t972389vN-Y-`,
  _ = `_5U7-qgmzcvo-`,
  _ = `-HdQ6mrZKtA-`,
  _ = `Tr28R97XrnU-`,
  _ = `_17vA1ePJ-dw-`,
  _ = `hYiUBswjB8E-`,
  _ = `l-m0O8YsKvg-`,
  _ = `WNU0cJCzPqA-`,
  _ = `sljnSz9B7VM-`,
  _ = `KE-CI3fCrt4-`,
  _ = `F2-23fRyFdg-`,
  _ = `_9ehBJOSNpjY-`,
  _ = `H2e67uoFTZo-`,
  _ = `_0O9XQ4NvNgg-`,
  _ = `SJJMt5-Nlqc-`,
  _ = `_5HbDhenxKKA-`,
  _ = `JRre8-r--eY-`,
  _ = `-wYn7tUZ-Qc-`,
  _ = `Y0ZBzWFxTiU-`,
  _ = `_7xRNYgociu0-`,
  _ = `Rq9MD5lNpxw-`,
  _ = `aDxXoSR2-2M-`,
  _ = `A44IVG2oXaA-`,
  _ = `DJzHz8vrR58-`,
  _ = `_6uA-qQnXgqs-`,
  _ = `zS2JKIAoqLs-`,
  _ = `g2m1tomZf5Y-`,
  _ = `DSy9L5eaj5o-`,
  _ = `riI5q82cESo-`,
  _ = `gjs7dr1G9B4-`,
  _ = `_8tHxNur8iVQ-`,
  _ = `QDXFvQ1VRGs-`,
  _ = `iI4-KPYmClQ-`,
  _ = `FCVI1-X5QXI-`,
  _ = `_-7t7WL8ib4U-`,
  _ = `_4cSRMvOczro-`,
  _ = `urTXd9G8cNM-`,
  _ = `tk1GT5on9gQ-`,
  _ = `EUZmbwRThEY-`,
  _ = `koI0X-poWGo-`,
  _ = `ik9s3tnOv3M-`,
  _ = `e5FVer86lmY-`,
  _ = `O8iS-RxIxMc-`,
  _ = `EWu0dHs0CgM-`,
  _ = `G3u-Es6yEe8-`,
  _ = `nr0J1UoEl8s-`,
  _ = `_19NDBszdpt8-`,
  _ = `_4p53BqicMtw-`,
  _ = `LJXTU0Fs0Mc-`,
  _ = `NoRFObwpjo0-`,
  _ = `u95III-ojfU-`,
  _ = `dfnWU-vLcuI-`,
  _ = `-iy7zxvavFA-`,
  _ = `_0wUoYmLYupw-`,
  _ = `V6VD9IECTcA-`,
  _ = `eDuVIFYKU84-`,
  _ = `sH-b0kW7QCY-`,
  _ = `z8NjGLKg3z0-`,
  _ = `_4pLGekYMMsE-`,
  _ = `X1k4Ip6MIC8-`,
  _ = `qeijEUL7oHU-`,
  _ = `SoYZJobaqlk-`,
  _ = `KQdWHvm1kCY-`;
function _(_) {
  let {
    length: _,
    value: _,
    onChange: _,
    onPaste: _,
    tone: _,
    autoFocus: _,
    disabled: _,
    loading: _,
    backupCode: _,
    allowCharacter: _,
  } = _;
  (0, _.useEffect)(() => {
    _ && _();
  }, []);
  let _ = (0, _.useRef)([]),
    _ = () => _(_.current.map((_) => _.value)),
    _ = (_) => {
      let _ = _.target.value;
      if (_ && _ && !_(_)) return;
      let _ = _.target.nextElementSibling;
      (_.target.value && _ && _.focus(), _());
    },
    _ = (_) => {
      _.current.findIndex((_) => !!_.value) === -1
        ? _.current[0]?.select()
        : _.target.select();
    },
    _ = () => {
      let _ = _.current.find((_) => !_.value);
      _ ? _.focus() : _.current[_.current.length - 1].focus();
    },
    _ = (_) => {
      let _ = _.target;
      if (_.key === `Backspace` || _.key === `Delete`) {
        let _ =
          _.key === `Backspace`
            ? _.previousElementSibling
            : _.nextElementSibling;
        _.value === `` &&
          _ &&
          ((_.value = ``), _.focus(), _.preventDefault(), _());
      } else if (
        _.key === `ArrowLeft` ||
        _.key === `ArrowRight` ||
        _.key === `ArrowUp` ||
        _.key === `ArrowDown`
      ) {
        let _ =
          _.key === `ArrowLeft` || _.key === `ArrowUp`
            ? _.previousElementSibling
            : _.nextElementSibling;
        _ && (_.focus(), _.preventDefault());
      }
    },
    _ = (_) => {
      let _ = _.clipboardData.getData(`Text`),
        _ = _.target,
        _ = 0;
      for (; _ && _ < _.length;)
        (_.focus(), (_.value = _.charAt(_)), (_ = _.nextElementSibling), _++);
      (_(), _.preventDefault(), _ && _());
    },
    _ = [];
  for (let _ = 0; _ < _; _++)
    _.push(
      (0, _.jsx)(
        _,
        {
          noFocusRing: !0,
          type: `text`,
          maxLength: 1,
          ref: (_) => {
            _ && (_.current[_] = _);
          },
          onChange: _,
          onFocus: _,
          onClick: (_) => _.stopPropagation(),
          onKeyDown: _,
          onPaste: _,
          value: _[_] ? _[_][0] : ``,
          autoComplete: `none`,
          autoFocus: _ === 0 && _,
          disabled: _ || _,
          className: _,
        },
        _,
      ),
    );
  return (0, _.jsxs)(_, {
    className: (0, _.default)(
      _,
      _ === `danger` && `faQ-XEuPsJg-`,
      _ && `mIAxC7mq9-I-`,
      _ && `eQsO7wBQCBc-`,
    ),
    onClick: _,
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `_4vkP-m3oW-0-`,
          children: (0, _.jsx)(_, {
            size: `small`,
          }),
        }),
      _,
    ],
  });
}
function _() {
  let _ = `svgid_` + (0, _.useId)().replace(/[^A-Za-z0-9_-]/g, ``);
  return [_, `url(#${_})`];
}
function _(_) {
  let [_, _] = _();
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 15 23`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`g`, {
        clipPath: _,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M6.9955 11.5L15 3.4955L11.5045 -1.52793e-07L0.00450275 11.5L11.5045 23L15 19.5045L6.9955 11.5Z`,
        }),
      }),
      (0, _.jsx)(`defs`, {
        children: (0, _.jsx)(`clipPath`, {
          _: _,
          children: (0, _.jsx)(`rect`, {
            fill: `currentColor`,
            width: `15`,
            height: `23`,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { color: _ = `#fff`, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Check`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    strokeWidth: `24`,
    stroke: _,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    strokeMiterlimit: `10`,
    ..._,
    children: (0, _.jsx)(`polyline`, {
      fill: `none`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var _ = new URL(`images/login_mobile_auth.png`, import.meta.url).href,
  _ = _((_, _) => {
    _.exports = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8,
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_) {
      ((this.mode = _.MODE_8BIT_BYTE), (this.data = _));
    }
    ((_.prototype = {
      getLength: function (_) {
        return this.data.length;
      },
      write: function (_) {
        for (var _ = 0; _ < this.data.length; _++)
          _.put(this.data.charCodeAt(_), 8);
      },
    }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    _.exports = {
      _: 1,
      _: 0,
      _: 3,
      _: 2,
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_, _) {
      ((this.totalCount = _), (this.dataCount = _));
    }
    ((_.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16],
    ]),
      (_.getRSBlocks = function (_, _) {
        var _ = _.getRsBlockTable(_, _);
        if (_ == null)
          throw Error(
            `bad rs block @ typeNumber:` + _ + `/errorCorrectLevel:` + _,
          );
        for (var _ = _.length / 3, _ = [], _ = 0; _ < _; _++)
          for (
            var _ = _[_ * 3 + 0], _ = _[_ * 3 + 1], _ = _[_ * 3 + 2], _ = 0;
            _ < _;
            _++
          )
            _.push(new _(_, _));
        return _;
      }),
      (_.getRsBlockTable = function (_, _) {
        switch (_) {
          case _._:
            return _.RS_BLOCK_TABLE[(_ - 1) * 4 + 0];
          case _._:
            return _.RS_BLOCK_TABLE[(_ - 1) * 4 + 1];
          case _._:
            return _.RS_BLOCK_TABLE[(_ - 1) * 4 + 2];
          case _._:
            return _.RS_BLOCK_TABLE[(_ - 1) * 4 + 3];
          default:
            return;
        }
      }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    function _() {
      ((this.buffer = []), (this.length = 0));
    }
    ((_.prototype = {
      get: function (_) {
        var _ = Math.floor(_ / 8);
        return ((this.buffer[_] >>> (7 - (_ % 8))) & 1) == 1;
      },
      put: function (_, _) {
        for (var _ = 0; _ < _; _++) this.putBit(((_ >>> (_ - _ - 1)) & 1) == 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (_) {
        var _ = Math.floor(this.length / 8);
        (this.buffer.length <= _ && this.buffer.push(0),
          _ && (this.buffer[_] |= 128 >>> (this.length % 8)),
          this.length++);
      },
    }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    for (
      var _ = {
          glog: function (_) {
            if (_ < 1) throw Error(`glog(` + _ + `)`);
            return _.LOG_TABLE[_];
          },
          gexp: function (_) {
            for (; _ < 0;) _ += 255;
            for (; _ >= 256;) _ -= 255;
            return _.EXP_TABLE[_];
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256),
        },
        _ = 0;
      _ < 8;
      _++
    )
      _.EXP_TABLE[_] = 1 << _;
    for (var _ = 8; _ < 256; _++)
      _.EXP_TABLE[_] =
        _.EXP_TABLE[_ - 4] ^
        _.EXP_TABLE[_ - 5] ^
        _.EXP_TABLE[_ - 6] ^
        _.EXP_TABLE[_ - 8];
    for (var _ = 0; _ < 255; _++) _.LOG_TABLE[_.EXP_TABLE[_]] = _;
    _.exports = _;
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_, _) {
      if (_.length == null) throw Error(_.length + `/` + _);
      for (var _ = 0; _ < _.length && _[_] == 0;) _++;
      this.num = Array(_.length - _ + _);
      for (var _ = 0; _ < _.length - _; _++) this.num[_] = _[_ + _];
    }
    ((_.prototype = {
      get: function (_) {
        return this.num[_];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (_) {
        for (
          var _ = Array(this.getLength() + _.getLength() - 1), _ = 0;
          _ < this.getLength();
          _++
        )
          for (var _ = 0; _ < _.getLength(); _++)
            _[_ + _] ^= _.gexp(_.glog(this.get(_)) + _.glog(_.get(_)));
        return new _(_, 0);
      },
      mod: function (_) {
        if (this.getLength() - _.getLength() < 0) return this;
        for (
          var _ = _.glog(this.get(0)) - _.glog(_.get(0)),
            _ = Array(this.getLength()),
            _ = 0;
          _ < this.getLength();
          _++
        )
          _[_] = this.get(_);
        for (var _ = 0; _ < _.getLength(); _++)
          _[_] ^= _.gexp(_.glog(_.get(_)) + _);
        return new _(_, 0).mod(_);
      },
    }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      },
      _ = {
        PATTERN_POSITION_TABLE: [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170],
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (_) {
          for (var _ = _ << 10; _.getBCHDigit(_) - _.getBCHDigit(_.G15) >= 0;)
            _ ^= _.G15 << (_.getBCHDigit(_) - _.getBCHDigit(_.G15));
          return ((_ << 10) | _) ^ _.G15_MASK;
        },
        getBCHTypeNumber: function (_) {
          for (var _ = _ << 12; _.getBCHDigit(_) - _.getBCHDigit(_.G18) >= 0;)
            _ ^= _.G18 << (_.getBCHDigit(_) - _.getBCHDigit(_.G18));
          return (_ << 12) | _;
        },
        getBCHDigit: function (_) {
          for (var _ = 0; _ != 0;) (_++, (_ >>>= 1));
          return _;
        },
        getPatternPosition: function (_) {
          return _.PATTERN_POSITION_TABLE[_ - 1];
        },
        getMask: function (_, _, _) {
          switch (_) {
            case _.PATTERN000:
              return (_ + _) % 2 == 0;
            case _.PATTERN001:
              return _ % 2 == 0;
            case _.PATTERN010:
              return _ % 3 == 0;
            case _.PATTERN011:
              return (_ + _) % 3 == 0;
            case _.PATTERN100:
              return (Math.floor(_ / 2) + Math.floor(_ / 3)) % 2 == 0;
            case _.PATTERN101:
              return ((_ * _) % 2) + ((_ * _) % 3) == 0;
            case _.PATTERN110:
              return (((_ * _) % 2) + ((_ * _) % 3)) % 2 == 0;
            case _.PATTERN111:
              return (((_ * _) % 3) + ((_ + _) % 2)) % 2 == 0;
            default:
              throw Error(`bad maskPattern:` + _);
          }
        },
        getErrorCorrectPolynomial: function (_) {
          for (var _ = new _([1], 0), _ = 0; _ < _; _++)
            _ = _.multiply(new _([1, _.gexp(_)], 0));
          return _;
        },
        getLengthInBits: function (_, _) {
          if (1 <= _ && _ < 10)
            switch (_) {
              case _.MODE_NUMBER:
                return 10;
              case _.MODE_ALPHA_NUM:
                return 9;
              case _.MODE_8BIT_BYTE:
                return 8;
              case _.MODE_KANJI:
                return 8;
              default:
                throw Error(`mode:` + _);
            }
          else if (_ < 27)
            switch (_) {
              case _.MODE_NUMBER:
                return 12;
              case _.MODE_ALPHA_NUM:
                return 11;
              case _.MODE_8BIT_BYTE:
                return 16;
              case _.MODE_KANJI:
                return 10;
              default:
                throw Error(`mode:` + _);
            }
          else if (_ < 41)
            switch (_) {
              case _.MODE_NUMBER:
                return 14;
              case _.MODE_ALPHA_NUM:
                return 13;
              case _.MODE_8BIT_BYTE:
                return 16;
              case _.MODE_KANJI:
                return 12;
              default:
                throw Error(`mode:` + _);
            }
          else throw Error(`type:` + _);
        },
        getLostPoint: function (_) {
          for (var _ = _.getModuleCount(), _ = 0, _ = 0; _ < _; _++)
            for (var _ = 0; _ < _; _++) {
              for (var _ = 0, _ = _.isDark(_, _), _ = -1; _ <= 1; _++)
                if (!(_ + _ < 0 || _ <= _ + _))
                  for (var _ = -1; _ <= 1; _++)
                    _ + _ < 0 ||
                      _ <= _ + _ ||
                      ((_ != 0 || _ != 0) &&
                        _ == _.isDark(_ + _, _ + _) &&
                        _++);
              _ > 5 && (_ += 3 + _ - 5);
            }
          for (var _ = 0; _ < _ - 1; _++)
            for (var _ = 0; _ < _ - 1; _++) {
              var _ = 0;
              (_.isDark(_, _) && _++,
                _.isDark(_ + 1, _) && _++,
                _.isDark(_, _ + 1) && _++,
                _.isDark(_ + 1, _ + 1) && _++,
                (_ == 0 || _ == 4) && (_ += 3));
            }
          for (var _ = 0; _ < _; _++)
            for (var _ = 0; _ < _ - 6; _++)
              _.isDark(_, _) &&
                !_.isDark(_, _ + 1) &&
                _.isDark(_, _ + 2) &&
                _.isDark(_, _ + 3) &&
                _.isDark(_, _ + 4) &&
                !_.isDark(_, _ + 5) &&
                _.isDark(_, _ + 6) &&
                (_ += 40);
          for (var _ = 0; _ < _; _++)
            for (var _ = 0; _ < _ - 6; _++)
              _.isDark(_, _) &&
                !_.isDark(_ + 1, _) &&
                _.isDark(_ + 2, _) &&
                _.isDark(_ + 3, _) &&
                _.isDark(_ + 4, _) &&
                !_.isDark(_ + 5, _) &&
                _.isDark(_ + 6, _) &&
                (_ += 40);
          for (var _ = 0, _ = 0; _ < _; _++)
            for (var _ = 0; _ < _; _++) _.isDark(_, _) && _++;
          var _ = Math.abs((100 * _) / _ / _ - 50) / 5;
          return ((_ += _ * 10), _);
        },
      };
    _.exports = _;
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _) {
      ((this.typeNumber = _),
        (this.errorCorrectLevel = _),
        (this.modules = null),
        (this.moduleCount = 0),
        (this.dataCache = null),
        (this.dataList = []));
    }
    var _ = _.prototype;
    ((_.addData = function (_) {
      var _ = new _(_);
      (this.dataList.push(_), (this.dataCache = null));
    }),
      (_.isDark = function (_, _) {
        if (_ < 0 || this.moduleCount <= _ || _ < 0 || this.moduleCount <= _)
          throw Error(_ + `,` + _);
        return this.modules[_][_];
      }),
      (_.getModuleCount = function () {
        return this.moduleCount;
      }),
      (_.make = function () {
        if (this.typeNumber < 1) {
          var _ = 1;
          for (_ = 1; _ < 40; _++) {
            for (
              var _ = _.getRSBlocks(_, this.errorCorrectLevel),
                _ = new _(),
                _ = 0,
                _ = 0;
              _ < _.length;
              _++
            )
              _ += _[_].dataCount;
            for (var _ = 0; _ < this.dataList.length; _++) {
              var _ = this.dataList[_];
              (_.put(_.mode, 4),
                _.put(_.getLength(), _.getLengthInBits(_.mode, _)),
                _.write(_));
            }
            if (_.getLengthInBits() <= _ * 8) break;
          }
          this.typeNumber = _;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
      }),
      (_.makeImpl = function (_, _) {
        ((this.moduleCount = this.typeNumber * 4 + 17),
          (this.modules = Array(this.moduleCount)));
        for (var _ = 0; _ < this.moduleCount; _++) {
          this.modules[_] = Array(this.moduleCount);
          for (var _ = 0; _ < this.moduleCount; _++) this.modules[_][_] = null;
        }
        (this.setupPositionProbePattern(0, 0),
          this.setupPositionProbePattern(this.moduleCount - 7, 0),
          this.setupPositionProbePattern(0, this.moduleCount - 7),
          this.setupPositionAdjustPattern(),
          this.setupTimingPattern(),
          this.setupTypeInfo(_, _),
          this.typeNumber >= 7 && this.setupTypeNumber(_),
          (this.dataCache ??= _.createData(
            this.typeNumber,
            this.errorCorrectLevel,
            this.dataList,
          )),
          this.mapData(this.dataCache, _));
      }),
      (_.setupPositionProbePattern = function (_, _) {
        for (var _ = -1; _ <= 7; _++)
          if (!(_ + _ <= -1 || this.moduleCount <= _ + _))
            for (var _ = -1; _ <= 7; _++)
              _ + _ <= -1 ||
                this.moduleCount <= _ + _ ||
                ((0 <= _ && _ <= 6 && (_ == 0 || _ == 6)) ||
                (0 <= _ && _ <= 6 && (_ == 0 || _ == 6)) ||
                (2 <= _ && _ <= 4 && 2 <= _ && _ <= 4)
                  ? (this.modules[_ + _][_ + _] = !0)
                  : (this.modules[_ + _][_ + _] = !1));
      }),
      (_.getBestMaskPattern = function () {
        for (var _ = 0, _ = 0, _ = 0; _ < 8; _++) {
          this.makeImpl(!0, _);
          var _ = _.getLostPoint(this);
          (_ == 0 || _ > _) && ((_ = _), (_ = _));
        }
        return _;
      }),
      (_.createMovieClip = function (_, _, _) {
        var _ = _.createEmptyMovieClip(_, _),
          _ = 1;
        this.make();
        for (var _ = 0; _ < this.modules.length; _++)
          for (var _ = _ * _, _ = 0; _ < this.modules[_].length; _++) {
            var _ = _ * _;
            this.modules[_][_] &&
              (_.beginFill(0, 100),
              _.moveTo(_, _),
              _.lineTo(_ + _, _),
              _.lineTo(_ + _, _ + _),
              _.lineTo(_, _ + _),
              _.endFill());
          }
        return _;
      }),
      (_.setupTimingPattern = function () {
        for (var _ = 8; _ < this.moduleCount - 8; _++)
          this.modules[_][6] ?? (this.modules[_][6] = _ % 2 == 0);
        for (var _ = 8; _ < this.moduleCount - 8; _++)
          this.modules[6][_] ?? (this.modules[6][_] = _ % 2 == 0);
      }),
      (_.setupPositionAdjustPattern = function () {
        for (
          var _ = _.getPatternPosition(this.typeNumber), _ = 0;
          _ < _.length;
          _++
        )
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_],
              _ = _[_];
            if (this.modules[_][_] == null)
              for (var _ = -2; _ <= 2; _++)
                for (var _ = -2; _ <= 2; _++)
                  _ == -2 || _ == 2 || _ == -2 || _ == 2 || (_ == 0 && _ == 0)
                    ? (this.modules[_ + _][_ + _] = !0)
                    : (this.modules[_ + _][_ + _] = !1);
          }
      }),
      (_.setupTypeNumber = function (_) {
        for (var _ = _.getBCHTypeNumber(this.typeNumber), _ = 0; _ < 18; _++) {
          var _ = !_ && ((_ >> _) & 1) == 1;
          this.modules[Math.floor(_ / 3)][(_ % 3) + this.moduleCount - 8 - 3] =
            _;
        }
        for (var _ = 0; _ < 18; _++) {
          var _ = !_ && ((_ >> _) & 1) == 1;
          this.modules[(_ % 3) + this.moduleCount - 8 - 3][Math.floor(_ / 3)] =
            _;
        }
      }),
      (_.setupTypeInfo = function (_, _) {
        for (
          var _ = (this.errorCorrectLevel << 3) | _,
            _ = _.getBCHTypeInfo(_),
            _ = 0;
          _ < 15;
          _++
        ) {
          var _ = !_ && ((_ >> _) & 1) == 1;
          _ < 6
            ? (this.modules[_][8] = _)
            : _ < 8
              ? (this.modules[_ + 1][8] = _)
              : (this.modules[this.moduleCount - 15 + _][8] = _);
        }
        for (var _ = 0; _ < 15; _++) {
          var _ = !_ && ((_ >> _) & 1) == 1;
          _ < 8
            ? (this.modules[8][this.moduleCount - _ - 1] = _)
            : _ < 9
              ? (this.modules[8][15 - _ - 1 + 1] = _)
              : (this.modules[8][15 - _ - 1] = _);
        }
        this.modules[this.moduleCount - 8][8] = !_;
      }),
      (_.mapData = function (_, _) {
        for (
          var _ = -1,
            _ = this.moduleCount - 1,
            _ = 7,
            _ = 0,
            _ = this.moduleCount - 1;
          _ > 0;
          _ -= 2
        )
          for (_ == 6 && _--; ;) {
            for (var _ = 0; _ < 2; _++)
              if (this.modules[_][_ - _] == null) {
                var _ = !1;
                (_ < _.length && (_ = ((_[_] >>> _) & 1) == 1),
                  _.getMask(_, _, _ - _) && (_ = !_),
                  (this.modules[_][_ - _] = _),
                  _--,
                  _ == -1 && (_++, (_ = 7)));
              }
            if (((_ += _), _ < 0 || this.moduleCount <= _)) {
              ((_ -= _), (_ = -_));
              break;
            }
          }
      }),
      (_.PAD0 = 236),
      (_.PAD1 = 17),
      (_.createData = function (_, _, _) {
        for (
          var _ = _.getRSBlocks(_, _), _ = new _(), _ = 0;
          _ < _.length;
          _++
        ) {
          var _ = _[_];
          (_.put(_.mode, 4),
            _.put(_.getLength(), _.getLengthInBits(_.mode, _)),
            _.write(_));
        }
        for (var _ = 0, _ = 0; _ < _.length; _++) _ += _[_].dataCount;
        if (_.getLengthInBits() > _ * 8)
          throw Error(
            `code length overflow. (` + _.getLengthInBits() + `>` + _ * 8 + `)`,
          );
        for (
          _.getLengthInBits() + 4 <= _ * 8 && _.put(0, 4);
          _.getLengthInBits() % 8 != 0;
        )
          _.putBit(!1);
        for (
          ;
          !(
            _.getLengthInBits() >= _ * 8 ||
            (_.put(_.PAD0, 8), _.getLengthInBits() >= _ * 8)
          );
        )
          _.put(_.PAD1, 8);
        return _.createBytes(_, _);
      }),
      (_.createBytes = function (_, _) {
        for (
          var _ = 0,
            _ = 0,
            _ = 0,
            _ = Array(_.length),
            _ = Array(_.length),
            _ = 0;
          _ < _.length;
          _++
        ) {
          var _ = _[_].dataCount,
            _ = _[_].totalCount - _;
          ((_ = Math.max(_, _)), (_ = Math.max(_, _)), (_[_] = Array(_)));
          for (var _ = 0; _ < _[_].length; _++) _[_][_] = 255 & _.buffer[_ + _];
          _ += _;
          var _ = _.getErrorCorrectPolynomial(_),
            _ = new _(_[_], _.getLength() - 1).mod(_);
          _[_] = Array(_.getLength() - 1);
          for (var _ = 0; _ < _[_].length; _++) {
            var _ = _ + _.getLength() - _[_].length;
            _[_][_] = _ >= 0 ? _.get(_) : 0;
          }
        }
        for (var _ = 0, _ = 0; _ < _.length; _++) _ += _[_].totalCount;
        for (var _ = Array(_), _ = 0, _ = 0; _ < _; _++)
          for (var _ = 0; _ < _.length; _++)
            _ < _[_].length && (_[_++] = _[_][_]);
        for (var _ = 0; _ < _; _++)
          for (var _ = 0; _ < _.length; _++)
            _ < _[_].length && (_[_++] = _[_][_]);
        return _;
      }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = function (_, _) {
        _ ||= {};
        var _ = new _(_.typeNumber || -1, _.errorCorrectLevel || _._);
        return (_.addData(_), _.make(), _);
      };
    ((_.ErrorCorrectLevel = _), (_.exports = _));
  }),
  _ = `RuVnOcF9yRI-`,
  _ = `QhysrBJX1dU-`,
  _ = _(_(), 1),
  _ = (function (_) {
    return (
      (_[(_._ = 1)] = `L`),
      (_[(_._ = 0)] = `M`),
      (_[(_._ = 3)] = `Q`),
      (_[(_._ = 2)] = `H`),
      _
    );
  })({});
function _(_, _, _) {
  let _ = _.length,
    _ = _[0].length,
    _ = (_ + 2) * _,
    _ = new Uint8Array(40 + _),
    _ = 0;
  ((_[_++] = 71),
    (_[_++] = 73),
    (_[_++] = 70),
    (_[_++] = 56),
    (_[_++] = 57),
    (_[_++] = 97),
    (_[_++] = _),
    (_[_++] = 0),
    (_[_++] = _),
    (_[_++] = 0),
    _(
      _ != `transparent` || _ != `transparent`,
      `Trying to use transparent for both colors in QR`,
    ),
    (_[_++] = 161),
    (_[_++] = 0),
    (_[_++] = 0),
    _ == `transparent`
      ? ((_[_++] = 0), (_[_++] = 0), (_[_++] = 0))
      : ((_[_++] = _[0]), (_[_++] = _[1]), (_[_++] = _[2])),
    _ == `transparent`
      ? ((_[_++] = 0), (_[_++] = 0), (_[_++] = 0))
      : ((_[_++] = _[0]), (_[_++] = _[1]), (_[_++] = _[2])),
    (_[_++] = 255),
    (_[_++] = 255),
    (_[_++] = 255),
    (_[_++] = 255),
    (_[_++] = 255),
    (_[_++] = 255),
    (_ == `transparent` || _ == `transparent`) &&
      ((_[_++] = 33),
      (_[_++] = 249),
      (_[_++] = 4),
      (_[_++] = 1),
      (_[_++] = 0),
      (_[_++] = 0),
      (_[_++] = _ == `transparent` ? 0 : 1),
      (_[_++] = 0)),
    (_[_++] = 44),
    (_[_++] = 0),
    (_[_++] = 0),
    (_[_++] = 0),
    (_[_++] = 0),
    (_[_++] = _),
    (_[_++] = 0),
    (_[_++] = _),
    (_[_++] = 0),
    (_[_++] = 0),
    (_[_++] = 7));
  for (let _ = 0; _ < _.length; _++) {
    ((_[_++] = _ + 1), (_[_++] = 128));
    for (let _ = 0; _ < _.length; _++) _[_++] = +!_[_][_];
  }
  return ((_[_++] = 1), (_[_++] = 129), (_[_++] = 0), (_[_++] = 59), _);
}
function _(
  _,
  {
    activeBitColor: _ = [33, 35, 40],
    inactiveBitColor: _ = [255, 255, 255],
    borderWidth: _ = 3,
  } = {},
  _ = {},
) {
  let _ = (0, _.default)(_, _).modules;
  if (!_) return null;
  let _ = [];
  for (let _ = 0; _ < _; _++) _.push(Array(_.length + _ * 2).fill(!1));
  for (let _ = 0; _ < _.length; _++)
    _.push([
      ...Array.from(
        {
          length: _,
        },
        () => !1,
      ),
      ..._[_],
      ...Array.from(
        {
          length: _,
        },
        () => !1,
      ),
    ]);
  for (let _ = 0; _ < _; _++) _.push(Array(_.length + _ * 2).fill(!1));
  return _(_, _, _);
}
function _(_) {
  let {
      quality: _ = 0,
      children: _,
      className: _,
      activeBitColor: _ = [33, 35, 40],
      inactiveBitColor: _ = [255, 255, 255],
      borderWidth: _ = 3,
      typeNumber: _ = 6,
    } = _,
    _ = _(_, {
      typeNumber: _,
      errorCorrectLevel: _,
      activeBitColor: _,
      inactiveBitColor: _,
      borderWidth: _,
    });
  if (!_) return null;
  let _ = `rgb(${_[0]}, ${_[1]}, ${_[2]})`;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _),
    style: {
      "--qr-bright-color": _,
    },
    children: (0, _.jsx)(`img`, {
      className: _,
      src: _,
      alt: ``,
    }),
  });
}
function _(_, _) {
  let {
    typeNumber: _,
    errorCorrectLevel: _,
    activeBitColor: _,
    inactiveBitColor: _,
    borderWidth: _,
  } = _;
  return (0, _.useMemo)(() => {
    let _ = _(
      _,
      {
        activeBitColor: _,
        inactiveBitColor: _,
        borderWidth: _,
      },
      {
        typeNumber: _,
        errorCorrectLevel: _,
      },
    );
    return _ ? `data:image/gif;base64,${(0, _.fromByteArray)(_)}` : null;
  }, [_, _, _, _, _, _]);
}
var _ = `WrkY9vjgO-o-`,
  _ = `S5cukRF3668-`,
  _ = `_-8GxbX7BdEU-`;
function _(_) {
  let {
      transport: _,
      onComplete: _,
      onStatusChange: _,
      platform: _,
      styling: _ = `default`,
      activeBitValue: _ = 255,
      preloadedSession: _,
    } = _,
    {
      eStatus: _,
      strChallengeURL: _,
      strClientID: _,
      bHadRemoteInteraction: _,
      reset: _,
      setTokenToRevoke: _,
    } = _({
      transport: _,
      onComplete: _,
      onDeviceDetails: _.IN_STEAMUI ? _ : _,
      preloaded: _,
    });
  (0, _.useEffect)(() => _ && _(_), [_, _]);
  let _ = _ === 2 && _ ? _ : _.STORE_BASE_URL,
    _ = _ === 0 || _ === 1 || _,
    _ = _ === 4,
    _ = _ === 3,
    _ = _
      ? (0, _.jsx)(_, {})
      : _
        ? (0, _.jsx)(_, {
            reset: _,
          })
        : _
          ? (0, _.jsx)(_, {
              size: `small`,
            })
          : null,
    _ = _ || _ || _;
  (0, _.useEffect)(() => {
    _.refreshInfo?.login_token_id && _(_.refreshInfo.login_token_id);
  }, [_.refreshInfo, _]);
  let _ = _.EUNIVERSE !== 1,
    _ = `rgb(${_}, ${_}, ${_})`;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      style: {
        position: `relative`,
      },
      children: [
        (0, _.jsx)(_, {
          borderWidth: 0,
          activeBitColor: [21, 23, 28],
          inactiveBitColor: _ ? [_, 0, _] : [_, _, _],
          quality: _(_),
          className: (0, _.default)(
            _,
            _ == `deck` && `LfwdeqflbQQ-`,
            _ == `vr` && `DlrZAVV1kSM-`,
            _ && `AME4jRbjhDs-`,
            _ && `FFV7o6c8MVE-`,
          ),
          children: _,
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `rAodxgQ4uTs-`,
            children: (0, _.jsx)(`div`, {
              className: `TxzArhnTYjU-`,
              style: {
                "--qr-bright-color": _,
              },
              children: _,
            }),
          }),
      ],
    }),
  });
}
function _(_) {
  return _.length <= 90 ? _._ : void 0;
}
function _(_) {
  let { size: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(
      _,
      _ == `small` && `UmXCdAcOnc0-`,
      (_ == `medium` || !_) && `dkcbyneVVOc-`,
      _ == `large` && `y6M90bbs5Os-`,
    ),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    color: `dull`,
    variant: `ghost`,
    onClick: _.reset,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: {
      width: `40px`,
      height: `40px`,
      cursor: `pointer`,
    },
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        fill: `none`,
        stroke: `#fff`,
        strokeWidth: `30`,
        strokeLinecap: `round`,
        strokeMiterlimit: `10`,
        _: `M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895`,
      }),
      (0, _.jsx)(`polygon`, {
        points: `147.639,108.361 245.755,10.166 245.834,108.361`,
        fill: `#fff`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: {
      width: `45px`,
      height: `45px`,
    },
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`polyline`, {
      fill: `none`,
      stroke: `#fff`,
      strokeWidth: `24`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      strokeMiterlimit: `10`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var _ = (0, _.createContext)(!1),
  _ = () => (0, _.useContext)(_);
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      reset: () => window.location.reload(),
      failure: _.Generic,
    }),
  });
}
function _(_) {
  _(_.redirectUrl);
  let _ = (_) => {
    let { strRefreshToken: _ } = _;
    _(_).then(
      (_) => _.onComplete(_),
      () => _.onComplete(_.k_PrimaryDomainFail),
    );
  };
  return (0, _.jsx)(_, {
    ..._,
    creationRedirectUrl: _.redirectUrl,
    onSuccess: _,
    embedded: _.theme === `modal`,
  });
}
function _(_) {
  let { embedded: _, children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_.Provider, {
      value: _ ?? !1,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            ..._,
          }),
          _,
        ],
      }),
    }),
  });
}
function _(_) {
  if (_()) return null;
  let { variant: _ } = _;
  return typeof _ == `function`
    ? (0, _.jsx)(_, {
        onClick: _,
        children: _.Localize(`#Login_Help_SignIn`),
      })
    : (0, _.jsx)(_, {
        href: `${_.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
        children: _.Localize(`#Login_Help_SignIn`),
      });
}
function _(_) {
  let { variant: _, redirectUrl: _ } = _;
  if (typeof _ == `function`)
    return (0, _.jsx)(_, {
      inline: !0,
      onClick: _,
      children: _.Localize(`#Login_CreateAccount`),
    });
  {
    let _ = _ ? `?redir=${encodeURIComponent(_)}` : ``;
    switch (_ ?? `normal`) {
      default:
      case `normal`:
        return (0, _.jsx)(_, {
          inline: !0,
          href: `${_.STORE_BASE_URL}join/${_}`,
          children: _.Localize(`#Login_CreateAccount`),
        });
      case `partner`:
        return (0, _.jsx)(_, {
          inline: !0,
          href: `${_.PARTNER_BASE_URL}${_}`,
          children: _.Localize(`#Login_CreateSteamworksAccount`),
        });
      case `none`:
        return null;
    }
  }
}
function _(_) {
  let { launcherType: _, variant: _, redirectUrl: _ } = _;
  if (_ === 8 || _ == `none`) return null;
  let _ = _ !== void 0,
    _;
  switch (_ ?? `normal`) {
    default:
    case `normal`:
      _ = `#Login_NoSteamAccount`;
      break;
    case `partner`:
      _ = `#Login_NoSteamworksAccount`;
  }
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `Kv7QdVcb2UI-`),
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _.Localize(_),
      }),
      (0, _.jsx)(_, {
        variant: _,
        redirectUrl: _,
      }),
    ],
  });
}
function _() {
  let _ =
    window?.location &&
    new URLSearchParams(window.location.search).getAll(`need_password`).pop();
  return _ !== void 0 && _ !== `false` && _ !== `0`;
}
function _(_) {
  let {
      transport: _,
      onSuccess: _,
      platform: _,
      autoFocus: _,
      refreshInfo: _,
      renderSuccess: _ = () => (0, _.jsx)(_, {}),
      lastResult: _,
      joinLinkVariant: _,
      defaultAccountName: _,
      secureComputer: _ = !0,
      isProbablySharedPC: _ = !1,
      onShowAgreement: _,
      creationRedirectUrl: _,
      preloadedQRSession: _,
    } = _,
    _ = _.IN_STEAMUI ? _ : _,
    _ = _.IN_STEAMUI ? (_) => SteamClient.Auth.GetSteamGuardData(_) : null,
    _ = _(),
    _ = _({
      transport: _,
      platform: _,
      onSuccess: _,
      refreshInfo: _,
      onDeviceDetails: _,
      onGetMachineAuth: _,
      defaultAccountName: _,
      secureComputer: _,
      isProbablySharedPC: _,
      onShowAgreement: _,
    }),
    _ = _(),
    _ = (0, _.useId)();
  if (_ != null && _ != 1)
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        reset: () => window.location.reload(),
        failure: _.Generic,
        errorReference: _.toString(),
        extendedErrorMessage: _.password.strExtendedErrorMessage,
      }),
    });
  let _ = _.EREALM !== _.k_ESteamRealmChina;
  if (!_.bInPasswordFlow) {
    let _ = (0, _.jsxs)(`div`, {
      className: (0, _.default)(_, _ && `rvRWTXNBcK4-`),
      children: [
        (0, _.jsx)(_, {
          strAccountName: _.strAccountName,
          onAccountNameChange: _.onAccountNameChange,
          strPassword: _.strPassword,
          onPasswordChange: _.onPasswordChange,
          bRememberMe: _.bRememberMe,
          onRememberMeChange: _.onRememberMeChange,
          onSubmit: _.onPasswordSubmit,
          status: _.password.eStatus,
          autoFocus: _,
          secureComputer: _,
          refreshInfo: _.refreshInfo,
        }),
        _ &&
          (0, _.jsx)(_, {
            transport: _,
            onQRStatusChange: _.onQRStatusChange,
            onComplete: _.onComplete,
            platform: _,
            refreshInfo: _,
            preloadedQRSession: _,
          }),
      ],
    });
    if (_) {
      let _ = _.IN_STEAMUI,
        _ = _()?.LAUNCHER_TYPE;
      return (0, _.jsxs)(_, {
        className: (0, _.default)(_, _ && `Kv7QdVcb2UI-`),
        children: [
          !_ && !1,
          !_.refreshInfo &&
            (0, _.jsx)(_, {
              realm: _.EREALM,
              launcherType: _,
              className: `_19NDBszdpt8-`,
              onBack: _.onBack,
            }),
          (0, _.jsx)(_, {
            refreshInfo: _,
          }),
          _,
          (0, _.jsxs)(`div`, {
            className: (0, _.default)(_, _ && `Kv7QdVcb2UI-`),
            children: [
              (0, _.jsx)(_, {
                variant: _.helpLinkVariant,
              }),
              (0, _.jsx)(_, {
                launcherType: _,
                variant: _,
                redirectUrl: _,
              }),
            ],
          }),
        ],
      });
    }
    let _ = (0, _.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `8px`,
        margin: `8px 16px`,
      },
      children: [
        !1,
        (0, _.jsx)(`h2`, {
          className: _,
          _: _,
          children: _.refreshInfo
            ? _.Localize(`#Login_RefreshSignIn`)
            : _.Localize(`#Login_SignInTitle`),
        }),
        (0, _.jsx)(_, {
          refreshInfo: _.refreshInfo,
        }),
      ],
    });
    return (0, _.jsxs)(_, {
      title: _,
      titleId: _,
      children: [_ && (0, _.jsx)(_, {}), _],
    });
  }
  let _ = _.password.eStatus;
  switch (_) {
    case 13:
      return _.renderLoading
        ? (0, _.jsx)(_.Fragment, {
            children: _.renderLoading(),
          })
        : (0, _.jsx)(_, {});
    case 5:
    case 11:
    case 3:
    case 10:
      return (
        _(
          !!_.password.strAccountName,
          `Missing account name in login session for status`,
          _,
        ),
        (0, _.jsx)(_, {
          type: _ === 5 || _ === 11 ? `mobile` : `email`,
          onSubmitCode: _.password.addCode,
          status: _,
          associatedLabel: _.password.strConfirmationAssociatedMessage,
          accountName: _.password.strAccountName,
          onBack: _.password.goBack,
          onCodeHelp: _.onCodeHelp,
        })
      );
    case 6:
    case 4:
      return (
        _(
          !!_.password.strAccountName,
          `Missing account name in login session for status`,
          _,
        ),
        (0, _.jsx)(_, {
          type: _ === 6 ? `mobile` : `email`,
          accountName: _.password.strAccountName,
          onUseCodeOverride: _.password.useCodeOverride,
          onCodeHelp: _.onCodeHelp,
        })
      );
    case 16:
      return (0, _.jsx)(_, {
        reset: _.password.reset,
      });
    case 15:
      return (0, _.jsx)(_, {
        reset: _.password.reset,
        failure: _.password.eFailureState,
        onRequestOffline: _.onTryOffline,
        errorReference: _.password.strErrorReference,
        extendedErrorMessage: _.password.strExtendedErrorMessage,
      });
    case 14:
      return (0, _.jsx)(_, {
        compact: !0,
        children: _(),
      });
    default:
      return (
        _(`Unknown Phase: ${_}`),
        (0, _.jsx)(_, {
          reset: _.password.reset,
          failure: _.Generic,
          onRequestOffline: _.onTryOffline,
          errorReference: _.password.strErrorReference,
          extendedErrorMessage: _.password.strExtendedErrorMessage,
        })
      );
  }
}
function _(_) {
  if (!_.refreshInfo) return null;
  let _;
  switch (_.refreshInfo?.reason ?? 2) {
    case 2:
    case 7:
    default:
      _ = `#Login_RefreshReason_Generic`;
      break;
    case 6:
      _ = `#Login_RefreshReason_LoggedInElsewhere`;
      break;
    case 34:
      _ = `#Login_RefreshReason_LogonSessionReplaced`;
      break;
    case 5:
      _ = `#Login_RefreshReason_InvalidPassword`;
      break;
    case 26:
      _ = `#Login_RefreshReason_Revoked`;
      break;
    case 27:
      _ = `#Login_RefreshReason_Expired`;
      break;
    case 49:
      _ = `#Login_RefreshReason_PasswordRequiredToKickSession`;
      break;
    case 43:
      _ = `#Login_RefreshReason_AccountDisabled`;
      break;
    case 69:
      _ = `#Login_RefreshReason_ParentalControlRestricted`;
      break;
    case 84:
      _ = `#Login_RefreshReason_RateLimitExceeded`;
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Login_RefreshSignIn`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(_),
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.Localize(`#Login_ConfirmCredentials`),
  });
}
function _(_) {
  let {
      onSubmit: _,
      status: _,
      autoFocus: _,
      refreshInfo: _,
      strAccountName: _,
      onAccountNameChange: _,
      strPassword: _,
      onPasswordChange: _,
      bRememberMe: _,
      onRememberMeChange: _,
      secureComputer: _ = !0,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _(),
    _ = () => {
      _().then(() => {
        _() && _(!1);
      });
    },
    _ = _ === 1 || _ === 13,
    _ = _ === 2 && !_,
    _ = _
      ? (0, _.jsx)(_, {
          children: _.Localize(`#Login_CheckCredentials`),
        })
      : (0, _.jsx)(_, {
          children: `\xA0`,
        }),
    _ = _ && !_,
    _ = _ && !!_,
    _ = !!_.refreshInfo,
    _ = (0, _.useId)(),
    _ = (0, _.useId)();
  return (0, _.jsxs)(_, {
    onSubmit: _,
    className: _,
    children: [
      (0, _.jsx)(_, {
        tone: _ ? `danger` : void 0,
        label: (0, _.jsx)(_, {
          highlight: !0,
          inputId: _,
          children: _.Localize(`#Login_SignIn_WithAccountName`),
        }),
        value: _,
        onChange: (_) => {
          (_(!0), _(_));
        },
        autoFocus: _,
        disabled: _,
        _: _,
      }),
      (0, _.jsx)(_, {
        tone: _ ? `danger` : void 0,
        label: (0, _.jsx)(_, {
          inputId: _,
          children: _.Localize(`#Login_Password`),
        }),
        value: _,
        onChange: (_) => {
          (_(!0), _(_));
        },
        type: `password`,
        autoFocus: _,
        _: _,
      }),
      _
        ? (0, _.jsx)(_, {
            label: _.Localize(`#Login_RememberMe_Short`),
            title: _.Localize(`#Login_RememberMe_Tooltip`),
            value: _,
            onChange: _,
          })
        : (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Login_InsecureComputer`),
          }),
      (0, _.jsx)(_, {
        loading: _,
        refreshLogin: _,
      }),
      _,
      !_ &&
        (0, _.jsx)(_, {
          href: `${_.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
          align: `center`,
          children: _.Localize(`#Login_Help_SignIn`),
        }),
    ],
  });
}
var _ = 700;
function _(_) {
  let _ = _(),
    [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useLayoutEffect)(() => {
      _(_.ownerWindow.screen.width < _);
    }, [_.ownerWindow]),
    _(_.ownerWindow, `resize`, () => {
      _(_.ownerWindow.screen.width < _);
    }),
    (0, _.jsx)(`div`, {
      className: _,
      children: _
        ? (0, _.jsx)(_, {
            ..._,
          })
        : (0, _.jsx)(_, {
            ..._,
          }),
    })
  );
}
function _(_) {
  let _ =
    _.STORE_BASE_URL +
    `join/?guest=1&purchaseType=gift&checkout=1&redir=` +
    encodeURIComponent(_.redirectURL);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      compact: !0,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(
              _.Localize(`#Login_Guest`),
              (0, _.jsx)(`a`, {
                href: `${_}`,
                style: {
                  textDecoration: `underline`,
                },
              }),
            ),
          }),
          (0, _.jsx)(`a`, {
            className: _,
            href: `${_}`,
            children: (0, _.jsx)(`button`, {
              className: _,
              children: _.Localize(`#Login_GuestContinue`),
            }),
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return _
    ? (0, _.jsx)(_, {
        ..._,
        bShowHideButton: !0,
        setShowQR: _,
      })
    : (0, _.jsx)(_, {
        setShowQR: _,
      });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Login_MobileFlow_New`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Login_MobileFlow_SignIn_ScanQR`),
        }),
      }),
      (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        onClick: () => _.setShowQR(!0),
        children: _.Localize(`#Login_MobileFlow_ShowMeQR_Button`),
      }),
      (0, _.jsx)(`a`, {
        href: `${_.STORE_BASE_URL}mobile`,
        className: _,
        children: _.Localize(`#Login_JoinBeta_Button`),
      }),
    ],
  });
}
function _(_) {
  let {
    onQRStatusChange: _,
    transport: _,
    onComplete: _,
    platform: _,
    refreshInfo: _,
    preloadedQRSession: _,
    bShowHideButton: _ = !1,
    setShowQR: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        highlight: !0,
        children: _.Localize(`#Login_SignIn_OrWithQRCode`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          onStatusChange: _,
          transport: _,
          onComplete: _,
          platform: _,
          refreshInfo: _,
          preloadedSession: _,
        }),
      }),
      _ &&
        _ &&
        (0, _.jsx)(`button`, {
          type: `button`,
          className: `X1WW6U5nVKQ-`,
          onClick: () => _(!1),
          children: _.Localize(`#Button_Hide`),
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(
          _.Localize(`#Login_UseMobileAppForQR_Inline`),
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}mobile`,
            align: `center`,
          }),
        ),
      }),
    ],
  });
}
function _(_) {
  let { label: _, error: _, tone: _, autoFocus: _, _: _, ..._ } = _,
    _ = _ ?? (_ ? `danger` : void 0);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      typeof _ == `string`
        ? (0, _.jsx)(_, {
            inputId: _,
            children: _,
          })
        : _,
      _ &&
        (0, _.jsx)(_, {
          type: `error`,
          children: _,
        }),
      (0, _.jsx)(_, {
        autoFocus: _,
        tone: _,
        _: _,
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { children: _, inputId: _, highlight: _ } = _;
  return (0, _.jsx)(`label`, {
    className: (0, _.default)(_, _ && `jAjiX6ujKzY-`),
    htmlFor: _,
    children: _,
  });
}
function _(_) {
  let {
    value: _,
    onChange: _,
    type: _ = `text`,
    tone: _,
    className: _,
    autoFocus: _,
    disabled: _,
    _: _,
  } = _;
  return (0, _.jsx)(`input`, {
    value: _,
    type: _,
    autoFocus: _,
    onChange: (_) => _(_.target.value),
    className: (0, _.default)(_, _ === `danger` && `kbZo38RXgJ0-`, _),
    disabled: _,
    _: _,
  });
}
function _(_) {
  let { children: _, type: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(void 0, _ === `error` && void 0),
    children: _,
  });
}
function _(_) {
  let { label: _, title: _, onChange: _, value: _ } = _,
    _ = () => {
      _ && _(!_);
    },
    _ = (0, _.useId)();
  return (0, _.jsxs)(`div`, {
    role: `presentation`,
    className: _,
    title: _,
    onClick: _,
    onKeyPress: (_) => {
      _.key == ` ` && (_(), _.preventDefault());
    },
    children: [
      (0, _.jsx)(_, {
        labelledBy: _,
        value: _,
      }),
      (0, _.jsx)(`label`, {
        _: _,
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { value: _, labelledBy: _ } = _;
  return (0, _.jsx)(`div`, {
    tabIndex: 0,
    className: _,
    "aria-labelledby": _,
    role: `checkbox`,
    "aria-checked": _,
    children:
      _ &&
      (0, _.jsx)(`div`, {
        className: `GHsuNp6HqyY-`,
        children: (0, _.jsx)(_, {
          strokeWidth: 35,
        }),
      }),
  });
}
function _(_) {
  let { refreshLogin: _, ..._ } = _;
  return _ &&
    `SteamClient` in globalThis &&
    `User` in SteamClient &&
    `StartShutdown` in SteamClient.User
    ? (0, _.jsx)(_, {})
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      ..._,
      children: _.Localize(`#Login_SignIn`),
    }),
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`button`, {
        className: _,
        type: `submit`,
        children: _.Localize(`#Login_SignIn`),
      }),
      (0, _.jsx)(`button`, {
        className: _,
        onClick: () => SteamClient.User.StartShutdown(!0),
        children: _.Localize(`#Login_ExitSteam`),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    type: `submit`,
    ..._,
  });
}
function _(_) {
  let { className: _, loading: _, disabled: _, children: _, ..._ } = _,
    _ = _ || _;
  return (0, _.jsxs)(`button`, {
    className: (0, _.default)(_, _ && `QAA-fChDQFA-`, _),
    disabled: _,
    ..._,
    children: [
      _,
      _ &&
        (0, _.jsx)(`div`, {
          className: `_7C2-lQ9GWRA-`,
          children: (0, _.jsx)(_, {
            size: `small`,
          }),
        }),
    ],
  });
}
function _(_) {
  let _ = _.children || `\xA0`;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _() {
  return (0, _.jsx)(_, {
    compact: !0,
    children: (0, _.jsxs)(_, {
      alignItems: `center`,
      className: (0, _.default)(_, _.IN_STEAMUI && `ZV64fnc7PdA-`),
      children: [
        (0, _.jsx)(_, {
          size: `xlarge`,
        }),
        (0, _.jsx)(`div`, {
          className: (0, _.default)(_),
          children: _.Localize(
            _.IN_STEAMUI
              ? `#Login_ConnectingToSteam`
              : `#Login_LoadingAccountInfo`,
          ),
        }),
      ],
    }),
  });
}
function _(_) {
  let { size: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(
      _,
      _ == `small` && `-GciojHJFJo-`,
      (_ == `medium` || !_) && `aNnjBlEgXeE-`,
      _ == `large` && `SkijseWcXzM-`,
    ),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`button`, {
      className: _,
      onClick: _.onRequestOffline,
      children: _.Localize(`#Login_GoOffline_Button`),
    }),
  });
}
function _(_) {
  let {
      reset: _,
      failure: _,
      onRequestOffline: _,
      errorReference: _,
      extendedErrorMessage: _,
    } = _,
    { title: _, description: _ } = _(_, _),
    _ = _.IN_STEAMUI && _ == _.Network;
  return (0, _.jsxs)(_, {
    compact: !0,
    children: [
      (0, _.jsxs)(_, {
        alignItems: `center`,
        gap: 12,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `sH-b0kW7QCY-`,
              children: _.Localize(`#Login_GoOffline_Description`),
            }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                onClick: _,
                children: _.Localize(`#Button_Retry`),
              }),
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  onRequestOffline: _,
                }),
            ],
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `La0SBF0lXr0-`,
          children: _.Localize(`#Login_Error_Reference`, _),
        }),
    ],
  });
}
function _(_) {
  let { reset: _ } = _;
  return (0, _.jsx)(_, {
    reset: _,
    failure: _.Generic,
  });
}
function _(_) {
  let {
      type: _,
      onSubmitCode: _,
      status: _,
      accountName: _,
      associatedLabel: _,
      onBack: _,
    } = _,
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    _ = _ === `mobile`,
    _ = _.join(``),
    _ = _(_, _),
    _ = (_) => {
      (_(!0),
        _(_).then(() => {
          (_(!1), _(!1));
        }));
    },
    _ = (_) => {
      (_ || _(!0), _(_));
      let _ = _.join(``);
      _(_, _) && _(_);
    },
    _ = () => {
      _ && _(_);
    },
    _ = () => {
      (_(!_), _([]), _(``), _(_ + 1));
    },
    _ = !_ && (_ === 11 || _ === 10),
    _,
    _;
  return (
    _
      ? _ === `mobile`
        ? ((_ = (0, _.jsx)(_, {})), (_ = `#Login_UseMobileCode`))
        : ((_ = (0, _.jsx)(_, {})), (_ = `#Login_UseEmailCode`))
      : ((_ =
          _ === `mobile`
            ? (0, _.jsx)(_, {})
            : (0, _.jsx)(_, {
                emailAddress: _,
              })),
        (_ = `#Login_UseBackupCode`)),
    (0, _.jsx)(_, {
      title: (0, _.jsx)(_, {}),
      compact: !0,
      children: (0, _.jsx)(_, {
        onSubmit: _,
        children: (0, _.jsxs)(_, {
          alignItems: `center`,
          gap: 14,
          children: [
            (0, _.jsx)(_, {
              type: _,
              accountName: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(_, {
                  alignItems: `center`,
                  gap: 2,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        children: _.Localize(`#Login_IncorrectSteamGuard`),
                      }),
                    (0, _.jsx)(
                      _,
                      {
                        value: _,
                        onChange: _,
                        tone: _ ? `danger` : void 0,
                        loading: _,
                        backupCode: _,
                      },
                      _,
                    ),
                  ],
                }),
                _,
              ],
            }),
            _ &&
              (0, _.jsx)(_, {
                onClick: _,
                align: `center`,
                children: _.Localize(_),
              }),
            (0, _.jsx)(_, {
              type: _,
              onCodeHelp: _.onCodeHelp,
            }),
          ],
        }),
      }),
    })
  );
}
function _(_) {
  if (_()) return null;
  let _, _;
  return (
    _.type === `mobile`
      ? ((_ = `${_.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
        (_ = _.Localize(`#Login_Help_AccessMobileApp`)))
      : ((_ = `${_.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
        (_ = _.Localize(`#Login_Help_AccessEmail`))),
    _.onCodeHelp
      ? (0, _.jsx)(_, {
          onClick: () => _.onCodeHelp(_),
          align: `center`,
          children: _,
        })
      : (0, _.jsx)(_, {
          href: _,
          align: `center`,
          children: _,
        })
  );
}
function _() {
  return (0, _.jsx)(_, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: _,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Login_EnterBackupCode`),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Login_EnterBackupCodeDescription`),
        }),
      ],
    }),
  });
}
function _() {
  return (0, _.jsxs)(_, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Login_EnterMobileCode`),
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(_, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: _,
    children: [
      (0, _.jsx)(_, {
        align: `center`,
        spacing: 6,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.LocalizeReact(
            `#Login_EnterEmailCode`,
            (0, _.jsx)(`span`, {
              className: _,
              children: _.emailAddress,
            }),
          ),
        }),
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { accountName: _, type: _ } = _,
    _ =
      _ === `mobile`
        ? _.Localize(`#Login_MobileProtectingAccount`)
        : _.Localize(`#Login_EmailProtectingAccount`),
    _ = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.LocalizeReact(
          `#Login_ActiveAccountName`,
          (0, _.jsx)(`span`, {
            className: _,
            children: _,
          }),
        ),
      }),
      !_ &&
        (0, _.jsx)(`div`, {
          className: `DSy9L5eaj5o-`,
          children: _,
        }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    alignItems: `center`,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`img`, {
          src: _(_),
          alt: ``,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(_.Localize(`#Login_AwaitingMobileConfirmation`)),
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 33 49`,
    fill: `currentColor`,
    className: _.className,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 58 56`,
    fill: `none`,
    className: _.className,
    children: (0, _.jsx)(`path`, {
      _: `M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z`,
      fill: `#1A99FF`,
    }),
  });
}
function _(_) {
  let { type: _, accountName: _, onUseCodeOverride: _ } = _,
    _ = _(),
    _ = (0, _.jsx)(_, {
      type: `mobile`,
      onCodeHelp: _.onCodeHelp,
    }),
    _ = _
      ? (0, _.jsx)(`div`, {
          style: {
            paddingBottom: `20px`,
          },
          children: (0, _.jsx)(_, {
            align: `center`,
            onClick: _,
            children: _.Localize(`#Login_EnterCodeInstead`),
          }),
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            align: `center`,
            onClick: _,
            children: _.Localize(`#Login_EnterCodeInstead`),
          }),
        });
  return (0, _.jsx)(_, {
    title: (0, _.jsx)(_, {}),
    compact: !0,
    children: (0, _.jsxs)(_, {
      gap: _.IN_STEAMUI ? 24 : 40,
      children: [
        (0, _.jsx)(_, {
          type: _,
          accountName: _,
        }),
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [_, _],
        }),
      ],
    }),
  });
}
function _(_) {
  let { children: _, align: _, inline: _ } = _,
    _ = (0, _.default)(_, _ === `center` && `p1pxbjr1kTM-`);
  if (`href` in _) {
    let _ = _.IN_STEAMUI ? `steam://openurl_external/${_.href}` : _.href;
    return (0, _.jsx)(`a`, {
      className: _,
      href: _,
      children: _,
    });
  }
  return (0, _.jsx)(_ ? `span` : `div`, {
    className: _,
    onClick: _.onClick,
    children: _,
  });
}
function _(_) {
  let { onSubmit: _, children: _, className: _ } = _;
  return (0, _.jsx)(`form`, {
    onSubmit: (_) => (_.preventDefault(), _(), !1),
    className: _,
    children: _,
  });
}
function _(_) {
  let {
      alignItems: _,
      justifyContent: _,
      gap: _,
      className: _,
      ariaLabelledBy: _,
      children: _,
    } = _,
    _ = (0, _.default)(
      _,
      _ === `center` && `mQfJWqZo0U8-`,
      _ === `center` && `h53Pyn--gk4-`,
      _,
    ),
    _ = _
      ? {
          gap: typeof _ == `number` ? `${_}px` : _,
        }
      : void 0;
  return (0, _.jsx)(`section`, {
    className: _,
    style: _,
    "aria-labelledby": _,
    children: _,
  });
}
function _(_) {
  let { children: _, justifyContent: _, alignItems: _, className: _ } = _;
  return (0, _.jsx)(`div`, {
    style: {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: _,
      alignItems: _,
    },
    className: _,
    children: _,
  });
}
function _(_) {
  let { onChange: _, backupCode: _ = !1, ..._ } = _;
  return (0, _.jsx)(_, {
    length: _(_),
    backupCode: _,
    onChange: (_) => {
      ((_ = _.map((_) => _.toUpperCase())), _(_.join(``).trim(), _) && _(_));
    },
    autoFocus: !0,
    ..._,
    allowCharacter: (_) => /\w/g.test(_),
  });
}
function _(_) {
  let { children: _, spacing: _ = 0, align: _ } = _;
  return (0, _.jsx)(_, {
    alignItems: _,
    children: _.Children.map(_, (_, _) =>
      _
        ? (0, _.jsx)(`div`, {
            style:
              _ > 0
                ? {
                    paddingTop: `${_}px`,
                  }
                : void 0,
            children: _,
          })
        : null,
    )?.filter(Boolean),
  });
}
function _(_) {
  let { title: _, titleId: _, children: _, compact: _ } = _,
    _ = _(),
    _ = (0, _.useId)();
  return (0, _.jsxs)(_, {
    gap: _.IN_STEAMUI ? 0 : 32,
    className: (0, _.default)(
      _,
      _ && `rvRWTXNBcK4-`,
      _ && `L35Fcv9fbYo-`,
      _.IN_STEAMUI && `IN_CLIENT`,
    ),
    ariaLabelledBy: _ ?? _,
    children: [
      typeof _ == `string`
        ? (0, _.jsx)(`div`, {
            className: _,
            _: _ ?? _,
            children: _,
          })
        : _,
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
    realm: _ = _.EREALM,
    launcherType: _ = _()?.LAUNCHER_TYPE,
    className: _ = _,
  } = _;
  return _ === 8
    ? (0, _.jsx)(`div`, {
        className: _,
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            onBack: _.onBack,
          }),
          _ === _.k_ESteamRealmChina
            ? (0, _.jsx)(_, {
                className: _,
              })
            : (0, _.jsx)(_, {
                className: _,
              }),
          ` `,
        ],
      });
}
function _(_) {
  return _.onBack
    ? (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        onClick: _.onBack,
        "aria-label": _.Localize(`#Button_Back`),
        children: (0, _.jsx)(_, {
          className: _,
        }),
      })
    : null;
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 153 46`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _.className,
    children: [
      (0, _.jsx)(`path`, {
        _: `M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z`,
        fill: `#E0E1E6`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 232.73 46.07`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _.className,
    fill: `#E0E1E6`,
    children: [
      (0, _.jsxs)(`g`, {
        stroke: `null`,
        _: `svg_2`,
        children: [
          (0, _.jsx)(`path`, {
            stroke: `null`,
            _: `svg_3`,
            _: `m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037`,
          }),
          (0, _.jsx)(`path`, {
            stroke: `null`,
            _: `svg_4`,
            _: `m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836`,
          }),
          (0, _.jsx)(`path`, {
            stroke: `null`,
            _: `svg_5`,
            _: `m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287`,
          }),
        ],
      }),
      (0, _.jsx)(`path`, {
        stroke: `null`,
        _: `svg_6`,
        _: `m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z`,
      }),
      (0, _.jsxs)(`g`, {
        _: `svg_7`,
        children: [
          (0, _.jsx)(`path`, {
            _: `svg_8`,
            _: `m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z`,
          }),
          (0, _.jsx)(`path`, {
            _: `svg_9`,
            _: `m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z`,
          }),
          (0, _.jsx)(`path`, {
            _: `svg_10`,
            _: `m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z`,
          }),
          (0, _.jsx)(`path`, {
            _: `svg_11`,
            _: `m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z`,
          }),
        ],
      }),
      (0, _.jsxs)(`g`, {
        _: `svg_12`,
        children: [
          (0, _.jsx)(`path`, {
            _: `svg_13`,
            _: `m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z`,
          }),
          (0, _.jsx)(`path`, {
            _: `svg_14`,
            _: `m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z`,
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    alignItems: `center`,
    justifyContent: `center`,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let _ = (0, _.useRef)(_);
  ((_.current = _),
    (0, _.useEffect)(() => {
      new URLSearchParams(location.search).get(`need_password`) ||
        (_.current &&
          _(_.current).catch((_) => {
            _(`PerformRefresh exception`, _);
          }));
    }, [_]));
}
async function _(_) {
  let _ = new FormData();
  _.append(`redir`, _);
  let _ = `${_.LOGIN_BASE_URL}jwt/ajaxrefresh`,
    _ = await _.default.post(_, _, {
      timeout: 1e4,
      withCredentials: !0,
    });
  if (_.status !== 200 || !_?.data?.success) return !1;
  let { success: _, login_url: _, error: _, ..._ } = _.data,
    _ = new FormData();
  Object.entries(_).forEach(([_, _]) => _.append(_, _));
  let _ = await _.default.post(_, _),
    _ = _.status === 200 && _.data.result === 1;
  return (_ && window.location.assign(_), _);
}
function _() {
  let _ = (0, _.useRef)(!0);
  return (
    (0, _.useEffect)(
      () => () => {
        _.current = !1;
      },
      [_],
    ),
    (0, _.useCallback)(() => _.current, [_])
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    onEscKeypress: _.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, _.jsx)(_, {
      redirectURL: _.redirectURL,
      guestOption: _.guestOption,
    }),
  });
}
function _() {
  _(
    (0, _.jsx)(_, {
      ownerWin: window,
      redirectURL: window.location.href,
    }),
    window,
    {
      strTitle: _(`#Login_SignInTitle`),
    },
  );
}
function _(_) {
  let { redirectURL: _, guestOption: _ } = _,
    [_] = (0, _.useState)(
      new _(new _(_.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsx)(`div`, {
    children: _
      ? (0, _.jsx)(_, {})
      : (0, _.jsx)(_, {
          autoFocus: !0,
          transport: _,
          platform: 2,
          onComplete: (_) => {
            _ == _.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
          },
          redirectUrl: _,
          theme: `modal`,
          children:
            _ &&
            (0, _.jsx)(_, {
              redirectURL: _,
            }),
        }),
  });
}
var _ = `Utigx2dvTSs-`,
  _ = `IPiWi3ba7Oc-`,
  _ = `Tt1HS5eK4UQ-`,
  _ = `_2NN20ePjOoE-`,
  _ = `Q5sAYcjkGuw-`,
  _ = `JhPLxwFuvY8-`,
  _ = `-zOT4HlZFNc-`,
  _ = `NFc5gI--APM-`,
  _ = `gMm9gxp-VwY-`,
  _ = `rkM3vZ-l-i0-`,
  _ = `_9JbCPa5peFE-`,
  _ = `jhZ68t8aO0U-`,
  _ = `cF6FbGIaOso-`,
  _ = `uWbWS4Xl7nU-`,
  _ = `_0bHpv5DDjVk-`,
  _ = `GJr1kPqad-w-`,
  _ = `_8whJ5F1f7no-`,
  _ = `ngi9yWTTH6Q-`,
  _ = `O0WGKKnt-b0-`,
  _ = `n4yzVjIUqg0-`,
  _ = `gB1ggcMqZ4U-`,
  _ = `h1DcT5FSiVw-`,
  _ = class _ {
    constructor() {
      _(this);
    }
    giveaway_id = void 0;
    seconds_until_drawing = void 0;
    rtime_start = void 0;
    rtime_end = void 0;
    closed = void 0;
    winner_count = void 0;
    BIsValid() {
      return this.giveaway_id !== void 0 && this.giveaway_id !== null;
    }
    BStarted() {
      return this.BIsValid()
        ? (this.seconds_until_drawing !== void 0 &&
            this.seconds_until_drawing >= 0) ||
            (this.winner_count !== void 0 && this.winner_count > 0)
        : !1;
    }
    clone() {
      let _ = new _();
      return (
        (_.giveaway_id = this.giveaway_id),
        (_.seconds_until_drawing = this.seconds_until_drawing),
        (_.rtime_start = this.rtime_start),
        (_.rtime_end = this.rtime_end),
        (_.closed = this.closed),
        (_.winner_count = this.winner_count),
        _
      );
    }
  };
(_([_], _.prototype, `giveaway_id`, void 0),
  _([_], _.prototype, `seconds_until_drawing`, void 0),
  _([_], _.prototype, `rtime_start`, void 0),
  _([_], _.prototype, `rtime_end`, void 0),
  _([_], _.prototype, `closed`, void 0),
  _([_], _.prototype, `winner_count`, void 0));
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapGiveawayIDToNextDrawInfo = new Map();
  m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
  m_bLoadedFromConfig = !1;
  m_mapNextDrawChangeCallback = new Map();
  GetKey(_, _) {
    return _ + `_` + _;
  }
  GetInfoByInstance(_, _) {
    return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(this.GetKey(_, _));
  }
  GetNextDrawChangeCallback(_) {
    let _ = this.m_mapNextDrawChangeCallback.get(_);
    return (
      _ || ((_ = new _()), this.m_mapNextDrawChangeCallback.set(_, _)), _
    );
  }
  CopyToGiveaway(_, _) {
    (_.closed != _.closed && (_.closed = _.closed),
      _.giveaway_id != _.giveaway_id && (_.giveaway_id = _.giveaway_id),
      _.rtime_start != _.rtime_start && (_.rtime_start = _.rtime_start),
      _.rtime_end != _.rtime_end && (_.rtime_end = _.rtime_end),
      _.winner_count != _.winner_count && (_.winner_count = _.winner_count),
      _.seconds_until_drawing != _.seconds_until_drawing &&
        (_.seconds_until_drawing = _.seconds_until_drawing));
  }
  async ReloadGiveaway(_, _) {
    if (!_) return null;
    let _ = _.STORE_BASE_URL + `prizes/nextdraw/` + _,
      _ = {
        origin: self.origin,
      },
      _ = await _.default.get(_, {
        params: _,
      }),
      _ = _(() => {
        let _ = this.m_mapGiveawayIDToNextDrawInfo.get(_);
        if (
          (_ || ((_ = new _()), this.m_mapGiveawayIDToNextDrawInfo.set(_, _)),
          this.CopyToGiveaway(_.data, _),
          _ !== void 0)
        ) {
          let _ = this.GetKey(_, _),
            _ = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_);
          (_ ||
            ((_ = new _()),
            this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(_, _)),
            this.CopyToGiveaway(_.data, _));
        }
        return _;
      });
    return (this.GetNextDrawChangeCallback(_).Dispatch(_), _);
  }
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  Init() {
    if (!this.m_bLoadedFromConfig) {
      let _ = _(`giveawaynextdraw`, `application_config`);
      if (_ && _.giveaway_id) {
        let _ = new _();
        (this.CopyToGiveaway(_, _),
          this.m_mapGiveawayIDToNextDrawInfo.set(_.giveaway_id, _));
      }
      this.m_bLoadedFromConfig = !0;
    }
  }
};
(_([_], _.prototype, `m_mapGiveawayIDToNextDrawInfo`, void 0),
  _([_], _.prototype, `CopyToGiveaway`, null));
var _ = class _ {
  m_intervalID;
  m_intervalCountDownID;
  static s_GlobalInstance = 0;
  m_myInstanceNumber = 0;
  constructor() {
    ((this.m_myInstanceNumber = _.s_GlobalInstance), (_.s_GlobalInstance += 1));
  }
  ClearRefreshInterval() {
    this.m_intervalID &&= (window.clearInterval(this.m_intervalID), void 0);
  }
  ClearCountDown() {
    this.m_intervalCountDownID &&=
      (window.clearInterval(this.m_intervalCountDownID), void 0);
  }
  SetupRefreshDataInterval(_, _) {
    if ((this.ClearRefreshInterval(), !_.closed)) {
      let _ =
        _.seconds_until_drawing !== void 0 &&
        _.seconds_until_drawing <= 0 &&
        _.winner_count == 0
          ? 6e4
          : 5e3;
      this.m_intervalID = window.setInterval(_, _);
    }
  }
  SetupCountDown(_, _) {
    _ !== void 0 &&
      _ > 0 &&
      (this.m_intervalCountDownID = window.setInterval(_, 1e3));
  }
};
(_([_], _.prototype, `ClearRefreshInterval`, null),
  _([_], _.prototype, `ClearCountDown`, null),
  _([_], _.prototype, `SetupRefreshDataInterval`, null),
  _([_], _.prototype, `SetupCountDown`, null));
function _(_, _) {
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
  _ &&
    _.seconds_until_drawing !== void 0 &&
    (--_.seconds_until_drawing,
    _.seconds_until_drawing == 0 && _.ClearCountDown());
}
function _(_, _) {
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
  _ &&
    _.BIsValid() &&
    _.seconds_until_drawing !== void 0 &&
    _.seconds_until_drawing <= 0 &&
    !_.closed &&
    (_.ClearCountDown(),
    _.Get()
      .ReloadGiveaway(_, _.m_myInstanceNumber)
      .then((_) => {
        _ && _.SetupCountDown(_.seconds_until_drawing, () => _(_, _));
      }));
}
function _(_) {
  let [_] = (0, _.useState)(new _()),
    _ = _();
  (0, _.useEffect)(
    () => (
      _.Get()
        .ReloadGiveaway(_, _.m_myInstanceNumber)
        .then((_) => {
          _ &&
            (_.SetupRefreshDataInterval(_, () => _(_, _)),
            _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
            _());
        }),
      () => {
        (_.ClearRefreshInterval(), _.ClearCountDown());
      }
    ),
    [_, _, _],
  );
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber),
    [_, _, _] = _(() => [_?.winner_count, _?.closed, _?.seconds_until_drawing]);
  return !_ || _.giveaway_id == null || !_.BStarted() || _ === void 0
    ? {
        bLoadingGiveawayInfo: !0,
      }
    : {
        bLoadingGiveawayInfo: !1,
        winner_count: _,
        closed: _ ?? !1,
        seconds_until_drawing: _ ?? -1,
      };
}
var _ = `saleaction/creategiveawayregistration`;
async function _(_) {
  let _ =
    _.STORE_BASE_URL +
    `saleaction/giveawayregistration?name=` +
    encodeURIComponent(_);
  return await _(
    `GetUserGiveawayRegistration`,
    _,
    _,
    await fetch(_, {
      credentials: `include`,
    }),
  );
}
async function _(_) {
  let _ = _.STORE_BASE_URL + _;
  return await _(
    `UpdateUserGiveawayRegistration`,
    _,
    _,
    await fetch(_, {
      method: `POST`,
      credentials: `include`,
      headers: {
        "content-type": `application/json`,
      },
      body: JSON.stringify({
        name: _,
      }),
    }),
  );
}
async function _(_, _, _, _) {
  if (!_._) throw Error(_ + ` answered ` + _.status);
  let _ = await _.json();
  if (_?.success == 1 && _.registration) return _.registration;
  throw Error(_ + ` on ` + _ + ` answered ` + _?.success);
}
var _ = {
  registered: !1,
};
function _(_, _) {
  return [`sale`, `giveawayregistration`, _, _];
}
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => _(_),
    enabled: !!_,
    retry: !1,
  };
}
function _(_) {
  let { data: _, isError: _ } = _(_(_, _.accountid));
  return _ ? _ : _;
}
function _() {
  let _ = _(),
    { mutateAsync: _ } = _({
      mutationFn: _,
      onSuccess: (_, _) => _.setQueryData(_(_, _.accountid), _),
    });
  return {
    fnCreateRegistration: (0, _.useCallback)(
      async (_) => {
        try {
          return await _(_);
        } catch (_) {
          return (
            console.error(`Registering for giveaway ` + _ + ` failed`, _), _
          );
        }
      },
      [_],
    ),
  };
}
var _ = `aE9NemwHX3U-`,
  _ = `-LW3HYdhtwg-`,
  _ = `UfXKJfvB2aU-`,
  _ = `NjuVylscv-c-`,
  _ = `fQEvRYMgKZ8-`,
  _ = `Jz1BUHL6vfU-`,
  _ = `qUAIeS1LipI-`,
  _ = `hCW7GiiXdrk-`,
  _ = `gmY72gO6Jbk-`;
function _(_) {
  let { latestAnnouncement: _ } = _;
  return _?.type == `giveaway_draw`
    ? (0, _.jsx)(_, {
        latestWinner: _,
      })
    : null;
}
function _(_) {
  let {
      latestWinner: _,
      className: _,
      strActionButton: _,
      strActionClassname: _,
    } = _,
    _ = _.winners_info ?? [],
    _ = _.length > 0 ? _[0].accountid : 0,
    [_, _] = _.useState(_),
    _ = _(`${_.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`),
    _ = _(`${_.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`);
  _(!!_.giveaway_gid, `Giveaway draw announcement is missing its giveaway`, _);
  let _ = _(_.giveaway_gid),
    _ = _.bLoadingGiveawayInfo || _.closed ? null : _.seconds_until_drawing,
    _ = _ === _.accountid;
  _.useEffect(() => {
    _ != _ && setTimeout(() => _(_), 1500);
  }, [_, _]);
  let _ =
    _.length > 0 && _[0].persona
      ? _[0].persona
      : _(`#GA2022_UnknownPersonaName`);
  return (0, _.jsx)(_, {
    href: `https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022`,
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _({
        [_]: !0,
        [_]: _ === _,
      }),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _,
            src: _,
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ !== _ &&
              (0, _.jsx)(`div`, {
                className: _(`l-AUoGdZDTw-`),
                children: _(
                  `#GA2022_Congrats_Deck_Unknown`,
                  (0, _.jsx)(`br`, {}),
                ),
              }),
            _ === _ &&
              (0, _.jsx)(`div`, {
                className: _(`l-AUoGdZDTw-`, `-LW3HYdhtwg-`),
                children: _(
                  _
                    ? `#GA2022_Congrats_Deck_Me`
                    : `#GA2022_Congrats_Deck_OTher`,
                  _,
                  (0, _.jsx)(`br`, {}),
                ),
              }),
            !!(_ && _ > 0) &&
              (0, _.jsx)(`div`, {
                className: `B7DECy1bqvs-`,
                children: _(`#GA2022_Congrats_NextDraw`, _),
              }),
          ],
        }),
        (0, _.jsx)(`img`, {
          className: _,
          src: _,
        }),
        !!_ &&
          (0, _.jsx)(`div`, {
            className: _,
            children: _ ? _(`#GA2022_YouWonNextSteps`) : _,
          }),
      ],
    }),
  });
}
function _(_, _) {
  let [_, _] = _(() => [
      _?.steamid,
      _?.steamid ? _.GetBroadcast(_.steamid)?.m_ulBroadcastID : void 0,
    ]),
    [_, _] = _.useState(null);
  _.useEffect(() => {
    let _ = null;
    return (
      _ &&
        ((_ = _.Get().GetOrCreateChat(_ ?? ``, _)),
        _.StartForSteamID(_, _ ?? ``),
        _(_)),
      () => {
        _ && (_.Stop(), _(null));
      }
    );
  }, [_, _]);
  let _ = _(() => _?.m_latestAnnouncement || null);
  if (_?.type == `giveaway_draw`) {
    let _ = _;
    if (_.giveaway_gid == _) return _;
  }
  return null;
}
function _(_) {
  let { gidGiveaway: _, stream: _ } = _,
    _ = _(_, _),
    _ = _(`GameAwardDrop2022`),
    _ = null,
    _ = _;
  return (
    _.logged_in
      ? _?.registered
        ? ((_ = _(`#GA2022_AlreadyRegistered`)), (_ = _))
        : (_ = _(`#GA2022_RegisterToWin`))
      : (_ = _(`#GA2022_RegisterLoginToWin`)),
    _
      ? (0, _.jsx)(_, {
          latestWinner: _,
          className: _,
          strActionButton: _,
          strActionClassname: _,
        })
      : null
  );
}
var _ = RegExp(`ː([^ː]*)ː`, `g`),
  _ = RegExp(
    `^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)`,
    `i`,
  );
function _(_, _, _) {
  return _
    ? `presenter`
    : _.GetBroadcastSteamID() === _
      ? `broadcaster`
      : _.BIsUserBroadcastModerator(_)
        ? `moderator`
        : ``;
}
var _ = (_) => {
    let { userType: _, msg: _, presenterInfo: _ } = _;
    if (_ === `presenter` && _)
      return (0, _.jsx)(`span`, {
        children: (0, _.jsx)(_, {
          name: _.name ?? ``,
          title: _.title,
          photo: _.photo,
          company: _.company ?? ``,
          bioString: _.bio,
          children: (0, _.jsx)(`a`, {
            className: _(_, void 0),
            href: _.COMMUNITY_BASE_URL + `profiles/` + _.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: _.persona_name,
          }),
        }),
      });
    {
      let _;
      return (
        (_ === `broadcaster` || _ === `moderator`) && (_ = void 0),
        (0, _.jsx)(`span`, {
          children: (0, _.jsx)(`a`, {
            className: _(_, _),
            href: _.COMMUNITY_BASE_URL + `profiles/` + _.steamid,
            "data-miniprofile": `s` + _.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: _.persona_name,
          }),
        })
      );
    }
  },
  _ = (_) => {
    switch (_.userType) {
      case `presenter`:
        return (0, _.jsx)(_, {
          toolTipContent: _(`#BroadcastChat_Role_Presenter_ttip`),
          children: (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        });
      case `moderator`:
        return (0, _.jsx)(_, {
          toolTipContent: _(`#BroadcastChat_Role_Moderatorr_ttip`),
          children: (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        });
      case `broadcaster`:
        return (0, _.jsx)(_, {
          toolTipContent: _(`#BroadcastChat_Role_Broadcaster_ttip`),
          children: (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        });
      default:
        return null;
    }
  },
  _ = class extends _.Component {
    constructor(_) {
      (super(_), _(this));
    }
    m_chat = void 0;
    messagesContainer = _.createRef();
    componentDidMount() {
      this.StartChat();
    }
    componentDidUpdate(_) {
      (this.m_chat &&
        this.m_chat.m_bAutoScroll &&
        this.ScrollToNewestMessages(),
        (this.props.steamID !== _.steamID ||
          this.props.broadcastID !== _.broadcastID ||
          this.props.broadcastChannelID !== _.broadcastChannelID) &&
          this.StartChat());
    }
    componentWillUnmount() {
      this.m_chat && this.m_chat.Stop();
    }
    StartChat() {
      this.m_chat && this.m_chat.Stop();
      let _ = _.Get().GetOrCreateChat(
        this.props.broadcastChannelID ?? ``,
        this.props.steamID ?? ``,
      );
      if (((this.m_chat = _), this.props.broadcastChannelID))
        _.StartForChannel(this.props.broadcastChannelID);
      else if (
        this.props.steamID &&
        this.props.steamID &&
        (this.props.broadcastID || this.props.globalChat)
      ) {
        let _ = this.props.broadcastID || `0`;
        (_.StartForSteamID(this.props.steamID, _),
          this.ScrollToNewestMessages());
      }
    }
    IsTrustedDomain(_) {
      return !!_.match(_);
    }
    AddLinksEmoticons(_, _) {
      _ && this.m_chat?.GetUserEmoticons();
      let _ = _.split(_),
        _ = [];
      for (let _ = 0; _ < _.length; _ += 1)
        _ % 2 == 1
          ? _.push(
              (0, _.jsx)(
                _,
                {
                  emoticon: _[_],
                  large: !0,
                },
                _,
              ),
            )
          : _.push(_[_]);
      return _;
    }
    HandleScroll(_) {
      let _ = this.props.bInvertLayout
        ? _.currentTarget.scrollTop < 6
        : _.currentTarget.scrollTop + _.currentTarget.clientHeight >=
          _.currentTarget.scrollHeight - 6;
      this.m_chat && (this.m_chat.m_bAutoScroll = _);
    }
    ScrollToNewestMessages() {
      this.messagesContainer &&
        this.messagesContainer.current &&
        (this.messagesContainer.current.scrollTop = this.props.bInvertLayout
          ? 0
          : this.messagesContainer.current.scrollHeight);
    }
    OnContextMenu(_, _) {
      let _ = this.m_chat;
      if (!_ || _.type !== _.Chat) return null;
      let _ = [],
        _ = _.IsUserBroadcaster(_.GetUserSteamID()),
        _ = _.BIsUserBroadcastModerator(_.GetUserSteamID());
      return (
        (_ && _.is_support) || _ || _
          ? _.push(
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.RemoveUserMessagesServer(_.steamid, _.persona_name),
                  children: _(`#BroadcastChat_RemoveMessages`),
                },
                `remove`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(_.steamid, 1, 12, !1, _.persona_name),
                  children: _(`#BroadcastChat_half_Mute`),
                },
                `updatebanh`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(_.steamid, 1, 24, !1, _.persona_name),
                  children: _(`#BroadcastChat_day_Mute`),
                },
                `updateband`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(_.steamid, 1, 168, !1, _.persona_name),
                  children: _(`#BroadcastChat_week_Mute`),
                },
                `updatebanw`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(_.steamid, 1, 0, !0, _.persona_name),
                  children: _(`#BroadcastChat_perm_Mute`),
                },
                `updatebanp`,
              ),
              (0, _.jsx)(
                _,
                {
                  onSelected: () =>
                    _.UpdateUserChatBan(
                      _.steamid,
                      0,
                      0,
                      !1,
                      _.persona_name,
                      !0,
                    ),
                  children: _(`#BroadcastChat_Unmute`),
                },
                `removeban`,
              ),
            )
          : _.IsUserMutedLocally(_.steamid)
            ? _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: () =>
                      _.UnmuteUserForSession(_.steamid, _.persona_name),
                    children: _(`#BroadcastChat_UnmuteLocal`),
                  },
                  `unmuteuser`,
                ),
              )
            : _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: () =>
                      _.MuteUserForSession(_.steamid, _.persona_name),
                    children: _(`#BroadcastChat_MuteLocal`),
                  },
                  `muteuser`,
                ),
              ),
        ((_ && _.is_support) || _.IsUserBroadcaster(_.GetUserSteamID())) &&
          _.steamid &&
          (_.BIsUserBroadcastModerator(_.steamid)
            ? _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: () =>
                      _.UpdateBroadcastChatModerator(
                        _.steamid,
                        !1,
                        _.persona_name,
                      ),
                    children: _(`#BroadcastChat_Remove_Moderator`),
                  },
                  `removemod`,
                ),
              )
            : _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: () =>
                      _.UpdateBroadcastChatModerator(
                        _.steamid,
                        !0,
                        _.persona_name,
                      ),
                    children: _(`#BroadcastChat_Add_Moderator`),
                  },
                  `addmod`,
                ),
              )),
        _.length
          ? _(
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      _(`#BroadcastChat_User`),
                      (0, _.jsx)(`br`, {}),
                      (0, _.jsx)(`span`, {
                        className: _,
                        children: _.persona_name,
                      }),
                    ],
                  }),
                  _,
                ],
              }),
              _,
            )
          : null
      );
    }
    GetTypeClassName(_) {
      return _.type === _.Notification ? _ : _.type === _.Error ? _ : _;
    }
    FormatMessage(_, _) {
      if (_.type === _.Chat) {
        let _ = _ ? _.FilterText(_.steamid, _.msg) : _.msg;
        return this.AddLinksEmoticons(_, !1);
      }
      return _.msg;
    }
    RenderUserChatLine(_, _, _, _) {
      let _ = _?.get(_.steamid),
        _ = _.type === _.Chat ? _(_.steamid, _, _) : ``;
      return (0, _.jsxs)(
        `div`,
        {
          className: this.GetTypeClassName(_),
          onContextMenu: (_) => this.OnContextMenu(_, _),
          children: [
            _.type === _.Chat &&
              (0, _.jsx)(_, {
                userType: _,
              }),
            _.flair &&
              (0, _.jsx)(`span`, {
                className: `xDmEH9mDo3o-`,
                children: this.AddLinksEmoticons(_.flair, !1),
              }),
            _.type === _.Chat &&
              (0, _.jsx)(_, {
                userType: _,
                msg: _,
                presenterInfo: _,
              }),
            _.type === _.Chat &&
              _.GetBroadcastSteamID() === _.steamid &&
              (0, _.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${_(`#BroadcastChat_Broadcaster`)})`,
              }),
            _.type === _.Chat &&
              _.m_mapChannelModeratorUsers.get(_.steamid) &&
              (0, _.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${_(`#BroadcastChat_Moderator`)})`,
              }),
            (0, _.jsxs)(`span`, {
              className: `${_} ${this.AddLinksEmoticons(_.msg, !1).filter((_) => _ && typeof _ == `string`).length ? `` : _}`,
              children: [
                _.type === _.Chat ? ` : ` : ``,
                this.FormatMessage(_, _.TextFilterStore),
              ],
            }),
          ],
        },
        _.instance_id + `_` + _.client_ts + `_` + _,
      );
    }
    render() {
      let {
          hidden: _,
          bPartnerMemberOnlyChat: _,
          bInvertLayout: _,
          onSignIn: _,
        } = this.props,
        _ = this.m_chat,
        _ = _ ? _.m_rgChatMessages : [],
        _ = _ ? _.reverse() : _,
        _ = this.m_chat
          ? _.GetPresenterMapForBroadcasterSteamID(
              this.m_chat.GetBroadcastSteamID(),
            )
          : void 0,
        _ = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
      return (0, _.jsxs)(`div`, {
        className: _(_, `ChatPanel`),
        style: _
          ? {
              display: `none`,
            }
          : void 0,
        children: [
          (0, _.jsx)(_, {
            latestAnnouncement: _,
          }),
          _ &&
            !!this.m_chat &&
            (0, _.jsx)(_, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: _,
              onSignIn: _,
            }),
          (0, _.jsx)(_, {}),
          (0, _.jsx)(`div`, {
            className: _(`${_} ${_}`, `ChatMessages`),
            onScroll: this.HandleScroll,
            ref: this.messagesContainer,
            children: _ && _.map((_, _) => this.RenderUserChatLine(_, _, _, _)),
          }),
          (0, _.jsx)(_, {}),
          !_ &&
            !!this.m_chat &&
            (0, _.jsx)(_, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: _,
              onSignIn: _,
            }),
        ],
      });
    }
  };
(_([_], _.prototype, `m_chat`, void 0),
  _([_], _.prototype, `StartChat`, null),
  _([_], _.prototype, `HandleScroll`, null),
  _([_], _.prototype, `OnContextMenu`, null),
  _([_], _.prototype, `RenderUserChatLine`, null),
  (_ = _([_], _)));
function _(_) {
  let {
    oChat: _,
    emoticonStore: _,
    bPartnerMemberOnlyChat: _,
    onSignIn: _,
  } = _;
  return _ && (!_?.logged_in || !_?.is_partner_member)
    ? (0, _.jsx)(_, {})
    : _?.logged_in
      ? (0, _.jsx)(_, {
          oChat: _,
          emoticonStore: _,
        })
      : _
        ? (0, _.jsx)(_, {
            onSignIn: _,
          })
        : null;
}
function _(_) {
  let { oChat: _, emoticonStore: _ } = _,
    [_, _] = _.useState(``),
    _ = _.useRef(null),
    _ = _(() => _.m_bRateLimited),
    _ = _.useCallback(
      (_) => {
        !_.shiftKey &&
          _.charCode === 13 &&
          (_.m_bRateLimited || (_.SendMessage(_), _(``)), _.preventDefault());
      },
      [_, _],
    ),
    _ = _.useCallback(
      (_, _ = !1) => {
        (_(_ + `\u02D0${_}\u02D0`), _?.current && _.current.focus());
      },
      [_, _],
    ),
    _ = () => {
      (_.SendMessage(_), _(``));
    },
    _ = _ || _.trim().length == 0,
    _ = _(_, _.length == 0 && `_4X5-n9MaD8g-`);
  return (0, _.jsx)(`div`, {
    className: _(void 0, `ChatEntryCtn`),
    children: (0, _.jsxs)(`div`, {
      className: _(_, `ChatEntry`),
      children: [
        (0, _.jsxs)(`form`, {
          className: `${_}`,
          children: [
            (0, _.jsx)(`textarea`, {
              className: _,
              placeholder: _(`#BroadcastChat_EnterResponse`),
              onKeyPress: _,
              onChange: (_) => _(_.target.value),
              value: _,
              ref: _,
            }),
            _ &&
              (0, _.jsx)(_, {
                nSeconds: _.m_nRateLimitSeconds,
                bRateLimited: _.m_bRateLimited,
              }),
            (0, _.jsx)(`button`, {
              className: _,
              title: _(`#ChatEntryButton_Submit`),
              disabled: _,
              onClick: _,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          style: {
            height: `50px`,
          },
          className: `${_}`,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                disabled: !1,
                OnEmoticonSelected: _,
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: _,
              }),
              (0, _.jsx)(_, {
                ..._,
                textInputRef: _,
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { oChat: _, emoticonStore: _, textInputRef: _ } = _;
  return _.m_strFlairGroupID &&
    _.flair_list &&
    _.GetFlairListByGroupID(_.m_strFlairGroupID)?.length
    ? (0, _.jsx)(_, {
        disabled: !1,
        OnEmoticonSelected: (_) => {
          (_.UpdateChatMessageFlair(_), _?.current && _.current.focus());
        },
        rtLastAckedNewEmoticons: Number.MAX_VALUE,
        emoticonStore: _,
        strFlairGroupID: _.m_strFlairGroupID,
        title: _(`#ChatEntryButton_Flair`),
        buttonIcon: (0, _.jsx)(_, {}),
      })
    : null;
}
var _ = class extends _.Component {
  render() {
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: `${_} ${_}`,
            style: {
              animationDuration: `${this.props.nSeconds || 0}s`,
            },
          }),
          (0, _.jsx)(`div`, {
            className: `${_} ${_}`,
            style: {
              animationDuration: `${this.props.nSeconds || 0}s`,
            },
          }),
          (0, _.jsx)(`div`, {
            className: _,
            style: {
              animationDuration: `${this.props.nSeconds || 0}s`,
            },
          }),
        ],
      }),
    });
  }
};
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      onClick: _.onSignIn,
      className: _(_),
      children: _(`#BroadcastChat_Login`),
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#Broadcast_PartnerChat_Login`),
      }),
      !_.logged_in &&
        !_.IN_STEAMUI &&
        (0, _.jsx)(_, {
          onClick: _,
          className: _(`h1DcT5FSiVw-`),
          children: _(`#Login_SignIn`),
        }),
    ],
  });
}
