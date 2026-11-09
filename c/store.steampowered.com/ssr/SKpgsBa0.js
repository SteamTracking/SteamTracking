var _ = {};
(_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = {
    PerYear: 31536e3,
    PerMonth: 2628e3,
    PerWeek: 604800,
    PerDay: 86400,
    PerHour: 3600,
    PerMinute: 60,
  },
  _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Ago = 1)] = `Ago`),
      (_[(_.Remaining = 2)] = `Remaining`),
      _
    );
  })({});
function _(_, _, _) {
  let _;
  _ =
    typeof _ == `boolean`
      ? {
          eSuffix: +!_,
          bForceSingleUnits: _,
          bHighGranularity: !1,
        }
      : {
          eSuffix: 1,
          bForceSingleUnits: !1,
          bHighGranularity: !1,
          ..._,
        };
  let _ = `TimeInterval_`;
  _.eSuffix == 1
    ? (_ = `TimeSince_`)
    : _.eSuffix == 2 && (_ = `TimeRemaining_`);
  let _ = (_) => Math.floor(_);
  if (
    (_.bAllowDecimal && (_ = (_) => Math.round(_ * 10) / 10),
    _ >= _.PerYear * 2)
  )
    return _.Localize(`#${_}XYears`, _(_ / _.PerYear));
  if (_ >= _.PerYear)
    return (
      (_ -= _.PerYear),
      _ >= _.PerMonth * 2 && !_.bForceSingleUnits
        ? _.Localize(`#${_}1YearXMonths`, _(_ / _.PerMonth))
        : _.Localize(`#${_}1Year`)
    );
  if (_ >= _.PerMonth * 2) return _.Localize(`#${_}XMonths`, _(_ / _.PerMonth));
  if (_ >= _.PerWeek * 2) return _.Localize(`#${_}XWeeks`, _(_ / _.PerWeek));
  if (_ >= _.PerWeek) return _.Localize(`#${_}1Week`, _(_ / _.PerWeek));
  if (_ >= _.PerDay * 2) return _.Localize(`#${_}XDays`, _(_ / _.PerDay));
  if (_ >= _.PerDay)
    return (
      (_ -= _.PerDay),
      _ >= _.PerHour * 2 && !_.bForceSingleUnits
        ? _.Localize(`#${_}1DayXHours`, _(_ / _.PerHour))
        : _.Localize(`#${_}1Day`)
    );
  if (_ >= _.PerHour * 2) return _.Localize(`#${_}XHours`, _(_ / _.PerHour));
  if (_ >= _.PerHour)
    return (
      (_ -= _.PerHour),
      _ >= _.PerMinute * 2 && !_.bForceSingleUnits
        ? _.Localize(`#${_}1HourXMinutes`, _(_ / _.PerMinute))
        : _.Localize(`#${_}1Hour`)
    );
  if (_ >= _.PerMinute * 2) {
    let _ = Math.floor(_ / _.PerMinute),
      _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _.Localize(`#${_}XMinutes`, _(_ / _.PerMinute))
      : _ == 1
        ? _.Localize(`#${_}XMinutes1Second`, _)
        : _.Localize(`#${_}XMinutesXSeconds`, _, _);
  }
  if (_ >= _.PerMinute) {
    let _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _.Localize(`#${_}1Minute`)
      : _ == 1
        ? _.Localize(`#${_}1Minute1Second`)
        : _.Localize(`#${_}1MinuteXSeconds`, _);
  }
  return _.bHighGranularity
    ? _ == 1
      ? _.Localize(`#${_}1Second`)
      : _.Localize(`#${_}XSeconds`, _)
    : _.Localize(`#${_}LessThanAMinute`);
}
function _(_, _, _) {
  let _;
  _ =
    _ === void 0 || _ === !0 || _ === !1
      ? {
          weekday: _ ? `long` : `short`,
          year: _ ? void 0 : `numeric`,
        }
      : _;
  let _ = new Date(_ * 1e3),
    _ = {
      weekday: `short`,
      month: `long`,
      day: `numeric`,
      year: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = new Date(_ * 1e3),
    _ = new Date();
  if (_.getFullYear() != _.getFullYear() || _.getFullYear() == _.getFullYear())
    return `${_(_)} - ${_(_)}`;
  let _ = {
      month: `short`,
      day: `numeric`,
    },
    _ = _.toLocaleDateString(_(), _) + ` - `;
  return _.getMonth() == _.getMonth()
    ? _ +
        _.toLocaleDateString(_(), {
          day: `numeric`,
        })
    : _ + _.toLocaleDateString(_(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  return _(new Date(_ * 1e3));
}
function _(_) {
  let _ = new Date();
  return (
    _.setHours(15),
    _.toLocaleTimeString(_, {
      hour: `numeric`,
    }) ==
      _.toLocaleTimeString(_, {
        hour: `numeric`,
        hour12: !1,
      })
  );
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
      hourCycle: `h23`,
    },
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
    },
    _ = _(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
function _(_, _, _) {
  return (
    _(new Date(_ * 1e3), !1, !1) +
    ` ` +
    _(_, {
      bForce24HourClock: _,
    }) +
    ` ` +
    _
  );
}
function _(_, _ = !1, _ = !0) {
  let _ = {
    weekday: _ ? `long` : `short`,
    day: `numeric`,
    month: _ ? `long` : `short`,
  };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  return _.toLocaleDateString(_(), {
    month: `long`,
  });
}
function _(_) {
  return _.toLocaleDateString(_(), {
    month: `short`,
  });
}
function _(_) {
  return _.toLocaleDateString(_(), {
    year: `numeric`,
  });
}
function _(_) {
  return _.toLocaleDateString(_(), {
    month: `long`,
    year: `numeric`,
  });
}
function _(_, _) {
  switch (_.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return _.Localize(
        _ ? `#Time_QuarterOfYear_Expanded_Q1` : `#Time_QuarterOfYear_Q1`,
        _.getUTCFullYear(),
      );
    case 3:
    case 4:
    case 5:
      return _.Localize(
        _ ? `#Time_QuarterOfYear_Expanded_Q2` : `#Time_QuarterOfYear_Q2`,
        _.getUTCFullYear(),
      );
    case 6:
    case 7:
    case 8:
      return _.Localize(
        _ ? `#Time_QuarterOfYear_Expanded_Q3` : `#Time_QuarterOfYear_Q3`,
        _.getUTCFullYear(),
      );
    default:
      return _.Localize(
        _ ? `#Time_QuarterOfYear_Expanded_Q4` : `#Time_QuarterOfYear_Q4`,
        _.getUTCFullYear(),
      );
  }
}
function _(_) {
  let _ = Math.floor(_ / _.PerYear),
    _ = Math.floor(_ / _.PerMonth),
    _ = Math.floor((_ % _.PerMonth) / _.PerDay),
    _ = Math.floor((_ % _.PerDay) / _.PerHour),
    _ = Math.floor((_ % _.PerHour) / _.PerMinute);
  return (
    (_ %= _.PerMinute),
    _ > 0
      ? _.Localize(`#TimeRemaining_MoreThanOneYear`)
      : _ > 0
        ? _.Localize(`#TimeRemaining_MonthsDays`, _, _)
        : _ > 0
          ? _.Localize(
              `#TimeRemaining_DaysHoursMinutes`,
              _,
              _.toString().padStart(2, `0`),
              _.toString().padStart(2, `0`),
            )
          : _ > 0
            ? _.Localize(
                `#TimeRemaining_HoursMinutesSeconds`,
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
              )
            : _.Localize(
                `#TimeRemaining_MinutesSeconds`,
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
              )
  );
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
