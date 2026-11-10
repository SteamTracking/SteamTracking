/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./rolldown-runtime.js";
import { Lt as n, N as r, ft as i, it as a, tt as o } from "./libraries.js";
import { n as s, t as c } from "./throbber.js";
import {
  Ac as l,
  Fy as u,
  Gb as d,
  Hb as f,
  Jx as p,
  Nb as m,
  Nl as h,
  Sb as g,
  Ub as _,
  Wb as v,
  Yc as y,
  bx as b,
  ea as x,
  hS as S,
  hx as C,
  jy as w,
  ka as T,
  ky as E,
  ol as D,
  ua as ee,
  xS as te,
  yl as ne,
  zx as O,
} from "./main.js";
import {
  a as re,
  c as ie,
  i as k,
  l as ae,
  n as oe,
  o as se,
  r as ce,
  s as le,
  t as ue,
  u as de,
} from "./steammessages_twofactor_pb.js";
var A,
  fe = !0;
function j(e, t, n) {
  e != null &&
    (typeof e == `number`
      ? this.fromNumber(e, t, n)
      : t == null && typeof e != `string`
        ? this.fromString(e, 256)
        : this.fromString(e, t));
}
function M() {
  return new j(null);
}
function pe(e, t, n, r, i, a) {
  for (; --a >= 0;) {
    var o = t * this[e++] + n[r] + i;
    ((i = Math.floor(o / 67108864)), (n[r++] = o & 67108863));
  }
  return i;
}
function me(e, t, n, r, i, a) {
  for (var o = t & 32767, s = t >> 15; --a >= 0;) {
    var c = this[e] & 32767,
      l = this[e++] >> 15,
      u = s * c + l * o;
    ((c = o * c + ((u & 32767) << 15) + n[r] + (i & 1073741823)),
      (i = (c >>> 30) + (u >>> 15) + s * l + (i >>> 30)),
      (n[r++] = c & 1073741823));
  }
  return i;
}
function he(e, t, n, r, i, a) {
  for (var o = t & 16383, s = t >> 14; --a >= 0;) {
    var c = this[e] & 16383,
      l = this[e++] >> 14,
      u = s * c + l * o;
    ((c = o * c + ((u & 16383) << 14) + n[r] + i),
      (i = (c >> 28) + (u >> 14) + s * l),
      (n[r++] = c & 268435455));
  }
  return i;
}
(fe && navigator.appName == `Microsoft Internet Explorer`
  ? ((j.prototype.am = me), (A = 30))
  : fe && navigator.appName != `Netscape`
    ? ((j.prototype.am = pe), (A = 26))
    : ((j.prototype.am = he), (A = 28)),
  (j.prototype.DB = A),
  (j.prototype.DM = (1 << A) - 1),
  (j.prototype.DV = 1 << A));
var ge = 52;
((j.prototype.FV = 2 ** ge),
  (j.prototype.F1 = ge - A),
  (j.prototype.F2 = 2 * A - ge));
for (
  var _e = `0123456789abcdefghijklmnopqrstuvwxyz`, ve = [], N = 48, P = 0;
  P <= 9;
  ++P
)
  ve[N++] = P;
for (N = 97, P = 10; P < 36; ++P) ve[N++] = P;
for (N = 65, P = 10; P < 36; ++P) ve[N++] = P;
function ye(e) {
  return _e.charAt(e);
}
function be(e, t) {
  return ve[e.charCodeAt(t)] ?? -1;
}
function xe(e) {
  for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
  ((e.t = this.t), (e.s = this.s));
}
function Se(e) {
  ((this.t = 1),
    (this.s = e < 0 ? -1 : 0),
    e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0));
}
function F(e) {
  var t = M();
  return (t.fromInt(e), t);
}
function Ce(e, t) {
  var n;
  if (t == 16) n = 4;
  else if (t == 8) n = 3;
  else if (t == 256) n = 8;
  else if (t == 2) n = 1;
  else if (t == 32) n = 5;
  else if (t == 4) n = 2;
  else {
    this.fromRadix(e, t);
    return;
  }
  ((this.t = 0), (this.s = 0));
  for (var r = e.length, i = !1, a = 0; --r >= 0;) {
    var o = n == 8 ? e[r] & 255 : be(e, r);
    o < 0
      ? e.charAt(r) == `-` && (i = !0)
      : ((i = !1),
        a == 0
          ? (this[this.t++] = o)
          : a + n > this.DB
            ? ((this[this.t - 1] |= (o & ((1 << (this.DB - a)) - 1)) << a),
              (this[this.t++] = o >> (this.DB - a)))
            : (this[this.t - 1] |= o << a),
        (a += n),
        a >= this.DB && (a -= this.DB));
  }
  (n == 8 &&
    e[0] & 128 &&
    ((this.s = -1),
    a > 0 && (this[this.t - 1] |= ((1 << (this.DB - a)) - 1) << a)),
    this.clamp(),
    i && j.ZERO.subTo(this, this));
}
function we() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t;
}
function Te(e) {
  if (this.s < 0) return `-` + this.negate().toString(e);
  var t;
  if (e == 16) t = 4;
  else if (e == 8) t = 3;
  else if (e == 2) t = 1;
  else if (e == 32) t = 5;
  else if (e == 4) t = 2;
  else return this.toRadix(e);
  var n = (1 << t) - 1,
    r,
    i = !1,
    a = ``,
    o = this.t,
    s = this.DB - ((o * this.DB) % t);
  if (o-- > 0)
    for (
      s < this.DB && (r = this[o] >> s) > 0 && ((i = !0), (a = ye(r)));
      o >= 0;
    )
      (s < t
        ? ((r = (this[o] & ((1 << s) - 1)) << (t - s)),
          (r |= this[--o] >> (s += this.DB - t)))
        : ((r = (this[o] >> (s -= t)) & n), s <= 0 && ((s += this.DB), --o)),
        r > 0 && (i = !0),
        i && (a += ye(r)));
  return i ? a : `0`;
}
function Ee() {
  var e = M();
  return (j.ZERO.subTo(this, e), e);
}
function De() {
  return this.s < 0 ? this.negate() : this;
}
function Oe(e) {
  var t = this.s - e.s;
  if (t != 0) return t;
  var n = this.t;
  if (((t = n - e.t), t != 0)) return t;
  for (; --n >= 0;) if ((t = this[n] - e[n]) != 0) return t;
  return 0;
}
function ke(e) {
  var t = 1,
    n;
  return (
    (n = e >>> 16) != 0 && ((e = n), (t += 16)),
    (n = e >> 8) != 0 && ((e = n), (t += 8)),
    (n = e >> 4) != 0 && ((e = n), (t += 4)),
    (n = e >> 2) != 0 && ((e = n), (t += 2)),
    (n = e >> 1) != 0 && ((e = n), (t += 1)),
    t
  );
}
function Ae() {
  return this.t <= 0
    ? 0
    : this.DB * (this.t - 1) + ke(this[this.t - 1] ^ (this.s & this.DM));
}
function je(e, t) {
  for (var n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n) t[n] = 0;
  ((t.t = this.t + e), (t.s = this.s));
}
function Me(e, t) {
  for (var n = e; n < this.t; ++n) t[n - e] = this[n];
  ((t.t = Math.max(this.t - e, 0)), (t.s = this.s));
}
function Ne(e, t) {
  for (
    var n = e % this.DB,
      r = this.DB - n,
      i = (1 << r) - 1,
      a = Math.floor(e / this.DB),
      o = (this.s << n) & this.DM,
      s = this.t - 1;
    s >= 0;
    --s
  )
    ((t[s + a + 1] = (this[s] >> r) | o), (o = (this[s] & i) << n));
  for (s = a - 1; s >= 0; --s) t[s] = 0;
  ((t[a] = o), (t.t = this.t + a + 1), (t.s = this.s), t.clamp());
}
function Pe(e, t) {
  t.s = this.s;
  var n = Math.floor(e / this.DB);
  if (n >= this.t) t.t = 0;
  else {
    var r = e % this.DB,
      i = this.DB - r,
      a = (1 << r) - 1;
    t[0] = this[n] >> r;
    for (var o = n + 1; o < this.t; ++o)
      ((t[o - n - 1] |= (this[o] & a) << i), (t[o - n] = this[o] >> r));
    (r > 0 && (t[this.t - n - 1] |= (this.s & a) << i),
      (t.t = this.t - n),
      t.clamp());
  }
}
function Fe(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
    ((r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
  if (e.t < this.t) {
    for (r -= e.s; n < this.t;)
      ((r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += this.s;
  } else {
    for (r += this.s; n < e.t;)
      ((r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r -= e.s;
  }
  ((t.s = r < 0 ? -1 : 0),
    r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r),
    (t.t = n),
    t.clamp());
}
function Ie(e, t) {
  var n = this.abs(),
    r = e.abs(),
    i = n.t;
  for (t.t = i + r.t; --i >= 0;) t[i] = 0;
  for (i = 0; i < r.t; ++i) t[i + n.t] = n.am(0, r[i], t, i, 0, n.t);
  ((t.s = 0), t.clamp(), this.s != e.s && j.ZERO.subTo(t, t));
}
function Le(e) {
  for (var t = this.abs(), n = (e.t = 2 * t.t); --n >= 0;) e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var r = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >=
      t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
  }
  (e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
    (e.s = 0),
    e.clamp());
}
function Re(e, t, n) {
  var r = e.abs();
  if (!(r.t <= 0)) {
    var i = this.abs();
    if (i.t < r.t) (t?.fromInt(0), n != null && this.copyTo(n));
    else {
      n ??= M();
      var a = M(),
        o = this.s,
        s = e.s,
        c = this.DB - ke(r[r.t - 1]);
      c > 0 ? (r.lShiftTo(c, a), i.lShiftTo(c, n)) : (r.copyTo(a), i.copyTo(n));
      var l = a.t,
        u = a[l - 1];
      if (u != 0) {
        var d = u * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2 : 0),
          f = this.FV / d,
          p = (1 << this.F1) / d,
          m = 1 << this.F2,
          h = n.t,
          g = h - l,
          _ = t ?? M();
        for (
          a.dlShiftTo(g, _),
            n.compareTo(_) >= 0 && ((n[n.t++] = 1), n.subTo(_, n)),
            j.ONE.dlShiftTo(l, _),
            _.subTo(a, a);
          a.t < l;
        )
          a[a.t++] = 0;
        for (; --g >= 0;) {
          var v =
            n[--h] == u ? this.DM : Math.floor(n[h] * f + (n[h - 1] + m) * p);
          if ((n[h] += a.am(0, v, n, g, 0, l)) < v)
            for (a.dlShiftTo(g, _), n.subTo(_, n); n[h] < --v;) n.subTo(_, n);
        }
        (t != null && (n.drShiftTo(l, t), o != s && j.ZERO.subTo(t, t)),
          (n.t = l),
          n.clamp(),
          c > 0 && n.rShiftTo(c, n),
          o < 0 && j.ZERO.subTo(n, n));
      }
    }
  }
}
function ze(e) {
  var t = M();
  return (
    this.abs().divRemTo(e, null, t),
    this.s < 0 && t.compareTo(j.ZERO) > 0 && e.subTo(t, t),
    t
  );
}
function I(e) {
  this.m = e;
}
function Be(e) {
  return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
}
function Ve(e) {
  return e;
}
function He(e) {
  e.divRemTo(this.m, null, e);
}
function Ue(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
function We(e, t) {
  (e.squareTo(t), this.reduce(t));
}
((I.prototype.convert = Be),
  (I.prototype.revert = Ve),
  (I.prototype.reduce = He),
  (I.prototype.mulTo = Ue),
  (I.prototype.sqrTo = We));
function Ge() {
  if (this.t < 1) return 0;
  var e = this[0];
  if (!(e & 1)) return 0;
  var t = e & 3;
  return (
    (t = (t * (2 - (e & 15) * t)) & 15),
    (t = (t * (2 - (e & 255) * t)) & 255),
    (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
    (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
    t > 0 ? this.DV - t : -t
  );
}
function L(e) {
  ((this.m = e),
    (this.mp = e.invDigit()),
    (this.mpl = this.mp & 32767),
    (this.mph = this.mp >> 15),
    (this.um = (1 << (e.DB - 15)) - 1),
    (this.mt2 = 2 * e.t));
}
function Ke(e) {
  var t = M();
  return (
    e.abs().dlShiftTo(this.m.t, t),
    t.divRemTo(this.m, null, t),
    e.s < 0 && t.compareTo(j.ZERO) > 0 && this.m.subTo(t, t),
    t
  );
}
function qe(e) {
  var t = M();
  return (e.copyTo(t), this.reduce(t), t);
}
function Je(e) {
  for (; e.t <= this.mt2;) e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = e[t] & 32767,
      r =
        (n * this.mpl +
          (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
        e.DM;
    for (
      n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t);
      e[n] >= e.DV;
    )
      ((e[n] -= e.DV), e[++n]++);
  }
  (e.clamp(),
    e.drShiftTo(this.m.t, e),
    e.compareTo(this.m) >= 0 && e.subTo(this.m, e));
}
function Ye(e, t) {
  (e.squareTo(t), this.reduce(t));
}
function Xe(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
((L.prototype.convert = Ke),
  (L.prototype.revert = qe),
  (L.prototype.reduce = Je),
  (L.prototype.mulTo = Xe),
  (L.prototype.sqrTo = Ye));
function Ze() {
  return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}
function Qe(e, t) {
  if (e > 4294967295 || e < 1) return j.ONE;
  var n = M(),
    r = M(),
    i = t.convert(this),
    a = ke(e) - 1;
  for (i.copyTo(n); --a >= 0;)
    if ((t.sqrTo(n, r), (e & (1 << a)) > 0)) t.mulTo(r, i, n);
    else {
      var o = n;
      ((n = r), (r = o));
    }
  return t.revert(n);
}
function $e(e, t) {
  var n = e < 256 || t.isEven() ? new I(t) : new L(t);
  return this.exp(e, n);
}
((j.prototype.copyTo = xe),
  (j.prototype.fromInt = Se),
  (j.prototype.fromString = Ce),
  (j.prototype.clamp = we),
  (j.prototype.dlShiftTo = je),
  (j.prototype.drShiftTo = Me),
  (j.prototype.lShiftTo = Ne),
  (j.prototype.rShiftTo = Pe),
  (j.prototype.subTo = Fe),
  (j.prototype.multiplyTo = Ie),
  (j.prototype.squareTo = Le),
  (j.prototype.divRemTo = Re),
  (j.prototype.invDigit = Ge),
  (j.prototype.isEven = Ze),
  (j.prototype.exp = Qe),
  (j.prototype.toString = Te),
  (j.prototype.negate = Ee),
  (j.prototype.abs = De),
  (j.prototype.compareTo = Oe),
  (j.prototype.bitLength = Ae),
  (j.prototype.mod = ze),
  (j.prototype.modPowInt = $e),
  (j.ZERO = F(0)),
  (j.ONE = F(1)));
function et() {
  var e = M();
  return (this.copyTo(e), e);
}
function tt() {
  if (this.s < 0) {
    if (this.t == 1) return this[0] - this.DV;
    if (this.t == 0) return -1;
  } else if (this.t == 1) return this[0];
  else if (this.t == 0) return 0;
  return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
}
function nt() {
  return this.t == 0 ? this.s : (this[0] << 24) >> 24;
}
function rt() {
  return this.t == 0 ? this.s : (this[0] << 16) >> 16;
}
function it(e) {
  return Math.floor((Math.LN2 * this.DB) / Math.log(e));
}
function at() {
  return this.s < 0 ? -1 : this.t <= 0 || (this.t == 1 && this[0] <= 0) ? 0 : 1;
}
function ot(e) {
  if (((e ??= 10), this.signum() == 0 || e < 2 || e > 36)) return `0`;
  var t = this.chunkSize(e),
    n = e ** +t,
    r = F(n),
    i = M(),
    a = M(),
    o = ``;
  for (this.divRemTo(r, i, a); i.signum() > 0;)
    ((o = (n + a.intValue()).toString(e).substr(1) + o), i.divRemTo(r, i, a));
  return a.intValue().toString(e) + o;
}
function st(e, t) {
  (this.fromInt(0), (t ??= 10));
  for (
    var n = this.chunkSize(t), r = t ** +n, i = !1, a = 0, o = 0, s = 0;
    s < e.length;
    ++s
  ) {
    var c = be(e, s);
    c < 0
      ? e.charAt(s) == `-` && this.signum() == 0 && (i = !0)
      : ((o = t * o + c),
        ++a >= n &&
          (this.dMultiply(r), this.dAddOffset(o, 0), (a = 0), (o = 0)));
  }
  (a > 0 && (this.dMultiply(t ** +a), this.dAddOffset(o, 0)),
    i && j.ZERO.subTo(this, this));
}
function ct(e, t, n) {
  if (typeof t == `number`) {
    if (e < 2) this.fromInt(1);
    else
      for (
        this.fromNumber(e, n),
          this.testBit(e - 1) ||
            this.bitwiseTo(j.ONE.shiftLeft(e - 1), gt, this),
          this.isEven() && this.dAddOffset(1, 0);
        !this.isProbablePrime(t);
      )
        (this.dAddOffset(2, 0),
          this.bitLength() > e && this.subTo(j.ONE.shiftLeft(e - 1), this));
  } else {
    var r = [],
      i = e & 7;
    ((r.length = (e >> 3) + 1),
      t.nextBytes(r),
      i > 0 ? (r[0] &= (1 << i) - 1) : (r[0] = 0),
      this.fromString(r, 256));
  }
}
function lt() {
  var e = this.t,
    t = [];
  t[0] = this.s;
  var n = this.DB - ((e * this.DB) % 8),
    r,
    i = 0;
  if (e-- > 0)
    for (
      n < this.DB &&
      (r = this[e] >> n) != (this.s & this.DM) >> n &&
      (t[i++] = r | (this.s << (this.DB - n)));
      e >= 0;
    )
      (n < 8
        ? ((r = (this[e] & ((1 << n) - 1)) << (8 - n)),
          (r |= this[--e] >> (n += this.DB - 8)))
        : ((r = (this[e] >> (n -= 8)) & 255), n <= 0 && ((n += this.DB), --e)),
        r & 128 && (r |= -256),
        i == 0 && (this.s & 128) != (r & 128) && ++i,
        (i > 0 || r != this.s) && (t[i++] = r));
  return t;
}
function ut(e) {
  return this.compareTo(e) == 0;
}
function dt(e) {
  return this.compareTo(e) < 0 ? this : e;
}
function ft(e) {
  return this.compareTo(e) > 0 ? this : e;
}
function pt(e, t, n) {
  var r,
    i,
    a = Math.min(e.t, this.t);
  for (r = 0; r < a; ++r) n[r] = t(this[r], e[r]);
  if (e.t < this.t) {
    for (i = e.s & this.DM, r = a; r < this.t; ++r) n[r] = t(this[r], i);
    n.t = this.t;
  } else {
    for (i = this.s & this.DM, r = a; r < e.t; ++r) n[r] = t(i, e[r]);
    n.t = e.t;
  }
  ((n.s = t(this.s, e.s)), n.clamp());
}
function mt(e, t) {
  return e & t;
}
function ht(e) {
  var t = M();
  return (this.bitwiseTo(e, mt, t), t);
}
function gt(e, t) {
  return e | t;
}
function _t(e) {
  var t = M();
  return (this.bitwiseTo(e, gt, t), t);
}
function vt(e, t) {
  return e ^ t;
}
function yt(e) {
  var t = M();
  return (this.bitwiseTo(e, vt, t), t);
}
function bt(e, t) {
  return e & ~t;
}
function xt(e) {
  var t = M();
  return (this.bitwiseTo(e, bt, t), t);
}
function St() {
  for (var e = M(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
  return ((e.t = this.t), (e.s = ~this.s), e);
}
function Ct(e) {
  var t = M();
  return (e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t);
}
function wt(e) {
  var t = M();
  return (e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t);
}
function Tt(e) {
  if (e == 0) return -1;
  var t = 0;
  return (
    e & 65535 || ((e >>= 16), (t += 16)),
    e & 255 || ((e >>= 8), (t += 8)),
    e & 15 || ((e >>= 4), (t += 4)),
    e & 3 || ((e >>= 2), (t += 2)),
    e & 1 || ++t,
    t
  );
}
function Et() {
  for (var e = 0; e < this.t; ++e)
    if (this[e] != 0) return e * this.DB + Tt(this[e]);
  return this.s < 0 ? this.t * this.DB : -1;
}
function Dt(e) {
  for (var t = 0; e != 0;) ((e &= e - 1), ++t);
  return t;
}
function Ot() {
  for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
    e += Dt(this[n] ^ t);
  return e;
}
function kt(e) {
  var t = Math.floor(e / this.DB);
  return t >= this.t ? this.s != 0 : !!(this[t] & (1 << (e % this.DB)));
}
function At(e, t) {
  var n = j.ONE.shiftLeft(e);
  return (this.bitwiseTo(n, t, n), n);
}
function jt(e) {
  return this.changeBit(e, gt);
}
function Mt(e) {
  return this.changeBit(e, bt);
}
function Nt(e) {
  return this.changeBit(e, vt);
}
function Pt(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
    ((r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
  if (e.t < this.t) {
    for (r += e.s; n < this.t;)
      ((r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += this.s;
  } else {
    for (r += this.s; n < e.t;)
      ((r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += e.s;
  }
  ((t.s = r < 0 ? -1 : 0),
    r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
    (t.t = n),
    t.clamp());
}
function Ft(e) {
  var t = M();
  return (this.addTo(e, t), t);
}
function It(e) {
  var t = M();
  return (this.subTo(e, t), t);
}
function Lt(e) {
  var t = M();
  return (this.multiplyTo(e, t), t);
}
function Rt(e) {
  var t = M();
  return (this.divRemTo(e, t, null), t);
}
function zt(e) {
  var t = M();
  return (this.divRemTo(e, null, t), t);
}
function Bt(e) {
  var t = M(),
    n = M();
  return (this.divRemTo(e, t, n), [t, n]);
}
function Vt(e) {
  ((this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
    ++this.t,
    this.clamp());
}
function Ht(e, t) {
  for (; this.t <= t;) this[this.t++] = 0;
  for (this[t] += e; this[t] >= this.DV;)
    ((this[t] -= this.DV), ++t >= this.t && (this[this.t++] = 0), ++this[t]);
}
function R() {}
function Ut(e) {
  return e;
}
function Wt(e, t, n) {
  e.multiplyTo(t, n);
}
function Gt(e, t) {
  e.squareTo(t);
}
((R.prototype.convert = Ut),
  (R.prototype.revert = Ut),
  (R.prototype.mulTo = Wt),
  (R.prototype.sqrTo = Gt));
function Kt(e) {
  return this.exp(e, new R());
}
function qt(e, t, n) {
  var r = Math.min(this.t + e.t, t);
  for (n.s = 0, n.t = r; r > 0;) n[--r] = 0;
  for (var i = n.t - this.t; r < i; ++r)
    n[r + this.t] = this.am(0, e[r], n, r, 0, this.t);
  for (i = Math.min(e.t, t); r < i; ++r) this.am(0, e[r], n, r, 0, t - r);
  n.clamp();
}
function Jt(e, t, n) {
  --t;
  var r = (n.t = this.t + e.t - t);
  for (n.s = 0; --r >= 0;) n[r] = 0;
  for (r = Math.max(t - this.t, 0); r < e.t; ++r)
    n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
  (n.clamp(), n.drShiftTo(1, n));
}
function z(e) {
  ((this.r2 = M()),
    (this.q3 = M()),
    j.ONE.dlShiftTo(2 * e.t, this.r2),
    (this.mu = this.r2.divide(e)),
    (this.m = e));
}
function Yt(e) {
  if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
  if (e.compareTo(this.m) < 0) return e;
  var t = M();
  return (e.copyTo(t), this.reduce(t), t);
}
function Xt(e) {
  return e;
}
function Zt(e) {
  for (
    e.drShiftTo(this.m.t - 1, this.r2),
      e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    e.compareTo(this.r2) < 0;
  )
    e.dAddOffset(1, this.m.t + 1);
  for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e);
}
function Qt(e, t) {
  (e.squareTo(t), this.reduce(t));
}
function $t(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
((z.prototype.convert = Yt),
  (z.prototype.revert = Xt),
  (z.prototype.reduce = Zt),
  (z.prototype.mulTo = $t),
  (z.prototype.sqrTo = Qt));
function en(e, t) {
  var n = e.bitLength(),
    r,
    i = F(1),
    a;
  if (n <= 0) return i;
  ((r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
    (a = n < 8 ? new I(t) : t.isEven() ? new z(t) : new L(t)));
  var o = [],
    s = 3,
    c = r - 1,
    l = (1 << r) - 1;
  if (((o[1] = a.convert(this)), r > 1)) {
    var u = M();
    for (a.sqrTo(o[1], u); s <= l;)
      ((o[s] = M()), a.mulTo(u, o[s - 2], o[s]), (s += 2));
  }
  var d = e.t - 1,
    f,
    p = !0,
    m = M(),
    h;
  for (n = ke(e[d]) - 1; d >= 0;) {
    for (
      n >= c
        ? (f = (e[d] >> (n - c)) & l)
        : ((f = (e[d] & ((1 << (n + 1)) - 1)) << (c - n)),
          d > 0 && (f |= e[d - 1] >> (this.DB + n - c))),
        s = r;
      !(f & 1);
    )
      ((f >>= 1), --s);
    if (((n -= s) < 0 && ((n += this.DB), --d), p)) (o[f].copyTo(i), (p = !1));
    else {
      for (; s > 1;) (a.sqrTo(i, m), a.sqrTo(m, i), (s -= 2));
      (s > 0 ? a.sqrTo(i, m) : ((h = i), (i = m), (m = h)),
        a.mulTo(m, o[f], i));
    }
    for (; d >= 0 && !(e[d] & (1 << n));)
      (a.sqrTo(i, m),
        (h = i),
        (i = m),
        (m = h),
        --n < 0 && ((n = this.DB - 1), --d));
  }
  return a.revert(i);
}
function tn(e) {
  var t = this.s < 0 ? this.negate() : this.clone(),
    n = e.s < 0 ? e.negate() : e.clone();
  if (t.compareTo(n) < 0) {
    var r = t;
    ((t = n), (n = r));
  }
  var i = t.getLowestSetBit(),
    a = n.getLowestSetBit();
  if (a < 0) return t;
  for (
    i < a && (a = i), a > 0 && (t.rShiftTo(a, t), n.rShiftTo(a, n));
    t.signum() > 0;
  )
    ((i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
      (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
      t.compareTo(n) >= 0
        ? (t.subTo(n, t), t.rShiftTo(1, t))
        : (n.subTo(t, n), n.rShiftTo(1, n)));
  return (a > 0 && n.lShiftTo(a, n), n);
}
function nn(e) {
  if (e <= 0) return 0;
  var t = this.DV % e,
    n = this.s < 0 ? e - 1 : 0;
  if (this.t > 0) {
    if (t == 0) n = this[0] % e;
    else for (var r = this.t - 1; r >= 0; --r) n = (t * n + this[r]) % e;
  }
  return n;
}
function rn(e) {
  var t = e.isEven();
  if ((this.isEven() && t) || e.signum() == 0) return j.ZERO;
  for (
    var n = e.clone(), r = this.clone(), i = F(1), a = F(0), o = F(0), s = F(1);
    n.signum() != 0;
  ) {
    for (; n.isEven();)
      (n.rShiftTo(1, n),
        t
          ? ((i.isEven() && a.isEven()) || (i.addTo(this, i), a.subTo(e, a)),
            i.rShiftTo(1, i))
          : a.isEven() || a.subTo(e, a),
        a.rShiftTo(1, a));
    for (; r.isEven();)
      (r.rShiftTo(1, r),
        t
          ? ((o.isEven() && s.isEven()) || (o.addTo(this, o), s.subTo(e, s)),
            o.rShiftTo(1, o))
          : s.isEven() || s.subTo(e, s),
        s.rShiftTo(1, s));
    n.compareTo(r) >= 0
      ? (n.subTo(r, n), t && i.subTo(o, i), a.subTo(s, a))
      : (r.subTo(n, r), t && o.subTo(i, o), s.subTo(a, s));
  }
  if (r.compareTo(j.ONE) != 0) return j.ZERO;
  if (s.compareTo(e) >= 0) return s.subtract(e);
  if (s.signum() < 0) s.addTo(e, s);
  else return s;
  return s.signum() < 0 ? s.add(e) : s;
}
var B = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509,
  ],
  an = (1 << 26) / B[B.length - 1];
function on(e) {
  var t,
    n = this.abs();
  if (n.t == 1 && n[0] <= B[B.length - 1]) {
    for (t = 0; t < B.length; ++t) if (n[0] == B[t]) return !0;
    return !1;
  }
  if (n.isEven()) return !1;
  for (t = 1; t < B.length;) {
    for (var r = B[t], i = t + 1; i < B.length && r < an;) r *= B[i++];
    for (r = n.modInt(r); t < i;) if (r % B[t++] == 0) return !1;
  }
  return n.millerRabin(e);
}
function sn(e) {
  var t = this.subtract(j.ONE),
    n = t.getLowestSetBit();
  if (n <= 0) return !1;
  var r = t.shiftRight(n);
  ((e = (e + 1) >> 1), e > B.length && (e = B.length));
  for (var i = M(), a = 0; a < e; ++a) {
    i.fromInt(B[a]);
    var o = i.modPow(r, this);
    if (o.compareTo(j.ONE) != 0 && o.compareTo(t) != 0) {
      for (var s = 1; s++ < n && o.compareTo(t) != 0;)
        if (((o = o.modPowInt(2, this)), o.compareTo(j.ONE) == 0)) return !1;
      if (o.compareTo(t) != 0) return !1;
    }
  }
  return !0;
}
((j.prototype.chunkSize = it),
  (j.prototype.toRadix = ot),
  (j.prototype.fromRadix = st),
  (j.prototype.fromNumber = ct),
  (j.prototype.bitwiseTo = pt),
  (j.prototype.changeBit = At),
  (j.prototype.addTo = Pt),
  (j.prototype.dMultiply = Vt),
  (j.prototype.dAddOffset = Ht),
  (j.prototype.multiplyLowerTo = qt),
  (j.prototype.multiplyUpperTo = Jt),
  (j.prototype.modInt = nn),
  (j.prototype.millerRabin = sn),
  (j.prototype.clone = et),
  (j.prototype.intValue = tt),
  (j.prototype.byteValue = nt),
  (j.prototype.shortValue = rt),
  (j.prototype.signum = at),
  (j.prototype.toByteArray = lt),
  (j.prototype.equals = ut),
  (j.prototype.min = dt),
  (j.prototype.max = ft),
  (j.prototype.and = ht),
  (j.prototype.or = _t),
  (j.prototype.xor = yt),
  (j.prototype.andNot = xt),
  (j.prototype.not = St),
  (j.prototype.shiftLeft = Ct),
  (j.prototype.shiftRight = wt),
  (j.prototype.getLowestSetBit = Et),
  (j.prototype.bitCount = Ot),
  (j.prototype.testBit = kt),
  (j.prototype.setBit = jt),
  (j.prototype.clearBit = Mt),
  (j.prototype.flipBit = Nt),
  (j.prototype.add = Ft),
  (j.prototype.subtract = It),
  (j.prototype.multiply = Lt),
  (j.prototype.divide = Rt),
  (j.prototype.remainder = zt),
  (j.prototype.divideAndRemainder = Bt),
  (j.prototype.modPow = en),
  (j.prototype.modInverse = rn),
  (j.prototype.pow = Kt),
  (j.prototype.gcd = tn),
  (j.prototype.isProbablePrime = on));
var cn = function (e, t) {
    ((this.modulus = new j(e, 16)), (this.encryptionExponent = new j(t, 16)));
  },
  ln = {
    base64: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    encode: function (e) {
      if (!e) return !1;
      var t = ``,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l = 0;
      do
        ((n = e.charCodeAt(l++)),
          (r = e.charCodeAt(l++)),
          (i = e.charCodeAt(l++)),
          (a = n >> 2),
          (o = ((n & 3) << 4) | (r >> 4)),
          (s = ((r & 15) << 2) | (i >> 6)),
          (c = i & 63),
          isNaN(r) ? (s = c = 64) : isNaN(i) && (c = 64),
          (t +=
            this.base64.charAt(a) +
            this.base64.charAt(o) +
            this.base64.charAt(s) +
            this.base64.charAt(c)));
      while (l < e.length);
      return t;
    },
    decode: function (e) {
      if (!e) return !1;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ``);
      var t = ``,
        n,
        r,
        i,
        a,
        o = 0;
      do
        ((n = this.base64.indexOf(e.charAt(o++))),
          (r = this.base64.indexOf(e.charAt(o++))),
          (i = this.base64.indexOf(e.charAt(o++))),
          (a = this.base64.indexOf(e.charAt(o++))),
          (t += String.fromCharCode((n << 2) | (r >> 4))),
          i != 64 && (t += String.fromCharCode(((r & 15) << 4) | (i >> 2))),
          a != 64 && (t += String.fromCharCode(((i & 3) << 6) | a)));
      while (o < e.length);
      return t;
    },
  },
  un = {
    hex: `0123456789abcdef`,
    encode: function (e) {
      if (!e) return !1;
      var t = ``,
        n,
        r = 0;
      do
        ((n = e.charCodeAt(r++)),
          (t += this.hex.charAt((n >> 4) & 15) + this.hex.charAt(n & 15)));
      while (r < e.length);
      return t;
    },
    decode: function (e) {
      if (!e) return !1;
      e = e.replace(/[^0-9abcdef]/g, ``);
      var t = ``,
        n = 0;
      do
        t += String.fromCharCode(
          ((this.hex.indexOf(e.charAt(n++)) << 4) & 240) |
            (this.hex.indexOf(e.charAt(n++)) & 15),
        );
      while (n < e.length);
      return t;
    },
  },
  dn = {
    getPublicKey: function (e, t) {
      return new cn(e, t);
    },
    encrypt: function (e, t) {
      return !t ||
        ((e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)), !e) ||
        ((e = e.modPowInt(t.encryptionExponent, t.modulus)), !e)
        ? !1
        : ((e = e.toString(16)),
          (e.length & 1) == 1 && (e = `0` + e),
          ln.encode(un.decode(e)));
    },
    pkcs1pad2: function (e, t) {
      if (t < e.length + 11) return null;
      for (var n = [], r = e.length - 1; r >= 0 && t > 0;)
        n[--t] = e.charCodeAt(r--);
      for (n[--t] = 0; t > 2;) n[--t] = Math.floor(Math.random() * 254) + 1;
      return ((n[--t] = 2), (n[--t] = 0), new j(n));
    },
  },
  fn = new ne(`Login`),
  pn = fn.Info;
fn.Debug;
var mn = fn.Warning,
  V = fn.Error;
function hn(e, t) {
  let n = dn.getPublicKey(t.publickey_mod, t.publickey_exp),
    r = dn.encrypt(e, n);
  return r === !1 ? null : r;
}
var H = e(o(), 1),
  gn = e(a(), 1),
  U = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Generic = 1)] = `Generic`),
      (e[(e.Expired = 2)] = `Expired`),
      (e[(e.Network = 3)] = `Network`),
      (e[(e.MoveAuthenticator = 4)] = `MoveAuthenticator`),
      (e[(e.RateLimitExceeded = 5)] = `RateLimitExceeded`),
      (e[(e.AnonymousLogin = 6)] = `AnonymousLogin`),
      e
    );
  })({});
function _n(e) {
  let {
    shared_secret: t,
    identity_secret: n,
    secret_1: r,
    status: i,
    uri: a,
    server_time: o,
    ...s
  } = e;
  return {
    shared_secret: gn.fromByteArray(t),
    identity_secret: gn.fromByteArray(n),
    secret_1: gn.fromByteArray(r),
    ...s,
  };
}
var vn = (function (e) {
  return (
    (e[(e.k_Success = 0)] = `k_Success`),
    (e[(e.k_PrimaryDomainFail = 1)] = `k_PrimaryDomainFail`),
    (e[(e.k_SecondaryDomainFail = 2)] = `k_SecondaryDomainFail`),
    e
  );
})({});
function yn(e, t) {
  let n = Object.keys(e);
  return (
    n.length === Object.keys(t).length && n.every((n) => Object.is(e[n], t[n]))
  );
}
var W = class {
  m_setListeners = new Set();
  m_snapshot;
  m_bNotifyPending = !1;
  m_transport;
  m_strClientID;
  m_msPollInterval;
  m_activeTimerID;
  m_rgRequestID;
  m_strTokenToRevoke;
  m_strChallengeURLValue = void 0;
  get m_strChallengeURL() {
    return this.m_strChallengeURLValue;
  }
  set m_strChallengeURL(e) {
    ((this.m_strChallengeURLValue = e), this.NotifyChanged());
  }
  m_onShowAgreement;
  m_bRemoteInteractionValue = !1;
  get m_bRemoteInteraction() {
    return this.m_bRemoteInteractionValue;
  }
  set m_bRemoteInteraction(e) {
    ((this.m_bRemoteInteractionValue = e), this.NotifyChanged());
  }
  m_onCompleteCallback;
  m_eFailureStateValue = 0;
  get m_eFailureState() {
    return this.m_eFailureStateValue;
  }
  set m_eFailureState(e) {
    ((this.m_eFailureStateValue = e), this.NotifyChanged());
  }
  m_strExtendedErrorMessageValue = ``;
  get m_strExtendedErrorMessage() {
    return this.m_strExtendedErrorMessageValue;
  }
  set m_strExtendedErrorMessage(e) {
    ((this.m_strExtendedErrorMessageValue = e), this.NotifyChanged());
  }
  m_onDeviceDetailsCallback;
  constructor(e, t, n, r) {
    ((this.m_transport = e),
      (this.m_onCompleteCallback = t),
      (this.m_onDeviceDetailsCallback = n),
      (this.m_onShowAgreement = r));
  }
  Subscribe(e) {
    return (
      this.m_setListeners.add(e),
      () => {
        this.m_setListeners.delete(e);
      }
    );
  }
  GetSnapshot() {
    let e = this.BuildSnapshot();
    return (
      (this.m_snapshot && yn(this.m_snapshot, e)) || (this.m_snapshot = e),
      this.m_snapshot
    );
  }
  NotifyChanged() {
    this.m_bNotifyPending ||
      ((this.m_bNotifyPending = !0),
      queueMicrotask(() => {
        this.m_bNotifyPending = !1;
        for (let e of this.m_setListeners) e();
      }));
  }
  StartPolling(e = !0) {
    (this.m_activeTimerID != null && this.StopPolling(),
      e
        ? this.PollForUpdate()
        : (this.m_activeTimerID = window.setTimeout(
            this.PollForUpdate,
            this.m_msPollInterval,
          )));
  }
  StopPolling() {
    (window.clearTimeout(this.m_activeTimerID),
      (this.m_activeTimerID = void 0));
  }
  async PollForUpdate() {
    try {
      let e = C.Init(ae);
      (e.SetEMsg(b),
        e.Body().set_client_id(this.m_strClientID),
        e.Body().set_request_id(this.m_rgRequestID),
        this.m_strTokenToRevoke &&
          e.Body().set_token_to_revoke(this.m_strTokenToRevoke));
      let t = await k.PollAuthSessionStatus(this.m_transport, e),
        n = t.GetEResult();
      if (n !== 1) {
        if (n === 2) {
          let e = t.Hdr().transport_error();
          if (
            (V(
              `Failed to poll auth session. Result ${n}. Transport Error: ${e}`,
            ),
            e === 2 || e === 3)
          )
            return (this.m_transport.MakeReady(), this.StartPolling(!1), 1);
        }
        if (n === 9 || n === 27) this.m_eFailureState = 2;
        else if (n === 84) this.m_eFailureState = 5;
        else if (n == 118) {
          let e = t.Body().agreement_session_url();
          if (
            (p(!!e, `Missing agreement session URL for result`, n),
            this.m_onShowAgreement)
          )
            this.m_onShowAgreement(e);
          else {
            let t = location.href;
            window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
          }
          return (this.m_onCompleteCallback({ bSuccess: !1 }), n);
        } else
          (V(`Failed to poll auth session. Result: ${n}`),
            (this.m_eFailureState = 1));
        return (this.m_onCompleteCallback({ bSuccess: !1 }), n);
      }
      let {
        new_challenge_url: r,
        new_client_id: i,
        refresh_token: a,
        access_token: o,
        account_name: s,
        had_remote_interaction: c,
        new_guard_data: l,
      } = t.Body().toObject();
      return (
        (this.m_bRemoteInteraction = !!c),
        a
          ? (p(
              !!o && !!s,
              `Missing access token or account name with refresh token`,
            ),
            this.m_onCompleteCallback({
              bSuccess: !0,
              strRefreshToken: a,
              strAccessToken: o,
              strAccountName: s,
              strNewGuardData: l,
            }),
            n)
          : (r && (this.m_strChallengeURL = r),
            i && (this.m_strClientID = i),
            this.StartPolling(!1),
            n)
      );
    } catch (e) {
      return (
        V(`Failed to poll auth session. ${e}`),
        (this.m_eFailureState = 1),
        this.m_onCompleteCallback({ bSuccess: !1 }),
        2
      );
    }
  }
  SetTokenToRevoke(e) {
    this.m_strTokenToRevoke = e;
  }
  GetFailureState() {
    return this.m_eFailureState;
  }
  GetExtendedErrorMessage() {
    return this.m_strExtendedErrorMessage;
  }
  BHadRemoteInteraction() {
    return this.m_bRemoteInteraction;
  }
  async GetDeviceDetails() {
    let e = await this.m_onDeviceDetailsCallback();
    return le.fromObject(e);
  }
};
(m([O], W.prototype, `Subscribe`, null),
  m([O], W.prototype, `GetSnapshot`, null),
  m([O], W.prototype, `PollForUpdate`, null),
  m([O], W.prototype, `SetTokenToRevoke`, null));
function bn(e) {
  let t = new FormData();
  (t.append(`nonce`, e), t.append(`sessionid`, w(u) ?? ``));
  let n = new URL(location.href),
    r = new URLSearchParams(n.search);
  (r.has(`need_password`) &&
    (r.delete(`need_password`), (n.search = r.toString())),
    t.append(`redir`, n.toString()));
  let i = `${_.LOGIN_BASE_URL}jwt/finalizelogin`;
  return H.default.post(i, t, { withCredentials: !0 }).then(
    (e) => {
      let { data: t } = e;
      if (
        !t ||
        !t.transfer_info ||
        !t.steamID ||
        !Array.isArray(t.transfer_info)
      )
        return (V(`Result of finalizelogin does not match expectations!`), 1);
      let { transfer_info: n, steamID: r, primary_domain: i } = t;
      return Promise.all(
        n.map(({ url: e, params: t }) => Sn(e, { ...t, steamID: r })),
      ).then(
        (e) => xn(e, i),
        () => 2,
      );
    },
    () => (V(`Failed to finalize login. Initial call failed.`), 1),
  );
}
function xn(e, t) {
  let n = 0;
  return (
    e.forEach((e) => {
      e.bSuccess ||
        (t && e.domain.toLowerCase() === t.toLowerCase()
          ? (n = 1)
          : n == 0 && (n = 2));
    }),
    n
  );
}
async function Sn(e, t) {
  let n = new URL(e),
    r = !0;
  try {
    let i = new FormData();
    Object.keys(t).forEach((e) => i.append(e, t[e]));
    let a = await H.default.post(e, i, { withCredentials: !0, timeout: 1e4 });
    a.status === 200
      ? a.data.result !== 1 &&
        (V(`Transfer login to ${n.host} failed with result: ${a.data.result}`),
        (r = !1))
      : (V(`Transfer login to ${n.host} failed with status code: ${a.status}`),
        (r = !1));
  } catch (e) {
    (V(`Transfer login to ${n.host} failed: "${e}"`), (r = !1));
  }
  return { bSuccess: r, domain: n.host };
}
var G = e(n(), 1),
  K = class extends W {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(e) {
      ((this.m_eStatusValue = e), this.NotifyChanged());
    }
    m_steamid;
    m_strAccountName;
    m_strConfirmationAssociatedMessage = ``;
    m_bUsingCodeOverride = !1;
    m_strWeakAuthToken = ``;
    m_weakAuthWebInterface;
    m_onGetMachineAuth;
    m_replacementAuthenticator;
    m_strErrorReferenceValue = ``;
    get m_strErrorReference() {
      return this.m_strErrorReferenceValue;
    }
    set m_strErrorReference(e) {
      ((this.m_strErrorReferenceValue = e), this.NotifyChanged());
    }
    m_onLoginComplete;
    constructor(e) {
      (super(
        e.transport,
        (e) => this.onAuthComplete(e),
        e.onDeviceDetails,
        e.onShowAgreement,
      ),
        (this.m_onLoginComplete = e.onComplete),
        (this.m_onGetMachineAuth = e.onGetMachineAuth));
    }
    BuildSnapshot() {
      return {
        strAccountName: this.GetAccountName(),
        steamid: this.GetSteamID(),
        eFailureState: this.GetFailureState(),
        strExtendedErrorMessage: this.GetExtendedErrorMessage(),
        strErrorReference: this.GetErrorReference(),
        strConfirmationAssociatedMessage:
          this.GetConfirmationAssociatedMessage(),
        eStatus: this.GetStatus(),
        bCanGoBack: this.BCanGoBack(),
        replacementAuthenticator: this.GetReplacementAuthenticator(),
      };
    }
    async Start(e, t, n) {
      if (this.m_eStatus !== 0 && this.m_eStatus !== 2)
        return (
          V(
            `Cannot start an already started auth session. Create a new session instance.`,
          ),
          29
        );
      let r = e.replace(/[^\x00-\x7F]/g, ``),
        i = t.replace(/[^\x00-\x7F]/g, ``).slice(0, 64);
      if (!r.length || !i.length) return 8;
      if (
        ((this.m_eStatus = 1),
        (this.m_bUsingCodeOverride = !1),
        e == `anonymous`)
      )
        return (this.SetFailureState(U.AnonymousLogin, q.EResult(12)), 12);
      try {
        let t = await Cn(this.m_transport, r);
        if (!t)
          return (
            V(`Cannot start auth session without a valid RSA key`),
            this.SetFailureState(U.Network, q.EResult(20)),
            20
          );
        let a = hn(i, t),
          o = C.Init(re);
        (o.SetEMsg(b),
          o.Body().set_account_name(r),
          o.Body().set_encrypted_password(a ?? void 0),
          o.Body().set_encryption_timestamp(t.timestamp),
          o.Body().set_remember_login(!!n),
          o.Body().set_persistence(+!!n));
        let s = d();
        s && o.Body().set_website_id(s.WEBSITE_ID);
        try {
          o.Body().set_device_details(await this.GetDeviceDetails());
        } catch (e) {
          (V(`Failed to GetDeviceDetails`), V(e));
        }
        if (
          (o.Body().set_language(S(_.LANGUAGE)),
          this.m_onGetMachineAuth != null)
        ) {
          let e = await this.m_onGetMachineAuth(r);
          e.eresult == 1 && o.Body().set_guard_data(e.data);
        }
        await this.m_transport.MakeReady();
        let c = await k.BeginAuthSessionViaCredentials(this.m_transport, o);
        c.DEBUG_LogToConsole();
        let l = c.GetEResult(),
          u = c.Hdr().transport_error();
        if (l !== 1)
          switch (l) {
            case 5:
              return ((this.m_eStatus = 2), l);
            case 20:
            case 3:
              return (this.SetFailureState(U.Network, q.EResult(20)), l);
            case 84:
              return (
                this.SetFailureState(U.RateLimitExceeded, q.EResult(l)), l
              );
            case 118: {
              let e = c.Body().agreement_session_url();
              if (
                (p(!!e, `Missing agreement session URL for result`, l),
                this.m_onShowAgreement)
              )
                this.m_onShowAgreement(e);
              else {
                let t = location.href;
                window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
              }
              return (
                this.m_onCompleteCallback({ bSuccess: !1 }),
                (this.m_eStatus = 0),
                l
              );
            }
            default:
              return (
                V(`Failed to start auth session. Result: ${l} Transport: ${u}`),
                this.SetFailureState(
                  U.Generic,
                  q.EResult(l),
                  c.Body().extended_error_message(),
                ),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l
              );
          }
        this.m_strAccountName = e;
        let {
          client_id: f,
          request_id: m,
          interval: h,
          allowed_confirmations: g = [],
          steamid: v,
          weak_token: y,
        } = c.Body().toObject();
        if (
          (p(
            h !== void 0 && !!f && !!v,
            `Missing poll interval, client ID, or steamid for result`,
            l,
          ),
          (this.m_msPollInterval = h * 1e3),
          (this.m_strClientID = f),
          (this.m_rgRequestID = m),
          (this.m_steamid = v),
          (this.m_strWeakAuthToken = y ?? ``),
          g.find(({ confirmation_type: e }) => e === 6))
        ) {
          let e = new FormData();
          (e.append(`clientid`, f), e.append(`steamid`, v));
          let t = `${_.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
          try {
            if (
              (
                await H.default.post(t, e, {
                  headers: { "Content-Type": `multipart/form-data` },
                  withCredentials: !0,
                })
              ).data.result == 1
            )
              return ((this.m_eStatus = 4), this.StartPolling(!0), 1);
          } catch (e) {
            if (
              (pn(`checkdevice ajax to ${t} failed: ${e.message}`),
              e instanceof H.AxiosError)
            ) {
              let t = e;
              return t.response
                ? (this.SetFailureState(
                    U.Network,
                    q.AjaxFailureWithCode(t.response.status),
                  ),
                  20)
                : (this.SetFailureState(U.Network, q.AjaxFailureNoCode()), 20);
            }
            return (this.SetFailureState(U.Network, q.EResult(79)), 79);
          }
        }
        let x = Tn(
            g.map(
              ({ confirmation_type: e }) => (
                p(
                  e !== void 0,
                  `Missing confirmation type in allowed confirmations`,
                ),
                e
              ),
            ),
          ),
          w = g.find(({ confirmation_type: e }) => e === x);
        switch (
          (w &&
            w.associated_message &&
            (this.m_strConfirmationAssociatedMessage = w.associated_message),
          x)
        ) {
          case 1:
            return ((this.m_eStatus = 13), this.StartPolling(), l);
          case 2:
            this.m_eStatus = 3;
            break;
          case 5:
            ((this.m_eStatus = 4), this.StartPolling(!1));
            break;
          case 3:
            ((this.m_eStatus = 5), this.StartPolling(!1));
            break;
          case 4:
            ((this.m_eStatus = 6), this.StartPolling(!1));
        }
        return l;
      } catch (e) {
        return (
          V(`Failed to start auth session. Exception: ${JSON.stringify(e)}`),
          pn(e),
          this.SetFailureState(U.Generic, q.FailedToStart()),
          this.m_onCompleteCallback({ bSuccess: !1 }),
          2
        );
      }
    }
    Stop() {
      (this.StopPolling(), (this.m_eStatus = 16));
    }
    GetStatus() {
      return this.m_eStatus;
    }
    GetConfirmationAssociatedMessage() {
      return this.m_strConfirmationAssociatedMessage;
    }
    GetAccountName() {
      return this.m_strAccountName;
    }
    GetSteamID() {
      return this.m_steamid;
    }
    GetReplacementAuthenticator() {
      return this.m_replacementAuthenticator;
    }
    GetErrorReference() {
      return this.m_strErrorReference;
    }
    async SendSteamGuardCode(e, t = !0) {
      if (e.length == 0) {
        switch (this.m_eStatus) {
          case 10:
            this.m_eStatus = 3;
            break;
          case 11:
            this.m_eStatus = 5;
            break;
          case 5:
          case 3:
            break;
          default:
            throw Error(`Attempted to clear code in invalid state`);
        }
        return Promise.resolve(1);
      }
      try {
        await this.m_transport.MakeReady();
        let n = this.m_eStatus === 3 || this.m_eStatus === 10,
          r = C.Init(de);
        (r.SetEMsg(b),
          r.Body().set_client_id(this.m_strClientID),
          r.Body().set_steamid(this.m_steamid),
          r.Body().set_code(e),
          r.Body().set_code_type(n ? 2 : 3));
        let i = await k.UpdateAuthSessionWithSteamGuardCode(
            this.m_transport,
            r,
          ),
          a = i.GetEResult();
        if (a !== 1) {
          if (!t)
            return (
              V(
                `Failed to automatically update session with local SG info. Result ${a}. Transport ${i.Hdr().transport_error()}`,
              ),
              a
            );
          switch (a) {
            case 65:
            case 88:
              return ((this.m_eStatus = n ? 10 : 11), a);
            case 27:
              return (
                this.SetFailureState(U.Expired, q.EResult(a)),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                a
              );
            case 84:
              return (
                this.SetFailureState(U.RateLimitExceeded, q.EResult(a)),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                a
              );
            case 118: {
              let e = i.Body().agreement_session_url();
              if (
                (p(!!e, `Missing agreement session URL for result`, a),
                this.m_onShowAgreement)
              )
                this.m_onShowAgreement(e);
              else {
                let t = location.href;
                window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
              }
              return (
                this.m_onCompleteCallback({ bSuccess: !1 }),
                (this.m_eStatus = 0),
                a
              );
            }
            default:
              return (
                V(`Failed to update auth session with SG code. Result: ${a}`),
                this.SetFailureState(U.Generic, q.EResult(a)),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                a
              );
          }
        }
        return ((this.m_eStatus = 13), this.StartPolling(), a);
      } catch (e) {
        return (
          V(`Failed to update auth session with SG code. ${e}`),
          this.SetFailureState(U.Generic, q.FailedToAddCode()),
          this.m_onCompleteCallback({ bSuccess: !1 }),
          2
        );
      }
    }
    UseCodeOverride() {
      switch (this.m_eStatus) {
        case 6:
          ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 5));
          return;
        case 4:
          ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 3));
          return;
        default:
          V(
            `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
          );
          return;
      }
    }
    CantAccessCode() {
      this.m_eStatus = 7;
    }
    async StartMoveAuthenticator() {
      this.m_weakAuthWebInterface = new E(
        _.WEBAPI_BASE_URL,
        this.m_strWeakAuthToken,
      );
      try {
        let e = C.Init(oe),
          t = await ce.RemoveAuthenticatorViaChallengeStart(
            this.m_weakAuthWebInterface.GetServiceTransport(),
            e,
          );
        t.GetEResult() == 1
          ? (this.m_eStatus = 8)
          : (t.DEBUG_LogToConsole(),
            V(
              `An unexpected error occured while adding an authenticator`,
              t.GetEResult(),
            ),
            this.SetFailureState(
              U.MoveAuthenticator,
              q.EResult(t.GetEResult()),
            ));
      } catch (e) {
        (V(`An unexpected error occured while moving an authenticator`, e),
          this.SetFailureState(U.MoveAuthenticator, q.EResult(2)));
      }
    }
    async ResendMoveCode() {
      p(
        !!this.m_weakAuthWebInterface,
        `Resending move code before StartMoveAuthenticator`,
      );
      let e = C.Init(oe),
        t = await ce.RemoveAuthenticatorViaChallengeStart(
          this.m_weakAuthWebInterface.GetServiceTransport(),
          e,
        );
      (t.GetEResult() != 1 &&
        (t.DEBUG_LogToConsole(),
        V(
          `An unexpected error occured while adding an authenticator`,
          t.GetEResult(),
        )),
        (this.m_eStatus = 8));
    }
    async FinishMoveAuthenticator(e) {
      p(
        !!this.m_weakAuthWebInterface,
        `Finishing authenticator move before StartMoveAuthenticator`,
      );
      let t = C.Init(ue);
      (t.Body().set_sms_code(e),
        t.Body().set_generate_new_token(!0),
        t.Body().set_version(2));
      let n = await ce.RemoveAuthenticatorViaChallengeContinue(
        this.m_weakAuthWebInterface.GetServiceTransport(),
        t,
      );
      if (n.GetEResult() == 94) this.m_eStatus = 12;
      else if (!n.Body().success())
        (n.DEBUG_LogToConsole(),
          V(
            `Error when calling RemoveAuthenticatorViaChallengeContinue`,
            n.GetEResult(),
          ),
          this.SetFailureState(U.MoveAuthenticator, q.EResult(n.GetEResult())));
      else {
        n.DEBUG_LogToConsole();
        let e = n.Body().replacement_token();
        (p(!!e, `Missing replacement token on successful authenticator move`),
          (this.m_replacementAuthenticator = _n(e.toObject())),
          (this.m_eStatus = 9),
          (this.m_bUsingCodeOverride = !1));
      }
    }
    FinishMoveRecovery() {
      this.m_eStatus = 5;
    }
    BCanGoBack() {
      switch (this.m_eStatus) {
        case 5:
        case 11:
        case 3:
        case 10:
        case 6:
        case 4:
        case 7:
        case 8:
        case 12:
          return !0;
        default:
          return !1;
      }
    }
    GoBack() {
      switch (this.m_eStatus) {
        case 6:
        case 4:
          this.m_eStatus = 0;
          break;
        case 5:
        case 11:
          this.m_eStatus = this.m_bUsingCodeOverride ? 6 : 0;
          break;
        case 7:
        case 8:
        case 12:
          this.m_eStatus = (this.m_bUsingCodeOverride, 5);
          break;
        case 3:
        case 10:
          this.m_eStatus = this.m_bUsingCodeOverride ? 4 : 0;
          break;
        default:
          V(
            `Don't know how to GoBack from login session status ${this.m_eStatus}`,
          );
          return;
      }
    }
    SetFailureState(e, t, n = ``) {
      ((this.m_eStatus = 15),
        (this.m_eFailureState = e),
        (this.m_strErrorReference = t),
        (this.m_strExtendedErrorMessage = n));
    }
    onAuthComplete = (e) => {
      this.m_eStatus = e.bSuccess ? 14 : 15;
      let t;
      (e.bSuccess
        ? (p(
            !!this.m_strAccountName && !!this.m_steamid,
            `Missing account name or steamid on auth success`,
          ),
          (t = {
            ...e,
            strAccountName: this.m_strAccountName,
            steamid: this.m_steamid,
          }))
        : (t = { bSuccess: !1 }),
        this.m_onLoginComplete && this.m_onLoginComplete(t));
    };
    SetOnLoginComplete(e) {
      this.m_onLoginComplete = e;
    }
  };
(m([O], K.prototype, `Start`, null),
  m([O], K.prototype, `SendSteamGuardCode`, null),
  m([O], K.prototype, `UseCodeOverride`, null),
  m([O], K.prototype, `CantAccessCode`, null),
  m([O], K.prototype, `StartMoveAuthenticator`, null),
  m([O], K.prototype, `ResendMoveCode`, null),
  m([O], K.prototype, `FinishMoveAuthenticator`, null),
  m([O], K.prototype, `FinishMoveRecovery`, null),
  m([O], K.prototype, `GoBack`, null),
  m([O], K.prototype, `SetOnLoginComplete`, null));
async function Cn(e, t) {
  let n = C.Init(ie);
  (n.Body().set_account_name(t), n.SetEMsg(b));
  try {
    await e.MakeReady();
    let t = await k.GetPasswordRSAPublicKey(e, n);
    if ((t.DEBUG_LogToConsole(), t.GetEResult() !== 1))
      return (V(`Failed to get RSA key with EResult: ${t.GetEResult()}`), null);
    let {
      publickey_exp: r,
      publickey_mod: i,
      timestamp: a,
    } = t.Body().toObject();
    return !r || !i || !a
      ? (V(
          `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: r, publickey_mod: i, timestamp: a })}`,
        ),
        null)
      : { publickey_exp: r, publickey_mod: i, timestamp: a };
  } catch (e) {
    return (V(`Failed to get RSA key: ${JSON.stringify(e)}`), null);
  }
}
var wn = [4, 3, 2, 1, 0, 5].reduce((e, t, n) => ((e[t] = n), e), {});
function Tn(e) {
  let t = e[0] || 0;
  return (e.length > 1 && (t = e.sort((e, t) => wn[e] - wn[t])[0]), t);
}
function En(e) {
  let [t, n] = (0, G.useState)(() => new K(e));
  return (
    (0, G.useEffect)(() => {
      t?.SetOnLoginComplete(e.onComplete);
    }, [t, e.onComplete]),
    {
      ...(0, G.useSyncExternalStore)(t.Subscribe, t.GetSnapshot, t.GetSnapshot),
      start: t.Start,
      addCode: t.SendSteamGuardCode,
      useCodeOverride: t.UseCodeOverride,
      cantAccessCode: t.CantAccessCode,
      startMoveAuthenticator: t.StartMoveAuthenticator,
      resendMoveCode: t.ResendMoveCode,
      finishMoveAuthenticator: t.FinishMoveAuthenticator,
      finishMoveRecovery: t.FinishMoveRecovery,
      reset: () => n(new K(e)),
      goBack: t.GoBack,
      setTokenToRevoke: t.SetTokenToRevoke,
    }
  );
}
function Dn(e) {
  return e ? 7 : 5;
}
function On(e, t) {
  return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= Dn(t);
}
function kn(e, t) {
  return On(e, t) && e.length === Dn(t);
}
var q = {
    EResult: (e) => `e${e}`,
    FailedToStart: () => `c-fts`,
    FailedToAddCode: () => `c-ftac`,
    AjaxFailureNoCode: () => `af`,
    AjaxFailureWithCode: (e) => `af-${e}`,
  },
  An = class extends W {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(e) {
      ((this.m_eStatusValue = e), this.NotifyChanged());
    }
    m_bPreloaded = !1;
    constructor(e) {
      (super(
        e.transport,
        (t) => {
          ((this.m_eStatus = t.bSuccess ? 3 : 4), e.onComplete(t));
        },
        e.onDeviceDetails,
      ),
        e.preloaded &&
          ((this.m_eStatusValue = 2),
          (this.m_strClientID = e.preloaded.strClientID),
          (this.m_strChallengeURL = e.preloaded.strChallengeURL),
          (this.m_msPollInterval = e.preloaded.msPollInterval),
          (this.m_rgRequestID = e.preloaded.rgRequestID),
          (this.m_bPreloaded = !0)));
    }
    BuildSnapshot() {
      return {
        strChallengeURL: this.GetChallengeURL(),
        strClientID: this.GetClientID(),
        eFailureState: this.GetFailureState(),
        eStatus: this.GetStatus(),
        bHadRemoteInteraction: this.BHadRemoteInteraction(),
      };
    }
    async Start() {
      if (this.m_bPreloaded && (this.m_eStatus === 2 || this.m_eStatus === 5))
        return (
          (this.m_eStatus = 2),
          this.m_transport.MakeReady(),
          this.StartPolling(!1),
          1
        );
      if (this.m_eStatus !== 0)
        return (
          console.error(
            `Cannot start an already started auth session. Create a new session instance.`,
          ),
          2
        );
      this.m_eStatus = 1;
      try {
        await this.m_transport.MakeReady();
        let e = C.Init(se);
        e.SetEMsg(b);
        try {
          e.Body().set_device_details(await this.GetDeviceDetails());
        } catch (e) {
          (console.error(`Failed to GetDeviceDetails`), console.log(e));
        }
        let t = d();
        t && e.Body().set_website_id(t.WEBSITE_ID);
        let n = await k.BeginAuthSessionViaQR(this.m_transport, e),
          r = n.GetEResult(),
          i = n.Hdr().transport_error();
        if (r !== 1)
          return (
            console.error(
              `Failed to start auth session. Result: ${r} Transport: ${i}`,
            ),
            (this.m_eFailureState = U.Generic),
            this.m_onCompleteCallback({ bSuccess: !1 }),
            r
          );
        let {
          client_id: a,
          challenge_url: o,
          interval: s,
          request_id: c,
        } = n.Body().toObject();
        return (
          p(s !== void 0, `Missing poll interval for QR auth session`),
          (this.m_strClientID = a),
          (this.m_strChallengeURL = o),
          (this.m_msPollInterval = s * 1e3),
          (this.m_rgRequestID = c),
          (this.m_eStatus = 2),
          this.StartPolling(!1),
          r
        );
      } catch (e) {
        return (
          console.error(`Failed to start auth session: ${JSON.stringify(e)}`),
          (this.m_eFailureState = U.Generic),
          this.m_onCompleteCallback({ bSuccess: !1 }),
          2
        );
      }
    }
    Stop() {
      (this.StopPolling(), (this.m_eStatus = 5));
    }
    GetChallengeURL() {
      return this.m_strChallengeURL;
    }
    GetClientID() {
      return this.m_strClientID;
    }
    GetStatus() {
      return this.m_eStatus;
    }
  };
function jn(e) {
  let [t, n] = (0, G.useState)(() => new An(e));
  return (
    (0, G.useEffect)(
      () => (
        t.Start(),
        () => {
          t.Stop();
        }
      ),
      [t],
    ),
    {
      ...(0, G.useSyncExternalStore)(t.Subscribe, t.GetSnapshot, t.GetSnapshot),
      reset: () => n(new An({ ...e, preloaded: void 0 })),
      setTokenToRevoke: t.SetTokenToRevoke,
    }
  );
}
async function Mn() {
  let [e, t, n, r] = await Promise.all([
    SteamClient.System.GetOSType(),
    SteamClient.System.GetSystemInfo(),
    SteamClient?.Auth?.GetLocalHostname?.() ?? ``,
    SteamClient?.Auth?.GetMachineID?.() ?? void 0,
  ]);
  return {
    os_type: e,
    device_friendly_name: n,
    machine_id: r,
    platform_type: 1,
    gaming_device_type: t.eGamingDeviceType,
  };
}
async function Nn() {
  return { device_friendly_name: window.navigator.userAgent, platform_type: 2 };
}
var Pn = `Login_RememberMeSetting`;
function Fn(e) {
  let { onSuccess: t, secureComputer: n = !0, isProbablySharedPC: r = !1 } = e,
    i = (0, G.useCallback)(
      (e) => {
        if (e.bSuccess) {
          let {
            strRefreshToken: n,
            strAccessToken: r,
            strAccountName: i,
            strNewGuardData: a,
          } = e;
          t({
            strRefreshToken: n,
            strAccessToken: r,
            strAccountName: i,
            strNewGuardData: a,
          });
        }
      },
      [t],
    ),
    a = En({
      transport: e.transport,
      onComplete: i,
      onDeviceDetails: e.onDeviceDetails,
      onGetMachineAuth: e.onGetMachineAuth,
      onShowAgreement: e.onShowAgreement,
    }),
    [o, s] = (0, G.useState)(0),
    [c, l] = (0, G.useState)(
      e.refreshInfo?.account_name ?? e.defaultAccountName ?? ``,
    ),
    [u, d] = (0, G.useState)(``),
    [f, p] = (0, G.useState)(n && !r);
  (0, G.useLayoutEffect)(() => {
    typeof localStorage < `u` && localStorage.getItem(Pn) == `0` && p(!1);
  }, []);
  let m = a.eStatus !== 0 && a.eStatus !== 1 && a.eStatus !== 2;
  return (
    (0, G.useEffect)(() => {
      e.refreshInfo?.login_token_id &&
        a.setTokenToRevoke(e.refreshInfo.login_token_id);
    }, [e.refreshInfo, a]),
    {
      password: a,
      onComplete: i,
      eQRStatus: o,
      onQRStatusChange: s,
      strAccountName: c,
      onAccountNameChange: l,
      strPassword: u,
      onPasswordChange: d,
      bRememberMe: f,
      onRememberMeChange: (e) => {
        (p(e), localStorage?.setItem(Pn, e ? `1` : `0`));
      },
      onPasswordSubmit: () =>
        !c || !u ? Promise.resolve(8) : a.start(c, u, f),
      bInPasswordFlow: m,
      onTryOffline: () => {
        (pn(`Logging in offline with username ${c}`),
          SteamClient.User.SetLoginCredentials(c, u, f),
          SteamClient.User.StartOffline(!0));
      },
    }
  );
}
function In(e, t = ``) {
  let n = { title: ``, description: `` };
  switch (e) {
    case U.None:
      return { title: ``, description: `` };
    case U.Expired:
      n = {
        title: g.Localize(`#Login_Error_Expired_Title`),
        description: g.Localize(`#Login_Error_Expired_Description`),
      };
      break;
    case U.Network:
      n = {
        title: g.Localize(`#Login_Error_Network_Title`),
        description: g.Localize(`#Login_Error_Network_Description`),
      };
      break;
    case U.MoveAuthenticator:
      n = {
        title: g.Localize(`#Error_Generic`),
        description: g.Localize(`#Login_Error_MoveAuthenticator_Description`),
      };
      break;
    case U.RateLimitExceeded:
      n = {
        title: g.Localize(`#Login_Error_RateLimit_Title`),
        description: g.Localize(`#Login_Error_RateLimit_Description`),
      };
      break;
    case U.AnonymousLogin:
      n = {
        title: g.Localize(`#Login_Error_Anonymous_Title`),
        description: g.Localize(`#Login_Error_Anonymous_Description`),
      };
      break;
    case U.Generic:
    default:
      n = {
        title: g.Localize(`#Error_Generic`),
        description: g.Localize(`#Login_Error_Default_Description`),
      };
  }
  return (t && (n.description = t), n);
}
var Ln = `ZhRwp4aSW-8-`,
  Rn = `QV15rhpdkBI-`,
  zn = `StondD-Afl4-`,
  Bn = `zENCcMUG1lQ-`,
  Vn = `_3M1tVbU6uAM-`,
  Hn = `rQS7qJ7cGq8-`,
  Un = `WlYK7flUyzk-`,
  Wn = `p0lt1P2vwbI-`,
  Gn = `Lw5H9Bgq0ww-`,
  Kn = `HD-XkY2oIS0-`,
  qn = `t972389vN-Y-`,
  Jn = `_5U7-qgmzcvo-`,
  Yn = `-HdQ6mrZKtA-`,
  Xn = `Tr28R97XrnU-`,
  Zn = `_17vA1ePJ-dw-`,
  Qn = `hYiUBswjB8E-`,
  $n = `l-m0O8YsKvg-`,
  er = `WNU0cJCzPqA-`,
  tr = `sljnSz9B7VM-`,
  nr = `KE-CI3fCrt4-`,
  rr = `F2-23fRyFdg-`,
  ir = `_9ehBJOSNpjY-`,
  ar = `H2e67uoFTZo-`,
  or = `_0O9XQ4NvNgg-`,
  sr = `SJJMt5-Nlqc-`,
  cr = `_5HbDhenxKKA-`,
  lr = `JRre8-r--eY-`,
  ur = `-wYn7tUZ-Qc-`,
  dr = `Y0ZBzWFxTiU-`,
  fr = `_7xRNYgociu0-`,
  pr = `Rq9MD5lNpxw-`,
  mr = `aDxXoSR2-2M-`,
  hr = `A44IVG2oXaA-`,
  gr = `DJzHz8vrR58-`,
  _r = `_6uA-qQnXgqs-`,
  vr = `zS2JKIAoqLs-`,
  yr = `g2m1tomZf5Y-`,
  br = `DSy9L5eaj5o-`,
  xr = `riI5q82cESo-`,
  Sr = `gjs7dr1G9B4-`,
  Cr = `_8tHxNur8iVQ-`,
  wr = `QDXFvQ1VRGs-`,
  Tr = `iI4-KPYmClQ-`,
  Er = `FCVI1-X5QXI-`,
  Dr = `_-7t7WL8ib4U-`,
  Or = `_4cSRMvOczro-`,
  kr = `urTXd9G8cNM-`,
  Ar = `tk1GT5on9gQ-`,
  jr = `EUZmbwRThEY-`,
  Mr = `koI0X-poWGo-`,
  Nr = `ik9s3tnOv3M-`,
  Pr = `e5FVer86lmY-`,
  Fr = `O8iS-RxIxMc-`,
  Ir = `EWu0dHs0CgM-`,
  Lr = `G3u-Es6yEe8-`,
  Rr = `nr0J1UoEl8s-`,
  zr = `_19NDBszdpt8-`,
  Br = `_4p53BqicMtw-`,
  Vr = `LJXTU0Fs0Mc-`,
  Hr = `NoRFObwpjo0-`,
  Ur = `u95III-ojfU-`,
  Wr = `dfnWU-vLcuI-`,
  Gr = `-iy7zxvavFA-`,
  Kr = `_0wUoYmLYupw-`,
  qr = `V6VD9IECTcA-`,
  Jr = `eDuVIFYKU84-`,
  Yr = `sH-b0kW7QCY-`,
  Xr = `z8NjGLKg3z0-`,
  Zr = `_4pLGekYMMsE-`,
  Qr = `X1k4Ip6MIC8-`,
  $r = `qeijEUL7oHU-`,
  ei = `SoYZJobaqlk-`,
  ti = `KQdWHvm1kCY-`,
  J = e(r(), 1),
  Y = i();
function ni(e) {
  let {
    length: t,
    value: n,
    onChange: r,
    onPaste: i,
    tone: a,
    autoFocus: o,
    disabled: s,
    loading: c,
    backupCode: u,
    allowCharacter: d,
  } = e;
  (0, G.useEffect)(() => {
    o && g();
  }, []);
  let f = (0, G.useRef)([]),
    p = () => r(f.current.map((e) => e.value)),
    m = (e) => {
      let t = e.target.value;
      if (t && d && !d(t)) return;
      let n = e.target.nextElementSibling;
      (e.target.value && n && n.focus(), p());
    },
    h = (e) => {
      f.current.findIndex((e) => !!e.value) === -1
        ? f.current[0]?.select()
        : e.target.select();
    },
    g = () => {
      let e = f.current.find((e) => !e.value);
      e ? e.focus() : f.current[f.current.length - 1].focus();
    },
    _ = (e) => {
      let t = e.target;
      if (e.key === `Backspace` || e.key === `Delete`) {
        let n =
          e.key === `Backspace`
            ? t.previousElementSibling
            : t.nextElementSibling;
        t.value === `` &&
          n &&
          ((n.value = ``), n.focus(), e.preventDefault(), p());
      } else if (
        e.key === `ArrowLeft` ||
        e.key === `ArrowRight` ||
        e.key === `ArrowUp` ||
        e.key === `ArrowDown`
      ) {
        let n =
          e.key === `ArrowLeft` || e.key === `ArrowUp`
            ? t.previousElementSibling
            : t.nextElementSibling;
        n && (n.focus(), e.preventDefault());
      }
    },
    v = (e) => {
      let t = e.clipboardData.getData(`Text`),
        n = e.target,
        r = 0;
      for (; n && r < t.length;)
        (n.focus(), (n.value = t.charAt(r)), (n = n.nextElementSibling), r++);
      (p(), e.preventDefault(), i && i());
    },
    y = [];
  for (let e = 0; e < t; e++)
    y.push(
      (0, Y.jsx)(
        D,
        {
          noFocusRing: !0,
          type: `text`,
          maxLength: 1,
          ref: (t) => {
            t && (f.current[e] = t);
          },
          onChange: m,
          onFocus: h,
          onClick: (e) => e.stopPropagation(),
          onKeyDown: _,
          onPaste: v,
          value: n[e] ? n[e][0] : ``,
          autoComplete: `none`,
          autoFocus: e === 0 && o,
          disabled: s || c,
          className: ti,
        },
        e,
      ),
    );
  return (0, Y.jsxs)(l, {
    className: (0, J.default)(
      ei,
      a === `danger` && `faQ-XEuPsJg-`,
      s && `mIAxC7mq9-I-`,
      u && `eQsO7wBQCBc-`,
    ),
    onClick: g,
    children: [
      c &&
        (0, Y.jsx)(`div`, {
          className: `_4vkP-m3oW-0-`,
          children: (0, Y.jsx)(fa, { size: `small` }),
        }),
      y,
    ],
  });
}
function ri() {
  let e = `svgid_` + (0, G.useId)().replace(/[^A-Za-z0-9_-]/g, ``);
  return [e, `url(#${e})`];
}
function ii(e) {
  let [t, n] = ri();
  return (0, Y.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 15 23`,
    fill: `none`,
    ...e,
    children: [
      (0, Y.jsx)(`g`, {
        clipPath: n,
        children: (0, Y.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M6.9955 11.5L15 3.4955L11.5045 -1.52793e-07L0.00450275 11.5L11.5045 23L15 19.5045L6.9955 11.5Z`,
        }),
      }),
      (0, Y.jsx)(`defs`, {
        children: (0, Y.jsx)(`clipPath`, {
          id: t,
          children: (0, Y.jsx)(`rect`, {
            fill: `currentColor`,
            width: `15`,
            height: `23`,
          }),
        }),
      }),
    ],
  });
}
function ai(e) {
  let { color: t = `#fff`, ...n } = e;
  return (0, Y.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Check`,
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    strokeWidth: `24`,
    stroke: t,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    strokeMiterlimit: `10`,
    ...n,
    children: (0, Y.jsx)(`polyline`, {
      fill: `none`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var oi = new URL(
    `../../../images/applications/store/login_mobile_auth.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  si = t((e, t) => {
    t.exports = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8,
    };
  }),
  ci = t((e, t) => {
    var n = si();
    function r(e) {
      ((this.mode = n.MODE_8BIT_BYTE), (this.data = e));
    }
    ((r.prototype = {
      getLength: function (e) {
        return this.data.length;
      },
      write: function (e) {
        for (var t = 0; t < this.data.length; t++)
          e.put(this.data.charCodeAt(t), 8);
      },
    }),
      (t.exports = r));
  }),
  li = t((e, t) => {
    t.exports = { L: 1, M: 0, Q: 3, H: 2 };
  }),
  ui = t((e, t) => {
    var n = li();
    function r(e, t) {
      ((this.totalCount = e), (this.dataCount = t));
    }
    ((r.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16],
    ]),
      (r.getRSBlocks = function (e, t) {
        var n = r.getRsBlockTable(e, t);
        if (n == null)
          throw Error(
            `bad rs block @ typeNumber:` + e + `/errorCorrectLevel:` + t,
          );
        for (var i = n.length / 3, a = [], o = 0; o < i; o++)
          for (
            var s = n[o * 3 + 0], c = n[o * 3 + 1], l = n[o * 3 + 2], u = 0;
            u < s;
            u++
          )
            a.push(new r(c, l));
        return a;
      }),
      (r.getRsBlockTable = function (e, t) {
        switch (t) {
          case n.L:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
          case n.M:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
          case n.Q:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
          case n.H:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
      (t.exports = r));
  }),
  di = t((e, t) => {
    function n() {
      ((this.buffer = []), (this.length = 0));
    }
    ((n.prototype = {
      get: function (e) {
        var t = Math.floor(e / 8);
        return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
      },
      put: function (e, t) {
        for (var n = 0; n < t; n++) this.putBit(((e >>> (t - n - 1)) & 1) == 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (e) {
        var t = Math.floor(this.length / 8);
        (this.buffer.length <= t && this.buffer.push(0),
          e && (this.buffer[t] |= 128 >>> (this.length % 8)),
          this.length++);
      },
    }),
      (t.exports = n));
  }),
  fi = t((e, t) => {
    for (
      var n = {
          glog: function (e) {
            if (e < 1) throw Error(`glog(` + e + `)`);
            return n.LOG_TABLE[e];
          },
          gexp: function (e) {
            for (; e < 0;) e += 255;
            for (; e >= 256;) e -= 255;
            return n.EXP_TABLE[e];
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256),
        },
        r = 0;
      r < 8;
      r++
    )
      n.EXP_TABLE[r] = 1 << r;
    for (var r = 8; r < 256; r++)
      n.EXP_TABLE[r] =
        n.EXP_TABLE[r - 4] ^
        n.EXP_TABLE[r - 5] ^
        n.EXP_TABLE[r - 6] ^
        n.EXP_TABLE[r - 8];
    for (var r = 0; r < 255; r++) n.LOG_TABLE[n.EXP_TABLE[r]] = r;
    t.exports = n;
  }),
  pi = t((e, t) => {
    var n = fi();
    function r(e, t) {
      if (e.length == null) throw Error(e.length + `/` + t);
      for (var n = 0; n < e.length && e[n] == 0;) n++;
      this.num = Array(e.length - n + t);
      for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n];
    }
    ((r.prototype = {
      get: function (e) {
        return this.num[e];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (e) {
        for (
          var t = Array(this.getLength() + e.getLength() - 1), i = 0;
          i < this.getLength();
          i++
        )
          for (var a = 0; a < e.getLength(); a++)
            t[i + a] ^= n.gexp(n.glog(this.get(i)) + n.glog(e.get(a)));
        return new r(t, 0);
      },
      mod: function (e) {
        if (this.getLength() - e.getLength() < 0) return this;
        for (
          var t = n.glog(this.get(0)) - n.glog(e.get(0)),
            i = Array(this.getLength()),
            a = 0;
          a < this.getLength();
          a++
        )
          i[a] = this.get(a);
        for (var a = 0; a < e.getLength(); a++)
          i[a] ^= n.gexp(n.glog(e.get(a)) + t);
        return new r(i, 0).mod(e);
      },
    }),
      (t.exports = r));
  }),
  mi = t((e, t) => {
    var n = si(),
      r = pi(),
      i = fi(),
      a = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      },
      o = {
        PATTERN_POSITION_TABLE: [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170],
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (e) {
          for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0;)
            t ^= o.G15 << (o.getBCHDigit(t) - o.getBCHDigit(o.G15));
          return ((e << 10) | t) ^ o.G15_MASK;
        },
        getBCHTypeNumber: function (e) {
          for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0;)
            t ^= o.G18 << (o.getBCHDigit(t) - o.getBCHDigit(o.G18));
          return (e << 12) | t;
        },
        getBCHDigit: function (e) {
          for (var t = 0; e != 0;) (t++, (e >>>= 1));
          return t;
        },
        getPatternPosition: function (e) {
          return o.PATTERN_POSITION_TABLE[e - 1];
        },
        getMask: function (e, t, n) {
          switch (e) {
            case a.PATTERN000:
              return (t + n) % 2 == 0;
            case a.PATTERN001:
              return t % 2 == 0;
            case a.PATTERN010:
              return n % 3 == 0;
            case a.PATTERN011:
              return (t + n) % 3 == 0;
            case a.PATTERN100:
              return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
            case a.PATTERN101:
              return ((t * n) % 2) + ((t * n) % 3) == 0;
            case a.PATTERN110:
              return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
            case a.PATTERN111:
              return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
            default:
              throw Error(`bad maskPattern:` + e);
          }
        },
        getErrorCorrectPolynomial: function (e) {
          for (var t = new r([1], 0), n = 0; n < e; n++)
            t = t.multiply(new r([1, i.gexp(n)], 0));
          return t;
        },
        getLengthInBits: function (e, t) {
          if (1 <= t && t < 10)
            switch (e) {
              case n.MODE_NUMBER:
                return 10;
              case n.MODE_ALPHA_NUM:
                return 9;
              case n.MODE_8BIT_BYTE:
                return 8;
              case n.MODE_KANJI:
                return 8;
              default:
                throw Error(`mode:` + e);
            }
          else if (t < 27)
            switch (e) {
              case n.MODE_NUMBER:
                return 12;
              case n.MODE_ALPHA_NUM:
                return 11;
              case n.MODE_8BIT_BYTE:
                return 16;
              case n.MODE_KANJI:
                return 10;
              default:
                throw Error(`mode:` + e);
            }
          else if (t < 41)
            switch (e) {
              case n.MODE_NUMBER:
                return 14;
              case n.MODE_ALPHA_NUM:
                return 13;
              case n.MODE_8BIT_BYTE:
                return 16;
              case n.MODE_KANJI:
                return 12;
              default:
                throw Error(`mode:` + e);
            }
          else throw Error(`type:` + t);
        },
        getLostPoint: function (e) {
          for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
            for (var i = 0; i < t; i++) {
              for (var a = 0, o = e.isDark(r, i), s = -1; s <= 1; s++)
                if (!(r + s < 0 || t <= r + s))
                  for (var c = -1; c <= 1; c++)
                    i + c < 0 ||
                      t <= i + c ||
                      ((s != 0 || c != 0) &&
                        o == e.isDark(r + s, i + c) &&
                        a++);
              a > 5 && (n += 3 + a - 5);
            }
          for (var r = 0; r < t - 1; r++)
            for (var i = 0; i < t - 1; i++) {
              var l = 0;
              (e.isDark(r, i) && l++,
                e.isDark(r + 1, i) && l++,
                e.isDark(r, i + 1) && l++,
                e.isDark(r + 1, i + 1) && l++,
                (l == 0 || l == 4) && (n += 3));
            }
          for (var r = 0; r < t; r++)
            for (var i = 0; i < t - 6; i++)
              e.isDark(r, i) &&
                !e.isDark(r, i + 1) &&
                e.isDark(r, i + 2) &&
                e.isDark(r, i + 3) &&
                e.isDark(r, i + 4) &&
                !e.isDark(r, i + 5) &&
                e.isDark(r, i + 6) &&
                (n += 40);
          for (var i = 0; i < t; i++)
            for (var r = 0; r < t - 6; r++)
              e.isDark(r, i) &&
                !e.isDark(r + 1, i) &&
                e.isDark(r + 2, i) &&
                e.isDark(r + 3, i) &&
                e.isDark(r + 4, i) &&
                !e.isDark(r + 5, i) &&
                e.isDark(r + 6, i) &&
                (n += 40);
          for (var u = 0, i = 0; i < t; i++)
            for (var r = 0; r < t; r++) e.isDark(r, i) && u++;
          var d = Math.abs((100 * u) / t / t - 50) / 5;
          return ((n += d * 10), n);
        },
      };
    t.exports = o;
  }),
  hi = t((e, t) => {
    var n = ci(),
      r = ui(),
      i = di(),
      a = mi(),
      o = pi();
    function s(e, t) {
      ((this.typeNumber = e),
        (this.errorCorrectLevel = t),
        (this.modules = null),
        (this.moduleCount = 0),
        (this.dataCache = null),
        (this.dataList = []));
    }
    var c = s.prototype;
    ((c.addData = function (e) {
      var t = new n(e);
      (this.dataList.push(t), (this.dataCache = null));
    }),
      (c.isDark = function (e, t) {
        if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
          throw Error(e + `,` + t);
        return this.modules[e][t];
      }),
      (c.getModuleCount = function () {
        return this.moduleCount;
      }),
      (c.make = function () {
        if (this.typeNumber < 1) {
          var e = 1;
          for (e = 1; e < 40; e++) {
            for (
              var t = r.getRSBlocks(e, this.errorCorrectLevel),
                n = new i(),
                o = 0,
                s = 0;
              s < t.length;
              s++
            )
              o += t[s].dataCount;
            for (var s = 0; s < this.dataList.length; s++) {
              var c = this.dataList[s];
              (n.put(c.mode, 4),
                n.put(c.getLength(), a.getLengthInBits(c.mode, e)),
                c.write(n));
            }
            if (n.getLengthInBits() <= o * 8) break;
          }
          this.typeNumber = e;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
      }),
      (c.makeImpl = function (e, t) {
        ((this.moduleCount = this.typeNumber * 4 + 17),
          (this.modules = Array(this.moduleCount)));
        for (var n = 0; n < this.moduleCount; n++) {
          this.modules[n] = Array(this.moduleCount);
          for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
        }
        (this.setupPositionProbePattern(0, 0),
          this.setupPositionProbePattern(this.moduleCount - 7, 0),
          this.setupPositionProbePattern(0, this.moduleCount - 7),
          this.setupPositionAdjustPattern(),
          this.setupTimingPattern(),
          this.setupTypeInfo(e, t),
          this.typeNumber >= 7 && this.setupTypeNumber(e),
          (this.dataCache ??= s.createData(
            this.typeNumber,
            this.errorCorrectLevel,
            this.dataList,
          )),
          this.mapData(this.dataCache, t));
      }),
      (c.setupPositionProbePattern = function (e, t) {
        for (var n = -1; n <= 7; n++)
          if (!(e + n <= -1 || this.moduleCount <= e + n))
            for (var r = -1; r <= 7; r++)
              t + r <= -1 ||
                this.moduleCount <= t + r ||
                ((0 <= n && n <= 6 && (r == 0 || r == 6)) ||
                (0 <= r && r <= 6 && (n == 0 || n == 6)) ||
                (2 <= n && n <= 4 && 2 <= r && r <= 4)
                  ? (this.modules[e + n][t + r] = !0)
                  : (this.modules[e + n][t + r] = !1));
      }),
      (c.getBestMaskPattern = function () {
        for (var e = 0, t = 0, n = 0; n < 8; n++) {
          this.makeImpl(!0, n);
          var r = a.getLostPoint(this);
          (n == 0 || e > r) && ((e = r), (t = n));
        }
        return t;
      }),
      (c.createMovieClip = function (e, t, n) {
        var r = e.createEmptyMovieClip(t, n),
          i = 1;
        this.make();
        for (var a = 0; a < this.modules.length; a++)
          for (var o = a * i, s = 0; s < this.modules[a].length; s++) {
            var c = s * i;
            this.modules[a][s] &&
              (r.beginFill(0, 100),
              r.moveTo(c, o),
              r.lineTo(c + i, o),
              r.lineTo(c + i, o + i),
              r.lineTo(c, o + i),
              r.endFill());
          }
        return r;
      }),
      (c.setupTimingPattern = function () {
        for (var e = 8; e < this.moduleCount - 8; e++)
          this.modules[e][6] ?? (this.modules[e][6] = e % 2 == 0);
        for (var t = 8; t < this.moduleCount - 8; t++)
          this.modules[6][t] ?? (this.modules[6][t] = t % 2 == 0);
      }),
      (c.setupPositionAdjustPattern = function () {
        for (
          var e = a.getPatternPosition(this.typeNumber), t = 0;
          t < e.length;
          t++
        )
          for (var n = 0; n < e.length; n++) {
            var r = e[t],
              i = e[n];
            if (this.modules[r][i] == null)
              for (var o = -2; o <= 2; o++)
                for (var s = -2; s <= 2; s++)
                  o == -2 || o == 2 || s == -2 || s == 2 || (o == 0 && s == 0)
                    ? (this.modules[r + o][i + s] = !0)
                    : (this.modules[r + o][i + s] = !1);
          }
      }),
      (c.setupTypeNumber = function (e) {
        for (var t = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
          var r = !e && ((t >> n) & 1) == 1;
          this.modules[Math.floor(n / 3)][(n % 3) + this.moduleCount - 8 - 3] =
            r;
        }
        for (var n = 0; n < 18; n++) {
          var r = !e && ((t >> n) & 1) == 1;
          this.modules[(n % 3) + this.moduleCount - 8 - 3][Math.floor(n / 3)] =
            r;
        }
      }),
      (c.setupTypeInfo = function (e, t) {
        for (
          var n = (this.errorCorrectLevel << 3) | t,
            r = a.getBCHTypeInfo(n),
            i = 0;
          i < 15;
          i++
        ) {
          var o = !e && ((r >> i) & 1) == 1;
          i < 6
            ? (this.modules[i][8] = o)
            : i < 8
              ? (this.modules[i + 1][8] = o)
              : (this.modules[this.moduleCount - 15 + i][8] = o);
        }
        for (var i = 0; i < 15; i++) {
          var o = !e && ((r >> i) & 1) == 1;
          i < 8
            ? (this.modules[8][this.moduleCount - i - 1] = o)
            : i < 9
              ? (this.modules[8][15 - i - 1 + 1] = o)
              : (this.modules[8][15 - i - 1] = o);
        }
        this.modules[this.moduleCount - 8][8] = !e;
      }),
      (c.mapData = function (e, t) {
        for (
          var n = -1,
            r = this.moduleCount - 1,
            i = 7,
            o = 0,
            s = this.moduleCount - 1;
          s > 0;
          s -= 2
        )
          for (s == 6 && s--; ;) {
            for (var c = 0; c < 2; c++)
              if (this.modules[r][s - c] == null) {
                var l = !1;
                (o < e.length && (l = ((e[o] >>> i) & 1) == 1),
                  a.getMask(t, r, s - c) && (l = !l),
                  (this.modules[r][s - c] = l),
                  i--,
                  i == -1 && (o++, (i = 7)));
              }
            if (((r += n), r < 0 || this.moduleCount <= r)) {
              ((r -= n), (n = -n));
              break;
            }
          }
      }),
      (s.PAD0 = 236),
      (s.PAD1 = 17),
      (s.createData = function (e, t, n) {
        for (
          var o = r.getRSBlocks(e, t), c = new i(), l = 0;
          l < n.length;
          l++
        ) {
          var u = n[l];
          (c.put(u.mode, 4),
            c.put(u.getLength(), a.getLengthInBits(u.mode, e)),
            u.write(c));
        }
        for (var d = 0, l = 0; l < o.length; l++) d += o[l].dataCount;
        if (c.getLengthInBits() > d * 8)
          throw Error(
            `code length overflow. (` + c.getLengthInBits() + `>` + d * 8 + `)`,
          );
        for (
          c.getLengthInBits() + 4 <= d * 8 && c.put(0, 4);
          c.getLengthInBits() % 8 != 0;
        )
          c.putBit(!1);
        for (
          ;
          !(
            c.getLengthInBits() >= d * 8 ||
            (c.put(s.PAD0, 8), c.getLengthInBits() >= d * 8)
          );
        )
          c.put(s.PAD1, 8);
        return s.createBytes(c, o);
      }),
      (s.createBytes = function (e, t) {
        for (
          var n = 0,
            r = 0,
            i = 0,
            s = Array(t.length),
            c = Array(t.length),
            l = 0;
          l < t.length;
          l++
        ) {
          var u = t[l].dataCount,
            d = t[l].totalCount - u;
          ((r = Math.max(r, u)), (i = Math.max(i, d)), (s[l] = Array(u)));
          for (var f = 0; f < s[l].length; f++) s[l][f] = 255 & e.buffer[f + n];
          n += u;
          var p = a.getErrorCorrectPolynomial(d),
            m = new o(s[l], p.getLength() - 1).mod(p);
          c[l] = Array(p.getLength() - 1);
          for (var f = 0; f < c[l].length; f++) {
            var h = f + m.getLength() - c[l].length;
            c[l][f] = h >= 0 ? m.get(h) : 0;
          }
        }
        for (var g = 0, f = 0; f < t.length; f++) g += t[f].totalCount;
        for (var _ = Array(g), v = 0, f = 0; f < r; f++)
          for (var l = 0; l < t.length; l++)
            f < s[l].length && (_[v++] = s[l][f]);
        for (var f = 0; f < i; f++)
          for (var l = 0; l < t.length; l++)
            f < c[l].length && (_[v++] = c[l][f]);
        return _;
      }),
      (t.exports = s));
  }),
  gi = t((e, t) => {
    var n = hi(),
      r = li(),
      i = function (e, t) {
        t ||= {};
        var i = new n(t.typeNumber || -1, t.errorCorrectLevel || r.H);
        return (i.addData(e), i.make(), i);
      };
    ((i.ErrorCorrectLevel = r), (t.exports = i));
  }),
  _i = `RuVnOcF9yRI-`,
  vi = `QhysrBJX1dU-`,
  yi = e(gi(), 1),
  bi = (function (e) {
    return (
      (e[(e.L = 1)] = `L`),
      (e[(e.M = 0)] = `M`),
      (e[(e.Q = 3)] = `Q`),
      (e[(e.H = 2)] = `H`),
      e
    );
  })({});
function xi(e, t, n) {
  let r = e.length,
    i = e[0].length,
    a = (r + 2) * i,
    o = new Uint8Array(40 + a),
    s = 0;
  ((o[s++] = 71),
    (o[s++] = 73),
    (o[s++] = 70),
    (o[s++] = 56),
    (o[s++] = 57),
    (o[s++] = 97),
    (o[s++] = r),
    (o[s++] = 0),
    (o[s++] = i),
    (o[s++] = 0),
    p(
      t != `transparent` || n != `transparent`,
      `Trying to use transparent for both colors in QR`,
    ),
    (o[s++] = 161),
    (o[s++] = 0),
    (o[s++] = 0),
    t == `transparent`
      ? ((o[s++] = 0), (o[s++] = 0), (o[s++] = 0))
      : ((o[s++] = t[0]), (o[s++] = t[1]), (o[s++] = t[2])),
    n == `transparent`
      ? ((o[s++] = 0), (o[s++] = 0), (o[s++] = 0))
      : ((o[s++] = n[0]), (o[s++] = n[1]), (o[s++] = n[2])),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (t == `transparent` || n == `transparent`) &&
      ((o[s++] = 33),
      (o[s++] = 249),
      (o[s++] = 4),
      (o[s++] = 1),
      (o[s++] = 0),
      (o[s++] = 0),
      (o[s++] = t == `transparent` ? 0 : 1),
      (o[s++] = 0)),
    (o[s++] = 44),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = r),
    (o[s++] = 0),
    (o[s++] = i),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 7));
  for (let t = 0; t < e.length; t++) {
    ((o[s++] = r + 1), (o[s++] = 128));
    for (let n = 0; n < e.length; n++) o[s++] = +!e[t][n];
  }
  return ((o[s++] = 1), (o[s++] = 129), (o[s++] = 0), (o[s++] = 59), o);
}
function Si(
  e,
  {
    activeBitColor: t = [33, 35, 40],
    inactiveBitColor: n = [255, 255, 255],
    borderWidth: r = 3,
  } = {},
  i = {},
) {
  let a = (0, yi.default)(e, i).modules;
  if (!a) return null;
  let o = [];
  for (let e = 0; e < r; e++) o.push(Array(a.length + r * 2).fill(!1));
  for (let e = 0; e < a.length; e++)
    o.push([
      ...Array.from({ length: r }, () => !1),
      ...a[e],
      ...Array.from({ length: r }, () => !1),
    ]);
  for (let e = 0; e < r; e++) o.push(Array(a.length + r * 2).fill(!1));
  return xi(o, t, n);
}
function Ci(e) {
  let {
      quality: t = 0,
      children: n,
      className: r,
      activeBitColor: i = [33, 35, 40],
      inactiveBitColor: a = [255, 255, 255],
      borderWidth: o = 3,
      typeNumber: s = 6,
    } = e,
    c = wi(n, {
      typeNumber: s,
      errorCorrectLevel: t,
      activeBitColor: i,
      inactiveBitColor: a,
      borderWidth: o,
    });
  if (!c) return null;
  let l = `rgb(${a[0]}, ${a[1]}, ${a[2]})`;
  return (0, Y.jsx)(`div`, {
    className: (0, J.default)(_i, r),
    style: { "--qr-bright-color": l },
    children: (0, Y.jsx)(`img`, { className: vi, src: c, alt: `` }),
  });
}
function wi(e, t) {
  let {
    typeNumber: n,
    errorCorrectLevel: r,
    activeBitColor: i,
    inactiveBitColor: a,
    borderWidth: o,
  } = t;
  return (0, G.useMemo)(() => {
    let t = Si(
      e,
      { activeBitColor: i, inactiveBitColor: a, borderWidth: o },
      { typeNumber: n, errorCorrectLevel: r },
    );
    return t ? `data:image/gif;base64,${(0, gn.fromByteArray)(t)}` : null;
  }, [e, n, r, i, a, o]);
}
var Ti = `WrkY9vjgO-o-`,
  Ei = `S5cukRF3668-`,
  Di = `_-8GxbX7BdEU-`;
function Oi(e) {
  let {
      transport: t,
      onComplete: n,
      onStatusChange: r,
      platform: i,
      styling: a = `default`,
      activeBitValue: o = 255,
      preloadedSession: s,
    } = e,
    {
      eStatus: c,
      strChallengeURL: l,
      strClientID: u,
      bHadRemoteInteraction: d,
      reset: f,
      setTokenToRevoke: p,
    } = jn({
      transport: t,
      onComplete: n,
      onDeviceDetails: _.IN_STEAMUI ? Mn : Nn,
      preloaded: s,
    });
  (0, G.useEffect)(() => r && r(c), [r, c]);
  let m = c === 2 && l ? l : _.STORE_BASE_URL,
    h = c === 0 || c === 1 || d,
    g = c === 4,
    v = c === 3,
    y = v
      ? (0, Y.jsx)(Ni, {})
      : g
        ? (0, Y.jsx)(ji, { reset: f })
        : h
          ? (0, Y.jsx)(Ai, { size: `small` })
          : null,
    b = h || g || v;
  (0, G.useEffect)(() => {
    e.refreshInfo?.login_token_id && p(e.refreshInfo.login_token_id);
  }, [e.refreshInfo, p]);
  let x = _.EUNIVERSE !== 1,
    S = `rgb(${o}, ${o}, ${o})`;
  return (0, Y.jsx)(`div`, {
    className: Ei,
    children: (0, Y.jsxs)(`div`, {
      style: { position: `relative` },
      children: [
        (0, Y.jsx)(Ci, {
          borderWidth: 0,
          activeBitColor: [21, 23, 28],
          inactiveBitColor: x ? [o, 0, o] : [o, o, o],
          quality: ki(m),
          className: (0, J.default)(
            Ti,
            a == `deck` && `LfwdeqflbQQ-`,
            a == `vr` && `DlrZAVV1kSM-`,
            b && `AME4jRbjhDs-`,
            x && `FFV7o6c8MVE-`,
          ),
          children: m,
        }),
        b &&
          (0, Y.jsx)(`div`, {
            className: `rAodxgQ4uTs-`,
            children: (0, Y.jsx)(`div`, {
              className: `TxzArhnTYjU-`,
              style: { "--qr-bright-color": S },
              children: y,
            }),
          }),
      ],
    }),
  });
}
function ki(e) {
  return e.length <= 90 ? bi.Q : void 0;
}
function Ai(e) {
  let { size: t } = e;
  return (0, Y.jsx)(`div`, {
    className: (0, J.default)(
      Di,
      t == `small` && `UmXCdAcOnc0-`,
      (t == `medium` || !t) && `dkcbyneVVOc-`,
      t == `large` && `y6M90bbs5Os-`,
    ),
  });
}
function ji(e) {
  return (0, Y.jsx)(ee, {
    color: `dull`,
    variant: `ghost`,
    onClick: e.reset,
    children: (0, Y.jsx)(Mi, {}),
  });
}
function Mi(e) {
  return (0, Y.jsxs)(`svg`, {
    version: `1.1`,
    id: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: { width: `40px`, height: `40px`, cursor: `pointer` },
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, Y.jsx)(`path`, {
        fill: `none`,
        stroke: `#fff`,
        strokeWidth: `30`,
        strokeLinecap: `round`,
        strokeMiterlimit: `10`,
        d: `M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895`,
      }),
      (0, Y.jsx)(`polygon`, {
        points: `147.639,108.361 245.755,10.166 245.834,108.361`,
        fill: `#fff`,
      }),
    ],
  });
}
function Ni() {
  return (0, Y.jsx)(`svg`, {
    version: `1.1`,
    id: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: { width: `45px`, height: `45px` },
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, Y.jsx)(`polyline`, {
      fill: `none`,
      stroke: `#fff`,
      strokeWidth: `24`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      strokeMiterlimit: `10`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var Pi = (0, G.createContext)(!1),
  X = () => (0, G.useContext)(Pi);
function Fi() {
  return (0, Y.jsx)(`div`, {
    className: Ln,
    children: (0, Y.jsx)(ma, {
      reset: () => window.location.reload(),
      failure: U.Generic,
    }),
  });
}
function Ii(e) {
  Fa(e.redirectUrl);
  let t = (t) => {
    let { strRefreshToken: n } = t;
    bn(n).then(
      (t) => e.onComplete(t),
      () => e.onComplete(vn.k_PrimaryDomainFail),
    );
  };
  return (0, Y.jsx)(Li, {
    ...e,
    creationRedirectUrl: e.redirectUrl,
    onSuccess: t,
    embedded: e.theme === `modal`,
  });
}
function Li(e) {
  let { embedded: t, children: n, ...r } = e;
  return (0, Y.jsx)(y, {
    children: (0, Y.jsx)(Pi.Provider, {
      value: t ?? !1,
      children: (0, Y.jsxs)(`div`, {
        className: Ln,
        children: [(0, Y.jsx)(Hi, { ...r }), n],
      }),
    }),
  });
}
function Ri(e) {
  if (s()) return null;
  let { variant: t } = e;
  return typeof t == `function`
    ? (0, Y.jsx)(Z, { onClick: t, children: g.Localize(`#Login_Help_SignIn`) })
    : (0, Y.jsx)(Z, {
        href: `${_.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
        children: g.Localize(`#Login_Help_SignIn`),
      });
}
function zi(e) {
  let { variant: t, redirectUrl: n } = e;
  if (typeof t == `function`)
    return (0, Y.jsx)(Z, {
      inline: !0,
      onClick: t,
      children: g.Localize(`#Login_CreateAccount`),
    });
  {
    let e = n ? `?redir=${encodeURIComponent(n)}` : ``;
    switch (t ?? `normal`) {
      default:
      case `normal`:
        return (0, Y.jsx)(Z, {
          inline: !0,
          href: `${_.STORE_BASE_URL}join/${e}`,
          children: g.Localize(`#Login_CreateAccount`),
        });
      case `partner`:
        return (0, Y.jsx)(Z, {
          inline: !0,
          href: `${_.PARTNER_BASE_URL}${e}`,
          children: g.Localize(`#Login_CreateSteamworksAccount`),
        });
      case `none`:
        return null;
    }
  }
}
function Bi(e) {
  let { launcherType: t, variant: n, redirectUrl: r } = e;
  if (t === 8 || n == `none`) return null;
  let i = t !== void 0,
    a;
  switch (n ?? `normal`) {
    default:
    case `normal`:
      a = `#Login_NoSteamAccount`;
      break;
    case `partner`:
      a = `#Login_NoSteamworksAccount`;
  }
  return (0, Y.jsxs)(`div`, {
    className: (0, J.default)(Kr, i && `Kv7QdVcb2UI-`),
    children: [
      (0, Y.jsx)(`span`, { className: qr, children: g.Localize(a) }),
      (0, Y.jsx)(zi, { variant: n, redirectUrl: r }),
    ],
  });
}
function Vi() {
  let e =
    window?.location &&
    new URLSearchParams(window.location.search).getAll(`need_password`).pop();
  return e !== void 0 && e !== `false` && e !== `0`;
}
function Hi(e) {
  let {
      transport: t,
      onSuccess: n,
      platform: r,
      autoFocus: i,
      refreshInfo: a,
      renderSuccess: o = () => (0, Y.jsx)(Pa, {}),
      lastResult: s,
      joinLinkVariant: c,
      defaultAccountName: l,
      secureComputer: u = !0,
      isProbablySharedPC: d = !1,
      onShowAgreement: f,
      creationRedirectUrl: m,
      preloadedQRSession: h,
    } = e,
    y = _.IN_STEAMUI ? Mn : Nn,
    b = _.IN_STEAMUI ? (e) => SteamClient.Auth.GetSteamGuardData(e) : null,
    x = Vi(),
    S = Fn({
      transport: t,
      platform: r,
      onSuccess: n,
      refreshInfo: a,
      onDeviceDetails: y,
      onGetMachineAuth: b,
      defaultAccountName: l,
      secureComputer: u,
      isProbablySharedPC: d,
      onShowAgreement: f,
    }),
    C = X(),
    w = (0, G.useId)();
  if (s != null && s != 1)
    return (0, Y.jsx)(`div`, {
      className: Ln,
      children: (0, Y.jsx)(ma, {
        reset: () => window.location.reload(),
        failure: U.Generic,
        errorReference: s.toString(),
        extendedErrorMessage: S.password.strExtendedErrorMessage,
      }),
    });
  let T = _.EREALM !== te.k_ESteamRealmChina;
  if (!S.bInPasswordFlow) {
    let n = (0, Y.jsxs)(`div`, {
      className: (0, J.default)(Rn, C && `rvRWTXNBcK4-`),
      children: [
        (0, Y.jsx)(Gi, {
          strAccountName: S.strAccountName,
          onAccountNameChange: S.onAccountNameChange,
          strPassword: S.strPassword,
          onPasswordChange: S.onPasswordChange,
          bRememberMe: S.bRememberMe,
          onRememberMeChange: S.onRememberMeChange,
          onSubmit: S.onPasswordSubmit,
          status: S.password.eStatus,
          autoFocus: i,
          secureComputer: u,
          refreshInfo: e.refreshInfo,
        }),
        T &&
          (0, Y.jsx)(qi, {
            transport: t,
            onQRStatusChange: S.onQRStatusChange,
            onComplete: S.onComplete,
            platform: r,
            refreshInfo: a,
            preloadedQRSession: h,
          }),
      ],
    });
    if (C) {
      let t = _.IN_STEAMUI,
        r = v()?.LAUNCHER_TYPE;
      return (0, Y.jsxs)(Q, {
        className: (0, J.default)(Ur, t && `Kv7QdVcb2UI-`),
        children: [
          !t && !1,
          !e.refreshInfo &&
            (0, Y.jsx)(Aa, {
              realm: _.EREALM,
              launcherType: r,
              className: `_19NDBszdpt8-`,
              onBack: e.onBack,
            }),
          (0, Y.jsx)(Ui, { refreshInfo: a }),
          n,
          (0, Y.jsxs)(`div`, {
            className: (0, J.default)(Gr, t && `Kv7QdVcb2UI-`),
            children: [
              (0, Y.jsx)(Ri, { variant: e.helpLinkVariant }),
              (0, Y.jsx)(Bi, { launcherType: r, variant: c, redirectUrl: m }),
            ],
          }),
        ],
      });
    }
    let o = (0, Y.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `8px`,
        margin: `8px 16px`,
      },
      children: [
        !1,
        (0, Y.jsx)(`h2`, {
          className: Lr,
          id: w,
          children: e.refreshInfo
            ? g.Localize(`#Login_RefreshSignIn`)
            : g.Localize(`#Login_SignInTitle`),
        }),
        (0, Y.jsx)(Ui, { refreshInfo: e.refreshInfo }),
      ],
    });
    return (0, Y.jsxs)($, {
      title: o,
      titleId: w,
      children: [x && (0, Y.jsx)(Wi, {}), n],
    });
  }
  let E = S.password.eStatus;
  switch (E) {
    case 13:
      return e.renderLoading
        ? (0, Y.jsx)(Y.Fragment, { children: e.renderLoading() })
        : (0, Y.jsx)(da, {});
    case 5:
    case 11:
    case 3:
    case 10:
      return (
        p(
          !!S.password.strAccountName,
          `Missing account name in login session for status`,
          E,
        ),
        (0, Y.jsx)(ga, {
          type: E === 5 || E === 11 ? `mobile` : `email`,
          onSubmitCode: S.password.addCode,
          status: E,
          associatedLabel: S.password.strConfirmationAssociatedMessage,
          accountName: S.password.strAccountName,
          onBack: S.password.goBack,
          onCodeHelp: e.onCodeHelp,
        })
      );
    case 6:
    case 4:
      return (
        p(
          !!S.password.strAccountName,
          `Missing account name in login session for status`,
          E,
        ),
        (0, Y.jsx)(Ta, {
          type: E === 6 ? `mobile` : `email`,
          accountName: S.password.strAccountName,
          onUseCodeOverride: S.password.useCodeOverride,
          onCodeHelp: e.onCodeHelp,
        })
      );
    case 16:
      return (0, Y.jsx)(ha, { reset: S.password.reset });
    case 15:
      return (0, Y.jsx)(ma, {
        reset: S.password.reset,
        failure: S.password.eFailureState,
        onRequestOffline: S.onTryOffline,
        errorReference: S.password.strErrorReference,
        extendedErrorMessage: S.password.strExtendedErrorMessage,
      });
    case 14:
      return (0, Y.jsx)($, { compact: !0, children: o() });
    default:
      return (
        V(`Unknown Phase: ${E}`),
        (0, Y.jsx)(ma, {
          reset: S.password.reset,
          failure: U.Generic,
          onRequestOffline: S.onTryOffline,
          errorReference: S.password.strErrorReference,
          extendedErrorMessage: S.password.strExtendedErrorMessage,
        })
      );
  }
}
function Ui(e) {
  if (!e.refreshInfo) return null;
  let t;
  switch (e.refreshInfo?.reason ?? 2) {
    case 2:
    case 7:
    default:
      t = `#Login_RefreshReason_Generic`;
      break;
    case 6:
      t = `#Login_RefreshReason_LoggedInElsewhere`;
      break;
    case 34:
      t = `#Login_RefreshReason_LogonSessionReplaced`;
      break;
    case 5:
      t = `#Login_RefreshReason_InvalidPassword`;
      break;
    case 26:
      t = `#Login_RefreshReason_Revoked`;
      break;
    case 27:
      t = `#Login_RefreshReason_Expired`;
      break;
    case 49:
      t = `#Login_RefreshReason_PasswordRequiredToKickSession`;
      break;
    case 43:
      t = `#Login_RefreshReason_AccountDisabled`;
      break;
    case 69:
      t = `#Login_RefreshReason_ParentalControlRestricted`;
      break;
    case 84:
      t = `#Login_RefreshReason_RateLimitExceeded`;
  }
  return (0, Y.jsxs)(`div`, {
    className: Wr,
    children: [
      (0, Y.jsx)(`div`, {
        className: Pr,
        children: g.Localize(`#Login_RefreshSignIn`),
      }),
      (0, Y.jsx)(`div`, { className: Fr, children: g.Localize(t) }),
    ],
  });
}
function Wi() {
  return (0, Y.jsx)(`div`, {
    className: Wn,
    children: g.Localize(`#Login_ConfirmCredentials`),
  });
}
function Gi(e) {
  let {
      onSubmit: t,
      status: n,
      autoFocus: r,
      refreshInfo: i,
      strAccountName: a,
      onAccountNameChange: o,
      strPassword: s,
      onPasswordChange: c,
      bRememberMe: l,
      onRememberMeChange: u,
      secureComputer: d = !0,
    } = e,
    [f, p] = (0, G.useState)(!1),
    m = X(),
    h = La(),
    v = () => {
      t().then(() => {
        h() && p(!1);
      });
    },
    y = n === 1 || n === 13,
    b = n === 2 && !f,
    x = b
      ? (0, Y.jsx)(ua, { children: g.Localize(`#Login_CheckCredentials`) })
      : (0, Y.jsx)(ua, { children: `\xA0` }),
    S = r && !a,
    C = r && !!a,
    w = !!e.refreshInfo,
    T = (0, G.useId)(),
    E = (0, G.useId)();
  return (0, Y.jsxs)(Ea, {
    onSubmit: v,
    className: nr,
    children: [
      (0, Y.jsx)($i, {
        tone: b ? `danger` : void 0,
        label: (0, Y.jsx)(ea, {
          highlight: !0,
          inputId: T,
          children: g.Localize(`#Login_SignIn_WithAccountName`),
        }),
        value: a,
        onChange: (e) => {
          (p(!0), o(e));
        },
        autoFocus: S,
        disabled: w,
        id: T,
      }),
      (0, Y.jsx)($i, {
        tone: b ? `danger` : void 0,
        label: (0, Y.jsx)(ea, {
          inputId: E,
          children: g.Localize(`#Login_Password`),
        }),
        value: s,
        onChange: (e) => {
          (p(!0), c(e));
        },
        type: `password`,
        autoFocus: C,
        id: E,
      }),
      d
        ? (0, Y.jsx)(ra, {
            label: g.Localize(`#Login_RememberMe_Short`),
            title: g.Localize(`#Login_RememberMe_Tooltip`),
            value: l,
            onChange: u,
          })
        : (0, Y.jsx)(`div`, {
            className: Ir,
            children: g.Localize(`#Login_InsecureComputer`),
          }),
      (0, Y.jsx)(aa, { loading: y, refreshLogin: w }),
      x,
      !m &&
        (0, Y.jsx)(Z, {
          href: `${_.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
          align: `center`,
          children: g.Localize(`#Login_Help_SignIn`),
        }),
    ],
  });
}
var Ki = 700;
function qi(e) {
  let t = T(),
    [n, r] = (0, G.useState)(!1);
  return (
    (0, G.useLayoutEffect)(() => {
      r(t.ownerWindow.screen.width < Ki);
    }, [t.ownerWindow]),
    h(t.ownerWindow, `resize`, () => {
      r(t.ownerWindow.screen.width < Ki);
    }),
    (0, Y.jsx)(`div`, {
      className: Gn,
      children: n ? (0, Y.jsx)(Xi, { ...e }) : (0, Y.jsx)(Yi, { ...e }),
    })
  );
}
function Ji(e) {
  let t =
    _.STORE_BASE_URL +
    `join/?guest=1&purchaseType=gift&checkout=1&redir=` +
    encodeURIComponent(e.redirectURL);
  return (0, Y.jsx)(`div`, {
    className: Bn,
    children: (0, Y.jsx)($, {
      compact: !0,
      children: (0, Y.jsxs)(`div`, {
        className: zn,
        children: [
          (0, Y.jsx)(`div`, {
            className: Hn,
            children: x(
              g.Localize(`#Login_Guest`),
              (0, Y.jsx)(`a`, {
                href: `${t}`,
                style: { textDecoration: `underline` },
              }),
            ),
          }),
          (0, Y.jsx)(`a`, {
            className: Un,
            href: `${t}`,
            children: (0, Y.jsx)(`button`, {
              className: fr,
              children: g.Localize(`#Login_GuestContinue`),
            }),
          }),
        ],
      }),
    }),
  });
}
function Yi(e) {
  return (0, Y.jsx)(Qi, { ...e });
}
function Xi(e) {
  let [t, n] = (0, G.useState)(!1);
  return t
    ? (0, Y.jsx)(Qi, { ...e, bShowHideButton: !0, setShowQR: n })
    : (0, Y.jsx)(Zi, { setShowQR: n });
}
function Zi(e) {
  return (0, Y.jsxs)(`div`, {
    className: Kn,
    children: [
      (0, Y.jsx)(`div`, {
        className: qn,
        children: g.Localize(`#Login_MobileFlow_New`),
      }),
      (0, Y.jsx)(`div`, {
        className: Jn,
        children: (0, Y.jsx)(`div`, {
          className: Jn,
          children: g.Localize(`#Login_MobileFlow_SignIn_ScanQR`),
        }),
      }),
      (0, Y.jsx)(`button`, {
        type: `button`,
        className: Yn,
        onClick: () => e.setShowQR(!0),
        children: g.Localize(`#Login_MobileFlow_ShowMeQR_Button`),
      }),
      (0, Y.jsx)(`a`, {
        href: `${_.STORE_BASE_URL}mobile`,
        className: Xn,
        children: g.Localize(`#Login_JoinBeta_Button`),
      }),
    ],
  });
}
function Qi(e) {
  let {
    onQRStatusChange: t,
    transport: n,
    onComplete: r,
    platform: i,
    refreshInfo: a,
    preloadedQRSession: o,
    bShowHideButton: s = !1,
    setShowQR: c,
  } = e;
  return (0, Y.jsxs)(`div`, {
    className: Zn,
    children: [
      (0, Y.jsx)(ea, {
        highlight: !0,
        children: g.Localize(`#Login_SignIn_OrWithQRCode`),
      }),
      (0, Y.jsx)(`div`, {
        className: Qn,
        children: (0, Y.jsx)(Oi, {
          onStatusChange: t,
          transport: n,
          onComplete: r,
          platform: i,
          refreshInfo: a,
          preloadedSession: o,
        }),
      }),
      s &&
        c &&
        (0, Y.jsx)(`button`, {
          type: `button`,
          className: `X1WW6U5nVKQ-`,
          onClick: () => c(!1),
          children: g.Localize(`#Button_Hide`),
        }),
      (0, Y.jsx)(`div`, {
        className: $n,
        children: x(
          g.Localize(`#Login_UseMobileAppForQR_Inline`),
          (0, Y.jsx)(Z, { href: `${_.STORE_BASE_URL}mobile`, align: `center` }),
        ),
      }),
    ],
  });
}
function $i(e) {
  let { label: t, error: n, tone: r, autoFocus: i, id: a, ...o } = e,
    s = r ?? (n ? `danger` : void 0);
  return (0, Y.jsxs)(`div`, {
    className: er,
    children: [
      typeof t == `string` ? (0, Y.jsx)(ea, { inputId: a, children: t }) : t,
      n && (0, Y.jsx)(na, { type: `error`, children: n }),
      (0, Y.jsx)(ta, { autoFocus: i, tone: s, id: a, ...o }),
    ],
  });
}
function ea(e) {
  let { children: t, inputId: n, highlight: r } = e;
  return (0, Y.jsx)(`label`, {
    className: (0, J.default)(rr, r && `jAjiX6ujKzY-`),
    htmlFor: n,
    children: t,
  });
}
function ta(e) {
  let {
    value: t,
    onChange: n,
    type: r = `text`,
    tone: i,
    className: a,
    autoFocus: o,
    disabled: s,
    id: c,
  } = e;
  return (0, Y.jsx)(`input`, {
    value: t,
    type: r,
    autoFocus: o,
    onChange: (e) => n(e.target.value),
    className: (0, J.default)(tr, i === `danger` && `kbZo38RXgJ0-`, a),
    disabled: s,
    id: c,
  });
}
function na(e) {
  let { children: t, type: n } = e;
  return (0, Y.jsx)(`div`, {
    className: (0, J.default)(void 0, n === `error` && void 0),
    children: t,
  });
}
function ra(e) {
  let { label: t, title: n, onChange: r, value: i } = e,
    a = () => {
      r && r(!i);
    },
    o = (0, G.useId)();
  return (0, Y.jsxs)(`div`, {
    role: `presentation`,
    className: ir,
    title: n,
    onClick: a,
    onKeyPress: (e) => {
      e.key == ` ` && (a(), e.preventDefault());
    },
    children: [
      (0, Y.jsx)(ia, { labelledBy: o, value: i }),
      (0, Y.jsx)(`label`, { id: o, className: ar, children: t }),
    ],
  });
}
function ia(e) {
  let { value: t, labelledBy: n } = e;
  return (0, Y.jsx)(`div`, {
    tabIndex: 0,
    className: or,
    "aria-labelledby": n,
    role: `checkbox`,
    "aria-checked": t,
    children:
      t &&
      (0, Y.jsx)(`div`, {
        className: `GHsuNp6HqyY-`,
        children: (0, Y.jsx)(ai, { strokeWidth: 35 }),
      }),
  });
}
function aa(e) {
  let { refreshLogin: t, ...n } = e;
  return t &&
    `SteamClient` in globalThis &&
    `User` in SteamClient &&
    `StartShutdown` in SteamClient.User
    ? (0, Y.jsx)(sa, {})
    : (0, Y.jsx)(oa, { ...n });
}
function oa(e) {
  return (0, Y.jsx)(`div`, {
    className: cr,
    children: (0, Y.jsx)(ca, { ...e, children: g.Localize(`#Login_SignIn`) }),
  });
}
function sa() {
  return (0, Y.jsxs)(`div`, {
    className: sr,
    children: [
      (0, Y.jsx)(`button`, {
        className: pr,
        type: `submit`,
        children: g.Localize(`#Login_SignIn`),
      }),
      (0, Y.jsx)(`button`, {
        className: lr,
        onClick: () => SteamClient.User.StartShutdown(!0),
        children: g.Localize(`#Login_ExitSteam`),
      }),
    ],
  });
}
function ca(e) {
  return (0, Y.jsx)(la, { type: `submit`, ...e });
}
function la(e) {
  let { className: t, loading: n, disabled: r, children: i, ...a } = e,
    o = r || n;
  return (0, Y.jsxs)(`button`, {
    className: (0, J.default)(pr, n && `QAA-fChDQFA-`, t),
    disabled: o,
    ...a,
    children: [
      i,
      n &&
        (0, Y.jsx)(`div`, {
          className: `_7C2-lQ9GWRA-`,
          children: (0, Y.jsx)(fa, { size: `small` }),
        }),
    ],
  });
}
function ua(e) {
  let t = e.children || `\xA0`;
  return (0, Y.jsx)(`div`, { className: hr, children: t });
}
function da() {
  return (0, Y.jsx)($, {
    compact: !0,
    children: (0, Y.jsxs)(Q, {
      alignItems: `center`,
      className: (0, J.default)($r, _.IN_STEAMUI && `ZV64fnc7PdA-`),
      children: [
        (0, Y.jsx)(c, { size: `xlarge` }),
        (0, Y.jsx)(`div`, {
          className: (0, J.default)(br),
          children: g.Localize(
            _.IN_STEAMUI
              ? `#Login_ConnectingToSteam`
              : `#Login_LoadingAccountInfo`,
          ),
        }),
      ],
    }),
  });
}
function fa(e) {
  let { size: t } = e;
  return (0, Y.jsx)(`div`, {
    className: (0, J.default)(
      Qr,
      t == `small` && `-GciojHJFJo-`,
      (t == `medium` || !t) && `aNnjBlEgXeE-`,
      t == `large` && `SkijseWcXzM-`,
    ),
  });
}
function pa(e) {
  return (0, Y.jsx)(`div`, {
    className: Zr,
    children: (0, Y.jsx)(`button`, {
      className: ur,
      onClick: e.onRequestOffline,
      children: g.Localize(`#Login_GoOffline_Button`),
    }),
  });
}
function ma(e) {
  let {
      reset: t,
      failure: n,
      onRequestOffline: r,
      errorReference: i,
      extendedErrorMessage: a,
    } = e,
    { title: o, description: s } = In(n, a),
    c = _.IN_STEAMUI && n == U.Network;
  return (0, Y.jsxs)($, {
    compact: !0,
    children: [
      (0, Y.jsxs)(Q, {
        alignItems: `center`,
        gap: 12,
        children: [
          (0, Y.jsx)(`div`, { className: Jr, children: o }),
          (0, Y.jsx)(`div`, { className: Yr, children: s }),
          c &&
            (0, Y.jsx)(`div`, {
              className: `sH-b0kW7QCY-`,
              children: g.Localize(`#Login_GoOffline_Description`),
            }),
          (0, Y.jsxs)(Da, {
            className: Xr,
            children: [
              (0, Y.jsx)(la, {
                className: dr,
                onClick: t,
                children: g.Localize(`#Button_Retry`),
              }),
              c && r && (0, Y.jsx)(pa, { onRequestOffline: r }),
            ],
          }),
        ],
      }),
      i &&
        (0, Y.jsx)(`div`, {
          className: `La0SBF0lXr0-`,
          children: g.Localize(`#Login_Error_Reference`, i),
        }),
    ],
  });
}
function ha(e) {
  let { reset: t } = e;
  return (0, Y.jsx)(ma, { reset: t, failure: U.Generic });
}
function ga(e) {
  let {
      type: t,
      onSubmitCode: n,
      status: r,
      accountName: i,
      associatedLabel: a,
      onBack: o,
    } = e,
    [s, c] = (0, G.useState)([]),
    [l, u] = (0, G.useState)(!1),
    [d, f] = (0, G.useState)(!1),
    [p, m] = (0, G.useState)(!1),
    [h, _] = (0, G.useState)(0),
    v = t === `mobile`,
    y = s.join(``),
    b = kn(y, p),
    x = (e) => {
      (f(!0),
        n(e).then(() => {
          (u(!1), f(!1));
        }));
    },
    S = (e) => {
      (l || u(!0), c(e));
      let t = e.join(``);
      kn(t, p) && x(t);
    },
    C = () => {
      b && x(y);
    },
    w = () => {
      (m(!p), c([]), n(``), _(h + 1));
    },
    T = !l && (r === 11 || r === 10),
    E,
    D;
  return (
    p
      ? t === `mobile`
        ? ((D = (0, Y.jsx)(va, {})), (E = `#Login_UseMobileCode`))
        : ((D = (0, Y.jsx)(va, {})), (E = `#Login_UseEmailCode`))
      : ((D =
          t === `mobile`
            ? (0, Y.jsx)(ya, {})
            : (0, Y.jsx)(ba, { emailAddress: a })),
        (E = `#Login_UseBackupCode`)),
    (0, Y.jsx)($, {
      title: (0, Y.jsx)(Aa, {}),
      compact: !0,
      children: (0, Y.jsx)(Ea, {
        onSubmit: C,
        children: (0, Y.jsxs)(Q, {
          alignItems: `center`,
          gap: 14,
          children: [
            (0, Y.jsx)(xa, { type: t, accountName: i }),
            (0, Y.jsxs)(`div`, {
              className: Cr,
              children: [
                (0, Y.jsxs)(Q, {
                  alignItems: `center`,
                  gap: 2,
                  children: [
                    T &&
                      (0, Y.jsx)(ua, {
                        children: g.Localize(`#Login_IncorrectSteamGuard`),
                      }),
                    (0, Y.jsx)(
                      Oa,
                      {
                        value: s,
                        onChange: S,
                        tone: T ? `danger` : void 0,
                        loading: d,
                        backupCode: p,
                      },
                      h,
                    ),
                  ],
                }),
                D,
              ],
            }),
            v &&
              (0, Y.jsx)(Z, {
                onClick: w,
                align: `center`,
                children: g.Localize(E),
              }),
            (0, Y.jsx)(_a, { type: t, onCodeHelp: e.onCodeHelp }),
          ],
        }),
      }),
    })
  );
}
function _a(e) {
  if (s()) return null;
  let t, n;
  return (
    e.type === `mobile`
      ? ((t = `${_.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
        (n = g.Localize(`#Login_Help_AccessMobileApp`)))
      : ((t = `${_.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
        (n = g.Localize(`#Login_Help_AccessEmail`))),
    e.onCodeHelp
      ? (0, Y.jsx)(Z, {
          onClick: () => e.onCodeHelp(t),
          align: `center`,
          children: n,
        })
      : (0, Y.jsx)(Z, { href: t, align: `center`, children: n })
  );
}
function va() {
  return (0, Y.jsx)(Da, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Or,
    children: (0, Y.jsxs)(Q, {
      children: [
        (0, Y.jsx)(`div`, {
          className: jr,
          children: g.Localize(`#Login_EnterBackupCode`),
        }),
        (0, Y.jsx)(`div`, {
          className: vr,
          children: g.Localize(`#Login_EnterBackupCodeDescription`),
        }),
      ],
    }),
  });
}
function ya() {
  return (0, Y.jsxs)(Da, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: kr,
    children: [
      (0, Y.jsx)(`div`, {
        className: jr,
        children: g.Localize(`#Login_EnterMobileCode`),
      }),
      (0, Y.jsx)(Ca, { className: wr }),
    ],
  });
}
function ba(e) {
  return (0, Y.jsxs)(Da, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Ar,
    children: [
      (0, Y.jsx)(ka, {
        align: `center`,
        spacing: 6,
        children: (0, Y.jsx)(`div`, {
          className: Mr,
          children: g.LocalizeReact(
            `#Login_EnterEmailCode`,
            (0, Y.jsx)(`span`, { className: Nr, children: e.emailAddress }),
          ),
        }),
      }),
      (0, Y.jsx)(wa, { className: Tr }),
    ],
  });
}
function xa(e) {
  let { accountName: t, type: n } = e,
    r =
      n === `mobile`
        ? g.Localize(`#Login_MobileProtectingAccount`)
        : g.Localize(`#Login_EmailProtectingAccount`),
    i = X();
  return (0, Y.jsxs)(`div`, {
    className: _r,
    children: [
      (0, Y.jsx)(`div`, {
        className: vr,
        children: g.LocalizeReact(
          `#Login_ActiveAccountName`,
          (0, Y.jsx)(`span`, { className: yr, children: t }),
        ),
      }),
      !i && (0, Y.jsx)(`div`, { className: `DSy9L5eaj5o-`, children: r }),
    ],
  });
}
function Sa() {
  return (0, Y.jsx)(Q, {
    alignItems: `center`,
    children: (0, Y.jsxs)(`div`, {
      className: xr,
      children: [
        (0, Y.jsx)(`img`, { src: f(oi), alt: `` }),
        (0, Y.jsx)(`div`, {
          className: Sr,
          children: x(g.Localize(`#Login_AwaitingMobileConfirmation`)),
        }),
      ],
    }),
  });
}
function Ca(e) {
  return (0, Y.jsxs)(`svg`, {
    viewBox: `0 0 33 49`,
    fill: `currentColor`,
    className: e.className,
    children: [
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z`,
      }),
    ],
  });
}
function wa(e) {
  return (0, Y.jsx)(`svg`, {
    viewBox: `0 0 58 56`,
    fill: `none`,
    className: e.className,
    children: (0, Y.jsx)(`path`, {
      d: `M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z`,
      fill: `#1A99FF`,
    }),
  });
}
function Ta(e) {
  let { type: t, accountName: n, onUseCodeOverride: r } = e,
    i = X(),
    a = (0, Y.jsx)(_a, { type: `mobile`, onCodeHelp: e.onCodeHelp }),
    o = i
      ? (0, Y.jsx)(`div`, {
          style: { paddingBottom: `20px` },
          children: (0, Y.jsx)(Z, {
            align: `center`,
            onClick: r,
            children: g.Localize(`#Login_EnterCodeInstead`),
          }),
        })
      : (0, Y.jsx)(`div`, {
          className: Dr,
          children: (0, Y.jsx)(Z, {
            align: `center`,
            onClick: r,
            children: g.Localize(`#Login_EnterCodeInstead`),
          }),
        });
  return (0, Y.jsx)($, {
    title: (0, Y.jsx)(Aa, {}),
    compact: !0,
    children: (0, Y.jsxs)(Q, {
      gap: _.IN_STEAMUI ? 24 : 40,
      children: [
        (0, Y.jsx)(xa, { type: t, accountName: n }),
        (0, Y.jsx)(Sa, {}),
        (0, Y.jsxs)(`div`, { className: Er, children: [o, a] }),
      ],
    }),
  });
}
function Z(e) {
  let { children: t, align: n, inline: r } = e,
    i = (0, J.default)(mr, n === `center` && `p1pxbjr1kTM-`);
  if (`href` in e) {
    let n = _.IN_STEAMUI ? `steam://openurl_external/${e.href}` : e.href;
    return (0, Y.jsx)(`a`, { className: i, href: n, children: t });
  }
  return (0, Y.jsx)(r ? `span` : `div`, {
    className: i,
    onClick: e.onClick,
    children: t,
  });
}
function Ea(e) {
  let { onSubmit: t, children: n, className: r } = e;
  return (0, Y.jsx)(`form`, {
    onSubmit: (e) => (e.preventDefault(), t(), !1),
    className: r,
    children: n,
  });
}
function Q(e) {
  let {
      alignItems: t,
      justifyContent: n,
      gap: r,
      className: i,
      ariaLabelledBy: a,
      children: o,
    } = e,
    s = (0, J.default)(
      gr,
      t === `center` && `mQfJWqZo0U8-`,
      n === `center` && `h53Pyn--gk4-`,
      i,
    ),
    c = r ? { gap: typeof r == `number` ? `${r}px` : r } : void 0;
  return (0, Y.jsx)(`section`, {
    className: s,
    style: c,
    "aria-labelledby": a,
    children: o,
  });
}
function Da(e) {
  let { children: t, justifyContent: n, alignItems: r, className: i } = e;
  return (0, Y.jsx)(`div`, {
    style: {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: n,
      alignItems: r,
    },
    className: i,
    children: t,
  });
}
function Oa(e) {
  let { onChange: t, backupCode: n = !1, ...r } = e;
  return (0, Y.jsx)(ni, {
    length: Dn(n),
    backupCode: n,
    onChange: (e) => {
      ((e = e.map((e) => e.toUpperCase())), On(e.join(``).trim(), n) && t(e));
    },
    autoFocus: !0,
    ...r,
    allowCharacter: (e) => /\w/g.test(e),
  });
}
function ka(e) {
  let { children: t, spacing: n = 0, align: r } = e;
  return (0, Y.jsx)(Q, {
    alignItems: r,
    children: G.Children.map(t, (e, t) =>
      e
        ? (0, Y.jsx)(`div`, {
            style: t > 0 ? { paddingTop: `${n}px` } : void 0,
            children: e,
          })
        : null,
    )?.filter(Boolean),
  });
}
function $(e) {
  let { title: t, titleId: n, children: r, compact: i } = e,
    a = X(),
    o = (0, G.useId)();
  return (0, Y.jsxs)(Q, {
    gap: _.IN_STEAMUI ? 0 : 32,
    className: (0, J.default)(
      Vn,
      a && `rvRWTXNBcK4-`,
      i && `L35Fcv9fbYo-`,
      _.IN_STEAMUI && `IN_CLIENT`,
    ),
    ariaLabelledBy: n ?? o,
    children: [
      typeof t == `string`
        ? (0, Y.jsx)(`div`, { className: Lr, id: n ?? o, children: t })
        : t,
      (0, Y.jsx)(`div`, { className: Rr, children: r }),
    ],
  });
}
function Aa(e) {
  let {
    realm: t = _.EREALM,
    launcherType: n = v()?.LAUNCHER_TYPE,
    className: r = zr,
  } = e;
  return n === 8
    ? (0, Y.jsx)(`div`, { className: r })
    : (0, Y.jsxs)(`div`, {
        className: Br,
        children: [
          (0, Y.jsx)(ja, { onBack: e.onBack }),
          t === te.k_ESteamRealmChina
            ? (0, Y.jsx)(Na, { className: r })
            : (0, Y.jsx)(Ma, { className: r }),
          ` `,
        ],
      });
}
function ja(e) {
  return e.onBack
    ? (0, Y.jsx)(`button`, {
        type: `button`,
        className: Vr,
        onClick: e.onBack,
        "aria-label": g.Localize(`#Button_Back`),
        children: (0, Y.jsx)(ii, { className: Hr }),
      })
    : null;
}
function Ma(e) {
  return (0, Y.jsxs)(`svg`, {
    viewBox: `0 0 153 46`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e.className,
    children: [
      (0, Y.jsx)(`path`, {
        d: `M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z`,
        fill: `#E0E1E6`,
      }),
      (0, Y.jsx)(`path`, {
        d: `M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z`,
        fill: `#E0E1E6`,
      }),
      (0, Y.jsx)(`path`, {
        d: `M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z`,
        fill: `#E0E1E6`,
      }),
      (0, Y.jsx)(`path`, {
        d: `M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z`,
        fill: `#E0E1E6`,
      }),
      (0, Y.jsx)(`path`, {
        d: `M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z`,
        fill: `#E0E1E6`,
      }),
      (0, Y.jsx)(`path`, {
        d: `M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z`,
        fill: `#E0E1E6`,
      }),
      (0, Y.jsx)(`path`, {
        d: `M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z`,
        fill: `#E0E1E6`,
      }),
      (0, Y.jsx)(`path`, {
        d: `M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z`,
        fill: `#E0E1E6`,
      }),
      (0, Y.jsx)(`path`, {
        d: `M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z`,
        fill: `#E0E1E6`,
      }),
    ],
  });
}
function Na(e) {
  return (0, Y.jsxs)(`svg`, {
    viewBox: `0 0 232.73 46.07`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e.className,
    fill: `#E0E1E6`,
    children: [
      (0, Y.jsxs)(`g`, {
        stroke: `null`,
        id: `svg_2`,
        children: [
          (0, Y.jsx)(`path`, {
            stroke: `null`,
            id: `svg_3`,
            d: `m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037`,
          }),
          (0, Y.jsx)(`path`, {
            stroke: `null`,
            id: `svg_4`,
            d: `m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836`,
          }),
          (0, Y.jsx)(`path`, {
            stroke: `null`,
            id: `svg_5`,
            d: `m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287`,
          }),
        ],
      }),
      (0, Y.jsx)(`path`, {
        stroke: `null`,
        id: `svg_6`,
        d: `m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z`,
      }),
      (0, Y.jsxs)(`g`, {
        id: `svg_7`,
        children: [
          (0, Y.jsx)(`path`, {
            id: `svg_8`,
            d: `m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z`,
          }),
          (0, Y.jsx)(`path`, {
            id: `svg_9`,
            d: `m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z`,
          }),
          (0, Y.jsx)(`path`, {
            id: `svg_10`,
            d: `m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z`,
          }),
          (0, Y.jsx)(`path`, {
            id: `svg_11`,
            d: `m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z`,
          }),
        ],
      }),
      (0, Y.jsxs)(`g`, {
        id: `svg_12`,
        children: [
          (0, Y.jsx)(`path`, {
            id: `svg_13`,
            d: `m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z`,
          }),
          (0, Y.jsx)(`path`, {
            id: `svg_14`,
            d: `m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z`,
          }),
        ],
      }),
    ],
  });
}
function Pa() {
  return (0, Y.jsx)(Q, {
    alignItems: `center`,
    justifyContent: `center`,
    children: (0, Y.jsx)(c, {}),
  });
}
function Fa(e) {
  let t = (0, G.useRef)(e);
  ((t.current = e),
    (0, G.useEffect)(() => {
      new URLSearchParams(location.search).get(`need_password`) ||
        (t.current &&
          Ia(t.current).catch((e) => {
            mn(`PerformRefresh exception`, e);
          }));
    }, [t]));
}
async function Ia(e) {
  let t = new FormData();
  t.append(`redir`, e);
  let n = `${_.LOGIN_BASE_URL}jwt/ajaxrefresh`,
    r = await H.default.post(n, t, { timeout: 1e4, withCredentials: !0 });
  if (r.status !== 200 || !r?.data?.success) return !1;
  let { success: i, login_url: a, error: o, ...s } = r.data,
    c = new FormData();
  Object.entries(s).forEach(([e, t]) => c.append(e, t));
  let l = await H.default.post(a, c),
    u = l.status === 200 && l.data.result === 1;
  return (u && window.location.assign(e), u);
}
function La() {
  let e = (0, G.useRef)(!0);
  return (
    (0, G.useEffect)(
      () => () => {
        e.current = !1;
      },
      [e],
    ),
    (0, G.useCallback)(() => e.current, [e])
  );
}
export { vn as i, Fi as n, Ji as r, Ii as t };
