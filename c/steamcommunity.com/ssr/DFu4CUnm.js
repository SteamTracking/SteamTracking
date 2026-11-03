var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { dynamicImport: _, fallback: _, ..._ } = _,
    [_] = (0, _.useState)(() =>
      _.lazy(async () => {
        let _ = await _();
        return (
          await _(),
          {
            default: _,
          }
        );
      }),
    );
  return (0, _.jsx)(_, {
    fallback: _,
    children: (0, _.jsx)(_.Suspense, {
      fallback: _,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
var _ = _(_(), 1);
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
  return _ < 1350 && (_ = _ <= 60 ? 0 : 60), _(_) - _ < Date.now() / 1e3;
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
      (this.m_strWebAPIBaseURL = _),
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
        });
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
      return this.Send(_, _, _, _), !0;
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
      if (this.m_fnRequestNewAccessToken) {
        this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken(
          this.m_webApiAccessToken,
        );
        let _ = await this.m_refreshAccessTokenPromise;
        (this.m_refreshAccessTokenPromise = void 0),
          _ && (this.m_webApiAccessToken = _);
      }
    }
  },
  _ = _(_(), 1);
function _(_) {
  return _;
}
function _() {
  return new Set();
}
function _(_) {
  return [`PartnerEventReadState`, _];
}
function _(_, _) {
  let _ = _ ?? _(`BEventHasBeenRead`);
  return _ ? _(_.getQueryData(_(_.accountid)) ?? _(), _) : !1;
}
function _(_, _) {
  if (_.length == 0) return;
  let _ = _ ?? _(`MarkEventsAsRead`);
  _ &&
    _.setQueryData(_(_.accountid), (_) => {
      let _ = new Set(_);
      return _.forEach((_) => _.add(_)), _;
    });
}
function _(_, _) {
  return _ !== void 0 && _.has(_);
}
var _ = 60,
  _ = 30,
  _ = class {
    m_CMInterface;
    m_setShownEvents = new Set();
    m_setReadEvents = new Set();
    m_rgPendingUpload = [];
    m_schUpload = new _();
    m_bUploading = !1;
    constructor(_) {
      this.m_CMInterface = _;
    }
    RecordEventShown(_, _) {
      _ &&
        !_.bOldAnnouncement &&
        _.GID &&
        this.MarkEventShown(_.GID, _.clanSteamID.GetAccountID(), _);
    }
    RecordEventRead(_, _, _) {
      _ &&
        !_.bOldAnnouncement &&
        _.GID &&
        (_(_.GID, _) ||
          (_([_.GID], _),
          this.MarkEventRead(_.GID, _.clanSteamID.GetAccountID(), _)));
    }
    MarkEventShown(_, _, _) {
      let _ = this.MakeKey(_, _);
      if (this.m_setShownEvents.has(_)) return !1;
      this.m_setShownEvents.add(_);
      let _ = new _();
      return (
        _.set_event_gid(_),
        _.set_clanid(_),
        _.set_display_location(_),
        _.set_mark_shown(!0),
        this.QueueForUpload(_),
        !0
      );
    }
    MarkEventRead(_, _, _) {
      let _ = this.MakeKey(_, _);
      if (this.m_setReadEvents.has(_)) return !1;
      this.m_setReadEvents.add(_);
      let _ = new _();
      return (
        _.set_event_gid(_),
        _.set_clanid(_),
        _.set_display_location(_),
        _.set_mark_read(!0),
        this.QueueForUpload(_),
        !0
      );
    }
    MakeKey(_, _) {
      return `${_}_${_}`;
    }
    QueueForUpload(_) {
      this.m_rgPendingUpload.push(_), this.ScheduleUpload();
    }
    ScheduleUpload() {
      if (!this.m_bUploading) {
        if (this.m_rgPendingUpload.length >= _) {
          this.UploadPendingData();
          return;
        }
        this.m_schUpload.IsScheduled() ||
          this.m_schUpload.Schedule(_ * 1e3, this.UploadPendingData);
      }
    }
    async Flush() {
      if (!this.m_bUploading) return this.UploadPendingData();
    }
    async UploadPendingData() {
      if (this.m_bUploading) return;
      this.m_schUpload.Cancel();
      let _ = this.m_rgPendingUpload.splice(0, _);
      if (_.length == 0) return;
      let _ = !1;
      if (this.m_CMInterface) {
        let _ = _.Init(_);
        for (let _ of _) _.Body().add_markings(_);
        this.m_bUploading = !0;
        let _ = await _.MarkPartnerEventsForUser(
          this.m_CMInterface.GetServiceTransport(),
          _,
        );
        (this.m_bUploading = !1), (_ = _.GetEResult() == 1);
      } else {
        if (!_.logged_in) return;
        let _ = _.map((_) => _.toObject()),
          _ = _() + `actions/ajaxmarkpartnerevents`,
          _ = new FormData();
        _.append(`sessionid`, _()), _.append(`request`, JSON.stringify(_));
        try {
          _ =
            (
              await _.default.post(_, _, {
                withCredentials: !0,
              })
            ).data.success == 1;
        } catch (_) {
          let _ = _(_);
          console.error(
            `CPartnerEventUserTracking.UploadPendingData error ` +
              _.strErrorMsg,
            _,
          );
        }
      }
      if (_) {
        this.m_rgPendingUpload.length > 0 && this.ScheduleUpload();
        return;
      }
      console.log(`Saving news event state failed. Will try again soon!`),
        (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(_)),
        this.m_schUpload.Schedule(_ * 1e3, this.UploadPendingData);
    }
  };
_([_], _.prototype, `UploadPendingData`, null);
var _;
function _() {
  return (_ ||= new _()), _;
}
var _ = _.createContext(void 0);
function _(_) {
  let [_] = _.useState(() => new _());
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  return _.useContext(_) || _();
}
export { _, _, _, _ };
