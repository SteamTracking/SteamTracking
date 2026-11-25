/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Dt as e,
  G as t,
  g as n,
  k as r,
  n as i,
  z as a,
} from "./chunk~de7f2df91c.js";
import { Nt as o } from "./chunk~bd90a5fce7.js";
import { S as s, i as c, x as l } from "./chunk~96e60d7578.js";
import { t as u } from "./chunk~19394a4118.js";
import { a as d, n as f, t as p } from "./chunk~ca0c999570.js";
function m(e, t) {
  return e.replace(/%[A-Za-z0-9_:]+%/g, (e) => {
    let n = e.slice(1, -1).toLowerCase(),
      r = t.get(n);
    return (
      r === void 0 && console.log(`No rich presence found for`, n), r ?? e
    );
  });
}
function h() {
  return n.EUNIVERSE != 1;
}
function g(e, t, n, r) {
  let i = !1,
    a = t.replace(
      /{[A-Za-z0-9_%#:]+}/g,
      (t) => _(e, m(t.slice(1, -1), r), n, r) || ((i = !0), ``),
    );
  return i ? null : m(a, r);
}
function _(e, t, n, r) {
  if (!t.startsWith(`#`))
    return (
      console.log(`Token doesn't start with #:`, t, `appid`, e, `tokens`, n[0]),
      null
    );
  let i = t.toLowerCase(),
    a = n.map((e) => e.get(i)).find((e) => !!e);
  return a
    ? g(e, a, n, r)
    : (n.length &&
        console.log(
          `No loc found for appid`,
          e,
          t,
          `Tokens:`,
          n[0],
          `Fallback:`,
          n[1],
        ),
      h() ? i : null);
}
function v(e, t, n, r) {
  return _(e, t, n, r) ?? ``;
}
function y(e, t, n, r) {
  return g(e, t, n, r) ?? ``;
}
var b = class {
    m_nLastUpdated = 0;
    m_mapLanguages = s.map();
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
    GetTokenLists() {
      let e = r.LANGUAGE;
      return (e == `english` ? [e] : [e, `english`])
        .map((e) => this.GetTokenList(e))
        .filter((e) => !!e);
    }
    Localize(e, t) {
      let n = this.GetTokenLists();
      return n.length ? v(this.m_appid, e, n, t) : ``;
    }
    SubstituteParams(e, t) {
      return y(this.m_appid, e, this.GetTokenLists(), t);
    }
  },
  x = 1209600,
  S = class {
    m_CMInterface;
    m_mapAppInfo = s.map();
    m_mapRichPresenceLoc = s.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new o();
    constructor() {
      l(this);
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
    RegisterCallbackOnLoad(t) {
      this.BHavePendingAppInfoRequests()
        ? this.m_fnCallbackOnAppInfoLoaded.Register(t)
        : (e(
            !1,
            `Registering for callback on appinfo load, but nothing queued`,
          ),
          t());
    }
    IsLoadingAppID(e) {
      return this.m_setPendingAppInfo.has(e);
    }
    GetAppInfo(t) {
      if (
        (e(this.m_CMInterface, `CAppInfoStore.GetAppInfo called before Init`),
        !this.m_mapAppInfo.has(t))
      ) {
        let e = new u(t);
        (this.m_mapAppInfo.set(t, e), this.QueueAppInfoRequest(t));
      }
      return this.m_mapAppInfo.get(t);
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
      let n = await this.LoadAppInfoBatchFromLocalCache(e);
      if (n.length) {
        (console.log(`Loading batch of App Info from Steam: `, n),
          await this.m_CMInterface?.WaitUntilLoggedOn());
        let e = t.Init(f);
        for (e.Body().set_language(a(r.LANGUAGE)); n.length > 0;) {
          let t = Math.min(50, n.length),
            r = n.slice(0, t);
          ((n = n.slice(t)), e.Body().set_appids(r));
          let i = await d.GetApps(this.m_CMInterface.GetServiceTransport(), e);
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
    OnGetAppsResponse(t) {
      let n = [];
      for (let r of t.Body().apps()) {
        let t = this.m_mapAppInfo.get(r.appid());
        (e(t, `Got AppInfo response for unrequested AppID: ${r.appid()}`),
          t &&
            ((t = new u(r.appid())),
            t.DeserializeFromMessage(r),
            this.m_mapAppInfo.set(r.appid(), t),
            n.push(t)));
      }
      this.SaveAppInfoBatchToLocalCache(n);
    }
    OnAppOverviewChange(e) {
      for (let t of e) {
        let e = new u(t.appid());
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
            : ((n = new u(e)),
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
    async LoadAppInfoBatchFromLocalCache(t) {
      if (!this.m_CacheStorage) return t;
      console.log(`Loading batch of App Info from Local Cache: `, t);
      let n = new Date(new Date().getTime() - x * 1e3),
        r = async (t) => {
          let r = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(t),
          );
          if (!r) return t;
          let i = this.m_mapAppInfo.get(t);
          return (
            e(
              i,
              `Didn't find AppInfo in our map when loading from cache but it should've been there?`,
            ),
            i
              ? ((i = new u(t)),
                i.DeserializeFromCacheObject(r),
                i.is_initialized
                  ? (this.m_mapAppInfo.set(t, i),
                    i.time_updated_from_server < n ? t : null)
                  : (console.warn(
                      `Failed to deserialize cached App Info: `,
                      t,
                      r,
                    ),
                    t))
              : t
          );
        },
        i = t.map((e) => r(e));
      return (await Promise.all(i)).filter((e) => e !== null);
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
      let i = this.GetRichPresenceLoc(e);
      return i
        ? i.Localize(t, n)
        : r.EUNIVERSE == 1
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
      let t = new b(e);
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
              let n = t.Init(p);
              return (
                n.Body().set_appid(e.GetAppID()),
                n.Body().set_language(r.LANGUAGE),
                d.GetAppRichPresenceLocalization(
                  this.m_CMInterface.GetServiceTransport(),
                  n,
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
(i([c], S.prototype, `OnGetAppsResponse`, null),
  i([c], S.prototype, `OnRichPresenceLocUpdate`, null));
var C = new S();
export { C as t };
