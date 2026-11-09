import { _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _, _ } from "./cookies.client.js";
import { _ } from "./base64-js.js";
var _ = _(_(), 1);
_();
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
      _.bSendAuth && !_)
    ) {
      let _ = `${_} was called over WebAPI with auth`;
      (console.warn(_),
        _().ReportError(Error(_), {
          bIncludeMessageInIdentifier: !0,
        }));
    }
    if (
      (this.m_webApiAccessToken &&
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
  return _(_.rgBrowserAPISites, `partner`);
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
  return [_.PARTNER_BASE_URL];
}
function _(_) {
  let _ = _();
  return _ && _().includes(_) ? new _(_) : _;
}
