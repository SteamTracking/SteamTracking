/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./rolldown-runtime.js";
import { Lt as t, dt as n, ft as r, ot as i, st as a } from "./libraries.js";
import "./modals.js";
import { t as o } from "./throbber.js";
import { t as s } from "./basicbbcodeparser.js";
import "./steammessages_user_reviews_pb.js";
import { i as c } from "./reviewajax.js";
import {
  Cn as l,
  Dn as u,
  En as d,
  Hb as f,
  Sn as p,
  Wn as m,
  bt as h,
  la as ee,
  nl as te,
  pn as g,
  qb as ne,
  qn as re,
  wn as ie,
} from "./main.js";
function _(e, t, n, r, i) {
  return ae(
    t,
    ((e, t) => {
      let n = e[t];
      if (n === void 0) throw TypeError(os(t));
      return n;
    })(e, t),
    n,
    r,
    i,
  );
}
function ae(e, t, n, r, i, a) {
  let o = Se(t, n, r);
  if (i && t !== o) throw RangeError(is(e, t, n, r, a));
  return o;
}
function v(e) {
  return e !== null && /object|function/.test(typeof e);
}
function y(e, t = Map) {
  let n = new t();
  return (t, ...r) => {
    if (n.has(t)) return n.get(t);
    let i = e(t, ...r);
    return n.set(t, i), i;
  };
}
function oe(e) {
  return se({ name: e }, 1);
}
function se(e, t) {
  return de((e) => ({ value: e, configurable: 1, writable: !t }), e);
}
function ce(e) {
  return de((e) => ({ get: e, configurable: 1 }), e);
}
function le(e) {
  return { [Symbol.toStringTag]: { value: e, configurable: 1 } };
}
function ue(e, t) {
  let n = {},
    r = e.length;
  for (let i of t) n[e[--r]] = i;
  return n;
}
function de(e, t, n) {
  let r = {};
  for (let i in t) r[i] = e(t[i], i, n);
  return r;
}
function fe(e, t, n) {
  let r = {};
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    r[a] = e(a, i, n);
  }
  return r;
}
function pe(e, t, n) {
  let r = {};
  for (let i = 0; i < e.length; i++) r[t[i]] = n[e[i]];
  return r;
}
function b(e, t) {
  let n = Object.create(null);
  for (let r of e) n[r] = t[r];
  return n;
}
function me(e, t) {
  for (let n of t) if (n in e) return 1;
  return 0;
}
function he(e, t, n) {
  for (let r of e) if (t[r] !== n[r]) return 0;
  return 1;
}
function ge(e, t, n) {
  let r = { ...n };
  for (let n = 0; n < t; n++) r[e[n]] = 0;
  return r;
}
function x(e, ...t) {
  return (...n) => e(...t, ...n);
}
function _e() {}
function ve(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function ye(e) {
  return e.slice().sort();
}
function be(e, t) {
  return String(t).padStart(e, `0`);
}
function xe(e, t) {
  return Math.sign(e - t);
}
function Se(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Ce(e, t) {
  return [Math.floor(e / t), we(e, t)];
}
function we(e, t) {
  return ((e % t) + t) % t;
}
function Te(e, t) {
  return [Ee(e, t), De(e, t)];
}
function Ee(e, t) {
  return Math.trunc(e / t) || 0;
}
function De(e, t) {
  return e % t || 0;
}
function Oe(e) {
  return Math.abs(e % 1) === 0.5;
}
function ke(e, t, n) {
  let r = 0,
    i = 0;
  for (let a = 0; a <= t; a++) {
    let t = e[n[a]],
      o = ec[a],
      [s, c] = Te(t, R / o);
    (r += c * o), (i += s);
  }
  let [a, o] = Te(r, R);
  return [i + a, o];
}
function Ae(e, t, n) {
  let r = {};
  for (let i = t; i >= 0; i--) {
    let t = ec[i];
    (r[n[i]] = Ee(e, t)), (e = De(e, t));
  }
  return r;
}
function je(e) {
  if (e !== void 0) return B(e);
}
function Me(e) {
  if (e !== void 0) return Pe(e);
}
function Ne(e) {
  if (e !== void 0) return Fe(e);
}
function Pe(e) {
  return Be(Fe(e));
}
function Fe(e) {
  return ze(Tc(e));
}
function Ie(e, t) {
  if (t == null) throw RangeError(os(e));
  return t;
}
function Le(e) {
  if (!v(e)) throw TypeError(rs);
  return e;
}
function Re(e, t, n = e) {
  if (typeof t !== e) throw TypeError(as(n, t));
  return t;
}
function ze(e, t = `number`) {
  if (!Number.isInteger(e)) throw RangeError(Zo(t, e));
  return e || 0;
}
function Be(e, t = `number`) {
  if (e <= 0) throw RangeError(Qo(t, e));
  return e;
}
function Ve(e) {
  if (typeof e == `symbol`) throw TypeError(ns);
  return String(e);
}
function He(e, t) {
  return v(e) ? String(e) : B(e, t);
}
function Ue(e) {
  if (typeof e == `string`) return BigInt(e);
  if (typeof e != `bigint`) throw TypeError(ts(e));
  return e;
}
function We(e, t = `number`) {
  if (typeof e == `bigint`) throw TypeError(es(t));
  if (((e = Number(e)), !Number.isFinite(e))) throw RangeError($o(t, e));
  return e;
}
function S(e, t) {
  return Math.trunc(We(e, t)) || 0;
}
function Ge(e, t) {
  return ze(We(e, t), t);
}
function Ke(e, t) {
  return Be(S(e, t), t);
}
function qe(e, t) {
  let [n, r] = Te(t, R),
    i = e + n,
    a = Math.sign(i);
  return a && a === -Math.sign(r) && ((i -= a), (r += a * 864e11)), [i, r];
}
function Je(e, t, n = 1) {
  return qe(e[0] + t[0] * n, e[1] + t[1] * n);
}
function Ye(e, t) {
  return qe(e[0], e[1] + t);
}
function Xe(e, t) {
  return Je(t, e, -1);
}
function C(e, t) {
  return xe(e[0], t[0]) || xe(e[1], t[1]);
}
function Ze(e, t, n) {
  return C(e, t) === -1 || C(e, n) === 1;
}
function Qe(e, t = 1) {
  let n = BigInt(R / t);
  return [Number(e / n), Number(e % n) * t];
}
function $e(e, t = 1) {
  let [n, r] = Te(e, R / t);
  return [n, r * t];
}
function et(e, t = 1) {
  let [n, r] = e,
    i = Math.floor(r / t),
    a = R / t;
  return BigInt(n) * BigInt(a) + BigInt(i);
}
function tt(e, t = 1, n) {
  let [r, i] = e,
    [a, o] = Te(i, t);
  return (R / t) * r + (a + (n ? o / t : 0));
}
function nt(e) {
  return e[0] + e[1] / R;
}
function rt(e, t, n = Ce) {
  let [r, i] = e,
    [a, o] = n(i, t);
  return [(R / t) * r + a, o];
}
function it(e) {
  return (
    _(e, `isoYear`, Gc, Wc, 1),
    e.isoYear === Gc
      ? _(e, `isoMonth`, 4, 12, 1)
      : e.isoYear === Wc && _(e, `isoMonth`, 1, 9, 1),
    e
  );
}
function w(e) {
  return T({ ...e, ...U, isoHour: 12 }), e;
}
function T(e) {
  let t = _(e, `isoYear`, Gc, Wc, 1),
    n = t === Gc ? 1 : t === Wc ? -1 : 0;
  return (
    n &&
      at(D({ ...e, isoDay: e.isoDay + n, isoNanosecond: e.isoNanosecond - n })),
    e
  );
}
function at(e) {
  if (!e || Ze(e, Uc, Hc)) throw RangeError(Ns);
  return e;
}
function ot(e) {
  return ke(e, 5, Nc)[1];
}
function st(e) {
  let [t, n] = Ce(e, R);
  return [Ae(n, 5, Nc), t];
}
function ct(e) {
  return lt(e)[0];
}
function lt(e) {
  return rt(e, Zs);
}
function E(e) {
  return ft(
    e.isoYear,
    e.isoMonth,
    e.isoDay,
    e.isoHour,
    e.isoMinute,
    e.isoSecond,
    e.isoMillisecond,
  );
}
function D(e) {
  let t = E(e);
  if (t !== void 0) {
    let [n, r] = Te(t, L);
    return [n, r * Xs + (e.isoMicrosecond || 0) * Ys + (e.isoNanosecond || 0)];
  }
}
function ut(e, t) {
  let [n, r] = st(ot(e) - t);
  return at(D({ ...e, isoDay: e.isoDay + r, ...n }));
}
function dt(...e) {
  return ft(...e) / Js;
}
function ft(...e) {
  let [t, n] = pt(...e),
    r = t.valueOf();
  if (!isNaN(r)) return r - n * L;
}
function pt(e, t = 1, n = 1, r = 0, i = 0, a = 0, o = 0) {
  let s = e === Gc ? 1 : e === Wc ? -1 : 0,
    c = new Date();
  return c.setUTCHours(r, i, a, o), c.setUTCFullYear(e, t - 1, n + s), [c, s];
}
function mt(e, t) {
  let [n, r] = Ye(e, t);
  r < 0 && ((r += 864e11), --n);
  let [i, a] = Ce(r, Xs),
    [o, s] = Ce(a, Ys);
  return ht(n * L + i, o, s);
}
function ht(e, t = 0, n = 0) {
  let r = Math.ceil(Math.max(0, Math.abs(e) - Vc) / L) * Math.sign(e),
    i = new Date(e - r * L);
  return ue(Fc, [
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
function gt(e, t) {
  if (t < -Vc) throw RangeError(Ns);
  let n = e.formatToParts(t),
    r = {};
  for (let e of n) r[e.type] = e.value;
  return r;
}
function _t(e) {
  return e.isoDay;
}
function vt(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function yt(e, t) {
  return [t, 0];
}
function bt(e, t) {
  if (!t) return [Jc, e];
}
function xt(e, t, n) {
  return { isoYear: e, isoMonth: t, isoDay: n };
}
function St() {
  return 7;
}
function Ct() {
  return Yc;
}
function wt(e, t) {
  switch (t) {
    case 2:
      return Et(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Tt(e) {
  return Et(e) ? 366 : 365;
}
function Et(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Dt(e) {
  let [t, n] = pt(e.isoYear, e.isoMonth, e.isoDay);
  return we(t.getUTCDay() - n, 7) || 7;
}
function Ot(e) {
  return this.id === yc
    ? (({ isoYear: e }) =>
        e < 1 ? [`gregory-inverse`, 1 - e] : [`gregory`, e])(e)
    : this.id === bc
      ? Zc(e)
      : [];
}
function kt(e) {
  let t = E(e);
  if (t < Xc) {
    let { isoYear: t } = e;
    return t < 1 ? [`japanese-inverse`, 1 - t] : [`japanese`, t];
  }
  let { era: n, eraYear: r } = xa(gt(su(bc), t), bc);
  return [n, r];
}
function At(e) {
  return jt(e), Pt(e, 1), e;
}
function jt(e) {
  return Nt(e, 1), e;
}
function Mt(e) {
  return he(Pc, e, Nt(e));
}
function Nt(e, t) {
  let { isoYear: n } = e,
    r = _(e, `isoMonth`, 1, Ct(), t);
  return { isoYear: n, isoMonth: r, isoDay: _(e, `isoDay`, 1, wt(n, r), t) };
}
function Pt(e, t) {
  return ue(Nc, [
    _(e, `isoHour`, 0, 23, t),
    _(e, `isoMinute`, 0, 59, t),
    _(e, `isoSecond`, 0, 59, t),
    _(e, `isoMillisecond`, 0, 999, t),
    _(e, `isoMicrosecond`, 0, 999, t),
    _(e, `isoNanosecond`, 0, 999, t),
  ]);
}
function O(e) {
  return e === void 0 ? 0 : _l(Le(e));
}
function Ft(e, t = 0) {
  e = Kt(e);
  let n = vl(e),
    r = yl(e, t);
  return [_l(e), r, n];
}
function It(e, t, n, r = 9, i = 0, a = 4) {
  t = Kt(t);
  let o = hl(t, r, i),
    s = Ut(t),
    c = Cl(t, a),
    l = ml(t, r, i, 1);
  return (
    o == null ? (o = Math.max(n, l)) : Zt(o, l),
    (s = Wt(s, l, 1)),
    e && (c = ((e) => (e < 4 ? (e + 2) % 4 : e))(c)),
    [o, l, s, c]
  );
}
function Lt(e, t = 6, n) {
  let r = Ut((e = qt(e, Qc))),
    i = Cl(e, 7),
    a = ml(e, t);
  return (a = Ie(Qc, a)), (r = Wt(r, a, void 0, n)), [a, r, i];
}
function Rt(e) {
  return bl(Kt(e));
}
function zt(e, t) {
  return Vt(Kt(e), t);
}
function Bt(e) {
  let t = Xt(il, pl, qt(e, il), 0);
  if (!t) throw RangeError(as(il, t));
  return t;
}
function Vt(e, t = 4) {
  let n = Gt(e);
  return [Cl(e, 4), ...Ht(ml(e, t), n)];
}
function Ht(e, t) {
  return e == null
    ? [t === void 0 ? 1 : 10 ** (9 - t), t]
    : [ec[e], e < 4 ? 9 - 3 * e : -1];
}
function Ut(e) {
  let t = e[tl];
  return t === void 0 ? 1 : S(t, tl);
}
function Wt(e, t, n, r) {
  let i = r ? R : ec[t + 1];
  if (i) {
    let n = ec[t];
    if (i % ((e = ae(tl, e, 1, i / n - +!r, 1)) * n))
      throw RangeError(as(tl, e));
  } else e = ae(tl, e, 1, n ? 10 ** 9 : 1, 1);
  return e;
}
function Gt(e) {
  let t = e[nl];
  if (t !== void 0) {
    if (typeof t != `number`) {
      if (Ve(t) === `auto`) return;
      throw RangeError(as(nl, t));
    }
    t = ae(nl, Math.floor(t), 0, 9, 1);
  }
  return t;
}
function Kt(e) {
  return e === void 0 ? {} : Le(e);
}
function qt(e, t) {
  return typeof e == `string` ? { [t]: e } : Le(e);
}
function Jt(e) {
  return { overflow: ol[e] };
}
function Yt(e, t, n = 9, r = 0, i) {
  let a = t[e];
  if (a === void 0) return i ? r : void 0;
  if (((a = Ve(a)), a === `auto`)) return i ? r : null;
  let o = Ks[a];
  if ((o === void 0 && (o = Ac[a]), o === void 0))
    throw RangeError(ds(e, a, Ks));
  return ae(e, o, r, n, 1, qs), o;
}
function Xt(e, t, n, r = 0) {
  let i = n[e];
  if (i === void 0) return r;
  let a = Ve(i),
    o = t[a];
  if (o === void 0) throw RangeError(ds(e, a, t));
  return o;
}
function Zt(e, t) {
  if (t > e) throw RangeError(zs);
}
function Qt(e) {
  return { branding: Al, epochNanoseconds: e };
}
function k(e, t, n) {
  return { branding: kl, calendar: n, timeZone: t, epochNanoseconds: e };
}
function A(e, t = e.calendar) {
  return { branding: Dl, calendar: t, ...b(Rc, e) };
}
function $t(e, t = e.calendar) {
  return { branding: El, calendar: t, ...b(Ic, e) };
}
function en(e, t = e.calendar) {
  return { branding: wl, calendar: t, ...b(Ic, e) };
}
function tn(e, t = e.calendar) {
  return { branding: Tl, calendar: t, ...b(Ic, e) };
}
function nn(e) {
  return { branding: Ol, ...b(Lc, e) };
}
function j(e) {
  return { branding: jl, sign: Pr(e), ...b(Ec, e) };
}
function rn(e) {
  return rt(e.epochNanoseconds, Xs)[0];
}
function an(e) {
  return et(e.epochNanoseconds);
}
function on(e) {
  return e.epochNanoseconds;
}
function sn(e, t, n, r, i) {
  let a = Br(r),
    [o, s] = ((e, t) => {
      let n = t((e = qt(e, $c))[rl]),
        r = gl(e);
      return (r = Ie($c, r)), [r, n];
    })(i, e);
  if (!s && Or(Math.max(o, a), s)) return ln(r, o);
  if (!s) throw RangeError(Is);
  if (!r.sign) return 0;
  let [c, l, u] = Cr(t, n, s),
    d = wr(u),
    f = Tr(u),
    p = Er(u),
    m = f(l, c, r);
  Dr(s) || (T(c), T(m));
  let h = p(l, c, m, o);
  return Or(o, s) ? ln(h, o) : cn(h, d(m), o, l, c, d, f);
}
function cn(e, t, n, r, i, a, o) {
  let s = Pr(e),
    [c, l] = un(r, Mc(n, e), n, s, i, a, o),
    u = dn(t, c, l);
  return e[V[n]] + u * s;
}
function ln(e, t) {
  return tt(N(e), ec[t], 1);
}
function un(e, t, n, r, i, a, o) {
  let s = V[n],
    c = { ...t, [s]: t[s] + r },
    l = o(e, i, t),
    u = o(e, i, c);
  return [a(l), a(u)];
}
function dn(e, t, n) {
  let r = tt(Xe(t, n));
  if (!r) throw RangeError(Cs);
  return tt(Xe(t, e)) / r;
}
function fn(e, t) {
  let [n, r, i] = Lt(t, 5, 1);
  return Qt(kn(e.epochNanoseconds, n, r, i, 1));
}
function pn(e, t, n) {
  let { epochNanoseconds: r, timeZone: i, calendar: a } = t,
    [o, s, c] = Lt(n);
  if (o === 0 && s === 1) return t;
  let l = e(i);
  if (o === 6) r = yn(Tn, l, t, c);
  else {
    let e = l.N(r);
    r = ir(l, bn(mt(r, e), o, s, c), e, 2, 0, 1);
  }
  return k(r, i, a);
}
function mn(e, t) {
  return A(bn(e, ...Lt(t)), e.calendar);
}
function hn(e, t) {
  let [n, r, i] = Lt(t, 5);
  var a;
  return nn(((a = i), Sn(e, wn(n, r), a)[0]));
}
function gn(e, t) {
  let n = e(t.timeZone),
    [r, i] = Tn(W(t, n)),
    a = tt(Xe(or(n, r), or(n, i)), $s, 1);
  if (a <= 0) throw RangeError(Cs);
  return a;
}
function _n(e, t) {
  let { timeZone: n, calendar: r } = t;
  return k(vn(En, e(n), t), n, r);
}
function vn(e, t, n) {
  return or(t, e(W(n, t)));
}
function yn(e, t, n, r) {
  let [i, a] = e(W(n, t)),
    o = n.epochNanoseconds,
    s = or(t, i),
    c = or(t, a);
  if (Ze(o, s, c)) throw RangeError(Cs);
  return Mn(dn(o, s, c), r) ? c : s;
}
function bn(e, t, n, r) {
  return xn(e, wn(t, n), r);
}
function xn(e, t, n) {
  let [r, i] = Sn(e, t, n);
  return T({ ...Sr(e, i), ...r });
}
function Sn(e, t, n) {
  return st(jn(ot(e), t, n));
}
function Cn(e) {
  return jn(e, Qs, 7);
}
function wn(e, t) {
  return ec[e] * t;
}
function Tn(e) {
  let t = En(e);
  return [t, Sr(t, 1)];
}
function En(e) {
  return zc(6, e);
}
function Dn(e, t, n) {
  let r = Math.min(Br(e), 6);
  return Lr(An(N(e, r), t, n), r);
}
function On(e, t, n, r, i, a, o, s, c, l) {
  if (r === 0 && i === 1) return e;
  let [u, d, f] = (Or(r, s) ? (Dr(s) && r < 6 && n >= 6 ? Pn : Nn) : Fn)(
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
        let c = Pr(e);
        for (let l = r + 1; l <= n; l++) {
          if (l === 7 && n !== 7) continue;
          let r = Mc(l, e);
          r[V[l]] += c;
          let u = tt(Xe(o(s(i, a, r)), t));
          if (u && Math.sign(u) !== c) break;
          e = r;
        }
        return e;
      })(u, d, n, Math.max(6, r), o, s, c, l)),
    u
  );
}
function kn(e, t, n, r, i) {
  return t === 6 ? [jn(nt(e), n, r), 0] : An(e, wn(t, n), r, i);
}
function An(e, t, n, r) {
  let [i, a] = e;
  r && a < 0 && ((a += 864e11), --i);
  let [o, s] = Ce(jn(a, t, n), R);
  return qe(i + o, s);
}
function jn(e, t, n) {
  return Mn(e / t, n) * t;
}
function Mn(e, t) {
  return Ml[t](e);
}
function Nn(e, t, n, r, i, a) {
  let o = Pr(e),
    s = N(e),
    c = kn(s, r, i, a),
    l = Xe(s, c),
    u = Math.sign(c[0] - s[0]) === o,
    d = Lr(c, Math.min(n, 6));
  return [{ ...e, ...d }, Je(t, l), u];
}
function Pn(e, t, n, r, i, a, o, s, c, l) {
  let u = Pr(e) || 1,
    d = tt(N(e, 5)),
    f = wn(r, i),
    p = jn(d, f, a),
    [m, h] = un(o, { ...e, ...jc }, 6, u, s, c, l),
    ee = p - tt(Xe(m, h)),
    te = 0;
  ee && Math.sign(ee) !== u
    ? (t = Ye(m, p))
    : ((te += u), (p = jn(ee, f, a)), (t = Ye(h, p)));
  let g = Rr(p);
  return [{ ...e, ...g, days: e.days + te }, t, !!te];
}
function Fn(e, t, n, r, i, a, o, s, c, l) {
  let u = Pr(e),
    d = V[r],
    f = Mc(r, e);
  r === 7 && (e = { ...e, weeks: e.weeks + Math.trunc(e.days / 7) });
  let p = Ee(e[d], i) * i;
  f[d] = p;
  let [m, h] = un(o, f, r, i * u, s, c, l),
    ee = p + dn(t, m, h) * u * i,
    te = jn(ee, i, a),
    g = Math.sign(te - ee) === u;
  return (f[d] = te), [f, g ? h : m, g];
}
function In(e, t, n, r) {
  let [i, a, o, s] = ((e) => {
      let t = Vt((e = Kt(e)));
      return [e.timeZone, ...t];
    })(r),
    c = i !== void 0;
  return ((e, t, n, r, i, a) => {
    n = An(n, i, r, 1);
    let o = t.N(n);
    return Kn(mt(n, o), a) + (e ? Zn(Cn(o)) : `Z`);
  })(c, t(c ? e(i) : Nl), n.epochNanoseconds, a, o, s);
}
function Ln(e, t, n) {
  let [r, i, a, o, s, c] = ((e) => {
    e = Kt(e);
    let t = bl(e),
      n = Gt(e),
      r = Sl(e),
      i = Cl(e, 4),
      a = ml(e, 4);
    return [t, xl(e), r, i, ...Ht(a, n)];
  })(n);
  return ((e, t, n, r, i, a, o, s, c, l) => {
    r = An(r, c, s, 1);
    let u = e(n).N(r);
    return (
      Kn(mt(r, u), l) +
      Zn(Cn(u), o) +
      ((e, t) => (t === 1 ? `` : `[` + (t === 2 ? `!` : ``) + e + `]`))(n, a) +
      Qn(t, i)
    );
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, r, i, a, o, s, c);
}
function Rn(e, t) {
  let [n, r, i, a] = ((e) => ((e = Kt(e)), [bl(e), ...Vt(e)]))(t);
  return (o = e.calendar), (s = n), (c = a), Kn(xn(e, i, r), c) + Qn(o, s);
  var o, s, c;
}
function zn(e, t) {
  return (n = e.calendar), (r = e), (i = Rt(t)), qn(r) + Qn(n, i);
  var n, r, i;
}
function Bn(e, t) {
  return Wn(e.calendar, Jn, e, Rt(t));
}
function Vn(e, t) {
  return Wn(e.calendar, Yn, e, Rt(t));
}
function Hn(e, t) {
  let [n, r, i] = zt(t);
  return (a = i), Xn(Sn(e, r, n)[0], a);
  var a;
}
function Un(e, t) {
  let [n, r, i] = zt(t, 3);
  return (
    r > 1 && Fr((e = { ...e, ...Dn(e, r, n) })),
    ((e, t) => {
      let { sign: n } = e,
        r = n === -1 ? M(e) : e,
        { hours: i, minutes: a } = r,
        [o, s] = rt(N(r, 3), Zs, Te);
      Ir(o);
      let c = er(s, t),
        l = t >= 0 || !n || c;
      return (
        (n < 0 ? `-` : ``) +
        `P` +
        Gn({ Y: nr(r.years), M: nr(r.months), W: nr(r.weeks), D: nr(r.days) }) +
        (i || a || o || l
          ? `T` + Gn({ H: nr(i), M: nr(a), S: nr(o, l) + c })
          : ``)
      );
    })(e, i)
  );
}
function Wn(e, t, n, r) {
  return r === 1
    ? e === `iso8601`
      ? t(n)
      : qn(n)
    : r > 1 || (r === 0 && e !== `iso8601`)
      ? qn(n) + $n(e, r === 2)
      : t(n);
}
function Gn(e) {
  let t = [];
  for (let n in e) {
    let r = e[n];
    r && t.push(r, n);
  }
  return t.join(``);
}
function Kn(e, t) {
  return qn(e) + `T` + Xn(e, t);
}
function qn(e) {
  return Jn(e) + `-` + I(e.isoDay);
}
function Jn(e) {
  let { isoYear: t } = e;
  return (
    (t < 0 || t > 9999 ? tr(t) + be(6, Math.abs(t)) : be(4, t)) +
    `-` +
    I(e.isoMonth)
  );
}
function Yn(e) {
  return I(e.isoMonth) + `-` + I(e.isoDay);
}
function Xn(e, t) {
  let n = [I(e.isoHour), I(e.isoMinute)];
  return (
    t !== -1 &&
      n.push(
        I(e.isoSecond) +
          ((e, t, n, r) => er(e * 1e6 + t * 1e3 + n, r))(
            e.isoMillisecond,
            e.isoMicrosecond,
            e.isoNanosecond,
            t,
          ),
      ),
    n.join(`:`)
  );
}
function Zn(e, t = 0) {
  if (t === 1) return ``;
  let [n, r] = Ce(Math.abs(e), $s),
    [i, a] = Ce(r, Qs),
    [o, s] = Ce(a, Zs);
  return tr(e) + I(n) + `:` + I(i) + (o || s ? `:` + I(o) + er(s) : ``);
}
function Qn(e, t) {
  return t !== 1 && (t > 1 || (t === 0 && e !== `iso8601`))
    ? $n(e, t === 2)
    : ``;
}
function $n(e, t) {
  return `[` + (t ? `!` : ``) + `u-ca=` + e + `]`;
}
function er(e, t) {
  let n = be(9, e);
  return (
    (n = t === void 0 ? n.replace(Ll, ``) : n.slice(0, t)), n ? `.` + n : ``
  );
}
function tr(e) {
  return e < 0 ? `-` : `+`;
}
function nr(e, t) {
  return e || t ? e.toLocaleString(`fullwide`, { useGrouping: 0 }) : ``;
}
function rr(e, t) {
  let { epochNanoseconds: n } = e,
    r = (t.N ? t : t(e.timeZone)).N(n),
    i = mt(n, r);
  return { calendar: e.calendar, ...i, offsetNanoseconds: r };
}
function ir(e, t, n, r = 0, i = 0, a, o) {
  if (n !== void 0 && r === 1 && (r === 1 || o)) return ut(t, n);
  let s = e.v(t);
  if (n !== void 0 && r !== 3) {
    let e = ((e, t, n, r) => {
      let i = D(t);
      r && (n = Cn(n));
      for (let t of e) {
        let e = tt(Xe(t, i));
        if ((r && (e = Cn(e)), e === n)) return t;
      }
    })(s, t, n, a);
    if (e !== void 0) return e;
    if (r === 0) throw RangeError(js);
  }
  return o ? D(t) : ar(e, t, i, s);
}
function ar(e, t, n = 0, r = e.v(t)) {
  if (r.length === 1) return r[0];
  if (n === 1) throw RangeError(Ms);
  if (r.length) return r[+(n === 3)];
  let i = D(t),
    a =
      ((e, t) => {
        let n = e.N(Ye(t, -R));
        return ((e) => {
          if (e > 864e11) throw RangeError(As);
          return e;
        })(e.N(Ye(t, R)) - n);
      })(e, i) * (n === 2 ? -1 : 1);
  return (r = e.v(mt(i, a)))[n === 2 ? 0 : r.length - 1];
}
function or(e, t) {
  let n = e.v(t);
  if (n.length) return n[0];
  let r = Ye(D(t), -R);
  return e.l(r, 1);
}
function sr(e, t, n) {
  return Qt(
    at(
      Je(
        t.epochNanoseconds,
        ((e) => {
          if (zr(e)) throw RangeError(Ls);
          return N(e, 5);
        })(e ? M(n) : n),
      ),
    ),
  );
}
function cr(e, t, n, r, i, a = Object.create(null)) {
  let o = t(r.timeZone),
    s = e(r.calendar);
  return { ...r, ...pr(o, s, r, n ? M(i) : i, a) };
}
function lr(e, t, n, r, i = Object.create(null)) {
  let { calendar: a } = n;
  return A(mr(e(a), n, t ? M(r) : r, i), a);
}
function ur(e, t, n, r, i) {
  let { calendar: a } = n;
  return $t(hr(e(a), n, t ? M(r) : r, i), a);
}
function dr(e, t, n, r, i) {
  let a = n.calendar,
    o = e(a),
    s = w(gr(o, n));
  return (
    t && (r = Mr(r)),
    r.sign < 0 && ((s = o.P(s, { ...H, months: 1 })), (s = Sr(s, -1))),
    en(gr(o, o.P(s, r, i)), a)
  );
}
function fr(e, t, n) {
  return nn(_r(t, e ? M(n) : n)[0]);
}
function pr(e, t, n, r, i) {
  let a = N(r, 5),
    o = n.epochNanoseconds;
  if (zr(r)) {
    let s = W(n, e);
    o = Je(ar(e, { ...hr(t, s, { ...r, ...jc }, i), ...b(Nc, s) }), a);
  } else (o = Je(o, a)), O(i);
  return { epochNanoseconds: at(o) };
}
function mr(e, t, n, r) {
  let [i, a] = _r(t, n);
  return T({ ...hr(e, t, { ...n, ...jc, days: n.days + a }, r), ...i });
}
function hr(e, t, n, r) {
  if (n.years || n.months || n.weeks) return e.P(t, n, r);
  O(r);
  let i = n.days + N(n, 5)[0];
  return i ? w(Sr(t, i)) : t;
}
function gr(e, t, n = 1) {
  return Sr(t, n - e.day(t));
}
function _r(e, t) {
  let [n, r] = N(t, 5),
    [i, a] = st(ot(e) + r);
  return [i, n + a];
}
function vr(e, t, n) {
  let r = O(n),
    i,
    { years: a, months: o, weeks: s, days: c } = t;
  if (((c += N(t, 5)[0]), a || o)) i = yr(this, e, a, o, r);
  else {
    if (!s && !c) return e;
    i = E(e);
  }
  if (i === void 0) throw RangeError(Ns);
  return (i += (7 * s + c) * L), w(ht(i));
}
function yr(e, t, n, r, i) {
  let [a, o, s] = e.u(t);
  if (n) {
    let [t, r] = e.m(a, o);
    (a += n), (o = fa(t, r, e.F(a))), (o = ae(`month`, o, 1, e.O(a), i));
  }
  return (
    r && ([a, o] = e.p(a, o, r)),
    (s = ae(`day`, s, 1, e.B(a, o), i)),
    e.M(a, o, s)
  );
}
function br(e, t, n) {
  return (
    (e += Ee(n, Yc)),
    (t += De(n, Yc)) < 1 ? (e--, (t += Yc)) : t > Yc && (e++, (t -= Yc)),
    [e, t]
  );
}
function xr(e, t, n) {
  if (n) {
    if (((t += n), !Number.isSafeInteger(t))) throw RangeError(Ns);
    if (n < 0) for (; t < 1; ) t += Ma.call(this, --e);
    else {
      let n;
      for (; t > (n = Ma.call(this, e)); ) (t -= n), e++;
    }
  }
  return [e, t];
}
function Sr(e, t) {
  return t ? { ...e, ...ht(E(e) + t * L) } : e;
}
function Cr(e, t, n) {
  let r = e(n.calendar);
  return Dr(n) ? [n, r, t(n.timeZone)] : [{ ...n, ...U }, r];
}
function wr(e) {
  return e ? on : D;
}
function Tr(e) {
  return e ? x(pr, e) : mr;
}
function Er(e) {
  return e ? x(Hi, e) : Ui;
}
function Dr(e) {
  return e && e.epochNanoseconds;
}
function Or(e, t) {
  return e <= 6 - !!Dr(t);
}
function kr(e, t, n, r, i, a, o) {
  let s = e(Kt(o).relativeTo),
    c = Math.max(Br(i), Br(a));
  if (Or(c, s))
    return j(
      Fr(
        ((e, t, n, r) => {
          let i = Je(N(e), N(t), r ? -1 : 1);
          if (!Number.isFinite(i[0])) throw RangeError(Ns);
          return { ...H, ...Lr(i, n) };
        })(i, a, c, r),
      ),
    );
  if (!s) throw RangeError(Is);
  r && (a = M(a));
  let [l, u, d] = Cr(t, n, s),
    f = Tr(d);
  return j(Er(d)(u, l, f(u, f(u, l, i), a), c));
}
function Ar(e, t, n, r, i) {
  let a = Br(r),
    [o, s, c, l, u] = ((e, t, n) => {
      e = qt(e, Qc);
      let r = hl(e),
        i = n(e[rl]),
        a = Ut(e),
        o = Cl(e, 7),
        s = ml(e);
      if (r === void 0 && s === void 0) throw RangeError(Rs);
      if (
        ((s ??= 0),
        (r ??= Math.max(s, t)),
        Zt(r, s),
        (a = Wt(a, s, 1)),
        a > 1 && s > 5 && r !== s)
      )
        throw RangeError(
          `For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit`,
        );
      return [r, s, a, o, i];
    })(i, a, e);
  if (!u && Math.max(a, o) <= 6)
    return j(
      Fr(
        ((e, t, n, r, i) => {
          let a = kn(N(e), n, r, i);
          return { ...H, ...Lr(a, t) };
        })(r, o, s, c, l),
      ),
    );
  if (!Dr(u) && !r.sign) return r;
  if (!u) throw RangeError(Is);
  let [d, f, p] = Cr(t, n, u),
    m = wr(p),
    h = Tr(p),
    ee = Er(p),
    te = h(f, d, r);
  Dr(u) || (T(d), T(te));
  let g = ee(f, d, te, o),
    ne = r.sign,
    re = Pr(g);
  if (ne && re && ne !== re) throw RangeError(Cs);
  return (g = On(g, m(te), o, s, c, l, f, d, m, h)), j(g);
}
function jr(e) {
  return e.sign === -1 ? Mr(e) : e;
}
function Mr(e) {
  return j(M(e));
}
function M(e) {
  let t = {};
  for (let n of V) t[n] = -1 * e[n] || 0;
  return t;
}
function Nr(e) {
  return !e.sign;
}
function Pr(e, t = V) {
  let n = 0;
  for (let r of t) {
    let t = Math.sign(e[r]);
    if (t) {
      if (n && n !== t) throw RangeError(Fs);
      n = t;
    }
  }
  return n;
}
function Fr(e) {
  for (let t of kc) ae(t, e[t], -Rl, Rl, 1);
  return Ir(tt(N(e), Zs)), e;
}
function Ir(e) {
  if (!Number.isSafeInteger(e)) throw RangeError(Ps);
}
function N(e, t = 6) {
  return ke(e, t, V);
}
function Lr(e, t = 6) {
  let [n, r] = e,
    i = Ae(r, t, V);
  if (((i[V[t]] += n * (864e11 / ec[t])), !Number.isFinite(i[V[t]])))
    throw RangeError(Ns);
  return i;
}
function Rr(e, t = 5) {
  return Ae(e, t, V);
}
function zr(e) {
  return !!Pr(e, Oc);
}
function Br(e) {
  let t = 9;
  for (; t > 0 && !e[V[t]]; t--);
  return t;
}
function Vr(e, t) {
  return [e, t];
}
function Hr(e) {
  let t = Math.floor(e / Pl) * Pl;
  return [t, t + Pl];
}
function Ur(e) {
  let t = oi((e = He(e)));
  if (!t) throw RangeError(F(e));
  let n;
  if (t.C) n = 0;
  else {
    if (!t.offset) throw RangeError(F(e));
    n = Kr(t.offset);
  }
  return t.timeZone && li(t.timeZone, 1), Qt(ut(At(t), n));
}
function Wr(e) {
  let t = oi(B(e));
  if (!t) throw RangeError(F(e));
  if (t.timeZone) return ni(t, t.offset ? Kr(t.offset) : void 0);
  if (t.C) throw RangeError(F(e));
  return ii(t);
}
function Gr(e, t) {
  let n = oi(B(e));
  if (!n || !n.timeZone) throw RangeError(F(e));
  let { offset: r } = n,
    i = r ? Kr(r) : void 0,
    [, a, o] = Ft(t);
  return ni(n, i, a, o);
}
function Kr(e) {
  let t = li(e);
  if (t === void 0) throw RangeError(F(e));
  return t;
}
function qr(e) {
  let t = oi(B(e));
  if (!t || t.C) throw RangeError(F(e));
  return A(ri(t));
}
function Jr(e, t, n) {
  let r = oi(B(e));
  if (!r || r.C) throw RangeError(F(e));
  return (
    t
      ? r.calendar === `iso8601` &&
        (r =
          r.isoYear === -271821 && r.isoMonth === 4
            ? { ...r, isoDay: 20, ...U }
            : { ...r, isoDay: 1, ...U })
      : n && r.calendar === `iso8601` && (r = { ...r, isoYear: Jc }),
    $t(r.k ? ri(r) : ii(r))
  );
}
function Yr(e, t) {
  let n = si(B(t));
  if (n) return Xr(n), en(it(jt(n)));
  let r = Jr(t, 1);
  return en(gr(e(r.calendar), r));
}
function Xr(e) {
  if (e.calendar !== `iso8601`) throw RangeError(Bs(e.calendar));
}
function Zr(e, t) {
  let n = ci(B(t));
  if (n) return Xr(n), tn(jt(n));
  let r = Jr(t, 0, 1),
    { calendar: i } = r,
    a = e(i),
    [o, s, c] = a.u(r),
    [l, u] = a.m(o, s),
    [d, f] = a.R(l, u, c);
  return tn(w(a.U(d, f, c)), i);
}
function Qr(e) {
  let t,
    n = ((e) => {
      let t = Ql.exec(e);
      return t ? (fi(t[10]), di(t)) : void 0;
    })(B(e));
  if (!n) {
    if (((n = oi(e)), !n || !n.k)) throw RangeError(F(e));
    if (n.C) throw RangeError(Bs(`Z`));
    Xr(n);
  }
  if (((t = si(e)) && Mt(t)) || ((t = ci(e)) && Mt(t))) throw RangeError(F(e));
  return nn(Pt(n, 1));
}
function $r(e) {
  let t = ((e) => {
    let t = tu.exec(e);
    return t
      ? ((e) => {
          function t(e, t, a) {
            let o = 0,
              s = 0;
            if ((a && ([o, i] = Ce(i, ec[a])), e !== void 0)) {
              if (r) throw RangeError(Bs(e));
              (s = ((e) => {
                let t = parseInt(e);
                if (!Number.isFinite(t)) throw RangeError(Bs(e));
                return t;
              })(e)),
                (n = 1),
                t && ((i = pi(t) * (ec[a] / 1e9)), (r = 1));
            }
            return o + s;
          }
          let n = 0,
            r = 0,
            i = 0,
            a = {
              ...ue(V, [
                t(e[2]),
                t(e[3]),
                t(e[4]),
                t(e[5]),
                t(e[6], e[7], 5),
                t(e[8], e[9], 4),
                t(e[10], e[11], 3),
              ]),
              ...Ae(i, 2, V),
            };
          if (!n) throw RangeError(ls(V));
          return hi(e[1]) < 0 && (a = M(a)), a;
        })(t)
      : void 0;
  })(B(e));
  if (!t) throw RangeError(F(e));
  return j(Fr(t));
}
function ei(e) {
  let t = oi(e) || si(e) || ci(e);
  return t ? t.calendar : e;
}
function ti(e) {
  let t = oi(e);
  return (t && (t.timeZone || (t.C && Nl) || t.offset)) || e;
}
function ni(e, t, n = 0, r = 0) {
  let i = vi(e.timeZone),
    a = G(i),
    o;
  return (
    At(e),
    (o = e.k ? ir(a, e, t, n, r, !a.j, e.C) : or(a, e)),
    k(o, i, La(e.calendar))
  );
}
function ri(e) {
  return ai(T(At(e)));
}
function ii(e) {
  return ai(w(jt(e)));
}
function ai(e) {
  return { ...e, calendar: La(e.calendar) };
}
function oi(e) {
  let t = Zl.exec(e);
  return t
    ? ((e) => {
        let t = e[10],
          n = (t || ``).toUpperCase() === `Z`;
        return {
          isoYear: ui(e),
          isoMonth: parseInt(e[4]),
          isoDay: parseInt(e[5]),
          ...di(e.slice(5)),
          ...fi(e[16]),
          k: !!e[6],
          C: n,
          offset: n ? void 0 : t,
        };
      })(t)
    : void 0;
}
function si(e) {
  let t = Yl.exec(e);
  return t
    ? ((e) => ({
        isoYear: ui(e),
        isoMonth: parseInt(e[4]),
        isoDay: 1,
        ...fi(e[5]),
      }))(t)
    : void 0;
}
function ci(e) {
  let t = Xl.exec(e);
  return t
    ? ((e) => ({
        isoYear: Jc,
        isoMonth: parseInt(e[1]),
        isoDay: parseInt(e[2]),
        ...fi(e[3]),
      }))(t)
    : void 0;
}
function li(e, t) {
  let n = $l.exec(e);
  return n
    ? ((e, t) => {
        let n = e[4] || e[5];
        if (t && n) throw RangeError(Bs(n));
        return ((e) => {
          if (Math.abs(e) >= 864e11) throw RangeError(ks);
          return e;
        })(
          (gi(e[2]) * $s + gi(e[3]) * Qs + gi(e[4]) * Zs + pi(e[5] || ``)) *
            hi(e[1]),
        );
      })(n, t)
    : void 0;
}
function ui(e) {
  let t = hi(e[1]),
    n = parseInt(e[2] || e[3]);
  if (t < 0 && !n) throw RangeError(Bs(-0));
  return t * n;
}
function di(e) {
  let t = gi(e[3]);
  return {
    ...st(pi(e[4] || ``))[0],
    isoHour: gi(e[1]),
    isoMinute: gi(e[2]),
    isoSecond: t === 60 ? 59 : t,
  };
}
function fi(e) {
  let t,
    n,
    r = [];
  if (
    (e.replace(eu, (e, i, a) => {
      let o = !!i,
        [s, c] = a.split(`=`).reverse();
      if (c) {
        if (c === `u-ca`) r.push(s), (t ||= o);
        else if (o || /[A-Z]/.test(c)) throw RangeError(Bs(e));
      } else {
        if (n) throw RangeError(Bs(e));
        n = s;
      }
      return ``;
    }),
    r.length > 1 && t)
  )
    throw RangeError(Bs(e));
  return { timeZone: n, calendar: r[0] || `iso8601` };
}
function pi(e) {
  return parseInt(e.padEnd(9, `0`));
}
function mi(e) {
  return RegExp(`^${e}$`, `i`);
}
function hi(e) {
  return e && e !== `+` ? -1 : 1;
}
function gi(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function _i(e) {
  return vi(B(e));
}
function vi(e) {
  let t = bi(e);
  return typeof t == `number`
    ? Zn(t)
    : t
      ? ((e) => {
          if (iu.test(e)) throw RangeError(Es(e));
          if (ru.test(e)) throw RangeError(Os);
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
                        ? ve(e).replace(
                            /island|noronha|murdo|rivadavia|urville/,
                            ve,
                          )
                        : e,
                  ),
            )
            .join(`/`);
        })(e)
      : Nl;
}
function yi(e) {
  let t = bi(e);
  return typeof t == `number` ? t : t ? t.resolvedOptions().timeZone : Nl;
}
function bi(e) {
  let t = li((e = e.toUpperCase()), 1);
  return t === void 0 ? (e === Nl ? void 0 : nu(e)) : t;
}
function xi(e, t) {
  return C(e.epochNanoseconds, t.epochNanoseconds);
}
function Si(e, t) {
  return C(e.epochNanoseconds, t.epochNanoseconds);
}
function Ci(e, t, n, r, i, a) {
  let o = e(Kt(a).relativeTo),
    s = Math.max(Br(r), Br(i));
  if (he(V, r, i)) return 0;
  if (Or(s, o)) return C(N(r), N(i));
  if (!o) throw RangeError(Is);
  let [c, l, u] = Cr(t, n, o),
    d = wr(u),
    f = Tr(u);
  return C(d(f(l, c, r)), d(f(l, c, i)));
}
function wi(e, t) {
  return Ti(e, t) || Ei(e, t);
}
function Ti(e, t) {
  return xe(E(e), E(t));
}
function Ei(e, t) {
  return xe(ot(e), ot(t));
}
function Di(e, t) {
  return !xi(e, t);
}
function Oi(e, t) {
  return !Si(e, t) && !!Pi(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function ki(e, t) {
  return !wi(e, t) && e.calendar === t.calendar;
}
function Ai(e, t) {
  return !Ti(e, t) && e.calendar === t.calendar;
}
function ji(e, t) {
  return !Ti(e, t) && e.calendar === t.calendar;
}
function Mi(e, t) {
  return !Ti(e, t) && e.calendar === t.calendar;
}
function Ni(e, t) {
  return !Ei(e, t);
}
function Pi(e, t) {
  if (e === t) return 1;
  try {
    return yi(e) === yi(t);
  } catch {}
}
function Fi(e, t, n, r) {
  let i = It(e, r, 3, 5),
    a = qi(t.epochNanoseconds, n.epochNanoseconds, ...i);
  return j(e ? M(a) : a);
}
function Ii(e, t, n, r, i, a) {
  let o = ta(r.calendar, i.calendar),
    [s, c, l, u] = It(n, a, 5),
    d = r.epochNanoseconds,
    f = i.epochNanoseconds,
    p = C(f, d),
    m;
  if (p) {
    if (s < 6) m = qi(d, f, s, c, l, u);
    else {
      let n = t(na(r.timeZone, i.timeZone)),
        d = e(o);
      (m = Wi(d, n, r, i, p, s, a)),
        (m = On(m, f, s, c, l, u, d, r, on, x(pr, n)));
    }
  } else m = H;
  return j(n ? M(m) : m);
}
function Li(e, t, n, r, i) {
  let a = ta(n.calendar, r.calendar),
    [o, s, c, l] = It(t, i, 6),
    u = D(n),
    d = D(r),
    f = C(d, u),
    p;
  if (f) {
    if (o <= 6) p = qi(u, d, o, s, c, l);
    else {
      let t = e(a);
      (p = Gi(t, n, r, f, o, i)), (p = On(p, d, o, s, c, l, t, n, D, mr));
    }
  } else p = H;
  return j(t ? M(p) : p);
}
function Ri(e, t, n, r, i) {
  let a = ta(n.calendar, r.calendar);
  return Bi(t, () => e(a), n, r, ...It(t, i, 6, 9, 6));
}
function zi(e, t, n, r, i) {
  let a = ta(n.calendar, r.calendar),
    o = It(t, i, 9, 9, 8),
    s = e(a),
    c = gr(s, n),
    l = gr(s, r);
  return c.isoYear === l.isoYear &&
    c.isoMonth === l.isoMonth &&
    c.isoDay === l.isoDay
    ? j(H)
    : Bi(t, () => s, w(c), w(l), ...o, 8);
}
function Bi(e, t, n, r, i, a, o, s, c = 6) {
  let l = D(n),
    u = D(r);
  if (l === void 0 || u === void 0) throw RangeError(Ns);
  let d;
  if (C(u, l)) {
    if (i === 6) d = qi(l, u, i, a, o, s);
    else {
      let e = t();
      (d = e.h(n, r, i)),
        (a === c && o === 1) || (d = On(d, u, i, a, o, s, e, n, D, hr));
    }
  } else d = H;
  return j(e ? M(d) : d);
}
function Vi(e, t, n, r) {
  let [i, a, o, s] = It(e, r, 5, 5),
    c = jn(Zi(t, n), wn(a, o), s),
    l = { ...H, ...Rr(c, i) };
  return j(e ? M(l) : l);
}
function Hi(e, t, n, r, i, a) {
  let o = C(r.epochNanoseconds, n.epochNanoseconds);
  return o
    ? i < 6
      ? Ji(n.epochNanoseconds, r.epochNanoseconds, i)
      : Wi(t, e, n, r, o, i, a)
    : H;
}
function Ui(e, t, n, r, i) {
  let a = D(t),
    o = D(n),
    s = C(o, a);
  return s ? (r <= 6 ? Ji(a, o, r) : Gi(e, t, n, s, r, i)) : H;
}
function Wi(e, t, n, r, i, a, o) {
  let [s, c, l] = Ki(t, n, r, i);
  var u, d;
  return {
    ...(a === 6
      ? ((u = s), (d = c), { ...H, days: Yi(u, d) })
      : e.h(s, c, a, o)),
    ...Rr(l),
  };
}
function Gi(e, t, n, r, i, a) {
  let [o, s, c] = ((e, t, n) => {
    let r = t,
      i = Zi(e, t);
    return (
      Math.sign(i) === -n && ((r = Sr(t, -n)), (i += 864e11 * n)), [e, r, i]
    );
  })(t, n, r);
  return { ...e.h(o, s, i, a), ...Rr(c) };
}
function Ki(e, t, n, r) {
  function i() {
    return (d = { ...Sr(s, l++ * -r), ...o }), (f = ar(e, d)), C(c, f) === -r;
  }
  let a = W(t, e),
    o = b(Nc, a),
    s = W(n, e),
    c = n.epochNanoseconds,
    l = 0,
    u = Zi(a, s),
    d,
    f;
  if ((Math.sign(u) === -r && l++, i() && (r === -1 || i())))
    throw RangeError(Cs);
  let p = tt(Xe(f, c));
  return [a, d, p];
}
function qi(e, t, n, r, i, a) {
  return { ...H, ...Lr(kn(Xe(e, t), r, i, a), n) };
}
function Ji(e, t, n) {
  return { ...H, ...Lr(Xe(e, t), n) };
}
function Yi(e, t) {
  return Xi(E(e), E(t));
}
function Xi(e, t) {
  return Math.trunc((t - e) / L);
}
function Zi(e, t) {
  return ot(t) - ot(e);
}
function Qi(e, t, n) {
  if (n <= 7) {
    let r = 0,
      i = Yi({ ...e, ...U }, { ...t, ...U });
    return n === 7 && ([r, i] = Te(i, 7)), { ...H, weeks: r, days: i };
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
          ([i, a] = e.p(i, a, -u)),
            (s = i - t),
            (c = a - n),
            (d = e.B(i, a)),
            (f = u < 0 ? -r : d);
        }
        if (((l = o - Math.min(r, d) + f), s)) {
          let [r, o] = e.m(t, n),
            [l, d] = e.m(i, a);
          if (((c = l - r || Number(d) - Number(o)), Math.sign(c) === -u)) {
            let n = u < 0 && -e.O(i);
            (s = (i -= u) - t), (c = a - fa(r, o, e.F(i)) + (n || e.O(i)));
          }
        }
      }
      return [s, c, l];
    })(this, ...r, ...i);
  return (
    n === 8 && ((o += this.q(a, r[0])), (a = 0)),
    { ...H, years: a, months: o, days: s }
  );
}
function $i(e) {
  return e * Yc;
}
function ea(e, t) {
  let n = t + e,
    r = Math.sign(e),
    i = r < 0 ? -1 : 0,
    a = 0;
  for (let e = t; e !== n; e += r) a += Ma.call(this, e + i);
  return a;
}
function ta(e, t) {
  if (e !== t) throw RangeError(Ts);
  return e;
}
function na(e, t) {
  if (!Pi(e, t)) throw RangeError(Ds);
  return e;
}
function ra(e) {
  return this.I(e)[0];
}
function ia(e) {
  return this.I(e)[1];
}
function aa(e) {
  let [t] = this.u(e);
  return this.L(t);
}
function oa(e) {
  let [t] = this.u(e);
  return this.O(t);
}
function sa(e) {
  let [t, n] = this.u(e);
  return this.B(t, n);
}
function ca(e) {
  let [t] = this.u(e);
  return this.G(t);
}
function la(e) {
  let [t] = this.u(e);
  return Xi(this.M(t), E(e)) + 1;
}
function ua(e) {
  let t = au.exec(e);
  if (!t) throw RangeError(ys(e));
  return [parseInt(t[1]), !!t[2]];
}
function da(e, t) {
  return `M` + I(e) + (t ? `L` : ``);
}
function fa(e, t, n) {
  return e + (t || (n && e >= n) ? 1 : 0);
}
function pa(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function ma(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function ha(e) {
  return xc[_a(e)];
}
function ga(e) {
  return Cc[_a(e)];
}
function _a(e) {
  return Ra(e.id || `iso8601`);
}
function va(e) {
  function t(e) {
    return ((e, t) => ({ ...xa(e, t), V: e.month, day: parseInt(e.day) }))(
      gt(n, e),
      r,
    );
  }
  let n = su(e),
    r = Ra(e);
  return { id: e, _: ya(t), J: ba(t) };
}
function ya(e) {
  return y((t) => e(E(t)), WeakMap);
}
function ba(e) {
  let t = e(0).year - qc;
  return y((n) => {
    let r,
      i = ft(n - t),
      a = 0,
      o = [],
      s = [];
    do i += 400 * L;
    while ((r = e(i)).year <= n);
    do
      if (
        ((i += (1 - r.day) * L),
        r.year === n && (o.push(i), s.push(r.V)),
        (i -= L),
        ++a > 100 || i < -Vc)
      )
        throw RangeError(Cs);
    while ((r = e(i)).year >= n);
    return { K: o.reverse(), X: Ws(s.reverse()) };
  });
}
function xa(e, t) {
  let n,
    r,
    i = Sa(e);
  if (e.era) {
    let a = xc[t],
      o = Sc[t] || {};
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
      (i = ma(r, a[n] || 0)));
  }
  return { era: n, eraYear: r, year: i };
}
function Sa(e) {
  return parseInt(e.relatedYear || e.year);
}
function Ca(e) {
  return this._(e).day;
}
function wa(e) {
  let { year: t, V: n, day: r } = this._(e),
    { X: i } = this.J(t);
  return [t, i[n] + 1, r];
}
function Ta(e, t, n) {
  return ht(Ea.call(this, e, t, n));
}
function Ea(e, t = 1, n = 1) {
  return this.J(e).K[t - 1] + (n - 1) * L;
}
function Da(e, t) {
  let n = Oa.call(this, e);
  return [pa(t, n), n === t];
}
function Oa(e) {
  let t = Fa(this, e),
    n = Fa(this, e - 1),
    r = t.length;
  if (r > n.length) {
    let e = ga(this);
    if (e < 0) return -e;
    for (let e = 0; e < r; e++) if (t[e] !== n[e]) return e + 1;
  }
}
function ka(e) {
  let t = Aa.call(this, e);
  return t > Aa.call(this, e - 1) && t > Aa.call(this, e + 1);
}
function Aa(e) {
  return Xi(Ea.call(this, e), Ea.call(this, e + 1));
}
function ja(e, t) {
  let { K: n } = this.J(e),
    r = t + 1,
    i = n;
  return (
    r > n.length && ((r = 1), (i = this.J(e + 1).K)), Xi(n[t - 1], i[r - 1])
  );
}
function Ma(e) {
  return this.J(e).K.length;
}
function Na(e) {
  let t = this._(e);
  return [t.era, t.eraYear];
}
function Pa(e, t, n) {
  let r =
      this.id && Ra(this.id) === `chinese`
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
    [i, a, o] = wa.call(this, { isoYear: r, isoMonth: Yc, isoDay: 31 }),
    s = Oa.call(this, i),
    c = a === s;
  (xe(e, pa(a, s)) || xe(Number(t), Number(c)) || xe(n, o)) === 1 && i--;
  for (let r = 0; r < 100; r++) {
    let a = i - r,
      o = Oa.call(this, a),
      s = fa(e, t, o);
    if (t === (s === o) && n <= ja.call(this, a, s)) return [a, s];
  }
}
function Fa(e, t) {
  return Object.keys(e.J(t).X);
}
function Ia(e) {
  return La(B(e));
}
function La(e) {
  if ((e = e.toLowerCase()) !== `iso8601` && e !== yc) {
    let t = su(e).resolvedOptions().calendar;
    if (Ra(e) !== Ra(t)) throw RangeError(ws(e));
    return t;
  }
  return e;
}
function Ra(e) {
  return e === `islamicc` && (e = `islamic`), e.split(`-`)[0];
}
function za(e, t) {
  return (n) =>
    n === `iso8601`
      ? e
      : n === yc || n === bc
        ? Object.assign(Object.create(e), { id: n })
        : Object.assign(Object.create(t), ou(n));
}
function Ba(e, t, n, r) {
  let i = Ja(n, r, hc, [], oc);
  if (i.timeZone !== void 0) {
    let r = n.ee(i),
      a = Ya(i),
      o = e(i.timeZone);
    return {
      epochNanoseconds: ir(
        t(o),
        { ...r, ...a },
        i.offset === void 0 ? void 0 : Kr(i.offset),
      ),
      timeZone: o,
    };
  }
  return { ...n.ee(i), ...U };
}
function Va(e, t, n, r, i, a) {
  let o = Ja(n, i, hc, ic, oc),
    s = e(o.timeZone),
    [c, l, u] = Ft(a),
    d = n.ee(o, Jt(c)),
    f = Ya(o, c);
  return k(
    ir(t(s), { ...d, ...f }, o.offset === void 0 ? void 0 : Kr(o.offset), l, u),
    s,
    r,
  );
}
function Ha(e, t, n) {
  let r = Ja(e, t, hc, [], tc),
    i = O(n);
  return A(T({ ...e.ee(r, Jt(i)), ...Ya(r, i) }));
}
function Ua(e, t, n, r = []) {
  let i = Ja(e, t, hc, r);
  return e.ee(i, n);
}
function Wa(e, t, n, r) {
  let i = Ja(e, t, pc, r);
  return e.ne(i, n);
}
function Ga(e, t, n, r) {
  let i = Ja(e, n, hc, fc);
  return (
    t &&
      i.month !== void 0 &&
      i.monthCode === void 0 &&
      i.year === void 0 &&
      (i.year = Jc),
    e.te(i, r)
  );
}
function Ka(e, t) {
  return nn(Ya(P(e, nc, [], 1), O(t)));
}
function qa(e) {
  let t = P(e, Ec);
  return j(Fr({ ...H, ...t }));
}
function Ja(e, t, n, r = [], i = []) {
  return P(t, [...e.fields(n), ...i].sort(), r);
}
function P(e, t, n, r = !n) {
  let i = {},
    a,
    o = 0;
  for (let r of t) {
    if (r === a) throw RangeError(cs(r));
    if (r === `constructor` || r === `__proto__`) throw RangeError(ss(r));
    let t = e[r];
    if (t !== void 0) (o = 1), mu[r] && (t = mu[r](t, r)), (i[r] = t);
    else if (n) {
      if (n.includes(r)) throw TypeError(os(r));
      i[r] = vc[r];
    }
    a = r;
  }
  if (r && !o) throw TypeError(ls(t));
  return i;
}
function Ya(e, t) {
  return Pt(hu({ ...vc, ...e }), t);
}
function Xa(e, t, n, r, i) {
  let { calendar: a, timeZone: o } = n,
    s = e(a),
    c = t(o),
    l = [...s.fields(hc), ...ac].sort(),
    u = ((e) => {
      let t = W(e, G),
        n = Zn(t.offsetNanoseconds),
        r = pu(e.calendar),
        [i, a, o] = r.u(t),
        [s, c] = r.m(i, a),
        l = da(s, c);
      return { ...gu(t), year: i, monthCode: l, day: o, offset: n };
    })(n),
    d = P(r, l),
    f = s.oe(u, d),
    p = { ...u, ...d },
    [m, h, ee] = Ft(i, 2);
  return k(
    ir(c, { ...s.ee(f, Jt(m)), ...Pt(hu(p), m) }, Kr(p.offset), h, ee),
    o,
    a,
  );
}
function Za(e, t, n, r) {
  let i = e(t.calendar),
    a = [...i.fields(hc), ...tc].sort(),
    o = {
      ...go((s = t)),
      hour: s.isoHour,
      minute: s.isoMinute,
      second: s.isoSecond,
      millisecond: s.isoMillisecond,
      microsecond: s.isoMicrosecond,
      nanosecond: s.isoNanosecond,
    };
  var s;
  let c = P(n, a),
    l = O(r),
    u = i.oe(o, c),
    d = { ...o, ...c };
  return A(T({ ...i.ee(u, Jt(l)), ...Pt(hu(d), l) }));
}
function Qa(e, t, n, r) {
  let i = e(t.calendar),
    a = i.fields(hc).sort(),
    o = go(t),
    s = P(n, a),
    c = i.oe(o, s);
  return i.ee(c, r);
}
function $a(e, t, n, r) {
  let i = e(t.calendar),
    a = i.fields(pc).sort(),
    o = ((e) => {
      let t = pu(e.calendar),
        [n, r] = t.u(e),
        [i, a] = t.m(n, r);
      return { year: n, monthCode: da(i, a) };
    })(t),
    s = P(n, a),
    c = i.oe(o, s);
  return i.ne(c, r);
}
function eo(e, t, n, r) {
  let i = e(t.calendar),
    a = i.fields(hc).sort(),
    o = ((e) => {
      let t = pu(e.calendar),
        [n, r, i] = t.u(e),
        [a, o] = t.m(n, r);
      return { monthCode: da(a, o), day: i };
    })(t),
    s = P(n, a),
    c = i.oe(o, s);
  return i.te(c, r);
}
function to(e, t, n) {
  return nn(((e, t, n) => Ya({ ...b(nc, e), ...P(t, nc) }, O(n)))(e, t, n));
}
function no(e, t) {
  return j(((n = e), (r = t), Fr({ ...n, ...P(r, Ec) })));
  var n, r;
}
function ro(e, t) {
  let n = Ja(e, t, _c);
  return e.te(n);
}
function io(e, t, n) {
  let r = Ja(e, t, mc);
  return e.ne(r, n);
}
function ao(e, t, n, r, i) {
  (t = b((n = e.fields(n)), t)), (r = P(r, (i = e.fields(i)), []));
  let a = e.oe(t, r);
  return (a = P(a, [...n, ...i].sort(), [])), e.ee(a);
}
function oo(e, t) {
  let n = O(t),
    r = fo(this, e),
    i = po(this, e, r, n),
    a = mo(this, e, i, r, n);
  return $t(w(this.U(r, i, a)), this.id || `iso8601`);
}
function so(e, t) {
  let n = O(t),
    r = fo(this, e),
    i = po(this, e, r, n);
  return en(it(this.U(r, i, 1)), this.id || `iso8601`);
}
function co(e, t) {
  let n = O(t),
    r,
    i,
    a,
    o = e.eraYear !== void 0 || e.year !== void 0 ? fo(this, e) : void 0,
    s = !this.id;
  if ((o === void 0 && s && (o = Jc), o !== void 0)) {
    let t = po(this, e, o, n);
    r = mo(this, e, t, o, n);
    let s = this.F(o);
    (i = pa(t, s)), (a = t === s);
  } else {
    if (e.monthCode === void 0) throw TypeError(xs);
    if (
      (([i, a] = ua(e.monthCode)), this.id && this.id !== yc && this.id !== bc)
    ) {
      if (this.id && Ra(this.id) === `coptic` && n === 0) {
        let t = a || i !== 13 ? 30 : 6;
        (r = e.day), (r = Se(r, 1, t));
      } else if (this.id && Ra(this.id) === `chinese` && n === 0) {
        let t =
          !a || (i !== 1 && i !== 9 && i !== 10 && i !== 11 && i !== 12)
            ? 30
            : 29;
        (r = e.day), (r = Se(r, 1, t));
      } else r = e.day;
    } else r = mo(this, e, po(this, e, Jc, n), Jc, n);
  }
  let c = this.R(i, a, r);
  if (!c) throw RangeError(`Cannot guess year`);
  let [l, u] = c;
  return tn(w(this.U(l, u, r)), this.id || `iso8601`);
}
function lo(e) {
  return ha(this) && e.includes(`year`) ? [...e, ...sc] : e;
}
function uo(e, t) {
  let n = Object.assign(Object.create(null), e);
  return (
    ho(n, t, dc),
    ha(this) && (ho(n, t, cc), this.id === bc && ho(n, t, gc, sc)),
    n
  );
}
function fo(e, t) {
  let n = ha(e),
    r = Sc[e.id || ``] || {},
    { era: i, eraYear: a, year: o } = t;
  if (i !== void 0 || a !== void 0) {
    if (i === void 0 || a === void 0) throw TypeError(hs);
    if (!n) throw RangeError(ms);
    let e = n[r[i] || i];
    if (e === void 0) throw RangeError(_s(i));
    let t = ma(a, e);
    if (o !== void 0 && o !== t) throw RangeError(gs);
    o = t;
  } else if (o === void 0) throw TypeError(vs(n));
  return o;
}
function po(e, t, n, r) {
  let { month: i, monthCode: a } = t;
  if (a !== void 0) {
    let t = ((e, t, n, r) => {
      let i = e.F(n),
        [a, o] = ua(t),
        s = fa(a, o, i);
      if (o) {
        let t = ga(e);
        if (t === void 0) throw RangeError(Ss);
        if (t > 0) {
          if (s > t) throw RangeError(Ss);
          if (i === void 0) {
            if (r === 1) throw RangeError(Ss);
            s--;
          }
        } else if (s !== -t || (i === void 0 && r === 1)) throw RangeError(Ss);
      }
      return s;
    })(e, a, n, r);
    if (i !== void 0 && i !== t) throw RangeError(bs);
    (i = t), (r = 1);
  } else if (i === void 0) throw TypeError(xs);
  return ae(`month`, i, 1, e.O(n), r);
}
function mo(e, t, n, r, i) {
  return _(t, `day`, 1, e.B(r, n), i);
}
function ho(e, t, n, r) {
  let i = 0,
    a = [];
  for (let e of n) t[e] === void 0 ? a.push(e) : (i = 1);
  if ((Object.assign(e, t), i)) for (let t of r || a) delete e[t];
}
function go(e) {
  let t = pu(e.calendar),
    [n, r, i] = t.u(e),
    [a, o] = t.m(n, r);
  return { year: n, monthCode: da(a, o), day: i };
}
function _o(e) {
  return Qt(at(Qe(Ue(e))));
}
function vo(e, t, n, r, i = z) {
  return k(at(Qe(Ue(n))), t(r), e(i));
}
function yo(e, t, n, r, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = z) {
  return A(T(At(de(S, ue(Fc, [t, n, r, i, a, o, s, c, l])))), e(u));
}
function bo(e, t, n, r, i = z) {
  return $t(w(jt(de(S, { isoYear: t, isoMonth: n, isoDay: r }))), e(i));
}
function xo(e, t, n, r = z, i = 1) {
  let a = S(t),
    o = S(n),
    s = e(r);
  return en(it(jt({ isoYear: a, isoMonth: o, isoDay: S(i) })), s);
}
function So(e, t, n, r = z, i = Jc) {
  let a = S(t),
    o = S(n),
    s = e(r);
  return tn(w(jt({ isoYear: S(i), isoMonth: a, isoDay: o })), s);
}
function Co(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
  return nn(Pt(de(S, ue(Nc, [e, t, n, r, i, a])), 1));
}
function wo(
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
  return j(Fr(de(Ge, ue(V, [e, t, n, r, i, a, o, s, c, l]))));
}
function To(e, t, n = z) {
  return k(e.epochNanoseconds, t, n);
}
function Eo(e) {
  return Qt(e.epochNanoseconds);
}
function Do(e, t) {
  return A(W(t, e));
}
function Oo(e, t) {
  return $t(W(t, e));
}
function ko(e, t) {
  return nn(W(t, e));
}
function Ao(e, t, n, r) {
  return k(
    at(
      ((e, t, n, r) => {
        let i = ((e) => vl(Kt(e)))(r);
        return ar(e(t), n, i);
      })(e, n, t, r),
    ),
    n,
    t.calendar,
  );
}
function jo(e, t, n, r, i) {
  let a = e(i.timeZone),
    o = i.plainTime,
    s = o === void 0 ? void 0 : t(o),
    c = n(a),
    l;
  return (
    (l = s ? ar(c, { ...r, ...s }) : or(c, { ...r, ...U })), k(l, a, r.calendar)
  );
}
function Mo(e, t = U) {
  return A(T({ ...e, ...t }));
}
function No(e, t, n) {
  return io(e(t.calendar), n);
}
function Po(e, t, n) {
  return ro(e(t.calendar), n);
}
function Fo(e, t, n, r) {
  return ((e, t, n) => ao(e, t, mc, Le(n), fc))(e(t.calendar), n, r);
}
function Io(e, t, n, r) {
  return ((e, t, n) => ao(e, t, _c, Le(n), lc))(e(t.calendar), n, r);
}
function Lo(e) {
  return Qt(at($e(Ge(e), Xs)));
}
function Ro(e) {
  return Qt(at(Qe(Ue(e))));
}
function zo(e, t, n) {
  let r = new Set(n);
  return (i, a) => {
    let o = n && me(i, n);
    if (
      !me(
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
function Bo(e, t = Vo, n = 0) {
  let [r, , , i] = e;
  return (a, o = Ku, ...s) => {
    let c = t(i && i(...s), a, o, r, n);
    return [c, ...Uo(e, c.resolvedOptions(), s)];
  };
}
function Vo(e, t, n, r, i) {
  if (((n = r(n, i)), e)) {
    if (n.timeZone !== void 0) throw TypeError(Us);
    n.timeZone = e;
  }
  return new Kc(t, n);
}
function Ho() {
  return new Kc(void 0, { calendar: z }).resolvedOptions().calendar === z;
}
function Uo(e, t, n) {
  let [, r, i] = e;
  return n.map(
    (e) => (
      e.calendar &&
        ((e, t, n) => {
          if ((n || e !== `iso8601`) && e !== t) throw RangeError(Ts);
        })(e.calendar, t.calendar, i),
      r(e, t)
    ),
  );
}
function Wo(e, t, n) {
  let r = t.timeZone,
    i = e(r),
    a = { ...W(t, i), ...(n || U) },
    o;
  return (
    (o = n ? ir(i, a, a.offsetNanoseconds, 2) : or(i, a)), k(o, r, t.calendar)
  );
}
function Go(e, t = U) {
  return A(T({ ...e, ...t }));
}
function Ko(e, t) {
  return { ...e, calendar: t };
}
function qo(e, t) {
  return { ...e, timeZone: t };
}
function Jo(e) {
  let t = Yo();
  return mt(t, e.N(t));
}
function Yo() {
  return $e(Date.now(), Xs);
}
function Xo() {
  return new Kc().resolvedOptions().timeZone;
}
var Zo = (e, t) => `Non-integer ${e}: ${t}`,
  Qo = (e, t) => `Non-positive ${e}: ${t}`,
  $o = (e, t) => `Non-finite ${e}: ${t}`,
  es = (e) => `Cannot convert bigint to ${e}`,
  ts = (e) => `Invalid bigint: ${e}`,
  ns = `Cannot convert Symbol to string`,
  rs = `Invalid object`,
  is = (e, t, n, r, i) =>
    i ? is(e, i[t], i[n], i[r]) : as(e, t) + `; must be between ${n}-${r}`,
  as = (e, t) => `Invalid ${e}: ${t}`,
  os = (e) => `Missing ${e}`,
  ss = (e) => `Invalid field ${e}`,
  cs = (e) => `Duplicate field ${e}`,
  ls = (e) => `No valid fields: ` + e.join(),
  us = `Invalid bag`,
  ds = (e, t, n) => as(e, t) + `; must be ` + Object.keys(n).join(),
  fs = `Cannot use valueOf`,
  ps = `Invalid calling context`,
  ms = `Forbidden era/eraYear`,
  hs = `Mismatching era/eraYear`,
  gs = `Mismatching year/eraYear`,
  _s = (e) => `Invalid era: ${e}`,
  vs = (e) => `Missing year` + (e ? `/era/eraYear` : ``),
  ys = (e) => `Invalid monthCode: ${e}`,
  bs = `Mismatching month/monthCode`,
  xs = `Missing month/monthCode`,
  Ss = `Invalid leap month`,
  Cs = `Invalid protocol results`,
  ws = (e) => as(`Calendar`, e),
  Ts = `Mismatching Calendars`,
  Es = (e) => as(`TimeZone`, e),
  Ds = `Mismatching TimeZones`,
  Os = `Forbidden ICU TimeZone`,
  ks = `Out-of-bounds offset`,
  As = `Out-of-bounds TimeZone gap`,
  js = `Invalid TimeZone offset`,
  Ms = `Ambiguous offset`,
  Ns = `Out-of-bounds date`,
  Ps = `Out-of-bounds duration`,
  Fs = `Cannot mix duration signs`,
  Is = `Missing relativeTo`,
  Ls = `Cannot use large units`,
  Rs = `Required smallestUnit or largestUnit`,
  zs = `smallestUnit > largestUnit`,
  F = (e) => `Cannot parse: ${e}`,
  Bs = (e) => `Invalid substring: ${e}`,
  Vs = (e) => `Cannot format ${e}`,
  Hs = `Mismatching types for formatting`,
  Us = `Cannot specify TimeZone`,
  Ws = x(fe, (e, t) => t),
  Gs = x(fe, (e, t, n) => n),
  I = x(be, 2),
  Ks = {
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
  qs = Object.keys(Ks),
  L = 864e5,
  Js = 1e3,
  Ys = 1e3,
  Xs = 1e6,
  Zs = 1e9,
  Qs = 6e10,
  $s = 36e11,
  R = 864e11,
  ec = [1, Ys, Xs, Zs, Qs, $s, R],
  tc = qs.slice(0, 6),
  nc = ye(tc),
  rc = [`offset`],
  ic = [`timeZone`],
  ac = tc.concat(rc),
  oc = ac.concat(ic),
  sc = [`era`, `eraYear`],
  cc = sc.concat([`year`]),
  lc = [`year`],
  uc = [`monthCode`],
  dc = [`month`].concat(uc),
  fc = [`day`],
  pc = dc.concat(lc),
  mc = uc.concat(lc),
  hc = fc.concat(pc),
  gc = fc.concat(dc),
  _c = fc.concat(uc),
  vc = Gs(tc, 0),
  z = `iso8601`,
  yc = `gregory`,
  bc = `japanese`,
  xc = {
    [yc]: { "gregory-inverse": -1, gregory: 0 },
    [bc]: {
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
  Sc = {
    [yc]: { bce: `gregory-inverse`, ce: `gregory` },
    [bc]: { bce: `japanese-inverse`, ce: `japanese` },
    ethiopic: { era0: `ethioaa`, era1: `ethiopic` },
    coptic: { era0: `coptic-inverse`, era1: `coptic` },
    roc: { broc: `roc-inverse`, minguo: `roc` },
  },
  Cc = { chinese: 13, dangi: 13, hebrew: -6 },
  B = x(Re, `string`),
  wc = x(Re, `boolean`),
  Tc = x(Re, `number`),
  V = qs.map((e) => e + `s`),
  Ec = ye(V),
  Dc = V.slice(0, 6),
  Oc = V.slice(6),
  kc = Oc.slice(1),
  Ac = Ws(V),
  H = Gs(V, 0),
  jc = Gs(Dc, 0),
  Mc = x(ge, V),
  Nc = [
    `isoNanosecond`,
    `isoMicrosecond`,
    `isoMillisecond`,
    `isoSecond`,
    `isoMinute`,
    `isoHour`,
  ],
  Pc = [`isoDay`, `isoMonth`, `isoYear`],
  Fc = Nc.concat(Pc),
  Ic = ye(Pc),
  Lc = ye(Nc),
  Rc = ye(Fc),
  U = Gs(Lc, 0),
  zc = x(ge, Fc),
  Bc = 1e8,
  Vc = Bc * L,
  Hc = [Bc, 0],
  Uc = [-1e8, 0],
  Wc = 275760,
  Gc = -271821,
  Kc = Intl.DateTimeFormat,
  qc = 1970,
  Jc = 1972,
  Yc = 12,
  Xc = ft(1868, 9, 8),
  Zc = y(kt, WeakMap),
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
  ml = x(Yt, Qc),
  hl = x(Yt, `largestUnit`),
  gl = x(Yt, $c),
  _l = x(Xt, `overflow`, al),
  vl = x(Xt, `disambiguation`, sl),
  yl = x(Xt, `offset`, cl),
  bl = x(Xt, `calendarName`, ll),
  xl = x(Xt, `timeZoneName`, ul),
  Sl = x(Xt, `offset`, dl),
  Cl = x(Xt, el, fl),
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
    (e) => (Oe(e) ? Math.floor(e) : Math.round(e)),
    Math.ceil,
    (e) => (Oe(e) ? Math.ceil(e) : Math.round(e)),
    Math.trunc,
    (e) => (Oe(e) ? Math.trunc(e) || 0 : Math.round(e)),
    (e) => (e < 0 ? Math.floor(e) : Math.ceil(e)),
    (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0,
    (e) => (Oe(e) ? (e = Math.trunc(e) || 0) + (e % 2) : Math.round(e)),
  ],
  Nl = `UTC`,
  Pl = 5184e3,
  Fl = dt(1847),
  Il = dt(
    (() => {
      let e = new Date();
      return (e.getTime() === 0 ? 2040 : e.getUTCFullYear()) + 10;
    })(),
  ),
  Ll = /0+$/,
  W = y(rr, WeakMap),
  Rl = 2 ** 32 - 1,
  G = y((e) => {
    let t = bi(e);
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
          let t = D({ ...e, ...U });
          if (!t || Math.abs(t[0]) > 1e8) throw RangeError(Ns);
        })(e),
        [ut(e, this.j)]
      );
    }
    l() {}
  },
  Bl = class {
    constructor(e) {
      this.ae = ((e) => {
        function t(e) {
          let [t, s] = Hr(Se(e, a, o)),
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
        let r = y(e),
          i = y(Vr),
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
            let s = Se(e, a, o),
              [c, l] = Hr(s),
              u = Pl * t,
              d =
                t < 0
                  ? () => l > a || ((a = s), 0)
                  : () => c < o || ((o = s), 0);
            for (; d(); ) {
              let a = r(c),
                o = r(l);
              if (a !== o) {
                let r = i(c, l);
                n(r, a, o);
                let s = r[0];
                if ((xe(s, e) || 1) === t) return s;
              }
              (c += u), (l += u);
            }
          },
        };
      })(
        ((e) => (t) => {
          let n = gt(e, t * Js);
          return (
            dt(
              Sa(n),
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
      return this.ae.ue(ct(e)) * Zs;
    }
    v(e) {
      let [t, n] = [
        dt(
          (r = e).isoYear,
          r.isoMonth,
          r.isoDay,
          r.isoHour,
          r.isoMinute,
          r.isoSecond,
        ),
        r.isoMillisecond * Xs + r.isoMicrosecond * Ys + r.isoNanosecond,
      ];
      var r;
      return this.ae.se(t).map((e) => at(Ye($e(e, Zs), n)));
    }
    l(e, t) {
      let [n, r] = lt(e),
        i = this.ae.l(n + (t > 0 || r ? 1 : 0), t);
      if (i !== void 0) return $e(i, Zs);
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
  Yl = mi(Ul + Jl),
  Xl = mi(`(?:--)?(\\d{2})-?(\\d{2})` + Jl),
  Zl = mi(Kl + Jl),
  Ql = mi(`T?` + Wl + `(?:` + Gl + `)?` + Jl),
  $l = mi(Gl),
  eu = new RegExp(ql, `g`),
  tu = mi(
    `${Vl}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Hl}H)?(?:(\\d+)${Hl}M)?(?:(\\d+)${Hl}S)?)?`,
  ),
  nu = y(
    (e) =>
      new Kc(`en`, {
        calendar: z,
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
  ou = y(va),
  su = y(
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
    P: vr,
    h: Qi,
    ee: oo,
    ne: so,
    te: co,
    fields: lo,
    oe: uo,
    inLeapYear: aa,
    monthsInYear: oa,
    daysInMonth: sa,
    daysInYear: ca,
    dayOfYear: la,
    era(e) {
      return this.$(e)[0];
    },
    eraYear(e) {
      return this.$(e)[1];
    },
    monthCode(e) {
      let [t, n] = this.u(e),
        [r, i] = this.m(t, n);
      return da(r, i);
    },
    dayOfWeek: Dt,
    daysInWeek: St,
  },
  lu = { u: vt, $: Ot, m: yt },
  uu = Object.assign(
    {},
    cu,
    Object.assign(
      {},
      { dayOfYear: la, u: vt, M: ft },
      {
        weekOfYear: ra,
        yearOfWeek: ia,
        I(e) {
          function t(e) {
            return (7 - e < r ? 7 : 0) - e;
          }
          function n(e) {
            let n = Tt(f + e),
              r = e || 1;
            return (u = (n + (t(we(c + n * r, 7)) - l) * r) / 7);
          }
          let r = this.id ? 1 : 4,
            i = Dt(e),
            a = this.dayOfYear(e),
            o = we(i - 1, 7),
            s = a - 1,
            c = we(o - s, 7),
            l = t(c),
            u,
            d = Math.floor((s - l) / 7) + 1,
            f = e.isoYear;
          return d ? d > n(0) && ((d = 1), f++) : ((d = n(-1)), f--), [d, f, u];
        },
      },
    ),
    {
      u: vt,
      $: Ot,
      m: yt,
      R: bt,
      L: Et,
      F: _e,
      O: Ct,
      q: $i,
      B: wt,
      G: Tt,
      U: xt,
      M: ft,
      p: br,
      year(e) {
        return e.isoYear;
      },
      month(e) {
        return e.isoMonth;
      },
      day: _t,
    },
  ),
  du = { u: wa, $: Na, m: Da },
  fu = Object.assign(
    {},
    cu,
    Object.assign(
      {},
      { dayOfYear: la, u: wa, M: Ea },
      {
        I() {
          return [];
        },
      },
      { weekOfYear: ra, yearOfWeek: ia },
    ),
    {
      u: wa,
      $: Na,
      m: Da,
      R: Pa,
      L: ka,
      F: Oa,
      O: Ma,
      q: ea,
      B: ja,
      G: Aa,
      U: Ta,
      M: Ea,
      p: xr,
      year(e) {
        return this._(e).year;
      },
      month(e) {
        let { year: t, V: n } = this._(e),
          { X: r } = this.J(t);
        return r[n] + 1;
      },
      day: Ca,
    },
  ),
  pu = za(lu, du),
  K = za(uu, fu),
  mu = Object.assign(
    {},
    {
      era: He,
      eraYear: S,
      year: S,
      month: Ke,
      monthCode(e) {
        let t = He(e);
        return ua(t), t;
      },
      day: Ke,
    },
    Gs(tc, S),
    Gs(V, Ge),
    {
      offset(e) {
        let t = He(e);
        return Kr(t), t;
      },
    },
  ),
  hu = x(pe, tc, Nc),
  gu = x(pe, Nc, tc),
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
  zu = zo(Pu, Cu),
  Bu = zo(Pu, wu),
  Vu = zo(Pu, Cu, vu),
  Hu = zo(Mu, xu, Fu),
  Uu = zo(Nu, Su, Iu),
  Wu = zo(Au, bu, Lu),
  Gu = zo(ju, yu, Ru),
  Ku = {},
  qu = Ho(),
  Ju = [zu, rn],
  Yu = [
    Bu,
    rn,
    0,
    (e, t) => {
      let n = e.timeZone;
      if (t && t.timeZone !== n) throw RangeError(Ds);
      return n;
    },
  ],
  Xu = [Vu, E],
  Zu = [Hu, E],
  Qu = [Uu, (e) => ot(e) / Xs],
  $u = [Wu, E, qu],
  ed = [Gu, E, qu];
function td(e, t, n, r, i, a) {
  function o(...e) {
    if (!(this instanceof o)) throw TypeError(ps);
    {
      let n = t(...e);
      Td(this, n), rd(this, n, a);
    }
  }
  function s(e, t) {
    return Object.defineProperties(function (...t) {
      return e.call(this, c(this), ...t);
    }, oe(t));
  }
  function c(t) {
    let n = Y(t);
    if (!n || n.branding !== e) throw TypeError(ps);
    return n;
  }
  return (
    Object.defineProperties(o.prototype, {
      ...ce(de(s, n)),
      ...se(de(s, r)),
      ...le(`Temporal.` + e),
    }),
    Object.defineProperties(o, { ...se(i), ...oe(e) }),
    [
      o,
      (e) => {
        let t = Object.create(o.prototype);
        return Td(t, e), rd(t, e, a), t;
      },
      c,
    ]
  );
}
function nd(e) {
  if (Y(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw TypeError(us);
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
  if (v(e)) {
    let { calendar: t } = Y(e) || {};
    if (!t) throw TypeError(ws(e));
    return t;
  }
  return ((e) => La(ei(B(e))))(e);
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
  throw TypeError(fs);
}
function q(e) {
  if (v(e)) {
    let { timeZone: t } = Y(e) || {};
    if (!t) throw TypeError(Es(e));
    return t;
  }
  return ((e) => vi(ti(B(e))))(e);
}
function J(e) {
  if (v(e)) {
    let t = Y(e);
    return t && t.branding === `Duration` ? t : qa(e);
  }
  return $r(e);
}
function ld(e) {
  if (e !== void 0) {
    if (v(e)) {
      let t = Y(e) || {};
      switch (t.branding) {
        case kl:
        case El:
          return t;
        case Dl:
          return $t(t);
      }
      let n = id(e);
      return { ...Ba(q, G, K(n), e), calendar: n };
    }
    return Wr(e);
  }
}
function ud(e, t) {
  if (v(e)) {
    let n = Y(e) || {};
    switch (n.branding) {
      case Ol:
        return O(t), n;
      case Dl:
        return O(t), nn(n);
      case kl:
        return O(t), ko(G, n);
    }
    return Ka(e, t);
  }
  let n = Qr(e);
  return O(t), n;
}
function dd(e) {
  return e === void 0 ? void 0 : ud(e);
}
function fd(e, t) {
  if (v(e)) {
    let n = Y(e) || {};
    switch (n.branding) {
      case Dl:
        return O(t), n;
      case El:
        return O(t), A({ ...n, ...U });
      case kl:
        return O(t), Do(G, n);
    }
    return Ha(K(id(e)), e, t);
  }
  let n = qr(e);
  return O(t), n;
}
function pd(e, t) {
  if (v(e)) {
    let n = Y(e);
    if (n && n.branding === `PlainMonthDay`) return O(t), n;
    let r = ad(e);
    return Ga(K(r || `iso8601`), !r, e, t);
  }
  let n = Zr(K, e);
  return O(t), n;
}
function md(e, t) {
  if (v(e)) {
    let n = Y(e);
    return n && n.branding === `PlainYearMonth`
      ? (O(t), n)
      : Wa(K(id(e)), e, t);
  }
  let n = Yr(K, e);
  return O(t), n;
}
function hd(e, t) {
  if (v(e)) {
    let n = Y(e) || {};
    switch (n.branding) {
      case El:
        return O(t), n;
      case Dl:
        return O(t), $t(n);
      case kl:
        return O(t), Oo(G, n);
    }
    return Ua(K(id(e)), e, t);
  }
  let n = Jr(e);
  return O(t), n;
}
function gd(e, t) {
  if (v(e)) {
    let n = Y(e);
    if (n && n.branding === `ZonedDateTime`) return Ft(t), n;
    let r = id(e);
    return Va(q, G, K(r), r, e, t);
  }
  return Gr(e, t);
}
function _d(e) {
  return de((e) => (t) => e(vd(t)), e);
}
function vd(e) {
  return W(e, G);
}
function yd(e) {
  if (v(e)) {
    let t = Y(e);
    if (t)
      switch (t.branding) {
        case Al:
          return t;
        case kl:
          return Qt(t.epochNanoseconds);
      }
  }
  return Ur(e);
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
          a = b(Object.keys(t), r),
          o = y(Cd),
          s = (e, ...t) => {
            if (e) {
              if (t.length !== 2) throw TypeError(Hs);
              for (let e of t) if (e === void 0) throw TypeError(Hs);
            }
            e || t[0] !== void 0 || (t = []);
            let r = t.map((e) => Y(e) || Number(e)),
              s,
              c = 0;
            for (let e of r) {
              let t = typeof e == `object` ? e.branding : void 0;
              if (c++ && t !== s) throw TypeError(Hs);
              s = t;
            }
            return s ? o(s)(i, a, ...r) : [n, ...r];
          };
        return (s.i = n), s;
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
        Object.defineProperties(n.get, oe(`get ${t}`)));
  }
  return (
    (i.prototype.value = t.prototype = Object.create({}, r)),
    Object.defineProperties(e, i),
    e
  );
}
function xd(e) {
  return Object.defineProperties(function (...t) {
    let [n, ...r] = pf.get(this)(e.includes(`Range`), ...t);
    return n[e](...r);
  }, oe(e));
}
function Sd(e) {
  return Object.defineProperties(function (...t) {
    return pf.get(this).i[e](...t);
  }, oe(e));
}
function Cd(e) {
  let t = Rd[e];
  if (!t) throw TypeError(Vs(e));
  return Bo(t, y(Vo), 1);
}
var wd = new WeakMap(),
  Y = wd.get.bind(wd),
  Td = wd.set.bind(wd),
  Ed = {
    era: je,
    eraYear: Ne,
    year: Fe,
    month: Pe,
    daysInMonth: Pe,
    daysInYear: Pe,
    inLeapYear: wc,
    monthsInYear: Pe,
  },
  Dd = { monthCode: B },
  Od = { day: Pe },
  kd = sd(
    Object.assign({}, Ed, Dd, Od, {
      dayOfWeek: Pe,
      dayOfYear: Pe,
      weekOfYear: Me,
      yearOfWeek: Ne,
      daysInWeek: Pe,
    }),
  ),
  Ad = sd({ ...Ed, ...Dd }),
  jd = sd({ ...Dd, ...Od }),
  Md = { calendarId: (e) => e.calendar },
  Nd = fe((e) => (t) => t[e], V.concat(`sign`)),
  Pd = fe((e, t) => (e) => e[Nc[t]], tc),
  Fd = { epochMilliseconds: rn, epochNanoseconds: an },
  [Id, X, Ld] = td(
    jl,
    wo,
    { ...Nd, blank: Nr },
    {
      with: (e, t) => X(no(e, t)),
      negated: (e) => X(Mr(e)),
      abs: (e) => X(jr(e)),
      add: (e, t, n) => X(kr(ld, K, G, 0, e, J(t), n)),
      subtract: (e, t, n) => X(kr(ld, K, G, 1, e, J(t), n)),
      round: (e, t) => X(Ar(ld, K, G, e, t)),
      total: (e, t) => sn(ld, K, G, e, t),
      toLocaleString(e, t, n) {
        return Intl.DurationFormat
          ? new Intl.DurationFormat(t, n).format(this)
          : Un(e);
      },
      toString: Un,
      toJSON: (e) => Un(e),
      valueOf: cd,
    },
    { from: (e) => X(J(e)), compare: (e, t, n) => Ci(ld, K, G, J(e), J(t), n) },
    Un,
  ),
  Rd = {
    Instant: Ju,
    PlainDateTime: Xu,
    PlainDate: Zu,
    PlainTime: Qu,
    PlainYearMonth: $u,
    PlainMonthDay: ed,
  },
  zd = Bo(Ju),
  Bd = Bo(Yu),
  Vd = Bo(Xu),
  Hd = Bo(Zu),
  Ud = Bo(Qu),
  Wd = Bo($u),
  Gd = Bo(ed),
  [Kd, qd] = td(
    Ol,
    Co,
    Pd,
    {
      with(e, t, n) {
        return qd(to(this, nd(t), n));
      },
      add: (e, t) => qd(fr(0, e, J(t))),
      subtract: (e, t) => qd(fr(1, e, J(t))),
      until: (e, t, n) => X(Vi(0, e, ud(t), n)),
      since: (e, t, n) => X(Vi(1, e, ud(t), n)),
      round: (e, t) => qd(hn(e, t)),
      equals: (e, t) => Ni(e, ud(t)),
      toLocaleString(e, t, n) {
        let [r, i] = Ud(t, n, e);
        return r.format(i);
      },
      toString: Hn,
      toJSON: (e) => Hn(e),
      valueOf: cd,
    },
    { from: (e, t) => qd(ud(e, t)), compare: (e, t) => Ei(ud(e), ud(t)) },
    Hn,
  ),
  [Jd, Yd] = td(
    Dl,
    x(yo, Ia),
    { ...Md, ...kd, ...Pd },
    {
      with: (e, t, n) => Yd(Za(K, e, nd(t), n)),
      withCalendar: (e, t) => Yd(Ko(e, od(t))),
      withPlainTime: (e, t) => Yd(Go(e, dd(t))),
      add: (e, t, n) => Yd(lr(K, 0, e, J(t), n)),
      subtract: (e, t, n) => Yd(lr(K, 1, e, J(t), n)),
      until: (e, t, n) => X(Li(K, 0, e, fd(t), n)),
      since: (e, t, n) => X(Li(K, 1, e, fd(t), n)),
      round: (e, t) => Yd(mn(e, t)),
      equals: (e, t) => ki(e, fd(t)),
      toZonedDateTime: (e, t, n) => Z(Ao(G, e, q(t), n)),
      toPlainDate: (e) => rf($t(e)),
      toPlainTime: (e) => qd(nn(e)),
      toLocaleString(e, t, n) {
        let [r, i] = Vd(t, n, e);
        return r.format(i);
      },
      toString: Rn,
      toJSON: (e) => Rn(e),
      valueOf: cd,
    },
    { from: (e, t) => Yd(fd(e, t)), compare: (e, t) => wi(fd(e), fd(t)) },
    Rn,
  ),
  [Xd, Zd, Qd] = td(
    Tl,
    x(So, Ia),
    { ...Md, ...jd },
    {
      with: (e, t, n) => Zd(eo(K, e, nd(t), n)),
      equals: (e, t) => Mi(e, pd(t)),
      toPlainDate(e, t) {
        return rf(Io(K, e, this, t));
      },
      toLocaleString(e, t, n) {
        let [r, i] = Gd(t, n, e);
        return r.format(i);
      },
      toString: Vn,
      toJSON: (e) => Vn(e),
      valueOf: cd,
    },
    { from: (e, t) => Zd(pd(e, t)) },
    Vn,
  ),
  [$d, ef, tf] = td(
    wl,
    x(xo, Ia),
    { ...Md, ...Ad },
    {
      with: (e, t, n) => ef($a(K, e, nd(t), n)),
      add: (e, t, n) => ef(dr(K, 0, e, J(t), n)),
      subtract: (e, t, n) => ef(dr(K, 1, e, J(t), n)),
      until: (e, t, n) => X(zi(K, 0, e, md(t), n)),
      since: (e, t, n) => X(zi(K, 1, e, md(t), n)),
      equals: (e, t) => ji(e, md(t)),
      toPlainDate(e, t) {
        return rf(Fo(K, e, this, t));
      },
      toLocaleString(e, t, n) {
        let [r, i] = Wd(t, n, e);
        return r.format(i);
      },
      toString: Bn,
      toJSON: (e) => Bn(e),
      valueOf: cd,
    },
    { from: (e, t) => ef(md(e, t)), compare: (e, t) => Ti(md(e), md(t)) },
    Bn,
  ),
  [nf, rf, af] = td(
    El,
    x(bo, Ia),
    { ...Md, ...kd },
    {
      with: (e, t, n) => rf(Qa(K, e, nd(t), n)),
      withCalendar: (e, t) => rf(Ko(e, od(t))),
      add: (e, t, n) => rf(ur(K, 0, e, J(t), n)),
      subtract: (e, t, n) => rf(ur(K, 1, e, J(t), n)),
      until: (e, t, n) => X(Ri(K, 0, e, hd(t), n)),
      since: (e, t, n) => X(Ri(K, 1, e, hd(t), n)),
      equals: (e, t) => Ai(e, hd(t)),
      toZonedDateTime(e, t) {
        return Z(jo(q, ud, G, e, v(t) ? t : { timeZone: t }));
      },
      toPlainDateTime: (e, t) => Yd(Mo(e, dd(t))),
      toPlainYearMonth(e) {
        return ef(No(K, e, this));
      },
      toPlainMonthDay(e) {
        return Zd(Po(K, e, this));
      },
      toLocaleString(e, t, n) {
        let [r, i] = Hd(t, n, e);
        return r.format(i);
      },
      toString: zn,
      toJSON: (e) => zn(e),
      valueOf: cd,
    },
    { from: (e, t) => rf(hd(e, t)), compare: (e, t) => Ti(hd(e), hd(t)) },
    zn,
  ),
  [of, Z] = td(
    kl,
    x(vo, Ia, _i),
    {
      ...Fd,
      ...Md,
      ..._d(kd),
      ..._d(Pd),
      offset: (e) => Zn(vd(e).offsetNanoseconds),
      offsetNanoseconds: (e) => vd(e).offsetNanoseconds,
      timeZoneId: (e) => e.timeZone,
      hoursInDay: (e) => gn(G, e),
    },
    {
      with: (e, t, n) => Z(Xa(K, G, e, nd(t), n)),
      withCalendar: (e, t) => Z(Ko(e, od(t))),
      withTimeZone: (e, t) => Z(qo(e, q(t))),
      withPlainTime: (e, t) => Z(Wo(G, e, dd(t))),
      add: (e, t, n) => Z(cr(K, G, 0, e, J(t), n)),
      subtract: (e, t, n) => Z(cr(K, G, 1, e, J(t), n)),
      until: (e, t, n) => X(j(Ii(K, G, 0, e, gd(t), n))),
      since: (e, t, n) => X(j(Ii(K, G, 1, e, gd(t), n))),
      round: (e, t) => Z(pn(G, e, t)),
      startOfDay: (e) => Z(_n(G, e)),
      equals: (e, t) => Oi(e, gd(t)),
      toInstant: (e) => cf(Eo(e)),
      toPlainDateTime: (e) => Yd(Do(G, e)),
      toPlainDate: (e) => rf(Oo(G, e)),
      toPlainTime: (e) => qd(ko(G, e)),
      toLocaleString(e, t, n = {}) {
        let [r, i] = Bd(t, n, e);
        return r.format(i);
      },
      toString: (e, t) => Ln(G, e, t),
      toJSON: (e) => Ln(G, e),
      valueOf: cd,
      getTimeZoneTransition(e, t) {
        let { timeZone: n, epochNanoseconds: r } = e,
          i = Bt(t),
          a = G(n).l(r, i);
        return a ? Z({ ...e, epochNanoseconds: a }) : null;
      },
    },
    { from: (e, t) => Z(gd(e, t)), compare: (e, t) => Si(gd(e), gd(t)) },
    (e) => Ln(G, e),
  ),
  [sf, cf, lf] = td(
    Al,
    _o,
    Fd,
    {
      add: (e, t) => cf(sr(0, e, J(t))),
      subtract: (e, t) => cf(sr(1, e, J(t))),
      until: (e, t, n) => X(Fi(0, e, yd(t), n)),
      since: (e, t, n) => X(Fi(1, e, yd(t), n)),
      round: (e, t) => cf(fn(e, t)),
      equals: (e, t) => Di(e, yd(t)),
      toZonedDateTimeISO: (e, t) => Z(To(e, q(t))),
      toLocaleString(e, t, n) {
        let [r, i] = zd(t, n, e);
        return r.format(i);
      },
      toString: (e, t) => In(q, G, e, t),
      toJSON: (e) => In(q, G, e),
      valueOf: cd,
    },
    {
      from: (e) => cf(yd(e)),
      fromEpochMilliseconds: (e) => cf(Lo(e)),
      fromEpochNanoseconds: (e) => cf(Ro(e)),
      compare: (e, t) => xi(yd(e), yd(t)),
    },
    (e) => In(q, G, e),
  ),
  uf = Object.defineProperties(
    {},
    {
      ...le(`Temporal.Now`),
      ...se({
        timeZoneId: () => Xo(),
        instant: () => cf(Qt(Yo())),
        zonedDateTimeISO: (e = Xo()) => Z(k(Yo(), q(e), z)),
        plainDateTimeISO: (e = Xo()) => Yd(A(Jo(G(q(e))), z)),
        plainDateISO: (e = Xo()) => rf($t(Jo(G(q(e))), z)),
        plainTimeISO: (e = Xo()) => qd(nn(Jo(G(q(e))))),
      }),
    },
  ),
  df = Object.defineProperties(
    {},
    {
      ...le(`Temporal`),
      ...se({
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
Object.create(Intl), se({ DateTimeFormat: ff });
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
  return a({
    queryKey: _f(e),
    queryFn: () =>
      c(
        `${f.STORE_BASE_URL}ajaxmanagereviewanomalies/${e}/`,
        `ajaxmanagereviewanomalies`,
        { sessionid: ne() },
      ),
    enabled: !!e,
  });
}
function yf(e) {
  let t = n();
  return i({
    mutationFn: async (t) => {
      let n = { sessionid: ne(), action: t.action };
      t.action != `add` && (n.id = t.strID),
        t.action != `remove` &&
          ((n.start_date = t.strStartDate),
          (n.end_date = t.strEndDate),
          (n.internal_comment = t.strInternalComment),
          (n.type = t.eType)),
        await c(
          `${f.STORE_BASE_URL}handlereviewanomaly/${e}/`,
          `handlereviewanomaly`,
          n,
        );
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
  $ = r(),
  Tf = `YYYY-MM-DD`,
  Ef = `Internal Comment`;
function Df(e) {
  try {
    return df.PlainDate.from(e), !0;
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
    [c, u] = Q.useState(t?.strInternalComment ?? ``),
    [f, h] = Q.useState(t?.eType ?? mf[0].eType),
    ee = Q.useMemo(
      () => mf.map((e) => ({ label: e.strLabel, data: e.eType })),
      [],
    ),
    te = Df(i),
    g = !o || Df(o),
    ne = te && g && c.trim().length > 0,
    _ = Q.useCallback((e) => a(e.target.value), []),
    ae = Q.useCallback((e) => s(e.target.value), []),
    v = Q.useCallback((e) => u(e.target.value), []),
    y = Q.useCallback((e) => h(e.data), []),
    oe = Q.useCallback(() => {
      ne &&
        (n({ strStartDate: i, strEndDate: o, strInternalComment: c, eType: f }),
        r());
    }, [ne, i, o, c, f, n, r]),
    se = Q.useId(),
    ce = l(se, { label: Ef });
  return (0, $.jsxs)(d, {
    className: Cf,
    strTitle: t
      ? `Update Review Anomaly Period`
      : `Add New Review Anomaly Period`,
    strOKButtonText: t ? `Update` : `Add`,
    bOKDisabled: !ne,
    onOK: oe,
    onCancel: r,
    closeModal: r,
    children: [
      (0, $.jsx)(ie, {
        label: `Start Date (UTC)`,
        description: Tf,
        value: i,
        onChange: _,
      }),
      (0, $.jsx)(ie, {
        label: `End Date (UTC)`,
        description: `${Tf}, or empty for no end`,
        value: o,
        onChange: ae,
      }),
      (0, $.jsx)(re, {
        label: `Type`,
        "aria-label": `Type`,
        controlled: !0,
        rgOptions: ee,
        selectedOption: f,
        onChange: y,
      }),
      (0, $.jsx)(p, {
        accessibilityId: se,
        label: Ef,
        childrenLayout: `below`,
        childrenContainerWidth: `max`,
        children: (0, $.jsx)(m, {
          className: wf,
          ...ce,
          value: c,
          onChange: v,
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
  return (0, $.jsxs)($.Fragment, { children: [h(t - n), ` [`, h(t), `]`] });
}
function Mf(e) {
  let { period: t } = e;
  return t.strPersonaName
    ? t.strProfileURL
      ? (0, $.jsx)(te, { href: t.strProfileURL, children: t.strPersonaName })
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
        children: (0, $.jsx)(s, { text: t.strInternalComment }),
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
            (0, $.jsx)(ee, { size: `1`, onClick: i, children: `Edit` }),
            (0, $.jsx)(ee, {
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
    [a, s] = Q.useState(void 0),
    [c, l] = Q.useState(void 0),
    [f, p] = Q.useState(``),
    m = Q.useCallback(() => s(null), []),
    h = Q.useCallback((e) => s(e), []),
    te = Q.useCallback((e) => l(e), []),
    ne = Q.useCallback(() => s(void 0), []),
    re = Q.useCallback(() => l(void 0), []),
    ie = Q.useCallback(() => p(``), []),
    _ = Q.useCallback((e, t) => {
      p(
        `Failed to ${e} the review anomaly period. ${t instanceof Error ? t.message : String(t)}`,
      );
    }, []),
    ae = Q.useCallback(
      (e) => {
        let t = a,
          n = t
            ? { action: `update`, strID: t.strID, ...e }
            : { action: `add`, ...e };
        i.mutate(n, { onError: (e) => _(t ? `update` : `add`, e) });
      },
      [a, i, _],
    ),
    v = Q.useCallback(() => {
      c &&
        (i.mutate(
          { action: `remove`, strID: c.strID },
          { onError: (e) => _(`remove`, e) },
        ),
        l(void 0));
    }, [c, i, _]),
    y = r.data?.rgPeriods;
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
          r.isPending && (0, $.jsx)(o, {}),
          r.isError &&
            (0, $.jsx)(`div`, {
              className: `mDfX6flvFLo-`,
              children: `Could not load this app's review anomaly periods.`,
            }),
          y &&
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
                      children: y.map((e) =>
                        (0, $.jsx)(
                          Nf,
                          { period: e, onEdit: h, onRemove: te },
                          e.strID,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `_75yHV1ez91I-`,
                  children: (0, $.jsx)(ee, {
                    variant: `vibrant`,
                    onClick: m,
                    children: `Add New Review Bomb Period`,
                  }),
                }),
              ],
            }),
        ],
      }),
      (0, $.jsx)(g, {
        active: a !== void 0,
        children: (0, $.jsx)(kf, {
          period: a ?? void 0,
          onSubmit: ae,
          onClose: ne,
        }),
      }),
      (0, $.jsx)(g, {
        active: !!c,
        children: (0, $.jsx)(d, {
          bDestructiveWarning: !0,
          strTitle: `Remove Review Anomaly Period?`,
          strDescription: `Are you sure you want to remove this review anomaly period? ID: ${c?.strID ?? ``}`,
          strOKButtonText: `Remove`,
          closeModal: re,
          onOK: v,
          onCancel: re,
        }),
      }),
      (0, $.jsx)(g, {
        active: !!f,
        children: (0, $.jsx)(u, {
          strTitle: `Error`,
          strDescription: f,
          closeModal: ie,
          onOK: ie,
        }),
      }),
    ],
  });
}
export { Pf as ReviewBombAdminDialog };
