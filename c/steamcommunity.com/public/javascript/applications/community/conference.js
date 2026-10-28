import { _, _ } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { _, _, _, _, _, _, _, _ } from "./libraries.js?contenthash=eLY4-d-j";
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
} from "./salebanner.js?contenthash=Kgzkt2UP";
import { _ } from "./eventinfinitescrollmodal.js?contenthash=C55rGRmB";
import { _ } from "./broadcast_embeddable.js?contenthash=BbU1tSfW";
import { _, _ } from "./clanstore.js?contenthash=C3YK0fn0";
import { _ } from "./broadcastplayer.js?contenthash=C1DpdUZK";
import { _ } from "./throbber.js?contenthash=COAox7wG";
import { _, _, _, _, _, _ } from "./emoticonbutton.js?contenthash=Du6540NS";
import { _, _, _, _, _ } from "./apppartnereventspage.js?contenthash=CVvLPBJR";
import { _, _, _, _, _, _, _ } from "./carouselarrows.js?contenthash=BqkMhyR4";
import { _ } from "./ajaxhooks.js?contenthash=DrP4Usdq";
import { _ } from "./historyutils.js?contenthash=C2OBI7UD";
import { _ } from "./tabbar.js?contenthash=DcrOUU8j";
import { _, _, _, _, _, _ } from "./localdateandtime.js?contenthash=CpVlqQ_-";
import { _ } from "./numberformats.js?contenthash=DiRCIxm1";
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
} from "./main.js?contenthash=B3VTzWgT";
import { _, _ } from "./broadcast_embeddable.module.js?contenthash=DH6WpcLe";
import { _, _ } from "./broadcast_embeddable2.js?contenthash=C7OuAjkk";
import { _, _, _ } from "./faqbbcode.js?contenthash=CJ-iofS0";
import { _ } from "./questions.js?contenthash=CYLuzfOS";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./eventimpressiontracker.js?contenthash=B2s03S5E";
var _ = _(_()),
  _ = class _ {
    m_mapConferences = _.map();
    GetConferenceInfo(_) {
      return this.m_mapConferences.get(_);
    }
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    async Init() {
      let _ = _(`conferenceinfo`, `application_config`);
      if (this.ValidateStoreDefault(_)) {
        let _ = _(_.LANGUAGE),
          _ = _(_.clan_faq_about_page),
          _ = _.Get().GetFAQPublishedContent(_, _),
          _ = {
            strConferenceID: _.vanity,
            rtStartTime: _.start_rtime,
            rtEndTime: _.end_rtime,
            clanSteamID: new _(_.event_group_steamid),
            broadcastSteamID: new _(_.broadcast_steamid),
            bPartnerOnly: _.partner_only,
            faqAboutPage: _,
            strLocalizedLogos: null,
            strLocalizedMobileLogos: null,
            globalQandASessionID: _.global_qanda_session_id,
            youtubeVideoID: _.youtubeVideoID,
          };
        this.m_mapConferences.set(_.vanity, _);
        let _ = await _(_.localized_logo, _, _?.timestamp),
          _ = await _(_.localized_mobile_logo, _, _?.timestamp);
        this.m_mapConferences.set(_.vanity, {
          ..._,
          strLocalizedLogos: typeof _ == `string` ? [_] : _,
          strLocalizedMobileLogos: typeof _ == `string` ? [_] : _,
        });
      }
    }
    ValidateStoreDefault(_) {
      let _ = _;
      return _ && typeof _ == `object`
        ? typeof _.event_group_steamid == `string` &&
            typeof _.start_rtime == `number` &&
            typeof _.end_rtime == `number`
        : !1;
    }
  },
  _ = `rSAA9RImaO0-`,
  _ = _();
function _(_) {
  let { conferenceInfo: _ } = _,
    _ = _.broadcastSteamID.ConvertTo64BitString();
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      steamIDBroadcast: _,
      watchLocation: 5,
      bStartMuted: !0,
    }),
  });
}
function _(_) {
  let { conferenceInfo: _ } = _,
    _ = _(() => _.broadcastSteamID.ConvertTo64BitString());
  return (0, _.jsx)(`div`, {
    className: _(_, _.className ? `${_.className}` : ``),
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        emoticonStore: _,
        watchLocation: 5,
        steamID: _,
        globalChat: !0,
        bPartnerMemberOnlyChat: _.bPartnerOnly,
        bInvertLayout: !0,
      }),
    }),
  });
}
function _(_) {
  let { conferenceInfo: _ } = _,
    [_, _] = _.useState(!1);
  return _
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            steamIDBroadcast: _.broadcastSteamID.ConvertTo64BitString(),
            OnPreventPopup: () => _(!0),
          }),
          (0, _.jsx)(_, {
            conferenceInfo: _,
          }),
        ],
      });
}
function _(_) {
  let { conferenceInfo: _ } = _;
  return null;
}
var _ = class _ {
    m_inFlight = null;
    async LoadInitialCalendarData(_, _) {
      return (
        (this.m_inFlight ||= this.InternalLoadInitialCalendarData(_, _)),
        this.m_inFlight
      );
    }
    async InternalLoadInitialCalendarData(_, _) {
      _({
        collectionid: _,
        bSectionByDay: !0,
        rtCalendarEnd: _,
      });
      let _ = _(),
        _ = _(`conference_calendar`, `application_config`);
      _ && (await _.RegisterCalendarEventsAndModels(_)),
        _.SetFilteredView((_) => !0);
    }
    static m_singleton;
    static Get() {
      return (_.m_singleton ||= new _()), _.m_singleton;
    }
    constructor() {}
  },
  _ = _({
    AppBannerLogo: () => _,
    AppIcon: () => _,
    CarouselMode: () => _,
    ClanSource: () => _,
    CommentIcon: () => _,
    CommentIconCtn: () => _,
    CoverImageCtn: () => _,
    DateAndSourceLine: () => _,
    DateAndTime: () => _,
    EnableHovers: () => _,
    EventCapsuleCtn: () => _,
    EventName: () => _,
    EventSubTitle: () => _,
    EventSummaryDefault: () => _,
    EventTitleCtn: () => _,
    EventType10: () => _,
    EventType11: () => _,
    EventType12: () => _,
    EventType13: () => _,
    EventType14: () => _,
    EventType15: () => _,
    EventType23: () => _,
    EventType28: () => _,
    EventType35: () => _,
    EventTypeAndDateCtn: () => _,
    FallbackImage: () => _,
    Footer: () => _,
    FooterRightSide: () => _,
    FooterStat: () => _,
    FutureDateText: () => _,
    GameCapsuleCtn: () => _,
    GameShortDescription: () => _,
    GameSource: () => _,
    GameTitleContainer: () => _,
    HasVideo: () => _,
    LeaveRoomForReminder: () => _,
    LiveBroadcastPreview: () => _,
    LiveNow: () => _,
    LiveText: () => _,
    LoadingTile: () => _,
    MainContentContainer: () => _,
    OnlyIcon: () => _,
    Options: () => _,
    PastDateText: () => _,
    PatchIconCtn: () => _,
    RateIcon: () => _,
    RecommendedSource: () => _,
    ReminderContainer: () => _,
    SmallAppName: () => _,
    Source: () => _,
    SourceList: () => _,
    SourceRecommended: () => _,
    SubTitleShown: () => _,
    Tile: () => _,
    TileBackgroundImage: () => _,
    TileContainer: () => _,
    TileCoverImagePlayable: () => _,
    TileCoverLiveIcon: () => _,
    TileImage: () => _,
    TileTextAppName: () => _,
    TileTextCategoryType: () => _,
    TileTextContainer: () => _,
    TileTextHeader: () => _,
    TileVideoIcon: () => _,
    TileViewerCount: () => _,
    UpcomingMode: () => _,
    VideoPlayerReady: () => _,
    Vote_LimitedUser: () => _,
    Vote_Negative: () => _,
    Vote_NotLoggedIn: () => _,
    Vote_Positive: () => _,
    Vote_Ready: () => _,
    YoutubePreviewImage: () => _,
    default: () => _,
    narrowWidth: () => _,
  }),
  _ = `500px`,
  _ = `Zlty4OIYdk8-`,
  _ = `go8QhZVoiDg-`,
  _ = `C2L2kTp8KYY-`,
  _ = `cJRhUD4vyks-`,
  _ = `JTFHmASEfjQ-`,
  _ = `lSYF-snjG-M-`,
  _ = `NH4KbTPWsVo-`,
  _ = `oKFVegN0DBM-`,
  _ = `b6-KxfcdLaA-`,
  _ = `fTNya0ypDaA-`,
  _ = `xsBu3BpyRkM-`,
  _ = `HcQu8--ilOI-`,
  _ = `Posg84PD4bE-`,
  _ = `k2N88JaY6V0-`,
  _ = `ZoGr1X5RSXM-`,
  _ = `EQ3XQ1YOQmQ-`,
  _ = `C0xcw-dBN9k-`,
  _ = `IF22HifrVkU-`,
  _ = `_6qTH13L4IdM-`,
  _ = `_3tNrYR8q4PM-`,
  _ = `ohvlfUuwWIg-`,
  _ = `mo9oCL-5zMc-`,
  _ = `ZN1vuColBC4-`,
  _ = `icDmaRX1BV0-`,
  _ = `optYdsri3U8-`,
  _ = `_5zGVMek4WGM-`,
  _ = `KdEmVjNtWfQ-`,
  _ = `LnEJdWlC4Ss-`,
  _ = `NG3wNiIIJXs-`,
  _ = `bOEXfqM27eQ-`,
  _ = `o-fQFsyOEMY-`,
  _ = `q8QvDCYSn5E-`,
  _ = `_1ZYmIx0m7bo-`,
  _ = `OHAAoz1G1I4-`,
  _ = `k1akHy9HHzA-`,
  _ = `SlFMYJwWSU4-`,
  _ = `_9lDmRzgjqs4-`,
  _ = `E-S8WDov49g-`,
  _ = `fzWS9zjHBQA-`,
  _ = `yI-XQCfZhjU-`,
  _ = `zEB6Vo-lSoU-`,
  _ = `hG0eaq6y-C8-`,
  _ = `wdp2jpfiGas-`,
  _ = `ym2tgXthxzw-`,
  _ = `KQCQvl8Sul0-`,
  _ = `iogiG-p5PHg-`,
  _ = `e2Xhb-5xMvY-`,
  _ = `TtzbM79RcOo-`,
  _ = `-y6T-NRjq1Q-`,
  _ = `_0hsSPkL5myo-`,
  _ = `-VpcmDHYJBs-`,
  _ = `_8hZf0ZZtftA-`,
  _ = `O79JneSzM9g-`,
  _ = `je6TW3nEJQQ-`,
  _ = `C-MokZjgv5M-`,
  _ = `Ba6BoHg0H10-`,
  _ = `bzgJpyO0RQM-`,
  _ = `-How-9UKQAA-`,
  _ = `EY35qqcJWWo-`,
  _ = `_79iz6FtxgOc-`,
  _ = `ozmBXi7xV-Y-`,
  _ = `zxaNRVKQnTM-`,
  _ = `CakmFSjnZaQ-`,
  _ = `Ilo9d6Bcf60-`,
  _ = `_2aS2MHSUX-U-`,
  _ = `D2jHVCUP6G0-`,
  _ = `_6IHSOcZWQTI-`,
  _ = `i7ABr2eulso-`,
  _ = `MVfZPnoopw0-`,
  _ = `ckxFzo4Jdqs-`,
  _ = `_4wxMhjLGDEo-`,
  _ = `h-oZBBAdgfo-`,
  _ = `utI2vL1PRLs-`,
  _ = {
    narrowWidth: _,
    GameTitleContainer: _,
    AppIcon: _,
    TileTextAppName: _,
    EnableHovers: _,
    TileContainer: _,
    CoverImageCtn: _,
    GameShortDescription: _,
    LiveText: _,
    LiveNow: _,
    FutureDateText: _,
    PastDateText: _,
    GameSource: _,
    SourceList: _,
    Source: _,
    RecommendedSource: _,
    SourceRecommended: _,
    DateAndSourceLine: _,
    EventTypeAndDateCtn: _,
    LeaveRoomForReminder: _,
    SmallAppName: _,
    TileTextCategoryType: _,
    EventType28: _,
    EventType10: _,
    EventType11: _,
    EventType23: _,
    EventType35: _,
    EventType13: _,
    EventType14: _,
    EventType15: _,
    Tile: _,
    MainContentContainer: _,
    YoutubePreviewImage: _,
    TileImage: _,
    TileTextContainer: _,
    EventType12: _,
    EventName: _,
    EventSubTitle: _,
    GameCapsuleCtn: _,
    AppBannerLogo: _,
    FallbackImage: _,
    ClanSource: _,
    TileTextHeader: _,
    PatchIconCtn: _,
    EventTitleCtn: _,
    Footer: _,
    EventCapsuleCtn: _,
    LiveBroadcastPreview: _,
    TileBackgroundImage: _,
    TileCoverImagePlayable: _,
    TileCoverLiveIcon: _,
    ReminderContainer: _,
    OnlyIcon: _,
    EventSummaryDefault: _,
    Vote_NotLoggedIn: _,
    Vote_LimitedUser: _,
    Vote_Positive: _,
    RateIcon: _,
    Vote_Negative: _,
    Vote_Ready: _,
    FooterRightSide: _,
    Options: _,
    TileViewerCount: _,
    FooterStat: _,
    CommentIcon: _,
    CommentIconCtn: _,
    LoadingTile: _,
    CarouselMode: _,
    UpcomingMode: _,
    TileVideoIcon: _,
    DateAndTime: _,
    HasVideo: _,
    SubTitleShown: _,
    VideoPlayerReady: _,
  };
function _(_) {
  let { closeModal: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _(`#EventCalendar_GameSource_UnhideCuratorsDialog_Title`),
    strDescription: _(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_Description`,
    ),
    strOKButtonText: _(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton`,
    ),
    strCancelButtonText: _(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton`,
    ),
    onOK: () => {
      _().m_visibilityStore.SetGameSourceAllowed(_.k_ECurator, !0), _ && _();
    },
    onCancel: () => {
      _().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(!0),
        _ && _();
    },
  });
}
function _(_) {
  _ ||
    (_() &&
      (_().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
        _().m_visibilityStore.BIsGameSourceAllowed(_.k_ECurator) ||
        _((0, _.jsx)(_, {}), window)));
}
var _ = _((_) => {
  let { eventModel: _, calendarEvent: _, history: _ } = _,
    _ = (_) => {
      let _ = _.GetEntityName();
      _(
        (0, _.jsx)(_, {
          strTitle: _(`#EventCalendar_MuteApp_Title`, _),
          strDescription: _(`#EventCalendar_MuteApp_details`, _),
          onOK: () => _().UpdateEventBlockFromCalendarEvent(_, !1),
          children: (0, _.jsx)(`a`, {
            href: _.STORE_BASE_URL + `account/emailoptout/app`,
            target: _.IN_CLIENT ? void 0 : `_blank`,
            children: _(`#EventCalendar_ManageMutedSources`),
          }),
        }),
        _(_),
      );
    },
    _ = () => {
      _().UpdateEventBlockFromCalendarEvent(_, !0);
    },
    _ = () => {
      let _ = _().MapClanEventTypeToGroup(_.GetEventType());
      _().SetEventTypeGroupAllowed(_, !1);
    },
    _ = () => _().m_visibilityStore,
    _ = (_, _, _, _ = !0) => {
      _().BIsGameSourceAllowed(_) &&
        (_ &&
          _.push(
            (0, _.jsx)(
              _,
              {
                disabled: !0,
                onSelected: () => {},
                children: _(`#EventCalender_Reason_` + _),
              },
              `item-source-${_}-${_}`,
            ),
          ),
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                _().SetGameSourceAllowed(_, !1);
              },
              children: _(`#EventCalender_Hide_Reason_` + _),
            },
            `item-hidesource-${_}-${_}`,
          ),
        ));
    },
    _ = _(_, _.k_eStoreNewsHub, `allowRelative`),
    _ = () => {
      _.startsWith(`http`) ? (window.location.href = _) : _.push(_);
    };
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    onClick: (_) => {
      let _ = [],
        _ = _.GetSource(),
        _ = _.unique_id,
        _ = _(),
        _ = _();
      _.BIsGlobalCalendar() &&
        (_ &&
          _ & _.k_eLibrary &&
          (_().BIsGameSourceAllowed(_.k_ERecent) && _.appInfo
            ? (_.push(
                (0, _.jsx)(
                  _,
                  {
                    disabled: !0,
                    onSelected: () => {},
                    children: _(
                      `#EventCalender_LastPlayed`,
                      _(_.GetTimeNowWithOverride() - _.appInfo.last_played),
                    ),
                  },
                  `item-source-${_}-lastplayed`,
                ),
              ),
              _(_, _.k_ERecent, _, !1))
            : _(_, _.k_ELibrary, _)),
        _ && _ & _.k_eWishlist && _(_, _.k_EWishlist, _),
        _ && _ & _.k_eFollowing && _(_, _.k_EFollowing, _),
        !_ && _ && _ & _.k_eCurator && _(_, _.k_ECurator, _),
        _ && _ & _.k_eRecommended && _(_, _.k_ERecommended, _),
        _ && _ & _.k_eSteam && _(_, _.k_ESteam, _),
        _ && _ & _.k_eFeatured && _(_, _.k_EFeatured, _)),
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: _,
              children: _(
                `#EVentCalendar_Hide_EventType`,
                _(
                  `#EventCalendar_EventTypeGroup_` +
                    _().MapClanEventTypeToGroup(_.GetEventType()),
                ),
              ),
            },
            _.GID + `hidetype`,
          ),
        ),
        _.logged_in &&
          (_.Get().BIsEventBlocked(_)
            ? _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: _,
                    children: (0, _.jsx)(_, {
                      toolTipContent: _(`#EventCalendar_UnMuteApp_ttip`),
                      children: _(
                        `#EventCalendar_UnMuteApp_Title`,
                        _.GetEntityName(),
                      ),
                    }),
                  },
                  _.GID + `unmuteapp`,
                ),
              )
            : _.push(
                (0, _.jsx)(
                  _,
                  {
                    onSelected: _,
                    children: (0, _.jsx)(_, {
                      toolTipContent: _(`#EventCalendar_MuteApp_ttip`),
                      children: _(
                        `#EventCalendar_MuteApp_Title`,
                        _.GetEntityName(),
                      ),
                    }),
                  },
                  _.GID + `muteapp`,
                ),
              )),
        !_.BIsOGGEvent() &&
          !_ &&
          _.push(
            (0, _.jsx)(_, {
              eventModel: _,
              calendarEvent: _,
            }),
          ),
        _.BIsSingleSourceCalendar() ||
          _.push(
            (0, _.jsx)(
              _,
              {
                onSelected: _,
                children: _(
                  `#EventCalendar_Goto_SpecificCalendar`,
                  _.GetEntityName(),
                ),
              },
              _.GID + `goto`,
            ),
          ),
        _.appid &&
          _.push(
            (0, _.jsx)(
              _,
              {
                onSelected: () =>
                  (window.location.href = _(
                    _.STORE_BASE_URL + `app/` + _.appid,
                  )),
                children: _(`#EventDisplay_ViewStorePage`),
              },
              _.GID + `goto`,
            ),
          ),
        _(
          (0, _.jsx)(_, {
            children: _,
          }),
          _,
        );
    },
    children: (0, _.jsx)(_, {}),
  });
});
function _(_) {
  let { eventModel: _, calendarEvent: _ } = _,
    _ = _(_.clanSteamID.GetAccountID()),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    _ = _.useCallback(async () => {
      _.logged_in
        ? (await _.Get().UpdateFollowOrIgnoreCurator(_.clanSteamID, !0, !_),
          _(!!_))
        : _();
    }, [_, _.clanSteamID, _]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(
        _,
        {
          onSelected: _,
          children: (0, _.jsx)(_, {
            toolTipContent: _(
              _
                ? `#EventCalendar_UnFollowCurator_ttip`
                : `#EventCalendar_FollowCurator_ttip`,
            ),
            children: _(
              _
                ? `#EventCalendar_UnFollowCurator`
                : `#EventCalendar_FollowCurator`,
              _.GetEntityName(),
            ),
          }),
        },
        _.GID + `followcurator`,
      ),
      _,
    ],
  });
}
var _ = _(_),
  _ = `slvPA8f0gLM-`,
  _ = `kcXPMd3IHiw-`,
  _ = (_) => {
    let _ = [`maxresdefault`, `mqdefault`, `default`],
      [_, _] = _.useState(0);
    _.useEffect(() => _(0), [_.video]);
    let _ = _.useRef(void 0);
    if (_.altImgWithFallback && _.altImgWithFallback.length > 0)
      return (0, _.jsx)(_, {
        className: _.className,
        srcs: _.altImgWithFallback,
      });
    if (_.altImg)
      return (0, _.jsx)(`img`, {
        src: _.altImg,
        className: _.className,
      });
    {
      let _ = `https://img.youtube.com/vi/` + _.video + `/` + _[_] + `.jpg`,
        _ = () => {
          _ + 1 < _.length && _(_ + 1);
        };
      return (0, _.jsx)(`img`, {
        ref: _,
        onLoad: () => {
          _.current && _.current.naturalHeight < 91 && _();
        },
        onError: _,
        src: _,
        className: _(_, _.className),
      });
    }
  },
  _ = (_) => {
    let [_, _] = _.useState(!1);
    _(!!_.preloadYoutubeScripts);
    let _ = _(`youtube`);
    return !_ || !_
      ? (0, _.jsxs)(`div`, {
          className: _(`YoutubePreviewContainer`, _, _.imageClassnames),
          onClick: _
            ? (_) => {
                _.onPlayerActivated && _.onPlayerActivated(),
                  _(!0),
                  _.stopPropagation(),
                  _.preventDefault();
              }
            : void 0,
          children: [
            (0, _.jsx)(_, {
              className: `YoutubePreviewImage`,
              altImgWithFallback: _.altImgWithFallback,
              altImg: _.altImg,
              video: _.video,
            }),
            _ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(`div`, {
                    className: `YoutubePreviewPlay`,
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(`div`, {
                    className: `VideoHintText`,
                    children: _(`#EventCalendar_WatchYouTubeVideo`),
                  }),
                ],
              }),
          ],
        })
      : (0, _.jsx)(_, {
          ..._,
          classnames: _(_, _.classnames),
        });
  };
function _(_) {
  let {
      eventModel: _,
      calendarEvent: _,
      bSuppressHoverEffects: _,
      mode: _,
      bHideGameTitle: _,
      fnOnClicked: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = _(),
    _ = _(_.GetAppIDOrReferenceAppID());
  _(_);
  let _ = _(_);
  _(_.clanInfo?.clanid);
  let _ = _(_.LANGUAGE),
    _ = `capsule`,
    [_, _, _, _, _, _, _, _, _, _, _] = _(() => [
      _.has_live_stream,
      _.GetEventType(),
      _.GetAllTags(),
      _.GetCategoryAsString(),
      _.GetNameWithFallback(_),
      _.BImageNeedScreenshotFallback(_, _),
      _.appid,
      _.GID,
      _.GetStartTimeAndDateUnixSeconds(),
      _.GetSubTitleWithLanguageFallback(_),
      _.GetSummaryWithFallback(_),
    ]),
    [_, _] = _.useState(() => (_() && _ == 14 ? _.full : _.capsule_main)),
    _ = _(),
    _ = _(_ && _ && _ ? void 0 : _, _, _, _, _) ?? _,
    _ = _(_, _),
    _ = _(_),
    _ = _[`EventType${_}`],
    _ = _.map((_) => _[`Tag-${_}`]),
    _ = _(
      _,
      _,
      _ && `MVfZPnoopw0-`,
      _ ? void 0 : _,
      _ && `utI2vL1PRLs-`,
      _ && `_4wxMhjLGDEo-`,
      _ && void 0,
      _ === `wide` && void 0,
      _ === `carousel` && `_6IHSOcZWQTI-`,
      _ === `upcoming` && `i7ABr2eulso-`,
      ..._,
    ),
    _ = _,
    _ = _;
  _ === _ && (_ = void 0), _ === _ && (_ = void 0);
  let _ = _(_),
    _ = (0, _.jsx)(_, {
      setVideoPlayerReady: _,
      calendarEvent: _,
      eventModel: _,
      mode: _,
      artworkType: _,
      strCapsuleImgURLForBackground: _,
      fnSetCoverSize: _,
    }),
    _ = _ && _ != 14 && !(_ && _ !== `carousel`),
    _ = _ && _,
    _ = !_ && _,
    _ = _ !== 28 && _ !== 12 && _.GetTimeNowWithOverride() < _,
    _ = _ !== `wide` || _,
    _ =
      _ &&
      (0, _.jsx)(`div`, {
        className: _(`-VpcmDHYJBs-`, _ && `_8hZf0ZZtftA-`),
        children: (0, _.jsx)(_, {
          eventModel: _,
          lang: _,
          bShowStartTime: !0,
          bOnlyShowIcon: _,
          bExpandLeft: _,
        }),
      }),
    _ = !!(_ !== 12 && _),
    _ = !(!_ || (_ && _(_, _)));
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        event: _,
        recordNewsHubStats: !0,
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        route: _.k_eView,
        children: (0, _.jsxs)(`div`, {
          className: _,
          onClick: (_) => {
            _.RecordInteraction(_.k_eClickThrough),
              !_() && (_(_), _.stopPropagation(), _.preventDefault());
          },
          children: [
            _ === 14 &&
              (0, _.jsx)(`div`, {
                className: _(`TtzbM79RcOo-`, _ && `yI-XQCfZhjU-`),
                style: {
                  backgroundImage: `url(${_})`,
                },
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _,
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    _ == 12 &&
                      (0, _.jsx)(`div`, {
                        className: `wdp2jpfiGas-`,
                        children: (0, _.jsx)(_, {}),
                      }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        _,
                        !_ &&
                          (0, _.jsxs)(`div`, {
                            className: `HcQu8--ilOI-`,
                            children: [
                              (0, _.jsx)(_, {
                                ..._,
                              }),
                              _ &&
                                (0, _.jsx)(_, {
                                  calendarEvent: _,
                                }),
                            ],
                          }),
                        (0, _.jsx)(`div`, {
                          className: _,
                          children: _,
                        }),
                        (0, _.jsxs)(`div`, {
                          className: _,
                          children: [
                            (0, _.jsx)(`div`, {
                              className: _(_, _),
                              children: _,
                            }),
                            (0, _.jsx)(_, {
                              eventModel: _,
                              className: _(_ && `_6qTH13L4IdM-`),
                            }),
                            _ && _,
                          ],
                        }),
                        _ &&
                          (0, _.jsx)(`div`, {
                            className: `_9lDmRzgjqs4-`,
                            children: _,
                          }),
                        _ &&
                          (0, _.jsx)(`div`, {
                            className: _(
                              `O79JneSzM9g-`,
                              _ ? `h-oZBBAdgfo-` : ``,
                            ),
                            children: _,
                          }),
                      ],
                    }),
                    !_ && _,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_, _) {
  let _ = (_) => _.replace(/\W+/g, ``).toLocaleLowerCase(),
    _ = _(_);
  return _(_).startsWith(_);
}
function _(_, _) {
  let { video_preview_type: _, video_preview_id: _, type: _ } = _;
  return !(_ === `upcoming` || !_ || _ === 12 || _ !== `youtube`);
}
function _(_) {
  let { eventModel: _, fnSetVideoStateReady: _, mode: _ } = _,
    { video_preview_id: _, type: _ } = _.eventModel,
    _ = _(),
    _ = _(_.LANGUAGE),
    _ = _() && _ == 14 ? _.full : _.capsule_main,
    _ = _(_, `capsule`, _, _, !0);
  return _ === `carousel`
    ? (0, _.jsx)(_, {
        altImgWithFallback: _,
        video: _,
        className: _,
      })
    : (0, _.jsx)(_, {
        video: _,
        altImgWithFallback: _,
        autoplay: !0,
        autopause: !0,
        showFullscreenBtn: !0,
        controls: !0,
        imageClassnames: _,
        onPlayerActivated: () => {
          _.RecordInteraction(_.k_ePlayedVideo), _(!0);
        },
        preloadYoutubeScripts: !0,
        playsInline: !0,
      });
}
function _(_) {
  let {
      eventModel: _,
      calendarEvent: _,
      mode: _,
      artworkType: _,
      strCapsuleImgURLForBackground: _,
      setVideoPlayerReady: _,
      fnSetCoverSize: _,
    } = _,
    _ = _(_.LANGUAGE),
    _ = _(_, _),
    _ = !_(_, _) && _ !== `upcoming`,
    [_, _, _, _, _, _] = _(() => [
      _.GetEventType(),
      _.has_live_stream,
      _.has_live_stream,
      _.clanSteamID.GetAccountID(),
      _.GetGameCapsule(),
      _.BImageNeedScreenshotFallback(_, _),
    ]);
  _.useEffect(() => {
    if (_) {
      let _ = new Image();
      (_.src = _),
        (_.onerror = () => {
          _(_.full);
        });
    }
  }, [_, _]);
  let [, _] = _(_),
    _ = _ && !_.is_ogg,
    _ = _.GetSummaryWithFallback(_);
  return (
    _.GetSubTitleWithLanguageFallback(_) === _ && (_ = void 0),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ &&
          (0, _.jsx)(_, {
            eventModel: _,
            mode: _,
            calendarEvent: _,
            fnSetVideoStateReady: _,
          }),
        _ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              _ === 12 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: `E-S8WDov49g-`,
                      children: (0, _.jsx)(`div`, {
                        className: _({
                          "fzWS9zjHBQA-": !0,
                          "yI-XQCfZhjU-": _,
                          "zEB6Vo-lSoU-": _,
                        }),
                        style: {
                          backgroundImage: `url(${_})`,
                        },
                      }),
                    }),
                    (0, _.jsx)(`div`, {
                      className: `NH4KbTPWsVo-`,
                      children: _,
                    }),
                  ],
                }),
              _ !== 12 &&
                (0, _.jsxs)(`div`, {
                  className: _({
                    "iogiG-p5PHg-": !0,
                    "e2Xhb-5xMvY-": _,
                  }),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _({
                        "_1ZYmIx0m7bo-": !0,
                        "yI-XQCfZhjU-": _,
                        "zEB6Vo-lSoU-": _,
                      }),
                      style: {
                        backgroundImage: `url(${_})`,
                      },
                    }),
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `-y6T-NRjq1Q-`,
                      }),
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `_0hsSPkL5myo-`,
                        children: _(`#home_page_live_broadcast`),
                      }),
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `VideoHintText`,
                        children: _(`#EventCalendar_WatchLiveBroadcast`),
                      }),
                  ],
                }),
            ],
          }),
      ],
    })
  );
}
var _ = _((_) => {
    let {
        eventModel: _,
        calendarEvent: _,
        bSuppressHoverEffects: _,
        history: _,
      } = _,
      _ = _(_, _.k_eStoreNewsHub, `allowRelative`),
      _ = (_) => {
        _.startsWith(`http`) ? (window.location.href = _) : _.push(_),
          _.stopPropagation(),
          _.preventDefault();
      },
      _ = _.GetEntityName(),
      _ = _.GetGameIcon(),
      _ = _(_, _ ? void 0 : _);
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          onClick: _,
          children: [
            (0, _.jsx)(`img`, {
              className: _,
              src: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [_, ` `],
            }),
          ],
        }),
      }),
    });
  }),
  _ = _(_),
  _ = _((_) => {
    let { eventModel: _, calendarEvent: _, className: _ } = _,
      _ = _().GetStoreInitializationTimestamp().getTime() / 1e3,
      _ = _ ? _.GetStartTimeAndDateUnixSeconds() : _.start_time,
      _ = _ && _(_.type) && _.GetEndTimeAndDateUnixSeconds();
    if (_ && _ < _ && _ < _) {
      let _ = _ - _,
        _ = _(_, !0);
      return (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            rtFullDate: _,
            stylesmodule: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: _(`#EventCalendar_LiveNow`),
            }),
          }),
          (0, _.jsx)(_, {
            rtFullDate: _,
            stylesmodule: _,
            children: _(`#EventCalendar_TimeLeft`, _),
          }),
        ],
      });
    }
    if (_ < _) {
      let _ = _ - _,
        _ = _ < 86400 ? _(_, !1, !0) : _(_);
      return (0, _.jsx)(_, {
        className: _,
        rtFullDate: _,
        stylesmodule: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      });
    }
    {
      let _ = new Date(_ * 1e3);
      _.setHours(0, 0, 0, 1);
      let _ = _.getTime() / 1e3,
        _ = Math.floor((_ - _) / 86400),
        _ = _ > 1 && _ <= 5 ? _(new Date(_ * 1e3)) : _(_),
        _ = _(_);
      return (0, _.jsx)(_, {
        className: _,
        rtFullDate: _,
        stylesmodule: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _(`#EventCalendar_WillStartAtDateTime`, _, _),
        }),
      });
    }
  }),
  _ = _((_) => {
    let _ = _.calendarEvent.GetSource(),
      _ = [],
      _ = _().m_visibilityStore;
    _ & _.k_eLibrary && _.BIsGameSourceAllowed(_.k_ELibrary)
      ? _.push({
          _: _.k_eLibrary,
          name: `#EventCalendar_GameSource_inLibrary`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_library`,
          styles: void 0,
        })
      : _ & _.k_eWishlist && _.BIsGameSourceAllowed(_.k_EWishlist)
        ? _.push({
            _: _.k_eWishlist,
            name: `#EventCalendar_GameSource_onWishlist`,
            ttip: `#EventCalendar_GameSource_EventExplanation_ttip_wishlist`,
            styles: void 0,
          })
        : _ & _.k_eRecommended && _.BIsGameSourceAllowed(_.k_ERecommended)
          ? _.push({
              _: _.k_eRecommended,
              name: `#EventCalendar_GameSource_recommended_Verbose`,
              ttip: `#EventCalendar_GameSource_EventExplanation_ttip_recommended`,
              styles: _,
            })
          : _ & _.k_eFeatured &&
            _.BIsGameSourceAllowed(_.k_EFeatured) &&
            _.push({
              _: _.k_eFeatured,
              name: `#EventCalendar_GameSource_featured`,
              ttip: `#EventCalendar_GameSource_ttip_featured`,
              styles: void 0,
            }),
      _ & _.k_eFollowing &&
        _.BIsGameSourceAllowed(_.k_EFollowing) &&
        _.push({
          _: _.k_eFollowing,
          name: `#EventCalendar_GameSource_followed`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_following`,
          styles: void 0,
        });
    let _ = _.map((_, _) => {
      let _ = _.calendarEvent.unique_id;
      return _(
        `item-source-${_}-${_._}`,
        _.name,
        _.ttip,
        _.styles,
        _ + 1 < _.length,
      );
    });
    return (0, _.jsx)(`div`, {
      className: _,
      children: _,
    });
  }),
  _ = (_, _, _, _, _) =>
    (0, _.jsx)(
      _,
      {
        className: _(_, _),
        toolTipContent: _(_),
        children: _(_) + (_ ? `, ` : ``),
      },
      _,
    );
function _(_) {
  return _.logged_in
    ? _.is_limited
      ? _
      : _ === `up`
        ? _
        : _ === `down`
          ? _
          : _
    : _;
}
function _(_) {
  let { eventModel: _ } = _,
    _ = _(),
    { myVote: _, Vote: _ } = _(_, {
      bAsk: !1,
    }),
    [, _] = _(_.clanSteamID.GetAccountID()),
    _ = () => {
      _ !== `up` && _() && (_(`up`), _.RecordInteraction(_.k_eThumbsUp));
    },
    _ = () => {
      _.RecordInteraction(_.k_eDiscussions);
    },
    [_, _, _] = _(() => [
      Math.max(0, _.nVotesUp - _.nVotesDown),
      _.GetDiscussionURL(_?.vanity_url),
      _.nCommentCount,
    ]),
    _ = _(_),
    _ = !_() && _,
    _ = _.live_stream_viewer_count > 0 ? _.live_stream_viewer_count : void 0;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        !!_ &&
          (0, _.jsx)(`div`, {
            className: `zxaNRVKQnTM-`,
            children: _(_),
          }),
        (0, _.jsxs)(`div`, {
          className: _(_, void 0, _),
          onClick: _,
          children: [
            (0, _.jsx)(_, {
              className: _,
            }),
            (0, _.jsx)(`span`, {
              children: _(Number(_)),
            }),
          ],
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `CakmFSjnZaQ-`,
            children: (0, _.jsxs)(`a`, {
              href: _,
              className: `_2aS2MHSUX-U-`,
              target: `_blank`,
              onClick: _,
              children: [
                (0, _.jsx)(_, {
                  className: `Ilo9d6Bcf60-`,
                }),
                (0, _.jsx)(`span`, {
                  children: _(Number(_)),
                }),
              ],
            }),
          }),
        (0, _.jsx)(_, {
          ..._,
        }),
      ],
    }),
  });
}
var _ = `emclan`,
  _ = `emgid`;
function _(_) {
  let { displayLocation: _, fnChangeModalEvent: _ } = _,
    [_, _] = _.useState(null),
    [_, _] = _(_, null),
    [_, _] = _(_, null);
  return (
    _(_, (_, _) => {
      _(_), _(_.InitFromClanID(_).ConvertTo64BitString());
    }),
    _.useEffect(() => {
      if (_ != null && _ != null) {
        let _ = new _(_);
        _.LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, 0).then(_);
      }
    }, [_, _]),
    _
      ? (0, _.jsx)(_, {
          appid: _.appid,
          trackingLocation: _,
          announcementGID: _.GetAnnouncementGID(),
          partnerEventStore: _,
          eventModel: _,
          showAppHeader: !0,
          closeModal: () => {
            _(null), _(null), _(null);
          },
        })
      : null
  );
}
var _ = `_9ldA8d1EI20-`,
  _ = `gR9r-CA9v-w-`,
  _ = `qg0kDpti4nE-`,
  _ = `RhSVO9z6QFw-`,
  _ = `_52BS7g513UA-`,
  _ = `_3HVlNg-lHhM-`,
  _ = `NEE4v7KTl5A-`,
  _ = `Ij-p0urNq-A-`,
  _ = `m-cXhST-lJs-`,
  _ = `_-0S-Vs5hcTA-`,
  _ = `mf3O9nhppOo-`,
  _ = `eRhFVaYP2IQ-`,
  _ = `EcxG9qqzLWQ-`,
  _ = `HKC2EnBS1BQ-`,
  _ = `Mm-257yMXGI-`,
  _ = `_2tmnI4Ea2-o-`,
  _ = `RiHHUUkg-WU-`,
  _ = 10;
function _(_) {
  let _ = _(),
    _ = _(_),
    _ = _.GetActiveEventsAt(_) || [],
    [_] = _.useState(new _()),
    _ = _.useCallback((_, _) => _(_.GetClanEventModel(_), window), []);
  return _.GetNumEventsLoaded() == 0
    ? (0, _.jsx)(`div`, {
        children: _(`#Conference_No_Schedule_Yet`),
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            displayLocation: 6,
            fnChangeModalEvent: _,
          }),
          (0, _.jsx)(_, {
            rgActiveEvents: _,
            fnDisplayModalEvent: _,
          }),
          (0, _.jsx)(_, {
            rgActiveEvents: _,
            fnDisplayModalEvent: _,
            rtNow: _,
          }),
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(_, {
            onClick: (_) => _((0, _.jsx)(_, {}), _(_)),
            children: _(`#Conference_NeedHelp`),
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { rgActiveEvents: _, rtNow: _ } = _,
    _ = _()
      .GetCalendarItemsInTimeRange(_ + 1)
      .rgCalendarItems.filter((_) => !_.some((_) => _.GID == _.unique_id))
      .sort((_, _) => _.start_time - _.start_time);
  return _.length == 0
    ? (0, _.jsx)(`div`, {
        children: _(`#Conference_No_More_Schedule`),
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Conference_ScheduleNext`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  bDisplayAsUpNext: _ == 0 && _.length >= 1,
                  calendarItem: _,
                  fnDisplayModalEvent: _.fnDisplayModalEvent,
                  rtNow: _,
                },
                _.unique_id,
              ),
            ),
          }),
        ],
      });
}
function _(_) {
  let {
      calendarItem: _,
      bDisplayAsUpNext: _,
      fnDisplayModalEvent: _,
      rtNow: _,
    } = _,
    _ = _.GetClanEventModel(_.unique_id),
    _ = _(_.LANGUAGE),
    _ = _.GetStartTimeAndDateUnixSeconds(),
    _ = _(new Date(_ * 1e3), new Date(_ * 1e3));
  return (0, _.jsxs)(`div`, {
    className: _,
    onClick: () => _(_.GID, _.clanSteamID.GetAccountID()),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.GetNameWithFallback(_),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !_ &&
            (0, _.jsx)(`div`, {
              children: _(_, !0),
            }),
          (0, _.jsx)(`div`, {
            children:
              _ && _
                ? _(
                    `#Conference_StartInMin`,
                    Math.max(1, Math.floor((_ - _) / 60)),
                  )
                : _(
                    `#Conference_StartsAt`,
                    _(_, {
                      bForce24HourClock: !1,
                    }),
                  ),
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _),
        children: (0, _.jsx)(_, {
          eventModel: _,
          lang: _,
          bOnlyShowIcon: !0,
          bExpandLeft: !0,
          bShowStartTime: !1,
        }),
      }),
    ],
  });
}
function _(_) {
  let { rgActiveEvents: _, fnDisplayModalEvent: _ } = _;
  if (!_ || _.length == 0) return null;
  let _ = _[0],
    _ = _(_.LANGUAGE),
    _ = _.ParseEventModelPresenters(_, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          `Live Now!`,
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.GetNameWithFallback(_),
      }),
      !!_ &&
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              name: _.name,
              title: _.title,
              photo: _.photo,
              company: _.company,
              bioString: _.bio,
              children: (0, _.jsx)(`div`, {
                children: _.name,
              }),
            },
            `presenter_` + _.name,
          ),
        ),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.GetSummaryWithFallback(_),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        onClick: () => _(_.GID, _.clanSteamID.GetAccountID()),
        children: _(`#EventEmail_Button_ClickForMoreDetails`),
      }),
    ],
  });
}
function _(_) {
  let { conferenceInfo: _ } = _,
    _ = _(),
    _ = _(_),
    _ = _.GetActiveEventsAt(_) || [],
    [_] = _.useState(new _()),
    _ = _.GetCalendarItemsInTimeRange(_.rtStartTime - 1, _)
      .rgCalendarItems.filter((_) => _.length == 0 || _[0].GID != _.unique_id)
      .sort((_, _) => _.start_time - _.start_time);
  return _.length == 0
    ? (0, _.jsx)(`div`, {
        children: _(`#Conference_NoPastEvents`),
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            displayLocation: 6,
            fnChangeModalEvent: _,
          }),
          _.map((_) => {
            let _ = _.GetClanEventModel(_.unique_id);
            return (0, _.jsx)(
              _,
              {
                eventModel: _,
                calendarEvent: _,
                bSuppressHoverEffects: !1,
                mode: `wide`,
                fnOnClicked: () =>
                  _.Dispatch(_.GID, _.clanSteamID.GetAccountID()),
              },
              `row` + _.unique_id,
            );
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { conferenceInfo: _ } = _,
    _ = _(`WithCalendarStore`),
    [_, _] = (0, _.useState)(!0);
  return (
    (0, _.useEffect)(() => {
      _.token.reason ||
        _.Get()
          .LoadInitialCalendarData(_.rtEndTime, _.strConferenceID)
          .finally(() => {
            _.token.reason || _(!1);
          });
    }, [_.rtEndTime, _.strConferenceID, _]),
    _
      ? (0, _.jsx)(_, {})
      : (0, _.jsx)(_.Fragment, {
          children: _.children,
        })
  );
}
function _(_) {
  let { closeModal: _ } = _;
  return (0, _.jsxs)(_, {
    strTitle: _(`#Conference_NeedHelp`),
    bAlertDialog: !0,
    onCancel: _,
    onOK: _,
    children: [
      (0, _.jsx)(`div`, {
        children: _(`#Conference_NeedHelp_Desc1`),
      }),
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                children: _(`#Conference_NeedHelp_BroadcastChatQ`),
              }),
              (0, _.jsxs)(`ul`, {
                className: _,
                children: [
                  (0, _.jsx)(`li`, {
                    children: _(`#Conference_NeedHelp_ChatA1`),
                  }),
                  (0, _.jsx)(`li`, {
                    children: _(
                      `#Conference_NeedHelp_BroadcastChatA1`,
                      (0, _.jsx)(`a`, {
                        href: `https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A`,
                        children: _(`#Conferenec_NeedHelp_LimitedAccounts`),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                children: _(`#Conference_NeedHelp_QandAQ`),
              }),
              (0, _.jsx)(`ul`, {
                children: (0, _.jsx)(`li`, {
                  children: _(`#Conference_NeedHelp_ChatA1`),
                }),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`span`, {
                children: _(`#Conference_NeedHelp_StillHaveQuestions`),
              }),
              (0, _.jsx)(`a`, {
                href: `https://help.steampowered.com/wizard/HelpWithPublishing?issueid=933`,
                children: _(`#Conference_NeedHelp_CreateTicket`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var _ = `CosXX3EOimc-`,
  _ = `_2G0l2P7PdWE-`,
  _ = `Spx81IioUbg-`,
  _ = `_5GDAhGXpfUc-`,
  _ = `yGA4wdnOjDA-`,
  _ = `NxERYIoK1Cw-`,
  _ = `_8l8J-kgwB7U-`,
  _ = `aXXmPKkbnXQ-`,
  _ = `oOUQlEGxQVM-`,
  _ = `ytU2QJl67fo-`,
  _ = `_9VrU0Y2zPEY-`,
  _ = `EpnFxSwyOrQ-`,
  _ = `_2wHhSwgxybU-`,
  _ = `EYfvQDnLzvo-`,
  _ = `bD4DgBpQoNM-`,
  _ = `oxOiIg7VE2E-`,
  _ = `EKfk3W5MSVw-`,
  _ = `_4cL0DDhwyxw-`,
  _ = `_1A3aZ6j-Szc-`,
  _ = 30;
function _(_) {
  let { conferenceInfo: _, bShowYouTube: _ } = _,
    [_, _] = _.useState(!1),
    _ = _(_.PerMinute) < _.rtStartTime - _ * _.PerMinute;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, _ ? `Active` : `Hidden`),
        children: (0, _.jsxs)(`div`, {
          className: void 0,
          children: [
            (0, _.jsx)(_, {
              conferenceInfo: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              onClick: () => {
                _(!_);
              },
              children: [
                (0, _.jsx)(_, {
                  toolTipContent: _(`#QAndA_HideSchedule`),
                  children: (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      angle: 0,
                    }),
                  }),
                }),
                (0, _.jsx)(_, {
                  toolTipContent: _(`#QAndA_ShowSchedule`),
                  children: (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {}),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: `See Event Schedule`,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(_, {
              videoID: _.youtubeVideoID,
              bAutoPlay: !0,
              bShowVideoImmediately: !0,
            }),
          _
            ? (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#Conference_ChatHidden`, _),
                }),
              })
            : (0, _.jsx)(_, {
                conferenceInfo: _,
              }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { conferenceInfo: _ } = _,
    [_, _] = _.useState(window.innerWidth > 910),
    [_, _] = _.useState(!0),
    _ =
      _.COMMUNITY_BASE_URL +
      `broadcast/chatonly/` +
      _.broadcastSteamID.ConvertTo64BitString(),
    _ =
      _.COMMUNITY_BASE_URL +
      `questions/` +
      _.VANITY_ID +
      `/view/` +
      _.globalQandASessionID;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_, _, _ ? _ : ``),
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                onClick: () => {
                  _(!0), _(!1);
                },
                children: _(`#Conference_Tab_Chat`),
              }),
              (0, _.jsx)(_, {
                toolTipContent: _(`#QAndA_PopOutChat_ttip`),
                children: (0, _.jsx)(`a`, {
                  className: _,
                  href: _,
                  target: `_blank`,
                  children: (0, _.jsx)(_, {}),
                }),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _(_, _, _ ? _ : ``),
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                onClick: () => {
                  _(!1), _(!0);
                },
                children: _(`#Conference_Tab_QandA`),
              }),
              (0, _.jsx)(_, {
                toolTipContent: _(`#QAndA_PopOutQAndA_ttip`),
                children: (0, _.jsx)(`a`, {
                  className: _,
                  href: _,
                  target: `_blank`,
                  children: (0, _.jsx)(_, {}),
                }),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            toolTipContent: _(`#QAndA_ChatToggle_ShowBoth`),
            children: (0, _.jsx)(`div`, {
              className: _,
              onClick: () => {
                _(!0), _(!0);
              },
              children: (0, _.jsx)(_, {}),
            }),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!((_ && _) || (!_ && !_)) &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `udjEFKIUdiE-`,
                  children: (0, _.jsx)(_, {
                    conferenceInfo: _,
                    className: void 0,
                  }),
                }),
                (0, _.jsx)(`div`, {
                  className: `DIG-5XDM5sY-`,
                  children: (0, _.jsx)(_, {
                    gidSession: _.globalQandASessionID,
                  }),
                }),
              ],
            }),
          !(!_ || _) &&
            (0, _.jsx)(_, {
              conferenceInfo: _,
              className: void 0,
            }),
          !(_ || !_) &&
            (0, _.jsx)(_, {
              gidSession: _.globalQandASessionID,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { conferenceInfo: _ } = _;
  if (!_.faqAboutPage)
    return (0, _.jsx)(`div`, {
      children: _(`#Conference_NoAbout`),
    });
  let { title: _, content: _, timestamp: _ } = _.faqAboutPage;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(_, {
        text: _,
        bShowErrorInfo: !1,
        version: `0`,
      }),
    ],
  });
}
function _(_) {
  let { conferenceInfo: _ } = _;
  return (0, _.jsx)(_, {
    conferenceInfo: _,
  });
}
var _ = `M42gpbQtAZI-`,
  _ = `hdKB5VYayBQ-`,
  _ = `nMQQZr-aUcU-`,
  _ = `t1L6jOPZ6ZI-`,
  _ = `erGrP-fnka8-`,
  _ = `oAPQHisXVV4-`;
function _(_) {
  let { strVanity: _ } = _,
    _ = _.Get().GetConferenceInfo(_);
  return _
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            conferenceInfo: _,
          }),
        }),
      })
    : (0, _.jsx)(`div`, {
        children: _(`#Conference_Invalid`),
      });
}
function _(_) {
  let { conferenceInfo: _ } = _,
    _ = (_) =>
      window.sessionStorage.setItem(`conferenceCurrentTab`, `?tab=${_.key}`),
    _ = [],
    _ = _();
  return (
    _ < _.rtEndTime &&
      _.push({
        name: _(`#Conference_tab_Home`),
        key: `live`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            bShowYouTube: !!_.youtubeVideoID,
            conferenceInfo: _,
          }),
        }),
        onClick: _,
      }),
    _.push({
      name: _(`#Conference_tab_Past`),
      key: `past`,
      contents: (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            conferenceInfo: _,
          }),
          !_.youtubeVideoID &&
            _ < _.rtEndTime &&
            (0, _.jsx)(_, {
              conferenceInfo: _,
            }),
        ],
      }),
      onClick: _,
    }),
    _.push({
      name: _(`#Conference_tab_Info`),
      key: `about`,
      contents: (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            conferenceInfo: _,
          }),
          !_.youtubeVideoID &&
            _ < _.rtEndTime &&
            (0, _.jsx)(_, {
              conferenceInfo: _,
            }),
        ],
      }),
      onClick: _,
    }),
    _.push({
      name: `(VO/Internal) Debug`,
      key: `debug`,
      hidden: !0,
      contents: (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          conferenceInfo: _,
        }),
      }),
      onClick: _,
    }),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              className: _,
              rgSources: _.strLocalizedLogos,
            }),
            (0, _.jsx)(_, {
              className: _,
              rgSources: _.strLocalizedMobileLogos,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                rtStartDate: _.rtStartTime,
                rtEndDate: _.rtEndTime,
              }),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          tabs: _,
        }),
      ],
    })
  );
}
var _ = {
  LandingPage: (_) => `/(conference|steamworksvirtualconference)/${_}`,
};
function _(_) {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        path: _.LandingPage(`:vanity_str`),
        render: (_) =>
          (0, _.jsx)(_, {
            config: {
              "conference-root": () => {
                let { vanity_str: _ } = _.match.params;
                return (0, _.jsx)(_, {
                  strVanity: _.toLocaleLowerCase(),
                });
              },
            },
          }),
      }),
      (0, _.jsx)(_, {
        component: _,
      }),
    ],
  });
}
export { _ as ConferenceRoutes, _ as default };
