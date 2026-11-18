var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(),
  _ = 604800,
  _ = 100,
  _ = _({
    Component: _,
  });
function _(_, _) {
  return `${_.STORE_BASE_URL}charts/topsellers/${_}/${_(_)}`;
}
function _() {
  let { weekly: _, rgCountries: _, rtCurrentWeek: _ } = _.useLoaderData(),
    { rtWeekStart: _, strCountryCode: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`h1`, {
            children: _(`#SteamCharts_TopSellers_PageTitle`),
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              rgCountries: _,
              rtWeekStart: _,
              strCountryCode: _,
            }),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _(`#SteamCharts_TopSellers_PageSubTitle`),
          ` `,
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#SteamCharts_TopSellers_PageSubTitle_subtext`),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          rtWeekStart: _,
          strCountryCode: _,
          rtMaxWeekStart: _,
        }),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            rtWeekStart: _,
            strCountryCode: _,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { rtWeekStart: _, strCountryCode: _, rtMaxWeekStart: _ } = _,
    _ = _(_),
    _,
    _;
  return (
    _ - _ >= 1079395200 && (_ = _(_, _ - _)),
    _ < _ && (_ = _(_, _ + _)),
    (0, _.jsxs)(_, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          strLink: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: `\xA0`,
          }),
        }),
        (0, _.jsx)(_, {
          strLink: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: `\xA0`,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _),
          children: _(_),
        }),
        (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _),
          children: _(_),
        }),
      ],
    })
  );
}
function _(_) {
  let { rgCountries: _, strCountryCode: _, rtWeekStart: _ } = _,
    _ = _.useCallback((_) => `/charts/topsellers/${_}/${_(_)}`, [_]);
  return (0, _.jsx)(_, {
    rgCountries: _,
    strCountryCode: _,
    BuildCountryPath: _,
  });
}
function _(_) {
  let { rtWeekStart: _, strCountryCode: _ } = _,
    [_, _] = _.useState(!1),
    { data: _, status: _, isFetching: _ } = _(_, _, _ ? _ : 20);
  if (_ === `error`)
    return (0, _.jsx)(`div`, {
      children: (0, _.jsx)(`h3`, {
        children: `Error loading top sellers`,
      }),
    });
  let _ = !_ && _?.rgRanks.length === 20;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          rgRanks: _.rgRanks,
        }),
      _ &&
        (0, _.jsx)(_, {
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
      _ &&
        (0, _.jsx)(`div`, {
          className: `Tc1RM13bONs-`,
          children: (0, _.jsx)(_, {
            onClick: () => _(!0),
            disabled: _,
            children: _(`#SteamCharts_TopSellers_SeeAllNTopSellers`, _),
          }),
        }),
      _ &&
        _ &&
        (0, _.jsx)(_, {
          position: `center`,
        }),
    ],
  });
}
function _(_) {
  let { rgRanks: _ } = _,
    _ = _.find((_) => _.nConsecutiveWeeks === 1) ?? _[0];
  return (0, _.jsx)(_, {
    itemKey: _?.itemKey,
  });
}
export { _ as route };
