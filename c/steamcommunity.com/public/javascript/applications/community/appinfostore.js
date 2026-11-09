import { _, _, _ } from "./libraries.js";
import { _ } from "./personautils.js";
import { _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = `061818254b2c99ac49e6626adb128ed1282a392f`,
  _ = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(_) {
      this.m_unAppID = _;
    }
    get appid() {
      return this.m_unAppID;
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    get is_valid() {
      return this.m_bInitialized && !!this.m_strName;
    }
    get name() {
      return this.m_strName;
    }
    get icon_url_no_default() {
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, _);
    }
    get time_updated_from_server() {
      return this.m_dtUpdatedFromServer;
    }
    get apptype() {
      return this.m_eAppType;
    }
    BIsApplicationOrTool() {
      return this.apptype == 4 || this.apptype == 2;
    }
    BuildAppURL(_, _) {
      return _
        ? _.MEDIA_CDN_COMMUNITY_URL +
            `images/apps/` +
            this.appid +
            `/` +
            _ +
            `.jpg`
        : _(_, `small`, `web`);
    }
    DeserializeFromMessage(_) {
      (this.m_bInitialized = !0),
        (this.m_strName = _.name()),
        (this.m_strIconURL = _.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = _.app_type());
    }
    DeserializeFromAppOverview(_) {
      _.icon_hash() && _.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = _.display_name()),
          (this.m_strIconURL = _.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = _.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(_) {
      try {
        (this.m_strName = _.strName),
          (this.m_strIconURL = _.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
          (this.m_eAppType = _.eAppType),
          (this.m_bInitialized = !0);
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        _(
          this.m_bInitialized,
          `Attempting to serialize an uninitialized AppInfo object for caching!`,
        ),
        this.m_bInitialized
          ? {
              strName: this.m_strName,
              strIconURL: this.m_strIconURL,
              strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
              eAppType: this.m_eAppType,
            }
          : null
      );
    }
  },
  _ = class {
    m_nLastUpdated = 0;
    m_mapLanguages = _.map();
    m_appid;
    m_fetching = null;
    constructor(_) {
      this.m_appid = _;
    }
    GetAppID() {
      return this.m_appid;
    }
    GetTokenList(_) {
      return this.m_mapLanguages.has(_) ? this.m_mapLanguages.get(_) : null;
    }
    Localize(_, _) {
      let _ = _.LANGUAGE;
      return _(
        _,
        this.GetTokenList(_),
        _ == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        _,
      );
    }
    SubstituteParams(_, _) {
      let _ = _.LANGUAGE;
      return _(
        _,
        this.GetTokenList(_),
        _ == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        _,
      );
    }
  };
function _(_, _, _, _, _) {
  if (!_.startsWith(`#`))
    return (
      console.log(`Token doesn't start with #:`, _, `appid`, _, `tokens`, _), ``
    );
  let _ = _;
  _ = _.toLowerCase();
  let _ = ``;
  if (
    (_ && _.has(_) && (_ = _.get(_)), !_ && _ && _.has(_) && (_ = _.get(_)), _)
  )
    _ = _(_, _, _, _, _);
  else if (
    ((_ || _) &&
      console.log(`No loc found for appid`, _, _, `Tokens:`, _, `Fallback:`, _),
    _ && _.EUNIVERSE != 1)
  )
    return _;
  return _;
}
function _(_, _, _, _, _) {
  let _ = _.match(/{[A-za-z0-9_%#:]+}/g);
  if (_)
    for (let _ of _) {
      let _ = _(_(_.slice(1, -1), _), _, _, _, _);
      if (!_) return ``;
      _ = _.replace(_, _);
    }
  return (_ = _(_, _)), _;
}
function _(_, _) {
  let _ = _.match(/%[A-Za-z0-9_:]+%/g);
  if (_)
    for (let _ of _) {
      let _ = _.slice(1, -1).toLowerCase(),
        _ = _.get(_);
      _ == null
        ? console.log(`No rich presence found for`, _)
        : (_ = _.replace(_, _));
    }
  return _;
}
var _ = 1209600,
  _ = class {
    m_CMInterface;
    m_mapAppInfo = _.map();
    m_mapRichPresenceLoc = _.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new _();
    constructor() {
      _(this);
    }
    Init(_) {
      this.m_CMInterface = _;
    }
    BHavePendingAppInfoRequests() {
      return (
        this.m_setPendingAppInfo.size > 0 || this.m_cAppInfoRequestsInFlight > 0
      );
    }
    get CMInterface() {
      return this.m_CMInterface;
    }
    RegisterCallbackOnLoad(_) {
      this.BHavePendingAppInfoRequests()
        ? this.m_fnCallbackOnAppInfoLoaded.Register(_)
        : (_(
            !1,
            `Registering for callback on appinfo load, but nothing queued`,
          ),
          _());
    }
    IsLoadingAppID(_) {
      return this.m_setPendingAppInfo.has(_);
    }
    GetAppInfo(_) {
      if (
        (_(this.m_CMInterface, `CAppInfoStore.GetAppInfo called before Init`),
        !this.m_mapAppInfo.has(_))
      ) {
        let _ = new _(_);
        this.m_mapAppInfo.set(_, _), this.QueueAppInfoRequest(_);
      }
      return this.m_mapAppInfo.get(_);
    }
    QueueAppInfoRequest(_) {
      return _
        ? (this.m_setPendingAppInfo.size ||
            ((this.m_PendingAppInfoPromise = new Promise(
              (_) => (this.m_PendingAppInfoResolve = _),
            )),
            window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
          this.m_setPendingAppInfo.add(_),
          this.m_PendingAppInfoPromise)
        : Promise.resolve();
    }
    async FlushPendingAppInfo() {
      let _ = this.m_PendingAppInfoResolve,
        _ = Array.from(this.m_setPendingAppInfo);
      (this.m_PendingAppInfoPromise = void 0),
        (this.m_PendingAppInfoResolve = void 0),
        this.m_setPendingAppInfo.clear(),
        await this.LoadAppInfoBatch(_),
        _?.();
    }
    async LoadAppInfoBatch(_) {
      this.m_cAppInfoRequestsInFlight++;
      let _ = await this.LoadAppInfoBatchFromLocalCache(_);
      if (_.length) {
        console.log(`Loading batch of App Info from Steam: `, _),
          await this.m_CMInterface?.WaitUntilLoggedOn();
        let _ = _.Init(_);
        for (_.Body().set_language(_(_.LANGUAGE)); _.length > 0; ) {
          let _ = Math.min(50, _.length),
            _ = _.slice(0, _);
          (_ = _.slice(_)), _.Body().set_appids(_);
          let _ = await _.GetApps(this.m_CMInterface.GetServiceTransport(), _);
          _.GetEResult() == 1
            ? this.OnGetAppsResponse(_)
            : console.error(
                `Error when calling CommunityService.GetApps: EResult=${_.GetEResult()}, AppIDs:`,
                _,
              );
        }
      }
      --this.m_cAppInfoRequestsInFlight == 0 &&
        this.m_setPendingAppInfo.size == 0 &&
        (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
        this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
    }
    OnGetAppsResponse(_) {
      let _ = [];
      for (let _ of _.Body().apps()) {
        let _ = this.m_mapAppInfo.get(_.appid());
        _(_, `Got AppInfo response for unrequested AppID: ${_.appid()}`),
          _ &&
            ((_ = new _(_.appid())),
            _.DeserializeFromMessage(_),
            this.m_mapAppInfo.set(_.appid(), _),
            _.push(_));
      }
      this.SaveAppInfoBatchToLocalCache(_);
    }
    OnAppOverviewChange(_) {
      for (let _ of _) {
        let _ = new _(_.appid());
        _.DeserializeFromAppOverview(_),
          _.is_initialized && this.m_mapAppInfo.set(_.appid(), _);
      }
    }
    async EnsureAppInfoForAppIDs(_) {
      let _ = !1;
      return (
        _.forEach((_) => {
          let _ = this.m_mapAppInfo.get(_);
          _
            ? _.is_valid || (_ = !0)
            : ((_ = new _(_)),
              this.m_mapAppInfo.set(_, _),
              this.QueueAppInfoRequest(_),
              (_ = !0));
        }),
        _ && this.m_PendingAppInfoPromise !== void 0
          ? this.m_PendingAppInfoPromise
          : Promise.resolve()
      );
    }
    SetCacheStorage(_) {
      this.m_CacheStorage = _;
    }
    GetCacheKeyForAppID(_) {
      return `APPINFO_` + _;
    }
    async LoadAppInfoBatchFromLocalCache(_) {
      if (!this.m_CacheStorage) return _;
      console.log(`Loading batch of App Info from Local Cache: `, _);
      let _ = new Date(new Date().getTime() - _ * 1e3),
        _ = async (_) => {
          let _ = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(_),
          );
          if (!_) return _;
          let _ = this.m_mapAppInfo.get(_);
          return (
            _(
              _,
              `Didn't find AppInfo in our map when loading from cache but it should've been there?`,
            ),
            _
              ? ((_ = new _(_)),
                _.DeserializeFromCacheObject(_),
                _.is_initialized
                  ? (this.m_mapAppInfo.set(_, _),
                    _.time_updated_from_server < _ ? _ : null)
                  : (console.warn(
                      `Failed to deserialize cached App Info: `,
                      _,
                      _,
                    ),
                    _))
              : _
          );
        },
        _ = _.map((_) => _(_));
      return (await Promise.all(_)).filter((_) => _ !== null);
    }
    async SaveAppInfoBatchToLocalCache(_) {
      if (this.m_CacheStorage) {
        console.log(
          `Saving batch of App Info to Local Cache: `,
          _.map((_) => _.appid),
        );
        for (let _ of _) {
          let _ = _.SerializeToCacheObject();
          _ &&
            this.m_CacheStorage.StoreObject(
              this.GetCacheKeyForAppID(_.appid),
              _,
            );
        }
      }
    }
    Localize(_, _, _) {
      let _ = this.GetRichPresenceLoc(_);
      return _
        ? _.Localize(_, _)
        : _.EUNIVERSE == 1
          ? ``
          : (console.log(
              `Unable to find app localization information for app ${_} token ${_}, this may not have had a chance to load yet`,
            ),
            _);
    }
    GetRichPresenceLoc(_) {
      if (this.m_mapRichPresenceLoc.has(_.toString())) {
        let _ = this.m_mapRichPresenceLoc.get(_.toString());
        return (
          _.m_nLastUpdated + 72e5 < Date.now() &&
            this.QueueRichPresenceLocRequest(_),
          _
        );
      }
      let _ = new _(_);
      return (
        this.m_mapRichPresenceLoc.set(_.toString(), _),
        this.QueueRichPresenceLocRequest(_),
        _
      );
    }
    GetRichPresenceLocAsync(_) {
      let _ = this.GetRichPresenceLoc(_);
      return _.m_nLastUpdated ? Promise.resolve(_) : _.m_fetching;
    }
    OnRichPresenceLocUpdate(_, _) {
      _.m_nLastUpdated = Date.now();
      for (let _ of _) {
        let _ = _.language(),
          _ = _.m_mapLanguages.get(_);
        _
          ? _.clear()
          : (_.m_mapLanguages.set(_, new Map()), (_ = _.m_mapLanguages.get(_)));
        for (let _ of _.tokens()) _?.set(_.name().toLowerCase(), _.value());
      }
    }
    QueueRichPresenceLocRequest(_) {
      return (
        _.m_fetching ||
          ((_.m_fetching = this.m_CMInterface
            .WaitUntilLoggedOn()
            .then(() => {
              let _ = _.Init(_);
              return (
                _.Body().set_appid(_.GetAppID()),
                _.Body().set_language(_.LANGUAGE),
                _.GetAppRichPresenceLocalization(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                )
              );
            })
            .then(
              (_) => (
                (_.m_fetching = null),
                _.GetEResult() == 1
                  ? (this.OnRichPresenceLocUpdate(_, _.Body().token_lists()),
                    Promise.resolve(_))
                  : Promise.reject()
              ),
            )),
          _.m_fetching.catch(() => {
            _.m_fetching = null;
          })),
        _.m_fetching
      );
    }
  };
_([_], _.prototype, `OnGetAppsResponse`, null),
  _([_], _.prototype, `OnRichPresenceLocUpdate`, null);
var _ = new _();
export { _, _ };
