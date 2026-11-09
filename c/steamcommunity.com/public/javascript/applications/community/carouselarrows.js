import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./libraries.js";
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
} from "./vodquery.js";
import { _, _, _ } from "./clanstore.js";
import { _ } from "./throbber.js";
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
} from "./emoticonbutton.js";
import { _, _ } from "./storeassets.js";
import { _ } from "./eventdevfeaturestore.js";
import { _, _, _, _ } from "./reactbbcodeparser.js";
import { _, _ } from "./bbcodes.module.js";
import { _, _, _, _, _, _, _, _ } from "./simplesuccesserror.js";
import { _ } from "./visibilitytracker.js";
import { _ } from "./steammessages_loyalty_rewards_pb.js";
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
var _ = _(),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _.createContext({
    bCanUseLink: !1,
  }),
  _ = (function (_) {
    return (
      (_.k_eView = `view`),
      (_.k_eViewWebSiteHub = `websitehub`),
      (_.k_eCommunityView = `communityview`),
      (_.k_eCommunityEdit = `edit`),
      (_.k_eCommunityEditBroadcast = `editBroadcast`),
      (_.k_eCommunityAdminPage = `admin`),
      (_.k_eCommunityPublish = `publish`),
      (_.k_eCommunityMigrate = `migrate`),
      (_.k_eCommunityPreview = `preview`),
      (_.k_eCommunityPreviewSale = `previewsale`),
      (_.k_eCommunityAnnouncementHub = `community_announcehub`),
      (_.k_eStoreView = `storeview`),
      (_.k_eStoreNewsHub = `newshub`),
      (_.k_eStoreOwnerPage = `store`),
      (_.k_eStoreSalePage = `sale`),
      (_.k_eStoreHardwarePreview = `hardwarepreview`),
      (_.k_eStoreUsersNewsHub = `usernewshub`),
      _
    );
  })({}),
  _ =
    /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
function _(_) {
  return _.match(_)?.[1];
}
function _(_, _) {
  if (!_) return !1;
  let _ = _(window.location.href),
    _ = _.GetEventType() == 36,
    _ =
      (_.appid ? `games` : `groups`) == _ &&
      ((_.appid && _.appid === _.APPID) ||
        (!_.appid && _.clanSteamID.GetAccountID() === _.CLANACCOUNTID));
  switch (_) {
    case `view`:
      return _ || !1;
    case `communityview`:
    case `edit`:
    case `editBroadcast`:
    case `publish`:
    case `migrate`:
    case `preview`:
    case `previewsale`:
    case `community_announcehub`:
      return _;
    case `admin`:
      return !_ && _;
    case `websitehub`:
      return _ || !1;
    case `storeview`:
      return !1;
    case `newshub`:
    case `store`:
    case `usernewshub`:
      return !1;
    case `sale`:
      return !1;
    case `hardwarepreview`:
      return !1;
    default:
      return _(!1, `Unknown route specified for link: ` + _), !1;
  }
}
function _(_) {
  let _ =
    _.COMMUNITY_BASE_URL +
    `gid/` +
    _.clanSteamID.ConvertTo64BitString() +
    `/announcements/share/` +
    _.AnnouncementGID;
  return {
    strFacebookUrl: _ + `?site=facebook&t=` + Math.random(),
    strTwitterUrl: _ + `?site=twitter`,
    strRedditUrl: _ + `?site=reddit`,
  };
}
function _(_) {
  return _(_, `sale`, `absolute`);
}
function _(_) {
  return _(_, `storeview`, `absolute`);
}
function _(_, _, _) {
  if (_) return (_ ? `/games/` + _.VANITY_ID : `/groups/` + _.VANITY_ID) + `/`;
  let _ = _ ? `ogg/` + _ : `gid/` + _.ConvertTo64BitString();
  return _.COMMUNITY_BASE_URL + _ + `/`;
}
function _() {
  return `news`;
}
function _() {
  return !1;
}
function _(_) {
  return _.clanSteamID.GetAccountID() === 45479024 && !1;
}
function _(_, _, _) {
  let { data: _ } = _(
    _?.appid
      ? {
          appid: _.appid,
        }
      : void 0,
  );
  if (_) return _(_, _, _, _);
}
function _(_, _, _, _) {
  let _ = _ === `relative`,
    _ = _ ? `/` : _.STORE_BASE_URL,
    _ = _(_.appid, _.clanSteamID, _);
  _ === `view`
    ? (_ = `communityview`)
    : _ === `websitehub` && (_ = `community_announcehub`);
  let _ = _.GID ? _.GID : ``,
    _ = _.AnnouncementGID ? _.AnnouncementGID : ``,
    _ = _.BIsOGGEvent() && _.appid && _ && _.BHasSaleUpdateLandingPageVanity(),
    _ = _.GetEventType() == 36;
  switch (_) {
    case `publish`:
      return (
        _ +
        (_.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + _
          : `partnerevents/publish/` + _ + `?tab=publishing`)
      );
    case `edit`:
      return (
        _ +
        (_.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + _
          : `partnerevents/edit/` + _)
      );
    case `editBroadcast`:
      return (
        _ +
        (_.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + _
          : `partnerevents/edit/` + _) +
        `?tab=broadcast`
      );
    case `migrate`:
      return _ + `partnerevents/migrate_announcement/` + _;
    case `preview`:
      return _
        ? _ + `partnerevents/previewsale/` + _
        : _ +
            (_.bOldAnnouncement
              ? `partnerevents/preview_old_announcement/` + _
              : `partnerevents/preview/` + _);
    case `previewsale`:
      return _ + `partnerevents/previewsale/` + _;
    case `admin`:
      return _
        ? `${_}curator/${_.clanSteamID.GetAccountID()}/admin/creatorhome_link`
        : _ + `partnerevents`;
    case `community_announcehub`:
      return _ + `announcements`;
    case `newshub`: {
      let _ = _.appid
        ? `app/${_.appid}`
        : `group/${_.clanSteamID.GetAccountID()}`;
      return _ + `${_()}/${_}`;
    }
    case `store`:
      return (
        _ +
        (_.appid ? `app/` + _.appid : `curator/` + _.clanSteamID.GetAccountID())
      );
    case `sale`:
      return _.jsondata.bSaleEnabled
        ? _
          ? `${_(_)}/${_.GetSaleUpdateLandingPageVanity()}`
          : _
            ? `${_}curator/${_.clanSteamID.GetAccountID()}`
            : _ +
              _(
                _.clanSteamID.GetAccountID(),
                _.GetSaleVanity(),
                !!_.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
              )
        : _;
    case `hardwarepreview`:
      return _(_) ? `${_}hardware_v2/${_}?beta=1` : _;
    case `communityview`:
      return _ + `announcements/detail/` + _;
    case `storeview`:
      if (_.clanSteamID.GetAccountID() == _())
        return `${_.STORE_BASE_URL}meetsteam/${_}`;
      if (_) return `${_(_)}/${_.GetSaleUpdateLandingPageVanity()}`;
      if (_) return `${_}curator/${_.clanSteamID.GetAccountID()}`;
      {
        let _ = _.appid
            ? `app/${_.appid}`
            : `group/${_.clanSteamID.GetAccountID()}`,
          _ = _() ? `view_v2` : `view`,
          _ = _.bOldAnnouncement ? `old_view/${_}` : `${_}/${_}`;
        return `${_}${_()}/${_}/${_}`;
      }
    case `usernewshub`:
      return `${_}${_()}/`;
    default:
      return _(!1, `Unknown route specified for link`), ``;
  }
}
function _(_, _, _) {
  return _(_, _, _ === `forceAbsolute` || !_(_, _) ? `absolute` : `relative`);
}
function _(_) {
  let { eventModel: _, route: _, bPopup: _ = !0 } = _,
    _ = _(_, _),
    _ = _(_, _, _ ? `relative` : `absolute`);
  return (
    _.useEffect(() => {
      _ && (_ ? window.open(_) : window.location.assign(_));
    }, [_, _]),
    _ && _
      ? (0, _.jsx)(_, {
          push: !0,
          _: _,
        })
      : null
  );
}
function _(_, _, _) {
  let _ = _(_, _, !1);
  switch (_) {
    case `admin`:
      return _ + `partnerevents`;
    default:
      return ``;
  }
}
function _(_) {
  let { eventModel: _, preferredFocus: _ } = _,
    { bCanUseLink: _ } = _.useContext(_),
    _ = _(),
    _ = _(),
    _ = _ && _(_.route, _),
    _ = _(_, _.route, _ ? `relative` : `absolute`),
    _ = !_ && _ ? _(_) : _,
    _ = _ || !_ ? _ : _(_, _),
    _ = _(_, `websitehub`, `absolute`),
    _ = _.route == `websitehub` ? `` : _.Localize(`#EventBrowse_MoreEventsBtn`),
    _ = _.useCallback(() => {
      _ && window.location.assign(_);
    }, [_]);
  return _
    ? _
      ? (0, _.jsx)(_, {
          style: _.style,
          className: _.className,
          href: _.createHref({
            pathname: _,
          }),
          onClick: (_) => {
            _ && (_.onClick?.(_), _.push(_), _.preventDefault());
          },
          onOptionsActionDescription: _,
          onOptionsButton: _ ? _ : void 0,
          preferredFocus: _,
          children: _.children,
        })
      : (0, _.jsx)(_, {
          href: _,
          style: _.style,
          className: _.className,
          onClick: _.onClick,
          preferredFocus: _,
          onOptionsActionDescription: _,
          onOptionsButton: _ ? _ : void 0,
          children: _.children,
        })
    : null;
}
var _ = `100% 0px 100% 0px`,
  _ = `SaleSection_`;
function _() {
  return window.innerWidth ?? 1920;
}
function _() {
  return _() >= 940;
}
function _() {
  _();
  let [_, _] = (0, _.useState)(() => _());
  return (
    (0, _.useEffect)(() => {
      let _ = () => {
        _(_());
      };
      return (
        _(),
        window.addEventListener(`resize`, _),
        () => window.removeEventListener(`resize`, _)
      );
    }, []),
    _
  );
}
function _(_ = 940) {
  return _() >= _;
}
function _(_) {
  let _ = _(),
    _ = _ >= 940,
    _ = _(_);
  return _
    ? {
        nMaxCapsulesPerRow: _.nMaxItemsPerRow,
        bScreenIsWide: _,
      }
    : {
        nMaxCapsulesPerRow: Math.min(
          Math.max(Math.floor(_ / _.nItemMinimumWidth), 1),
          _.nMaxItemsPerRow,
        ),
        bScreenIsWide: _,
      };
}
function _(_) {
  let _ = _(_);
  return _()
    ? _.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / _.nItemMinimumWidth), 1),
        _.nMaxItemsPerRow,
      );
}
function _(_) {
  return (0, _.jsxs)(`a`, {
    href: _.strURL,
    className: _.Box,
    "data-modal-content-sizetofit": !!_.bSizeToFit,
    "data-appid": _.appid,
    "data-publishedfileid": _.publishedfileid,
    children: [
      (0, _.jsx)(_, {
        strURL: _.strPreviewURL,
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            children: _.strTitle,
          }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(`span`, {
              className: _.Type,
              children: _.strType,
            }),
          }),
          _.author &&
            (0, _.jsx)(_, {
              children: _.author,
            }),
          (0, _.jsx)(_, {
            children: _.strDescription,
          }),
        ],
      }),
    ],
  });
}
var _ = class extends _ {
    m_LinkFilter = _;
    m_parentNode = void 0;
    m_mapHostToComponent;
    m_globalStoreLink;
    constructor(_, _, _, _) {
      super(_),
        (this.m_parentNode = _),
        (this.m_mapHostToComponent = _),
        (this.m_globalStoreLink = _);
    }
    AppendText(_, _ = !1) {
      let _ = _;
      if (
        (_ || this.m_parentNode?.tag == `*`) &&
        (this.m_parentNode == null || this.m_parentNode.tag != `img`)
      ) {
        let _ = this.m_LinkFilter.exec(_);
        for (; _; ) {
          if (_.index > 0) {
            let _ = _.input.substring(0, _.index);
            super.AppendText(_, _);
          }
          let _ = _[0],
            _ = !1;
          if (this.m_mapHostToComponent) {
            for (let _ = 0; _ < this.m_mapHostToComponent.length; ++_)
              if (this.m_mapHostToComponent[_].urlRegExp.exec(_)) {
                (_ = !0),
                  super.AppendNode(
                    this.m_mapHostToComponent[_].fnBBComponent(
                      _,
                      this.m_globalStoreLink,
                    ),
                  );
                break;
              }
          }
          _ || super.AppendNode(_(_)),
            (_ = _.input.substring(_.index + _.length)),
            (_ = this.m_LinkFilter.exec(_));
        }
      }
      _.length > 0 && super.AppendText(_, _);
    }
  },
  _ = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  _ = class extends _ {
    m_EmoteRegex = new RegExp(_);
    AppendText(_, _ = !1) {
      let _ = _;
      if (_.length >= 3) {
        let _ = this.m_EmoteRegex.exec(_);
        for (; _; ) {
          if (_.index > 0) {
            let _ = _.input.substring(0, _.index);
            super.AppendText(_, _);
          }
          let _ = _[1];
          super.AppendNode(
            _.createElement(
              _,
              {
                emoticon: _,
              },
              [],
            ),
          ),
            (_ = _.input.substring(_.index + _.length + 2)),
            (_ = this.m_EmoteRegex.exec(_));
        }
      }
      _.length > 0 && super.AppendText(_, _);
    }
  },
  _ = class extends _ {
    m_parentNode = void 0;
    constructor(_, _) {
      super(_), (this.m_parentNode = _);
    }
    AppendText(_, _ = !1) {
      let _ = _;
      this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !_(_) &&
        (_ = _(_)),
        super.AppendText(_, _);
    }
  };
function _(_) {
  let _ = _.trim();
  return (
    _.startsWith(`{STEAM_CLAN_IMAGE}`) || _.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)
  );
}
var _ =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
function _(_) {
  return _ ? _.test(_.trim()) : !1;
}
function _(_, _) {
  return _(_) ? _ : _;
}
var _ = `NiXfRuagfO4-`;
function _(_) {
  let { inputType: _, _: _, bApplyUserContentPref: _ } = _,
    _ = _ == `bundle` ? `bundle` : _ == `sub` ? `sub` : `game`,
    _ = _(_, _),
    { data: _ } = _(_),
    { data: _, isPending: _ } = _(_ ? _ : void 0);
  if (!_) return null;
  if (_) {
    if (_) return null;
    if (_?.filter_failure == 40 || _?.filter_failure == 50) {
      let _ = `#StoreCapsule_App_Excluded`;
      switch (_) {
        case `sub`:
          _ = `#StoreCapsule_Package_Excluded`;
          break;
        case `bundle`:
          _ = `#StoreCapsule_Bundle_Excluded`;
      }
      return (0, _.jsx)(`div`, {
        className: _(_, `AppSummaryWidgetCtn`),
        children: _(
          _,
          (0, _.jsx)(`a`, {
            href: _.STORE_BASE_URL + `account/preferences/`,
          }),
        ),
      });
    }
  }
  return (0, _.jsx)(`div`, {
    className: _(_, `AppSummaryWidgetCtn`),
    children: (0, _.jsx)(_, {
      _: _,
      type: _,
      bShowDemoButton: _.type == 1,
      bAllowTwoLinesForHeader: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
var _ =
    /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
  _ =
    /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
  _ =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
function _(_, _) {
  let _ = new RegExp(_).exec(_);
  if (!_ || _.length <= 3) return;
  let _ = _[3];
  if (_)
    switch (_[1]) {
      case `gid`:
        return {
          eventGID: _,
          strClanSteamID64: _[2],
        };
      case `group`:
        return {
          eventGID: _,
          clanAccountID: Number.parseInt(_[2]),
        };
      case `groups`:
        return {
          eventGID: _,
          strGroupVanity: _[2],
        };
      default:
        return isNaN(+_[2])
          ? {
              eventGID: _,
              strOGGVanity: _[2],
            }
          : {
              eventGID: _,
              appid: Number(_[2]),
            };
    }
}
function _(_, _, _, _, _) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _, _, _, _, _)).data ?? void 0;
}
function _(_, _, _, _, _) {
  return [`useEventImageForSizeAsArrayWithFallback`, _?.GID, _, _, _, _];
}
function _(_, _, _, _, _, _, _) {
  return {
    queryKey: _(_, _, _, _, _),
    enabled: _ && !!_.GID,
    queryFn: async () => {
      if (!_) return null;
      let _ = [];
      if (!_.BImageNeedScreenshotFallback(_, _)) {
        let _ = await _.ensureQueryData(_(_, _, _, _, _, _));
        if ((_ && _.push(_), _ != _.full)) {
          let _ = await _.ensureQueryData(_(_, _, _, _, _, _.full));
          _ && _.push(_);
        }
      }
      if (!_)
        try {
          let _ = await _.ensureQueryData(_(_, _, _));
          _ && _.push(_);
        } catch (_) {
          if (
            (_(
              !1,
              `Failed to get fallback art/screenshot for event ${_?.GID} from clan ${_?.clanSteamID.GetAccountID()}`,
            ),
            _.length == 0)
          )
            throw _;
        }
      return _;
    },
  };
}
function _(_) {
  let _ = _.GetELanguageFallback(_);
  return _ == _ ? `${_}` : `${_}_${_}`;
}
function _(_) {
  return _ ? _(new _(_.clanSteamID64), _.event) : null;
}
async function _(_, _) {
  let _ = new URLSearchParams();
  _.clanAccountID && _.set(`clan_accountid`, String(_.clanAccountID)),
    _.appid && _.set(`appid`, String(_.appid)),
    _.eventGID && _.set(`event_gid`, _.eventGID),
    _.announcementGID && _.set(`announcement_gid`, _.announcementGID),
    _.set(`lang_list`, _(_)),
    _.set(`last_modified_time`, `0`),
    _.set(`origin`, window.location.origin);
  let _ = _.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + _.toString(),
    _ = await fetch(_);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  return _.success !== 1 || !_.event?.clan_steamid
    ? null
    : {
        clanSteamID64: _.event.clan_steamid,
        event: _.event,
      };
}
function _(_, _) {
  return [
    `LinkedPartnerEvent`,
    _.clanAccountID,
    _.appid,
    _.eventGID,
    _.announcementGID,
    _,
  ];
}
function _(_) {
  return (
    !!_ &&
    (!!_.clanAccountID || !!_.appid) &&
    (!!_.eventGID || !!_.announcementGID)
  );
}
function _(_, _) {
  let _ = _(_);
  return {
    queryKey: _(_ ?? {}, _),
    queryFn: () => _(_ ?? {}, _),
    select: _,
    enabled: _,
    staleTime: 36e5,
    retry: !1,
  };
}
function _(_) {
  let _ = _(_.LANGUAGE);
  return _(_(_, _));
}
function _({ clanSteamID: _, strVanity: _, strGroupVanity: _ }) {
  let _ = _ !== void 0 || _ !== void 0,
    { data: _, isPending: _ } = _(
      _ ? (_ ?? _ ?? ``) : ``,
      _ === void 0 ? `group` : `store`,
    );
  if (!_) return _?.GetAccountID();
  if (!_) return _?.clanAccountID ?? null;
}
function _(_) {
  let { appid: _, announcementGID: _, eventGID: _, strURL: _ } = _,
    _ = _(_),
    _ = _ === null,
    {
      data: _,
      isPending: _,
      isError: _,
    } = _(
      _
        ? void 0
        : {
            clanAccountID: _ ?? void 0,
            appid: _,
            eventGID: _,
            announcementGID: _,
          },
    ),
    _ = _(_ || _?.appid || void 0),
    { data: _ } = _(_);
  if (_ || _ || _ === null) return _(_);
  if (_ || !_) return (0, _.jsx)(_, {});
  let _ = _(_.LANGUAGE),
    _ = _.GetNameWithFallback(_),
    _ = _.GetSubTitleWithSummaryFallback(_),
    _ = _?.name,
    _ = _(_.GetStartTimeAndDateUnixSeconds());
  return (0, _.jsxs)(_, {
    eventModel: _,
    route: _.k_eView,
    className: _.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": _,
    children: [
      (0, _.jsx)(_, {
        ..._,
        event: _,
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(_, {
            children: [
              _(
                _.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                _ ?? ``,
              ),
              (0, _.jsx)(_, {
                children: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(`div`, {
              className: _.Type,
              children: _,
            }),
          }),
          (0, _.jsx)(_, {
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      event: _,
      fnFilterImageURLsForKnownFailures: _,
      fnImageFailureCallback: _,
    } = _,
    _ = _(_, `capsule`, _(_.LANGUAGE), _.capsule_main) ?? [];
  return (
    _ && _ && (_ = _(_)),
    (0, _.jsx)(_, {
      className: _.Preview,
      rgSources: _ ?? [],
      onIncrementalError: (_, _, _) => _ && _(_),
    })
  );
}
var _ =
    /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
  _ = [`store.steampowered.com`, `store.steamchina.com`],
  _ = [`steampowered.com`, `steamcommunity.com`],
  _ = [`steamchina.com`],
  _ = [`steam.dev`, `valve.org`];
function _(_, _) {
  return _.some((_) => _ == _ || _.endsWith(`.${_}`));
}
function _(_) {
  let _ = _(_).toLocaleLowerCase(),
    _ = _(_.STORE_BASE_URL).toLocaleLowerCase(),
    _ = _(_.COMMUNITY_BASE_URL).toLocaleLowerCase();
  return _ == _ || _ == _
    ? !0
    : _.includes(_)
      ? _(_, _(_, _) ? _ : _)
      : _(_, [..._, ..._, ..._]);
}
function _(_) {
  if (_(_)) return _(_);
}
function _(_) {
  let _ = new RegExp(_).exec(_);
  if (!_ || _.length <= 2) return;
  let _ = _[1].toLowerCase(),
    _ = Number(_[2]);
  if (_ > 0 && _(_))
    return {
      _: _,
      strItemType: _,
      storeItemKey:
        _ == `sub`
          ? {
              packageid: _,
            }
          : _ == `bundle`
            ? {
                bundleid: _,
              }
            : {
                appid: _,
              },
    };
}
function _(_) {
  return !!_ && (_.GetEventType() == 36 || _.GetEventType() == 20);
}
function _(_) {
  let _ = _(_),
    _ = _ ? _.clanSteamID.GetAccountID() : void 0,
    { data: _, isLoading: _ } = _(_),
    { data: _, isLoading: _ } = _(_);
  if (!_) return null;
  if (!(_ || _)) return !_ || !_ || !_(_, _) ? null : (_.appids ?? []);
}
function _(_, _) {
  return _ === null || (_.length > 0 && _.every((_) => _.includes(_)));
}
function _(_, _) {
  let _ = _(_);
  if (_.appid === void 0) return !0;
  if (!(_.appid > 0)) return !1;
  if (_ !== void 0) return _(_, [_.appid]);
}
function _({ link: _, strURL: _, eventModel: _, bAnnouncement: _ }) {
  let _ = _(_, _);
  if (_ === void 0) return null;
  if (!_) return _(_, _);
  let _ =
    _.strClanSteamID64 === void 0
      ? _.clanAccountID === void 0
        ? void 0
        : _.InitFromClanID(_.clanAccountID, _.EUNIVERSE)
      : new _(_.strClanSteamID64);
  return (0, _.jsx)(_, {
    appid: _.appid,
    clanSteamID: _,
    strVanity: _.strOGGVanity,
    strGroupVanity: _.strGroupVanity,
    eventGID: _ ? void 0 : _.eventGID,
    announcementGID: _ ? _.eventGID : void 0,
    strURL: _,
  });
}
function _(_, _, _, _ = !1) {
  if (_(_)) {
    let _ = _(_, _);
    if (_)
      return (0, _.jsx)(_, {
        link: _,
        strURL: _,
        eventModel: _?.event,
        bAnnouncement: _,
      });
  }
  return _(_, _?.event);
}
function _(_, _) {
  return _(_, _, _);
}
function _(_, _) {
  return _(_, _, _);
}
function _(_, _) {
  return _(_, _, _, !0);
}
var _ = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
function _(_) {
  if (!_.test(_)) return;
  let _ = _.split(`?`);
  if (_.length == 2) return new URLSearchParams(_[1]).get(`id`) ?? void 0;
}
function _(_) {
  let { sharedFileID: _ } = _,
    { data: _ } = _(_),
    _ = _.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    _ = _ ?? {
      sharedfileid: _,
      title: _(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: _ + _,
    },
    _ = _(_.url) ? _ + _.url : _.url,
    _ = _.personnaname !== void 0 && _.personnaname.length > 0;
  return (0, _.jsx)(_, {
    strURL: _,
    strTitle: _.title,
    strPreviewURL: _.previewurl,
    strType: _.type,
    strDescription: _.description,
    author:
      _ &&
      _(
        `#EventEditor_Author`,
        (0, _.jsx)(_, {
          children: _.personnaname,
        }),
      ),
    publishedfileid: _,
    appid: _.appid,
    bSizeToFit: _.bSizeToFit,
  });
}
var _ = `x-q4pa21GtQ-`,
  _ = `jjfjy77nkEg-`,
  _ = `xk1sG-uqpwY-`,
  _ = `XZqUhfrxufg-`,
  _ = `h4V9nI3kyqU-`,
  _ = `gCqj4CIOecY-`,
  _ = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
function _(_) {
  return [`sketchfab_oembed`, _];
}
function _(_) {
  return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(_)}`;
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await fetch(_(_));
      if (_.status === 404) return null;
      if (!_._) throw Error(`sketchfab oembed returned ${_.status}`);
      return await _.json();
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let { modelID: _ } = _,
    [_, _] = _.useState(!0),
    { data: _ } = _(_);
  if (_) {
    let _ = () => _(!1);
    return (0, _.jsxs)(`div`, {
      className: _,
      role: `button`,
      tabIndex: 0,
      onClick: _,
      onKeyDown: (_) => {
        (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _());
      },
      children: [
        _?.thumbnail_url &&
          (0, _.jsx)(`img`, {
            className: `FFbDls5-Ssk-`,
            src: _.thumbnail_url,
            alt: _.title,
          }),
        (0, _.jsx)(`img`, {
          className: _,
          alt: ``,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`span`, {
                  className: _,
                  children: _(`#EventDisplay_Sketchfab`),
                }),
                _?.title &&
                  (0, _.jsxs)(`div`, {
                    children: [_.title, `\xA0`],
                  }),
              ],
            }),
            _?.author_name &&
              (0, _.jsx)(`div`, {
                className: `-r4s23p52-0-`,
                children: _.author_name,
              }),
          ],
        }),
      ],
    });
  }
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`iframe`, {
      className: _,
      title: _?.title ?? _,
      src: `https://sketchfab.com/models/${encodeURIComponent(_)}/embed?autostart=1`,
      frameBorder: 0,
      allowFullScreen: !0,
    }),
  });
}
var _ =
  /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
function _(_) {
  let _ = _.exec(_),
    _ = _ ? Number(_[1]) : 0;
  return _ > 0 ? _ : void 0;
}
function _(_) {
  return _(_) ? _(_) : void 0;
}
var _ = `_8mFolns3-hw-`;
function _(_) {
  let { defid: _ } = _,
    _ = _(_);
  if (!_ || !_.community_item_data) return null;
  let _ = _.appid,
    _ = _.community_item_data.item_image_large,
    _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      toolTipContent: _.community_item_data.item_description,
      children: (0, _.jsx)(`img`, {
        src: _,
        alt: _.community_item_data.item_title,
      }),
    }),
  });
}
var _ = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
  _ = /twitter\.com\/(\w+)(\/?)$/i,
  _ = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
  _ = /twitch\.tv\/(\w+)(\/?)$/i,
  _ =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
function _() {
  return _.EREALM === _.k_ESteamRealmChina;
}
var _ = new Map();
function _() {
  let _ = _.EREALM,
    _ = _.get(_);
  return (
    _ ||
      ((_ = _()
        ? [
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
          ]
        : [
            {
              urlRegExp: new RegExp(/youtu.be|youtube.com/i),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
          ]),
      _.set(_, _)),
    _
  );
}
function _(_) {
  return _().find((_) => !!_.urlRegExp.exec(_));
}
function _(_) {
  return _.useMemo(() => _(_), [_]);
}
function _(_, _) {
  if (_()) return null;
  let _ = new RegExp(_).exec(_);
  if (_ && _.length > 1) {
    let _ = _[1];
    if (_?.length > 0) {
      let _ =
        `https://medal.tv/clip/` +
        _ +
        `/?autoplay=0&donate=0` +
        (_ && _.event ? `&steamappid=` + _.event.appid : ``);
      return (0, _.jsx)(`iframe`, {
        className: _,
        src: _,
        title: _,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return _(_, _?.event);
}
function _(_, _) {
  let _ = new RegExp(_).exec(_);
  if (_ && _.length > 1) {
    let _ = _[1];
    if (_ && _.length > 1)
      return (0, _.jsx)(_, {
        modelID: _,
      });
  }
  return _(_, _?.event);
}
function _(_, _) {
  let _ = _(_);
  return _ === void 0
    ? _(_, _?.event)
    : (0, _.jsx)(_, {
        sharedFileID: _,
      });
}
function _(_, _) {
  let _ = _(_);
  return _
    ? (0, _.jsx)(_, {
        eventModel: _?.event,
        inputID: _._,
        inputType: _.strItemType,
        fallbackUrl: _,
      })
    : _(_, _?.event);
}
function _(_) {
  let { inputID: _, inputType: _, eventModel: _, fallbackUrl: _ } = _,
    _ = _(_, _),
    { data: _ } = _(_),
    _ = _(_),
    _;
  return (
    _ === null
      ? (_ = !0)
      : _ && _ && (_ = _(_, _.appid ? [_.appid] : (_.included_appids ?? []))),
    _ === void 0
      ? null
      : _
        ? (0, _.jsx)(_, {
            _: _,
            inputType: _,
            bApplyUserContentPref: !0,
          })
        : _(_, _)
  );
}
function _(_, _) {
  let _ = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _(_),
        children: (0, _.jsx)(_, {
          defid: _,
          url: _,
        }),
      })
    : _(_, _?.event);
}
function _(_, _) {
  return _() ? null : _(_, (0, _.jsx)(_, {}), `@`, _);
}
function _(_, _) {
  return _() ? null : _(_, (0, _.jsx)(_, {}), `#`, _);
}
function _(_, _) {
  return _() ? null : _(_, (0, _.jsx)(_, {}), void 0, _);
}
function _(_, _) {
  return _(_, (0, _.jsx)(_, {}), void 0, _);
}
function _(_, _, _, _) {
  let _,
    _ = _.endsWith(`/`) ? _.length - 1 : _.length,
    _ = _.lastIndexOf(`/`, _ - 1);
  _ != -1 && _ + 1 < _.length && (_ = _.substring(_ + 1, _)),
    _ && _ && (_ = _ + _);
  let _ = _(_, _?.event, _ ?? _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      _,
    ],
  });
}
function _(_) {
  switch (_) {
    case `button`:
      return _(_, `LinkButton`);
    case `pill`:
      return _(_, `LinkPill`);
    default:
      return _(_, `Link`);
  }
}
function _(_, _, _) {
  let _ = ``;
  return (
    _ == `button` && _ && (_ += `background-color: ${_};`),
    _ == `pill` && _ && (_ += `color: ${_};`),
    _.length == 0 ? void 0 : _
  );
}
function _(_, _, _) {
  let _;
  return (
    (_ == `button` || _ == `pill`) &&
      _ &&
      (_ = {
        backgroundColor: _,
      }),
    (_ == `button` || _ == `pill`) &&
      _ &&
      (_ = {
        ...(_ ?? {}),
        color: _,
      }),
    _
  );
}
function _(_, _) {
  let _ = (
    typeof _ == `string`
      ? _
      : Array.isArray(_) && _.length == 1 && typeof _[0] == `string`
        ? _[0]
        : void 0
  )?.trim();
  return !_ || !_ || _ != _.trim();
}
function _(_) {
  let _ = _(_(_.args) || _(_.args, `href`)),
    _ = _(_.args, `style`),
    _ = _(_.args, `id`),
    _ = _(_(_.args, `buttoncolor`) || _(_.args, `bgcolor`), void 0),
    _ = _(_(_.args, `labelcolor`) || _(_.args, `color`), void 0),
    _ = _(_),
    _ = _.context.event,
    _ = _(_, _.language, _?.rtime32_last_modified),
    _ = _(_(_.children, _) ? `` : (_ ?? ``));
  if (_ && _)
    return _.fnBBComponent(_, {
      event: _.context.event,
    });
  if (_ === void 0 || _ == null) return _.children || ``;
  _ = typeof _ == `string` ? _ : _[1];
  let _ = _(_, _, _);
  return typeof _ == `string` && _.length > 0 && _[0] == `#`
    ? (0, _.jsx)(_, {
        className: _,
        href: _,
        style: _,
        children: _.children,
      })
    : _ == `steam://settings/account`
      ? (0, _.jsx)(_, {
          className: _,
          href: `steam://settings/account`,
          children: _.children,
        })
      : (0, _.jsx)(_, {
          className: _,
          url: _,
          event: _.context.event,
          _: _,
          style: _,
          children: _.children,
        });
}
function _(_) {
  let _ = _(_.args, `href`),
    _ = _(_);
  return _
    ? _.fnBBComponent(_, {
        event: _.context.event,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
var _ = `hPeepTEP2A0-`,
  _ = `RzxfM12jbio-`,
  _ = `kQJ64kMGQbg-`,
  _ = `_74WMutU3Gxc-`,
  _ = (0, _.createContext)({});
function _(_) {
  let {
      autoplayEnabled: _,
      setAutoplayEnabled: _,
      playerVolume: _,
      setPlayerVolume: _,
      audioMuted: _,
      setAudioMuted: _,
      children: _,
    } = _,
    _ = (0, _.useMemo)(
      () => ({
        m_bAutoplayEnabled: _,
        m_fnSetAutoplayEnabled: _,
        m_nPlayerVolume: _,
        m_fnSetPlayerVolume: _,
        m_bAudioMuted: _,
        m_fnSetAudioMuted: _,
      }),
      [_, _, _, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return (0, _.useContext)(_);
}
var _ = 5,
  _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Play = 1)] = `Play`),
      (_[(_.Pause = 2)] = `Pause`),
      _
    );
  })({}),
  _ = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new _();
    m_persistState = {};
    m_fnOnPlaybackEnd;
    m_fnOnPlayPauseChange;
    m_fnOnMuteChange;
    m_bMuteWhenAutoplayBlocked = !1;
    m_strStatsURL = ``;
    m_bSentStats = !1;
    m_bPaused = !1;
    m_bUserInputNeeded = !1;
    m_bMuted = !1;
    m_nVolume = 1;
    m_eFailureReason = _.Invalid;
    m_maxDimensions = null;
    m_bPlaybackStarted = !1;
    m_bBuffering = !0;
    m_bHasCaptions = !1;
    m_bShowingCaption = !1;
    m_nPlaybackTime = 0;
    m_nVideoStartTime = 0;
    m_nVideoDuration = 0;
    m_nBufferedEndTime = 0;
    constructor(_) {
      _(this), (this.m_persistState = _ || {});
    }
    IsPaused() {
      return this.m_bPaused;
    }
    GetUserInputNeeded() {
      return this.m_bUserInputNeeded;
    }
    GetPlaybackTime() {
      return this.m_nPlaybackTime;
    }
    GetBufferedEndTime() {
      return this.m_nBufferedEndTime;
    }
    GetTimelineDuration() {
      return this.m_nVideoDuration;
    }
    GetVolume() {
      return this.m_nVolume;
    }
    GetMuted() {
      return this.m_bMuted;
    }
    GetMaxVideoDimensions() {
      return this.m_maxDimensions;
    }
    HasPlaybackStarted() {
      return this.m_bPlaybackStarted;
    }
    IsBuffering() {
      return this.m_bBuffering;
    }
    HasCaptions() {
      return this.m_bHasCaptions;
    }
    IsShowingCaption() {
      return this.m_bShowingCaption;
    }
    Start(_, _, _, _, _) {
      this.Stop(),
        (this.m_strStatsURL = _ || ``),
        (this.m_elVideo = _),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `playing`,
          this.OnVideoPlaying,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `pause`,
          this.OnVideoPause,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `timeupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `volumechange`,
          this.OnVolumeChange,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `ended`,
          this.OnVideoEnd,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-ended`,
          this.OnVideoValveEnded,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-bufferupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-downloadfailed`,
          this.OnDownloadFailed,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-userinputneeded`,
          this.OnUserInputNeeded,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-metadatachanged`,
          this.OnMetadataChanged,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-captionschange`,
          this.OnCaptionsChange,
        ),
        this.m_listeners.AddEventListener(window, `pagehide`, this.SendStats),
        (this.m_player = new _(this.m_elVideo)),
        this.m_player.SetTimeoutAfterFailedDownload(!1);
      let _ =
        this.m_persistState.m_bAudioMuted !== void 0 &&
        this.m_persistState.m_bAudioMuted;
      this.SetMute(_, !0);
      let _ =
        this.m_persistState.m_nPlayerVolume === void 0
          ? 1
          : this.m_persistState.m_nPlayerVolume;
      this.SetVolume(_, !0),
        this.m_player.SetMuteOnAutoplayBlocked(this.m_bMuteWhenAutoplayBlocked),
        this.m_player.PlayMPD(_, _, _);
    }
    Stop() {
      this.SendStats(),
        this.m_listeners.Unregister(),
        this.m_player && this.m_player.Close(),
        (this.m_elVideo = null),
        (this.m_player = null),
        (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_nVideoStartTime = 0),
        (this.m_nVideoDuration = 0),
        (this.m_nBufferedEndTime = 0);
    }
    IsInitialized() {
      return !!this.m_player && !!this.m_elVideo;
    }
    OnVideoPlaying() {
      let _ = this.m_bPaused;
      (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        _ && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!0);
    }
    OnVideoPause() {
      let _ = this.m_bPaused;
      (this.m_bPaused = !0),
        !_ && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!1);
    }
    OnVideoTimeUpdate() {
      this.IsInitialized() &&
        ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
        (this.m_nVideoDuration =
          this.m_player.GetBufferedLiveEdgeTime() - this.m_nVideoStartTime),
        (this.m_nPlaybackTime =
          this.m_player.GetCurrentPlayTime() - this.m_nVideoStartTime),
        (this.m_nBufferedEndTime =
          this.m_player.GetBufferedEndTime() - this.m_nVideoStartTime),
        (this.m_bBuffering = this.m_player.IsBuffering()),
        this.m_bBuffering || (this.m_bPlaybackStarted = !0));
    }
    OnVolumeChange() {
      this.IsInitialized() && this.SetMuteInternal(this.m_player.IsMuted());
    }
    OnVideoEnd() {}
    OnVideoValveEnded() {
      this.m_fnOnPlaybackEnd && this.m_fnOnPlaybackEnd();
    }
    OnDownloadFailed(_) {
      console.log(`video download failed`, _.detail),
        (this.m_eFailureReason = _.detail || _.PlaybackError);
    }
    OnUserInputNeeded() {
      this.m_bUserInputNeeded = !0;
    }
    OnMetadataChanged() {
      if (!this.IsInitialized()) return;
      let _ = this.m_player.GetMaxWidthAndHeight();
      _ &&
        ((this.m_maxDimensions &&
          this.m_maxDimensions.nWidth == _.nWidth &&
          this.m_maxDimensions.nHeight == _.nHeight) ||
          (this.m_maxDimensions = _));
    }
    OnCaptionsChange() {
      this.IsInitialized() &&
        ((this.m_bHasCaptions = this.m_player.BHasTimedText()),
        (this.m_bShowingCaption = this.m_player.IsShowingCaption()));
    }
    UserInputReceived() {
      this.IsInitialized() &&
        ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
    }
    SetVolume(_, _ = !1) {
      this.IsInitialized() &&
        ((this.m_nVolume = _),
        this.m_player.SetVolume(_),
        !_ &&
          this.m_persistState.m_fnSetPlayerVolume &&
          this.m_persistState.m_fnSetPlayerVolume(_));
    }
    SetMute(_, _ = !1) {
      this.IsInitialized() &&
        (this.SetMuteInternal(_),
        this.m_player.SetMuted(_),
        !_ &&
          this.m_persistState.m_fnSetAudioMuted &&
          this.m_persistState.m_fnSetAudioMuted(_));
    }
    SetMuteInternal(_) {
      this.m_bMuted != _ &&
        ((this.m_bMuted = _),
        this.m_fnOnMuteChange && this.m_fnOnMuteChange(_));
    }
    TogglePlayPauseState() {
      return this.IsInitialized() ? (this.m_player.IsPaused() ? 1 : 2) : 0;
    }
    TogglePlayPause() {
      return this.IsInitialized()
        ? this.m_player.IsPaused()
          ? (this.Play(), 1)
          : (this.Pause(), 2)
        : 0;
    }
    Play() {
      this.IsInitialized() &&
        (this.m_player.IsAtEnd() && this.m_player.Seek(0),
        this.m_player.Play());
    }
    Pause() {
      this.IsInitialized() && this.m_player.Pause();
    }
    Seek(_) {
      this.IsInitialized() && this.m_player.Seek(this.m_nVideoStartTime + _);
    }
    SeekRelative(_) {
      this.IsInitialized() && this.m_player.Seek(this.m_nPlaybackTime + _);
    }
    UpdatePersistState(_) {
      this.m_persistState != _ &&
        ((this.m_persistState = _),
        this.IsInitialized() &&
          (_.m_nPlayerVolume !== void 0 &&
            this.SetVolume(_.m_nPlayerVolume, !0),
          _.m_bAudioMuted !== void 0 && this.SetMute(_.m_bAudioMuted, !0)));
    }
    SetMuteWhenAutoplayBlocked(_) {
      (this.m_bMuteWhenAutoplayBlocked = _),
        this.IsInitialized() && this.m_player.SetMuteOnAutoplayBlocked(_);
    }
    SetPlaybackEndCallback(_) {
      this.m_fnOnPlaybackEnd = _;
    }
    SetOnPlayPauseChangeCallback(_) {
      this.m_fnOnPlayPauseChange = _;
    }
    SetOnMuteChangeCallback(_) {
      this.m_fnOnMuteChange = _;
    }
    GetThumbnail(_) {
      return this.IsInitialized() ? this.m_player.GetThumbnail(_) : null;
    }
    GetVideoRepresentations() {
      return this.IsInitialized()
        ? this.m_player.GetVideoRepresentations()
        : [];
    }
    SetVideoRepresentation(_) {
      this.IsInitialized() && this.m_player.SetVideoRepresentation(_);
    }
    GetCaptionRepresentations() {
      return this.IsInitialized()
        ? this.m_player.GetCaptionRepresentations()
        : [];
    }
    SetCaptionRepresentation(_) {
      this.IsInitialized() && this.m_player.SetSubtitles(_);
    }
    DisableCaptions() {
      this.IsInitialized() && this.m_player.SetSubtitles(-1);
    }
    GetFailureReason() {
      return this.m_eFailureReason;
    }
    SendStats() {
      !this.m_bSentStats &&
        this.m_player &&
        this.m_strStatsURL &&
        (_(this.m_player, this.m_strStatsURL, this.m_eFailureReason),
        (this.m_bSentStats = !0));
    }
  };
_([_], _.prototype, `m_bPaused`, void 0),
  _([_], _.prototype, `m_bUserInputNeeded`, void 0),
  _([_], _.prototype, `m_bMuted`, void 0),
  _([_], _.prototype, `m_nVolume`, void 0),
  _([_], _.prototype, `m_eFailureReason`, void 0),
  _([_], _.prototype, `m_maxDimensions`, void 0),
  _([_], _.prototype, `m_bPlaybackStarted`, void 0),
  _([_], _.prototype, `m_bBuffering`, void 0),
  _([_], _.prototype, `m_bHasCaptions`, void 0),
  _([_], _.prototype, `m_bShowingCaption`, void 0),
  _([_], _.prototype, `m_nPlaybackTime`, void 0),
  _([_], _.prototype, `m_nVideoStartTime`, void 0),
  _([_], _.prototype, `m_nVideoDuration`, void 0),
  _([_], _.prototype, `m_nBufferedEndTime`, void 0),
  _([_.bound], _.prototype, `OnVideoPlaying`, null),
  _([_], _.prototype, `OnVideoPause`, null),
  _([_.bound], _.prototype, `OnVideoTimeUpdate`, null),
  _([_], _.prototype, `OnVolumeChange`, null),
  _([_], _.prototype, `OnVideoEnd`, null),
  _([_], _.prototype, `OnVideoValveEnded`, null),
  _([_], _.prototype, `OnDownloadFailed`, null),
  _([_], _.prototype, `OnUserInputNeeded`, null),
  _([_.bound], _.prototype, `OnMetadataChanged`, null),
  _([_.bound], _.prototype, `OnCaptionsChange`, null),
  _([_], _.prototype, `UserInputReceived`, null),
  _([_.bound], _.prototype, `SetMuteInternal`, null),
  _([_], _.prototype, `SendStats`, null);
function _(_, _, _, _, _, _, _) {
  let _ = _(),
    _ = (0, _.useRef)(void 0);
  _.current ||= new _(_);
  let _ = _(
    (_) => {
      if (_) return _.current.Start(_, _, _, _, _), () => _.current.Stop();
    },
    [_, _, _, _],
  );
  return (
    (0, _.useEffect)(() => {
      _.current.UpdatePersistState(_);
    }, [_]),
    (0, _.useEffect)(() => {
      _.current.SetPlaybackEndCallback(_);
    }, [_]),
    (0, _.useEffect)(() => {
      _.current.SetOnPlayPauseChangeCallback(_);
    }, [_]),
    (0, _.useEffect)(() => {
      _.current.SetOnMuteChangeCallback(_), _ && _(_.current.GetMuted());
    }, [_]),
    [_, _.current]
  );
}
function _(_, _) {
  (_ = !!_),
    (0, _.useEffect)(() => {
      _.SetMuteWhenAutoplayBlocked(_);
    }, [_, _]);
}
function _(_, _) {
  let _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(!1);
  return (
    (0, _.useEffect)(() => {
      _.current != _ &&
        (_ ? ((_.current = _.IsPaused()), _.Pause()) : _.current || _.Play(),
        (_.current = _));
    }, [_, _, _, _]),
    _ || (_.current = !0),
    !_.current
  );
}
function _(_, _, _) {
  if (!navigator || navigator.sendBeacon === void 0) return;
  let _ = _.GetDASHPlayerStats().GetPlayerStatsSummary(),
    _ = _.GetAndCloseWatchedIntervals();
  if (_.reduce((_, _) => _ + (_[1] - _[0]), 0) < _ && _ == _.Invalid) return;
  let _ = {
      strManifest: _.IsPlayingHLS() ? _.GetHLSURL() : _.GetMPDURL(),
      watched: _,
      eFailureReason: _,
      ..._,
    },
    _ = JSON.stringify(_),
    _ = new FormData();
  _.append(`stats`, _), navigator.sendBeacon(_, _);
}
function _(_, _) {
  if (!_ || _(_) || _(_) || !_) return;
  let _ = _.getElementsByTagName(`video`);
  if (_.length == 0) return;
  let _ = _[0];
  _.webkitSetPresentationMode && _.webkitSetPresentationMode(`fullscreen`);
}
(0, _.createContext)(void 0);
function _(_) {
  return _ ? _ instanceof HTMLDialogElement : !1;
}
function _(_) {
  return _ ? _.hasAttribute(`popover`) : !1;
}
var _ = (0, _.createContext)(void 0);
function _(_) {
  let {
      iosVideoFallback: _,
      supportsTheater: _,
      supportsFullscreen: _,
      children: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(`none`);
  _(_ == `theater`), (_ = !!_), (_ = !!_);
  let _ = _(
      (_) => {
        if (((_.current = _), !_)) return;
        let _ = () => {
          _((_) => (_(_) ? `fullscreen` : _ == `fullscreen` ? `none` : _));
        };
        return (
          _.addEventListener(`fullscreenchange`, _),
          () => _.removeEventListener(`fullscreenchange`, _)
        );
      },
      [_],
    ),
    _ = _(
      (_) => {
        if (((_.current = _), !_)) return;
        let _ = () => {
            _((_) => (_ == `theater` ? `none` : _));
          },
          _ = (_) => {
            _.currentTarget == _.target && _(_) && _.close();
          },
          _ = (_) => {
            _.newState == `close` && _();
          },
          _ = new _();
        return (
          _(_)
            ? (_.AddEventListener(_, `close`, _),
              _.AddEventListener(_, `click`, _))
            : _(_)
              ? _.AddEventListener(_, `beforetoggle`, _)
              : _(!1, `Was expecting a dialog or popover`),
          () => _.Unregister()
        );
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _.current,
          _ = _.current;
        _ &&
          (_ != `fullscreen` && _(_) && _(_), _ == `fullscreen` && _(_, !!_)),
          _(_) &&
            (_ != `theater` && _.open && _.close(),
            _ == `theater` && _.showModal()),
          _(_) &&
            (_ != `theater` && _.matches(`:popover-open`) && _.hidePopover(),
            _ == `theater` && _.showPopover()),
          _(_);
      },
      [_],
    );
  (0, _.useEffect)(() => {
    _ == `theater` && !_ && _(`none`);
  }, [_, _, _]);
  let _ = (0, _.useMemo)(
    () => ({
      refFullscreen: _,
      refTheater: _,
      strMode: _,
      bSupportsTheater: _,
      bSupportsFullscreen: _,
      fnSetMode: _,
    }),
    [_, _, _, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return (0, _.useContext)(_);
}
function _(_, _) {
  return (0, _.useCallback)(() => {
    _ && (_.strMode == _ ? _.fnSetMode(`none`) : _.fnSetMode(_));
  }, [_, _]);
}
var _ = `A5RRwjvEUvY-`,
  _ = `-H-CbOmskAk-`,
  _ = `BhmPQ-Xd2d8-`,
  _ = `_7zvFUI6bX2k-`,
  _ = `uacZ-90MOII-`,
  _ = `k9Sm1n-4mwI-`,
  _ = `EE0MOLi31qY-`,
  _ = `_7GE4TR2MB3I-`,
  _ = `pQYV6KivA1I-`,
  _ = `pEu8vzuL1UY-`,
  _ = `ntDKWvpd0tk-`,
  _ = `m9RGLw-x46M-`;
function _() {
  return _((_) => {
    if (!_) return;
    let _ = (_) => {
        _.target == _ && (_.style.pointerEvents = `none`);
      },
      _ = (_) => {
        _.target == _ && (_.style.pointerEvents = `auto`);
      };
    return (
      _.addEventListener(`transitionstart`, _),
      _.addEventListener(`transitionend`, _),
      _.addEventListener(`transitioncancel`, _),
      () => {
        _.removeEventListener(`transitionstart`, _),
          _.removeEventListener(`transitionend`, _),
          _.removeEventListener(`transitioncancel`, _);
      }
    );
  }, []);
}
var _ = (0, _.forwardRef)(function (_, _) {
    let { children: _, ..._ } = _,
      _ = _(),
      _ = _(_, _);
    return (0, _.jsx)(`div`, {
      ref: _,
      ..._,
      children: _,
    });
  }),
  _ = 2e3,
  _ = 500,
  _ = 4e3,
  _ = -1,
  _ = _.createContext(void 0);
function _() {
  return (0, _.useContext)(_);
}
function _(_, _, _) {
  return (0, _.useMemo)(
    () => ({
      m_bMenuVisible: _,
      m_fnSetMenuVisible: _,
      m_refMenuLayer: _,
    }),
    [_, _, _],
  );
}
function _() {
  let _ = _();
  return _ ? _.m_bMenuVisible : !1;
}
function _() {
  let _ = _();
  _(_, `Missing controls context`);
  let _ = _.m_fnSetMenuVisible;
  return (0, _.useEffect)(() => (_(!0), () => _(!1)), [_]), _.m_refMenuLayer;
}
function _(_, _) {
  let [_, _] = _(_);
  return [_ || _, _];
}
function _(_) {
  return _.pointerType == `touch` ? _ : _;
}
function _() {
  return _;
}
function _(_) {
  let [_, _] = _(),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)({
      element: void 0,
      bKeepControls: !1,
    }),
    _ = (0, _.useCallback)(
      (_) => {
        if (_.target == _.current.element) return;
        let _ = _(_);
        _.current = {
          element: _.target,
          bKeepControls: _,
        };
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current.bKeepControls || _.current ? _(!0, 0) : _(!0, _);
      },
      [_, _, _],
    );
  _(_),
    _(
      _,
      (0, _.useCallback)(
        (_) => {
          (_.current = _), _(_);
        },
        [_, _],
      ),
    ),
    _(
      _,
      (0, _.useCallback)(() => {
        _(_);
      }, [_]),
    );
  let _ = (0, _.useCallback)(
      (_) => {
        _.pointerType != `touch` && (_(_), _(_(_)));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.pointerType != `touch` && (_(_), _(_(_)));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.pointerType != `touch` &&
          ((_.current = {
            element: void 0,
            bKeepControls: !1,
          }),
          _(_()));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current = _.currentTarget;
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current = void 0;
      },
      [_],
    );
  return [
    _,
    {
      onPointerEnter: _,
      onPointerMove: _,
      onPointerLeave: _,
      onPointerDown: _,
      onPointerUp: (0, _.useCallback)(
        (_) => {
          let _ = _.current;
          (_.current = void 0), _.currentTarget == _ && _(_(_));
        },
        [_],
      ),
      onPointerCancel: _,
    },
  ];
}
function _(_) {
  let _ = _.target,
    _ = _.currentTarget;
  for (; _ && _ != _; ) {
    if (_.dataset?.keepcontrols == `true`) return !0;
    _ = _.parentElement;
  }
  return !1;
}
function _(_) {
  let _ = (0, _.useRef)(_);
  return {
    onPointerDown: (0, _.useCallback)(
      (_) => {
        (_.pointerType !== `mouse` || _.button == 0) &&
          (_.currentTarget.setPointerCapture(_.pointerId),
          (_.current = _.pointerId));
      },
      [_],
    ),
    onPointerCancel: (0, _.useCallback)(
      (_) => {
        _.current == _.pointerId && (_.current = _);
      },
      [_],
    ),
    onPointerUp: (0, _.useCallback)(
      (_) => {
        if (_.current != _.pointerId) return;
        _.currentTarget.releasePointerCapture(_.pointerId), (_.current = _);
        let _ = _.currentTarget.getBoundingClientRect(),
          { clientX: _, clientY: _ } = _;
        _ >= _.left && _ <= _.right && _ >= _.top && _ <= _.bottom && _(_);
      },
      [_, _],
    ),
  };
}
function _() {
  let [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useCallback)(
      (_, _) => {
        (_.current &&= (window.clearTimeout(_.current), void 0)),
          _(_),
          _ && _ != 0 && (_.current = window.setTimeout(() => _(!1), _));
      },
      [_],
    );
  return (
    (0, _.useEffect)(
      () => () => {
        _.current && window.clearTimeout(_.current);
      },
      [],
    ),
    [_, _]
  );
}
function _(_, _) {
  let _ = (0, _.useRef)(!0),
    _ = _(_);
  (0, _.useEffect)(() => {
    let _ = _.current;
    (_.current = !1), (!_ || _) && _(_);
  }, [_, _, _]);
}
function _(_, _) {
  let _ = (0, _.useRef)(!0),
    _ = _(() => _.GetMuted());
  (0, _.useEffect)(() => {
    let _ = _.current;
    (_.current = !1), !_ && _();
  }, [_, _, _]);
}
function _(_) {
  let [_, _] = _(() => [_.GetMuted(), _.GetVolume()]);
  return [
    _,
    _,
    (0, _.useCallback)(
      (_) => {
        _.SetMute(!1), _.SetVolume(_);
      },
      [_],
    ),
    (0, _.useCallback)(() => _.SetMute(!_), [_, _]),
  ];
}
function _(_) {
  return _(() => [
    _.GetPlaybackTime(),
    _.GetTimelineDuration(),
    _.GetBufferedEndTime(),
  ]);
}
function _(_) {
  return _(() => _.GetFailureReason());
}
function _(_) {
  return _(() => _.IsPaused());
}
function _(_) {
  return (0, _.useCallback)(() => {
    _.TogglePlayPause();
  }, [_]);
}
function _(_, _) {
  (0, _.useEffect)(() => {
    let _ = _(() => {
      let _ = _.GetMaxVideoDimensions();
      _(
        _
          ? {
              nWidth: _.nWidth,
              nHeight: _.nHeight,
            }
          : null,
      );
    });
    return () => _();
  }, [_, _]);
}
function _(_) {
  return _(() => _.HasPlaybackStarted());
}
function _(_) {
  return _(() => ({
    bHasCaptions: _.HasCaptions(),
    bShowingCaption: _.IsShowingCaption(),
  }));
}
var _ = `cOcEiRe-dIg-`,
  _ = `QkF4JCVWpWw-`,
  _ = `_8RH876Wgr7A-`,
  _ = `b0G5PgYKHAM-`,
  _ = `_68B-8ItOIlc-`,
  _ = `GsDewiltMCM-`,
  _ = `BffT7IQWKYg-`,
  _ = `aejFKWIp7Dg-`,
  _ = `eBjRkRA8NpA-`,
  _ = `RrXwg35xzWc-`,
  _ = `_98b2uQrBfN4-`,
  _ = `LCeQJ5hJTnk-`,
  _ = `OPuK3adv80Y-`,
  _ = `qFZtjvdCOxo-`,
  _ = `vzX4l4uGgUg-`,
  _ = `HOEA4Jz0kQU-`,
  _ = `AAuicaihzn0-`,
  _ = {};
(_.arabic = () =>
  _(() => import(`./video_players_arabic.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./video_players_brazilian.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./video_players_bulgarian.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./video_players_czech.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./video_players_danish.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./video_players_dutch.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./video_players_english.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./video_players_finnish.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./video_players_french.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./video_players_german.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./video_players_greek.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./video_players_hungarian.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./video_players_indonesian.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./video_players_italian.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./video_players_japanese.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./video_players_koreana.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./video_players_latam.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./video_players_malay.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./video_players_norwegian.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./video_players_polish.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./video_players_portuguese.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./video_players_romanian.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./video_players_russian.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./video_players_sc_schinese.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./video_players_schinese.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./video_players_spanish.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./video_players_swedish.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./video_players_tchinese.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./video_players_thai.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./video_players_turkish.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./video_players_ukrainian.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./video_players_vietnamese.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  switch (_) {
    case 1:
      return _.Localize(`#StoreTrailer_Title_Category_Gameplay`);
    case 2:
      return _.Localize(`#StoreTrailer_Title_Category_Teaser`);
    case 3:
      return _.Localize(`#StoreTrailer_Title_Category_Cinematic`);
    case 4:
      return _.Localize(`#StoreTrailer_Title_Category_Update`);
    case 5:
      return _.Localize(`#StoreTrailer_Title_Category_Accolades`);
    case 6:
      return _.Localize(`#StoreTrailer_Title_Category_Interview`);
  }
  return _.Localize(`#StoreTrailer_Title_Category_Unknown`);
}
var _ = `12px`,
  _ = `LzRinklSJ-4-`,
  _ = `_2uk-hbrhKFI-`,
  _ = `Y9S-qDK8XPE-`,
  _ = 4,
  _ = parseInt(_);
function _(_) {
  let { refButton: _, onClose: _, scroll: _, children: _ } = _,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)({
      nLeft: 0,
      nTop: 0,
    }),
    _ = _(),
    _ = _(
      (_) => {
        if (((_.current = _), !_)) return;
        let _ = (_) => {
          let _ = _(_, _.target),
            _ = _(_.current, _.target);
          !_ && !_ && _();
        };
        if (_.ownerDocument.defaultView)
          return (
            _.ownerDocument.defaultView.addEventListener(`mouseup`, _),
            () => _.ownerDocument.defaultView?.removeEventListener(`mouseup`, _)
          );
      },
      [_, _, _],
    );
  if (
    ((0, _.useLayoutEffect)(() => {
      if (!_.current || !_.current || !_.current) return;
      let _ = _.current.getBoundingClientRect(),
        _ = _.current.getBoundingClientRect(),
        _ = _.current.getBoundingClientRect(),
        _ = _.right - _.left,
        _ = _.right - _.left,
        _ = _.left - _.left + _ / 2,
        _ = _.right - _.left,
        _ = _(_ - _ / 2, 0 + _, _ - _ - _),
        _ = _.bottom - _.top,
        _ = _.top - _ - _ - _.top;
      _({
        nLeft: _,
        nTop: _,
      });
    }, [_, _, _]),
    !_.current || !_)
  )
    return null;
  let _ = {
      left: _.nLeft,
      top: _.nTop,
    },
    _ = _(_, !!_ && `kaHR0KlvcO4-`),
    _ = (0, _.jsx)(`div`, {
      ref: _,
      style: _,
      className: _,
      role: `menu`,
      children: _,
    });
  return _.createPortal(_, _.current);
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    role: `separator`,
  });
}
function _(_) {
  let { onClick: _, checked: _, children: _ } = _,
    [_, _] = _(),
    _ = _(_, _ && `vi2dzrdIGJY-`),
    _ = `#2d73ff`,
    _ = `#00ccff`;
  return (
    _ && ((_ = `#eeeeee`), (_ = `#ffffff`)),
    (0, _.jsxs)(`div`, {
      className: _,
      role: `menuitemcheckbox`,
      "aria-checked": _,
      tabIndex: 0,
      onClick: _,
      onKeyDown: (_) => {
        (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _());
      },
      ..._,
      children: [
        _,
        _ &&
          (0, _.jsx)(_, {
            color: _,
            highlightColor: _,
          }),
      ],
    })
  );
}
function _(_) {
  let { player: _, refButton: _, onClose: _ } = _,
    _ = _(),
    _ = _.GetVideoRepresentations().map((_) => {
      let _ = () => {
          _.SetVideoRepresentation(_), _();
        },
        _ = _(_);
      return (0, _.jsx)(
        _,
        {
          onClick: _,
          checked: _.selected,
          children: _,
        },
        _._,
      );
    }),
    _ = _.length > 1,
    _ = !!_.m_fnSetAutoplayEnabled,
    _ = _ || !_;
  return (0, _.jsxs)(_, {
    refButton: _,
    onClose: _,
    children: [
      _ && _,
      _ && _ && (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(_, {
          onClose: _,
        }),
    ],
  });
}
function _(_) {
  let { onClose: _ } = _,
    _ = _(),
    _ = _.m_bAutoplayEnabled == 1,
    _ = (0, _.useCallback)(() => {
      _.m_fnSetAutoplayEnabled && _.m_fnSetAutoplayEnabled(!_), _();
    }, [_, _, _]);
  return (
    _.use(_.Ready()),
    (0, _.jsx)(_, {
      onClick: _,
      checked: _,
      children: _.Localize(`#StoreTrailer_AutoPlayVideos`),
    })
  );
}
function _(_) {
  return _(_)
    ? _.Localize(`#TrailerPlayer_Quality_Auto`)
    : _.height == 2160
      ? `2160p (4k)`
      : `${_.height}p`;
}
function _(_) {
  let { player: _, refButton: _, onClose: _ } = _,
    _ = _(_.LANGUAGE),
    _ = (0, _.useMemo)(() => {
      let _ = [..._.GetCaptionRepresentations()],
        _ = _.findIndex((_) => _.m_eLanguage == _);
      return _ > 0 && _(_, _, 0), _;
    }, [_, _]),
    _ = [];
  for (let _ of _)
    _.push(
      (0, _.jsx)(
        _,
        {
          onClick: () => {
            _.SetCaptionRepresentation(_.m_eLanguage), _();
          },
          checked: !1,
          children: _.m_strLabel,
        },
        _.m_eLanguage,
      ),
    ),
      _.m_eLanguage == _ && _.push((0, _.jsx)(_, {}));
  return _.length == 0
    ? null
    : (0, _.jsx)(_, {
        refButton: _,
        onClose: _,
        scroll: !0,
        children: _,
      });
}
var _ = 4,
  _ = 130,
  _ = _.forwardRef(function (_, _) {
    let {
        tooltip: _,
        onActivate: _,
        size: _,
        children: _,
        disableTooltip: _,
      } = _,
      _ = _(),
      _ = _(_);
    return (0, _.jsx)(_, {
      toolTipContent: _,
      direction: `top`,
      usePointerEvents: !0,
      bDisabled: _ || _,
      children: (0, _.jsx)(`div`, {
        ref: _,
        className: _,
        ..._,
        "data-keepcontrols": !0,
        children: _,
      }),
    });
  });
function _(_) {
  let { player: _ } = _,
    [_, _] = _(_),
    _ = _(_, !1),
    _ = _(_, !1);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        children: _,
      }),
      (0, _.jsx)(`span`, {
        className: _,
        children: `/`,
      }),
      (0, _.jsx)(`span`, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _(_, `theater`);
  if (!_ || !_.bSupportsTheater) return null;
  _.use(_.Ready());
  let _ = _.strMode == `theater`,
    _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    _ = _.Localize(
      _
        ? `#TrailerPlayer_ExitTheater_Tooltip`
        : `#TrailerPlayer_EnterTheater_Tooltip`,
    );
  return (0, _.jsx)(_, {
    onActivate: _,
    tooltip: _,
    children: _,
  });
}
function _(_) {
  let _ = _(),
    _ = _(_, `fullscreen`);
  if (!_ || !_.bSupportsFullscreen) return null;
  _.use(_.Ready());
  let _ = _.strMode == `fullscreen`,
    _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    _ = _.Localize(
      _
        ? `#TrailerPlayer_ExitFullScreen_Tooltip`
        : `#TrailerPlayer_FullScreen_Tooltip`,
    );
  return (0, _.jsx)(_, {
    onActivate: _,
    tooltip: _,
    children: _,
  });
}
function _(_) {
  let { player: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _(!1), [_]),
    _ = (0, _.useRef)(null),
    _ = _(),
    _ = (0, _.useCallback)(() => {
      _((_) => !_);
    }, [_]),
    _ = _(_, _ && `cXAaD-hLPZ0-`);
  return (
    _.use(_.Ready()),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          ref: _,
          onActivate: _,
          tooltip: _.Localize(`#TrailerPlayer_Settings_Tooltip`),
          disableTooltip: _,
          children: (0, _.jsx)(_, {
            className: _,
          }),
        }),
        _ &&
          (0, _.jsx)(_, {
            player: _,
            refButton: _,
            onClose: _,
          }),
      ],
    })
  );
}
function _(_) {
  let { player: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _(!1), [_]),
    _ = (0, _.useRef)(null),
    { bHasCaptions: _, bShowingCaption: _ } = _(_),
    _ = (0, _.useCallback)(() => {
      _ ? _.DisableCaptions() : _((_) => !_);
    }, [_, _, _]);
  return (
    _.use(_.Ready()),
    _
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_, {
              ref: _,
              onActivate: _,
              tooltip: _.Localize(`#TrailerPlayer_Captions_Tooltip`),
              children: [_ && (0, _.jsx)(_, {}), !_ && (0, _.jsx)(_, {})],
            }),
            _ &&
              (0, _.jsx)(_, {
                player: _,
                refButton: _,
                onClose: _,
              }),
          ],
        })
      : null
  );
}
function _(_) {
  let { player: _, showHoverThumb: _, onTouchSeek: _ } = _;
  _.use(_.Ready());
  let _ = (0, _.useRef)(null),
    [_, _, _] = _(_),
    [_, _] = _(_, _),
    _ = _();
  _() && (_ = null);
  let _ = _(_);
  _ || (_ = void 0);
  let _ = {
    display: `none`,
  };
  _ && ((_.left = _.nTickOffset), (_.display = `block`));
  let _ = _(_, 0, _, 0, 100),
    _ = _(_, 0, _, 0, 100),
    _ = {
      width: `${_.toFixed(1)}%`,
    },
    _ = {
      width: `${_.toFixed(1)}%`,
    },
    _ = (_) => {
      _.key === `Home`
        ? (_.preventDefault(), _.Seek(0))
        : _.key === `End` &&
          (_.preventDefault(), _.Seek(_.GetTimelineDuration()));
    },
    _ = _(_, _ && `OXlEV5w6w1E-`);
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _,
    "data-keepcontrols": !!_,
    role: `slider`,
    tabIndex: 0,
    "aria-label": _.Localize(`#TrailerPlayer_Seek_Label`),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(_),
    "aria-valuenow": Math.round(_),
    "aria-valuetext": `${_(_, !1)} / ${_(_, !1)}`,
    onClick: _,
    onKeyDown: _,
    onPointerMove: _.onPointerMove,
    onPointerLeave: _.onPointerLeave,
    onPointerDown: _.onPointerDown,
    onLostPointerCapture: _.onLostPointerCapture,
    children: [
      (0, _.jsxs)(`div`, {
        ref: _,
        className: _,
        onPointerEnter: _.onPointerEnter,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
            style: _,
          }),
          (0, _.jsx)(`div`, {
            className: _(_, _),
            style: _,
          }),
          (0, _.jsx)(`div`, {
            className: _(_),
            style: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        refTimeline: _,
        hoverState: _,
        showHoverThumb: _,
      }),
    ],
  });
}
function _() {
  return _((_) => {
    if (!_) return;
    let _ = (_) => {
        _.stopPropagation();
      },
      _ = (_) => {
        _.stopPropagation();
      };
    return (
      _.addEventListener(`touchstart`, _, {
        passive: !1,
      }),
      _.addEventListener(`touchend`, _, {
        passive: !1,
      }),
      () => {
        _.removeEventListener(`touchstart`, _),
          _.removeEventListener(`touchend`, _);
      }
    );
  }, []);
}
function _(_) {
  let { refTimeline: _, hoverState: _, showHoverThumb: _ } = _,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)({
      nHoverLeft: 0,
      bFitsInParent: !1,
    });
  if (
    ((0, _.useLayoutEffect)(() => {
      if (!_ || !_.current || !_.current) return;
      let _ = _.current.getBoundingClientRect(),
        _ = _.current.getBoundingClientRect(),
        _ = _.right - _.left,
        _ = _.right - _.left,
        _ = _(_.nTickOffset - _ / 2, 0 + _, _ - _ - _),
        _ = _(
          _.current.ownerDocument.documentElement,
          _.current,
          `data-trailer-player`,
        ),
        _ = !0;
      if (_) {
        let _ = _.getBoundingClientRect();
        _ = _.top > _.top;
      }
      _((_) =>
        _.nHoverLeft == _ && _.bFitsInParent == _
          ? _
          : {
              nHoverLeft: _,
              bFitsInParent: _,
            },
      );
    }, [_, _, _, _]),
    !_)
  )
    return null;
  let _ = {
      left: _.nHoverLeft,
      visibility: _.bFitsInParent ? `visible` : `hidden`,
    },
    _,
    _ = _ ? _.thumbnail : null;
  if (_) {
    let _ = _ / _.nThumbnailHeight;
    _ = {
      width: `${_.nThumbnailWidth * _}px`,
      height: `${_.nThumbnailHeight * _}px`,
      backgroundImage: `url(${_.strTileURL})`,
      backgroundPosition: `-${_._ * _}px -${_._ * _}px`,
      backgroundSize: `${_.nImageWidth * _}px ${_.nImageHeight * _}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, _.jsxs)(`div`, {
    ref: _,
    style: _,
    className: _,
    children: [
      !!_ &&
        (0, _.jsx)(`div`, {
          style: _,
          className: `nCXGrQlbkbg-`,
        }),
      (0, _.jsx)(`span`, {
        className: _,
        children: _(_.nPlaybackSeconds, !0),
      }),
    ],
  });
}
function _(_) {
  return (0, _.useCallback)(
    (_) => {
      let _ = _.currentTarget.getBoundingClientRect(),
        _ = (_.pageX - _.left) / (_.right - _.left);
      _.Seek(_ * _.GetTimelineDuration()),
        _.preventDefault(),
        _.stopPropagation();
    },
    [_],
  );
}
function _(_, _, _) {
  let _ = _ - _.left,
    _ = _.right - _.left;
  _ = _(_, 0, _);
  let _ = _ / _,
    _ = Math.floor(_.GetTimelineDuration() * _),
    _ = _.GetThumbnail(_);
  return _
    ? {
        nTickOffset: _,
        nPlaybackSeconds: _,
        thumbnail: _,
      }
    : null;
}
function _(_, _) {
  let [_, _] = (0, _.useState)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null);
  return [
    {
      onPointerEnter: (0, _.useCallback)(
        (_) => {
          if (_.pointerType != `mouse` && _.pointerType != `pen`) return;
          _.current = _.currentTarget;
          let _ = _(_, _.current.getBoundingClientRect(), _.clientX);
          _(_);
        },
        [_, _, _],
      ),
      onPointerMove: (0, _.useCallback)(
        (_) => {
          let _ = _.current;
          if (((_ ||= _.current), !_)) return;
          let _ = _(_, _.getBoundingClientRect(), _.clientX);
          _(_),
            _.current &&
              _ &&
              _(
                _
                  ? {
                      thumbnail: _.thumbnail,
                      nPlaybackSeconds: _.nPlaybackSeconds,
                    }
                  : null,
              );
        },
        [_, _, _, _, _],
      ),
      onPointerLeave: (0, _.useCallback)(
        (_) => {
          _.current && ((_.current = null), _((_) => null));
        },
        [_],
      ),
      onPointerDown: (0, _.useCallback)(
        (_) => {
          (_.current = _.currentTarget),
            _.current.setPointerCapture(_.pointerId),
            (document.body.style.userSelect = `none`);
          let _ = _(_, _.current.getBoundingClientRect(), _.clientX);
          _(_),
            _ &&
              _(
                _
                  ? {
                      thumbnail: _.thumbnail,
                      nPlaybackSeconds: _.nPlaybackSeconds,
                    }
                  : null,
              );
        },
        [_, _, _],
      ),
      onLostPointerCapture: (0, _.useCallback)(
        (_) => {
          _.current &&
            ((_.current = null),
            (document.body.style.userSelect = ``),
            _.current || _(null),
            _ && _(null));
        },
        [_, _, _, _],
      ),
    },
    _,
  ];
}
function _(_) {
  let { player: _ } = _,
    _ = _(_);
  _.use(_.Ready());
  let _ = ``;
  return (
    _ == _.UnsupportedMediaType
      ? (_ = _.Localize(`#TrailerPlayer_Error_UnsupportedCodec`))
      : _ != _.Invalid && (_ = _.Localize(`#TrailerPlayer_Error_Playback`)),
    _
      ? (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`span`, {
            children: _,
          }),
        })
      : null
  );
}
function _(_) {
  let { player: _ } = _,
    [_, _, _, _] = _(_);
  _.use(_.Ready());
  let _ = _(),
    _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    _ = _.Localize(
      _ ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    );
  return (0, _.jsx)(_, {
    onActivate: _,
    tooltip: _,
    disableTooltip: _,
    children: _,
  });
}
function _(_) {
  let { player: _ } = _,
    _ = _(_);
  _.use(_.Ready());
  let _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    _ = _.Localize(
      _ ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ),
    _ = _(_);
  return (0, _.jsx)(_, {
    onActivate: _,
    tooltip: _,
    children: _,
  });
}
function _(_) {
  let { category: _, title: _ } = _,
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`span`, {
        className: _,
      }),
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_, _, _) {
  let _ = _(_),
    [_, _] = (0, _.useState)(``),
    _ = (0, _.useRef)(0);
  (0, _.useEffect)(() => {
    _ &&
      !_ &&
      _ == `` &&
      (_(`active`), (_.current = window.setTimeout(() => _(`complete`), 4e3)));
  }, [_, _, _, _, _]),
    (0, _.useEffect)(() => {
      _ && (_(`complete`), window.clearTimeout(_.current));
    }, [_]),
    (0, _.useEffect)(() => () => window.clearTimeout(_.current), []);
  let _ = (0, _.useRef)(!1);
  return (
    _ == `complete` && !_ && (_.current = !0),
    _ == `once` && _.current ? !1 : _ == `active` || _
  );
}
var _ = 200,
  _ = 5e3;
function _(_) {
  let { player: _, category: _, title: _, focus: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    [_, _] = _(_, !1),
    [_, _] = (0, _.useState)(!1),
    _ = _(_, _, _);
  _ ||= _;
  let _ = _(_),
    _ = _(!!_),
    _ = _(_, _ && `YnJEGhfB0wI-`);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsxs)(`div`, {
      ref: _,
      className: _,
      ..._,
      onKeyDown: _,
      tabIndex: 0,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              player: _,
              enabled: _ && !_,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsxs)(_, {
              ref: _,
              className: _,
              children: [
                (0, _.jsx)(_, {
                  player: _,
                  showHoverThumb: !0,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                          refControlsHover: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {}),
                        (0, _.jsx)(_, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          player: _,
          controlsVisible: _,
          category: _,
          title: _,
        }),
        (0, _.jsx)(`div`, {
          ref: _,
          className: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let _ = _(_(), `fullscreen`);
  return (0, _.useCallback)(
    (_) => {
      _.repeat ||
        (_.code == `Space`
          ? (_.TogglePlayPause(), _.preventDefault())
          : _.code == `ArrowLeft`
            ? _.SeekRelative(-5)
            : _.code == `ArrowRight`
              ? _.SeekRelative(_ / 1e3)
              : _.key == `f` || _.key == `F`
                ? (_(), _.preventDefault())
                : (_.key == `m` || _.key == `M`) &&
                  (_.SetMute(!_.GetMuted()), _.preventDefault()));
    },
    [_, _],
  );
}
function _(_, _) {
  let _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(1),
    _ = (0, _.useRef)(0),
    [_, _] = (0, _.useState)([]),
    _ = (0, _.useCallback)(
      (_) => {
        if (_.target != _.current) return;
        let _ = _.TogglePlayPauseState(),
          _ = _.current++;
        _((_) => [
          {
            nID: _,
            eState: _,
          },
          ..._,
        ]);
        let _ = () => {
          (_.current = 0), _.TogglePlayPause();
        };
        _.pointerType == `mouse`
          ? _.current
            ? (window.clearTimeout(_.current), (_.current = 0), _())
            : (_.current = window.setTimeout(_, _))
          : _();
      },
      [_, _, _, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _((_) => _.filter((_) => _.nID != _));
      },
      [_],
    );
  return (
    (0, _.useEffect)(
      () => () => {
        window.clearTimeout(_.current), (_.current = 0);
      },
      [_],
    ),
    {
      refBackground: _,
      inputEvents: _(_),
      clickEvents: _,
      fnRemoveEvent: _,
    }
  );
}
function _(_) {
  let { player: _, controlsVisible: _, category: _, title: _ } = _,
    _ = _(`once`, _, _);
  if (_ == 0 || !_) return null;
  let _ = _(_, _ && `YnJEGhfB0wI-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      category: _,
      title: _,
    }),
  });
}
function _(_) {
  let { player: _, enabled: _ } = _,
    {
      refBackground: _,
      inputEvents: _,
      clickEvents: _,
      fnRemoveEvent: _,
    } = _(_, _(_(), `fullscreen`)),
    _ = _(_, _ && `T3UUyZ88ees-`);
  return (0, _.jsx)(`div`, {
    ref: _,
    className: _,
    ..._,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          event: _,
          removeEvent: _,
        },
        `icon_${_.nID}`,
      ),
    ),
  });
}
function _(_) {
  let { event: _, removeEvent: _ } = _,
    _ = _.nID,
    _ = (0, _.useCallback)(() => {
      _(_);
    }, [_, _]),
    _ = null;
  return (
    _.eState == _.Play
      ? (_ = (0, _.jsx)(_, {}))
      : _.eState == _.Pause && (_ = (0, _.jsx)(_, {})),
    (0, _.jsx)(`div`, {
      className: _,
      onAnimationEnd: _,
      children: _,
    })
  );
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_) {
  let { player: _, refControlsHover: _ } = _,
    [_, _, _, _] = _(_),
    [_, _] = _(_),
    _;
  _ =
    _ || _ === 0
      ? (0, _.jsx)(_, {})
      : _ < 0.3
        ? (0, _.jsx)(_, {})
        : _ < 0.6
          ? (0, _.jsx)(_, {})
          : (0, _.jsx)(_, {});
  let _ = _.Localize(
    _ ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
  );
  return (0, _.jsxs)(`div`, {
    className: _,
    onMouseEnter: _,
    "data-keepcontrols": !0,
    children: [
      (0, _.jsx)(_, {
        onActivate: _,
        tooltip: _,
        children: _,
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `KiYQJsCfGxI-`,
          children: (0, _.jsx)(_, {
            min: 0,
            max: 1,
            value: _ ? 0 : _,
            step: 0.01,
            onChange: _,
            dpadStep: 0.1,
          }),
        }),
    ],
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _(!0), [_]);
  return (
    _(_, `mouseleave`, (_) => {
      _.target == _.currentTarget && _(!1);
    }),
    [_, _]
  );
}
var _ = `WRCisr6uZYw-`,
  _ = `gbdFcNy5G4k-`,
  _ = `lX5nIJvBefY-`,
  _ = `iAXbsgjjZHI-`,
  _ = `-EEbXf-3XVE-`,
  _ = `iFREa-vsmpo-`,
  _ = `AP1io-MKcDs-`,
  _ = `Bxu-c02i-fA-`,
  _ = `pYxY-oYjIxc-`,
  _ = `xbX-APAH9aY-`,
  _ = `RjlRnmjZiYM-`,
  _ = 3e3,
  _ = 1e3;
function _(_) {
  let { player: _, category: _, title: _ } = _,
    _ = (0, _.useRef)(null),
    [_, _] = _(_, _, !1),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _(_, _, _);
  _ ||= _;
  let [_, _] = _(_),
    _ = _(_, _ && `CjbQpCvOpk4-`),
    _ = _(_, !!_ && `X3KS6LYOx9o-`);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      ..._,
      children: [
        (0, _.jsxs)(`div`, {
          ref: _,
          className: _,
          children: [
            (0, _.jsx)(_, {
              thumbnail: _,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                player: _,
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  player: _,
                  onTouchSeek: _,
                  showHoverThumb: !1,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(_, {
                        player: _,
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          player: _,
          controlsVisible: _,
          category: _,
          title: _,
        }),
        (0, _.jsx)(`div`, {
          ref: _,
          className: void 0,
        }),
      ],
    }),
  });
}
function _(_, _, _) {
  let [_, _] = _(_, _);
  return (_ ||= _), [_, _];
}
function _(_, _) {
  let [_, _] = _(),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!0),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      (_.current = !1), (!_ || _) && _(!0, _ ? 0 : _);
    }, [_, _, _]),
    [
      _,
      {
        onPointerDown: (0, _.useCallback)(
          (_) => {
            _.current = _.target;
          },
          [_],
        ),
        onPointerCancel: (0, _.useCallback)(
          (_) => {
            _.current = null;
          },
          [_],
        ),
        onPointerUp: (0, _.useCallback)(
          (_) => {
            let _ = _.current;
            if (((_.current = null), _ == null)) return;
            let _ = _ ? 0 : _;
            _.target != _ || _.current != _ ? _(!0, _) : _(!_, _);
          },
          [_, _, _, _],
        ),
      },
    ]
  );
}
function _(_) {
  let { player: _, controlsVisible: _, category: _, title: _ } = _,
    _ = _(`standard`, _, _);
  if (_ == 0 || !_) return null;
  let _ = _(_, _ && !_ && `lwGDx-ob6f4-`, _ && `FEfadjF0-XY-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      category: _,
      title: _,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_) {
  let { thumbnail: _ } = _,
    [_, _] = (0, _.useState)(null),
    _ = (0, _.useCallback)(
      (_) => {
        if (!_) {
          _(null);
          return;
        }
        let _ = _.getBoundingClientRect(),
          _ = _.right - _.left,
          _ = _.bottom - _.top;
        _({
          width: _,
          height: _,
        });
      },
      [_],
    );
  if (!_) return null;
  let _ = {
    display: `none`,
  };
  if (_) {
    let _ = _.width / _.nThumbnailWidth,
      _ = _.height / _.nThumbnailHeight,
      _ = Math.min(_, _);
    _ = {
      width: `${_.nThumbnailWidth * _}px`,
      height: `${_.nThumbnailHeight * _}px`,
      backgroundImage: `url(${_.strTileURL})`,
      backgroundPosition: `-${_._ * _}px -${_._ * _}px`,
      backgroundSize: `${_.nImageWidth * _}px ${_.nImageHeight * _}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, _.jsx)(`div`, {
    ref: _,
    className: _,
    children: (0, _.jsx)(`div`, {
      style: _,
      className: void 0,
    }),
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(null),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(null);
  return [
    _,
    _.useCallback(
      (_) => {
        let _ = _ ? _.thumbnail : null;
        !_.IsPaused() && _ && ((_.current = !0), _.Pause()),
          !_ && _.current && (_.Play(), (_.current = !1)),
          _.current && !_ && _.Seek(_.current.nPlaybackSeconds),
          (_.current = _),
          _(_);
      },
      [_, _, _],
    ),
  ];
}
function _(_) {
  let { player: _ } = _,
    _ = _(_),
    _ = _(_(_)),
    _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
  return (0, _.jsx)(`div`, {
    className: _,
    ..._,
    children: _,
  });
}
var _ = `_3uW6UUMmrCg-`,
  _ = `fqgqcMMEHV0-`,
  _ = `_6koTzpHyyWw-`,
  _ = `wz7DrfLBweo-`,
  _ = `qHxUvsFtfPA-`,
  _ = `Mq-yAxjkoj4-`,
  _ = `v15xRo4R128-`,
  _ = `_5mPY672VSPM-`,
  _ = `rlgvACT4pJc-`,
  _ = 3e3,
  _ = 1500;
function _(_) {
  let { player: _, category: _, title: _ } = _,
    [_, _] = _(_, !1),
    _ = _(_),
    _ = _(_, _),
    _ = _(_),
    [_, _, _, _] = _(_),
    _ = (0, _.useCallback)(() => {
      _(), _();
    }, [_, _]),
    _ = (0, _.useCallback)(
      (_) => {
        !_.IsPaused() && _.currentTarget == _.target && _.TogglePlayPause();
      },
      [_],
    ),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _(_, _, _),
    _ = _ ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    _ = _ ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    _ = _(_, _ && `wXx6UBVpmP0-`);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsxs)(_, {
      className: _,
      focusable: !0,
      onClick: _,
      onOKActionDescription: _.Localize(_),
      onOKButton: _,
      onSecondaryButton: _,
      onSecondaryActionDescription: _.Localize(_),
      onButtonDown: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  player: _,
                  showHoverThumb: !1,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(_, {
                        player: _,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          player: _,
          controlsVisible: _,
          category: _,
          title: _,
        }),
        (0, _.jsx)(`div`, {
          ref: _,
          className: void 0,
        }),
      ],
    }),
  });
}
function _(_, _) {
  let [_, _] = _(),
    _ = (0, _.useRef)(!0),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      (_.current = !1), (!_ || _) && _(!0, _ ? 0 : _);
    }, [_, _, _]),
    [
      _,
      (0, _.useCallback)(() => {
        _(!0, _);
      }, [_]),
    ]
  );
}
function _(_, _) {
  return (0, _.useCallback)(
    (_) => {
      if (_.detail.button == _.TRIGGER_LEFT && _) {
        let _ = Math.max(0, _.GetPlaybackTime() - 10);
        _.Seek(_), _(), _.preventDefault(), _.stopPropagation();
      } else if (_.detail.button == _.TRIGGER_RIGHT && _) {
        let _ = Math.min(_.GetTimelineDuration(), _.GetPlaybackTime() + 10);
        _.Seek(_), _(), _.preventDefault(), _.stopPropagation();
      }
    },
    [_, _],
  );
}
function _(_) {
  let { player: _, controlsVisible: _, category: _, title: _ } = _,
    _ = _(`standard`, _, _);
  if (_ == 0 || !_) return null;
  let _ = _(_, _ && `wXx6UBVpmP0-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        category: _,
        title: _,
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
var _ = 500,
  _ = `responsive_menu_ignore_touch`;
function _(_) {
  return _()
    ? (0, _.jsx)(_.Suspense, {
        children: (0, _.jsx)(_, {
          ..._,
          localContext: !1,
        }),
      })
    : (0, _.jsx)(_.Suspense, {
        children: (0, _.jsx)(_, {
          iosVideoFallback: !0,
          supportsTheater: !1,
          supportsFullscreen: !0,
          children: (0, _.jsx)(_, {
            ..._,
            localContext: !0,
          }),
        }),
      });
}
function _(_) {
  let {
    ref: _,
    dashManifests: _,
    hlsManifest: _,
    captionManifest: _,
    screenshot: _,
    forcePause: _,
    onPlaybackStart: _,
    onPlaybackEnd: _,
    onPlayPauseChange: _,
    onMuteChange: _,
    uiMode: _,
    altText: _,
    title: _,
    category: _,
    statsURL: _,
    muteWhenAutoplayBlocked: _,
    localContext: _,
    focus: _,
  } = _;
  (_ ||= ``), (_ ||= 0);
  let [_, _] = _(_, _, _, _, _, _, _);
  _(_, _), _(_, !!_);
  let [_, _] = _(_),
    _ = _(),
    _ = _ && _ ? _.refFullscreen : null,
    _ = _(_, _),
    _ = _(_, !!_),
    _ = _ ? void 0 : _,
    _ = {};
  _ && ((_.width = `${_.nWidth}px`), (_.height = `${_.nHeight}px`));
  let _ = _(() => _.IsBuffering());
  _.useEffect(() => {
    _ || (_ && _());
  }, [_, _]),
    _.use(_.Ready());
  let _ = _(_, _);
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _,
    "data-trailer-player": !0,
    children: [
      (0, _.jsx)(`video`, {
        ref: _,
        style: _,
        controls: !1,
        playsInline: !0,
        "aria-label": _,
        crossOrigin: `anonymous`,
      }),
      (0, _.jsx)(_, {
        player: _,
        uiMode: _,
        category: _,
        title: _,
        focus: _,
      }),
      (0, _.jsx)(_, {
        player: _,
      }),
      !_ &&
        (0, _.jsx)(_, {
          player: _,
          screenshot: _,
        }),
      !_ &&
        (0, _.jsx)(_, {
          player: _,
        }),
    ],
  });
}
function _(_, _) {
  (0, _.useImperativeHandle)(
    _,
    () => ({
      Play() {
        _.Play();
      },
      Pause() {
        _.Pause();
      },
      IsPaused() {
        return _.IsPaused();
      },
      SeekToStart() {
        _.Seek(0);
      },
      GetVolume() {
        return _.GetVolume();
      },
      SetVolume(_, _) {
        _.SetVolume(_, _);
      },
    }),
    [_],
  );
}
function _(_) {
  let _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = _(),
    _ = (0, _.useCallback)(() => {
      let _ = _.current,
        _ = _.current;
      if (!_ || !_) return;
      let [_, _] = _(_.nWidth, _.nHeight, _.nWidth, _.nHeight);
      (_ = _.nWidth - _ < 2 ? _.nWidth : Math.ceil(_)),
        (_ = _.nHeight - _ < 2 ? _.nHeight : Math.ceil(_));
      let _ = _.current;
      (_ && _.nWidth == _ && _.nHeight == _) ||
        ((_.current = {
          nWidth: _,
          nHeight: _,
        }),
        _());
    }, [_, _, _, _]);
  _(
    _,
    (0, _.useCallback)(
      (_) => {
        (_.current = _), _();
      },
      [_, _],
    ),
  );
  let _ = (0, _.useCallback)(
    (_) => {
      (_.current = {
        nWidth: _.contentRect.width,
        nHeight: _.contentRect.height,
      }),
        _();
    },
    [_, _],
  );
  return [_(_), _.current];
}
function _(_) {
  let { player: _, uiMode: _, category: _, title: _, focus: _ } = _,
    _ = _(),
    _ = _();
  return (
    (_ && _ != `auto`) || (_ = _() || _ ? `touch` : _ ? `gamepad` : `desktop`),
    _ == `touch`
      ? (0, _.jsx)(_, {
          player: _,
          category: _,
          title: _,
        })
      : _ == `gamepad`
        ? (0, _.jsx)(_, {
            player: _,
            category: _,
            title: _,
          })
        : (0, _.jsx)(_, {
            player: _,
            category: _,
            title: _,
            focus: _,
          })
  );
}
function _(_) {
  let { player: _ } = _,
    [_, _] = (0, _.useState)(`norender`),
    _ = _(() => _.IsBuffering());
  (0, _.useEffect)(() => {
    if (!_) return;
    let _ = window.setTimeout(() => _(`fadein`), 1e3);
    return () => {
      _ && window.clearTimeout(_);
    };
  }, [_, _]),
    (0, _.useEffect)(() => {
      if (_) return;
      _(`fadeout`);
      let _ = window.setTimeout(() => _(`norender`), 300);
      return () => window.clearTimeout(_);
    }, [_, _]);
  let _ = _ != `norender`,
    _ = _(_, _ == `fadein` && `ZxF0VUYsuGU-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children:
      _ &&
      (0, _.jsx)(_, {
        size: `large`,
        position: `center`,
      }),
  });
}
function _(_) {
  let { player: _, screenshot: _ } = _,
    _ = _(() => _.GetUserInputNeeded()),
    _ = _(_, _),
    [_, _] = (0, _.useState)(!1),
    _ = _.useCallback(() => {
      _.UserInputReceived(), _(!0);
    }, [_]);
  if (
    (_.useEffect(() => {
      if (!_) return;
      let _ = setTimeout(() => _(!1), 500);
      return () => clearTimeout(_);
    }, [_]),
    !_)
  )
    return null;
  _.use(_.Ready());
  let _ = {};
  return (
    _ && (_.backgroundImage = `url('${_}')`),
    (0, _.jsx)(`div`, {
      style: _,
      className: _,
      role: `button`,
      tabIndex: 0,
      "aria-label": _.Localize(`#TrailerPlayer_Play_Tooltip`),
      onClick: _,
      onKeyDown: (_) => {
        (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _());
      },
      children: (0, _.jsx)(`div`, {
        className: _(_, _ && `_5fVtqw5G7SE-`),
        children: (0, _.jsx)(_, {}),
      }),
    })
  );
}
var _ = `v87a6zGhXmo-`,
  _ = `XkrNZp-zaXw-`;
function _(..._) {
  return _.join(` `);
}
var _ = `_7OxSOadMubQ-`,
  _ = `_5tpsR11QFTo-`,
  _ = `_4av218OCtYs-`,
  _ = `RylL--hTWB0-`,
  _ = `mGOBKozFlf0-`,
  _ = `kTZDgZ5dX-8-`,
  _ = `WDTUiOfZjRM-`,
  _ = `bgTVZST3FaE-`,
  _ = `B4zxAgrjjQU-`,
  _ = `ZQJlDRLSD2I-`,
  _ = `NxfxOoNRnJc-`,
  _ = `_6hGeFUDe5X0-`,
  _ = `rs5MCL6BI2A-`,
  _ = `iRWZX4LtE-Q-`,
  _ = `_5yccD-xlOTc-`;
function _(_) {
  let { name: _, trailerCategory: _, trailerDisplay: _, mouseOver: _ } = _,
    [_, _] = _.useState(!1);
  if (
    (_.useEffect(() => {
      _ != 0 && _(!0);
    }, [_]),
    _.useEffect(() => {
      if (_) {
        _(!0);
        return;
      }
      if (!_) return;
      let _ = setTimeout(() => _(!1), 3e3);
      return () => clearTimeout(_);
    }, [_, _]),
    _ == null || _ == 0)
  )
    return;
  let _ = _ == 1 ? _.Localize(`#StoreTrailer_Title_TrailerPreview`) : _(_);
  return (0, _.jsx)(`div`, {
    className: _({
      [_]: !0,
      [_]: _,
    }),
    children: _.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
      _,
    ),
  });
}
function _(_) {
  let { _: _, bPopOutTrailerPlayback: _ } = _,
    { data: _ } = _(_),
    _ = _(_),
    { data: _ } = _(_),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _?.highlights?.filter((_) => !_ || _.all_ages),
    _ = _ && _?.length > 0 ? _[0] : void 0,
    _ = _.useCallback(() => {
      _ && (_ ? _(!0) : _((_) => !_));
    }, [_, _]);
  if (!_)
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      children: (0, _.jsx)(_, {
        size: `medium`,
      }),
    });
  let _ = _
    ? (0, _.jsx)(_, {
        trailer: _,
        bPlayVideo: _,
        fnTogglePlayTrailer: _,
      })
    : null;
  return !_ && !_?.length
    ? null
    : (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            elFeaturedInCenter: _,
            trailer: _,
            _: _,
            name: _.name || ``,
          }),
          _
            ? (0, _.jsx)(_, {
                _: _,
                bShowModal: _,
                hideModal: () => _(!1),
              })
            : (0, _.jsx)(_, {
                name: _.name || ``,
                trailer: _,
                bPlayVideo: _,
                fnTogglePlayTrailer: _,
                bControls: !0,
              }),
        ],
      });
}
function _(_) {
  let {
      elFeaturedInCenter: _,
      _: _,
      name: _,
      trailer: _,
      featureElementclassName: _,
      bUseTrailerAsFirstThumb: _,
      bNoScreenShotModals: _,
    } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _(),
    _ = _(_),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(0);
  if (!_) return null;
  let _ = _ || (_ !== void 0 && _ !== -1) ? _ : 0,
    _ = [],
    _ = [];
  if (
    (_ &&
      _ &&
      (_.push(
        (0, _.jsx)(
          _,
          {
            trailer: _,
            bPlayVideo: !1,
            fnTogglePlayTrailer: () => {},
            onMouseEnter: () => _(0),
            onMouseLeave: () => {
              let _ = _.current;
              _ && _(_.currentTime);
            },
          },
          `trail_thumb_`,
        ),
      ),
      _.push(
        (0, _.jsx)(
          _,
          {
            ref: _,
            name: _,
            trailer: _,
            bControls: !1,
            bPlayVideo: !0,
            startTime: _,
            fnTogglePlayTrailer: () => {},
          },
          `trail_inline`,
        ),
      )),
    _?.forEach((_, _) => {
      if ((_ || _ > 0) && _.length < 3) {
        let _ = _(_, `thumb`),
          _ = _(_, `600x338`),
          _ = _.length;
        _.push(
          (0, _.jsx)(
            `div`,
            {
              className: _({
                [_]: !0,
                [_]: !_,
              }),
              onMouseEnter: () => _(_),
              children: _
                ? (0, _.jsx)(`img`, {
                    src: _,
                    alt: _,
                  })
                : (0, _.jsx)(`button`, {
                    type: `button`,
                    className: _,
                    onClick: () => {
                      let _ = [...(_ || [])];
                      if (_.length > 0) {
                        for (let _ = 0; _ < _; ++_) {
                          let _ = _.shift();
                          _ && _.push(_);
                        }
                        _(_.map((_) => _(_, `full`)));
                      }
                    },
                    children: (0, _.jsx)(`img`, {
                      src: _,
                      alt: _,
                    }),
                  }),
            },
            _ + `_small_` + _,
          ),
        ),
          _.push(
            (0, _.jsx)(
              `div`,
              {
                className: _,
                children: (0, _.jsx)(`img`, {
                  src: _,
                  alt: _,
                }),
              },
              _ + `_big_` + _,
            ),
          );
      }
    }),
    !_ && (!_ || _.length == 0))
  )
    return null;
  let _ = _.slice(0, 3),
    _ = Array.from({
      length: Math.max(0, 3 - _.length),
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      (0, _.jsx)(`div`, {
        className: _ || `_4av218OCtYs-`,
        children:
          _ && (_ === -1 || _ === void 0)
            ? (0, _.jsx)(_.Fragment, {
                children: _,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _ !== void 0 && _[_],
              }),
      }),
      _.length > 0 &&
        (0, _.jsxs)(`div`, {
          className: `zPYR9--wLLQ-`,
          onMouseLeave: () => _(-1),
          children: [
            _,
            _.map((_, _) =>
              (0, _.jsx)(
                `div`,
                {
                  className: `WDTUiOfZjRM-`,
                },
                `app_${_(_)}_${_}`,
              ),
            ),
          ],
        }),
    ],
  });
}
function _(_) {
  let {
    ref: _,
    name: _,
    trailer: _,
    bControls: _,
    bPlayVideo: _,
    fnTogglePlayTrailer: _,
    startTime: _,
  } = _;
  if (
    ((0, _.useEffect)(() => {
      let _ = _?.current;
      if (_ != null && _ > 0 && _) {
        let _ = () => {
          _.currentTime = _ || 0;
        };
        return (
          _.addEventListener(`loadedmetadata`, _),
          () => {
            _.removeEventListener(`loadedmetadata`, _);
          }
        );
      }
    }, [_, _]),
    !_)
  )
    return null;
  let _ = _(_, _ && `B4zxAgrjjQU-`);
  return (0, _.jsxs)(`div`, {
    className: _,
    onClick: _,
    role: `presentation`,
    children: [
      (0, _.jsx)(_, {
        name: _,
        trailerCategory: _.trailer_category,
        trailerDisplay: 1,
        mouseOver: !1,
      }),
      !!(_ && _.microtrailer) &&
        (0, _.jsx)(`video`, {
          className: `YL-tCU7ggsU-`,
          ref: _,
          controls: _,
          autoPlay: !0,
          loop: !0,
          muted: !0,
          poster: _ != null && _ > 0 ? void 0 : _.screenshot_full,
          children: _.microtrailer?.map((_) =>
            _.IN_CLIENT && _.type == `video/mp4`
              ? null
              : (0, _.jsx)(
                  `source`,
                  {
                    src: _(_, _.filename || ``),
                    type: _.type,
                  },
                  _.filename,
                ),
          ),
        }),
      _ &&
        (0, _.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": _(`#Button_Close`),
          children: (0, _.jsx)(_, {}),
        }),
    ],
  });
}
function _(_) {
  return _.bShowModal
    ? (0, _.jsx)(_, {
        ..._,
      })
    : null;
}
function _(_) {
  let { _: _, bShowModal: _, trailerBaseID: _, hideModal: _ } = _,
    { data: _ } = _(_),
    _ = _(_),
    _ = (0, _.useMemo)(() => {
      if (_ && _.length != 0) {
        if (_) {
          let _ = _.find((_) => _.trailer_base_id == _);
          if (_) return _;
        }
        return _[0];
      }
    }, [_, _]),
    _ = _.useId(),
    _ = _.useId(),
    {
      rgDashTrailers: _,
      rgHlsTrailers: _,
      strCaptionManufest: _,
      strScreenshot: _,
    } = (0, _.useMemo)(() => {
      if (!_)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: _, rgHlsTrailers: _ } = _(_);
      return {
        rgDashTrailers: _,
        rgHlsTrailers: _,
        strCaptionManufest: _(_),
        strScreenshot: _(_),
      };
    }, [_]);
  return !_ || !_.adaptive_trailers || _.length == 0
    ? null
    : (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsxs)(_, {
          "aria-labelledby": _(_, _),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                dashManifests: _,
                hlsManifest: _[0] || ``,
                screenshot: _,
                altText: _.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: _,
              }),
            }),
            (0, _.jsx)(`div`, {
              _: _,
              style: {
                display: `none`,
              },
              children: _?.name || ``,
            }),
            (0, _.jsx)(`div`, {
              _: _,
              style: {
                display: `none`,
              },
              children: _.trailer_name,
            }),
          ],
        }),
      });
}
function _(_) {
  let { appid: _, trailerBaseID: _, bShowModal: _, hideModal: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        appid: _,
      }),
      [_],
    );
  return (0, _.jsx)(_, {
    _: _,
    trailerBaseID: _,
    bShowModal: _,
    hideModal: _,
  });
}
function _(_) {
  let {
    trailer: _,
    fnTogglePlayTrailer: _,
    bPlayVideo: _,
    onMouseEnter: _,
    onMouseLeave: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !_,
      [_]: _,
      [_]: !0,
    }),
    onClick: _,
    onMouseEnter: _,
    onMouseLeave: _,
    role: `presentation`,
    children: [
      (0, _.jsx)(`img`, {
        src: _(_),
        alt: _.trailer_name,
      }),
      (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        "aria-label": _(`#Playback_Play_Tooltip`),
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
var _ = (function (_) {
  return (
    (_.k_TrailerAsButton = `button`),
    (_.k_TrailerAsPill = `pill`),
    (_.k_TrailerAsFull = `full`),
    (_.k_TrailerAsPoster = `poster`),
    (_.k_TrailerAsMicro = `micro`),
    _
  );
})({});
function _(_) {
  let {
      embedStyle: _,
      appid: _,
      color: _,
      bgcolor: _,
      children: _,
      trailerBaseID: _,
      subtitles: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useMemo)(
      () => ({
        appid: _,
      }),
      [_],
    );
  switch (_) {
    case `button`:
    case `pill`:
      return (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsxs)(`button`, {
            type: `button`,
            className: _({
              [_]: _ == `pill`,
              [_]: _ == `button`,
            }),
            onClick: () => _(!0),
            style: {
              color: _,
              backgroundColor: _,
            },
            children: [(0, _.jsx)(_, {}), _ || _(`#EventEmail_WatchNow`)],
          }),
          (0, _.jsx)(_, {
            _: _,
            bShowModal: _,
            trailerBaseID: _,
            hideModal: () => _(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, _.jsx)(_, {
        ..._,
      });
  }
}
function _(_) {
  let { appid: _, trailerBaseID: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    [_, _] = (0, _.useState)(() =>
      !_ || !_ ? _(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    _ = _(_),
    _ = (0, _.useMemo)(
      () => (_ ? _.find((_) => _.trailer_base_id === _) : null),
      [_, _],
    );
  return (
    (0, _.useEffect)(() => {
      _?.unvailable_for_country_restriction &&
        _(_(`#TrailerPlayer_CouldNotLoad`, _, _)),
        _ &&
          !_ &&
          _(_(`#TrailerPlayer_CouldNotLoad`, _.appid, _.trailerBaseID));
    }, [
      _,
      _.appid,
      _.trailerBaseID,
      _?.unvailable_for_country_restriction,
      _,
      _,
      _,
    ]),
    _
      ? _.bIsPreviewMode
        ? (0, _.jsx)(`div`, {
            className: _,
            children: _,
          })
        : null
      : _
        ? (0, _.jsx)(_, {
            trailerToPlay: _,
          })
        : (0, _.jsx)(_, {
            string: _(`#Loading`),
            size: `small`,
          })
  );
}
function _(_) {
  let { trailerToPlay: _ } = _,
    {
      rgDashTrailers: _,
      rgHlsTrailers: _,
      strCaptionManufest: _,
    } = (0, _.useMemo)(() => {
      let { rgDashTrailers: _, rgHlsTrailers: _ } = _(_);
      return {
        rgDashTrailers: _,
        rgHlsTrailers: _,
        strCaptionManufest: _(_),
      };
    }, [_]);
  return _?.length == 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          dashManifests: _ || [],
          hlsManifest: (_.length > 0 && _?.[0]) || ``,
          screenshot: _(_),
          altText: _.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: _,
        }),
      });
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    _ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _);
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _) {
  if (!(_ instanceof _)) throw TypeError(`Cannot call a class as a function`);
}
function _(_, _) {
  for (var _ = 0; _ < _.length; _++) {
    var _ = _[_];
    (_.enumerable = _.enumerable || !1),
      (_.configurable = !0),
      `value` in _ && (_.writable = !0),
      Object.defineProperty(_, _.key, _);
  }
}
function _(_, _, _) {
  return (
    _ && _(_.prototype, _),
    _ && _(_, _),
    Object.defineProperty(_, "prototype", {
      writable: !1,
    }),
    _
  );
}
function _(_, _, _) {
  return (
    _ in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _() {
  return (_ = Object.assign
    ? Object.assign.bind()
    : function (_) {
        for (var _ = 1; _ < arguments.length; _++) {
          var _ = arguments[_];
          for (var _ in _)
            Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
        }
        return _;
      }).apply(this, arguments);
}
function _(_, _) {
  if (typeof _ != `function` && _ !== null)
    throw TypeError(`Super expression must either be null or a function`);
  (_.prototype = Object.create(_ && _.prototype, {
    constructor: {
      value: _,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(_, "prototype", {
      writable: !1,
    }),
    _ && _(_, _);
}
function _(_) {
  return (_ = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (_) {
        return _.__proto__ || Object.getPrototypeOf(_);
      })(_);
}
function _(_, _) {
  return (_ = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (_, _) {
        return (_.__proto__ = _), _;
      })(_, _);
}
function _() {
  if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == `function`) return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = {},
    _ = Object.keys(_);
  for (_ = 0; _ < _.length; _++) (_ = _[_]), _.indexOf(_) >= 0 || (_[_] = _[_]);
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      (_ = _[_]),
        _.indexOf(_) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(_, _) && (_[_] = _[_]));
  }
  return _;
}
function _(_) {
  if (_ === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return _;
}
function _(_, _) {
  if (_ && (typeof _ == `object` || typeof _ == `function`)) return _;
  if (_ !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return _(_);
}
function _(_) {
  var _ = _();
  return function () {
    var _,
      _ = _(_);
    if (_) {
      var _ = _(this).constructor;
      _ = Reflect.construct(_, arguments, _);
    } else _ = _.apply(this, arguments);
    return _(this, _);
  };
}
function _(_) {
  return _(_) || _(_) || _(_) || _();
}
function _(_) {
  if (Array.isArray(_)) return _(_);
}
function _(_) {
  if (
    (typeof Symbol < `u` && _[Symbol.iterator] != null) ||
    _[`@@iterator`] != null
  )
    return Array.from(_);
}
function _(_, _) {
  if (_) {
    if (typeof _ == `string`) return _(_, _);
    var _ = Object.prototype.toString.call(_).slice(8, -1);
    return (
      _ === `Object` && _.constructor && (_ = _.constructor.name),
      _ === `Map` || _ === `Set`
        ? Array.from(_)
        : _ === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
          ? _(_, _)
          : void 0
    );
  }
}
function _(_, _) {
  (_ == null || _ > _.length) && (_ = _.length);
  for (var _ = 0, _ = Array(_); _ < _; _++) _[_] = _[_];
  return _;
}
function _() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _(_, _) {
  return (
    (_ = {
      exports: {},
    }),
    _(_, _.exports),
    _.exports
  );
}
function _() {}
function _() {}
function _(_) {
  return _.map(function (_) {
    return !1 === _ ? null : _;
  })
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
}
function _(_, _) {
  return ((100 / _) * _) / _;
}
function _(_, _) {
  return (100 * _) / _;
}
function _(_) {
  return `${_}%`;
}
function _(_, _, _) {
  if (_ === _) return !0;
  var _ = _[_(_)],
    _ = _[_(_)];
  return !(!_ || _ !== _) && _(_, _, _);
}
function _(_) {
  return function (_, _, _) {
    if (!_) return _(_, _, []);
    for (var _, _ = _.length; (_ = _[--_]); )
      if (_[0] === _ && _[1] === _) return !0;
    return _(_, _, _);
  };
}
function _(_, _, _) {
  var _ = _.length;
  if (_ !== _.length) return !1;
  for (_.push([_, _]); _--; ) if (!_(_[_], _[_], _)) return !1;
  return !0;
}
function _(_, _, _) {
  if (typeof _.equal == `function`) return _.push([_, _]), _.equal(_, _);
  var _ = _(_),
    _ = _(_),
    _ = _.length;
  if (_ !== _.length) return !1;
  for (_.sort(), _.sort(); _--; ) if (_[_] !== _[_]) return !1;
  for (_.push([_, _]), _ = _.length; _--; ) {
    var _ = _[_];
    if (!_(_[_], _[_], _)) return !1;
  }
  return !0;
}
function _(_) {
  var _ = [];
  for (var _ in _) _ !== `constructor` && _.push(_);
  return _;
}
function _(_) {
  return !!_ && typeof _ == `object`;
}
function _(_) {
  var _ = Object.prototype.toString.call(_);
  return _ === `[object RegExp]` || _ === `[object Date]` || _(_);
}
function _(_) {
  return _.$$typeof === _;
}
function _(_) {
  return Array.isArray(_) ? [] : {};
}
function _(_, _) {
  return !1 !== _.clone && _.isMergeableObject(_) ? _(_(_), _, _) : _;
}
function _(_, _, _) {
  return _.concat(_).map(function (_) {
    return _(_, _);
  });
}
function _(_, _) {
  if (!_.customMerge) return _;
  var _ = _.customMerge(_);
  return typeof _ == `function` ? _ : _;
}
function _(_) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(_).filter(function (_) {
        return Object.propertyIsEnumerable.call(_, _);
      })
    : [];
}
function _(_) {
  return Object.keys(_).concat(_(_));
}
function _(_, _) {
  try {
    return _ in _;
  } catch {
    return !1;
  }
}
function _(_, _) {
  return (
    _(_, _) &&
    !(
      Object.hasOwnProperty.call(_, _) && Object.propertyIsEnumerable.call(_, _)
    )
  );
}
function _(_, _, _) {
  var _ = {};
  return (
    _.isMergeableObject(_) &&
      _(_).forEach(function (_) {
        _[_] = _(_[_], _);
      }),
    _(_).forEach(function (_) {
      _(_, _) ||
        (_[_] =
          _(_, _) && _.isMergeableObject(_[_])
            ? _(_, _)(_[_], _[_], _)
            : _(_[_], _));
    }),
    _
  );
}
function _(_, _, _) {
  ((_ ||= {}).arrayMerge = _.arrayMerge || _),
    (_.isMergeableObject = _.isMergeableObject || _),
    (_.cloneUnlessOtherwiseSpecified = _);
  var _ = Array.isArray(_);
  return _ === Array.isArray(_)
    ? _
      ? _.arrayMerge(_, _, _)
      : _(_, _, _)
    : _(_, _);
}
function _(_) {
  var _ =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return {};
          },
    _ = (function (_) {
      function _(_, _) {
        var _;
        return (
          _(this, _),
          (_ = _.call(this, _, _)),
          (_.state = _(_({}, _.state))),
          (_.updateStateProps = _.updateStateProps.bind(_(_))),
          _
        );
      }
      _(_, _);
      var _ = _(_);
      return (
        _(_, [
          {
            key: `componentDidMount`,
            value: function () {
              this.context.subscribe(this.updateStateProps);
            },
          },
          {
            key: `shouldComponentUpdate`,
            value: function (_, _) {
              return !_(_, this.state) || !_(_, this.props);
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              this.context.unsubscribe(this.updateStateProps);
            },
          },
          {
            key: `updateStateProps`,
            value: function () {
              this.setState(_(_({}, this.context.state)));
            },
          },
          {
            key: `render`,
            value: function () {
              var _ = this,
                _ = this.props,
                _ = _.children,
                _ = _(_, _),
                _ = _(this.state, _, _);
              return _.createElement(
                _,
                _(
                  {
                    ref: function (_) {
                      _.instance = _;
                    },
                  },
                  _,
                  {
                    carouselStore: {
                      getStoreState: this.context.getStoreState,
                      masterSpinnerError: this.context.masterSpinnerError,
                      masterSpinnerSuccess: this.context.masterSpinnerSuccess,
                      setStoreState: this.context.setStoreState,
                      subscribeMasterSpinner:
                        this.context.subscribeMasterSpinner,
                      unsubscribeAllMasterSpinner:
                        this.context.unsubscribeAllMasterSpinner,
                      unsubscribeMasterSpinner:
                        this.context.unsubscribeMasterSpinner,
                    },
                  },
                ),
                _,
              );
            },
          },
        ]),
        _
      );
    })(_.Component);
  return (
    _(_, `contextType`, _),
    _(_, `propTypes`, {
      children: _.children,
    }),
    _(_, `defaultProps`, {
      children: null,
    }),
    _
  );
}
var _ = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
_.resetWarningCache = _;
var _ = function () {
    function _(_, _, _, _, _, _) {
      if (_ !== _) {
        var _ = Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((_.name = `Invariant Violation`), _);
      }
    }
    function _() {
      return _;
    }
    _.isRequired = _;
    var _ = {
      array: _,
      bigint: _,
      bool: _,
      func: _,
      number: _,
      object: _,
      string: _,
      symbol: _,
      any: _,
      arrayOf: _,
      element: _,
      elementType: _,
      instanceOf: _,
      node: _,
      objectOf: _,
      oneOf: _,
      oneOfType: _,
      shape: _,
      exact: _,
      checkPropTypes: _,
      resetWarningCache: _,
    };
    return (_.PropTypes = _), _;
  },
  _ = _(function (_) {
    _.exports = _();
  }),
  _ = `loading`,
  _ = `success`,
  _ = `error`,
  _ = {
    children: _.oneOfType([_.arrayOf(_.node), _.node]),
    direction: _.oneOf([`forward`, `backward`]),
    height: function (_, _) {
      var _ = _[_];
      return _.orientation !== `vertical` ||
        (_ !== null && typeof _ == `number`)
        ? null
        : Error(
            `Missing required property '${_}' when orientation is vertical.  You must supply a number representing the height in pixels`,
          );
    },
    orientation: _.oneOf([`horizontal`, `vertical`]),
    isBgImage: function (_, _) {
      return !0 === _[_] && _.tag === `img`
        ? Error(
            `HTML img elements should not have a backgroundImage.  Please use ${_} for other block-level HTML tags, like div, a, section, etc...`,
          )
        : null;
    },
  },
  _ = function (_) {
    var _ = _.min,
      _ = _.max,
      _ = _._;
    return Math.min(_, Math.max(_, _));
  },
  _ = {
    arrayMerge: function (_, _) {
      return _;
    },
    clone: !1,
    customMerge: function (_) {
      if (
        _ === `$$typeof` ||
        _ === `_owner` ||
        _ === `_store` ||
        _ === `ref` ||
        _ === `key`
      )
        return function (_, _) {
          return _;
        };
    },
  },
  _ = {
    buttonBack: `buttonBack___1mlaL`,
  },
  _ = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `step`,
    `totalSlides`,
    `visibleSlides`,
    `infinite`,
  ],
  _ = (function (_) {
    function _(_) {
      var _;
      return (
        _(this, _),
        (_ = _.call(this, _)),
        (_.handleOnClick = _.handleOnClick.bind(_(_))),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(
        _,
        [
          {
            key: `handleOnClick`,
            value: function (_) {
              var _ = this.props,
                _ = _.carouselStore,
                _ = _.currentSlide,
                _ = _.onClick,
                _ = _.step,
                _ = _.infinite,
                _ = _.visibleSlides,
                _ = _.totalSlides - _,
                _ = Math.max(_ - _, 0);
              _ && (_ = _ === 0 ? _ : _),
                _.setStoreState(
                  {
                    currentSlide: _,
                    isPlaying: !1,
                  },
                  _ !== null && _.call(this, _),
                );
            },
          },
          {
            key: `render`,
            value: function () {
              var _ = this.props,
                _ = (_.carouselStore, _.className),
                _ =
                  (_.currentSlide,
                  _.disabled,
                  _.onClick,
                  _.step,
                  _.totalSlides,
                  _.visibleSlides,
                  _.infinite),
                _ = _(_, _),
                _ = _([_.buttonBack, `carousel__back-button`, _]),
                _ = _.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  _,
                );
              return _.createElement(
                `button`,
                _(
                  {
                    type: `button`,
                    "aria-label": `previous`,
                    className: _,
                    onClick: this.handleOnClick,
                    disabled: _,
                  },
                  _,
                ),
                this.props.children,
              );
            },
          },
        ],
        [
          {
            key: `setDisabled`,
            value: function (_, _, _) {
              return _ === null ? _ === 0 && !_ : _;
            },
          },
        ],
      ),
      _
    );
  })(_.Component);
_(_, `propTypes`, {
  carouselStore: _.object.isRequired,
  children: _.children.isRequired,
  className: _.string,
  currentSlide: _.number.isRequired,
  disabled: _.bool,
  onClick: _.func,
  step: _.number.isRequired,
  totalSlides: _.number.isRequired,
  visibleSlides: _.number.isRequired,
  infinite: _.bool,
}),
  _(_, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  });
var _ = _(function (_, _) {
  var _ = {}.toString,
    _ = typeof window < `u` ? window.Node : Function;
  _.exports = _ = function (_) {
    var _ = typeof _;
    if (_ != `object`) return _;
    if (((_ = _[_.call(_)]), _ == `object`))
      return _ instanceof Map ? `map` : _ instanceof Set ? `set` : `object`;
    if (_) return _;
    if (_ instanceof _)
      switch (_.nodeType) {
        case 1:
          return `element`;
        case 3:
          return `text-node`;
        case 9:
          return `document`;
        case 11:
          return `document-fragment`;
        default:
          return `dom-node`;
      }
  };
  var _ = (_.types = {
    "[object Function]": `function`,
    "[object Date]": `date`,
    "[object RegExp]": `regexp`,
    "[object Arguments]": `arguments`,
    "[object Array]": `array`,
    "[object Set]": `set`,
    "[object String]": `string`,
    "[object Null]": `null`,
    "[object Undefined]": `undefined`,
    "[object Number]": `number`,
    "[object Boolean]": `boolean`,
    "[object Object]": `object`,
    "[object Map]": `map`,
    "[object Text]": `text-node`,
    "[object Uint8Array]": `bit-array`,
    "[object Uint16Array]": `bit-array`,
    "[object Uint32Array]": `bit-array`,
    "[object Uint8ClampedArray]": `bit-array`,
    "[object Error]": `error`,
    "[object FormData]": `form-data`,
    "[object File]": `file`,
    "[object Blob]": `blob`,
  });
});
_.types;
var _ = {};
(_.number = function (_, _) {
  return _ !== _ && _ !== _;
}),
  (_.function = function (_, _, _) {
    return (
      _.toString() === _.toString() &&
      _.object(_, _, _) &&
      _(_.prototype, _.prototype)
    );
  }),
  (_.date = function (_, _) {
    return +_ == +_;
  }),
  (_.regexp = function (_, _) {
    return _.toString() === _.toString();
  }),
  (_.element = function (_, _) {
    return _.outerHTML === _.outerHTML;
  }),
  (_.textnode = function (_, _) {
    return _.textContent === _.textContent;
  }),
  (_.arguments = _[`bit-array`] = _.array = _(_)),
  (_.object = _(_));
var _ = _,
  _ = function (_) {
    return _(_) && !_(_);
  },
  _ =
    typeof Symbol == `function` && Symbol.for
      ? Symbol.for(`react.element`)
      : 60103;
_.all = function (_, _) {
  if (!Array.isArray(_)) throw Error(`first argument should be an array`);
  return _.reduce(function (_, _) {
    return _(_, _, _);
  }, {});
};
var _ = _,
  _ = _.createContext(),
  _ = function _(_) {
    return (
      Object.freeze(_),
      Object.getOwnPropertyNames(_).forEach(function (_) {
        !_.hasOwnProperty(_) ||
          _[_] === null ||
          (typeof _[_] != `object` && typeof _[_] != `function`) ||
          Object.isFrozen(_[_]) ||
          _(_[_]);
      }),
      _
    );
  },
  _ = {
    masterSpinnerFinished: !1,
  },
  _ = (function () {
    function _(_) {
      _(this, _),
        (this.state = _(_(_, _, _))),
        (this.subscriptions = []),
        (this.masterSpinnerSubscriptions = {}),
        (this.setStoreState = this.setStoreState.bind(this)),
        (this.getStoreState = this.getStoreState.bind(this)),
        (this.subscribe = this.subscribe.bind(this)),
        (this.unsubscribe = this.unsubscribe.bind(this)),
        (this.updateSubscribers = this.updateSubscribers.bind(this)),
        (this.subscribeMasterSpinner = this.subscribeMasterSpinner.bind(this)),
        (this.unsubscribeMasterSpinner =
          this.unsubscribeMasterSpinner.bind(this)),
        (this.unsubscribeAllMasterSpinner =
          this.unsubscribeAllMasterSpinner.bind(this)),
        (this.masterSpinnerSuccess = this.masterSpinnerSuccess.bind(this)),
        (this.masterSpinnerError = this.masterSpinnerError.bind(this));
    }
    return (
      _(_, [
        {
          key: `setStoreState`,
          value: function (_, _) {
            (this.state = _(_(this.state, _, _))), this.updateSubscribers(_);
          },
        },
        {
          key: `getStoreState`,
          value: function () {
            return _({}, this.state, _);
          },
        },
        {
          key: `subscribe`,
          value: function (_) {
            this.subscriptions.push(_);
          },
        },
        {
          key: `unsubscribe`,
          value: function (_) {
            var _ = this.subscriptions.indexOf(_);
            _ !== -1 && this.subscriptions.splice(_, 1);
          },
        },
        {
          key: `updateSubscribers`,
          value: function (_) {
            this.subscriptions.forEach(function (_) {
              return _();
            }),
              typeof _ == `function` && _(this.getStoreState());
          },
        },
        {
          key: `subscribeMasterSpinner`,
          value: function (_) {
            Object.keys(this.masterSpinnerSubscriptions).indexOf(_) === -1 &&
              (this.masterSpinnerSubscriptions[_] = {
                success: !1,
                error: !1,
                complete: !1,
              });
          },
        },
        {
          key: `unsubscribeMasterSpinner`,
          value: function (_) {
            return (
              Object.keys(this.masterSpinnerSubscriptions).indexOf(_) !== -1 &&
              (this.setMasterSpinnerFinished(),
              delete this.masterSpinnerSubscriptions[_])
            );
          },
        },
        {
          key: `unsubscribeAllMasterSpinner`,
          value: function () {
            (this.masterSpinnerSubscriptions = {}),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: `masterSpinnerSuccess`,
          value: function (_) {
            (this.masterSpinnerSubscriptions[_].success = !0),
              (this.masterSpinnerSubscriptions[_].complete = !0),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: `masterSpinnerError`,
          value: function (_) {
            (this.masterSpinnerSubscriptions[_].error = !0),
              (this.masterSpinnerSubscriptions[_].complete = !0),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: `setMasterSpinnerFinished`,
          value: function () {
            this.setStoreState({
              masterSpinnerFinished: this.isMasterSpinnerFinished(),
            });
          },
        },
        {
          key: `isMasterSpinnerFinished`,
          value: function () {
            var _ = this;
            return (
              Object.keys(this.masterSpinnerSubscriptions).filter(function (_) {
                return !0 !== _.masterSpinnerSubscriptions[_].complete;
              }).length === 0
            );
          },
        },
      ]),
      _
    );
  })(),
  _ = [
    `children`,
    `className`,
    `currentSlide`,
    `disableAnimation`,
    `disableKeyboard`,
    `hasMasterSpinner`,
    `interval`,
    `isPageScrollLocked`,
    `isPlaying`,
    `lockOnWindowScroll`,
    `naturalSlideHeight`,
    `naturalSlideWidth`,
    `orientation`,
    `playDirection`,
    `step`,
    `dragStep`,
    `tag`,
    `totalSlides`,
    `touchEnabled`,
    `dragEnabled`,
    `visibleSlides`,
    `infinite`,
    `isIntrinsicHeight`,
  ],
  _ = (function (_) {
    function _(_) {
      var _;
      if (
        (_(this, _),
        (_ = _.call(this, _)),
        _.isIntrinsicHeight && _.orientation !== `horizontal`)
      )
        throw Error(
          `isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.`,
        );
      var _ = {
        currentSlide: _.currentSlide,
        disableAnimation: _.disableAnimation,
        disableKeyboard: _.disableKeyboard,
        hasMasterSpinner: _.hasMasterSpinner,
        imageErrorCount: 0,
        imageSuccessCount: 0,
        interval: _.interval,
        isPageScrollLocked: _.isPageScrollLocked,
        isPlaying: _.isPlaying,
        lockOnWindowScroll: _.lockOnWindowScroll,
        masterSpinnerThreshold: 0,
        naturalSlideHeight: _.naturalSlideHeight,
        naturalSlideWidth: _.naturalSlideWidth,
        orientation: _.orientation,
        playDirection: _.playDirection,
        privateUnDisableAnimation: !1,
        slideSize: _(_.totalSlides, _.visibleSlides),
        slideTraySize: _(_.totalSlides, _.visibleSlides),
        step: _.step,
        dragStep: _.dragStep,
        totalSlides: _.totalSlides,
        touchEnabled: _.touchEnabled,
        dragEnabled: _.dragEnabled,
        visibleSlides: _.visibleSlides,
        infinite: _.infinite,
        isIntrinsicHeight: _.isIntrinsicHeight,
      };
      return (_.carouselStore = new _(_)), _;
    }
    _(_, _);
    var _ = _(_);
    return (
      _(_, [
        {
          key: `componentDidUpdate`,
          value: function (_) {
            var _ = this,
              _ = {};
            [
              `currentSlide`,
              `disableAnimation`,
              `disableKeyboard`,
              `hasMasterSpinner`,
              `interval`,
              `isPlaying`,
              `naturalSlideHeight`,
              `naturalSlideWidth`,
              `lockOnWindowScroll`,
              `orientation`,
              `playDirection`,
              `step`,
              `dragStep`,
              `totalSlides`,
              `touchEnabled`,
              `dragEnabled`,
              `visibleSlides`,
            ].forEach(function (_) {
              _[_] !== _.props[_] && (_[_] = _.props[_]);
            }),
              this.props.currentSlide !== _.currentSlide &&
                !this.props.disableAnimation &&
                ((_.disableAnimation = !0), (_.privateUnDisableAnimation = !0)),
              (this.props.totalSlides === _.totalSlides &&
                this.props.visibleSlides === _.visibleSlides) ||
                ((_.slideSize = _(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                )),
                (_.slideTraySize = _(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                ))),
              this.carouselStore.state.currentSlide >= this.props.totalSlides &&
                (_.currentSlide = Math.max(this.props.totalSlides - 1, 0)),
              Object.keys(_).length > 0 && this.carouselStore.setStoreState(_);
          },
        },
        {
          key: `componentWillUnmount`,
          value: function () {
            this.carouselStore.unsubscribeAllMasterSpinner();
          },
        },
        {
          key: `getStore`,
          value: function () {
            return this.carouselStore;
          },
        },
        {
          key: `render`,
          value: function () {
            var _ = this.props,
              _ =
                (_.children,
                _.className,
                _.currentSlide,
                _.disableAnimation,
                _.disableKeyboard,
                _.hasMasterSpinner,
                _.interval,
                _.isPageScrollLocked,
                _.isPlaying,
                _.lockOnWindowScroll,
                _.naturalSlideHeight,
                _.naturalSlideWidth,
                _.orientation,
                _.playDirection,
                _.step,
                _.dragStep,
                _.tag),
              _ =
                (_.totalSlides,
                _.touchEnabled,
                _.dragEnabled,
                _.visibleSlides,
                _.infinite,
                _.isIntrinsicHeight,
                _(_, _)),
              _ = _([`carousel`, this.props.className]);
            return _.createElement(
              _,
              _(
                {
                  className: _,
                },
                _,
              ),
              _.createElement(
                _.Provider,
                {
                  value: this.carouselStore,
                },
                this.props.children,
              ),
            );
          },
        },
      ]),
      _
    );
  })(_.Component),
  _ =
    (_(_, `propTypes`, {
      children: _.children.isRequired,
      className: _.string,
      currentSlide: _.number,
      disableAnimation: _.bool,
      disableKeyboard: _.bool,
      hasMasterSpinner: _.bool,
      interval: _.number,
      isPageScrollLocked: _.bool,
      isPlaying: _.bool,
      lockOnWindowScroll: _.bool,
      naturalSlideHeight: _.number.isRequired,
      naturalSlideWidth: _.number.isRequired,
      orientation: _.orientation,
      playDirection: _.direction,
      step: _.number,
      dragStep: _.number,
      tag: _.string,
      totalSlides: _.number.isRequired,
      touchEnabled: _.bool,
      dragEnabled: _.bool,
      visibleSlides: _.number,
      infinite: _.bool,
      isIntrinsicHeight: _.bool,
    }),
    _(_, `defaultProps`, {
      className: null,
      currentSlide: 0,
      disableAnimation: !1,
      disableKeyboard: !1,
      hasMasterSpinner: !1,
      interval: 5e3,
      isPageScrollLocked: !1,
      isPlaying: !1,
      lockOnWindowScroll: !1,
      orientation: `horizontal`,
      playDirection: `forward`,
      step: 1,
      dragStep: 1,
      tag: `div`,
      touchEnabled: !0,
      dragEnabled: !0,
      visibleSlides: 1,
      infinite: !1,
      isIntrinsicHeight: !1,
    }),
    _);
_.Consumer;
var _ = [`children`],
  _ = _(_, function (_) {
    return {
      currentSlide: _.currentSlide,
      step: _.step,
      totalSlides: _.totalSlides,
      visibleSlides: _.visibleSlides,
      infinite: _.infinite,
    };
  }),
  _ = {
    buttonFirst: `buttonFirst___2rhFr`,
  },
  _ = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
  ],
  _ = (function (_) {
    function _() {
      var _;
      return (
        _(this, _),
        (_ = _.call(this)),
        (_.handleOnClick = _.handleOnClick.bind(_(_))),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(_, [
        {
          key: `handleOnClick`,
          value: function (_) {
            var _ = this.props,
              _ = _.carouselStore,
              _ = _.onClick;
            _.setStoreState(
              {
                currentSlide: 0,
                isPlaying: !1,
              },
              _ !== null && _.call(this, _),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var _ = this.props,
              _ = (_.carouselStore, _.className),
              _ = _.currentSlide,
              _ = _.disabled,
              _ = (_.onClick, _.totalSlides, _(_, _)),
              _ = _([_.buttonFirst, `carousel__first-button`, _]),
              _ = _ === null ? _ === 0 : _;
            return _.createElement(
              `button`,
              _(
                {
                  type: `button`,
                  "aria-label": `first`,
                  className: _,
                  onClick: this.handleOnClick,
                  disabled: _,
                },
                _,
              ),
              this.props.children,
            );
          },
        },
      ]),
      _
    );
  })(_.Component);
_(
  (_(_, `propTypes`, {
    carouselStore: _.object.isRequired,
    children: _.children.isRequired,
    className: _.string,
    currentSlide: _.number.isRequired,
    disabled: _.bool,
    onClick: _.func,
    totalSlides: _.number.isRequired,
  }),
  _(_, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
  }),
  _),
  function (_) {
    return {
      currentSlide: _.currentSlide,
      totalSlides: _.totalSlides,
    };
  },
);
var _ = {
    buttonLast: `buttonLast___2yuh0`,
  },
  _ = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
    `visibleSlides`,
  ],
  _ = (function (_) {
    function _() {
      var _;
      return (
        _(this, _),
        (_ = _.call(this)),
        (_.handleOnClick = _.handleOnClick.bind(_(_))),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(_, [
        {
          key: `handleOnClick`,
          value: function (_) {
            var _ = this.props,
              _ = _.carouselStore,
              _ = _.onClick,
              _ = _.totalSlides,
              _ = _.visibleSlides;
            _.setStoreState(
              {
                currentSlide: _ - _,
                isPlaying: !1,
              },
              _ !== null && _.call(this, _),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var _ = this.props,
              _ = (_.carouselStore, _.className),
              _ = _.currentSlide,
              _ = _.disabled,
              _ = (_.onClick, _.totalSlides),
              _ = _.visibleSlides,
              _ = _(_, _),
              _ = _([_.buttonLast, `carousel__last-button`, _]),
              _ = _ === null ? _ >= _ - _ : _;
            return _.createElement(
              `button`,
              _(
                {
                  type: `button`,
                  "aria-label": `last`,
                  className: _,
                  onClick: this.handleOnClick,
                  disabled: _,
                },
                _,
              ),
              this.props.children,
            );
          },
        },
      ]),
      _
    );
  })(_.Component);
_(
  (_(_, `propTypes`, {
    carouselStore: _.object.isRequired,
    children: _.children.isRequired,
    className: _.string,
    currentSlide: _.number.isRequired,
    disabled: _.bool,
    onClick: _.func,
    totalSlides: _.number.isRequired,
    visibleSlides: _.number.isRequired,
  }),
  _(_, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
  }),
  _),
  function (_) {
    return {
      currentSlide: _.currentSlide,
      totalSlides: _.totalSlides,
      visibleSlides: _.visibleSlides,
    };
  },
);
var _ = {
    buttonNext: `buttonNext___2mOCa`,
  },
  _ = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `step`,
    `totalSlides`,
    `visibleSlides`,
    `infinite`,
  ],
  _ = (function (_) {
    function _(_) {
      var _;
      return (
        _(this, _),
        (_ = _.call(this, _)),
        (_.handleOnClick = _.handleOnClick.bind(_(_))),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(
        _,
        [
          {
            key: `handleOnClick`,
            value: function (_) {
              var _ = this.props,
                _ = _.currentSlide,
                _ = _.onClick,
                _ = _.step,
                _ = _.carouselStore,
                _ = _.infinite,
                _ = _.totalSlides - _.visibleSlides,
                _ = _ + _,
                _ = Math.min(_, _);
              _ && (_ = _ === _ ? 0 : _),
                _.setStoreState(
                  {
                    currentSlide: _,
                    isPlaying: !1,
                  },
                  _ !== null && _.call(this, _),
                );
            },
          },
          {
            key: `render`,
            value: function () {
              var _ = this.props,
                _ = (_.carouselStore, _.className),
                _ = _.currentSlide,
                _ = _.disabled,
                _ = (_.onClick, _.step, _.totalSlides),
                _ = _.visibleSlides,
                _ = _.infinite,
                _ = _(_, _),
                _ = _([_.buttonNext, `carousel__next-button`, _]),
                _ = _.setDisabled(_, _, _, _, _);
              return _.createElement(
                `button`,
                _(
                  {
                    type: `button`,
                    "aria-label": `next`,
                    className: _,
                    onClick: this.handleOnClick,
                    disabled: _,
                  },
                  _,
                ),
                this.props.children,
              );
            },
          },
        ],
        [
          {
            key: `setDisabled`,
            value: function (_, _, _, _, _) {
              return _ === null ? _ >= _ - _ && !_ : _;
            },
          },
        ],
      ),
      _
    );
  })(_.PureComponent),
  _ = _(
    (_(_, `propTypes`, {
      carouselStore: _.object.isRequired,
      children: _.children.isRequired,
      className: _.string,
      currentSlide: _.number.isRequired,
      disabled: _.bool,
      onClick: _.func,
      step: _.number.isRequired,
      totalSlides: _.number.isRequired,
      visibleSlides: _.number.isRequired,
      infinite: _.bool,
    }),
    _(_, `defaultProps`, {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    _),
    function (_) {
      return {
        currentSlide: _.currentSlide,
        step: _.step,
        totalSlides: _.totalSlides,
        visibleSlides: _.visibleSlides,
        infinite: _.infinite,
      };
    },
  ),
  _ = {
    buttonNext: `buttonNext___3Lm3s`,
  },
  _ = [
    `carouselStore`,
    `children`,
    `childrenPaused`,
    `childrenPlaying`,
    `className`,
    `isPlaying`,
    `onClick`,
  ],
  _ = (function (_) {
    function _(_) {
      var _;
      return (
        _(this, _),
        (_ = _.call(this, _)),
        (_.handleOnClick = _.handleOnClick.bind(_(_))),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(_, [
        {
          key: `handleOnClick`,
          value: function (_) {
            var _ = this.props.onClick;
            this.props.carouselStore.setStoreState(
              {
                isPlaying: !this.props.isPlaying,
              },
              _ !== null && _.call(this, _),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var _ = this.props,
              _ = (_.carouselStore, _.children, _.childrenPaused),
              _ = _.childrenPlaying,
              _ = _.className,
              _ = _.isPlaying,
              _ = (_.onClick, _(_, _)),
              _ = _([_.buttonNext, `carousel__play-button`, _]);
            return _.createElement(
              `button`,
              _(
                {
                  type: `button`,
                  "aria-label": `play`,
                  className: _,
                  onClick: this.handleOnClick,
                },
                _,
              ),
              _ && _,
              !_ && _,
              this.props.children,
            );
          },
        },
      ]),
      _
    );
  })(_.PureComponent);
_(
  (_(_, `propTypes`, {
    carouselStore: _.object.isRequired,
    children: _.node,
    childrenPaused: _.node,
    childrenPlaying: _.node,
    className: _.string,
    isPlaying: _.bool.isRequired,
    onClick: _.func,
  }),
  _(_, `defaultProps`, {
    children: null,
    childrenPaused: null,
    childrenPlaying: null,
    className: null,
    onClick: null,
  }),
  _),
  function (_) {
    return {
      isPlaying: _.isPlaying,
    };
  },
);
var _ = {
    dot: `dot___3c3SI`,
  },
  _ = [
    `carouselStore`,
    `children`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `selected`,
    `slide`,
    `totalSlides`,
    `visibleSlides`,
  ],
  _ = (function (_) {
    function _(_) {
      var _;
      return (
        _(this, _),
        (_ = _.call(this, _)),
        (_.handleOnClick = _.handleOnClick.bind(_(_))),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(_, [
        {
          key: `handleOnClick`,
          value: function (_) {
            var _ = this.props,
              _ = _.carouselStore,
              _ = _.onClick,
              _ = _.slide,
              _ = _.totalSlides,
              _ = _.visibleSlides,
              _ = _ >= _ - _ ? _ - _ : _;
            _.setStoreState(
              {
                currentSlide: _,
                isPlaying: !1,
              },
              _ !== null && _.call(this, _),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var _ = this.props,
              _ = (_.carouselStore, _.children, _.className),
              _ = _.currentSlide,
              _ = _.disabled,
              _ = (_.onClick, _.selected),
              _ = _.slide,
              _ = (_.totalSlides, _.visibleSlides),
              _ = _(_, _),
              _ = _ >= _ && _ < _ + _,
              _ = typeof _ == `boolean` ? _ : _,
              _ = typeof _ == `boolean` ? _ : !0 === _,
              _ = _([
                _.dot,
                _ && _.dotSelected,
                `carousel__dot`,
                `carousel__dot--${_}`,
                _ && `carousel__dot--selected`,
                _,
              ]);
            return _.createElement(
              `button`,
              _(
                {
                  "aria-label": `slide dot`,
                  type: `button`,
                  onClick: this.handleOnClick,
                  className: _,
                  disabled: _,
                },
                _,
              ),
              this.props.children,
            );
          },
        },
      ]),
      _
    );
  })(_.Component),
  _ = _(
    (_(_, `propTypes`, {
      carouselStore: _.object.isRequired,
      children: _.children,
      className: _.string,
      currentSlide: _.number.isRequired,
      disabled: _.bool,
      onClick: _.func,
      selected: _.bool,
      slide: _.number.isRequired,
      totalSlides: _.number.isRequired,
      visibleSlides: _.number.isRequired,
    }),
    _(_, `defaultProps`, {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    _),
    function (_) {
      return {
        currentSlide: _.currentSlide,
        totalSlides: _.totalSlides,
        visibleSlides: _.visibleSlides,
      };
    },
  ),
  _ = {},
  _ = [`renderDots`],
  _ = [
    `carouselStore`,
    `children`,
    `className`,
    `currentSlide`,
    `dotNumbers`,
    `totalSlides`,
    `visibleSlides`,
    `disableActiveDots`,
    `showAsSelectedForCurrentSlideOnly`,
    `renderDots`,
  ],
  _ = (function (_) {
    function _() {
      return _(this, _), _.apply(this, arguments);
    }
    _(_, _);
    var _ = _(_);
    return (
      _(_, [
        {
          key: `renderDots`,
          value: function () {
            var _ = this.props,
              _ = _.currentSlide,
              _ = _.totalSlides,
              _ = _.visibleSlides,
              _ = _.disableActiveDots,
              _ = _.showAsSelectedForCurrentSlideOnly,
              _ = _.renderDots;
            if (_) {
              var _ = this.props;
              return _.renderDots, _(_(_, _));
            }
            for (var _ = [], _ = 0; _ < _; _ += 1) {
              var _ = _ >= _ && _ < _ + _,
                _ = _ ? _ === _ : _,
                _ = _ >= _ - _ ? _ - _ : _;
              _.push(
                _.createElement(
                  _,
                  {
                    key: _,
                    slide: _,
                    selected: _,
                    disabled: !!_ && _,
                  },
                  _.createElement(
                    `span`,
                    {
                      className: _[`carousel__dot-group-dot`],
                    },
                    this.props.dotNumbers && _ + 1,
                  ),
                ),
              );
            }
            return _;
          },
        },
        {
          key: `render`,
          value: function () {
            var _ = this.props,
              _ = (_.carouselStore, _.children),
              _ = _.className,
              _ =
                (_.currentSlide,
                _.dotNumbers,
                _.totalSlides,
                _.visibleSlides,
                _.disableActiveDots,
                _.showAsSelectedForCurrentSlideOnly,
                _.renderDots,
                _(_, _)),
              _ = _([_.DotGroup, `carousel__dot-group`, _]);
            return _.createElement(
              `div`,
              _(
                {
                  className: _,
                },
                _,
              ),
              this.renderDots(),
              _,
            );
          },
        },
      ]),
      _
    );
  })(_.Component);
_(
  (_(_, `propTypes`, {
    children: _.children,
    className: _.string,
    currentSlide: _.number.isRequired,
    carouselStore: _.object.isRequired,
    totalSlides: _.number.isRequired,
    visibleSlides: _.number.isRequired,
    dotNumbers: _.bool,
    disableActiveDots: _.bool,
    showAsSelectedForCurrentSlideOnly: _.bool,
    renderDots: _.func,
  }),
  _(_, `defaultProps`, {
    children: null,
    className: null,
    dotNumbers: !1,
    disableActiveDots: !0,
    showAsSelectedForCurrentSlideOnly: !1,
    renderDots: null,
  }),
  _),
  function (_) {
    return {
      currentSlide: _.currentSlide,
      totalSlides: _.totalSlides,
      visibleSlides: _.visibleSlides,
    };
  },
);
var _ = {
    image: `image___xtQGH`,
  },
  _ = [`src`, `alt`],
  _ = [
    `carouselStore`,
    `children`,
    `className`,
    `hasMasterSpinner`,
    `isBgImage`,
    `onError`,
    `onLoad`,
    `renderError`,
    `renderLoading`,
    `style`,
    `tag`,
  ],
  _ = (function (_) {
    function _(_) {
      var _;
      return (
        _(this, _),
        (_ = _.call(this, _)),
        (_.state = {
          imageStatus: _,
        }),
        (_.handleImageLoad = _.handleImageLoad.bind(_(_))),
        (_.handleImageError = _.handleImageError.bind(_(_))),
        (_.image = null),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(
        _,
        [
          {
            key: `componentDidMount`,
            value: function () {
              _.subscribeMasterSpinner(this.props), this.initImage();
            },
          },
          {
            key: `componentDidUpdate`,
            value: function (_) {
              _.src !== this.props.src &&
                (_.unsubscribeMasterSpinner(_),
                _.subscribeMasterSpinner(this.props),
                this.initImage());
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              _.unsubscribeMasterSpinner(this.props),
                this.image.removeEventListener(`load`, this.handleImageLoad),
                this.image.removeEventListener(`error`, this.handleImageError),
                (this.image = null);
            },
          },
          {
            key: `initImage`,
            value: function () {
              if (
                (this.setState({
                  imageStatus: _,
                }),
                (this.image = document.createElement(`img`)),
                this.image.addEventListener(`load`, this.handleImageLoad, !1),
                this.image.addEventListener(`error`, this.handleImageError, !1),
                (this.image.src = this.props.src),
                this.image.readyState || this.image.complete)
              ) {
                var _ = this.image.src;
                (this.image.src = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`),
                  (this.image.src = _);
              }
            },
          },
          {
            key: `handleImageLoad`,
            value: function (_) {
              this.setState({
                imageStatus: _,
              }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(_);
            },
          },
          {
            key: `handleImageError`,
            value: function (_) {
              this.setState({
                imageStatus: _,
              }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerError(this.props.src),
                this.props.onError && this.props.onError(_);
            },
          },
          {
            key: `tempTag`,
            value: function () {
              return this.props.tag === `img` ? `div` : this.props.tag;
            },
          },
          {
            key: `customRender`,
            value: function (_) {
              return typeof this.props[_] == `function`
                ? this.props[_]()
                : this.props.children;
            },
          },
          {
            key: `renderLoading`,
            value: function (_) {
              var _ = this.tempTag(),
                _ = _([
                  _.image,
                  _.imageLoading,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--loading`,
                  this.props.className,
                ]);
              return _.createElement(
                _,
                _(
                  {
                    className: _,
                  },
                  _,
                ),
                this.customRender(`renderLoading`),
              );
            },
          },
          {
            key: `renderError`,
            value: function (_) {
              var _ = this.tempTag(),
                _ = _([
                  _.image,
                  _.imageError,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--error`,
                  this.props.className,
                ]);
              return _.createElement(
                _,
                _(
                  {
                    className: _,
                  },
                  _,
                ),
                this.customRender(`renderError`),
              );
            },
          },
          {
            key: `renderSuccess`,
            value: function (_) {
              var _ = this.props,
                _ = _.style,
                _ = _.tag,
                _ = _([
                  _.image,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--success`,
                  this.props.className,
                ]),
                _ = _({}, _),
                _ = _;
              if (_ !== `img`) {
                var _ = _.src;
                _.alt,
                  (_ = _(_, _)),
                  (_ = _({}, _, {
                    backgroundImage: `url("${_}")`,
                    backgroundSize: `cover`,
                  }));
              }
              return _.createElement(
                _,
                _(
                  {
                    className: _,
                    style: _,
                  },
                  _,
                ),
                this.props.children,
              );
            },
          },
          {
            key: `render`,
            value: function () {
              var _ = this.props,
                _ =
                  (_.carouselStore,
                  _.children,
                  _.className,
                  _.hasMasterSpinner,
                  _.isBgImage,
                  _.onError,
                  _.onLoad,
                  _.renderError,
                  _.renderLoading,
                  _.style,
                  _.tag,
                  _(_, _));
              switch (this.state.imageStatus) {
                case _:
                  return this.renderLoading(_);
                case _:
                  return this.renderSuccess(_);
                case _:
                  return this.renderError(_);
                default:
                  throw Error(`unknown value for this.state.imageStatus`);
              }
            },
          },
        ],
        [
          {
            key: `subscribeMasterSpinner`,
            value: function (_) {
              _.hasMasterSpinner &&
                _.carouselStore.subscribeMasterSpinner(_.src);
            },
          },
          {
            key: `unsubscribeMasterSpinner`,
            value: function (_) {
              _.hasMasterSpinner &&
                _.carouselStore.unsubscribeMasterSpinner(_.src);
            },
          },
        ],
      ),
      _
    );
  })(_.Component);
_(_, `propTypes`, {
  alt: _.string,
  carouselStore: _.object.isRequired,
  children: _.children,
  className: _.string,
  hasMasterSpinner: _.bool.isRequired,
  isBgImage: _.isBgImage,
  onError: _.func,
  onLoad: _.func,
  renderError: _.func,
  renderLoading: _.func,
  src: _.string.isRequired,
  style: _.object,
  tag: _.string,
}),
  _(_, `defaultProps`, {
    alt: ``,
    children: null,
    className: null,
    isBgImage: !1,
    onError: null,
    onLoad: null,
    renderError: null,
    renderLoading: null,
    style: null,
    tag: `img`,
  });
var _ = _(_, function (_) {
    return {
      hasMasterSpinner: _.hasMasterSpinner,
      orientation: _.orientation,
    };
  }),
  _ = {
    spinner: `spinner___27VUp`,
    spin: `spin___S3UuE`,
  },
  _ = [`className`],
  _ = (function (_) {
    function _() {
      return _(this, _), _.apply(this, arguments);
    }
    _(_, _);
    var _ = _(_);
    return (
      _(_, [
        {
          key: `render`,
          value: function () {
            var _ = this.props,
              _ = _.className,
              _ = _(_, _),
              _ = _([_.spinner, `carousel__spinner`, _]);
            return _.createElement(
              `div`,
              _(
                {
                  className: _,
                },
                _,
              ),
            );
          },
        },
      ]),
      _
    );
  })(_.PureComponent),
  _ =
    (_(_, `propTypes`, {
      className: _.string,
    }),
    _(_, `defaultProps`, {
      className: null,
    }),
    _),
  _ = {
    container: `container___2O72F`,
    overlay: `overlay___IV4qY`,
    hover: `hover___MYy31`,
    zoom: `zoom___3kqYk`,
    loading: `loading___1pvNI`,
    imageLoadingSpinnerContainer: `imageLoadingSpinnerContainer___3UIPD`,
  },
  _ = [
    `alt`,
    `bgImageProps`,
    `bgImageTag`,
    `carouselStore`,
    `className`,
    `imageClassName`,
    `overlayClassName`,
    `isPinchZoomEnabled`,
    `spinner`,
    `src`,
    `srcZoomed`,
    `tag`,
  ],
  _,
  _ = 2,
  _ = 3;
_(
  ((_ = (function (_) {
    function _(_) {
      var _;
      return (
        _(this, _),
        (_ = _.call(this, _)),
        (_.state = {
          isImageLoading: !0,
          isImageLoadingError: !0,
          isHovering: !1,
          isZooming: !1,
          _: null,
          _: null,
          scale: 1,
        }),
        (_.tpCache = {}),
        (_.handleImageComplete = _.handleImageComplete.bind(_(_))),
        (_.handleImageLoadError = _.handleImageLoadError.bind(_(_))),
        (_.handleOnMouseMove = _.handleOnMouseMove.bind(_(_))),
        (_.handleOnMouseOut = _.handleOnMouseOut.bind(_(_))),
        (_.handleOnMouseOver = _.handleOnMouseOver.bind(_(_))),
        (_.handleOnTouchEnd = _.handleOnTouchEnd.bind(_(_))),
        (_.handleOnTouchMove = _.handleOnTouchMove.bind(_(_))),
        (_.handleOnTouchStart = _.handleOnTouchStart.bind(_(_))),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(
        _,
        [
          {
            key: `componentDidUpdate`,
            value: function (_, _) {
              !1 === _.isZooming &&
                !0 === this.state.isZooming &&
                this.props.carouselStore.setStoreState({
                  isPageScrollLocked: !0,
                }),
                !0 === _.isZooming &&
                  !1 === this.state.isZooming &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !1,
                  });
            },
          },
          {
            key: `handleImageComplete`,
            value: function (_) {
              this.setState({
                isImageLoading: !1,
              }),
                this.props && this.props.onLoad && this.props.onLoad(_);
            },
          },
          {
            key: `handleImageLoadError`,
            value: function (_) {
              this.setState({
                isImageLoadingError: !0,
                isImageLoading: !1,
              }),
                this.props && this.props.onError && this.props.onError(_);
            },
          },
          {
            key: `handleOnMouseOver`,
            value: function () {
              this.state.isZooming ||
                this.setState({
                  isHovering: !0,
                  scale: _,
                });
            },
          },
          {
            key: `handleOnMouseOut`,
            value: function () {
              this.state.isZooming ||
                this.setState({
                  isHovering: !1,
                  scale: 1,
                });
            },
          },
          {
            key: `handleOnMouseMove`,
            value: function (_) {
              if (!this.state.isZooming) {
                var _ = _((_.nativeEvent.offsetX / _.target.offsetWidth) * 100),
                  _ = _((_.nativeEvent.offsetY / _.target.offsetHeight) * 100);
                this.setState({
                  _: _,
                  _: _,
                });
              }
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (_) {
              var _ = this;
              this.props.isPinchZoomEnabled &&
                (_(_.targetTouches).forEach(function (_) {
                  _.tpCache[_.identifier] = {
                    clientX: _.clientX,
                    clientY: _.clientY,
                  };
                }),
                this.setState(function (_) {
                  return {
                    isZooming: _.isZooming || Object.keys(_.tpCache).length > 1,
                  };
                }));
            },
          },
          {
            key: `handleOnTouchMove`,
            value: function (_) {
              var _ = this;
              if (this.state.isZooming) {
                _.persist();
                var _ = _(_.targetTouches)
                  .filter(function (_) {
                    return _.tpCache[_.identifier];
                  })
                  .slice(0, 2);
                if (_.length === 2) {
                  _.stopPropagation();
                  var _ = _.target.getBoundingClientRect(),
                    _ = _[0].identifier,
                    _ = _[1].identifier,
                    _ = {
                      _: this.tpCache[_].clientX,
                      _: this.tpCache[_].clientY,
                      _: this.tpCache[_].clientX,
                      _: this.tpCache[_].clientY,
                    };
                  _.distance = _.distanceBetweenTwoTouches(_({}, _));
                  var _ = _.midpointBetweenTwoTouches(_({}, _));
                  (_._ = _._), (_._ = _._);
                  var _ = {
                    _: _[0].clientX,
                    _: _[0].clientY,
                    _: _[1].clientX,
                    _: _[1].clientY,
                  };
                  _.distance = _.distanceBetweenTwoTouches(_({}, _));
                  var _ = _.midpointBetweenTwoTouches(_({}, _));
                  (_._ = _._), (_._ = _._);
                  var _ = _(
                      _({
                        min: 0,
                        max: 100,
                        _: ((_._ - _.left) / _.width) * 100,
                      }),
                    ),
                    _ = _(
                      _({
                        min: 0,
                        max: 100,
                        _: ((_._ - _.top) / _.height) * 100,
                      }),
                    ),
                    _ = function (_) {
                      return _({
                        min: 1,
                        max: _,
                        _: _.scale + (_.distance - _.distance) / 100,
                      });
                    };
                  this.setState(function (_) {
                    return {
                      isZooming: _(_) !== 1,
                      scale: _(_),
                      _: _,
                      _: _,
                    };
                  });
                }
              }
            },
          },
          {
            key: `handleOnTouchEnd`,
            value: function (_) {
              var _ = this;
              this.props.isPinchZoomEnabled &&
                (_(_.changedTouches).forEach(function (_) {
                  delete _.tpCache[_.identifier];
                }),
                Object.keys(this.tpCache).length === 0 &&
                  this.setState({
                    isZooming: !1,
                  }));
            },
          },
          {
            key: `renderLoading`,
            value: function () {
              if (this.state.isImageLoading) {
                var _ = this.props.spinner;
                return _.createElement(
                  `div`,
                  {
                    className: _([
                      _.imageLoadingSpinnerContainer,
                      `carousel__image-loading-spinner-container`,
                    ]),
                  },
                  _ && _(),
                  !_ && _.createElement(_, null),
                );
              }
              return null;
            },
          },
          {
            key: `render`,
            value: function () {
              var _ = this.props,
                _ = _.alt,
                _ = _.bgImageProps,
                _ = _.bgImageTag,
                _ = (_.carouselStore, _.className),
                _ = _.imageClassName,
                _ = _.overlayClassName,
                _ = (_.isPinchZoomEnabled, _.spinner, _.src),
                _ = _.srcZoomed,
                _ = _.tag,
                _ = _(_, _),
                _ = _([_.container, _]),
                _ = _([_.image, `carousel__zoom-image`, _]),
                _ = _([
                  _.overlay,
                  `carousel__zoom-image-overlay`,
                  this.state.isHovering && _.hover,
                  this.state.isZooming && _.zoom,
                  this.state.isHovering &&
                    `carousel__zoom-image-overlay--hovering`,
                  this.state.isZooming &&
                    `carousel__zoom-image-overlay--zooming`,
                  _,
                ]),
                _ = {};
              return (
                (this.state.isHovering || this.state.isZooming) &&
                  ((_.transformOrigin = `${this.state._} ${this.state._}`),
                  (_.transform = `scale(${this.state.scale})`)),
                _.createElement(
                  _,
                  _(
                    {
                      className: _,
                    },
                    _,
                  ),
                  _.createElement(
                    _,
                    _(
                      {
                        alt: _,
                        className: _,
                        tag: _,
                        src: _,
                        onLoad: this.handleImageComplete,
                        onError: this.handleImageLoadError,
                      },
                      _,
                    ),
                  ),
                  _.createElement(_, {
                    className: _,
                    tag: `div`,
                    src: _ || _,
                    style: _,
                    isBgImage: !0,
                    onFocus: this.handleOnMouseOver,
                    onMouseOver: this.handleOnMouseOver,
                    onBlur: this.handleOnMouseOut,
                    onMouseOut: this.handleOnMouseOut,
                    onMouseMove: this.handleOnMouseMove,
                    onTouchStart: this.handleOnTouchStart,
                    onTouchEnd: this.handleOnTouchEnd,
                    onTouchMove: this.handleOnTouchMove,
                  }),
                  this.renderLoading(),
                )
              );
            },
          },
        ],
        [
          {
            key: `midpointBetweenTwoTouches`,
            value: function (_) {
              var _ = _._,
                _ = _._;
              return {
                _: (_ + _._) / 2,
                _: (_ + _._) / 2,
              };
            },
          },
          {
            key: `distanceBetweenTwoTouches`,
            value: function (_) {
              var _ = _._,
                _ = _._,
                _ = _._,
                _ = _._;
              return Math.sqrt((_ - _) ** 2 + (_ - _) ** 2);
            },
          },
        ],
      ),
      _
    );
  })(_.Component)),
  _(_, `propTypes`, {
    alt: _.string,
    bgImageProps: _.object,
    bgImageTag: _.string,
    carouselStore: _.object.isRequired,
    className: _.string,
    imageClassName: _.string,
    overlayClassName: _.string,
    spinner: _.func,
    onLoad: _.func,
    onError: _.func,
    src: _.string.isRequired,
    srcZoomed: _.string,
    tag: _.string,
    isPinchZoomEnabled: _.bool,
  }),
  _(_, `defaultProps`, {
    alt: void 0,
    bgImageProps: {},
    bgImageTag: `div`,
    className: null,
    imageClassName: null,
    overlayClassName: null,
    isPinchZoomEnabled: !0,
    spinner: null,
    onLoad: null,
    onError: null,
    srcZoomed: null,
    tag: `div`,
  }),
  _),
  function () {
    return {};
  },
);
var _ = {
    slide: `slide___3-Nqo`,
    slideHorizontal: `slideHorizontal___1NzNV`,
    slideInner: `slideInner___2mfX9`,
    focusRing: `focusRing___1airF`,
  },
  _ = [
    `ariaLabel`,
    `carouselStore`,
    `children`,
    `className`,
    `classNameHidden`,
    `classNameVisible`,
    `currentSlide`,
    `index`,
    `innerClassName`,
    `innerTag`,
    `naturalSlideHeight`,
    `naturalSlideWidth`,
    `onBlur`,
    `onFocus`,
    `orientation`,
    `slideSize`,
    `style`,
    `tag`,
    `totalSlides`,
    `visibleSlides`,
    `isIntrinsicHeight`,
  ],
  _ = (function (_) {
    function _(_) {
      var _;
      return (
        _(this, _),
        (_ = _.call(this, _)),
        (_.handleOnFocus = _.handleOnFocus.bind(_(_))),
        (_.handleOnBlur = _.handleOnBlur.bind(_(_))),
        (_.state = {
          focused: !1,
        }),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(_, [
        {
          key: `isVisible`,
          value: function () {
            var _ = this.props,
              _ = _.currentSlide,
              _ = _.index,
              _ = _.visibleSlides;
            return _ >= _ && _ < _ + _;
          },
        },
        {
          key: `handleOnFocus`,
          value: function (_) {
            var _ = this,
              _ = this.props.onFocus;
            this.setState(
              {
                focused: !0,
              },
              function () {
                _ !== null && _.call(_, _);
              },
            );
          },
        },
        {
          key: `handleOnBlur`,
          value: function (_) {
            var _ = this,
              _ = this.props.onBlur;
            this.setState(
              {
                focused: !1,
              },
              function () {
                _ !== null && _.call(_, _);
              },
            );
          },
        },
        {
          key: `renderFocusRing`,
          value: function () {
            return this.state.focused
              ? _.createElement(`div`, {
                  className: [_.focusRing, `carousel__slide-focus-ring`].join(
                    ` `,
                  ),
                })
              : null;
          },
        },
        {
          key: `render`,
          value: function () {
            var _ = this,
              _ = this.props,
              _ = _.ariaLabel,
              _ = (_.carouselStore, _.children, _.className),
              _ = _.classNameHidden,
              _ = _.classNameVisible,
              _ = (_.currentSlide, _.index, _.innerClassName),
              _ = _.innerTag,
              _ = _.naturalSlideHeight,
              _ = _.naturalSlideWidth,
              _ = (_.onBlur, _.onFocus, _.orientation),
              _ = _.slideSize,
              _ = _.style,
              _ = _.tag,
              _ = _.totalSlides,
              _ = (_.visibleSlides, _.isIntrinsicHeight),
              _ = _(_, _),
              _ = {};
            _ === `horizontal`
              ? ((_.width = _(_)), (_.paddingBottom = _((100 * _) / (_ * _))))
              : ((_.width = _(100)), (_.paddingBottom = _((100 * _) / _)));
            var _ = {};
            _ &&
              (_ === `horizontal` ? (_.height = `unset`) : (_.width = `unset`),
              (_.paddingBottom = `unset`),
              (_.position = `unset`));
            var _ = _({}, _, _),
              _ = this.isVisible(),
              _ = _([
                _.slide,
                _ === `horizontal` && _.slideHorizontal,
                `carousel__slide`,
                this.state.focused && `carousel__slide--focused`,
                _ && _,
                _ && `carousel__slide--visible`,
                !_ && _,
                !_ && `carousel__slide--hidden`,
                _,
              ]),
              _ = _([_.slideInner, `carousel__inner-slide`, _]);
            return _.createElement(
              _,
              _(
                {
                  ref: function (_) {
                    _.tagRef = _;
                  },
                  "aria-selected": this.isVisible(),
                  "aria-label": _,
                  role: this.props.role,
                  onFocus: this.handleOnFocus,
                  onBlur: this.handleOnBlur,
                  className: _,
                  style: _,
                },
                _,
              ),
              _.createElement(
                _,
                {
                  ref: function (_) {
                    _.innerTagRef = _;
                  },
                  className: _,
                  style: _,
                },
                this.props.children,
                this.renderFocusRing(),
              ),
            );
          },
        },
      ]),
      _
    );
  })(_.PureComponent),
  _ = _(
    (_(_, `propTypes`, {
      ariaLabel: _.string,
      carouselStore: _.object,
      children: _.children,
      className: _.string,
      classNameHidden: _.string,
      classNameVisible: _.string,
      currentSlide: _.number.isRequired,
      index: _.number.isRequired,
      innerClassName: _.string,
      innerTag: _.string,
      naturalSlideHeight: _.number.isRequired,
      naturalSlideWidth: _.number.isRequired,
      onBlur: _.func,
      onFocus: _.func,
      orientation: _.orientation.isRequired,
      slideSize: _.number.isRequired,
      role: _.string,
      style: _.object,
      tag: _.string,
      totalSlides: _.number.isRequired,
      visibleSlides: _.number.isRequired,
      isIntrinsicHeight: _.bool,
    }),
    _(_, `defaultProps`, {
      ariaLabel: `slide`,
      carouselStore: null,
      children: null,
      className: null,
      classNameHidden: null,
      classNameVisible: null,
      innerClassName: null,
      innerTag: `div`,
      onBlur: null,
      onFocus: null,
      role: `option`,
      style: {},
      tag: `div`,
      isIntrinsicHeight: !1,
    }),
    _),
    function (_) {
      return {
        currentSlide: _.currentSlide,
        naturalSlideHeight: _.naturalSlideHeight,
        naturalSlideWidth: _.naturalSlideWidth,
        orientation: _.orientation,
        slideSize: _.slideSize,
        totalSlides: _.totalSlides,
        visibleSlides: _.visibleSlides,
        isIntrinsicHeight: _.isIntrinsicHeight,
      };
    },
  ),
  _ = (function () {
    function _() {
      _(this, _);
    }
    return (
      _(
        _,
        [
          {
            key: `parents`,
            value: function (_, _) {
              return _.parentNode === null
                ? _
                : this.parents(_.parentNode, _.concat([_]));
            },
          },
          {
            key: `scrollParent`,
            value: function (_) {
              for (
                var _ = this.parents(_.parentNode, []), _ = 0;
                _ < _.length;
                _ += 1
              )
                if (_.scroll(_[_])) return _[_];
              return document.scrollingElement || document.documentElement;
            },
          },
          {
            key: `getScrollParent`,
            value: function (_) {
              return _.isNodeValid(_) ? this.scrollParent(_) : null;
            },
          },
        ],
        [
          {
            key: `style`,
            value: function (_, _) {
              return getComputedStyle(_, null).getPropertyValue(_);
            },
          },
          {
            key: `overflow`,
            value: function (_) {
              return (
                _.style(_, `overflow`) +
                _.style(_, `overflow-y`) +
                _.style(_, `overflow-x`)
              );
            },
          },
          {
            key: `scroll`,
            value: function (_) {
              return /(auto|scroll)/.test(_.overflow(_));
            },
          },
          {
            key: `isNodeValid`,
            value: function (_) {
              return _ instanceof HTMLElement || _ instanceof SVGElement;
            },
          },
        ],
      ),
      _
    );
  })(),
  _ = {
    horizontalSlider: `horizontalSlider___281Ls`,
    touchDisabled: `touchDisabled___2qs4y`,
    horizontalSliderTray: `horizontalSliderTray___1L-0W`,
    verticalSlider: `verticalSlider___34ZFD`,
    verticalSliderTray: `verticalSliderTray___267D8`,
    verticalTray: `verticalTray___12Key`,
    verticalSlideTrayWrap: `verticalSlideTrayWrap___2nO7o`,
    sliderTray: `sliderTray___-vHFQ`,
    sliderAnimation: `sliderAnimation___300FY`,
    masterSpinnerContainer: `masterSpinnerContainer___1Z6hB`,
  },
  _ =
    `ariaLabel.carouselStore.children.className.classNameAnimation.classNameTray.classNameTrayWrap.currentSlide.disableAnimation.disableKeyboard.dragEnabled.hasMasterSpinner.interval.isPageScrollLocked.isPlaying.lockOnWindowScroll.masterSpinnerFinished.moveThreshold.naturalSlideHeight.naturalSlideWidth.onMasterSpinner.orientation.playDirection.privateUnDisableAnimation.slideSize.slideTraySize.spinner.style.totalSlides.touchEnabled.trayProps.trayTag.visibleSlides.isIntrinsicHeight`.split(
      `.`,
    ),
  _ = [
    `dragStep`,
    `step`,
    `infinite`,
    `preventVerticalScrollOnTouch`,
    `preventingVerticalScroll`,
    `horizontalPixelThreshold`,
    `verticalPixelThreshold`,
  ],
  _ = [
    `className`,
    `onClickCapture`,
    `onMouseDown`,
    `onTouchCancel`,
    `onTouchEnd`,
    `onTouchMove`,
    `onTouchStart`,
    `ref`,
    `style`,
  ],
  _ = (function (_) {
    function _(_) {
      var _;
      return (
        _(this, _),
        (_ = _.call(this, _)),
        (_.getSliderRef = _.getSliderRef.bind(_(_))),
        (_.handleDocumentScroll = _.handleDocumentScroll.bind(_(_))),
        (_.handleOnClickCapture = _.handleOnClickCapture.bind(_(_))),
        (_.handleOnKeyDown = _.handleOnKeyDown.bind(_(_))),
        (_.handleOnMouseDown = _.handleOnMouseDown.bind(_(_))),
        (_.handleOnMouseMove = _.handleOnMouseMove.bind(_(_))),
        (_.handleOnMouseUp = _.handleOnMouseUp.bind(_(_))),
        (_.handleOnTouchCancel = _.handleOnTouchCancel.bind(_(_))),
        (_.handleOnTouchEnd = _.handleOnTouchEnd.bind(_(_))),
        (_.handleOnTouchMove = _.handleOnTouchMove.bind(_(_))),
        (_.handleOnTouchStart = _.handleOnTouchStart.bind(_(_))),
        (_.playBackward = _.playBackward.bind(_(_))),
        (_.playForward = _.playForward.bind(_(_))),
        (_.callCallback = _.callCallback.bind(_(_))),
        (_.blockWindowScroll = _.blockWindowScroll.bind(_(_))),
        (_.state = {
          cancelNextClick: !1,
          deltaX: 0,
          deltaY: 0,
          isBeingMouseDragged: !1,
          isBeingTouchDragged: !1,
          preventingVerticalScroll: !1,
          startX: 0,
          startY: 0,
        }),
        (_.interval = null),
        (_.isDocumentScrolling = null),
        (_.moveTimer = null),
        (_.originalOverflow = null),
        (_.scrollParent = null),
        (_.scrollStopTimer = null),
        _
      );
    }
    _(_, _);
    var _ = _(_);
    return (
      _(
        _,
        [
          {
            key: `componentDidMount`,
            value: function () {
              this.props.lockOnWindowScroll &&
                window.addEventListener(
                  `scroll`,
                  this.handleDocumentScroll,
                  !1,
                ),
                (this.props.touchEnabled ||
                  this.props.preventVerticalScrollOnTouch) &&
                  window.addEventListener(
                    `touchmove`,
                    this.blockWindowScroll,
                    !1,
                  ),
                document.documentElement.addEventListener(
                  `mouseleave`,
                  this.handleOnMouseUp,
                  !1,
                ),
                document.documentElement.addEventListener(
                  `mousemove`,
                  this.handleOnMouseMove,
                  !1,
                ),
                document.documentElement.addEventListener(
                  `mouseup`,
                  this.handleOnMouseUp,
                  !1,
                ),
                this.props.isPlaying && this.play();
            },
          },
          {
            key: `componentDidUpdate`,
            value: function (_) {
              !_.isPlaying && this.props.isPlaying && this.play(),
                _.isPlaying && !this.props.isPlaying && this.stop(),
                !_.isPageScrollLocked &&
                  this.props.isPageScrollLocked &&
                  this.lockScroll(),
                _.isPageScrollLocked &&
                  !this.props.isPageScrollLocked &&
                  this.unlockScroll(),
                !1 === _.privateUnDisableAnimation &&
                  !0 === this.props.privateUnDisableAnimation &&
                  this.props.carouselStore.setStoreState({
                    privateUnDisableAnimation: !1,
                    disableAnimation: !1,
                  });
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              document.documentElement.removeEventListener(
                `mouseleave`,
                this.handleOnMouseUp,
                !1,
              ),
                document.documentElement.removeEventListener(
                  `mousemove`,
                  this.handleOnMouseMove,
                  !1,
                ),
                document.documentElement.removeEventListener(
                  `mouseup`,
                  this.handleOnMouseUp,
                  !1,
                ),
                window.removeEventListener(
                  `scroll`,
                  this.handleDocumentScroll,
                  !1,
                ),
                window.removeEventListener(
                  `touchmove`,
                  this.blockWindowScroll,
                  !1,
                ),
                this.stop(),
                window.cancelAnimationFrame.call(window, this.moveTimer),
                window.clearTimeout(this.scrollStopTimer),
                (this.isDocumentScrolling = null),
                (this.moveTimer = null),
                (this.scrollStopTimer = null);
            },
          },
          {
            key: `getSliderRef`,
            value: function (_) {
              if (((this.sliderTrayElement = _), _ && window)) {
                var _ = _.closest(`.carousel`);
                _ &&
                  (this.rtl =
                    window
                      .getComputedStyle(_, null)
                      .getPropertyValue(`direction`) === `rtl`);
              }
            },
          },
          {
            key: `fakeOnDragStart`,
            value: function (_) {
              var _ = _.screenX,
                _ = _.screenY,
                _ = _.touchDrag,
                _ = _ !== void 0 && _,
                _ = _.mouseDrag,
                _ = _ !== void 0 && _;
              this.props.carouselStore.setStoreState({
                isPlaying: !1,
              }),
                window.cancelAnimationFrame.call(window, this.moveTimer),
                this.props.orientation === `vertical` &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !0,
                  }),
                this.setState({
                  isBeingTouchDragged: _,
                  isBeingMouseDragged: _,
                  startX: _,
                  startY: _,
                });
            },
          },
          {
            key: `fakeOnDragMove`,
            value: function (_, _) {
              var _ = this;
              window.cancelAnimationFrame.call(window, this.moveTimer),
                (this.moveTimer = window.requestAnimationFrame.call(
                  window,
                  function () {
                    _.setState(function (_) {
                      return {
                        deltaX: (_ - _.startX) * (_.rtl ? -1 : 1),
                        deltaY: _ - _.startY,
                        preventingVerticalScroll:
                          Math.abs(_ - _.startY) <=
                            _.props.verticalPixelThreshold &&
                          Math.abs(_ - _.startX) >=
                            _.props.horizontalPixelThreshold,
                      };
                    });
                  },
                ));
            },
          },
          {
            key: `fakeOnDragEnd`,
            value: function () {
              window.cancelAnimationFrame.call(window, this.moveTimer),
                this.computeCurrentSlide(),
                this.props.orientation === `vertical` &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !1,
                  }),
                this.setState({
                  deltaX: 0,
                  deltaY: 0,
                  isBeingTouchDragged: !1,
                  isBeingMouseDragged: !1,
                }),
                (this.isDocumentScrolling =
                  !this.props.lockOnWindowScroll && null);
            },
          },
          {
            key: `callCallback`,
            value: function (_, _) {
              var _ = this.props.trayProps;
              _ && typeof _[_] == `function` && (_.persist(), _[_](_));
            },
          },
          {
            key: `handleOnMouseDown`,
            value: function (_) {
              if (!this.props.dragEnabled)
                return void this.callCallback(`onMouseDown`, _);
              _.preventDefault(),
                this.fakeOnDragStart({
                  screenX: _.screenX,
                  screenY: _.screenY,
                  mouseDrag: !0,
                }),
                this.callCallback(`onMouseDown`, _);
            },
          },
          {
            key: `handleOnMouseMove`,
            value: function (_) {
              this.state.isBeingMouseDragged &&
                (this.setState({
                  cancelNextClick: !0,
                }),
                _.preventDefault(),
                this.fakeOnDragMove(_.screenX, _.screenY));
            },
          },
          {
            key: `handleOnMouseUp`,
            value: function (_) {
              this.state.isBeingMouseDragged &&
                (_.preventDefault(), this.fakeOnDragEnd());
            },
          },
          {
            key: `handleOnClickCapture`,
            value: function (_) {
              if (!this.state.cancelNextClick)
                return void this.callCallback(`onClickCapture`, _);
              _.preventDefault(),
                this.setState({
                  cancelNextClick: !1,
                }),
                this.callCallback(`onClickCapture`, _);
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (_) {
              if (!this.props.touchEnabled)
                return void this.callCallback(`onTouchStart`, _);
              this.props.orientation === `vertical` && _.preventDefault();
              var _ = _.targetTouches[0];
              this.fakeOnDragStart({
                screenX: _.screenX,
                screenY: _.screenY,
                touchDrag: !0,
              }),
                this.callCallback(`onTouchStart`, _);
            },
          },
          {
            key: `handleDocumentScroll`,
            value: function () {
              var _ = this;
              this.props.touchEnabled &&
                ((this.isDocumentScrolling = !0),
                window.clearTimeout(this.scrollStopTimer),
                (this.scrollStopTimer = window.setTimeout(function () {
                  _.isDocumentScrolling = !1;
                }, 66)));
            },
          },
          {
            key: `handleOnTouchMove`,
            value: function (_) {
              if (
                !this.props.touchEnabled ||
                (this.props.lockOnWindowScroll && this.isDocumentScrolling)
              )
                return void this.callCallback(`onTouchMove`, _);
              var _ = _.targetTouches[0];
              _ &&
                (this.fakeOnDragMove(_.screenX, _.screenY),
                this.callCallback(`onTouchMove`, _));
            },
          },
          {
            key: `forward`,
            value: function () {
              var _ = this.props,
                _ = _.currentSlide,
                _ = _.step,
                _ = _.totalSlides,
                _ = _.visibleSlides;
              return Math.min(_ + _, _ - _);
            },
          },
          {
            key: `backward`,
            value: function () {
              var _ = this.props,
                _ = _.currentSlide,
                _ = _.step;
              return Math.max(_ - _, 0);
            },
          },
          {
            key: `handleOnKeyDown`,
            value: function (_) {
              var _ = _.keyCode,
                _ = this.props,
                _ = _.carouselStore,
                _ = _.currentSlide,
                _ = _.disableKeyboard,
                _ = _.totalSlides,
                _ = _.visibleSlides,
                _ = {};
              !0 === _ ||
                _ <= _ ||
                (_ === 37 &&
                  (_.preventDefault(),
                  this.focus(),
                  (_.currentSlide = Math.max(0, _ - 1)),
                  (_.isPlaying = !1)),
                _ === 39 &&
                  (_.preventDefault(),
                  this.focus(),
                  (_.currentSlide = Math.min(_ - _, _ + 1)),
                  (_.isPlaying = !1)),
                _.setStoreState(_));
            },
          },
          {
            key: `playForward`,
            value: function () {
              var _ = this.props,
                _ = _.carouselStore,
                _ = _.currentSlide;
              _.setStoreState({
                currentSlide: this.forward() === _ ? 0 : this.forward(),
              });
            },
          },
          {
            key: `playBackward`,
            value: function () {
              var _ = this.props,
                _ = _.carouselStore,
                _ = _.currentSlide,
                _ = _.totalSlides,
                _ = _.visibleSlides;
              _.setStoreState({
                currentSlide: this.backward() === _ ? _ - _ : this.backward(),
              });
            },
          },
          {
            key: `play`,
            value: function () {
              var _ = this.props.playDirection;
              this.interval = setInterval(
                _ === `forward` ? this.playForward : this.playBackward,
                this.props.interval,
              );
            },
          },
          {
            key: `stop`,
            value: function () {
              window.clearInterval(this.interval), (this.interval = null);
            },
          },
          {
            key: `lockScroll`,
            value: function () {
              var _ = new _();
              (this.scrollParent = _.getScrollParent(this.sliderTrayElement)),
                this.scrollParent &&
                  ((this.originalOverflow =
                    this.originalOverflow || this.scrollParent.style.overflow),
                  (this.scrollParent.style.overflow = `hidden`));
            },
          },
          {
            key: `unlockScroll`,
            value: function () {
              this.scrollParent &&=
                ((this.scrollParent.style.overflow = this.originalOverflow),
                (this.originalOverflow = null),
                null);
            },
          },
          {
            key: `blockWindowScroll`,
            value: function (_) {
              this.state.preventingVerticalScroll &&
                (_.preventDefault(), _.stopImmediatePropagation());
            },
          },
          {
            key: `computeCurrentSlide`,
            value: function () {
              var _ = _.slideSizeInPx(
                  this.props.orientation,
                  this.sliderTrayElement.clientWidth,
                  this.sliderTrayElement.clientHeight,
                  this.props.totalSlides,
                ),
                _ = _.slidesMoved(
                  this.props.moveThreshold,
                  this.props.orientation,
                  this.state.deltaX,
                  this.state.deltaY,
                  _,
                  this.props.dragStep,
                ),
                _ =
                  this.props.totalSlides -
                  Math.min(this.props.totalSlides, this.props.visibleSlides),
                _ = _({
                  min: 0,
                  max: _,
                  _: this.props.currentSlide + _,
                });
              this.props.infinite &&
                (this.props.currentSlide >= _ && _ > 0 && (_ = 0),
                this.props.currentSlide === 0 && _ < 0 && (_ = _)),
                this.props.carouselStore.setStoreState({
                  currentSlide: _,
                });
            },
          },
          {
            key: `focus`,
            value: function () {
              this.sliderElement.focus();
            },
          },
          {
            key: `handleOnTouchEnd`,
            value: function (_) {
              this.endTouchMove(), this.callCallback(`onTouchEnd`, _);
            },
          },
          {
            key: `handleOnTouchCancel`,
            value: function (_) {
              this.endTouchMove(), this.callCallback(`onTouchCancel`, _);
            },
          },
          {
            key: `endTouchMove`,
            value: function () {
              this.props.touchEnabled && this.fakeOnDragEnd();
            },
          },
          {
            key: `renderMasterSpinner`,
            value: function () {
              var _ = this.props,
                _ = _.hasMasterSpinner,
                _ = _.masterSpinnerFinished,
                _ = _.spinner;
              return _ && !_
                ? (typeof this.props.onMasterSpinner == `function` &&
                    this.props.onMasterSpinner(),
                  _.createElement(
                    `div`,
                    {
                      className: _([
                        _.masterSpinnerContainer,
                        `carousel__master-spinner-container`,
                      ]),
                    },
                    _ && _(),
                    !_ && _.createElement(_, null),
                  ))
                : null;
            },
          },
          {
            key: `render`,
            value: function () {
              var _ = this,
                _ = this.props,
                _ = _.ariaLabel,
                _ = (_.carouselStore, _.children),
                _ = _.className,
                _ = _.classNameAnimation,
                _ = _.classNameTray,
                _ = _.classNameTrayWrap,
                _ = _.currentSlide,
                _ = _.disableAnimation,
                _ =
                  (_.disableKeyboard,
                  _.dragEnabled,
                  _.hasMasterSpinner,
                  _.interval,
                  _.isPageScrollLocked,
                  _.isPlaying,
                  _.lockOnWindowScroll,
                  _.masterSpinnerFinished,
                  _.moveThreshold,
                  _.naturalSlideHeight),
                _ = _.naturalSlideWidth,
                _ = (_.onMasterSpinner, _.orientation),
                _ = (_.playDirection, _.privateUnDisableAnimation, _.slideSize),
                _ = _.slideTraySize,
                _ = (_.spinner, _.style),
                _ = (_.totalSlides, _.touchEnabled),
                _ = _.trayProps,
                _ = _.trayTag,
                _ = _.visibleSlides,
                _ = _.isIntrinsicHeight,
                _ = _(_, _),
                _ = _({}, _),
                _ = {};
              _ === `vertical` &&
                ((_.height = 0),
                (_.paddingBottom = _((100 * _ * _) / _)),
                (_.width = _(100)));
              var _ = {},
                _ = _(_ * _ * -1);
              (this.state.isBeingTouchDragged ||
                this.state.isBeingMouseDragged ||
                _) &&
                (_.transition = `none`),
                _ && ((_.display = `flex`), (_.alignItems = `stretch`)),
                _ === `vertical`
                  ? ((_.transform = `translateY(${_}) translateY(${this.state.deltaY}px)`),
                    (_.width = _(100)),
                    (_.flexDirection = `column`))
                  : ((_.width = _(_)),
                    (_.transform = `translateX(${_}) translateX(${this.state.deltaX}px)`),
                    (_.flexDirection = `row`));
              var _ = _([
                  _ === `vertical` ? _.verticalSlider : _.horizontalSlider,
                  !_ && _.touchDisabled,
                  `carousel__slider`,
                  _ === `vertical`
                    ? `carousel__slider--vertical`
                    : `carousel__slider--horizontal`,
                  _,
                ]),
                _ = _([
                  _.sliderTrayWrap,
                  `carousel__slider-tray-wrapper`,
                  _ === `vertical`
                    ? _.verticalSlideTrayWrap
                    : _.horizontalTrayWrap,
                  _ === `vertical`
                    ? `carousel__slider-tray-wrap--vertical`
                    : `carousel__slider-tray-wrap--horizontal`,
                  _,
                ]),
                _ = _([
                  _.sliderTray,
                  _ || _.sliderAnimation,
                  `carousel__slider-tray`,
                  _ === `vertical` ? _.verticalTray : _.horizontalTray,
                  _ === `vertical`
                    ? `carousel__slider-tray--vertical`
                    : `carousel__slider-tray--horizontal`,
                  _,
                ]),
                _ =
                  (_.dragStep,
                  _.step,
                  _.infinite,
                  _.preventVerticalScrollOnTouch,
                  _.preventingVerticalScroll,
                  _.horizontalPixelThreshold,
                  _.verticalPixelThreshold,
                  _(_, _)),
                _ =
                  (_.className,
                  _.onClickCapture,
                  _.onMouseDown,
                  _.onTouchCancel,
                  _.onTouchEnd,
                  _.onTouchMove,
                  _.onTouchStart,
                  _.ref,
                  _.style,
                  _(_, _));
              return _.createElement(
                `div`,
                _(
                  {
                    ref: function (_) {
                      _.sliderElement = _;
                    },
                    className: _,
                    "aria-live": `polite`,
                    "aria-label": _,
                    role: this.props.role,
                    style: _,
                    onKeyDown: this.handleOnKeyDown,
                  },
                  _,
                ),
                _.createElement(
                  `div`,
                  {
                    className: _,
                    style: _,
                  },
                  _.createElement(
                    _,
                    _(
                      {
                        ref: this.getSliderRef,
                        className: _,
                        style: _,
                        onTouchStart: this.handleOnTouchStart,
                        onTouchMove: this.handleOnTouchMove,
                        onTouchEnd: this.handleOnTouchEnd,
                        onTouchCancel: this.handleOnTouchCancel,
                        onMouseDown: this.handleOnMouseDown,
                        onClickCapture: this.handleOnClickCapture,
                      },
                      _,
                    ),
                    _,
                  ),
                  this.renderMasterSpinner(),
                ),
              );
            },
          },
        ],
        [
          {
            key: `slideSizeInPx`,
            value: function (_, _, _, _) {
              return (_ === `horizontal` ? _ : _) / _;
            },
          },
          {
            key: `slidesMoved`,
            value: function (_, _, _, _, _, _) {
              var _ = _ === `horizontal` ? _ : _,
                _ = Math.abs(Math.round(_ / _)),
                _ = Math.abs(_) >= _ * _ ? _ : 0,
                _ = Math.max(_, _);
              if (_ < 0) return _;
              var _ = -_;
              return _ === 0 ? 0 : _;
            },
          },
        ],
      ),
      _
    );
  })(_.Component),
  _ = _(
    (_(_, `propTypes`, {
      ariaLabel: _.string,
      carouselStore: _.object.isRequired,
      children: _.node.isRequired,
      className: _.string,
      classNameAnimation: _.string,
      classNameTray: _.string,
      classNameTrayWrap: _.string,
      currentSlide: _.number.isRequired,
      disableAnimation: _.bool,
      disableKeyboard: _.bool,
      dragEnabled: _.bool.isRequired,
      dragStep: _.number,
      hasMasterSpinner: _.bool.isRequired,
      infinite: _.bool,
      interval: _.number.isRequired,
      isPageScrollLocked: _.bool.isRequired,
      isPlaying: _.bool.isRequired,
      lockOnWindowScroll: _.bool.isRequired,
      preventVerticalScrollOnTouch: _.bool,
      horizontalPixelThreshold: _.number,
      verticalPixelThreshold: _.number,
      masterSpinnerFinished: _.bool.isRequired,
      moveThreshold: _.number,
      naturalSlideHeight: _.number.isRequired,
      naturalSlideWidth: _.number.isRequired,
      onMasterSpinner: _.func,
      orientation: _.orientation.isRequired,
      playDirection: _.direction.isRequired,
      privateUnDisableAnimation: _.bool,
      role: _.string,
      slideSize: _.number.isRequired,
      slideTraySize: _.number.isRequired,
      spinner: _.func,
      step: _.number.isRequired,
      style: _.object,
      totalSlides: _.number.isRequired,
      touchEnabled: _.bool.isRequired,
      trayProps: _.shape({
        className: _.string,
        onClickCapture: _.func,
        onMouseDown: _.func,
        onTouchCancel: _.func,
        onTouchEnd: _.func,
        onTouchMove: _.func,
        onTouchStart: _.func,
        ref: _.shape({}),
        style: _.string,
      }),
      trayTag: _.string,
      visibleSlides: _.number,
      isIntrinsicHeight: _.bool,
    }),
    _(_, `defaultProps`, {
      ariaLabel: `slider`,
      className: null,
      classNameAnimation: null,
      classNameTray: null,
      classNameTrayWrap: null,
      disableAnimation: !1,
      disableKeyboard: !1,
      dragStep: 1,
      infinite: !1,
      preventVerticalScrollOnTouch: !0,
      horizontalPixelThreshold: 15,
      verticalPixelThreshold: 10,
      moveThreshold: 0.1,
      onMasterSpinner: null,
      privateUnDisableAnimation: !1,
      role: `listbox`,
      spinner: null,
      style: {},
      trayProps: {},
      trayTag: `div`,
      visibleSlides: 1,
      isIntrinsicHeight: !1,
    }),
    _),
    function (_) {
      return {
        currentSlide: _.currentSlide,
        disableAnimation: _.disableAnimation,
        privateUnDisableAnimation: _.privateUnDisableAnimation,
        disableKeyboard: _.disableKeyboard,
        dragEnabled: _.dragEnabled,
        hasMasterSpinner: _.hasMasterSpinner,
        infinite: _.infinite,
        interval: _.interval,
        isPageScrollLocked: _.isPageScrollLocked,
        isPlaying: _.isPlaying,
        lockOnWindowScroll: _.lockOnWindowScroll,
        preventingVerticalScroll: _.preventingVerticalScroll,
        masterSpinnerFinished: _.masterSpinnerFinished,
        naturalSlideHeight: _.naturalSlideHeight,
        naturalSlideWidth: _.naturalSlideWidth,
        orientation: _.orientation,
        playDirection: _.playDirection,
        slideSize: _.slideSize,
        slideTraySize: _.slideTraySize,
        step: _.step,
        dragStep: _.dragStep,
        totalSlides: _.totalSlides,
        touchEnabled: _.touchEnabled,
        visibleSlides: _.visibleSlides,
        isIntrinsicHeight: _.isIntrinsicHeight,
      };
    },
  ),
  _ = `HRbFcf6y6hE-`,
  _ = `-ZUk3xT7ZlY-`,
  _ = `KLUTL0g4Wbo-`,
  _ = `glnkf1Fqlvc-`,
  _ = `loez15u80yI-`,
  _ = `bTrailerCarouselAutoAdvance`,
  _ = 1e4;
function _(_) {
  let {
      className: _,
      currentItemKey: _,
      autoAdvanceMsec: _,
      fnAdvance: _,
      enabled: _,
      pauseReason: _,
      countdownToken: _ = `#SaleTrailerCarousel_NextGameInSeconds`,
    } = _,
    _ = _.useMemo(() => {
      let _ = _(_);
      return !_ || _?.toLowerCase() === `true`;
    }, []),
    [_, _] = _.useState(_),
    _ = _ === void 0 ? _ : _,
    [_, _] = _.useState(_),
    _ = _ !== void 0,
    _ = _(_);
  _(
    () => {
      let _ = _ - 30;
      _ <= 0 ? (_(), _(_)) : _(Math.max(_, 0));
    },
    30,
    [_],
    _ && _ && !_ && _ > 0 && _ > 0,
  );
  let _ = _.useCallback(
    (_) => {
      _(_, String(_), 3650), _(_), _(_);
    },
    [_],
  );
  return (
    _.useEffect(() => {
      _(_);
    }, [_, _]),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _(_, (!_ || !_) && `X8q-iPdWKKw-`, _ && `_3E-10Et-w2o-`),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: !_ || !_ ? _(_, Math.ceil(_ / 1e3)) : _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              style: {
                "--auto-advance-ratio": `${100 - (_ / _) * 100}%`,
              },
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _(_),
          children: (0, _.jsx)(_, {
            className: _,
            controlled: !0,
            checked: _,
            label: _(`#SaleTrailerCarousel_AutoAdvanceEnabled`),
            onChange: _,
          }),
        }),
      ],
    })
  );
}
function _(_) {
  switch (_) {
    case 4:
      return _(`#SaleTrailerCarousel_AutoAdvanceVideoPaused`);
    case 3:
    case 5:
      return _(`#SaleTrailerCarousel_AutoAdvanceHover`);
  }
}
function _() {
  let [_, _] = _.useState(!1),
    [_, _] = _.useState(!1);
  _.useEffect(() => {
    let _ = () => _(document.hidden);
    return (
      document.addEventListener(`visibilitychange`, _),
      () => document.removeEventListener(`visibilitychange`, _)
    );
  }, []);
  let _ = _.useCallback((_) => _(!_.isIntersecting), []),
    _ = _.useMemo(
      () => ({
        threshold: 0.5,
      }),
      [],
    );
  return {
    bTabHidden: _,
    bOffscreen: _,
    refIntersection: _(_, _),
  };
}
var _ = `_--jO3lLROzo-`,
  _ = `DyOrE-LFQDQ-`,
  _ = `_538FwVlPb0E-`,
  _ = `bYSGIkS6GvM-`,
  _ = `eROFrrQM5Ew-`,
  _ = `bKYQmUBfOtY-`,
  _ = `Udbg33O1Kjs-`,
  _ = `ux4DPxJOkL8-`,
  _ = `-LFP33ltPBY-`,
  _ = `_4uWRflget-8-`,
  _ = `IxjyotVSZiA-`,
  _ = `cD9zjaueru0-`,
  _ = `_6KPsWUgnjok-`,
  _ = `RiCuzM-PsMk-`,
  _ = `_1MsO62M-piw-`,
  _ = 0.6;
function _(_, _, _) {
  let _ = _.useRef(_);
  _.current = _;
  let _ = !!_;
  _.useEffect(() => {
    let _ = _.current;
    if (!_ || !_ || typeof IntersectionObserver > `u`) return;
    let _ = Array.from(_.children);
    if (!_.length) return;
    let _ = Math.round(_.scrollLeft / _.clientWidth),
      _ = new IntersectionObserver(
        (_) => {
          for (let _ of _) {
            if (!_.isIntersecting || _.intersectionRatio < _) continue;
            let _ = _.indexOf(_.target);
            _ < 0 || _ === _ || ((_ = _), _.current?.(_));
          }
        },
        {
          root: _,
          threshold: _,
        },
      );
    for (let _ of _) _.observe(_);
    return () => _.disconnect();
  }, [_, _, _]);
}
function _(_) {
  let { nSlideIndex: _, nStartingSlideIndex: _, ref: _, children: _ } = _;
  return _ === void 0
    ? _
    : (0, _.jsx)(`div`, {
        ref: _ === _ ? _ : void 0,
        children: _,
      });
}
function _(_) {
  let {
      padded: _,
      gap: _,
      children: _,
      bLazyRenderChildren: _,
      lazyRenderPlaceholderWidth: _,
      lazyRenderPlaceholderHeight: _,
      startingSlide: _,
      onSlide: _,
    } = _,
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _();
  _(_, _, _.Children.count(_)),
    _.useLayoutEffect(() => {
      _.current &&
        _.current &&
        (_.current.scrollLeft +=
          _.current.getBoundingClientRect().left -
          _.current.getBoundingClientRect().left);
    }, [_]);
  let _ = _.Children.map(_, (_, _) =>
      _
        ? (0, _.jsx)(_, {
            rootMargin: `0px 50% 0px 50%`,
            horizontal: !0,
            placeholderWidth: _ ?? 1,
            placeholderHeight: 1,
            holdGamepadFocus: _,
            children: (0, _.jsx)(_, {
              nSlideIndex: _,
              nStartingSlideIndex: _,
              ref: _,
              children: _,
            }),
          })
        : (0, _.jsx)(_, {
            nSlideIndex: _,
            nStartingSlideIndex: _,
            ref: _,
            children: _,
          }),
    ),
    _ = (0, _.jsx)(_, {
      "flow-children": `row`,
      style: {
        gap: _ ? _ + `px` : void 0,
      },
      className: _(
        {
          SaleSectionCarouselPadding: _,
        },
        `ScrollSnapCarousel`,
        `SaleSectionCarousel`,
        _,
        _.className,
      ),
      ref: _,
      children: _,
    });
  return _
    ? (0, _.jsx)(_, {
        rootMargin: `50% 0px 50% 0px`,
        horizontal: !1,
        placeholderWidth: 1,
        placeholderHeight: _ ?? 1,
        children: _,
      })
    : _;
}
var _ = _(_()),
  _ = _(
    class extends _.Component {
      render() {
        let { showArrows: _, arrowFill: _, arrowStyle: _ } = this.props,
          _ = this.props.visibleSlides,
          _ = this.props.totalSlides,
          _ = this.props.currentSlide;
        if (_ >= _) return null;
        let _ = (100 * _) / _,
          _ = 100 * (1 - Math.min(_ + _, _) / _),
          _ = _ + (50 * _) / _,
          _ = 100 - _;
        return (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                className: _(`iqx2UWGqqKU-`, `oKffwUnx6co-`, `_--jO3lLROzo-`),
                children: (0, _.jsx)(_, {
                  arrowFill: _,
                  arrowStyle: _,
                  direction: `left`,
                }),
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  style: {
                    insetInlineStart: _ + `%`,
                    insetInlineEnd: _ + `%`,
                  },
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  style: {
                    insetInlineStart: `0%`,
                    width: _ + `%`,
                  },
                  children: (0, _.jsx)(_, {
                    className: _(_, _),
                    style: {
                      color: `red`,
                    },
                    children: (0, _.jsx)(`div`, {}),
                  }),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  style: {
                    insetInlineEnd: `0%`,
                    width: _ + `%`,
                  },
                  children: (0, _.jsx)(_, {
                    className: _(_, _),
                    children: (0, _.jsx)(`div`, {}),
                  }),
                }),
              ],
            }),
            _ &&
              (0, _.jsx)(_, {
                className: _(`iqx2UWGqqKU-`, `O2Vg9rmPwSE-`, `_--jO3lLROzo-`),
                children: (0, _.jsx)(_, {
                  arrowFill: _,
                  arrowStyle: _,
                  direction: `right`,
                }),
              }),
          ],
        });
      }
    },
    (_) => ({
      currentSlide: _.currentSlide,
      totalSlides: _.totalSlides,
      visibleSlides: _.visibleSlides,
    }),
  );
function _(_) {
  let { bForceSimpleCarousel: _, screenIsWide: _, children: _ } = _,
    _ = _();
  return (_ || _) && !_
    ? (0, _.jsx)(_, {
        ..._,
        children: _,
      })
    : (0, _.jsx)(_, {
        ..._,
        children: _,
      });
}
function _(_) {
  let _ = _(),
    [_, _] = _.useState(!1),
    { bTabHidden: _, bOffscreen: _, refIntersection: _ } = _(),
    _ = () => _.Children.count(_.children),
    _ = () => Math.min(_(), _.visibleElements),
    _ = () =>
      _.Children.map(_.children, (_, _) => {
        let _ = _.bLazyRenderChildren
          ? (0, _.jsx)(_, {
              rootMargin: `0px 100% 0px 100%`,
              horizontal: !0,
              placeholderWidth: _.lazyRenderPlaceholderWidth ?? 1,
              placeholderHeight: _.lazyRenderPlaceholderHeight ?? 1,
              holdGamepadFocus: _,
              children: _,
            })
          : _;
        return (0, _.jsx)(
          _,
          {
            className: _,
            index: _,
            role: `listitem`,
            "aria-label": void 0,
            children: _,
          },
          `slide_` + _,
        );
      }),
    _ = _(),
    _ = _();
  if (!_ || !_) return null;
  let _ = _ < _,
    _ = _.hideArrows || !_,
    _ = !_ || _.hidePips,
    _ = !!_.bAutoAdvance && _ && !_,
    _;
  _ && !_() ? (_ = 5) : _ ? (_ = 1) : _ && (_ = 2);
  let _ = 4 / 3,
    _ = !0;
  _.slideAspectRatio && ((_ = _.slideAspectRatio), (_ = !1));
  let _ = `items_in_row_${_.visibleElements}`;
  return (0, _.jsx)(_, {
    "flow-children": `row`,
    className: _(_, _.className, _),
    navKey: _.navKey,
    ref: _,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: (0, _.jsxs)(_, {
      visibleSlides: _.visibleElements,
      totalSlides: _(),
      naturalSlideWidth: 100 * _,
      naturalSlideHeight: 100,
      step: _.visibleElements,
      infinite: !_.disableEdgeWrap,
      isIntrinsicHeight: _,
      dragEnabled: !1,
      touchEnabled: !1,
      lockOnWindowScroll: !0,
      orientation: `horizontal`,
      disableKeyboard: !0,
      currentSlide: _.startingSlide,
      children: [
        (0, _.jsx)(_, {
          bHideArrows: _,
          onSlide: _.onSlide,
          arrowFill: _.arrowFill,
          arrowStyle: _.arrowStyle,
          children: _(),
        }),
        !_ &&
          (_.useTestScrollbar
            ? (0, _.jsx)(_, {
                showArrows: _,
                carouselStore: null,
              })
            : (0, _.jsx)(`div`, {
                className: (0, _.default)({
                  "I8j65FBXdOY-": !0,
                  "uhUggqIYXBc-": _.className?.includes(`template-carousel`),
                }),
                children: (0, _.jsx)(_, {
                  ..._,
                  nPageSize: _,
                  children: _.children,
                }),
              })),
        _ &&
          (0, _.jsx)(_, {
            pauseReason: _,
          }),
      ],
    }),
  });
}
function _(_) {
  let { nPageSize: _ } = _,
    _ = _.useContext(_),
    [_, _] = _.useState(_.state.currentSlide);
  return (
    _.useEffect(
      () =>
        _.subscribe(() => {
          _(_.state.currentSlide);
        }),
      [_],
    ),
    (0, _.jsx)(_.Fragment, {
      children: _.Children.map(_.children, (_, _) => {
        if (_ % _ !== 0) return null;
        let _ = _ >= _ && _ < _ + _;
        return (0, _.jsx)(
          _,
          {
            slide: _,
            className: _,
            children: (0, _.jsx)(_, {
              ..._,
              bIsActive: _,
            }),
          },
          _,
        );
      }),
    })
  );
}
function _(_) {
  _.current &&= (window.clearTimeout(_.current), null);
}
function _(_) {
  let { pauseReason: _ } = _,
    _ = _.useContext(_),
    [_, _] = _.useState(_.state.currentSlide),
    [_, _] = _.useState(!0),
    _ = _.useRef(null),
    _ = _.useRef(_.state.currentSlide);
  _.useEffect(() => {
    let _ = () => {
      let _ = _.state.currentSlide;
      _ !== _.current &&
        ((_.current = _),
        _(_),
        _.current === _ ? (_.current = null) : _.current === null && _(!1));
    };
    return _.subscribe(_), () => _.unsubscribe(_);
  }, [_]);
  let _ = _.useCallback(() => {
    let { currentSlide: _, visibleSlides: _, totalSlides: _ } = _.state,
      _ = 0;
    _ + _ < _ && (_ = Math.min(_ + _, _ - _)),
      _ !== _ &&
        ((_.current = _),
        _.setStoreState({
          currentSlide: _,
        }));
  }, [_]);
  return (0, _.jsx)(_, {
    className: _,
    enabled: _,
    currentItemKey: _,
    autoAdvanceMsec: _,
    fnAdvance: _,
    pauseReason: _,
    countdownToken: `#Carousel_AutoAdvanceNextInSeconds`,
  });
}
function _(_) {
  return _.totalSlides ? (200 * _.currentSlide) / _.totalSlides + `%` : `0%`;
}
function _(_) {
  let {
      bHideArrows: _,
      children: _,
      onSlide: _,
      arrowFill: _,
      arrowStyle: _,
    } = _,
    _ = _.useContext(_),
    _ = _.useRef(_.state.currentSlide),
    [_, _] = _.useState(null),
    [_, _] = _.useState(_(_.state)),
    _ = _.useRef(null);
  _.useEffect(() => {
    let _ = () => {
      let _ = _.current,
        _ = _.state.currentSlide;
      _(_(_.state)),
        _ && _(_),
        _(_ > _ ? `Right` : _ < _ ? `Left` : null),
        _(_),
        (_.current = window.setTimeout(() => {
          _.current && (_(null), _(_));
        }, 1e3)),
        (_.current = _);
    };
    return (
      _.subscribe(_),
      () => {
        _.unsubscribe(_), _(_);
      }
    );
  }, [_]);
  let _ = !!_ && `CarouselSliding` + _;
  return (0, _.jsxs)(`div`, {
    className: _(_, `SliderBody`, _),
    style: {
      "--carousel-rtl-tray-offset": _,
    },
    children: [
      !_ &&
        (0, _.jsx)(_, {
          className: _(
            `_6KbJ1ZwTIeY-`,
            `oKffwUnx6co-`,
            `_--jO3lLROzo-`,
            `CarouselBtnLeft`,
          ),
          "aria-label": _(`#Carousel_Prev`),
          children: (0, _.jsx)(_, {
            arrowFill: _,
            arrowStyle: _,
            direction: `left`,
          }),
        }),
      (0, _.jsx)(_, {
        className: _.GetScrollableClassname(),
        classNameTray: _,
        classNameAnimation: _,
        role: `list`,
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
      !_ &&
        (0, _.jsx)(_, {
          className: _(
            `_6KbJ1ZwTIeY-`,
            `O2Vg9rmPwSE-`,
            `_--jO3lLROzo-`,
            `CarouselBtnRight`,
          ),
          "aria-label": _(`#Carousel_Next`),
          children: (0, _.jsx)(_, {
            arrowFill: _,
            arrowStyle: _,
            direction: `right`,
          }),
        }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _(940),
    _ = String(_(_.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, _.jsx)(_, {
    hideArrows: !_,
    hidePips: _,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: _,
    bAutoAdvance: _,
    className: _,
    children: _.children,
  });
}
var _ = `FQV2hlT8BYs-`;
function _(_) {
  let { strURL: _, children: _ } = _;
  return (typeof _ == `string` ? !_(_) : _.some((_) => !_(_)))
    ? (0, _.jsx)(_, {
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _(_) {
  let { children: _ } = _;
  return _()
    ? (0, _.jsx)(_.Fragment, {
        children: _,
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: _(
          `#Image_Externally_Hosted_Hidden`,
          (0, _.jsx)(`a`, {
            href: _.STORE_BASE_URL + `account/cookiepreferences`,
          }),
        ),
      });
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([
      [
        `url`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `dynamiclink`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `h1`,
        {
          Constructor: _(_, _),
          autocloses: !1,
          skipFollowingNewline: !0,
        },
      ],
      [
        `h2`,
        {
          Constructor: _(_, _),
          autocloses: !1,
          skipFollowingNewline: !0,
        },
      ],
      [
        `h3`,
        {
          Constructor: _(_, _),
          autocloses: !1,
          skipFollowingNewline: !0,
        },
      ],
      [
        `quote`,
        {
          Constructor: _(_, _),
          autocloses: !1,
        },
      ],
      [
        `list`,
        {
          Constructor: _,
          autocloses: !1,
          skipInternalNewline: !0,
        },
      ],
      [
        `olist`,
        {
          Constructor: _,
          autocloses: !1,
          skipInternalNewline: !0,
        },
      ],
      [
        `*`,
        {
          Constructor: _,
          autocloses: !0,
          skipInternalNewline: !0,
        },
      ],
      [
        `p`,
        {
          Constructor: _,
          autocloses: !1,
          skipFollowingNewline: !0,
        },
      ],
      [
        `img`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `previewyoutube`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `looping_media`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `video`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `youtubeorvideo`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `trailer`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `speaker`,
        {
          Constructor: _,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [
        `docimg`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `carousel`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
    ])),
    _
  );
}
function _(_) {
  let { showErrorInfo: _, event: _ } = _.context,
    _ = _(_.args, `src`) || _.children?.toString();
  (_ ||= _(_.args)), (_ = _(_ ?? ``) || void 0);
  let _ = _(_.args, `style`) === `inline`,
    _ = _(_, _.language, _?.rtime32_last_modified);
  if (_ == null) return null;
  if (typeof _ == `string`) {
    _ = _;
    let _;
    return (
      (_ = !_(_)),
      _?.BHasTag(`auto_rssfeed`) && (_ = !1),
      _
        ? (0, _.jsx)(_, {
            className: _({
              [_]: _,
            }),
            src: _,
            crossOrigin: _ ? `anonymous` : void 0,
          })
        : ((_ = _(_)),
          (0, _.jsx)(_, {
            strURL: _,
            children: (0, _.jsx)(_, {
              className: _({
                [_]: _,
              }),
              src: _,
              crossOrigin: _ ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, _.jsx)(_, {
    strURL: _,
    children: (0, _.jsx)(_, {
      rgSources: _,
    }),
  });
}
function _(_) {
  let _ = _(_.args);
  if (_ == null || _ == null || _.length == 0) return ``;
  let _ = _.children?.toString(),
    _ = [];
  return (
    _.push(
      `${_.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${_.LANGUAGE}/${_}`,
    ),
    _.LANGUAGE != `english` &&
      _.push(`${_.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${_}`),
    (0, _.jsx)(_, {
      rgSources: _,
      alt: _,
    })
  );
}
function _(_) {
  let _ = _(_.args, `appid`, _.context.event?.appid ?? 0),
    _ = _(_.args, `trailerid`, 0),
    _ = _(_.args, `style`)?.toLocaleLowerCase() ?? _.k_TrailerAsFull;
  _ = Object.values(_).includes(_) ? _ : _.k_TrailerAsFull;
  let _ = _(_.args.color, `black`),
    _ = _(_.args.bgcolor, `white`),
    _ = _(_.args);
  return (0, _.jsx)(_, {
    appid: _,
    trailerBaseID: _,
    bIsPreviewMode: _.context.showErrorInfo,
    embedStyle: _,
    color: _,
    bgcolor: _,
    subtitles: _.rgVideoTracks,
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.args, `name`),
    _ = _(_.args, `title`),
    _ = _(_.args, `company`),
    _ = _(_.args, `photo`);
  return _.context.bShowShortSpeakerInfo
    ? (0, _.jsx)(_, {
        name: _,
        title: _,
        company: _,
        photo: _,
        bio: _.children,
      })
    : (0, _.jsx)(_, {
        name: _,
        title: _,
        company: _,
        photo: _,
        bio: _.children,
      });
}
function _(_, _, _) {
  let _ = _(_, _);
  return _ === void 0 || _ == null ? _ : Number.parseInt(_);
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([...Array.from(_.entries()), ...Array.from(_().entries())])),
    _
  );
}
var _ = _.createContext(null);
function _() {
  return _.useContext(_) ?? _();
}
function _(_) {
  let _ = _(),
    _ = _.useMemo(
      () =>
        new Map([
          ...Array.from(_.entries()),
          ...Array.from(_.dictionary.entries()),
        ]),
      [_, _.dictionary],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _(_) {
  let {
      text: _,
      languageOverride: _,
      event: _,
      showErrorInfo: _,
      bShowShortSpeakerInfo: _,
    } = _,
    _ = _(),
    _ = _.useCallback(
      (_) =>
        new _(
          new _(
            new _(new _(new _()), _, _, {
              event: _,
            }),
          ),
          _,
        ),
      [_, _],
    ),
    _ = _();
  return _.useMemo(() => new _(_, _, _ || _.LANGUAGE), [_, _, _]).ParseBBCode(
    _,
    {
      showErrorInfo: _,
      event: _,
      bShowShortSpeakerInfo: _,
      bbcode: _,
    },
  );
}
function _(_) {
  let {
      strTag: _,
      args: _,
      rawargs: _,
      language: _ = _(_.LANGUAGE),
      children: _,
      ..._
    } = _,
    _ = _().get(_);
  return _
    ? (0, _.jsx)(_.Constructor, {
        context: _,
        tagname: _,
        args: _,
        language: _,
        rawargs: _,
        children: _,
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [`[${_}]`, _, `[/${_}]`],
      });
}
var _ = (function (_) {
    return (
      (_.k_ECutArrowStyle = `single`),
      (_.k_EDoubleArrowStyle = `double`),
      (_.k_EThickChevron = `chevron`),
      (_.k_EFilledArrow = `filled`),
      (_.k_EPointyArrow = `pointy`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_.k_EPillCrumb = `pill`),
      (_.k_ECircularCrumb = `circle`),
      (_.k_ESquareCrumb = `square`),
      _
    );
  })({});
async function _(_, _) {
  let { rgDefIDs: _, strCategory: _, itemClass: _ } = _,
    _ = await _.QueryRewardItems(_, {
      definitionids: _,
      community_item_classes: _ ? [_] : void 0,
      filter_match_any_category_tags: _ ? [_] : void 0,
    });
  if (!_.BSuccess())
    throw Error(`LoyaltyRewards.QueryRewardItems answered ` + _.GetEResult());
  return _.Body().toObject().definitions ?? [];
}
var _;
function _() {
  let _ = _();
  return _
    ? _.GetAnonymousServiceTransport()
    : ((_ ||= _(new _(_.WEBAPI_BASE_URL))), _.GetAnonymousServiceTransport());
}
async function _(_) {
  return _(_(), _);
}
var _ = 36e5;
function _(_) {
  return [`LoyaltyRewardDef`, _];
}
function _(_, _) {
  return [`LoyaltyRewardDefsByCategoryAndClass`, _, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _({
          rgDefIDs: [_],
        }),
        _ = _.length == 1 ? _[0] : void 0;
      if (!_)
        throw Error(
          `Asked for point shop item ${_} and got ${_.length} items back, wanted exactly one.`,
        );
      return _;
    },
    enabled: _ > 0,
    staleTime: _,
    retry: !1,
  };
}
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () =>
      _({
        strCategory: _,
        itemClass: _,
      }),
    enabled: !!(_ && _),
    staleTime: _,
    retry: !1,
  };
}
function _(_) {
  let { data: _ } = _(_(_));
  return _;
}
function _(_, _) {
  let _ = _(),
    { data: _ } = _(_(_, _));
  return (
    (0, _.useEffect)(() => {
      _?.forEach((_) => {
        _.defid !== void 0 && _.setQueryData(_(_.defid), _);
      });
    }, [_, _]),
    _
  );
}
var _ = 1778623200;
function _(_, _) {
  let _ = !1;
  return (
    _ && _.GetEventType() == 36
      ? (_ = !0)
      : _ && _ && _.is_creator_home && (_ = _(_, _)),
    _
  );
}
function _(_, _) {
  return !!_ && !!_.is_creator_home && (_.createTime ?? 0) > _;
}
function _(_) {
  return _(_, _(_.clanSteamID.GetAccountID()).data);
}
function _(_) {
  let { arrowFill: _, arrowStyle: _, direction: _ } = _;
  switch (_) {
    default:
    case _.k_ECutArrowStyle: {
      let _ = _ == `right` ? 0 : 180;
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        angle: _,
      });
    }
    case _.k_EDoubleArrowStyle: {
      let _ = _ == `right` ? 180 : 0;
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        angle: _,
      });
    }
    case _.k_EThickChevron: {
      let _ = _ == `right` ? 0 : 180;
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        angle: _,
      });
    }
    case _.k_EFilledArrow: {
      let _ = _ == `right` ? 90 : 270;
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        angle: _,
      });
    }
    case _.k_EPointyArrow:
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        direction: _ || `left`,
      });
  }
}
function _(_) {
  let {
      bIsActive: _,
      breadcrumbActiveColor: _,
      breadcrumbColor: _,
      breadcrumbStyle: _,
    } = _,
    _ = _ ? _ || `#FFFFFF` : _ || `#606974`;
  switch (_) {
    default:
    case _.k_EPillCrumb:
      return (0, _.jsx)(_, {
        fill: _,
        role: `presentation`,
      });
    case _.k_ECircularCrumb:
      return (0, _.jsx)(_, {
        fill: _,
        role: `presentation`,
      });
    case _.k_ESquareCrumb:
      return (0, _.jsx)(_, {
        fill: _,
        role: `presentation`,
      });
  }
}
export {
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
};
