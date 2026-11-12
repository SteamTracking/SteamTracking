/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $ as e,
  A as t,
  At as n,
  C as r,
  E as i,
  P as a,
  S as o,
  X as s,
  a as c,
  en as l,
  pt as u,
  rt as d,
  sn as f,
  vt as p,
} from "./chunk~de7f2df91c.js";
import {
  Ft as m,
  It as h,
  M as g,
  Vt as _,
  ht as v,
  t as y,
} from "./chunk~25a6634263.js";
import { Ba as b, ia as x } from "./chunk~1fa4b8f2ff.js";
import { t as S } from "./chunk~ede3e357a2.js";
import "./chunk~19394a4118.js";
import { t as C } from "./chunk~f4e4ed5c17.js";
import { t as w } from "./chunk~92931c6310.js";
import { t as T } from "./chunk~c55709d290.js";
import { o as E } from "./chunk~e867464c75.js";
import { t as D } from "./chunk~f3a565e188.js";
import { l as O, n as k, t as A } from "./chunk~2bee5a7d08.js";
import "./chunk~a6b9ae1345.js";
var j = f(n(), 1);
(p(), (0, j.createContext)(!1));
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
var z = f(C());
function B(e) {
  let [t, n] = (0, j.useState)(() => K.GetClanEventModel(e)),
    r = w(`usePartnerEventByEventGID`);
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
  let t = w(`usePreloadPartnerEventsByEventGID`),
    n = S({
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
    [a, o] = (0, j.useState)(!!e && !!t),
    [s, c] = (0, j.useState)(),
    [l, u] = (0, j.useState)(1),
    f = w(`usePartnerEventByClanAccountAndEventGID`);
  return (
    (0, j.useEffect)(() => {
      (async () => {
        try {
          if (r?.GID != t && t && e) {
            K.Init();
            let r = y.InitFromClanID(e, d.EUNIVERSE),
              a;
            try {
              a = await K.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                r,
                t,
                0,
                n,
              );
            } catch (e) {
              (c(e?.response?.data?.err_msg),
                u(e?.response?.data?.success || 2));
            }
            f.token.reason || i(a);
          }
        } finally {
          o(!1);
        }
      })();
    }, [e, t, r, n, f]),
    { eventModel: r, bLoading: a, sErrorMessage: s, eResult: l }
  );
}
function U(e) {
  let t = `` + e,
    n = x.GetELanguageFallback(e);
  return (e != n && (t += `_` + n), t);
}
var W = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(e) {
      (l(
        typeof e.appid == `number`,
        `AJAX updated app returned a non-numeric AppID! Did the PHP change?`,
      ),
        (this.appid = e.appid),
        (this.date = e.date),
        (this.can_play = e.can_play),
        (this.playtime = e.playtime),
        (this.announcementid = e.announcementid));
    }
  },
  G = class {
    constructor(e = !1) {
      (o(this), (this.m_bOnlySummary = e));
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
    m_QueuedEventTimeout = new v();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let t = R(`PartnerEventStore`);
        this.ValidateStoreDefault(t) &&
          t.forEach((e) => {
            if (e) {
              let t = new y(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                this.m_mapExistingEvents.set(O + e.announcement_body.gid, n);
            }
          });
        let n = e(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(n) &&
          n.forEach((e) => {
            if (e) {
              let t = new y(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + e.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(O + e.announcement_body.gid, n);
            }
          });
        let r = e(`partnereventadjacents`, `application_config`);
        (this.ValidateAdjacentEvent(r) &&
          r.forEach((e) => {
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
          (this.m_mapEventUpdateCallback.set(e, new m()),
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
        ? E(e.GID ?? ``, t.GID ?? ``)
        : (t.startTime ?? 0) - (e.startTime ?? 0);
    }
    RegisterClanEvents(e) {
      if (e)
        for (let t of e) {
          let e = A(t);
          if (!this.m_mapExistingEvents.has(e)) {
            let e = new y(t.clan_steamid);
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
      let n = k(e, t);
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
          e.jsondata.localized_per_day_sales_header.push(_([], 32, null));
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
          d.STORE_BASE_URL +
          (r
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        a = U(u(d.LANGUAGE)),
        o = {
          clanid_list: e.join(`,`),
          uniqueid_list: t.join(`,`),
          lang_list: a,
          origin: self.origin,
        };
      try {
        let e = await z.default.get(i, { params: o, withCredentials: r });
        this.RegisterClanEvents(e.data.events);
      } catch (e) {
        let t = T(e);
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
    async InternalLoadAdjacentPartnerEvents(e, t, n, r, a, o, s, c) {
      let f = [];
      if (!t || !this.m_mapAdjacentAnnouncementGIDs.has(t)) {
        let p = d.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          m = U(u(d.LANGUAGE));
        s?.only_summaries &&
          !this.m_bOnlySummary &&
          (l(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (s.only_summaries = void 0));
        let h = {
          clan_accountid: n ? n.GetAccountID() : void 0,
          appid: r,
          count_before: a,
          count_after: o,
          gidevent: e,
          gidannouncement: t,
          lang_list: m,
          rtime_oldestevent: s ? s.rtime_oldestevent : void 0,
          require_tags: s && s.require_tags ? s.require_tags.join(`,`) : void 0,
          exclude_tags: s && s.exclude_tags ? s.exclude_tags.join(`,`) : void 0,
          require_no_tags: s ? s.require_no_tags : void 0,
          event_type_filter:
            s && s.event_type_filter ? s.event_type_filter.join(`,`) : void 0,
          exclude_event_types:
            s && s.exclude_event_types
              ? s.exclude_event_types.join(`,`)
              : void 0,
          only_summaries: s && !!s.only_summaries,
          origin: self.origin,
        };
        try {
          let a = await z.default.get(p, { params: h, cancelToken: c?.token });
          if (a?.data?.success == 1)
            i(() => {
              for (let e of a.data.events) {
                let t = A(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new y(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(n || t, e);
                }
                f.push(this.m_mapExistingEvents.get(t));
              }
              if (f.length == 0) {
                if (e && this.BHasClanEventModel(e))
                  this.m_mapExistingEvents.get(e) &&
                    f.push(this.m_mapExistingEvents.get(e));
                else if (t && this.BHasClanAnnouncementGID(t)) {
                  let e = this.GetClanEventFromAnnouncementGID(t);
                  e && f.push(e);
                }
              }
            });
          else {
            let e = T(a?.data);
            console.error(
              `LoadAdjacentPartnerEvents Success but empty response:` +
                r +
                ` clanAccount:` +
                (n ? n.GetAccountID() : 0) +
                ` ` +
                e.strErrorMsg,
              e,
            );
          }
        } catch (e) {
          let t = T(e);
          t.errorCode != 52 &&
            console.error(
              `LoadAdjacentPartnerEvents hit error on appid:` +
                r +
                ` clanAccount:` +
                (n ? n.GetAccountID() : 0) +
                ` ` +
                t.strErrorMsg,
              t,
            );
        }
      } else {
        let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
          n = [];
        (e?.forEach((e) => {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            let t = this.m_mapAnnouncementBodyToEvent.get(e);
            t &&
              this.m_mapExistingEvents.get(t) &&
              f.push(this.m_mapExistingEvents.get(t));
          } else n.push(e);
        }),
          n.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                n,
                c,
              )
            ).forEach((e) => f.push(e)));
      }
      return f;
    }
    async LoadPartnerEventsPageable(e, t, n = 0, r = 0, a) {
      let o = [],
        s = d.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        c = {
          clan_accountid: e ? e.GetAccountID() : void 0,
          appid: t,
          offset: n,
          count: r,
          l: d.LANGUAGE,
          origin: self.origin,
          exclude_tags: a && a.length > 0 ? a?.join(`,`) : void 0,
        };
      try {
        let e = await z.default.get(s, { params: c });
        i(() => {
          for (let t of e.data.events) {
            let e = A(t);
            if (!this.m_mapExistingEvents.has(e)) {
              let e = new y(t.clan_steamid);
              this.InsertEventModelFromClanEventData(e, t);
            }
            o.push(this.m_mapExistingEvents.get(e));
          }
        });
      } catch (e) {
        console.error(`LoadClanEventInDateRange hit error ` + T(e).strErrorMsg);
      }
      return o;
    }
    async GetBestEventsForCurrentUser(e, t, n) {
      let r = [],
        a = {
          l: d.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: e,
          include_only_game_updates: t,
        },
        o = d.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        s = await z.default.get(o, {
          params: a,
          withCredentials: !0,
          cancelToken: n ? n.token : void 0,
        });
      if (!s.data?.events) {
        let e = s.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${e})`);
      }
      return (
        i(() => {
          for (let e of s.data.events) {
            let t = A(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new y(e.clan_steamid);
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
    async LoadImportantEventsAroundToday(e, t, n, r, a, o) {
      let s = [],
        c = [];
      (c.push({ priority: 0, appids: t }),
        n && c.push({ priority: 1, appids: n }),
        r && c.push({ priority: 2, appids: r }));
      let l = {
          count: e,
          strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
          filterToEventTypes: o ? o.toString() : ``,
          l: d.LANGUAGE,
        },
        u = d.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        f = await z.default.get(u, {
          params: l,
          withCredentials: !0,
          cancelToken: a.token,
        });
      return (
        i(() => {
          for (let e of f.data.events) {
            let t = A(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new y(e.clan_steamid);
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
      let n = new URLSearchParams();
      (n.append(`sessionid`, s()),
        n.append(`bDelete`, `1`),
        n.append(`gid`, t));
      let r = await z.default.post(
        d.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/ajaxcreateupdatedeletepartnerevents/`,
        n,
      );
      return (this.RemoveGIDFromList(e, t), r.data);
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
            this.m_mapExistingEvents.delete(O + t),
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
      e,
      t,
      n,
      r,
      i,
      o = !1,
    ) {
      let s = U(o ? 0 : u(d.LANGUAGE)),
        c = {
          appid: t,
          clan_accountid: e ? e.GetAccountID() : void 0,
          announcement_gid: r,
          event_gid: n,
          lang_list: s,
          last_modified_time: i || 0,
          origin: self.origin,
          for_edit: o,
          only_summary: this.m_bOnlySummary,
        },
        f = null,
        p = null;
      if (o) {
        let n = a();
        (n === `community`
          ? ((p = d.COMMUNITY_BASE_URL),
            (p += e ? `gid/` + e.ConvertTo64BitString() : `ogg/` + t),
            (p += `/`))
          : (p =
              n === `partner`
                ? d.PARTNER_BASE_URL + `sales/`
                : d.STORE_BASE_URL + `events/`),
          (p += `ajaxgetpartnereventforedit`),
          (f = { params: c, withCredentials: !0 }));
      } else
        ((p = d.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (f = { params: c, withCredentials: !1 }));
      try {
        let e = await z.default.get(p, f);
        if (e.data.success !== 1) return;
        let t = e.data.event,
          n = A(t);
        if (
          !this.m_mapExistingEvents.has(n) ||
          (this.m_mapExistingEvents.get(n).rtime32_last_modified ?? 0) <
            (t.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(n).rtime32_moderator_reviewed ?? 0) <
            (t.rtime_mod_reviewed ?? 0)
        ) {
          l(t.clan_steamid, `ClanSteamID is missing from data we received`);
          let e = new y(t.clan_steamid);
          this.InsertEventModelFromClanEventData(e, t);
        }
        return this.m_mapExistingEvents.get(n);
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
          return this.m_mapExistingEvents.get(O + r);
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
      let e = b(36e5);
      if (e != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = e;
        let t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
          n = d.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          r = await z.default.get(n, { params: t, withCredentials: !0 });
        r.data.apps &&
          r.data.apps.length > 0 &&
          i(() => {
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
        d.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        t;
      return (await z.default.get(n)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, n) {
      let r = [],
        a = d.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        o = U(u(d.LANGUAGE)),
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
      let l = [];
      for (; (s?.length ?? 0) > 0 || (c?.length ?? 0) > 0;) {
        let e = {
          event_gids:
            (s?.length ?? 0) > 0 ? s?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(`,`) : void 0,
          lang_list: o,
          origin: self.origin,
        };
        l.push(
          z.default.get(a, { params: e, cancelToken: n ? n.token : void 0 }),
        );
      }
      try {
        let e = await Promise.all([...l]),
          t = 0;
        i(() =>
          e.forEach((e) => {
            if (e && e.data && e.data.events)
              for (let t of e.data.events) {
                let e = A(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new y(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                r.push(this.m_mapExistingEvents.get(e));
              }
            else {
              let t = T(e);
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
        let t = T(e);
        console.error(
          `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error ` +
            t.strErrorMsg,
          t,
        );
      }
      return r;
    }
    async SavePartnerEventSaleAssets(e, t, n, r) {
      let i = null;
      if (!this.m_mapExistingEvents.has(t)) return !1;
      try {
        let a = `${d.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
          o = new FormData();
        (o.append(`sessionid`, s()),
          o.append(`gidclanevent`, t),
          o.append(`json`, JSON.stringify(n)),
          o.append(`pageStyles`, JSON.stringify(r)));
        let c = await z.default.post(a, o, { withCredentials: !0 });
        if (c?.data?.success == 1) {
          let e = this.m_mapExistingEvents.get(t);
          if (e && e.jsondata) {
            for (let t in n)
              if (n.hasOwnProperty(t) && n[t]) {
                let r = t,
                  i = n[r];
                i !== void 0 && r !== void 0 && (e.jsondata[r] = i);
              }
          }
          return (this.GetPartnerEventChangeCallback(t).Dispatch(e), !0);
        }
        i = T(c);
      } catch (e) {
        i = T(e);
      }
      return (
        console.error(
          `CPartnerEventStore.SavePartnerEventSaleAssets failed: ` +
            i?.strErrorMsg,
          i,
        ),
        !1
      );
    }
    BIsSummaryOnlyStore() {
      return this.m_bOnlySummary;
    }
  };
(t([r], G.prototype, `m_mapExistingEvents`, void 0),
  t([r], G.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  t([r], G.prototype, `m_mapClanToGIDs`, void 0),
  t([r], G.prototype, `m_mapAppIDToGIDs`, void 0),
  t([r], G.prototype, `m_mapUpdatedApps`, void 0),
  t([c], G.prototype, `Init`, null),
  t([h], G.prototype, `GetPartnerEventChangeCallback`, null),
  t([c], G.prototype, `RegisterClanEvents`, null),
  t([c], G.prototype, `InsertEventModelFromClanEventData`, null),
  t([c], G.prototype, `DeleteClanEvent`, null),
  t([c], G.prototype, `RemoveGIDFromList`, null),
  t([c], G.prototype, `FlushEventFromCache`, null),
  t([h], G.prototype, `SavePartnerEventSaleAssets`, null));
var K = new G();
D(`g_PartnerEventStore`, K);
var q = new G(!0);
D(`g_PartnerEventSummaryStore`, q);
function J(e, t, n = !1) {
  let [r, i] = (0, j.useState)(() => K.GetClanEventModel(t)),
    [a, o] = (0, j.useState)(!0),
    s = (0, j.useMemo)(() => y.InitFromClanID(e, d.EUNIVERSE), [e]);
  return (
    (0, j.useEffect)(() => {
      !r &&
        e > 0 &&
        (K.Init(),
        K.LoadPartnerEventFromClanEventGIDAndClanSteamID(s, t, 0, n)
          .then(i)
          .finally(() => o(!1)));
    }, [s, t, r, e, n]),
    g(n ? K.GetPartnerEventChangeCallback(t) : void 0, i),
    { eventModel: r, bLoading: a }
  );
}
function Y() {
  return { fnSaveSaleAssets: K.SavePartnerEventSaleAssets };
}
export { H as a, I as c, Y as i, K as n, B as o, J as r, V as s, G as t };
