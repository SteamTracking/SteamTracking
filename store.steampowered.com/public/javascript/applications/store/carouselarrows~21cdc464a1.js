/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, ft as r } from "./chunk~01cfc309bf.js";
import { c as i } from "./chunk~d43c81a658.js";
import { n as a } from "./chunk~710e3cfd2f.js";
import {
  El as o,
  Ga as s,
  Jy as c,
  La as l,
  Qs as u,
  Qy as d,
  Ua as f,
  Wa as p,
  Wb as m,
  ax as h,
  fo as g,
  ho as _,
  ht as v,
  ja as y,
  jc as b,
  ko as x,
  nx as S,
  or as C,
  rl as w,
  tx as T,
  vt as E,
  wc as D,
} from "./main.js";
var O = e(t());
function ee(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ee(Object(n), !0).forEach(function (t) {
          M(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ee(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function A(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function te(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function j(e, t, n) {
  return (
    t && te(e.prototype, t),
    n && te(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function M(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function N() {
  return (N = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
function P(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && re(e, t));
}
function ne(e) {
  return (ne = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function re(e, t) {
  return (re = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
}
function ie() {
  if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == `function`) return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ae(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
  return i;
}
function F(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ae(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])));
  }
  return i;
}
function I(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function oe(e, t) {
  if (t && (typeof t == `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return I(e);
}
function L(e) {
  var t = ie();
  return function () {
    var n,
      r = ne(e);
    if (t) {
      var i = ne(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return oe(this, n);
  };
}
function se(e) {
  return ce(e) || le(e) || ue(e) || fe();
}
function ce(e) {
  if (Array.isArray(e)) return de(e);
}
function le(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function ue(e, t) {
  if (e) {
    if (typeof e == `string`) return de(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
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
function de(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fe() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(e, t) {
  return ((t = { exports: {} }), e(t, t.exports), t.exports);
}
function me() {}
function he() {}
function R(e) {
  return e
    .map(function (e) {
      return !1 === e ? null : e;
    })
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
}
function ge(e, t) {
  return ((100 / e) * t) / t;
}
function _e(e, t) {
  return (100 * e) / t;
}
function z(e) {
  return `${e}%`;
}
function ve(e, t, n) {
  if (e === t) return !0;
  var r = G[We(e)],
    i = G[We(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function ye(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, a = r.length; (i = r[--a]);)
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function be(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--;) if (!ve(e[r], t[r], n)) return !1;
  return !0;
}
function xe(e, t, n) {
  if (typeof e.equal == `function`) return (n.push([e, t]), e.equal(t, n));
  var r = Se(e),
    i = Se(t),
    a = r.length;
  if (a !== i.length) return !1;
  for (r.sort(), i.sort(); a--;) if (r[a] !== i[a]) return !1;
  for (n.push([e, t]), a = r.length; a--;) {
    var o = r[a];
    if (!ve(e[o], t[o], n)) return !1;
  }
  return !0;
}
function Se(e) {
  var t = [];
  for (var n in e) n !== `constructor` && t.push(n);
  return t;
}
function Ce(e) {
  return !!e && typeof e == `object`;
}
function we(e) {
  var t = Object.prototype.toString.call(e);
  return t === `[object RegExp]` || t === `[object Date]` || Te(e);
}
function Te(e) {
  return e.$$typeof === qe;
}
function Ee(e) {
  return Array.isArray(e) ? [] : {};
}
function B(e, t) {
  return !1 !== t.clone && t.isMergeableObject(e) ? V(Ee(e), e, t) : e;
}
function De(e, t, n) {
  return e.concat(t).map(function (e) {
    return B(e, n);
  });
}
function Oe(e, t) {
  if (!t.customMerge) return V;
  var n = t.customMerge(e);
  return typeof n == `function` ? n : V;
}
function ke(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function Ae(e) {
  return Object.keys(e).concat(ke(e));
}
function je(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Me(e, t) {
  return (
    je(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function Ne(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Ae(e).forEach(function (t) {
        r[t] = B(e[t], n);
      }),
    Ae(t).forEach(function (i) {
      Me(e, i) ||
        (r[i] =
          je(e, i) && n.isMergeableObject(t[i])
            ? Oe(i, n)(e[i], t[i], n)
            : B(t[i], n));
    }),
    r
  );
}
function V(e, t, n) {
  (((n ||= {}).arrayMerge = n.arrayMerge || De),
    (n.isMergeableObject = n.isMergeableObject || Ke),
    (n.cloneUnlessOtherwiseSpecified = B));
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : Ne(e, t, n)
    : B(t, n);
}
function H(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return {};
          },
    n = (function (n) {
      function r(e, n) {
        var a;
        return (
          A(this, r),
          (a = i.call(this, e, n)),
          (a.state = t(k({}, n.state))),
          (a.updateStateProps = a.updateStateProps.bind(I(a))),
          a
        );
      }
      P(r, n);
      var i = L(r);
      return (
        j(r, [
          {
            key: `componentDidMount`,
            value: function () {
              this.context.subscribe(this.updateStateProps);
            },
          },
          {
            key: `shouldComponentUpdate`,
            value: function (e, t) {
              return !Ge(t, this.state) || !Ge(e, this.props);
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              this.context.unsubscribe(this.updateStateProps);
            },
          },
          {
            key: `updateStateProps`,
            value: function () {
              this.setState(t(k({}, this.context.state)));
            },
          },
          {
            key: `render`,
            value: function () {
              var t = this,
                n = this.props,
                r = n.children,
                i = F(n, tt),
                a = Je(this.state, i, Be);
              return O.createElement(
                e,
                N(
                  {
                    ref: function (e) {
                      t.instance = e;
                    },
                  },
                  a,
                  {
                    carouselStore: {
                      getStoreState: this.context.getStoreState,
                      masterSpinnerError: this.context.masterSpinnerError,
                      masterSpinnerSuccess: this.context.masterSpinnerSuccess,
                      setStoreState: this.context.setStoreState,
                      subscribeMasterSpinner:
                        this.context.subscribeMasterSpinner,
                      unsubscribeAllMasterSpinner:
                        this.context.unsubscribeAllMasterSpinner,
                      unsubscribeMasterSpinner:
                        this.context.unsubscribeMasterSpinner,
                    },
                  },
                ),
                r,
              );
            },
          },
        ]),
        r
      );
    })(O.Component);
  return (
    M(n, `contextType`, K),
    M(n, `propTypes`, { children: W.children }),
    M(n, `defaultProps`, { children: null }),
    n
  );
}
var Pe = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
he.resetWarningCache = me;
var Fe = function () {
    function e(e, t, n, r, i, a) {
      if (a !== Pe) {
        var o = Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((o.name = `Invariant Violation`), o);
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: he,
      resetWarningCache: me,
    };
    return ((n.PropTypes = n), n);
  },
  U = pe(function (e) {
    e.exports = Fe();
  }),
  Ie = `loading`,
  Le = `success`,
  Re = `error`,
  W = {
    children: U.oneOfType([U.arrayOf(U.node), U.node]),
    direction: U.oneOf([`forward`, `backward`]),
    height: function (e, t) {
      var n = e[t];
      return e.orientation !== `vertical` ||
        (n !== null && typeof n == `number`)
        ? null
        : Error(
            `Missing required property '${t}' when orientation is vertical.  You must supply a number representing the height in pixels`,
          );
    },
    orientation: U.oneOf([`horizontal`, `vertical`]),
    isBgImage: function (e, t) {
      return !0 === e[t] && e.tag === `img`
        ? Error(
            `HTML img elements should not have a backgroundImage.  Please use ${t} for other block-level HTML tags, like div, a, section, etc...`,
          )
        : null;
    },
  },
  ze = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  Be = {
    arrayMerge: function (e, t) {
      return t;
    },
    clone: !1,
    customMerge: function (e) {
      if (
        e === `$$typeof` ||
        e === `_owner` ||
        e === `_store` ||
        e === `ref` ||
        e === `key`
      )
        return function (e, t) {
          return t;
        };
    },
  },
  Ve = { buttonBack: `buttonBack___1mlaL` },
  He = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `step`,
    `totalSlides`,
    `visibleSlides`,
    `infinite`,
  ],
  Ue = (function (e) {
    function t(e) {
      var r;
      return (
        A(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(I(r))),
        r
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(
        t,
        [
          {
            key: `handleOnClick`,
            value: function (e) {
              var t = this.props,
                n = t.carouselStore,
                r = t.currentSlide,
                i = t.onClick,
                a = t.step,
                o = t.infinite,
                s = t.visibleSlides,
                c = t.totalSlides - s,
                l = Math.max(r - a, 0);
              (o && (l = r === 0 ? c : l),
                n.setStoreState(
                  { currentSlide: l, isPlaying: !1 },
                  i !== null && i.call(this, e),
                ));
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                n = (e.carouselStore, e.className),
                r =
                  (e.currentSlide,
                  e.disabled,
                  e.onClick,
                  e.step,
                  e.totalSlides,
                  e.visibleSlides,
                  e.infinite),
                i = F(e, He),
                a = R([Ve.buttonBack, `carousel__back-button`, n]),
                o = t.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  r,
                );
              return O.createElement(
                `button`,
                N(
                  {
                    type: `button`,
                    "aria-label": `previous`,
                    className: a,
                    onClick: this.handleOnClick,
                    disabled: o,
                  },
                  i,
                ),
                this.props.children,
              );
            },
          },
        ],
        [
          {
            key: `setDisabled`,
            value: function (e, t, n) {
              return e === null ? t === 0 && !n : e;
            },
          },
        ],
      ),
      t
    );
  })(O.Component);
(M(Ue, `propTypes`, {
  carouselStore: U.object.isRequired,
  children: W.children.isRequired,
  className: U.string,
  currentSlide: U.number.isRequired,
  disabled: U.bool,
  onClick: U.func,
  step: U.number.isRequired,
  totalSlides: U.number.isRequired,
  visibleSlides: U.number.isRequired,
  infinite: U.bool,
}),
  M(Ue, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  }));
var We = pe(function (e, t) {
  var n = {}.toString,
    r = typeof window < `u` ? window.Node : Function;
  e.exports = t = function (e) {
    var t = typeof e;
    if (t != `object`) return t;
    if (((t = i[n.call(e)]), t == `object`))
      return e instanceof Map ? `map` : e instanceof Set ? `set` : `object`;
    if (t) return t;
    if (e instanceof r)
      switch (e.nodeType) {
        case 1:
          return `element`;
        case 3:
          return `text-node`;
        case 9:
          return `document`;
        case 11:
          return `document-fragment`;
        default:
          return `dom-node`;
      }
  };
  var i = (t.types = {
    "[object Function]": `function`,
    "[object Date]": `date`,
    "[object RegExp]": `regexp`,
    "[object Arguments]": `arguments`,
    "[object Array]": `array`,
    "[object Set]": `set`,
    "[object String]": `string`,
    "[object Null]": `null`,
    "[object Undefined]": `undefined`,
    "[object Number]": `number`,
    "[object Boolean]": `boolean`,
    "[object Object]": `object`,
    "[object Map]": `map`,
    "[object Text]": `text-node`,
    "[object Uint8Array]": `bit-array`,
    "[object Uint16Array]": `bit-array`,
    "[object Uint32Array]": `bit-array`,
    "[object Uint8ClampedArray]": `bit-array`,
    "[object Error]": `error`,
    "[object FormData]": `form-data`,
    "[object File]": `file`,
    "[object Blob]": `blob`,
  });
});
We.types;
var G = {};
((G.number = function (e, t) {
  return e !== e && t !== t;
}),
  (G.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      G.object(e, t, n) &&
      ve(e.prototype, t.prototype)
    );
  }),
  (G.date = function (e, t) {
    return +e == +t;
  }),
  (G.regexp = function (e, t) {
    return e.toString() === t.toString();
  }),
  (G.element = function (e, t) {
    return e.outerHTML === t.outerHTML;
  }),
  (G.textnode = function (e, t) {
    return e.textContent === t.textContent;
  }),
  (G.arguments = G[`bit-array`] = G.array = ye(be)),
  (G.object = ye(xe)));
var Ge = ve,
  Ke = function (e) {
    return Ce(e) && !we(e);
  },
  qe =
    typeof Symbol == `function` && Symbol.for
      ? Symbol.for(`react.element`)
      : 60103;
V.all = function (e, t) {
  if (!Array.isArray(e)) throw Error(`first argument should be an array`);
  return e.reduce(function (e, n) {
    return V(e, n, t);
  }, {});
};
var Je = V,
  K = O.createContext(),
  Ye = function e(t) {
    return (
      Object.freeze(t),
      Object.getOwnPropertyNames(t).forEach(function (n) {
        !t.hasOwnProperty(n) ||
          t[n] === null ||
          (typeof t[n] != `object` && typeof t[n] != `function`) ||
          Object.isFrozen(t[n]) ||
          e(t[n]);
      }),
      t
    );
  },
  Xe = { masterSpinnerFinished: !1 },
  Ze = (function () {
    function e(t) {
      (A(this, e),
        (this.state = Ye(Je(Xe, t, Be))),
        (this.subscriptions = []),
        (this.masterSpinnerSubscriptions = {}),
        (this.setStoreState = this.setStoreState.bind(this)),
        (this.getStoreState = this.getStoreState.bind(this)),
        (this.subscribe = this.subscribe.bind(this)),
        (this.unsubscribe = this.unsubscribe.bind(this)),
        (this.updateSubscribers = this.updateSubscribers.bind(this)),
        (this.subscribeMasterSpinner = this.subscribeMasterSpinner.bind(this)),
        (this.unsubscribeMasterSpinner =
          this.unsubscribeMasterSpinner.bind(this)),
        (this.unsubscribeAllMasterSpinner =
          this.unsubscribeAllMasterSpinner.bind(this)),
        (this.masterSpinnerSuccess = this.masterSpinnerSuccess.bind(this)),
        (this.masterSpinnerError = this.masterSpinnerError.bind(this)));
    }
    return (
      j(e, [
        {
          key: `setStoreState`,
          value: function (e, t) {
            ((this.state = Ye(Je(this.state, e, Be))),
              this.updateSubscribers(t));
          },
        },
        {
          key: `getStoreState`,
          value: function () {
            return Je({}, this.state, Be);
          },
        },
        {
          key: `subscribe`,
          value: function (e) {
            this.subscriptions.push(e);
          },
        },
        {
          key: `unsubscribe`,
          value: function (e) {
            var t = this.subscriptions.indexOf(e);
            t !== -1 && this.subscriptions.splice(t, 1);
          },
        },
        {
          key: `updateSubscribers`,
          value: function (e) {
            (this.subscriptions.forEach(function (e) {
              return e();
            }),
              typeof e == `function` && e(this.getStoreState()));
          },
        },
        {
          key: `subscribeMasterSpinner`,
          value: function (e) {
            Object.keys(this.masterSpinnerSubscriptions).indexOf(e) === -1 &&
              (this.masterSpinnerSubscriptions[e] = {
                success: !1,
                error: !1,
                complete: !1,
              });
          },
        },
        {
          key: `unsubscribeMasterSpinner`,
          value: function (e) {
            return (
              Object.keys(this.masterSpinnerSubscriptions).indexOf(e) !== -1 &&
              (this.setMasterSpinnerFinished(),
              delete this.masterSpinnerSubscriptions[e])
            );
          },
        },
        {
          key: `unsubscribeAllMasterSpinner`,
          value: function () {
            ((this.masterSpinnerSubscriptions = {}),
              this.setMasterSpinnerFinished());
          },
        },
        {
          key: `masterSpinnerSuccess`,
          value: function (e) {
            ((this.masterSpinnerSubscriptions[e].success = !0),
              (this.masterSpinnerSubscriptions[e].complete = !0),
              this.setMasterSpinnerFinished());
          },
        },
        {
          key: `masterSpinnerError`,
          value: function (e) {
            ((this.masterSpinnerSubscriptions[e].error = !0),
              (this.masterSpinnerSubscriptions[e].complete = !0),
              this.setMasterSpinnerFinished());
          },
        },
        {
          key: `setMasterSpinnerFinished`,
          value: function () {
            this.setStoreState({
              masterSpinnerFinished: this.isMasterSpinnerFinished(),
            });
          },
        },
        {
          key: `isMasterSpinnerFinished`,
          value: function () {
            var e = this;
            return (
              Object.keys(this.masterSpinnerSubscriptions).filter(function (t) {
                return !0 !== e.masterSpinnerSubscriptions[t].complete;
              }).length === 0
            );
          },
        },
      ]),
      e
    );
  })(),
  Qe = [
    `children`,
    `className`,
    `currentSlide`,
    `disableAnimation`,
    `disableKeyboard`,
    `hasMasterSpinner`,
    `interval`,
    `isPageScrollLocked`,
    `isPlaying`,
    `lockOnWindowScroll`,
    `naturalSlideHeight`,
    `naturalSlideWidth`,
    `orientation`,
    `playDirection`,
    `step`,
    `dragStep`,
    `tag`,
    `totalSlides`,
    `touchEnabled`,
    `dragEnabled`,
    `visibleSlides`,
    `infinite`,
    `isIntrinsicHeight`,
  ],
  $e = (function (e) {
    function t(e) {
      var r;
      if (
        (A(this, t),
        (r = n.call(this, e)),
        e.isIntrinsicHeight && e.orientation !== `horizontal`)
      )
        throw Error(
          `isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.`,
        );
      var i = {
        currentSlide: e.currentSlide,
        disableAnimation: e.disableAnimation,
        disableKeyboard: e.disableKeyboard,
        hasMasterSpinner: e.hasMasterSpinner,
        imageErrorCount: 0,
        imageSuccessCount: 0,
        interval: e.interval,
        isPageScrollLocked: e.isPageScrollLocked,
        isPlaying: e.isPlaying,
        lockOnWindowScroll: e.lockOnWindowScroll,
        masterSpinnerThreshold: 0,
        naturalSlideHeight: e.naturalSlideHeight,
        naturalSlideWidth: e.naturalSlideWidth,
        orientation: e.orientation,
        playDirection: e.playDirection,
        privateUnDisableAnimation: !1,
        slideSize: ge(e.totalSlides, e.visibleSlides),
        slideTraySize: _e(e.totalSlides, e.visibleSlides),
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        dragEnabled: e.dragEnabled,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
      return ((r.carouselStore = new Ze(i)), r);
    }
    P(t, e);
    var n = L(t);
    return (
      j(t, [
        {
          key: `componentDidUpdate`,
          value: function (e) {
            var t = this,
              n = {};
            ([
              `currentSlide`,
              `disableAnimation`,
              `disableKeyboard`,
              `hasMasterSpinner`,
              `interval`,
              `isPlaying`,
              `naturalSlideHeight`,
              `naturalSlideWidth`,
              `lockOnWindowScroll`,
              `orientation`,
              `playDirection`,
              `step`,
              `dragStep`,
              `totalSlides`,
              `touchEnabled`,
              `dragEnabled`,
              `visibleSlides`,
            ].forEach(function (r) {
              e[r] !== t.props[r] && (n[r] = t.props[r]);
            }),
              this.props.currentSlide !== e.currentSlide &&
                !this.props.disableAnimation &&
                ((n.disableAnimation = !0), (n.privateUnDisableAnimation = !0)),
              (this.props.totalSlides === e.totalSlides &&
                this.props.visibleSlides === e.visibleSlides) ||
                ((n.slideSize = ge(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                )),
                (n.slideTraySize = _e(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                ))),
              this.carouselStore.state.currentSlide >= this.props.totalSlides &&
                (n.currentSlide = Math.max(this.props.totalSlides - 1, 0)),
              Object.keys(n).length > 0 && this.carouselStore.setStoreState(n));
          },
        },
        {
          key: `componentWillUnmount`,
          value: function () {
            this.carouselStore.unsubscribeAllMasterSpinner();
          },
        },
        {
          key: `getStore`,
          value: function () {
            return this.carouselStore;
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t =
                (e.children,
                e.className,
                e.currentSlide,
                e.disableAnimation,
                e.disableKeyboard,
                e.hasMasterSpinner,
                e.interval,
                e.isPageScrollLocked,
                e.isPlaying,
                e.lockOnWindowScroll,
                e.naturalSlideHeight,
                e.naturalSlideWidth,
                e.orientation,
                e.playDirection,
                e.step,
                e.dragStep,
                e.tag),
              n =
                (e.totalSlides,
                e.touchEnabled,
                e.dragEnabled,
                e.visibleSlides,
                e.infinite,
                e.isIntrinsicHeight,
                F(e, Qe)),
              r = R([`carousel`, this.props.className]);
            return O.createElement(
              t,
              N({ className: r }, n),
              O.createElement(
                K.Provider,
                { value: this.carouselStore },
                this.props.children,
              ),
            );
          },
        },
      ]),
      t
    );
  })(O.Component),
  et =
    (M($e, `propTypes`, {
      children: W.children.isRequired,
      className: U.string,
      currentSlide: U.number,
      disableAnimation: U.bool,
      disableKeyboard: U.bool,
      hasMasterSpinner: U.bool,
      interval: U.number,
      isPageScrollLocked: U.bool,
      isPlaying: U.bool,
      lockOnWindowScroll: U.bool,
      naturalSlideHeight: U.number.isRequired,
      naturalSlideWidth: U.number.isRequired,
      orientation: W.orientation,
      playDirection: W.direction,
      step: U.number,
      dragStep: U.number,
      tag: U.string,
      totalSlides: U.number.isRequired,
      touchEnabled: U.bool,
      dragEnabled: U.bool,
      visibleSlides: U.number,
      infinite: U.bool,
      isIntrinsicHeight: U.bool,
    }),
    M($e, `defaultProps`, {
      className: null,
      currentSlide: 0,
      disableAnimation: !1,
      disableKeyboard: !1,
      hasMasterSpinner: !1,
      interval: 5e3,
      isPageScrollLocked: !1,
      isPlaying: !1,
      lockOnWindowScroll: !1,
      orientation: `horizontal`,
      playDirection: `forward`,
      step: 1,
      dragStep: 1,
      tag: `div`,
      touchEnabled: !0,
      dragEnabled: !0,
      visibleSlides: 1,
      infinite: !1,
      isIntrinsicHeight: !1,
    }),
    $e);
K.Consumer;
var tt = [`children`],
  nt = H(Ue, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  rt = { buttonFirst: `buttonFirst___2rhFr` },
  it = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
  ],
  at = (function (e) {
    function t() {
      var e;
      return (
        A(this, t),
        (e = n.call(this)),
        (e.handleOnClick = e.handleOnClick.bind(I(e))),
        e
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(t, [
        {
          key: `handleOnClick`,
          value: function (e) {
            var t = this.props,
              n = t.carouselStore,
              r = t.onClick;
            n.setStoreState(
              { currentSlide: 0, isPlaying: !1 },
              r !== null && r.call(this, e),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.className),
              n = e.currentSlide,
              r = e.disabled,
              i = (e.onClick, e.totalSlides, F(e, it)),
              a = R([rt.buttonFirst, `carousel__first-button`, t]),
              o = r === null ? n === 0 : r;
            return O.createElement(
              `button`,
              N(
                {
                  type: `button`,
                  "aria-label": `first`,
                  className: a,
                  onClick: this.handleOnClick,
                  disabled: o,
                },
                i,
              ),
              this.props.children,
            );
          },
        },
      ]),
      t
    );
  })(O.Component);
H(
  (M(at, `propTypes`, {
    carouselStore: U.object.isRequired,
    children: W.children.isRequired,
    className: U.string,
    currentSlide: U.number.isRequired,
    disabled: U.bool,
    onClick: U.func,
    totalSlides: U.number.isRequired,
  }),
  M(at, `defaultProps`, { className: null, disabled: null, onClick: null }),
  at),
  function (e) {
    return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
  },
);
var ot = { buttonLast: `buttonLast___2yuh0` },
  st = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
    `visibleSlides`,
  ],
  ct = (function (e) {
    function t() {
      var e;
      return (
        A(this, t),
        (e = n.call(this)),
        (e.handleOnClick = e.handleOnClick.bind(I(e))),
        e
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(t, [
        {
          key: `handleOnClick`,
          value: function (e) {
            var t = this.props,
              n = t.carouselStore,
              r = t.onClick,
              i = t.totalSlides,
              a = t.visibleSlides;
            n.setStoreState(
              { currentSlide: i - a, isPlaying: !1 },
              r !== null && r.call(this, e),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.className),
              n = e.currentSlide,
              r = e.disabled,
              i = (e.onClick, e.totalSlides),
              a = e.visibleSlides,
              o = F(e, st),
              s = R([ot.buttonLast, `carousel__last-button`, t]),
              c = r === null ? n >= i - a : r;
            return O.createElement(
              `button`,
              N(
                {
                  type: `button`,
                  "aria-label": `last`,
                  className: s,
                  onClick: this.handleOnClick,
                  disabled: c,
                },
                o,
              ),
              this.props.children,
            );
          },
        },
      ]),
      t
    );
  })(O.Component);
H(
  (M(ct, `propTypes`, {
    carouselStore: U.object.isRequired,
    children: W.children.isRequired,
    className: U.string,
    currentSlide: U.number.isRequired,
    disabled: U.bool,
    onClick: U.func,
    totalSlides: U.number.isRequired,
    visibleSlides: U.number.isRequired,
  }),
  M(ct, `defaultProps`, { className: null, disabled: null, onClick: null }),
  ct),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var lt = { buttonNext: `buttonNext___2mOCa` },
  ut = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `step`,
    `totalSlides`,
    `visibleSlides`,
    `infinite`,
  ],
  dt = (function (e) {
    function t(e) {
      var r;
      return (
        A(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(I(r))),
        r
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(
        t,
        [
          {
            key: `handleOnClick`,
            value: function (e) {
              var t = this.props,
                n = t.currentSlide,
                r = t.onClick,
                i = t.step,
                a = t.carouselStore,
                o = t.infinite,
                s = t.totalSlides - t.visibleSlides,
                c = i + n,
                l = Math.min(c, s);
              (o && (l = s === n ? 0 : l),
                a.setStoreState(
                  { currentSlide: l, isPlaying: !1 },
                  r !== null && r.call(this, e),
                ));
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                n = (e.carouselStore, e.className),
                r = e.currentSlide,
                i = e.disabled,
                a = (e.onClick, e.step, e.totalSlides),
                o = e.visibleSlides,
                s = e.infinite,
                c = F(e, ut),
                l = R([lt.buttonNext, `carousel__next-button`, n]),
                u = t.setDisabled(i, r, o, a, s);
              return O.createElement(
                `button`,
                N(
                  {
                    type: `button`,
                    "aria-label": `next`,
                    className: l,
                    onClick: this.handleOnClick,
                    disabled: u,
                  },
                  c,
                ),
                this.props.children,
              );
            },
          },
        ],
        [
          {
            key: `setDisabled`,
            value: function (e, t, n, r, i) {
              return e === null ? t >= r - n && !i : e;
            },
          },
        ],
      ),
      t
    );
  })(O.PureComponent),
  ft = H(
    (M(dt, `propTypes`, {
      carouselStore: U.object.isRequired,
      children: W.children.isRequired,
      className: U.string,
      currentSlide: U.number.isRequired,
      disabled: U.bool,
      onClick: U.func,
      step: U.number.isRequired,
      totalSlides: U.number.isRequired,
      visibleSlides: U.number.isRequired,
      infinite: U.bool,
    }),
    M(dt, `defaultProps`, {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    dt),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        step: e.step,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
      };
    },
  ),
  pt = { buttonNext: `buttonNext___3Lm3s` },
  mt = [
    `carouselStore`,
    `children`,
    `childrenPaused`,
    `childrenPlaying`,
    `className`,
    `isPlaying`,
    `onClick`,
  ],
  ht = (function (e) {
    function t(e) {
      var r;
      return (
        A(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(I(r))),
        r
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(t, [
        {
          key: `handleOnClick`,
          value: function (e) {
            var t = this.props.onClick;
            this.props.carouselStore.setStoreState(
              { isPlaying: !this.props.isPlaying },
              t !== null && t.call(this, e),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.children, e.childrenPaused),
              n = e.childrenPlaying,
              r = e.className,
              i = e.isPlaying,
              a = (e.onClick, F(e, mt)),
              o = R([pt.buttonNext, `carousel__play-button`, r]);
            return O.createElement(
              `button`,
              N(
                {
                  type: `button`,
                  "aria-label": `play`,
                  className: o,
                  onClick: this.handleOnClick,
                },
                a,
              ),
              i && n,
              !i && t,
              this.props.children,
            );
          },
        },
      ]),
      t
    );
  })(O.PureComponent);
H(
  (M(ht, `propTypes`, {
    carouselStore: U.object.isRequired,
    children: U.node,
    childrenPaused: U.node,
    childrenPlaying: U.node,
    className: U.string,
    isPlaying: U.bool.isRequired,
    onClick: U.func,
  }),
  M(ht, `defaultProps`, {
    children: null,
    childrenPaused: null,
    childrenPlaying: null,
    className: null,
    onClick: null,
  }),
  ht),
  function (e) {
    return { isPlaying: e.isPlaying };
  },
);
var gt = { dot: `dot___3c3SI` },
  _t = [
    `carouselStore`,
    `children`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `selected`,
    `slide`,
    `totalSlides`,
    `visibleSlides`,
  ],
  vt = (function (e) {
    function t(e) {
      var r;
      return (
        A(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(I(r))),
        r
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(t, [
        {
          key: `handleOnClick`,
          value: function (e) {
            var t = this.props,
              n = t.carouselStore,
              r = t.onClick,
              i = t.slide,
              a = t.totalSlides,
              o = t.visibleSlides,
              s = i >= a - o ? a - o : i;
            n.setStoreState(
              { currentSlide: s, isPlaying: !1 },
              r !== null && r.call(this, e),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.children, e.className),
              n = e.currentSlide,
              r = e.disabled,
              i = (e.onClick, e.selected),
              a = e.slide,
              o = (e.totalSlides, e.visibleSlides),
              s = F(e, _t),
              c = a >= n && a < n + o,
              l = typeof i == `boolean` ? i : c,
              u = typeof r == `boolean` ? r : !0 === c,
              d = R([
                gt.dot,
                l && gt.dotSelected,
                `carousel__dot`,
                `carousel__dot--${a}`,
                l && `carousel__dot--selected`,
                t,
              ]);
            return O.createElement(
              `button`,
              N(
                {
                  "aria-label": `slide dot`,
                  type: `button`,
                  onClick: this.handleOnClick,
                  className: d,
                  disabled: u,
                },
                s,
              ),
              this.props.children,
            );
          },
        },
      ]),
      t
    );
  })(O.Component),
  yt = H(
    (M(vt, `propTypes`, {
      carouselStore: U.object.isRequired,
      children: W.children,
      className: U.string,
      currentSlide: U.number.isRequired,
      disabled: U.bool,
      onClick: U.func,
      selected: U.bool,
      slide: U.number.isRequired,
      totalSlides: U.number.isRequired,
      visibleSlides: U.number.isRequired,
    }),
    M(vt, `defaultProps`, {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    vt),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      };
    },
  ),
  bt = {},
  xt = [`renderDots`],
  St = [
    `carouselStore`,
    `children`,
    `className`,
    `currentSlide`,
    `dotNumbers`,
    `totalSlides`,
    `visibleSlides`,
    `disableActiveDots`,
    `showAsSelectedForCurrentSlideOnly`,
    `renderDots`,
  ],
  Ct = (function (e) {
    function t() {
      return (A(this, t), n.apply(this, arguments));
    }
    P(t, e);
    var n = L(t);
    return (
      j(t, [
        {
          key: `renderDots`,
          value: function () {
            var e = this.props,
              t = e.currentSlide,
              n = e.totalSlides,
              r = e.visibleSlides,
              i = e.disableActiveDots,
              a = e.showAsSelectedForCurrentSlideOnly,
              o = e.renderDots;
            if (o) {
              var s = this.props;
              return (s.renderDots, o(F(s, xt)));
            }
            for (var c = [], l = 0; l < n; l += 1) {
              var u = l >= t && l < t + r,
                d = a ? l === t : u,
                f = l >= n - r ? n - r : l;
              c.push(
                O.createElement(
                  yt,
                  { key: l, slide: f, selected: d, disabled: !!i && d },
                  O.createElement(
                    `span`,
                    { className: R[`carousel__dot-group-dot`] },
                    this.props.dotNumbers && l + 1,
                  ),
                ),
              );
            }
            return c;
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.children),
              n = e.className,
              r =
                (e.currentSlide,
                e.dotNumbers,
                e.totalSlides,
                e.visibleSlides,
                e.disableActiveDots,
                e.showAsSelectedForCurrentSlideOnly,
                e.renderDots,
                F(e, St)),
              i = R([bt.DotGroup, `carousel__dot-group`, n]);
            return O.createElement(
              `div`,
              N({ className: i }, r),
              this.renderDots(),
              t,
            );
          },
        },
      ]),
      t
    );
  })(O.Component);
H(
  (M(Ct, `propTypes`, {
    children: W.children,
    className: U.string,
    currentSlide: U.number.isRequired,
    carouselStore: U.object.isRequired,
    totalSlides: U.number.isRequired,
    visibleSlides: U.number.isRequired,
    dotNumbers: U.bool,
    disableActiveDots: U.bool,
    showAsSelectedForCurrentSlideOnly: U.bool,
    renderDots: U.func,
  }),
  M(Ct, `defaultProps`, {
    children: null,
    className: null,
    dotNumbers: !1,
    disableActiveDots: !0,
    showAsSelectedForCurrentSlideOnly: !1,
    renderDots: null,
  }),
  Ct),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var q = { image: `image___xtQGH` },
  wt = [`src`, `alt`],
  Tt = [
    `carouselStore`,
    `children`,
    `className`,
    `hasMasterSpinner`,
    `isBgImage`,
    `onError`,
    `onLoad`,
    `renderError`,
    `renderLoading`,
    `style`,
    `tag`,
  ],
  Et = (function (e) {
    function t(e) {
      var r;
      return (
        A(this, t),
        (r = n.call(this, e)),
        (r.state = { imageStatus: Ie }),
        (r.handleImageLoad = r.handleImageLoad.bind(I(r))),
        (r.handleImageError = r.handleImageError.bind(I(r))),
        (r.image = null),
        r
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(
        t,
        [
          {
            key: `componentDidMount`,
            value: function () {
              (t.subscribeMasterSpinner(this.props), this.initImage());
            },
          },
          {
            key: `componentDidUpdate`,
            value: function (e) {
              e.src !== this.props.src &&
                (t.unsubscribeMasterSpinner(e),
                t.subscribeMasterSpinner(this.props),
                this.initImage());
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              (t.unsubscribeMasterSpinner(this.props),
                this.image.removeEventListener(`load`, this.handleImageLoad),
                this.image.removeEventListener(`error`, this.handleImageError),
                (this.image = null));
            },
          },
          {
            key: `initImage`,
            value: function () {
              if (
                (this.setState({ imageStatus: Ie }),
                (this.image = document.createElement(`img`)),
                this.image.addEventListener(`load`, this.handleImageLoad, !1),
                this.image.addEventListener(`error`, this.handleImageError, !1),
                (this.image.src = this.props.src),
                this.image.readyState || this.image.complete)
              ) {
                var e = this.image.src;
                ((this.image.src = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`),
                  (this.image.src = e));
              }
            },
          },
          {
            key: `handleImageLoad`,
            value: function (e) {
              (this.setState({ imageStatus: Le }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(e));
            },
          },
          {
            key: `handleImageError`,
            value: function (e) {
              (this.setState({ imageStatus: Re }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerError(this.props.src),
                this.props.onError && this.props.onError(e));
            },
          },
          {
            key: `tempTag`,
            value: function () {
              return this.props.tag === `img` ? `div` : this.props.tag;
            },
          },
          {
            key: `customRender`,
            value: function (e) {
              return typeof this.props[e] == `function`
                ? this.props[e]()
                : this.props.children;
            },
          },
          {
            key: `renderLoading`,
            value: function (e) {
              var t = this.tempTag(),
                n = R([
                  q.image,
                  q.imageLoading,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--loading`,
                  this.props.className,
                ]);
              return O.createElement(
                t,
                N({ className: n }, e),
                this.customRender(`renderLoading`),
              );
            },
          },
          {
            key: `renderError`,
            value: function (e) {
              var t = this.tempTag(),
                n = R([
                  q.image,
                  q.imageError,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--error`,
                  this.props.className,
                ]);
              return O.createElement(
                t,
                N({ className: n }, e),
                this.customRender(`renderError`),
              );
            },
          },
          {
            key: `renderSuccess`,
            value: function (e) {
              var t = this.props,
                n = t.style,
                r = t.tag,
                i = R([
                  q.image,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--success`,
                  this.props.className,
                ]),
                a = N({}, n),
                o = e;
              if (r !== `img`) {
                var s = e.src;
                (e.alt,
                  (o = F(e, wt)),
                  (a = N({}, n, {
                    backgroundImage: `url("${s}")`,
                    backgroundSize: `cover`,
                  })));
              }
              return O.createElement(
                r,
                N({ className: i, style: a }, o),
                this.props.children,
              );
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t =
                  (e.carouselStore,
                  e.children,
                  e.className,
                  e.hasMasterSpinner,
                  e.isBgImage,
                  e.onError,
                  e.onLoad,
                  e.renderError,
                  e.renderLoading,
                  e.style,
                  e.tag,
                  F(e, Tt));
              switch (this.state.imageStatus) {
                case Ie:
                  return this.renderLoading(t);
                case Le:
                  return this.renderSuccess(t);
                case Re:
                  return this.renderError(t);
                default:
                  throw Error(`unknown value for this.state.imageStatus`);
              }
            },
          },
        ],
        [
          {
            key: `subscribeMasterSpinner`,
            value: function (e) {
              e.hasMasterSpinner &&
                e.carouselStore.subscribeMasterSpinner(e.src);
            },
          },
          {
            key: `unsubscribeMasterSpinner`,
            value: function (e) {
              e.hasMasterSpinner &&
                e.carouselStore.unsubscribeMasterSpinner(e.src);
            },
          },
        ],
      ),
      t
    );
  })(O.Component);
(M(Et, `propTypes`, {
  alt: U.string,
  carouselStore: U.object.isRequired,
  children: W.children,
  className: U.string,
  hasMasterSpinner: U.bool.isRequired,
  isBgImage: W.isBgImage,
  onError: U.func,
  onLoad: U.func,
  renderError: U.func,
  renderLoading: U.func,
  src: U.string.isRequired,
  style: U.object,
  tag: U.string,
}),
  M(Et, `defaultProps`, {
    alt: ``,
    children: null,
    className: null,
    isBgImage: !1,
    onError: null,
    onLoad: null,
    renderError: null,
    renderLoading: null,
    style: null,
    tag: `img`,
  }));
var Dt = H(Et, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  Ot = { spinner: `spinner___27VUp`, spin: `spin___S3UuE` },
  kt = [`className`],
  At = (function (e) {
    function t() {
      return (A(this, t), n.apply(this, arguments));
    }
    P(t, e);
    var n = L(t);
    return (
      j(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.className,
              n = F(e, kt),
              r = R([Ot.spinner, `carousel__spinner`, t]);
            return O.createElement(`div`, N({ className: r }, n));
          },
        },
      ]),
      t
    );
  })(O.PureComponent),
  jt =
    (M(At, `propTypes`, { className: U.string }),
    M(At, `defaultProps`, { className: null }),
    At),
  J = {
    container: `container___2O72F`,
    overlay: `overlay___IV4qY`,
    hover: `hover___MYy31`,
    zoom: `zoom___3kqYk`,
    loading: `loading___1pvNI`,
    imageLoadingSpinnerContainer: `imageLoadingSpinnerContainer___3UIPD`,
  },
  Mt = [
    `alt`,
    `bgImageProps`,
    `bgImageTag`,
    `carouselStore`,
    `className`,
    `imageClassName`,
    `overlayClassName`,
    `isPinchZoomEnabled`,
    `spinner`,
    `src`,
    `srcZoomed`,
    `tag`,
  ],
  Nt,
  Pt = 2,
  Ft = 3;
H(
  ((Nt = (function (e) {
    function t(e) {
      var r;
      return (
        A(this, t),
        (r = n.call(this, e)),
        (r.state = {
          isImageLoading: !0,
          isImageLoadingError: !0,
          isHovering: !1,
          isZooming: !1,
          x: null,
          y: null,
          scale: 1,
        }),
        (r.tpCache = {}),
        (r.handleImageComplete = r.handleImageComplete.bind(I(r))),
        (r.handleImageLoadError = r.handleImageLoadError.bind(I(r))),
        (r.handleOnMouseMove = r.handleOnMouseMove.bind(I(r))),
        (r.handleOnMouseOut = r.handleOnMouseOut.bind(I(r))),
        (r.handleOnMouseOver = r.handleOnMouseOver.bind(I(r))),
        (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(I(r))),
        (r.handleOnTouchMove = r.handleOnTouchMove.bind(I(r))),
        (r.handleOnTouchStart = r.handleOnTouchStart.bind(I(r))),
        r
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(
        t,
        [
          {
            key: `componentDidUpdate`,
            value: function (e, t) {
              (!1 === t.isZooming &&
                !0 === this.state.isZooming &&
                this.props.carouselStore.setStoreState({
                  isPageScrollLocked: !0,
                }),
                !0 === t.isZooming &&
                  !1 === this.state.isZooming &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !1,
                  }));
            },
          },
          {
            key: `handleImageComplete`,
            value: function (e) {
              (this.setState({ isImageLoading: !1 }),
                this.props && this.props.onLoad && this.props.onLoad(e));
            },
          },
          {
            key: `handleImageLoadError`,
            value: function (e) {
              (this.setState({ isImageLoadingError: !0, isImageLoading: !1 }),
                this.props && this.props.onError && this.props.onError(e));
            },
          },
          {
            key: `handleOnMouseOver`,
            value: function () {
              this.state.isZooming ||
                this.setState({ isHovering: !0, scale: Pt });
            },
          },
          {
            key: `handleOnMouseOut`,
            value: function () {
              this.state.isZooming ||
                this.setState({ isHovering: !1, scale: 1 });
            },
          },
          {
            key: `handleOnMouseMove`,
            value: function (e) {
              if (!this.state.isZooming) {
                var t = z((e.nativeEvent.offsetX / e.target.offsetWidth) * 100),
                  n = z((e.nativeEvent.offsetY / e.target.offsetHeight) * 100);
                this.setState({ x: t, y: n });
              }
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (e) {
              var t = this;
              this.props.isPinchZoomEnabled &&
                (se(e.targetTouches).forEach(function (e) {
                  t.tpCache[e.identifier] = {
                    clientX: e.clientX,
                    clientY: e.clientY,
                  };
                }),
                this.setState(function (e) {
                  return {
                    isZooming: e.isZooming || Object.keys(t.tpCache).length > 1,
                  };
                }));
            },
          },
          {
            key: `handleOnTouchMove`,
            value: function (e) {
              var n = this;
              if (this.state.isZooming) {
                e.persist();
                var r = se(e.targetTouches)
                  .filter(function (e) {
                    return n.tpCache[e.identifier];
                  })
                  .slice(0, 2);
                if (r.length === 2) {
                  e.stopPropagation();
                  var i = e.target.getBoundingClientRect(),
                    a = r[0].identifier,
                    o = r[1].identifier,
                    s = {
                      x1: this.tpCache[a].clientX,
                      y1: this.tpCache[a].clientY,
                      x2: this.tpCache[o].clientX,
                      y2: this.tpCache[o].clientY,
                    };
                  s.distance = t.distanceBetweenTwoTouches(k({}, s));
                  var c = t.midpointBetweenTwoTouches(k({}, s));
                  ((s.cx = c.x), (s.cy = c.y));
                  var l = {
                    x1: r[0].clientX,
                    y1: r[0].clientY,
                    x2: r[1].clientX,
                    y2: r[1].clientY,
                  };
                  l.distance = t.distanceBetweenTwoTouches(k({}, l));
                  var u = t.midpointBetweenTwoTouches(k({}, l));
                  ((l.cx = u.x), (l.cy = u.y));
                  var d = z(
                      ze({
                        min: 0,
                        max: 100,
                        x: ((l.cx - i.left) / i.width) * 100,
                      }),
                    ),
                    f = z(
                      ze({
                        min: 0,
                        max: 100,
                        x: ((l.cy - i.top) / i.height) * 100,
                      }),
                    ),
                    p = function (e) {
                      return ze({
                        min: 1,
                        max: Ft,
                        x: e.scale + (l.distance - s.distance) / 100,
                      });
                    };
                  this.setState(function (e) {
                    return { isZooming: p(e) !== 1, scale: p(e), x: d, y: f };
                  });
                }
              }
            },
          },
          {
            key: `handleOnTouchEnd`,
            value: function (e) {
              var t = this;
              this.props.isPinchZoomEnabled &&
                (se(e.changedTouches).forEach(function (e) {
                  delete t.tpCache[e.identifier];
                }),
                Object.keys(this.tpCache).length === 0 &&
                  this.setState({ isZooming: !1 }));
            },
          },
          {
            key: `renderLoading`,
            value: function () {
              if (this.state.isImageLoading) {
                var e = this.props.spinner;
                return O.createElement(
                  `div`,
                  {
                    className: R([
                      J.imageLoadingSpinnerContainer,
                      `carousel__image-loading-spinner-container`,
                    ]),
                  },
                  e && e(),
                  !e && O.createElement(jt, null),
                );
              }
              return null;
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.alt,
                n = e.bgImageProps,
                r = e.bgImageTag,
                i = (e.carouselStore, e.className),
                a = e.imageClassName,
                o = e.overlayClassName,
                s = (e.isPinchZoomEnabled, e.spinner, e.src),
                c = e.srcZoomed,
                l = e.tag,
                u = F(e, Mt),
                d = R([J.container, i]),
                f = R([J.image, `carousel__zoom-image`, a]),
                p = R([
                  J.overlay,
                  `carousel__zoom-image-overlay`,
                  this.state.isHovering && J.hover,
                  this.state.isZooming && J.zoom,
                  this.state.isHovering &&
                    `carousel__zoom-image-overlay--hovering`,
                  this.state.isZooming &&
                    `carousel__zoom-image-overlay--zooming`,
                  o,
                ]),
                m = {};
              return (
                (this.state.isHovering || this.state.isZooming) &&
                  ((m.transformOrigin = `${this.state.x} ${this.state.y}`),
                  (m.transform = `scale(${this.state.scale})`)),
                O.createElement(
                  l,
                  N({ className: d }, u),
                  O.createElement(
                    Dt,
                    N(
                      {
                        alt: t,
                        className: f,
                        tag: r,
                        src: s,
                        onLoad: this.handleImageComplete,
                        onError: this.handleImageLoadError,
                      },
                      n,
                    ),
                  ),
                  O.createElement(Dt, {
                    className: p,
                    tag: `div`,
                    src: c || s,
                    style: m,
                    isBgImage: !0,
                    onFocus: this.handleOnMouseOver,
                    onMouseOver: this.handleOnMouseOver,
                    onBlur: this.handleOnMouseOut,
                    onMouseOut: this.handleOnMouseOut,
                    onMouseMove: this.handleOnMouseMove,
                    onTouchStart: this.handleOnTouchStart,
                    onTouchEnd: this.handleOnTouchEnd,
                    onTouchMove: this.handleOnTouchMove,
                  }),
                  this.renderLoading(),
                )
              );
            },
          },
        ],
        [
          {
            key: `midpointBetweenTwoTouches`,
            value: function (e) {
              var t = e.x1,
                n = e.y1;
              return { x: (t + e.x2) / 2, y: (n + e.y2) / 2 };
            },
          },
          {
            key: `distanceBetweenTwoTouches`,
            value: function (e) {
              var t = e.x1,
                n = e.y1,
                r = e.x2,
                i = e.y2;
              return Math.sqrt((r - t) ** 2 + (i - n) ** 2);
            },
          },
        ],
      ),
      t
    );
  })(O.Component)),
  M(Nt, `propTypes`, {
    alt: U.string,
    bgImageProps: U.object,
    bgImageTag: U.string,
    carouselStore: U.object.isRequired,
    className: U.string,
    imageClassName: U.string,
    overlayClassName: U.string,
    spinner: U.func,
    onLoad: U.func,
    onError: U.func,
    src: U.string.isRequired,
    srcZoomed: U.string,
    tag: U.string,
    isPinchZoomEnabled: U.bool,
  }),
  M(Nt, `defaultProps`, {
    alt: void 0,
    bgImageProps: {},
    bgImageTag: `div`,
    className: null,
    imageClassName: null,
    overlayClassName: null,
    isPinchZoomEnabled: !0,
    spinner: null,
    onLoad: null,
    onError: null,
    srcZoomed: null,
    tag: `div`,
  }),
  Nt),
  function () {
    return {};
  },
);
var It = {
    slide: `slide___3-Nqo`,
    slideHorizontal: `slideHorizontal___1NzNV`,
    slideInner: `slideInner___2mfX9`,
    focusRing: `focusRing___1airF`,
  },
  Lt = [
    `ariaLabel`,
    `carouselStore`,
    `children`,
    `className`,
    `classNameHidden`,
    `classNameVisible`,
    `currentSlide`,
    `index`,
    `innerClassName`,
    `innerTag`,
    `naturalSlideHeight`,
    `naturalSlideWidth`,
    `onBlur`,
    `onFocus`,
    `orientation`,
    `slideSize`,
    `style`,
    `tag`,
    `totalSlides`,
    `visibleSlides`,
    `isIntrinsicHeight`,
  ],
  Rt = (function (e) {
    function t(e) {
      var r;
      return (
        A(this, t),
        (r = n.call(this, e)),
        (r.handleOnFocus = r.handleOnFocus.bind(I(r))),
        (r.handleOnBlur = r.handleOnBlur.bind(I(r))),
        (r.state = { focused: !1 }),
        r
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(t, [
        {
          key: `isVisible`,
          value: function () {
            var e = this.props,
              t = e.currentSlide,
              n = e.index,
              r = e.visibleSlides;
            return n >= t && n < t + r;
          },
        },
        {
          key: `handleOnFocus`,
          value: function (e) {
            var t = this,
              n = this.props.onFocus;
            this.setState({ focused: !0 }, function () {
              n !== null && n.call(t, e);
            });
          },
        },
        {
          key: `handleOnBlur`,
          value: function (e) {
            var t = this,
              n = this.props.onBlur;
            this.setState({ focused: !1 }, function () {
              n !== null && n.call(t, e);
            });
          },
        },
        {
          key: `renderFocusRing`,
          value: function () {
            return this.state.focused
              ? O.createElement(`div`, {
                  className: [It.focusRing, `carousel__slide-focus-ring`].join(
                    ` `,
                  ),
                })
              : null;
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.ariaLabel,
              r = (t.carouselStore, t.children, t.className),
              i = t.classNameHidden,
              a = t.classNameVisible,
              o = (t.currentSlide, t.index, t.innerClassName),
              s = t.innerTag,
              c = t.naturalSlideHeight,
              l = t.naturalSlideWidth,
              u = (t.onBlur, t.onFocus, t.orientation),
              d = t.slideSize,
              f = t.style,
              p = t.tag,
              m = t.totalSlides,
              h = (t.visibleSlides, t.isIntrinsicHeight),
              g = F(t, Lt),
              _ = {};
            u === `horizontal`
              ? ((_.width = z(d)), (_.paddingBottom = z((100 * c) / (l * m))))
              : ((_.width = z(100)), (_.paddingBottom = z((100 * c) / l)));
            var v = {};
            h &&
              (u === `horizontal` ? (_.height = `unset`) : (_.width = `unset`),
              (_.paddingBottom = `unset`),
              (v.position = `unset`));
            var y = N({}, _, f),
              b = this.isVisible(),
              x = R([
                It.slide,
                u === `horizontal` && It.slideHorizontal,
                `carousel__slide`,
                this.state.focused && `carousel__slide--focused`,
                b && a,
                b && `carousel__slide--visible`,
                !b && i,
                !b && `carousel__slide--hidden`,
                r,
              ]),
              S = R([It.slideInner, `carousel__inner-slide`, o]);
            return O.createElement(
              p,
              N(
                {
                  ref: function (t) {
                    e.tagRef = t;
                  },
                  "aria-selected": this.isVisible(),
                  "aria-label": n,
                  role: this.props.role,
                  onFocus: this.handleOnFocus,
                  onBlur: this.handleOnBlur,
                  className: x,
                  style: y,
                },
                g,
              ),
              O.createElement(
                s,
                {
                  ref: function (t) {
                    e.innerTagRef = t;
                  },
                  className: S,
                  style: v,
                },
                this.props.children,
                this.renderFocusRing(),
              ),
            );
          },
        },
      ]),
      t
    );
  })(O.PureComponent),
  zt = H(
    (M(Rt, `propTypes`, {
      ariaLabel: U.string,
      carouselStore: U.object,
      children: W.children,
      className: U.string,
      classNameHidden: U.string,
      classNameVisible: U.string,
      currentSlide: U.number.isRequired,
      index: U.number.isRequired,
      innerClassName: U.string,
      innerTag: U.string,
      naturalSlideHeight: U.number.isRequired,
      naturalSlideWidth: U.number.isRequired,
      onBlur: U.func,
      onFocus: U.func,
      orientation: W.orientation.isRequired,
      slideSize: U.number.isRequired,
      role: U.string,
      style: U.object,
      tag: U.string,
      totalSlides: U.number.isRequired,
      visibleSlides: U.number.isRequired,
      isIntrinsicHeight: U.bool,
    }),
    M(Rt, `defaultProps`, {
      ariaLabel: `slide`,
      carouselStore: null,
      children: null,
      className: null,
      classNameHidden: null,
      classNameVisible: null,
      innerClassName: null,
      innerTag: `div`,
      onBlur: null,
      onFocus: null,
      role: `option`,
      style: {},
      tag: `div`,
      isIntrinsicHeight: !1,
    }),
    Rt),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        naturalSlideHeight: e.naturalSlideHeight,
        naturalSlideWidth: e.naturalSlideWidth,
        orientation: e.orientation,
        slideSize: e.slideSize,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
    },
  ),
  Bt = (function () {
    function e() {
      A(this, e);
    }
    return (
      j(
        e,
        [
          {
            key: `parents`,
            value: function (e, t) {
              return e.parentNode === null
                ? t
                : this.parents(e.parentNode, t.concat([e]));
            },
          },
          {
            key: `scrollParent`,
            value: function (t) {
              for (
                var n = this.parents(t.parentNode, []), r = 0;
                r < n.length;
                r += 1
              )
                if (e.scroll(n[r])) return n[r];
              return document.scrollingElement || document.documentElement;
            },
          },
          {
            key: `getScrollParent`,
            value: function (t) {
              return e.isNodeValid(t) ? this.scrollParent(t) : null;
            },
          },
        ],
        [
          {
            key: `style`,
            value: function (e, t) {
              return getComputedStyle(e, null).getPropertyValue(t);
            },
          },
          {
            key: `overflow`,
            value: function (t) {
              return (
                e.style(t, `overflow`) +
                e.style(t, `overflow-y`) +
                e.style(t, `overflow-x`)
              );
            },
          },
          {
            key: `scroll`,
            value: function (t) {
              return /(auto|scroll)/.test(e.overflow(t));
            },
          },
          {
            key: `isNodeValid`,
            value: function (e) {
              return e instanceof HTMLElement || e instanceof SVGElement;
            },
          },
        ],
      ),
      e
    );
  })(),
  Y = {
    horizontalSlider: `horizontalSlider___281Ls`,
    touchDisabled: `touchDisabled___2qs4y`,
    horizontalSliderTray: `horizontalSliderTray___1L-0W`,
    verticalSlider: `verticalSlider___34ZFD`,
    verticalSliderTray: `verticalSliderTray___267D8`,
    verticalTray: `verticalTray___12Key`,
    verticalSlideTrayWrap: `verticalSlideTrayWrap___2nO7o`,
    sliderTray: `sliderTray___-vHFQ`,
    sliderAnimation: `sliderAnimation___300FY`,
    masterSpinnerContainer: `masterSpinnerContainer___1Z6hB`,
  },
  Vt =
    `ariaLabel.carouselStore.children.className.classNameAnimation.classNameTray.classNameTrayWrap.currentSlide.disableAnimation.disableKeyboard.dragEnabled.hasMasterSpinner.interval.isPageScrollLocked.isPlaying.lockOnWindowScroll.masterSpinnerFinished.moveThreshold.naturalSlideHeight.naturalSlideWidth.onMasterSpinner.orientation.playDirection.privateUnDisableAnimation.slideSize.slideTraySize.spinner.style.totalSlides.touchEnabled.trayProps.trayTag.visibleSlides.isIntrinsicHeight`.split(
      `.`,
    ),
  Ht = [
    `dragStep`,
    `step`,
    `infinite`,
    `preventVerticalScrollOnTouch`,
    `preventingVerticalScroll`,
    `horizontalPixelThreshold`,
    `verticalPixelThreshold`,
  ],
  Ut = [
    `className`,
    `onClickCapture`,
    `onMouseDown`,
    `onTouchCancel`,
    `onTouchEnd`,
    `onTouchMove`,
    `onTouchStart`,
    `ref`,
    `style`,
  ],
  Wt = (function (e) {
    function t(e) {
      var r;
      return (
        A(this, t),
        (r = n.call(this, e)),
        (r.getSliderRef = r.getSliderRef.bind(I(r))),
        (r.handleDocumentScroll = r.handleDocumentScroll.bind(I(r))),
        (r.handleOnClickCapture = r.handleOnClickCapture.bind(I(r))),
        (r.handleOnKeyDown = r.handleOnKeyDown.bind(I(r))),
        (r.handleOnMouseDown = r.handleOnMouseDown.bind(I(r))),
        (r.handleOnMouseMove = r.handleOnMouseMove.bind(I(r))),
        (r.handleOnMouseUp = r.handleOnMouseUp.bind(I(r))),
        (r.handleOnTouchCancel = r.handleOnTouchCancel.bind(I(r))),
        (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(I(r))),
        (r.handleOnTouchMove = r.handleOnTouchMove.bind(I(r))),
        (r.handleOnTouchStart = r.handleOnTouchStart.bind(I(r))),
        (r.playBackward = r.playBackward.bind(I(r))),
        (r.playForward = r.playForward.bind(I(r))),
        (r.callCallback = r.callCallback.bind(I(r))),
        (r.blockWindowScroll = r.blockWindowScroll.bind(I(r))),
        (r.state = {
          cancelNextClick: !1,
          deltaX: 0,
          deltaY: 0,
          isBeingMouseDragged: !1,
          isBeingTouchDragged: !1,
          preventingVerticalScroll: !1,
          startX: 0,
          startY: 0,
        }),
        (r.interval = null),
        (r.isDocumentScrolling = null),
        (r.moveTimer = null),
        (r.originalOverflow = null),
        (r.scrollParent = null),
        (r.scrollStopTimer = null),
        r
      );
    }
    P(t, e);
    var n = L(t);
    return (
      j(
        t,
        [
          {
            key: `componentDidMount`,
            value: function () {
              (this.props.lockOnWindowScroll &&
                window.addEventListener(
                  `scroll`,
                  this.handleDocumentScroll,
                  !1,
                ),
                (this.props.touchEnabled ||
                  this.props.preventVerticalScrollOnTouch) &&
                  window.addEventListener(
                    `touchmove`,
                    this.blockWindowScroll,
                    !1,
                  ),
                document.documentElement.addEventListener(
                  `mouseleave`,
                  this.handleOnMouseUp,
                  !1,
                ),
                document.documentElement.addEventListener(
                  `mousemove`,
                  this.handleOnMouseMove,
                  !1,
                ),
                document.documentElement.addEventListener(
                  `mouseup`,
                  this.handleOnMouseUp,
                  !1,
                ),
                this.props.isPlaying && this.play());
            },
          },
          {
            key: `componentDidUpdate`,
            value: function (e) {
              (!e.isPlaying && this.props.isPlaying && this.play(),
                e.isPlaying && !this.props.isPlaying && this.stop(),
                !e.isPageScrollLocked &&
                  this.props.isPageScrollLocked &&
                  this.lockScroll(),
                e.isPageScrollLocked &&
                  !this.props.isPageScrollLocked &&
                  this.unlockScroll(),
                !1 === e.privateUnDisableAnimation &&
                  !0 === this.props.privateUnDisableAnimation &&
                  this.props.carouselStore.setStoreState({
                    privateUnDisableAnimation: !1,
                    disableAnimation: !1,
                  }));
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              (document.documentElement.removeEventListener(
                `mouseleave`,
                this.handleOnMouseUp,
                !1,
              ),
                document.documentElement.removeEventListener(
                  `mousemove`,
                  this.handleOnMouseMove,
                  !1,
                ),
                document.documentElement.removeEventListener(
                  `mouseup`,
                  this.handleOnMouseUp,
                  !1,
                ),
                window.removeEventListener(
                  `scroll`,
                  this.handleDocumentScroll,
                  !1,
                ),
                window.removeEventListener(
                  `touchmove`,
                  this.blockWindowScroll,
                  !1,
                ),
                this.stop(),
                window.cancelAnimationFrame.call(window, this.moveTimer),
                window.clearTimeout(this.scrollStopTimer),
                (this.isDocumentScrolling = null),
                (this.moveTimer = null),
                (this.scrollStopTimer = null));
            },
          },
          {
            key: `getSliderRef`,
            value: function (e) {
              if (((this.sliderTrayElement = e), e && window)) {
                var t = e.closest(`.carousel`);
                t &&
                  (this.rtl =
                    window
                      .getComputedStyle(t, null)
                      .getPropertyValue(`direction`) === `rtl`);
              }
            },
          },
          {
            key: `fakeOnDragStart`,
            value: function (e) {
              var t = e.screenX,
                n = e.screenY,
                r = e.touchDrag,
                i = r !== void 0 && r,
                a = e.mouseDrag,
                o = a !== void 0 && a;
              (this.props.carouselStore.setStoreState({ isPlaying: !1 }),
                window.cancelAnimationFrame.call(window, this.moveTimer),
                this.props.orientation === `vertical` &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !0,
                  }),
                this.setState({
                  isBeingTouchDragged: i,
                  isBeingMouseDragged: o,
                  startX: t,
                  startY: n,
                }));
            },
          },
          {
            key: `fakeOnDragMove`,
            value: function (e, t) {
              var n = this;
              (window.cancelAnimationFrame.call(window, this.moveTimer),
                (this.moveTimer = window.requestAnimationFrame.call(
                  window,
                  function () {
                    n.setState(function (r) {
                      return {
                        deltaX: (e - r.startX) * (n.rtl ? -1 : 1),
                        deltaY: t - r.startY,
                        preventingVerticalScroll:
                          Math.abs(t - r.startY) <=
                            n.props.verticalPixelThreshold &&
                          Math.abs(e - r.startX) >=
                            n.props.horizontalPixelThreshold,
                      };
                    });
                  },
                )));
            },
          },
          {
            key: `fakeOnDragEnd`,
            value: function () {
              (window.cancelAnimationFrame.call(window, this.moveTimer),
                this.computeCurrentSlide(),
                this.props.orientation === `vertical` &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !1,
                  }),
                this.setState({
                  deltaX: 0,
                  deltaY: 0,
                  isBeingTouchDragged: !1,
                  isBeingMouseDragged: !1,
                }),
                (this.isDocumentScrolling =
                  !this.props.lockOnWindowScroll && null));
            },
          },
          {
            key: `callCallback`,
            value: function (e, t) {
              var n = this.props.trayProps;
              n && typeof n[e] == `function` && (t.persist(), n[e](t));
            },
          },
          {
            key: `handleOnMouseDown`,
            value: function (e) {
              if (!this.props.dragEnabled)
                return void this.callCallback(`onMouseDown`, e);
              (e.preventDefault(),
                this.fakeOnDragStart({
                  screenX: e.screenX,
                  screenY: e.screenY,
                  mouseDrag: !0,
                }),
                this.callCallback(`onMouseDown`, e));
            },
          },
          {
            key: `handleOnMouseMove`,
            value: function (e) {
              this.state.isBeingMouseDragged &&
                (this.setState({ cancelNextClick: !0 }),
                e.preventDefault(),
                this.fakeOnDragMove(e.screenX, e.screenY));
            },
          },
          {
            key: `handleOnMouseUp`,
            value: function (e) {
              this.state.isBeingMouseDragged &&
                (e.preventDefault(), this.fakeOnDragEnd());
            },
          },
          {
            key: `handleOnClickCapture`,
            value: function (e) {
              if (!this.state.cancelNextClick)
                return void this.callCallback(`onClickCapture`, e);
              (e.preventDefault(),
                this.setState({ cancelNextClick: !1 }),
                this.callCallback(`onClickCapture`, e));
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (e) {
              if (!this.props.touchEnabled)
                return void this.callCallback(`onTouchStart`, e);
              this.props.orientation === `vertical` && e.preventDefault();
              var t = e.targetTouches[0];
              (this.fakeOnDragStart({
                screenX: t.screenX,
                screenY: t.screenY,
                touchDrag: !0,
              }),
                this.callCallback(`onTouchStart`, e));
            },
          },
          {
            key: `handleDocumentScroll`,
            value: function () {
              var e = this;
              this.props.touchEnabled &&
                ((this.isDocumentScrolling = !0),
                window.clearTimeout(this.scrollStopTimer),
                (this.scrollStopTimer = window.setTimeout(function () {
                  e.isDocumentScrolling = !1;
                }, 66)));
            },
          },
          {
            key: `handleOnTouchMove`,
            value: function (e) {
              if (
                !this.props.touchEnabled ||
                (this.props.lockOnWindowScroll && this.isDocumentScrolling)
              )
                return void this.callCallback(`onTouchMove`, e);
              var t = e.targetTouches[0];
              t &&
                (this.fakeOnDragMove(t.screenX, t.screenY),
                this.callCallback(`onTouchMove`, e));
            },
          },
          {
            key: `forward`,
            value: function () {
              var e = this.props,
                t = e.currentSlide,
                n = e.step,
                r = e.totalSlides,
                i = e.visibleSlides;
              return Math.min(t + n, r - i);
            },
          },
          {
            key: `backward`,
            value: function () {
              var e = this.props,
                t = e.currentSlide,
                n = e.step;
              return Math.max(t - n, 0);
            },
          },
          {
            key: `handleOnKeyDown`,
            value: function (e) {
              var t = e.keyCode,
                n = this.props,
                r = n.carouselStore,
                i = n.currentSlide,
                a = n.disableKeyboard,
                o = n.totalSlides,
                s = n.visibleSlides,
                c = {};
              !0 === a ||
                o <= s ||
                (t === 37 &&
                  (e.preventDefault(),
                  this.focus(),
                  (c.currentSlide = Math.max(0, i - 1)),
                  (c.isPlaying = !1)),
                t === 39 &&
                  (e.preventDefault(),
                  this.focus(),
                  (c.currentSlide = Math.min(o - s, i + 1)),
                  (c.isPlaying = !1)),
                r.setStoreState(c));
            },
          },
          {
            key: `playForward`,
            value: function () {
              var e = this.props,
                t = e.carouselStore,
                n = e.currentSlide;
              t.setStoreState({
                currentSlide: this.forward() === n ? 0 : this.forward(),
              });
            },
          },
          {
            key: `playBackward`,
            value: function () {
              var e = this.props,
                t = e.carouselStore,
                n = e.currentSlide,
                r = e.totalSlides,
                i = e.visibleSlides;
              t.setStoreState({
                currentSlide: this.backward() === n ? r - i : this.backward(),
              });
            },
          },
          {
            key: `play`,
            value: function () {
              var e = this.props.playDirection;
              this.interval = setInterval(
                e === `forward` ? this.playForward : this.playBackward,
                this.props.interval,
              );
            },
          },
          {
            key: `stop`,
            value: function () {
              (window.clearInterval(this.interval), (this.interval = null));
            },
          },
          {
            key: `lockScroll`,
            value: function () {
              var e = new Bt();
              ((this.scrollParent = e.getScrollParent(this.sliderTrayElement)),
                this.scrollParent &&
                  ((this.originalOverflow =
                    this.originalOverflow || this.scrollParent.style.overflow),
                  (this.scrollParent.style.overflow = `hidden`)));
            },
          },
          {
            key: `unlockScroll`,
            value: function () {
              this.scrollParent &&=
                ((this.scrollParent.style.overflow = this.originalOverflow),
                (this.originalOverflow = null),
                null);
            },
          },
          {
            key: `blockWindowScroll`,
            value: function (e) {
              this.state.preventingVerticalScroll &&
                (e.preventDefault(), e.stopImmediatePropagation());
            },
          },
          {
            key: `computeCurrentSlide`,
            value: function () {
              var e = t.slideSizeInPx(
                  this.props.orientation,
                  this.sliderTrayElement.clientWidth,
                  this.sliderTrayElement.clientHeight,
                  this.props.totalSlides,
                ),
                n = t.slidesMoved(
                  this.props.moveThreshold,
                  this.props.orientation,
                  this.state.deltaX,
                  this.state.deltaY,
                  e,
                  this.props.dragStep,
                ),
                r =
                  this.props.totalSlides -
                  Math.min(this.props.totalSlides, this.props.visibleSlides),
                i = ze({ min: 0, max: r, x: this.props.currentSlide + n });
              (this.props.infinite &&
                (this.props.currentSlide >= r && n > 0 && (i = 0),
                this.props.currentSlide === 0 && n < 0 && (i = r)),
                this.props.carouselStore.setStoreState({ currentSlide: i }));
            },
          },
          {
            key: `focus`,
            value: function () {
              this.sliderElement.focus();
            },
          },
          {
            key: `handleOnTouchEnd`,
            value: function (e) {
              (this.endTouchMove(), this.callCallback(`onTouchEnd`, e));
            },
          },
          {
            key: `handleOnTouchCancel`,
            value: function (e) {
              (this.endTouchMove(), this.callCallback(`onTouchCancel`, e));
            },
          },
          {
            key: `endTouchMove`,
            value: function () {
              this.props.touchEnabled && this.fakeOnDragEnd();
            },
          },
          {
            key: `renderMasterSpinner`,
            value: function () {
              var e = this.props,
                t = e.hasMasterSpinner,
                n = e.masterSpinnerFinished,
                r = e.spinner;
              return t && !n
                ? (typeof this.props.onMasterSpinner == `function` &&
                    this.props.onMasterSpinner(),
                  O.createElement(
                    `div`,
                    {
                      className: R([
                        Y.masterSpinnerContainer,
                        `carousel__master-spinner-container`,
                      ]),
                    },
                    r && r(),
                    !r && O.createElement(jt, null),
                  ))
                : null;
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this,
                t = this.props,
                n = t.ariaLabel,
                r = (t.carouselStore, t.children),
                i = t.className,
                a = t.classNameAnimation,
                o = t.classNameTray,
                s = t.classNameTrayWrap,
                c = t.currentSlide,
                l = t.disableAnimation,
                u =
                  (t.disableKeyboard,
                  t.dragEnabled,
                  t.hasMasterSpinner,
                  t.interval,
                  t.isPageScrollLocked,
                  t.isPlaying,
                  t.lockOnWindowScroll,
                  t.masterSpinnerFinished,
                  t.moveThreshold,
                  t.naturalSlideHeight),
                d = t.naturalSlideWidth,
                f = (t.onMasterSpinner, t.orientation),
                p = (t.playDirection, t.privateUnDisableAnimation, t.slideSize),
                m = t.slideTraySize,
                h = (t.spinner, t.style),
                g = (t.totalSlides, t.touchEnabled),
                _ = t.trayProps,
                v = t.trayTag,
                y = t.visibleSlides,
                b = t.isIntrinsicHeight,
                x = F(t, Vt),
                S = N({}, h),
                C = {};
              f === `vertical` &&
                ((C.height = 0),
                (C.paddingBottom = z((100 * u * y) / d)),
                (C.width = z(100)));
              var w = {},
                T = z(p * c * -1);
              ((this.state.isBeingTouchDragged ||
                this.state.isBeingMouseDragged ||
                l) &&
                (w.transition = `none`),
                b && ((w.display = `flex`), (w.alignItems = `stretch`)),
                f === `vertical`
                  ? ((w.transform = `translateY(${T}) translateY(${this.state.deltaY}px)`),
                    (w.width = z(100)),
                    (w.flexDirection = `column`))
                  : ((w.width = z(m)),
                    (w.transform = `translateX(${T}) translateX(${this.state.deltaX}px)`),
                    (w.flexDirection = `row`)));
              var E = R([
                  f === `vertical` ? Y.verticalSlider : Y.horizontalSlider,
                  !g && Y.touchDisabled,
                  `carousel__slider`,
                  f === `vertical`
                    ? `carousel__slider--vertical`
                    : `carousel__slider--horizontal`,
                  i,
                ]),
                D = R([
                  Y.sliderTrayWrap,
                  `carousel__slider-tray-wrapper`,
                  f === `vertical`
                    ? Y.verticalSlideTrayWrap
                    : Y.horizontalTrayWrap,
                  f === `vertical`
                    ? `carousel__slider-tray-wrap--vertical`
                    : `carousel__slider-tray-wrap--horizontal`,
                  s,
                ]),
                ee = R([
                  Y.sliderTray,
                  a || Y.sliderAnimation,
                  `carousel__slider-tray`,
                  f === `vertical` ? Y.verticalTray : Y.horizontalTray,
                  f === `vertical`
                    ? `carousel__slider-tray--vertical`
                    : `carousel__slider-tray--horizontal`,
                  o,
                ]),
                k =
                  (x.dragStep,
                  x.step,
                  x.infinite,
                  x.preventVerticalScrollOnTouch,
                  x.preventingVerticalScroll,
                  x.horizontalPixelThreshold,
                  x.verticalPixelThreshold,
                  F(x, Ht)),
                A =
                  (_.className,
                  _.onClickCapture,
                  _.onMouseDown,
                  _.onTouchCancel,
                  _.onTouchEnd,
                  _.onTouchMove,
                  _.onTouchStart,
                  _.ref,
                  _.style,
                  F(_, Ut));
              return O.createElement(
                `div`,
                N(
                  {
                    ref: function (t) {
                      e.sliderElement = t;
                    },
                    className: E,
                    "aria-live": `polite`,
                    "aria-label": n,
                    role: this.props.role,
                    style: S,
                    onKeyDown: this.handleOnKeyDown,
                  },
                  k,
                ),
                O.createElement(
                  `div`,
                  { className: D, style: C },
                  O.createElement(
                    v,
                    N(
                      {
                        ref: this.getSliderRef,
                        className: ee,
                        style: w,
                        onTouchStart: this.handleOnTouchStart,
                        onTouchMove: this.handleOnTouchMove,
                        onTouchEnd: this.handleOnTouchEnd,
                        onTouchCancel: this.handleOnTouchCancel,
                        onMouseDown: this.handleOnMouseDown,
                        onClickCapture: this.handleOnClickCapture,
                      },
                      A,
                    ),
                    r,
                  ),
                  this.renderMasterSpinner(),
                ),
              );
            },
          },
        ],
        [
          {
            key: `slideSizeInPx`,
            value: function (e, t, n, r) {
              return (e === `horizontal` ? t : n) / r;
            },
          },
          {
            key: `slidesMoved`,
            value: function (e, t, n, r, i, a) {
              var o = t === `horizontal` ? n : r,
                s = Math.abs(Math.round(o / i)),
                c = Math.abs(o) >= i * e ? a : 0,
                l = Math.max(c, s);
              if (o < 0) return l;
              var u = -l;
              return u === 0 ? 0 : u;
            },
          },
        ],
      ),
      t
    );
  })(O.Component),
  Gt = H(
    (M(Wt, `propTypes`, {
      ariaLabel: U.string,
      carouselStore: U.object.isRequired,
      children: U.node.isRequired,
      className: U.string,
      classNameAnimation: U.string,
      classNameTray: U.string,
      classNameTrayWrap: U.string,
      currentSlide: U.number.isRequired,
      disableAnimation: U.bool,
      disableKeyboard: U.bool,
      dragEnabled: U.bool.isRequired,
      dragStep: U.number,
      hasMasterSpinner: U.bool.isRequired,
      infinite: U.bool,
      interval: U.number.isRequired,
      isPageScrollLocked: U.bool.isRequired,
      isPlaying: U.bool.isRequired,
      lockOnWindowScroll: U.bool.isRequired,
      preventVerticalScrollOnTouch: U.bool,
      horizontalPixelThreshold: U.number,
      verticalPixelThreshold: U.number,
      masterSpinnerFinished: U.bool.isRequired,
      moveThreshold: U.number,
      naturalSlideHeight: U.number.isRequired,
      naturalSlideWidth: U.number.isRequired,
      onMasterSpinner: U.func,
      orientation: W.orientation.isRequired,
      playDirection: W.direction.isRequired,
      privateUnDisableAnimation: U.bool,
      role: U.string,
      slideSize: U.number.isRequired,
      slideTraySize: U.number.isRequired,
      spinner: U.func,
      step: U.number.isRequired,
      style: U.object,
      totalSlides: U.number.isRequired,
      touchEnabled: U.bool.isRequired,
      trayProps: U.shape({
        className: U.string,
        onClickCapture: U.func,
        onMouseDown: U.func,
        onTouchCancel: U.func,
        onTouchEnd: U.func,
        onTouchMove: U.func,
        onTouchStart: U.func,
        ref: U.shape({}),
        style: U.string,
      }),
      trayTag: U.string,
      visibleSlides: U.number,
      isIntrinsicHeight: U.bool,
    }),
    M(Wt, `defaultProps`, {
      ariaLabel: `slider`,
      className: null,
      classNameAnimation: null,
      classNameTray: null,
      classNameTrayWrap: null,
      disableAnimation: !1,
      disableKeyboard: !1,
      dragStep: 1,
      infinite: !1,
      preventVerticalScrollOnTouch: !0,
      horizontalPixelThreshold: 15,
      verticalPixelThreshold: 10,
      moveThreshold: 0.1,
      onMasterSpinner: null,
      privateUnDisableAnimation: !1,
      role: `listbox`,
      spinner: null,
      style: {},
      trayProps: {},
      trayTag: `div`,
      visibleSlides: 1,
      isIntrinsicHeight: !1,
    }),
    Wt),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        disableAnimation: e.disableAnimation,
        privateUnDisableAnimation: e.privateUnDisableAnimation,
        disableKeyboard: e.disableKeyboard,
        dragEnabled: e.dragEnabled,
        hasMasterSpinner: e.hasMasterSpinner,
        infinite: e.infinite,
        interval: e.interval,
        isPageScrollLocked: e.isPageScrollLocked,
        isPlaying: e.isPlaying,
        lockOnWindowScroll: e.lockOnWindowScroll,
        preventingVerticalScroll: e.preventingVerticalScroll,
        masterSpinnerFinished: e.masterSpinnerFinished,
        naturalSlideHeight: e.naturalSlideHeight,
        naturalSlideWidth: e.naturalSlideWidth,
        orientation: e.orientation,
        playDirection: e.playDirection,
        slideSize: e.slideSize,
        slideTraySize: e.slideTraySize,
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        visibleSlides: e.visibleSlides,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
    },
  ),
  Kt = `HRbFcf6y6hE-`,
  qt = `-ZUk3xT7ZlY-`,
  Jt = `KLUTL0g4Wbo-`,
  Yt = `glnkf1Fqlvc-`,
  Xt = `loez15u80yI-`,
  X = r(),
  Zt = `bTrailerCarouselAutoAdvance`,
  Qt,
  $t = new Set();
function en() {
  if (Qt === void 0) {
    let e = T(Zt);
    Qt = !e || e.toLowerCase() === `true`;
  }
  return Qt;
}
function tn(e) {
  (S(Zt, String(e), 3650), (Qt = e), $t.forEach((e) => e()));
}
function nn(e) {
  return ($t.add(e), () => $t.delete(e));
}
function rn() {
  return [O.useSyncExternalStore(nn, en, () => !0), tn];
}
function an(e) {
  let [t, n] = rn();
  return (0, X.jsx)(`div`, {
    className: D(Xt, e.bPhoneOnly && `fvIP8xIxKbo-`),
    children: (0, X.jsx)(C, {
      className: Yt,
      controlled: !0,
      checked: t,
      label: c(`#SaleTrailerCarousel_AutoAdvanceEnabled`),
      onChange: n,
    }),
  });
}
var on = 1e4;
function sn(e) {
  let {
      className: t,
      currentItemKey: n,
      autoAdvanceMsec: r,
      fnAdvance: i,
      enabled: a,
      pauseReason: s,
      countdownToken: c = `#SaleTrailerCarousel_NextGameInSeconds`,
      progressTarget: l,
    } = e,
    [u] = rn(),
    f = r === void 0 ? on : r,
    [p, m] = O.useState(f),
    h = s !== void 0,
    g = cn(s);
  (o(
    () => {
      let e = p - 30;
      e <= 0 ? (i(), m(f)) : m(Math.max(e, 0));
    },
    30,
    [f],
    a && u && !h && f > 0 && p > 0,
  ),
    O.useEffect(() => {
      m(f);
    }, [n, f, u]));
  let _ = `${100 - (p / f) * 100}%`,
    v = !a || !u ? `off` : h ? `paused` : `running`;
  return (
    O.useEffect(() => {
      let e = l?.current;
      e &&
        (e.style.setProperty(`--auto-advance-ratio`, _),
        (e.dataset.autoAdvance = v));
    }, [l, _, v]),
    (0, X.jsxs)(`div`, {
      className: t,
      children: [
        (0, X.jsxs)(`div`, {
          className: D(Kt, (!a || !u) && `X8q-iPdWKKw-`, h && `_3E-10Et-w2o-`),
          children: [
            (0, X.jsx)(`div`, {
              className: qt,
              children: !h || !g ? d(c, Math.ceil(p / 1e3)) : g,
            }),
            (0, X.jsx)(`div`, {
              className: Jt,
              style: { "--auto-advance-ratio": _ },
            }),
          ],
        }),
        (0, X.jsx)(an, {}),
      ],
    })
  );
}
function cn(e) {
  switch (e) {
    case 4:
      return c(`#SaleTrailerCarousel_AutoAdvanceVideoPaused`);
    case 3:
    case 5:
      return c(`#SaleTrailerCarousel_AutoAdvanceHover`);
  }
}
function ln() {
  let [e, t] = O.useState(!1),
    [n, r] = O.useState(!1);
  O.useEffect(() => {
    let e = () => t(document.hidden);
    return (
      document.addEventListener(`visibilitychange`, e),
      () => document.removeEventListener(`visibilitychange`, e)
    );
  }, []);
  let i = O.useCallback((e) => r(!e.isIntersecting), []);
  return {
    bTabHidden: e,
    bOffscreen: n,
    refIntersection: w(i, { threshold: 0.5 }),
  };
}
var un = `_--jO3lLROzo-`,
  dn = `DyOrE-LFQDQ-`,
  fn = `_538FwVlPb0E-`,
  pn = `bYSGIkS6GvM-`,
  mn = `eROFrrQM5Ew-`,
  hn = `bKYQmUBfOtY-`,
  gn = `Udbg33O1Kjs-`,
  _n = `ux4DPxJOkL8-`,
  vn = `-LFP33ltPBY-`,
  yn = `_4uWRflget-8-`,
  bn = `IxjyotVSZiA-`,
  xn = `cD9zjaueru0-`,
  Sn = `_6KPsWUgnjok-`,
  Cn = `RiCuzM-PsMk-`,
  wn = `_8kxQAkw3gko-`,
  Tn = `CKl3kyOE6XE-`,
  En = `_4CFowarbZF0-`,
  Dn = `I5j74q712SQ-`,
  On = `FStnZRH332A-`,
  kn = `eqYBsdUkt5U-`,
  Z = 9;
function An(e, t) {
  let n = O.useRef(0);
  if (e <= Z)
    return {
      rgPills: Array.from({ length: e }, (e, t) => ({ nPage: t })),
      strClassName: Dn,
      bWindowed: !1,
      nPages: e,
      nSelectedPage: t,
    };
  let r = n.current;
  return (
    t < r ? (r = t) : t >= r + Z && (r = t - Z + 1),
    (r = Math.min(Math.max(r, 0), e - Z)),
    (n.current = r),
    {
      rgPills: Array.from({ length: Z }, (e, t) => ({ nPage: r + t })),
      strClassName: Dn,
      bWindowed: !0,
      nPages: e,
      nSelectedPage: t,
    }
  );
}
function jn(e) {
  let { pillWindow: t, children: n } = e;
  return (0, X.jsxs)(`div`, {
    className: En,
    children: [
      (0, X.jsx)(`div`, { className: t.strClassName, children: n }),
      t.bWindowed &&
        (0, X.jsx)(`span`, {
          className: `xAhUZDLR-Fs-`,
          children: c(
            `#Sale_Carousel_PageOfPages`,
            E(t.nSelectedPage + 1),
            E(t.nPages),
          ),
        }),
    ],
  });
}
function Mn() {
  return On;
}
function Nn(e) {
  let { bSelected: t, bCountdown: n } = e,
    r = t && n;
  return (0, X.jsx)(`span`, {
    className: D(kn, t && `bY2thn3lfUw-`, r && `D6a-33r-4xk-`),
    children: r && (0, X.jsx)(`span`, { className: `NItUkZKCFW8-` }),
  });
}
function Pn(e) {
  let { count: t, selectedIndex: n, fnNavigate: r, bCountdown: i } = e,
    a = An(t, n);
  return (0, X.jsx)(b, {
    "flow-children": `row`,
    className: D(Tn, wn),
    children: (0, X.jsx)(jn, {
      pillWindow: a,
      children: a.rgPills.map((e) =>
        (0, X.jsx)(
          `div`,
          {
            className: Mn(),
            onClick: r ? () => r(e.nPage) : void 0,
            children: (0, X.jsx)(Nn, {
              bSelected: e.nPage === n,
              bCountdown: i,
            }),
          },
          e.nPage,
        ),
      ),
    }),
  });
}
var Fn = `_1MsO62M-piw-`,
  In = `QZKBcFqGSTo-`,
  Ln = 0.6;
function Rn(e, t, n) {
  let r = O.useRef(t);
  r.current = t;
  let i = !!t;
  O.useEffect(() => {
    if (!i || !e || typeof IntersectionObserver > `u`) return;
    let t = Array.from(e.children);
    if (!t.length) return;
    let n = Math.round(e.scrollLeft / e.clientWidth),
      a = new IntersectionObserver(
        (e) => {
          for (let i of e) {
            if (!i.isIntersecting || i.intersectionRatio < Ln) continue;
            let e = t.indexOf(i.target);
            e < 0 || e === n || ((n = e), r.current?.(e));
          }
        },
        { root: e, threshold: Ln },
      );
    for (let e of t) a.observe(e);
    return () => a.disconnect();
  }, [e, i, n]);
}
function zn(e, t, n, r) {
  let i = e.getBoundingClientRect(),
    a = t.getBoundingClientRect();
  return n ? i.right - r - a.right : a.left - (i.left + r);
}
function Bn(e) {
  return Array.from(e.children).filter((e) => e.getClientRects().length > 0);
}
var Vn = 10;
function Hn(e, t, n) {
  let [r, i] = O.useState(0),
    [a, o] = O.useState(t);
  return (
    O.useEffect(() => {
      if (!n || !e) return;
      let t = 0,
        r = () => {
          t = 0;
          let n = Bn(e);
          o(n.length);
          let r = e.scrollWidth - e.clientWidth,
            a = r > 0 && Math.abs(e.scrollLeft) >= r - 2,
            s = getComputedStyle(e),
            c = s.direction === `rtl`,
            l = parseFloat(s.scrollPaddingInlineStart) || 0;
          if (
            (e.toggleAttribute(
              `data-more-after`,
              Math.abs(e.scrollLeft) < r - 2,
            ),
            e.toggleAttribute(
              `data-more-before`,
              a &&
                n.some((t) => {
                  let n = zn(e, t, c, l);
                  return n < -2 && n + t.getBoundingClientRect().width > 2;
                }),
            ),
            a)
          ) {
            i(n.length - 1);
            return;
          }
          let u = 0;
          (n.forEach((t, n) => {
            zn(e, t, c, l) <= Vn && (u = n);
          }),
            i(u));
        },
        a = () => {
          t ||= requestAnimationFrame(r);
        };
      e.addEventListener(`scroll`, a, { passive: !0 });
      let s = new ResizeObserver(a);
      s.observe(e);
      for (let t of Array.from(e.children)) s.observe(t);
      return (
        r(),
        () => {
          (e.removeEventListener(`scroll`, a),
            s.disconnect(),
            t && cancelAnimationFrame(t));
        }
      );
    }, [e, t, n]),
    [
      r,
      O.useCallback(
        (t) => {
          let n = e ? Bn(e)[t] : void 0;
          if (!e || !n) return;
          let r = getComputedStyle(e),
            i = r.direction === `rtl`,
            a = zn(e, n, i, parseFloat(r.scrollPaddingInlineStart) || 0);
          e.scrollBy({ left: i ? -a : a, behavior: `smooth` });
        },
        [e],
      ),
      a,
    ]
  );
}
function Un(e) {
  let { nSlideIndex: t, nStartingSlideIndex: n, ref: r, children: i } = e;
  return n === void 0
    ? i
    : (0, X.jsx)(`div`, { ref: t === n ? r : void 0, children: i });
}
function Wn(e) {
  let {
      padded: t,
      gap: n,
      children: r,
      bLazyRenderChildren: o,
      lazyRenderPlaceholderWidth: s,
      lazyRenderPlaceholderHeight: c,
      startingSlide: l,
      onSlide: u,
    } = e,
    d = O.useRef(null),
    f = O.useRef(null),
    p = m(),
    h = O.Children.count(r),
    [g, _] = O.useState(null),
    v = O.useCallback((e) => {
      ((d.current = e), _(e));
    }, []);
  Rn(g, u, h);
  let y = O.useContext(i) && !p && h > 1,
    [x, S, C] = Hn(g, h, y);
  O.useLayoutEffect(() => {
    d.current &&
      f.current &&
      (d.current.scrollLeft +=
        f.current.getBoundingClientRect().left -
        d.current.getBoundingClientRect().left);
  }, [l]);
  let w = O.Children.map(r, (e, t) =>
      o
        ? (0, X.jsx)(a, {
            rootMargin: `0px 50% 0px 50%`,
            horizontal: !0,
            placeholderWidth: s ?? 1,
            placeholderHeight: 1,
            holdGamepadFocus: p,
            children: (0, X.jsx)(Un, {
              nSlideIndex: t,
              nStartingSlideIndex: l,
              ref: f,
              children: e,
            }),
          })
        : (0, X.jsx)(Un, {
            nSlideIndex: t,
            nStartingSlideIndex: l,
            ref: f,
            children: e,
          }),
    ),
    T = (0, X.jsx)(b, {
      "flow-children": `row`,
      style: { gap: n ? n + `px` : void 0 },
      className: D(
        { SaleSectionCarouselPadding: t },
        `ScrollSnapCarousel`,
        `SaleSectionCarousel`,
        Fn,
        y && `DE3YQ2XTqZE-`,
        e.className,
      ),
      ref: v,
      children: w,
    }),
    E = y
      ? (0, X.jsxs)(`div`, {
          className: D(In, `PillScrollRowCtn`),
          children: [
            T,
            (0, X.jsx)(Pn, { count: C, selectedIndex: x, fnNavigate: S }),
          ],
        })
      : T;
  return o
    ? (0, X.jsx)(a, {
        rootMargin: `50% 0px 50% 0px`,
        horizontal: !1,
        placeholderWidth: 1,
        placeholderHeight: c ?? 1,
        children: E,
      })
    : E;
}
var Gn = e(n());
function Kn(e, t) {
  let {
      currentSlide: n,
      step: r,
      totalSlides: i,
      visibleSlides: a,
      infinite: o,
    } = e,
    s = i - a,
    c;
  return (
    (c =
      t === `next`
        ? o && n === s
          ? 0
          : Math.min(n + r, s)
        : o && n === 0
          ? s
          : Math.max(n - r, 0)),
    c === n ? void 0 : c
  );
}
function Q(e) {
  let {
      eDirection: t,
      onNavIntent: n,
      className: r,
      style: i,
      children: a,
    } = e,
    o = O.useContext(K),
    s = O.useRef(n);
  s.current = n;
  let c = O.useRef(!1),
    l = O.useRef(!1),
    u = O.useCallback(() => {
      let e = Kn(o.state, t);
      e !== void 0 && s.current?.(e, t);
    }, [o, t]),
    d = !!n;
  O.useEffect(() => {
    if (!d) return;
    let e = o.state.currentSlide,
      t = () => {
        let t = o.state.currentSlide;
        t !== e && ((e = t), (c.current || l.current) && u());
      };
    return (o.subscribe(t), () => o.unsubscribe(t));
  }, [d, o, u]);
  let f = t === `next` ? ft : nt;
  return n
    ? (0, X.jsx)(f, {
        className: r,
        style: i,
        "aria-label": e[`aria-label`],
        onMouseEnter: () => {
          ((c.current = !0), u());
        },
        onMouseLeave: () => {
          c.current = !1;
        },
        onFocus: () => {
          ((l.current = !0), u());
        },
        onBlur: () => {
          l.current = !1;
        },
        children: a,
      })
    : (0, X.jsx)(f, {
        className: r,
        style: i,
        "aria-label": e[`aria-label`],
        children: a,
      });
}
var qn = H(
  class extends O.Component {
    render() {
      let {
          showArrows: e,
          arrowFill: t,
          arrowStyle: n,
          onNavIntent: r,
        } = this.props,
        i = this.props.visibleSlides,
        a = this.props.totalSlides,
        o = this.props.currentSlide;
      if (i >= a) return null;
      let s = (100 * o) / a,
        c = 100 * (1 - Math.min(o + i, a) / a),
        l = s + (50 * i) / a,
        u = 100 - l;
      return (0, X.jsxs)(`div`, {
        className: gn,
        children: [
          e &&
            (0, X.jsx)(Q, {
              eDirection: `previous`,
              onNavIntent: r,
              className: D(`iqx2UWGqqKU-`, `oKffwUnx6co-`, `_--jO3lLROzo-`),
              children: (0, X.jsx)($, {
                arrowFill: t,
                arrowStyle: n,
                direction: `left`,
              }),
            }),
          (0, X.jsxs)(`div`, {
            className: yn,
            children: [
              (0, X.jsx)(`div`, { className: bn }),
              (0, X.jsx)(`div`, {
                className: xn,
                style: { insetInlineStart: s + `%`, insetInlineEnd: c + `%` },
              }),
              (0, X.jsx)(`div`, {
                className: _n,
                style: { insetInlineStart: `0%`, width: l + `%` },
                children: (0, X.jsx)(Q, {
                  eDirection: `previous`,
                  onNavIntent: r,
                  className: D(un, vn),
                  style: { color: `red` },
                  children: (0, X.jsx)(`div`, {}),
                }),
              }),
              (0, X.jsx)(`div`, {
                className: _n,
                style: { insetInlineEnd: `0%`, width: u + `%` },
                children: (0, X.jsx)(Q, {
                  eDirection: `next`,
                  onNavIntent: r,
                  className: D(un, vn),
                  children: (0, X.jsx)(`div`, {}),
                }),
              }),
            ],
          }),
          e &&
            (0, X.jsx)(Q, {
              eDirection: `next`,
              onNavIntent: r,
              className: D(`iqx2UWGqqKU-`, `O2Vg9rmPwSE-`, `_--jO3lLROzo-`),
              children: (0, X.jsx)($, {
                arrowFill: t,
                arrowStyle: n,
                direction: `right`,
              }),
            }),
        ],
      });
    }
  },
  (e) => ({
    currentSlide: e.currentSlide,
    totalSlides: e.totalSlides,
    visibleSlides: e.visibleSlides,
  }),
);
function Jn(e) {
  let { bForceSimpleCarousel: t, screenIsWide: n, children: r } = e,
    i = m();
  return (n || i) && !t
    ? (0, X.jsx)(Yn, { ...e, children: r })
    : (0, X.jsx)(Wn, { ...e, children: r });
}
function Yn(e) {
  let t = m(),
    n = O.useContext(i),
    [r, o] = O.useState(!1),
    { bTabHidden: s, bOffscreen: c, refIntersection: l } = ln(),
    u = () => O.Children.count(e.children),
    d = () => Math.min(u(), e.visibleElements),
    f = () =>
      O.Children.map(e.children, (n, r) => {
        let i =
          e.bLazyRenderChildren && !t
            ? (0, X.jsx)(a, {
                rootMargin: `0px 100% 0px 100%`,
                horizontal: !0,
                placeholderWidth: e.lazyRenderPlaceholderWidth ?? 1,
                placeholderHeight: e.lazyRenderPlaceholderHeight ?? 1,
                children: n,
              })
            : n;
        return (0, X.jsx)(
          zt,
          {
            className: Sn,
            index: r,
            role: `listitem`,
            "aria-label": void 0,
            children: i,
          },
          `slide_` + r,
        );
      }),
    p = u(),
    g = d();
  if (!p || !g) return null;
  let _ = g < p,
    v = e.hideArrows || !_,
    y = !_ || e.hidePips,
    x = !!e.bAutoAdvance && _ && !t,
    S;
  r && !h() ? (S = 5) : s ? (S = 1) : c && (S = 2);
  let C = 4 / 3,
    w = !0;
  e.slideAspectRatio && ((C = e.slideAspectRatio), (w = !1));
  let T = `items_in_row_${e.visibleElements}`;
  return (0, X.jsx)(b, {
    "flow-children": `row`,
    className: D(dn, e.className, T),
    navKey: e.navKey,
    ref: l,
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    children: (0, X.jsxs)(et, {
      visibleSlides: e.visibleElements,
      totalSlides: u(),
      naturalSlideWidth: 100 * C,
      naturalSlideHeight: 100,
      step: e.visibleElements,
      infinite: !e.disableEdgeWrap,
      isIntrinsicHeight: w,
      dragEnabled: !1,
      touchEnabled: !1,
      lockOnWindowScroll: !0,
      orientation: `horizontal`,
      disableKeyboard: !0,
      currentSlide: e.startingSlide,
      children: [
        (0, X.jsx)($n, {
          bHideArrows: v,
          onSlide: e.onSlide,
          onNavIntent: e.onNavIntent,
          arrowFill: e.arrowFill,
          arrowStyle: e.arrowStyle,
          children: f(),
        }),
        !y &&
          (e.useTestScrollbar && !n
            ? (0, X.jsx)(qn, {
                showArrows: v,
                onNavIntent: e.onNavIntent,
                carouselStore: null,
              })
            : (0, X.jsx)(`div`, {
                className: (0, Gn.default)({
                  "I8j65FBXdOY-": !0,
                  "_8kxQAkw3gko-": n,
                  "uhUggqIYXBc-": e.className?.includes(`template-carousel`),
                }),
                children: (0, X.jsx)(Xn, {
                  ...e,
                  nPageSize: g,
                  children: e.children,
                }),
              })),
        x && (0, X.jsx)(Qn, { pauseReason: S }),
      ],
    }),
  });
}
function Xn(e) {
  let { nPageSize: t } = e,
    n = O.useContext(K),
    r = O.useContext(i),
    [a, o] = O.useState(n.state.currentSlide);
  O.useEffect(
    () =>
      n.subscribe(() => {
        o(n.state.currentSlide);
      }),
    [n],
  );
  let s = Math.ceil(a / t),
    c = An(Math.ceil(O.Children.count(e.children) / t), s);
  return r
    ? (0, X.jsx)(jn, {
        pillWindow: c,
        children: c.rgPills.map((e) =>
          (0, X.jsx)(
            yt,
            {
              slide: e.nPage * t,
              className: Mn(),
              children: (0, X.jsx)(Nn, { bSelected: e.nPage === s }),
            },
            e.nPage,
          ),
        ),
      })
    : (0, X.jsx)(X.Fragment, {
        children: O.Children.map(e.children, (n, r) => {
          if (r % t !== 0) return null;
          let i = s * t === r;
          return (0, X.jsx)(
            yt,
            {
              slide: r,
              className: hn,
              children: (0, X.jsx)(nr, { ...e, bIsActive: i }),
            },
            r,
          );
        }),
      });
}
function Zn(e) {
  e.current &&= (window.clearTimeout(e.current), null);
}
function Qn(e) {
  let { pauseReason: t } = e,
    n = O.useContext(K),
    [r, i] = O.useState(n.state.currentSlide),
    [a, o] = O.useState(!0),
    s = O.useRef(null),
    c = O.useRef(n.state.currentSlide);
  O.useEffect(() => {
    let e = () => {
      let e = n.state.currentSlide;
      e !== c.current &&
        ((c.current = e),
        i(e),
        s.current === e ? (s.current = null) : s.current === null && o(!1));
    };
    return (n.subscribe(e), () => n.unsubscribe(e));
  }, [n]);
  let l = O.useCallback(() => {
    let { currentSlide: e, visibleSlides: t, totalSlides: r } = n.state,
      i = 0;
    (e + t < r && (i = Math.min(e + t, r - t)),
      i !== e && ((s.current = i), n.setStoreState({ currentSlide: i })));
  }, [n]);
  return (0, X.jsx)(sn, {
    className: mn,
    enabled: a,
    currentItemKey: r,
    autoAdvanceMsec: on,
    fnAdvance: l,
    pauseReason: t,
    countdownToken: `#Carousel_AutoAdvanceNextInSeconds`,
  });
}
function $n(e) {
  let {
      bHideArrows: t,
      children: n,
      onSlide: r,
      onNavIntent: i,
      arrowFill: a,
      arrowStyle: o,
    } = e,
    s = O.useContext(K),
    l = O.useRef(s.state.currentSlide),
    [u, d] = O.useState(null),
    f = O.useRef(null);
  O.useEffect(() => {
    let e = () => {
      let e = l.current,
        t = s.state.currentSlide;
      (r && r(t),
        d(t > e ? `Right` : t < e ? `Left` : null),
        Zn(f),
        (f.current = window.setTimeout(() => {
          f.current && (d(null), Zn(f));
        }, 1e3)),
        (l.current = t));
    };
    return (
      s.subscribe(e),
      () => {
        (s.unsubscribe(e), Zn(f));
      }
    );
  }, [s]);
  let p = !!u && `CarouselSliding` + u;
  return (0, X.jsxs)(`div`, {
    className: D(fn, `SliderBody`, p),
    children: [
      !t &&
        (0, X.jsx)(Q, {
          eDirection: `previous`,
          onNavIntent: i,
          className: D(
            `_6KbJ1ZwTIeY-`,
            `oKffwUnx6co-`,
            `_--jO3lLROzo-`,
            `CarouselBtnLeft`,
          ),
          "aria-label": c(`#Carousel_Prev`),
          children: (0, X.jsx)($, {
            arrowFill: a,
            arrowStyle: o,
            direction: `left`,
          }),
        }),
      (0, X.jsx)(Gt, {
        className: v.GetScrollableClassname(),
        classNameTray: pn,
        classNameAnimation: Cn,
        role: `list`,
        children: (0, X.jsx)(y, { children: n }),
      }),
      !t &&
        (0, X.jsx)(Q, {
          eDirection: `next`,
          onNavIntent: i,
          className: D(
            `_6KbJ1ZwTIeY-`,
            `O2Vg9rmPwSE-`,
            `_--jO3lLROzo-`,
            `CarouselBtnRight`,
          ),
          "aria-label": c(`#Carousel_Next`),
          children: (0, X.jsx)($, {
            arrowFill: a,
            arrowStyle: o,
            direction: `right`,
          }),
        }),
    ],
  });
}
var er = (function (e) {
    return (
      (e.k_ECutArrowStyle = `single`),
      (e.k_EDoubleArrowStyle = `double`),
      (e.k_EThickChevron = `chevron`),
      (e.k_EFilledArrow = `filled`),
      (e.k_EPointyArrow = `pointy`),
      e
    );
  })({}),
  tr = (function (e) {
    return (
      (e.k_EPillCrumb = `pill`),
      (e.k_ECircularCrumb = `circle`),
      (e.k_ESquareCrumb = `square`),
      e
    );
  })({});
function $(e) {
  let { arrowFill: t, arrowStyle: n, direction: r } = e;
  switch (n) {
    default:
    case er.k_ECutArrowStyle: {
      let e = r == `right` ? 0 : 180;
      return (0, X.jsx)(g, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case er.k_EDoubleArrowStyle: {
      let e = r == `right` ? 180 : 0;
      return (0, X.jsx)(_, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case er.k_EThickChevron: {
      let e = r == `right` ? 0 : 180;
      return (0, X.jsx)(u, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case er.k_EFilledArrow: {
      let e = r == `right` ? 90 : 270;
      return (0, X.jsx)(x, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case er.k_EPointyArrow:
      return (0, X.jsx)(l, {
        fill: t || `white`,
        role: `presentation`,
        direction: r || `left`,
      });
  }
}
function nr(e) {
  let {
      bIsActive: t,
      breadcrumbActiveColor: n,
      breadcrumbColor: r,
      breadcrumbStyle: i,
    } = e,
    a = t ? n || `#FFFFFF` : r || `#606974`;
  switch (i) {
    default:
    case tr.k_EPillCrumb:
      return (0, X.jsx)(p, { fill: a, role: `presentation` });
    case tr.k_ECircularCrumb:
      return (0, X.jsx)(f, { fill: a, role: `presentation` });
    case tr.k_ESquareCrumb:
      return (0, X.jsx)(s, { fill: a, role: `presentation` });
  }
}
export { ln as a, sn as i, nr as n, Jn as r, $ as t };
