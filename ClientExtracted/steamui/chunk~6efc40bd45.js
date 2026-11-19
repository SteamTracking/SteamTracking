/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  $a as t,
  F as n,
  at as r,
  eo as i,
  fi as a,
  rt as o,
  v as s,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
var c = null;
try {
  c = new WebAssembly.Instance(
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
function l(e, t, n) {
  ((this.low = e | 0), (this.high = t | 0), (this.unsigned = !!n));
}
(l.prototype.__isLong__,
  Object.defineProperty(l.prototype, "__isLong__", { value: !0 }));
function u(e) {
  return (e && e.__isLong__) === !0;
}
function d(e) {
  var t = Math.clz32(e & -e);
  return e ? 31 - t : t;
}
l.isLong = u;
var f = {},
  p = {};
function m(e, t) {
  var n, r, i;
  return t
    ? ((e >>>= 0),
      (i = 0 <= e && e < 256) && ((r = p[e]), r)
        ? r
        : ((n = g(e, 0, !0)), i && (p[e] = n), n))
    : ((e |= 0),
      (i = -128 <= e && e < 128) && ((r = f[e]), r)
        ? r
        : ((n = g(e, e < 0 ? -1 : 0, !1)), i && (f[e] = n), n));
}
l.fromInt = m;
function h(e, t) {
  if (isNaN(e)) return t ? D : E;
  if (t) {
    if (e < 0) return D;
    if (e >= C) return M;
  } else {
    if (e <= -w) return N;
    if (e + 1 >= w) return j;
  }
  return e < 0 ? h(-e, t).neg() : g((e % S) | 0, (e / S) | 0, t);
}
l.fromNumber = h;
function g(e, t, n) {
  return new l(e, t, n);
}
l.fromBits = g;
var _ = Math.pow;
function v(e, t, n) {
  if (e.length === 0) throw Error(`empty string`);
  if (
    (typeof t == `number` ? ((n = t), (t = !1)) : (t = !!t),
    e === `NaN` || e === `Infinity` || e === `+Infinity` || e === `-Infinity`)
  )
    return t ? D : E;
  if (((n ||= 10), n < 2 || 36 < n)) throw RangeError(`radix`);
  var r;
  if ((r = e.indexOf(`-`)) > 0) throw Error(`interior hyphen`);
  if (r === 0) return v(e.substring(1), t, n).neg();
  for (var i = h(_(n, 8)), a = E, o = 0; o < e.length; o += 8) {
    var s = Math.min(8, e.length - o),
      c = parseInt(e.substring(o, o + s), n);
    if (s < 8) {
      var l = h(_(n, s));
      a = a.mul(l).add(h(c));
    } else ((a = a.mul(i)), (a = a.add(h(c))));
  }
  return ((a.unsigned = t), a);
}
l.fromString = v;
function y(e, t) {
  return typeof e == `number`
    ? h(e, t)
    : typeof e == `string`
      ? v(e, t)
      : g(e.low, e.high, typeof t == `boolean` ? t : e.unsigned);
}
l.fromValue = y;
var b = 65536,
  x = 1 << 24,
  S = b * b,
  C = S * S,
  w = C / 2,
  T = m(x),
  E = m(0);
l.ZERO = E;
var D = m(0, !0);
l.UZERO = D;
var O = m(1);
l.ONE = O;
var k = m(1, !0);
l.UONE = k;
var A = m(-1);
l.NEG_ONE = A;
var j = g(-1, 2147483647, !1);
l.MAX_VALUE = j;
var M = g(-1, -1, !0);
l.MAX_UNSIGNED_VALUE = M;
var N = g(0, -2147483648, !1);
l.MIN_VALUE = N;
var P = l.prototype;
((P.toInt = function () {
  return this.unsigned ? this.low >>> 0 : this.low;
}),
  (P.toNumber = function () {
    return this.unsigned
      ? (this.high >>> 0) * S + (this.low >>> 0)
      : this.high * S + (this.low >>> 0);
  }),
  (P.toString = function (e) {
    if (((e ||= 10), e < 2 || 36 < e)) throw RangeError(`radix`);
    if (this.isZero()) return `0`;
    if (this.isNegative()) {
      if (this.eq(N)) {
        var t = h(e),
          n = this.div(t),
          r = n.mul(t).sub(this);
        return n.toString(e) + r.toInt().toString(e);
      }
      return `-` + this.neg().toString(e);
    }
    for (var i = h(_(e, 6), this.unsigned), a = this, o = ``; ;) {
      var s = a.div(i),
        c = (a.sub(s.mul(i)).toInt() >>> 0).toString(e);
      if (((a = s), a.isZero())) return c + o;
      for (; c.length < 6;) c = `0` + c;
      o = `` + c + o;
    }
  }),
  (P.getHighBits = function () {
    return this.high;
  }),
  (P.getHighBitsUnsigned = function () {
    return this.high >>> 0;
  }),
  (P.getLowBits = function () {
    return this.low;
  }),
  (P.getLowBitsUnsigned = function () {
    return this.low >>> 0;
  }),
  (P.getNumBitsAbs = function () {
    if (this.isNegative()) return this.eq(N) ? 64 : this.neg().getNumBitsAbs();
    for (
      var e = this.high == 0 ? this.low : this.high, t = 31;
      t > 0 && !(e & (1 << t));
      t--
    );
    return this.high == 0 ? t + 1 : t + 33;
  }),
  (P.isSafeInteger = function () {
    var e = this.high >> 21;
    return (
      !e ||
      (!this.unsigned && e === -1 && (this.low !== 0 || this.high !== -2097152))
    );
  }),
  (P.isZero = function () {
    return this.high === 0 && this.low === 0;
  }),
  (P.eqz = P.isZero),
  (P.isNegative = function () {
    return !this.unsigned && this.high < 0;
  }),
  (P.isPositive = function () {
    return this.unsigned || this.high >= 0;
  }),
  (P.isOdd = function () {
    return (this.low & 1) == 1;
  }),
  (P.isEven = function () {
    return !(this.low & 1);
  }),
  (P.equals = function (e) {
    return (
      u(e) || (e = y(e)),
      this.unsigned !== e.unsigned &&
      this.high >>> 31 == 1 &&
      e.high >>> 31 == 1
        ? !1
        : this.high === e.high && this.low === e.low
    );
  }),
  (P.eq = P.equals),
  (P.notEquals = function (e) {
    return !this.eq(e);
  }),
  (P.neq = P.notEquals),
  (P.ne = P.notEquals),
  (P.lessThan = function (e) {
    return this.comp(e) < 0;
  }),
  (P.lt = P.lessThan),
  (P.lessThanOrEqual = function (e) {
    return this.comp(e) <= 0;
  }),
  (P.lte = P.lessThanOrEqual),
  (P.le = P.lessThanOrEqual),
  (P.greaterThan = function (e) {
    return this.comp(e) > 0;
  }),
  (P.gt = P.greaterThan),
  (P.greaterThanOrEqual = function (e) {
    return this.comp(e) >= 0;
  }),
  (P.gte = P.greaterThanOrEqual),
  (P.ge = P.greaterThanOrEqual),
  (P.compare = function (e) {
    if ((u(e) || (e = y(e)), this.eq(e))) return 0;
    var t = this.isNegative(),
      n = e.isNegative();
    return t && !n
      ? -1
      : !t && n
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
  (P.comp = P.compare),
  (P.negate = function () {
    return !this.unsigned && this.eq(N) ? N : this.not().add(O);
  }),
  (P.neg = P.negate),
  (P.add = function (e) {
    u(e) || (e = y(e));
    var t = this.high >>> 16,
      n = this.high & 65535,
      r = this.low >>> 16,
      i = this.low & 65535,
      a = e.high >>> 16,
      o = e.high & 65535,
      s = e.low >>> 16,
      c = e.low & 65535,
      l = 0,
      d = 0,
      f = 0,
      p = 0;
    return (
      (p += i + c),
      (f += p >>> 16),
      (p &= 65535),
      (f += r + s),
      (d += f >>> 16),
      (f &= 65535),
      (d += n + o),
      (l += d >>> 16),
      (d &= 65535),
      (l += t + a),
      (l &= 65535),
      g((f << 16) | p, (l << 16) | d, this.unsigned)
    );
  }),
  (P.subtract = function (e) {
    return (u(e) || (e = y(e)), this.add(e.neg()));
  }),
  (P.sub = P.subtract),
  (P.multiply = function (e) {
    if (this.isZero()) return this;
    if ((u(e) || (e = y(e)), c))
      return g(
        c.mul(this.low, this.high, e.low, e.high),
        c.get_high(),
        this.unsigned,
      );
    if (e.isZero()) return this.unsigned ? D : E;
    if (this.eq(N)) return e.isOdd() ? N : E;
    if (e.eq(N)) return this.isOdd() ? N : E;
    if (this.isNegative())
      return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
    if (e.isNegative()) return this.mul(e.neg()).neg();
    if (this.lt(T) && e.lt(T))
      return h(this.toNumber() * e.toNumber(), this.unsigned);
    var t = this.high >>> 16,
      n = this.high & 65535,
      r = this.low >>> 16,
      i = this.low & 65535,
      a = e.high >>> 16,
      o = e.high & 65535,
      s = e.low >>> 16,
      l = e.low & 65535,
      d = 0,
      f = 0,
      p = 0,
      m = 0;
    return (
      (m += i * l),
      (p += m >>> 16),
      (m &= 65535),
      (p += r * l),
      (f += p >>> 16),
      (p &= 65535),
      (p += i * s),
      (f += p >>> 16),
      (p &= 65535),
      (f += n * l),
      (d += f >>> 16),
      (f &= 65535),
      (f += r * s),
      (d += f >>> 16),
      (f &= 65535),
      (f += i * o),
      (d += f >>> 16),
      (f &= 65535),
      (d += t * l + n * s + r * o + i * a),
      (d &= 65535),
      g((p << 16) | m, (d << 16) | f, this.unsigned)
    );
  }),
  (P.mul = P.multiply),
  (P.divide = function (e) {
    if ((u(e) || (e = y(e)), e.isZero())) throw Error(`division by zero`);
    if (c)
      return !this.unsigned &&
        this.high === -2147483648 &&
        e.low === -1 &&
        e.high === -1
        ? this
        : g(
            (this.unsigned ? c.div_u : c.div_s)(
              this.low,
              this.high,
              e.low,
              e.high,
            ),
            c.get_high(),
            this.unsigned,
          );
    if (this.isZero()) return this.unsigned ? D : E;
    var t, n, r;
    if (this.unsigned) {
      if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return D;
      if (e.gt(this.shru(1))) return k;
      r = D;
    } else {
      if (this.eq(N))
        return e.eq(O) || e.eq(A)
          ? N
          : e.eq(N)
            ? O
            : ((t = this.shr(1).div(e).shl(1)),
              t.eq(E)
                ? e.isNegative()
                  ? O
                  : A
                : ((n = this.sub(e.mul(t))), (r = t.add(n.div(e))), r));
      if (e.eq(N)) return this.unsigned ? D : E;
      if (this.isNegative())
        return e.isNegative()
          ? this.neg().div(e.neg())
          : this.neg().div(e).neg();
      if (e.isNegative()) return this.div(e.neg()).neg();
      r = E;
    }
    for (n = this; n.gte(e);) {
      t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
      for (
        var i = Math.ceil(Math.log(t) / Math.LN2),
          a = i <= 48 ? 1 : _(2, i - 48),
          o = h(t),
          s = o.mul(e);
        s.isNegative() || s.gt(n);
      )
        ((t -= a), (o = h(t, this.unsigned)), (s = o.mul(e)));
      (o.isZero() && (o = O), (r = r.add(o)), (n = n.sub(s)));
    }
    return r;
  }),
  (P.div = P.divide),
  (P.modulo = function (e) {
    return (
      u(e) || (e = y(e)),
      c
        ? g(
            (this.unsigned ? c.rem_u : c.rem_s)(
              this.low,
              this.high,
              e.low,
              e.high,
            ),
            c.get_high(),
            this.unsigned,
          )
        : this.sub(this.div(e).mul(e))
    );
  }),
  (P.mod = P.modulo),
  (P.rem = P.modulo),
  (P.not = function () {
    return g(~this.low, ~this.high, this.unsigned);
  }),
  (P.countLeadingZeros = function () {
    return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
  }),
  (P.clz = P.countLeadingZeros),
  (P.countTrailingZeros = function () {
    return this.low ? d(this.low) : d(this.high) + 32;
  }),
  (P.ctz = P.countTrailingZeros),
  (P.and = function (e) {
    return (
      u(e) || (e = y(e)), g(this.low & e.low, this.high & e.high, this.unsigned)
    );
  }),
  (P.or = function (e) {
    return (
      u(e) || (e = y(e)), g(this.low | e.low, this.high | e.high, this.unsigned)
    );
  }),
  (P.xor = function (e) {
    return (
      u(e) || (e = y(e)), g(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    );
  }),
  (P.shiftLeft = function (e) {
    return (
      u(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? g(
              this.low << e,
              (this.high << e) | (this.low >>> (32 - e)),
              this.unsigned,
            )
          : g(0, this.low << (e - 32), this.unsigned)
    );
  }),
  (P.shl = P.shiftLeft),
  (P.shiftRight = function (e) {
    return (
      u(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? g(
              (this.low >>> e) | (this.high << (32 - e)),
              this.high >> e,
              this.unsigned,
            )
          : g(this.high >> (e - 32), this.high >= 0 ? 0 : -1, this.unsigned)
    );
  }),
  (P.shr = P.shiftRight),
  (P.shiftRightUnsigned = function (e) {
    return (
      u(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? g(
              (this.low >>> e) | (this.high << (32 - e)),
              this.high >>> e,
              this.unsigned,
            )
          : g(e === 32 ? this.high : this.high >>> (e - 32), 0, this.unsigned)
    );
  }),
  (P.shru = P.shiftRightUnsigned),
  (P.shr_u = P.shiftRightUnsigned),
  (P.rotateLeft = function (e) {
    var t;
    return (
      u(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e === 32
          ? g(this.high, this.low, this.unsigned)
          : e < 32
            ? ((t = 32 - e),
              g(
                (this.low << e) | (this.high >>> t),
                (this.high << e) | (this.low >>> t),
                this.unsigned,
              ))
            : ((e -= 32),
              (t = 32 - e),
              g(
                (this.high << e) | (this.low >>> t),
                (this.low << e) | (this.high >>> t),
                this.unsigned,
              ))
    );
  }),
  (P.rotl = P.rotateLeft),
  (P.rotateRight = function (e) {
    var t;
    return (
      u(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e === 32
          ? g(this.high, this.low, this.unsigned)
          : e < 32
            ? ((t = 32 - e),
              g(
                (this.high << t) | (this.low >>> e),
                (this.low << t) | (this.high >>> e),
                this.unsigned,
              ))
            : ((e -= 32),
              (t = 32 - e),
              g(
                (this.low << t) | (this.high >>> e),
                (this.high << t) | (this.low >>> e),
                this.unsigned,
              ))
    );
  }),
  (P.rotr = P.rotateRight),
  (P.toSigned = function () {
    return this.unsigned ? g(this.low, this.high, !1) : this;
  }),
  (P.toUnsigned = function () {
    return this.unsigned ? this : g(this.low, this.high, !0);
  }),
  (P.toBytes = function (e) {
    return e ? this.toBytesLE() : this.toBytesBE();
  }),
  (P.toBytesLE = function () {
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
  (P.toBytesBE = function () {
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
  (l.fromBytes = function (e, t, n) {
    return n ? l.fromBytesLE(e, t) : l.fromBytesBE(e, t);
  }),
  (l.fromBytesLE = function (e, t) {
    return new l(
      e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
      e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
      t,
    );
  }),
  (l.fromBytesBE = function (e, t) {
    return new l(
      (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
      (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
      t,
    );
  }),
  typeof BigInt == `function` &&
    ((l.fromBigInt = function (e, t) {
      return g(
        Number(BigInt.asIntN(32, e)),
        Number(BigInt.asIntN(32, e >> BigInt(32))),
        t,
      );
    }),
    (l.fromValue = function (e, t) {
      return typeof e == `bigint` ? l.fromBigInt(e, t) : y(e, t);
    }),
    (P.toBigInt = function () {
      var e = BigInt(this.low >>> 0);
      return (
        (BigInt(this.unsigned ? this.high >>> 0 : this.high) << BigInt(32)) | e
      );
    })));
var F = e(i(), 1);
function I(e, t) {
  return r(
    (n) => {
      if (!n) return;
      let r = n.ownerDocument.defaultView;
      if (!r) return;
      let i = !0,
        a = t(r, (t) => {
          i && t.length && e(t[t.length - 1]);
        });
      return (
        a.observe(n),
        () => {
          ((i = !1), a.disconnect());
        }
      );
    },
    [e, t],
  );
}
function L(e) {
  return I(
    e,
    F.useCallback(
      (e, t) =>
        e.ResizeObserver
          ? new e.ResizeObserver(t)
          : (a(!1, `ResizeObserver is not available`),
            { observe: () => {}, unobserve: () => {}, disconnect: () => {} }),
      [],
    ),
  );
}
function R(e, t) {
  let n = t?.root,
    r = t?.rootMargin,
    i = t?.threshold;
  return I(
    e,
    F.useCallback(
      (e, t) =>
        new e.IntersectionObserver(t, { root: n, rootMargin: r, threshold: i }),
      [n, r, i],
    ),
  );
}
function z(e, t) {
  let n = F.useRef(void 0),
    r = F.useRef(e);
  return (
    (r.current = e),
    R(
      F.useCallback((e) => {
        let t = r.current;
        (!n.current && e.isIntersecting && t.onEnter?.(e),
          n.current && !e.isIntersecting && t.onLeave?.(e),
          t.onIntersectionChange?.(e),
          (n.current = e.isIntersecting));
      }, []),
      t,
    )
  );
}
function B() {
  return L(n());
}
function V(e, ...t) {
  let n = new e.ownerDocument.defaultView.ResizeObserver(...t);
  return (n.observe(e), n);
}
function H(e, ...t) {
  let n = new e.ownerDocument.defaultView.IntersectionObserver(...t);
  return (n.observe(e), n);
}
function U() {
  let [e, t] = (0, F.useState)(!1),
    n = R((0, F.useCallback)((e) => t(e.isIntersecting), [])),
    { style: r, ref: i } = W(),
    a = o(n, i),
    s = !r || r.visibility !== `hidden`;
  return { bVisible: e && s, ref: a };
}
function W() {
  let [e, t] = (0, F.useState)(null),
    [n, r] = (0, F.useState)(null);
  return (
    (0, F.useEffect)(() => {
      e && r(window.getComputedStyle(e));
    }, [e]),
    { style: n, ref: t }
  );
}
function G() {
  let [e, t] = F.useState(0),
    n = F.useCallback(
      (n) => {
        let r = n.target.clientHeight;
        r > e && t(r);
      },
      [e],
    );
  return { strMinHeightStyle: e + `px`, refForResizeObserver: L(n) };
}
var K = e(t());
function q(e, t, n) {
  return K.createPortal(
    F.createElement(F.Suspense, { fallback: null }, e),
    t,
    n,
  );
}
function J(e) {
  return r(
    (t) => {
      if (!t || !e) return;
      let n = s(t);
      return (
        n.forEach((t) => t.addEventListener(`scroll`, e)),
        () => n.forEach((t) => t.removeEventListener(`scroll`, e))
      );
    },
    [e],
  );
}
function Y(e) {
  let t = F.useRef(!0),
    n = F.useRef(void 0),
    r = F.useRef(void 0),
    i = F.useRef(e);
  i.current = e;
  let a = F.useRef(void 0),
    s = F.useCallback((e) => {
      a.current !== e && ((a.current = e), (t.current = !0));
    }, []),
    c = F.useCallback(() => {
      let e = a.current?.offsetWidth ?? 0,
        t = a.current?.offsetHeight ?? 0;
      (n.current !== e || r.current !== t) &&
        (i.current?.(e, t), (n.current = e), (r.current = t));
    }, []);
  F.useLayoutEffect(() => {
    t.current &&= (c(), !1);
  });
  let l = L(c);
  return o(s, l);
}
export {
  U as a,
  B as c,
  L as d,
  l as f,
  G as i,
  z as l,
  Y as n,
  H as o,
  J as r,
  V as s,
  q as t,
  R as u,
};
