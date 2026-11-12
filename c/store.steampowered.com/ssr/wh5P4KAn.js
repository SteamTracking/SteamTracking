var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(),
  _ = _({
    Component: _,
  });
function _(_) {
  return `/charts/topselling/${_}`;
}
function _() {
  let {
    strCountryCode: _,
    rgCountries: _,
    rtPreviousWeek: _,
    strCanonicalURL: _,
  } = _.useLoaderData();
  return (
    (0, _.useEffect)(() => {
      _ && _(_);
    }, [_]),
    (0, _.jsxs)(_, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: (0, _.default)(_, _),
          children: [
            (0, _.jsx)(`h1`, {
              children: _(`#SteamCharts_Menu_TopSelling`),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                rgCountries: _,
                strCountryCode: _,
                BuildCountryPath: _,
              }),
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#SteamCharts_Menu_TopSelling_Subtitle`),
        }),
        (0, _.jsx)(_, {
          className: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              strCountryCode: _,
              rtPreviousWeek: _,
            }),
          }),
        }),
      ],
    })
  );
}
function _(_) {
  let { strCountryCode: _, rtPreviousWeek: _ } = _,
    _ = _(_, 100, {
      bGlobal: !_,
      strCountryCode: _,
    }),
    _ = _(_, _, 100),
    _ = _.useMemo(
      () => _.data && _(_.data.rgItemIDs, _.data?.rgRanks),
      [_.data, _.data],
    );
  if (_.isError)
    return (0, _.jsx)(`div`, {
      children: (0, _.jsx)(`h3`, {
        children: `Error loading top sellers`,
      }),
    });
  let _ = !!_ && _.isPending && !_.isError;
  return !_ || _
    ? (0, _.jsx)(_, {
        position: `center`,
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            itemKey: _[0]?.itemKey,
          }),
          (0, _.jsx)(_, {
            children: _.map((_) =>
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
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              onClick: () => {
                window.location.href = `${_.STORE_BASE_URL}search/?filter=${_ ? `topsellers` : `globaltopsellers`}`;
              },
              children: _(`#SteamCharts_TopSellers_Browse`),
            }),
          }),
        ],
      });
}
function _(_, _) {
  let _ = new Map();
  for (let _ of _ ?? []) _.set(_(_.itemKey), _);
  return _.map((_, _) => {
    let _ = _.get(_(_));
    return {
      nRank: _ + 1,
      itemKey: _,
      nRankLastWeek: _?.nRank ?? 0,
      nConsecutiveWeeks: _ ? _.nConsecutiveWeeks + 1 : 1,
      bFirstTop100: !_,
      bRankChangeUnknown: !_,
    };
  });
}
export { _ as route };
