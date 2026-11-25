var _ = [
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
  return (_ && (_ = _.concat(_)), _);
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
  return (_ && (_ = [..._, 5]), _);
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
var _ = _(_(), 1),
  _ = _(),
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
          (_.delete(`appid`),
            _(
              _(_.appid, {
                search: _,
              }),
            ));
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
        (await _.mutateAsync(_.queryid ?? ``), _(!1));
      },
      _ = (0, _.useCallback)((_) => {
        (_(_), _(!0));
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
  _ = (0, _.createContext)(void 0);
