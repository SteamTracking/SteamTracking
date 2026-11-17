var _ = {
    include_basic_info: !0,
    include_assets: !0,
    include_platforms: !0,
  },
  _ = {
    0: `pastweek`,
    1: `pastweek`,
    2: `pastmonth`,
    3: `pastyear`,
  },
  _ = [1, 2, 3];
function _(_) {
  return _[_] ?? `pastweek`;
}
async function _(_, _, _, _) {
  let _ = _.Init(_);
  (_(_, _),
    _(_, {
      ..._?.data_request,
      include_platforms: !0,
    }),
    _.Body().set_top_played_period(_));
  let _ = await _.GetMostPlayedSteamDeckGames(_, _);
  if (!_.BSuccess())
    throw `Error loading most played on Steam Deck: ${_.GetErrorMessage()}`;
  let _ = [];
  for (let _ of _.Body().ranks()) {
    let _ = _.item();
    if (!_) continue;
    let _ = _.toObject(),
      _ = _(_);
    _ &&
      (_ && _.cacheStoreItemData(_, _.data_request),
      _.push({
        nRank: _.rank() ?? 0,
        itemKey: _,
        nRankLastPeriod: _.last_period_rank() ?? 0,
        eDeckCompatCategory: _.platforms?.steam_deck_compat_category,
      }));
  }
  return {
    rgRanks: _,
  };
}
function _(_, _, _, _) {
  return {
    queryKey: [`ChartsMostPlayedOnDeck`, _],
    queryFn: () => _(_, _, _, _),
    staleTime: 36e5,
  };
}
function _(_) {
  let _ = _(),
    { storeBrowseContext: _, dataPreload: _ } = _(_);
  return _(_(_, _, _, _));
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(),
  _ = {
    0: `#SteamCharts_MostPlayedDeck_Option_PastWeek`,
    1: `#SteamCharts_MostPlayedDeck_Option_PastWeek`,
    2: `#SteamCharts_MostPlayedDeck_Option_PastMonth`,
    3: `#SteamCharts_MostPlayedDeck_Option_PastYear`,
  },
  _ = _({
    Component: _,
  });
function _(_) {
  return `/charts/steamdecktopplayed/${_(_)}`;
}
function _() {
  let {
    ePeriod: _,
    rtRangeStart: _,
    rtRangeEnd: _,
    iPromoImage: _,
  } = _.useLoaderData();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`div`, {
                className: (0, _.default)(_, _),
                children: (0, _.jsx)(`h1`, {
                  children: _(`#SteamCharts_MostPlayedDeck_Title`),
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: (0, _.default)(_, _),
                children: [
                  _(`#SteamCharts_MostPlayedDeck_Subtitle`),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      ePeriod: _,
                    }),
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(_, _),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            iPromoImage: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            ePeriod: _,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { ePeriod: _ } = _,
    _ = _.useMemo(
      () =>
        _.map((_) => ({
          data: _,
          label: _(_[_]),
        })),
      [],
    ),
    _ = _.find((_) => _.data === _) ?? _[0],
    _ = _.useCallback((_) => {
      _(_(_.data));
    }, []);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        options: _,
        selectedValue: _,
        onSelectionChange: _,
        getOptionLabel: (_) => _.label,
      }),
    }),
  });
}
function _(_) {
  let { iPromoImage: _ } = _,
    _ = `${_.CDN_HOST_MEDIA}store/steamdeck/steamdeck_promo_0${_}.png?v=4`;
  return (0, _.jsxs)(_, {
    href: `${_.STORE_BASE_URL}app/1675200/Steam_Deck/?utm_source=steamdeckcharts`,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`img`, {
          src: _,
          alt: ``,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#SteamCharts_SteamDeckPromo_Title`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#SteamCharts_SteamDeckPromo_Desc`),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { ePeriod: _ } = _,
    { data: _, isPending: _, isError: _ } = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`h3`, {
          children: `Error loading most played on Steam Deck`,
        }),
      })
    : _ || !_
      ? (0, _.jsx)(_, {
          position: `center`,
        })
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              itemKey: _.rgRanks[0]?.itemKey,
            }),
            (0, _.jsx)(_, {
              ePeriod: _,
              children: _.rgRanks.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    children: (0, _.jsx)(_, {
                      rank: _,
                    }),
                  },
                  _.nRank,
                ),
              ),
            }),
          ],
        });
}
var _ = {
  0: `#SteamCharts_MostPlayedDeck_TableChangeWeek_Tooltip`,
  1: `#SteamCharts_MostPlayedDeck_TableChangeWeek_Tooltip`,
  2: `#SteamCharts_MostPlayedDeck_TableChangeMonth_Tooltip`,
  3: `#SteamCharts_MostPlayedDeck_TableChangeYear_Tooltip`,
};
function _(_) {
  let { ePeriod: _, children: _ } = _,
    _ = _(_[_]);
  return (0, _.jsxs)(`table`, {
    className: _,
    children: [
      (0, _.jsx)(`thead`, {
        className: _,
        children: (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`th`, {
              className: _,
            }),
            (0, _.jsx)(`th`, {
              className: _,
              colSpan: 2,
              children: (0, _.jsx)(`span`, {
                children: _(`#SteamCharts_TopSellers_TableRank`),
              }),
            }),
            (0, _.jsx)(`th`, {
              className: (0, _.default)(_, _),
              children: _(`#SteamCharts_TopSellers_TablePrice`),
            }),
            (0, _.jsx)(`th`, {
              className: _,
              align: `right`,
              children: (0, _.jsxs)(_, {
                className: _,
                toolTipContent: _,
                direction: `top`,
                children: [
                  (0, _.jsx)(`span`, {
                    children: _(`#SteamCharts_TopSellers_TableChange`),
                  }),
                  ` `,
                  (0, _.jsx)(_, {}),
                ],
              }),
            }),
            (0, _.jsx)(`th`, {
              className: _,
              align: `right`,
              children: (0, _.jsxs)(_, {
                className: _,
                toolTipContent: _(
                  `#SteamCharts_MostPlayedDeck_TableDeckVerified_Tooltip`,
                ),
                direction: `top`,
                children: [
                  _(`#SteamCharts_MostPlayedDeck_TableDeckVerified`),
                  ` `,
                  (0, _.jsx)(_, {}),
                ],
              }),
            }),
          ],
        }),
      }),
      (0, _.jsx)(`tbody`, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { rank: _ } = _,
    { nRank: _, itemKey: _, nRankLastPeriod: _ } = _;
  return (0, _.jsx)(_, {
    nRank: _,
    itemKey: _,
    rctTrailingCells: (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          nRank: _,
          nRankLastPeriod: _,
        }),
        (0, _.jsx)(`td`, {
          className: _,
          children: (0, _.jsx)(_, {
            itemKey: _,
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { data: _ } = _(_.itemKey),
    _ = _(_?.steam_deck_compat_category ?? 0);
  return (0, _.jsx)(_, {});
}
export { _ as route };
