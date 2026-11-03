var _ = null;
try {
  _ = new WebAssembly.Instance(
    new WebAssembly.Module(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127,
        127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11,
        7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5,
        100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114,
        101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0,
        10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
        66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4,
        66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32,
        1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127,
        34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0,
        173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
        132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
        32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66,
        32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36,
        1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
        173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
        11,
      ]),
    ),
    {},
  ).exports;
} catch {}
function _(_, _, _) {
  (this.low = _ | 0), (this.high = _ | 0), (this.unsigned = !!_);
}
_.prototype.__isLong__,
  Object.defineProperty(_.prototype, "__isLong__", {
    value: !0,
  });
function _(_) {
  return (_ && _.__isLong__) === !0;
}
function _(_) {
  var _ = Math.clz32(_ & -_);
  return _ ? 31 - _ : _;
}
_.isLong = _;
var _ = {},
  _ = {};
function _(_, _) {
  var _, _, _;
  return _
    ? ((_ >>>= 0),
      (_ = 0 <= _ && _ < 256) && ((_ = _[_]), _)
        ? _
        : ((_ = _(_, 0, !0)), _ && (_[_] = _), _))
    : ((_ |= 0),
      (_ = -128 <= _ && _ < 128) && ((_ = _[_]), _)
        ? _
        : ((_ = _(_, _ < 0 ? -1 : 0, !1)), _ && (_[_] = _), _));
}
_.fromInt = _;
function _(_, _) {
  if (isNaN(_)) return _ ? _ : _;
  if (_) {
    if (_ < 0) return _;
    if (_ >= _) return _;
  } else {
    if (_ <= -_) return _;
    if (_ + 1 >= _) return _;
  }
  return _ < 0 ? _(-_, _).neg() : _((_ % _) | 0, (_ / _) | 0, _);
}
_.fromNumber = _;
function _(_, _, _) {
  return new _(_, _, _);
}
_.fromBits = _;
var _ = Math.pow;
function _(_, _, _) {
  if (_.length === 0) throw Error(`empty string`);
  if (
    (typeof _ == `number` ? ((_ = _), (_ = !1)) : (_ = !!_),
    _ === `NaN` || _ === `Infinity` || _ === `+Infinity` || _ === `-Infinity`)
  )
    return _ ? _ : _;
  if (((_ ||= 10), _ < 2 || 36 < _)) throw RangeError(`radix`);
  var _;
  if ((_ = _.indexOf(`-`)) > 0) throw Error(`interior hyphen`);
  if (_ === 0) return _(_.substring(1), _, _).neg();
  for (var _ = _(_(_, 8)), _ = _, _ = 0; _ < _.length; _ += 8) {
    var _ = Math.min(8, _.length - _),
      _ = parseInt(_.substring(_, _ + _), _);
    if (_ < 8) {
      var _ = _(_(_, _));
      _ = _.mul(_).add(_(_));
    } else (_ = _.mul(_)), (_ = _.add(_(_)));
  }
  return (_.unsigned = _), _;
}
_.fromString = _;
function _(_, _) {
  return typeof _ == `number`
    ? _(_, _)
    : typeof _ == `string`
      ? _(_, _)
      : _(_.low, _.high, typeof _ == `boolean` ? _ : _.unsigned);
}
_.fromValue = _;
var _ = 65536,
  _ = 1 << 24,
  _ = _ * _,
  _ = _ * _,
  _ = _ / 2,
  _ = _(_),
  _ = _(0);
_.ZERO = _;
var _ = _(0, !0);
_.UZERO = _;
var _ = _(1);
_.ONE = _;
var _ = _(1, !0);
_.UONE = _;
var _ = _(-1);
_.NEG_ONE = _;
var _ = _(-1, 2147483647, !1);
_.MAX_VALUE = _;
var _ = _(-1, -1, !0);
_.MAX_UNSIGNED_VALUE = _;
var _ = _(0, -2147483648, !1);
_.MIN_VALUE = _;
var _ = _.prototype;
(_.toInt = function () {
  return this.unsigned ? this.low >>> 0 : this.low;
}),
  (_.toNumber = function () {
    return this.unsigned
      ? (this.high >>> 0) * _ + (this.low >>> 0)
      : this.high * _ + (this.low >>> 0);
  }),
  (_.toString = function (_) {
    if (((_ ||= 10), _ < 2 || 36 < _)) throw RangeError(`radix`);
    if (this.isZero()) return `0`;
    if (this.isNegative()) {
      if (this._(_)) {
        var _ = _(_),
          _ = this.div(_),
          _ = _.mul(_).sub(this);
        return _.toString(_) + _.toInt().toString(_);
      }
      return `-` + this.neg().toString(_);
    }
    for (var _ = _(_(_, 6), this.unsigned), _ = this, _ = ``; ; ) {
      var _ = _.div(_),
        _ = (_.sub(_.mul(_)).toInt() >>> 0).toString(_);
      if (((_ = _), _.isZero())) return _ + _;
      for (; _.length < 6; ) _ = `0` + _;
      _ = `` + _ + _;
    }
  }),
  (_.getHighBits = function () {
    return this.high;
  }),
  (_.getHighBitsUnsigned = function () {
    return this.high >>> 0;
  }),
  (_.getLowBits = function () {
    return this.low;
  }),
  (_.getLowBitsUnsigned = function () {
    return this.low >>> 0;
  }),
  (_.getNumBitsAbs = function () {
    if (this.isNegative()) return this._(_) ? 64 : this.neg().getNumBitsAbs();
    for (
      var _ = this.high == 0 ? this.low : this.high, _ = 31;
      _ > 0 && !(_ & (1 << _));
      _--
    );
    return this.high == 0 ? _ + 1 : _ + 33;
  }),
  (_.isSafeInteger = function () {
    var _ = this.high >> 21;
    return (
      !_ ||
      (!this.unsigned && _ === -1 && (this.low !== 0 || this.high !== -2097152))
    );
  }),
  (_.isZero = function () {
    return this.high === 0 && this.low === 0;
  }),
  (_.eqz = _.isZero),
  (_.isNegative = function () {
    return !this.unsigned && this.high < 0;
  }),
  (_.isPositive = function () {
    return this.unsigned || this.high >= 0;
  }),
  (_.isOdd = function () {
    return (this.low & 1) == 1;
  }),
  (_.isEven = function () {
    return !(this.low & 1);
  }),
  (_.equals = function (_) {
    return (
      _(_) || (_ = _(_)),
      this.unsigned !== _.unsigned &&
      this.high >>> 31 == 1 &&
      _.high >>> 31 == 1
        ? !1
        : this.high === _.high && this.low === _.low
    );
  }),
  (_._ = _.equals),
  (_.notEquals = function (_) {
    return !this._(_);
  }),
  (_.neq = _.notEquals),
  (_._ = _.notEquals),
  (_.lessThan = function (_) {
    return this.comp(_) < 0;
  }),
  (_._ = _.lessThan),
  (_.lessThanOrEqual = function (_) {
    return this.comp(_) <= 0;
  }),
  (_.lte = _.lessThanOrEqual),
  (_._ = _.lessThanOrEqual),
  (_.greaterThan = function (_) {
    return this.comp(_) > 0;
  }),
  (_._ = _.greaterThan),
  (_.greaterThanOrEqual = function (_) {
    return this.comp(_) >= 0;
  }),
  (_.gte = _.greaterThanOrEqual),
  (_._ = _.greaterThanOrEqual),
  (_.compare = function (_) {
    if ((_(_) || (_ = _(_)), this._(_))) return 0;
    var _ = this.isNegative(),
      _ = _.isNegative();
    return _ && !_
      ? -1
      : !_ && _
        ? 1
        : this.unsigned
          ? _.high >>> 0 > this.high >>> 0 ||
            (_.high === this.high && _.low >>> 0 > this.low >>> 0)
            ? -1
            : 1
          : this.sub(_).isNegative()
            ? -1
            : 1;
  }),
  (_.comp = _.compare),
  (_.negate = function () {
    return !this.unsigned && this._(_) ? _ : this.not().add(_);
  }),
  (_.neg = _.negate),
  (_.add = function (_) {
    _(_) || (_ = _(_));
    var _ = this.high >>> 16,
      _ = this.high & 65535,
      _ = this.low >>> 16,
      _ = this.low & 65535,
      _ = _.high >>> 16,
      _ = _.high & 65535,
      _ = _.low >>> 16,
      _ = _.low & 65535,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0;
    return (
      (_ += _ + _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ + _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ + _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ + _),
      (_ &= 65535),
      _((_ << 16) | _, (_ << 16) | _, this.unsigned)
    );
  }),
  (_.subtract = function (_) {
    return _(_) || (_ = _(_)), this.add(_.neg());
  }),
  (_.sub = _.subtract),
  (_.multiply = function (_) {
    if (this.isZero()) return this;
    if ((_(_) || (_ = _(_)), _))
      return _(
        _.mul(this.low, this.high, _.low, _.high),
        _.get_high(),
        this.unsigned,
      );
    if (_.isZero()) return this.unsigned ? _ : _;
    if (this._(_)) return _.isOdd() ? _ : _;
    if (_._(_)) return this.isOdd() ? _ : _;
    if (this.isNegative())
      return _.isNegative() ? this.neg().mul(_.neg()) : this.neg().mul(_).neg();
    if (_.isNegative()) return this.mul(_.neg()).neg();
    if (this._(_) && _._(_))
      return _(this.toNumber() * _.toNumber(), this.unsigned);
    var _ = this.high >>> 16,
      _ = this.high & 65535,
      _ = this.low >>> 16,
      _ = this.low & 65535,
      _ = _.high >>> 16,
      _ = _.high & 65535,
      _ = _.low >>> 16,
      _ = _.low & 65535,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0;
    return (
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _ + _ * _ + _ * _ + _ * _),
      (_ &= 65535),
      _((_ << 16) | _, (_ << 16) | _, this.unsigned)
    );
  }),
  (_.mul = _.multiply),
  (_.divide = function (_) {
    if ((_(_) || (_ = _(_)), _.isZero())) throw Error(`division by zero`);
    if (_)
      return !this.unsigned &&
        this.high === -2147483648 &&
        _.low === -1 &&
        _.high === -1
        ? this
        : _(
            (this.unsigned ? _.div_u : _.div_s)(
              this.low,
              this.high,
              _.low,
              _.high,
            ),
            _.get_high(),
            this.unsigned,
          );
    if (this.isZero()) return this.unsigned ? _ : _;
    var _, _, _;
    if (this.unsigned) {
      if ((_.unsigned || (_ = _.toUnsigned()), _._(this))) return _;
      if (_._(this.shru(1))) return _;
      _ = _;
    } else {
      if (this._(_))
        return _._(_) || _._(_)
          ? _
          : _._(_)
            ? _
            : ((_ = this.shr(1).div(_).shl(1)),
              _._(_)
                ? _.isNegative()
                  ? _
                  : _
                : ((_ = this.sub(_.mul(_))), (_ = _.add(_.div(_))), _));
      if (_._(_)) return this.unsigned ? _ : _;
      if (this.isNegative())
        return _.isNegative()
          ? this.neg().div(_.neg())
          : this.neg().div(_).neg();
      if (_.isNegative()) return this.div(_.neg()).neg();
      _ = _;
    }
    for (_ = this; _.gte(_); ) {
      _ = Math.max(1, Math.floor(_.toNumber() / _.toNumber()));
      for (
        var _ = Math.ceil(Math.log(_) / Math.LN2),
          _ = _ <= 48 ? 1 : _(2, _ - 48),
          _ = _(_),
          _ = _.mul(_);
        _.isNegative() || _._(_);
      )
        (_ -= _), (_ = _(_, this.unsigned)), (_ = _.mul(_));
      _.isZero() && (_ = _), (_ = _.add(_)), (_ = _.sub(_));
    }
    return _;
  }),
  (_.div = _.divide),
  (_.modulo = function (_) {
    return (
      _(_) || (_ = _(_)),
      _
        ? _(
            (this.unsigned ? _.rem_u : _.rem_s)(
              this.low,
              this.high,
              _.low,
              _.high,
            ),
            _.get_high(),
            this.unsigned,
          )
        : this.sub(this.div(_).mul(_))
    );
  }),
  (_.mod = _.modulo),
  (_.rem = _.modulo),
  (_.not = function () {
    return _(~this.low, ~this.high, this.unsigned);
  }),
  (_.countLeadingZeros = function () {
    return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
  }),
  (_.clz = _.countLeadingZeros),
  (_.countTrailingZeros = function () {
    return this.low ? _(this.low) : _(this.high) + 32;
  }),
  (_.ctz = _.countTrailingZeros),
  (_.and = function (_) {
    return (
      _(_) || (_ = _(_)), _(this.low & _.low, this.high & _.high, this.unsigned)
    );
  }),
  (_._ = function (_) {
    return (
      _(_) || (_ = _(_)), _(this.low | _.low, this.high | _.high, this.unsigned)
    );
  }),
  (_.xor = function (_) {
    return (
      _(_) || (_ = _(_)), _(this.low ^ _.low, this.high ^ _.high, this.unsigned)
    );
  }),
  (_.shiftLeft = function (_) {
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ < 32
          ? _(
              this.low << _,
              (this.high << _) | (this.low >>> (32 - _)),
              this.unsigned,
            )
          : _(0, this.low << (_ - 32), this.unsigned)
    );
  }),
  (_.shl = _.shiftLeft),
  (_.shiftRight = function (_) {
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ < 32
          ? _(
              (this.low >>> _) | (this.high << (32 - _)),
              this.high >> _,
              this.unsigned,
            )
          : _(this.high >> (_ - 32), this.high >= 0 ? 0 : -1, this.unsigned)
    );
  }),
  (_.shr = _.shiftRight),
  (_.shiftRightUnsigned = function (_) {
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ < 32
          ? _(
              (this.low >>> _) | (this.high << (32 - _)),
              this.high >>> _,
              this.unsigned,
            )
          : _(_ === 32 ? this.high : this.high >>> (_ - 32), 0, this.unsigned)
    );
  }),
  (_.shru = _.shiftRightUnsigned),
  (_.shr_u = _.shiftRightUnsigned),
  (_.rotateLeft = function (_) {
    var _;
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ === 32
          ? _(this.high, this.low, this.unsigned)
          : _ < 32
            ? ((_ = 32 - _),
              _(
                (this.low << _) | (this.high >>> _),
                (this.high << _) | (this.low >>> _),
                this.unsigned,
              ))
            : ((_ -= 32),
              (_ = 32 - _),
              _(
                (this.high << _) | (this.low >>> _),
                (this.low << _) | (this.high >>> _),
                this.unsigned,
              ))
    );
  }),
  (_.rotl = _.rotateLeft),
  (_.rotateRight = function (_) {
    var _;
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ === 32
          ? _(this.high, this.low, this.unsigned)
          : _ < 32
            ? ((_ = 32 - _),
              _(
                (this.high << _) | (this.low >>> _),
                (this.low << _) | (this.high >>> _),
                this.unsigned,
              ))
            : ((_ -= 32),
              (_ = 32 - _),
              _(
                (this.low << _) | (this.high >>> _),
                (this.high << _) | (this.low >>> _),
                this.unsigned,
              ))
    );
  }),
  (_.rotr = _.rotateRight),
  (_.toSigned = function () {
    return this.unsigned ? _(this.low, this.high, !1) : this;
  }),
  (_.toUnsigned = function () {
    return this.unsigned ? this : _(this.low, this.high, !0);
  }),
  (_.toBytes = function (_) {
    return _ ? this.toBytesLE() : this.toBytesBE();
  }),
  (_.toBytesLE = function () {
    var _ = this.high,
      _ = this.low;
    return [
      _ & 255,
      (_ >>> 8) & 255,
      (_ >>> 16) & 255,
      _ >>> 24,
      _ & 255,
      (_ >>> 8) & 255,
      (_ >>> 16) & 255,
      _ >>> 24,
    ];
  }),
  (_.toBytesBE = function () {
    var _ = this.high,
      _ = this.low;
    return [
      _ >>> 24,
      (_ >>> 16) & 255,
      (_ >>> 8) & 255,
      _ & 255,
      _ >>> 24,
      (_ >>> 16) & 255,
      (_ >>> 8) & 255,
      _ & 255,
    ];
  }),
  (_.fromBytes = function (_, _, _) {
    return _ ? _.fromBytesLE(_, _) : _.fromBytesBE(_, _);
  }),
  (_.fromBytesLE = function (_, _) {
    return new _(
      _[0] | (_[1] << 8) | (_[2] << 16) | (_[3] << 24),
      _[4] | (_[5] << 8) | (_[6] << 16) | (_[7] << 24),
      _,
    );
  }),
  (_.fromBytesBE = function (_, _) {
    return new _(
      (_[4] << 24) | (_[5] << 16) | (_[6] << 8) | _[7],
      (_[0] << 24) | (_[1] << 16) | (_[2] << 8) | _[3],
      _,
    );
  }),
  typeof BigInt == `function` &&
    ((_.fromBigInt = function (_, _) {
      return _(
        Number(BigInt.asIntN(32, _)),
        Number(BigInt.asIntN(32, _ >> BigInt(32))),
        _,
      );
    }),
    (_.fromValue = function (_, _) {
      return typeof _ == `bigint` ? _.fromBigInt(_, _) : _(_, _);
    }),
    (_.toBigInt = function () {
      var _ = BigInt(this.low >>> 0);
      return (
        (BigInt(this.unsigned ? this.high >>> 0 : this.high) << BigInt(32)) | _
      );
    }));
export { _ };
