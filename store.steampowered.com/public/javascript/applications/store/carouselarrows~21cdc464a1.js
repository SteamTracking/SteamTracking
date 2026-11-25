/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import { It as t, M as n, dt as r } from "./chunk~01cfc309bf.js";
import { f as i } from "./chunk~4eed35ad1f.js";
import { n as a } from "./chunk~710e3cfd2f.js";
import {
  $a as o,
  Il as s,
  Pc as c,
  So as l,
  To as u,
  Va as d,
  Vc as f,
  cb as p,
  cc as m,
  dx as h,
  eo as g,
  ex as _,
  fx as v,
  hx as y,
  ib as b,
  pl as x,
  pr as S,
  qa as C,
  to as w,
  vt as T,
  xt as E,
  zo as ee,
} from "./main.js";
var D = e(t());
function te(e, t) {
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
function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? te(Object(n), !0).forEach(function (t) {
          j(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : te(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function k(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function ne(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function A(e, t, n) {
  return (
    t && ne(e.prototype, t),
    n && ne(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function j(e, t, n) {
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
function M() {
  return (M = Object.assign
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
function N(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ie(e, t));
}
function re(e) {
  return (re = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function ie(e, t) {
  return (ie = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
}
function ae() {
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
function oe(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
  return i;
}
function P(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = oe(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])));
  }
  return i;
}
function F(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function se(e, t) {
  if (t && (typeof t == `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return F(e);
}
function I(e) {
  var t = ae();
  return function () {
    var n,
      r = re(e);
    if (t) {
      var i = re(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return se(this, n);
  };
}
function ce(e) {
  return le(e) || ue(e) || de(e) || pe();
}
function le(e) {
  if (Array.isArray(e)) return fe(e);
}
function ue(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function de(e, t) {
  if (e) {
    if (typeof e == `string`) return fe(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? fe(e, t)
          : void 0
    );
  }
}
function fe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function pe() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function me(e, t) {
  return ((t = { exports: {} }), e(t, t.exports), t.exports);
}
function he() {}
function ge() {}
function L(e) {
  return e
    .map(function (e) {
      return !1 === e ? null : e;
    })
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
}
function _e(e, t) {
  return ((100 / e) * t) / t;
}
function ve(e, t) {
  return (100 * e) / t;
}
function R(e) {
  return `${e}%`;
}
function ye(e, t, n) {
  if (e === t) return !0;
  var r = W[Ge(e)],
    i = W[Ge(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function be(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, a = r.length; (i = r[--a]);)
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function xe(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--;) if (!ye(e[r], t[r], n)) return !1;
  return !0;
}
function Se(e, t, n) {
  if (typeof e.equal == `function`) return (n.push([e, t]), e.equal(t, n));
  var r = Ce(e),
    i = Ce(t),
    a = r.length;
  if (a !== i.length) return !1;
  for (r.sort(), i.sort(); a--;) if (r[a] !== i[a]) return !1;
  for (n.push([e, t]), a = r.length; a--;) {
    var o = r[a];
    if (!ye(e[o], t[o], n)) return !1;
  }
  return !0;
}
function Ce(e) {
  var t = [];
  for (var n in e) n !== `constructor` && t.push(n);
  return t;
}
function we(e) {
  return !!e && typeof e == `object`;
}
function Te(e) {
  var t = Object.prototype.toString.call(e);
  return t === `[object RegExp]` || t === `[object Date]` || Ee(e);
}
function Ee(e) {
  return e.$$typeof === Je;
}
function De(e) {
  return Array.isArray(e) ? [] : {};
}
function z(e, t) {
  return !1 !== t.clone && t.isMergeableObject(e) ? B(De(e), e, t) : e;
}
function Oe(e, t, n) {
  return e.concat(t).map(function (e) {
    return z(e, n);
  });
}
function ke(e, t) {
  if (!t.customMerge) return B;
  var n = t.customMerge(e);
  return typeof n == `function` ? n : B;
}
function Ae(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function je(e) {
  return Object.keys(e).concat(Ae(e));
}
function Me(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Ne(e, t) {
  return (
    Me(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function Pe(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      je(e).forEach(function (t) {
        r[t] = z(e[t], n);
      }),
    je(t).forEach(function (i) {
      Ne(e, i) ||
        (r[i] =
          Me(e, i) && n.isMergeableObject(t[i])
            ? ke(i, n)(e[i], t[i], n)
            : z(t[i], n));
    }),
    r
  );
}
function B(e, t, n) {
  (((n ||= {}).arrayMerge = n.arrayMerge || Oe),
    (n.isMergeableObject = n.isMergeableObject || qe),
    (n.cloneUnlessOtherwiseSpecified = z));
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : Pe(e, t, n)
    : z(t, n);
}
function V(e) {
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
          k(this, r),
          (a = i.call(this, e, n)),
          (a.state = t(O({}, n.state))),
          (a.updateStateProps = a.updateStateProps.bind(F(a))),
          a
        );
      }
      N(r, n);
      var i = I(r);
      return (
        A(r, [
          {
            key: `componentDidMount`,
            value: function () {
              this.context.subscribe(this.updateStateProps);
            },
          },
          {
            key: `shouldComponentUpdate`,
            value: function (e, t) {
              return !Ke(t, this.state) || !Ke(e, this.props);
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
              this.setState(t(O({}, this.context.state)));
            },
          },
          {
            key: `render`,
            value: function () {
              var t = this,
                n = this.props,
                r = n.children,
                i = P(n, nt),
                a = Ye(this.state, i, Ve);
              return D.createElement(
                e,
                M(
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
    })(D.Component);
  return (
    j(n, `contextType`, G),
    j(n, `propTypes`, { children: U.children }),
    j(n, `defaultProps`, { children: null }),
    n
  );
}
var Fe = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
ge.resetWarningCache = he;
var Ie = function () {
    function e(e, t, n, r, i, a) {
      if (a !== Fe) {
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
      checkPropTypes: ge,
      resetWarningCache: he,
    };
    return ((n.PropTypes = n), n);
  },
  H = me(function (e) {
    e.exports = Ie();
  }),
  Le = `loading`,
  Re = `success`,
  ze = `error`,
  U = {
    children: H.oneOfType([H.arrayOf(H.node), H.node]),
    direction: H.oneOf([`forward`, `backward`]),
    height: function (e, t) {
      var n = e[t];
      return e.orientation !== `vertical` ||
        (n !== null && typeof n == `number`)
        ? null
        : Error(
            `Missing required property '${t}' when orientation is vertical.  You must supply a number representing the height in pixels`,
          );
    },
    orientation: H.oneOf([`horizontal`, `vertical`]),
    isBgImage: function (e, t) {
      return !0 === e[t] && e.tag === `img`
        ? Error(
            `HTML img elements should not have a backgroundImage.  Please use ${t} for other block-level HTML tags, like div, a, section, etc...`,
          )
        : null;
    },
  },
  Be = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  Ve = {
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
  He = { buttonBack: `buttonBack___1mlaL` },
  Ue = [
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
  We = (function (e) {
    function t(e) {
      var r;
      return (
        k(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(F(r))),
        r
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(
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
                i = P(e, Ue),
                a = L([He.buttonBack, `carousel__back-button`, n]),
                o = t.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  r,
                );
              return D.createElement(
                `button`,
                M(
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
  })(D.Component);
(j(We, `propTypes`, {
  carouselStore: H.object.isRequired,
  children: U.children.isRequired,
  className: H.string,
  currentSlide: H.number.isRequired,
  disabled: H.bool,
  onClick: H.func,
  step: H.number.isRequired,
  totalSlides: H.number.isRequired,
  visibleSlides: H.number.isRequired,
  infinite: H.bool,
}),
  j(We, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  }));
var Ge = me(function (e, t) {
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
Ge.types;
var W = {};
((W.number = function (e, t) {
  return e !== e && t !== t;
}),
  (W.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      W.object(e, t, n) &&
      ye(e.prototype, t.prototype)
    );
  }),
  (W.date = function (e, t) {
    return +e == +t;
  }),
  (W.regexp = function (e, t) {
    return e.toString() === t.toString();
  }),
  (W.element = function (e, t) {
    return e.outerHTML === t.outerHTML;
  }),
  (W.textnode = function (e, t) {
    return e.textContent === t.textContent;
  }),
  (W.arguments = W[`bit-array`] = W.array = be(xe)),
  (W.object = be(Se)));
var Ke = ye,
  qe = function (e) {
    return we(e) && !Te(e);
  },
  Je =
    typeof Symbol == `function` && Symbol.for
      ? Symbol.for(`react.element`)
      : 60103;
B.all = function (e, t) {
  if (!Array.isArray(e)) throw Error(`first argument should be an array`);
  return e.reduce(function (e, n) {
    return B(e, n, t);
  }, {});
};
var Ye = B,
  G = D.createContext(),
  Xe = function e(t) {
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
  Ze = { masterSpinnerFinished: !1 },
  Qe = (function () {
    function e(t) {
      (k(this, e),
        (this.state = Xe(Ye(Ze, t, Ve))),
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
      A(e, [
        {
          key: `setStoreState`,
          value: function (e, t) {
            ((this.state = Xe(Ye(this.state, e, Ve))),
              this.updateSubscribers(t));
          },
        },
        {
          key: `getStoreState`,
          value: function () {
            return Ye({}, this.state, Ve);
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
  $e = [
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
  et = (function (e) {
    function t(e) {
      var r;
      if (
        (k(this, t),
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
        slideSize: _e(e.totalSlides, e.visibleSlides),
        slideTraySize: ve(e.totalSlides, e.visibleSlides),
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        dragEnabled: e.dragEnabled,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
      return ((r.carouselStore = new Qe(i)), r);
    }
    N(t, e);
    var n = I(t);
    return (
      A(t, [
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
                ((n.slideSize = _e(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                )),
                (n.slideTraySize = ve(
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
                P(e, $e)),
              r = L([`carousel`, this.props.className]);
            return D.createElement(
              t,
              M({ className: r }, n),
              D.createElement(
                G.Provider,
                { value: this.carouselStore },
                this.props.children,
              ),
            );
          },
        },
      ]),
      t
    );
  })(D.Component),
  tt =
    (j(et, `propTypes`, {
      children: U.children.isRequired,
      className: H.string,
      currentSlide: H.number,
      disableAnimation: H.bool,
      disableKeyboard: H.bool,
      hasMasterSpinner: H.bool,
      interval: H.number,
      isPageScrollLocked: H.bool,
      isPlaying: H.bool,
      lockOnWindowScroll: H.bool,
      naturalSlideHeight: H.number.isRequired,
      naturalSlideWidth: H.number.isRequired,
      orientation: U.orientation,
      playDirection: U.direction,
      step: H.number,
      dragStep: H.number,
      tag: H.string,
      totalSlides: H.number.isRequired,
      touchEnabled: H.bool,
      dragEnabled: H.bool,
      visibleSlides: H.number,
      infinite: H.bool,
      isIntrinsicHeight: H.bool,
    }),
    j(et, `defaultProps`, {
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
    et);
G.Consumer;
var nt = [`children`],
  rt = V(We, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  it = { buttonFirst: `buttonFirst___2rhFr` },
  at = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
  ],
  ot = (function (e) {
    function t() {
      var e;
      return (
        k(this, t),
        (e = n.call(this)),
        (e.handleOnClick = e.handleOnClick.bind(F(e))),
        e
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(t, [
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
              i = (e.onClick, e.totalSlides, P(e, at)),
              a = L([it.buttonFirst, `carousel__first-button`, t]),
              o = r === null ? n === 0 : r;
            return D.createElement(
              `button`,
              M(
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
  })(D.Component);
V(
  (j(ot, `propTypes`, {
    carouselStore: H.object.isRequired,
    children: U.children.isRequired,
    className: H.string,
    currentSlide: H.number.isRequired,
    disabled: H.bool,
    onClick: H.func,
    totalSlides: H.number.isRequired,
  }),
  j(ot, `defaultProps`, { className: null, disabled: null, onClick: null }),
  ot),
  function (e) {
    return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
  },
);
var st = { buttonLast: `buttonLast___2yuh0` },
  ct = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
    `visibleSlides`,
  ],
  lt = (function (e) {
    function t() {
      var e;
      return (
        k(this, t),
        (e = n.call(this)),
        (e.handleOnClick = e.handleOnClick.bind(F(e))),
        e
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(t, [
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
              o = P(e, ct),
              s = L([st.buttonLast, `carousel__last-button`, t]),
              c = r === null ? n >= i - a : r;
            return D.createElement(
              `button`,
              M(
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
  })(D.Component);
V(
  (j(lt, `propTypes`, {
    carouselStore: H.object.isRequired,
    children: U.children.isRequired,
    className: H.string,
    currentSlide: H.number.isRequired,
    disabled: H.bool,
    onClick: H.func,
    totalSlides: H.number.isRequired,
    visibleSlides: H.number.isRequired,
  }),
  j(lt, `defaultProps`, { className: null, disabled: null, onClick: null }),
  lt),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var ut = { buttonNext: `buttonNext___2mOCa` },
  dt = [
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
  ft = (function (e) {
    function t(e) {
      var r;
      return (
        k(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(F(r))),
        r
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(
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
                c = P(e, dt),
                l = L([ut.buttonNext, `carousel__next-button`, n]),
                u = t.setDisabled(i, r, o, a, s);
              return D.createElement(
                `button`,
                M(
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
  })(D.PureComponent),
  pt = V(
    (j(ft, `propTypes`, {
      carouselStore: H.object.isRequired,
      children: U.children.isRequired,
      className: H.string,
      currentSlide: H.number.isRequired,
      disabled: H.bool,
      onClick: H.func,
      step: H.number.isRequired,
      totalSlides: H.number.isRequired,
      visibleSlides: H.number.isRequired,
      infinite: H.bool,
    }),
    j(ft, `defaultProps`, {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    ft),
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
  mt = { buttonNext: `buttonNext___3Lm3s` },
  ht = [
    `carouselStore`,
    `children`,
    `childrenPaused`,
    `childrenPlaying`,
    `className`,
    `isPlaying`,
    `onClick`,
  ],
  gt = (function (e) {
    function t(e) {
      var r;
      return (
        k(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(F(r))),
        r
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(t, [
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
              a = (e.onClick, P(e, ht)),
              o = L([mt.buttonNext, `carousel__play-button`, r]);
            return D.createElement(
              `button`,
              M(
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
  })(D.PureComponent);
V(
  (j(gt, `propTypes`, {
    carouselStore: H.object.isRequired,
    children: H.node,
    childrenPaused: H.node,
    childrenPlaying: H.node,
    className: H.string,
    isPlaying: H.bool.isRequired,
    onClick: H.func,
  }),
  j(gt, `defaultProps`, {
    children: null,
    childrenPaused: null,
    childrenPlaying: null,
    className: null,
    onClick: null,
  }),
  gt),
  function (e) {
    return { isPlaying: e.isPlaying };
  },
);
var _t = { dot: `dot___3c3SI` },
  vt = [
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
  yt = (function (e) {
    function t(e) {
      var r;
      return (
        k(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(F(r))),
        r
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(t, [
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
              s = P(e, vt),
              c = a >= n && a < n + o,
              l = typeof i == `boolean` ? i : c,
              u = typeof r == `boolean` ? r : !0 === c,
              d = L([
                _t.dot,
                l && _t.dotSelected,
                `carousel__dot`,
                `carousel__dot--${a}`,
                l && `carousel__dot--selected`,
                t,
              ]);
            return D.createElement(
              `button`,
              M(
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
  })(D.Component),
  bt = V(
    (j(yt, `propTypes`, {
      carouselStore: H.object.isRequired,
      children: U.children,
      className: H.string,
      currentSlide: H.number.isRequired,
      disabled: H.bool,
      onClick: H.func,
      selected: H.bool,
      slide: H.number.isRequired,
      totalSlides: H.number.isRequired,
      visibleSlides: H.number.isRequired,
    }),
    j(yt, `defaultProps`, {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    yt),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      };
    },
  ),
  xt = {},
  St = [`renderDots`],
  Ct = [
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
  wt = (function (e) {
    function t() {
      return (k(this, t), n.apply(this, arguments));
    }
    N(t, e);
    var n = I(t);
    return (
      A(t, [
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
              return (s.renderDots, o(P(s, St)));
            }
            for (var c = [], l = 0; l < n; l += 1) {
              var u = l >= t && l < t + r,
                d = a ? l === t : u,
                f = l >= n - r ? n - r : l;
              c.push(
                D.createElement(
                  bt,
                  { key: l, slide: f, selected: d, disabled: !!i && d },
                  D.createElement(
                    `span`,
                    { className: L[`carousel__dot-group-dot`] },
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
                P(e, Ct)),
              i = L([xt.DotGroup, `carousel__dot-group`, n]);
            return D.createElement(
              `div`,
              M({ className: i }, r),
              this.renderDots(),
              t,
            );
          },
        },
      ]),
      t
    );
  })(D.Component);
V(
  (j(wt, `propTypes`, {
    children: U.children,
    className: H.string,
    currentSlide: H.number.isRequired,
    carouselStore: H.object.isRequired,
    totalSlides: H.number.isRequired,
    visibleSlides: H.number.isRequired,
    dotNumbers: H.bool,
    disableActiveDots: H.bool,
    showAsSelectedForCurrentSlideOnly: H.bool,
    renderDots: H.func,
  }),
  j(wt, `defaultProps`, {
    children: null,
    className: null,
    dotNumbers: !1,
    disableActiveDots: !0,
    showAsSelectedForCurrentSlideOnly: !1,
    renderDots: null,
  }),
  wt),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var K = { image: `image___xtQGH` },
  Tt = [`src`, `alt`],
  Et = [
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
  Dt = (function (e) {
    function t(e) {
      var r;
      return (
        k(this, t),
        (r = n.call(this, e)),
        (r.state = { imageStatus: Le }),
        (r.handleImageLoad = r.handleImageLoad.bind(F(r))),
        (r.handleImageError = r.handleImageError.bind(F(r))),
        (r.image = null),
        r
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(
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
                (this.setState({ imageStatus: Le }),
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
              (this.setState({ imageStatus: Re }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(e));
            },
          },
          {
            key: `handleImageError`,
            value: function (e) {
              (this.setState({ imageStatus: ze }),
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
                n = L([
                  K.image,
                  K.imageLoading,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--loading`,
                  this.props.className,
                ]);
              return D.createElement(
                t,
                M({ className: n }, e),
                this.customRender(`renderLoading`),
              );
            },
          },
          {
            key: `renderError`,
            value: function (e) {
              var t = this.tempTag(),
                n = L([
                  K.image,
                  K.imageError,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--error`,
                  this.props.className,
                ]);
              return D.createElement(
                t,
                M({ className: n }, e),
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
                i = L([
                  K.image,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--success`,
                  this.props.className,
                ]),
                a = M({}, n),
                o = e;
              if (r !== `img`) {
                var s = e.src;
                (e.alt,
                  (o = P(e, Tt)),
                  (a = M({}, n, {
                    backgroundImage: `url("${s}")`,
                    backgroundSize: `cover`,
                  })));
              }
              return D.createElement(
                r,
                M({ className: i, style: a }, o),
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
                  P(e, Et));
              switch (this.state.imageStatus) {
                case Le:
                  return this.renderLoading(t);
                case Re:
                  return this.renderSuccess(t);
                case ze:
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
  })(D.Component);
(j(Dt, `propTypes`, {
  alt: H.string,
  carouselStore: H.object.isRequired,
  children: U.children,
  className: H.string,
  hasMasterSpinner: H.bool.isRequired,
  isBgImage: U.isBgImage,
  onError: H.func,
  onLoad: H.func,
  renderError: H.func,
  renderLoading: H.func,
  src: H.string.isRequired,
  style: H.object,
  tag: H.string,
}),
  j(Dt, `defaultProps`, {
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
var Ot = V(Dt, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  kt = { spinner: `spinner___27VUp`, spin: `spin___S3UuE` },
  At = [`className`],
  jt = (function (e) {
    function t() {
      return (k(this, t), n.apply(this, arguments));
    }
    N(t, e);
    var n = I(t);
    return (
      A(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.className,
              n = P(e, At),
              r = L([kt.spinner, `carousel__spinner`, t]);
            return D.createElement(`div`, M({ className: r }, n));
          },
        },
      ]),
      t
    );
  })(D.PureComponent),
  Mt =
    (j(jt, `propTypes`, { className: H.string }),
    j(jt, `defaultProps`, { className: null }),
    jt),
  q = {
    container: `container___2O72F`,
    overlay: `overlay___IV4qY`,
    hover: `hover___MYy31`,
    zoom: `zoom___3kqYk`,
    loading: `loading___1pvNI`,
    imageLoadingSpinnerContainer: `imageLoadingSpinnerContainer___3UIPD`,
  },
  Nt = [
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
  Pt,
  Ft = 2,
  It = 3;
V(
  ((Pt = (function (e) {
    function t(e) {
      var r;
      return (
        k(this, t),
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
        (r.handleImageComplete = r.handleImageComplete.bind(F(r))),
        (r.handleImageLoadError = r.handleImageLoadError.bind(F(r))),
        (r.handleOnMouseMove = r.handleOnMouseMove.bind(F(r))),
        (r.handleOnMouseOut = r.handleOnMouseOut.bind(F(r))),
        (r.handleOnMouseOver = r.handleOnMouseOver.bind(F(r))),
        (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(F(r))),
        (r.handleOnTouchMove = r.handleOnTouchMove.bind(F(r))),
        (r.handleOnTouchStart = r.handleOnTouchStart.bind(F(r))),
        r
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(
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
                this.setState({ isHovering: !0, scale: Ft });
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
                var t = R((e.nativeEvent.offsetX / e.target.offsetWidth) * 100),
                  n = R((e.nativeEvent.offsetY / e.target.offsetHeight) * 100);
                this.setState({ x: t, y: n });
              }
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (e) {
              var t = this;
              this.props.isPinchZoomEnabled &&
                (ce(e.targetTouches).forEach(function (e) {
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
                var r = ce(e.targetTouches)
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
                  s.distance = t.distanceBetweenTwoTouches(O({}, s));
                  var c = t.midpointBetweenTwoTouches(O({}, s));
                  ((s.cx = c.x), (s.cy = c.y));
                  var l = {
                    x1: r[0].clientX,
                    y1: r[0].clientY,
                    x2: r[1].clientX,
                    y2: r[1].clientY,
                  };
                  l.distance = t.distanceBetweenTwoTouches(O({}, l));
                  var u = t.midpointBetweenTwoTouches(O({}, l));
                  ((l.cx = u.x), (l.cy = u.y));
                  var d = R(
                      Be({
                        min: 0,
                        max: 100,
                        x: ((l.cx - i.left) / i.width) * 100,
                      }),
                    ),
                    f = R(
                      Be({
                        min: 0,
                        max: 100,
                        x: ((l.cy - i.top) / i.height) * 100,
                      }),
                    ),
                    p = function (e) {
                      return Be({
                        min: 1,
                        max: It,
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
                (ce(e.changedTouches).forEach(function (e) {
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
                return D.createElement(
                  `div`,
                  {
                    className: L([
                      q.imageLoadingSpinnerContainer,
                      `carousel__image-loading-spinner-container`,
                    ]),
                  },
                  e && e(),
                  !e && D.createElement(Mt, null),
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
                u = P(e, Nt),
                d = L([q.container, i]),
                f = L([q.image, `carousel__zoom-image`, a]),
                p = L([
                  q.overlay,
                  `carousel__zoom-image-overlay`,
                  this.state.isHovering && q.hover,
                  this.state.isZooming && q.zoom,
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
                D.createElement(
                  l,
                  M({ className: d }, u),
                  D.createElement(
                    Ot,
                    M(
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
                  D.createElement(Ot, {
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
  })(D.Component)),
  j(Pt, `propTypes`, {
    alt: H.string,
    bgImageProps: H.object,
    bgImageTag: H.string,
    carouselStore: H.object.isRequired,
    className: H.string,
    imageClassName: H.string,
    overlayClassName: H.string,
    spinner: H.func,
    onLoad: H.func,
    onError: H.func,
    src: H.string.isRequired,
    srcZoomed: H.string,
    tag: H.string,
    isPinchZoomEnabled: H.bool,
  }),
  j(Pt, `defaultProps`, {
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
  Pt),
  function () {
    return {};
  },
);
var Lt = {
    slide: `slide___3-Nqo`,
    slideHorizontal: `slideHorizontal___1NzNV`,
    slideInner: `slideInner___2mfX9`,
    focusRing: `focusRing___1airF`,
  },
  Rt = [
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
  zt = (function (e) {
    function t(e) {
      var r;
      return (
        k(this, t),
        (r = n.call(this, e)),
        (r.handleOnFocus = r.handleOnFocus.bind(F(r))),
        (r.handleOnBlur = r.handleOnBlur.bind(F(r))),
        (r.state = { focused: !1 }),
        r
      );
    }
    N(t, e);
    var n = I(t);
    return (
      A(t, [
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
              ? D.createElement(`div`, {
                  className: [Lt.focusRing, `carousel__slide-focus-ring`].join(
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
              g = P(t, Rt),
              _ = {};
            u === `horizontal`
              ? ((_.width = R(d)), (_.paddingBottom = R((100 * c) / (l * m))))
              : ((_.width = R(100)), (_.paddingBottom = R((100 * c) / l)));
            var v = {};
            h &&
              (u === `horizontal` ? (_.height = `unset`) : (_.width = `unset`),
              (_.paddingBottom = `unset`),
              (v.position = `unset`));
            var y = M({}, _, f),
              b = this.isVisible(),
              x = L([
                Lt.slide,
                u === `horizontal` && Lt.slideHorizontal,
                `carousel__slide`,
                this.state.focused && `carousel__slide--focused`,
                b && a,
                b && `carousel__slide--visible`,
                !b && i,
                !b && `carousel__slide--hidden`,
                r,
              ]),
              S = L([Lt.slideInner, `carousel__inner-slide`, o]);
            return D.createElement(
              p,
              M(
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
              D.createElement(
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
  })(D.PureComponent),
  Bt = V(
    (j(zt, `propTypes`, {
      ariaLabel: H.string,
      carouselStore: H.object,
      children: U.children,
      className: H.string,
      classNameHidden: H.string,
      classNameVisible: H.string,
      currentSlide: H.number.isRequired,
      index: H.number.isRequired,
      innerClassName: H.string,
      innerTag: H.string,
      naturalSlideHeight: H.number.isRequired,
      naturalSlideWidth: H.number.isRequired,
      onBlur: H.func,
      onFocus: H.func,
      orientation: U.orientation.isRequired,
      slideSize: H.number.isRequired,
      role: H.string,
      style: H.object,
      tag: H.string,
      totalSlides: H.number.isRequired,
      visibleSlides: H.number.isRequired,
      isIntrinsicHeight: H.bool,
    }),
    j(zt, `defaultProps`, {
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
    zt),
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
  Vt = (function () {
    function e() {
      k(this, e);
    }
    return (
      A(
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
  Ht =
    `ariaLabel.carouselStore.children.className.classNameAnimation.classNameTray.classNameTrayWrap.currentSlide.disableAnimation.disableKeyboard.dragEnabled.hasMasterSpinner.interval.isPageScrollLocked.isPlaying.lockOnWindowScroll.masterSpinnerFinished.moveThreshold.naturalSlideHeight.naturalSlideWidth.onMasterSpinner.orientation.playDirection.privateUnDisableAnimation.slideSize.slideTraySize.spinner.style.totalSlides.touchEnabled.trayProps.trayTag.visibleSlides.isIntrinsicHeight`.split(
      `.`,
    ),
  Ut = [
    `dragStep`,
    `step`,
    `infinite`,
    `preventVerticalScrollOnTouch`,
    `preventingVerticalScroll`,
    `horizontalPixelThreshold`,
    `verticalPixelThreshold`,
  ],
  Wt = [
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
  Gt = (function (e) {
    function t(e) {
      var r;
      return (
        k(this, t),
        (r = n.call(this, e)),
        (r.getSliderRef = r.getSliderRef.bind(F(r))),
        (r.handleDocumentScroll = r.handleDocumentScroll.bind(F(r))),
        (r.handleOnClickCapture = r.handleOnClickCapture.bind(F(r))),
        (r.handleOnKeyDown = r.handleOnKeyDown.bind(F(r))),
        (r.handleOnMouseDown = r.handleOnMouseDown.bind(F(r))),
        (r.handleOnMouseMove = r.handleOnMouseMove.bind(F(r))),
        (r.handleOnMouseUp = r.handleOnMouseUp.bind(F(r))),
        (r.handleOnTouchCancel = r.handleOnTouchCancel.bind(F(r))),
        (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(F(r))),
        (r.handleOnTouchMove = r.handleOnTouchMove.bind(F(r))),
        (r.handleOnTouchStart = r.handleOnTouchStart.bind(F(r))),
        (r.playBackward = r.playBackward.bind(F(r))),
        (r.playForward = r.playForward.bind(F(r))),
        (r.callCallback = r.callCallback.bind(F(r))),
        (r.blockWindowScroll = r.blockWindowScroll.bind(F(r))),
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
    N(t, e);
    var n = I(t);
    return (
      A(
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
              var e = new Vt();
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
                i = Be({ min: 0, max: r, x: this.props.currentSlide + n });
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
                  D.createElement(
                    `div`,
                    {
                      className: L([
                        J.masterSpinnerContainer,
                        `carousel__master-spinner-container`,
                      ]),
                    },
                    r && r(),
                    !r && D.createElement(Mt, null),
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
                x = P(t, Ht),
                S = M({}, h),
                C = {};
              f === `vertical` &&
                ((C.height = 0),
                (C.paddingBottom = R((100 * u * y) / d)),
                (C.width = R(100)));
              var w = {},
                T = R(p * c * -1);
              ((this.state.isBeingTouchDragged ||
                this.state.isBeingMouseDragged ||
                l) &&
                (w.transition = `none`),
                b && ((w.display = `flex`), (w.alignItems = `stretch`)),
                f === `vertical`
                  ? ((w.transform = `translateY(${T}) translateY(${this.state.deltaY}px)`),
                    (w.width = R(100)),
                    (w.flexDirection = `column`))
                  : ((w.width = R(m)),
                    (w.transform = `translateX(${T}) translateX(${this.state.deltaX}px)`),
                    (w.flexDirection = `row`)));
              var E = L([
                  f === `vertical` ? J.verticalSlider : J.horizontalSlider,
                  !g && J.touchDisabled,
                  `carousel__slider`,
                  f === `vertical`
                    ? `carousel__slider--vertical`
                    : `carousel__slider--horizontal`,
                  i,
                ]),
                ee = L([
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
                te = L([
                  J.sliderTray,
                  a || J.sliderAnimation,
                  `carousel__slider-tray`,
                  f === `vertical` ? J.verticalTray : J.horizontalTray,
                  f === `vertical`
                    ? `carousel__slider-tray--vertical`
                    : `carousel__slider-tray--horizontal`,
                  o,
                ]),
                O =
                  (x.dragStep,
                  x.step,
                  x.infinite,
                  x.preventVerticalScrollOnTouch,
                  x.preventingVerticalScroll,
                  x.horizontalPixelThreshold,
                  x.verticalPixelThreshold,
                  P(x, Ut)),
                k =
                  (_.className,
                  _.onClickCapture,
                  _.onMouseDown,
                  _.onTouchCancel,
                  _.onTouchEnd,
                  _.onTouchMove,
                  _.onTouchStart,
                  _.ref,
                  _.style,
                  P(_, Wt));
              return D.createElement(
                `div`,
                M(
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
                  O,
                ),
                D.createElement(
                  `div`,
                  { className: ee, style: C },
                  D.createElement(
                    v,
                    M(
                      {
                        ref: this.getSliderRef,
                        className: te,
                        style: w,
                        onTouchStart: this.handleOnTouchStart,
                        onTouchMove: this.handleOnTouchMove,
                        onTouchEnd: this.handleOnTouchEnd,
                        onTouchCancel: this.handleOnTouchCancel,
                        onMouseDown: this.handleOnMouseDown,
                        onClickCapture: this.handleOnClickCapture,
                      },
                      k,
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
  })(D.Component),
  Kt = V(
    (j(Gt, `propTypes`, {
      ariaLabel: H.string,
      carouselStore: H.object.isRequired,
      children: H.node.isRequired,
      className: H.string,
      classNameAnimation: H.string,
      classNameTray: H.string,
      classNameTrayWrap: H.string,
      currentSlide: H.number.isRequired,
      disableAnimation: H.bool,
      disableKeyboard: H.bool,
      dragEnabled: H.bool.isRequired,
      dragStep: H.number,
      hasMasterSpinner: H.bool.isRequired,
      infinite: H.bool,
      interval: H.number.isRequired,
      isPageScrollLocked: H.bool.isRequired,
      isPlaying: H.bool.isRequired,
      lockOnWindowScroll: H.bool.isRequired,
      preventVerticalScrollOnTouch: H.bool,
      horizontalPixelThreshold: H.number,
      verticalPixelThreshold: H.number,
      masterSpinnerFinished: H.bool.isRequired,
      moveThreshold: H.number,
      naturalSlideHeight: H.number.isRequired,
      naturalSlideWidth: H.number.isRequired,
      onMasterSpinner: H.func,
      orientation: U.orientation.isRequired,
      playDirection: U.direction.isRequired,
      privateUnDisableAnimation: H.bool,
      role: H.string,
      slideSize: H.number.isRequired,
      slideTraySize: H.number.isRequired,
      spinner: H.func,
      step: H.number.isRequired,
      style: H.object,
      totalSlides: H.number.isRequired,
      touchEnabled: H.bool.isRequired,
      trayProps: H.shape({
        className: H.string,
        onClickCapture: H.func,
        onMouseDown: H.func,
        onTouchCancel: H.func,
        onTouchEnd: H.func,
        onTouchMove: H.func,
        onTouchStart: H.func,
        ref: H.shape({}),
        style: H.string,
      }),
      trayTag: H.string,
      visibleSlides: H.number,
      isIntrinsicHeight: H.bool,
    }),
    j(Gt, `defaultProps`, {
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
    Gt),
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
  qt = `HRbFcf6y6hE-`,
  Jt = `-ZUk3xT7ZlY-`,
  Yt = `KLUTL0g4Wbo-`,
  Xt = `glnkf1Fqlvc-`,
  Zt = `loez15u80yI-`,
  Y = r(),
  Qt = `bTrailerCarouselAutoAdvance`,
  $t,
  en = new Set();
function tn() {
  if ($t === void 0) {
    let e = h(Qt);
    $t = !e || e.toLowerCase() === `true`;
  }
  return $t;
}
function nn(e) {
  (v(Qt, String(e), 3650), ($t = e), en.forEach((e) => e()));
}
function rn(e) {
  return (en.add(e), () => en.delete(e));
}
function an() {
  return [D.useSyncExternalStore(rn, tn, () => !0), nn];
}
function on(e) {
  let [t, n] = an();
  return (0, Y.jsx)(`div`, {
    className: c(Zt, e.bPhoneOnly && `fvIP8xIxKbo-`),
    children: (0, Y.jsx)(S, {
      className: Xt,
      controlled: !0,
      checked: t,
      label: b(`#SaleTrailerCarousel_AutoAdvanceEnabled`),
      onChange: n,
    }),
  });
}
var sn = 1e4;
function cn(e) {
  let {
      className: t,
      currentItemKey: n,
      autoAdvanceMsec: r,
      fnAdvance: i,
      enabled: a,
      pauseReason: o,
      countdownToken: l = `#SaleTrailerCarousel_NextGameInSeconds`,
      progressTarget: u,
    } = e,
    [d] = an(),
    f = r === void 0 ? sn : r,
    [m, h] = D.useState(f),
    g = o !== void 0,
    _ = ln(o);
  (s(
    () => {
      let e = m - 30;
      e <= 0 ? (i(), h(f)) : h(Math.max(e, 0));
    },
    30,
    [f],
    a && d && !g && f > 0 && m > 0,
  ),
    D.useEffect(() => {
      h(f);
    }, [n, f, d]));
  let v = `${100 - (m / f) * 100}%`,
    y = !a || !d ? `off` : g ? `paused` : `running`;
  return (
    D.useEffect(() => {
      let e = u?.current;
      e &&
        (e.style.setProperty(`--auto-advance-ratio`, v),
        (e.dataset.autoAdvance = y));
    }, [u, v, y]),
    (0, Y.jsxs)(`div`, {
      className: t,
      children: [
        (0, Y.jsxs)(`div`, {
          className: c(qt, (!a || !d) && `X8q-iPdWKKw-`, g && `_3E-10Et-w2o-`),
          children: [
            (0, Y.jsx)(`div`, {
              className: Jt,
              children: !g || !_ ? p(l, Math.ceil(m / 1e3)) : _,
            }),
            (0, Y.jsx)(`div`, {
              className: Yt,
              style: { "--auto-advance-ratio": v },
            }),
          ],
        }),
        (0, Y.jsx)(on, {}),
      ],
    })
  );
}
function ln(e) {
  switch (e) {
    case 4:
      return b(`#SaleTrailerCarousel_AutoAdvanceVideoPaused`);
    case 3:
    case 5:
      return b(`#SaleTrailerCarousel_AutoAdvanceHover`);
  }
}
function un() {
  let [e, t] = D.useState(!1),
    [n, r] = D.useState(!1);
  D.useEffect(() => {
    let e = () => t(document.hidden);
    return (
      document.addEventListener(`visibilitychange`, e),
      () => document.removeEventListener(`visibilitychange`, e)
    );
  }, []);
  let i = D.useCallback((e) => r(!e.isIntersecting), []);
  return {
    bTabHidden: e,
    bOffscreen: n,
    refIntersection: x(i, { threshold: 0.5 }),
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
  X = 9;
function jn(e, t) {
  let n = D.useRef(0);
  if (e <= X)
    return {
      rgPills: Array.from({ length: e }, (e, t) => ({ nPage: t })),
      strClassName: On,
      bWindowed: !1,
      nPages: e,
      nSelectedPage: t,
    };
  let r = n.current;
  return (
    t < r ? (r = t) : t >= r + X && (r = t - X + 1),
    (r = Math.min(Math.max(r, 0), e - X)),
    (n.current = r),
    {
      rgPills: Array.from({ length: X }, (e, t) => ({ nPage: r + t })),
      strClassName: On,
      bWindowed: !0,
      nPages: e,
      nSelectedPage: t,
    }
  );
}
function Mn(e) {
  let { pillWindow: t, children: n } = e;
  return (0, Y.jsxs)(`div`, {
    className: Dn,
    children: [
      (0, Y.jsx)(`div`, { className: t.strClassName, children: n }),
      t.bWindowed &&
        (0, Y.jsx)(`span`, {
          className: `xAhUZDLR-Fs-`,
          children: b(
            `#Sale_Carousel_PageOfPages`,
            E(t.nSelectedPage + 1),
            E(t.nPages),
          ),
        }),
    ],
  });
}
function Nn() {
  return kn;
}
function Pn(e) {
  let { bSelected: t, bCountdown: n } = e,
    r = t && n;
  return (0, Y.jsx)(`span`, {
    className: c(An, t && `bY2thn3lfUw-`, r && `D6a-33r-4xk-`),
    children: r && (0, Y.jsx)(`span`, { className: `NItUkZKCFW8-` }),
  });
}
function Fn(e) {
  let { count: t, selectedIndex: n, fnNavigate: r, bCountdown: i } = e,
    a = jn(t, n);
  return (0, Y.jsx)(f, {
    "flow-children": `row`,
    className: c(En, Tn),
    children: (0, Y.jsx)(Mn, {
      pillWindow: a,
      children: a.rgPills.map((e) =>
        (0, Y.jsx)(
          `div`,
          {
            className: Nn(),
            onClick: r ? () => r(e.nPage) : void 0,
            children: (0, Y.jsx)(Pn, {
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
var In = `_1MsO62M-piw-`,
  Ln = `QZKBcFqGSTo-`,
  Rn = 0.6;
function zn(e, t, n) {
  let r = D.useRef(t);
  r.current = t;
  let i = !!t;
  D.useEffect(() => {
    if (!i || !e || typeof IntersectionObserver > `u`) return;
    let t = Array.from(e.children);
    if (!t.length) return;
    let n = Math.round(e.scrollLeft / e.clientWidth),
      a = new IntersectionObserver(
        (e) => {
          for (let i of e) {
            if (!i.isIntersecting || i.intersectionRatio < Rn) continue;
            let e = t.indexOf(i.target);
            e < 0 || e === n || ((n = e), r.current?.(e));
          }
        },
        { root: e, threshold: Rn },
      );
    for (let e of t) a.observe(e);
    return () => a.disconnect();
  }, [e, i, n]);
}
function Bn(e, t, n, r) {
  let i = e.getBoundingClientRect(),
    a = t.getBoundingClientRect();
  return n ? i.right - r - a.right : a.left - (i.left + r);
}
function Vn(e) {
  return Array.from(e.children).filter((e) => e.getClientRects().length > 0);
}
var Hn = 10;
function Un(e, t, n) {
  let [r, i] = D.useState(0),
    [a, o] = D.useState(t);
  return (
    D.useEffect(() => {
      if (!n || !e) return;
      let t = 0,
        r = () => {
          t = 0;
          let n = Vn(e);
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
                  let n = Bn(e, t, c, l);
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
            Bn(e, t, c, l) <= Hn && (u = n);
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
      D.useCallback(
        (t) => {
          let n = e ? Vn(e)[t] : void 0;
          if (!e || !n) return;
          let r = getComputedStyle(e),
            i = r.direction === `rtl`,
            a = Bn(e, n, i, parseFloat(r.scrollPaddingInlineStart) || 0);
          e.scrollBy({ left: i ? -a : a, behavior: `smooth` });
        },
        [e],
      ),
      a,
    ]
  );
}
function Wn(e) {
  let { nSlideIndex: t, nStartingSlideIndex: n, ref: r, children: i } = e;
  return n === void 0
    ? i
    : (0, Y.jsx)(`div`, { ref: t === n ? r : void 0, children: i });
}
function Gn(e) {
  let {
      padded: t,
      gap: n,
      children: r,
      bLazyRenderChildren: o,
      lazyRenderPlaceholderWidth: s,
      lazyRenderPlaceholderHeight: l,
      startingSlide: u,
      onSlide: d,
    } = e,
    p = D.useRef(null),
    m = D.useRef(null),
    h = _(),
    g = D.Children.count(r),
    [v, y] = D.useState(null),
    b = D.useCallback((e) => {
      ((p.current = e), y(e));
    }, []);
  zn(v, d, g);
  let x = D.useContext(i) && !h && g > 1,
    [S, C, w] = Un(v, g, x);
  D.useLayoutEffect(() => {
    p.current &&
      m.current &&
      (p.current.scrollLeft +=
        m.current.getBoundingClientRect().left -
        p.current.getBoundingClientRect().left);
  }, [u]);
  let T = D.Children.map(r, (e, t) =>
      o
        ? (0, Y.jsx)(a, {
            rootMargin: `0px 50% 0px 50%`,
            horizontal: !0,
            placeholderWidth: s ?? 1,
            placeholderHeight: 1,
            holdGamepadFocus: h,
            children: (0, Y.jsx)(Wn, {
              nSlideIndex: t,
              nStartingSlideIndex: u,
              ref: m,
              children: e,
            }),
          })
        : (0, Y.jsx)(Wn, {
            nSlideIndex: t,
            nStartingSlideIndex: u,
            ref: m,
            children: e,
          }),
    ),
    E = (0, Y.jsx)(f, {
      "flow-children": `row`,
      style: { gap: n ? n + `px` : void 0 },
      className: c(
        { SaleSectionCarouselPadding: t },
        `ScrollSnapCarousel`,
        `SaleSectionCarousel`,
        In,
        x && `DE3YQ2XTqZE-`,
        e.className,
      ),
      ref: b,
      children: T,
    }),
    ee = x
      ? (0, Y.jsxs)(`div`, {
          className: c(Ln, `PillScrollRowCtn`),
          children: [
            E,
            (0, Y.jsx)(Fn, { count: w, selectedIndex: S, fnNavigate: C }),
          ],
        })
      : E;
  return o
    ? (0, Y.jsx)(a, {
        rootMargin: `50% 0px 50% 0px`,
        horizontal: !1,
        placeholderWidth: 1,
        placeholderHeight: l ?? 1,
        children: ee,
      })
    : ee;
}
var Kn = e(n());
function qn(e, t) {
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
function Z(e) {
  let {
      eDirection: t,
      onNavIntent: n,
      className: r,
      style: i,
      children: a,
    } = e,
    o = D.useContext(G),
    s = D.useRef(n);
  s.current = n;
  let c = D.useRef(!1),
    l = D.useRef(!1),
    u = D.useCallback(() => {
      let e = qn(o.state, t);
      e !== void 0 && s.current?.(e, t);
    }, [o, t]),
    d = !!n;
  D.useEffect(() => {
    if (!d) return;
    let e = o.state.currentSlide,
      t = () => {
        let t = o.state.currentSlide;
        t !== e && ((e = t), (c.current || l.current) && u());
      };
    return (o.subscribe(t), () => o.unsubscribe(t));
  }, [d, o, u]);
  let f = t === `next` ? pt : rt;
  return n
    ? (0, Y.jsx)(f, {
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
    : (0, Y.jsx)(f, {
        className: r,
        style: i,
        "aria-label": e[`aria-label`],
        children: a,
      });
}
var Jn = V(
  class extends D.Component {
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
        l = 100 * (1 - Math.min(o + i, a) / a),
        u = s + (50 * i) / a,
        d = 100 - u;
      return (0, Y.jsxs)(`div`, {
        className: _n,
        children: [
          e &&
            (0, Y.jsx)(Z, {
              eDirection: `previous`,
              onNavIntent: r,
              className: c(`iqx2UWGqqKU-`, `oKffwUnx6co-`, `_--jO3lLROzo-`),
              children: (0, Y.jsx)($, {
                arrowFill: t,
                arrowStyle: n,
                direction: `left`,
              }),
            }),
          (0, Y.jsxs)(`div`, {
            className: bn,
            children: [
              (0, Y.jsx)(`div`, { className: xn }),
              (0, Y.jsx)(`div`, {
                className: Sn,
                style: { insetInlineStart: s + `%`, insetInlineEnd: l + `%` },
              }),
              (0, Y.jsx)(`div`, {
                className: vn,
                style: { insetInlineStart: `0%`, width: u + `%` },
                children: (0, Y.jsx)(Z, {
                  eDirection: `previous`,
                  onNavIntent: r,
                  className: c(dn, yn),
                  style: { color: `red` },
                  children: (0, Y.jsx)(`div`, {}),
                }),
              }),
              (0, Y.jsx)(`div`, {
                className: vn,
                style: { insetInlineEnd: `0%`, width: d + `%` },
                children: (0, Y.jsx)(Z, {
                  eDirection: `next`,
                  onNavIntent: r,
                  className: c(dn, yn),
                  children: (0, Y.jsx)(`div`, {}),
                }),
              }),
            ],
          }),
          e &&
            (0, Y.jsx)(Z, {
              eDirection: `next`,
              onNavIntent: r,
              className: c(`iqx2UWGqqKU-`, `O2Vg9rmPwSE-`, `_--jO3lLROzo-`),
              children: (0, Y.jsx)($, {
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
function Yn(e) {
  let { bForceSimpleCarousel: t, screenIsWide: n, children: r } = e,
    i = _();
  return (n || i) && !t
    ? (0, Y.jsx)(Xn, { ...e, children: r })
    : (0, Y.jsx)(Gn, { ...e, children: r });
}
function Xn(e) {
  let t = _(),
    n = D.useContext(i),
    [r, o] = D.useState(!1),
    { bTabHidden: s, bOffscreen: l, refIntersection: u } = un(),
    d = () => D.Children.count(e.children),
    p = () => Math.min(d(), e.visibleElements),
    m = () =>
      D.Children.map(e.children, (n, r) => {
        let i =
          e.bLazyRenderChildren && !t
            ? (0, Y.jsx)(a, {
                rootMargin: `0px 100% 0px 100%`,
                horizontal: !0,
                placeholderWidth: e.lazyRenderPlaceholderWidth ?? 1,
                placeholderHeight: e.lazyRenderPlaceholderHeight ?? 1,
                children: n,
              })
            : n;
        return (0, Y.jsx)(
          Bt,
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
    h = d(),
    g = p();
  if (!h || !g) return null;
  let v = g < h,
    b = e.hideArrows || !v,
    x = !v || e.hidePips,
    S = !!e.bAutoAdvance && v && !t,
    C;
  r && !y() ? (C = 5) : s ? (C = 1) : l && (C = 2);
  let w = 4 / 3,
    T = !0;
  e.slideAspectRatio && ((w = e.slideAspectRatio), (T = !1));
  let E = `items_in_row_${e.visibleElements}`;
  return (0, Y.jsx)(f, {
    "flow-children": `row`,
    className: c(fn, e.className, E),
    navKey: e.navKey,
    ref: u,
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    children: (0, Y.jsxs)(tt, {
      visibleSlides: e.visibleElements,
      totalSlides: d(),
      naturalSlideWidth: 100 * w,
      naturalSlideHeight: 100,
      step: e.visibleElements,
      infinite: !e.disableEdgeWrap,
      isIntrinsicHeight: T,
      dragEnabled: !1,
      touchEnabled: !1,
      lockOnWindowScroll: !0,
      orientation: `horizontal`,
      disableKeyboard: !0,
      currentSlide: e.startingSlide,
      children: [
        (0, Y.jsx)(er, {
          bHideArrows: b,
          onSlide: e.onSlide,
          onNavIntent: e.onNavIntent,
          arrowFill: e.arrowFill,
          arrowStyle: e.arrowStyle,
          children: m(),
        }),
        !x &&
          (e.useTestScrollbar && !n
            ? (0, Y.jsx)(Jn, {
                showArrows: b,
                onNavIntent: e.onNavIntent,
                carouselStore: null,
              })
            : (0, Y.jsx)(`div`, {
                className: (0, Kn.default)({
                  "I8j65FBXdOY-": !0,
                  "_8kxQAkw3gko-": n,
                  "uhUggqIYXBc-": e.className?.includes(`template-carousel`),
                }),
                children: (0, Y.jsx)(Zn, {
                  ...e,
                  nPageSize: g,
                  children: e.children,
                }),
              })),
        S && (0, Y.jsx)($n, { pauseReason: C }),
      ],
    }),
  });
}
function Zn(e) {
  let { nPageSize: t } = e,
    n = D.useContext(G),
    r = D.useContext(i),
    [a, o] = D.useState(n.state.currentSlide);
  D.useEffect(
    () =>
      n.subscribe(() => {
        o(n.state.currentSlide);
      }),
    [n],
  );
  let s = Math.ceil(a / t),
    c = jn(Math.ceil(D.Children.count(e.children) / t), s);
  return r
    ? (0, Y.jsx)(Mn, {
        pillWindow: c,
        children: c.rgPills.map((e) =>
          (0, Y.jsx)(
            bt,
            {
              slide: e.nPage * t,
              className: Nn(),
              children: (0, Y.jsx)(Pn, { bSelected: e.nPage === s }),
            },
            e.nPage,
          ),
        ),
      })
    : (0, Y.jsx)(Y.Fragment, {
        children: D.Children.map(e.children, (n, r) => {
          if (r % t !== 0) return null;
          let i = s * t === r;
          return (0, Y.jsx)(
            bt,
            {
              slide: r,
              className: gn,
              children: (0, Y.jsx)(nr, { ...e, bIsActive: i }),
            },
            r,
          );
        }),
      });
}
function Qn(e) {
  e.current &&= (window.clearTimeout(e.current), null);
}
function $n(e) {
  let { pauseReason: t } = e,
    n = D.useContext(G),
    [r, i] = D.useState(n.state.currentSlide),
    [a, o] = D.useState(!0),
    s = D.useRef(null),
    c = D.useRef(n.state.currentSlide);
  D.useEffect(() => {
    let e = () => {
      let e = n.state.currentSlide;
      e !== c.current &&
        ((c.current = e),
        i(e),
        s.current === e ? (s.current = null) : s.current === null && o(!1));
    };
    return (n.subscribe(e), () => n.unsubscribe(e));
  }, [n]);
  let l = D.useCallback(() => {
    let { currentSlide: e, visibleSlides: t, totalSlides: r } = n.state,
      i = 0;
    (e + t < r && (i = Math.min(e + t, r - t)),
      i !== e && ((s.current = i), n.setStoreState({ currentSlide: i })));
  }, [n]);
  return (0, Y.jsx)(cn, {
    className: hn,
    enabled: a,
    currentItemKey: r,
    autoAdvanceMsec: sn,
    fnAdvance: l,
    pauseReason: t,
    countdownToken: `#Carousel_AutoAdvanceNextInSeconds`,
  });
}
function er(e) {
  let {
      bHideArrows: t,
      children: n,
      onSlide: r,
      onNavIntent: i,
      arrowFill: a,
      arrowStyle: o,
    } = e,
    s = D.useContext(G),
    l = D.useRef(s.state.currentSlide),
    [u, f] = D.useState(null),
    p = D.useRef(null);
  D.useEffect(() => {
    let e = () => {
      let e = l.current,
        t = s.state.currentSlide;
      (r && r(t),
        f(t > e ? `Right` : t < e ? `Left` : null),
        Qn(p),
        (p.current = window.setTimeout(() => {
          p.current && (f(null), Qn(p));
        }, 1e3)),
        (l.current = t));
    };
    return (
      s.subscribe(e),
      () => {
        (s.unsubscribe(e), Qn(p));
      }
    );
  }, [s]);
  let m = !!u && `CarouselSliding` + u;
  return (0, Y.jsxs)(`div`, {
    className: c(pn, `SliderBody`, m),
    children: [
      !t &&
        (0, Y.jsx)(Z, {
          eDirection: `previous`,
          onNavIntent: i,
          className: c(
            `_6KbJ1ZwTIeY-`,
            `oKffwUnx6co-`,
            `_--jO3lLROzo-`,
            `CarouselBtnLeft`,
          ),
          "aria-label": b(`#Carousel_Prev`),
          children: (0, Y.jsx)($, {
            arrowFill: a,
            arrowStyle: o,
            direction: `left`,
          }),
        }),
      (0, Y.jsx)(Kt, {
        className: T.GetScrollableClassname(),
        classNameTray: mn,
        classNameAnimation: wn,
        role: `list`,
        children: (0, Y.jsx)(d, { children: n }),
      }),
      !t &&
        (0, Y.jsx)(Z, {
          eDirection: `next`,
          onNavIntent: i,
          className: c(
            `_6KbJ1ZwTIeY-`,
            `O2Vg9rmPwSE-`,
            `_--jO3lLROzo-`,
            `CarouselBtnRight`,
          ),
          "aria-label": b(`#Carousel_Next`),
          children: (0, Y.jsx)($, {
            arrowFill: a,
            arrowStyle: o,
            direction: `right`,
          }),
        }),
    ],
  });
}
var Q = (function (e) {
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
    case Q.k_ECutArrowStyle: {
      let e = r == `right` ? 0 : 180;
      return (0, Y.jsx)(l, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Q.k_EDoubleArrowStyle: {
      let e = r == `right` ? 180 : 0;
      return (0, Y.jsx)(u, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Q.k_EThickChevron: {
      let e = r == `right` ? 0 : 180;
      return (0, Y.jsx)(m, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Q.k_EFilledArrow: {
      let e = r == `right` ? 90 : 270;
      return (0, Y.jsx)(ee, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Q.k_EPointyArrow:
      return (0, Y.jsx)(C, {
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
      return (0, Y.jsx)(g, { fill: a, role: `presentation` });
    case tr.k_ECircularCrumb:
      return (0, Y.jsx)(o, { fill: a, role: `presentation` });
    case tr.k_ESquareCrumb:
      return (0, Y.jsx)(w, { fill: a, role: `presentation` });
  }
}
export { un as a, cn as i, nr as n, Yn as r, $ as t };
