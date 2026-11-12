/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  B as n,
  C as r,
  Ft as i,
  L as a,
  M as o,
  N as s,
  P as c,
  R as l,
  j as u,
  ot as d,
} from "./chunk~01cfc309bf.js";
import { Bt as f, Vt as ee, l as p, tr as m } from "./chunk~3f4314f3b4.js";
import { l as h, m as te, n as ne } from "./chunk~6eb508043a.js";
import { i as g } from "./chunk~437071091c.js";
import { B as _ } from "./chunk~05a38bc848.js";
import {
  Ft as re,
  It as v,
  Lt as ie,
  Rt as ae,
  n as y,
  t as oe,
  zt as se,
} from "./chunk~77ea210942.js";
import { n as b, o as ce } from "./chunk~0111fcd096.js";
import {
  $h as x,
  Em as le,
  Id as S,
  Rh as C,
  Tf as ue,
  Wf as w,
  Xf as de,
  Zi as fe,
  cf as T,
  d as pe,
  ef as E,
  gm as me,
  hm as D,
  kf as O,
  l as k,
  lf as he,
  lm as ge,
  o as _e,
  s as ve,
  sf as A,
  um as ye,
  zf as j,
} from "./main.js";
var M = e(i()),
  N = d(),
  P = e(t()),
  F = e(ce()),
  I = (function (e) {
    return (
      (e[(e.k_eLibrary = 1)] = `k_eLibrary`),
      (e[(e.k_eWishlist = 2)] = `k_eWishlist`),
      (e[(e.k_eFollowing = 4)] = `k_eFollowing`),
      (e[(e.k_eRecommended = 8)] = `k_eRecommended`),
      (e[(e.k_eSteam = 16)] = `k_eSteam`),
      (e[(e.k_eRequired = 32)] = `k_eRequired`),
      (e[(e.k_eFeatured = 64)] = `k_eFeatured`),
      (e[(e.k_eCurator = 128)] = `k_eCurator`),
      (e[(e.k_eReposted = 256)] = `k_eReposted`),
      e
    );
  })({}),
  be = class e {
    clanid;
    unique_id;
    event_type;
    appid;
    start_time;
    appInfo;
    clanInfo;
    score;
    GetSource() {
      return this.appInfo ? this.appInfo.source : (this.clanInfo?.source ?? 0);
    }
    static GetEntityNameForID(e, t) {
      if (e)
        return (
          S.Get().GetApp(e)?.GetName() ?? E(`#EventCalendar_MuteApp_Unknown`)
        );
      if (t) {
        let e = g.GetClanInfoByClanAccountID(t);
        if (e?.group_name) return e.group_name;
      }
      return E(`#EventCalendar_MuteApp_Unknown`);
    }
    static BHasEntityNameForID(e, t) {
      return e
        ? !!S.Get().GetApp(e)?.GetName()
        : t
          ? !!g.GetClanInfoByClanAccountID(t)?.group_name
          : !1;
    }
    GetEntityName() {
      return e.GetEntityNameForID(this.appid, this.clanid);
    }
    GetGameCapsule() {
      if (this.appInfo)
        return S.Get()
          .GetApp(this.appInfo.appid)
          ?.GetAssets()
          ?.GetMainCapsuleURL();
      if (this.clanInfo) {
        let e = g.GetClanInfoByClanAccountID(this.clanInfo.clanid);
        if (e) return e.avatar_full_url;
      }
      return E(`#EventCalendar_MuteApp_Unknown`);
    }
    GetGameIcon() {
      if (this.appInfo)
        return S.Get()
          .GetApp(this.appInfo.appid)
          ?.GetAssets()
          ?.GetCommunityIconURL();
      if (this.clanInfo) {
        let e = g.GetClanInfoByClanAccountID(this.clanInfo.clanid);
        if (e) return e.avatar_full_url;
      }
      return E(`#EventCalendar_MuteApp_Unknown`);
    }
  },
  xe = class {
    appid;
    source;
    playtime;
    last_played;
    wishlist_added;
  },
  Se = class {
    clanid;
    source;
  },
  Ce = (function (e) {
    return (
      (e.k_ERecent = `recent`),
      (e.k_ELibrary = `library`),
      (e.k_EWishlist = `wishlist`),
      (e.k_EFollowing = `following`),
      (e.k_ERecommended = `recommended`),
      (e.k_ESteam = `steam`),
      (e.k_EFeatured = `featured`),
      (e.k_ECurator = `curator`),
      e
    );
  })({}),
  L = [`library`, `wishlist`, `following`, `recommended`, `steam`, `curator`],
  R = [...L, `featured`],
  z = [`featured`],
  B = [`news`, `events`, `streaming`, `updates`, `releases`, `sales`],
  V = new Map([
    [`news`, [28]],
    [`events`, [9, 27, 22, 23, 24, 35, 25, 26]],
    [`streaming`, [11]],
    [`updates`, [12, 13, 14]],
    [`releases`, [10, 29, 16, 15, 32]],
    [`sales`, [20, 21, 31, 34]],
  ]),
  we = 1599202800;
function H(e) {
  return new Map(e.map((e) => [e, !0]));
}
var U = class {
  m_mapEventTypeGroupsAllowed = new Map();
  m_mapGameSources = new Map();
  m_bCuratorUnhideOnFollowDialogDismissed = !1;
  m_mapHiddenApps = new Map();
  m_mapHiddenClans = new Map();
  m_bInitializedForUpdatesOnly = !1;
  m_eStorageType = `session`;
  m_strStorageKey;
  constructor(e) {
    (a(this),
      n(() => {
        (e?.rgHiddenApps &&
          e.rgHiddenApps.forEach((e) => this.m_mapHiddenApps.set(e, !0)),
          e?.rgHiddenClans &&
            e.rgHiddenClans.forEach((e) => this.m_mapHiddenClans.set(e, !0)));
      }));
  }
  GetGameSources() {
    return Array.from(this.m_mapGameSources.keys());
  }
  GetStorageObject() {
    return this.m_strStorageKey
      ? this.m_eStorageType === `session`
        ? window.sessionStorage
        : window.localStorage
      : null;
  }
  GetPreferencesStorageKey() {
    return `${this.m_strStorageKey}-event-calendar-prefs`;
  }
  get enabledEventTypeSet() {
    let e = new Set();
    for (let t of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
      V.get(t)?.forEach((t) => e.add(t));
    return e;
  }
  MapClanEventTypeToGroup(e) {
    let t;
    return (
      V.forEach((n, r) => {
        n.indexOf(e) !== -1 && (t = r);
      }),
      t || `events`
    );
  }
  InitDefaultCheckboxes(e, t, n) {
    ((this.m_bInitializedForUpdatesOnly = t),
      (this.m_mapEventTypeGroupsAllowed = H(t ? [`updates`] : B)));
    let r = w() ? R : L;
    ((this.m_mapGameSources = H(e ? r : z)),
      n && this.m_mapGameSources.set(`featured`, !0));
  }
  Init(e, t, n, r, i) {
    ((this.m_eStorageType = i), (this.m_strStorageKey = r));
    let a = this.GetStorageObject(),
      o = a ? a.getItem(this.GetPreferencesStorageKey()) : null;
    if (o) {
      let e = JSON.parse(o);
      if (e.rgEventTypeGroupsAllowed && e.rgGameSources) {
        let { rgEventTypeGroupsAllowed: t, rgGameSources: n } = e;
        ((this.m_mapEventTypeGroupsAllowed = H(t)),
          (this.m_mapGameSources = H(n)),
          e.bCuratorUnhideOnFollowDismissed !== void 0 &&
            (this.m_bCuratorUnhideOnFollowDialogDismissed =
              e.bCuratorUnhideOnFollowDismissed));
        return;
      }
    }
    this.InitDefaultCheckboxes(e, t, n);
  }
  SaveFilterPreferences() {
    let e = this.GetStorageObject();
    if (!e) return;
    let t = {
      rgEventTypeGroupsAllowed: Array.from(
        this.m_mapEventTypeGroupsAllowed.keys(),
      ),
      rgGameSources: Array.from(this.m_mapGameSources.keys()),
      bCuratorUnhideOnFollowDismissed:
        this.m_bCuratorUnhideOnFollowDialogDismissed,
    };
    e.setItem(this.GetPreferencesStorageKey(), JSON.stringify(t));
  }
  RecordFilterChange() {
    let e = 0;
    (this.BIsGameSourceAllowed(`library`) && (e |= 1),
      this.BIsGameSourceAllowed(`wishlist`) && (e |= 2),
      this.BIsGameSourceAllowed(`following`) && (e |= 4),
      this.BIsGameSourceAllowed(`recommended`) && (e |= 8),
      this.BIsGameSourceAllowed(`steam`) && (e |= 16),
      this.BIsGameSourceAllowed(`featured`) && (e |= 32),
      this.BIsGameSourceAllowed(`recent`) && (e |= 64),
      this.BIsEventTypeGroupAllowed(`news`) && (e |= 1024),
      this.BIsEventTypeGroupAllowed(`events`) && (e |= 2048),
      this.BIsEventTypeGroupAllowed(`streaming`) && (e |= 4096),
      this.BIsEventTypeGroupAllowed(`updates`) && (e |= 8192),
      this.BIsEventTypeGroupAllowed(`releases`) && (e |= 16384),
      this.BIsEventTypeGroupAllowed(`sales`) && (e |= 32768),
      ie(de, e));
  }
  BCuratorUnhideOnFollowDialogDismissed() {
    return this.m_bCuratorUnhideOnFollowDialogDismissed;
  }
  SetCuratorUnhideOnFollowDialogDismissed(e) {
    ((this.m_bCuratorUnhideOnFollowDialogDismissed = e),
      this.SaveFilterPreferences());
  }
  BIsEventTypeGroupAllowed(e) {
    return this.m_mapEventTypeGroupsAllowed.has(e);
  }
  BIsGameSourceAllowed(e) {
    return (e === `following` && !ee()) || (e === `curator` && !f())
      ? !1
      : this.m_mapGameSources.has(e);
  }
  SetEventTypeGroupAllowed(e, t) {
    (t
      ? this.m_mapEventTypeGroupsAllowed.set(e, !0)
      : this.m_mapEventTypeGroupsAllowed.delete(e),
      this.SaveFilterPreferences(),
      this.RecordFilterChange());
  }
  SetGameSourceAllowed(e, t) {
    (t
      ? (this.m_mapGameSources.set(e, !0),
        e == `recent`
          ? this.m_mapGameSources.delete(`library`)
          : e == `library` &&
            (x(
              !this.m_mapGameSources.has(`recent`),
              `Setting Library although Recent already set - illusion was broken`,
            ),
            this.m_mapGameSources.delete(`recent`)))
      : (this.m_mapGameSources.delete(e),
        e == `recent`
          ? this.m_mapGameSources.set(`library`, !0)
          : e == `library` && this.m_mapGameSources.delete(`recent`)),
      this.SaveFilterPreferences(),
      this.RecordFilterChange());
  }
  BShouldDisplayEvent(e) {
    let t = e.GetSource(),
      n = !!(
        e.appInfo &&
        e.appInfo.last_played &&
        e.appInfo.last_played + 15552e3 >= b.GetTimeNowWithOverride()
      );
    return (!this.enabledEventTypeSet.has(e.event_type) &&
      !(
        this.m_bInitializedForUpdatesOnly &&
        this.BIsEventTypeGroupAllowed(`updates`) &&
        e.event_type == 28 &&
        e.start_time < we
      )) ||
      this.m_mapHiddenApps.has(e.appid) ||
      this.m_mapHiddenClans.has(e.clanid)
      ? !1
      : t & I.k_eRequired || t & I.k_eReposted
        ? !0
        : !!(
            (this.BIsGameSourceAllowed(`recent`) && n) ||
            (this.BIsGameSourceAllowed(`library`) && t & I.k_eLibrary) ||
            (this.BIsGameSourceAllowed(`wishlist`) && t & I.k_eWishlist) ||
            (this.BIsGameSourceAllowed(`following`) && t & I.k_eFollowing) ||
            (this.BIsGameSourceAllowed(`recommended`) &&
              t & I.k_eRecommended) ||
            (this.BIsGameSourceAllowed(`steam`) && t & I.k_eSteam) ||
            (this.BIsGameSourceAllowed(`featured`) && t & I.k_eFeatured) ||
            (this.BIsGameSourceAllowed(`curator`) && t & I.k_eCurator)
          );
  }
  BAreAllEventsHidden() {
    return (
      this.m_mapEventTypeGroupsAllowed.size == 0 ||
      this.m_mapGameSources.size == 0
    );
  }
  BAreAnyEventsFiltered(e) {
    let t = w() ? R : L;
    return (
      (e ? t : z).some((e) => !this.BIsGameSourceAllowed(e)) ||
      B.some((e) => !this.BIsEventTypeGroupAllowed(e))
    );
  }
  BIsClanVisible(e) {
    return !this.m_mapHiddenClans.has(e);
  }
  SetClanVisibility(e, t) {
    t
      ? this.m_mapHiddenClans.has(e) && this.m_mapHiddenClans.delete(e)
      : this.m_mapHiddenClans.has(e) || this.m_mapHiddenClans.set(e, !0);
  }
  BIsAppVisible(e) {
    return !this.m_mapHiddenApps.has(e);
  }
  SetAppVisibility(e, t) {
    t
      ? this.m_mapHiddenApps.has(e) && this.m_mapHiddenApps.delete(e)
      : this.m_mapHiddenApps.has(e) || this.m_mapHiddenApps.set(e, !0);
  }
};
(O([l], U.prototype, `m_mapEventTypeGroupsAllowed`, void 0),
  O([l], U.prototype, `m_mapGameSources`, void 0),
  O([l], U.prototype, `m_bCuratorUnhideOnFollowDialogDismissed`, void 0),
  O([l], U.prototype, `m_mapHiddenApps`, void 0),
  O([l], U.prototype, `m_mapHiddenClans`, void 0),
  O(
    [c({ keepAlive: !0, equals: s.structural })],
    U.prototype,
    `enabledEventTypeSet`,
    null,
  ),
  O([u], U.prototype, `SetEventTypeGroupAllowed`, null),
  O([u], U.prototype, `SetGameSourceAllowed`, null));
var Te = (function (e) {
    return (
      (e.Default = `default`),
      (e.Upcoming = `upcoming`),
      (e.Featured = `featured`),
      (e.Press = `press`),
      (e.Steam = `steam`),
      (e.Halloween = `halloween`),
      (e.Dev_Sales = `sales`),
      (e.Dev_All = `all`),
      (e.Dev_AssociatedPress = `associated_press`),
      e
    );
  })({}),
  W = class e {
    constructor() {
      a(this);
    }
    m_mapBlockedAppIds = new Map();
    m_mapBlockedClanIds = new Map();
    static s_globalSingletonStore;
    static Get() {
      return (
        e.s_globalSingletonStore ||
          ((e.s_globalSingletonStore = new e()),
          e.s_globalSingletonStore.Init()),
        e.s_globalSingletonStore
      );
    }
    GetMutedSourceCount() {
      return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
    }
    Init() {
      let e = ye(`mutedcomminfo`, `application_config`);
      this.ValidateStoreDefault(e) &&
        (e.appids &&
          e.appids.forEach((e) => this.m_mapBlockedAppIds.set(e, !0)),
        e.clanids &&
          e.clanids.forEach((e) => this.m_mapBlockedClanIds.set(e, !0)));
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && typeof t == `object`
        ? (Array.isArray(t.appids) && t.appids.length > 0) ||
            (Array.isArray(t.clanids) && t.clanids.length > 0)
        : !1;
    }
    BIsEventBlocked(e) {
      return e.appid
        ? this.m_mapBlockedAppIds.has(e.appid)
        : e.clanInfo
          ? this.m_mapBlockedClanIds.has(e.clanInfo.clanid)
          : !1;
    }
    BIsMutedAppID(e) {
      return this.m_mapBlockedAppIds.has(e);
    }
    BIsMutedClanID(e) {
      return this.m_mapBlockedClanIds.has(e);
    }
    async UpdateCommunicationSetting(e, t, n) {
      let r = D.STORE_BASE_URL + `account/optoutappcommunication/`,
        i = new FormData();
      if (
        (i.append(`sessionid`, ge()),
        i.append(`allowCommunication`, e ? `1` : `0`),
        t)
      ) {
        if (
          (!e && this.m_mapBlockedAppIds.has(t)) ||
          (e && !this.m_mapBlockedAppIds.has(t))
        )
          return !0;
        (e
          ? this.m_mapBlockedAppIds.delete(t)
          : this.m_mapBlockedAppIds.set(t, !0),
          i.append(`appId`, t.toString()));
      } else if (n) {
        if (
          (!e && this.m_mapBlockedClanIds.has(n)) ||
          (e && !this.m_mapBlockedClanIds.has(n))
        )
          return !0;
        (e
          ? this.m_mapBlockedClanIds.delete(n)
          : this.m_mapBlockedClanIds.set(n, !0),
          i.append(`clanId`, n.toString()));
      } else
        return (
          x(!1, `BlockEventsFromCalenderEvent: Invalid AppID and ClanID`), !1
        );
      try {
        return (await P.default.post(r, i)).data.success == 1;
      } catch (e) {
        return (
          console.error(`Blocking app id hit error ` + j(e).strErrorMsg), !1
        );
      }
    }
  };
(O([l], W.prototype, `m_mapBlockedAppIds`, void 0),
  O([l], W.prototype, `m_mapBlockedClanIds`, void 0));
var Ee = 2500;
function G(e, t, n, r) {
  return {
    strId: `section-` + t,
    strSectionLabel: t,
    rtSectionStart: n,
    rtSectionEnd: r,
    bIsFutureSection: n >= e,
    nRenderedHeight: Ee,
    nTopOffset: 0,
  };
}
var K = class {
  m_nForwardStuckCount = 0;
  m_nBackwardStuckCount = 0;
  m_mapCalendarAppsByID = new Map();
  m_mapCalendarClansByID = new Map();
  m_mapCalendarEventsByGid = new Map();
  m_rgSortedCalendarEvents = [];
  m_visibilityStore;
  m_currentView = l.box(void 0);
  m_bFinishedSearchingForward = !1;
  m_bFinishedSearchingBackward = !1;
  m_rgCalendarSections = [];
  m_rgFutureSections = [];
  m_dtInitTime;
  m_forwardRequestInFlight = null;
  m_backwardRequestInFlight = null;
  m_key;
  m_collectionMetaData = void 0;
  constructor(e, t) {
    (a(this),
      (this.m_key = e),
      (this.m_visibilityStore = new U(t)),
      m.Get().HintLoad());
  }
  GetNumEventsLoaded() {
    return this.m_mapCalendarEventsByGid.size;
  }
  BIsGlobalCalendar() {
    return (
      !this.m_key.appids &&
      !this.m_key.clanaccountids &&
      !this.m_key.collectionid &&
      !this.m_key.saleid
    );
  }
  BIsShowingFeaturedFeed() {
    return !!(
      this.GetCollectionID() === Te.Featured ||
      (this.BIsGlobalCalendar() && !me.accountid)
    );
  }
  BIsSingleSourceCalendar() {
    return !!(this.BIsSingleGroupCalendar()
      ? !this.BIsSingleAppCalendar()
      : this.BIsSingleAppCalendar());
  }
  GetKey() {
    return this.m_key;
  }
  BEventMatchCalendarSingleSource(e) {
    return (
      (this.BIsSingleAppCalendar() && this.m_key.appids?.[0] == e.appid) ||
      (this.BIsSingleGroupCalendar() &&
        this.m_key.clanaccountids?.[0] == e.clanid)
    );
  }
  BIsSingleSourceMuted() {
    if (!this.BIsSingleSourceCalendar()) return !1;
    if (this.BIsSingleAppCalendar()) {
      let e = this.GetSingleAppID();
      return e !== void 0 && W.Get().BIsMutedAppID(e);
    }
    let e = this.GetSingleGroupID();
    return e !== void 0 && W.Get().BIsMutedClanID(e);
  }
  BIsSingleGroupCalendar() {
    return !!(
      this.m_key.clanaccountids && this.m_key.clanaccountids.length == 1
    );
  }
  GetSingleGroupID() {
    return this.m_key.clanaccountids?.[0];
  }
  BIsSingleAppCalendar() {
    return !!(this.m_key.appids && this.m_key.appids.length == 1);
  }
  GetSingleAppID() {
    return this.m_key.appids?.[0];
  }
  BIsCollectionCalendar() {
    return !!this.m_key.collectionid;
  }
  GetCollectionID() {
    return this.m_key.collectionid;
  }
  BIsSaleCalendar() {
    return !!this.m_key.saleid;
  }
  GetSaleID() {
    return this.m_key.saleid;
  }
  BIsCalendarEndTimeSet() {
    return !!this.m_key.rtCalendarEnd;
  }
  GetCalendarEndTime() {
    return this.m_key.rtCalendarEnd;
  }
  SetCollectionMetaData(e) {
    this.m_collectionMetaData = e;
  }
  GetCollectionMetaData() {
    return this.m_collectionMetaData;
  }
  BHasCollectionMetaData() {
    return !!this.m_collectionMetaData;
  }
  ValidateCollectionMetadata(e) {
    let t = e;
    return !!(
      t &&
      typeof t == `object` &&
      t.clanid &&
      typeof t.clanid == `number` &&
      t.clan_event_gid &&
      typeof t.clan_event_gid == `string`
    );
  }
  SetFilteredView(e, t) {
    let n = this.m_currentView.get();
    n && n.dispose();
    let r = () => this.m_rgSortedCalendarEvents,
      i = this.BIsSingleSourceMuted(),
      a = new q(r, this.LoadAdditionalEvents, this.BHitEventHorizon, e, !!t, i);
    this.m_currentView.set(a);
  }
  BIsFilteredViewEmpty() {
    return !!this.m_currentView.get()?.BIsViewEmpty();
  }
  GetCalendarItemsInTimeRange(e, t) {
    let n = this.m_currentView.get();
    return n
      ? n.GetCalendarItemsInTimeRange(e, t)
      : (console.error(`calendar view not yet initialized`),
        { rgCalendarItems: [], bIsComplete: !1 });
  }
  GetActiveEventsAt(e) {
    let t = this.m_currentView.get();
    return t
      ? t.GetActiveEventsAt(e)
      : (console.error(`calendar view not yet initialized`), []);
  }
  GetCurrentlyLoadedEventCount(e, t) {
    return (
      this.m_currentView.get()?.GetCurrentlyLoadedEventCount(e, t) ?? {
        nCount: 0,
        bIsComplete: !1,
      }
    );
  }
  GetCurrentlyLoadedItemsForStats() {
    return this.m_currentView.get()?.GetCurrentlyLoadedEvents() || [];
  }
  GetCalendarSections(e) {
    return e ? this.m_rgFutureSections : this.m_rgCalendarSections;
  }
  GetStoreInitializationTimestamp() {
    return (
      (this.m_dtInitTime ||= b.GetTimeNowWithOverrideAsDate()),
      this.m_dtInitTime
    );
  }
  InitCalendarSections() {
    let e = this.GetStoreInitializationTimestamp(),
      t = [],
      n = e.getTime() / 1e3;
    t.push(G(n, E(`#EventCalendar_FutureEventsHeader`), n));
    let r = new Date(e);
    r.setHours(0, 0, 0, 1);
    let i = r.getTime() / 1e3;
    (t.push(G(n, E(`#Time_Today`), i, n)), r.setDate(r.getDate() - 1));
    let a = i;
    ((i = r.getTime() / 1e3), t.push(G(n, E(`#Time_Yesterday`), i, a)));
    let o =
        this.m_rgSortedCalendarEvents[this.m_rgSortedCalendarEvents.length - 1],
      s = o ? o.start_time : n,
      c = s > i;
    for (let e = 0; e < 5 && !c; e++)
      (r.setDate(r.getDate() - 1),
        (a = i),
        (i = r.getTime() / 1e3),
        t.push(G(n, T(r), i, a)),
        (c = s > i));
    let l = new Date(r),
      u = i;
    for (; l.getMonth() == e.getMonth() && l.getDate() != 1 && !c;) {
      l.setDate(l.getDate() - 7);
      let e = l.getTime() / 1e3;
      (t.push(G(n, A(u - 1), e, u)), (c = s > e), (u = e));
    }
    let d = new Date(e);
    (d.setHours(0, 0, 0, 1), d.setDate(1));
    let f = u;
    for (let r = 1; !c; r++) {
      let i = new Date(d);
      i.setMonth(e.getMonth() - r, 1);
      let a = i.getTime() / 1e3;
      (t.push(G(n, A(a), a, f)), (c = s > a), (f = a));
    }
    this.m_rgCalendarSections.length > t.length
      ? this.m_rgCalendarSections.splice(
          t.length,
          this.m_rgCalendarSections.length,
        )
      : t
          .splice(this.m_rgCalendarSections.length, t.length)
          .forEach((e) => this.m_rgCalendarSections.push(e));
  }
  InitFutureCalendarSections() {
    let e = this.GetStoreInitializationTimestamp(),
      t = [],
      n;
    this.m_key.rtCalendarEnd && (n = this.m_key.rtCalendarEnd);
    let r = this.m_rgSortedCalendarEvents[0];
    (r && (n = r.start_time), (n ||= e.getTime() / 1e3));
    let i = e.getTime() / 1e3,
      a = new Date(e);
    a.setHours(24, 0, 0, 0);
    let o = a.getTime() / 1e3;
    t.push(
      G(i, E(this.m_key.bSectionByDay ? `#Time_UpNext` : `#Time_Today`), i, o),
    );
    let s = n <= o,
      c = o;
    (a.setDate(a.getDate() + 1),
      (o = a.getTime() / 1e3),
      s || t.push(G(i, E(`#Time_Tomorrow`), c, o)),
      (s = n <= o));
    let l = 6 - (0, F.default)(e).weekday();
    for (let e = 2; e <= l && !s; e++) {
      c = o;
      let e = T(a);
      (a.setDate(a.getDate() + 1),
        (o = a.getTime() / 1e3),
        t.push(G(i, e, c, o)),
        (s = n <= o));
    }
    if (this.m_key.bSectionByDay)
      for (; !s;) {
        c = o;
        let e = he(a);
        (a.setDate(a.getDate() + 1),
          (o = a.getTime() / 1e3),
          t.push(G(i, e, c, o)),
          (s = n <= o));
      }
    else {
      let r = new Date(a),
        c = o,
        l = (0, F.default)(e).daysInMonth();
      if (r.getMonth() == e.getMonth() && r.getDate() != l && !s) {
        r.setDate(r.getDate() + 7);
        let e = r.getTime() / 1e3;
        (t.push(G(i, E(`#EventCalendar_NextWeek`), c, e)),
          (s = n <= e),
          (c = e));
      }
      let u = new Date(e);
      (u.setMonth(u.getMonth() + 1), u.setDate(1), u.setHours(0, 0, 0, 0));
      let d;
      if (r < u && !s) {
        let e = u.getTime() / 1e3;
        (t.push(G(i, E(`#EventCalendar_LaterThisMonth`), c, e)),
          (s = n <= e),
          (d = e));
      } else d = c;
      for (let r = 2; !s; r++) {
        let a = new Date(u);
        a.setMonth(e.getMonth() + r);
        let o = a.getTime() / 1e3;
        (t.push(G(i, A(d), d, o)), (s = n <= o), (d = o));
      }
    }
    this.m_rgFutureSections.length > t.length
      ? this.m_rgFutureSections.splice(t.length, this.m_rgFutureSections.length)
      : t
          .splice(this.m_rgFutureSections.length, t.length)
          .forEach((e) => this.m_rgFutureSections.push(e));
  }
  async RegisterCalendarEventsAndModels(e) {
    (await m.Get().HintLoad(),
      n(() => {
        (this.RegisterCalendarApps(e.apps ?? []),
          this.RegisterCalendarClans(e.clans ?? []),
          this.RegisterCalendarEvents(e.documents ?? []),
          p.RegisterClanEvents(e.events ?? []),
          this.RegisterReadEvents(e.events_read ?? []),
          this.RegisterEventVotes(e.event_votes ?? []),
          e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
          e.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
          this.InitCalendarSections(),
          this.InitFutureCalendarSections(),
          this.SetCollectionMetaData(
            this.ValidateCollectionMetadata(e.metadatainfo)
              ? e.metadatainfo
              : void 0,
          ));
      }));
  }
  RegisterCalendarApps(e) {
    if (e)
      for (let t of e) {
        if (this.m_mapCalendarAppsByID.has(t.appid)) continue;
        let e = new xe();
        ((e.appid = t.appid),
          (e.source = t.source),
          (e.playtime = t.playtime),
          (e.last_played = t.last_played),
          (e.wishlist_added = t.wishlist_added),
          this.m_mapCalendarAppsByID.set(t.appid, e),
          t.hidden && this.m_visibilityStore.SetAppVisibility(t.appid, !1));
      }
  }
  RegisterCalendarClans(e) {
    if (e) {
      for (let t of e)
        if (!this.m_mapCalendarClansByID.has(t.clanid)) {
          let e = new Se();
          ((e.clanid = t.clanid),
            (e.source = t.source),
            this.m_mapCalendarClansByID.set(t.clanid, e),
            t.hidden && this.m_visibilityStore.SetClanVisibility(t.clanid, !1));
        }
    }
  }
  RegisterReadEvents(e) {
    e && pe(e);
  }
  RegisterEventVotes(e) {
    e &&
      re(
        e.map((e) => ({
          gidAnnouncement: e.id,
          vote: e.vote === void 0 ? null : e.vote ? `up` : `down`,
        })),
      );
  }
  RegisterCalendarEvents(e) {
    if (e) {
      let t = !1;
      for (let n of e) this.BInternalInsertCalendarEventItem(n) && (t = !0);
      t && this.RebuildSortedCalendarEventList();
    }
  }
  BHitEventHorizon(e) {
    return e == `forward`
      ? this.m_bFinishedSearchingForward
      : this.m_bFinishedSearchingBackward;
  }
  GetTimeEdgeForDirection(e, t = void 0) {
    return e === `forward`
      ? this.m_rgSortedCalendarEvents.length > 0
        ? this.m_rgSortedCalendarEvents[0].start_time
        : t
      : this.m_rgSortedCalendarEvents.length > 0
        ? this.m_rgSortedCalendarEvents[
            this.m_rgSortedCalendarEvents.length - 1
          ].start_time
        : t;
  }
  UpdateStuckCounters(e, t) {
    let n =
        e === `forward`
          ? this.m_bFinishedSearchingForward
          : this.m_bFinishedSearchingBackward,
      r = this.GetTimeEdgeForDirection(e, void 0);
    return !n && r === t
      ? (e == `forward`
          ? this.m_nForwardStuckCount++
          : this.m_nBackwardStuckCount++,
        !0)
      : (e == `forward`
          ? (this.m_nForwardStuckCount = 0)
          : (this.m_nBackwardStuckCount = 0),
        !1);
  }
  GetRequestInFlight(e) {
    return e === `forward`
      ? this.m_forwardRequestInFlight
      : this.m_backwardRequestInFlight;
  }
  SetRequestInFlight(e, t) {
    (x(
      !t || !this.GetRequestInFlight(e),
      `Already have a request in flight for`,
      e,
    ),
      e === `forward`
        ? (this.m_forwardRequestInFlight = t)
        : (this.m_backwardRequestInFlight = t));
  }
  async LoadAdditionalEvents(e, t) {
    if (this.BHitEventHorizon(e)) return 1;
    let n = this.GetRequestInFlight(e);
    if (n) return n;
    let r = D.STORE_BASE_URL + `events/ajaxgetusereventcalendarrange/`,
      i =
        e === `forward`
          ? this.m_nForwardStuckCount
          : this.m_nBackwardStuckCount,
      a = i < 3 ? i : 0,
      o = +(i >= 3),
      s = 250 + 50 * a,
      c = b.GetTimeNowWithOverride(),
      l = this.GetTimeEdgeForDirection(e, c) ?? c,
      u = {
        minTime: 0,
        maxTime: 0,
        ascending: !0,
        maxResults: s,
        populateEvents: 15,
        appTypes: this.m_visibilityStore.GetGameSources().join(`,`),
        eventTypes: Array.from(this.m_visibilityStore.enabledEventTypeSet).join(
          `,`,
        ),
        appIdFilter: this.m_key.appids?.length
          ? this.m_key.appids.sort().join(`,`)
          : void 0,
        clanIdFilter: this.m_key.clanaccountids?.length
          ? this.m_key.clanaccountids.sort().join(`,`)
          : void 0,
        collectionID: this.m_key.collectionid,
        saleID: this.m_key.saleid,
        hubtype: this.m_key.hubtype,
        category_or_language: this.m_key.category_or_language,
        tag_name: this.m_key.tag_name,
        tags: this.m_key.rgTags
          ? this.m_key.rgTags.slice().sort().join(`,`)
          : void 0,
      };
    return (
      e === `forward`
        ? ((u.minTime = Math.floor(l + o)), (u.ascending = !0))
        : ((u.maxTime = Math.floor(l - o)), (u.ascending = !1)),
      (n = P.default
        .get(r, {
          params: u,
          cancelToken: t ? t.token : void 0,
          withCredentials: !0,
        })
        .then(async (n) => {
          if ((this.SetRequestInFlight(e, null), n.data.success == 1)) {
            if (
              (await this.RegisterCalendarEventsAndModels(n.data),
              this.UpdateStuckCounters(e, l))
            )
              return this.LoadAdditionalEvents(e, t);
          } else
            console.error(
              `LoadAdditionalEvents was not successful: Msg` + n.data.msg,
            );
          return n.data.success;
        })
        .catch((t) => {
          this.SetRequestInFlight(e, null);
          let n = j(t);
          return (
            console.error(`LoadAdditionalEvents hit error ` + n.strErrorMsg, n),
            e == `forward`
              ? (this.m_bFinishedSearchingForward = !0)
              : (this.m_bFinishedSearchingBackward = !0),
            2
          );
        })),
      this.SetRequestInFlight(e, n),
      n
    );
  }
  BInternalInsertCalendarEventItem(e) {
    if (!e.unique_id)
      return (
        x(
          !1,
          `Attmpted to register a calendar event item with an invalid unique id!`,
        ),
        !1
      );
    if (this.m_mapCalendarEventsByGid.has(e.unique_id)) return !1;
    let t = this.m_mapCalendarAppsByID.get(e.appid),
      n = this.m_mapCalendarClansByID.get(e.clanid);
    if (!t && !n) return (console.log(`No AppInfo or ClanInfo For: `, e), !1);
    let r = new be();
    return (
      (r.clanid = e.clanid),
      (r.unique_id = e.unique_id),
      (r.event_type = e.event_type),
      (r.appid = e.appid),
      (r.start_time = e.start_time),
      (r.score = e.score),
      (r.appInfo = t),
      (r.clanInfo = n),
      this.m_rgSortedCalendarEvents.push(r),
      this.m_mapCalendarEventsByGid.set(r.unique_id, r),
      !0
    );
  }
  GetCalendarAppInfoForAppID(e) {
    return this.m_mapCalendarAppsByID.get(e);
  }
  RebuildSortedCalendarEventList() {
    let e = this.m_rgSortedCalendarEvents.slice();
    this.m_rgSortedCalendarEvents = e.sort(
      (e, t) => t.start_time - e.start_time,
    );
  }
  async UpdateEventBlockFromCalendarEvent(e, t) {
    let n = e.appid || void 0,
      r = e.clanInfo ? e.clanInfo.clanid : void 0;
    n == null && r == null
      ? x(
          !1,
          `Both clan id and account id are missing, cannot change communication status`,
        )
      : (await W.Get().UpdateCommunicationSetting(t, n, r), ae(v.k_eMuted));
  }
  GetAllClans() {
    return Array.from(this.m_mapCalendarClansByID.keys());
  }
  GetAllApps() {
    return Array.from(this.m_mapCalendarAppsByID.keys());
  }
};
(O([l], K.prototype, `m_mapCalendarAppsByID`, void 0),
  O([l], K.prototype, `m_mapCalendarClansByID`, void 0),
  O([l], K.prototype, `m_mapCalendarEventsByGid`, void 0),
  O([l], K.prototype, `m_rgSortedCalendarEvents`, void 0),
  O([l], K.prototype, `m_bFinishedSearchingForward`, void 0),
  O([l], K.prototype, `m_bFinishedSearchingBackward`, void 0),
  O([l], K.prototype, `m_rgCalendarSections`, void 0),
  O([l], K.prototype, `m_rgFutureSections`, void 0),
  O([l], K.prototype, `m_collectionMetaData`, void 0),
  O([u], K.prototype, `InitCalendarSections`, null),
  O([u], K.prototype, `InitFutureCalendarSections`, null),
  O([u], K.prototype, `RegisterCalendarEventsAndModels`, null),
  O([u], K.prototype, `RegisterCalendarApps`, null),
  O([u], K.prototype, `RegisterCalendarClans`, null),
  O([u], K.prototype, `RegisterCalendarEvents`, null),
  O([C], K.prototype, `BHitEventHorizon`, null),
  O([u.bound], K.prototype, `LoadAdditionalEvents`, null),
  O([u], K.prototype, `UpdateEventBlockFromCalendarEvent`, null));
var q = class {
  m_rgLoadedEventsBox = l.box([]);
  m_lastLoadLatch = null;
  m_fnGetUnfilteredEvents;
  m_fnLoadAdditionalEvents;
  m_fnBHitEventHorizon;
  m_fnBIsEventInView;
  m_bSkipStorePreferenceCheck;
  m_bAllowMutedAndIgnoredSources;
  m_rgAutorunDisposer;
  constructor(e, t, n, r, i, s) {
    (a(this),
      (this.m_fnGetUnfilteredEvents = e),
      (this.m_fnLoadAdditionalEvents = t),
      (this.m_fnBHitEventHorizon = n),
      (this.m_fnBIsEventInView = r),
      (this.m_bSkipStorePreferenceCheck = i),
      (this.m_bAllowMutedAndIgnoredSources = s),
      (this.m_rgAutorunDisposer = o(async () => {
        let e = this.viewFilteredEvents.slice();
        if (!this.m_bSkipStorePreferenceCheck) {
          let t = Array.from(
            new Set(e.map((e) => e.appid).filter(Boolean)),
          ).sort();
          if (
            ((this.m_lastLoadLatch = e),
            await S.Get().QueueMultipleAppRequests(t, {
              ...te,
              include_assets: !0,
            }),
            this.m_lastLoadLatch != e)
          )
            return;
          this.m_lastLoadLatch = null;
        }
        this.m_rgLoadedEventsBox.set(e);
      })));
  }
  dispose() {
    this.m_rgAutorunDisposer();
  }
  get viewFilteredEvents() {
    return this.m_fnGetUnfilteredEvents().filter((e) =>
      this.m_fnBIsEventInView(e),
    );
  }
  get filteredAndCheckedEvents() {
    return this.m_rgLoadedEventsBox.get().filter((e) => {
      if (!e.appid) {
        if (
          !this.m_bAllowMutedAndIgnoredSources &&
          (W.Get().BIsMutedClanID(e.clanid) ||
            m
              .Get()
              .BIsIgnoringCurator(le.InitFromClanID(e.clanid, D.EUNIVERSE)))
        )
          return !1;
      } else if (
        (!this.m_bAllowMutedAndIgnoredSources &&
          (W.Get().BIsMutedAppID(e.appid) ||
            m.Get().BIsGameIgnored(e.appid))) ||
        (!this.m_bSkipStorePreferenceCheck && h(S.Get().GetApp(e.appid)))
      )
        return !1;
      return !0;
    });
  }
  BIsCompleteThroughTime(e, t) {
    if (this.m_fnBHitEventHorizon(e)) return !0;
    let n = this.m_fnGetUnfilteredEvents();
    return e === `forward`
      ? !!t && n.length > 0 && n[0].start_time > t
      : t !== void 0 && n.length > 0 && n[n.length - 1].start_time < t;
  }
  async EnsureRangeIsLoaded(e, t) {
    for (let e = 0; e < 100 && !this.BIsCompleteThroughTime(`forward`, t); e++)
      await this.m_fnLoadAdditionalEvents(`forward`);
    for (let t = 0; t < 100 && !this.BIsCompleteThroughTime(`backward`, e); t++)
      await this.m_fnLoadAdditionalEvents(`backward`);
  }
  GetCalendarItemsInTimeRange(e, t) {
    this.EnsureRangeIsLoaded(e, t);
    let n = this.filteredAndCheckedEvents.filter(
        (n) => n.start_time >= e && (!t || n.start_time < t),
      ),
      r = this.BIsCompleteThroughTime(`forward`, t),
      i = this.BIsCompleteThroughTime(`backward`, e);
    return { rgCalendarItems: n, bIsComplete: r && i };
  }
  GetCurrentlyLoadedEvents() {
    return this.filteredAndCheckedEvents;
  }
  GetCurrentlyLoadedEventCount(e, t) {
    let n = 0;
    this.filteredAndCheckedEvents.forEach((r) => {
      r.start_time >= e && (!t || r.start_time < t) && n++;
    });
    let r = this.BIsCompleteThroughTime(`forward`, t),
      i = this.BIsCompleteThroughTime(`backward`, e);
    return { nCount: n, bIsComplete: r && i };
  }
  BIsViewEmpty() {
    return this.filteredAndCheckedEvents.length > 0;
  }
  GetActiveEventsAt(e) {
    return this.filteredAndCheckedEvents
      .map((e) => p.GetClanEventModel(e.unique_id))
      .filter((t) => {
        if (!t || t.startTime === void 0) return !1;
        let n = t.endTime || t.startTime + 3600;
        return e >= t.startTime && e < n;
      });
  }
};
(O([c.struct], q.prototype, `viewFilteredEvents`, null),
  O([c.struct], q.prototype, `filteredAndCheckedEvents`, null));
var J = l.box(null),
  Y = new Map();
window.g_EventCalendarMap = Y;
function X(e, t) {
  let n = ``;
  return (
    e.appids &&
      e.appids.length > 0 &&
      (n += `appids:` + e.appids.sort().join(`,`)),
    e.clanaccountids &&
      e.clanaccountids.length > 0 &&
      (n += `clanids:` + e.clanaccountids.sort().join(`,`)),
    e.collectionid && (n += `collection:` + e.collectionid),
    e.saleid && (n += `sale:` + e.saleid),
    e.bSectionByDay && (n += `_sectionbyday`),
    e.rtCalendarEnd && (n += `_end:` + e.rtCalendarEnd),
    e.rgTags &&
      e.rgTags.length > 0 &&
      (n += `_tags:` + e.rgTags.slice().sort().join(`,`)),
    e.hubtype &&
      (n +=
        `_hubtype:` +
        e.hubtype +
        `_` +
        e.category_or_language +
        `_` +
        e.tag_name),
    J.get() !== n && (J.set(n), Y.has(n) || Y.set(n, new K(e, t))),
    n
  );
}
function Z() {
  let e = J.get();
  return ((e ??= X({})), Y.get(e));
}
function De() {
  return J.get() !== null;
}
var Oe = `rde3mdS-0gs-`;
function ke(e) {
  let { event: t, closeModal: n } = e,
    r = ve();
  return (0, N.jsx)(oe, {
    initialEvent: t,
    bShowOnlyInitialEvent: !0,
    partnerEventStore: p,
    emoticonStore: r,
    showAppHeader: !0,
    closeModal: n,
  });
}
function Ae(e, t) {
  fe((0, N.jsx)(ke, { event: e }), t);
}
var Q = class extends M.Component {
  m_refFocus = M.createRef();
  componentDidMount() {
    this.props.fnClose &&
      (document.addEventListener(`keydown`, this.escFunction, !1),
      this.m_refFocus.current && this.m_refFocus.current.focus());
  }
  componentWillUnmount() {
    this.props.fnClose &&
      document.removeEventListener(`keydown`, this.escFunction, !1);
  }
  escFunction(e) {
    let { fnClose: t } = this.props;
    e.keyCode === 27 && t && t();
  }
  OnBackgroundClick(e) {
    e.currentTarget == e.target && this.props.fnClose();
  }
  render() {
    let { event: e, langOverride: t, isPreview: n } = this.props;
    return (0, N.jsx)(`div`, {
      ref: this.m_refFocus,
      className: Oe,
      onClick: this.OnBackgroundClick,
      children: (0, N.jsx)(_e, {
        children: (r) =>
          (0, N.jsx)(
            y,
            {
              event: e,
              emoticonStore: r,
              partnerEventStore: ne.Get(),
              langOverride: t,
              isPreview: n,
              bDisableBroadcastPlayer: !1,
            },
            e.GID,
          ),
      }),
    });
  }
};
(O([C], Q.prototype, `escFunction`, null),
  O([C], Q.prototype, `OnBackgroundClick`, null),
  (Q = O([r], Q)));
var je = class {
    m_bHasBeenTracked = !1;
    m_fnSubmit = null;
  },
  $ = new (class {
    ShouldTrack(e) {
      return !e.bOldAnnouncement && this.BShouldTrackGID(e.GID);
    }
    BShouldTrackGID(e) {
      let t = this.m_mapEvents.get(e);
      return !t || !t.m_bHasBeenTracked;
    }
    StartTracking(e, t, n) {
      e.bOldAnnouncement ||
        this.StartTrackingGID(e.GID, this.ReportImpression.bind(this, e, t, n));
    }
    StartTrackingGID(e, t) {
      let n = this.m_mapEvents.get(e);
      (n || ((n = new je()), this.m_mapEvents.set(e, n)),
        n.m_bHasBeenTracked ||
          n.m_fnSubmit ||
          ((n.m_fnSubmit = new ue()),
          n.m_fnSubmit.Schedule(this.m_nImpressionDelayMS, () => {
            (t(), this.MarkTracked(e));
          })));
    }
    StopTracking(e) {
      this.StopTrackingGID(e.GID);
    }
    StopTrackingGID(e) {
      let t = this.m_mapEvents.get(e);
      t && t.m_fnSubmit && (t.m_fnSubmit.Cancel(), (t.m_fnSubmit = null));
    }
    ReportImpression(e, t, n) {
      if ((n.RecordEventShown(e, 8), t)) {
        let n = Z();
        t.RecordEventViewed(
          e.GID,
          n.GetCurrentlyLoadedItemsForStats(),
          n.GetStoreInitializationTimestamp().getTime() / 1e3,
        );
      }
    }
    MarkTracked(e) {
      let t = this.m_mapEvents.get(e);
      t &&
        ((t.m_bHasBeenTracked = !0),
        t.m_fnSubmit?.Cancel(),
        (t.m_fnSubmit = null));
    }
    m_nImpressionDelayMS = 500;
    m_mapEvents = new Map();
  })(),
  Me = (e) => {
    let { event: t } = e,
      n = k(),
      r = se();
    return $.ShouldTrack(t)
      ? (0, N.jsx)(_, {
          onEnter: () =>
            $.StartTracking(t, e.recordNewsHubStats ? r : void 0, n),
          onLeave: () => $.StopTracking(t),
        })
      : null;
  };
function Ne(e) {
  let { clanAccountID: t, strEventGID: n } = e,
    r = k();
  return !n || !$.BShouldTrackGID(n)
    ? null
    : (0, N.jsx)(_, {
        onEnter: () => $.StartTrackingGID(n, () => r.MarkEventShown(n, t, 8)),
        onLeave: () => $.StopTrackingGID(n),
      });
}
export {
  Z as a,
  Ce as c,
  De as i,
  I as l,
  Ne as n,
  X as o,
  Ae as r,
  W as s,
  Me as t,
};
