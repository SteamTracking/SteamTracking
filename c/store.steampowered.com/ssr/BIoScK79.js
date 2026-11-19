var _ = _(_(), 1);
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(
    () => (_ ? (_.item_type == 0 ? [_.appid] : _.included_appids || []) : []),
    [_],
  );
}
function _(_) {
  if (!_?.length) return [];
  let _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
  return Array.from(new Set(_));
}
function _(_) {
  let { data: _ } = _({
    appid: _,
  });
  return _?.appid || _;
}
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(() => {
    if (_ && _.related_items && _.related_items.parent_appid)
      return {
        appid: _.related_items.parent_appid,
      };
  }, [_]);
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            appid: _,
          }
        : void 0,
    [_],
  );
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            packageid: _,
          }
        : void 0,
    [_],
  );
}
function _(_) {
  return _
    ? !!(
        _.related_items &&
        _.related_items.standalone_demo_appid &&
        _.related_items.standalone_demo_appid.length > 0 &&
        _.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function _(_) {
  return !_ || !_.related_items?.standalone_demo_appid
    ? []
    : _.related_items?.standalone_demo_appid;
}
function _(_, _ = !1) {
  if (_)
    return _ && _(_)
      ? `${_.STORE_BASE_URL}app/${_(_)[0]}`
      : `${_.STORE_BASE_URL}${_.store_url_path}`;
}
function _() {
  window.location.href = `${_.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var _ = {};
((_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = _(_(), 1);
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
function _(_) {
  return _?.clan_steamid ? _(new _(_.clan_steamid), _) : null;
}
var _ = 100;
async function _(_, _) {
  let _ = new URLSearchParams();
  (_.set(`event_gids`, [...new Set(_)].sort().join(`,`)),
    _.set(`lang_list`, _(_)),
    _.set(`origin`, location.origin));
  let _ =
      _.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + _.toString(),
    _ = await fetch(_);
  if (_.status === 204) return _.map(() => null);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json(),
    _ = new Map((_.events ?? []).map((_) => [_.gid, _]));
  return _.map((_) => _.get(_) ?? null);
}
function _(_) {
  return _(
    [`PublicPartnerEventBrowser`, _],
    () =>
      new _.default((_) => _(_, _), {
        maxBatchSize: _,
        cache: !1,
      }),
  );
}
function _(_, _) {
  return [`PublicPartnerEvent`, _, _];
}
function _(_, _, _) {
  return {
    queryKey: _(_, _),
    queryFn: async () => (_ ? _.load(_) : (await _([_], _))[0]),
    select: _,
    enabled: !!_,
    staleTime: 6e5,
  };
}
function _(_) {
  let _ = _(_.LANGUAGE),
    _ = _(_);
  return _(_(_, _, _));
}
var _ = _(_(), 1),
  _ = `hPsW-TmIboA-`,
  _ = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`,
  _ = _();
function _(_, _ = `Y`) {
  let [_, _] = _.useState(!1),
    _ = _.useCallback((_) => _(_ && !!_), [_]),
    _ = _.useCallback(() => {
      _ && _.length !== 0 && (window.location.href = _);
    }, [_]);
  return {
    bShowSeeMoreHint: _,
    panelProps:
      _ == `X`
        ? {
            onFocusWithin: _,
            onSecondaryButton: _,
          }
        : {
            onFocusWithin: _,
            onOptionsButton: _,
          },
  };
}
function _(_) {
  let { label: _, shown: _, button: _ = `Y` } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `_2OCGxajf8LE-`),
    children: [
      _ == `X`
        ? (0, _.jsx)(_, {
            button: `X`,
            "aria-label": `X`,
          })
        : (0, _.jsx)(`img`, {
            src: _,
            alt: `Y`,
          }),
      (0, _.jsx)(`div`, {
        children: _,
      }),
    ],
  });
}
var _ = `_3lM16ZMiAi0-`,
  _ = `eeMMdYhT1AE-`,
  _ = `RQ3wfrgT8fE-`,
  _ = `JeiT-ipAnhA-`,
  _ = `lb5Katjf2SE-`;
function _(_, _) {
  return (
    _.GetWithFallback(_.localized_label, _) ||
    (_.default_label === `#Sale_default_label` ? `` : _(_.default_label))
  );
}
function _(_) {
  if (_(_.section_type))
    switch (_(_)) {
      case `deck_topplayed`:
        return _.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return _.label_link;
}
function _(_) {
  let _,
    _,
    _ = !1;
  return (
    _.label_link_style === `button`
      ? ((_ = _(`#Sale_SectionLink_BrowseAll`)), (_ = !0))
      : _.label_link_style === `browseall`
        ? ((_ = _(`#Sale_SectionLink_BrowseAll`)),
          (_ = _(_, `SaleSectionLabelLinkButton`)))
        : _(_) === `deck_topplayed` &&
          ((_ = _(`#EventBrowse_MoreEventsBtn`)),
          (_ = _(_, `SaleSectionLabelLinkButton`))),
    {
      strLinkButtonLabel: _,
      strLinkButtonClasses: _,
      bSmallButton: _,
    }
  );
}
var _ = _((_) => {
  let {
      section: _,
      event: _,
      language: _,
      nHiddenCapsules: _,
      title: _,
      subtitle: _,
      bShowSeeMoreHint: _,
      bUseGamepadLinkHint: _,
      eGamepadLinkHintButton: _,
      onLinkResolved: _,
      personalizedCarousels: _,
      promotedSale: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _ !== void 0,
    { data: _ } = _(_ ? void 0 : _(_)),
    _ = (_ ? _ : _) ?? void 0,
    _ = _.link || _(_) || _(_);
  if (
    (_.useEffect(() => {
      _?.(_);
    }, [_, _]),
    _.section_type == `title_image` && _.title_image_selected === `image`)
  )
    return null;
  let _ = _ || _(_, _, _, _.clanSteamID.GetAccountID(), _.eLocation, !1, _, _);
  if (!_) return null;
  let _ = _ || _(_, _, _, _),
    _ = (0, _.jsxs)(`div`, {
      className: _(_, `SaleSectionHeader`),
      style: _(_, _, _),
      children: [
        _.test_show_on_valve_ip_only &&
          (0, _.jsx)(`div`, {
            className: `_4JoKEAzUxww-`,
            children: `(VO)\xA0`,
          }),
        _,
      ],
    }),
    _ = (0, _.jsx)(`div`, {
      className: _(_, _, `SaleSectionSubtitle`),
      style: _(_, _, _),
      children: _,
    }),
    _ = null;
  if ((_?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: _,
      strLinkButtonClasses: _,
      bSmallButton: _,
    } = _(_);
    (_ &&
      (_ =
        _ && _
          ? (0, _.jsx)(_, {
              label: _,
              shown: !!_,
              button: _,
            })
          : _
            ? (0, _.jsx)(`div`, {
                className: _(_, _),
                children: (0, _.jsx)(_, {
                  url: _,
                  children: (0, _.jsx)(_, {
                    children: _,
                  }),
                }),
              })
            : (0, _.jsx)(_, {
                url: _,
                className: _,
                children: _,
              })),
      (_ = (0, _.jsx)(_, {
        url: _,
        bFocusable: !_,
        children: _,
      })));
  }
  return (0, _.jsxs)(`div`, {
    className: _(_, `SaleSectionLabelCtn`),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [_, !!_ && _],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(_, {
              className: `Wv8qMEsrmW0-`,
              toolTipContent: _(`#Sale_HiddenItem_Tooltip`),
              children: (0, _.jsx)(`a`, {
                href: _.STORE_BASE_URL + `account/preferences`,
                children: _(
                  _ == 1
                    ? `#Sale_HiddenItem_Single_Short`
                    : `#Sale_HiddenItems_Short`,
                  _,
                ),
              }),
            }),
          _,
        ],
      }),
    ],
  });
});
function _(_, _, _) {
  return {
    fontFamily: _.jsondata.sale_font ? _(_.jsondata.sale_font, _) : void 0,
    fontWeight: _.jsondata.sale_font_weight,
    fontSize: `${_.jsondata.sale_section_font_size}px`,
    textTransform: _.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: _.label_color,
  };
}
function _(_, _, _) {
  return {
    fontFamily: _.jsondata.sale_font ? _(_.jsondata.sale_font, _) : void 0,
    fontWeight: 300,
    fontSize: `${_.jsondata.sale_section_font_size && _.jsondata.sale_section_font_size - 3}px`,
    letterSpacing: 0,
    lineHeight: `${_.jsondata.sale_section_font_size}px`,
    textTransform: _.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: _.label_color,
    opacity: `50%`,
  };
}
function _(_, _) {
  return (
    (_ ||= ``),
    _ === 12
      ? _.replace(`Jolly Lodger`, `New Rocker`)
      : _ === 23 || _ === 19 || _ === 24 || _ === 18 || _ === 8 || _ === 26
        ? _.replace(`Sigmar One`, `Play`)
        : _ === 6
          ? _.replace(`Sigmar One`, `Noto Serif SC`)
          : _ === 7
            ? _.replace(`Sigmar One`, `Noto Serif TC`)
            : _ === 10
              ? _.replace(`Sigmar One`, `M PLUS Rounded 1c`)
              : _ === 4
                ? _.replace(`Sigmar One`, `Black Han Sans`)
                : _ === 9
                  ? _.replace(`Sigmar One`, `Prompt`)
                  : _
  );
}
function _(_) {
  let { closeModal: _, strDescOverride: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: _ || _.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: _,
    strOKButtonText: _.Localize(`#Button_OK`),
    onOK: () => {
      (_(), _());
    },
  });
}
function _(_) {
  let [_, _, _] = _();
  return {
    elDialogElement: (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        closeModal: _,
        strDescOverride: _,
      }),
    }),
    fnShowLogonDialog: _,
  };
}
function _(_) {
  let { label: _, strDialogDesc: _ } = _,
    { elDialogElement: _, fnShowLogonDialog: _ } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClick: _,
        children: _ || _.Localize(`#Login_SignIn`),
      }),
      _,
    ],
  });
}
function _(_, _ = {}) {
  let _ = _(_);
  return !!(
    _.section_type == `discoveryqueue` ||
    _.section_type == `dlc_for_you` ||
    _.section_type == `claim_item` ||
    (_(_.section_type) &&
      _(_) &&
      (_ == `wishlist` ||
        _ == `interactive_recommender` ||
        _ == `personalized_carousel` ||
        _ == `dlc_music_onsale` ||
        _ == `ir_subscription` ||
        ((_ == `deck_compatibility` || _ == `frame_compatibility`) &&
          _.smart_section_data_source != `popularity`) ||
        (_ == `wishlist_onsale` && !_.bHideWishlist) ||
        (_ == `dlc_onsale` && !_.bHideDLC) ||
        (_ == `interactive_recommender_onsale` && !_.bHideIRList)))
  );
}
function _(_) {
  let { section: _, event: _ } = _,
    _ = _();
  return (0, _.jsxs)(_, {
    className: _,
    style: _(_, _, _),
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [_(`#SalePage_LoginPrompt`), (0, _.jsx)(_, {})],
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`button`, {
    onClick: () => _(),
    className: _,
    children: _(`#Login_SignIn`),
  });
}
function _(_) {
  let { children: _, ..._ } = _,
    _ = _.useRef(null);
  return (0, _.jsx)(_, {
    nodeRef: _,
    ..._,
    children: _.children(_),
  });
}
function _(_) {
  let {
      className: _,
      url: _,
      style: _,
      children: _,
      bSkipForcingStoreLink: _,
      bOpenInline: _,
      bFocusable: _ = !0,
      fnCanTakeFocus: _,
    } = _,
    _ = _ ? _ : _ ? _(_, _.STORE_BASE_URL) : void 0,
    _ = _(_);
  return _
    ? (0, _.jsx)(_, {
        href: _,
        target: _.IN_CLIENT || _ ? void 0 : `_blank`,
        className: _,
        style: _,
        rel: `noopener noreferrer`,
        focusable: _,
        fnCanTakeFocus: _,
        children: _,
      })
    : (0, _.jsx)(`span`, {
        style: _,
        className: _,
        children: _,
      });
}
function _(_, _) {
  try {
    let _ = new URL(_),
      _ = new URL(_);
    return _.href.replace(/\/$/, ``) + _.pathname + _.search + _.hash;
  } catch {
    return ``;
  }
}
function _(_) {
  let { section: _ } = _;
  return !_.label_link || _.label_link_style
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          url: _.label_link,
          children: _.Localize(`#btn_live_streams_all`),
        }),
      });
}
