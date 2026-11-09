var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let { eView: _, children: _ } = _;
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
            (0, _.jsx)(_, {
              eView: _,
            }),
            (0, _.jsx)(`th`, {
              className: (0, _.default)(_, _),
              children: (0, _.jsxs)(_, {
                className: _,
                toolTipContent: _(
                  `#SteamCharts_TopSellers_TablePeakInGame_Tooltip`,
                ),
                direction: `top`,
                children: [
                  _(`#SteamCharts_TopSellers_TablePeakInGame`),
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
  return _.eView === `dailyplayers`
    ? (0, _.jsx)(`th`, {
        className: _,
        align: `right`,
        children: (0, _.jsxs)(_, {
          className: _,
          toolTipContent: _(`#SteamCharts_TopSellers_TableChangeTooltip`),
          direction: `top`,
          children: [
            (0, _.jsx)(`span`, {
              children: _(`#SteamCharts_TopSellers_TableChange`),
            }),
            ` `,
            (0, _.jsx)(_, {}),
          ],
        }),
      })
    : (0, _.jsx)(`th`, {
        className: (0, _.default)(_, _),
        children: (0, _.jsxs)(_, {
          className: _,
          toolTipContent: _(
            `#SteamCharts_TopSellers_TableCurrentPlayersTooltip`,
          ),
          direction: `top`,
          children: [
            _(`#SteamCharts_TopSellers_TableCurrentPlayers`),
            ` `,
            (0, _.jsx)(_, {}),
          ],
        }),
      });
}
function _(_) {
  let { nRank: _, itemKey: _, rctTrailingCells: _ } = _,
    { data: _ } = _(_),
    _ = _(_?.content_descriptorids),
    _ = _(_),
    _ = _.useCallback(() => {
      _ && (window.location.href = _);
    }, [_]);
  return (0, _.jsxs)(`tr`, {
    className: _,
    onClick: _,
    children: [
      (0, _.jsx)(`td`, {
        className: _,
        children:
          !_ &&
          (0, _.jsx)(_, {
            className: `HHfkg1UJUQw-`,
            _: _,
            hoverProps: {
              direction: `right`,
              nBodyAlignment: 0,
              nBodyDistance: 0,
              style: {
                width: `400px`,
                height: `250px`,
              },
            },
            children: (0, _.jsx)(`div`, {
              className: `UCStFKHRE5I-`,
            }),
          }),
      }),
      (0, _.jsx)(`td`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`td`, {
        className: (0, _.default)(_, !_?.visible && `RIcAO1HiMIU-`),
        children: (0, _.jsx)(_, {
          itemKey: _,
          bExcludedByPreferences: _,
        }),
      }),
      (0, _.jsx)(`td`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            _: _,
          }),
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let { rank: _ } = _,
    { nRank: _, itemKey: _, nConcurrentInGame: _, nPeakInGame: _ } = _;
  return (0, _.jsx)(_, {
    nRank: _,
    itemKey: _,
    rctTrailingCells: (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`td`, {
          className: _,
          children: _(_),
        }),
        (0, _.jsx)(_, {
          nPeakInGame: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { rank: _ } = _,
    { nRank: _, itemKey: _, nRankLastWeek: _, nPeakInGame: _ } = _;
  return (0, _.jsx)(_, {
    nRank: _,
    itemKey: _,
    rctTrailingCells: (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          nRank: _,
          nRankLastPeriod: _,
        }),
        (0, _.jsx)(_, {
          nPeakInGame: _,
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`td`, {
    className: _,
    children: _(_.nPeakInGame),
  });
}
function _(_) {
  let { nRank: _, nRankLastPeriod: _ } = _,
    { direction: _, symbol: _ } = _(_, _),
    _ = _ > 0 && _ <= 100;
  return (0, _.jsx)(`td`, {
    className: (0, _.default)(_, _),
    children: (0, _.jsx)(_, {
      className: _,
      toolTipContent: _(`#SteamCharts_TopSellers_ChangeTooltip`),
      direction: `top`,
      children: _
        ? `${_} ${Math.abs(_ - _)}`
        : (0, _.jsx)(`span`, {
            className: _,
            children: _(`#SteamCharts_TopSellers_TableNew`),
          }),
    }),
  });
}
