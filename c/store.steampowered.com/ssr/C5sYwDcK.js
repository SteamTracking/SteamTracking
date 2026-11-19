var _ = _(_());
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
var _ = (_, _) =>
    _.isValidElement(_)
      ? _.cloneElement(_, _)
      : typeof _ == `function`
        ? _(_)
        : _.createElement(
            `line`,
            _({}, _, {
              className: `recharts-reference-line-line`,
            }),
          ),
  _ = (_, _, _, _, _, _, _, _, _) => {
    var { _: _, _: _, width: _, height: _ } = _;
    if (_) {
      var { _: _ } = _,
        _ = _._.apply(_, {
          position: _,
        });
      if (_(_) || (_.ifOverflow === `discard` && !_._.isInRange(_)))
        return null;
      var _ = [
        {
          _: _ + _,
          _: _,
        },
        {
          _: _,
          _: _,
        },
      ];
      return _ === `left` ? _.reverse() : _;
    }
    if (_) {
      var { _: _ } = _,
        _ = _._.apply(_, {
          position: _,
        });
      if (_(_) || (_.ifOverflow === `discard` && !_._.isInRange(_)))
        return null;
      var _ = [
        {
          _: _,
          _: _ + _,
        },
        {
          _: _,
          _: _,
        },
      ];
      return _ === `top` ? _.reverse() : _;
    }
    if (_) {
      var { segment: _ } = _,
        _ = _.map((_) =>
          _.apply(_, {
            position: _,
          }),
        );
      return _.ifOverflow === `discard` && _.some((_) => !_.isInRange(_))
        ? null
        : _;
    }
    return null;
  };
function _(_) {
  var _ = _();
  return (
    (0, _.useEffect)(
      () => (
        _(_(_)),
        () => {
          _(_(_));
        }
      ),
    ),
    null
  );
}
function _(_) {
  var {
      _: _,
      _: _,
      segment: _,
      xAxisId: _,
      yAxisId: _,
      shape: _,
      className: _,
      ifOverflow: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _((_) => _(_, _)),
    _ = _((_) => _(_, _)),
    _ = _((_) => _(_, `xAxis`, _, _)),
    _ = _((_) => _(_, `yAxis`, _, _)),
    _ = _(),
    _ = _(_),
    _ = _(_);
  if (!_ || !_ || _ == null || _ == null || _ == null || _ == null) return null;
  var _ = _(
    _({
      _: _,
      _: _,
    }),
    _,
    _,
    _ && _.length === 2,
    _,
    _.position,
    _.orientation,
    _.orientation,
    _,
  );
  if (!_) return null;
  var [{ _: _, _: _ }, { _, _: _ }] = _,
    _ = _(
      _(
        {
          clipPath: _ === `hidden` ? `url(#${_})` : void 0,
        },
        _(_),
      ),
      {},
      {
        _: _,
        _: _,
        _: _,
        _: _,
      },
    );
  return _.createElement(
    _,
    {
      className: _(`recharts-reference-line`, _),
    },
    _(_, _),
    _.createElement(
      _,
      _({
        _: _,
        _: _,
        _: _,
        _: _,
      }),
      _.createElement(_, {
        label: _.label,
      }),
      _.children,
    ),
  );
}
function _(_) {
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(_, {
      yAxisId: _.yAxisId,
      xAxisId: _.xAxisId,
      ifOverflow: _.ifOverflow,
      _: _._,
      _: _._,
    }),
    _.createElement(_, _),
  );
}
var _ = class extends _.Component {
  render() {
    return _.createElement(_, this.props);
  }
};
(_(_, `displayName`, `ReferenceLine`),
  _(_, `defaultProps`, {
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    fill: `none`,
    stroke: `#ccc`,
    fillOpacity: 1,
    strokeWidth: 1,
    position: `middle`,
  }));
var _ = _(_(), 1),
  _ = `SteamCharts Overview Top Sellers`,
  _ = `eyc4VnVmsCc-`,
  _ = `VFwHp-ugDQ4-`,
  _ = `hNg4M-e9yys-`,
  _ = `UzY-DsdkE1I-`,
  _ = `r39MVTqKimI-`,
  _ = `F5GDaRarorU-`,
  _ = `tYHZXmg84-w-`,
  _ = `NqYK7u5qDaU-`,
  _ = _();
_();
var _ = `#82FF01`,
  _ = {
    width: `100%`,
    height: `100%`,
  },
  _ = {
    top: 25,
    left: 0,
    right: 0,
    bottom: 0,
  };
function _(_) {
  let { data: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          data: _,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(_.nPeak),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`span`, {
                  className: _,
                  children: _(`#SteamCharts_Graph_PeakConcurrent`),
                }),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(_.nCurrent),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`span`, {
                  className: _,
                  children: _(`#SteamCharts_Graph_OnlineNow`),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var _ = _.memo(function (_) {
  let { data: _ } = _;
  return (0, _.jsxs)(_, {
    data: _.rgHistory,
    responsive: !0,
    style: _,
    margin: _,
    barGap: 10,
    children: [
      (0, _.jsx)(`defs`, {
        children: (0, _.jsxs)(`linearGradient`, {
          _: `bar_linear`,
          _: `0`,
          _: `0`,
          _: `0`,
          _: `1`,
          children: [
            (0, _.jsx)(`stop`, {
              stopColor: `#1A9FFF`,
            }),
            (0, _.jsx)(`stop`, {
              offset: `0.01`,
              stopColor: `#1A9FFF`,
            }),
            (0, _.jsx)(`stop`, {
              offset: `0.0101`,
              stopColor: `#1A9FFF`,
              stopOpacity: `0.5`,
            }),
            (0, _.jsx)(`stop`, {
              offset: `1`,
              stopColor: `#30363D`,
              stopOpacity: `0.5`,
            }),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        vertical: !1,
        stroke: `#a0aab6`,
      }),
      (0, _.jsx)(_, {
        tickFormatter: _,
        tick: {
          fill: `white`,
        },
        axisLine: !1,
      }),
      (0, _.jsx)(_, {
        content: (_) =>
          (0, _.jsx)(_, {
            bActive: !!_.active,
            rgPayload: _.payload,
          }),
      }),
      (0, _.jsx)(_, {
        dataKey: `nUsers`,
        barSize: 2,
        fill: `url( #bar_linear )`,
      }),
      (0, _.jsx)(_, {
        _: _.nPeak,
        stroke: _,
        strokeDasharray: `6`,
      }),
    ],
  });
});
function _(_) {
  let { bActive: _, rgPayload: _ } = _;
  if (!_ || !_?.length) return null;
  let _ = _[0].payload;
  return (0, _.jsx)(_, {
    children: _.LocalizeReact(
      `#SteamCharts_OverviewGraph_Tooltip_OnlineAt`,
      (0, _.jsx)(`b`, {
        children: _(_.nUsers),
      }),
      new Date(_.msDate).toLocaleString(_()),
    ),
  });
}
var _ = `_7zmpUGEGDTM-`,
  _ = `gVg7T-9KFfY-`,
  _ = `NBN-f1mBrso-`,
  _ = `_4IVE0bUT9m8-`,
  _ = `uX4qL3T--O8-`,
  _ = `fm1dMrfMpDc-`,
  _ = `xjiY68vUbWQ-`,
  _ = `_7DwvRNTA4oI-`,
  _ = `S0OGjWAy4Co-`,
  _ = `eT-MIEVrsB8-`,
  _ = `RSXs4rVtOK8-`,
  _ = `ztCS0xyYYr0-`,
  _ = `mHuhq3wMXEc-`,
  _ = `wG6ZhxuTsTw-`,
  _ = `Hm1VV1Ltxnc-`,
  _ = `rG4-9oKXZtI-`,
  _ = `_5qMqVivZRIU-`,
  _ = `gw1-e3jAFNg-`,
  _ = `uq1fUtBY8NQ-`,
  _ = `z6XJAH8Yf70-`,
  _ = _({
    Component: _,
  });
function _() {
  let {
    onlineUsers: _,
    rtCurrentWeek: _,
    strTopSellersCountryCode: _,
    monthly: _,
    yearly: _,
  } = _.useLoaderData();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        children: (0, _.jsx)(`h1`, {
          children: _(`#SteamCharts_PageTitle_Overview`),
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCharts_PageSubTitle_Overview`),
      }),
      _ &&
        (0, _.jsxs)(_, {
          className: `wnzEl6A2mnI-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `GpbRWedhZd4-`,
              children: _(`#SteamCharts_OverviewGraph_Title_PlayersOnline`),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                data: _,
              }),
            }),
          ],
        }),
      (0, _.jsxs)(_, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                feature: `topsellers`,
                children: (0, _.jsx)(_, {
                  strCountryCode: _,
                }),
              }),
            }),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                feature: `mostplayed`,
                children: (0, _.jsx)(_, {}),
              }),
            }),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                rtCurrentWeek: _,
                strCountryCode: _,
              }),
            }),
          }),
          (0, _.jsx)(`div`, {
            className: (0, _.default)(_, _),
            children: (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                monthly: _,
              }),
            }),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            yearly: _,
          }),
        }),
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`b`, {
              children: _(`#SteamCharts_Overview_Title_More`),
            }),
          }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                href: `${_.STORE_BASE_URL}hwsurvey/`,
                children: _(`#SteamCharts_Overview_Link_Hardware`),
              }),
              (0, _.jsx)(_, {
                href: `${_.STORE_BASE_URL}stats/content/`,
                children: _(`#SteamCharts_Overview_Link_Download`),
              }),
              (0, _.jsx)(_, {
                href: `${_.STORE_BASE_URL}charts/support`,
                children: _(`#SteamCharts_Overview_Link_Support`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { strCountryCode: _ } = _,
    { data: _ } = _(_, 5, _);
  return (0, _.jsx)(_, {
    strName: _(`#SteamCharts_OverviewGraph_Title_TopSellers`),
    strTopItemDesc: _(`#SteamCharts_OverviewGraph_Desc_TopSelling`),
    rgItemKeys: _?.rgItemIDs,
    children: (0, _.jsx)(_, {
      className: _,
      href: `${_.STORE_BASE_URL}charts/topselling/${_(_)}`,
      children: _(`#SteamCharts_OverviewGraph_Button_TopSelling`),
    }),
  });
}
function _() {
  let { data: _ } = _(),
    _ = _.useMemo(() => _?.rgRanks.slice(0, 5), [_]);
  return (0, _.jsx)(_, {
    strName: _(`#SteamCharts_OverviewGraph_Title_MostPlayed`),
    strTopItemDesc: _(`#SteamCharts_OverviewGraph_Desc_MostPlayed`),
    rgItemKeys: _?.map((_) => _.itemKey),
    rgAddData: _?.map((_) => _(_.nConcurrentInGame)),
    strTopItemAddDataDesc: _(`#SteamCharts_OverviewGraph_Desc_InGame`),
    children: (0, _.jsx)(_, {
      className: _,
      href: `${_.STORE_BASE_URL}charts/mostplayed`,
      children: _(`#SteamCharts_OverviewGraph_Button_MostPlayed`),
    }),
  });
}
function _(_) {
  let {
    strName: _,
    strTopItemDesc: _,
    rgItemKeys: _,
    rgAddData: _,
    strTopItemAddDataDesc: _,
    children: _,
  } = _;
  if (!_?.length)
    return (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _),
    });
  let [_, ..._] = _;
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                itemKey: _,
              }),
              (0, _.jsx)(_, {
                nRank: 1,
                itemKey: _,
                strItemDesc: _,
                strAddData: _?.[0],
                strAddDataDesc: _,
              }),
            ],
          }),
          _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                nRank: _ + 2,
                itemKey: _,
                strAddData: _?.[_ + 1],
              },
              _,
            ),
          ),
          _,
        ],
      }),
    ],
  });
}
function _(_) {
  let { itemKey: _ } = _,
    { data: _ } = _(_),
    _ = _(_, `main_capsule`);
  return _
    ? (0, _.jsx)(_, {
        storeItem: _,
        children: (0, _.jsx)(`img`, {
          className: _,
          src: _,
          alt: ``,
        }),
      })
    : null;
}
function _(_) {
  let {
      nRank: _,
      itemKey: _,
      strItemDesc: _,
      strAddData: _,
      strAddDataDesc: _,
    } = _,
    { data: _ } = _(_);
  return (0, _.jsxs)(_, {
    className: _,
    storeItem: _,
    depth: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _?.name,
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `hv-Pl2EA7-c-`,
              children: _,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              children: _,
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `kY5DWfq2Oe0-`,
              children: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rtCurrentWeek: _, strCountryCode: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        rtWeekStart: _,
        strCountryCode: _,
      })
    : null;
}
function _(_) {
  let { rtWeekStart: _, strCountryCode: _ } = _,
    { data: _ } = _(_, _);
  return (0, _.jsx)(_, {
    strName: _(_, {
      timeZone: `UTC`,
    }),
    strRange: _(`#SteamCharts_Overview_Title_Weekly`),
    rgItemKeys: _?.rgRanks.map((_) => _.itemKey),
    strLinkLabel: _(`#SteamCharts_TopSellers_PageTitle`),
    strLinkURL: `${_.STORE_BASE_URL}charts/topsellers/${_(_)}/${_(_)}`,
  });
}
function _(_) {
  let { monthly: _ } = _;
  return _.rtMonth
    ? (0, _.jsx)(_, {
        strName: _(_.rtMonth),
        strRange: _(`#SteamCharts_Overview_Title_Monthly`),
        rgItemKeys: _.rgAppIDs.map((_) => ({
          appid: _,
        })),
        strLinkLabel: _(`#SteamCharts_Overview_Title_MonthlyTop`),
        strLinkURL: `${_.STORE_BASE_URL}charts/topnewreleases/${_.strSaleName}`,
      })
    : null;
}
var _ = [5, 2, 7, 4, 0, 1, 8, 6, 3, 5, 7, 5];
function _(_) {
  let {
      strName: _,
      strRange: _,
      rgItemKeys: _,
      strLinkLabel: _,
      strLinkURL: _,
    } = _,
    _ = (_ ?? []).slice(0, 9),
    _ = _.map((_) => _[_]);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`b`, {
            children: _,
          }),
          ` `,
          _,
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.map(
              (_, _) =>
                _ &&
                (0, _.jsx)(
                  _,
                  {
                    itemKey: _,
                  },
                  _,
                ),
            ),
          }),
          (0, _.jsx)(_, {
            className: _,
            href: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { yearly: _ } = _;
  return !_.nYear || !_.rgAppIDs.length
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`b`, {
                children: _(`#SteamCharts_Overview_Title_Yearly`),
              }),
              `\xA0`,
              _.nYear,
            ],
          }),
          (0, _.jsxs)(_, {
            href: `${_.STORE_BASE_URL}charts/bestofyear/${_.nYear}`,
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _.rgAppIDs.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      appid: _,
                    },
                    _,
                  ),
                ),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#SteamCharts_Yearly_Title`, _.nYear),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#SteamCharts_Yearly_BannerDesc`),
              }),
            ],
          }),
        ],
      });
}
function _(_) {
  let { appid: _ } = _,
    _ = _(
      {
        appid: _,
      },
      `hero_capsule`,
    );
  return _
    ? (0, _.jsx)(`img`, {
        src: _,
        alt: ``,
      })
    : null;
}
function _(_) {
  let { itemKey: _ } = _,
    _ = _(_, `header`);
  return _
    ? (0, _.jsx)(`img`, {
        src: _,
        alt: ``,
      })
    : null;
}
export { _ as route };
