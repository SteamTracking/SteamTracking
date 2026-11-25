/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
function e(e) {
  var t = [...arguments].slice(1);
  throw Error(
    typeof e == `number`
      ? `[MobX] minified error nr: ` +
          e +
          (t.length ? ` ` + t.map(String).join(`,`) : ``) +
          `. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts`
      : `[MobX] ` + e,
  );
}
var t = {};
function n() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof window < `u`
      ? window
      : typeof global < `u`
        ? global
        : typeof self < `u`
          ? self
          : t;
}
var r = Object.assign,
  i = Object.getOwnPropertyDescriptor,
  a = Object.defineProperty,
  o = Object.prototype,
  s = [];
Object.freeze(s);
var c = {};
Object.freeze(c);
var l = typeof Proxy < `u`,
  u = Object.toString();
function d() {
  l || e(`Proxy not available`);
}
function f(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var p = function () {};
function m(e) {
  return typeof e == `function`;
}
function h(e) {
  switch (typeof e) {
    case `string`:
    case `symbol`:
    case `number`:
      return !0;
  }
  return !1;
}
function ee(e) {
  return typeof e == `object` && !!e;
}
function g(e) {
  if (!ee(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n.toString() === u;
}
function te(e) {
  var t = e?.constructor;
  return t
    ? t.name === `GeneratorFunction` || t.displayName === `GeneratorFunction`
    : !1;
}
function ne(e, t, n) {
  a(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function re(e, t, n) {
  a(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function _(e, t) {
  var n = `isMobX` + e;
  return (
    (t.prototype[n] = !0),
    function (e) {
      return ee(e) && e[n] === !0;
    }
  );
}
function ie(e) {
  return e != null && Object.prototype.toString.call(e) === `[object Map]`;
}
function ae(e) {
  var t = Object.getPrototypeOf(e),
    n = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(n) === null;
}
function v(e) {
  return e != null && Object.prototype.toString.call(e) === `[object Set]`;
}
var oe = Object.getOwnPropertySymbols !== void 0;
function se(e) {
  var t = Object.keys(e);
  if (!oe) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (t) {
          return o.propertyIsEnumerable.call(e, t);
        }),
      )
    : t;
}
var ce =
  typeof Reflect < `u` && Reflect.ownKeys
    ? Reflect.ownKeys
    : oe
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e),
          );
        }
      : Object.getOwnPropertyNames;
function le(e) {
  return e === null ? null : typeof e == `object` ? `` + e : e;
}
function y(e, t) {
  return o.hasOwnProperty.call(e, t);
}
var ue =
  Object.getOwnPropertyDescriptors ||
  function (e) {
    var t = {};
    return (
      ce(e).forEach(function (n) {
        t[n] = i(e, n);
      }),
      t
    );
  };
function b(e, t) {
  return !!(e & t);
}
function x(e, t, n) {
  return (n ? (e |= t) : (e &= ~t), e);
}
function de(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fe(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, ve(r.key), r));
  }
}
function pe(e, t, n) {
  return (
    t && fe(e.prototype, t),
    n && fe(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function me(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n) return (n = n.call(e)).next.bind(n);
  if (
    Array.isArray(e) ||
    (n = ye(e)) ||
    (t && e && typeof e.length == `number`)
  ) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S() {
  return (
    (S = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    S.apply(null, arguments)
  );
}
function he(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ge(e, t));
}
function ge(e, t) {
  return (
    (ge = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    ge(e, t)
  );
}
function _e(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ve(e) {
  var t = _e(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ye(e, t) {
  if (e) {
    if (typeof e == `string`) return de(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? de(e, t)
          : void 0
    );
  }
}
var C = Symbol(`mobx-stored-annotations`);
function w(e) {
  function t(t, n) {
    if (Se(n)) return e.decorate_20223_(t, n);
    be(t, n, e);
  }
  return Object.assign(t, e);
}
function be(e, t, n) {
  (y(e, C) || ne(e, C, S({}, e[C])), Fe(n) || (e[C][t] = n));
}
function xe(e) {
  return (y(e, C) || ne(e, C, S({}, e[C])), e[C]);
}
function Se(e) {
  return typeof e == `object` && typeof e.kind == `string`;
}
var T = Symbol(`mobx administration`),
  E = (function () {
    function e(e) {
      (e === void 0 && (e = `Atom`),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = M.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = e));
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (e) {
            return e();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (e) {
            return e();
          });
      }),
      (t.reportObserved = function () {
        return sn(this);
      }),
      (t.reportChanged = function () {
        (I(), cn(this), L());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      pe(e, [
        {
          key: `isBeingObserved`,
          get: function () {
            return b(this.flags_, e.isBeingObservedMask_);
          },
          set: function (t) {
            this.flags_ = x(this.flags_, e.isBeingObservedMask_, t);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return b(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (t) {
            this.flags_ = x(this.flags_, e.isPendingUnobservationMask_, t);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!b(this.flags_, e.diffValueMask_);
          },
          set: function (t) {
            this.flags_ = x(this.flags_, e.diffValueMask_, t === 1);
          },
        },
      ])
    );
  })();
((E.isBeingObservedMask_ = 1),
  (E.isPendingUnobservationMask_ = 2),
  (E.diffValueMask_ = 4));
var Ce = _(`Atom`, E);
function we(e, t, n) {
  (t === void 0 && (t = p), n === void 0 && (n = p));
  var r = new E(e);
  return (t !== p && zn(r, t), n !== p && Bn(r, n), r);
}
function Te(e, t) {
  return e === t;
}
function Ee(e, t) {
  return di(e, t);
}
function De(e, t) {
  return di(e, t, 1);
}
function Oe(e, t) {
  return Object.is
    ? Object.is(e, t)
    : e === t
      ? e !== 0 || 1 / e == 1 / t
      : e !== e && t !== t;
}
var ke = { identity: Te, structural: Ee, default: Oe, shallow: De };
function Ae(e, t, n) {
  return sr(e)
    ? e
    : Array.isArray(e)
      ? D.array(e, { name: n })
      : g(e)
        ? D.object(e, void 0, { name: n })
        : ie(e)
          ? D.map(e, { name: n })
          : v(e)
            ? D.set(e, { name: n })
            : typeof e == `function` && !jn(e) && !nr(e)
              ? te(e)
                ? er(e)
                : kn(n, e)
              : e;
}
function je(e, t, n) {
  if (e == null || Q(e) || Fr(e) || X(e) || Z(e)) return e;
  if (Array.isArray(e)) return D.array(e, { name: n, deep: !1 });
  if (g(e)) return D.object(e, void 0, { name: n, deep: !1 });
  if (ie(e)) return D.map(e, { name: n, deep: !1 });
  if (v(e)) return D.set(e, { name: n, deep: !1 });
}
function Me(e) {
  return e;
}
function Ne(e, t) {
  return di(e, t) ? t : e;
}
var Pe = `override`;
function Fe(e) {
  return e.annotationType_ === Pe;
}
function Ie(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Le,
    extend_: Re,
    decorate_20223_: ze,
  };
}
function Le(e, t, n, r) {
  var i;
  return (i = this.options_) != null && i.bound
    ? this.extend_(e, t, n, !1) === null
      ? 0
      : 1
    : r === e.target_
      ? this.extend_(e, t, n, !1) === null
        ? 0
        : 2
      : jn(n.value)
        ? 1
        : (a(r, t, Ve(e, this, t, n, !1)), 2);
}
function Re(e, t, n, r) {
  var i = Ve(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function ze(t, n) {
  var r = n.kind,
    i = n.name,
    a = n.addInitializer,
    o = this,
    s = function (e) {
      return O(
        o.options_?.name ?? i.toString(),
        e,
        o.options_?.autoAction ?? !1,
      );
    };
  if (r == `field`)
    return function (e) {
      var t,
        n = e;
      return (
        jn(n) || (n = s(n)),
        (t = o.options_) != null &&
          t.bound &&
          ((n = n.bind(this)), (n.isMobxAction = !0)),
        n
      );
    };
  if (r == `method`) {
    var c;
    return (
      jn(t) || (t = s(t)),
      (c = this.options_) != null &&
        c.bound &&
        a(function () {
          var e = this,
            t = e[i].bind(e);
          ((t.isMobxAction = !0), (e[i] = t));
        }),
      t
    );
  }
  e(
    `Cannot apply '` +
      o.annotationType_ +
      `' to '` +
      String(i) +
      `' (kind: ` +
      r +
      `):` +
      (`
'` +
        o.annotationType_ +
        `' can only be used on properties with a function value.`),
  );
}
function Be(e, t, n, r) {
  (t.annotationType_, r.value);
}
function Ve(e, t, n, r, i) {
  var a, o;
  (i === void 0 && (i = F.safeDescriptors), Be(e, t, n, r));
  var s = r.value;
  return (
    (a = t.options_) != null && a.bound && (s = s.bind(e.proxy_ ?? e.target_)),
    {
      value: O(
        t.options_?.name ?? n.toString(),
        s,
        t.options_?.autoAction ?? !1,
        (o = t.options_) != null && o.bound ? (e.proxy_ ?? e.target_) : void 0,
      ),
      configurable: !i || e.isPlainObject_,
      enumerable: !1,
      writable: !i,
    }
  );
}
function He(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Ue,
    extend_: We,
    decorate_20223_: Ge,
  };
}
function Ue(e, t, n, r) {
  var i;
  return r === e.target_
    ? this.extend_(e, t, n, !1) === null
      ? 0
      : 2
    : (i = this.options_) != null &&
        i.bound &&
        (!y(e.target_, t) || !nr(e.target_[t])) &&
        this.extend_(e, t, n, !1) === null
      ? 0
      : nr(n.value)
        ? 1
        : (a(r, t, qe(e, this, t, n, !1, !1)), 2);
}
function We(e, t, n, r) {
  var i = qe(e, this, t, n, this.options_?.bound);
  return e.defineProperty_(t, i, r);
}
function Ge(e, t) {
  var n,
    r = t.name,
    i = t.addInitializer;
  return (
    nr(e) || (e = er(e)),
    (n = this.options_) != null &&
      n.bound &&
      i(function () {
        var e = this,
          t = e[r].bind(e);
        ((t.isMobXFlow = !0), (e[r] = t));
      }),
    e
  );
}
function Ke(e, t, n, r) {
  (t.annotationType_, r.value);
}
function qe(e, t, n, r, i, a) {
  (a === void 0 && (a = F.safeDescriptors), Ke(e, t, n, r));
  var o = r.value;
  return (
    nr(o) || (o = er(o)),
    i && ((o = o.bind(e.proxy_ ?? e.target_)), (o.isMobXFlow = !0)),
    {
      value: o,
      configurable: !a || e.isPlainObject_,
      enumerable: !1,
      writable: !a,
    }
  );
}
function Je(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Ye,
    extend_: Xe,
    decorate_20223_: Ze,
  };
}
function Ye(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function Xe(e, t, n, r) {
  return (
    Qe(e, this, t, n),
    e.defineComputedProperty_(
      t,
      S({}, this.options_, { get: n.get, set: n.set }),
      r,
    )
  );
}
function Ze(e, t) {
  var n = this,
    r = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var t = qr(this)[T],
        i = S({}, n.options_, { get: e, context: this });
      ((i.name ||= `ObservableObject.` + r.toString()),
        t.values_.set(r, new A(i)));
    }),
    function () {
      return this[T].getObservablePropValue_(r);
    }
  );
}
function Qe(e, t, n, r) {
  (t.annotationType_, r.get);
}
function $e(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: et,
    extend_: tt,
    decorate_20223_: nt,
  };
}
function et(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function tt(e, t, n, r) {
  return (
    rt(e, this, t, n),
    e.defineObservableProperty_(t, n.value, this.options_?.enhancer ?? Ae, r)
  );
}
function nt(e, t) {
  var n = this,
    r = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(e, t) {
    var r = qr(e)[T],
      o = new k(
        t,
        n.options_?.enhancer ?? Ae,
        `ObservableObject.` + i.toString(),
        !1,
      );
    (r.values_.set(i, o), a.add(e));
  }
  if (r == `accessor`)
    return {
      get: function () {
        return (
          a.has(this) || o(this, e.get.call(this)),
          this[T].getObservablePropValue_(i)
        );
      },
      set: function (e) {
        return (
          a.has(this) || o(this, e), this[T].setObservablePropValue_(i, e)
        );
      },
      init: function (e) {
        return (a.has(this) || o(this, e), e);
      },
    };
}
function rt(e, t, n, r) {
  t.annotationType_;
}
var it = `true`,
  at = ot();
function ot(e) {
  return {
    annotationType_: it,
    options_: e,
    make_: st,
    extend_: ct,
    decorate_20223_: lt,
  };
}
function st(e, t, n, r) {
  var i;
  if (n.get) return kt.make_(e, t, n, r);
  if (n.set) {
    var o = jn(n.set) ? n.set : O(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: !F.safeDescriptors || e.isPlainObject_,
          set: o,
        }) === null
        ? 0
        : 2
      : (a(r, t, { configurable: !0, set: o }), 2);
  }
  if (r !== e.target_ && typeof n.value == `function`) {
    var s;
    if (te(n.value)) {
      var c;
      return ((c = this.options_) != null && c.autoBind ? er.bound : er).make_(
        e,
        t,
        n,
        r,
      );
    }
    return ((s = this.options_) != null && s.autoBind ? kn.bound : kn).make_(
      e,
      t,
      n,
      r,
    );
  }
  var l = this.options_?.deep === !1 ? D.ref : D;
  return (
    typeof n.value == `function` &&
      (i = this.options_) != null &&
      i.autoBind &&
      (n.value = n.value.bind(e.proxy_ ?? e.target_)),
    l.make_(e, t, n, r)
  );
}
function ct(e, t, n, r) {
  var i;
  return n.get
    ? kt.extend_(e, t, n, r)
    : n.set
      ? e.defineProperty_(
          t,
          {
            configurable: !F.safeDescriptors || e.isPlainObject_,
            set: O(t.toString(), n.set),
          },
          r,
        )
      : (typeof n.value == `function` &&
          (i = this.options_) != null &&
          i.autoBind &&
          (n.value = n.value.bind(e.proxy_ ?? e.target_)),
        (this.options_?.deep === !1 ? D.ref : D).extend_(e, t, n, r));
}
function lt(t, n) {
  e(`'` + this.annotationType_ + `' cannot be used as a decorator`);
}
var ut = `observable`,
  dt = `observable.ref`,
  ft = `observable.shallow`,
  pt = `observable.struct`,
  mt = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(mt);
function ht(e) {
  return e || mt;
}
var gt = $e(ut),
  _t = $e(dt, { enhancer: Me }),
  vt = $e(ft, { enhancer: je }),
  yt = $e(pt, { enhancer: Ne }),
  bt = w(gt);
function xt(e) {
  return e.deep === !0 ? Ae : e.deep === !1 ? Me : Ct(e.defaultDecorator);
}
function St(e) {
  return e ? (e.defaultDecorator ?? ot(e)) : void 0;
}
function Ct(e) {
  return e ? (e.options_?.enhancer ?? Ae) : Ae;
}
function wt(e, t, n) {
  if (Se(t)) return gt.decorate_20223_(e, t);
  if (h(t)) be(e, t, gt);
  else
    return sr(e)
      ? e
      : g(e)
        ? D.object(e, t, n)
        : Array.isArray(e)
          ? D.array(e, t)
          : ie(e)
            ? D.map(e, t)
            : v(e)
              ? D.set(e, t)
              : typeof e == `object` && e
                ? e
                : D.box(e, t);
}
r(wt, bt);
var D = r(wt, {
    box: function (e, t) {
      var n = ht(t);
      return new k(e, xt(n), n.name, !0, n.equals);
    },
    array: function (e, t) {
      var n = ht(t);
      return (F.useProxies === !1 || n.proxy === !1 ? oi : jr)(
        e,
        xt(n),
        n.name,
      );
    },
    map: function (e, t) {
      var n = ht(t);
      return new Rr(e, xt(n), n.name);
    },
    set: function (e, t) {
      var n = ht(t);
      return new Hr(e, xt(n), n.name);
    },
    object: function (e, t, n) {
      return $(function () {
        return Kn(
          F.useProxies === !1 || n?.proxy === !1 ? qr({}, n) : xr({}, n),
          e,
          t,
        );
      });
    },
    ref: w(_t),
    shallow: w(vt),
    deep: bt,
    struct: w(yt),
  }),
  Tt = `computed`,
  Et = `computed.struct`,
  Dt = Je(Tt),
  Ot = Je(Et, { equals: ke.structural }),
  kt = function (e, t) {
    if (Se(t)) return Dt.decorate_20223_(e, t);
    if (h(t)) return be(e, t, Dt);
    if (g(e)) return w(Je(Tt, e));
    var n = g(t) ? t : {};
    return ((n.get = e), (n.name ||= e.name || ``), new A(n));
  };
(Object.assign(kt, Dt), (kt.struct = w(Ot)));
var At = 0,
  jt = 1,
  Mt = i(function () {}, `name`)?.configurable ?? !1,
  Nt = { value: `action`, configurable: !0, writable: !1, enumerable: !1 };
function O(e, t, n, r) {
  n === void 0 && (n = !1);
  function i() {
    return Pt(e, n, t, r || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    Mt && ((Nt.value = e), a(i, `name`, Nt)),
    i
  );
}
function Pt(e, t, n, r, i) {
  var a = Ft(e, t, r, i);
  try {
    return n.apply(r, i);
  } catch (e) {
    throw ((a.error_ = e), e);
  } finally {
    It(a);
  }
}
function Ft(e, t, n, r) {
  var i = !1,
    a = 0,
    o = F.trackingDerivation,
    s = !t || !o;
  I();
  var c = F.allowStateChanges;
  s && (N(), (c = Rt(!0)));
  var l = Xt(!0),
    u = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: l,
      notifySpy_: i,
      startTime_: a,
      actionId_: jt++,
      parentActionId_: At,
    };
  return ((At = u.actionId_), u);
}
function It(t) {
  (At !== t.actionId_ && e(30),
    (At = t.parentActionId_),
    t.error_ !== void 0 && (F.suppressReactionErrors = !0),
    zt(t.prevAllowStateChanges_),
    Zt(t.prevAllowStateReads_),
    L(),
    t.runAsAction_ && P(t.prevDerivation_),
    (F.suppressReactionErrors = !1));
}
function Lt(e, t) {
  var n = Rt(e);
  try {
    return t();
  } finally {
    zt(n);
  }
}
function Rt(e) {
  var t = F.allowStateChanges;
  return ((F.allowStateChanges = e), t);
}
function zt(e) {
  F.allowStateChanges = e;
}
var k = (function (e) {
    function t(t, n, r, i, a) {
      var o;
      return (
        r === void 0 && (r = `ObservableValue`),
        i === void 0 && (i = !0),
        a === void 0 && (a = ke.default),
        (o = e.call(this, r) || this),
        (o.enhancer = void 0),
        (o.name_ = void 0),
        (o.equals = void 0),
        (o.hasUnreportedChange_ = !1),
        (o.interceptors_ = void 0),
        (o.changeListeners_ = void 0),
        (o.value_ = void 0),
        (o.dehancer = void 0),
        (o.enhancer = n),
        (o.name_ = r),
        (o.equals = a),
        (o.value_ = n(t, void 0, r)),
        o
      );
    }
    he(t, e);
    var n = t.prototype;
    return (
      (n.dehanceValue = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (n.set = function (e) {
        (this.value_,
          (e = this.prepareNewValue_(e)),
          e !== F.UNCHANGED && this.setNewValue_(e));
      }),
      (n.prepareNewValue_ = function (e) {
        if (V(this)) {
          var t = H(this, { object: this, type: G, newValue: e });
          if (!t) return F.UNCHANGED;
          e = t.newValue;
        }
        return (
          (e = this.enhancer(e, this.value_, this.name_)),
          this.equals(this.value_, e) ? F.UNCHANGED : e
        );
      }),
      (n.setNewValue_ = function (e) {
        var t = this.value_;
        ((this.value_ = e),
          this.reportChanged(),
          U(this) &&
            W(this, { type: G, object: this, newValue: e, oldValue: t }));
      }),
      (n.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (n.intercept_ = function (e) {
        return Sr(this, e);
      }),
      (n.observe_ = function (e, t) {
        return (
          t &&
            e({
              observableKind: `value`,
              debugObjectName: this.name_,
              object: this,
              type: G,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Cr(this, e)
        );
      }),
      (n.raw = function () {
        return this.value_;
      }),
      (n.toJSON = function () {
        return this.get();
      }),
      (n.toString = function () {
        return this.name_ + `[` + this.value_ + `]`;
      }),
      (n.valueOf = function () {
        return le(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(E),
  Bt = _(`ObservableValue`, k),
  A = (function () {
    function t(t) {
      ((this.dependenciesState_ = M.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = M.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Ht(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Vt.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        t.get || e(31),
        (this.derivation = t.get),
        (this.name_ = t.name || `ComputedValue`),
        t.set && (this.setter_ = O(`ComputedValue-setter`, t.set)),
        (this.equals_ =
          t.equals ||
          (t.compareStructural || t.struct ? ke.structural : ke.default)),
        (this.scope_ = t.context),
        (this.requiresReaction_ = t.requiresReaction),
        (this.keepAlive_ = !!t.keepAlive));
    }
    var n = t.prototype;
    return (
      (n.onBecomeStale_ = function () {
        un(this);
      }),
      (n.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (e) {
            return e();
          });
      }),
      (n.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (e) {
            return e();
          });
      }),
      (n.get = function () {
        if (
          (this.isComputing && e(32, this.name_, this.derivation),
          F.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Wt(this) &&
            (this.warnAboutUntrackedRead_(),
            I(),
            (this.value_ = this.computeValue_(!1)),
            L());
        else if ((sn(this), Wt(this))) {
          var t = F.trackingContext;
          (this.keepAlive_ && !t && (F.trackingContext = this),
            this.trackAndCompute() && ln(this),
            (F.trackingContext = t));
        }
        var n = this.value_;
        if (Ut(n)) throw n.cause;
        return n;
      }),
      (n.set = function (t) {
        if (this.setter_) {
          (this.isRunningSetter && e(33, this.name_),
            (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, t);
          } finally {
            this.isRunningSetter = !1;
          }
        } else e(34, this.name_);
      }),
      (n.trackAndCompute = function () {
        var e = this.value_,
          t = this.dependenciesState_ === M.NOT_TRACKING_,
          n = this.computeValue_(!0),
          r = t || Ut(e) || Ut(n) || !this.equals_(e, n);
        return (r && (this.value_ = n), r);
      }),
      (n.computeValue_ = function (e) {
        this.isComputing = !0;
        var t = Rt(!1),
          n;
        if (e) n = Kt(this, this.derivation, this.scope_);
        else if (F.disableErrorBoundaries === !0)
          n = this.derivation.call(this.scope_);
        else
          try {
            n = this.derivation.call(this.scope_);
          } catch (e) {
            n = new Ht(e);
          }
        return (zt(t), (this.isComputing = !1), n);
      }),
      (n.suspend_ = function () {
        this.keepAlive_ || (Jt(this), (this.value_ = void 0));
      }),
      (n.observe_ = function (e, t) {
        var n = this,
          r = !0,
          i = void 0;
        return Mn(function () {
          var a = n.get();
          if (!r || t) {
            var o = N();
            (e({
              observableKind: `computed`,
              debugObjectName: n.name_,
              type: G,
              object: n,
              newValue: a,
              oldValue: i,
            }),
              P(o));
          }
          ((r = !1), (i = a));
        });
      }),
      (n.warnAboutUntrackedRead_ = function () {}),
      (n.toString = function () {
        return this.name_ + `[` + this.derivation.toString() + `]`;
      }),
      (n.valueOf = function () {
        return le(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      pe(t, [
        {
          key: `isComputing`,
          get: function () {
            return b(this.flags_, t.isComputingMask_);
          },
          set: function (e) {
            this.flags_ = x(this.flags_, t.isComputingMask_, e);
          },
        },
        {
          key: `isRunningSetter`,
          get: function () {
            return b(this.flags_, t.isRunningSetterMask_);
          },
          set: function (e) {
            this.flags_ = x(this.flags_, t.isRunningSetterMask_, e);
          },
        },
        {
          key: `isBeingObserved`,
          get: function () {
            return b(this.flags_, t.isBeingObservedMask_);
          },
          set: function (e) {
            this.flags_ = x(this.flags_, t.isBeingObservedMask_, e);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return b(this.flags_, t.isPendingUnobservationMask_);
          },
          set: function (e) {
            this.flags_ = x(this.flags_, t.isPendingUnobservationMask_, e);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!b(this.flags_, t.diffValueMask_);
          },
          set: function (e) {
            this.flags_ = x(this.flags_, t.diffValueMask_, e === 1);
          },
        },
      ])
    );
  })();
((A.isComputingMask_ = 1),
  (A.isRunningSetterMask_ = 2),
  (A.isBeingObservedMask_ = 4),
  (A.isPendingUnobservationMask_ = 8),
  (A.diffValueMask_ = 16));
var j = _(`ComputedValue`, A),
  M;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = `NOT_TRACKING_`),
    (e[(e.UP_TO_DATE_ = 0)] = `UP_TO_DATE_`),
    (e[(e.POSSIBLY_STALE_ = 1)] = `POSSIBLY_STALE_`),
    (e[(e.STALE_ = 2)] = `STALE_`));
})((M ||= {}));
var Vt;
(function (e) {
  ((e[(e.NONE = 0)] = `NONE`),
    (e[(e.LOG = 1)] = `LOG`),
    (e[(e.BREAK = 2)] = `BREAK`));
})((Vt ||= {}));
var Ht = function (e) {
  ((this.cause = void 0), (this.cause = e));
};
function Ut(e) {
  return e instanceof Ht;
}
function Wt(e) {
  switch (e.dependenciesState_) {
    case M.UP_TO_DATE_:
      return !1;
    case M.NOT_TRACKING_:
    case M.STALE_:
      return !0;
    case M.POSSIBLY_STALE_:
      for (
        var t = Xt(!0), n = N(), r = e.observing_, i = r.length, a = 0;
        a < i;
        a++
      ) {
        var o = r[a];
        if (j(o)) {
          if (F.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (P(n), Zt(t), !0);
            }
          if (e.dependenciesState_ === M.STALE_) return (P(n), Zt(t), !0);
        }
      }
      return (Qt(e), P(n), Zt(t), !1);
  }
}
function Gt() {
  return F.trackingDerivation !== null;
}
function Kt(e, t, n) {
  var r = Xt(!0);
  (Qt(e),
    (e.newObserving_ = Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++F.runId));
  var i = F.trackingDerivation;
  ((F.trackingDerivation = e), F.inBatch++);
  var a;
  if (F.disableErrorBoundaries === !0) a = t.call(n);
  else
    try {
      a = t.call(n);
    } catch (e) {
      a = new Ht(e);
    }
  return (F.inBatch--, (F.trackingDerivation = i), qt(e), Zt(r), a);
}
function qt(e) {
  for (
    var t = e.observing_,
      n = (e.observing_ = e.newObserving_),
      r = M.UP_TO_DATE_,
      i = 0,
      a = e.unboundDepsCount_,
      o = 0;
    o < a;
    o++
  ) {
    var s = n[o];
    (s.diffValue === 0 && ((s.diffValue = 1), i !== o && (n[i] = s), i++),
      s.dependenciesState_ > r && (r = s.dependenciesState_));
  }
  for (n.length = i, e.newObserving_ = null, a = t.length; a--;) {
    var c = t[a];
    (c.diffValue === 0 && an(c, e), (c.diffValue = 0));
  }
  for (; i--;) {
    var l = n[i];
    l.diffValue === 1 && ((l.diffValue = 0), rn(l, e));
  }
  r !== M.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function Jt(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--;) an(t[n], e);
  e.dependenciesState_ = M.NOT_TRACKING_;
}
function Yt(e) {
  var t = N();
  try {
    return e();
  } finally {
    P(t);
  }
}
function N() {
  var e = F.trackingDerivation;
  return ((F.trackingDerivation = null), e);
}
function P(e) {
  F.trackingDerivation = e;
}
function Xt(e) {
  var t = F.allowStateReads;
  return ((F.allowStateReads = e), t);
}
function Zt(e) {
  F.allowStateReads = e;
}
function Qt(e) {
  if (e.dependenciesState_ !== M.UP_TO_DATE_) {
    e.dependenciesState_ = M.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--;)
      t[n].lowestObserverState_ = M.UP_TO_DATE_;
  }
}
var $t = function () {
    ((this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0));
  },
  en = !0,
  tn = !1,
  F = (function () {
    var t = n();
    return (
      t.__mobxInstanceCount > 0 && !t.__mobxGlobals && (en = !1),
      t.__mobxGlobals &&
        t.__mobxGlobals.version !== new $t().version &&
        (en = !1),
      en
        ? t.__mobxGlobals
          ? ((t.__mobxInstanceCount += 1),
            t.__mobxGlobals.UNCHANGED || (t.__mobxGlobals.UNCHANGED = {}),
            t.__mobxGlobals)
          : ((t.__mobxInstanceCount = 1), (t.__mobxGlobals = new $t()))
        : (setTimeout(function () {
            tn || e(35);
          }, 1),
          new $t())
    );
  })();
function nn() {
  if (
    ((F.pendingReactions.length || F.inBatch || F.isRunningReactions) && e(36),
    (tn = !0),
    en)
  ) {
    var t = n();
    (--t.__mobxInstanceCount === 0 && (t.__mobxGlobals = void 0),
      (F = new $t()));
  }
}
function rn(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function an(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && on(e));
}
function on(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), F.pendingUnobservations.push(e));
}
function I() {
  F.inBatch++;
}
function L() {
  if (--F.inBatch === 0) {
    pn();
    for (var e = F.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      ((n.isPendingUnobservation = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
          n instanceof A && n.suspend_()));
    }
    F.pendingUnobservations = [];
  }
}
function sn(e) {
  var t = F.trackingDerivation;
  return t === null
    ? (e.observers_.size === 0 && F.inBatch > 0 && on(e), !1)
    : (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved &&
          F.trackingContext &&
          ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved);
}
function cn(e) {
  e.lowestObserverState_ !== M.STALE_ &&
    ((e.lowestObserverState_ = M.STALE_),
    e.observers_.forEach(function (e) {
      (e.dependenciesState_ === M.UP_TO_DATE_ && e.onBecomeStale_(),
        (e.dependenciesState_ = M.STALE_));
    }));
}
function ln(e) {
  e.lowestObserverState_ !== M.STALE_ &&
    ((e.lowestObserverState_ = M.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === M.POSSIBLY_STALE_
        ? (t.dependenciesState_ = M.STALE_)
        : t.dependenciesState_ === M.UP_TO_DATE_ &&
          (e.lowestObserverState_ = M.UP_TO_DATE_);
    }));
}
function un(e) {
  e.lowestObserverState_ === M.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = M.POSSIBLY_STALE_),
    e.observers_.forEach(function (e) {
      e.dependenciesState_ === M.UP_TO_DATE_ &&
        ((e.dependenciesState_ = M.POSSIBLY_STALE_), e.onBecomeStale_());
    }));
}
var R = (function () {
  function e(e, t, n, r) {
    (e === void 0 && (e = `Reaction`),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = M.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Vt.NONE),
      (this.name_ = e),
      (this.onInvalidate_ = t),
      (this.errorHandler_ = n),
      (this.requiresObservable_ = r));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled ||
        ((this.isScheduled = !0), F.pendingReactions.push(this), pn());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (I(), (this.isScheduled = !1));
        var e = F.trackingContext;
        if (((F.trackingContext = this), Wt(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }
        ((F.trackingContext = e), L());
      }
    }),
    (t.track = function (e) {
      if (!this.isDisposed) {
        (I(), (this.isRunning = !0));
        var t = F.trackingContext;
        F.trackingContext = this;
        var n = Kt(this, e, void 0);
        ((F.trackingContext = t),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Jt(this),
          Ut(n) && this.reportExceptionInDerivation_(n.cause),
          L());
      }
    }),
    (t.reportExceptionInDerivation_ = function (e) {
      var t = this;
      if (this.errorHandler_) this.errorHandler_(e, this);
      else {
        if (F.disableErrorBoundaries) throw e;
        var n = `[mobx] uncaught error in '` + this + `'`;
        (F.suppressReactionErrors || console.error(n, e),
          F.globalReactionErrorHandlers.forEach(function (n) {
            return n(e, t);
          }));
      }
    }),
    (t.dispose = function () {
      this.isDisposed ||
        ((this.isDisposed = !0), this.isRunning || (I(), Jt(this), L()));
    }),
    (t.getDisposer_ = function (e) {
      var t = this,
        n = function n() {
          (t.dispose(),
            e == null ||
              e.removeEventListener == null ||
              e.removeEventListener(`abort`, n));
        };
      return (
        e == null ||
          e.addEventListener == null ||
          e.addEventListener(`abort`, n),
        (n[T] = this),
        `dispose` in Symbol &&
          typeof Symbol.dispose == `symbol` &&
          (n[Symbol.dispose] = n),
        n
      );
    }),
    (t.toString = function () {
      return `Reaction[` + this.name_ + `]`;
    }),
    (t.trace = function (e) {
      e === void 0 && (e = !1);
    }),
    pe(e, [
      {
        key: `isDisposed`,
        get: function () {
          return b(this.flags_, e.isDisposedMask_);
        },
        set: function (t) {
          this.flags_ = x(this.flags_, e.isDisposedMask_, t);
        },
      },
      {
        key: `isScheduled`,
        get: function () {
          return b(this.flags_, e.isScheduledMask_);
        },
        set: function (t) {
          this.flags_ = x(this.flags_, e.isScheduledMask_, t);
        },
      },
      {
        key: `isTrackPending`,
        get: function () {
          return b(this.flags_, e.isTrackPendingMask_);
        },
        set: function (t) {
          this.flags_ = x(this.flags_, e.isTrackPendingMask_, t);
        },
      },
      {
        key: `isRunning`,
        get: function () {
          return b(this.flags_, e.isRunningMask_);
        },
        set: function (t) {
          this.flags_ = x(this.flags_, e.isRunningMask_, t);
        },
      },
      {
        key: `diffValue`,
        get: function () {
          return +!!b(this.flags_, e.diffValueMask_);
        },
        set: function (t) {
          this.flags_ = x(this.flags_, e.diffValueMask_, t === 1);
        },
      },
    ])
  );
})();
((R.isDisposedMask_ = 1),
  (R.isScheduledMask_ = 2),
  (R.isTrackPendingMask_ = 4),
  (R.isRunningMask_ = 8),
  (R.diffValueMask_ = 16));
var dn = 100,
  fn = function (e) {
    return e();
  };
function pn() {
  F.inBatch > 0 || F.isRunningReactions || fn(mn);
}
function mn() {
  F.isRunningReactions = !0;
  for (var e = F.pendingReactions, t = 0; e.length > 0;) {
    ++t === dn &&
      (console.error(`[mobx] cycle in reaction: ` + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
      n[r].runReaction_();
  }
  F.isRunningReactions = !1;
}
var hn = _(`Reaction`, R);
function gn(e) {
  var t = fn;
  fn = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function _n() {
  return !1;
}
function vn(e) {
  return (
    console.warn(`[mobx.spy] Is a no-op in production builds`), function () {}
  );
}
var yn = `action`,
  bn = `action.bound`,
  xn = `autoAction`,
  Sn = `autoAction.bound`,
  Cn = `<unnamed action>`,
  wn = Ie(yn),
  Tn = Ie(bn, { bound: !0 }),
  En = Ie(xn, { autoAction: !0 }),
  Dn = Ie(Sn, { autoAction: !0, bound: !0 });
function On(e) {
  return function (t, n) {
    if (m(t)) return O(t.name || Cn, t, e);
    if (m(n)) return O(t, n, e);
    if (Se(n)) return (e ? En : wn).decorate_20223_(t, n);
    if (h(n)) return be(t, n, e ? En : wn);
    if (h(t)) return w(Ie(e ? xn : yn, { name: t, autoAction: e }));
  };
}
var z = On(!1);
Object.assign(z, wn);
var kn = On(!0);
(Object.assign(kn, En), (z.bound = w(Tn)), (kn.bound = w(Dn)));
function An(e) {
  return Pt(e.name || Cn, !1, e, this, void 0);
}
function jn(e) {
  return m(e) && e.isMobxAction === !0;
}
function Mn(e, t) {
  var n;
  t === void 0 && (t = c);
  var r = t?.name ?? `Autorun`,
    i = !t.scheduler && !t.delay,
    a;
  if (i)
    a = new R(
      r,
      function () {
        this.track(l);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var o = Pn(t),
      s = !1;
    a = new R(
      r,
      function () {
        s ||
          ((s = !0),
          o(function () {
            ((s = !1), a.isDisposed || a.track(l));
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function l() {
    e(a);
  }
  return (
    ((n = t) != null && (n = n.signal) != null && n.aborted) || a.schedule_(),
    a.getDisposer_(t?.signal)
  );
}
var Nn = function (e) {
  return e();
};
function Pn(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Nn;
}
function Fn(e, t, n) {
  var r;
  n === void 0 && (n = c);
  var i = n.name ?? `Reaction`,
    a = z(i, n.onError ? In(n.onError, t) : t),
    o = !n.scheduler && !n.delay,
    s = Pn(n),
    l = !0,
    u = !1,
    d,
    f = n.compareStructural ? ke.structural : n.equals || ke.default,
    p = new R(
      i,
      function () {
        l || o ? m() : u || ((u = !0), s(m));
      },
      n.onError,
      n.requiresObservable,
    );
  function m() {
    if (((u = !1), !p.isDisposed)) {
      var t = !1,
        r = d;
      (p.track(function () {
        var n = Lt(!1, function () {
          return e(p);
        });
        ((t = l || !f(d, n)), (d = n));
      }),
        ((l && n.fireImmediately) || (!l && t)) && a(d, r, p),
        (l = !1));
    }
  }
  return (
    ((r = n) != null && (r = r.signal) != null && r.aborted) || p.schedule_(),
    p.getDisposer_(n?.signal)
  );
}
function In(e, t) {
  return function () {
    try {
      return t.apply(this, arguments);
    } catch (t) {
      e.call(this, t);
    }
  };
}
var Ln = `onBO`,
  Rn = `onBUO`;
function zn(e, t, n) {
  return Vn(Ln, e, t, n);
}
function Bn(e, t, n) {
  return Vn(Rn, e, t, n);
}
function Vn(e, t, n, r) {
  var i = typeof r == `function` ? si(t, n) : si(t),
    a = m(r) ? r : n,
    o = e + `L`;
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var e = i[o];
      e && (e.delete(a), e.size === 0 && delete i[o]);
    }
  );
}
var Hn = `never`,
  Un = `always`,
  Wn = `observed`;
function Gn(e) {
  e.isolateGlobalState === !0 && nn();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 &&
      (F.useProxies = t === Un || (t !== Hn && typeof Proxy < `u`)),
    t === `ifavailable` && (F.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === Un ? Un : n === Wn;
    ((F.enforceActions = r), (F.allowStateChanges = r !== !0 && r !== Un));
  }
  ([
    `computedRequiresReaction`,
    `reactionRequiresObservable`,
    `observableRequiresReaction`,
    `disableErrorBoundaries`,
    `safeDescriptors`,
  ].forEach(function (t) {
    t in e && (F[t] = !!e[t]);
  }),
    (F.allowStateReads = !F.observableRequiresReaction),
    e.reactionScheduler && gn(e.reactionScheduler));
}
function Kn(e, t, n, r) {
  var i = ue(t);
  return (
    $(function () {
      var t = qr(e, r)[T];
      ce(i).forEach(function (e) {
        t.extend_(e, i[e], n && e in n ? n[e] : !0);
      });
    }),
    e
  );
}
function qn(e, t) {
  return Jn(si(e, t));
}
function Jn(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ &&
      e.observing_.length > 0 &&
      (t.dependencies = Yn(e.observing_).map(Jn)),
    t
  );
}
function Yn(e) {
  return Array.from(new Set(e));
}
var Xn = 0;
function Zn() {
  this.message = `FLOW_CANCELLED`;
}
Zn.prototype = Object.create(Error.prototype);
var Qn = He(`flow`),
  $n = He(`flow.bound`, { bound: !0 }),
  er = Object.assign(function (e, t) {
    if (Se(t)) return Qn.decorate_20223_(e, t);
    if (h(t)) return be(e, t, Qn);
    var n = e,
      r = n.name || `<unnamed flow>`,
      i = function () {
        var e = this,
          t = arguments,
          i = ++Xn,
          a = z(r + ` - runid: ` + i + ` - init`, n).apply(e, t),
          o,
          s = void 0,
          c = new Promise(function (e, t) {
            var n = 0;
            o = t;
            function c(e) {
              s = void 0;
              var o;
              try {
                o = z(r + ` - runid: ` + i + ` - yield ` + n++, a.next).call(
                  a,
                  e,
                );
              } catch (e) {
                return t(e);
              }
              u(o);
            }
            function l(e) {
              s = void 0;
              var o;
              try {
                o = z(r + ` - runid: ` + i + ` - yield ` + n++, a.throw).call(
                  a,
                  e,
                );
              } catch (e) {
                return t(e);
              }
              u(o);
            }
            function u(n) {
              if (m(n?.then)) n.then(u, t);
              else
                return n.done
                  ? e(n.value)
                  : ((s = Promise.resolve(n.value)), s.then(c, l));
            }
            c(void 0);
          });
        return (
          (c.cancel = z(r + ` - runid: ` + i + ` - cancel`, function () {
            try {
              s && tr(s);
              var e = a.return(void 0),
                t = Promise.resolve(e.value);
              (t.then(p, p), tr(t), o(new Zn()));
            } catch (e) {
              o(e);
            }
          })),
          c
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, Qn);
er.bound = w($n);
function tr(e) {
  m(e.cancel) && e.cancel();
}
function nr(e) {
  return e?.isMobXFlow === !0;
}
function rr(e, t) {
  return t === void 0
    ? j(e)
    : Q(e) === !1 || !e[T].values_.has(t)
      ? !1
      : j(si(e, t));
}
function ir(e) {
  return rr(e);
}
function ar(e, t) {
  return rr(e, t);
}
function or(e, t) {
  return e
    ? t === void 0
      ? Q(e) || !!e[T] || Ce(e) || hn(e) || j(e)
      : Q(e)
        ? e[T].values_.has(t)
        : !1
    : !1;
}
function sr(e) {
  return or(e);
}
function cr(t) {
  if (Q(t)) return t[T].keys_();
  if (X(t) || Z(t)) return Array.from(t.keys());
  if (Fr(t))
    return t.map(function (e, t) {
      return t;
    });
  e(5);
}
function lr(t) {
  if (Q(t)) return t[T].ownKeys_();
  e(38);
}
function ur(e, t, n, r) {
  return m(n) ? fr(e, t, n, r) : dr(e, t, n);
}
function dr(e, t, n) {
  return ci(e).observe_(t, n);
}
function fr(e, t, n, r) {
  return ci(e, t).observe_(n, r);
}
function pr(e, t, n) {
  return (e.set(t, n), n);
}
function mr(e, t) {
  if (typeof e != `object` || !e || e instanceof Date || !sr(e)) return e;
  if (Bt(e) || j(e)) return mr(e.get(), t);
  if (t.has(e)) return t.get(e);
  if (Fr(e)) {
    var n = pr(t, e, Array(e.length));
    return (
      e.forEach(function (e, r) {
        n[r] = mr(e, t);
      }),
      n
    );
  }
  if (Z(e)) {
    var r = pr(t, e, new Set());
    return (
      e.forEach(function (e) {
        r.add(mr(e, t));
      }),
      r
    );
  }
  if (X(e)) {
    var i = pr(t, e, new Map());
    return (
      e.forEach(function (e, n) {
        i.set(n, mr(e, t));
      }),
      i
    );
  }
  var a = pr(t, e, {});
  return (
    lr(e).forEach(function (n) {
      o.propertyIsEnumerable.call(e, n) && (a[n] = mr(e[n], t));
    }),
    a
  );
}
function hr(e, t) {
  return mr(e, new Map());
}
function B(e, t) {
  (t === void 0 && (t = void 0), I());
  try {
    return e.apply(t);
  } finally {
    L();
  }
}
function gr(e, t, n) {
  return arguments.length === 1 || (t && typeof t == `object`)
    ? vr(e, t)
    : _r(e, t, n || {});
}
function _r(e, t, n) {
  var r;
  if (typeof n.timeout == `number`) {
    var i = Error(`WHEN_TIMEOUT`);
    r = setTimeout(function () {
      if (!o[T].isDisposed) {
        if ((o(), n.onError)) n.onError(i);
        else throw i;
      }
    }, n.timeout);
  }
  n.name = `When`;
  var a = O(`When-effect`, t),
    o = Mn(function (t) {
      Lt(!1, e) && (t.dispose(), r && clearTimeout(r), a());
    }, n);
  return o;
}
function vr(e, t) {
  var n;
  if (t != null && (n = t.signal) != null && n.aborted)
    return Object.assign(Promise.reject(Error(`WHEN_ABORTED`)), {
      cancel: function () {
        return null;
      },
    });
  var r,
    i,
    a = new Promise(function (n, a) {
      var o,
        s = _r(e, n, S({}, t, { onError: a }));
      ((r = function () {
        (s(), a(Error(`WHEN_CANCELLED`)));
      }),
        (i = function () {
          (s(), a(Error(`WHEN_ABORTED`)));
        }),
        t == null ||
          (o = t.signal) == null ||
          o.addEventListener == null ||
          o.addEventListener(`abort`, i));
    }).finally(function () {
      var e;
      return t == null ||
        (e = t.signal) == null ||
        e.removeEventListener == null
        ? void 0
        : e.removeEventListener(`abort`, i);
    });
  return ((a.cancel = r), a);
}
function yr(e) {
  return e[T];
}
var br = {
  has: function (e, t) {
    return yr(e).has_(t);
  },
  get: function (e, t) {
    return yr(e).get_(t);
  },
  set: function (e, t, n) {
    return h(t) ? (yr(e).set_(t, n, !0) ?? !0) : !1;
  },
  deleteProperty: function (e, t) {
    return h(t) ? (yr(e).delete_(t, !0) ?? !0) : !1;
  },
  defineProperty: function (e, t, n) {
    return yr(e).defineProperty_(t, n) ?? !0;
  },
  ownKeys: function (e) {
    return yr(e).ownKeys_();
  },
  preventExtensions: function (t) {
    e(13);
  },
};
function xr(e, t) {
  var n;
  return (
    d(), (e = qr(e, t)), (n = e[T]).proxy_ ?? (n.proxy_ = new Proxy(e, br))
  );
}
function V(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Sr(e, t) {
  var n = (e.interceptors_ ||= []);
  return (
    n.push(t),
    f(function () {
      var e = n.indexOf(t);
      e !== -1 && n.splice(e, 1);
    })
  );
}
function H(t, n) {
  var r = N();
  try {
    for (
      var i = [].concat(t.interceptors_ || []), a = 0, o = i.length;
      a < o && ((n = i[a](n)), n && !n.type && e(14), n);
      a++
    );
    return n;
  } finally {
    P(r);
  }
}
function U(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Cr(e, t) {
  var n = (e.changeListeners_ ||= []);
  return (
    n.push(t),
    f(function () {
      var e = n.indexOf(t);
      e !== -1 && n.splice(e, 1);
    })
  );
}
function W(e, t) {
  var n = N(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, a = r.length; i < a; i++) r[i](t);
    P(n);
  }
}
function wr(e, t, n) {
  return (
    $(function () {
      var r = qr(e, n)[T];
      ((t ??= xe(e)),
        ce(t).forEach(function (e) {
          return r.make_(e, t[e]);
        }));
    }),
    e
  );
}
var Tr = Symbol(`mobx-keys`);
function Er(e, t, n) {
  return g(e)
    ? Kn(e, e, t, n)
    : ($(function () {
        var r = qr(e, n)[T];
        if (!e[Tr]) {
          var i = Object.getPrototypeOf(e),
            a = new Set([].concat(ce(e), ce(i)));
          (a.delete(`constructor`), a.delete(T), ne(i, Tr, a));
        }
        e[Tr].forEach(function (e) {
          return r.make_(e, t && e in t ? t[e] : !0);
        });
      }),
      e);
}
var Dr = `splice`,
  G = `update`,
  Or = 1e4,
  kr = {
    get: function (e, t) {
      var n = e[T];
      return t === T
        ? n
        : t === `length`
          ? n.getArrayLength_()
          : typeof t == `string` && !isNaN(t)
            ? n.get_(parseInt(t))
            : y(Mr, t)
              ? Mr[t]
              : e[t];
    },
    set: function (e, t, n) {
      var r = e[T];
      return (
        t === `length` && r.setArrayLength_(n),
        typeof t == `symbol` || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
        !0
      );
    },
    preventExtensions: function () {
      e(15);
    },
  },
  Ar = (function () {
    function t(e, t, n, r) {
      (e === void 0 && (e = `ObservableArray`),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = n),
        (this.legacyMode_ = r),
        (this.atom_ = new E(e)),
        (this.enhancer_ = function (e, n) {
          return t(e, n, `ObservableArray[..]`);
        }));
    }
    var n = t.prototype;
    return (
      (n.dehanceValue_ = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (n.dehanceValues_ = function (e) {
        return this.dehancer !== void 0 && e.length > 0
          ? e.map(this.dehancer)
          : e;
      }),
      (n.intercept_ = function (e) {
        return Sr(this, e);
      }),
      (n.observe_ = function (e, t) {
        return (
          t === void 0 && (t = !1),
          t &&
            e({
              observableKind: `array`,
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: `splice`,
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          Cr(this, e)
        );
      }),
      (n.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (n.setArrayLength_ = function (t) {
        (typeof t != `number` || isNaN(t) || t < 0) && e(`Out of range: ` + t);
        var n = this.values_.length;
        if (t !== n) {
          if (t > n) {
            for (var r = Array(t - n), i = 0; i < t - n; i++) r[i] = void 0;
            this.spliceWithArray_(n, 0, r);
          } else this.spliceWithArray_(t, n - t);
        }
      }),
      (n.updateArrayLength_ = function (t, n) {
        (t !== this.lastKnownLength_ && e(16),
          (this.lastKnownLength_ += n),
          this.legacyMode_ && n > 0 && ai(t + n + 1));
      }),
      (n.spliceWithArray_ = function (e, t, n) {
        var r = this;
        this.atom_;
        var i = this.values_.length;
        if (
          (e === void 0
            ? (e = 0)
            : e > i
              ? (e = i)
              : e < 0 && (e = Math.max(0, i + e)),
          (t =
            arguments.length === 1
              ? i - e
              : t == null
                ? 0
                : Math.max(0, Math.min(t, i - e))),
          n === void 0 && (n = s),
          V(this))
        ) {
          var a = H(this, {
            object: this.proxy_,
            type: Dr,
            index: e,
            removedCount: t,
            added: n,
          });
          if (!a) return s;
          ((t = a.removedCount), (n = a.added));
        }
        if (
          ((n =
            n.length === 0
              ? n
              : n.map(function (e) {
                  return r.enhancer_(e, void 0);
                })),
          this.legacyMode_)
        ) {
          var o = n.length - t;
          this.updateArrayLength_(i, o);
        }
        var c = this.spliceItemsIntoValues_(e, t, n);
        return (
          (t !== 0 || n.length !== 0) && this.notifyArraySplice_(e, n, c),
          this.dehanceValues_(c)
        );
      }),
      (n.spliceItemsIntoValues_ = function (e, t, n) {
        if (n.length < Or) {
          var r;
          return (r = this.values_).splice.apply(r, [e, t].concat(n));
        }
        var i = this.values_.slice(e, e + t),
          a = this.values_.slice(e + t);
        this.values_.length += n.length - t;
        for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
        for (var s = 0; s < a.length; s++)
          this.values_[e + n.length + s] = a[s];
        return i;
      }),
      (n.notifyArrayChildUpdate_ = function (e, t, n) {
        var r = !this.owned_ && _n(),
          i = U(this),
          a =
            i || r
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  type: G,
                  debugObjectName: this.atom_.name_,
                  index: e,
                  newValue: t,
                  oldValue: n,
                }
              : null;
        (this.atom_.reportChanged(), i && W(this, a));
      }),
      (n.notifyArraySplice_ = function (e, t, n) {
        var r = !this.owned_ && _n(),
          i = U(this),
          a =
            i || r
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Dr,
                  index: e,
                  removed: n,
                  added: t,
                  removedCount: n.length,
                  addedCount: t.length,
                }
              : null;
        (this.atom_.reportChanged(), i && W(this, a));
      }),
      (n.get_ = function (e) {
        if (this.legacyMode_ && e >= this.values_.length)
          console.warn(`[mobx] Out of bounds read: ` + e);
        else
          return (
            this.atom_.reportObserved(), this.dehanceValue_(this.values_[e])
          );
      }),
      (n.set_ = function (t, n) {
        var r = this.values_;
        if (
          (this.legacyMode_ && t > r.length && e(17, t, r.length), t < r.length)
        ) {
          this.atom_;
          var i = r[t];
          if (V(this)) {
            var a = H(this, {
              type: G,
              object: this.proxy_,
              index: t,
              newValue: n,
            });
            if (!a) return;
            n = a.newValue;
          }
          ((n = this.enhancer_(n, i)),
            n !== i && ((r[t] = n), this.notifyArrayChildUpdate_(t, n, i)));
        } else {
          for (var o = Array(t + 1 - r.length), s = 0; s < o.length - 1; s++)
            o[s] = void 0;
          ((o[o.length - 1] = n), this.spliceWithArray_(r.length, 0, o));
        }
      }),
      t
    );
  })();
function jr(e, t, n, r) {
  return (
    n === void 0 && (n = `ObservableArray`),
    r === void 0 && (r = !1),
    d(),
    $(function () {
      var i = new Ar(n, t, r, !1);
      re(i.values_, T, i);
      var a = new Proxy(i.values_, kr);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var Mr = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (e) {
    var t = this[T];
    return t.spliceWithArray_(0, t.values_.length, e);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (e, t) {
    var n = [...arguments].slice(2),
      r = this[T];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return r.spliceWithArray_(e);
      case 2:
        return r.spliceWithArray_(e, t);
    }
    return r.spliceWithArray_(e, t, n);
  },
  spliceWithArray: function (e, t, n) {
    return this[T].spliceWithArray_(e, t, n);
  },
  push: function () {
    var e = this[T],
      t = [...arguments];
    return (e.spliceWithArray_(e.values_.length, 0, t), e.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[T].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    var e = this[T],
      t = [...arguments];
    return (e.spliceWithArray_(0, 0, t), e.values_.length);
  },
  reverse: function () {
    return (
      F.trackingDerivation && e(37, `reverse`),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    F.trackingDerivation && e(37, `sort`);
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (e) {
    var t = this[T],
      n = t.dehanceValues_(t.values_).indexOf(e);
    return n > -1 && (this.splice(n, 1), !0);
  },
};
(K(`at`, q),
  K(`concat`, q),
  K(`flat`, q),
  K(`includes`, q),
  K(`indexOf`, q),
  K(`join`, q),
  K(`lastIndexOf`, q),
  K(`slice`, q),
  K(`toString`, q),
  K(`toLocaleString`, q),
  K(`toSorted`, q),
  K(`toSpliced`, q),
  K(`with`, q),
  K(`every`, J),
  K(`filter`, J),
  K(`find`, J),
  K(`findIndex`, J),
  K(`findLast`, J),
  K(`findLastIndex`, J),
  K(`flatMap`, J),
  K(`forEach`, J),
  K(`map`, J),
  K(`some`, J),
  K(`toReversed`, J),
  K(`reduce`, Nr),
  K(`reduceRight`, Nr));
function K(e, t) {
  typeof Array.prototype[e] == `function` && (Mr[e] = t(e));
}
function q(e) {
  return function () {
    var t = this[T];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function J(e) {
  return function (t, n) {
    var r = this,
      i = this[T];
    return (
      i.atom_.reportObserved(),
      i.dehanceValues_(i.values_)[e](function (e, i) {
        return t.call(n, e, i, r);
      })
    );
  };
}
function Nr(e) {
  return function () {
    var t = this,
      n = this[T];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (e, n, r) {
        return i(e, n, r, t);
      }),
      r[e].apply(r, arguments)
    );
  };
}
var Pr = _(`ObservableArrayAdministration`, Ar);
function Fr(e) {
  return ee(e) && Pr(e[T]);
}
var Ir = {},
  Y = `add`,
  Lr = `delete`,
  Rr = (function () {
    function t(t, n, r) {
      var i = this;
      (n === void 0 && (n = Ae),
        r === void 0 && (r = `ObservableMap`),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[T] = Ir),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = r),
        m(Map) || e(18),
        $(function () {
          ((i.keysAtom_ = we(`ObservableMap.keys()`)),
            (i.data_ = new Map()),
            (i.hasMap_ = new Map()),
            t && i.merge(t));
        }));
    }
    var n = t.prototype;
    return (
      (n.has_ = function (e) {
        return this.data_.has(e);
      }),
      (n.has = function (e) {
        var t = this;
        if (!F.trackingDerivation) return this.has_(e);
        var n = this.hasMap_.get(e);
        if (!n) {
          var r = (n = new k(this.has_(e), Me, `ObservableMap.key?`, !1));
          (this.hasMap_.set(e, r),
            Bn(r, function () {
              return t.hasMap_.delete(e);
            }));
        }
        return n.get();
      }),
      (n.set = function (e, t) {
        var n = this.has_(e);
        if (V(this)) {
          var r = H(this, {
            type: n ? G : Y,
            object: this,
            newValue: t,
            name: e,
          });
          if (!r) return this;
          t = r.newValue;
        }
        return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
      }),
      (n.delete = function (e) {
        var t = this;
        if (
          (this.keysAtom_,
          V(this) && !H(this, { type: Lr, object: this, name: e }))
        )
          return !1;
        if (this.has_(e)) {
          var n = _n(),
            r = U(this),
            i =
              r || n
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: Lr,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e,
                  }
                : null;
          return (
            B(function () {
              var n;
              (t.keysAtom_.reportChanged(),
                (n = t.hasMap_.get(e)) == null || n.setNewValue_(!1),
                t.data_.get(e).setNewValue_(void 0),
                t.data_.delete(e));
            }),
            r && W(this, i),
            !0
          );
        }
        return !1;
      }),
      (n.updateValue_ = function (e, t) {
        var n = this.data_.get(e);
        if (((t = n.prepareNewValue_(t)), t !== F.UNCHANGED)) {
          var r = _n(),
            i = U(this),
            a =
              i || r
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: G,
                    object: this,
                    oldValue: n.value_,
                    name: e,
                    newValue: t,
                  }
                : null;
          (n.setNewValue_(t), i && W(this, a));
        }
      }),
      (n.addValue_ = function (e, t) {
        var n = this;
        (this.keysAtom_,
          B(function () {
            var r,
              i = new k(t, n.enhancer_, `ObservableMap.key`, !1);
            (n.data_.set(e, i),
              (t = i.value_),
              (r = n.hasMap_.get(e)) == null || r.setNewValue_(!0),
              n.keysAtom_.reportChanged());
          }));
        var r = _n(),
          i = U(this),
          a =
            i || r
              ? {
                  observableKind: `map`,
                  debugObjectName: this.name_,
                  type: Y,
                  object: this,
                  name: e,
                  newValue: t,
                }
              : null;
        i && W(this, a);
      }),
      (n.get = function (e) {
        return this.has(e)
          ? this.dehanceValue_(this.data_.get(e).get())
          : this.dehanceValue_(void 0);
      }),
      (n.dehanceValue_ = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (n.keys = function () {
        return (this.keysAtom_.reportObserved(), this.data_.keys());
      }),
      (n.values = function () {
        var e = this,
          t = this.keys();
        return zr({
          next: function () {
            var n = t.next(),
              r = n.done,
              i = n.value;
            return { done: r, value: r ? void 0 : e.get(i) };
          },
        });
      }),
      (n.entries = function () {
        var e = this,
          t = this.keys();
        return zr({
          next: function () {
            var n = t.next(),
              r = n.done,
              i = n.value;
            return { done: r, value: r ? void 0 : [i, e.get(i)] };
          },
        });
      }),
      (n[Symbol.iterator] = function () {
        return this.entries();
      }),
      (n.forEach = function (e, t) {
        for (var n = me(this), r; !(r = n()).done;) {
          var i = r.value,
            a = i[0],
            o = i[1];
          e.call(t, o, a, this);
        }
      }),
      (n.merge = function (t) {
        var n = this;
        return (
          X(t) && (t = new Map(t)),
          B(function () {
            g(t)
              ? se(t).forEach(function (e) {
                  return n.set(e, t[e]);
                })
              : Array.isArray(t)
                ? t.forEach(function (e) {
                    var t = e[0],
                      r = e[1];
                    return n.set(t, r);
                  })
                : ie(t)
                  ? (ae(t) || e(19, t),
                    t.forEach(function (e, t) {
                      return n.set(t, e);
                    }))
                  : t != null && e(20, t);
          }),
          this
        );
      }),
      (n.clear = function () {
        var e = this;
        B(function () {
          Yt(function () {
            for (var t = me(e.keys()), n; !(n = t()).done;) {
              var r = n.value;
              e.delete(r);
            }
          });
        });
      }),
      (n.replace = function (e) {
        var t = this;
        return (
          B(function () {
            for (
              var n = Br(e), r = new Map(), i = !1, a = me(t.data_.keys()), o;
              !(o = a()).done;
            ) {
              var s = o.value;
              if (!n.has(s)) {
                if (t.delete(s)) i = !0;
                else {
                  var c = t.data_.get(s);
                  r.set(s, c);
                }
              }
            }
            for (var l = me(n.entries()), u; !(u = l()).done;) {
              var d = u.value,
                f = d[0],
                p = d[1],
                m = t.data_.has(f);
              if ((t.set(f, p), t.data_.has(f))) {
                var h = t.data_.get(f);
                (r.set(f, h), m || (i = !0));
              }
            }
            if (!i) {
              if (t.data_.size !== r.size) t.keysAtom_.reportChanged();
              else
                for (
                  var ee = t.data_.keys(),
                    g = r.keys(),
                    te = ee.next(),
                    ne = g.next();
                  !te.done;
                ) {
                  if (te.value !== ne.value) {
                    t.keysAtom_.reportChanged();
                    break;
                  }
                  ((te = ee.next()), (ne = g.next()));
                }
            }
            t.data_ = r;
          }),
          this
        );
      }),
      (n.toString = function () {
        return `[object ObservableMap]`;
      }),
      (n.toJSON = function () {
        return Array.from(this);
      }),
      (n.observe_ = function (e, t) {
        return Cr(this, e);
      }),
      (n.intercept_ = function (e) {
        return Sr(this, e);
      }),
      pe(t, [
        {
          key: `size`,
          get: function () {
            return (this.keysAtom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return `Map`;
          },
        },
      ])
    );
  })(),
  X = _(`ObservableMap`, Rr);
function zr(e) {
  return ((e[Symbol.toStringTag] = `MapIterator`), hi(e));
}
function Br(t) {
  if (ie(t) || X(t)) return t;
  if (Array.isArray(t)) return new Map(t);
  if (g(t)) {
    var n = new Map();
    for (var r in t) n.set(r, t[r]);
    return n;
  }
  return e(21, t);
}
var Vr = {},
  Hr = (function () {
    function t(t, n, r) {
      var i = this;
      (n === void 0 && (n = Ae),
        r === void 0 && (r = `ObservableSet`),
        (this.name_ = void 0),
        (this[T] = Vr),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = r),
        m(Set) || e(22),
        (this.enhancer_ = function (e, t) {
          return n(e, t, r);
        }),
        $(function () {
          ((i.atom_ = we(i.name_)), t && i.replace(t));
        }));
    }
    var n = t.prototype;
    return (
      (n.dehanceValue_ = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (n.clear = function () {
        var e = this;
        B(function () {
          Yt(function () {
            for (var t = me(e.data_.values()), n; !(n = t()).done;) {
              var r = n.value;
              e.delete(r);
            }
          });
        });
      }),
      (n.forEach = function (e, t) {
        for (var n = me(this), r; !(r = n()).done;) {
          var i = r.value;
          e.call(t, i, i, this);
        }
      }),
      (n.add = function (e) {
        var t = this;
        if ((this.atom_, V(this))) {
          var n = H(this, { type: Y, object: this, newValue: e });
          if (!n) return this;
          e = n.newValue;
        }
        if (!this.has(e)) {
          B(function () {
            (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
          });
          var r = U(this),
            i = r
              ? {
                  observableKind: `set`,
                  debugObjectName: this.name_,
                  type: Y,
                  object: this,
                  newValue: e,
                }
              : null;
          r && W(this, i);
        }
        return this;
      }),
      (n.delete = function (e) {
        var t = this;
        if (V(this) && !H(this, { type: Lr, object: this, oldValue: e }))
          return !1;
        if (this.has(e)) {
          var n = U(this),
            r = n
              ? {
                  observableKind: `set`,
                  debugObjectName: this.name_,
                  type: Lr,
                  object: this,
                  oldValue: e,
                }
              : null;
          return (
            B(function () {
              (t.atom_.reportChanged(), t.data_.delete(e));
            }),
            n && W(this, r),
            !0
          );
        }
        return !1;
      }),
      (n.has = function (e) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e))
        );
      }),
      (n.entries = function () {
        var e = this.values();
        return Ur({
          next: function () {
            var t = e.next(),
              n = t.value,
              r = t.done;
            return r ? { value: void 0, done: r } : { value: [n, n], done: r };
          },
        });
      }),
      (n.keys = function () {
        return this.values();
      }),
      (n.values = function () {
        this.atom_.reportObserved();
        var e = this,
          t = this.data_.values();
        return Ur({
          next: function () {
            var n = t.next(),
              r = n.value,
              i = n.done;
            return i
              ? { value: void 0, done: i }
              : { value: e.dehanceValue_(r), done: i };
          },
        });
      }),
      (n.intersection = function (e) {
        return v(e) && !Z(e)
          ? e.intersection(this)
          : new Set(this).intersection(e);
      }),
      (n.union = function (e) {
        return v(e) && !Z(e) ? e.union(this) : new Set(this).union(e);
      }),
      (n.difference = function (e) {
        return new Set(this).difference(e);
      }),
      (n.symmetricDifference = function (e) {
        return v(e) && !Z(e)
          ? e.symmetricDifference(this)
          : new Set(this).symmetricDifference(e);
      }),
      (n.isSubsetOf = function (e) {
        return new Set(this).isSubsetOf(e);
      }),
      (n.isSupersetOf = function (e) {
        return new Set(this).isSupersetOf(e);
      }),
      (n.isDisjointFrom = function (e) {
        return v(e) && !Z(e)
          ? e.isDisjointFrom(this)
          : new Set(this).isDisjointFrom(e);
      }),
      (n.replace = function (t) {
        var n = this;
        return (
          Z(t) && (t = new Set(t)),
          B(function () {
            Array.isArray(t) || v(t)
              ? (n.clear(),
                t.forEach(function (e) {
                  return n.add(e);
                }))
              : t != null && e(`Cannot initialize set from ` + t);
          }),
          this
        );
      }),
      (n.observe_ = function (e, t) {
        return Cr(this, e);
      }),
      (n.intercept_ = function (e) {
        return Sr(this, e);
      }),
      (n.toJSON = function () {
        return Array.from(this);
      }),
      (n.toString = function () {
        return `[object ObservableSet]`;
      }),
      (n[Symbol.iterator] = function () {
        return this.values();
      }),
      pe(t, [
        {
          key: `size`,
          get: function () {
            return (this.atom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return `Set`;
          },
        },
      ])
    );
  })(),
  Z = _(`ObservableSet`, Hr);
function Ur(e) {
  return ((e[Symbol.toStringTag] = `SetIterator`), hi(e));
}
var Wr = Object.create(null),
  Gr = `remove`,
  Kr = (function () {
    function t(e, t, n, r) {
      (t === void 0 && (t = new Map()),
        r === void 0 && (r = at),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = e),
        (this.values_ = t),
        (this.name_ = n),
        (this.defaultAnnotation_ = r),
        (this.keysAtom_ = new E(`ObservableObject.keys`)),
        (this.isPlainObject_ = g(this.target_)));
    }
    var n = t.prototype;
    return (
      (n.getObservablePropValue_ = function (e) {
        return this.values_.get(e).get();
      }),
      (n.setObservablePropValue_ = function (e, t) {
        var n = this.values_.get(e);
        if (n instanceof A) return (n.set(t), !0);
        if (V(this)) {
          var r = H(this, {
            type: G,
            object: this.proxy_ || this.target_,
            name: e,
            newValue: t,
          });
          if (!r) return null;
          t = r.newValue;
        }
        if (((t = n.prepareNewValue_(t)), t !== F.UNCHANGED)) {
          var i = U(this),
            a = i
              ? {
                  type: G,
                  observableKind: `object`,
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  oldValue: n.value_,
                  name: e,
                  newValue: t,
                }
              : null;
          (n.setNewValue_(t), i && W(this, a));
        }
        return !0;
      }),
      (n.get_ = function (e) {
        return (
          F.trackingDerivation && !y(this.target_, e) && this.has_(e),
          this.target_[e]
        );
      }),
      (n.set_ = function (e, t, n) {
        return (
          n === void 0 && (n = !1),
          y(this.target_, e)
            ? this.values_.has(e)
              ? this.setObservablePropValue_(e, t)
              : n
                ? Reflect.set(this.target_, e, t)
                : ((this.target_[e] = t), !0)
            : this.extend_(
                e,
                { value: t, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                n,
              )
        );
      }),
      (n.has_ = function (e) {
        if (!F.trackingDerivation) return e in this.target_;
        this.pendingKeys_ ||= new Map();
        var t = this.pendingKeys_.get(e);
        return (
          t ||
            ((t = new k(e in this.target_, Me, `ObservableObject.key?`, !1)),
            this.pendingKeys_.set(e, t)),
          t.get()
        );
      }),
      (n.make_ = function (t, n) {
        if ((n === !0 && (n = this.defaultAnnotation_), n !== !1)) {
          if (!(t in this.target_)) {
            var r;
            if ((r = this.target_[C]) != null && r[t]) return;
            e(1, n.annotationType_, this.name_ + `.` + t.toString());
          }
          for (var a = this.target_; a && a !== o;) {
            var s = i(a, t);
            if (s) {
              var c = n.make_(this, t, s, a);
              if (c === 0) return;
              if (c === 1) break;
            }
            a = Object.getPrototypeOf(a);
          }
          Xr(this, n, t);
        }
      }),
      (n.extend_ = function (e, t, n, r) {
        if (
          (r === void 0 && (r = !1),
          n === !0 && (n = this.defaultAnnotation_),
          n === !1)
        )
          return this.defineProperty_(e, t, r);
        var i = n.extend_(this, e, t, r);
        return (i && Xr(this, n, e), i);
      }),
      (n.defineProperty_ = function (e, t, n) {
        (n === void 0 && (n = !1), this.keysAtom_);
        try {
          I();
          var r = this.delete_(e);
          if (!r) return r;
          if (V(this)) {
            var i = H(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: Y,
              newValue: t.value,
            });
            if (!i) return null;
            var o = i.newValue;
            t.value !== o && (t = S({}, t, { value: o }));
          }
          if (n) {
            if (!Reflect.defineProperty(this.target_, e, t)) return !1;
          } else a(this.target_, e, t);
          this.notifyPropertyAddition_(e, t.value);
        } finally {
          L();
        }
        return !0;
      }),
      (n.defineObservableProperty_ = function (e, t, n, r) {
        (r === void 0 && (r = !1), this.keysAtom_);
        try {
          I();
          var i = this.delete_(e);
          if (!i) return i;
          if (V(this)) {
            var o = H(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: Y,
              newValue: t,
            });
            if (!o) return null;
            t = o.newValue;
          }
          var s = Yr(e),
            c = {
              configurable: !F.safeDescriptors || this.isPlainObject_,
              enumerable: !0,
              get: s.get,
              set: s.set,
            };
          if (r) {
            if (!Reflect.defineProperty(this.target_, e, c)) return !1;
          } else a(this.target_, e, c);
          var l = new k(t, n, `ObservableObject.key`, !1);
          (this.values_.set(e, l), this.notifyPropertyAddition_(e, l.value_));
        } finally {
          L();
        }
        return !0;
      }),
      (n.defineComputedProperty_ = function (e, t, n) {
        (n === void 0 && (n = !1), this.keysAtom_);
        try {
          I();
          var r = this.delete_(e);
          if (!r) return r;
          if (
            V(this) &&
            !H(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: Y,
              newValue: void 0,
            })
          )
            return null;
          ((t.name ||= `ObservableObject.key`),
            (t.context = this.proxy_ || this.target_));
          var i = Yr(e),
            o = {
              configurable: !F.safeDescriptors || this.isPlainObject_,
              enumerable: !1,
              get: i.get,
              set: i.set,
            };
          if (n) {
            if (!Reflect.defineProperty(this.target_, e, o)) return !1;
          } else a(this.target_, e, o);
          (this.values_.set(e, new A(t)),
            this.notifyPropertyAddition_(e, void 0));
        } finally {
          L();
        }
        return !0;
      }),
      (n.delete_ = function (e, t) {
        if ((t === void 0 && (t = !1), this.keysAtom_, !y(this.target_, e)))
          return !0;
        if (
          V(this) &&
          !H(this, { object: this.proxy_ || this.target_, name: e, type: Gr })
        )
          return null;
        try {
          var n;
          I();
          var r = U(this),
            a = this.values_.get(e),
            o = void 0;
          if ((!a && r && (o = i(this.target_, e)?.value), t)) {
            if (!Reflect.deleteProperty(this.target_, e)) return !1;
          } else delete this.target_[e];
          if (
            (a &&
              (this.values_.delete(e), a instanceof k && (o = a.value_), cn(a)),
            this.keysAtom_.reportChanged(),
            (n = this.pendingKeys_) == null ||
              (n = n.get(e)) == null ||
              n.set(e in this.target_),
            r)
          ) {
            var s = {
              type: Gr,
              observableKind: `object`,
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: o,
              name: e,
            };
            r && W(this, s);
          }
        } finally {
          L();
        }
        return !0;
      }),
      (n.observe_ = function (e, t) {
        return Cr(this, e);
      }),
      (n.intercept_ = function (e) {
        return Sr(this, e);
      }),
      (n.notifyPropertyAddition_ = function (e, t) {
        var n,
          r = U(this);
        if (r) {
          var i = r
            ? {
                type: Y,
                observableKind: `object`,
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                name: e,
                newValue: t,
              }
            : null;
          r && W(this, i);
        }
        ((n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (n.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), ce(this.target_));
      }),
      (n.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      t
    );
  })();
function qr(e, t) {
  if (y(e, T)) return e;
  var n = t?.name ?? `ObservableObject`;
  return (ne(e, T, new Kr(e, new Map(), String(n), St(t))), e);
}
var Jr = _(`ObservableObjectAdministration`, Kr);
function Yr(e) {
  return (
    Wr[e] ||
    (Wr[e] = {
      get: function () {
        return this[T].getObservablePropValue_(e);
      },
      set: function (t) {
        return this[T].setObservablePropValue_(e, t);
      },
    })
  );
}
function Q(e) {
  return ee(e) ? Jr(e[T]) : !1;
}
function Xr(e, t, n) {
  var r;
  (r = e.target_[C]) == null || delete r[n];
}
var Zr = ri(0),
  Qr = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  $r = 0,
  ei = function () {};
function ti(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ === void 0
      ? (e.prototype = t)
      : (e.prototype.__proto__ = t);
}
ti(ei, Array.prototype);
var ni = (function (e) {
  function t(t, n, r, i) {
    var a;
    return (
      r === void 0 && (r = `ObservableArray`),
      i === void 0 && (i = !1),
      (a = e.call(this) || this),
      $(function () {
        var e = new Ar(r, n, i, !0);
        ((e.proxy_ = a),
          re(a, T, e),
          t && t.length && a.spliceWithArray(0, 0, t),
          Qr && Object.defineProperty(a, "0", Zr));
      }),
      a
    );
  }
  he(t, e);
  var n = t.prototype;
  return (
    (n.concat = function () {
      this[T].atom_.reportObserved();
      var e = [...arguments];
      return Array.prototype.concat.apply(
        this.slice(),
        e.map(function (e) {
          return Fr(e) ? e.slice() : e;
        }),
      );
    }),
    (n[Symbol.iterator] = function () {
      var e = this,
        t = 0;
      return hi({
        next: function () {
          return t < e.length
            ? { value: e[t++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    pe(t, [
      {
        key: `length`,
        get: function () {
          return this[T].getArrayLength_();
        },
        set: function (e) {
          this[T].setArrayLength_(e);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return `Array`;
        },
      },
    ])
  );
})(ei);
Object.entries(Mr).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== `concat` && ne(ni.prototype, t, n);
});
function ri(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[T].get_(e);
    },
    set: function (t) {
      this[T].set_(e, t);
    },
  };
}
function ii(e) {
  a(ni.prototype, `` + e, ri(e));
}
function ai(e) {
  if (e > $r) {
    for (var t = $r; t < e + 100; t++) ii(t);
    $r = e;
  }
}
ai(1e3);
function oi(e, t, n) {
  return new ni(e, t, n);
}
function si(t, n) {
  if (typeof t == `object` && t) {
    if (Fr(t)) return (n !== void 0 && e(23), t[T].atom_);
    if (Z(t)) return t.atom_;
    if (X(t)) {
      if (n === void 0) return t.keysAtom_;
      var r = t.data_.get(n) || t.hasMap_.get(n);
      return (r || e(25, n, li(t)), r);
    }
    if (Q(t)) {
      if (!n) return e(26);
      var i = t[T].values_.get(n);
      return (i || e(27, n, li(t)), i);
    }
    if (Ce(t) || j(t) || hn(t)) return t;
  } else if (m(t) && hn(t[T])) return t[T];
  e(28);
}
function ci(t, n) {
  if ((t || e(29), n !== void 0)) return ci(si(t, n));
  if (Ce(t) || j(t) || hn(t) || X(t) || Z(t)) return t;
  if (t[T]) return t[T];
  e(24, t);
}
function li(e, t) {
  var n;
  if (t !== void 0) n = si(e, t);
  else if (jn(e)) return e.name;
  else n = Q(e) || X(e) || Z(e) ? ci(e) : si(e);
  return n.name_;
}
function $(e) {
  var t = N(),
    n = Rt(!0);
  I();
  try {
    return e();
  } finally {
    (L(), zt(n), P(t));
  }
}
var ui = o.toString;
function di(e, t, n) {
  return (n === void 0 && (n = -1), fi(e, t, n));
}
function fi(e, t, n, r, i) {
  if (e === t) return e !== 0 || 1 / e == 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== `function` && a !== `object` && typeof t != `object`) return !1;
  var o = ui.call(e);
  if (o !== ui.call(t)) return !1;
  switch (o) {
    case `[object RegExp]`:
    case `[object String]`:
      return `` + e == `` + t;
    case `[object Number]`:
      return +e == +e ? (+e == 0 ? 1 / e == 1 / t : +e == +t) : +t != +t;
    case `[object Date]`:
    case `[object Boolean]`:
      return +e == +t;
    case `[object Symbol]`:
      return (
        typeof Symbol < `u` && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
      );
    case `[object Map]`:
    case `[object Set]`:
      n >= 0 && n++;
  }
  ((e = pi(e)), (t = pi(t)));
  var s = o === `[object Array]`;
  if (!s) {
    if (typeof e != `object` || typeof t != `object`) return !1;
    var c = e.constructor,
      l = t.constructor;
    if (
      c !== l &&
      !(m(c) && c instanceof c && m(l) && l instanceof l) &&
      `constructor` in e &&
      `constructor` in t
    )
      return !1;
  }
  if (n === 0) return !1;
  (n < 0 && (n = -1), (r ||= []), (i ||= []));
  for (var u = r.length; u--;) if (r[u] === e) return i[u] === t;
  if ((r.push(e), i.push(t), s)) {
    if (((u = e.length), u !== t.length)) return !1;
    for (; u--;) if (!fi(e[u], t[u], n - 1, r, i)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var h = d[p];
      if (!(y(t, h) && fi(e[h], t[h], n - 1, r, i))) return !1;
    }
  }
  return (r.pop(), i.pop(), !0);
}
function pi(e) {
  return Fr(e)
    ? e.slice()
    : ie(e) || X(e) || v(e) || Z(e)
      ? Array.from(e.entries())
      : e;
}
var mi = n().Iterator?.prototype || {};
function hi(e) {
  return ((e[Symbol.iterator] = gi), Object.assign(Object.create(mi), e));
}
function gi() {
  return this;
}
([`Symbol`, `Map`, `Set`].forEach(function (t) {
  n()[t] === void 0 &&
    e(`MobX requires global '` + t + `' to be available or polyfilled`);
}),
  typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == `object` &&
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy: vn,
      extras: { getDebugName: li },
      $mobx: T,
    }));
export {
  ur as C,
  B as D,
  hr as E,
  gr as O,
  D as S,
  An as T,
  X as _,
  Lt as a,
  Er as b,
  Gn as c,
  ci as d,
  qn as f,
  Fr as g,
  Gt as h,
  z as i,
  we as l,
  ar as m,
  Rr as n,
  Mn as o,
  ir as p,
  R as r,
  kt as s,
  T as t,
  Kn as u,
  Q as v,
  Fn as w,
  wr as x,
  cr as y,
};
