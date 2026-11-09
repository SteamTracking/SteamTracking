import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _ } from "./libraries.js";
import "./modals.js";
import { _ } from "./throbber.js";
import { _ } from "./basicbbcodeparser.js";
import "./steammessages_user_reviews_pb.js";
import { _ } from "./reviewajax.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
function _(_, _, _, _, _) {
  return _(
    _,
    ((_, _) => {
      let _ = _[_];
      if (_ === void 0) throw TypeError(_(_));
      return _;
    })(_, _),
    _,
    _,
    _,
  );
}
function _(_, _, _, _, _, _) {
  let _ = _(_, _, _);
  if (_ && _ !== _) throw RangeError(_(_, _, _, _, _));
  return _;
}
function _(_) {
  return _ !== null && /object|function/.test(typeof _);
}
function _(_, _ = Map) {
  let _ = new _();
  return (_, ..._) => {
    if (_.has(_)) return _.get(_);
    let _ = _(_, ..._);
    return (_.set(_, _), _);
  };
}
function _(_) {
  return _(
    {
      name: _,
    },
    1,
  );
}
function _(_, _) {
  return _(
    (_) => ({
      value: _,
      configurable: 1,
      writable: !_,
    }),
    _,
  );
}
function _(_) {
  return _(
    (_) => ({
      get: _,
      configurable: 1,
    }),
    _,
  );
}
function _(_) {
  return {
    [Symbol.toStringTag]: {
      value: _,
      configurable: 1,
    },
  };
}
function _(_, _) {
  let _ = {},
    _ = _.length;
  for (let _ of _) _[_[--_]] = _;
  return _;
}
function _(_, _, _) {
  let _ = {};
  for (let _ in _) _[_] = _(_[_], _, _);
  return _;
}
function _(_, _, _) {
  let _ = {};
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    _[_] = _(_, _, _);
  }
  return _;
}
function _(_, _, _) {
  let _ = {};
  for (let _ = 0; _ < _.length; _++) _[_[_]] = _[_[_]];
  return _;
}
function _(_, _) {
  let _ = Object.create(null);
  for (let _ of _) _[_] = _[_];
  return _;
}
function _(_, _) {
  for (let _ of _) if (_ in _) return 1;
  return 0;
}
function _(_, _, _) {
  for (let _ of _) if (_[_] !== _[_]) return 0;
  return 1;
}
function _(_, _, _) {
  let _ = {
    ..._,
  };
  for (let _ = 0; _ < _; _++) _[_[_]] = 0;
  return _;
}
function _(_, ..._) {
  return (..._) => _(..._, ..._);
}
function _() {}
function _(_) {
  return _[0].toUpperCase() + _.substring(1);
}
function _(_) {
  return _.slice().sort();
}
function _(_, _) {
  return String(_).padStart(_, `0`);
}
function _(_, _) {
  return Math.sign(_ - _);
}
function _(_, _, _) {
  return Math.min(Math.max(_, _), _);
}
function _(_, _) {
  return [Math.floor(_ / _), _(_, _)];
}
function _(_, _) {
  return ((_ % _) + _) % _;
}
function _(_, _) {
  return [_(_, _), _(_, _)];
}
function _(_, _) {
  return Math.trunc(_ / _) || 0;
}
function _(_, _) {
  return _ % _ || 0;
}
function _(_) {
  return Math.abs(_ % 1) === 0.5;
}
function _(_, _, _) {
  let _ = 0,
    _ = 0;
  for (let _ = 0; _ <= _; _++) {
    let _ = _[_[_]],
      _ = _[_],
      [_, _] = _(_, _ / _);
    ((_ += _ * _), (_ += _));
  }
  let [_, _] = _(_, _);
  return [_ + _, _];
}
function _(_, _, _) {
  let _ = {};
  for (let _ = _; _ >= 0; _--) {
    let _ = _[_];
    ((_[_[_]] = _(_, _)), (_ = _(_, _)));
  }
  return _;
}
function _(_) {
  if (_ !== void 0) return _(_);
}
function _(_) {
  if (_ !== void 0) return _(_);
}
function _(_) {
  if (_ !== void 0) return _(_);
}
function _(_) {
  return _(_(_));
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  if (_ == null) throw RangeError(_(_));
  return _;
}
function _(_) {
  if (!_(_)) throw TypeError(_);
  return _;
}
function _(_, _, _ = _) {
  if (typeof _ !== _) throw TypeError(_(_, _));
  return _;
}
function _(_, _ = `number`) {
  if (!Number.isInteger(_)) throw RangeError(_(_, _));
  return _ || 0;
}
function _(_, _ = `number`) {
  if (_ <= 0) throw RangeError(_(_, _));
  return _;
}
function _(_) {
  if (typeof _ == `symbol`) throw TypeError(_);
  return String(_);
}
function _(_, _) {
  return _(_) ? String(_) : _(_, _);
}
function _(_) {
  if (typeof _ == `string`) return BigInt(_);
  if (typeof _ != `bigint`) throw TypeError(_(_));
  return _;
}
function _(_, _ = `number`) {
  if (typeof _ == `bigint`) throw TypeError(_(_));
  if (((_ = Number(_)), !Number.isFinite(_))) throw RangeError(_(_, _));
  return _;
}
function _(_, _) {
  return Math.trunc(_(_, _)) || 0;
}
function _(_, _) {
  return _(_(_, _), _);
}
function _(_, _) {
  return _(_(_, _), _);
}
function _(_, _) {
  let [_, _] = _(_, _),
    _ = _ + _,
    _ = Math.sign(_);
  return (_ && _ === -Math.sign(_) && ((_ -= _), (_ += _ * 864e11)), [_, _]);
}
function _(_, _, _ = 1) {
  return _(_[0] + _[0] * _, _[1] + _[1] * _);
}
function _(_, _) {
  return _(_[0], _[1] + _);
}
function _(_, _) {
  return _(_, _, -1);
}
function _(_, _) {
  return _(_[0], _[0]) || _(_[1], _[1]);
}
function _(_, _, _) {
  return _(_, _) === -1 || _(_, _) === 1;
}
function _(_, _ = 1) {
  let _ = BigInt(_ / _);
  return [Number(_ / _), Number(_ % _) * _];
}
function _(_, _ = 1) {
  let [_, _] = _(_, _ / _);
  return [_, _ * _];
}
function _(_, _ = 1) {
  let [_, _] = _,
    _ = Math.floor(_ / _),
    _ = _ / _;
  return BigInt(_) * BigInt(_) + BigInt(_);
}
function _(_, _ = 1, _) {
  let [_, _] = _,
    [_, _] = _(_, _);
  return (_ / _) * _ + (_ + (_ ? _ / _ : 0));
}
function _(_) {
  return _[0] + _[1] / _;
}
function _(_, _, _ = _) {
  let [_, _] = _,
    [_, _] = _(_, _);
  return [(_ / _) * _ + _, _];
}
function _(_) {
  return (
    _(_, `isoYear`, _, _, 1),
    _.isoYear === _
      ? _(_, `isoMonth`, 4, 12, 1)
      : _.isoYear === _ && _(_, `isoMonth`, 1, 9, 1),
    _
  );
}
function _(_) {
  return (
    _({
      ..._,
      ..._,
      isoHour: 12,
    }),
    _
  );
}
function _(_) {
  let _ = _(_, `isoYear`, _, _, 1),
    _ = _ === _ ? 1 : _ === _ ? -1 : 0;
  return (
    _ &&
      _(
        _({
          ..._,
          isoDay: _.isoDay + _,
          isoNanosecond: _.isoNanosecond - _,
        }),
      ),
    _
  );
}
function _(_) {
  if (!_ || _(_, _, _)) throw RangeError(_);
  return _;
}
function _(_) {
  return _(_, 5, _)[1];
}
function _(_) {
  let [_, _] = _(_, _);
  return [_(_, 5, _), _];
}
function _(_) {
  return _(_)[0];
}
function _(_) {
  return _(_, _);
}
function _(_) {
  return _(
    _.isoYear,
    _.isoMonth,
    _.isoDay,
    _.isoHour,
    _.isoMinute,
    _.isoSecond,
    _.isoMillisecond,
  );
}
function _(_) {
  let _ = _(_);
  if (_ !== void 0) {
    let [_, _] = _(_, _);
    return [_, _ * _ + (_.isoMicrosecond || 0) * _ + (_.isoNanosecond || 0)];
  }
}
function _(_, _) {
  let [_, _] = _(_(_) - _);
  return _(
    _({
      ..._,
      isoDay: _.isoDay + _,
      ..._,
    }),
  );
}
function _(..._) {
  return _(..._) / _;
}
function _(..._) {
  let [_, _] = _(..._),
    _ = _.valueOf();
  if (!isNaN(_)) return _ - _ * _;
}
function _(_, _ = 1, _ = 1, _ = 0, _ = 0, _ = 0, _ = 0) {
  let _ = _ === _ ? 1 : _ === _ ? -1 : 0,
    _ = new Date();
  return (_.setUTCHours(_, _, _, _), _.setUTCFullYear(_, _ - 1, _ + _), [_, _]);
}
function _(_, _) {
  let [_, _] = _(_, _);
  _ < 0 && ((_ += 864e11), --_);
  let [_, _] = _(_, _),
    [_, _] = _(_, _);
  return _(_ * _ + _, _, _);
}
function _(_, _ = 0, _ = 0) {
  let _ = Math.ceil(Math.max(0, Math.abs(_) - _) / _) * Math.sign(_),
    _ = new Date(_ - _ * _);
  return _(_, [
    _.getUTCFullYear(),
    _.getUTCMonth() + 1,
    _.getUTCDate() + _,
    _.getUTCHours(),
    _.getUTCMinutes(),
    _.getUTCSeconds(),
    _.getUTCMilliseconds(),
    _,
    _,
  ]);
}
function _(_, _) {
  if (_ < -_) throw RangeError(_);
  let _ = _.formatToParts(_),
    _ = {};
  for (let _ of _) _[_.type] = _.value;
  return _;
}
function _(_) {
  return _.isoDay;
}
function _(_) {
  return [_.isoYear, _.isoMonth, _.isoDay];
}
function _(_, _) {
  return [_, 0];
}
function _(_, _) {
  if (!_) return [_, _];
}
function _(_, _, _) {
  return {
    isoYear: _,
    isoMonth: _,
    isoDay: _,
  };
}
function _() {
  return 7;
}
function _() {
  return _;
}
function _(_, _) {
  switch (_) {
    case 2:
      return _(_) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function _(_) {
  return _(_) ? 366 : 365;
}
function _(_) {
  return _ % 4 == 0 && (_ % 100 != 0 || _ % 400 == 0);
}
function _(_) {
  let [_, _] = _(_.isoYear, _.isoMonth, _.isoDay);
  return _(_.getUTCDay() - _, 7) || 7;
}
function _(_) {
  return this._ === _
    ? (({ isoYear: _ }) =>
        _ < 1 ? [`gregory-inverse`, 1 - _] : [`gregory`, _])(_)
    : this._ === _
      ? _(_)
      : [];
}
function _(_) {
  let _ = _(_);
  if (_ < _) {
    let { isoYear: _ } = _;
    return _ < 1 ? [`japanese-inverse`, 1 - _] : [`japanese`, _];
  }
  let { era: _, eraYear: _ } = _(_(_(_), _), _);
  return [_, _];
}
function _(_) {
  return (_(_), _(_, 1), _);
}
function _(_) {
  return (_(_, 1), _);
}
function _(_) {
  return _(_, _, _(_));
}
function _(_, _) {
  let { isoYear: _ } = _,
    _ = _(_, `isoMonth`, 1, _(), _);
  return {
    isoYear: _,
    isoMonth: _,
    isoDay: _(_, `isoDay`, 1, _(_, _), _),
  };
}
function _(_, _) {
  return _(_, [
    _(_, `isoHour`, 0, 23, _),
    _(_, `isoMinute`, 0, 59, _),
    _(_, `isoSecond`, 0, 59, _),
    _(_, `isoMillisecond`, 0, 999, _),
    _(_, `isoMicrosecond`, 0, 999, _),
    _(_, `isoNanosecond`, 0, 999, _),
  ]);
}
function _(_) {
  return _ === void 0 ? 0 : _(_(_));
}
function _(_, _ = 0) {
  _ = _(_);
  let _ = _(_),
    _ = _(_, _);
  return [_(_), _, _];
}
function _(_, _, _, _ = 9, _ = 0, _ = 4) {
  _ = _(_);
  let _ = _(_, _, _),
    _ = _(_),
    _ = _(_, _),
    _ = _(_, _, _, 1);
  return (
    _ == null ? (_ = Math.max(_, _)) : _(_, _),
    (_ = _(_, _, 1)),
    _ && (_ = ((_) => (_ < 4 ? (_ + 2) % 4 : _))(_)),
    [_, _, _, _]
  );
}
function _(_, _ = 6, _) {
  let _ = _((_ = _(_, _))),
    _ = _(_, 7),
    _ = _(_, _);
  return ((_ = _(_, _)), (_ = _(_, _, void 0, _)), [_, _, _]);
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  return _(_(_), _);
}
function _(_) {
  let _ = _(_, _, _(_, _), 0);
  if (!_) throw RangeError(_(_, _));
  return _;
}
function _(_, _ = 4) {
  let _ = _(_);
  return [_(_, 4), ..._(_(_, _), _)];
}
function _(_, _) {
  return _ == null
    ? [_ === void 0 ? 1 : 10 ** (9 - _), _]
    : [_[_], _ < 4 ? 9 - 3 * _ : -1];
}
function _(_) {
  let _ = _[_];
  return _ === void 0 ? 1 : _(_, _);
}
function _(_, _, _, _) {
  let _ = _ ? _ : _[_ + 1];
  if (_) {
    let _ = _[_];
    if (_ % ((_ = _(_, _, 1, _ / _ - +!_, 1)) * _)) throw RangeError(_(_, _));
  } else _ = _(_, _, 1, _ ? 10 ** 9 : 1, 1);
  return _;
}
function _(_) {
  let _ = _[_];
  if (_ !== void 0) {
    if (typeof _ != `number`) {
      if (_(_) === `auto`) return;
      throw RangeError(_(_, _));
    }
    _ = _(_, Math.floor(_), 0, 9, 1);
  }
  return _;
}
function _(_) {
  return _ === void 0 ? {} : _(_);
}
function _(_, _) {
  return typeof _ == `string`
    ? {
        [_]: _,
      }
    : _(_);
}
function _(_) {
  return {
    overflow: _[_],
  };
}
function _(_, _, _ = 9, _ = 0, _) {
  let _ = _[_];
  if (_ === void 0) return _ ? _ : void 0;
  if (((_ = _(_)), _ === `auto`)) return _ ? _ : null;
  let _ = _[_];
  if ((_ === void 0 && (_ = _[_]), _ === void 0)) throw RangeError(_(_, _, _));
  return (_(_, _, _, _, 1, _), _);
}
function _(_, _, _, _ = 0) {
  let _ = _[_];
  if (_ === void 0) return _;
  let _ = _(_),
    _ = _[_];
  if (_ === void 0) throw RangeError(_(_, _, _));
  return _;
}
function _(_, _) {
  if (_ > _) throw RangeError(_);
}
function _(_) {
  return {
    branding: _,
    epochNanoseconds: _,
  };
}
function _(_, _, _) {
  return {
    branding: _,
    calendar: _,
    timeZone: _,
    epochNanoseconds: _,
  };
}
function _(_, _ = _.calendar) {
  return {
    branding: _,
    calendar: _,
    ..._(_, _),
  };
}
function _(_, _ = _.calendar) {
  return {
    branding: _,
    calendar: _,
    ..._(_, _),
  };
}
function _(_, _ = _.calendar) {
  return {
    branding: _,
    calendar: _,
    ..._(_, _),
  };
}
function _(_, _ = _.calendar) {
  return {
    branding: _,
    calendar: _,
    ..._(_, _),
  };
}
function _(_) {
  return {
    branding: _,
    ..._(_, _),
  };
}
function _(_) {
  return {
    branding: _,
    sign: _(_),
    ..._(_, _),
  };
}
function _(_) {
  return _(_.epochNanoseconds, _)[0];
}
function _(_) {
  return _(_.epochNanoseconds);
}
function _(_) {
  return _.epochNanoseconds;
}
function _(_, _, _, _, _) {
  let _ = _(_),
    [_, _] = ((_, _) => {
      let _ = _((_ = _(_, _))[_]),
        _ = _(_);
      return ((_ = _(_, _)), [_, _]);
    })(_, _);
  if (!_ && _(Math.max(_, _), _)) return _(_, _);
  if (!_) throw RangeError(_);
  if (!_.sign) return 0;
  let [_, _, _] = _(_, _, _),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_, _, _);
  _(_) || (_(_), _(_));
  let _ = _(_, _, _, _);
  return _(_, _) ? _(_, _) : _(_, _(_), _, _, _, _, _);
}
function _(_, _, _, _, _, _, _) {
  let _ = _(_),
    [_, _] = _(_, _(_, _), _, _, _, _, _),
    _ = _(_, _, _);
  return _[_[_]] + _ * _;
}
function _(_, _) {
  return _(_(_), _[_], 1);
}
function _(_, _, _, _, _, _, _) {
  let _ = _[_],
    _ = {
      ..._,
      [_]: _[_] + _,
    },
    _ = _(_, _, _),
    _ = _(_, _, _);
  return [_(_), _(_)];
}
function _(_, _, _) {
  let _ = _(_(_, _));
  if (!_) throw RangeError(_);
  return _(_(_, _)) / _;
}
function _(_, _) {
  let [_, _, _] = _(_, 5, 1);
  return _(_(_.epochNanoseconds, _, _, _, 1));
}
function _(_, _, _) {
  let { epochNanoseconds: _, timeZone: _, calendar: _ } = _,
    [_, _, _] = _(_);
  if (_ === 0 && _ === 1) return _;
  let _ = _(_);
  if (_ === 6) _ = _(_, _, _, _);
  else {
    let _ = _._(_);
    _ = _(_, _(_(_, _), _, _, _), _, 2, 0, 1);
  }
  return _(_, _, _);
}
function _(_, _) {
  return _(_(_, ..._(_)), _.calendar);
}
function _(_, _) {
  let [_, _, _] = _(_, 5);
  var _;
  return _(((_ = _), _(_, _(_, _), _)[0]));
}
function _(_, _) {
  let _ = _(_.timeZone),
    [_, _] = _(_(_, _)),
    _ = _(_(_(_, _), _(_, _)), _, 1);
  if (_ <= 0) throw RangeError(_);
  return _;
}
function _(_, _) {
  let { timeZone: _, calendar: _ } = _;
  return _(_(_, _(_), _), _, _);
}
function _(_, _, _) {
  return _(_, _(_(_, _)));
}
function _(_, _, _, _) {
  let [_, _] = _(_(_, _)),
    _ = _.epochNanoseconds,
    _ = _(_, _),
    _ = _(_, _);
  if (_(_, _, _)) throw RangeError(_);
  return _(_(_, _, _), _) ? _ : _;
}
function _(_, _, _, _) {
  return _(_, _(_, _), _);
}
function _(_, _, _) {
  let [_, _] = _(_, _, _);
  return _({
    ..._(_, _),
    ..._,
  });
}
function _(_, _, _) {
  return _(_(_(_), _, _));
}
function _(_) {
  return _(_, _, 7);
}
function _(_, _) {
  return _[_] * _;
}
function _(_) {
  let _ = _(_);
  return [_, _(_, 1)];
}
function _(_) {
  return _(6, _);
}
function _(_, _, _) {
  let _ = Math.min(_(_), 6);
  return _(_(_(_, _), _, _), _);
}
function _(_, _, _, _, _, _, _, _, _, _) {
  if (_ === 0 && _ === 1) return _;
  let [_, _, _] = (_(_, _) ? (_(_) && _ < 6 && _ >= 6 ? _ : _) : _)(
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
    _,
  );
  return (
    _ &&
      _ !== 7 &&
      (_ = ((_, _, _, _, _, _, _, _) => {
        let _ = _(_);
        for (let _ = _ + 1; _ <= _; _++) {
          if (_ === 7 && _ !== 7) continue;
          let _ = _(_, _);
          _[_[_]] += _;
          let _ = _(_(_(_(_, _, _)), _));
          if (_ && Math.sign(_) !== _) break;
          _ = _;
        }
        return _;
      })(_, _, _, Math.max(6, _), _, _, _, _)),
    _
  );
}
function _(_, _, _, _, _) {
  return _ === 6 ? [_(_(_), _, _), 0] : _(_, _(_, _), _, _);
}
function _(_, _, _, _) {
  let [_, _] = _;
  _ && _ < 0 && ((_ += 864e11), --_);
  let [_, _] = _(_(_, _, _), _);
  return _(_ + _, _);
}
function _(_, _, _) {
  return _(_ / _, _) * _;
}
function _(_, _) {
  return _[_](_);
}
function _(_, _, _, _, _, _) {
  let _ = _(_),
    _ = _(_),
    _ = _(_, _, _, _),
    _ = _(_, _),
    _ = Math.sign(_[0] - _[0]) === _,
    _ = _(_, Math.min(_, 6));
  return [
    {
      ..._,
      ..._,
    },
    _(_, _),
    _,
  ];
}
function _(_, _, _, _, _, _, _, _, _, _) {
  let _ = _(_) || 1,
    _ = _(_(_, 5)),
    _ = _(_, _),
    _ = _(_, _, _),
    [_, _] = _(
      _,
      {
        ..._,
        ..._,
      },
      6,
      _,
      _,
      _,
      _,
    ),
    _ = _ - _(_(_, _)),
    _ = 0;
  _ && Math.sign(_) !== _
    ? (_ = _(_, _))
    : ((_ += _), (_ = _(_, _, _)), (_ = _(_, _)));
  let _ = _(_);
  return [
    {
      ..._,
      ..._,
      days: _.days + _,
    },
    _,
    !!_,
  ];
}
function _(_, _, _, _, _, _, _, _, _, _) {
  let _ = _(_),
    _ = _[_],
    _ = _(_, _);
  _ === 7 &&
    (_ = {
      ..._,
      weeks: _.weeks + Math.trunc(_.days / 7),
    });
  let _ = _(_[_], _) * _;
  _[_] = _;
  let [_, _] = _(_, _, _, _ * _, _, _, _),
    _ = _ + _(_, _, _) * _ * _,
    _ = _(_, _, _),
    _ = Math.sign(_ - _) === _;
  return ((_[_] = _), [_, _ ? _ : _, _]);
}
function _(_, _, _, _) {
  let [_, _, _, _] = ((_) => {
      let _ = _((_ = _(_)));
      return [_.timeZone, ..._];
    })(_),
    _ = _ !== void 0;
  return ((_, _, _, _, _, _) => {
    _ = _(_, _, _, 1);
    let _ = _._(_);
    return _(_(_, _), _) + (_ ? _(_(_)) : `Z`);
  })(_, _(_ ? _(_) : _), _.epochNanoseconds, _, _, _);
}
function _(_, _, _) {
  let [_, _, _, _, _, _] = ((_) => {
    _ = _(_);
    let _ = _(_),
      _ = _(_),
      _ = _(_),
      _ = _(_, 4),
      _ = _(_, 4);
    return [_, _(_), _, _, ..._(_, _)];
  })(_);
  return ((_, _, _, _, _, _, _, _, _, _) => {
    _ = _(_, _, _, 1);
    let _ = _(_)._(_);
    return (
      _(_(_, _), _) +
      _(_(_), _) +
      ((_, _) => (_ === 1 ? `` : `[` + (_ === 2 ? `!` : ``) + _ + `]`))(_, _) +
      _(_, _)
    );
  })(_, _.calendar, _.timeZone, _.epochNanoseconds, _, _, _, _, _, _);
}
function _(_, _) {
  let [_, _, _, _] = ((_) => ((_ = _(_)), [_(_), ..._(_)]))(_);
  return ((_ = _.calendar), (_ = _), (_ = _), _(_(_, _, _), _) + _(_, _));
  var _, _, _;
}
function _(_, _) {
  return ((_ = _.calendar), (_ = _), (_ = _(_)), _(_) + _(_, _));
  var _, _, _;
}
function _(_, _) {
  return _(_.calendar, _, _, _(_));
}
function _(_, _) {
  return _(_.calendar, _, _, _(_));
}
function _(_, _) {
  let [_, _, _] = _(_);
  return ((_ = _), _(_(_, _, _)[0], _));
  var _;
}
function _(_, _) {
  let [_, _, _] = _(_, 3);
  return (
    _ > 1 &&
      _(
        (_ = {
          ..._,
          ..._(_, _, _),
        }),
      ),
    ((_, _) => {
      let { sign: _ } = _,
        _ = _ === -1 ? _(_) : _,
        { hours: _, minutes: _ } = _,
        [_, _] = _(_(_, 3), _, _);
      _(_);
      let _ = _(_, _),
        _ = _ >= 0 || !_ || _;
      return (
        (_ < 0 ? `-` : ``) +
        `P` +
        _({
          _: _(_.years),
          _: _(_.months),
          _: _(_.weeks),
          _: _(_.days),
        }) +
        (_ || _ || _ || _
          ? `T` +
            _({
              _: _(_),
              _: _(_),
              _: _(_, _) + _,
            })
          : ``)
      );
    })(_, _)
  );
}
function _(_, _, _, _) {
  return _ === 1
    ? _ === `iso8601`
      ? _(_)
      : _(_)
    : _ > 1 || (_ === 0 && _ !== `iso8601`)
      ? _(_) + _(_, _ === 2)
      : _(_);
}
function _(_) {
  let _ = [];
  for (let _ in _) {
    let _ = _[_];
    _ && _.push(_, _);
  }
  return _.join(``);
}
function _(_, _) {
  return _(_) + `T` + _(_, _);
}
function _(_) {
  return _(_) + `-` + _(_.isoDay);
}
function _(_) {
  let { isoYear: _ } = _;
  return (
    (_ < 0 || _ > 9999 ? _(_) + _(6, Math.abs(_)) : _(4, _)) +
    `-` +
    _(_.isoMonth)
  );
}
function _(_) {
  return _(_.isoMonth) + `-` + _(_.isoDay);
}
function _(_, _) {
  let _ = [_(_.isoHour), _(_.isoMinute)];
  return (
    _ !== -1 &&
      _.push(
        _(_.isoSecond) +
          ((_, _, _, _) => _(_ * 1e6 + _ * 1e3 + _, _))(
            _.isoMillisecond,
            _.isoMicrosecond,
            _.isoNanosecond,
            _,
          ),
      ),
    _.join(`:`)
  );
}
function _(_, _ = 0) {
  if (_ === 1) return ``;
  let [_, _] = _(Math.abs(_), _),
    [_, _] = _(_, _),
    [_, _] = _(_, _);
  return _(_) + _(_) + `:` + _(_) + (_ || _ ? `:` + _(_) + _(_) : ``);
}
function _(_, _) {
  return _ !== 1 && (_ > 1 || (_ === 0 && _ !== `iso8601`))
    ? _(_, _ === 2)
    : ``;
}
function _(_, _) {
  return `[` + (_ ? `!` : ``) + `u-ca=` + _ + `]`;
}
function _(_, _) {
  let _ = _(9, _);
  return (
    (_ = _ === void 0 ? _.replace(_, ``) : _.slice(0, _)), _ ? `.` + _ : ``
  );
}
function _(_) {
  return _ < 0 ? `-` : `+`;
}
function _(_, _) {
  return _ || _
    ? _.toLocaleString(`fullwide`, {
        useGrouping: 0,
      })
    : ``;
}
function _(_, _) {
  let { epochNanoseconds: _ } = _,
    _ = (_._ ? _ : _(_.timeZone))._(_),
    _ = _(_, _);
  return {
    calendar: _.calendar,
    ..._,
    offsetNanoseconds: _,
  };
}
function _(_, _, _, _ = 0, _ = 0, _, _) {
  if (_ !== void 0 && _ === 1 && (_ === 1 || _)) return _(_, _);
  let _ = _._(_);
  if (_ !== void 0 && _ !== 3) {
    let _ = ((_, _, _, _) => {
      let _ = _(_);
      _ && (_ = _(_));
      for (let _ of _) {
        let _ = _(_(_, _));
        if ((_ && (_ = _(_)), _ === _)) return _;
      }
    })(_, _, _, _);
    if (_ !== void 0) return _;
    if (_ === 0) throw RangeError(_);
  }
  return _ ? _(_) : _(_, _, _, _);
}
function _(_, _, _ = 0, _ = _._(_)) {
  if (_.length === 1) return _[0];
  if (_ === 1) throw RangeError(_);
  if (_.length) return _[+(_ === 3)];
  let _ = _(_),
    _ =
      ((_, _) => {
        let _ = _._(_(_, -_));
        return ((_) => {
          if (_ > 864e11) throw RangeError(_);
          return _;
        })(_._(_(_, _)) - _);
      })(_, _) * (_ === 2 ? -1 : 1);
  return (_ = _._(_(_, _)))[_ === 2 ? 0 : _.length - 1];
}
function _(_, _) {
  let _ = _._(_);
  if (_.length) return _[0];
  let _ = _(_(_), -_);
  return _._(_, 1);
}
function _(_, _, _) {
  return _(
    _(
      _(
        _.epochNanoseconds,
        ((_) => {
          if (_(_)) throw RangeError(_);
          return _(_, 5);
        })(_ ? _(_) : _),
      ),
    ),
  );
}
function _(_, _, _, _, _, _ = Object.create(null)) {
  let _ = _(_.timeZone),
    _ = _(_.calendar);
  return {
    ..._,
    ..._(_, _, _, _ ? _(_) : _, _),
  };
}
function _(_, _, _, _, _ = Object.create(null)) {
  let { calendar: _ } = _;
  return _(_(_(_), _, _ ? _(_) : _, _), _);
}
function _(_, _, _, _, _) {
  let { calendar: _ } = _;
  return _(_(_(_), _, _ ? _(_) : _, _), _);
}
function _(_, _, _, _, _) {
  let _ = _.calendar,
    _ = _(_),
    _ = _(_(_, _));
  return (
    _ && (_ = _(_)),
    _.sign < 0 &&
      ((_ = _._(_, {
        ..._,
        months: 1,
      })),
      (_ = _(_, -1))),
    _(_(_, _._(_, _, _)), _)
  );
}
function _(_, _, _) {
  return _(_(_, _ ? _(_) : _)[0]);
}
function _(_, _, _, _, _) {
  let _ = _(_, 5),
    _ = _.epochNanoseconds;
  if (_(_)) {
    let _ = _(_, _);
    _ = _(
      _(_, {
        ..._(
          _,
          _,
          {
            ..._,
            ..._,
          },
          _,
        ),
        ..._(_, _),
      }),
      _,
    );
  } else ((_ = _(_, _)), _(_));
  return {
    epochNanoseconds: _(_),
  };
}
function _(_, _, _, _) {
  let [_, _] = _(_, _);
  return _({
    ..._(
      _,
      _,
      {
        ..._,
        ..._,
        days: _.days + _,
      },
      _,
    ),
    ..._,
  });
}
function _(_, _, _, _) {
  if (_.years || _.months || _.weeks) return _._(_, _, _);
  _(_);
  let _ = _.days + _(_, 5)[0];
  return _ ? _(_(_, _)) : _;
}
function _(_, _, _ = 1) {
  return _(_, _ - _.day(_));
}
function _(_, _) {
  let [_, _] = _(_, 5),
    [_, _] = _(_(_) + _);
  return [_, _ + _];
}
function _(_, _, _) {
  let _ = _(_),
    _,
    { years: _, months: _, weeks: _, days: _ } = _;
  if (((_ += _(_, 5)[0]), _ || _)) _ = _(this, _, _, _, _);
  else {
    if (!_ && !_) return _;
    _ = _(_);
  }
  if (_ === void 0) throw RangeError(_);
  return ((_ += (7 * _ + _) * _), _(_(_)));
}
function _(_, _, _, _, _) {
  let [_, _, _] = _._(_);
  if (_) {
    let [_, _] = _._(_, _);
    ((_ += _), (_ = _(_, _, _._(_))), (_ = _(`month`, _, 1, _._(_), _)));
  }
  return (
    _ && ([_, _] = _._(_, _, _)),
    (_ = _(`day`, _, 1, _._(_, _), _)),
    _._(_, _, _)
  );
}
function _(_, _, _) {
  return (
    (_ += _(_, _)),
    (_ += _(_, _)) < 1 ? (_--, (_ += _)) : _ > _ && (_++, (_ -= _)),
    [_, _]
  );
}
function _(_, _, _) {
  if (_) {
    if (((_ += _), !Number.isSafeInteger(_))) throw RangeError(_);
    if (_ < 0) for (; _ < 1;) _ += _.call(this, --_);
    else {
      let _;
      for (; _ > (_ = _.call(this, _));) ((_ -= _), _++);
    }
  }
  return [_, _];
}
function _(_, _) {
  return _
    ? {
        ..._,
        ..._(_(_) + _ * _),
      }
    : _;
}
function _(_, _, _) {
  let _ = _(_.calendar);
  return _(_)
    ? [_, _, _(_.timeZone)]
    : [
        {
          ..._,
          ..._,
        },
        _,
      ];
}
function _(_) {
  return _ ? _ : _;
}
function _(_) {
  return _ ? _(_, _) : _;
}
function _(_) {
  return _ ? _(_, _) : _;
}
function _(_) {
  return _ && _.epochNanoseconds;
}
function _(_, _) {
  return _ <= 6 - !!_(_);
}
function _(_, _, _, _, _, _, _) {
  let _ = _(_(_).relativeTo),
    _ = Math.max(_(_), _(_));
  if (_(_, _))
    return _(
      _(
        ((_, _, _, _) => {
          let _ = _(_(_), _(_), _ ? -1 : 1);
          if (!Number.isFinite(_[0])) throw RangeError(_);
          return {
            ..._,
            ..._(_, _),
          };
        })(_, _, _, _),
      ),
    );
  if (!_) throw RangeError(_);
  _ && (_ = _(_));
  let [_, _, _] = _(_, _, _),
    _ = _(_);
  return _(_(_)(_, _, _(_, _(_, _, _), _), _));
}
function _(_, _, _, _, _) {
  let _ = _(_),
    [_, _, _, _, _] = ((_, _, _) => {
      _ = _(_, _);
      let _ = _(_),
        _ = _(_[_]),
        _ = _(_),
        _ = _(_, 7),
        _ = _(_);
      if (_ === void 0 && _ === void 0) throw RangeError(_);
      if (
        ((_ ??= 0),
        (_ ??= Math.max(_, _)),
        _(_, _),
        (_ = _(_, _, 1)),
        _ > 1 && _ > 5 && _ !== _)
      )
        throw RangeError(
          `For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit`,
        );
      return [_, _, _, _, _];
    })(_, _, _);
  if (!_ && Math.max(_, _) <= 6)
    return _(
      _(
        ((_, _, _, _, _) => {
          let _ = _(_(_), _, _, _);
          return {
            ..._,
            ..._(_, _),
          };
        })(_, _, _, _, _),
      ),
    );
  if (!_(_) && !_.sign) return _;
  if (!_) throw RangeError(_);
  let [_, _, _] = _(_, _, _),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_, _, _);
  _(_) || (_(_), _(_));
  let _ = _(_, _, _, _),
    _ = _.sign,
    _ = _(_);
  if (_ && _ && _ !== _) throw RangeError(_);
  return ((_ = _(_, _(_), _, _, _, _, _, _, _, _)), _(_));
}
function _(_) {
  return _.sign === -1 ? _(_) : _;
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = {};
  for (let _ of _) _[_] = -1 * _[_] || 0;
  return _;
}
function _(_) {
  return !_.sign;
}
function _(_, _ = _) {
  let _ = 0;
  for (let _ of _) {
    let _ = Math.sign(_[_]);
    if (_) {
      if (_ && _ !== _) throw RangeError(_);
      _ = _;
    }
  }
  return _;
}
function _(_) {
  for (let _ of _) _(_, _[_], -_, _, 1);
  return (_(_(_(_), _)), _);
}
function _(_) {
  if (!Number.isSafeInteger(_)) throw RangeError(_);
}
function _(_, _ = 6) {
  return _(_, _, _);
}
function _(_, _ = 6) {
  let [_, _] = _,
    _ = _(_, _, _);
  if (((_[_[_]] += _ * (864e11 / _[_])), !Number.isFinite(_[_[_]])))
    throw RangeError(_);
  return _;
}
function _(_, _ = 5) {
  return _(_, _, _);
}
function _(_) {
  return !!_(_, _);
}
function _(_) {
  let _ = 9;
  for (; _ > 0 && !_[_[_]]; _--);
  return _;
}
function _(_, _) {
  return [_, _];
}
function _(_) {
  let _ = Math.floor(_ / _) * _;
  return [_, _ + _];
}
function _(_) {
  let _ = _((_ = _(_)));
  if (!_) throw RangeError(_(_));
  let _;
  if (_._) _ = 0;
  else {
    if (!_.offset) throw RangeError(_(_));
    _ = _(_.offset);
  }
  return (_.timeZone && _(_.timeZone, 1), _(_(_(_), _)));
}
function _(_) {
  let _ = _(_(_));
  if (!_) throw RangeError(_(_));
  if (_.timeZone) return _(_, _.offset ? _(_.offset) : void 0);
  if (_._) throw RangeError(_(_));
  return _(_);
}
function _(_, _) {
  let _ = _(_(_));
  if (!_ || !_.timeZone) throw RangeError(_(_));
  let { offset: _ } = _,
    _ = _ ? _(_) : void 0,
    [, _, _] = _(_);
  return _(_, _, _, _);
}
function _(_) {
  let _ = _(_);
  if (_ === void 0) throw RangeError(_(_));
  return _;
}
function _(_) {
  let _ = _(_(_));
  if (!_ || _._) throw RangeError(_(_));
  return _(_(_));
}
function _(_, _, _) {
  let _ = _(_(_));
  if (!_ || _._) throw RangeError(_(_));
  return (
    _
      ? _.calendar === `iso8601` &&
        (_ =
          _.isoYear === -271821 && _.isoMonth === 4
            ? {
                ..._,
                isoDay: 20,
                ..._,
              }
            : {
                ..._,
                isoDay: 1,
                ..._,
              })
      : _ &&
        _.calendar === `iso8601` &&
        (_ = {
          ..._,
          isoYear: _,
        }),
    _(_._ ? _(_) : _(_))
  );
}
function _(_, _) {
  let _ = _(_(_));
  if (_) return (_(_), _(_(_(_))));
  let _ = _(_, 1);
  return _(_(_(_.calendar), _));
}
function _(_) {
  if (_.calendar !== `iso8601`) throw RangeError(_(_.calendar));
}
function _(_, _) {
  let _ = _(_(_));
  if (_) return (_(_), _(_(_)));
  let _ = _(_, 0, 1),
    { calendar: _ } = _,
    _ = _(_),
    [_, _, _] = _._(_),
    [_, _] = _._(_, _),
    [_, _] = _._(_, _, _);
  return _(_(_._(_, _, _)), _);
}
function _(_) {
  let _,
    _ = ((_) => {
      let _ = _.exec(_);
      return _ ? (_(_[10]), _(_)) : void 0;
    })(_(_));
  if (!_) {
    if (((_ = _(_)), !_ || !_._)) throw RangeError(_(_));
    if (_._) throw RangeError(_(`Z`));
    _(_);
  }
  if (((_ = _(_)) && _(_)) || ((_ = _(_)) && _(_))) throw RangeError(_(_));
  return _(_(_, 1));
}
function _(_) {
  let _ = ((_) => {
    let _ = _.exec(_);
    return _
      ? ((_) => {
          function _(_, _, _) {
            let _ = 0,
              _ = 0;
            if ((_ && ([_, _] = _(_, _[_])), _ !== void 0)) {
              if (_) throw RangeError(_(_));
              ((_ = ((_) => {
                let _ = parseInt(_);
                if (!Number.isFinite(_)) throw RangeError(_(_));
                return _;
              })(_)),
                (_ = 1),
                _ && ((_ = _(_) * (_[_] / 1e9)), (_ = 1)));
            }
            return _ + _;
          }
          let _ = 0,
            _ = 0,
            _ = 0,
            _ = {
              ..._(_, [
                _(_[2]),
                _(_[3]),
                _(_[4]),
                _(_[5]),
                _(_[6], _[7], 5),
                _(_[8], _[9], 4),
                _(_[10], _[11], 3),
              ]),
              ..._(_, 2, _),
            };
          if (!_) throw RangeError(_(_));
          return (_(_[1]) < 0 && (_ = _(_)), _);
        })(_)
      : void 0;
  })(_(_));
  if (!_) throw RangeError(_(_));
  return _(_(_));
}
function _(_) {
  let _ = _(_) || _(_) || _(_);
  return _ ? _.calendar : _;
}
function _(_) {
  let _ = _(_);
  return (_ && (_.timeZone || (_._ && _) || _.offset)) || _;
}
function _(_, _, _ = 0, _ = 0) {
  let _ = _(_.timeZone),
    _ = _(_),
    _;
  return (
    _(_),
    (_ = _._ ? _(_, _, _, _, _, !_._, _._) : _(_, _)),
    _(_, _, _(_.calendar))
  );
}
function _(_) {
  return _(_(_(_)));
}
function _(_) {
  return _(_(_(_)));
}
function _(_) {
  return {
    ..._,
    calendar: _(_.calendar),
  };
}
function _(_) {
  let _ = _.exec(_);
  return _
    ? ((_) => {
        let _ = _[10],
          _ = (_ || ``).toUpperCase() === `Z`;
        return {
          isoYear: _(_),
          isoMonth: parseInt(_[4]),
          isoDay: parseInt(_[5]),
          ..._(_.slice(5)),
          ..._(_[16]),
          _: !!_[6],
          _: _,
          offset: _ ? void 0 : _,
        };
      })(_)
    : void 0;
}
function _(_) {
  let _ = _.exec(_);
  return _
    ? ((_) => ({
        isoYear: _(_),
        isoMonth: parseInt(_[4]),
        isoDay: 1,
        ..._(_[5]),
      }))(_)
    : void 0;
}
function _(_) {
  let _ = _.exec(_);
  return _
    ? ((_) => ({
        isoYear: _,
        isoMonth: parseInt(_[1]),
        isoDay: parseInt(_[2]),
        ..._(_[3]),
      }))(_)
    : void 0;
}
function _(_, _) {
  let _ = _.exec(_);
  return _
    ? ((_, _) => {
        let _ = _[4] || _[5];
        if (_ && _) throw RangeError(_(_));
        return ((_) => {
          if (Math.abs(_) >= 864e11) throw RangeError(_);
          return _;
        })((_(_[2]) * _ + _(_[3]) * _ + _(_[4]) * _ + _(_[5] || ``)) * _(_[1]));
      })(_, _)
    : void 0;
}
function _(_) {
  let _ = _(_[1]),
    _ = parseInt(_[2] || _[3]);
  if (_ < 0 && !_) throw RangeError(_(-0));
  return _ * _;
}
function _(_) {
  let _ = _(_[3]);
  return {
    ..._(_(_[4] || ``))[0],
    isoHour: _(_[1]),
    isoMinute: _(_[2]),
    isoSecond: _ === 60 ? 59 : _,
  };
}
function _(_) {
  let _,
    _,
    _ = [];
  if (
    (_.replace(_, (_, _, _) => {
      let _ = !!_,
        [_, _] = _.split(`=`).reverse();
      if (_) {
        if (_ === `u-ca`) (_.push(_), (_ ||= _));
        else if (_ || /[A-Z]/.test(_)) throw RangeError(_(_));
      } else {
        if (_) throw RangeError(_(_));
        _ = _;
      }
      return ``;
    }),
    _.length > 1 && _)
  )
    throw RangeError(_(_));
  return {
    timeZone: _,
    calendar: _[0] || `iso8601`,
  };
}
function _(_) {
  return parseInt(_.padEnd(9, `0`));
}
function _(_) {
  return RegExp(`^${_}$`, `i`);
}
function _(_) {
  return _ && _ !== `+` ? -1 : 1;
}
function _(_) {
  return _ === void 0 ? 0 : parseInt(_);
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _(_);
  return typeof _ == `number`
    ? _(_)
    : _
      ? ((_) => {
          if (_.test(_)) throw RangeError(_(_));
          if (_.test(_)) throw RangeError(_);
          return _.toLowerCase()
            .split(`/`)
            .map((_, _) =>
              (_.length <= 3 || /\d/.test(_)) && !/etc|yap/.test(_)
                ? _.toUpperCase()
                : _.replace(/baja|dumont|[a-z]+/g, (_, _) =>
                    (_.length <= 2 && !_) || _ === `in` || _ === `chat`
                      ? _.toUpperCase()
                      : _.length > 2 || !_
                        ? _(_).replace(
                            /island|noronha|murdo|rivadavia|urville/,
                            _,
                          )
                        : _,
                  ),
            )
            .join(`/`);
        })(_)
      : _;
}
function _(_) {
  let _ = _(_);
  return typeof _ == `number` ? _ : _ ? _.resolvedOptions().timeZone : _;
}
function _(_) {
  let _ = _((_ = _.toUpperCase()), 1);
  return _ === void 0 ? (_ === _ ? void 0 : _(_)) : _;
}
function _(_, _) {
  return _(_.epochNanoseconds, _.epochNanoseconds);
}
function _(_, _) {
  return _(_.epochNanoseconds, _.epochNanoseconds);
}
function _(_, _, _, _, _, _) {
  let _ = _(_(_).relativeTo),
    _ = Math.max(_(_), _(_));
  if (_(_, _, _)) return 0;
  if (_(_, _)) return _(_(_), _(_));
  if (!_) throw RangeError(_);
  let [_, _, _] = _(_, _, _),
    _ = _(_),
    _ = _(_);
  return _(_(_(_, _, _)), _(_(_, _, _)));
}
function _(_, _) {
  return _(_, _) || _(_, _);
}
function _(_, _) {
  return _(_(_), _(_));
}
function _(_, _) {
  return _(_(_), _(_));
}
function _(_, _) {
  return !_(_, _);
}
function _(_, _) {
  return !_(_, _) && !!_(_.timeZone, _.timeZone) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _) && _.calendar === _.calendar;
}
function _(_, _) {
  return !_(_, _);
}
function _(_, _) {
  if (_ === _) return 1;
  try {
    return _(_) === _(_);
  } catch {}
}
function _(_, _, _, _) {
  let _ = _(_, _, 3, 5),
    _ = _(_.epochNanoseconds, _.epochNanoseconds, ..._);
  return _(_ ? _(_) : _);
}
function _(_, _, _, _, _, _) {
  let _ = _(_.calendar, _.calendar),
    [_, _, _, _] = _(_, _, 5),
    _ = _.epochNanoseconds,
    _ = _.epochNanoseconds,
    _ = _(_, _),
    _;
  if (_) {
    if (_ < 6) _ = _(_, _, _, _, _, _);
    else {
      let _ = _(_(_.timeZone, _.timeZone)),
        _ = _(_);
      ((_ = _(_, _, _, _, _, _, _)),
        (_ = _(_, _, _, _, _, _, _, _, _, _(_, _))));
    }
  } else _ = _;
  return _(_ ? _(_) : _);
}
function _(_, _, _, _, _) {
  let _ = _(_.calendar, _.calendar),
    [_, _, _, _] = _(_, _, 6),
    _ = _(_),
    _ = _(_),
    _ = _(_, _),
    _;
  if (_) {
    if (_ <= 6) _ = _(_, _, _, _, _, _);
    else {
      let _ = _(_);
      ((_ = _(_, _, _, _, _, _)), (_ = _(_, _, _, _, _, _, _, _, _, _)));
    }
  } else _ = _;
  return _(_ ? _(_) : _);
}
function _(_, _, _, _, _) {
  let _ = _(_.calendar, _.calendar);
  return _(_, () => _(_), _, _, ..._(_, _, 6, 9, 6));
}
function _(_, _, _, _, _) {
  let _ = _(_.calendar, _.calendar),
    _ = _(_, _, 9, 9, 8),
    _ = _(_),
    _ = _(_, _),
    _ = _(_, _);
  return _.isoYear === _.isoYear &&
    _.isoMonth === _.isoMonth &&
    _.isoDay === _.isoDay
    ? _(_)
    : _(_, () => _, _(_), _(_), ..._, 8);
}
function _(_, _, _, _, _, _, _, _, _ = 6) {
  let _ = _(_),
    _ = _(_);
  if (_ === void 0 || _ === void 0) throw RangeError(_);
  let _;
  if (_(_, _)) {
    if (_ === 6) _ = _(_, _, _, _, _, _);
    else {
      let _ = _();
      ((_ = _._(_, _, _)),
        (_ === _ && _ === 1) || (_ = _(_, _, _, _, _, _, _, _, _, _)));
    }
  } else _ = _;
  return _(_ ? _(_) : _);
}
function _(_, _, _, _) {
  let [_, _, _, _] = _(_, _, 5, 5),
    _ = _(_(_, _), _(_, _), _),
    _ = {
      ..._,
      ..._(_, _),
    };
  return _(_ ? _(_) : _);
}
function _(_, _, _, _, _, _) {
  let _ = _(_.epochNanoseconds, _.epochNanoseconds);
  return _
    ? _ < 6
      ? _(_.epochNanoseconds, _.epochNanoseconds, _)
      : _(_, _, _, _, _, _, _)
    : _;
}
function _(_, _, _, _, _) {
  let _ = _(_),
    _ = _(_),
    _ = _(_, _);
  return _ ? (_ <= 6 ? _(_, _, _) : _(_, _, _, _, _, _)) : _;
}
function _(_, _, _, _, _, _, _) {
  let [_, _, _] = _(_, _, _, _);
  var _, _;
  return {
    ...(_ === 6
      ? ((_ = _),
        (_ = _),
        {
          ..._,
          days: _(_, _),
        })
      : _._(_, _, _, _)),
    ..._(_),
  };
}
function _(_, _, _, _, _, _) {
  let [_, _, _] = ((_, _, _) => {
    let _ = _,
      _ = _(_, _);
    return (
      Math.sign(_) === -_ && ((_ = _(_, -_)), (_ += 864e11 * _)), [_, _, _]
    );
  })(_, _, _);
  return {
    ..._._(_, _, _, _),
    ..._(_),
  };
}
function _(_, _, _, _) {
  function _() {
    return (
      (_ = {
        ..._(_, _++ * -_),
        ..._,
      }),
      (_ = _(_, _)),
      _(_, _) === -_
    );
  }
  let _ = _(_, _),
    _ = _(_, _),
    _ = _(_, _),
    _ = _.epochNanoseconds,
    _ = 0,
    _ = _(_, _),
    _,
    _;
  if ((Math.sign(_) === -_ && _++, _() && (_ === -1 || _())))
    throw RangeError(_);
  let _ = _(_(_, _));
  return [_, _, _];
}
function _(_, _, _, _, _, _) {
  return {
    ..._,
    ..._(_(_(_, _), _, _, _), _),
  };
}
function _(_, _, _) {
  return {
    ..._,
    ..._(_(_, _), _),
  };
}
function _(_, _) {
  return _(_(_), _(_));
}
function _(_, _) {
  return Math.trunc((_ - _) / _);
}
function _(_, _) {
  return _(_) - _(_);
}
function _(_, _, _) {
  if (_ <= 7) {
    let _ = 0,
      _ = _(
        {
          ..._,
          ..._,
        },
        {
          ..._,
          ..._,
        },
      );
    return (
      _ === 7 && ([_, _] = _(_, 7)),
      {
        ..._,
        weeks: _,
        days: _,
      }
    );
  }
  let _ = this._(_),
    _ = this._(_),
    [_, _, _] = ((_, _, _, _, _, _, _) => {
      let _ = _ - _,
        _ = _ - _,
        _ = _ - _;
      if (_ || _) {
        let _ = Math.sign(_ || _),
          _ = _._(_, _),
          _ = 0;
        if (Math.sign(_) === -_) {
          let _ = _;
          (([_, _] = _._(_, _, -_)),
            (_ = _ - _),
            (_ = _ - _),
            (_ = _._(_, _)),
            (_ = _ < 0 ? -_ : _));
        }
        if (((_ = _ - Math.min(_, _) + _), _)) {
          let [_, _] = _._(_, _),
            [_, _] = _._(_, _);
          if (((_ = _ - _ || Number(_) - Number(_)), Math.sign(_) === -_)) {
            let _ = _ < 0 && -_._(_);
            ((_ = (_ -= _) - _), (_ = _ - _(_, _, _._(_)) + (_ || _._(_))));
          }
        }
      }
      return [_, _, _];
    })(this, ..._, ..._);
  return (
    _ === 8 && ((_ += this._(_, _[0])), (_ = 0)),
    {
      ..._,
      years: _,
      months: _,
      days: _,
    }
  );
}
function _(_) {
  return _ * _;
}
function _(_, _) {
  let _ = _ + _,
    _ = Math.sign(_),
    _ = _ < 0 ? -1 : 0,
    _ = 0;
  for (let _ = _; _ !== _; _ += _) _ += _.call(this, _ + _);
  return _;
}
function _(_, _) {
  if (_ !== _) throw RangeError(_);
  return _;
}
function _(_, _) {
  if (!_(_, _)) throw RangeError(_);
  return _;
}
function _(_) {
  return this._(_)[0];
}
function _(_) {
  return this._(_)[1];
}
function _(_) {
  let [_] = this._(_);
  return this._(_);
}
function _(_) {
  let [_] = this._(_);
  return this._(_);
}
function _(_) {
  let [_, _] = this._(_);
  return this._(_, _);
}
function _(_) {
  let [_] = this._(_);
  return this._(_);
}
function _(_) {
  let [_] = this._(_);
  return _(this._(_), _(_)) + 1;
}
function _(_) {
  let _ = _.exec(_);
  if (!_) throw RangeError(_(_));
  return [parseInt(_[1]), !!_[2]];
}
function _(_, _) {
  return `M` + _(_) + (_ ? `L` : ``);
}
function _(_, _, _) {
  return _ + (_ || (_ && _ >= _) ? 1 : 0);
}
function _(_, _) {
  return _ - (_ && _ >= _ ? 1 : 0);
}
function _(_, _) {
  return (_ + _) * (Math.sign(_) || 1) || 0;
}
function _(_) {
  return _[_(_)];
}
function _(_) {
  return _[_(_)];
}
function _(_) {
  return _(_._ || `iso8601`);
}
function _(_) {
  function _(_) {
    return ((_, _) => ({
      ..._(_, _),
      _: _.month,
      day: parseInt(_.day),
    }))(_(_, _), _);
  }
  let _ = _(_),
    _ = _(_);
  return {
    _: _,
    _: _(_),
    _: _(_),
  };
}
function _(_) {
  return _((_) => _(_(_)), WeakMap);
}
function _(_) {
  let _ = _(0).year - _;
  return _((_) => {
    let _,
      _ = _(_ - _),
      _ = 0,
      _ = [],
      _ = [];
    do _ += 400 * _;
    while ((_ = _(_)).year <= _);
    do
      if (
        ((_ += (1 - _.day) * _),
        _.year === _ && (_.push(_), _.push(_._)),
        (_ -= _),
        ++_ > 100 || _ < -_)
      )
        throw RangeError(_);
    while ((_ = _(_)).year >= _);
    return {
      _: _.reverse(),
      _: _(_.reverse()),
    };
  });
}
function _(_, _) {
  let _,
    _,
    _ = _(_);
  if (_.era) {
    let _ = _[_],
      _ = _[_] || {};
    _ !== void 0 &&
      ((_ =
        _ === `islamic`
          ? `ah`
          : _.era
              .normalize(`NFD`)
              .toLowerCase()
              .replace(/[^a-z0-9]/g, ``)),
      _ === `bc` || _ === `b`
        ? (_ = `bce`)
        : _ === `ad` || _ === `a`
          ? (_ = `ce`)
          : _ === `beforeroc` && (_ = `broc`),
      (_ = _[_] || _),
      (_ = _),
      (_ = _(_, _[_] || 0)));
  }
  return {
    era: _,
    eraYear: _,
    year: _,
  };
}
function _(_) {
  return parseInt(_.relatedYear || _.year);
}
function _(_) {
  return this._(_).day;
}
function _(_) {
  let { year: _, _: _, day: _ } = this._(_),
    { _: _ } = this._(_);
  return [_, _[_] + 1, _];
}
function _(_, _, _) {
  return _(_.call(this, _, _, _));
}
function _(_, _ = 1, _ = 1) {
  return this._(_)._[_ - 1] + (_ - 1) * _;
}
function _(_, _) {
  let _ = _.call(this, _);
  return [_(_, _), _ === _];
}
function _(_) {
  let _ = _(this, _),
    _ = _(this, _ - 1),
    _ = _.length;
  if (_ > _.length) {
    let _ = _(this);
    if (_ < 0) return -_;
    for (let _ = 0; _ < _; _++) if (_[_] !== _[_]) return _ + 1;
  }
}
function _(_) {
  let _ = _.call(this, _);
  return _ > _.call(this, _ - 1) && _ > _.call(this, _ + 1);
}
function _(_) {
  return _(_.call(this, _), _.call(this, _ + 1));
}
function _(_, _) {
  let { _: _ } = this._(_),
    _ = _ + 1,
    _ = _;
  return (
    _ > _.length && ((_ = 1), (_ = this._(_ + 1)._)), _(_[_ - 1], _[_ - 1])
  );
}
function _(_) {
  return this._(_)._.length;
}
function _(_) {
  let _ = this._(_);
  return [_.era, _.eraYear];
}
function _(_, _, _) {
  let _ =
      this._ && _(this._) === `chinese`
        ? ((_, _, _) => {
            if (_)
              switch (_) {
                case 1:
                  return 1651;
                case 2:
                  return _ < 30 ? 1947 : 1765;
                case 3:
                  return _ < 30 ? 1966 : 1955;
                case 4:
                  return _ < 30 ? 1963 : 1944;
                case 5:
                  return _ < 30 ? 1971 : 1952;
                case 6:
                  return _ < 30 ? 1960 : 1941;
                case 7:
                  return _ < 30 ? 1968 : 1938;
                case 8:
                  return _ < 30 ? 1957 : 1718;
                case 9:
                  return 1832;
                case 10:
                  return 1870;
                case 11:
                  return 1814;
                case 12:
                  return 1890;
              }
            return 1972;
          })(_, _, _)
        : _,
    [_, _, _] = _.call(this, {
      isoYear: _,
      isoMonth: _,
      isoDay: 31,
    }),
    _ = _.call(this, _),
    _ = _ === _;
  (_(_, _(_, _)) || _(Number(_), Number(_)) || _(_, _)) === 1 && _--;
  for (let _ = 0; _ < 100; _++) {
    let _ = _ - _,
      _ = _.call(this, _),
      _ = _(_, _, _);
    if (_ === (_ === _) && _ <= _.call(this, _, _)) return [_, _];
  }
}
function _(_, _) {
  return Object.keys(_._(_)._);
}
function _(_) {
  return _(_(_));
}
function _(_) {
  if ((_ = _.toLowerCase()) !== `iso8601` && _ !== _) {
    let _ = _(_).resolvedOptions().calendar;
    if (_(_) !== _(_)) throw RangeError(_(_));
    return _;
  }
  return _;
}
function _(_) {
  return (_ === `islamicc` && (_ = `islamic`), _.split(`-`)[0]);
}
function _(_, _) {
  return (_) =>
    _ === `iso8601`
      ? _
      : _ === _ || _ === _
        ? Object.assign(Object.create(_), {
            _: _,
          })
        : Object.assign(Object.create(_), _(_));
}
function _(_, _, _, _) {
  let _ = _(_, _, _, [], _);
  if (_.timeZone !== void 0) {
    let _ = _._(_),
      _ = _(_),
      _ = _(_.timeZone);
    return {
      epochNanoseconds: _(
        _(_),
        {
          ..._,
          ..._,
        },
        _.offset === void 0 ? void 0 : _(_.offset),
      ),
      timeZone: _,
    };
  }
  return {
    ..._._(_),
    ..._,
  };
}
function _(_, _, _, _, _, _) {
  let _ = _(_, _, _, _, _),
    _ = _(_.timeZone),
    [_, _, _] = _(_),
    _ = _._(_, _(_)),
    _ = _(_, _);
  return _(
    _(
      _(_),
      {
        ..._,
        ..._,
      },
      _.offset === void 0 ? void 0 : _(_.offset),
      _,
      _,
    ),
    _,
    _,
  );
}
function _(_, _, _) {
  let _ = _(_, _, _, [], _),
    _ = _(_);
  return _(
    _({
      ..._._(_, _(_)),
      ..._(_, _),
    }),
  );
}
function _(_, _, _, _ = []) {
  let _ = _(_, _, _, _);
  return _._(_, _);
}
function _(_, _, _, _) {
  let _ = _(_, _, _, _);
  return _._(_, _);
}
function _(_, _, _, _) {
  let _ = _(_, _, _, _);
  return (
    _ &&
      _.month !== void 0 &&
      _.monthCode === void 0 &&
      _.year === void 0 &&
      (_.year = _),
    _._(_, _)
  );
}
function _(_, _) {
  return _(_(_(_, _, [], 1), _(_)));
}
function _(_) {
  let _ = _(_, _);
  return _(
    _({
      ..._,
      ..._,
    }),
  );
}
function _(_, _, _, _ = [], _ = []) {
  return _(_, [..._.fields(_), ..._].sort(), _);
}
function _(_, _, _, _ = !_) {
  let _ = {},
    _,
    _ = 0;
  for (let _ of _) {
    if (_ === _) throw RangeError(_(_));
    if (_ === `constructor` || _ === `__proto__`) throw RangeError(_(_));
    let _ = _[_];
    if (_ !== void 0) ((_ = 1), _[_] && (_ = _[_](_, _)), (_[_] = _));
    else if (_) {
      if (_.includes(_)) throw TypeError(_(_));
      _[_] = _[_];
    }
    _ = _;
  }
  if (_ && !_) throw TypeError(_(_));
  return _;
}
function _(_, _) {
  return _(
    _({
      ..._,
      ..._,
    }),
    _,
  );
}
function _(_, _, _, _, _) {
  let { calendar: _, timeZone: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = [..._.fields(_), ..._].sort(),
    _ = ((_) => {
      let _ = _(_, _),
        _ = _(_.offsetNanoseconds),
        _ = _(_.calendar),
        [_, _, _] = _._(_),
        [_, _] = _._(_, _),
        _ = _(_, _);
      return {
        ..._(_),
        year: _,
        monthCode: _,
        day: _,
        offset: _,
      };
    })(_),
    _ = _(_, _),
    _ = _._(_, _),
    _ = {
      ..._,
      ..._,
    },
    [_, _, _] = _(_, 2);
  return _(
    _(
      _,
      {
        ..._._(_, _(_)),
        ..._(_(_), _),
      },
      _(_.offset),
      _,
      _,
    ),
    _,
    _,
  );
}
function _(_, _, _, _) {
  let _ = _(_.calendar),
    _ = [..._.fields(_), ..._].sort(),
    _ = {
      ..._((_ = _)),
      hour: _.isoHour,
      minute: _.isoMinute,
      second: _.isoSecond,
      millisecond: _.isoMillisecond,
      microsecond: _.isoMicrosecond,
      nanosecond: _.isoNanosecond,
    };
  var _;
  let _ = _(_, _),
    _ = _(_),
    _ = _._(_, _),
    _ = {
      ..._,
      ..._,
    };
  return _(
    _({
      ..._._(_, _(_)),
      ..._(_(_), _),
    }),
  );
}
function _(_, _, _, _) {
  let _ = _(_.calendar),
    _ = _.fields(_).sort(),
    _ = _(_),
    _ = _(_, _),
    _ = _._(_, _);
  return _._(_, _);
}
function _(_, _, _, _) {
  let _ = _(_.calendar),
    _ = _.fields(_).sort(),
    _ = ((_) => {
      let _ = _(_.calendar),
        [_, _] = _._(_),
        [_, _] = _._(_, _);
      return {
        year: _,
        monthCode: _(_, _),
      };
    })(_),
    _ = _(_, _),
    _ = _._(_, _);
  return _._(_, _);
}
function _(_, _, _, _) {
  let _ = _(_.calendar),
    _ = _.fields(_).sort(),
    _ = ((_) => {
      let _ = _(_.calendar),
        [_, _, _] = _._(_),
        [_, _] = _._(_, _);
      return {
        monthCode: _(_, _),
        day: _,
      };
    })(_),
    _ = _(_, _),
    _ = _._(_, _);
  return _._(_, _);
}
function _(_, _, _) {
  return _(
    ((_, _, _) =>
      _(
        {
          ..._(_, _),
          ..._(_, _),
        },
        _(_),
      ))(_, _, _),
  );
}
function _(_, _) {
  return _(
    ((_ = _),
    (_ = _),
    _({
      ..._,
      ..._(_, _),
    })),
  );
  var _, _;
}
function _(_, _) {
  let _ = _(_, _, _);
  return _._(_);
}
function _(_, _, _) {
  let _ = _(_, _, _);
  return _._(_, _);
}
function _(_, _, _, _, _) {
  ((_ = _((_ = _.fields(_)), _)), (_ = _(_, (_ = _.fields(_)), [])));
  let _ = _._(_, _);
  return ((_ = _(_, [..._, ..._].sort(), [])), _._(_));
}
function _(_, _) {
  let _ = _(_),
    _ = _(this, _),
    _ = _(this, _, _, _),
    _ = _(this, _, _, _, _);
  return _(_(this._(_, _, _)), this._ || `iso8601`);
}
function _(_, _) {
  let _ = _(_),
    _ = _(this, _),
    _ = _(this, _, _, _);
  return _(_(this._(_, _, 1)), this._ || `iso8601`);
}
function _(_, _) {
  let _ = _(_),
    _,
    _,
    _,
    _ = _.eraYear !== void 0 || _.year !== void 0 ? _(this, _) : void 0,
    _ = !this._;
  if ((_ === void 0 && _ && (_ = _), _ !== void 0)) {
    let _ = _(this, _, _, _);
    _ = _(this, _, _, _, _);
    let _ = this._(_);
    ((_ = _(_, _)), (_ = _ === _));
  } else {
    if (_.monthCode === void 0) throw TypeError(_);
    if ((([_, _] = _(_.monthCode)), this._ && this._ !== _ && this._ !== _)) {
      if (this._ && _(this._) === `coptic` && _ === 0) {
        let _ = _ || _ !== 13 ? 30 : 6;
        ((_ = _.day), (_ = _(_, 1, _)));
      } else if (this._ && _(this._) === `chinese` && _ === 0) {
        let _ =
          !_ || (_ !== 1 && _ !== 9 && _ !== 10 && _ !== 11 && _ !== 12)
            ? 30
            : 29;
        ((_ = _.day), (_ = _(_, 1, _)));
      } else _ = _.day;
    } else _ = _(this, _, _(this, _, _, _), _, _);
  }
  let _ = this._(_, _, _);
  if (!_) throw RangeError(`Cannot guess year`);
  let [_, _] = _;
  return _(_(this._(_, _, _)), this._ || `iso8601`);
}
function _(_) {
  return _(this) && _.includes(`year`) ? [..._, ..._] : _;
}
function _(_, _) {
  let _ = Object.assign(Object.create(null), _);
  return (
    _(_, _, _), _(this) && (_(_, _, _), this._ === _ && _(_, _, _, _)), _
  );
}
function _(_, _) {
  let _ = _(_),
    _ = _[_._ || ``] || {},
    { era: _, eraYear: _, year: _ } = _;
  if (_ !== void 0 || _ !== void 0) {
    if (_ === void 0 || _ === void 0) throw TypeError(_);
    if (!_) throw RangeError(_);
    let _ = _[_[_] || _];
    if (_ === void 0) throw RangeError(_(_));
    let _ = _(_, _);
    if (_ !== void 0 && _ !== _) throw RangeError(_);
    _ = _;
  } else if (_ === void 0) throw TypeError(_(_));
  return _;
}
function _(_, _, _, _) {
  let { month: _, monthCode: _ } = _;
  if (_ !== void 0) {
    let _ = ((_, _, _, _) => {
      let _ = _._(_),
        [_, _] = _(_),
        _ = _(_, _, _);
      if (_) {
        let _ = _(_);
        if (_ === void 0) throw RangeError(_);
        if (_ > 0) {
          if (_ > _) throw RangeError(_);
          if (_ === void 0) {
            if (_ === 1) throw RangeError(_);
            _--;
          }
        } else if (_ !== -_ || (_ === void 0 && _ === 1)) throw RangeError(_);
      }
      return _;
    })(_, _, _, _);
    if (_ !== void 0 && _ !== _) throw RangeError(_);
    ((_ = _), (_ = 1));
  } else if (_ === void 0) throw TypeError(_);
  return _(`month`, _, 1, _._(_), _);
}
function _(_, _, _, _, _) {
  return _(_, `day`, 1, _._(_, _), _);
}
function _(_, _, _, _) {
  let _ = 0,
    _ = [];
  for (let _ of _) _[_] === void 0 ? _.push(_) : (_ = 1);
  if ((Object.assign(_, _), _)) for (let _ of _ || _) delete _[_];
}
function _(_) {
  let _ = _(_.calendar),
    [_, _, _] = _._(_),
    [_, _] = _._(_, _);
  return {
    year: _,
    monthCode: _(_, _),
    day: _,
  };
}
function _(_) {
  return _(_(_(_(_))));
}
function _(_, _, _, _, _ = _) {
  return _(_(_(_(_))), _(_), _(_));
}
function _(_, _, _, _, _ = 0, _ = 0, _ = 0, _ = 0, _ = 0, _ = 0, _ = _) {
  return _(_(_(_(_, _(_, [_, _, _, _, _, _, _, _, _])))), _(_));
}
function _(_, _, _, _, _ = _) {
  return _(
    _(
      _(
        _(_, {
          isoYear: _,
          isoMonth: _,
          isoDay: _,
        }),
      ),
    ),
    _(_),
  );
}
function _(_, _, _, _ = _, _ = 1) {
  let _ = _(_),
    _ = _(_),
    _ = _(_);
  return _(
    _(
      _({
        isoYear: _,
        isoMonth: _,
        isoDay: _(_),
      }),
    ),
    _,
  );
}
function _(_, _, _, _ = _, _ = _) {
  let _ = _(_),
    _ = _(_),
    _ = _(_);
  return _(
    _(
      _({
        isoYear: _(_),
        isoMonth: _,
        isoDay: _,
      }),
    ),
    _,
  );
}
function _(_ = 0, _ = 0, _ = 0, _ = 0, _ = 0, _ = 0) {
  return _(_(_(_, _(_, [_, _, _, _, _, _])), 1));
}
function _(
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
  _ = 0,
) {
  return _(_(_(_, _(_, [_, _, _, _, _, _, _, _, _, _]))));
}
function _(_, _, _ = _) {
  return _(_.epochNanoseconds, _, _);
}
function _(_) {
  return _(_.epochNanoseconds);
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _, _, _) {
  return _(
    _(
      ((_, _, _, _) => {
        let _ = ((_) => _(_(_)))(_);
        return _(_(_), _, _);
      })(_, _, _, _),
    ),
    _,
    _.calendar,
  );
}
function _(_, _, _, _, _) {
  let _ = _(_.timeZone),
    _ = _.plainTime,
    _ = _ === void 0 ? void 0 : _(_),
    _ = _(_),
    _;
  return (
    (_ = _
      ? _(_, {
          ..._,
          ..._,
        })
      : _(_, {
          ..._,
          ..._,
        })),
    _(_, _, _.calendar)
  );
}
function _(_, _ = _) {
  return _(
    _({
      ..._,
      ..._,
    }),
  );
}
function _(_, _, _) {
  return _(_(_.calendar), _);
}
function _(_, _, _) {
  return _(_(_.calendar), _);
}
function _(_, _, _, _) {
  return ((_, _, _) => _(_, _, _, _(_), _))(_(_.calendar), _, _);
}
function _(_, _, _, _) {
  return ((_, _, _) => _(_, _, _, _(_), _))(_(_.calendar), _, _);
}
function _(_) {
  return _(_(_(_(_), _)));
}
function _(_) {
  return _(_(_(_(_))));
}
function _(_, _, _) {
  let _ = new Set(_);
  return (_, _) => {
    let _ = _ && _(_, _);
    if (
      !_(
        (_ = ((_, _) => {
          let _ = {};
          for (let _ in _) _.has(_) || (_[_] = _[_]);
          return _;
        })(_, _)),
        _,
      )
    ) {
      if (_ && _) throw TypeError(`Invalid formatting options`);
      _ = {
        ..._,
        ..._,
      };
    }
    return (
      _ &&
        ((_.timeZone = _), [`full`, `long`].includes(_._) && (_._ = `medium`)),
      _
    );
  };
}
function _(_, _ = _, _ = 0) {
  let [_, , , _] = _;
  return (_, _ = _, ..._) => {
    let _ = _(_ && _(..._), _, _, _, _);
    return [_, ..._(_, _.resolvedOptions(), _)];
  };
}
function _(_, _, _, _, _) {
  if (((_ = _(_, _)), _)) {
    if (_.timeZone !== void 0) throw TypeError(_);
    _.timeZone = _;
  }
  return new _(_, _);
}
function _() {
  return (
    new _(void 0, {
      calendar: _,
    }).resolvedOptions().calendar === _
  );
}
function _(_, _, _) {
  let [, _, _] = _;
  return _.map(
    (_) => (
      _.calendar &&
        ((_, _, _) => {
          if ((_ || _ !== `iso8601`) && _ !== _) throw RangeError(_);
        })(_.calendar, _.calendar, _),
      _(_, _)
    ),
  );
}
function _(_, _, _) {
  let _ = _.timeZone,
    _ = _(_),
    _ = {
      ..._(_, _),
      ...(_ || _),
    },
    _;
  return (
    (_ = _ ? _(_, _, _.offsetNanoseconds, 2) : _(_, _)), _(_, _, _.calendar)
  );
}
function _(_, _ = _) {
  return _(
    _({
      ..._,
      ..._,
    }),
  );
}
function _(_, _) {
  return {
    ..._,
    calendar: _,
  };
}
function _(_, _) {
  return {
    ..._,
    timeZone: _,
  };
}
function _(_) {
  let _ = _();
  return _(_, _._(_));
}
function _() {
  return _(Date.now(), _);
}
function _() {
  return new _().resolvedOptions().timeZone;
}
var _ = (_, _) => `Non-integer ${_}: ${_}`,
  _ = (_, _) => `Non-positive ${_}: ${_}`,
  _ = (_, _) => `Non-finite ${_}: ${_}`,
  _ = (_) => `Cannot convert bigint to ${_}`,
  _ = (_) => `Invalid bigint: ${_}`,
  _ = `Cannot convert Symbol to string`,
  _ = `Invalid object`,
  _ = (_, _, _, _, _) =>
    _ ? _(_, _[_], _[_], _[_]) : _(_, _) + `; must be between ${_}-${_}`,
  _ = (_, _) => `Invalid ${_}: ${_}`,
  _ = (_) => `Missing ${_}`,
  _ = (_) => `Invalid field ${_}`,
  _ = (_) => `Duplicate field ${_}`,
  _ = (_) => `No valid fields: ` + _.join(),
  _ = `Invalid bag`,
  _ = (_, _, _) => _(_, _) + `; must be ` + Object.keys(_).join(),
  _ = `Cannot use valueOf`,
  _ = `Invalid calling context`,
  _ = `Forbidden era/eraYear`,
  _ = `Mismatching era/eraYear`,
  _ = `Mismatching year/eraYear`,
  _ = (_) => `Invalid era: ${_}`,
  _ = (_) => `Missing year` + (_ ? `/era/eraYear` : ``),
  _ = (_) => `Invalid monthCode: ${_}`,
  _ = `Mismatching month/monthCode`,
  _ = `Missing month/monthCode`,
  _ = `Invalid leap month`,
  _ = `Invalid protocol results`,
  _ = (_) => _(`Calendar`, _),
  _ = `Mismatching Calendars`,
  _ = (_) => _(`TimeZone`, _),
  _ = `Mismatching TimeZones`,
  _ = `Forbidden ICU TimeZone`,
  _ = `Out-of-bounds offset`,
  _ = `Out-of-bounds TimeZone gap`,
  _ = `Invalid TimeZone offset`,
  _ = `Ambiguous offset`,
  _ = `Out-of-bounds date`,
  _ = `Out-of-bounds duration`,
  _ = `Cannot mix duration signs`,
  _ = `Missing relativeTo`,
  _ = `Cannot use large units`,
  _ = `Required smallestUnit or largestUnit`,
  _ = `smallestUnit > largestUnit`,
  _ = (_) => `Cannot parse: ${_}`,
  _ = (_) => `Invalid substring: ${_}`,
  _ = (_) => `Cannot format ${_}`,
  _ = `Mismatching types for formatting`,
  _ = `Cannot specify TimeZone`,
  _ = _(_, (_, _) => _),
  _ = _(_, (_, _, _) => _),
  _ = _(_, 2),
  _ = {
    nanosecond: 0,
    microsecond: 1,
    millisecond: 2,
    second: 3,
    minute: 4,
    hour: 5,
    day: 6,
    week: 7,
    month: 8,
    year: 9,
  },
  _ = Object.keys(_),
  _ = 864e5,
  _ = 1e3,
  _ = 1e3,
  _ = 1e6,
  _ = 1e9,
  _ = 6e10,
  _ = 36e11,
  _ = 864e11,
  _ = [1, _, _, _, _, _, _],
  _ = _.slice(0, 6),
  _ = _(_),
  _ = [`offset`],
  _ = [`timeZone`],
  _ = _.concat(_),
  _ = _.concat(_),
  _ = [`era`, `eraYear`],
  _ = _.concat([`year`]),
  _ = [`year`],
  _ = [`monthCode`],
  _ = [`month`].concat(_),
  _ = [`day`],
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _(_, 0),
  _ = `iso8601`,
  _ = `gregory`,
  _ = `japanese`,
  _ = {
    [_]: {
      "gregory-inverse": -1,
      gregory: 0,
    },
    [_]: {
      "japanese-inverse": -1,
      japanese: 0,
      meiji: 1867,
      taisho: 1911,
      showa: 1925,
      heisei: 1988,
      reiwa: 2018,
    },
    ethiopic: {
      ethioaa: 0,
      ethiopic: 5500,
    },
    coptic: {
      "coptic-inverse": -1,
      coptic: 0,
    },
    roc: {
      "roc-inverse": -1,
      roc: 0,
    },
    buddhist: {
      _: 0,
    },
    islamic: {
      _: 0,
    },
    indian: {
      saka: 0,
    },
    persian: {
      _: 0,
    },
  },
  _ = {
    [_]: {
      bce: `gregory-inverse`,
      _: `gregory`,
    },
    [_]: {
      bce: `japanese-inverse`,
      _: `japanese`,
    },
    ethiopic: {
      era0: `ethioaa`,
      era1: `ethiopic`,
    },
    coptic: {
      era0: `coptic-inverse`,
      era1: `coptic`,
    },
    roc: {
      broc: `roc-inverse`,
      minguo: `roc`,
    },
  },
  _ = {
    chinese: 13,
    dangi: 13,
    hebrew: -6,
  },
  _ = _(_, `string`),
  _ = _(_, `boolean`),
  _ = _(_, `number`),
  _ = _.map((_) => _ + `s`),
  _ = _(_),
  _ = _.slice(0, 6),
  _ = _.slice(6),
  _ = _.slice(1),
  _ = _(_),
  _ = _(_, 0),
  _ = _(_, 0),
  _ = _(_, _),
  _ = [
    `isoNanosecond`,
    `isoMicrosecond`,
    `isoMillisecond`,
    `isoSecond`,
    `isoMinute`,
    `isoHour`,
  ],
  _ = [`isoDay`, `isoMonth`, `isoYear`],
  _ = _.concat(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_, 0),
  _ = _(_, _),
  _ = 1e8,
  _ = _ * _,
  _ = [_, 0],
  _ = [-1e8, 0],
  _ = 275760,
  _ = -271821,
  _ = Intl.DateTimeFormat,
  _ = 1970,
  _ = 1972,
  _ = 12,
  _ = _(1868, 9, 8),
  _ = _(_, WeakMap),
  _ = `smallestUnit`,
  _ = `unit`,
  _ = `roundingMode`,
  _ = `roundingIncrement`,
  _ = `fractionalSecondDigits`,
  _ = `relativeTo`,
  _ = `direction`,
  _ = {
    constrain: 0,
    reject: 1,
  },
  _ = Object.keys(_),
  _ = {
    compatible: 0,
    reject: 1,
    earlier: 2,
    later: 3,
  },
  _ = {
    reject: 0,
    use: 1,
    prefer: 2,
    ignore: 3,
  },
  _ = {
    auto: 0,
    never: 1,
    critical: 2,
    always: 3,
  },
  _ = {
    auto: 0,
    never: 1,
    critical: 2,
  },
  _ = {
    auto: 0,
    never: 1,
  },
  _ = {
    floor: 0,
    halfFloor: 1,
    ceil: 2,
    halfCeil: 3,
    trunc: 4,
    halfTrunc: 5,
    expand: 6,
    halfExpand: 7,
    halfEven: 8,
  },
  _ = {
    previous: -1,
    next: 1,
  },
  _ = _(_, _),
  _ = _(_, `largestUnit`),
  _ = _(_, _),
  _ = _(_, `overflow`, _),
  _ = _(_, `disambiguation`, _),
  _ = _(_, `offset`, _),
  _ = _(_, `calendarName`, _),
  _ = _(_, `timeZoneName`, _),
  _ = _(_, `offset`, _),
  _ = _(_, _, _),
  _ = `PlainYearMonth`,
  _ = `PlainMonthDay`,
  _ = `PlainDate`,
  _ = `PlainDateTime`,
  _ = `PlainTime`,
  _ = `ZonedDateTime`,
  _ = `Instant`,
  _ = `Duration`,
  _ = [
    Math.floor,
    (_) => (_(_) ? Math.floor(_) : Math.round(_)),
    Math.ceil,
    (_) => (_(_) ? Math.ceil(_) : Math.round(_)),
    Math.trunc,
    (_) => (_(_) ? Math.trunc(_) || 0 : Math.round(_)),
    (_) => (_ < 0 ? Math.floor(_) : Math.ceil(_)),
    (_) => Math.sign(_) * Math.round(Math.abs(_)) || 0,
    (_) => (_(_) ? (_ = Math.trunc(_) || 0) + (_ % 2) : Math.round(_)),
  ],
  _ = `UTC`,
  _ = 5184e3,
  _ = _(1847),
  _ = _(
    (() => {
      let _ = new Date();
      return (_.getTime() === 0 ? 2040 : _.getUTCFullYear()) + 10;
    })(),
  ),
  _ = /0+$/,
  _ = _(_, WeakMap),
  _ = 2 ** 32 - 1,
  _ = _((_) => {
    let _ = _(_);
    return typeof _ == `object` ? new _(_) : new _(_ || 0);
  }),
  _ = class {
    constructor(_) {
      this._ = _;
    }
    N() {
      return this._;
    }
    v(_) {
      return (
        ((_) => {
          let _ = _({
            ..._,
            ..._,
          });
          if (!_ || Math.abs(_[0]) > 1e8) throw RangeError(_);
        })(_),
        [_(_, this._)]
      );
    }
    l() {}
  },
  _ = class {
    constructor(_) {
      this._ = ((_) => {
        function _(_) {
          let [_, _] = _(_(_, _, _)),
            _ = _(_),
            _ = _(_);
          return _ === _ ? _ : _(_(_, _), _, _, _);
        }
        function _(_, _, _, _) {
          let _, _;
          for (
            ;
            (_ === void 0 ||
              (_ = _ < _[0] ? _ : _ >= _[1] ? _ : void 0) === void 0) &&
            (_ = _[1] - _[0]);
          ) {
            let _ = _[0] + Math.floor(_ / 2);
            _(_) === _ ? (_[1] = _) : (_[0] = _ + 1);
          }
          return _;
        }
        let _ = _(_),
          _ = _(_),
          _ = _,
          _ = _;
        return {
          _(_) {
            let _ = _(_ - 86400),
              _ = _(_ + 86400),
              _ = _ - _,
              _ = _ - _;
            if (_ === _) return [_];
            let _ = _(_);
            return _ === _(_) ? [_ - _] : _ > _ ? [_, _] : [];
          },
          _: _,
          _(_, _) {
            let _ = _(_, _, _),
              [_, _] = _(_),
              _ = _ * _,
              _ =
                _ < 0
                  ? () => _ > _ || ((_ = _), 0)
                  : () => _ < _ || ((_ = _), 0);
            for (; _();) {
              let _ = _(_),
                _ = _(_);
              if (_ !== _) {
                let _ = _(_, _);
                _(_, _, _);
                let _ = _[0];
                if ((_(_, _) || 1) === _) return _;
              }
              ((_ += _), (_ += _));
            }
          },
        };
      })(
        ((_) => (_) => {
          let _ = _(_, _ * _);
          return (
            _(
              _(_),
              parseInt(_.month),
              parseInt(_.day),
              parseInt(_.hour),
              parseInt(_.minute),
              parseInt(_.second),
            ) - _
          );
        })(_),
      );
    }
    N(_) {
      return this._._(_(_)) * _;
    }
    v(_) {
      let [_, _] = [
        _(
          (_ = _).isoYear,
          _.isoMonth,
          _.isoDay,
          _.isoHour,
          _.isoMinute,
          _.isoSecond,
        ),
        _.isoMillisecond * _ + _.isoMicrosecond * _ + _.isoNanosecond,
      ];
      var _;
      return this._._(_).map((_) => _(_(_(_, _), _)));
    }
    l(_, _) {
      let [_, _] = _(_),
        _ = this._._(_ + (_ > 0 || _ ? 1 : 0), _);
      if (_ !== void 0) return _(_, _);
    }
  },
  _ = `([+-])`,
  _ = `(?:[.,](\\d{1,9}))?`,
  _ = `(?:(?:${_}(\\d{6}))|(\\d{4}))-?(\\d{2})`,
  _ = `(\\d{2})(?::?(\\d{2})(?::?(\\d{2})` + _ + `)?)?`,
  _ = _ + _,
  _ =
    _ +
    `-?(\\d{2})(?:[T ](\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?(Z|([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?)?)?`,
  _ = `\\[(!?)([^\\]]*)\\]`,
  _ = `((?:${_}){0,9})`,
  _ = _(_ + _),
  _ = _(`(?:--)?(\\d{2})-?(\\d{2})` + _),
  _ = _(_ + _),
  _ = _(`T?` + _ + `(?:` + _ + `)?` + _),
  _ = _(_),
  _ = new RegExp(_, `g`),
  _ = _(
    `${_}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${_}H)?(?:(\\d+)${_}M)?(?:(\\d+)${_}S)?)?`,
  ),
  _ = _(
    (_) =>
      new _(`en`, {
        calendar: _,
        timeZone: _,
        era: `short`,
        year: `numeric`,
        month: `numeric`,
        day: `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        hour12: 0,
      }),
  ),
  _ =
    /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/,
  _ = /[^\w\/:+-]+/,
  _ = /^M(\d{2})(L?)$/,
  _ = _(_),
  _ = _(
    (_) =>
      new _(`en`, {
        calendar: _,
        timeZone: _,
        era: `short`,
        year: `numeric`,
        month: `short`,
        day: `numeric`,
        hour12: 0,
      }),
  ),
  _ = {
    _: _,
    _: _,
    _: _,
    _: _,
    _: _,
    fields: _,
    _: _,
    inLeapYear: _,
    monthsInYear: _,
    daysInMonth: _,
    daysInYear: _,
    dayOfYear: _,
    era(_) {
      return this._(_)[0];
    },
    eraYear(_) {
      return this._(_)[1];
    },
    monthCode(_) {
      let [_, _] = this._(_),
        [_, _] = this._(_, _);
      return _(_, _);
    },
    dayOfWeek: _,
    daysInWeek: _,
  },
  _ = {
    _: _,
    _: _,
    _: _,
  },
  _ = Object.assign(
    {},
    _,
    Object.assign(
      {},
      {
        dayOfYear: _,
        _: _,
        _: _,
      },
      {
        weekOfYear: _,
        yearOfWeek: _,
        _(_) {
          function _(_) {
            return (7 - _ < _ ? 7 : 0) - _;
          }
          function _(_) {
            let _ = _(_ + _),
              _ = _ || 1;
            return (_ = (_ + (_(_(_ + _ * _, 7)) - _) * _) / 7);
          }
          let _ = this._ ? 1 : 4,
            _ = _(_),
            _ = this.dayOfYear(_),
            _ = _(_ - 1, 7),
            _ = _ - 1,
            _ = _(_ - _, 7),
            _ = _(_),
            _,
            _ = Math.floor((_ - _) / 7) + 1,
            _ = _.isoYear;
          return (
            _ ? _ > _(0) && ((_ = 1), _++) : ((_ = _(-1)), _--), [_, _, _]
          );
        },
      },
    ),
    {
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      year(_) {
        return _.isoYear;
      },
      month(_) {
        return _.isoMonth;
      },
      day: _,
    },
  ),
  _ = {
    _: _,
    _: _,
    _: _,
  },
  _ = Object.assign(
    {},
    _,
    Object.assign(
      {},
      {
        dayOfYear: _,
        _: _,
        _: _,
      },
      {
        _() {
          return [];
        },
      },
      {
        weekOfYear: _,
        yearOfWeek: _,
      },
    ),
    {
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      year(_) {
        return this._(_).year;
      },
      month(_) {
        let { year: _, _: _ } = this._(_),
          { _: _ } = this._(_);
        return _[_] + 1;
      },
      day: _,
    },
  ),
  _ = _(_, _),
  _ = _(_, _),
  _ = Object.assign(
    {},
    {
      era: _,
      eraYear: _,
      year: _,
      month: _,
      monthCode(_) {
        let _ = _(_);
        return (_(_), _);
      },
      day: _,
    },
    _(_, _),
    _(_, _),
    {
      offset(_) {
        let _ = _(_);
        return (_(_), _);
      },
    },
  ),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = `numeric`,
  _ = [`timeZoneName`],
  _ = {
    month: _,
    day: _,
  },
  _ = {
    year: _,
    month: _,
  },
  _ = Object.assign({}, _, {
    day: _,
  }),
  _ = {
    hour: _,
    minute: _,
    second: _,
  },
  _ = Object.assign({}, _, _),
  _ = Object.assign({}, _, {
    timeZoneName: `short`,
  }),
  _ = Object.keys(_),
  _ = Object.keys(_),
  _ = Object.keys(_),
  _ = Object.keys(_),
  _ = [`dateStyle`],
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_, [`weekday`]),
  _ = _.concat([`dayPeriod`, `timeStyle`, `fractionalSecondDigits`]),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat(_),
  _ = _.concat([`day`, `weekday`], _),
  _ = _.concat([`year`, `weekday`], _),
  _ = _(_, _),
  _ = _(_, _),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = _(_, _, _),
  _ = {},
  _ = _(),
  _ = [_, _],
  _ = [
    _,
    _,
    0,
    (_, _) => {
      let _ = _.timeZone;
      if (_ && _.timeZone !== _) throw RangeError(_);
      return _;
    },
  ],
  _ = [_, _],
  _ = [_, _],
  _ = [_, (_) => _(_) / _],
  _ = [_, _, _],
  _ = [_, _, _];
function _(_, _, _, _, _, _) {
  function _(..._) {
    if (!(this instanceof _)) throw TypeError(_);
    {
      let _ = _(..._);
      (_(this, _), _(this, _, _));
    }
  }
  function _(_, _) {
    return Object.defineProperties(function (..._) {
      return _.call(this, _(this), ..._);
    }, _(_));
  }
  function _(_) {
    let _ = _(_);
    if (!_ || _.branding !== _) throw TypeError(_);
    return _;
  }
  return (
    Object.defineProperties(_.prototype, {
      ..._(_(_, _)),
      ..._(_(_, _)),
      ..._(`Temporal.` + _),
    }),
    Object.defineProperties(_, {
      ..._(_),
      ..._(_),
    }),
    [
      _,
      (_) => {
        let _ = Object.create(_.prototype);
        return (_(_, _), _(_, _, _), _);
      },
      _,
    ]
  );
}
function _(_) {
  if (_(_) || _.calendar !== void 0 || _.timeZone !== void 0)
    throw TypeError(_);
  return _;
}
function _(_, _, _) {
  _.name === `dbg` &&
    Object.defineProperty(_, "o", {
      value: _(_),
      writable: 0,
      enumerable: 0,
      configurable: 0,
    });
}
function _(_) {
  return _(_) || `iso8601`;
}
function _(_) {
  let { calendar: _ } = _;
  if (_ !== void 0) return _(_);
}
function _(_) {
  if (_(_)) {
    let { calendar: _ } = _(_) || {};
    if (!_) throw TypeError(_(_));
    return _;
  }
  return ((_) => _(_(_(_))))(_);
}
function _(_) {
  let _ = {};
  for (let _ in _)
    _[_] = (_) => {
      let { calendar: _ } = _;
      return _(_)[_](_);
    };
  return _;
}
function _() {
  throw TypeError(_);
}
function _(_) {
  if (_(_)) {
    let { timeZone: _ } = _(_) || {};
    if (!_) throw TypeError(_(_));
    return _;
  }
  return ((_) => _(_(_(_))))(_);
}
function _(_) {
  if (_(_)) {
    let _ = _(_);
    return _ && _.branding === `Duration` ? _ : _(_);
  }
  return _(_);
}
function _(_) {
  if (_ !== void 0) {
    if (_(_)) {
      let _ = _(_) || {};
      switch (_.branding) {
        case _:
        case _:
          return _;
        case _:
          return _(_);
      }
      let _ = _(_);
      return {
        ..._(_, _, _(_), _),
        calendar: _,
      };
    }
    return _(_);
  }
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_) || {};
    switch (_.branding) {
      case _:
        return (_(_), _);
      case _:
        return (_(_), _(_));
      case _:
        return (_(_), _(_, _));
    }
    return _(_, _);
  }
  let _ = _(_);
  return (_(_), _);
}
function _(_) {
  return _ === void 0 ? void 0 : _(_);
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_) || {};
    switch (_.branding) {
      case _:
        return (_(_), _);
      case _:
        return (
          _(_),
          _({
            ..._,
            ..._,
          })
        );
      case _:
        return (_(_), _(_, _));
    }
    return _(_(_(_)), _, _);
  }
  let _ = _(_);
  return (_(_), _);
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_);
    if (_ && _.branding === `PlainMonthDay`) return (_(_), _);
    let _ = _(_);
    return _(_(_ || `iso8601`), !_, _, _);
  }
  let _ = _(_, _);
  return (_(_), _);
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_);
    return _ && _.branding === `PlainYearMonth` ? (_(_), _) : _(_(_(_)), _, _);
  }
  let _ = _(_, _);
  return (_(_), _);
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_) || {};
    switch (_.branding) {
      case _:
        return (_(_), _);
      case _:
        return (_(_), _(_));
      case _:
        return (_(_), _(_, _));
    }
    return _(_(_(_)), _, _);
  }
  let _ = _(_);
  return (_(_), _);
}
function _(_, _) {
  if (_(_)) {
    let _ = _(_);
    if (_ && _.branding === `ZonedDateTime`) return (_(_), _);
    let _ = _(_);
    return _(_, _, _(_), _, _, _);
  }
  return _(_, _);
}
function _(_) {
  return _((_) => (_) => _(_(_)), _);
}
function _(_) {
  return _(_, _);
}
function _(_) {
  if (_(_)) {
    let _ = _(_);
    if (_)
      switch (_.branding) {
        case _:
          return _;
        case _:
          return _(_.epochNanoseconds);
      }
  }
  return _(_);
}
function _() {
  function _(_, _) {
    return new _(_, _);
  }
  function _(_, _ = Object.create(null)) {
    _.set(
      this,
      ((_, _) => {
        let _ = new _(_, _),
          _ = _.resolvedOptions(),
          _ = _.locale,
          _ = _(Object.keys(_), _),
          _ = _(_),
          _ = (_, ..._) => {
            if (_) {
              if (_.length !== 2) throw TypeError(_);
              for (let _ of _) if (_ === void 0) throw TypeError(_);
            }
            _ || _[0] !== void 0 || (_ = []);
            let _ = _.map((_) => _(_) || Number(_)),
              _,
              _ = 0;
            for (let _ of _) {
              let _ = typeof _ == `object` ? _.branding : void 0;
              if (_++ && _ !== _) throw TypeError(_);
              _ = _;
            }
            return _ ? _(_)(_, _, ..._) : [_, ..._];
          };
        return ((_._ = _), _);
      })(_, _),
    );
  }
  let _ = _.prototype,
    _ = Object.getOwnPropertyDescriptors(_),
    _ = Object.getOwnPropertyDescriptors(_);
  for (let _ in _) {
    let _ = _[_],
      _ = _.startsWith(`format`) && _(_);
    typeof _.value == `function`
      ? (_.value = _ === `constructor` ? _ : _ || _(_))
      : _ &&
        ((_.get = function () {
          if (!_.has(this)) throw TypeError(`Invalid calling context`);
          return (..._) => _.apply(this, _);
        }),
        Object.defineProperties(_.get, _(`get ${_}`)));
  }
  return (
    (_.prototype.value = _.prototype = Object.create({}, _)),
    Object.defineProperties(_, _),
    _
  );
}
function _(_) {
  return Object.defineProperties(function (..._) {
    let [_, ..._] = _.get(this)(_.includes(`Range`), ..._);
    return _[_](..._);
  }, _(_));
}
function _(_) {
  return Object.defineProperties(function (..._) {
    return _.get(this)._[_](..._);
  }, _(_));
}
function _(_) {
  let _ = _[_];
  if (!_) throw TypeError(_(_));
  return _(_, _(_), 1);
}
var _ = new WeakMap(),
  _ = _.get.bind(_),
  _ = _.set.bind(_),
  _ = {
    era: _,
    eraYear: _,
    year: _,
    month: _,
    daysInMonth: _,
    daysInYear: _,
    inLeapYear: _,
    monthsInYear: _,
  },
  _ = {
    monthCode: _,
  },
  _ = {
    day: _,
  },
  _ = _(
    Object.assign({}, _, _, _, {
      dayOfWeek: _,
      dayOfYear: _,
      weekOfYear: _,
      yearOfWeek: _,
      daysInWeek: _,
    }),
  ),
  _ = _({
    ..._,
    ..._,
  }),
  _ = _({
    ..._,
    ..._,
  }),
  _ = {
    calendarId: (_) => _.calendar,
  },
  _ = _((_) => (_) => _[_], _.concat(`sign`)),
  _ = _((_, _) => (_) => _[_[_]], _),
  _ = {
    epochMilliseconds: _,
    epochNanoseconds: _,
  },
  [_, _, _] = _(
    _,
    _,
    {
      ..._,
      blank: _,
    },
    {
      with: (_, _) => _(_(_, _)),
      negated: (_) => _(_(_)),
      abs: (_) => _(_(_)),
      add: (_, _, _) => _(_(_, _, _, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, _, _, 1, _, _(_), _)),
      round: (_, _) => _(_(_, _, _, _, _)),
      total: (_, _) => _(_, _, _, _, _),
      toLocaleString(_, _, _) {
        return Intl.DurationFormat
          ? new Intl.DurationFormat(_, _).format(this)
          : _(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_) => _(_(_)),
      compare: (_, _, _) => _(_, _, _, _(_), _(_), _),
    },
    _,
  ),
  _ = {
    Instant: _,
    PlainDateTime: _,
    PlainDate: _,
    PlainTime: _,
    PlainYearMonth: _,
    PlainMonthDay: _,
  },
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  [_, _] = _(
    _,
    _,
    _,
    {
      with(_, _, _) {
        return _(_(this, _(_), _));
      },
      add: (_, _) => _(_(0, _, _(_))),
      subtract: (_, _) => _(_(1, _, _(_))),
      until: (_, _, _) => _(_(0, _, _(_), _)),
      since: (_, _, _) => _(_(1, _, _(_), _)),
      round: (_, _) => _(_(_, _)),
      equals: (_, _) => _(_, _(_)),
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    _,
  ),
  [_, _] = _(
    _,
    _(_, _),
    {
      ..._,
      ..._,
      ..._,
    },
    {
      with: (_, _, _) => _(_(_, _, _(_), _)),
      withCalendar: (_, _) => _(_(_, _(_))),
      withPlainTime: (_, _) => _(_(_, _(_))),
      add: (_, _, _) => _(_(_, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, 1, _, _(_), _)),
      until: (_, _, _) => _(_(_, 0, _, _(_), _)),
      since: (_, _, _) => _(_(_, 1, _, _(_), _)),
      round: (_, _) => _(_(_, _)),
      equals: (_, _) => _(_, _(_)),
      toZonedDateTime: (_, _, _) => _(_(_, _, _(_), _)),
      toPlainDate: (_) => _(_(_)),
      toPlainTime: (_) => _(_(_)),
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    _,
  ),
  [_, _, _] = _(
    _,
    _(_, _),
    {
      ..._,
      ..._,
    },
    {
      with: (_, _, _) => _(_(_, _, _(_), _)),
      equals: (_, _) => _(_, _(_)),
      toPlainDate(_, _) {
        return _(_(_, _, this, _));
      },
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
    },
    _,
  ),
  [_, _, _] = _(
    _,
    _(_, _),
    {
      ..._,
      ..._,
    },
    {
      with: (_, _, _) => _(_(_, _, _(_), _)),
      add: (_, _, _) => _(_(_, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, 1, _, _(_), _)),
      until: (_, _, _) => _(_(_, 0, _, _(_), _)),
      since: (_, _, _) => _(_(_, 1, _, _(_), _)),
      equals: (_, _) => _(_, _(_)),
      toPlainDate(_, _) {
        return _(_(_, _, this, _));
      },
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    _,
  ),
  [_, _, _] = _(
    _,
    _(_, _),
    {
      ..._,
      ..._,
    },
    {
      with: (_, _, _) => _(_(_, _, _(_), _)),
      withCalendar: (_, _) => _(_(_, _(_))),
      add: (_, _, _) => _(_(_, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, 1, _, _(_), _)),
      until: (_, _, _) => _(_(_, 0, _, _(_), _)),
      since: (_, _, _) => _(_(_, 1, _, _(_), _)),
      equals: (_, _) => _(_, _(_)),
      toZonedDateTime(_, _) {
        return _(
          _(
            _,
            _,
            _,
            _,
            _(_)
              ? _
              : {
                  timeZone: _,
                },
          ),
        );
      },
      toPlainDateTime: (_, _) => _(_(_, _(_))),
      toPlainYearMonth(_) {
        return _(_(_, _, this));
      },
      toPlainMonthDay(_) {
        return _(_(_, _, this));
      },
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: _,
      toJSON: (_) => _(_),
      valueOf: _,
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    _,
  ),
  [_, _] = _(
    _,
    _(_, _, _),
    {
      ..._,
      ..._,
      ..._(_),
      ..._(_),
      offset: (_) => _(_(_).offsetNanoseconds),
      offsetNanoseconds: (_) => _(_).offsetNanoseconds,
      timeZoneId: (_) => _.timeZone,
      hoursInDay: (_) => _(_, _),
    },
    {
      with: (_, _, _) => _(_(_, _, _, _(_), _)),
      withCalendar: (_, _) => _(_(_, _(_))),
      withTimeZone: (_, _) => _(_(_, _(_))),
      withPlainTime: (_, _) => _(_(_, _, _(_))),
      add: (_, _, _) => _(_(_, _, 0, _, _(_), _)),
      subtract: (_, _, _) => _(_(_, _, 1, _, _(_), _)),
      until: (_, _, _) => _(_(_(_, _, 0, _, _(_), _))),
      since: (_, _, _) => _(_(_(_, _, 1, _, _(_), _))),
      round: (_, _) => _(_(_, _, _)),
      startOfDay: (_) => _(_(_, _)),
      equals: (_, _) => _(_, _(_)),
      toInstant: (_) => _(_(_)),
      toPlainDateTime: (_) => _(_(_, _)),
      toPlainDate: (_) => _(_(_, _)),
      toPlainTime: (_) => _(_(_, _)),
      toLocaleString(_, _, _ = {}) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: (_, _) => _(_, _, _),
      toJSON: (_) => _(_, _),
      valueOf: _,
      getTimeZoneTransition(_, _) {
        let { timeZone: _, epochNanoseconds: _ } = _,
          _ = _(_),
          _ = _(_)._(_, _);
        return _
          ? _({
              ..._,
              epochNanoseconds: _,
            })
          : null;
      },
    },
    {
      from: (_, _) => _(_(_, _)),
      compare: (_, _) => _(_(_), _(_)),
    },
    (_) => _(_, _),
  ),
  [_, _, _] = _(
    _,
    _,
    _,
    {
      add: (_, _) => _(_(0, _, _(_))),
      subtract: (_, _) => _(_(1, _, _(_))),
      until: (_, _, _) => _(_(0, _, _(_), _)),
      since: (_, _, _) => _(_(1, _, _(_), _)),
      round: (_, _) => _(_(_, _)),
      equals: (_, _) => _(_, _(_)),
      toZonedDateTimeISO: (_, _) => _(_(_, _(_))),
      toLocaleString(_, _, _) {
        let [_, _] = _(_, _, _);
        return _.format(_);
      },
      toString: (_, _) => _(_, _, _, _),
      toJSON: (_) => _(_, _, _),
      valueOf: _,
    },
    {
      from: (_) => _(_(_)),
      fromEpochMilliseconds: (_) => _(_(_)),
      fromEpochNanoseconds: (_) => _(_(_)),
      compare: (_, _) => _(_(_), _(_)),
    },
    (_) => _(_, _, _),
  ),
  _ = Object.defineProperties(
    {},
    {
      ..._(`Temporal.Now`),
      ..._({
        timeZoneId: () => _(),
        instant: () => _(_(_())),
        zonedDateTimeISO: (_ = _()) => _(_(_(), _(_), _)),
        plainDateTimeISO: (_ = _()) => _(_(_(_(_(_))), _)),
        plainDateISO: (_ = _()) => _(_(_(_(_(_))), _)),
        plainTimeISO: (_ = _()) => _(_(_(_(_(_))))),
      }),
    },
  ),
  _ = Object.defineProperties(
    {},
    {
      ..._(`Temporal`),
      ..._({
        PlainYearMonth: _,
        PlainMonthDay: _,
        PlainDate: _,
        PlainTime: _,
        PlainDateTime: _,
        ZonedDateTime: _,
        Instant: _,
        Duration: _,
        Now: _,
      }),
    },
  ),
  _ = _(),
  _ = new WeakMap();
(Object.create(Intl),
  _({
    DateTimeFormat: _,
  }));
var _ = _(_(), 1),
  _ = [
    {
      eType: 0,
      strLabel: `Off-topic`,
    },
    {
      eType: 1,
      strLabel: `Pending Internal Valve Review`,
    },
    {
      eType: 2,
      strLabel: `Testing Only`,
    },
  ];
function _(_) {
  return _.find((_) => _.eType == _)?.strLabel ?? `Type ${_}`;
}
function _(_) {
  return _
    ? _.Instant.fromEpochMilliseconds(_ * 1e3)
        .toZonedDateTimeISO(`UTC`)
        .toPlainDate()
    : null;
}
function _(_) {
  return [`reviewbombperiods`, _];
}
function _(_) {
  return _({
    queryKey: _(_),
    queryFn: () =>
      _(
        `${_.STORE_BASE_URL}ajaxmanagereviewanomalies/${_}/`,
        `ajaxmanagereviewanomalies`,
        {
          sessionid: _(),
        },
      ),
    enabled: !!_,
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = {
        sessionid: _(),
        action: _.action,
      };
      (_.action != `add` && (_._ = _.strID),
        _.action != `remove` &&
          ((_.start_date = _.strStartDate),
          (_.end_date = _.strEndDate),
          (_.internal_comment = _.strInternalComment),
          (_.type = _.eType)),
        await _(
          `${_.STORE_BASE_URL}handlereviewanomaly/${_}/`,
          `handlereviewanomaly`,
          _,
        ));
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
var _ = `ljjW1IoFyg0-`,
  _ = `cRPUoqfRaB8-`,
  _ = `FUYQ760r1PU-`,
  _ = `ggJxfkWmvFw-`,
  _ = `WcCHM5ikzHI-`,
  _ = _(),
  _ = `YYYY-MM-DD`,
  _ = `Internal Comment`;
function _(_) {
  try {
    return (_.PlainDate.from(_), !0);
  } catch {
    return !1;
  }
}
function _(_) {
  return _ ? (_(_)?.toString() ?? ``) : ``;
}
function _(_) {
  let { period: _, onSubmit: _, onClose: _ } = _,
    [_, _] = _.useState(() => _(_?.nStartDate)),
    [_, _] = _.useState(() => _(_?.nEndDate)),
    [_, _] = _.useState(_?.strInternalComment ?? ``),
    [_, _] = _.useState(_?.eType ?? _[0].eType),
    _ = _.useMemo(
      () =>
        _.map((_) => ({
          label: _.strLabel,
          data: _.eType,
        })),
      [],
    ),
    _ = _(_),
    _ = !_ || _(_),
    _ = _ && _ && _.trim().length > 0,
    _ = _.useCallback((_) => _(_.target.value), []),
    _ = _.useCallback((_) => _(_.target.value), []),
    _ = _.useCallback((_) => _(_.target.value), []),
    _ = _.useCallback((_) => _(_.data), []),
    _ = _.useCallback(() => {
      _ &&
        (_({
          strStartDate: _,
          strEndDate: _,
          strInternalComment: _,
          eType: _,
        }),
        _());
    }, [_, _, _, _, _, _, _]),
    _ = _.useId(),
    _ = _(_, {
      label: _,
    });
  return (0, _.jsxs)(_, {
    className: _,
    strTitle: _
      ? `Update Review Anomaly Period`
      : `Add New Review Anomaly Period`,
    strOKButtonText: _ ? `Update` : `Add`,
    bOKDisabled: !_,
    onOK: _,
    onCancel: _,
    closeModal: _,
    children: [
      (0, _.jsx)(_, {
        label: `Start Date (UTC)`,
        description: _,
        value: _,
        onChange: _,
      }),
      (0, _.jsx)(_, {
        label: `End Date (UTC)`,
        description: `${_}, or empty for no end`,
        value: _,
        onChange: _,
      }),
      (0, _.jsx)(_, {
        label: `Type`,
        "aria-label": `Type`,
        controlled: !0,
        rgOptions: _,
        selectedOption: _,
        onChange: _,
      }),
      (0, _.jsx)(_, {
        accessibilityId: _,
        label: _,
        childrenLayout: `below`,
        childrenContainerWidth: `max`,
        children: (0, _.jsx)(_, {
          className: _,
          ..._,
          value: _,
          onChange: _,
          nMinHeight: 100,
        }),
      }),
    ],
  });
}
function _(_, _ = ``) {
  return _(_)?.toString() ?? _;
}
function _(_) {
  let { nTotal: _, nFromNonSteamPurchase: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [_(_ - _), ` [`, _(_), `]`],
  });
}
function _(_) {
  let { period: _ } = _;
  return _.strPersonaName
    ? _.strProfileURL
      ? (0, _.jsx)(_, {
          href: _.strProfileURL,
          children: _.strPersonaName,
        })
      : (0, _.jsx)(_.Fragment, {
          children: _.strPersonaName,
        })
    : (0, _.jsx)(_.Fragment, {
        children: `Automated`,
      });
}
function _(_) {
  let { period: _, onEdit: _, onRemove: _ } = _,
    _ = _.useCallback(() => _(_), [_, _]),
    _ = _.useCallback(() => _(_), [_, _]);
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: _.strID,
      }),
      (0, _.jsx)(`td`, {
        children: _(_.nStartDate),
      }),
      (0, _.jsx)(`td`, {
        children: _(_.nEndDate, `No End Set`),
      }),
      (0, _.jsx)(`td`, {
        children: _(_.eType),
      }),
      (0, _.jsx)(`td`, {
        className: _,
        children: (0, _.jsx)(_, {
          text: _.strInternalComment,
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          period: _,
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          nTotal: _.nRecommendationsUp,
          nFromNonSteamPurchase: _.nRecommendationsUpFromNonSteamPurchase,
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          nTotal: _.nRecommendationsDown,
          nFromNonSteamPurchase: _.nRecommendationsDownFromNonSteamPurchase,
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              size: `1`,
              onClick: _,
              children: `Edit`,
            }),
            (0, _.jsx)(_, {
              size: `1`,
              color: `error`,
              onClick: _,
              children: `Remove`,
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, onClose: _ } = _,
    _ = _(_),
    _ = _(_),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(``),
    _ = _.useCallback(() => _(null), []),
    _ = _.useCallback((_) => _(_), []),
    _ = _.useCallback((_) => _(_), []),
    _ = _.useCallback(() => _(void 0), []),
    _ = _.useCallback(() => _(void 0), []),
    _ = _.useCallback(() => _(``), []),
    _ = _.useCallback((_, _) => {
      _(
        `Failed to ${_} the review anomaly period. ${_ instanceof Error ? _.message : String(_)}`,
      );
    }, []),
    _ = _.useCallback(
      (_) => {
        let _ = _,
          _ = _
            ? {
                action: `update`,
                strID: _.strID,
                ..._,
              }
            : {
                action: `add`,
                ..._,
              };
        _.mutate(_, {
          onError: (_) => _(_ ? `update` : `add`, _),
        });
      },
      [_, _, _],
    ),
    _ = _.useCallback(() => {
      _ &&
        (_.mutate(
          {
            action: `remove`,
            strID: _.strID,
          },
          {
            onError: (_) => _(`remove`, _),
          },
        ),
        _(void 0));
    }, [_, _, _]),
    _ = _.data?.rgPeriods;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        bAlertDialog: !0,
        bAllowFullSize: !0,
        className: _,
        strTitle: `Manage Review Anomalies`,
        closeModal: _,
        onOK: _,
        onCancel: _,
        children: [
          _.isPending && (0, _.jsx)(_, {}),
          _.isError &&
            (0, _.jsx)(`div`, {
              className: `mDfX6flvFLo-`,
              children: `Could not load this app's review anomaly periods.`,
            }),
          _ &&
            (0, _.jsxs)(`div`, {
              className: `_8lhbBfsOJD0-`,
              children: [
                (0, _.jsxs)(`table`, {
                  className: `_8yXPdJqj5qU-`,
                  children: [
                    (0, _.jsx)(`thead`, {
                      children: (0, _.jsxs)(`tr`, {
                        children: [
                          (0, _.jsx)(`th`, {
                            children: `ID`,
                          }),
                          (0, _.jsx)(`th`, {
                            children: `Start`,
                          }),
                          (0, _.jsx)(`th`, {
                            children: `End`,
                          }),
                          (0, _.jsx)(`th`, {
                            children: `Type`,
                          }),
                          (0, _.jsx)(`th`, {
                            children: `Internal Comment`,
                          }),
                          (0, _.jsx)(`th`, {
                            children: `Account`,
                          }),
                          (0, _.jsx)(`th`, {
                            children: `Positive Reviews`,
                          }),
                          (0, _.jsx)(`th`, {
                            children: `Negative Reviews`,
                          }),
                          (0, _.jsx)(`th`, {
                            children: `\xA0`,
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(`tbody`, {
                      children: _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            period: _,
                            onEdit: _,
                            onRemove: _,
                          },
                          _.strID,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: `_75yHV1ez91I-`,
                  children: (0, _.jsx)(_, {
                    variant: `vibrant`,
                    onClick: _,
                    children: `Add New Review Bomb Period`,
                  }),
                }),
              ],
            }),
        ],
      }),
      (0, _.jsx)(_, {
        active: _ !== void 0,
        children: (0, _.jsx)(_, {
          period: _ ?? void 0,
          onSubmit: _,
          onClose: _,
        }),
      }),
      (0, _.jsx)(_, {
        active: !!_,
        children: (0, _.jsx)(_, {
          bDestructiveWarning: !0,
          strTitle: `Remove Review Anomaly Period?`,
          strDescription: `Are you sure you want to remove this review anomaly period? ID: ${_?.strID ?? ``}`,
          strOKButtonText: `Remove`,
          closeModal: _,
          onOK: _,
          onCancel: _,
        }),
      }),
      (0, _.jsx)(_, {
        active: !!_,
        children: (0, _.jsx)(_, {
          strTitle: `Error`,
          strDescription: _,
          closeModal: _,
          onOK: _,
        }),
      }),
    ],
  });
}
export { _ as ReviewBombAdminDialog };
