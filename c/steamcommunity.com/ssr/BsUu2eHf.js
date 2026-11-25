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
function _(_, _, _) {
  if (!_ && !_) return ``;
  let _ = _
    ? `#Workshop_ChangeLog_AuthorSnapshot_`
    : `#Workshop_ItemDetails_AuthorSnapshot_`;
  return _
    ? _ == _
      ? _.Localize(_ + `Single`, _(_))
      : _
        ? _.Localize(_ + `Range`, _(_), _(_))
        : _.Localize(_ + `AndNewer`, _(_))
    : _.Localize(_ + `AndOlder`, _(_));
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
        ((_.tags = _.tags.filter(
          (_) =>
            _.findIndex(
              (_) => _.tag?.toLocaleLowerCase() == _.name.toLocaleLowerCase(),
            ) != -1,
        )),
          _.tags.length != 0 && _.push(_));
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
