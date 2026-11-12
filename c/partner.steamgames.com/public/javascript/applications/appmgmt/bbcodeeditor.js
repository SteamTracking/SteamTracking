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
} from "./chunk~de7f2df91c.js";
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
} from "./chunk~25a6634263.js";
import { _, _, _, _ } from "./chunk~b4171a8747.js";
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
} from "./chunk~1fa4b8f2ff.js";
import { _, _, _ } from "./chunk~0a99e05c44.js";
import { _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _, _ } from "./chunk~9a06851bec.js";
import { _, _, _, _ } from "./chunk~44f252525d.js";
import { _ } from "./chunk~f8b6a4beb3.js";
import { _ } from "./chunk~8fb30ea08b.js";
import { _ } from "./chunk~ede3e357a2.js";
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
} from "./chunk~e70aabe4d7.js";
import { _, _, _, _, _ } from "./chunk~a825a84845.js";
import { _ } from "./chunk~b390ee0f78.js";
import { _ } from "./chunk~43407e91ef.js";
import { _, _, _, _, _ } from "./chunk~cbbb6ae37c.js";
import { _ } from "./chunk~e7f5a67b58.js";
import { _ } from "./chunk~8681f5c764.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~92931c6310.js";
import { _ } from "./chunk~c55709d290.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~e867464c75.js";
import { _, _, _ } from "./chunk~8ceeb46076.js";
import { _ } from "./chunk~2f8c67b4de.js";
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
} from "./chunk~05a38bc848.js";
import { _, _ } from "./chunk~af1574091f.js";
import { _, _, _, _, _, _, _ } from "./chunk~2bee5a7d08.js";
import "./chunk~a6b9ae1345.js";
import "./chunk~ca0c999570.js";
import { _ } from "./chunk~f0141d9521.js";
import { _ } from "./chunk~93fc7377c2.js";
import { _, _, _, _, _ } from "./chunk~9658266888.js";
import { _, _, _ } from "./chunk~b980797e15.js";
import { _, _ } from "./chunk~70c16cc80c.js";
import { _ } from "./chunk~3ee5188744.js";
import "./chunk~f25232ab1e.js";
import { _ } from "./chunk~d382bdf2cf.js";
import "./chunk~6f51836c6e.js";
import { _, _, _, _, _, _ } from "./chunk~d6693aba87.js";
var _ = _(_(), 1);
function _() {
  return window.innerWidth ?? 1920;
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
var _ = _();
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
var _ = _(_(), 1),
  _ = class extends _ {
    m_LinkFilter = _;
    m_parentNode = void 0;
    m_mapHostToComponent;
    m_globalStoreLink;
    constructor(_, _, _, _) {
      (super(_),
        (this.m_parentNode = _),
        (this.m_mapHostToComponent = _),
        (this.m_globalStoreLink = _));
    }
    AppendText(_, _ = !1) {
      let _ = _;
      if (
        (_ || this.m_parentNode?.tag == `*`) &&
        (this.m_parentNode == null || this.m_parentNode.tag != `img`)
      ) {
        let _ = this.m_LinkFilter.exec(_);
        for (; _;) {
          if (_.index > 0) {
            let _ = _.input.substring(0, _.index);
            super.AppendText(_, _);
          }
          let _ = _[0],
            _ = !1;
          if (this.m_mapHostToComponent) {
            for (let _ = 0; _ < this.m_mapHostToComponent.length; ++_)
              if (this.m_mapHostToComponent[_].urlRegExp.exec(_)) {
                ((_ = !0),
                  super.AppendNode(
                    this.m_mapHostToComponent[_].fnBBComponent(
                      _,
                      this.m_globalStoreLink,
                    ),
                  ));
                break;
              }
          }
          (_ || super.AppendNode(_(_)),
            (_ = _.input.substring(_.index + _.length)),
            (_ = this.m_LinkFilter.exec(_)));
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
        for (; _;) {
          if (_.index > 0) {
            let _ = _.input.substring(0, _.index);
            super.AppendText(_, _);
          }
          let _ = _[1];
          (super.AppendNode(
            _.createElement(
              _,
              {
                emoticon: _,
              },
              [],
            ),
          ),
            (_ = _.input.substring(_.index + _.length + 2)),
            (_ = this.m_EmoteRegex.exec(_)));
        }
      }
      _.length > 0 && super.AppendText(_, _);
    }
  },
  _ = class extends _ {
    m_parentNode = void 0;
    constructor(_, _) {
      (super(_), (this.m_parentNode = _));
    }
    AppendText(_, _ = !1) {
      let _ = _;
      (this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !_(_) &&
        (_ = _(_)),
        super.AppendText(_, _));
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
var _ = _.createContext({
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
  switch ((_(window.location.href), _.GetEventType(), _.appid, _)) {
    case `view`:
      return !1;
    case `communityview`:
    case `edit`:
    case `editBroadcast`:
    case `publish`:
    case `migrate`:
    case `preview`:
    case `previewsale`:
    case `community_announcehub`:
      return !1;
    case `admin`:
      return !1;
    case `websitehub`:
      return !1;
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
      return (_(!1, `Unknown route specified for link: ` + _), !1);
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
  _ === `view` ? (_ = `storeview`) : _ === `websitehub` && (_ = `newshub`);
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
      return (_(!1, `Unknown route specified for link`), ``);
  }
}
function _(_, _, _) {
  return _(_, _, _ === `forceAbsolute` || !_(_, _) ? `absolute` : `relative`);
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
      if (!_ && _.length == 0) {
        let _ = await _.ensureQueryData(_(_, _, _));
        _ && _.push(_);
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
  (_.clanAccountID && _.set(`clan_accountid`, String(_.clanAccountID)),
    _.appid && _.set(`appid`, String(_.appid)),
    _.eventGID && _.set(`event_gid`, _.eventGID),
    _.announcementGID && _.set(`announcement_gid`, _.announcementGID),
    _.set(`lang_list`, _(_)),
    _.set(`last_modified_time`, `0`),
    _.set(`origin`, window.location.origin));
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
  (_ != -1 && _ + 1 < _.length && (_ = _.substring(_ + 1, _)),
    _ && _ && (_ = _ + _));
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
      (_(this), (this.m_persistState = _ || {}));
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
      (this.Stop(),
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
        this.m_player.SetTimeoutAfterFailedDownload(!1));
      let _ =
        this.m_persistState.m_bAudioMuted !== void 0 &&
        this.m_persistState.m_bAudioMuted;
      this.SetMute(_, !0);
      let _ =
        this.m_persistState.m_nPlayerVolume === void 0
          ? 1
          : this.m_persistState.m_nPlayerVolume;
      (this.SetVolume(_, !0),
        this.m_player.SetMuteOnAutoplayBlocked(this.m_bMuteWhenAutoplayBlocked),
        this.m_player.PlayMPD(_, _, _));
    }
    Stop() {
      (this.SendStats(),
        this.m_listeners.Unregister(),
        this.m_player && this.m_player.Close(),
        (this.m_elVideo = null),
        (this.m_player = null),
        (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_nVideoStartTime = 0),
        (this.m_nVideoDuration = 0),
        (this.m_nBufferedEndTime = 0));
    }
    IsInitialized() {
      return !!this.m_player && !!this.m_elVideo;
    }
    OnVideoPlaying() {
      let _ = this.m_bPaused;
      ((this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        _ && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!0));
    }
    OnVideoPause() {
      let _ = this.m_bPaused;
      ((this.m_bPaused = !0),
        !_ && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!1));
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
      (console.log(`video download failed`, _.detail),
        (this.m_eFailureReason = _.detail || _.PlaybackError));
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
      ((this.m_bMuteWhenAutoplayBlocked = _),
        this.IsInitialized() && this.m_player.SetMuteOnAutoplayBlocked(_));
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
(_([_], _.prototype, `m_bPaused`, void 0),
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
  _([_], _.prototype, `SendStats`, null));
function _(_, _, _, _, _, _, _) {
  let _ = _(),
    _ = (0, _.useRef)(void 0);
  _.current ||= new _(_);
  let _ = _(
    (_) => {
      if (_) return (_.current.Start(_, _, _, _, _), () => _.current.Stop());
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
      (_.current.SetOnMuteChangeCallback(_), _ && _(_.current.GetMuted()));
    }, [_]),
    [_, _.current]
  );
}
function _(_, _) {
  ((_ = !!_),
    (0, _.useEffect)(() => {
      _.SetMuteWhenAutoplayBlocked(_);
    }, [_, _]));
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
  (_.append(`stats`, _), navigator.sendBeacon(_, _));
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
  (_(_ == `theater`), (_ = !!_), (_ = !!_));
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
        (_ &&
          (_ != `fullscreen` && _(_) && _(_), _ == `fullscreen` && _(_, !!_)),
          _(_) &&
            (_ != `theater` && _.open && _.close(),
            _ == `theater` && _.showModal()),
          _(_) &&
            (_ != `theater` && _.matches(`:popover-open`) && _.hidePopover(),
            _ == `theater` && _.showPopover()),
          _(_));
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
        (_.removeEventListener(`transitionstart`, _),
          _.removeEventListener(`transitionend`, _),
          _.removeEventListener(`transitioncancel`, _));
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
  return ((0, _.useEffect)(() => (_(!0), () => _(!1)), [_]), _.m_refMenuLayer);
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
  (_(_),
    _(
      _,
      (0, _.useCallback)(
        (_) => {
          ((_.current = _), _(_));
        },
        [_, _],
      ),
    ),
    _(
      _,
      (0, _.useCallback)(() => {
        _(_);
      }, [_]),
    ));
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
          ((_.current = void 0), _.currentTarget == _ && _(_(_)));
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
  for (; _ && _ != _;) {
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
        (_.currentTarget.releasePointerCapture(_.pointerId), (_.current = _));
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
        ((_.current &&= (window.clearTimeout(_.current), void 0)),
          _(_),
          _ && _ != 0 && (_.current = window.setTimeout(() => _(!1), _)));
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
    ((_.current = !1), (!_ || _) && _(_));
  }, [_, _, _]);
}
function _(_, _) {
  let _ = (0, _.useRef)(!0),
    _ = _(() => _.GetMuted());
  (0, _.useEffect)(() => {
    let _ = _.current;
    ((_.current = !1), !_ && _());
  }, [_, _, _]);
}
function _(_) {
  let [_, _] = _(() => [_.GetMuted(), _.GetVolume()]);
  return [
    _,
    _,
    (0, _.useCallback)(
      (_) => {
        (_.SetMute(!1), _.SetVolume(_));
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
((_.arabic = () =>
  _(() => import(`./chunk~887e394140.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~2201201981.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~28b30e09e7.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~77b6c20b24.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~d795f54dde.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~643670c086.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~06a5836335.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~f9c42c7a4e.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~a7b70886d1.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~19848e9946.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~8f18399799.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~4da68bc22c.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~45c03f1db2.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~5a2b2fa217.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~2d5ec76417.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~585d858259.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~5c7e96bdf6.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~ae12dab9b4.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~8ac54f075b.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~4338c6b45b.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~141cce5df6.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~074001e151.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~06b0a8271b.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~5de27ffe8c.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~ece8cac71c.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~1990a11854.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~8d6fe09839.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~2aca2fbdb3.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~c0365501d6.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~5a394a471b.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~45e1e05001.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~7a8c9da555.js`), [], import.meta.url)));
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
          (_.SetVideoRepresentation(_), _());
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
      (_.m_fnSetAutoplayEnabled && _.m_fnSetAutoplayEnabled(!_), _());
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
      return (_ > 0 && _(_, _, 0), _);
    }, [_, _]),
    _ = [];
  for (let _ of _)
    (_.push(
      (0, _.jsx)(
        _,
        {
          onClick: () => {
            (_.SetCaptionRepresentation(_.m_eLanguage), _());
          },
          checked: !1,
          children: _.m_strLabel,
        },
        _.m_eLanguage,
      ),
    ),
      _.m_eLanguage == _ && _.push((0, _.jsx)(_, {})));
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
        (_.removeEventListener(`touchstart`, _),
          _.removeEventListener(`touchend`, _));
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
      (_.Seek(_ * _.GetTimelineDuration()),
        _.preventDefault(),
        _.stopPropagation());
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
          (_(_),
            _.current &&
              _ &&
              _(
                _
                  ? {
                      thumbnail: _.thumbnail,
                      nPlaybackSeconds: _.nPlaybackSeconds,
                    }
                  : null,
              ));
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
          ((_.current = _.currentTarget),
            _.current.setPointerCapture(_.pointerId),
            (document.body.style.userSelect = `none`));
          let _ = _(_, _.current.getBoundingClientRect(), _.clientX);
          (_(_),
            _ &&
              _(
                _
                  ? {
                      thumbnail: _.thumbnail,
                      nPlaybackSeconds: _.nPlaybackSeconds,
                    }
                  : null,
              ));
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
  ((0, _.useEffect)(() => {
    _ &&
      !_ &&
      _ == `` &&
      (_(`active`), (_.current = window.setTimeout(() => _(`complete`), 4e3)));
  }, [_, _, _, _, _]),
    (0, _.useEffect)(() => {
      _ && (_(`complete`), window.clearTimeout(_.current));
    }, [_]),
    (0, _.useEffect)(() => () => window.clearTimeout(_.current), []));
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
          ((_.current = 0), _.TogglePlayPause());
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
        (window.clearTimeout(_.current), (_.current = 0));
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
  return ((_ ||= _), [_, _]);
}
function _(_, _) {
  let [_, _] = _(),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!0),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      ((_.current = !1), (!_ || _) && _(!0, _ ? 0 : _));
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
        (!_.IsPaused() && _ && ((_.current = !0), _.Pause()),
          !_ && _.current && (_.Play(), (_.current = !1)),
          _.current && !_ && _.Seek(_.current.nPlaybackSeconds),
          (_.current = _),
          _(_));
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
      (_(), _());
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
      ((_.current = !1), (!_ || _) && _(!0, _ ? 0 : _));
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
        (_.Seek(_), _(), _.preventDefault(), _.stopPropagation());
      } else if (_.detail.button == _.TRIGGER_RIGHT && _) {
        let _ = Math.min(_.GetTimelineDuration(), _.GetPlaybackTime() + 10);
        (_.Seek(_), _(), _.preventDefault(), _.stopPropagation());
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
  ((_ ||= ``), (_ ||= 0));
  let [_, _] = _(_, _, _, _, _, _, _);
  (_(_, _), _(_, !!_));
  let [_, _] = _(_),
    _ = _(),
    _ = _ && _ ? _.refFullscreen : null,
    _ = _(_, _),
    _ = _(_, !!_),
    _ = _ ? void 0 : _,
    _ = {};
  _ && ((_.width = `${_.nWidth}px`), (_.height = `${_.nHeight}px`));
  let _ = _(() => _.IsBuffering());
  (_.useEffect(() => {
    _ || (_ && _());
  }, [_, _]),
    _.use(_.Ready()));
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
      ((_ = _.nWidth - _ < 2 ? _.nWidth : Math.ceil(_)),
        (_ = _.nHeight - _ < 2 ? _.nHeight : Math.ceil(_)));
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
        ((_.current = _), _());
      },
      [_, _],
    ),
  );
  let _ = (0, _.useCallback)(
    (_) => {
      ((_.current = {
        nWidth: _.contentRect.width,
        nHeight: _.contentRect.height,
      }),
        _());
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
  ((0, _.useEffect)(() => {
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
    }, [_, _]));
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
      (_.UserInputReceived(), _(!0));
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
var _ = `_6hGeFUDe5X0-`;
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
      (_?.unvailable_for_country_restriction &&
        _(_(`#TrailerPlayer_CouldNotLoad`, _, _)),
        _ &&
          !_ &&
          _(_(`#TrailerPlayer_CouldNotLoad`, _.appid, _.trailerBaseID)));
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
  ((_ ||= _(_.args)), (_ = _(_ ?? ``) || void 0));
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
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
              _: 1,
              _: _,
            },
            timestamp_updated: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            auditid_highwater: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.points || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_earned: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_spent: {
              _: 3,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Response_Summary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.amount || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            amount: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            ecurrency: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetPointsForSpend_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.points || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetPointsForSpend_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            expected_points_cost: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPoints_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_levels: {
              _: 2,
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForBadgeLevel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            communityitemid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsToUpgradeItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.communityitemid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            communityitemid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            bundle_community_item_ids: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPoints_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.customization_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            customization_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.purchaseid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            purchaseid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.customization_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            customization_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            new_level: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.serial_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            serial_number: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            controller_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.granted_profile_modifier || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            granted_profile_modifier: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.target_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            target_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            targetid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            reactionid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.target_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            target_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            targetid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactionids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.total || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            total: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            user_reviews: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            ugc: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            profile: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            forum_topics: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            comments: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            total_given: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_received: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_points_given: {
              _: 9,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            total_points_received: {
              _: 10,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            given: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            received: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            points_given: {
              _: 4,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_received: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            purchaseable: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.elanguage || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            elanguage: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactions: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            points_cost: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            points_transferred: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            valid_target_types: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            valid_ugc_types: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            purchaseable: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            localized_title: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            localized_desc: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            available_until: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.points_cost || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points_cost: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upgrade_points_cost: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            purchasable_customization_types: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            upgradable_customization_types: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            max_slots_per_type: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            max_upgradable_level: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apps: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            has_items_anyone_can_purchase: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            event_app: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            hero_carousel_image: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            owned: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Response_EligibleApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            defid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            community_item_class: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            community_item_type: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            point_cost: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            timestamp_created: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_updated: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_available: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_available_end: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            quantity: {
              _: 10,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            internal_description: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            active: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            community_item_data: {
              _: 13,
              _: _,
            },
            bundle_defids: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            usable_duration: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bundle_discount: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_free_until: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `LoyaltyRewardDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            item_title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            item_description: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            item_image_small: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            item_image_large: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm_small: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4_small: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            animated: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            badge_data: {
              _: 9,
              _: _,
              _: !0,
              _: !0,
            },
            profile_theme_id: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            tiled: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `LoyaltyRewardDefinition_CommunityItemData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.level || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            level: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            image: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `LoyaltyRewardDefinition_BadgeData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bonusid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bonusid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            points: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            timestamp_start: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_end: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            internal_description: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `LoyaltyRewardPurchaseBonus`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bonuses || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bonuses: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            time_available: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_item_classes: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            language: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            count: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            cursor: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            sort: {
              _: 7,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            sort_descending: {
              _: 8,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            reward_types: {
              _: 9,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            excluded_community_item_classes: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            definitionids: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            filters: {
              _: 12,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            filter_match_all_category_tags: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            filter_match_any_category_tags: {
              _: 14,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            contains_definitionids: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            include_direct_purchase_disabled: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            excluded_content_descriptors: {
              _: 17,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            excluded_appids: {
              _: 18,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            excluded_store_tagids: {
              _: 19,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            store_tagids: {
              _: 20,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            search_term: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_QueryRewardItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_count: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            next_cursor: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_QueryRewardItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.requests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requests: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.responses || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            responses: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.eresult || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            eresult: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            response: {
              _: 2,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            language: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEquippedProfileItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.active_definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            active_definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            inactive_definitions: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            bundle_definitions: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEquippedProfileItems_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetPointsForSpend#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetPointsForSpend = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetSummary#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetSummary = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.RedeemPoints#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RedeemPoints = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForBadgeLevel#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsForBadgeLevel = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsToUpgradeItem#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsToUpgradeItem = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomization#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsForProfileCustomization = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsForProfileCustomizationUpgrade = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RegisterForSteamDeckRewards#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RegisterForSteamDeckRewards = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.AddReaction#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.AddReaction = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetReactions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetReactions = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetReactionsSummaryForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetReactionsSummaryForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetReactionConfig#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetReactionConfig = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetProfileCustomizationsConfig#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetProfileCustomizationsConfig = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetEligibleApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetEligibleApps = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetActivePurchaseBonuses#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetActivePurchaseBonuses = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.QueryRewardItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.QueryRewardItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.BatchedQueryRewardItems#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.BatchedQueryRewardItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetEquippedProfileItems#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetEquippedProfileItems = _;
})((_ ||= {}));
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
function _(_) {
  let { data: _ } = _(_(_));
  return _;
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
var _ = _(_()),
  _ = class {
    constructor() {
      _(this);
    }
    m_mapClanToImages = new Map();
    m_mapClanImageLoadPromises = new Map();
    m_imageListChangeCallback = new Map();
    m_mapClanImageLoadState = new Map();
    m_mapImageIDToResolution = new Map();
    BHasImageResolution(_) {
      return this.m_mapImageIDToResolution.has(_.imageid);
    }
    GetImageResolution(_) {
      return this.m_mapImageIDToResolution.get(_.imageid);
    }
    SetImageResolution(_, _) {
      this.m_mapImageIDToResolution.set(_.imageid, _);
    }
    GetImageListCallbackForClanAccountIDInternal(_) {
      return (
        this.m_imageListChangeCallback.has(_) ||
          this.m_imageListChangeCallback.set(_, new _()),
        this.m_imageListChangeCallback.get(_)
      );
    }
    GetImageListCallbackForClanAccountID(_) {
      return this.GetImageListCallbackForClanAccountIDInternal(_);
    }
    m_vecClanImageDragListener = [];
    AddClanImageDragListener(_) {
      this.m_vecClanImageDragListener.indexOf(_) == -1 &&
        this.m_vecClanImageDragListener.push(_);
    }
    RemoveClanImageDragListener(_) {
      let _ = this.m_vecClanImageDragListener.indexOf(_);
      _ != -1 && this.m_vecClanImageDragListener.splice(_, 1);
    }
    GetClanImageDragListener() {
      return this.m_vecClanImageDragListener;
    }
    BHasLoadedClanImages(_) {
      return this.m_mapClanToImages.has(_.GetAccountID());
    }
    async LoadClanImages(_, _, _) {
      let _ = _.GetAccountID();
      if (_ || !this.m_mapClanImageLoadPromises.has(_)) {
        let _ = this.InternalLoadClanImages(_, _, _);
        this.m_mapClanImageLoadPromises.set(_, _);
      }
      return this.m_mapClanImageLoadPromises.get(_);
    }
    async InternalLoadClanImages(_, _, _) {
      let _ = _.GetAccountID();
      if (
        (_(_ && _ != 0, `ClanSteamID missing:` + _),
        _ && (!this.m_mapClanToImages.has(_) || _))
      ) {
        let _ = {},
          _,
          _ =
            _.COMMUNITY_BASE_URL +
            `/gid/` +
            _.ConvertTo64BitString() +
            `/getimages/`;
        if (
          ((_ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
            cancelToken: _,
          })),
          _)
        ) {
          for (let _ of _.data.images) _.clanAccountID = _;
          _(() => {
            (this.m_mapClanImageLoadState.set(_, {
              loaded: !0,
            }),
              this.m_mapClanToImages.set(_, _.data.images),
              this.GetImageListCallbackForClanAccountIDInternal(_).Dispatch(
                _.data.images,
              ));
          });
        }
      }
      return this.m_mapClanToImages.get(_);
    }
    GetLoadState(_) {
      return this.m_mapClanImageLoadState.get(_.GetAccountID());
    }
    GetClanImages(_) {
      return this.GetClanImagesByAccount(_.GetAccountID());
    }
    GetClanImagesByAccount(_) {
      return this.m_mapClanToImages.get(_) || [];
    }
    GetFilteredClanImages(_, _) {
      let _ = _.GetClanImages(_);
      return this.GetFilteredClanImagesList(_, _);
    }
    GetFilteredClanImagesList(_, _) {
      if (_ && _.trim().length > 0) {
        _ = _.trim().toLowerCase();
        let _ = [];
        for (let _ of _)
          _.file_name && _.file_name.toLowerCase().indexOf(_) >= 0 && _.push(_);
        return _;
      }
      return _;
    }
    GetClanImageByID(_, _) {
      let _ = _.GetAccountID(),
        _ = this.m_mapClanToImages.get(_);
      return _ ? _.find((_) => _.imageid == _) : void 0;
    }
    GetClanImageByURL(_, _) {
      let _ = _.GetAccountID(),
        _ = this.m_mapClanToImages.get(_);
      return _ ? _.find((_) => _.thumb_url == _ || _.url == _) : void 0;
    }
    GetClanImageByFile(_, _) {
      let _ = _.GetAccountID(),
        _ = this.m_mapClanToImages.get(_);
      return _ ? _.find((_) => _.file_name == _.name) : void 0;
    }
    GetClanImageByImageHash(_, _) {
      let _ = _.GetAccountID(),
        _ = this.m_mapClanToImages.get(_);
      return _ ? _.find((_) => _.image_hash == _) : void 0;
    }
    async DeleteClanImageByID(_, _) {
      let _ = {
          sessionid: _(),
          imageid: _,
        },
        _ = _.GetAccountID(),
        _ = await _.default.get(
          _.COMMUNITY_BASE_URL +
            `/gid/` +
            _.ConvertTo64BitString() +
            `/deleteimage/`,
          {
            params: _,
          },
        );
      if (!_ || _.status != 200 || _.data.success != 1) return _.data;
      let _ = this.m_mapClanToImages.get(_);
      if (_) {
        let _ = _.findIndex((_, _, _) => _.imageid == _);
        _ >= 0 &&
          (_.splice(_, 1),
          this.GetImageListCallbackForClanAccountIDInternal(_).Dispatch([
            ..._,
          ]));
      }
      return _.data;
    }
    async DeleteClanImage(_, _) {
      return this.DeleteClanImageByID(_, _.imageid);
    }
  };
(_([_], _.prototype, `m_mapClanToImages`, void 0),
  _([_], _.prototype, `m_mapClanImageLoadState`, void 0));
var _ = new _();
function _(_) {
  let _ = _.InitFromClanID(_, _.EUNIVERSE),
    _ = _(`useLoadClanImages`),
    [_, _] = (0, _.useState)(() => _.BHasLoadedClanImages(_));
  return (
    (0, _.useEffect)(() => {
      let _ = _.InitFromClanID(_, _.EUNIVERSE);
      return (
        _.BHasLoadedClanImages(_) ||
          _.LoadClanImages(_, !1, _.token).then(() => _(!0)),
        () => _.cancel()
      );
    }, [_, _]),
    _
  );
}
var _ = `_0ayR5P4snOQ-`,
  _ = `CTubiAgon4c-`,
  _ = `_4Y5F2iyNmd4-`,
  _ = `_7zJSazZLpTI-`,
  _ = `xFTxNDMXZvw-`,
  _ = class extends _.Component {
    m_strLastSearch;
    m_rgCurrentMatches = [];
    m_mapMatchByKey = new Map();
    containerRef = _.createRef();
    constructor(_) {
      (super(_),
        (this.m_hMobxSearchDisposer = _(async () => {
          (await this.UpdateSearchResults(this.props.strSearch),
            this.forceUpdate());
        })),
        (this.state = {
          selectedIndex: void 0,
        }));
    }
    OnKeyDown(_) {
      this.BHandleKeyPress(_.keyCode) && _.preventDefault();
    }
    BHandleKeyPress(_) {
      switch (_) {
        case 38:
          this.SetSelectedIndexDelta(-1);
          break;
        case 40:
          this.SetSelectedIndexDelta(1);
          break;
        case 36:
          this.SetSelectedIndex(0);
          break;
        case 33:
          this.SetSelectedIndexDelta(-this.GetPageSize());
          break;
        case 35:
          this.SetSelectedIndex(-1);
          break;
        case 34:
          this.SetSelectedIndexDelta(this.GetPageSize());
          break;
        case 13:
        case 9:
          if (this.state.selectedIndex !== void 0)
            this.ChooseSuggestion(
              this.m_rgCurrentMatches[this.state.selectedIndex],
            );
          else
            return (this.props.onSuggestionSelected(this.props.strSearch), !1);
          break;
        case 27:
          this.props.onSuggestionSelected(this.props.strSearch);
          break;
        default:
          return !1;
      }
      return !0;
    }
    GetPageSize() {
      let _ = this.containerRef.current,
        _ = _ && _.firstElementChild,
        _ = this.m_rgCurrentMatches.length;
      if ((_ > this.getMaxMatches() && (_ = this.getMaxMatches()), _ && _)) {
        let _ = _.scrollHeight / _,
          _ = _.clientHeight / _;
        return Math.max(1, Math.floor(_));
      }
      return 5;
    }
    ChooseSuggestion(_) {
      this.props.onSuggestionSelected(
        this.props.strSearch,
        _ ? this.getSelection(_) : void 0,
      );
    }
    SetSelectedIndexDelta(_) {
      this.state.selectedIndex === void 0
        ? this.SetSelectedIndex(_ === 1 ? 0 : _)
        : this.SetSelectedIndex(this.state.selectedIndex + _);
    }
    SetSelectedIndex(_) {
      if (!this.m_rgCurrentMatches.length) return;
      let _ = this.m_rgCurrentMatches.length;
      (_ > this.getMaxMatches() && (_ = this.getMaxMatches()),
        (_ %= _),
        _ < 0 && (_ += _),
        this.setState({
          selectedIndex: _,
        }));
    }
    FindKeyIndex(_) {
      if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
        for (let _ = 0; _ < this.m_rgCurrentMatches.length; _++)
          this.m_mapMatchByKey.set(this.getKey(this.m_rgCurrentMatches[_]), _);
      return this.m_mapMatchByKey.get(_);
    }
    OnClickSuggestion(_) {
      let _ = this.FindKeyIndex(_);
      _ !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[_]);
    }
    OnMouseOverSuggestion(_) {
      let _ = this.FindKeyIndex(_);
      _ !== void 0 && this.SetSelectedIndex(_);
    }
    BindSelectedElement(_) {
      if (!_) return;
      let _ = this.containerRef.current,
        _ = _.containerRef.current,
        _ = _ && _.firstElementChild;
      _ &&
        _ &&
        (_.scrollTop + _.clientHeight < _.offsetTop ||
          _.offsetTop < _.scrollTop) &&
        _.scrollIntoView();
    }
    async UpdateSearchResults(_) {
      ((this.m_rgCurrentMatches = await this.performSearch(_)),
        (this.m_strLastSearch = _),
        this.m_mapMatchByKey.clear(),
        this.m_rgCurrentMatches.length
          ? !this.state || this.state.selectedIndex === void 0
            ? (this.props.nMinimumSearchLengthBeforeAutoSelection === void 0 ||
                _.length >=
                  this.props.nMinimumSearchLengthBeforeAutoSelection) &&
              this.setState({
                selectedIndex: 0,
              })
            : this.state.selectedIndex >= this.m_rgCurrentMatches.length &&
              this.setState({
                selectedIndex: 0,
              })
          : this.state &&
            this.state.selectedIndex !== void 0 &&
            this.setState({
              selectedIndex: void 0,
            }));
    }
    m_hMobxSearchDisposer;
    componentWillUnmount() {
      this.m_hMobxSearchDisposer &&= (this.m_hMobxSearchDisposer(), void 0);
    }
    async componentDidUpdate(_) {
      this.m_strLastSearch != this.props.strSearch &&
        (await this.UpdateSearchResults(this.props.strSearch),
        this.forceUpdate());
    }
    render() {
      let _ = [];
      if (this.m_rgCurrentMatches.length) {
        let _ = this.getMaxMatches();
        for (let _ = 0; _ < Math.min(_, this.m_rgCurrentMatches.length); _++) {
          let _ = this.m_rgCurrentMatches[_],
            _ = this.getKey(_),
            _ = _ === this.state.selectedIndex;
          _.push(
            (0, _.jsx)(
              _,
              {
                matchKey: _,
                fnOnClick: this.OnClickSuggestion,
                fnOnMouseOver: this.OnMouseOverSuggestion,
                bIsSelected: _,
                ref: _ ? this.BindSelectedElement : void 0,
                children: this.renderMatch(_),
              },
              _,
            ),
          );
        }
        this.m_rgCurrentMatches.length > _ &&
          _.push(
            this.renderTooManyMatchesMessage(
              this.m_rgCurrentMatches.length - _,
            ),
          );
      } else {
        let _ = this.renderNoMatchMessage();
        if (!_) return null;
        _.push(_);
      }
      return (0, _.jsx)(`div`, {
        className: _,
        ref: this.containerRef,
        children: (0, _.jsxs)(`div`, {
          className: _,
          tabIndex: 0,
          onKeyDown: this.OnKeyDown,
          children: [this.renderHeader(), _],
        }),
      });
    }
  };
(_([_], _.prototype, `OnKeyDown`, null),
  _([_], _.prototype, `OnClickSuggestion`, null),
  _([_], _.prototype, `OnMouseOverSuggestion`, null),
  _([_], _.prototype, `BindSelectedElement`, null));
var _ = class extends _.PureComponent {
  containerRef = _.createRef();
  OnMouseOver(_) {
    this.props.fnOnMouseOver(this.props.matchKey);
  }
  OnClick(_) {
    this.props.fnOnClick(this.props.matchKey);
  }
  render() {
    return (0, _.jsx)(`div`, {
      className: _(_, _, this.props.bIsSelected ? _ : ``),
      onMouseEnter: this.OnMouseOver,
      onClick: this.OnClick,
      ref: this.containerRef,
      children: this.props.children,
    });
  }
};
(_([_], _.prototype, `OnMouseOver`, null),
  _([_], _.prototype, `OnClick`, null));
var _ = `ARyrUoFBJKQ-`,
  _ = class extends _ {
    performSearch(_) {
      return this.props.emoticonStore.SearchEmoticons(_, 10, !1);
    }
    getSelection(_) {
      return _.name;
    }
    getKey(_) {
      return _.name;
    }
    renderMatch(_) {
      return (0, _.jsxs)(`div`, {
        className: _(void 0, _.recent ? `Recent` : ``),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                emoticon: _.name,
              }),
              _.new && (0, _.jsx)(_, {}),
            ],
          }),
          `:`,
          _.name,
          `:`,
        ],
      });
    }
    renderNoMatchMessage() {
      return null;
    }
    renderTooManyMatchesMessage(_) {
      return null;
    }
    renderHeader() {
      return null;
    }
    getMaxMatches() {
      return Number.MAX_VALUE;
    }
  },
  _ = `hgRTS5e4dgI-`,
  _ = class extends _ {
    performSearch(_) {
      let _ = [];
      return (
        this.props.supportBBCodes.forEach((_) => {
          _.indexOf(_) >= 0 &&
            _.push({
              name: _,
            });
        }),
        _
      );
    }
    getSelection(_) {
      return `[` + _.name + `][/` + _.name + `]`;
    }
    getKey(_) {
      return _.name;
    }
    renderMatch(_) {
      return (0, _.jsxs)(
        `div`,
        {
          className: _(void 0),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.name,
            }),
            `[`,
            _.name,
            `]...[/`,
            _.name,
            `]`,
          ],
        },
        _.name,
      );
    }
    renderNoMatchMessage() {
      return (0, _.jsx)(
        `div`,
        {
          className: _(_, void 0),
          children: _(`#Bbcode_No_Match`),
        },
        `nomatches`,
      );
    }
    renderTooManyMatchesMessage(_) {
      return null;
    }
    renderHeader() {
      return null;
    }
    getMaxMatches() {
      return Number.MAX_VALUE;
    }
  },
  _ = class extends _.Component {
    descTextAreaRef = _.createRef();
    m_MentionDialog;
    m_bDisabled = !0;
    m_iMentionSearchStartOffset;
    m_iMentionSearchCancelledOffset;
    constructor(_) {
      (super(_),
        (this.state = {
          mentionSearch: void 0,
          activeSuggestSearchType: void 0,
        }));
    }
    BindMentionDialog(_) {
      this.m_MentionDialog = _ ?? void 0;
    }
    OnKeyDown(_) {
      this.state.activeSuggestSearchType &&
      this.m_MentionDialog &&
      !_.shiftKey &&
      !_.ctrlKey &&
      this.m_MentionDialog.BHandleKeyPress(_.keyCode)
        ? _.preventDefault()
        : (_.keyCode == 8 || _.keyCode == 46) &&
          (this.m_iMentionSearchCancelledOffset = void 0);
    }
    FindMatchOpener(_, _, _) {
      for (let _ = _ - 1; _ >= 0; _--)
        if (_[_] == _) return _;
        else if (
          _[_] == ` ` ||
          _[_] ==
            `
`
        )
          break;
    }
    ReplaceSuggestedText(_, _) {
      let _ = this.descTextAreaRef.current;
      if (!_) return;
      let _ = _.selectionStart,
        _ = _.value,
        _ = this.FindMatchOpener(_, _, _);
      if (
        (_ === void 0 && _ == `@` && (_ = this.FindMatchOpener(`＠`, _, _)),
        _ !== void 0)
      ) {
        let _ = _.substr(0, _);
        ((_ += _), (_ >= _.length || _[_] != ` `) && (_ += ` `));
        let _ = _.length;
        ((_ += _.substr(_)),
          (_.value = _),
          (_.selectionStart = _.selectionEnd = _),
          this.props.fnSetText(_),
          this.FocusTextInput());
      }
    }
    OnFocus(_) {
      this.UpdateAutoSearchState();
    }
    OnKeyPress(_) {
      this.UpdateAutoSearchState();
    }
    OnClick(_) {
      this.UpdateAutoSearchState();
    }
    ClearMentionSearchState() {
      ((this.m_iMentionSearchStartOffset = void 0),
        this.state.activeSuggestSearchType &&
          this.setState({
            activeSuggestSearchType: void 0,
            mentionSearch: void 0,
          }));
    }
    OnEmoticonSuggestionSelected(_, _) {
      _
        ? (this.ReplaceSuggestedText(`:`, `:` + _ + `:`),
          this.ClearMentionSearchState())
        : ((this.m_iMentionSearchCancelledOffset =
            this.m_iMentionSearchStartOffset),
          this.ClearMentionSearchState());
    }
    OnBBCodeSuggestionSelected(_, _) {
      _
        ? (this.ReplaceSuggestedText(`[`, _), this.ClearMentionSearchState())
        : ((this.m_iMentionSearchCancelledOffset =
            this.m_iMentionSearchStartOffset),
          this.ClearMentionSearchState());
    }
    FocusTextInput() {
      this.descTextAreaRef.current && this.descTextAreaRef.current.focus();
    }
    UpdateAutoSearchState() {
      let _ = this.descTextAreaRef.current;
      if (!_ || this.m_bDisabled) return;
      if (_.selectionStart != _.selectionEnd || !_.selectionStart) {
        this.ClearMentionSearchState();
        return;
      }
      let _ = _.selectionStart,
        _ = _.value,
        _,
        _;
      for (let _ = _ - 1; _ >= 0; _--) {
        let _ = _ > 0 ? _[_ - 1] : void 0;
        if (this.props.emoticonStore && _[_] == `:` && _.length > 2) {
          (_ &&
            _ != ` ` &&
            _ !=
              `
` &&
            _ != `:`) ||
            ((_ = _), (_ = `Emoticon`));
          break;
        }
        if (_[_] == `[` && (_ + 1 > _.length || _[_ + 1] != `/`)) {
          (_ &&
            _ != ` ` &&
            _ !=
              `
` &&
            _ != `]`) ||
            ((_ = _), (_ = `BBCode`));
          break;
        }
        if (
          _[_] == ` ` ||
          _[_] ==
            `
`
        )
          break;
      }
      if (_ === void 0 || _ === this.m_iMentionSearchCancelledOffset) {
        this.ClearMentionSearchState();
        return;
      }
      let _ = _.substr(_ + 1, _ - _ - 1);
      ((this.m_iMentionSearchStartOffset = _),
        this.setState({
          activeSuggestSearchType: _,
          mentionSearch: _,
        }));
    }
    GetTextAreaRef() {
      return this.descTextAreaRef;
    }
    GetTextAreaCurrent() {
      return this.descTextAreaRef.current;
    }
    render() {
      let {
          emoticonStore: _,
          supportBBCodes: _,
          fnSetText: _,
          ..._
        } = this.props,
        _;
      switch (this.state.activeSuggestSearchType) {
        case `Emoticon`:
          _ &&
            (_ = (0, _.jsx)(_, {
              emoticonStore: _,
              strSearch: this.state.mentionSearch,
              nMinimumSearchLengthBeforeAutoSelection: 2,
              onSuggestionSelected: this.OnEmoticonSuggestionSelected,
              ref: this.BindMentionDialog,
            }));
          break;
        case `BBCode`:
          _ = (0, _.jsx)(_, {
            supportBBCodes: _,
            strSearch: this.state.mentionSearch,
            nMinimumSearchLengthBeforeAutoSelection: 2,
            onSuggestionSelected: this.OnBBCodeSuggestionSelected,
            ref: this.BindMentionDialog,
          });
      }
      return (0, _.jsxs)(_.Fragment, {
        children: [
          _,
          (0, _.jsx)(`textarea`, {
            ..._,
            ref: this.descTextAreaRef,
            onKeyDown: this.OnKeyDown,
            onKeyUp: this.OnKeyPress,
            onFocus: this.OnFocus,
            onClick: this.OnClick,
          }),
        ],
      });
    }
  };
(_([_], _.prototype, `BindMentionDialog`, null),
  _([_], _.prototype, `OnKeyDown`, null),
  _([_], _.prototype, `OnFocus`, null),
  _([_], _.prototype, `OnKeyPress`, null),
  _([_], _.prototype, `OnClick`, null),
  _([_], _.prototype, `OnEmoticonSuggestionSelected`, null),
  _([_], _.prototype, `OnBBCodeSuggestionSelected`, null),
  _([_], _.prototype, `FocusTextInput`, null),
  _([_], _.prototype, `GetTextAreaRef`, null),
  _([_], _.prototype, `GetTextAreaCurrent`, null));
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bincremental || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bincremental: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            friends: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            max_friend_count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active_friend_count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            friends_limit_hit: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMsgClientFriendsList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ulfriendid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ulfriendid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            efriendrelationship: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMsgClientFriendsList_Friend`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            groupid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            accountid_members: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsListCategory`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetCategories_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.categories || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            categories: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetCategories_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clanid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            chat_group_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsListFavoriteEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetFavorites_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.favorites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            favorites: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetFavorites_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.favorites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            favorites: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_SetFavorites_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_SetFavorites_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.favorites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            favorites: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_FavoritesChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetFriendsList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.friendslist || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            friendslist: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetFriendsList_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`FriendsList.GetCategories#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetCategories = _;
  function _(_, _, _) {
    return _.SendMsg(`FriendsList.GetFriendsList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetFriendsList = _;
  function _(_, _, _) {
    return _.SendMsg(`FriendsList.GetFavorites#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetFavorites = _;
  function _(_, _, _) {
    return _.SendMsg(`FriendsList.SetFavorites#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetFavorites = _;
})((_ ||= {}));
var _;
(function (_) {
  _.FavoritesChangedHandler = {
    name: `FriendsListClient.FavoritesChanged#1`,
    request: _,
  };
})((_ ||= {}));
function _() {
  let _ = _(),
    _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: [`GetFriendsList`, _],
    queryFn: async () => {
      let _ = _.Init(_),
        _ = await _.GetFriendsList(_, _),
        _ = [];
      for (let _ of _.Body().friendslist()?.friends() ?? []) {
        let _ = _.ulfriendid();
        _ &&
          (_.efriendrelationship() == 3 || _.efriendrelationship() == 6) &&
          new _(_).BIsIndividualAccount() &&
          _.push(_);
      }
      return _;
    },
  };
}
var _ = `nIUbxO5p4A8-`,
  _ = `_0VP7ctGOadU-`,
  _ = `siVkCB-BeMc-`,
  _ = `wrPMc1ko4O0-`,
  _ = `sa1-P2tbrtc-`,
  _ = `_3QeIZHH9LCM-`,
  _ = `REbb7We6KRY-`,
  _ = `DgynSAJA0e0-`,
  _ = `WJB2hOx55Ic-`,
  _ = `Px4wClOhj8g-`,
  _ = `hluYSsWwKs8-`,
  _ = `AALKXsdrG-s-`,
  _ = `LR7E8btmRt0-`,
  _ = `Mc05zduSJmM-`,
  _ = `_7IgH0aB0drE-`,
  _ = `ZLkF2UoZt5M-`,
  _ = `-KEQzYsMyLo-`,
  _ = `quOQjx4gLwQ-`,
  _ = `_1ZQxfdsiPgM-`,
  _ = `NpcSqQhn8sA-`,
  _ = `i0pjDy4li-A-`,
  _ = `fwAY6BoxoKI-`,
  _ = `d-SkXlSVK18-`,
  _ = (_) => {
    let { clanSteamID: _, fnImageSelectCallBack: _ } = _,
      [_, _] = (0, _.useState)(``),
      _ = _(_.clanSteamID.GetAccountID()),
      _ = () => _.closeModal && _.closeModal(),
      _ = _.GetFilteredClanImages(_, _),
      _ = (_) => {
        (_(_), _());
      };
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              children: _(`#ClanImageChooser_Title`),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(`p`, {
                    children: _(`#ClanImageChooser_Desc`),
                  }),
                  (0, _.jsx)(_, {
                    placeholder: _(`#ClanImageChooser_Search`),
                    value: _,
                    onChange: (_) => _(_.currentTarget.value),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _
                      ? (0, _.jsx)(_, {
                          size: `medium`,
                          string: _(`#Loading`),
                        })
                      : _.length > 0
                        ? _.map((_) =>
                            (0, _.jsx)(
                              _,
                              {
                                clanImage: _,
                                searchStringHilight: _,
                                fnImageClick: _,
                              },
                              `ci` + _.image_hash,
                            ),
                          )
                        : _.trim().length == 0
                          ? (0, _.jsx)(`div`, {
                              children: _(`#ClanImageChooser_None`),
                            })
                          : (0, _.jsx)(`div`, {
                              children: _(
                                `#EventCalendar_GameSearch_NoneFound`,
                              ),
                            }),
                  }),
                ],
              }),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                onClick: _,
                children: _(`#Button_Cancel`),
              }),
            }),
          ],
        }),
      }),
    });
  },
  _ = (_) => {
    let { clanImage: _, searchStringHilight: _, fnImageClick: _ } = _,
      _ = _.file_name ? _.file_name : ``,
      _ = _(_, _, String(_.imageid), _);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url( '${_.thumb_url}' )`,
          },
          onDoubleClick: () => _(_),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          title: _,
          children: _,
        }),
      ],
    });
  };
function _(_, _, _, _) {
  let _ = [];
  if (_.length > 0) {
    let _ = _.toLocaleLowerCase();
    for (let _ = 0; _ < _.length;) {
      let _ = _.indexOf(_, _);
      if (_ < 0) {
        _.push(
          (0, _.jsx)(
            `span`,
            {
              children: _.substring(_),
            },
            _ + `_` + String(_),
          ),
        );
        break;
      }
      (_ < _ &&
        _.push(
          (0, _.jsx)(
            `span`,
            {
              children: _.substring(_, _),
            },
            _ + `_` + String(_),
          ),
        ),
        _.push(
          (0, _.jsx)(
            `span`,
            {
              className: _,
              children: _.substr(_, _.length),
            },
            _ + `_` + String(_),
          ),
        ),
        (_ = _ + _.length));
    }
  } else
    _.push(
      (0, _.jsx)(
        `span`,
        {
          children: _,
        },
        _ + `_null`,
      ),
    );
  return _;
}
function _(_, _, _) {
  let _ = _(_.width, _),
    _ = _(_.height, _);
  return {
    sKey: `${_}_${_}x${_}`,
    width: _,
    height: _,
    bEnforceDimensions: !_.bDisableEnforceDimensions,
    artworkType: _,
    bHiddenFromDropdown: _ === `hero`,
    bDeprecated: (_ ?? 0) >= 1,
    fnGetLabelText() {
      return this.artworkType == `spotlight`
        ? _(`#EventEditor_ArtworkType_store_spotlight`)
        : _(`#EventEditor_ArtworkType_` + this.artworkType);
    },
  };
}
function _(_) {
  return _?.flatMap((_) => {
    let _ = _[_];
    if (
      (_(!!_, `Artwork Type not in Map ${_}`),
      typeof _.width == `number` && typeof _.height == `number`)
    )
      return [_(_, _)];
    {
      let _ = Math.max(
        Array.isArray(_.width) ? _.width.length : 1,
        Array.isArray(_.height) ? _.height.length : 1,
      );
      return Array.from(
        {
          length: _,
        },
        (_, _) => _(_, _, _),
      );
    }
  });
}
var _ = class extends _ {
  m_filesToUpload = _.array();
  m_filesCompleted = _.array();
  m_clanImagesV2;
  m_clanSteamID;
  m_rgImageOptions;
  m_localizedImageGroupPrimaryImage;
  m_lastError = void 0;
  constructor(_, _, _, _) {
    (super(),
      _(this),
      (this.m_clanSteamID = _),
      (this.m_rgImageOptions = _(_)),
      (this.m_localizedImageGroupPrimaryImage = _),
      (this.m_clanImagesV2 = _ ?? !1));
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  async AddImage(_, _ = 0) {
    let { language: _ } = _(_.name, _);
    return this.AddImageForLanguage(_, _);
  }
  async AddImageForLanguage(_, _) {
    if (!_(_.type) && !(_.is_support && _(_.type))) return !1;
    let _ = await _(_, _(_.type));
    if (!_) return !1;
    let _ = new _(
      _,
      _.name,
      _,
      this.m_rgImageOptions,
      _.src,
      _(_),
      _,
      this.m_localizedImageGroupPrimaryImage,
    );
    return ((this.m_filesToUpload = [...this.m_filesToUpload, _]), !0);
  }
  async AddExistingClanImage(_, _ = 0) {
    let _ = _.GetHashAndExt(_);
    if (!_) return !1;
    let _ = _.GenerateEditableURLFromHashAndExt(this.m_clanSteamID, _),
      _ = await (0, _.default)({
        url: _,
        method: `GET`,
        responseType: `blob`,
      }),
      _ = _(_.data, _.file_name);
    return await this.AddImage(_, _);
  }
  DeleteUploadImageByIndex(_) {
    (this.m_filesToUpload.splice(_, 1),
      (this.m_filesToUpload = [...this.m_filesToUpload]));
  }
  DeleteUploadImage(_) {
    let _ = this.m_filesToUpload.findIndex(
      (_) => _.file == _.file && _.uploadTime == _.uploadTime,
    );
    _ >= 0 && this.DeleteUploadImageByIndex(_);
  }
  ClearImages() {
    this.m_filesToUpload = _.array();
  }
  GetFilesUploaded() {
    return this.m_filesCompleted;
  }
  GetLastErrorFile() {
    return this.m_lastError;
  }
  GetCompletedFiles() {
    return this.m_filesCompleted.length;
  }
  GetTotalFiles() {
    return this.m_filesToUpload.length;
  }
  GetFilesToUpload() {
    return this.m_filesToUpload.map((_) => _.file);
  }
  GetUploadImages() {
    return this.m_filesToUpload;
  }
  BHasError() {
    return this.m_lastError != null;
  }
  BAllDone() {
    return (
      this.m_filesCompleted.length > 0 &&
      this.m_filesCompleted.length == this.m_filesToUpload.length
    );
  }
  BIsFileCompleted(_) {
    return this.m_filesCompleted.indexOf(_) != -1;
  }
  RetryAllFailedUploads() {
    (this.CancelAllUploads(), this.UploadAllImages());
  }
  async handleUploadRefresh(_) {
    await _.LoadClanImages(this.m_clanSteamID, !0, _);
  }
  BGetUploadsAreInSerial() {
    return !1;
  }
  async UploadSingleImage(_, _, _, _) {
    let _ = _.file,
      _ = _.GetCurrentImageOption(),
      _ = _.GetResizeDimension(),
      _ = new FormData();
    (_.append(`clanimage`, _, _),
      _.append(`sessionid`, _()),
      this.m_clanImagesV2 && _.append(`clan_images_v2`, `1`),
      _?.artworkType && _.append(`arttype`, _.artworkType),
      _ &&
        _.length > 0 &&
        _.append(`resize`, _.map((_) => _.width + `x` + _.height).join(`,`)));
    let _ = `/uploadimage/`,
      _ = this.m_localizedImageGroupPrimaryImage;
    _ &&
      ((_ = `/ajaxuploadlocalizedimage/`),
      _.append(`origimagehash`, _.image_hash),
      _.thumbnail_hash && _.append(`thumbhash`, _.thumbnail_hash),
      _.append(`extension`, `` + _.file_type),
      _.append(`language`, `` + _));
    let _ = _.split(`.`).pop()?.toLocaleLowerCase();
    (_ == `webm` || _ == `mp4`) &&
      (_.append(`video_width`, `` + _.width),
      _.append(`video_height`, `` + _.height));
    let _ =
        _.COMMUNITY_BASE_URL +
        `/gid/` +
        this.m_clanSteamID.ConvertTo64BitString() +
        _,
      _ = {
        cancelToken: _,
        withCredentials: !0,
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      },
      _,
      _ = !0;
    try {
      ((_ = await _.default.post(_, _, _)), this.m_filesCompleted.push(_));
    } catch (_) {
      ((_ = !1),
        (this.m_lastError = {
          file: _,
          status: _.response ? _.response.status : 500,
          message: _(_).strErrorMsg,
        }),
        (_ = _.response));
    }
    return (
      _ || (await this.handleUploadRefresh(_)),
      {
        bSuccess: _,
        result: _.data,
      }
    );
  }
};
(_([_], _.prototype, `m_filesToUpload`, void 0),
  _([_], _.prototype, `m_filesCompleted`, void 0),
  _([_], _.prototype, `m_lastError`, void 0),
  _([_], _.prototype, `AddImage`, null),
  _([_], _.prototype, `AddExistingClanImage`, null),
  _([_], _.prototype, `DeleteUploadImageByIndex`, null),
  _([_], _.prototype, `DeleteUploadImage`, null),
  _([_], _.prototype, `ClearImages`, null));
var _ = class extends _ {
  constructor(_, _, _) {
    super(_, _, _, !1);
  }
};
function _(_, _, _) {
  let _ = _(_ instanceof Array ? _ : [_]),
    _ = _.ConvertTo64BitString();
  return _.useMemo(() => new _(_, _, _), [_, _]);
}
var _ = _((_) => {
    let {
        clanSteamID: _,
        inputClanImage: _,
        nWidth: _,
        nHeight: _,
        setImage: _,
      } = _,
      _ = _.useMemo(
        () => ({
          width: _,
          height: _,
        }),
        [_, _],
      ),
      [_, _] = _.useState(void 0),
      [_, _] = _.useState(!!_),
      [_, _] = _.useState(!1),
      _ = _(_, `dummy`),
      _ = _.useCallback(
        async (_) => {
          if (
            (_.ClearImages(), _ && (_(!0), await _.AddExistingClanImage(_, 0)))
          ) {
            _(_);
            let _ = _.GetUploadImages()[0].IsValidAssetType(_);
            _.error.length != 0 ||
              _.needsCrop ||
              (_ && _.image_hash == _.image_hash) ||
              _(_);
          }
          _(!1);
        },
        [_, _, _, _],
      );
    _.useEffect(() => {
      _(_);
    }, [_, _]);
    let _ = (_) => {
        let _ = new _(_.CLANSTEAMID);
        _(
          (0, _.jsx)(_, {
            clanSteamID: _,
            fnImageSelectCallBack: (_) => _(_),
          }),
          _(_) ?? window,
        );
      },
      _ = (_) => {
        let _ = _(_) ?? window,
          _ = _.GetUploadImages()[0];
        _(
          (0, _.jsx)(_, {
            ownerWin: _,
            uploadFile: _,
            forceResolution: {
              width: _,
              height: _,
            },
            fileType: 3,
          }),
          _,
        );
      },
      _ = async () => {
        _(!0);
        try {
          let _ = await _.UploadAllImages(_),
            _ = Object.values(_);
          if (_ && _.length > 0) {
            _(
              _.length == 1,
              `ClanImagePickForCertainSize expected size 1, got ` + _.length,
            );
            let _ = _[0].bSuccess ? _[0].uploadResult : void 0,
              _ = _.GetHashAndExt(_ ?? null),
              _ = _.GetThumbHashAndExt(_ ?? null);
            if (_?.image_hash && _.file_type !== void 0 && _ && _) {
              let _ = _.GenerateURLFromHashAndExt(_, _),
                _ = _.GenerateURLFromHashAndExt(_, _),
                _ = {
                  imageid: -11231412,
                  image_hash: _.image_hash,
                  thumbnail_hash: _.thumbnail_hash,
                  file_type: _.file_type,
                  file_name: _.file_name,
                  clanAccountID: _.GetAccountID(),
                  url: _,
                  thumb_url: _,
                  uploaded_time: Date.now() / 1e3,
                };
              (_(_), _(_));
            }
          }
        } finally {
          _(!1);
        }
      },
      _ = ``,
      _ = !1,
      _;
    if (_ && _.GetFilesToUpload().length > 0) {
      _ = _.GetUploadImages()[0];
      let _ = _.IsValidAssetType(_);
      ((_ = _.error), (_ = _.needsCrop));
    }
    return (0, _.jsxs)(_.Fragment, {
      children: [
        _
          ? (0, _.jsx)(_, {
              size: `medium`,
              string: _(`#Loading`),
            })
          : _ &&
            (0, _.jsx)(`div`, {
              className: `_9Z5REaLWRq4-`,
              style: {
                backgroundImage: `url( '${_ ? _.dataUrl : _.url}' )`,
                height: `${_}px`,
                width: `${_}px`,
              },
            }),
        !!_ &&
          (0, _.jsx)(`p`, {
            children: _,
          }),
        _ &&
          (0, _.jsx)(_, {
            onClick: _,
            children: _(`#BBCode_ResizeImage`),
          }),
        _ &&
          _.bCropped &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                children: _(`#ClanImagePickAndResize_UploadStatus`, _.status),
              }),
              _
                ? (0, _.jsx)(_, {
                    string: _(`#Uploading`),
                    size: `small`,
                  })
                : (0, _.jsx)(_, {
                    onClick: _,
                    children: _(`#ClanImagePickAndResize_UploadImage`),
                  }),
            ],
          }),
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#BBCode_ChooseImage`, _, _),
        }),
      ],
    });
  }),
  _,
  _ = class extends _.Component {
    static {
      _ = this;
    }
    m_cancelSignal = _.default.CancelToken.source();
    static s_formattingHelp = new Map();
    constructor(_) {
      (super(_),
        (this.state = {
          formattingHelp: {
            __html: _.s_formattingHelp.get(_.formatType) ?? ``,
          },
        }));
    }
    componentDidMount() {
      this.AjaxGetFormattingHelp().catch((_) => {
        this.setState(_(_));
      });
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`FormattingHelpWidget component unmounted`);
    }
    static GetHelpURL(_, _) {
      return (
        _.COMMUNITY_BASE_URL +
        `comment/` +
        _ +
        `/formattinghelp` +
        (_ ? `?ajax=1` : ``)
      );
    }
    async AjaxGetFormattingHelp() {
      if (this.state.formattingHelp.__html == ``) {
        let _ = {
            sessionid: _(),
          },
          _;
        ((_ = await _.default.get(_.GetHelpURL(this.props.formatType, !0), {
          params: _,
          cancelToken: this.m_cancelSignal.token,
        })),
          _.s_formattingHelp.set(this.props.formatType, _.data),
          this.setState({
            formattingHelp: {
              __html: _.data,
            },
          }));
      }
    }
    render() {
      return this.state.strErrorMsg
        ? (0, _.jsxs)(`div`, {
            children: [
              this.state.strErrorMsg,
              (0, _.jsx)(`br`, {}),
              this.state.errorCode,
            ],
          })
        : this.state.formattingHelp.__html == ``
          ? (0, _.jsx)(_, {})
          : (0, _.jsx)(_, {
              strTitle: _(`#EventEditor_FormattingHelp_GetHelpLink`),
              strDescription: ``,
              closeModal: this.props.closeModal,
              onOK: this.props.closeModal,
              onCancel: this.props.closeModal,
              bAlertDialog: !0,
              className: `ModernBBStyles`,
              children: (0, _.jsx)(`div`, {
                dangerouslySetInnerHTML: this.state.formattingHelp,
              }),
            });
    }
  };
_ = _ = _([_], _);
var _,
  _ = class extends _.Component {
    descAutoTextAreaRef = _.createRef();
    constructor(_) {
      (super(_),
        (this.state = {
          bShowDragTarget: !1,
        }));
    }
    componentDidMount() {
      _.AddClanImageDragListener(this.ClanImageDragListener);
    }
    componentWillUnmount() {
      _.RemoveClanImageDragListener(this.ClanImageDragListener);
    }
    ClanImageDragListener(_, _) {
      this.state.bShowDragTarget != _ &&
        this.setState({
          bShowDragTarget: _,
        });
    }
    onFocus(_) {
      _ && _.target.select();
    }
    InsertText(_) {
      _.replaceSelection(this.GetTextAreaRef()?.current, _);
    }
    OnTextAreaDropListener(_) {
      if (
        (_.preventDefault(),
        _.stopPropagation(),
        _.dataTransfer.items && _.dataTransfer.items[0])
      ) {
        let _ = _.dataTransfer.getData(`text`);
        if (_ && _.length > 0) {
          for (let _ of [_.GetBaseURL(), _.GetBaseURLV2()])
            if (_.startsWith(_)) {
              let _ = `[img]` + _ + `/` + _.substr(_.length) + `[/img]`;
              _.replaceSelection(this.GetTextAreaRef()?.current, _);
              break;
            }
        }
      }
    }
    GetTextAreaRef() {
      return this.descAutoTextAreaRef.current?.GetTextAreaRef();
    }
    render() {
      return (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            pathToImages:
              _.COMMUNITY_CDN_URL + `public/images/sharedfiles/guides/`,
            fnTextareaRef: this.GetTextAreaRef,
            emoticonStore: this.props.emoticonStore,
            supportBBCodes: this.props.limitBBCode ? this.props.limitBBCode : _,
            bSupportHTMLImport: this.props.bSupportHTMLImport,
            showFormatHelp: this.props.showFormatHelp,
            bEmbeddedInDialog: this.props.bEmbeddedInDialog,
            clanSteamID: this.props.clanSteamID,
          }),
          (0, _.jsx)(`div`, {
            className: _(
              _,
              _,
              this.state.bShowDragTarget ? _ : ``,
              this.props.className ? this.props.className : ``,
            ),
            children: (0, _.jsx)(_, {
              cols: 90,
              rows: this.props.nOverridesRows || 22,
              maxLength: 64e3,
              className: _(
                _,
                this.props.classNameForTextArea
                  ? this.props.classNameForTextArea
                  : ``,
              ),
              placeholder: this.props.strPlaceholder,
              ref: this.descAutoTextAreaRef,
              value: this.props.fnGetCurText(),
              onChange: this.props.fnOnTextChange,
              onDrop: this.OnTextAreaDropListener,
              emoticonStore: this.props.emoticonStore,
              fnSetText: this.props.fnSetText,
              supportBBCodes: this.props.limitBBCode
                ? this.props.limitBBCode
                : _,
            }),
          }),
        ],
      });
    }
  };
(_([_], _.prototype, `ClanImageDragListener`, null),
  _([_], _.prototype, `onFocus`, null),
  _([_], _.prototype, `OnTextAreaDropListener`, null),
  _([_], _.prototype, `GetTextAreaRef`, null),
  (_ = _([_], _)));
var _ = class _ {
    static BIsFireFox() {
      return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
        navigator.userAgent,
      );
    }
    static replaceSelection(_, _) {
      if (!_) return;
      let _ = _.selectionStart;
      (_.focus(),
        _.InsertTextAtSelect(_, _),
        _.setSelectionRange(_, _ + _.length));
    }
    static getSelectedString(_) {
      return _
        ? _.value.substr(_.selectionStart, _.selectionEnd - _.selectionStart)
        : ``;
    }
    static wrapBBCode(_, _, _) {
      if (!_) return;
      let _ = _.getSelectedString(_),
        _ = ``;
      ((_ =
        _.indexOf(_) == 0 && _.lastIndexOf(_) == _.length - _.length
          ? _.substr(_.length, _.length - _.length - _.length)
          : _ + _ + _),
        _.replaceSelection(_, _));
    }
    static append(_, _) {
      _ &&
        (_.focus(),
        _.setSelectionRange(_.value.length, _.value.length),
        _.InsertTextAtSelect(_, _));
    }
    static ClearTextArea(_) {
      if (_) {
        _.focus();
        let _ = _.value.length;
        if (_ !== 0) {
          _.setRangeText
            ? _.setRangeText(``, 0, _, `preserve`)
            : (_.value = ``);
          let _ = new Event(`input`, {
            bubbles: !0,
          });
          _.dispatchEvent(_);
        }
        _.focus();
      }
    }
    static overwrite(_, _) {
      _ && (_.ClearTextArea(_), _.InsertTextAtSelect(_, _));
    }
    static InsertTextAtSelect(_, _) {
      let _ = _.selectionStart,
        _ = _.selectionEnd;
      if (_ !== null && _ !== null) {
        _.setRangeText
          ? _.setRangeText(_, _, _, `preserve`)
          : (_.value = _.value.slice(0, _) + _ + _.value.slice(_));
        let _ = new Event(`input`, {
          bubbles: !0,
        });
        (_.dispatchEvent(_),
          (_.selectionStart = _.selectionEnd = _ + _.length));
      }
      _.focus();
    }
  },
  _ = class extends _.Component {
    m_linkPopupRef = _.createRef();
    onBold() {
      _.wrapBBCode(`[b]`, `[/b]`, this.props.fnTextareaRef()?.current);
    }
    onItalics() {
      _.wrapBBCode(`[i]`, `[/i]`, this.props.fnTextareaRef()?.current);
    }
    onUnderline() {
      _.wrapBBCode(`[u]`, `[/u]`, this.props.fnTextareaRef()?.current);
    }
    onStrikeThrough() {
      _.wrapBBCode(
        `[strike]`,
        `[/strike]`,
        this.props.fnTextareaRef()?.current,
      );
    }
    onHeader() {
      _.wrapBBCode(`[h1]`, `[/h1]`, this.props.fnTextareaRef()?.current);
    }
    onHeader2() {
      _.wrapBBCode(`[h2]`, `[/h2]`, this.props.fnTextareaRef()?.current);
    }
    onHeader3() {
      _.wrapBBCode(`[h3]`, `[/h3]`, this.props.fnTextareaRef()?.current);
    }
    onUnorderedList() {
      this.handleList(`list`);
    }
    onOrderedList() {
      this.handleList(`olist`);
    }
    handleList(_) {
      let _ = this.props.fnTextareaRef()?.current;
      if (!_) return;
      let _ =
          `[` +
          _ +
          `]
`,
        _ = `[/` + _ + `]`;
      if (_.selectionStart == _.selectionEnd)
        _.wrapBBCode(
          _ + `[*]`,
          `
` + _,
          _,
        );
      else {
        let _ =
          _ +
          _.getSelectedString(_)
            .split(`
`)
            .map((_) => (_.match(/\*+\s/) ? `[*]` : `[*] `) + _).join(`
`) +
          `
` +
          _;
        _.replaceSelection(_, _);
      }
    }
    OnAddLink(_) {
      let _ = this.props.fnTextareaRef();
      _ &&
        _(
          (0, _.jsx)(_, {
            textareaRef: _,
          }),
          _(_) ?? window,
        );
    }
    ShowHelpDialog(_) {
      this.props.showFormatHelp &&
        _(
          (0, _.jsx)(_, {
            formatType: this.props.showFormatHelp,
          }),
          _(_) ?? window,
        );
    }
    OnConvertHTMLToBBCodeDialog(_) {
      let _ = this.props.fnTextareaRef();
      if (!_) return;
      let _ = _(_) ?? window;
      _(
        (0, _.jsx)(_, {
          ownerWindow: _,
          textareaRef: _,
        }),
        _,
      );
    }
    OnOpenYoutubeDialog(_) {
      let _ = this.props.fnTextareaRef();
      if (!_) return;
      let _ = _.IMG_URL + `applications/community/`;
      _(
        (0, _.jsx)(_, {
          textareaRef: _,
          pathToImages: _,
        }),
        _(_) ?? window,
      );
    }
    OnOpenImageDialog(_) {
      let _ = this.props.fnTextareaRef();
      _ &&
        _(
          (0, _.jsx)(_, {
            textareaRef: _,
          }),
          _(_) ?? window,
        );
    }
    OnOpenSpeakerDialog(_) {
      let _ = this.props.fnTextareaRef(),
        _ = this.props.clanSteamID;
      _ &&
        _ &&
        _(
          (0, _.jsx)(_, {
            clanSteamID: _,
            textareaRef: _,
          }),
          _(_) ?? window,
        );
    }
    OnEmoticonSelected(_, _ = !1) {
      let _ = `\u02D0${_}\u02D0`;
      (_.replaceSelection(this.props.fnTextareaRef()?.current, _),
        this.props.fnTextareaRef()?.current?.focus());
    }
    BSupports(_) {
      return this.props.supportBBCodes.findIndex((_) => _ == _) >= 0;
    }
    render() {
      let {
          showFormatHelp: _,
          bEmbeddedInDialog: _,
          bSupportHTMLImport: _,
          pathToImages: _,
        } = this.props,
        _;
      return (
        _ &&
          (_ = _
            ? (0, _.jsx)(`span`, {
                className: _(`ttip`, void 0),
                children: (0, _.jsx)(_, {
                  toolTipContent: _(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: (0, _.jsxs)(`a`, {
                    href: _.GetHelpURL(_, !1),
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    children: [
                      (0, _.jsx)(`img`, {
                        src: _ + `/action_help.png`,
                      }),
                      ` `,
                      _(`#EventEditor_FormattingHelp_GetHelpLink`),
                    ],
                  }),
                }),
              })
            : (0, _.jsx)(`span`, {
                onClick: this.ShowHelpDialog,
                className: _(`ttip`, void 0),
                children: (0, _.jsxs)(_, {
                  toolTipContent: _(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: [
                    (0, _.jsx)(`img`, {
                      src: _ + `/action_help.png`,
                    }),
                    ` `,
                    _(`#EventEditor_FormattingHelp_GetHelpLink`),
                  ],
                }),
              })),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            this.BSupports(`b`) &&
              (0, _.jsx)(_, {
                onClick: this.onBold,
                tooltip: _(`#Editor_Bold`),
                imgURL: this.props.pathToImages + `/format_bold.png`,
              }),
            this.BSupports(`u`) &&
              (0, _.jsx)(_, {
                onClick: this.onUnderline,
                tooltip: _(`#Editor_Underline`),
                imgURL: this.props.pathToImages + `/format_underline.png`,
              }),
            this.BSupports(`i`) &&
              (0, _.jsx)(_, {
                onClick: this.onItalics,
                tooltip: _(`#Editor_Italics`),
                imgURL: this.props.pathToImages + `/format_italic.png`,
              }),
            this.BSupports(`strike`) &&
              (0, _.jsx)(_, {
                onClick: this.onStrikeThrough,
                tooltip: _(`#Editor_StrikeThrough`),
                imgURL: this.props.pathToImages + `/format_strike.png`,
              }),
            !(!this.BSupports(`url`) || _) &&
              (0, _.jsx)(_, {
                onClick: this.OnAddLink,
                tooltip: _(`#Editor_Link`),
                imgURL: this.props.pathToImages + `/format_link.png`,
              }),
            this.BSupports(`list`) &&
              (0, _.jsx)(_, {
                onClick: this.onUnorderedList,
                tooltip: _(`#Editor_Unordered`),
                imgURL: this.props.pathToImages + `/format_bullet.png`,
              }),
            this.BSupports(`olist`) &&
              (0, _.jsx)(_, {
                onClick: this.onOrderedList,
                tooltip: _(`#Editor_Ordered`),
                imgURL: this.props.pathToImages + `/format_numbered.png`,
              }),
            this.BSupports(`h1`) &&
              (0, _.jsx)(_, {
                onClick: this.onHeader,
                tooltip: _(`#Editor_Header`),
                imgURL: this.props.pathToImages + `/format_header1.png`,
              }),
            this.BSupports(`h2`) &&
              (0, _.jsx)(_, {
                onClick: this.onHeader2,
                tooltip: _(`#Editor_Header2`),
                imgURL: this.props.pathToImages + `/format_header2.png`,
              }),
            this.BSupports(`h3`) &&
              (0, _.jsx)(_, {
                onClick: this.onHeader3,
                tooltip: _(`#Editor_Header3`),
                imgURL: this.props.pathToImages + `/format_header3.png`,
              }),
            this.BSupports(`previewyoutube`) &&
              (0, _.jsx)(_, {
                onClick: this.OnOpenYoutubeDialog,
                tooltip: _(`#EventEditor_InsertYouTube`),
                imgURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==`,
              }),
            (0, _.jsx)(`span`, {
              className: `ttip`,
              children:
                this.props.emoticonStore &&
                (0, _.jsx)(_, {
                  toolTipContent: _(`#Editor_Emoticon`),
                  children: (0, _.jsx)(_, {
                    title: ` `,
                    className: _(`_5LFNlKLTFJM-`),
                    disabled: !1,
                    OnEmoticonSelected: this.OnEmoticonSelected,
                    rtLastAckedNewEmoticons: Number.MAX_VALUE,
                    emoticonStore: this.props.emoticonStore,
                    useImg: this.props.pathToImages + `/format_emote.png`,
                    contextOptions: {
                      bOverlapHorizontal: !0,
                      bDisablePopTop: !0,
                    },
                  }),
                }),
            }),
            !(!this.BSupports(`img`) || _) &&
              (0, _.jsx)(_, {
                onClick: this.OnOpenImageDialog,
                tooltip: _(`#EventEditor_InsertImage`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !!(
              _.is_support &&
              this.props.clanSteamID &&
              this.BSupports(`speaker`)
            ) &&
              (0, _.jsx)(_, {
                onClick: this.OnOpenSpeakerDialog,
                tooltip: _(`#EventEditor_AddSpeaker`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !(!_ || _) &&
              (0, _.jsx)(_, {
                onClick: this.OnConvertHTMLToBBCodeDialog,
                className: void 0,
                tooltip: _(`#EventEditor_ImportFromHTML_ttip`),
                children: _(`#EventEditor_ImportHTML`),
              }),
            _,
          ],
        })
      );
    }
  };
(_([_], _.prototype, `onBold`, null),
  _([_], _.prototype, `onItalics`, null),
  _([_], _.prototype, `onUnderline`, null),
  _([_], _.prototype, `onStrikeThrough`, null),
  _([_], _.prototype, `onHeader`, null),
  _([_], _.prototype, `onHeader2`, null),
  _([_], _.prototype, `onHeader3`, null),
  _([_], _.prototype, `onUnorderedList`, null),
  _([_], _.prototype, `onOrderedList`, null),
  _([_], _.prototype, `OnAddLink`, null),
  _([_], _.prototype, `ShowHelpDialog`, null),
  _([_], _.prototype, `OnConvertHTMLToBBCodeDialog`, null),
  _([_], _.prototype, `OnOpenYoutubeDialog`, null),
  _([_], _.prototype, `OnOpenImageDialog`, null),
  _([_], _.prototype, `OnOpenSpeakerDialog`, null),
  _([_], _.prototype, `OnEmoticonSelected`, null),
  (_ = _([_], _)));
function _(_) {
  return (0, _.jsx)(`span`, {
    onClick: _.onClick,
    className: _.className,
    children: (0, _.jsxs)(_, {
      toolTipContent: _.tooltip,
      className: `ttip`,
      children: [
        !!_.imgURL &&
          (0, _.jsx)(`img`, {
            src: _.imgURL,
          }),
        _.children,
      ],
    }),
  });
}
var _ = class extends _.Component {
  state = {
    youtubeInput: ``,
    alignment: _.left,
  };
  OnYoutubeInsertLink() {
    let _ = this.state.youtubeInput && _(this.state.youtubeInput);
    if (!_) alert(_(`#EventEditor_InsertYouTube_NoURL`));
    else {
      if (this.state.alignment == _.summary) {
        let _ =
          `https://www.youtube.com/watch?v=` +
          _.strVideoID +
          (_.nStartSeconds ? `&t=` + _.nStartSeconds : ``);
        _.wrapBBCode(_, ``, this.props.textareaRef.current);
      } else {
        let _ =
          `[previewyoutube=` + _.strVideoID + `;` + this.state.alignment + `]`;
        _.wrapBBCode(_, `[/previewyoutube]`, this.props.textareaRef.current);
      }
      this.setState({
        youtubeInput: ``,
        alignment: _.left,
      });
    }
  }
  OnUrlChange(_) {
    this.state.youtubeInput != _.target.value &&
      this.setState({
        youtubeInput: _.target.value,
      });
  }
  OnLeftSelected() {
    this.setState({
      alignment: _.left,
    });
  }
  OnRightSelected() {
    this.setState({
      alignment: _.right,
    });
  }
  OnFullSelected() {
    this.setState({
      alignment: _.full,
    });
  }
  OnSummarySelected() {
    this.setState({
      alignment: _.summary,
    });
  }
  OnOuterDivClickPassDown(_) {}
  render() {
    return (0, _.jsx)(_, {
      strTitle: _(`#EventEditor_InsertYouTube`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnYoutubeInsertLink,
      strOKButtonText: _(`#EventEditor_InsertYouTube`),
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_InsertYouTube_URL`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    ref: (_) => {
                      _?.focus();
                    },
                    type: `text`,
                    value: this.state.youtubeInput,
                    onChange: this.OnUrlChange,
                    placeholder: _(`#EventEditor_InsertYouTube_Placholder`),
                  }),
                }),
              ],
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: `DialogInputLabelGroup`,
            children: [
              (0, _.jsx)(`div`, {
                className: `DialogLabel`,
                children: _(`#EventEditor_InsertYouTube_Position`),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    _: _.left,
                    value: _.left,
                    checked: this.state.alignment == _.left,
                    onChange: this.OnLeftSelected,
                  }),
                  (0, _.jsx)(`label`, {
                    htmlFor: _.left,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#EventEditor_InsertYouTube_Left`),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    _: _.right,
                    value: _.right,
                    checked: this.state.alignment == _.right,
                    onChange: this.OnRightSelected,
                  }),
                  (0, _.jsx)(`label`, {
                    htmlFor: _.right,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#EventEditor_InsertYouTube_Right`),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    _: _.full,
                    value: _.full,
                    checked: this.state.alignment == _.full,
                    onChange: this.OnFullSelected,
                  }),
                  (0, _.jsx)(`label`, {
                    htmlFor: _.full,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#EventEditor_InsertYouTube_Full`),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    _: _.summary,
                    value: _.summary,
                    checked: this.state.alignment == _.summary,
                    onChange: this.OnSummarySelected,
                  }),
                  (0, _.jsx)(`label`, {
                    htmlFor: _.summary,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#EventEditor_InsertYouTube_Summary`),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
};
(_([_], _.prototype, `OnYoutubeInsertLink`, null),
  _([_], _.prototype, `OnUrlChange`, null),
  _([_], _.prototype, `OnLeftSelected`, null),
  _([_], _.prototype, `OnRightSelected`, null),
  _([_], _.prototype, `OnFullSelected`, null),
  _([_], _.prototype, `OnSummarySelected`, null),
  _([_], _.prototype, `OnOuterDivClickPassDown`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  static {
    _ = this;
  }
  state = {
    textToDisplay: ``,
    strURL: ``,
  };
  static m_regExp = new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i);
  LoadFromTextArea() {
    let { textareaRef: _ } = this.props;
    if (_ && _.current) {
      let _ = _.getSelectedString(_.current),
        _ = _.m_regExp.exec(_);
      _
        ? this.setState({
            strURL: _[1],
            textToDisplay: _[2],
          })
        : this.setState({
            textToDisplay: _,
          });
    }
  }
  componentDidMount() {
    this.LoadFromTextArea();
  }
  onLinkTitleUpdate(_) {
    this.setState({
      textToDisplay: _.target.value,
    });
  }
  onLinkURLUpdate(_) {
    this.setState({
      strURL: _.target.value,
    });
  }
  onInsertLink() {
    let { strURL: _, textToDisplay: _ } = this.state,
      _ = `[url=` + _ + `]` + _ + `[/url]`;
    _.replaceSelection(this.props.textareaRef.current, _);
  }
  render() {
    return (0, _.jsx)(_, {
      strTitle: _(`#Editor_Link`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onOK: this.onInsertLink,
      onCancel: this.props.closeModal,
      strOKButtonText: _(`#EventEditor_InsertLinkURL`),
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_LinkDescription`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkTitleUpdate,
                    value: this.state.textToDisplay,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_LinkURL`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkURLUpdate,
                    value: this.state.strURL,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
};
(_([_], _.prototype, `onLinkTitleUpdate`, null),
  _([_], _.prototype, `onLinkURLUpdate`, null),
  _([_], _.prototype, `onInsertLink`, null),
  (_ = _ = _([_], _)));
var _ = class extends _.Component {
  refFirstInput = _.createRef();
  state = {
    imgURL: ``,
    anchorURL: ``,
  };
  componentDidMount() {
    this.refFirstInput.current?.focus();
  }
  OnImageInsert() {
    let { anchorURL: _, imgURL: _ } = this.state,
      _ = ``,
      _ = ``;
    (_ && _.length > 0 && ((_ += `[url=` + _ + `]`), (_ = `[/url]` + _)),
      (_ += `[img]` + _),
      (_ = `[/img]` + _),
      _.wrapBBCode(_, _, this.props.textareaRef.current));
  }
  OnImageURLChange(_) {
    this.state.imgURL != _.target.value &&
      this.setState({
        imgURL: _.target.value,
      });
  }
  OnAnchorURLChange(_) {
    this.state.anchorURL != _.target.value &&
      this.setState({
        anchorURL: _.target.value,
      });
  }
  render() {
    let { imgURL: _, anchorURL: _ } = this.state;
    return (0, _.jsx)(_, {
      strTitle: _(`#EventEditor_InsertImage_Title`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnImageInsert,
      strOKButtonText: _(`#EventEditor_InsertImage_Title`),
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`p`, {
            children: _(`#EventEditor_InsertImage_Desc`),
          }),
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_InsertImage_URL`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: _,
                    onChange: this.OnImageURLChange,
                    placeholder: _(`#EventEditor_InsertImage_Placeholder`),
                    ref: this.refFirstInput,
                  }),
                }),
              ],
            }),
          }),
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_InsertImage_Anchor`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: _,
                    onChange: this.OnAnchorURLChange,
                    placeholder: _(`#EventEditor_InsertImage_Placeholder`),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
};
(_([_], _.prototype, `OnImageInsert`, null),
  _([_], _.prototype, `OnImageURLChange`, null),
  _([_], _.prototype, `OnAnchorURLChange`, null),
  (_ = _([_], _)));
var _ = (_) => {
  let [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    { data: _ } = _(),
    { isLoading: _, data: _ } = _(_?.GetAccountID()),
    _ = () => {
      let _ = `[speaker name="${_.trim()}"`;
      if (
        (_.trim().length > 0 && (_ += ` title="${_}"`),
        _.trim().length > 0 && (_ += ` company="${_}"`),
        _)
      ) {
        let _ = _ + `/` + _.clanAccountID + `/` + _.GetHashAndExt(_);
        _ += ` photo="${_}"`;
      }
      (_ && (_ += ` steamid="${_.ConvertTo64BitString()}"`),
        (_ += `]${_}[/speaker]`),
        _.replaceSelection(_.textareaRef.current, _));
    },
    _ = _.trim().length != 0 && _.trim().length != 0;
  return (0, _.jsx)(_, {
    strTitle: _(`#EventEditor_AddSpeaker`),
    strDescription: _(`#EventEditor_AddSpeaker_Desc`),
    closeModal: _.closeModal,
    onCancel: _.closeModal,
    bOKDisabled: !_,
    onOK: _,
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          type: `text`,
          label: _(`#EventEditor_AddSpeaker_Name`),
          value: _,
          onChange: (_) => _(_.target.value),
          focusOnMount: !0,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              type: `text`,
              label: _(`#EventEditor_AddSpeaker_Title`),
              value: _,
              onChange: (_) => _(_.target.value),
            }),
            (0, _.jsx)(_, {
              type: `text`,
              label: _(`#EventEditor_AddSpeaker_Company`),
              value: _,
              onChange: (_) => _(_.target.value),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          toolTipContent: _(`#EventEditor_AssociateSteamAccount_ttip`),
          children: (0, _.jsxs)(`div`, {
            className: `DialogLabel`,
            children: [_(`#EventEditor_AssociateSteamAccount`), ` (?)`],
          }),
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _ &&
              (0, _.jsx)(_, {
                string: _(`#Loading`),
                size: `small`,
              }),
            _ &&
              _ &&
              (0, _.jsxs)(`a`, {
                href:
                  _.COMMUNITY_BASE_URL + `profiles/` + _.ConvertTo64BitString(),
                target: `_blank`,
                children: [
                  _
                    ? (0, _.jsx)(`img`, {
                        style: {
                          marginRight: `8px`,
                        },
                        src: _.avatar_url,
                      })
                    : null,
                  _ ? _.m_strPlayerName : null,
                ],
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  onClick: () => _(new _(_.steamid)),
                  children: _(`#EventEditor_SteamAccount_addme`),
                }),
                (0, _.jsx)(_, {
                  onClick: (_) =>
                    _(
                      (0, _.jsx)(_, {
                        friends: _ ?? [],
                        setSteamID: _,
                      }),
                      _,
                    ),
                  children: _(`#EventEditor_SteamAccount_addfriend`),
                }),
                (0, _.jsx)(_, {
                  onClick: () => _(void 0),
                  children: _(`#EventEditor_SteamAccount_clear`),
                }),
              ],
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: `DialogLabel`,
              children: _(`#EventEditor_ChoosePhoto`),
            }),
            (0, _.jsx)(_, {
              clanSteamID: _.clanSteamID,
              inputClanImage: _,
              setImage: _,
              nWidth: 184,
              nHeight: 184,
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: `DialogLabel`,
              children: _(`#EventEditor_AddSpeaker_About`),
            }),
            (0, _.jsx)(_, {
              value: _,
              onChange: (_) => _(_.target.value),
              rows: 8,
              cols: 80,
              nMinHeight: 40,
              placeholder: _(`#EventEditor_AddSpeaker_About_Placeholder`),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: `DialogLabel`,
              children: _(`#Button_Preview`),
            }),
            (0, _.jsx)(_, {
              company: _,
              name: _,
              title: _,
              bioString: _,
              photo: _ ? _.url : void 0,
            }),
          ],
        }),
      ],
    }),
  });
};
function _(_) {
  let { friends: _, setSteamID: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          steamid: _,
          setSteamID: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { steamid: _, setSteamID: _ } = _,
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    onSelected: () => _(new _(_)),
    children: (0, _.jsxs)(`div`, {
      style: {
        display: `flex`,
        alignItems: `center`,
      },
      children: [
        _ &&
          (0, _.jsx)(`img`, {
            className: `SZCLgazwykY-`,
            src: _.avatar_url,
          }),
        _?.m_strPlayerName,
      ],
    }),
  });
}
var _ = class extends _.Component {
  m_isMounted = !1;
  m_bAppend = !1;
  constructor(_) {
    (super(_),
      (this.state = {
        bPreserveNewLines: !1,
        strHTMLData: ``,
      }));
  }
  componentDidMount() {
    this.m_isMounted = !0;
  }
  componentWillUnmount() {
    this.m_isMounted = !1;
  }
  OnConvertAndOverriteHTML() {
    ((this.m_bAppend = !1), this.ConvertBBCode());
  }
  OnConvertAndAppendHTML() {
    ((this.m_bAppend = !0), this.ConvertBBCode());
  }
  async ConvertHtmlToBBCode(_, _) {
    let _ = new URLSearchParams();
    return (
      _.append(`content`, _),
      _.append(`preserve_newlines`, _ ? `1` : `0`),
      (
        await _.default.post(
          _.COMMUNITY_BASE_URL + `/actions/ConvertHTMLToBBCode`,
          _,
        )
      ).data.content
    );
  }
  ConvertBBCode() {
    (this.setState({
      bConverting: !0,
    }),
      this.ConvertHtmlToBBCode(
        this.state.strHTMLData,
        this.state.bPreserveNewLines,
      )
        .then((_) => {
          this.m_isMounted &&
            (this.m_bAppend
              ? _.append(_, this.props.textareaRef.current)
              : _.overwrite(_, this.props.textareaRef.current),
            this.setState({
              bConverting: !1,
              bFinishedConverting: !0,
            }));
        })
        .catch((_) => {
          _(
            (0, _.jsx)(_, {
              strTitle: _(`#EventEditor_ConvertHTML_Error`),
              strDescription: _(
                `#EventEditor_ConvertHTML_Error_Desc`,
                _.response && _.response.data ? _.response.data.msg : _,
              ),
              bAlertDialog: !0,
              bDestructiveWarning: !0,
            }),
            this.props.ownerWindow,
            {
              strTitle: _(`#EventEditor_ConvertHTML_Error`),
            },
          );
        }));
  }
  OnCheckboxChange(_) {
    let _ = _.target.checked;
    _ != this.state.bPreserveNewLines &&
      this.setState({
        bPreserveNewLines: _,
      });
  }
  OnTextAreaChange(_) {
    this.setState({
      strHTMLData: _.currentTarget.value,
    });
  }
  render() {
    let { closeModal: _ } = this.props;
    return this.state.bConverting
      ? (0, _.jsx)(_, {
          strTitle: _(`#EventEditor_ImportFromHTML`),
          strDescription: _(`#EventEditor_ImportFromHTML_ConversionInProgress`),
          closeModal: _,
          bAlertDialog: !0,
          onOK: _,
          onCancel: _,
          children: (0, _.jsx)(_, {}),
        })
      : this.state.bFinishedConverting
        ? (0, _.jsx)(_, {
            strTitle: _(`#EventEditor_ImportFromHTML`),
            strDescription: _(`#EventEditor_ImportFromHTML_ConvertFinished`),
            closeModal: _,
            bAlertDialog: !0,
            onOK: _,
            onCancel: _,
          })
        : (0, _.jsx)(_, {
            title: _(`#EventEditor_ImportFromHTML`),
            onOK: this.OnConvertAndOverriteHTML,
            onCancel: _,
            className: _,
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  children: (0, _.jsxs)(`div`, {
                    className: _(_, _),
                    children: [
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: _(
                          `#EventEditor_ImportFromHTML_ConvertDescription`,
                          (0, _.jsx)(`a`, {
                            target: _.IN_CLIENT ? void 0 : `_blank`,
                            href: `https://partner.steamgames.com/doc/marketing/event_tools/import`,
                            children: _(
                              `#EventEditor_ImportFromHTML_ConvertLearn`,
                            ),
                          }),
                        ),
                      }),
                      (0, _.jsx)(`textarea`, {
                        value: this.state.strHTMLData,
                        placeholder: _(
                          `#EventEditor_ImportFromHTML_Instruction`,
                        ),
                        className: _,
                        onChange: this.OnTextAreaChange,
                        ref: (_) => {
                          _?.focus();
                        },
                      }),
                      (0, _.jsxs)(`div`, {
                        className: _,
                        children: [
                          (0, _.jsx)(`input`, {
                            _: `ImportFromHTMLNewLines`,
                            type: `checkbox`,
                            checked: this.state.bPreserveNewLines,
                            onChange: this.OnCheckboxChange,
                          }),
                          (0, _.jsxs)(`label`, {
                            htmlFor: `ImportFromHTMLNewLines`,
                            children: [
                              _(`#EventEditor_ImportFromHTML_PreserveNewlines`),
                              (0, _.jsx)(_, {
                                tooltip: _(
                                  `#EventEditor_ImportFromHTML_PreserveNewlines_Hint`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsx)(`div`, {
                        children: _(
                          `#EventEditor_ImportFromHTML_ConvertToBBCode`,
                        ),
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    onCancel: () => _?.(),
                    strOKText: _(`#Button_Overwrite`),
                    onUpdate: this.OnConvertAndAppendHTML,
                    strUpdateText: _(`#Button_Append`),
                  }),
                }),
              ],
            }),
          });
  }
};
(_([_], _.prototype, `OnConvertAndOverriteHTML`, null),
  _([_], _.prototype, `OnConvertAndAppendHTML`, null),
  _([_], _.prototype, `OnCheckboxChange`, null),
  _([_], _.prototype, `OnTextAreaChange`, null),
  (_ = _([_], _)));
