import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _ } from "./libraries.js";
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
} from "./main.js";
var _ = _(_(), 1),
  _ = new (class {
    m_transport = null;
    m_registry = null;
    SetDefaultTransport(_) {
      this.m_transport != null &&
        console.error(
          `Multiple attempts to set a default WebUI transport: overriding previous`,
        ),
        (this.m_transport = _);
    }
    GetDefaultTransport() {
      return this.m_transport;
    }
    SetDefaultHandlerRegistry(_) {
      this.m_registry != null &&
        console.error(
          `Multiple attempts to set a default WebUI message handler registry: overriding previous`,
        ),
        (this.m_registry = _);
    }
    GetDefaultHandlerRegistry() {
      return this.m_registry;
    }
  })();
function _() {
  return _;
}
var _ = _(_()),
  _ = _(_()),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.dictionary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamEngine_GetTextFilterDictionary_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.pid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.search_term || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
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
  (_.SendMsgUpdateTextFilterDictionary = _),
    (_.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgGetTextFilterDictionary = _),
    (_.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: _,
    });
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
  (_.SendMsgNotifyTextFilterDictionaryChanged = _),
    (_.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`SteamEngine.GetGameIDForPID#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgGetGameIDForPID = _),
    (_.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: _,
    });
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
  (_.SendMsgSetOverlayEscapeKeyHandling = _),
    (_.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
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
var _ = class {
  constructor() {
    _(this);
  }
  m_mapCallbacks = new Map();
  m_rgRegisteredEMsgs = [];
  m_mapServiceMethodHandlers = new Map();
  m_rgRegisteredServiceMethodHandlers = [];
  DispatchMsgToHandlers(_, _) {
    let _ = _.GetEMsg();
    if (_ == 146) {
      let _ = _.Hdr().target_job_name();
      if (_) {
        let _ = this.m_mapServiceMethodHandlers.get(_);
        if (_) {
          this.DEBUG_LogMessageDispatch(_, _[0]);
          for (let _ of _)
            try {
              _.invoke(_, _);
            } catch (_) {
              _ instanceof Error
                ? _().ReportError(_)
                : console.error(
                    `MessageHandlers failed to dispatch message to handler (${_}): `,
                    _,
                  );
            }
          return !0;
        }
      }
    } else {
      let _ = this.m_mapCallbacks.get(_);
      if (_) {
        this.DEBUG_LogMessageDispatch(_, _[0]);
        for (let _ of _)
          try {
            _.invoke(_);
          } catch (_) {
            _ instanceof Error
              ? _().ReportError(_)
              : console.error(
                  `MessageHandlers failed to dispatch message to handler: `,
                  _,
                );
          }
        return !0;
      }
    }
    return !1;
  }
  DEBUG_LogMessageDispatch(_, _) {}
  get emsg_list() {
    return this.m_rgRegisteredEMsgs;
  }
  get servicemethod_list() {
    return this.m_rgRegisteredServiceMethodHandlers;
  }
  AddCallback(_, _, _) {
    let _ = this.m_mapCallbacks.get(_);
    return (
      _ ||
        ((_ = []),
        this.m_mapCallbacks.set(_, _),
        this.m_rgRegisteredEMsgs.push(_)),
      _.push({
        invoke: _,
        msgClass: _,
      }),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapCallbacks.get(_);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  AddServiceMethodHandler(_, _) {
    let _ = (_, _) => {
      let _ = _.InitFromMsg(_.request, _),
        _ = _.Init(_.response, 147),
        _ = _(_, _),
        _ = (_) => {
          _.Hdr().set_eresult(_), _(_);
        };
      _ instanceof Promise
        ? _.then(_).catch(() => {
            _(2);
          })
        : _(_);
    };
    return (
      this.m_mapServiceMethodHandlers.has(_.name)
        ? console.error(`Duplicate registration for method ` + _.name)
        : (this.m_mapServiceMethodHandlers.set(_.name, [
            {
              invoke: _,
              msgClass: _.request,
            },
          ]),
          this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapServiceMethodHandlers.get(_.name);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  AddServiceNotificationHandler(_, _) {
    let _ = (_, _) => {
        _(_.InitFromMsg(_.request, _));
      },
      _ = this.m_mapServiceMethodHandlers.get(_.name);
    return (
      _ ||
        ((_ = []),
        this.m_mapServiceMethodHandlers.set(_.name, _),
        this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
      _.push({
        invoke: _,
        msgClass: _.request,
      }),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapServiceMethodHandlers.get(_.name);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  RegisterBaseEMessageHandler(_, _) {
    return this.AddCallback(_, void 0, _);
  }
  RegisterEMessageHandler(_, _, _) {
    return this.AddCallback(_, _, (_) => {
      _(_.InitFromMsg(_, _));
    });
  }
  RegisterEMessageAction(_, _, _) {
    return this.AddCallback(_, _, (_) => {
      _(() => {
        _(_.InitFromMsg(_, _));
      });
    });
  }
  RegisterServiceNotificationHandler(_, _) {
    return this.AddServiceNotificationHandler(_, _);
  }
  RegisterServiceNotificationHandlerAction(_, _) {
    return this.AddServiceNotificationHandler(_, (_) => {
      let _;
      return (
        _(() => {
          _ = _(_);
        }),
        _
      );
    });
  }
  RegisterServiceMethodHandler(_, _) {
    return this.AddServiceMethodHandler(_, _);
  }
  RegisterServiceMethodHandlerAction(_, _) {
    return this.AddServiceMethodHandler(_, (_, _) => {
      let _;
      return (
        _(() => {
          _ = _(_, _);
        }),
        _
      );
    });
  }
};
_([_], _.prototype, `m_rgRegisteredEMsgs`, void 0),
  _([_], _.prototype, `m_rgRegisteredServiceMethodHandlers`, void 0);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.auth_key || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CTransportAuth_Authenticate_Request`;
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
      return `CTransportAuth_Authenticate_Response`;
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`TransportAuth.Authenticate#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  (_.SendMsgAuthenticate = _),
    (_.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: _,
    });
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
    (this.m_sName = _),
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
      (this.m_nReconnectAttemptTimeoutMs = _.nReconnectAttemptTimeoutMs ?? 1e4);
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
        if (_.result == 1) return (this.m_bConnecting = !1), _;
        this.Log.Warning(`connect attempt failed: ${_.result} - ${_.message}`);
      } catch (_) {
        this.Log.Warning(`connect attempt failed: exception ${_.name} - ${_}`);
      }
      let _ = this.GetInterAttemptBackoffMs(_);
      this.Log.Info(`connect retry: attempt:${_}/${_} backoff:${_}`),
        await new Promise((_) => setTimeout(_, _)),
        (this.m_socket = null),
        (_ += 1);
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
    this.Log.Info(`disconnect requested`),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close();
  }
  PrepareForShutdown() {
    this.Log.Info(`shutdown pending`), (this.m_bDisconnectRequested = !0);
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    this.Log.Info(`start reconnect`),
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
          }));
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
    for (; _.readyState == WebSocket.CONNECTING && _ > 0; )
      _--, await new Promise((_) => setTimeout(_, 100));
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
      this.Log.Info(`websocket closed`),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning(`websocket unexpectedly closed`);
    let _ = this.BShouldReconnect();
    this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: _,
    }),
      _ && this.StartReconnect();
  }
  async OnSocketMessage(_) {
    this.m_fnOnMessageHandler(_.data);
  }
  SendSerializedMessage(_) {
    try {
      return this.m_socket.send(_), 1;
    } catch {
      return 2;
    }
  }
};
_([_], _.prototype, `OnSocketError`, null),
  _([_], _.prototype, `OnSocketOpen`, null),
  _([_], _.prototype, `OnSocketClose`, null),
  _([_], _.prototype, `OnSocketMessage`, null);
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
      (this.m_nMaximumMsgSizeBytes = _.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, _.portSteamUI, _.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          _.portClientdll,
          _.authKeyClientdll,
        ),
        _().SetDefaultTransport(this),
        _().SetDefaultHandlerRegistry(this.m_messageHandlers),
        _.RegisterForNotifyStartShutdown(this.OnStartShutdown);
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
          _.Error(`SendMsg: Invalid client execution site: ${_}`),
            _(`Transport SendMsg: invalid client execution site ${_}`);
          return;
        }
        let _ = this.m_mapConnectionDetails.get(_);
        if (_ == null) {
          _.Error(
            `SendMsg: could not find connection for execution site: ${_}`,
          ),
            _(
              `Transport SendMsg: could not find connection for execution site ${_}`,
            );
          return;
        }
        let _ = _.connection;
        if (!_.BCanSendMessages()) {
          let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
          this.m_mapServiceCallErrorCount.set(_, _ + 1);
          let _ = `SendMsg: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
          _ == 1 && this.ReportError(_),
            _.Warning(_ + ` error count: ${_}`),
            _(`Transport SendMsg: socket not ready`);
          return;
        }
        let _ = this.m_iMsgSeq++;
        _.SetEMsg(146),
          _.Hdr().set_target_job_name(_),
          _.Hdr().set_jobid_source(`` + _);
        let _ = _.Serialize();
        if (_.byteLength >= this.m_nMaximumMsgSizeBytes) {
          _.Error(
            `SendMsg: message exceeds maximum size: ${_.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let _ = _.Init(_);
          _.Hdr().set_eresult(2), _(_);
        } else
          _.SendSerializedMessage(_) == 1
            ? this.m_mapPendingMethodRequests.set(_, {
                m_iSeq: _,
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
      (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
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
        _.Warning(`OnWebsocketReconnect: Failed to reconnect to steam client`),
          this.m_fnOnReconnectErrorHandler?.({});
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
      _(_ == _.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(_);
      let _ = _.InitFromMsg(_.m_responseClass, _);
      _.m_fnCallback(_);
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
        _.Hdr().set_eresult(2), _.m_fnCallback(_);
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
_([_], _.prototype, `OnWebsocketReconnectStart`, null),
  _([_], _.prototype, `OnWebsocketReconnectFinish`, null),
  _([_], _.prototype, `OnWebsocketClose`, null),
  _([_], _.prototype, `OnWebsocketMessage`, null),
  _([_], _.prototype, `OnStartShutdown`, null);
var _ = new _();
function _() {
  return _.IN_MOBILE ? _ : _();
}
function _(_) {
  if (_ === ``) return !1;
  try {
    return RegExp(`\\b(` + _ + `)\\b`, `ugi`), !0;
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
      (this.m_TextFilterPreferences = {
        eTextFilterSetting: _.text_filter_setting(),
        bIgnoreFriends: _.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new _()),
        (this.m_DataAccess = _);
    }
    async Init(_ = 0, _ = null, _ = null, _ = null) {
      (this.m_bInitialized = !1),
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
        await this.EnsureFiltersLoaded();
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
          (this.m_bFilterChangedWhileLoading = !1),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0);
        while (this.m_bFilterChangedWhileLoading);
      } finally {
        (this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null);
      }
    }
    RegisterPlayerNotifications(_) {
      this.m_rgUnregisterPlayerNotifications.forEach((_) => _()),
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
          );
    }
    OnPlayerSettingsChanged() {
      this.m_bInitialized && !this.m_bOngoingLoad && this.OnFilterDataChanged();
    }
    InitSteamEngineLanguage(_) {
      let _ = _.Init(_);
      _.Body().set_language(_),
        _.Body().set_type(`profanity`),
        _.SendMsgUpdateTextFilterDictionary(_, this.m_WebUIServiceTransport),
        _.Body().set_type(`banned`),
        _.SendMsgUpdateTextFilterDictionary(_, this.m_WebUIServiceTransport);
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
          console.warn(`Error parsing cached text filter word list`, _),
            (this.m_TextFilterWords = new _());
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
      (this.m_bHaveCompleteFilter = _ != null && _ != null),
        _ != null && _ != null && this.BRebuildFilter(_, _);
    }
    SaveFilter() {
      this.SaveObfuscatedString(
        `CTextFilterStore_strBannedPattern`,
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          `CTextFilterStore_strCleanPattern`,
          this.m_strCleanPattern,
        );
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
      _.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          _.text_filter_setting()),
        (_ = !0)),
        _.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            _.text_filter_ignore_friends()),
          (_ = !0)),
        _ && this.SaveTextFilterPreferences();
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(_) {
      (this.m_TextFilterWords = _), this.SaveTextFilterWords();
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    m_nLoadLanguagesRetryDelaySec = _;
    async LoadLanguages() {
      (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0));
      try {
        let _ = await this.LoadLanguage(_.LANGUAGE);
        if (
          (_.LANGUAGE !== `english` &&
            (_ = (await this.LoadLanguage(`english`)) && _),
          !_)
        )
          throw Error(`clean_public dictionary unavailable`);
        (this.m_nLoadLanguagesRetryDelaySec = _),
          (this.m_bWordListsComplete = !0);
      } catch (_) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          _,
        );
        let _ = this.m_nLoadLanguagesRetryDelaySec;
        console.warn(`LoadLanguages caught`, _, `retry in`, _, `seconds`),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
            (this.m_nLoadLanguagesRetryTimeout = void 0),
              this.EnsureFiltersLoaded();
          }, _ * 1e3));
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
        (this.m_strCleanWords += _.data),
          _ && this.SaveObfuscatedString(_, _.data);
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
      (_ = _.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (_ = this.m_strCleanWords.split(_)),
        (_ = _.concat(this.m_TextFilterWords.text_filter_custom_clean_words()));
      let _ = this.CreatePattern(_),
        _ = this.CreatePattern(_);
      _ != `` && (_ = `^(` + _ + `)$`),
        this.BRebuildFilter(_, _) &&
          this.m_bWordListsComplete &&
          this.SaveFilter(),
        (this.m_bHaveCompleteFilter = this.m_bWordListsComplete);
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
          console.warn(`Couldn't compile textfilter bannedwords regex`),
            _().ReportError(
              Error(`Couldn't compile textfilter bannedwords regex: ${_}`),
            ),
            (this.m_strBannedPattern = ``);
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = _),
        _ !== ``)
      )
        try {
          this.m_regexCleanWords = new RegExp(_, `ugi`);
        } catch (_) {
          console.warn(`Couldn't compile textfilter cleanwords regex`),
            _().ReportError(
              Error(`Couldn't compile textfilter cleanwords regex: ${_}`),
            ),
            (this.m_strCleanPattern = ``);
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
_([_], _.prototype, `m_TextFilterPreferences`, void 0),
  _([_], _.prototype, `m_mapPlayerCache`, void 0),
  _([_], _.prototype, `m_regexBannedWords`, void 0),
  _([_], _.prototype, `m_regexCleanWords`, void 0),
  _([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_bFilterChangedWhileLoading`, void 0),
  _([_], _.prototype, `m_bOngoingLoad`, void 0),
  _([_], _.prototype, `Init`, null),
  _([_], _.prototype, `OnTextFilterDictionaryChanged`, null),
  _([_], _.prototype, `UpdateCommunityPreferences`, null),
  _([_], _.prototype, `BRebuildFilter`, null);
var _;
function _() {
  if (!_) {
    let _ = new Set(),
      _ = {
        sessionid: _(),
        origin: _(),
      };
    _.default
      .get(_.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: _,
        withCredentials: !0,
      })
      .then((_) => {
        for (let _ of _.data.friendslist?.friends ?? [])
          _(_.efriendrelationship) && _.add(new _(_.ulfriendid).GetAccountID());
      }),
      (_ = (_) => _.has(_));
  }
  return _;
}
export { _, _ };
