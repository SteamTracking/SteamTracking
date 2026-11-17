var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { itemKey: _ } = _,
    _ = _(_, `library_hero`, `page_background`);
  return _
    ? (0, _.jsx)(`img`, {
        src: _,
        className: _,
        alt: ``,
      })
    : null;
}
var _ = _(_(), 1);
function _(_) {
  if (!_?.length) return !1;
  let _ = _.excluded_content_descriptors;
  return _.some((_) => _.includes(_));
}
var _ = `cCE5WXLdwQ4-`,
  _ = `znd-X2mGJSY-`,
  _ = `PJXSVZxaIEI-`,
  _ = `Ndo9bDn7UyI-`,
  _ = `kJXehGIbY-s-`,
  _ = `_-5pUxYYQkhQ-`,
  _ = `xc4l58Ie4g4-`,
  _ = `_21HazCjAy-M-`,
  _ = `-GpP-vr2Z7Q-`,
  _ = `_0USYKk35QGU-`,
  _ = `_6-rISlJoUe0-`,
  _ = `iV08nNqP--8-`,
  _ = `HHfkg1UJUQw-`,
  _ = `UCStFKHRE5I-`,
  _ = `f43kwggd5Os-`,
  _ = `owxxTzCprsc-`,
  _ = `AMqeZJOLXaA-`,
  _ = `_0UyVznhx0AQ-`,
  _ = `PRt-CUL-YZk-`,
  _ = `-pKIiUTXq-w-`,
  _ = `RIcAO1HiMIU-`,
  _ = `OPsTpFowVcA-`,
  _ = `vGOJiIhBnNo-`,
  _ = `zsaHTbjfLGQ-`,
  _ = `VVPCVBQFI2k-`,
  _ = `FXMJgCmo-ew-`,
  _ = `_755rxrliZlU-`,
  _ = `ZHEMgRRtpks-`,
  _ = `XK8YJcjBiLw-`,
  _ = `uPPOdE9oO-E-`,
  _ = `TBll5Xaci1U-`,
  _ = `llXybK-kQyQ-`,
  _ = `RXflLOgH0r0-`,
  _ = `cNorHOLUtNs-`,
  _ = `uLtCOZgA8ls-`,
  _ = `-It74tVWgJY-`,
  _ = `kYQK8GGNzkk-`,
  _ = `RILCKx6ZkRg-`,
  _ = `y8ScxjY4mi8-`,
  _ = `Tc1RM13bONs-`,
  _ = `_9HaRk8FtAYQ-`;
function _(_) {
  let { itemKey: _, bExcludedByPreferences: _ } = _,
    { data: _ } = _(_),
    _ = !!_?.visible && !_;
  return (0, _.jsx)(_, {
    storeItem: _,
    feature: `topchartlist`,
    className: _,
    children: _
      ? (0, _.jsx)(_, {
          itemKey: _,
          strName: _?.name ?? ``,
        })
      : (0, _.jsx)(_, {
          strName: _?.name ?? ``,
          bExcludedByPreferences: _,
        }),
  });
}
function _(_) {
  let { itemKey: _, strName: _ } = _,
    { bIsOwned: _, unAppID: _ } = _(_),
    _ = _(_),
    _ = _(_, `small_capsule`);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (_ || _) &&
        (0, _.jsx)(`div`, {
          className: `-qtyuB8MIAk-`,
          children: (0, _.jsxs)(`span`, {
            className: `Orilt6rfaTI-`,
            children: [
              _
                ? (0, _.jsx)(_, {
                    className: `_5TCfq8Nc4Ao-`,
                  })
                : (0, _.jsx)(_, {
                    className: `_5TCfq8Nc4Ao-`,
                  }),
              (0, _.jsx)(`div`, {
                className: `tt5IOM1g3bo-`,
                children: _.Localize(
                  _ ? `#Sale_InLibrary` : `#Sale_OnWishlist`,
                ),
              }),
            ],
          }),
        }),
      _ &&
        (0, _.jsx)(`img`, {
          className: `R5kUVghjNM0-`,
          src: _,
          alt: ``,
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { strName: _, bExcludedByPreferences: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ || _(`#SteamCharts_UnknownGameTitle`),
      (0, _.jsx)(`span`, {
        className: _,
        children: _(
          _
            ? `#SteamCharts_BlockedByPreferences`
            : `#SteamCharts_UnavailableCountryRestriction`,
        ),
      }),
    ],
  });
}
function _(_) {
  let { children: _ } = _;
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
              children: (0, _.jsxs)(_, {
                className: _,
                toolTipContent: _(`#SteamCharts_TopSellers_TablePriceTooltip`),
                direction: `top`,
                children: [
                  _(`#SteamCharts_TopSellers_TablePrice`),
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
            }),
            (0, _.jsx)(`th`, {
              className: _,
              align: `right`,
              children: (0, _.jsxs)(_, {
                className: _,
                toolTipContent: _(`#SteamCharts_TopSellers_TableWeeksTooltip`),
                direction: `top`,
                children: [
                  _(`#SteamCharts_TopSellers_TableWeeks`),
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
    { nRank: _, itemKey: _, nConsecutiveWeeks: _ } = _,
    { data: _ } = _(_),
    _ = _(_?.content_descriptorids),
    _ = _(_),
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
            bPrePurchaseBesidePrice: !0,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        rank: _,
      }),
      (0, _.jsx)(`td`, {
        className: _,
        children: (0, _.jsx)(_, {
          className: _,
          toolTipContent: _(`#SteamCharts_TopSellers_NumTooltip`),
          direction: `top`,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { rank: _ } = _,
    { nRank: _, nRankLastWeek: _, bFirstTop100: _, bRankChangeUnknown: _ } = _,
    { direction: _, symbol: _ } = _(_, _);
  if (_)
    return (0, _.jsx)(`td`, {
      className: _,
    });
  let _;
  return (
    (_ =
      _ && _ <= 100
        ? `${_} ${Math.abs(_ - _)}`
        : _
          ? (0, _.jsx)(`span`, {
              className: _,
              children: _(`#SteamCharts_TopSellers_TableNew`),
            })
          : (0, _.jsx)(`span`, {
              className: _,
              children: _(`#SteamCharts_TopSellers_TableReturning`),
            })),
    (0, _.jsx)(`td`, {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {
        className: _,
        toolTipContent: _(`#SteamCharts_TopSellers_ChangeTooltip`),
        direction: `top`,
        children: _,
      }),
    })
  );
}
function _(_, _) {
  return _ > _
    ? {
        direction: `Up`,
        symbol: `▲`,
      }
    : _ < _
      ? {
          direction: `Down`,
          symbol: `▼`,
        }
      : {
          direction: ``,
          symbol: ``,
        };
}
