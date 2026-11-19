import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Bn as t,
  Ga as n,
  Ia as r,
  Jr as i,
  Ka as a,
  Ki as o,
  Ma as s,
  Pn as c,
  Xa as l,
  _t as u,
  cn as d,
  en as f,
  eo as p,
  fi as m,
  ft as h,
  ga as g,
  pn as _,
  qr as ee,
  si as v,
  vn as te,
  ya as y,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { D as b, M as ne } from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as x } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { $r as re, ti as ie } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { r as S } from "./chunk~68b7e78d68.js?contenthash=BWLL7p8C";
import { Ct as C } from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import {
  Ai as w,
  Cn as T,
  Hr as E,
  Jr as D,
  hr as O,
  ir as ae,
  r as k,
} from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import {
  H as A,
  N as j,
  P as oe,
  r as se,
} from "./chunk~cbbb6ae37c.js?contenthash=B4MrjhKD";
import { t as ce } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import "./chunk~19394a4118.js?contenthash=DfD1Klfi";
import "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
import { t as M } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { h as le } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { C as ue } from "./library.js?contenthash=CVZWwsCP";
import { d as N } from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import { t as P } from "./chunk~92931c6310.js?contenthash=C5UJ3B2Y";
import { t as F } from "./chunk~7b4b9eb713.js?contenthash=B8m-xg-T";
var I = e(p(), 1),
  L = ce();
(0, I.createContext)(!1);
function R() {
  return !0;
}
var z = Intl.DateTimeFormat().resolvedOptions().timeZone,
  B =
    `document` in globalThis
      ? document.cookie
          .split(`;`)
          .find((e) => e.trim().startsWith(`timezoneName`))
          ?.split(`=`)[1]
      : void 0,
  V = B && decodeURIComponent(B);
function H() {
  return R() ? z : (V ?? z);
}
function U() {
  `document` in globalThis &&
    z &&
    (document.cookie = `timezoneName=${z};expires=${new Date(Date.now() + 31536e6).toUTCString()};path=/;Secure;SameSite=None;`);
}
U();
var de = 500,
  W = class extends I.Component {
    render() {
      let {
          keyExtractor: e,
          style: t,
          duration: n = de,
          className: r,
          children: i,
          childRef: a,
          ...o
        } = this.props,
        s = { ...(t || {}), transitionDuration: `${n / 1e3}s` };
      return (0, L.jsx)(re, {
        ...o,
        className: x(`crossfade`, r),
        children: (0, L.jsx)(
          ie,
          {
            nodeRef: a,
            classNames: `crossfade-anim`,
            timeout: n,
            style: s,
            children: i,
          },
          e(),
        ),
      });
    }
  };
function fe(e) {
  let { src: t, ...n } = e,
    r = { backgroundImage: `url(${t})` },
    i = I.useRef(null);
  return (0, L.jsx)(W, {
    style: r,
    keyExtractor: () => t,
    childRef: i,
    ...n,
    children: (0, L.jsx)(`div`, { ref: i, className: `crossfade-img` }),
  });
}
function pe(e) {
  return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
}
var G = e(ue());
function me(e) {
  let [t, n] = (0, I.useState)(() => Y.GetClanEventModel(e)),
    r = P(`usePartnerEventByEventGID`);
  return (
    (0, I.useEffect)(() => {
      e &&
        t?.GID != e &&
        (Y.Init(),
        Y.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], r).then(
          (t) => {
            t?.length == 1 && t[0].GID == e && !r.token.reason && n(t[0]);
          },
        ));
    }, [e, t, r]),
    t
  );
}
function he(e, t, n) {
  let [r, i] = (0, I.useState)(t ? Y.GetClanEventModel(t) : void 0),
    [a, o] = (0, I.useState)(!!e && !!t),
    [c, l] = (0, I.useState)(),
    [u, d] = (0, I.useState)(1),
    f = P(`usePartnerEventByClanAccountAndEventGID`);
  return (
    (0, I.useEffect)(() => {
      (async () => {
        try {
          if (r?.GID != t && t && e) {
            Y.Init();
            let r = M.InitFromClanID(e, s.EUNIVERSE),
              a;
            try {
              a = await Y.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                r,
                t,
                0,
                n,
              );
            } catch (e) {
              (l(e?.response?.data?.err_msg),
                d(e?.response?.data?.success || 2));
            }
            f.token.reason || i(a);
          }
        } finally {
          o(!1);
        }
      })();
    }, [e, t, r, n, f]),
    { eventModel: r, bLoading: a, sErrorMessage: c, eResult: u }
  );
}
async function ge(e, t) {
  return (
    Y.Init(),
    (
      await Y.LoadAdjacentPartnerEvents(
        void 0,
        e.clanSteamID,
        e.appid ?? 0,
        0,
        1,
        { ...e.additionalParams },
        t,
      )
    )?.[0] ?? null
  );
}
function _e(e) {
  let t = null,
    n = -1;
  for (let r of e) {
    if (!r) continue;
    let e = r.GetPostTimeAndDateUnixSeconds();
    e > n && ((n = e), (t = r));
  }
  return t;
}
function ve(e, t) {
  let n = `LatestPatchNoteForSource`,
    r = e.map((e) => ({
      queryKey: [n, q(e), e.additionalParams],
      queryFn: () => ge(e),
      staleTime: 3e5,
    })),
    i = le();
  (0, I.useEffect)(() => {
    t &&
      i.invalidateQueries(
        { queryKey: [n], predicate: (e) => e.state.dataUpdatedAt < t * 1e3 },
        { cancelRefetch: !1 },
      );
  }, [i, t]);
  let a = (0, I.useCallback)((e) => {
    let t = e.some((e) => e.isPending);
    return { isLoading: t, data: _e(t ? [] : e.map((e) => e.data)) };
  }, []);
  return S({ queries: r, combine: a });
}
function K(e) {
  let t = `` + e,
    n = h.GetELanguageFallback(e);
  return (e != n && (t += `_` + n), t);
}
function ye(e, t) {
  return e.appid && t.appid
    ? e.appid == t.appid
    : (e.clanSteamID?.GetAccountID() ?? 0) ==
        (t.clanSteamID?.GetAccountID() ?? 0);
}
function q(e) {
  return e.appid
    ? `app_${e.appid}`
    : `clan_${e.clanSteamID?.GetAccountID() ?? 0}`;
}
var be = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(e) {
      (m(
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
  J = class {
    constructor(e = !1) {
      (n(this), (this.m_bOnlySummary = e));
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
    m_QueuedEventTimeout = new d();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let e = pe(`PartnerEventStore`);
        this.ValidateStoreDefault(e) &&
          e.forEach((e) => {
            if (e) {
              let t = new M(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                this.m_mapExistingEvents.set(A + e.announcement_body.gid, n);
            }
          });
        let t = y(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(t) &&
          t.forEach((e) => {
            if (e) {
              let t = new M(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + e.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(A + e.announcement_body.gid, n);
            }
          });
        let n = y(`partnereventadjacents`, `application_config`);
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
          (this.m_mapEventUpdateCallback.set(e, new ee()),
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
        ? ae(e.GID ?? ``, t.GID ?? ``)
        : (t.startTime ?? 0) - (e.startTime ?? 0);
    }
    RegisterClanEvents(e) {
      if (e)
        for (let t of e) {
          let e = j(t);
          if (!this.m_mapExistingEvents.has(e)) {
            let e = new M(t.clan_steamid);
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
      let n = oe(e, t);
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
          e.jsondata.localized_per_day_sales_header.push(v([], 32, null));
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
          s.STORE_BASE_URL +
          (r
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        a = K(o(s.LANGUAGE)),
        c = {
          clanid_list: e.join(`,`),
          uniqueid_list: t.join(`,`),
          lang_list: a,
          origin: self.origin,
        };
      try {
        let e = await G.default.get(i, { params: c, withCredentials: r });
        this.RegisterClanEvents(e.data.events);
      } catch (e) {
        let t = N(e);
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
    async InternalLoadAdjacentPartnerEvents(e, t, n, r, i, a, c, u) {
      let d = [];
      if (!t || !this.m_mapAdjacentAnnouncementGIDs.has(t)) {
        let f = s.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          p = K(o(s.LANGUAGE));
        c?.only_summaries &&
          !this.m_bOnlySummary &&
          (m(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (c.only_summaries = void 0));
        let h = {
          clan_accountid: n ? n.GetAccountID() : void 0,
          appid: r,
          count_before: i,
          count_after: a,
          gidevent: e,
          gidannouncement: t,
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
          let i = await G.default.get(f, { params: h, cancelToken: u?.token });
          if (i?.data?.success == 1)
            l(() => {
              for (let e of i.data.events) {
                let t = j(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new M(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(n || t, e);
                }
                d.push(this.m_mapExistingEvents.get(t));
              }
              if (d.length == 0) {
                if (e && this.BHasClanEventModel(e))
                  this.m_mapExistingEvents.get(e) &&
                    d.push(this.m_mapExistingEvents.get(e));
                else if (t && this.BHasClanAnnouncementGID(t)) {
                  let e = this.GetClanEventFromAnnouncementGID(t);
                  e && d.push(e);
                }
              }
            });
          else {
            let e = N(i?.data);
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
          let t = N(e);
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
              d.push(this.m_mapExistingEvents.get(t));
          } else n.push(e);
        }),
          n.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                n,
                u,
              )
            ).forEach((e) => d.push(e)));
      }
      return d;
    }
    async LoadPartnerEventsPageable(e, t, n = 0, r = 0, i) {
      let a = [],
        o = s.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        c = {
          clan_accountid: e ? e.GetAccountID() : void 0,
          appid: t,
          offset: n,
          count: r,
          l: s.LANGUAGE,
          origin: self.origin,
          exclude_tags: i && i.length > 0 ? i?.join(`,`) : void 0,
        };
      try {
        let e = await G.default.get(o, { params: c });
        l(() => {
          for (let t of e.data.events) {
            let e = j(t);
            if (!this.m_mapExistingEvents.has(e)) {
              let e = new M(t.clan_steamid);
              this.InsertEventModelFromClanEventData(e, t);
            }
            a.push(this.m_mapExistingEvents.get(e));
          }
        });
      } catch (e) {
        console.error(`LoadClanEventInDateRange hit error ` + N(e).strErrorMsg);
      }
      return a;
    }
    async GetBestEventsForCurrentUser(e, t, n) {
      let r = [],
        i = {
          l: s.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: e,
          include_only_game_updates: t,
        },
        a = s.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        o = await G.default.get(a, {
          params: i,
          withCredentials: !0,
          cancelToken: n ? n.token : void 0,
        });
      if (!o.data?.events) {
        let e = o.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${e})`);
      }
      return (
        l(() => {
          for (let e of o.data.events) {
            let t = j(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new M(e.clan_steamid);
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
    async LoadImportantEventsAroundToday(e, t, n, r, i, a) {
      let o = [],
        c = [];
      (c.push({ priority: 0, appids: t }),
        n && c.push({ priority: 1, appids: n }),
        r && c.push({ priority: 2, appids: r }));
      let u = {
          count: e,
          strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
          filterToEventTypes: a ? a.toString() : ``,
          l: s.LANGUAGE,
        },
        d = s.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        f = await G.default.get(d, {
          params: u,
          withCredentials: !0,
          cancelToken: i.token,
        });
      return (
        l(() => {
          for (let e of f.data.events) {
            let t = j(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new M(e.clan_steamid);
              this.InsertEventModelFromClanEventData(t, e);
            }
            o.push(this.m_mapExistingEvents.get(t));
          }
        }),
        o
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
      (n.append(`sessionid`, g()),
        n.append(`bDelete`, `1`),
        n.append(`gid`, t));
      let r = await G.default.post(
        s.COMMUNITY_BASE_URL +
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
            this.m_mapExistingEvents.delete(A + t),
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
      a = !1,
    ) {
      let c = K(a ? 0 : o(s.LANGUAGE)),
        l = {
          appid: t,
          clan_accountid: e ? e.GetAccountID() : void 0,
          announcement_gid: r,
          event_gid: n,
          lang_list: c,
          last_modified_time: i || 0,
          origin: self.origin,
          for_edit: a,
          only_summary: this.m_bOnlySummary,
        },
        u = null,
        d = null;
      if (a) {
        let n = te();
        (n === `community`
          ? ((d = s.COMMUNITY_BASE_URL),
            (d += e ? `gid/` + e.ConvertTo64BitString() : `ogg/` + t),
            (d += `/`))
          : (d =
              n === `partner`
                ? s.PARTNER_BASE_URL + `sales/`
                : s.STORE_BASE_URL + `events/`),
          (d += `ajaxgetpartnereventforedit`),
          (u = { params: l, withCredentials: !0 }));
      } else
        ((d = s.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (u = { params: l, withCredentials: !1 }));
      try {
        let e = await G.default.get(d, u);
        if (e.data.success !== 1) return;
        let t = e.data.event,
          n = j(t);
        if (
          !this.m_mapExistingEvents.has(n) ||
          (this.m_mapExistingEvents.get(n).rtime32_last_modified ?? 0) <
            (t.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(n).rtime32_moderator_reviewed ?? 0) <
            (t.rtime_mod_reviewed ?? 0)
        ) {
          m(t.clan_steamid, `ClanSteamID is missing from data we received`);
          let e = new M(t.clan_steamid);
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
          return this.m_mapExistingEvents.get(A + r);
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
      let e = f(36e5);
      if (e != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = e;
        let t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
          n = s.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          r = await G.default.get(n, { params: t, withCredentials: !0 });
        r.data.apps &&
          r.data.apps.length > 0 &&
          l(() => {
            let e = new Map(r.data.apps?.map((e) => [e.appid, new be(e)]));
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
        s.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        t;
      return (await G.default.get(n)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, n) {
      let r = [],
        i = s.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        a = K(o(s.LANGUAGE)),
        c = null,
        u = null;
      if (e) {
        let t = [];
        (e.forEach((e) => {
          this.m_mapExistingEvents.has(e)
            ? r.push(this.m_mapExistingEvents.get(e))
            : t.push(e);
        }),
          t.sort(),
          (c = t));
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
          (u = e));
      }
      if (!c && !u) return r;
      let d = [];
      for (; (c?.length ?? 0) > 0 || (u?.length ?? 0) > 0;) {
        let e = {
          event_gids:
            (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (u?.length ?? 0) > 0 ? u?.splice(0, 100).join(`,`) : void 0,
          lang_list: a,
          origin: self.origin,
        };
        d.push(
          G.default.get(i, { params: e, cancelToken: n ? n.token : void 0 }),
        );
      }
      try {
        let e = await Promise.all([...d]),
          t = 0;
        l(() =>
          e.forEach((e) => {
            if (e && e.data && e.data.events)
              for (let t of e.data.events) {
                let e = j(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new M(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                r.push(this.m_mapExistingEvents.get(e));
              }
            else {
              let t = N(e);
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
        let t = N(e);
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
        let a = `${s.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
          o = new FormData();
        (o.append(`sessionid`, g()),
          o.append(`gidclanevent`, t),
          o.append(`json`, JSON.stringify(n)),
          o.append(`pageStyles`, JSON.stringify(r)));
        let c = await G.default.post(a, o, { withCredentials: !0 });
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
        i = N(c);
      } catch (e) {
        i = N(e);
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
(_([a], J.prototype, `m_mapExistingEvents`, void 0),
  _([a], J.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  _([a], J.prototype, `m_mapClanToGIDs`, void 0),
  _([a], J.prototype, `m_mapAppIDToGIDs`, void 0),
  _([a], J.prototype, `m_mapUpdatedApps`, void 0),
  _([r], J.prototype, `Init`, null),
  _([i], J.prototype, `GetPartnerEventChangeCallback`, null),
  _([r], J.prototype, `RegisterClanEvents`, null),
  _([r], J.prototype, `InsertEventModelFromClanEventData`, null),
  _([r], J.prototype, `DeleteClanEvent`, null),
  _([r], J.prototype, `RemoveGIDFromList`, null),
  _([r], J.prototype, `FlushEventFromCache`, null),
  _([i], J.prototype, `SavePartnerEventSaleAssets`, null));
var Y = new J();
O(`g_PartnerEventStore`, Y);
var xe = new J(!0);
O(`g_PartnerEventSummaryStore`, xe);
var Se = e(C(), 1),
  Ce = `ewL7epZsubk-`,
  we = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`;
function Te(e) {
  let [t, n] = I.useState(!1);
  return {
    bShowSeeMoreHint: t,
    panelProps: {
      onFocusWithin: I.useCallback((t) => n(t && !!e), [e]),
      onOptionsButton: I.useCallback(() => {
        e && e.length !== 0 && (window.location.href = e);
      }, [e]),
    },
  };
}
function X(e) {
  let { label: t, shown: n } = e;
  return (0, L.jsxs)(`div`, {
    className: (0, Se.default)(Ce, n && `lDd-amB-eCU-`),
    children: [
      (0, L.jsx)(`img`, { src: we, alt: `Y` }),
      (0, L.jsx)(`div`, { children: t }),
    ],
  });
}
function Ee(e, t) {
  let n = h.GetELanguageFallback(t),
    r =
      e.jsondata.localized_sale_cross_promo_logo_image?.findIndex((e) => !!e) ??
      -1;
  return (
    e.GetImageURL(`sale_cross_promo_logo`, t) ||
    e.GetImageURL(`sale_cross_promo_logo`, n) ||
    (r >= 0 ? e.GetImageURL(`sale_cross_promo_logo`, r) : void 0) ||
    e.GetImageURL(`sale_logo`, t) ||
    e.GetImageURL(`sale_logo`, n)
  );
}
function De(e, t, n) {
  if (!e) return !1;
  let r = !n?.bHasHideIgnoredValue || n.bHideIgnored;
  return (e.ignored && r) ||
    (e.excluded_tagids?.length ?? 0) > 0 ||
    (e.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (n?.bHideOwned && e.already_owned) ||
    (n?.bHideWishlisted && e.on_wishlist)
    ? !0
    : t && !!(e.already_owned || e.demo_for_owned_game);
}
function Oe(e, t) {
  let n = E(),
    r = S({
      queries: e.map((e) => {
        let r = D(n, e);
        return t ? { ...r, enabled: !1 } : r;
      }),
      combine: ke,
    });
  return (0, I.useMemo)(() => {
    if (t || !r.some((e) => e === void 0))
      return e.filter((e, t) => !De(r[t], !1));
  }, [e, r, t]);
}
function ke(e) {
  return e.map((e) => e.data);
}
function Z(e, n) {
  return !n || n.startsWith(`https://`) || n.startsWith(`http://`)
    ? n
    : `${t.CLAN_CDN_ASSET_URL}images/clan/${e}/${n}`;
}
function Ae(e, t) {
  let n = se(e ?? void 0, `capsule`, t);
  if (!e) return;
  let r = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: r,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: F(e) ?? void 0,
    strBackgroundURL: Z(
      r,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: Ee(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function je(e) {
  return (e ?? []).slice(0, 48).map((e) => ({ appid: e }));
}
var Me = `Es-UANTRhdg-`,
  Ne = `FsYxDNcAXaI-`,
  Pe = `cSFkUHyVW24-`,
  Fe = `yT92BfNEvpw-`,
  Q = `_6jMisrq5Zfo-`,
  Ie = `XBv92QzB8Xc-`,
  Le = `NjUCqxvhkHk-`,
  Re = `gxh8RxFKhr8-`,
  ze = `AZSEWyNPfhc-`,
  Be = `gZNFN-cKUHw-`;
function Ve(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    i = Ae(t, n);
  if (!i) return null;
  let a = r ? { ...i, strSaleURL: r } : i;
  return a.strSaleURL
    ? (0, L.jsx)(ne, {
        className: x(Me, Ne, Pe),
        "flow-children": `row`,
        children: (0, L.jsx)(He, { saleEvent: a, bExploreButtonBelow: !0 }),
      })
    : null;
}
function He(e) {
  let {
      saleEvent: t,
      bExploreButtonBelow: n,
      bShowExploreHint: r,
      children: i,
    } = e,
    a = t?.strSaleURL,
    o = t?.eCreatorRole,
    s = o || !e.strExploreLabel ? qe(o) : e.strExploreLabel,
    l = t?.strCapsuleURL,
    d = t?.strSummary,
    f = H(),
    p = c(),
    m = p && r !== void 0,
    h = t?.rtEndTime
      ? w(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: f,
        })
      : void 0;
  return (0, L.jsxs)(L.Fragment, {
    children: [
      l &&
        !o &&
        (0, L.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: { backgroundImage: `url(${l})` },
        }),
      l &&
        !o &&
        (0, L.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: { backgroundImage: `url(${l})` },
        }),
      o && (0, L.jsx)(Ge, { rgAppIDs: t?.rgCreatorAppIDs, strAvatarURL: l }),
      (0, L.jsxs)(`div`, {
        className: x(Fe, o && `-NAWu4CYrl8-`),
        children: [
          o &&
            l &&
            (0, L.jsx)(k, {
              url: a,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, L.jsx)(`img`, { src: l, alt: `` }),
            }),
          (0, L.jsxs)(`div`, {
            className: Q,
            children: [
              (0, L.jsx)(`div`, {
                className: Ie,
                children: (0, L.jsx)(k, {
                  url: a,
                  className: Le,
                  bFocusable: !1,
                  children: t?.strName,
                }),
              }),
              h &&
                (0, L.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: u(`#Sale_CrossPromoSale_NowThrough`, h),
                }),
            ],
          }),
          a &&
            !n &&
            !m &&
            (0, L.jsx)(k, {
              url: a,
              className: x(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: b,
              children: s,
            }),
          a && m && (0, L.jsx)(X, { label: s, shown: !!r }),
        ],
      }),
      (0, L.jsxs)(`div`, {
        className: Re,
        children: [
          l &&
            (0, L.jsxs)(k, {
              url: a,
              className: x(`oztjxXYIBAk-`, o && `CDF-2WDX3lg-`),
              bFocusable: !!p,
              children: [
                (0, L.jsx)(`img`, { src: l, alt: `` }),
                d &&
                  (0, L.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, L.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: d,
                    }),
                  }),
              ],
            }),
          i,
        ],
      }),
      a &&
        !m &&
        (0, L.jsx)(`div`, {
          className: x(`T1fHkhyvNkM-`, n && `SAqjQ-F71kA-`),
          children: (0, L.jsx)(k, {
            url: a,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: b,
            children: s,
          }),
        }),
    ],
  });
}
var Ue = 60,
  We = 4;
function Ge(e) {
  let { rgAppIDs: t, strAvatarURL: n } = e,
    r = Oe(
      I.useMemo(() => je(t), [t]),
      !1,
    ),
    i = I.useMemo(() => {
      let e = (r ?? []).slice(0, 24);
      return e.length < We
        ? []
        : Array.from({ length: Ue }, (t, n) => e[n % e.length]);
    }, [r]);
  return i.length
    ? (0, L.jsxs)(`div`, {
        className: ze,
        "aria-hidden": !0,
        children: [
          n &&
            (0, L.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: { backgroundImage: `url(${n})` },
            }),
          (0, L.jsx)(`div`, {
            className: Be,
            children: i.map((e, t) => (0, L.jsx)(Ke, { id: e }, t)),
          }),
        ],
      })
    : null;
}
function Ke(e) {
  let t = T(e.id, `header`);
  return t
    ? (0, L.jsx)(`img`, { src: t, alt: ``, loading: `lazy` })
    : (0, L.jsx)(`div`, {});
}
function qe(e) {
  return u(
    e
      ? `#Sale_CrossPromoCreator_Visit_${e}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
var $ = class extends I.Component {
  m_elCanvas = null;
  m_Context = null;
  m_schUpdate = new d();
  m_bSetupComplete = !1;
  componentDidMount() {
    this.props.updateRate == 0 && this.updateCanvas();
  }
  componentWillUnmount() {
    this.m_schUpdate.Cancel();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  BindCanvasRef(e) {
    this.m_elCanvas = e;
  }
  updateCanvas() {
    if (
      this.props.elementRef == null ||
      this.m_elCanvas == null ||
      this.m_bSetupComplete
    )
      return;
    let e = this.props.scaleFactor || [1, 1],
      t = this.props.elementRef,
      n = this.props.updateRate,
      r = this.m_elCanvas.getContext(`2d`);
    if (!r) return;
    this.m_Context = r;
    let i = Math.floor(
        this.m_elCanvas.clientWidth / this.props.reductionFactor,
      ),
      a = Math.floor(this.m_elCanvas.clientHeight / this.props.reductionFactor);
    ((this.m_elCanvas.width = i),
      (this.m_elCanvas.height = a),
      (this.props.blurAmount ?? 0) > 0 &&
        (r.filter = `blur(` + this.props.blurAmount + `px)`));
    let o = () => {
      (r.drawImage(t, 0, 0, i * e[0], a * e[1]),
        n > 0 && this.m_schUpdate.Schedule(n, o));
    };
    (o(), (this.m_bSetupComplete = !0));
  }
  render() {
    return (0, L.jsx)(`canvas`, {
      id: this.props.id,
      className: this.props.className,
      ref: this.BindCanvasRef,
      width: this.props.width,
      height: this.props.height,
    });
  }
};
(_([i], $.prototype, `BindCanvasRef`, null),
  _([i], $.prototype, `updateCanvas`, null));
export {
  Te as a,
  q as c,
  he as d,
  me as f,
  H as h,
  X as i,
  Y as l,
  fe as m,
  Ve as n,
  ye as o,
  W as p,
  Z as r,
  J as s,
  $ as t,
  ve as u,
};
