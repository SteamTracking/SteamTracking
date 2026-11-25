/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
var e = null;
try {
  e = new WebAssembly.Instance(
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
function t(e, t, n) {
  ((this.low = e | 0), (this.high = t | 0), (this.unsigned = !!n));
}
(t.prototype.__isLong__,
  Object.defineProperty(t.prototype, "__isLong__", { value: !0 }));
function n(e) {
  return (e && e.__isLong__) === !0;
}
function r(e) {
  var t = Math.clz32(e & -e);
  return e ? 31 - t : t;
}
t.isLong = n;
var i = {},
  a = {};
function o(e, t) {
  var n, r, o;
  return t
    ? ((e >>>= 0),
      (o = 0 <= e && e < 256) && ((r = a[e]), r)
        ? r
        : ((n = c(e, 0, !0)), o && (a[e] = n), n))
    : ((e |= 0),
      (o = -128 <= e && e < 128) && ((r = i[e]), r)
        ? r
        : ((n = c(e, e < 0 ? -1 : 0, !1)), o && (i[e] = n), n));
}
t.fromInt = o;
function s(e, t) {
  if (isNaN(e)) return t ? y : v;
  if (t) {
    if (e < 0) return y;
    if (e >= h) return w;
  } else {
    if (e <= -g) return T;
    if (e + 1 >= g) return C;
  }
  return e < 0 ? s(-e, t).neg() : c((e % m) | 0, (e / m) | 0, t);
}
t.fromNumber = s;
function c(e, n, r) {
  return new t(e, n, r);
}
t.fromBits = c;
var l = Math.pow;
function u(e, t, n) {
  if (e.length === 0) throw Error(`empty string`);
  if (
    (typeof t == `number` ? ((n = t), (t = !1)) : (t = !!t),
    e === `NaN` || e === `Infinity` || e === `+Infinity` || e === `-Infinity`)
  )
    return t ? y : v;
  if (((n ||= 10), n < 2 || 36 < n)) throw RangeError(`radix`);
  var r;
  if ((r = e.indexOf(`-`)) > 0) throw Error(`interior hyphen`);
  if (r === 0) return u(e.substring(1), t, n).neg();
  for (var i = s(l(n, 8)), a = v, o = 0; o < e.length; o += 8) {
    var c = Math.min(8, e.length - o),
      d = parseInt(e.substring(o, o + c), n);
    if (c < 8) {
      var f = s(l(n, c));
      a = a.mul(f).add(s(d));
    } else ((a = a.mul(i)), (a = a.add(s(d))));
  }
  return ((a.unsigned = t), a);
}
t.fromString = u;
function d(e, t) {
  return typeof e == `number`
    ? s(e, t)
    : typeof e == `string`
      ? u(e, t)
      : c(e.low, e.high, typeof t == `boolean` ? t : e.unsigned);
}
t.fromValue = d;
var f = 65536,
  p = 1 << 24,
  m = f * f,
  h = m * m,
  g = h / 2,
  _ = o(p),
  v = o(0);
t.ZERO = v;
var y = o(0, !0);
t.UZERO = y;
var b = o(1);
t.ONE = b;
var x = o(1, !0);
t.UONE = x;
var S = o(-1);
t.NEG_ONE = S;
var C = c(-1, 2147483647, !1);
t.MAX_VALUE = C;
var w = c(-1, -1, !0);
t.MAX_UNSIGNED_VALUE = w;
var T = c(0, -2147483648, !1);
t.MIN_VALUE = T;
var E = t.prototype;
((E.toInt = function () {
  return this.unsigned ? this.low >>> 0 : this.low;
}),
  (E.toNumber = function () {
    return this.unsigned
      ? (this.high >>> 0) * m + (this.low >>> 0)
      : this.high * m + (this.low >>> 0);
  }),
  (E.toString = function (e) {
    if (((e ||= 10), e < 2 || 36 < e)) throw RangeError(`radix`);
    if (this.isZero()) return `0`;
    if (this.isNegative()) {
      if (this.eq(T)) {
        var t = s(e),
          n = this.div(t),
          r = n.mul(t).sub(this);
        return n.toString(e) + r.toInt().toString(e);
      }
      return `-` + this.neg().toString(e);
    }
    for (var i = s(l(e, 6), this.unsigned), a = this, o = ``; ;) {
      var c = a.div(i),
        u = (a.sub(c.mul(i)).toInt() >>> 0).toString(e);
      if (((a = c), a.isZero())) return u + o;
      for (; u.length < 6;) u = `0` + u;
      o = `` + u + o;
    }
  }),
  (E.getHighBits = function () {
    return this.high;
  }),
  (E.getHighBitsUnsigned = function () {
    return this.high >>> 0;
  }),
  (E.getLowBits = function () {
    return this.low;
  }),
  (E.getLowBitsUnsigned = function () {
    return this.low >>> 0;
  }),
  (E.getNumBitsAbs = function () {
    if (this.isNegative()) return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
    for (
      var e = this.high == 0 ? this.low : this.high, t = 31;
      t > 0 && !(e & (1 << t));
      t--
    );
    return this.high == 0 ? t + 1 : t + 33;
  }),
  (E.isSafeInteger = function () {
    var e = this.high >> 21;
    return (
      !e ||
      (!this.unsigned && e === -1 && (this.low !== 0 || this.high !== -2097152))
    );
  }),
  (E.isZero = function () {
    return this.high === 0 && this.low === 0;
  }),
  (E.eqz = E.isZero),
  (E.isNegative = function () {
    return !this.unsigned && this.high < 0;
  }),
  (E.isPositive = function () {
    return this.unsigned || this.high >= 0;
  }),
  (E.isOdd = function () {
    return (this.low & 1) == 1;
  }),
  (E.isEven = function () {
    return !(this.low & 1);
  }),
  (E.equals = function (e) {
    return (
      n(e) || (e = d(e)),
      this.unsigned !== e.unsigned &&
      this.high >>> 31 == 1 &&
      e.high >>> 31 == 1
        ? !1
        : this.high === e.high && this.low === e.low
    );
  }),
  (E.eq = E.equals),
  (E.notEquals = function (e) {
    return !this.eq(e);
  }),
  (E.neq = E.notEquals),
  (E.ne = E.notEquals),
  (E.lessThan = function (e) {
    return this.comp(e) < 0;
  }),
  (E.lt = E.lessThan),
  (E.lessThanOrEqual = function (e) {
    return this.comp(e) <= 0;
  }),
  (E.lte = E.lessThanOrEqual),
  (E.le = E.lessThanOrEqual),
  (E.greaterThan = function (e) {
    return this.comp(e) > 0;
  }),
  (E.gt = E.greaterThan),
  (E.greaterThanOrEqual = function (e) {
    return this.comp(e) >= 0;
  }),
  (E.gte = E.greaterThanOrEqual),
  (E.ge = E.greaterThanOrEqual),
  (E.compare = function (e) {
    if ((n(e) || (e = d(e)), this.eq(e))) return 0;
    var t = this.isNegative(),
      r = e.isNegative();
    return t && !r
      ? -1
      : !t && r
        ? 1
        : this.unsigned
          ? e.high >>> 0 > this.high >>> 0 ||
            (e.high === this.high && e.low >>> 0 > this.low >>> 0)
            ? -1
            : 1
          : this.sub(e).isNegative()
            ? -1
            : 1;
  }),
  (E.comp = E.compare),
  (E.negate = function () {
    return !this.unsigned && this.eq(T) ? T : this.not().add(b);
  }),
  (E.neg = E.negate),
  (E.add = function (e) {
    n(e) || (e = d(e));
    var t = this.high >>> 16,
      r = this.high & 65535,
      i = this.low >>> 16,
      a = this.low & 65535,
      o = e.high >>> 16,
      s = e.high & 65535,
      l = e.low >>> 16,
      u = e.low & 65535,
      f = 0,
      p = 0,
      m = 0,
      h = 0;
    return (
      (h += a + u),
      (m += h >>> 16),
      (h &= 65535),
      (m += i + l),
      (p += m >>> 16),
      (m &= 65535),
      (p += r + s),
      (f += p >>> 16),
      (p &= 65535),
      (f += t + o),
      (f &= 65535),
      c((m << 16) | h, (f << 16) | p, this.unsigned)
    );
  }),
  (E.subtract = function (e) {
    return (n(e) || (e = d(e)), this.add(e.neg()));
  }),
  (E.sub = E.subtract),
  (E.multiply = function (t) {
    if (this.isZero()) return this;
    if ((n(t) || (t = d(t)), e))
      return c(
        e.mul(this.low, this.high, t.low, t.high),
        e.get_high(),
        this.unsigned,
      );
    if (t.isZero()) return this.unsigned ? y : v;
    if (this.eq(T)) return t.isOdd() ? T : v;
    if (t.eq(T)) return this.isOdd() ? T : v;
    if (this.isNegative())
      return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
    if (t.isNegative()) return this.mul(t.neg()).neg();
    if (this.lt(_) && t.lt(_))
      return s(this.toNumber() * t.toNumber(), this.unsigned);
    var r = this.high >>> 16,
      i = this.high & 65535,
      a = this.low >>> 16,
      o = this.low & 65535,
      l = t.high >>> 16,
      u = t.high & 65535,
      f = t.low >>> 16,
      p = t.low & 65535,
      m = 0,
      h = 0,
      g = 0,
      b = 0;
    return (
      (b += o * p),
      (g += b >>> 16),
      (b &= 65535),
      (g += a * p),
      (h += g >>> 16),
      (g &= 65535),
      (g += o * f),
      (h += g >>> 16),
      (g &= 65535),
      (h += i * p),
      (m += h >>> 16),
      (h &= 65535),
      (h += a * f),
      (m += h >>> 16),
      (h &= 65535),
      (h += o * u),
      (m += h >>> 16),
      (h &= 65535),
      (m += r * p + i * f + a * u + o * l),
      (m &= 65535),
      c((g << 16) | b, (m << 16) | h, this.unsigned)
    );
  }),
  (E.mul = E.multiply),
  (E.divide = function (t) {
    if ((n(t) || (t = d(t)), t.isZero())) throw Error(`division by zero`);
    if (e)
      return !this.unsigned &&
        this.high === -2147483648 &&
        t.low === -1 &&
        t.high === -1
        ? this
        : c(
            (this.unsigned ? e.div_u : e.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            ),
            e.get_high(),
            this.unsigned,
          );
    if (this.isZero()) return this.unsigned ? y : v;
    var r, i, a;
    if (this.unsigned) {
      if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return y;
      if (t.gt(this.shru(1))) return x;
      a = y;
    } else {
      if (this.eq(T))
        return t.eq(b) || t.eq(S)
          ? T
          : t.eq(T)
            ? b
            : ((r = this.shr(1).div(t).shl(1)),
              r.eq(v)
                ? t.isNegative()
                  ? b
                  : S
                : ((i = this.sub(t.mul(r))), (a = r.add(i.div(t))), a));
      if (t.eq(T)) return this.unsigned ? y : v;
      if (this.isNegative())
        return t.isNegative()
          ? this.neg().div(t.neg())
          : this.neg().div(t).neg();
      if (t.isNegative()) return this.div(t.neg()).neg();
      a = v;
    }
    for (i = this; i.gte(t);) {
      r = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
      for (
        var o = Math.ceil(Math.log(r) / Math.LN2),
          u = o <= 48 ? 1 : l(2, o - 48),
          f = s(r),
          p = f.mul(t);
        p.isNegative() || p.gt(i);
      )
        ((r -= u), (f = s(r, this.unsigned)), (p = f.mul(t)));
      (f.isZero() && (f = b), (a = a.add(f)), (i = i.sub(p)));
    }
    return a;
  }),
  (E.div = E.divide),
  (E.modulo = function (t) {
    return (
      n(t) || (t = d(t)),
      e
        ? c(
            (this.unsigned ? e.rem_u : e.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            ),
            e.get_high(),
            this.unsigned,
          )
        : this.sub(this.div(t).mul(t))
    );
  }),
  (E.mod = E.modulo),
  (E.rem = E.modulo),
  (E.not = function () {
    return c(~this.low, ~this.high, this.unsigned);
  }),
  (E.countLeadingZeros = function () {
    return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
  }),
  (E.clz = E.countLeadingZeros),
  (E.countTrailingZeros = function () {
    return this.low ? r(this.low) : r(this.high) + 32;
  }),
  (E.ctz = E.countTrailingZeros),
  (E.and = function (e) {
    return (
      n(e) || (e = d(e)), c(this.low & e.low, this.high & e.high, this.unsigned)
    );
  }),
  (E.or = function (e) {
    return (
      n(e) || (e = d(e)), c(this.low | e.low, this.high | e.high, this.unsigned)
    );
  }),
  (E.xor = function (e) {
    return (
      n(e) || (e = d(e)), c(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    );
  }),
  (E.shiftLeft = function (e) {
    return (
      n(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? c(
              this.low << e,
              (this.high << e) | (this.low >>> (32 - e)),
              this.unsigned,
            )
          : c(0, this.low << (e - 32), this.unsigned)
    );
  }),
  (E.shl = E.shiftLeft),
  (E.shiftRight = function (e) {
    return (
      n(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? c(
              (this.low >>> e) | (this.high << (32 - e)),
              this.high >> e,
              this.unsigned,
            )
          : c(this.high >> (e - 32), this.high >= 0 ? 0 : -1, this.unsigned)
    );
  }),
  (E.shr = E.shiftRight),
  (E.shiftRightUnsigned = function (e) {
    return (
      n(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? c(
              (this.low >>> e) | (this.high << (32 - e)),
              this.high >>> e,
              this.unsigned,
            )
          : c(e === 32 ? this.high : this.high >>> (e - 32), 0, this.unsigned)
    );
  }),
  (E.shru = E.shiftRightUnsigned),
  (E.shr_u = E.shiftRightUnsigned),
  (E.rotateLeft = function (e) {
    var t;
    return (
      n(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e === 32
          ? c(this.high, this.low, this.unsigned)
          : e < 32
            ? ((t = 32 - e),
              c(
                (this.low << e) | (this.high >>> t),
                (this.high << e) | (this.low >>> t),
                this.unsigned,
              ))
            : ((e -= 32),
              (t = 32 - e),
              c(
                (this.high << e) | (this.low >>> t),
                (this.low << e) | (this.high >>> t),
                this.unsigned,
              ))
    );
  }),
  (E.rotl = E.rotateLeft),
  (E.rotateRight = function (e) {
    var t;
    return (
      n(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e === 32
          ? c(this.high, this.low, this.unsigned)
          : e < 32
            ? ((t = 32 - e),
              c(
                (this.high << t) | (this.low >>> e),
                (this.low << t) | (this.high >>> e),
                this.unsigned,
              ))
            : ((e -= 32),
              (t = 32 - e),
              c(
                (this.low << t) | (this.high >>> e),
                (this.high << t) | (this.low >>> e),
                this.unsigned,
              ))
    );
  }),
  (E.rotr = E.rotateRight),
  (E.toSigned = function () {
    return this.unsigned ? c(this.low, this.high, !1) : this;
  }),
  (E.toUnsigned = function () {
    return this.unsigned ? this : c(this.low, this.high, !0);
  }),
  (E.toBytes = function (e) {
    return e ? this.toBytesLE() : this.toBytesBE();
  }),
  (E.toBytesLE = function () {
    var e = this.high,
      t = this.low;
    return [
      t & 255,
      (t >>> 8) & 255,
      (t >>> 16) & 255,
      t >>> 24,
      e & 255,
      (e >>> 8) & 255,
      (e >>> 16) & 255,
      e >>> 24,
    ];
  }),
  (E.toBytesBE = function () {
    var e = this.high,
      t = this.low;
    return [
      e >>> 24,
      (e >>> 16) & 255,
      (e >>> 8) & 255,
      e & 255,
      t >>> 24,
      (t >>> 16) & 255,
      (t >>> 8) & 255,
      t & 255,
    ];
  }),
  (t.fromBytes = function (e, n, r) {
    return r ? t.fromBytesLE(e, n) : t.fromBytesBE(e, n);
  }),
  (t.fromBytesLE = function (e, n) {
    return new t(
      e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
      e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
      n,
    );
  }),
  (t.fromBytesBE = function (e, n) {
    return new t(
      (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
      (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
      n,
    );
  }),
  typeof BigInt == `function` &&
    ((t.fromBigInt = function (e, t) {
      return c(
        Number(BigInt.asIntN(32, e)),
        Number(BigInt.asIntN(32, e >> BigInt(32))),
        t,
      );
    }),
    (t.fromValue = function (e, n) {
      return typeof e == `bigint` ? t.fromBigInt(e, n) : d(e, n);
    }),
    (E.toBigInt = function () {
      var e = BigInt(this.low >>> 0);
      return (
        (BigInt(this.unsigned ? this.high >>> 0 : this.high) << BigInt(32)) | e
      );
    })));
var D = class e {
  m_ulSteamID = t.UZERO;
  constructor(n = 0, r, i, a) {
    n instanceof e
      ? (this.m_ulSteamID = n.m_ulSteamID)
      : typeof n == `string`
        ? (this.m_ulSteamID = t.fromString(n, !0))
        : r && i && a !== void 0
          ? this.SetFromComponents(n ?? 0, a, i, r)
          : (this.m_ulSteamID = n ? t.fromNumber(n, !0) : t.UZERO);
  }
  static InitFromAccountID(t, n) {
    return t ? new e(Number(t), n, 1, 1) : new e();
  }
  static InitFromClanID(t, n) {
    return new e(Number(t), n, 7, 0);
  }
  static ToAccountID(n) {
    return e.ExtractAccountID(t.fromString(n, !0));
  }
  static ExtractAccountID(e) {
    return e.getLowBitsUnsigned();
  }
  GetAccountID() {
    return e.ExtractAccountID(this.m_ulSteamID);
  }
  GetInstance() {
    return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
  }
  GetAccountType() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
  }
  GetUniverse() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
  }
  ConvertTo64BitString() {
    return this.m_ulSteamID.toString();
  }
  Render() {
    switch (this.GetAccountType()) {
      case 0:
        return `[I:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 7:
        return `[g:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 4:
        return (
          `[A:` +
          this.GetUniverse() +
          `:` +
          this.GetAccountID() +
          `:` +
          this.GetInstance() +
          `]`
        );
      case 3:
        return `[G:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 2:
        return (
          `[M:` +
          this.GetUniverse() +
          `:` +
          this.GetAccountID() +
          `:` +
          this.GetInstance() +
          `]`
        );
      case 5:
        return `[P:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 6:
        return `[C:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      default:
        return `[U:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
    }
  }
  static InitFromString(t) {
    let n = new e();
    try {
      let [e, r, i, a, o] =
          t.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        s = Number(i),
        c = Number(a),
        l = o ? Number(o) : 1;
      switch (r) {
        case `I`:
          n.SetFromComponents(c, l, 0, s);
          break;
        case `g`:
          n.SetFromComponents(c, 0, 7, s);
          break;
        case `A`:
          n.SetFromComponents(c, l, 4, s);
          break;
        case `G`:
          n.SetFromComponents(c, l, 3, s);
          break;
        case `M`:
          n.SetFromComponents(c, l, 2, s);
          break;
        case `P`:
          n.SetFromComponents(c, l, 5, s);
          break;
        case `C`:
          n.SetFromComponents(c, l, 6, s);
          break;
        case `U`:
          n.SetFromComponents(c, l, 1, s);
      }
    } catch {}
    return n;
  }
  BIsValid() {
    let e = this.GetAccountType();
    if (e <= 0 || e >= 11) return !1;
    let t = this.GetUniverse();
    if (t <= 0 || t >= 5) return !1;
    if (e == 1) {
      if (this.GetAccountID() == 0 || this.GetInstance() > 4) return !1;
    } else if (e == 7) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (e == 3 && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == 1;
  }
  BIsClanAccount() {
    return this.GetAccountType() == 7;
  }
  SetAccountID(e) {
    this.m_ulSteamID = new t(e, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      e,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      e,
      this.GetUniverse(),
    );
  }
  SetUniverse(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      e,
    );
  }
  SetFromComponents(e, n, r, i) {
    let a = ((i & 255) << 24) + ((r & 15) << 20) + (n & 1048575),
      o = e | 0;
    this.m_ulSteamID = new t(o, a, !0);
  }
};
export { t as n, D as t };
