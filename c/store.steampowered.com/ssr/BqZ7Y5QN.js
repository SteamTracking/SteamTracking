var _ = _(_(), 1),
  _ = () => (_.EUNIVERSE === 2 ? 2581 : 45267781),
  _ = _.createContext({
    bCanUseLink: !1,
  }),
  _ = _(),
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
  let _ = _(window.location.href) == `news`;
  switch ((_.GetEventType(), _.appid, _)) {
    case `view`:
      return _ && !_();
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
      return _;
    case `storeview`:
      return _ && !_();
    case `newshub`:
    case `store`:
    case `usernewshub`:
      return _;
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
