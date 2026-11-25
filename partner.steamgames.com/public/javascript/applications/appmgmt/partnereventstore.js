/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Dt as e,
  Pt as t,
  S as n,
  T as r,
  W as i,
  k as a,
  n as o,
  nt as s,
  o as c,
  z as l,
} from "./chunk~de7f2df91c.js";
import {
  A as u,
  Nt as d,
  Pt as f,
  pt as p,
  zt as m,
} from "./chunk~bd90a5fce7.js";
import { Va as h, aa as g } from "./chunk~1fa4b8f2ff.js";
import { H as _, J as v, V as y } from "./chunk~6b8ddcaac8.js";
import { t as b } from "./chunk~ede3e357a2.js";
import { S as x, T as S, i as C, x as w } from "./chunk~96e60d7578.js";
import "./chunk~19394a4118.js";
import { t as T } from "./chunk~25a6634263.js";
import { t as E } from "./chunk~f4e4ed5c17.js";
import { t as D } from "./chunk~92931c6310.js";
import { t as O } from "./chunk~c55709d290.js";
import { o as k } from "./chunk~e867464c75.js";
import "./chunk~a6b9ae1345.js";
import { t as A } from "./chunk~f3a565e188.js";
var j = t(s(), 1);
(i(), (0, j.createContext)(!1));
function M() {
  return !0;
}
var N = Intl.DateTimeFormat().resolvedOptions().timeZone,
  P =
    `document` in globalThis
      ? document.cookie
          .split(`;`)
          .find((e) => e.trim().startsWith(`timezoneName`))
          ?.split(`=`)[1]
      : void 0,
  F = P && decodeURIComponent(P);
function I() {
  return M() ? N : (F ?? N);
}
function L() {
  `document` in globalThis &&
    N &&
    (document.cookie = `timezoneName=${N};expires=${new Date(Date.now() + 31536e6).toUTCString()};path=/;Secure;SameSite=None;`);
}
L();
function R(e) {
  return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
}
var z = t(E());
function B(e) {
  let [t, n] = (0, j.useState)(() => K.GetClanEventModel(e)),
    r = D(`usePartnerEventByEventGID`);
  return (
    (0, j.useEffect)(() => {
      e &&
        t?.GID != e &&
        (K.Init(),
        K.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], r).then(
          (t) => {
            t?.length == 1 && t[0].GID == e && !r.token.reason && n(t[0]);
          },
        ));
    }, [e, t, r]),
    t
  );
}
function V(e) {
  let t = D(`usePreloadPartnerEventsByEventGID`),
    n = b({
      queryKey: [`PreloadPartnerEventsByEventGID`],
      queryFn: () => (
        K.Init(),
        K.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, [], t)
      ),
    });
  return { bIsLoading: n.isLoading, events: n.data };
}
function H(e, t, n) {
  let [r, i] = (0, j.useState)(t ? K.GetClanEventModel(t) : void 0),
    [o, s] = (0, j.useState)(!!e && !!t),
    [c, l] = (0, j.useState)(),
    [u, d] = (0, j.useState)(1),
    f = D(`usePartnerEventByClanAccountAndEventGID`);
  return (
    (0, j.useEffect)(() => {
      (async () => {
        try {
          if (r?.GID != t && t && e) {
            K.Init();
            let r = T.InitFromClanID(e, a.EUNIVERSE),
              o;
            try {
              o = await K.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                r,
                t,
                0,
                n,
              );
            } catch (e) {
              (l(e?.response?.data?.err_msg),
                d(e?.response?.data?.success || 2));
            }
            f.token.reason || i(o);
          }
        } finally {
          s(!1);
        }
      })();
    }, [e, t, r, n, f]),
    { eventModel: r, bLoading: o, sErrorMessage: c, eResult: u }
  );
}
function U(e) {
  let t = `` + e,
    n = g.GetELanguageFallback(e);
  return (e != n && (t += `_` + n), t);
}
var W = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(t) {
      (e(
        typeof t.appid == `number`,
        `AJAX updated app returned a non-numeric AppID! Did the PHP change?`,
      ),
        (this.appid = t.appid),
        (this.date = t.date),
        (this.can_play = t.can_play),
        (this.playtime = t.playtime),
        (this.announcementid = t.announcementid));
    }
  },
  G = class {
    constructor(e = !1) {
      (w(this), (this.m_bOnlySummary = e));
    }
    m_bOnlySummary = !1;
    m_mapExistingEvents = new Map();
    m_mapEventUpdateCallback = new Map();
    m_mapAnnouncementBodyToEvent = new Map();
    m_mapClanToGIDs = new Map();
    m_mapAppIDToGIDs = new Map();
    m_mapAdjacentAnnouncementGIDs = new Map();
    m_mapUpdatedApps = new Map();
    m_tsUpdatedAppsQueryTime = 0;
    m_rgQueuedEventsClanIDs = [];
    m_rgQueuedEventsUniqueIDs = [];
    m_rgQueuedEventsForEditFlags = [];
    m_QueuedEventTimeout = new p();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let e = R(`PartnerEventStore`);
        this.ValidateStoreDefault(e) &&
          e.forEach((e) => {
            if (e) {
              let t = new T(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                this.m_mapExistingEvents.set(v + e.announcement_body.gid, n);
            }
          });
        let t = r(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(t) &&
          t.forEach((e) => {
            if (e) {
              let t = new T(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + e.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(v + e.announcement_body.gid, n);
            }
          });
        let n = r(`partnereventadjacents`, `application_config`);
        (this.ValidateAdjacentEvent(n) &&
          n.forEach((e) => {
            e &&
              this.m_mapAdjacentAnnouncementGIDs.set(
                e.announcementGID,
                e.adjacents,
              );
          }),
          (this.m_bLoadedFromConfig = !0));
      }
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t &&
        Array.isArray(t) &&
        t.length > 0 &&
        t[0] &&
        typeof t[0] == `object`
        ? typeof t[0].gid == `string` ||
            (typeof t[0].announcement_body == `object` &&
              typeof t[0].announcement_body.gid == `string`)
        : !1;
    }
    ValidateAdjacentEvent(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].announcementGID == `string` &&
            Array.isArray(t[0].adjacents) &&
            (t[0].adjacents.length == 0 || typeof t[0].adjacents[0] == `string`)
        : !1;
    }
    GetPartnerEventChangeCallback(e) {
      let t = this.m_mapEventUpdateCallback.get(e);
      return (
        (t ||=
          (this.m_mapEventUpdateCallback.set(e, new d()),
          this.m_mapEventUpdateCallback.get(e))),
        t
      );
    }
    GetClanEventGIDs(e) {
      return this.m_mapClanToGIDs.get(e.GetAccountID()) || [];
    }
    GetClanEventGIDsForApp(e) {
      return this.m_mapAppIDToGIDs.get(e) || [];
    }
    GetClanEventModel(e) {
      if (e !== void 0) return this.m_mapExistingEvents.get(e);
    }
    BHasClanEventModel(e) {
      return this.m_mapExistingEvents.has(e);
    }
    BHasClanAnnouncementGID(e) {
      if (e === void 0) return !1;
      let t = this.m_mapAnnouncementBodyToEvent.get(e);
      return !!t && this.BHasClanEventModel(t);
    }
    GetClanEventGIDFromAnnouncementGID(e) {
      return this.m_mapAnnouncementBodyToEvent.get(e);
    }
    GetClanEventFromAnnouncementGID(e) {
      if (e === void 0) return;
      let t = this.m_mapAnnouncementBodyToEvent.get(e);
      return t ? this.m_mapExistingEvents.get(t) : void 0;
    }
    DefaultEventSortFunction(e, t) {
      return e.startTime == t.startTime
        ? k(e.GID ?? ``, t.GID ?? ``)
        : (t.startTime ?? 0) - (e.startTime ?? 0);
    }
    RegisterClanEvents(e) {
      if (e)
        for (let t of e) {
          let e = y(t);
          if (!this.m_mapExistingEvents.has(e)) {
            let e = new T(t.clan_steamid);
            this.InsertEventModelFromClanEventData(e, t);
          }
        }
    }
    GetRankedClanEvents(e, t) {
      let n = [],
        r = e
          ? this.GetClanEventGIDs(e)
          : t
            ? this.GetClanEventGIDsForApp(t)
            : void 0;
      if (!r || r.length == 0) return n;
      for (let e of r) {
        let t = this.GetClanEventModel(e);
        t && n.push(t);
      }
      return (n.sort(this.DefaultEventSortFunction), n);
    }
    InsertEventModelFromClanEventData(e, t) {
      let n = _(e, t);
      return (
        this.InsertUniqueEventGID(e.GetAccountID(), n.appid, n.GID),
        this.m_mapExistingEvents.set(n.GID, n),
        n.AnnouncementGID &&
          n.AnnouncementGID.length > 1 &&
          this.m_mapAnnouncementBodyToEvent.set(n.AnnouncementGID, n.GID),
        n
      );
    }
    HelperInitializeNumSalesHeaderArray(e) {
      if ((e.jsondata.sale_num_headers ?? 0) > 1) {
        e.jsondata.localized_per_day_sales_header = [];
        for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
          e.jsondata.localized_per_day_sales_header.push(m([], 32, null));
        e.m_overrideCurrentDay = 0;
      } else e.m_overrideCurrentDay = void 0;
    }
    GetAllClanEvents(e) {
      let t = [];
      return (
        this.m_mapClanToGIDs.has(e.GetAccountID()) &&
          this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
            let n = this.m_mapExistingEvents.get(e);
            n && t.push(n);
          }),
        t
      );
    }
    async QueueLoadPartnerEvent(e, t, n) {
      if (this.m_mapExistingEvents.has(t)) return;
      (this.m_rgQueuedEventsClanIDs.push(e),
        this.m_rgQueuedEventsUniqueIDs.push(t),
        this.m_rgQueuedEventsForEditFlags.push(!!n),
        (this.m_PendingInfoPromise ||= new Promise(
          (e) => (this.m_PendingInfoResolve = e),
        )));
      let r = this.m_PendingInfoPromise,
        i = () => {
          let e = this.m_PendingInfoResolve,
            t = this.m_rgQueuedEventsClanIDs,
            n = this.m_rgQueuedEventsUniqueIDs,
            r = this.m_rgQueuedEventsForEditFlags;
          ((this.m_PendingInfoPromise = void 0),
            (this.m_rgQueuedEventsClanIDs = []),
            (this.m_rgQueuedEventsUniqueIDs = []),
            (this.m_rgQueuedEventsForEditFlags = []),
            this.InternalLoadPartnerEventList(t, n, r).then(() => e?.()));
        };
      return (
        this.m_rgQueuedEventsClanIDs.length >= 30
          ? (this.m_QueuedEventTimeout.Cancel(), i())
          : this.m_QueuedEventTimeout.IsScheduled() ||
            this.m_QueuedEventTimeout.Schedule(50, i),
        r
      );
    }
    async InternalLoadPartnerEventList(e, t, n) {
      let r = n.some((e) => e),
        i =
          a.STORE_BASE_URL +
          (r
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        o = U(l(a.LANGUAGE)),
        s = {
          clanid_list: e.join(`,`),
          uniqueid_list: t.join(`,`),
          lang_list: o,
          origin: self.origin,
        };
      try {
        let e = await z.default.get(i, { params: s, withCredentials: r });
        this.RegisterClanEvents(e.data.events);
      } catch (e) {
        let t = O(e);
        console.error(`GetEventDetails hit error ` + t.strErrorMsg, t);
      }
    }
    async LoadAdjacentPartnerEvents(e, t, n, r, i, a, o) {
      return this.InternalLoadAdjacentPartnerEvents(
        e,
        void 0,
        t,
        n,
        r,
        i,
        a,
        o,
      );
    }
    async LoadAdjacentPartnerEventsByAnnouncement(e, t, n, r, i, a, o) {
      return this.InternalLoadAdjacentPartnerEvents(
        void 0,
        e,
        t,
        n,
        r,
        i,
        a,
        o,
      );
    }
    async LoadAdjacentPartnerEventsByEvent(e, t, n, r, i, a, o) {
      let s = t || e.clanSteamID;
      return e.bOldAnnouncement
        ? this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e.AnnouncementGID,
            s,
            n,
            r,
            i,
            a,
            o,
          )
        : this.InternalLoadAdjacentPartnerEvents(
            e.GID,
            e.AnnouncementGID,
            s,
            n,
            r,
            i,
            a,
            o,
          );
    }
    async InternalLoadAdjacentPartnerEvents(t, n, r, i, o, s, c, u) {
      let d = [];
      if (!n || !this.m_mapAdjacentAnnouncementGIDs.has(n)) {
        let f = a.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          p = U(l(a.LANGUAGE));
        c?.only_summaries &&
          !this.m_bOnlySummary &&
          (e(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (c.only_summaries = void 0));
        let m = {
          clan_accountid: r ? r.GetAccountID() : void 0,
          appid: i,
          count_before: o,
          count_after: s,
          gidevent: t,
          gidannouncement: n,
          lang_list: p,
          rtime_oldestevent: c ? c.rtime_oldestevent : void 0,
          require_tags: c && c.require_tags ? c.require_tags.join(`,`) : void 0,
          exclude_tags: c && c.exclude_tags ? c.exclude_tags.join(`,`) : void 0,
          require_no_tags: c ? c.require_no_tags : void 0,
          event_type_filter:
            c && c.event_type_filter ? c.event_type_filter.join(`,`) : void 0,
          exclude_event_types:
            c && c.exclude_event_types
              ? c.exclude_event_types.join(`,`)
              : void 0,
          only_summaries: c && !!c.only_summaries,
          origin: self.origin,
        };
        try {
          let e = await z.default.get(f, { params: m, cancelToken: u?.token });
          if (e?.data?.success == 1)
            S(() => {
              for (let t of e.data.events) {
                let e = y(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new T(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(r || e, t);
                }
                d.push(this.m_mapExistingEvents.get(e));
              }
              if (d.length == 0) {
                if (t && this.BHasClanEventModel(t))
                  this.m_mapExistingEvents.get(t) &&
                    d.push(this.m_mapExistingEvents.get(t));
                else if (n && this.BHasClanAnnouncementGID(n)) {
                  let e = this.GetClanEventFromAnnouncementGID(n);
                  e && d.push(e);
                }
              }
            });
          else {
            let t = O(e?.data);
            console.error(
              `LoadAdjacentPartnerEvents Success but empty response:` +
                i +
                ` clanAccount:` +
                (r ? r.GetAccountID() : 0) +
                ` ` +
                t.strErrorMsg,
              t,
            );
          }
        } catch (e) {
          let t = O(e);
          t.errorCode != 52 &&
            console.error(
              `LoadAdjacentPartnerEvents hit error on appid:` +
                i +
                ` clanAccount:` +
                (r ? r.GetAccountID() : 0) +
                ` ` +
                t.strErrorMsg,
              t,
            );
        }
      } else {
        let e = this.m_mapAdjacentAnnouncementGIDs.get(n),
          t = [];
        (e?.forEach((e) => {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            let t = this.m_mapAnnouncementBodyToEvent.get(e);
            t &&
              this.m_mapExistingEvents.get(t) &&
              d.push(this.m_mapExistingEvents.get(t));
          } else t.push(e);
        }),
          t.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                t,
                u,
              )
            ).forEach((e) => d.push(e)));
      }
      return d;
    }
    async LoadPartnerEventsPageable(e, t, n = 0, r = 0, i) {
      let o = [],
        s = a.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        c = {
          clan_accountid: e ? e.GetAccountID() : void 0,
          appid: t,
          offset: n,
          count: r,
          l: a.LANGUAGE,
          origin: self.origin,
          exclude_tags: i && i.length > 0 ? i?.join(`,`) : void 0,
        };
      try {
        let e = await z.default.get(s, { params: c });
        S(() => {
          for (let t of e.data.events) {
            let e = y(t);
            if (!this.m_mapExistingEvents.has(e)) {
              let e = new T(t.clan_steamid);
              this.InsertEventModelFromClanEventData(e, t);
            }
            o.push(this.m_mapExistingEvents.get(e));
          }
        });
      } catch (e) {
        console.error(`LoadClanEventInDateRange hit error ` + O(e).strErrorMsg);
      }
      return o;
    }
    async GetBestEventsForCurrentUser(e, t, n) {
      let r = [],
        i = {
          l: a.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: e,
          include_only_game_updates: t,
        },
        o = a.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        s = await z.default.get(o, {
          params: i,
          withCredentials: !0,
          cancelToken: n ? n.token : void 0,
        });
      if (!s.data?.events) {
        let e = s.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${e})`);
      }
      return (
        S(() => {
          for (let e of s.data.events) {
            let t = y(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new T(e.clan_steamid);
              this.InsertEventModelFromClanEventData(t, e);
            }
            let n = {
              nAppPriority: e.nAppPriority,
              bPossibleTakeOver: e.bPossibleTakeOver,
              event: this.m_mapExistingEvents.get(t),
            };
            r.push(n);
          }
        }),
        r
      );
    }
    async LoadImportantEventsAroundToday(e, t, n, r, i, o) {
      let s = [],
        c = [];
      (c.push({ priority: 0, appids: t }),
        n && c.push({ priority: 1, appids: n }),
        r && c.push({ priority: 2, appids: r }));
      let l = {
          count: e,
          strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
          filterToEventTypes: o ? o.toString() : ``,
          l: a.LANGUAGE,
        },
        u = a.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        d = await z.default.get(u, {
          params: l,
          withCredentials: !0,
          cancelToken: i.token,
        });
      return (
        S(() => {
          for (let e of d.data.events) {
            let t = y(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new T(e.clan_steamid);
              this.InsertEventModelFromClanEventData(t, e);
            }
            s.push(this.m_mapExistingEvents.get(t));
          }
        }),
        s
      );
    }
    InsertUniqueEventGID(e, t, n) {
      let r = this.m_mapClanToGIDs.get(e);
      r ||= (this.m_mapClanToGIDs.set(e, []), this.m_mapClanToGIDs.get(e));
      let i = this.m_mapAppIDToGIDs.get(t);
      ((i ||= (this.m_mapAppIDToGIDs.set(t, []), this.m_mapAppIDToGIDs.get(t))),
        r.indexOf(n) == -1 && (r.push(n), i.push(n)));
    }
    ResetModel() {}
    async DeleteClanEvent(e, t) {
      this.m_mapExistingEvents.has(t) &&
        (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
      let r = new URLSearchParams();
      (r.append(`sessionid`, n()),
        r.append(`bDelete`, `1`),
        r.append(`gid`, t));
      let i = await z.default.post(
        a.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/ajaxcreateupdatedeletepartnerevents/`,
        r,
      );
      return (this.RemoveGIDFromList(e, t), i.data);
    }
    RemoveGIDFromList(e, t) {
      if (
        (this.m_mapExistingEvents.delete(t),
        this.m_mapClanToGIDs.has(e.GetAccountID()))
      ) {
        let n = this.m_mapClanToGIDs.get(e.GetAccountID()),
          r = n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      }
    }
    FlushEventFromCache(e, t) {
      if (
        (e &&
          this.m_mapExistingEvents.has(e) &&
          ((t ||= this.m_mapExistingEvents.get(e).AnnouncementGID),
          this.m_mapExistingEvents.delete(e)),
        t &&
          (this.m_mapExistingEvents.has(`old_announce_` + t) &&
            this.m_mapExistingEvents.delete(v + t),
          this.m_mapAnnouncementBodyToEvent.has(t)))
      ) {
        let e = this.m_mapAnnouncementBodyToEvent.get(t);
        (e &&
          this.m_mapExistingEvents.has(e) &&
          this.m_mapExistingEvents.delete(e),
          this.m_mapAnnouncementBodyToEvent.delete(t));
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
      t,
      n,
      r,
      i,
      o,
      s = !1,
    ) {
      let u = U(s ? 0 : l(a.LANGUAGE)),
        d = {
          appid: n,
          clan_accountid: t ? t.GetAccountID() : void 0,
          announcement_gid: i,
          event_gid: r,
          lang_list: u,
          last_modified_time: o || 0,
          origin: self.origin,
          for_edit: s,
          only_summary: this.m_bOnlySummary,
        },
        f = null,
        p = null;
      if (s) {
        let e = c();
        (e === `community`
          ? ((p = a.COMMUNITY_BASE_URL),
            (p += t ? `gid/` + t.ConvertTo64BitString() : `ogg/` + n),
            (p += `/`))
          : (p =
              e === `partner`
                ? a.PARTNER_BASE_URL + `sales/`
                : a.STORE_BASE_URL + `events/`),
          (p += `ajaxgetpartnereventforedit`),
          (f = { params: d, withCredentials: !0 }));
      } else
        ((p = a.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (f = { params: d, withCredentials: !1 }));
      try {
        let t = await z.default.get(p, f);
        if (t.data.success !== 1) return;
        let n = t.data.event,
          r = y(n);
        if (
          !this.m_mapExistingEvents.has(r) ||
          (this.m_mapExistingEvents.get(r).rtime32_last_modified ?? 0) <
            (n.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(r).rtime32_moderator_reviewed ?? 0) <
            (n.rtime_mod_reviewed ?? 0)
        ) {
          e(n.clan_steamid, `ClanSteamID is missing from data we received`);
          let t = new T(n.clan_steamid);
          this.InsertEventModelFromClanEventData(t, n);
        }
        return this.m_mapExistingEvents.get(r);
      } catch {
        return;
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
      e,
      t,
      n,
      r,
      i,
      a,
    ) {
      if (n && this.m_mapExistingEvents.has(n))
        return this.m_mapExistingEvents.get(n);
      if (r) {
        if (this.m_mapExistingEvents.has(`old_announce_` + r))
          return this.m_mapExistingEvents.get(v + r);
        if (this.m_mapAnnouncementBodyToEvent.has(r)) {
          let e = this.m_mapAnnouncementBodyToEvent.get(r);
          if (e && this.m_mapExistingEvents.has(e))
            return this.m_mapExistingEvents.get(e);
        }
      }
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        t,
        n,
        r,
        i,
        a,
      );
    }
    async LoadPartnerEventFromAnnoucementGID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        e,
        void 0,
        t,
        n,
        r,
      );
    }
    async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        void 0,
        void 0,
        t,
        n,
        r,
      );
    }
    async LoadPartnerEventFromClanEventGID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        e,
        t,
        void 0,
        n,
        r,
      );
    }
    async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        void 0,
        t,
        void 0,
        n,
        r,
      );
    }
    async LoadPartnerEventGeneric(e, t, n, r, i) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        t,
        n,
        r,
        i,
      );
    }
    async LoadHiddenPartnerEvent(e, t) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        void 0,
        t,
        void 0,
        0,
        !0,
      );
    }
    async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        void 0,
        void 0,
        t,
        0,
        !0,
      );
    }
    async HintLoadImportantUpdates() {
      let e = h(36e5);
      if (e != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = e;
        let t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
          n = a.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          r = await z.default.get(n, { params: t, withCredentials: !0 });
        r.data.apps &&
          r.data.apps.length > 0 &&
          S(() => {
            let e = new Map(r.data.apps?.map((e) => [e.appid, new W(e)]));
            this.m_mapUpdatedApps = e;
          });
      }
      return this.m_mapUpdatedApps;
    }
    GetAppImportantUpdate(e) {
      return (
        this.HintLoadImportantUpdates().catch((e) => {
          console.log(`UpdatedApps failed to load: `, e.response?.data);
        }),
        this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
      );
    }
    async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
      let n =
        a.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        t;
      return (await z.default.get(n)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, n) {
      let r = [],
        i = a.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        o = U(l(a.LANGUAGE)),
        s = null,
        c = null;
      if (e) {
        let t = [];
        (e.forEach((e) => {
          this.m_mapExistingEvents.has(e)
            ? r.push(this.m_mapExistingEvents.get(e))
            : t.push(e);
        }),
          t.sort(),
          (s = t));
      }
      if (t) {
        let e = [];
        (t.forEach((t) => {
          if (
            this.m_mapAnnouncementBodyToEvent.has(t) &&
            this.m_mapAnnouncementBodyToEvent.get(t) &&
            this.m_mapExistingEvents.has(
              this.m_mapAnnouncementBodyToEvent.get(t),
            )
          ) {
            let e = this.m_mapAnnouncementBodyToEvent.get(t);
            if (e) {
              let t = this.m_mapExistingEvents.get(e);
              t && r.push(t);
            }
          } else e.push(t);
        }),
          e.sort(),
          (c = e));
      }
      if (!s && !c) return r;
      let u = [];
      for (; (s?.length ?? 0) > 0 || (c?.length ?? 0) > 0;) {
        let e = {
          event_gids:
            (s?.length ?? 0) > 0 ? s?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(`,`) : void 0,
          lang_list: o,
          origin: self.origin,
        };
        u.push(
          z.default.get(i, { params: e, cancelToken: n ? n.token : void 0 }),
        );
      }
      try {
        let e = await Promise.all([...u]),
          t = 0;
        S(() =>
          e.forEach((e) => {
            if (e && e.data && e.data.events)
              for (let t of e.data.events) {
                let e = y(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new T(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                r.push(this.m_mapExistingEvents.get(e));
              }
            else {
              let t = O(e);
              console.error(
                `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error ` +
                  t.strErrorMsg,
                t,
              );
            }
            t += 1;
          }),
        );
      } catch (e) {
        let t = O(e);
        console.error(
          `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error ` +
            t.strErrorMsg,
          t,
        );
      }
      return r;
    }
    async SavePartnerEventSaleAssets(e, t, r, i) {
      let o = null;
      if (!this.m_mapExistingEvents.has(t)) return !1;
      try {
        let s = `${a.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
          c = new FormData();
        (c.append(`sessionid`, n()),
          c.append(`gidclanevent`, t),
          c.append(`json`, JSON.stringify(r)),
          c.append(`pageStyles`, JSON.stringify(i)));
        let l = await z.default.post(s, c, { withCredentials: !0 });
        if (l?.data?.success == 1) {
          let e = this.m_mapExistingEvents.get(t);
          if (e && e.jsondata) {
            for (let t in r)
              if (r.hasOwnProperty(t) && r[t]) {
                let n = t,
                  i = r[n];
                i !== void 0 && n !== void 0 && (e.jsondata[n] = i);
              }
          }
          return (this.GetPartnerEventChangeCallback(t).Dispatch(e), !0);
        }
        o = O(l);
      } catch (e) {
        o = O(e);
      }
      return (
        console.error(
          `CPartnerEventStore.SavePartnerEventSaleAssets failed: ` +
            o?.strErrorMsg,
          o,
        ),
        !1
      );
    }
    BIsSummaryOnlyStore() {
      return this.m_bOnlySummary;
    }
  };
(o([x], G.prototype, `m_mapExistingEvents`, void 0),
  o([x], G.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  o([x], G.prototype, `m_mapClanToGIDs`, void 0),
  o([x], G.prototype, `m_mapAppIDToGIDs`, void 0),
  o([x], G.prototype, `m_mapUpdatedApps`, void 0),
  o([C], G.prototype, `Init`, null),
  o([f], G.prototype, `GetPartnerEventChangeCallback`, null),
  o([C], G.prototype, `RegisterClanEvents`, null),
  o([C], G.prototype, `InsertEventModelFromClanEventData`, null),
  o([C], G.prototype, `DeleteClanEvent`, null),
  o([C], G.prototype, `RemoveGIDFromList`, null),
  o([C], G.prototype, `FlushEventFromCache`, null),
  o([f], G.prototype, `SavePartnerEventSaleAssets`, null));
var K = new G();
A(`g_PartnerEventStore`, K);
var q = new G(!0);
A(`g_PartnerEventSummaryStore`, q);
function J(e, t, n = !1) {
  let [r, i] = (0, j.useState)(() => K.GetClanEventModel(t)),
    [o, s] = (0, j.useState)(!0),
    c = (0, j.useMemo)(() => T.InitFromClanID(e, a.EUNIVERSE), [e]);
  return (
    (0, j.useEffect)(() => {
      !r &&
        e > 0 &&
        (K.Init(),
        K.LoadPartnerEventFromClanEventGIDAndClanSteamID(c, t, 0, n)
          .then(i)
          .finally(() => s(!1)));
    }, [c, t, r, e, n]),
    u(n ? K.GetPartnerEventChangeCallback(t) : void 0, i),
    { eventModel: r, bLoading: o }
  );
}
function Y() {
  return { fnSaveSaleAssets: K.SavePartnerEventSaleAssets };
}
export { H as a, I as c, Y as i, K as n, B as o, J as r, V as s, G as t };
