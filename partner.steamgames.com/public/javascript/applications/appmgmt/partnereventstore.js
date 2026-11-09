/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  N as t,
  Q as n,
  S as r,
  T as i,
  Y as a,
  _t as o,
  ft as s,
  i as c,
  k as l,
  kt as u,
  nt as d,
  on as f,
  x as p,
} from "./mobx.esm.js";
import { Lt as m, P as h, Rt as g, Wt as _, _t as v, t as y } from "./src.js";
import { Ia as b, ea as x } from "./dialogs.js";
import { t as S } from "./useQuery.js";
import "./appinfo.js";
import { t as C } from "./axios.js";
import { t as w } from "./ajaxhooks.js";
import { t as T } from "./axiosutils.js";
import { o as E } from "./stringutils.js";
import { t as D } from "./debugglobal.js";
import { h as O, n as k, t as A } from "./partnereventutils.js";
import "./steamid.js";
var j = f(u(), 1);
o(), (0, j.createContext)(!1);
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
              c(e?.response?.data?.err_msg), u(e?.response?.data?.success || 2);
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
  return e != n && (t += `_` + n), t;
}
var W = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(t) {
      e(
        typeof t.appid == `number`,
        `AJAX updated app returned a non-numeric AppID! Did the PHP change?`,
      ),
        (this.appid = t.appid),
        (this.date = t.date),
        (this.can_play = t.can_play),
        (this.playtime = t.playtime),
        (this.announcementid = t.announcementid);
    }
  },
  G = class {
    constructor(e = !1) {
      p(this), (this.m_bOnlySummary = e);
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
        let e = R(`PartnerEventStore`);
        this.ValidateStoreDefault(e) &&
          e.forEach((e) => {
            if (e) {
              let t = new y(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                this.m_mapExistingEvents.set(O + e.announcement_body.gid, n);
            }
          });
        let t = n(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(t) &&
          t.forEach((e) => {
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
        let r = n(`partnereventadjacents`, `application_config`);
        this.ValidateAdjacentEvent(r) &&
          r.forEach((e) => {
            e &&
              this.m_mapAdjacentAnnouncementGIDs.set(
                e.announcementGID,
                e.adjacents,
              );
          }),
          (this.m_bLoadedFromConfig = !0);
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
      return this.m_mapExistingEvents.get(e);
    }
    BHasClanEventModel(e) {
      return this.m_mapExistingEvents.has(e);
    }
    BHasClanAnnouncementGID(e) {
      if (this.m_mapAnnouncementBodyToEvent.has(e)) {
        let t = this.m_mapAnnouncementBodyToEvent.get(e);
        return !!t && this.BHasClanEventModel(t);
      }
      return !1;
    }
    GetClanEventGIDFromAnnouncementGID(e) {
      return this.m_mapAnnouncementBodyToEvent.get(e);
    }
    GetClanEventFromAnnouncementGID(e) {
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
      return n.sort(this.DefaultEventSortFunction), n;
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
      this.m_rgQueuedEventsClanIDs.push(e),
        this.m_rgQueuedEventsUniqueIDs.push(t),
        this.m_rgQueuedEventsForEditFlags.push(!!n),
        (this.m_PendingInfoPromise ||= new Promise(
          (e) => (this.m_PendingInfoResolve = e),
        ));
      let r = this.m_PendingInfoPromise,
        i = () => {
          let e = this.m_PendingInfoResolve,
            t = this.m_rgQueuedEventsClanIDs,
            n = this.m_rgQueuedEventsUniqueIDs,
            r = this.m_rgQueuedEventsForEditFlags;
          (this.m_PendingInfoPromise = void 0),
            (this.m_rgQueuedEventsClanIDs = []),
            (this.m_rgQueuedEventsUniqueIDs = []),
            (this.m_rgQueuedEventsForEditFlags = []),
            this.InternalLoadPartnerEventList(t, n, r).then(() => e?.());
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
        a = U(s(d.LANGUAGE)),
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
    async InternalLoadAdjacentPartnerEvents(t, n, r, a, o, c, l, u) {
      let f = [];
      if (!n || !this.m_mapAdjacentAnnouncementGIDs.has(n)) {
        let p = d.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          m = U(s(d.LANGUAGE));
        l?.only_summaries &&
          !this.m_bOnlySummary &&
          (e(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (l.only_summaries = void 0));
        let h = {
          clan_accountid: r ? r.GetAccountID() : void 0,
          appid: a,
          count_before: o,
          count_after: c,
          gidevent: t,
          gidannouncement: n,
          lang_list: m,
          rtime_oldestevent: l ? l.rtime_oldestevent : void 0,
          require_tags: l && l.require_tags ? l.require_tags.join(`,`) : void 0,
          exclude_tags: l && l.exclude_tags ? l.exclude_tags.join(`,`) : void 0,
          require_no_tags: l ? l.require_no_tags : void 0,
          event_type_filter:
            l && l.event_type_filter ? l.event_type_filter.join(`,`) : void 0,
          exclude_event_types:
            l && l.exclude_event_types
              ? l.exclude_event_types.join(`,`)
              : void 0,
          only_summaries: l && !!l.only_summaries,
          origin: self.origin,
        };
        try {
          let e = await z.default.get(p, { params: h, cancelToken: u?.token });
          if (e?.data?.success == 1)
            i(() => {
              for (let t of e.data.events) {
                let e = A(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new y(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(r || e, t);
                }
                f.push(this.m_mapExistingEvents.get(e));
              }
              if (f.length == 0) {
                if (t && this.BHasClanEventModel(t))
                  this.m_mapExistingEvents.get(t) &&
                    f.push(this.m_mapExistingEvents.get(t));
                else if (n && this.BHasClanAnnouncementGID(n)) {
                  let e = this.GetClanEventFromAnnouncementGID(n);
                  e && f.push(e);
                }
              }
            });
          else {
            let t = T(e?.data);
            console.error(
              `LoadAdjacentPartnerEvents Success but empty response:` +
                a +
                ` clanAccount:` +
                (r ? r.GetAccountID() : 0) +
                ` ` +
                t.strErrorMsg,
              t,
            );
          }
        } catch (e) {
          let t = T(e);
          t.errorCode != 52 &&
            console.error(
              `LoadAdjacentPartnerEvents hit error on appid:` +
                a +
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
        e?.forEach((e) => {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            let t = this.m_mapAnnouncementBodyToEvent.get(e);
            t &&
              this.m_mapExistingEvents.get(t) &&
              f.push(this.m_mapExistingEvents.get(t));
          } else t.push(e);
        }),
          t.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                t,
                u,
              )
            ).forEach((e) => f.push(e));
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
      c.push({ priority: 0, appids: t }),
        n && c.push({ priority: 1, appids: n }),
        r && c.push({ priority: 2, appids: r });
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
      (i ||= (this.m_mapAppIDToGIDs.set(t, []), this.m_mapAppIDToGIDs.get(t))),
        r.indexOf(n) == -1 && (r.push(n), i.push(n));
    }
    ResetModel() {}
    async DeleteClanEvent(e, t) {
      this.m_mapExistingEvents.has(t) &&
        (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
      let n = new URLSearchParams();
      n.append(`sessionid`, a()), n.append(`bDelete`, `1`), n.append(`gid`, t);
      let r = await z.default.post(
        d.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/ajaxcreateupdatedeletepartnerevents/`,
        n,
      );
      return this.RemoveGIDFromList(e, t), r.data;
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
        e &&
          this.m_mapExistingEvents.has(e) &&
          this.m_mapExistingEvents.delete(e),
          this.m_mapAnnouncementBodyToEvent.delete(t);
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
      n,
      r,
      i,
      a,
      o,
      c = !1,
    ) {
      let l = U(c ? 0 : s(d.LANGUAGE)),
        u = {
          appid: r,
          clan_accountid: n ? n.GetAccountID() : void 0,
          announcement_gid: a,
          event_gid: i,
          lang_list: l,
          last_modified_time: o || 0,
          origin: self.origin,
          for_edit: c,
          only_summary: this.m_bOnlySummary,
        },
        f = null,
        p = null;
      if (c) {
        let e = t();
        e === `community`
          ? ((p = d.COMMUNITY_BASE_URL),
            (p += n ? `gid/` + n.ConvertTo64BitString() : `ogg/` + r),
            (p += `/`))
          : (p =
              e === `partner`
                ? d.PARTNER_BASE_URL + `sales/`
                : d.STORE_BASE_URL + `events/`),
          (p += `ajaxgetpartnereventforedit`),
          (f = { params: u, withCredentials: !0 });
      } else
        (p = d.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (f = { params: u, withCredentials: !1 });
      try {
        let t = await z.default.get(p, f);
        if (t.data.success !== 1) return;
        let n = t.data.event,
          r = A(n);
        if (
          !this.m_mapExistingEvents.has(r) ||
          (this.m_mapExistingEvents.get(r).rtime32_last_modified ?? 0) <
            (n.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(r).rtime32_moderator_reviewed ?? 0) <
            (n.rtime_mod_reviewed ?? 0)
        ) {
          e(n.clan_steamid, `ClanSteamID is missing from data we received`);
          let t = new y(n.clan_steamid);
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
        o = U(s(d.LANGUAGE)),
        c = null,
        l = null;
      if (e) {
        let t = [];
        e.forEach((e) => {
          this.m_mapExistingEvents.has(e)
            ? r.push(this.m_mapExistingEvents.get(e))
            : t.push(e);
        }),
          t.sort(),
          (c = t);
      }
      if (t) {
        let e = [];
        t.forEach((t) => {
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
          (l = e);
      }
      if (!c && !l) return r;
      let u = [];
      for (; (c?.length ?? 0) > 0 || (l?.length ?? 0) > 0; ) {
        let e = {
          event_gids:
            (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (l?.length ?? 0) > 0 ? l?.splice(0, 100).join(`,`) : void 0,
          lang_list: o,
          origin: self.origin,
        };
        u.push(
          z.default.get(a, { params: e, cancelToken: n ? n.token : void 0 }),
        );
      }
      try {
        let e = await Promise.all([...u]),
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
        let o = `${d.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
          s = new FormData();
        s.append(`sessionid`, a()),
          s.append(`gidclanevent`, t),
          s.append(`json`, JSON.stringify(n)),
          s.append(`pageStyles`, JSON.stringify(r));
        let c = await z.default.post(o, s, { withCredentials: !0 });
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
          return this.GetPartnerEventChangeCallback(t).Dispatch(e), !0;
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
l([r], G.prototype, `m_mapExistingEvents`, void 0),
  l([r], G.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  l([r], G.prototype, `m_mapClanToGIDs`, void 0),
  l([r], G.prototype, `m_mapAppIDToGIDs`, void 0),
  l([r], G.prototype, `m_mapUpdatedApps`, void 0),
  l([c], G.prototype, `Init`, null),
  l([g], G.prototype, `GetPartnerEventChangeCallback`, null),
  l([c], G.prototype, `RegisterClanEvents`, null),
  l([c], G.prototype, `InsertEventModelFromClanEventData`, null),
  l([c], G.prototype, `DeleteClanEvent`, null),
  l([c], G.prototype, `RemoveGIDFromList`, null),
  l([c], G.prototype, `FlushEventFromCache`, null),
  l([g], G.prototype, `SavePartnerEventSaleAssets`, null);
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
    h(n ? K.GetPartnerEventChangeCallback(t) : void 0, i),
    { eventModel: r, bLoading: a }
  );
}
function Y() {
  return { fnSaveSaleAssets: K.SavePartnerEventSaleAssets };
}
export { H as a, I as c, Y as i, K as n, B as o, J as r, V as s, G as t };
