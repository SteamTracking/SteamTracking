import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _ } from "./vodquery.js";
import { _, _, _ } from "./eventinfinitescrollmodal.js";
import { _ } from "./clanstore.js";
import { _ } from "./emoticonbutton.js";
import { _, _, _, _, _, _, _ } from "./apppartnereventspage.js";
import { _, _ } from "./eventdevfeaturestore.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./main.js";
var _ = _(_()),
  _ = _(),
  _ = _(_()),
  _ = _(_()),
  _ = (function (_) {
    return (
      (_[(_.k_eLibrary = 1)] = `k_eLibrary`),
      (_[(_.k_eWishlist = 2)] = `k_eWishlist`),
      (_[(_.k_eFollowing = 4)] = `k_eFollowing`),
      (_[(_.k_eRecommended = 8)] = `k_eRecommended`),
      (_[(_.k_eSteam = 16)] = `k_eSteam`),
      (_[(_.k_eRequired = 32)] = `k_eRequired`),
      (_[(_.k_eFeatured = 64)] = `k_eFeatured`),
      (_[(_.k_eCurator = 128)] = `k_eCurator`),
      (_[(_.k_eReposted = 256)] = `k_eReposted`),
      _
    );
  })({}),
  _ = class _ {
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
    static GetEntityNameForID(_, _) {
      if (_)
        return (
          _.Get().GetApp(_)?.GetName() ?? _(`#EventCalendar_MuteApp_Unknown`)
        );
      if (_) {
        let _ = _.GetClanInfoByClanAccountID(_);
        if (_?.group_name) return _.group_name;
      }
      return _(`#EventCalendar_MuteApp_Unknown`);
    }
    static BHasEntityNameForID(_, _) {
      return _
        ? !!_.Get().GetApp(_)?.GetName()
        : _
          ? !!_.GetClanInfoByClanAccountID(_)?.group_name
          : !1;
    }
    GetEntityName() {
      return _.GetEntityNameForID(this.appid, this.clanid);
    }
    GetGameCapsule() {
      if (this.appInfo)
        return _.Get()
          .GetApp(this.appInfo.appid)
          ?.GetAssets()
          ?.GetMainCapsuleURL();
      if (this.clanInfo) {
        let _ = _.GetClanInfoByClanAccountID(this.clanInfo.clanid);
        if (_) return _.avatar_full_url;
      }
      return _(`#EventCalendar_MuteApp_Unknown`);
    }
    GetGameIcon() {
      if (this.appInfo)
        return _.Get()
          .GetApp(this.appInfo.appid)
          ?.GetAssets()
          ?.GetCommunityIconURL();
      if (this.clanInfo) {
        let _ = _.GetClanInfoByClanAccountID(this.clanInfo.clanid);
        if (_) return _.avatar_full_url;
      }
      return _(`#EventCalendar_MuteApp_Unknown`);
    }
  },
  _ = class {
    appid;
    source;
    playtime;
    last_played;
    wishlist_added;
  },
  _ = class {
    clanid;
    source;
  },
  _ = (function (_) {
    return (
      (_.k_ERecent = `recent`),
      (_.k_ELibrary = `library`),
      (_.k_EWishlist = `wishlist`),
      (_.k_EFollowing = `following`),
      (_.k_ERecommended = `recommended`),
      (_.k_ESteam = `steam`),
      (_.k_EFeatured = `featured`),
      (_.k_ECurator = `curator`),
      _
    );
  })({}),
  _ = [`library`, `wishlist`, `following`, `recommended`, `steam`, `curator`],
  _ = [..._, `featured`],
  _ = [`featured`],
  _ = [`news`, `events`, `streaming`, `updates`, `releases`, `sales`],
  _ = new Map([
    [`news`, [28]],
    [`events`, [9, 27, 22, 23, 24, 35, 25, 26]],
    [`streaming`, [11]],
    [`updates`, [12, 13, 14]],
    [`releases`, [10, 29, 16, 15, 32]],
    [`sales`, [20, 21, 31, 34]],
  ]),
  _ = 1599202800;
function _(_) {
  return new Map(_.map((_) => [_, !0]));
}
var _ = class {
  m_mapEventTypeGroupsAllowed = new Map();
  m_mapGameSources = new Map();
  m_bCuratorUnhideOnFollowDialogDismissed = !1;
  m_mapHiddenApps = new Map();
  m_mapHiddenClans = new Map();
  m_bInitializedForUpdatesOnly = !1;
  m_eStorageType = `session`;
  m_strStorageKey;
  constructor(_) {
    (_(this),
      _(() => {
        (_?.rgHiddenApps &&
          _.rgHiddenApps.forEach((_) => this.m_mapHiddenApps.set(_, !0)),
          _?.rgHiddenClans &&
            _.rgHiddenClans.forEach((_) => this.m_mapHiddenClans.set(_, !0)));
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
    let _ = new Set();
    for (let _ of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
      _.get(_)?.forEach((_) => _.add(_));
    return _;
  }
  MapClanEventTypeToGroup(_) {
    let _;
    return (
      _.forEach((_, _) => {
        _.indexOf(_) !== -1 && (_ = _);
      }),
      _ || `events`
    );
  }
  InitDefaultCheckboxes(_, _, _) {
    ((this.m_bInitializedForUpdatesOnly = _),
      (this.m_mapEventTypeGroupsAllowed = _(_ ? [`updates`] : _)));
    let _ = _() ? _ : _;
    ((this.m_mapGameSources = _(_ ? _ : _)),
      _ && this.m_mapGameSources.set(`featured`, !0));
  }
  Init(_, _, _, _, _) {
    ((this.m_eStorageType = _), (this.m_strStorageKey = _));
    let _ = this.GetStorageObject(),
      _ = _ ? _.getItem(this.GetPreferencesStorageKey()) : null;
    if (_) {
      let _ = JSON.parse(_);
      if (_.rgEventTypeGroupsAllowed && _.rgGameSources) {
        let { rgEventTypeGroupsAllowed: _, rgGameSources: _ } = _;
        ((this.m_mapEventTypeGroupsAllowed = _(_)),
          (this.m_mapGameSources = _(_)),
          _.bCuratorUnhideOnFollowDismissed !== void 0 &&
            (this.m_bCuratorUnhideOnFollowDialogDismissed =
              _.bCuratorUnhideOnFollowDismissed));
        return;
      }
    }
    this.InitDefaultCheckboxes(_, _, _);
  }
  SaveFilterPreferences() {
    let _ = this.GetStorageObject();
    if (!_) return;
    let _ = {
      rgEventTypeGroupsAllowed: Array.from(
        this.m_mapEventTypeGroupsAllowed.keys(),
      ),
      rgGameSources: Array.from(this.m_mapGameSources.keys()),
      bCuratorUnhideOnFollowDismissed:
        this.m_bCuratorUnhideOnFollowDialogDismissed,
    };
    _.setItem(this.GetPreferencesStorageKey(), JSON.stringify(_));
  }
  RecordFilterChange() {
    let _ = 0;
    (this.BIsGameSourceAllowed(`library`) && (_ |= 1),
      this.BIsGameSourceAllowed(`wishlist`) && (_ |= 2),
      this.BIsGameSourceAllowed(`following`) && (_ |= 4),
      this.BIsGameSourceAllowed(`recommended`) && (_ |= 8),
      this.BIsGameSourceAllowed(`steam`) && (_ |= 16),
      this.BIsGameSourceAllowed(`featured`) && (_ |= 32),
      this.BIsGameSourceAllowed(`recent`) && (_ |= 64),
      this.BIsEventTypeGroupAllowed(`news`) && (_ |= 1024),
      this.BIsEventTypeGroupAllowed(`events`) && (_ |= 2048),
      this.BIsEventTypeGroupAllowed(`streaming`) && (_ |= 4096),
      this.BIsEventTypeGroupAllowed(`updates`) && (_ |= 8192),
      this.BIsEventTypeGroupAllowed(`releases`) && (_ |= 16384),
      this.BIsEventTypeGroupAllowed(`sales`) && (_ |= 32768),
      _(_, _));
  }
  BCuratorUnhideOnFollowDialogDismissed() {
    return this.m_bCuratorUnhideOnFollowDialogDismissed;
  }
  SetCuratorUnhideOnFollowDialogDismissed(_) {
    ((this.m_bCuratorUnhideOnFollowDialogDismissed = _),
      this.SaveFilterPreferences());
  }
  BIsEventTypeGroupAllowed(_) {
    return this.m_mapEventTypeGroupsAllowed.has(_);
  }
  BIsGameSourceAllowed(_) {
    return (_ === `following` && !_()) || (_ === `curator` && !_())
      ? !1
      : this.m_mapGameSources.has(_);
  }
  SetEventTypeGroupAllowed(_, _) {
    (_
      ? this.m_mapEventTypeGroupsAllowed.set(_, !0)
      : this.m_mapEventTypeGroupsAllowed.delete(_),
      this.SaveFilterPreferences(),
      this.RecordFilterChange());
  }
  SetGameSourceAllowed(_, _) {
    (_
      ? (this.m_mapGameSources.set(_, !0),
        _ == `recent`
          ? this.m_mapGameSources.delete(`library`)
          : _ == `library` &&
            (_(
              !this.m_mapGameSources.has(`recent`),
              `Setting Library although Recent already set - illusion was broken`,
            ),
            this.m_mapGameSources.delete(`recent`)))
      : (this.m_mapGameSources.delete(_),
        _ == `recent`
          ? this.m_mapGameSources.set(`library`, !0)
          : _ == `library` && this.m_mapGameSources.delete(`recent`)),
      this.SaveFilterPreferences(),
      this.RecordFilterChange());
  }
  BShouldDisplayEvent(_) {
    let _ = _.GetSource(),
      _ = !!(
        _.appInfo &&
        _.appInfo.last_played &&
        _.appInfo.last_played + 15552e3 >= _.GetTimeNowWithOverride()
      );
    return (!this.enabledEventTypeSet.has(_.event_type) &&
      !(
        this.m_bInitializedForUpdatesOnly &&
        this.BIsEventTypeGroupAllowed(`updates`) &&
        _.event_type == 28 &&
        _.start_time < _
      )) ||
      this.m_mapHiddenApps.has(_.appid) ||
      this.m_mapHiddenClans.has(_.clanid)
      ? !1
      : _ & _.k_eRequired || _ & _.k_eReposted
        ? !0
        : !!(
            (this.BIsGameSourceAllowed(`recent`) && _) ||
            (this.BIsGameSourceAllowed(`library`) && _ & _.k_eLibrary) ||
            (this.BIsGameSourceAllowed(`wishlist`) && _ & _.k_eWishlist) ||
            (this.BIsGameSourceAllowed(`following`) && _ & _.k_eFollowing) ||
            (this.BIsGameSourceAllowed(`recommended`) &&
              _ & _.k_eRecommended) ||
            (this.BIsGameSourceAllowed(`steam`) && _ & _.k_eSteam) ||
            (this.BIsGameSourceAllowed(`featured`) && _ & _.k_eFeatured) ||
            (this.BIsGameSourceAllowed(`curator`) && _ & _.k_eCurator)
          );
  }
  BAreAllEventsHidden() {
    return (
      this.m_mapEventTypeGroupsAllowed.size == 0 ||
      this.m_mapGameSources.size == 0
    );
  }
  BAreAnyEventsFiltered(_) {
    let _ = _() ? _ : _;
    return (
      (_ ? _ : _).some((_) => !this.BIsGameSourceAllowed(_)) ||
      _.some((_) => !this.BIsEventTypeGroupAllowed(_))
    );
  }
  BIsClanVisible(_) {
    return !this.m_mapHiddenClans.has(_);
  }
  SetClanVisibility(_, _) {
    _
      ? this.m_mapHiddenClans.has(_) && this.m_mapHiddenClans.delete(_)
      : this.m_mapHiddenClans.has(_) || this.m_mapHiddenClans.set(_, !0);
  }
  BIsAppVisible(_) {
    return !this.m_mapHiddenApps.has(_);
  }
  SetAppVisibility(_, _) {
    _
      ? this.m_mapHiddenApps.has(_) && this.m_mapHiddenApps.delete(_)
      : this.m_mapHiddenApps.has(_) || this.m_mapHiddenApps.set(_, !0);
  }
};
(_([_], _.prototype, `m_mapEventTypeGroupsAllowed`, void 0),
  _([_], _.prototype, `m_mapGameSources`, void 0),
  _([_], _.prototype, `m_bCuratorUnhideOnFollowDialogDismissed`, void 0),
  _([_], _.prototype, `m_mapHiddenApps`, void 0),
  _([_], _.prototype, `m_mapHiddenClans`, void 0),
  _(
    [
      _({
        keepAlive: !0,
        equals: _.structural,
      }),
    ],
    _.prototype,
    `enabledEventTypeSet`,
    null,
  ),
  _([_], _.prototype, `SetEventTypeGroupAllowed`, null),
  _([_], _.prototype, `SetGameSourceAllowed`, null));
var _ = (function (_) {
    return (
      (_.Default = `default`),
      (_.Upcoming = `upcoming`),
      (_.Featured = `featured`),
      (_.Press = `press`),
      (_.Steam = `steam`),
      (_.Halloween = `halloween`),
      (_.Dev_Sales = `sales`),
      (_.Dev_All = `all`),
      (_.Dev_AssociatedPress = `associated_press`),
      _
    );
  })({}),
  _ = class _ {
    constructor() {
      _(this);
    }
    m_mapBlockedAppIds = new Map();
    m_mapBlockedClanIds = new Map();
    static s_globalSingletonStore;
    static Get() {
      return (
        _.s_globalSingletonStore ||
          ((_.s_globalSingletonStore = new _()),
          _.s_globalSingletonStore.Init()),
        _.s_globalSingletonStore
      );
    }
    GetMutedSourceCount() {
      return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
    }
    Init() {
      let _ = _(`mutedcomminfo`, `application_config`);
      this.ValidateStoreDefault(_) &&
        (_.appids &&
          _.appids.forEach((_) => this.m_mapBlockedAppIds.set(_, !0)),
        _.clanids &&
          _.clanids.forEach((_) => this.m_mapBlockedClanIds.set(_, !0)));
    }
    ValidateStoreDefault(_) {
      let _ = _;
      return _ && typeof _ == `object`
        ? (Array.isArray(_.appids) && _.appids.length > 0) ||
            (Array.isArray(_.clanids) && _.clanids.length > 0)
        : !1;
    }
    BIsEventBlocked(_) {
      return _.appid
        ? this.m_mapBlockedAppIds.has(_.appid)
        : _.clanInfo
          ? this.m_mapBlockedClanIds.has(_.clanInfo.clanid)
          : !1;
    }
    BIsMutedAppID(_) {
      return this.m_mapBlockedAppIds.has(_);
    }
    BIsMutedClanID(_) {
      return this.m_mapBlockedClanIds.has(_);
    }
    async UpdateCommunicationSetting(_, _, _) {
      let _ = _.STORE_BASE_URL + `account/optoutappcommunication/`,
        _ = new FormData();
      if (
        (_.append(`sessionid`, _()),
        _.append(`allowCommunication`, _ ? `1` : `0`),
        _)
      ) {
        if (
          (!_ && this.m_mapBlockedAppIds.has(_)) ||
          (_ && !this.m_mapBlockedAppIds.has(_))
        )
          return !0;
        (_
          ? this.m_mapBlockedAppIds.delete(_)
          : this.m_mapBlockedAppIds.set(_, !0),
          _.append(`appId`, _.toString()));
      } else if (_) {
        if (
          (!_ && this.m_mapBlockedClanIds.has(_)) ||
          (_ && !this.m_mapBlockedClanIds.has(_))
        )
          return !0;
        (_
          ? this.m_mapBlockedClanIds.delete(_)
          : this.m_mapBlockedClanIds.set(_, !0),
          _.append(`clanId`, _.toString()));
      } else
        return (
          _(!1, `BlockEventsFromCalenderEvent: Invalid AppID and ClanID`), !1
        );
      try {
        return (await _.default.post(_, _)).data.success == 1;
      } catch (_) {
        return (
          console.error(`Blocking app id hit error ` + _(_).strErrorMsg), !1
        );
      }
    }
  };
(_([_], _.prototype, `m_mapBlockedAppIds`, void 0),
  _([_], _.prototype, `m_mapBlockedClanIds`, void 0));
var _ = 2500;
function _(_, _, _, _) {
  return {
    strId: `section-` + _,
    strSectionLabel: _,
    rtSectionStart: _,
    rtSectionEnd: _,
    bIsFutureSection: _ >= _,
    nRenderedHeight: _,
    nTopOffset: 0,
  };
}
var _ = class {
  m_nForwardStuckCount = 0;
  m_nBackwardStuckCount = 0;
  m_mapCalendarAppsByID = new Map();
  m_mapCalendarClansByID = new Map();
  m_mapCalendarEventsByGid = new Map();
  m_rgSortedCalendarEvents = [];
  m_visibilityStore;
  m_currentView = _.box(void 0);
  m_bFinishedSearchingForward = !1;
  m_bFinishedSearchingBackward = !1;
  m_rgCalendarSections = [];
  m_rgFutureSections = [];
  m_dtInitTime;
  m_forwardRequestInFlight = null;
  m_backwardRequestInFlight = null;
  m_key;
  m_collectionMetaData = void 0;
  constructor(_, _) {
    (_(this),
      (this.m_key = _),
      (this.m_visibilityStore = new _(_)),
      _.Get().HintLoad());
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
      this.GetCollectionID() === _.Featured ||
      (this.BIsGlobalCalendar() && !_.accountid)
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
  BEventMatchCalendarSingleSource(_) {
    return (
      (this.BIsSingleAppCalendar() && this.m_key.appids?.[0] == _.appid) ||
      (this.BIsSingleGroupCalendar() &&
        this.m_key.clanaccountids?.[0] == _.clanid)
    );
  }
  BIsSingleSourceMuted() {
    if (!this.BIsSingleSourceCalendar()) return !1;
    if (this.BIsSingleAppCalendar()) {
      let _ = this.GetSingleAppID();
      return _ !== void 0 && _.Get().BIsMutedAppID(_);
    }
    let _ = this.GetSingleGroupID();
    return _ !== void 0 && _.Get().BIsMutedClanID(_);
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
  SetCollectionMetaData(_) {
    this.m_collectionMetaData = _;
  }
  GetCollectionMetaData() {
    return this.m_collectionMetaData;
  }
  BHasCollectionMetaData() {
    return !!this.m_collectionMetaData;
  }
  ValidateCollectionMetadata(_) {
    let _ = _;
    return !!(
      _ &&
      typeof _ == `object` &&
      _.clanid &&
      typeof _.clanid == `number` &&
      _.clan_event_gid &&
      typeof _.clan_event_gid == `string`
    );
  }
  SetFilteredView(_, _) {
    let _ = this.m_currentView.get();
    _ && _.dispose();
    let _ = () => this.m_rgSortedCalendarEvents,
      _ = this.BIsSingleSourceMuted(),
      _ = new _(_, this.LoadAdditionalEvents, this.BHitEventHorizon, _, !!_, _);
    this.m_currentView.set(_);
  }
  BIsFilteredViewEmpty() {
    return !!this.m_currentView.get()?.BIsViewEmpty();
  }
  GetCalendarItemsInTimeRange(_, _) {
    let _ = this.m_currentView.get();
    return _
      ? _.GetCalendarItemsInTimeRange(_, _)
      : (console.error(`calendar view not yet initialized`),
        {
          rgCalendarItems: [],
          bIsComplete: !1,
        });
  }
  GetActiveEventsAt(_) {
    let _ = this.m_currentView.get();
    return _
      ? _.GetActiveEventsAt(_)
      : (console.error(`calendar view not yet initialized`), []);
  }
  GetCurrentlyLoadedEventCount(_, _) {
    return (
      this.m_currentView.get()?.GetCurrentlyLoadedEventCount(_, _) ?? {
        nCount: 0,
        bIsComplete: !1,
      }
    );
  }
  GetCurrentlyLoadedItemsForStats() {
    return this.m_currentView.get()?.GetCurrentlyLoadedEvents() || [];
  }
  GetCalendarSections(_) {
    return _ ? this.m_rgFutureSections : this.m_rgCalendarSections;
  }
  GetStoreInitializationTimestamp() {
    return (
      (this.m_dtInitTime ||= _.GetTimeNowWithOverrideAsDate()),
      this.m_dtInitTime
    );
  }
  InitCalendarSections() {
    let _ = this.GetStoreInitializationTimestamp(),
      _ = [],
      _ = _.getTime() / 1e3;
    _.push(_(_, _(`#EventCalendar_FutureEventsHeader`), _));
    let _ = new Date(_);
    _.setHours(0, 0, 0, 1);
    let _ = _.getTime() / 1e3;
    (_.push(_(_, _(`#Time_Today`), _, _)), _.setDate(_.getDate() - 1));
    let _ = _;
    ((_ = _.getTime() / 1e3), _.push(_(_, _(`#Time_Yesterday`), _, _)));
    let _ =
        this.m_rgSortedCalendarEvents[this.m_rgSortedCalendarEvents.length - 1],
      _ = _ ? _.start_time : _,
      _ = _ > _;
    for (let _ = 0; _ < 5 && !_; _++)
      (_.setDate(_.getDate() - 1),
        (_ = _),
        (_ = _.getTime() / 1e3),
        _.push(_(_, _(_), _, _)),
        (_ = _ > _));
    let _ = new Date(_),
      _ = _;
    for (; _.getMonth() == _.getMonth() && _.getDate() != 1 && !_;) {
      _.setDate(_.getDate() - 7);
      let _ = _.getTime() / 1e3;
      (_.push(_(_, _(_ - 1), _, _)), (_ = _ > _), (_ = _));
    }
    let _ = new Date(_);
    (_.setHours(0, 0, 0, 1), _.setDate(1));
    let _ = _;
    for (let _ = 1; !_; _++) {
      let _ = new Date(_);
      _.setMonth(_.getMonth() - _, 1);
      let _ = _.getTime() / 1e3;
      (_.push(_(_, _(_), _, _)), (_ = _ > _), (_ = _));
    }
    this.m_rgCalendarSections.length > _.length
      ? this.m_rgCalendarSections.splice(
          _.length,
          this.m_rgCalendarSections.length,
        )
      : _.splice(this.m_rgCalendarSections.length, _.length).forEach((_) =>
          this.m_rgCalendarSections.push(_),
        );
  }
  InitFutureCalendarSections() {
    let _ = this.GetStoreInitializationTimestamp(),
      _ = [],
      _;
    this.m_key.rtCalendarEnd && (_ = this.m_key.rtCalendarEnd);
    let _ = this.m_rgSortedCalendarEvents[0];
    (_ && (_ = _.start_time), (_ ||= _.getTime() / 1e3));
    let _ = _.getTime() / 1e3,
      _ = new Date(_);
    _.setHours(24, 0, 0, 0);
    let _ = _.getTime() / 1e3;
    _.push(
      _(_, _(this.m_key.bSectionByDay ? `#Time_UpNext` : `#Time_Today`), _, _),
    );
    let _ = _ <= _,
      _ = _;
    (_.setDate(_.getDate() + 1),
      (_ = _.getTime() / 1e3),
      _ || _.push(_(_, _(`#Time_Tomorrow`), _, _)),
      (_ = _ <= _));
    let _ = 6 - (0, _.default)(_).weekday();
    for (let _ = 2; _ <= _ && !_; _++) {
      _ = _;
      let _ = _(_);
      (_.setDate(_.getDate() + 1),
        (_ = _.getTime() / 1e3),
        _.push(_(_, _, _, _)),
        (_ = _ <= _));
    }
    if (this.m_key.bSectionByDay)
      for (; !_;) {
        _ = _;
        let _ = _(_);
        (_.setDate(_.getDate() + 1),
          (_ = _.getTime() / 1e3),
          _.push(_(_, _, _, _)),
          (_ = _ <= _));
      }
    else {
      let _ = new Date(_),
        _ = _,
        _ = (0, _.default)(_).daysInMonth();
      if (_.getMonth() == _.getMonth() && _.getDate() != _ && !_) {
        _.setDate(_.getDate() + 7);
        let _ = _.getTime() / 1e3;
        (_.push(_(_, _(`#EventCalendar_NextWeek`), _, _)),
          (_ = _ <= _),
          (_ = _));
      }
      let _ = new Date(_);
      (_.setMonth(_.getMonth() + 1), _.setDate(1), _.setHours(0, 0, 0, 0));
      let _;
      if (_ < _ && !_) {
        let _ = _.getTime() / 1e3;
        (_.push(_(_, _(`#EventCalendar_LaterThisMonth`), _, _)),
          (_ = _ <= _),
          (_ = _));
      } else _ = _;
      for (let _ = 2; !_; _++) {
        let _ = new Date(_);
        _.setMonth(_.getMonth() + _);
        let _ = _.getTime() / 1e3;
        (_.push(_(_, _(_), _, _)), (_ = _ <= _), (_ = _));
      }
    }
    this.m_rgFutureSections.length > _.length
      ? this.m_rgFutureSections.splice(_.length, this.m_rgFutureSections.length)
      : _.splice(this.m_rgFutureSections.length, _.length).forEach((_) =>
          this.m_rgFutureSections.push(_),
        );
  }
  async RegisterCalendarEventsAndModels(_) {
    (await _.Get().HintLoad(),
      _(() => {
        (this.RegisterCalendarApps(_.apps ?? []),
          this.RegisterCalendarClans(_.clans ?? []),
          this.RegisterCalendarEvents(_.documents ?? []),
          _.RegisterClanEvents(_.events ?? []),
          this.RegisterReadEvents(_.events_read ?? []),
          this.RegisterEventVotes(_.event_votes ?? []),
          _.forwardComplete && (this.m_bFinishedSearchingForward = !0),
          _.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
          this.InitCalendarSections(),
          this.InitFutureCalendarSections(),
          this.SetCollectionMetaData(
            this.ValidateCollectionMetadata(_.metadatainfo)
              ? _.metadatainfo
              : void 0,
          ));
      }));
  }
  RegisterCalendarApps(_) {
    if (_)
      for (let _ of _) {
        if (this.m_mapCalendarAppsByID.has(_.appid)) continue;
        let _ = new _();
        ((_.appid = _.appid),
          (_.source = _.source),
          (_.playtime = _.playtime),
          (_.last_played = _.last_played),
          (_.wishlist_added = _.wishlist_added),
          this.m_mapCalendarAppsByID.set(_.appid, _),
          _.hidden && this.m_visibilityStore.SetAppVisibility(_.appid, !1));
      }
  }
  RegisterCalendarClans(_) {
    if (_) {
      for (let _ of _)
        if (!this.m_mapCalendarClansByID.has(_.clanid)) {
          let _ = new _();
          ((_.clanid = _.clanid),
            (_.source = _.source),
            this.m_mapCalendarClansByID.set(_.clanid, _),
            _.hidden && this.m_visibilityStore.SetClanVisibility(_.clanid, !1));
        }
    }
  }
  RegisterReadEvents(_) {
    _ && _(_);
  }
  RegisterEventVotes(_) {
    _ &&
      _(
        _.map((_) => ({
          gidAnnouncement: _._,
          vote: _.vote === void 0 ? null : _.vote ? `up` : `down`,
        })),
      );
  }
  RegisterCalendarEvents(_) {
    if (_) {
      let _ = !1;
      for (let _ of _) this.BInternalInsertCalendarEventItem(_) && (_ = !0);
      _ && this.RebuildSortedCalendarEventList();
    }
  }
  BHitEventHorizon(_) {
    return _ == `forward`
      ? this.m_bFinishedSearchingForward
      : this.m_bFinishedSearchingBackward;
  }
  GetTimeEdgeForDirection(_, _ = void 0) {
    return _ === `forward`
      ? this.m_rgSortedCalendarEvents.length > 0
        ? this.m_rgSortedCalendarEvents[0].start_time
        : _
      : this.m_rgSortedCalendarEvents.length > 0
        ? this.m_rgSortedCalendarEvents[
            this.m_rgSortedCalendarEvents.length - 1
          ].start_time
        : _;
  }
  UpdateStuckCounters(_, _) {
    let _ =
        _ === `forward`
          ? this.m_bFinishedSearchingForward
          : this.m_bFinishedSearchingBackward,
      _ = this.GetTimeEdgeForDirection(_, void 0);
    return !_ && _ === _
      ? (_ == `forward`
          ? this.m_nForwardStuckCount++
          : this.m_nBackwardStuckCount++,
        !0)
      : (_ == `forward`
          ? (this.m_nForwardStuckCount = 0)
          : (this.m_nBackwardStuckCount = 0),
        !1);
  }
  GetRequestInFlight(_) {
    return _ === `forward`
      ? this.m_forwardRequestInFlight
      : this.m_backwardRequestInFlight;
  }
  SetRequestInFlight(_, _) {
    (_(
      !_ || !this.GetRequestInFlight(_),
      `Already have a request in flight for`,
      _,
    ),
      _ === `forward`
        ? (this.m_forwardRequestInFlight = _)
        : (this.m_backwardRequestInFlight = _));
  }
  async LoadAdditionalEvents(_, _) {
    if (this.BHitEventHorizon(_)) return 1;
    let _ = this.GetRequestInFlight(_);
    if (_) return _;
    let _ = _.STORE_BASE_URL + `events/ajaxgetusereventcalendarrange/`,
      _ =
        _ === `forward`
          ? this.m_nForwardStuckCount
          : this.m_nBackwardStuckCount,
      _ = _ < 3 ? _ : 0,
      _ = +(_ >= 3),
      _ = 250 + 50 * _,
      _ = _.GetTimeNowWithOverride(),
      _ = this.GetTimeEdgeForDirection(_, _) ?? _,
      _ = {
        minTime: 0,
        maxTime: 0,
        ascending: !0,
        maxResults: _,
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
      _ === `forward`
        ? ((_.minTime = Math.floor(_ + _)), (_.ascending = !0))
        : ((_.maxTime = Math.floor(_ - _)), (_.ascending = !1)),
      (_ = _.default
        .get(_, {
          params: _,
          cancelToken: _ ? _.token : void 0,
          withCredentials: !0,
        })
        .then(async (_) => {
          if ((this.SetRequestInFlight(_, null), _.data.success == 1)) {
            if (
              (await this.RegisterCalendarEventsAndModels(_.data),
              this.UpdateStuckCounters(_, _))
            )
              return this.LoadAdditionalEvents(_, _);
          } else
            console.error(
              `LoadAdditionalEvents was not successful: Msg` + _.data.msg,
            );
          return _.data.success;
        })
        .catch((_) => {
          this.SetRequestInFlight(_, null);
          let _ = _(_);
          return (
            console.error(`LoadAdditionalEvents hit error ` + _.strErrorMsg, _),
            _ == `forward`
              ? (this.m_bFinishedSearchingForward = !0)
              : (this.m_bFinishedSearchingBackward = !0),
            2
          );
        })),
      this.SetRequestInFlight(_, _),
      _
    );
  }
  BInternalInsertCalendarEventItem(_) {
    if (!_.unique_id)
      return (
        _(
          !1,
          `Attmpted to register a calendar event item with an invalid unique id!`,
        ),
        !1
      );
    if (this.m_mapCalendarEventsByGid.has(_.unique_id)) return !1;
    let _ = this.m_mapCalendarAppsByID.get(_.appid),
      _ = this.m_mapCalendarClansByID.get(_.clanid);
    if (!_ && !_) return (console.log(`No AppInfo or ClanInfo For: `, _), !1);
    let _ = new _();
    return (
      (_.clanid = _.clanid),
      (_.unique_id = _.unique_id),
      (_.event_type = _.event_type),
      (_.appid = _.appid),
      (_.start_time = _.start_time),
      (_.score = _.score),
      (_.appInfo = _),
      (_.clanInfo = _),
      this.m_rgSortedCalendarEvents.push(_),
      this.m_mapCalendarEventsByGid.set(_.unique_id, _),
      !0
    );
  }
  GetCalendarAppInfoForAppID(_) {
    return this.m_mapCalendarAppsByID.get(_);
  }
  RebuildSortedCalendarEventList() {
    let _ = this.m_rgSortedCalendarEvents.slice();
    this.m_rgSortedCalendarEvents = _.sort(
      (_, _) => _.start_time - _.start_time,
    );
  }
  async UpdateEventBlockFromCalendarEvent(_, _) {
    let _ = _.appid || void 0,
      _ = _.clanInfo ? _.clanInfo.clanid : void 0;
    _ == null && _ == null
      ? _(
          !1,
          `Both clan id and account id are missing, cannot change communication status`,
        )
      : (await _.Get().UpdateCommunicationSetting(_, _, _), _(_.k_eMuted));
  }
  GetAllClans() {
    return Array.from(this.m_mapCalendarClansByID.keys());
  }
  GetAllApps() {
    return Array.from(this.m_mapCalendarAppsByID.keys());
  }
};
(_([_], _.prototype, `m_mapCalendarAppsByID`, void 0),
  _([_], _.prototype, `m_mapCalendarClansByID`, void 0),
  _([_], _.prototype, `m_mapCalendarEventsByGid`, void 0),
  _([_], _.prototype, `m_rgSortedCalendarEvents`, void 0),
  _([_], _.prototype, `m_bFinishedSearchingForward`, void 0),
  _([_], _.prototype, `m_bFinishedSearchingBackward`, void 0),
  _([_], _.prototype, `m_rgCalendarSections`, void 0),
  _([_], _.prototype, `m_rgFutureSections`, void 0),
  _([_], _.prototype, `m_collectionMetaData`, void 0),
  _([_], _.prototype, `InitCalendarSections`, null),
  _([_], _.prototype, `InitFutureCalendarSections`, null),
  _([_], _.prototype, `RegisterCalendarEventsAndModels`, null),
  _([_], _.prototype, `RegisterCalendarApps`, null),
  _([_], _.prototype, `RegisterCalendarClans`, null),
  _([_], _.prototype, `RegisterCalendarEvents`, null),
  _([_], _.prototype, `BHitEventHorizon`, null),
  _([_.bound], _.prototype, `LoadAdditionalEvents`, null),
  _([_], _.prototype, `UpdateEventBlockFromCalendarEvent`, null));
var _ = class {
  m_rgLoadedEventsBox = _.box([]);
  m_lastLoadLatch = null;
  m_fnGetUnfilteredEvents;
  m_fnLoadAdditionalEvents;
  m_fnBHitEventHorizon;
  m_fnBIsEventInView;
  m_bSkipStorePreferenceCheck;
  m_bAllowMutedAndIgnoredSources;
  m_rgAutorunDisposer;
  constructor(_, _, _, _, _, _) {
    (_(this),
      (this.m_fnGetUnfilteredEvents = _),
      (this.m_fnLoadAdditionalEvents = _),
      (this.m_fnBHitEventHorizon = _),
      (this.m_fnBIsEventInView = _),
      (this.m_bSkipStorePreferenceCheck = _),
      (this.m_bAllowMutedAndIgnoredSources = _),
      (this.m_rgAutorunDisposer = _(async () => {
        let _ = this.viewFilteredEvents.slice();
        if (!this.m_bSkipStorePreferenceCheck) {
          let _ = Array.from(
            new Set(_.map((_) => _.appid).filter(Boolean)),
          ).sort();
          if (
            ((this.m_lastLoadLatch = _),
            await _.Get().QueueMultipleAppRequests(_, {
              ..._,
              include_assets: !0,
            }),
            this.m_lastLoadLatch != _)
          )
            return;
          this.m_lastLoadLatch = null;
        }
        this.m_rgLoadedEventsBox.set(_);
      })));
  }
  dispose() {
    this.m_rgAutorunDisposer();
  }
  get viewFilteredEvents() {
    return this.m_fnGetUnfilteredEvents().filter((_) =>
      this.m_fnBIsEventInView(_),
    );
  }
  get filteredAndCheckedEvents() {
    return this.m_rgLoadedEventsBox.get().filter((_) => {
      if (!_.appid) {
        if (
          !this.m_bAllowMutedAndIgnoredSources &&
          (_.Get().BIsMutedClanID(_.clanid) ||
            _.Get().BIsIgnoringCurator(_.InitFromClanID(_.clanid, _.EUNIVERSE)))
        )
          return !1;
      } else if (
        (!this.m_bAllowMutedAndIgnoredSources &&
          (_.Get().BIsMutedAppID(_.appid) ||
            _.Get().BIsGameIgnored(_.appid))) ||
        (!this.m_bSkipStorePreferenceCheck && _(_.Get().GetApp(_.appid)))
      )
        return !1;
      return !0;
    });
  }
  BIsCompleteThroughTime(_, _) {
    if (this.m_fnBHitEventHorizon(_)) return !0;
    let _ = this.m_fnGetUnfilteredEvents();
    return _ === `forward`
      ? !!_ && _.length > 0 && _[0].start_time > _
      : _ !== void 0 && _.length > 0 && _[_.length - 1].start_time < _;
  }
  async EnsureRangeIsLoaded(_, _) {
    for (let _ = 0; _ < 100 && !this.BIsCompleteThroughTime(`forward`, _); _++)
      await this.m_fnLoadAdditionalEvents(`forward`);
    for (let _ = 0; _ < 100 && !this.BIsCompleteThroughTime(`backward`, _); _++)
      await this.m_fnLoadAdditionalEvents(`backward`);
  }
  GetCalendarItemsInTimeRange(_, _) {
    this.EnsureRangeIsLoaded(_, _);
    let _ = this.filteredAndCheckedEvents.filter(
        (_) => _.start_time >= _ && (!_ || _.start_time < _),
      ),
      _ = this.BIsCompleteThroughTime(`forward`, _),
      _ = this.BIsCompleteThroughTime(`backward`, _);
    return {
      rgCalendarItems: _,
      bIsComplete: _ && _,
    };
  }
  GetCurrentlyLoadedEvents() {
    return this.filteredAndCheckedEvents;
  }
  GetCurrentlyLoadedEventCount(_, _) {
    let _ = 0;
    this.filteredAndCheckedEvents.forEach((_) => {
      _.start_time >= _ && (!_ || _.start_time < _) && _++;
    });
    let _ = this.BIsCompleteThroughTime(`forward`, _),
      _ = this.BIsCompleteThroughTime(`backward`, _);
    return {
      nCount: _,
      bIsComplete: _ && _,
    };
  }
  BIsViewEmpty() {
    return this.filteredAndCheckedEvents.length > 0;
  }
  GetActiveEventsAt(_) {
    return this.filteredAndCheckedEvents
      .map((_) => _.GetClanEventModel(_.unique_id))
      .filter((_) => {
        if (!_ || _.startTime === void 0) return !1;
        let _ = _.endTime || _.startTime + 3600;
        return _ >= _.startTime && _ < _;
      });
  }
};
(_([_.struct], _.prototype, `viewFilteredEvents`, null),
  _([_.struct], _.prototype, `filteredAndCheckedEvents`, null));
var _ = _.box(null),
  _ = new Map();
window.g_EventCalendarMap = _;
function _(_, _) {
  let _ = ``;
  return (
    _.appids &&
      _.appids.length > 0 &&
      (_ += `appids:` + _.appids.sort().join(`,`)),
    _.clanaccountids &&
      _.clanaccountids.length > 0 &&
      (_ += `clanids:` + _.clanaccountids.sort().join(`,`)),
    _.collectionid && (_ += `collection:` + _.collectionid),
    _.saleid && (_ += `sale:` + _.saleid),
    _.bSectionByDay && (_ += `_sectionbyday`),
    _.rtCalendarEnd && (_ += `_end:` + _.rtCalendarEnd),
    _.rgTags &&
      _.rgTags.length > 0 &&
      (_ += `_tags:` + _.rgTags.slice().sort().join(`,`)),
    _.hubtype &&
      (_ +=
        `_hubtype:` +
        _.hubtype +
        `_` +
        _.category_or_language +
        `_` +
        _.tag_name),
    _.get() !== _ && (_.set(_), _.has(_) || _.set(_, new _(_, _))),
    _
  );
}
function _() {
  let _ = _.get();
  return ((_ ??= _({})), _.get(_));
}
function _() {
  return _.get() !== null;
}
var _ = `rde3mdS-0gs-`;
function _(_) {
  let { event: _, closeModal: _ } = _,
    _ = _();
  return (0, _.jsx)(_, {
    initialEvent: _,
    bShowOnlyInitialEvent: !0,
    partnerEventStore: _,
    emoticonStore: _,
    showAppHeader: !0,
    closeModal: _,
  });
}
function _(_, _) {
  _(
    (0, _.jsx)(_, {
      event: _,
    }),
    _,
  );
}
var _ = class extends _.Component {
  m_refFocus = _.createRef();
  componentDidMount() {
    this.props.fnClose &&
      (document.addEventListener(`keydown`, this.escFunction, !1),
      this.m_refFocus.current && this.m_refFocus.current.focus());
  }
  componentWillUnmount() {
    this.props.fnClose &&
      document.removeEventListener(`keydown`, this.escFunction, !1);
  }
  escFunction(_) {
    let { fnClose: _ } = this.props;
    _.keyCode === 27 && _ && _();
  }
  OnBackgroundClick(_) {
    _.currentTarget == _.target && this.props.fnClose();
  }
  render() {
    let { event: _, langOverride: _, isPreview: _ } = this.props;
    return (0, _.jsx)(`div`, {
      ref: this.m_refFocus,
      className: _,
      onClick: this.OnBackgroundClick,
      children: (0, _.jsx)(_, {
        children: (_) =>
          (0, _.jsx)(
            _,
            {
              event: _,
              emoticonStore: _,
              partnerEventStore: _.Get(),
              langOverride: _,
              isPreview: _,
              bDisableBroadcastPlayer: !1,
            },
            _.GID,
          ),
      }),
    });
  }
};
(_([_], _.prototype, `escFunction`, null),
  _([_], _.prototype, `OnBackgroundClick`, null),
  (_ = _([_], _)));
var _ = class {
    m_bHasBeenTracked = !1;
    m_fnSubmit = null;
  },
  _ = new (class {
    ShouldTrack(_) {
      if (_.bOldAnnouncement) return !1;
      let _ = this.m_mapEvents.get(_.GID);
      return !_ || !_.m_bHasBeenTracked;
    }
    StartTracking(_, _, _) {
      if (_.bOldAnnouncement) return;
      let _ = this.m_mapEvents.get(_.GID);
      (_ || ((_ = new _()), this.m_mapEvents.set(_.GID, _)),
        _.m_bHasBeenTracked ||
          _.m_fnSubmit ||
          ((_.m_fnSubmit = new _()),
          _.m_fnSubmit.Schedule(
            this.m_nImpressionDelayMS,
            this.ReportImpression.bind(this, _, _, _),
          )));
    }
    StopTracking(_) {
      let _ = this.m_mapEvents.get(_.GID);
      _ && _.m_fnSubmit && (_.m_fnSubmit.Cancel(), (_.m_fnSubmit = null));
    }
    ReportImpression(_, _, _) {
      if ((_.RecordEventShown(_, 8), _)) {
        let _ = _();
        _.RecordEventViewed(
          _.GID,
          _.GetCurrentlyLoadedItemsForStats(),
          _.GetStoreInitializationTimestamp().getTime() / 1e3,
        );
      }
      let _ = this.m_mapEvents.get(_.GID);
      _ &&
        ((_.m_bHasBeenTracked = !0),
        _.m_fnSubmit.Cancel(),
        (_.m_fnSubmit = null));
    }
    m_nImpressionDelayMS = 500;
    m_mapEvents = new Map();
  })(),
  _ = (_) => {
    let { event: _ } = _,
      _ = _(),
      _ = _();
    return _.ShouldTrack(_)
      ? (0, _.jsx)(_, {
          onEnter: () =>
            _.StartTracking(_, _.recordNewsHubStats ? _ : void 0, _),
          onLeave: () => _.StopTracking(_),
        })
      : null;
  };
