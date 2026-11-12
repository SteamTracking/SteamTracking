var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(),
  _ = _({
    Component: _,
  });
function _() {
  let [_, _] = _.useState(`concurrent`);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        children: (0, _.jsx)(`h1`, {
          children: _(`#SteamCharts_Menu_MostPlayed`),
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _(`#SteamCharts_Menu_MostPlayed_Subtitle`),
          (0, _.jsx)(_, {
            eView: _,
            setView: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          children:
            _ === `dailyplayers` ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
        }),
      }),
    ],
  });
}
function _(_) {
  let { eView: _, setView: _ } = _,
    _ = _.useMemo(
      () => [
        {
          data: `concurrent`,
          label: _(`#SteamCharts_Menu_ByConcurrentPlayersSubtitle`),
        },
        {
          data: `dailyplayers`,
          label: _(`#SteamCharts_Menu_ByDailyActiveUsersSubtitle`),
        },
      ],
      [],
    ),
    _ = _.find((_) => _.data === _) ?? _[0];
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        options: _,
        selectedValue: _,
        onSelectionChange: (_) => _(_.data),
        getOptionLabel: (_) => _.label,
      }),
    }),
  });
}
function _() {
  let { data: _, isPending: _, isError: _ } = _();
  return _
    ? (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`h3`, {
          children: `Error loading most played`,
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
              eView: `concurrent`,
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
function _() {
  let { data: _, isPending: _, isError: _ } = _();
  return _
    ? (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`h3`, {
          children: `Error loading most played`,
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
              eView: `dailyplayers`,
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
export { _ as route };
