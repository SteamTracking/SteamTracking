var _ = _(_()),
  _ = [`axis`],
  _ = (0, _.forwardRef)((_, _) =>
    _.createElement(_, {
      chartName: `LineChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: _,
      tooltipPayloadSearcher: _,
      categoricalChartProps: _,
      ref: _,
    }),
  ),
  _ = _(_(), 1),
  _ = `America/Los_Angeles`,
  _ = `#67c1f5`,
  _ = `#ca4848`,
  _ = `Gj91CnK-iqw-`,
  _ = `cim3VTMsZv0-`,
  _ = `RiHIWkQx7tY-`,
  _ = `Stp-FalzM5M-`,
  _ = `cOaHoibDAMs-`,
  _ = `_1ewcK5-JG1k-`,
  _ = `BhBVlvMBIio-`,
  _ = `_9zPcADq-lVI-`,
  _ = `_0J-nCyziVek-`,
  _ = `MJvfIRpR3n4-`,
  _ = _();
_();
var _ = `games/593110/announcements/detail/1301948399251160549`,
  _ = _({
    Component: _,
  });
function _() {
  let { rtLastUpdated: _, history: _, rgCategories: _ } = _.useLoaderData();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        children: (0, _.jsx)(`h1`, {
          children: _(`#SteamCharts_SupportStats`),
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(
          `#SupportStats_Header_Title_Updated`,
          _(_, {
            weekday: void 0,
            timeZone: _,
          }),
        ),
      }),
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        children: (0, _.jsx)(`p`, {
          children: _(
            _(`#SupportStats_Header_Desc`),
            (0, _.jsx)(`a`, {
              href: `${_.COMMUNITY_BASE_URL}${_}`,
              target: `_blank`,
              rel: `noreferrer`,
            }),
          ),
        }),
      }),
      _ &&
        (0, _.jsxs)(_, {
          className: `wnzEl6A2mnI-`,
          children: [
            (0, _.jsxs)(`div`, {
              className: `GpbRWedhZd4-`,
              children: [
                (0, _.jsx)(`b`, {
                  children: _(`#SupportStats_RequestsAndBacklog_Title`),
                }),
                ` `,
                _(`#SuportStats_MostRecent90Days`),
              ],
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                rgChart: _.rgChart,
              }),
            }),
            (0, _.jsx)(_, {
              history: _,
            }),
          ],
        }),
      _.length > 0 &&
        (0, _.jsxs)(_, {
          className: `wnzEl6A2mnI-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `GpbRWedhZd4-`,
              children: (0, _.jsx)(`b`, {
                children: _(`#SupportStats_RecentSupportActivity_Title`),
              }),
            }),
            (0, _.jsx)(`div`, {
              className: `MZenwtz6eTk-`,
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  rgCategories: _,
                }),
              }),
            }),
          ],
        }),
    ],
  });
}
var _ = {
    width: `100%`,
    height: `100%`,
  },
  _ = {
    top: 20,
    left: 30,
    right: 30,
    bottom: 0,
  },
  _ = 7;
function _(_) {
  return _(_ / 1e3, {
    year: void 0,
    timeZone: _,
  });
}
var _ = _.memo(function (_) {
  let { rgChart: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(_, {
      data: _,
      responsive: !0,
      style: _,
      margin: _,
      children: [
        (0, _.jsx)(_, {
          dataKey: `msDate`,
          tickFormatter: _,
          interval: _,
        }),
        (0, _.jsx)(_, {
          type: `number`,
          tickFormatter: _,
        }),
        (0, _.jsx)(_, {
          content: (_) =>
            (0, _.jsx)(_, {
              bActive: !!_.active,
              rgPayload: _.payload,
            }),
        }),
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          type: `monotone`,
          dataKey: `cSubmitted`,
          name: _(`#SupportStats_Requests`),
          stroke: _,
          dot: !1,
        }),
        (0, _.jsx)(_, {
          type: `monotone`,
          dataKey: `cWaiting`,
          name: _(`#SupportStats_Backlog`),
          stroke: _,
          dot: !1,
        }),
      ],
    }),
  });
});
function _(_) {
  let { bActive: _, rgPayload: _ } = _;
  if (!_ || !_?.length) return null;
  let _ = _[0].payload;
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(_.msDate),
      }),
      _.map(
        (_, _) =>
          typeof _.value == `number` &&
          (0, _.jsxs)(
            `div`,
            {
              style: {
                color: _.color,
              },
              children: [_.name, `: `, _(_.value)],
            },
            _,
          ),
      ),
    ],
  });
}
function _(_) {
  let { history: _ } = _;
  return (0, _.jsxs)(`table`, {
    className: _,
    children: [
      (0, _.jsx)(`thead`, {
        children: (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`th`, {}),
            (0, _.jsx)(`th`, {
              children: _(`#SupportStats_Table_Current`),
            }),
            (0, _.jsx)(`th`, {
              children: _(`#SupportStats_Table_Peak`),
            }),
          ],
        }),
      }),
      (0, _.jsx)(`tbody`, {
        children: (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`td`, {
              className: _,
              children: _(`#SupportStats_Table_Backlog`),
            }),
            (0, _.jsx)(`td`, {
              className: _,
              children: _(_.nBacklogCurrent),
            }),
            (0, _.jsx)(`td`, {
              className: _,
              children: _(_.nBacklogPeak),
            }),
          ],
        }),
      }),
    ],
  });
}
var _ = {
  refunds: `#SupportStats_CatRefunds`,
  accountissues: `#SupportStats_CatAccountIssues`,
  purchaseissues: `#SupportStats_CatPurchaseIssues`,
  techissues: `#SupportStats_CatSteamOrGameTechIssues`,
};
function _(_) {
  let { rgCategories: _ } = _;
  return (0, _.jsxs)(`table`, {
    className: _,
    children: [
      (0, _.jsx)(`thead`, {
        className: _,
        children: (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`th`, {
              className: _,
              children: (0, _.jsx)(`span`, {
                children: _(`#SupportStats_TicketsByCategory`),
              }),
            }),
            (0, _.jsx)(`th`, {
              className: _,
              children: (0, _.jsx)(`span`, {
                children: _(`#SupportStats_TicketsLast24Hours`),
              }),
            }),
            (0, _.jsx)(`th`, {
              className: _,
              children: (0, _.jsx)(`span`, {
                children: _(`#SupportStats_TimeToResponse`),
              }),
            }),
          ],
        }),
      }),
      (0, _.jsx)(`tbody`, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              category: _,
            },
            _.eCategory,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { category: _ } = _;
  return (0, _.jsxs)(`tr`, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(`td`, {
        className: _,
        children: _(_[_.eCategory]),
      }),
      (0, _.jsx)(`td`, {
        className: _,
        children: _(_.cSubmittedLast24),
      }),
      (0, _.jsx)(`td`, {
        className: _,
        children: _(
          `#SupportStats_RecentWaitTimeData`,
          _(_.nSecondsToFirstResponse30Pct),
          _(_.nSecondsToFirstResponse90Pct),
        ),
      }),
    ],
  });
}
function _(_) {
  return _(_, {
    eSuffix: _.None,
    bAllowDecimal: !0,
  });
}
export { _ as route };
