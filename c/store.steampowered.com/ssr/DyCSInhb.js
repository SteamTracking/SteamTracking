function _(_, _) {
  return !!_ && (_.includes(`all`) || _.includes(_));
}
var _ = _(_(), 1);
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
  return _(_.rgBrowserAPISites, `store`);
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
