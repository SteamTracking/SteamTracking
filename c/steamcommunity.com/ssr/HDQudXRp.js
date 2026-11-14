var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `XjBGa3VUFr8-`,
  _ = `xGjiYBznm-U-`,
  _ = `wHzCuUaejBg-`,
  _ = `QeonHFV9ylI-`,
  _ = `_0ohcyeFEL5c-`,
  _ = `_0UrLgzNSm1M-`,
  _ = `OCw7CSOMK40-`,
  _ = `WvrhTr7sUdk-`,
  _ = `a2x1U0l9R3A-`,
  _ = `Ik15LJDIWF8-`,
  _ = `cDXv-vd4rUI-`,
  _ = `gqW03KPQ2d8-`,
  _ = `-fYtHkv7sHU-`,
  _ = `RJoBm8LbbWQ-`,
  _ = `iFWIfJJbWBg-`,
  _ = `IgImFsW9Ltw-`,
  _ = `WC0GexKJPgU-`,
  _ = `DJAOALwmxfQ-`,
  _ = `hcPQztKtuDk-`,
  _ = `JwUO6GbZDU8-`,
  _ = `JrFOYAavSFs-`,
  _ = `GqV7tZQosYk-`,
  _ = `fWlLw9Zvlps-`,
  _ = `g9VGk-TgA-c-`,
  _ = `_8yeJmmvGe8o-`,
  _ = `mf7w3VKqQl0-`,
  _ = `_605I-iKhcVE-`,
  _ = `majSrLKbs2Y-`,
  _ = _(),
  _ = _({
    Component: _,
  });
function _(_) {
  let { app: _, rgPopularDetails: _ } = _.useLoaderData(),
    _ = (0, _.useContext)(_),
    { preferences: _ } = _(),
    { onBrowseHandler: _ } = _(),
    _ = `#Workshop_Home_MostPopular_SubTitle_Week`;
  switch (_.home_page_customization.popular_items_trend_days) {
    case 7:
      _ = `#Workshop_Home_MostPopular_SubTitle_Week`;
      break;
    case 30:
      _ = `#Workshop_Home_MostPopular_SubTitle_Month`;
      break;
    case 90:
      _ = `#Workshop_Home_MostPopular_SubTitle_ThreeMonths`;
      break;
    case 180:
      _ = `#Workshop_Home_MostPopular_SubTitle_SixMonths`;
      break;
    case 365:
      _ = `#Workshop_Home_MostPopular_SubTitle_Year`;
  }
  return (0, _.jsxs)(_, {
    minHeight: `calc( 75vh + 100px )`,
    direction: `column`,
    align: `center`,
    gap: `3`,
    children: [
      (0, _.jsx)(_, {
        rgDetails: _,
        title: _(`readytouseitems`, _),
        description: _.Localize(_),
        browseButtonText: _.Localize(`#Workshop_Home_ViewAll`),
        onViewAll: () =>
          _({
            section: `readytouseitems`,
            trend_days: _.home_page_customization.popular_items_trend_days,
          }),
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        width: `100%`,
        children: [
          _.filters_column == `collapsed` &&
            (0, _.jsx)(_, {
              direction: `row`,
              width: `100%`,
              children: (0, _.jsx)(_, {
                appName: _.name,
                bUseDebouncedValue: !1,
              }),
            }),
          (0, _.jsxs)(_, {
            direction: {
              initial: `column`,
              _: `column`,
              _: `row`,
            },
            gap: {
              initial: `3`,
              _: `5`,
            },
            width: `100%`,
            marginTop: `3`,
            children: [
              _.filters_column == `left` && (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {}),
              _.filters_column == `right` && (0, _.jsx)(_, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    _ = (0, _.useContext)(_),
    { rgVotingQueue: _ } = _.useLoaderData(),
    _ = (0, _.useCallback)(() => {
      _ && _(_.Details(_[0].publishedfileid));
    }, [_]);
  if (!_?.length) return null;
  let _ = 200 * _(_, 1),
    _ = _.slice(0, 12);
  return (0, _.jsxs)(_, {
    direction: `column`,
    width: `100%`,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Workshop_Home_VotingQueue`),
      }),
      (0, _.jsx)(_, {
        size: `4`,
        marginBottom: `3`,
        _: `div`,
        children: _.Localize(`#Workshop_Home_VotingQueue_Desc`),
      }),
      (0, _.jsxs)(_, {
        className: _,
        onActivate: _,
        children: [
          _.map((_, _) => {
            let _ = 1 - _ * 0.05,
              _ = (1 - _) * _,
              _ = _ === 0 ? 0 : -(10 + _),
              _ = 1 - (_ / _.length) * 0.9;
            return (0, _.jsx)(
              `div`,
              {
                className: _,
                style: {
                  filter: `brightness( ${_} )`,
                  transform: `scale( ${_} )`,
                  zIndex: _.length - _,
                  marginLeft: _,
                },
                children: (0, _.jsx)(_, {
                  details: _,
                  className: _,
                }),
              },
              _.publishedfileid,
            );
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              size: {
                initial: `1`,
                _: `2`,
                _: `3`,
              },
              children: _.Localize(`#Workshop_Home_VotingQueue_Btn`),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      app: _,
      rgFollowedDetails: _,
      rgFriendsDetails: _,
      rgAcceptedDetails: _,
      rgPopularDetails: _,
      rgRequiredDetails: _,
      rgMerchDetails: _,
    } = _.useLoaderData(),
    _ = (0, _.useContext)(_),
    { onBrowseHandler: _ } = _();
  return (
    _.home_page_customization.popular_items_trend_days,
    (0, _.jsxs)(_, {
      className: _,
      direction: `column`,
      gap: `9`,
      children: [
        (0, _.jsx)(_, {
          appid: _.appid,
        }),
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          rgDetails: _,
          title: _.Localize(`#Workshop_Home_FromFollowedAuthors`),
          description: _.Localize(`#Workshop_Home_FromFollowedAuthors_Desc`),
          browseButtonText: _.Localize(`#Workshop_Home_ViewAll`),
          onViewAll: () =>
            _({
              section: _.feature_item_curation ? `mtxitems` : `readytouseitems`,
              special_filter: 4,
              browse_sort: `mostrecent`,
            }),
        }),
        (0, _.jsx)(_, {
          rgDetails: _,
          title: _.Localize(`#Workshop_Home_AcceptedItems`),
          subTitle: `#Workshop_Home_AcceptedItems_Desc`,
          browseButtonText: _.Localize(`#Workshop_Home_ViewAll`),
          onViewAll: () =>
            _({
              section: `mtxitems`,
              special_filter: 1,
              browse_sort: `accepted`,
            }),
        }),
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          rgDetails: _,
          title: _.Localize(`#Workshop_Home_FriendsFavorites`),
          description: _.Localize(`#Workshop_Home_FriendsFavorites_Desc`),
          browseButtonText: _.Localize(`#Workshop_Home_ViewAll`),
          onViewAll: () =>
            _({
              section: `readytouseitems`,
              special_filter: 2,
              browse_sort: `mostrecent`,
            }),
        }),
        (0, _.jsx)(_, {
          rgDetails: _,
          title: _.Localize(`#Workshop_Home_NumParentItems`),
          description: _.Localize(`#Workshop_Home_NumParentItems_Desc`),
          browseButtonText: _.Localize(`#Workshop_Home_NumParentItems_Btn`),
          onViewAll: () =>
            _({
              section: `readytouseitems`,
              special_filter: 6,
              browse_sort: `num_parent_items`,
            }),
        }),
        (0, _.jsx)(_, {
          rgDetails: _,
          title: _.Localize(`#Workshop_Home_MostPopularMerch`),
          description: _.Localize(`#Workshop_Home_MostPopular_SubTitle_Week`),
          browseButtonText: _.Localize(`#Workshop_Home_ViewAll`),
          onViewAll: () =>
            _({
              section: `merchandise`,
            }),
        }),
        (0, _.jsx)(_, {}),
      ],
    })
  );
}
function _(_) {
  let {
      rgDetails: _,
      onViewAll: _,
      browseButtonText: _,
      title: _,
      description: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = (_) => {
      if (!_.current) return;
      let _ = _ === `left` ? -_.current.clientWidth : _.current.clientWidth;
      _.current.scrollBy({
        left: _,
        behavior: `smooth`,
      });
    };
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      if (!_) return;
      let _ = () => {
        _(_.scrollLeft > 0);
        let _ = _.scrollWidth - (_.scrollLeft + _.clientWidth);
        _(_ > 1);
      };
      return (
        _(),
        _.addEventListener(`scroll`, _, {
          passive: !0,
        }),
        _.addEventListener(`scrollend`, _),
        () => {
          (_.removeEventListener(`scroll`, _),
            _.removeEventListener(`scrollend`, _));
        }
      );
    }, []),
    _?.length
      ? (0, _.jsxs)(_, {
          results: _,
          children: [
            (0, _.jsxs)(_, {
              className: _,
              direction: `row`,
              children: [
                !_ &&
                  (_ == `md` || _ == `lg`) &&
                  (0, _.jsx)(`div`, {
                    className: (0, _.default)(`d7hecYxGo3M-`, `_034Ar3-6aJk-`),
                    children: (0, _.jsx)(_, {
                      color: `accent`,
                      variant: `ghost`,
                      disabled: !_,
                      onClick: () => _(`left`),
                      size: {
                        initial: `1`,
                        _: `2`,
                        _: `3`,
                      },
                      children: (0, _.jsx)(_, {}),
                    }),
                  }),
                (0, _.jsxs)(_, {
                  className: _,
                  "flow-children": `column`,
                  children: [
                    (0, _.jsxs)(_, {
                      direction: `row`,
                      justify: `between`,
                      align: `center`,
                      children: [
                        (0, _.jsxs)(_, {
                          direction: `column`,
                          children: [
                            (0, _.jsx)(`div`, {
                              className: _,
                              children: _,
                            }),
                            _ &&
                              (0, _.jsx)(_, {
                                size: `4`,
                                marginBottom: `3`,
                                _: `div`,
                                children: _,
                              }),
                          ],
                        }),
                        (0, _.jsx)(_, {
                          size: `2`,
                          variant: `outline`,
                          onClick: _,
                          children: _,
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      className: _,
                      ref: _,
                      children: _.map((_, _) =>
                        (0, _.jsx)(
                          _,
                          {
                            children: (0, _.jsx)(
                              _,
                              {
                                details: _,
                                bEnlarged: !0,
                              },
                              _.publishedfileid,
                            ),
                          },
                          _.publishedfileid,
                        ),
                      ),
                    }),
                  ],
                }),
                !_ &&
                  (_ == `md` || _ == `lg`) &&
                  (0, _.jsx)(`div`, {
                    className: (0, _.default)(`d7hecYxGo3M-`, `jZBsiO0xOxM-`),
                    children: (0, _.jsx)(_, {
                      color: `accent`,
                      variant: `ghost`,
                      disabled: !_,
                      onClick: () => _(`right`),
                      size: {
                        initial: `1`,
                        _: `2`,
                        _: `3`,
                      },
                      children: (0, _.jsx)(_, {}),
                    }),
                  }),
              ],
            }),
            (0, _.jsx)(_, {
              rgDetails: _,
            }),
          ],
        })
      : null
  );
}
function _(_) {
  let { rgSpecialSectionDetails: _ } = _.useLoaderData(),
    _ = (0, _.useContext)(_),
    { onBrowseHandler: _ } = _(),
    _ = _({
      include_images: !0,
    }),
    _ = _.home_page_customization.special_event_tag,
    _ = () => {
      _ &&
        (_.feature_item_curation
          ? _({
              section: `mtxitems`,
              required_tags: [_],
            })
          : _({
              section: `readytouseitems`,
              required_tags: [_],
            }));
    };
  if (!_ || !_?.length) return null;
  let _;
  _ = _.workshop_special_event_title?.length
    ? _.workshop_special_event_title
    : _.Localize(`#Workshop_Home_SpecialEvent_Title_Tag`, _);
  let _ = _.workshop_special_event_desc?.length
    ? (0, _.jsx)(`div`, {
        className: (0, _.default)(void 0, _, _),
        children: _.ParseBBCode(_.workshop_special_event_desc, null),
      })
    : void 0;
  return (0, _.jsx)(_, {
    className: _,
    title: (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _),
      children: _,
    }),
    description: _,
    rgDetails: _,
    onViewAll: _,
    browseButtonText: _.Localize(`#Workshop_Home_SpecialEvent_Link`, _),
  });
}
function _(_) {
  let { rgNewsEvents: _ } = _.useLoaderData(),
    _ = _.map((_) => _.FromCClanEventData(_, _.ELANGUAGE));
  return _.length == 0
    ? null
    : (0, _.jsx)(_, {
        strClassName: _,
        rgEvents: _,
        nSummaryMaxLength: 512,
      });
}
function _(_) {
  let {
      rgPopularLongTermDetails: _,
      rgUniqueSubscriptionsDetails: _,
      rgPlaytimeDetails: _,
      rgUpdatedDetails: _,
      rgRecentDetails: _,
    } = _.useLoaderData(),
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useMemo)(() => {
      let _ = [];
      return (
        _ &&
          _.push({
            title: _.Localize(`#Workshop_Home_MostPopular_LongTerm`),
            subTitle: `#Workshop_Home_MostPopular_LongTerm_Desc`,
            browseButtonText: _.Localize(
              `#Workshop_Home_MostPopular_LongTerm_Btn`,
            ),
            onViewAll: () =>
              _({
                section: `readytouseitems`,
                trend_days: 90,
              }),
            rgDetails: _,
            rgAdditionalInfo: [_.k_RatingsData],
          }),
        _ &&
          _.push({
            title: _.Localize(`#Workshop_Home_MostSubscribed`),
            subTitle: `#Workshop_Home_MostSubscribed_Desc`,
            browseButtonText: _.Localize(`#Workshop_Home_MostSubscribed_Btn`),
            onViewAll: () =>
              _({
                section: `readytouseitems`,
                browse_sort: `totaluniquesubscribers`,
              }),
            rgDetails: _,
            rgAdditionalInfo: [_.k_SubscriberData],
          }),
        _ &&
          _.push({
            title: _.Localize(`#Workshop_Home_LastUpdated`),
            subTitle: `#Workshop_Home_LastUpdated_Desc`,
            browseButtonText: _.Localize(`#Workshop_Home_LastUpdated_Btn`),
            onViewAll: () =>
              _({
                section: `readytouseitems`,
                browse_sort: `lastupdated`,
              }),
            rgDetails: _,
            rgAdditionalInfo: [_.k_LastUpdated],
          }),
        _ &&
          _.push({
            title: _.Localize(`#Workshop_Home_MostRecent`),
            subTitle: `#Workshop_Home_MostRecent_Desc`,
            browseButtonText: _.Localize(`#Workshop_Home_MostRecent_Btn`),
            onViewAll: () =>
              _({
                section: `readytouseitems`,
                browse_sort: `mostrecent`,
              }),
            rgDetails: _,
            rgAdditionalInfo: [_.k_TimeCreated],
          }),
        _ &&
          _.push({
            title: _.Localize(`#Workshop_Home_MostPlaytime`),
            subTitle: `#Workshop_Home_MostPopular_SubTitle_ThreeMonths`,
            browseButtonText: _.Localize(`#Workshop_Home_MostPlaytime_Btn`),
            onViewAll: () =>
              _({
                section: `readytouseitems`,
                browse_sort: `playtime_trend`,
                trend_days: 90,
              }),
            rgDetails: _,
            rgAdditionalInfo: [_.k_PlaytimeData],
          }),
        _
      );
    }, [_, _, _, _, _, _]);
  return (0, _.jsx)(_, {
    rgTabContents: _,
  });
}
function _(_) {
  let {
      app: _,
      rgFavoritesUpdated: _,
      rgSubscriptionsUpdated: _,
      rgPlayedUpdated: _,
    } = _.useLoaderData(),
    _ = (_) => {
      window.location.href = _;
    },
    _ = (0, _.useMemo)(() => {
      let _ = [];
      return (
        _?.length &&
          _.push({
            title: _.Localize(`#Workshop_Home_YourSubscriptions`),
            subTitle: `#Workshop_Home_YourFiles_LastUpdated`,
            browseButtonText: _.Localize(
              `#Workshop_Home_YourSubscriptions_Btn`,
            ),
            onViewAll: () =>
              _(
                _.MyFiles(_.appid, {
                  search: `browsefilter=mysubscriptions&sortmethod=lastupdated`,
                }),
              ),
            rgDetails: _,
            rgAdditionalInfo: [_.k_LastUpdated],
          }),
        _?.length &&
          _.push({
            title: _.Localize(`#Workshop_Home_YourPlayed`),
            subTitle: `#Workshop_Home_YourFiles_LastUpdated`,
            browseButtonText: _.Localize(`#Workshop_Home_YourPlayed_Btn`),
            onViewAll: () =>
              _(
                _.MyFiles(_.appid, {
                  search: `browsefilter=myplayedfiles&sortmethod=lastupdated`,
                }),
              ),
            rgDetails: _,
            rgAdditionalInfo: [_.k_LastUpdated],
          }),
        _?.length &&
          _.push({
            title: _.Localize(`#Workshop_Home_YourFavorites`),
            subTitle: `#Workshop_Home_YourFiles_LastUpdated`,
            browseButtonText: _.Localize(`#Workshop_Home_YourFavorites_Btn`),
            onViewAll: () =>
              _(
                _.MyFiles(_.appid, {
                  search: `browsefilter=myfavorites&sortmethod=lastupdated`,
                }),
              ),
            rgDetails: _,
            rgAdditionalInfo: [_.k_LastUpdated],
          }),
        _
      );
    }, [_.appid, _, _, _]);
  return (0, _.jsx)(_, {
    rgTabContents: _,
  });
}
function _(_) {
  let { rgTabContents: _ } = _,
    [_, _] = (0, _.useState)(0),
    _ = _[_],
    _ = (0, _.useMemo)(
      () =>
        (0, _.jsx)(_, {
          className: _,
          gap: {
            initial: `3`,
            _: `5`,
          },
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                className: (0, _.default)(_, _ == _ && `GL-WxjUbwGc-`),
                onActivate: () => _(_),
                children: _[_].title,
              },
              _,
            ),
          ),
        }),
      [_, _],
    );
  return _.length == 0
    ? null
    : (0, _.jsx)(_, {
        title: _,
        onViewAll: _.onViewAll,
        browseButtonText: _.browseButtonText,
        subTitle: _.subTitle,
        rgDetails: _.rgDetails,
        rgAdditionalInfo: _.rgAdditionalInfo,
      });
}
function _(_) {
  let {
    rgDetails: _,
    onViewAll: _,
    browseButtonText: _,
    title: _,
    description: _,
    className: _,
  } = _;
  return _?.length
    ? (0, _.jsxs)(_, {
        results: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: (0, _.default)(_, _),
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                justify: `between`,
                align: `center`,
                className: _,
                children: [
                  (0, _.jsxs)(_, {
                    direction: `column`,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: _,
                      }),
                      _ &&
                        (0, _.jsx)(_, {
                          size: `4`,
                          marginBottom: `3`,
                          _: `div`,
                          children: _,
                        }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    size: `2`,
                    variant: `outline`,
                    onClick: _,
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                className: _,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      details: _,
                    },
                    _.publishedfileid,
                  ),
                ),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            rgDetails: _,
          }),
        ],
      })
    : null;
}
function _(_) {
  let {
    rgDetails: _,
    onViewAll: _,
    browseButtonText: _,
    title: _,
    subTitle: _,
  } = _;
  return _?.length
    ? (0, _.jsxs)(_, {
        results: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                justify: `between`,
                align: `center`,
                className: _,
                children: [
                  (0, _.jsxs)(_, {
                    direction: `column`,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: _,
                      }),
                      _ &&
                        (0, _.jsx)(_, {
                          size: `4`,
                          marginBottom: `3`,
                          _: `div`,
                          children: _.Localize(_),
                        }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    size: `2`,
                    variant: `outline`,
                    onClick: _,
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                className: _,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      details: _,
                    },
                    _.publishedfileid,
                  ),
                ),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            rgDetails: _,
          }),
        ],
      })
    : null;
}
function _(_) {
  let {
    rgDetails: _,
    rgAdditionalInfo: _,
    onViewAll: _,
    browseButtonText: _,
    title: _,
    subTitle: _,
  } = _;
  return _?.length
    ? (0, _.jsxs)(_, {
        results: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  size: `4`,
                  marginBottom: `3`,
                  _: `div`,
                  children: _.Localize(_),
                }),
              (0, _.jsx)(_, {
                className: _,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      details: _,
                      rgAdditionalInfo: _,
                    },
                    _.publishedfileid,
                  ),
                ),
              }),
              (0, _.jsx)(_, {
                size: `2`,
                variant: `outline`,
                onClick: _,
                children: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            rgDetails: _,
          }),
        ],
      })
    : null;
}
function _(_) {
  let { app: _ } = _.useLoaderData(),
    { preferences: _ } = _(),
    _ = _(`sm`);
  return (0, _.jsxs)(_, {
    className: _,
    "flow-children": `column`,
    children: [
      _.filters_column !== `collapsed` &&
        (0, _.jsx)(_, {
          appName: _.name,
          bUseDebouncedValue: !1,
        }),
      !_ &&
        (0, _.jsxs)(_, {
          className: `Bo5an3G1SQw-`,
          "flow-children": `column`,
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        }),
    ],
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    { category: _, section: _, facetMapping: _ } = _,
    _ = (0, _.useMemo)(
      () => _.tags.filter((_) => _.has(_.name.toLocaleLowerCase())),
      [_.tags, _],
    ),
    _ = [``, ..._.tags.map((_) => _._)],
    _ = (_) => {
      let _ = _.tags.find((_) => _._ == _);
      _ &&
        _({
          section: _,
          required_tags: [_.name],
          page: 1,
        });
    },
    _ = (_) => {
      if (_.length == 0) return _.Localize(`#Workshop_Tag_NoneSpecified`);
      let _ = _.tags.find((_) => _._ == _);
      return _
        ? (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                truncate: !0,
                children: _.display_name ?? _.name,
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [`(`, _(_.get(_.name.toLocaleLowerCase()) ?? 0), `)`],
              }),
            ],
          })
        : _.Localize(`#Workshop_Tag_NoneSpecified`);
    };
  if (_.length == 0) return null;
  let _;
  switch (_.htmlelement || `checkbox`) {
    case `select`:
      _ = (0, _.jsx)(_, {
        placement: {
          flip: !1,
        },
        selectedValue: ``,
        onSelectionChange: _,
        options: _,
        getOptionLabel: _,
      });
      break;
    default:
      _ = _.map((_) =>
        (0, _.jsxs)(
          _,
          {
            className: _,
            onActivate: () =>
              _({
                section: _,
                required_tags: [_.name],
              }),
            children: [
              (0, _.jsx)(_, {
                truncate: !0,
                className: _,
                children: _.display_name ?? _.name,
              }),
              (0, _.jsxs)(_, {
                className: _,
                children: [`(`, _(_.get(_.name.toLocaleLowerCase()) ?? 0), `)`],
              }),
            ],
          },
          _._,
        ),
      );
  }
  let _ = _(_);
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `1`,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { rgTagFacets: _ } = _.useLoaderData(),
    _ = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    _ = (0, _.useMemo)(() => {
      let _ = new Map();
      return (
        _.forEach((_) => {
          _.set(_.value, _.count);
        }),
        _
      );
    }, [_]),
    _ = new Map(),
    _ = [];
  if (
    (_.feature_ready_to_use_content &&
      _.readytouse_tags &&
      (_.readytouse_tags.forEach((_) => {
        _.set(_.name ?? ``, !0);
      }),
      (_ = [
        ..._.readytouse_tags.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              category: _,
              section: `readytouseitems`,
              facetMapping: _,
            },
            `readytouseitems` + _,
          ),
        ),
      ])),
    _.feature_item_curation && _.mtx_tags)
  ) {
    let _ = _.mtx_tags.filter((_) => !_.has(_.name ?? ``));
    _ = [
      ..._,
      ..._.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            category: _,
            section: `mtxitems`,
            facetMapping: _,
          },
          `mtxitems` + _,
        ),
      ),
    ];
  }
  return (0, _.jsx)(_.Fragment, {
    children: _,
  });
}
function _(_) {
  let { appid: _, count: _ } = _,
    { onBrowseHandler: _ } = _(),
    { app: _ } = _.useLoaderData(),
    { data: _ } = _({
      appid: _,
    }),
    _ = _(_.name, _?.name);
  return !_ || !_.name
    ? null
    : (0, _.jsxs)(
        _,
        {
          className: _,
          onActivate: () =>
            _({
              section: `readytouseitems`,
              appids_required_for_use: [_],
            }),
          children: [
            (0, _.jsx)(_, {
              truncate: !0,
              className: _,
              children: _,
            }),
            (0, _.jsxs)(_, {
              className: _,
              children: [`(`, _(_), `)`],
            }),
          ],
        },
        _,
      );
}
function _(_) {
  let { availableRequiredDLC: _ } = _.useLoaderData();
  return _?.length
    ? (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Workshop_RequiredDLC_Header`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.map(({ appid: _, count: _ }) =>
              (0, _.jsx)(
                _,
                {
                  appid: _,
                  count: _,
                },
                _,
              ),
            ),
          }),
        ],
      })
    : null;
}
export { _ as route };
