import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
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
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { _ } from "./chunk~25a6634263.js?contenthash=DFHxRlLQ";
import { _, _ } from "./library.js?contenthash=t9xy63v9";
var _ = _(_());
function _(_) {
  if (_.default.isCancel(_))
    return {
      strErrorMsg: `Action Cancelled:` + _,
      errorCode: 52,
    };
  if (_ == null)
    return {
      strErrorMsg: `Unknown Error: ` + _,
      errorCode: 2,
    };
  if (
    _.response !== void 0 &&
    _.response.data &&
    typeof _.response.data == `object`
  ) {
    if (`msg` in _.response.data)
      return {
        strErrorMsg: _.response.data.msg,
        errorCode: _.response.data.success,
      };
    if (`err_msg` in _.response.data)
      return {
        strErrorMsg: _.response.data.err_msg,
        errorCode: _.response.data.success,
      };
    if (`message` in _.response.data)
      return {
        strErrorMsg: _.response.data.message,
        errorCode: _.response.data.success,
      };
    if (`success` in _.response.data)
      return {
        strErrorMsg: `error code: ` + _.response.data.success,
        errorCode: _.response.data.success,
      };
  } else if (typeof _.data == `object` && _.data) {
    if (`msg` in _.data)
      return {
        strErrorMsg: _.data.msg,
        errorCode: _.data.success,
      };
    if (`err_msg` in _.data)
      return {
        strErrorMsg: _.data.err_msg,
        errorCode: _.data.success,
      };
    if (`message` in _.data)
      return {
        strErrorMsg: _.data.message,
        errorCode: _.data.success,
      };
    if (`success` in _.data)
      return {
        strErrorMsg: `error code: ` + _.data.success,
        errorCode: _.data.success,
      };
  } else if (_.success !== void 0 && _.msg !== void 0)
    return {
      strErrorMsg: _.msg,
      errorCode: _.success,
    };
  else if (_.success !== void 0 && _.message !== void 0)
    return {
      strErrorMsg: _.message,
      errorCode: _.success,
    };
  else if (_.success !== void 0 && _.err_msg !== void 0)
    return {
      strErrorMsg: _.err_msg,
      errorCode: _.success,
    };
  else if (typeof _ == `string` && _.length > 1024)
    (console.groupCollapsed(`GetMsgAndErrorCodeFromResponse cannot parse: `),
      console.warn(_),
      console.groupEnd());
  else if (typeof _ == `object` && _ instanceof _)
    return {
      strErrorMsg: `` + _.GetErrorMessage(),
      errorCode: _.GetEResult(),
    };
  else console.warn(`GetMsgAndErrorCodeFromResponse cannot parse: `, _);
  return typeof _ == `object` && `status` in _
    ? {
        strErrorMsg:
          `Unknown Error: ` +
          _ +
          `
Status Code:` +
          _.status,
        errorCode: 2,
      }
    : {
        strErrorMsg: `Unknown Error: ` + _,
        errorCode: 2,
      };
}
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  try {
    if (!_ || typeof _ != `string`) return null;
    let _ = _.split(`.`);
    if (_.length !== 3) return null;
    let [_, _] = _,
      _ = _(_),
      _ = _(_);
    return !_ || !_
      ? null
      : {
          header: JSON.parse(_),
          body: JSON.parse(_),
        };
  } catch (_) {
    return (
      console.error(`Exception while attempting to decode token: "${_}"`), null
    );
  }
}
function _(_) {
  return _ ? _.body.exp : 0;
}
function _(_) {
  return _ ? _.body.nbf || _.body.iat : 0;
}
function _(_) {
  let _ = _(_),
    _ = _(_),
    _ = 900,
    _ = _ - _;
  return (_ < 1350 && (_ = _ <= 60 ? 0 : 60), _(_) - _ < Date.now() / 1e3);
}
function _(_) {
  return atob(_.replace(/-/g, `+`).replace(/_/g, `/`));
}
var _ = class _ extends _.Message {
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
              _: _.readEnum,
              _: _.writeEnum,
            },
            preference_state: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            content_customization: {
              _: 3,
              _: _,
            },
            valve_analytics: {
              _: 4,
              _: _,
            },
            third_party_analytics: {
              _: 5,
              _: _,
            },
            third_party_content: {
              _: 6,
              _: _,
            },
            utm_enabled: {
              _: 7,
              _: !0,
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
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recentapps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recentapps: {
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
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.product_impressions_tracking || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            product_impressions_tracking: {
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
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.google_analytics || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            google_analytics: {
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
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.youtube || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            youtube: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            vimeo: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            sketchfab: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            twitter: {
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
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
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
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
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
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`AccountPrivacy.GetCookiePreferences#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  _.GetCookiePreferences = _;
})((_ ||= {}));
function _(_) {
  if (_.preferenceControls.isTechnicallyNecessary) return !0;
  let _ = _();
  if (!_) return !1;
  switch (_.preference_state) {
    case 1:
    case 0:
      return !0;
    case 2:
    case 4:
      return !1;
  }
  return (
    `IsAllowed` in _.preferenceControls && _.preferenceControls.IsAllowed(_)
  );
}
var _ = {
    name: `cookieSettings`,
    options: {
      secure: !0,
      httpOnly: !1,
      path: `/`,
      sameSite: `none`,
      maxAge: 31536e6,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    name: `sessionid`,
    options: {
      secure: !0,
      path: `/`,
      sameSite: `none`,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    name: `shoppingCartGID`,
    options: {
      path: `/`,
      secure: !0,
      maxAge: 6048e5,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    name: `steamLoginSpoofSteamID`,
    options: {
      path: `/`,
      secure: !0,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _(_) {
  if (!(`document` in globalThis) || !document.cookie) return;
  let _ = document.cookie.match(`(^|; )` + _.name + `=([^;]*)`);
  if (_ && _[2]) return decodeURIComponent(_[2]);
}
function _(_, _) {
  if (!(`document` in globalThis) || !_(_)) return;
  let _ = _.options?.path ?? `/`,
    _ = ``;
  (_.options?.expires
    ? (_ += `;expires=` + _.options.expires.toUTCString())
    : _.options?.maxAge &&
      (_ += `;max-age=` + Math.floor(_.options.maxAge / 1e3)),
    _.options?.secure && (_ += `;secure`),
    (document.cookie =
      encodeURIComponent(_.name) +
      `=` +
      encodeURIComponent(_) +
      _ +
      `;path=` +
      _));
}
function _(_) {
  return _(
    {
      ..._,
      options: {
        ..._.options,
        expires: new Date(0),
      },
    },
    ``,
  );
}
function _() {
  return window.SSR?.renderContext?.cookiePrefs;
}
var _ = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_strWebAPIBaseURL;
  m_webApiAccessToken = ``;
  m_bJsonMode = !1;
  m_bJWTToken = !1;
  m_fnRequestNewAccessToken;
  m_refreshAccessTokenPromise;
  m_dtLastExpireCheck = 0;
  m_strSpoofedSteamID = ``;
  constructor(_, _ = ``, _ = !1, _) {
    ((this.m_strWebAPIBaseURL = _),
      (this.m_webApiAccessToken = _),
      (this.m_bJsonMode = _),
      (this.m_fnRequestNewAccessToken = _),
      (this.m_bJWTToken = _(_) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !0,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !0,
        }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !1,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !1,
        }),
        MakeReady: this.MakeReady.bind(this),
      }));
    let _ = _(_);
    _ && /[0-9]+/g.test(_) && (this.m_strSpoofedSteamID = _);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new _();
  }
  RTime32ToDate(_) {
    return new Date(_ * 1e3);
  }
  MakeReady() {
    return Promise.resolve({
      result: 1,
      message: `ready`,
    });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetWebAPIAccessToken() {
    return this.m_webApiAccessToken;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  async SendMsgAndAwaitResponse(_, _, _, _, _) {
    let _,
      _ = 0;
    try {
      if (this.m_bJWTToken && _.bSendAuth && this.m_webApiAccessToken) {
        let _ = Date.now() / 1e3;
        this.m_refreshAccessTokenPromise
          ? await this.m_refreshAccessTokenPromise
          : (window.bForceTokenRefresh ||
              (this.m_fnRequestNewAccessToken &&
                _ - this.m_dtLastExpireCheck > 60)) &&
            ((this.m_dtLastExpireCheck = _),
            _(_(this.m_webApiAccessToken)) &&
              (await this.AttemptTokenRefresh()));
      }
      let _ = await this.Send(_, _, _, _);
      if (((_ = _.status), _ == 200)) {
        if (
          ((_ = _.Init(_, 147)),
          _.headers &&
            (_.headers.get(`x-eresult`) &&
              _.Hdr().set_eresult(parseInt(_.headers.get(`x-eresult`))),
            _.headers.get(`x-error_message`) &&
              _.Hdr().set_error_message(_.headers.get(`x-error_message`))),
          this.m_bJsonMode)
        )
          _.SetBodyJSON(await _.json());
        else {
          let _ = new _(await _.arrayBuffer());
          _.ReadBodyFromBuffer(_, _);
        }
      }
    } catch {}
    let _ = _ === 401;
    if (!_) {
      let _ = _ ? `Unauthorized` : void 0;
      _ = this.CreateFailedMsgProtobuf(_, 3, _);
    }
    return (
      _ &&
        !this.m_refreshAccessTokenPromise &&
        this.m_bJWTToken &&
        _.bSendAuth &&
        this.m_fnRequestNewAccessToken &&
        this.m_webApiAccessToken &&
        (await this.AttemptTokenRefresh()),
      _
    );
  }
  SendNotification(_, _, _, _) {
    return (this.Send(_, _, _, _), !0);
  }
  Send(_, _, _, _) {
    let _ = this.CreateWebAPIURL(_),
      _ = _.SerializeBody(),
      _ = _.fromByteArray(_),
      _ = _.eWebAPIKeyRequirement,
      _ = _.ePrivilege == 0 && _ == 1,
      _ = {},
      _ = new URLSearchParams();
    if (
      (!_.bSendAuth &&
        _ != 1 &&
        console.error(
          `Attempting to invoke service ${_} without auth, but auth is required.`,
        ),
      _.bSendAuth,
      this.m_webApiAccessToken &&
        _.bSendAuth &&
        !_ &&
        (_.append(`access_token`, this.m_webApiAccessToken),
        this.m_strSpoofedSteamID &&
          _.append(`spoof_steamid`, this.m_strSpoofedSteamID)),
      _.bConstMethod)
    )
      return (
        _.append(`origin`, self.origin),
        this.m_bJsonMode
          ? _.append(`input_json`, JSON.stringify(_.Body().toObject()))
          : _.append(`input_protobuf_encoded`, _),
        fetch(`${_}?${_.toString()}`, _)
      );
    {
      let _ = new FormData();
      return (
        this.m_bJsonMode
          ? _.append(`input_json`, JSON.stringify(_.Body().toObject()))
          : _.append(`input_protobuf_encoded`, _),
        fetch(`${_}?${_.toString()}`, {
          ..._,
          method: `POST`,
          body: _,
        })
      );
    }
  }
  CreateWebAPIURL(_) {
    let _ = _.match(/([^.]+)\.(.+)#(\d+)/);
    if (!_ || _.length != 4) throw `Invalid service name: ${_}`;
    return `${this.m_strWebAPIBaseURL}I${_[1]}Service/${_[2]}/v${_[3]}`;
  }
  CreateFailedMsgProtobuf(_, _, _) {
    let _ = _.Init(_);
    return (
      _.Hdr().set_eresult(2),
      _.Hdr().set_transport_error(_),
      _ && _.Hdr().set_error_message(_),
      _
    );
  }
  async AttemptTokenRefresh() {
    if (this.m_fnRequestNewAccessToken)
      try {
        this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken(
          this.m_webApiAccessToken,
        ).catch(
          (_) => (console.error(`Failed to refresh access token: ${_}`), ``),
        );
        let _ = await this.m_refreshAccessTokenPromise;
        _ && (this.m_webApiAccessToken = _);
      } catch (_) {
        console.error(`Failed to refresh access token: ${_}`);
      } finally {
        this.m_refreshAccessTokenPromise = void 0;
      }
  }
};
function _(_, _) {
  return !!_ && (_.includes(`all`) || _.includes(_));
}
async function _() {
  try {
    let _ = await fetch(`${_.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({
        redir: window.location.href,
      }),
    });
    if (!_._) return !1;
    let _ = await _.json();
    if (!_.success || !_.login_url) return !1;
    let _ = new URLSearchParams();
    for (let [_, _] of Object.entries(_))
      typeof _ == `string` && _.append(_, _);
    return (
      await fetch(_.login_url, {
        method: `POST`,
        credentials: `include`,
        body: _,
      })
    )._;
  } catch {
    return !1;
  }
}
function _(_) {
  return _(_.rgBrowserAPISites, `steamui`);
}
var _ = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_fallbackInterface;
  m_refreshLoginCookiePromise;
  constructor(_) {
    ((this.m_fallbackInterface = _),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !0,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !0,
        }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !1,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !1,
        }),
        MakeReady: this.MakeReady.bind(this),
      }));
  }
  async SendMsgAndAwaitResponse(_, _, _, _, _) {
    if (!_(_)) {
      if (this.m_fallbackInterface)
        return _.bSendAuth
          ? this.m_fallbackInterface?.GetServiceTransport().SendMsg(_, _, _, _)
          : this.m_fallbackInterface
              ?.GetAnonymousServiceTransport()
              .SendMsg(_, _, _, _);
      console.error(`No browserapi version of`, _, `and no fallback`);
    }
    let _ = await this.SendMsgOnce(_, _, _, _, _);
    return _.status !== 401 ||
      !_.bSendAuth ||
      !(await this.BEnsureLoginCookieRefreshed())
      ? _.msgResult
      : (await this.SendMsgOnce(_, _, _, _, _)).msgResult;
  }
  BEnsureLoginCookieRefreshed() {
    return (
      (this.m_refreshLoginCookiePromise ??= _().finally(() => {
        this.m_refreshLoginCookiePromise = void 0;
      })),
      this.m_refreshLoginCookiePromise
    );
  }
  async SendMsgOnce(_, _, _, _, _) {
    let _,
      _ = 0;
    try {
      let _ = await this.Send(_, _, _, _);
      if (((_ = _.status), _ == 200)) {
        ((_ = _.Init(_, 147)),
          _.headers &&
            (_.headers.get(`x-eresult`) &&
              _.Hdr().set_eresult(parseInt(_.headers.get(`x-eresult`))),
            _.headers.get(`x-error_message`) &&
              _.Hdr().set_error_message(_.headers.get(`x-error_message`))));
        let _ = new _(await _.arrayBuffer());
        _.ReadBodyFromBuffer(_, _);
      }
    } catch {}
    let _ = _ === 401;
    if (!_) {
      let _ = _ ? `Unauthorized` : void 0;
      _ = this.CreateFailedMsgProtobuf(_, 3, _);
    }
    return {
      msgResult: _,
      status: _,
    };
  }
  SendNotification(_, _, _, _) {
    if (!_(_)) {
      if (this.m_fallbackInterface)
        return _.bSendAuth
          ? this.m_fallbackInterface
              ?.GetServiceTransport()
              .SendNotification(_, _, _)
          : this.m_fallbackInterface
              ?.GetAnonymousServiceTransport()
              .SendNotification(_, _, _);
      console.error(`No browserapi version of`, _, `and no fallback`);
    }
    return (this.SendNotificationAndRetryIfUnauthorized(_, _, _, _), !0);
  }
  async SendNotificationAndRetryIfUnauthorized(_, _, _, _) {
    (await this.Send(_, _, _, _)).status === 401 &&
      _.bSendAuth &&
      (await this.BEnsureLoginCookieRefreshed()) &&
      (await this.Send(_, _, _, _));
  }
  Send(_, _, _, _) {
    let _ = this.CreateBrowserAPIURL(_),
      _ = _.SerializeBody(),
      _ = _.eWebAPIKeyRequirement,
      _ = _.ePrivilege == 0 && _ == 1,
      _ = {
        credentials: `omit`,
        headers: {
          Accept: `application/octet-stream`,
        },
      },
      _ = new URLSearchParams();
    if (
      (!_.bSendAuth &&
        _ != 1 &&
        console.error(
          `Attempting to invoke service ${_} without auth, but auth is required.`,
        ),
      _.bSendAuth && !_ && (_.credentials = `same-origin`),
      _.bConstMethod)
    )
      return (
        _.append(`input_protobuf_encoded`, _.fromByteArray(_)),
        fetch(`${_}?${_.toString()}`, _)
      );
    {
      let _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength);
      return fetch(_, {
        ..._,
        method: `POST`,
        headers: {
          ..._.headers,
          "Content-Type": `application/octet-stream`,
        },
        body: _,
      });
    }
  }
  CreateBrowserAPIURL(_) {
    let _ = _.match(/([^.]+)\.(.+)#(\d+)/);
    if (!_ || _.length != 4) throw `Invalid service name: ${_}`;
    return `/um/${_[1]}/${_[2]}/`;
  }
  CreateFailedMsgProtobuf(_, _, _) {
    let _ = _.Init(_);
    return (
      _.Hdr().set_eresult(2),
      _.Hdr().set_transport_error(_),
      _ && _.Hdr().set_error_message(_),
      _
    );
  }
  MakeReady() {
    return Promise.resolve({
      result: 1,
      message: `ready`,
    });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  RTime32ToDate(_) {
    return new Date(_ * 1e3);
  }
};
function _() {
  return [];
}
function _(_) {
  let _ = _();
  return _ && _().includes(_) ? new _(_) : _;
}
