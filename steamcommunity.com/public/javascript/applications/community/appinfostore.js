/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { L as e, R as t, j as n } from "./libraries.js";
import { n as r } from "./personautils.js";
import {
  Ef as i,
  N as a,
  Nh as o,
  Qm as s,
  T as c,
  Yh as l,
  dm as u,
  qm as d,
  w as f,
} from "./main.js";
var p = `061818254b2c99ac49e6626adb128ed1282a392f`,
  m = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(e) {
      this.m_unAppID = e;
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
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, p);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, p);
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
    BuildAppURL(e, t) {
      return e
        ? u.MEDIA_CDN_COMMUNITY_URL +
            `images/apps/` +
            this.appid +
            `/` +
            e +
            `.jpg`
        : r(t, `small`, `web`);
    }
    DeserializeFromMessage(e) {
      ((this.m_bInitialized = !0),
        (this.m_strName = e.name()),
        (this.m_strIconURL = e.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = e.app_type()));
    }
    DeserializeFromAppOverview(e) {
      e.icon_hash() && e.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = e.display_name()),
          (this.m_strIconURL = e.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = e.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(e) {
      try {
        ((this.m_strName = e.strName),
          (this.m_strIconURL = e.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
          (this.m_eAppType = e.eAppType),
          (this.m_bInitialized = !0));
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        l(
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
  h = class {
    m_nLastUpdated = 0;
    m_mapLanguages = t.map();
    m_appid;
    m_fetching = null;
    constructor(e) {
      this.m_appid = e;
    }
    GetAppID() {
      return this.m_appid;
    }
    GetTokenList(e) {
      return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
    }
    Localize(e, t) {
      let n = u.LANGUAGE;
      return g(
        e,
        this.GetTokenList(n),
        n == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        t,
      );
    }
    SubstituteParams(e, t) {
      let n = u.LANGUAGE;
      return _(
        e,
        this.GetTokenList(n),
        n == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        t,
      );
    }
  };
function g(e, t, n, r, i) {
  if (!e.startsWith(`#`))
    return (
      console.log(`Token doesn't start with #:`, e, `appid`, r, `tokens`, t), ``
    );
  let a = e;
  e = e.toLowerCase();
  let o = ``;
  if (
    (t && t.has(e) && (o = t.get(e)), !o && n && n.has(e) && (o = n.get(e)), o)
  )
    o = _(o, t, n, r, i);
  else if (
    ((t || n) &&
      console.log(`No loc found for appid`, r, a, `Tokens:`, t, `Fallback:`, n),
    t && u.EUNIVERSE != 1)
  )
    return e;
  return o;
}
function _(e, t, n, r, i) {
  let a = e.match(/{[A-za-z0-9_%#:]+}/g);
  if (a)
    for (let o of a) {
      let a = g(v(o.slice(1, -1), i), t, n, r, i);
      if (!a) return ``;
      e = e.replace(o, a);
    }
  return ((e = v(e, i)), e);
}
function v(e, t) {
  let n = e.match(/%[A-Za-z0-9_:]+%/g);
  if (n)
    for (let r of n) {
      let n = r.slice(1, -1).toLowerCase(),
        i = t.get(n);
      i == null
        ? console.log(`No rich presence found for`, n)
        : (e = e.replace(r, i));
    }
  return e;
}
var y = 1209600,
  b = class {
    m_CMInterface;
    m_mapAppInfo = t.map();
    m_mapRichPresenceLoc = t.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new o();
    constructor() {
      e(this);
    }
    Init(e) {
      this.m_CMInterface = e;
    }
    BHavePendingAppInfoRequests() {
      return (
        this.m_setPendingAppInfo.size > 0 || this.m_cAppInfoRequestsInFlight > 0
      );
    }
    get CMInterface() {
      return this.m_CMInterface;
    }
    RegisterCallbackOnLoad(e) {
      this.BHavePendingAppInfoRequests()
        ? this.m_fnCallbackOnAppInfoLoaded.Register(e)
        : (l(
            !1,
            `Registering for callback on appinfo load, but nothing queued`,
          ),
          e());
    }
    IsLoadingAppID(e) {
      return this.m_setPendingAppInfo.has(e);
    }
    GetAppInfo(e) {
      if (
        (l(this.m_CMInterface, `CAppInfoStore.GetAppInfo called before Init`),
        !this.m_mapAppInfo.has(e))
      ) {
        let t = new m(e);
        (this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e));
      }
      return this.m_mapAppInfo.get(e);
    }
    QueueAppInfoRequest(e) {
      return e
        ? (this.m_setPendingAppInfo.size ||
            ((this.m_PendingAppInfoPromise = new Promise(
              (e) => (this.m_PendingAppInfoResolve = e),
            )),
            window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
          this.m_setPendingAppInfo.add(e),
          this.m_PendingAppInfoPromise)
        : Promise.resolve();
    }
    async FlushPendingAppInfo() {
      let e = this.m_PendingAppInfoResolve,
        t = Array.from(this.m_setPendingAppInfo);
      ((this.m_PendingAppInfoPromise = void 0),
        (this.m_PendingAppInfoResolve = void 0),
        this.m_setPendingAppInfo.clear(),
        await this.LoadAppInfoBatch(t),
        e?.());
    }
    async LoadAppInfoBatch(e) {
      this.m_cAppInfoRequestsInFlight++;
      let t = await this.LoadAppInfoBatchFromLocalCache(e);
      if (t.length) {
        (console.log(`Loading batch of App Info from Steam: `, t),
          await this.m_CMInterface?.WaitUntilLoggedOn());
        let e = s.Init(c);
        for (e.Body().set_language(d(u.LANGUAGE)); t.length > 0;) {
          let n = Math.min(50, t.length),
            r = t.slice(0, n);
          ((t = t.slice(n)), e.Body().set_appids(r));
          let i = await a.GetApps(this.m_CMInterface.GetServiceTransport(), e);
          i.GetEResult() == 1
            ? this.OnGetAppsResponse(i)
            : console.error(
                `Error when calling CommunityService.GetApps: EResult=${i.GetEResult()}, AppIDs:`,
                r,
              );
        }
      }
      --this.m_cAppInfoRequestsInFlight == 0 &&
        this.m_setPendingAppInfo.size == 0 &&
        (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
        this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
    }
    OnGetAppsResponse(e) {
      let t = [];
      for (let n of e.Body().apps()) {
        let e = this.m_mapAppInfo.get(n.appid());
        (l(e, `Got AppInfo response for unrequested AppID: ${n.appid()}`),
          e &&
            ((e = new m(n.appid())),
            e.DeserializeFromMessage(n),
            this.m_mapAppInfo.set(n.appid(), e),
            t.push(e)));
      }
      this.SaveAppInfoBatchToLocalCache(t);
    }
    OnAppOverviewChange(e) {
      for (let t of e) {
        let e = new m(t.appid());
        (e.DeserializeFromAppOverview(t),
          e.is_initialized && this.m_mapAppInfo.set(t.appid(), e));
      }
    }
    async EnsureAppInfoForAppIDs(e) {
      let t = !1;
      return (
        e.forEach((e) => {
          let n = this.m_mapAppInfo.get(e);
          n
            ? n.is_valid || (t = !0)
            : ((n = new m(e)),
              this.m_mapAppInfo.set(e, n),
              this.QueueAppInfoRequest(e),
              (t = !0));
        }),
        t && this.m_PendingAppInfoPromise !== void 0
          ? this.m_PendingAppInfoPromise
          : Promise.resolve()
      );
    }
    SetCacheStorage(e) {
      this.m_CacheStorage = e;
    }
    GetCacheKeyForAppID(e) {
      return `APPINFO_` + e;
    }
    async LoadAppInfoBatchFromLocalCache(e) {
      if (!this.m_CacheStorage) return e;
      console.log(`Loading batch of App Info from Local Cache: `, e);
      let t = new Date(new Date().getTime() - y * 1e3),
        n = async (e) => {
          let n = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(e),
          );
          if (!n) return e;
          let r = this.m_mapAppInfo.get(e);
          return (
            l(
              r,
              `Didn't find AppInfo in our map when loading from cache but it should've been there?`,
            ),
            r
              ? ((r = new m(e)),
                r.DeserializeFromCacheObject(n),
                r.is_initialized
                  ? (this.m_mapAppInfo.set(e, r),
                    r.time_updated_from_server < t ? e : null)
                  : (console.warn(
                      `Failed to deserialize cached App Info: `,
                      e,
                      n,
                    ),
                    e))
              : e
          );
        },
        r = e.map((e) => n(e));
      return (await Promise.all(r)).filter((e) => e !== null);
    }
    async SaveAppInfoBatchToLocalCache(e) {
      if (this.m_CacheStorage) {
        console.log(
          `Saving batch of App Info to Local Cache: `,
          e.map((e) => e.appid),
        );
        for (let t of e) {
          let e = t.SerializeToCacheObject();
          e &&
            this.m_CacheStorage.StoreObject(
              this.GetCacheKeyForAppID(t.appid),
              e,
            );
        }
      }
    }
    Localize(e, t, n) {
      let r = this.GetRichPresenceLoc(e);
      return r
        ? r.Localize(t, n)
        : u.EUNIVERSE == 1
          ? ``
          : (console.log(
              `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
            ),
            t);
    }
    GetRichPresenceLoc(e) {
      if (this.m_mapRichPresenceLoc.has(e.toString())) {
        let t = this.m_mapRichPresenceLoc.get(e.toString());
        return (
          t.m_nLastUpdated + 72e5 < Date.now() &&
            this.QueueRichPresenceLocRequest(t),
          t
        );
      }
      let t = new h(e);
      return (
        this.m_mapRichPresenceLoc.set(e.toString(), t),
        this.QueueRichPresenceLocRequest(t),
        t
      );
    }
    GetRichPresenceLocAsync(e) {
      let t = this.GetRichPresenceLoc(e);
      return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
    }
    OnRichPresenceLocUpdate(e, t) {
      e.m_nLastUpdated = Date.now();
      for (let n of t) {
        let t = n.language(),
          r = e.m_mapLanguages.get(t);
        r
          ? r.clear()
          : (e.m_mapLanguages.set(t, new Map()), (r = e.m_mapLanguages.get(t)));
        for (let e of n.tokens()) r?.set(e.name().toLowerCase(), e.value());
      }
    }
    QueueRichPresenceLocRequest(e) {
      return (
        e.m_fetching ||
          ((e.m_fetching = this.m_CMInterface
            .WaitUntilLoggedOn()
            .then(() => {
              let t = s.Init(f);
              return (
                t.Body().set_appid(e.GetAppID()),
                t.Body().set_language(u.LANGUAGE),
                a.GetAppRichPresenceLocalization(
                  this.m_CMInterface.GetServiceTransport(),
                  t,
                )
              );
            })
            .then(
              (t) => (
                (e.m_fetching = null),
                t.GetEResult() == 1
                  ? (this.OnRichPresenceLocUpdate(e, t.Body().token_lists()),
                    Promise.resolve(e))
                  : Promise.reject()
              ),
            )),
          e.m_fetching.catch(() => {
            e.m_fetching = null;
          })),
        e.m_fetching
      );
    }
  };
(i([n], b.prototype, `OnGetAppsResponse`, null),
  i([n], b.prototype, `OnRichPresenceLocUpdate`, null));
var x = new b();
export { b as n, x as t };
