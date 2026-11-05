function _(_, _) {
  switch (_) {
    case 1:
      return _.mtx_tags ?? [];
    case 0:
      return _.readytouse_tags ?? [];
    case 2:
      return _.collection_tags ?? [];
    case 4:
      return _.video_tags ?? [];
    case 11:
      return _.merch_tags ?? [];
    case 3:
      return _.image_tags ?? [];
    case 9:
    case 10:
      return _.guide_tags ?? [];
    case 5:
      return _.screenshot_tags ?? [];
  }
  return _.declared_tags ?? [];
}
var _ = _(_(), 1),
  _ = [
    `accepted`,
    `trend`,
    `mostrecent`,
    `lastupdated`,
    `textsearch`,
    `torate`,
    `num_parent_collections`,
  ],
  _ = [
    `trend`,
    `toprated`,
    `mostrecent`,
    `lastupdated`,
    `textsearch`,
    `totaluniquesubscribers`,
    `playtime_trend`,
    `playtime_average_trend`,
    `playtime_trend_total`,
    `playtime_average_trend_total`,
    `playtime_sessions_trend`,
    `playtime_sessions_lifetime`,
    `num_parent_items`,
    `num_parent_collections`,
  ],
  _ = [`accepted`, `trend`, `toprated`, `mostrecent`, `textsearch`],
  _ = [
    `accepted`,
    `trend`,
    `toprated`,
    `mostrecent`,
    `lastupdated`,
    `textsearch`,
  ],
  _ = [`trend`, `toprated`, `mostrecent`, `lastupdated`, `textsearch`],
  _ = [`nominee`, `mostrecent`, `toprated`, `reported`, `textsearch`],
  _ = [
    `trend`,
    `toprated`,
    `reported`,
    `curatedadmin`,
    `mostupvotes`,
    `totalvotes`,
    `inappropriate_rating`,
    `ban_content_check`,
  ];
function _(_, _) {
  let _ = [];
  switch (_) {
    case `mtxitems`:
      _ = [..._];
      break;
    case `readytouseitems`:
      _ = [..._];
      break;
    case `collections`:
      _ = [..._];
      break;
    case `merchandise`:
      _ = [..._];
      break;
    case `videos`:
      _ = [..._];
      break;
    case `guides`:
    case `webguides`:
    case `integratedguides`:
      _ = [..._];
  }
  return _ && (_ = _.concat(_)), _;
}
function _(_, _) {
  let _ = [0];
  switch ((_.logged_in && (_ = [..._, 3, 4, 2]), _)) {
    case `mtxitems`:
      _ = [..._, 1, 7];
      break;
    case `merchandise`:
    case `collections`:
      _ = [..._, 1];
      break;
    case `readytouseitems`:
      _ = [..._, 6, 7];
  }
  return _ && (_ = [..._, 5]), _;
}
function _(_) {
  let _ = new URLSearchParams();
  return (
    _.appid && _.set(`appid`, _.appid.toString()),
    _.browse_sort &&
      _.browse_sort.trim().length > 0 &&
      _.set(`browsesort`, _.browse_sort),
    _.section && _.section.trim().length > 0 && _.set(`section`, _.section),
    _.page && _.page > 0 && _.set(`p`, _.page.toString()),
    _.num_per_page &&
      _.num_per_page != 0 &&
      _.set(`num_per_page`, _.num_per_page.toString()),
    _.trend_days && _.trend_days != 0 && _.set(`days`, _.trend_days.toString()),
    _.search_text &&
      _.search_text.trim().length > 0 &&
      _.set(`searchtext`, _.search_text.trim()),
    _.search_text_target &&
      _.set(`search_text_target`, _.search_text_target.toString()),
    _.required_tags?.length != 0 &&
      _.required_tags?.forEach((_) => _.append(`requiredtags[]`, _)),
    _.excluded_tags?.length != 0 &&
      _.excluded_tags?.forEach((_) => _.append(`excludedtags[]`, _)),
    _.required_flags?.length != 0 &&
      _.required_flags?.forEach((_) => _.append(`requiredflags[]`, _)),
    _.required_kv_tags?.length != 0 &&
      _.required_kv_tags?.forEach((_) =>
        _.append(`requiredkvtags[${_.key}`, _.value),
      ),
    _.date_range_created &&
      (_.set(
        `created_date_range_filter_start`,
        (_.date_range_created.timestamp_start || 0).toString(),
      ),
      _.set(
        `created_date_range_filter_end`,
        (_.date_range_created.timestamp_end || 0).toString(),
      )),
    _.date_range_updated &&
      (_.set(
        `updated_date_range_filter_start`,
        (_.date_range_updated.timestamp_start || 0).toString(),
      ),
      _.set(
        `updated_date_range_filter_end`,
        (_.date_range_updated.timestamp_end || 0).toString(),
      )),
    _.childpublishedfileid &&
      _.childpublishedfileid.length != 0 &&
      _.set(`childpublishedfileid`, _.childpublishedfileid),
    _.special_filter && _.set(`special_filter`, _.special_filter.toString()),
    _.appids_required_for_use?.length &&
      _.appids_required_for_use?.forEach((_) =>
        _.append(`appids_required_for_use[]`, _.toString()),
      ),
    _.excluded_appids_required_for_use?.length &&
      _.excluded_appids_required_for_use?.forEach((_) =>
        _.append(`excluded_appids_required_for_use[]`, _.toString()),
      ),
    _.required_apps_preset &&
      _.set(`required_apps_preset`, _.required_apps_preset.toString()),
    _.admin_view && _.set(`admin_view`, `1`),
    _
  );
}
function _(_, _) {
  let _ = {
    ..._,
  };
  return (
    (_.browse_sort = _.browse_sort),
    (_.required_tags = _.required_tags),
    (_.excluded_tags = _.excluded_tags),
    (_.trend_days = _.days_in_period),
    (_.search_text = _.search_text),
    (_.search_text_target = _.search_text_target),
    _.required_flags && (_.required_flags = _.required_flags),
    _.created_date_range_filter_start &&
      (_.date_range_created = {
        timestamp_start: _.created_date_range_filter_start,
        timestamp_end: _.created_date_range_filter_end,
      }),
    _.updated_date_range_filter_start &&
      (_.date_range_updated = {
        timestamp_start: _.updated_date_range_filter_start,
        timestamp_end: _.updated_date_range_filter_end,
      }),
    _.section && (_.section = _.section),
    _.num_per_page && (_.num_per_page = _.num_per_page),
    _.special_filter && (_.special_filter = _.special_filter),
    _.appids_required_for_use &&
      (_.appids_required_for_use = _.appids_required_for_use),
    _.excluded_appids_required_for_use &&
      (_.excluded_appids_required_for_use = _.excluded_appids_required_for_use),
    _.required_apps_preset && (_.required_apps_preset = _.required_apps_preset),
    _
  );
}
function _(_) {
  let _ = {};
  return (
    (_.browse_sort = _.browse_sort),
    (_.section = _.section),
    (_.num_per_page = _.num_per_page),
    (_.required_tags = _.required_tags),
    (_.excluded_tags = _.excluded_tags),
    (_.days_in_period = _.trend_days),
    (_.search_text = _.search_text),
    (_.search_text_target = _.search_text_target),
    (_.required_flags = _.required_flags),
    (_.created_date_range_filter_start = _.date_range_created?.timestamp_start),
    (_.created_date_range_filter_end = _.date_range_created?.timestamp_end),
    (_.updated_date_range_filter_start = _.date_range_updated?.timestamp_start),
    (_.updated_date_range_filter_end = _.date_range_updated?.timestamp_end),
    (_.appids_required_for_use = _.appids_required_for_use),
    (_.excluded_appids_required_for_use = _.excluded_appids_required_for_use),
    (_.required_apps_preset = _.required_apps_preset),
    _
  );
}
var _ = _(),
  _ = (0, _.createContext)(void 0),
  _ = (_) => {
    let { results: _, children: _ } = _,
      [_, _] = (0, _.useState)(-1),
      _ = (0, _.useCallback)(
        (_) => {
          let _ = _.findIndex((_) => _.publishedfileid == _);
          _ != -1 && _(_);
        },
        [_],
      ),
      _ = (0, _.useMemo)(
        () => ({
          quickViewIndex: _,
          closeQuickView: () => _(-1),
          setQuickViewIndex: _,
          setQuickViewItem: _,
        }),
        [_, _],
      );
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: _,
    });
  },
  _ = () => (0, _.useContext)(_),
  _ = (0, _.createContext)(void 0),
  _ = (_) => {
    let {
        app: _,
        strExistingSearchText: _,
        existingSearchTextTarget: _,
        GetBrowseURL: _ = _.Browse,
      } = _,
      [_, _] = (0, _.useState)(_),
      [_, _] = (0, _.useState)(_),
      [_, _] = (0, _.useState)(void 0),
      _ = (0, _.useCallback)(
        (_) => {
          if (_) {
            _(_);
            return;
          }
          let _ = _(_);
          _.delete(`appid`),
            _(
              _(_.appid, {
                search: _,
              }),
            );
        },
        [_.appid, _, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _ != _ && _(_);
        },
        [_],
      ),
      _ = (0, _.useMemo)(
        () => ({
          onBrowseHandler: _,
          setOnBrowseHandler: _,
          searchText: _,
          setSearchText: _,
          searchTextTarget: _,
          setSearchTextTarget: _,
          onSearchTextUpdatedExternally: _,
        }),
        [_, _, _, _],
      );
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    });
  },
  _ = () => (0, _.useContext)(_),
  _ = (0, _.createContext)(void 0),
  _ = (0, _.createContext)(void 0),
  _ = (_) => {
    let { app: _, strExistingSearchText: _ } = _,
      [_, _] = (0, _.useState)({}),
      _ = _(_.appid),
      [_, _] = (0, _.useState)(!1),
      _ = async () => {
        await _.mutateAsync(_.queryid ?? ``), _(!1);
      },
      _ = (0, _.useCallback)((_) => {
        _(_), _(!0);
      }, []),
      _ = () => {
        _(!1);
      },
      _ = (0, _.useMemo)(
        () => ({
          savedQuery: _,
          setSavedQuery: _,
          onConfirmDelete: _,
        }),
        [_, _, _],
      );
    return (0, _.jsxs)(_.Provider, {
      value: _,
      children: [
        _.children,
        _ &&
          (0, _.jsxs)(_, {
            onClose: _,
            strTitle: _.Localize(`#Workshop_Saved_Queries_Delete_Title`),
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(
                  `#Workshop_Saved_Queries_Delete_Desc`,
                  _.query_name ?? ``,
                ),
              }),
              (0, _.jsxs)(_, {
                justify: `end`,
                gap: `3`,
                align: `center`,
                marginTop: `3`,
                children: [
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: _.Localize(`#Workshop_Saved_Queries_Delete_Btn`),
                  }),
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: _.Localize(`#Button_Cancel`),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  _ = () => (0, _.useContext)(_),
  _ = (0, _.createContext)(void 0),
  _ = (0, _.createContext)(void 0),
  _ = (0, _.createContext)(void 0),
  _ = {
    appid: 0,
    private: !1,
    home_page_customization: {
      voting_queue_excluded_tags: [],
      voting_queue_disallow_sets: !1,
      highlight_required_items: !1,
      popular_items_trend_days: 0,
      special_event_enabled: !1,
    },
  };
function _(_) {
  return (0, _.useMemo)(
    () =>
      _(_.short_description ?? ``).replace(/(?:https?|ftp):\/\/[ \n\S]+/g, ``),
    [_.short_description],
  );
}
function _(_) {
  let [_, _] = (0, _.useState)(void 0);
  return (
    (0, _.useEffect)(() => {
      if ((_(void 0), !_)) return;
      let _ = URL.createObjectURL(_),
        _ = new window.Image();
      return (
        (_.onload = () =>
          _({
            strURL: _,
            nWidth: _.naturalWidth,
            nHeight: _.naturalHeight,
          })),
        (_.src = _),
        () => URL.revokeObjectURL(_)
      );
    }, [_]),
    _
  );
}
var _ = (() => {
    let _ = [];
    for (let _ = 0; _ < 32; ++_) {
      let _ = _(_);
      _ && _ != `koreana` && _ != `sc_schinese` && _.push(_);
    }
    return _;
  })(),
  _ = void 0;
function _(_) {
  let _ = _(_);
  if (_ === void 0)
    try {
      _ = new Intl.DisplayNames([_(_(_.LANGUAGE))], {
        type: `language`,
      });
    } catch {
      _ = null;
    }
  return _?._(_) ?? _;
}
function _(_, _) {
  return !_ && !_
    ? ``
    : _
      ? _ == _
        ? _.Localize(`#Workshop_ChangeLog_AuthorSnapshot_Single`, _(_))
        : _
          ? _.Localize(`#Workshop_ChangeLog_AuthorSnapshot_Range`, _(_), _(_))
          : _.Localize(`#Workshop_ChangeLog_AuthorSnapshot_AndNewer`, _(_))
      : _.Localize(`#Workshop_ChangeLog_AuthorSnapshot_AndOlder`, _(_));
}
function _(_) {
  return _ == `public`
    ? _.Localize(`#Workshop_ChangeLog_AuthorSnapshot_Dialog_Latest`)
    : _;
}
function _(_) {
  return _.Localize(
    `#Workshop_ItemDetails_TimestampWithTime`,
    _(_ ?? 0),
    _(_ ?? 0),
  );
}
function _(_, _) {
  return (0, _.useMemo)(() => {
    let _ = new Map();
    return (
      _(_, _).forEach((_) => {
        _.tags.forEach((_) => _.set(_.name.toLocaleLowerCase(), _));
      }),
      _
    );
  }, [_, _]);
}
function _(_, _) {
  let _ = _((0, _.useContext)(_), _);
  return (0, _.useMemo)(() => {
    let _ = [];
    return (
      _.forEach((_) => {
        if (!_.tag) return;
        let _ = _.tag?.toLocaleLowerCase();
        if (!_) return;
        let _ = _.get(_.toLocaleLowerCase());
        _ && _.push(_);
      }),
      _
    );
  }, [_, _]);
}
function _(_, _) {
  let _ = (0, _.useContext)(_);
  return (0, _.useMemo)(() => {
    let _ = [];
    return (
      _(_, _).forEach((_) => {
        let _ = {
          ..._,
        };
        (_.tags = _.tags.filter(
          (_) =>
            _.findIndex(
              (_) => _.tag?.toLocaleLowerCase() == _.name.toLocaleLowerCase(),
            ) != -1,
        )),
          _.tags.length != 0 && _.push(_);
      }),
      _
    );
  }, [_, _, _]);
}
function _(_, _) {
  return (0, _.useMemo)(() => {
    let _ = `(^${_.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)})[^a-zA-Z0-9]*`,
      _ = new RegExp(_);
    return _?.replace(_, ``) ?? ``;
  }, [_, _]);
}
function _(_, _) {
  switch (_) {
    case `readytouseitems`:
      return _.feature_ready_to_use_content_tab_name?.length
        ? _.feature_ready_to_use_content_tab_name[0] == `#`
          ? _.Localize(_.feature_ready_to_use_content_tab_name)
          : _.feature_ready_to_use_content_tab_name
        : _.Localize(`#Workshop_Section_ReadyToUse`);
    case `merchandise`:
      return _.Localize(`#Workshop_Section_Merchandise`);
    case `collections`:
      return _.Localize(`#Workshop_Section_Collections`);
    case `mtxitems`:
      return _.feature_item_mtx_tab_name?.length
        ? _.feature_item_mtx_tab_name[0] == `#`
          ? _.Localize(_.feature_item_mtx_tab_name)
          : _.feature_item_mtx_tab_name
        : _.Localize(`#Workshop_Section_Mtx`);
    case `videos`:
      return _.Localize(`#Workshop_Section_Videos`);
  }
  return ``;
}
function _(_) {
  switch (_) {
    case 1:
      return `mtxitems`;
    case 0:
      return `readytouseitems`;
    case 2:
      return `collections`;
    case 11:
      return `merchandise`;
  }
  return `readytouseitems`;
}
function _(_, _) {
  let _ = _.declared_tags;
  switch (_) {
    case `mtxitems`:
      _ = _.mtx_tags;
      break;
    case `readytouseitems`:
      _ = _.readytouse_tags;
      break;
    case `collections`:
      _ = _.collection_tags;
      break;
    case `videos`:
      _ = _.video_tags;
      break;
    case `merchandise`:
      _ = _.merch_tags;
      break;
    case `guides`:
    case `webguides`:
    case `integratedguides`:
      _ = _.guide_tags;
  }
  return _ ?? [];
}
function _(_) {
  let _ = _.name;
  return (
    _
      ? _.startsWith(`#`) && (_ = _.Localize(_))
      : (_ = _.Localize(`#Workshop_ItemDetails_Categories_Title`)),
    _
  );
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
};
