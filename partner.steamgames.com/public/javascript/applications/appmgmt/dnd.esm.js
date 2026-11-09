/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { kt as e, on as t } from "./mobx.esm.js";
import { E as n, S as r, _ as i } from "./react-router.js";
import { t as a } from "./with-selector.js";
var o = t(e(), 1),
  s = t(n());
function c(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var l = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  u = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  d = {
    INIT: `@@redux/INIT${u()}`,
    REPLACE: `@@redux/REPLACE${u()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${u()}`,
  };
function f(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function p(e, t, n) {
  if (typeof e != `function`) throw Error(c(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(c(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(c(1));
    return n(p)(e, t);
  }
  let r = e,
    i = t,
    a = new Map(),
    o = a,
    s = 0,
    u = !1;
  function m() {
    o === a &&
      ((o = new Map()),
      a.forEach((e, t) => {
        o.set(t, e);
      }));
  }
  function h() {
    if (u) throw Error(c(3));
    return i;
  }
  function g(e) {
    if (typeof e != `function`) throw Error(c(4));
    if (u) throw Error(c(5));
    let t = !0;
    m();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (u) throw Error(c(6));
          (t = !1), m(), o.delete(n), (a = null);
        }
      }
    );
  }
  function _(e) {
    if (!f(e)) throw Error(c(7));
    if (e.type === void 0) throw Error(c(8));
    if (typeof e.type != `string`) throw Error(c(17));
    if (u) throw Error(c(9));
    try {
      (u = !0), (i = r(i, e));
    } finally {
      u = !1;
    }
    return (
      (a = o).forEach((e) => {
        e();
      }),
      e
    );
  }
  function v(e) {
    if (typeof e != `function`) throw Error(c(10));
    (r = e), _({ type: d.REPLACE });
  }
  function y() {
    let e = g;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(c(11));
        function n() {
          let e = t;
          e.next && e.next(h());
        }
        return n(), { unsubscribe: e(n) };
      },
      [l]() {
        return this;
      },
    };
  }
  return (
    _({ type: d.INIT }),
    { dispatch: _, subscribe: g, getState: h, replaceReducer: v, [l]: y }
  );
}
function m(e, t) {
  return function (...n) {
    return t(e.apply(this, n));
  };
}
function h(e, t) {
  if (typeof e == `function`) return m(e, t);
  if (typeof e != `object` || !e) throw Error(c(16));
  let n = {};
  for (let r in e) {
    let i = e[r];
    typeof i == `function` && (n[r] = m(i, t));
  }
  return n;
}
function g(...e) {
  return e.length === 0
    ? (e) => e
    : e.length === 1
      ? e[0]
      : e.reduce(
          (e, t) =>
            (...n) =>
              e(t(...n)),
        );
}
function _(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(c(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return (a = g(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a };
  };
}
a();
var v = Symbol.for(`react.transitional.element`),
  y = Symbol.for(`react.portal`),
  b = Symbol.for(`react.fragment`),
  x = Symbol.for(`react.strict_mode`),
  S = Symbol.for(`react.profiler`),
  C = Symbol.for(`react.consumer`),
  w = Symbol.for(`react.context`),
  T = Symbol.for(`react.forward_ref`),
  E = Symbol.for(`react.suspense`),
  D = Symbol.for(`react.suspense_list`),
  O = Symbol.for(`react.memo`),
  ee = Symbol.for(`react.lazy`),
  te = T,
  ne = O;
function re(e) {
  if (typeof e == `object` && e) {
    let { $$typeof: t } = e;
    switch (t) {
      case v:
        switch (((e = e.type), e)) {
          case b:
          case S:
          case x:
          case E:
          case D:
            return e;
          default:
            switch (((e &&= e.$$typeof), e)) {
              case w:
              case T:
              case ee:
              case O:
                return e;
              case C:
                return e;
              default:
                return t;
            }
        }
      case y:
        return t;
    }
  }
}
function ie(e) {
  return re(e) === O;
}
function ae(
  e,
  t,
  n,
  r,
  { areStatesEqual: i, areOwnPropsEqual: a, areStatePropsEqual: o },
) {
  let s = !1,
    c,
    l,
    u,
    d,
    f;
  function p(i, a) {
    return (
      (c = i),
      (l = a),
      (u = e(c, l)),
      (d = t(r, l)),
      (f = n(u, d, l)),
      (s = !0),
      f
    );
  }
  function m() {
    return (
      (u = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), (f = n(u, d, l)), f
    );
  }
  function h() {
    return (
      e.dependsOnOwnProps && (u = e(c, l)),
      t.dependsOnOwnProps && (d = t(r, l)),
      (f = n(u, d, l)),
      f
    );
  }
  function g() {
    let t = e(c, l),
      r = !o(t, u);
    return (u = t), r && (f = n(u, d, l)), f;
  }
  function _(e, t) {
    let n = !a(t, l),
      r = !i(e, c, t, l);
    return (c = e), (l = t), n && r ? m() : n ? h() : r ? g() : f;
  }
  return function (e, t) {
    return s ? _(e, t) : p(e, t);
  };
}
function oe(
  e,
  {
    initMapStateToProps: t,
    initMapDispatchToProps: n,
    initMergeProps: r,
    ...i
  },
) {
  return ae(t(e, i), n(e, i), r(e, i), e, i);
}
function se(e, t) {
  let n = {};
  for (let r in e) {
    let i = e[r];
    typeof i == `function` && (n[r] = (...e) => t(i(...e)));
  }
  return n;
}
function ce(e) {
  return function (t) {
    let n = e(t);
    function r() {
      return n;
    }
    return (r.dependsOnOwnProps = !1), r;
  };
}
function le(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ue(e, t) {
  return function (t, { displayName: n }) {
    let r = function (e, t) {
      return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e, void 0);
    };
    return (
      (r.dependsOnOwnProps = !0),
      (r.mapToProps = function (t, n) {
        (r.mapToProps = e), (r.dependsOnOwnProps = le(e));
        let i = r(t, n);
        return (
          typeof i == `function` &&
            ((r.mapToProps = i), (r.dependsOnOwnProps = le(i)), (i = r(t, n))),
          i
        );
      }),
      r
    );
  };
}
function de(e, t) {
  return (n, r) => {
    throw Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`,
    );
  };
}
function fe(e) {
  return e && typeof e == `object`
    ? ce((t) => se(e, t))
    : e
      ? typeof e == `function`
        ? ue(e, `mapDispatchToProps`)
        : de(e, `mapDispatchToProps`)
      : ce((e) => ({ dispatch: e }));
}
function pe(e) {
  return e
    ? typeof e == `function`
      ? ue(e, `mapStateToProps`)
      : de(e, `mapStateToProps`)
    : ce(() => ({}));
}
function me(e, t, n) {
  return { ...n, ...e, ...t };
}
function he(e) {
  return function (t, { displayName: n, areMergedPropsEqual: r }) {
    let i = !1,
      a;
    return function (t, n, o) {
      let s = e(t, n, o);
      return i ? r(s, a) || (a = s) : ((i = !0), (a = s)), a;
    };
  };
}
function ge(e) {
  return e ? (typeof e == `function` ? he(e) : de(e, `mergeProps`)) : () => me;
}
function _e(e) {
  e();
}
function ve() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      _e(() => {
        let t = e;
        for (; t; ) t.callback(), (t = t.next);
      });
    },
    get() {
      let t = [],
        n = e;
      for (; n; ) t.push(n), (n = n.next);
      return t;
    },
    subscribe(n) {
      let r = !0,
        i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          r &&
            e !== null &&
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var ye = { notify() {}, get: () => [] };
function be(e, t) {
  let n,
    r = ye,
    i = 0,
    a = !1;
  function o(e) {
    u();
    let t = r.subscribe(e),
      n = !1;
    return () => {
      n || ((n = !0), t(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return a;
  }
  function u() {
    i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = ve()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = ye));
  }
  function f() {
    a || ((a = !0), u());
  }
  function p() {
    a && ((a = !1), d());
  }
  let m = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return m;
}
var xe =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  Se = typeof navigator < `u` && navigator.product === `ReactNative`,
  Ce = xe || Se ? o.useLayoutEffect : o.useEffect;
function we(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function Te(e, t) {
  if (we(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !we(e[n[r]], t[n[r]]))
      return !1;
  return !0;
}
var Ee = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  De = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Oe = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  ke = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ae = { [te]: Oe, [ne]: ke };
function je(e) {
  return ie(e) ? ke : Ae[e.$$typeof] || Ee;
}
var Me = Object.defineProperty,
  Ne = Object.getOwnPropertyNames,
  Pe = Object.getOwnPropertySymbols,
  Fe = Object.getOwnPropertyDescriptor,
  Ie = Object.getPrototypeOf,
  Le = Object.prototype;
function Re(e, t) {
  if (typeof t != `string`) {
    if (Le) {
      let n = Ie(t);
      n && n !== Le && Re(e, n);
    }
    let n = Ne(t);
    Pe && (n = n.concat(Pe(t)));
    let r = je(e),
      i = je(t);
    for (let a = 0; a < n.length; ++a) {
      let o = n[a];
      if (!De[o] && !(i && i[o]) && !(r && r[o])) {
        let n = Fe(t, o);
        try {
          Me(e, o, n);
        } catch {}
      }
    }
  }
  return e;
}
var ze = Symbol.for(`react-redux-context`),
  Be = typeof globalThis < `u` ? globalThis : {};
function Ve() {
  if (!o.createContext) return {};
  let e = (Be[ze] ??= new Map()),
    t = e.get(o.createContext);
  return t || ((t = o.createContext(null)), e.set(o.createContext, t)), t;
}
var He = Ve(),
  Ue = [null, null];
function We(e, t, n) {
  Ce(() => e(...t), n);
}
function Ge(e, t, n, r, i, a) {
  (e.current = r), (n.current = !1), i.current && ((i.current = null), a());
}
function Ke(e, t, n, r, i, a, o, s, c, l, u) {
  if (!e) return () => {};
  let d = !1,
    f = null,
    p = () => {
      if (d || !s.current) return;
      let e = t.getState(),
        n,
        p;
      try {
        n = r(e, i.current);
      } catch (e) {
        (p = e), (f = e);
      }
      p || (f = null),
        n === a.current
          ? o.current || l()
          : ((a.current = n), (c.current = n), (o.current = !0), u());
    };
  return (
    (n.onStateChange = p),
    n.trySubscribe(),
    p(),
    () => {
      if (((d = !0), n.tryUnsubscribe(), (n.onStateChange = null), f)) throw f;
    }
  );
}
function qe(e, t) {
  return e === t;
}
function Je(
  e,
  t,
  n,
  {
    pure: r,
    areStatesEqual: i = qe,
    areOwnPropsEqual: a = Te,
    areStatePropsEqual: s = Te,
    areMergedPropsEqual: c = Te,
    forwardRef: l = !1,
    context: u = He,
  } = {},
) {
  let d = u,
    f = pe(e),
    p = fe(t),
    m = ge(n),
    h = !!e;
  return (e) => {
    let t = e.displayName || e.name || `Component`,
      n = `Connect(${t})`,
      r = {
        shouldHandleStateChanges: h,
        displayName: n,
        wrappedComponentName: t,
        WrappedComponent: e,
        initMapStateToProps: f,
        initMapDispatchToProps: p,
        initMergeProps: m,
        areStatesEqual: i,
        areStatePropsEqual: s,
        areOwnPropsEqual: a,
        areMergedPropsEqual: c,
      };
    function u(t) {
      let [n, i, a] = o.useMemo(() => {
          let { reactReduxForwardedRef: e, ...n } = t;
          return [t.context, e, n];
        }, [t]),
        s = o.useMemo(() => {
          let e = d;
          return n?.Consumer, e;
        }, [n, d]),
        c = o.useContext(s),
        l = !!t.store && !!t.store.getState && !!t.store.dispatch,
        u = !!c && !!c.store,
        f = l ? t.store : c.store,
        p = u ? c.getServerState : f.getState,
        m = o.useMemo(() => oe(f.dispatch, r), [f]),
        [g, _] = o.useMemo(() => {
          if (!h) return Ue;
          let e = be(f, l ? void 0 : c.subscription);
          return [e, e.notifyNestedSubs.bind(e)];
        }, [f, l, c]),
        v = o.useMemo(() => (l ? c : { ...c, subscription: g }), [l, c, g]),
        y = o.useRef(void 0),
        b = o.useRef(a),
        x = o.useRef(void 0),
        S = o.useRef(!1),
        C = o.useRef(!1),
        w = o.useRef(void 0);
      Ce(
        () => (
          (C.current = !0),
          () => {
            C.current = !1;
          }
        ),
        [],
      );
      let T = o.useMemo(
          () => () =>
            x.current && a === b.current ? x.current : m(f.getState(), a),
          [f, a],
        ),
        E = o.useMemo(
          () => (e) => (g ? Ke(h, f, g, m, b, y, S, C, x, _, e) : () => {}),
          [g],
        );
      We(Ge, [b, y, S, a, x, _]);
      let D;
      try {
        D = o.useSyncExternalStore(E, T, p ? () => m(p(), a) : T);
      } catch (e) {
        throw (
          (w.current &&
            (e.message += `
The error may be correlated with this previous error:
${w.current.stack}

`),
          e)
        );
      }
      Ce(() => {
        (w.current = void 0), (x.current = void 0), (y.current = D);
      });
      let O = o.useMemo(() => o.createElement(e, { ...D, ref: i }), [i, e, D]);
      return o.useMemo(
        () => (h ? o.createElement(s.Provider, { value: v }, O) : O),
        [s, O, v],
      );
    }
    let g = o.memo(u);
    if (((g.WrappedComponent = e), (g.displayName = u.displayName = n), l)) {
      let t = o.forwardRef(function (e, t) {
        return o.createElement(g, { ...e, reactReduxForwardedRef: t });
      });
      return (t.displayName = n), (t.WrappedComponent = e), Re(t, e);
    }
    return Re(g, e);
  };
}
var Ye = Je;
function Xe(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = o.useMemo(() => {
      let e = be(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    s = o.useMemo(() => i.getState(), [i]);
  Ce(() => {
    let { subscription: e } = a;
    return (
      (e.onStateChange = e.notifyNestedSubs),
      e.trySubscribe(),
      s !== i.getState() && e.notifyNestedSubs(),
      () => {
        e.tryUnsubscribe(), (e.onStateChange = void 0);
      }
    );
  }, [a, s]);
  let c = n || He;
  return o.createElement(c.Provider, { value: a }, t);
}
var Ze = Xe,
  k = function (e) {
    var t = e.top,
      n = e.right,
      r = e.bottom,
      i = e.left;
    return {
      top: t,
      right: n,
      bottom: r,
      left: i,
      width: n - i,
      height: r - t,
      x: i,
      y: t,
      center: { x: (n + i) / 2, y: (r + t) / 2 },
    };
  },
  Qe = function (e, t) {
    return {
      top: e.top - t.top,
      left: e.left - t.left,
      bottom: e.bottom + t.bottom,
      right: e.right + t.right,
    };
  },
  $e = function (e, t) {
    return {
      top: e.top + t.top,
      left: e.left + t.left,
      bottom: e.bottom - t.bottom,
      right: e.right - t.right,
    };
  },
  et = function (e, t) {
    return {
      top: e.top + t.y,
      left: e.left + t.x,
      bottom: e.bottom + t.y,
      right: e.right + t.x,
    };
  },
  tt = { top: 0, right: 0, bottom: 0, left: 0 },
  nt = function (e) {
    var t = e.borderBox,
      n = e.margin,
      r = n === void 0 ? tt : n,
      i = e.border,
      a = i === void 0 ? tt : i,
      o = e.padding,
      s = o === void 0 ? tt : o,
      c = k(Qe(t, r)),
      l = k($e(t, a)),
      u = k($e(l, s));
    return {
      marginBox: c,
      borderBox: k(t),
      paddingBox: l,
      contentBox: u,
      margin: r,
      border: a,
      padding: s,
    };
  },
  A = function (e) {
    var t = e.slice(0, -2);
    if (e.slice(-2) !== `px`) return 0;
    var n = Number(t);
    return isNaN(n) && i(!1), n;
  },
  rt = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  it = function (e, t) {
    var n = e.borderBox,
      r = e.border,
      i = e.margin,
      a = e.padding;
    return nt({ borderBox: et(n, t), border: r, margin: i, padding: a });
  },
  at = function (e, t) {
    return t === void 0 && (t = rt()), it(e, t);
  },
  ot = function (e, t) {
    return nt({
      borderBox: e,
      margin: {
        top: A(t.marginTop),
        right: A(t.marginRight),
        bottom: A(t.marginBottom),
        left: A(t.marginLeft),
      },
      padding: {
        top: A(t.paddingTop),
        right: A(t.paddingRight),
        bottom: A(t.paddingBottom),
        left: A(t.paddingLeft),
      },
      border: {
        top: A(t.borderTopWidth),
        right: A(t.borderRightWidth),
        bottom: A(t.borderBottomWidth),
        left: A(t.borderLeftWidth),
      },
    });
  },
  st = function (e) {
    return ot(e.getBoundingClientRect(), window.getComputedStyle(e));
  },
  ct = function (e) {
    var t = [],
      n = null,
      r = function () {
        (t = [...arguments]),
          !n &&
            (n = requestAnimationFrame(function () {
              (n = null), e.apply(void 0, t);
            }));
      };
    return (
      (r.cancel = function () {
        n &&= (cancelAnimationFrame(n), null);
      }),
      r
    );
  };
function lt(e, t) {}
lt.bind(null, `warn`), lt.bind(null, `error`);
function j() {}
function ut(e, t) {
  return { ...e, ...t };
}
function M(e, t, n) {
  let r = t.map((t) => {
    let r = ut(n, t.options);
    return (
      e.addEventListener(t.eventName, t.fn, r),
      function () {
        e.removeEventListener(t.eventName, t.fn, r);
      }
    );
  });
  return function () {
    r.forEach((e) => {
      e();
    });
  };
}
var dt = `Invariant failed`,
  ft = class extends Error {};
ft.prototype.toString = function () {
  return this.message;
};
function N(e, t) {
  throw new ft(dt);
}
var pt = class extends o.Component {
    constructor(...e) {
      super(...e),
        (this.callbacks = null),
        (this.unbind = j),
        (this.onWindowError = (e) => {
          let t = this.getCallbacks();
          t.isDragging() && t.tryAbort(),
            e.error instanceof ft && e.preventDefault();
        }),
        (this.getCallbacks = () => {
          if (!this.callbacks)
            throw Error(`Unable to find AppCallbacks in <ErrorBoundary/>`);
          return this.callbacks;
        }),
        (this.setCallbacks = (e) => {
          this.callbacks = e;
        });
    }
    componentDidMount() {
      this.unbind = M(window, [{ eventName: `error`, fn: this.onWindowError }]);
    }
    componentDidCatch(e) {
      if (e instanceof ft) this.setState({});
      else throw e;
    }
    componentWillUnmount() {
      this.unbind();
    }
    render() {
      return this.props.children(this.setCallbacks);
    }
  },
  mt = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  ht = (e) => e + 1,
  gt = (e) => `
  You have lifted an item in position ${ht(e.source.index)}
`,
  _t = (e, t) => {
    let n = e.droppableId === t.droppableId,
      r = ht(e.index),
      i = ht(t.index);
    return n
      ? `
      You have moved the item from position ${r}
      to position ${i}
    `
      : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${i}
  `;
  },
  vt = (e, t, n) =>
    t.droppableId === n.droppableId
      ? `
      The item ${e}
      has been combined with ${n.draggableId}`
      : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `,
  yt = (e) => {
    let t = e.destination;
    if (t) return _t(e.source, t);
    let n = e.combine;
    return n
      ? vt(e.draggableId, e.source, n)
      : `You are over an area that cannot be dropped on`;
  },
  bt = (e) => `
  The item has returned to its starting position
  of ${ht(e.index)}
`,
  xt = {
    dragHandleUsageInstructions: mt,
    onDragStart: gt,
    onDragUpdate: yt,
    onDragEnd: (e) => {
      if (e.reason === `CANCEL`)
        return `
      Movement cancelled.
      ${bt(e.source)}
    `;
      let t = e.destination,
        n = e.combine;
      return t
        ? `
      You have dropped the item.
      ${_t(e.source, t)}
    `
        : n
          ? `
      You have dropped the item.
      ${vt(e.draggableId, e.source, n)}
    `
          : `
    The item has been dropped while not over a drop area.
    ${bt(e.source)}
  `;
    },
  };
function St(e, t) {
  return !!(e === t || (Number.isNaN(e) && Number.isNaN(t)));
}
function Ct(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function P(e, t) {
  let n = (0, o.useState)(() => ({ inputs: t, result: e() }))[0],
    r = (0, o.useRef)(!0),
    i = (0, o.useRef)(n),
    a =
      r.current || (t && i.current.inputs && Ct(t, i.current.inputs))
        ? i.current
        : { inputs: t, result: e() };
  return (
    (0, o.useEffect)(() => {
      (r.current = !1), (i.current = a);
    }, [a]),
    a.result
  );
}
function F(e, t) {
  return P(() => e, t);
}
var I = { x: 0, y: 0 },
  L = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
  R = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
  z = (e, t) => e.x === t.x && e.y === t.y,
  wt = (e) => ({ x: e.x === 0 ? 0 : -e.x, y: e.y === 0 ? 0 : -e.y }),
  B = (e, t, n = 0) => (e === `x` ? { x: t, y: n } : { x: n, y: t }),
  Tt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
  Et = (e, t) => Math.min(...t.map((t) => Tt(e, t))),
  Dt = (e) => (t) => ({ x: e(t.x), y: e(t.y) }),
  Ot = (e, t) => {
    let n = k({
      top: Math.max(t.top, e.top),
      right: Math.min(t.right, e.right),
      bottom: Math.min(t.bottom, e.bottom),
      left: Math.max(t.left, e.left),
    });
    return n.width <= 0 || n.height <= 0 ? null : n;
  },
  kt = (e, t) => ({
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x,
  }),
  At = (e) => [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.left, y: e.bottom },
    { x: e.right, y: e.bottom },
  ],
  jt = { top: 0, right: 0, bottom: 0, left: 0 },
  Mt = (e, t) => (t ? kt(e, t.scroll.diff.displacement) : e),
  Nt = (e, t, n) =>
    n && n.increasedBy
      ? { ...e, [t.end]: e[t.end] + n.increasedBy[t.line] }
      : e,
  Pt = (e, t) => (t && t.shouldClipSubject ? Ot(t.pageMarginBox, e) : k(e)),
  Ft = ({ page: e, withPlaceholder: t, axis: n, frame: r }) => ({
    page: e,
    withPlaceholder: t,
    active: Pt(Nt(Mt(e.marginBox, r), n, t), r),
  }),
  It = (e, t) => {
    !e.frame && N();
    let n = e.frame,
      r = R(t, n.scroll.initial),
      i = wt(r),
      a = {
        ...n,
        scroll: {
          initial: n.scroll.initial,
          current: t,
          diff: { value: r, displacement: i },
          max: n.scroll.max,
        },
      },
      o = Ft({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: a,
      });
    return { ...e, frame: a, subject: o };
  };
function V(e, t = Ct) {
  let n = null;
  function r(...r) {
    if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
    let i = e.apply(this, r);
    return (n = { lastResult: i, lastArgs: r, lastThis: this }), i;
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var Lt = V((e) => e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})),
  Rt = V((e) => e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})),
  zt = V((e) => Object.values(e)),
  Bt = V((e) => Object.values(e)),
  H = V((e, t) =>
    Bt(t)
      .filter((t) => e === t.descriptor.droppableId)
      .sort((e, t) => e.descriptor.index - t.descriptor.index),
  );
function Vt(e) {
  return e.at && e.at.type === `REORDER` ? e.at.destination : null;
}
function Ht(e) {
  return e.at && e.at.type === `COMBINE` ? e.at.combine : null;
}
var Ut = V((e, t) => t.filter((t) => t.descriptor.id !== e.descriptor.id)),
  Wt = ({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: r,
    previousImpact: i,
  }) => {
    if (!n.isCombineEnabled || !Vt(i)) return null;
    function a(e) {
      let t = {
        type: `COMBINE`,
        combine: { draggableId: e, droppableId: n.descriptor.id },
      };
      return { ...i, at: t };
    }
    let o = i.displaced.all,
      s = o.length ? o[0] : null;
    if (e) return s ? a(s) : null;
    let c = Ut(t, r);
    if (!s) {
      if (!c.length) return null;
      let e = c[c.length - 1];
      return a(e.descriptor.id);
    }
    let l = c.findIndex((e) => e.descriptor.id === s);
    l === -1 && N();
    let u = l - 1;
    if (u < 0) return null;
    let d = c[u];
    return a(d.descriptor.id);
  },
  U = (e, t) => e.descriptor.droppableId === t.descriptor.id,
  Gt = { point: I, value: 0 },
  Kt = { invisible: {}, visible: {}, all: [] },
  qt = { displaced: Kt, displacedBy: Gt, at: null },
  W = (e, t) => (n) => e <= n && n <= t,
  Jt = (e) => {
    let t = W(e.top, e.bottom),
      n = W(e.left, e.right);
    return (r) => {
      if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) return !0;
      let i = t(r.top) || t(r.bottom),
        a = n(r.left) || n(r.right);
      if (i && a) return !0;
      let o = r.top < e.top && r.bottom > e.bottom,
        s = r.left < e.left && r.right > e.right;
      return o && s ? !0 : (o && a) || (s && i);
    };
  },
  Yt = (e) => {
    let t = W(e.top, e.bottom),
      n = W(e.left, e.right);
    return (e) => t(e.top) && t(e.bottom) && n(e.left) && n(e.right);
  },
  Xt = {
    direction: `vertical`,
    line: `y`,
    crossAxisLine: `x`,
    start: `top`,
    end: `bottom`,
    size: `height`,
    crossAxisStart: `left`,
    crossAxisEnd: `right`,
    crossAxisSize: `width`,
  },
  Zt = {
    direction: `horizontal`,
    line: `x`,
    crossAxisLine: `y`,
    start: `left`,
    end: `right`,
    size: `width`,
    crossAxisStart: `top`,
    crossAxisEnd: `bottom`,
    crossAxisSize: `height`,
  },
  Qt = (e) => (t) => {
    let n = W(t.top, t.bottom),
      r = W(t.left, t.right);
    return (t) =>
      e === Xt ? n(t.top) && n(t.bottom) : r(t.left) && r(t.right);
  },
  $t = (e, t) => kt(e, t.frame ? t.frame.scroll.diff.displacement : I),
  en = (e, t, n) => (t.subject.active ? n(t.subject.active)(e) : !1),
  tn = (e, t, n) => n(t)(e),
  nn = ({
    target: e,
    destination: t,
    viewport: n,
    withDroppableDisplacement: r,
    isVisibleThroughFrameFn: i,
  }) => {
    let a = r ? $t(e, t) : e;
    return en(a, t, i) && tn(a, n, i);
  },
  rn = (e) => nn({ ...e, isVisibleThroughFrameFn: Jt }),
  an = (e) => nn({ ...e, isVisibleThroughFrameFn: Yt }),
  on = (e) => nn({ ...e, isVisibleThroughFrameFn: Qt(e.destination.axis) }),
  sn = (e, t, n) => {
    if (typeof n == `boolean`) return n;
    if (!t) return !0;
    let { invisible: r, visible: i } = t;
    if (r[e]) return !1;
    let a = i[e];
    return !a || a.shouldAnimate;
  };
function cn(e, t) {
  let n = e.page.marginBox;
  return k(Qe(n, { top: t.point.y, right: 0, bottom: 0, left: t.point.x }));
}
function ln({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: i,
  last: a,
}) {
  return e.reduce(
    function (e, o) {
      let s = cn(o, n),
        c = o.descriptor.id;
      if (
        (e.all.push(c),
        !rn({
          target: s,
          destination: t,
          viewport: r,
          withDroppableDisplacement: !0,
        }))
      )
        return (e.invisible[o.descriptor.id] = !0), e;
      let l = { draggableId: c, shouldAnimate: sn(c, a, i) };
      return (e.visible[c] = l), e;
    },
    { all: [], visible: {}, invisible: {} },
  );
}
function un(e, t) {
  if (!e.length) return 0;
  let n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function dn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r,
}) {
  let i = un(e, { inHomeList: t });
  return {
    displaced: Kt,
    displacedBy: n,
    at: {
      type: `REORDER`,
      destination: { droppableId: r.descriptor.id, index: i },
    },
  };
}
function fn({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: i,
  last: a,
  index: o,
  forceShouldAnimate: s,
}) {
  let c = U(e, n);
  if (o == null)
    return dn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: i,
      destination: n,
    });
  let l = t.find((e) => e.descriptor.index === o);
  if (!l)
    return dn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: i,
      destination: n,
    });
  let u = Ut(e, t),
    d = t.indexOf(l);
  return {
    displaced: ln({
      afterDragging: u.slice(d),
      destination: n,
      displacedBy: i,
      last: a,
      viewport: r.frame,
      forceShouldAnimate: s,
    }),
    displacedBy: i,
    at: {
      type: `REORDER`,
      destination: { droppableId: n.descriptor.id, index: o },
    },
  };
}
function G(e, t) {
  return !!t.effected[e];
}
var pn = ({
    isMovingForward: e,
    destination: t,
    draggables: n,
    combine: r,
    afterCritical: i,
  }) => {
    if (!t.isCombineEnabled) return null;
    let a = r.draggableId,
      o = n[a].descriptor.index;
    return G(a, i) ? (e ? o : o - 1) : e ? o + 1 : o;
  },
  mn = ({
    isMovingForward: e,
    isInHomeList: t,
    insideDestination: n,
    location: r,
  }) => {
    if (!n.length) return null;
    let i = r.index,
      a = e ? i + 1 : i - 1,
      o = n[0].descriptor.index,
      s = n[n.length - 1].descriptor.index,
      c = t ? s : s + 1;
    return a < o || a > c ? null : a;
  },
  hn = ({
    isMovingForward: e,
    isInHomeList: t,
    draggable: n,
    draggables: r,
    destination: i,
    insideDestination: a,
    previousImpact: o,
    viewport: s,
    afterCritical: c,
  }) => {
    let l = o.at;
    if ((!l && N(), l.type === `REORDER`)) {
      let r = mn({
        isMovingForward: e,
        isInHomeList: t,
        location: l.destination,
        insideDestination: a,
      });
      return r == null
        ? null
        : fn({
            draggable: n,
            insideDestination: a,
            destination: i,
            viewport: s,
            last: o.displaced,
            displacedBy: o.displacedBy,
            index: r,
          });
    }
    let u = pn({
      isMovingForward: e,
      destination: i,
      displaced: o.displaced,
      draggables: r,
      combine: l.combine,
      afterCritical: c,
    });
    return u == null
      ? null
      : fn({
          draggable: n,
          insideDestination: a,
          destination: i,
          viewport: s,
          last: o.displaced,
          displacedBy: o.displacedBy,
          index: u,
        });
  },
  gn = ({ displaced: e, afterCritical: t, combineWith: n, displacedBy: r }) => {
    let i = !!(e.visible[n] || e.invisible[n]);
    return G(n, t) ? (i ? I : wt(r.point)) : i ? r.point : I;
  },
  _n = ({ afterCritical: e, impact: t, draggables: n }) => {
    let r = Ht(t);
    !r && N();
    let i = r.draggableId,
      a = n[i].page.borderBox.center;
    return L(
      a,
      gn({
        displaced: t.displaced,
        afterCritical: e,
        combineWith: i,
        displacedBy: t.displacedBy,
      }),
    );
  },
  vn = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
  yn = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2,
  bn = (e, t, n) =>
    t[e.crossAxisStart] +
    n.margin[e.crossAxisStart] +
    n.borderBox[e.crossAxisSize] / 2,
  xn = ({ axis: e, moveRelativeTo: t, isMoving: n }) =>
    B(e.line, t.marginBox[e.end] + vn(e, n), bn(e, t.marginBox, n)),
  Sn = ({ axis: e, moveRelativeTo: t, isMoving: n }) =>
    B(e.line, t.marginBox[e.start] - yn(e, n), bn(e, t.marginBox, n)),
  Cn = ({ axis: e, moveInto: t, isMoving: n }) =>
    B(e.line, t.contentBox[e.start] + vn(e, n), bn(e, t.contentBox, n)),
  wn = ({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i,
  }) => {
    let a = H(r.descriptor.id, n),
      o = t.page,
      s = r.axis;
    if (!a.length) return Cn({ axis: s, moveInto: r.page, isMoving: o });
    let { displaced: c, displacedBy: l } = e,
      u = c.all[0];
    if (u) {
      let e = n[u];
      return G(u, i)
        ? Sn({ axis: s, moveRelativeTo: e.page, isMoving: o })
        : Sn({ axis: s, moveRelativeTo: it(e.page, l.point), isMoving: o });
    }
    let d = a[a.length - 1];
    return d.descriptor.id === t.descriptor.id
      ? o.borderBox.center
      : G(d.descriptor.id, i)
        ? xn({
            axis: s,
            moveRelativeTo: it(d.page, wt(i.displacedBy.point)),
            isMoving: o,
          })
        : xn({ axis: s, moveRelativeTo: d.page, isMoving: o });
  },
  Tn = (e, t) => {
    let n = e.frame;
    return n ? L(t, n.scroll.diff.displacement) : t;
  },
  En = ({
    impact: e,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: i,
  }) => {
    let a = t.page.borderBox.center,
      o = e.at;
    return !n || !o
      ? a
      : o.type === `REORDER`
        ? wn({
            impact: e,
            draggable: t,
            draggables: r,
            droppable: n,
            afterCritical: i,
          })
        : _n({ impact: e, draggables: r, afterCritical: i });
  },
  Dn = (e) => {
    let t = En(e),
      n = e.droppable;
    return n ? Tn(n, t) : t;
  },
  On = (e, t) => {
    let n = R(t, e.scroll.initial),
      r = wt(n);
    return {
      frame: k({
        top: t.y,
        bottom: t.y + e.frame.height,
        left: t.x,
        right: t.x + e.frame.width,
      }),
      scroll: {
        initial: e.scroll.initial,
        max: e.scroll.max,
        current: t,
        diff: { value: n, displacement: r },
      },
    };
  };
function kn(e, t) {
  return e.map((e) => t[e]);
}
function An(e, t) {
  for (let n = 0; n < t.length; n++) {
    let r = t[n].visible[e];
    if (r) return r;
  }
  return null;
}
var jn = ({
    impact: e,
    viewport: t,
    destination: n,
    draggables: r,
    maxScrollChange: i,
  }) => {
    let a = On(t, L(t.scroll.current, i)),
      o = n.frame ? It(n, L(n.frame.scroll.current, i)) : n,
      s = e.displaced,
      c = ln({
        afterDragging: kn(s.all, r),
        destination: n,
        displacedBy: e.displacedBy,
        viewport: a.frame,
        last: s,
        forceShouldAnimate: !1,
      }),
      l = ln({
        afterDragging: kn(s.all, r),
        destination: o,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        last: s,
        forceShouldAnimate: !1,
      }),
      u = {},
      d = {},
      f = [s, c, l];
    return (
      s.all.forEach((e) => {
        let t = An(e, f);
        t ? (d[e] = t) : (u[e] = !0);
      }),
      { ...e, displaced: { all: s.all, invisible: u, visible: d } }
    );
  },
  Mn = (e, t) => L(e.scroll.diff.displacement, t),
  Nn = ({ pageBorderBoxCenter: e, draggable: t, viewport: n }) => {
    let r = R(Mn(n, e), t.page.borderBox.center);
    return L(t.client.borderBox.center, r);
  },
  Pn = ({
    draggable: e,
    destination: t,
    newPageBorderBoxCenter: n,
    viewport: r,
    withDroppableDisplacement: i,
    onlyOnMainAxis: a = !1,
  }) => {
    let o = R(n, e.page.borderBox.center),
      s = {
        target: kt(e.page.borderBox, o),
        destination: t,
        withDroppableDisplacement: i,
        viewport: r,
      };
    return a ? on(s) : an(s);
  },
  Fn = ({
    isMovingForward: e,
    draggable: t,
    destination: n,
    draggables: r,
    previousImpact: i,
    viewport: a,
    previousPageBorderBoxCenter: o,
    previousClientSelection: s,
    afterCritical: c,
  }) => {
    if (!n.isEnabled) return null;
    let l = H(n.descriptor.id, r),
      u = U(t, n),
      d =
        Wt({
          isMovingForward: e,
          draggable: t,
          destination: n,
          insideDestination: l,
          previousImpact: i,
        }) ||
        hn({
          isMovingForward: e,
          isInHomeList: u,
          draggable: t,
          draggables: r,
          destination: n,
          insideDestination: l,
          previousImpact: i,
          viewport: a,
          afterCritical: c,
        });
    if (!d) return null;
    let f = Dn({
      impact: d,
      draggable: t,
      droppable: n,
      draggables: r,
      afterCritical: c,
    });
    if (
      Pn({
        draggable: t,
        destination: n,
        newPageBorderBoxCenter: f,
        viewport: a.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: Nn({
          pageBorderBoxCenter: f,
          draggable: t,
          viewport: a,
        }),
        impact: d,
        scrollJumpRequest: null,
      };
    let p = R(f, o);
    return {
      clientSelection: s,
      impact: jn({
        impact: d,
        viewport: a,
        destination: n,
        draggables: r,
        maxScrollChange: p,
      }),
      scrollJumpRequest: p,
    };
  },
  K = (e) => {
    let t = e.subject.active;
    return !t && N(), t;
  },
  In = ({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: r,
    viewport: i,
  }) => {
    let a = n.subject.active;
    if (!a) return null;
    let o = n.axis,
      s = W(a[o.start], a[o.end]),
      c = zt(r)
        .filter((e) => e !== n)
        .filter((e) => e.isEnabled)
        .filter((e) => !!e.subject.active)
        .filter((e) => Jt(i.frame)(K(e)))
        .filter((t) => {
          let n = K(t);
          return e
            ? a[o.crossAxisEnd] < n[o.crossAxisEnd]
            : n[o.crossAxisStart] < a[o.crossAxisStart];
        })
        .filter((e) => {
          let t = K(e),
            n = W(t[o.start], t[o.end]);
          return s(t[o.start]) || s(t[o.end]) || n(a[o.start]) || n(a[o.end]);
        })
        .sort((t, n) => {
          let r = K(t)[o.crossAxisStart],
            i = K(n)[o.crossAxisStart];
          return e ? r - i : i - r;
        })
        .filter(
          (e, t, n) => K(e)[o.crossAxisStart] === K(n[0])[o.crossAxisStart],
        );
    if (!c.length) return null;
    if (c.length === 1) return c[0];
    let l = c.filter((e) => W(K(e)[o.start], K(e)[o.end])(t[o.line]));
    return l.length === 1
      ? l[0]
      : l.length > 1
        ? l.sort((e, t) => K(e)[o.start] - K(t)[o.start])[0]
        : c.sort((e, n) => {
            let r = Et(t, At(K(e))),
              i = Et(t, At(K(n)));
            return r === i ? K(e)[o.start] - K(n)[o.start] : r - i;
          })[0];
  },
  Ln = (e, t) => {
    let n = e.page.borderBox.center;
    return G(e.descriptor.id, t) ? R(n, t.displacedBy.point) : n;
  },
  Rn = (e, t) => {
    let n = e.page.borderBox;
    return G(e.descriptor.id, t) ? kt(n, wt(t.displacedBy.point)) : n;
  },
  zn = ({
    pageBorderBoxCenter: e,
    viewport: t,
    destination: n,
    insideDestination: r,
    afterCritical: i,
  }) =>
    r
      .filter((e) =>
        an({
          target: Rn(e, i),
          destination: n,
          viewport: t.frame,
          withDroppableDisplacement: !0,
        }),
      )
      .sort((t, r) => {
        let a = Tt(e, Tn(n, Ln(t, i))),
          o = Tt(e, Tn(n, Ln(r, i)));
        return a < o ? -1 : o < a ? 1 : t.descriptor.index - r.descriptor.index;
      })[0] || null,
  Bn = V(function (e, t) {
    let n = t[e.line];
    return { value: n, point: B(e.line, n) };
  }),
  Vn = (e, t, n) => {
    let r = e.axis;
    if (e.descriptor.mode === `virtual`) return B(r.line, t[r.line]);
    let i = e.subject.page.contentBox[r.size],
      a =
        H(e.descriptor.id, n).reduce(
          (e, t) => e + t.client.marginBox[r.size],
          0,
        ) +
        t[r.line] -
        i;
    return a <= 0 ? null : B(r.line, a);
  },
  Hn = (e, t) => ({ ...e, scroll: { ...e.scroll, max: t } }),
  Un = (e, t, n) => {
    let r = e.frame;
    U(t, e) && N(), e.subject.withPlaceholder && N();
    let i = Bn(e.axis, t.displaceBy).point,
      a = Vn(e, i, n),
      o = {
        placeholderSize: i,
        increasedBy: a,
        oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
      };
    if (!r) {
      let t = Ft({
        page: e.subject.page,
        withPlaceholder: o,
        axis: e.axis,
        frame: e.frame,
      });
      return { ...e, subject: t };
    }
    let s = Hn(r, a ? L(r.scroll.max, a) : r.scroll.max),
      c = Ft({
        page: e.subject.page,
        withPlaceholder: o,
        axis: e.axis,
        frame: s,
      });
    return { ...e, subject: c, frame: s };
  },
  Wn = (e) => {
    let t = e.subject.withPlaceholder;
    !t && N();
    let n = e.frame;
    if (!n) {
      let t = Ft({
        page: e.subject.page,
        axis: e.axis,
        frame: null,
        withPlaceholder: null,
      });
      return { ...e, subject: t };
    }
    let r = t.oldFrameMaxScroll;
    !r && N();
    let i = Hn(n, r),
      a = Ft({
        page: e.subject.page,
        axis: e.axis,
        frame: i,
        withPlaceholder: null,
      });
    return { ...e, subject: a, frame: i };
  },
  Gn = ({
    previousPageBorderBoxCenter: e,
    moveRelativeTo: t,
    insideDestination: n,
    draggable: r,
    draggables: i,
    destination: a,
    viewport: o,
    afterCritical: s,
  }) => {
    if (!t) {
      if (n.length) return null;
      let e = {
          displaced: Kt,
          displacedBy: Gt,
          at: {
            type: `REORDER`,
            destination: { droppableId: a.descriptor.id, index: 0 },
          },
        },
        t = Dn({
          impact: e,
          draggable: r,
          droppable: a,
          draggables: i,
          afterCritical: s,
        });
      return Pn({
        draggable: r,
        destination: U(r, a) ? a : Un(a, r, i),
        newPageBorderBoxCenter: t,
        viewport: o.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? e
        : null;
    }
    let c = e[a.axis.line] <= t.page.borderBox.center[a.axis.line],
      l = (() => {
        let e = t.descriptor.index;
        return t.descriptor.id === r.descriptor.id || c ? e : e + 1;
      })();
    return fn({
      draggable: r,
      insideDestination: n,
      destination: a,
      viewport: o,
      displacedBy: Bn(a.axis, r.displaceBy),
      last: Kt,
      index: l,
    });
  },
  Kn = ({
    isMovingForward: e,
    previousPageBorderBoxCenter: t,
    draggable: n,
    isOver: r,
    draggables: i,
    droppables: a,
    viewport: o,
    afterCritical: s,
  }) => {
    let c = In({
      isMovingForward: e,
      pageBorderBoxCenter: t,
      source: r,
      droppables: a,
      viewport: o,
    });
    if (!c) return null;
    let l = H(c.descriptor.id, i),
      u = Gn({
        previousPageBorderBoxCenter: t,
        destination: c,
        draggable: n,
        draggables: i,
        moveRelativeTo: zn({
          pageBorderBoxCenter: t,
          viewport: o,
          destination: c,
          insideDestination: l,
          afterCritical: s,
        }),
        insideDestination: l,
        viewport: o,
        afterCritical: s,
      });
    return u
      ? {
          clientSelection: Nn({
            pageBorderBoxCenter: Dn({
              impact: u,
              draggable: n,
              droppable: c,
              draggables: i,
              afterCritical: s,
            }),
            draggable: n,
            viewport: o,
          }),
          impact: u,
          scrollJumpRequest: null,
        }
      : null;
  },
  q = (e) => {
    let t = e.at;
    return t
      ? t.type === `REORDER`
        ? t.destination.droppableId
        : t.combine.droppableId
      : null;
  },
  qn = (e, t) => {
    let n = q(e);
    return n ? t[n] : null;
  },
  Jn = ({ state: e, type: t }) => {
    let n = qn(e.impact, e.dimensions.droppables),
      r = !!n,
      i = e.dimensions.droppables[e.critical.droppable.id],
      a = n || i,
      o = a.axis.direction,
      s =
        (o === `vertical` && (t === `MOVE_UP` || t === `MOVE_DOWN`)) ||
        (o === `horizontal` && (t === `MOVE_LEFT` || t === `MOVE_RIGHT`));
    if (s && !r) return null;
    let c = t === `MOVE_DOWN` || t === `MOVE_RIGHT`,
      l = e.dimensions.draggables[e.critical.draggable.id],
      u = e.current.page.borderBoxCenter,
      { draggables: d, droppables: f } = e.dimensions;
    return s
      ? Fn({
          isMovingForward: c,
          previousPageBorderBoxCenter: u,
          draggable: l,
          destination: a,
          draggables: d,
          viewport: e.viewport,
          previousClientSelection: e.current.client.selection,
          previousImpact: e.impact,
          afterCritical: e.afterCritical,
        })
      : Kn({
          isMovingForward: c,
          previousPageBorderBoxCenter: u,
          draggable: l,
          isOver: a,
          draggables: d,
          droppables: f,
          viewport: e.viewport,
          afterCritical: e.afterCritical,
        });
  };
function J(e) {
  return e.phase === `DRAGGING` || e.phase === `COLLECTING`;
}
function Yn(e) {
  let t = W(e.top, e.bottom),
    n = W(e.left, e.right);
  return function (e) {
    return t(e.y) && n(e.x);
  };
}
function Xn(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function Zn({ pageBorderBox: e, draggable: t, candidates: n }) {
  let r = t.page.borderBox.center,
    i = n
      .map((t) => {
        let n = t.axis,
          i = B(
            t.axis.line,
            e.center[n.line],
            t.page.borderBox.center[n.crossAxisLine],
          );
        return { id: t.descriptor.id, distance: Tt(r, i) };
      })
      .sort((e, t) => t.distance - e.distance);
  return i[0] ? i[0].id : null;
}
function Qn({ pageBorderBox: e, draggable: t, droppables: n }) {
  let r = zt(n).filter((t) => {
    if (!t.isEnabled) return !1;
    let n = t.subject.active;
    if (!n || !Xn(e, n)) return !1;
    if (Yn(n)(e.center)) return !0;
    let r = t.axis,
      i = n.center[r.crossAxisLine],
      a = e[r.crossAxisStart],
      o = e[r.crossAxisEnd],
      s = W(n[r.crossAxisStart], n[r.crossAxisEnd]),
      c = s(a),
      l = s(o);
    return !c && !l ? !0 : c ? a < i : o > i;
  });
  return r.length
    ? r.length === 1
      ? r[0].descriptor.id
      : Zn({ pageBorderBox: e, draggable: t, candidates: r })
    : null;
}
var $n = (e, t) => k(kt(e, t)),
  er = (e, t) => {
    let n = e.frame;
    return n ? $n(t, n.scroll.diff.value) : t;
  };
function tr({ displaced: e, id: t }) {
  return !!(e.visible[t] || e.invisible[t]);
}
function nr({ draggable: e, closest: t, inHomeList: n }) {
  return t
    ? n && t.descriptor.index > e.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var rr = ({
    pageBorderBoxWithDroppableScroll: e,
    draggable: t,
    destination: n,
    insideDestination: r,
    last: i,
    viewport: a,
    afterCritical: o,
  }) => {
    let s = n.axis,
      c = Bn(n.axis, t.displaceBy),
      l = c.value,
      u = e[s.start],
      d = e[s.end];
    return fn({
      draggable: t,
      insideDestination: r,
      destination: n,
      viewport: a,
      last: i,
      displacedBy: c,
      index: nr({
        draggable: t,
        closest:
          Ut(t, r).find((e) => {
            let t = e.descriptor.id,
              n = e.page.borderBox.center[s.line],
              r = G(t, o),
              a = tr({ displaced: i, id: t });
            return r ? (a ? d <= n : u < n - l) : a ? d <= n + l : u < n;
          }) || null,
        inHomeList: U(t, n),
      }),
    });
  },
  ir = 4,
  ar = ({
    draggable: e,
    pageBorderBoxWithDroppableScroll: t,
    previousImpact: n,
    destination: r,
    insideDestination: i,
    afterCritical: a,
  }) => {
    if (!r.isCombineEnabled) return null;
    let o = r.axis,
      s = Bn(r.axis, e.displaceBy),
      c = s.value,
      l = t[o.start],
      u = t[o.end],
      d = Ut(e, i).find((e) => {
        let t = e.descriptor.id,
          r = e.page.borderBox,
          i = r[o.size] / ir,
          s = G(t, a),
          d = tr({ displaced: n.displaced, id: t });
        return s
          ? d
            ? u > r[o.start] + i && u < r[o.end] - i
            : l > r[o.start] - c + i && l < r[o.end] - c - i
          : d
            ? u > r[o.start] + c + i && u < r[o.end] + c - i
            : l > r[o.start] + i && l < r[o.end] - i;
      });
    return d
      ? {
          displacedBy: s,
          displaced: n.displaced,
          at: {
            type: `COMBINE`,
            combine: {
              draggableId: d.descriptor.id,
              droppableId: r.descriptor.id,
            },
          },
        }
      : null;
  },
  or = ({
    pageOffset: e,
    draggable: t,
    draggables: n,
    droppables: r,
    previousImpact: i,
    viewport: a,
    afterCritical: o,
  }) => {
    let s = $n(t.page.borderBox, e),
      c = Qn({ pageBorderBox: s, draggable: t, droppables: r });
    if (!c) return qt;
    let l = r[c],
      u = H(l.descriptor.id, n),
      d = er(l, s);
    return (
      ar({
        pageBorderBoxWithDroppableScroll: d,
        draggable: t,
        previousImpact: i,
        destination: l,
        insideDestination: u,
        afterCritical: o,
      }) ||
      rr({
        pageBorderBoxWithDroppableScroll: d,
        draggable: t,
        destination: l,
        insideDestination: u,
        last: i.displaced,
        viewport: a,
        afterCritical: o,
      })
    );
  },
  sr = (e, t) => ({ ...e, [t.descriptor.id]: t }),
  cr = ({ previousImpact: e, impact: t, droppables: n }) => {
    let r = q(e),
      i = q(t);
    if (!r || r === i) return n;
    let a = n[r];
    return a.subject.withPlaceholder ? sr(n, Wn(a)) : n;
  },
  lr = ({
    draggable: e,
    draggables: t,
    droppables: n,
    previousImpact: r,
    impact: i,
  }) => {
    let a = cr({ previousImpact: r, impact: i, droppables: n }),
      o = q(i);
    if (!o) return a;
    let s = n[o];
    return U(e, s) || s.subject.withPlaceholder ? a : sr(a, Un(s, e, t));
  },
  ur = ({
    state: e,
    clientSelection: t,
    dimensions: n,
    viewport: r,
    impact: i,
    scrollJumpRequest: a,
  }) => {
    let o = r || e.viewport,
      s = n || e.dimensions,
      c = t || e.current.client.selection,
      l = R(c, e.initial.client.selection),
      u = {
        offset: l,
        selection: c,
        borderBoxCenter: L(e.initial.client.borderBoxCenter, l),
      },
      d = {
        selection: L(u.selection, o.scroll.current),
        borderBoxCenter: L(u.borderBoxCenter, o.scroll.current),
        offset: L(u.offset, o.scroll.diff.value),
      },
      f = { client: u, page: d };
    if (e.phase === `COLLECTING`)
      return { ...e, dimensions: s, viewport: o, current: f };
    let p = s.draggables[e.critical.draggable.id],
      m =
        i ||
        or({
          pageOffset: d.offset,
          draggable: p,
          draggables: s.draggables,
          droppables: s.droppables,
          previousImpact: e.impact,
          viewport: o,
          afterCritical: e.afterCritical,
        }),
      h = lr({
        draggable: p,
        impact: m,
        previousImpact: e.impact,
        draggables: s.draggables,
        droppables: s.droppables,
      });
    return {
      ...e,
      current: f,
      dimensions: { draggables: s.draggables, droppables: h },
      impact: m,
      viewport: o,
      scrollJumpRequest: a || null,
      forceShouldAnimate: !a && null,
    };
  };
function dr(e, t) {
  return e.map((e) => t[e]);
}
var fr = ({
    impact: e,
    viewport: t,
    draggables: n,
    destination: r,
    forceShouldAnimate: i,
  }) => {
    let a = e.displaced,
      o = ln({
        afterDragging: dr(a.all, n),
        destination: r,
        displacedBy: e.displacedBy,
        viewport: t.frame,
        forceShouldAnimate: i,
        last: a,
      });
    return { ...e, displaced: o };
  },
  pr = ({
    impact: e,
    draggable: t,
    droppable: n,
    draggables: r,
    viewport: i,
    afterCritical: a,
  }) =>
    Nn({
      pageBorderBoxCenter: Dn({
        impact: e,
        draggable: t,
        draggables: r,
        droppable: n,
        afterCritical: a,
      }),
      draggable: t,
      viewport: i,
    }),
  mr = ({ state: e, dimensions: t, viewport: n }) => {
    e.movementMode !== `SNAP` && N();
    let r = e.impact,
      i = n || e.viewport,
      a = t || e.dimensions,
      { draggables: o, droppables: s } = a,
      c = o[e.critical.draggable.id],
      l = q(r);
    !l && N();
    let u = s[l],
      d = fr({ impact: r, viewport: i, destination: u, draggables: o });
    return ur({
      impact: d,
      clientSelection: pr({
        impact: d,
        draggable: c,
        droppable: u,
        draggables: o,
        viewport: i,
        afterCritical: e.afterCritical,
      }),
      state: e,
      dimensions: a,
      viewport: i,
    });
  },
  hr = (e) => ({ index: e.index, droppableId: e.droppableId }),
  gr = ({ draggable: e, home: t, draggables: n, viewport: r }) => {
    let i = Bn(t.axis, e.displaceBy),
      a = H(t.descriptor.id, n),
      o = a.indexOf(e);
    o === -1 && N();
    let s = a.slice(o + 1),
      c = s.reduce((e, t) => ((e[t.descriptor.id] = !0), e), {}),
      l = {
        inVirtualList: t.descriptor.mode === `virtual`,
        displacedBy: i,
        effected: c,
      };
    return {
      impact: {
        displaced: ln({
          afterDragging: s,
          destination: t,
          displacedBy: i,
          last: null,
          viewport: r.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: i,
        at: { type: `REORDER`, destination: hr(e.descriptor) },
      },
      afterCritical: l,
    };
  },
  _r = (e, t) => ({
    draggables: e.draggables,
    droppables: sr(e.droppables, t),
  }),
  vr = ({ draggable: e, offset: t, initialWindowScroll: n }) => {
    let r = it(e.client, t),
      i = at(r, n);
    return {
      ...e,
      placeholder: { ...e.placeholder, client: r },
      client: r,
      page: i,
    };
  },
  yr = (e) => {
    let t = e.frame;
    return !t && N(), t;
  },
  br = ({ additions: e, updatedDroppables: t, viewport: n }) => {
    let r = n.scroll.diff.value;
    return e.map((e) => {
      let i = t[e.descriptor.droppableId],
        a = yr(i).scroll.diff.value;
      return vr({
        draggable: e,
        offset: L(r, a),
        initialWindowScroll: n.scroll.initial,
      });
    });
  },
  xr = ({ state: e, published: t }) => {
    let n = t.modified.map((t) => {
        let n = e.dimensions.droppables[t.droppableId];
        return It(n, t.scroll);
      }),
      r = { ...e.dimensions.droppables, ...Lt(n) },
      i = Rt(
        br({
          additions: t.additions,
          updatedDroppables: r,
          viewport: e.viewport,
        }),
      ),
      a = { ...e.dimensions.draggables, ...i };
    t.removals.forEach((e) => {
      delete a[e];
    });
    let o = { droppables: r, draggables: a },
      s = q(e.impact),
      c = s ? o.droppables[s] : null,
      l = o.draggables[e.critical.draggable.id],
      u = o.droppables[e.critical.droppable.id],
      { impact: d, afterCritical: f } = gr({
        draggable: l,
        home: u,
        draggables: a,
        viewport: e.viewport,
      }),
      p = c && c.isCombineEnabled ? e.impact : d,
      m = or({
        pageOffset: e.current.page.offset,
        draggable: o.draggables[e.critical.draggable.id],
        draggables: o.draggables,
        droppables: o.droppables,
        previousImpact: p,
        viewport: e.viewport,
        afterCritical: f,
      }),
      h = {
        ...e,
        phase: `DRAGGING`,
        impact: m,
        onLiftImpact: d,
        dimensions: o,
        afterCritical: f,
        forceShouldAnimate: !1,
      };
    return e.phase === `COLLECTING`
      ? h
      : { ...h, phase: `DROP_PENDING`, reason: e.reason, isWaiting: !1 };
  },
  Sr = (e) => e.movementMode === `SNAP`,
  Cr = (e, t, n) => {
    let r = _r(e.dimensions, t);
    return !Sr(e) || n
      ? ur({ state: e, dimensions: r })
      : mr({ state: e, dimensions: r });
  };
function wr(e) {
  return e.isDragging && e.movementMode === `SNAP`
    ? { ...e, scrollJumpRequest: null }
    : e;
}
var Tr = { phase: `IDLE`, completed: null, shouldFlush: !1 },
  Er = (e = Tr, t) => {
    if (t.type === `FLUSH`) return { ...Tr, shouldFlush: !0 };
    if (t.type === `INITIAL_PUBLISH`) {
      e.phase !== `IDLE` && N();
      let {
          critical: n,
          clientSelection: r,
          viewport: i,
          dimensions: a,
          movementMode: o,
        } = t.payload,
        s = a.draggables[n.draggable.id],
        c = a.droppables[n.droppable.id],
        l = {
          selection: r,
          borderBoxCenter: s.client.borderBox.center,
          offset: I,
        },
        u = {
          client: l,
          page: {
            selection: L(l.selection, i.scroll.initial),
            borderBoxCenter: L(l.selection, i.scroll.initial),
            offset: L(l.selection, i.scroll.diff.value),
          },
        },
        d = zt(a.droppables).every((e) => !e.isFixedOnPage),
        { impact: f, afterCritical: p } = gr({
          draggable: s,
          home: c,
          draggables: a.draggables,
          viewport: i,
        });
      return {
        phase: `DRAGGING`,
        isDragging: !0,
        critical: n,
        movementMode: o,
        dimensions: a,
        initial: u,
        current: u,
        isWindowScrollAllowed: d,
        impact: f,
        afterCritical: p,
        onLiftImpact: f,
        viewport: i,
        scrollJumpRequest: null,
        forceShouldAnimate: null,
      };
    }
    if (t.type === `COLLECTION_STARTING`)
      return e.phase === `COLLECTING` || e.phase === `DROP_PENDING`
        ? e
        : (e.phase !== `DRAGGING` && N(), { ...e, phase: `COLLECTING` });
    if (t.type === `PUBLISH_WHILE_DRAGGING`)
      return (
        e.phase !== `COLLECTING` && e.phase !== `DROP_PENDING` && N(),
        xr({ state: e, published: t.payload })
      );
    if (t.type === `MOVE`) {
      if (e.phase === `DROP_PENDING`) return e;
      !J(e) && N();
      let { client: n } = t.payload;
      return z(n, e.current.client.selection)
        ? e
        : ur({ state: e, clientSelection: n, impact: Sr(e) ? e.impact : null });
    }
    if (t.type === `UPDATE_DROPPABLE_SCROLL`) {
      if (e.phase === `DROP_PENDING` || e.phase === `COLLECTING`) return wr(e);
      !J(e) && N();
      let { id: n, newScroll: r } = t.payload,
        i = e.dimensions.droppables[n];
      return i ? Cr(e, It(i, r), !1) : e;
    }
    if (t.type === `UPDATE_DROPPABLE_IS_ENABLED`) {
      if (e.phase === `DROP_PENDING`) return e;
      !J(e) && N();
      let { id: n, isEnabled: r } = t.payload,
        i = e.dimensions.droppables[n];
      return (
        !i && N(), i.isEnabled === r && N(), Cr(e, { ...i, isEnabled: r }, !0)
      );
    }
    if (t.type === `UPDATE_DROPPABLE_IS_COMBINE_ENABLED`) {
      if (e.phase === `DROP_PENDING`) return e;
      !J(e) && N();
      let { id: n, isCombineEnabled: r } = t.payload,
        i = e.dimensions.droppables[n];
      return (
        !i && N(),
        i.isCombineEnabled === r && N(),
        Cr(e, { ...i, isCombineEnabled: r }, !0)
      );
    }
    if (t.type === `MOVE_BY_WINDOW_SCROLL`) {
      if (e.phase === `DROP_PENDING` || e.phase === `DROP_ANIMATING`) return e;
      !J(e) && N(), !e.isWindowScrollAllowed && N();
      let n = t.payload.newScroll;
      if (z(e.viewport.scroll.current, n)) return wr(e);
      let r = On(e.viewport, n);
      return Sr(e)
        ? mr({ state: e, viewport: r })
        : ur({ state: e, viewport: r });
    }
    if (t.type === `UPDATE_VIEWPORT_MAX_SCROLL`) {
      if (!J(e)) return e;
      let n = t.payload.maxScroll;
      if (z(n, e.viewport.scroll.max)) return e;
      let r = { ...e.viewport, scroll: { ...e.viewport.scroll, max: n } };
      return { ...e, viewport: r };
    }
    if (
      t.type === `MOVE_UP` ||
      t.type === `MOVE_DOWN` ||
      t.type === `MOVE_LEFT` ||
      t.type === `MOVE_RIGHT`
    ) {
      if (e.phase === `COLLECTING` || e.phase === `DROP_PENDING`) return e;
      e.phase !== `DRAGGING` && N();
      let n = Jn({ state: e, type: t.type });
      return n
        ? ur({
            state: e,
            impact: n.impact,
            clientSelection: n.clientSelection,
            scrollJumpRequest: n.scrollJumpRequest,
          })
        : e;
    }
    if (t.type === `DROP_PENDING`) {
      let n = t.payload.reason;
      return (
        e.phase !== `COLLECTING` && N(),
        { ...e, phase: `DROP_PENDING`, isWaiting: !0, reason: n }
      );
    }
    if (t.type === `DROP_ANIMATE`) {
      let { completed: n, dropDuration: r, newHomeClientOffset: i } = t.payload;
      return (
        e.phase !== `DRAGGING` && e.phase !== `DROP_PENDING` && N(),
        {
          phase: `DROP_ANIMATING`,
          completed: n,
          dropDuration: r,
          newHomeClientOffset: i,
          dimensions: e.dimensions,
        }
      );
    }
    if (t.type === `DROP_COMPLETE`) {
      let { completed: e } = t.payload;
      return { phase: `IDLE`, completed: e, shouldFlush: !1 };
    }
    return e;
  };
function Y(e, t) {
  return e instanceof Object && `type` in e && e.type === t;
}
var Dr = (e) => ({ type: `BEFORE_INITIAL_CAPTURE`, payload: e }),
  Or = (e) => ({ type: `LIFT`, payload: e }),
  kr = (e) => ({ type: `INITIAL_PUBLISH`, payload: e }),
  Ar = (e) => ({ type: `PUBLISH_WHILE_DRAGGING`, payload: e }),
  jr = () => ({ type: `COLLECTION_STARTING`, payload: null }),
  Mr = (e) => ({ type: `UPDATE_DROPPABLE_SCROLL`, payload: e }),
  Nr = (e) => ({ type: `UPDATE_DROPPABLE_IS_ENABLED`, payload: e }),
  Pr = (e) => ({ type: `UPDATE_DROPPABLE_IS_COMBINE_ENABLED`, payload: e }),
  Fr = (e) => ({ type: `MOVE`, payload: e }),
  Ir = (e) => ({ type: `MOVE_BY_WINDOW_SCROLL`, payload: e }),
  Lr = (e) => ({ type: `UPDATE_VIEWPORT_MAX_SCROLL`, payload: e }),
  Rr = () => ({ type: `MOVE_UP`, payload: null }),
  zr = () => ({ type: `MOVE_DOWN`, payload: null }),
  Br = () => ({ type: `MOVE_RIGHT`, payload: null }),
  Vr = () => ({ type: `MOVE_LEFT`, payload: null }),
  Hr = () => ({ type: `FLUSH`, payload: null }),
  Ur = (e) => ({ type: `DROP_ANIMATE`, payload: e }),
  Wr = (e) => ({ type: `DROP_COMPLETE`, payload: e }),
  Gr = (e) => ({ type: `DROP`, payload: e }),
  Kr = (e) => ({ type: `DROP_PENDING`, payload: e }),
  qr = () => ({ type: `DROP_ANIMATION_FINISHED`, payload: null }),
  Jr =
    (e) =>
    ({ getState: t, dispatch: n }) =>
    (r) =>
    (i) => {
      if (!Y(i, `LIFT`)) {
        r(i);
        return;
      }
      let { id: a, clientSelection: o, movementMode: s } = i.payload,
        c = t();
      c.phase === `DROP_ANIMATING` && n(Wr({ completed: c.completed })),
        t().phase !== `IDLE` && N(),
        n(Hr()),
        n(Dr({ draggableId: a, movementMode: s }));
      let l = {
          draggableId: a,
          scrollOptions: { shouldPublishImmediately: s === `SNAP` },
        },
        { critical: u, dimensions: d, viewport: f } = e.startPublishing(l);
      n(
        kr({
          critical: u,
          dimensions: d,
          clientSelection: o,
          movementMode: s,
          viewport: f,
        }),
      );
    },
  Yr = (e) => () => (t) => (n) => {
    Y(n, `INITIAL_PUBLISH`) && e.dragging(),
      Y(n, `DROP_ANIMATE`) && e.dropping(n.payload.completed.result.reason),
      (Y(n, `FLUSH`) || Y(n, `DROP_COMPLETE`)) && e.resting(),
      t(n);
  },
  Xr = {
    outOfTheWay: `cubic-bezier(0.2, 0, 0, 1)`,
    drop: `cubic-bezier(.2,1,.1,1)`,
  },
  Zr = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  Qr = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  X = `${Qr.outOfTheWay}s ${Xr.outOfTheWay}`,
  $r = {
    fluid: `opacity ${X}`,
    snap: `transform ${X}, opacity ${X}`,
    drop: (e) => {
      let t = `${e}s ${Xr.drop}`;
      return `transform ${t}, opacity ${t}`;
    },
    outOfTheWay: `transform ${X}`,
    placeholder: `height ${X}, width ${X}, margin ${X}`,
  },
  ei = (e) => (z(e, I) ? void 0 : `translate(${e.x}px, ${e.y}px)`),
  ti = {
    moveTo: ei,
    drop: (e, t) => {
      let n = ei(e);
      if (n) return t ? `${n} scale(${Zr.scale.drop})` : n;
    },
  },
  { minDropTime: ni, maxDropTime: ri } = Qr,
  ii = ri - ni,
  ai = 1500,
  oi = 0.6,
  si = ({ current: e, destination: t, reason: n }) => {
    let r = Tt(e, t);
    if (r <= 0) return ni;
    if (r >= ai) return ri;
    let i = ni + (r / ai) * ii,
      a = n === `CANCEL` ? i * oi : i;
    return Number(a.toFixed(2));
  },
  ci = ({
    impact: e,
    draggable: t,
    dimensions: n,
    viewport: r,
    afterCritical: i,
  }) => {
    let { draggables: a, droppables: o } = n,
      s = q(e),
      c = s ? o[s] : null,
      l = o[t.descriptor.droppableId];
    return R(
      pr({
        impact: e,
        draggable: t,
        draggables: a,
        afterCritical: i,
        droppable: c || l,
        viewport: r,
      }),
      t.client.borderBox.center,
    );
  },
  li = ({
    draggables: e,
    reason: t,
    lastImpact: n,
    home: r,
    viewport: i,
    onLiftImpact: a,
  }) =>
    !n.at || t !== `DROP`
      ? {
          impact: fr({
            draggables: e,
            impact: a,
            destination: r,
            viewport: i,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : n.at.type === `REORDER`
        ? { impact: n, didDropInsideDroppable: !0 }
        : { impact: { ...n, displaced: Kt }, didDropInsideDroppable: !0 },
  ui =
    ({ getState: e, dispatch: t }) =>
    (n) =>
    (r) => {
      if (!Y(r, `DROP`)) {
        n(r);
        return;
      }
      let i = e(),
        a = r.payload.reason;
      if (i.phase === `COLLECTING`) {
        t(Kr({ reason: a }));
        return;
      }
      if (i.phase === `IDLE`) return;
      i.phase === `DROP_PENDING` && i.isWaiting && N(),
        i.phase !== `DRAGGING` && i.phase !== `DROP_PENDING` && N();
      let o = i.critical,
        s = i.dimensions,
        c = s.draggables[i.critical.draggable.id],
        { impact: l, didDropInsideDroppable: u } = li({
          reason: a,
          lastImpact: i.impact,
          afterCritical: i.afterCritical,
          onLiftImpact: i.onLiftImpact,
          home: i.dimensions.droppables[i.critical.droppable.id],
          viewport: i.viewport,
          draggables: i.dimensions.draggables,
        }),
        d = u ? Vt(l) : null,
        f = u ? Ht(l) : null,
        p = { index: o.draggable.index, droppableId: o.droppable.id },
        m = {
          draggableId: c.descriptor.id,
          type: c.descriptor.type,
          source: p,
          reason: a,
          mode: i.movementMode,
          destination: d,
          combine: f,
        },
        h = ci({
          impact: l,
          draggable: c,
          dimensions: s,
          viewport: i.viewport,
          afterCritical: i.afterCritical,
        }),
        g = {
          critical: i.critical,
          afterCritical: i.afterCritical,
          result: m,
          impact: l,
        };
      z(i.current.client.offset, h) && !m.combine
        ? t(Wr({ completed: g }))
        : t(
            Ur({
              newHomeClientOffset: h,
              dropDuration: si({
                current: i.current.client.offset,
                destination: h,
                reason: a,
              }),
              completed: g,
            }),
          );
    },
  di = (e = window) => ({ x: e.pageXOffset, y: e.pageYOffset });
function fi(e) {
  return {
    eventName: `scroll`,
    options: { passive: !0, capture: !1 },
    fn: (t) => {
      (t.target === window || t.target === window.document) && e();
    },
  };
}
function pi({ onWindowScroll: e }) {
  function t() {
    e(di());
  }
  let n = ct(t),
    r = fi(n),
    i = j;
  function a() {
    return i !== j;
  }
  function o() {
    a() && N(), (i = M(window, [r]));
  }
  function s() {
    !a() && N(), n.cancel(), i(), (i = j);
  }
  return { start: o, stop: s, isActive: a };
}
var mi = (e) => Y(e, `DROP_COMPLETE`) || Y(e, `DROP_ANIMATE`) || Y(e, `FLUSH`),
  hi = (e) => {
    let t = pi({
      onWindowScroll: (t) => {
        e.dispatch(Ir({ newScroll: t }));
      },
    });
    return (e) => (n) => {
      !t.isActive() && Y(n, `INITIAL_PUBLISH`) && t.start(),
        t.isActive() && mi(n) && t.stop(),
        e(n);
    };
  },
  gi = (e) => {
    let t = !1,
      n = !1,
      r = setTimeout(() => {
        n = !0;
      }),
      i = (i) => {
        t || n || ((t = !0), e(i), clearTimeout(r));
      };
    return (i.wasCalled = () => t), i;
  },
  _i = () => {
    let e = [],
      t = (t) => {
        let n = e.findIndex((e) => e.timerId === t);
        n === -1 && N();
        let [r] = e.splice(n, 1);
        r.callback();
      };
    return {
      add: (n) => {
        let r = setTimeout(() => t(r)),
          i = { timerId: r, callback: n };
        e.push(i);
      },
      flush: () => {
        if (!e.length) return;
        let t = [...e];
        (e.length = 0),
          t.forEach((e) => {
            clearTimeout(e.timerId), e.callback();
          });
      },
    };
  },
  vi = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.droppableId === t.droppableId && e.index === t.index,
  yi = (e, t) =>
    e == null && t == null
      ? !0
      : e == null || t == null
        ? !1
        : e.draggableId === t.draggableId && e.droppableId === t.droppableId,
  bi = (e, t) => {
    if (e === t) return !0;
    let n =
        e.draggable.id === t.draggable.id &&
        e.draggable.droppableId === t.draggable.droppableId &&
        e.draggable.type === t.draggable.type &&
        e.draggable.index === t.draggable.index,
      r =
        e.droppable.id === t.droppable.id &&
        e.droppable.type === t.droppable.type;
    return n && r;
  },
  xi = (e, t) => {
    t();
  },
  Si = (e, t) => ({
    draggableId: e.draggable.id,
    type: e.droppable.type,
    source: { droppableId: e.droppable.id, index: e.draggable.index },
    mode: t,
  });
function Ci(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  let i = gi(n);
  e(t, { announce: i }), i.wasCalled() || n(r(t));
}
var wi = (e, t) => {
    let n = _i(),
      r = null,
      i = (t, n) => {
        r && N(),
          xi(`onBeforeCapture`, () => {
            let r = e().onBeforeCapture;
            r && r({ draggableId: t, mode: n });
          });
      },
      a = (t, n) => {
        r && N(),
          xi(`onBeforeDragStart`, () => {
            let r = e().onBeforeDragStart;
            r && r(Si(t, n));
          });
      },
      o = (i, a) => {
        r && N();
        let o = Si(i, a);
        (r = {
          mode: a,
          lastCritical: i,
          lastLocation: o.source,
          lastCombine: null,
        }),
          n.add(() => {
            xi(`onDragStart`, () => Ci(e().onDragStart, o, t, xt.onDragStart));
          });
      },
      s = (i, a) => {
        let o = Vt(a),
          s = Ht(a);
        !r && N();
        let c = !bi(i, r.lastCritical);
        c && (r.lastCritical = i);
        let l = !vi(r.lastLocation, o);
        l && (r.lastLocation = o);
        let u = !yi(r.lastCombine, s);
        if ((u && (r.lastCombine = s), !c && !l && !u)) return;
        let d = { ...Si(i, r.mode), combine: s, destination: o };
        n.add(() => {
          xi(`onDragUpdate`, () => Ci(e().onDragUpdate, d, t, xt.onDragUpdate));
        });
      },
      c = () => {
        !r && N(), n.flush();
      },
      l = (n) => {
        !r && N(),
          (r = null),
          xi(`onDragEnd`, () => Ci(e().onDragEnd, n, t, xt.onDragEnd));
      };
    return {
      beforeCapture: i,
      beforeStart: a,
      start: o,
      update: s,
      flush: c,
      drop: l,
      abort: () => {
        if (!r) return;
        let e = {
          ...Si(r.lastCritical, r.mode),
          combine: null,
          destination: null,
          reason: `CANCEL`,
        };
        l(e);
      },
    };
  },
  Ti = (e, t) => {
    let n = wi(e, t);
    return (e) => (t) => (r) => {
      if (Y(r, `BEFORE_INITIAL_CAPTURE`)) {
        n.beforeCapture(r.payload.draggableId, r.payload.movementMode);
        return;
      }
      if (Y(r, `INITIAL_PUBLISH`)) {
        let e = r.payload.critical;
        n.beforeStart(e, r.payload.movementMode),
          t(r),
          n.start(e, r.payload.movementMode);
        return;
      }
      if (Y(r, `DROP_COMPLETE`)) {
        let e = r.payload.completed.result;
        n.flush(), t(r), n.drop(e);
        return;
      }
      if ((t(r), Y(r, `FLUSH`))) {
        n.abort();
        return;
      }
      let i = e.getState();
      i.phase === `DRAGGING` && n.update(i.critical, i.impact);
    };
  },
  Ei = (e) => (t) => (n) => {
    if (!Y(n, `DROP_ANIMATION_FINISHED`)) {
      t(n);
      return;
    }
    let r = e.getState();
    r.phase !== `DROP_ANIMATING` && N(),
      e.dispatch(Wr({ completed: r.completed }));
  },
  Di = (e) => {
    let t = null,
      n = null;
    function r() {
      (n &&= (cancelAnimationFrame(n), null)), (t &&= (t(), null));
    }
    return (i) => (a) => {
      if (
        ((Y(a, `FLUSH`) ||
          Y(a, `DROP_COMPLETE`) ||
          Y(a, `DROP_ANIMATION_FINISHED`)) &&
          r(),
        i(a),
        !Y(a, `DROP_ANIMATE`))
      )
        return;
      let o = {
        eventName: `scroll`,
        options: { capture: !0, passive: !1, once: !0 },
        fn: function () {
          e.getState().phase === `DROP_ANIMATING` && e.dispatch(qr());
        },
      };
      n = requestAnimationFrame(() => {
        (n = null), (t = M(window, [o]));
      });
    };
  },
  Oi = (e) => () => (t) => (n) => {
    (Y(n, `DROP_COMPLETE`) || Y(n, `FLUSH`) || Y(n, `DROP_ANIMATE`)) &&
      e.stopPublishing(),
      t(n);
  },
  ki = (e) => {
    let t = !1;
    return () => (n) => (r) => {
      if (Y(r, `INITIAL_PUBLISH`))
        (t = !0),
          e.tryRecordFocus(r.payload.critical.draggable.id),
          n(r),
          e.tryRestoreFocusRecorded();
      else if ((n(r), t)) {
        if (Y(r, `FLUSH`)) (t = !1), e.tryRestoreFocusRecorded();
        else if (Y(r, `DROP_COMPLETE`)) {
          t = !1;
          let n = r.payload.completed.result;
          n.combine && e.tryShiftRecord(n.draggableId, n.combine.draggableId),
            e.tryRestoreFocusRecorded();
        }
      }
    };
  },
  Ai = (e) => Y(e, `DROP_COMPLETE`) || Y(e, `DROP_ANIMATE`) || Y(e, `FLUSH`),
  ji = (e) => (t) => (n) => (r) => {
    if (Ai(r)) e.stop(), n(r);
    else if (Y(r, `INITIAL_PUBLISH`)) {
      n(r);
      let i = t.getState();
      i.phase !== `DRAGGING` && N(), e.start(i);
    } else n(r), e.scroll(t.getState());
  },
  Mi = (e) => (t) => (n) => {
    if ((t(n), !Y(n, `PUBLISH_WHILE_DRAGGING`))) return;
    let r = e.getState();
    r.phase === `DROP_PENDING` &&
      (r.isWaiting || e.dispatch(Gr({ reason: r.reason })));
  },
  Ni = g,
  Pi = ({
    dimensionMarshal: e,
    focusMarshal: t,
    styleMarshal: n,
    getResponders: r,
    announce: i,
    autoScroller: a,
  }) =>
    p(
      Er,
      Ni(_(Yr(n), Oi(e), Jr(e), ui, Ei, Di, Mi, ji(a), hi, ki(t), Ti(r, i))),
    ),
  Fi = () => ({ additions: {}, removals: {}, modified: {} });
function Ii({ registry: e, callbacks: t }) {
  let n = Fi(),
    r = null,
    i = () => {
      r ||=
        (t.collectionStarting(),
        requestAnimationFrame(() => {
          r = null;
          let { additions: i, removals: a, modified: o } = n,
            s = Object.keys(i)
              .map((t) => e.draggable.getById(t).getDimension(I))
              .sort((e, t) => e.descriptor.index - t.descriptor.index),
            c = Object.keys(o).map((t) => ({
              droppableId: t,
              scroll: e.droppable.getById(t).callbacks.getScrollWhileDragging(),
            })),
            l = { additions: s, removals: Object.keys(a), modified: c };
          (n = Fi()), t.publish(l);
        }));
    };
  return {
    add: (e) => {
      let t = e.descriptor.id;
      (n.additions[t] = e),
        (n.modified[e.descriptor.droppableId] = !0),
        n.removals[t] && delete n.removals[t],
        i();
    },
    remove: (e) => {
      let t = e.descriptor;
      (n.removals[t.id] = !0),
        (n.modified[t.droppableId] = !0),
        n.additions[t.id] && delete n.additions[t.id],
        i();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), (r = null), (n = Fi()));
    },
  };
}
var Li = ({ scrollHeight: e, scrollWidth: t, height: n, width: r }) => {
    let i = R({ x: t, y: e }, { x: r, y: n });
    return { x: Math.max(0, i.x), y: Math.max(0, i.y) };
  },
  Ri = (e = window) => {
    let t = e.document.documentElement;
    return !t && N(), t;
  },
  zi = (e = window) => {
    let t = Ri(e);
    return Li({
      scrollHeight: t.scrollHeight,
      scrollWidth: t.scrollWidth,
      width: t.clientWidth,
      height: t.clientHeight,
    });
  },
  Bi = (e = window) => {
    let t = di(e),
      n = zi(e),
      r = t.y,
      i = t.x,
      a = Ri(e),
      o = a.clientWidth,
      s = a.clientHeight;
    return {
      frame: k({ top: r, left: i, right: i + o, bottom: r + s }),
      scroll: {
        initial: t,
        current: t,
        max: n,
        diff: { value: I, displacement: I },
      },
    };
  },
  Vi = ({ windowToUse: e, critical: t, scrollOptions: n, registry: r }) => {
    let i = Bi(e),
      a = i.scroll.current,
      o = t.droppable,
      s = r.droppable
        .getAllByType(o.type)
        .map((e) => e.callbacks.getDimensionAndWatchScroll(a, n));
    return {
      dimensions: {
        draggables: Rt(
          r.draggable
            .getAllByType(t.draggable.type)
            .map((e) => e.getDimension(a)),
        ),
        droppables: Lt(s),
      },
      critical: t,
      viewport: i,
    };
  };
function Hi(e, t, n) {
  return (
    n.descriptor.id !== t.id &&
    n.descriptor.type === t.type &&
    e.droppable.getById(n.descriptor.droppableId).descriptor.mode === `virtual`
  );
}
var Ui = (e, t, n) => {
    let r = null,
      i = Ii({
        callbacks: {
          publish: n.publishWhileDragging,
          collectionStarting: n.collectionStarting,
        },
        registry: t,
      }),
      a = (e, i) => {
        !t.droppable.exists(e) && N(),
          r && n.updateDroppableIsEnabled({ id: e, isEnabled: i });
      },
      o = (e, i) => {
        r &&
          (!t.droppable.exists(e) && N(),
          n.updateDroppableIsCombineEnabled({ id: e, isCombineEnabled: i }));
      },
      s = (e, i) => {
        r &&
          (!t.droppable.exists(e) && N(),
          n.updateDroppableScroll({ id: e, newScroll: i }));
      },
      c = (e, n) => {
        r && t.droppable.getById(e).callbacks.scroll(n);
      },
      l = () => {
        if (!r) return;
        i.stop();
        let e = r.critical.droppable;
        t.droppable
          .getAllByType(e.type)
          .forEach((e) => e.callbacks.dragStopped()),
          r.unsubscribe(),
          (r = null);
      },
      u = (e) => {
        !r && N();
        let n = r.critical.draggable;
        e.type === `ADDITION` && Hi(t, n, e.value) && i.add(e.value),
          e.type === `REMOVAL` && Hi(t, n, e.value) && i.remove(e.value);
      };
    return {
      updateDroppableIsEnabled: a,
      updateDroppableIsCombineEnabled: o,
      scrollDroppable: c,
      updateDroppableScroll: s,
      startPublishing: (n) => {
        r && N();
        let i = t.draggable.getById(n.draggableId),
          a = t.droppable.getById(i.descriptor.droppableId),
          o = { draggable: i.descriptor, droppable: a.descriptor };
        return (
          (r = { critical: o, unsubscribe: t.subscribe(u) }),
          Vi({
            windowToUse: e(),
            critical: o,
            registry: t,
            scrollOptions: n.scrollOptions,
          })
        );
      },
      stopPublishing: l,
    };
  },
  Wi = (e, t) =>
    e.phase === `IDLE`
      ? !0
      : e.phase !== `DROP_ANIMATING` || e.completed.result.draggableId === t
        ? !1
        : e.completed.result.reason === `DROP`,
  Gi = (e) => {
    window.scrollBy(e.x, e.y);
  },
  Ki = V((e) => zt(e).filter((e) => !(!e.isEnabled || !e.frame))),
  qi = (e, t) =>
    Ki(t).find((t) => (!t.frame && N(), Yn(t.frame.pageMarginBox)(e))) || null,
  Ji = ({ center: e, destination: t, droppables: n }) => {
    if (t) {
      let e = n[t];
      return e.frame ? e : null;
    }
    return qi(e, n);
  },
  Yi = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (e) => e ** 2,
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
    disabled: !1,
  },
  Xi = (e, t, n = () => Yi) => {
    let r = n();
    return {
      startScrollingFrom: e[t.size] * r.startFromPercentage,
      maxScrollValueAt: e[t.size] * r.maxScrollAtPercentage,
    };
  },
  Zi = ({ startOfRange: e, endOfRange: t, current: n }) => {
    let r = t - e;
    return r === 0 ? 0 : (n - e) / r;
  },
  Qi = 1,
  $i = (e, t, n = () => Yi) => {
    let r = n();
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return r.maxPixelScroll;
    if (e === t.startScrollingFrom) return Qi;
    let i =
        1 -
        Zi({
          startOfRange: t.maxScrollValueAt,
          endOfRange: t.startScrollingFrom,
          current: e,
        }),
      a = r.maxPixelScroll * r.ease(i);
    return Math.ceil(a);
  },
  ea = (e, t, n) => {
    let r = n(),
      i = r.durationDampening.accelerateAt,
      a = r.durationDampening.stopDampeningAt,
      o = t,
      s = a,
      c = Date.now() - o;
    if (c >= a) return e;
    if (c < i) return Qi;
    let l = Zi({ startOfRange: i, endOfRange: s, current: c }),
      u = e * r.ease(l);
    return Math.ceil(u);
  },
  ta = ({
    distanceToEdge: e,
    thresholds: t,
    dragStartTime: n,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i,
  }) => {
    let a = $i(e, t, i);
    return a === 0 ? 0 : r ? Math.max(ea(a, n, i), Qi) : a;
  },
  na = ({
    container: e,
    distanceToEdges: t,
    dragStartTime: n,
    axis: r,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a,
  }) => {
    let o = Xi(e, r, a);
    return t[r.end] < t[r.start]
      ? ta({
          distanceToEdge: t[r.end],
          thresholds: o,
          dragStartTime: n,
          shouldUseTimeDampening: i,
          getAutoScrollerOptions: a,
        })
      : -1 *
          ta({
            distanceToEdge: t[r.start],
            thresholds: o,
            dragStartTime: n,
            shouldUseTimeDampening: i,
            getAutoScrollerOptions: a,
          });
  },
  ra = ({ container: e, subject: t, proposedScroll: n }) => {
    let r = t.height > e.height,
      i = t.width > e.width;
    return !i && !r ? n : i && r ? null : { x: i ? 0 : n.x, y: r ? 0 : n.y };
  },
  ia = Dt((e) => (e === 0 ? 0 : e)),
  aa = ({
    dragStartTime: e,
    container: t,
    subject: n,
    center: r,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a,
  }) => {
    let o = {
        top: r.y - t.top,
        right: t.right - r.x,
        bottom: t.bottom - r.y,
        left: r.x - t.left,
      },
      s = na({
        container: t,
        distanceToEdges: o,
        dragStartTime: e,
        axis: Xt,
        shouldUseTimeDampening: i,
        getAutoScrollerOptions: a,
      }),
      c = ia({
        x: na({
          container: t,
          distanceToEdges: o,
          dragStartTime: e,
          axis: Zt,
          shouldUseTimeDampening: i,
          getAutoScrollerOptions: a,
        }),
        y: s,
      });
    if (z(c, I)) return null;
    let l = ra({ container: t, subject: n, proposedScroll: c });
    return l ? (z(l, I) ? null : l) : null;
  },
  oa = Dt((e) => (e === 0 ? 0 : e > 0 ? 1 : -1)),
  sa = (() => {
    let e = (e, t) => (e < 0 ? e : e > t ? e - t : 0);
    return ({ current: t, max: n, change: r }) => {
      let i = L(t, r),
        a = { x: e(i.x, n.x), y: e(i.y, n.y) };
      return z(a, I) ? null : a;
    };
  })(),
  ca = ({ max: e, current: t, change: n }) => {
    let r = { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
      i = oa(n),
      a = sa({ max: r, current: t, change: i });
    return !a || (i.x !== 0 && a.x === 0) || (i.y !== 0 && a.y === 0);
  },
  la = (e, t) =>
    ca({ current: e.scroll.current, max: e.scroll.max, change: t }),
  ua = (e, t) => {
    if (!la(e, t)) return null;
    let n = e.scroll.max,
      r = e.scroll.current;
    return sa({ current: r, max: n, change: t });
  },
  da = (e, t) => {
    let n = e.frame;
    return n
      ? ca({ current: n.scroll.current, max: n.scroll.max, change: t })
      : !1;
  },
  fa = (e, t) => {
    let n = e.frame;
    return !n || !da(e, t)
      ? null
      : sa({ current: n.scroll.current, max: n.scroll.max, change: t });
  },
  pa = ({
    viewport: e,
    subject: t,
    center: n,
    dragStartTime: r,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a,
  }) => {
    let o = aa({
      dragStartTime: r,
      container: e.frame,
      subject: t,
      center: n,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: a,
    });
    return o && la(e, o) ? o : null;
  },
  ma = ({
    droppable: e,
    subject: t,
    center: n,
    dragStartTime: r,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a,
  }) => {
    let o = e.frame;
    if (!o) return null;
    let s = aa({
      dragStartTime: r,
      container: o.pageMarginBox,
      subject: t,
      center: n,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: a,
    });
    return s && da(e, s) ? s : null;
  },
  ha = ({
    state: e,
    dragStartTime: t,
    shouldUseTimeDampening: n,
    scrollWindow: r,
    scrollDroppable: i,
    getAutoScrollerOptions: a,
  }) => {
    let o = e.current.page.borderBoxCenter,
      s = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
    if (e.isWindowScrollAllowed) {
      let i = e.viewport,
        c = pa({
          dragStartTime: t,
          viewport: i,
          subject: s,
          center: o,
          shouldUseTimeDampening: n,
          getAutoScrollerOptions: a,
        });
      if (c) {
        r(c);
        return;
      }
    }
    let c = Ji({
      center: o,
      destination: q(e.impact),
      droppables: e.dimensions.droppables,
    });
    if (!c) return;
    let l = ma({
      dragStartTime: t,
      droppable: c,
      subject: s,
      center: o,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: a,
    });
    l && i(c.descriptor.id, l);
  },
  ga = ({
    scrollWindow: e,
    scrollDroppable: t,
    getAutoScrollerOptions: n = () => Yi,
  }) => {
    let r = ct(e),
      i = ct(t),
      a = null,
      o = (e) => {
        !a && N();
        let { shouldUseTimeDampening: t, dragStartTime: o } = a;
        ha({
          state: e,
          scrollWindow: r,
          scrollDroppable: i,
          dragStartTime: o,
          shouldUseTimeDampening: t,
          getAutoScrollerOptions: n,
        });
      };
    return {
      start: (e) => {
        a && N();
        let t = Date.now(),
          r = !1,
          i = () => {
            r = !0;
          };
        ha({
          state: e,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: i,
          scrollDroppable: i,
          getAutoScrollerOptions: n,
        }),
          (a = { dragStartTime: t, shouldUseTimeDampening: r }),
          r && o(e);
      },
      stop: () => {
        a &&= (r.cancel(), i.cancel(), null);
      },
      scroll: o,
    };
  },
  _a = ({ move: e, scrollDroppable: t, scrollWindow: n }) => {
    let r = (t, n) => {
        e({ client: L(t.current.client.selection, n) });
      },
      i = (e, n) => {
        if (!da(e, n)) return n;
        let r = fa(e, n);
        if (!r) return t(e.descriptor.id, n), null;
        let i = R(n, r);
        return t(e.descriptor.id, i), R(n, i);
      },
      a = (e, t, r) => {
        if (!e || !la(t, r)) return r;
        let i = ua(t, r);
        if (!i) return n(r), null;
        let a = R(r, i);
        return n(a), R(r, a);
      };
    return (e) => {
      let t = e.scrollJumpRequest;
      if (!t) return;
      let n = q(e.impact);
      !n && N();
      let o = i(e.dimensions.droppables[n], t);
      if (!o) return;
      let s = e.viewport,
        c = a(e.isWindowScrollAllowed, s, o);
      c && r(e, c);
    };
  },
  va = ({
    scrollDroppable: e,
    scrollWindow: t,
    move: n,
    getAutoScrollerOptions: r,
  }) => {
    let i = ga({
        scrollWindow: t,
        scrollDroppable: e,
        getAutoScrollerOptions: r,
      }),
      a = _a({ move: n, scrollWindow: t, scrollDroppable: e });
    return {
      scroll: (e) => {
        r().disabled ||
          e.phase !== `DRAGGING` ||
          (e.movementMode === `FLUID`
            ? i.scroll(e)
            : e.scrollJumpRequest && a(e));
      },
      start: i.start,
      stop: i.stop,
    };
  },
  Z = `data-rfd`,
  Q = (() => {
    let e = `${Z}-drag-handle`;
    return {
      base: e,
      draggableId: `${e}-draggable-id`,
      contextId: `${e}-context-id`,
    };
  })(),
  ya = (() => {
    let e = `${Z}-draggable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  ba = (() => {
    let e = `${Z}-droppable`;
    return { base: e, contextId: `${e}-context-id`, id: `${e}-id` };
  })(),
  xa = { contextId: `${Z}-scroll-container-context-id` },
  Sa = (e) => (t) => `[${t}="${e}"]`,
  Ca = (e, t) =>
    e
      .map((e) => {
        let n = e.styles[t];
        return n ? `${e.selector} { ${n} }` : ``;
      })
      .join(` `),
  wa = `pointer-events: none;`,
  Ta = (e) => {
    let t = Sa(e),
      n = (() => {
        let e = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: t(Q.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: e,
            dragging: wa,
            dropAnimating: e,
          },
        };
      })(),
      r = [
        (() => {
          let e = `
      transition: ${$r.outOfTheWay};
    `;
          return {
            selector: t(ya.contextId),
            styles: { dragging: e, dropAnimating: e, userCancel: e },
          };
        })(),
        n,
        {
          selector: t(ba.contextId),
          styles: { always: `overflow-anchor: none;` },
        },
        {
          selector: `body, :host`,
          styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
          },
        },
      ];
    return {
      always: Ca(r, `always`),
      resting: Ca(r, `resting`),
      dragging: Ca(r, `dragging`),
      dropAnimating: Ca(r, `dropAnimating`),
      userCancel: Ca(r, `userCancel`),
    };
  },
  $ =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0
      ? o.useLayoutEffect
      : o.useEffect,
  Ea = (e) => {
    let t = e || document.querySelector(`head`);
    return !t && N(), t;
  },
  Da = (e) => {
    let t = document.createElement(`style`);
    return e && t.setAttribute(`nonce`, e), (t.type = `text/css`), t;
  };
function Oa(e, t, n) {
  let r = P(() => Ta(e), [e]),
    i = (0, o.useRef)(null),
    a = (0, o.useRef)(null),
    s = F(
      V((e) => {
        let t = a.current;
        !t && N(), (t.textContent = e);
      }),
      [],
    ),
    c = F((e) => {
      let t = i.current;
      !t && N(), (t.textContent = e);
    }, []);
  $(() => {
    (i.current || a.current) && N();
    let o = Da(t),
      l = Da(t);
    (i.current = o),
      (a.current = l),
      o.setAttribute(`${Z}-always`, e),
      l.setAttribute(`${Z}-dynamic`, e);
    let u = Ea(n);
    return (
      u.appendChild(o),
      u.appendChild(l),
      c(r.always),
      s(r.resting),
      () => {
        let e = (e) => {
          let t = e.current;
          !t && N(), u.removeChild(t), (e.current = null);
        };
        e(i), e(a);
      }
    );
  }, [t, c, s, r.always, r.resting, e, n]);
  let l = F(() => s(r.dragging), [s, r.dragging]),
    u = F(
      (e) => {
        s(e === `DROP` ? r.dropAnimating : r.userCancel);
      },
      [s, r.dropAnimating, r.userCancel],
    ),
    d = F(() => {
      a.current && s(r.resting);
    }, [s, r.resting]);
  return P(() => ({ dragging: l, dropping: u, resting: d }), [l, u, d]);
}
function ka(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function Aa(e) {
  return (e.composedPath && e.composedPath()[0]) || e.target;
}
function ja(e) {
  let t = e && e.composedPath && e.composedPath()[0];
  return (t && t.getRootNode()) || document;
}
function Ma(e, t, n) {
  let r = e && e.getRootNode(),
    i = r && r.querySelectorAll ? r : document,
    a = ka(i, t).find(n);
  return !a && i.host ? Ma(i.host, t, n) : a;
}
var Na = (e) =>
  e && e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView
    : window;
function Pa(e) {
  return e instanceof Na(e).HTMLElement;
}
function Fa(e, t, n) {
  let r = Ma(
    n,
    `[${Q.contextId}="${e}"]`,
    (e) => e.getAttribute(Q.draggableId) === t,
  );
  return !r || !Pa(r) ? null : r;
}
function Ia(e) {
  let t = (0, o.useRef)({}),
    n = (0, o.useRef)(null),
    r = (0, o.useRef)(null),
    i = (0, o.useRef)(!1),
    a = F(function (e, n) {
      let r = { id: e, focus: n };
      return (
        (t.current[e] = r),
        function () {
          let n = t.current;
          n[e] !== r && delete n[e];
        }
      );
    }, []),
    s = F(
      function (t) {
        let n = Fa(e, t);
        n && n !== document.activeElement && n.focus();
      },
      [e],
    ),
    c = F(function (e, t) {
      n.current === e && (n.current = t);
    }, []),
    l = F(
      function () {
        r.current ||
          (i.current &&
            (r.current = requestAnimationFrame(() => {
              r.current = null;
              let e = n.current;
              e && s(e);
            })));
      },
      [s],
    ),
    u = F(function (e) {
      n.current = null;
      let t = document.activeElement;
      t && t.getAttribute(Q.draggableId) === e && (n.current = e);
    }, []);
  return (
    $(
      () => (
        (i.current = !0),
        function () {
          i.current = !1;
          let e = r.current;
          e && cancelAnimationFrame(e);
        }
      ),
      [],
    ),
    P(
      () => ({
        register: a,
        tryRecordFocus: u,
        tryRestoreFocusRecorded: l,
        tryShiftRecord: c,
      }),
      [a, u, l, c],
    )
  );
}
function La() {
  let e = { draggables: {}, droppables: {} },
    t = [];
  function n(e) {
    return (
      t.push(e),
      function () {
        let n = t.indexOf(e);
        n !== -1 && t.splice(n, 1);
      }
    );
  }
  function r(e) {
    t.length && t.forEach((t) => t(e));
  }
  function i(t) {
    return e.draggables[t] || null;
  }
  function a(e) {
    let t = i(e);
    return !t && N(), t;
  }
  let o = {
    register: (t) => {
      (e.draggables[t.descriptor.id] = t), r({ type: `ADDITION`, value: t });
    },
    update: (t, n) => {
      let r = e.draggables[n.descriptor.id];
      r &&
        r.uniqueId === t.uniqueId &&
        (delete e.draggables[n.descriptor.id],
        (e.draggables[t.descriptor.id] = t));
    },
    unregister: (t) => {
      let n = t.descriptor.id,
        a = i(n);
      a &&
        t.uniqueId === a.uniqueId &&
        (delete e.draggables[n],
        e.droppables[t.descriptor.droppableId] &&
          r({ type: `REMOVAL`, value: t }));
    },
    getById: a,
    findById: i,
    exists: (e) => !!i(e),
    getAllByType: (t) =>
      Object.values(e.draggables).filter((e) => e.descriptor.type === t),
  };
  function s(t) {
    return e.droppables[t] || null;
  }
  function c(e) {
    let t = s(e);
    return !t && N(), t;
  }
  let l = {
    register: (t) => {
      e.droppables[t.descriptor.id] = t;
    },
    unregister: (t) => {
      let n = s(t.descriptor.id);
      n && t.uniqueId === n.uniqueId && delete e.droppables[t.descriptor.id];
    },
    getById: c,
    findById: s,
    exists: (e) => !!s(e),
    getAllByType: (t) =>
      Object.values(e.droppables).filter((e) => e.descriptor.type === t),
  };
  function u() {
    (e.draggables = {}), (e.droppables = {}), (t.length = 0);
  }
  return { draggable: o, droppable: l, subscribe: n, clean: u };
}
function Ra() {
  let e = P(La, []);
  return (
    (0, o.useEffect)(
      () =>
        function () {
          e.clean();
        },
      [e],
    ),
    e
  );
}
var za = o.createContext(null),
  Ba = () => {
    let e = document.body;
    return !e && N(), e;
  },
  Va = {
    position: `absolute`,
    width: `1px`,
    height: `1px`,
    margin: `-1px`,
    border: `0`,
    padding: `0`,
    overflow: `hidden`,
    clip: `rect(0 0 0 0)`,
    "clip-path": `inset(100%)`,
  },
  Ha = (e) => `rfd-announcement-${e}`;
function Ua(e) {
  let t = P(() => Ha(e), [e]),
    n = (0, o.useRef)(null);
  return (
    (0, o.useEffect)(
      function () {
        let e = document.createElement(`div`);
        return (
          (n.current = e),
          (e.id = t),
          e.setAttribute(`aria-live`, `assertive`),
          e.setAttribute(`aria-atomic`, `true`),
          r(e.style, Va),
          Ba().appendChild(e),
          function () {
            setTimeout(function () {
              let t = Ba();
              t.contains(e) && t.removeChild(e),
                e === n.current && (n.current = null);
            });
          }
        );
      },
      [t],
    ),
    F((e) => {
      let t = n.current;
      t && (t.textContent = e);
    }, [])
  );
}
var Wa = { separator: `::` };
function Ga(e, t = Wa) {
  let n = o.useId();
  return P(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
function Ka({ contextId: e, uniqueId: t }) {
  return `rfd-hidden-text-${e}-${t}`;
}
function qa({ contextId: e, text: t }) {
  let n = Ga(`hidden-text`, { separator: `-` }),
    r = P(() => Ka({ contextId: e, uniqueId: n }), [n, e]);
  return (
    (0, o.useEffect)(
      function () {
        let e = document.createElement(`div`);
        return (
          (e.id = r),
          (e.textContent = t),
          (e.style.display = `none`),
          Ba().appendChild(e),
          function () {
            let t = Ba();
            t.contains(e) && t.removeChild(e);
          }
        );
      },
      [r, t],
    ),
    r
  );
}
var Ja = o.createContext(null);
function Ya(e) {
  let t = (0, o.useRef)(e);
  return (
    (0, o.useEffect)(() => {
      t.current = e;
    }),
    t
  );
}
function Xa() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(t) {
    return t === e;
  }
  function r(t) {
    e && N();
    let n = { abandon: t };
    return (e = n), n;
  }
  function i() {
    !e && N(), (e = null);
  }
  function a() {
    e && (e.abandon(), i());
  }
  return { isClaimed: t, isActive: n, claim: r, release: i, tryAbandon: a };
}
function Za(e) {
  return e.phase === `IDLE` || e.phase === `DROP_ANIMATING` ? !1 : e.isDragging;
}
var Qa = 9,
  $a = 13,
  eo = 27,
  to = 32,
  no = 33,
  ro = 34,
  io = 35,
  ao = 36,
  oo = 37,
  so = 38,
  co = 39,
  lo = 40,
  uo = { [$a]: !0, [Qa]: !0 },
  fo = (e) => {
    uo[e.keyCode] && e.preventDefault();
  },
  po = (() => {
    let e = `visibilitychange`;
    return typeof document > `u`
      ? e
      : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find(
          (e) => `on${e}` in document,
        ) || e;
  })(),
  mo = 0,
  ho = 5;
function go(e, t) {
  return Math.abs(t.x - e.x) >= ho || Math.abs(t.y - e.y) >= ho;
}
var _o = { type: `IDLE` };
function vo({ cancel: e, completed: t, getPhase: n, setPhase: r }) {
  return [
    {
      eventName: `mousemove`,
      fn: (e) => {
        let { button: t, clientX: i, clientY: a } = e;
        if (t !== mo) return;
        let o = { x: i, y: a },
          s = n();
        if (s.type === `DRAGGING`) {
          e.preventDefault(), s.actions.move(o);
          return;
        }
        s.type !== `PENDING` && N();
        let c = s.point;
        go(c, o) &&
          (e.preventDefault(),
          r({ type: `DRAGGING`, actions: s.actions.fluidLift(o) }));
      },
    },
    {
      eventName: `mouseup`,
      fn: (r) => {
        let i = n();
        i.type === `DRAGGING`
          ? (r.preventDefault(),
            i.actions.drop({ shouldBlockNextClick: !0 }),
            t())
          : e();
      },
    },
    {
      eventName: `mousedown`,
      fn: (t) => {
        n().type === `DRAGGING` && t.preventDefault(), e();
      },
    },
    {
      eventName: `keydown`,
      fn: (t) => {
        n().type === `PENDING`
          ? e()
          : t.keyCode === eo
            ? (t.preventDefault(), e())
            : fo(t);
      },
    },
    { eventName: `resize`, fn: e },
    {
      eventName: `scroll`,
      options: { passive: !0, capture: !1 },
      fn: () => {
        n().type === `PENDING` && e();
      },
    },
    {
      eventName: `webkitmouseforcedown`,
      fn: (t) => {
        let r = n();
        r.type === `IDLE` && N(),
          r.actions.shouldRespectForcePress() ? e() : t.preventDefault();
      },
    },
    { eventName: po, fn: e },
  ];
}
function yo(e) {
  let t = (0, o.useRef)(_o),
    n = (0, o.useRef)(j),
    r = P(
      () => ({
        eventName: `mousedown`,
        fn: function (t) {
          if (
            t.defaultPrevented ||
            t.button !== mo ||
            t.ctrlKey ||
            t.metaKey ||
            t.shiftKey ||
            t.altKey
          )
            return;
          let r = e.findClosestDraggableId(t);
          if (!r) return;
          let i = e.tryGetLock(r, s, { sourceEvent: t });
          if (!i) return;
          t.preventDefault();
          let a = { x: t.clientX, y: t.clientY };
          n.current(), u(i, a);
        },
      }),
      [e],
    ),
    i = P(
      () => ({
        eventName: `webkitmouseforcewillbegin`,
        fn: (t) => {
          if (t.defaultPrevented) return;
          let n = e.findClosestDraggableId(t);
          if (!n) return;
          let r = e.findOptionsForDraggable(n);
          r &&
            (r.shouldRespectForcePress ||
              (e.canGetLock(n) && t.preventDefault()));
        },
      }),
      [e],
    ),
    a = F(
      function () {
        n.current = M(e.getWindow(), [i, r], { passive: !1, capture: !0 });
      },
      [e, i, r],
    ),
    s = F(() => {
      t.current.type !== `IDLE` && ((t.current = _o), n.current(), a());
    }, [a]),
    c = F(() => {
      let e = t.current;
      s(),
        e.type === `DRAGGING` && e.actions.cancel({ shouldBlockNextClick: !0 }),
        e.type === `PENDING` && e.actions.abort();
    }, [s]),
    l = F(
      function () {
        let r = { capture: !0, passive: !1 },
          i = vo({
            cancel: c,
            completed: s,
            getPhase: () => t.current,
            setPhase: (e) => {
              t.current = e;
            },
          });
        n.current = M(e.getWindow(), i, r);
      },
      [e, c, s],
    ),
    u = F(
      function (e, n) {
        t.current.type !== `IDLE` && N(),
          (t.current = { type: `PENDING`, point: n, actions: e }),
          l();
      },
      [l],
    );
  $(
    function () {
      return (
        a(),
        function () {
          n.current();
        }
      );
    },
    [a],
  );
}
function bo() {}
var xo = { [ro]: !0, [no]: !0, [ao]: !0, [io]: !0 };
function So(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [
    {
      eventName: `keydown`,
      fn: (t) => {
        t.keyCode === eo
          ? (t.preventDefault(), n())
          : t.keyCode === to
            ? (t.preventDefault(), r())
            : t.keyCode === lo
              ? (t.preventDefault(), e.moveDown())
              : t.keyCode === so
                ? (t.preventDefault(), e.moveUp())
                : t.keyCode === co
                  ? (t.preventDefault(), e.moveRight())
                  : t.keyCode === oo
                    ? (t.preventDefault(), e.moveLeft())
                    : xo[t.keyCode]
                      ? t.preventDefault()
                      : fo(t);
      },
    },
    { eventName: `mousedown`, fn: n },
    { eventName: `mouseup`, fn: n },
    { eventName: `click`, fn: n },
    { eventName: `touchstart`, fn: n },
    { eventName: `resize`, fn: n },
    { eventName: `wheel`, fn: n, options: { passive: !0 } },
    { eventName: po, fn: n },
  ];
}
function Co(e) {
  let t = (0, o.useRef)(bo),
    n = P(
      () => ({
        eventName: `keydown`,
        fn: function (n) {
          if (n.defaultPrevented || n.keyCode !== to) return;
          let i = e.findClosestDraggableId(n);
          if (!i) return;
          let a = e.tryGetLock(i, c, { sourceEvent: n });
          if (!a) return;
          n.preventDefault();
          let o = !0,
            s = a.snapLift();
          t.current();
          function c() {
            !o && N(), (o = !1), t.current(), r();
          }
          t.current = M(e.getWindow(), So(s, c), { capture: !0, passive: !1 });
        },
      }),
      [e],
    ),
    r = F(
      function () {
        t.current = M(e.getWindow(), [n], { passive: !1, capture: !0 });
      },
      [e, n],
    );
  $(
    function () {
      return (
        r(),
        function () {
          t.current();
        }
      );
    },
    [r],
  );
}
var wo = { type: `IDLE` },
  To = 120,
  Eo = 0.15;
function Do({ cancel: e, getPhase: t }) {
  return [
    { eventName: `orientationchange`, fn: e },
    { eventName: `resize`, fn: e },
    {
      eventName: `contextmenu`,
      fn: (e) => {
        e.preventDefault();
      },
    },
    {
      eventName: `keydown`,
      fn: (n) => {
        t().type === `DRAGGING` && n.keyCode === eo && n.preventDefault(), e();
      },
    },
    { eventName: po, fn: e },
  ];
}
function Oo({ cancel: e, completed: t, getPhase: n }) {
  return [
    {
      eventName: `touchmove`,
      options: { capture: !1 },
      fn: (t) => {
        let r = n();
        if (r.type !== `DRAGGING`) {
          e();
          return;
        }
        r.hasMoved = !0;
        let { clientX: i, clientY: a } = t.touches[0],
          o = { x: i, y: a };
        t.preventDefault(), r.actions.move(o);
      },
    },
    {
      eventName: `touchend`,
      fn: (r) => {
        let i = n();
        i.type === `DRAGGING`
          ? (r.preventDefault(),
            i.actions.drop({ shouldBlockNextClick: !0 }),
            t())
          : e();
      },
    },
    {
      eventName: `touchcancel`,
      fn: (t) => {
        n().type === `DRAGGING` && t.preventDefault(), e();
      },
    },
    {
      eventName: `touchforcechange`,
      fn: (t) => {
        let r = n();
        r.type === `IDLE` && N();
        let i = t.touches[0];
        if (!i || !(i.force >= Eo)) return;
        let a = r.actions.shouldRespectForcePress();
        if (r.type === `PENDING`) a && e();
        else if (a) {
          if (r.hasMoved) {
            t.preventDefault();
            return;
          }
          e();
        } else t.preventDefault();
      },
    },
    { eventName: po, fn: e },
  ];
}
function ko(e) {
  let t = (0, o.useRef)(wo),
    n = (0, o.useRef)(j),
    r = F(function () {
      return t.current;
    }, []),
    i = F(function (e) {
      t.current = e;
    }, []),
    a = P(
      () => ({
        eventName: `touchstart`,
        fn: function (t) {
          if (t.defaultPrevented) return;
          let r = e.findClosestDraggableId(t);
          if (!r) return;
          let i = e.tryGetLock(r, c, { sourceEvent: t });
          if (!i) return;
          let { clientX: a, clientY: o } = t.touches[0],
            s = { x: a, y: o };
          n.current(), f(i, s);
        },
      }),
      [e],
    ),
    s = F(
      function () {
        n.current = M(e.getWindow(), [a], { capture: !0, passive: !1 });
      },
      [e, a],
    ),
    c = F(() => {
      let e = t.current;
      e.type !== `IDLE` &&
        (e.type === `PENDING` && clearTimeout(e.longPressTimerId),
        i(wo),
        n.current(),
        s());
    }, [s, i]),
    l = F(() => {
      let e = t.current;
      c(),
        e.type === `DRAGGING` && e.actions.cancel({ shouldBlockNextClick: !0 }),
        e.type === `PENDING` && e.actions.abort();
    }, [c]),
    u = F(
      function () {
        let t = { capture: !0, passive: !1 },
          i = { cancel: l, completed: c, getPhase: r },
          a = M(e.getWindow(), Oo(i), t),
          o = M(e.getWindow(), Do(i), t);
        n.current = function () {
          a(), o();
        };
      },
      [e, l, r, c],
    ),
    d = F(
      function () {
        let e = r();
        e.type !== `PENDING` && N();
        let t = e.actions.fluidLift(e.point);
        i({ type: `DRAGGING`, actions: t, hasMoved: !1 });
      },
      [r, i],
    ),
    f = F(
      function (e, t) {
        r().type !== `IDLE` && N();
        let n = setTimeout(d, To);
        i({ type: `PENDING`, point: t, actions: e, longPressTimerId: n }), u();
      },
      [u, r, i, d],
    );
  $(
    function () {
      return (
        s(),
        function () {
          n.current();
          let e = r();
          e.type === `PENDING` && (clearTimeout(e.longPressTimerId), i(wo));
        }
      );
    },
    [r, s, i],
  ),
    $(
      function () {
        return M(e.getWindow(), [
          {
            eventName: `touchmove`,
            fn: () => {},
            options: { capture: !1, passive: !1 },
          },
        ]);
      },
      [e],
    );
}
var Ao = [
  `input`,
  `button`,
  `textarea`,
  `select`,
  `option`,
  `optgroup`,
  `video`,
  `audio`,
];
function jo(e, t) {
  if (t == null) return !1;
  if (Ao.includes(t.tagName.toLowerCase())) return !0;
  let n = t.getAttribute(`contenteditable`);
  return n === `true` || n === `` || (t !== e && jo(e, t.parentElement));
}
function Mo(e, t) {
  let n = Aa(t);
  return Pa(n) ? jo(e, n) : !1;
}
var No = (e) => k(e.getBoundingClientRect()).center;
function Po(e) {
  return e instanceof Na(e).Element;
}
var Fo = (() => {
  let e = `matches`;
  return typeof document > `u`
    ? e
    : [e, `msMatchesSelector`, `webkitMatchesSelector`].find(
        (e) => e in Element.prototype,
      ) || e;
})();
function Io(e, t) {
  return e == null ? null : e[Fo](t) ? e : Io(e.parentElement, t);
}
function Lo(e, t) {
  return e.closest ? e.closest(t) : Io(e, t);
}
function Ro(e, t) {
  return !e || e === document || e === window
    ? null
    : Lo(e, t) || Ro(e.getRootNode().host, t);
}
function zo(e) {
  return `[${Q.contextId}="${e}"]`;
}
function Bo(e, t) {
  let n = Aa(t);
  if (!Po(n)) return null;
  let r = Ro(n, zo(e));
  return !r || !Pa(r) ? null : r;
}
function Vo(e, t) {
  let n = Bo(e, t);
  return n ? n.getAttribute(Q.draggableId) : null;
}
function Ho(e, t, n) {
  let r = Ma(n, `[${ya.contextId}="${e}"]`, (e) => e.getAttribute(ya.id) === t);
  return !r || !Pa(r) ? null : r;
}
function Uo(e) {
  e.preventDefault();
}
function Wo({ expected: e, phase: t, isLockActive: n, shouldWarn: r }) {
  return !(!n() || e !== t);
}
function Go({ lockAPI: e, store: t, registry: n, draggableId: r }) {
  if (e.isClaimed()) return !1;
  let i = n.draggable.findById(r);
  return !(!i || !i.options.isEnabled || !Wi(t.getState(), r));
}
function Ko({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: i,
  forceSensorStop: a,
  sourceEvent: o,
}) {
  if (!Go({ lockAPI: e, store: n, registry: r, draggableId: i })) return null;
  let s = r.draggable.getById(i),
    c = Ho(t, s.descriptor.id, ja(o));
  if (!c || (o && !s.options.canDragInteractiveElements && Mo(c, o)))
    return null;
  let l = e.claim(a || j),
    u = `PRE_DRAG`;
  function d() {
    return s.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(l);
  }
  function p(e, t) {
    Wo({ expected: e, phase: u, isLockActive: f, shouldWarn: !0 }) &&
      n.dispatch(t());
  }
  let m = p.bind(null, `DRAGGING`);
  function h(t) {
    function r() {
      e.release(), (u = `COMPLETED`);
    }
    u !== `PRE_DRAG` && (r(), N()),
      n.dispatch(Or(t.liftActionArgs)),
      (u = `DRAGGING`);
    function i(e, i = { shouldBlockNextClick: !1 }) {
      if ((t.cleanup(), i.shouldBlockNextClick)) {
        let e = M(window, [
          {
            eventName: `click`,
            fn: Uo,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(e);
      }
      r(), n.dispatch(Gr({ reason: e }));
    }
    return {
      isActive: () =>
        Wo({ expected: `DRAGGING`, phase: u, isLockActive: f, shouldWarn: !1 }),
      shouldRespectForcePress: d,
      drop: (e) => i(`DROP`, e),
      cancel: (e) => i(`CANCEL`, e),
      ...t.actions,
    };
  }
  function g(e) {
    let t = ct((e) => {
      m(() => Fr({ client: e }));
    });
    return {
      ...h({
        liftActionArgs: { id: i, clientSelection: e, movementMode: `FLUID` },
        cleanup: () => t.cancel(),
        actions: { move: t },
      }),
      move: t,
    };
  }
  function _() {
    return h({
      liftActionArgs: { id: i, clientSelection: No(c), movementMode: `SNAP` },
      cleanup: j,
      actions: {
        moveUp: () => m(Rr),
        moveRight: () => m(Br),
        moveDown: () => m(zr),
        moveLeft: () => m(Vr),
      },
    });
  }
  function v() {
    Wo({ expected: `PRE_DRAG`, phase: u, isLockActive: f, shouldWarn: !0 }) &&
      e.release();
  }
  return {
    isActive: () =>
      Wo({ expected: `PRE_DRAG`, phase: u, isLockActive: f, shouldWarn: !1 }),
    shouldRespectForcePress: d,
    fluidLift: g,
    snapLift: _,
    abort: v,
  };
}
var qo = [yo, Co, ko];
function Jo({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: i,
  windowToUse: a,
}) {
  let s = [...(i ? qo : []), ...(r || [])],
    c = (0, o.useState)(() => Xa())[0],
    l = F(
      function (e, t) {
        Za(e) && !Za(t) && c.tryAbandon();
      },
      [c],
    );
  $(
    function () {
      let e = t.getState();
      return t.subscribe(() => {
        let n = t.getState();
        l(e, n), (e = n);
      });
    },
    [c, t, l],
  ),
    $(() => c.tryAbandon, [c.tryAbandon]);
  let u = F(
      (e) => Go({ lockAPI: c, registry: n, store: t, draggableId: e }),
      [c, n, t],
    ),
    d = F(
      (r, i, a) =>
        Ko({
          lockAPI: c,
          registry: n,
          contextId: e,
          store: t,
          draggableId: r,
          forceSensorStop: i || null,
          sourceEvent: a && a.sourceEvent ? a.sourceEvent : null,
        }),
      [e, c, n, t],
    ),
    f = F((t) => Vo(e, t), [e]),
    p = F(
      (e) => {
        let t = n.draggable.findById(e);
        return t ? t.options : null;
      },
      [n.draggable],
    ),
    m = F(
      function () {
        c.isClaimed() &&
          (c.tryAbandon(), t.getState().phase !== `IDLE` && t.dispatch(Hr()));
      },
      [c, t],
    ),
    h = F(() => c.isClaimed(), [c]),
    g = F(() => a, [a]),
    _ = P(
      () => ({
        canGetLock: u,
        tryGetLock: d,
        findClosestDraggableId: f,
        findOptionsForDraggable: p,
        tryReleaseLock: m,
        isLockClaimed: h,
        getWindow: g,
      }),
      [u, d, f, p, m, h, g],
    );
  for (let e = 0; e < s.length; e++) s[e](_);
}
var Yo = (e) => ({
    onBeforeCapture: (t) => {
      (0, s.flushSync)(() => {
        e.onBeforeCapture && e.onBeforeCapture(t);
      });
    },
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragEnd: e.onDragEnd,
    onDragUpdate: e.onDragUpdate,
  }),
  Xo = (e) => ({
    ...Yi,
    ...e.autoScrollerOptions,
    durationDampening: { ...Yi.durationDampening, ...e.autoScrollerOptions },
  });
function Zo(e) {
  return !e.current && N(), e.current;
}
function Qo(e) {
  let {
      contextId: t,
      setCallbacks: n,
      sensors: r,
      nonce: i,
      dragHandleUsageInstructions: a,
      stylesInsertionPoint: s,
    } = e,
    c = (0, o.useRef)(null),
    l = (s && s.ownerDocument.defaultView) || window,
    u = (0, o.useRef)(l);
  u.current = l;
  let d = Ya(e),
    f = F(() => Yo(d.current), [d]),
    p = F(() => Xo(d.current), [d]),
    m = Ua(t),
    g = qa({ contextId: t, text: a }),
    _ = Oa(t, i, s),
    v = F((e) => {
      Zo(c).dispatch(e);
    }, []),
    y = P(
      () =>
        h(
          {
            publishWhileDragging: Ar,
            updateDroppableScroll: Mr,
            updateDroppableIsEnabled: Nr,
            updateDroppableIsCombineEnabled: Pr,
            collectionStarting: jr,
          },
          v,
        ),
      [v],
    ),
    b = Ra(),
    x = P(() => Ui(() => u.current, b, y), [b, y]),
    S = P(
      () =>
        va({
          scrollWindow: Gi,
          scrollDroppable: x.scrollDroppable,
          getAutoScrollerOptions: p,
          ...h({ move: Fr }, v),
        }),
      [x.scrollDroppable, v, p],
    ),
    C = Ia(t),
    w = P(
      () =>
        Pi({
          announce: m,
          autoScroller: S,
          dimensionMarshal: x,
          focusMarshal: C,
          getResponders: f,
          styleMarshal: _,
        }),
      [m, S, x, C, f, _],
    );
  c.current = w;
  let T = F(() => {
      let e = Zo(c);
      e.getState().phase !== `IDLE` && e.dispatch(Hr());
    }, []),
    E = F(() => {
      let e = Zo(c).getState();
      return (
        e.phase === `DROP_ANIMATING` || (e.phase !== `IDLE` && e.isDragging)
      );
    }, []);
  n(P(() => ({ isDragging: E, tryAbort: T }), [E, T]));
  let D = F((e) => Wi(Zo(c).getState(), e), []),
    O = F(() => J(Zo(c).getState()), []),
    ee = P(
      () => ({
        marshal: x,
        focus: C,
        contextId: t,
        canLift: D,
        isMovementAllowed: O,
        dragHandleUsageInstructionsId: g,
        registry: b,
      }),
      [t, x, g, C, D, O, b],
    );
  return (
    Jo({
      contextId: t,
      store: w,
      registry: b,
      customSensors: r || null,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
      windowToUse: l,
    }),
    (0, o.useEffect)(() => T, [T]),
    o.createElement(
      Ja.Provider,
      { value: ee },
      o.createElement(Ze, { context: za, store: w }, e.children),
    )
  );
}
function $o() {
  return o.useId();
}
function es(e) {
  let t = $o(),
    n = e.dragHandleUsageInstructions || xt.dragHandleUsageInstructions;
  return o.createElement(pt, null, (r) =>
    o.createElement(
      Qo,
      {
        nonce: e.nonce,
        contextId: t,
        setCallbacks: r,
        dragHandleUsageInstructions: n,
        enableDefaultSensors: e.enableDefaultSensors,
        sensors: e.sensors,
        onBeforeCapture: e.onBeforeCapture,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragUpdate: e.onDragUpdate,
        onDragEnd: e.onDragEnd,
        autoScrollerOptions: e.autoScrollerOptions,
        stylesInsertionPoint: e.stylesInsertionPoint,
      },
      e.children,
    ),
  );
}
var ts = { dragging: 5e3, dropAnimating: 4500 },
  ns = (e, t) => (t ? $r.drop(t.duration) : e ? $r.snap : $r.fluid),
  rs = (e, t) => {
    if (e) return t ? Zr.opacity.drop : Zr.opacity.combining;
  },
  is = (e) =>
    e.forceShouldAnimate == null ? e.mode === `SNAP` : e.forceShouldAnimate;
function as(e) {
  let t = e.dimension.client,
    { offset: n, combineWith: r, dropping: i } = e,
    a = !!r,
    o = is(e),
    s = !!i,
    c = s ? ti.drop(n, a) : ti.moveTo(n);
  return {
    position: `fixed`,
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: `border-box`,
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: ns(o, i),
    transform: c,
    opacity: rs(a, s),
    zIndex: s ? ts.dropAnimating : ts.dragging,
    pointerEvents: `none`,
  };
}
function os(e) {
  return {
    transform: ti.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : `none`,
  };
}
function ss(e) {
  return e.type === `DRAGGING` ? as(e) : os(e);
}
function cs(e, t, n = I) {
  let r = window.getComputedStyle(t),
    i = ot(t.getBoundingClientRect(), r),
    a = at(i, n);
  return {
    descriptor: e,
    placeholder: {
      client: i,
      tagName: t.tagName.toLowerCase(),
      display: r.display,
    },
    displaceBy: { x: i.marginBox.width, y: i.marginBox.height },
    client: i,
    page: a,
  };
}
function ls(e) {
  let t = Ga(`draggable`),
    {
      descriptor: n,
      registry: r,
      getDraggableRef: i,
      canDragInteractiveElements: a,
      shouldRespectForcePress: s,
      isEnabled: c,
    } = e,
    l = P(
      () => ({
        canDragInteractiveElements: a,
        shouldRespectForcePress: s,
        isEnabled: c,
      }),
      [a, c, s],
    ),
    u = F(
      (e) => {
        let t = i();
        return !t && N(), cs(n, t, e);
      },
      [n, i],
    ),
    d = P(
      () => ({ uniqueId: t, descriptor: n, options: l, getDimension: u }),
      [n, u, l, t],
    ),
    f = (0, o.useRef)(d),
    p = (0, o.useRef)(!0);
  $(
    () => (
      r.draggable.register(f.current), () => r.draggable.unregister(f.current)
    ),
    [r.draggable],
  ),
    $(() => {
      if (p.current) {
        p.current = !1;
        return;
      }
      let e = f.current;
      (f.current = d), r.draggable.update(d, e);
    }, [d, r.draggable]);
}
var us = o.createContext(null);
function ds(e) {
  let t = (0, o.useContext)(e);
  return !t && N(), t;
}
function fs(e) {
  e.preventDefault();
}
var ps = (e) => {
    let t = (0, o.useRef)(null),
      n = F((e = null) => {
        t.current = e;
      }, []),
      r = F(() => t.current, []),
      { contextId: i, dragHandleUsageInstructionsId: a, registry: c } = ds(Ja),
      { type: l, droppableId: u } = ds(us),
      d = P(
        () => ({ id: e.draggableId, index: e.index, type: l, droppableId: u }),
        [e.draggableId, e.index, l, u],
      ),
      {
        children: f,
        draggableId: p,
        isEnabled: m,
        shouldRespectForcePress: h,
        canDragInteractiveElements: g,
        isClone: _,
        mapped: v,
        dropAnimationFinished: y,
      } = e;
    _ ||
      ls(
        P(
          () => ({
            descriptor: d,
            registry: c,
            getDraggableRef: r,
            canDragInteractiveElements: g,
            shouldRespectForcePress: h,
            isEnabled: m,
          }),
          [d, c, r, g, h, m],
        ),
      );
    let b = P(
        () =>
          m
            ? {
                tabIndex: 0,
                role: `button`,
                "aria-describedby": a,
                "data-rfd-drag-handle-draggable-id": p,
                "data-rfd-drag-handle-context-id": i,
                draggable: !1,
                onDragStart: fs,
              }
            : null,
        [i, a, p, m],
      ),
      x = F(
        (e) => {
          v.type === `DRAGGING` &&
            v.dropping &&
            e.propertyName === `transform` &&
            (0, s.flushSync)(y);
        },
        [y, v],
      ),
      S = P(() => {
        let e = ss(v),
          t = v.type === `DRAGGING` && v.dropping ? x : void 0;
        return {
          innerRef: n,
          draggableProps: {
            "data-rfd-draggable-context-id": i,
            "data-rfd-draggable-id": p,
            style: e,
            onTransitionEnd: t,
          },
          dragHandleProps: b,
        };
      }, [i, b, p, v, x, n]),
      C = P(
        () => ({
          draggableId: d.id,
          type: d.type,
          source: { index: d.index, droppableId: d.droppableId },
        }),
        [d.droppableId, d.id, d.index, d.type],
      );
    return o.createElement(o.Fragment, null, f(S, v.snapshot, C));
  },
  ms = (e, t) => e === t,
  hs = (e) => {
    let { combine: t, destination: n } = e;
    return n ? n.droppableId : t ? t.droppableId : null;
  },
  gs = (e) => (e.combine ? e.combine.draggableId : null),
  _s = (e) =>
    e.at && e.at.type === `COMBINE` ? e.at.combine.draggableId : null;
function vs() {
  let e = V((e, t) => ({ x: e, y: t })),
    t = V((e, t, n = null, r = null, i = null) => ({
      isDragging: !0,
      isClone: t,
      isDropAnimating: !!i,
      dropAnimation: i,
      mode: e,
      draggingOver: n,
      combineWith: r,
      combineTargetFor: null,
    })),
    n = V((e, n, r, i, a = null, o = null, s = null) => ({
      mapped: {
        type: `DRAGGING`,
        dropping: null,
        draggingOver: a,
        combineWith: o,
        mode: n,
        offset: e,
        dimension: r,
        forceShouldAnimate: s,
        snapshot: t(n, i, a, o, null),
      },
    }));
  return (r, i) => {
    if (Za(r)) {
      if (r.critical.draggable.id !== i.draggableId) return null;
      let t = r.current.client.offset,
        a = r.dimensions.draggables[i.draggableId],
        o = q(r.impact),
        s = _s(r.impact),
        c = r.forceShouldAnimate;
      return n(e(t.x, t.y), r.movementMode, a, i.isClone, o, s, c);
    }
    if (r.phase === `DROP_ANIMATING`) {
      let e = r.completed;
      if (e.result.draggableId !== i.draggableId) return null;
      let n = i.isClone,
        a = r.dimensions.draggables[i.draggableId],
        o = e.result,
        s = o.mode,
        c = hs(o),
        l = gs(o),
        u = {
          duration: r.dropDuration,
          curve: Xr.drop,
          moveTo: r.newHomeClientOffset,
          opacity: l ? Zr.opacity.drop : null,
          scale: l ? Zr.scale.drop : null,
        };
      return {
        mapped: {
          type: `DRAGGING`,
          offset: r.newHomeClientOffset,
          dimension: a,
          dropping: u,
          draggingOver: c,
          combineWith: l,
          mode: s,
          forceShouldAnimate: null,
          snapshot: t(s, n, c, l, u),
        },
      };
    }
    return null;
  };
}
function ys(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null,
  };
}
var bs = {
  mapped: {
    type: `SECONDARY`,
    offset: I,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ys(null),
  },
};
function xs() {
  let e = V((e, t) => ({ x: e, y: t })),
    t = V(ys),
    n = V((e, n = null, r) => ({
      mapped: {
        type: `SECONDARY`,
        offset: e,
        combineTargetFor: n,
        shouldAnimateDisplacement: r,
        snapshot: t(n),
      },
    })),
    r = (e) => (e ? n(I, e, !0) : null),
    i = (t, i, a, o) => {
      let s = a.displaced.visible[t],
        c = !!(o.inVirtualList && o.effected[t]),
        l = Ht(a),
        u = l && l.draggableId === t ? i : null;
      if (!s) {
        if (!c) return r(u);
        if (a.displaced.invisible[t]) return null;
        let i = wt(o.displacedBy.point),
          s = e(i.x, i.y);
        return n(s, u, !0);
      }
      if (c) return r(u);
      let d = a.displacedBy.point,
        f = e(d.x, d.y);
      return n(f, u, s.shouldAnimate);
    };
  return (e, t) => {
    if (Za(e))
      return e.critical.draggable.id === t.draggableId
        ? null
        : i(t.draggableId, e.critical.draggable.id, e.impact, e.afterCritical);
    if (e.phase === `DROP_ANIMATING`) {
      let n = e.completed;
      return n.result.draggableId === t.draggableId
        ? null
        : i(t.draggableId, n.result.draggableId, n.impact, n.afterCritical);
    }
    return null;
  };
}
var Ss = Ye(
  () => {
    let e = vs(),
      t = xs();
    return (n, r) => e(n, r) || t(n, r) || bs;
  },
  { dropAnimationFinished: qr },
  null,
  { context: za, areStatePropsEqual: ms },
)(ps);
function Cs(e) {
  return ds(us).isUsingCloneFor === e.draggableId && !e.isClone
    ? null
    : o.createElement(Ss, e);
}
function ws(e) {
  let t = typeof e.isDragDisabled != `boolean` || !e.isDragDisabled,
    n = !!e.disableInteractiveElementBlocking,
    i = !!e.shouldRespectForcePress;
  return o.createElement(
    Cs,
    r({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: n,
      shouldRespectForcePress: i,
    }),
  );
}
var Ts = (e) => (t) => e === t,
  Es = Ts(`scroll`),
  Ds = Ts(`auto`),
  Os = (e, t) => t(e.overflowX) || t(e.overflowY),
  ks = (e) => {
    let t = e.ownerDocument.defaultView.getComputedStyle(e),
      n = { overflowX: t.overflowX, overflowY: t.overflowY };
    return Os(n, Es) || Os(n, Ds);
  },
  As = () => !1,
  js = (e) =>
    e == null
      ? null
      : e === document.body
        ? As()
          ? e
          : null
        : e === document.documentElement
          ? null
          : ks(e)
            ? e
            : js(e.parentElement),
  Ms = (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
  Ns = (e) =>
    e
      ? e.ownerDocument.defaultView.getComputedStyle(e).position === `fixed` ||
        Ns(e.parentElement)
      : !1,
  Ps = (e) => ({ closestScrollable: js(e), isFixedOnPage: Ns(e) }),
  Fs = ({
    descriptor: e,
    isEnabled: t,
    isCombineEnabled: n,
    isFixedOnPage: r,
    direction: i,
    client: a,
    page: o,
    closest: s,
  }) => {
    let c = (() => {
        if (!s) return null;
        let { scrollSize: e, client: t } = s,
          n = Li({
            scrollHeight: e.scrollHeight,
            scrollWidth: e.scrollWidth,
            height: t.paddingBox.height,
            width: t.paddingBox.width,
          });
        return {
          pageMarginBox: s.page.marginBox,
          frameClient: t,
          scrollSize: e,
          shouldClipSubject: s.shouldClipSubject,
          scroll: {
            initial: s.scroll,
            current: s.scroll,
            max: n,
            diff: { value: I, displacement: I },
          },
        };
      })(),
      l = i === `vertical` ? Xt : Zt;
    return {
      descriptor: e,
      isCombineEnabled: n,
      isFixedOnPage: r,
      axis: l,
      isEnabled: t,
      client: a,
      page: o,
      frame: c,
      subject: Ft({ page: o, withPlaceholder: null, axis: l, frame: c }),
    };
  },
  Is = (e, t) => {
    let n = st(e);
    if (!t || e !== t) return n;
    let r = n.paddingBox.top - t.scrollTop,
      i = n.paddingBox.left - t.scrollLeft,
      a = r + t.scrollHeight;
    return nt({
      borderBox: Qe(
        { top: r, right: i + t.scrollWidth, bottom: a, left: i },
        n.border,
      ),
      margin: n.margin,
      border: n.border,
      padding: n.padding,
    });
  },
  Ls = ({
    ref: e,
    descriptor: t,
    env: n,
    windowScroll: r,
    direction: i,
    isDropDisabled: a,
    isCombineEnabled: o,
    shouldClipSubject: s,
  }) => {
    let c = n.closestScrollable,
      l = Is(e, c),
      u = at(l, r),
      d = (() => {
        if (!c) return null;
        let e = st(c),
          t = { scrollHeight: c.scrollHeight, scrollWidth: c.scrollWidth };
        return {
          client: e,
          page: at(e, r),
          scroll: Ms(c),
          scrollSize: t,
          shouldClipSubject: s,
        };
      })();
    return Fs({
      descriptor: t,
      isEnabled: !a,
      isCombineEnabled: o,
      isFixedOnPage: n.isFixedOnPage,
      direction: i,
      client: l,
      page: u,
      closest: d,
    });
  },
  Rs = { passive: !1 },
  zs = { passive: !0 },
  Bs = (e) => (e.shouldPublishImmediately ? Rs : zs),
  Vs = (e) => (e && e.env.closestScrollable) || null;
function Hs(e) {
  let t = (0, o.useRef)(null),
    n = ds(Ja),
    r = Ga(`droppable`),
    { registry: i, marshal: a } = n,
    s = Ya(e),
    c = P(
      () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
      [e.droppableId, e.mode, e.type],
    ),
    l = (0, o.useRef)(c),
    u = P(
      () =>
        V((e, n) => {
          !t.current && N();
          let r = { x: e, y: n };
          a.updateDroppableScroll(c.id, r);
        }),
      [c.id, a],
    ),
    d = F(() => {
      let e = t.current;
      return !e || !e.env.closestScrollable ? I : Ms(e.env.closestScrollable);
    }, []),
    f = F(() => {
      let e = d();
      u(e.x, e.y);
    }, [d, u]),
    p = P(() => ct(f), [f]),
    m = F(() => {
      let e = t.current,
        n = Vs(e);
      !(e && n) && N(), e.scrollOptions.shouldPublishImmediately ? f() : p();
    }, [p, f]),
    h = F(
      (e, r) => {
        t.current && N();
        let i = s.current,
          a = i.getDroppableRef();
        !a && N();
        let o = Ps(a),
          l = { ref: a, descriptor: c, env: o, scrollOptions: r };
        t.current = l;
        let u = Ls({
            ref: a,
            descriptor: c,
            env: o,
            windowScroll: e,
            direction: i.direction,
            isDropDisabled: i.isDropDisabled,
            isCombineEnabled: i.isCombineEnabled,
            shouldClipSubject: !i.ignoreContainerClipping,
          }),
          d = o.closestScrollable;
        return (
          d &&
            (d.setAttribute(xa.contextId, n.contextId),
            d.addEventListener(`scroll`, m, Bs(l.scrollOptions))),
          u
        );
      },
      [n.contextId, c, m, s],
    ),
    g = F(() => {
      let e = t.current,
        n = Vs(e);
      return !(e && n) && N(), Ms(n);
    }, []),
    _ = F(() => {
      let e = t.current;
      !e && N();
      let n = Vs(e);
      (t.current = null),
        n &&
          (p.cancel(),
          n.removeAttribute(xa.contextId),
          n.removeEventListener(`scroll`, m, Bs(e.scrollOptions)));
    }, [m, p]),
    v = F((e) => {
      let n = t.current;
      !n && N();
      let r = Vs(n);
      !r && N(), (r.scrollTop += e.y), (r.scrollLeft += e.x);
    }, []),
    y = P(
      () => ({
        getDimensionAndWatchScroll: h,
        getScrollWhileDragging: g,
        dragStopped: _,
        scroll: v,
      }),
      [_, h, g, v],
    ),
    b = P(() => ({ uniqueId: r, descriptor: c, callbacks: y }), [y, c, r]);
  $(
    () => (
      (l.current = b.descriptor),
      i.droppable.register(b),
      () => {
        t.current && _(), i.droppable.unregister(b);
      }
    ),
    [y, c, _, b, a, i.droppable],
  ),
    $(() => {
      t.current && a.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
    }, [e.isDropDisabled, a]),
    $(() => {
      t.current &&
        a.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
    }, [e.isCombineEnabled, a]);
}
function Us() {}
var Ws = { width: 0, height: 0, margin: jt },
  Gs = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: n }) =>
    e || n === `close`
      ? Ws
      : {
          height: t.client.borderBox.height,
          width: t.client.borderBox.width,
          margin: t.client.margin,
        },
  Ks = ({ isAnimatingOpenOnMount: e, placeholder: t, animate: n }) => {
    let r = Gs({ isAnimatingOpenOnMount: e, placeholder: t, animate: n });
    return {
      display: t.display,
      boxSizing: `border-box`,
      width: r.width,
      height: r.height,
      marginTop: r.margin.top,
      marginRight: r.margin.right,
      marginBottom: r.margin.bottom,
      marginLeft: r.margin.left,
      flexShrink: `0`,
      flexGrow: `0`,
      pointerEvents: `none`,
      transition: n === `none` ? null : $r.placeholder,
    };
  },
  qs = o.memo((e) => {
    let t = (0, o.useRef)(null),
      n = F(() => {
        t.current &&= (clearTimeout(t.current), null);
      }, []),
      { animate: r, onTransitionEnd: i, onClose: a, contextId: s } = e,
      [c, l] = (0, o.useState)(e.animate === `open`);
    (0, o.useEffect)(
      () =>
        c
          ? r === `open`
            ? t.current
              ? Us
              : ((t.current = setTimeout(() => {
                  (t.current = null), l(!1);
                })),
                n)
            : (n(), l(!1), Us)
          : Us,
      [r, c, n],
    );
    let u = F(
        (e) => {
          e.propertyName === `height` && (i(), r === `close` && a());
        },
        [r, a, i],
      ),
      d = Ks({
        isAnimatingOpenOnMount: c,
        animate: e.animate,
        placeholder: e.placeholder,
      });
    return o.createElement(e.placeholder.tagName, {
      style: d,
      "data-rfd-placeholder-context-id": s,
      onTransitionEnd: u,
      ref: e.innerRef,
    });
  }),
  Js = class extends o.PureComponent {
    constructor(...e) {
      super(...e),
        (this.state = {
          isVisible: !!this.props.on,
          data: this.props.on,
          animate: this.props.shouldAnimate && this.props.on ? `open` : `none`,
        }),
        (this.onClose = () => {
          this.state.animate === `close` && this.setState({ isVisible: !1 });
        });
    }
    static getDerivedStateFromProps(e, t) {
      return e.shouldAnimate
        ? e.on
          ? { isVisible: !0, data: e.on, animate: `open` }
          : t.isVisible
            ? { isVisible: !0, data: t.data, animate: `close` }
            : { isVisible: !1, animate: `close`, data: null }
        : { isVisible: !!e.on, data: e.on, animate: `none` };
    }
    render() {
      if (!this.state.isVisible) return null;
      let e = {
        onClose: this.onClose,
        data: this.state.data,
        animate: this.state.animate,
      };
      return this.props.children(e);
    }
  },
  Ys = (e) => {
    let t = (0, o.useContext)(Ja);
    !t && N();
    let { contextId: n, isMovementAllowed: r } = t,
      i = (0, o.useRef)(null),
      a = (0, o.useRef)(null),
      {
        children: c,
        droppableId: l,
        type: u,
        mode: d,
        direction: f,
        ignoreContainerClipping: p,
        isDropDisabled: m,
        isCombineEnabled: h,
        snapshot: g,
        useClone: _,
        updateViewportMaxScroll: v,
        getContainerForClone: y,
      } = e,
      b = F(() => i.current, []),
      x = F((e = null) => {
        i.current = e;
      }, []);
    F(() => a.current, []);
    let S = F((e = null) => {
        a.current = e;
      }, []),
      C = F(() => {
        r() &&
          v({
            maxScroll: zi(
              (i.current && i.current.ownerDocument.defaultView) || window,
            ),
          });
      }, [r, v]);
    Hs({
      droppableId: l,
      type: u,
      mode: d,
      direction: f,
      isDropDisabled: m,
      isCombineEnabled: h,
      ignoreContainerClipping: p,
      getDroppableRef: b,
    });
    let w = P(
        () =>
          o.createElement(
            Js,
            { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
            ({ onClose: e, data: t, animate: r }) =>
              o.createElement(qs, {
                placeholder: t,
                onClose: e,
                innerRef: S,
                animate: r,
                contextId: n,
                onTransitionEnd: C,
              }),
          ),
        [n, C, e.placeholder, e.shouldAnimatePlaceholder, S],
      ),
      T = P(
        () => ({
          innerRef: x,
          placeholder: w,
          droppableProps: {
            "data-rfd-droppable-id": l,
            "data-rfd-droppable-context-id": n,
          },
        }),
        [n, l, w, x],
      ),
      E = _ ? _.dragging.draggableId : null,
      D = P(() => ({ droppableId: l, type: u, isUsingCloneFor: E }), [l, E, u]);
    function O() {
      if (!_) return null;
      let { dragging: e, render: t } = _,
        n = o.createElement(
          Cs,
          {
            draggableId: e.draggableId,
            index: e.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (n, r) => t(n, r, e),
        );
      return s.createPortal(n, y());
    }
    return o.createElement(us.Provider, { value: D }, c(T, g), O());
  };
function Xs() {
  return !document.body && N(), document.body;
}
var Zs = {
    mode: `standard`,
    type: `DEFAULT`,
    direction: `vertical`,
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Xs,
  },
  Qs = (e) => {
    let t = { ...e },
      n;
    for (n in Zs) e[n] === void 0 && (t = { ...t, [n]: Zs[n] });
    return t;
  },
  $s = (e, t) => e === t.droppable.type,
  ec = (e, t) => t.draggables[e.draggable.id],
  tc = Ye(
    () => {
      let e = {
          placeholder: null,
          shouldAnimatePlaceholder: !0,
          snapshot: {
            isDraggingOver: !1,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: !1,
          },
          useClone: null,
        },
        t = { ...e, shouldAnimatePlaceholder: !1 },
        n = V((e) => ({
          draggableId: e.id,
          type: e.type,
          source: { index: e.index, droppableId: e.droppableId },
        })),
        r = V((r, i, a, o, s, c) => {
          let l = s.descriptor.id;
          if (s.descriptor.droppableId === r) {
            let e = c ? { render: c, dragging: n(s.descriptor) } : null,
              t = {
                isDraggingOver: a,
                draggingOverWith: a ? l : null,
                draggingFromThisWith: l,
                isUsingPlaceholder: !0,
              };
            return {
              placeholder: s.placeholder,
              shouldAnimatePlaceholder: !1,
              snapshot: t,
              useClone: e,
            };
          }
          if (!i) return t;
          if (!o) return e;
          let u = {
            isDraggingOver: a,
            draggingOverWith: l,
            draggingFromThisWith: null,
            isUsingPlaceholder: !0,
          };
          return {
            placeholder: s.placeholder,
            shouldAnimatePlaceholder: !0,
            snapshot: u,
            useClone: null,
          };
        });
      return (n, i) => {
        let a = Qs(i),
          o = a.droppableId,
          s = a.type,
          c = !a.isDropDisabled,
          l = a.renderClone;
        if (Za(n)) {
          let e = n.critical;
          if (!$s(s, e)) return t;
          let i = ec(e, n.dimensions),
            a = q(n.impact) === o;
          return r(o, c, a, a, i, l);
        }
        if (n.phase === `DROP_ANIMATING`) {
          let e = n.completed;
          if (!$s(s, e.critical)) return t;
          let i = ec(e.critical, n.dimensions);
          return r(o, c, hs(e.result) === o, q(e.impact) === o, i, l);
        }
        if (n.phase === `IDLE` && n.completed && !n.shouldFlush) {
          let r = n.completed;
          if (!$s(s, r.critical)) return t;
          let i = q(r.impact) === o,
            a = !!(r.impact.at && r.impact.at.type === `COMBINE`),
            c = r.critical.droppable.id === o;
          return i ? (a ? e : t) : c ? e : t;
        }
        return t;
      };
    },
    { updateViewportMaxScroll: Lr },
    (e, t, n) => ({ ...Qs(n), ...e, ...t }),
    { context: za, areStatePropsEqual: ms },
  )(Ys);
export { es as n, ws as r, tc as t };
