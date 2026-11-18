/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import {
  Ft as t,
  G as n,
  K as r,
  at as i,
  ot as a,
} from "./chunk~01cfc309bf.js";
import { G as o } from "./chunk~b986e50637.js";
import { t as s } from "./chunk~eefd71512b.js";
import { _ as c } from "./chunk~05a38bc848.js";
import { t as l } from "./chunk~9d71b14b50.js";
import {
  Gi as u,
  Ki as d,
  Rt as f,
  Ru as p,
  Ui as m,
  Uo as ee,
  Vs as te,
  Wi as ne,
  cm as h,
  ea as re,
  pm as ie,
  qi as ae,
} from "./main.js";
function g(e, t, n, r, i) {
  return oe(
    t,
    ((e, t) => {
      let n = e[t];
      if (n === void 0) throw TypeError(ss(t));
      return n;
    })(e, t),
    n,
    r,
    i,
  );
}
function oe(e, t, n, r, i, a) {
  let o = Ce(t, n, r);
  if (i && t !== o) throw RangeError(as(e, t, n, r, a));
  return o;
}
function _(e) {
  return e !== null && /object|function/.test(typeof e);
}
function v(e, t = Map) {
  let n = new t();
  return (t, ...r) => {
    if (n.has(t)) return n.get(t);
    let i = e(t, ...r);
    return (n.set(t, i), i);
  };
}
function se(e) {
  return ce({ name: e }, 1);
}
function ce(e, t) {
  return fe((e) => ({ value: e, configurable: 1, writable: !t }), e);
}
function le(e) {
  return fe((e) => ({ get: e, configurable: 1 }), e);
}
function ue(e) {
  return { [Symbol.toStringTag]: { value: e, configurable: 1 } };
}
function de(e, t) {
  let n = {},
    r = e.length;
  for (let i of t) n[e[--r]] = i;
  return n;
}
function fe(e, t, n) {
  let r = {};
  for (let i in t) r[i] = e(t[i], i, n);
  return r;
}
function pe(e, t, n) {
  let r = {};
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    r[a] = e(a, i, n);
  }
  return r;
}
function me(e, t, n) {
  let r = {};
  for (let i = 0; i < e.length; i++) r[t[i]] = n[e[i]];
  return r;
}
function y(e, t) {
  let n = Object.create(null);
  for (let r of e) n[r] = t[r];
  return n;
}
function he(e, t) {
  for (let n of t) if (n in e) return 1;
  return 0;
}
function ge(e, t, n) {
  for (let r of e) if (t[r] !== n[r]) return 0;
  return 1;
}
function _e(e, t, n) {
  let r = { ...n };
  for (let n = 0; n < t; n++) r[e[n]] = 0;
  return r;
}
function b(e, ...t) {
  return (...n) => e(...t, ...n);
}
function ve() {}
function ye(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function be(e) {
  return e.slice().sort();
}
function xe(e, t) {
  return String(t).padStart(e, `0`);
}
function Se(e, t) {
  return Math.sign(e - t);
}
function Ce(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function we(e, t) {
  return [Math.floor(e / t), Te(e, t)];
}
function Te(e, t) {
  return ((e % t) + t) % t;
}
function Ee(e, t) {
  return [De(e, t), Oe(e, t)];
}
function De(e, t) {
  return Math.trunc(e / t) || 0;
}
function Oe(e, t) {
  return e % t || 0;
}
function ke(e) {
  return Math.abs(e % 1) === 0.5;
}
function Ae(e, t, n) {
  let r = 0,
    i = 0;
  for (let a = 0; a <= t; a++) {
    let t = e[n[a]],
      o = tc[a],
      [s, c] = Ee(t, L / o);
    ((r += c * o), (i += s));
  }
  let [a, o] = Ee(r, L);
  return [i + a, o];
}
function je(e, t, n) {
  let r = {};
  for (let i = t; i >= 0; i--) {
    let t = tc[i];
    ((r[n[i]] = De(e, t)), (e = Oe(e, t)));
  }
  return r;
}
function Me(e) {
  if (e !== void 0) return z(e);
}
function Ne(e) {
  if (e !== void 0) return Fe(e);
}
function Pe(e) {
  if (e !== void 0) return Ie(e);
}
function Fe(e) {
  return Ve(Ie(e));
}
function Ie(e) {
  return Be(Ec(e));
}
function Le(e, t) {
  if (t == null) throw RangeError(ss(e));
  return t;
}
function Re(e) {
  if (!_(e)) throw TypeError(is);
  return e;
}
function ze(e, t, n = e) {
  if (typeof t !== e) throw TypeError(os(n, t));
  return t;
}
function Be(e, t = `number`) {
  if (!Number.isInteger(e)) throw RangeError(Qo(t, e));
  return e || 0;
}
function Ve(e, t = `number`) {
  if (e <= 0) throw RangeError($o(t, e));
  return e;
}
function He(e) {
  if (typeof e == `symbol`) throw TypeError(rs);
  return String(e);
}
function Ue(e, t) {
  return _(e) ? String(e) : z(e, t);
}
function We(e) {
  if (typeof e == `string`) return BigInt(e);
  if (typeof e != `bigint`) throw TypeError(ns(e));
  return e;
}
function Ge(e, t = `number`) {
  if (typeof e == `bigint`) throw TypeError(ts(t));
  if (((e = Number(e)), !Number.isFinite(e))) throw RangeError(es(t, e));
  return e;
}
function x(e, t) {
  return Math.trunc(Ge(e, t)) || 0;
}
function Ke(e, t) {
  return Be(Ge(e, t), t);
}
function qe(e, t) {
  return Ve(x(e, t), t);
}
function Je(e, t) {
  let [n, r] = Ee(t, L),
    i = e + n,
    a = Math.sign(i);
  return (a && a === -Math.sign(r) && ((i -= a), (r += a * 864e11)), [i, r]);
}
function Ye(e, t, n = 1) {
  return Je(e[0] + t[0] * n, e[1] + t[1] * n);
}
function Xe(e, t) {
  return Je(e[0], e[1] + t);
}
function Ze(e, t) {
  return Ye(t, e, -1);
}
function S(e, t) {
  return Se(e[0], t[0]) || Se(e[1], t[1]);
}
function Qe(e, t, n) {
  return S(e, t) === -1 || S(e, n) === 1;
}
function $e(e, t = 1) {
  let n = BigInt(L / t);
  return [Number(e / n), Number(e % n) * t];
}
function et(e, t = 1) {
  let [n, r] = Ee(e, L / t);
  return [n, r * t];
}
function tt(e, t = 1) {
  let [n, r] = e,
    i = Math.floor(r / t),
    a = L / t;
  return BigInt(n) * BigInt(a) + BigInt(i);
}
function nt(e, t = 1, n) {
  let [r, i] = e,
    [a, o] = Ee(i, t);
  return (L / t) * r + (a + (n ? o / t : 0));
}
function rt(e) {
  return e[0] + e[1] / L;
}
function it(e, t, n = we) {
  let [r, i] = e,
    [a, o] = n(i, t);
  return [(L / t) * r + a, o];
}
function at(e) {
  return (
    g(e, `isoYear`, Gc, Wc, 1),
    e.isoYear === Gc
      ? g(e, `isoMonth`, 4, 12, 1)
      : e.isoYear === Wc && g(e, `isoMonth`, 1, 9, 1),
    e
  );
}
function C(e) {
  return (w({ ...e, ...U, isoHour: 12 }), e);
}
function w(e) {
  let t = g(e, `isoYear`, Gc, Wc, 1),
    n = t === Gc ? 1 : t === Wc ? -1 : 0;
  return (
    n &&
      ot(E({ ...e, isoDay: e.isoDay + n, isoNanosecond: e.isoNanosecond - n })),
    e
  );
}
function ot(e) {
  if (!e || Qe(e, Uc, Hc)) throw RangeError(Ps);
  return e;
}
function st(e) {
  return Ae(e, 5, H)[1];
}
function ct(e) {
  let [t, n] = we(e, L);
  return [je(n, 5, H), t];
}
function lt(e) {
  return ut(e)[0];
}
function ut(e) {
  return it(e, Qs);
}
function T(e) {
  return pt(
    e.isoYear,
    e.isoMonth,
    e.isoDay,
    e.isoHour,
    e.isoMinute,
    e.isoSecond,
    e.isoMillisecond,
  );
}
function E(e) {
  let t = T(e);
  if (t !== void 0) {
    let [n, r] = Ee(t, I);
    return [n, r * Zs + (e.isoMicrosecond || 0) * Xs + (e.isoNanosecond || 0)];
  }
}
function dt(e, t) {
  let [n, r] = ct(st(e) - t);
  return ot(E({ ...e, isoDay: e.isoDay + r, ...n }));
}
function ft(...e) {
  return pt(...e) / Ys;
}
function pt(...e) {
  let [t, n] = mt(...e),
    r = t.valueOf();
  if (!isNaN(r)) return r - n * I;
}
function mt(e, t = 1, n = 1, r = 0, i = 0, a = 0, o = 0) {
  let s = e === Gc ? 1 : e === Wc ? -1 : 0,
    c = new Date();
  return (c.setUTCHours(r, i, a, o), c.setUTCFullYear(e, t - 1, n + s), [c, s]);
}
function ht(e, t) {
  let [n, r] = Xe(e, t);
  r < 0 && ((r += 864e11), --n);
  let [i, a] = we(r, Zs),
    [o, s] = we(a, Xs);
  return gt(n * I + i, o, s);
}
function gt(e, t = 0, n = 0) {
  let r = Math.ceil(Math.max(0, Math.abs(e) - Vc) / I) * Math.sign(e),
    i = new Date(e - r * I);
  return de(Fc, [
    i.getUTCFullYear(),
    i.getUTCMonth() + 1,
    i.getUTCDate() + r,
    i.getUTCHours(),
    i.getUTCMinutes(),
    i.getUTCSeconds(),
    i.getUTCMilliseconds(),
    t,
    n,
  ]);
}
function _t(e, t) {
  if (t < -Vc) throw RangeError(Ps);
  let n = e.formatToParts(t),
    r = {};
  for (let e of n) r[e.type] = e.value;
  return r;
}
function vt(e) {
  return e.isoDay;
}
function yt(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function bt(e, t) {
  return [t, 0];
}
function xt(e, t) {
  if (!t) return [Jc, e];
}
function St(e, t, n) {
  return { isoYear: e, isoMonth: t, isoDay: n };
}
function Ct() {
  return 7;
}
function wt() {
  return Yc;
}
function Tt(e, t) {
  switch (t) {
    case 2:
      return Dt(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Et(e) {
  return Dt(e) ? 366 : 365;
}
function Dt(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Ot(e) {
  let [t, n] = mt(e.isoYear, e.isoMonth, e.isoDay);
  return Te(t.getUTCDay() - n, 7) || 7;
}
function kt(e) {
  return this.id === bc
    ? (({ isoYear: e }) =>
        e < 1 ? [`gregory-inverse`, 1 - e] : [`gregory`, e])(e)
    : this.id === xc
      ? Zc(e)
      : [];
}
function At(e) {
  let t = T(e);
  if (t < Xc) {
    let { isoYear: t } = e;
    return t < 1 ? [`japanese-inverse`, 1 - t] : [`japanese`, t];
  }
  let { era: n, eraYear: r } = Sa(_t(su(xc), t), xc);
  return [n, r];
}
function jt(e) {
  return (Mt(e), Ft(e, 1), e);
}
function Mt(e) {
  return (Pt(e, 1), e);
}
function Nt(e) {
  return ge(Pc, e, Pt(e));
}
function Pt(e, t) {
  let { isoYear: n } = e,
    r = g(e, `isoMonth`, 1, wt(), t);
  return { isoYear: n, isoMonth: r, isoDay: g(e, `isoDay`, 1, Tt(n, r), t) };
}
function Ft(e, t) {
  return de(H, [
    g(e, `isoHour`, 0, 23, t),
    g(e, `isoMinute`, 0, 59, t),
    g(e, `isoSecond`, 0, 59, t),
    g(e, `isoMillisecond`, 0, 999, t),
    g(e, `isoMicrosecond`, 0, 999, t),
    g(e, `isoNanosecond`, 0, 999, t),
  ]);
}
function D(e) {
  return e === void 0 ? 0 : _l(Re(e));
}
function It(e, t = 0) {
  e = qt(e);
  let n = vl(e),
    r = yl(e, t);
  return [_l(e), r, n];
}
function Lt(e, t, n, r = 9, i = 0, a = 4) {
  t = qt(t);
  let o = hl(t, r, i),
    s = Wt(t),
    c = Cl(t, a),
    l = ml(t, r, i, 1);
  return (
    o == null ? (o = Math.max(n, l)) : Qt(o, l),
    (s = Gt(s, l, 1)),
    e && (c = ((e) => (e < 4 ? (e + 2) % 4 : e))(c)),
    [o, l, s, c]
  );
}
function Rt(e, t = 6, n) {
  let r = Wt((e = Jt(e, Qc))),
    i = Cl(e, 7),
    a = ml(e, t);
  return ((a = Le(Qc, a)), (r = Gt(r, a, void 0, n)), [a, r, i]);
}
function zt(e) {
  return bl(qt(e));
}
function Bt(e, t) {
  return Ht(qt(e), t);
}
function Vt(e) {
  let t = Zt(il, pl, Jt(e, il), 0);
  if (!t) throw RangeError(os(il, t));
  return t;
}
function Ht(e, t = 4) {
  let n = Kt(e);
  return [Cl(e, 4), ...Ut(ml(e, t), n)];
}
function Ut(e, t) {
  return e == null
    ? [t === void 0 ? 1 : 10 ** (9 - t), t]
    : [tc[e], e < 4 ? 9 - 3 * e : -1];
}
function Wt(e) {
  let t = e[tl];
  return t === void 0 ? 1 : x(t, tl);
}
function Gt(e, t, n, r) {
  let i = r ? L : tc[t + 1];
  if (i) {
    let n = tc[t];
    if (i % ((e = oe(tl, e, 1, i / n - +!r, 1)) * n))
      throw RangeError(os(tl, e));
  } else e = oe(tl, e, 1, n ? 10 ** 9 : 1, 1);
  return e;
}
function Kt(e) {
  let t = e[nl];
  if (t !== void 0) {
    if (typeof t != `number`) {
      if (He(t) === `auto`) return;
      throw RangeError(os(nl, t));
    }
    t = oe(nl, Math.floor(t), 0, 9, 1);
  }
  return t;
}
function qt(e) {
  return e === void 0 ? {} : Re(e);
}
function Jt(e, t) {
  return typeof e == `string` ? { [t]: e } : Re(e);
}
function Yt(e) {
  return { overflow: ol[e] };
}
function Xt(e, t, n = 9, r = 0, i) {
  let a = t[e];
  if (a === void 0) return i ? r : void 0;
  if (((a = He(a)), a === `auto`)) return i ? r : null;
  let o = qs[a];
  if ((o === void 0 && (o = jc[a]), o === void 0))
    throw RangeError(fs(e, a, qs));
  return (oe(e, o, r, n, 1, Js), o);
}
function Zt(e, t, n, r = 0) {
  let i = n[e];
  if (i === void 0) return r;
  let a = He(i),
    o = t[a];
  if (o === void 0) throw RangeError(fs(e, a, t));
  return o;
}
function Qt(e, t) {
  if (t > e) throw RangeError(Bs);
}
function $t(e) {
  return { branding: Al, epochNanoseconds: e };
}
function O(e, t, n) {
  return { branding: kl, calendar: n, timeZone: t, epochNanoseconds: e };
}
function k(e, t = e.calendar) {
  return { branding: Dl, calendar: t, ...y(Rc, e) };
}
function en(e, t = e.calendar) {
  return { branding: El, calendar: t, ...y(Ic, e) };
}
function tn(e, t = e.calendar) {
  return { branding: wl, calendar: t, ...y(Ic, e) };
}
function nn(e, t = e.calendar) {
  return { branding: Tl, calendar: t, ...y(Ic, e) };
}
function rn(e) {
  return { branding: Ol, ...y(Lc, e) };
}
function A(e) {
  return { branding: jl, sign: Fr(e), ...y(Dc, e) };
}
function an(e) {
  return it(e.epochNanoseconds, Zs)[0];
}
function on(e) {
  return tt(e.epochNanoseconds);
}
function sn(e) {
  return e.epochNanoseconds;
}
function cn(e, t, n, r, i) {
  let a = Vr(r),
    [o, s] = ((e, t) => {
      let n = t((e = Jt(e, $c))[rl]),
        r = gl(e);
      return ((r = Le($c, r)), [r, n]);
    })(i, e);
  if (!s && kr(Math.max(o, a), s)) return un(r, o);
  if (!s) throw RangeError(Ls);
  if (!r.sign) return 0;
  let [c, l, u] = wr(t, n, s),
    d = Tr(u),
    f = Er(u),
    p = Dr(u),
    m = f(l, c, r);
  Or(s) || (w(c), w(m));
  let ee = p(l, c, m, o);
  return kr(o, s) ? un(ee, o) : ln(ee, d(m), o, l, c, d, f);
}
function ln(e, t, n, r, i, a, o) {
  let s = Fr(e),
    [c, l] = dn(r, Nc(n, e), n, s, i, a, o),
    u = fn(t, c, l);
  return e[B[n]] + u * s;
}
function un(e, t) {
  return nt(M(e), tc[t], 1);
}
function dn(e, t, n, r, i, a, o) {
  let s = B[n],
    c = { ...t, [s]: t[s] + r },
    l = o(e, i, t),
    u = o(e, i, c);
  return [a(l), a(u)];
}
function fn(e, t, n) {
  let r = nt(Ze(t, n));
  if (!r) throw RangeError(ws);
  return nt(Ze(t, e)) / r;
}
function pn(e, t) {
  let [n, r, i] = Rt(t, 5, 1);
  return $t(An(e.epochNanoseconds, n, r, i, 1));
}
function mn(e, t, n) {
  let { epochNanoseconds: r, timeZone: i, calendar: a } = t,
    [o, s, c] = Rt(n);
  if (o === 0 && s === 1) return t;
  let l = e(i);
  if (o === 6) r = bn(En, l, t, c);
  else {
    let e = l.N(r);
    r = ar(l, xn(ht(r, e), o, s, c), e, 2, 0, 1);
  }
  return O(r, i, a);
}
function hn(e, t) {
  return k(xn(e, ...Rt(t)), e.calendar);
}
function gn(e, t) {
  let [n, r, i] = Rt(t, 5);
  var a;
  return rn(((a = i), Cn(e, Tn(n, r), a)[0]));
}
function _n(e, t) {
  let n = e(t.timeZone),
    [r, i] = En(W(t, n)),
    a = nt(Ze(sr(n, r), sr(n, i)), ec, 1);
  if (a <= 0) throw RangeError(ws);
  return a;
}
function vn(e, t) {
  let { timeZone: n, calendar: r } = t;
  return O(yn(Dn, e(n), t), n, r);
}
function yn(e, t, n) {
  return sr(t, e(W(n, t)));
}
function bn(e, t, n, r) {
  let [i, a] = e(W(n, t)),
    o = n.epochNanoseconds,
    s = sr(t, i),
    c = sr(t, a);
  if (Qe(o, s, c)) throw RangeError(ws);
  return Nn(fn(o, s, c), r) ? c : s;
}
function xn(e, t, n, r) {
  return Sn(e, Tn(t, n), r);
}
function Sn(e, t, n) {
  let [r, i] = Cn(e, t, n);
  return w({ ...Cr(e, i), ...r });
}
function Cn(e, t, n) {
  return ct(Mn(st(e), t, n));
}
function wn(e) {
  return Mn(e, $s, 7);
}
function Tn(e, t) {
  return tc[e] * t;
}
function En(e) {
  let t = Dn(e);
  return [t, Cr(t, 1)];
}
function Dn(e) {
  return zc(6, e);
}
function On(e, t, n) {
  let r = Math.min(Vr(e), 6);
  return Rr(jn(M(e, r), t, n), r);
}
function kn(e, t, n, r, i, a, o, s, c, l) {
  if (r === 0 && i === 1) return e;
  let [u, d, f] = (kr(r, s) ? (Or(s) && r < 6 && n >= 6 ? Fn : Pn) : In)(
    e,
    t,
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
  );
  return (
    f &&
      r !== 7 &&
      (u = ((e, t, n, r, i, a, o, s) => {
        let c = Fr(e);
        for (let l = r + 1; l <= n; l++) {
          if (l === 7 && n !== 7) continue;
          let r = Nc(l, e);
          r[B[l]] += c;
          let u = nt(Ze(o(s(i, a, r)), t));
          if (u && Math.sign(u) !== c) break;
          e = r;
        }
        return e;
      })(u, d, n, Math.max(6, r), o, s, c, l)),
    u
  );
}
function An(e, t, n, r, i) {
  return t === 6 ? [Mn(rt(e), n, r), 0] : jn(e, Tn(t, n), r, i);
}
function jn(e, t, n, r) {
  let [i, a] = e;
  r && a < 0 && ((a += 864e11), --i);
  let [o, s] = we(Mn(a, t, n), L);
  return Je(i + o, s);
}
function Mn(e, t, n) {
  return Nn(e / t, n) * t;
}
function Nn(e, t) {
  return Ml[t](e);
}
function Pn(e, t, n, r, i, a) {
  let o = Fr(e),
    s = M(e),
    c = An(s, r, i, a),
    l = Ze(s, c),
    u = Math.sign(c[0] - s[0]) === o,
    d = Rr(c, Math.min(n, 6));
  return [{ ...e, ...d }, Ye(t, l), u];
}
function Fn(e, t, n, r, i, a, o, s, c, l) {
  let u = Fr(e) || 1,
    d = nt(M(e, 5)),
    f = Tn(r, i),
    p = Mn(d, f, a),
    [m, ee] = dn(o, { ...e, ...Mc }, 6, u, s, c, l),
    te = p - nt(Ze(m, ee)),
    ne = 0;
  te && Math.sign(te) !== u
    ? (t = Xe(m, p))
    : ((ne += u), (p = Mn(te, f, a)), (t = Xe(ee, p)));
  let h = zr(p);
  return [{ ...e, ...h, days: e.days + ne }, t, !!ne];
}
function In(e, t, n, r, i, a, o, s, c, l) {
  let u = Fr(e),
    d = B[r],
    f = Nc(r, e);
  r === 7 && (e = { ...e, weeks: e.weeks + Math.trunc(e.days / 7) });
  let p = De(e[d], i) * i;
  f[d] = p;
  let [m, ee] = dn(o, f, r, i * u, s, c, l),
    te = p + fn(t, m, ee) * u * i,
    ne = Mn(te, i, a),
    h = Math.sign(ne - te) === u;
  return ((f[d] = ne), [f, h ? ee : m, h]);
}
function Ln(e, t, n, r) {
  let [i, a, o, s] = ((e) => {
      let t = Ht((e = qt(e)));
      return [e.timeZone, ...t];
    })(r),
    c = i !== void 0;
  return ((e, t, n, r, i, a) => {
    n = jn(n, i, r, 1);
    let o = t.N(n);
    return qn(ht(n, o), a) + (e ? Qn(wn(o)) : `Z`);
  })(c, t(c ? e(i) : Nl), n.epochNanoseconds, a, o, s);
}
function Rn(e, t, n) {
  let [r, i, a, o, s, c] = ((e) => {
    e = qt(e);
    let t = bl(e),
      n = Kt(e),
      r = Sl(e),
      i = Cl(e, 4),
      a = ml(e, 4);
    return [t, xl(e), r, i, ...Ut(a, n)];
  })(n);
  return ((e, t, n, r, i, a, o, s, c, l) => {
    r = jn(r, c, s, 1);
    let u = e(n).N(r);
    return (
      qn(ht(r, u), l) +
      Qn(wn(u), o) +
      ((e, t) => (t === 1 ? `` : `[` + (t === 2 ? `!` : ``) + e + `]`))(n, a) +
      $n(t, i)
    );
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, r, i, a, o, s, c);
}
function zn(e, t) {
  let [n, r, i, a] = ((e) => ((e = qt(e)), [bl(e), ...Ht(e)]))(t);
  return ((o = e.calendar), (s = n), (c = a), qn(Sn(e, i, r), c) + $n(o, s));
  var o, s, c;
}
function Bn(e, t) {
  return ((n = e.calendar), (r = e), (i = zt(t)), Jn(r) + $n(n, i));
  var n, r, i;
}
function Vn(e, t) {
  return Gn(e.calendar, Yn, e, zt(t));
}
function Hn(e, t) {
  return Gn(e.calendar, Xn, e, zt(t));
}
function Un(e, t) {
  let [n, r, i] = Bt(t);
  return ((a = i), Zn(Cn(e, r, n)[0], a));
  var a;
}
function Wn(e, t) {
  let [n, r, i] = Bt(t, 3);
  return (
    r > 1 && Ir((e = { ...e, ...On(e, r, n) })),
    ((e, t) => {
      let { sign: n } = e,
        r = n === -1 ? j(e) : e,
        { hours: i, minutes: a } = r,
        [o, s] = it(M(r, 3), Qs, Ee);
      Lr(o);
      let c = tr(s, t),
        l = t >= 0 || !n || c;
      return (
        (n < 0 ? `-` : ``) +
        `P` +
        Kn({ Y: rr(r.years), M: rr(r.months), W: rr(r.weeks), D: rr(r.days) }) +
        (i || a || o || l
          ? `T` + Kn({ H: rr(i), M: rr(a), S: rr(o, l) + c })
          : ``)
      );
    })(e, i)
  );
}
function Gn(e, t, n, r) {
  return r === 1
    ? e === `iso8601`
      ? t(n)
      : Jn(n)
    : r > 1 || (r === 0 && e !== `iso8601`)
      ? Jn(n) + er(e, r === 2)
      : t(n);
}
function Kn(e) {
  let t = [];
  for (let n in e) {
    let r = e[n];
    r && t.push(r, n);
  }
  return t.join(``);
}
function qn(e, t) {
  return Jn(e) + `T` + Zn(e, t);
}
function Jn(e) {
  return Yn(e) + `-` + F(e.isoDay);
}
function Yn(e) {
  let { isoYear: t } = e;
  return (
    (t < 0 || t > 9999 ? nr(t) + xe(6, Math.abs(t)) : xe(4, t)) +
    `-` +
    F(e.isoMonth)
  );
}
function Xn(e) {
  return F(e.isoMonth) + `-` + F(e.isoDay);
}
function Zn(e, t) {
  let n = [F(e.isoHour), F(e.isoMinute)];
  return (
    t !== -1 &&
      n.push(
        F(e.isoSecond) +
          ((e, t, n, r) => tr(e * 1e6 + t * 1e3 + n, r))(
            e.isoMillisecond,
            e.isoMicrosecond,
            e.isoNanosecond,
            t,
          ),
      ),
    n.join(`:`)
  );
}
function Qn(e, t = 0) {
  if (t === 1) return ``;
  let [n, r] = we(Math.abs(e), ec),
    [i, a] = we(r, $s),
    [o, s] = we(a, Qs);
  return nr(e) + F(n) + `:` + F(i) + (o || s ? `:` + F(o) + tr(s) : ``);
}
function $n(e, t) {
  return t !== 1 && (t > 1 || (t === 0 && e !== `iso8601`))
    ? er(e, t === 2)
    : ``;
}
function er(e, t) {
  return `[` + (t ? `!` : ``) + `u-ca=` + e + `]`;
}
function tr(e, t) {
  let n = xe(9, e);
  return (
    (n = t === void 0 ? n.replace(Ll, ``) : n.slice(0, t)), n ? `.` + n : ``
  );
}
function nr(e) {
  return e < 0 ? `-` : `+`;
}
function rr(e, t) {
  return e || t ? e.toLocaleString(`fullwide`, { useGrouping: 0 }) : ``;
}
function ir(e, t) {
  let { epochNanoseconds: n } = e,
    r = (t.N ? t : t(e.timeZone)).N(n),
    i = ht(n, r);
  return { calendar: e.calendar, ...i, offsetNanoseconds: r };
}
function ar(e, t, n, r = 0, i = 0, a, o) {
  if (n !== void 0 && r === 1 && (r === 1 || o)) return dt(t, n);
  let s = e.v(t);
  if (n !== void 0 && r !== 3) {
    let e = ((e, t, n, r) => {
      let i = E(t);
      r && (n = wn(n));
      for (let t of e) {
        let e = nt(Ze(t, i));
        if ((r && (e = wn(e)), e === n)) return t;
      }
    })(s, t, n, a);
    if (e !== void 0) return e;
    if (r === 0) throw RangeError(Ms);
  }
  return o ? E(t) : or(e, t, i, s);
}
function or(e, t, n = 0, r = e.v(t)) {
  if (r.length === 1) return r[0];
  if (n === 1) throw RangeError(Ns);
  if (r.length) return r[+(n === 3)];
  let i = E(t),
    a =
      ((e, t) => {
        let n = e.N(Xe(t, -L));
        return ((e) => {
          if (e > 864e11) throw RangeError(js);
          return e;
        })(e.N(Xe(t, L)) - n);
      })(e, i) * (n === 2 ? -1 : 1);
  return (r = e.v(ht(i, a)))[n === 2 ? 0 : r.length - 1];
}
function sr(e, t) {
  let n = e.v(t);
  if (n.length) return n[0];
  let r = Xe(E(t), -L);
  return e.l(r, 1);
}
function cr(e, t, n) {
  return $t(
    ot(
      Ye(
        t.epochNanoseconds,
        ((e) => {
          if (Br(e)) throw RangeError(Rs);
          return M(e, 5);
        })(e ? j(n) : n),
      ),
    ),
  );
}
function lr(e, t, n, r, i, a = Object.create(null)) {
  let o = t(r.timeZone),
    s = e(r.calendar);
  return { ...r, ...mr(o, s, r, n ? j(i) : i, a) };
}
function ur(e, t, n, r, i = Object.create(null)) {
  let { calendar: a } = n;
  return k(hr(e(a), n, t ? j(r) : r, i), a);
}
function dr(e, t, n, r, i) {
  let { calendar: a } = n;
  return en(gr(e(a), n, t ? j(r) : r, i), a);
}
function fr(e, t, n, r, i) {
  let a = n.calendar,
    o = e(a),
    s = C(_r(o, n));
  return (
    t && (r = Nr(r)),
    r.sign < 0 && ((s = o.P(s, { ...V, months: 1 })), (s = Cr(s, -1))),
    tn(_r(o, o.P(s, r, i)), a)
  );
}
function pr(e, t, n) {
  return rn(vr(t, e ? j(n) : n)[0]);
}
function mr(e, t, n, r, i) {
  let a = M(r, 5),
    o = n.epochNanoseconds;
  if (Br(r)) {
    let s = W(n, e);
    o = Ye(or(e, { ...gr(t, s, { ...r, ...Mc }, i), ...y(H, s) }), a);
  } else ((o = Ye(o, a)), D(i));
  return { epochNanoseconds: ot(o) };
}
function hr(e, t, n, r) {
  let [i, a] = vr(t, n);
  return w({ ...gr(e, t, { ...n, ...Mc, days: n.days + a }, r), ...i });
}
function gr(e, t, n, r) {
  if (n.years || n.months || n.weeks) return e.P(t, n, r);
  D(r);
  let i = n.days + M(n, 5)[0];
  return i ? C(Cr(t, i)) : t;
}
function _r(e, t, n = 1) {
  return Cr(t, n - e.day(t));
}
function vr(e, t) {
  let [n, r] = M(t, 5),
    [i, a] = ct(st(e) + r);
  return [i, n + a];
}
function yr(e, t, n) {
  let r = D(n),
    i,
    { years: a, months: o, weeks: s, days: c } = t;
  if (((c += M(t, 5)[0]), a || o)) i = br(this, e, a, o, r);
  else {
    if (!s && !c) return e;
    i = T(e);
  }
  if (i === void 0) throw RangeError(Ps);
  return ((i += (7 * s + c) * I), C(gt(i)));
}
function br(e, t, n, r, i) {
  let [a, o, s] = e.u(t);
  if (n) {
    let [t, r] = e.m(a, o);
    ((a += n), (o = pa(t, r, e.F(a))), (o = oe(`month`, o, 1, e.O(a), i)));
  }
  return (
    r && ([a, o] = e.p(a, o, r)),
    (s = oe(`day`, s, 1, e.B(a, o), i)),
    e.M(a, o, s)
  );
}
function xr(e, t, n) {
  return (
    (e += De(n, Yc)),
    (t += Oe(n, Yc)) < 1 ? (e--, (t += Yc)) : t > Yc && (e++, (t -= Yc)),
    [e, t]
  );
}
function Sr(e, t, n) {
  if (n) {
    if (((t += n), !Number.isSafeInteger(t))) throw RangeError(Ps);
    if (n < 0) for (; t < 1;) t += Na.call(this, --e);
    else {
      let n;
      for (; t > (n = Na.call(this, e));) ((t -= n), e++);
    }
  }
  return [e, t];
}
function Cr(e, t) {
  return t ? { ...e, ...gt(T(e) + t * I) } : e;
}
function wr(e, t, n) {
  let r = e(n.calendar);
  return Or(n) ? [n, r, t(n.timeZone)] : [{ ...n, ...U }, r];
}
function Tr(e) {
  return e ? sn : E;
}
function Er(e) {
  return e ? b(mr, e) : hr;
}
function Dr(e) {
  return e ? b(Ui, e) : Wi;
}
function Or(e) {
  return e && e.epochNanoseconds;
}
function kr(e, t) {
  return e <= 6 - !!Or(t);
}
function Ar(e, t, n, r, i, a, o) {
  let s = e(qt(o).relativeTo),
    c = Math.max(Vr(i), Vr(a));
  if (kr(c, s))
    return A(
      Ir(
        ((e, t, n, r) => {
          let i = Ye(M(e), M(t), r ? -1 : 1);
          if (!Number.isFinite(i[0])) throw RangeError(Ps);
          return { ...V, ...Rr(i, n) };
        })(i, a, c, r),
      ),
    );
  if (!s) throw RangeError(Ls);
  r && (a = j(a));
  let [l, u, d] = wr(t, n, s),
    f = Er(d);
  return A(Dr(d)(u, l, f(u, f(u, l, i), a), c));
}
function jr(e, t, n, r, i) {
  let a = Vr(r),
    [o, s, c, l, u] = ((e, t, n) => {
      e = Jt(e, Qc);
      let r = hl(e),
        i = n(e[rl]),
        a = Wt(e),
        o = Cl(e, 7),
        s = ml(e);
      if (r === void 0 && s === void 0) throw RangeError(zs);
      if (
        ((s ??= 0),
        (r ??= Math.max(s, t)),
        Qt(r, s),
        (a = Gt(a, s, 1)),
        a > 1 && s > 5 && r !== s)
      )
        throw RangeError(
          `For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit`,
        );
      return [r, s, a, o, i];
    })(i, a, e);
  if (!u && Math.max(a, o) <= 6)
    return A(
      Ir(
        ((e, t, n, r, i) => {
          let a = An(M(e), n, r, i);
          return { ...V, ...Rr(a, t) };
        })(r, o, s, c, l),
      ),
    );
  if (!Or(u) && !r.sign) return r;
  if (!u) throw RangeError(Ls);
  let [d, f, p] = wr(t, n, u),
    m = Tr(p),
    ee = Er(p),
    te = Dr(p),
    ne = ee(f, d, r);
  Or(u) || (w(d), w(ne));
  let h = te(f, d, ne, o),
    re = r.sign,
    ie = Fr(h);
  if (re && ie && re !== ie) throw RangeError(ws);
  return ((h = kn(h, m(ne), o, s, c, l, f, d, m, ee)), A(h));
}
function Mr(e) {
  return e.sign === -1 ? Nr(e) : e;
}
function Nr(e) {
  return A(j(e));
}
function j(e) {
  let t = {};
  for (let n of B) t[n] = -1 * e[n] || 0;
  return t;
}
function Pr(e) {
  return !e.sign;
}
function Fr(e, t = B) {
  let n = 0;
  for (let r of t) {
    let t = Math.sign(e[r]);
    if (t) {
      if (n && n !== t) throw RangeError(Is);
      n = t;
    }
  }
  return n;
}
function Ir(e) {
  for (let t of Ac) oe(t, e[t], -Rl, Rl, 1);
  return (Lr(nt(M(e), Qs)), e);
}
function Lr(e) {
  if (!Number.isSafeInteger(e)) throw RangeError(Fs);
}
function M(e, t = 6) {
  return Ae(e, t, B);
}
function Rr(e, t = 6) {
  let [n, r] = e,
    i = je(r, t, B);
  if (((i[B[t]] += n * (864e11 / tc[t])), !Number.isFinite(i[B[t]])))
    throw RangeError(Ps);
  return i;
}
function zr(e, t = 5) {
  return je(e, t, B);
}
function Br(e) {
  return !!Fr(e, kc);
}
function Vr(e) {
  let t = 9;
  for (; t > 0 && !e[B[t]]; t--);
  return t;
}
function Hr(e, t) {
  return [e, t];
}
function Ur(e) {
  let t = Math.floor(e / Pl) * Pl;
  return [t, t + Pl];
}
function Wr(e) {
  let t = si((e = Ue(e)));
  if (!t) throw RangeError(P(e));
  let n;
  if (t.C) n = 0;
  else {
    if (!t.offset) throw RangeError(P(e));
    n = qr(t.offset);
  }
  return (t.timeZone && ui(t.timeZone, 1), $t(dt(jt(t), n)));
}
function Gr(e) {
  let t = si(z(e));
  if (!t) throw RangeError(P(e));
  if (t.timeZone) return ri(t, t.offset ? qr(t.offset) : void 0);
  if (t.C) throw RangeError(P(e));
  return ai(t);
}
function Kr(e, t) {
  let n = si(z(e));
  if (!n || !n.timeZone) throw RangeError(P(e));
  let { offset: r } = n,
    i = r ? qr(r) : void 0,
    [, a, o] = It(t);
  return ri(n, i, a, o);
}
function qr(e) {
  let t = ui(e);
  if (t === void 0) throw RangeError(P(e));
  return t;
}
function Jr(e) {
  let t = si(z(e));
  if (!t || t.C) throw RangeError(P(e));
  return k(ii(t));
}
function Yr(e, t, n) {
  let r = si(z(e));
  if (!r || r.C) throw RangeError(P(e));
  return (
    t
      ? r.calendar === `iso8601` &&
        (r =
          r.isoYear === -271821 && r.isoMonth === 4
            ? { ...r, isoDay: 20, ...U }
            : { ...r, isoDay: 1, ...U })
      : n && r.calendar === `iso8601` && (r = { ...r, isoYear: Jc }),
    en(r.k ? ii(r) : ai(r))
  );
}
function Xr(e, t) {
  let n = ci(z(t));
  if (n) return (Zr(n), tn(at(Mt(n))));
  let r = Yr(t, 1);
  return tn(_r(e(r.calendar), r));
}
function Zr(e) {
  if (e.calendar !== `iso8601`) throw RangeError(Vs(e.calendar));
}
function Qr(e, t) {
  let n = li(z(t));
  if (n) return (Zr(n), nn(Mt(n)));
  let r = Yr(t, 0, 1),
    { calendar: i } = r,
    a = e(i),
    [o, s, c] = a.u(r),
    [l, u] = a.m(o, s),
    [d, f] = a.R(l, u, c);
  return nn(C(a.U(d, f, c)), i);
}
function $r(e) {
  let t,
    n = ((e) => {
      let t = Ql.exec(e);
      return t ? (pi(t[10]), fi(t)) : void 0;
    })(z(e));
  if (!n) {
    if (((n = si(e)), !n || !n.k)) throw RangeError(P(e));
    if (n.C) throw RangeError(Vs(`Z`));
    Zr(n);
  }
  if (((t = ci(e)) && Nt(t)) || ((t = li(e)) && Nt(t))) throw RangeError(P(e));
  return rn(Ft(n, 1));
}
function ei(e) {
  let t = ((e) => {
    let t = tu.exec(e);
    return t
      ? ((e) => {
          function t(e, t, a) {
            let o = 0,
              s = 0;
            if ((a && ([o, i] = we(i, tc[a])), e !== void 0)) {
              if (r) throw RangeError(Vs(e));
              ((s = ((e) => {
                let t = parseInt(e);
                if (!Number.isFinite(t)) throw RangeError(Vs(e));
                return t;
              })(e)),
                (n = 1),
                t && ((i = mi(t) * (tc[a] / 1e9)), (r = 1)));
            }
            return o + s;
          }
          let n = 0,
            r = 0,
            i = 0,
            a = {
              ...de(B, [
                t(e[2]),
                t(e[3]),
                t(e[4]),
                t(e[5]),
                t(e[6], e[7], 5),
                t(e[8], e[9], 4),
                t(e[10], e[11], 3),
              ]),
              ...je(i, 2, B),
            };
          if (!n) throw RangeError(us(B));
          return (gi(e[1]) < 0 && (a = j(a)), a);
        })(t)
      : void 0;
  })(z(e));
  if (!t) throw RangeError(P(e));
  return A(Ir(t));
}
function ti(e) {
  let t = si(e) || ci(e) || li(e);
  return t ? t.calendar : e;
}
function ni(e) {
  let t = si(e);
  return (t && (t.timeZone || (t.C && Nl) || t.offset)) || e;
}
function ri(e, t, n = 0, r = 0) {
  let i = yi(e.timeZone),
    a = G(i),
    o;
  return (
    jt(e),
    (o = e.k ? ar(a, e, t, n, r, !a.j, e.C) : sr(a, e)),
    O(o, i, Ra(e.calendar))
  );
}
function ii(e) {
  return oi(w(jt(e)));
}
function ai(e) {
  return oi(C(Mt(e)));
}
function oi(e) {
  return { ...e, calendar: Ra(e.calendar) };
}
function si(e) {
  let t = Zl.exec(e);
  return t
    ? ((e) => {
        let t = e[10],
          n = (t || ``).toUpperCase() === `Z`;
        return {
          isoYear: di(e),
          isoMonth: parseInt(e[4]),
          isoDay: parseInt(e[5]),
          ...fi(e.slice(5)),
          ...pi(e[16]),
          k: !!e[6],
          C: n,
          offset: n ? void 0 : t,
        };
      })(t)
    : void 0;
}
function ci(e) {
  let t = Yl.exec(e);
  return t
    ? ((e) => ({
        isoYear: di(e),
        isoMonth: parseInt(e[4]),
        isoDay: 1,
        ...pi(e[5]),
      }))(t)
    : void 0;
}
function li(e) {
  let t = Xl.exec(e);
  return t
    ? ((e) => ({
        isoYear: Jc,
        isoMonth: parseInt(e[1]),
        isoDay: parseInt(e[2]),
        ...pi(e[3]),
      }))(t)
    : void 0;
}
function ui(e, t) {
  let n = $l.exec(e);
  return n
    ? ((e, t) => {
        let n = e[4] || e[5];
        if (t && n) throw RangeError(Vs(n));
        return ((e) => {
          if (Math.abs(e) >= 864e11) throw RangeError(As);
          return e;
        })(
          (_i(e[2]) * ec + _i(e[3]) * $s + _i(e[4]) * Qs + mi(e[5] || ``)) *
            gi(e[1]),
        );
      })(n, t)
    : void 0;
}
function di(e) {
  let t = gi(e[1]),
    n = parseInt(e[2] || e[3]);
  if (t < 0 && !n) throw RangeError(Vs(-0));
  return t * n;
}
function fi(e) {
  let t = _i(e[3]);
  return {
    ...ct(mi(e[4] || ``))[0],
    isoHour: _i(e[1]),
    isoMinute: _i(e[2]),
    isoSecond: t === 60 ? 59 : t,
  };
}
function pi(e) {
  let t,
    n,
    r = [];
  if (
    (e.replace(eu, (e, i, a) => {
      let o = !!i,
        [s, c] = a.split(`=`).reverse();
      if (c) {
        if (c === `u-ca`) (r.push(s), (t ||= o));
        else if (o || /[A-Z]/.test(c)) throw RangeError(Vs(e));
      } else {
        if (n) throw RangeError(Vs(e));
        n = s;
      }
      return ``;
    }),
    r.length > 1 && t)
  )
    throw RangeError(Vs(e));
  return { timeZone: n, calendar: r[0] || `iso8601` };
}
function mi(e) {
  return parseInt(e.padEnd(9, `0`));
}
function hi(e) {
  return RegExp(`^${e}$`, `i`);
}
function gi(e) {
  return e && e !== `+` ? -1 : 1;
}
function _i(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function vi(e) {
  return yi(z(e));
}
function yi(e) {
  let t = xi(e);
  return typeof t == `number`
    ? Qn(t)
    : t
      ? ((e) => {
          if (iu.test(e)) throw RangeError(Ds(e));
          if (ru.test(e)) throw RangeError(ks);
          return e
            .toLowerCase()
            .split(`/`)
            .map((e, t) =>
              (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e)
                ? e.toUpperCase()
                : e.replace(/baja|dumont|[a-z]+/g, (e, n) =>
                    (e.length <= 2 && !t) || e === `in` || e === `chat`
                      ? e.toUpperCase()
                      : e.length > 2 || !n
                        ? ye(e).replace(
                            /island|noronha|murdo|rivadavia|urville/,
                            ye,
                          )
                        : e,
                  ),
            )
            .join(`/`);
        })(e)
      : Nl;
}
function bi(e) {
  let t = xi(e);
  return typeof t == `number` ? t : t ? t.resolvedOptions().timeZone : Nl;
}
function xi(e) {
  let t = ui((e = e.toUpperCase()), 1);
  return t === void 0 ? (e === Nl ? void 0 : nu(e)) : t;
}
function Si(e, t) {
  return S(e.epochNanoseconds, t.epochNanoseconds);
}
function Ci(e, t) {
  return S(e.epochNanoseconds, t.epochNanoseconds);
}
function wi(e, t, n, r, i, a) {
  let o = e(qt(a).relativeTo),
    s = Math.max(Vr(r), Vr(i));
  if (ge(B, r, i)) return 0;
  if (kr(s, o)) return S(M(r), M(i));
  if (!o) throw RangeError(Ls);
  let [c, l, u] = wr(t, n, o),
    d = Tr(u),
    f = Er(u);
  return S(d(f(l, c, r)), d(f(l, c, i)));
}
function Ti(e, t) {
  return Ei(e, t) || Di(e, t);
}
function Ei(e, t) {
  return Se(T(e), T(t));
}
function Di(e, t) {
  return Se(st(e), st(t));
}
function Oi(e, t) {
  return !Si(e, t);
}
function ki(e, t) {
  return !Ci(e, t) && !!Fi(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function Ai(e, t) {
  return !Ti(e, t) && e.calendar === t.calendar;
}
function ji(e, t) {
  return !Ei(e, t) && e.calendar === t.calendar;
}
function Mi(e, t) {
  return !Ei(e, t) && e.calendar === t.calendar;
}
function Ni(e, t) {
  return !Ei(e, t) && e.calendar === t.calendar;
}
function Pi(e, t) {
  return !Di(e, t);
}
function Fi(e, t) {
  if (e === t) return 1;
  try {
    return bi(e) === bi(t);
  } catch {}
}
function Ii(e, t, n, r) {
  let i = Lt(e, r, 3, 5),
    a = Ji(t.epochNanoseconds, n.epochNanoseconds, ...i);
  return A(e ? j(a) : a);
}
function Li(e, t, n, r, i, a) {
  let o = na(r.calendar, i.calendar),
    [s, c, l, u] = Lt(n, a, 5),
    d = r.epochNanoseconds,
    f = i.epochNanoseconds,
    p = S(f, d),
    m;
  if (p) {
    if (s < 6) m = Ji(d, f, s, c, l, u);
    else {
      let n = t(ra(r.timeZone, i.timeZone)),
        d = e(o);
      ((m = Gi(d, n, r, i, p, s, a)),
        (m = kn(m, f, s, c, l, u, d, r, sn, b(mr, n))));
    }
  } else m = V;
  return A(n ? j(m) : m);
}
function Ri(e, t, n, r, i) {
  let a = na(n.calendar, r.calendar),
    [o, s, c, l] = Lt(t, i, 6),
    u = E(n),
    d = E(r),
    f = S(d, u),
    p;
  if (f) {
    if (o <= 6) p = Ji(u, d, o, s, c, l);
    else {
      let t = e(a);
      ((p = Ki(t, n, r, f, o, i)), (p = kn(p, d, o, s, c, l, t, n, E, hr)));
    }
  } else p = V;
  return A(t ? j(p) : p);
}
function zi(e, t, n, r, i) {
  let a = na(n.calendar, r.calendar);
  return Vi(t, () => e(a), n, r, ...Lt(t, i, 6, 9, 6));
}
function Bi(e, t, n, r, i) {
  let a = na(n.calendar, r.calendar),
    o = Lt(t, i, 9, 9, 8),
    s = e(a),
    c = _r(s, n),
    l = _r(s, r);
  return c.isoYear === l.isoYear &&
    c.isoMonth === l.isoMonth &&
    c.isoDay === l.isoDay
    ? A(V)
    : Vi(t, () => s, C(c), C(l), ...o, 8);
}
function Vi(e, t, n, r, i, a, o, s, c = 6) {
  let l = E(n),
    u = E(r);
  if (l === void 0 || u === void 0) throw RangeError(Ps);
  let d;
  if (S(u, l)) {
    if (i === 6) d = Ji(l, u, i, a, o, s);
    else {
      let e = t();
      ((d = e.h(n, r, i)),
        (a === c && o === 1) || (d = kn(d, u, i, a, o, s, e, n, E, gr)));
    }
  } else d = V;
  return A(e ? j(d) : d);
}
function Hi(e, t, n, r) {
  let [i, a, o, s] = Lt(e, r, 5, 5),
    c = Mn(Qi(t, n), Tn(a, o), s),
    l = { ...V, ...zr(c, i) };
  return A(e ? j(l) : l);
}
function Ui(e, t, n, r, i, a) {
  let o = S(r.epochNanoseconds, n.epochNanoseconds);
  return o
    ? i < 6
      ? Yi(n.epochNanoseconds, r.epochNanoseconds, i)
      : Gi(t, e, n, r, o, i, a)
    : V;
}
function Wi(e, t, n, r, i) {
  let a = E(t),
    o = E(n),
    s = S(o, a);
  return s ? (r <= 6 ? Yi(a, o, r) : Ki(e, t, n, s, r, i)) : V;
}
function Gi(e, t, n, r, i, a, o) {
  let [s, c, l] = qi(t, n, r, i);
  var u, d;
  return {
    ...(a === 6
      ? ((u = s), (d = c), { ...V, days: Xi(u, d) })
      : e.h(s, c, a, o)),
    ...zr(l),
  };
}
function Ki(e, t, n, r, i, a) {
  let [o, s, c] = ((e, t, n) => {
    let r = t,
      i = Qi(e, t);
    return (
      Math.sign(i) === -n && ((r = Cr(t, -n)), (i += 864e11 * n)), [e, r, i]
    );
  })(t, n, r);
  return { ...e.h(o, s, i, a), ...zr(c) };
}
function qi(e, t, n, r) {
  function i() {
    return ((d = { ...Cr(s, l++ * -r), ...o }), (f = or(e, d)), S(c, f) === -r);
  }
  let a = W(t, e),
    o = y(H, a),
    s = W(n, e),
    c = n.epochNanoseconds,
    l = 0,
    u = Qi(a, s),
    d,
    f;
  if ((Math.sign(u) === -r && l++, i() && (r === -1 || i())))
    throw RangeError(ws);
  let p = nt(Ze(f, c));
  return [a, d, p];
}
function Ji(e, t, n, r, i, a) {
  return { ...V, ...Rr(An(Ze(e, t), r, i, a), n) };
}
function Yi(e, t, n) {
  return { ...V, ...Rr(Ze(e, t), n) };
}
function Xi(e, t) {
  return Zi(T(e), T(t));
}
function Zi(e, t) {
  return Math.trunc((t - e) / I);
}
function Qi(e, t) {
  return st(t) - st(e);
}
function $i(e, t, n) {
  if (n <= 7) {
    let r = 0,
      i = Xi({ ...e, ...U }, { ...t, ...U });
    return (n === 7 && ([r, i] = Ee(i, 7)), { ...V, weeks: r, days: i });
  }
  let r = this.u(e),
    i = this.u(t),
    [a, o, s] = ((e, t, n, r, i, a, o) => {
      let s = i - t,
        c = a - n,
        l = o - r;
      if (s || c) {
        let u = Math.sign(s || c),
          d = e.B(i, a),
          f = 0;
        if (Math.sign(l) === -u) {
          let r = d;
          (([i, a] = e.p(i, a, -u)),
            (s = i - t),
            (c = a - n),
            (d = e.B(i, a)),
            (f = u < 0 ? -r : d));
        }
        if (((l = o - Math.min(r, d) + f), s)) {
          let [r, o] = e.m(t, n),
            [l, d] = e.m(i, a);
          if (((c = l - r || Number(d) - Number(o)), Math.sign(c) === -u)) {
            let n = u < 0 && -e.O(i);
            ((s = (i -= u) - t), (c = a - pa(r, o, e.F(i)) + (n || e.O(i))));
          }
        }
      }
      return [s, c, l];
    })(this, ...r, ...i);
  return (
    n === 8 && ((o += this.q(a, r[0])), (a = 0)),
    { ...V, years: a, months: o, days: s }
  );
}
function ea(e) {
  return e * Yc;
}
function ta(e, t) {
  let n = t + e,
    r = Math.sign(e),
    i = r < 0 ? -1 : 0,
    a = 0;
  for (let e = t; e !== n; e += r) a += Na.call(this, e + i);
  return a;
}
function na(e, t) {
  if (e !== t) throw RangeError(Es);
  return e;
}
function ra(e, t) {
  if (!Fi(e, t)) throw RangeError(Os);
  return e;
}
function ia(e) {
  return this.I(e)[0];
}
function aa(e) {
  return this.I(e)[1];
}
function oa(e) {
  let [t] = this.u(e);
  return this.L(t);
}
function sa(e) {
  let [t] = this.u(e);
  return this.O(t);
}
function ca(e) {
  let [t, n] = this.u(e);
  return this.B(t, n);
}
function la(e) {
  let [t] = this.u(e);
  return this.G(t);
}
function ua(e) {
  let [t] = this.u(e);
  return Zi(this.M(t), T(e)) + 1;
}
function da(e) {
  let t = au.exec(e);
  if (!t) throw RangeError(bs(e));
  return [parseInt(t[1]), !!t[2]];
}
function fa(e, t) {
  return `M` + F(e) + (t ? `L` : ``);
}
function pa(e, t, n) {
  return e + (t || (n && e >= n) ? 1 : 0);
}
function ma(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function ha(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function ga(e) {
  return Sc[va(e)];
}
function _a(e) {
  return wc[va(e)];
}
function va(e) {
  return za(e.id || `iso8601`);
}
function ya(e) {
  function t(e) {
    return ((e, t) => ({ ...Sa(e, t), V: e.month, day: parseInt(e.day) }))(
      _t(n, e),
      r,
    );
  }
  let n = su(e),
    r = za(e);
  return { id: e, _: ba(t), J: xa(t) };
}
function ba(e) {
  return v((t) => e(T(t)), WeakMap);
}
function xa(e) {
  let t = e(0).year - qc;
  return v((n) => {
    let r,
      i = pt(n - t),
      a = 0,
      o = [],
      s = [];
    do i += 400 * I;
    while ((r = e(i)).year <= n);
    do
      if (
        ((i += (1 - r.day) * I),
        r.year === n && (o.push(i), s.push(r.V)),
        (i -= I),
        ++a > 100 || i < -Vc)
      )
        throw RangeError(ws);
    while ((r = e(i)).year >= n);
    return { K: o.reverse(), X: Gs(s.reverse()) };
  });
}
function Sa(e, t) {
  let n,
    r,
    i = Ca(e);
  if (e.era) {
    let a = Sc[t],
      o = Cc[t] || {};
    a !== void 0 &&
      ((n =
        t === `islamic`
          ? `ah`
          : e.era
              .normalize(`NFD`)
              .toLowerCase()
              .replace(/[^a-z0-9]/g, ``)),
      n === `bc` || n === `b`
        ? (n = `bce`)
        : n === `ad` || n === `a`
          ? (n = `ce`)
          : n === `beforeroc` && (n = `broc`),
      (n = o[n] || n),
      (r = i),
      (i = ha(r, a[n] || 0)));
  }
  return { era: n, eraYear: r, year: i };
}
function Ca(e) {
  return parseInt(e.relatedYear || e.year);
}
function wa(e) {
  return this._(e).day;
}
function Ta(e) {
  let { year: t, V: n, day: r } = this._(e),
    { X: i } = this.J(t);
  return [t, i[n] + 1, r];
}
function Ea(e, t, n) {
  return gt(Da.call(this, e, t, n));
}
function Da(e, t = 1, n = 1) {
  return this.J(e).K[t - 1] + (n - 1) * I;
}
function Oa(e, t) {
  let n = ka.call(this, e);
  return [ma(t, n), n === t];
}
function ka(e) {
  let t = Ia(this, e),
    n = Ia(this, e - 1),
    r = t.length;
  if (r > n.length) {
    let e = _a(this);
    if (e < 0) return -e;
    for (let e = 0; e < r; e++) if (t[e] !== n[e]) return e + 1;
  }
}
function Aa(e) {
  let t = ja.call(this, e);
  return t > ja.call(this, e - 1) && t > ja.call(this, e + 1);
}
function ja(e) {
  return Zi(Da.call(this, e), Da.call(this, e + 1));
}
function Ma(e, t) {
  let { K: n } = this.J(e),
    r = t + 1,
    i = n;
  return (
    r > n.length && ((r = 1), (i = this.J(e + 1).K)), Zi(n[t - 1], i[r - 1])
  );
}
function Na(e) {
  return this.J(e).K.length;
}
function Pa(e) {
  let t = this._(e);
  return [t.era, t.eraYear];
}
function Fa(e, t, n) {
  let r =
      this.id && za(this.id) === `chinese`
        ? ((e, t, n) => {
            if (t)
              switch (e) {
                case 1:
                  return 1651;
                case 2:
                  return n < 30 ? 1947 : 1765;
                case 3:
                  return n < 30 ? 1966 : 1955;
                case 4:
                  return n < 30 ? 1963 : 1944;
                case 5:
                  return n < 30 ? 1971 : 1952;
                case 6:
                  return n < 30 ? 1960 : 1941;
                case 7:
                  return n < 30 ? 1968 : 1938;
                case 8:
                  return n < 30 ? 1957 : 1718;
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
          })(e, t, n)
        : Jc,
    [i, a, o] = Ta.call(this, { isoYear: r, isoMonth: Yc, isoDay: 31 }),
    s = ka.call(this, i),
    c = a === s;
  (Se(e, ma(a, s)) || Se(Number(t), Number(c)) || Se(n, o)) === 1 && i--;
  for (let r = 0; r < 100; r++) {
    let a = i - r,
      o = ka.call(this, a),
      s = pa(e, t, o);
    if (t === (s === o) && n <= Ma.call(this, a, s)) return [a, s];
  }
}
function Ia(e, t) {
  return Object.keys(e.J(t).X);
}
function La(e) {
  return Ra(z(e));
}
function Ra(e) {
  if ((e = e.toLowerCase()) !== `iso8601` && e !== bc) {
    let t = su(e).resolvedOptions().calendar;
    if (za(e) !== za(t)) throw RangeError(Ts(e));
    return t;
  }
  return e;
}
function za(e) {
  return (e === `islamicc` && (e = `islamic`), e.split(`-`)[0]);
}
function Ba(e, t) {
  return (n) =>
    n === `iso8601`
      ? e
      : n === bc || n === xc
        ? Object.assign(Object.create(e), { id: n })
        : Object.assign(Object.create(t), ou(n));
}
function Va(e, t, n, r) {
  let i = Ya(n, r, gc, [], sc);
  if (i.timeZone !== void 0) {
    let r = n.ee(i),
      a = Xa(i),
      o = e(i.timeZone);
    return {
      epochNanoseconds: ar(
        t(o),
        { ...r, ...a },
        i.offset === void 0 ? void 0 : qr(i.offset),
      ),
      timeZone: o,
    };
  }
  return { ...n.ee(i), ...U };
}
function Ha(e, t, n, r, i, a) {
  let o = Ya(n, i, gc, ac, sc),
    s = e(o.timeZone),
    [c, l, u] = It(a),
    d = n.ee(o, Yt(c)),
    f = Xa(o, c);
  return O(
    ar(t(s), { ...d, ...f }, o.offset === void 0 ? void 0 : qr(o.offset), l, u),
    s,
    r,
  );
}
function Ua(e, t, n) {
  let r = Ya(e, t, gc, [], nc),
    i = D(n);
  return k(w({ ...e.ee(r, Yt(i)), ...Xa(r, i) }));
}
function Wa(e, t, n, r = []) {
  let i = Ya(e, t, gc, r);
  return e.ee(i, n);
}
function Ga(e, t, n, r) {
  let i = Ya(e, t, mc, r);
  return e.ne(i, n);
}
function Ka(e, t, n, r) {
  let i = Ya(e, n, gc, pc);
  return (
    t &&
      i.month !== void 0 &&
      i.monthCode === void 0 &&
      i.year === void 0 &&
      (i.year = Jc),
    e.te(i, r)
  );
}
function qa(e, t) {
  return rn(Xa(N(e, rc, [], 1), D(t)));
}
function Ja(e) {
  let t = N(e, Dc);
  return A(Ir({ ...V, ...t }));
}
function Ya(e, t, n, r = [], i = []) {
  return N(t, [...e.fields(n), ...i].sort(), r);
}
function N(e, t, n, r = !n) {
  let i = {},
    a,
    o = 0;
  for (let r of t) {
    if (r === a) throw RangeError(ls(r));
    if (r === `constructor` || r === `__proto__`) throw RangeError(cs(r));
    let t = e[r];
    if (t !== void 0) ((o = 1), mu[r] && (t = mu[r](t, r)), (i[r] = t));
    else if (n) {
      if (n.includes(r)) throw TypeError(ss(r));
      i[r] = yc[r];
    }
    a = r;
  }
  if (r && !o) throw TypeError(us(t));
  return i;
}
function Xa(e, t) {
  return Ft(hu({ ...yc, ...e }), t);
}
function Za(e, t, n, r, i) {
  let { calendar: a, timeZone: o } = n,
    s = e(a),
    c = t(o),
    l = [...s.fields(gc), ...oc].sort(),
    u = ((e) => {
      let t = W(e, G),
        n = Qn(t.offsetNanoseconds),
        r = pu(e.calendar),
        [i, a, o] = r.u(t),
        [s, c] = r.m(i, a),
        l = fa(s, c);
      return { ...gu(t), year: i, monthCode: l, day: o, offset: n };
    })(n),
    d = N(r, l),
    f = s.oe(u, d),
    p = { ...u, ...d },
    [m, ee, te] = It(i, 2);
  return O(
    ar(c, { ...s.ee(f, Yt(m)), ...Ft(hu(p), m) }, qr(p.offset), ee, te),
    o,
    a,
  );
}
function Qa(e, t, n, r) {
  let i = e(t.calendar),
    a = [...i.fields(gc), ...nc].sort(),
    o = {
      ..._o((s = t)),
      hour: s.isoHour,
      minute: s.isoMinute,
      second: s.isoSecond,
      millisecond: s.isoMillisecond,
      microsecond: s.isoMicrosecond,
      nanosecond: s.isoNanosecond,
    };
  var s;
  let c = N(n, a),
    l = D(r),
    u = i.oe(o, c),
    d = { ...o, ...c };
  return k(w({ ...i.ee(u, Yt(l)), ...Ft(hu(d), l) }));
}
function $a(e, t, n, r) {
  let i = e(t.calendar),
    a = i.fields(gc).sort(),
    o = _o(t),
    s = N(n, a),
    c = i.oe(o, s);
  return i.ee(c, r);
}
function eo(e, t, n, r) {
  let i = e(t.calendar),
    a = i.fields(mc).sort(),
    o = ((e) => {
      let t = pu(e.calendar),
        [n, r] = t.u(e),
        [i, a] = t.m(n, r);
      return { year: n, monthCode: fa(i, a) };
    })(t),
    s = N(n, a),
    c = i.oe(o, s);
  return i.ne(c, r);
}
function to(e, t, n, r) {
  let i = e(t.calendar),
    a = i.fields(gc).sort(),
    o = ((e) => {
      let t = pu(e.calendar),
        [n, r, i] = t.u(e),
        [a, o] = t.m(n, r);
      return { monthCode: fa(a, o), day: i };
    })(t),
    s = N(n, a),
    c = i.oe(o, s);
  return i.te(c, r);
}
function no(e, t, n) {
  return rn(((e, t, n) => Xa({ ...y(rc, e), ...N(t, rc) }, D(n)))(e, t, n));
}
function ro(e, t) {
  return A(((n = e), (r = t), Ir({ ...n, ...N(r, Dc) })));
  var n, r;
}
function io(e, t) {
  let n = Ya(e, t, vc);
  return e.te(n);
}
function ao(e, t, n) {
  let r = Ya(e, t, hc);
  return e.ne(r, n);
}
function oo(e, t, n, r, i) {
  ((t = y((n = e.fields(n)), t)), (r = N(r, (i = e.fields(i)), [])));
  let a = e.oe(t, r);
  return ((a = N(a, [...n, ...i].sort(), [])), e.ee(a));
}
function so(e, t) {
  let n = D(t),
    r = po(this, e),
    i = mo(this, e, r, n),
    a = ho(this, e, i, r, n);
  return en(C(this.U(r, i, a)), this.id || `iso8601`);
}
function co(e, t) {
  let n = D(t),
    r = po(this, e),
    i = mo(this, e, r, n);
  return tn(at(this.U(r, i, 1)), this.id || `iso8601`);
}
function lo(e, t) {
  let n = D(t),
    r,
    i,
    a,
    o = e.eraYear !== void 0 || e.year !== void 0 ? po(this, e) : void 0,
    s = !this.id;
  if ((o === void 0 && s && (o = Jc), o !== void 0)) {
    let t = mo(this, e, o, n);
    r = ho(this, e, t, o, n);
    let s = this.F(o);
    ((i = ma(t, s)), (a = t === s));
  } else {
    if (e.monthCode === void 0) throw TypeError(Ss);
    if (
      (([i, a] = da(e.monthCode)), this.id && this.id !== bc && this.id !== xc)
    ) {
      if (this.id && za(this.id) === `coptic` && n === 0) {
        let t = a || i !== 13 ? 30 : 6;
        ((r = e.day), (r = Ce(r, 1, t)));
      } else if (this.id && za(this.id) === `chinese` && n === 0) {
        let t =
          !a || (i !== 1 && i !== 9 && i !== 10 && i !== 11 && i !== 12)
            ? 30
            : 29;
        ((r = e.day), (r = Ce(r, 1, t)));
      } else r = e.day;
    } else r = ho(this, e, mo(this, e, Jc, n), Jc, n);
  }
  let c = this.R(i, a, r);
  if (!c) throw RangeError(`Cannot guess year`);
  let [l, u] = c;
  return nn(C(this.U(l, u, r)), this.id || `iso8601`);
}
function uo(e) {
  return ga(this) && e.includes(`year`) ? [...e, ...cc] : e;
}
function fo(e, t) {
  let n = Object.assign(Object.create(null), e);
  return (
    go(n, t, fc),
    ga(this) && (go(n, t, lc), this.id === xc && go(n, t, _c, cc)),
    n
  );
}
function po(e, t) {
  let n = ga(e),
    r = Cc[e.id || ``] || {},
    { era: i, eraYear: a, year: o } = t;
  if (i !== void 0 || a !== void 0) {
    if (i === void 0 || a === void 0) throw TypeError(gs);
    if (!n) throw RangeError(hs);
    let e = n[r[i] || i];
    if (e === void 0) throw RangeError(vs(i));
    let t = ha(a, e);
    if (o !== void 0 && o !== t) throw RangeError(_s);
    o = t;
  } else if (o === void 0) throw TypeError(ys(n));
  return o;
}
function mo(e, t, n, r) {
  let { month: i, monthCode: a } = t;
  if (a !== void 0) {
    let t = ((e, t, n, r) => {
      let i = e.F(n),
        [a, o] = da(t),
        s = pa(a, o, i);
      if (o) {
        let t = _a(e);
        if (t === void 0) throw RangeError(Cs);
        if (t > 0) {
          if (s > t) throw RangeError(Cs);
          if (i === void 0) {
            if (r === 1) throw RangeError(Cs);
            s--;
          }
        } else if (s !== -t || (i === void 0 && r === 1)) throw RangeError(Cs);
      }
      return s;
    })(e, a, n, r);
    if (i !== void 0 && i !== t) throw RangeError(xs);
    ((i = t), (r = 1));
  } else if (i === void 0) throw TypeError(Ss);
  return oe(`month`, i, 1, e.O(n), r);
}
function ho(e, t, n, r, i) {
  return g(t, `day`, 1, e.B(r, n), i);
}
function go(e, t, n, r) {
  let i = 0,
    a = [];
  for (let e of n) t[e] === void 0 ? a.push(e) : (i = 1);
  if ((Object.assign(e, t), i)) for (let t of r || a) delete e[t];
}
function _o(e) {
  let t = pu(e.calendar),
    [n, r, i] = t.u(e),
    [a, o] = t.m(n, r);
  return { year: n, monthCode: fa(a, o), day: i };
}
function vo(e) {
  return $t(ot($e(We(e))));
}
function yo(e, t, n, r, i = R) {
  return O(ot($e(We(n))), t(r), e(i));
}
function bo(e, t, n, r, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = R) {
  return k(w(jt(fe(x, de(Fc, [t, n, r, i, a, o, s, c, l])))), e(u));
}
function xo(e, t, n, r, i = R) {
  return en(C(Mt(fe(x, { isoYear: t, isoMonth: n, isoDay: r }))), e(i));
}
function So(e, t, n, r = R, i = 1) {
  let a = x(t),
    o = x(n),
    s = e(r);
  return tn(at(Mt({ isoYear: a, isoMonth: o, isoDay: x(i) })), s);
}
function Co(e, t, n, r = R, i = Jc) {
  let a = x(t),
    o = x(n),
    s = e(r);
  return nn(C(Mt({ isoYear: x(i), isoMonth: a, isoDay: o })), s);
}
function wo(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
  return rn(Ft(fe(x, de(H, [e, t, n, r, i, a])), 1));
}
function To(
  e = 0,
  t = 0,
  n = 0,
  r = 0,
  i = 0,
  a = 0,
  o = 0,
  s = 0,
  c = 0,
  l = 0,
) {
  return A(Ir(fe(Ke, de(B, [e, t, n, r, i, a, o, s, c, l]))));
}
function Eo(e, t, n = R) {
  return O(e.epochNanoseconds, t, n);
}
function Do(e) {
  return $t(e.epochNanoseconds);
}
function Oo(e, t) {
  return k(W(t, e));
}
function ko(e, t) {
  return en(W(t, e));
}
function Ao(e, t) {
  return rn(W(t, e));
}
function jo(e, t, n, r) {
  return O(
    ot(
      ((e, t, n, r) => {
        let i = ((e) => vl(qt(e)))(r);
        return or(e(t), n, i);
      })(e, n, t, r),
    ),
    n,
    t.calendar,
  );
}
function Mo(e, t, n, r, i) {
  let a = e(i.timeZone),
    o = i.plainTime,
    s = o === void 0 ? void 0 : t(o),
    c = n(a),
    l;
  return (
    (l = s ? or(c, { ...r, ...s }) : sr(c, { ...r, ...U })), O(l, a, r.calendar)
  );
}
function No(e, t = U) {
  return k(w({ ...e, ...t }));
}
function Po(e, t, n) {
  return ao(e(t.calendar), n);
}
function Fo(e, t, n) {
  return io(e(t.calendar), n);
}
function Io(e, t, n, r) {
  return ((e, t, n) => oo(e, t, hc, Re(n), pc))(e(t.calendar), n, r);
}
function Lo(e, t, n, r) {
  return ((e, t, n) => oo(e, t, vc, Re(n), uc))(e(t.calendar), n, r);
}
function Ro(e) {
  return $t(ot(et(Ke(e), Zs)));
}
function zo(e) {
  return $t(ot($e(We(e))));
}
function Bo(e, t, n) {
  let r = new Set(n);
  return (i, a) => {
    let o = n && he(i, n);
    if (
      !he(
        (i = ((e, t) => {
          let n = {};
          for (let r in t) e.has(r) || (n[r] = t[r]);
          return n;
        })(r, i)),
        e,
      )
    ) {
      if (a && o) throw TypeError(`Invalid formatting options`);
      i = { ...t, ...i };
    }
    return (
      n &&
        ((i.timeZone = Nl),
        [`full`, `long`].includes(i.ie) && (i.ie = `medium`)),
      i
    );
  };
}
function Vo(e, t = Ho, n = 0) {
  let [r, , , i] = e;
  return (a, o = Ku, ...s) => {
    let c = t(i && i(...s), a, o, r, n);
    return [c, ...Wo(e, c.resolvedOptions(), s)];
  };
}
function Ho(e, t, n, r, i) {
  if (((n = r(n, i)), e)) {
    if (n.timeZone !== void 0) throw TypeError(Ws);
    n.timeZone = e;
  }
  return new Kc(t, n);
}
function Uo() {
  return new Kc(void 0, { calendar: R }).resolvedOptions().calendar === R;
}
function Wo(e, t, n) {
  let [, r, i] = e;
  return n.map(
    (e) => (
      e.calendar &&
        ((e, t, n) => {
          if ((n || e !== `iso8601`) && e !== t) throw RangeError(Es);
        })(e.calendar, t.calendar, i),
      r(e, t)
    ),
  );
}
function Go(e, t, n) {
  let r = t.timeZone,
    i = e(r),
    a = { ...W(t, i), ...(n || U) },
    o;
  return (
    (o = n ? ar(i, a, a.offsetNanoseconds, 2) : sr(i, a)), O(o, r, t.calendar)
  );
}
function Ko(e, t = U) {
  return k(w({ ...e, ...t }));
}
function qo(e, t) {
  return { ...e, calendar: t };
}
function Jo(e, t) {
  return { ...e, timeZone: t };
}
function Yo(e) {
  let t = Xo();
  return ht(t, e.N(t));
}
function Xo() {
  return et(Date.now(), Zs);
}
function Zo() {
  return new Kc().resolvedOptions().timeZone;
}
var Qo = (e, t) => `Non-integer ${e}: ${t}`,
  $o = (e, t) => `Non-positive ${e}: ${t}`,
  es = (e, t) => `Non-finite ${e}: ${t}`,
  ts = (e) => `Cannot convert bigint to ${e}`,
  ns = (e) => `Invalid bigint: ${e}`,
  rs = `Cannot convert Symbol to string`,
  is = `Invalid object`,
  as = (e, t, n, r, i) =>
    i ? as(e, i[t], i[n], i[r]) : os(e, t) + `; must be between ${n}-${r}`,
  os = (e, t) => `Invalid ${e}: ${t}`,
  ss = (e) => `Missing ${e}`,
  cs = (e) => `Invalid field ${e}`,
  ls = (e) => `Duplicate field ${e}`,
  us = (e) => `No valid fields: ` + e.join(),
  ds = `Invalid bag`,
  fs = (e, t, n) => os(e, t) + `; must be ` + Object.keys(n).join(),
  ps = `Cannot use valueOf`,
  ms = `Invalid calling context`,
  hs = `Forbidden era/eraYear`,
  gs = `Mismatching era/eraYear`,
  _s = `Mismatching year/eraYear`,
  vs = (e) => `Invalid era: ${e}`,
  ys = (e) => `Missing year` + (e ? `/era/eraYear` : ``),
  bs = (e) => `Invalid monthCode: ${e}`,
  xs = `Mismatching month/monthCode`,
  Ss = `Missing month/monthCode`,
  Cs = `Invalid leap month`,
  ws = `Invalid protocol results`,
  Ts = (e) => os(`Calendar`, e),
  Es = `Mismatching Calendars`,
  Ds = (e) => os(`TimeZone`, e),
  Os = `Mismatching TimeZones`,
  ks = `Forbidden ICU TimeZone`,
  As = `Out-of-bounds offset`,
  js = `Out-of-bounds TimeZone gap`,
  Ms = `Invalid TimeZone offset`,
  Ns = `Ambiguous offset`,
  Ps = `Out-of-bounds date`,
  Fs = `Out-of-bounds duration`,
  Is = `Cannot mix duration signs`,
  Ls = `Missing relativeTo`,
  Rs = `Cannot use large units`,
  zs = `Required smallestUnit or largestUnit`,
  Bs = `smallestUnit > largestUnit`,
  P = (e) => `Cannot parse: ${e}`,
  Vs = (e) => `Invalid substring: ${e}`,
  Hs = (e) => `Cannot format ${e}`,
  Us = `Mismatching types for formatting`,
  Ws = `Cannot specify TimeZone`,
  Gs = b(pe, (e, t) => t),
  Ks = b(pe, (e, t, n) => n),
  F = b(xe, 2),
  qs = {
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
  Js = Object.keys(qs),
  I = 864e5,
  Ys = 1e3,
  Xs = 1e3,
  Zs = 1e6,
  Qs = 1e9,
  $s = 6e10,
  ec = 36e11,
  L = 864e11,
  tc = [1, Xs, Zs, Qs, $s, ec, L],
  nc = Js.slice(0, 6),
  rc = be(nc),
  ic = [`offset`],
  ac = [`timeZone`],
  oc = nc.concat(ic),
  sc = oc.concat(ac),
  cc = [`era`, `eraYear`],
  lc = cc.concat([`year`]),
  uc = [`year`],
  dc = [`monthCode`],
  fc = [`month`].concat(dc),
  pc = [`day`],
  mc = fc.concat(uc),
  hc = dc.concat(uc),
  gc = pc.concat(mc),
  _c = pc.concat(fc),
  vc = pc.concat(dc),
  yc = Ks(nc, 0),
  R = `iso8601`,
  bc = `gregory`,
  xc = `japanese`,
  Sc = {
    [bc]: { "gregory-inverse": -1, gregory: 0 },
    [xc]: {
      "japanese-inverse": -1,
      japanese: 0,
      meiji: 1867,
      taisho: 1911,
      showa: 1925,
      heisei: 1988,
      reiwa: 2018,
    },
    ethiopic: { ethioaa: 0, ethiopic: 5500 },
    coptic: { "coptic-inverse": -1, coptic: 0 },
    roc: { "roc-inverse": -1, roc: 0 },
    buddhist: { be: 0 },
    islamic: { ah: 0 },
    indian: { saka: 0 },
    persian: { ap: 0 },
  },
  Cc = {
    [bc]: { bce: `gregory-inverse`, ce: `gregory` },
    [xc]: { bce: `japanese-inverse`, ce: `japanese` },
    ethiopic: { era0: `ethioaa`, era1: `ethiopic` },
    coptic: { era0: `coptic-inverse`, era1: `coptic` },
    roc: { broc: `roc-inverse`, minguo: `roc` },
  },
  wc = { chinese: 13, dangi: 13, hebrew: -6 },
  z = b(ze, `string`),
  Tc = b(ze, `boolean`),
  Ec = b(ze, `number`),
  B = Js.map((e) => e + `s`),
  Dc = be(B),
  Oc = B.slice(0, 6),
  kc = B.slice(6),
  Ac = kc.slice(1),
  jc = Gs(B),
  V = Ks(B, 0),
  Mc = Ks(Oc, 0),
  Nc = b(_e, B),
  H = [
    `isoNanosecond`,
    `isoMicrosecond`,
    `isoMillisecond`,
    `isoSecond`,
    `isoMinute`,
    `isoHour`,
  ],
  Pc = [`isoDay`, `isoMonth`, `isoYear`],
  Fc = H.concat(Pc),
  Ic = be(Pc),
  Lc = be(H),
  Rc = be(Fc),
  U = Ks(Lc, 0),
  zc = b(_e, Fc),
  Bc = 1e8,
  Vc = Bc * I,
  Hc = [Bc, 0],
  Uc = [-1e8, 0],
  Wc = 275760,
  Gc = -271821,
  Kc = Intl.DateTimeFormat,
  qc = 1970,
  Jc = 1972,
  Yc = 12,
  Xc = pt(1868, 9, 8),
  Zc = v(At, WeakMap),
  Qc = `smallestUnit`,
  $c = `unit`,
  el = `roundingMode`,
  tl = `roundingIncrement`,
  nl = `fractionalSecondDigits`,
  rl = `relativeTo`,
  il = `direction`,
  al = { constrain: 0, reject: 1 },
  ol = Object.keys(al),
  sl = { compatible: 0, reject: 1, earlier: 2, later: 3 },
  cl = { reject: 0, use: 1, prefer: 2, ignore: 3 },
  ll = { auto: 0, never: 1, critical: 2, always: 3 },
  ul = { auto: 0, never: 1, critical: 2 },
  dl = { auto: 0, never: 1 },
  fl = {
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
  pl = { previous: -1, next: 1 },
  ml = b(Xt, Qc),
  hl = b(Xt, `largestUnit`),
  gl = b(Xt, $c),
  _l = b(Zt, `overflow`, al),
  vl = b(Zt, `disambiguation`, sl),
  yl = b(Zt, `offset`, cl),
  bl = b(Zt, `calendarName`, ll),
  xl = b(Zt, `timeZoneName`, ul),
  Sl = b(Zt, `offset`, dl),
  Cl = b(Zt, el, fl),
  wl = `PlainYearMonth`,
  Tl = `PlainMonthDay`,
  El = `PlainDate`,
  Dl = `PlainDateTime`,
  Ol = `PlainTime`,
  kl = `ZonedDateTime`,
  Al = `Instant`,
  jl = `Duration`,
  Ml = [
    Math.floor,
    (e) => (ke(e) ? Math.floor(e) : Math.round(e)),
    Math.ceil,
    (e) => (ke(e) ? Math.ceil(e) : Math.round(e)),
    Math.trunc,
    (e) => (ke(e) ? Math.trunc(e) || 0 : Math.round(e)),
    (e) => (e < 0 ? Math.floor(e) : Math.ceil(e)),
    (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0,
    (e) => (ke(e) ? (e = Math.trunc(e) || 0) + (e % 2) : Math.round(e)),
  ],
  Nl = `UTC`,
  Pl = 5184e3,
  Fl = ft(1847),
  Il = ft(
    (() => {
      let e = new Date();
      return (e.getTime() === 0 ? 2040 : e.getUTCFullYear()) + 10;
    })(),
  ),
  Ll = /0+$/,
  W = v(ir, WeakMap),
  Rl = 2 ** 32 - 1,
  G = v((e) => {
    let t = xi(e);
    return typeof t == `object` ? new Bl(t) : new zl(t || 0);
  }),
  zl = class {
    constructor(e) {
      this.j = e;
    }
    N() {
      return this.j;
    }
    v(e) {
      return (
        ((e) => {
          let t = E({ ...e, ...U });
          if (!t || Math.abs(t[0]) > 1e8) throw RangeError(Ps);
        })(e),
        [dt(e, this.j)]
      );
    }
    l() {}
  },
  Bl = class {
    constructor(e) {
      this.ae = ((e) => {
        function t(e) {
          let [t, s] = Ur(Ce(e, a, o)),
            c = r(t),
            l = r(s);
          return c === l ? c : n(i(t, s), c, l, e);
        }
        function n(t, n, r, i) {
          let a, o;
          for (
            ;
            (i === void 0 ||
              (a = i < t[0] ? n : i >= t[1] ? r : void 0) === void 0) &&
            (o = t[1] - t[0]);
          ) {
            let n = t[0] + Math.floor(o / 2);
            e(n) === r ? (t[1] = n) : (t[0] = n + 1);
          }
          return a;
        }
        let r = v(e),
          i = v(Hr),
          a = Fl,
          o = Il;
        return {
          se(e) {
            let n = t(e - 86400),
              r = t(e + 86400),
              i = e - n,
              a = e - r;
            if (n === r) return [i];
            let o = t(i);
            return o === t(a) ? [e - o] : n > r ? [i, a] : [];
          },
          ue: t,
          l(e, t) {
            let s = Ce(e, a, o),
              [c, l] = Ur(s),
              u = Pl * t,
              d =
                t < 0
                  ? () => l > a || ((a = s), 0)
                  : () => c < o || ((o = s), 0);
            for (; d();) {
              let a = r(c),
                o = r(l);
              if (a !== o) {
                let r = i(c, l);
                n(r, a, o);
                let s = r[0];
                if ((Se(s, e) || 1) === t) return s;
              }
              ((c += u), (l += u));
            }
          },
        };
      })(
        ((e) => (t) => {
          let n = _t(e, t * Ys);
          return (
            ft(
              Ca(n),
              parseInt(n.month),
              parseInt(n.day),
              parseInt(n.hour),
              parseInt(n.minute),
              parseInt(n.second),
            ) - t
          );
        })(e),
      );
    }
    N(e) {
      return this.ae.ue(lt(e)) * Qs;
    }
    v(e) {
      let [t, n] = [
        ft(
          (r = e).isoYear,
          r.isoMonth,
          r.isoDay,
          r.isoHour,
          r.isoMinute,
          r.isoSecond,
        ),
        r.isoMillisecond * Zs + r.isoMicrosecond * Xs + r.isoNanosecond,
      ];
      var r;
      return this.ae.se(t).map((e) => ot(Xe(et(e, Qs), n)));
    }
    l(e, t) {
      let [n, r] = ut(e),
        i = this.ae.l(n + (t > 0 || r ? 1 : 0), t);
      if (i !== void 0) return et(i, Qs);
    }
  },
  Vl = `([+-])`,
  Hl = `(?:[.,](\\d{1,9}))?`,
  Ul = `(?:(?:${Vl}(\\d{6}))|(\\d{4}))-?(\\d{2})`,
  Wl = `(\\d{2})(?::?(\\d{2})(?::?(\\d{2})` + Hl + `)?)?`,
  Gl = Vl + Wl,
  Kl =
    Ul +
    `-?(\\d{2})(?:[T ](\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?(Z|([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?)?)?`,
  ql = `\\[(!?)([^\\]]*)\\]`,
  Jl = `((?:${ql}){0,9})`,
  Yl = hi(Ul + Jl),
  Xl = hi(`(?:--)?(\\d{2})-?(\\d{2})` + Jl),
  Zl = hi(Kl + Jl),
  Ql = hi(`T?` + Wl + `(?:` + Gl + `)?` + Jl),
  $l = hi(Gl),
  eu = new RegExp(ql, `g`),
  tu = hi(
    `${Vl}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Hl}H)?(?:(\\d+)${Hl}M)?(?:(\\d+)${Hl}S)?)?`,
  ),
  nu = v(
    (e) =>
      new Kc(`en`, {
        calendar: R,
        timeZone: e,
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
  ru =
    /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/,
  iu = /[^\w\/:+-]+/,
  au = /^M(\d{2})(L?)$/,
  ou = v(ya),
  su = v(
    (e) =>
      new Kc(`en`, {
        calendar: e,
        timeZone: Nl,
        era: `short`,
        year: `numeric`,
        month: `short`,
        day: `numeric`,
        hour12: 0,
      }),
  ),
  cu = {
    P: yr,
    h: $i,
    ee: so,
    ne: co,
    te: lo,
    fields: uo,
    oe: fo,
    inLeapYear: oa,
    monthsInYear: sa,
    daysInMonth: ca,
    daysInYear: la,
    dayOfYear: ua,
    era(e) {
      return this.$(e)[0];
    },
    eraYear(e) {
      return this.$(e)[1];
    },
    monthCode(e) {
      let [t, n] = this.u(e),
        [r, i] = this.m(t, n);
      return fa(r, i);
    },
    dayOfWeek: Ot,
    daysInWeek: Ct,
  },
  lu = { u: yt, $: kt, m: bt },
  uu = Object.assign(
    {},
    cu,
    Object.assign(
      {},
      { dayOfYear: ua, u: yt, M: pt },
      {
        weekOfYear: ia,
        yearOfWeek: aa,
        I(e) {
          function t(e) {
            return (7 - e < r ? 7 : 0) - e;
          }
          function n(e) {
            let n = Et(f + e),
              r = e || 1;
            return (u = (n + (t(Te(c + n * r, 7)) - l) * r) / 7);
          }
          let r = this.id ? 1 : 4,
            i = Ot(e),
            a = this.dayOfYear(e),
            o = Te(i - 1, 7),
            s = a - 1,
            c = Te(o - s, 7),
            l = t(c),
            u,
            d = Math.floor((s - l) / 7) + 1,
            f = e.isoYear;
          return (
            d ? d > n(0) && ((d = 1), f++) : ((d = n(-1)), f--), [d, f, u]
          );
        },
      },
    ),
    {
      u: yt,
      $: kt,
      m: bt,
      R: xt,
      L: Dt,
      F: ve,
      O: wt,
      q: ea,
      B: Tt,
      G: Et,
      U: St,
      M: pt,
      p: xr,
      year(e) {
        return e.isoYear;
      },
      month(e) {
        return e.isoMonth;
      },
      day: vt,
    },
  ),
  du = { u: Ta, $: Pa, m: Oa },
  fu = Object.assign(
    {},
    cu,
    Object.assign(
      {},
      { dayOfYear: ua, u: Ta, M: Da },
      {
        I() {
          return [];
        },
      },
      { weekOfYear: ia, yearOfWeek: aa },
    ),
    {
      u: Ta,
      $: Pa,
      m: Oa,
      R: Fa,
      L: Aa,
      F: ka,
      O: Na,
      q: ta,
      B: Ma,
      G: ja,
      U: Ea,
      M: Da,
      p: Sr,
      year(e) {
        return this._(e).year;
      },
      month(e) {
        let { year: t, V: n } = this._(e),
          { X: r } = this.J(t);
        return r[n] + 1;
      },
      day: wa,
    },
  ),
  pu = Ba(lu, du),
  K = Ba(uu, fu),
  mu = Object.assign(
    {},
    {
      era: Ue,
      eraYear: x,
      year: x,
      month: qe,
      monthCode(e) {
        let t = Ue(e);
        return (da(t), t);
      },
      day: qe,
    },
    Ks(nc, x),
    Ks(B, Ke),
    {
      offset(e) {
        let t = Ue(e);
        return (qr(t), t);
      },
    },
  ),
  hu = b(me, nc, H),
  gu = b(me, H, nc),
  _u = `numeric`,
  vu = [`timeZoneName`],
  yu = { month: _u, day: _u },
  bu = { year: _u, month: _u },
  xu = Object.assign({}, bu, { day: _u }),
  Su = { hour: _u, minute: _u, second: _u },
  Cu = Object.assign({}, xu, Su),
  wu = Object.assign({}, Cu, { timeZoneName: `short` }),
  Tu = Object.keys(bu),
  Eu = Object.keys(yu),
  Du = Object.keys(xu),
  Ou = Object.keys(Su),
  ku = [`dateStyle`],
  Au = Tu.concat(ku),
  ju = Eu.concat(ku),
  Mu = Du.concat(ku, [`weekday`]),
  Nu = Ou.concat([`dayPeriod`, `timeStyle`, `fractionalSecondDigits`]),
  Pu = Mu.concat(Nu),
  Fu = vu.concat(Nu),
  Iu = vu.concat(Mu),
  Lu = vu.concat([`day`, `weekday`], Nu),
  Ru = vu.concat([`year`, `weekday`], Nu),
  zu = Bo(Pu, Cu),
  Bu = Bo(Pu, wu),
  Vu = Bo(Pu, Cu, vu),
  Hu = Bo(Mu, xu, Fu),
  Uu = Bo(Nu, Su, Iu),
  Wu = Bo(Au, bu, Lu),
  Gu = Bo(ju, yu, Ru),
  Ku = {},
  qu = Uo(),
  Ju = [zu, an],
  Yu = [
    Bu,
    an,
    0,
    (e, t) => {
      let n = e.timeZone;
      if (t && t.timeZone !== n) throw RangeError(Os);
      return n;
    },
  ],
  Xu = [Vu, T],
  Zu = [Hu, T],
  Qu = [Uu, (e) => st(e) / Zs],
  $u = [Wu, T, qu],
  ed = [Gu, T, qu];
function td(e, t, n, r, i, a) {
  function o(...e) {
    if (!(this instanceof o)) throw TypeError(ms);
    {
      let n = t(...e);
      (Td(this, n), rd(this, n, a));
    }
  }
  function s(e, t) {
    return Object.defineProperties(
      function (...t) {
        return e.call(this, c(this), ...t);
      },
      se(t),
    );
  }
  function c(t) {
    let n = Y(t);
    if (!n || n.branding !== e) throw TypeError(ms);
    return n;
  }
  return (
    Object.defineProperties(o.prototype, {
      ...le(fe(s, n)),
      ...ce(fe(s, r)),
      ...ue(`Temporal.` + e),
    }),
    Object.defineProperties(o, { ...ce(i), ...se(e) }),
    [
      o,
      (e) => {
        let t = Object.create(o.prototype);
        return (Td(t, e), rd(t, e, a), t);
      },
      c,
    ]
  );
}
function nd(e) {
  if (Y(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw TypeError(ds);
  return e;
}
function rd(e, t, n) {
  rd.name === `dbg` &&
    Object.defineProperty(e, "o", {
      value: n(t),
      writable: 0,
      enumerable: 0,
      configurable: 0,
    });
}
function id(e) {
  return ad(e) || `iso8601`;
}
function ad(e) {
  let { calendar: t } = e;
  if (t !== void 0) return od(t);
}
function od(e) {
  if (_(e)) {
    let { calendar: t } = Y(e) || {};
    if (!t) throw TypeError(Ts(e));
    return t;
  }
  return ((e) => Ra(ti(z(e))))(e);
}
function sd(e) {
  let t = {};
  for (let n in e)
    t[n] = (e) => {
      let { calendar: t } = e;
      return K(t)[n](e);
    };
  return t;
}
function cd() {
  throw TypeError(ps);
}
function q(e) {
  if (_(e)) {
    let { timeZone: t } = Y(e) || {};
    if (!t) throw TypeError(Ds(e));
    return t;
  }
  return ((e) => yi(ni(z(e))))(e);
}
function J(e) {
  if (_(e)) {
    let t = Y(e);
    return t && t.branding === `Duration` ? t : Ja(e);
  }
  return ei(e);
}
function ld(e) {
  if (e !== void 0) {
    if (_(e)) {
      let t = Y(e) || {};
      switch (t.branding) {
        case kl:
        case El:
          return t;
        case Dl:
          return en(t);
      }
      let n = id(e);
      return { ...Va(q, G, K(n), e), calendar: n };
    }
    return Gr(e);
  }
}
function ud(e, t) {
  if (_(e)) {
    let n = Y(e) || {};
    switch (n.branding) {
      case Ol:
        return (D(t), n);
      case Dl:
        return (D(t), rn(n));
      case kl:
        return (D(t), Ao(G, n));
    }
    return qa(e, t);
  }
  let n = $r(e);
  return (D(t), n);
}
function dd(e) {
  return e === void 0 ? void 0 : ud(e);
}
function fd(e, t) {
  if (_(e)) {
    let n = Y(e) || {};
    switch (n.branding) {
      case Dl:
        return (D(t), n);
      case El:
        return (D(t), k({ ...n, ...U }));
      case kl:
        return (D(t), Oo(G, n));
    }
    return Ua(K(id(e)), e, t);
  }
  let n = Jr(e);
  return (D(t), n);
}
function pd(e, t) {
  if (_(e)) {
    let n = Y(e);
    if (n && n.branding === `PlainMonthDay`) return (D(t), n);
    let r = ad(e);
    return Ka(K(r || `iso8601`), !r, e, t);
  }
  let n = Qr(K, e);
  return (D(t), n);
}
function md(e, t) {
  if (_(e)) {
    let n = Y(e);
    return n && n.branding === `PlainYearMonth`
      ? (D(t), n)
      : Ga(K(id(e)), e, t);
  }
  let n = Xr(K, e);
  return (D(t), n);
}
function hd(e, t) {
  if (_(e)) {
    let n = Y(e) || {};
    switch (n.branding) {
      case El:
        return (D(t), n);
      case Dl:
        return (D(t), en(n));
      case kl:
        return (D(t), ko(G, n));
    }
    return Wa(K(id(e)), e, t);
  }
  let n = Yr(e);
  return (D(t), n);
}
function gd(e, t) {
  if (_(e)) {
    let n = Y(e);
    if (n && n.branding === `ZonedDateTime`) return (It(t), n);
    let r = id(e);
    return Ha(q, G, K(r), r, e, t);
  }
  return Kr(e, t);
}
function _d(e) {
  return fe((e) => (t) => e(vd(t)), e);
}
function vd(e) {
  return W(e, G);
}
function yd(e) {
  if (_(e)) {
    let t = Y(e);
    if (t)
      switch (t.branding) {
        case Al:
          return t;
        case kl:
          return $t(t.epochNanoseconds);
      }
  }
  return Wr(e);
}
function bd() {
  function e(e, n) {
    return new t(e, n);
  }
  function t(e, t = Object.create(null)) {
    pf.set(
      this,
      ((e, t) => {
        let n = new Kc(e, t),
          r = n.resolvedOptions(),
          i = r.locale,
          a = y(Object.keys(t), r),
          o = v(Cd),
          s = (e, ...t) => {
            if (e) {
              if (t.length !== 2) throw TypeError(Us);
              for (let e of t) if (e === void 0) throw TypeError(Us);
            }
            e || t[0] !== void 0 || (t = []);
            let r = t.map((e) => Y(e) || Number(e)),
              s,
              c = 0;
            for (let e of r) {
              let t = typeof e == `object` ? e.branding : void 0;
              if (c++ && t !== s) throw TypeError(Us);
              s = t;
            }
            return s ? o(s)(i, a, ...r) : [n, ...r];
          };
        return ((s.i = n), s);
      })(e, t),
    );
  }
  let n = Kc.prototype,
    r = Object.getOwnPropertyDescriptors(n),
    i = Object.getOwnPropertyDescriptors(Kc);
  for (let t in r) {
    let n = r[t],
      i = t.startsWith(`format`) && xd(t);
    typeof n.value == `function`
      ? (n.value = t === `constructor` ? e : i || Sd(t))
      : i &&
        ((n.get = function () {
          if (!pf.has(this)) throw TypeError(`Invalid calling context`);
          return (...e) => i.apply(this, e);
        }),
        Object.defineProperties(n.get, se(`get ${t}`)));
  }
  return (
    (i.prototype.value = t.prototype = Object.create({}, r)),
    Object.defineProperties(e, i),
    e
  );
}
function xd(e) {
  return Object.defineProperties(
    function (...t) {
      let [n, ...r] = pf.get(this)(e.includes(`Range`), ...t);
      return n[e](...r);
    },
    se(e),
  );
}
function Sd(e) {
  return Object.defineProperties(
    function (...t) {
      return pf.get(this).i[e](...t);
    },
    se(e),
  );
}
function Cd(e) {
  let t = Rd[e];
  if (!t) throw TypeError(Hs(e));
  return Vo(t, v(Ho), 1);
}
var wd = new WeakMap(),
  Y = wd.get.bind(wd),
  Td = wd.set.bind(wd),
  Ed = {
    era: Me,
    eraYear: Pe,
    year: Ie,
    month: Fe,
    daysInMonth: Fe,
    daysInYear: Fe,
    inLeapYear: Tc,
    monthsInYear: Fe,
  },
  Dd = { monthCode: z },
  Od = { day: Fe },
  kd = sd(
    Object.assign({}, Ed, Dd, Od, {
      dayOfWeek: Fe,
      dayOfYear: Fe,
      weekOfYear: Ne,
      yearOfWeek: Pe,
      daysInWeek: Fe,
    }),
  ),
  Ad = sd({ ...Ed, ...Dd }),
  jd = sd({ ...Dd, ...Od }),
  Md = { calendarId: (e) => e.calendar },
  Nd = pe((e) => (t) => t[e], B.concat(`sign`)),
  Pd = pe((e, t) => (e) => e[H[t]], nc),
  Fd = { epochMilliseconds: an, epochNanoseconds: on },
  [Id, X, Ld] = td(
    jl,
    To,
    { ...Nd, blank: Pr },
    {
      with: (e, t) => X(ro(e, t)),
      negated: (e) => X(Nr(e)),
      abs: (e) => X(Mr(e)),
      add: (e, t, n) => X(Ar(ld, K, G, 0, e, J(t), n)),
      subtract: (e, t, n) => X(Ar(ld, K, G, 1, e, J(t), n)),
      round: (e, t) => X(jr(ld, K, G, e, t)),
      total: (e, t) => cn(ld, K, G, e, t),
      toLocaleString(e, t, n) {
        return Intl.DurationFormat
          ? new Intl.DurationFormat(t, n).format(this)
          : Wn(e);
      },
      toString: Wn,
      toJSON: (e) => Wn(e),
      valueOf: cd,
    },
    { from: (e) => X(J(e)), compare: (e, t, n) => wi(ld, K, G, J(e), J(t), n) },
    Wn,
  ),
  Rd = {
    Instant: Ju,
    PlainDateTime: Xu,
    PlainDate: Zu,
    PlainTime: Qu,
    PlainYearMonth: $u,
    PlainMonthDay: ed,
  },
  zd = Vo(Ju),
  Bd = Vo(Yu),
  Vd = Vo(Xu),
  Hd = Vo(Zu),
  Ud = Vo(Qu),
  Wd = Vo($u),
  Gd = Vo(ed),
  [Kd, qd] = td(
    Ol,
    wo,
    Pd,
    {
      with(e, t, n) {
        return qd(no(this, nd(t), n));
      },
      add: (e, t) => qd(pr(0, e, J(t))),
      subtract: (e, t) => qd(pr(1, e, J(t))),
      until: (e, t, n) => X(Hi(0, e, ud(t), n)),
      since: (e, t, n) => X(Hi(1, e, ud(t), n)),
      round: (e, t) => qd(gn(e, t)),
      equals: (e, t) => Pi(e, ud(t)),
      toLocaleString(e, t, n) {
        let [r, i] = Ud(t, n, e);
        return r.format(i);
      },
      toString: Un,
      toJSON: (e) => Un(e),
      valueOf: cd,
    },
    { from: (e, t) => qd(ud(e, t)), compare: (e, t) => Di(ud(e), ud(t)) },
    Un,
  ),
  [Jd, Yd] = td(
    Dl,
    b(bo, La),
    { ...Md, ...kd, ...Pd },
    {
      with: (e, t, n) => Yd(Qa(K, e, nd(t), n)),
      withCalendar: (e, t) => Yd(qo(e, od(t))),
      withPlainTime: (e, t) => Yd(Ko(e, dd(t))),
      add: (e, t, n) => Yd(ur(K, 0, e, J(t), n)),
      subtract: (e, t, n) => Yd(ur(K, 1, e, J(t), n)),
      until: (e, t, n) => X(Ri(K, 0, e, fd(t), n)),
      since: (e, t, n) => X(Ri(K, 1, e, fd(t), n)),
      round: (e, t) => Yd(hn(e, t)),
      equals: (e, t) => Ai(e, fd(t)),
      toZonedDateTime: (e, t, n) => Z(jo(G, e, q(t), n)),
      toPlainDate: (e) => rf(en(e)),
      toPlainTime: (e) => qd(rn(e)),
      toLocaleString(e, t, n) {
        let [r, i] = Vd(t, n, e);
        return r.format(i);
      },
      toString: zn,
      toJSON: (e) => zn(e),
      valueOf: cd,
    },
    { from: (e, t) => Yd(fd(e, t)), compare: (e, t) => Ti(fd(e), fd(t)) },
    zn,
  ),
  [Xd, Zd, Qd] = td(
    Tl,
    b(Co, La),
    { ...Md, ...jd },
    {
      with: (e, t, n) => Zd(to(K, e, nd(t), n)),
      equals: (e, t) => Ni(e, pd(t)),
      toPlainDate(e, t) {
        return rf(Lo(K, e, this, t));
      },
      toLocaleString(e, t, n) {
        let [r, i] = Gd(t, n, e);
        return r.format(i);
      },
      toString: Hn,
      toJSON: (e) => Hn(e),
      valueOf: cd,
    },
    { from: (e, t) => Zd(pd(e, t)) },
    Hn,
  ),
  [$d, ef, tf] = td(
    wl,
    b(So, La),
    { ...Md, ...Ad },
    {
      with: (e, t, n) => ef(eo(K, e, nd(t), n)),
      add: (e, t, n) => ef(fr(K, 0, e, J(t), n)),
      subtract: (e, t, n) => ef(fr(K, 1, e, J(t), n)),
      until: (e, t, n) => X(Bi(K, 0, e, md(t), n)),
      since: (e, t, n) => X(Bi(K, 1, e, md(t), n)),
      equals: (e, t) => Mi(e, md(t)),
      toPlainDate(e, t) {
        return rf(Io(K, e, this, t));
      },
      toLocaleString(e, t, n) {
        let [r, i] = Wd(t, n, e);
        return r.format(i);
      },
      toString: Vn,
      toJSON: (e) => Vn(e),
      valueOf: cd,
    },
    { from: (e, t) => ef(md(e, t)), compare: (e, t) => Ei(md(e), md(t)) },
    Vn,
  ),
  [nf, rf, af] = td(
    El,
    b(xo, La),
    { ...Md, ...kd },
    {
      with: (e, t, n) => rf($a(K, e, nd(t), n)),
      withCalendar: (e, t) => rf(qo(e, od(t))),
      add: (e, t, n) => rf(dr(K, 0, e, J(t), n)),
      subtract: (e, t, n) => rf(dr(K, 1, e, J(t), n)),
      until: (e, t, n) => X(zi(K, 0, e, hd(t), n)),
      since: (e, t, n) => X(zi(K, 1, e, hd(t), n)),
      equals: (e, t) => ji(e, hd(t)),
      toZonedDateTime(e, t) {
        return Z(Mo(q, ud, G, e, _(t) ? t : { timeZone: t }));
      },
      toPlainDateTime: (e, t) => Yd(No(e, dd(t))),
      toPlainYearMonth(e) {
        return ef(Po(K, e, this));
      },
      toPlainMonthDay(e) {
        return Zd(Fo(K, e, this));
      },
      toLocaleString(e, t, n) {
        let [r, i] = Hd(t, n, e);
        return r.format(i);
      },
      toString: Bn,
      toJSON: (e) => Bn(e),
      valueOf: cd,
    },
    { from: (e, t) => rf(hd(e, t)), compare: (e, t) => Ei(hd(e), hd(t)) },
    Bn,
  ),
  [of, Z] = td(
    kl,
    b(yo, La, vi),
    {
      ...Fd,
      ...Md,
      ..._d(kd),
      ..._d(Pd),
      offset: (e) => Qn(vd(e).offsetNanoseconds),
      offsetNanoseconds: (e) => vd(e).offsetNanoseconds,
      timeZoneId: (e) => e.timeZone,
      hoursInDay: (e) => _n(G, e),
    },
    {
      with: (e, t, n) => Z(Za(K, G, e, nd(t), n)),
      withCalendar: (e, t) => Z(qo(e, od(t))),
      withTimeZone: (e, t) => Z(Jo(e, q(t))),
      withPlainTime: (e, t) => Z(Go(G, e, dd(t))),
      add: (e, t, n) => Z(lr(K, G, 0, e, J(t), n)),
      subtract: (e, t, n) => Z(lr(K, G, 1, e, J(t), n)),
      until: (e, t, n) => X(A(Li(K, G, 0, e, gd(t), n))),
      since: (e, t, n) => X(A(Li(K, G, 1, e, gd(t), n))),
      round: (e, t) => Z(mn(G, e, t)),
      startOfDay: (e) => Z(vn(G, e)),
      equals: (e, t) => ki(e, gd(t)),
      toInstant: (e) => cf(Do(e)),
      toPlainDateTime: (e) => Yd(Oo(G, e)),
      toPlainDate: (e) => rf(ko(G, e)),
      toPlainTime: (e) => qd(Ao(G, e)),
      toLocaleString(e, t, n = {}) {
        let [r, i] = Bd(t, n, e);
        return r.format(i);
      },
      toString: (e, t) => Rn(G, e, t),
      toJSON: (e) => Rn(G, e),
      valueOf: cd,
      getTimeZoneTransition(e, t) {
        let { timeZone: n, epochNanoseconds: r } = e,
          i = Vt(t),
          a = G(n).l(r, i);
        return a ? Z({ ...e, epochNanoseconds: a }) : null;
      },
    },
    { from: (e, t) => Z(gd(e, t)), compare: (e, t) => Ci(gd(e), gd(t)) },
    (e) => Rn(G, e),
  ),
  [sf, cf, lf] = td(
    Al,
    vo,
    Fd,
    {
      add: (e, t) => cf(cr(0, e, J(t))),
      subtract: (e, t) => cf(cr(1, e, J(t))),
      until: (e, t, n) => X(Ii(0, e, yd(t), n)),
      since: (e, t, n) => X(Ii(1, e, yd(t), n)),
      round: (e, t) => cf(pn(e, t)),
      equals: (e, t) => Oi(e, yd(t)),
      toZonedDateTimeISO: (e, t) => Z(Eo(e, q(t))),
      toLocaleString(e, t, n) {
        let [r, i] = zd(t, n, e);
        return r.format(i);
      },
      toString: (e, t) => Ln(q, G, e, t),
      toJSON: (e) => Ln(q, G, e),
      valueOf: cd,
    },
    {
      from: (e) => cf(yd(e)),
      fromEpochMilliseconds: (e) => cf(Ro(e)),
      fromEpochNanoseconds: (e) => cf(zo(e)),
      compare: (e, t) => Si(yd(e), yd(t)),
    },
    (e) => Ln(q, G, e),
  ),
  uf = Object.defineProperties(
    {},
    {
      ...ue(`Temporal.Now`),
      ...ce({
        timeZoneId: () => Zo(),
        instant: () => cf($t(Xo())),
        zonedDateTimeISO: (e = Zo()) => Z(O(Xo(), q(e), R)),
        plainDateTimeISO: (e = Zo()) => Yd(k(Yo(G(q(e))), R)),
        plainDateISO: (e = Zo()) => rf(en(Yo(G(q(e))), R)),
        plainTimeISO: (e = Zo()) => qd(rn(Yo(G(q(e))))),
      }),
    },
  ),
  df = Object.defineProperties(
    {},
    {
      ...ue(`Temporal`),
      ...ce({
        PlainYearMonth: $d,
        PlainMonthDay: Xd,
        PlainDate: nf,
        PlainTime: Kd,
        PlainDateTime: Jd,
        ZonedDateTime: of,
        Instant: sf,
        Duration: Id,
        Now: uf,
      }),
    },
  ),
  ff = bd(),
  pf = new WeakMap();
(Object.create(Intl), ce({ DateTimeFormat: ff }));
var Q = e(t(), 1),
  mf = [
    { eType: 0, strLabel: `Off-topic` },
    { eType: 1, strLabel: `Pending Internal Valve Review` },
    { eType: 2, strLabel: `Testing Only` },
  ];
function hf(e) {
  return mf.find((t) => t.eType == e)?.strLabel ?? `Type ${e}`;
}
function gf(e) {
  return e
    ? df.Instant.fromEpochMilliseconds(e * 1e3)
        .toZonedDateTimeISO(`UTC`)
        .toPlainDate()
    : null;
}
function _f(e) {
  return [`reviewbombperiods`, e];
}
function vf(e) {
  return r({
    queryKey: _f(e),
    queryFn: () =>
      o(
        `${h.STORE_BASE_URL}ajaxmanagereviewanomalies/${e}/`,
        `ajaxmanagereviewanomalies`,
        { sessionid: ie() },
      ),
    enabled: !!e,
  });
}
function yf(e) {
  let t = i();
  return n({
    mutationFn: async (t) => {
      let n = { sessionid: ie(), action: t.action };
      (t.action != `add` && (n.id = t.strID),
        t.action != `remove` &&
          ((n.start_date = t.strStartDate),
          (n.end_date = t.strEndDate),
          (n.internal_comment = t.strInternalComment),
          (n.type = t.eType)),
        await o(
          `${h.STORE_BASE_URL}handlereviewanomaly/${e}/`,
          `handlereviewanomaly`,
          n,
        ));
    },
    onSuccess: () => {
      t.invalidateQueries({ queryKey: _f(e) });
    },
  });
}
var bf = `ljjW1IoFyg0-`,
  xf = `cRPUoqfRaB8-`,
  Sf = `FUYQ760r1PU-`,
  Cf = `ggJxfkWmvFw-`,
  wf = `WcCHM5ikzHI-`,
  $ = a(),
  Tf = `YYYY-MM-DD`,
  Ef = `Internal Comment`;
function Df(e) {
  try {
    return (df.PlainDate.from(e), !0);
  } catch {
    return !1;
  }
}
function Of(e) {
  return e ? (gf(e)?.toString() ?? ``) : ``;
}
function kf(e) {
  let { period: t, onSubmit: n, onClose: r } = e,
    [i, a] = Q.useState(() => Of(t?.nStartDate)),
    [o, s] = Q.useState(() => Of(t?.nEndDate)),
    [c, l] = Q.useState(t?.strInternalComment ?? ``),
    [f, p] = Q.useState(t?.eType ?? mf[0].eType),
    te = Q.useMemo(
      () => mf.map((e) => ({ label: e.strLabel, data: e.eType })),
      [],
    ),
    h = Df(i),
    ie = !o || Df(o),
    ae = h && ie && c.trim().length > 0,
    g = Q.useCallback((e) => a(e.target.value), []),
    oe = Q.useCallback((e) => s(e.target.value), []),
    _ = Q.useCallback((e) => l(e.target.value), []),
    v = Q.useCallback((e) => p(e.data), []),
    se = Q.useCallback(() => {
      ae &&
        (n({ strStartDate: i, strEndDate: o, strInternalComment: c, eType: f }),
        r());
    }, [ae, i, o, c, f, n, r]),
    ce = Q.useId(),
    le = ne(ce, { label: Ef });
  return (0, $.jsxs)(d, {
    className: Cf,
    strTitle: t
      ? `Update Review Anomaly Period`
      : `Add New Review Anomaly Period`,
    strOKButtonText: t ? `Update` : `Add`,
    bOKDisabled: !ae,
    onOK: se,
    onCancel: r,
    closeModal: r,
    children: [
      (0, $.jsx)(u, {
        label: `Start Date (UTC)`,
        description: Tf,
        value: i,
        onChange: g,
      }),
      (0, $.jsx)(u, {
        label: `End Date (UTC)`,
        description: `${Tf}, or empty for no end`,
        value: o,
        onChange: oe,
      }),
      (0, $.jsx)(ee, {
        label: `Type`,
        "aria-label": `Type`,
        controlled: !0,
        rgOptions: te,
        selectedOption: f,
        onChange: v,
      }),
      (0, $.jsx)(m, {
        accessibilityId: ce,
        label: Ef,
        childrenLayout: `below`,
        childrenContainerWidth: `max`,
        children: (0, $.jsx)(re, {
          className: wf,
          ...le,
          value: c,
          onChange: _,
          nMinHeight: 100,
        }),
      }),
    ],
  });
}
function Af(e, t = ``) {
  return gf(e)?.toString() ?? t;
}
function jf(e) {
  let { nTotal: t, nFromNonSteamPurchase: n } = e;
  return (0, $.jsxs)($.Fragment, { children: [l(t - n), ` [`, l(t), `]`] });
}
function Mf(e) {
  let { period: t } = e;
  return t.strPersonaName
    ? t.strProfileURL
      ? (0, $.jsx)(p, { href: t.strProfileURL, children: t.strPersonaName })
      : (0, $.jsx)($.Fragment, { children: t.strPersonaName })
    : (0, $.jsx)($.Fragment, { children: `Automated` });
}
function Nf(e) {
  let { period: t, onEdit: n, onRemove: r } = e,
    i = Q.useCallback(() => n(t), [n, t]),
    a = Q.useCallback(() => r(t), [r, t]);
  return (0, $.jsxs)(`tr`, {
    children: [
      (0, $.jsx)(`td`, { children: t.strID }),
      (0, $.jsx)(`td`, { children: Af(t.nStartDate) }),
      (0, $.jsx)(`td`, { children: Af(t.nEndDate, `No End Set`) }),
      (0, $.jsx)(`td`, { children: hf(t.eType) }),
      (0, $.jsx)(`td`, {
        className: xf,
        children: (0, $.jsx)(c, { text: t.strInternalComment }),
      }),
      (0, $.jsx)(`td`, { children: (0, $.jsx)(Mf, { period: t }) }),
      (0, $.jsx)(`td`, {
        children: (0, $.jsx)(jf, {
          nTotal: t.nRecommendationsUp,
          nFromNonSteamPurchase: t.nRecommendationsUpFromNonSteamPurchase,
        }),
      }),
      (0, $.jsx)(`td`, {
        children: (0, $.jsx)(jf, {
          nTotal: t.nRecommendationsDown,
          nFromNonSteamPurchase: t.nRecommendationsDownFromNonSteamPurchase,
        }),
      }),
      (0, $.jsx)(`td`, {
        children: (0, $.jsxs)(`div`, {
          className: Sf,
          children: [
            (0, $.jsx)(f, { size: `1`, onClick: i, children: `Edit` }),
            (0, $.jsx)(f, {
              size: `1`,
              color: `error`,
              onClick: a,
              children: `Remove`,
            }),
          ],
        }),
      }),
    ],
  });
}
function Pf(e) {
  let { appid: t, onClose: n } = e,
    r = vf(t),
    i = yf(t),
    [a, o] = Q.useState(void 0),
    [c, l] = Q.useState(void 0),
    [u, p] = Q.useState(``),
    m = Q.useCallback(() => o(null), []),
    ee = Q.useCallback((e) => o(e), []),
    ne = Q.useCallback((e) => l(e), []),
    h = Q.useCallback(() => o(void 0), []),
    re = Q.useCallback(() => l(void 0), []),
    ie = Q.useCallback(() => p(``), []),
    g = Q.useCallback((e, t) => {
      p(
        `Failed to ${e} the review anomaly period. ${t instanceof Error ? t.message : String(t)}`,
      );
    }, []),
    oe = Q.useCallback(
      (e) => {
        let t = a,
          n = t
            ? { action: `update`, strID: t.strID, ...e }
            : { action: `add`, ...e };
        i.mutate(n, { onError: (e) => g(t ? `update` : `add`, e) });
      },
      [a, i, g],
    ),
    _ = Q.useCallback(() => {
      c &&
        (i.mutate(
          { action: `remove`, strID: c.strID },
          { onError: (e) => g(`remove`, e) },
        ),
        l(void 0));
    }, [c, i, g]),
    v = r.data?.rgPeriods;
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsxs)(d, {
        bAlertDialog: !0,
        bAllowFullSize: !0,
        className: bf,
        strTitle: `Manage Review Anomalies`,
        closeModal: n,
        onOK: n,
        onCancel: n,
        children: [
          r.isPending && (0, $.jsx)(s, {}),
          r.isError &&
            (0, $.jsx)(`div`, {
              className: `mDfX6flvFLo-`,
              children: `Could not load this app's review anomaly periods.`,
            }),
          v &&
            (0, $.jsxs)(`div`, {
              className: `_8lhbBfsOJD0-`,
              children: [
                (0, $.jsxs)(`table`, {
                  className: `_8yXPdJqj5qU-`,
                  children: [
                    (0, $.jsx)(`thead`, {
                      children: (0, $.jsxs)(`tr`, {
                        children: [
                          (0, $.jsx)(`th`, { children: `ID` }),
                          (0, $.jsx)(`th`, { children: `Start` }),
                          (0, $.jsx)(`th`, { children: `End` }),
                          (0, $.jsx)(`th`, { children: `Type` }),
                          (0, $.jsx)(`th`, { children: `Internal Comment` }),
                          (0, $.jsx)(`th`, { children: `Account` }),
                          (0, $.jsx)(`th`, { children: `Positive Reviews` }),
                          (0, $.jsx)(`th`, { children: `Negative Reviews` }),
                          (0, $.jsx)(`th`, { children: `\xA0` }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(`tbody`, {
                      children: v.map((e) =>
                        (0, $.jsx)(
                          Nf,
                          { period: e, onEdit: ee, onRemove: ne },
                          e.strID,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `_75yHV1ez91I-`,
                  children: (0, $.jsx)(f, {
                    variant: `vibrant`,
                    onClick: m,
                    children: `Add New Review Bomb Period`,
                  }),
                }),
              ],
            }),
        ],
      }),
      (0, $.jsx)(te, {
        active: a !== void 0,
        children: (0, $.jsx)(kf, {
          period: a ?? void 0,
          onSubmit: oe,
          onClose: h,
        }),
      }),
      (0, $.jsx)(te, {
        active: !!c,
        children: (0, $.jsx)(d, {
          bDestructiveWarning: !0,
          strTitle: `Remove Review Anomaly Period?`,
          strDescription: `Are you sure you want to remove this review anomaly period? ID: ${c?.strID ?? ``}`,
          strOKButtonText: `Remove`,
          closeModal: re,
          onOK: _,
          onCancel: re,
        }),
      }),
      (0, $.jsx)(te, {
        active: !!u,
        children: (0, $.jsx)(ae, {
          strTitle: `Error`,
          strDescription: u,
          closeModal: ie,
          onOK: ie,
        }),
      }),
    ],
  });
}
export { Pf as ReviewBombAdminDialog };
