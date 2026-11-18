var _ = `Yld-UJVw0gs-`,
  _ = `_6R22gkpEXq0-`,
  _ = `RbY0ql6pF5c-`,
  _ = `QGFP3JDyYcc-`,
  _ = `D2lp-s8nCAk-`,
  _ = `tExF7yi7GM8-`,
  _ = `YhJL2MKYWd8-`,
  _ = `-yzBBQ5kAHk-`,
  _ = `_3qv-mCCE8jA-`,
  _ = `yffCiHvxrYk-`,
  _ = `yfheHs-klX8-`,
  _ = `u-DF8k7eUpw-`,
  _ = `g5K2la-jusM-`,
  _ = `lV39hzwSIkY-`;
function _(_) {
  return (
    (_.gid == null || _.gid == null || _.gid == `0`) &&
    !!_.announcement_body &&
    _.announcement_body.gid != `0`
  );
}
function _(_) {
  return _(_) ? _ + _.announcement_body?.gid : _.gid;
}
function _(_, _) {
  let _ = new _();
  if (
    ((_.clanSteamID = _),
    _(
      _.clanSteamID && _.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        _.clanSteamID.ConvertTo64BitString() +
        ` ` +
        _.EUNIVERSE,
    ),
    (_.GID = _(_)),
    (_.bOldAnnouncement = _(_)),
    (_.appid = _.appid ?? 0),
    (_.createTime = _.rtime_created),
    (_.startTime = _.rtime32_start_time),
    (_.endTime = _.rtime32_end_time),
    (_.visibilityStartTime = _.rtime32_visibility_start),
    (_.visibilityEndTime = _.rtime32_visibility_end),
    (_.loadedAllLanguages = !1),
    (_.type = _.event_type ?? 1),
    (_.nVotesUp = _.votes_up ?? 0),
    (_.nVotesDown = _.votes_down ?? 0),
    (_.comment_type = _.comment_type),
    (_.gidfeature = _.gidfeature),
    (_.gidfeature2 = _.gidfeature2),
    (_.featured_app_tagid = _.featured_app_tagid),
    (_.vecTags = []),
    (_.creator_steamid = _.creator_steamid),
    (_.last_update_steamid = _.last_update_steamid),
    (_.rtime32_last_modified = _.rtime32_last_modified),
    (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
    (_.video_preview_type = _.video_preview_type),
    (_.video_preview_id = _.video_preview_id),
    (_.has_live_stream = _.has_live_stream),
    (_.live_stream_viewer_count = _.live_stream_viewer_count),
    (_.m_nBuildID = _.build_id),
    (_.m_strBuildBranch = _.build_branch),
    _.announcement_body)
  ) {
    let _ = _.announcement_body;
    ((_.AnnouncementGID = _.gid),
      _.name.set(_.language, _.headline),
      _.description.set(_.language, _.body),
      _.timestamp_loc_updated.clear(),
      (_.forumTopicGID = _.forum_topic_id),
      (_.nCommentCount = _.commentcount),
      (_.postTime = _.posttime),
      _.bOldAnnouncement && !_.hidden && (_.startTime = _.posttime),
      (_.announcementClanSteamID = new _(_.clanid)),
      _.tags && _.tags.length > 0 && _.tags.forEach((_) => _.vecTags.push(_)),
      !_.rtime32_last_solr_search_col_updated &&
        _.rtime32_last_modified &&
        ((_.rtime32_last_solr_search_col_updated = _.rtime32_last_modified),
        (_.rtime32_last_modified = _.updatetime)));
  } else
    ((_.AnnouncementGID = `0`),
      (_.forumTopicGID = _.forum_topic_id),
      _.name.clear(),
      _.description.clear(),
      _.timestamp_loc_updated.clear(),
      (_.postTime = _.rtime32_start_time),
      (_.nCommentCount = _.comment_count ?? 0),
      _.name.set(0, _.event_name ?? ``),
      _.description.set(0, _.event_notes ?? ``));
  _.broadcaster_accountid && (_.broadcaster = new _(_.broadcaster_accountid));
  let _ = _;
  try {
    _.jsondata = {
      ..._,
      ...(_.jsondata ? JSON.parse(_.jsondata) : void 0),
    };
  } catch (_) {
    let _ = _(_);
    throw (
      console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          _.strErrorMsg,
        _,
      ),
      _
    );
  }
  if (
    ((_.jsondata.localized_capsule_image = _(
      _.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_title_image = _(
      _.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_subtitle = _(
      _.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (_.jsondata.localized_summary = _(
      _.jsondata.localized_summary || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_title = _(
      _.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_left_image = _(
      _.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_right_image = _(
      _.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_header = _(
      _.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_overlay = _(
      _.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_product_banner = _(
      _.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_product_mobile_banner = _(
      _.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_logo = _(
      _.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    _.jsondata.sale_num_headers !== void 0 &&
      _.jsondata.localized_per_day_sales_header)
  )
    for (let _ = 0; _ < _.jsondata.sale_num_headers; ++_)
      _.jsondata.localized_per_day_sales_header[_] = _(
        _.jsondata.localized_per_day_sales_header[_],
        32,
        null,
      );
  return (
    _(_.jsondata),
    _.jsondata.email_setting &&
      _.jsondata.email_setting.sections &&
      _.jsondata.email_setting.sections.forEach((_) => {
        (_.localized_headline !== void 0 &&
          _.localized_headline !== null &&
          (_.localized_headline = _(_.localized_headline, 32, null)),
          _.localized_body !== void 0 &&
            _.localized_body !== null &&
            (_.localized_body = _(_.localized_body, 32, null)),
          _.localized_image !== void 0 &&
            _.localized_image !== null &&
            (_.localized_image = _(_.localized_image, 32, null)));
      }),
    _.jsondata.localized_title_image.forEach((_, _) => {
      if (_ != null && _.substr(0, 4) == `http`) {
        let _ = _.lastIndexOf(`/`),
          _ = _.substr(_ + 1);
        _.jsondata.localized_title_image[_] = _;
      }
    }),
    (_.bLoaded = !0),
    (_.visibility_state = _.published
      ? _.unlisted
        ? _.k_EEventStateUnlisted
        : _.hidden
          ? _.k_EEventStateStaged
          : _.k_EEventStateVisible
      : _.k_EEventStateUnpublished),
    _
  );
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
function _() {}
