/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  At as e,
  H as t,
  et as n,
  j as r,
  sn as i,
  tt as a,
  vt as o,
  z as s,
} from "./chunk~de7f2df91c.js";
import { P as c, Pt as l } from "./chunk~25a6634263.js";
import {
  Gt as u,
  Ha as d,
  Jn as f,
  Mr as p,
  Ri as m,
  Sr as h,
  Ua as g,
  ar as _,
  ha as v,
  ir as y,
  nr as b,
  or as x,
  ua as S,
  yr as C,
} from "./chunk~1fa4b8f2ff.js";
import { n as w } from "./chunk~9d71b14b50.js";
import { n as ee, t as te } from "./chunk~710e3cfd2f.js";
import { t as ne } from "./chunk~967b42dac9.js";
var T = o(),
  E = i(e());
function re(e, t) {
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
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? re(Object(n), !0).forEach(function (t) {
          A(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : re(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function O(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function ie(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function k(e, t, n) {
  return (
    t && ie(e.prototype, t),
    n && ie(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function A(e, t, n) {
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
function j() {
  return (j = Object.assign
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
function M(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && oe(e, t));
}
function ae(e) {
  return (ae = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function oe(e, t) {
  return (oe = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
}
function se() {
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
function ce(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
  return i;
}
function N(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ce(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])));
  }
  return i;
}
function P(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function le(e, t) {
  if (t && (typeof t == `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return P(e);
}
function F(e) {
  var t = se();
  return function () {
    var n,
      r = ae(e);
    if (t) {
      var i = ae(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return le(this, n);
  };
}
function ue(e) {
  return de(e) || fe(e) || pe(e) || he();
}
function de(e) {
  if (Array.isArray(e)) return me(e);
}
function fe(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function pe(e, t) {
  if (e) {
    if (typeof e == `string`) return me(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? me(e, t)
          : void 0
    );
  }
}
function me(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function he() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge(e, t) {
  return ((t = { exports: {} }), e(t, t.exports), t.exports);
}
function _e() {}
function ve() {}
function I(e) {
  return e
    .map(function (e) {
      return !1 === e ? null : e;
    })
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
}
function ye(e, t) {
  return ((100 / e) * t) / t;
}
function be(e, t) {
  return (100 * e) / t;
}
function L(e) {
  return `${e}%`;
}
function xe(e, t, n) {
  if (e === t) return !0;
  var r = U[qe(e)],
    i = U[qe(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function Se(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, a = r.length; (i = r[--a]);)
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function Ce(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--;) if (!xe(e[r], t[r], n)) return !1;
  return !0;
}
function we(e, t, n) {
  if (typeof e.equal == `function`) return (n.push([e, t]), e.equal(t, n));
  var r = Te(e),
    i = Te(t),
    a = r.length;
  if (a !== i.length) return !1;
  for (r.sort(), i.sort(); a--;) if (r[a] !== i[a]) return !1;
  for (n.push([e, t]), a = r.length; a--;) {
    var o = r[a];
    if (!xe(e[o], t[o], n)) return !1;
  }
  return !0;
}
function Te(e) {
  var t = [];
  for (var n in e) n !== `constructor` && t.push(n);
  return t;
}
function Ee(e) {
  return !!e && typeof e == `object`;
}
function De(e) {
  var t = Object.prototype.toString.call(e);
  return t === `[object RegExp]` || t === `[object Date]` || Oe(e);
}
function Oe(e) {
  return e.$$typeof === Xe;
}
function ke(e) {
  return Array.isArray(e) ? [] : {};
}
function R(e, t) {
  return !1 !== t.clone && t.isMergeableObject(e) ? z(ke(e), e, t) : e;
}
function Ae(e, t, n) {
  return e.concat(t).map(function (e) {
    return R(e, n);
  });
}
function je(e, t) {
  if (!t.customMerge) return z;
  var n = t.customMerge(e);
  return typeof n == `function` ? n : z;
}
function Me(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function Ne(e) {
  return Object.keys(e).concat(Me(e));
}
function Pe(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Fe(e, t) {
  return (
    Pe(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function Ie(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Ne(e).forEach(function (t) {
        r[t] = R(e[t], n);
      }),
    Ne(t).forEach(function (i) {
      Fe(e, i) ||
        (r[i] =
          Pe(e, i) && n.isMergeableObject(t[i])
            ? je(i, n)(e[i], t[i], n)
            : R(t[i], n));
    }),
    r
  );
}
function z(e, t, n) {
  (((n ||= {}).arrayMerge = n.arrayMerge || Ae),
    (n.isMergeableObject = n.isMergeableObject || Ye),
    (n.cloneUnlessOtherwiseSpecified = R));
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : Ie(e, t, n)
    : R(t, n);
}
function B(e) {
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
          O(this, r),
          (a = i.call(this, e, n)),
          (a.state = t(D({}, n.state))),
          (a.updateStateProps = a.updateStateProps.bind(P(a))),
          a
        );
      }
      M(r, n);
      var i = F(r);
      return (
        k(r, [
          {
            key: `componentDidMount`,
            value: function () {
              this.context.subscribe(this.updateStateProps);
            },
          },
          {
            key: `shouldComponentUpdate`,
            value: function (e, t) {
              return !Je(t, this.state) || !Je(e, this.props);
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
              this.setState(t(D({}, this.context.state)));
            },
          },
          {
            key: `render`,
            value: function () {
              var t = this,
                n = this.props,
                r = n.children,
                i = N(n, it),
                a = Ze(this.state, i, Ue);
              return E.createElement(
                e,
                j(
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
    })(E.Component);
  return (
    A(n, `contextType`, W),
    A(n, `propTypes`, { children: H.children }),
    A(n, `defaultProps`, { children: null }),
    n
  );
}
var Le = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
ve.resetWarningCache = _e;
var Re = function () {
    function e(e, t, n, r, i, a) {
      if (a !== Le) {
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
      checkPropTypes: ve,
      resetWarningCache: _e,
    };
    return ((n.PropTypes = n), n);
  },
  V = ge(function (e) {
    e.exports = Re();
  }),
  ze = `loading`,
  Be = `success`,
  Ve = `error`,
  H = {
    children: V.oneOfType([V.arrayOf(V.node), V.node]),
    direction: V.oneOf([`forward`, `backward`]),
    height: function (e, t) {
      var n = e[t];
      return e.orientation !== `vertical` ||
        (n !== null && typeof n == `number`)
        ? null
        : Error(
            `Missing required property '${t}' when orientation is vertical.  You must supply a number representing the height in pixels`,
          );
    },
    orientation: V.oneOf([`horizontal`, `vertical`]),
    isBgImage: function (e, t) {
      return !0 === e[t] && e.tag === `img`
        ? Error(
            `HTML img elements should not have a backgroundImage.  Please use ${t} for other block-level HTML tags, like div, a, section, etc...`,
          )
        : null;
    },
  },
  He = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  Ue = {
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
  We = { buttonBack: `buttonBack___1mlaL` },
  Ge = [
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
  Ke = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(P(r))),
        r
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(
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
                i = N(e, Ge),
                a = I([We.buttonBack, `carousel__back-button`, n]),
                o = t.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  r,
                );
              return E.createElement(
                `button`,
                j(
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
  })(E.Component);
(A(Ke, `propTypes`, {
  carouselStore: V.object.isRequired,
  children: H.children.isRequired,
  className: V.string,
  currentSlide: V.number.isRequired,
  disabled: V.bool,
  onClick: V.func,
  step: V.number.isRequired,
  totalSlides: V.number.isRequired,
  visibleSlides: V.number.isRequired,
  infinite: V.bool,
}),
  A(Ke, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  }));
var qe = ge(function (e, t) {
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
qe.types;
var U = {};
((U.number = function (e, t) {
  return e !== e && t !== t;
}),
  (U.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      U.object(e, t, n) &&
      xe(e.prototype, t.prototype)
    );
  }),
  (U.date = function (e, t) {
    return +e == +t;
  }),
  (U.regexp = function (e, t) {
    return e.toString() === t.toString();
  }),
  (U.element = function (e, t) {
    return e.outerHTML === t.outerHTML;
  }),
  (U.textnode = function (e, t) {
    return e.textContent === t.textContent;
  }),
  (U.arguments = U[`bit-array`] = U.array = Se(Ce)),
  (U.object = Se(we)));
var Je = xe,
  Ye = function (e) {
    return Ee(e) && !De(e);
  },
  Xe =
    typeof Symbol == `function` && Symbol.for
      ? Symbol.for(`react.element`)
      : 60103;
z.all = function (e, t) {
  if (!Array.isArray(e)) throw Error(`first argument should be an array`);
  return e.reduce(function (e, n) {
    return z(e, n, t);
  }, {});
};
var Ze = z,
  W = E.createContext(),
  Qe = function e(t) {
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
  $e = { masterSpinnerFinished: !1 },
  et = (function () {
    function e(t) {
      (O(this, e),
        (this.state = Qe(Ze($e, t, Ue))),
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
      k(e, [
        {
          key: `setStoreState`,
          value: function (e, t) {
            ((this.state = Qe(Ze(this.state, e, Ue))),
              this.updateSubscribers(t));
          },
        },
        {
          key: `getStoreState`,
          value: function () {
            return Ze({}, this.state, Ue);
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
  tt = [
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
  nt = (function (e) {
    function t(e) {
      var r;
      if (
        (O(this, t),
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
        slideSize: ye(e.totalSlides, e.visibleSlides),
        slideTraySize: be(e.totalSlides, e.visibleSlides),
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        dragEnabled: e.dragEnabled,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
      return ((r.carouselStore = new et(i)), r);
    }
    M(t, e);
    var n = F(t);
    return (
      k(t, [
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
                ((n.slideSize = ye(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                )),
                (n.slideTraySize = be(
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
                N(e, tt)),
              r = I([`carousel`, this.props.className]);
            return E.createElement(
              t,
              j({ className: r }, n),
              E.createElement(
                W.Provider,
                { value: this.carouselStore },
                this.props.children,
              ),
            );
          },
        },
      ]),
      t
    );
  })(E.Component),
  rt =
    (A(nt, `propTypes`, {
      children: H.children.isRequired,
      className: V.string,
      currentSlide: V.number,
      disableAnimation: V.bool,
      disableKeyboard: V.bool,
      hasMasterSpinner: V.bool,
      interval: V.number,
      isPageScrollLocked: V.bool,
      isPlaying: V.bool,
      lockOnWindowScroll: V.bool,
      naturalSlideHeight: V.number.isRequired,
      naturalSlideWidth: V.number.isRequired,
      orientation: H.orientation,
      playDirection: H.direction,
      step: V.number,
      dragStep: V.number,
      tag: V.string,
      totalSlides: V.number.isRequired,
      touchEnabled: V.bool,
      dragEnabled: V.bool,
      visibleSlides: V.number,
      infinite: V.bool,
      isIntrinsicHeight: V.bool,
    }),
    A(nt, `defaultProps`, {
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
    nt);
W.Consumer;
var it = [`children`],
  at = B(Ke, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  ot = { buttonFirst: `buttonFirst___2rhFr` },
  st = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
  ],
  ct = (function (e) {
    function t() {
      var e;
      return (
        O(this, t),
        (e = n.call(this)),
        (e.handleOnClick = e.handleOnClick.bind(P(e))),
        e
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(t, [
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
              i = (e.onClick, e.totalSlides, N(e, st)),
              a = I([ot.buttonFirst, `carousel__first-button`, t]),
              o = r === null ? n === 0 : r;
            return E.createElement(
              `button`,
              j(
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
  })(E.Component);
B(
  (A(ct, `propTypes`, {
    carouselStore: V.object.isRequired,
    children: H.children.isRequired,
    className: V.string,
    currentSlide: V.number.isRequired,
    disabled: V.bool,
    onClick: V.func,
    totalSlides: V.number.isRequired,
  }),
  A(ct, `defaultProps`, { className: null, disabled: null, onClick: null }),
  ct),
  function (e) {
    return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
  },
);
var lt = { buttonLast: `buttonLast___2yuh0` },
  ut = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
    `visibleSlides`,
  ],
  dt = (function (e) {
    function t() {
      var e;
      return (
        O(this, t),
        (e = n.call(this)),
        (e.handleOnClick = e.handleOnClick.bind(P(e))),
        e
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(t, [
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
              o = N(e, ut),
              s = I([lt.buttonLast, `carousel__last-button`, t]),
              c = r === null ? n >= i - a : r;
            return E.createElement(
              `button`,
              j(
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
  })(E.Component);
B(
  (A(dt, `propTypes`, {
    carouselStore: V.object.isRequired,
    children: H.children.isRequired,
    className: V.string,
    currentSlide: V.number.isRequired,
    disabled: V.bool,
    onClick: V.func,
    totalSlides: V.number.isRequired,
    visibleSlides: V.number.isRequired,
  }),
  A(dt, `defaultProps`, { className: null, disabled: null, onClick: null }),
  dt),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var ft = { buttonNext: `buttonNext___2mOCa` },
  pt = [
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
  mt = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(P(r))),
        r
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(
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
                c = N(e, pt),
                l = I([ft.buttonNext, `carousel__next-button`, n]),
                u = t.setDisabled(i, r, o, a, s);
              return E.createElement(
                `button`,
                j(
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
  })(E.PureComponent),
  ht = B(
    (A(mt, `propTypes`, {
      carouselStore: V.object.isRequired,
      children: H.children.isRequired,
      className: V.string,
      currentSlide: V.number.isRequired,
      disabled: V.bool,
      onClick: V.func,
      step: V.number.isRequired,
      totalSlides: V.number.isRequired,
      visibleSlides: V.number.isRequired,
      infinite: V.bool,
    }),
    A(mt, `defaultProps`, {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    mt),
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
  gt = { buttonNext: `buttonNext___3Lm3s` },
  _t = [
    `carouselStore`,
    `children`,
    `childrenPaused`,
    `childrenPlaying`,
    `className`,
    `isPlaying`,
    `onClick`,
  ],
  vt = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(P(r))),
        r
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(t, [
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
              a = (e.onClick, N(e, _t)),
              o = I([gt.buttonNext, `carousel__play-button`, r]);
            return E.createElement(
              `button`,
              j(
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
  })(E.PureComponent);
B(
  (A(vt, `propTypes`, {
    carouselStore: V.object.isRequired,
    children: V.node,
    childrenPaused: V.node,
    childrenPlaying: V.node,
    className: V.string,
    isPlaying: V.bool.isRequired,
    onClick: V.func,
  }),
  A(vt, `defaultProps`, {
    children: null,
    childrenPaused: null,
    childrenPlaying: null,
    className: null,
    onClick: null,
  }),
  vt),
  function (e) {
    return { isPlaying: e.isPlaying };
  },
);
var yt = { dot: `dot___3c3SI` },
  bt = [
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
  xt = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(P(r))),
        r
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(t, [
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
              s = N(e, bt),
              c = a >= n && a < n + o,
              l = typeof i == `boolean` ? i : c,
              u = typeof r == `boolean` ? r : !0 === c,
              d = I([
                yt.dot,
                l && yt.dotSelected,
                `carousel__dot`,
                `carousel__dot--${a}`,
                l && `carousel__dot--selected`,
                t,
              ]);
            return E.createElement(
              `button`,
              j(
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
  })(E.Component),
  St = B(
    (A(xt, `propTypes`, {
      carouselStore: V.object.isRequired,
      children: H.children,
      className: V.string,
      currentSlide: V.number.isRequired,
      disabled: V.bool,
      onClick: V.func,
      selected: V.bool,
      slide: V.number.isRequired,
      totalSlides: V.number.isRequired,
      visibleSlides: V.number.isRequired,
    }),
    A(xt, `defaultProps`, {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    xt),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      };
    },
  ),
  Ct = {},
  wt = [`renderDots`],
  Tt = [
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
  Et = (function (e) {
    function t() {
      return (O(this, t), n.apply(this, arguments));
    }
    M(t, e);
    var n = F(t);
    return (
      k(t, [
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
              return (s.renderDots, o(N(s, wt)));
            }
            for (var c = [], l = 0; l < n; l += 1) {
              var u = l >= t && l < t + r,
                d = a ? l === t : u,
                f = l >= n - r ? n - r : l;
              c.push(
                E.createElement(
                  St,
                  { key: l, slide: f, selected: d, disabled: !!i && d },
                  E.createElement(
                    `span`,
                    { className: I[`carousel__dot-group-dot`] },
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
                N(e, Tt)),
              i = I([Ct.DotGroup, `carousel__dot-group`, n]);
            return E.createElement(
              `div`,
              j({ className: i }, r),
              this.renderDots(),
              t,
            );
          },
        },
      ]),
      t
    );
  })(E.Component);
B(
  (A(Et, `propTypes`, {
    children: H.children,
    className: V.string,
    currentSlide: V.number.isRequired,
    carouselStore: V.object.isRequired,
    totalSlides: V.number.isRequired,
    visibleSlides: V.number.isRequired,
    dotNumbers: V.bool,
    disableActiveDots: V.bool,
    showAsSelectedForCurrentSlideOnly: V.bool,
    renderDots: V.func,
  }),
  A(Et, `defaultProps`, {
    children: null,
    className: null,
    dotNumbers: !1,
    disableActiveDots: !0,
    showAsSelectedForCurrentSlideOnly: !1,
    renderDots: null,
  }),
  Et),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var G = { image: `image___xtQGH` },
  Dt = [`src`, `alt`],
  Ot = [
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
  kt = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
        (r = n.call(this, e)),
        (r.state = { imageStatus: ze }),
        (r.handleImageLoad = r.handleImageLoad.bind(P(r))),
        (r.handleImageError = r.handleImageError.bind(P(r))),
        (r.image = null),
        r
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(
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
                (this.setState({ imageStatus: ze }),
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
              (this.setState({ imageStatus: Be }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(e));
            },
          },
          {
            key: `handleImageError`,
            value: function (e) {
              (this.setState({ imageStatus: Ve }),
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
                n = I([
                  G.image,
                  G.imageLoading,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--loading`,
                  this.props.className,
                ]);
              return E.createElement(
                t,
                j({ className: n }, e),
                this.customRender(`renderLoading`),
              );
            },
          },
          {
            key: `renderError`,
            value: function (e) {
              var t = this.tempTag(),
                n = I([
                  G.image,
                  G.imageError,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--error`,
                  this.props.className,
                ]);
              return E.createElement(
                t,
                j({ className: n }, e),
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
                i = I([
                  G.image,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--success`,
                  this.props.className,
                ]),
                a = j({}, n),
                o = e;
              if (r !== `img`) {
                var s = e.src;
                (e.alt,
                  (o = N(e, Dt)),
                  (a = j({}, n, {
                    backgroundImage: `url("${s}")`,
                    backgroundSize: `cover`,
                  })));
              }
              return E.createElement(
                r,
                j({ className: i, style: a }, o),
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
                  N(e, Ot));
              switch (this.state.imageStatus) {
                case ze:
                  return this.renderLoading(t);
                case Be:
                  return this.renderSuccess(t);
                case Ve:
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
  })(E.Component);
(A(kt, `propTypes`, {
  alt: V.string,
  carouselStore: V.object.isRequired,
  children: H.children,
  className: V.string,
  hasMasterSpinner: V.bool.isRequired,
  isBgImage: H.isBgImage,
  onError: V.func,
  onLoad: V.func,
  renderError: V.func,
  renderLoading: V.func,
  src: V.string.isRequired,
  style: V.object,
  tag: V.string,
}),
  A(kt, `defaultProps`, {
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
var At = B(kt, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  jt = { spinner: `spinner___27VUp`, spin: `spin___S3UuE` },
  Mt = [`className`],
  Nt = (function (e) {
    function t() {
      return (O(this, t), n.apply(this, arguments));
    }
    M(t, e);
    var n = F(t);
    return (
      k(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.className,
              n = N(e, Mt),
              r = I([jt.spinner, `carousel__spinner`, t]);
            return E.createElement(`div`, j({ className: r }, n));
          },
        },
      ]),
      t
    );
  })(E.PureComponent),
  Pt =
    (A(Nt, `propTypes`, { className: V.string }),
    A(Nt, `defaultProps`, { className: null }),
    Nt),
  K = {
    container: `container___2O72F`,
    overlay: `overlay___IV4qY`,
    hover: `hover___MYy31`,
    zoom: `zoom___3kqYk`,
    loading: `loading___1pvNI`,
    imageLoadingSpinnerContainer: `imageLoadingSpinnerContainer___3UIPD`,
  },
  Ft = [
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
  It,
  Lt = 2,
  Rt = 3;
B(
  ((It = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
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
        (r.handleImageComplete = r.handleImageComplete.bind(P(r))),
        (r.handleImageLoadError = r.handleImageLoadError.bind(P(r))),
        (r.handleOnMouseMove = r.handleOnMouseMove.bind(P(r))),
        (r.handleOnMouseOut = r.handleOnMouseOut.bind(P(r))),
        (r.handleOnMouseOver = r.handleOnMouseOver.bind(P(r))),
        (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(P(r))),
        (r.handleOnTouchMove = r.handleOnTouchMove.bind(P(r))),
        (r.handleOnTouchStart = r.handleOnTouchStart.bind(P(r))),
        r
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(
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
                this.setState({ isHovering: !0, scale: Lt });
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
                var t = L((e.nativeEvent.offsetX / e.target.offsetWidth) * 100),
                  n = L((e.nativeEvent.offsetY / e.target.offsetHeight) * 100);
                this.setState({ x: t, y: n });
              }
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (e) {
              var t = this;
              this.props.isPinchZoomEnabled &&
                (ue(e.targetTouches).forEach(function (e) {
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
                var r = ue(e.targetTouches)
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
                  s.distance = t.distanceBetweenTwoTouches(D({}, s));
                  var c = t.midpointBetweenTwoTouches(D({}, s));
                  ((s.cx = c.x), (s.cy = c.y));
                  var l = {
                    x1: r[0].clientX,
                    y1: r[0].clientY,
                    x2: r[1].clientX,
                    y2: r[1].clientY,
                  };
                  l.distance = t.distanceBetweenTwoTouches(D({}, l));
                  var u = t.midpointBetweenTwoTouches(D({}, l));
                  ((l.cx = u.x), (l.cy = u.y));
                  var d = L(
                      He({
                        min: 0,
                        max: 100,
                        x: ((l.cx - i.left) / i.width) * 100,
                      }),
                    ),
                    f = L(
                      He({
                        min: 0,
                        max: 100,
                        x: ((l.cy - i.top) / i.height) * 100,
                      }),
                    ),
                    p = function (e) {
                      return He({
                        min: 1,
                        max: Rt,
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
                (ue(e.changedTouches).forEach(function (e) {
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
                return E.createElement(
                  `div`,
                  {
                    className: I([
                      K.imageLoadingSpinnerContainer,
                      `carousel__image-loading-spinner-container`,
                    ]),
                  },
                  e && e(),
                  !e && E.createElement(Pt, null),
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
                u = N(e, Ft),
                d = I([K.container, i]),
                f = I([K.image, `carousel__zoom-image`, a]),
                p = I([
                  K.overlay,
                  `carousel__zoom-image-overlay`,
                  this.state.isHovering && K.hover,
                  this.state.isZooming && K.zoom,
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
                E.createElement(
                  l,
                  j({ className: d }, u),
                  E.createElement(
                    At,
                    j(
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
                  E.createElement(At, {
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
  })(E.Component)),
  A(It, `propTypes`, {
    alt: V.string,
    bgImageProps: V.object,
    bgImageTag: V.string,
    carouselStore: V.object.isRequired,
    className: V.string,
    imageClassName: V.string,
    overlayClassName: V.string,
    spinner: V.func,
    onLoad: V.func,
    onError: V.func,
    src: V.string.isRequired,
    srcZoomed: V.string,
    tag: V.string,
    isPinchZoomEnabled: V.bool,
  }),
  A(It, `defaultProps`, {
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
  It),
  function () {
    return {};
  },
);
var q = {
    slide: `slide___3-Nqo`,
    slideHorizontal: `slideHorizontal___1NzNV`,
    slideInner: `slideInner___2mfX9`,
    focusRing: `focusRing___1airF`,
  },
  zt = [
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
  Bt = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
        (r = n.call(this, e)),
        (r.handleOnFocus = r.handleOnFocus.bind(P(r))),
        (r.handleOnBlur = r.handleOnBlur.bind(P(r))),
        (r.state = { focused: !1 }),
        r
      );
    }
    M(t, e);
    var n = F(t);
    return (
      k(t, [
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
              ? E.createElement(`div`, {
                  className: [q.focusRing, `carousel__slide-focus-ring`].join(
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
              g = N(t, zt),
              _ = {};
            u === `horizontal`
              ? ((_.width = L(d)), (_.paddingBottom = L((100 * c) / (l * m))))
              : ((_.width = L(100)), (_.paddingBottom = L((100 * c) / l)));
            var v = {};
            h &&
              (u === `horizontal` ? (_.height = `unset`) : (_.width = `unset`),
              (_.paddingBottom = `unset`),
              (v.position = `unset`));
            var y = j({}, _, f),
              b = this.isVisible(),
              x = I([
                q.slide,
                u === `horizontal` && q.slideHorizontal,
                `carousel__slide`,
                this.state.focused && `carousel__slide--focused`,
                b && a,
                b && `carousel__slide--visible`,
                !b && i,
                !b && `carousel__slide--hidden`,
                r,
              ]),
              S = I([q.slideInner, `carousel__inner-slide`, o]);
            return E.createElement(
              p,
              j(
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
              E.createElement(
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
  })(E.PureComponent),
  Vt = B(
    (A(Bt, `propTypes`, {
      ariaLabel: V.string,
      carouselStore: V.object,
      children: H.children,
      className: V.string,
      classNameHidden: V.string,
      classNameVisible: V.string,
      currentSlide: V.number.isRequired,
      index: V.number.isRequired,
      innerClassName: V.string,
      innerTag: V.string,
      naturalSlideHeight: V.number.isRequired,
      naturalSlideWidth: V.number.isRequired,
      onBlur: V.func,
      onFocus: V.func,
      orientation: H.orientation.isRequired,
      slideSize: V.number.isRequired,
      role: V.string,
      style: V.object,
      tag: V.string,
      totalSlides: V.number.isRequired,
      visibleSlides: V.number.isRequired,
      isIntrinsicHeight: V.bool,
    }),
    A(Bt, `defaultProps`, {
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
    Bt),
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
  Ht = (function () {
    function e() {
      O(this, e);
    }
    return (
      k(
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
  J = {
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
  Ut =
    `ariaLabel.carouselStore.children.className.classNameAnimation.classNameTray.classNameTrayWrap.currentSlide.disableAnimation.disableKeyboard.dragEnabled.hasMasterSpinner.interval.isPageScrollLocked.isPlaying.lockOnWindowScroll.masterSpinnerFinished.moveThreshold.naturalSlideHeight.naturalSlideWidth.onMasterSpinner.orientation.playDirection.privateUnDisableAnimation.slideSize.slideTraySize.spinner.style.totalSlides.touchEnabled.trayProps.trayTag.visibleSlides.isIntrinsicHeight`.split(
      `.`,
    ),
  Wt = [
    `dragStep`,
    `step`,
    `infinite`,
    `preventVerticalScrollOnTouch`,
    `preventingVerticalScroll`,
    `horizontalPixelThreshold`,
    `verticalPixelThreshold`,
  ],
  Gt = [
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
  Kt = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
        (r = n.call(this, e)),
        (r.getSliderRef = r.getSliderRef.bind(P(r))),
        (r.handleDocumentScroll = r.handleDocumentScroll.bind(P(r))),
        (r.handleOnClickCapture = r.handleOnClickCapture.bind(P(r))),
        (r.handleOnKeyDown = r.handleOnKeyDown.bind(P(r))),
        (r.handleOnMouseDown = r.handleOnMouseDown.bind(P(r))),
        (r.handleOnMouseMove = r.handleOnMouseMove.bind(P(r))),
        (r.handleOnMouseUp = r.handleOnMouseUp.bind(P(r))),
        (r.handleOnTouchCancel = r.handleOnTouchCancel.bind(P(r))),
        (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(P(r))),
        (r.handleOnTouchMove = r.handleOnTouchMove.bind(P(r))),
        (r.handleOnTouchStart = r.handleOnTouchStart.bind(P(r))),
        (r.playBackward = r.playBackward.bind(P(r))),
        (r.playForward = r.playForward.bind(P(r))),
        (r.callCallback = r.callCallback.bind(P(r))),
        (r.blockWindowScroll = r.blockWindowScroll.bind(P(r))),
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
    M(t, e);
    var n = F(t);
    return (
      k(
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
              var e = new Ht();
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
                i = He({ min: 0, max: r, x: this.props.currentSlide + n });
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
                  E.createElement(
                    `div`,
                    {
                      className: I([
                        J.masterSpinnerContainer,
                        `carousel__master-spinner-container`,
                      ]),
                    },
                    r && r(),
                    !r && E.createElement(Pt, null),
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
                x = N(t, Ut),
                S = j({}, h),
                C = {};
              f === `vertical` &&
                ((C.height = 0),
                (C.paddingBottom = L((100 * u * y) / d)),
                (C.width = L(100)));
              var w = {},
                ee = L(p * c * -1);
              ((this.state.isBeingTouchDragged ||
                this.state.isBeingMouseDragged ||
                l) &&
                (w.transition = `none`),
                b && ((w.display = `flex`), (w.alignItems = `stretch`)),
                f === `vertical`
                  ? ((w.transform = `translateY(${ee}) translateY(${this.state.deltaY}px)`),
                    (w.width = L(100)),
                    (w.flexDirection = `column`))
                  : ((w.width = L(m)),
                    (w.transform = `translateX(${ee}) translateX(${this.state.deltaX}px)`),
                    (w.flexDirection = `row`)));
              var te = I([
                  f === `vertical` ? J.verticalSlider : J.horizontalSlider,
                  !g && J.touchDisabled,
                  `carousel__slider`,
                  f === `vertical`
                    ? `carousel__slider--vertical`
                    : `carousel__slider--horizontal`,
                  i,
                ]),
                ne = I([
                  J.sliderTrayWrap,
                  `carousel__slider-tray-wrapper`,
                  f === `vertical`
                    ? J.verticalSlideTrayWrap
                    : J.horizontalTrayWrap,
                  f === `vertical`
                    ? `carousel__slider-tray-wrap--vertical`
                    : `carousel__slider-tray-wrap--horizontal`,
                  s,
                ]),
                T = I([
                  J.sliderTray,
                  a || J.sliderAnimation,
                  `carousel__slider-tray`,
                  f === `vertical` ? J.verticalTray : J.horizontalTray,
                  f === `vertical`
                    ? `carousel__slider-tray--vertical`
                    : `carousel__slider-tray--horizontal`,
                  o,
                ]),
                re =
                  (x.dragStep,
                  x.step,
                  x.infinite,
                  x.preventVerticalScrollOnTouch,
                  x.preventingVerticalScroll,
                  x.horizontalPixelThreshold,
                  x.verticalPixelThreshold,
                  N(x, Wt)),
                D =
                  (_.className,
                  _.onClickCapture,
                  _.onMouseDown,
                  _.onTouchCancel,
                  _.onTouchEnd,
                  _.onTouchMove,
                  _.onTouchStart,
                  _.ref,
                  _.style,
                  N(_, Gt));
              return E.createElement(
                `div`,
                j(
                  {
                    ref: function (t) {
                      e.sliderElement = t;
                    },
                    className: te,
                    "aria-live": `polite`,
                    "aria-label": n,
                    role: this.props.role,
                    style: S,
                    onKeyDown: this.handleOnKeyDown,
                  },
                  re,
                ),
                E.createElement(
                  `div`,
                  { className: ne, style: C },
                  E.createElement(
                    v,
                    j(
                      {
                        ref: this.getSliderRef,
                        className: T,
                        style: w,
                        onTouchStart: this.handleOnTouchStart,
                        onTouchMove: this.handleOnTouchMove,
                        onTouchEnd: this.handleOnTouchEnd,
                        onTouchCancel: this.handleOnTouchCancel,
                        onMouseDown: this.handleOnMouseDown,
                        onClickCapture: this.handleOnClickCapture,
                      },
                      D,
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
  })(E.Component),
  qt = B(
    (A(Kt, `propTypes`, {
      ariaLabel: V.string,
      carouselStore: V.object.isRequired,
      children: V.node.isRequired,
      className: V.string,
      classNameAnimation: V.string,
      classNameTray: V.string,
      classNameTrayWrap: V.string,
      currentSlide: V.number.isRequired,
      disableAnimation: V.bool,
      disableKeyboard: V.bool,
      dragEnabled: V.bool.isRequired,
      dragStep: V.number,
      hasMasterSpinner: V.bool.isRequired,
      infinite: V.bool,
      interval: V.number.isRequired,
      isPageScrollLocked: V.bool.isRequired,
      isPlaying: V.bool.isRequired,
      lockOnWindowScroll: V.bool.isRequired,
      preventVerticalScrollOnTouch: V.bool,
      horizontalPixelThreshold: V.number,
      verticalPixelThreshold: V.number,
      masterSpinnerFinished: V.bool.isRequired,
      moveThreshold: V.number,
      naturalSlideHeight: V.number.isRequired,
      naturalSlideWidth: V.number.isRequired,
      onMasterSpinner: V.func,
      orientation: H.orientation.isRequired,
      playDirection: H.direction.isRequired,
      privateUnDisableAnimation: V.bool,
      role: V.string,
      slideSize: V.number.isRequired,
      slideTraySize: V.number.isRequired,
      spinner: V.func,
      step: V.number.isRequired,
      style: V.object,
      totalSlides: V.number.isRequired,
      touchEnabled: V.bool.isRequired,
      trayProps: V.shape({
        className: V.string,
        onClickCapture: V.func,
        onMouseDown: V.func,
        onTouchCancel: V.func,
        onTouchEnd: V.func,
        onTouchMove: V.func,
        onTouchStart: V.func,
        ref: V.shape({}),
        style: V.string,
      }),
      trayTag: V.string,
      visibleSlides: V.number,
      isIntrinsicHeight: V.bool,
    }),
    A(Kt, `defaultProps`, {
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
    Kt),
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
  Jt = `HRbFcf6y6hE-`,
  Yt = `-ZUk3xT7ZlY-`,
  Xt = `KLUTL0g4Wbo-`,
  Zt = `glnkf1Fqlvc-`,
  Qt = `loez15u80yI-`,
  $t = `bTrailerCarouselAutoAdvance`,
  Y,
  en = new Set();
function tn() {
  if (Y === void 0) {
    let e = n($t);
    Y = !e || e.toLowerCase() === `true`;
  }
  return Y;
}
function nn(e) {
  (a($t, String(e), 3650), (Y = e), en.forEach((e) => e()));
}
function rn(e) {
  return (en.add(e), () => en.delete(e));
}
function an() {
  return [E.useSyncExternalStore(rn, tn, () => !0), nn];
}
function on(e) {
  let [t, n] = an();
  return (0, T.jsx)(`div`, {
    className: r(Qt, e.bPhoneOnly && `fvIP8xIxKbo-`),
    children: (0, T.jsx)(u, {
      className: Zt,
      controlled: !0,
      checked: t,
      label: S(`#SaleTrailerCarousel_AutoAdvanceEnabled`),
      onChange: n,
    }),
  });
}
var sn = 1e4;
function cn(e) {
  let {
      className: t,
      currentItemKey: n,
      autoAdvanceMsec: i,
      fnAdvance: a,
      enabled: o,
      pauseReason: s,
      countdownToken: l = `#SaleTrailerCarousel_NextGameInSeconds`,
      progressTarget: u,
    } = e,
    [d] = an(),
    f = i === void 0 ? sn : i,
    [p, m] = E.useState(f),
    h = s !== void 0,
    g = ln(s);
  (c(
    () => {
      let e = p - 30;
      e <= 0 ? (a(), m(f)) : m(Math.max(e, 0));
    },
    30,
    [f],
    o && d && !h && f > 0 && p > 0,
  ),
    E.useEffect(() => {
      m(f);
    }, [n, f, d]));
  let _ = `${100 - (p / f) * 100}%`,
    y = !o || !d ? `off` : h ? `paused` : `running`;
  return (
    E.useEffect(() => {
      let e = u?.current;
      e &&
        (e.style.setProperty(`--auto-advance-ratio`, _),
        (e.dataset.autoAdvance = y));
    }, [u, _, y]),
    (0, T.jsxs)(`div`, {
      className: t,
      children: [
        (0, T.jsxs)(`div`, {
          className: r(Jt, (!o || !d) && `X8q-iPdWKKw-`, h && `_3E-10Et-w2o-`),
          children: [
            (0, T.jsx)(`div`, {
              className: Yt,
              children: !h || !g ? v(l, Math.ceil(p / 1e3)) : g,
            }),
            (0, T.jsx)(`div`, {
              className: Xt,
              style: { "--auto-advance-ratio": _ },
            }),
          ],
        }),
        (0, T.jsx)(on, {}),
      ],
    })
  );
}
function ln(e) {
  switch (e) {
    case 4:
      return S(`#SaleTrailerCarousel_AutoAdvanceVideoPaused`);
    case 3:
    case 5:
      return S(`#SaleTrailerCarousel_AutoAdvanceHover`);
  }
}
function un() {
  let [e, t] = E.useState(!1),
    [n, r] = E.useState(!1);
  E.useEffect(() => {
    let e = () => t(document.hidden);
    return (
      document.addEventListener(`visibilitychange`, e),
      () => document.removeEventListener(`visibilitychange`, e)
    );
  }, []);
  let i = E.useCallback((e) => r(!e.isIntersecting), []);
  return {
    bTabHidden: e,
    bOffscreen: n,
    refIntersection: f(i, { threshold: 0.5 }),
  };
}
var dn = `_--jO3lLROzo-`,
  fn = `DyOrE-LFQDQ-`,
  pn = `_538FwVlPb0E-`,
  mn = `bYSGIkS6GvM-`,
  hn = `eROFrrQM5Ew-`,
  gn = `bKYQmUBfOtY-`,
  _n = `Udbg33O1Kjs-`,
  vn = `ux4DPxJOkL8-`,
  yn = `-LFP33ltPBY-`,
  bn = `_4uWRflget-8-`,
  xn = `IxjyotVSZiA-`,
  Sn = `cD9zjaueru0-`,
  Cn = `_6KPsWUgnjok-`,
  wn = `RiCuzM-PsMk-`,
  Tn = `_8kxQAkw3gko-`,
  En = `CKl3kyOE6XE-`,
  Dn = `_4CFowarbZF0-`,
  On = `I5j74q712SQ-`,
  kn = `FStnZRH332A-`,
  An = `eqYBsdUkt5U-`,
  jn = E.createContext(!1),
  X = 9;
function Mn(e, t) {
  let n = E.useRef(0);
  if (e <= X)
    return {
      rgPills: Array.from({ length: e }, (e, t) => ({ nPage: t })),
      strClassName: On,
      bWindowed: !1,
      nPages: e,
      nSelectedPage: t,
    };
  let i = n.current;
  (t < i ? (i = t) : t >= i + X && (i = t - X + 1),
    (i = Math.min(Math.max(i, 0), e - X)),
    (n.current = i));
  let a = i + X,
    o = i > 0,
    s = a < e;
  return {
    rgPills: [
      { nPage: i - 1, bHidden: !o },
      ...Array.from({ length: X }, (e, t) => ({ nPage: i + t })),
      { nPage: a, bHidden: !s },
    ],
    strClassName: r(On, o && `Vgwtx-YLRTw-`, s && `XALey6nTKPs-`),
    bWindowed: !0,
    nPages: e,
    nSelectedPage: t,
  };
}
function Nn(e) {
  let { pillWindow: t, children: n } = e;
  return (0, T.jsxs)(`div`, {
    className: Dn,
    children: [
      (0, T.jsx)(`div`, { className: t.strClassName, children: n }),
      t.bWindowed &&
        (0, T.jsx)(`span`, {
          className: `xAhUZDLR-Fs-`,
          children: S(
            `#Sale_Carousel_PageOfPages`,
            w(t.nSelectedPage + 1),
            w(t.nPages),
          ),
        }),
    ],
  });
}
function Pn(e) {
  return r(kn, e.bHidden && `yer2QyfyCPw-`);
}
function Fn(e) {
  let { bSelected: t, bCountdown: n } = e,
    i = t && n;
  return (0, T.jsx)(`span`, {
    className: r(An, t && `bY2thn3lfUw-`, i && `D6a-33r-4xk-`),
    children: i && (0, T.jsx)(`span`, { className: `NItUkZKCFW8-` }),
  });
}
function In(e) {
  let { count: t, selectedIndex: n, fnNavigate: i, bCountdown: a } = e,
    o = Mn(t, n);
  return (0, T.jsx)(d, {
    "flow-children": `row`,
    className: r(En, Tn),
    children: (0, T.jsx)(Nn, {
      pillWindow: o,
      children: o.rgPills.map((e) =>
        (0, T.jsx)(
          `div`,
          {
            className: Pn(e),
            onClick: i && !e.bHidden ? () => i(e.nPage) : void 0,
            children: (0, T.jsx)(Fn, {
              bSelected: e.nPage === n,
              bCountdown: a,
            }),
          },
          e.nPage,
        ),
      ),
    }),
  });
}
var Ln = `_1MsO62M-piw-`,
  Rn = `QZKBcFqGSTo-`,
  zn = 0.6;
function Bn(e, t, n) {
  let r = E.useRef(t);
  r.current = t;
  let i = !!t;
  E.useEffect(() => {
    let t = e.current;
    if (!i || !t || typeof IntersectionObserver > `u`) return;
    let n = Array.from(t.children);
    if (!n.length) return;
    let a = Math.round(t.scrollLeft / t.clientWidth),
      o = new IntersectionObserver(
        (e) => {
          for (let t of e) {
            if (!t.isIntersecting || t.intersectionRatio < zn) continue;
            let e = n.indexOf(t.target);
            e < 0 || e === a || ((a = e), r.current?.(e));
          }
        },
        { root: t, threshold: zn },
      );
    for (let e of n) o.observe(e);
    return () => o.disconnect();
  }, [e, i, n]);
}
function Vn(e, t, n, r) {
  let i = e.getBoundingClientRect(),
    a = t.getBoundingClientRect();
  return n ? i.right - r - a.right : a.left - (i.left + r);
}
var Hn = 10;
function Un(e, t, n) {
  let [r, i] = E.useState(0);
  return (
    E.useEffect(() => {
      let t = e.current;
      if (!n || !t) return;
      let r = 0,
        a = () => {
          r = 0;
          let e = Array.from(t.children),
            n = t.scrollWidth - t.clientWidth,
            a = n > 0 && Math.abs(t.scrollLeft) >= n - 2,
            o = getComputedStyle(t),
            s = o.direction === `rtl`,
            c = parseFloat(o.scrollPaddingInlineStart) || 0;
          if (
            (t.toggleAttribute(
              `data-more-after`,
              Math.abs(t.scrollLeft) < n - 2,
            ),
            t.toggleAttribute(
              `data-more-before`,
              a &&
                e.some((e) => {
                  let n = Vn(t, e, s, c);
                  return n < -2 && n + e.getBoundingClientRect().width > 2;
                }),
            ),
            a)
          ) {
            i(e.length - 1);
            return;
          }
          let l = 0;
          (e.forEach((e, n) => {
            Vn(t, e, s, c) <= Hn && (l = n);
          }),
            i(l));
        },
        o = () => {
          r ||= requestAnimationFrame(a);
        };
      t.addEventListener(`scroll`, o, { passive: !0 });
      let s = new ResizeObserver(o);
      return (
        s.observe(t),
        a(),
        () => {
          (t.removeEventListener(`scroll`, o),
            s.disconnect(),
            r && cancelAnimationFrame(r));
        }
      );
    }, [e, t, n]),
    [
      r,
      E.useCallback(
        (t) => {
          let n = e.current,
            r = n?.children[t];
          if (!n || !r) return;
          let i = getComputedStyle(n),
            a = i.direction === `rtl`,
            o = Vn(n, r, a, parseFloat(i.scrollPaddingInlineStart) || 0);
          n.scrollBy({ left: a ? -o : o, behavior: `smooth` });
        },
        [e],
      ),
    ]
  );
}
function Wn(e) {
  let { nSlideIndex: t, nStartingSlideIndex: n, ref: r, children: i } = e;
  return n === void 0
    ? i
    : (0, T.jsx)(`div`, { ref: t === n ? r : void 0, children: i });
}
function Gn(e) {
  let {
      padded: t,
      gap: n,
      children: i,
      bLazyRenderChildren: a,
      lazyRenderPlaceholderWidth: o,
      lazyRenderPlaceholderHeight: c,
      startingSlide: l,
      onSlide: u,
    } = e,
    f = E.useRef(null),
    p = E.useRef(null),
    m = s(),
    h = E.Children.count(i);
  Bn(f, u, h);
  let g = E.useContext(jn) && !m && h > 1,
    [_, v] = Un(f, h, g);
  E.useLayoutEffect(() => {
    f.current &&
      p.current &&
      (f.current.scrollLeft +=
        p.current.getBoundingClientRect().left -
        f.current.getBoundingClientRect().left);
  }, [l]);
  let y = E.Children.map(i, (e, t) =>
      a
        ? (0, T.jsx)(te, {
            rootMargin: `0px 50% 0px 50%`,
            horizontal: !0,
            placeholderWidth: o ?? 1,
            placeholderHeight: 1,
            holdGamepadFocus: m,
            children: (0, T.jsx)(Wn, {
              nSlideIndex: t,
              nStartingSlideIndex: l,
              ref: p,
              children: e,
            }),
          })
        : (0, T.jsx)(Wn, {
            nSlideIndex: t,
            nStartingSlideIndex: l,
            ref: p,
            children: e,
          }),
    ),
    b = (0, T.jsx)(d, {
      "flow-children": `row`,
      style: { gap: n ? n + `px` : void 0 },
      className: r(
        { SaleSectionCarouselPadding: t },
        `ScrollSnapCarousel`,
        `SaleSectionCarousel`,
        Ln,
        g && `DE3YQ2XTqZE-`,
        e.className,
      ),
      ref: f,
      children: y,
    }),
    x = g
      ? (0, T.jsxs)(`div`, {
          className: r(Rn, `PillScrollRowCtn`),
          children: [
            b,
            (0, T.jsx)(In, { count: h, selectedIndex: _, fnNavigate: v }),
          ],
        })
      : b;
  return a
    ? (0, T.jsx)(te, {
        rootMargin: `50% 0px 50% 0px`,
        horizontal: !1,
        placeholderWidth: 1,
        placeholderHeight: c ?? 1,
        children: x,
      })
    : x;
}
var Z = (function (e) {
    return (
      (e.k_ECutArrowStyle = `single`),
      (e.k_EDoubleArrowStyle = `double`),
      (e.k_EThickChevron = `chevron`),
      (e.k_EFilledArrow = `filled`),
      (e.k_EPointyArrow = `pointy`),
      e
    );
  })({}),
  Kn = (function (e) {
    return (
      (e.k_EPillCrumb = `pill`),
      (e.k_ECircularCrumb = `circle`),
      (e.k_ESquareCrumb = `square`),
      e
    );
  })({});
function Q(e) {
  let { arrowFill: t, arrowStyle: n, direction: r } = e;
  switch (n) {
    default:
    case Z.k_ECutArrowStyle: {
      let e = r == `right` ? 0 : 180;
      return (0, T.jsx)(C, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Z.k_EDoubleArrowStyle: {
      let e = r == `right` ? 180 : 0;
      return (0, T.jsx)(h, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Z.k_EThickChevron: {
      let e = r == `right` ? 0 : 180;
      return (0, T.jsx)(m, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Z.k_EFilledArrow: {
      let e = r == `right` ? 90 : 270;
      return (0, T.jsx)(p, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Z.k_EPointyArrow:
      return (0, T.jsx)(b, {
        fill: t || `white`,
        role: `presentation`,
        direction: r || `left`,
      });
  }
}
function qn(e) {
  let {
      bIsActive: t,
      breadcrumbActiveColor: n,
      breadcrumbColor: r,
      breadcrumbStyle: i,
    } = e,
    a = t ? n || `#FFFFFF` : r || `#606974`;
  switch (i) {
    default:
    case Kn.k_EPillCrumb:
      return (0, T.jsx)(_, { fill: a, role: `presentation` });
    case Kn.k_ECircularCrumb:
      return (0, T.jsx)(y, { fill: a, role: `presentation` });
    case Kn.k_ESquareCrumb:
      return (0, T.jsx)(x, { fill: a, role: `presentation` });
  }
}
var Jn = i(l());
function Yn(e, t) {
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
function $(e) {
  let {
      eDirection: t,
      onNavIntent: n,
      className: r,
      style: i,
      children: a,
    } = e,
    o = E.useContext(W),
    s = E.useRef(n);
  s.current = n;
  let c = E.useRef(!1),
    l = E.useRef(!1),
    u = E.useCallback(() => {
      let e = Yn(o.state, t);
      e !== void 0 && s.current?.(e, t);
    }, [o, t]),
    d = !!n;
  E.useEffect(() => {
    if (!d) return;
    let e = o.state.currentSlide,
      t = () => {
        let t = o.state.currentSlide;
        t !== e && ((e = t), (c.current || l.current) && u());
      };
    return (o.subscribe(t), () => o.unsubscribe(t));
  }, [d, o, u]);
  let f = t === `next` ? ht : at;
  return n
    ? (0, T.jsx)(f, {
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
    : (0, T.jsx)(f, {
        className: r,
        style: i,
        "aria-label": e[`aria-label`],
        children: a,
      });
}
var Xn = B(
  class extends E.Component {
    render() {
      let {
          showArrows: e,
          arrowFill: t,
          arrowStyle: n,
          onNavIntent: i,
        } = this.props,
        a = this.props.visibleSlides,
        o = this.props.totalSlides,
        s = this.props.currentSlide;
      if (a >= o) return null;
      let c = (100 * s) / o,
        l = 100 * (1 - Math.min(s + a, o) / o),
        u = c + (50 * a) / o,
        d = 100 - u;
      return (0, T.jsxs)(`div`, {
        className: _n,
        children: [
          e &&
            (0, T.jsx)($, {
              eDirection: `previous`,
              onNavIntent: i,
              className: r(`iqx2UWGqqKU-`, `oKffwUnx6co-`, `_--jO3lLROzo-`),
              children: (0, T.jsx)(Q, {
                arrowFill: t,
                arrowStyle: n,
                direction: `left`,
              }),
            }),
          (0, T.jsxs)(`div`, {
            className: bn,
            children: [
              (0, T.jsx)(`div`, { className: xn }),
              (0, T.jsx)(`div`, {
                className: Sn,
                style: { insetInlineStart: c + `%`, insetInlineEnd: l + `%` },
              }),
              (0, T.jsx)(`div`, {
                className: vn,
                style: { insetInlineStart: `0%`, width: u + `%` },
                children: (0, T.jsx)($, {
                  eDirection: `previous`,
                  onNavIntent: i,
                  className: r(dn, yn),
                  style: { color: `red` },
                  children: (0, T.jsx)(`div`, {}),
                }),
              }),
              (0, T.jsx)(`div`, {
                className: vn,
                style: { insetInlineEnd: `0%`, width: d + `%` },
                children: (0, T.jsx)($, {
                  eDirection: `next`,
                  onNavIntent: i,
                  className: r(dn, yn),
                  children: (0, T.jsx)(`div`, {}),
                }),
              }),
            ],
          }),
          e &&
            (0, T.jsx)($, {
              eDirection: `next`,
              onNavIntent: i,
              className: r(`iqx2UWGqqKU-`, `O2Vg9rmPwSE-`, `_--jO3lLROzo-`),
              children: (0, T.jsx)(Q, {
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
function Zn(e) {
  let { bForceSimpleCarousel: t, screenIsWide: n, children: r } = e,
    i = s();
  return (n || i) && !t
    ? (0, T.jsx)(Qn, { ...e, children: r })
    : (0, T.jsx)(Gn, { ...e, children: r });
}
function Qn(e) {
  let n = s(),
    i = E.useContext(jn),
    [a, o] = E.useState(!1),
    { bTabHidden: c, bOffscreen: l, refIntersection: u } = un(),
    f = () => E.Children.count(e.children),
    p = () => Math.min(f(), e.visibleElements),
    m = () =>
      E.Children.map(e.children, (t, r) => {
        let i =
          e.bLazyRenderChildren && !n
            ? (0, T.jsx)(te, {
                rootMargin: `0px 100% 0px 100%`,
                horizontal: !0,
                placeholderWidth: e.lazyRenderPlaceholderWidth ?? 1,
                placeholderHeight: e.lazyRenderPlaceholderHeight ?? 1,
                children: t,
              })
            : t;
        return (0, T.jsx)(
          Vt,
          {
            className: Cn,
            index: r,
            role: `listitem`,
            "aria-label": void 0,
            children: i,
          },
          `slide_` + r,
        );
      }),
    h = f(),
    g = p();
  if (!h || !g) return null;
  let _ = g < h,
    v = e.hideArrows || !_,
    y = !_ || e.hidePips,
    b = !!e.bAutoAdvance && _ && !n,
    x;
  a && !t() ? (x = 5) : c ? (x = 1) : l && (x = 2);
  let S = 4 / 3,
    C = !0;
  e.slideAspectRatio && ((S = e.slideAspectRatio), (C = !1));
  let w = `items_in_row_${e.visibleElements}`;
  return (0, T.jsx)(d, {
    "flow-children": `row`,
    className: r(fn, e.className, w),
    navKey: e.navKey,
    ref: u,
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    children: (0, T.jsxs)(rt, {
      visibleSlides: e.visibleElements,
      totalSlides: f(),
      naturalSlideWidth: 100 * S,
      naturalSlideHeight: 100,
      step: e.visibleElements,
      infinite: !e.disableEdgeWrap,
      isIntrinsicHeight: C,
      dragEnabled: !1,
      touchEnabled: !1,
      lockOnWindowScroll: !0,
      orientation: `horizontal`,
      disableKeyboard: !0,
      currentSlide: e.startingSlide,
      children: [
        (0, T.jsx)(nr, {
          bHideArrows: v,
          onSlide: e.onSlide,
          onNavIntent: e.onNavIntent,
          arrowFill: e.arrowFill,
          arrowStyle: e.arrowStyle,
          children: m(),
        }),
        !y &&
          (e.useTestScrollbar && !i
            ? (0, T.jsx)(Xn, {
                showArrows: v,
                onNavIntent: e.onNavIntent,
                carouselStore: null,
              })
            : (0, T.jsx)(`div`, {
                className: (0, Jn.default)({
                  "I8j65FBXdOY-": !0,
                  "_8kxQAkw3gko-": i,
                  "uhUggqIYXBc-": e.className?.includes(`template-carousel`),
                }),
                children: (0, T.jsx)($n, {
                  ...e,
                  nPageSize: g,
                  children: e.children,
                }),
              })),
        b && (0, T.jsx)(tr, { pauseReason: x }),
      ],
    }),
  });
}
function $n(e) {
  let { nPageSize: t } = e,
    n = E.useContext(W),
    r = E.useContext(jn),
    [i, a] = E.useState(n.state.currentSlide);
  E.useEffect(
    () =>
      n.subscribe(() => {
        a(n.state.currentSlide);
      }),
    [n],
  );
  let o = Math.ceil(i / t),
    s = Mn(Math.ceil(E.Children.count(e.children) / t), o);
  return r
    ? (0, T.jsx)(Nn, {
        pillWindow: s,
        children: s.rgPills.map((e) =>
          e.bHidden
            ? (0, T.jsx)(
                `span`,
                { className: Pn(e), "aria-hidden": !0 },
                e.nPage,
              )
            : (0, T.jsx)(
                St,
                {
                  slide: e.nPage * t,
                  className: Pn(e),
                  children: (0, T.jsx)(Fn, { bSelected: e.nPage === o }),
                },
                e.nPage,
              ),
        ),
      })
    : (0, T.jsx)(T.Fragment, {
        children: E.Children.map(e.children, (n, r) => {
          if (r % t !== 0) return null;
          let i = o * t === r;
          return (0, T.jsx)(
            St,
            {
              slide: r,
              className: gn,
              children: (0, T.jsx)(qn, { ...e, bIsActive: i }),
            },
            r,
          );
        }),
      });
}
function er(e) {
  e.current &&= (window.clearTimeout(e.current), null);
}
function tr(e) {
  let { pauseReason: t } = e,
    n = E.useContext(W),
    [r, i] = E.useState(n.state.currentSlide),
    [a, o] = E.useState(!0),
    s = E.useRef(null),
    c = E.useRef(n.state.currentSlide);
  E.useEffect(() => {
    let e = () => {
      let e = n.state.currentSlide;
      e !== c.current &&
        ((c.current = e),
        i(e),
        s.current === e ? (s.current = null) : s.current === null && o(!1));
    };
    return (n.subscribe(e), () => n.unsubscribe(e));
  }, [n]);
  let l = E.useCallback(() => {
    let { currentSlide: e, visibleSlides: t, totalSlides: r } = n.state,
      i = 0;
    (e + t < r && (i = Math.min(e + t, r - t)),
      i !== e && ((s.current = i), n.setStoreState({ currentSlide: i })));
  }, [n]);
  return (0, T.jsx)(cn, {
    className: hn,
    enabled: a,
    currentItemKey: r,
    autoAdvanceMsec: sn,
    fnAdvance: l,
    pauseReason: t,
    countdownToken: `#Carousel_AutoAdvanceNextInSeconds`,
  });
}
function nr(e) {
  let {
      bHideArrows: t,
      children: n,
      onSlide: i,
      onNavIntent: a,
      arrowFill: o,
      arrowStyle: s,
    } = e,
    c = E.useContext(W),
    l = E.useRef(c.state.currentSlide),
    [u, d] = E.useState(null),
    f = E.useRef(null);
  E.useEffect(() => {
    let e = () => {
      let e = l.current,
        t = c.state.currentSlide;
      (i && i(t),
        d(t > e ? `Right` : t < e ? `Left` : null),
        er(f),
        (f.current = window.setTimeout(() => {
          f.current && (d(null), er(f));
        }, 1e3)),
        (l.current = t));
    };
    return (
      c.subscribe(e),
      () => {
        (c.unsubscribe(e), er(f));
      }
    );
  }, [c]);
  let p = !!u && `CarouselSliding` + u;
  return (0, T.jsxs)(`div`, {
    className: r(pn, `SliderBody`, p),
    children: [
      !t &&
        (0, T.jsx)($, {
          eDirection: `previous`,
          onNavIntent: a,
          className: r(
            `_6KbJ1ZwTIeY-`,
            `oKffwUnx6co-`,
            `_--jO3lLROzo-`,
            `CarouselBtnLeft`,
          ),
          "aria-label": S(`#Carousel_Prev`),
          children: (0, T.jsx)(Q, {
            arrowFill: o,
            arrowStyle: s,
            direction: `left`,
          }),
        }),
      (0, T.jsx)(qt, {
        className: ee.GetScrollableClassname(),
        classNameTray: mn,
        classNameAnimation: wn,
        role: `list`,
        children: (0, T.jsx)(g, { children: n }),
      }),
      !t &&
        (0, T.jsx)($, {
          eDirection: `next`,
          onNavIntent: a,
          className: r(
            `_6KbJ1ZwTIeY-`,
            `O2Vg9rmPwSE-`,
            `_--jO3lLROzo-`,
            `CarouselBtnRight`,
          ),
          "aria-label": S(`#Carousel_Next`),
          children: (0, T.jsx)(Q, {
            arrowFill: o,
            arrowStyle: s,
            direction: `right`,
          }),
        }),
    ],
  });
}
var rr = E.createContext(null),
  ir = null;
function ar() {
  return (
    (ir ||=
      (console.warn(
        `Missing context, this is not ssr safe, using s_FallbackEmoticonStore`,
      ),
      new ne())),
    ir
  );
}
function or(e) {
  let [t] = E.useState(() => new ne()),
    n = e.store ?? t;
  return (0, T.jsx)(rr.Provider, { value: n, children: e.children });
}
function sr() {
  return E.useContext(rr) ?? ar();
}
function cr(e) {
  return (0, T.jsx)(T.Fragment, { children: e.children(sr()) });
}
export { Q as a, Kn as c, Zn as i, cr as n, qn as o, sr as r, Z as s, or as t };
