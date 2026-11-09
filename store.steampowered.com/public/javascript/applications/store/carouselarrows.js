/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./rolldown-runtime.js";
import { Lt as t, N as n, ft as r } from "./libraries.js";
import { N as i } from "./partnerevent.js";
import { n as a } from "./lazyrenderchildren.js";
import {
  $c as o,
  Do as s,
  Fa as c,
  Ha as l,
  Sc as u,
  Sl as d,
  Ta as f,
  Ua as p,
  Uy as m,
  Va as h,
  Xb as g,
  Xs as _,
  Zb as v,
  _t as y,
  ex as b,
  ka as x,
  kc as S,
  po as C,
  qy as w,
  rr as ee,
  uo as te,
  zb as T,
} from "./main.js";
var E = e(t(), 1),
  ne = `100% 0px 100% 0px`,
  re = `SaleSection_`;
function ie() {
  return window.innerWidth ?? 1920;
}
function ae() {
  return ie() >= 940;
}
function oe() {
  f();
  let [e, t] = (0, E.useState)(() => ie());
  return (
    (0, E.useEffect)(() => {
      let e = () => {
        t(ie());
      };
      return (
        e(),
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      );
    }, []),
    e
  );
}
function se(e = 940) {
  return oe() >= e;
}
function ce(e) {
  let t = oe(),
    n = t >= 940,
    r = i(e);
  return n
    ? { nMaxCapsulesPerRow: r.nMaxItemsPerRow, bScreenIsWide: n }
    : {
        nMaxCapsulesPerRow: Math.min(
          Math.max(Math.floor(t / r.nItemMinimumWidth), 1),
          r.nMaxItemsPerRow,
        ),
        bScreenIsWide: n,
      };
}
function le(e) {
  let t = i(e);
  return ae()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
function ue(e, t) {
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
      ? ue(Object(n), !0).forEach(function (t) {
          A(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ue(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function O(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function de(e, t) {
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
    t && de(e.prototype, t),
    n && de(e, n),
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
    t && pe(e, t));
}
function fe(e) {
  return (fe = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function pe(e, t) {
  return (pe = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
}
function me() {
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
function he(e, t) {
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
    i = he(e, t);
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
function ge(e, t) {
  if (t && (typeof t == `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return P(e);
}
function F(e) {
  var t = me();
  return function () {
    var n,
      r = fe(e);
    if (t) {
      var i = fe(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return ge(this, n);
  };
}
function _e(e) {
  return ve(e) || ye(e) || be(e) || Se();
}
function ve(e) {
  if (Array.isArray(e)) return xe(e);
}
function ye(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function be(e, t) {
  if (e) {
    if (typeof e == `string`) return xe(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? xe(e, t)
          : void 0
    );
  }
}
function xe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Se() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ce(e, t) {
  return ((t = { exports: {} }), e(t, t.exports), t.exports);
}
function we() {}
function Te() {}
function I(e) {
  return e
    .map(function (e) {
      return !1 === e ? null : e;
    })
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
}
function Ee(e, t) {
  return ((100 / e) * t) / t;
}
function De(e, t) {
  return (100 * e) / t;
}
function L(e) {
  return `${e}%`;
}
function R(e, t, n) {
  if (e === t) return !0;
  var r = K[Ze(e)],
    i = K[Ze(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function Oe(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, a = r.length; (i = r[--a]);)
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function ke(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--;) if (!R(e[r], t[r], n)) return !1;
  return !0;
}
function Ae(e, t, n) {
  if (typeof e.equal == `function`) return (n.push([e, t]), e.equal(t, n));
  var r = je(e),
    i = je(t),
    a = r.length;
  if (a !== i.length) return !1;
  for (r.sort(), i.sort(); a--;) if (r[a] !== i[a]) return !1;
  for (n.push([e, t]), a = r.length; a--;) {
    var o = r[a];
    if (!R(e[o], t[o], n)) return !1;
  }
  return !0;
}
function je(e) {
  var t = [];
  for (var n in e) n !== `constructor` && t.push(n);
  return t;
}
function Me(e) {
  return !!e && typeof e == `object`;
}
function Ne(e) {
  var t = Object.prototype.toString.call(e);
  return t === `[object RegExp]` || t === `[object Date]` || Pe(e);
}
function Pe(e) {
  return e.$$typeof === et;
}
function Fe(e) {
  return Array.isArray(e) ? [] : {};
}
function z(e, t) {
  return !1 !== t.clone && t.isMergeableObject(e) ? B(Fe(e), e, t) : e;
}
function Ie(e, t, n) {
  return e.concat(t).map(function (e) {
    return z(e, n);
  });
}
function Le(e, t) {
  if (!t.customMerge) return B;
  var n = t.customMerge(e);
  return typeof n == `function` ? n : B;
}
function Re(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function ze(e) {
  return Object.keys(e).concat(Re(e));
}
function Be(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Ve(e, t) {
  return (
    Be(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function He(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      ze(e).forEach(function (t) {
        r[t] = z(e[t], n);
      }),
    ze(t).forEach(function (i) {
      Ve(e, i) ||
        (r[i] =
          Be(e, i) && n.isMergeableObject(t[i])
            ? Le(i, n)(e[i], t[i], n)
            : z(t[i], n));
    }),
    r
  );
}
function B(e, t, n) {
  (((n ||= {}).arrayMerge = n.arrayMerge || Ie),
    (n.isMergeableObject = n.isMergeableObject || $e),
    (n.cloneUnlessOtherwiseSpecified = z));
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : He(e, t, n)
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
              return !Qe(t, this.state) || !Qe(e, this.props);
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
                i = N(n, ct),
                a = tt(this.state, i, G);
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
    A(n, `contextType`, q),
    A(n, `propTypes`, { children: U.children }),
    A(n, `defaultProps`, { children: null }),
    n
  );
}
var Ue = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
Te.resetWarningCache = we;
var We = function () {
    function e(e, t, n, r, i, a) {
      if (a !== Ue) {
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
      checkPropTypes: Te,
      resetWarningCache: we,
    };
    return ((n.PropTypes = n), n);
  },
  H = Ce(function (e) {
    e.exports = We();
  }),
  Ge = `loading`,
  Ke = `success`,
  qe = `error`,
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
  W = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  G = {
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
  Je = { buttonBack: `buttonBack___1mlaL` },
  Ye = [
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
  Xe = (function (e) {
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
                i = N(e, Ye),
                a = I([Je.buttonBack, `carousel__back-button`, n]),
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
(A(Xe, `propTypes`, {
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
  A(Xe, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  }));
var Ze = Ce(function (e, t) {
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
Ze.types;
var K = {};
((K.number = function (e, t) {
  return e !== e && t !== t;
}),
  (K.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      K.object(e, t, n) &&
      R(e.prototype, t.prototype)
    );
  }),
  (K.date = function (e, t) {
    return +e == +t;
  }),
  (K.regexp = function (e, t) {
    return e.toString() === t.toString();
  }),
  (K.element = function (e, t) {
    return e.outerHTML === t.outerHTML;
  }),
  (K.textnode = function (e, t) {
    return e.textContent === t.textContent;
  }),
  (K.arguments = K[`bit-array`] = K.array = Oe(ke)),
  (K.object = Oe(Ae)));
var Qe = R,
  $e = function (e) {
    return Me(e) && !Ne(e);
  },
  et =
    typeof Symbol == `function` && Symbol.for
      ? Symbol.for(`react.element`)
      : 60103;
B.all = function (e, t) {
  if (!Array.isArray(e)) throw Error(`first argument should be an array`);
  return e.reduce(function (e, n) {
    return B(e, n, t);
  }, {});
};
var tt = B,
  q = E.createContext(),
  nt = function e(t) {
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
  rt = { masterSpinnerFinished: !1 },
  it = (function () {
    function e(t) {
      (O(this, e),
        (this.state = nt(tt(rt, t, G))),
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
            ((this.state = nt(tt(this.state, e, G))),
              this.updateSubscribers(t));
          },
        },
        {
          key: `getStoreState`,
          value: function () {
            return tt({}, this.state, G);
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
  at = [
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
  ot = (function (e) {
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
        slideSize: Ee(e.totalSlides, e.visibleSlides),
        slideTraySize: De(e.totalSlides, e.visibleSlides),
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        dragEnabled: e.dragEnabled,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
      return ((r.carouselStore = new it(i)), r);
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
                ((n.slideSize = Ee(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                )),
                (n.slideTraySize = De(
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
                N(e, at)),
              r = I([`carousel`, this.props.className]);
            return E.createElement(
              t,
              j({ className: r }, n),
              E.createElement(
                q.Provider,
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
  st =
    (A(ot, `propTypes`, {
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
    A(ot, `defaultProps`, {
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
    ot);
q.Consumer;
var ct = [`children`],
  lt = V(Xe, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  ut = { buttonFirst: `buttonFirst___2rhFr` },
  dt = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
  ],
  ft = (function (e) {
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
              i = (e.onClick, e.totalSlides, N(e, dt)),
              a = I([ut.buttonFirst, `carousel__first-button`, t]),
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
V(
  (A(ft, `propTypes`, {
    carouselStore: H.object.isRequired,
    children: U.children.isRequired,
    className: H.string,
    currentSlide: H.number.isRequired,
    disabled: H.bool,
    onClick: H.func,
    totalSlides: H.number.isRequired,
  }),
  A(ft, `defaultProps`, { className: null, disabled: null, onClick: null }),
  ft),
  function (e) {
    return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
  },
);
var pt = { buttonLast: `buttonLast___2yuh0` },
  mt = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
    `visibleSlides`,
  ],
  ht = (function (e) {
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
              o = N(e, mt),
              s = I([pt.buttonLast, `carousel__last-button`, t]),
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
V(
  (A(ht, `propTypes`, {
    carouselStore: H.object.isRequired,
    children: U.children.isRequired,
    className: H.string,
    currentSlide: H.number.isRequired,
    disabled: H.bool,
    onClick: H.func,
    totalSlides: H.number.isRequired,
    visibleSlides: H.number.isRequired,
  }),
  A(ht, `defaultProps`, { className: null, disabled: null, onClick: null }),
  ht),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var gt = { buttonNext: `buttonNext___2mOCa` },
  _t = [
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
                c = N(e, _t),
                l = I([gt.buttonNext, `carousel__next-button`, n]),
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
  yt = V(
    (A(vt, `propTypes`, {
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
    A(vt, `defaultProps`, {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    vt),
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
  bt = { buttonNext: `buttonNext___3Lm3s` },
  xt = [
    `carouselStore`,
    `children`,
    `childrenPaused`,
    `childrenPlaying`,
    `className`,
    `isPlaying`,
    `onClick`,
  ],
  St = (function (e) {
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
              a = (e.onClick, N(e, xt)),
              o = I([bt.buttonNext, `carousel__play-button`, r]);
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
V(
  (A(St, `propTypes`, {
    carouselStore: H.object.isRequired,
    children: H.node,
    childrenPaused: H.node,
    childrenPlaying: H.node,
    className: H.string,
    isPlaying: H.bool.isRequired,
    onClick: H.func,
  }),
  A(St, `defaultProps`, {
    children: null,
    childrenPaused: null,
    childrenPlaying: null,
    className: null,
    onClick: null,
  }),
  St),
  function (e) {
    return { isPlaying: e.isPlaying };
  },
);
var Ct = { dot: `dot___3c3SI` },
  wt = [
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
  Tt = (function (e) {
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
              s = N(e, wt),
              c = a >= n && a < n + o,
              l = typeof i == `boolean` ? i : c,
              u = typeof r == `boolean` ? r : !0 === c,
              d = I([
                Ct.dot,
                l && Ct.dotSelected,
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
  Et = V(
    (A(Tt, `propTypes`, {
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
    A(Tt, `defaultProps`, {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    Tt),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      };
    },
  ),
  Dt = {},
  Ot = [`renderDots`],
  kt = [
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
  At = (function (e) {
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
              return (s.renderDots, o(N(s, Ot)));
            }
            for (var c = [], l = 0; l < n; l += 1) {
              var u = l >= t && l < t + r,
                d = a ? l === t : u,
                f = l >= n - r ? n - r : l;
              c.push(
                E.createElement(
                  Et,
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
                N(e, kt)),
              i = I([Dt.DotGroup, `carousel__dot-group`, n]);
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
V(
  (A(At, `propTypes`, {
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
  A(At, `defaultProps`, {
    children: null,
    className: null,
    dotNumbers: !1,
    disableActiveDots: !0,
    showAsSelectedForCurrentSlideOnly: !1,
    renderDots: null,
  }),
  At),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var J = { image: `image___xtQGH` },
  jt = [`src`, `alt`],
  Mt = [
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
  Nt = (function (e) {
    function t(e) {
      var r;
      return (
        O(this, t),
        (r = n.call(this, e)),
        (r.state = { imageStatus: Ge }),
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
                (this.setState({ imageStatus: Ge }),
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
              (this.setState({ imageStatus: Ke }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(e));
            },
          },
          {
            key: `handleImageError`,
            value: function (e) {
              (this.setState({ imageStatus: qe }),
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
                  J.image,
                  J.imageLoading,
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
                  J.image,
                  J.imageError,
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
                  J.image,
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
                  (o = N(e, jt)),
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
                  N(e, Mt));
              switch (this.state.imageStatus) {
                case Ge:
                  return this.renderLoading(t);
                case Ke:
                  return this.renderSuccess(t);
                case qe:
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
(A(Nt, `propTypes`, {
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
  A(Nt, `defaultProps`, {
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
var Pt = V(Nt, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  Ft = { spinner: `spinner___27VUp`, spin: `spin___S3UuE` },
  It = [`className`],
  Lt = (function (e) {
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
              n = N(e, It),
              r = I([Ft.spinner, `carousel__spinner`, t]);
            return E.createElement(`div`, j({ className: r }, n));
          },
        },
      ]),
      t
    );
  })(E.PureComponent),
  Rt =
    (A(Lt, `propTypes`, { className: H.string }),
    A(Lt, `defaultProps`, { className: null }),
    Lt),
  Y = {
    container: `container___2O72F`,
    overlay: `overlay___IV4qY`,
    hover: `hover___MYy31`,
    zoom: `zoom___3kqYk`,
    loading: `loading___1pvNI`,
    imageLoadingSpinnerContainer: `imageLoadingSpinnerContainer___3UIPD`,
  },
  zt = [
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
  Bt,
  Vt = 2,
  Ht = 3;
V(
  ((Bt = (function (e) {
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
                this.setState({ isHovering: !0, scale: Vt });
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
                (_e(e.targetTouches).forEach(function (e) {
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
                var r = _e(e.targetTouches)
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
                      W({
                        min: 0,
                        max: 100,
                        x: ((l.cx - i.left) / i.width) * 100,
                      }),
                    ),
                    f = L(
                      W({
                        min: 0,
                        max: 100,
                        x: ((l.cy - i.top) / i.height) * 100,
                      }),
                    ),
                    p = function (e) {
                      return W({
                        min: 1,
                        max: Ht,
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
                (_e(e.changedTouches).forEach(function (e) {
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
                      Y.imageLoadingSpinnerContainer,
                      `carousel__image-loading-spinner-container`,
                    ]),
                  },
                  e && e(),
                  !e && E.createElement(Rt, null),
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
                u = N(e, zt),
                d = I([Y.container, i]),
                f = I([Y.image, `carousel__zoom-image`, a]),
                p = I([
                  Y.overlay,
                  `carousel__zoom-image-overlay`,
                  this.state.isHovering && Y.hover,
                  this.state.isZooming && Y.zoom,
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
                    Pt,
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
                  E.createElement(Pt, {
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
  A(Bt, `propTypes`, {
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
  A(Bt, `defaultProps`, {
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
  Bt),
  function () {
    return {};
  },
);
var Ut = {
    slide: `slide___3-Nqo`,
    slideHorizontal: `slideHorizontal___1NzNV`,
    slideInner: `slideInner___2mfX9`,
    focusRing: `focusRing___1airF`,
  },
  Wt = [
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
  Gt = (function (e) {
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
                  className: [Ut.focusRing, `carousel__slide-focus-ring`].join(
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
              g = N(t, Wt),
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
                Ut.slide,
                u === `horizontal` && Ut.slideHorizontal,
                `carousel__slide`,
                this.state.focused && `carousel__slide--focused`,
                b && a,
                b && `carousel__slide--visible`,
                !b && i,
                !b && `carousel__slide--hidden`,
                r,
              ]),
              S = I([Ut.slideInner, `carousel__inner-slide`, o]);
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
  Kt = V(
    (A(Gt, `propTypes`, {
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
    A(Gt, `defaultProps`, {
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
    Gt),
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
  qt = (function () {
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
  X = {
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
  Jt =
    `ariaLabel.carouselStore.children.className.classNameAnimation.classNameTray.classNameTrayWrap.currentSlide.disableAnimation.disableKeyboard.dragEnabled.hasMasterSpinner.interval.isPageScrollLocked.isPlaying.lockOnWindowScroll.masterSpinnerFinished.moveThreshold.naturalSlideHeight.naturalSlideWidth.onMasterSpinner.orientation.playDirection.privateUnDisableAnimation.slideSize.slideTraySize.spinner.style.totalSlides.touchEnabled.trayProps.trayTag.visibleSlides.isIntrinsicHeight`.split(
      `.`,
    ),
  Yt = [
    `dragStep`,
    `step`,
    `infinite`,
    `preventVerticalScrollOnTouch`,
    `preventingVerticalScroll`,
    `horizontalPixelThreshold`,
    `verticalPixelThreshold`,
  ],
  Xt = [
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
  Zt = (function (e) {
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
              var e = new qt();
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
                i = W({ min: 0, max: r, x: this.props.currentSlide + n });
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
                        X.masterSpinnerContainer,
                        `carousel__master-spinner-container`,
                      ]),
                    },
                    r && r(),
                    !r && E.createElement(Rt, null),
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
                x = N(t, Jt),
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
                  f === `vertical` ? X.verticalSlider : X.horizontalSlider,
                  !g && X.touchDisabled,
                  `carousel__slider`,
                  f === `vertical`
                    ? `carousel__slider--vertical`
                    : `carousel__slider--horizontal`,
                  i,
                ]),
                T = I([
                  X.sliderTrayWrap,
                  `carousel__slider-tray-wrapper`,
                  f === `vertical`
                    ? X.verticalSlideTrayWrap
                    : X.horizontalTrayWrap,
                  f === `vertical`
                    ? `carousel__slider-tray-wrap--vertical`
                    : `carousel__slider-tray-wrap--horizontal`,
                  s,
                ]),
                ne = I([
                  X.sliderTray,
                  a || X.sliderAnimation,
                  `carousel__slider-tray`,
                  f === `vertical` ? X.verticalTray : X.horizontalTray,
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
                  N(x, Yt)),
                ie =
                  (_.className,
                  _.onClickCapture,
                  _.onMouseDown,
                  _.onTouchCancel,
                  _.onTouchEnd,
                  _.onTouchMove,
                  _.onTouchStart,
                  _.ref,
                  _.style,
                  N(_, Xt));
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
                  { className: T, style: C },
                  E.createElement(
                    v,
                    j(
                      {
                        ref: this.getSliderRef,
                        className: ne,
                        style: w,
                        onTouchStart: this.handleOnTouchStart,
                        onTouchMove: this.handleOnTouchMove,
                        onTouchEnd: this.handleOnTouchEnd,
                        onTouchCancel: this.handleOnTouchCancel,
                        onMouseDown: this.handleOnMouseDown,
                        onClickCapture: this.handleOnClickCapture,
                      },
                      ie,
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
  Qt = V(
    (A(Zt, `propTypes`, {
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
    A(Zt, `defaultProps`, {
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
    Zt),
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
  $t = `HRbFcf6y6hE-`,
  en = `-ZUk3xT7ZlY-`,
  tn = `KLUTL0g4Wbo-`,
  nn = `glnkf1Fqlvc-`,
  rn = `loez15u80yI-`,
  Z = r(),
  an = `bTrailerCarouselAutoAdvance`,
  on = 1e4;
function sn(e) {
  let {
      className: t,
      currentItemKey: n,
      autoAdvanceMsec: r,
      fnAdvance: i,
      enabled: a,
      pauseReason: o,
      countdownToken: s = `#SaleTrailerCarousel_NextGameInSeconds`,
    } = e,
    c = E.useMemo(() => {
      let e = g(an);
      return !e || e?.toLowerCase() === `true`;
    }, []),
    [l, f] = E.useState(c),
    p = r === void 0 ? on : r,
    [h, _] = E.useState(p),
    y = o !== void 0,
    b = cn(o);
  d(
    () => {
      let e = h - 30;
      e <= 0 ? (i(), _(p)) : _(Math.max(e, 0));
    },
    30,
    [p],
    a && l && !y && p > 0 && h > 0,
  );
  let x = E.useCallback(
    (e) => {
      (v(an, String(e), 3650), f(e), _(p));
    },
    [p],
  );
  return (
    E.useEffect(() => {
      _(p);
    }, [n, p]),
    (0, Z.jsxs)(`div`, {
      className: t,
      children: [
        (0, Z.jsxs)(`div`, {
          className: u($t, (!a || !l) && `X8q-iPdWKKw-`, y && `_3E-10Et-w2o-`),
          children: [
            (0, Z.jsx)(`div`, {
              className: en,
              children: !y || !b ? w(s, Math.ceil(h / 1e3)) : b,
            }),
            (0, Z.jsx)(`div`, {
              className: tn,
              style: { "--auto-advance-ratio": `${100 - (h / p) * 100}%` },
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: u(rn),
          children: (0, Z.jsx)(ee, {
            className: nn,
            controlled: !0,
            checked: l,
            label: m(`#SaleTrailerCarousel_AutoAdvanceEnabled`),
            onChange: x,
          }),
        }),
      ],
    })
  );
}
function cn(e) {
  switch (e) {
    case 4:
      return m(`#SaleTrailerCarousel_AutoAdvanceVideoPaused`);
    case 3:
    case 5:
      return m(`#SaleTrailerCarousel_AutoAdvanceHover`);
  }
}
function ln() {
  let [e, t] = E.useState(!1),
    [n, r] = E.useState(!1);
  E.useEffect(() => {
    let e = () => t(document.hidden);
    return (
      document.addEventListener(`visibilitychange`, e),
      () => document.removeEventListener(`visibilitychange`, e)
    );
  }, []);
  let i = E.useCallback((e) => r(!e.isIntersecting), []),
    a = E.useMemo(() => ({ threshold: 0.5 }), []);
  return { bTabHidden: e, bOffscreen: n, refIntersection: o(i, a) };
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
  wn = `_1MsO62M-piw-`,
  Tn = 0.6;
function En(e, t, n) {
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
            if (!t.isIntersecting || t.intersectionRatio < Tn) continue;
            let e = n.indexOf(t.target);
            e < 0 || e === a || ((a = e), r.current?.(e));
          }
        },
        { root: t, threshold: Tn },
      );
    for (let e of n) o.observe(e);
    return () => o.disconnect();
  }, [e, i, n]);
}
function Dn(e) {
  let { nSlideIndex: t, nStartingSlideIndex: n, ref: r, children: i } = e;
  return n === void 0
    ? i
    : (0, Z.jsx)(`div`, { ref: t === n ? r : void 0, children: i });
}
function On(e) {
  let {
      padded: t,
      gap: n,
      children: r,
      bLazyRenderChildren: i,
      lazyRenderPlaceholderWidth: o,
      lazyRenderPlaceholderHeight: s,
      startingSlide: c,
      onSlide: l,
    } = e,
    d = E.useRef(null),
    f = E.useRef(null),
    p = T();
  (En(d, l, E.Children.count(r)),
    E.useLayoutEffect(() => {
      d.current &&
        f.current &&
        (d.current.scrollLeft +=
          f.current.getBoundingClientRect().left -
          d.current.getBoundingClientRect().left);
    }, [c]));
  let m = E.Children.map(r, (e, t) =>
      i
        ? (0, Z.jsx)(a, {
            rootMargin: `0px 50% 0px 50%`,
            horizontal: !0,
            placeholderWidth: o ?? 1,
            placeholderHeight: 1,
            holdGamepadFocus: p,
            children: (0, Z.jsx)(Dn, {
              nSlideIndex: t,
              nStartingSlideIndex: c,
              ref: f,
              children: e,
            }),
          })
        : (0, Z.jsx)(Dn, {
            nSlideIndex: t,
            nStartingSlideIndex: c,
            ref: f,
            children: e,
          }),
    ),
    h = (0, Z.jsx)(S, {
      "flow-children": `row`,
      style: { gap: n ? n + `px` : void 0 },
      className: u(
        { SaleSectionCarouselPadding: t },
        `ScrollSnapCarousel`,
        `SaleSectionCarousel`,
        wn,
        e.className,
      ),
      ref: d,
      children: m,
    });
  return i
    ? (0, Z.jsx)(a, {
        rootMargin: `50% 0px 50% 0px`,
        horizontal: !1,
        placeholderWidth: 1,
        placeholderHeight: s ?? 1,
        children: h,
      })
    : h;
}
var kn = e(n()),
  An = V(
    class extends E.Component {
      render() {
        let { showArrows: e, arrowFill: t, arrowStyle: n } = this.props,
          r = this.props.visibleSlides,
          i = this.props.totalSlides,
          a = this.props.currentSlide;
        if (r >= i) return null;
        let o = (100 * a) / i,
          s = 100 * (1 - Math.min(a + r, i) / i),
          c = o + (50 * r) / i,
          l = 100 - c;
        return (0, Z.jsxs)(`div`, {
          className: gn,
          children: [
            e &&
              (0, Z.jsx)(lt, {
                className: u(`iqx2UWGqqKU-`, `oKffwUnx6co-`, `_--jO3lLROzo-`),
                children: (0, Z.jsx)($, {
                  arrowFill: t,
                  arrowStyle: n,
                  direction: `left`,
                }),
              }),
            (0, Z.jsxs)(`div`, {
              className: yn,
              children: [
                (0, Z.jsx)(`div`, { className: bn }),
                (0, Z.jsx)(`div`, {
                  className: xn,
                  style: { insetInlineStart: o + `%`, insetInlineEnd: s + `%` },
                }),
                (0, Z.jsx)(`div`, {
                  className: _n,
                  style: { insetInlineStart: `0%`, width: c + `%` },
                  children: (0, Z.jsx)(lt, {
                    className: u(un, vn),
                    style: { color: `red` },
                    children: (0, Z.jsx)(`div`, {}),
                  }),
                }),
                (0, Z.jsx)(`div`, {
                  className: _n,
                  style: { insetInlineEnd: `0%`, width: l + `%` },
                  children: (0, Z.jsx)(yt, {
                    className: u(un, vn),
                    children: (0, Z.jsx)(`div`, {}),
                  }),
                }),
              ],
            }),
            e &&
              (0, Z.jsx)(yt, {
                className: u(`iqx2UWGqqKU-`, `O2Vg9rmPwSE-`, `_--jO3lLROzo-`),
                children: (0, Z.jsx)($, {
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
function jn(e) {
  let { bForceSimpleCarousel: t, screenIsWide: n, children: r } = e,
    i = T();
  return (n || i) && !t
    ? (0, Z.jsx)(Mn, { ...e, children: r })
    : (0, Z.jsx)(On, { ...e, children: r });
}
function Mn(e) {
  let t = T(),
    [n, r] = E.useState(!1),
    { bTabHidden: i, bOffscreen: o, refIntersection: s } = ln(),
    c = () => E.Children.count(e.children),
    l = () => Math.min(c(), e.visibleElements),
    d = () =>
      E.Children.map(e.children, (n, r) => {
        let i = e.bLazyRenderChildren
          ? (0, Z.jsx)(a, {
              rootMargin: `0px 100% 0px 100%`,
              horizontal: !0,
              placeholderWidth: e.lazyRenderPlaceholderWidth ?? 1,
              placeholderHeight: e.lazyRenderPlaceholderHeight ?? 1,
              holdGamepadFocus: t,
              children: n,
            })
          : n;
        return (0, Z.jsx)(
          Kt,
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
    f = c(),
    p = l();
  if (!f || !p) return null;
  let m = p < f,
    h = e.hideArrows || !m,
    g = !m || e.hidePips,
    _ = !!e.bAutoAdvance && m && !t,
    v;
  n && !b() ? (v = 5) : i ? (v = 1) : o && (v = 2);
  let y = 4 / 3,
    x = !0;
  e.slideAspectRatio && ((y = e.slideAspectRatio), (x = !1));
  let C = `items_in_row_${e.visibleElements}`;
  return (0, Z.jsx)(S, {
    "flow-children": `row`,
    className: u(dn, e.className, C),
    navKey: e.navKey,
    ref: s,
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    children: (0, Z.jsxs)(st, {
      visibleSlides: e.visibleElements,
      totalSlides: c(),
      naturalSlideWidth: 100 * y,
      naturalSlideHeight: 100,
      step: e.visibleElements,
      infinite: !e.disableEdgeWrap,
      isIntrinsicHeight: x,
      dragEnabled: !1,
      touchEnabled: !1,
      lockOnWindowScroll: !0,
      orientation: `horizontal`,
      disableKeyboard: !0,
      currentSlide: e.startingSlide,
      children: [
        (0, Z.jsx)(Ln, {
          bHideArrows: h,
          onSlide: e.onSlide,
          arrowFill: e.arrowFill,
          arrowStyle: e.arrowStyle,
          children: d(),
        }),
        !g &&
          (e.useTestScrollbar
            ? (0, Z.jsx)(An, { showArrows: h, carouselStore: null })
            : (0, Z.jsx)(`div`, {
                className: (0, kn.default)({
                  "I8j65FBXdOY-": !0,
                  "uhUggqIYXBc-": e.className?.includes(`template-carousel`),
                }),
                children: (0, Z.jsx)(Nn, {
                  ...e,
                  nPageSize: p,
                  children: e.children,
                }),
              })),
        _ && (0, Z.jsx)(Fn, { pauseReason: v }),
      ],
    }),
  });
}
function Nn(e) {
  let { nPageSize: t } = e,
    n = E.useContext(q),
    [r, i] = E.useState(n.state.currentSlide);
  return (
    E.useEffect(
      () =>
        n.subscribe(() => {
          i(n.state.currentSlide);
        }),
      [n],
    ),
    (0, Z.jsx)(Z.Fragment, {
      children: E.Children.map(e.children, (n, i) => {
        if (i % t !== 0) return null;
        let a = r >= i && r < i + t;
        return (0, Z.jsx)(
          Et,
          {
            slide: i,
            className: hn,
            children: (0, Z.jsx)(zn, { ...e, bIsActive: a }),
          },
          i,
        );
      }),
    })
  );
}
function Pn(e) {
  e.current &&= (window.clearTimeout(e.current), null);
}
function Fn(e) {
  let { pauseReason: t } = e,
    n = E.useContext(q),
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
  return (0, Z.jsx)(sn, {
    className: mn,
    enabled: a,
    currentItemKey: r,
    autoAdvanceMsec: on,
    fnAdvance: l,
    pauseReason: t,
    countdownToken: `#Carousel_AutoAdvanceNextInSeconds`,
  });
}
function In(e) {
  return e.totalSlides ? (200 * e.currentSlide) / e.totalSlides + `%` : `0%`;
}
function Ln(e) {
  let {
      bHideArrows: t,
      children: n,
      onSlide: r,
      arrowFill: i,
      arrowStyle: a,
    } = e,
    o = E.useContext(q),
    s = E.useRef(o.state.currentSlide),
    [c, l] = E.useState(null),
    [d, f] = E.useState(In(o.state)),
    p = E.useRef(null);
  E.useEffect(() => {
    let e = () => {
      let e = s.current,
        t = o.state.currentSlide;
      (f(In(o.state)),
        r && r(t),
        l(t > e ? `Right` : t < e ? `Left` : null),
        Pn(p),
        (p.current = window.setTimeout(() => {
          p.current && (l(null), Pn(p));
        }, 1e3)),
        (s.current = t));
    };
    return (
      o.subscribe(e),
      () => {
        (o.unsubscribe(e), Pn(p));
      }
    );
  }, [o]);
  let h = !!c && `CarouselSliding` + c;
  return (0, Z.jsxs)(`div`, {
    className: u(fn, `SliderBody`, h),
    style: { "--carousel-rtl-tray-offset": d },
    children: [
      !t &&
        (0, Z.jsx)(lt, {
          className: u(
            `_6KbJ1ZwTIeY-`,
            `oKffwUnx6co-`,
            `_--jO3lLROzo-`,
            `CarouselBtnLeft`,
          ),
          "aria-label": m(`#Carousel_Prev`),
          children: (0, Z.jsx)($, {
            arrowFill: i,
            arrowStyle: a,
            direction: `left`,
          }),
        }),
      (0, Z.jsx)(Qt, {
        className: y.GetScrollableClassname(),
        classNameTray: pn,
        classNameAnimation: Cn,
        role: `list`,
        children: (0, Z.jsx)(x, { children: n }),
      }),
      !t &&
        (0, Z.jsx)(yt, {
          className: u(
            `_6KbJ1ZwTIeY-`,
            `O2Vg9rmPwSE-`,
            `_--jO3lLROzo-`,
            `CarouselBtnRight`,
          ),
          "aria-label": m(`#Carousel_Next`),
          children: (0, Z.jsx)($, {
            arrowFill: i,
            arrowStyle: a,
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
  Rn = (function (e) {
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
      return (0, Z.jsx)(te, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Q.k_EDoubleArrowStyle: {
      let e = r == `right` ? 180 : 0;
      return (0, Z.jsx)(C, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Q.k_EThickChevron: {
      let e = r == `right` ? 0 : 180;
      return (0, Z.jsx)(_, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Q.k_EFilledArrow: {
      let e = r == `right` ? 90 : 270;
      return (0, Z.jsx)(s, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case Q.k_EPointyArrow:
      return (0, Z.jsx)(c, {
        fill: t || `white`,
        role: `presentation`,
        direction: r || `left`,
      });
  }
}
function zn(e) {
  let {
      bIsActive: t,
      breadcrumbActiveColor: n,
      breadcrumbColor: r,
      breadcrumbStyle: i,
    } = e,
    a = t ? n || `#FFFFFF` : r || `#606974`;
  switch (i) {
    default:
    case Rn.k_EPillCrumb:
      return (0, Z.jsx)(l, { fill: a, role: `presentation` });
    case Rn.k_ECircularCrumb:
      return (0, Z.jsx)(h, { fill: a, role: `presentation` });
    case Rn.k_ESquareCrumb:
      return (0, Z.jsx)(p, { fill: a, role: `presentation` });
  }
}
export {
  ln as a,
  ne as c,
  ce as d,
  oe as f,
  sn as i,
  re as l,
  zn as n,
  ae as o,
  jn as r,
  le as s,
  $ as t,
  se as u,
};
