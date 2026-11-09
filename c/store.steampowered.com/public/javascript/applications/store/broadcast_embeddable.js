import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _ } from "./salestoreitemutils.js";
import { _ } from "./eventdevfeaturestore.js";
import "./steammessages_experiments_pb.js";
import { _ } from "./partnereventstore.js";
import { _, _, _, _, _, _, _, _ } from "./main.js";
import { _ } from "./broadcastwatchstore.js";
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapBroadcasterSteamIDToEvents = new Map();
  m_mapBroadcasterSteamIDData = new Map();
  static GetBBCodeParam(_, _, _ = ``) {
    let _ = RegExp(`\\W${_}\\W*=\\W*\\"(.*?)\\"`, `gmi`).exec(_);
    return _ ? _[1] : _;
  }
  static ParseCalendarEventPresentersFromText(_) {
    let _ = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
      _ = [];
    for (;;) {
      let _ = _.exec(_);
      if (_ === null) break;
      let _ = _[1],
        _ = _[2],
        _ = _.GetBBCodeParam(_, `steamid`),
        _ = {
          steamID: _ ? new _(_) : void 0,
          name: _.GetBBCodeParam(_, `name`),
          title: _.GetBBCodeParam(_, `title`),
          company: _.GetBBCodeParam(_, `company`),
          photo: _.GetBBCodeParam(_, `photo`),
          bio: _,
        };
      _.push(_);
    }
    return _;
  }
  static ParseEventModelPresenters(_, _) {
    let _ = _.GetDescriptionWithFallback(_) ?? ``;
    return _.ParseCalendarEventPresentersFromText(_);
  }
  static ParseEventAppReferencesFromText(_) {
    let _ = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
      _ = new Set();
    for (;;) {
      let _ = _.exec(_);
      if (_ === null) break;
      let _ = _[1];
      _.add(Number(_));
    }
    return _;
  }
  static ParseEventModelAppReferences(_, _) {
    let _ = _.GetDescriptionWithFallback(_) ?? ``,
      _ = _.ParseEventAppReferencesFromText(_);
    if (_.jsondata?.referenced_appids)
      for (let _ of _.jsondata.referenced_appids) _.add(_);
    return _;
  }
  async BuildBroadcasterSteamIDToActiveEventMap(_) {
    let _ = _.GetTimeNowWithOverride(),
      _ = _.GetCalendarItemsInTimeRange(_ - 3600, _);
    for (let _ of _.rgCalendarItems)
      _.QueueLoadPartnerEvent(_.clanid, _.unique_id);
    let _ = _.rgCalendarItems.map((_) =>
        _.LoadPartnerEventFromClanEventGIDAndClanSteamID(
          _.InitFromClanID(_.clanid, _.EUNIVERSE),
          _.unique_id,
          0,
        ),
      ),
      _ = await Promise.all(_),
      _ = new Map();
    for (let _ of _)
      if (_ && !(_.endTime && _.endTime < _))
        for (let _ of _.GetBroadcastWhitelistAsSteamIDs()) {
          let _ = _.get(_);
          _ ? _.push(_) : _.set(_, [_]);
        }
    return _;
  }
  IsBroadcasterAlreadyBound(_, _) {
    let _ = this.m_mapBroadcasterSteamIDToEvents.get(_) ?? [],
      _ = _.length;
    if ((_ ? _.length : 0) != _) return !1;
    for (let _ = 0; _ < _; _++) if (_[_] != _[_].GID) return !1;
    return !0;
  }
  static BuildSteamIDToPresenterMapFromEventList(_, _) {
    let _ = new Map();
    for (let _ of _) {
      if (!_) continue;
      let _ = _.ParseEventModelPresenters(_, _);
      for (let _ of _) _.steamID && _.set(_.steamID.ConvertTo64BitString(), _);
    }
    return _;
  }
  RemoveCachedDataIfNotInMap(_) {
    let _ = [];
    (this.m_mapBroadcasterSteamIDToEvents.forEach((_, _) => {
      _.has(_) || _.push(_);
    }),
      _.forEach((_) => {
        (this.m_mapBroadcasterSteamIDData.delete(_),
          this.m_mapBroadcasterSteamIDToEvents.delete(_));
      }));
  }
  static BuildAppIDRefsForEventList(_, _) {
    let _ = new Set();
    for (let _ of _)
      _.ParseEventModelAppReferences(_, _).forEach((_) => _.add(_));
    return Array.from(_);
  }
  UpdateCachedDataFromEvents(_, _) {
    _.forEach((_, _) => {
      if (this.IsBroadcasterAlreadyBound(_, _)) return;
      let _ = {
        m_mapPresenters: _.BuildSteamIDToPresenterMapFromEventList(_, _),
        m_rgAppIDs: _.BuildAppIDRefsForEventList(_, _),
      };
      (this.m_mapBroadcasterSteamIDData.set(_, _),
        this.m_mapBroadcasterSteamIDToEvents.set(
          _,
          _.map((_) => _.GID ?? ``),
        ));
    });
  }
  async SynchronizeEventsWithBroadcasts(_, _) {
    let _ = await this.BuildBroadcasterSteamIDToActiveEventMap(_);
    (this.RemoveCachedDataIfNotInMap(_), this.UpdateCachedDataFromEvents(_, _));
  }
  GetPresenterMapForBroadcasterSteamID(_) {
    return this.m_mapBroadcasterSteamIDData.get(_)?.m_mapPresenters;
  }
  GetAppIDListForBroadcasterSteamID(_) {
    return this.m_mapBroadcasterSteamIDData.get(_)?.m_rgAppIDs;
  }
};
_([_], _.prototype, `m_mapBroadcasterSteamIDData`, void 0);
var _ = new _(),
  _ = _(_()),
  _ = !1;
function _(_) {
  return !!(_ && _.thumbnail_http_address);
}
function _(_, _) {
  if (_ || _) {
    let _ = _ || _;
    return !!(_ && _.Get().BIsAppStreaming(_));
  }
  return !1;
}
var _ = class _ {
  constructor() {
    _(this);
  }
  static s_GlobalStore;
  m_inFlightRequests = new Map();
  m_lookupKeyToEmbedStreamDef = new Map();
  m_lookupStreams = new Map();
  m_playReadyStream = new Map();
  m_bMapHasStartedVideo = new Map();
  m_mapBroadcastChecked = new Map();
  m_pageChatStatus = `hide`;
  m_streamChatStatus = `hide`;
  m_bUserChatExpanded = void 0;
  m_bUserPreferenceHideBroadcastByDefault = void 0;
  m_bCollapsed = void 0;
  m_setStreamChangedListeners = new Set();
  m_bUseFakeData = !1;
  m_onLoadContextCall = new Map();
  BHasStreams(_) {
    let _ = this.GetStreams(_);
    return !!(_ && _.length > 0);
  }
  AddCallbackOnNewContext(_, _, _) {
    this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(_), {
      name: _,
      fnCallback: _,
    });
  }
  ClearCallbackOnNewContext(_) {
    this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(_), null);
  }
  GetPlayReadyStream(_) {
    let _ = this.GetStreamsLookupKeyFromDef(_);
    return this.m_playReadyStream.get(_);
  }
  BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
    return !!this.m_bUserPreferenceHideBroadcastByDefault;
  }
  BIsEmbeddedStreamCollapsed() {
    return !!this.m_bCollapsed;
  }
  SetEmbeddedStreamCollapsed(_) {
    this.m_bCollapsed != _ && (this.m_bCollapsed = _);
  }
  GetConcurrentStreams(_) {
    let _ = this.GetStreams(_);
    return _ ? _.filter((_) => _(_)).length : 0;
  }
  GetChatVisibility() {
    return this.m_pageChatStatus === `remove` ||
      this.m_streamChatStatus === `remove`
      ? `remove`
      : this.m_bUserChatExpanded === void 0
        ? this.m_pageChatStatus === `show`
          ? `show`
          : this.m_pageChatStatus === `hide` ||
              this.m_streamChatStatus === `hide`
            ? `hide`
            : `show`
        : this.m_bUserChatExpanded
          ? `show`
          : `hide`;
  }
  ToggleChatVisibility() {
    let _ = this.GetChatVisibility();
    _ !== `remove` && (this.m_bUserChatExpanded = _ === `hide`);
  }
  DebugDumpContextAndAvailableContext(_) {
    (console.log(`Requested context`, this.GetStreamsLookupKeyFromDef(_)),
      console.log(`Available context count: `, this.m_lookupStreams.size),
      this.m_lookupStreams.forEach((_, _) => {
        console.log(_, _.length);
      }));
  }
  GetStreams(_) {
    let _ = this.GetStreamsLookupKeyFromDef(_);
    return this.m_lookupStreams.get(_);
  }
  GetBroadcastURL(_) {
    let _;
    return (
      (_ = _.steamid
        ? new _(_.steamid)
        : _.InitFromAccountID(_.accountid, _.EUNIVERSE)),
      _.COMMUNITY_BASE_URL + `broadcast/watch/` + _.ConvertTo64BitString()
    );
  }
  BIsAppStreaming(_) {
    let _ = !1;
    return (
      this.m_lookupStreams.forEach((_) => {
        _ ||=
          !!_ &&
          _.some((_) => _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === _);
      }),
      _
    );
  }
  GetStreamsForAppID(_) {
    let _ = [];
    return (
      this.m_lookupStreams.forEach((_) => {
        _?.forEach((_) => {
          _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID === _ && _.push(_);
        });
      }),
      _
    );
  }
  AddStreamChangedListener(_) {
    this.m_setStreamChangedListeners.add(_);
  }
  RemoveStreamChangedListener(_) {
    this.m_setStreamChangedListeners.delete(_);
  }
  async LoadBIsEmbeddedBroadcastHidden(_) {
    if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
      let _ = _(`broadcastuser`, `application_config`);
      if (!_)
        try {
          let _ =
            _.STORE_BASE_URL + `broadcast/ajaxgetuserbroadcastpreferences`;
          _ = (
            await _.default.get(_, {
              params: {},
              cancelToken: _.token,
            })
          ).data;
        } catch (_) {
          (console.log(`LoadBIsEmbeddedBroadcastHidden: ` + _(_).strErrorMsg),
            (_ = {
              bHideStoreBroadcast: !1,
            }));
        }
      _(() => {
        ((this.m_bUserPreferenceHideBroadcastByDefault = _.bHideStoreBroadcast),
          (this.m_bCollapsed = _.bHideStoreBroadcast));
      });
    }
    return this.BIsEmbeddedBroadcastHiddenByDefaultUserSettings();
  }
  async SetupEmbeddableVOD(_, _) {
    ((this.m_bUseFakeData = !1),
      (this.m_streamChatStatus = `remove`),
      _(!!_.nAppIDVOD, `SetupEmbeddableVOD requires a VOD appid`),
      await _.Get().QueueAppRequest(_.nAppIDVOD, {
        include_assets: !0,
        include_trailers: !0,
      }));
    let _ = _.Get().GetApp(_.nAppIDVOD),
      _ = new _();
    ((_.accountid = 0),
      (_.nAppIDVOD = _.nAppIDVOD),
      (_.default_selection_priority = _.k_ePrimary),
      (_.current_selection_priority = _.k_ePrimary),
      (_.thumbnail_http_address = _?.GetAssets()?.GetHeaderURL() || ``),
      (_.title = _?.GetName() || ``));
    let _ = this.GetStreams(_);
    if (
      (_(
        !!_,
        `SetupEmbeddableVOD called before the streams loaded`,
        _.nAppIDVOD,
      ),
      _.unshift(_),
      _)
    ) {
      let _ = this.GetStreamsLookupKeyFromDef(_);
      this.m_playReadyStream.set(_, _);
    }
  }
  async HintLoadEmbeddablePreviewStreams(_) {
    let _ = {
      eventid: _.event ? _.event.GID : void 0,
      previewAccounts:
        _.bIsPreview && _.accountIDs
          ? _.accountIDs.slice().sort().join(`,`)
          : void 0,
    };
    try {
      let _ = await _.default.get(
        _.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpreview`,
        {
          params: _,
        },
      );
      return this.HandleHintLoadBroadcastResponse(_, _.data);
    } catch (_) {
      let _ = _(_);
      console.error(
        `HintLoadEmbeddablePreviewStreams hit error loading: ` + _.strErrorMsg,
        _,
      );
    }
    return [];
  }
  async HintLoadEmbeddableStreams(_) {
    let _ = this.MapEmbeddableStreamToRequest(_),
      _ = this.GetStreamsLookupKeyFromParam(_),
      _ = this.m_inFlightRequests.get(_);
    return (
      _ ||
        (this.m_lookupKeyToEmbedStreamDef.set(_, _),
        (_ = this.InternalHintLoadEmbeddableStreams(_, _)),
        this.m_inFlightRequests.set(_, _)),
      _
    );
  }
  async InternalHintLoadEmbeddableStreams(_, _) {
    let _ = _(`broadcast_available_for_page`, `application_config`);
    if (_(_)) return this.HandleHintLoadBroadcastResponse(_, _);
    try {
      let _ = await _.default.get(
        _.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpage`,
        {
          params: _,
        },
      );
      return this.HandleHintLoadBroadcastResponse(_, _.data);
    } catch (_) {
      let _ = _(_);
      console.error(
        `HintLoadEmbeddableStreams hit error loading: ` + _.strErrorMsg,
        _,
      );
    }
    return [];
  }
  async HandleHintLoadBroadcastResponse(_, _) {
    ((this.m_bUseFakeData = !1),
      _.bIsPreview &&
        (_?.filtered?.length > 0
          ? (_(!!_.event, `Broadcast preview requires an event`),
            this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
              _.event,
              _.filtered,
            ))
          : ((_ = {
              filtered: [{}],
              success: 1,
              total_count: 1,
              err_msg: ``,
              broadcast_chat_visibility: `hide`,
            }),
            (this.m_bUseFakeData = !0))),
      _.broadcast_chat_visibility &&
        (this.m_pageChatStatus = _.broadcast_chat_visibility));
    let _ = [];
    _(() => {
      _.filtered.forEach((_) => {
        _.steamid ||= _.InitFromAccountID(
          _.accountid,
          _.EUNIVERSE,
        ).ConvertTo64BitString();
        let _ = _.GetOrCreateBroadcastInfo(_.steamid),
          _ = _.appid ? Number(_.appid) : 7;
        ((_.m_nAppID = _),
          (_.m_strAppId = `` + _),
          _.current_selection_priority === void 0 &&
            (_.current_selection_priority = _.default_selection_priority),
          _ != 7 && _.push(_));
      });
    });
    let _ = this.GetStreamsLookupKeyFromDef(_);
    if (
      (this.m_lookupStreams.set(_, _.filtered), this.m_onLoadContextCall.has(_))
    ) {
      let _ = this.m_onLoadContextCall.get(_);
      _ && _.fnCallback();
    }
    let _ = this.GetStreams(_) ?? [];
    return (await this.AutoStartVideoStream(_, _), _);
  }
  ExtractBroadcastPrioritiesFromPartnerEventForPreview(_, _) {
    let _ = Array.from(_.jsondata.broadcast_whitelist ?? []),
      _ = Array.from(_.jsondata.broadcast_priority ?? []),
      _ = new Map();
    for (let _ = 0; _ < _.length && !(_ >= _.length); _++) _.set(_[_], _(_[_]));
    _.forEach((_) => {
      let _ = Number(_.accountid);
      _.has(_) && (_.current_selection_priority = _.get(_));
    });
  }
  async AutoStartVideoStream(_, _) {
    let _ = this.GetStreamsLookupKeyFromDef(_);
    if (this.m_bMapHasStartedVideo.get(_)) return null;
    if (this.m_bUseFakeData) {
      if (!this.m_playReadyStream.get(_)) {
        let _ = {
          accountid: 0,
          thumbnail_http_address: ``,
          default_selection_priority: _.k_eGeneral,
          current_selection_priority: _.k_eGeneral,
        };
        this.m_playReadyStream.set(_, _);
      }
      return this.m_playReadyStream;
    }
    return this.PlayFromAvailableStreams(_, _);
  }
  async PlayFromAvailableStreams(_, _, _ = !1) {
    let _ = new Set();
    for (;;) {
      let _ = _.filter((_) => !_.has(_) && (!_ || !_.nAppIDVOD)),
        _ = this.GetAutoStartStream(_);
      if (!_) return null;
      if (await this.AttemptToPlayStream(_, _)) return _;
      _.add(_);
    }
  }
  async AttemptToPlayStream(_, _) {
    let _ = this.GetStreamsLookupKeyFromDef(_),
      _ = _.accountid ?? 0;
    if (
      (this.m_bMapHasStartedVideo.set(_, !0),
      this.m_mapBroadcastChecked.has(_) ||
        this.m_mapBroadcastChecked.set(
          _,
          this.InternalAttemptToPlayStream(_, _),
        ),
      _.nAppIDVOD)
    )
      this.m_playReadyStream.set(_, _);
    else {
      let _ = await this.m_mapBroadcastChecked.get(_);
      if (_?.success == 1) {
        ((_.steamid = _.steamid),
          this.m_playReadyStream.set(_, _),
          (this.m_streamChatStatus =
            this.GetConcurrentStreams(_) > 1
              ? `hide`
              : (_.broadcast_chat_visibility ?? null)),
          this.m_setStreamChangedListeners.forEach((_) => _(_)));
        let _ = _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID;
        _(_, 1, _.snr);
      } else return null;
    }
    return _;
  }
  async InternalAttemptToPlayStream(_, _) {
    this.GetStreamsLookupKeyFromDef(_);
    try {
      let _ = _.STORE_BASE_URL + `broadcast/ajaxcheckbroadcast`,
        _ = {
          broadcastaccountid: _.accountid,
          viewer_token: _.GetViewerToken(),
          origin: self.origin,
        };
      return (
        await _.default.get(_, {
          params: _,
        })
      ).data;
    } catch (_) {
      let _ = _(_);
      console.error(`Broadcast.AttemptToPlayStream: ` + _.strErrorMsg, _);
    }
    return null;
  }
  GetAutoStartStream(_) {
    if (!_) return null;
    let _ = _.filter((_) => _(_)),
      _ = _.reduce((_, _) => Math.max(_, _(_)), 0),
      _ = _.filter((_) => _(_) === _);
    return _.length === 0 ? null : _[Math.floor(Math.random() * _.length)];
  }
  MapEmbeddableStreamToRequest(_) {
    return {
      appid: _.appid,
      promotionName: _.bIsPreview ? `preview` : _.promotionName,
      clanid: _.clanid
        ? _.clanid
        : _.event
          ? _.event.clanSteamID.GetAccountID()
          : void 0,
      listid: _.listid,
      subid: _.subid,
      bundleid: _.bundleid,
      eventid: _.event ? _.event.GID : void 0,
      previewAccounts:
        _.bIsPreview && _.accountIDs
          ? _.accountIDs.slice().sort().join(`,`)
          : void 0,
      test: _,
      _: _.COUNTRY,
      _: _.LANGUAGE,
      hubtype: _.event?.GetContentHubType(),
      hubcategory: _.event?.GetContentHubCategory(),
      hubtagid: _.event?.GetContentHubTag(),
      tabuniqueid: _.tabuniqueid,
      tabfilter: _.tabfilter,
      rt_now_override_test: _.BHasTimeOverride()
        ? _.GetTimeNowWithOverride()
        : void 0,
    };
  }
  GetStreamsLookupKeyFromDef(_) {
    return this.GetStreamsLookupKeyFromParam(
      this.MapEmbeddableStreamToRequest(_),
    );
  }
  GetStreamsLookupKeyFromParam(_) {
    return JSON.stringify(_);
  }
  static Get() {
    return (
      _.s_GlobalStore || ((_.s_GlobalStore = new _()), _.s_GlobalStore.Init()),
      _.s_GlobalStore
    );
  }
  Init() {}
};
(_([_], _.prototype, `m_lookupStreams`, void 0),
  _([_], _.prototype, `m_playReadyStream`, void 0),
  _([_], _.prototype, `m_pageChatStatus`, void 0),
  _([_], _.prototype, `m_streamChatStatus`, void 0),
  _([_], _.prototype, `m_bUserChatExpanded`, void 0),
  _([_], _.prototype, `m_bUserPreferenceHideBroadcastByDefault`, void 0),
  _([_], _.prototype, `m_bCollapsed`, void 0),
  _([_], _.prototype, `HintLoadEmbeddablePreviewStreams`, null),
  _([_], _.prototype, `AttemptToPlayStream`, null));
function _(_) {
  return _.current_selection_priority || _.k_eGeneral;
}
function _(_) {
  _.sort((_, _) =>
    _(_) == _(_)
      ? _.viewer_count == _.viewer_count
        ? (_.accountid ?? 0) - (_.accountid ?? 0)
        : (_.viewer_count ?? 0) - (_.viewer_count ?? 0)
      : _(_) - _(_),
  );
}
async function _(_, _, _) {
  if (_ > 0 && _ != 7 && _) {
    let _ = new URLSearchParams();
    (_.append(`page_action`, `` + _),
      _.append(`snr`, _),
      _.default.post(
        _.STORE_BASE_URL + `ajaxreportproductaction/` + _ + `/`,
        _,
      ));
  }
}
var _ = new _();
