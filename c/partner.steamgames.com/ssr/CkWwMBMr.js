function _(_, _) {
  return _.filter((_) => !_.includes(_));
}
function _(_, _, _) {
  let _ = _.slice(0);
  return ((_[_] = _), _);
}
var _ = class extends _ {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(_, _, _) {
      (super(),
        (this.#e = _),
        (this.#r = _),
        (this.#n = []),
        (this.#i = []),
        (this.#t = []),
        this.setQueries(_));
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        this.#i.forEach((_) => {
          _.subscribe((_) => {
            this.#d(_, _);
          });
        });
    }
    onUnsubscribe() {
      this.listeners.size || this.destroy();
    }
    destroy() {
      ((this.listeners = new Set()),
        this.#i.forEach((_) => {
          _.destroy();
        }));
    }
    setQueries(_, _, _) {
      ((this.#n = _),
        (this.#r = _),
        _.batch(() => {
          let _ = this.#i,
            _ = this.#u(this.#n);
          _.forEach((_) => _.observer.setOptions(_.defaultedQueryOptions, _));
          let _ = _.map((_) => _.observer),
            _ = _.map((_) => _.getCurrentResult()),
            _ = _.some((_, _) => _ !== _[_]);
          (_.length !== _.length || _) &&
            ((this.#i = _),
            (this.#t = _),
            this.hasListeners() &&
              (_(_, _).forEach((_) => {
                _.destroy();
              }),
              _(_, _).forEach((_) => {
                _.subscribe((_) => {
                  this.#d(_, _);
                });
              }),
              this.#f()));
        }));
    }
    getCurrentResult() {
      return this.#t;
    }
    getQueries() {
      return this.#i.map((_) => _.getCurrentQuery());
    }
    getObservers() {
      return this.#i;
    }
    getOptimisticResult(_, _) {
      let _ = this.#u(_).map((_) =>
        _.observer.getOptimisticResult(_.defaultedQueryOptions),
      );
      return [_, (_) => this.#l(_ ?? _, _), () => this.#c(_, _)];
    }
    #c(_, _) {
      let _ = this.#u(_);
      return _.map((_, _) => {
        let _ = _[_];
        return _.defaultedQueryOptions.notifyOnChangeProps
          ? _
          : _.observer.trackResult(_, (_) => {
              _.forEach((_) => {
                _.observer.trackProp(_);
              });
            });
      });
    }
    #l(_, _) {
      return _
        ? ((this.#a && this.#t === this.#s && _ === this.#o) ||
            ((this.#o = _), (this.#s = this.#t), (this.#a = _(this.#a, _(_)))),
          this.#a)
        : _;
    }
    #u(_) {
      let _ = new Map(this.#i.map((_) => [_.options.queryHash, _])),
        _ = [];
      return (
        _.forEach((_) => {
          let _ = this.#e.defaultQueryOptions(_),
            _ = _.get(_.queryHash);
          _
            ? _.push({
                defaultedQueryOptions: _,
                observer: _,
              })
            : _.push({
                defaultedQueryOptions: _,
                observer: new _(this.#e, _),
              });
        }),
        _
      );
    }
    #d(_, _) {
      let _ = this.#i.indexOf(_);
      _ !== -1 && ((this.#t = _(this.#t, _, _)), this.#f());
    }
    #f() {
      this.hasListeners() &&
        this.#a !== this.#l(this.#c(this.#t, this.#n), this.#r?.combine) &&
        _.batch(() => {
          this.listeners.forEach((_) => {
            _(this.#t);
          });
        });
    }
  },
  _ = _(_(), 1);
function _({ queries: _, ..._ }, _) {
  let _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.useMemo(
      () =>
        _.map((_) => {
          let _ = _.defaultQueryOptions(_);
          return ((_._optimisticResults = _ ? `isRestoring` : `optimistic`), _);
        }),
      [_, _, _],
    );
  (_.forEach((_) => {
    (_(_), _(_, _));
  }),
    _(_));
  let [_] = _.useState(() => new _(_, _, _)),
    [_, _, _] = _.getOptimisticResult(_, _.combine);
  (_.useSyncExternalStore(
    _.useCallback((_) => (_ ? _ : _.subscribe(_.batchCalls(_))), [_, _]),
    () => _.getCurrentResult(),
    () => _.getCurrentResult(),
  ),
    _.useEffect(() => {
      _.setQueries(_, _, {
        listeners: !1,
      });
    }, [_, _, _]));
  let _ = _.some((_, _) => _(_[_], _))
    ? _.flatMap((_, _) => {
        let _ = _[_];
        if (_) {
          let _ = new _(_, _);
          if (_(_, _)) return _(_, _, _);
          _(_, _) && _(_, _, _);
        }
        return [];
      })
    : [];
  if (_.length > 0) throw Promise.all(_);
  let _ = _.find((_, _) => {
    let _ = _[_];
    return (
      _ &&
      _({
        result: _,
        errorResetBoundary: _,
        throwOnError: _.throwOnError,
        query: _.getQueryCache().get(_.queryHash),
      })
    );
  });
  if (_?.error) throw _.error;
  return _(_());
}
var _ = (0, _.createContext)(void 0),
  _ = _.Provider;
function _(_) {
  let { steamid: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        useActiveAccount: () => (!_ || _ == `0` ? `` : _),
      }),
      [_],
    );
  return (0, _.createElement)(
    _,
    {
      value: _,
    },
    _,
  );
}
function _() {
  let _ = (0, _.useContext)(_);
  if (!_)
    throw Error(`called useActiveAccount outside of ActiveAccountProvider`);
  return _.useActiveAccount();
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
