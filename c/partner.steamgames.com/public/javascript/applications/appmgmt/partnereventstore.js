import { _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _, _ } from "./src.js";
import { _, _ } from "./dialogs.js";
import { _ } from "./useQuery.js";
import "./appinfo.js";
import { _ } from "./axios.js";
import { _ } from "./ajaxhooks.js";
import { _ } from "./axiosutils.js";
import { _ } from "./stringutils.js";
import { _ } from "./debugglobal.js";
import { _, _, _ } from "./partnereventutils.js";
import "./steamid.js";
var _ = _(_(), 1);
_(), (0, _.createContext)(!1);
function _() {
  return !0;
}
var _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
  _ =
    `document` in globalThis
      ? document.cookie
          .split(`;`)
          .find((_) => _.trim().startsWith(`timezoneName`))
          ?.split(`=`)[1]
      : void 0,
  _ = _ && decodeURIComponent(_);
function _() {
  return _() ? _ : (_ ?? _);
}
function _() {
  `document` in globalThis &&
    _ &&
    (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 31536e6).toUTCString()};path=/;Secure;SameSite=None;`);
}
_();
function _(_) {
  return window.StoreDefaults ? window.StoreDefaults[_] : void 0;
}
var _ = _(_());
function _(_) {
  let [_, _] = (0, _.useState)(() => _.GetClanEventModel(_)),
    _ = _(`usePartnerEventByEventGID`);
  return (
    (0, _.useEffect)(() => {
      _ &&
        _?.GID != _ &&
        (_.Init(),
        _.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([_], [], _).then(
          (_) => {
            _?.length == 1 && _[0].GID == _ && !_.token.reason && _(_[0]);
          },
        ));
    }, [_, _, _]),
    _
  );
}
function _(_) {
  let _ = _(`usePreloadPartnerEventsByEventGID`),
    _ = _({
      queryKey: [`PreloadPartnerEventsByEventGID`],
      queryFn: () => (
        _.Init(),
        _.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(_, [], _)
      ),
    });
  return {
    bIsLoading: _.isLoading,
    events: _.data,
  };
}
function _(_, _, _) {
  let [_, _] = (0, _.useState)(_ ? _.GetClanEventModel(_) : void 0),
    [_, _] = (0, _.useState)(!!_ && !!_),
    [_, _] = (0, _.useState)(),
    [_, _] = (0, _.useState)(1),
    _ = _(`usePartnerEventByClanAccountAndEventGID`);
  return (
    (0, _.useEffect)(() => {
      (async () => {
        try {
          if (_?.GID != _ && _ && _) {
            _.Init();
            let _ = _.InitFromClanID(_, _.EUNIVERSE),
              _;
            try {
              _ = await _.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                _,
                _,
                0,
                _,
              );
            } catch (_) {
              _(_?.response?.data?.err_msg), _(_?.response?.data?.success || 2);
            }
            _.token.reason || _(_);
          }
        } finally {
          _(!1);
        }
      })();
    }, [_, _, _, _, _]),
    {
      eventModel: _,
      bLoading: _,
      sErrorMessage: _,
      eResult: _,
    }
  );
}
function _(_) {
  let _ = `` + _,
    _ = _.GetELanguageFallback(_);
  return _ != _ && (_ += `_` + _), _;
}
var _ = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(_) {
      _(
        typeof _.appid == `number`,
        `AJAX updated app returned a non-numeric AppID! Did the PHP change?`,
      ),
        (this.appid = _.appid),
        (this.date = _.date),
        (this.can_play = _.can_play),
        (this.playtime = _.playtime),
        (this.announcementid = _.announcementid);
    }
  },
  _ = class {
    constructor(_ = !1) {
      _(this), (this.m_bOnlySummary = _);
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
    m_QueuedEventTimeout = new _();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let _ = _(`PartnerEventStore`);
        this.ValidateStoreDefault(_) &&
          _.forEach((_) => {
            if (_) {
              let _ = new _(_.clan_steamid),
                _ = this.InsertEventModelFromClanEventData(_, _);
              _.announcement_body &&
                this.m_mapExistingEvents.set(_ + _.announcement_body.gid, _);
            }
          });
        let _ = _(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(_) &&
          _.forEach((_) => {
            if (_) {
              let _ = new _(_.clan_steamid),
                _ = this.InsertEventModelFromClanEventData(_, _);
              _.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + _.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(_ + _.announcement_body.gid, _);
            }
          });
        let _ = _(`partnereventadjacents`, `application_config`);
        this.ValidateAdjacentEvent(_) &&
          _.forEach((_) => {
            _ &&
              this.m_mapAdjacentAnnouncementGIDs.set(
                _.announcementGID,
                _.adjacents,
              );
          }),
          (this.m_bLoadedFromConfig = !0);
      }
    }
    ValidateStoreDefault(_) {
      let _ = _;
      return _ &&
        Array.isArray(_) &&
        _.length > 0 &&
        _[0] &&
        typeof _[0] == `object`
        ? typeof _[0].gid == `string` ||
            (typeof _[0].announcement_body == `object` &&
              typeof _[0].announcement_body.gid == `string`)
        : !1;
    }
    ValidateAdjacentEvent(_) {
      let _ = _;
      return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
        ? typeof _[0].announcementGID == `string` &&
            Array.isArray(_[0].adjacents) &&
            (_[0].adjacents.length == 0 || typeof _[0].adjacents[0] == `string`)
        : !1;
    }
    GetPartnerEventChangeCallback(_) {
      let _ = this.m_mapEventUpdateCallback.get(_);
      return (
        (_ ||=
          (this.m_mapEventUpdateCallback.set(_, new _()),
          this.m_mapEventUpdateCallback.get(_))),
        _
      );
    }
    GetClanEventGIDs(_) {
      return this.m_mapClanToGIDs.get(_.GetAccountID()) || [];
    }
    GetClanEventGIDsForApp(_) {
      return this.m_mapAppIDToGIDs.get(_) || [];
    }
    GetClanEventModel(_) {
      return this.m_mapExistingEvents.get(_);
    }
    BHasClanEventModel(_) {
      return this.m_mapExistingEvents.has(_);
    }
    BHasClanAnnouncementGID(_) {
      if (this.m_mapAnnouncementBodyToEvent.has(_)) {
        let _ = this.m_mapAnnouncementBodyToEvent.get(_);
        return !!_ && this.BHasClanEventModel(_);
      }
      return !1;
    }
    GetClanEventGIDFromAnnouncementGID(_) {
      return this.m_mapAnnouncementBodyToEvent.get(_);
    }
    GetClanEventFromAnnouncementGID(_) {
      let _ = this.m_mapAnnouncementBodyToEvent.get(_);
      return _ ? this.m_mapExistingEvents.get(_) : void 0;
    }
    DefaultEventSortFunction(_, _) {
      return _.startTime == _.startTime
        ? _(_.GID ?? ``, _.GID ?? ``)
        : (_.startTime ?? 0) - (_.startTime ?? 0);
    }
    RegisterClanEvents(_) {
      if (_)
        for (let _ of _) {
          let _ = _(_);
          if (!this.m_mapExistingEvents.has(_)) {
            let _ = new _(_.clan_steamid);
            this.InsertEventModelFromClanEventData(_, _);
          }
        }
    }
    GetRankedClanEvents(_, _) {
      let _ = [],
        _ = _
          ? this.GetClanEventGIDs(_)
          : _
            ? this.GetClanEventGIDsForApp(_)
            : void 0;
      if (!_ || _.length == 0) return _;
      for (let _ of _) {
        let _ = this.GetClanEventModel(_);
        _ && _.push(_);
      }
      return _.sort(this.DefaultEventSortFunction), _;
    }
    InsertEventModelFromClanEventData(_, _) {
      let _ = _(_, _);
      return (
        this.InsertUniqueEventGID(_.GetAccountID(), _.appid, _.GID),
        this.m_mapExistingEvents.set(_.GID, _),
        _.AnnouncementGID &&
          _.AnnouncementGID.length > 1 &&
          this.m_mapAnnouncementBodyToEvent.set(_.AnnouncementGID, _.GID),
        _
      );
    }
    HelperInitializeNumSalesHeaderArray(_) {
      if ((_.jsondata.sale_num_headers ?? 0) > 1) {
        _.jsondata.localized_per_day_sales_header = [];
        for (let _ = 0; _ < (_.jsondata.sale_num_headers ?? 0); ++_)
          _.jsondata.localized_per_day_sales_header.push(_([], 32, null));
        _.m_overrideCurrentDay = 0;
      } else _.m_overrideCurrentDay = void 0;
    }
    GetAllClanEvents(_) {
      let _ = [];
      return (
        this.m_mapClanToGIDs.has(_.GetAccountID()) &&
          this.m_mapClanToGIDs.get(_.GetAccountID()).forEach((_) => {
            let _ = this.m_mapExistingEvents.get(_);
            _ && _.push(_);
          }),
        _
      );
    }
    async QueueLoadPartnerEvent(_, _, _) {
      if (this.m_mapExistingEvents.has(_)) return;
      this.m_rgQueuedEventsClanIDs.push(_),
        this.m_rgQueuedEventsUniqueIDs.push(_),
        this.m_rgQueuedEventsForEditFlags.push(!!_),
        (this.m_PendingInfoPromise ||= new Promise(
          (_) => (this.m_PendingInfoResolve = _),
        ));
      let _ = this.m_PendingInfoPromise,
        _ = () => {
          let _ = this.m_PendingInfoResolve,
            _ = this.m_rgQueuedEventsClanIDs,
            _ = this.m_rgQueuedEventsUniqueIDs,
            _ = this.m_rgQueuedEventsForEditFlags;
          (this.m_PendingInfoPromise = void 0),
            (this.m_rgQueuedEventsClanIDs = []),
            (this.m_rgQueuedEventsUniqueIDs = []),
            (this.m_rgQueuedEventsForEditFlags = []),
            this.InternalLoadPartnerEventList(_, _, _).then(() => _?.());
        };
      return (
        this.m_rgQueuedEventsClanIDs.length >= 30
          ? (this.m_QueuedEventTimeout.Cancel(), _())
          : this.m_QueuedEventTimeout.IsScheduled() ||
            this.m_QueuedEventTimeout.Schedule(50, _),
        _
      );
    }
    async InternalLoadPartnerEventList(_, _, _) {
      let _ = _.some((_) => _),
        _ =
          _.STORE_BASE_URL +
          (_
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        _ = _(_(_.LANGUAGE)),
        _ = {
          clanid_list: _.join(`,`),
          uniqueid_list: _.join(`,`),
          lang_list: _,
          origin: self.origin,
        };
      try {
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: _,
        });
        this.RegisterClanEvents(_.data.events);
      } catch (_) {
        let _ = _(_);
        console.error(`GetEventDetails hit error ` + _.strErrorMsg, _);
      }
    }
    async LoadAdjacentPartnerEvents(_, _, _, _, _, _, _) {
      return this.InternalLoadAdjacentPartnerEvents(
        _,
        void 0,
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadAdjacentPartnerEventsByAnnouncement(_, _, _, _, _, _, _) {
      return this.InternalLoadAdjacentPartnerEvents(
        void 0,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadAdjacentPartnerEventsByEvent(_, _, _, _, _, _, _) {
      let _ = _ || _.clanSteamID;
      return _.bOldAnnouncement
        ? this.InternalLoadAdjacentPartnerEvents(
            void 0,
            _.AnnouncementGID,
            _,
            _,
            _,
            _,
            _,
            _,
          )
        : this.InternalLoadAdjacentPartnerEvents(
            _.GID,
            _.AnnouncementGID,
            _,
            _,
            _,
            _,
            _,
            _,
          );
    }
    async InternalLoadAdjacentPartnerEvents(_, _, _, _, _, _, _, _) {
      let _ = [];
      if (!_ || !this.m_mapAdjacentAnnouncementGIDs.has(_)) {
        let _ = _.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          _ = _(_(_.LANGUAGE));
        _?.only_summaries &&
          !this.m_bOnlySummary &&
          (_(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (_.only_summaries = void 0));
        let _ = {
          clan_accountid: _ ? _.GetAccountID() : void 0,
          appid: _,
          count_before: _,
          count_after: _,
          gidevent: _,
          gidannouncement: _,
          lang_list: _,
          rtime_oldestevent: _ ? _.rtime_oldestevent : void 0,
          require_tags: _ && _.require_tags ? _.require_tags.join(`,`) : void 0,
          exclude_tags: _ && _.exclude_tags ? _.exclude_tags.join(`,`) : void 0,
          require_no_tags: _ ? _.require_no_tags : void 0,
          event_type_filter:
            _ && _.event_type_filter ? _.event_type_filter.join(`,`) : void 0,
          exclude_event_types:
            _ && _.exclude_event_types
              ? _.exclude_event_types.join(`,`)
              : void 0,
          only_summaries: _ && !!_.only_summaries,
          origin: self.origin,
        };
        try {
          let _ = await _.default.get(_, {
            params: _,
            cancelToken: _?.token,
          });
          if (_?.data?.success == 1)
            _(() => {
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_ || _, _);
                }
                _.push(this.m_mapExistingEvents.get(_));
              }
              if (_.length == 0) {
                if (_ && this.BHasClanEventModel(_))
                  this.m_mapExistingEvents.get(_) &&
                    _.push(this.m_mapExistingEvents.get(_));
                else if (_ && this.BHasClanAnnouncementGID(_)) {
                  let _ = this.GetClanEventFromAnnouncementGID(_);
                  _ && _.push(_);
                }
              }
            });
          else {
            let _ = _(_?.data);
            console.error(
              `LoadAdjacentPartnerEvents Success but empty response:` +
                _ +
                ` clanAccount:` +
                (_ ? _.GetAccountID() : 0) +
                ` ` +
                _.strErrorMsg,
              _,
            );
          }
        } catch (_) {
          let _ = _(_);
          _.errorCode != 52 &&
            console.error(
              `LoadAdjacentPartnerEvents hit error on appid:` +
                _ +
                ` clanAccount:` +
                (_ ? _.GetAccountID() : 0) +
                ` ` +
                _.strErrorMsg,
              _,
            );
        }
      } else {
        let _ = this.m_mapAdjacentAnnouncementGIDs.get(_),
          _ = [];
        _?.forEach((_) => {
          if (this.m_mapAnnouncementBodyToEvent.has(_)) {
            let _ = this.m_mapAnnouncementBodyToEvent.get(_);
            _ &&
              this.m_mapExistingEvents.get(_) &&
              _.push(this.m_mapExistingEvents.get(_));
          } else _.push(_);
        }),
          _.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                _,
                _,
              )
            ).forEach((_) => _.push(_));
      }
      return _;
    }
    async LoadPartnerEventsPageable(_, _, _ = 0, _ = 0, _) {
      let _ = [],
        _ = _.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        _ = {
          clan_accountid: _ ? _.GetAccountID() : void 0,
          appid: _,
          offset: _,
          count: _,
          _: _.LANGUAGE,
          origin: self.origin,
          exclude_tags: _ && _.length > 0 ? _?.join(`,`) : void 0,
        };
      try {
        let _ = await _.default.get(_, {
          params: _,
        });
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            _.push(this.m_mapExistingEvents.get(_));
          }
        });
      } catch (_) {
        console.error(`LoadClanEventInDateRange hit error ` + _(_).strErrorMsg);
      }
      return _;
    }
    async GetBestEventsForCurrentUser(_, _, _) {
      let _ = [],
        _ = {
          _: _.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: _,
          include_only_game_updates: _,
        },
        _ = _.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _ ? _.token : void 0,
        });
      if (!_.data?.events) {
        let _ = _.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${_})`);
      }
      return (
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            let _ = {
              nAppPriority: _.nAppPriority,
              bPossibleTakeOver: _.bPossibleTakeOver,
              event: this.m_mapExistingEvents.get(_),
            };
            _.push(_);
          }
        }),
        _
      );
    }
    async LoadImportantEventsAroundToday(_, _, _, _, _, _) {
      let _ = [],
        _ = [];
      _.push({
        priority: 0,
        appids: _,
      }),
        _ &&
          _.push({
            priority: 1,
            appids: _,
          }),
        _ &&
          _.push({
            priority: 2,
            appids: _,
          });
      let _ = {
          count: _,
          strAppIDPriority: JSON.stringify({
            prioritized_apps: _,
          }),
          filterToEventTypes: _ ? _.toString() : ``,
          _: _.LANGUAGE,
        },
        _ = _.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _.token,
        });
      return (
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            _.push(this.m_mapExistingEvents.get(_));
          }
        }),
        _
      );
    }
    InsertUniqueEventGID(_, _, _) {
      let _ = this.m_mapClanToGIDs.get(_);
      _ ||= (this.m_mapClanToGIDs.set(_, []), this.m_mapClanToGIDs.get(_));
      let _ = this.m_mapAppIDToGIDs.get(_);
      (_ ||= (this.m_mapAppIDToGIDs.set(_, []), this.m_mapAppIDToGIDs.get(_))),
        _.indexOf(_) == -1 && (_.push(_), _.push(_));
    }
    ResetModel() {}
    async DeleteClanEvent(_, _) {
      this.m_mapExistingEvents.has(_) &&
        (this.m_mapExistingEvents.get(_).deleteInProgress = !0);
      let _ = new URLSearchParams();
      _.append(`sessionid`, _()), _.append(`bDelete`, `1`), _.append(`gid`, _);
      let _ = await _.default.post(
        _.COMMUNITY_BASE_URL +
          `/gid/` +
          _.ConvertTo64BitString() +
          `/ajaxcreateupdatedeletepartnerevents/`,
        _,
      );
      return this.RemoveGIDFromList(_, _), _.data;
    }
    RemoveGIDFromList(_, _) {
      if (
        (this.m_mapExistingEvents.delete(_),
        this.m_mapClanToGIDs.has(_.GetAccountID()))
      ) {
        let _ = this.m_mapClanToGIDs.get(_.GetAccountID()),
          _ = _.indexOf(_);
        _ >= 0 && _.splice(_, 1);
      }
    }
    FlushEventFromCache(_, _) {
      if (
        (_ &&
          this.m_mapExistingEvents.has(_) &&
          ((_ ||= this.m_mapExistingEvents.get(_).AnnouncementGID),
          this.m_mapExistingEvents.delete(_)),
        _ &&
          (this.m_mapExistingEvents.has(`old_announce_` + _) &&
            this.m_mapExistingEvents.delete(_ + _),
          this.m_mapAnnouncementBodyToEvent.has(_)))
      ) {
        let _ = this.m_mapAnnouncementBodyToEvent.get(_);
        _ &&
          this.m_mapExistingEvents.has(_) &&
          this.m_mapExistingEvents.delete(_),
          this.m_mapAnnouncementBodyToEvent.delete(_);
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
      _,
      _,
      _,
      _,
      _,
      _ = !1,
    ) {
      let _ = _(_ ? 0 : _(_.LANGUAGE)),
        _ = {
          appid: _,
          clan_accountid: _ ? _.GetAccountID() : void 0,
          announcement_gid: _,
          event_gid: _,
          lang_list: _,
          last_modified_time: _ || 0,
          origin: self.origin,
          for_edit: _,
          only_summary: this.m_bOnlySummary,
        },
        _ = null,
        _ = null;
      if (_) {
        let _ = _();
        _ === `community`
          ? ((_ = _.COMMUNITY_BASE_URL),
            (_ += _ ? `gid/` + _.ConvertTo64BitString() : `ogg/` + _),
            (_ += `/`))
          : (_ =
              _ === `partner`
                ? _.PARTNER_BASE_URL + `sales/`
                : _.STORE_BASE_URL + `events/`),
          (_ += `ajaxgetpartnereventforedit`),
          (_ = {
            params: _,
            withCredentials: !0,
          });
      } else
        (_ = _.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (_ = {
            params: _,
            withCredentials: !1,
          });
      try {
        let _ = await _.default.get(_, _);
        if (_.data.success !== 1) return;
        let _ = _.data.event,
          _ = _(_);
        if (
          !this.m_mapExistingEvents.has(_) ||
          (this.m_mapExistingEvents.get(_).rtime32_last_modified ?? 0) <
            (_.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(_).rtime32_moderator_reviewed ?? 0) <
            (_.rtime_mod_reviewed ?? 0)
        ) {
          _(_.clan_steamid, `ClanSteamID is missing from data we received`);
          let _ = new _(_.clan_steamid);
          this.InsertEventModelFromClanEventData(_, _);
        }
        return this.m_mapExistingEvents.get(_);
      } catch {
        return;
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
      _,
      _,
      _,
      _,
      _,
      _,
    ) {
      if (_ && this.m_mapExistingEvents.has(_))
        return this.m_mapExistingEvents.get(_);
      if (_) {
        if (this.m_mapExistingEvents.has(`old_announce_` + _))
          return this.m_mapExistingEvents.get(_ + _);
        if (this.m_mapAnnouncementBodyToEvent.has(_)) {
          let _ = this.m_mapAnnouncementBodyToEvent.get(_);
          if (_ && this.m_mapExistingEvents.has(_))
            return this.m_mapExistingEvents.get(_);
        }
      }
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromAnnoucementGID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        _,
        void 0,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        void 0,
        void 0,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromClanEventGID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        _,
        _,
        void 0,
        _,
        _,
      );
    }
    async LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        void 0,
        _,
        void 0,
        _,
        _,
      );
    }
    async LoadPartnerEventGeneric(_, _, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadHiddenPartnerEvent(_, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        void 0,
        _,
        void 0,
        0,
        !0,
      );
    }
    async LoadHiddenPartnerEventByAnnouncementGID(_, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        void 0,
        void 0,
        _,
        0,
        !0,
      );
    }
    async HintLoadImportantUpdates() {
      let _ = _(36e5);
      if (_ != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = _;
        let _ = {
            page: 1,
            numPerPage: 500,
            includeAnnouncements: !1,
          },
          _ = _.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          _ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          });
        _.data.apps &&
          _.data.apps.length > 0 &&
          _(() => {
            let _ = new Map(_.data.apps?.map((_) => [_.appid, new _(_)]));
            this.m_mapUpdatedApps = _;
          });
      }
      return this.m_mapUpdatedApps;
    }
    GetAppImportantUpdate(_) {
      return (
        this.HintLoadImportantUpdates().catch((_) => {
          console.log(`UpdatedApps failed to load: `, _.response?.data);
        }),
        this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(_)
      );
    }
    async LoadClanEventLocalizationFromAnnouncementGID(_, _) {
      let _ =
        _.COMMUNITY_BASE_URL +
        `gid/` +
        _.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        _;
      return (await _.default.get(_)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(_, _, _) {
      let _ = [],
        _ = _.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        _ = _(_(_.LANGUAGE)),
        _ = null,
        _ = null;
      if (_) {
        let _ = [];
        _.forEach((_) => {
          this.m_mapExistingEvents.has(_)
            ? _.push(this.m_mapExistingEvents.get(_))
            : _.push(_);
        }),
          _.sort(),
          (_ = _);
      }
      if (_) {
        let _ = [];
        _.forEach((_) => {
          if (
            this.m_mapAnnouncementBodyToEvent.has(_) &&
            this.m_mapAnnouncementBodyToEvent.get(_) &&
            this.m_mapExistingEvents.has(
              this.m_mapAnnouncementBodyToEvent.get(_),
            )
          ) {
            let _ = this.m_mapAnnouncementBodyToEvent.get(_);
            if (_) {
              let _ = this.m_mapExistingEvents.get(_);
              _ && _.push(_);
            }
          } else _.push(_);
        }),
          _.sort(),
          (_ = _);
      }
      if (!_ && !_) return _;
      let _ = [];
      for (; (_?.length ?? 0) > 0 || (_?.length ?? 0) > 0; ) {
        let _ = {
          event_gids:
            (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(`,`) : void 0,
          lang_list: _,
          origin: self.origin,
        };
        _.push(
          _.default.get(_, {
            params: _,
            cancelToken: _ ? _.token : void 0,
          }),
        );
      }
      try {
        let _ = await Promise.all([..._]),
          _ = 0;
        _(() =>
          _.forEach((_) => {
            if (_ && _.data && _.data.events)
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_, _);
                }
                _.push(this.m_mapExistingEvents.get(_));
              }
            else {
              let _ = _(_);
              console.error(
                `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error ` +
                  _.strErrorMsg,
                _,
              );
            }
            _ += 1;
          }),
        );
      } catch (_) {
        let _ = _(_);
        console.error(
          `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error ` +
            _.strErrorMsg,
          _,
        );
      }
      return _;
    }
    async SavePartnerEventSaleAssets(_, _, _, _) {
      let _ = null;
      if (!this.m_mapExistingEvents.has(_)) return !1;
      try {
        let _ = `${_.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${_}`,
          _ = new FormData();
        _.append(`sessionid`, _()),
          _.append(`gidclanevent`, _),
          _.append(`json`, JSON.stringify(_)),
          _.append(`pageStyles`, JSON.stringify(_));
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
        if (_?.data?.success == 1) {
          let _ = this.m_mapExistingEvents.get(_);
          if (_ && _.jsondata) {
            for (let _ in _)
              if (_.hasOwnProperty(_) && _[_]) {
                let _ = _,
                  _ = _[_];
                _ !== void 0 && _ !== void 0 && (_.jsondata[_] = _);
              }
          }
          return this.GetPartnerEventChangeCallback(_).Dispatch(_), !0;
        }
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CPartnerEventStore.SavePartnerEventSaleAssets failed: ` +
            _?.strErrorMsg,
          _,
        ),
        !1
      );
    }
    BIsSummaryOnlyStore() {
      return this.m_bOnlySummary;
    }
  };
_([_], _.prototype, `m_mapExistingEvents`, void 0),
  _([_], _.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  _([_], _.prototype, `m_mapClanToGIDs`, void 0),
  _([_], _.prototype, `m_mapAppIDToGIDs`, void 0),
  _([_], _.prototype, `m_mapUpdatedApps`, void 0),
  _([_], _.prototype, `Init`, null),
  _([_], _.prototype, `GetPartnerEventChangeCallback`, null),
  _([_], _.prototype, `RegisterClanEvents`, null),
  _([_], _.prototype, `InsertEventModelFromClanEventData`, null),
  _([_], _.prototype, `DeleteClanEvent`, null),
  _([_], _.prototype, `RemoveGIDFromList`, null),
  _([_], _.prototype, `FlushEventFromCache`, null),
  _([_], _.prototype, `SavePartnerEventSaleAssets`, null);
var _ = new _();
_(`g_PartnerEventStore`, _);
var _ = new _(!0);
_(`g_PartnerEventSummaryStore`, _);
function _(_, _, _ = !1) {
  let [_, _] = (0, _.useState)(() => _.GetClanEventModel(_)),
    [_, _] = (0, _.useState)(!0),
    _ = (0, _.useMemo)(() => _.InitFromClanID(_, _.EUNIVERSE), [_]);
  return (
    (0, _.useEffect)(() => {
      !_ &&
        _ > 0 &&
        (_.Init(),
        _.LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, 0, _)
          .then(_)
          .finally(() => _(!1)));
    }, [_, _, _, _, _]),
    _(_ ? _.GetPartnerEventChangeCallback(_) : void 0, _),
    {
      eventModel: _,
      bLoading: _,
    }
  );
}
function _() {
  return {
    fnSaveSaleAssets: _.SavePartnerEventSaleAssets,
  };
}
export { _, _, _, _, _, _, _, _ };
